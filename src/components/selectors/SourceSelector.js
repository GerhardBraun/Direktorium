import React from 'react';
import { useMemo, useEffect, useState } from "react";

// Array mit allen zu durchsuchenden Schlüsseln
// Mit d1, d2 können Eigenfeiern VOR den denen des Regionalkalenders sortiert werden,
// mit d11, d12 NACH denen des Regionalkalenders
// mar ist nur für das Gedächtnis Mariens am Samstag
// obligOnSunday: gebotener Gedenktag oder Fest, der vom Rang des Tages verdrängt wird
// (v.a. am Sonntag); nur wählbar bei Feier als Hochfest (s. blockNotWtSources)
export const sourceKeys = ['oblig', 'obligOnSunday', 'd1', 'd2', 'dpar', 'dmob', 'n1', 'n2', 'n3', 'n4', 'n5', 'd11', 'd12', 'd13', 'd1mob', 'mar'];

// Hilfsfunktion zum Prüfen, ob eine Quelle gültige Daten hat
const formatText = (text) => {
    return text?.replace(/°/g, '\u00a0')
}

const SourceSelector = ({
    texts,
    selectedSource, setSelectedSource,
    prefSollemnity, setPrefSollemnity,
    useCommemoration, setUseCommemoration,
    onSelectHour,
    viewMode,
    hour = '',
    season = 'j',
    reduced = false,
    className = ''
}) => {

    const [storedSource, setStoredSource] = useState('');
    const isErsteVesper = useMemo(() => {
        const buttonEig = texts?.vesper?.oblig?.button ? 'oblig' : 'wt';
        if (viewMode === 'prayerText') {
            if (hour === 'erstev') return 'erstev'
            if (hour === 'vesper' && texts?.rank?.hasErsteVesper && prefSollemnity !== 'soll') return buttonEig
        }
        return false
    }, [viewMode, hour, prefSollemnity, texts]);

    // Verdrängte Heiligenfeiern (z.B. am Sonntag) sind nur bei Feier als Hochfest wählbar
    const isBlocked = !!texts?.rank?.blockNotWtSources && prefSollemnity !== 'soll';

    // wählbare Source
    const hasValidSource = (source) => {
        if (isBlocked) return false;
        return isSourcePresent(source);
    };

    // vorhandene Source (auch wenn sie wegen blockNotWtSources nicht wählbar ist)
    const isSourcePresent = (source) => {
        if (source === 'any') {
            // Finde die erste source in sourceKeys (außer 'oblig'), die in dieser Hore vorhanden ist
            // (Einzelprüfung, damit z.B. 'mar' außerhalb von Invitatorium, Lesehore und Laudes
            // nicht mitzählt: sonst erscheinen "Vom Wochentag" bzw. "lokale Feier als Hochfest"
            // ohne wählbare Heiligenfeier)
            return sourceKeys
                .filter(key => key !== 'oblig')
                .find(key => isSourcePresent(key)) || false;
        }

        if (source === 'mar'
            && !['invitatorium', 'lesehore', 'laudes'].includes(hour)
            && viewMode !== 'prayer') return false;

        return !!texts?.laudes?.[source]?.oration;
    };

    useEffect(() => {
        if (!selectedSource) {
            if (!['kirchw', 'verst'].includes(prefSollemnity)) {
                setSelectedSource(hasValidSource('oblig') ? 'oblig' : hasValidSource('any') ? 'any' : '')
            }
        }
        else if (!hasValidSource(selectedSource)) {
            setSelectedSource('oblig')
        };
    }, [selectedSource, texts]);

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
            case 'v': return 'btn-violet'
            case 'm': return 'btn-blue'
            default: return 'btn-white'
        }
    };

    const getWeekdayButtonColor = (season, disableButtons) => {
        if (disableButtons.wt) return 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600';
        switch (season) {
            case 'j': return 'btn-green';
            case 'a':
            case 'q': return 'btn-violet';
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
                    setStoredSource(selectedSource);
                    blockToggle = false
                }
            };
            if (source === 'lokal' && prefSollemnity === 'kirchw'
            ) { blockToggle = false };
            if (source === 'wt') {
                onSelectHour('vesper', texts);
                setSelectedSource('oblig');
                setPrefSollemnity('');
                setStoredSource('');
            }
        }
        if (!blockToggle) {
            let newSource = source;
            if (source === 'wt') { newSource = 'oblig' };
            if (source === 'lokal') {
                if (storedSource) {
                    newSource = storedSource;
                    setStoredSource('');
                } else {
                    newSource = selectedSource;
                    // Vorauswahl: erste vorhandene Source gemäß sourceKeys
                    // (auch verdrängte, die erst mit prefSollemnity='soll' wählbar werden)
                    if (selectedSource === 'oblig' && !hasOblig) newSource = presentAdLib
                    if (!selectedSource) newSource = hasOblig ? 'oblig' : presentAdLib
                    if (!newSource) newPrefSollemnity = ''
                }
            };
            // Abwahl von "lokale Feier als Hochfest" bei verdrängten Heiligenfeiern
            // oder in der Vesper, die Erste Vesper des Folgetages ist:
            // Rückkehr zur Feier des Tages
            if (source === 'lokal' && newPrefSollemnity !== 'soll'
                && (texts?.rank?.blockNotWtSources || isErsteVesperOfNextDay)
            ) { newSource = 'oblig' };
            // verdrängte Heiligenfeier ist ohne prefSollemnity='soll' nicht wählbar
            if (texts?.rank?.blockNotWtSources && newPrefSollemnity !== 'soll'
                && newSource && newSource !== 'oblig'
            ) { newSource = 'oblig' };
            if (!newPrefSollemnity && !newSource) { newSource = 'oblig' };
            setSelectedSource(newSource);
            setPrefSollemnity(newPrefSollemnity);
            if (source === 'wt') { setUseCommemoration(false) }
            else { setUseCommemoration(isCommemoration) }
        }
    };

    const rank = texts?.rank || { wt: 0, date: 0 }
    const isCommemoration = rank?.isCommemoration || false
    const hasOblig = hasValidSource('oblig') // G, F oder H
    const hasAdLib = hasValidSource('any')
    // vorhandene (ggf. verdrängte) Heiligenfeiern
    const presentOblig = isSourcePresent('oblig')
    const presentAdLib = isSourcePresent('any')

    // Vesper, die Erste Vesper des folgenden Sonntags/Hochfestes ist
    // (unabhängig davon, ob die Feier des Tages als Hochfest gewählt ist)
    const isErsteVesperOfNextDay = hour === 'vesper' && !!texts?.rank?.hasErsteVesper

    // "Vom Wochentag" nur bei nichtgebotenem Gedenktag;
    // nicht bei verdrängten Heiligenfeiern und nicht in der Vesper, die Erste Vesper ist:
    // dort erfolgt die Rückkehr durch Abwahl von "lokale Feier als Hochfest"
    const showWt = hasAdLib && !hasOblig
        && !texts?.rank?.blockNotWtSources && !isErsteVesperOfNextDay

    const disableButtons = {}
    disableButtons.wt = isErsteVesper && !prefSollemnity;
    disableButtons.sources = isErsteVesper && prefSollemnity !== 'soll';
    disableButtons.oblig = isErsteVesper === 'oblig' && prefSollemnity === 'soll';

    let obligButton = {}
    const obligEntry = texts?.vesper?.oblig?.button
    if (obligEntry && isErsteVesper === 'oblig') {
        obligButton = {
            "button": formatText(obligEntry),
            "farbe": texts?.vesper?.oblig?.farbe || 'w'
        }
    }

    // Anzeige des Buttons für lokales Hochfest
    let useToggle = (!(showWt && selectedSource === 'oblig') || useCommemoration) &&
        ((prefSollemnity !== 'kirchw' && prefSollemnity !== 'verst'))
    if (isErsteVesper) useToggle = true

    return (
        <div className={`space-y-1 ${className}`}
            aria-hidden="true">
            {/* Bezeichnung Hochfest/Fest/Gedenktag */}
            {texts.laudes?.wt?.button && !hasOblig && (
                <div className="text-center text-xl font-bold text-gray-900 dark:text-gray-100">
                    {formatText(texts.laudes.wt.button)}
                </div>
            )}
            {/* Weekday Button */}
            {showWt && !reduced && !obligButton.button && (<>
                <button
                    onClick={() => handleSourceSelect('wt')}
                    className={`w-full p-1 mb-1 text-sm text-center rounded-sm
                        ${getWeekdayButtonColor(season, disableButtons)}
                        ${(selectedSource === 'oblig' && !useCommemoration && !disableButtons.sources)
                            ? 'ring-2 ring-[#b6a03a]' : ''}`}
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
            {obligButton.button && (<>
                <button
                    onClick={() => handleSourceSelect('wt')}
                    className={`w-full p-1 mb-1 text-sm text-center rounded-sm
                        ${obligButton.farbe?.startsWith('r') ? 'btn-red' : 'btn-white'}
                        ${(selectedSource === 'oblig' && !useCommemoration && !disableButtons.oblig)
                            ? 'ring-2 ring-[#b6a03a]' : ''}`}
                    disabled={disableButtons.oblig}
                >
                    {obligButton.button}
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
                if (!isSourcePresent(source)) return null;
                // verdrängte Heiligenfeier: sichtbar, aber erst bei Feier als Hochfest wählbar
                const sourceDisabled = disableButtons.sources || !hasValidSource(source);
                const doUnderline = selectedSource === source
                    && (!isCommemoration || (isCommemoration && useCommemoration))
                    && !sourceDisabled;
                return (
                    <button
                        key={source}
                        onClick={() => handleSourceSelect(source)}
                        className={`w-full p-1 pt-2 text-sm text-center rounded-sm
                                    ${getButtonColor(source, { ...disableButtons, sources: sourceDisabled })}
                                    ${(doUnderline) ? 'ring-2 ring-[#b6a03a]' : ''}`}
                        disabled={sourceDisabled}
                    >
                        {formatText(texts.laudes[source].button) || "ein Heiliger"}
                    </button>
                );
            })}
            {texts.calendar1962?.length > 0 && viewMode === 'prayer' && (
                <div className="w-full p-1 pt-2 text-sm text-center text-gray-600 dark:text-gray-400">
                    {texts.calendar1962.map((entry, index) => (
                        <div key={index}>{formatText(entry)}</div>
                    ))}
                </div>
            )}
            {!reduced && hour !== 'vigil' && (
                <div className="flex gap-1">
                    <button
                        onClick={() => handleSourceSelect('', 'kirchw')}
                        className={`flex-1 py-2 text-center rounded-sm
                            bg-gray-100 dark:bg-gray-900 text-xs
                            text-yellow-600 dark:text-yellow-500
                            hover:bg-gray-100 dark:hover:bg-gray-800
                            ${prefSollemnity === 'kirchw' ? 'ring-2 ring-[#b6a03a]' : ''}`}
                    >
                        Kirchweihe
                    </button>

                    {(rank.date < 5 && (presentOblig || presentAdLib)) && (
                        <button
                            onClick={() => handleSourceSelect('lokal', 'soll')}
                            className={`flex-1 py-2 text-center rounded-sm
                            bg-gray-100 dark:bg-gray-900 text-xs
                            ${useToggle ? 'text-yellow-600 dark:text-yellow-500' : 'text-gray-200 dark:text-gray-800'}
                                hover:bg-gray-100 dark:hover:bg-gray-800
                                ${prefSollemnity === 'soll' ? 'ring-2 ring-[#b6a03a]' : ''}`}
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
                            ${prefSollemnity === 'verst' ? 'ring-2 ring-[#b6a03a]' : ''}`}
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