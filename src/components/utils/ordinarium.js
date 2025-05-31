import { getLocalStorage, setLocalStorage } from './localStorage.js';

const ordinariumData = {
    'laudes': {
        'dt': {
            "titel": "BENEDICTUS",
            "cant": "Gepriesen^r\u2009+\u2009^0rsei der Herr, der°Gott°Israels!^*Denn er hat sein Volk besucht und ihm Erlösung geschaffen;^per hat uns einen°starken°Retter°erweckt^*im Hause seines Knechtes David.^pSo hat er verheißen von alters her^*durch den Mund seiner heiligen Propheten.^pEr hat uns errettet vor°unsern°Feinden^*und aus der Hand aller, die uns hassen;^per hat das Erbarmen mit den Vätern an°uns°vollendet^+und an seinen heiligen Bund gedacht,^*an den Eid, den er unserm Vater Abraham geschworen hat;^per hat uns geschenkt, dass wir, aus°Feindeshand°befreit,^+ihm furchtlos dienen in°Heiligkeit°und°Gerechtigkeit^*vor seinem Angesicht all unsre Tage.^pUnd du, Kind, wirst°Prophet°des°Höchsten°heißen;^+denn du wirst dem Herrn vorangehn^*und ihm den Weg bereiten.^pDu wirst sein Volk mit der Erfahrung°des°Heils beschenken^*in der Vergebung der Sünden.^pDurch die barmherzige Liebe unseres°Gottes^*wird uns besuchen das aufstrahlende Licht aus der Höhe,^pum allen zu leuchten, die in Finsternis sitzen und°im°Schatten°des°Todes,^*und unsre Schritte zu lenken auf den Weg des Friedens.^pEhre sei dem Vater und dem Sohn^*und dem Heiligen Geist,^pwie im Anfang, so°auch°jetzt°und°alle°Zeit^*und in Ewigkeit. Amen.",
            "vu": "Vater unser im Himmel,^lgeheiligt werde dein Name.^lDein Reich komme.^lDein Wille geschehe^lwie im Himmel, so auf Erden.^lUnser tägliches Brot gib uns heute.^lUnd vergib uns unsere Schuld,^lwie auch wir vergeben unsern Schuldigern.^lUnd führe uns nicht in Versuchung,^lsondern erlöse uns von dem Bösen.",
        },
        'lat': {
            "titel": "BENEDICTUS",
            "cant": "Benedictus^r\u2009+\u2009^0rDóminus Deus Israel,^*quia visitávit et fecit redemptiónem plebi suæ;^pet eréxit cornu salútis nobis,^*in domo David púeri sui,^psicut locútus est per os sanctórum,^*qui a sǽculo sunt, prophetárum eius,^psalútem ex inimícis nostris^*et de manu ómnium, qui odérunt nos;^pad faciéndam misericórdiam cum°pátribus°nostris^*et memorári testaménti sui sancti;^piusiurándum, quod iurávit ad°Abraham°patrem°nostrum,^*datúrum se nobis,^put sine timóre, de manu inimicórum°nostrórum liberáti,^*serviámus illi,^pin sanctitáte et iustítia coram ipso^*ómnibus diébus nostris.^pEt tu, puer, prophéta°Altíssimi°vocáberis:^*præíbis enim ante fáciem Dómini paráre vias eius,^pad dandam sciéntiam salútis plebi°eius,^*in remissiónem peccatórum eórum,^pper víscera misericórdiæ Dei nostri,^*in quibus visitávit nos óriens ex alto:^pillumináre his, qui in ténebris et°in°umbra°mortis°sedent,^*ad dirigéndos pedes nostros in viam pacis.^pGlória Patri et Fílio^*et Spirítui Sancto.^pSicut erat in princípio, et°nunc°et°semper^*et in sǽcula sæculórum. Amen.",
            "vu": "Pater noster, qui es in cælis:^lsanctificétur nomen tuum;^ladvéniat regnum tuum;^lfiat volúntas tua, sicut°in°cælo°et°in°terra.^lPanem nostrum cotidiánum da°nobis°hódie;^let dimítte nobis débita nostra,^lsicut et nos dimíttimus debitóribus°nostris;^let ne nos indúcas in tentatiónem;^lsed líbera nos a malo.",
        }
    },
    'vesper': {
        'dt': {
            "titel": "MAGNIFICAT",
            "cant": "Meine Seele^r\u2009+\u2009^0rpreist°die°Größe°des°Herrn,^*und mein Geist jubelt über Gott, meinen Retter.^pDenn auf die Niedrigkeit seiner Magd hat°er°geschaut.^*Siehe, von nun an preisen mich selig alle Geschlechter!^pDenn der Mächtige hat°Großes°an°mir°getan,^*und sein Name ist heilig.^pEr erbarmt sich von°Geschlecht°zu°Geschlecht^*über alle, die ihn fürchten.^pEr vollbringt mit seinem Arm machtvolle°Taten;^*er zerstreut, die im Herzen voll Hochmut sind;^per stürzt die Mächtigen vom Thron^*und erhöht die Niedrigen.^pDie Hungernden beschenkt°er°mit°seinen°Gaben^*und lässt die Reichen leer ausgehn.^pEr nimmt sich seines°Knechtes°Israel°an^*und denkt an sein Erbarmen,^pdas er unsern Vätern verheißen hat,^*Abraham und seinen Nachkommen auf ewig.^pEhre sei dem Vater und dem Sohn^*und dem Heiligen Geist,^pwie im Anfang, so°auch°jetzt°und°alle°Zeit^*und in Ewigkeit. Amen.",
            "vu": "Vater unser im Himmel,^lgeheiligt werde dein Name.^lDein Reich komme.^lDein Wille geschehe^lwie im Himmel, so auf Erden.^lUnser tägliches Brot gib uns heute.^lUnd vergib uns unsere Schuld,^lwie auch wir vergeben unsern Schuldigern.^lUnd führe uns nicht in Versuchung,^lsondern erlöse uns von dem Bösen.",
        },
        'lat': {
            "titel": "MAGNIFICAT",
            "cant": "Magníficat^r\u2009+^0r^*ánima mea Dóminum,^pet exsultávit spíritus meus^*in Deo salvatóre meo;^pquia respéxit humilitátem°ancíllæ°suæ.^*Ecce enim ex hoc beátam me dicent omnes generatiónes,^pquia fecit mihi magna, qui°potens°est:^*et sanctum nomen eius,^pet misericórdia eius in°progénies°et°progénies^*timéntibus eum.^pFecit poténtiam in brácchio suo,^*dispérsit supérbos mente cordis sui,^pdepósuit poténtes de sede,^*et exaltávit húmiles,^pesuriéntes implévit bonis,^*et dívites dimísit inánes.^pSuscépit Israel púerum suum,^*recordátus misericórdiæ,^psicut locútus est ad patres nostros,^*Abraham et sémini eius in sǽcula.^pGlória Patri et Fílio^*et Spirítui Sancto.^pSicut erat in princípio, et°nunc°et°semper^*et in sǽcula sæculórum. Amen.",
            "vu": "Pater noster, qui es in cælis:^lsanctificétur nomen tuum;^ladvéniat regnum tuum;^lfiat volúntas tua, sicut°in°cælo°et°in°terra.^lPanem nostrum cotidiánum da°nobis°hódie;^let dimítte nobis débita nostra,^lsicut et nos dimíttimus debitóribus°nostris;^let ne nos indúcas in tentatiónem;^lsed líbera nos a malo.",
        }
    },
    'komplet': {
        'dt': {
            "titel": "NUNC DIMITTIS",
            "cant": "Nun^r\u2009+\u2009^0rlässt du, Herr, deinen Knecht,^*wie du gesagt hast, in Frieden scheiden.^pDenn meine Augen haben°das°Heil°gesehen,^*das du vor allen Völkern bereitet hast,^pein Licht, das die Heiden erleuchtet,^*und Herrlichkeit für dein Volk Israel.^pEhre sei dem Vater und dem Sohn^*und dem Heiligen Geist,^pwie im Anfang, so°auch°jetzt°und°alle°Zeit^*und in Ewigkeit. Amen."
        },
        'lat': {
            "titel": "NUNC DIMITTIS",
            "cant": "Nunc dimíttis^r\u2009+\u2009^0rservum tuum, Dómine,^*secúndum verbum tuum in pace;^pquia vidérunt óculi mei^*salutáre tuum,^pquod parásti^*ante fáciem ómnium populórum:^plumen ad revelatiónem géntium^*et glóriam plebis tuæ Israel.^pGlória Patri et Fílio^*et Spirítui Sancto.^pSicut erat in princípio, et°nunc°et°semper^*et in sǽcula sæculórum. Amen.",
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
    'advent': {
        'advResp': [
            "Schauend von ferne, gewahr’ ich Gottes Macht, die°kommt.",
            "Eilt°ihm°entgegen und°sprecht:",
            "Tu°uns°kund, ob du es°bist,",
            "der°in seinem Volk Israel herrschen wird."],
        'advVers': [
            "Ihr Kinder aus dem Volk, arm°und°reich!",
            "Du Hirte Israels, höre, der du Josef weidest wie°eine°Herde.",
            "Hebt euch, ihr uralten Pforten, dass einziehe der König der Herrlichkeit,",
            "Ehre sei dem Vater und dem Sohn und°dem°Heiligen°Geist."]
    },
    'matutin': {
        'matEinführung': "Die Feier der Osternacht tritt an die Stelle der Lesehore. Wer an dieser Feier nicht teilnimmt, soll daraus wenigstens vier Lesungen nehmen mit den zugehörigen Gesängen und Orationen. Es empfiehlt sich, die hier angebotenen Texte zu nehmen.^lDie Hore beginnt ohne Eröffnung unmittelbar mit den Lesungen.",
        'matBuch': [
            "Aus dem Buch Exodus.",
            "Aus dem Buch Ezechiel.",
            "Aus dem Brief an die Römer.",
            "Aus dem heiligen Evangelium nach Matthäus.",
        ],
        'matStelle': [
            "14,15-15,1",
            "36,16–17a.18–28",
            "6,3–11",
            "28,1–10",
        ],
        'matText': [
            "^hDie Israeliten zogen auf trockenem Boden mitten°durch°das°Meer^pDer Herr sprach zu Mose: Was schreist du zu mir? Sag den Israeliten, sie sollen aufbrechen. Und du heb deinen Stab hoch, streck deine Hand über das Meer und spalte es, damit die Israeliten auf trockenem Boden in das Meer hineinziehen können. Ich aber will das Herz der Ägypter verhärten, damit sie hinter ihnen hineinziehen. So will ich am Pharao und an seiner ganzen Streitmacht, an seinen Streitwagen und Reitern meine Herrlichkeit erweisen. Die Ägypter sollen erkennen, dass ich der Herr bin, wenn ich am Pharao, an seinen Streitwagen und Reitern meine Herrlichkeit erweise.^pDer Engel Gottes, der den Zug der Israeliten anführte, erhob sich und ging an das Ende des Zuges und die Wolkensäule vor ihnen erhob sich und trat an das Ende. Sie kam zwischen das Lager der Ägypter und das Lager der Israeliten. Die Wolke war da und Finsternis, und Blitze erhellten die Nacht. So kamen sie die ganze Nacht einander nicht näher. Mose streckte seine Hand über das Meer aus und der Herr trieb die ganze Nacht das Meer durch einen starken Ostwind fort. Er ließ das Meer austrocknen und das Wasser spaltete sich. Die Israeliten zogen auf trockenem Boden ins Meer hinein, während rechts und links von ihnen das Wasser wie eine Mauer stand. Die Ägypter setzten ihnen nach; alle Pferde des Pharao, seine Streitwagen und Reiter zogen hinter ihnen ins Meer hinein. Um die Zeit der Morgenwache blickte der Herr aus der Feuer- und Wolkensäule auf das Lager der Ägypter und brachte es in Verwirrung. Er hemmte die Räder an ihren Wagen und ließ sie nur schwer vorankommen. Da sagte der Ägypter: Ich muss vor Israel fliehen; denn Jahwe kämpft auf ihrer Seite gegen Ägypten.^pDarauf sprach der Herr zu Mose: Streck deine Hand über das Meer, damit das Wasser zurückflutet und den Ägypter, seine Wagen und Reiter, zudeckt. Mose streckte seine Hand über das Meer und gegen Morgen flutete das Meer an seinen alten Platz zurück, während die Ägypter auf der Flucht ihm entgegenliefen. So trieb der Herr die Ägypter mitten ins Meer. Das Wasser kehrte zurück und bedeckte Wagen und Reiter, die ganze Streitmacht des Pharao, die den Israeliten ins Meer nachgezogen war. Nicht ein Einziger von ihnen blieb übrig. Die Israeliten aber waren auf trockenem Boden mitten durch das Meer gezogen, während rechts und links von ihnen das Wasser wie eine Mauer stand.^pSo rettete der Herr an jenem Tag Israel aus der Hand der Ägypter. Israel sah die Ägypter tot am Strand liegen. Als Israel sah, dass der Herr mit mächtiger Hand an den Ägyptern gehandelt hatte, fürchtete das Volk den Herrn. Sie glaubten an den Herrn und an Mose, seinen Knecht.^hDas Lied des Mose^pDamals sang Mose mit den Israeliten dem Herrn dieses Lied; sie sagten:^lIch singe dem Herrn ein Lied,^ldenn er ist hoch und erhaben.^lRosse und Wagen warf er ins Meer.",
            "^hVerheißung eines neuen Lebens^pDas Wort des Herrn erging an mich: Hör zu, Menschensohn! Als Israel in seinem Land wohnte, machten sie das Land durch ihr Verhalten und ihre Taten unrein. Da goss ich meinen Zorn über sie aus, weil sie Blut vergossen im Land und das Land mit ihren Götzen befleckten. Ich zerstreute sie unter die Völker; in alle Länder wurden sie vertrieben. Nach ihrem Verhalten und nach ihren Taten habe ich sie gerichtet. Als sie aber zu den Völkern kamen, entweihten sie überall, wohin sie kamen, meinen heiligen Namen; denn man sagte von ihnen: Das ist das Volk Jahwes und doch mussten sie sein Land verlassen. Da tat mir mein heiliger Name leid, den das Haus Israel bei den Völkern entweihte, wohin es auch kam.^pDarum sag zum Haus Israel: So spricht Gott, der Herr: Nicht euretwegen handle ich, Haus Israel, sondern um meines heiligen Namens willen, den ihr bei den Völkern entweiht habt, wohin ihr auch gekommen seid. Meinen großen, bei den Völkern entweihten Namen, den ihr mitten unter ihnen entweiht habt, werde ich wieder heiligen. Und die Völker – Spruch Gottes, des Herrn – werden erkennen, dass ich der Herr bin, wenn ich mich an euch vor ihren Augen als heilig erweise. Ich hole euch heraus aus den Völkern, ich sammle euch aus allen Ländern und bringe euch in euer Land. Ich gieße reines Wasser über euch aus, dann werdet ihr rein. Ich reinige euch von aller Unreinheit und von allen euren Götzen. Ich schenke euch ein neues Herz und lege einen neuen Geist in euch. Ich nehme das Herz von Stein aus eurer Brust und gebe euch ein Herz von Fleisch. Ich lege meinen Geist in euch und bewirke, dass ihr meinen Gesetzen folgt und auf meine Gebote achtet und sie erfüllt. Dann werdet ihr in dem Land wohnen, das ich euren Vätern gab. Ihr werdet mein Volk sein und ich werde euer Gott sein.",
            "^hSterben und Lebenmit Christus^pWisst ihr nicht, dass wir alle, die wir auf Christus Jesus getauft wurden, auf seinen Tod getauft worden sind? Wir wurden mit ihm begraben durch die Taufe auf den Tod; und wie Christus durch die Herrlichkeit des Vaters von den Toten auferweckt wurde, so sollen auch wir als neue Menschen leben. Wenn wir nämlich ihm gleich geworden sind in seinem Tod, dann werden wir mit ihm auch in seiner Auferstehung vereinigt sein.^pWir wissen doch: Unser alter Mensch wurde mitgekreuzigt, damit der von der Sünde beherrschte Leib vernichtet werde und wir nicht Sklaven der Sünde bleiben. Denn wer gestorben ist, der ist frei geworden von der Sünde.^pSind wir nun mit Christus gestorben, so glauben wir, dass wir auch mit ihm leben werden. Wir wissen, dass Christus, von den Toten auferweckt, nicht mehr stirbt; der Tod hat keine Macht mehr über ihn. Denn durch sein Sterben ist er ein für alle Mal gestorben für die Sünde, sein Leben aber lebt er für Gott. So sollt auch ihr euch als Menschen begreifen, die für die Sünde tot sind, aber für Gott leben in Christus Jesus.",
            "^hDie Botschaft des Engels am leeren Grab^pNach dem Sabbat kamen in der Morgendämmerung des ersten Tages der Woche Maria aus Mágdala und die andere Maria, um nach dem Grab zu sehen. Plötzlich entstand ein gewaltiges Erdbeben; denn ein Engel des Herrn kam vom Himmel herab, trat an das Grab, wälzte den Stein weg und setzte sich darauf. Seine Gestalt leuchtete wie ein Blitz und sein Gewand war weiß wie Schnee. Die Wächter begannen vor Angst zu zittern und fielen wie tot zu Boden. Der Engel aber sagte zu den Frauen: Fürchtet euch nicht! Ich weiß, ihr sucht Jesus, den Gekreuzigten. Er ist nicht hier; denn er ist auferstanden, wie er gesagt hat. Kommt her und seht euch die Stelle an, wo er lag. Dann geht schnell zu seinen Jüngern und sagt ihnen: Er ist von den Toten auferstanden. Er geht euch voraus nach Galiläa, dort werdet ihr ihn sehen. Ich habe es euch gesagt. Sogleich verließen sie das Grab und eilten voll Furcht und großer Freude zu seinen Jüngern, um ihnen die Botschaft zu verkünden.^hDie Erscheinung Jesu vor den Frauen^pPlötzlich kam ihnen Jesus entgegen und sagte: Seid gegrüßt! Sie gingen auf ihn zu, warfen sich vor ihm nieder und umfassten seine Füße. Da sagte Jesus zu ihnen: Fürchtet euch nicht! Geht und sagt meinen Brüdern, sie sollen nach Galiläa gehen und dort werden sie mich sehen.",
        ],
        'matAnt': [
            "Ich singe dem Herrn ein Lied, denn er ist hoch und erhaben.^l^RUBROder:^0RUBR^l^rAnt.^0r°°Dem Herrn will ich singen, machtvoll hat er sich kundgetan.",
            "Wie der Hirsch lechzt nach frischem Wasser, so lechzt meine Seele, Gott, nach dir.",
            "Halleluja, halleluja, halleluja.",
            "",
        ],
        'matPsalm': [166.9, 42.9, 118.9, 0],
        'matOration': [
            "Herr, unser Gott, du hast uns durch das Licht des Neuen Bundes den Sinn der Wunder erschlossen, die du im Alten Bund gewirkt hast: Das Rote Meer ist ein Bild für das Wasser der Taufe; das befreite Volk Israel deutet hin auf das heilige Volk des Neuen Bundes. Gib, dass alle Menschen durch den Glauben an der Würde Israels teilhaben und im Heiligen Geist die Gnade der Wiedergeburt empfangen. Darum bitten wir durch Christus, unseren Herrn.",
            "Gott, du unwandelbare Kraft, du ewiges Licht, schau gütig auf deine Kirche und wirke durch sie das Heil der Menschen. So erfahre die Welt, was du von Ewigkeit her bestimmt hast: Was alt ist, wird neu, was dunkel ist, wird licht, was tot war, steht auf zum Leben, und alles wird wieder heil in dem, der der Ursprung von allem ist, in unserem Herrn Jesus Christus,^ORR",
            "",
            "",
            "Allmächtiger, ewiger Gott, am heutigen Tag hast du durch deinen Sohn den Tod besiegt und uns den Zugang zum ewigen Leben erschlossen. Darum begehen wir in Freude das Fest seiner Auferstehung. Schaffe uns neu durch deinen Geist, damit auch wir auferstehen und im Licht des Lebens wandeln. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit.",
        ],
    },
}

function getOpeningTexts(hour, localPrefLatin) {
    const opening_inv = localPrefLatin ? [
        "Dómine, lábia mea apéries.",
        "Et os meum annuntiábit laudem tuam.",
        "", ""
    ] : [
        "Herr, öffne meine Lippen.",
        "Damit mein Mund dein Lob verkünde.",
        "", ""
    ];

    const todayVisit = () => new Date().toISOString().split("T")[0]; // Format YYYY-MM-DD
    const openMyLips = () => getLocalStorage("openMyLips", "l-ERROR") || '';

    if (hour === 'invitatorium') {
        setLocalStorage("openMyLips", todayVisit())
        return opening_inv;
    }
    if (['lesehore', 'laudes'].includes(hour)
        && openMyLips() !== todayVisit()) {
        if (!openMyLips().startsWith('l') || openMyLips() === hour) {
            setLocalStorage("openMyLips", hour)
            return opening_inv;
        } else {
            setLocalStorage("openMyLips", todayVisit())
        }
    }

    if (getLocalStorage('ommitOpening') === 'true') {
        return ["", "", "", ""];
    }
    return localPrefLatin ? [
        "Deus, in adiutórium meum inténde.",
        "Dómine, ad adiuvándum me festína.",
        "Glória Patri et Fílio et Spirítui Sancto.",
        "Sicut erat in princípio, et nunc et semper, et°in°sǽcula°sæculórum.°Amen.^LÖ"
    ] : [
        "O Gott, komm mir zu Hilfe.",
        "Herr, eile, mir zu helfen.",
        "Ehre sei dem Vater und dem Sohn und°dem°Heiligen°Geist.",
        "Wie im Anfang, so auch jetzt und°alle°Zeit und°in°Ewigkeit.°Amen.^Ö"
    ];
}

function getClosingTexts(hour, localPrefLatin) {
    let closing = localPrefLatin
        ? ["Benedicámus Dómino.",
            "Deo grátias."]
        : ["Singet Lob und Preis.",
            "Dank sei Gott, dem Herrn."];
    if (['laudes', 'vesper'].includes(hour)) {
        return localPrefLatin
            ? ["Dóminus nos benedícat, et°ab°omni°malo°deféndat, et°ad°vitam°perdúcat°ætérnam.",
                "Amen."]
            : ["Der Herr segne uns, er°bewahre°uns°vor°Unheil und°führe°uns°zum°ewigen°Leben.",
                "Amen."];
    } else if (hour === 'komplet') {
        return localPrefLatin
            ? ["Noctem quiétam et finem perféctum concédat°Dóminus°omnípotens.",
                "Amen."]
            : ["Eine ruhige Nacht und ein gutes Ende gewähre°uns°der°allmächtige°Herr.",
                "Amen."];
    } else if (hour === 'invitatorium') {
        return ["", ""];
    }
    if (hour === 'lesehore') {
        closing[2] = "Wenn eine andere Hore unmittelbar angeschlossen wird, entfallen hier Oration und Abschluss; dann folgt jetzt der Hymnus der anschließenden Hore.";
    }
    return closing;
}
export const ordinarium = (texts, hour = '', localPrefLatin = '', prefSollemnity = false) => {

    if (['advent', 'matutin'].includes(texts)) {
        return ordinariumData[texts] || { advResp: '', advVers: '' }
    }

    const languageToRead = localPrefLatin ? "lat" : "dt";
    let ordinariumTexts = ordinariumData?.[hour]?.[languageToRead] || {};

    if (hour === 'lesehore' &&
        ((texts?.rank_wt > 2 && texts?.season !== 'p')
            || texts?.rank_date > 2
            || prefSollemnity)) {
        ordinariumTexts = ordinariumData?.TeDeum?.[languageToRead] || {};
    }

    const openingTexts = getOpeningTexts(hour, localPrefLatin);
    const closingTexts = getClosingTexts(hour, localPrefLatin);

    return {
        ...ordinariumTexts,
        opening: openingTexts,
        closing: closingTexts
    };
};