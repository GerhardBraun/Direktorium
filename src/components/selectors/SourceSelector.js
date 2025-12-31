import React from 'react';
import { useMemo, useEffect, useState } from "react";

// Array mit allen zu durchsuchenden Schlüsseln
// Mit d1, d2 können Eigenfeiern VOR den denen des Regionalkalenders sortiert werden,
// mit d11, d12 NACH denen des Regionalkalenders
// mar ist nur für das Gedächtnis Mariens am Samstag
export const sourceKeys = ['oblig', 'd1', 'd2', 'n1', 'n2', 'n3', 'n4', 'n5', 'd11', 'd12', 'mar'];

// Hilfsfunktion zum Prüfen, ob eine Quelle gültige Daten hat
const formatText = (text) => {
    return text?.replace(/°/g, '\u00a0')
}

const SourceSelector = ({
    texts,
    prefSrc, setPrefSrc,
    prefSollemnity, setPrefSollemnity,
    useCommemoration, setUseCommemoration,
    onSelectHour,
    viewMode,
    hour = '',
    season = 'j',
    reduced = false,
    className = ''
}) => {

    const [storedPrefSrc, setStoredPrefSrc] = useState('');
    const isErsteVesper = useMemo(() => {
        const buttonEig = texts?.vesper?.oblig?.button ? 'oblig' : 'wt';
        if (viewMode === 'prayerText') {
            if (hour === 'erstev') return 'erstev'
            if (hour === 'vesper' && texts.hasErsteVesper && prefSollemnity !== 'soll') return buttonEig
        }
        return false
    }, [viewMode, hour, prefSollemnity, texts]);

    const hasValidSource = (source) => {
        if (source === 'any') {
            // Finde die erste source in sourceKeys (außer 'oblig'), die eine Oration hat
            return sourceKeys
                .filter(key => key !== 'oblig')
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
                setPrefSrc(hasValidSource('oblig') ? 'oblig' : hasValidSource('any') ? 'any' : '')
            }
        }
        else if (!hasValidSource(prefSrc)) {
            setPrefSrc('oblig')
        };
    }, [prefSrc, texts]);

    if (!texts) return null;

    // Hilfsfunktion für Button-Farben basierend auf der Quellenfarbe
    const getButtonColor = (source, disableButtons) => {
        if (source === 'oblig' && disableButtons?.oblig) return 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600';
        if (disableButtons?.sources) return 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600';
        let color = 'w'
        if (source === 'erstev')
            color = texts?.vesper?.oblig?.farbe
        else color = texts?.laudes?.[source]?.farbe

        switch (color?.charAt(0)?.toLowerCase()) {
            case 'r': return 'btn-red'
            case 'm': return 'btn-blue'
            default: return 'btn-white'
        }
    };

    const getWeekdayButtonColor = (season, disableButtons) => {
        if (disableButtons.wt) return 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600';
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
        if (isErsteVesper === 'erstev') {
            blockToggle = true;
            if (sourceKeys.includes(source) &&
                (prefSollemnity === 'soll' || prefSollemnity === 'kirchw')
            ) { blockToggle = false };
            if (setSollemnity === 'kirchw'
            ) {
                if (prefSollemnity === 'kirchw') {
                    source = 'lokal';
                    newPrefSollemnity = 'soll';
                    blockToggle = false
                } else {
                    setStoredPrefSrc(prefSrc);
                    blockToggle = false
                }
            };
            if (source === 'lokal' && prefSollemnity === 'kirchw'
            ) { blockToggle = false };
            if (source === 'wt') {
                onSelectHour('vesper', texts);
                setPrefSrc('oblig');
                setPrefSollemnity('');
                setStoredPrefSrc('');
            }
        }
        if (!blockToggle) {
            let newPrefSrc = source;
            if (source === 'wt') { newPrefSrc = 'oblig' };
            if (source === 'lokal') {
                if (storedPrefSrc) {
                    newPrefSrc = storedPrefSrc;
                    setStoredPrefSrc('');
                } else {
                    newPrefSrc = prefSrc;
                    if (prefSrc === 'oblig' && !hasOblig) newPrefSrc = hasAdLib
                    if (!prefSrc) newPrefSrc = hasOblig ? 'oblig' : hasAdLib
                    if (!newPrefSrc) newPrefSollemnity = ''
                }
            };
            if (!newPrefSollemnity && !newPrefSrc) { newPrefSrc = 'oblig' };
            setPrefSrc(newPrefSrc);
            setPrefSollemnity(newPrefSollemnity);
            if (source === 'wt') { setUseCommemoration(false) }
            else { setUseCommemoration(isCommemoration) }
        }
    };

    const rank = texts?.rank || { wt: 0, date: 0 }
    const isCommemoration = rank?.isCommemoration || false
    const hasOblig = hasValidSource('oblig') // G, F oder H
    const hasAdLib = hasValidSource('any')

    const showWt = rank.wt < 3 && (
        (hasAdLib && !hasOblig) ||   // nur nichtgebotener Gedenktag
        (isCommemoration && (hasOblig || hasAdLib)) // bei Kommemoration auch G
    )

    const disableButtons = {}
    disableButtons.wt = isErsteVesper && !prefSollemnity;
    disableButtons.sources = isErsteVesper && prefSollemnity !== 'soll';
    disableButtons.oblig = isErsteVesper === 'oblig' && prefSollemnity === 'soll';

    let eigButton = {}
    const eigEntry = texts?.vesper?.oblig?.button
    if (eigEntry && isErsteVesper === 'oblig') {
        eigButton = {
            "button": formatText(eigEntry),
            "farbe": texts?.vesper?.oblig?.farbe || 'w'
        }
    }

    // Anzeige des Buttons für lokales Hochfest
    let useToggle = (!(showWt && prefSrc === 'oblig') || useCommemoration) &&
        ((prefSollemnity !== 'kirchw' && prefSollemnity !== 'verst'))
    if (isErsteVesper) useToggle = true

    return (
        <div className={`space-y-1 ${className}`}>
            {/* Bezeichnung Hochfest/Fest/Gedenktag */}
            {texts.laudes?.wt?.button && !hasOblig && (
                <div className="text-center text-xl font-bold text-gray-900 dark:text-gray-100">
                    {formatText(texts.laudes.wt.button)}
                </div>
            )}
            {/* Weekday Button */}
            {showWt && !reduced && !eigButton.button && (<>
                <button
                    onClick={() => handleSourceSelect('wt')}
                    className={`w-full p-1 mb-1 text-sm text-center rounded-sm
                        ${getWeekdayButtonColor(season, disableButtons)}
                        ${(prefSrc === 'oblig' && !useCommemoration && !disableButtons.sources)
                            ? 'ring-2 ring-yellow-500' : ''}`}
                    disabled={disableButtons.wt}
                >
                    Vom Wochentag
                </button>
                {isCommemoration && prefSollemnity !== 'soll' && (
                    <div className='text-center text-xs text-yellow-600 dark:text-yellow-500'>
                        Für die Kommemoration:</div>)}
            </>
            )}
            {/* oblig-Button für die Erste Vesper*/}
            {eigButton.button && (<>
                <button
                    onClick={() => handleSourceSelect('wt')}
                    className={`w-full p-1 mb-1 text-sm text-center rounded-sm
                        ${eigButton.farbe === 'r' ? 'btn-red' : 'btn-white'}
                        ${(prefSrc === 'oblig' && !useCommemoration && !disableButtons.oblig)
                            ? 'ring-2 ring-yellow-500' : ''}`}
                    disabled={disableButtons.oblig}
                >
                    {eigButton.button}
                </button>
            </>
            )}
            {reduced && (<>
                <div className='mt-3 text-center text-xs text-yellow-600 dark:text-yellow-500'>
                    Für die Kommemoration:</div>
            </>
            )}
            {/* Saint Selection Buttons */}
            {sourceKeys.map(source => {
                if (!hasValidSource(source)) return null;
                const doUnderline = prefSrc === source
                    && (!isCommemoration || (isCommemoration && useCommemoration))
                    && !disableButtons.sources;
                return (
                    <button
                        key={source}
                        onClick={() => handleSourceSelect(source)}
                        className={`w-full p-1 pt-2 text-sm text-center rounded-sm
                                    ${getButtonColor(source, disableButtons)}
                                    ${(doUnderline) ? 'ring-2 ring-yellow-500' : ''}`}
                        disabled={disableButtons.sources}
                    >
                        {formatText(texts.laudes[source].button) || "ein Heiliger"}
                    </button>
                );
            })}
            {!reduced && hour !== 'vigil' && (
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

                    {(rank.date < 5 && (hasOblig || hasAdLib)) && (
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
                            ${isErsteVesper !== 'erstev' ? 'text-yellow-600 dark:text-yellow-500' : 'text-gray-200 dark:text-gray-800'}
                            hover:bg-gray-100 dark:hover:bg-gray-800
                            ${prefSollemnity === 'verst' ? 'ring-2 ring-yellow-500' : ''}`}
                        disabled={isErsteVesper === 'erstev'}
                    >
                        Ged der Verst
                    </button>
                </div>
            )}
        </div>
    );
};

export default SourceSelector;