# Dokumentation: `formatCantMarkers` und Hilfsfunktionen

**Stand:** Februar 2026
**Datei:** `src/components/dataHandlers/TextFormatter.js`

---

## 1. Überblick

`formatCantMarkers(text, mode)` wandelt abstrakte Gesangsmarker aus dem `text_cant`-Feld in
Rendering-Tags (`^u..^0u` für Unterstreichung, `^b..^0b` für Klammer) um.

Aufruf: Vor der Haupttransformation in `formatPrayerText`, wenn `marker.startsWith('cant')`.

Verarbeitungskette:
```
text_cant → formatCantMarkers → ^u/^b-getaggter Text → formatPrayerText (Rendering)
```

---

## 2. Halbvers-Aufteilung (`formatCantMarkers`)

Der Psalmtext wird anhand der Trennzeichen `^*` (Mittelkadenz), `^p` (Schlusskadenz) und
`^+` (Flexa) in Halbverse zerlegt. Jeder Halbvers wird mit dem zugehörigen Kadenztyp an
`formatHalfVerse` weitergegeben.

---

## 3. Slot-basierte Tokenisierung (`tokenizeHalfVerse`)

Jeder Halbvers-String wird in **Slots** zerlegt. Jeder Slot verbindet die Marker-Info mit dem
unmittelbar darauf folgenden Silbentext.

### Slot-Struktur

```typescript
{
    countdown: '1'|'2'|'3'|'4'|'',  // Zähl-Marker vor der Silbe
    stressed:  '|'|'||'|'',          // Betonungsmarker
    tilde:     boolean,              // ~ (Silbenverbindung für b=2)
    syllBound: boolean,              // 0 (einfache Silbengrenze)
    text:      string                // folgender Silbentext
}
```

### Beispiel

```
Eingabe: "und dem 3|Hei2li1gen ||Geist,"

Slots:
  idx 0: {countdown:'',  stressed:'',   tilde:false, syllBound:false, text:'und dem '}
  idx 1: {countdown:'3', stressed:'|',  tilde:false, syllBound:false, text:'Hei'}
  idx 2: {countdown:'2', stressed:'',   tilde:false, syllBound:false, text:'li'}
  idx 3: {countdown:'1', stressed:'',   tilde:false, syllBound:false, text:'gen '}
  idx 4: {countdown:'',  stressed:'||', tilde:false, syllBound:false, text:'Geist,'}
```

**Kernvorteil:** Ton-Zuweisungen landen direkt auf dem Slot mit dem Silbentext – kein
separates Marker-Token mehr, das übersprungen werden müsste.

---

## 4. Marker-Scan und `cadStartIdx`

`formatHalfVerse` scannt die Slots und merkt sich:
- `dblBarIdx`: Slot-Index des `||`-Markers
- `sglBarIdxs[]`: Slot-Indizes aller `|`-Marker
- `countdownIdxs['1'..'4']`: Slot-Indizes der Zähl-Marker
- `tildeIdx`: Slot-Index des `~`-Markers

`cadStartIdx` (Kadenzanfang) wird aus diesen Indizes berechnet:

| Situation         | cadStartIdx zeigt auf …                          |
|-------------------|--------------------------------------------------|
| b=2               | erstes `|` vor `||` (oder `||` selbst falls fehlt)|
| b=1, v=0          | `||`-Slot                                        |
| b=1, v=1          | `1`-Slot                                         |
| b=1, v=3          | `3`-Slot                                         |

Da alle Indizes auf Slots zeigen (nicht auf separate Marker-Tokens), enthält
`slots[cadStartIdx].text` bereits den Silbentext des Kadenzanfangs.

---

## 5. Ton-Zuweisungen (`assignTones*`)

Das `tone[]`-Array hat einen Eintrag pro Slot. Bedeutung der Tonnummern:

| Ton | Rendering                                              |
|-----|--------------------------------------------------------|
| 0   | Rezitationston: plain                                  |
| 4   | Kadenzanfang: Unterstreichung `^u…^0u`                 |
| 3   | Zwischen erstem und zweitem Betonungsgipfel (nur b=2)  |
| 2   | Vorletzter Ton: plain (einzeln) oder Gruppe mit Ton 2  |
| 1   | Letzter Ton (Koda): Klammer `^b…^0b` wenn ≥ 2 Silben  |

### `assignTonesB1` (b=1, Normalfall)

```javascript
tone[cadStartIdx] = 4;   // Unterstreichung auf Kadenzanfang-Slot
// Slots zwischen cadStart und || bleiben 0 (plain, jede Silbe auf eigenem Schritt)
tone[dblBarIdx] = 2;     // vorletzter Ton
// Alle Slots danach: tone = 1 (Koda, → Klammer wenn mehrere)
```

Trace für Ton VI Schlusskadenz (v=3, b=1):

| Slot-Idx | Text      | Ton | Rendering           |
|----------|-----------|-----|---------------------|
| 0        | 'und dem '| 0   | plain               |
| 1        | 'Hei'     | 4   | `^uHei^0u`          |
| 2        | 'li'      | 0   | plain               |
| 3        | 'gen '    | 0   | plain               |
| 4        | 'Geist,'  | 2   | plain (einzeln)     |

Ausgabe: `und dem ^uHei^0uli gen Geist,`

### `assignTonesB2` (b=2, weiblicher/männlicher Versschluss)

```
tone[cadStartIdx] = 4   // Unterstreichung auf erstem |
tone[dblBarIdx]   = 2   // vorletzter Ton (||)
Slots zwischen:   = 3   // Gruppe zwischen den beiden Betonungen
Slots nach ||:    = 1   // Koda
```

Tilde `~` verschiebt die Grenze zwischen Ton 3 und Ton 2.

### `assignTonesThreeStressed` (b=2, drei betonte Silben)

Wenn zwei `|`-Marker vor `||` vorhanden:

```
tone[bar1] = 4   // erste Betonung: Unterstreichung
Slots 3 dazwischen = 3
tone[bar2] = 2   // zweite Betonung
tone[dblBarIdx] = 1   // dritte Betonung (Koda)
```

---

## 6. Ausgabe-Bau (`buildTaggedText`)

```javascript
const buildTaggedText = (slots, tone) => {
    // Ton 0: plain
    // Ton 4: ^u{text}^0u
    // Töne 1/2/3: aufeinanderfolgende gleiche Töne → ^b{group}^0b; einzeln → plain
};
```

Da jeder Slot genau einen Silbentext enthält und kein separates Marker-Token mehr existiert,
entfällt das frühere „Marker überspringen". Aufeinanderfolgende Slots mit gleicher Tonnummer
werden automatisch zu einer Klammer zusammengefasst.

---

## 7. Flexa-Sonderfall

Bei `cadenceType === 'flexa'`:
- `|` vorhanden → Silbe direkt vor `|` unterstreichen (Regex-Ersatz, kein Slot-Durchlauf)
- `~` vorhanden → durch `~` verbundene Silben klammern
- sonst → Text unverändert

---

## 8. Bekannte Sonderfälle

| Bezeichnung    | Bedingung                          | Behandlung                              |
|----------------|------------------------------------|-----------------------------------------|
| Sonderfall 1   | b=1, `|` kommt NACH `||` im Text  | `assignTonesB1Sonderfall1`              |
| Sonderfall 3   | b=1, `4`-Marker vorhanden         | `has4=true` → `v_eff = v + 1`          |
| v=0            | b=1, cadStart = dblBarIdx         | kein Zwischenbereich; Koda = Ton 1      |
| Männlicher Schluss | b=2, kein Text nach zweitem | → letzter Slot = Ton 1, Rest Ton 2/3   |
