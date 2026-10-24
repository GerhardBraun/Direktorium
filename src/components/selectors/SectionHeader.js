import React, { useMemo, useState } from 'react';
import { getValue } from '../dataHandlers/GetValue.js';
import { getExcludedHours } from '../dataHandlers/ExcludedHours.js';
import { setLocalStorage } from '../utils/PersonalSettings.js';
import { resolveReference } from '../dataHandlers/TextFormatter.js';

const SectionHeader = ({
    title,
    provField,
    askContinuous,
    onSelectHour,
    texts,
    hour,
    addDebugLog,
    prefSource,
    prefSollemnity,
    localPrefKomplet,
    localPrefComm,
    localPrefPsalmsWt,
    localPrefErgPs,
    localPrefContinuous,
    localPrefInv,
    localPrefLatin,
    localPrefLanguage,
    localPrefLongform,
    ommitConfiteor,
    showCantMarkers,
    setLocalPrefLatin,
    setLocalPrefLanguage,
    setShowCantMarkers,
    setLocalPrefInv,
    setLocalPrefPsalmsWt,
    setLocalPrefErgPs,
    setLocalPrefContinuous,
    setLocalPrefComm,
    setLocalPrefLongform,
    setOmmitConfiteor,
    alternativePsalms,
    setAlternativePsalms
}) => {
    const [pressTimer, setPressTimer] = useState(null);
    const rank = texts?.rank || { wt: 0, date: 0 };

    // Prüfe ob Terz/Sext/Non identische Psalmodie haben
    const isIdenticalTerzSext = useMemo(() => {
        if (!["terz", "sext", "non"].includes(hour) || title !== 'PSALMODIE')
            return false;

        const getValueTS = (hour, field) => {
            return getValue({
                hour, field,
                season: texts?.season,
                texts,
                prefSource,
                prefSollemnity,
                localPrefKomplet: 'wt', // nicht relevant für TSN
                localPrefComm,
                localPrefPsalmsWt,
                localPrefErgPs,
                localPrefContinuous,
                localPrefLanguage: ''
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
    }, [hour, title, texts, prefSource, prefSollemnity, localPrefComm,
        localPrefPsalmsWt, localPrefErgPs, localPrefContinuous]);

    // Prüft, ob mindestens einer der für diese Psalmodie vorgesehenen Psalmen (normalerweise 3,
    // in Invitatorium und Komplet 1 bzw. ggf. 2) Cant-Marker enthält; nur dann lohnt sich der
    // cant-Schnellschalter (s. showCantToggle unten).
    const hasAnnotatedPsalm = useMemo(() => {
        if (title !== 'PSALMODIE') return true;

        // Prüft dieselbe sprachspezifisch aufgelöste Textvariante, die formatPsalm auch tatsächlich
        // anzeigt (psalm[text+localPrefLanguage] || psalm.text) – nicht immer nur den deutschen Text.
        const psalmHasMarkers = (ref) => {
            const psalm = resolveReference(ref);
            return !!(psalm?.[`text${localPrefLanguage}`] || psalm?.text)?.includes('|');
        };

        if (hour === 'invitatorium') {
            if (!texts?.invitatorium?.psalms?.includes(localPrefInv)) return false;
            return psalmHasMarkers(localPrefInv);
        }

        const getValuePs = (field) => getValue({
            hour, field,
            season: texts?.season,
            texts, prefSource, prefSollemnity, localPrefKomplet,
            localPrefComm, localPrefPsalmsWt, localPrefErgPs, localPrefContinuous,
            localPrefLanguage: ''
        });

        return [1, 2, 3].some(num => {
            const psalmRef = getValuePs(`psalm${num}`);
            return psalmRef && psalmHasMarkers(psalmRef);
        });
    }, [title, hour, texts, prefSource, prefSollemnity, localPrefKomplet,
        localPrefComm, localPrefPsalmsWt, localPrefErgPs, localPrefContinuous, localPrefInv, localPrefLanguage]);

    //  VERSIKEL-Header immer ohne Buttons
    if (title === 'VERSIKEL' ||
        // In den Kleinen Horen wird RESPONSORIUM in VERSIKEL umbenannt
        (["terz", "sext", "non"].includes(hour) && title === 'RESPONSORIUM'))
        return <h2 className="prayer-heading" aria-hidden="true">VERSIKEL</h2>;

    // Psalmauswahl: Header ohne Titel direkt vor dem betreffenden Psalm (field = psalm1/2/3),
    // nur mit den Buttons zur Wahl zwischen den Psalmen in psalmSelection.
    // alternativePsalms enthält den Index des gewählten Eintrags (0 = erster Eintrag = Standard).
    // Weitere Fälle können hier mit ihrem psalmSelection-Array nachgetragen werden.
    // ACHTUNG: Die Verarbeitung von alternativePsalms-Werten > 1 ist in GetValue.js noch nicht implementiert, da es bisher keinen betreffenden Fall gibt.
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
                                onClick={() => setAlternativePsalms(index)}
                                className={alternativePsalms === index ? 'underline' : ''}
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
        const hasEig = texts[hour][prefSource]?.[field];
        const hasWt = texts[hour].wt?.[field];
        const hasAltPsalms = !!texts[hour].alt?.[field];
        const hasComm1 = texts[hour][prefSource]?.com1?.[field];
        const hasComm2 = texts[hour][prefSource]?.com2?.[field];
        const nameComm1 =
            (hour === 'vesper' && texts?.rank?.hasErsteVesper && texts?.vesper?.commButton)
                ? texts.vesper.commButton
                : texts.laudes[prefSource]?.com1?.button || '1';
        const nameComm2 = texts.laudes[prefSource]?.com2?.button || '2';

        const wtRankToCompare = hour === 'vesper' ? Math.ceil(rank.wt) : rank.wt
        const showSources = wtRankToCompare === 0 || rank.date > wtRankToCompare;

        return {
            hasEig, hasWt, hasAltPsalms,
            hasComm1, hasComm2,
            nameComm1, nameComm2,
            showSources: !hasEig && hasWt && hasComm1 && showSources,
            showBothComm: hasComm1 && hasComm2
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
        const newIndex = languages.indexOf(localPrefLanguage) !== 0
            ? 0 : 1;
        const newLanguage = languages[newIndex];
        setLocalPrefLatin(newLanguage === '_lat');
        setLocalPrefLanguage(newLanguage);
    };

    const handleLongPress = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setLocalPrefLatin(false);
        setLocalPrefLanguage('');
    };

    const handlePressStart = (e) => {
        let triggered = false;
        const timer = setTimeout(() => {
            triggered = true;
            setLocalPrefLatin(false);
            setLocalPrefLanguage('');
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
    const isCommemoration = texts?.rank?.isCommemoration || false
    const { hasEig, hasWt, hasAltPsalms, nameComm1, nameComm2,
        showSources, showBothComm } = checkSources(field);

    const isPsalmodie = title === 'PSALMODIE' && !['invitatorium', 'komplet'].includes(hour);
    // cant-Schnellschalter: bei jeder Psalmodie-Überschrift (auch Invitatorium/Komplet, anders als isPsalmodie
    // oben, das dort wegen anderer, nicht zutreffender Buttons bewusst ausschließt) sowie den drei
    // singbaren Canticum-Überschriften – bei Psalmodie nur, wenn wenigstens einer der vorgesehenen
    // Psalmen tatsächlich Cant-Marker enthält (s. hasAnnotatedPsalm oben)
    const showCantToggle = (title === 'PSALMODIE' && hasAnnotatedPsalm)
        || ['BENEDICTUS', 'MAGNIFICAT', 'NUNC DIMITTIS'].includes(title);
    const isPsalmsWt = isPsalmodie && localPrefPsalmsWt;
    const showPsalmsWt = hasWt && isPsalmodie
        && (hasEig || (hour === 'laudes' && texts?.rank?.useFeastPsalms && ![63, 118].includes(texts?.laudes?.wt?.psalm1)))
    const showInclAnt = isPsalmodie &&
        !(texts[hour][prefSource]?.ant0 || texts[hour][prefSource]?.ant1);
    const hasContinuous = hour === 'lesehore' && !!texts.lesehore?.continuous;
    const showContinuous = askContinuous && hour === 'lesehore' && !isCommemoration
        && (hasContinuous || (hasEig && hasWt));
    const isErsteLesung = field.startsWith('les_text') && hour === 'lesehore';
    const isLesung = field.includes('_text') && hour === 'lesehore';
    const isContinuous = isLesung && localPrefContinuous;
    const isTSN = ["terz", "sext", "non"].includes(hour);
    const showErgPs = isTSN && isPsalmodie
        && !texts?.rank?.useComplementaryPsalms
        && !(prefSollemnity === 'kirchw' || rank.date === 5);
    const showErgPsWt = isTSN && isPsalmodie
        && texts?.rank?.useComplementaryPsalms;
    const showTSN = isTSN && ['HYMNUS', 'PSALMODIE', 'KURZLESUNG'].includes(title)
        && !(isPsalmodie && isIdenticalTerzSext && !localPrefErgPs);
    // Bestimme ausgeschlossene Horen für TSN basierend auf Ergänzungspsalmodie
    const excludedHours = getExcludedHours(texts, localPrefErgPs, title);
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
    let skipCommune = false;
    if (rank.date < 3 && ( // an Gedenktagen
        (hour === 'lesehore' && // Lesehore: nur Hymnus und Oration ggf. Commune
            !field.startsWith('hymn_') && field !== 'oration'
        ) || (
            ['laudes', 'vesper'].includes(hour) &&  // Laudes/Vesper Psalmodie
            isPsalmodie && texts?.laudes?.oblig?.com1?.button !== 'Evang'
        )
        || isTSN // Kleinen Horen: ganz vom Wt
    )) skipCommune = true;

    if (rank.date < 5 &&    // an Festen: Ant und Ps in Kleinen Horen vom Wt
        isTSN && isPsalmodie
    ) skipCommune = true;

    if (isCommemoration) skipCommune = true

    if (prefSollemnity === 'soll' ||   // Hochfeste und 1. Vesper: Comm, wenn nicht eigen, nicht vom Wt
        (texts?.rank?.hasErsteVesper && hour === 'vesper'))
        skipCommune = false;

    if (prefSollemnity && !showBothComm && !isErsteLesung)
        skipCommune = true

    if (prefSollemnity === 'kirchw' || prefSollemnity === 'verst' || allSouls)
        skipCommune = true

    if (["ERÖFFNUNG", "SCHULDBEKENNTNIS", "HYMNUS", "RESPONSORIUM", "ABSCHLUSS"].includes(title))
        skipCommune = true;

    // einfacher Header ohne Buttons
    if (!invPsalms && !showSources && !showLanguageToggle && !showLongformToggle
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
        return languages[1] !== '_lat' && localPrefLanguage === languages[key] ? 'underline' : ''
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
                            {!localPrefLanguage && languages[0] && (
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
                            setLocalPrefLongform(false);
                            if (!isGoodFriday) setLocalStorage('prefLongform', 'false');
                        }}
                        className={!localPrefLongform ? 'underline' : ''}
                    >
                        {isGoodFriday ? 'aus dem Stundenbuch' : 'kurz'}
                    </button>
                    {" | "}
                    <button
                        onClick={() => {
                            setLocalPrefLongform(true);
                            if (!isGoodFriday) setLocalStorage('prefLongform', 'true');
                        }}
                        className={localPrefLongform ? 'underline' : ''}
                    >
                        {isGoodFriday ? 'Messbuch' : 'lang'}
                    </button>
                </ButtonGroup>
            )}
            {showPsalmsWt && (
                <ButtonGroup>
                    <button
                        onClick={() => setLocalPrefPsalmsWt(false)}
                        className={!localPrefPsalmsWt ? 'underline' : ''}
                    >
                        Ps eig
                    </button>
                    {" | "}
                    <button
                        onClick={() => setLocalPrefPsalmsWt(true)}
                        className={localPrefPsalmsWt ? 'underline' : ''}
                    >
                        vom Wt
                    </button>
                    {showInclAnt && (
                        <>{" ("}
                            <button
                                onClick={() => {
                                    if (localPrefPsalmsWt === 'inclAnt')
                                        setLocalPrefPsalmsWt(true)
                                    else setLocalPrefPsalmsWt('inclAnt')
                                }}
                                className={(localPrefPsalmsWt === 'inclAnt') ? 'underline' : ''}
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
                        onClick={() => setLocalPrefErgPs(false)}
                        className={!localPrefErgPs ? 'underline' : ''}
                    >
                        {`${allSouls || prefSollemnity === 'verst' ? 'Comm Verst' : 'vom Wt'}`}
                    </button>
                    {" | "}
                    <button
                        onClick={() => setLocalPrefErgPs(true)}
                        className={localPrefErgPs ? 'underline' : ''}
                    >
                        ErgPs
                    </button>
                </ButtonGroup>
            )}
            {showContinuous && (
                <ButtonGroup>
                    {(hasEig || hasContinuous) && (<button
                        onClick={() => setLocalPrefContinuous(false)}
                        className={!localPrefContinuous ? 'underline' : ''}
                    >
                        Eigenlesung
                    </button>
                    )}
                    {" | "}
                    <button
                        onClick={() => setLocalPrefContinuous(true)}
                        className={localPrefContinuous ? 'underline' : ''}
                    >
                        {`${isErsteLesung ? 'Bahnlesung' : 'vom Wt'}`}
                    </button>
                </ButtonGroup>
            )}
            {showSources && !skipCommune && (
                <ButtonGroup>
                    <button
                        onClick={() => {
                            setLocalPrefComm(1)
                            if (isPsalmodie)
                                setLocalPrefPsalmsWt(false)
                            if (isContinuous)
                                setLocalPrefContinuous(false)
                        }}
                        className={(!isPsalmsWt && !isContinuous &&
                            localPrefComm === 1) ? 'underline' : ''}
                    >
                        Comm {nameComm1}
                    </button>
                    {showBothComm && (
                        <>
                            {"  |  "}
                            <button
                                onClick={() => {
                                    setLocalPrefComm(2)
                                    if (isPsalmodie)
                                        setLocalPrefPsalmsWt(false)
                                    if (isContinuous)
                                        setLocalPrefContinuous(false)
                                }}
                                className={(!isPsalmsWt && !isContinuous &&
                                    localPrefComm === 2) ? 'underline' : ''}
                            >
                                {nameComm2}
                            </button>

                        </>
                    )}
                    {(!prefSollemnity || prefSollemnity) && (
                        <>
                            {" | "}
                            <button
                                onClick={() => {
                                    if (isPsalmodie)
                                        setLocalPrefPsalmsWt(true)
                                    else if (isLesung)
                                        setLocalPrefContinuous(true)
                                    else setLocalPrefComm(0)
                                }}
                                className={(isPsalmsWt || isContinuous || localPrefComm === 0) ? 'underline' : ''}
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
                                    if (localPrefPsalmsWt === 'inclAnt')
                                        setLocalPrefPsalmsWt(true)
                                    else setLocalPrefPsalmsWt('inclAnt')
                                }}
                                className={(localPrefPsalmsWt === 'inclAnt') ? 'underline' : ''}
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
                        onClick={() => setLocalPrefPsalmsWt(false)}
                        className={!localPrefPsalmsWt ? 'underline' : ''}
                    >
                        ErgPs
                    </button>
                    {" | "}
                    <button
                        onClick={() => setLocalPrefPsalmsWt(true)}
                        className={localPrefPsalmsWt ? 'underline' : ''}
                    >
                        Wt
                    </button>
                </ButtonGroup>
            )}
            {showAltPsalms && (
                <ButtonGroup>
                    <button
                        onClick={() => setAlternativePsalms(0)}
                        className={alternativePsalms === 0 ? 'underline' : ''}
                    >
                        vom Wt
                    </button>
                    {" | "}
                    <button
                        onClick={() => setAlternativePsalms(1)}
                        className={alternativePsalms === 1 ? 'underline' : ''}
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
                                    onClick={() => isAvailable && setLocalPrefInv(psalmNumber)}
                                    disabled={!isAvailable}
                                    className={`${localPrefInv === psalmNumber ? 'underline' : ''}
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