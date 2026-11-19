# Klärung: Psalmodie und Commune

Arbeitsdokument für den Umbau der Psalmen-Schalter im SectionHeader.
Ergänzt [SectionHeader und GetValue.md](SectionHeader%20und%20GetValue.md).

**So arbeiten wir damit:**
- Jede Frage hat ein Feld **Antwort**. Du schreibst dort hinein, in eigenen Worten, so kurz oder ausführlich wie nötig. „Weiß ich noch nicht“ oder eine Gegenfrage ist auch eine Antwort.
- Die Fragen müssen nicht der Reihe nach beantwortet werden. Wenn du eine beantwortet hast, sag mir Bescheid. Ich trage dann die Folgen ein (Status, ggf. neue Fragen) und setze erst um, wenn alle Fragen eines Abschnitts geklärt sind.
- Was entschieden ist, wandert nach unten unter **Entscheidungen**.

---

## Ausgangslage

**Ziel (deine Vorgabe):**
- Eigentexte können nicht durch Wochentagstexte überspielt werden, nur Commune-Texte.
- Der Schalter „Ps eig | vom Wt“ (`showPsalmsWt`) entfällt. Er stammt aus der Zeit, als die Commune-Psalmen von LuV-Gedenktagen behelfsweise als eigene Psalmen eingetragen waren.
- Wo Psalmen aus dem Commune kommen, kann man sie mit „Comm | Wt“ überspielen. Dazu gehören auch die Festpsalmen der Laudes aus `sollemnitiesData` (Psalmen vom Sonntag der I. Woche).

**Was der Code dazu schon hat:**
- Hinter „Wt“ steht bei der Psalmodie nicht `comm = 0`, sondern `psalmsWt = true`. So kann die Psalmodie vom Wochentag kommen, während der Rest der Hore beim Commune bleibt. Das bleibt so. `psalmsWt` wird außerdem für „(auch Ant)“ und für „ErgPs | Wt“ in den Kleinen Horen an Hochfesten gebraucht.
- Die Festpsalmen der Laudes stehen nicht im Commune (`com1`), sondern werden in GetValue aus `sollemnitiesData` geholt: bei `rank.useFeastPsalms` (Feste, Hochfeste), `prefSollemnity` und `isMemorialWithLuV`.

**Datenlage (Probelauf für 2027):** Eigene Psalmen gibt es nur an Hochfesten und Festen, insgesamt in 26 Horen, **keine davon in den Laudes**. Kein Gedenktag hat noch Commune-Psalmen als eigene Psalmen eingetragen. Nicht geprüft: Diözesanquellen (`d1`–`d5`).

| Datum | Horen mit eigenen Psalmen |
|---|---|
| 01.01. Gottesmutter Maria | Lesehore |
| 05.01. 1. Vesper Erscheinung | Vesper |
| 06.01. Erscheinung | Lesehore, Terz, Sext, Non, Vesper |
| 02.02. Darstellung | Lesehore, Vesper |
| 25.03. (2027: 05.04.) Verkündigung | Lesehore, Vesper |
| 06.08. Verklärung | Lesehore, Vesper |
| 14.09. Kreuzerhöhung | Lesehore, Vesper |
| 29.09. Erzengel | Lesehore, Vesper |
| 31.10. 1. Vesper Allerheiligen | Vesper |
| 01.11. Allerheiligen | Lesehore, Vesper |
| 24.12. 1. Vesper Weihnachten | Vesper |
| 25.12. Weihnachten | Lesehore, Terz, Sext, Non |
| 27.12. Johannes | Lesehore |

**Übergangsstand (veröffentlichbar):** In den Laudes von LuV-Gedenktagen erscheint derzeit „Ps eig | vom Wt“, genau wie an Festen. Konzeptionell ist das nicht richtig, es funktioniert aber und bleibt bis zum Umbau stehen.

---

## Fragen

### F1 – Hängt die Psalmodie vom Commune-Schalter anderer Abschnitte ab?

`comm` gilt für die ganze Hore. Drückt man z. B. in der Vesper eines LuV-Gedenktags bei den **Fürbitten** auf „Wt“, wird `comm = 0`. Dann nimmt GetValue auch die Psalmen nicht mehr aus dem Commune, obwohl man bei der Psalmodie nichts umgeschaltet hat. Mit `comm = 2` kämen sie aus dem zweiten Commune.

Möglichkeiten:
- **a)** Die Psalmodie richtet sich nur nach dem Schalter in ihrer eigenen Überschrift (`psalmsWt`): Commune-Psalmen bleiben, bis man dort „Wt“ wählt. Was andere Abschnitte einstellen, ändert die Psalmen nicht.
- **b)** Wie bisher: Der Commune-Schalter wirkt auf alles, die Psalmodie eingeschlossen.

Wenn a): Soll bei zwei Commune (Comm 1 | Comm 2) die Psalmodie dem gewählten Commune folgen, oder immer Comm 1 nehmen?

**Antwort:**

*Status:* durch E1 im Sinn von a) entschieden; die Frage nach Comm 2 ist als A3 weitergeführt.


### F2 – Welche Psalmen gelten als „Commune-Psalmen“?

Damit „Comm | Wt“ über der Psalmodie erscheint, muss SectionHeader erkennen, dass die Psalmen aus dem Commune kommen. Bisher prüft er nur, ob das Commune (`com1`) Psalmen enthält. Künftig zählten dazu auch die Festpsalmen der Laudes aus `sollemnitiesData`:
- an Festen und Hochfesten (`rank.useFeastPsalms`),
- an LuV-Gedenktagen,
- bei Feier als Hochfest (`prefSollemnity`)?
- bei Kirchweih bzw. Verstorbenen (`prefSollemnity = 'kirchw'` bzw. `'verst'`)? Diese haben eigene Daten in `sollemnitiesData`.

Bitte für jeden Punkt: ja / nein / gesondert.

**Antwort:**


### F3 – Ein oder zwei Comm-Schalter bei den Festpsalmen?

Die Festpsalmen der Laudes sind für beide Commune gleich. Sollen über der Laudes-Psalmodie trotzdem „Comm 1 | Comm 2 | Wt“ erscheinen (wie bei den übrigen Abschnitten), oder nur „Comm | Wt“?

**Antwort:**


### F4 – Sonntage

Bisher wird in den Sonntagslaudes keine Wahl angeboten (erkannt an Ps 63 bzw. 118 als erstem Wochentagspsalm). Soll das auch für „Comm | Wt“ gelten? Beispiel: ein Herrenfest am Sonntag.

**Antwort:**


### F5 – Hochfeste und Feste mit eigenen Psalmen

An den Horen aus der Tabelle oben erscheint bisher „Ps eig | vom Wt“, künftig gar kein Psalmenschalter mehr. Nach deiner Regel ist das richtig. Bitte bestätigen, oder Ausnahmen nennen (z. B. die Lesehore am 27.12.).

**Antwort:**

*Status:* durch E1 bestätigt (eigene Psalmen → kein Schalter). Ausnahmen gibt es nur, wenn du welche nennst.


### F6 – Feier als Hochfest mit nur einem Commune

In SectionHeader steht: Bei `prefSollemnity` ohne zweites Commune werden die Comm-Schalter ganz ausgeblendet (`skipCommune = true`). Dann ließe sich bei einer Feier als Hochfest die Psalmodie nicht mehr auf den Wochentag stellen. Ist das richtig so?

**Antwort:**


### F7 – Wann wird „Psalmen vom Wt“ zurückgesetzt?

Bisher nur beim Tageswechsel: Wer in den Laudes die Psalmen vom Wt wählt, hat sie auch in der Vesper vom Wt. Die Vorauswahl des Commune (`comm`) wird an LuV- und TSN-Tagen dagegen inzwischen bei jedem Wechsel der Hore neu gesetzt.

- **a)** Beim Wechsel der Hore zurücksetzen (jede Hore beginnt mit der Vorauswahl).
- **b)** Wie bisher über den ganzen Tag beibehalten.
- **c)** Nur an LuV-/TSN-Tagen zurücksetzen.

**Antwort:**


---

## Entscheidungen

### E1 – Psalmen-Schalter wird umgewidmet zu „Comm | Wt“ (18.11.2026)

- Der Schalter `showPsalmsWt` bleibt, heißt aber künftig **„Comm | Wt“** statt „Ps eig | vom Wt“. Er sieht aus wie der Commune-Schalter (`showComm`), wird aber allein über `userPrefs.psalmsWt` gesteuert und ist damit **unabhängig von `comm`**.
- **Kriterium:** Hochfest, Fest oder `isMemorialWithLuV`, **und keine eigenen Psalmen**. Begründung: Diese Ränge schließen den Wochentag aus, deshalb wird auf das Commune zurückgegriffen. Wo nur Commune-Psalmen verwendet werden (keine eigenen), kann der Nutzer stattdessen beim Vierwochenpsalter bleiben.
- **Eigene Psalmen** haben keinen Schalter mehr (damit ist **F5** im Grundsatz beantwortet).
- **„(auch Ant)“** bleibt (`psalmsWt = 'inclAnt'`), wenn auch die Antiphonen nicht eigen sind, sondern aus dem Commune kommen. Praktisch nur am 11.06. (Barnabas) und am 26.07. (Joachim und Anna).

**Anschlussfragen zu E1 (beantwortet 18.11.2026):**

- **A1 – Horen:** Lesehore, Laudes und Vesper (einschließlich Erster Vesper), nicht die Kleinen Horen. *Antwort: Ja, genau so.*
- **A2 – Feier als Hochfest, Kirchweih, Verstorbene:** *Antwort: Eine Auswahl von `prefSollemnity` (egal ob `soll`, `kirchw` oder `verst`) schließt sowohl `showPsalmsWt` als auch `showComm` aus, weil mit `prefSollemnity` gerade Commune statt Wt gewählt wird.* Damit sind auch **F2** (letzte zwei Punkte) und **F6** erledigt.
- **A3/A4 – Zwei Commune und Beschriftung:** *Antwort: Der Fall Comm 2 muss berücksichtigt werden. Die Beschriftung von `showPsalmsWt` wird deshalb wie bei `showComm` angelegt, auch mit `labelCommN`.* Damit ist **F3** erledigt: „Comm 1 | Comm 2 | Wt“, sofern es zwei Commune gibt. Das passt auch zu den Laudes: Die Festpsalmen sind zwar für beide Commune gleich, die Antiphonen aber nicht.

### E2 – Zusammenfassung des Zielzustands (18.11.2026)

Der Psalmen-Schalter (`showPsalmsWt`) erscheint, wenn alle Bedingungen erfüllt sind:
- Psalmodie in Lesehore, Laudes oder Vesper (auch Erste Vesper),
- Hochfest oder Fest (`rank.date > 2`) oder LuV-Gedenktag (`isMemorialWithLuV`),
- keine eigenen Psalmen (`!hasEig`), aber Psalmen vom Wochentag vorhanden (`hasWt`),
- kein `prefSollemnity`.

Er zeigt „Comm {labelComm1} | {labelComm2} | Wt“ (Comm 2 nur, wenn vorhanden), dazu ggf. „(auch Ant)“.

**Folgen für den Code (noch nicht umgesetzt):**
1. SectionHeader, `showPsalmsWt`: Die Bedingung wird nach E2 neu gefasst. `hasEig` wird dabei vom Auslöser zum Ausschluss.
2. SectionHeader, Beschriftung: Die Buttons werden wie bei `showComm` aufgebaut (`labelComm1`, `labelComm2`, „Wt“). In den Laudes kommen die Psalmen aus `sollemnitiesData` und nicht aus `com1`. Dort ist `labelComm1` (Prüfung auf `com1?.[field]`) deshalb leer, und der Name muss direkt aus `texts.laudes[prefSource]?.com1?.button` geholt werden.
3. SectionHeader, `prefSollemnity`: `showPsalmsWt` und `showComm` sind ausgeschlossen. Die bisherigen Zeilen zu `prefSollemnity` in `skipCommune` werden entsprechend vereinfacht (siehe A6).
4. GetValue: Die Psalmodie kommt in den E2-Fällen aus dem Commune, solange `psalmsWt` nicht gesetzt ist, auch wenn `comm = 0` ist. Damit ist **F1** im Sinn von a) entschieden. Welches Commune genommen wird, hängt von A5 ab.
5. Der allgemeine Commune-Schalter wird bei der Psalmodie in den E2-Fällen nicht mehr angezeigt. Er wird schon jetzt über `!showPsalmsWt` unterdrückt.

**Neue Anschlussfragen:**

**A5 – Was bewirkt „Comm 2“ im Psalmen-Schalter?** Bisher setzt „Comm 2“ im allgemeinen Schalter `comm = 2` für die **ganze Hore**, auch im Psalmen-Abschnitt. Möglichkeiten:
- **a)** Auch im Psalmen-Schalter setzt „Comm 1/2“ `comm` für die ganze Hore (und `psalmsWt = false`). Nur „Wt“ wirkt allein auf die Psalmodie. Umgekehrt folgen die Psalmen dem Commune, das in einem anderen Abschnitt gewählt wird.
- **b)** Die Commune-Wahl der Psalmodie ist ganz eigenständig. Dafür braucht es einen eigenen Wert (z. B. `psalmsWt = 0 | 1 | 2 | true`).

Dazu gehört: Wenn bei den Fürbitten „Wt“ gewählt wird (`comm = 0`), aus welchem Commune kommen dann die Psalmen? Bei a) müsste es eine Regel geben, z. B. „das zuletzt gewählte Commune, sonst Comm 1“.

**Antwort:** *`comm` gilt einheitlich für die ganze Hore. Es ist egal, ob man bei der Psalmodie oder bei späteren Texten umschaltet.* → a)


**A6 – `prefSollemnity` mit zwei Commune:** Bisher gibt es bei `prefSollemnity` und zwei Commune noch „Comm 1 | Comm 2 | Wt“. Nur bei einem Commune wird der Schalter ausgeblendet. Nach A2 entfällt „Wt“. Soll die Wahl zwischen Comm 1 und Comm 2 bleiben, also nur „Comm 1 | Comm 2“? Außerdem gibt es eine Ausnahme für die erste Lesung der Lesehore (`isErsteLesung`), dort bleibt der Schalter bisher stehen. Soll die bleiben?

**Antwort:** *Bei `prefSollemnity = 'soll'` bleibt die Wahl zwischen Comm 1 und Comm 2 bestehen, aber Wt ist nicht wählbar, weder bei `showPsalmsWt` noch bei `showComm`. Die Ausnahme für die erste Lesung der Lesehore bleibt. Die ersten Lesungen in den Commune-Texten sind vermutlich noch nicht implementiert; das ist später nachzuholen.*

### E3 – Laudes, Commune-Wahl, `prefSollemnity` (18.11.2026)

- **Laudes:** An allen Hochfesten, Festen und LuV-Gedenktagen kommen die Psalmen immer aus `sollemnitiesData` (Ps 63, Dan 3, Ps 149). Dort wird deshalb nicht nach Comm 1/2 unterschieden, sondern einfach **„Comm | Wt“** ohne `labelCommN` gezeigt. Damit ist der „technische Haken“ aus E2, Punkt 2, erledigt.
- **Lesehore und Vesper:** „Comm {labelComm1} | {labelComm2} | Wt“ wie in E2.
- **`comm`** gilt für die ganze Hore (A5 a). „Comm 1/2“ im Psalmen-Schalter setzt `comm` (und `psalmsWt = false`), „Wt“ setzt nur `psalmsWt`.
- **`prefSollemnity = 'soll'`:** Bei zwei Commune bleibt die Wahl „Comm 1 | Comm 2“, ohne „Wt“. Das gilt für den Psalmen-Schalter und für den allgemeinen Commune-Schalter. Bei einem Commune gibt es keinen Schalter. Bei `'kirchw'` und `'verst'` gibt es keinen Schalter (A2).
- Die **erste Lesung der Lesehore** behält ihre Ausnahme (Bahnlesung wählbar).

**A7 – Rest aus A5:** Wenn in einem anderen Abschnitt „Wt“ gewählt wird (`comm = 0`), die Psalmodie aber auf „Comm“ steht: Aus welchem Commune kommen dann die Psalmen? Mein Vorschlag ist Comm 1. Das betrifft nur Lesehore und Vesper mit zwei Commune, denn in den Laudes sind die Psalmen ohnehin gleich. Die Antiphonen der Laudes kämen dann allerdings auch aus Comm 1.

**Antwort:** *Der Wt-Knopf bei `showComm` setzt nicht nur `comm = 0`, sondern auch `psalmsWt = true`. `psalmsWt = false` wird nur von den Comm-Knöpfen bei `showPsalmsWt` gesetzt.* Innerhalb einer Hore entsteht der Fall „`comm = 0`, Psalmodie auf Comm“ damit nicht mehr: Wer die Psalmodie danach wieder auf „Comm“ stellt, setzt zugleich `comm = 1` bzw. `2`.

### E4 – Wt-Knopf, Sonntage, Zurücksetzen (18.11.2026)

- **Wt bei `showComm`** setzt `comm = 0` **und** `psalmsWt = true`. **Comm 1/2 bei `showComm`** setzt nur `comm` und lässt `psalmsWt` unverändert. **Comm 1/2 bei `showPsalmsWt`** setzt `comm` und `psalmsWt = false`. **Wt bei `showPsalmsWt`** setzt nur `psalmsWt = true`.
- **F4 (Sonntage):** Die Ausnahme bleibt, es gibt also in Sonntagslaudes keine Wahl. Begründung: Bei Ps 63 (So I. Woche) wären die Psalmen ohnehin dieselben, denn die Festpsalmen sind die vom So der I. Woche. Bei Ps 118 (So II. und IV. Woche) gäbe es eine Doppelung, weil Ps 118 an Hochfesten und Festen, die auf einen Sonntag fallen, für die Kleinen Horen vorgesehen ist.
- **F7:** Option a) gilt. `psalmsWt` wird beim Wechsel der Hore zurückgesetzt. Bisher geschieht das nur beim Tageswechsel, das ist ein Fehler.

**A8 – Folgefrage zu F7:** Wird nur `psalmsWt` zurückgesetzt, kann der Fall aus A7 doch wieder entstehen. Beispiel: In den Laudes eines Festes wird bei den Bitten „Wt“ gewählt (`comm = 0`, `psalmsWt = true`). Beim Wechsel zur Vesper wird `psalmsWt` zurückgesetzt, `comm` bleibt aber 0. Möglichkeiten:
- **a)** Beim Wechsel der Hore auch `comm` auf die Vorauswahl zurücksetzen. Dann geht allerdings eine Wahl von Comm 2 verloren, die man den ganzen Tag beibehalten möchte (z. B. Comm Hirten statt Comm Märt).
- **b)** Nur `comm = 0` wird beim Wechsel der Hore auf die Vorauswahl zurückgesetzt, Comm 1/2 bleiben über den Tag erhalten. Mein Vorschlag.
- **c)** `comm` bleibt; die Psalmodie nimmt bei `comm = 0` Comm 1.

**Antwort:** *b), wie vorgeschlagen.* Beim Wechsel der Hore werden `psalmsWt` zurückgesetzt und `comm = 0` auf die Vorauswahl. Comm 1/2 bleiben über den Tag erhalten. Die bestehende Regel für LuV- und TSN-Tage (`comm` je nach Hore) und die Erste Vesper gehen vor.

**Stand:** Alle Fragen sind geklärt.

### Umsetzung (18.11.2026, Zweig `umbau-psalmodie`, noch nicht getestet)

- **SectionHeader `showPsalmsWt`:** neu nach E2/E3. Bedingungen: Psalmodie, Wt vorhanden, keine eigenen Psalmen, kein `prefSollemnity`; Fest/Hochfest, LuV-Gedenktag oder Erste Vesper. Laudes (außer Sonntagslaudes): „Comm | Wt“. Lesehore/Vesper: nur wenn das Commune Psalmen hat, dann „Comm {labelComm1} | {labelComm2} | Wt“.
- **Knöpfe:** wie E4. In den Laudes setzt „Comm“ `psalmsWt = false`, und nur bei `comm = 0` zusätzlich `comm = 1`. So bleibt eine Wahl von Comm 2 erhalten.
- **Allgemeiner Commune-Schalter:** kein „Wt“ bei `prefSollemnity`, außer bei der ersten Lesung (Bahnlesung). „Wt“ setzt `comm = 0` und in Lesehore, Laudes und Vesper zusätzlich `psalmsWt = true`. In den Kleinen Horen nicht, weil `psalmsWt` dort „ErgPs | Wt“ steuert. Diese Einschränkung habe ich selbst gewählt, sie folgt aus A1.
- **Direktorium.js:** Beim Wechsel der Hore werden `psalmsWt = false` gesetzt und `comm = 0` auf die Vorauswahl. Die Erste Vesper und LuV/TSN behalten ihre Regeln.
- **GetValue:** unverändert. Durch E4 und A8 tritt der Fall „`comm = 0`, aber Psalmodie auf Comm“ nicht mehr auf.
- **Nachtrag 19.11.2026:** Bei `prefSollemnity` (`soll`, `kirchw`, `verst`) reicht Direktorium.js „wirksame“ Werte an SectionHeader und GetValue weiter (`effectivePrefs`): `comm = 0` wirkt wie Comm 1, und `psalmsWt` gilt in Lesehore, Laudes und Vesper als nicht gesetzt. Die gespeicherte Wahl bleibt erhalten. Vom Benutzer ergänzt: Bei `soll` gibt es kein `showErgPs`, und bei `prefSollemnity` kein „(auch Ant)“.

### Testliste

Erledigt (19.11.2026):
- [x] 19.11. Elisabeth (Fuldaer Diözesankalender)
- [x] 21.01. Agnes (LuV), Laudes: „Comm | Wt“
- [x] „Wt“ gewählt, danach `prefSollemnity` zugeschaltet (auch `kirchw`, `verst`): Commune-Psalmen, „Comm“ unterstrichen; nach dem Abschalten wieder Wt
- [x] HymnSelector: lateinischer Eigenhymnus nur bei der gewählten Feier, nicht bei `kirchw`/`verst`; 18.11. (`n1`); Commune der Evangelisten

Psalmen-Schalter („Comm | Wt“):
- [x] 1. Fest mit Commune-Psalmen in Lesehore/Vesper und zwei Commune: „Comm {Name 1} | {Name 2} | Wt“; Comm 2 holt die Psalmen und Antiphonen aus dem zweiten Commune.
- [x] 2. Hochfest/Fest mit eigenen Psalmen (z. B. Lesehore/Vesper am 01.11., Vesper am 06.08.): kein Psalmen-Schalter.
- [x] 3. Fest an einem Sonntag, Laudes: kein Psalmen-Schalter.
- [x] 4. Erste Vesper eines Festes ohne eigene Psalmen: „Comm … | Wt“ erscheint. `Fehler behoben`
- [x] 5. 11.06. (Barnabas) und 26.07. (Joachim und Anna): „(auch Ant)“ erscheint und tauscht auch die Antiphonen.

Allgemeiner Commune-Schalter:
- [x] 6. „Wt“ bei den Fürbitten an einem Fest/LuV-Tag: Die Psalmodie springt mit auf Wt, „Wt“ ist dort unterstrichen. Danach „Comm“ bei der Psalmodie: Die Psalmen und die Fürbitten kommen wieder aus dem Commune.
- [x] 7. `prefSollemnity` „soll“ mit zwei Commune: „Comm 1 | Comm 2“ ohne Wt; bei der ersten Lesung der Lesehore bleibt „Bahnlesung“ wählbar.
- [x] 8. `prefSollemnity` „soll“ mit nur einem Commune: kein Commune-Schalter.

Wechsel der Hore:
- [x] 9. In den Laudes eines Festes „Wt“ wählen (Bitten oder Psalmodie), zur Vesper wechseln: Die Vesper beginnt wieder mit Commune.
- [x] 10. In den Laudes Comm 2 wählen, zur Vesper wechseln: Comm 2 bleibt. `Fehler behoben`
- [x] 11. Hochfest, Kleine Horen: In der Terz bei „ErgPs | Wt“ „Wt“ wählen, zur Sext wechseln: Die Sext beginnt mit der Vorauswahl. „Wt“ bei Kurzlesung/Oration stellt den Psalmenschalter nicht mit um.

Querprüfung, ob sich etwas verschlechtert hat:
- [x] 12. Gewöhnlicher Gedenktag (nicht LuV): Laudes/Vesper ohne Psalmen-Schalter; Comm | Wt bei den übrigen Abschnitten wie bisher.
- [x] 13. 02.10. Schutzengel (TSN): Kleine Horen beginnen mit Commune, Antiphonen und Psalmen vom Wt.

Wenn alles passt: committen, `umbau-psalmodie` nach `main` übernehmen, veröffentlichen.

### Fehler aus den Tests (19.11.2026)

**Test 10 – Comm 2 geht beim Wechsel der Hore verloren: behoben (bitte erneut testen).**
- Ursache 1: `userPrefs` lag in `PrayerTextDisplay`. Beim Wechsel der Hore über das Horen-Menü wird diese Komponente abgebaut und neu aufgebaut. Dabei begann die Auswahl jedes Mal mit der Vorauswahl. Das galt für alle Werte und hat bisher auch Test 9 „bestehen“ lassen.
- Ursache 2: Der LuV/TSN-Effekt setzte in Laudes und Vesper fest `comm = 1`.
- Lösung: `userPrefs` und die drei Effekte (neuer Tag, Wechsel der Hore, LuV/TSN) liegen jetzt in `Stundenbuch`. Neu ist `lastComm`, das zuletzt gewählte Commune. Der LuV/TSN-Effekt und das Zurücksetzen von `comm = 0` nehmen dieses statt fest Comm 1, wenn die Vorauswahl das Commune ist.
- Bitte auch die Tests 9 und 11 noch einmal prüfen, denn sie liefen bisher über den Neuaufbau.

**Test 4 – Erste Vesper ohne Psalmen-Schalter: Ursache in den Daten, Frage offen.**
Für die Erste Vesper ersetzt BrevierDataProcessor die ganze Vesper durch `tomorrowData.erstev`. Darin gibt es keine Wochentagspsalmen (`vesper.wt.psalm1` fehlt). Deshalb ist `hasWt` falsch, und der Schalter erscheint nicht. Probelauf 2027, alle Ersten Vespern mit Commune-Psalmen:

| Erste Vesper am | Fest | Commune-Psalmen | Wt-Psalmen |
|---|---|---|---|
| 18.03. | Josef | ja (Ps 113 …) | fehlen |
| 23.06. | Geburt Johannes’ des Täufers | ja | fehlen |
| 28.06. | Petrus und Paulus | ja | fehlen |
| 14.08. | Aufnahme Mariens | ja | vorhanden (So-Vesper) |
| 07.12. | Unbefleckte Empfängnis | ja | fehlen |

Die Vesperdaten des laufenden Tages (mit dessen Wochentagspsalmen) werden vorher als `finalData.prefsollemnity` gesichert und wären also verfügbar.

**A9 – Soll es in der Ersten Vesper überhaupt „Wt“ geben, und wenn ja, mit welchen Psalmen?**
- **a)** Ja. Als Wt gelten die Vesperpsalmen des laufenden Wochentags aus dem Vierwochenpsalter (aus `prefsollemnity.wt`).
- **b)** Nein. In der Ersten Vesper gibt es keinen Psalmen-Schalter; die Bedingung `hasErsteVesper` wird aus `showPsalmsWt` gestrichen. Dann wäre am 14.08. (Samstag vor Sonntag) ebenfalls kein Schalter.
- **c)** anders: …

**Antwort:** *Nach der Ersetzung die wt-Source aus `prefsollemnity` in die neue Vesper kopieren. Weil die wt-Daten an Hochfesten (und damit auch in der Ersten Vesper) normalerweise nicht zum Zuge kommen, stören sie nicht, erfüllen aber die Bedingung für `showPsalmsWt`.* (entspricht a)

**Umgesetzt (BrevierDataProcessor):** Es werden nur `psalm1–3`, `ant0–3` und `mode0–3` übernommen, jeweils mit Sprachvarianten wie `ant1_lat`. Bei der Ersten Vesper eines Sonntags (`hasErsteVesper_wt`) wird nichts übernommen, denn deren wt-Texte sind die des Sonntags. Vorhandene Einträge der Ersten Vesper haben Vorrang.
Grund für die Einschränkung: Der Probelauf 2027 hat gezeigt, dass bei vollständiger Übernahme Felder einspringen würden, wo die Erste Vesper bewusst nichts hat: Responsorien am 05.01., Magnificat-Antiphonen A/B/C und `hymn_kl` am 31.10., `hymn_2` am 24.12. Außerdem würde der HymnSelector an jeder Ersten Vesper eines Hochfestes den Wochentagshymnus anbieten.
Nach der Änderung hat die Erste Vesper Wt-Psalmen am 18.03. (Ps 30), 23.06., 28.06. und 07.12. Am 05.01., 31.10. und 24.12. gibt es eigene Psalmen, dort bleibt es ohne Schalter.






---

## Offene Punkte für später

- `prefComm` in BrevierDataProcessor: nach dem Umbau prüfen, ob es neben der Ersten Vesper noch gebraucht wird.
- Diözesanquellen (`d1`–`d5`) auf eigene Psalmen prüfen.
- Erste Lesungen der Lesehore in den Commune-Texten implementieren (vermutlich noch nicht vorhanden).
