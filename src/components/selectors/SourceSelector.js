import React from 'react';

// Hilfsfunktion zum Prüfen, ob eine Quelle gültige Daten hat
const hasValidSource = (prayerTexts, source) => {
    return prayerTexts?.laudes?.[source]?.oration;
};

// Hilfsfunktion für Button-Farben basierend auf der Quellenfarbe
const getButtonColor = (prayerTexts, source) => {
    const color = prayerTexts?.laudes?.[source]?.farbe?.charAt(0)?.toLowerCase();
    return color === 'r'
        ? 'btn-red'
        : color === 'm'
            ? 'btn-blue'
            : 'btn-white';
};

const getWeekdayButtonColor = (season) => {
    if (season === 'j') {
        return 'btn-green';
    } else if (season === 'a' || season === 'q') {
        return 'btn-violett';
    } else {
        return 'btn-yellow';
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

    // Funktion zum Behandeln der Quellenauswahl
    const handleSourceSelect = (source, setSollemnity = '') => {
        const isErsteVesper = (viewMode === 'prayerText' && hour === 'erstev');

        // Wenn "Vom Wochentag" gewählt wird, prefSollemnity zurücksetzen,
        // ebenso wenn der schon gewählte Button angeklickt wird;
        // wenn ein Heiliger gewählt wird, bleibt prefSollemnity auf 'soll', 
        // 'kirchw' und 'verst' werden aber zurückgesetzt
        let newPrefSollemnity = setSollemnity;
        if (setSollemnity === prefSollemnity) { newPrefSollemnity = '' };
        if (setSollemnity === '') {
            newPrefSollemnity = (prefSollemnity === 'soll' || isErsteVesper) ? 'soll' : ''
        };
        if (source === 'wt') { newPrefSollemnity = '' };

        // Verhindert in der 1. Vesper die Wahl einer Source ohne 1. Vesper
        let blockToggle = false;
        if (isErsteVesper) {
            blockToggle = true;
            if (['eig', 'n1', 'n2', 'n3', 'n4', 'n5'].includes(source) &&
                (prefSollemnity === 'soll' || prefSollemnity === 'kirchw')
            ) { blockToggle = false };
            if (setSollemnity === 'kirchw' && prefSollemnity !== 'kirchw'
            ) { blockToggle = false };
        }
        if (!blockToggle) {
            let newPrefSrc = source;
            if (source === 'wt') { newPrefSrc = 'eig' };
            if (source === 'lokal') { newPrefSrc = prefSrc };
            if (!newPrefSollemnity && !newPrefSrc) { newPrefSrc = 'eig' };
            setPrefSrc(newPrefSrc);
            setPrefSollemnity(newPrefSollemnity);
            if (source === 'wt') { setUseCommemoration(false) }
            else { setUseCommemoration(isCommemoration) }
        }
    };

    if (!prayerTexts) return null;

    const { rank_date = 0, rank_wt = 0, isCommemoration } = prayerTexts
    const hasEig = hasValidSource(prayerTexts, 'eig') // G, F oder H
    const hasN1 = hasValidSource(prayerTexts, 'n1') // nichtgebotener Gedenktag
    const showWt = rank_wt < 3
        && (
            (hasN1 && !hasEig) ||   // nur nichtgebotener Gedenktag
            (isCommemoration && (hasEig || hasN1)) // bei Kommemoration auch G
        )
    // Anzeige des Buttons für lokales Hochfest
    const useToggle = (!(showWt && prefSrc === 'eig') || useCommemoration) &&
        prefSollemnity !== 'kirchw' && prefSollemnity !== 'verst'

    return (
        <div className={`space-y-1 ${className}`}>
            {/* Bezeichnung Hochfest/Fest/Gedenktag */}

            {prayerTexts.laudes?.wt?.button && !hasEig && (
                <div className="text-center text-xl font-bold text-gray-900 dark:text-gray-100">
                    {prayerTexts.laudes.wt.button}
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
                        {prayerTexts.laudes[source].button || "ein Heiliger"}
                    </button>
                );
            })}
            {!reduced && (
                <div className="flex gap-1">
                    <button
                        onClick={() => handleSourceSelect('', 'kirchw')}
                        className={`flex-1 pt-2 text-center rounded-sm 
                            bg-gray-100 dark:bg-gray-900 text-xs
                            text-yellow-600 dark:text-yellow-500
                            hover:bg-gray-100 dark:hover:bg-gray-800
                            ${prefSollemnity === 'kirchw' ? 'ring-2 ring-yellow-500' : ''}`}
                    >
                        Kirchweihe
                    </button>

                    {(rank_date < 5 && (hasEig || hasN1)) && (
                        <button
                            onClick={() => handleSourceSelect('lokal', 'soll')}
                            className={`flex-1 pt-2 text-center rounded-sm 
                                bg-gray-100 dark:bg-gray-900 text-xs
                                ${useToggle ? 'text-yellow-600 dark:text-yellow-500' : 'text-gray-200 dark:text-gray-800'} 
                                hover:bg-gray-100 dark:hover:bg-gray-800
                                ${prefSollemnity === 'soll' ? 'ring-2 ring-yellow-500' : ''}`}
                            disabled={!useToggle}
                        >
                            lokale Feier als Hochfest
                        </button>
                    )}

                    <button
                        onClick={() => handleSourceSelect('', 'verst')}
                        className={`flex-1 pt-2 text-center rounded-sm 
                            bg-gray-100 dark:bg-gray-900 text-xs
                            text-yellow-600 dark:text-yellow-500
                            hover:bg-gray-100 dark:hover:bg-gray-800
                            ${prefSollemnity === 'verst' ? 'ring-2 ring-yellow-500' : ''}`}
                    >
                        Ged der Verst
                    </button>
                </div>
            )}
        </div>
    );
};

export default SourceSelector;