import { brevierData } from './brevierData.ts';
import { psalmsData } from './PsalmenHymnen.ts';

// Fields that should be processed as references to psalmsData
const referenceFields = [
    'ps_1', 'ps_2', 'ps_3',
    'hymn_1', 'hymn_2', 'hymn_3', 'hymn_nacht', 'hymn_kl'
];

// Helper function to process references and get additional data from psalmsData
function processReference(ref) {
    if (!ref) return null;

    const wholePart = Math.floor(ref);
    const decimalPart = Math.round((ref % 1) * (ref % 1 < 0.1 ? 10 : 1000));

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
        if (hours[hour] && hours[hour].wt) {
            const hourData = hours[hour].wt;
            referenceFields.forEach(field => {
                const fieldData = hourData[field];
                // Check if the field is directly 0 or has reference === 0
                if (fieldData === 0 || fieldData?.reference === 0) {
                    delete hourData[field];
                }
            });
        }
    });
    return hours;
}

export function processBrevierData(liturgicalInfo) {
    const { season, week, dayOfWeek, calendarDay } = liturgicalInfo;

    // Initialize structure with hours and wt source
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
    const mergeData = (data) => {
        if (!data) return;

        // Process "each" data first - applies to all hours
        if (data.each) {
            const processedEachData = processReferenceFields(data.each, false);
            Object.entries(processedEachData).forEach(([field, value]) => {
                if (field !== 'wt') {  // Prevent recursive structure
                    const processedValue = numericFields.has(field) ? Number(value) : value;
                    Object.keys(hours).forEach(hour => {
                        hours[hour].wt[field] = processedValue;
                    });
                }
            });
        }

        // Then process hour-specific data
        Object.entries(data).forEach(([hourName, hourData]) => {
            const hour = hourName.toLowerCase();
            // Only process if it's a valid hour
            if (hours[hour] && hourName !== 'each') {
                const processedHourData = processReferenceFields(hourData, false);
                Object.entries(processedHourData).forEach(([field, value]) => {
                    if (field !== 'wt') {  // Prevent recursive structure
                        const processedValue = numericFields.has(field) ? Number(value) : value;
                        hours[hour].wt[field] = processedValue;
                    }
                });
            }
        });
    };

    try {
        // Layer 1: Base layer from 4-week schema ('p')
        const adjustedWeek = ((week + 3) % 4) + 1;
        const baseData = brevierData['p']?.[adjustedWeek]?.[dayOfWeek];
        if (baseData) {
            mergeData(baseData);
        }

        // Layer 2: Season-wide texts
        const seasonData = brevierData[season]?.['each']?.['each'];
        if (seasonData) {
            mergeData(seasonData);
        }

        // Layer 3: Weekly schema for the season
        const weeklyData = brevierData[season]?.['each']?.[dayOfWeek];
        if (weeklyData) {
            mergeData(weeklyData);
        }

        // Layer 4: Bi-weekly schema (even weeks)
        if (week % 2 === 0) {
            const evenData = brevierData[season]?.['even']?.[dayOfWeek];
            if (evenData) {
                mergeData(evenData);
            }
        }

        // Layer 4.5: Special handling for different seasons
        const shouldUseLast = (
            (season === 'a' && calendarDay > 16) ||
            (season === 'w' && calendarDay > 5 && calendarDay < 13) ||
            (season === 'f' && week > 5) ||
            (season === 'o' && (week > 6 || (week === 6 && dayOfWeek > 3)))
        );

        if (shouldUseLast) {
            const lastData = brevierData[season]?.['last']?.[dayOfWeek];
            if (lastData) {
                mergeData(lastData);
            }
        }

        // Layer 5: Specific day data
        const specificData = brevierData[season]?.[week]?.[dayOfWeek];
        if (specificData) {
            mergeData(specificData);
        }

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

        // Final cleanup: Remove all reference fields with value 0
        return cleanupZeroReferences(hours);

    } catch (error) {
        console.error('Error processing breviary data:', error);
        return hours;
    }
}