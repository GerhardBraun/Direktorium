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
1. Wo es Eigentexte gibt, werden diese genommen.
2. Sonst wird grundsätzlich alles vom Wochentag genommen.
3. Der User kann nach Belieben für einzelne Elemente die Commune-Texte bevorzugen.

### Eigentexte an Gedenktagen
1. Alle Gedenktage haben Eigentexte für
- Oration in Lesehore, Laudes und Vesper (in TSN nur am 11.06. und 02.10.)
- Zweite Lesung mit Responsorium in der Lesehore
2. **BuM**: Vielen Gedenktage haben zusätzlich eine eigene Benedictus- und Magnificat-Antiphon.
3. **LuV**: Einige Gedenktage haben zusätzlich weitere Eigentexte für Laudes und Vesper:
- Antiphonen (dazu Commune-Psalmen)
- Kurzlesung mit Responsorium
- Bitten/Fürbitten
Keine eigenen Antiphonen haben jedoch 11.06. und 26.07.; hier werden Antiphonen und Psalmen aus dem Commune genommen.
4. **Inv eigen**: 11.06., 29.08., 15.09., 02.10., 11.11.
5. **Hymnus zur Lesehore**:
11.06. Wt oder Commune
29.08. Comm (nicht Wt)
15.09. eigen
02.10. eigen
11.11. eigen (=Commune)

### nach Belieben Comm statt Wt wählbar (wenn nicht eigen)
- Antiphon zum Invitatorium
- Hymnus in Lesehore, Laudes und Vesper
- Kurzlesung mit Responsorium in Ld und Vp
- Benedictus-/Magnificat-Antiphon
- Bitten/Fürbitten in Ld und Vp

### Eigen- bzw. Commune-Texte, denen Wt vorgezogen werden kann
- *showContinuos*, *localPrefContinuous*: Zweite Lesung mit Responsorium der Lesehore (Bahnlesung erhalten)
- *showPsalmsWt*, *localPrefPsalmsWt*: Commune-Psalmen (und ggf. Commune-Antiphonen) bei **LuV** (Vierwochenpsalter erhalten)

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

# Auswertung und Regeln
## wirklich eigene Psalmen
|Datum | Rang | Horen | Bem. zu Psalmen | Bem. zu übrigen Horen
| 01-01 | 5 | nur Lh | wie Comm Maria, aber psalm3=99 | übrigen Horen: wie Weihnachtsoktav
| 01-06 | 5 | alle außer Ld, Vig | Vp1 und Vp wie `j-1-0` | Vigil: wie Weihnachtszeit
| j-1-0 | 4 | alle außer Ld, TSN | Vp1 und Vp wie `01-06`| TSN: So III. bzw. II. Woche
| 02-02 | 4 | alle außer Ld, TSN | wie Weihnachten, Vig wie `03-25`: wie Weihn, aber Jes 9 statt Jes 40 | TSN: Ps vom Wt/So I
| 03-25 | 5 | alle außer Ld, TSN | wie Weihnachten, Vig wie `02-02`: wie Weihn, aber Jes 9 statt Jes 40 | TSN: ErgPs
| 05-40 | 5 | alle außer Ld
| 05-60 | 5 | Vp1, Lh, Vp | --- | Vig: Jahreskreis; TSN: So I. Woche
| 05-64 | 5 | alle außer Ld, TSN | --- | TSN: ErgPs (am So: So I. Woche)
| 05-65 | 5 | alle außer Ld, TSN | --- | TSN: ErgPs
| 08-06 | 4 | alle außer Ld, TSN | --- | TSN: Ps vom Wt/So I. Woche?
| 09-14 | 4 | alle außer Ld, TSN | --- | TSN: Ps vom Wt/So I. Woche?

## Commune-Psalmen vorgesehen bei eigenen Antiphonen
### Hochfeste
| 03-19 | Josef | Mann
| 05-01 | Josef, der Arbeiter | Mann (wie `03-19`)
| 06-24 | Johannes | Mann
| 06-29 | Peter und Paul | Apostel
### Gedenktage (LuV)
| 01-21 | Agnes | Märtyrer
| 08-29 | Enth. Joh.d.T. | Märtyrer
### Gedenktage (LuV) OHNE eigene Antiphonen
*auch Antiphonen aus dem Commune (!hasEigAnt)*
11.06. Barnabas
26.07. Joachim und Anna