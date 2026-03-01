Dieser Workflow beschreibt, wie in einer Datei `psNNN.md` des Benutzers ein Psalmtext weiter bearbeitet wird, um ihn mit Markern für die Einrichtung zum Singen zu versehen.

# 1. `#` durch `|` ersetzen
Dies kann mit einer einfachen Ersetzen-Operation geschehen. Es muss nicht jedes einzelne Zeichen durchgegangen werden.
Die Ersetzung wird dem Benutzer durch einen Edit von `psNNN.md` angezeigt.

# 2. Prüfdurchlauf durch jede Zeile (1. Durchlauf)
Gibt es in jeder Zeile einen doppelten `||`-Marker für die Hauptbetonung?
Wenn es in einer Zeile nur zwei oder drei einfache `|`-Marker gibt, dann wird **der letzte davon durch einen doppelten `||`-Marker ersetzt.**

# 3. Setzen der Countdown-Marker (2. Durchlauf)
Countdown-Marker werden vor die Silben gesetzt, die dem doppelten `||`-Marker in der Zeile vorangehen:
`Denn ich 4bin 3|arm 2und 1ge||beugt.^p`
Sie können auch vor einem Betonungsmarker stehen (im Beispiel `3|arm`).

Beim Setzen der Countdown-Marker (und auch bei den späteren Durchläufen) **wird `psNNN.md` zeilenweise editiert**, damit der Benutzer die Einträge gleich mitverfolgen und verifizieren kann.

## 3.1 Flexa-Zeilen mit ^+ am Schluss
bekommen **keine** Countdown-Marker.

## 3.2 Zeilen mit Mittelkadenz (`^*` am Schluss)
bekommen immer 2 Countdown-Marker:
`Herr, er|freu0e 2~dei1nen ||Knecht,^*`

## 3.3 Zeilen mit Schlusskadenz (`^p` am Schluss)
a. bei männlichem Versschluss (die letzte Silbe ist eine betonte):
Die Zeile bekommt 4 Countdown-Marker:
`Denn ich 4bin 3|arm 2und 1ge||beugt.^p`

b. sonst (also bei weiblichem Versschluss mit wenigsten einer unbetonten Silbe nach der letzten betonten):
Die Zeile bekommt 3 Countdown-Marker:
`für alle, die zu dir ru3fen, 2|reich 1an ||Gnade.^p`

# 4. Setzen der 0-Marker
Im fertigen Text müssen in jeder Zeile alle Silben nach dem ersten Betonungs-Marker (`|` bzw. `||`) getrennt sein.
Dazu dienen die Betonungs- und die Countdown-Marker sowie die Leerzeichen und °-Zeichen (Platzhalter für geschützte Leerzeichen) und die Tilde (`~`).
Wo eine Silbentrennung nicht schon durch einen dieser Marker gekennzeichnet ist, wird ein `0`-Marker gesetzt.

## 4.1 bei den weiblichen Versschlüssen (3. Durchlauf)
Nach dem letzten Betonungsmarker (meist `||`, selten `|`) müssen alle Silben getrennt werden, die nicht schon durch Leerzeichen oder ° als Wortgrenze getrennt sind:
`Gott, der im ||Him0mel ist.`

## 4.2 nach der 1. Betonung einer Zeile (4. Durchlauf)
Bis man zum ersten Countdown-Marker kommt, müssen alle Silbengrenzen innerhalb eines Wortes mit dem `0`-Marker gekennzeichnet werden:
`Am Tag meiner Not |ru0fe 2~ich 1zu ||dir,^*`
Sobald man auf den ersten Countdown-Marker trifft, übernehmen diese die Silbentrennung.

# 5. Einteilung in Abschnitte
Nach dem Setzen der Countdown- und `0`-Marker gibt der Benutzer an, welche Abschnitte des Psalmes gebraucht werden.
Oft ist das der ganze Psalm, manchmal wird er auch in zwei oder drei Abschnitte aufgeteilt benötigt.
Dann gibt der Benutzer an, an welcher Textstelle der zweite und ggf. dritte Abschnitt beginnt.

# 6. Erstellen von Onelinern
Die benötigten Abschnitte werden in Oneliner umgesetzt, indem alle Zeilenwechsel gelöscht werden. Nach `^+`, `^*` und `^p` dürfen auch keine anderen Zeichen, z.B. Leerzeichen, eingefügt werden.
Diese Oneliner werden ohne weitere Erläuterungen in einer txt-Datei zur Verfügung gestellt. Der Benutzer kann sie dann direkt über die Zwischenablage in seine Excel-Datei eintragen.

Beim Schreiben der txt-Datei dürfen typographische Zeichen nicht durch ASCII-Varianten ersetzt werden:
- `„` (U+201E) und `"` (U+201C) → deutsche Anführungszeichen, **nicht** `"` (U+0022)
- `'` (U+2019) → typographischer Apostroph, **nicht** `'` (U+0027)