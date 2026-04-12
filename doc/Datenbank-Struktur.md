# Grundsätzliche Fragen
## Aufteilung von Backend und Frontend
Soll das aus dem Backend übergebene texts-Objekt möglichst klein sein?
Oder sollen auch die Ordinariumstexte, die nicht oder kaum variabel sind, darin enthalten sein?
Sollen möglichst alle Berechnungen im Backend stattfinden
und im Frontend nur das, was von User-Entscheidungen abhängt?

## Speicherung von User-Präferenzen
Nutzt die künftige Anwendung auch den localStorage?

# PreliminaryNotes

# Eröffnung
Ordinarium
grundsätzlich in allen Horen gleicher Text
*Ausnahme:*
im Invitatorium: "Herr, öffne meine Lippen."-"Damit mein Mund dein Lob verkünde."
Dieser Text wird auch in der Lesehore und in den Laudes angezeigt, aber nur, wenn diese als erste Hore des Tages aufgerufen wird.
*Implementierung in der App:* `lastVisit`im localStorage

# Schuldbekenntnis (nur in der Komplet)
Ordinarium: täglich gleicher Text, keine Variationen
deutsche und lateinische Textfassung
UI: aus-/einblenden

# Hymnus
Grundsätzlich gibt es zu jeder Hore einen Hymnus.
Es können aber bis zu drei Hymnen zur Auswahl stehen.

## Lesehore: In der Nacht oder am frühen Morgen
zusätzliche Hymnus
nur in der Zeit im Jahreskreis

## Kleines Stundenbuch: abweichende Laudes- und Vesperhymnen
abweichende Hymnenauswahl im Kleinen Stundenbuch
wird aus Kompatibilitätsgründen angezeigt
nur in der Zeit im Jahreskreis
in den Laudes: Woche II, III, IV
in der Vesper: Woche III, IV

# Psalmodie
Grundmuster: drei Psalmen mit je eigener Antiphon, die vor und nach dem Psalm gebetet wird
## Elemente
Psalm 1-3
Antiphon 1-3 bzw. Antiphon 0 (gemeinsame Antiphon für alle drei Psalmen, s.u.)

## Psalmen
### Elemente
Content: in verschiedenen Sprachen/Übersetzungen:
1. wie im Stundenbuch (Einheitsübersetzung von 1982) (Standard)
2. lateinische wie in der Liturgia Horarum (Nova Vulgata)
3. Münsterschwarzacher Psalter/Benediktinisches Antiphonale
4. neue Einheitsübersetzung von 2016/2017
Verses: wenn nicht alle Verse ins Stundengebet übernommen werden oder der Psalm in mehrere Abschnitte aufgeteilt ist
Title
Quote: Zitat für biblischen/theologischen Kontext
NoDoxology: bestimmte Psalmen (157 und 160) werden nicht mit "Ehre sei dem Vater ..." abgeschlossen (in der App ist das in formatPsalm implementiert, kann aber sicherer in der Datenbank hinterlegt werden)

### abweichende Anzahl der Psalmen
Invitatorium: nur ein Psalm,
Komplet am Mi und Sa (1. Vp vom Sonntag) zwei Psalmen, sonst nur ein Psalm

### Vier-Wochen-Psalter
Die Aufteilung der 150 Psalmen (und der Cantica) bleibt in dem Vier-Wochen-Schema des Psalters mit wenigen Ausnahmen das ganze Jahr über gleich.
Die Zuordnung folgt konsequent einer week%4-Regel.

#### Ausnahmen
1. Einige Psalmen werden nur in den Geprägten Zeiten gebetet.
Sie werden in der Zeit im Jahreskreis durch andere ersetzt. *Layer:* pj-week-day

2. Wenn die Antiphon textgleich mit dem Anfang des Psalms ist, wird dieser Anfang des Psalms in Klammern gesetzt.
*in PsalmHymns.ts:* Psalmabschnitte mit dreistelligem Dezimalanteil, `^(`- und `^)`-Marker.
*Layers:* pj-week-day, pa-week-day, po-week-day

### Verknüpfungen zugunsten der Datenpflege
1. Längere Psalmen sind gelegentlich in zwei oder drei Abschnitte aufgeteilt.
Zugunsten der Datenpflege könnte es sinnvoll sein, Verknüpfungen zu verwenden, wo ein Psalm sowohl im vollen Umfang wie auch aufgeteilt Verwendung findet; dann muss eine etwaige Korrektur nur an einer Stelle vorgenommen werden und wird an einer Parallelstelle nicht vergessen.
*Beispiel:* Psalm 17.0 = 17.1 + `^p` + 17.2
auch bei Psalm 22, 27, 30, 33, 38, 40, 45, 72, 76, 92, 96, 145.4=1+2,
Sonderfall bei Psalm 42.9, 55.1=3+4a.2=4b+5, 86.1, 118.4=1+2.9, 144.3=1+2a,

2. Ein ähnlicher Fall liegt vor, wo der Anfang des Psalmes mit Klammern eingeschlossen wird, weil die Antiphon textgleich ist:
*Beispiel:* Psalm 18.0 = 18.101 ohne `^(`und `^)`;
auch bei Psalm 27, 33, 42, 48, 65, 68, 72, 73, 81, 84, 88, 89, 93, 97, 108, 119.205, 120, 122, 130, 145, 147

### Inline-Marker für den Gesang
Diese Marker sind so gewählt, dass derselbe Quelltext
1. für die Darstellung mit der Gesangsnotation genutzt werden kann,
2. aber auch, von den Markern bereinigt, für die normale Textdarstellung.

## Antiphonen
### Elemente
Content: eigentlicher Text
Mode: zugeordneter Psalmton nach dem Antiphonale zum Stundenbuch

### gemeinsame Antiphon für alle Psalmen: `ant0`
in den Geprägten Zeiten (alle außer Jahreskreis: Advent, Weihnachtszeit, Fastenzeit, Osterzeit):
in den Kleinen Horen (Terz, Sext, Non) und in der Komplet
*Wenn `ant0` verwendet wird, entfallen `ant1` bis `ant3`.*
*Layer:* season-each-each und season-last-each (nicht wochentagsspezifisch)

### eigene Antiphonen zu Laudes und Vesper
in den letzten Adventstagen: *Layer:* a-last-day
in der Karwoche: *Layer:* q-6-day
in der Osterzeit: *Layer:* po-week-day
an den Sonntagen der Geprägten Zeiten: *Layer:* season-week-0


# Versikel (nur in der Lesehore)
immer ein V- und ein R-Teil: `versikel0` und `versikel1`
*wie nach der Kurzlesung in Terz/Sext/Non*

# Kurzlesung/Erste Lesung
## Elemente
Book
Reference: Kapitel und Verse
Content: in verschiedenen Sprachen/Übersetzungen:
1. wie im Stundenbuch (Einheitsübersetzung von 1982) (Standard)
2. lateinische wie in der Liturgia Horarum (Nova Vulgata)
3. neue Einheitsübersetzung von 2016/2017
Die Lesungen der Lesehore gibt es bis auf Weiteres nur in der alten Einheitsübersetzung.

### Alternativen zur Auswahl
An wenigen Tagen gibt es für die Erste Lesung der Lesehore eine Alternative zur Auswahl.
Eine größere Auswahl gibt es in manchen Fällen für die Evangelien in der Vigil.
vgl. `LectureSelector.js`und `LectureAlternatives.ts`

## verwendete Marker
`^h` Überschriften
`^p` normaler Absatz
`^l` Zeilenwechsel
`°` geschützte Leerzeichen


# Responsorium/Versikel/Antiphon
## Elemente
Call0 (in der App: `resp1`)
Call-Response-Paare: normalerweise 1 Paar (in der App: `resp3` und `resp2`), in einem Fall 3 Paare (1. Advent, Jahr II, Lesehore)
Doxology (kann auch im UI implementiert werden, da Ordinarium ohne Sonderfall)
Antiphon (Sonderfall für Gründonnerstag, Karfreitag, Karsamstag und Osteroktav)

## Darstellung
### Laudes/Vesper/Komplet
*R* Call0 *\** Response1 *– R*
*V* Call1 *\** Response1
Ehre sei dem Vater ...  *– R*

### Lesehore
*R* Call0 *\** Response1
*V* Call1 *\** Response1
(keine Wiederholung von *R*, keine Doxology)

### Terz/Sext/Non
*V* Call1
*R* Response1
(wie das Versikel in der Lesehore)

### Sonderfälle
#### Laudes/Vesper/Komplet in Triduum paschale und Osteroktav
eine Antiphon statt dem Wechsel von Call und Response

#### Lesehore am 1. Adventssonntag, Jahr II
Hier gibt es nicht nur 1, sondern 3 Call-Response-Paare sowie die Doxologie als letzten Call.
*R* Call0 *\** Response1 *\** Response2 *\** Response3
*V* Call1 *\** Response1
*V* Call2 *\** Response2
*V* Call3 *\** Response3
*V* Ehre sei dem Vater ...
*R* Call0 *\** Response1 *\** Response2 *\** Response3

## Asteriskus: Bedeutung und Darstellung
Der Asteriskus (\*) hat beim Responsorium eine grundlegend andere Bedeutung als in den Psalmversen.
Er wird hier analog zu *R* und *V* zur Kennzeichnung des Textteils verwendet, der wiederholt wird (Response).
Deshalb wird er hier wie *R* und *V* in Rubrikenfarbe dargestellt und durch ein geschütztes Leerzeichen mit dem folgenden Response-Text verbunden, während er im Psalm in Textfarbe dargestellt wird und durch geschütztes Leerzeichen mit dem vorhergehenden Psalmtext verbunden ist.

# Zweite Lesung (nur in der Leshore)
## Elemente
Author
Title
Content

### Alternativen zur Auswahl
An wenigen Tagen gibt es für die Zweite Lesung eine Alternative zur Auswahl.
vgl. `LectureSelector.js`und `LectureAlternatives.ts`

## verwendete Marker
`^h` Überschriften
`^p` normaler Absatz
`^l` Zeilenwechsel
`°` geschützte Leerzeichen

## Fußnoten als Inline-Marker
codiert mit {N#Text}
Die Fußnoten können inline angezeigt werden oder als echte Fußnoten mit Ziffern im Text und Zusammenstellung aller Fußnoten am Ende des Textes. `prefFootnotes` als State und im LocalStorage

# Responsorium zur Zweiten Lesung (nur in der Lesehore)
Eigenschaften wie oben beim ersten Responsorium

## Darstellung
Die Differenzierung für die anderen Horen wie beim 1. Responsorium ist hier nicht nötig, da es das 2. Responsorium nur in der Lesehore gibt.
Stattdessen könnte man hier for-each-Schleifen verwenden, um den Sonderfall einzubeziehen.

### Normalfall (wie beim 1. Responsorium zur Lesehore)
*R* Call0 *\** Response1
*V* Call1 *\** Response1
(keine Doxologie, keine Wiederholung von *R*)

### Sonderfall: Lesehore am 1. Adventssonntag, Jahr II
Hier gibt es nicht nur 1, sondern 3 Call-Response-Paare sowie die Doxologie als letzten Call.
*R* Call0 *\** Response1 *\** Response2 *\** Response3
*V* Call1 *\** Response1
*V* Call2 *\** Response2
*V* Call3 *\** Response3
*V* Ehre sei dem Vater ...
*R* Call0 *\** Response1 *\** Response2 *\** Response3


# Vigil-Button (nur in der Lesehore)

# Benedictus (Laudes)/Magnificat (Vesper)/Nunc dimittis (Komplet)

# Bitten (Laudes)/Fürbitten (Vesper)
## Elemente
Introduction `bitten_e`,
Response `bitten_r`,
Intercessions `bitten`
In den Laudes gibt es in der Regel 4 Bitten, in der Vesper 5 Bitten (mögliche Konsistenzprüfung).
Jede Bitte ist zweigeteilt (in der App durch `^q` markiert).

## Wiederholung der Response
Im Vollzug des Stundengebetes in Gemeinschaft wird die Response nach jeder Bitte wiederholt.
Sie wird aber in der Regel nur einmal nach der Einleitung abgedruckt.
In der App gibt es die Option `kurz|lang` (`localPrefLongform`), um die Response nach jeder Bitte einzublenden. Das ist zB bei der Verwendung einer Vorlesefunktion hilfreich.

## Karfreitagsfürbitten
In der Vesper am Karfreitag gibt es die Option, die ausführlichen Fürbitten aus dem Messbuch auch im Stundengebet zu verwenden. Diese haben einen anderen Aufbau.
In der App kann das durch die Verwendung der Marker zur Textformatierung (`^l`, `^r`) berücksichtigt werden.
Für die Unterscheidung wird `localPrefLongform` verwendet.

# Vaterunser (Laudes/Vesper)/Te Deum (Lesehore)
Ordinariumstexte ohne Variationen, könnte also auch im UI implementiert werden.
Die Regel, wann das Te Deum zu verwenden ist, ist jetzt in `utils/ordinarium.js` implementiert.

# Anschluss-Hinweis (nur in der Lesehore)

# Oration (außer beim Invitatorium)

# Kommemoration (nur Lesehore, Laudes, Vesper)
## Zweite Lesung mit Responsorium (Lesehore)
## Benedictus-/Magnificat-Antiphon (Laudes/Vesper)
## Oration
## Anschluss-Hinweis (nur Lesehore)

# Abschluss

# Marianische Antiphon (nur Komplet, ggf. Vesper)