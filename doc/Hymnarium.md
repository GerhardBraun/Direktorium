# Hymnarium – Verzeichnis der Hymnen

Stand: 2026-11-26 · automatisch erzeugt mit `node doc/tools/gen-hymnarium.cjs doc/Hymnarium.md` aus `Brevier.ts`, `Calendar.ts`, `Sollemnities.ts` und `PsHymn.ts`. **Nicht von Hand bearbeiten** – Änderungen gehören in die Daten oder in die Konfiguration am Anfang des Skripts.

**Konventionen**

- In jeder Liste stehen zuerst die deutschen Hymnen (`hymn_1`, `hymn_2`, `hymn_3`, `hymn_nacht`, `hymn_kl`), danach die lateinischen (`hymn_*_lat`).
- Nummer = Hymnen-ID wie in den Daten (`3142.1` = Variante 1 von Hymnus 3142); Titel = Feld `title`/`title_lat`, sonst erste Zeile des Textes.
- Erste Vesper und Vesper sind zusammengefasst; „1. Vesper“ in Klammern nur als Herkunftshinweis.
- **Kleine Horen** = Terz, Sext und Non mit denselben Hymnen.
- *KlStB* = abweichender Hymnus des Kleinen Stundenbuchs (`hymn_kl`); *in der Nacht* = `hymn_nacht` (Lesehore); beides nur im Jahreskreis.
- *Wo. I, III* = nur in diesen Wochen des Vierwochenpsalters (gerade Wochen = Schicht `even`); ohne Angabe = in allen vier Wochen.
- In den geprägten Zeiten: Tagesangabe (z. B. *Sonntage*), wenn der Hymnus nicht an allen Wochentagen gilt; weitere Angaben = Sonderschichten (z. B. *ab 17. Dez.*).
- *zur Wahl* = zusätzliche Hymnen für die Kleinen Horen ohne eigene Zuordnung in den Daten, ganzjährig (Angabe des Fachexperten).
- *auch: Gruppe* (Teile C und E) = der Hymnus kommt auch in dieser Gruppe vor.

---

# Teil A – Nach Wochentagen und Kirchenjahreszeiten

*Nur Lesehore, Laudes und Vesper. Terz, Sext, Non und Komplet stehen zusammengefasst in Teil B (B3–B5, B7).*

## A1 Im Jahreskreis – nach Wochentagen

### Sonntag

- **Lesehore:**
  - 2110 Das ist dein Tag, Herr Jesus Christ *(Wo. I, III)*
  - 3411 Heil dem Tage, der unsre Tage krönt *(Wo. II, IV)*
  - 4102 Dies ætásque céteris *(Wo. I, III)*
  - 4102.1 Primo diérum ómnium *(in der Nacht; Wo. I, III)*
  - 4202 Salve dies, diérum glória *(Wo. II, IV)*
  - 4202.1 Médiæ noctis tempus est *(in der Nacht; Wo. II, IV)*
- **Laudes:**
  - 2210 O ew’ger Schöpfer aller Welt *(Wo. I, III)*
  - 2220 Seht, wie die Schatten dunkler Nacht verblassen *(Wo. II, IV)*
  - 1307 Ewiger Gott, aus dem Nichts *(KlStB; Wo. III)*
  - 2110 Das ist dein Tag, Herr Jesus Christ *(KlStB; Wo. IV)*
  - 4103 Ætérne rerum cónditor *(Wo. I, III)*
  - 4203 Ecce iam noctis tenuátur umbra *(Wo. II, IV)*
- **Vesper:**
  - 2406 O Gott, dein Wille schuf die Welt *(1. Vesper; Wo. I, III)*
  - 2410 Des Lichtes guter Schöpfer du *(Wo. I, III)*
  - 2416 Allmächt’ger Schöpfer, Herr und Gott *(1. Vesper; Wo. II, IV)*
  - 2420 Dreifaltigkeit, dreiein’ger Gott *(Wo. II, IV)*
  - 2903 Der Glanz verfällt, die Zeit flieht hin *(1. Vesper; KlStB; Wo. III)*
  - 1151 Herr Jesus Christus, du gingst heim zum Vater *(KlStB; Wo. III)*
  - 3994 Christus, du Herrscher Himmels und der Erde *(1. Vesper; KlStB; Wo. IV)*
  - 1304 Das erfragte ich unter den Menschen *(KlStB; Wo. IV)*
  - 4100 Deus, creátor ómnium *(1. Vesper; Wo. I, III)*
  - 4105 Lucis creátor óptime *(Wo. I, III)*
  - 4200 Rerum, Deus, fons ómnium *(1. Vesper; Wo. II, IV)*
  - 4205 O lux, beáta Trínitas *(Wo. II, IV)*

### Montag

- **Lesehore:**
  - 2111 Göttliches Wort, der Gottheit Schrein
  - 2114 Du Gott des Lichts, dem Vater gleich *(in der Nacht)*
  - 4112 Ætérna lux, divínitas *(Wo. I, III)*
  - 4112.1 Somno reféctis ártubus *(in der Nacht; Wo. I, III)*
  - 4212 Vita sanctórum, via, spes salúsque *(Wo. II, IV)*
  - 4212.1 Ipsum nunc nobis tempus est *(in der Nacht; Wo. II, IV)*
- **Laudes:**
  - 2211 Du Abglanz von des Vaters Pracht
  - 1110 Geist, der das Leben weckt *(KlStB; Wo. II)*
  - 1310 Christus – mächtiger Gott! *(KlStB; Wo. III)*
  - 1303 Dich Gott Vater, ohne Ursprung und End’ *(KlStB; Wo. IV)*
  - 4113 Splendor patérnæ glóriæ *(Wo. I, III)*
  - 4213 Lucis largítor spléndide *(Wo. II, IV)*
- **Vesper:**
  - 2411 Des Himmels Schöpfer, großer Gott *(Wo. I, III)*
  - 2421 Angelangt an der Schwelle des Abends *(Wo. II, IV)*
  - 1304 Das erfragte ich unter den Menschen *(KlStB; Wo. III)*
  - 2502 Hinunter ist der Sonne Schein *(KlStB; Wo. IV)*
  - 4115 Imménse cæli cónditor *(Wo. I, III)*
  - 4215 Lúminis fons, lux et orígo lucis *(Wo. II, IV)*

### Dienstag

- **Lesehore:**
  - 2112 Wort Gottes, dessen Macht und Ruf
  - 3212 Erwacht und singt in der Nacht *(in der Nacht)*
  - 4122 O sacrosáncta Trínitas *(Wo. I, III)*
  - 4122.1 Consors patérni lúminis *(in der Nacht; Wo. I, III)*
  - 4222 Ad preces nostras deitátis aures *(Wo. II, IV)*
  - 4222.1 Nocte surgéntes vigilémus omnes *(in der Nacht; Wo. II, IV)*
- **Laudes:**
  - 2212 Schon zieht herauf des Tages Licht
  - 2111 Göttliches Wort, der Gottheit Schrein *(KlStB; Wo. II)*
  - 3902 Erhabene Dreifaltigkeit *(KlStB; Wo. III)*
  - 3904 Dreifaltiger verborgner Gott *(KlStB; Wo. IV)*
  - 4123 Pergráta mundo núntiat *(Wo. I, III)*
  - 4223 Ætérne lucis cónditor *(Wo. II, IV)*
- **Vesper:**
  - 2412 Der Erde Schöpfer und ihr Herr *(Wo. I, III)*
  - 2422 O Gott, aus deinem klaren Licht *(Wo. II, IV)*
  - 2501 Wir haben die Last des Tages getragen *(KlStB; Wo. III)*
  - 1306 Ewiger, gütiger Gott *(KlStB; Wo. IV)*
  - 4125 Tellúris ingens cónditor *(Wo. I, III)*
  - 4225 Sator princépsque témporum *(Wo. II, IV)*

### Mittwoch

- **Lesehore:**
  - 2113 Du Wort, das der Vater spricht
  - 3112 Erwartet den Herrn *(in der Nacht)*
  - 4132 Scientiárum Dómino *(Wo. I, III)*
  - 4132.1 Rerum creátor óptime *(in der Nacht; Wo. I, III)*
  - 4232 Christe, lux vera, bónitas et vita *(Wo. II, IV)*
  - 4232.1 O sator rerum, reparátor ævi *(in der Nacht; Wo. II, IV)*
- **Laudes:**
  - 2213 Nacht und Gewölk und Finsternis
  - 2112 Wort Gottes, dessen Macht und Ruf *(KlStB; Wo. II)*
  - 3444 Komm, Heil’ger Geist, der Leben schafft *(KlStB; Wo. III)*
  - 2114 Du Gott des Lichts, dem Vater gleich *(KlStB; Wo. IV)*
  - 4133 Nox et tenébr>æ et núbila *(Wo. I, III)*
  - 4233 Fulgéntis auctor ǽtheris *(Wo. II, IV)*
- **Vesper:**
  - 2413 Du Gott des Himmels, heil’ger Herr *(Wo. I, III)*
  - 2423 Guter König und Herr *(Wo. II, IV)*
  - 1302 Dir ziemt das Lob *(KlStB; Wo. III)*
  - 1305 Dich, hoher Schöpfer *(KlStB; Wo. IV)*
  - 4135 Cæli Deus sanctíssime *(Wo. I, III)*
  - 4235 Sol, ecce, lentus óccidens *(Wo. II, IV)*

### Donnerstag

- **Lesehore:**
  - 2111 Göttliches Wort, der Gottheit Schrein
  - 2114 Du Gott des Lichts, dem Vater gleich *(in der Nacht)*
  - 4142 Christe, precámur ádnuas *(Wo. I, III)*
  - 4142.1 Nox atra rerum cóntegit *(in der Nacht; Wo. I, III)*
  - 4242 Amóris sensus érige *(Wo. II, IV)*
  - 4242.1 Ales diéi núntius *(in der Nacht; Wo. II, IV)*
- **Laudes:**
  - 2214 Seht, golden steigt das Licht empor
  - 3112 Erwartet den Herrn *(KlStB; Wo. II)*
  - 1311 Öffne meine Augen, Herr *(KlStB; Wo. III)*
  - 3942 Das Wort des Vaters, Gottes Sohn *(KlStB; Wo. IV)*
  - 4143 Sol ecce surgit ígneus *(Wo. I, III)*
  - 4243 Iam lucis orto sídere *(Wo. II, IV)*
- **Vesper:**
  - 2414 O Gott, in deiner großen Macht *(Wo. I, III)*
  - 2424 Heiteres Licht vom herrlichen Glanze *(Wo. II, IV)*
  - 1301 Dir gebührt unser Lob *(KlStB; Wo. III)*
  - 1306 Ewiger, gütiger Gott *(KlStB; Wo. IV)*
  - 4145 Magnæ Deus poténtiæ *(Wo. I, III)*
  - 4245 Deus, qui claro lúmine *(Wo. II, IV)*

### Freitag

- **Lesehore:**
  - 2112 Wort Gottes, dessen Macht und Ruf
  - 3212 Erwacht und singt in der Nacht *(in der Nacht)*
  - 4152 Adésto, Christe, córdibus *(Wo. I, III)*
  - 4152.1 Tu, Trinitátis Unitas *(in der Nacht; Wo. I, III)*
  - 4252 Adésto, rerum cónditor *(Wo. II, IV)*
  - 4252.1 Galli cantu mediánte *(in der Nacht; Wo. II, IV)*
- **Laudes:**
  - 2215 Du Licht des Himmels, großer Gott
  - 2113 Du Wort, das der Vater spricht *(KlStB; Wo. II)*
  - 1312 Herr, du hast die Welt gestaltet *(KlStB; Wo. III)*
  - 3954 O sel’ger Urgrund allen Seins *(KlStB; Wo. IV)*
  - 4153 Ætérna cæli glória *(Wo. I, III)*
  - 4253 Deus, qui cæli lumen es *(Wo. II, IV)*
- **Vesper:**
  - 2415 Des Menschen Bildner, Gott und Herr *(Wo. I, III)*
  - 2425 Christus, du bist der helle Tag *(Wo. II, IV)*
  - 3991 Ehre sei dir, Christe, der du littest Not *(KlStB; Wo. III)*
  - 3952 Der höchsten Gottheit ew’ges Bild *(KlStB; Wo. IV)*
  - 4155 Plasmátor hóminis, Deus *(Wo. I, III)*
  - 4255 Horis peráctis úndecim *(Wo. II, IV)*

### Samstag

- **Lesehore:**
  - 2113 Du Wort, das der Vater spricht
  - 3112 Erwartet den Herrn *(in der Nacht)*
  - 4162 Auctor perénnis glóriæ *(Wo. I, III)*
  - 4162.1 Summæ Deus cleméntiæ *(in der Nacht; Wo. I, III)*
  - 4262 Deus de nullo véniens *(Wo. II, IV)*
  - 4262.1 Lux ætérna, lumen potens *(in der Nacht; Wo. II, IV)*
- **Laudes:**
  - 2216 Die Nacht ist vergangen
  - 1027 Sei gegrüßt, die den König gebar *(KlStB; Wo. II)*
  - 1043 Meerstern, sei gegrüßet *(KlStB; Wo. III)*
  - 1026 Den Erde, Meer und Firmament *(KlStB; Wo. IV)*
  - 4163 Auróra iam spargit polum *(Wo. I, III)*
  - 4263 Diéi luce réddita *(Wo. II, IV)*

### Sonderfälle im Jahreskreis

*Schichten:* `j-34-0` = Christkönigssonntag, `j-34-each` = 34. Woche im Jahreskreis

- **Lesehore:**
  - 3991 Ehre sei dir, Christe, der du littest Not *(Christkönigssonntag)*
  - 3991.1 Iesu, rex admirábilis *(Christkönigssonntag)*
  - 9131.1 Dies iræ, dies illa *(34. Woche im Jahreskreis)*
- **Laudes:**
  - 3952 Der höchsten Gottheit ew’ges Bild *(Christkönigssonntag)*
  - 3992.1 Ætérn>a imág>o Altíssimi *(Christkönigssonntag)*
  - 9131.2 Quid sum miser tunc dictúrus *(34. Woche im Jahreskreis)*
- **Vesper:**
  - 3994 Christus, du Herrscher Himmels und der Erde *(Christkönigssonntag)*
  - 3994.1 Te sæculórum príncipem *(Christkönigssonntag)*
  - 9131.4 Peccatrícem qui solvísti *(34. Woche im Jahreskreis)*

## A2 Advent

*Schichten:* `a-each-each`, `a-each-<Tag>`, `a-last-each` = ab 17. Dez.

- **Lesehore:**
  - 3111 Du, dessen Rechte alle Reiche einzig leitet
  - 3112 Erwartet den Herrn
  - 3113 Verbum supérnum pródiens
  - 3114 Veni, redémptor géntium *(ab 17. Dez.)*
- **Laudes:**
  - 3121 Hört, eine helle Stimme ruft
  - 3123 Vox clara ecce íntonat
  - 3124 Magnis prophétæ vócibus *(ab 17. Dez.)*
- **Vesper:**
  - 3141 Gott, heil’ger Schöpfer aller Stern’
  - 3142 Du Heiland aller Völker, komm
  - 3142.1 Du Heiland aller Völker, komm *(ab 17. Dez.)*
  - 3143 Cónditor alme síderum
  - 4100 Deus, creátor ómnium *(Wo. I, III)*
  - 4200 Rerum, Deus, fons ómnium *(Wo. II, IV)*
  - 3144 Verbum salútis ómnium *(ab 17. Dez.)*

## A3 Weihnachtszeit

*Schichten:* `w-each-each`, `w-each-<Tag>`, `w-okt-each` = Weihnachtsoktav, `w-last-each` = nach Erscheinung, `kso-1-0` = Hl. Familie, `xj-1-0` = Taufe des Herrn, `j-1-0` = Taufe des Herrn

- **Lesehore:**
  - 3211 Sei uns willkommen, Herre Christ
  - 3212 Erwacht und singt in der Nacht
  - 3214 Seht, am Himmel erglänzt *(nach Erscheinung)*
  - 3219 Jordan, sing! Schwing deine Wasser *(Taufe des Herrn)*
  - 3211.1 Candor ætérnæ Deitátis alme
  - 3211.3 Magi vidéntes párvulum *(nach Erscheinung)*
  - 3211.2 Dulce fit nobis memoráre parvum *(Hl. Familie)*
  - 3219.1 Implénte munus débitum *(Taufe des Herrn)*
- **Laudes:**
  - 3221 Vom hellen Tor der Sonnenbahn
  - 3224 Ihr alle, die ihr Christus sucht *(nach Erscheinung)*
  - 3229 Des Vaters eingeborner Sohn *(Taufe des Herrn)*
  - 3221.1 A solis ortus cárdine
  - 3221.3 Quicúmque Christum quǽritis *(nach Erscheinung)*
  - 3221.2 Christe, splendor Patris *(Hl. Familie)*
  - 3229.1 Iesus refúlsit ómnium *(Taufe des Herrn)*
- **Vesper:**
  - 3241 Christus, Erlöser aller Welt
  - 3244 Die Weisen schauen auf zum Stern *(nach Erscheinung)*
  - 3229 Des Vaters eingeborner Sohn *(Taufe des Herrn)*
  - 3241.1 Christe, redémptor ómnium
  - 3221.3 Quicúmque Christum quǽritis *(nach Erscheinung)*
  - 3241.3 Hostis Heródes ímpie *(nach Erscheinung)*
  - 3241.2 O lux beáta cǽlitum *(Hl. Familie)*
  - 3249.1 A Patre Unigénite *(Taufe des Herrn)*
  - 3219.1 Implénte munus débitum *(Taufe des Herrn)*

## A4 Fastenzeit

*Schichten:* `q-each-each`, `q-each-<Tag>`, `q-5-each` = 5. Fastenwoche, `q-6-each` = Karwoche, `q-6-0` = Palmsonntag, `q-6-4` = Gründonnerstag, `q-6-5` = Karfreitag, `q-6-6` = Karsamstag

- **Lesehore:**
  - 3311 Nun ruft ein heil’ges Fasten aus
  - 3312 Hört die Mahnung der Schrift
  - 3313 Preise, Zunge, und verkünde *(5. Fastenwoche; Karwoche)*
  - 3311.2 Ex more docti mýstico *(Sonntage)*
  - 3311.1 Nunc tempus acceptábile *(Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag)*
  - 3313.1 Pange, lingua, gloriósi prœ́lium certáminis *(5. Fastenwoche; Karwoche)*
  - 3361.1 Christe, cælórum Dómine *(Karsamstag)*
- **Laudes:**
  - 3321 Du Sonne der Gerechtigkeit
  - 3323 Heilig Kreuz, du Baum der Treue *(5. Fastenwoche; Karwoche)*
  - 3321.2 Precémur omnes cérnui *(Sonntage)*
  - 3321.1 Iam, Christe, sol iustítiæ *(Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag)*
  - 3323.1 En acétum, fel, arúndo *(5. Fastenwoche; Karwoche)*
  - 3362.1 Tibi, Redémptor ómnium *(Karsamstag)*
- **Vesper:**
  - 3341 Nun ist sie da, die rechte Zeit
  - 3342 Vernimm, du guter Schöpfergott
  - 3343 Der König siegt, sein Banner glänzt *(5. Fastenwoche; Karwoche; Palmsonntag)*
  - 3344 Denkmal, das uns mahnet an des Herren Tod! *(Gründonnerstag)*
  - 3341.2 Audi, benígne Cónditor
  - 3341.1 Iesu, quadragenáriæ *(Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag)*
  - 3343.1 Vexílla regis pródeunt *(5. Fastenwoche; Karwoche)*
  - 3344.1 O memoriále mortis Dómini *(Gründonnerstag)*
  - 3364.1 Auctor salútis únice *(Karsamstag)*

## A5 Osterzeit

*Schichten:* `o-each-each`, `o-each-<Tag>`, `o-1-each` = Osteroktav, `xo-6-4` = Christi Himmelfahrt, `o-last-each` = nach Himmelfahrt, `o-8-0` = Pfingsten

- **Lesehore:**
  - 3411 Heil dem Tage, der unsre Tage krönt
  - 3412 Wahrhaft, dies ist der Tag des Herrn
  - 3413 Dies ist der klare Tag
  - 3414 Großer, heiliger Tag *(Christi Himmelfahrt; nach Himmelfahrt)*
  - 3418 Der Herr, zur Höhe heimgekehrt *(Pfingsten)*
  - 3442.1 Lætáre, cælum, désuper
  - 3412.1 Hic est dies verus Dei *(Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag; Osteroktav)*
  - 3414.1 Ætérne rex altíssime *(nach Himmelfahrt)*
  - 3418.1 Lux iucúnda, lux insígnis *(Pfingsten)*
- **Laudes:**
  - 3421 Der Morgen rötet sich und glüht
  - 3422 Jerusalem, du neue Stadt
  - 3424 Du höchster Herr der Ewigkeit *(Christi Himmelfahrt; nach Himmelfahrt)*
  - 3428 Und wieder führt das Jahr herauf *(Pfingsten)*
  - 3422.1 Chorus novæ Ierúsalem
  - 3421.1 Auróra lucis rútilat *(Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag; Osteroktav)*
  - 3424.1 Optátus votis ómnium *(nach Himmelfahrt)*
  - 3428.1 Beáta nobis gáudia *(Pfingsten)*
- **Vesper:**
  - 3441 Zum Mahl des Lammes schreiten wir
  - 3442 Du Himmel droben, freue dich
  - 2904 Jesus, du Quelle unsres Heils *(Christi Himmelfahrt)*
  - 3444 Komm, Heil’ger Geist, der Leben schafft *(nach Himmelfahrt; Pfingsten)*
  - 3448 Komm herab, o Heil’ger Geist *(Pfingsten)*
  - 3449 Nun bitten wir den Heiligen Geist *(Pfingsten)*
  - 3443.1 O Rex ætérne, Dómine
  - 3441.1 Ad cenam Agni próvidi *(1. Vesper; Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag; Osteroktav)*
  - 2904.1 Iesu, nostra redémptio *(Christi Himmelfahrt)*
  - 3444.1 Veni, creátor Spíritus *(nach Himmelfahrt; Pfingsten)*

---

# Teil B – Nach Horen

## B1 Lesehore

- **Sonntag:**
  - 2110 Das ist dein Tag, Herr Jesus Christ *(Wo. I, III)*
  - 3411 Heil dem Tage, der unsre Tage krönt *(Wo. II, IV)*
  - 4102 Dies ætásque céteris *(Wo. I, III)*
  - 4102.1 Primo diérum ómnium *(in der Nacht; Wo. I, III)*
  - 4202 Salve dies, diérum glória *(Wo. II, IV)*
  - 4202.1 Médiæ noctis tempus est *(in der Nacht; Wo. II, IV)*
- **Montag:**
  - 2111 Göttliches Wort, der Gottheit Schrein
  - 2114 Du Gott des Lichts, dem Vater gleich *(in der Nacht)*
  - 4112 Ætérna lux, divínitas *(Wo. I, III)*
  - 4112.1 Somno reféctis ártubus *(in der Nacht; Wo. I, III)*
  - 4212 Vita sanctórum, via, spes salúsque *(Wo. II, IV)*
  - 4212.1 Ipsum nunc nobis tempus est *(in der Nacht; Wo. II, IV)*
- **Dienstag:**
  - 2112 Wort Gottes, dessen Macht und Ruf
  - 3212 Erwacht und singt in der Nacht *(in der Nacht)*
  - 4122 O sacrosáncta Trínitas *(Wo. I, III)*
  - 4122.1 Consors patérni lúminis *(in der Nacht; Wo. I, III)*
  - 4222 Ad preces nostras deitátis aures *(Wo. II, IV)*
  - 4222.1 Nocte surgéntes vigilémus omnes *(in der Nacht; Wo. II, IV)*
- **Mittwoch:**
  - 2113 Du Wort, das der Vater spricht
  - 3112 Erwartet den Herrn *(in der Nacht)*
  - 4132 Scientiárum Dómino *(Wo. I, III)*
  - 4132.1 Rerum creátor óptime *(in der Nacht; Wo. I, III)*
  - 4232 Christe, lux vera, bónitas et vita *(Wo. II, IV)*
  - 4232.1 O sator rerum, reparátor ævi *(in der Nacht; Wo. II, IV)*
- **Donnerstag:**
  - 2111 Göttliches Wort, der Gottheit Schrein
  - 2114 Du Gott des Lichts, dem Vater gleich *(in der Nacht)*
  - 4142 Christe, precámur ádnuas *(Wo. I, III)*
  - 4142.1 Nox atra rerum cóntegit *(in der Nacht; Wo. I, III)*
  - 4242 Amóris sensus érige *(Wo. II, IV)*
  - 4242.1 Ales diéi núntius *(in der Nacht; Wo. II, IV)*
- **Freitag:**
  - 2112 Wort Gottes, dessen Macht und Ruf
  - 3212 Erwacht und singt in der Nacht *(in der Nacht)*
  - 4152 Adésto, Christe, córdibus *(Wo. I, III)*
  - 4152.1 Tu, Trinitátis Unitas *(in der Nacht; Wo. I, III)*
  - 4252 Adésto, rerum cónditor *(Wo. II, IV)*
  - 4252.1 Galli cantu mediánte *(in der Nacht; Wo. II, IV)*
- **Samstag:**
  - 2113 Du Wort, das der Vater spricht
  - 3112 Erwartet den Herrn *(in der Nacht)*
  - 4162 Auctor perénnis glóriæ *(Wo. I, III)*
  - 4162.1 Summæ Deus cleméntiæ *(in der Nacht; Wo. I, III)*
  - 4262 Deus de nullo véniens *(Wo. II, IV)*
  - 4262.1 Lux ætérna, lumen potens *(in der Nacht; Wo. II, IV)*
- **Sonderfälle im Jahreskreis:**
  - 3991 Ehre sei dir, Christe, der du littest Not *(Christkönigssonntag)*
  - 3991.1 Iesu, rex admirábilis *(Christkönigssonntag)*
  - 9131.1 Dies iræ, dies illa *(34. Woche im Jahreskreis)*
- **Advent:**
  - 3111 Du, dessen Rechte alle Reiche einzig leitet
  - 3112 Erwartet den Herrn
  - 3113 Verbum supérnum pródiens
  - 3114 Veni, redémptor géntium *(ab 17. Dez.)*
- **Weihnachtszeit:**
  - 3211 Sei uns willkommen, Herre Christ
  - 3212 Erwacht und singt in der Nacht
  - 3214 Seht, am Himmel erglänzt *(nach Erscheinung)*
  - 3219 Jordan, sing! Schwing deine Wasser *(Taufe des Herrn)*
  - 3211.1 Candor ætérnæ Deitátis alme
  - 3211.3 Magi vidéntes párvulum *(nach Erscheinung)*
  - 3211.2 Dulce fit nobis memoráre parvum *(Hl. Familie)*
  - 3219.1 Implénte munus débitum *(Taufe des Herrn)*
- **Fastenzeit:**
  - 3311 Nun ruft ein heil’ges Fasten aus
  - 3312 Hört die Mahnung der Schrift
  - 3313 Preise, Zunge, und verkünde *(5. Fastenwoche; Karwoche)*
  - 3311.2 Ex more docti mýstico *(Sonntage)*
  - 3311.1 Nunc tempus acceptábile *(Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag)*
  - 3313.1 Pange, lingua, gloriósi prœ́lium certáminis *(5. Fastenwoche; Karwoche)*
  - 3361.1 Christe, cælórum Dómine *(Karsamstag)*
- **Osterzeit:**
  - 3411 Heil dem Tage, der unsre Tage krönt
  - 3412 Wahrhaft, dies ist der Tag des Herrn
  - 3413 Dies ist der klare Tag
  - 3414 Großer, heiliger Tag *(Christi Himmelfahrt; nach Himmelfahrt)*
  - 3418 Der Herr, zur Höhe heimgekehrt *(Pfingsten)*
  - 3442.1 Lætáre, cælum, désuper
  - 3412.1 Hic est dies verus Dei *(Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag; Osteroktav)*
  - 3414.1 Ætérne rex altíssime *(nach Himmelfahrt)*
  - 3418.1 Lux iucúnda, lux insígnis *(Pfingsten)*

## B2 Laudes

- **Sonntag:**
  - 2210 O ew’ger Schöpfer aller Welt *(Wo. I, III)*
  - 2220 Seht, wie die Schatten dunkler Nacht verblassen *(Wo. II, IV)*
  - 1307 Ewiger Gott, aus dem Nichts *(KlStB; Wo. III)*
  - 2110 Das ist dein Tag, Herr Jesus Christ *(KlStB; Wo. IV)*
  - 4103 Ætérne rerum cónditor *(Wo. I, III)*
  - 4203 Ecce iam noctis tenuátur umbra *(Wo. II, IV)*
- **Montag:**
  - 2211 Du Abglanz von des Vaters Pracht
  - 1110 Geist, der das Leben weckt *(KlStB; Wo. II)*
  - 1310 Christus – mächtiger Gott! *(KlStB; Wo. III)*
  - 1303 Dich Gott Vater, ohne Ursprung und End’ *(KlStB; Wo. IV)*
  - 4113 Splendor patérnæ glóriæ *(Wo. I, III)*
  - 4213 Lucis largítor spléndide *(Wo. II, IV)*
- **Dienstag:**
  - 2212 Schon zieht herauf des Tages Licht
  - 2111 Göttliches Wort, der Gottheit Schrein *(KlStB; Wo. II)*
  - 3902 Erhabene Dreifaltigkeit *(KlStB; Wo. III)*
  - 3904 Dreifaltiger verborgner Gott *(KlStB; Wo. IV)*
  - 4123 Pergráta mundo núntiat *(Wo. I, III)*
  - 4223 Ætérne lucis cónditor *(Wo. II, IV)*
- **Mittwoch:**
  - 2213 Nacht und Gewölk und Finsternis
  - 2112 Wort Gottes, dessen Macht und Ruf *(KlStB; Wo. II)*
  - 3444 Komm, Heil’ger Geist, der Leben schafft *(KlStB; Wo. III)*
  - 2114 Du Gott des Lichts, dem Vater gleich *(KlStB; Wo. IV)*
  - 4133 Nox et tenébr>æ et núbila *(Wo. I, III)*
  - 4233 Fulgéntis auctor ǽtheris *(Wo. II, IV)*
- **Donnerstag:**
  - 2214 Seht, golden steigt das Licht empor
  - 3112 Erwartet den Herrn *(KlStB; Wo. II)*
  - 1311 Öffne meine Augen, Herr *(KlStB; Wo. III)*
  - 3942 Das Wort des Vaters, Gottes Sohn *(KlStB; Wo. IV)*
  - 4143 Sol ecce surgit ígneus *(Wo. I, III)*
  - 4243 Iam lucis orto sídere *(Wo. II, IV)*
- **Freitag:**
  - 2215 Du Licht des Himmels, großer Gott
  - 2113 Du Wort, das der Vater spricht *(KlStB; Wo. II)*
  - 1312 Herr, du hast die Welt gestaltet *(KlStB; Wo. III)*
  - 3954 O sel’ger Urgrund allen Seins *(KlStB; Wo. IV)*
  - 4153 Ætérna cæli glória *(Wo. I, III)*
  - 4253 Deus, qui cæli lumen es *(Wo. II, IV)*
- **Samstag:**
  - 2216 Die Nacht ist vergangen
  - 1027 Sei gegrüßt, die den König gebar *(KlStB; Wo. II)*
  - 1043 Meerstern, sei gegrüßet *(KlStB; Wo. III)*
  - 1026 Den Erde, Meer und Firmament *(KlStB; Wo. IV)*
  - 4163 Auróra iam spargit polum *(Wo. I, III)*
  - 4263 Diéi luce réddita *(Wo. II, IV)*
- **Sonderfälle im Jahreskreis:**
  - 3952 Der höchsten Gottheit ew’ges Bild *(Christkönigssonntag)*
  - 3992.1 Ætérn>a imág>o Altíssimi *(Christkönigssonntag)*
  - 9131.2 Quid sum miser tunc dictúrus *(34. Woche im Jahreskreis)*
- **Advent:**
  - 3121 Hört, eine helle Stimme ruft
  - 3123 Vox clara ecce íntonat
  - 3124 Magnis prophétæ vócibus *(ab 17. Dez.)*
- **Weihnachtszeit:**
  - 3221 Vom hellen Tor der Sonnenbahn
  - 3224 Ihr alle, die ihr Christus sucht *(nach Erscheinung)*
  - 3229 Des Vaters eingeborner Sohn *(Taufe des Herrn)*
  - 3221.1 A solis ortus cárdine
  - 3221.3 Quicúmque Christum quǽritis *(nach Erscheinung)*
  - 3221.2 Christe, splendor Patris *(Hl. Familie)*
  - 3229.1 Iesus refúlsit ómnium *(Taufe des Herrn)*
- **Fastenzeit:**
  - 3321 Du Sonne der Gerechtigkeit
  - 3323 Heilig Kreuz, du Baum der Treue *(5. Fastenwoche; Karwoche)*
  - 3321.2 Precémur omnes cérnui *(Sonntage)*
  - 3321.1 Iam, Christe, sol iustítiæ *(Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag)*
  - 3323.1 En acétum, fel, arúndo *(5. Fastenwoche; Karwoche)*
  - 3362.1 Tibi, Redémptor ómnium *(Karsamstag)*
- **Osterzeit:**
  - 3421 Der Morgen rötet sich und glüht
  - 3422 Jerusalem, du neue Stadt
  - 3424 Du höchster Herr der Ewigkeit *(Christi Himmelfahrt; nach Himmelfahrt)*
  - 3428 Und wieder führt das Jahr herauf *(Pfingsten)*
  - 3422.1 Chorus novæ Ierúsalem
  - 3421.1 Auróra lucis rútilat *(Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag; Osteroktav)*
  - 3424.1 Optátus votis ómnium *(nach Himmelfahrt)*
  - 3428.1 Beáta nobis gáudia *(Pfingsten)*

## B3 Terz

- 2300 Komm, Heil’ger Geist vom ew’gen Thron
- 2303 Die Stunde steigt und ruft zum Werk *(Jahreskreis)*
- 2302 Schon schreitet rasch der Tag voran *(zur Wahl)*
- 2304 Geist des Vaters und des Sohnes Jesus Christ *(zur Wahl)*
- 2301 O Geist, vom Vater ausgesandt *(geprägte Zeiten)*
- 3418 Der Herr, zur Höhe heimgekehrt *(Pfingsten)*
- 4003.1 Nunc, Sancte, nobis, Spíritus *(Jahreskreis, Advent, Weihnachtszeit)*
- 4003.2 Certum tenéntes órdinem *(Jahreskreis, Advent; Weihnachtszeit nach Erscheinung; Taufe des Herrn)*
- 4003.3 Dei fide, qua vívimus *(Fastenzeit)*
- 4003.6 Iam surgit hora tértia *(Osterzeit)*
- 4003.4 Celsæ salútis gáudia *(Palmsonntag)*
- 4003.5 Salva, Redémptor, plasma tuum nóbile *(Karfreitag; Karsamstag)*
- 3438.1 Iam Christus astr>a ascénderat *(Pfingsten)*

## B4 Sext

- 2600 O Gott, du lenkst mit starker Hand
- 2603 Die Glut des Mittags treibt uns um *(Jahreskreis)*
- 2602 Der Tag strebt seiner Höhe zu *(zur Wahl)*
- 2604 Wo lagerst du mit deiner Herde *(zur Wahl)*
- 2601 Du starker Lenker, treuer Gott *(geprägte Zeiten)*
- 4006.1 Rector potens, verax Deus *(Jahreskreis, Advent, Weihnachtszeit)*
- 4006.2 Dicámus laudes Dómino *(Jahreskreis, Advent; Weihnachtszeit nach Erscheinung; Taufe des Herrn)*
- 4006.3 Qua Christus hora sítiit *(Fastenzeit)*
- 4006.6 Veníte, servi, súpplices *(Osterzeit)*
- 4003.4 Celsæ salútis gáudia *(Palmsonntag)*
- 4006.5 Crux, mundi benedíctio *(Karfreitag; Karsamstag)*

## B5 Non

- 2900 Du starker Gott, der diese Welt
- 2903 Der Glanz verfällt, die Zeit flieht hin *(Jahreskreis)*
- 2902 Der Tag neigt sich dem Abend zu *(zur Wahl)*
- 2904 Jesus, du Quelle unsres Heils *(zur Wahl)*
- 2901 Schon neigt der Tag dem Abend zu *(geprägte Zeiten)*
- 4009.1 Rerum, Deus, tenax vigor *(Jahreskreis, Advent, Weihnachtszeit)*
- 4009.2 Ternis horárum términis *(Jahreskreis, Advent; Weihnachtszeit nach Erscheinung; Taufe des Herrn)*
- 4009.3 Ternis ter horis númerus *(Fastenzeit)*
- 4009.6 Hæc hora, quæ resplénduit *(Osterzeit)*
- 4003.4 Celsæ salútis gáudia *(Palmsonntag)*
- 4009.5 Per crucem, Christe, quǽsumus *(Karfreitag; Karsamstag)*

## B6 Vesper

- **Sonntag:**
  - 2406 O Gott, dein Wille schuf die Welt *(1. Vesper; Wo. I, III)*
  - 2410 Des Lichtes guter Schöpfer du *(Wo. I, III)*
  - 2416 Allmächt’ger Schöpfer, Herr und Gott *(1. Vesper; Wo. II, IV)*
  - 2420 Dreifaltigkeit, dreiein’ger Gott *(Wo. II, IV)*
  - 2903 Der Glanz verfällt, die Zeit flieht hin *(1. Vesper; KlStB; Wo. III)*
  - 1151 Herr Jesus Christus, du gingst heim zum Vater *(KlStB; Wo. III)*
  - 3994 Christus, du Herrscher Himmels und der Erde *(1. Vesper; KlStB; Wo. IV)*
  - 1304 Das erfragte ich unter den Menschen *(KlStB; Wo. IV)*
  - 4100 Deus, creátor ómnium *(1. Vesper; Wo. I, III)*
  - 4105 Lucis creátor óptime *(Wo. I, III)*
  - 4200 Rerum, Deus, fons ómnium *(1. Vesper; Wo. II, IV)*
  - 4205 O lux, beáta Trínitas *(Wo. II, IV)*
- **Montag:**
  - 2411 Des Himmels Schöpfer, großer Gott *(Wo. I, III)*
  - 2421 Angelangt an der Schwelle des Abends *(Wo. II, IV)*
  - 1304 Das erfragte ich unter den Menschen *(KlStB; Wo. III)*
  - 2502 Hinunter ist der Sonne Schein *(KlStB; Wo. IV)*
  - 4115 Imménse cæli cónditor *(Wo. I, III)*
  - 4215 Lúminis fons, lux et orígo lucis *(Wo. II, IV)*
- **Dienstag:**
  - 2412 Der Erde Schöpfer und ihr Herr *(Wo. I, III)*
  - 2422 O Gott, aus deinem klaren Licht *(Wo. II, IV)*
  - 2501 Wir haben die Last des Tages getragen *(KlStB; Wo. III)*
  - 1306 Ewiger, gütiger Gott *(KlStB; Wo. IV)*
  - 4125 Tellúris ingens cónditor *(Wo. I, III)*
  - 4225 Sator princépsque témporum *(Wo. II, IV)*
- **Mittwoch:**
  - 2413 Du Gott des Himmels, heil’ger Herr *(Wo. I, III)*
  - 2423 Guter König und Herr *(Wo. II, IV)*
  - 1302 Dir ziemt das Lob *(KlStB; Wo. III)*
  - 1305 Dich, hoher Schöpfer *(KlStB; Wo. IV)*
  - 4135 Cæli Deus sanctíssime *(Wo. I, III)*
  - 4235 Sol, ecce, lentus óccidens *(Wo. II, IV)*
- **Donnerstag:**
  - 2414 O Gott, in deiner großen Macht *(Wo. I, III)*
  - 2424 Heiteres Licht vom herrlichen Glanze *(Wo. II, IV)*
  - 1301 Dir gebührt unser Lob *(KlStB; Wo. III)*
  - 1306 Ewiger, gütiger Gott *(KlStB; Wo. IV)*
  - 4145 Magnæ Deus poténtiæ *(Wo. I, III)*
  - 4245 Deus, qui claro lúmine *(Wo. II, IV)*
- **Freitag:**
  - 2415 Des Menschen Bildner, Gott und Herr *(Wo. I, III)*
  - 2425 Christus, du bist der helle Tag *(Wo. II, IV)*
  - 3991 Ehre sei dir, Christe, der du littest Not *(KlStB; Wo. III)*
  - 3952 Der höchsten Gottheit ew’ges Bild *(KlStB; Wo. IV)*
  - 4155 Plasmátor hóminis, Deus *(Wo. I, III)*
  - 4255 Horis peráctis úndecim *(Wo. II, IV)*
- **Samstag:** –
- **Sonderfälle im Jahreskreis:**
  - 3994 Christus, du Herrscher Himmels und der Erde *(Christkönigssonntag)*
  - 3994.1 Te sæculórum príncipem *(Christkönigssonntag)*
  - 9131.4 Peccatrícem qui solvísti *(34. Woche im Jahreskreis)*
- **Advent:**
  - 3141 Gott, heil’ger Schöpfer aller Stern’
  - 3142 Du Heiland aller Völker, komm
  - 3142.1 Du Heiland aller Völker, komm *(ab 17. Dez.)*
  - 3143 Cónditor alme síderum
  - 4100 Deus, creátor ómnium *(Wo. I, III)*
  - 4200 Rerum, Deus, fons ómnium *(Wo. II, IV)*
  - 3144 Verbum salútis ómnium *(ab 17. Dez.)*
- **Weihnachtszeit:**
  - 3241 Christus, Erlöser aller Welt
  - 3244 Die Weisen schauen auf zum Stern *(nach Erscheinung)*
  - 3229 Des Vaters eingeborner Sohn *(Taufe des Herrn)*
  - 3241.1 Christe, redémptor ómnium
  - 3221.3 Quicúmque Christum quǽritis *(nach Erscheinung)*
  - 3241.3 Hostis Heródes ímpie *(nach Erscheinung)*
  - 3241.2 O lux beáta cǽlitum *(Hl. Familie)*
  - 3249.1 A Patre Unigénite *(Taufe des Herrn)*
  - 3219.1 Implénte munus débitum *(Taufe des Herrn)*
- **Fastenzeit:**
  - 3341 Nun ist sie da, die rechte Zeit
  - 3342 Vernimm, du guter Schöpfergott
  - 3343 Der König siegt, sein Banner glänzt *(5. Fastenwoche; Karwoche; Palmsonntag)*
  - 3344 Denkmal, das uns mahnet an des Herren Tod! *(Gründonnerstag)*
  - 3341.2 Audi, benígne Cónditor
  - 3341.1 Iesu, quadragenáriæ *(Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag)*
  - 3343.1 Vexílla regis pródeunt *(5. Fastenwoche; Karwoche)*
  - 3344.1 O memoriále mortis Dómini *(Gründonnerstag)*
  - 3364.1 Auctor salútis únice *(Karsamstag)*
- **Osterzeit:**
  - 3441 Zum Mahl des Lammes schreiten wir
  - 3442 Du Himmel droben, freue dich
  - 2904 Jesus, du Quelle unsres Heils *(Christi Himmelfahrt)*
  - 3444 Komm, Heil’ger Geist, der Leben schafft *(nach Himmelfahrt; Pfingsten)*
  - 3448 Komm herab, o Heil’ger Geist *(Pfingsten)*
  - 3449 Nun bitten wir den Heiligen Geist *(Pfingsten)*
  - 3443.1 O Rex ætérne, Dómine
  - 3441.1 Ad cenam Agni próvidi *(1. Vesper; Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag; Osteroktav)*
  - 2904.1 Iesu, nostra redémptio *(Christi Himmelfahrt)*
  - 3444.1 Veni, creátor Spíritus *(nach Himmelfahrt; Pfingsten)*

## B7 Komplet

- 2500 Bevor des Tages Licht vergeht
- 2510 Gott, dessen Wort die Welt erschuf *(Sonntag)*
- 2511 Nimm gnädig, guter Herr und Gott *(Montag)*
- 2512 Tod und Vergehen waltet in allem *(Dienstag)*
- 2513 Schon wirft die Erde sich zur Nacht *(Mittwoch)*
- 2514 Mitten wir im Leben sind *(Donnerstag)*
- 2515 Du starker Gott, der diese Welt *(Freitag)*
- 2516 Christus, göttlicher Herr *(Samstag)*
- 2500.1 Te lucis ante términum *(Jahreskreis, Advent, Weihnachtszeit, Fastenzeit)*
- 2500.2 Christe, qui, splendor et dies *(Jahreskreis; Advent ab 17. Dez.)*
- 2500.3 Iesu, redémptor sǽculi *(Osterzeit)*

---

# Teil C – Eigenhymnen nach dem Kalender

Einträge in eckigen Klammern [Monat/Tag] sind bewegliche Feiern bzw. Sonderkennungen in `Calendar.ts` (z. B. [1/66] = Erscheinung des Herrn). In Klammern: Hore(n), in denen der Hymnus genommen wird; *auch: Gruppe* = der Hymnus kommt auch in dieser Gruppe vor (also kein reiner Eigenhymnus).

## Allgemeiner Regionalkalender

### 1.1. Hochfest der Gottesmutter Maria

- 1038 Du große Herrin, schönste Frau *(Lesehore; auch: com-Maria-each, com-MariaSa-each)*
- 8101.2 Zur Pforte Christi ward die Magd *(Laudes)*
- 8101.4 Aus des Vaters Herz geboren *(Vesper)*
- 8101.101 Radix Iesse iam flóruit *(Lesehore)*
- 8101.102 Fit porta Christi pérvia *(Laudes)*
- 8101.104 Corde natus ex Paréntis *(Vesper)*

### 21.1. Hl. Agnes

- 8121.1 Igne divíni rádians amóris *(Lesehore)*
- 8121.2 Agnes beátæ vírginis *(Laudes, Vesper)*

### 25.1. Bekehrung des hl. Apostels Paulus

- 8125 Staunend sehen wir deines Lebens Wandlung *(Laudes, Vesper)*
- 8125.1 Pressi malórum póndere *(Lesehore)*
- 8125.2 Doctor egrégie, Paule, mores ínstrue *(Laudes)*
- 8125.4 Excélsam Pauli glóriam *(Vesper)*

### [1/66] Erscheinung des Herrn

- 3214 Seht, am Himmel erglänzt *(Lesehore; auch: Weihnachtszeit)*
- 3224 Ihr alle, die ihr Christus sucht *(Laudes; auch: Weihnachtszeit)*
- 3244 Die Weisen schauen auf zum Stern *(Vesper; auch: Weihnachtszeit)*
- 3211.3 Magi vidéntes párvulum *(Lesehore; auch: Weihnachtszeit)*
- 4003.2 Certum tenéntes órdinem *(Terz; auch: Jahreskreis, Advent, Weihnachtszeit)*
- 4006.2 Dicámus laudes Dómino *(Sext; auch: Jahreskreis, Advent, Weihnachtszeit)*
- 4009.2 Ternis horárum términis *(Non; auch: Jahreskreis, Advent, Weihnachtszeit)*
- 3221.3 Quicúmque Christum quǽritis *(Vesper; auch: Weihnachtszeit)*
- 3241.3 Hostis Heródes ímpie *(Vesper; auch: Weihnachtszeit)*

### [1/67] Taufe des Herrn

- 3219 Jordan, sing! Schwing deine Wasser *(Lesehore; auch: Weihnachtszeit)*
- 3229 Des Vaters eingeborner Sohn *(Laudes, Vesper; auch: Weihnachtszeit)*
- 3219.1 Implénte munus débitum *(Lesehore, Vesper; auch: Weihnachtszeit)*
- 3229.1 Iesus refúlsit ómnium *(Laudes; auch: Weihnachtszeit)*
- 4003.2 Certum tenéntes órdinem *(Terz; auch: Jahreskreis, Advent, Weihnachtszeit)*
- 4006.2 Dicámus laudes Dómino *(Sext; auch: Jahreskreis, Advent, Weihnachtszeit)*
- 4009.2 Ternis horárum términis *(Non; auch: Jahreskreis, Advent, Weihnachtszeit)*
- 3249.1 A Patre Unigénite *(Vesper; auch: Weihnachtszeit)*

### 2.2. Darstellung des Herrn

- 8202.1 Sieh, dein Licht will kommen *(Lesehore)*
- 8202.2 Auf, Zion, schmücke dein Gemach *(Lesehore, Laudes, Vesper)*
- 8202.101 Legis sacrátæ sanctis cæremóniis *(Lesehore)*
- 8202.102 Adórna, Sion, thálamum *(Laudes)*
- 8202.104 Quod chorus vatum venerándus olim *(Vesper)*

### 22.2. Kathedra Petri

- 8222 Petrus, der Kirche Fundament *(Laudes, Vesper)*
- 8222.1 Iam, bone pastor, Petre, clemens áccipe *(Lesehore)*
- 8222.2 Petrus beátus catenárum láqueos *(Laudes)*
- 8222.4 Divína vox te déligit *(Vesper)*

### 24.2. Hl. Matthias

- 8224 Matthía, sacratíssimo *(Lesehore)*

### 19.3. Hl. Josef, Bräutigam der Gottesmutter

- 8319.1 Josef, Erwählter, dem der Herr vertraute *(Lesehore)*
- 8319.2 Preisen möge dich heut, Josef, der Engel Schar *(Laudes, Vesper)*
- 8319.101 Iste, quem læti cólimus, fidéles *(Lesehore)*
- 8319.102 Cǽlitum, Ioseph, decus atque nostræ *(Laudes)*
- 8319.104 Te, Ioseph, célebrent ágmina cǽlitum *(Vesper)*

### 25.3. Verkündigung des Herrn

- 1026 Den Erde, Meer und Firmament *(Lesehore; auch: com-Maria-each, com-MariaSa-each, Jahreskreis (KlStB))*
- 8325 Nun soll es wissen alle Welt *(Laudes, Vesper)*
- 1019 Sei gegrüßt, du lichter Meeresstern *(Vesper; auch: com-Maria-each, com-MariaSa-each)*
- 8325.1 Iam cæca vis mortálium *(Lesehore)*
- 8325.2 O lux, salútis núntia *(Laudes)*
- 8325.4 Agnóscat omne sǽculum *(Vesper)*
- 5478 Ave, maris stella, Dei mater alma *(Vesper; auch: com-Maria-each, com-MariaSa-each)*

### 25.4. Hl. Markus

- 8425 Méntibus lætis tua festa, Marce *(Laudes, Vesper)*

### 29.4. Hl. Katharina von Siena

- 8429.1 Virgo prudéntum comitáta cœtum *(Lesehore)*
- 8429.2 Te, Catharína, máximis *(Laudes, Vesper)*

### 1.5. Hl. Josef der Arbeiter [n1]

- 8319.1 Josef, Erwählter, dem der Herr vertraute *(Lesehore, Vesper)*
- 8319.2 Preisen möge dich heut, Josef, der Engel Schar *(Laudes)*
- 8501.1 Te, pater Ioseph, ópifex colénde *(Lesehore)*
- 8501.2 Auróra solis núntia *(Laudes)*
- 8501.4 Te, Ioseph, célebrent ágmina cǽlitum *(Vesper)*

### 3.5. Hl. Philippus und hl. Jakobus

- 8503 Philíppe, summ>æ honóribus *(Lesehore)*

### [5/40] Christi Himmelfahrt

- 3414 Großer, heiliger Tag *(Lesehore; auch: Osterzeit)*
- 3424 Du höchster Herr der Ewigkeit *(Laudes; auch: Osterzeit)*
- 2904 Jesus, du Quelle unsres Heils *(Vesper; auch: Jahreskreis, Advent, Weihnachtszeit …)*
- 3414.1 Ætérne rex altíssime *(Lesehore; auch: Osterzeit)*
- 3424.1 Optátus votis ómnium *(Laudes; auch: Osterzeit)*
- 2904.1 Iesu, nostra redémptio *(Vesper; auch: Osterzeit)*

### [5/60] Dreifaltigkeitssonntag

- 1303 Dich Gott Vater, ohne Ursprung und End’ *(Lesehore; auch: Jahreskreis (KlStB))*
- 3902 Erhabene Dreifaltigkeit *(Laudes; auch: Jahreskreis (KlStB))*
- 3904 Dreifaltiger verborgner Gott *(Vesper; auch: Jahreskreis (KlStB))*
- 3901.1 Te Patrem summum genitúmque Verbum *(Lesehore)*
- 3902.1 Trínitas, summo sólio corúscans *(Laudes)*
- 4003.1 Nunc, Sancte, nobis, Spíritus *(Terz; auch: Jahreskreis, Advent, Weihnachtszeit)*
- 4003.2 Certum tenéntes órdinem *(Terz; auch: Jahreskreis, Advent, Weihnachtszeit)*
- 4006.1 Rector potens, verax Deus *(Sext; auch: Jahreskreis, Advent, Weihnachtszeit)*
- 4006.2 Dicámus laudes Dómino *(Sext; auch: Jahreskreis, Advent, Weihnachtszeit)*
- 4009.1 Rerum, Deus, tenax vigor *(Non; auch: Jahreskreis, Advent, Weihnachtszeit)*
- 4009.2 Ternis horárum términis *(Non; auch: Jahreskreis, Advent, Weihnachtszeit)*
- 3904.1 Imméns>a et una, Trínitas *(Vesper)*

### [5/64] Fronleichnam

- 3941 Geheimnis seiner Herrlichkeit *(Lesehore)*
- 3942 Das Wort des Vaters, Gottes Sohn *(Laudes; auch: Jahreskreis (KlStB))*
- 3940 Jubelnder Freude Lied *(Vesper)*
- 3944 Das Geheimnis lasst uns künden *(Vesper)*
- 3941.1 Sacris sollémniis iuncta sint gáudia *(Lesehore)*
- 3942.1 Verbum supérnum pródiens *(Laudes)*
- 4003.1 Nunc, Sancte, nobis, Spíritus *(Terz; auch: Jahreskreis, Advent, Weihnachtszeit)*
- 4003.2 Certum tenéntes órdinem *(Terz; auch: Jahreskreis, Advent, Weihnachtszeit)*
- 4006.1 Rector potens, verax Deus *(Sext; auch: Jahreskreis, Advent, Weihnachtszeit)*
- 4006.2 Dicámus laudes Dómino *(Sext; auch: Jahreskreis, Advent, Weihnachtszeit)*
- 4009.1 Rerum, Deus, tenax vigor *(Non; auch: Jahreskreis, Advent, Weihnachtszeit)*
- 4009.2 Ternis horárum términis *(Non; auch: Jahreskreis, Advent, Weihnachtszeit)*
- 3944.1 Pange, lingua, gloriósi córporis mystérium *(Vesper)*

### [5/65] Herz-Jesu-Fest

- 2516 Christus, göttlicher Herr *(Lesehore; auch: Jahreskreis, Advent, Weihnachtszeit …)*
- 3952 Der höchsten Gottheit ew’ges Bild *(Laudes; auch: Jahreskreis (Sonderfall), Jahreskreis (KlStB))*
- 3954 O sel’ger Urgrund allen Seins *(Vesper; auch: Jahreskreis (KlStB))*
- 3951.1 Cor, arca legem cóntinens *(Lesehore)*
- 3952.1 Iesu, auctor cleméntiæ *(Laudes)*
- 4003.1 Nunc, Sancte, nobis, Spíritus *(Terz; auch: Jahreskreis, Advent, Weihnachtszeit)*
- 4003.2 Certum tenéntes órdinem *(Terz; auch: Jahreskreis, Advent, Weihnachtszeit)*
- 4006.1 Rector potens, verax Deus *(Sext; auch: Jahreskreis, Advent, Weihnachtszeit)*
- 4006.2 Dicámus laudes Dómino *(Sext; auch: Jahreskreis, Advent, Weihnachtszeit)*
- 4009.1 Rerum, Deus, tenax vigor *(Non; auch: Jahreskreis, Advent, Weihnachtszeit)*
- 4009.2 Ternis horárum términis *(Non; auch: Jahreskreis, Advent, Weihnachtszeit)*
- 3954.1 Autor beáte sǽculi *(Vesper)*

### 11.6. Hl. Barnabas

- 8425.1 O vir beát>e, Apóstolis *(Lesehore; auch: com-Apostel-Evang)*
- 8611 Bárnabæ clarum cólimus tropǽum *(Laudes, Vesper)*

### 24.6. Geburt des hl. Johannes des Täufers

- 8624.5 Christus, dem Herren, dientest du als Herold *(Lesehore, Laudes)*
- 8624 Christus, dem Herren, dientest du als Herold *(Vesper)*
- 8624.1 Antra desérti téneris sub annis *(Lesehore)*
- 8624.2 O nimis felix meritíque celsi *(Laudes)*
- 8624.4 Ut queant laxis resonáre fibris *(Vesper)*

### 29.6. Hl. Petrus und hl. Paulus

- 8629.5 O Roma felix! *(Lesehore, Laudes)*
- 8629.4 Goldenes Leuchten strahlt vom Himmel heut’ herab *(Laudes, Vesper)*
- 8629.1 Felix per omnes festum mundi cárdines *(Lesehore)*
- 8629.2 Apostolórum pássio diem sacrávit sǽculi *(Laudes)*
- 8629 Aurea luce et decóre róseo *(Vesper)*
- 8629.3 O Roma felix, quæ tantórum príncipum *(Vesper)*

### 2.7. Mariae Heimsuchung

- 8702.1 Veni, præcélsa Dómina *(Lesehore)*
- 8702.2 Véniens, mater ínclita *(Laudes)*
- 8702.4 Cóncito gressu petis alta montis *(Vesper)*

### 3.7. Hl. Thomas

- 8703.2 Qui luce splendes órdinis *(Laudes)*

### 11.7. Hl. Benedikt

- 8711.101 [Was in der Vorzeit rühmend ward besungen] *(Lesehore, Laudes)*
- 8711 Was in der Vorzeit rühmend ward besungen *(Vesper)*
- 8711.4 Inter ætérnas súperum corónas *(Lesehore, Vesper)*
- 8711.2 Légifer prudens, veneránde doctor *(Laudes)*

### 22.7. Hl. Maria Magdalena

- 8722.4 Mágdalæ sidus, múlier beáta *(Lesehore, Vesper)*
- 8722.2 Auróra surgit lúcida *(Laudes)*

### 25.7. Hl. Jakobus

- 8725 Te nostra lætis láudibus *(Laudes)*

### 26.7. Hl. Joachim und hl. Anna

- 8726.4 Dum tuas festo, pater o colénde *(Lesehore, Vesper)*
- 8726.2 Nocti succédit lúcifer *(Laudes)*

### 29.7. Hll. Marta, Maria und Lazarus

- 8729.4 Te gratulántes pángimus *(Lesehore, Vesper)*
- 8729.2 Quas tibi laudes ferimúsque vota *(Laudes)*

### 31.7. Hl. Ignatius von Loyola

- 8731 Magnæ cohórtis príncipem *(Laudes, Vesper)*

### 6.8. Verklärung des Herrn

- 8806.1 Während du betest, Herr *(Lesehore)*
- 8806.2 Des ew’gen Glanzes Lichtgestalt *(Laudes)*
- 8806.4 Sieger im Tode, strahlend Verklärter *(Vesper)*
- 8806.101 Cæléstis formam glóriæ *(Lesehore)*
- 8806.102 Dulcis Iesu memória *(Laudes)*
- 8806.104 O nata lux de lúmine *(Vesper)*

### 8.8. Hl. Dominikus

- 8808 Novus athléta Dómini *(Laudes, Vesper)*

### 10.8. Hl. Laurentius

- 8810.4 Mártyris Christi cólimus triúmphum *(Lesehore, Vesper)*
- 8810.2 In mártyris Lauréntii *(Laudes)*

### 15.8. Aufnahme Mariens in den Himmel

- 8815.5 Herrlich strahlst du im Licht (wie in der Vesper) *(Lesehore)*
- 1038.5 Du große Herrin, schönste Frau (wie in den Laudes) *(Lesehore)*
- 1038 Du große Herrin, schönste Frau *(Laudes; auch: com-Maria-each, com-MariaSa-each)*
- 8815 Herrlich strahlst du im Licht *(Vesper)*
- 8815.1 Auróra velut fúlgida *(Lesehore)*
- 8815.2 Solis, o Virgo, rádiis amícta *(Laudes)*
- 8815.4 Gáudium mundi, nova stella cæli *(Vesper)*

### 20.8. Hl. Bernhard von Clairvaux

- 8820 Bernárde, gemma cǽlitum *(Laudes, Vesper)*

### 22.8. Maria Königin

- 8822.1 Rerum suprém>o in vértice *(Lesehore)*
- 8822.2 O quam glorífica luce corúscas *(Laudes)*
- 8822.4 Mole graváti críminum *(Vesper)*

### 24.8. Hl. Bartolomäus

- 8824 Relúcens inter príncipes *(Laudes)*

### 28.8. Hl. Augustinus

- 8828 Fulget in cælis célebris sacérdos *(Laudes, Vesper)*

### 29.8. Enthauptung des hl. Johannes des Täufers

- 1110 Geist, der das Leben weckt *(Lesehore; auch: com-MärtPl-each, com-MärtSg-each, Jahreskreis (KlStB))*
- 1118 Dem Herrn, der seiner Zeugen Dienst *(Laudes; auch: com-MärtPl-each, com-MärtSg-each)*
- 1123 Brüder, preiset im Lob *(Vesper; auch: com-MärtPl-each, com-MärtSg-each)*
- 8829.4 Præcéssor almus grátiæ *(Lesehore, Vesper)*
- 8829.2 O nimis felix meritíque celsi *(Laudes)*

### 3.9. Hl. Gregor der Große

- 8903 Anglórum iam apóstolus *(Laudes, Vesper)*

### 8.9. Mariae Geburt

- 8908.4 Beáta Dei génetrix *(Lesehore, Vesper)*
- 8908.2 O sancta mundi dómina *(Laudes)*

### 13.9. Hl. Johannes Chrysostomus

- 8913 Laude te cives súperi corónant *(Laudes, Vesper)*

### 14.9. Kreuzerhöhung

- 3313 Preise, Zunge, und verkünde *(Lesehore; auch: Fastenzeit)*
- 3323 Heilig Kreuz, du Baum der Treue *(Laudes; auch: Fastenzeit)*
- 3343 Der König siegt, sein Banner glänzt *(Vesper; auch: Fastenzeit)*
- 8914.1 Salve, crux sancta, salve mundi glória *(Lesehore)*
- 8914.2 Signum crucis mirábile *(Laudes)*
- 3343.1 Vexílla regis pródeunt *(Vesper; auch: Fastenzeit)*

### 15.9. Mariae Schmerzen

- 8915.1 Gib, o Mutter, Born der Liebe *(Lesehore)*
- 8915 Christi Mutter stand mit Schmerzen *(Laudes, Vesper)*
- 8915.101 Stabat mater dolorósa *(Lesehore)*
- 8915.102 Eia, mater, fons amóris *(Laudes)*
- 8915.104 Virgo vírginum præclára *(Vesper)*

### 21.9. Hl. Matthäus

- 8921 Præclára qua tu glória *(Laudes, Vesper)*

### 29.9. Hll. Erzengel Michael, Gabriel und Rafael

- 8929.2 Christus, dir, dem Glanz des Vaters *(Lesehore)*
- 8929.4 Michael, kämpfe für die Ehre Gottes *(Laudes, Vesper)*
- 8929.101 Festíva vos, archángeli *(Lesehore)*
- 8929.102 Tibi, Christe, splendor Patris *(Laudes)*
- 8929.104 Angelum pacis Míchael ad istam *(Vesper)*

### 30.9. Hl. Hieronymus

- 8930 Festíva cánimus laude Hierónymum *(Laudes, Vesper)*

### 2.10. Hll. Schutzengel

- 9002 Herr aller Mächte, Throne und Gewalten *(Lesehore, Laudes, Vesper)*
- 9002.1 Ætérne rerum cónditor *(Lesehore)*
- 9002.2 Orbis patrátor óptime *(Laudes)*
- 9002.4 Custódes hóminum psállimus ángelos *(Vesper)*

### 4.10. Hl. Franz von Assisi

- 9004 In cælésti collégio *(Laudes, Vesper)*

### 7.10. Unsere Liebe Frau vom Rosenkranz

- 1038 Du große Herrin, schönste Frau *(Laudes; auch: com-Maria-each, com-MariaSa-each)*
- 1019 Sei gegrüßt, du lichter Meeresstern *(Vesper; auch: com-Maria-each, com-MariaSa-each)*
- 1043 Meerstern, sei gegrüßet *(Vesper; auch: com-Maria-each, com-MariaSa-each, Jahreskreis (KlStB))*
- 9007 Te gestiéntem gáudiis *(Laudes, Vesper)*

### 15.10. Hl. Theresia von Jesus

- 9015.2 Regis supérni núntia *(Laudes)*
- 9015.4 Hæc est dies, qua cándidæ *(Vesper)*

### 18.10. Hl. Lukas

- 9018 Pláusibus, Luca, cánimus, triúmphum *(Laudes, Vesper)*

### 28.10. Hl. Simon und hl. Judas

- 9028 Commúne vos, apóstoli *(Laudes)*

### [11/0] Allerseelen

- 2514 Mitten wir im Leben sind *(Lesehore; auch: Jahreskreis, Advent, Weihnachtszeit …)*
- 1425 Du Türe zur Herrlichkeit: Christus *(Lesehore; auch: verst-each)*
- 1440 Wenn wir im Tode leiblich zerfallen *(Laudes, Kleine Horen; auch: verst-each)*
- 2512 Tod und Vergehen waltet in allem *(Vesper; auch: Jahreskreis, Advent, Weihnachtszeit …)*

### 1.11. Allerheiligen

- 9101 Christus, du Heiland aller Welt *(Lesehore)*
- 9101.4 Himmlische Chöre preisen den Höchsten *(Laudes, Vesper)*
- 9101.1 Christe, cælórum habitátor alme *(Lesehore)*
- 9101.2 Iesu, salvátor sǽculi *(Laudes)*
- 9101.3 Christe, redémptor ómnium *(Vesper)*

### 11.11. Hl. Martin

- 1215 Preis dem Bekenner, dessen Fest wir feiern *(Lesehore, Laudes, Vesper; auch: com-Mann-each)*
- 9111.4 Iste conféssor Dómini sacrátus *(Lesehore, Vesper)*
- 9111.2 Martíne, par apóstolis *(Laudes)*

### 18.11. Weihetag der Basiliken St. Peter und St. Paul zu Rom [n1]

- 9118 Iam, bone pastor, Petre, clemens áccipe *(Laudes, Vesper)*

### 21.11. Unsere Liebe Frau in Jerusalem

- 9121.1 Salve, mater misericórdiæ *(Lesehore)*
- 9121.2 María, virgo régia *(Laudes)*

### 30.11. Hl. Andreas

- 9130 Captátor olim píscium *(Laudes, Vesper)*

### 7.12. Hl. Ambrosius

- 9203 Fortem piúmque prǽsulem *(Laudes, Vesper)*

### 8.12. Unbefleckte Empfängnis Mariens

- 9208.1 Sei gegrüßt, du Himmelstür *(Lesehore)*
- 9208 O Jungfrau, rein und makellos *(Laudes, Vesper)*
- 9208.101 Te dícimus præcónio *(Lesehore)*
- 9208.102 In plausu grati cárminis *(Laudes)*
- 9208.104 Præclára custos vírginum *(Vesper)*

### 25.12. Hochfest der Geburt des Herrn

- 3241 Christus, Erlöser aller Welt *(Vesper; auch: Weihnachtszeit)*
- 3241.1 Christe, redémptor ómnium *(Vesper; auch: Weihnachtszeit)*

### 26.12. Hl. Stephanus

- 9226 Lasst uns im Feste heut’ begehn *(Lesehore, Laudes; auch: com-MärtSg-Stephanus)*
- 9226.1 Festum celébre mártyris *(Lesehore)*
- 9226.2 Christus est vita véniens in orbem *(Laudes; auch: com-MärtSg-Stephanus)*

### 27.12. Hl. Johannes

- 9227 Den Jünger, der dem Herrn gefolgt *(Lesehore, Laudes; auch: com-Apostel-Johannes)*
- 9227.1 Vírginis virgo veneránde custos *(Lesehore)*
- 9227.2 Cohors beáta Séraphim *(Laudes; auch: com-Apostel-Johannes)*

### 28.12. Fest der Unschuldigen Kinder

- 9228 Warum, ihr Mütter, klaget ihr *(Lesehore, Laudes; auch: com-MärtPl-UnschKinder)*
- 9228.1 Hymnum canéntes mártyrum *(Lesehore)*
- 9228.2 Audit tyránnus ánxius *(Laudes; auch: com-MärtPl-UnschKinder)*

## Diözese Limburg

### 5.1. Hl. Johannes Nepomuk Neumann [d1]

- 8105.1 Dem Dienste Christi ganz geweiht *(Lesehore)*
- 8105.2 Johannes, unser Schutzpatron *(Laudes, Vesper)*
- 1210 Du Krone deiner Heiligen *(Laudes; auch: com-Mann-each)*
- 1151 Herr Jesus Christus, du gingst heim zum Vater *(Vesper; auch: com-Hirten-each, Jahreskreis (KlStB))*

### 14.2. Hl. Valentin [d1]

- 1123 Brüder, preiset im Lob *(Lesehore; auch: com-MärtPl-each, com-MärtSg-each)*
- 8105.2 Johannes, unser Schutzpatron *(Laudes, Vesper)*
- 1210 Du Krone deiner Heiligen *(Laudes; auch: com-Mann-each)*
- 1151 Herr Jesus Christus, du gingst heim zum Vater *(Vesper; auch: com-Hirten-each, Jahreskreis (KlStB))*

### 23.4. Hochfest des hl. Georg

- 8423.1 Hehrer Märtyrer *(Lesehore)*
- 9029.1 In Jubel, Herr, wir dich erheben *(Laudes)*
- 8423.2 Wir stehn im Kampfe und im Streit *(Laudes, Kleine Horen)*
- 8423.4 Heil’ger Georg, hilf in Stürmen *(Kleine Horen, Vesper)*

### 15.5. Hl. Rupert von Bingen [d1]

- 1199 Heute preist unser Lob *(Lesehore; auch: com-Mann-each)*
- 8515.1 Dank dir, Herr, der unserm Land *(Laudes, Vesper)*

### 19.6. Hl. Elisabeth von Schönau [d1]

- 8619.1 Sei uns gegrüßt, Elisabeth *(Lesehore, Vesper)*
- 8619.2 Lasst uns Gott den Schöpfer loben *(Laudes)*

### 6.7. Hl. Goar [d1]

- 1199 Heute preist unser Lob *(Lesehore; auch: com-Mann-each)*

### 11.8. Domkirchweihfest

- 8811.1 Groß ist der Herr in seiner Stadt *(Lesehore)*
- 1139 Eine große Stadt ersteht *(Laudes; auch: kirchw-each)*
- 8811.2 Wenn Gott das Haus nicht baut *(Vesper)*
- 8811.3 Gott, der du warst und bist und bleibst *(Vesper)*

### 18.8. Hl. Helena [d1]

- 3323 Heilig Kreuz, du Baum der Treue *(Lesehore; auch: Fastenzeit)*
- 8818.1 Des Königs Fahne weht empor *(Lesehore)*
- 8818.2 Der königlichen Mutter Ruhm *(Laudes)*
- 8818.4 Lasst uns preisen, lasst uns rühmen *(Vesper)*

### 11.9. Hll. Eucharius, Valerius und Maternus [d1]

- 8911.1 Wir wollen Christi hehre Diener preisen *(Lesehore, Laudes, Vesper)*
- 2112 Wort Gottes, dessen Macht und Ruf *(Lesehore; auch: Jahreskreis, com-Hirten-each, Jahreskreis (KlStB))*
- 8911.2 Selig zu preisen ist der Mann *(Laudes, Vesper)*

### 13.10. Hl. Lubentius [d1]

- 8911.1 Wir wollen Christi hehre Diener preisen *(Lesehore)*
- 9013.1 O Hirt, von Gott erkoren *(Lesehore)*

### 29.10. Hl. Ferrutius [d1]

- 9029.1 In Jubel, Herr, wir dich erheben *(Lesehore)*
- 9029.2 „Mir nach“, spricht Christus, unser Held *(Laudes, Vesper)*
- 1118 Dem Herrn, der seiner Zeugen Dienst *(Laudes; auch: com-MärtPl-each, com-MärtSg-each)*
- 1123 Brüder, preiset im Lob *(Vesper; auch: com-MärtPl-each, com-MärtSg-each)*

## Diözese Fulda

### 4.2. Hl. Rabanus Maurus

- 2112 Wort Gottes, dessen Macht und Ruf *(Lesehore; auch: Jahreskreis, com-Hirten-each, Jahreskreis (KlStB))*
- 8204.1 Die du als Hirten deiner Herde sendest *(Laudes)*
- 8204.2 Wen du als Hirten deiner Herde sendest *(Laudes)*
- 8204.3 Komm, Heil’ger Geist, der Leben schafft *(Terz)*
- 8204.4 Der voll Vertrauen sang das Lob des Kreuzes *(Vesper)*
- 8204.5 Dem Mann, der niemals seine Ehre suchte *(Vesper)*
- 8204.101 Christe, pastórum caput atque princeps *(Lesehore)*
- 8204.102 Quos, Deus, ponis pópulis regéndis *(Laudes)*
- 8204.103 Veni, creátor Spíritus *(Terz)*
- 8204.104 Sed viri virtus meritúmque poscit *(Vesper)*

### 5.6. Hl. Bonifatius

- 8605.1 Du Bote Gottes, ausgesandt *(Lesehore)*
- 8605.6 A. Sankt Bonifatius, wir deine Kinder *(Lesehore, Laudes)*
- 8605.7 B. Du lehrst, dass Gott in Christus … *(Lesehore, Laudes)*
- 8605.2 Der Morgenröte Licht bringt uns die frohe Kunde *(Laudes)*
- 8605.4 So viele Märtyrer seit der Apostel Tagen *(Vesper)*
- 8605.5 Viel’ Märtyrer seit der Apostel Tagen *(Vesper)*
- 8605.101 Iª pars: Quæ, Bonifáti, tibi sacra, martyr … *(Lesehore, Laudes)*
- 8605.102 IIª pars: Cáritas urget; male contumáces … *(Lesehore, Laudes)*
- 8605.104 Quantis nostra fides empta labóribus *(Vesper)*

### 28.9. Hl. Lioba

- 8928.1 Heute preisen wir froh *(Lesehore)*
- 8928.6 A. Sankt Lioba, du kamst auf Winfrieds Bitten *(Lesehore, Laudes)*
- 8928.7 B. Bald geht von deinem Kloster an der Tauber *(Lesehore, Laudes)*
- 8928.2 Lioba, heilige Frau *(Laudes)*
- 8928.4 Du Krone deiner Heiligen *(Vesper)*
- 8928.5 Gruß dir auf der Weisheit Stuhle *(Vesper)*
- 8928.101 A. Instánte Bonifátio venísti huc ex Anglia *(Lesehore, Laudes)*
- 8928.102 B. Favénte Dei grátia formas fidéles féminas *(Lesehore, Laudes)*
- 8928.104 Ave, sóphiæ amátrix *(Vesper)*

### 19.11. Hl. Elisabeth

- 9119.1 Elisabeth, du Fürstin mild *(Lesehore)*
- 9119.6 Nicht Abstammung von königlichen Ahnen *(Lesehore)*
- 9119.2 Brüder, preiset im Lob heute Elisabeth *(Laudes, Vesper)*
- 9119.3 Der hehre Tag bricht an, da, hohe Frau *(Laudes, Vesper)*
- 9119.4 Du Quell der Liebe, großer Gott *(Vesper)*
- 9119.5 Lass dich, Elisabeth, noch einmal grüßen *(Vesper)*
- 9119.101 O creta regum sánguine *(Lesehore)*
- 9119.102 Iam dies fulget, méritis corúscans *(Laudes, Vesper)*
- 9119.104 Quae laudum tibi cántica *(Vesper)*

### 1.12. Bischofsweihe des hl. Bonifatius [d1]

- 9201 Mit Jubel sollst du, deutsches Land *(Lesehore, Vesper)*
- 9201.1 Prǽsulis exsúltans célebrat Germánia laudes *(Lesehore, Vesper)*

### 16.12. Hl. Sturmius

- 9216.1 Bote der Wahrheit, Diener unsrer Freude *(Lesehore)*
- 9216.6 A. Der Herr, der hundertfachen Lohn verheißen *(Lesehore, Laudes)*
- 9216.7 B. Gott prüft die Heiligen wie Gold im Feuer *(Lesehore, Laudes)*
- 9216.2 Sendbote Christi, Kämpfer für die Wahrheit *(Laudes)*
- 9216.4 Preiset den tüchtigen Mann *(Vesper)*
- 9216.5 Ein Stern ging auf im Buchenland *(Vesper)*
- 9216.101 A. Christum relíctis qui sequúntur ómnibus *(Lesehore, Laudes)*
- 9216.102 B. Numquam carébit clara virtus pérfido *(Lesehore, Laudes)*
- 9216.104 Reléqans mortis ténebras *(Vesper)*

## Diözese Trier

### 24.2. Hl. Matthias

- 8224.1 Steht im Dunkel der Nacht freudig vom Schlafe auf *(Lesehore)*
- 8224.2 Gruß dir, Freund des Herrn, Matthias *(Laudes)*
- 8224.4 Freut euch, Bürger von Trier, jubelt Matthias zu *(Vesper)*

### 1.5. Jahrestag der Weihe des Domes

- 8811.1 Groß ist der Herr in seiner Stadt *(Lesehore)*
- 1139 Eine große Stadt ersteht *(Laudes; auch: kirchw-each)*

### 9.12. Hl. Eucharius

- 9209.1 Trier lag noch in Nacht und sein Volk im Dunkeln *(Lesehore, Vesper)*
- 9209.2 Du kamst zu uns, Eucharius *(Laudes)*

### [13/o-2-5] Gedenktag des hl. Rockes [dpar]

- 8599.1 Preist mit Freude und mit Jubel *(Lesehore)*
- 8599.2 Was Christus einst für uns getan *(Laudes)*
- 8599.4 O ungeteiltes Kleid des Herrn *(Vesper)*

## Diözese Köln

### 21.5. Hl. Hermann Josef

- 8521.1 Dich, Hermann Josef, grüßen wir *(Lesehore, Vesper)*
- 8521.2 Gaude, felix Agrippína *(Laudes)*
- 1248 Selig, wem Christus auf dem Weg begegnet *(Laudes; auch: com-each-Ord)*

### 23.7. Übertragung der Reliquien der Heiligen Drei Könige [d1]

- 3244.1 Die Weisen schauen auf zum Stern *(Lesehore)*
- 8723.502 Iesu, vocátor géntium *(Laudes)*
- 8723.504 Du rufst, Herr Jesus, alle Welt *(Vesper)*

### 10.10. Hl. Cassius und hl. Florentinus (Hochfest in Bonn) [d2]

- 9010.1 Treue und männlichen Mut *(Vesper)*

### 10.10. Hl. Gereon und Gefährten

- 9010.1 Treue und männlichen Mut *(Lesehore, Laudes, Vesper)*
- 9010.2 Rex sempitérnæ lucis auctor únice *(Laudes)*

### 21.10. Hl. Ursula und Gefährtinnen

- 9021.1 Sankt Ursula ein Schiff regiert *(Lesehore, Laudes)*
- 9021.2 Vox sonat Sponsi: Diutúrna cessit *(Laudes)*
- 9021.4 Von den Grenzen dieser Welt *(Laudes, Vesper)*

## Diözese Paderborn

### 23.7. Hl. Liborius

- 8723.1 Christus, Wort des ew’gen Vaters *(Lesehore)*
- 8723.2 Die Sonne der Gerechtigkeit *(Laudes)*
- 8723.3 Komm, Geist des Lebens, Geist des Lichts *(Kleine Horen)*
- 8723.401 Du warst ein strahlend Licht zu Frankreichs Ehre *(Vesper)*
- 8723.402 Heil’ger Libori, Licht im Land der Franken *(Vesper)*
- 8723.403 O Jesu, deiner Gläub’gen Kron’ *(Vesper)*
- 8723.4 Im Reich der Franken warst du Hirt der Seelen *(Vesper)*

## Diözese Dresden-Meißen

### 3.2. Sel. Alojs Andritzki [d11]

- 8203.1 Der Herr, der lebendige Gott, unser Herr *(Lesehore)*
- 8203.2 Du Gottesmann in schwerer Zeit *(Laudes, Vesper)*

---

# Teil D – Commune

Gruppen `com-…` aus `Brevier.ts`, `kirchw-…` (Kirchweihe) und `verst-…` (Totenoffizium) aus `Sollemnities.ts`.

### com-Apostel-each

- **Lesehore:**
  - 1068 Was habt ihr gesehen in jener Zeit
  - 5493 O sempitérnæ cúriæ
- **Laudes:**
  - 1072 Christus, du Licht vom wahren Licht
  - 5493 O sempitérnæ cúriæ
- **Vesper:**
  - 1076 Der Himmel jauchze Lobgesang
  - 5497 Exsúltet cælum láudibus

### com-Apostel-Johannes

- **Vesper:**
  - 9227 Den Jünger, der dem Herrn gefolgt
  - 9227.2 Cohors beáta Séraphim

### com-Apostel-o

- **Laudes:**
  - 1072.1 Der österlichen Sonne Glanz
  - 5494 Claro pascháli gáudio
- **Vesper:**
  - 1076.1 Voll Trauer war der Jünger Schar
  - 5498 Tristes erant Apóstoli

### com-each-Kl

- **Lesehore:** 2111 Göttliches Wort, der Gottheit Schrein

### com-each-Ord

- **Lesehore:**
  - 2516 Christus, göttlicher Herr
  - 1248 Selig, wem Christus auf dem Weg begegnet
- **Laudes:**
  - 1248 Selig, wem Christus auf dem Weg begegnet
  - 5677 O redemptóris píetas colénda
- **Vesper:** 1248 Selig, wem Christus auf dem Weg begegnet

### com-Frau-each

- **Lesehore:**
  - 3112 Erwartet den Herrn
  - 5656 Hæc fémina laudábilis
- **Laudes:**
  - 1234 Preiset die tüchtige Frau
  - 5662 Nóbilem Christi fámulam disérta
- **Vesper:**
  - 1234 Preiset die tüchtige Frau
  - 5667.1 Fortem viríli péctore

### com-Hirten-each

- **Lesehore:**
  - 2112 Wort Gottes, dessen Macht und Ruf
  - 5564.3 Christe, pastórum caput atque princeps
- **Laudes:**
  - 1151 Herr Jesus Christus, du gingst heim zum Vater
  - 5580.3 Inclitus rector pater atque prudens
- **Vesper:**
  - 1151 Herr Jesus Christus, du gingst heim zum Vater
  - 5585.1 Pro papa vel episcopo
  - 5585.2 Pro presbytero
  - 5586 Pro pluribus pastoribus

### com-Jgfr-each

- **Lesehore:**
  - 1177 Es fiel das Feuer des Herrn in dich
  - 5607 Dulci deprómat cármine
- **Laudes:**
  - 1185 Du, Herr, hast sie für dich erwählt
  - 5616 Aptáta, virgo, lámpade
- **Vesper:**
  - 1185 Du, Herr, hast sie für dich erwählt
  - 5620 Iesu, coróna vírginum

### com-Jgfr-Kl

- **Lesehore:** 2111 Göttliches Wort, der Gottheit Schrein

### com-Mann-each

- **Lesehore:**
  - 1199 Heute preist unser Lob
  - 5630 Iesu, redémptor ómnium
- **Laudes:**
  - 1210 Du Krone deiner Heiligen
  - 5641 Iesu, coróna célsior
- **Vesper:**
  - 1215 Preis dem Bekenner, dessen Fest wir feiern
  - 5630 Iesu, redémptor ómnium

### com-Maria-each

- **Lesehore:**
  - 1026 Den Erde, Meer und Firmament
  - 1027 Sei gegrüßt, die den König gebar
  - 5463 Quem terra, pontus, ǽthera
- **Laudes:**
  - 1038 Du große Herrin, schönste Frau
  - 5473 O gloriósa dómina
- **Vesper:**
  - 1019 Sei gegrüßt, du lichter Meeresstern
  - 1020 Ave, Stern der Meere
  - 1043 Meerstern, sei gegrüßet
  - 5457 María, quæ mortálium
  - 5478 Ave, maris stella, Dei mater alma

### com-MariaSa-each

- **Lesehore:**
  - 1026 Den Erde, Meer und Firmament
  - 1027 Sei gegrüßt, die den König gebar
  - 5463 Quem terra, pontus, ǽthera
  - 5464 O virgo mater, fília
  - 5457 María, quæ mortálium
- **Laudes:**
  - 1038 Du große Herrin, schönste Frau
  - 1019 Sei gegrüßt, du lichter Meeresstern
  - 1043 Meerstern, sei gegrüßet
  - 5473 O gloriósa dómina
  - 5465 Quæ caritátis fúlgidum
  - 5478 Ave, maris stella, Dei mater alma

### com-MärtPl-each

- **Lesehore:**
  - 1110 Geist, der das Leben weckt
  - 5509 Rex glorióse mártyrum
- **Laudes:**
  - 1118 Dem Herrn, der seiner Zeugen Dienst
  - 5517 Ætérna Christi múnera
- **Vesper:**
  - 1123 Brüder, preiset im Lob
  - 5523 Pro sancto viro martyre
  - 5523.1 Pro sancta muliere martyre

### com-MärtPl-Jgfr

- **Laudes:** 1119 Du Sohn der Jungfrau, Schöpfer deiner Mutter
- **Vesper:** 1119 Du Sohn der Jungfrau, Schöpfer deiner Mutter

### com-MärtPl-UnschKinder

- **Vesper:**
  - 9228 Warum, ihr Mütter, klaget ihr
  - 9228.2 Audit tyránnus ánxius

### com-MärtSg-each

- **Lesehore:**
  - 1110 Geist, der das Leben weckt
  - 5536 Pro sanctis viris
  - 5536.1 Pro sanctis mulieribus
- **Laudes:**
  - 1118 Dem Herrn, der seiner Zeugen Dienst
  - 5545 Martyr Dei, qui únicum
- **Vesper:**
  - 1123 Brüder, preiset im Lob
  - 5552 Deus, tuórum mílitum

### com-MärtSg-Jgfr

- **Lesehore:** 5537 O Christe, flos convállium
- **Laudes:**
  - 1119 Du Sohn der Jungfrau, Schöpfer deiner Mutter
  - 5546 O castitátis sígnifer
- **Vesper:**
  - 1119 Du Sohn der Jungfrau, Schöpfer deiner Mutter
  - 5553 Vírginis Proles opiféxque Matris

### com-MärtSg-Stephanus

- **Vesper:**
  - 9226 Lasst uns im Feste heut’ begehn
  - 9226.2 Christus est vita véniens in orbem

### kirchw-each

- **Lesehore:**
  - 1139 Eine große Stadt ersteht
  - 5436 Christe, cunctórum dominátor alme
- **Laudes:**
  - 1150 „Halleluja“ hebt an
  - 5446 Anguláris fundaméntum lapis Christus
- **Kleine Horen:** 9999 ⚠ nicht gefunden
- **Vesper:**
  - 1154 Sel’ge Stätte voll des Friedens
  - 5450 Urbs Ierúsalem beáta

### verst-each

- **Lesehore:**
  - 2514 Mitten wir im Leben sind
  - 1425 Du Türe zur Herrlichkeit: Christus
  - 5698.1 Pro uno defuncto
  - 5698.2 Pro una defuncta
  - 5698.3 Pro pluribus defunctis
- **Laudes:**
  - 1440 Wenn wir im Tode leiblich zerfallen
  - 5708.1 Pro uno defuncto
  - 5708.2 Pro una defuncta
  - 5708.3 Pro pluribus defunctis
- **Terz:**
  - 1440 Wenn wir im Tode leiblich zerfallen
  - 5713.1 Pro uno defuncto
  - 5713.2 Pro una defuncta
  - 5713.3 Pro pluribus defunctis
- **Sext:**
  - 1440 Wenn wir im Tode leiblich zerfallen
  - 5716.1 Pro uno defuncto
  - 5716.2 Pro una defuncta
  - 5716.3 Pro pluribus defunctis
- **Non:**
  - 1440 Wenn wir im Tode leiblich zerfallen
  - 5719.1 Pro uno defuncto
  - 5719.2 Pro una defuncta
  - 5719.3 Pro pluribus defunctis
- **Vesper:**
  - 2512 Tod und Vergehen waltet in allem
  - 5720.1 Pro uno defuncto
  - 5720.2 Pro una defuncta
  - 5720.3 Pro pluribus defunctis

### com-Apostel-Evang

- **Lesehore:** 8425.1 O vir beát>e, Apóstolis

### com-Frau-Pl

- **Lesehore:** 5657 ⚠ ohne lateinischen Text
- **Laudes:** 5663 ⚠ ohne lateinischen Text
- **Vesper:** 5667.2 ⚠ ohne lateinischen Text

### com-Hirten-Kl

- **Lesehore:** 5600 Ætérne sol, qui lúmine
- **Laudes:** 5599 Doctor ætérnus cóleris piúsque
- **Vesper:** 5600 Ætérne sol, qui lúmine

### com-Jgfr-Pl

- **Lesehore:** 5608 Gaudentes festum colimus
- **Laudes:** 5620 Iesu, coróna vírginum

### com-Mann-Ord

- **Lesehore:** 5678 Læti coléntes fámulum
- **Vesper:** 5678 Læti coléntes fámulum

### com-Mann-Pl

- **Lesehore:** 5647 Inclitos Christi famulos canamus
- **Laudes:** 5642 Beati caeli gaudia
- **Vesper:** 5647 Inclitos Christi famulos canamus

### com-MärtSg-Frau

- **Lesehore:** 5536.1 Pro sanctis mulieribus
- **Laudes:** 5545.1 Martyr Dei, quæ únicum
- **Vesper:** 5552.1 Deus, tuórum mílitum

### com-kirchw-each

- **Lesehore:** 1139 ⚠ ohne lateinischen Text
- **Laudes:** 1150 ⚠ ohne lateinischen Text
- **Vesper:** 1154 ⚠ ohne lateinischen Text

---

# Teil E – Preisungen und Gebete

*(Zusammenstellung nach Angabe des Fachexperten; 1306.1 und 1306.2 sind eine Aufteilung von 1306)*

- 1301 Dir gebührt unser Lob *(auch: Jahreskreis (KlStB))*
- 1302 Dir ziemt das Lob *(auch: Jahreskreis (KlStB))*
- 1303 Dich Gott Vater, ohne Ursprung und End’ *(auch: Jahreskreis (KlStB))*
- 1304 Das erfragte ich unter den Menschen *(auch: Jahreskreis (KlStB))*
- 1305 Dich, hoher Schöpfer *(auch: Jahreskreis (KlStB))*
- 1306 Ewiger, gütiger Gott *(auch: Jahreskreis (KlStB))*
- 1306.1 Ewiger, gütiger Gott
- 1306.2 Lass mich, gütiger Herr
- 1307 Ewiger Gott, aus dem Nichts *(auch: Jahreskreis (KlStB))*
- 3991 Ehre sei dir, Christe, der du littest Not *(auch: Jahreskreis (Sonderfall), Jahreskreis (KlStB))*
- 2516 Christus, göttlicher Herr *(auch: Jahreskreis, Advent, Weihnachtszeit …)*
- 1310 Christus – mächtiger Gott! *(auch: Jahreskreis (KlStB))*
- 1311 Öffne meine Augen, Herr *(auch: Jahreskreis (KlStB))*
- 1312 Herr, du hast die Welt gestaltet *(auch: Jahreskreis (KlStB))*

---

# Anhang – In keiner Gruppe zugeordnete Hymnen

Einträge in `PsHymn.ts` (ID ≥ 1000) mit deutschem bzw. lateinischem Text, die in der jeweiligen Sprache nirgends referenziert werden (Brevier.ts, Calendar.ts, Sollemnities.ts, fest verdrahtete Tabelle in HymnSelector.js, Teil E).

- 8521.2 Gaude, felix Agrippína
- 8723.1 Verbum, ab ætérno Patre
- 8723.2 Exsúrgens sol iustítiæ
- 8723.3 Adésto, Sancte Spíritus
- 8723.4 Fránc>ia in regno vigil es tu pastor
- 8723.402 Fránciæ quondam decus atque lumen
- 8723.403 Iesu, coróna méntium
- 8723.502 Iesu, vocátor géntium
- 9010.2 Rex sempitérnæ lucis auctor únice
- 9021.2 Vox sonat Sponsi: Diutúrna cessit

