# Lateinische Hymnen: Großschreibung am Strophenanfang ohne vorhergehendes Satzende

Quelle: `src/components/data/PsHymn.ts`, Feld `text_lat` aller Einträge mit vierstelliger ID (329 Hymnentexte).

Aufgeführt sind alle Stellen, an denen auf den Marker `^p` ein Großbuchstabe folgt, die vorhergehende Strophe aber nicht mit Punkt, Fragezeichen oder Ausrufezeichen endet.

- **ID**: Nummer des Hymnus; **Abschnitt**: Schlüssel des Abschnitts innerhalb der ID (manche IDs enthalten mehrere Hymnen).
- **Strophe**: Nummer der Strophe, die mit dem Großbuchstaben beginnt (Zahl der `^p`-Marker bis einschließlich des betreffenden plus 1).
- **1. Zeile der Strophe**: Text vom betreffenden `^p` bis zum nächsten `^l`, unverändert mit allen Markern.
- Die letzte Spalte zeigt zur Beurteilung das Ende der vorhergehenden Strophe.

Bei der Prüfung des Strophenendes wurden Rubriken (`^RUBR…^0RUBR`, `^r…^0r`) sowie abschließende Zeichen wie `»`, `^)`, `^†` und `°` übergangen; ein Ende wie `sánguine!»` oder `^(O María.^)` gilt also als Satzende. Die dadurch ausgeschlossenen Stellen stehen am Ende der Datei.

**151 Stellen in 93 Hymnen-IDs.**

| ID | Abschnitt | Strophe | 1. Zeile der Strophe | Letzte Zeile der vorhergehenden Strophe |
|------|-----------|---------|----------------------|------------------------------------------|
| 2500 | 2 | 2 | `Precámur, sancte Dómine,` | `lumen beátis prǽdicans,` |
| 2500 | 3 | 2 | `Tu fabricátor ómnium` | `custos tuórum pérvigil:` |
| 2500 | 3 | 4 | `Ut, dum graváti córpore` | `tuo redémptos sánguine,` |
| 2904 | 1 | 2 | `Quæ te vicit cleméntia,` | `homo in fine témporum,` |
| 2904 | 1 | 3 | `Inférni claustra pénetrans,` | `ut nos a morte tólleres;` |
| 3113 | 0 | 2 | `Illúmina nunc péctora` | `cursu declívi témporis:` |
| 3113 | 0 | 4 | `Non demum artémur malis` | `iustísque regnum pro bonis,` |
| 3123 | 0 | 4 | `Secúndo ut cum fúlserit` | `vocem demus cum lácrimis,` |
| 3143 | 0 | 3 | `Vergénte mundi véspere,` | `donans reis remédium,` |
| 3211 | 3 | 3 | `Regem Deúmqu>e annúntiant` | `prædestinávit índolem:` |
| 3211 | 3 | 6 | `Regnum quod ambit ómnia` | `adíre regn>u>m et cérnere:` |
| 3219 | 1 | 2 | `Non ipse mundári volens` | `aquam lavándo díluit,` |
| 3219 | 1 | 4 | `Hoc mýstico sub nómine` | `formam colúmbæ cǽlitus,` |
| 3221 | 2 | 2 | `Nitet vestra domus` | `pígnorum servátor,` |
| 3241 | 1 | 2 | `Tu lumen, tu splendor Patris,` | `natus ineffabíliter,` |
| 3241 | 1 | 5 | `Hunc cælum, terra, hunc mare,` | `mundi salus advéneris;` |
| 3241 | 2 | 2 | `María, dives grátia,` | `arrísit orto cáritas;` |
| 3241 | 2 | 3 | `Tuqu>e ex vetústis pátribus` | `cum lacte donans óscula;` |
| 3241 | 2 | 4 | `De stirpe Iesse nóbili` | `divína Proles ínvocat:` |
| 3321 | 1 | 3 | `Quiddámque pæniténtiæ` | `quos longa suffert píetas;` |
| 3321 | 2 | 2 | `Nostris malis offéndimus` | `flectámus iram víndicem:` |
| 3341 | 1 | 2 | `Adésto nunc Ecclésiæ,` | `præcéperas ieiúnium,` |
| 3341 | 1 | 4 | `Ut, expiáti ánnuis` | `custódiam mitíssime,` |
| 3343 | 1 | 2 | `Quo, vulnerátus ínsuper` | `suspénsus est patíbulo;` |
| 3361 | 1 | 2 | `Te nunc orántes póscimus,` | `mortis solvísti légibus,` |
| 3362 | 1 | 3 | `Illum a nobis iúgiter` | `fronte signáti, férimus,` |
| 3362 | 1 | 5 | `Tu es qui certo témpore` | `vitæ donáres múnera,` |
| 3364 | 1 | 5 | `Quo te diébus ómnibus` | `tuo redémptos sánguine,` |
| 3412 | 1 | 5 | `Quid hoc potest sublímius,` | `carnis vit>ia mundans caro,` |
| 3414 | 1 | 2 | `Scandis tribúnal déxteræ` | `datur triúmphus grátiæ,` |
| 3414 | 1 | 3 | `Ut trina rerum máchina` | `quæ non erat humánitus,` |
| 3414 | 1 | 7 | `Ut, cum rubénte cœ́peris` | `ad te supérna grátia,` |
| 3418 | 1 | 2 | `Corda replet, linguas ditat,` | `in Christi discípulos,` |
| 3421 | 1 | 2 | `Cum rex ille fortíssimus,` | `gemens inférnus úlulat,` |
| 3422 | 1 | 2 | `Quo Christus invíctus leo,` | `paschále festum gáudiis,` |
| 3438 | 1 | 2 | `Cum hora felix tértia` | `Sanctum datúrus Spíritum,` |
| 3443 | 1 | 3 | `Ut nos Deo coniúngeres` | `sumpsísti tu de Vírgine,` |
| 3904 | 1 | 2 | `Tu sola pleno súfficis` | `et exstat ante sǽcula,` |
| 3904 | 1 | 4 | `Ex te suprém>a orígine,` | `intermináta cáritas,` |
| 3951 | 1 | 2 | `Cor, sanctuárium novi` | `sed et misericórdiæ;` |
| 3951 | 1 | 3 | `Te vulnerátum cáritas` | `velúmque sciss>o utílius:` |
| 3952 | 1 | 2 | `Iesu, spes pæniténtibus,` | `veræ cordis delíciæ:` |
| 3954 | 1 | 2 | `Amor coégit te tuus` | `Deúsque verus de Deo:` |
| 3954 | 1 | 3 | `Ill>e amor, almus ártifex` | `quod vetus ill>e abstúlerat:` |
| 3991 | 1 | 2 | `Rex virtútum, rex glóriæ,` | `totus desiderábilis:` |
| 3991 | 1 | 3 | `Te cæli chorus prǽdicat` | `honor cæléstis cúriæ:` |
| 4003 | 2 | 2 | `Ut simus habitáculum` | `trinæ virtútis glóriam,` |
| 4006 | 1 | 2 | `Exstíngue flammas lítium,` | `et ígnibus merídiem,` |
| 4006 | 6 | 4 | `Unum rogémus et Patrem` | `quos sævus hostis íncutit,` |
| 4009 | 1 | 2 | `Largíre clarum véspere,` | `succéssibus detérminans,` |
| 4009 | 2 | 3 | `Et nos psallámus spíritu,` | `signo salútis pródita,` |
| 4100 | 0 | 2 | `Artus solútos ut quies` | `noctem sopóris grátia,` |
| 4100 | 0 | 3 | `Grates perácto iam die` | `luctúsque solvat ánxios,` |
| 4100 | 0 | 5 | `Ut cum profúnda cláuserit` | `te mens adóret sóbria,` |
| 4102 | 1 | 2 | `Pulsis procul torpóribus,` | `nos, morte victa, líberat,` |
| 4102 | 1 | 3 | `Nostras preces ut áudiat` | `sicut Prophétam nóvimus,` |
| 4102 | 1 | 4 | `Ut, quique sacratíssimo` | `reddat polórum sédibus,` |
| 4103 | 0 | 2 | `Præco diéi iam sonat,` | `ut álleves fastídium,` |
| 4105 | 0 | 2 | `Qui mane iunctum vésperi` | `mundi parans oríginem;` |
| 4113 | 0 | 2 | `Verúsque sol, illábere` | `diem dies illúminans,` |
| 4115 | 0 | 2 | `Firmans locum cæléstibus` | `cælum dedísti límitem,` |
| 4115 | 0 | 3 | `Infúnde nunc, piíssime,` | `terræ solum ne díssipet:` |
| 4122 | 0 | 2 | `Te mane, simul véspere,` | `noctem quiéti dédicas,` |
| 4125 | 0 | 3 | `Mentis perústæ vúlnera` | `pastúmque gratum rédderet:` |
| 4132 | 0 | 3 | `Ne terror iræ iúdicis` | `nos iunge piis grégibus,` |
| 4135 | 0 | 2 | `Quarto die qui flámmeam` | `augens decóri lúmina,` |
| 4135 | 0 | 3 | `Ut nóctibus vel lúmini` | `vagos recúrsus síderum,` |
| 4135 | 0 | 4 | `Illúmina cor hóminum,` | `signum dares notíssimum:` |
| 4142 | 1 | 2 | `Ut áuferas piácula` | `te, iuste iudex córdium,` |
| 4145 | 0 | 2 | `Demérsa lymphis ímprimens,` | `partim levas in áera,` |
| 4145 | 0 | 3 | `Largíre cunctis sérvulis,` | `divérsa répleant loca:` |
| 4145 | 0 | 4 | `Ut culpa nullum déprimat,` | `nec ferre mortis tǽdium,` |
| 4152 | 1 | 3 | `Quo, fraude quicquid dǽmonum` | `a te medélam ómnium,` |
| 4153 | 0 | 2 | `Da déxteram surgéntibus,` | `castǽque proles Vírginis,` |
| 4153 | 0 | 4 | `Manénsque nostris sénsibus` | `lux sancta nos illúminet,` |
| 4155 | 0 | 2 | `Qui magna rerum córpora,` | `reptántis et feræ genus;` |
| 4155 | 0 | 3 | `Repélle a servis tuis` | `subdens dedísti hómini:` |
| 4162 | 0 | 5 | `In quo, Redémptor, quǽsumus,` | `dies erit iudícii,` |
| 4162 | 0 | 6 | `Ut, cum preces suscéperis` | `ad déxteram nos cólloca,` |
| 4163 | 0 | 3 | `Ut mane illud últimum,` | `nox áttulit culpæ, cadat,` |
| 4200 | 0 | 2 | `Ac, mole tanta cóndita,` | `censu replésti múnerum,` |
| 4200 | 0 | 3 | `Concéde nunc mortálibus` | `ut nos levémur grátius:` |
| 4200 | 0 | 4 | `Ut cum treméndi iúdicis` | `et munerári prósperis,` |
| 4202 | 0 | 4 | `Dei virtus et sapiéntia` | `subveníret,` |
| 4202 | 1 | 2 | `Sancto quoque Spirítui:` | `Patri semper ac Fílio,` |
| 4202 | 1 | 7 | `Christi defénsi sánguine.` | `hostem spernéntes et malum,` |
| 4203 | 0 | 2 | `Ut Deus, nostri^/miserátus, omnem` | `cunctipoténtem,` |
| 4212 | 0 | 2 | `Cuius est virtus^/manifésta totum` | `pángimus hymnum:` |
| 4213 | 0 | 2 | `Tu verus mundi lúcifer,` | `dies refúsus pánditur,` |
| 4213 | 0 | 3 | `Sed toto sole clárior,` | `angústo fulget lúmine,` |
| 4222 | 1 | 2 | `Ut, pio regi^/páriter canéntes,` | `dúlciter hymnos,` |
| 4223 | 0 | 2 | `Iam cedit pallens próximo` | `natúra lucis pérpeti,` |
| 4225 | 0 | 2 | `Mentem tu castam dírige,` | `fixo distínguis órdine,` |
| 4232 | 0 | 2 | `Insere tuum,^/pétimus, amórem` | `sánguine tuo,` |
| 4233 | 0 | 2 | `Nox atra iam depéllitur,` | `certo fundásti trámite,` |
| 4233 | 0 | 5 | `Sed, sol diem dum cónficit,` | `linguam culpa non ímplicet;` |
| 4235 | 0 | 2 | `Mirántibus mortálibus` | `sed lucis omen crástinæ,` |
| 4235 | 0 | 4 | `Spe nos fidéque dívites` | `quies cupíta quǽritur,` |
| 4243 | 0 | 4 | `Ut, cum dies abscésserit` | `potus cibíque párcitas;` |
| 4245 | 0 | 4 | `Ut non fuscátis méntibus` | `ne sinas umbris ópprimi,` |
| 4252 | 0 | 2 | `Tuóque plena Spíritu,` | `nostra pavéscunt péctora,` |
| 4252 | 0 | 3 | `Ut inter actus sǽculi,` | `diris patéscant fráudibus,` |
| 4252 | 1 | 3 | `Excitáres quo nos, Christe,` | `mórtui effígiem,` |
| 4253 | 0 | 2 | `Auróra stellas iam tegit` | `præclára pandis déxtera,` |
| 4262 | 1 | 2 | `Quo nascénte suscitámur,` | `illustrátor méntium:` |
| 4262 | 1 | 3 | `Mortis quo victóres facti,` | `quo sumus perlúcidi;` |
| 4263 | 0 | 2 | `Per quem creátor ómnium` | `Christi faténtes grátiam,` |
| 5450 | 0 | 2 | `Nova véniens e cælo,` | `sicut sponsa cómite,` |
| 5450 | 0 | 3 | `Portæ nitent margarítis` | `ex auro puríssimo;` |
| 5464 | 0 | 2 | `Divíni tu consílii` | `præ creatúris ómnibus,` |
| 5464 | 0 | 3 | `Quam sic prompsísti nóbilem,` | `natúræ nostræ máximum:` |
| 5493 | 0 | 2 | `Supérna vos Ierúsalem,` | `donávit orbi Apóstolos,` |
| 5497 | 0 | 5 | `Ut, cum iudex advénerit` | `nos reddéntes virtútibus,` |
| 5509 | 0 | 2 | `Aurem benígnam prótinus` | `perdúcis ad cæléstia,` |
| 5564 | 3 | 2 | `Hunc tib>i eléctum^/fáciens minístrum` | `cármine laudes,` |
| 5585 | 1 | 3 | `Te fecit ipse próvidus` | `paci novo nos fœ́dere,` |
| 5585 | 2 | 3 | `Te fecit ipse próvidus` | `paci novo nos fœ́dere,` |
| 5620 | 0 | 2 | `Qui pascis inter lília` | `hæc vota clemens áccipe,` |
| 5630 | 0 | 2 | `Sacri tui qua nóminis` | `nostris favéto vócibus,` |
| 5641 | 0 | 2 | `Da supplicánti cœ́tui,` | `reddis perénne prǽmium,` |
| 5713 | 1 | 2 | `Da nobis, Christe Dómine,` | `illárum reddi stúdiis:` |
| 5713 | 2 | 2 | `Da nobis, Christe Dómine,` | `illárum reddi stúdiis:` |
| 5713 | 3 | 2 | `Da nobis, Christe Dómine,` | `illárum reddi stúdiis:` |
| 5716 | 1 | 2 | `Da nobis, Christe Dómine,` | `dixísti pœnæ sócio:` |
| 5716 | 2 | 2 | `Da nobis, Christe Dómine,` | `dixísti pœnæ sócio:` |
| 5716 | 3 | 2 | `Da nobis, Christe Dómine,` | `dixísti pœnæ sócio:` |
| 5719 | 1 | 2 | `Da nobis, Christe Dómine,` | `agón>i adésset último:` |
| 5719 | 2 | 2 | `Da nobis, Christe Dómine,` | `agón>i adésset último:` |
| 5719 | 3 | 2 | `Da nobis, Christe Dómine,` | `agón>i adésset último:` |
| 8101 | 102 | 3 | `Honor matris et gáudium,` | `suæ gigas Ecclésiæ:` |
| 8325 | 1 | 4 | `Mortále corpus índuit` | `Patris períret fábrica,` |
| 8503 | 0 | 6 | `Ut, quando mansiónibus` | `dat>e in supérnam pátriam,` |
| 8624 | 2 | 3 | `Ut pius mundi sator et redémptor,` | `dírige calles,` |
| 8806 | 101 | 6 | `Pater, cum Unigénito` | `clamat nostra devótio:` |
| 8810 | 2 | 5 | `Dum cæl>i inenarrábili` | `fert impetrátum próspere,` |
| 8822 | 2 | 3 | `Quem cunctus vénerans orbis adórat,` | `natus hinc Deus est córpore Christus:` |
| 8829 | 2 | 3 | `Ut pius mundi^/sator et redémptor,` | `dírige calles,` |
| 8829 | 4 | 2 | `Prophetíæ præcónia,` | `evangelísta lúminis,` |
| 8829 | 4 | 4 | `Huiúsce mort>e>m innóxiam,` | `monstráverat baptísmatis,` |
| 8908 | 2 | 2 | `Appáre, dulcis fília,` | `virgo mater mirífica,` |
| 8908 | 4 | 2 | `María, virgo régia,` | `lucísque sumus fílii;` |
| 8908 | 4 | 3 | `Tu nos, avúlso véteri,` | `quam dignitáte súbolis,` |
| 8914 | 2 | 4 | `Ut ore tibi cónsono` | `muníre nos non ábnuas,` |
| 9010 | 2 | 3 | `Victor eádem^/mente spernens iúdicem,` | `patrónum nobis,^/tibi testem sánxeras,` |
| 9015 | 4 | 2 | `Sponsíque voces áudiit:` | `se tránstulit Terésiæ,` |
| 9121 | 2 | 4 | `In domo summi príncipis` | `arca divíni séminis,` |
| 9201 | 1 | 4 | `Quem Francus, Frisóque simul, Saxóque°minístrum` | `elóquio nítidum, móribus°egrégium,` |
| 9201 | 1 | 6 | `Sicque, sacerdótis Dómini lætíssima crescit` | `sémina, fructúmque multiplicáre studet:` |
| 9208 | 104 | 2 | `Inter rubéta lílium,` | `spes nostra, cæli gáudium;` |
| 9208 | 104 | 3 | `Turris dracón>i impérvia,` | `nostro medélam vúlneri;` |
| 9228 | 1 | 2 | `Quos rex perémit ímpius,` | `gaudens sed æthra súscipit;` |

## Ausgeschlossene Stellen

Diese 6 Stellen erfüllen die Bedingung nur dem Buchstaben nach (das Zeichen unmittelbar vor `^p` ist kein Punkt, Frage- oder Ausrufezeichen), der Satz ist aber abgeschlossen, oder vor `^p` steht nur eine Rubrik.

| ID | Abschnitt | Strophe | 1. Zeile der Strophe | Letzte Zeile der vorhergehenden Strophe |
|------|-----------|---------|----------------------|------------------------------------------|
| 8121 | 2 | 5 | `Percússa quam pompam tulit!` | `cruóre restínguam focos.»` |
| 8204 | 103 | 2 | `Veni, creátor Spíritus,` | `^RUBR(S. Rabano Mauro adscriptus)^0RUBR` |
| 8429 | 1 | 3 | `Mota flagrántis^/stímulo calóris` | `pignus amóris.»` |
| 9121 | 1 | 2 | `Vallis vernans virtútum líliis,` | `^(O María.^)` |
| 9121 | 1 | 3 | `Te creávit Pater ingénitus,` | `^(O María.^)` |
| 9228 | 2 | 3 | `Quo próficit tantum nefas?` | `perfúnde cunas sánguine!»` |
