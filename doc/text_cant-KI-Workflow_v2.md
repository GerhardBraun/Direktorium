
# KI-Workflow für Psalmtext-Bearbeitung – Version 2

## 1. Grundprinzip
Die KI bearbeitet jede Zeile unabhängig und setzt Marker gemäß den Regeln in der angegebenen Reihenfolge. Die Betonungsmarker `|` und `||` werden vom Benutzer vorgegeben und nicht automatisch gesetzt.

## 2. Markerarten
Marker stehen immer direkt **vor** der betreffenden Silbe:

- `|` – einfacher Betonungsmarker
- `||` – doppelter Betonungsmarker
- `0` – Silbentrenner
- `4`, `3`, `2`, `1` – Countdown-Marker
- `~` – Tilde (nur Benutzer)

## 3. Silbentrenner `0` – Regeln
1. `0` steht nur **innerhalb eines Wortes**.
2. Ein vorangehendes Leerzeichen oder `°` ersetzt `0`.
3. **Kein `0`, wo ein Countdown-Marker steht.** Countdown ersetzt `0`.
4. `0` wird nur gesetzt **nach `||`** (in `^*` und `^p`) oder gemäß den Regeln in 6.4–6.6.

## 4. Countdown-Marker – Regeln
### Allgemein
- Countdown wird **immer vom doppelten Marker `||` rückwärts** gesetzt.
- Countdown ersetzt ggf. `0`.
- Nie Countdown hinter `||`.

### Anzahl
- `^*`-Zeilen: **2 Marker** (`2`, `1`)
- `^p`-Zeilen:
  - weiblich: **3 Marker** (`3`, `2`, `1`)
  - männlich: **4 Marker** (`4`, `3`, `2`, `1`)

### Sonderregel
Wenn vor `||` **zu wenige Silben** vorhanden sind, werden Marker **gestapelt**.

## 5. Zeilentypen
- `^+` Flexa
- `^*` Mittelkadenz
- `^p` Schlusskadenz
- **Letzte Zeile nie `^p`.**

## 6. Bearbeitungsreihenfolge
### 6.1 Betonungsmarker
1. Jede Zeile muss genau **ein** `||` enthalten.
2. Fehlt es, wird der **letzte** `|` → `||`.
3. Ungültige Kombinationen in `^+`/`^p` werden markiert.

### 6.2 Flexa (`^+`)
- `||` → `|`.
- Wenn Betonungsmarker vorhanden: ggf. ein `0` vor der vorangehenden Silbe (Regeln aus Abschnitt 3 beachten).

### 6.3 Silbentrenner in `^*` und `^p`
- Nach `||` werden Silbengrenzen mehrsilbiger Wörter mit `0` markiert.
- Kein `0` vor Countdown.

### 6.4 Mittelkadenz `^*`
- Countdown `2`, `1` setzen.
- `0` zwischen `|` und `2` falls nötig und erlaubt.

### 6.5 Schlusskadenz `^p`
- Anzahl der Countdown-Marker bestimmen.
- Rückwärts setzen und ggf. stapeln.
- `0` nur zwischen `||` und erstem Countdown, falls erlaubt.

## 7. Letzte Zeile
Die letzte Zeile wird wie eine `^p`-Zeile behandelt, **aber ohne `^p` am Ende**.

## 8. Oneliner
- Alle Zeilenumbrüche entfernen.
- Typografische Zeichen behalten.
- Am Ende kein `^p`.
