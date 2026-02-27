**Überlegungen zur Formatierung des Psalmtexte mit Einrichtung zum Gesang**

Keine eigene Funktion formatPsalmText, sondern in formatPsalm wird für `text` und `doxology` formatPrayerText mit dem Marker 'cant' aufgerufen.
Der Parameter hour in formatPrayerText kann dabei zur Mitteilung des Psalmtons (text_mode) genutzt werden.
formatPrayerText erkennt: Wenn marker='cant', dann soll auch die zusätzliche Funktion `formatCantMarkers` zur Umsetzung der |- und Countdown-Tags in Unterstreichungen und Klammern aufgerufen werden. Der Parameter hour wird dann in die Konstante `mode` übernommen und hour='' gesetzt, damit es keine Fehler oder anderen unerwünschten Effekte gibt.
formatCantMarkers kann als Subroutine innerhalb von formatPrayerText angelegt werden, analog zu replaceNames oder processInlineFormats.

formatCantMarkers muss folgende Fälle berücksichtigen:

# 1. Flexa (Zeilenende mit ^+)
## 1.1 In der Zeile gibt es ein |-Tag:
Dann endet die Zeile mit dieser betonten Silbe (männlicher Versschluss).
Die Silbe *vor* | wird unterstrichen.

## 1.2 In der Zeile gibt es eine Tilde ~:
Dann endet die Zeile mit mehreren unbetonten Silben.
Alle Silben, die durch eine Tilde verbunden sind, werden durch eine Klammer (^b-Tags)verbunden.

## 1.3 Es gibt weder | noch ~:
Das ist der Normalfall.
Dann ist keine Markierung nötig.

# 2. b=2: die beiden letzten betonten Silben (| und ||) werden berücksichtigt
Die Countdown-Tags spielen dann keine Rolle, außer zur Erkennung eines männlichen Versschlusses anhand des 4-Tags.
Außerdem ist die Unterscheidung von einfachem | und doppeltem || irrelevant.
## 2.1 Der Kadenzbeginn (Unterstreichung)
 liegt bei der ersten markierten Silbe, egal ob | oder ||.

## 2.2 Klammern
Die Kadenz besteht aus vier Tönen.
Silben, die auf denselben Ton gesungen werden, werden durch eine Klammer verbunden.
Grundregel: Silben, die durch eine Tilde verbunden sind, werden auf denselben Ton der Kadenz gesungen und deshalb durch eine Klammer verbunden.

### 2.2.1 weiblicher Versschluss
Die Noten der Kadenz sind in diesem Fall betont - unbetont - betont - unbetont.
1. Kadenzton: erste betonte Silbe (| oder ||), ggf. durch Tilde verbundene weitere Silbe(n)
2. Kadenzton: alle weiteren (unbetonten) Silben bis zur nächsten betonten Silbe (| oder ||) ausschließich; wenn das mehrere Silben sind: durch Klammer verbunden
3. Kadenzton: zweite betonte Silbe (| oder ||), ggf. durch Tilde verbundene weitere Silbe(n)
4. Kadenzton: alle weiteren (unbetonten) Silben bis zum Versschluss; wenn das mehrere Silben sind: durch Klammer verbunden

### 2.2.2 männlicher Versschluss
In diesem Fall stehen in der Kadenz *zwei* unbetonte Noten zwischen den betonten Noten.

#### 2.2.2.1 Normalfall: zwei betonte Silben (| und ||)
1. Kadenzton: erste betonte Silbe (| oder ||), ggf. durch Tilde verbundene weitere Silbe(n)
2. Kadenzton: die nächste unbetonte Silbe, ggf. durch Tilde verbundene weitere Silbe(n)
3. Kadenzton: alle weiteren (unbetonten) Silben bis zur abschließenden betonten Silbe (| oder ||) ausschließich; wenn das mehrere Silben sind: durch Klammer verbunden
4. Kadenzton: die abschließende betonte Silbe

#### 2.2.2.2 Sonderfall: drei betonte Silben (zweimal | und einmal ||)
1. Kadenzton: erste betonte Silbe (|), ggf. durch Tilde verbundene weitere Silbe(n)
2. Kadenzton: alle weiteren (unbetonten) Silben bis zur zweiten betonten Silbe (|) ausschließich; wenn das mehrere Silben sind: durch Klammer verbunden
2. Kadenzton: die zweite betonte Silbe (|) und die folgende unbetonte Silbe, durch Klammer verbunden
4. Kadenzton: die abschließende betonte Silbe (||)

# 3. b=1: die letzte Hauptbetonung (||) und der Countdown sind relevant
## 3.1 Kadenzbeginn
liegt bei der Silbe mit dem Countdown-Tag c=v;
Ausnahme: Wenn es ein `4`-Tag gibt, liegt der Kadenzbeginn bei c=v+1
*Dieses `4`-Tag steht in Versen mit Schlusskadenz und männlichem Versschluss.*

## 3.2 Klammern
Wenn auf die letzte betonte Silbe (`||`) mehrere unbetonte Silben folgen, werden diese durch eine Klammer verbunden.
**Sonderfall**: Wenn auf die Silbe mit dem einfachen `|`-Tag erst *nach* der Silbe mit dem doppelten `||`-Tag steht, werden die Silben von `||` einschließlich bis `|` ausschließlich mit einer Klammer verbunden und alle Silben ab `|` bis zum Versschluss.

# zusätzliche 0-Tags
Zur Vereinfachung der Arbeit von formatCantMarkers werden alle Silbengrenzen innerhalb der Kadenz, die nicht schon durch |- oder ~- oder Countdown-Tags erkennbar sind, durch `0`-Tags gekennzeichnet.

# Verschachtelung von ^u- und ^b-Tags
In bestimmten Fällen kann es vorkommen,dass die Silbe des Kadenzbeginns mit der folgenden Silbe durch eine Klammer verbunden wird.
Dann werden die Rahmungen ^u ... ^0u und ^b ... ^0b verschachtelt.
Beispiel: die wir ^uscha^bu^0ue^0bn w^berde^0bn ...
Das muss bei der Segmentierung und Auflösung der Tags in Unterstreichungen und Klammern berücksichtigt werden.
Vorschlag: Wenn sich ^b zwischen ^u und ^0u findet, wird es selbst durch ^0u^b^u ersetzt.
Dann gibt es einen ^u...^0u-Abschnitt außerhalb des ^b-Rahmens und einen innerhalb, und der innerhalb könnte durch erneutes Aufrufen von formatCantMarkers aufgelöst werden (analog zum erneuten Aufruf von processInlineFormats in der Routine für muteStar).