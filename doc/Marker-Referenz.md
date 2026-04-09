# Marker-Referenz – Steuerzeichen in den Rohdaten

Viele Textfelder der Datenbanken (`PsHymn.ts`, `Brevier.ts`, `Calendar.ts`,
`Lecture*.ts`, `Perikopen.ts`, `RufvdEv.ts`) enthalten Steuerzeichen, die mit
`^` eingeleitet werden. Sie steuern Formatierung, Textstruktur und liturgische
Besonderheiten. Die Auflösung erfolgt in `TextFormatter.js` (Funktion
`formatPrayerText`) sowie in `CantFormatter.js`.

---

## 1. Absatz- und Zeilenstruktur

Diese Marker stehen **am Anfang** eines Textabschnitts und bestimmen, wie der
Abschnitt gerendert wird.

| Marker | Bedeutung | typische Felder |
|--------|-----------|-----------------|
| `^p` | Normaler Absatz (Standard) | alle Textfelder |
| `^P` | Absatz mit großem Abstand oben (neuer Abschnitt) | `les_text`, `patr_text` |
| `^h` | Überschrift (fett, etwas kleiner) | `les_text`, `patr_text`, `oration` |
| `^q` | Fürbitte-Zeile (mit „–" eingeleitet; bei Fürbitten folgt optional eine Antwort) | `bitten`, `bitten_lat` |
| `^x` | Nebentext (grau, klein; für Screenreader ausgeblendet) | `les_text` |
| `^l` | Zeilenumbruch innerhalb eines Absatzes | alle Textfelder |

---

## 2. Psalm- und Gesangsstruktur

| Marker | Bedeutung | Felder |
|--------|-----------|--------|
| `^*` | Mittelkadenz (Asteriskus): trennt die beiden Hälften eines Psalmverses | `text`, `text_lat`, `text_neu`, `text_ben`, `text_cant` |
| `^+` | Flexa (Zäsur im ersten Halbvers, kurze melodische Senkung) | `text`, `text_lat`, `text_neu`, `text_ben`, `text_cant` |
| `^/` | Zeilenumbruch im Hymnus: auf breiten Bildschirmen Leerzeichen, auf schmalen echter Zeilenumbruch | `hymn`, `hymn_lat` |

---

## 3. Inline-Formatierung

Diese Marker **umschließen** den betroffenen Text: `^X…^0X`.

| Marker | Bedeutung | typische Felder |
|--------|-----------|-----------------|
| `^r…^0r` | Rubrik – liturgische Anweisung (in Gold als Rubrikenfarbe dargestellt) | alle |
| `^RUBR…^0RUBR` | Rubriken-Block (mehrzeilig, Rubrikenfarbe, kleinere Schrift) | `les_text`, `oration`, `text` |
| `^f…^0f` | Fettdruck | alle |
| `^k…^0k` | Kursivdruck | alle |
| `^w…^0w` | Sperrdruck (vergrößerter Buchstabenabstand) | `text`, `oration` |
| `^c…^0c` | Kapitälchen (small caps) – wird verwendet für Gottesnamen (HERR und EIN/EINE/EINER) | `text`, `oration` |
| `^v…^0v` | Versnummer (kleine Schrift, hochgestellt) | `text`, `les_text` |

---

## 4. Psalmodie-Annotation (ausschließlich `text_cant`)

Das Feld `text_cant` enthält die Singnotation für die Psalmodie. Es ergänzt
den Psalmtext um Marker für Betonungen und Silbengrenzen. Detaillierte
Regeln: `doc/text_cant-Workflow.md`.

| Marker | Bedeutung |
|--------|-----------|
| `\|` | Nebenbetonung (einfacher Taktstrich) |
| `\|\|` | Hauptbetonung (doppelter Taktstrich) |
| `1` – `4` | Countdown-Marker: Silbenposition rückwärts von `\|\|` (2 = zweitletzte Silbe vor der Hauptbetonung usw.) |
| `0` | Silbengrenze innerhalb eines Worts, die nicht schon durch einen anderen Marker erkennbar ist |
| `~` | Silbenklammerung: zwei Silben werden auf einem Ton gesungen (wo die üblichen Regeln überspielt werden sollen)|
Folgende Marker werden nur intern in formatCantMarker erzeugt und wieder aufgelöst:
| `^b…^0b` | Bogenklammer (verbindet Silben, die auf denselben Ton gesungen werden) |
| `^u…^0u` | Unterstreichung (kennzeichnet den Kadenzbeginn) |

---

## 5. Saisonale Marker

Diese Marker werden je nach liturgischer Jahreszeit vom Formatter eingefügt
oder entfernt.

| Marker | Osterzeit | Fastenzeit / sonst | Felder |
|--------|-----------|-------------------|--------|
| `^ö` | → „ Halleluja." wird in der Fastenzeit ausgelassen  | `text`, `ant*` |
| `^Ö` | → „ Halleluja" wird nur in der Osterzeit eingefügt  | `text` |
| `^Lö` | → „ Allelúia." (lat.) wird in der Fastenzeit ausgelassen | `text_lat`, `ant_lat` |
| `^LÖ` | → „ Allelúia" (lat.) wird nur in der Osterzeit eingefügt | `text_lat` |

---

## 6. Liturgische Textbausteine

| Marker | Wird ersetzt durch / Bedeutung | Felder |
|--------|-------------------------------|--------|
| `^ANT` | Rubrik „Ant.  " | `text`, `oration` |
| `^KV` | Rubrik „ – (Kv)" | `text` |
| `^RESP` | Fügt dt. Responsorium-Antiphon ein | `les_text` |
| `^LRESP` | Fügt lat. Responsorium-Antiphon ein | `les_text_lat` |
| `^ORR` | Orationsschluss Er-Form (dt.) | `oration` |
| `^ORvR` | Orationsschluss Du-Form (dt.) | `oration` |
| `^ORl…` | Orationsschluss (lat., verschiedene Endungen) | `oration_lat` |
| `^ODER` | Trennmarker für alternative Texte | `text`, `oration`, `Text` |
| `^SPRICHT` | „So spricht der Herr:" (Evangeliumsruf) | `Text` (RufvdEv) |
| `^SPRGOTT` | „So spricht Gott, der Herr:" (Evangeliumsruf) | `Text` (RufvdEv) |
| `^HULDKL` | „denn seine Huld währt ewig" (Ps.-Refrain, dt., Kleinschreibung) | `text` |
| `^HULDGR` | „Denn seine Huld währt ewig" (Ps.-Refrain, dt., Großschreibung) | `text` |
| `^HULDlat` | „quóniam in sǽculum misericórdia eius" (lat.) | `text_lat` |
| `^HULDaet` | „quóniam in ætérnum misericórdia eius" (lat.) | `text_lat` |

---

## 7. Personennamen-Platzhalter

Diese Marker werden zur Laufzeit durch den Namen des Tagesheiligen bzw. den
amtierenden Papst/Bischof ersetzt.

| Marker | Bedeutung | Felder |
|--------|-----------|--------|
| `^NOM` | Heiligenname (Nominativ) | `text`, `hymn` |
| `^GEN` | Heiligenname (Genitiv) | `text` |
| `^VOK` | Heiligenname (Vokativ) | `text`, `hymn` |
| `^NP` | Papstname | `text` |
| `^NB` | Bischofname | `text` |
| `^NdatB`, `^NakkB`, `^NablB` | Heiligenname (lat.; Dativ, Akkusativ, Ablativ) | `text_lat` |

---

## 8. Sonstige Notation

| Zeichen | Bedeutung | Felder |
|---------|-----------|--------|
| `°` | Geschütztes Leerzeichen (non-breaking space) – verhindert unerwünschten Zeilenumbruch innerhalb einer Wortgruppe | alle |
| `{N#Text}` | Fußnote: `N` = Fußnotennummer (1–2 Ziffern), `Text` = Fußnoteninhalt | `les_text`, `patr_text` |
| `>Vokal` | Elision: ein auslautender Vokal entfällt vor dem anlautenden Vokal der folgenden Silbe und wird deshalb grau-kursiv dargestellt | `text`, `hymn` |

---

## 9. Feldübersicht

### Psalmtext-Felder
`text` · `text_lat` · `text_neu` · `text_ben`

Marker: `^p` `^l` `^*` `^+` `^x` · `^r…^0r` `^f…^0f` `^k…^0k` `^c…^0c` `^v…^0v` · `^ö` `^Ö` `^Lö` `^LÖ` · `^ANT` `^KV` · `^HULDKL` `^HULDGR` `^HULDlat` `^HULDaet` · `°`

### Psalmodie-Annotationsfeld
`text_cant`

Zusätzlich zu den Psalmtext-Feldern: `\|` `\|\|` `0`–`4` `~` `+e` `-e` `'e` `[+...]` `[-...]`

### Hymnus-Felder
`hymn1` bis `hymn3` · `hymn1_lat` bis `hymn3_lat` · `hymn1_kl` · `hymn_nacht`

Marker: `^p` `^l` `^/` `^ß` · `^r…^0r` `^f…^0f` `^k…^0k` · `^ö` `^Ö` `^Lö` `^LÖ` · `°` `>Vokal`

### Oration-Felder
`oration` · `oration_lat`

Marker: `^p` `^l` · `^r…^0r` `^RUBR…^0RUBR` · `^ANT` `^ODER` · `^ORV` `^ORR` `^ORvR`  `^ORS` `^ORl…` · `^NOM` `^GEN` `^VOK` · `°`

### Lesungsfelder (Brevier-Lesung und Väterlesung)
`les_text` · `les_text_lat` · `les_text_neu` · `patr_text`

Marker: `^p` `^P` `^h` `^x` `^l` · `^r…^0r` `^RUBR…^0RUBR` `^f…^0f` `^k…^0k` `^v…^0v` · `^RESP` `^LRESP` · `{N#Text}` · `°`

### Antiphon-Felder
`ant0` · `ant1` · `ant2` · `ant3` · `antev` · `antNN_lat`

Marker: `^p` `^l` · `^r…^0r` `^f…^0f` · `^ö` `^Ö` `^Lö` · `°`

### Fürbitten-Felder
`bitten` · `bitten_lat`

Marker: `^p` `^q` · `°`

### Evangeliumsruf
`Text` (in `RufvdEv.ts`)

Marker: `^l` · `^SPRICHT` `^SPRGOTT` `^ODER`
