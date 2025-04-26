import { brevierData } from './data/Brevier.ts';
import { lecture1Data } from './data/Lecture1.ts';
import { lecture2Data } from './data/Lecture2.ts';
import { psalmsData } from './data/PsHymn.ts';
import { adlibData } from './data/AdLib.ts';
import { getLiturgicalInfo } from './comp_LitCalendar.js';

const personalData = (() => {
    try {
        const stored = localStorage.getItem('personalData');
        return stored ? JSON.parse(stored) : {};
    } catch (error) {
        console.error('Fehler beim Laden der personalisierten Daten:', error);
        return {};
    }
})();

// Fields that should be processed as references to psalmsData
const referenceFields = [
    'ps_1', 'ps_2', 'ps_3',
    'hymn_1', 'hymn_2', 'hymn_3', 'hymn_nacht', 'hymn_kl',
    'ev', 'ev_lat', 'vu', 'vu_lat', 'marant', 'marant_lat'
];


// Helper function to process references and get additional data from psalmsData
function processReference(ref) {
    if (!ref) return null;

    const wholePart = Math.floor(ref);

    // Dezimalanteil als String, um die Länge zu prüfen
    const decimalStr = (ref % 1).toFixed(3).split('.')[1];

    // Multipliziere mit 10 für einstellige, mit 1000 für dreistellige Dezimalzahlen
    const multiplier = decimalStr.replace(/0+$/, '').length === 1 ? 10 : 1000;
    const decimalPart = Math.round((ref % 1) * multiplier);

    const data = psalmsData[wholePart]?.[decimalPart] || {};

    return {
        number: wholePart,
        ...data
    };
}

// Helper function to process all reference fields in an object
function processReferenceFields(data, removeZeros = false) {
    if (!data) return {};

    const processedData = { ...data };

    referenceFields.forEach(field => {
        if (processedData[field]) {
            // If removeZeros is true and value is 0, remove the field
            if (removeZeros && processedData[field] === 0) {
                delete processedData[field];
            } else {
                processedData[field] = {
                    reference: processedData[field],
                    ...processReference(processedData[field])
                };
            }
        }
    });

    return processedData;
}

// Helper function to clean up zero-value reference fields after all processing
function cleanupZeroReferences(hours) {
    Object.keys(hours).forEach(hour => {
        Object.keys(hours[hour]).forEach(source => {
            referenceFields.forEach(field => {
                const fieldData = hours[hour][source][field];
                if (fieldData === 0 || fieldData?.reference === 0) {
                    delete hours[hour][source][field];
                }
            });
            // Remove empty source objects
            if (Object.keys(hours[hour][source]).length === 0) {
                delete hours[hour][source];
            }
        });
    });
    return hours;
}

// Helper function to determine if we need first vespers

function mergeData(hours, newData, source) {
    if (!newData) return;

    // Festlegen, welche Stunden für die jeweilige Source verarbeitet werden sollen
    const targetHours = (source === 'k1' || source === 'k2') ? ['komplet'] : Object.keys(hours);

    // Process "each" data if available
    if (newData.each) {
        const processedEachData = processReferenceFields(newData.each, false);
        Object.entries(processedEachData).forEach(([field, value]) => {
            if (!field.startsWith(source)) {
                targetHours.forEach(hour => {
                    if (!hours[hour][source]) {
                        hours[hour][source] = {};
                    }
                    hours[hour][source][field] = value;
                });
            }
        });
    }

    // Process hour-specific data
    Object.entries(newData).forEach(([hourName, hourData]) => {
        const hour = hourName.toLowerCase();
        // Prüfe, ob die Stunde in den Zielstunden enthalten ist
        if (hours[hour] && hourName !== 'each' && targetHours.includes(hour)) {
            if (!hours[hour][source]) {
                hours[hour][source] = {};
            }
            const processedHourData = processReferenceFields(hourData, false);
            Object.entries(processedHourData).forEach(([field, value]) => {
                if (!field.startsWith(source)) {
                    hours[hour][source][field] = value;
                }
            });
        }
    });
}


function getPrayerTexts(brevierData, personalData, date, calendarDate = 0) {   // für verschobene Hochfeste kann deren calendarDate eigens angegeben werden
    calendarDate = calendarDate ?? date
    const {
        season,
        week,
        dayOfWeek,
        weekOfPsalter,
        combinedSWD,
        rank_wt,
        hasErsteVesper,
        isCommemoration,
        isImmacHeart
    } = getLiturgicalInfo(date);
    const { rank_date } = getLiturgicalInfo(calendarDate);

    const calendarDay = calendarDate.getDate();
    const calendarMonth = calendarDate.getMonth() + 1;
    const lectureYear = date.getFullYear() + (
        (season === 'a' || (calendarMonth === 12 && season !== 'j'))
            ? 1 : 0);
    const lectureData = lectureYear % 2 === 0 ? lecture2Data : lecture1Data;

    // Initialize structure - jetzt auch mit erstev
    const hours = {
        erstev: { wt: {}, pers: {} },
        invitatorium: { wt: {}, pers: {} },
        laudes: { wt: {}, pers: {} },
        lesehore: { wt: {}, pers: {} },
        terz: { wt: {}, pers: {} },
        sext: { wt: {}, pers: {} },
        non: { wt: {}, pers: {} },
        vesper: { wt: {}, pers: {} },
        prefsollemnity: { wt: {}, pers: {} },
        komplet: { wt: {}, pers: {} }
    };

    try {
        // Layer 0: Ordinary texts from multiple sources
        const sourcesToCheck = ['wt', 'k1', 'k2', 'soll', 'kirchw', 'verst'];
        sourcesToCheck.forEach(source => {
            const ordData = brevierData?.[source]?.['each'];
            const ordEvenData = brevierData?.[source]?.['even'];
            const ordSeasonData = brevierData?.[source]?.[season];
            if (ordData) {
                if (ordData['each']) {
                    mergeData(hours, ordData['each'], source);
                }
                if (ordData[dayOfWeek]) {
                    mergeData(hours, ordData[dayOfWeek], source);
                }
            }
            if (week % 2 === 0 && ordEvenData) {
                if (ordEvenData.each) {
                    mergeData(hours, ordEvenData.each, source);
                }
                if (ordEvenData[dayOfWeek]) {
                    mergeData(hours, ordEvenData[dayOfWeek], source);
                }
            }
            if (ordSeasonData) {
                if (ordSeasonData['each']) {
                    mergeData(hours, ordSeasonData['each'], source);
                }
                if (ordSeasonData[dayOfWeek]) {
                    mergeData(hours, ordSeasonData[dayOfWeek], source);
                }
            }
        });
        //Ordinary data from personalData
        const ordData = personalData?.wt?.each;
        const ordEvenData = personalData?.wt?.even;
        const ordSeasonData = personalData?.wt?.[season];
        console.log('DataProcessor: PersonalData each/season', ordData, ordSeasonData)
        if (ordData) {
            if (ordData.each) {
                mergeData(hours, ordData.each, 'pers');
            }
            if (ordData[dayOfWeek]) {
                mergeData(hours, ordData[dayOfWeek], 'pers');
            }
        }
        if (week % 2 === 0 && ordEvenData) {
            if (ordEvenData.each) {
                mergeData(hours, ordEvenData.each, 'pers');
            }
            if (ordEvenData[dayOfWeek]) {
                mergeData(hours, ordEvenData[dayOfWeek], 'pers');
            }
        }
        if (ordSeasonData) {
            if (ordSeasonData.each) {
                mergeData(hours, ordSeasonData.each, 'pers');
            }
            if (ordSeasonData[dayOfWeek]) {
                mergeData(hours, ordSeasonData[dayOfWeek], 'pers');
            }
        }


        function addLayer(source, week, dayOfWeek, komplet = false) {
            const layerData = brevierData?.[source]?.[week]?.[dayOfWeek];
            const personalLayerData = personalData?.[source]?.[week]?.[dayOfWeek];
            const lectureLayerData = lectureData?.[source]?.[week]?.[dayOfWeek];
            mergeData(hours, layerData, 'wt');
            mergeData(hours, personalLayerData, 'pers');
            mergeData(hours, lectureLayerData, 'wt');
            if (komplet) {
                mergeData(hours, layerData, 'k1');
                mergeData(hours, layerData, 'k2');
            }
        }

        addLayer('p', weekOfPsalter, dayOfWeek);     // Layer 1: Base layer from 4-week schema
        if (season === 'j') { addLayer('pj', weekOfPsalter, dayOfWeek); }
        if (season === 'o') { addLayer('po', weekOfPsalter, dayOfWeek); }

        addLayer(season, 'each', 'each', true);     // Layer 2: Season-wide texts
        addLayer(season, 'each', dayOfWeek);        // Layer 3: Weekly schema for the season
        if (week % 2 === 0) {                       // Layer 4: Bi-weekly schema
            addLayer(season, 'even', 'each');
            addLayer(season, 'even', dayOfWeek);
        }

        // Layer 5.1: 'last' für letzte Adventstage, nach Erscheinung und Pfingstnovene
        const shouldUseLast = (
            (season === 'a' && calendarDay > 16) ||
            (season === 'w' && calendarDay > 5 && calendarDay < 13) ||
            (season === 'o' && (week > 6 || (week === 6 && dayOfWeek > 3)))
        );
        if (shouldUseLast) {
            addLayer(season, 'last', 'each');
            addLayer(season, 'last', dayOfWeek);
        }

        // Layer 5.2: 17. Dez. bis Taufe des Herrn (Kalendertage) mit Weihnachtsoktav
        if (season === "a" || season === "w") {
            if (calendarDay > 24) { addLayer('w', 'okt', 'each') };
            addLayer('k', calendarMonth, 'each');
            addLayer('k', calendarMonth, calendarDay);
        }

        // Layer 6: Specific day data
        addLayer(season, week, 'each');
        addLayer(season, week, dayOfWeek);

        // Oration der Komplet in der Osteroktav
        if (season === 'o' && (week === 1 || week === 2 && dayOfWeek === 0)) {
            const easterKomplet1 = brevierData['k1']?.['o']?.['6']
            const easterKomplet2 = brevierData['k2']?.['o']?.['0']
            mergeData(hours, easterKomplet1, 'k1')
            mergeData(hours, easterKomplet2, 'k2')
        }

        // Process Heiligenfeste only if rank is appropriate
        if (rank_date > 1 && rank_date > rank_wt) {
            processHeiligenfeste(hours, season, rank_date, dayOfWeek, calendarMonth, calendarDay, 'eig');
        }

        // Sonderfall: Herz Mariae und gebotener Gedenktag
        if (isImmacHeart) {
            processNichtgeboteneGedenktage(hours, season, '5', '32');
            if (rank_date === 2) {
                processHeiligenfeste(hours, season, rank_date, dayOfWeek, calendarMonth, calendarDay, 'eig', 'n1');
                processNichtgeboteneGedenktage(hours, season, calendarMonth, calendarDay, true);
            }
        }
        // Layer 9: nichtgebotene Gedenktage
        else if (rank_wt < 3) {
            processHeiligenfeste(hours, season, rank_date, dayOfWeek, calendarMonth, calendarDay, 'n1');
            processNichtgeboteneGedenktage(hours, season, calendarMonth, calendarDay);
        }

        return {
            season, week, dayOfWeek,
            combinedSWD,
            rank_wt,
            rank_date,
            isCommemoration,
            prefComm: (rank_date > 2 || rank_wt > 2 || isImmacHeart) ? 1 : 0,
            ...cleanupZeroReferences(hours)
        };

    } catch (error) {
        console.error('Error processing breviary data for date:', date, error);
        return {
            prefComm: 0,
            rank_wt: 0,
            rank_date: 0,
            ...hours
        };
    }
}

function processCommune(hours, hour, foundComm, season, targetSource, communeNumber) {
    const [readComm, addComm] = foundComm.includes('_') ?
        foundComm.split('_') : [foundComm, null];

    const targetKey = `com${communeNumber}`;
    const readingHour = hour.charAt(0).toUpperCase() + hour.slice(1)
    // Ensure commune container exists for the target hour
    if (!hours[hour][targetSource]) {
        hours[hour][targetSource] = {};
    }
    if (!hours[hour][targetSource][targetKey]) {
        hours[hour][targetSource][targetKey] = {};
    }

    function addLayer(layerComm, layerSeason) {
        const communeData = brevierData?.com?.[layerComm]?.[layerSeason]?.[readingHour];
        if (communeData) {
            Object.assign(
                hours[hour][targetSource][targetKey],
                processReferenceFields(communeData, false)
            );
        }
    }
    addLayer(readComm, 'each');
    addLayer(readComm, season);
    if (addComm) {
        ['MärtSg', 'MärtPl', 'MFr', 'Mann', 'Frau', 'Jgfr', 'Hirten'].forEach(category => {
            addLayer(category, addComm);
        });
    }
}
// Modified processNichtgeboteneGedenktage function
function processNichtgeboteneGedenktage(hours, season, calendarMonth, calendarDay, sameRank = false) {
    const nichtgebData = adlibData?.[calendarMonth]?.[calendarDay];
    if (nichtgebData) {
        // Array mit allen zu durchsuchenden Schlüsseln
        const sourceKeys = ['eig', 'n1', 'n2', 'n3', 'n4', 'n5'];
        const hourKeys = ['invitatorium', 'lesehore', 'laudes', 'terz', 'sext', 'non', 'vesper']

        // Map über alle Schlüssel
        sourceKeys.forEach(sourceKey => {
            const sourceData = nichtgebData[sourceKey];
            const targetKey = sameRank ? 'n1' : sourceKey;

            if (sourceData) {
                mergeData(hours, sourceData, targetKey);

                ['1', '2'].forEach(commNumber => {
                    const commField = `comm_${commNumber}`;
                    const foundLaudesComm = hours?.laudes?.[targetKey]?.[commField];
                    if (foundLaudesComm) {
                        hourKeys.forEach(hour => {
                            const foundComm = hours?.[hour]?.[targetKey]?.[commField] || foundLaudesComm;
                            processCommune(hours, hour, foundComm, season, targetKey, commNumber);
                            // Remove the comm_1/2 field after processing
                            delete hours[hour][targetKey][commField];
                        });
                    };
                });
            }
        });
    }
}

// Modified processHeiligenfeste function
function processHeiligenfeste(hours, season, rank_date, dayOfWeek, calendarMonth, calendarDay,
    sourceKey = 'eig', targetKey = '') {
    // Commune texts processing
    if (!targetKey) { targetKey = sourceKey }
    const communeData = brevierData?.[sourceKey]?.[calendarMonth]?.[calendarDay];
    if (communeData) {
        mergeData(hours, communeData, targetKey);

        // Process Commune categories
        ['1', '2'].forEach(commNumber => {
            const commField = `comm_${commNumber}`;
            Object.keys(hours).forEach(hour => {
                const foundComm = hours[hour]?.[sourceKey]?.[commField];
                if (foundComm) {
                    processCommune(hours, hour, foundComm, season, targetKey, commNumber);
                    // Remove the comm_1/2 field after processing
                    delete hours[hour][sourceKey][commField];
                }
            });
        });
    }

    const rankData = brevierData?.[rank_date]?.['each']?.['each'];
    if (rankData) mergeData(hours, rankData, sourceKey);

    if (rank_date > 3 && dayOfWeek === 0) {
        const sundayData = brevierData?.[rank_date]?.['each']?.['0'];
        if (sundayData) mergeData(hours, sundayData, sourceKey);
    }

    const calendarData = brevierData?.[sourceKey]?.[calendarMonth]?.[calendarDay];
    if (calendarData) mergeData(hours, calendarData, sourceKey);
}

function processTerzPsalms(hours) {
    // Definiere die zu prüfenden Stunden
    const targetHours = ['sext', 'non'];
    // Definiere die relevanten Psalm-Felder
    const psalmFields = ['ps_1', 'ps_2', 'ps_3', 'ant_1', 'ant_2', 'ant_3'];

    // Finde alle vorhandenen Sources durch Inspektion der Terz
    const sources = hours.terz ? Object.keys(hours.terz) : [];

    // Iteriere über die Zielstunden (Sext und Non)
    targetHours.forEach(hour => {
        if (!hours[hour]) return;

        // Iteriere über alle gefundenen Sources
        sources.forEach(source => {
            if (!hours[hour][source]) {
                hours[hour][source] = {};
            }

            // Prüfe, ob die aktuelle Stunde bereits Psalmen in dieser Source hat
            const hasPsalms = psalmFields.some(field =>
                hours[hour][source] && hours[hour][source][field]
            );

            // Wenn keine Psalmen vorhanden sind, kopiere sie von der Terz
            if (!hasPsalms && hours.terz[source]) {
                psalmFields.forEach(field => {
                    if (hours.terz[source][field]) {
                        hours[hour][source][field] = hours.terz[source][field];
                    }
                });
            }
        });
    });

    return hours;
}

function processBenMagnAntiphons(hours, date) {
    Object.keys(hours).forEach(hour => {
        if (hours[hour].wt?.ant_a) {
            const year = date.getFullYear();
            const remainder = year % 3;

            let antField = remainder === 1 ? 'ant_a' :
                remainder === 2 ? 'ant_b' : 'ant_c';

            if (hours[hour].wt[antField]) {
                hours[hour].wt.ant_ev = hours[hour].wt[antField];
            }
        }
    });
}

function processInvitatoriumPsalms(hours) {
    // Array für gefundene Psalmen initialisieren
    const found = new Set();

    // Zu suchende Psalm-Nummern
    const searchPsalms = [100, 67, 24];

    // Durchsuche alle Stunden
    Object.values(hours).forEach(hour => {
        // Durchsuche alle Quellen (wt, eig, etc.), außer 'kirchw'
        Object.entries(hour).forEach(([sourceKey, sources]) => {
            if (sourceKey === 'kirchw') return; // Überspringe kirchw

            // Funktion zum Durchsuchen von Psalm-Einträgen
            const searchPsalmEntries = (obj) => {
                ['ps_1', 'ps_2', 'ps_3'].forEach(psKey => {
                    const psValue = obj[psKey]?.reference;
                    if (psValue && searchPsalms.includes(Math.floor(psValue))) {
                        found.add(Math.floor(psValue));
                    }
                });
            };

            // Durchsuche die Hauptebene der Source
            searchPsalmEntries(sources);

            // Durchsuche Commune-Unterverzeichnisse
            ['com1', 'com2'].forEach(commune => {
                if (sources[commune]) {
                    searchPsalmEntries(sources[commune]);
                }
            });
        });
    });

    // Erstelle Array mit verfügbaren Invitatorium-Psalmen
    const invitatorium = [95];
    searchPsalms.forEach(psalm => {
        if (!found.has(psalm)) {
            invitatorium.push(psalm);
        }
    });

    return invitatorium;
}

function processEasterResponses(hours) {
    // Nur Laudes und Vesper bearbeiten
    ['laudes', 'vesper'].forEach(hour => {
        if (!hours[hour]) return;

        // Alle relevanten Sources durchgehen
        ['eig', 'n1', 'n2', 'n3', 'n4', 'n5'].forEach(source => {
            if (!hours[hour][source]) return;

            // Hauptebene der Source verarbeiten
            processResponseSet(hours[hour][source]);

            // Commune-Unterverzeichnisse verarbeiten
            ['com1', 'com2'].forEach(commune => {
                if (hours[hour][source][commune]) {
                    processResponseSet(hours[hour][source][commune]);
                }
            });
        });
    });
    return hours;
}

function processResponseSet(data) {
    if (!data.resp1_1 || !data.resp1_2) return;

    // Prüfen ob resp1_2 nicht mit "Hall" beginnt
    if (!data.resp1_2.startsWith('Hall')) {
        // Texte kombinieren
        data.resp1_1 = `${data.resp1_1} ${data.resp1_2}`;
        // Neuen Halleluja-Text setzen
        data.resp1_2 = 'Halleluja,°halleluja.';
    }
}

function processKompletData(data, calendarDate) {
    const { hasErsteVesper = false, dayOfWeek, rank_date, rank_wt, combinedSWD } = data
    const kompletDay = calendarDate.getDate();
    const kompletMonth = calendarDate.getMonth() + 1;

    let showKompletWt = true;
    let showKompletK1 = true;
    let showKompletK2 = true;
    let prefKomplet = 'wt'

    if (['q-6-4', 'q-6-5', 'q-6-6'].includes(combinedSWD)) {
        showKompletK1 = false; showKompletK2 = false; prefKomplet = 'wt'
    }
    else if (hasErsteVesper) {
        showKompletWt = false; prefKomplet = 'k1'
    }
    else if (dayOfWeek === 0 || rank_date === 5) {
        showKompletWt = false; prefKomplet = 'k2'
    }
    else if ((kompletMonth === 12 && kompletDay > 25) || (combinedSWD.startsWith('o-1-'))) {
        showKompletWt = false; prefKomplet = 'wt'
    }
    else if (rank_wt === 5 &&
        !['q-0-3', 'q-6-1', 'q-6-2', 'q-6-3'].includes(combinedSWD)) {
        showKompletWt = false; prefKomplet = 'k2'
    }
    return {
        showKompletWt,
        showKompletK1,
        showKompletK2,
        prefKomplet
    };
}

// Hauptfunktion zur Verarbeitung der Brevier-Daten
export function processBrevierData(todayDate) {
    // Berechne die verschiedenen relevanten Tage
    const todayInfo = getLiturgicalInfo(todayDate);
    const todayDay = todayDate.getDate();
    const todayMonth = todayDate.getMonth() + 1;

    const yesterdayDate = new Date(todayDate);
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterdayInfo = getLiturgicalInfo(yesterdayDate);

    const tomorrowDate = new Date(todayDate);
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const tomorrowInfo = getLiturgicalInfo(tomorrowDate);

    const dayAfterTomorrowDate = new Date(todayDate);
    dayAfterTomorrowDate.setDate(dayAfterTomorrowDate.getDate() + 2);
    const dayAfterTomorrowInfo = getLiturgicalInfo(dayAfterTomorrowDate);

    let isSacredHeart = 0;
    if (yesterdayInfo.combinedSWD === 'o-9-5') { isSacredHeart = -1; }
    else if (tomorrowInfo.combinedSWD === 'o-9-5') { isSacredHeart = 1; }
    else if (dayAfterTomorrowInfo.combinedSWD === 'o-9-5') { isSacredHeart = 2; }

    // Bestimme die tatsächlich zu verwendenden Tage basierend auf den Rängen
    let calendarDate = todayDate;
    let nextDate = tomorrowDate;

    if (yesterdayInfo.rank_wt === 5 && yesterdayInfo.rank_date === 5
        && todayInfo.rank_wt < 5 && isSacredHeart !== -1) {
        calendarDate = yesterdayDate;
        console.log('Verschiebung: Gestriges Hochfest wird heute gefeiert');
    }

    // Verschiebung Josef
    if (todayInfo.combinedSWD === 'q-5-6' &&
        (todayMonth === 3 && todayDay < 19)) {
        // Erstelle ein neues Date-Objekt für den 19. März
        const josefDate = new Date(todayDate.getFullYear(), 2, 19); // Monat ist 0-basiert
        calendarDate = josefDate;
        console.log('Verschiebung: Josef am Samstag vor Palmsonntag');
    }

    // Verschiebung Verkündigung des Herrn
    if (todayInfo.combinedSWD === 'o-2-1' &&
        (todayMonth === 3 || (todayMonth === 4 && todayDay < 10))) {
        const verkuendigungDate = new Date(todayDate.getFullYear(), 2, 25); // Monat ist 0-basiert
        calendarDate = verkuendigungDate;
        console.log('Verschiebung: Verkündigung des Herrn auf Montag nach der Osteroktav');
    }

    if (isSacredHeart === 1 && tomorrowInfo.rank_date === 5) {
        calendarDate = tomorrowDate;
        console.log('Verschiebung: Morgiges Hochfest wird heute gefeiert wegen Herz-Jesu-Fest');
    }
    if (isSacredHeart === 2 && dayAfterTomorrowInfo.rank_date === 5) {
        nextDate = dayAfterTomorrowDate;
        console.log('Verschiebung: Heute 1. Vesper zum Hochfest, das morgen gefeiert wird wegen Herz-Jesu-Fest');
    }

    // Hole Stundendaten für den aktuellen Tag
    const todayData = getPrayerTexts(brevierData, personalData, todayDate, calendarDate);
    const tomorrowData = getPrayerTexts(brevierData, personalData, tomorrowDate, nextDate);

    // Prüfe, ob erste Vesper benötigt wird
    const { dayOfWeek, combinedSWD, rank_wt, rank_date } = todayData;
    const nextRankWt = tomorrowData.rank_wt;
    const nextRankDate = tomorrowData.rank_date;
    const nextCombinedSWD = tomorrowData.combinedSWD;

    const hasErsteVesper_wt = combinedSWD === 'o-1-6' ||
        (rank_wt < 5 && rank_date < 5 &&
            ((dayOfWeek === 6 && rank_date < 4) ||
                (nextRankWt === 5 && nextCombinedSWD !== 'q-0-3')));
    const hasErsteVesper_date = rank_wt < 5 && rank_date < 5 && nextRankDate > nextRankWt &&
        (nextRankDate === 5 || (nextRankDate === 4 && dayOfWeek === 6));
    console.log('brevierDataProcessor:\nrank_Wt/Date:', rank_wt, rank_date,
        '\nnextRank_Wt/Date:', nextRankWt, nextRankDate,
        '\ndayOfWeek:', dayOfWeek,
        '\n1. Vesper wt/date: ', hasErsteVesper_wt, hasErsteVesper_date)

    // Stelle die endgültigen Daten zusammen
    const finalData = {
        ...todayData,
        nextRank_wt: nextRankWt,
        nextRank_date: nextRankDate,
        combinedSWD: todayInfo.combinedSWD
    };

    // Sichere Vesper-Daten für etwaige Nutzung bei lokalem Hochfest
    // vor der etwaigen Überschreibung durch eine Erste Vesper
    finalData.prefsollemnity = JSON.parse(JSON.stringify(finalData.vesper));

    // Ersetze Vesper-Daten wenn nötig
    if (hasErsteVesper_wt || hasErsteVesper_date) {
        finalData.vesper = tomorrowData.erstev;
        finalData.hasErsteVesper = true;
    }

    // Wende die finalen Verarbeitungsschritte an
    processTerzPsalms(finalData);
    processBenMagnAntiphons(finalData, calendarDate);
    const kompletSettings = processKompletData(finalData, calendarDate);
    finalData.komplet = {
        ...finalData.komplet,
        ...kompletSettings
    };
    if (todayInfo.season === 'o') { processEasterResponses(finalData); }

    const invPsalms = processInvitatoriumPsalms(finalData);
    finalData.invitatorium.psalms = invPsalms

    const sequenceInv = JSON.parse(localStorage.getItem('sequenceInv')) || [95, 100, 24, 67, 67, 100, 24];
    let prefInv = sequenceInv[dayOfWeek];
    if (!invPsalms.includes(prefInv)) { prefInv = 95; }
    finalData.prefInv = prefInv;

    return finalData;
}