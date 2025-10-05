import React from 'react';
import { useMemo, useEffect, useState } from "react";

// Array mit allen zu durchsuchenden Schlüsseln
// Mit d1, d2 können Eigenfeiern VOR den denen des Regionalkalenders sortiert werden,
// mit d11, d12 NACH denen des Regionalkalenders
// mar ist nur für das Gedächtnis Mariens am Samstag
export const sourceKeys = ['eig', 'd1', 'd2', 'n1', 'n2', 'n3', 'n4', 'n5', 'd11', 'd12', 'mar'];

// Hilfsfunktion zum Prüfen, ob eine Quelle gültige Daten hat
const formatText = (text) => {
    return text?.replace(/°/g, '\u00a0')
}

const SourceSelector = ({
    texts,
    prefSrc, setPrefSrc,
    prefSollemnity, setPrefSollemnity,
    useCommemoration, setUseCommemoration,
    viewMode,
    hour = '',
    season = 'j',
    reduced = false,
    className = ''
}) => {

    const isErsteVesper = useMemo(() => {
        const buttonEig = texts?.vesper?.eig?.button ? 'eig' : 'wt';
        return viewMode === 'prayerText' && prefSollemnity !== 'soll' &&
            (hour === 'erstev' || (hour === 'vesper' && texts.hasErsteVesper))
            ? buttonEig : false;
    }, [viewMode, hour, prefSollemnity, texts]);

    const hasValidSource = (source) => {
        if (source === 'any') {
            // Finde die erste source in sourceKeys (außer 'eig'), die eine Oration hat
            return sourceKeys
                .filter(key => key !== 'eig')
                .find(key => texts?.laudes?.[key]?.oration) || false;
        }

        if (source === 'mar'
            && !['invitatorium', 'lesehore', 'laudes'].includes(hour)
            && viewMode !== 'prayer') return false;

        return !!texts?.laudes?.[source]?.oration;
    };

    useEffect(() => {
        if (!prefSrc) {
            if (!['kirchw', 'verst'].includes(prefSollemnity)) {
                setPrefSrc(hasValidSource('eig') ? 'eig' : hasValidSource('any') ? 'any' : '')
            }
        }
        else if (!hasValidSource(prefSrc)) {
            setPrefSrc('eig')
        };
    }, [prefSrc, texts]);

    if (!texts) return null;

    const { rank_date = 0, rank_wt = 0, isCommemoration } = texts
    const hasEig = hasValidSource('eig') // G, F oder H
    const hasAdLib = hasValidSource('any')

    const showWt = rank_wt < 3 && (
        (hasAdLib && !hasEig) ||   // nur nichtgebotener Gedenktag
        (isCommemoration && (hasEig || hasAdLib)) // bei Kommemoration auch G
    )

    const disableButtons = {}
    disableButtons.sources = isErsteVesper && prefSollemnity !== 'soll';
    disableButtons.eig = isErsteVesper === 'wt' && prefSollemnity !== 'soll';

    // Anzeige des Buttons für lokales Hochfest
    let useToggle = (!(showWt && prefSrc === 'eig') || useCommemoration) &&
        ((prefSollemnity !== 'kirchw' && prefSollemnity !== 'verst'))
    if (isErsteVesper === 'wt') useToggle = true

    // Hilfsfunktion für Button-Farben basierend auf der Quellenfarbe
    const getButtonColor = (source, disableButtons) => {
        if (source === 'eig' && disableButtons?.eig) return 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600';
        if (disableButtons?.sources) return 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600';
        let color = 'w'
        if (source === 'erstev')
            color = texts?.vesper?.eig?.farbe
        else color = texts?.laudes?.[source]?.farbe

        switch (color?.charAt(0)?.toLowerCase()) {
            case 'r': return 'btn-red'
            case 'm': return 'btn-blue'
            default: return 'btn-white'
        }
    };

    const getWeekdayButtonColor = (season, disableButtons) => {
        if (disableButtons.sources) return 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600';
        switch (season) {
            case 'j': return 'btn-green';
            case 'a':
            case 'q': return 'btn-violett';
            default: return 'btn-gold';
        }
    };

    // Funktion zum Behandeln der Quellenauswahl
    const handleSourceSelect = (source, setSollemnity = '') => {
        let newPrefSollemnity = setSollemnity;
        // Wenn der schon gewählte prefSollemnity-Button angeklickt wird, prefSollemnity zurücksetzen;
        if (setSollemnity === prefSollemnity) { newPrefSollemnity = '' };
        // Wenn ein Heiliger gewählt wird, bleibt prefSollemnity auf 'soll',
        // 'kirchw' und 'verst' werden aber zurückgesetzt
        if (setSollemnity === '') {
            newPrefSollemnity = (prefSollemnity === 'soll' || isErsteVesper) ? 'soll' : ''
        };
        // Wenn "Vom Wochentag" gewählt wird, prefSollemnity zurücksetzen,
        if (source === 'wt') { newPrefSollemnity = '' };

        // Verhindert in der 1. Vesper die Wahl einer Source ohne 1. Vesper
        let blockToggle = false;
        if (isErsteVesper === 'eig') {
            blockToggle = true;
            if (sourceKeys.includes(source) &&
                (prefSollemnity === 'soll' || prefSollemnity === 'kirchw')
            ) { blockToggle = false };
            if (setSollemnity === 'kirchw' && prefSollemnity !== 'kirchw'
            ) { blockToggle = false };
        }
        if (!blockToggle) {
            let newPrefSrc = source;
            if (source === 'wt') { newPrefSrc = 'eig' };
            if (source === 'lokal') {
                newPrefSrc = prefSrc;
                if (prefSrc === 'eig' && !hasEig) newPrefSrc = hasAdLib
                if (!prefSrc) newPrefSrc = hasEig ? 'eig' : hasAdLib
                if (!newPrefSrc) newPrefSollemnity = ''
            };
            if (!newPrefSollemnity && !newPrefSrc) { newPrefSrc = 'eig' };
            setPrefSrc(newPrefSrc);
            setPrefSollemnity(newPrefSollemnity);
            if (source === 'wt') { setUseCommemoration(false) }
            else { setUseCommemoration(isCommemoration) }
        }
    };

    return (
        <div className={`space-y-1 ${className}`}>
            {/* Bezeichnung Hochfest/Fest/Gedenktag */}
            {texts.laudes?.wt?.button && !hasEig && (
                <div className="text-center text-xl font-bold text-gray-900 dark:text-gray-100">
                    {formatText(texts.laudes.wt.button)}
                </div>
            )}
            {/* Weekday Button */}
            {showWt && !reduced && (<>
                <button
                    onClick={() => handleSourceSelect('wt')}
                    className={`w-full p-1 mb-1 text-sm text-center rounded-sm
                        ${getWeekdayButtonColor(season, disableButtons)}
                        ${(prefSrc === 'eig' && !useCommemoration && !disableButtons.sources)
                            ? 'ring-2 ring-yellow-500' : ''}`}
                    disabled={disableButtons.sources}
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
            {sourceKeys.map(source => {
                if (!hasValidSource(source)) return null;
                const doUnderline = prefSrc === source
                    && (!isCommemoration || (isCommemoration && useCommemoration))
                    && !(source !== 'eig' && disableButtons.sources)
                    && !(source === 'eig' && disableButtons.eig);
                return (
                    <button
                        key={source}
                        onClick={() => handleSourceSelect(source)}
                        className={`w-full p-1 pt-2 text-sm text-center rounded-sm
                                    ${getButtonColor(source, disableButtons)}
                                    ${(doUnderline) ? 'ring-2 ring-yellow-500' : ''}`}
                        disabled={source === 'eig' ? disableButtons.eig : disableButtons.sources}
                    >
                        {formatText(texts.laudes[source].button) || "ein Heiliger"}
                    </button>
                );
            })}
            {!reduced && (
                <div className="flex gap-1">
                    <button
                        onClick={() => handleSourceSelect('', 'kirchw')}
                        className={`flex-1 py-2 text-center rounded-sm
                            bg-gray-100 dark:bg-gray-900 text-xs
                            text-yellow-600 dark:text-yellow-500
                            hover:bg-gray-100 dark:hover:bg-gray-800
                            ${prefSollemnity === 'kirchw' ? 'ring-2 ring-yellow-500' : ''}`}
                    >
                        Kirchweihe
                    </button>

                    {(rank_date < 5 && (hasEig || hasAdLib)) && (
                        <button
                            onClick={() => handleSourceSelect('lokal', 'soll')}
                            className={`flex-1 py-2 text-center rounded-sm
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
                        className={`flex-1 py-2 text-center rounded-sm
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