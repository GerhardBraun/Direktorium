import React from "react";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { calendarData } from './Calendar.ts';

export const allowedOverlaps = new Set([
    'AAA-1-21-n1', // Agnes und Meinrad
    'AAA-2-14-oblig',
    'AAA-2-24-oblig',
    'AAA-4-25-oblig',
    'AAA-4-29-oblig',
    'AAA-6-11-oblig',
    'AAA-7-23-oblig',
    'AAA-7-29-oblig',
    'AAA-8-22-oblig',
    'AAA-9-21-oblig',
    'AAA-10-15-oblig',
    'AAA-10-18-oblig',
    'AAA-11-21-oblig',
    'AAA-12-13-n1', // Lucia und Odilia
    'Fulda-2-4-oblig', // Rabanus Maurus: F statt g
    'Fulda-2-14-d1', // Valentin vs. Cyrill und Methodius
    'Fulda-4-27-oblig', // Petrus Kanisius: G statt g
    'Fulda-6-5-oblig', // Bonifatius: H statt F
    'Fulda-7-29-d1', // Simplizius, Faustinus und Beatrix vs. Marta, Maria und Lazarus
    'Fulda-8-14-oblig', // Kathedralweihe vs. Maximilian Kolbe
    'Fulda-9-28-oblig', // Lioba: F statt g
    'Fulda-11-19-oblig', // Elisabeth: F statt G
])

export const checkedReferences = new Set([
    'Fulda-2-4-oblig',
    'Fulda-4-27-oblig',
    'Fulda-6-5-oblig',
    'Fulda-8-17-d1',
    'Fulda-9-28-oblig',
    'Fulda-11-19-oblig',
])

function isAllowedOverlap(month, day, source, diocese = '') {
    if (diocese) diocese = diocese + '-'
    return allowedOverlaps.has(`${diocese}${month}-${day}-${source}`);
}

function deepMerge(target, source) {
    const result = { ...target }

    for (const key in source) {
        if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
            result[key] = deepMerge(result[key] || {}, source[key]);
        } else result[key] = source[key];
    }
    return result
}

function getReferenceData(reference) {
    if (!reference) return {};

    // Parse reference: diocese-month-day-source
    const parts = reference.split('-');
    if (parts.length !== 4) {
        console.warn('Ungültiges Referenz-Format:', reference);
        return {};
    }
    const [refDiocese, refMonth, refDay, refSource] = parts;

    try {
        const referenceData = calendarData?.[refDiocese]?.[refMonth]?.[refDay]?.[refSource];
        if (referenceData) {
            // Erstelle eine tiefe Kopie der Referenz-Daten
            return JSON.parse(JSON.stringify(referenceData));
        } else {
            console.warn('Referenz-Daten nicht gefunden:', reference);
            return {};
        }
    } catch (error) {
        console.error('Fehler beim Abrufen der Referenz-Daten:', reference, error);
        return {};
    }
}

// Zusammenführung von Regionalkalender und Diözesankalender zu localCalendarData
// Gliederung: Monat - Tag - Source
export function getCalendarData() {
    const diocese = localStorage.getItem('diocese') || 'Fulda'
    if (diocese === 'AAA') return JSON.parse(JSON.stringify(calendarData.AAA));
    const diocesanData = calendarData?.[diocese] || {}
    // console.log('diocesanData', diocesanData)

    const result = JSON.parse(JSON.stringify(calendarData.AAA));
    // console.log('calendarData eingelesen', JSON.parse(JSON.stringify(calendarData.AAA)))

    // Füge Daten aus diocesanData hinzu
    for (const month in diocesanData) {
        for (const day in diocesanData[month]) {
            // Stelle sicher, dass die Struktur existiert
            if (!result[month]) result[month] = {};
            if (!result[month][day]) result[month][day] = {};

            for (const source in diocesanData[month][day]) {
                const existingSourceData = JSON.parse(JSON.stringify(result[month][day][source] || {}));
                let newSourceData = {};

                const reference = diocesanData[month][day][source]?.Laudes?.referenz || '';
                if (reference) {
                    newSourceData = getReferenceData(reference);
                    // console.log('Referenz-Daten geladen für', `${month}-${day}-${source}:`, reference, newSourceData);
                }
                // Merge mit den aktuellen diocesanData (überschreibt/ergänzt Referenz-Daten)
                const currentDiocesanData = JSON.parse(JSON.stringify(diocesanData[month][day][source]));
                // Entferne das reference-Feld aus den zu mergenden Daten
                delete currentDiocesanData.reference;
                newSourceData = deepMerge(newSourceData, currentDiocesanData);


                if (source === 'oblig') {
                    // Lösche alle anderen Daten
                    // Prüfung wird jetzt vom Konverter übernommen
                    //if (Object.keys(result[month][day]).length > 0 && !isAllowedOverlap(month, day, source, diocese))
                    //    console.warn('oblig aus diocesanData überschreibt alle anderen Daten: ', month, day, 'Gelöschte Daten: ', result[month][day])
                    result[month][day] = { 'oblig': newSourceData };
                } else {
                    //if (result[month][day].oblig && !isAllowedOverlap(month, day, source, diocese))
                    //    console.warn('diocesanData zu bestehendem oblig-Eintrag hinzugefügt: ', month, day, source, 'Bestehender oblig: ', result[month][day].oblig)
                    //if (result[month][day][source] && !isAllowedOverlap(month, day, source, diocese))
                    //    console.warn('Daten existieren bereits: ', month, day, source, existingSourceData, newSourceData)
                }
                result[month][day][source] = deepMerge(existingSourceData, newSourceData)
            }
        }
    };

    return result;
};

