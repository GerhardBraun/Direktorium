import React from 'react';

const checkSources = (texts, hour, prefSrc, field) => {
    const hasEig = texts[hour][prefSrc]?.[field];
    const hasWt = texts[hour]['wt']?.[field];
    const hasComm1 = texts[hour][prefSrc]?.['com1']?.[field];
    const hasComm2 = texts[hour][prefSrc]?.['com2']?.[field];
    const nameComm1 = texts['laudes'][prefSrc]?.['com1']?.['button'] || '1';
    const nameComm2 = texts['laudes'][prefSrc]?.['com2']?.['button'] || '2';

    return {
        hasEig, hasWt,
        hasComm1, hasComm2,
        nameComm1, nameComm2,
        showSources: !hasEig && hasWt && hasComm1,
        showComm2: hasComm1 && hasComm2
    };
};

export const SectionHeader = ({
    title,
    provField,
    askLatin,
    askContinuous,
    askTSN,
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
    const field = (hour === 'invitatorium' && provField === 'ps_1')
        ? 'ant0' : provField;
    const invPsalms = (hour === 'invitatorium' && title === 'PSALMODIE')
        ? texts?.invitatorium?.psalms : null;
    const isCommemoration = texts?.isCommemoration || false
    const { hasEig, hasWt, nameComm1, nameComm2, showSources, showComm2 } =
        checkSources(texts, hour, prefSrc, field);
    const showContinuous = hasEig && hasWt && askContinuous && hour === 'lesehore' && !isCommemoration;
    const showPsalmsWt = hasEig && hasWt &&
        title === 'PSALMODIE' && (hour !== 'invitatorium' && hour !== 'komplet');
    const showTSN = askTSN && ["terz", "sext", "non"].includes(hour);
    const showErgPs = title === 'PSALMODIE' && ["terz", "sext", "non"].includes(hour)
        && !(prefSollemnity || rank_date === 5 || rank_wt === 5);
    const sollemnityErsteVesper = () => ['soll', 'dec'].includes(prefSollemnity)

    // Prüfe, ob Commune übersprungen werden soll
    let skipCommune = false;
    if (rank_date < 3 && (  // an Gedenktagen
        (hour === 'lesehore' && // Lesehore: nur Hymnus und Oration ggf. Commune
            !field.startsWith('hymn_') && field !== 'oration') ||
        ((hour === 'laudes' || hour === 'vesper') &&  // Laudes/Vesper Psalmodie
            (field.startsWith('ps_') ||
                (field.startsWith('ant') && !field.startsWith('antEv'))
            )) ||
        ['terz', 'sext', 'non'].includes(hour)) // Kleinen Horen: ganz vom Wt
    ) { skipCommune = true };

    if (rank_date < 5 &&    // an Festen: Ant und Ps in Kleinen Horen vom Wt
        ['terz', 'sext', 'non'].includes(hour) &&
        (field.startsWith('ps_') || field.startsWith('ant'))
    ) { skipCommune = true };

    if (isCommemoration) { skipCommune = true }

    if (prefSollemnity === 'soll' ||   // Hochfeste und 1. Vesper: Comm, wenn nicht eigen, nicht vom Wt
        (texts?.hasErsteVesper && hour === 'vesper')
    ) { skipCommune = false };

    if (prefSollemnity && !showComm2) { skipCommune = true }

    if (prefSollemnity === 'kirchw' || prefSollemnity === 'verst'
    ) { skipCommune = true }

    if (["ERÖFFNUNG", "HYMNUS", "ABSCHLUSS"].includes(title)) { skipCommune = true };

    if (title === "RESPONSORIUM" ||
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
                </ButtonGroup>)
            }
            {
                showPsalmsWt && (
                    <ButtonGroup>
                        <button
                            onClick={() => setLocalPrefPsalmsWt(false)}
                            className={!localPrefPsalmsWt && 'underline'}
                        >
                            Ps eig
                        </button>
                        {" | "}
                        <button
                            onClick={() => setLocalPrefPsalmsWt(true)}
                            className={localPrefPsalmsWt && 'underline'}
                        >
                            vom Wt
                        </button>
                    </ButtonGroup>
                )
            }
            {
                showErgPs && (
                    <ButtonGroup>
                        <button
                            onClick={() => setLocalPrefErgPs(false)}
                            className={!localPrefErgPs && 'underline'}
                        >
                            vom Wt
                        </button>
                        {" | "}
                        <button
                            onClick={() => setLocalPrefErgPs(true)}
                            className={localPrefErgPs && 'underline'}
                        >
                            ErgPs
                        </button>
                    </ButtonGroup>
                )
            }
            {
                showContinuous && (
                    <ButtonGroup>
                        <button
                            onClick={() => setLocalPrefContinuous(false)}
                            className={!localPrefContinuous && 'underline'}
                        >
                            Eigenlesung
                        </button>
                        {" | "}
                        <button
                            onClick={() => setLocalPrefContinuous(true)}
                            className={localPrefContinuous && 'underline'}
                        >
                            Bahnlesung
                        </button>
                    </ButtonGroup>
                )
            }
            {
                showSources && !skipCommune && (
                    <ButtonGroup>
                        <button
                            onClick={() => setLocalPrefComm(1)}
                            className={`${localPrefComm === 1 ? 'underline' : ''}`}
                        >
                            Comm {nameComm1}
                        </button>
                        {showComm2 && (
                            <>
                                {"  |  "}
                                <button
                                    onClick={() => setLocalPrefComm(2)}
                                    className={`${localPrefComm === 2 ? 'underline' : ''}`}
                                >
                                    {nameComm2}
                                </button>

                            </>
                        )}
                        {!prefSollemnity && (
                            <>
                                {" | "}
                                <button
                                    onClick={() => setLocalPrefComm(0)}
                                    className={`${localPrefComm === 0 ? 'underline' : ''}`}
                                >
                                    Wt
                                </button>
                            </>
                        )}
                    </ButtonGroup>
                )
            }
            {
                showTSN && (
                    <ButtonGroup>
                        <button
                            onClick={() => onSelectHour('terz')}
                            className={`${hour === 'terz' ? 'underline' : ''}`}
                        >
                            Terz
                        </button>
                        {" | "}
                        <button
                            onClick={() => onSelectHour('sext')}
                            className={`${hour === 'sext' ? 'underline' : ''}`}
                        >
                            Sext
                        </button>
                        {" | "}
                        <button
                            onClick={() => onSelectHour('non')}
                            className={`${hour === 'non' ? 'underline' : ''}`}
                        >
                            Non
                        </button>
                    </ButtonGroup>
                )
            }
            {
                invPsalms && (
                    <ButtonGroup>
                        {[95, 100, 67, 24].map((psalmNumber, index) => (
                            invPsalms?.includes(psalmNumber) ? (
                                <React.Fragment key={psalmNumber}>
                                    {index > 0 && " | "}
                                    <button
                                        onClick={() => setLocalPrefInv(psalmNumber)}
                                        className={`${localPrefInv === psalmNumber ? 'underline' : ''}`}
                                    >
                                        {psalmNumber === 95 ? `Ps ${psalmNumber}` : psalmNumber}
                                    </button>
                                </React.Fragment>
                            ) : null
                        ))}
                    </ButtonGroup>
                )
            }
        </h2 >
    );
};