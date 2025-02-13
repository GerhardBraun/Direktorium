import React from 'react';

const checkSources = (texts, hour, prefSrc, field) => {
    const hasEig = texts[hour][prefSrc]?.[field];
    const hasWt = texts[hour]['wt']?.[field];
    const hasComm1 = texts[hour][prefSrc]?.['com1']?.[field];
    const hasComm2 = texts[hour][prefSrc]?.['com2']?.[field];
    const nameComm1 = texts['laudes'][prefSrc]?.['com1']?.['name'] || '1';
    const nameComm2 = texts['laudes'][prefSrc]?.['com2']?.['name'] || '2';

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
    latinField,
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
    setLocalPrefLatin,
    setLocalPrefInv,
    setLocalPrefPsalmsWt,
    setLocalPrefErgPs,
    setLocalPrefContinuous,
    setLocalPrefComm
}) => {
    const field = (hour === 'invitatorium' && provField === 'ps_1')
        ? 'ant_0' : provField;
    const invPsalms = (hour === 'invitatorium' ? texts?.invitatorium?.psalms : null);
    const { hasEig, hasWt, nameComm1, nameComm2, showSources, showComm2 } =
        checkSources(texts, hour, prefSrc, field);
    const hasLatin = latinField && texts[hour]['wt']?.[latinField];
    const showContinuous = hasEig && hasWt && askContinuous && hour === 'lesehore';
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
                (field.startsWith('ant_') && !field.startsWith('ant_ev'))
            )) ||
        ['terz', 'sext', 'non'].includes(hour)) // Kleinen Horen: ganz vom Wt
    ) { skipCommune = true };

    if (rank_date < 5 &&    // an Festen: Ant und Ps in Kleinen Horen vom Wt
        ['terz', 'sext', 'non'].includes(hour) &&
        (field.startsWith('ps_') || field.startsWith('ant_'))
    ) { skipCommune = true };

    if (prefSollemnity === 'soll' ||   // Hochfeste und 1. Vesper: Comm, wenn nicht eigen, nicht vom Wt
        (texts?.hasErsteVesper && hour === 'vesper')
    ) { skipCommune = false };

    if (prefSollemnity && !showComm2) { skipCommune = true }

    if (prefSollemnity === 'kirchw' || prefSollemnity === 'verst'
    ) { skipCommune = true }

    if (title === "HYMNUS") { skipCommune = true };

    if (title === "RESPONSORIUM" ||
        (!invPsalms && !showSources && !hasLatin
            && !showPsalmsWt && !showContinuous && !showTSN && !showErgPs)) {
        return <h2 className="prayer-heading">{title}</h2>;
    }

    return (
        <h2 className="prayer-heading flex items-baseline gap-3 text-rubric">
            {title}
            {hasLatin && (
                <button
                    onClick={() => setLocalPrefLatin(prev => !prev)}
                    className="font-normal text-[0.85em]"
                >
                    (dt./lat.)
                </button>
            )}
            {invPsalms && (
                <span className="font-normal text-[0.85em]">
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
                </span>
            )}
            {showPsalmsWt && (
                <span className="font-normal text-[0.85em]">
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
                </span>
            )}
            {showErgPs && (
                <span className="font-normal text-[0.85em]">
                    <button
                        onClick={() => setLocalPrefErgPs(false)}
                        className={!localPrefErgPs && 'underline'}
                    >
                        vom Wt
                    </button>
                    {" | "}
                    <button
                        onClick={() => setLocalPrefErgPs(true)}
                        className={localPrefErgPs && 'underline'}                >
                        ErgPs
                    </button>
                </span>
            )}
            {showContinuous && (
                <span className="font-normal text-[0.85em]">
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
                </span>
            )}
            {showSources && !skipCommune && (
                <span className="font-normal text-[0.85em]">
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
                </span>
            )}
            {showTSN && (
                <span className="font-normal text-[0.85em]">
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
                </span>
            )}
        </h2>
    );
};