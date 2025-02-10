import React from 'react';

// Hilfsfunktion zum Prüfen, ob eine Quelle gültige Daten hat
const hasValidSource = (prayerTexts, source) => {
    return prayerTexts?.laudes?.[source]?.oration;
};

// Hilfsfunktion für Button-Farben basierend auf der Quellenfarbe
const getButtonColor = (prayerTexts, source) => {
    const color = prayerTexts?.laudes?.[source]?.farbe;
    return color?.startsWith('r')
        ? 'bg-red-700/80 text-white hover:bg-red-600/80'
        : 'bg-gray-200 text-gray-900 hover:bg-gray-100';
};

const getWeekdayButtonColor = (season) => {
    if (season === 'j') {
        return 'bg-green-700/50 text-white hover:bg-green-600/50';
    } else if (season === 'a' || season === 'q') {
        return 'bg-purple-900/50 text-white hover:bg-purple-800/60';
    } else {
        return 'bg-yellow-100/80 text-gray-900 hover:bg-yellow-50';
    }
};

const SourceSelector = ({
    prayerTexts,
    prefSrc, setPrefSrc,
    prefSollemnity, setPrefSollemnity,
    useCommemoration, setUseCommemoration,
    viewMode,
    hour = '',
    season = 'j',
    reduced = false,
    className = ''
}) => {
    const sollemnityErsteVesper = () => ['soll', 'dec'].includes(prefSollemnity)

    // Funktion zum Behandeln der Quellenauswahl
    const handleSourceSelect = (source, setSollemnity = false) => {
        const newSollemnity = blockToggle || setSollemnity;
        if (!blockToggle || source !== 'wt') {
            const newPrefSrc = (source === 'wt') ? 'eig' : source;
            setPrefSrc(newPrefSrc);
            setPrefSollemnity(newSollemnity);
            if (isCommemoration && source !== 'wt') { setUseCommemoration(isCommemoration) };
            if (source === 'wt') { setUseCommemoration(false) }
        }
    };

    // Funktion für den Hochfest-Toggle
    const toggleSollemnity = () => {
        console.log('SourceSelector: useToggle/blockToggle/prefSollemnity:', useToggle, blockToggle, prefSollemnity)
        if (useToggle && !blockToggle) {
            // Die aktuelle Quelle beibehalten, nur prefSollemnity umschalten
            handleSourceSelect(prefSrc, !prefSollemnity)

        }
    };

    if (!prayerTexts) return null;

    const {rank_date=0, rank_wt=0, isCommemoration} = prayerTexts
    const hasEig = hasValidSource(prayerTexts, 'eig') // G, F oder H
    const hasN1 = hasValidSource(prayerTexts, 'n1') // nichtgebotener Gedenktag
    const showWt = rank_wt < 3
        && (
            (hasN1 && !hasEig) ||   // nur nichtgebotener Gedenktag
            (isCommemoration && (hasEig || hasN1)) // bei Kommemoration auch G
                    )
        // Anzeige des Buttons für lokales Hochfest
    const useToggle = !(showWt && prefSrc === 'eig') || useCommemoration
    const blockToggle = (viewMode === 'prayerText' && hour === 'erstev')

    return (
        <div className={`space-y-1 ${className}`}>
            {/* Bezeichnung Hochfest/Fest/Gedenktag */}

            {prayerTexts.laudes?.wt?.name && !hasEig && (
                <div className="text-center text-xl font-bold text-gray-900 dark:text-gray-100">
                    {prayerTexts.laudes.wt.name}
                </div>
            )}
            {/* Weekday Button */}
            {showWt && !reduced && (<>
                <button
                    onClick={() => handleSourceSelect('wt')}
                    className={`w-full p-1 mb-1 text-sm text-center rounded-sm
                         ${getWeekdayButtonColor(season)}
                        ${(prefSrc === 'eig' && !useCommemoration) ? 'ring-2 ring-yellow-500' : ''}`}
                >
                    Vom Wochentag
                </button>
                {isCommemoration && (
                    <div className='text-center text-xs text-yellow-600 dark:text-yellow-500'>
                        Für die Kommemoration:</div>)}
            </>
            )}
            {reduced && (<>
                <div className='text-center text-sm text-yellow-600 dark:text-yellow-500'>
                    Für die Kommemoration:</div>
            </>
            )}
            {/* Saint Selection Buttons */}
            {['eig', 'n1', 'n2', 'n3', 'n4', 'n5'].map(source => {
                if (!hasValidSource(prayerTexts, source)) return null;
                const doUnderline = prefSrc === source &&
                    (!isCommemoration || (isCommemoration && useCommemoration))
                return (
                    <button
                        key={source}
                        onClick={() => handleSourceSelect(source)}
                        className={`w-full p-1 pt-2 text-sm text-center rounded-sm 
                                    ${getButtonColor(prayerTexts, source)}
                                    ${(doUnderline) ? 'ring-2 ring-yellow-500' : ''}`}
                    >
                        {prayerTexts.laudes[source].name || "ein Heiliger"}
                    </button>
                );
            })}
            {rank_date < 5 && (hasEig || hasN1) && !reduced && (
                <>
                    <button
                        onClick={toggleSollemnity}
                        className={`w-full pt-2 text-center rounded-sm 
                    bg-gray-100 dark:bg-gray-900 text-xs
                    ${useToggle ? 'text-yellow-600 dark:text-yellow-500' : 'text-gray-200 dark:text-gray-800'} 
                    hover:bg-gray-100 dark:bg-gray-800
                    ${prefSollemnity ? 'ring-2 ring-yellow-500' : ''}`}
                    >
                        lokale Feier als Hochfest
                    </button>
                </>
            )}
        </div>
    );
};

export default SourceSelector;