# BrevierDataProcessor.js – Dokumentation

**Datei:** `src/components/dataHandlers/BrevierDataProcessor.js`
**Exportiert:** `processBrevierData(todayDate)`
**Abhängigkeiten:** `LitCalendar.js`, `TableOfRanks.js`, `CalendarMerge.js`, `SourceSelector.js`,
diverse Datenbankmodule (`Brevier.ts`, `Lecture1.ts`, `Lecture2.ts`, `LectureABC.ts`, `Sollemnities.ts`)

---

## Überblick

`BrevierDataProcessor.js` ist die zentrale Verarbeitungskomponente des Breviers. Sie nimmt ein Datum entgegen und assembliert daraus ein vollständiges Datenobjekt mit allen Gebets- und Lesetexten für den Tag – gegliedert nach Horen und Quellen.

Die Verarbeitung folgt zwei übergeordneten Pfaden, die parallel und schichtweise zusammengeführt werden:

1. **Kirchenjahr-Pfad**: Texte nach Jahreszeit, Woche und Wochentag (Psalter, saisontypische Texte, Propriumstexte der einzelnen Wochen)
2. **Heiligenkalender-Pfad**: Texte nach Kalenderdatum (Heiligenfeste, Commune-Texte, Lesungen)

Welcher Pfad Vorrang hat, wird über das Rangsystem aus `LitCalendar.js` entschieden.

---

## Datenquellen

### Datenbanken

| Variable | Inhalt |
|----------|--------|
| `brevierData` | Hauptdatenbank: Psalter, Hymnen, Antiphonen, Kurzlesungen, Orationen nach Hore / Jahreszeit / Woche |
| `lecture1Data` | Schriftlesungen der Lesehore, Jahr I (ungerade Jahreszahlen) |
| `lecture2Data` | Schriftlesungen der Lesehore, Jahr II (gerade Jahreszahlen) |
| `lectureABCData` | Sonntagslesungen und Lesungen zu festen Kalendertagen nach Lesejahr A, B oder C |
| `sollemnitiesData` | Tageszeitunabhängige Grundtexte für Kirchweih und Verstorbene (in `Sollemnities.ts` ausgelagert, da diese Texte unabhängig vom Tag immer gleich sind) |
| `personalData` | Benutzerdefinierte Texte aus `localStorage` (Key `'personalData'`) |
| `getCalendarData()` | Kalendereinträge: Heiligenfeste nach Monat/Tag, diözesan zusammengeführt |

### Quell-Schlüssel (Sources) pro Hore

Jede Hore enthält ein Objekt mit Quell-Schlüsseln. Diese steuern, welche Feier im UI angezeigt oder ausgewählt wird:

| Schlüssel | Bedeutung |
|-----------|-----------|
| `wt` | Wochentag nach dem liturgischen Kalender (Kirchenjahr-Pfad) |
| `oblig` | Pflichtgedenktag oder Fest nach dem Heiligenkalender |
| `d1`, `d2` | Diözesane Eigenfeiern mit Vorrang vor dem Regionalkalender |
| `n1` … `n5` | Nichtgebotene Gedenktage  |
| `d11`, `d12` | Diözesane Eigenfeiern nach dem Regionalkalender |
| `mar` | Mariengedenktag am Samstag (fiktives Datum 13-06) |
| `pers` | Personalisierte Texte des Benutzers |

Die Reihenfolge der Schlüssel in `sourceKeys` bestimmt die Anzeigepriorität im `SourceSelector`.

 `n1` wird auch verwendet, wenn ein gebotener Gedenktag (eigentlich `oblig`) herabgestuft wird: beim Zusammentreffen mit einem gebotenen Gedenktag im Kirchenjahr ("Maria, Mutter der Kirche" am Pfingstmontag, Herz Mariae) und in der Fastenzeit (Kommemoration).
---

## Die Stundenstruktur

Das interne `hours`-Objekt enthält alle Horen des Tages:

| Schlüssel | Hore |
|-----------|------|
| `erstev` | Erste Vesper (Vorabendfeier des folgenden Festes) |
| `invitatorium` | Einladungspsalm |
| `lesehore` | Lesehore (Officium lectionis) |
| `vigil` | Vigil (Erweiterung der Lesehore) |
| `laudes` | Laudes (Morgengebet) |
| `terz` | Terz (kleine Hore um ca. 9 Uhr) |
| `sext` | Sext (kleine Hore um ca. 12 Uhr) |
| `non` | Non (kleine Hore um ca. 15 Uhr) |
| `vesper` | Vesper (Abendgebet) |
| `prefsollemnity` | Kopie der Vesper vor etwaiger Überschreibung durch Erste Vesper (kommt zum Einsatz, wenn ein Gedenktag lokal als Hochfest gefeiert wird) |
| `komplet` | Komplet (Nachtgebet) |
| `messe` | Messe |

Jede Hore enthält die oben beschriebenen Quell-Schlüssel als Unterobjekte (z. B. `hours.laudes.wt`, `hours.laudes.oblig`).

---

## Das Schichtsystem in `getPrayerTexts`

Die Funktion `getPrayerTexts(brevierData, personalData, date, calendarDate)` baut die Textdaten schichtweise auf. Jede spätere Schicht **überschreibt** gleichnamige Felder der früheren.

### `mergeData(hours, newData, source)`

Verteilt ein Datenobjekt auf die Horen:

- **`each`-Schlüssel**: wird auf alle Horen angewendet
- **`major`-Schlüssel**: wird auf `erstev`, `lesehore`, `laudes`, `vesper` angewendet
- **Stunden-Schlüssel** (z. B. `laudes`, `vesper`): wird nur auf die genannte Hore angewendet

In allen drei Durchläufen des forEach gilt die Bedingung `!field.startsWith(source)`: Felder, deren Name mit dem Quell-Schlüssel beginnt, werden nicht geschrieben.

**Hintergrund:** Die forEach-Schleifen legen beim ersten Schreiben die Source-Ebene im `hours`-Objekt an (`hours[hour][source] = {}`), falls sie noch nicht existiert. Hätte ein Dateneintrag zufällig denselben Namen wie der Quell-Schlüssel (z. B. ein Feld `'wt'` in Daten, die unter Source `'wt'` verarbeitet werden), würde dieses Feld als weiteres Unterobjekt `hours[hour]['wt']['wt']` eingetragen. Im nächsten Schleifendurchgang würde dort erneut eine Source-Ebene eingefügt – `hours[hour]['wt']['wt']['wt']` usw. –, was zu einer unbegrenzt tiefen Verschachtelung führt. Der Filter verhindert genau diesen Fall.

### `addLayer(source, week, dayOfWeek)`

Liest Daten aus bis zu vier Datenbanken gleichzeitig und mergt sie:

```
brevierData[source][week]['each']         → mergeData(..., 'wt')
brevierData[source][week][dayOfWeek]      → mergeData(..., 'wt')
personalData[source][week]['each']        → mergeData(..., 'pers')
personalData[source][week][dayOfWeek]     → mergeData(..., 'pers')
lecture1Data[source][week]['each']        → mergeData(..., 'wt')
lecture1Data[source][week][dayOfWeek]     → mergeData(..., 'wt')
lectureABCData[source][week]['each'].a    → mergeData(..., 'wt')
lectureABCData[source][week][dayOfWeek].a → mergeData(..., 'wt')
lectureABCData[source][week][...][yearBC] → mergeData(..., 'wt')  (falls nicht Jahr A)
```

### Schichtfolge

#### Schicht 0 – Grundtexte (quellenübergreifend)

Für die Quellen `wt` und `soll` aus `brevierData` (sowie `wt` aus `personalData`) werden je aufgelöst:
- `[source].each.each` und `[source].each[dayOfWeek]`
- bei gerader Woche zusätzlich `[source].even.each` und `[source].even[dayOfWeek]`
- `[source][season].each` und `[source][season][dayOfWeek]`

#### Schicht 1 – 4-Wochen-Psalter

```
addLayer('p', weekOfPsalter, dayOfWeek)       // Universalpsalter
addLayer('p' + season, weekOfPsalter, dayOfWeek)  // Saisonpsalter
addLayer('pvigil', week % 8 || 8, dayOfWeek)  // Vigilpsalter (8-Wochen-Zyklus)
```
Der Vierwochenpsalter ist das ganze Jahr über grundsätzlich gleich. Die Psalmen 78, 105 und 106 werden aber im Jahreskreis nicht gebetet und durch andere ersetzt (dafür 'pj'). In den anderen Jahreszeiten ('pa' und 'po') gibt es Anpassungen, wo der 1. Psalmvers gleich der Antiphon ist und deshalb in Klammern gesetzt wird, und bei den Laudes- und Vesper-Antiphonen in der Osterzeit.


#### Schicht 3 – Wochenschema der Jahreszeit

```
addLayer(season, 'each', dayOfWeek)           // gilt für jede Woche der Saison
addLayer(season, 'even', dayOfWeek)           // nur bei gerader Wochennummer
```

#### Schicht 5 – Konkrete Woche

```
addLayer(season, week, dayOfWeek)
```

#### Schicht 5.1 – „Last"-Schema

Gilt für letzte Adventstage (17.–24. Dez.), die Tage nach Erscheinung des Herrn bis zur Taufe Jesu und die Pfingstnovene (ab Do der 6. Osterwoche):
```
addLayer(season, 'last', dayOfWeek)
```

#### Schicht 5.2 – Kalendertage (17. Dez. bis Taufe des Herrn)

```
addLayer('w', 'okt', 'each')          // nur in der Weihnachtsoktav (26.–31. Dez.)
addLayer('k', calendarMonth, calendarDay)   // Texte nach Kalendertag
addLayer('kso', week, dayOfWeek)            // Sonntagsbehandlung in diesem Zeitraum
```
An den Sonntagen gibt es eine Überlagerung von Texten nach Kalendertag und solchen für den jeweiligen Sonntag.
---

## Heiligenfeste und Kalenderverarbeitung

### Welche Feier hat Vorrang?

Nach der Auswertung der Ränge aus `LitCalendar.js` entscheidet `getPrayerTexts`, welcher Weg eingeschlagen wird:

| Bedingung | Verarbeitung |
|-----------|-------------|
| `rank_date > 1 && rank_date > rank_wt` | Vollständige Feier des Heiligenfestes (`processCalendar`, Ziel: `'oblig'`) |
| `rank_date === 2 && isCommemoration` | Kommemoration des gebotenen Gedenktages (`processCalendar`, Ziel: `'n1'`) |
| `afterPentecost` gesetzt | Post-Pfingst-Fest unter fiktivem Monat 5 (`processCalendar`, Ziel: `'wt'`); ggf. zusätzlich Gedenktag als Kommemoration (`'n1'`) |
| `rank_wt < 3` (kein afterPentecost) | Nichtgebotener Gedenktag (`processCalendar`, Ziel: `'skip'`) |
| Samstag im Jahreskreis, kein Fest | Mariengedenktag, fiktives Datum 06-13 (`processCalendar`, Ziel: standard) |

### `processCalendar(hours, yearABC, season, month, day, replaceOblig)`

Lädt den Kalendereintrag für `[month][day]` und verteilt dessen Daten nach `sourceKeys`. Dabei wird der Schlüssel `oblig` auf den Parameter `replaceOblig` umgeleitet:
- `'oblig'` (Standard): volle Feier
- `'n1'`: Kommemoration
- `'skip'`: `oblig`-Daten werden nicht verarbeitet (nur die freien Gedenktage `n1`–`n5`)
- `'wt'`: Post-Pfingst-Feste, die im Kirchenjahr-Pfad eingetragen sind
  - Ausnahme: Pfingstmontag (41) und Herz Mariae (46) werden auch hier als `'oblig'` behandelt

Abschließend werden stets die Messlesungen per `processReadings` ergänzt.

### `processReadings(hours, yearABC, month, day)`

Lädt Messlesungen aus `lectureABCData.AAA[month][day]`:
- Lesejahr-A-Lesungen (immer)
- Lesejahr-B/C-Lesungen (falls nicht Jahr A)
- Diözesane Lesungen (falls vorhanden)

Alle Lesungen werden in die Quelle `'oblig'` eingetragen.

### `processCommune(hours, season, targetSource)`

Heiligenfeste verweisen über `comm_1`/`comm_2`-Felder auf eine Commune-Kategorie (z. B. `'Märt'` für Märtyrer). `processCommune` löst diese Referenz auf und lädt die Commune-Texte in ein Unterobjekt `com1`/`com2` der jeweiligen Stunde. Die Schichtung erfolgt in fünf Stufen:

```
each/each → comm/each → comm/season → each/addComm → comm/addComm
```

---

## Festverschiebungen

In `processBrevierData` kann die Variable `calendarDate` von `todayDate` abweichen. Sie gibt an, welches Kalender-Datum heute liturgisch gefeiert wird. Folgende Verschiebungen werden geprüft:

### Gestrige Hochfeste

**Bedingung:** Gestern hatten sowohl `rank_wt` als auch `rank_date` den Wert 5 (Hochfest in beiden Kalendersystemen), aber heute ist die liturgische Stellung niedriger – das Hochfest konnte gestern also nicht vollständig gefeiert werden.

**Ausnahme:** Am Samstag des Unbefleckten Herzens Mariae (`afterPentecost = 46`) findet keine Verschiebung statt.

**Ergebnis:** `calendarDate = yesterdayDate` – das gestrige Hochfest wird heute nachgefeiert.

*Typisches Beispiel:* Zwei Hochfeste am gleichen Tag; das zweite wird auf den Folgetag verschoben.

### Hl. Josef (19. März)

**Bedingung:** Heute ist der Samstag vor dem Palmsonntag (`q-5-6`) und der heutige Kalendertag liegt noch vor dem 19. März.

**Ergebnis:** `calendarDate` = 19. März des aktuellen Jahres.

*Hintergrund:* Der 19. März (Hl. Josef) würde in der Karwoche liegen, wenn Ostern früh fällt. Die Liturgie sieht vor, das Fest auf den Samstag vor dem Palmsonntag vorzuziehen.

### Verkündigung des Herrn (25. März)

**Bedingung:** Heute ist der Montag nach der Osteroktav (`o-2-1`) und der Kalendertag liegt im März oder vor dem 10. April.

**Ergebnis:** `calendarDate` = 25. März des aktuellen Jahres.

*Hintergrund:* Der 25. März fällt manchmal in die Karwoche oder die Osteroktav. Das Fest wird dann auf den ersten freien Werktag nach der Osteroktav verlegt.

### Herz-Jesu-Umgebung

Der Donnerstag und Mittwoch vor dem Herz-Jesu-Freitag erhalten `afterPentecost`-Sonderschlüssel (1 bzw. 2), die für Kollisionsfälle mit diözesanen Hochfesten genutzt werden:

- **`isSacredHeart = 1`** (Do vor Herz-Jesu): Wenn morgen (= Herz-Jesu-Freitag) ein diözesanes Hochfest liegt (`rank_date === 5`), wird dieses Hochfest auf heute vorgezogen.
  → `calendarDate = tomorrowDate`

- **`isSacredHeart = 2`** (Mi vor Herz-Jesu): Wenn übermorgen ein diözesanes Hochfest liegt, wird `nextDate` auf dieses Datum gesetzt, damit heute Abend die **Erste Vesper** für das vorgezogene Fest gefeiert werden kann.
  → `nextDate = dayAfterTomorrow`

---

## Nachbearbeitungsschritte

Nach der Assemblierung durch `getPrayerTexts` werden in `processBrevierData` mehrere Nachbearbeitungsfunktionen angewendet.

### `processTerzPsalms`

Psalmen, Antiphonen und patristische Texte der kleinen Horen (Terz, Sext, Non) sind in den Datenbanken in der Regel nur für die **Terz** hinterlegt. Diese Funktion kopiert die entsprechenden Felder in **Sext** und **Non**, sofern diese nicht bereits eigene Texte enthalten.

### `processAntABC`

An Sonntagen können die Benedictus-Antiphon (Laudes) und die Magnificat-Antiphon (Vesper/Erste Vesper) je nach Lesejahr unterschiedlich sein. Diese Funktion weist die Antiphon des aktuellen Lesejahres dem Feld `antev` zu.

**Sonderfall:** Am Samstag des Christkönigssonntags (`j-34-6`) wird für die Vesper bereits das Lesejahr des **folgenden** Kirchenjahres verwendet, da ab diesem Abend das neue Kirchenjahr beginnt.

### `processEasterResponses`

In der Osterzeit wird die Struktur der Responsorien in Laudes und Vesper angepasst: `resp1` und `resp2` werden zu einem einzigen `resp1` zusammengefasst; `resp2` wird fest auf „Halleluja, halleluja." gesetzt. Gilt für alle Quellen und Commune-Untereinträge.

### `processKompletData`

Bestimmt, welche Komplet-Formulare am Tag zur Auswahl stehen und welches die Vorauswahl ist:

| Situation | `showKompletWt` | `prefKomplet` |
|-----------|-----------------|---------------|
| Aschermittwoch, Mo–Mi der Karwoche | `true` | `'wt'` |
| Weihnachts- und Osteroktav | `false` | `'wt'` (= „Bitte wählen") |
| Hochfest (`rank_date > 4` oder `rank_wt = 5`) | `false` | `'k2'` |
| Nach Erster Vesper | `false` | `'k1'` |
| Sonntag | `false` | `'k2'` |
| Alle anderen Tage | `true` | `'wt'` |

### `processInvitatoriumPsalms`

Das Invitatorium kann aus den Psalmen 95, 100, 24 und 67 wählen, ergänzt um einen benutzerdefinierten Vorzugspsalm. Psalmen, die an diesem Tag bereits in anderen Horen vorkommen, werden aus der Auswahl ausgeschlossen. Ps 95 ist immer verfügbar. Das Ergebnis wird als Array `invitatorium.psalms` zurückgegeben.

---

## Erste-Vesper-Logik

Die Vesper des heutigen Tages wird durch die **Erste Vesper** des morgigen Festes ersetzt, wenn einer der beiden folgenden Tests zutrifft:

### `hasErsteVesper_wt` – Erste Vesper nach dem liturgischen Kalender

```
swdCombined === 'o-1-6'         // Sonderfall: Sa der Osteroktav hat immer Erste Vesper
|| (
  rank_wt < 5 && rank_date < 5  // heute kein Hochfest
  && (
    (dayOfWeek === 6 && rank_date < 4)  // Samstag ohne Fest oder Herrenfest
    || (rankNextWt === 5 && nextSwdCombined !== 'q-0-3')  // morgen liturgisches Hochfest
  )                                                        // (außer Aschermittwoch)
)
```

### `hasErsteVesper_date` – Erste Vesper nach dem Heiligenkalender

```
rankNextDate === 6              // Sonderfall: Weihnachten (Rang 6) übertrumpft 4. Advent
|| (
  rank_wt < 5 && rank_date < 5  // heute kein Hochfest
  && rankNextDate > rankNextWt   // morgiges Heiligenfest hat Vorrang über morgen
  && (
    rankNextDate === 5            // morgiges Hochfest
    || (rankNextDate === 4 && dayOfWeek === 6)  // Herrenfest am Sonntag
  )
)
```

### Umsetzung

Wenn `hasErsteVesper_wt` oder `hasErsteVesper_date` zutrifft:
- `finalData.vesper` wird durch `tomorrowData.erstev` ersetzt.
- `rank.hasErsteVesper = true` → `processKompletData` wählt `prefKomplet = 'k1'`.
- Bei `hasErsteVesper_wt`: der `swdWritten`-Text in der Vesper wird auf den morgigen Tag gesetzt.

Die heutige Vesper (vor der Überschreibung) ist als `prefsollemnity` gesichert – für den Fall, dass ein lokales Hochfest nachträglich doch die eigene Vesper braucht.

---

## Leseordnung (Lesejahr)

### Lesejahr I / II (Wochentage)

Die Schriftlesungen der Lesehore wechseln jährlich zwischen zwei Reihen:
- **Jahr I** (ungerade Jahreszahl): `lecture1Data` – immer geladen
- **Jahr II** (gerade Jahreszahl): `lecture2Data` – wird zusätzlich aufgelöst

### Sonntagslesejahr A / B / C

```js
yearABC = ['c', 'a', 'b'][lectureYear % 3]
```

Der Jahresanfang für das Lesejahr liegt im **Advent**: Ab dem 1. Adventssonntag wird `year + 1` für die Berechnung verwendet. Ebenso für Dezember außerhalb des Jahreskreises.

| `lectureYear % 3` | Lesejahr |
|-------------------|---------|
| 0 | C |
| 1 | A |
| 2 | B |

Das Lesejahr bestimmt unter anderem die Sonntagsevangelien, die Benedictus- und Magnificat-Antiphonen (`processAntABC`) und die Sonntagslesungen für Hochfeste (`processReadings`).

---

## Rückgabewert von `processBrevierData`

Das zurückgegebene Objekt enthält:

```js
{
  // Liturgische Kalenderinfos (aus getLiturgicalInfo)
  season, week, dayOfWeek,
  swdCombined,    // aus todayInfo (nicht aus getPrayerTexts)
  swdWritten,
  swd,

  // Leseordnung
  yearABC,        // 'a' | 'b' | 'c'

  // Ränge und Flags
  rank_wt, rank_date,
  rank: {
    wt, date,
    isCommemoration,
    hasVigil,
    hasErsteVesper,   // true wenn Erste Vesper aktiv
    hasZweiteVesper,  // true wenn Zweite Vesper (nach Komplet k2)
    nextWt,           // rank_wt des morgigen Tages
    nextDate,         // rank_date des morgigen Tages
    useFeastPsalms,   // Psalmen vom Sonntag der 1. Woche statt Wochentagspsalter
  },
  prefComm,           // 1 wenn Commune-Auswahl anzeigen, sonst 0
  dateCompare,        // "MM-TT"-String des heutigen Datums

  // Horen (je mit Quell-Unterstruktur)
  erstev, invitatorium, lesehore, vigil,
  laudes, terz, sext, non,
  vesper,             // ggf. durch Erste Vesper ersetzt
  prefsollemnity,     // Vesper-Kopie vor Überschreibung
  komplet: {
    wt, pers,
    showKompletWt,    // boolean
    prefKomplet,      // 'wt' | 'k1' | 'k2'
  },
  messe,

  // Invitatorium
  invitatorium: {
    ...,
    psalms,   // Array verfügbarer Psalm-Nummern
    prefInv,  // bevorzugter Psalm (aus localStorage sequenceInv)
  }
}
```

### `useFeastPsalms`

`true`, wenn an einem Fest oder Hochfest (das nicht Sonntag, Aschermittwoch oder Allerseelen ist) die Psalmen der Feste verwendet werden sollen, statt der regulären Wochentagspsalmen. Außerdem für eine Reihe namentlich festgelegter Gedenktage (z. B. 21.01., 11.08., 15.09.).

---

## Personalisierung

Beim Start wird aus `localStorage` geladen:
- **`diocese`** (Standard: `'Fulda'`): steuert den Diözesan-Kalender und diözesane Lesungen
- **`personalData`**: benutzerdefinierte Texte, die parallel zu `brevierData` in die `'pers'`-Quelle eingeflossen werden
- **`sequenceInv`**: Wochentags-Reihenfolge der bevorzugten Invitatoriumspsalmen (Standard: `[95, 100, 24, 67, 67, 100, 24]`)

Bei einem Ladefehler von `personalData` wird stillschweigend ein leeres Objekt verwendet.
