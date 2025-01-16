import React from 'react';

// Hilfsfunktion zum Prüfen, ob eine Quelle gültige Daten hat
const hasValidSource = (prayerTexts, source) => {
    return prayerTexts?.laudes?.[source]?.oration;
};

// Hilfsfunktion für Button-Farben basierend auf der Quellenfarbe
const getButtonColor = (prayerTexts, source) => {
    const color = prayerTexts?.laudes?.[source]?.farbe;
    return color?.startsWith('r')
        ? 'bg-red-700 text-white hover:bg-red-600'
        : 'bg-gray-200 text-gray-900 hover:bg-gray-100';
};

const SourceSelector = ({
    prayerTexts,
    selectedSource,
    onSourceSelect,
    className = ''
}) => {
    // Funktion zum Behandeln der Quellenauswahl
    const handleSourceSelect = (source) => {
        // Neue Präferenzen setzen
        const newPrefSrc = (source === 'wt') ? 'eig' : source;
        const newPrefComm1 = (source === 'eig' || source === 'wt') ? 'com1' : `${source}com1`;
        const newPrefComm2 = (source === 'eig' || source === 'wt') ? 'com2' : `${source}com2`;
        console.log('handleSourceSelect: ', newPrefSrc, newPrefComm1, newPrefComm2)
        onSourceSelect(source, newPrefSrc, newPrefComm1, newPrefComm2);
    };

    if (!prayerTexts) return null;

    return (
        <div className={`space-y-1 ${className}`}>
            {/* Bezeichnung Hochfest/Fest/Gedenktag */}
            {hasValidSource(prayerTexts, 'eig') && !hasValidSource(prayerTexts, 'n1') && (
                <>  <div className="text-center text-xl font-bold text-gray-900 dark:text-gray-100">
                    {prayerTexts.laudes?.eig?.name || "Hochfest/Fest/Gedenktag"}
                </div>
                </>
            )}
            {prayerTexts.laudes?.wt?.name && !hasValidSource(prayerTexts, 'eig') && (
                <div className="text-center text-xl font-bold text-gray-900 dark:text-gray-100">
                    {prayerTexts.laudes.wt.name}
                </div>
            )}

            {/* Weekday Button */}
            {prayerTexts.rank_wt < 3 && hasValidSource(prayerTexts, 'n1') && !hasValidSource(prayerTexts, 'eig') && (
                <button
                    onClick={() => handleSourceSelect('wt')}
                    className={`w-full p-1 mb-1 text-center rounded-sm
                        bg-green-700 text-white hover:bg-green-600
                        ${selectedSource === 'eig' ? 'ring-2 ring-yellow-500' : ''}`}
                >
                    Vom Wochentag
                </button>
            )}

            {/* Saint Selection Buttons */}
            {prayerTexts.rank_wt < 3 && hasValidSource(prayerTexts, 'n1') && (
                <>
                    {['eig', 'n1', 'n2', 'n3', 'n4', 'n5'].map(source => {
                        if (!hasValidSource(prayerTexts, source)) return null;

                        return (
                            <button
                                key={source}
                                onClick={() => handleSourceSelect(source)}
                                className={`w-full p-1 text-center rounded-sm 
                                    ${getButtonColor(prayerTexts, source)}
                                    ${selectedSource === source ? 'ring-2 ring-yellow-500' : ''}`}
                            >
                                {prayerTexts.laudes[source].name || "ein Heiliger"}
                            </button>
                        );
                    })}
                </>
            )}
        </div>
    );
};

export default SourceSelector;