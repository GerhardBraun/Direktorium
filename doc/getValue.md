Ich möchte die Funktion getValue
im Zusammenspiel mit den zugehörigen States und dem SectionHeader
- analysieren und dokumentieren,
- mit den liturgischen Regeln abstimmen,
- ggf. optimieren.

Die Funktion ist im Laufe der Entwicklung der App gewachsen.
Es kann daher sein, dass sie unnötig kompliziert und deshalb vielleicht fehleranfällig ist. Möglicherweise gibt es noch Grenz- oder Sonderfälle, die falsch behandelt werden, ohne dass es bisher aufgefallen ist.

Die Funktion ist - neben dem BrevierDataProcessor, der die verfügbaren Texte eines bestimmten Tages zusammenstellt - das Kernstück der App, weil sie für jedes Feld den richtigen Gebetstext zur Anzeige auswählt.

Die Grundfunktion von getValue ist die Auswahl:
Eigentext oder Commune-Text oder Text vom Wochentag.
Dabei gilt:
- Wenn es einen Eigentext gibt, wird dieser genommen (Ausnahme: Bahnlesungen der Lesehore, Psalmen des Vierwochenpsalters).
- Sonst wird, wenn es keinen Commune-Text gibt oder dieser nicht zum Zuge kommt, der Wochentags-Text genommen.

Ob ein vorhandener Commune-Text zum Zuge kommt, hängt ab von
- der Hore (hour),
- dem Rang (rank.date), ggf. überspielt durch prefSollemnity,
- dem State localPrefComm.
Das wird über skipCommune ermittelt. Dieses komplexe Regelwerk ist zu prüfen und kann evtl. straffer gefasst werden.

In welchen Fällen können Eigentexte überspielt werden?
- Bahnlesung: 1. und 2. Lesung der Lesehore
- Ergänzungspsalmodie in den Kleinen Horen
- Festpsalmen der Laudes und Ergänzungspsalmodie als Quasi-Eigentexte an Hochfesten/Festen
- wo ein Commune-Text an Hochfesten/Festen die 1. Wahl ist, weil kein Eigentext vorhanden ist

Im SectionHeader werden durch die Schalter States gesteuert, die in getValue die Textauswahl beeinflussen.

# Analyse und Dokumentation
## Welche Felder gehören zu welchem Abschnitt?
## Welche Abschnitte kommen in welcher Hore vor?
## Welche Schalter werden vom SectionHeader angeboten?
## Welche States werden vom welchem Schalter gesteuert?

# Liturgisches Regelwerk
## Ausnahmen
Im folgenden Regelwerk fehlen die Elemente, die nicht durch getValue gesteuert werden:
1. für den Hymnus, dessen Auswahl in HymnSelector.js gesteuert wird;
2. für die Komplet, deren Auswahl im KompletSelector.js gesteuert wird.

## Stundengebet an Gedenktagen (geboten oder nichtgeboten)
Grundregeln:
1. Wo es Eigentexte gibt, werden diese genommen (mit den üblichen Möglichkeiten, sie zu überspielen).
2. Sonst wird grundsätzlich alles vom Wochentag genommen.
3. Der User kann nach Belieben für einzelne Elemente die Commune-Texte bevorzugen.
Bei diesen Elementen steht in der folgenden Aufstellung (Wt || Comm); wo "immer vom Wochentag" steht, ist diese Möglichkeit ausgeschlossen.

### Invitatorium
|Antiphon | *vom Wochentag oder aus dem Commune*, wenn nicht eigen;|
|Psalm | wie im Ordinarium|
### Lesehore
|Antiphonen, Psalmen, Versikel|immer vom Wochentag|
|1. Lesung mit Responsorium|immer von der lfd. Schriftlesung des Wochentages|
|2. Lesung mit Responsorium|*eigen*; fehlt eine eigene, dann vom Wochentag|
|Oration |immer *eigen*|
### Laudes und Vesper
|Antiphonen, Psalmen und Canticum|vom Wochentag, wenn nicht eigen;|
|Kurzlesung mit Responsorium, Antiphon zum Benedictus/Magnificat, Bitten/Fürbitten|*vom Wochentag oder aus dem Commune*, wenn nicht eigen;|
|Oration |immer *eigen*|
### Kleine Horen (Terz/Sext/Non, je nach Tageszeit)
alles vom Wochentag (außer am 11. Juni und am 2. Oktober)

## Stundengebet an Hochfsten
Grundregel: Es wird nichts vom Wochentag genommen. Wo es keine eigenen Texte gibt, wird aus dem Commune ergänzt.
Es bleibt aber die Möglichkeit,
1. in der Lesehore die Bahnlesungen vom Wochentag auszuwählen,
2. die Psalmen vom Wochentag auszuwählen, wenn sonst die Psalmen aus dem Commune genommen würden.

## Stundengebet an Festen
Hier gilt alles wie an Hochfesten mit einer Ausnahme:
In den Kleinen Horen werden Antiphonen und Psalmen werden vom Wochentag genommen, sofern keine eigenen angegeben sind.
*Hier kann eine Liste der Hochfeste und Feste ergänzt werden, die tatsächlich eigene Psalmen in den Kleinen Horen haben.*

# Übersichtstabelle
### Invitatorium
|Antiphon | *Wt/Comm* |
|Psalm | wie im Ordinarium|
### Lesehore
|Antiphonen |immer vom Wochentag|
| Psalmen |immer vom Wochentag|
|  Versikel|immer vom Wochentag|
|1. Lesung mit Responsorium|Wt|
|2. Lesung mit Responsorium|*eigen*|
|Oration |*eigen*|
### Laudes und Vesper
|Antiphonen|vom Wochentag, wenn nicht eigen;|
|Psalmen und Canticum|vom Wochentag, wenn nicht eigen;|
|Kurzlesung mit Responsorium|*Wt/Comm* |
|Antiphon zum Benedictus/Magnificat|*Wt/Comm* |
|Bitten/Fürbitten|*Wt/Comm* |
|Oration |immer *eigen*|
### Kleine Horen (Terz/Sext/Non, je nach Tageszeit)
alles vom Wochentag (außer am 11. Juni und am 2. Oktober)
|Antiphonen|Wt|
|Psalmen und Canticum|Wt|
|Kurzlesung |Wt |
|Versikel|Wt|
|Oration |immer *eigen*|
