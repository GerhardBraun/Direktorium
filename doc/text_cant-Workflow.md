Dieser Workflow beschreibt, wie in einer Datei `psNNN.md` ein Psalmtext mit Markern für die Einrichtung zum Singen versehen wird.

**Grundregel für alle Durchläufe:** Eine Zeile bearbeiten → sofort als Edit in die Datei schreiben → erst dann zur nächsten Zeile weitergehen. Niemals mehrere Zeilen im Voraus analysieren. Den Edit ausführen, bevor die nächste Zeile auch nur angesehen wird.

---

# 1. `#` durch `|` ersetzen
Einfache Ersetzung: `#` → `|`, `##` → `||`. Als einzelner Edit der gesamten Datei.

---

# 2. `||`-Prüfung (1. Durchlauf, zeilenweise)
Hat die Zeile ein `||`? Wenn nein, aber zwei oder drei `|`: **letztes `|` durch `||` ersetzen.**
Flexa-Zeilen (`^+`) haben kein `||` – das ist korrekt, nicht ändern.
Diese Prüfung führt Claude selbst durch – den Benutzer nicht fragen.

---

# 3. Countdown-Marker + alle `0`-Marker (2. Durchlauf, zeilenweise)
Für jede Zeile – in dieser Reihenfolge:
1. Das Wort nach `||` ansehen: folgt auf die betonte Silbe noch eine unbetonte (weiblicher Schluss)? Falls ja, `0`-Marker nach `||` setzen.
2. Countdown-Marker rückwärts von `||` zählen und vor die jeweiligen Silben stellen.
3. Den Bereich vom ersten `|` bis zum ersten Countdown-Marker prüfen: mehrsil­bige Wörter, die dort nicht getrennt sind, bekommen `0`-Marker. Sobald der erste Countdown-Marker erreicht ist: stoppen.

Stapelung mit `|` ist möglich: `3|Silbe`. Stapelung mit Silbenteil eines Worts: `|frü1hen`, `mei4ne`.

| Zeilentyp | Countdown-Marker |
|-----------|-----------------|
| Flexa (`^+`) | keine – Zeile überspringen |
| MK (`^*`) | immer genau **2** |
| SK (`^p`), weiblicher Schluss | **3** |
| SK (`^p`), männlicher Schluss | **4** |
| Letzter Vers (ohne `^p`) | wie SK behandeln |

Weiblicher Schluss: nach `||` folgt noch mindestens eine unbetonte Silbe. Wenn diese zum selben Wort gehört → `0`-Marker setzen.
`so |weit der ||Him0mmel ist.`
Auch wenn ein weiteres Wort mehrere Silben hat → `0`-Marker setzen.
`|was wir er||sehnt ha0ben.`
Männlicher Schluss: nach `||` folgt keine unbetonte Silbe → kein `0`-Marker nötig.

Beispiel SK weiblich: `1Ver||stor0be0ne.^p` → erst `0`-Marker in `storbene`, dann 3 Countdown-Marker.
Beispiel MK: `2|nimm°1mein°||Fle0hen` → erst `0`-Marker in `Flehen`, dann 2 Countdown-Marker.
Beispiel Schritt 3c: `|ru0fe 2~ich 1zu ||dir` → `ru` und `fe` trennen, dann kommt `2` → stopp.
Beispiel Schritt 3c: `|Ant0litz 2nicht` → `Ant` und `litz` trennen, dann kommt `2` → stopp.

---

# 6. Einteilung in Abschnitte
Der Benutzer gibt an, welche Abschnitte gebraucht werden (ganzer Psalm, zwei oder drei Teile) und benennt die Anfangsstellen der Folgeabschnitte.

---

# 7. Erstellen von Onelinern
Alle Zeilen eines Abschnitts ohne Trennzeichen verketten. Nach `^+`, `^*` und `^p` kein Leerzeichen einfügen. `^p` am Ende des letzten Verses eines Abschnitts löschen.
Alle Oneliner zeilenweise (ohne Überschriften) in eine txt-Datei schreiben.

Beim Schreiben der txt-Datei dürfen typographische Zeichen nicht durch ASCII-Varianten ersetzt werden:
- `„` (U+201E) und `"` (U+201C) → deutsche Anführungszeichen, **nicht** `"` (U+0022)
- `'` (U+2019) → typographischer Apostroph, **nicht** `'` (U+0027)
