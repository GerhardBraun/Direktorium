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

## Auflösung der Referenzen im BrevierDataProcessor

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

## Erhalt weitere Funktionen in LectureAlternatives
namesOfBooks
