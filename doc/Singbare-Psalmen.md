# Singbare Psalmen (Sprachvariante `_cant`)

**Stand:** Februar 2026
**Status:** Arbeitsplan / in Planung

---

## 1. Ziel und Hintergrund

In der App soll eine neue Textvariante der Psalmen eingeführt werden, in der die Verse für den Gesang nach einem Psalmodie-Modell eingerichtet sind. Beim Gesang wird jeder Halbvers auf einem Rezitationston gesungen; am Ende jedes Halbverses gibt es eine melodische Kadenz (je nach Modus 2–5 Töne). Im Text wird die Einrichtung durch zwei Arten von Markierungen angezeigt:

1. **Kadenz-Beginn (Unterstreichung):** Die erste Silbe, die vom Rezitationston abweicht, wird unterstrichen. Dafür ist das Tag-Paar `^u ... ^0u` bereits im TextFormatter vorhanden.

2. **Silbenverbindung (Klammer):** Silben, die innerhalb der Kadenz auf denselben Ton gesungen werden, werden zusammengebunden. Im Gotteslob geschieht dies durch eine eckige Klammer unter den Silben. Neu einzuführen: Tag-Paar `^b ... ^0b`.

**Beispiel (Ps 36,2 in der Einrichtung):**
```
Der Frevler spricht: „Ich°bin°ent^uschlos^0us^ben°zu^0bm°Bösen."^*
```
- `^u...^0u` → Silbe „schlos" unterstrichen (Kadenz-Beginn)
- `^b...^0b` → „en zum" auf demselben Kadenz-Ton gebunden (Klammer-Gruppe)

**Cantica** (Nummern > 150 in PsHymn.ts) werden genau wie Psalmen behandelt und können ebenfalls eingerichtet werden; es ist kein gesonderter Aufwand nötig.

---

## 2. Neue Felder in den Daten

### 2.1 Excel-Arbeitsblatt „PsalmenHymnen"

Zwei neue Spalten werden ergänzt:

| Spalte | Typ | Bedeutung |
|--------|-----|-----------|
| `Text_cant` | Text | Psalm-Text für den Gesang, mit Markierungen `^u...^0u` und `^b...^0b` |
| `Text_mode` | Text | Modus/Psalmton: römische Zahl I–IX, `irr.` (Tonus irregularis) oder `per.` (Tonus peregrinus) |

### 2.2 TypeScript-Interface (PsHymn.ts)

Neue optionale Felder in `PsalmSection`:
```typescript
text_cant?: string;   // Text für den Gesang
text_mode?: string;   // Psalmton (z.B. "VIII", "irr.", "per.")
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

In `validate_psalm_text` wird `Text_cant` ebenfalls validiert. Zusätzlich zur Vers-Struktur werden die neuen Tags geprüft:
- `^u ... ^0u` und `^b ... ^0b` müssen paarweise auftreten (keine ungeschlossenen Tags).
- `^b ... ^0b` darf nur innerhalb einer Zeile vorkommen (nicht über `^*` hinaus).
- `Text_mode` muss dem Muster `^(I{1,3}|IV|V?I{0,3}|VIII|IX|irr\.|per\.)$` entsprechen (also I–IX, `irr.` oder `per.`), falls vorhanden.

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

```javascript
const getDoxology = (localPrefLanguage, psalm) => {
    if (localPrefLanguage === "_lat" && psalm.text_lat) {
        return "Glória Patri et Fílio^*et Spirítui Sancto.^p...";
    }
    if (localPrefLanguage === "_cant" && psalm.text_cant && psalm.text_mode) {
        return getCantDoxology(psalm.text_mode);
    }
    return "Ehre sei dem Vater und dem Sohn^*und dem Heiligen Geist,^p"
         + "wie im Anfang, so°auch°jetzt°und°alle°Zeit^*und in Ewigkeit. Amen.";
};

const getCantDoxology = (mode) => {
    switch (mode) {
        case 'I':   return DOXOLOGY_CANT_GROUP_A;
        case 'II':  return DOXOLOGY_CANT_GROUP_B;
        case 'III': return DOXOLOGY_CANT_GROUP_C;
        case 'IV':  return DOXOLOGY_CANT_GROUP_D;
        case 'V':   return DOXOLOGY_CANT_GROUP_E;
        case 'VI':  return DOXOLOGY_CANT_GROUP_F;
        case 'VII': return DOXOLOGY_CANT_GROUP_A;  // ggf. wie I
        case 'VIII': return DOXOLOGY_CANT_GROUP_B;  // ggf. wie II
        case 'IX':   return DOXOLOGY_CANT_GROUP_A;  // ggf. wie I/VII
        case 'per.': return DOXOLOGY_CANT_PER;      // Tonus peregrinus
        case 'irr.': return DOXOLOGY_CANT_IRR;      // Tonus irregularis
        default:     return DOXOLOGY_STANDARD_DE;
    }
};
```

### 5.3 Doxologie-Gruppen (Markierungen noch zu verifizieren)

Die genauen Silbenmuster der Kadenzen in der deutschen Doxologie müssen anhand der musikalischen Quellen (Gotteslob, Stundenbuch, GL-Orgelbuch) noch **exakt ermittelt** werden. Vorläufige Zuordnung nach dem Kadenztyp (Anzahl der Kadenztöne / Silbenfelder):

| Gruppe | Psalmtöne | Kadenztyp | Status |
|--------|-----------|-----------|--------|
| A | I, VII, IX | gleiche Schlusswendung (z.B. 3-silbige Mittelkadenz) | **zu verifizieren** |
| B | II, VIII | gleiche Schlusswendung | **zu verifizieren** |
| C | III | | **zu ermitteln** |
| D | IV | | **zu ermitteln** |
| E | V | | **zu ermitteln** |
| F | VI | | **zu ermitteln** |
| per. | Tonus peregrinus | zwei verschiedene Rezitationstöne | **zu ermitteln** |
| irr. | Tonus irregularis | keine fest definierte Kadenzformel | **zu ermitteln** |

> **Hinweis:** Die Zuordnung der Psalmtöne zu Gruppen und die genauen `^u`/`^b`-Positionen im Doxologietext müssen durch Abgleich mit den Notationsvorlagen im Gotteslob (bzw. der Psalmodie-Einführung zum Gotteslob 2013) verifiziert werden, bevor dieser Abschnitt implementiert wird.

Die vier Halbverse der Doxologie lauten:
1. `… und dem Sohn` (vor `^*`)
2. `… und dem Heiligen Geist,`
3. `… und alle Zeit` (vor `^*`)
4. `… und in Ewigkeit. Amen.`

Für jede Gruppe ist je ein vollständiger Doxologie-String mit Markierungen zu hinterlegen, z.B.:
```javascript
const DOXOLOGY_CANT_GROUP_A =
  "Ehre sei dem Vater^bund dem^0b^uSohn^0u,^*"    // ← Platzhalter!
+ "und dem^bHeiligen^0b^uGeist^0u,^p"             // ← Platzhalter!
+ "wie im Anfang, so°auch°jetzt^bund alle^0b^uZeit^0u,^*"  // ← Platzhalter!
+ "und in^bEwigkeit.^0b^uAmen^0u.";               // ← Platzhalter!
```

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
{renderDescriptionItem("StB:", "Einheitsübersetzung von 1983", false)}
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

---

## 8. Notenzeile (Psalmodiemodell) zum Psalmton

### 8.1 Vorhandene Bilddateien

Im Ordner `doc/Psalmtöne/` liegen 23 Dateien. Formatanalyse:

| Dateiname | Format | Psalmton | Variante |
|-----------|--------|----------|---------|
| `01.tif`  | TIFF   | I        | Grundform |
| `01a.tif` | TIFF   | I        | a |
| `01g.tif` | TIFF   | I        | g |
| `01m.tif` | TIFF   | I        | m |
| `02.tif`  | TIFF   | II       | Grundform |
| `02C.tif` | TIFF   | II       | C |
| `02g`     | JPEG   | II       | g (Datei ohne Endung – Duplikat von `02g.jpg`) |
| `02g.jpg` | JPEG   | II       | g |
| `02m.tif` | TIFF   | II       | m |
| `03.tif`  | TIFF   | III      | Grundform |
| `04.jpg`  | JPEG   | IV       | Grundform (Duplikat von `04.tif`) |
| `04.tif`  | TIFF   | IV       | Grundform |
| `04a.tif` | TIFF   | IV       | a |
| `04g.tif` | TIFF   | IV       | g |
| `05.tif`  | TIFF   | V        | Grundform |
| `06.tif`  | TIFF   | VI       | Grundform |
| `07.tif`  | TIFF   | VII      | Grundform |
| `07a.tif` | TIFF   | VII      | a |
| `08.tif`  | TIFF   | VIII     | Grundform |
| `08a.tif` | TIFF   | VIII     | a |
| `08b.tif` | TIFF   | VIII     | b |
| `08c.tif` | TIFF   | VIII     | c |
| `09.tif`  | TIFF   | IX / per.| Grundform |

Kein Bild für `irr.` (Tonus irregularis), was sachlich sinnvoll ist.

Die Suffixe `a`, `b`, `c`, `g`, `m`, `C` bezeichnen **verschiedene Kadenz-Varianten** des jeweiligen Psalmtons, in der Regel unterschieden nach dem Schlusston der Kadenz. Welche Varianten für die Einrichtung nach dem *Antiphonale zum Stundengebet* tatsächlich benötigt werden, muss noch geprüft werden (s. §10, offener Punkt 1).

### 8.2 Bildformat: PNG direkt aus Capella exportieren

Die Bilder sollen direkt aus Capella als **PNG** exportiert werden.

**Warum PNG und nicht JPEG:**
- Notenbilder bestehen aus scharfen schwarzen Linien auf weißem Grund; JPEG-Komprimierung erzeugt dort sichtbare Artefakte (Unschärfe, Halos um Linien und Notenköpfe).
- PNG ist verlustfrei → keine Qualitätseinbuße, perfekte Kanten.
- Im Dark Mode wird `filter: invert(1)` angewendet; mit JPEG-Artefakten entstehen dabei graue Ränder; PNG-Kanten bleiben sauber.
- PNG wird von allen Browsern nativ unterstützt.

Die vorhandenen TIFF- und JPEG-Dateien in `doc/Psalmtöne/` werden nicht mehr benötigt und können durch die PNG-Exporte ersetzt werden. Die PNG-Dateien kommen nach `direktorium/public/images/psalmtones/` und werden **direkt nach dem `text_mode`-Wert benannt**: `I.png`, `Ia.png`, `VIII.png`, `VIIIa.png` usw. Die Werte `per.` und `irr.` erhalten Dateinamen ohne den abschließenden Punkt: `per.png` und `irr.png` (da `per..png` doppelter Punkt).

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
IX
per.
irr.
```

Die Validierungsroutine in `converter.py` (`valid_text_modes`) muss nach Klärung entsprechend erweitert werden.

### 8.4 Bildpfad: direkte Ableitung aus `text_mode`

Da die Dateinamen dem `text_mode`-Wert entsprechen, ist kein Lookup-Objekt nötig.
Eine kleine Hilfsfunktion berücksichtigt nur den Sonderfall des trailing Punkts:

```javascript
const psalmToneImageSrc = (mode) => {
    const stem = mode.endsWith('.') ? mode.slice(0, -1) : mode;
    return `/images/psalmtones/${stem}.png`;
};
// Beispiele:
// 'VIII'   → '/images/psalmtones/VIII.png'
// 'VIIIa'  → '/images/psalmtones/VIIIa.png'
// 'per.'   → '/images/psalmtones/per.png'
// 'irr.'   → '/images/psalmtones/irr.png'
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
| 3 | Doxologie-Kadenzmuster | `^u`/`^b`-Positionen für alle Gruppen ermitteln (§5.3) |
| 4 | CSS-Klammer | Liniendicke und Abstände nach Gerätansicht anpassen |
| 5 | ThemeMenu ohne `_ben` | Grid bleibt 4-spaltig wenn `unlockBenedictine` false |

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
