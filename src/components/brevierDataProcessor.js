import { brevierData } from './brevierData.ts';
import { lecture1Data } from './lecture1Data.ts';
import { lecture2Data } from './lecture2Data.ts';
import { psalmsData } from './PsalmenHymnen.ts';
import { adlibData } from './adLib.ts';
import { getLiturgicalInfo, LiturgicalSeason } from './liturgicalCalendar.js';

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

export function processBrevierData(liturgicalInfo) {
    const { season, week, dayOfWeek, selectedDate } = liturgicalInfo;

    // Aktuelles Datum
    const calendarDay = selectedDate.getDate();
    const calendarMonth = selectedDate.getMonth() + 1;
    // Create a date-independent comparison value for specific dates (MM-DD format)
    const dateCompare = `${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}-${selectedDate.getDate().toString().padStart(2, '0')}`;


    function getLectureData(date) {
        const year = date.getFullYear();
        return year % 2 === 0 ? lecture2Data : lecture1Data;
    }
    const lectureData = getLectureData(selectedDate);

    function getLiturgicalRank(date, season, week, dayOfWeek) {

        const rankDay = date.getDate();
        const rankMonth = date.getMonth() + 1;

        // 1. Grundsätzlich sind alle Sonntage Rang 5
        if (dayOfWeek === 0) {
            // 2. Ausnahme: Sonntage in der Weihnachtszeit und im Jahreskreis (außer Christkönig) sind Rang 3
            if ((season === 'j' && week !== 34) || season === 'w') {
                return 3;
            }
            return 5;
        }

        // 3. Karwoche
        if (season === 'q' && week === 6) {
            return 5;
        }

        // 4. Osteroktav
        if (season === 'o' && week === 1) {
            return 5;
        }

        // 5. Einzelne Hochfeste
        if ((season === 'q' && week === 0 && dayOfWeek === 3) || // Aschermittwoch
            (season === 'o' && week === 9 && dayOfWeek === 4) || // Fronleichnam
            (season === 'o' && week === 9 && dayOfWeek === 5) || // Herz Jesu
            (season === 'j' && week === 34 && dayOfWeek === 0)) { // Christkönig
            return 5;
        }
        // 6. Gebotene Gedenktage und Kommemoration
        if ((rankMonth === 12 && rankDay > 16) ||               // letzte Adventstage und Weihnachtszeit
            (season === 'q') ||                                 // Wochentage der Fastenzeit
            (season === 'o' && week === 9 && dayOfWeek === 6)   // Herz Mariae
        ) {
            return 2;
        }
        return 0; // Standard-Rang für alle anderen Tage
    }

    const rank_wt = getLiturgicalRank(selectedDate, season, week, dayOfWeek);

    // Vorheriger Tag
    const prevDate = new Date(selectedDate);
    prevDate.setDate(prevDate.getDate() - 1);
    const prevInfo = getLiturgicalInfo(prevDate);
    const rank_prev = getLiturgicalRank(prevDate, prevInfo.season, prevInfo.week, prevDate.getDay());

    // Nächster Tag
    const nextDate = new Date(selectedDate);
    nextDate.setDate(nextDate.getDate() + 1);
    const nextInfo = getLiturgicalInfo(nextDate);
    const rank_next = getLiturgicalRank(nextDate, nextInfo.season, nextInfo.week, nextDate.getDay());

    // Calculate rank_date based on specific dates
    let rank_date = 0;
    const hochfeste = [
        '01-01', '01-06', '03-19', '03-25', '06-05', '06-24', '06-29', '08-15',
        '11-01', '11-02', '12-08', '12-25'];
    const christusfeste = ['02-02', '08-06', '09-14', '11-09'];
    const feste = [
        '01-25', '02-04', '02-14', '02-22', '02-24', '04-25', '04-29', '05-03',
        '07-02', '07-03', '07-11', '07-22', '07-23', '07-25', '08-09', '08-10',
        '08-24', '09-08', '09-21', '09-28', '09-29', '10-18', '10-28', '11-19',
        '11-30', '12-16', '12-17', '12-18', '12-19', '12-20', '12-21', '12-22',
        '12-23', '12-24', '12-26', '12-27', '12-28', '12-29', '12-30', '12-31'];
    const gedenktage = [
        '01-02', '01-17', '01-21', '01-24', '01-26', '01-28', '01-31',
        '02-05', '02-06', '02-10', '02-23', '03-07', '04-07', '04-11',
        '04-27', '05-02', '05-26', '06-01', '06-03', '06-11', '06-13',
        '06-21', '06-28', '07-15', '07-26', '07-29', '07-31', '08-01',
        '08-04', '08-08', '08-11', '08-17', '08-20', '08-21', '08-22',
        '08-27', '08-28', '08-29', '09-03', '09-13', '09-15', '09-16',
        '09-20', '09-23', '09-27', '09-30', '10-01', '10-02', '10-04',
        '10-07', '10-15', '10-17', '11-04', '11-10', '11-11', '11-12',
        '11-21', '11-22', '11-24', '12-03', '12-07', '12-13', '12-14'];
    const nichtgeboten = [
        '01-03', '01-05', '01-07', '01-08', '01-13', '01-20', '01-22', '01-23',
        '01-27', '02-03', '02-08', '02-11', '02-12', '02-17', '02-21', '02-25',
        '02-27', '03-04', '03-06', '03-08', '03-09', '03-13', '03-14', '03-15',
        '03-17', '03-18', '03-23', '03-24', '03-26', '04-02', '04-04', '04-05',
        '04-13', '04-19', '04-21', '04-23', '04-24', '04-28', '04-30', '05-01',
        '05-04', '05-05', '05-10', '05-12', '05-13', '05-16', '05-18', '05-20',
        '05-21', '05-22', '05-24', '05-25', '05-27', '05-29', '06-02', '06-06',
        '06-07', '06-09', '06-10', '06-15', '06-16', '06-19', '06-22', '06-26',
        '06-27', '06-30', '07-04', '07-05', '07-06', '07-07', '07-08', '07-09',
        '07-10', '07-12', '07-13', '07-14', '07-16', '07-20', '07-21', '07-24',
        '07-30', '08-02', '08-05', '08-07', '08-12', '08-13', '08-16', '08-19',
        '08-23', '08-25', '08-26', '08-31', '09-05', '09-09', '09-12', '09-17',
        '09-18', '09-19', '09-22', '09-24', '09-25', '09-26', '10-03', '10-05',
        '10-06', '10-09', '10-11', '10-14', '10-16', '10-19', '10-20', '10-21',
        '10-22', '10-23', '10-24', '10-26', '10-31', '11-03', '11-06', '11-07',
        '11-15', '11-16', '11-17', '11-18', '11-20', '11-23', '11-25', '11-26',
        '12-01', '12-02', '12-04', '12-05', '12-06', '12-09', '12-10', '12-11',
        '12-12'];

    if (hochfeste.includes(dateCompare)) {
        rank_date = 5;
    } else if (christusfeste.includes(dateCompare)) {
        rank_date = 4;
    } else if (feste.includes(dateCompare)) {
        rank_date = 3;
    } else if (gedenktage.includes(dateCompare)) {
        rank_date = 2;
    } else if (nichtgeboten.includes(dateCompare)) {
        rank_date = 1;
    }

    // Initialize structure with hours and sources
    const hours = {
        invitatorium: { wt: {} },
        laudes: { wt: {} },
        lesehore: { wt: {} },
        terz: { wt: {} },
        sext: { wt: {} },
        non: { wt: {} },
        vesper: { wt: {} },
        komplet: { wt: {} }
    };

    // Other fields that should be treated as numbers (if any)
    const numericFields = new Set([]);

    // Helper function to merge data into the hours structure
    const mergeData = (data, source = 'wt') => {
        if (!data) return;

        // Process "each" data first - applies to all hours
        if (data.each) {
            const processedEachData = processReferenceFields(data.each, false);
            Object.entries(processedEachData).forEach(([field, value]) => {
                if (!field.startsWith(source)) {  // Prevent recursive structure
                    Object.keys(hours).forEach(hour => {
                        // Create source object if it doesn't exist
                        if (!hours[hour][source]) {
                            hours[hour][source] = {};
                        }
                        hours[hour][source][field] = value;
                    });
                }
            });
        }

        // Then process hour-specific data
        Object.entries(data).forEach(([hourName, hourData]) => {
            const hour = hourName.toLowerCase();
            if (hours[hour] && hourName !== 'each') {
                // Create source object if it doesn't exist
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
    };

    try {
        // Process 'wt' source
        // Layer 0.1: Ordinary texts
        const ordData = brevierData['p']?.['each']?.['each'];
        if (ordData) mergeData(ordData, 'wt');

        // Layer 0.2: Weekly Ordinary texts
        const weeklyOrdData = brevierData['p']?.['each']?.[dayOfWeek];
        if (weeklyOrdData) mergeData(weeklyOrdData, 'wt');

        // Layer 1: Base layer from 4-week schema
        const adjustedWeek = ((week + 3) % 4) + 1;
        const baseData = brevierData['p']?.[adjustedWeek]?.[dayOfWeek];
        if (baseData) mergeData(baseData, 'wt');
        // Layer 1.1: Psalmen in der Lesehore im Jahreskreis
        if (season === 'j') {
            const ordbaseData = brevierData['pj']?.[adjustedWeek]?.[dayOfWeek];
            if (ordbaseData) mergeData(ordbaseData, 'wt');
        }
        // Layer 2: Season-wide texts
        const seasonData = brevierData[season]?.['each']?.['each'];
        if (seasonData) mergeData(seasonData, 'wt');

        // Layer 3: Weekly schema for the season
        const weeklyData = brevierData[season]?.['each']?.[dayOfWeek];
        if (weeklyData) mergeData(weeklyData, 'wt');

        // Layer 4: Bi-weekly schema
        if (week % 2 === 0) {
            const evenData = brevierData[season]?.['even']?.[dayOfWeek];
            if (evenData) mergeData(evenData, 'wt');
        }

        // Layer 5.1: Special seasonal handling
        const shouldUseLast = (
            (season === 'a' && calendarDay > 16) ||
            (season === 'w' && calendarDay > 5 && calendarDay < 13) ||
            (season === 'q' && week > 5) ||
            (season === 'o' && (week > 6 || (week === 6 && dayOfWeek > 3)))
        );

        if (shouldUseLast) {
            const lastweeklyData = brevierData[season]?.['last']?.['each'];
            if (lastweeklyData) mergeData(lastweeklyData, 'wt');

            const lastData = brevierData[season]?.['last']?.[dayOfWeek];
            if (lastData) mergeData(lastData, 'wt');
        }

        // Layer 5.2: 17. Dez. bis Taufe des Herrn mit Weihnachtsoktav
        if (season === "a" || season === "w") {
            if (calendarDay > 24) {
                const octaveData = brevierData['w']?.['okt']?.['each'];
                if (octaveData) mergeData(octaveData, 'wt');
            }
            const daywiseData = brevierData['k']?.[calendarMonth]?.[calendarDay];
            if (daywiseData) mergeData(daywiseData, 'wt');
            const daywiseLect = lectureData['k']?.[calendarMonth]?.[calendarDay];
            if (daywiseLect) mergeData(daywiseLect, 'wt');
        }

        // Layer 6: Specific day data
        const specificWeeklyData = brevierData[season]?.[week]?.['each'];
        if (specificWeeklyData) mergeData(specificWeeklyData, 'wt');

        const specificData = brevierData[season]?.[week]?.[dayOfWeek];
        if (specificData) mergeData(specificData, 'wt');
        const specificLect = lectureData[season]?.[week]?.[dayOfWeek];
        if (specificLect) mergeData(specificLect, 'wt');

        // Layer 7: Process Commune texts
        const calendarData = brevierData?.['eig']?.[calendarMonth]?.[calendarDay];
        if (calendarData) mergeData(calendarData, 'eig');

        Object.keys(hours).forEach(hour => {
            console.log('Commune_1:', JSON.stringify(hours[hour].eig?.comm_1, null, 2));
            if (hours[hour].eig?.comm_1) {
                const commune1EachData = brevierData?.['com']?.[hours[hour].eig.comm_1]?.['each'];
                if (commune1EachData) mergeData(commune1EachData, 'com1');
            }
        });
        Object.keys(hours).forEach(hour => {
            console.log('Commune_2:', JSON.stringify(hours[hour].eig?.comm_2, null, 2));
            if (hours[hour].eig?.comm_2) {
                const commune2EachData = brevierData?.['com']?.[hours[hour].eig.comm_2]?.['each'];
                if (commune2EachData) mergeData(commune2EachData, 'com2');
            }
        });
        // besondere Commune-Texte für eine Kirchenjahreszeit
        Object.keys(hours).forEach(hour => {
            if (hours[hour].eig?.comm_1) {
                const commune1Data = brevierData?.['com']?.[hours[hour].eig.comm_1]?.[season];
                if (commune1Data) mergeData(commune1Data, 'com1');
            }
        });
        Object.keys(hours).forEach(hour => {
            if (hours[hour].eig?.comm_2) {
                const commune2Data = brevierData?.['com']?.[hours[hour].eig.comm_2]?.[season];
                if (commune2Data) mergeData(commune2Data, 'com2');
            }
        });

        // Layer 8: Calendar date specific data
        if (rank_date > 1 && rank_date > rank_wt) {
            // Process rank-based data
            const rankData = brevierData?.[rank_date]?.['each']?.['each'];
            if (rankData) mergeData(rankData, 'eig');

            // Texte für Hochfeste und Christusfeste am Sonntag
            if (rank_date > 3 && dayOfWeek === "0") {
                const sundayData = brevierData?.[rank_date]?.['each']?.['0'];
                if (sundayData) mergeData(sundayData, 'eig');
            };

            // Process calendar-based data
            const calendarData = brevierData?.['eig']?.[calendarMonth]?.[calendarDay];
            if (calendarData) mergeData(calendarData, 'eig');
            const calendarLect = lectureData?.['eig']?.[calendarMonth]?.[calendarDay];
            if (calendarLect) mergeData(calendarLect, 'eig');
        }

        // Layer 9: nichtgebotene Gedenktage
        if (rank_wt < 3) {
            const nichtgebData = adlibData?.[calendarMonth]?.[calendarDay];
            console.log('Datum:', calendarDay, calendarMonth);
            if (nichtgebData) {
                // Iteriere durch alle möglichen Quellen (n1 bis n5)
                for (let i = 1; i <= 5; i++) {
                    const sourceKey = `n${i}`;
                    const ncom1SourceKey = `n${i}com1`;
                    const ncom2SourceKey = `n${i}com2`;
                    console.log('Quelle:', sourceKey);
                    const sourceData = nichtgebData[sourceKey];
                    if (sourceData) {
                        mergeData(sourceData, sourceKey);
                        // Verarbeite Commune-Texte für diese n-Quelle
                        Object.keys(hours).forEach(hour => {
                            if (hours[hour][sourceKey]?.comm) {
                                // Allgemeine Commune-Texte
                                const communeEach1Data = brevierData?.['com']?.[hours[hour][sourceKey].comm_1]?.['each'];
                                if (communeEach1Data) mergeData(communeEach1Data, ncom1SourceKey);

                                const communeEach2Data = brevierData?.['com']?.[hours[hour][sourceKey].comm_2]?.['each'];
                                if (communeEach2Data) mergeData(communeEach2Data, ncom2SourceKey);

                                // Besondere Commune-Texte für eine Kirchenjahreszeit
                                const commune1Data = brevierData?.['com']?.[hours[hour][sourceKey].comm_1]?.[season];
                                if (commune1Data) mergeData(commune1Data, ncom1SourceKey);

                                const commune2Data = brevierData?.['com']?.[hours[hour][sourceKey].comm_2]?.[season];
                                if (commune2Data) mergeData(commune2Data, ncom2SourceKey);

                            }
                        });
                    }
                }
            }
        }

        // Process terz psalms for sext and non
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

        Object.keys(hours).forEach(hour => {
            if (hours[hour].wt?.ant_a) {
                // Calculate liturgical year
                let year = selectedDate.getFullYear();
                const remainder = year % 3;

                // Determine which ant to use based on liturgical year
                let antField;
                if (remainder === 1) {
                    antField = 'ant_a';  // Year A
                } else if (remainder === 2) {
                    antField = 'ant_b';  // Year B
                } else { antField = 'ant_c'; }  // Year C

                // Set ant_ev to the value from the appropriate liturgical year
                if (hours[hour].wt[antField]) {
                    hours[hour].wt.ant_ev = hours[hour].wt[antField];
                }
            }
        });

        const prefComm = (rank_date > 2 || rank_wt > 2) ? 1 : 0;

        return {
            prefComm, rank_wt, rank_date,
            ...cleanupZeroReferences(hours)
        };


    } catch (error) {
        console.error('Error processing breviary data:', error);
        return {
            prefComm: 0, rank_wt: 0, rank_date: 0,
            ...hours
        };
    }
}