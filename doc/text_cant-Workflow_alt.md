# Workflow: Psalmen mit universaler Notation einrichten

## Überblick

Ein Psalmentext wird **einmal** mit der abstrakten Notation markiert (`text_cant`) und ist dann für alle zehn Psalmtöne verwendbar. `formatCantMarkers` wertet die Marker je nach gewähltem Ton aus und erzeugt Unterstreichung und Klammerung automatisch.

Die Arbeit ist zwischen Benutzer und Claude aufgeteilt:

| Schritt | Wer | Was |
|---------|-----|-----|
| 1 | Benutzer | Psalmtext aufbereiten und Betonungen mit `#`-Notation eintragen |
| 2 | Claude | `#` → `\|`/`\|\|` ersetzen, Countdown- und 0-Marker  |
| 3 | Benutzer | gibt ggf. benötigte Aufteilungen des Psalmes an |
| 4 | Claude | erstellt je einen Oneliner für jede benötigte Aufteilung |

---

## Schritt 1 – Text aufbereiten (Claude) und Betonungen eintragen (Benutzer)

Der Benutzer erstellt `doc/psNNN.md` mit dem Psalmtext in einer Zeile je Halbvers. Darin trägt er Haupt- und Nebenbetonung mit der `#`-Notation ein:

| Eingabe | Bedeutung | Wird zu |
|---------|-----------|---------|
| `#Silbe` | Nebenbetonung (vor `\|\|`) | `\|Silbe` |
| `##Silbe` | Hauptbetonung | `\|\|Silbe` |
| `##Silbe … #Silbe` | Hauptbetonung vor Nebenbetonung (Sonderfall 1) | `\|\|Silbe … \|Silbe` |



Ggf. hat  der Benutzer schon **Countdown-Marker** `1`, `2`, `3` eingetragen, wenn sie sich klar ergeben:

```
seine Krankheit ver#wan3del2st du 1in ##Kraft.
```

### Regeln für die Betonung (zur Beachtung für den Benutzer)

1. **`||` auf die betonte Silbe, nicht auf das Wort**: Bei mehrsilbigen Wörtern zuerst die betonte Silbe bestimmen, dann `##` setzen. `##Na` für „Nationen", nicht `##Nationen`.
2. **Rückwärts zählen ab `||`**: Jede Silbe einzeln zählen – auch Silben aus demselben Wort wie `||`.
3. **`|` nahe an die Kadenz**: `|` markiert die letzte klar betonte Silbe unmittelbar vor dem Countdown-Bereich.
4. **Schwache Wörter überspringen**: Pronomen (`ihn`, `den`, `des`), Artikel und Kopula gelten nicht als betonte Silbe.

### Flexa-Zeilen (`^+`)

In Flexa-Zeilen immer nur ein einzelnes `#` (→ `|`) setzen, nie `##`. Der Flexa-Handler unterstreicht die Silbe **vor** dem `|`.

---

## Schritt 2 – Marker ergänzen (Claude)

Claude ersetzt die `#`-Notation und ergänzt alle fehlenden Marker.

### 2a – `#` → `|` ersetzen

Zunächst können einfach die `#`-Marker des Benutzers durch `|`-Marker ersetzt werden. Dabei wird automatisch `##` durch `||` ersetzt.

Wenn danach in einer Zeile zwei einfache `|`-Marker stehen und kein doppelter, dann ist der zweite durch einen doppelten `||`-Marker zu ersetzen.

In seltenen Fällen steht `||` vor `|`. Das hat dann der Benutzer so vorgegeben.

Es kommt auch der Sonderfall vor, dass in einer Zeile drei Betonungen mit `|`-Markern versehen sind. Dann sind immer die ersten beiden einfache `|`, der dritte ein doppelter `||`. Das bitte bei Bedarf korrigieren.

### 2b – Countdown-Marker ergänzen

Beim Setzen der Marker editiert Claude die vom Benutzer vorbereitete `psNNN.md`, und zwar **zeilenweise**, damit der Benutzer die Änderungen mitverfolgen und verifizieren kann.

Countdown-Marker `1`, `2`, `3` werden **rückwärts von `||`** (nie vom einfachen `|`) gezählt und unmittelbar vor die jeweilige Silbe gestellt.

**Maximale Reichweite je Kadenztyp:**

| Kadenzkategorie | Max. Marker |
|----------------|-------------|
| Mittelkadenz (`^*`) | nur `2` und `1` (kein `3`) |
| Schlusskadenz (`^p`) | bis `3` (Töne IV, VI); bei männlichem Versende zusätzlich `4` |
In Flexa-Zeilen (`^+`) kommen keine Countdown-Marker vor.

**Männliches Versende (Schlusskadenz):** Endet der SK-Vers mit einer betonten Silbe auf `||` ohne nachtonigen Auslaut (einsilbiger Versschluss), muss **immer** ein `4`-Marker gesetzt werden – unabhängig davon, wie viele `|`/`||`-Marker die Zeile enthält. Position 4 rückwärts von `||` erhält den `4`-Marker; er kann mit einem `|`-Marker gestapelt werden (`4|Silbe`) oder auch mitten in einem Wort stehen (`mei4ne`). Der `4`-Marker signalisiert dem Formatter `v_eff = v+1`, sodass `||` auf den **letzten** Kadenzton fällt.

**Verkürzte Kadenz** (Vers zu kurz für separaten 3- und 4-Slot): Marker `43` auf derselben Silbe schreiben, z. B. `43|lo2be 1den ||Herrn!^p`. Der Formatter erkennt dies und fügt `~` als Hinweis an.

### 2c – `0`-Marker setzen

Der `0`-Marker trennt ab dem ersten Betonungsmarker (`|` bzw. `||`) die Silben innerhalb eines Wortes, **wenn die Silbengrenze nicht schon anderweitig gekennzeichnet ist**: durch Countdown- oder `|`-Marker, durch Leerzeichen oder `°` (Stellvertreter für geschütztes Leerzeichen) oder durch eine Tilde (`~`).

Beispiel: `deine |Herr2lich1keit ||se0hen^*` → In "Herrlichkeit" ist kein `0`-Marker nötig, weil alle Silbengrenzen schon durch Countdown-Marker gekennzeichnet sind. Bei "sehen" muss aber die Silbengrenze durch einen zusätzlichen `0`-Marker gesetzt werden.

In Flexa-Zeilen (`^+`) muss ein `0`-Marker dann gesetzt werden, wenn darin ein `|`-Marker steht und die vorhergehende Silbe abgegrenzt werden muss (also nicht ein einsilbiges Wort ist).
`So spricht der Herr zu mei0nem |Herrn:^+`

Auch wenn in der Flexa-Zeile eine Tilde `~` steht (mehrsilbiger weiblicher Versschluss), muss die vorhergehende Silbe ggf. durch `0` von der ihr vorangehenden getrennt werden:
`Wir preisen deine Herr0lich~keit^+`

**Faustregel: In Flexa-Zeilen** muss ein `0`-Marker nur dann stehen, wenn darin auch ein `|`-Marker oder eine Tilde `~` steht und die vorangehende Silbe von der Silbe getrennt werden muss, die ihr vorangeht.

### 2d – Tilde `~`

Bei Tönen mit b=2 (I, III, VII, IX) kann die Standardzusammenfassung der Silbengruppen durch eine Tilde überschrieben werden:

- `~` markiert die **letzte Silbe der T3-Gruppe** (drittletzter Kadenzton).
- `~` steht **vor** der Silbe, die zu T3 gehören soll (d. h. `~` und die zugehörige Silbe sind ein gemeinsamer Marker-Token).
- `~` darf **nicht** auf demselben Slot wie `|` stehen.

**Die Tilde wird nicht von Claude gesetzt, nur vom Benutzer.**
---

## Schritt 3 - Abschnitte bestimmen

Nachdem alle Marker gesetzt sind, gibt der Benutzer an, welche Abschnitte des Psalms gebraucht werden.
Oft wird ein längerer Psalm im Stundengebet in zwei oder drei Abschnitte aufgeteilt.
Dann gibt der Benutzer an, mit welcher Textstelle der zweite, ggf. der dritte Abschnitt beginnt.
Es kann auch vorkommen, dass ein Psalm einmal ganz, einmal in zwei Abschnitte aufgeteilt und einmal in drei Abschnitte aufgeteilt benötigt wird.
Für jeden der benötigten Abschnitte, die der Benutzer beschreibt, erzeugt Claude einen Oneliner. Alle Oneliner werden dann in eine einzige txt-Datei gestellt, damit der Benutzer sie in einem Zug über die Zwischenablage in Excel kopieren kann.

## Schritt 4 – Oneliner erzeugen

### Oneliner-Regel

Alle Halbverse eines Abschnitts werden **ohne zusätzliche Trennzeichen** verkettet:
- Kein Leerzeichen nach `^+`, `^*`, `^p`
- `^p` am Ende des **letzten** Verses eines Abschnitts **löschen**
- Abschnitte zeilenweise in einer Datei → alles in einem Zug nach Excel kopierbar

**Beispiel:**

```
Zeile 1: Lobet den |Herrn, 2al1le ||Völker,^*
Zeile 2: preist ihn, 3|al2le 1Na||tionen!^p
```
→ Oneliner: `Lobet den |Herrn, 2al1le ||Völker,^*preist ihn, 3|al2le 1Na||tionen!^p`

Der Benutzer kopiert den/die Oneliner in seine Excel-Tabelle.

---

## Besondere Marker-Situationen

### `|` vor `||` (Normalfall, b=1)

Die Nebenbetonung (`|`) liegt typisch 1–3 Silben vor der Hauptbetonung (`||`). `|` kann mit einem Countdown-Marker gestapelt werden: `3|Hei` = drittvorhergehende Silbe *und* Nebenbetonung.

### `||` vor `|` (Sonderfall 1, b=1)

Endet der Halbvers mit einer Nebenbetonung (Hauptbetonung liegt früher):
```
den 3Herrn, 2den 1wir ||sehen |werden.
```
Der Formatter erkennt dies automatisch (|| steht im Text vor |) und singt `||`+Folgesilben auf den vorletzten, `|`+Folgesilben auf den letzten Kadenzton.

### `||` vor `|` (b=2)

Bei b=2-Tönen kann `||` ebenfalls vor `|` stehen:
```
Du wirst sein Volk mit der Erfah2rung°1des°||Heils be|schen0ken^*
```
Der Formatter behandelt `||` als Kadenzanfang (T4), die Silben dazwischen als T3, `|` als T2.

### Flexa mit männlichem Versschluss (einzelnes `|`)

```
nahe bei |Gott,^+
```
→ Die Silbe **vor** `|` wird mit einem Punkt unter dem Vokal versehen. Kein `||` in Flexa-Zeilen.

### Flexa mit weiblichem Versschluss (`~`)

```
im°Her0zen°~trägt er^+
```
→ Die durch `~` verbundenen Silben werden geklammert.

---

## Typographische Zeichen

Beim Schreiben der Datei niemals ersetzen:

| Zeichen | Korrekt | Nicht |
|---------|---------|-------|
| Öffnende Anführungszeichen | `„` (U+201E) | `"` |
| Schließende Anführungszeichen | `“` (U+201C) | `"` |
| Apostroph | `’` (U+2019) | `'` |

---

## Schnell-Referenz: Marker-Übersicht

| Marker | Wo | Bedeutung |
|--------|----|-----------|
| `\|`   | vor Silbe | Nebenbetonung / Kadenzanfang bei b=2 |
| `\|\|` | vor Silbe | Hauptbetonung |
| `1` `2` `3` | vor Silbe | Countdown zur Hauptbetonung hin |
| `4` | vor Silbe | männl. Versende SK: **immer** wenn `||` keine nachtonige Silbe folgt |
| `43` | direkt vor `\|` | Verkürzte Kadenz (4+3 auf einer Silbe) |
| `~` | vor Silbe | T3/T2-Gruppengrenze (nur b=2) |
| `0` | vor Silbe | Silbengrenze innerhalb eines Worts |
| `^*` | am HV-Ende | Mittelkadenz |
| `^p` | am HV-Ende | Schlusskadenz |
| `^+` | am HV-Ende | Flexa |
| `°` | zwischen Worten | Stellvertreter für geschütztes Leerzeichen, bezeichnet also auch eine Silbengrenze |
