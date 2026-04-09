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
| `^p` | normaler Absatz (Standard) | Lesungs-, Psalmen- und Hymnenfelder, einzelne `antEv`-Felder |
| `^l` | Zeilenumbruch innerhalb eines Absatzes | Lesungs-, Psalmen- und Hymnenfelder, Orationen, einzelne `antEv`-Felder |
| `^h` | Überschrift (fett, etwas kleiner) | `les_text`, `patr_text`, `ms_ev_text` (nur Passionen) |
| `^q` | Fürbitte-Zeile (mit „–" eingeleitet) | `bitten`, `bitten_lat` |
| `^x` | ausgelassene Psalmverse im Münsterschwarzacher Psalter (grau, kleiner) | `text_ben` |
| `^P` | in Antwortpsalmen: Absatz mit größerem Abstand oben (neuer Abschnitt) | `Antwortpsalm-Textfelder` |

---

## 2. Psalm- und Gesangsstruktur

| Marker | Bedeutung | Felder |
|--------|-----------|--------|
| `^*` | Mittelkadenz (Asteriskus): trennt die beiden Hälften eines Psalmverses | `Psalmtext- und Antwortpsalmtext-Felder` |
| `^+` | Flexa (Zäsur im ersten Halbvers, kurze melodische Senkung) | `Psalmtext- und Antwortpsalmtext-Felder` |
| `^/` | Zeilenumbruch im Hymnus: auf breiten Bildschirmen Leerzeichen, auf schmalen echter Zeilenumbruch | `Hymnentext-Felder dt./lat.` |
| `^ß` | wie `^/`, aber mit zusätzlichem Einzug | `patr_text` |

---

## 3. Inline-Formatierung

Diese Marker **umschließen** den betroffenen Text: `^X…^0X`.

| Marker | Bedeutung | typische Felder |
|--------|-----------|-----------------|
| `^r…^0r` | Rubrik – liturgische Anweisung (in Gold als Rubrikenfarbe dargestellt) | `ms_aps_kv`, `ms_aps_text`, einzelne Orationen, `antev`, Bitten|
| `^RUBR…^0RUBR` | Rubriken-Block (mehrzeilig, Rubrikenfarbe, kleinere Schrift) | Lesungs-, Psalmen-, Hymnentexte, Orationen, Bitten, `antev` |
| `^v…^0v` | Versnummer (kleine Schrift, hochgestellt) | einzelne Hymnentitel, einmal `patr_werk` |
| `^w…^0w` | Sperrdruck (vergrößerter Buchstabenabstand); Sonderfall: EIN, EINE, EINER usw. | Lesungs- und Hymnentexte |
| `^c…^0c` | Kapitälchen (small caps) – wird nur intern verwendet für Gottesnamen (HERR, HERRN) | `text`, `oration` |

Für besondere Formatierung erkannt werden folgende Worte in Großbuchstaben:
| HERR, HERRN | Gottesname in Kapitälichen
| EIN, EINE, EINER, EINEN, EINEM | als betonte Zahlwörter (nicht bloß unbestimmte Artikel) in Sperrdruck

Nur im Direktorium werden verwendet:
| `^f…^0f` | Fettdruck | alle |
| `^k…^0k` | Kursivdruck | alle |
| `^c…^0c` | Kapitälchen (small caps) – wird verwendet für Gottesnamen (HERR und EIN/EINE/EINER) | `text`, `oration` |

---

## 4. Psalmodie-Annotation (ausschließlich `text_cant`)

Das Feld `text_cant` enthält die Singnotation für die Psalmodie. Es ergänzt den Psalmtext um Marker für Betonungen und Silbengrenzen. Detaillierte Regeln: `doc/text_cant-Workflow.md`.

| Marker | Bedeutung |
|--------|-----------|
| `\|` | Nebenbetonung (einfacher Taktstrich) |
| `\|\|` | Hauptbetonung (doppelter Taktstrich) |
| `1` – `4` | Countdown-Marker: Silbenposition rückwärts von `\|\|` (2 = zweitletzte Silbe vor der Hauptbetonung usw.) |
| `0` | Silbengrenze innerhalb eines Worts, die nicht schon durch einen anderen Marker erkennbar ist |
| `~` | Silbenklammerung: zwei Silben werden auf einem Ton gesungen (wo die üblichen Regeln überspielt werden sollen)|
| `+e`, `-e`, `'e` | zusätzliches, wegfallendes bzw. durch ’ ersetztes `e` zur leichteren Singbarkeit des Psalmverses | `text_cant` |
| `[+...]`, `[-...]` | hinzugefügte oder wegfallende Zeichen zur leichteren Singbarkeit des Psalmverses | `text_cant` |

Folgende Marker werden nur intern in formatCantMarker erzeugt und wieder aufgelöst:
| `^b…^0b` | Bogenklammer (verbindet Silben, die auf denselben Ton gesungen werden) |
| `^u…^0u` | Unterstreichung (kennzeichnet den Kadenzbeginn) |

---

## 5. Saisonale Marker

Diese Marker werden je nach liturgischer Jahreszeit vom Formatter eingefügt oder entfernt.

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
Folgende Marker werden in Abhängigkeit von der Jahreszeit bzw. von der Hore aufgelöst.
| `^RESP` | Fügt dt. Responsorium-Antiphon ein (Triduum und Osteroktav) | `les_text` |
| `^LRESP` | Fügt lat. Responsorium-Antiphon ein (Triduum und Osteroktav) | `les_text_lat` |
| `^ORV` | Orationsschluss, an den Vater gerichtet (Standard) (dt.) | `oration` |
| `^ORS` | Orationsschluss, an den Sohn gerichtet (dt.) | `oration` |
| `^ORR` | Orationsschluss, relativischer Anschluss (dt.) | `oration` |
| `^ORvR` | Orationsschluss, an den Vater gerichtet mit Bezug auf den Sohn (dt.) | `oration` |
| `^ORl…` | Orationsschluss (lat., verschiedene Endungen) | `oration_lat` |

Folgende Marker sind Vereinfachungen, die mit Formatierung in Rubrikenfarbe aufgelöst werden:
| `^ANT` | Rubrik „Ant.  ", wo Alternativen möglich sind (i.V.m. `^ODER` bzw. `^VEL`)  | `ant0`, `antev` |
| `^ODER` | Trennmarker für alternative Texte | `ant0`, `antev`, `oration`, `ms_aps_kv`, `ms_ruf_text` |
| `^VEL` | Trennmarker für alternative Texte | `text`, `oration`, `Text` |
| `^(`, `^)`, `^[`, `^]` | Klammern in Rubrikenfarbe

Folgende Marker sind regelmäßig wiederkehrende Elemente in den Messtexten, die auch Teile in Rubrikenfarbe enthalten:
| `^KV` | Rubrik „ – (Kv)" | `text` (Antwortpsalmen)|
| `^SPRICHT` | „So spricht der Herr:" | `Text` (RufvdEv) |
| `^SPRGOTT` | „So spricht Gott, der Herr:" | `Text` (RufvdEv) |

---

## 7. Personennamen-Platzhalter

Diese Marker werden zur Laufzeit durch den Namen des Tagesheiligen bzw. den amtierenden Papst/Bischof ersetzt.

| Marker | Bedeutung | Felder |
|--------|-----------|--------|
| `^NOM` | Heiligenname (Nominativ) | `bitten` |
| `^GEN` | Heiligenname (Genitiv) | `ant0`, `bitten`, `ant0_lat`, `bitten_lat` |
| `^VOK` | Heiligenname (Vokativ) | `antev`, `komm_magn`, `antev_lat`, `komm_magn_lat` |
| `^NP` | Papstname | `bitten` |
| `^NB` | Bischofname | `bitten` |
| `^NdatP`, `^NakkP`, `^NablP` | Papstname lat. (Dativ, Akkusativ, Ablativ) | `bitten_lat` |
| `^NdatB`, `^NakkB`, `^NablB` | Bischofsname lat. (Dativ, Akkusativ, Ablativ) | `bitten_lat` |

---

## 8. Sonstige Notation

| Zeichen | Bedeutung | Felder |
|---------|-----------|--------|
| `°` | Geschütztes Leerzeichen (non-breaking space) – verhindert unerwünschten Zeilenumbruch innerhalb einer Wortgruppe | alle |
| `{N#Text}` | Fußnote: `N` = Fußnotennummer (1–2 Ziffern), `Text` = Fußnoteninhalt | `les_text`, `patr_text` |
| `>Vokal` | Elision: ein auslautender Vokal entfällt vor dem anlautenden Vokal der folgenden Silbe und wird deshalb grau-kursiv dargestellt | lat. Hymnentexte |

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

Marker: `^p` `^l` `^/` `^ß` · `^r…^0r` · `^ö` `^Ö` `^Lö` `^LÖ` · `°` `>Vokal`

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
