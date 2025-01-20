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
    selectedSource,
    onSourceSelect,
    viewMode,
    hour = '',
    season = 'j',
    prefSollemnity,  // nur der Wert, keine Setter-Funktion
    className = ''
}) => {
    // Funktion zum Behandeln der Quellenauswahl
    const handleSourceSelect = (source, setSollemnity = false) => {
        console.log('handleSourceSelect: ', viewMode, source)
        const newSollemnity = blockToggle || setSollemnity;
        if (!blockToggle || source !== 'wt') {
            const newPrefSrc = (source === 'wt') ? 'eig' : source;
            const newPrefComm1 = (source === 'eig' || source === 'wt') ? 'com1' : `${source}com1`;
            const newPrefComm2 = (source === 'eig' || source === 'wt') ? 'com2' : `${source}com2`;
            onSourceSelect(source, newPrefSrc, newPrefComm1, newPrefComm2, newSollemnity);
        }
    };

    // Funktion für den Hochfest-Toggle
    const toggleSollemnity = () => {
        if (useToggle && !blockToggle) {
            // Die aktuelle Quelle beibehalten, nur prefSollemnity umschalten
            handleSourceSelect(selectedSource, !prefSollemnity)
        }
    };

    const showWt = prayerTexts?.rank_wt < 3 && hasValidSource(prayerTexts, 'n1') && !hasValidSource(prayerTexts, 'eig')
    const useToggle = !(showWt && selectedSource === 'eig')
    const blockToggle = (viewMode === 'prayerText' && hour === 'erstev')

    if (!prayerTexts) return null;

    return (
        <div className={`space-y-1 ${className}`}>
            {/* Bezeichnung Hochfest/Fest/Gedenktag */}

            {prayerTexts.laudes?.wt?.name && !hasValidSource(prayerTexts, 'eig') && (
                <div className="text-center text-xl font-bold text-gray-900 dark:text-gray-100">
                    {prayerTexts.laudes.wt.name}
                </div>
            )}

            {/* Weekday Button */}
            {showWt && (
                <button
                    onClick={() => handleSourceSelect('wt')}
                    className={`w-full p-1 mb-1 text-sm text-center rounded-sm
                         ${getWeekdayButtonColor(season)}
                        ${selectedSource === 'eig' ? 'ring-2 ring-yellow-500' : ''}`}
                >
                    Vom Wochentag
                </button>
            )}

            {/* Saint Selection Buttons */}
            {['eig', 'n1', 'n2', 'n3', 'n4', 'n5'].map(source => {
                if (!hasValidSource(prayerTexts, source)) return null;

                return (
                    <button
                        key={source}
                        onClick={() => handleSourceSelect(source)}
                        className={`w-full p-1 pt-2 text-sm text-center rounded-sm 
                                    ${getButtonColor(prayerTexts, source)}
                                    ${selectedSource === source ? 'ring-2 ring-yellow-500' : ''}`}
                    >
                        {prayerTexts.laudes[source].name || "ein Heiliger"}
                    </button>
                );
            })}
            {prayerTexts?.rank_wt < 5 &&
                (hasValidSource(prayerTexts, 'eig') || hasValidSource(prayerTexts, 'n1')) && (
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