Dieser Workflow beschreibt, wie in einer Datei `psNNN.md` des Benutzers ein Psalmtext weiter bearbeitet wird, um ihn mit Markern für die Einrichtung zum Singen zu versehen.
*Erläuterung*: NNN steht im Dateinamen für die Nummer des Psalms, also `ps051.md`.

# 1. Arbeitsweise
1. Der Text wird zeilenweise durchgearbeitet.
2. Das Ergebnis für jede einzelne Zeile wird dem Benutzer durch Editieren der Datei `psalmNNN.md` angezeigt. So kann er die Arbeit mitverfolgen und gleich auf Richtigkeit prüfen.

# 2. Die Marker
3. Jede Zeile wird nach den im Folgenden beschriebenen Regeln mit `Markern` versehen. Diese sind:
- Betonungsmarker: `|` (einfaches Pipe) und `||` (doppeltes Pipe)
- Tilde (`~`)
- Countdown-Marker: `4`, `3`, `2`, `1`
- Silbentrenner: `0`
4. Diese Marker stehen immer direkt VOR dem Text der Silbe, die sie markieren:
Beispiel: `Den ganzen Tag 4|ru3fe 2|ich 1zu ||dir.^p`
5. Bei einer Silbe können auch mehrere Marker stehen:
- Countdown-Marker können mit dem einfachen Betonungsmarker `|` oder mit der Tilde `~` kombiniert werden.
- Ausgeschlossen ist die Kombination
a) des doppelten Betonungsmarkers `||` mit einem anderen Marker und
b) des Silbentrenners `0` mit einem anderen Marker.

# 3. Grad-Zeichen (`°`)
Wortgrenzen sind immer auch Silbengrenzen.
Das Grad-Zeichen `°` steht als Platzhalter für ein geschütztes Leerzeichen und markiert auch eine Wort- und Silbengrenze.

# 4. Grundregeln für bestimmt Marker
## 4.1 Grundregeln für den Silbentrenner `0`
1. Der Silbentrenner `0` steht immer nur innerhalb eines Wortes, wenn dessen Silbengrenzen nicht durch andere Marker gekennzeichnet sind.
2. Ein vorangehendes Leerzeichen oder Gradzeichen `°` macht das Setzen eines Silbentrenners überflüssig.
3. Ebenso macht jeder andere oben genannte Marker das Setzen eines Silbentrenners überflüssig.
4. Der Silbentrenner steht immer nur **nach dem ersten Betonungsmarker der Zeile**.

## 4.2 Grundregeln für die Countdown-Marker
1. Die Countdown-Marker werden immer vom doppelten `||`-Marker aus rückwärts den vorhergehenden Silben zugeordnet (*niemals vom einfachen `|`-Marker aus*).
2. Countdown-Marker werden auch gesetzt, wenn eine Wortgrenze (Leerzeichen oder Gradzeichen `°`) vorausgeht (*anders als beim `0`-Marker*).
3. In Flexa-Zeilen gibt es keine Countdown-Marker.
4. In `^*`-Zeilen gibt es immer genau **2 Countdown-Marker**.
5. In `^p`-Zeilen gibt es
- **bei weiblichem Versschluss 3 Countdown-Marker**,
- **bei männlichem Versschluss 4 Countdown-Marker**,
*Erläuterung:* männlicher Versschluss bedeutet: nach der Silbe mit dem doppelten `||`-Marker folgt keine weitere Silbe mehr (also kein Leerzeichen und kein `0`-Marker).
6. Stehen in einer `^p`-Zeile mit männlichem Versschluss (*wo also 4 Countdown-Marker gesetzt werden müssen*), nur 3 Silben vor dem `||`-Marker, dann wird der `4`-Marker **direkt vor** den `3`-Marker gesetzt.
Beispiel: `43|lo2be 1den ||Herrn!^p`, `43|sind 2wir 1ge||heilt.^p`

# 5. Die Zeilentypen
Jede Textzeile (außer der letzten) hat am Schluss einen Marker für den Zeilentyp:
`^+` Flexa
`^*` Mittelkadenz
`^p` Schlusskadenz
Die letzte Zeile hat immer eine Schlusskadenz, auch wenn kein `p`-Marker am Ende steht.

# 6. Regeln für das Setzen der Marker
1. Jede Zeile wird nach den im Folgenden beschriebenen Regeln, und zwar strikt in dieser Reihenfolge, bearbeitet.
2. Wenn eine Zeile fertig bearbeitet ist, werden die Änderungen durch Editieren von `psNNN.md` dem Benutzer angezeigt, bevor zur Bearbeitung der nächsten Zeile gegangen wird.

## 6.1 Betonungsmarker (`|` und `||`)
Sie werden **vom Benutzer vorgegeben** und **von der KI nur geprüft**:
1. Gibt es in der Zeile genau einen doppelten Betonungsmarker `||`?
Wenn ja: keine weitere Bearbeitung nötig
Wenn nein: Die KI ersetzt den **letzten** einfachen `|` durch einen doppelten `||`.
2. In einer `^+`- oder `^p`-Zeile sind nur folgende Kombinationen von Betonungsmarkern korrekt:
`|` - `||` (einfach - doppelt)
`||` - `|` (doppelt - einfach)
`|` - `|` - `||` (einfach - einfach - doppelt)
Andere Kombinationen sind fehlerhaft (außer in Flexa-Zeilen mit `^+`). Die KI weist darauf hin, indem sie nach der betreffenden Zeile eine Zeile einfügt mit dem Text: `Betonungsmarker fehlerhaft`.

## 6.2 Tilde (`~`)
Sie wird nur vom Benutzer gesetzt und braucht von der KI **nicht** geprüft zu werden.

## 6.3 Flexa-Zeilen (`^+`)
Wenn die Zeile mit `^+` endet, muss nur geprüft werden:
1. Enthält die Zeile einen doppelten `||`-Marker?
Wenn ja: Ersetze diesen durch einen einfachen `|`-Marker.
2. Enthält die Zeile einen `|`-Marker oder eine Tilde `~`?
Wenn nein: keine weitere Bearbeitung nötig. **Es kann direkt zur nächsten Zeile gegangen werden.**
Wenn ja: Setze vor die **vorhergehennde** Silbe einen `0`-Marker, wenn diese die Schlusssilbe eines mehrsilbigen Wortes ist.
Beispiel 1: `Wir haben er|kannt:^+`
Beispiel 2: `als ich zu dir |rief:^+`
Beispiel 3: `der mich alle0zeit |sieht^+`
In Beispiel 1 und 2 ist kein `0`-Marker nötig, weil der vorhergehenden Silbe ein Leerzeichen vorangeht (Grundregel aus Punkt 4.2)
3. **Nach diesen Prüfungen kann zur nächsten Zeile übergegangen werden.**
*Erläuterung*: In Flexa-Zeilen werden keine Countdown-Marker gesetzt.

## 6.4 Silbentrenner im Versschluss (bei `^*`- und `^p`-Zeilen)
In `^*`- und `^p`-Zeilen werden nach dem doppelten `||`-Marker **alle Silbengrenzen in mehrsilbigen Wörtern** durch `0`-Marker gekennzeichnet, wenn dies nicht schon durch einen einfachen `|`-Marker erfolgt (Grundregel aus Punkt 4.1).
*Erläuterung*: Countdown-Marker stehen niemals **nach** dem `||`-Marker.

## 6.5 Countdown- und `0`-Marker in `^*`-Zeilen
1. In `^*`-Zeilen werden immer genau 2 Countdown-Marker vor die beiden Silben gesetzt, die dem doppelten `||`-Marker vorangehen.
2. Silbengrenzen innerhalb eines Wortes, die **nach** dem einfachen `|`-Marker und **vor** dem `2`-Marker stehen, werden durch einen zusätzlichen Silbentrenner `0` gekennzeichnet.
3. Danach wird die Bearbeitung durch Editieren der `psNNN.md` dem Benutzer zur Kontrolle angezeigt und zur Bearbeitung der nächsten Zeile gegangen.

## 6.6 Countdown- und `0`-Marker in `^p`-Zeilen
1. In `^p`-Zeilen werden bei weiblichem Versschluss 3, bei männlichem Versschluss 4 Countdown-Marker vor die Silben gesetzt, die dem doppelten `||`-Marker vorangehen.
2. Silbengrenzen innerhalb eines Wortes, die **nach** dem einfachen `|`-Marker und **vor** dem ersten Countdown-Marker stehen, werden durch einen zusätzlichen Silbentrenner `0` gekennzeichnet.
*Erläuterung*: Das kommt sehr selten vor.
3. Danach wird die Bearbeitung durch Editieren der `psNNN.md` dem Benutzer zur Kontrolle angezeigt und zur Bearbeitung der nächsten Zeile gegangen.

# 7. Einteilung in Abschnitte
Nachdem alle Zeilen bearbeitet sind, gibt der Benutzer an, welche Abschnitte des Psalmes gebraucht werden.
Oft ist das der ganze Psalm, manchmal wird er auch in zwei oder drei Abschnitte aufgeteilt benötigt.
Dann gibt der Benutzer an, an welcher Textstelle der zweite und ggf. dritte Abschnitt beginnt.

# 8. Erstellen von Onelinern
1. Die benötigten Abschnitte werden in Oneliner umgesetzt, indem alle Zeilenwechsel gelöscht werden.
2. Nach `^+`, `^*` und `^p` dürfen auch keine anderen Zeichen, z.B. Leerzeichen, eingefügt werden.
3. Diese Oneliner werden ohne weitere Erläuterungen in einer txt-Datei zur Verfügung gestellt (`psNNN.txt`, wobei NNN aus dem Dateinamen von `psNNN.md` übernommen wird). Der Benutzer kann sie dann direkt über die Zwischenablage in seine Excel-Datei eintragen.
*Wenn kein Zugriff auf das Datei-System besteht, erfolgt die Ausgabe im KI-Chat.*
4. Beim Schreiben der txt-Datei dürfen typographische Zeichen nicht durch ASCII-Varianten ersetzt werden:
- `„` (U+201E) und `“` (U+201C) → deutsche Anführungszeichen, **nicht** `"` (U+0022)
- `’` (U+2019) → typographischer Apostroph, **nicht** `'` (U+0027)


