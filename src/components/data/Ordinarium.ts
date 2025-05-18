interface ordinarium {
  titel?: string;
  cant?: string;
  vu?: string;
}

interface ordinariumData {
  [hour: string]: {
    [language: string]: ordinarium;
  };
}

export const ordinariumData = {
  'laudes': {
    'dt': {
      "titel": "BENEDICTUS",
      "cant": "Gepriesen sei der Herr, der°Gott°Israels!^*Denn er hat sein Volk besucht und ihm Erlösung geschaffen;^per hat uns einen°starken°Retter°erweckt^*im Hause seines Knechtes David.^pSo hat er verheißen von alters her^*durch den Mund seiner heiligen Propheten.^pEr hat uns errettet vor°unsern°Feinden^*und aus der Hand aller, die uns hassen;^per hat das Erbarmen mit den Vätern an°uns°vollendet^+und an seinen heiligen Bund gedacht,^*an den Eid, den er unserm Vater Abraham geschworen hat;^per hat uns geschenkt, dass wir, aus°Feindeshand°befreit,^+ihm furchtlos dienen in°Heiligkeit°und°Gerechtigkeit^*vor seinem Angesicht all unsre Tage.^pUnd du, Kind, wirst°Prophet°des°Höchsten°heißen;^+denn du wirst dem Herrn vorangehn^*und ihm den Weg bereiten.^pDu wirst sein Volk mit der Erfahrung°des°Heils beschenken^*in der Vergebung der Sünden.^pDurch die barmherzige Liebe unseres°Gottes^*wird uns besuchen das aufstrahlende Licht aus der Höhe,^pum allen zu leuchten, die in Finsternis sitzen und°im°Schatten°des°Todes,^*und unsre Schritte zu lenken auf den Weg des Friedens.^pEhre sei dem Vater und dem Sohn^*und dem Heiligen Geist,^pwie im Anfang, so°auch°jetzt°und°alle°Zeit^*und in Ewigkeit. Amen.",
      "vu": "Vater unser im Himmel,^lgeheiligt werde dein Name.^lDein Reich komme.^lDein Wille geschehe^lwie im Himmel, so auf Erden.^lUnser tägliches Brot gib uns heute.^lUnd vergib uns unsere Schuld,^lwie auch wir vergeben unsern Schuldigern.^lUnd führe uns nicht in Versuchung,^lsondern erlöse uns von dem Bösen.",
    },
    'lat': {
      "titel": "BENEDICTUS",
      "cant": "Benedictus Dóminus Deus Israel,^*quia visitávit et fecit redemptiónem plebi suæ;^pet eréxit cornu salútis nobis,^*in domo David púeri sui,^psicut locútus est per os sanctórum,^*qui a sǽculo sunt, prophetárum eius,^psalútem ex inimícis nostris^*et de manu ómnium, qui odérunt nos;^pad faciéndam misericórdiam cum°pátribus°nostris^*et memorári testaménti sui sancti;^piusiurándum, quod iurávit ad°Abraham°patrem°nostrum,^*datúrum se nobis,^put sine timóre, de manu inimicórum°nostrórum liberáti,^*serviámus illi,^pin sanctitáte et iustítia coram ipso^*ómnibus diébus nostris.^pEt tu, puer, prophéta°Altíssimi°vocáberis:^*præíbis enim ante fáciem Dómini paráre vias eius,^pad dandam sciéntiam salútis plebi°eius,^*in remissiónem peccatórum eórum,^pper víscera misericórdiæ Dei nostri,^*in quibus visitávit nos óriens ex alto:^pillumináre his, qui in ténebris et°in°umbra°mortis°sedent,^*ad dirigéndos pedes nostros in viam pacis.^pGlória Patri et Fílio^*et Spirítui Sancto.^pSicut erat in princípio, et°nunc°et°semper^*et in sǽcula sæculórum. Amen.",
      "vu": "Pater noster, qui es in cælis:^lsanctificétur nomen tuum;^ladvéniat regnum tuum;^lfiat volúntas tua, sicut°in°cælo°et°in°terra.^lPanem nostrum cotidiánum da°nobis°hódie;^let dimítte nobis débita nostra,^lsicut et nos dimíttimus debitóribus°nostris;^let ne nos indúcas in tentatiónem;^lsed líbera nos a malo.",
    }
  },
  'vesper': {
    'dt': {
      "titel": "MAGNIFICAT",
      "cant": "Meine Seele preist°die°Größe°des°Herrn,^*und mein Geist jubelt über Gott, meinen Retter.^pDenn auf die Niedrigkeit seiner Magd hat°er°geschaut.^*Siehe, von nun an preisen mich selig alle Geschlechter!^pDenn der Mächtige hat°Großes°an°mir°getan,^*und sein Name ist heilig.^pEr erbarmt sich von°Geschlecht°zu°Geschlecht^*über alle, die ihn fürchten.^pEr vollbringt mit seinem Arm machtvolle°Taten;^*er zerstreut, die im Herzen voll Hochmut sind;^per stürzt die Mächtigen vom Thron^*und erhöht die Niedrigen.^pDie Hungernden beschenkt°er°mit°seinen°Gaben^*und lässt die Reichen leer ausgehn.^pEr nimmt sich seines°Knechtes°Israel°an^*und denkt an sein Erbarmen,^pdas er unsern Vätern verheißen hat,^*Abraham und seinen Nachkommen auf ewig.^pEhre sei dem Vater und dem Sohn^*und dem Heiligen Geist,^pwie im Anfang, so°auch°jetzt°und°alle°Zeit^*und in Ewigkeit. Amen.",
      "vu": "Vater unser im Himmel,^lgeheiligt werde dein Name.^lDein Reich komme.^lDein Wille geschehe^lwie im Himmel, so auf Erden.^lUnser tägliches Brot gib uns heute.^lUnd vergib uns unsere Schuld,^lwie auch wir vergeben unsern Schuldigern.^lUnd führe uns nicht in Versuchung,^lsondern erlöse uns von dem Bösen.",
    },
    'lat': {
      "titel": "MAGNIFICAT",
      "cant": "Magníficat^*ánima mea Dóminum,^pet exsultávit spíritus meus^*in Deo salvatóre meo;^pquia respéxit humilitátem°ancíllæ°suæ.^*Ecce enim ex hoc beátam me dicent omnes generatiónes,^pquia fecit mihi magna, qui°potens°est:^*et sanctum nomen eius,^pet misericórdia eius in°progénies°et°progénies^*timéntibus eum.^pFecit poténtiam in brácchio suo,^*dispérsit supérbos mente cordis sui,^pdepósuit poténtes de sede,^*et exaltávit húmiles,^pesuriéntes implévit bonis,^*et dívites dimísit inánes.^pSuscépit Israel púerum suum,^*recordátus misericórdiæ,^psicut locútus est ad patres nostros,^*Abraham et sémini eius in sǽcula.^pGlória Patri et Fílio^*et Spirítui Sancto.^pSicut erat in princípio, et°nunc°et°semper^*et in sǽcula sæculórum. Amen.",
      "vu": "Pater noster, qui es in cælis:^lsanctificétur nomen tuum;^ladvéniat regnum tuum;^lfiat volúntas tua, sicut°in°cælo°et°in°terra.^lPanem nostrum cotidiánum da°nobis°hódie;^let dimítte nobis débita nostra,^lsicut et nos dimíttimus debitóribus°nostris;^let ne nos indúcas in tentatiónem;^lsed líbera nos a malo.",
    }
  },
  'komplet': {
    'dt': {
      "titel": "NUNC DIMITTIS",
      "cant": "Nun lässt du, Herr, deinen Knecht,^*wie du gesagt hast, in Frieden scheiden.^pDenn meine Augen haben°das°Heil°gesehen,^*das du vor allen Völkern bereitet hast,^pein Licht, das die Heiden erleuchtet,^*und Herrlichkeit für dein Volk Israel.^pEhre sei dem Vater und dem Sohn^*und dem Heiligen Geist,^pwie im Anfang, so°auch°jetzt°und°alle°Zeit^*und in Ewigkeit. Amen."
    },
    'lat': {
      "titel": "NUNC DIMITTIS",
      "cant": "Nunc dimíttis servum tuum, Dómine,^*secúndum verbum tuum in pace;^pquia vidérunt óculi mei^*salutáre tuum,^pquod parásti^*ante fáciem ómnium populórum:^plumen ad revelatiónem géntium^*et glóriam plebis tuæ Israel.^pGlória Patri et Fílio^*et Spirítui Sancto.^pSicut erat in princípio, et°nunc°et°semper^*et in sǽcula sæculórum. Amen.",
    }
  },
  'TeDeum': {
    'dt': {
      "vu": "Dich, Gott, loben wir, dich,°Herr,°preisen°wir.^lDir, dem ewigen Vater, huldigt°das°Erdenrund.^lDir rufen die Engel alle,^ldir Himmel und Mächte insgesamt,^ldie Kerubim dir und die Serafim^lmit niemals endender Stimme zu:^lHeilig, heilig, heilig^lder Herr, der Gott der Scharen!^lVoll sind Himmel und Erde^lvon deiner hohen Herrlichkeit.^pDich preist der°glorreiche°Chor°der°Apostel;^ldich der Propheten lobwürdige Zahl;^ldich der Märtyrer leuchtendes Heer;^ldich preist über das Erdenrund^ldie heilige Kirche;^ldich, den Vater unermessbarer°Majestät;^ldeinen wahren und einzigen Sohn;^lund den Heiligen Fürsprecher Geist.^pDu König der Herrlichkeit, Christus.^lDu bist des Vaters allewiger Sohn.^lDu hast der Jungfrau Schoß nicht°verschmäht,^lbist Mensch geworden,^lden Menschen zu befreien.^lDu hast bezwungen des°Todes°Stachel^lund denen, die glauben,^ldie Reiche der Himmel aufgetan.^pDu sitzest zur Rechten Gottes^lin deines Vaters Herrlichkeit.^lAls Richter, so glauben wir,^lkehrst du einst wieder.^lDich bitten wir denn,^lkomm deinen Dienern zu Hilfe,^ldie du erlöst mit kostbarem Blut.^lIn der ewigen Herrlichkeit^lzähle uns deinen Heiligen zu.^p^(Rette dein Volk, o°Herr, und°segne°dein°Erbe;^lund führe sie und erhebe sie bis°in°Ewigkeit.^lAn jedem Tag benedeien wir dich^lund loben in Ewigkeit deinen Namen,^lja, in der ewigen Ewigkeit.^lIn Gnaden wollest du, Herr,^lan diesem Tag uns°ohne°Schuld°bewahren.^pErbarme dich unser, o°Herr, erbarme°dich°unser.^lLass über uns dein°Erbarmen°geschehn,^lwie wir gehofft auf dich.^lAuf dich, o°Herr,^lhabe ich meine Hoffnung gesetzt.^lIn Ewigkeit werde°ich°nicht°zuschanden.^)",
    },
    'lat': {
      "vu": "Te Deum laudámus: * te°Dóminum°confitémur.^lTe ætérnum Patrem, * omnis°terra°venerátur.^lTibi omnes ángeli, * tibi°cæli°et°univérsæ°potestátes:^ltibi chérubim et séraphim * incessábili°voce°proclámant:^pSanctus, * Sanctus, * Sanctus * Dóminus°Deus°Sábaoth.^lPleni sunt cæli et terra * maiestátis°glóriæ°tuæ.^pTe gloriósus * Apostolórum°chorus,^lte prophetárum * laudábilis°númerus,^lte mártyrum candidátus * laudat°exércitus.^lTe per orbem terrárum * sancta°confitétur°Ecclésia,^lPatrem * imménsæ°maiestátis;^lvenerándum tuum verum * et°únicum°Fílium;^lSanctum quoque * Paráclitum°Spíritum.^pTu rex glóriæ, * Christe.^lTu Patris * sempitérnus°es°Fílius.^lTu, ad liberándum susceptúrus°hóminem, * non°horruísti°Vírginis°úterum.^lTu, devícto mortis acúleo, * aperuísti°credéntibus°regna°cælórum.^lTu ad déxteram Dei sedes, * in°glória°Patris.^lIudex créderis * esse°ventúrus.^lTe ergo quǽsumus, tuis°fámulis°súbveni,°* quos°pretióso°sánguine°redemísti.^lÆtérna fac cum sanctis tuis * in°glória°numerári.^p^(Salvum fac pópulum tuum, Dómine, * et°bénedic°hereditáti°tuæ.^lEt rege eos, * et°extólle°illos°usque°in°ætérnum.^lPer síngulos dies * benedícimus°te;^let laudámus nomen tuum in sǽculum, * et°in°sǽculum°sǽculi.^lDignáre, Dómine, die isto * sine°peccáto°nos°custodíre.^lMiserére nostri, Dómine, * miserére°nostri.^lFiat misericórdia tua, Dómine, super°nos,°* quemádmodum°sperávimus°in°te.^lIn te, Dómine, sperávi: * non°confúndar°in°ætérnum.^)",
    }
  },
}