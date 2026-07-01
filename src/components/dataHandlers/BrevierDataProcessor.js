// Diese Komponente stellt
// aufgrund der Einordnung des Tages im liturgischen Jahr (siehe LitCalendar.js)
// die Stundengebetstexte aus den Datenbanken zusammen.
// In einer mehrlagigen Schichtung werden, ausgehend vom Vierwochenpsalter im Jahreskreis,
// besondere Texte je nach Kirchenjahreszeit (season), Woche (week) und Wochentag (day)
// allgemeinere Teile durch speziellere überschrieben (addLayer und mergeData).
//
// Parallel zu den Texten nach Kirchenjahr
// werden die Texte zu den Heiligenfesten nach Kalenderjahr hinzugefügt,
// zusammen mit den zugehörigen Commune-Texten.

import { brevierData } from '../data/Brevier.ts';
import { lecture1Data } from '../data/Lecture1.ts';
import { lecture2Data } from '../data/Lecture2.ts';
import { lectureABCData } from '../data/LectureABC.ts';
import { sollemnitiesData } from '../data/Sollemnities.ts';
import { getLiturgicalInfo } from './LitCalendar.js';
import { sourceKeys } from '../selectors/SourceSelector.js';
import { calendarData } from '../data/Calendar.ts';

const personalData = (() => {
    try {
        const stored = localStorage.getItem('personalData');
        return stored ? JSON.parse(stored) : {};
    } catch (error) {
        console.error('Fehler beim Laden der personalisierten Daten:', error);
        return {};
    }
})();

function deepMerge(target, source) {
    const result = { ...target };
    for (const key in source) {
        if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
            result[key] = deepMerge(result[key] || {}, source[key]);
        } else result[key] = source[key];
    }
    return result;
}

function getReferenceData(reference) {
    if (!reference) return {};
    const parts = reference.split('-');
    if (parts.length !== 4) {
        console.warn('Ungültiges Referenz-Format:', reference);
        return {};
    }
    const [refDiocese, refMonth, refDay, refSource] = parts;
    try {
        const referenceData = calendarData?.[refDiocese]?.[refMonth]?.[refDay]?.[refSource];
        if (referenceData) return JSON.parse(JSON.stringify(referenceData));
        console.warn('Referenz-Daten nicht gefunden:', reference);
        return {};
    } catch (error) {
        console.error('Fehler beim Abrufen der Referenz-Daten:', reference, error);
        return {};
    }
}

// Referenz auflösen (Laudes.referenz) und Referenzdaten mit Source-Daten mergen
function resolveAndMergeSource(sourceData) {
    const data = JSON.parse(JSON.stringify(sourceData));
    const reference = data?.Laudes?.referenz || '';
    let resolvedData = reference ? getReferenceData(reference) : {};
    delete data.reference;
    return deepMerge(resolvedData, data);
}

// Liest nur die Daten des betreffenden Tages aus dem Kalender –
// statt den gesamten Kalender zu mergen (wie CalendarMerge.js es tat).
// Logik: AAA-Daten als Basis; diözesane oblig-Source ersetzt alles;
// diözesane d-Sources werden neben den AAA-Daten eingefügt.
function getDayCalendarData(calendarMonth, calendarDay, onlyPar = false) {
    const diocese = localStorage.getItem('diocese') || 'Fulda';
    const regionalCalendarData = calendarData?.AAA?.[calendarMonth]?.[calendarDay];

    // Referenzen in regionalen AAA-Daten auflösen
    const resolvedRegional = {};
    if (regionalCalendarData) {
        for (const source in regionalCalendarData) {
            resolvedRegional[source] = resolveAndMergeSource(regionalCalendarData[source]);
        }
    }

    if (diocese === 'AAA' || !calendarData?.[diocese]) {
        return Object.keys(resolvedRegional).length > 0 ? resolvedRegional : undefined;
    }

    const diocesanDayData = calendarData?.[diocese]?.[calendarMonth]?.[calendarDay];

    // Enthält der Diözesankalender eine oblig-Source, ersetzt sie alle AAA-Daten vollständig;
    // d-Sources aus demselben Diözesaneintrag müssen aber dennoch übernommen werden.
    // Deshalb wird die Prüfung vorab durchgeführt und result ggf. leer gestartet.
    const diocesanHasOblig = diocesanDayData && 'oblig' in diocesanDayData;
    const result = diocesanHasOblig ? {} : { ...resolvedRegional };

    if (diocesanDayData) {
        for (const source in diocesanDayData) {
            const reference = diocesanDayData[source]?.Laudes?.referenz || '';
            if (reference) {
                const parts = reference.split('-');
                if (parts.length === 4) {
                    const [refDiocese, refMonth, refDay, refSource] = parts;
                    // Referenz auf denselben Tag, anderen Kalender, andere Source:
                    // regionalen Eintrag löschen, damit kein Duplikat erscheint
                    if (String(refMonth) === String(calendarMonth) &&
                        String(refDay) === String(calendarDay) &&
                        refDiocese !== diocese &&
                        refSource !== source) {
                        delete result[refSource];
                    }
                }
            }

            // Referenz auflösen und diözesane Daten darüber mergen;
            // alle Sources (oblig, d1, d2, …) werden in result eingetragen
            result[source] = resolveAndMergeSource(diocesanDayData[source]);
        }
    }

    // Mit onlyPar=true nur die dpar-Source zurückgeben:
    // Ein beweglicher Gedenktag des Diözesankalenders, der auch neben einer oblig-Source
    // stehen kann, wird selbst dann noch geladen, wenn processData bereits eine oblig-Source enthält.
    if (onlyPar) {
        return result.dpar ? { dpar: result.dpar } : undefined;
    }
    return Object.keys(result).length > 0 ? result : undefined;
}

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

function getPrayerTexts(brevierData, personalData, date, dateToRead = 0) {
    // date ist das gewählte aktuelle Datum;
    // dafür werden die wt- und swd-Werte gelesen.
    // dateToRead ist das ursprüngliche Datum eines evtl. verlegten Hochfestes;
    // dafür wird rank_date und die oblig-Source gelesen
    dateToRead = dateToRead ?? date

    // State für etwaige Verlegung von Epiphanie, Christi Himmelfahrt und Fronleichnam
    const storedDelay = localStorage.getItem('delaySolemnity');
    const delaySolemnity = storedDelay ? JSON.parse(storedDelay) : { epiphany: false, ascension: 0, corpusXP: 0 };

    const {
        season, week, dayOfWeek,
        swdCombined, swdWritten, swd,
        weekOfPsalter,
        rank_wt,
        aroundEpiphany,
        aroundPentecost,
        isCommemoration,
        hasVigil
    } = getLiturgicalInfo(date);
    // Eigenschaften, bei denen eine etwaige Verlegung berücksichtigt werden muss
    const {
        rank_date, date: dateFormats
    } = getLiturgicalInfo(dateToRead);

    // Eigenschaften, die nur ins texts-Objekt kommen, wenn sie true sind
    const passThrough = {}
    if (isCommemoration) passThrough.isCommemoration = true;
    if (hasVigil) passThrough.hasVigil = true;

    // Variablen bezeichnen das ursprüngliche Datum einer Heiligenfeier,
    // auch wenn sie verlegt wurde
    const calendarDay = dateToRead.getDate();
    const calendarMonth = dateToRead.getMonth() + 1;

    // Lesejahr ABC (für Sonn- und Feiertage)
    // und lectureData zusätzlich zu lecture1Data im Lesejahr II für Lesehore und Werktage
    const lectureYear = date.getFullYear() + (
        // Am 1. Advent beginnt das neue Lesejahr,
        // das nach der Jahreszahl des folgenden Jahres bestimmt wird:
        // Tage im November und Dezember, die nicht im Jahreskreis liegen
        (calendarMonth > 10 && season !== 'j')
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

    const getUseDateAndLast = () => {
        if (calendarMonth === 12 && calendarDay > 16) {
            return calendarDay < 25 ? 'adventLast' : 'christmasOctave';
        } else if (delaySolemnity.epiphany && season === 'w') {
            // bei Verlegung ist Epiphanie immer der 2. Sonntag nach Weihnachten,
            // deshalb ist w-1 Weihnachtszeit, und w-2 'nach Epiphanie (christmasLast)
            return week === 1 ? 'christmas' : 'christmasLast';
        } else if (season === 'w' && calendarDay < 13) {
            return calendarDay < 6 ? 'christmas' : 'christmasLast';
        } else if (season === 'o' &&
            (week === 7 ||
                // ohne Verlegung von Christi Himmelfahrt:
                // Freitag und Samstag der 6. Osterwoche gehören zur Zeit nach Himmelfahrt (easterLast)
                (delaySolemnity.ascension === 0 && week === 6 && dayOfWeek > 4))) {
            return 'easterLast'
        } else return '';
    }

    function addLayer(source, week, dayOfWeek) {
        ['each', dayOfWeek].forEach(key => {
            const layerData = brevierData?.[source]?.[week]?.[key];
            const personalLayerData = personalData?.[source]?.[week]?.[key];
            const lecture1LayerData = lecture1Data?.[source]?.[week]?.[key];
            // im Lesehrjahr II zusätzlich lecture2Data für Lesehore und Werktage
            const lectureLayerData = lectureData?.[source]?.[week]?.[key];
            const lectureALayerData = lectureABCData?.[source]?.[week]?.[key]?.a;
            // im Lesejahr B oder C zusätzlich lectureABCData für Sonntagslesungen
            const lectureBCLayerData = yearABC === 'a' ? null
                : lectureABCData?.[source]?.[week]?.[key]?.[yearABC];
            mergeData(hours, layerData, 'wt');
            mergeData(hours, personalLayerData, 'pers');
            // Texte, die in den Lesejahren ABC bzw. in Lesejahr I und II gleich sind,
            // sind nur bei Lesejahr A bzw. I hinterlegt,
            // damit etwaige Korrekturen nur an einer Stelle vorgenommen werden müssen.
            // Deshalb werden Lesejahr A und I immer geladen,
            // Lesejahr B und C bzw. II überschreiben gegebenenfalls.
            mergeData(hours, lectureALayerData, 'wt');
            mergeData(hours, lectureBCLayerData, 'wt');
            mergeData(hours, lecture1LayerData, 'wt');
            mergeData(hours, lectureLayerData, 'wt');
        })
    }

    try {
        // ZUSAMMENSTELLUNG DER wt-SOURCE
        // Layer 0: wt- und pers-Source als Grundlage
        [
            [brevierData, 'wt'],
            [personalData, 'pers']
        ].forEach(([dataPool, mergeSource]) => {
            const ordData = dataPool?.wt?.each;
            const ordEvenData = week % 2 === 0 ? dataPool?.wt?.even : null;
            const ordSeasonData = dataPool?.wt?.[season];
            [ordData, ordEvenData, ordSeasonData].forEach(layer => {
                mergeData(hours, layer?.each, mergeSource);
                mergeData(hours, layer?.[dayOfWeek], mergeSource);
            });
        });
        // Layer 1: Vierwochenpsalter mit jahreszeitlichen Anpassungen
        // und 8-Wochen-Schema für Vigil-Evangelien
        addLayer('p', weekOfPsalter, dayOfWeek);
        const pOfSeason = 'p' + season
        addLayer(pOfSeason, weekOfPsalter, dayOfWeek);
        const weekOfEight = week % 8 || 8
        addLayer('pvigil', weekOfEight, dayOfWeek)

        // Layer 2: Weekly schema for the season
        addLayer(season, 'each', dayOfWeek);

        // Layer 3: Bi-weekly schema
        if (week % 2 === 0) addLayer(season, 'even', dayOfWeek);

        // Layer 4: Texte für den einzelnen Tag
        addLayer(season, week, dayOfWeek);

        const useDateAndLast = getUseDateAndLast();
        // Layer 5: 'last' für letzte Adventstage, nach Erscheinung und nach Himmelfahrt
        // (nach dem wochenbasierten Layer, damit spezifischere 'last'-Einträge Vorrang haben)
        if (useDateAndLast.includes('Last'))
            addLayer(season, 'last', dayOfWeek);

        if (useDateAndLast) {
            // Layer 6: 17. Dez. bis Taufe des Herrn (wt nach Kalendertag) mit Weihnachtsoktav
            // easterLast: entsprechende Einträge existieren in 'k' und 'kso' nicht
            if (useDateAndLast === 'christmasOctave')
                addLayer('w', 'okt', 'each');
            // bei Verlegung von Epiphanie: Texte nach Wochentag statt nach Kalendertag
            const dayToRead = !delaySolemnity.epiphany ? calendarDay
                : (season === 'w' && week === 2 && dayOfWeek > 0) ? 6 + dayOfWeek : calendarDay;
            addLayer('k', calendarMonth, dayToRead);
            // wiederholte Behandlung der Sonntage in diesem Zeitraum
            // (3. und 4. Advent, Hl. Familie, 2. Sonntag nach Weihnachten):
            // Texte für den Sonntag statt gemäß Kalendertag
            addLayer('kso', week, dayOfWeek);
        }
        // Ohne Verlegung von Christi Himmelfahrt auf den Sonntag:
        // eigene Bitten/Fürbitten und Orationen am Freitag und Samstag
        // (als Woche o-6.5 gespeichert)
        if (delaySolemnity.ascension === 0 && season === 'o' && week === 6 && dayOfWeek > 4) {
            addLayer('o', 6.5, dayOfWeek);
        }
        // Bei Verlegung von Christi Himmelfahrt auf den Sonntag:
        // Lesehore Do bis Sa der 6. Osterwoche erhalten jeweils die Lesungen des liturgisch folgenden Tages,
        // der 7. Sonntag der Osterzeit die von Christi Himmelfahrt.
        // Ebenso erhält das Fest Taufe des Herrn immer die Lesungen von j-1-0,
        // auch bei Verlegung auf j-1-1 (Montag nach dem So, auf den Epiphanie verlegt wurde).
        if (delaySolemnity.ascension !== 0 || aroundEpiphany === 67) {
            const lesehoreShift = {
                'o-6-4': ['o', 6, 5],
                'o-6-5': ['o', 6, 6],
                'o-6-6': ['o', 7, 0],
                'o-7-0': ['o', 6, 4],
                'j-1-0': ['j', 1, 0],
                'j-1-1': ['j', 1, 0],
            };
            const shift = lesehoreShift[swdCombined];
            if (shift) {
                const [repSeason, repWeek, repDay] = shift;
                const lesehoreOnly = { lesehore: hours.lesehore };
                const lecture1LayerData = lecture1Data?.[repSeason]?.[repWeek]?.[repDay];
                // im Lesehrjahr II zusätzlich lecture2Data für Lesehore und Werktage
                const lectureLayerData = lectureData?.[repSeason]?.[repWeek]?.[repDay];
                mergeData(lesehoreOnly, lecture1LayerData, 'wt');
                mergeData(lesehoreOnly, lectureLayerData, 'wt');
            }
        }
        // An Allerseelen auch am Sonntag die Messlesungen
        if (calendarMonth === 11 && calendarDay === 2 && dayOfWeek === 0)
            processReadings(hours, yearABC, calendarMonth, calendarDay);

        // ZUSAMMENSTELLUNG DER oblig-, n- und d-SOURCES
        // sowie alt (alternative Psalmen an Aschermittwoch und Gründonnerstag)
        // und mar (Gedächtnis Mariens am Samstag)
        if (aroundEpiphany) {
            // Epiphanie: kann auf den Sonntag nach dem 1. Januar verlegt werden;
            // Texte sind deshalb mit fiktivem Datum '66. Januar' in den Datenbanken hinterlegt
            processCalendar(hours, yearABC, season, 1, aroundEpiphany,
                // Taufe des Herrn wird in die wt-Source geladen,
                // Epiphanie hingegen in die oblig-Source
                aroundEpiphany === 67 ? 'wt' : '');
        }
        else if (swdCombined === 'q-0-3' || swdCombined === 'q-6-4') {
            // alternative Psalmen und Antiphonen an Aschermittwoch (Laudes) und Gründonnerstag (Lesehore)
            // in den Datenbanken unter den fiktiven Daten '33. und 34. März' gespeichert (1er-Stelle entsprechend dem Wochentag)
            processCalendar(hours, yearABC, season, 3, 30 + dayOfWeek, 'alt');
        }
        else if (aroundPentecost > 2) {
            // Christi Himmelfahrt ist als '40. Mai' gespeichert,
            // Feste nach Pfingsten als '60. bis 66. Mai';
            // (1er-Stelle gibt den Wochentag an, unabhängig von der tatsächlichen Reihenfolge):
            // 60=So: Dreif., 61=Mo: Pfingstmontag/Mutter der Kirche,
            // 64=Do: Fronleichnam, 65=Fr: Herz-Jesu-Fest, 66=Sa: Unbefl. Herz Mariae
            processCalendar(hours, yearABC, season, 5, aroundPentecost,
                // Mutter der Kirche und Herz Mariae werden als gebotene Gedenktage geladen,
                // die Hochfeste hingegen in die wt-Source (replaceOblig='wt').
                [61, 66].includes(aroundPentecost) ? '' : 'wt');

            // Sonderfall: Zusammentreffen von MaterEcclesiae bzw. Herz Mariae
            // mit anderem gebotenen Gedenktag:
            // letzterer wird als nichtgebotener Gedenktag geladen (replaceOblig='n1'),;
            // nicht gebotene Gedenktage (rank_date=0) werden verdrängt und deshalb nicht geladen
            if (rank_date === 2)
                processCalendar(hours, yearABC, season, calendarMonth, calendarDay, 'n1');
        }
        else if (rank_date === 2 && isCommemoration) {
            // bei Kommemoration:
            // gebotene Gedenktage werden als nichtgebotene Gedenktage geladen (replaceOblig='n1'),
            // nichtgebotene Gedenktage behalten ihre Source (nur 'oblig' wird ersetzt)
            processCalendar(hours, yearABC, season, calendarMonth, calendarDay, 'n1',
                // Ab hier werden auch Gedenktage berücksichtigt,
                // die anderen Datumsformaten folgen (kommen in Diözesankalendern vor),
                // z.B. Freitag der 2. Osterwoche (o-2-5),
                // 2. Sonntag im August (8-2-0), vorletzter Sonntag im September (9-L2-0)
                swdCombined, dateFormats);
        }
        else if (rank_date > 1 && rank_date > rank_wt) {
            // gebotene Gedenktage, Feste und Hochfeste, wenn der wt-Rang geringer ist
            processCalendar(hours, yearABC, season, calendarMonth, calendarDay, '', swdCombined, dateFormats);
        }
        else if (rank_wt < 2 || (rank_wt === 2 && isCommemoration)) {
            // nichtgebotene Gedenktage werden an Sonntagen
            // sowie gebotenen Gedenktagen, Festen und Hochfesten des Kirchenjahres nicht geladen,
            // können aber neben gebotenen Gedenktagen und Festen der Heiligen stehen
            // (bei Überschneidungen der Kalenderebenen General-/Regional-/Diözesankalender)
            processCalendar(hours, yearABC, season, calendarMonth, calendarDay, '', swdCombined, dateFormats);

            // Maria am Samstag
            // (mit fiktivem Datum: 6 für Samstag, 13. Monat: vom Monat unabhängig,
            // als zusätzliche 'mar'-Source geladen)
            // an jedem Samstag im Jahreskreis, wenn nichtgebotene Gedenktage möglich sind
            if (rank_date < 2 && season === "j" && dayOfWeek === 6)
                processCalendar(hours, yearABC, season, 13, 6)
        }

        return {
            season, week, dayOfWeek,
            swd,
            rank: {
                wt: rank_wt,
                date: rank_date,
                ...passThrough, // isCommemoration und hasVigil
            },
            prefComm: (rank_date > 2 || rank_wt > 2 || [61, 66].includes(aroundPentecost)) ? 1 : 0,
            ...cleanupZeroReferences(hours)
        };
    } catch (error) {
        console.error('Error processing breviary data for date:', date, error);
        return {
            prefComm: 0,
            rank: { wt: 0, date: 0, ...passThrough },
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
                const commSep = foundComm.includes('#') ? '#' : foundComm.includes('_') ? '_' : null;
                const [readComm, addComm] = commSep ? foundComm.split(commSep) : [foundComm, null];

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

                const mergeLastToParent = foundComm.includes('#');

                function addLayer(layerComm, layerSeason, mergeToParent = false) {
                    const communeData = ['Kirchw', 'Verst'].includes(layerComm)
                        ? sollemnitiesData?.[layerComm.toLowerCase()]?.[layerSeason?.toLowerCase()]?.[readingHour?.toLowerCase()]
                        : brevierData?.com?.[layerComm]?.[layerSeason]?.[readingHour];
                    if (communeData) {
                        Object.assign(
                            mergeToParent ? hours[hour][targetSource] : hours[hour][targetSource][targetKey],
                            communeData
                        );
                    }
                }

                addLayer('each', 'each');
                addLayer(readComm, 'each');
                addLayer(readComm, season);
                addLayer('each', addComm, mergeLastToParent);
                addLayer(readComm, addComm, mergeLastToParent);

                // Remove the comm_1/2 field after processing
                delete hours[hour][targetSource][commField];
            });
        }
    });
}

function processCalendar(hours, yearABC, season, calendarMonth, calendarDay, replaceOblig = '', swdCombined = '', dateFormats = {}) {
    // Fortlaufende Lesungen der Lesehore sichern, bevor die wt-Source durch ein Hochfest überschrieben wird;
    // die gesicherten Texte stehen dann unter der source 'continuous' zur Auswahl.
    if (replaceOblig === 'wt' && hours.lesehore?.wt) {
        hours.lesehore.continuous = { ...hours.lesehore.wt };
    }

    const processData = getDayCalendarData(calendarMonth, calendarDay);
    // Sonder-Datumsformate: bei hasOblig=true nur die dpar-Source laden (onlyPar=true).
    // Ein beweglicher nichtgebotener Gedenktag entfällt, wenn derselbe Tag bereits
    // einen gebotenen Gedenktag, ein Fest oder Hochfest trägt – außer er ist als dpar
    // eingetragen und darf neben einer oblig-Source stehen.
    const hasOblig = !!processData?.oblig;
    const swdData = getDayCalendarData(13, swdCombined, hasOblig);
    const ordinalData = getDayCalendarData(13, dateFormats?.ordinal, hasOblig);
    const ordinalLastData = getDayCalendarData(13, dateFormats?.ordinalLast, hasOblig);

    [processData, swdData, ordinalData, ordinalLastData].forEach(data => {
        if (!data) return;
        sourceKeys.forEach(sourceKey => {
            const sourceData = data[sourceKey];
            // dpar-Source immer als dmob einlesen (beweglicher Gedenktag des Diözesankalenders)
            const targetKey = sourceKey === 'dpar' ? 'dmob'
                : (sourceKey === 'oblig' && replaceOblig) ? replaceOblig
                    : sourceKey;

            if (sourceData) {
                mergeData(hours, sourceData, targetKey);
                processCommune(hours, season, targetKey);
            }
        });
    });

    processReadings(hours, yearABC, calendarMonth, calendarDay, replaceOblig);
}

function processReadings(hours, yearABC, calendarMonth, calendarDay, replaceOblig = '') {
    const diocese = localStorage.getItem('diocese') || 'Fulda';
    const readingsAData = lectureABCData?.AAA?.[calendarMonth]?.[calendarDay]?.a;
    const readingsBCData = yearABC === 'a' ? null : lectureABCData?.AAA?.[calendarMonth]?.[calendarDay]?.[yearABC];
    const diocesanReadingsData = diocese !== 'AAA' ? lectureABCData?.[diocese]?.[calendarMonth]?.[calendarDay]?.a : null;

    const targetSource = replaceOblig || 'oblig';
    if (readingsAData) mergeData(hours, readingsAData, targetSource);
    if (readingsBCData) mergeData(hours, readingsBCData, targetSource);
    if (diocesanReadingsData) mergeData(hours, diocesanReadingsData, targetSource);
}

function processTerzPsalms(hours) {
    // Antiphonen und Psalmen sind in den Kleinen Horen (Terz, Sext, Non) meist gleich;
    // deshalb sind sie in den Datenbanken nur für die Terz hinterlegt.
    // Hier werden sie in Sext und Non übernommen.

    // Definiere die relevanten Psalm-Felder
    const psalmFields = [
        'psalm1', 'psalm2', 'psalm3',
        'ant1', 'ant2', 'ant3',
        'mode1', 'mode2', 'mode3',
        'ant1_lat', 'ant2_lat', 'ant3_lat',
    ];

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
                    const psValue = obj?.[psKey];
                    if (psValue && searchPsalms.includes(psValue))
                        found.add(psValue);
                });
            };

            // Durchsuche die Hauptebene der Source
            searchPsalmEntries(sources);

            // Durchsuche Commune-Unterverzeichnisse
            ['com1', 'com2'].forEach(commune => {
                if (sources?.[commune]) {
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

// Sonderregel für den 11. Juni (Barnabas): Commune-Texte aus oblig.com1 als Eigentexte in oblig übernehmen.
// Ant und Psalmen werden nur bei Osterzeit übertragen (da Barnabas kein eigenes Psalterium hat).
function processBarnabas(data, isEasterSeason) {
    const psalmAntFields = [
        'ant0', 'ant1', 'ant2', 'ant3',
        'psalm1', 'psalm2', 'psalm3',
        'ant0_lat', 'ant1_lat', 'ant2_lat', 'ant3_lat',
        'psalm1_lat', 'psalm2_lat', 'psalm3_lat'
    ];
    Object.keys(data).forEach(hour => {
        const com1 = data[hour]?.oblig?.com1;
        if (!com1) return;
        Object.entries(com1).forEach(([key, value]) => {
            if (!isEasterSeason && psalmAntFields.includes(key)) return;
            if (!(key in data[hour].oblig)) data[hour].oblig[key] = value;
        });
    });
}

function processKompletData(data, dateToRead) {
    // Hier wird zusammengestellt, welche Komplet-Formulare
    // am Tag zur Auswahl stehen und welches davon die 1. Wahl ist.
    // Die Komplet-Daten selbst stehen in GetValue.js.

    const { rank = { wt: 0, date: 0 }, dayOfWeek } = data
    const swdCombined = data.swd?.combined;
    const kompletDay = dateToRead.getDate();
    const kompletMonth = dateToRead.getMonth() + 1;

    let showKompletWt = true;
    let prefKomplet = 'wt'

    // Aschermittwoch und Mo-Mi der Karwoche: wie Wochentag trotz Rang 5
    if (['q-0-3', 'q-6-1', 'q-6-2', 'q-6-3'].includes(swdCombined)) {
        showKompletWt = true;
    }
    // Weihnachts- und Osteroktav: 1. oder 2. Kp nach Belieben,
    // deshalb bleibt 'wt' als Vorauswahl (wird als "Bitte wählen Sie ..." angezeigt)
    else if ((kompletMonth === 12 && kompletDay > 25)
        || (swdCombined.startsWith('o-1-'))) {
        showKompletWt = false; prefKomplet = 'wt'
    }
    // an Hochfesten: nach der 2. Vesper
    else if (rank.date > 4 || rank.wt === 5) {
        showKompletWt = false; prefKomplet = 'k2'
    }
    // nach der 1. Vesper
    else if (rank?.hasErsteVesper) {
        showKompletWt = false; prefKomplet = 'k1'
    }
    // an Sonntagen: nach der 2. Vesper
    else if (dayOfWeek === 0) {
        showKompletWt = false; prefKomplet = 'k2'
    }
    return {
        showKompletWt,
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

    const isSacredHeart = [1, 2, 66].includes(todayInfo.aroundPentecost)
        ? todayInfo.aroundPentecost : 0;

    const upcomingSollemnity = diff => {
        const checkDate = new Date(todayDate);
        checkDate.setDate(todayDate.getDate() + diff);
        const checkInfo = getLiturgicalInfo(checkDate);
        return (checkInfo.rank_date === 5) ? checkDate : null
    }

    // Bestimme die tatsächlich zu verwendenden Tage basierend auf den Rängen
    let dateToRead = todayDate;
    let nextDateToRead = tomorrowDate;

    // allgemeiner Fall: Gestern trafen zwei Hochfeste aufeinander,
    // das Heiligen-Hochfest wird deshalb heute nachgefeiert,
    // wenn nicht auch heute ein Hochfest des Kirchenjahres oder Herz Mariae ist
    if (yesterdayInfo.rank_wt === 5 && yesterdayInfo.rank_date === 5
        && todayInfo.rank_wt < 5 && isSacredHeart !== 66) {
        dateToRead = yesterdayDate;
        console.log('Verschiebung: Gestriges Hochfest wird heute gefeiert');

        // Josef: Hochfest wird auf den heutigen Samstag vor Palmsonntag vorgezogen,
        // wenn der 19. März in die Karwoche fällt,
        // also heute spätestens der 18. März ist
    } else if (todayInfo.swdCombined === 'q-5-6' &&
        (todayMonth === 3 && todayDay < 19)) {
        const josefDate = new Date(todayDate.getFullYear(), 2, 19); // Monat ist 0-basiert
        dateToRead = josefDate;
        console.log('Verschiebung: Josef am Samstag vor Palmsonntag');

        // Hochfest, das in die Zeit von Palmsonntag bis Weißem Sonntag fällt
        // (z.B. Verkündigung des Herrn am 25.03., oder diözesane Hochfeste),
        // wird auf den heutigen Montag nach dem Weißen Sonntag verlegt.
    } else if (todayInfo.swdCombined === 'o-2-1') {
        for (let diff = -15; diff <= -1; diff++) {
            const feast = upcomingSollemnity(diff);
            // 19.03. (Josef) ausschließen: wird ggf. bereits auf q-5-6 vorgezogen
            if (feast && (feast.getMonth() > 2 || feast.getDate() > 19)) {
                dateToRead = feast;
                console.log('Verschiebung: Hochfest auf Montag nach der Osteroktav verlegt');
                break;
            }
        }

        // Wenn zwei Hochfeste in die Zeit von Palmsonntag bis Weißem Sonntag fielen
        // (z.B. Verkündigung 25.03. + Liudger 26.03. in Münster),
        // wird das zweite auf den heutigen Dienstag nach dem Weißen Sonntag verlegt.
    } else if (todayInfo.swdCombined === 'o-2-2') {
        let feastCount = 0;
        for (let diff = -16; diff <= -2; diff++) {
            const feast = upcomingSollemnity(diff);
            if (feast && (feast.getMonth() > 2 || feast.getDate() > 19)) {
                feastCount++;
                if (feastCount === 2) {
                    dateToRead = feast;
                    console.log('Verschiebung: Zweites Hochfest auf Dienstag nach der Osteroktav verlegt');
                    break;
                }
            }
        }

        // ein Heiligen-Hochfest, das mit Herz Jesu zusammenfällt,
        // wird nicht auf den nächsten Tag verlegt (wegen Herz Mariae)
        // (s.o. allgemeiner Fall: isSacredHeart!==66),
        // sondern vorgezogen
    } else if (isSacredHeart === 1 && upcomingSollemnity(1)) {
        // Szenario: Heute ist Donnerstag vor Herz-Jesu-Fest,
        // morgen wäre ein Hochfest, das deshalb heute gefeiert wird
        dateToRead = upcomingSollemnity(1);
        console.log('Verschiebung: Morgiges Hochfest wird heute gefeiert wegen Herz-Jesu-Fest');

    } else if (isSacredHeart === 2 && upcomingSollemnity(2)) {
        // Szenario: Heute ist Mittwoch vor Herz-Jesu-Fest,
        // übermorgen wäre ein Hochfest, das deshalb schon morgen gefeiert wird
        // und für das heute die 1. Vesper gebraucht wird
        nextDateToRead = upcomingSollemnity(2);
        console.log('Verschiebung: Heute 1. Vesper zum Hochfest, das morgen gefeiert wird wegen Herz-Jesu-Fest');
    }

    // Hole Stundendaten für den aktuellen und den morgigen Tag
    const todayData = getPrayerTexts(brevierData, personalData, todayDate, dateToRead);
    const tomorrowData = getPrayerTexts(brevierData, personalData, tomorrowDate, nextDateToRead);

    // Prüfe, ob erste Vesper benötigt wird
    const { season, dayOfWeek } = todayData;
    const rank_wt = todayData.rank.wt;
    const rank_date = todayData.rank.date;
    const swdCombined = todayData.swd.combined;
    const rankNextWt = tomorrowData.rank.wt;
    const rankNextDate = tomorrowData.rank.date;
    const nextSwdCombined = tomorrowData.swd.combined;

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
    };

    // Sichere Vesper-Daten für etwaige Nutzung bei lokalem Hochfest
    // vor der etwaigen Überschreibung durch eine Erste Vesper
    finalData.prefsollemnity = JSON.parse(JSON.stringify(finalData.vesper));

    // Ersetze Vesper-Daten wenn nötig
    if (hasErsteVesper_wt || hasErsteVesper_date) {
        finalData.vesper = JSON.parse(JSON.stringify(tomorrowData.erstev));
        finalData.vesper.prefComm = tomorrowData.prefComm;
        finalData.rank.hasErsteVesper = true;
        if (tomorrowData.laudes?.oblig?.com1?.button)
            finalData.vesper.commButton = tomorrowData.laudes.oblig.com1.button;
        if (hasErsteVesper_wt)
            finalData.vesper.wt.swdWritten = tomorrowData?.swdWritten;
        if (hasErsteVesper_date) {
            finalData.vesper.oblig.button = tomorrowData.erstev?.oblig?.button
            finalData.vesper.oblig.farbe = tomorrowData.laudes?.oblig?.farbe || 'w'
        };
    }

    // Wende die finalen Verarbeitungsschritte an
    processTerzPsalms(finalData);
    processAntABC(finalData, yearABC, swdCombined);
    if (todayInfo.season === 'o')
        processEasterResponses(finalData);

    const kompletSettings = processKompletData(finalData, dateToRead);
    finalData.komplet = {
        wt: finalData.komplet.wt,
        pers: finalData.komplet?.pers || {},
        ...kompletSettings
    }

    finalData.date = todayInfo.date;
    const { mmdd } = todayInfo.date;

    if (mmdd === '06-11') processBarnabas(finalData, todayInfo.season === 'o');

    if ([61, 66].includes(todayInfo?.aroundPentecost)) finalData.rank.aroundPentecost = 2

    const useFeastPsalms = (
        (rank_date > 2 || rank_wt > 2) // Hochfeste und Feste: Ps vom So der I. Woche
        // nicht am Sonntag
        // (außer Hochfeste der Heiligen und Christusfeste
        // sowie Pfingsten, Dreifaltigkeit, Fronleichnam und Christkönig),
        && !(dayOfWeek === 0 && rank_date < 4
            && !['o-8-0', 'j-34-0'].includes(swdCombined)
            && !todayInfo.aroundPentecost)
        // nicht an Aschermittwoch, Karwoche und Allerseelen
        && swdCombined !== 'q-0-3'
        && !swdCombined.startsWith('q-6-')
        && mmdd !== '11-02'
    ) || // Gedenktage mit Psalmen vom Fest:
        // Barnabas, Enthauptung Johannes des Täufers, Schmerzen Mariens, Schutzengel, U.L.Fr. vom Rosenkranz, Martin
        // für Agnes (21.1.) und Josef der Arbeiter (1.5.) in den Eigentexten eingetragen, da andere Optionen wählbar sind
        ['08-29', '09-15', '10-02', '10-07', '11-11'].includes(mmdd);
    if (useFeastPsalms) finalData.rank.useFeastPsalms = true;

    const useComplementaryPsalms =
        // Hochfeste mit Ergänzungspsalmodie
        [60, 64, 65].includes(todayInfo.aroundPentecost) // Dreifaltigkeitssonntag, Fronleichnam, Herz-Jesu-Fest
        || swdCombined === 'j-34-0' // Christkönigssonntag
        // sonstige Hochfeste im Kirchenjahr (rank_wt=5) haben eigene Psalmen
        || (rank_date === 5 && mmdd !== '12-25' && !todayInfo.aroundEpiphany) // Hochfeste außer Weihnachten und Epiphanie
        || (rank_date === 4 && dayOfWeek === 0) // Herrenfeste am Sonntag
    if (useComplementaryPsalms) finalData.rank.useComplementaryPsalms = true;

    // alternative Psalmen an Aschermittwoch (Laudes) und Gründonnerstag (Lesehore)
    if (swdCombined === 'q-0-3' || swdCombined === 'q-6-4')
        finalData.rank.useAlternativePsalms = true;

    // Anzeige im Hauptmenü: "Zweite Vesper" statt "Vesper"
    if (kompletSettings.prefKomplet === 'k2'
        && !['q-6-4', 'q-6-5', 'q-6-6', 'o-1-0'].includes(swdCombined))
        finalData.rank.hasZweiteVesper = true;

    // Invitatorium: verfügbare Psalmen zur Auswahl und bevorzugter Psalm
    const sequenceInv = JSON.parse(localStorage.getItem('sequenceInv'))
        || [95, 100, 24, 67, 67, 100, 24];
    let prefInv = sequenceInv[dayOfWeek];
    const invPsalms = processInvitatoriumPsalms(finalData, prefInv);
    if (!invPsalms.includes(prefInv)) prefInv = 95;
    finalData.invitatorium.psalms = invPsalms
    finalData.invitatorium.prefInv = prefInv;

    return finalData;
}