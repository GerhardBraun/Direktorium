import { brevierData } from './brevierData.ts';

export function processBrevierData(liturgicalInfo) {
    const { season, week, dayOfWeek, calendarDay } = liturgicalInfo;

    // Initialize the main structure for all possible fields
    const processedData = {
        Hymn_1: {},     // First hymn number
        Hymn_2: {},     // Second hymn number
        Hymn_3: {},     // Third hymn number
        Hymn_Nacht: {}, // Night hymn number
        Hymn_kl: {},    // Small hymn number
        Ps_1: {},       // First psalm number
        Ps_2: {},       // Second psalm number
        Ps_3: {},       // Third psalm number
        Ant_0: {},      // Antiphon 0
        Ant_1: {},      // First Antiphon
        Ant_2: {},      // Second Antiphon
        Ant_3: {},      // Third Antiphon
        Ant_Ev: {},     // Antiphon for Evangelical Canticle
        Les_Buch: {},   // Reading Book
        Les_Stelle: {}, // Reading Location
        Resp0_0: {},    // Responsorium 0 for Reading Hour
        Resp0_1: {},    // Responsorium 1 for Reading Hour
        Resp1_0: {},    // Responsorium 1
        Resp1_1: {},    // Responsorium 2
        Resp1_2: {},    // Responsorium 3
        Resp1_3: {},    // Responsorium 4
        Bitten_E: {},   // Intercessions Introduction
        Bitten_R: {},   // Intercessions Response
        Bitten: {},     // Intercessions Text
        Oration: {}     // Closing Prayer
    };

    // Define the hours with correct capitalization
    const hours = {
        'Invitatorium': 'invitatorium',
        'Laudes': 'laudes',
        'Lesehore': 'lesehore',
        'Terz': 'terz',
        'Sext': 'sext',
        'Non': 'non',
        'Vesper': 'vesper',
        'Komplet': 'komplet'
    };

    // Mapping from database keys (left) to output keys (right)
    const fieldMapping = {
        'hymn_1': 'Hymn_1',
        'hymn_2': 'Hymn_2',
        'hymn_3': 'Hymn_3',
        'hymn_nacht': 'Hymn_Nacht',
        'hymn_kl': 'Hymn_kl',
        'ps_1': 'Ps_1',
        'ps_2': 'Ps_2',
        'ps_3': 'Ps_3',
        'ant_0': 'Ant_0',
        'ant_1': 'Ant_1',
        'ant_2': 'Ant_2',
        'ant_3': 'Ant_3',
        'ant_ev': 'Ant_Ev',
        'les_buch': 'Les_Buch',
        'les_stelle': 'Les_Stelle',
        'resp0_0': 'Resp0_0',
        'resp0_1': 'Resp0_1',
        'resp1_0': 'Resp1_0',
        'resp1_1': 'Resp1_1',
        'resp1_2': 'Resp1_2',
        'resp1_3': 'Resp1_3',
        'bitten_e': 'Bitten_E',
        'bitten_r': 'Bitten_R',
        'bitten': 'Bitten',
        'oration': 'Oration'
    };

    // Set of fields that should be treated as numbers
    const numericFields = new Set([
        'hymn_1', 'hymn_2', 'hymn_3', 'hymn_nacht', 'hymn_kl',
        'ps_1', 'ps_2', 'ps_3'
    ]);

    // Helper function to merge data from a specific layer
    const mergeData = (data) => {
        if (!data) return;

        // First, check if there's an "each" entry at the hour level
        if (data.each) {
            // Apply the "each" values to all hours
            Object.entries(data.each).forEach(([dbField, value]) => {
                const outputField = fieldMapping[dbField.toLowerCase()];
                if (outputField) {
                    Object.values(hours).forEach(outputHour => {
                        if (!processedData[outputField][outputHour]) {
                            processedData[outputField][outputHour] = {};
                        }
                        processedData[outputField][outputHour].Wt =
                            numericFields.has(dbField.toLowerCase()) ? Number(value) : value;
                    });
                }
            });
        }

        // Then process regular hour-specific entries
        Object.entries(hours).forEach(([dbHour, outputHour]) => {
            const hourData = data[dbHour];
            if (hourData) {
                Object.entries(hourData).forEach(([dbField, value]) => {
                    const outputField = fieldMapping[dbField.toLowerCase()];
                    if (outputField) {
                        if (!processedData[outputField][outputHour]) {
                            processedData[outputField][outputHour] = {};
                        }
                        processedData[outputField][outputHour].Wt =
                            numericFields.has(dbField.toLowerCase()) ? Number(value) : value;
                    }
                });
            }
        });
    };

    try {
        // Layer 1: Base layer from 4-week schema ('p')
        const adjustedWeek = ((week + 3) % 4) + 1;
        mergeData(brevierData['p']?.[adjustedWeek]?.[dayOfWeek]);

        // Layer 2: Season-wide texts (each/each)
        mergeData(brevierData[season]?.['each']?.['each']);

        // Layer 3: Weekly schema for the season (each/dayOfWeek)
        mergeData(brevierData[season]?.['each']?.[dayOfWeek]);

        // Layer 4: Bi-weekly schema (even/dayOfWeek), only in even weeks
        if (week % 2 === 0) {
            mergeData(brevierData[season]?.['even']?.[dayOfWeek]);
        }

        // Layer 4.5: Special handling for different seasons
        const shouldUseLast = (
            // Advent after December 16
            (season === 'a' && calendarDay > 16) ||
            // Christmas between January 7-12
            (season === 'w' && calendarDay > 5 && calendarDay < 13) ||
            // Lent after week 4
            (season === 'f' && week > 4) ||
            // Easter after week 6 or from Thursday of week 6
            (season === 'o' && (week > 6 || (week === 6 && dayOfWeek > 3)))
        );

        if (shouldUseLast) {
            mergeData(brevierData[season]?.['last']?.[dayOfWeek]);
        }

        // Layer 5: Specific day data (week/dayOfWeek)
        mergeData(brevierData[season]?.[week]?.[dayOfWeek]);

    } catch (error) {
        console.error('Error processing breviary data:', error);
    }

    return {
        ...processedData,
        source: 'Wt'
    };
}