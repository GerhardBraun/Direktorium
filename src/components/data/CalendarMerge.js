import { getLocalStorage } from '../utils/localStorage.js';
import { calendarData } from './Calendar.ts';

export const allowedOverlaps = new Set([
    'AAA-1-21-n1', // Agnes und Meinrad
    'AAA-2-14-eig',
    'AAA-2-24-eig',
    'AAA-4-25-eig',
    'AAA-4-29-eig',
    'AAA-6-11-eig',
    'AAA-7-23-eig',
    'AAA-7-29-eig',
    'AAA-8-22-eig',
    'AAA-9-21-eig',
    'AAA-10-15-eig',
    'AAA-10-18-eig',
    'AAA-11-21-eig',
    'AAA-12-13-n1', // Lucia und Odilia
    'Fulda-2-4-eig', // Rabanus Maurus: F statt g
    'Fulda-2-14-d1', // Valentin vs. Cyrill und Methodius
    'Fulda-4-27-eig', // Petrus Kanisius: G statt g
    'Fulda-6-5-eig', // Bonifatius: H statt F
    'Fulda-7-29-d1', // Simplizius, Faustinus und Beatrix vs. Marta, Maria und Lazarus
    'Fulda-8-14-eig', // Kathedralweihe vs. Maximilian Kolbe
    'Fulda-9-28-eig', // Lioba: F statt g
    'Fulda-11-19-eig', // Elisabeth: F statt G
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

// Zusammenführung von Regionalkalender und Diözesankalender zu localCalendarData
// Gliederung: Monat - Tag - Source
export const localCalendarData = (() => {
    const diocese = getLocalStorage('diocese') || 'Fulda'
    if (diocese === 'AAA') return JSON.parse(JSON.stringify(calendarData.AAA));
    const diocesanData = calendarData?.[diocese] || {}
    console.log('diocesanData', diocesanData)

    const result = JSON.parse(JSON.stringify(calendarData.AAA));
    console.log('calendarData eingelesen', JSON.parse(JSON.stringify(calendarData.AAA)))

    // Füge Daten aus diocesanData hinzu
    for (const month in diocesanData) {
        for (const day in diocesanData[month]) {
            // Stelle sicher, dass die Struktur existiert
            if (!result[month]) result[month] = {};
            if (!result[month][day]) result[month][day] = {};

            for (const source in diocesanData[month][day]) {
                const existingSourceData = JSON.parse(JSON.stringify(result[month][day][source] || {}));
                const newSourceData = JSON.parse(JSON.stringify(diocesanData[month][day][source]));

                if (source === 'eig') {
                    // Lösche alle anderen Daten
                    // Prüfung wird jetzt vom Konverter übernommen
                    //if (Object.keys(result[month][day]).length > 0 && !isAllowedOverlap(month, day, source, diocese))
                    //    console.warn('eig aus diocesanData überschreibt alle anderen Daten: ', month, day, 'Gelöschte Daten: ', result[month][day])
                    result[month][day] = { 'eig': newSourceData };
                } else {
                    //if (result[month][day].eig && !isAllowedOverlap(month, day, source, diocese))
                    //    console.warn('diocesanData zu bestehendem eig-Eintrag hinzugefügt: ', month, day, source, 'Bestehender eig: ', result[month][day].eig)
                    //if (result[month][day][source] && !isAllowedOverlap(month, day, source, diocese))
                    //    console.warn('Daten existieren bereits: ', month, day, source, existingSourceData, newSourceData)
                }
                result[month][day][source] = deepMerge(existingSourceData, newSourceData)
            }
        }
    };

    return result;
})();

