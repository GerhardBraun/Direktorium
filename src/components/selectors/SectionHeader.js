import React, { useMemo, useState } from 'react';
import { getValue } from '../dataHandlers/GetValue.js';
import { getExcludedHours } from '../dataHandlers/ExcludedHours.js';
import { setLocalStorage } from '../utils/PersonalSettings.js';
import { resolveReference } from '../dataHandlers/TextFormatter.js';

const SectionHeader = ({
    title,
    field: provField,   // wird unten ggf. zu field umgedeutet (Invitatorium: psalm1 → ant0)
    askContinuous,
    onSelectHour,
    texts,
    hour,
    addDebugLog,
    selectedSource,
    prefSollemnity,
    userPrefs,   // Auswahl des Nutzers innerhalb der Hore (s. defaultUserPrefs in Direktorium.js)
    setPref,     // setPref('comm', 1) ändert einen einzelnen Wert in userPrefs
    userPrefLatin,
    userPrefLanguage,
    ommitConfiteor,
    showCantMarkers,
    setUserPrefLatin,
    setUserPrefLanguage,
    setShowCantMarkers,
    setOmmitConfiteor,
}) => {
    const [pressTimer, setPressTimer] = useState(null);
    const rank = texts?.rank || { wt: 0, date: 0 };
    const isTSN = ["terz", "sext", "non"].includes(hour);

    // Prüfe, ob Terz/Sext/Non identische Psalmodie haben
    const isIdenticalTerzSext = useMemo(() => {
        if (!isTSN || title !== 'PSALMODIE')
            return false;

        const getValueTS = (hour, field) => {
            return getValue({
                hour, field,
                season: texts?.season,
                texts,
                selectedSource,
                prefSollemnity,
                userPrefs: { ...userPrefs, komplet: 'wt' }, // komplet nicht relevant für TSN
                userPrefLanguage: ''
            })
        };

        // Vergleiche relevante Felder zwischen Terz und Sext
        const fieldsToCompare = ['ant0', 'ant1', 'psalm1'];

        for (const fieldToCheck of fieldsToCompare) {
            // Wenn ein Wert unterschiedlich ist, sind sie nicht identisch
            if (getValueTS('terz', fieldToCheck) !== getValueTS('sext', fieldToCheck))
                return false;
        }
        return true;
    }, [isTSN, title, texts, selectedSource, prefSollemnity, userPrefs]);

    // Prüfe, ob mindestens einer der für diese Psalmodie vorgesehenen Psalmen
    // (normalerweise 3, in Invitatorium und Komplet 1 bzw. ggf. 2)
    // Cant-Marker enthält; nur dann lohnt sich der cant-Schnellschalter (s. showCantToggle unten).
    const hasAnnotatedPsalm = useMemo(() => {
        if (title !== 'PSALMODIE') return true;

        // Prüft dieselbe sprachspezifisch aufgelöste Textvariante, die formatPsalm auch tatsächlich
        // anzeigt (psalm[text+userPrefLanguage] || psalm.text) – nicht immer nur den deutschen Text.
        const psalmHasMarkers = (ref) => {
            const psalm = resolveReference(ref);
            return !!(psalm?.[`text${userPrefLanguage}`] || psalm?.text)?.includes('|');
        };

        if (hour === 'invitatorium') {
            if (!texts?.invitatorium?.psalms?.includes(userPrefs.inv)) return false;
            return psalmHasMarkers(userPrefs.inv);
        }

        const getValuePs = (field) => getValue({
            hour, field,
            season: texts?.season,
            texts, selectedSource, prefSollemnity, userPrefs,
            userPrefLanguage: ''
        });

        return [1, 2, 3].some(num => {
            const psalmRef = getValuePs(`psalm${num}`);
            return psalmRef && psalmHasMarkers(psalmRef);
        });
    }, [title, hour, texts, selectedSource, prefSollemnity, userPrefs, userPrefLanguage]);

    //  VERSIKEL-Header immer ohne Buttons
    if (title === 'VERSIKEL' ||
        // In den Kleinen Horen wird RESPONSORIUM in VERSIKEL umbenannt
        (isTSN && title === 'RESPONSORIUM'))
        return <h2 className="prayer-heading" aria-hidden="true">VERSIKEL</h2>;

    // Psalmauswahl: Header ohne Titel direkt vor dem betreffenden Psalm (field = psalm1/2/3),
    // nur mit den Buttons zur Wahl zwischen den Psalmen in psalmSelection.
    // userPrefs.alternativePsalms enthält den Index des gewählten Eintrags (0 = erster Eintrag = Standard).
    // Weitere Fälle können hier mit ihrem psalmSelection-Array nachgetragen werden.
    // ACHTUNG: Die Verarbeitung von userPrefs.alternativePsalms-Werten > 1 ist in GetValue.js noch nicht implementiert, da es bisher keinen betreffenden Fall gibt.
    if (title === 'psalmSelector') {
        let psalmSelection = [];

        // Commune für die Verstorbenen (Ged der Verst oder Allerseelen):
        // in den Laudes wahlweise Ps 150 statt Ps 146
        if (hour === 'laudes' && provField === 'psalm3'
            && (prefSollemnity === 'verst' || texts?.date?.mmdd === '11-02'))
            psalmSelection = ['Ps 146', 'Ps 150'];

        if (!psalmSelection.length) return null;

        const num = provField.replace('psalm', '');
        return (
            // ab dem 2. Psalm: mt-6 übernimmt den Abstand zum vorhergehenden Psalm;
            // -mb-4 hebt das mt-6 der folgenden Antiphon weitgehend auf (Margins fallen zusammen),
            // damit die Auswahl dicht über der Antiphon steht
            // (die 1. Antiphon hat kein mt-6, deshalb dort kein Ausgleich)
            <h2 className={`prayer-heading ${num !== '1' ? 'mt-6 -mb-4' : ''}`} aria-hidden="true">
                <span className="inline-block font-normal text-[0.85em]">
                    {`Auswahl für den ${num}. Psalm:   `}
                    {psalmSelection.map((psalmLabel, index) => (
                        <React.Fragment key={psalmLabel}>
                            {index > 0 && " | "}
                            <button
                                onClick={() => setPref('alternativePsalms', index)}
                                className={userPrefs.alternativePsalms === index ? 'underline' : ''}
                            >
                                {psalmLabel}
                            </button>
                        </React.Fragment>
                    ))}
                </span>
            </h2>
        );
    }
    // Header ohne Titel wird nur für die Psalmwahl im Verstorbenen-Commune gebraucht
    if (!title) return null;

    const checkSources = (field) => {
        const hasEig = texts[hour][selectedSource]?.[field];
        const hasWt = texts[hour].wt?.[field];
        // alternative Psalmen an Aschermittwoch und Gründonnerstag (Fr der III. Woche)
        const hasAltPsalms = !!texts[hour].alt?.[field];
        // labelCommN enthält zugleich die Button-Beschriftung des jeweiligen Commune
        // (nie leer dank Rückfallwert '1'/'2'), sonst undefined
        const labelComm1 = texts[hour][selectedSource]?.com1?.[field]
            && ((hour === 'vesper' && rank?.hasErsteVesper && texts?.vesper?.commButton)
                ? texts.vesper.commButton
                : texts.laudes[selectedSource]?.com1?.button || '1');
        const labelComm2 = texts[hour][selectedSource]?.com2?.[field]
            && (texts.laudes[selectedSource]?.com2?.button || '2');

        const wtRankToCompare = hour === 'vesper' ? Math.ceil(rank.wt) : rank.wt
        // Schalter für Commune-Auswahl wird nur angezeigt, wenn eine Heiligenfeier begangen wird
        const showComm = wtRankToCompare === 0 || rank.date > wtRankToCompare;

        return {
            hasEig, hasWt, hasAltPsalms,
            labelComm1, labelComm2,
            isSaintCelebrated: showComm,
            showComm: !hasEig && hasWt && labelComm1 && showComm,
            showBothComm: labelComm1 && labelComm2
        };
    };

    const getTitle = () => {
        const replaceTitleMap = {
            'PSALMODIE': { 'vigil': 'CANTICA' },
            'BITTEN': { 'vesper': 'FÜRBITTEN' },
            'VATERUNSER': {
                'vigil': 'TE DEUM',
                'lesehore': 'TE DEUM',
            }
        };
        return replaceTitleMap?.[title.toUpperCase()]?.[hour]?.toUpperCase()
            || title.toUpperCase();
    }

    const handleLanguageToggle = () => {
        const newIndex = languages.indexOf(userPrefLanguage) !== 0
            ? 0 : 1;
        const newLanguage = languages[newIndex];
        setUserPrefLatin(newLanguage === '_lat');
        setUserPrefLanguage(newLanguage);
    };

    const handleLongPress = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setUserPrefLatin(false);
        setUserPrefLanguage('');
    };

    const handlePressStart = (e) => {
        let triggered = false;
        const timer = setTimeout(() => {
            triggered = true;
            setUserPrefLatin(false);
            setUserPrefLanguage('');
        }, 800);
        setPressTimer({ timer, getTriggered: () => triggered });
    };

    const handlePressEnd = (e) => {
        e.preventDefault();
        if (pressTimer) {
            clearTimeout(pressTimer.timer);
            setPressTimer(null);
            if (!pressTimer.getTriggered())
                handleLanguageToggle();
        }
    };

    const pressHandlers = {
        onMouseDown: handlePressStart,
        onMouseUp: handlePressEnd,
        onContextMenu: handleLongPress,
        style: {
            userSelect: 'none',
            WebkitUserSelect: 'none',
            WebkitTouchCallout: 'none'
        }
    };


    const field = (hour === 'invitatorium' && provField === 'psalm1')
        ? 'ant0' : provField;
    const isCommemoration = rank?.isCommemoration || false
    const { hasEig, hasWt, hasAltPsalms, labelComm1, labelComm2,
        isSaintCelebrated, showComm, showBothComm } = checkSources(field);

    const isPsalmodie = title === 'PSALMODIE' && !['invitatorium', 'komplet'].includes(hour);
    // cant-Schnellschalter: bei jeder Psalmodie-Überschrift (auch Invitatorium/Komplet, anders als isPsalmodie
    // oben, das dort wegen anderer, nicht zutreffender Buttons bewusst ausschließt) sowie den drei
    // singbaren Canticum-Überschriften – bei Psalmodie nur, wenn wenigstens einer der vorgesehenen
    // Psalmen tatsächlich Cant-Marker enthält (s. hasAnnotatedPsalm oben)
    const showCantToggle = (title === 'PSALMODIE' && hasAnnotatedPsalm)
        || ['BENEDICTUS', 'MAGNIFICAT', 'NUNC DIMITTIS'].includes(title);
    const isPsalmsWt = isPsalmodie && userPrefs.psalmsWt;

    // Gedenktage mit erweiterten Eigentexten - Merkmal: 'LuV' bzw. 'TSN' im farbe-Feld
    // (wie in GetValue.js): Die betreffenden Horen werden wie bei einem Fest behandelt
    // Ternär statt &&: im Nein-Fall undefined (nicht false), damit ?.includes() unten greift
    const isMemorialWithEig = rank.date < 3 ? texts?.laudes?.[selectedSource]?.farbe : undefined;
    // Gedenktage mit Eigentexten für Laudes und Vesper (LuV):
    const isMemorialWithLuV = isMemorialWithEig?.includes('LuV') && ['laudes', 'vesper'].includes(hour);
    // Gedenktage mit Eigentexten für die Kleinen Horen (Barnabas und Schutzengel):
    const isMemorialWithTSN = isMemorialWithEig?.includes('TSN') && isTSN && !isPsalmodie;

    // Psalmen-Schalter „Comm | Wt“ (s. doc/Klärung Psalmodie und Commune.md, E1–E4):
    // An Hochfesten, Festen (auch in der Ersten Vesper) und LuV-Gedenktagen ist der Wt ausgeschlossen;
    // gibt es keine eigenen Psalmen, werden die des Commune genommen –
    // statt dieser kann man auch beim Vierwochenpsalter bleiben.
    // Eigene Psalmen können dagegen nicht durch den Wt ersetzt werden.
    // Nur Lesehore, Laudes und Vesper; in den Kleinen Horen gilt „ErgPs | Wt“ bzw. ganz vom Wt.
    // Laudes: immer die Festpsalmen aus sollemnitiesData (Ps 63, Dan 3, Ps 149) –
    // für beide Commune gleich, daher nur „Comm | Wt“ ohne labelCommN;
    // die Wahl entfällt in den Sonntagslaudes (Ps 63 oder 118 als 1. Psalm):
    // bei Ps 63 wären es dieselben Psalmen, Ps 118 ist dann für die Kleinen Horen vorgesehen.
    // Bei prefSollemnity wird gerade das Commune statt des Wt gewählt: kein Psalmen-Schalter
    // (bei zwei Commune bleibt die Wahl Comm 1 | Comm 2 über den allgemeinen Commune-Schalter).
    const isPsalmsCommLaudes = hour === 'laudes'
        && ![63, 118].includes(texts?.laudes?.wt?.psalm1);
    const showPsalmsWt = isPsalmodie && hasWt && !hasEig && !prefSollemnity
        && ((rank.date > 2 && isSaintCelebrated)
            || isMemorialWithLuV
            || (hour === 'vesper' && rank?.hasErsteVesper))
        && (isPsalmsCommLaudes
            || (['lesehore', 'vesper'].includes(hour) && labelComm1))
    const showInclAnt = isPsalmodie && !prefSollemnity &&
        !(texts[hour][selectedSource]?.ant0 || texts[hour][selectedSource]?.ant1);
    const showContinuous = askContinuous && hour === 'lesehore' && !isCommemoration
        && ((hasEig && hasWt)
            // Allerseelen:
            || (texts?.date?.mmdd === '11-02' && !prefSollemnity)
            // Wochentagslesung, die an Hochfesten gesichert worden ist:
            || texts.lesehore?.continuous);
    const isErsteLesung = field.startsWith('les_text') && hour === 'lesehore';
    const isLesung = field.includes('_text') && hour === 'lesehore';
    const isContinuous = isLesung && userPrefs.continuous;
    const showErgPs = isTSN && isPsalmodie
        && !rank?.useComplementaryPsalms
        && !(['kirchw', 'soll'].includes(prefSollemnity) || rank.date === 5);
    const showErgPsWt = isTSN && isPsalmodie
        && rank?.useComplementaryPsalms;
    const showTSN = isTSN && ['HYMNUS', 'PSALMODIE', 'KURZLESUNG'].includes(title)
        && !(isPsalmodie && isIdenticalTerzSext && !userPrefs.ergPs);
    // Bestimme ausgeschlossene Horen für TSN basierend auf Ergänzungspsalmodie
    const excludedHours = getExcludedHours(texts, userPrefs, title);
    const showLongformToggle = ["RESPONSORIUM", "BITTEN"].includes(title) && ['erstev', 'laudes', 'vesper', 'komplet'].includes(hour);
    const isGoodFriday = texts?.swd?.combined === 'q-6-5' && hour === 'vesper';
    const allSouls = texts?.date?.mmdd === '11-02' && texts?.dayOfWeek > 0;
    const showAltPsalms = hasAltPsalms && isPsalmodie;

    const invPsalms = (hour === 'invitatorium' && title === 'PSALMODIE')
        ? texts?.invitatorium?.psalms : null;
    // Standardmäßig kann für das Invitatorium aus folgenden vier Psalmen frei gewählt werden:
    let invPsalmsToShow = [95, 100, 67, 24];
    const sequenceInv = JSON.parse(localStorage.getItem('sequenceInv')) || [95, 100, 24, 67, 67, 100, 24];
    let todayInv = sequenceInv[texts.dayOfWeek];
    // Wenn durch die Auswahl der Zuordnung gemäß Benediktinischem Antiphonale
    // ein anderer Psalm an der Reihe ist (81, 29, 46, 8),
    // wird dieser invPsalmsTo hinzugefügt, damit er auswählbar ist.
    if (!invPsalmsToShow.includes(todayInv)) invPsalmsToShow.push(todayInv);


    // Hole die gewählten Sprachen aus localStorage
    const languages = JSON.parse(localStorage.getItem('languages')) || ["", "_lat"];

    // Sprachwahl-Button anzeigen?
    let showLanguageToggle = !languages.includes('aus');
    if (['SCHULDBEKENNTNIS', 'VERGEBUNGSBITTE', 'RESPONSORIUM', 'VÄTERLESUNG'].includes(title)
        || (hour === 'invitatorium' && title === 'PSALMODIE')
        || (hour === 'lesehore' && /^(les_|resp|patr_)/.test(field))
        || (isTSN && title === 'ORATION')
    ) showLanguageToggle = false
    else if (title === 'HYMNUS' && showLanguageToggle && hour !== 'komplet')
        showLanguageToggle = localStorage.getItem('ommitOpening') === 'true' ? true : false

    // Prüfe, ob Commune übersprungen werden soll
    // an Gedenktagen: Lesehore (außer Hymnus und Oration), Psalmodie in Laudes/Vesper und Kleine Horen vom Wt –
    // außer an LuV-Gedenktagen (Laudes/Vesper) und Gedenktagen mit eigenen TSN-Texten:
    // diese Horen werden wie an einem Fest gebetet (Eigentexte oder Commune);
    // Ant und Psalmen der Kleinen Horen bleiben auch dann vom Wt (s. isMemorialWithTSN und die nächste Abfrage)
    let skipCommune = false;
    if (rank.date < 3 && ( // an Gedenktagen
        (hour === 'lesehore' && // Lesehore: nur Hymnus und Oration ggf. Commune
            !field.startsWith('hymn_') && field !== 'oration'
        ) || (
            ['laudes', 'vesper'].includes(hour) &&  // Laudes/Vesper Psalmodie
            isPsalmodie && !isMemorialWithLuV
        )
        || (isTSN && !isMemorialWithTSN) // Kleinen Horen: ganz vom Wt
    )) skipCommune = true;

    if (rank.date < 5 &&    // an Festen: Ant und Ps in Kleinen Horen vom Wt
        isTSN && isPsalmodie
    ) skipCommune = true;

    if (isCommemoration) skipCommune = true

    if (prefSollemnity === 'soll' ||   // Hochfeste und 1. Vesper: Comm, wenn nicht eigen, nicht vom Wt
        (rank?.hasErsteVesper && hour === 'vesper'))
        skipCommune = false;

    if (prefSollemnity && !showBothComm && !isErsteLesung)
        skipCommune = true

    if (prefSollemnity === 'kirchw' || prefSollemnity === 'verst' || allSouls)
        skipCommune = true

    if (["ERÖFFNUNG", "SCHULDBEKENNTNIS", "HYMNUS", "RESPONSORIUM", "ABSCHLUSS"].includes(title))
        skipCommune = true;

    // einfacher Header ohne Buttons
    if (!invPsalms && !showComm && !showLanguageToggle && !showLongformToggle
        && !showPsalmsWt && !showContinuous && !showTSN && !showErgPs && !showErgPsWt && !showAltPsalms
        && !showCantToggle
        && !["SCHULDBEKENNTNIS"].includes(title)
    ) return <h2
        className="prayer-heading"
        aria-hidden="true">
        {getTitle()}
    </h2>;

    const ButtonGroup = ({ children }) => (
        <span className="inline-block font-normal text-[0.85em]"        >
            {children}
        </span>
    );

    const doUnderline = (key) => {
        return languages[1] !== '_lat' && userPrefLanguage === languages[key] ? 'underline' : ''
    }

    // Bestimme die Anzeigetexte für die Sprachen
    const label = (key) => {
        const labels = { '': 'Stb', '_lat': 'lat.', '_neu': 'neu', '_ben': 'Ben' };
        // Sonderfall für Stb/Latein: (dt./lat.)
        if (!key && !languages[0] && languages[1] === '_lat')
            return 'dt.'
        else return labels[languages[key]] || 'unbekannt'
    };

    return (
        <h2 className="prayer-heading inline-block space-x-3 items-baseline"
            aria-hidden="true">
            <span className="inline-block">{getTitle()}</span>
            {title === "SCHULDBEKENNTNIS" && (
                <ButtonGroup>
                    <button
                        onClick={() => {
                            setOmmitConfiteor(!ommitConfiteor);
                            setLocalStorage('ommitConfiteor', String(!ommitConfiteor));
                        }}
                    >
                        {ommitConfiteor ? '(anzeigen)' : '(verbergen)'}
                    </button>
                </ButtonGroup>)}
            {(showLanguageToggle || showCantToggle) && (
                <ButtonGroup>
                    {"("}
                    {showLanguageToggle && (
                        <>
                            {!userPrefLanguage && languages[0] && (
                                <>
                                    <span className={'underline'}>
                                        {"Stb"}
                                    </span>
                                    {"/"}
                                </>
                            )}
                            <button
                                {...pressHandlers}
                                className={doUnderline(0)}
                            >
                                {label(0)}
                            </button>
                            <button {...pressHandlers}>
                                {"/"}
                            </button>
                            <button
                                {...pressHandlers}
                                className={doUnderline(1)}
                            >
                                {label(1)}
                            </button>
                        </>
                    )}
                    {showLanguageToggle && showCantToggle && " | "}
                    {showCantToggle && (
                        <button
                            onClick={() => setShowCantMarkers(!showCantMarkers)}
                            className={showCantMarkers ? 'underline' : 'line-through'}
                        >
                            cant
                        </button>
                    )}
                    {")"}
                </ButtonGroup>
            )}
            {showLongformToggle && (
                <ButtonGroup>
                    <button
                        onClick={() => {
                            setPref('longform', false);
                            if (!isGoodFriday) setLocalStorage('prefLongform', 'false');
                        }}
                        className={!userPrefs.longform ? 'underline' : ''}
                    >
                        {isGoodFriday ? 'aus dem Stundenbuch' : 'kurz'}
                    </button>
                    {" | "}
                    <button
                        onClick={() => {
                            setPref('longform', true);
                            if (!isGoodFriday) setLocalStorage('prefLongform', 'true');
                        }}
                        className={userPrefs.longform ? 'underline' : ''}
                    >
                        {isGoodFriday ? 'Messbuch' : 'lang'}
                    </button>
                </ButtonGroup>
            )}
            {showPsalmsWt && (
                <ButtonGroup>
                    {/* Comm-Knöpfe setzen comm für die ganze Hore und psalmsWt = false;
                        Wt setzt nur psalmsWt (übrige Abschnitte bleiben beim Commune) */}
                    {isPsalmsCommLaudes ? (
                        // Laudes: Festpsalmen für beide Commune gleich;
                        // eine Wahl von Comm 2 bleibt erhalten, nach „Wt“ (comm = 0) gilt wieder Comm 1
                        <button
                            onClick={() => {
                                setPref('psalmsWt', false)
                                if (userPrefs.comm === 0) setPref('comm', 1)
                            }}
                            className={!userPrefs.psalmsWt ? 'underline' : ''}
                        >
                            Comm
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={() => {
                                    setPref('comm', 1)
                                    setPref('psalmsWt', false)
                                }}
                                className={(!userPrefs.psalmsWt && userPrefs.comm !== 2) ? 'underline' : ''}
                            >
                                Comm {labelComm1}
                            </button>
                            {showBothComm && (
                                <>
                                    {"  |  "}
                                    <button
                                        onClick={() => {
                                            setPref('comm', 2)
                                            setPref('psalmsWt', false)
                                        }}
                                        className={(!userPrefs.psalmsWt && userPrefs.comm === 2) ? 'underline' : ''}
                                    >
                                        {labelComm2}
                                    </button>
                                </>
                            )}
                        </>
                    )}
                    {" | "}
                    <button
                        onClick={() => setPref('psalmsWt', true)}
                        className={userPrefs.psalmsWt ? 'underline' : ''}
                    >
                        Wt
                    </button>
                    {showInclAnt && (
                        <>{" ("}
                            <button
                                onClick={() => {
                                    if (userPrefs.psalmsWt === 'inclAnt')
                                        setPref('psalmsWt', true)
                                    else setPref('psalmsWt', 'inclAnt')
                                }}
                                className={(userPrefs.psalmsWt === 'inclAnt') ? 'underline' : ''}
                            >
                                auch Ant)
                            </button>
                        </>
                    )}
                </ButtonGroup>
            )}
            {showErgPs && (
                <ButtonGroup>
                    <button
                        onClick={() => setPref('ergPs', false)}
                        className={!userPrefs.ergPs ? 'underline' : ''}
                    >
                        {`${allSouls || prefSollemnity === 'verst' ? 'Comm Verst' : 'vom Wt'}`}
                    </button>
                    {" | "}
                    <button
                        onClick={() => setPref('ergPs', true)}
                        className={userPrefs.ergPs ? 'underline' : ''}
                    >
                        ErgPs
                    </button>
                </ButtonGroup>
            )}
            {showContinuous && (
                <ButtonGroup>
                    <button
                        onClick={() => setPref('continuous', false)}
                        className={!userPrefs.continuous ? 'underline' : ''}
                    >
                        Eigenlesung
                    </button>
                    {" | "}
                    <button
                        onClick={() => setPref('continuous', true)}
                        className={userPrefs.continuous ? 'underline' : ''}
                    >
                        {`${isErsteLesung ? 'Bahnlesung' : 'vom Wt'}`}
                    </button>
                </ButtonGroup>
            )}
            {showComm && !skipCommune && !showPsalmsWt && (
                <ButtonGroup>
                    <button
                        onClick={() => {
                            setPref('comm', 1)
                            if (isPsalmodie)
                                setPref('psalmsWt', false)
                            if (isContinuous)
                                setPref('continuous', false)
                        }}
                        className={(!isPsalmsWt && !isContinuous &&
                            (userPrefs.comm === 1 || (userPrefs.comm === 0 && prefSollemnity === 'soll'))
                        ) ? 'underline' : ''}
                    >
                        Comm {labelComm1}
                    </button>
                    {showBothComm && (
                        <>
                            {"  |  "}
                            <button
                                onClick={() => {
                                    setPref('comm', 2)
                                    if (isPsalmodie)
                                        setPref('psalmsWt', false)
                                    if (isContinuous)
                                        setPref('continuous', false)
                                }}
                                className={(!isPsalmsWt && !isContinuous &&
                                    userPrefs.comm === 2) ? 'underline' : ''}
                            >
                                {labelComm2}
                            </button>

                        </>
                    )}
                    {/* bei prefSollemnity wird gerade das Commune statt des Wt gewählt:
                        kein Wt-Knopf (Ausnahme: Bahnlesung bei der ersten Lesung der Lesehore) */}
                    {(!prefSollemnity || isErsteLesung) && (
                        <>
                            {" | "}
                            <button
                                onClick={() => {
                                    if (isPsalmodie)
                                        setPref('psalmsWt', true)
                                    else if (isLesung)
                                        setPref('continuous', true)
                                    else {
                                        // Wt gilt für die ganze Hore, auch für die Psalmodie
                                        // (nur in Lesehore, Laudes, Vesper; in den Kleinen Horen
                                        // steuert psalmsWt dagegen „ErgPs | Wt“)
                                        setPref('comm', 0)
                                        if (['lesehore', 'laudes', 'vesper'].includes(hour))
                                            setPref('psalmsWt', true)
                                    }
                                }}
                                className={(isPsalmsWt || isContinuous || userPrefs.comm === 0) ? 'underline' : ''}
                            >
                                {`${isErsteLesung ? 'Bahnlesung' : 'Wt'}`}
                            </button>
                        </>
                    )}
                    {showInclAnt && (
                        <>
                            {" ("}
                            <button
                                onClick={() => {
                                    if (userPrefs.psalmsWt === 'inclAnt')
                                        setPref('psalmsWt', true)
                                    else setPref('psalmsWt', 'inclAnt')
                                }}
                                className={(userPrefs.psalmsWt === 'inclAnt') ? 'underline' : ''}
                            >
                                auch Ant)
                            </button>
                        </>
                    )}
                </ButtonGroup>
            )}
            {showTSN && (
                <ButtonGroup>
                    {['terz', 'sext', 'non'].map((hourName, index) => {
                        const isExcluded = excludedHours.includes(hourName);
                        return (
                            <React.Fragment key={hourName}>
                                {index > 0 && " | "}
                                <button
                                    onClick={() => !isExcluded && onSelectHour(hourName)}
                                    disabled={isExcluded}
                                    className={`${hour === hourName ? 'underline' : ''}
                                    ${isExcluded ? 'text-gray-400 cursor-not-allowed' : ''}`
                                    }
                                >
                                    {hourName[0].toUpperCase() + hourName.slice(1)}
                                </button>
                            </React.Fragment>
                        );
                    })}
                </ButtonGroup>
            )}
            {showErgPsWt && (
                <ButtonGroup>
                    <button
                        onClick={() => setPref('psalmsWt', false)}
                        className={!userPrefs.psalmsWt ? 'underline' : ''}
                    >
                        ErgPs
                    </button>
                    {" | "}
                    <button
                        onClick={() => setPref('psalmsWt', true)}
                        className={userPrefs.psalmsWt ? 'underline' : ''}
                    >
                        Wt
                    </button>
                </ButtonGroup>
            )}
            {showAltPsalms && (
                <ButtonGroup>
                    <button
                        onClick={() => setPref('alternativePsalms', 0)}
                        className={userPrefs.alternativePsalms === 0 ? 'underline' : ''}
                    >
                        vom Wt
                    </button>
                    {" | "}
                    <button
                        onClick={() => setPref('alternativePsalms', 1)}
                        className={userPrefs.alternativePsalms === 1 ? 'underline' : ''}
                    >
                        Fr der III. Woche
                    </button>
                </ButtonGroup>
            )}
            {invPsalms && (
                <ButtonGroup>
                    {invPsalmsToShow.map((psalmNumber, index) => {
                        const isAvailable = invPsalms?.includes(psalmNumber);
                        return (
                            <React.Fragment key={psalmNumber}>
                                {index > 0 && " | "}
                                <button
                                    onClick={() => isAvailable && setPref('inv', psalmNumber)}
                                    disabled={!isAvailable}
                                    className={`${userPrefs.inv === psalmNumber ? 'underline' : ''}
                                ${!isAvailable ? 'text-gray-400 cursor-not-allowed' : ''}`}
                                >
                                    {psalmNumber === 95 ? `Ps ${psalmNumber}` : psalmNumber}
                                </button>
                            </React.Fragment>
                        );
                    })}
                </ButtonGroup>
            )}
        </h2 >
    );
};

export default SectionHeader;