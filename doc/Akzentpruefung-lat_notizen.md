# Akzentprüfung _lat-Felder

Geprüft: Brevier.ts, Calendar.ts, Calendar1962.ts, Deceased.ts, Direktorium.ts, Direktorium_dev.ts, Evangelien.ts, Lecture1.ts, Lecture2.ts, LectureABC.ts, LectureAlternatives.ts, NamesOfBooks.ts, Perikopen.ts, Perikopen_Messe.ts, Personal.ts, PsHymn.ts, RufvdEv.ts, Sollemnities.ts

# Teil A: Liturgische Texte (alle _lat-Felder außer title_lat/quote_lat; Hymnen-Titel werden nicht geprüft)

**Hinweis für Excel:** beim Ersetzen „Groß-/Kleinschreibung beachten“ einschalten; die Prüfung auf Kollisionen ist darauf ausgelegt.

## 1. Wörter ab 3 Silben ohne Akzent (Kleinbuchstabe oder großgeschriebener Konsonant am Anfang)

0 verschiedene Wörter, 0 Vorkommen


## 2. Wörter ab 3 Silben ohne Akzent mit großgeschriebenem Vokal am Anfang

0 verschiedene Wörter, 0 Vorkommen


_Ausgeblendet per Whitelist (Akzentpruefung-lat-whitelist.txt): 113 Wörter, 601 Vorkommen._

## 3. Unsichere Silbenzahl (2 oder 3)

0 verschiedene Wörter, 0 Vorkommen


# Teil B: Psalm-Überschriften und -Zitate (title_lat, quote_lat in PsHymn.ts, Nr. < 1000) – sollen keine Akzente haben

## Wörter MIT Akzent (zu entfernen)

0 verschiedene Wörter, 0 Vorkommen


# Teil C: Nebenbefunde

## Nicht ersetzte Akzentmarkierung `<`

`<` markiert den folgenden Vokal bzw. die Ligatur für einen Akzent; die Makro-Ersetzung ist hier ausgeblieben.



## Auffällige Zeichen innerhalb von Wörtern (Tippfehler?)

Nicht gewertet: `>` (Elision in Hymnen). Gemeldet: Ziffern, `|` in _lat-Feldern sowie Gravis.



## Offenbar deutscher Text in _lat-Feldern



# Teil D: Unterschiedliche Akzentuierung desselben Wortes

Korrekte Form = häufigste Form, außer wo ausdrücklich anders angegeben (seltenere Form / Gleichstand). Homographen (ℹ️) haben je nach Bedeutung unterschiedliche Betonung – dort jede Stelle einzeln prüfen.

71 Wörter mit mehreren Akzentuierungen

### eadem **alle ok**

- Formen: eádem (5×), éadem (5×)
- ℹ️ Homograph: éadem (Nom./Akk.) / eádem (Ablativ) – jede Fundstelle einzeln prüfen
- Fundstellen „eádem“:
Brevier.ts : com : Frau : each : ErsteV (bitten_lat);
Brevier.ts : com : Frau : each : Vesper (bitten_lat);
Brevier.ts : j : 7 : 0 : Vesper (antc_lat);
Brevier.ts : q : 6 : 5 : Laudes (bitten_lat);
PsHymn.ts : 9010 : 2.0 (text_lat)
- Fundstellen „éadem“:
Brevier.ts : j : 10 : 0 : each (oration_lat);
Brevier.ts : j : 10 : 0 : ErsteV (oration_lat);
Brevier.ts : j : 10 : each : Lesehore (oration_lat);
Brevier.ts : q : even : 2 : Laudes (bitten_lat);
Brevier.ts : q : even : 4 : Laudes (bitten_lat)

### iacere **alle ok**

- Formen: iácere (2×), iacére (1×)
- ℹ️ Homograph: iácere (werfen) / iacére (liegen) – jede Fundstelle einzeln prüfen
- Fundstellen „iácere“: Calendar.ts : AAA : 7 : 8 : n1 : major (oration_lat); Calendar.ts : Paderborn : 7 : 8 : oblig : major (oration_lat)
- Fundstellen „iacére“: PsHymn.ts : 3221 : 1.0 (text_lat)


### invenit **alle ok**

- Formen: invénit (11×), ínvenit (1×)
- ℹ️ Homograph: ínvenit (Präsens) / invénit (Perfekt) – jede Fundstelle einzeln prüfen
- Fundstellen „invénit“:
Brevier.ts : com : Jgfr : each : Terz (resp1_lat);
Brevier.ts : p : 1 : 2 : Sext (les_text_lat);
Brevier.ts : q : 5 : 1 : Non (les_text_lat);
Brevier.ts : q : 6 : 1 : Non (les_text_lat);
Calendar.ts : AAA : 5 : 3 : oblig : Laudes (antev_lat);
Calendar.ts : AAA : 5 : 65 : oblig : Terz (les_text_lat);
Calendar.ts : AAA : 11 : 1 : oblig : Vesper (ant2_lat);
PsHymn.ts : 84 : 0.0 (text_lat);
PsHymn.ts : 119 : 161.0 (text_lat);
PsHymn.ts : 176 : 0.0 (text_lat);
PsHymn.ts : 199 : 102.0 (text_lat)
- Fundstellen „ínvenit“: PsHymn.ts : 4006 : 5.0 (text_lat)

### maria OK
### oblivisceris OK





### præveni **geprüft**

- Formen: prǽveni (4×), prævéni (3×)
- ℹ️ Homograph: prǽveni (Imperativ) / prævéni (Perfekt) – jede Fundstelle einzeln prüfen
- Fundstellen „prǽveni“: Brevier.ts : p : 1 : 1 : Laudes (oration_lat); Brevier.ts : q : 0 : 4 : each (oration_lat); PsHymn.ts : 17 : 0.0 (text_lat); PsHymn.ts : 17 : 2.0 (text_lat)**alle ok**
- Fundstellen „prævéni“: Brevier.ts : p : 2 : 2 : Laudes (resp3_lat); Brevier.ts : p : 4 : 2 : Laudes (resp3_lat); PsHymn.ts : 119 : 145.0 (text_lat)**alle drei ok**


**Bei den folgenden Formen von tenebrae scheint es beide Formen der Akzentuierung zu geben. Wo die zweite Silbe betont ist, steht es so auch in der gedruckten Liturgia Horarum.**
### tenebras

- Formen: ténebras (27×), tenébras (5×)
- Korrekt: **ténebras**
- Suchen: `tenébras` → Ersetzen: `ténebras` (5×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „tenébras“: PsHymn.ts : 2500 : 2.0 (text_lat); PsHymn.ts : 4009 : 3.0 (text_lat); PsHymn.ts : 4100 : 0.0 (text_lat); PsHymn.ts : 4122 : 1.0 (text_lat); PsHymn.ts : 8429 : 1.0 (text_lat)

### tenebris

- Formen: ténebris (67×), tenébris (5×)
- Korrekt: **ténebris**
- Suchen: `tenébris` → Ersetzen: `ténebris` (5×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „tenébris“: PsHymn.ts : 4009 : 6.0 (text_lat); PsHymn.ts : 4163 : 0.0 (text_lat); PsHymn.ts : 4235 : 0.0 (text_lat); PsHymn.ts : 5536 : 0.0 (text_lat); PsHymn.ts : 5536 : 1.0 (text_lat)

### tenebræ

- Formen: ténebræ (15×), tenébræ (2×)
- Korrekt: **ténebræ**
- Suchen: `tenébr>æ` → Ersetzen: `ténebr>æ` (1×)
  - ✅ „Alles ersetzen“ möglich
- Suchen: `tenébræ` → Ersetzen: `ténebræ` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „tenébræ“: PsHymn.ts : 4112 : 1.0 (text_lat); PsHymn.ts : 4133 : 0.0 (text_lat)


### utraque **geprüft**

- Formen: útraque (2×), utráque (1×)
- ℹ️ Homograph: útraque (Nom.) / utráque (Ablativ) – jede Fundstelle einzeln prüfen
- Fundstellen „útraque“: Brevier.ts : k : 12 : 22 : Vesper (antev_lat); Calendar.ts : AAA : 1 : 1 : oblig : ErsteV (bitten_e_lat) **beide ok**
- Fundstellen „utráque“: Brevier.ts : p : 2 : 5 : Laudes (les_text_lat) **korrigiert**
**eine weitere Fundstelle in LectureAlternatives in der Fronleichnamssequenz `Lauda Sion`: hier ist (sub) utráque richtig**



### videris

- Formen: víderis (2×), vidéris (1×)
- ℹ️ Homograph: víderis (Perf. Konj./Fut. II) / vidéris (Passiv Präsens „du scheinst“) – jede Fundstelle einzeln prüfen
- Fundstellen „víderis“:
Brevier.ts : q : 0 : 5 : Laudes (antev_lat); **ok**
Brevier.ts : q : each : 1 : Non (les_text_lat) **ok**
- Fundstellen „vidéris“: PsHymn.ts : 8429 : 2.0 (text_lat)**ok**



