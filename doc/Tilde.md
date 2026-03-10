# Die Tilde (`~`) in `formatCantMarkers`

Die Tilde erfüllt in `formatCantMarkers` **drei völlig verschiedene Rollen**, die sorgfältig unterschieden werden müssen:

---

## Rolle 1: Tilde als Annotationsmarker — Verlängerung des Kadenzanfangs

### Prinzip

Die Tilde markiert in der Annotation, dass Silben, die nach der normalen Tonzuweisung auf T3 (b=2) oder T1 (b=1) fielen, stattdessen zum vorhergehenden Kadenzton verschoben werden. Die verschobenen Silben werden dabei durch eine **gemeinsame Unterstreichung** (statt einzelner Unterstreichungen oder Klammerung) mit dem Kadenzanfang verbunden.

Die Tilde ist nur wirksam, wenn sie sich im richtigen Slot befindet:
- **b=2**: nur wenn der Tilde-Slot nach normaler Zuweisung T3 hätte (sonst ignoriert)
- **b=1**: nur wenn der Tilde-Slot nach normaler Zuweisung T1 hätte (sonst ignoriert)

### Tokenizer

`tokenizeHalfVerse` erkennt `~` als Markerzeichen (Regex `[|]{1,2}|[1-4]|~|(?<!\^)0`). Ein Slot mit `~` in seiner Marker-Sequenz erhält das Flag `tilde: true`. Pro Halbvers wird nur **ein** `tildeIdx` gespeichert.

### b=2: Tilde im T3-Slot → Unterstreichung von cadStartIdx bis tildeIdx

Nach der normalen Tonzuweisung durch `assignTonesB2` oder `assignTonesThreeStressed`:

```
tone[cadStartIdx .. tildeIdx] = 5   (alle inkl.)
```

Tone=5 bedeutet: alle diese Slots werden in `buildTaggedText` zu **einem** `^u...^0u`-Span zusammengefasst (einschließlich Leerzeichen und `°` dazwischen). Die Silben nach `tildeIdx` behalten ihre normale Zuweisung (T3, T2, T1).

**Beispiel** (b=2, männlich): Annotation `|Herr~lich~keit` mit Tilde auf `keit` (T3-Slot):
- Normalfall: `Herr`=T4, `lich`=T3, `keit`=T2 oder T1
- Mit Tilde auf T3-Slot `lich`: `Herr lich`=T5 (gemeinsame Unterstreichung), `keit`=T2/T1

### b=1, v=0: Tilde im T1-Slot → Unterstreichung von `||` bis tildeIdx

Bei v=0 liegt der Kadenzanfang auf `||` (dblBarIdx), das schon T4 trägt:

```
tone[dblBarIdx .. tildeIdx] = 5   (alle inkl.)
```

Alle Slots vom `||` bis zum Tilde-Slot bekommen tone=5 → gemeinsame Unterstreichung.

### b=1, v>0: Tilde im T1-Slot → Klammerung mit `||`

Bei v>0 liegt `||` auf T2. Die Koda-Slots bis zum Tilde-Slot werden ebenfalls auf T2 gesetzt:

```
tone[dblBarIdx+1 .. tildeIdx] = 2   (alle inkl.)
```

Da `||` schon tone=2 hat, werden diese Slots in `buildTaggedText` als aufeinanderfolgende T2-Slots zu einer Klammer `^b...^0b` zusammengefasst.

---

## Rolle 2: Tilde als Rendering-Signal im Slot-Text (verkürzte Kadenz)

In zwei Sonderfällen wird die Tilde **nicht als Annotationszeichen gelesen**, sondern nachträglich in den `.text`-String eines Slots **eingebaut**, um dem Renderer zu signalisieren, dass zwei Kadenztöne auf einer einzigen Silbe liegen.

### Sonderfall a: `has43Combined` (b=1, männlicher Versschluss, verkürzte Kadenz)

Wenn T4 und T3 auf einer Silbe zusammenfallen, wird `~` an den `.text`-String des Kadenzanfang-Slots angehängt. `splitTrail` trennt diese `~` als „trail" vom Kerntext ab → sie erscheint als sichtbares Zeichen zwischen `^0u` und dem nächsten Text.

### Sonderfall b: `has32Combined` (T3 und T2 auf einer Silbe)

Analoges Vorgehen beim Slot mit Countdown-Marker `3`.

---

## Rolle 3: Tilde im Flexa-Sonderfall

Im Flexa-Halbvers (`cadenceType === 'flexa'`) klammert `~` die benachbarten Silben direkt zusammen (`^b…^0b`), wenn kein `|`-Marker vorhanden ist. Dies ist unabhängig von Rolle 1 und 2.

---

## Tone=5 in `buildTaggedText`

Tone=5 ist der einzige Tonwert, der mehrere Slots zu **einer gemeinsamen Unterstreichung** zusammenfasst:

```javascript
// Töne 1/2/3: ^b...^0b (Klammer)
// Tone 4:     ^u...^0u pro Slot (Einzelunterstreichung)
// Tone 5:     ^u...^0u über alle aufeinanderfolgenden Slots (erweiterte Unterstreichung)
```

---

## Zusammenfassung

| Stelle | Tilde-Verwendung | Kontext |
|---|---|---|
| Annotation b=2, T3-Slot | Verlängert T4-Unterstreichung bis Tilde-Slot (tone=5) | cadStartIdx…tildeIdx gemeinsam unterstrichen |
| Annotation b=1, T1-Slot, v=0 | Verlängert T4-Unterstreichung von `||` bis Tilde-Slot (tone=5) | dblBarIdx…tildeIdx gemeinsam unterstrichen |
| Annotation b=1, T1-Slot, v>0 | Gruppiert Tilde-Slot mit `||` (tone=2) | Klammerung mit `||` |
| Slot-Text `has43Combined`/`has32Combined` | `~` im `.text`-String, Rendering-Signal für Ligatur | Rolle 2, unabhängig |
| Flexa-Sonderfall | `~` klammert Nachbarsilben mit `^b...^0b` | Rolle 3, unabhängig |
