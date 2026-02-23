# LitCalendar.js – Dokumentation

**Datei:** `src/components/dataHandlers/LitCalendar.js`
**Abhängigkeit:** `src/components/data/TableOfRanks.js`
**Exportiert:** `getLiturgicalInfo(date)`

---

## Überblick

`LitCalendar.js` ist das Herzstück der liturgischen Kalenderlogik. Die Funktion `getLiturgicalInfo(date)` nimmt ein JavaScript-`Date`-Objekt entgegen und gibt ein Objekt zurück, das alle liturgischen Eigenschaften dieses Tages beschreibt: Jahreszeit, Woche, Wochentag, lesbaren Namen, Rang und Vigil-Information.

---

## Rückgabewert von `getLiturgicalInfo`

```js
{
  season,          // Jahreszeitkürzel: 'a' | 'w' | 'j' | 'q' | 'o'
  week,            // Wochennummer in der jeweiligen Jahreszeit
  dayOfWeek,       // Wochentag (0 = Sonntag … 6 = Samstag, UTC)
  weekOfPsalter,   // Psalter-Woche (1–4, zyklisch)
  swdCombined,     // Kürzel "{season}-{week}-{dayOfWeek}", z. B. "o-3-0"
  swdWritten,      // Lesbarer Name des Tages, z. B. "3. Sonntag der Osterzeit"
  swd: { combined, written }, // redundant, beide Formen gebündelt
  rank_wt,         // Rang des Wochentags (0–5, s. u.)
  rank_date,       // Rang des Kalenderfelds (0–6, s. u.)
  hasVigil,        // boolean – ob dieser Tag eine Vigil (Erweiterung der Lesehore) hat
  afterPentecost,  // null oder Sonderschlüssel: 40–46 (letzte Ziffer = Wochentag) oder 1–2 (Tage vor Herz-Jesu)
  isCommemoration, // boolean – ob ein Heiligenfest nur als Kommemoration gilt
}
```

---

## Die liturgischen Jahreszeiten

| Kürzel | Name | Zeitraum |
|--------|------|----------|
| `a` | Advent | 1. Adventssonntag bis 24. Dezember |
| `w` | Weihnachtszeit | 25. Dezember bis Taufe des Herrn |
| `j` | Jahreskreis | nach Taufe Jesu bis Di vor Aschermittwoch / nach Pfingsten bis Advent |
| `q` | Fastenzeit | Aschermittwoch bis Karsamstag |
| `o` | Osterzeit | Ostersonntag bis Pfingstsonntag |

### Regelwerk der Saisoneinteilung (in `getLiturgicalInfo`)

Die Zuordnung erfolgt durch sequentielle Abfrage der wichtigsten Ankerdaten:

1. **Weihnachtszeit** (`w`): Ab dem Weihnachtssonntag (erster Sonntag nach/am 25. Dez. des Vorjahres) bis zur Taufe Jesu.
2. **Taufe Jesu** (`j`, Woche 1): Sonntag nach dem 6. Januar.
3. **Jahreskreis I** (`j`): Von der Taufe Jesu bis Di vor Aschermittwoch (= 4 Tage vor dem 1. Fastensonntag).
4. **"nullte" Fastenwoche** (`q`, Woche 0): Aschermittwoch bis zum ersten Fastensonntag. Die Woche heißt „Woche 0", da die Tage noch vor dem 1. Fastensonntag liegen.
5. **Fastenzeit** (`q`): 1. Fastensonntag (= 6 Wochen vor Ostern) bis Karsamstag.
6. **Osterzeit** (`o`): Ostersonntag bis Pfingstsonntag (= 49 Tage nach Ostern).
7. **Jahreskreis II** (`j`): Nach Pfingsten bis zum Beginn des Advents. Die Wochennummer wird rückwärts vom Advent berechnet, sodass der letzte Sonntag vor dem Advent stets Woche 34 (Christkönigssonntag) ist.
8. **Advent** (`a`): Vier Wochen vor Weihnachten.
   Sonderregel: Fallen Tage der 4. Adventswoche auf den 25. Dezember oder später, werden sie bereits `w` (Weihnachtszeit, Woche 0) zugeordnet.

---

## Berechnung des Osterdatums

Das Osterdatum wird mit dem **Meeus/Jones/Butcher-Algorithmus** exakt für jedes gregorianische Jahr berechnet. Das Ergebnis ist ein UTC-normiertes `Date`-Objekt. Von Ostern aus werden alle beweglichen Feste abgeleitet:

| Fest | Berechnung |
|------|-----------|
| Aschermittwoch | Ostern − 46 Tage (= − 42 Tage bis 1. Fastensonntag − 4 Wochentage) |
| 1. Fastensonntag | Ostern − 42 Tage |
| Christi Himmelfahrt | Ostern + 39 Tage (= `o-6-4`, Donnerstag der 6. Osterwoche) |
| Pfingsten | Ostern + 49 Tage |
| Dreifaltigkeitssonntag | Pfingsten + 7 Tage (`afterPentecost = 40`) |
| Fronleichnam | Dreifaltigkeitssonntag + 4 Tage (`afterPentecost = 44`) |
| Herz-Jesu-Fest | Fronleichnam + 8 Tage (`afterPentecost = 45`) |
| Unbeflecktes Herz Mariae | Herz-Jesu-Fest + 1 Tag (`afterPentecost = 46`) |

---

## `afterPentecost` – Feste nach Pfingsten im Jahreskreis

Fünf Feste und Gedenktage nach Pfingsten orientieren sich noch am Osterdatum, liegen aber bereits in der Zeit im Jahreskreis (`season = 'j'`). Sie können deshalb nicht mit einem eindeutigen `swdCombined`-Kürzel bezeichnet werden.

Stattdessen werden sie mit einem **fiktiven Datum ab dem „40. Mai"** belegt. Die letzte Ziffer dieses Schlüssels entspricht dem **Wochentag** (0 = Sonntag, 1 = Montag, …) – intuitiver als der bloße Abstand zum Osterfest:

| `afterPentecost` | Wochentag (letzte Ziffer) | Fest |
|-----------------|--------------------------|------|
| `40` | Sonntag (0) | Dreifaltigkeitssonntag |
| `41` | Montag (1) | Pfingstmontag |
| `44` | Donnerstag (4) | Fronleichnam |
| `45` | Freitag (5) | Herz-Jesu-Fest |
| `46` | Samstag (6) | Unbeflecktes Herz Mariae |

Die beiden Tage unmittelbar vor Herz-Jesu (Mittwoch und Donnerstag) erhalten Sonderschlüssel außerhalb des 40er-Bereichs (`afterPentecost = 2` bzw. `1`), die genutzt werden, falls das Herz-Jesu-Fest mit einem anderen Hochfest zusammentrifft und eine Verschiebung nötig ist (siehe BrevierDataProcessor).

---

## Die `swdCombined`-Notation

Der Schlüssel `"{season}-{week}-{dayOfWeek}"` identifiziert jeden Tag der liturgischen Jahreszyklus eindeutig, zusätzlich zum Kalenderdatum trägt. Beispiele:

| `swdCombined` | Bedeutung |
|--------------|-----------|
| `a-1-0` | 1. Adventssonntag |
| `q-0-3` | Aschermittwoch (Woche 0, Mittwoch = 3) |
| `q-6-0` | Palmsonntag |
| `q-6-4` | Gründonnerstag |
| `q-6-5` | Karfreitag |
| `o-1-0` | Ostersonntag |
| `o-6-4` | Christi Himmelfahrt |
| `o-8-0` | Pfingstsonntag |
| `j-34-0` | Christkönigssonntag |

---

## Spezielle Festtage und ihre Vorrangregel

Die Funktion `writeOut` ermittelt den lesbaren Tagesnamen. Dabei gilt folgende Priorität:

1. **`afterPentecost`-Schlüssel**: Pfingstmontag, Dreifaltigkeitssonntag, Fronleichnam, Herz-Jesu-Fest, Gedenktag Herz Mariae.
2. **`swdCombined`-Schlüssel**: Feste der Heiligen Familie, Taufe Jesu, Palmsonntag, Kar- und Ostertage.
3. **Aschermittwochswoche** (`q`, Woche 0): Aschermittwoch selbst und die folgenden Wochentage „nach Aschermittwoch".
4. **Feste mit festem Datum** in der Weihnachtszeit: Weihnachten (25.12.), Neujahr (1.1.), Weihnachtsoktav.
5. **Karwoche** (`q-6-*`): alle Tage als „Wochentag der Karwoche".
6. **Osteroktav** (`o-1-*`): alle Tage als „Wochentag der Osteroktav".
7. Sonntage: Formatierung je nach Jahreszeit (z. B. „3. Fastensonntag").
8. Alle anderen Wochentage: „Montag der 3. Fastenwoche" usw.

---

## Das Rangsystem

Der Rang bestimmt im Zusammenspiel der beiden Kalendersysteme, ob eine Feier nach dem liturgischen Kalender (swd) oder eine Feier nach dem Heiligenkalender (MM-TT) Vorrang hat.

### Rangskala

| Rang | Bedeutung |
|------|-----------|
| 6 | Sonderrang: nur Weihnachten (25.12.) – sichert der 1. Vesper Vorrang vor dem 4. Advent, falls Weihnachten auf einen Montag fällt |
| 5 | Hochfest (Sollemnitas) |
| 4 | Fest des Herrn (Festum Domini) |
| 3 | Fest (Festum) |
| 2 | Gebotener Gedenktag (Memoria obligatoria) |
| (1) | ursprünglich für nichtgebotene Gedenktage vorgesehen – nicht genutzt |
| 0 | Feria / nichtgebotener Gedenktag |

Die Komponente berechnet **zwei unabhängige Ränge** pro Tag:

### `rank_wt` – Rang des Tages nach dem liturgischen Kalender

Regeln (in absteigender Priorität):

1. **Pfingstmontag** (`afterPentecost = 41`) und **Unbeflecktes Herz Mariae** (`afterPentecost = 46`): Rang 2 (Gebotener Gedenktag). Dreifaltigkeitssonntag (40), Fronleichnam (44) und Herz-Jesu-Fest (45) hingegen erhalten Rang 5 (Hochfest).
2. **Sonntage im Jahreskreis** (außer Christkönigssonntag, `j-34-0`) und **Sonntage der Weihnachtszeit**: Rang 3.
3. **Alle anderen Sonntage** (Advent, Fastenzeit, Osterzeit): Rang 5.
4. **Karwoche** (`q-6-*`) und **Osteroktav** (`o-1-*`): Rang 5.
5. **Aschermittwoch** (`q-0-3`) und **Christi Himmelfahrt** (`o-6-4`): Rang 5.
6. **Wochentage der Fastenzeit** (`q`): Rang 2.
7. **Weihnachtsoktav** (26.–31. Dezember): Rang 2.4 *(Sonderrang, liegt zwischen 2 und 3)*.
8. **Letzte Adventstage** (17.–24. Dezember) und allgemeine Weihnachtszeit: Rang 2.
9. **Alle anderen Tage**: Rang 0.

### `rank_date` – Rang des Tages nach dem Heiligenkalender (aus `TableOfRanks.js`)

Die Datei `TableOfRanks.js` enthält eine Liste aller Heiligenfeste mit ihrem jeweiligen Rang. Die Suche erfolgt von Rang 6 bis 2. Zuerst wird die diözesane Tabelle geprüft (Standard: `Fulda`), dann die allgemeine:

```
für Rang in [6, 5, 4, 3, 2]:
    wenn tableOfRanks[diözese][rang] enthält "MM-TT" → return rang
für Rang in [6, 5, 4, 3, 2]:
    wenn tableOfRanks[rang] enthält "MM-TT" → return rang
return 0
```

Kein Eintrag → Rang 0 (freier Wochentag oder nichtgebotener Gedenktag Gedenktag).

---

## Vigil-Logik (`hasVigil`)

Eine **Vigil** (Erweiterung der Lesehore) gibt es nur an Festen und Hochfesten.

Regeln:
- Weder `rank_wt` noch `rank_date` erreicht Rang 3 → keine Vigil.
- **Aschermittwoch**: trotz Rang 5 keine Vigil.
- **Karwoche** (`q-6-*`): Vigil nur für Palmsonntag, Karfreitag und Karsamstag. Montag bis Donnerstag der Karwoche haben keine Vigil.
  *(Berechnung: `(dayOfWeek + 2) % 7 > 2` schließt Mo–Do aus.)*
- **Osteroktav** (`o-1-*`): keine Vigil – die Vigil des Ostersonntags hat eine eigene Struktur (→ `MatutinDisplay.js`).

---

## Psalterwochen-Berechnung (`weekOfPsalter`)

Das Stundengebet folgt einem **4-Wochen-Psalter**. Die Psalter-Woche wird zyklisch aus der Wochennummer der jeweiligen Jahreszeit berechnet:

```
weekOfPsalter = week % 4 || 4   // Ergebnis: 1, 2, 3 oder 4
```

Ausnahme: Am Fest der **Taufe Jesu** (erster Tag des Jahreskreises) wird die Psalter-Woche nicht aus `week = 1` berechnet, sondern aus der laufenden Woche seit Weihnachten gezählt: Das Fest gilt zwar als 1. Sonntag im Jahreskreis, gehört aber noch zur Weihnachtszeit.

---

## Kommemoration (`isCommemoration`)

Ein Heiligengedenktag mit `rank_date < 3` (also gebotener oder nichtgebotener Gedenktag, Rang 0 oder 2) wird zur **Kommemoration**, wenn der Tag in einer liturgisch bevorzugten Zeit liegt:
```
isCommemoration = rank_date < 3 && (season === 'q' || (Monat 12 && Tag > 16))
```
Das betrifft Wochentage der Fastenzeit, die letzten Adventstage und die Tage der Weihnachtsoktav.

---
Kommemoration bedeutet, dass der Heiligengedenktag die Feier des Wochentages nicht verdrängt, sondern die Texte des Gedenktages zusätzlich am Ende der Horen genommen werden können.

## Diözesan-Kalender

Die Diözese wird beim Start aus `localStorage` gelesen (Standard: `'Fulda'`). `TableOfRanks.js` enthält unter dem Schlüssel des Diözesannamens eine Liste von Heiligen, die lokal einen höheren Rang erhalten oder nur lokal gefeiert werden.

Aktuell enthält die Tabelle Einträge für **Fulda**:
- **Rang 5**: 5. Juni (Bonifatius, Hauptpatron des Bistums)
- **Rang 3**: u. a. 14. August (Weihetag der Kathedrale), 28. September, 19. November
- **Rang 2**: 27. April, 17. August

---

## Zusammenspiel der Komponenten

```
getLiturgicalInfo(date)
│
├─ calculateEaster(year)          → Osterdatum (Meeus/Jones/Butcher)
├─ getNextSunday(date)            → Taufe Jesu, Weihnachtssonntag
│
├─ Saisoneinteilung               → season, week
├─ writeOut(...)                  → swdWritten (lesbare Bezeichnung)
│
├─ calculateRanks(...)
│   ├─ calculateRankWt()          → rank_wt (Stellung im Kirchenjahr)
│   ├─ calculateRankDate()        → rank_date (TableOfRanks)
│   └─ calculateHasVigil()        → hasVigil
│
└─ weekOfPsalter, isCommemoration
```

---

## Verwendung

```js
import { getLiturgicalInfo } from './dataHandlers/LitCalendar.js';

const info = getLiturgicalInfo(new Date(2025, 3, 20)); // Ostersonntag 2025
// info.season       → 'o'
// info.week         → 1
// info.swdCombined  → 'o-1-0'
// info.swdWritten   → 'Ostersonntag'
// info.rank_wt      → 5
// info.hasVigil     → false  (Osteroktav: eigene Vigil-Struktur)
```
