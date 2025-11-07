/**
 * Direktorium-Konverter
 * Konvertiert Daten aus einer Excel-Arbeitsmappe in eine TypeScript-Datenbankdatei
 * für die Verwendung in der Direktorium-App.
 *
 * Strukturiert nach dem Muster: Input → Verarbeitung → Output
 */

const ExcelJS = require('exceljs');
const fs = require('fs-extra');
const path = require('path');
const { getLiturgicalInfo } = require('./src/components/dataHandlers/LitCalendar.js'); // Pfad anpassen je nach Projektstruktur
const readline = require('readline');

// Konstanten
const EXCEL_PATH = "C:/Users/Gerhard Braun/OneDrive - Bistum-FD/0_Allgemeines/05_Dioezese/059_Sonstiges/Direktorium/Direktorium_dev.xlsm";
const OUTPUT_PATH = "./src/data/Direktorium_dev.ts"; // Pfad anpassen je nach Projektstruktur
const TEMP_EXCEL_PATH = "./temp_direktorium.xlsx";
const WORKSHEETS = {
  LITYEAR: 'Kj',
  CALENDAR: 'Kal',
  DECEASED: 'Verstorbene',
  REFERENCES: 'Verweise',
  MONTH: 'Monat'
};

// Interface-Definition für die Ausgabedatei
const TS_INTERFACE = `
interface LiturgicalEntry {
  notes?: string[];
  application?: boolean;
  entry?: string;
  entry_supplement?: string;
  office?: string;
  d1?: LiturgicalEntry;
  d2?: LiturgicalEntry;
  n1?: LiturgicalEntry;
  n2?: LiturgicalEntry;
  c?: LiturgicalEntry;
  mar?: LiturgicalEntry;
  color?: string;
  mass?: string;
  alternative?: LiturgicalEntry;
  evening?: string;
  deceased?: string[];
  vigil?: LiturgicalEntry;
}

interface LiturgicalData {
  [diocese: string]: {
    [year: string]: {
      [month: string]: {
        [day: string]: LiturgicalEntry;
      };
    };
  };
}

export const liturgicalData: LiturgicalData =
`;

// Hilfsfunktion: Erstellt ein Konsolen-Interface für Benutzereingaben
function createInterface() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
}

// Hilfsfunktion: Ermittelt den Zeitraum basierend auf Benutzerparametern oder -eingaben
async function determineTimeRange(args) {
  // Entwicklungsmodus: 1. Januar bis 7. Februar
  if (args.includes('dev')) {
    return {
      start: new Date(new Date().getFullYear(), 0, 1),
      end: new Date(new Date().getFullYear(), 1, 7)
    };
  }

  // Jahr oder Zeitraum aus Argumenten extrahieren
  const yearArg = args.find(arg => /^\d{4}$/.test(arg) || /^\d{4}-\d{4}$/.test(arg));
  const dateRangeArg = args.find(arg => /^\d{1,2}\.\d{1,2}\.\d{2,4}-\d{1,2}\.\d{1,2}\.\d{2,4}$/.test(arg));

  if (yearArg) {
    if (yearArg.includes('-')) {
      const [startYear, endYear] = yearArg.split('-').map(Number);
      return {
        start: new Date(startYear, 0, 1),
        end: new Date(endYear, 11, 31)
      };
    } else {
      const year = Number(yearArg);
      return {
        start: new Date(year, 0, 1),
        end: new Date(year, 11, 31)
      };
    }
  }

  if (dateRangeArg) {
    const [startDateStr, endDateStr] = dateRangeArg.split('-');
    const parseDate = (dateStr) => {
      const [day, month, yearStr] = dateStr.split('.');
      const year = yearStr.length === 2 ? 2000 + Number(yearStr) : Number(yearStr);
      return new Date(year, Number(month) - 1, Number(day));
    };

    return {
      start: parseDate(startDateStr),
      end: parseDate(endDateStr)
    };
  }

  // Keine Argumente: Benutzer nach Eingabe fragen
  const rl = createInterface();

  return new Promise((resolve) => {
    rl.question('Bitte geben Sie einen Zeitraum ein (JJJJ, JJJJ-JJJJ oder TT.MM.JJ-TT.MM.JJ): ', (answer) => {
      rl.close();

      if (/^\d{4}$/.test(answer)) {
        const year = Number(answer);
        resolve({
          start: new Date(year, 0, 1),
          end: new Date(year, 11, 31)
        });
      } else if (/^\d{4}-\d{4}$/.test(answer)) {
        const [startYear, endYear] = answer.split('-').map(Number);
        resolve({
          start: new Date(startYear, 0, 1),
          end: new Date(endYear, 11, 31)
        });
      } else if (/^\d{1,2}\.\d{1,2}\.\d{2,4}-\d{1,2}\.\d{1,2}\.\d{2,4}$/.test(answer)) {
        const [startDateStr, endDateStr] = answer.split('-');
        const parseDate = (dateStr) => {
          const [day, month, yearStr] = dateStr.split('.');
          const year = yearStr.length === 2 ? 2000 + Number(yearStr) : Number(yearStr);
          return new Date(year, Number(month) - 1, Number(day));
        };

        resolve({
          start: parseDate(startDateStr),
          end: parseDate(endDateStr)
        });
      } else {
        console.log('Ungültige Eingabe. Verwende das aktuelle Jahr.');
        const currentYear = new Date().getFullYear();
        resolve({
          start: new Date(currentYear, 0, 1),
          end: new Date(currentYear, 11, 31)
        });
      }
    });
  });
}

// Hilfsfunktion: Kopiert die Excel-Datei in ein temporäres Verzeichnis
async function createTempExcelCopy() {
  try {
    await fs.copyFile(EXCEL_PATH, TEMP_EXCEL_PATH);
    console.log('Temporäre Kopie der Excel-Datei erstellt.');
    return TEMP_EXCEL_PATH;
  } catch (error) {
    console.error('Fehler beim Erstellen der temporären Excel-Kopie:', error);
    throw error;
  }
}

// Hilfsfunktion: Löscht die temporäre Excel-Datei
async function cleanupTempExcel() {
  try {
    await fs.remove(TEMP_EXCEL_PATH);
    console.log('Temporäre Excel-Datei bereinigt.');
  } catch (error) {
    console.error('Fehler beim Löschen der temporären Excel-Datei:', error);
  }
}

// ===== INPUT-PHASE =====

/**
 * Erstellt ein Mapping der Spaltennamen zu Spaltennummern
 */
function createColumnMapping(worksheet) {
  const columnMapping = {};
  let headerRow;

  worksheet.eachRow((row, rowNumber) => {
    if (!headerRow) {
      headerRow = rowNumber;
      row.eachCell((cell, colNumber) => {
        if (cell.value) {
          columnMapping[cell.value.toString().trim()] = colNumber;
        }
      });
    }
  });

  return { columnMapping, headerRow };
}

// Generische Funktion zum Auslesen bestimmter Spalten aus einer Excel-Zeile
function readColumns(row, columnMapping, columnsToRead) {
  const result = {};

  columnsToRead.forEach(columnName => {
    if (columnMapping[columnName]) {
      const cellValue = row.getCell(columnMapping[columnName]).value;
      result[columnName] = cellValue !== null && cellValue !== undefined
        ? String(cellValue).trim()
        : '';
    }
  });

  return result;
}

function findCalendarEntries(month, day) {
  const worksheet = workbook.getWorksheet(WORKSHEETS.CALENDAR);
  const { columnMapping, headerRow } = createColumnMapping(worksheet);
  const dateToCompare = new Date(2000, month - 1, day); // Jahr 2000 als Platzhalter

  const entries = [];

  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber <= headerRow) return; // Überspringe Header-Zeilen

    const rowDate = row.getCell(columnMapping['Datum']).value;

    if (rowDate instanceof Date && rowDate === dateToCompare) {
      // Lese gewünschte Spalten
      const { source, Titel, Offizium } = readColumns(row, columnMapping, ['source', 'Titel', 'Offizium']);

      if (!entries[source]) {
        entries[source] = {}
      };

      entries[source].push({
        Titel,
        Offizium,
      });
    }
  });

  return entries;
}
// Findet Einträge für Verstorbene für ein bestimmtes Datum
function findDeceasedEntries(month, day) {
  const worksheet = workbook.getWorksheet(WORKSHEETS.DECEASED);
  const { columnMapping, headerRow } = createColumnMapping(worksheet);

  const entries = [];

  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber <= headerRow) return;

    const dateOfDeath = row.getCell(columnMapping['Sterbetag']).value;

    // Prüfe, ob dateOfDeath gültig und vor heute liegt
    if (dateOfDeath && dateOfDeath instanceof Date && dateOfDeath <= currentDate) {
      const monthOfDeath = dateOfDeath.getMonth() + 1;
      const dayOfDeath = dateOfDeath.getDate();

      // Prüfe, ob Tag und Monat übereinstimmen
      if (monthOfDeath === month && dayOfDeath === day) {
        // Lese gewünschte Spalten
        const data = readColumns(row, columnMapping, ['App_Name', 'App_Grab', 'App_Geburt', 'Alter']);

        entries.push({
          year: dateOfDeath.getFullYear(),
          name: data.App_Name || '',
          birth: data.App_Geburt || '',
          grave: data.App_Grab || '',
          age: data.Alter || 0
        });
      }
    }
  });

  return entries;
}

function findLitYearEntries(swdCombined) {
  const worksheet = workbook.getWorksheet(WORKSHEETS.LITYEAR);
  const { columnMapping, headerRow } = createColumnMapping(worksheet);

  let result = null;

  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber <= headerRow) return;

    const key = row.getCell(columnMapping['Kürzel']).value;

    if (key === swdCombined) {
      // Liest gewünschte Spalten
      result = readColumns(row, columnMapping, ['proposal']);
    }
  });

  return result;
}

// Berechnet zusätzliche Informationen für einen Tag
function calculateDayInfo(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = date.getDay(); // 0=Sonntag, 1=Montag, ...

  // Ermittle ofMonth (z.B. 2. Dienstag im Monat)
  const ofMonth = Math.ceil(day / 7);

  // Ermittle ofMonthLast (z.B. vorletzter Dienstag im Monat)
  const lastDayOfMonth = new Date(year, month, 0).getDate();
  const daysRemaining = lastDayOfMonth - day;
  const ofMonthLast = -Math.floor(daysRemaining / 7) - 1;

  // Ermittle isFirstFriday
  let isFirstFriday = 0;
  if (dayOfWeek > 3) { // Nur für Do, Fr, Sa relevant
    const dayOffset = 5 - dayOfWeek; // Folgetag für Do, Vortag für Sa
    const dayToCheck = new Date(year, month - 1, day + dayOffset);
    if (dayToCheck.getDate() < 8)
      isFirstFriday = dayOfWeek;
  }

  return { ofMonth, ofMonthLast, isFirstFriday };
}

/**
 * Liest die Rohdaten aus Excel und anderen Quellen
 */
async function readRawData(excelPath, timeRange) {
  try {
    console.log(`Lese Excel-Datei von: ${excelPath}`);
    console.log(`Verarbeite Zeitraum: ${timeRange.start.toLocaleDateString()} bis ${timeRange.end.toLocaleDateString()}`);

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(excelPath);

    // Erstelle Excel-Daten-Array
    const rawData = [];

    // Iteriere über den Zeitraum
    const currentDate = new Date(timeRange.start);
    while (currentDate <= timeRange.end) {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const day = currentDate.getDate();

      // Liturgische Grundinformationen
      const liturgicalInfo = getLiturgicalInfo(currentDate);

      // Informationen für den nächsten Tag
      const nextDay = new Date(currentDate);
      nextDay.setDate(nextDay.getDate() + 1);
      const nextDayInfo = getLiturgicalInfo(nextDay);

      // Zusätzliche Berechnungen
      const { ofMonth, ofMonthLast, isFirstFriday } = calculateDayInfo(currentDate);

      // Spezifisches Auslesen pro Worksheet
      const litYearEntries = findLitYearEntries(liturgicalInfo.swdCombined);
      const calendarEntries = findCalendarEntries(month, day);
      const deceasedEntries = findDeceasedEntries(month, day);


      // Füge alle Rohinformationen in ein Objekt
      rawData.push({
        date: new Date(currentDate),
        year, month, day,
        liturgicalInfo, nextDayInfo,
        ofMonth, ofMonthLast, isFirstFriday,
        litYearEntries,
        calendarEntries,
        deceasedEntries
      });

      // Inkrementiere das Datum
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return rawData;
  } catch (error) {
    console.error('Fehler beim Einlesen der Rohdaten:', error);
    throw error;
  }
}

// ===== VERARBEITUNGS-PHASE =====

/**
 * Bestimmt den Messtext basierend auf liturgischen Parametern
 */
function getMassEntry(liturgicalParams) {
  const { season, dayOfWeek, rank_wt, rank_date } = liturgicalParams;

  let baseEntry = "¥fMs¥0f nach Wahl";
  let proposal = "";
  let oration = "";
  let gloria = "";
  let credo = "";
  let intercessions = "";
  let preface = "";
  let canon = "";
  let blessing = "";
  let dismissal = "";

  // Bestimmung des Grundeintrags
  if (season === 'q') {
    baseEntry = "¥fMs eig¥0f";
    preface = ",°FastPräf";
  }
  else if (season === 'o') {
    baseEntry = "¥fMs vom Tag¥0f";
    preface = ",°OsterPräf";
  }

  if ((rank_wt > 2 && !['a', 'q'].includes(season)) || rank_date > 2)
    // an Sonntagen (außer Advent und Fastenzeit) und Festen
    gloria = ", Gl";

  if (dayOfWeek === 0 || rank_wt > 4 || rank_date === 5)
    // an Sonntagen und Hochfesten
    credo = ",°Cr";

  return baseEntry + proposal + oration + gloria + credo + intercessions + preface + canon + blessing + dismissal;
}

/**
 * Bestimmt die liturgische Farbe
 */
function getColor(liturgicalInfo) {
  const { season, dayOfWeek, rank_date, swdCombined, afterPentecost } = liturgicalInfo;
  if (['q-6-0', 'q-6-5', 'o-8-0'].includes(swdCombined)
    || afterPentecost === 41)
    return 'r'
  if (['a-3-0', 'q-4-0'].includes(swdCombined))
    return 'v/ros'

  if (['a', 'q'].includes(season)) {
    return 'v'; // Violett
  } else if (['w', 'o'].includes(season)) {
    return 'w'; // Weiß
  } else if (season === 'j') {
    return dayOfWeek ? '(g)' : 'g'; // Grün im Jahreskreis
  }
  return 'g'; // Fallback: Grün
}

/**
 * Verarbeitet die Rohdaten zu strukturierten liturgischen Einträgen
 */
function processLiturgicalData(rawData) {
  return rawData.map(dayData => {
    // Extrahiere benötigte Konstanten für die Verarbeitung
    const { date, year, month, day, liturgicalInfo, nextDayInfo, dayInfo, calendarEntries, deceasedEntries } = dayData;
    const { season, week, dayOfWeek, rank_wt, rank_date } = liturgicalInfo;
    const { season: nextSeason, rank_wt: nextRankWt, rank_date: nextRankDate } = nextDayInfo;
    const { ofMonth, ofMonthLast, isFirstFriday } = dayInfo;

    // Erstelle Standardeintrag
    let entry = season === 'j'
      ? `Vom Wochentag – ${week}. Woche im Jahreskreis`
      : '';
    let office = '';
    const notes = [];

    // Überschreibe mit Daten aus Excel, wenn vorhanden
    const mainEntry = calendarEntries.find(e => e.source === 'main');
    if (mainEntry) {
      entry = mainEntry.title || entry;
      office = mainEntry.office || office;
    }

    // Berechne weitere Felder
    const mass = getMassEntry(liturgicalInfo);
    const color = getColor(liturgicalInfo);

    // Verarbeite source-spezifische Einträge (d1, d2, n1, n2, c, mar)
    const sources = {};
    ['d1', 'd2', 'n1', 'n2', 'c', 'mar'].forEach(source => {
      const sourceEntry = calendarEntries.find(e => e.source === source);
      if (sourceEntry) {
        sources[source] = {
          entry: sourceEntry.title || '',
          office: sourceEntry.office || '',
          // Weitere Felder können hier berechnet werden
        };
      }
    });

    // Erstelle verstorbene-Einträge, falls vorhanden
    let deceased = '';
    if (deceasedEntries.length > 0) {
      // Verarbeite Verstorbene
      deceased = deceasedEntries.map(e => e.text).join('\n');
    }

    // Erstelle vollständigen, verarbeiteten Eintrag
    return {
      entry,
      office,
      notes,
      color,
      mass,
      deceased,
      ...sources,
      ...alternativEntry, // Falls ein Alternativ-Eintrag vorhanden ist
      ...vigilEntry // Falls ein Vigil-Eintrag vorhanden ist
    };
  });
}

// ===== OUTPUT-PHASE =====

/**
 * Formatiert die verarbeiteten Daten in die gewünschte Ausgabestruktur
 */
function formatLiturgicalData(processedData, rawData) {
  // Erstelle die gewünschte Struktur für die TypeScript-Datei
  const liturgicalData = {
    'Fulda': {} // Standard-Diözese, könnte auch parametrisiert werden
  };

  // Fülle die Struktur mit den verarbeiteten Daten
  processedData.forEach((dayEntry, index) => {
    const { year, month, day } = rawData[index];

    // Erstelle Jahres- und Monatsstruktur, falls nicht vorhanden
    if (!liturgicalData['Fulda'][year]) {
      liturgicalData['Fulda'][year] = {};
    }
    if (!liturgicalData['Fulda'][year][month]) {
      liturgicalData['Fulda'][year][month] = {};
    }

    // Füge Tageseintrag hinzu
    liturgicalData['Fulda'][year][month][day] = dayEntry;
  });

  return liturgicalData;
}

/**
 * Generiert die TypeScript-Datei
 */
async function generateTypeScriptFile(liturgicalData, outputPath) {
  try {
    const tsContent = `${TS_INTERFACE}${JSON.stringify(liturgicalData, null, 2)};`;

    // Erstelle den Ausgabepfad, falls er nicht existiert
    await fs.ensureDir(path.dirname(outputPath));

    // Schreibe die Datei
    await fs.writeFile(outputPath, tsContent);

    console.log(`TypeScript-Datei erfolgreich generiert: ${outputPath}`);
  } catch (error) {
    console.error('Fehler beim Generieren der TypeScript-Datei:', error);
    throw error;
  }
}

/**
 * Hauptfunktion für die Verarbeitung der Excel-Daten
 * nach dem Muster: Input → Verarbeitung → Output
 */
async function processrawData(excelPath, timeRange) {
  try {
    console.log('===== INPUT-PHASE =====');
    // 1. INPUT-PHASE: Daten einlesen
    const rawData = await readRawData(excelPath, timeRange);

    console.log('===== VERARBEITUNGS-PHASE =====');
    // 2. VERARBEITUNGS-PHASE: Daten verarbeiten und anreichern
    const processedData = processLiturgicalData(rawData);

    console.log('===== OUTPUT-PHASE =====');
    // 3. OUTPUT-PHASE: Daten in das gewünschte Format bringen
    const liturgicalData = formatLiturgicalData(processedData, rawData);

    return liturgicalData;
  } catch (error) {
    console.error('Fehler bei der Verarbeitung der Excel-Datei:', error);
    throw error;
  }
}

// Hauptprogramm
async function main() {
  try {
    // Verarbeite Kommandozeilenargumente
    const args = process.argv.slice(2);

    // Bestimme den Zeitraum basierend auf den Argumenten oder Benutzereingaben
    const timeRange = await determineTimeRange(args);

    // Erstelle eine temporäre Kopie der Excel-Datei
    const tempExcelPath = await createTempExcelCopy();

    // Verarbeite die Excel-Daten
    const liturgicalData = await processrawData(tempExcelPath, timeRange);

    // Generiere die TypeScript-Datei
    await generateTypeScriptFile(liturgicalData, OUTPUT_PATH);

    // Bereinige die temporäre Excel-Datei
    await cleanupTempExcel();

    console.log('Konvertierung erfolgreich abgeschlossen!');
  } catch (error) {
    console.error('Fehler bei der Konvertierung:', error);
    process.exit(1);
  }
}

// Starte das Programm
main();