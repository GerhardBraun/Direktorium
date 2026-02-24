# LITURGIE.md – Fachlicher Hintergrund für Entwickler

Diese Datei erläutert die liturgischen Regeln, die der Stundengebet-App
zugrunde liegen. Sie ist für Programmierer gedacht, die das Stundengebet
nicht kennen. Bei Unklarheiten: immer den Fachexperten (den Priester/
Entwickler) fragen – nicht raten.

---

## 1. Der kirchliche Kalender – Struktur und Ebenen

### 1.1 Die vier Kalenderebenen

Der kirchliche Kalender ist hierarchisch aufgebaut. Jede Ebene kann
Feiern der darüberliegenden Ebene ergänzen oder überschreiben:

| Ebene | Kürzel in der App | Beschreibung |
|-------|-------------------|--------------|
| Allgemeiner Römischer Kalender (ARK/GK) | – | Weltkirchlicher Grundkalender |
| Regionalkalender (RK) | – | Anpassungen für den deutschen Sprachraum |
| Diözesankalender | `d1`–`d5` | Eigenfeiern der jeweiligen Diözese |
| Eigenfeiern einzelner Kirchen | – | Patrozinium, Kirchweih der eigenen Kirche |

In der App wird der Regionalkalender für das deutsche Sprachgebiet als Grundlage
verwendet (mit dem Kennzeichen `AAA`, damit er in der alphabetischen Liste der Diözesen
ganz oben steht.)
Dazu können diözesane Eigenfeiern ergänzt werden. Bisher ist nur die
Diözese `Fulda` aufgenommen.

### 1.2 Okkurrenz: Was passiert, wenn zwei Feiern auf denselben Tag fallen?

**Okkurrenz** nennt man das Zusammentreffen zweier Feiern am selben Tag.
Regel: Die Feier mit dem höheren liturgischen Rang hat Vorrang (→ Rangtabelle
in Abschnitt 2). Feiern niedrigeren Ranges fallen in diesem Jahr aus –
außer bei Hochfesten, die auf den nächsten freien Tag verschoben werden.

**Konkurrenz** nennt man das Zusammentreffen der Vesper eines Tages mit
der Ersten Vesper des folgenden Tages (am Vorabend eines Sonntages oder Hochfestes). Regel: Die Vesper
der ranghöheren Feier hat Vorrang; bei Gleichrang die Zweite Vesper des
laufenden Tages.

*Relevanz für die App:* Der State `prefSollemnity` steuert, welche Feier
bei Konkurrenz bevorzugt wird (`soll` = Hochfest bevorzugen, mit Erster
Vesper; `kirchw` = Kirchweihfest bevorzugen).

---

## 2. Die liturgischen Rangstufen

Jeder Tag im Kirchenjahr hat einen **liturgischen Rang**. Er bestimmt,
welche Texte zu verwenden sind und ob eine Feier verpflichtend ist.

### 2.1 Rangtabelle (vereinfacht, in absteigender Priorität)

| Rang in der App | Liturgische Bezeichnung | Beispiele |
|-----------------|-------------------------|-----------|
| **Gruppe I** (höchste Priorität) | | |
| – | Triduum Paschale | Gründonnerstagabend bis Ostersonntagabend |
| – | Hochrangige Herrenfeste | Weihnachten, Ostern, Pfingsten, Epiphanie … |
| 4 | **Hochfest** (Sollemnitas) | Patronatsfest, Kirchweih, Allerheiligen … |
| **Gruppe II** | | |
| 3 | **Fest** (Festum) | Apostelfeste, Mariä Lichtmess … |
| – | Sonntage im Jahreskreis und der Weihnachtszeit | |
| – | Adventstage 17.–24. Dezember, Wochentage der Fastenzeit | |
| **Gruppe III** | | |
| 2 | **Gebotener Gedenktag** | Viele Heiligenfeste, z.B. hl. Josef (1. Mai) |
| 1 | **Nichtgebotener Gedenktag** | Freigestellte Heiligenfeste |
| 0 | **Wochentag** (feria) | Normaler Tag im Jahreskreis |

**Wichtige Faustregel:** `isHighRank` = rank > 2, d.h. Hochfeste und
Feste. Ab diesem Rang haben die Eigentexte des Tages absoluten Vorrang
vor Wochentagstexten; es wird nichts vom Wochentag genommen.

### 2.2 Gebotene vs. nichtgebotene Gedenktage

- **Gebotener Gedenktag** (rank 2, `oblig`): Muss gefeiert werden; eigene
  Texte sind verpflichtend zu verwenden, soweit vorhanden.
- **Nichtgebotener Gedenktag** (rank 1, `n1`–`n5` oder `d1`–`d5`): Kann
  gefeiert werden; alternativ kann auch der Wochentag gebetet werden.
  Die Feier des nichtgebotenen Gedenktages unterscheidet sich inhaltlich
  nicht von der des gebotenen.

*In der App:* Die Textquellen `n1`–`n5` sind immer nichtgebotene
Gedenktage. `oblig` enthält sowohl Hochfeste/Feste als auch gebotene
Gedenktage.

---

## 3. Aufbau des Stundengebets

### 3.1 Die Horen und ihre Bestandteile

Das Stundengebet besteht aus mehreren **Horen** (Gebetszeiten), die über
den Tag verteilt gebetet werden. Jede Hore hat eine feste Struktur:

| Hore | Key in App | Tageszeit | Bestandteile |
|------|------------|-----------|--------------|
| Erste Vesper | `erstev` | Vorabend | wie Vesper |
| Invitatorium | `invitatorium` | Tagesbeginn | Antiphon + Psalm |
| Lesehore | `lesehore` | beliebig | Hymnus, Psalmen, 2 Lesungen mit Responsorien, (Te Deum), Oration |
| Laudes | `laudes` | Morgen | Hymnus, Psalmen, Canticum, Kurzlesung, Benedictus, Bitten, Oration |
| Terz/Sext/Non | `terz`/`sext`/`non` | ca. 9/12/15 Uhr | Hymnus, Psalmen, Kurzlesung, Versikel, Oration |
| Vesper | `vesper` | Abend | Hymnus, Psalmen, Canticum, Kurzlesung, Magnificat, Fürbitten, Oration |
| Komplet | `komplet` | Nacht | Hymnus, Psalmen, Kurzlesung, Nunc dimittis, Oration, Marianische Antiphon |

### 3.2 Proprium und Ordinarium

- **Ordinarium**: Feststehende, täglich gleiche Texte (in der App: `ordinarium.js`)
- **Proprium**: Texte, die sich je nach Tag und Kirchenjahreszeit ändern
  (Hymnen, Antiphonen, Lesungen, Orationen)
- **Psalterium**: Die 150 Psalmen sind auf vier Wochen verteilt
  (Vierwochenpsalter). An jedem Tag sind bestimmte Psalmen vorgesehen.
- **Commune**: Gemeinschaftstexte für Heiligenkategorien (z.B. Commune
  der Märtyrer, der Jungfrauen …); werden verwendet, wenn keine eigenen
  Texte vorhanden sind. In der App: `com1`, `com2`.

---

## 4. Textzuordnung je nach Rang des Tages

Dies ist die Kernlogik der App. Je nach Rang des Tages gelten
unterschiedliche Regeln, welche Texte verwendet werden:

### 4.1 Wochentag (rank 0)

Alle Texte werden vom laufenden Wochentag im Psalterium genommen.

### 4.2 Nichtgebotener Gedenktag (rank 0)

Der Nutzer **kann** den Gedenktag feiern oder den Wochentag beten.
Will er den Gedenktag feiern, gilt wie bei gebotenen Gedenktagen (→ 4.3).

### 4.3 Gebotener Gedenktag (rank 2, `oblig`)

Grundlage ist der Wochentag; nur bestimmte Teile werden durch Eigentexte
ersetzt:

- **Mindestumfang** (die meisten Gedenktage): eigene hagiographische
  Lesung (2. Lesung der Lesehore mit Responsorium) + eigene Oration
- **Erweiterter Umfang** (`BuM eig`): zusätzlich eigene Benedictus-Antiphon
  (Laudes) und Magnificat-Antiphon (Vesper)
- **Voller Umfang** (`LuV eig`): eigene Texte für Laudes und Vesper;
  was nicht eigen ist, kommt aus dem Commune (nicht vom Wochentag)

Feste Regeln:
- Psalmen, Canticum und 1. Lesung der Lesehore: **immer vom Wochentag**
- Kleine Horen (Terz/Sext/Non): **immer vom Wochentag**
- Komplet: **immer vom Wochentag**

### 4.4 Fest (rank 3)

Wie Hochfest (→ 4.5), mit diesen Unterschieden:
- Keine Erste Vesper (außer bei den vier Herren-Festen, die über den
  Sonntagen stehen: 2.2., 6.8., 14.9., 9.11.)
- Kleine Horen: Psalmen vom Wochentag (wenn nicht eigen)
- Komplet: vom Wochentag

### 4.5 Hochfest (rank 5, `soll`)

Nichts wird vom Wochentag genommen. Was nicht eigen ist, kommt aus
dem Commune bzw. Ordinarium:

- **Erste Vesper** am Vorabend (Konkurrenz mit vorherigem Tag beachten!)
- **Lesehore**: nach 2. Lesung stets Te Deum (auch in der Fastenzeit)
- **Laudes**: Psalmen vom Sonntag der 1. Woche
- **Kleine Horen**: Psalmen vom Sonntag der 1. Woche (wenn nicht eigen)
- **Komplet**: Sonntagskomplet (nicht Wochentagskomplet!)

### 4.6 Kommemoration (Sonderfall in Advent, Weihnachtsoktav und Fastenzeit)

In bestimmten Zeiten (17.–31. Dezember und Fastenzeit) können Gedenktage
nicht regulär begangen werden. Stattdessen gibt es eine **Kommemoration**:
Der Heilige wird kurz „erwähnt", aber das Stundengebet gehört dem Tag.

In der App: State `useCommemoration` steuert, ob eine Kommemoration
stattfindet.

---

## 5. Die Komplet – Sonderregeln

Die Komplet (Nachtgebet) hat besondere Regeln, da sie sich nach dem
Wochentag richtet, nicht nach der Feier des Tages:

- **Normalfall**: Komplet vom laufenden Wochentag
- **Sonntagskomplet** (1. oder 2. Komplet vom Sonntag) wird gebetet:
  - An allen Hochfesten nach der 2. Vesper (bzw. 1. Komplet nach der
    1. Vesper am Vorabend)
  - In der Weihnachts- und Osteroktav (Mo–Fr)
  - An Gründonnerstag, Karfreitag, Karsamstag: 2. Sonntagskomplet
  - Nach Belieben auch an allen anderen Tagen möglich

**Marianische Antiphon** zum Abschluss der Komplet – traditionell nach
Kirchenjahreszeit:

| Kirchenjahreszeit | Antiphon |
|-------------------|----------|
| Advent + Weihnachtszeit | Alma Redemptoris Mater |
| Fastenzeit | Ave Regina caelorum |
| Osterzeit | Regina caeli (verpflichtend) |
| Jahreskreis | Salve Regina |

Die Zuordnung ist nicht mehr verpflichtend – außer Regina caeli in der
Osterzeit. In der App: `MarAntSelector.js`

---

## 6. Die Geprägten Zeiten (Advent, Weihnachtszeit, Fastenzeit, Osterzeit)

In diesen vier Kirchenjahreszeiten gibt es mehr Eigentexte als im
Jahreskreis. Die Texte sind im Stundenbuch auf drei Stellen verteilt:

1. **Proprium der Kirchenjahreszeit**: Hymnen, Invitatoriums-Antiphon,
   Antiphonen für Terz/Sext/Non
2. **Vierwochenpsalter**: Psalmen mit angepassten Antiphonen
3. **Tagesproprium**: Benedictus-/Magnificat-Antiphon, Oration, ggf.
   weitere Eigentexte

An **allen Tagen der Geprägten Zeiten** gibt es:
- Eigene Benedictus-Antiphon (Laudes) und Magnificat-Antiphon (Vesper)
- Eigene Oration (wird zum Abschluss aller Horen außer der Komplet gebetet)

An den **Sonntagen der Geprägten Zeiten** zusätzlich:
- Eigene Antiphonen zu den Psalmen in Lesehore, Laudes und Vesper

In der **Osterzeit** außerdem:
- An allen Wochentagen eigene Antiphonen für Laudes und Vesper
- Alle Psalm-Antiphonen der Komplet werden durch dreifaches „Halleluja"
  ersetzt

---

## 7. Erste Vesper und Konkurrenz

Hochfeste und (teilweise) Feste haben eine **Erste Vesper** am Vorabend.
Das bedeutet: Am Abend vor dem Festtag wird nicht die Vesper des
laufenden Tages, sondern bereits die des kommenden Hochfestes gebetet.

Beispiel: Am Samstagabend vor einem Hochfest wird die Erste Vesper des
Hochfestes gebetet (nicht die normale Samstagsvesper).

*Relevanz für die App:* Der SourceSelector und `prefSollemnity` steuern,
ob die Erste Vesper angeboten wird. Die Angabe im Kalendarium „1. Vp"
(Erste Vesper) bzw. „2. Vp" (Zweite Vesper) zeigt an, welche Vesper
zu welchem Tag gehört.

---

## 8. Das Te Deum

Das **Te Deum** ist ein feierlicher Lobgesang, der am Ende der Lesehore
(vor der Oration) gebetet wird – aber nicht an allen Tagen:

- **Immer**: An Hochfesten und Festen (auch in der Fastenzeit)
- **An Sonntagen**: Im Jahreskreis und in den Geprägten Zeiten
  (außer in der Fastenzeit)
- **Nicht**: An Wochentagen der Fastenzeit, an nichtgebotenen und
  gebotenen Gedenktagen (dort folgt nach der 2. Lesung direkt die Oration)

Im Direktorium wird immer angezeigt, wenn das Te Deum zu beten ist.

---

## 9. Glossar der wichtigsten Fachbegriffe

| Begriff | Erklärung |
|---------|-----------|
| **Hore** | Gebetszeit (z.B. Laudes = Morgengebet) |
| **Proprium** | Eigentexte eines bestimmten Tages oder einer Feier |
| **Ordinarium** | Feststehende, täglich gleiche Texte |
| **Commune** | Gemeinschaftstexte für Heiligenkategorien |
| **Psalterium** | Die 150 Psalmen, auf 4 Wochen verteilt |
| **Antiphon** | Kurzer Text, der vor und nach einem Psalm gesungen/gebetet wird |
| **Oration** | Tagesgebet; schließt die meisten Horen ab |
| **Responsorium** | Wechselgesang nach einer Lesung |
| **Benedictus** | Canticum (Lobgesang) des Zacharias (Lk 1,68–79); in den Laudes |
| **Magnificat** | Canticum (Lobgesang) Marias (Lk 1,46–55); in der Vesper |
| **Nunc dimittis** | Canticum des Simeon (Lk 2,29–32); in der Komplet |
| **Te Deum** | Feierlicher Lobgesang am Ende der Lesehore (→ Abschnitt 8) |
| **Invitatorium** | Eröffnung des Tagesgebets mit Einladungspsalm (Ps 94/99) |
| **Okkurrenz** | Zusammentreffen zweier Feiern am selben Tag |
| **Konkurrenz** | Zusammentreffen der Vesper mit der Ersten Vesper des Folgetages |
| **Kommemoration** | Gedenkfeier eines Heiligen im Rahmen des Stundengebets des Tages |
| **Geprägte Zeit** | Kirchenjahreszeit mit besonderer Eigenprägung (Advent, Fasten …) |
| **Jahreskreis** | Die „gewöhnliche Zeit" außerhalb der Geprägten Zeiten |
| **Hochfest (Sollemnitas)** | Höchster Rang einer Feier (rank 4) |
| **Fest (Festum)** | Zweithöchster Rang (rank 3) |
| **Gedenktag (Memoria)** | Niedrigerer Rang; geboten (rank 2) oder nichtgeboten (rank 1) |
| **Wochentag (Feria)** | Rang 0: kein besonderer Festtag |
| **Hagiographische Lesung** | Lesung über das Leben eines Heiligen (2. Lesung der Lesehore) |
| **Stundenbuch** | Das Buch mit allen Texten des Stundengebets (lat.: Liturgia Horarum) |
