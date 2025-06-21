import React, { useMemo } from 'react';
import { getLocalStorage } from '../utils/localStorage.js';
import { getValue } from '../dataHandlers/GetValue.js';
import { getExcludedHours } from '../dataHandlers/ExcludedHours.js';

const checkSources = (texts, hour, prefSrc, field) => {
    const hasEig = texts[hour][prefSrc]?.[field];
    const hasWt = texts[hour].wt?.[field];
    const hasComm1 = texts[hour][prefSrc]?.com1?.[field];
    const hasComm2 = texts[hour][prefSrc]?.com2?.[field];
    const nameComm1 = texts.laudes[prefSrc]?.com1?.button || '1';
    const nameComm2 = texts.laudes[prefSrc]?.com2?.button || '2';

    const hasEig_lat = texts[hour][prefSrc]?.[`${field}_lat`];
    const hasWt_lat = texts[hour].wt?.[`${field}_lat`];
    const hasComm1_lat = texts[hour][prefSrc]?.com1?.[`${field}_lat`];
    const hasComm2_lat = texts[hour][prefSrc]?.com2?.[`${field}_lat`];

    return {
        hasEig, hasWt,
        hasComm1, hasComm2,
        nameComm1, nameComm2,
        showSources: !hasEig && hasWt && hasComm1,
        showBothComm: hasComm1 && hasComm2
    };
};

export const SectionHeader = ({
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
        if (!["terz", "sext", "non"].includes(hour) || title !== 'PSALMODIE') {
            return false;
        }

        const getValueTS = (hour, field) => {
            return getValue({
                season: texts?.season,
                hour,
                field,
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
            const terzValue = getValueTS('terz', fieldToCheck);
            const sextValue = getValueTS('sext', fieldToCheck);

            // Wenn ein Wert unterschiedlich ist, sind sie nicht identisch
            if (terzValue !== sextValue) {
                return false;
            }
        }

        return true;
    }, [hour, title, texts, prefSrc, prefSollemnity, localPrefComm,
        localPrefPsalmsWt, localPrefErgPs, localPrefContinuous]);

    // Bestimme ausgeschlossene Horen für TSN basierend auf Ergänzungspsalmodie
    const excludedHours = useMemo(() => {
        return getExcludedHours(texts, localPrefErgPs, title);
    }, [texts, localPrefErgPs, title]);

    const showPsalmsWt = hasEig && hasWt
        && title === 'PSALMODIE'
        && !['invitatorium', 'komplet'].includes(hour);
    const showContinuous = hasEig && hasWt && askContinuous
        && hour === 'lesehore' && !isCommemoration;
    const isErsteLesung = field.startsWith('les_text') && hour === 'lesehore';
    const isTSN = ["terz", "sext", "non"].includes(hour);
    const showTSN = isTSN && ['HYMNUS', 'PSALMODIE', 'KURZLESUNG'].includes(title)
        && !(title === 'PSALMODIE' && isIdenticalTerzSext); // Neue Bedingung hinzugefügt
    const showErgPs = isTSN
        && title === 'PSALMODIE'
        && !(prefSollemnity || rank_date === 5 || rank_wt === 5);
    const invPsalms = (hour === 'invitatorium' && title === 'PSALMODIE')
        ? texts?.invitatorium?.psalms : null;
    const sollemnityErsteVesper = () => ['soll', 'dec'].includes(prefSollemnity)

    let askLatin = true;
    if (title === 'VERSIKEL'
        || (hour === 'invitatorium' && title === 'PSALMODIE')
        || (hour === 'lesehore' && /^(les_|resp|patr_)/.test(field))
        || (isTSN && title === 'ORATION')
    ) { askLatin = false }
    else if (title === 'HYMNUS') {
        askLatin = getLocalStorage('ommitOpening') === 'true' ? true : false
    }

    // Prüfe, ob Commune übersprungen werden soll
    let skipCommune = false;
    if (rank_date < 3 && (  // an Gedenktagen
        (hour === 'lesehore' && // Lesehore: nur Hymnus und Oration ggf. Commune
            !field.startsWith('hymn_') && field !== 'oration') ||
        ((hour === 'laudes' || hour === 'vesper') &&  // Laudes/Vesper Psalmodie
            (field.startsWith('psalm') ||
                (field.startsWith('ant') && !field.startsWith('antev'))
            )) ||
        ['terz', 'sext', 'non'].includes(hour)) // Kleinen Horen: ganz vom Wt
    ) { skipCommune = true };

    if (rank_date < 5 &&    // an Festen: Ant und Ps in Kleinen Horen vom Wt
        ['terz', 'sext', 'non'].includes(hour) &&
        (field.startsWith('psalm') || field.startsWith('ant'))
    ) { skipCommune = true };

    if (isCommemoration) { skipCommune = true }

    if (prefSollemnity === 'soll' ||   // Hochfeste und 1. Vesper: Comm, wenn nicht eigen, nicht vom Wt
        (texts?.hasErsteVesper && hour === 'vesper')
    ) { skipCommune = false };

    if (prefSollemnity && !showBothComm && !isErsteLesung) { skipCommune = true }

    if (prefSollemnity === 'kirchw' || prefSollemnity === 'verst'
    ) { skipCommune = true }

    if (["ERÖFFNUNG", "HYMNUS", "ABSCHLUSS"].includes(title)) { skipCommune = true };

    if (["VERSIKEL", "RESPONSORIUM"].includes(title) ||
        (!invPsalms && !showSources && !askLatin
            && !showPsalmsWt && !showContinuous && !showTSN && !showErgPs)) {
        return <h2 className="prayer-heading">{title}</h2>;
    }

    const ButtonGroup = ({ children }) => (
        <span
            className="inline-block font-normal text-[0.85em]"
        >
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
                            if (title === 'PSALMODIE') { setLocalPrefPsalmsWt(false) }
                        }}
                        className={localPrefComm === 1 ? 'underline' : ''}
                    >
                        Comm {nameComm1}
                    </button>
                    {showBothComm && (
                        <>
                            {"  |  "}
                            <button
                                onClick={() => {
                                    setLocalPrefComm(2)
                                    if (title === 'PSALMODIE') { setLocalPrefPsalmsWt(false) }
                                }}
                                className={localPrefComm === 2 ? 'underline' : ''}
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
                                    setLocalPrefComm(0)
                                    if (title === 'PSALMODIE') { setLocalPrefPsalmsWt(true) }
                                }}
                                className={localPrefComm === 0 ? 'underline' : ''}
                            >
                                {`${isErsteLesung ? 'Bahnlesung' : 'Wt'}`}
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
                    {[95, 100, 67, 24].map((psalmNumber, index) => (
                        invPsalms?.includes(psalmNumber) ? (
                            <React.Fragment key={psalmNumber}>
                                {index > 0 && " | "}
                                <button
                                    onClick={() => setLocalPrefInv(psalmNumber)}
                                    className={localPrefInv === psalmNumber ? 'underline' : ''}
                                >
                                    {psalmNumber === 95 ? `Ps ${psalmNumber}` : psalmNumber}
                                </button>
                            </React.Fragment>
                        ) : null
                    ))}
                </ButtonGroup>
            )}
        </h2 >
    );
};