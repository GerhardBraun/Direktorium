// Diese Komponente stellt
// aufgrund der Einordnung des Tages im liturgischen Jahr (siehe LitCalendar.js)
// die Stundengebetstexte aus den Datenbanken zusammen.
// In einer mehrlagigen Schichtung werden, ausgehend vom Vierwochenpsalter im Jahreskreis,
// besondere Texte je nach Kirchenjahreszeit (season), Woche (week) und Wochentag (day)
// allgemeinere Teile durch speziellere überschrieben (addLayer und mergeData).
//
// Parallel zu den Texten nach Kirchenjahr
// werden die Texte zu dein Heiligenfesten nach Kalenderjahr hinzugefügt,
// zusammen mit den zugehörigen Commune-Texten.

import { brevierData } from '../data/Brevier.ts';
import { lecture1Data } from '../data/Lecture1.ts';
import { lecture2Data } from '../data/Lecture2.ts';
import { lectureABCData } from '../data/LectureABC.ts';
import { sollemnitiesData } from '../data/Sollemnities.ts';
import { getLiturgicalInfo } from './LitCalendar.js';
import { sourceKeys } from '../selectors/SourceSelector.js';
import { getCalendarData } from '../data/CalendarMerge.js';

const personalData = (() => {
    try {
        const stored = localStorage.getItem('personalData');
        return stored ? JSON.parse(stored) : {};
    } catch (error) {
        console.error('Fehler beim Laden der personalisierten Daten:', error);
        return {};
    }
})();

const diocese = localStorage.getItem('diocese') || 'Fulda';

// Helper function to clean up zero-value reference fields after all processing
function cleanupZeroReferences(hours) {

    // Fields that should be processed as references to psalmsData
    const referenceFields = [
        'psalm1', 'psalm2', 'psalm3',
        'hymn_1', 'hymn_2', 'hymn_3', 'hymn_nacht', 'hymn_kl'
    ];


    Object.keys(hours).forEach(hour => {
        Object.keys(hours[hour]).forEach(source => {
            referenceFields.forEach(field => {
                if (hours[hour][source][field] === 0) {
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

function mergeData(hours, newData, source) {
    if (!newData) return;

    // Festlegen, welche Stunden für die jeweilige Source verarbeitet werden sollen
    const targetHours = Object.keys(hours);

    // Process "each" data if available
    if (newData.each) {
        Object.entries(newData.each).forEach(([field, value]) => {
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

    // Process "major" data if available
    if (newData.major) {
        Object.entries(newData.major).forEach(([field, value]) => {
            if (!field.startsWith(source)) {
                ['erstev', 'lesehore', 'laudes', 'vesper'].forEach(hour => {
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
        if (hours[hour] && targetHours.includes(hour) &&
            !['each', 'major'].includes(hourName)) {
            if (!hours[hour][source]) {
                hours[hour][source] = {};
            }
            Object.entries(hourData).forEach(([field, value]) => {
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
        swdCombined,
        swdWritten,
        rank_wt,
        afterPentecost,
        isCommemoration,
        hasVigil
    } = getLiturgicalInfo(date);
    const { rank_date } = getLiturgicalInfo(calendarDate);

    const calendarDay = calendarDate.getDate();
    const calendarMonth = calendarDate.getMonth() + 1;
    //Lesejahr ABC
    const lectureYear = date.getFullYear() + (
        (season === 'a' || (calendarMonth === 12 && season !== 'j'))
            ? 1 : 0);
    const yearABC = ['c', 'a', 'b'][lectureYear % 3]
    const lectureData = lectureYear % 2 === 0 ? lecture2Data : null;

    // Initialize structure
    const hours = {
        erstev: { wt: {}, pers: {} },
        invitatorium: { wt: {}, pers: {} },
        lesehore: { wt: {}, pers: {} },
        vigil: { wt: {}, pers: {} },
        laudes: { wt: {}, pers: {} },
        terz: { wt: {}, pers: {} },
        sext: { wt: {}, pers: {} },
        non: { wt: {}, pers: {} },
        vesper: { wt: {}, pers: {} },
        prefsollemnity: { wt: {}, pers: {} },
        komplet: { wt: {}, pers: {} },
        messe: { wt: {}, pers: {} },
    };

    try {
        // Layer 0: Ordinary texts from multiple sources
        const sourcesToCheck = ['wt', 'soll', 'kirchww', 'verstt'];
        sourcesToCheck.forEach(source => {
            const ordData = brevierData?.[source]?.['each'];
            const ordEvenData = brevierData?.[source]?.['even'];
            const ordSeasonData = brevierData?.[source]?.[season];
            if (ordData) {
                if (ordData['each'])
                    mergeData(hours, ordData['each'], source);
                if (ordData[dayOfWeek])
                    mergeData(hours, ordData[dayOfWeek], source);
            }
            if (week % 2 === 0 && ordEvenData) {
                if (ordEvenData.each)
                    mergeData(hours, ordEvenData.each, source);
                if (ordEvenData[dayOfWeek])
                    mergeData(hours, ordEvenData[dayOfWeek], source);
            }
            if (ordSeasonData) {
                if (ordSeasonData['each'])
                    mergeData(hours, ordSeasonData['each'], source);
                if (ordSeasonData[dayOfWeek])
                    mergeData(hours, ordSeasonData[dayOfWeek], source);
            }
        });

        //Ordinary data from personalData
        const ordData = personalData?.wt?.each;
        const ordEvenData = personalData?.wt?.even;
        const ordSeasonData = personalData?.wt?.[season];

        if (ordData) {
            if (ordData.each)
                mergeData(hours, ordData.each, 'pers');
            if (ordData[dayOfWeek])
                mergeData(hours, ordData[dayOfWeek], 'pers');
        }
        if (week % 2 === 0 && ordEvenData) {
            if (ordEvenData.each)
                mergeData(hours, ordEvenData.each, 'pers');
            if (ordEvenData[dayOfWeek])
                mergeData(hours, ordEvenData[dayOfWeek], 'pers');
        }
        if (ordSeasonData) {
            if (ordSeasonData.each)
                mergeData(hours, ordSeasonData.each, 'pers');
            if (ordSeasonData[dayOfWeek])
                mergeData(hours, ordSeasonData[dayOfWeek], 'pers');
        }

        function addLayer(source, week, dayOfWeek) {
            ['each', dayOfWeek].forEach(key => {
                const layerData = brevierData?.[source]?.[week]?.[key];
                const personalLayerData = personalData?.[source]?.[week]?.[key];
                const lecture1LayerData = lecture1Data?.[source]?.[week]?.[key];
                const lectureLayerData = lectureData?.[source]?.[week]?.[key];
                const lectureALayerData = lectureABCData?.[source]?.[week]?.[key]?.a;
                const lectureABCLayerData = yearABC === 'a' ? null : lectureABCData?.[source]?.[week]?.[key]?.[yearABC];
                mergeData(hours, layerData, 'wt');
                mergeData(hours, personalLayerData, 'pers');
                mergeData(hours, lecture1LayerData, 'wt');
                mergeData(hours, lectureALayerData, 'wt');
                if (lectureLayerData) mergeData(hours, lectureLayerData, 'wt');
                if (lectureABCLayerData) mergeData(hours, lectureABCLayerData, 'wt');
            })
        }
        // Layer 1: Base layer from 4-week schema
        addLayer('p', weekOfPsalter, dayOfWeek);
        const pOfSeason = 'p' + season
        addLayer(pOfSeason, weekOfPsalter, dayOfWeek);

        const weekOfEight = week % 8 || 8
        addLayer('pvigil', weekOfEight, dayOfWeek)
        // Layer 3: Weekly schema for the season
        addLayer(season, 'each', dayOfWeek);
        // Layer 4: Bi-weekly schema
        if (week % 2 === 0) addLayer(season, 'even', dayOfWeek);

        addLayer(season, week, dayOfWeek);

        const processUseDateAndLast = () => {
            if (calendarMonth === 12 && calendarDay > 16) {
                return calendarDay < 25 ? 'adventLast' : 'christmasOctave';
            } else if (calendarMonth === 1 && calendarDay < 13 && season === 'w') {
                return calendarDay < 6 ? 'christmas' : 'christmasLast';
            } else if (season === 'o' &&
                (week === 7 || (week === 6 && dayOfWeek > 3)))
                return 'easterLast';
            else return '';
        }
        const useDateAndLast = processUseDateAndLast();

        // Layer 5.1: 'last' für letzte Adventstage, nach Erscheinung und Pfingstnovene
        if (useDateAndLast.includes('Last'))
            addLayer(season, 'last', dayOfWeek);

        // Layer 5.2: 17. Dez. bis Taufe des Herrn (Kalendertage) mit Weihnachtsoktav
        // easterLast: entsprechende Einträge existieren in 'k' und 'kso' nicht
        if (useDateAndLast) {
            if (useDateAndLast === 'christmasOctave')
                addLayer('w', 'okt', 'each');
            addLayer('k', calendarMonth, calendarDay);
            // wiederholte Behandlung der Sonntage in diesem Zeitraum:
            // 3. und 4. Advent, Hl. Familie, 2. Sonntag nach Weihnachten
            addLayer('kso', week, dayOfWeek);
        }

        // Process Heiligenfeste only if rank is appropriate
        if (rank_date > 1 && rank_date > rank_wt)
            processCalendar(hours, yearABC, season, calendarMonth, calendarDay);

        // An Allerseelen auch am Sonntag die Messlesungen
        if (calendarMonth === 11 && calendarDay === 2 && dayOfWeek === 0)
            processReadings(hours, yearABC, calendarMonth, calendarDay);

        // Feste nach Pfingsten sind als '40. bis 46. Mai' gespeichert
        // 1er-Stelle gibt den Wochentag an:
        // 40=So: Dreif., 41=Mo: Pfingstmontag/Mutter der Kirche,
        // 44=Do: Fronleichnam, 45=Fr: Herz-Jesu-Fest, 46=Sa: Unbefl. Herz Mariae
        if (afterPentecost) {
            processCalendar(hours, yearABC, season, 5, afterPentecost, 'wt');

            // Sonderfall: MaterEcclesiae bzw. Herz Mariae und gebotener Gedenktag
            if (rank_date === 2)
                processCalendar(hours, yearABC, season, calendarMonth, calendarDay, 'n1');
        }
        // Layer 9: nichtgebotene Gedenktage
        else if (rank_wt < 3) {
            processCalendar(hours, yearABC, season, calendarMonth, calendarDay, 'skip');

            // Maria am Samstag (mit fiktivem Datum 06.13.)
            if (rank_wt < 2 && rank_date < 2 && season === "j" && dayOfWeek === 6)
                processCalendar(hours, yearABC, season, 13, 6)
        }

        return {
            season, week, dayOfWeek,
            swdCombined, swdWritten,
            rank_wt,
            rank_date,
            //isCommemoration,
            //shouldUseLast,
            //hasVigil,
            rank: {
                wt: rank_wt,
                date: rank_date,
                isCommemoration,
                //shouldUseLast,
                hasVigil,
                //useDateAndLast,
            },
            prefComm: (rank_date > 2 || rank_wt > 2 || [41, 46].includes(afterPentecost)) ? 1 : 0,
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

function processCommune(hours, season, targetSource) {
    ['1', '2'].forEach(commNumber => {
        const commField = `comm_${commNumber}`;
        const foundLaudesComm = hours?.laudes?.[targetSource]?.[commField];

        if (foundLaudesComm) {
            Object.keys(hours).forEach(hour => {
                const foundComm = hours?.[hour]?.[targetSource]?.[commField] || foundLaudesComm;
                const [readComm, addComm] = foundComm.includes('_') ?
                    foundComm.split('_') : [foundComm, null];

                const targetKey = `com${commNumber}`;
                const readingHour = (hour === 'erstev') ? 'ErsteV'
                    : hour.charAt(0).toUpperCase() + hour.slice(1);

                // Ensure commune container exists for the target hour
                if (!hours[hour][targetSource]) {
                    hours[hour][targetSource] = {};
                }
                if (!hours[hour][targetSource][targetKey]) {
                    hours[hour][targetSource][targetKey] = {};
                }

                function addLayer(layerComm, layerSeason) {
                    const communeData = ['Kirchw', 'Verst'].includes(layerComm)
                        ? sollemnitiesData?.[layerComm.toLowerCase()]?.[layerSeason?.toLowerCase()]?.[readingHour?.toLowerCase()]
                        : brevierData?.com?.[layerComm]?.[layerSeason]?.[readingHour];
                    if (communeData) {
                        Object.assign(
                            hours[hour][targetSource][targetKey],
                            communeData
                        );
                    }
                }

                addLayer('each', 'each');
                addLayer(readComm, 'each');
                addLayer(readComm, season);
                addLayer('each', addComm);
                addLayer(readComm, addComm);

                // Remove the comm_1/2 field after processing
                delete hours[hour][targetSource][commField];
            });
        }
    });
}

function processCalendar(hours, yearABC, season, calendarMonth, calendarDay, replaceOblig = 'oblig') {
    const processData = getCalendarData()?.[calendarMonth]?.[calendarDay];

    if (processData) {
        if (replaceOblig === 'wt' && [41, 46].includes(calendarDay))
            replaceOblig = 'oblig'

        // Map über alle Schlüssel
        sourceKeys.forEach(sourceKey => {
            if (sourceKey !== 'oblig' || replaceOblig !== 'skip') {
                const sourceData = processData[sourceKey];
                const targetKey = sourceKey === 'oblig' ? replaceOblig : sourceKey;

                if (sourceData) {
                    mergeData(hours, sourceData, targetKey);
                    processCommune(hours, season, targetKey);
                }
            }
        });
    }

    processReadings(hours, yearABC, calendarMonth, calendarDay);
}

function processReadings(hours, yearABC, calendarMonth, calendarDay) {
    const readingsAData = lectureABCData?.AAA?.[calendarMonth]?.[calendarDay]?.a;
    const readingsBCData = yearABC === 'a' ? null : lectureABCData?.AAA?.[calendarMonth]?.[calendarDay]?.[yearABC];
    const diocesanReadingsData = diocese ? lectureABCData?.[diocese]?.[calendarMonth]?.[calendarDay]?.a : null;

    if (readingsAData) mergeData(hours, readingsAData, 'oblig');
    if (readingsBCData) mergeData(hours, readingsBCData, 'oblig');
    if (diocesanReadingsData) mergeData(hours, diocesanReadingsData, 'oblig');
}

function processTerzPsalms(hours) {
    // Antiphonen und Psalmen sind in den Kleinen Horen (Terz, Sext, Non) meist gleich;
    // deshalb sind sie in den Datenbanken nur für die Terz hinterlegt.
    // Hier werden sie in Sext und Non übernommen.

    // Definiere die relevanten Psalm-Felder
    const psalmFields = [
        'psalm1', 'psalm2', 'psalm3',
        'ant1', 'ant2', 'ant3',
        'ant1_lat', 'ant2_lat', 'ant3_lat'];

    // Finde alle vorhandenen Sources durch Inspektion der Terz
    const sources = hours.terz ? Object.keys(hours.terz) : [];

    // Iteriere über die Zielstunden (Sext und Non)
    ['sext', 'non'].forEach(hour => {
        if (!hours[hour]) return;

        // Iteriere über alle gefundenen Sources
        sources.forEach(source => {
            if (!hours[hour][source]) hours[hour][source] = {};

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

function processAntABC(hours, yearABC, swdCombined) {
    // Wenn an den Sonntagen Benedictus- und Magnificat-Antiphonen
    // nach Lesejahr ABC unterschiedlich sind,
    // werden die des aktuellen Lesejahres
    // dem relevanten Feld antEv zugewiesen.


    ['erstev', 'laudes', 'vesper'].forEach(hour => {
        let antField = 'ant' + yearABC;
        if (swdCombined === 'j-34-6' && hour === 'vesper') {
            const followingYearABC = yearABC === 'a' ? 'b' : (yearABC === 'b' ? 'c' : 'a');
            antField = 'ant' + followingYearABC
        }
        const antFieldLat = antField + '_lat';

        if (hours[hour].wt?.[antField])
            hours[hour].wt.antev = hours[hour].wt[antField];

        if (hours[hour].wt?.[antFieldLat])
            hours[hour].wt.antev_lat = hours[hour].wt[antFieldLat];

    });
}

function processInvitatoriumPsalms(hours, prefInv = 100) {
    // Psalmen, die grundsätzlich für das Invitatorium zur Auswahl stehen,
    // werden aus der Auswahl ausgeschlossen, wenn sie am betreffenden Tag
    // an anderer Stelle des Tages im Stundengebet vorkommen.

    // Array für gefundene Psalmen initialisieren
    const found = new Set();

    // Zu suchende Psalm-Nummern
    let searchPsalms = [100, 67, 24];
    if (!searchPsalms.includes(prefInv)) searchPsalms.push(prefInv);

    // Durchsuche alle Stunden
    Object.values(hours).forEach(hour => {
        // Durchsuche alle Quellen (wt, oblig, etc.), außer 'kirchw'
        Object.entries(hour).forEach(([sourceKey, sources]) => {
            if (sourceKey === 'kirchw') return; // Überspringe kirchw

            // Funktion zum Durchsuchen von Psalm-Einträgen
            const searchPsalmEntries = obj => {
                ['psalm1', 'psalm2', 'psalm3'].forEach(psKey => {
                    const psValue = obj[psKey];
                    if (psValue && searchPsalms.includes(psValue))
                        found.add(psValue);
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
        if (!found.has(psalm)) invitatorium.push(psalm);
    });

    return invitatorium;
}

function processEasterResponses(hours) {
    // In der Osterzeit werden der erste und der zweite Teil des Responsoriums
    // als Teil 1 zusammengefasst,
    // der 2. Teil ist dann immer 'Halleluja, halleluja.'

    function processResponseSet(data) {
        if (data.resp1 && data.resp2) {
            if (!data.resp2.startsWith('Hallel')) {
                data.resp1 = `${data.resp1} ${data.resp2}`;
                data.resp2 = 'Halleluja,°halleluja.';
            }
        }

        // Lateinische Responsorien verarbeiten
        if (data.resp1_lat && data.resp2_lat) {
            if (!data.resp2_lat.startsWith('Allel')) {
                data.resp1_lat = `${data.resp1_lat} ${data.resp2_lat}`;
                data.resp2_lat = 'Allelúia,°allelúia.';
            }
        }
    }

    // Nur Laudes und Vesper bearbeiten
    ['laudes', 'vesper'].forEach(hour => {
        if (!hours[hour]) return;

        // Alle relevanten Sources durchgehen
        sourceKeys.forEach(source => {
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

function processKompletData(data, calendarDate) {
    // Hier wird zusammengestellt, welche Komplet-Formulare
    // am Tag zur Auswahl stehen und welches davon die 1. Wahl ist.
    // Die Komplet-Daten selbst stehen in GetValue.js.

    const { rank = { wt: 0, date: 0 }, dayOfWeek, swdCombined } = data
    const kompletDay = calendarDate.getDate();
    const kompletMonth = calendarDate.getMonth() + 1;

    let showKompletWt = true;
    let showKompletK1 = true;
    let showKompletK2 = true;  // immer true, da die 2. Kp immer verfügbar ist
    let prefKomplet = 'wt'

    // Aschermittwoch und Mo-Mi der Karwoche: wie Wochentag trotz Rang 5
    if (['q-0-3', 'q-6-1', 'q-6-2', 'q-6-3'].includes(swdCombined)) {
        prefKomplet = 'wt'
    }
    // Gründonnerstag, Karfreitag, Karsamstag: nur 2. Kp vom So
    else if (['q-6-4', 'q-6-5', 'q-6-6'].includes(swdCombined)) {
        showKompletWt = false; showKompletK1 = false; prefKomplet = 'k2'
    }
    // nach der 1. Vesper
    else if (rank?.hasErsteVesper) {
        showKompletWt = false; prefKomplet = 'k1'
    }
    // an Sonntagen und Hochfesten
    else if (dayOfWeek === 0 || rank.date > 4 || rank.wt === 5) {
        showKompletWt = false; prefKomplet = 'k2'
    }
    // Weihnachts- und Osteroktav: 1. oder 2. Kp nach Belieben,
    // deshalb 'wt' als Vorauswahl (wird als "Bitte wählen Sie ..." angezeigt)
    else if ((kompletMonth === 12 && kompletDay > 25)
        || (swdCombined.startsWith('o-1-'))) {
        showKompletWt = false; prefKomplet = 'wt'
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
    const todayDay = todayDate.getDate();
    const todayMonth = todayDate.getMonth() + 1;
    const todayInfo = getLiturgicalInfo(todayDate);

    const yesterdayDate = new Date(todayDate);
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterdayInfo = getLiturgicalInfo(yesterdayDate);

    const tomorrowDate = new Date(todayDate);
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);

    const isSacredHeart = [1, 2, 46].includes(todayInfo.afterPentecost)
        ? todayInfo.afterPentecost : 0;

    const isSollemnity = diff => {
        const checkDate = new Date(todayDate);
        checkDate.setDate(todayDate.getDate() + diff);
        const checkInfo = getLiturgicalInfo(checkDate);
        return (checkInfo.rank_date === 5) ? checkDate : null
    }

    // Bestimme die tatsächlich zu verwendenden Tage basierend auf den Rängen
    let calendarDate = todayDate;
    let nextDate = tomorrowDate;

    if (yesterdayInfo.rank_wt === 5 && yesterdayInfo.rank_date === 5
        && todayInfo.rank_wt < 5 && isSacredHeart !== 46) {
        calendarDate = yesterdayDate;
        console.log('Verschiebung: Gestriges Hochfest wird heute gefeiert');
    }

    // Verschiebung Josef
    if (todayInfo.swdCombined === 'q-5-6' &&
        (todayMonth === 3 && todayDay < 19)) {
        // Erstelle ein neues Date-Objekt für den 19. März
        const josefDate = new Date(todayDate.getFullYear(), 2, 19); // Monat ist 0-basiert
        calendarDate = josefDate;
        console.log('Verschiebung: Josef am Samstag vor Palmsonntag');
    }

    // Verschiebung Verkündigung des Herrn
    if (todayInfo.swdCombined === 'o-2-1' &&
        (todayMonth === 3 || (todayMonth === 4 && todayDay < 10))) {
        const verkuendigungDate = new Date(todayDate.getFullYear(), 2, 25); // Monat ist 0-basiert
        calendarDate = verkuendigungDate;
        console.log('Verschiebung: Verkündigung des Herrn auf Montag nach der Osteroktav');
    }

    if (isSacredHeart === 1 && isSollemnity(1)) {
        calendarDate = isSollemnity(1);
        console.log('Verschiebung: Morgiges Hochfest wird heute gefeiert wegen Herz-Jesu-Fest');
    }
    if (isSacredHeart === 2 && isSollemnity(2)) {
        nextDate = isSollemnity(2);
        console.log('Verschiebung: Heute 1. Vesper zum Hochfest, das morgen gefeiert wird wegen Herz-Jesu-Fest');
    }

    // Hole Stundendaten für den aktuellen Tag
    const todayData = getPrayerTexts(brevierData, personalData, todayDate, calendarDate);
    const tomorrowData = getPrayerTexts(brevierData, personalData, tomorrowDate, nextDate);

    // Prüfe, ob erste Vesper benötigt wird
    const { season, dayOfWeek, swdCombined, rank_wt, rank_date } = todayData;
    const rankNextWt = tomorrowData.rank_wt;
    const rankNextDate = tomorrowData.rank_date;
    const nextSwdCombined = tomorrowData.swdCombined;

    const hasErsteVesper_wt =
        // Sonderfall: Sa der Osteroktav hat 1. Vesper, obwohl selbst Hochfest
        swdCombined === 'o-1-6' ||
        // notwendige Bedingung: heute kein Hochfest
        (rank_wt < 5 && rank_date < 5 &&
            // hinreichende Bedingung: Samstag, aber kein Fest ...
            ((dayOfWeek === 6 && rank_date < 4) ||
                // ... oder morgen Hochfest (außer Aschermittwoch)
                (rankNextWt === 5 && nextSwdCombined !== 'q-0-3')));
    const hasErsteVesper_date =
        // Sonderfall: Weihnachten hat Vorrang auch vor dem 4. Advent
        rankNextDate === 6 ||
        // notwendige Bedingungen: heute kein Hochfest und morgen kein Hochfest des Kirchenjahres
        (rank_wt < 5 && rank_date < 5 && rankNextDate > rankNextWt &&
            // hinreichende Bedingung: morgen Hochfest oder Herrenfest am Sonntag
            (rankNextDate === 5 || (rankNextDate === 4 && dayOfWeek === 6)));

    //Lesejahr ABC
    let year = todayDate.getFullYear();
    if (season === 'a' || (todayMonth === 12 && season !== 'j'))
        year += 1;
    const yearABC = ['c', 'a', 'b'][year % 3]

    // Stelle die endgültigen Daten zusammen
    const finalData = {
        ...todayData,
        yearABC,
        rank: {
            ...todayData.rank,
            nextWt: rankNextWt,
            nextDate: rankNextDate,
        },
        //rankNextDate,
        swdCombined: todayInfo.swdCombined
    };

    // Sichere Vesper-Daten für etwaige Nutzung bei lokalem Hochfest
    // vor der etwaigen Überschreibung durch eine Erste Vesper
    finalData.prefsollemnity = JSON.parse(JSON.stringify(finalData.vesper));

    // Ersetze Vesper-Daten wenn nötig
    if (hasErsteVesper_wt || hasErsteVesper_date) {
        finalData.vesper = JSON.parse(JSON.stringify(tomorrowData.erstev));
        finalData.vesper.prefComm = tomorrowData.prefComm;
        //finalData.hasErsteVesper = true;
        finalData.rank.hasErsteVesper = true;
        if (tomorrowData.laudes?.oblig?.com1?.button)
            finalData.vesper.commButton = tomorrowData.laudes.oblig.com1.button;
        if (hasErsteVesper_wt)
            finalData.vesper.wt.swdWritten = tomorrowData?.swdWritten;
        if (hasErsteVesper_date) {
            //finalData.vesper.oblig.button = tomorrowData.laudes?.oblig?.button
            //finalData.vesper.oblig.farbe = tomorrowData.laudes?.oblig?.farbe || 'w'
        };
    }

    // Wende die finalen Verarbeitungsschritte an
    processTerzPsalms(finalData);
    processAntABC(finalData, yearABC, swdCombined);
    if (todayInfo.season === 'o') { processEasterResponses(finalData); }

    const kompletSettings = processKompletData(finalData, calendarDate);
    finalData.komplet = {
        ...finalData.komplet,
        ...kompletSettings
    };

    const dateCompare = `${todayMonth.toString().padStart(2, '0')}-${todayDay.toString().padStart(2, '0')}`;
    finalData.dateCompare = dateCompare;
    finalData.rank.useFeastPsalms = (
        (rank_date > 2 || rank_wt > 2) // Hochfeste und Feste: Ps vom So der I. Woche
        // nicht am Sonntag, Aschermittwoch oder Allerseelen
        && dayOfWeek !== 0
        && swdCombined !== 'q-0-3'
        && dateCompare !== '11-02'
    ) || // Gedenktage mit Ps vom Fest
        ['01-21', '05-01', '06-11', '08-29', '09-15',
            '10-02', '10-07', '11-11'].includes(dateCompare);

    finalData.rank.hasZweiteVesper = (kompletSettings.prefKomplet === 'k2'
        && !['q-6-4', 'q-6-5', 'q-6-6', 'o-1-0'].includes(swdCombined));

    const sequenceInv = JSON.parse(localStorage.getItem('sequenceInv')) || [95, 100, 24, 67, 67, 100, 24];
    let prefInv = sequenceInv[dayOfWeek];
    const invPsalms = processInvitatoriumPsalms(finalData, prefInv);
    if (!invPsalms.includes(prefInv)) prefInv = 95;
    finalData.invitatorium.psalms = invPsalms
    finalData.invitatorium.prefInv = prefInv;

    return finalData;
}