## Projektbeschreibung
Ich möchte gerne die Behandlung von Verweisen und Alternativen bei den Lesungen vereinheitlichen, verallgemeinern und straffen.
Dadurch soll die derzeitige Handhabung mit ^A- und ^Q-Tags (Schlüsselwörter für alternative Lesungen bzw. Querverweise auf die Evangelien-Datenbank) abgelöst werden.
Vorbild ist die Routine, die bisher bei ms_aps_text angewendet wird und die Daten aus der RufvdEv.ts-Datenbank abruft.

## Grundsätzliches
1. Die Stichworte (Keys), nach denen in den Datenbanken gesucht wird, werden immer in den _text-Feldern gesucht (nicht mehr in les_buch oder patr_autor, wo bisher die ^A-Tags stehen, oder les_stelle, wo bisher die ^Q-Tags stehen): für die Breviertexte also les_text und patr_text, für die Messlesungen ms_les_text, ms_aps_text, ms_les2_text, ms_ruf_text, ms_ev_text.
2. Die Auflösung der Referenzen erfolgt schon im BrevierDataProcessor, so dass das texts-Objekt alle Texte enthält und im LectureSelector nicht mehr auf die Datenbanken zugegriffen werden muss.

## Anpassung der Datenbanken
1. Evangelien.ts wird in Perikopen.ts umbenannt und wird alle referenzierten Textstellen für die biblischen Lesungen des Stundengebetshoren enthalten (Erste Lesungen der Lesehore, Evangelien der Vigilien, Kurzlesungen in Laudes, Terz, Sext, Non, Vesper).
2. RufvdEv.ts wird in Perikopen_Messe.ts umbenannt und bekommt zusätzliche Inhalte auch für die Ersten und Zweiten Lesung, die Antwortpsalmen und Evangelien.
3. converter.py wird so angepasst, dass für Perikopen_Messe.ts aus dem Tabellenblatt Perikopen_Messe liest, und zwar aus den Spalten ID, Buch, Stelle, Motto und Text (bisher nur ID, Stelle, Text).
4. Für die Erweiterung der bisherigen Evangelien.ts zur neuen Perikopen.ts wird in converter.py eine neue Funktion hinzugefügt, die aus dem Tabellenblatt Perikopen die Perikopen.ts erstellt. Vorher soll für den einmaligen Import der bisherigen Evangelien.ts in Excel eine entsprechende Konvertierung von Evangelien.ts in ein txt-Format mit tabulatorgetrennten Spalten vorgenommen werden.
5. Ein entsprechender Import ist auch für LectureAlternatives.ts in Excel nötig, damit ich auch diese Datei in Excel überarbeiten und erweitern kann. converter.py bekommt eine weitere Funktion zur Aktualisierung von LectureAlternatives.
### Anpassung von LectureAlternatives.ts
1. Wo LectureAlternative.ts bisher first und second unterscheidet, werden stattdessen künftig les_selector und patr_selector verwendet.
2. Künftig wird auch die "Standard"-Lesung, die bisher in les_text bzw. patr_text mit den dazugehörigen Feldern stand, in LectureAlternatives.ts eingetragen. Es wird also nicht mehr zwischen Standard-Lesung, die direkt im texts-Objekt steht, und Alternativ-Lesung, die anhand des ^A-Schlüsselwortes aus der Datenbank gelesen wird, unterschieden. Beide bzw. alle zur Auswahl stehenden Lesungen sind künftig in einem Array in les_selector bzw. patr_selector eingetragen.

## Prozedur im BrevierDataProcessor
Bei den finalen Verarbeitungsschritten werden in allen Horen zuerst die les_text- und patr_text-Einträge mit LectureAlternatives.ts abgeglichen, danach die dabei entstandenen les_text-Werte (im texts-Objekt selbst wie auch in den Array-Einträgen von les_selector) mit Perikopen.ts abgeglichen.
**Reihenfolge-Begründung**: Alternativen-Abgleich zuerst, weil (a) er sowohl les_text als auch patr_text betreffen kann, während Perikopen-Referenzen nur bei les_text vorkommen können (patr_text ist Väterlesung, keine Bibelstelle), und (b) dadurch auch innerhalb der neu entstandenen les_selector-Einträge im selben Zug noch enthaltene Perikopen-Referenzen aufgelöst werden können.
### bei Verweis auf alternative Lesungen (LectureAlternative.ts)
Enthält les_text oder patr_text ein Stichwort, zu dem ein Eintrag in LectureAlternatives.ts gefunden wird, wird im texts-Objekt ein Eintrag les_selector bzw. patr_selector als Array angelegt, das die Daten für die einzelnen Lesungen enthält.
Der LectureSelector erkennt dann künftig am Vorhandensein von les_selector bzw. patr_selector, dass die Auswahlbuttons angezeigt werden sollen; ansonsten kann die einfache Anzeige der Lesung erfolgen.
### bei Verweis durch Bibelstellen (Perikopen.ts)
Wenn les_text (im texts-Objekt oder in einem les_selector-Eintrag) eine Bibelstelle enthält, zu der in Perikopen.ts ein Eintrag gefunden wird, so werden diese Einträge übernommen.
les_text wird dabei auf jeden Fall überschrieben, nicht aber les_buch, les_stelle und les_text_neu, falls diese nicht leer sind. So ist eine Anpassung möglich, falls einmal für eine Perikope abweichende Angaben gelten sollen.
**Migration bei Alternativen (v.a. Vigilien) – Inkonsistenz wird behoben**: Bisher stand die Perikopen-Referenz bei den Vigilien abweichend als `^Q:Stelle` in les_stelle (aufgelöst in LectureSelector.js über `resolvePerikopen()`), während der Lookup-Key sonst im Text-Feld steht. Künftig gilt einheitlich: Der Lookup-Key steht immer im Text-Feld (les_text), egal ob Standard- oder Alternativ-Eintrag, egal ob Vigil oder andere Hore. Aus Perikopen.ts werden dann alle zur Lesung gehörenden Felder (les_buch, les_stelle, les_text, les_text_neu) befüllt.

**Wann Perikopen.ts-Lookup, wann direkte Eintragung**: Der Datenbank-Lookup lohnt sich als Single Source of Truth nur für Perikopen, die mehrfach verwendet werden. Perikopen, die nur einmal vorkommen, werden weiterhin direkt mit ihren vollständigen Angaben in die Felder eingetragen (kein Lookup-Key, keine Datenbankreferenz nötig).

## les_selector und patr_selector als Arrays

### Sonderfall: alternatives Responsorium
nur Weihnachten Lj II, Erste und Zweite Lesung der Lh

### Sonderfall: first UND second
Weihnachten Lj II
Verstorbene Lh

## besondere Felder
### group
### excludeYear
### bezug

## Erhalt weiterer Funktionen in LectureAlternatives
namesOfBooks

## Bereinigung im TextFormatter
Wenn die ^A- und ^Q-Tags nicht mehr verwendet werden, kann deren Löschung durch den TextFormatter entfallen.

## Klärungsstand (Stand 17.07.2026)

### Bestätigt
1. Vorbild-Routine ist `ms_ruf_text` (nicht `ms_aps_text` – Schreibfehler in der ursprünglichen Notiz). Siehe MassReadings.js, Z. 106-113: der Feldwert selbst ist der Lookup-Key in `RufvdEv.ts`, kein Tag-Präfix, keine Parsing-Logik.
2. `ms_les_text`, `ms_aps_text`, `ms_les2_text`, `ms_ruf_text`, `ms_ev_text` kommen **nicht** in Brevier.ts vor, sondern in Calendar.ts, Lecture1.ts, Lecture2.ts und LectureABC.ts.
3. Aufgabenteilung LectureSelector ↔ BrevierDataProcessor:
   - **BrevierDataProcessor**: löst ^A/^Q auf, baut les_selector/patr_selector-Arrays, wertet excludeYear aus (Einträge werden dort schon gefiltert, nicht erst beim Rendern).
   - **LectureSelector**: bleibt reine Darstellungslogik ohne Datenbankzugriff – Buttons rendern, Auswahl-State verwalten, `bezug`-Text anzeigen (falls vorhanden), `button`-Text ableiten (siehe Punkt 4).
4. `bezug` ist ein einfaches Textfeld, das im LectureSelector gerendert wird, falls vorhanden.
5. `button`-Ableitung: Kommt kein `button`-Feld aus der Datenbank mit ins texts-Objekt, ermittelt der LectureSelector den Button-Text aus dem Textanfang zwischen `^h` und `^p` (entspricht der bereits vorhandenen `extractTitle()`-Logik).

6. **`namesOfBooks` entfällt ganz.** Es gibt keine Perikope, die je nach Hore mal die lange Buchbezeichnung (Lesehore), mal die Abkürzung (Kurzlesungen) braucht – die Funktion war praktisch nie nötig.
   - Damit entfallen auch die verwandten, nie fertig angebundenen Ansätze **`bibleBooks`/`replaceBibleRef`** (Fuzzy-Matching-Normalisierung von Bibelbuchnamen, LectureAlternatives.ts ab Z. 1823) – hingen mit derselben Idee wie `namesOfBooks` zusammen, werden nirgendwo im Code importiert.
   - Ebenfalls zu entfernen: **`lectureAlternatives_swd`** (LectureAlternatives.ts Z. 1030-1703) – ein verworfener Alternativ-Ansatz, Alternativen über Datum (swd-/mmdd-Format) statt über Lookup-Keys aufzulösen; nirgendwo im Code verwendet.
7. **`group`-Semantik bleibt wie bisher**: ein Array-Eintrag mit `group: "Name"` ist ein reiner Header, alle nachfolgenden Einträge gehören zur Gruppe, kein „Schließen" zugunsten wieder ungruppierter Einträge danach.
8. **Sonderfall „first UND second" ist unproblematisch**: Dasselbe Keyword steht sowohl in les_text als auch in patr_text. Für les_text wird unter dem Stichwort der les_selector-Eintrag (bisher first) gelesen, für patr_text unabhängig davon der patr_selector-Eintrag (bisher second). Keine zusätzliche Logik nötig.
9. **Sonderfall „alternatives Responsorium" – kein eigenes `resp_selector`-Array.** Alle drei Ausprägungen werden über les_selector/patr_selector selbst abgebildet:
   - **Eigenes Responsorium je Lesungsalternative**: Der jeweilige Array-Eintrag enthält eigene resp1-3 (bzw. patr_resp1-3).
   - **Gemeinsames Responsorium für mehrere Lesungsalternativen**: Nur der Eintrag mit Index 0 enthält resp1-3; bei den übrigen Einträgen fehlen diese Felder. `selected()` fällt für alle resp*/patr_resp*-Felder, wenn im gewählten Array-Eintrag nicht vorhanden, generisch auf les_selector[0]/patr_selector[0] zurück (ausnahmslos, ohne Sonderfall für „bewusst kein Responsorium" – kommt praktisch nicht vor).
   - **Nur Responsorium zur Auswahl, Lesungstext gleich (Weihnachten Lj II)**: Der Array-Eintrag hat leere text/buch/stelle/neu-Felder, aber gefüllte resp1-3. Die Erkennung „Buttons unter RESPONSORIUM anzeigen" läuft über den bereits vorhandenen Mechanismus `onlyResp` (Eintrag hat resp, aber keinen Text) bzw. `onlyAlternativeResp` (LectureSelector.js:253, 277-281) – unverändert übernehmbar, nur die Datenbefüllung ändert sich.
10. **Feldnamen innerhalb der Selector-Arrays verlieren ihr les_/patr_-Präfix**, weil der Array-Name (`les_selector`/`patr_selector`) den Kontext schon liefert. Regel: Präfix weg, Suffix (`_lat`, `_neu`) bleibt.
    - `les_selector[i]`: `buch, stelle, text, text_neu, text_lat, resp0, resp1, resp2, resp3, resp0_lat, resp1_lat, resp2_lat, resp3_lat`
    - `patr_selector[i]`: `autor, werk, text, text_lat, resp1, resp2, resp3, resp1_lat, resp2_lat, resp3_lat`
    - Nebeneffekt: bereinigt die bisherige Inkonsistenz, dass `second`-Einträge in LectureAlternatives.ts bislang `patr_resp1` (mit Präfix) hießen, `first`-Einträge aber schon `resp1` (ohne Präfix) – künftig einheitlich `resp1` in beiden Arrays.
    - Die **Top-Level-Feldnamen im texts-Objekt** (`les_buch`, `les_text`, `patr_resp1` usw., für Fälle ohne Alternativen) bleiben unverändert – keine Umbenennung dort, um Fehlerquellen zu vermeiden.
11. **Sonderfall: diözesane Referenz + Alternative (z.B. Trier 7.11., Willibrord/Alkuin)**. Bisher: `resolveAndMergeSource` (BrevierDataProcessor.js Z. 61-68) löst `Laudes.referenz` (z.B. `AAA-11-7-n1`) auf und mergt die diözesane Override-Ebene (`data`) über die referenzierten Realdaten (`resolvedData`) via `deepMerge(resolvedData, data)`. Bisher stand der `^A`-Tag nur in `patr_autor`, so dass `patr_text` unangetastet blieb und die ererbte Alkuin-Lesung aus AAA als Standard erhalten blieb.
    - **Problem beim Umbau**: Künftig steht der Lookup-Key direkt in `patr_text` (z.B. `"Trier-11-07"`). Würde `data.patr_text` unverändert in den Merge gehen, überschriebe der bloße Key beim `deepMerge` den ererbten Alkuin-Realtext aus `resolvedData` – der Standard ginge verloren.
    - **Lösung**: `resolveAndMergeSource` bekommt eine minimale Ergänzung, die nur das Clobbering verhindert (Array-Logik bleibt zentral in der allgemeinen Auflösungsfunktion):
      ```js
      ['les_text', 'patr_text'].forEach(field => {
          if (reference && data[field] && lectureAlternatives[data[field]]) {
              data[`${field}_selectorKeyword`] = data[field];
              delete data[field];
          }
      });
      ```
      Der Key wird vor dem Merge in ein Marker-Feld ausgelagert; `data[field]` bleibt leer, sodass `deepMerge` den ererbten Realtext aus `resolvedData` unverändert durchreicht.
    - **Auflösung danach**: Die allgemeine ^A/^Q-Auflösungsfunktion erkennt zwei Fälle:
      - **Marker-Feld vorhanden** (Referenzfall): Index 0 wird aus dem soeben gemergten `les_text`/`patr_text` (+ Nachbarfeldern) synthetisiert – nicht aus LectureAlternatives.ts gelesen. Der synthetisierte Eintrag wird per Array-Spread vorangestellt: `patr_selector = [synthesizedStandard, ...lectureAlternatives[keyword].second]`. Da JS-Arrays rein positionell sind, rutschen die gespeicherten Alternativen dadurch automatisch auf Position 1, 2, 3, … – keine manuelle Neuindizierung nötig.
      - **Kein Marker, `les_text`/`patr_text` selbst ist ein gültiger Key** (Normalfall): Index 0 kommt wie geplant statisch aus LectureAlternatives.ts.
    - **Konsequenz für die Excel-Pflege**: Für referenz-synthetisierte Stichworte (wie `Trier-11-07`) darf in LectureAlternatives.ts **kein** eigener Index-0-Standard eingetragen werden – sonst gäbe es zwei „Standard"-Einträge. Nur echte Zusatz-Alternativen eintragen, empfohlen ab Index 1 durchnummeriert (0 bewusst freilassen als Gedächtnisstütze; der Konverter selbst wertet die Index-Spalte nur als Sortierschlüssel, siehe Punkt 12).
12. **Wie der Konverter die Arrays aus der Excel-Tabelle baut**: Pro Stichwort+Typ werden die Zeilen nach der Index-Spalte sortiert und sequenziell in ein JS-Array gepackt. Die Index-Zahl aus Excel ist nur ein **Sortierschlüssel**, kein gespeicherter Wert im erzeugten `LectureAlternatives.ts` – ein Array hat ohnehin nur lückenlose Positionen (0, 1, 2, …). Bei referenz-synthetisierten Stichworten (keine Index-0-Zeile in Excel) wird die niedrigste vorhandene Zeile trotzdem zu Array-Position 0 im gespeicherten Array; das Voranstellen des synthetisierten Standards zur Laufzeit (Punkt 11) verschiebt sie danach automatisch auf Position 1.

### Noch offen
Keine offenen Punkte mehr aus der aktuellen Klärungsrunde. Nächster Schritt: converter.py/Excel-Migration (Evangelien.ts → Perikopen.ts, RufvdEv.ts → Perikopen_Messe.ts, LectureAlternatives.ts-Import/Export).
