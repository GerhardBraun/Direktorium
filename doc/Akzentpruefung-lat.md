# Akzentprüfung _lat-Felder

Geprüft: Brevier.ts, Calendar.ts, Calendar1962.ts, Deceased.ts, Direktorium.ts, Direktorium_dev.ts, Evangelien.ts, Lecture1.ts, Lecture2.ts, LectureABC.ts, LectureAlternatives.ts, NamesOfBooks.ts, Perikopen.ts, Perikopen_Messe.ts, Personal.ts, PsHymn.ts, RufvdEv.ts, Sollemnities.ts

# Teil A: Liturgische Texte (alle _lat-Felder außer title_lat/quote_lat; Hymnen-Titel werden nicht geprüft)

**Hinweis für Excel:** beim Ersetzen „Groß-/Kleinschreibung beachten“ einschalten; die Prüfung auf Kollisionen ist darauf ausgelegt.

## 1. Wörter ab 3 Silben ohne Akzent (Kleinbuchstabe oder großgeschriebener Konsonant am Anfang)

120 verschiedene Wörter, 145 Vorkommen

### cœtibus

- Suchen: `cœtibus` → Ersetzen: `cœ́tibus` (1×; Vorschlag: manuell)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 9216 : 101.0 (text_lat)

### delicta

- Suchen: `delicta` → Ersetzen: `delícta` (1×; Vorschlag: Datenbank 11×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 25 : 2.0 (text_lat)

### delinquam

- Suchen: `delinquam` → Ersetzen: `delínquam` (1×; Vorschlag: manuell)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 39 : 1.0 (text_lat)

### deprecationem

- Suchen: `deprecationem` → Ersetzen: `deprecatiónem` (1×; Vorschlag: Datenbank 8×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 61 : 0.0 (text_lat)

### Diligam

- Suchen: `Diligam` → Ersetzen: `Díligam` (1×; Vorschlag: Datenbank 5×)
  - ⚠️ auch Teil anderer Wörter: Diligamus (1×)
- Fundstellen: PsHymn.ts : 18 : 1.0 (text_lat)

### dimitte

- Suchen: `dimitte` → Ersetzen: `dimítte` (1×; Vorschlag: Datenbank 16×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 25 : 2.0 (text_lat)

### dixero

- Suchen: `dixero` → Ersetzen: `díxero` (1×; Vorschlag: Datenbank 2×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 139 : 1.0 (text_lat)

### dixerunt

- Suchen: `dixerunt` → Ersetzen: `dixérunt` (1×; Vorschlag: Datenbank 19×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 35 : 3.0 (text_lat)

### Domine

- Suchen: `Domine` → Ersetzen: `Dómine` (3×; Vorschlag: Datenbank 1347×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (quote_lat) 6×, PsHymn.ts (title_lat) 5×, Calendar.ts (patr_text) 1×
- Fundstellen: Calendar.ts : AAA : 6 : 5 : oblig : each (oration_lat); Calendar.ts : Fulda : 6 : 5 : oblig : Laudes (bitten_r_lat); PsHymn.ts : 141 : 0.0 (text_lat)

### Domino

- Suchen: `Domino` → Ersetzen: `Dómino` (1×; Vorschlag: Datenbank 433×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (title_lat) 8×, PsHymn.ts (quote_lat) 3×
- Fundstellen: Calendar.ts : Fulda : 6 : 5 : oblig : ErsteV (antev_lat)

### Dominum

- Suchen: `Dominum` → Ersetzen: `Dóminum` (1×; Vorschlag: Datenbank 396×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (title_lat) 8×, PsHymn.ts (quote_lat) 4×
- Fundstellen: Calendar.ts : AAA : 6 : 24 : oblig : Vigil (ant0_lat)

### Dominus

- Suchen: `Dominus` → Ersetzen: `Dóminus` (2×; Vorschlag: Datenbank 993×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (title_lat) 22×, PsHymn.ts (quote_lat) 11×
- Fundstellen: Calendar.ts : Fulda : 6 : 5 : oblig : Sext (ant0_lat); Calendar.ts : Fulda : 6 : 5 : oblig : Vesper (resp2_lat)

### Duplices

- Suchen: `Duplices` → Ersetzen: `Dúplices` (1×; Vorschlag: Datenbank 1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 119 : 113.0 (text_lat)

### eiusdem

- Suchen: `eiusdem` → Ersetzen: `eiúsdem` (1×; Vorschlag: Datenbank 15×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: Calendar.ts : Paderborn : 2 : 9 : d1 : major (oration_lat)

### electi

- Suchen: `electi` → Ersetzen: `elécti` (2×; Vorschlag: Datenbank 6×)
  - ⚠️ auch Teil anderer Wörter: electiónis (8×), electiónem (3×)
- Fundstellen: PsHymn.ts : 162 : 0.0 (text_lat); PsHymn.ts : 162 : 1.0 (text_lat)

### elegit

- Suchen: `elegit` → Ersetzen: `elégit` (1×; Vorschlag: Datenbank 49×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: LectureAlternatives.ts (text) 1×
- Fundstellen: PsHymn.ts : 78 : 6.0 (text_lat)

### facie

- Suchen: `facie` → Ersetzen: `fácie` (1×; Vorschlag: Datenbank 50×)
  - ⚠️ auch Teil anderer Wörter: faciem (2×), faciet (1×)
- Fundstellen: Sollemnities.ts : verst : each : non (les_text_lat)

### faciem

- Suchen: `faciem` → Ersetzen: `fáciem` (1×; Vorschlag: Datenbank 103×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (text) 1×
- Fundstellen: PsHymn.ts : 9021 : 2.0 (text_lat)

### familiæ

- Suchen: `familiæ` → Ersetzen: `famíliæ` (1×; Vorschlag: Datenbank 11×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 22 : 3.0 (text_lat)

### Faustinæ

- Suchen: `Faustinæ` → Ersetzen: `Faustínæ` (1×; Vorschlag: Datenbank 1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: Calendar.ts : AAA : 10 : 5 : n1 : Laudes (genitiv_lat)

### fecisti

- Suchen: `fecisti` → Ersetzen: `fecísti` (1×; Vorschlag: Datenbank 106×; Varianten: fécisti)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 8605 : 104.0 (text_lat)

### Filii

- Suchen: `Filii` → Ersetzen: `Fílii` (1×; Vorschlag: Datenbank 238×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (quote_lat) 1×
- Fundstellen: Calendar.ts : AAA : 9 : 23 : oblig : major (oration_lat)

### filios

- Suchen: `filios` → Ersetzen: `fílios` (3×; Vorschlag: Datenbank 65×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (quote_lat) 2×
- Fundstellen: PsHymn.ts : 12 : 0.0 (text_lat); PsHymn.ts : 33 : 0.0 (text_lat); PsHymn.ts : 33 : 2.0 (text_lat)

### Filius

- Suchen: `Filius` → Ersetzen: `Fílius` (1×; Vorschlag: Datenbank 120×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (quote_lat) 3×
- Fundstellen: PsHymn.ts : 2 : 0.0 (text_lat)

### Filiæ

- Suchen: `Filiæ` → Ersetzen: `Fíliæ` (2×; Vorschlag: Datenbank 16×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 45 : 0.0 (text_lat); PsHymn.ts : 45 : 1.0 (text_lat)

### finibus

- Suchen: `finibus` → Ersetzen: `fínibus` (1×; Vorschlag: Datenbank 11×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 19 : 1.0 (text_lat)

### firmiter

- Suchen: `firmiter` → Ersetzen: `fírmiter` (1×; Vorschlag: Datenbank 3×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: Calendar.ts : AAA : 6 : 5 : oblig : each (oration_lat)

### Foucauld

- Suchen: `Foucauld` → Ersetzen: `???` (1×; Vorschlag: französischer Name (2 Silben) – Whitelist?)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: Direktorium.ts (liturgy) 2×, Direktorium.ts (notes) 2×, Calendar.ts (oration) 1×, Calendar.ts (button) 1×, Calendar.ts (nominativ) 1×, Calendar.ts (genitiv) 1×, Lecture1.ts (patr_autor) 1×
- Fundstellen: Calendar.ts : AAA : 12 : 1 : n1 : Laudes (genitiv_lat)

### fuerat

- Suchen: `fuerat` → Ersetzen: `fúerat` (1×; Vorschlag: Datenbank 3×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 8204 : 102.0 (text_lat)

### fundati

- Suchen: `fundati` → Ersetzen: `fundáti` (1×; Vorschlag: Datenbank 2×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: Calendar.ts : Fulda : 6 : 5 : oblig : Sext (les_text_lat)

### gaudio

- Suchen: `gaudio` → Ersetzen: `gáudio` (1×; Vorschlag: Datenbank 51×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (quote_lat) 1×
- Fundstellen: PsHymn.ts : 174 : 0.0 (text_lat)

### gloria

- Suchen: `gloria` → Ersetzen: `glória` (1×; Vorschlag: Datenbank 372×)
  - ⚠️ auch Teil anderer Wörter: gloriam (4×), gloriabúntur (3×), gloriatur (1×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (title_lat) 4×, PsHymn.ts (quote_lat) 3×
- Fundstellen: Calendar.ts : Fulda : 6 : 5 : oblig : Vesper (ant3_lat)

### Goretti

- Suchen: `Goretti` → Ersetzen: `Gorétti` (1×; Vorschlag: Datenbank 1×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: Calendar.ts (oration) 1×, Calendar.ts (patr_werk) 1×, Calendar.ts (patr_text) 1×, Calendar.ts (button) 1×, Calendar.ts (nominativ) 1×, Calendar.ts (genitiv) 1×, Direktorium.ts (notes) 1×, Direktorium.ts (liturgy) 1×, Direktorium_dev.ts (entry) 1×
- Fundstellen: Calendar.ts : AAA : 7 : 6 : n1 : Laudes (genitiv_lat)

### Gratias

- Suchen: `Gratias` → Ersetzen: `Grátias` (1×; Vorschlag: Datenbank 70×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: Calendar.ts : Paderborn : 7 : 23 : oblig : Laudes (bitten_lat)

### hodie

- Suchen: `hodie` → Ersetzen: `hódie` (1×; Vorschlag: Datenbank 162×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (quote_lat) 1×
- Fundstellen: Calendar.ts : Paderborn : 7 : 23 : oblig : Vesper (bitten_lat)

### honorem

- Suchen: `honorem` → Ersetzen: `honórem` (1×; Vorschlag: Datenbank 19×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (quote_lat) 3×
- Fundstellen: Calendar.ts : Paderborn : 11 : 7 : d11 : major (oration_lat)

### ideo

- Suchen: `ideo` → Ersetzen: `ídeo` (1×; Vorschlag: Datenbank 23×)
  - ⚠️ auch Teil anderer Wörter: Gideon (34×), Gideons (5×), ideologische (1×)
- Fundstellen: PsHymn.ts : 199 : 121.0 (text_lat)

### imphrvias

- Suchen: `imphrvias` → Ersetzen: `impérvias` (1×; Vorschlag: manuell – Tippfehler korrigiert)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 9216 : 101.0 (text_lat)

### impii

- Suchen: `impii` → Ersetzen: `ímpii` (1×; Vorschlag: Datenbank 12×)
  - ⚠️ auch Teil anderer Wörter: impiis (1×)
- Fundstellen: PsHymn.ts : 1 : 0.0 (text_lat)

### impio

- Suchen: `impio` → Ersetzen: `ímpio` (2×; Vorschlag: manuell)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 17 : 0.0 (text_lat); PsHymn.ts : 17 : 2.0 (text_lat)

### induam

- Suchen: `induam` → Ersetzen: `índuam` (1×; Vorschlag: Datenbank 2×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 132 : 2.0 (text_lat)

### iniquitatem

- Suchen: `iniquitatem` → Ersetzen: `iniquitátem` (1×; Vorschlag: Datenbank 57×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 59 : 0.0 (text_lat)

### iniquo

- Suchen: `iniquo` → Ersetzen: `iníquo` (1×; Vorschlag: Datenbank 4×)
  - ⚠️ auch Teil anderer Wörter: iniquos (1×)
- Fundstellen: PsHymn.ts : 18 : 6.0 (text_lat)

### instruens

- Suchen: `instruens` → Ersetzen: `ínstruens` (1×; Vorschlag: manuell)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 8204 : 102.0 (text_lat)

### intende

- Suchen: `intende` → Ersetzen: `inténde` (1×; Vorschlag: Datenbank 22×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (title_lat) 1×
- Fundstellen: PsHymn.ts : 61 : 0.0 (text_lat)

### intercessione

- Suchen: `intercessione` → Ersetzen: `intercessióne` (1×; Vorschlag: Datenbank 116×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: Calendar.ts : AAA : 9 : 22 : n1 : major (oration_lat)

### iterum

- Suchen: `iterum` → Ersetzen: `íterum` (1×; Vorschlag: Datenbank 26×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 71 : 2.0 (text_lat)

### Iudica

- Suchen: `Iudica` → Ersetzen: `Iúdica` (3×; Vorschlag: Datenbank 7×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 26 : 0.0 (text_lat); PsHymn.ts : 35 : 1.0 (text_lat); PsHymn.ts : 43 : 0.0 (text_lat)

### Iustitiæ

- Suchen: `Iustitiæ` → Ersetzen: `Iustítiæ` (1×; Vorschlag: Datenbank 85×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 19 : 2.0 (text_lat)

### Laudate

- Suchen: `Laudate` → Ersetzen: `Laudáte` (1×; Vorschlag: Datenbank 49×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (title_lat) 1×
- Fundstellen: Sollemnities.ts : kirchw : each : laudes (ant3_lat)

### Leonardi

- Suchen: `Leonardi` → Ersetzen: `Leonárdi` (1×; Vorschlag: Datenbank 2×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: Direktorium.ts (liturgy) 2×, Direktorium.ts (notes) 2×, Calendar.ts (oration) 1×, Calendar.ts (patr_autor) 1×, Calendar.ts (button) 1×, Calendar.ts (nominativ) 1×, Calendar.ts (genitiv) 1×
- Fundstellen: Calendar.ts : AAA : 10 : 9 : n2 : Laudes (genitiv_lat)

### Levabo

- Suchen: `Levabo` → Ersetzen: `Levábo` (1×; Vorschlag: Datenbank 3×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 121 : 0.0 (text_lat)

### litteris

- Suchen: `litteris` → Ersetzen: `lítteris` (2×; Vorschlag: manuell)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 8928 : 101.0 (text_lat); PsHymn.ts : 9216 : 101.0 (text_lat)

### locuta

- Suchen: `locuta` → Ersetzen: `locúta` (1×; Vorschlag: manuell)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 199 : 101.0 (text_lat)

### lætentur

- Suchen: `lætentur` → Ersetzen: `læténtur` (1×; Vorschlag: Datenbank 20×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 35 : 3.0 (text_lat)

### Mallinckrodt

- Suchen: `Mallinckrodt` → Ersetzen: `???` (1×; Vorschlag: deutscher Name – Whitelist?)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: Calendar.ts (oration) 1×, Calendar.ts (patr_autor) 1×, Calendar.ts (button) 1×
- Fundstellen: Calendar.ts : Paderborn : 4 : 30 : d11 : major (oration_lat)

### manibus

- Suchen: `manibus` → Ersetzen: `mánibus` (1×; Vorschlag: Datenbank 33×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 31 : 2.0 (text_lat)

### Margaretæ

- Suchen: `Margaretæ` → Ersetzen: `Margarétæ` (1×; Vorschlag: manuell)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: Calendar.ts : AAA : 7 : 20 : n1 : major (oration_lat)

### Mariam

- Suchen: `Mariam` → Ersetzen: `Maríam` (1×; Vorschlag: Datenbank 102×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: Calendar.ts : Paderborn : 2 : 9 : d1 : major (oration_lat)

### martyrii

- Suchen: `martyrii` → Ersetzen: `martýrii` (1×; Vorschlag: Datenbank 10×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: Calendar.ts : Fulda : 6 : 7 : d1 : Laudes (antev_lat)

### medio

- Suchen: `medio` → Ersetzen: `médio` (1×; Vorschlag: Datenbank 95×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 199 : 123.0 (text_lat)

### montium

- Suchen: `montium` → Ersetzen: `móntium` (2×; Vorschlag: Datenbank 7×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (title_lat) 1×
- Fundstellen: PsHymn.ts : 181 : 0.0 (text_lat); PsHymn.ts : 181 : 1.0 (text_lat)

### nescientes

- Suchen: `nescientes` → Ersetzen: `nesciéntes` (1×; Vorschlag: manuell)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 185 : 0.0 (text_lat)

### Nicolæ

- Suchen: `Nicolæ` → Ersetzen: `Nícolæ` (1×; Vorschlag: Datenbank 1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: Calendar.ts : AAA : 9 : 25 : n1 : Laudes (genitiv_lat)

### nonnisi

- Suchen: `nonnisi` → Ersetzen: `nonnísi` (2×; Vorschlag: manuell)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: Calendar.ts : Fulda : 11 : 19 : oblig : ErsteV (bitten_lat); Calendar.ts : Fulda : 11 : 19 : oblig : Vesper (bitten_lat)

### obœdivit

- Suchen: `obœdivit` → Ersetzen: `obœdívit` (1×; Vorschlag: Datenbank 2×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 18 : 5.0 (text_lat)

### odisti

- Suchen: `odisti` → Ersetzen: `odísti` (1×; Vorschlag: Datenbank 7×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 50 : 3.0 (text_lat)

### oleo

- Suchen: `oleo` → Ersetzen: `óleo` (1×; Vorschlag: Datenbank 8×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 164 : 0.0 (text_lat)

### omnia

- Suchen: `omnia` → Ersetzen: `ómnia` (2×; Vorschlag: Datenbank 334×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (quote_lat) 2×, PsHymn.ts (title_lat) 1×
- Fundstellen: Calendar.ts : Fulda : 12 : 9 : d11 : Vesper (antev_lat); PsHymn.ts : 161 : 0.0 (text_lat)

### opera

- Suchen: `opera` → Ersetzen: `ópera` (1×; Vorschlag: Datenbank 124×)
  - ⚠️ auch Teil anderer Wörter: operatiónem (8×), Kooperator (6×), operatiónum (2×), cooperatóres (1×), operatiónis (1×), operariórum (1×), cooperatórem (1×), operatiónes (1×), operantis (1×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (quote_lat) 2×, PsHymn.ts (title_lat) 2×
- Fundstellen: PsHymn.ts : 139 : 2.0 (text_lat)

### orationi

- Suchen: `orationi` → Ersetzen: `oratióni` (1×; Vorschlag: Datenbank 4×)
  - ⚠️ auch Teil anderer Wörter: orationibus (3×), adorationis (1×), orationis (1×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (quote_lat) 1×
- Fundstellen: PsHymn.ts : 61 : 0.0 (text_lat)

### orationis

- Suchen: `orationis` → Ersetzen: `oratiónis` (1×; Vorschlag: Datenbank 9×)
  - ⚠️ auch Teil anderer Wörter: adorationis (1×)
- Fundstellen: Sollemnities.ts : kirchw : each : laudes (ant1_lat)

### percussit

- Suchen: `percussit` → Ersetzen: `percússit` (1×; Vorschlag: Datenbank 15×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 135 : 1.0 (text_lat)

### popule

- Suchen: `popule` → Ersetzen: `pópule` (1×; Vorschlag: Datenbank 5×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 176 : 0.0 (text_lat)

### populi

- Suchen: `populi` → Ersetzen: `pópuli` (2×; Vorschlag: Datenbank 119×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (title_lat) 10×, PsHymn.ts (quote_lat) 2×
- Fundstellen: Calendar.ts : Fulda : 6 : 5 : oblig : ErsteV (bitten_lat); Calendar.ts : Fulda : 6 : 5 : oblig : Vesper (bitten_lat)

### populo

- Suchen: `populo` → Ersetzen: `pópulo` (2×; Vorschlag: Datenbank 101×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (title_lat) 1×
- Fundstellen: PsHymn.ts : 166 : 0.0 (text_lat); PsHymn.ts : 199 : 108.0 (text_lat)

### Portio

- Suchen: `Portio` → Ersetzen: `Pórtio` (1×; Vorschlag: Datenbank 7×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 119 : 57.0 (text_lat)

### proprio

- Suchen: `proprio` → Ersetzen: `próprio` (1×; Vorschlag: Datenbank 5×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: Direktorium.ts (notes) 2×
- Fundstellen: Calendar.ts : Fulda : 6 : 5 : oblig : Laudes (bitten_lat)

### præcepta

- Suchen: `præcepta` → Ersetzen: `præcépta` (1×; Vorschlag: Datenbank 30×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 50 : 3.0 (text_lat)

### præsulum

- Suchen: `præsulum` → Ersetzen: `prǽsulum` (1×; Vorschlag: manuell)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 9216 : 102.0 (text_lat)

### prœlium

- Suchen: `prœlium` → Ersetzen: `prœ́lium` (4×; Vorschlag: Datenbank 9×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 27 : 0.0 (text_lat); PsHymn.ts : 27 : 1.0 (text_lat); PsHymn.ts : 144 : 1.0 (text_lat); PsHymn.ts : 144 : 3.0 (text_lat)

### Quoniam

- Suchen: `Quoniam` → Ersetzen: `Quóniam` (1×; Vorschlag: Datenbank 536×; Varianten: quoníam)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 157 : 0.0 (text_lat)

### quæsivi

- Suchen: `quæsivi` → Ersetzen: `quæsívi` (1×; Vorschlag: Datenbank 4×)
  - ⚠️ auch Teil anderer Wörter: quæsivit (1×)
- Fundstellen: PsHymn.ts : 37 : 3.0 (text_lat)

### reficiens

- Suchen: `reficiens` → Ersetzen: `refíciens` (1×; Vorschlag: manuell)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 19 : 2.0 (text_lat)

### repleamini

- Suchen: `repleamini` → Ersetzen: `repleámini` (1×; Vorschlag: manuell)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 194 : 0.0 (text_lat)

### rugitus

- Suchen: `rugitus` → Ersetzen: `rugítus` (2×; Vorschlag: manuell)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 22 : 1.0 (text_lat); PsHymn.ts : 22 : 4.0 (text_lat)

### sanguine

- Suchen: `sanguine` → Ersetzen: `sánguine` (1×; Vorschlag: Datenbank 121×)
  - ⚠️ auch Teil anderer Wörter: sanguinem (1×)
- Fundstellen: Calendar.ts : Fulda : 6 : 5 : oblig : Vesper (antev_lat)

### sapientiæ

- Suchen: `sapientiæ` → Ersetzen: `sapiéntiæ` (1×; Vorschlag: Datenbank 39×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (quote_lat) 1×
- Fundstellen: Calendar.ts : Fulda : 2 : 12 : d1 : major (oration_lat)

### sicuti

- Suchen: `sicuti` → Ersetzen: `sícuti` (1×; Vorschlag: Datenbank 1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: Calendar.ts : Fulda : 6 : 5 : oblig : ErsteV (les_text_lat)

### Similes

- Suchen: `Similes` → Ersetzen: `Símiles` (1×; Vorschlag: Datenbank 4×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 115 : 0.0 (text_lat)

### sperabunt

- Suchen: `sperabunt` → Ersetzen: `sperábunt` (1×; Vorschlag: Datenbank 3×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 199 : 123.0 (text_lat)

### sperantes

- Suchen: `sperantes` → Ersetzen: `sperántes` (2×; Vorschlag: Datenbank 4×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (quote_lat) 1×
- Fundstellen: PsHymn.ts : 17 : 0.0 (text_lat); PsHymn.ts : 17 : 1.0 (text_lat)

### submersi

- Suchen: `submersi` → Ersetzen: `submérsi` (1×; Vorschlag: Datenbank 1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 166 : 0.0 (text_lat)

### supergressa

- Suchen: `supergressa` → Ersetzen: `supergréssa` (1×; Vorschlag: manuell)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: Calendar.ts : Fulda : 11 : 19 : oblig : Vesper (resp3_lat)

### sæculorum

- Suchen: `sæculorum` → Ersetzen: `sæculórum` (1×; Vorschlag: Datenbank 52×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (quote_lat) 2×, PsHymn.ts (text) 1×
- Fundstellen: PsHymn.ts : 9010 : 2.0 (text_lat)

### tempore

- Suchen: `tempore` → Ersetzen: `témpore` (2×; Vorschlag: Datenbank 76×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (quote_lat) 1×, PsHymn.ts (title_lat) 1×
- Fundstellen: Calendar.ts : Fulda : 6 : 5 : oblig : ErsteV (bitten_lat); Calendar.ts : Fulda : 6 : 5 : oblig : Vesper (bitten_lat)

### temporibus

- Suchen: `temporibus` → Ersetzen: `tempóribus` (1×; Vorschlag: Datenbank 18×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: Calendar.ts : Fulda : 8 : 16 : d1 : major (oration_lat)

### Teresæ

- Suchen: `Teresæ` → Ersetzen: `Terésæ` (1×; Vorschlag: manuell)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: Calendar.ts : AAA : 9 : 5 : n1 : Laudes (genitiv_lat)

### Timeat

- Suchen: `Timeat` → Ersetzen: `Tímeat` (2×; Vorschlag: Datenbank 6×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 33 : 0.0 (text_lat); PsHymn.ts : 33 : 1.0 (text_lat)

### universæ

- Suchen: `universæ` → Ersetzen: `univérsæ` (1×; Vorschlag: Datenbank 7×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 48 : 0.0 (text_lat)

### venite

- Suchen: `venite` → Ersetzen: `veníte` (1×; Vorschlag: Datenbank 108×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: Calendar.ts : Fulda : 6 : 5 : oblig : Invitatorium (ant0_lat)

### Venite

- Suchen: `Venite` → Ersetzen: `Veníte` (1×; Vorschlag: Datenbank 108×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 95 : 0.0 (text_lat)

### veritas

- Suchen: `veritas` → Ersetzen: `véritas` (1×; Vorschlag: Datenbank 63×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 119 : 153.0 (text_lat)

### videant

- Suchen: `videant` → Ersetzen: `vídeant` (2×; Vorschlag: Datenbank 17×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 17 : 0.0 (text_lat); PsHymn.ts : 17 : 1.0 (text_lat)

### Videant

- Suchen: `Videant` → Ersetzen: `Vídeant` (1×; Vorschlag: Datenbank 17×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 69 : 3.0 (text_lat)

### Videmus

- Suchen: `Videmus` → Ersetzen: `Vidémus` (1×; Vorschlag: Datenbank 4×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: Calendar.ts : AAA : 9 : 14 : oblig : Laudes (les_text_lat)

### Viduam

- Suchen: `Viduam` → Ersetzen: `Víduam` (1×; Vorschlag: Datenbank 5×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 94 : 1.0 (text_lat)

### vigilat

- Suchen: `vigilat` → Ersetzen: `vígilat` (1×; Vorschlag: manuell)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (quote_lat) 1×
- Fundstellen: PsHymn.ts : 127 : 0.0 (text_lat)

### Vigiles

- Suchen: `Vigiles` → Ersetzen: `Vígiles` (1×; Vorschlag: Datenbank 2×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 77 : 0.0 (text_lat)

### vinculum

- Suchen: `vinculum` → Ersetzen: `vínculum` (1×; Vorschlag: Datenbank 6×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: Calendar.ts : Fulda : 9 : 28 : oblig : Terz (les_text_lat)

### vitia

- Suchen: `vit>ia` → Ersetzen: `vít>ia` (1×; Vorschlag: manuell)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 3412 : 1.0 (text_lat)

### vitulos

- Suchen: `vitulos` → Ersetzen: `vítulos` (1×; Vorschlag: Datenbank 1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 51 : 0.0 (text_lat)

### vitulum

- Suchen: `vitulum` → Ersetzen: `vítulum` (1×; Vorschlag: Datenbank 2×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 69 : 3.0 (text_lat)

### vitæque

- Suchen: `vitæque` → Ersetzen: `vitǽque` (1×; Vorschlag: Datenbank 5×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 9119 : 101.0 (text_lat)

### vocabitur

- Suchen: `vocabitur` → Ersetzen: `vocábitur` (1×; Vorschlag: Datenbank 27×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: Sollemnities.ts : kirchw : each : laudes (ant1_lat)

### Walburgam

- Suchen: `Walburgam` → Ersetzen: `Walbúrgam` (1×; Vorschlag: manuell)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: Calendar.ts : AAA : 2 : 25 : n1 : major (oration_lat)

### æmulis

- Suchen: `æmulis` → Ersetzen: `ǽmulis` (1×; Vorschlag: Datenbank 2×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 9216 : 102.0 (text_lat)

### æternales

- Suchen: `æternales` → Ersetzen: `æternáles` (1×; Vorschlag: Datenbank 4×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: PsHymn.ts : 24 : 0.0 (text_lat)

### æternam

- Suchen: `æternam` → Ersetzen: `ætérnam` (1×; Vorschlag: Datenbank 90×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen: Calendar.ts : Fulda : 12 : 16 : oblig : Lesehore (ant1_lat)

### æternum

- Suchen: `æternum` → Ersetzen: `ætérnum` (2×; Vorschlag: Datenbank 286×)
  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: PsHymn.ts (quote_lat) 1×
- Fundstellen: PsHymn.ts : 45 : 0.0 (text_lat); PsHymn.ts : 45 : 2.0 (text_lat)


## 2. Wörter ab 3 Silben ohne Akzent mit großgeschriebenem Vokal am Anfang

0 verschiedene Wörter, 0 Vorkommen


_Ausgeblendet per Whitelist (Akzentpruefung-lat-whitelist.txt): 109 Wörter, 597 Vorkommen._

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

88 Wörter mit mehreren Akzentuierungen

### accipit

- Formen: áccipit (4×), áccipít (1×)
- Korrekt: **áccipit**
- Suchen: `áccipít` → Ersetzen: `áccipit` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „áccipít“: Calendar.ts : Fulda : 9 : 28 : oblig : Non (les_text_lat)

### agentes

- Formen: agéntes (9×), ágentes (1×)
- Korrekt: **agéntes**
- Suchen: `ágentes` → Ersetzen: `agéntes` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „ágentes“: PsHymn.ts : 9216 : 104.0 (text_lat)

### alacri

- Formen: álacri (3×), alácri (1×)
- Korrekt: **álacri**
- Suchen: `alácri` → Ersetzen: `álacri` (1×)
  - ⚠️ auch Teil anderer Wörter: alácriter (5×), alácris (1×)
- Fundstellen „alácri“: PsHymn.ts : 3901 : 1.0 (text_lat)

### ambulabat

- Formen: ambulábat (2×), ámbulabat (1×)
- Korrekt: **ambulábat**
- Suchen: `ámbulabat` → Ersetzen: `ambulábat` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „ámbulabat“: PsHymn.ts : 199 : 112.0 (text_lat)

### amodo

- Formen: ámodo (2×), amódo (1×)
- Korrekt: **ámodo**
- Suchen: `amódo` → Ersetzen: `ámodo` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „amódo“: Calendar.ts : Fulda : 12 : 16 : oblig : Laudes (les_text_lat)

### anania

- Formen: ananía (1×), anánia (1×)
- ❓ Ananía oder Anánia? – bitte entscheiden
- Fundstellen „ananía“: Calendar.ts : AAA : 1 : 25 : oblig : Lesehore (ant2_lat)
- Fundstellen „anánia“: PsHymn.ts : 160 : 0.0 (text_lat)

### barathro

- Formen: bárathro (1×), baráthro (1×)
- Korrekt: **bárathro** (Gleichstand in der Datenbank)
- Suchen: `baráthr>o` → Ersetzen: `bárathr>o` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „baráthro“: PsHymn.ts : 8325 : 1.0 (text_lat)

### basilii

- Formen: basilíi (1×), basílii (1×)
- Korrekt: **basílii** (Gleichstand in der Datenbank)
- Suchen: `Basilíi` → Ersetzen: `Basílii` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „basilíi“: Calendar.ts : AAA : 1 : 2 : oblig : major (oration_lat)

### bonifatium

- Formen: bonifátium (12×), bonifátíum (2×)
- Korrekt: **bonifátium**
- Suchen: `Bonifátíum` → Ersetzen: `Bonifátium` (2×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „bonifátíum“: Calendar.ts : Fulda : 6 : 5 : oblig : ErsteV (bitten_e_lat); Calendar.ts : Fulda : 6 : 5 : oblig : Vesper (bitten_e_lat)

### caroli

- Formen: caróli (2×), cároli (1×)
- Korrekt: **cároli** (die seltenere Form!)
- Suchen: `Caróli` → Ersetzen: `Cároli` (2×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „caróli“: Calendar.ts : AAA : 11 : 4 : oblig : Laudes (genitiv_lat); Calendar.ts : AAA : 12 : 1 : n1 : Laudes (genitiv_lat)

### cecidit

- Formen: cécidit (5×), cecídit (3×)
- ℹ️ Homograph: cécidit (cado, fiel) / cecídit (cædo, schlug nieder) – jede Fundstelle einzeln prüfen
- Fundstellen „cécidit“: Brevier.ts : j : 9 : 0 : Vesper (anta_lat); Brevier.ts : q : each : 4 : Laudes (bitten_lat); Calendar.ts : AAA : 6 : 29 : oblig : Terz (ant0_lat); PsHymn.ts : 55 : 1.0 (text_lat); PsHymn.ts : 55 : 3.0 (text_lat)
- Fundstellen „cecídit“: PsHymn.ts : 199 : 114.0 (text_lat); PsHymn.ts : 199 : 121.0 (text_lat)

### celebrat

- Formen: célebrat (5×), celébrat (2×)
- Korrekt: **célebrat**
- Suchen: `celébrat` → Ersetzen: `célebrat` (2×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „celébrat“: PsHymn.ts : 5493 : 0.0 (text_lat); PsHymn.ts : 5630 : 0.0 (text_lat)

### celebret

- Formen: célebret (6×), celébret (1×)
- Korrekt: **célebret**
- Suchen: `celébret` → Ersetzen: `célebret` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „celébret“: PsHymn.ts : 3229 : 1.0 (text_lat)

### comminabatur

- Formen: comminabátur (2×), comminábatur (1×)
- Korrekt: **comminabátur**
- Suchen: `comminábatur` → Ersetzen: `comminabátur` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „comminábatur“: PsHymn.ts : 158 : 0.0 (text_lat)

### compati

- Formen: cómpati (7×), compáti (2×)
- Korrekt: **cómpati**
- Suchen: `compáti` → Ersetzen: `cómpati` (2×)
  - ⚠️ auch Teil anderer Wörter: compátimur (2×)
- Fundstellen „compáti“: Calendar.ts : Fulda : 11 : 19 : oblig : ErsteV (bitten_lat); Calendar.ts : Fulda : 11 : 19 : oblig : Vesper (bitten_lat)

### confidere

- Formen: confídere (10×), confidére (1×)
- Korrekt: **confídere**
- Suchen: `confidére` → Ersetzen: `confídere` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „confidére“: PsHymn.ts : 199 : 118.0 (text_lat)

### confunderis

- Formen: confúnderis (2×), confundéris (1×)
- ℹ️ Homograph: confúnderis (Präsens) / confundéris (Futur) – jede Fundstelle einzeln prüfen
- Fundstellen „confúnderis“: Brevier.ts : a : even : 4 : Vesper (bitten_lat); Brevier.ts : k : 12 : 22 : Vesper (bitten_lat)
- Fundstellen „confundéris“: PsHymn.ts : 199 : 123.0 (text_lat)

### constantiæ

- Formen: constántiæ (1×), constantíæ (1×)
- Korrekt: **constántiæ** (Gleichstand in der Datenbank)
- Suchen: `constantíæ` → Ersetzen: `constántiæ` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „constantíæ“: Calendar.ts : Fulda : 8 : 16 : d1 : major (oration_lat)

### contulisti

- Formen: contulísti (14×), contúlisti (1×)
- Korrekt: **contulísti**
- Suchen: `contúlisti` → Ersetzen: `contulísti` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „contúlisti“: PsHymn.ts : 8723 : 402.0 (text_lat)

### credentes

- Formen: credéntes (13×), crédentes (1×)
- Korrekt: **credéntes**
- Suchen: `crédentes` → Ersetzen: `credéntes` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „crédentes“: PsHymn.ts : 199 : 105.0 (text_lat)

### currite

- Formen: cúrrite (1×), curríte (1×)
- Korrekt: **cúrrite** (Gleichstand in der Datenbank)
- Suchen: `curríte` → Ersetzen: `cúrrite` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „curríte“: Calendar.ts : Fulda : 9 : 28 : oblig : Non (les_text_lat)

### devovet

- Formen: dévovet (1×), devóvet (1×)
- Korrekt: **dévovet** (Gleichstand in der Datenbank)
- Suchen: `devóvet` → Ersetzen: `dévovet` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „devóvet“: PsHymn.ts : 9216 : 101.0 (text_lat)

### dilectionis

- Formen: dilectiónis (39×), diléctionis (1×)
- Korrekt: **dilectiónis**
- Suchen: `diléctionis` → Ersetzen: `dilectiónis` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „diléctionis“: PsHymn.ts : 153 : 0.0 (text_lat)

### dolore

- Formen: dolóre (3×), dólore (1×)
- Korrekt: **dolóre**
- Suchen: `dólore` → Ersetzen: `dolóre` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „dólore“: PsHymn.ts : 107 : 3.0 (text_lat)

### eadem

- Formen: eádem (5×), éadem (5×)
- ℹ️ Homograph: éadem (Nom./Akk.) / eádem (Ablativ) – jede Fundstelle einzeln prüfen
- Fundstellen „eádem“: Brevier.ts : com : Frau : each : ErsteV (bitten_lat); Brevier.ts : com : Frau : each : Vesper (bitten_lat); Brevier.ts : j : 7 : 0 : Vesper (antc_lat); Brevier.ts : q : 6 : 5 : Laudes (bitten_lat); PsHymn.ts : 9010 : 2.0 (text_lat)
- Fundstellen „éadem“: Brevier.ts : j : 10 : 0 : each (oration_lat); Brevier.ts : j : 10 : 0 : ErsteV (oration_lat); Brevier.ts : j : 10 : each : Lesehore (oration_lat); Brevier.ts : q : even : 2 : Laudes (bitten_lat); Brevier.ts : q : even : 4 : Laudes (bitten_lat)

### episcopis

- Formen: epíscopis (5×), episcópis (1×)
- Korrekt: **epíscopis**
- Suchen: `episcópis` → Ersetzen: `epíscopis` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „episcópis“: Calendar.ts : Paderborn : 8 : 7 : d11 : major (oration_lat)

### eripiat

- Formen: erípiat (3×), éripiat (1×)
- Korrekt: **erípiat**
- Suchen: `éripiat` → Ersetzen: `erípiat` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „éripiat“: PsHymn.ts : 71 : 1.0 (text_lat)

### evangelii

- Formen: evangélii (35×), evángelii (1×)
- Korrekt: **evangélii**
- Suchen: `Evángelii` → Ersetzen: `Evangélii` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „evángelii“: Calendar.ts : Paderborn : 9 : 25 : d11 : major (oration_lat)

### exaltare

- Formen: exaltáre (9×), exáltare (1×)
- Korrekt: **exaltáre**
- Suchen: `Exáltare` → Ersetzen: `Exaltáre` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „exáltare“: PsHymn.ts : 21 : 0.0 (text_lat)

### excidit

- Formen: excídit (2×), éxcidit (1×)
- ℹ️ Homograph: éxcidit (excĭdo, fiel heraus) / excídit (excīdo, schnitt aus) – jede Fundstelle einzeln prüfen
- Fundstellen „excídit“: Calendar.ts : AAA : 5 : 64 : oblig : Sext (les_text_lat); PsHymn.ts : 199 : 101.0 (text_lat)
- Fundstellen „éxcidit“: Brevier.ts : p : 3 : 3 : Sext (les_text_lat)

### fecisti

- Formen: fecísti (106×), fécisti (1×)
- Korrekt: **fecísti**
- Suchen: `fécisti` → Ersetzen: `fecísti` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „fécisti“: PsHymn.ts : 119 : 65.0 (text_lat)

### gestiens

- Formen: géstiens (2×), gestíens (1×)
- Korrekt: **géstiens**
- Suchen: `gestíens` → Ersetzen: `géstiens` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „gestíens“: PsHymn.ts : 8204 : 101.0 (text_lat)

### habitatores

- Formen: habitatóres (5×), habitátores (1×)
- Korrekt: **habitatóres**
- Suchen: `habitátores` → Ersetzen: `habitatóres` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „habitátores“: PsHymn.ts : 172 : 0.0 (text_lat)

### iacere

- Formen: iácere (2×), iacére (1×)
- ℹ️ Homograph: iácere (werfen) / iacére (liegen) – jede Fundstelle einzeln prüfen
- Fundstellen „iácere“: Calendar.ts : AAA : 7 : 8 : n1 : major (oration_lat); Calendar.ts : Paderborn : 7 : 8 : oblig : major (oration_lat)
- Fundstellen „iacére“: PsHymn.ts : 3221 : 1.0 (text_lat)

### imitatores

- Formen: imitatóres (4×), imitátores (1×)
- Korrekt: **imitatóres**
- Suchen: `imitátores` → Ersetzen: `imitatóres` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „imitátores“: Calendar.ts : AAA : 5 : 4 : n1 : major (oration_lat)

### ingreditur

- Formen: ingréditur (6×), ingredítur (1×)
- Korrekt: **ingréditur**
- Suchen: `ingredítur` → Ersetzen: `ingréditur` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „ingredítur“: Calendar.ts : Fulda : 2 : 4 : oblig : Vesper (ant1_lat)

### instruis

- Formen: instrúis (3×), ínstruis (2×)
- Korrekt: **ínstruis** (die seltenere Form!)
- Suchen: `instrúis` → Ersetzen: `ínstruis` (3×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „instrúis“: Brevier.ts : j : 12 : 0 : each (oration_lat); Brevier.ts : j : 12 : 0 : ErsteV (oration_lat); Brevier.ts : j : 12 : each : Lesehore (oration_lat)

### introibo

- Formen: introíbo (6×), intróibo (2×)
- Korrekt: **introíbo**
- Suchen: `intróibo` → Ersetzen: `introíbo` (2×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „intróibo“: PsHymn.ts : 42 : 9.0 (text_lat); PsHymn.ts : 43 : 0.0 (text_lat)

### intuentes

- Formen: intuéntes (1×), intúéntes (1×)
- Korrekt: **intuéntes** (Gleichstand in der Datenbank)
- Suchen: `intúéntes` → Ersetzen: `intuéntes` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „intúéntes“: Calendar.ts : Fulda : 12 : 16 : oblig : Vesper (ant2_lat)

### invenit

- Formen: invénit (11×), ínvenit (1×)
- ℹ️ Homograph: ínvenit (Präsens) / invénit (Perfekt) – jede Fundstelle einzeln prüfen
- Fundstellen „invénit“: Brevier.ts : com : Jgfr : each : Terz (resp1_lat); Brevier.ts : p : 1 : 2 : Sext (les_text_lat); Brevier.ts : q : 5 : 1 : Non (les_text_lat); Brevier.ts : q : 6 : 1 : Non (les_text_lat); Calendar.ts : AAA : 5 : 3 : oblig : Laudes (antev_lat); Calendar.ts : AAA : 5 : 65 : oblig : Terz (les_text_lat); Calendar.ts : AAA : 11 : 1 : oblig : Vesper (ant2_lat); PsHymn.ts : 84 : 0.0 (text_lat); PsHymn.ts : 119 : 161.0 (text_lat); PsHymn.ts : 176 : 0.0 (text_lat); PsHymn.ts : 199 : 102.0 (text_lat)
- Fundstellen „ínvenit“: PsHymn.ts : 4006 : 5.0 (text_lat)

### ioachim

- Formen: ióachim (2×), ioáchim (1×)
- ❓ Ioáchim oder Ióachim? – bitte entscheiden
- Fundstellen „ióachim“: Calendar.ts : AAA : 7 : 26 : oblig : each (oration_lat); PsHymn.ts : 8726 : 4.0 (text_lat)
- Fundstellen „ioáchim“: Calendar.ts : AAA : 7 : 26 : oblig : Laudes (genitiv_lat)

### ioannis

- Formen: ioánnis (31×), ióannis (1×)
- Korrekt: **ioánnis**
- Suchen: `Ióannis` → Ersetzen: `Ioánnis` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „ióannis“: Calendar.ts : AAA : 10 : 9 : n2 : Laudes (genitiv_lat)

### laborant

- Formen: labórant (2×), laboránt (1×)
- Korrekt: **labórant**
- Suchen: `laboránt` → Ersetzen: `labórant` (1×)
  - ⚠️ auch Teil anderer Wörter: laborántes (2×), laboránte (2×), laborántibus (1×), laborántem (1×)
- Fundstellen „laboránt“: Calendar.ts : Fulda : 12 : 16 : oblig : Terz (resp1_lat)

### luciæ

- Formen: lúciæ (1×), lucíæ (1×)
- Korrekt: **lúciæ** (Gleichstand in der Datenbank)
- Suchen: `Lucíæ` → Ersetzen: `Lúciæ` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „lucíæ“: Calendar.ts : AAA : 12 : 13 : oblig : Laudes (genitiv_lat)

### mansuetudinem

- Formen: mansuetúdinem (8×), mansuetudínem (1×)
- Korrekt: **mansuetúdinem**
- Suchen: `mansuetudínem` → Ersetzen: `mansuetúdinem` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „mansuetudínem“: Calendar.ts : Fulda : 9 : 28 : oblig : Terz (les_text_lat)

### maria

- Formen: maría (154×), mária (5×)
- ℹ️ Homograph: María (Name) / mária (Meere) – jede Fundstelle einzeln prüfen
- Fundstellen „maría“: Brevier.ts : a : 1 : 0 : Vesper (anta_lat); Brevier.ts : a : 1 : 0 : Vesper (antb_lat); Brevier.ts : a : 1 : 0 : Vesper (antc_lat); Brevier.ts : a : 3 : 2 : Vesper (antev_lat); Brevier.ts : a : each : each : Terz (ant0_lat); Brevier.ts : a : each : each : Non (ant0_lat); Brevier.ts : a : even : 0 : ErsteV (bitten_e_lat); Brevier.ts : a : even : 0 : ErsteV (bitten_lat); Brevier.ts : com : Frau : each : Laudes (bitten_lat); Brevier.ts : com : Maria : each : ErsteV (ant1_lat); Brevier.ts : com : Maria : each : ErsteV (bitten_lat); Brevier.ts : com : Maria : each : Lesehore (ant1_lat); Brevier.ts : com : Maria : each : Lesehore (ant3_lat); Brevier.ts : com : Maria : each : Lesehore (versikel0_lat); Brevier.ts : com : Maria : each : Vigil (ant0_lat); Brevier.ts : com : Maria : each : Laudes (ant1_lat); Brevier.ts : com : Maria : each : Laudes (ant3_lat); Brevier.ts : com : Maria : each : Laudes (bitten_e_lat); Brevier.ts : com : Maria : each : Terz (ant0_lat); Brevier.ts : com : Maria : each : Vesper (ant1_lat); Brevier.ts : com : Maria : each : Vesper (resp1_lat); Brevier.ts : com : Maria : each : Vesper (antev_lat); Brevier.ts : com : Maria : each : Vesper (bitten_lat); Brevier.ts : com : MariaSa : each : Laudes (antev_lat); Brevier.ts : com : MariaSa : each : Laudes (bitten_e_lat); Brevier.ts : j : 2 : 0 : ErsteV (antc_lat); Brevier.ts : j : 16 : 0 : Laudes (antc_lat); Brevier.ts : j : 16 : 0 : Vesper (antc_lat); Brevier.ts : j : each : 6 : Non (oration_lat); Brevier.ts : k : 1 : 10 : Laudes (bitten_lat); Brevier.ts : k : 12 : 23 : each (oration_lat); Brevier.ts : k : 12 : 23 : Laudes (antev_lat); Brevier.ts : k : 12 : 27 : Vesper (antev_lat); Brevier.ts : kso : 1 : 0 : Lesehore (ant2_lat); Brevier.ts : kso : 2 : 0 : Laudes (resp3_lat); Brevier.ts : o : 1 : 2 : Laudes (antev_lat); Brevier.ts : o : 1 : each : Vesper (ant1_lat); Brevier.ts : o : 2 : 0 : ErsteV (ant1_lat); Brevier.ts : o : 2 : 0 : Vesper (ant1_lat); Brevier.ts : o : 7 : 0 : Vesper (bitten_lat); Brevier.ts : o : 7 : 5 : Vesper (antev_lat); Brevier.ts : o : each : 0 : Lesehore (ant3_lat); Brevier.ts : p : 4 : 0 : ErsteV (bitten_lat); Brevier.ts : q : even : 2 : Vesper (bitten_lat); Brevier.ts : w : each : each : Terz (ant0_lat); Brevier.ts : w : each : each : Sext (ant0_lat); Calendar.ts : AAA : 1 : 1 : oblig : ErsteV (bitten_lat); Calendar.ts : AAA : 1 : 1 : oblig : Vigil (ant0_lat); Calendar.ts : AAA : 1 : 1 : oblig : Laudes (ant2_lat); Calendar.ts : AAA : 1 : 1 : oblig : Laudes (bitten_e_lat); Calendar.ts : AAA : 1 : 1 : oblig : Laudes (bitten_lat); Calendar.ts : AAA : 1 : 1 : oblig : Terz (ant0_lat); Calendar.ts : AAA : 1 : 1 : oblig : Sext (ant0_lat); Calendar.ts : AAA : 2 : 2 : oblig : Vesper (antev_lat); Calendar.ts : AAA : 2 : 11 : n1 : Laudes (antev_lat); Calendar.ts : AAA : 2 : 11 : n1 : Vesper (antev_lat); Calendar.ts : AAA : 3 : 19 : oblig : ErsteV (ant3_lat); Calendar.ts : AAA : 3 : 19 : oblig : ErsteV (bitten_lat); Calendar.ts : AAA : 3 : 19 : oblig : Lesehore (ant3_lat); Calendar.ts : AAA : 3 : 19 : oblig : Laudes (ant2_lat); Calendar.ts : AAA : 3 : 19 : oblig : Vesper (bitten_lat); Calendar.ts : AAA : 3 : 25 : oblig : ErsteV (antev_lat); Calendar.ts : AAA : 3 : 25 : oblig : ErsteV (bitten_lat); Calendar.ts : AAA : 3 : 25 : oblig : Laudes (resp1_lat); Calendar.ts : AAA : 3 : 25 : oblig : Laudes (bitten_lat); Calendar.ts : AAA : 3 : 25 : oblig : Terz (ant0_lat); Calendar.ts : AAA : 3 : 25 : oblig : Vesper (ant2_lat); Calendar.ts : AAA : 3 : 25 : oblig : Vesper (bitten_lat); Calendar.ts : AAA : 5 : 1 : n1 : Vesper (bitten_lat); Calendar.ts : AAA : 5 : 1 : n2 : Lesehore (ant3_lat); Calendar.ts : AAA : 5 : 1 : n2 : Laudes (ant2_lat); Calendar.ts : AAA : 5 : 24 : n1 : major (oration_lat); Calendar.ts : AAA : 5 : 61 : oblig : Laudes (antev_lat); Calendar.ts : AAA : 7 : 2 : oblig : Laudes (ant1_lat); Calendar.ts : AAA : 7 : 2 : oblig : Laudes (ant3_lat); Calendar.ts : AAA : 7 : 2 : oblig : Laudes (bitten_e_lat); Calendar.ts : AAA : 7 : 2 : oblig : Vesper (ant1_lat); Calendar.ts : AAA : 7 : 2 : oblig : Vesper (bitten_lat); Calendar.ts : AAA : 7 : 5 : n1 : major (oration_lat); Calendar.ts : AAA : 7 : 16 : n1 : Vesper (antev_lat); Calendar.ts : AAA : 7 : 29 : oblig : major (oration_lat); Calendar.ts : AAA : 8 : 15 : oblig : ErsteV (ant3_lat); Calendar.ts : AAA : 8 : 15 : oblig : ErsteV (resp1_lat); Calendar.ts : AAA : 8 : 15 : oblig : ErsteV (bitten_lat); Calendar.ts : AAA : 8 : 15 : oblig : Lesehore (ant3_lat); Calendar.ts : AAA : 8 : 15 : oblig : Lesehore (versikel0_lat); Calendar.ts : AAA : 8 : 15 : oblig : Laudes (ant1_lat); Calendar.ts : AAA : 8 : 15 : oblig : Laudes (ant2_lat); Calendar.ts : AAA : 8 : 15 : oblig : Laudes (resp1_lat); Calendar.ts : AAA : 8 : 15 : oblig : Laudes (bitten_e_lat); Calendar.ts : AAA : 8 : 15 : oblig : Terz (resp0_lat); Calendar.ts : AAA : 8 : 15 : oblig : Sext (ant0_lat); Calendar.ts : AAA : 8 : 15 : oblig : Non (resp0_lat); Calendar.ts : AAA : 8 : 15 : oblig : Vesper (ant1_lat); Calendar.ts : AAA : 8 : 15 : oblig : Vesper (ant2_lat); Calendar.ts : AAA : 8 : 15 : oblig : Vesper (resp1_lat); Calendar.ts : AAA : 8 : 15 : oblig : Vesper (antev_lat); Calendar.ts : AAA : 8 : 15 : oblig : Vesper (bitten_lat); Calendar.ts : AAA : 8 : 22 : oblig : Laudes (antev_lat); Calendar.ts : AAA : 8 : 22 : oblig : Vesper (antev_lat); Calendar.ts : AAA : 8 : 5 : n1 : Laudes (antev_lat); Calendar.ts : AAA : 8 : 5 : n1 : Vesper (antev_lat); Calendar.ts : AAA : 9 : 8 : oblig : Sext (ant0_lat); Calendar.ts : AAA : 9 : 8 : oblig : Vesper (ant1_lat); Calendar.ts : AAA : 9 : 8 : oblig : Vesper (ant3_lat); Calendar.ts : AAA : 9 : 15 : oblig : Laudes (resp2_lat); Calendar.ts : AAA : 9 : 15 : oblig : Vesper (resp1_lat); Calendar.ts : AAA : 10 : 7 : oblig : Laudes (ant1_lat); Calendar.ts : AAA : 10 : 7 : oblig : Laudes (ant3_lat); Calendar.ts : AAA : 10 : 7 : oblig : Laudes (resp1_lat); Calendar.ts : AAA : 10 : 7 : oblig : Vesper (resp1_lat); Calendar.ts : AAA : 10 : 7 : oblig : Vesper (antev_lat); Calendar.ts : AAA : 10 : 7 : oblig : each (oration_lat); Calendar.ts : AAA : 11 : 1 : oblig : ErsteV (bitten_lat); Calendar.ts : AAA : 11 : 1 : oblig : Vesper (bitten_lat); Calendar.ts : AAA : 11 : 21 : oblig : Laudes (antev_lat); Calendar.ts : AAA : 12 : 8 : oblig : ErsteV (ant3_lat); Calendar.ts : AAA : 12 : 8 : oblig : Lesehore (ant1_lat); Calendar.ts : AAA : 12 : 8 : oblig : Laudes (ant2_lat); Calendar.ts : AAA : 12 : 8 : oblig : Laudes (bitten_e_lat); Calendar.ts : AAA : 12 : 8 : oblig : Vesper (ant1_lat); Calendar.ts : AAA : 12 : 8 : oblig : Vesper (antev_lat); LectureAlternatives.ts : MariaSaLd : les_selector : [2] (resp1_lat); PsHymn.ts : 3144 : 0.0 (text_lat); PsHymn.ts : 3221 : 1.0 (text_lat); PsHymn.ts : 3221 : 2.0 (text_lat); PsHymn.ts : 3241 : 2.0 (text_lat); PsHymn.ts : 5457 : 0.0 (text_lat); PsHymn.ts : 5616 : 0.0 (text_lat); PsHymn.ts : 8101 : 101.0 (text_lat); PsHymn.ts : 8202 : 104.0 (text_lat); PsHymn.ts : 8325 : 4.0 (text_lat); PsHymn.ts : 8702 : 1.0 (text_lat); PsHymn.ts : 8702 : 2.0 (text_lat); PsHymn.ts : 8722 : 2.0 (text_lat); PsHymn.ts : 8726 : 4.0 (text_lat); PsHymn.ts : 8729 : 2.0 (text_lat); PsHymn.ts : 8729 : 4.0 (text_lat); PsHymn.ts : 8815 : 1.0 (text_lat); PsHymn.ts : 8815 : 4.0 (text_lat); PsHymn.ts : 8822 : 2.0 (text_lat); PsHymn.ts : 8908 : 4.0 (text_lat); PsHymn.ts : 9121 : 1.0 (text_lat); PsHymn.ts : 9121 : 2.0 (text_lat); PsHymn.ts : 9208 : 102.0 (text_lat); PsHymn.ts : 9227 : 1.0 (text_lat); Sollemnities.ts : verst : each : each (oration_lat)
- Fundstellen „mária“: Calendar.ts : AAA : 1 : 66 : oblig : Laudes (ant2_lat); PsHymn.ts : 24 : 0.0 (text_lat); PsHymn.ts : 69 : 3.0 (text_lat); PsHymn.ts : 160 : 0.0 (text_lat); PsHymn.ts : 8202 : 101.0 (text_lat)

### martyri

- Formen: mártyri (4×), mártýri (1×)
- Korrekt: **mártyri**
- Suchen: `mártýri` → Ersetzen: `mártyri` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „mártýri“: Calendar.ts : Fulda : 12 : 9 : d11 : major (oration_lat)

### meorum

- Formen: meórum (15×), méorum (1×)
- Korrekt: **meórum**
- Suchen: `méorum` → Ersetzen: `meórum` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „méorum“: PsHymn.ts : 7 : 1.0 (text_lat)

### mirabilem

- Formen: mirábilem (5×), mirabílem (1×)
- Korrekt: **mirábilem**
- Suchen: `mirabílem` → Ersetzen: `mirábilem` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „mirabílem“: Calendar.ts : Fulda : 11 : 19 : oblig : Laudes (ant3_lat)

### miseris

- Formen: míseris (13×), miséris (1×)
- Korrekt: **míseris**
- Suchen: `miséris` → Ersetzen: `míseris` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „miséris“: PsHymn.ts : 8928 : 104.0 (text_lat)

### oblivisceris

- Formen: oblivísceris (2×), obliviscéris (1×)
- ℹ️ Homograph: oblivísceris (Präsens) / obliviscéris (Futur) – jede Fundstelle einzeln prüfen
- Fundstellen „oblivísceris“: PsHymn.ts : 44 : 3.0 (text_lat); PsHymn.ts : 199 : 121.0 (text_lat)
- Fundstellen „obliviscéris“: PsHymn.ts : 13 : 0.0 (text_lat)

### oderunt

- Formen: odérunt (17×), óderunt (1×)
- Korrekt: **odérunt**
- Suchen: `óderunt` → Ersetzen: `odérunt` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „óderunt“: PsHymn.ts : 69 : 1.0 (text_lat)

### offensione

- Formen: offénsióne (3×), offensióne (3×)
- Korrekt: **offensióne** (Gleichstand in der Datenbank)
- Suchen: `offénsióne` → Ersetzen: `offensióne` (3×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „offénsióne“: Brevier.ts : j : 31 : 0 : each (oration_lat); Brevier.ts : j : 31 : 0 : ErsteV (oration_lat); Brevier.ts : j : 31 : each : Lesehore (oration_lat)

### ovili

- Formen: ovíli (4×), óvili (1×)
- Korrekt: **ovíli**
- Suchen: `óvili` → Ersetzen: `ovíli` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „óvili“: PsHymn.ts : 175 : 0.0 (text_lat)

### perditione

- Formen: perditióne (2×), perditíone (2×)
- Korrekt: **perditióne** (Gleichstand in der Datenbank)
- Suchen: `perditíone` → Ersetzen: `perditióne` (2×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „perditíone“: PsHymn.ts : 162 : 0.0 (text_lat); PsHymn.ts : 162 : 1.0 (text_lat)

### peritura

- Formen: peritúra (1×), perítura (1×)
- Korrekt: **peritúra** (Gleichstand in der Datenbank)
- Suchen: `perítura` → Ersetzen: `peritúra` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „perítura“: PsHymn.ts : 9119 : 102.0 (text_lat)

### persecutio

- Formen: persécutio (3×), persecútio (1×)
- Korrekt: **persecútio** (die seltenere Form!)
- Suchen: `persécutio` → Ersetzen: `persecútio` (3×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „persécutio“: Brevier.ts : com : MärtPl : each : ErsteV (les_text_lat); Brevier.ts : com : MärtSg : each : ErsteV (les_text_lat); Brevier.ts : p : 2 : 3 : Laudes (les_text_lat)

### possimus

- Formen: possímus (28×), póssimus (2×)
- Korrekt: **possímus**
- Suchen: `póssimus` → Ersetzen: `possímus` (2×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „póssimus“: Calendar.ts : AAA : 12 : 4 : n3 : major (oration_lat); PsHymn.ts : 192 : 0.0 (text_lat)

### posuerunt

- Formen: posuérunt (11×), posúerunt (1×)
- Korrekt: **posuérunt**
- Suchen: `Posúerunt` → Ersetzen: `Posuérunt` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „posúerunt“: PsHymn.ts : 73 : 1.0 (text_lat)

### precare

- Formen: précáre (1×), precáre (1×)
- Korrekt: **precáre** (Gleichstand in der Datenbank)
- Suchen: `précáre` → Ersetzen: `precáre` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „précáre“: Calendar.ts : Fulda : 11 : 19 : oblig : Laudes (antev_lat)

### proiectus

- Formen: proíectus (2×), proiéctus (1×)
- Korrekt: **proiéctus** (die seltenere Form!)
- Suchen: `proíectus` → Ersetzen: `proiéctus` (2×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „proíectus“: PsHymn.ts : 22 : 1.0 (text_lat); PsHymn.ts : 22 : 4.0 (text_lat)

### prosequi

- Formen: prósequi (3×), proséqui (1×)
- Korrekt: **prósequi**
- Suchen: `proséqui` → Ersetzen: `prósequi` (1×)
  - ⚠️ auch Teil anderer Wörter: proséquitur (1×)
- Fundstellen „proséqui“: Calendar.ts : AAA : 2 : 8 : n2 : major (oration_lat)

### prædicationes

- Formen: prædicatiónes (1×), prædicátiones (1×)
- Korrekt: **prædicatiónes** (Gleichstand in der Datenbank)
- Suchen: `prædicátiones` → Ersetzen: `prædicatiónes` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „prædicátiones“: PsHymn.ts : 199 : 108.0 (text_lat)

### præveni

- Formen: prǽveni (4×), prævéni (3×)
- ℹ️ Homograph: prǽveni (Imperativ) / prævéni (Perfekt) – jede Fundstelle einzeln prüfen
- Fundstellen „prǽveni“: Brevier.ts : p : 1 : 1 : Laudes (oration_lat); Brevier.ts : q : 0 : 4 : each (oration_lat); PsHymn.ts : 17 : 0.0 (text_lat); PsHymn.ts : 17 : 2.0 (text_lat)
- Fundstellen „prævéni“: Brevier.ts : p : 2 : 2 : Laudes (resp3_lat); Brevier.ts : p : 4 : 2 : Laudes (resp3_lat); PsHymn.ts : 119 : 145.0 (text_lat)

### quoniam

- Formen: quóniam (536×), quoníam (1×)
- Korrekt: **quóniam**
- Suchen: `Quoníam` → Ersetzen: `Quóniam` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „quoníam“: PsHymn.ts : 18 : 4.0 (text_lat)

### radices

- Formen: radíces (2×), rádices (1×)
- Korrekt: **radíces**
- Suchen: `rádices` → Ersetzen: `radíces` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „rádices“: PsHymn.ts : 199 : 119.0 (text_lat)

### redemptionis

- Formen: redemptiónis (24×), redemptíonis (1×)
- Korrekt: **redemptiónis**
- Suchen: `redemptíonis` → Ersetzen: `redemptiónis` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „redemptíonis“: PsHymn.ts : 49 : 1.0 (text_lat)

### refoves

- Formen: réfoves (1×), refóves (1×)
- Korrekt: **réfoves** (Gleichstand in der Datenbank)
- Suchen: `refóves` → Ersetzen: `réfoves` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „refóves“: PsHymn.ts : 9216 : 101.0 (text_lat)

### sibique

- Formen: sibíque (3×), síbique (1×)
- Korrekt: **sibíque**
- Suchen: `síbique` → Ersetzen: `sibíque` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „síbique“: PsHymn.ts : 9216 : 102.0 (text_lat)

### similique

- Formen: similíque (1×), simílique (1×)
- Korrekt: **similíque** (Gleichstand in der Datenbank)
- Suchen: `simílique` → Ersetzen: `similíque` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „simílique“: PsHymn.ts : 8204 : 101.0 (text_lat)

### sollemniter

- Formen: sollémniter (5×), sollémníter (1×)
- Korrekt: **sollémniter**
- Suchen: `sollémníter` → Ersetzen: `sollémniter` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „sollémníter“: Calendar.ts : Fulda : 12 : 1 : d1 : major (oration_lat)

### spiritus

- Formen: spíritus (347×), spirítus (1×)
- Korrekt: **spíritus**
- Suchen: `spirítus` → Ersetzen: `spíritus` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „spirítus“: PsHymn.ts : 148 : 0.0 (text_lat)

### superis

- Formen: súperis (4×), supéris (1×)
- Korrekt: **súperis**
- Suchen: `supéris` → Ersetzen: `súperis` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „supéris“: PsHymn.ts : 9119 : 102.0 (text_lat)

### superos

- Formen: súperos (4×), supéros (1×)
- Korrekt: **súperos**
- Suchen: `Supéros` → Ersetzen: `Súperos` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „supéros“: PsHymn.ts : 8204 : 104.0 (text_lat)

### supplices

- Formen: súpplices (61×), supplíces (3×)
- Korrekt: **súpplices**
- Suchen: `supplíces` → Ersetzen: `súpplices` (3×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „supplíces“: Brevier.ts : j : 9 : 0 : each (oration_lat); Brevier.ts : j : 9 : 0 : ErsteV (oration_lat); Brevier.ts : j : 9 : each : Lesehore (oration_lat)

### supplicum

- Formen: súpplicum (9×), supplícum (3×)
- Korrekt: **súpplicum**
- Suchen: `supplícum` → Ersetzen: `súpplicum` (3×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „supplícum“: Brevier.ts : j : 27 : 0 : each (oration_lat); Brevier.ts : j : 27 : 0 : ErsteV (oration_lat); Brevier.ts : j : 27 : each : Lesehore (oration_lat)

### sæcula

- Formen: sǽcula (206×), sæcúla (3×)
- Korrekt: **sǽcula**
- Suchen: `sæcúla` → Ersetzen: `sǽcula` (3×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „sæcúla“: PsHymn.ts : 195 : 0.0 (text_lat); PsHymn.ts : 195 : 2.0 (text_lat); PsHymn.ts : 195 : 3.0 (text_lat)

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

### triadi

- Formen: tríadi (12×), triádi (1×)
- Korrekt: **tríadi**
- Suchen: `Triádi` → Ersetzen: `Tríadi` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „triádi“: PsHymn.ts : 8828 : 0.0 (text_lat)

### tribulationis

- Formen: tribulatiónis (15×), tribulátionis (1×)
- Korrekt: **tribulatiónis**
- Suchen: `tribulátionis` → Ersetzen: `tribulatiónis` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „tribulátionis“: PsHymn.ts : 175 : 0.0 (text_lat)

### utraque

- Formen: útraque (2×), utráque (1×)
- ℹ️ Homograph: útraque (Nom.) / utráque (Ablativ) – jede Fundstelle einzeln prüfen
- Fundstellen „útraque“: Brevier.ts : k : 12 : 22 : Vesper (antev_lat); Calendar.ts : AAA : 1 : 1 : oblig : ErsteV (bitten_e_lat)
- Fundstellen „utráque“: Brevier.ts : p : 2 : 5 : Laudes (les_text_lat)

### viderint

- Formen: víderint (1×), vidérint (1×)
- Korrekt: **víderint** (Gleichstand in der Datenbank)
- Suchen: `vidérint` → Ersetzen: `víderint` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „vidérint“: PsHymn.ts : 199 : 116.0 (text_lat)

### videris

- Formen: víderis (2×), vidéris (1×)
- ℹ️ Homograph: víderis (Perf. Konj./Fut. II) / vidéris (Passiv Präsens „du scheinst“) – jede Fundstelle einzeln prüfen
- Fundstellen „víderis“: Brevier.ts : q : 0 : 5 : Laudes (antev_lat); Brevier.ts : q : each : 1 : Non (les_text_lat)
- Fundstellen „vidéris“: PsHymn.ts : 8429 : 2.0 (text_lat)

### vigilesque

- Formen: vigilésque (1×), vigílésque (1×)
- Korrekt: **vigilésque** (Gleichstand in der Datenbank)
- Suchen: `vigílésque` → Ersetzen: `vigilésque` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „vigílésque“: PsHymn.ts : 8204 : 104.0 (text_lat)

### vocationis

- Formen: vocatiónis (6×), vocátionis (2×)
- Korrekt: **vocatiónis**
- Suchen: `vocátionis` → Ersetzen: `vocatiónis` (2×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „vocátionis“: Calendar.ts : Paderborn : 7 : 23 : oblig : ErsteV (les_text_lat); Calendar.ts : Paderborn : 7 : 23 : oblig : Vesper (les_text_lat)

### volucres

- Formen: vólucres (4×), volúcres (1×)
- Korrekt: **vólucres**
- Suchen: `volúcres` → Ersetzen: `vólucres` (1×)
  - ✅ „Alles ersetzen“ möglich
- Fundstellen „volúcres“: PsHymn.ts : 160 : 0.0 (text_lat)

