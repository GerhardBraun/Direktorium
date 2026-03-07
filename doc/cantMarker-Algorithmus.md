Dieser Algorithmus beschreibt, wie ein Skript eine Datei `psNNN.md` mit Betonungsmarkern (`|`, `||`) verarbeitet und automatisch Countdown-Marker sowie `0`-Silbentrenner einsetzt.

*Voraussetzung*: Der Benutzer hat die Betonungsmarker `|` und `||` bereits in die Datei eingetragen (oder per `#`/`##`-Notation). Die letzte Zeile hat ggf. keinen Endmarker.

# Marker-Übersicht

| Marker | Bedeutung |
|--------|-----------|
| `\|` | Nebenbetonung (Versanfang-Seite) |
| `\|\|` | Hauptbetonung (Kadenzbeginn) |
| `1` `2` `3` `4` | Countdown-Marker (rückwärts von `\|\|`) |
| `0` | Silbentrenner (innerhalb eines Worts) |
| `~` | Gruppengrenze / Silbengrenze (wie Leerzeichen behandelt) |
| `°` | Platzhalter für geschütztes Leerzeichen (= Wortgrenze) |
| `^+` | Zeilentyp Flexa |
| `^*` | Zeilentyp Mittelkadenz (MK) |
| `^p` | Zeilentyp Schlusskadenz (SK) |

Silbengrenzen werden markiert durch: Leerzeichen, `°`, `~`, `0`, `|`, `||` oder Countdown-Ziffer.

# Algorithmus (7 Schritte, rückwärts)

Der Algorithmus verarbeitet jede Zeile rückwärts – vom Zeilenende in Richtung Zeilenanfang –, weil die Countdown-Marker von `||` aus rückwärts zählen.

**Flag `bar_reached`**: Boolescher Merker. Wird `true`, sobald ein einfacher `|`-Marker beim Rückwärtsscannen gefunden wird. Signalisiert: „Die Nebenbetonung wurde passiert – ab hier nicht mehr weiter Countdown oder 0-Marker setzen."

---

## Schritt 1 – Zeilentyp und `max` ermitteln

1. Endmarker am Zeilenende auslesen: `^+`, `^*` oder `^p`.
   Letzte Zeile der Datei ohne Endmarker → als `^p` behandeln.
2. `max` setzen (= maximale Anzahl der Countdown-Marker):
   - `^+` → `max = 0`
   - `^*` → `max = 2`
   - `^p` / letzte Zeile → `max = 4`
3. `bar_reached = False`

---

## Schritt 2 – Flexa (`^+`): Sonderbehandlung, dann → Schritt 7

Nur für Flexa-Zeilen (`^+`):

1. Enthält die Zeile `||`? → ersetze durch `|`.
2. Enthält die Zeile `|` oder `~`?
   - Nein → direkt zu Schritt 7.
   - Ja → prüfe die Silbe **vor** dem `|` oder `~`:
     Falls diese die letzte Silbe eines mehrsilbigen Wortes ist (kein Leerzeichen, `°` oder anderer Marker unmittelbar davor) → `0`-Marker davor setzen.
3. → Schritt 7.

*In Flexa-Zeilen werden keine Countdown-Marker gesetzt.*

---

## Schritt 3 – Versschluss verarbeiten (rückwärts von Zeilenende bis `||`)

Ziel: `0`-Marker nach `||` setzen und weiblichen/männlichen Versschluss erkennen.

1. Rückwärts vom Zeilenende scannen (ohne Endmarker), bis `||` erreicht ist.
2. Dabei für jede Wortgrenze oder jeden Marker prüfen:
   - `|` gefunden → `bar_reached = True`
   - Silbengrenze gefunden (Leerzeichen, `°`, `~`) → **weiblicher Versschluss** erkannt
3. `0`-Marker: Innerhalb von mehrsilbigen Wörtern **nach** `||` werden alle Silbengrenzen, die noch nicht durch einen Marker (Leerzeichen, `°`, `~`, `|`) gekennzeichnet sind, mit einem `0`-Marker versehen. (Silbentrennung via pyphen)
4. Weiblicher Versschluss → `max = 4` senken auf `max = 3`.
   Kein Silbentrennzeichen gefunden und `bar_reached = False` → **männlicher Versschluss**, `max` bleibt bei 4.

*Anmerkung*: Steht nach `||` keine einzige weitere Silbe (keine Buchstaben), ist die Zeile ebenfalls männlich.

---

## Schritt 4 – `||` als Anker setzen, `n = 1`

Die Position von `||` ist der Ausgangspunkt des Rückwärts-Countdowns.
Zähler `n = 1` initialisieren.

---

## Schritt 5 – Countdown-Marker rückwärts von `||` setzen

Rückwärts von `||` Silbe für Silbe zählen und Marker einfügen:

1. Nächste Silbe links von der aktuellen Position suchen.
   (Silbengrenze = Leerzeichen, `°`, `~`, `0`, oder Silbenbeginn nach diesen Zeichen)
2. Marker `n` **direkt vor den Silbenanfang** einfügen:
   - Falls dort schon `|` oder `~` steht: `n` **vor** diesen Marker setzen → `n|Silbe` bzw. `n~Silbe`.
3. Falls beim Scan `|` angetroffen wird: `bar_reached = True`.
4. `n` um 1 erhöhen.
5. Falls `bar_reached = True` **und** `n > max`: Countdown-Phase beenden → Schritt 7.
6. Falls `n <= max`: weiter zu Schritt 5.1 (nächste Silbe).

---

## Schritt 6 – `0`-Marker rückwärts bis `|` (nur wenn `bar_reached = False`)

Nur ausführen, wenn nach Schritt 5 noch `bar_reached = False` (= kein `|` im Countdown-Bereich gefunden):

Rückwärts vom ersten Countdown-Marker bis zum Zeilenanfang scannen und in mehrsilbigen Wörtern fehlende Silbengrenzen durch `0`-Marker ergänzen.
Sobald `|` angetroffen wird: `bar_reached = True` → Schritt 7.

*Dieser Schritt vervollständigt die Silbentrennung zwischen der Nebenbetonung (`|`) und dem Countdown-Bereich.*

---

## Schritt 7 – Zeile zurückschreiben

Die bearbeitete Zeile (mit Endmarker) in die Datei schreiben.
`bar_reached` wird in Schritt 1 der **nächsten Zeile** automatisch zurückgesetzt.

---

# Silbentrennung

Die Silbentrennung (für `0`-Marker) erfolgt mit **pyphen** (deutsches Wörterbuch `de_DE`), das dieselben Trennregeln wie Word/LibreOffice verwendet.

Benutzerpräferenz: `st` bleibt immer zusammen (alte Rechtschreibregel).
Beispiel: `Chri-stus` → `||Chri0stus` (nicht `||Chris0tus`).

# Sonderfälle

## Männlicher SK mit nur 3 Silben vor `||`

Wenn `max = 4` gilt und vor `||` weniger als 4 Silben vorhanden sind, werden `4` und `3` auf dieselbe Silbe gestapelt:
`43|lo2be 1den ||Herrn!^p`

## `#`/`##`-Notation

Vor der Verarbeitung werden `##` → `||` und `#` → `|` ersetzt.
