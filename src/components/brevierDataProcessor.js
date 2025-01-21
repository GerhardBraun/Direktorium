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

// Helper function to determine if we need first vespers
function needsFirstVespers(currentDate, currentRankWt, currentRankDate, nextRankWt, nextRankDate, dayOfWeek) {
    const hasErsteVesper_wt = (dayOfWeek === 6 && currentRankDate < 4) || nextRankWt === 5;
    const hasErsteVesper_date = nextRankDate > nextRankWt &&
        (nextRankDate === 5 || (nextRankDate === 4 && dayOfWeek === 6));

    return { hasErsteVesper_wt, hasErsteVesper_date };
}

// Enhanced mergeData function that handles both current day and first vespers
function mergeData(hours, currentData, nextData, source, hasErsteVesper_wt) {
    // Process current day data if available
    if (currentData) {
        // Process "each" data first for current day
        if (currentData.each) {
            const processedEachData = processReferenceFields(currentData.each, false);
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

        // Process hour-specific data for current day
        Object.entries(currentData).forEach(([hourName, hourData]) => {
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
    // Handle first vespers if needed
    if (hasErsteVesper_wt && nextData) {
        if (!hours.vesper[source]) {
            hours.vesper[source] = {};
        }

        // Process next day's each data for vespers
        if (nextData.each) {
            const processedNextEachData = processReferenceFields(nextData.each, false);
            Object.entries(processedNextEachData).forEach(([field, value]) => {
                if (!field.startsWith(source)) {
                    hours.vesper[source][field] = value;
                }
            });
        }

        // Try ErsteV first, fall back to Vesper if not found
        const vesperData = nextData.ErsteV || nextData.Vesper;
        if (vesperData) {
            const processedVesperData = processReferenceFields(vesperData, false);
            Object.entries(processedVesperData).forEach(([field, value]) => {
                if (!field.startsWith(source)) {
                    hours.vesper[source][field] = value;
                }
            });
        }
    }

}

export function processBrevierData(liturgicalInfo) {
    const { season: todaySeason, week: todayWeek, dayOfWeek: todayDayOfWeek,
        selectedDate: todayDate } = liturgicalInfo;

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
    let selectedDate = todayDate;
    let selectedInfo = todayInfo;
    let nextDate = tomorrowDate;
    let nextInfo = tomorrowInfo;

    if (yesterdayInfo.rank_wt === 5 && yesterdayInfo.rank_date === 5
        && todayInfo.rank_wt < 5 && isSacredHeart !== -1) {
        selectedDate = yesterdayDate;
        console.log('Verschiebung: Gestriges Hochfest wird heute gefeiert');
    }

    // Verschiebung Verkündigung des Herrn
    if (todayInfo.combinedSWD === 'o-2-1' &&
        (todayMonth === 3 || (todayMonth === 4 && todayDay < 10))) {
        // Erstelle ein neues Date-Objekt für den 25. März
        const verkuendigungDate = new Date(todayDate.getFullYear(), 2, 25); // Monat ist 0-basiert
        selectedDate = verkuendigungDate;
        selectedInfo = getLiturgicalInfo(verkuendigungDate);
        console.log('Verschiebung: Verkündigung des Herrn am Montag nach der Osteroktav');
    }

    if (isSacredHeart === 1 && tomorrowInfo.rank_date === 5) {
        selectedDate = tomorrowDate;
        console.log('Verschiebung: Morgiges Hochfest wird heute gefeiert wegen Herz-Jesu-Fest');
    }
    if (isSacredHeart === 2 && dayAfterTomorrowInfo.rank_date === 5) {
        nextDate = dayAfterTomorrowDate;
        console.log('Verschiebung: Heute 1. Vesper zum Hochfest, das morgen gefeiert wird wegen Herz-Jesu-Fest');
    }
    // Calculate ranks and dates for current and next day
    const calendarDay = selectedDate.getDate();
    const calendarMonth = selectedDate.getMonth() + 1;
    const nextCalendarMonth = nextDate.getMonth() + 1;
    const nextCalendarDay = nextDate.getDate();

    const { season, week, dayOfWeek, rank_wt, rank_date, isCommemoration } = getLiturgicalInfo(selectedDate);
    const { rank_wt: nextRank_wt, rank_date: nextRank_date } = getLiturgicalInfo(nextDate);

    // Determine if we need first vespers
    const { hasErsteVesper_wt, hasErsteVesper_date } = needsFirstVespers(
        selectedDate, rank_wt, rank_date, nextRank_wt, nextRank_date, dayOfWeek
    );

    function getLectureData(date) {
        const year = date.getFullYear();
        return year % 2 === 0 ? lecture2Data : lecture1Data;
    }

    // Initialize structure
    const hours = {
        erstev: { wt: {} },
        invitatorium: { wt: {} },
        laudes: { wt: {} },
        lesehore: { wt: {} },
        terz: { wt: {} },
        sext: { wt: {} },
        non: { wt: {} },
        vesper: { wt: {} },
        komplet: { wt: {} }
    };

    try {
        // Get lecture data
        const lectureData = getLectureData(selectedDate);

        // Layer 0.1: Ordinary texts
        const ordData = brevierData['p']?.['each']?.['each'];
        const nextOrdData = brevierData['p']?.['each']?.['each'];
        mergeData(hours, ordData, nextOrdData, 'wt', hasErsteVesper_wt);

        // Layer 0.2: Weekly Ordinary texts
        const weeklyOrdData = brevierData['p']?.['each']?.[dayOfWeek];
        const nextWeeklyOrdData = brevierData['p']?.['each']?.[nextInfo.dayOfWeek];
        mergeData(hours, weeklyOrdData, nextWeeklyOrdData, 'wt', hasErsteVesper_wt);

        // Layer 1: Base layer from 4-week schema
        const adjustedWeek = ((week + 3) % 4) + 1;
        const nextAdjustedWeek = ((nextInfo.week + 3) % 4) + 1;
        const baseData = brevierData['p']?.[adjustedWeek]?.[dayOfWeek];
        const nextBaseData = brevierData['p']?.[nextAdjustedWeek]?.[nextInfo.dayOfWeek];
        mergeData(hours, baseData, nextBaseData, 'wt', hasErsteVesper_wt);

        // Layer 1.1: Psalmen in der Lesehore im Jahreskreis
        if (season === 'j') {
            const ordbaseData = brevierData['pj']?.[adjustedWeek]?.[dayOfWeek];
            const nextOrdbaseData = brevierData['pj']?.[nextAdjustedWeek]?.[nextInfo.dayOfWeek];
            mergeData(hours, ordbaseData, nextOrdbaseData, 'wt', hasErsteVesper_wt);
        }

        // Layer 2: Season-wide texts
        const seasonData = brevierData[season]?.['each']?.['each'];
        const nextSeasonData = brevierData[nextInfo.season]?.['each']?.['each'];
        mergeData(hours, seasonData, nextSeasonData, 'wt', hasErsteVesper_wt);

        // Layer 3: Weekly schema for the season
        const weeklyData = brevierData[season]?.['each']?.[dayOfWeek];
        const nextWeeklyData = brevierData[nextInfo.season]?.['each']?.[nextInfo.dayOfWeek];
        mergeData(hours, weeklyData, nextWeeklyData, 'wt', hasErsteVesper_wt);

        // Layer 4: Bi-weekly schema
        if (week % 2 === 0) {
            const evenData = brevierData[season]?.['even']?.[dayOfWeek];
            const nextEvenData = brevierData[nextInfo.season]?.['even']?.[nextInfo.dayOfWeek];
            mergeData(hours, evenData, nextEvenData, 'wt', hasErsteVesper_wt);
        }


        // Layer 5.1: Special seasonal handling
        const shouldUseLast = (
            (season === 'a' && calendarDay > 16) ||
            (season === 'w' && calendarDay > 5 && calendarDay < 13) ||
            (season === 'q' && week > 5) ||
            (season === 'o' && (week > 6 || (week === 6 && dayOfWeek > 3)))
        );

        const nextShouldUseLast = (
            (nextInfo.season === 'a' && nextCalendarDay > 16) ||
            (nextInfo.season === 'w' && nextCalendarDay > 5 && nextCalendarDay < 13) ||
            (nextInfo.season === 'q' && nextInfo.week > 5) ||
            (nextInfo.season === 'o' && (nextInfo.week > 6 || (nextInfo.week === 6 && nextInfo.dayOfWeek > 3)))
        );

        if (shouldUseLast || (nextShouldUseLast && hasErsteVesper_wt)) {
            const lastweeklyData = shouldUseLast ? brevierData[season]?.['last']?.['each'] : null;
            const lastData = shouldUseLast ? brevierData[season]?.['last']?.[dayOfWeek] : null;
            const nextLastweeklyData = nextShouldUseLast ? brevierData[nextInfo.season]?.['last']?.['each'] : null;
            const nextLastData = nextShouldUseLast ? brevierData[nextInfo.season]?.['last']?.[nextInfo.dayOfWeek] : null;

            mergeData(hours, lastweeklyData, nextLastweeklyData, 'wt', hasErsteVesper_wt);
            mergeData(hours, lastData, nextLastData, 'wt', hasErsteVesper_wt);
        }

        // Layer 5.2: 17. Dez. bis Taufe des Herrn mit Weihnachtsoktav
        if ((season === "a" || season === "w") ||
            ((nextInfo.season === "a" || nextInfo.season === "w") && hasErsteVesper_wt)) {

            const octaveData = calendarDay > 24 ? brevierData['w']?.['okt']?.['each'] : null;
            const nextOctaveData = (nextCalendarDay > 24 && hasErsteVesper_wt) ?
                brevierData['w']?.['okt']?.['each'] : null;

            const daywiseData = brevierData['k']?.[calendarMonth]?.[calendarDay];
            const nextDaywiseData = hasErsteVesper_wt ?
                brevierData['k']?.[nextCalendarMonth]?.[nextCalendarDay] : null;

            const daywiseLect = lectureData['k']?.[calendarMonth]?.[calendarDay];
            const nextDaywiseLect = hasErsteVesper_wt ?
                lectureData['k']?.[nextCalendarMonth]?.[nextCalendarDay] : null;

            mergeData(hours, octaveData, nextOctaveData, 'wt', hasErsteVesper_wt);
            mergeData(hours, daywiseData, nextDaywiseData, 'wt', hasErsteVesper_wt);
            mergeData(hours, daywiseLect, nextDaywiseLect, 'wt', hasErsteVesper_wt);
        }

        // Layer 6: Specific day data
        const specificWeeklyData = brevierData[season]?.[week]?.['each'];
        const nextSpecificWeeklyData = hasErsteVesper_wt ?
            brevierData[nextInfo.season]?.[nextInfo.week]?.['each'] : null;

        const specificData = brevierData[season]?.[week]?.[dayOfWeek];
        const nextSpecificData = hasErsteVesper_wt ?
            brevierData[nextInfo.season]?.[nextInfo.week]?.[nextInfo.dayOfWeek] : null;

        const specificLect = lectureData[season]?.[week]?.[dayOfWeek];
        const nextSpecificLect = hasErsteVesper_wt ?
            lectureData[nextInfo.season]?.[nextInfo.week]?.[nextInfo.dayOfWeek] : null;

        mergeData(hours, specificWeeklyData, nextSpecificWeeklyData, 'wt', hasErsteVesper_wt);
        mergeData(hours, specificData, nextSpecificData, 'wt', hasErsteVesper_wt);
        mergeData(hours, specificLect, nextSpecificLect, 'wt', hasErsteVesper_wt);

        // Layer 7-9: Process Commune and special texts
        if ((rank_date > 1 && rank_date > rank_wt)
            || (rank_date === 2 && rank_wt === 2)) {
            // Layer 7: Process Commune texts
            const communeData = brevierData?.['eig']?.[calendarMonth]?.[calendarDay];
            if (communeData) {
                mergeData(hours, communeData, null, 'eig', false);

                // Process Commune categories
                ['1', '2'].forEach(commNumber => {
                    const commField = `comm_${commNumber}`;
                    const commSource = `com${commNumber}`;
                    const additionalComms = ['MärtSg', 'MärtPl', 'MFr', 'Mann'];

                    Object.keys(hours).forEach(hour => {
                        const foundComm = hours[hour].eig?.[commField];
                        if (foundComm) {
                            const [readComm, initialAddComm] = foundComm.includes('_')
                                ? foundComm.split('_')
                                : [foundComm, null];

                            const addComm = (season === 'o' && initialAddComm === 'Kl')
                                ? 'oKl'
                                : initialAddComm;

                            // General commune texts
                            const communeEachData = brevierData?.['com']?.[readComm]?.['each'];
                            if (communeEachData) mergeData(hours, communeEachData, null, commSource, false);

                            // Season-specific commune texts
                            const communeData = brevierData?.['com']?.[readComm]?.[season];
                            if (communeData) mergeData(hours, communeData, null, commSource, false);

                            if (addComm) {
                                additionalComms.forEach(category => {
                                    const additionalData = brevierData?.['com']?.[category]?.[addComm];
                                    if (additionalData) mergeData(hours, additionalData, null, commSource, false);
                                });
                            }
                        }
                    });
                });
            }

            // Layer 8: Process rank-based and calendar-based data
            const rankData = brevierData?.[rank_date]?.['each']?.['each'];
            if (rankData) mergeData(hours, rankData, null, 'eig', false);

            if (rank_date > 3 && dayOfWeek === 0) {
                const sundayData = brevierData?.[rank_date]?.['each']?.['0'];
                if (sundayData) mergeData(hours, sundayData, null, 'eig', false);
            }

            const calendarData = brevierData?.['eig']?.[calendarMonth]?.[calendarDay];
            const calendarLect = lectureData?.['eig']?.[calendarMonth]?.[calendarDay];
            if (calendarData) mergeData(hours, calendarData, null, 'eig', false);
            if (calendarLect) mergeData(hours, calendarLect, null, 'eig', false);
        }

        // Process next day's Commune and special texts for first vespers
        if (hasErsteVesper_date) {
            const nextCommuneData = brevierData?.['eig']?.[nextCalendarMonth]?.[nextCalendarDay];
            if (nextCommuneData) {
                if (nextCommuneData.each) mergeData(hours, null, { Vesper: nextCommuneData.each }, 'eig', true);
                if (nextCommuneData.ErsteV) mergeData(hours, null, { Vesper: nextCommuneData.ErsteV }, 'eig', true);
            }
        }

        // Layer 9: nichtgebotene Gedenktage
        if (rank_wt < 3) {
            const nichtgebData = adlibData?.[calendarMonth]?.[calendarDay];
            if (nichtgebData) {
                for (let i = 1; i <= 5; i++) {
                    const sourceKey = `n${i}`;
                    const sourceData = nichtgebData[sourceKey];

                    if (sourceData) {
                        mergeData(hours, sourceData, null, sourceKey, false);

                        // Process Commune texts for this source
                        ['1', '2'].forEach(commNumber => {
                            const commField = `comm_${commNumber}`;
                            const commSource = `${sourceKey}com${commNumber}`;
                            const additionalComms = ['MärtSg', 'MärtPl', 'MFr', 'Mann'];

                            Object.keys(hours).forEach(hour => {
                                const foundComm = hours[hour][sourceKey]?.[commField];
                                if (foundComm) {
                                    const [readComm, initialAddComm] = foundComm.includes('_')
                                        ? foundComm.split('_')
                                        : [foundComm, null];

                                    const addComm = (season === 'o' && initialAddComm === 'Kl')
                                        ? 'oKl'
                                        : initialAddComm;

                                    const communeEachData = brevierData?.['com']?.[readComm]?.['each'];
                                    if (communeEachData) mergeData(hours, communeEachData, null, commSource, false);

                                    const communeData = brevierData?.['com']?.[readComm]?.[season];
                                    if (communeData) mergeData(hours, communeData, null, commSource, false);

                                    if (addComm) {
                                        additionalComms.forEach(category => {
                                            const additionalData = brevierData?.['com']?.[category]?.[addComm];
                                            if (additionalData) mergeData(hours, additionalData, null, commSource, false);
                                        });
                                    }
                                }
                            });
                        });
                    }
                }
            }
        }

        // Clean up vesper data if necessary
        if (hasErsteVesper_wt) {
            // Remove all sources except 'wt' from vesper
            Object.keys(hours.vesper).forEach(source => {
                if (source !== 'wt') {
                    delete hours.vesper[source];
                }
            });
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


        return {
            prefComm: (rank_date > 2 || rank_wt > 2) ? 1 : 0,
            rank_wt,
            rank_date,
            nextRank_wt,
            nextRank_date,
            isCommemoration,
            ...cleanupZeroReferences(hours)
        };

    } catch (error) {
        console.error('Error processing breviary data:', error);
        return {
            prefComm: 0,
            rank_wt: 0,
            rank_date: 0,
            ...hours
        };
    }
}