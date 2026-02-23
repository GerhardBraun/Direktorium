# Optimierung des Datentransfers – Planungsdokument

## Ausgangslage

Die App wird als PWA über GitHub Pages bereitgestellt. Beim ersten Aufruf werden alle
Komponenten inklusive der Datenbanken (~13 MB) auf das Endgerät des Nutzers geladen.

### Datenbankgrößen und Verwendung (unkomprimiert)

| Datei | Größe | Importiert in |
|---|---|---|
| Lecture1.ts | 3,3 MB | BrevierDataProcessor |
| Lecture2.ts | 3,0 MB | BrevierDataProcessor |
| Calendar.ts | 2,3 MB | CalendarMerge (→ BrevierDataProcessor) |
| PsHymn.ts | 1,7 MB | TextFormatter, HymnSelector |
| Brevier.ts | 1,5 MB | BrevierDataProcessor |
| LectureABC.ts | 1,0 MB | BrevierDataProcessor |
| Direktorium.ts | 0,7 MB | Direktorium (App-Einstieg) |
| Perikopen.ts | 0,4 MB | LectureSelector |
| Deceased.ts | 0,3 MB | Direktorium (App-Einstieg) |
| LectureAlternatives.ts | 0,3 MB | LectureSelector |
| Sollemnities.ts | 0,06 MB | BrevierDataProcessor, GetValue |
| RufvdEv.ts | 0,03 MB | MassReadings |
| **Gesamt** | **~14,5 MB** | |

---

## Wie der ServiceWorker aktuell funktioniert

Der ServiceWorker in `public/service-worker.js` unterscheidet zwei Strategien:

- **Network-First**: Ressource wird immer aus dem Netz geholt; Cache dient als Offline-Fallback.
- **Cache-First**: Ressource wird aus dem Cache bedient, wenn vorhanden; nur bei Cache-Miss wird das Netz genutzt.

**Wichtig:** Das `dataUrls`-Array enthält als letzten Eintrag `'/'`. Da jede HTTP-URL
einen `/` enthält, greift die Network-First-Strategie faktisch für **alle** Ressourcen.
Cache-First wird nie erreicht.

**Praktische Folge:**
- Datenbankänderungen (auch kleine Korrekturen) sind beim nächsten Online-Besuch
  **sofort** für alle Nutzer sichtbar – kein Upgrade nötig.
- Der Cache dient ausschließlich als Offline-Fallback.
- Der Datentransfer pro Besuch ist durch das HTTP-Caching des Browsers begrenzt:
  unveränderte Dateien werden mit `304 Not Modified` beantwortet (kein echter Download).

### Update vs. Upgrade

| Aktion | Was passiert | Korrekturen sichtbar? |
|---|---|---|
| **Update** (nur Push auf GitHub, kein Versionswechsel) | App wird neu gebaut, Nutzer erhalten Änderungen beim nächsten Online-Besuch | ja |
| **Upgrade** (Versionsnummer erhöht) | Alter Cache wird gelöscht, ServiceWorker neu installiert | ja (plus Bereinigung) |

Das Upgrade ist vor allem für die Bereinigung veralteter Cache-Einträge und die
Aktualisierung des ServiceWorkers selbst wichtig, nicht primär für die Datensynchronisation.

---

## Geplante Optimierung: Datenbanken als JSON-Dateien

### Ziel

Die großen Datenbankdateien aus dem JavaScript-Bundle herauslösen und als eigenständige
JSON-Dateien in `public/data/` bereitstellen. Die React-App lädt sie zur Laufzeit per
`fetch()` statt sie beim Start gebündelt zu empfangen.

**Vorteil:** Der Erstdownload sinkt von ~13 MB auf wenige hundert KB (UI-Code).
Einzelne Datenbankdateien können unabhängig voneinander mit unterschiedlichen
Cache-Strategien verwaltet werden.

### Übergangsstrategie

Konverter schreibt **parallel** `.ts`-Dateien (App läuft unverändert) und `.json`-Dateien
(Vorbereitung für die App-Umstellung). So kann die App-Umstellung in Ruhe entwickelt
und getestet werden.

### Konverter-Änderungen (bereits umgesetzt)

In `excel-liturgical-converter/converter.py`:

1. **Neue Ausgabepfade** (JSON nach `public/data/`):
   ```python
   BREVIER_JSON     = r"...\public\data\brevier.json"
   PSALMS_JSON      = r"...\public\data\pshymn.json"
   LECTURE1_JSON    = r"...\public\data\lecture1.json"
   LECTURE2_JSON    = r"...\public\data\lecture2.json"
   LECTURE_ABC_JSON = r"...\public\data\lectureABC.json"
   CALENDAR_JSON    = r"...\public\data\calendar.json"
   ```

2. **Neue Hilfsfunktion** `generate_json_file(data, output_path)` – schreibt ein
   Python-Dict direkt als JSON.

3. **Parallele Aufrufe** in Mode 1 (Vollständige Brevier-Datenbank) und den
   Einzelmodi 11 (Lecture1), 12 (Lecture2), 13 (LectureABC): nach jedem
   `generate_*_typescript_file()`-Aufruf folgt ein `generate_json_file()`-Aufruf
   mit denselben Daten.

---

## Ausstehende App-Umstellung

Die Umstellung umfasst drei eng zusammenhängende Bereinigungsschritte, die sinnvollerweise
**in einem Zug** durchgeführt werden.

### Schritt 1: `BrevierDataProcessor.js` – Statische Imports ersetzen

Aktuell (Zeilen 12–19):
```js
import { brevierData }    from '../data/Brevier.ts';
import { lecture1Data }   from '../data/Lecture1.ts';
import { lecture2Data }   from '../data/Lecture2.ts';
import { lectureABCData } from '../data/LectureABC.ts';
import { sollemnitiesData } from '../data/Sollemnities.ts';  // klein, kann gebündelt bleiben
import { getCalendarData } from '../data/CalendarMerge.js'; // entfällt (siehe Schritt 3)
```

Zukünftig: alle großen Datenbanken per `Promise.all` am Beginn von `processBrevierData`
laden; Funktion wird `async`:

```js
export async function processBrevierData(todayDate) {
    const [brevierData, lecture1Data, lecture2Data, lectureABCData,
           psalmsData, calendarData,
           perikopen, lectureAlternatives] = await Promise.all([
        fetch('/data/brevier.json').then(r => r.json()),
        fetch('/data/lecture1.json').then(r => r.json()),
        fetch('/data/lecture2.json').then(r => r.json()),
        fetch('/data/lectureABC.json').then(r => r.json()),
        fetch('/data/pshymn.json').then(r => r.json()),
        fetch('/data/calendar.json').then(r => r.json()),
        fetch('/data/perikopen.json').then(r => r.json()),
        fetch('/data/lectureAlternatives.json').then(r => r.json()),
    ]);
    // ... Rest der Funktion unverändert (alle Hilfsfunktionen bleiben synchron)
}
```

Mit `Promise.all` werden alle acht Datenbanken **parallel** geladen – die Ladezeit
entspricht der der größten Datei, nicht der Summe aller.

### Schritt 2: Referenzauflösungen in den BrevierDataProcessor vorziehen

Drei Datenbanken werden aktuell nicht in BrevierDataProcessor, sondern in
UI-Komponenten zur Laufzeit zur Referenzauflösung verwendet:

| Datenbank | Verwendet in | Zweck |
|---|---|---|
| `PsHymn.ts` | TextFormatter, HymnSelector | numerische IDs → Psalm-/Hymnentext |
| `Perikopen.ts` | LectureSelector | Lesungsreferenzen → vollständige Perikopen |
| `LectureAlternatives.ts` | LectureSelector | Alternativen zu Schriftlesungen |

Das Muster ist in allen drei Fällen dasselbe: BrevierDataProcessor übergibt im
`texts`-Objekt nur IDs oder Kurzreferenzen; die Auflösung zum vollständigen Text
geschieht erst im Renderer.

**Lösung:** Alle drei Datenbanken in Schritt 1 mit in den `Promise.all` aufnehmen
und die Auflösung in BrevierDataProcessor vorzeihen – analog zu `cleanupZeroReferences`,
die diese Felder bereits kennt.

**Psalm- und Hymnen-IDs** (`psalm1`, `psalm2`, `psalm3`, `hymn_1` usw. – numerische
IDs wie `95.003` = Psalm 95, Abschnitt 3):
```js
// Vorher im texts-Objekt:
texts.laudes.wt.psalm1 = 95.003

// Nachher:
texts.laudes.wt.psalm1 = { number: 95, verses: [...], text: "...", ... }
```

**Perikopen und Lesungsalternativen:** Analog – Kurzreferenzen in `les_stelle`/
`patr_werk` werden zu vollständigen Textobjekten aufgelöst.

**Folge:** Der Datenbankimport entfällt in drei Komponenten:
- `TextFormatter.js`: `resolveReference()` vereinfacht sich zu direktem Feldzugriff
- `HymnSelector.js`: `resolveHymnReference()` vereinfacht sich ebenso
- `LectureSelector.js`: `resolvePerikopen()` entfällt, Daten liegen bereits aufgelöst vor

### Schritt 3: `CalendarMerge.js` entfernen

`CalendarMerge.js` wurde in einer Übergangsphase entwickelt, als der Regionalkalender
(AAA) von den Diözesaneigenfeiern getrennt wurde. Die Funktion `getCalendarData()`
führt einen Merge durch, der konzeptionell identisch mit dem Schichtsystem des
BrevierDataProcessors ist – nur vorab für den gesamten Kalender statt tagesaktuell.

Das Modul wird **ausschließlich** in `BrevierDataProcessor.js` verwendet.
Die `allowedOverlaps`- und `checkedReferences`-Sets dienten der Entwicklungsverifikation;
diese Prüflogik ist inzwischen in den Python-Konverter gewandert.

**Lösung:** Die Merge-Logik inline in `processCalendar` integrieren. `calendarData`
wird als Parameter übergeben (es liegt nach Schritt 1 bereits als geladenes Objekt vor):

```js
// Statt: const processData = getCalendarData()?.[calendarMonth]?.[calendarDay]
const diocese = localStorage.getItem('diocese') || 'Fulda';
const dayDataAAA     = calendarData.AAA?.[calendarMonth]?.[calendarDay];
const dayDataDiocese = calendarData[diocese]?.[calendarMonth]?.[calendarDay];

// diocesaner oblig-Eintrag ersetzt alles; sonst: AAA als Basis, Diözese darüber
const processData = dayDataDiocese?.oblig
    ? dayDataDiocese
    : { ...dayDataAAA, ...dayDataDiocese };
```

**Optionale Vereinfachung im Konverter:** `CalendarMerge.js` enthält auch eine
`getReferenceData()`-Funktion: Manche Diözesaneinträge verweisen per `Laudes.referenz`
auf einen anderen Kalendereintrag als Datenbasis. Diese Referenzauflösung könnte in den
Python-Konverter verschoben werden, sodass `calendar.json` bereits vollständig aufgelöste
Daten enthält und die Laufzeit-Logik entfällt.

### Schritt 4: Aufrufstelle in `Direktorium.js` (Zeile 1247)

`processBrevierData` wird **genau einmal** aufgerufen, in einem `useEffect`:
```js
// Vorher:
useEffect(() => {
    const processedData = processBrevierData(selectedDate);
    setTexts(processedData);
}, [...]);

// Nachher:
useEffect(() => {
    processBrevierData(selectedDate).then(processedData => {
        setTexts(processedData);
        console.log("neue Texte:", processedData);
    });
}, [...]);
```

Da der Aufruf bereits in einem `useEffect` liegt, ist die Anpassung unkompliziert –
keine Komponenten-Render-Logik ist betroffen.

### Schritt 5: ServiceWorker – Präzise Strategien per URL

Der bisherige `'/'`-Eintrag in `dataUrls` macht faktisch alles Network-First.
Nach der Umstellung kann präzise gesteuert werden:

```js
// Häufig aktualisiert → Network-First (immer frisch aus dem Netz)
const networkFirst = ['/data/brevier.json', '/data/calendar.json',
                      '/data/lecture2.json', '/data/pshymn.json'];
// Selten geändert → Cache-First (kein Netzwerk-Round-Trip)
const cacheFirst   = ['/data/lecture1.json', '/data/lectureABC.json',
                      '/data/perikopen.json', '/data/lectureAlternatives.json'];
```

`Perikopen.ts` und `LectureAlternatives.ts` sind stabile Referenzdatenbanken
(biblische Texte und Lesungsalternativen), die sich kaum ändern → Cache-First sinnvoll.

### Schritt 6: Aufräumen

Nach erfolgreichen Tests:
- `.ts`-Datenbankdateien aus `src/components/data/` entfernen:
  Brevier, Lecture1, Lecture2, LectureABC, PsHymn, Calendar, Perikopen, LectureAlternatives
- `CalendarMerge.js` entfernen
- Parallele JSON-Ausgabe im Konverter als alleinige Ausgabe belassen
  (`.ts`-Ausgabe für diese Dateien abschalten)
- `Perikopen.ts` und `LectureAlternatives.ts` einmalig in JSON konvertieren:
  Da beide Dateien manuell gepflegt werden (kein Excel-Konverter) und reines
  JavaScript ohne TypeScript-Typen enthalten, genügt eine einmalige Extraktion
  des Objektliterals. Dafür wurde **Modus 15** im Konverter ergänzt:
  ```
  python converter.py -m 15
  ```
  Erzeugt: `perikopen.json`, `lectureAlternatives.json`, `namesOfBooks.json`
  (`LectureAlternatives.ts` enthält zwei Exports).
  Danach werden direkt die `.json`-Dateien in `public/data/` bearbeitet;
  die `.ts`-Dateien entfallen vollständig.

---

## Nicht umzustellende Dateien

Folgende Dateien bleiben gebündelt (klein, selten geändert, oder kein klarer Gewinn):

| Datei | Begründung |
|---|---|
| `Sollemnities.ts` (64 KB) | Klein, in zwei Dateien genutzt; Umstellung lohnt nicht |
| `RufvdEv.ts` (32 KB) | Sehr klein |
| `Direktorium.ts` (0,7 MB) | App-Einstieg, wird immer benötigt |
| `Deceased.ts` (0,3 MB) | App-Einstieg |

---

## Gesamtaufwand

| Schritt | Bereich | Aufwand |
|---|---|---|
| 1 | `BrevierDataProcessor.js`: 8 Imports → `Promise.all` mit Fetches | gering |
| 2 | Referenzauflösung vorziehen; TextFormatter, HymnSelector, LectureSelector vereinfachen | mittel |
| 3 | `CalendarMerge.js`: Merge-Logik inline in `processCalendar` | gering |
| 3 opt. | Kalender-Referenzauflösung in Python-Konverter verlagern | mittel |
| 4 | `Direktorium.js`: eine Aufrufstelle anpassen | sehr gering |
| 5 | ServiceWorker anpassen | gering |
| 6 | `converter.py -m 15` ausführen; Dateien aufräumen | gering |

**Gesamteinschätzung:** Überschaubarer Aufwand, kein tiefes Cascading durch den
Komponentenbaum. Die Schritte 1–4 bilden einen zusammenhängenden Kern; Schritt 5
(ServiceWorker) und Schritt 6 (Aufräumen) können nachgelagert erfolgen.
Die JSON-Migration, der CalendarMerge-Bereinigungsschritt und die Zusammenführung
der Referenzauflösungen fallen natürlich zusammen – alles in einem Zug ist
effizienter als mehrere getrennte Umstellungen.
