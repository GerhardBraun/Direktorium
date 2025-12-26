import React, { useMemo, useState } from 'react';
import { getValue } from '../dataHandlers/GetValue.js';
import { getExcludedHours } from '../dataHandlers/ExcludedHours.js';

const SectionHeader = ({
    title,
    provField,
    askContinuous,
    onSelectHour,
    texts,
    hour,
    addDebugLog,
    prefSrc,
    prefSollemnity,
    rank_wt,
    rank_date,
    localPrefComm,
    localPrefPsalmsWt,
    localPrefErgPs,
    localPrefContinuous,
    localPrefInv,
    localPrefLatin,
    localPrefLanguage,
    setLocalPrefLatin,
    setLocalPrefLanguage,
    setLocalPrefInv,
    setLocalPrefPsalmsWt,
    setLocalPrefErgPs,
    setLocalPrefContinuous,
    setLocalPrefComm
}) => {
    const [pressTimer, setPressTimer] = useState(null);

    // Prüfe ob Terz/Sext/Non identische Psalmodie haben
    const isIdenticalTerzSext = useMemo(() => {
        if (!["terz", "sext", "non"].includes(hour) || title !== 'PSALMODIE')
            return false;

        const getValueTS = (hour, field) => {
            return getValue({
                hour, field,
                season: texts?.season,
                texts,
                prefSrc,
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
    }, [hour, title, texts, prefSrc, prefSollemnity, localPrefComm,
        localPrefPsalmsWt, localPrefErgPs, localPrefContinuous]);

    if (["terz", "sext", "non"].includes(hour) && title === 'RESPONSORIUM')
        return <h2 className="prayer-heading">VERSIKEL</h2>;

    const checkSources = (field) => {
        const hasEig = texts[hour][prefSrc]?.[field];
        const hasWt = texts[hour].wt?.[field];
        const hasComm1 = texts[hour][prefSrc]?.com1?.[field];
        const hasComm2 = texts[hour][prefSrc]?.com2?.[field];
        const nameComm1 =
            (hour === 'vesper' && texts?.hasErsteVesper && texts?.vesper?.commButton)
                ? texts.vesper.commButton
                : texts.laudes[prefSrc]?.com1?.button || '1';
        const nameComm2 = texts.laudes[prefSrc]?.com2?.button || '2';

        const wtRankToCompare = (rank_wt === 2.4 && hour === 'vesper') ? 4 : rank_wt;
        const dateOverWt = rank_date > wtRankToCompare;

        return {
            hasEig, hasWt,
            hasComm1, hasComm2,
            nameComm1, nameComm2,
            showSources: !hasEig && hasWt && hasComm1 && rank_date > wtRankToCompare,
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
    const isCommemoration = texts?.isCommemoration || false
    const { hasEig, hasWt, nameComm1, nameComm2,
        showSources, showBothComm } = checkSources(field);

    const isPsalmodie = title === 'PSALMODIE' && !['invitatorium', 'komplet'].includes(hour);
    const isPsalmsWt = isPsalmodie && localPrefPsalmsWt;
    const showPsalmsWt = hasWt && isPsalmodie
        && (hasEig || (hour === 'laudes' && texts?.useFeastPsalms))
    const showInclAnt = isPsalmodie &&
        !(texts[hour][prefSrc]?.ant0 || texts[hour][prefSrc]?.ant1);
    const showContinuous = hasEig && hasWt && askContinuous
        && hour === 'lesehore' && !isCommemoration;
    const isErsteLesung = field.startsWith('les_text') && hour === 'lesehore';
    const isLesung = field.includes('_text') && hour === 'lesehore';
    const isContinuous = isLesung && localPrefContinuous;
    const isTSN = ["terz", "sext", "non"].includes(hour);
    const showTSN = isTSN && ['HYMNUS', 'PSALMODIE', 'KURZLESUNG'].includes(title)
        && !(isPsalmodie && isIdenticalTerzSext); // Neue Bedingung hinzugefügt
    const showErgPs = isTSN
        && isPsalmodie
        && !(prefSollemnity || rank_date === 5 || rank_wt === 5);
    // Bestimme ausgeschlossene Horen für TSN basierend auf Ergänzungspsalmodie
    const excludedHours = getExcludedHours(texts, localPrefErgPs, title);

    const invPsalms = (hour === 'invitatorium' && title === 'PSALMODIE')
        ? texts?.invitatorium?.psalms : null;
    let invPsalmsToShow = [95, 100, 67, 24];
    const sequenceInv = JSON.parse(localStorage.getItem('sequenceInv')) || [95, 100, 24, 67, 67, 100, 24];
    let todayInv = sequenceInv[texts.dayOfWeek];
    if (!invPsalmsToShow.includes(todayInv)) invPsalmsToShow.push(todayInv);


    // Hole die gewählten Sprachen aus localStorage
    const languages = JSON.parse(localStorage.getItem('languages')) || ["", "_lat"];

    // Sprachwahl-Button anzeigen?
    let showLanguageToggle = !languages.includes('aus');
    if (title === 'VERSIKEL'
        || (hour === 'invitatorium' && title === 'PSALMODIE')
        || (hour === 'lesehore' && /^(les_|resp|patr_)/.test(field))
        || (isTSN && title === 'ORATION')
    ) showLanguageToggle = false
    else if (title === 'HYMNUS' && showLanguageToggle)
        showLanguageToggle = localStorage.getItem('ommitOpening') === 'true' ? true : false

    // Prüfe, ob Commune übersprungen werden soll
    let skipCommune = false;
    if (rank_date < 3 && ( // an Gedenktagen
        (hour === 'lesehore' && // Lesehore: nur Hymnus und Oration ggf. Commune
            !field.startsWith('hymn_') && field !== 'oration'
        ) || (
            ['laudes', 'vesper'].includes(hour) &&  // Laudes/Vesper Psalmodie
            isPsalmodie && texts?.laudes?.oblig?.com1?.button !== 'Evang'
        )
        || ['terz', 'sext', 'non'].includes(hour) // Kleinen Horen: ganz vom Wt
    )) skipCommune = true;

    if (rank_date < 5 &&    // an Festen: Ant und Ps in Kleinen Horen vom Wt
        ['terz', 'sext', 'non'].includes(hour) && isPsalmodie
    ) skipCommune = true;

    if (isCommemoration) skipCommune = true

    if (prefSollemnity === 'soll' ||   // Hochfeste und 1. Vesper: Comm, wenn nicht eigen, nicht vom Wt
        (texts?.hasErsteVesper && hour === 'vesper'))
        skipCommune = false;

    if (prefSollemnity && !showBothComm && !isErsteLesung)
        skipCommune = true

    if (prefSollemnity === 'kirchw' || prefSollemnity === 'verst')
        skipCommune = true

    if (["ERÖFFNUNG", "HYMNUS", "ABSCHLUSS"].includes(title))
        skipCommune = true;

    // einfacher Header ohne Buttons
    if (["VERSIKEL", "RESPONSORIUM"].includes(title) ||
        (!invPsalms && !showSources && !showLanguageToggle
            && !showPsalmsWt && !showContinuous && !showTSN && !showErgPs)) {
        return <h2 className="prayer-heading">{getTitle()}</h2>;
    }
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
        <h2 className="prayer-heading inline-block space-x-3 items-baseline">
            <span className="inline-block">{getTitle()}</span>
            {showLanguageToggle && (
                <ButtonGroup>
                    {"("}
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
                    {")"}
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
                        vom Wt
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
                    {hasEig && (<button
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