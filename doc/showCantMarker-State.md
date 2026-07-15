Die Einrichtung der Psalmen zum Singen soll nicht mehr als Sprachvariante (localPrefLanguage='cant') verwaltet werden, sondern als State `showCantMarkers`.

**Vorteile:**
1. Auch die anderen Sprachvarianten (lateinisch, benediktinisch, neue Einheitsübersetzung) können zum Singen eingerichtet werden — Latein ist strukturell voll kompatibel (dieselben Psalmtöne, dieselben Kadenzregeln) und wird nicht erst später, sondern von Anfang an mitgedacht.
2. In PsHymn.ts ist kein zusätzlicher Eintrag `text_cant` nötig, sondern in `text` wird der Text mit Cant-Markern gespeichert. Dadurch wird die Datenbank verkleinert, und etwaige Korrekturen sind nur an einer Stelle nötig.

**Fund bei der Bestandsaufnahme:** `ordinarium.js` dupliziert für Benedictus/Magnificat/Nunc Dimittis dasselbe Muster, das hier aufgelöst werden soll — pro Hore existieren dort komplette Parallel-Objekte `'dt'` und `'cant'` (confiteor, Vaterunser, closing usw. jeweils kopiert), die sich nur durch den markierten Canticum-Text (Feld `"cant"`) und ein `"mode"`-Feld unterscheiden. Dieser Umbau wird **zusammen mit** den Psalmen erledigt (nicht separat nachgezogen), da es sich um genau dasselbe Muster handelt.

## Speicherung im LocalStorage
showCantMarker kann (wie localPrefLanguage) im ThemeMenu aktuell geändert werden. Eine Voreinstellung, die beim Programmstart gelesen wird, wird (analog zu prefLanguage) im LocalStorage als showCantMarker gespeichert.
### One-Time-Migration
Ruft ein User nach dem Upgrade das erste Mal die App auf, soll ein vorhandener Local-Storage-Eintrag prefLanguage==="_cant" übersetzt werden: prefLanguage = "" (für die Standard-Textvariante "Stundenbuch"), showCantMarker = true.
Auch beim languages-Eintrag für die Sprachwahl-Schalter wird "_cant" durch "" ersetzt; ["","_cant"] jedoch wird durch ["aus","aus"] ersetzt.
`_cant` kann an **beiden** Positionen des Arrays stehen (`["_cant","_lat"]` ebenso wie `["_lat","_cant"]`). Die Migration muss daher jedes Vorkommen von `_cant` im Array durch `""` ersetzen; nur wenn danach beide Positionen identisch sind (`["",""]` — das passiert nur, wenn das Paar vorher `["","_cant"]`/`["_cant",""]` war), wird stattdessen `["aus","aus"]` gesetzt, da ein Paar mit zwei identischen Sprachen keinen Sinn ergibt.

## ThemeMenu
Der Button `cant` kann mit den anderen Sprachwahl-Buttons in einer Reihe stehen bleiben, allerdings durch eine senkrechte Linie optisch abgetrennt.
### Anzeige und Speicherung "Voreinstellung beim Programmstart"
"Psalmen zum Singen eingerichtet" wird als Ergänzung zur Bezeichnung der gewählten Übersetzung angezeigt, wenn `showCantMarkers`=true ist.
Ergänzt werden soll ein Button "aktuelle Einstellung als Voreinstellung speichern". Das ersetzt die bisherige LongPress-Funktion (aktuell `handleLanguageLongPress` in `Direktorium.js`). Der Button speichert `prefLanguage` **und** `showCantMarker` in einem Zug im LocalStorage.

## SectionHeader
Nach dem Schnellschalter für die Sprachwahl wird ein Schalter "cant" ergänzt.
Dieser wird nur bei den Überschriften "Psalmodie" und "Benedictus/Magnificat/Nunc dimittis" angezeigt.
"cant" wird unterstrichen bei showCantMarkers=true, durchgestrichen bei false.

Konkrete Gating-Bedingung (in `SectionHeader.js` steht bereits `getTitle()` zur Verfügung):
```javascript
const showCantToggle = ['PSALMODIE', 'BENEDICTUS', 'MAGNIFICAT', 'NUNC DIMITTIS'].includes(getTitle());
```
Die drei Canticum-Titel kommen direkt aus `ordinariumTexts.titel` und sind bereits Großbuchstaben, wie `getTitle()` sie liefert.

## Schnellschalter für Sprachwahl
Im Einstellungen-Menü fällt bei der Auswahl für die Schnellschalter die dritte Spalte mit den vier Kombinationen mit cant weg.

## Aufruf von formatCantMarkers in formatPsalm
formatCantMarkers wird nur aufgerufen, wenn showCantMarkers=true ist und text in der gewählten Sprachvariante CantMarkers enthält. Zuverlässige Prüfung dafür ist, ob der Text wenigstens ein Pipe-Symbol enthält.

Das ist der eigentliche Kerngedanke des neuen Designs: Die Cant-Fähigkeit wird nicht mehr aus einem Datenbank-Flag (`psalm.text_cant` vorhanden?) abgeleitet, sondern **sprachunabhängig** aus dem bereits aufgelösten `text` selbst (genaue Formel samt Bereinigungsschritt weiter unten unter „Ort der Bereinigung").

Vorteil: Sobald künftig auch `_neu`- oder `_ben`-Texte Marker erhalten, funktioniert das automatisch, ohne dass `formatPsalm` geändert werden muss. `text_mode` (der Psalmton) bleibt dabei ein einziges, sprachunabhängiges Feld — der Psalmton ist eine Eigenschaft der Antiphon, nicht der Übersetzung.

### Textanpassungen fürs Singen
Wenn `showCantMarkers`=false, werden aus dem `text`-Eintrag durch ein einfaches Replace-Kommando die Ziffern `0` bis `4` sowie das `|`-Zeichen gelöscht; damit werden alle Marker entfernt und der bloße Psalmtext bleibt übrig.

Gelegentlich wird der Psalmtext für das Singen leicht angepasst durch Einfügen oder Weglassen eines `e`:
unsere -> unsre
im Land wohnen -> im Lande wohnen
rufe ich zu dir -> ruf’ ich zu dir

Das wird durch die Marker `+e`, `-e` und `'e` gekennzeichnet.
Bei `showCantMarkers`=`true` wird `+e` durch `e` ersetzt, `'e` durch `’`, `-e` wird gelöscht;
Bei `showCantMarkers`=`false` wird `-e` und `'e` durch `e` ersetzt, `+e` wird gelöscht.

uns-ere
-> unsere bei `showCantMarkers`=`false`
-> unsre bei `showCantMarkers`=`true`

im Land+e wohnen
-> im Land wohnen bei `showCantMarkers`=`false`
-> im Lande wohnen bei `showCantMarkers`=`true`

ruf'e ich zu dir
-> rufe ich zu dir bei `showCantMarkers`=`false`
-> ruf’ ich zu dir bei `showCantMarkers`=`true`

Sollen andere Buchstaben, Silben oder Wörter für das Singen eingefügt oder weggelassen werden, dann werden diese in eckige Klammern gesetzt:

[+nur ]du allein bist Gott
-> du allein bist Gott bei `showCantMarkers`=`false`
-> nur du allein bist Gott bei `showCantMarkers`=`true`

**Wichtig für die Umsetzung:** Diese Ersetzung darf nicht nur in `PsalmCantDisplay` passieren (die Komponente wird ja nur gerendert, wenn `cantMode` truthy ist). Sobald Marker im Haupttext `text` oder in der Doxologie stehen, tauchen sie auch dann auf, wenn `cantMode` aus irgendeinem Grund `null` ist — dann muss die "Nicht-Singen"-Variante erzeugt werden. Das betrifft nicht nur Psalmen, sondern auch die Doxologie und den Nunc-Dimittis-Text in `ordinarium.js`.

**Ort der Bereinigung:** Am saubersten gleich an den Anfang von `formatPsalm`, direkt nach der Ermittlung von `cantMode` (nicht verteilt über einzelne `formatPrayerText`-Aufrufe):
```javascript
const isAnnotated = isBuM ? psalmRef.cant.includes('|') : text.includes('|');
const cantMode = showCantMarkers && isAnnotated
    ? (isBuM ? (modeOverride || psalmRef.mode) : (modeOverride || psalm.text_mode))
    : null;

if (!cantMode) {
    text = stripCantMarkers(text);
    doxology = stripCantMarkers(doxology);
}
```
Wichtig: Die Bereinigung hängt an `!cantMode`, **nicht** direkt an `!showCantMarkers`. Der Unterschied greift genau im Übergangsfall: Ist `showCantMarkers=true`, aber der konkrete Psalm noch nicht annotiert (`isAnnotated=false`), bleibt `cantMode` trotzdem `null` — und die (ggf. bereits fertige) Doxologie muss auch dann bereinigt werden, obwohl `showCantMarkers` selbst `true` ist. `cantMode` fasst also bereits korrekt zusammen, ob *dieser konkrete Render-Vorgang* singend oder lesend erfolgt; `showCantMarkers` allein würde das nicht zuverlässig abbilden.

Mit dieser Lösung wird das System robust gegenüber **teilweise vorbereiteten** Ständen: Wird z.B. die lateinische Doxologie schon mit Cant-Markern versehen, bevor die lateinischen Psalmtexte selbst annotiert sind, ist `cantMode` (mangels `text_lat.includes('|')`) `null` → beide Strings werden bereinigt, unabhängig davon, dass `showCantMarkers` `true` sein kann. Erst wenn auch der Psalmtext selbst Marker bekommt, wird `cantMode` gesetzt, und `PsalmCantDisplay` übernimmt beide (unverändert, markiert) für die gemeinsame gesungene Darstellung im selben Ton.

Nebeneffekt dieser Lösung: `formatPrayerText` selbst braucht **keine** eigene generische Bereinigungslogik mehr — sie bekommt in beiden Zweigen von `formatPsalm` bereits garantiert passenden Input (entweder vollständig bereinigt, oder bewusst roh für den `marker.startsWith('cant')`-Pfad von `PsalmCantDisplay`).

**Caveat für die Bereinigungsroutine:** `|`, `1`–`4` und `~` kommen in Psalmtexten sonst nicht vor und können mit einem einfachen Regex-Replace entfernt werden. Bei der `0` ist das nicht so: Sie ist auch Bestandteil sämtlicher schließender Inline-Tags (`^0r`, `^0u`, `^0b`, `^0RUBR`, `^0v`, `^0c`, `^0w`, `^0f`, `^0d`, `^0ELL`, `^0STAR`), die in Psalmtexten häufig vorkommen (Beleg aus `pshymn.json`: `^rR^0r°Lobet den Herrn, alle Völker.`). Ein blindes `replace(/[0-4]/g, '')` würde aus `^0r` ein `^r` machen und damit die Tag-Paarung zerstören. Es braucht also weiterhin keinen vollen Tokenizer, aber bei der `0` denselben Negative-Lookbehind wie in `tokenizeHalfVerse` (`(?<!\^)0`):
```javascript
const stripCantMarkers = (text) => text
    .replace(/\|{1,2}/g, '')
    .replace(/[1-4]/g, '')
    .replace(/~/g, '')
    .replace(/(?<!\^)0/g, '');
```

## Anpassungen im TextFormatter

### getDoxology
Aktuell verzweigt `getDoxology` nach `localPrefLanguage === "_cant"`. Neu: Für Deutsch **und** Latein wird **immer** der markierte String zurückgegeben — die Marker sind tonartunabhängig und werden erst in `formatPsalm` (s.o., „Ort der Bereinigung") je nach `cantMode` aufgelöst oder entfernt. Die Verzweigung nach Sprache verschwindet aus `getDoxology` fast vollständig:
```javascript
const getDoxology = (localPrefLanguage) => {
    if (localPrefLanguage === "_lat") {
        return "Glória |Pa2tri 1et ||Fí0li0o^*"
            + "et Spir3|í2tu1i ||Sanc0to.^p"
            + "Sicut erat in princípio, et°2|nunc°1et°||sem0per,^*"
            + "et in sǽcula sæ3cu2|ló1rum. ||A0men.";
    }
    return "Ehre sei dem |Va0ter 2und 1dem ||Sohn^*"
        + "und 4dem 3|Hei2li1gen ||Geist,^p"
        + "wie im Anfang, so°auch°2|jetzt°1und°||al0le°Zeit^*"
        + "und in 3|E2wig1keit. ||A0men.";
};
```
Die lateinische Doxologie ist oben bereits mit Markern versehen (s. Code). Da die Psalmtöne und Kadenzregeln (`PSALM_TONE_CADENCE`) strukturell sprachunabhängig sind — dieselben Psalmtöne, dieselbe Silbenzähllogik —, gilt für lateinische Psalmtexte künftig exakt derselbe Workflow wie für deutsche: Sobald `text_lat` eines Psalms Marker und der Psalm ein `text_mode` hat, greift `cantMode` genauso wie beim deutschen Text (s. „Ermittlung von cantMode"). Es ist also **kein** separater Code-Pfad für Latein nötig, nur die schrittweise Annotation der lateinischen Psalmtexte selbst (analog zur deutschen Annotation, § Arbeitsaufteilung im Projektgedächtnis).

### Ermittlung von cantMode
Siehe oben (§ „Aufruf von formatCantMarkers in formatPsalm", Formel unter „Ort der Bereinigung"). Zusammengefasst: `cantMode` ist nur dann gesetzt, wenn `showCantMarkers=true` **und** der bereits sprachspezifisch aufgelöste `text` (bzw. `psalmRef.cant` bei BuM) ein `|` enthält — nicht mehr von `localPrefLanguage === '_cant'` oder einem eigenen `text_cant`-Feld. Ist `cantMode` `null`, werden `text` und `doxology` direkt im Anschluss bereinigt (`stripCantMarkers`), bevor sie in den Plain-Zweig gehen.

### PsalmCantDisplay
Die Komponente selbst (Ton-Popup, `selectedMode`-State, Notenbild-Button) bleibt strukturell unverändert. Zwei Anpassungen sind nötig:

1. **Trigger-Bedingung** in `formatPsalm`: wechselt von der alten `cantMode`-Berechnung auf die neue (s.o.) — rein im aufrufenden Code, `PsalmCantDisplay` selbst braucht keine Änderung an der Trigger-Logik.
2. **Aufruf von `formatPrayerText`**: Aktuell wird `localPrefLanguage: '_cant'` übergeben, nur um `formatCantMarkers` zu aktivieren:
   ```javascript
   formatPrayerText({ provText: text, localPrefLanguage: '_cant', marker: 'cant' + selectedMode })
   ```
   Das ist problematisch, weil `localPrefLanguage` an mehreren Stellen in `formatPrayerText` für andere Zwecke ausgewertet wird (z.B. Zeile ~602: `['_neu', '_ben'].includes(localPrefLanguage)` für `^c`-Kursivierung). Wird `_cant` als Wert entfernt, darf `PsalmCantDisplay` hier nicht mehr `'_cant'` faken, sondern muss die **tatsächliche** `localPrefLanguage` (als Prop durchgereicht) übergeben, und die Cant-Verarbeitung ausschließlich über `marker.startsWith('cant')` triggern (das ist in `formatPrayerText` Zeile 377 bereits so verankert und bleibt unverändert):
   ```javascript
   formatPrayerText({ provText: text, localPrefLanguage, marker: 'cant' + selectedMode })
   ```
   `PsalmCantDisplay` braucht dafür `localPrefLanguage` als zusätzlichen Prop (kommt aus `formatPsalm` ohnehin schon vor).

## Zusammenspiel mit `^c` (Kapitälchen für Gottesnamen)
Der Gottesname (HERR/HERRN/HERREN/GOTT/GOTTES/IHN) wird bei `_neu`/`_ben` in Großbuchstaben in der Datenbank gehalten und erst spät in `formatPrayerText` (`replaceNames`, Zeile ~599–603, aufgerufen Zeile 657) per Regex in `^c…^0c` (Kapitälchen) gewrappt — **nachdem** `formatCantMarkers` (Zeile 377–381) bereits gelaufen ist. Der Text durchläuft `formatCantMarkers` also unverändert in Großbuchstaben, ohne dass diese Funktion etwas davon weiß.

**Zwei getrennte Probleme, unterschiedlich schwer:**

1. **Einsilbig (z.B. `||HERRN`), bereits ein bestehender Bug — unabhängig vom Umbau:** Bleibt das Wort in einem Slot, wird es zu `^uHERRN^0u` getaggt; die Kapitälchen-Regex findet „HERRN" darin trotzdem noch (Tags unterbrechen die Buchstabenfolge nicht) und erzeugt `^u^cHERRN^0c^0u`. Die Rendering-Funktion für `^u`-Inhalte ruft aber `renderWithEll(content, …)` auf, die **nur** `^ELL`-Tags entpackt (Zeile 698–705), nicht `^c` — der Nutzer sieht den rohen Text `^cHERRN^0c` statt Kapitälchen. Betrifft schon das bestehende `_cant`-System, sobald ein einsilbiger Gottesname im Kadenzbereich annotiert wird — lohnt sich, unabhängig vom größeren Umbau zeitnah zu fixen (siehe Punkt 3).

2. **Zweisilbig (`GOT2TES`, `HER0REN`), wie erwartet problematisch, aber nur Stilverlust:** Werden die Silben durch einen Marker getrennt, landen sie in unterschiedlichen Ton-Gruppen und sind im fertigen Text nicht mehr direkt aneinandergrenzend. Die Regex findet dann keine zusammenhängende Zeichenkette mehr → keine Kapitälchen, das Wort erscheint in normalen Großbuchstaben (kein kaputtes Rendering, nur fehlende Kapitälchen-Optik).

**Warum ein einfaches Vor-Wrapping nicht reicht:** Die Betonungs-/Countdown-Marker stehen *innerhalb* des Wortes (`|GOT2TES`) — ein `^c`-Wrap um das ganze Wort vor der Silbentrennung würde von `tokenizeHalfVerse` genauso auseinandergerissen wie die Buchstaben selbst.

**Lösungsansatz:** Kapitälchen-Erkennung auf Slot-Ebene, innerhalb von `buildTaggedText` in `CantFormatter.js`, dort wo ohnehin schon Ton-Gruppen zusammenhängender Slots gebildet werden:
1. Großbuchstaben-Läufe, die `HERR(EN)?|GOTT(ES)?|IHN` entsprechen, werden anhand der Buchstabenfolge **über die Slots hinweg** erkannt (die Reihenfolge bleibt beim Tokenisieren erhalten).
2. `^c…^0c` wird **lokal innerhalb jeder Ton-Gruppe** gesetzt, nie über eine `^u`/`^b`-Grenze hinweg — fällt ein Gottesname genau auf eine Grenze, entstehen zwei separate `^c`-Paare, eines je Ton-Gruppe. Gleiches Muster wie die bereits gelöste `^u`/`^b`-Verschachtelung (`doc/Singbare-Psalmen.md` §7.5, dort `^0u^b^u` statt echter Verschachtelung).
3. `renderWithEll` wird generalisiert (entpackt künftig `^ELL` **und** `^c`) — behebt zugleich den einsilbigen Bug aus Punkt 1.
4. `formatCantMarkers` wendet beim eigenen `^c`-Wrapping dieselbe `firstCapital`-Transformation an wie `replaceNames` (Zeile 601: `HERRN` → `Herrn`, nur Anfangsbuchstabe groß). Damit ist ein doppeltes Wrapping automatisch ausgeschlossen, ganz ohne zusätzlichen Guard: Die spätere Kapitälchen-Regex in `replaceNames` ist case-sensitiv und sucht nur nach durchgängigen Großbuchstaben (`HERREN|HERRN?|GOTTES|GOTT|IHN`) — in „Herrn" (gemischte Schreibung) findet sie nichts mehr. Die Groß-/Kleinschreibung selbst ist also der Schutz vor `^c^cHERRN^0c^0c`.

**Der zweisilbige Fall wird damit vollständig gelöst, nicht nur der einsilbige** — der Lösungsansatz (Punkte 1–2) erzeugt pro Ton-Gruppe ein eigenes, lokal geschlossenes `^c…^0c`-Paar. Für `Ich komme wegen der Machttaten |GOT2TES, 1des ||Herrn,^*` also etwa `^u^cGot^0c^0u2TES,` → nach Ton-Zuweisung z.B. `^u^cGot^0c^0u ^ctes^0c, des ||Herrn,` (genaue Ton-Gruppierung hängt vom Psalmton ab, das Prinzip bleibt gleich). Wichtig dabei: Die `firstCapital`-Regel gilt für das **ganze erkannte Wort**, nicht pro Fragment — nur der allererste Buchstabe des gesamten Gottesnamens wird groß geschrieben (`Got`), das Fortsetzungsfragment in der nächsten Ton-Gruppe bleibt durchgehend klein (`tes`, nicht `Tes`). Die Slot-übergreifende Erkennung muss sich also merken, ob ein Fragment die *Fortsetzung* eines bereits begonnenen Gottesnamens ist oder dessen *Anfang*.

**Voraussetzung:** Fällt die Marker-Trennung so, dass die Silbengrenze mitten im Namen liegt (`GOT`/`TES`), landen die Fragmente zwangsläufig in unterschiedlichen Ton-Gruppen — daran ändert auch dieser Lösungsansatz nichts, nur wird jede Gruppe für sich korrekt in Kapitälchen dargestellt, statt dass die Kapitälchen-Formatierung ganz entfällt.

**Belege aus der Praxis** (zeigen, dass das Problem alle drei Fälle real betrifft, nicht nur `_neu`):
- Ps 1_neu, einsilbig (Fall 1, Bug): `sondern sein Gefallen hat an der |Wei2sung 1des ||HERRN,^*`
- Ps 27,2_ben, zweisilbig (Fall 2, Stilverlust): `fasse Mut und 3|har2re 1des ||HER0REN.` — zeigt, dass auch `_ben` (Benediktinisches Antiphonale) betroffen ist, nicht nur `_neu` (beide nutzen die Kapitälchen-Regel, Zeile 602: `['_neu', '_ben']`).
- Ps 71,2_neu, zweisilbig (Fall 2, Stilverlust): `Ich komme wegen der Machttaten |GOT2TES, 1des ||Herrn,^*`

## Datenfluss / Prop-Threading für `showCantMarkers`
`showCantMarkers` muss analog zu `localPrefLanguage` durchgereicht werden:
- **`PersonalSettings.js`**: neuer State `showCantMarkers`, initialisiert aus `localStorage.getItem('showCantMarker')`.
- **`Direktorium.js`**: neuer Top-Level-State (analog `localPrefLanguage`/`setLocalPrefLanguage`); die lokalen Wrapper
  ```javascript
  const formatPrayerText = (provText, marker = "") =>
      extFormatPrayerText({ provText, localPrefLanguage, localPrefLatin, marker, hour, texts, prefSource, widthForHymns, showCantMarkers });

  const formatPsalm = (psalm, num = -1, modeOverride = null, antIsFirst = false) =>
      extFormatPsalm(psalm, num, localPrefLanguage, modeOverride, antIsFirst, showCantMarkers);
  ```
  bekommen den zusätzlichen Parameter. Der direkte Aufruf `formatPsalm(ordinariumTexts, 'BuM', getValue('modeev'))` (Zeile ~926, Nunc Dimittis in der Komplet) läuft automatisch über denselben Wrapper mit.
- **`SectionHeader.js`**: neuer Prop `showCantMarkers` + `setShowCantMarkers` für den neuen Quick-Switch-Button (analog zu `localPrefLanguage`/`setLocalPrefLanguage`).
- **`ThemeMenu`**: liest/schreibt `showCantMarkers` wie beschrieben.

## ordinarium.js: Zusammenführung der BuM-Cant-Variante
Für Benedictus, Magnificat und Nunc Dimittis wird die separate `'cant'`-Objektebene (Geschwister von `'dt'`/`'lat'`) aufgelöst:
- Der markierte Text (Feld `"cant"` innerhalb des `'cant'`-Objekts) und das `"mode"`-Feld wandern in das `'dt'`-Objekt (Feld `"cant"` wird dort um die Marker ergänzt, `"mode"` neu ergänzt).
- Das gesamte `'cant'`-Objekt (mit den duplizierten `confiteor`, `vu`, `closing` usw.) wird gelöscht.
- `languageToRead` (aktuell `localPrefLanguage === '_lat' ? "lat" : localPrefLanguage === '_cant' ? "cant" : "dt"`) vereinfacht sich zu `localPrefLanguage === '_lat' ? "lat" : "dt"`.
- Da `ordinarium.js` nicht über den Excel-Converter gepflegt wird, muss dieser Merge von Hand erfolgen, sobald die drei Canticum-Texte (die bereits vorliegen) final geprüft sind.

## Converter
berücksichtigt nicht mehr Text_cant für das Excel-Blatt "PsalmenHymnen": Die Marker stehen künftig direkt in der Spalte `Text` (Stundenbuch); `Text_mode` bleibt als eigene Spalte bestehen (Psalmton, sprachunabhängig). Die Migration des bestehenden Excel-Bestands (vorhandene `Text_cant`-Spalte in die `Text`-Spalte überführen, `Text_cant`-Spalte danach entfernen) nimmt der Nutzer selbst im Arbeitsblatt vor; anschließend werden `PsHymn.ts`/`pshymn.json` mit dem Converter neu erzeugt.

## Nebenbei aufgeräumt
`HymnSelector.js` Zeile 10 (`['_neu', '_ben', '_cant'].includes(localPrefLanguage)`) verliert `'_cant'` aus der Liste, da dieser Wert für `localPrefLanguage` nicht mehr vorkommt.

## Offene Punkte
- Genaue Restformulierung der Legende-Zeile für "cant" im ThemeMenu (Wortlaut).
- Reihenfolge der Umsetzung (Vorschlag): 1) `showCantMarkers`-State + Prop-Threading, 2) `cantMode`-Ermittlung + `stripCantMarkers` + Bereinigungs-Zweig in `formatPsalm`, 3) `getDoxology`-Anpassung, 4) `PsalmCantDisplay`-Anpassung, 5) SectionHeader-Schnellschalter, 6) ThemeMenu-Umbau (Button statt LongPress) + Migration, 7) `ordinarium.js`-Merge, 8) Excel/Converter-Migration durch den Nutzer, 9) Aufräumen (`HymnSelector.js` u.a.).
- Unabhängig vom obigen Zeitplan, möglichst bald: `renderWithEll` in `TextFormatter.js` um `^c`-Entpackung erweitern (behebt den einsilbigen Gottesnamen-Bug, s. § „Zusammenspiel mit ^c") — betrifft potenziell schon jetzt annotierte `text_cant`-Inhalte.