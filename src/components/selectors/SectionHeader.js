import React, { useMemo } from 'react';
import { getValue } from '../dataHandlers/GetValue.js';
import { getExcludedHours } from '../dataHandlers/ExcludedHours.js';

const checkSources = (texts, hour, prefSrc, field) => {
    const hasEig = texts[hour][prefSrc]?.[field];
    const hasWt = texts[hour].wt?.[field];
    const hasComm1 = texts[hour][prefSrc]?.com1?.[field];
    const hasComm2 = texts[hour][prefSrc]?.com2?.[field];
    const nameComm1 = texts.laudes[prefSrc]?.com1?.button || '1';
    const nameComm2 = texts.laudes[prefSrc]?.com2?.button || '2';

    return {
        hasEig, hasWt,
        hasComm1, hasComm2,
        nameComm1, nameComm2,
        showSources: !hasEig && hasWt && hasComm1,
        showBothComm: hasComm1 && hasComm2
    };
};

const SectionHeader = ({
    title,
    provField,
    askContinuous,
    onSelectHour,
    texts,
    hour,
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
    setLocalPrefLatin,
    setLocalPrefLanguage,
    setLocalPrefInv,
    setLocalPrefPsalmsWt,
    setLocalPrefErgPs,
    setLocalPrefContinuous,
    setLocalPrefComm
}) => {
    const field = (hour === 'invitatorium' && provField === 'psalm1')
        ? 'ant0' : provField;
    const isCommemoration = texts?.isCommemoration || false
    const { hasEig, hasWt, nameComm1, nameComm2, showSources, showBothComm } =
        checkSources(texts, hour, prefSrc, field);

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

    // Bestimme ausgeschlossene Horen für TSN basierend auf Ergänzungspsalmodie
    const excludedHours = useMemo(() => {
        return getExcludedHours(texts, localPrefErgPs, title);
    }, [texts, localPrefErgPs, title]);

    const isPsalmodie = title === 'PSALMODIE' && !['invitatorium', 'komplet'].includes(hour);
    const isPsalmsWt = isPsalmodie && localPrefPsalmsWt;
    const showPsalmsWt = hasWt
        && (hasEig || (hour === 'laudes' && texts?.useFeastPsalms))
        && isPsalmodie
    const showInclAnt = isPsalmodie &&
        !(texts[hour][prefSrc]?.ant0 || texts[hour][prefSrc]?.ant1);
    const showContinuous = hasEig && hasWt && askContinuous
        && hour === 'lesehore' && !isCommemoration;
    const isErsteLesung = field.startsWith('les_text') && hour === 'lesehore';
    const isTSN = ["terz", "sext", "non"].includes(hour);
    const showTSN = isTSN && ['HYMNUS', 'PSALMODIE', 'KURZLESUNG'].includes(title)
        && !(isPsalmodie && isIdenticalTerzSext); // Neue Bedingung hinzugefügt
    const showErgPs = isTSN
        && isPsalmodie
        && !(prefSollemnity || rank_date === 5 || rank_wt === 5);
    const invPsalms = (hour === 'invitatorium' && title === 'PSALMODIE')
        ? texts?.invitatorium?.psalms : null;

    // (dt./lat.)-Button anzeigen?
    let askLatin = true;
    if (title === 'VERSIKEL'
        || (hour === 'invitatorium' && title === 'PSALMODIE')
        || (hour === 'lesehore' && /^(les_|resp|patr_)/.test(field))
        || (isTSN && title === 'ORATION')
    ) askLatin = false
    else if (title === 'HYMNUS')
        askLatin = localStorage.getItem('ommitOpening') === 'true' ? true : false

    // Prüfe, ob Commune übersprungen werden soll
    let skipCommune = false;
    if (rank_date < 3 && ( // an Gedenktagen
        (hour === 'lesehore' && // Lesehore: nur Hymnus und Oration ggf. Commune
            !field.startsWith('hymn_') && field !== 'oration'
        ) || (
            ['laudes', 'vesper'].includes(hour) &&  // Laudes/Vesper Psalmodie
            isPsalmodie && texts?.laudes?.eig?.com1?.button !== 'Evang'
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
        (!invPsalms && !showSources && !askLatin
            && !showPsalmsWt && !showContinuous && !showTSN && !showErgPs)) {
        return <h2 className="prayer-heading">{title}</h2>;
    }
    const ButtonGroup = ({ children }) => (
        <span className="inline-block font-normal text-[0.85em]"        >
            {children}
        </span>
    );

    return (
        <h2 className="prayer-heading inline-block space-x-3 items-baseline">
            <span className="inline-block">{title}</span>
            {askLatin && (
                <ButtonGroup>
                    <button
                        onClick={() => {
                            const newLatinValue = !localPrefLatin;
                            setLocalPrefLatin(newLatinValue);
                            setLocalPrefLanguage(newLatinValue ? '_lat' : '');
                        }}                    >
                        (dt./lat.)
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
                                    if (localPrefPsalmsWt === 'inclAnt') { setLocalPrefPsalmsWt(true) }
                                    else { setLocalPrefPsalmsWt('inclAnt') }
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
                            if (isPsalmodie) { setLocalPrefPsalmsWt(false) }
                        }}
                        className={(!isPsalmsWt && localPrefComm === 1) ? 'underline' : ''}
                    >
                        Comm {nameComm1}
                    </button>
                    {showBothComm && (
                        <>
                            {"  |  "}
                            <button
                                onClick={() => {
                                    setLocalPrefComm(2)
                                    if (isPsalmodie) { setLocalPrefPsalmsWt(false) }
                                }}
                                className={(!isPsalmsWt && localPrefComm === 2) ? 'underline' : ''}
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
                                    if (isPsalmodie) { setLocalPrefPsalmsWt(true) }
                                    else setLocalPrefComm(0)
                                }}
                                className={(isPsalmsWt || localPrefComm === 0) ? 'underline' : ''}
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
                                    if (localPrefPsalmsWt === 'inclAnt') { setLocalPrefPsalmsWt(true) }
                                    else { setLocalPrefPsalmsWt('inclAnt') }
                                }}
                                className={(localPrefPsalmsWt === 'inclAnt') ? 'underline' : ''}
                            >
                                auch Ant)
                            </button>
                        </>
                    )}
                </ButtonGroup>
            )}
            {
                showTSN && (
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
                )
            }
            {
                invPsalms && (
                    <ButtonGroup>
                        {[95, 100, 67, 24].map((psalmNumber, index) => {
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
                )
            }        </h2 >
    );
};

export default SectionHeader;