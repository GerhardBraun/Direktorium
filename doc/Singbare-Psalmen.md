# Singbare Psalmen (Sprachvariante `_cant`)

**Stand:** Februar 2026
**Status:** Arbeitsplan / in Planung

---

## 1. Ziel und Hintergrund

In der App soll eine neue Textvariante der Psalmen eingeführt werden, in der die Verse für den Gesang nach einem Psalmodie-Modell eingerichtet sind. Beim Gesang wird jeder Halbvers auf einem Rezitationston gesungen; am Ende jedes Halbverses gibt es eine melodische Kadenz (je nach Modus 2–5 Töne). Im Text wird die Einrichtung durch zwei Arten von Markierungen angezeigt:

1. **Kadenz-Beginn (Unterstreichung):** Die erste Silbe, die vom Rezitationston abweicht, wird unterstrichen. Dafür ist das Tag-Paar `^u ... ^0u` bereits im TextFormatter vorhanden.
   - `^u` steht unmittelbar vor dem ersten Buchstaben der Silbe (also vor dem Anlaut-Konsonanten, falls vorhanden), `^0u` unmittelbar hinter dem letzten Buchstaben der Silbe (hinter dem Auslaut-Konsonanten, falls vorhanden). Das Tag-Paar umschließt die Silbe also vollständig.

2. **Silbenverbindung (Klammer):** Silben, die innerhalb der Kadenz auf denselben Ton gesungen werden, werden zusammengebunden. Im Gotteslob geschieht dies durch eine eckige Klammer unter den Silben. Neu einzuführen: Tag-Paar `^b ... ^0b`.
   - `^b` steht **vor dem silbenbildenden Vokal** der ersten zu klammernden Silbe (also nach etwaigen Anlaut-Konsonanten), `^0b` steht **hinter dem silbenbildenden Vokal** der letzten zu klammernden Silbe (also vor etwaigen Auslaut-Konsonanten).
   - Es können zwei, gelegentlich auch drei oder vier Silben zusammengeklammert werden.
   - **Sonderfall Diphthong:** Wird die Silbe von einem Diphthong gebildet, steht `^b` bzw. `^0b` zwischen den beiden Vokalen des Diphthongs.

**Beispiel (Ps 36,2 in der Einrichtung):**
```
Der Frevler spricht: „Ich°bin°ent^uschlos^0us^ben°zu^0bm°Bösen."^*
```
- `^u...^0u` → Silbe „schlos" vollständig umschlossen (Kadenz-Beginn)
- `s` vor `^b` = Anlaut-Konsonant der Silbe „-sen" (aus „entschlossen"); `m` nach `^0b` = Auslaut-Konsonant der Silbe „zum"
- `^b...^0b` → Vokale „e" (aus „-sen") und „u" (aus „zum") auf demselben Kadenz-Ton geklammert

**Weiteres Beispiel (Schlusskadenz, Diphthong):**
```
auf ^uim^0um^ber u^0bnd ewig.
```
- „im" (aus „immer") = Kadenz-Beginn, vollständig unterstrichen
- „m" = Anlaut von „mer"; `^b` vor Vokal „e"; Vokal „u" von „und"; `^0b` vor Auslaut „nd"
- → Vokale „e" (aus „mer") und „u" (aus „und") auf demselben Ton geklammert

**Diphthong-Beispiel:**
```
scha^buen wi^0br
```
- „schauen": Anlaut „sch" + erstes Diphthong-Vokal „a"; `^b` zwischen „a" und „u" des Diphthongs „au"
- „wir": erstes Diphthong-Vokal „i"; `^0b` zwischen „i" und zweitem Vokal bzw. vor Auslaut „r"

**Cantica** (Nummern > 150 in PsHymn.ts) werden genau wie Psalmen behandelt und können ebenfalls eingerichtet werden; es ist kein gesonderter Aufwand nötig.

### 1.2 Systematik der Kadenzeinrichtung

#### Prinzip

Am Ende jedes Halbverses bestimmt man von rechts, welche Silben zur Kadenz gehören. Die Kadenzstruktur eines Psalmtons wird durch zwei Zahlen beschrieben:

- **b** = Anzahl der **betonten Silben**, die von der letzten betonten Silbe rückwärts in die Kadenz einbezogen werden (1 oder 2)
- **v** = Anzahl der **vorhergehenden (betonten oder unbetonten) Silben** vor der ersten dieser betonten Silben, die ebenfalls zur Kadenz gehören

Vorgehen:
1. Letzte betonte Silbe des Halbverses bestimmen; wenn b = 2, auch die vorletzte betonte Silbe.
2. Von diesen beiden letzten betonten Silben erhält die Hauptbetonung das Tag `||`, die Nebenbetonung das Tag `|`.
3. Von der Silbe mit der Hauptbetonung (`||`) werden v Silben rückwärts gezählt.
4. Je nach Kombination von b und v ergibt sich der Anfang der Kadenz (siehe 1.3, Nr. 3): hier wird `^u` gesetzt (erste Silbe, die vom Rezitationston abweicht), am Ende dieser Silbe `^0u`.
5. Silben, die innerhalb der Kadenz auf denselben Ton gesungen werden, erhalten `^b … ^0b`.

Das Paar **v – b** gilt je getrennt für die **Mittelkadenz** (vor `^*`) und die **Schlusskadenz** (am Versende).

#### Tabelle: Kadenzstruktur der neun Psalmtöne

| Psalmton | Mittelkadenz (v – b) | Schlusskadenz (v – b) |
|----------|---------------------|-----------------------|
| I        | 0 – 2               | 2 – 1                 |
| II       | 0 – 1               | 1 – 1                 |
| III      | 0 – 2               | 2 – 1                 |
| IV       | 2 – 1               | 3 – 1                 |
| V        | 0 – 1               | 0 – 2                 |
| VI       | 1 – 1               | 3 – 1                 |
| VII      | 0 – 2               | 0 – 2                 |
| VIII     | 0 – 1               | 2 – 1                 |
| IX *(Tonus peregrinus)* | 0 – 2          | 2 – 1                 |
| X *(Tonus irregularis)* | 0 – 1          | 0 – 2                 |

#### Beobachtungen

- **Schlusskadenz:** Fast alle Töne haben b = 1 (nur die letzte betonte Silbe). Ausnahmen: Ton V, VII und X (b = 2, also letzte und vorletzte betonte Silbe).
- **Mittelkadenz:** Die Mehrheit hat b = 2; Ausnahmen: Ton II, V, VIII, X (b = 1).
- **Vorhergehende Silben:** v = 0 ist häufig; die längsten Anläufe haben Ton IV (v = 2 + 3) und Ton VI (v = 1 + 3).
- **Schlüsseleigenschaft:** b = 2 tritt **ausschließlich** mit v = 0 auf, und v > 0 **ausschließlich** mit b = 1. Die fünf Marker decken daher alle Fälle eindeutig ab.

#### Übersicht: Töne mit gleicher Struktur in Mittel- UND Schlusskadenz

Für Psalmtöne, die in beiden Kadenzen dieselbe v–b-Kombination aufweisen, ergibt sich beim abstrakten Markierungssystem (§1.3) eine identische Einrichtung mit Unterstreichungen und Klammern — der Text muss also nur einmal markiert werden und funktioniert für alle Töne dieser Gruppe.

| Gruppe | Psalmtöne | Mittelkadenz | Schlusskadenz |
|--------|-----------|-------------|---------------|
| **A**  | I, III, IX | 0 – 2       | 2 – 1         |
| **B**  | V, X       | 0 – 1       | 0 – 2         |
| –      | II         | 0 – 1       | 1 – 1         |
| –      | IV         | 2 – 1       | 3 – 1         |
| –      | VI         | 1 – 1       | 3 – 1         |
| **C**  | VII        | 0 – 2       | 0 – 2         |
| –      | VIII       | 0 – 1       | 2 – 1         |

**Ergebnis:**
- **Gruppe A (I, III, IX):** Alle drei Töne haben identische Kadenzstruktur (0–2 / 2–1). Psalmen, die für einen dieser Töne eingerichtet sind, lassen sich ohne Änderung des Textes auch in den anderen beiden Tönen singen.
- **Gruppe B (V, X):** Die beiden Töne haben identische Kadenzstruktur (0–1 / 0–2). Psalmen, die für einen dieser Töne eingerichtet sind, lassen sich ohne Änderung des Textes auch im anderen Ton singen.
- **Gruppe C (VII):** Der Ton mit gleicher Mittel- und Schlusskadenz (0–2 / 0–2). Formal identisch in sich, aber keine Überschneidung mit Gruppe A (Mittel- oder Schlusskadenz unterscheidet sich).
- **Alle anderen Töne** (II, IV, VI, VIII) haben eine jeweils einzigartige Kombination.

> **Folgerung für die Doxologie:** Da die Doxologie ebenfalls mit dem abstrakten Markierungssystem (§1.3) versehen wird, genügt **ein einziger String für alle Psalmtöne** — `formatCantMarker` rendert ihn je nach `text_mode` unterschiedlich (→ §5.3).

### 1.3 Abstraktes Markierungssystem für `text_cant`

Anstelle von tonspezifischen `^u`/`^b`-Tags enthält `text_cant` eine abstrakte Notation mit acht einfachen Markern, die keine eigene Schließ-Form benötigen und in normalen Psalmtexten nicht vorkommen:

| Marker | Bedeutung | Zählrichtung |
|--------|-----------|--------------|
| `\|`   | letzte Silbe mit Nebenbetonung | – |
| `\|\|` | letzte Silbe mit Hauptbetonung | – |
| `1`    | 1. vorhergehende Silbe (unmittelbar vor der letzten Hauptbetonung) | Countdown |
| `2`    | 2. vorhergehende Silbe | |
| `3`    | 3. vorhergehende Silbe | |
| `4`    | 4. vorhergehende Silbe — nur bei männlichem Versende in der **Schlusskadenz** (b = 1): signalisiert dem Formatter, v+1 zu verwenden (→ Sonderfall 3) | |
| `~`    | Silbengruppengrenze (überschreibt Standardzusammenfassung bei b = 2) | – |
| `0`    | Silbengrenze innerhalb der Kadenz (wo nicht bereits durch andere Marker erkennbar); vereinfacht die Verarbeitung durch `formatCantMarkers` | – |

Die Marker stehen **unmittelbar vor** dem ersten Buchstaben der jeweiligen Silbe (also vor einem etwaigen Anlaut-Konsonanten). Mehrere Marker können unmittelbar hintereinander vor derselben Silbe stehen, wenn diese Silbe mehrere Rollen übernimmt (z. B. `2|` = 2. vorhergehende Silbe und Nebenbetonung).

Die Countdown-Marker `4`,`3`, `2`, `1` zählen immer **zur `||`-Silbe hin** (letzte Hauptbetonung).

**Beispiel:** `|3im2mer 1und ||ewig.`
aber: `den 3Herrn, 2den 1wir ||sehen |werden.`

| Marker(n) | Silbe | Rolle |
|-----------|-------|-------|
| `\|3`   | im    | vorletzte betonte Silbe (Nebenbetonung) *und* 3. vorhergehende |
| `2`       | mer   | 2. vorhergehende Silbe |
| `1`       | und   | 1. vorhergehende Silbe |
| `\|`      | ewig  | letzte betonte Silbe (Hauptbetonung) |

**Wie `formatPsalmText` die Marker auswertet:**

1. Der Formatter ermittelt anhand von `text_mode` die Werte `{v, b}` aus der Kadenzstruktur-Tabelle (§1.2).
2. Der **Kadenzanfang** (erste Silbe, die vom Rezitationston abweicht) ergibt sich aus `b` und `v`:
   - b = 2, v = 0 → Kadenzanfang bei `|` oder `||`, je nachdem, welches der beiden Tags als erstes steht
   - b = 1, v = 0 → Kadenzanfang bei `||`
   - b = 1, v = 1 → Kadenzanfang bei `1`
   - b = 1, v = 2 → Kadenzanfang bei `2`
   - b = 1, v = 3 → Kadenzanfang bei `3`
   - b = 1, Marker `4` vorhanden → v_eff = v+1; Kadenzanfang beim Marker, der v_eff entspricht (Sonderfall 3): bei v=3 also bei `4`, bei v=2 bei `3`, bei v=1 bei `2`
3. **Alle Silben** vom Kadenzanfang bis zum Versende gehören zur Kadenz. Sofern nicht nicht schon einen funtionellen Marker haben, wird die Silbengrenze mit dem Marker `0` gekennzeichnet.
4. Die erste Kadenzsilbe erhält die **Unterstreichung** (`^u`-Äquivalent).
5. **Tonzuweisung für b = 1** (alle Fälle):
   - Die `||`-Silbe fällt auf den **vorletzten Kadenzton**.
   - Folgende unbetonte Silben bis zum Halbversende fallen auf den **letzten Kadenzton** und werden mit `^b` geklammert.
   - Folgt **keine** unbetonte Silbe nach `||` → letzter Ton entfällt (männliches Versende in der **Mittelkadenz**, Sonderfall 2); keine besondere Markierung nötig.
   - Ist ein `4`-Marker im Halbvers vorhanden → männliches Versende in der **Schlusskadenz** (Sonderfall 3): `||` fällt auf den **letzten** Kadenzton; Kadenzanfang bei `v+1`; → siehe Sonderfall 3.
   - Folgt nach `||` noch ein `|` → Sonderfall 1 (→ unten): `||` + Folgesilben bis vor `|` → vorletzter Ton; `|` + Folgesilben → letzter Ton.
   - Ein `|` **vor** `||` ist der Normalfall (Nebenbetonung eines früheren Halbverswortes) und wird bei b = 1 ignoriert.
6. **Tonzuweisung für b = 2** (die Reihenfolge von `|` und `||` im Text ist irrelevant; maßgeblich ist die Position im Halbvers):
   > Die Countdown-Marker `1`, `2`, `3`, `4` spielen bei b = 2 keine Rolle für die Tonzuweisung.
   - Die **früher** im Halbvers stehende betonte Silbe → **viertletzter Kadenzton**, erhält die Unterstreichung.
   - **Weiblicher Versschluss** (Normalfall — die letzte Silbe des Halbverses ist unbetont):
     - Alle Silben zwischen erster und zweiter betonter Silbe → **drittletzter Ton**, mit `^b` geklammert.
     - Zweite betonte Silbe → **vorletzter Ton**.
     - Folgesilben bis Halbversende → **letzter Ton**, mit `^b` geklammert.
   - **Männlicher Versschluss** (Sonderfall — die letzte Silbe des Halbverses ist die zweite betonte Silbe, keine Folgesilbe):
     - **Erste** Silbe nach erster betonter → **drittletzter Ton** (allein).
     - **Weitere** Silben bis vor zweite betonte → **vorletzter Ton**, mit `^b` geklammert (wenn mehr als eine).
     - Zweite betonte Silbe (Versende) → **letzter Ton**.
   - **Tilde `~`** (überschreibt Standardzusammenfassung): Steht `~` im Text zwischen Silben, definiert sie die Gruppengrenze: Silben bis zur Tilde → drittletzter Ton; Silben nach der Tilde → vorletzter Ton. Ohne Tilde gilt die Standardregel (weiblich oder männlich).
   - **Sonderfall: nur eine Silbe zwischen den beiden Betonten** (männliches Versende): Steht zwischen erster und zweiter betonter Silbe nur eine einzige Silbe, fehlt eine Stelle für den drittletzten Ton. In diesem Fall hat auch die **drittletzte betonte Silbe** einen `|`-Marker. **`formatPsalmText` behandelt dies als Sonderfall (zwei `|`- und ein `||`-Marker).**

   **Beispiele:**

   *Weiblicher Versschluss (Normalfall):*
   - Markierung: `mit ||Psalmen und |Saitenspiel`
   - Rendering: `mit ^uPsal^0um^ben u^0bnd Sait^benspi^0bel`
   - Gruppen: „Psal" (4.) | „men und" (3., geklammert) | „Sait" (2.) | „tenspiel" (1., geklammert)

   *Männlicher Versschluss, Standardzusammenfassung:*
   - Markierung: `mit ||Pauken und |Tanz` → `mit ^uPau^0uken und Tanz`
     Gruppen: „Pau" (4.) | „ken" (3.) | „und" (2.) | „Tanz" (1.)
   - Markierung: `mit ||Flöten und Ge|sang` → `mit ^uFlö^0uten ^bund Ge^0bsang`
     Gruppen: „Flö" (4.) | „ten" (3.) | „und Ge" (2., geklammert) | „sang" (1.)

   *Männlicher Versschluss mit Tilde (abweichende Zusammenfassung):*
   - Markierung: `mit ||Flöten~und Ge|sang` → `mit ^uFlö^0ut^ben u^0bnd Gesang`
     Gruppen: „Flö" (4.) | „ten und" (3., geklammert) | „Ge" (2.) | „sang" (1.)
   - Die Tilde verschiebt „und" von der 2. in die 3. Gruppe (gegenüber dem vorherigen Beispiel).

   *Männlicher Versschluss, Sonderfall: nur eine Silbe zwischen den Betonten:*
   - Problem: `und wir finden |neues ||Glück.` — zwischen `|neu` und `||Glück` steht nur „es"; der drittletzte Ton bleibt unbesetzt.
   - Lösung: zusätzliches `|` auf der drittletzten Silbe:
     `und wir |finden |neues ||Glück.`
   - Gruppen: „fin" (4.) | „den" (3.) | „neu es" (2., geklammert ) | „Glück" (1.)
   - `formatPsalmText` rendert dies als Sonderfall:
   - **Sonderfall: drei betonte Silben (männliches Versende mit `||` und zweimal `|`):** Kommen in einem Halbvers neben `||` noch zwei `|`-Marker vor (insgesamt drei betonte Silben), gelten für die vier Kadenz-Töne folgende Zuordnungen:
     - 1. Kadenzton: erste betonte Silbe (`|`), ggf. durch Tilde verbundene weitere Silbe(n).
     - 2. Kadenzton: alle weiteren (unbetonten) Silben bis zur zweiten betonten Silbe (`|`) ausschließlich; wenn mehrere: durch `^b` geklammert.
     - 3. Kadenzton: die zweite betonte Silbe (`|`) und die folgende unbetonte Silbe, durch `^b` geklammert.
     - 4. Kadenzton: die abschließende betonte Silbe (`||`).
7. Nicht aktive Marker (z. B. `3`-Silbe bei v < 3) werden ignoriert; ihre Silben bleiben auf dem Rezitationston.

**Stapelbarkeit:** Countdown-Marker und `||` bzw. `|` können unmittelbar hintereinander vor derselben Silbe stehen, wenn diese Silbe beide Rollen übernimmt (z. B. `2|se` = 2. vorhergehende Silbe *und* Nebenbetonung).

**Konsequenz für die Datenerfassung:** Ein Text wird *einmal* mit dem abstrakten System markiert und ist dann für jeden Psalmton verwendbar. Bei Tonwechsel (z. B. durch Nutzerauswahl, §10 Nr. 6) passen sich Unterstreichung und Klammern automatisch an.

#### Sonderfall 1: Nebenbetonung am Versende (für b = 1)

Im Normalfall trägt die letzte betonte Silbe den Hauptakzent des Halbverses. Es gibt aber Fälle, in denen der Halbvers mit einer **Nebenbetonung** endet, während die **Hauptbetonung** früher liegt.

**Beispiel:** „den wir sehen werden"
- Hauptbetonung: **SE**-hen
- letzte Betonung (Nebenbetonung): **WER**-den

In der Kadenz wird dann die **Hauptbetonung** mit ihren folgenden unbetonten Silben auf den vorletzten Kadenzton gesungen, die **Nebenbetonung** mit ihren folgenden Silben auf den letzten Ton. Der zugehörige `^u`/`^b`-Rendering-Output wäre:
```
den wir ^us^be^0uhe^0bn w^berde^0bn.
```
- „se" unterstrichen (Kadenzanfang), „se" + „he" geklammert (vorletzter Ton)
- „wer" + „de" geklammert (letzter Ton); Auslaut „n" jeweils außerhalb der Klammer

**Abstrakte Markierung** (erweitertes Beispiel mit mehr vorhergehenden Silben):
```
den 3Herrn, 2den 1wir ||sehen |werden.
```
- `3Herrn,` = 3. vorhergehende Silbe (vor der Hauptbetonung)
- `2den` = 2. vorhergehende Silbe
- `1wir` = 1. vorhergehende Silbe (unmittelbar vor der Hauptbetonung)
- `||sehen` = Hauptbetonung
- `|werden` = letzte Betonung (Nebenbetonung)

> **Grundregel für die Zählrichtung:** Die Countdown-Marker `1`, `2`, `3` zählen immer **zur `||`-Silbe hin**, nicht zur `|`-Silbe.

**Erkennung durch `formatPsalmText`:** Wenn bei b = 1 im Halbvers das `||`-Tag vor dem `|`-Tag steht, liegt der Sonderfall vor. `formatPsalmText` wechselt dann zur Nebenbetonungs-Logik: alle Silben von der ersten aktiven Countdown-Silbe (oder von `||`, falls kein aktiver Countdown) bis zum Versschluss bilden die Kadenz; alle Silben von `||` bis vor `|` gehen auf den vorletzten Kadenzton; die Silbe ab `|` und ihre Folgesilben gehen auf den letzten Ton.

> **Hinweis:** Dieser Sonderfall tritt nur bei b = 1 auf. Bei b = 2 macht die Reihenfolge von `||` und `|` keinen Unterschied.

#### Sonderfall 2: Männliches Versende in der Mittelkadenz (b = 1)

Endet ein Halbvers mit der betonten `||`-Silbe und folgt keine weitere unbetonte Silbe, so entfällt der letzte Kadenzton: Die `||`-Silbe trägt allein den vorletzten Ton; der letzte Ton bleibt unbesetzt.

**Beispiel:** „… auf den ||Herrn.^*" — nach `||Herrn` folgt keine weitere Silbe; `^b`-Klammer entfällt; letzter Ton wird ausgelassen.

**Erkennung und Rendering durch `formatPsalmText`:** Folgen nach `||` keine weiteren Silben (und kein `|`) bis zum Halbversende (`^*`), lässt der Formatter den letzten Kadenzton automatisch aus. **Im abstrakten Markierungstext ist keine zusätzliche Notation erforderlich** — der Fall ergibt sich aus dem Textende.

#### Sonderfall 3: Männliches Versende in der Schlusskadenz (b = 1)

In der **Schlusskadenz** verhält sich das männliche Versende anders als in der Mittelkadenz: Der Akzent wandert auf den **letzten** Ton der Kadenz (statt dass er entfällt). Dadurch wird eine vorhergehende Silbe mehr benötigt als im weiblichen Versschluss.

**Lösung:** Der Bearbeiter markiert **vier** vorhergehende Silben (statt drei). Das `4`-Tag an der vierten vorhergehenden Silbe signalisiert dem Formatter den Sonderfall.

**Beispiel:** „seine Krankheit ver`4|`wan`3`delst `2`du `1`in `||`Kraft."
- `4|wan` = 4. vorhergehende Silbe + Nebenbetonung
- `3delst`, `2du`, `1in` = 3., 2., 1. vorhergehende Silbe
- `||Kraft` = Hauptbetonung auf dem letzten Kadenzton (kein Ausfall, kein Anhang)

**Erkennung und Rendering durch `formatPsalmText`:** Ist in einem Halbvers (vor `^p`) ein `4`-Marker vorhanden, setzt der Formatter v_eff = v+1 und bestimmt den Kadenzanfang beim Marker, der v_eff entspricht (bei v=3: `4`; bei v=2: `3`; bei v=1: `2`). `||` fällt auf den **letzten** Kadenzton.

#### Sonderfall 4: Flexa (Halbversende mit `^+`)

Die Flexa bezeichnet einen melodischen Einschnitt innerhalb eines langen Halbverses (Markierung `^+`). Sie hat eine eigene, einfache Kadenzformel. `formatCantMarkers` verarbeitet Flexa-Abschnitte nach folgenden Regeln:

| Situation | Verhalten |
|-----------|-----------|
| `\|`-Tag im Flexa-Abschnitt | Männlicher Versschluss: die Silbe **vor** `\|` wird unterstrichen. |
| `~` im Flexa-Abschnitt | Weiblicher Versschluss: durch `~` verbundene Silben werden durch `^b` geklammert. |
| Weder `\|` noch `~` | Normalfall: keine Markierung erforderlich. |

---

## 2. Neue Felder in den Daten

### 2.1 Excel-Arbeitsblatt „PsalmenHymnen"

Zwei neue Spalten werden ergänzt:

| Spalte | Typ | Bedeutung |
|--------|-----|-----------|
| `Text_cant` | Text | Psalm-Text für den Gesang, mit den Markern der abstrakten Notation |
| `Text_mode` | Text | Modus/Psalmton: römische Zahl I–X (wobei IX = Tonus peregrinus, X = Tonus irregularis) |

### 2.2 TypeScript-Interface (PsHymn.ts)

Neue optionale Felder in `PsalmSection`:
```typescript
text_cant?: string;   // Text für den Gesang
text_mode?: string;   // Psalmton (z.B. "VIII", "IX", "X")
```

---

## 3. Änderungen in `converter.py`

### 3.1 Einlesen der neuen Spalten

In der Funktion `convert_excel_to_psalms_data` (ca. Zeile 1163) werden analog zu `Text_neu` und `Text_ben` zwei weitere Zeilen ergänzt:

```python
if pd.notna(row['Text_cant']): entry['text_cant'] = str(row['Text_cant'])
if pd.notna(row['Text_mode']): entry['text_mode'] = str(row['Text_mode'])
```

### 3.2 Validierung

In `validate_psalm_text` wird `Text_cant` auf die Vers-Struktur geprüft (paarweise `^*`/`^p`-Trennzeichen usw.). Eine Paar-Validierung für `^u`/`^b`-Tags entfällt, da `text_cant` ausschließlich die abstrakte Notation enthält (`|`, `||`, `1`–`4`, `~`, `0`) und keine schließenden Tags.

- `Text_mode` muss dem Muster `^(I{1,3}|IV|V?I{0,3}|VIII|IX|X)` entsprechen (also I–X), falls vorhanden.

### 3.3 Ausgabe-Interface

Das generierte TypeScript-Interface in `PsHymn.ts` erhält die beiden neuen Felder.

---

## 4. Neue Sprachvariante `_cant`

### 4.1 Eigenschaften

- Kennung: `_cant`
- Es handelt sich um eine **deutsche** Variante → `localPrefLatin` bleibt `false`
- Die Fallback-Logik ist analog zu `_neu` und `_ben`
- Kein „Unlock"-Mechanismus nötig (anders als `_ben`)

### 4.2 Fallback-Logik in `TextFormatter.js` – `formatPsalm()`

Bestehende Fallback-Kette (vereinfacht):
```javascript
const text = psalm[`text${localPrefLanguage}`] || psalm.text;
```

Für `localPrefLanguage === '_cant'` greift also:
1. `psalm.text_cant` – falls vorhanden: Gesangstext mit Markierungen
2. `psalm.text` – Fallback: normaler Stundenbuch-Text (ohne Gesangsmarkierungen)

Dieselbe Fallback-Logik gilt für `title`, `verses`, `quote`.

**`text_mode`** ist ein Sonderfall: Es wird nur ausgewertet, wenn `localPrefLanguage === '_cant'` und `psalm.text_mode` vorhanden ist (also nicht beim Fallback auf Standard-Text).

### 4.3 `formatCantMarkers` – Implementierung als Subroutine

Es gibt keine eigenständige Funktion `formatPsalmText`. Stattdessen ruft `formatPsalm()` die bestehende Funktion `formatPrayerText()` mit dem Marker `'cant'` auf und übergibt den Psalmton (`text_mode`) über den Parameter `hour`:

```javascript
formatPrayerText(text, 'cant', psalm.text_mode /* als hour */);
```

In `formatPrayerText` gilt:
- Wird `marker === 'cant'` erkannt, wird der `hour`-Wert in eine lokale Konstante `mode` übernommen und `hour` auf `''` gesetzt, um unerwünschte Nebeneffekte zu verhindern.
- Anschließend ruft `formatPrayerText` die Subroutine `formatCantMarkers(text, mode)` auf (analog zu `replaceNames` oder `processInlineFormats`).

`formatCantMarkers` liest die abstrakten Marker (`|`, `||`, `1`–`4`, `~`, `0`) halbversweise aus und erzeugt daraus die `^u`/`^b`-Tags für Unterstreichung und Klammerung (→ §1.3).

---

## 5. Doxologie im Gesangsmodus

### 5.1 Anforderung

Die Doxologie „Ehre sei dem Vater …" wird mit dem Psalm gesungen und muss daher ebenfalls mit Kadenzmerkierungen versehen sein. Da die Kadenz je nach Psalmton verschieden ist, wird die Doxologie-Konstante in `formatPsalm()` nicht mehr nur binär (lat./dt.) gewählt, sondern über eine **switch-Routine nach `text_mode`** bestimmt.

Der aktuelle Code (vereinfacht):
```javascript
const doxology =
    (localPrefLanguage === "_lat" && psalm.text_lat)
        ? "Glória Patri ..."
        : "Ehre sei dem Vater ...";
```

### 5.2 Neue Struktur

Da die Doxologie mit dem abstrakten Markierungssystem (§1.3) versehen wird, entfällt der `switch` nach `text_mode`. Der Text wird – analog zu den anderen beiden Fällen – direkt im `return` übergeben:

```javascript
const getDoxology = (localPrefLanguage, psalm) => {
    if (localPrefLanguage === "_lat" && psalm.text_lat) {
        return "Glória Patri et Fílio^*"
             + "et Spirítui Sancto.^p"
             + "Sicut erat in princípio^*"
             + "et in sáecula saeculórum. Amen.";
    }
    if (localPrefLanguage === "_cant" && psalm.text_cant) {
        return "Ehre sei dem |Vater 2und 1dem ||Sohn^*"
             + "und dem 3|Hei2li1gen ||Geist,^p"
             + "wie im Anfang, so°auch°2|jetzt°1und°||alle°Zeit^*"
             + "und in 3|E2wig1keit. ||Amen.";
    }
    return "Ehre sei dem Vater und dem Sohn^*"
         + "und dem Heiligen Geist,^p"
         + "wie im Anfang, so°auch°jetzt°und°alle°Zeit^*"
         + "und in Ewigkeit. Amen.";
};
```

### 5.3 Doxologie mit abstraktem Markierungssystem

**Marker-Erläuterung** (derselbe Text gilt für alle Psalmtöne):

#### Marker-Erläuterung pro Halbvers

**HV 1 – Mittelkadenz** (`Ehre sei dem |Vater 2und 1dem ||Sohn`):

| Marker | Silbe | Bedeutung |
|--------|-------|-----------|
| `\|`   | Va (aus „Vater") | Nebenbetonung |
| `2`    | und | 2. vorhergehende Silbe |
| `1`    | dem | 1. vorhergehende Silbe |
| `\|\|` | Sohn | Hauptbetonung |

> Die Nebenbetonung fällt hier auf die erste Silbe von „Vater" (`|Va`), während die zweite Silbe (`ter`) bereits als vorhergehende Silbe zum Countdown gehört — beide Marker stehen auf verschiedenen Silben desselben Wortes.

**HV 2 – Schlusskadenz** (`und dem 3|Hei2li1gen ||Geist,`):

| Marker | Silbe | Bedeutung |
|--------|-------|-----------|
| `3\|`  | Hei (aus „Heiligen") | 3. vorhergehende Silbe **und** Nebenbetonung (gestapelt) |
| `2`    | li | 2. vorhergehende Silbe |
| `1`    | gen | 1. vorhergehende Silbe |
| `\|\|` | Geist | Hauptbetonung |

**HV 3 – Mittelkadenz** (`wie im Anfang, so°auch°2|jetzt°1und°||alle°Zeit`):

| Marker | Silbe | Bedeutung |
|--------|-------|-----------|
| `2\|`  | jetzt | 2. vorhergehende Silbe **und** Nebenbetonung (gestapelt) |
| `1`    | und | 1. vorhergehende Silbe |
| `\|\|` | alle | Hauptbetonung; „Zeit" als Koda (°) auf demselben Ton |

**HV 4 – Schlusskadenz** (`und in 3|E2wig1keit. ||Amen.`):

| Marker | Silbe | Bedeutung |
|--------|-------|-----------|
| `3\|`  | E (aus „Ewigkeit") | 3. vorhergehende Silbe **und** Nebenbetonung (gestapelt) |
| `2`    | wig | 2. vorhergehende Silbe |
| `1`    | keit | 1. vorhergehende Silbe |
| `\|\|` | Amen | Hauptbetonung |

#### Verhalten je nach `text_mode`

- **b = 2, v = 0** (z. B. Ton I Mittelkadenz): `1`/`2`/`3`-Marker inaktiv; Silben zwischen `|` und `||` sind Füllsilben der Kadenz. Kadenz beginnt bei `|`.
- **b = 1, v = 0** (z. B. Ton VIII Mittelkadenz): Kadenz beginnt bei `||`. Folgesilben → letzter Ton, `^b`-geklammert. `|` vor `||` wird ignoriert (Normalfall, kein Sonderfall).
- **b = 1, v = 2** (z. B. Ton I Schlusskadenz): Kadenz beginnt bei `2`. `1`, `2`, `||` aktiv; `|` vor `||` wird ignoriert.
- **b = 1, v = 3** (z. B. Ton IV Schlusskadenz): Kadenz beginnt bei `3`. `1`, `2`, `3`, `||` aktiv; `|` vor `||` wird ignoriert.

---

## 6. UI-Änderungen

### 6.1 ThemeMenu (`Direktorium.js`)

#### `getLanguageName` ergänzen:
```javascript
case "_cant": return "Psalmen zum Singen eingerichtet";
```

#### Legende:
```jsx
{renderDescriptionItem("cant:", "Psalmen zum Singen eingerichtet")}
```

#### Sprachauswahl-Grid – 5 gleich breite Buttons:

„Stundenbuch" wird auf „StB" abgekürzt; alle 5 Buttons erhalten gleiche Breite (`col-span-1`):

```jsx
<div className="grid grid-cols-5 gap-0">
  {LanguageButton("",      "StB")}
  {LanguageButton("_lat",  "lat.")}
  {unlockBenedictine && LanguageButton("_ben", "Ben")}
  {LanguageButton("_neu",  "neu")}
  {LanguageButton("_cant", "cant")}
</div>
```

> Wenn `_ben` ausgeblendet ist (kein `unlockBenedictine`), verbleiben 4 gleich breite Buttons (kein Layout-Problem, da das Grid sich anpasst).

Die Beschriftung „Sing." wird in der Legende erläutert. Die Legende-Zeile für StB wird ebenfalls angepasst:
```jsx
{renderDescriptionItem("StB:", "Stundenbuch: Einheitsübersetzung von 1983", false)}
```

### 6.2 LanguageProgress (`languageProgress.js`)

Ein neuer Abschnitt wird am Ende des `progressText`-Strings ergänzt:

```
^p^fPsalmen zum Singen eingerichtet^0f^lDer Bestand der Psalmen und Cantica, die zum Singen nach einem Psalmodie-Modell eingerichtet sind, wird nach und nach aufgebaut. Wo diese Einrichtung noch nicht erfolgt ist, wird der Psalm einstweilen als normaler Text angezeigt.
```

---

## 7. Rendering des `^b ... ^0b`-Tags

### 7.1 Anforderungen

Die Klammer-Gruppe muss sich **visuell klar** vom Kadenz-Beginn (`^u` = einfache Unterstreichung) unterscheiden und auf mobilen Geräten gut lesbar sein.

### 7.2 Empfehlung: CSS-Klammer (⊔-Form)

CSS-Klasse `psalm-cant-bracket`:
```css
.psalm-cant-bracket {
  display: inline-block;
  border-bottom: 1px solid currentColor;
  border-left:   1px solid currentColor;
  border-right:  1px solid currentColor;
  padding-bottom: 2px;
  padding-left:   1px;
  padding-right:  1px;
}
```
Dies erzeugt eine ⊔-förmige Klammer unter dem Text, nahe an der Gotteslob-Darstellung, und funktioniert im Dark Mode (da `currentColor`).

### 7.3 Implementierung in `TextFormatter.js`

#### Regex-Pattern in `processInlineFormats` erweitern (Zeile 523):

```javascript
// ^b.*?^0b zu den anderen Inline-Formaten hinzufügen:
const segments = text.split(
  /(\^RUBR.*?\^0RUBR|\^r.*?\^0r|\^w.*?\^0w|\^f.*?\^0f|\^v.*?\^0v|\^c.*?\^0c|\^k.*?\^0k|\^u.*?\^0u|\^b.*?\^0b|\^ELL.*?\^0ELL|§FN\d+§|§PUNCT\d+§|\^STAR.*?\^0STAR)/g
).filter(Boolean);
```

#### Rendering des `^b`-Segments (nach dem `^u`-Block einfügen):

```javascript
} else if (segment.startsWith('^b')) {
    const content = segment.substring(2, segment.length - 3);
    return <span key={`cant-bracket-${index}`} className="psalm-cant-bracket">{content}</span>;
}
```

### 7.4 CSS-Klasse

Die Klasse `psalm-cant-bracket` wird in der globalen CSS-Datei (o.ä.) ergänzt.

### 7.5 Verschachtelung von `^u`- und `^b`-Tags

In bestimmten Fällen wird die Silbe des Kadenzbeginns mit der folgenden Silbe durch eine Klammer verbunden. Dann werden `^u…^0u` und `^b…^0b` verschachtelt:

```
die wir ^uscha^bu^0ue^0bn w^berde^0bn …
```

**Lösung:** Wird `^b` innerhalb eines `^u…^0u`-Abschnitts gefunden, ersetzt der Formatter es durch `^0u^b^u`:
- So entstehen zwei separate `^u…^0u`-Abschnitte: einer außerhalb des `^b`-Rahmens und einer innerhalb.
- Der innere Abschnitt kann durch einen erneuten Aufruf von `formatCantMarkers` aufgelöst werden — analog zum wiederholten Aufruf von `processInlineFormats` in der `muteStar`-Routine.

---

## 8. Notenzeile (Psalmodiemodell) zum Psalmton

### 8.1 Vorhandene Bilddateien

Im Ordner `doc/Psalmtöne/` liegt derzeit eine Datei:

| Dateiname | Format | Inhalt |
|-----------|--------|--------|
| `Psalmtöne_gesamt.png` | PNG | Gesamtübersicht aller Psalmtöne |

Die früher vorhandenen TIFF- und JPEG-Einzeldateien (je Psalmton und Variante) sind entfernt. Die für die App benötigten Einzelbilder (je `text_mode`-Wert) werden noch aus Capella exportiert (→ §8.2).

### 8.2 Bildformat: PNG direkt aus Capella exportieren

Die Bilder sollen direkt aus Capella als **PNG** exportiert werden.

**Warum PNG und nicht JPEG:**
- Notenbilder bestehen aus scharfen schwarzen Linien auf weißem Grund; JPEG-Komprimierung erzeugt dort sichtbare Artefakte (Unschärfe, Halos um Linien und Notenköpfe).
- PNG ist verlustfrei → keine Qualitätseinbuße, perfekte Kanten.
- Im Dark Mode wird `filter: invert(1)` angewendet; mit JPEG-Artefakten entstehen dabei graue Ränder; PNG-Kanten bleiben sauber.
- PNG wird von allen Browsern nativ unterstützt.

Die vorhandenen TIFF- und JPEG-Dateien in `doc/Psalmtöne/` werden nicht mehr benötigt und können durch die PNG-Exporte ersetzt werden. **Auflösung:** 150 DPI ist ausreichend, sofern die Zeile im Score mindestens 12 cm breit ist (ergibt ca. 709 px → scharf bei 2× Retina-Darstellung mit ~350 px CSS-Breite). Bei kürzeren Zeilen oder für 3×-Mobilgeräte 200 DPI wählen. Export mit **weißem, opaken Hintergrund** (nicht transparent): bei `filter: invert(1)` im Dark Mode wird weiß zu schwarz, was ein korrektes Notenbild auf dunklem Grund ergibt. Kleinen Rand (padding) im Export lassen, damit Notenlinien am Rand nicht abgeschnitten wirken.

Die PNG-Dateien kommen nach `direktorium/public/images/psalmtones/` und werden **direkt nach dem `text_mode`-Wert benannt**: `I.png`, `Ia.png`, `VIII.png`, `VIIIa.png` usw. Der Wert `irr.` erhält den Dateinamen `irr.png` (abschließender Punkt wird beim Ableiten des Dateinamens entfernt, da `irr..png` ein doppelter Punkt wäre).

### 8.3 Erweiterung der `text_mode`-Werte

Um das korrekte Bild auszuwählen, muss `text_mode` die **Kadenz-Variante** enkodieren.
Vorgeschlagene Werte (nach Prüfung anhand des Antiphonale zu bestätigen, welche Varianten tatsächlich verwendet werden):

```
I, Ia, Ig, Im
II, IIc, IIg, IIm
III
IV, IVa, IVg
V
VI
VII, VIIa
VIII, VIIIa, VIIIb, VIIIc
IX   (= Tonus peregrinus)
X    (= Tonus irregularis)
```

Die Validierungsroutine in `converter.py` (`valid_text_modes`) muss nach Klärung entsprechend erweitert werden.

### 8.4 Bildpfad: direkte Ableitung aus `text_mode`

Da die Dateinamen dem `text_mode`-Wert entsprechen, ist kein Lookup-Objekt nötig.
Da alle `text_mode`-Werte (I–X, ggf. mit Variantenbuchstabe) keine Sonderzeichen enthalten, kann der Pfad direkt abgeleitet werden:

```javascript
const psalmToneImageSrc = (mode) => `/images/psalmtones/${mode}.png`;
// Beispiele:
// 'VIII'   → '/images/psalmtones/VIII.png'
// 'VIIIa'  → '/images/psalmtones/VIIIa.png'
// 'X'      → '/images/psalmtones/X.png'
```

### 8.5 Darstellung in `formatPsalm()`

Die Notenzeile wird nach `quote` und vor dem ersten Vers eingefügt (nur im `_cant`-Modus
und wenn `text_cant` tatsächlich vorhanden ist):

```jsx
{localPrefLanguage === '_cant' && psalm.text_cant && psalm.text_mode && (
  <div className="mb-2 mt-1">
    <img
      src={psalmToneImageSrc(psalm.text_mode)}
      alt={`Psalmodiemodell Ton ${psalm.text_mode}`}
      className="psalm-tone-image max-w-full h-auto"
    />
  </div>
)}
```

### 8.6 Dark-Mode-Anpassung

Die Bilder zeigen schwarze Notation auf weißem Hintergrund.
Im Dark Mode muss das Bild invertiert werden:

```css
/* in index.css oder Tailwind-Config */
.dark .psalm-tone-image {
  filter: invert(1);
}
```

`filter: invert(1)` dreht weiß↔schwarz und ist für s/w-Notenbilder ausreichend.

---

## 9. Implementierungsschritte (Reihenfolge)

1. **Excel-Vorlage:** Spalten `Text_cant` und `Text_mode` anlegen. ✓ (geschehen)
2. **Bilder erstellen:** Psalmton-Notenzeilen als PNG aus Capella exportieren; nur die tatsächlich benötigten Varianten (nach Prüfung am Antiphonale); Zielordner `public/images/psalmtones/`.
3. **`text_mode`-Wertemenge finalisieren:** Anhand der tatsächlich verwendeten Varianten die erlaubten Werte festlegen → Validator in `converter.py` aktualisieren (§8.3).
4. **Kadenzmuster der Doxologie verifizieren:** Anhand der Gotteslob-Vorlagen die `DOXOLOGY_CANT_GROUP_*`-Strings ausarbeiten (§5.3).
5. **Testlauf:** Einige Psalmen als `text_cant` + `text_mode` erfassen und mit dem Converter ausgeben.
6. **TextFormatter.js:** Tag `^b ... ^0b` in Regex und Rendering einbauen.
7. **CSS:** Klasse `psalm-cant-bracket` anlegen.
8. **TextFormatter.js:** Bildmapping `PSALM_TONE_IMAGE`, Darstellung in `formatPsalm()`, `getCantDoxology()`-Switch.
9. **CSS:** Dark-Mode-Regel `.dark .psalm-tone-image` anlegen.
10. **Direktorium.js (ThemeMenu):** Grid auf 5 Buttons, „StB", Button + Legende für `_cant`.
11. **languageProgress.js:** Info-Text um `_cant`-Abschnitt ergänzen.
12. **Weitere Psalmen:** Schrittweiser Aufbau des Bestands.

---

## 10. Offene Punkte

| # | Thema | Aufgabe |
|---|-------|---------|
| 1 | Bilder + `text_mode`-Werte | Welche Kadenz-Varianten werden nach Antiphonale tatsächlich gebraucht? → PNG-Export der benötigten Varianten; `text_mode`-Wertemenge + Validator finalisieren |
| 2 | `formatPsalmText` + Kadenztönzahl | ✓ Erledigt: Tonzuweisungsregeln für alle Fälle (b=1, b=2, Sonderfälle 1–4) vollständig in §1.3 beschrieben. |
| 3 | Doxologie-Kadenzmuster | ✓ Erledigt: abstrakter Doxologie-String `DOXOLOGY_CANT` steht (§5.3); ein String für alle Psalmtöne. Rendering-Logik für b = 1 (inkl. Sonderfälle 1 und 2) in §1.3 spezifiziert. |
| 4 | CSS-Klammer | Liniendicke und Abstände nach Gerätansicht anpassen |
| 5 | ThemeMenu ohne `_ben` | Grid bleibt 4-spaltig wenn `unlockBenedictine` false |
| 6 | Psalmton-Auswahl durch Nutzer | **Idee (noch auszuarbeiten):** Das Notenzeilen-Bild (§8.5) wird zum Button, der ein Auswahlmenü für den Psalmton öffnet. `text_mode` ist der voreingestellte Ton (Standardvorschlag nach Antiphonale); der Nutzer kann abweichend einen anderen Ton wählen. Passt gut zum abstrakten Notationssystem (§10 Nr. 2), da der Text dann tatsächlich tonenunabhängig wiederverwendet wird. |

---

## 11. Berührte Dateien

| Datei | Art der Änderung |
|-------|-----------------|
| `excel-liturgical-converter/converter.py` | `Text_cant`, `Text_mode` einlesen + validieren (erweiterte Wertemenge nach Klärung) ✓ |
| `direktorium/src/components/data/PsHymn.ts` | Interface-Felder `text_cant`, `text_mode` (generiert) ✓ |
| `direktorium/src/components/dataHandlers/TextFormatter.js` | Tag `^b...^0b`; Bildmapping; `getCantDoxology()`-Switch |
| `direktorium/src/components/Direktorium.js` | ThemeMenu: 5 Buttons, „StB", `_cant` |
| `direktorium/src/components/ui/languageProgress.js` | Info-Text für `_cant` |
| `direktorium/src/index.css` o.ä. | `.psalm-cant-bracket`, `.dark .psalm-tone-image` |
| `direktorium/public/images/psalmtones/` | Neue Ordner + PNG-Bilder (aus TIFF konvertiert) |

