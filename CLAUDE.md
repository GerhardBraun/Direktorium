# CLAUDE.md – Projektkontext Stundengebet-App

## Was ist diese App?

Eine Web-App für das katholische **Stundengebet** (auch: Brevier, Offizium), entwickelt als
privates Projekt eines katholischen Priesters. Die App wird vorbereitet für die
Veröffentlichung im Online-Angebot der **Katholischen Kirche in Deutschland**.

Bisher wurde die App über ein kostenloses GitHub-Pages-Konto einem Kreis von Nutzern
via Mund-zu-Mund-Propaganda zur Verfügung gestellt.

Der Entwickler ist **Fachexperte für das Stundengebet**, aber Lernender im Programmieren.
Die künftigen professionellen Entwickler sind umgekehrt Programmierprofis ohne
Kenntnisse des Stundengebets. Diese Datei soll die Brücke bilden.

## Entstehungsgeschichte und Namenskonventionen

Die App begann als **Direktorium** und **Totenverzeichnis** für die Diözese Fulda –
relativ einfache Komponenten, die einen festen Datenbestand aus einer Datenbank anzeigen.
Das **Stundengebet** kam als Fortsetzung hinzu, ist aber mittlerweile zum eigentlichen
Kern der App geworden. Direktorium und Totenverzeichnis sind heute eine Beigabe,
zumal sie auf die Diözese Fulda begrenzt sind, während das Stundengebet für den
gesamten deutschsprachigen Raum konzipiert ist.

Diese Entstehungsgeschichte spiegelt sich noch in manchen Bezeichnungen wider:
- Die zentrale Komponente heißt `Direktorium.js`, obwohl das Stundengebet ihr
  eigentlicher Inhalt ist.
- `formatText` wird nur für das Direktorium gebraucht; die viel wichtigere Funktion
  `formatPrayerText` trägt eine spezialisierte Bezeichnung – sinnvoller wäre es umgekehrt.

**Das Anpassen der Bezeichnungen** (Komponenten, Variablen, Funktionen) an die heutige
Gewichtung ist ein geplanter Schritt zur Vorbereitung auf die Zusammenarbeit mit
anderen Entwicklern und die Veröffentlichung für einen breiten Nutzerkreis.

## Bevorstehende Zusammenarbeit und Vorhaben

- Übertragung auf die Server der Katholischen Kirche in Deutschland
- Zusammenarbeit mit professionellen Entwicklern
- **Laufende Vorhaben:**
  - Bezeichnungen von Komponenten, Variablen und Funktionen an die heutige
    Gewichtung anpassen (Stundengebet als Kern, nicht Direktorium)
  - Code-Qualität prüfen, Vereinfachungen identifizieren
  - Übersicht aller States und ihrer Verwendung erstellen
  - Architektur-Dokumentation für neue Entwickler
  - Fachliche Kommentare zum Stundengebet im Code ergänzen
  - Bedienungsanleitung für Nutzer erstellen

---

## Fachlicher Hintergrund: Das Stundengebet

Das **Stundengebet** (Liturgia Horarum) ist das offizielle Gebet der katholischen Kirche,
das Geistliche und viele Gläubige täglich beten. Es gliedert sich in **Horen** (Gebetsstunden),
die über den Tag verteilt gebetet werden.

### Die Horen (in der App: `PrayerHours`)

| Key in App     | Bezeichnung  | Bedeutung                                           |
|----------------|--------------|-----------------------------------------------------|
| `erstev`       | Erste Vesper | Vorabend-Vesper bei Hochfesten/Festen               |
| `invitatorium` | Invitatorium | Eröffnungspsalm, beginnt das Tagesgebet             |
| `lesehore`     | Lesehore     | Längere Lesungen (früher: Matutin/Vigil)            |
| `laudes`       | Laudes       | Morgengebet                                         |
| `terz`         | Terz         | Kleine Hore (ca. 9 Uhr)                             |
| `sext`         | Sext         | Kleine Hore (ca. 12 Uhr)                            |
| `non`          | Non          | Kleine Hore (ca. 15 Uhr)                            |
| `vesper`       | Vesper       | Abendgebet                                          |
| `komplet`      | Komplet      | Nachtgebet, Tagesabschluss                          |

### Liturgischer Rang (`rank`)

Jeder Tag im Kirchenjahr hat einen **liturgischen Rang**, der bestimmt, welche Texte
vorrangig gebetet werden:

| Rang | Bezeichnung               | Beispiele                              |
|------|---------------------------|----------------------------------------|
| 4    | Hochfest (`soll`)         | Weihnachten, Ostern, Pfingsten         |
| 3    | Fest (`kirchw`)           | Apostelfeste, Kirchweih                |
| 2    | Gebotener Gedenktag       | viele Heiligenfeste                    |
| 1    | Nichtgebotener Gedenktag  | freigestellte Heiligenfeste            |
| 0    | Wochentag (`wt`)          | normaler Wochentag im Jahreskreis      |

Bei hohem Rang (`isHighRank`: rank > 2) haben die Eigentexte des Tages Vorrang vor
den Wochentagstexten.

### Textquellen (`prefSrc`)

Die Texte können aus verschiedenen Quellen stammen:

| Kürzel         | Bedeutung                                                                          |
|----------------|------------------------------------------------------------------------------------|
| `oblig`        | Obligatorische Feiern: Hochfeste, Feste, gebotene Gedenktage – verdrängen die Feier des normalen Wochentages |
| `n1`–`n5`      | Nichtgebotene Gedenktage (der Nutzer kann stattdessen auch den Wochentag beten)    |
| `d1`–`d5`      | Nichtgebotene Gedenktage einer Diözese (Proprium der jeweiligen Diözese)           |
| `wt`           | Wochentag – allgemeine Texte im Jahreskreis                                        |
| `com1`, `com2` | Commune – Gemeinschaftstexte (z.B. Commune der Märtyrer)                           |

### Präferenzen (`prefSollemnity`)

| Wert     | Bedeutung                                   |
|----------|---------------------------------------------|
| `soll`   | Hochfest wird bevorzugt (mit Erster Vesper) |
| `kirchw` | Kirchweih wird bevorzugt                    |
| `''`     | Normalmodus                                 |

### Latein-/Spracheinstellung

- `prefLanguage` / `localPrefLanguage`: Sprachpräferenz des Nutzers:
  - Deutsch (nach dem offiziellen Stundenbuch)
  - Latein
  - Neue deutsche Einheitsübersetzung
  - Übersetzung des Münsterschwarzacher Psalters
- `localPrefLatin`: Detaileinstellung für lateinische Texte
- Hintergrund: Das Stundengebet kann auf Deutsch oder Latein gebetet werden;
  für die Feier auf Deutsch werden außerdem verschiedene Psalmübersetzungen
  zur Verfügung gestellt.

---

## Technische Architektur

### Technologie-Stack

- **React** (funktionale Komponenten mit Hooks)
- **Tailwind CSS** für Styling
- **localStorage** für Benutzereinstellungen
- **Node.js**-Entwicklungsumgebung

### Hauptkomponente

**`Direktorium.js`** ist die zentrale Komponente der App. Sie enthält:
- Den `useTouchZoom`-Hook für Touch-Gesten zur Schriftgrößenanpassung
- Die `PrayerMenu`-Komponente (Menü zur Auswahl der Hore)
- Die `PrayerTextDisplay`-Komponente (Anzeige der Gebetstexte)
- Den Haupt-App-State
- Navigation zwischen den verschiedenen Ansichten (`viewMode`)

### Ansichten (`viewMode`)

| Wert           | Beschreibung                                                              |
|----------------|---------------------------------------------------------------------------|
| `directory`    | Direktorium – liturgischer Kalender mit Tagesangaben (nur Diözese Fulda) |
| `deceased`     | Verzeichnis der verstorbenen Geistlichen (nur Diözese Fulda)             |
| `prayer`       | Menü zur Auswahl der Hore für das gewählte Datum                         |
| `prayerText`   | Anzeige der Gebetstexte der gewählten Hore                               |
| `massReadings` | Messlektionar (Lesungen der Heiligen Messe)                              |
| `settings`     | Benutzereinstellungen                                                     |
| `ausblenden`   | Vollbildmodus (mit WakeLock-Funktion)                                    |

### Selektoren / Unterkomponenten

| Datei                  | Funktion                                                                         |
|------------------------|----------------------------------------------------------------------------------|
| `SourceSelector.js`    | Auswahl der Textquelle (`oblig` / `n1`–`n5` / `d1`–`d5` / `wt` / `com`)        |
| `HymnSelector.js`      | Auswahl des Hymnus (mehrere Optionen möglich)                                    |
| `KompletSelector.js`   | Auswahl der Komplet-Texte (Wochentag oder eine der beiden Sonntagskompleten)     |
| `MarAntSelector.js`    | Auswahl der Marianischen Antiphon zum Abschluss der Komplet                      |
| `LectureSelector.js`   | Auswahl der Lesung                                                               |
| `SectionHeader.js`     | Abschnittsüberschriften                                                          |
| `PersonalSettings.js`  | Benutzereinstellungen-UI                                                         |

### Datenhaltung

| Datei/Modul               | Inhalt                                                                       |
|---------------------------|------------------------------------------------------------------------------|
| `Direktorium.ts`          | Liturgischer Kalender                                                        |
| `Deceased.ts`             | Daten für das Gedenkbuch                                                     |
| `LitCalendar.js`          | Berechnung der Stellung des Tages im liturgischen Kalender                   |
| `BrevierDataProcessor.js` | Verarbeitung der Breviertext-Daten                                           |
| `BibleRefFormatter.js`    | Formatierung von Bibelstellen-Angaben                                        |
| `TextFormatter.js`        | Textformatierung (`formatPrayerText`, `formatPsalm`, `formatText`, `firstCapital` …) |
| `GetValue.js`             | Werteabfrage aus den Datenhierarchien                                        |
| `ordinarium.js`           | Feststehende, vom Tag unabhängige Texte des Stundengebets                    |
| `UserMessageDisplay.js`   | Anzeige von Nutzer-Nachrichten/Hinweisen                                     |

### Datenzusammenstellung (`calendarData`)

Die Kalenderdaten werden in drei Schritten zusammengestellt:

1. **adlibData** – freie Texte, ohne deepMerge eingelesen
2. **brevierData** – Quellen `oblig`, `n1`–`n5`, mit deepMerge hinzugefügt
3. **diocesanData** – Diözesane Texte (`d1`–`d5`), zuletzt hinzugefügt,
   da sie vorhandene Daten überschreiben können; enthält `oblig`-Einträge nur
   bei vollständiger Ersetzung des betreffenden Datums

### Benutzereinstellungen (localStorage)

| Schlüssel        | Inhalt                                                     |
|------------------|------------------------------------------------------------|
| `baseFontSize`   | Schriftgröße (per Touch-Zoom einstellbar)                  |
| `fontFamily`     | Schriftart (vom Nutzer wählbar)                            |
| `diocese`        | Gewählte Diözese (z.B. `'Fulda'`)                         |
| `selectedDate`   | Zuletzt gewähltes Datum (nur Datumsteil, kein Timestamp)   |
| `prefSrc`        | Bevorzugte Textquelle                                      |
| `prefSollemnity` | Einstellung Hochfest/Kirchweih                             |
| `prefLanguage`   | Sprachpräferenz                                            |

### Hilfsfunktionen und Hooks

| Datei/Hook             | Funktion                                              |
|------------------------|-------------------------------------------------------|
| `WakeLock.js`          | Verhindert Bildschirm-Timeout beim Beten              |
| `ScrollableViews.js`   | Scrollbare Ansichten für Direktorium/Gedenkbuch       |
| `NavigationButtons.js` | Vor/Zurück-Navigation zwischen Tagen                  |
| `TitleBar.js`          | Titelleiste mit Navigation                            |
| `MatutinDisplay.js`    | Spezielle Anzeige für die Lesehore am Ostersonntag    |
| `MassReadings.js`      | Messlektionar-Anzeige                                 |
| `RefLink.jsx`          | Verweise/Referenzen (z.B. Bibelstellen als Links)     |
| `setScrollDate`        | Setzt Scroll-Position auf bestimmtes Datum            |

---

## Entwicklungshinweise

- Komponenten-Namen in **PascalCase** (React-Konvention)
- Variablen/Funktionen in **camelCase**
- Styling ausschließlich mit **Tailwind CSS**-Klassen (kein separates CSS)
- Dark Mode wird durchgehend unterstützt (`dark:`-Präfix in Tailwind)
- Code-Kommentare bitte auf **Deutsch**, da der Fachexperte (der Priester/Entwickler)
  damit arbeitet und Kommentare die fachliche Logik des Stundengebets erläutern sollen
- Bei Unklarheiten zur liturgischen Logik: **immer nachfragen, nicht raten**
