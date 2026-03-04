
# KI‑Workflow für Psalmtext‑Bearbeitung — Version 3 (endgültige Fassung)

> Ziel: Reproduzierbare, fehlerfreie Setzung von Betonungs‑, Countdown‑ und Silbentrenn‑Markern in Psalmen. Ausgabe **immer** mit `|` und `||`.

---

## 0. Grundsätze

**0.1 Keine Textveränderungen**  
Die KI ändert **niemals** den Text (Wortlaut, Leerzeichen, Gradzeichen `°`, Tilde `~`). Sie fügt ausschließlich Marker ein: `|`, `||`, `4`, `3`, `2`, `1`, `0`.

**0.2 Eingabehilfe, Ausgabeform**  
Eingabe darf `#`/`##` verwenden; intern werden sie zu `|`/`||` normalisiert.  
**Ausgabe erfolgt immer ausschließlich mit `|` und `||`.**

---

## 1. Betonungsmarker

**1.1 Vom Benutzer gesetzt**  
Die KI setzt keine neuen Betonungen, sondern prüft nur.

**1.2 Korrekturregel**  
Jede Zeile (außer `^+`) muss **genau ein `||`** enthalten.  
• Fehlt `||` → den **letzten** `|` zu `||` wandeln.  
• Mehr als ein `||` → Fehlerhinweis: *Betonungsmarker fehlerhaft* (nach der Zeile ausgeben).

**1.3 Flexa `^+`**  
Kommt `||` vor, wird es **zu `|`** herabgesetzt.

---

## 2. Silbentrenner `0`

**2.1 0‑Marker nach `||` — OBLIGATORISCH & vor Countdown**  
Vor jeder Countdown‑Berechnung muss die KI **nach `||`** in allen **mehrsilbigen Wörtern** sämtliche **inneren Silbengrenzen** mit `0` markieren (z. B. `||Zu0flucht`, `||Har0fe`, `||Ägyp0ten`).

**2.2 Bestimmung des Versschlusses (weiblich/männlich)**  
Nach dem Setzen der 0‑Marker hinter `||` gilt:  
• **weiblich**, wenn auf die betonte Silbe hinter `||` noch **mindestens eines** der folgenden Zeichen folgt: **Leerzeichen**, **Gradzeichen `°`** oder **`0`** (d. h. die betonte Silbe ist **nicht** Wortende).  
• **männlich**, wenn die betonte Silbe hinter `||` **Wortende** bildet (d. h. ihr folgt **kein** Leerzeichen/`°`/`0`).

**2.3 0‑Marker zwischen `|` und erstem Countdown**  
Diese werden **nach** dem Countdown gesetzt, und nur wenn:  
• eine **innere Silbengrenze** innerhalb eines Wortes vorliegt,  
• **kein** Countdown auf dieser Silbe steht,  
• **keine** Wortgrenze (Leerzeichen/`°`) unmittelbar vorausgeht.  
Gilt für `^*` **und** (selten) für `^p`‑Zeilen.

---

## 3. Countdown‑Marker

**3.1 Anzahl je Zeilentyp**  
• `^*` → genau **2** Marker: `2`, `1`  
• `^p` weiblich → **3** Marker: `3`, `2`, `1`  
• `^p` männlich → **4** Marker: `4`, `3`, `2`, `1`  
• Letzte Psalmzeile → wie `^p`, aber **ohne `^p`** am Ende

**3.2 Richtung**  
Countdown wird **immer vom `||` rückwärts** auf die **unmittelbar davorliegenden Silben** gesetzt — **nie** vom einfachen `|` aus.

**3.3 Positionierung**  
Countdown‑Marker stehen **am Anfang der Silbe** und **vor** allen anderen Markern dieser Silbe (insb. vor `|` und vor `0`).  
Beispiel: `3da 2|zu 1die ||Har0fe`.

**3.4 Stapelregel**  
Sind weniger Silben vorhanden als Marker benötigt, werden mehrere Ziffern **gebündelt vor dieselbe Silbe** gesetzt, in **absteigender Reihenfolge** (z. B. `43|lo2be 1den ||Herrn!`).

---

## 4. Flexa‑Zeilen `^+`

• `||` → `|`  
• **Kein** Countdown  
• **Obligatorischer** `0` vor der Schlusssilbe eines **mehrsilbigen** Wortes, wenn ihr **kein** Leerzeichen/`°` vorausgeht.

---

## 5. Algorithmische Reihenfolge (verbindlich)

1) **Normalisieren**: `#`→`|`, `##`→`||` (nur intern).  
2) **Betonung prüfen & korrigieren** (Abschnitt 1).  
3) **0‑Marker nach `||` setzen** (Abschnitt 2.1).  
4) **Versschluss bestimmen** weiblich/männlich (Abschnitt 2.2).  
5) **Countdown setzen** (Abschnitt 3): Anzahl je Zeilentyp; rückwärts ab `||`; am Silbenanfang; **vor `|`**; Stapelregel.  
6) **0‑Marker zwischen `|` und erstem Countdown** ergänzen (Abschnitt 2.3) — in `^*` und ggf. `^p`.  
7) **Letzte Zeile** wie `^p` behandeln, aber ohne `^p` ausgeben.  
8) **Ausgabe**: immer mit `|`/`||`.

---

## 6. Fehlerhinweis

Einziger Fehlerfall: **Betonungsmarker fehlerhaft** (mehr als ein `||` oder unzulässige Kombinationen in `^*`/`^p`).

---

## 7. Beispiele (aus der Praxis)

• Weibliche `^p` mit 3 Silben vor `||`:  
`3|jauchzt 2dem 1Gott ||Ja0kobs zu!^p`

• Weibliche `^p` mit 4 Silben vor `||` (nur die **letzten drei** erhalten Countdown):  
`die liebliche Laute, 3da 2|zu 1die ||Har0fe!^p`

• `^*`‑Zeile (2 Marker) mit 0 nach `||`:  
`Jubelt Gott zu, er ist 2|uns1re ||Zu0flucht;^*`

• Männlicher `^p` (Stapelregel):  
`43|lo2be 1den ||Herrn!^p`
