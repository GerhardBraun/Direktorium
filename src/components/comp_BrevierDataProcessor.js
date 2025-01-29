import { brevierData } from './data_Brevier.ts';
import { lecture1Data } from './data_Lecture1.ts';
import { lecture2Data } from './data_Lecture2.ts';
import { psalmsData } from './data_PsHymn.ts';
import { adlibData } from './data_AdLib.ts';
import { getLiturgicalInfo } from './comp_LitCalendar.js';

// Fields that should be processed as references to psalmsData
const referenceFields = [
    'ps_1', 'ps_2', 'ps_3', 'ps_100', 'ps_95', 'ps_67', 'ps_24',
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

    // Process "each" data if available
    if (newData.each) {
        const processedEachData = processReferenceFields(newData.each, false);
        Object.entries(processedEachData).forEach(([field, value]) => {
            if (!field.startsWith(source)) {
                Object.keys(hours).forEach(hour => {
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
        if (hours[hour] && hourName !== 'each') {
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


function getPrayerTexts(date, calendarDate = 0) {
    if (calendarDate === 0) { calendarDate = date }
    const {
        season,
        week,
        dayOfWeek,
        rank_wt,
        isCommemoration
    } = getLiturgicalInfo(date);
    const { rank_date } = getLiturgicalInfo(calendarDate);

    const calendarDay = calendarDate.getDate();
    const calendarMonth = calendarDate.getMonth() + 1;
    const lectureYear = date.getFullYear();
    const lectureData = lectureYear % 2 === 0 ? lecture2Data : lecture1Data;

    // Initialize structure - jetzt auch mit erstev
    const hours = {
        erstev: { wt: {} },
        invitatorium: { wt: {} },
        laudes: { wt: {} },
        lesehore: { wt: {} },
        terz: { wt: {} },
        sext: { wt: {} },
        non: { wt: {} },
        vesper: { wt: {} },
        prefsollemnity: { wt: {} },
        komplet: { wt: {} }
    };

    try {

        // Layer 0.1: Ordinary texts
        const ordData = brevierData['p']?.['each']?.['each'];
        mergeData(hours, ordData, 'wt');

        // Layer 0.2: Weekly Ordinary texts
        const weeklyOrdData = brevierData['p']?.['each']?.[dayOfWeek];
        mergeData(hours, weeklyOrdData, 'wt');

        // Layer 1: Base layer from 4-week schema
        const adjustedWeek = ((week + 3) % 4) + 1;
        const baseData = brevierData['p']?.[adjustedWeek]?.[dayOfWeek];
        mergeData(hours, baseData, 'wt');

        // Layer 1.1: Psalmen in der Lesehore im Jahreskreis
        if (season === 'j') {
            const ordbaseData = brevierData['pj']?.[adjustedWeek]?.[dayOfWeek];
            mergeData(hours, ordbaseData, 'wt');
        }

        if (season === 'o') {
            const ordbaseData = brevierData['po']?.[adjustedWeek]?.[dayOfWeek];
            mergeData(hours, ordbaseData, 'wt');
        }

        // Layer 2: Season-wide texts
        const seasonData = brevierData[season]?.['each']?.['each'];
        mergeData(hours, seasonData, 'wt');

        // Layer 3: Weekly schema for the season
        const weeklyData = brevierData[season]?.['each']?.[dayOfWeek];
        mergeData(hours, weeklyData, 'wt');

        // Layer 4: Bi-weekly schema
        if (week % 2 === 0) {
            const evenData = brevierData[season]?.['even']?.[dayOfWeek];
            mergeData(hours, evenData, 'wt');
        }

        // Layer 5.1: Special seasonal handling
        const shouldUseLast = (
            (season === 'a' && calendarDay > 16) ||
            (season === 'w' && calendarDay > 5 && calendarDay < 13) ||
            (season === 'o' && (week > 6 || (week === 6 && dayOfWeek > 3)))
        );

        if (shouldUseLast) {
            const lastweeklyData = brevierData[season]?.['last']?.['each'];
            const lastData = brevierData[season]?.['last']?.[dayOfWeek];
            mergeData(hours, lastweeklyData, 'wt');
            mergeData(hours, lastData, 'wt');
        }

        // Layer 5.2: 17. Dez. bis Taufe des Herrn mit Weihnachtsoktav
        if (season === "a" || season === "w") {
            const octaveData = calendarDay > 24 ? brevierData['w']?.['okt']?.['each'] : null;
            const daywiseData = brevierData['k']?.[calendarMonth]?.[calendarDay];
            const daywiseLect = lectureData['k']?.[calendarMonth]?.[calendarDay];

            mergeData(hours, octaveData, 'wt');
            mergeData(hours, daywiseData, 'wt');
            mergeData(hours, daywiseLect, 'wt');
        }

        // Layer 6: Specific day data
        const specificWeeklyData = brevierData[season]?.[week]?.['each'];
        const specificData = brevierData[season]?.[week]?.[dayOfWeek];
        const specificLect = lectureData[season]?.[week]?.[dayOfWeek];

        mergeData(hours, specificWeeklyData, 'wt');
        mergeData(hours, specificData, 'wt');
        mergeData(hours, specificLect, 'wt');

        // Process Heiligenfeste only if rank is appropriate
        if ((rank_date > 1 && rank_date > rank_wt) || (rank_date === 2 && rank_wt === 2)) {
            processHeiligenfeste(hours, season, rank_date, dayOfWeek, calendarMonth, calendarDay);
        }

        // Layer 9: nichtgebotene Gedenktage
        if (rank_wt < 3) {
            processNichtgeboteneGedenktage(hours, season, calendarMonth, calendarDay);
        }

        return {
            prefComm: (rank_date > 2 || rank_wt > 2) ? 1 : 0,
            rank_wt,
            rank_date,
            isCommemoration,
            dayOfWeek,
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

function processCommune(hours, commune, season, targetSource, communeNumber) {
    const [readComm, initialAddComm] = commune.includes('_') ?
        commune.split('_') : [commune, null];

    const addComm = (season === 'o' && initialAddComm === 'Kl') ?
        'oKl' : initialAddComm;

    const targetKey = `com${communeNumber}`;

    // Ensure commune container exists in each hour
    Object.keys(hours).forEach(hour => {
        if (!hours[hour][targetSource]) {
            hours[hour][targetSource] = {};
        }
        if (!hours[hour][targetSource][targetKey]) {
            hours[hour][targetSource][targetKey] = {};
        }
    });

    // General commune texts
    const communeEachData = brevierData?.['com']?.[readComm]?.['each'];
    if (communeEachData) {
        Object.entries(communeEachData).forEach(([hourName, hourData]) => {
            const hour = hourName.toLowerCase();
            if (hours[hour] && hourName !== 'each') {
                Object.assign(
                    hours[hour][targetSource][targetKey],
                    processReferenceFields(hourData, false)
                );
            }
        });
    }

    // Season-specific commune texts
    const communeData = brevierData?.['com']?.[readComm]?.[season];
    if (communeData) {
        Object.entries(communeData).forEach(([hourName, hourData]) => {
            const hour = hourName.toLowerCase();
            if (hours[hour] && hourName !== 'each') {
                Object.assign(
                    hours[hour][targetSource][targetKey],
                    processReferenceFields(hourData, false)
                );
            }
        });
    }

    if (addComm) {
        ['MärtSg', 'MärtPl', 'MFr', 'Mann', 'Frau', 'Jgfr', 'Hirten'].forEach(category => {
            const additionalData = brevierData?.['com']?.[category]?.[addComm];
            if (additionalData) {
                Object.entries(additionalData).forEach(([hourName, hourData]) => {
                    const hour = hourName.toLowerCase();
                    if (hours[hour] && hourName !== 'each') {
                        Object.assign(
                            hours[hour][targetSource][targetKey],
                            processReferenceFields(hourData, false)
                        );
                    }
                });
            }
        });
    }
}

// Modified processNichtgeboteneGedenktage function
function processNichtgeboteneGedenktage(hours, season, calendarMonth, calendarDay) {
    const nichtgebData = adlibData?.[calendarMonth]?.[calendarDay];
    if (nichtgebData) {
        // Array mit allen zu durchsuchenden Schlüsseln
        const sourceKeys = ['eig', 'n1', 'n2', 'n3', 'n4', 'n5'];

        // Map über alle Schlüssel
        sourceKeys.map(sourceKey => {
            const sourceData = nichtgebData[sourceKey];

            if (sourceData) {
                mergeData(hours, sourceData, sourceKey);

                ['1', '2'].forEach(commNumber => {
                    const commField = `comm_${commNumber}`;
                    Object.keys(hours).forEach(hour => {
                        const foundComm = hours[hour][sourceKey]?.[commField];
                        if (foundComm) {
                            processCommune(hours, foundComm, season, sourceKey, commNumber);
                            // Remove the comm_1/2 field after processing
                            delete hours[hour][sourceKey][commField];
                        }
                    });
                });
            }
        });
    }
}

// Modified processHeiligenfeste function
function processHeiligenfeste(hours, season, rank_date, dayOfWeek, calendarMonth, calendarDay) {
    // Commune texts processing
    const communeData = brevierData?.['eig']?.[calendarMonth]?.[calendarDay];
    if (communeData) {
        mergeData(hours, communeData, 'eig');

        // Process Commune categories
        ['1', '2'].forEach(commNumber => {
            const commField = `comm_${commNumber}`;
            Object.keys(hours).forEach(hour => {
                const foundComm = hours[hour].eig?.[commField];
                if (foundComm) {
                    processCommune(hours, foundComm, season, 'eig', commNumber);
                    // Remove the comm_1/2 field after processing
                    delete hours[hour].eig[commField];
                }
            });
        });
    }

    const rankData = brevierData?.[rank_date]?.['each']?.['each'];
    if (rankData) mergeData(hours, rankData, 'eig');

    if (rank_date > 3 && dayOfWeek === 0) {
        const sundayData = brevierData?.[rank_date]?.['each']?.['0'];
        if (sundayData) mergeData(hours, sundayData, 'eig');
    }

    const calendarData = brevierData?.['eig']?.[calendarMonth]?.[calendarDay];
    if (calendarData) mergeData(hours, calendarData, 'eig');
}

function processTerzPsalms(hours) {
    ['sext', 'non'].forEach(hour => {
        const psalmFields = ['ps_1', 'ps_2', 'ps_3', 'ant_1', 'ant_2', 'ant_3'];
        const hasPsalms = psalmFields.some(field => hours[hour].wt[field]);

        if (!hasPsalms) {
            psalmFields.forEach(field => {
                if (hours.terz.wt[field]) {
                    hours[hour].wt[field] = hours.terz.wt[field];
                }
            });
        }
    });
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
        // Erstelle ein neues Date-Objekt für den 25. März
        const verkuendigungDate = new Date(todayDate.getFullYear(), 2, 25); // Monat ist 0-basiert
        calendarDate = verkuendigungDate;
        console.log('Verschiebung: Verkündigung des Herrn am Montag nach der Osteroktav');
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
    const todayData = getPrayerTexts(todayDate, calendarDate);
    const tomorrowData = getPrayerTexts(tomorrowDate, nextDate);

    // Prüfe, ob erste Vesper benötigt wird
    const rankWt = todayData.rank_wt;
    const rankDate = todayData.rank_date;
    const nextRankWt = tomorrowData.rank_wt;
    const nextRankDate = tomorrowData.rank_date;
    const dayOfWeek = todayData.dayOfWeek;

    const hasErsteVesper_wt = rankWt < 5 && rankDate < 5 &&
        ((dayOfWeek === 6 && rankDate < 4) || nextRankWt === 5);
    const hasErsteVesper_date = rankWt < 5 && rankDate < 5 && nextRankDate > nextRankWt &&
        (nextRankDate === 5 || (nextRankDate === 4 && dayOfWeek === 6));
    console.log('brevierDataProcessor:\n(rankWt/Date) / (nextRankWt/Date) / dayOfWeek: (',
        rankWt, rankDate, ') (', nextRankWt, nextRankDate, ') ', dayOfWeek, '\n1. Vesper wt/date: ', hasErsteVesper_wt, hasErsteVesper_date)

    // Stelle die endgültigen Daten zusammen
    const finalData = {
        ...todayData,
        nextRank_wt: nextRankWt,
        nextRank_date: nextRankDate
    };
    finalData.prefsollemnity = JSON.parse(JSON.stringify(finalData.vesper));

    // Ersetze Vesper-Daten wenn nötig
    if ((hasErsteVesper_wt || hasErsteVesper_date) && tomorrowData?.erstev) {
        finalData.vesper = tomorrowData.erstev;
        finalData.hasErsteVesper = true;
    }

    // Wende die finalen Verarbeitungsschritte an
    processTerzPsalms(finalData);
    processBenMagnAntiphons(finalData, calendarDate);
    if (todayInfo.season === 'o') { processEasterResponses(finalData); }

    return finalData;
}