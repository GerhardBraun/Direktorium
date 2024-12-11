interface LiturgicalEntry {
  liturgy: string;
  notes: string;
  vig_liturgy: string;
  vig_notes: string;
  deceased: string;
  deceased_more: string;
  prayerTexts: string[] | null;
}

interface LiturgicalData {
  [year: number]: {
    [month: number]: {
      [day: number]: LiturgicalEntry;
    };
  };
}

export const liturgicalData = {
  "2024": {
    "1": {
      "1": {
        "liturgy": "¥fMo¥0f¥a¥tNeujahr – Oktavtag von Weihnachten¥l¥qhHochfest der Gottesmutter Maria¥0f¥lNamensgebung des Herrn – ¥fWeltfriedenstag¥0f¥lTe Deum – Kl.°Hore: eig Ant,°ErgPs¥pw¥t¥fMs eig¥0f, Gl,°Cr, MarPräf I oder WeihnPräf, in°den°Hg°I¥_III eig°Einschub wie Weihn, FSS:°MB°554°oder°536°oder°548/I°– 2.°Vp°vom°H°–°2.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥rLeerzeichen mit FV Fz_Lekt¥0r¥p¥sHeute ist der ¥f57. Welttag des Friedens¥0f (Papstwort zum Welttag, Arbeitshilfe, Fürbitten).¥p¥s¥fEin vollkommener Ablass¥0f (s.°o.°Kap.°I.C.10.) kann unter den üblichen Bedingungen (Beichte, entschlossene Abkehr von jeder Sünde, Kommunionempfang, Gebet in den Anliegen des Papstes) gewonnen werden, wenn man heute in einer Kirche oder Kapelle andächtig dem ¥ffeierlichen Gesang des Hymnus „Veni, Creator Spiritus“¥0f (GL°341) bzw. ¥f„Komm, Heil’ger Geist“¥0f (GL°342) beiwohnt.¥p¥sDas ¥fMessformular „Zum Jahresbeginn“¥0f (MB°1061/²1088, Nr.°24) kann am heutigen Hochfest und an den Wochentagen der Weihnachtszeit nicht genommen werden (s.°o.°Kap.°III.D.3.), erst an den Wochentagen der Zeit im Jahreskreis ab dem 8. Jan.¥p¥sAm Schluss der Komplet steht in der Weihnachtszeit die Marianische Antiphon ¥f„Alma Redemptoris Mater“¥0f (GL°666¥v,1¥0v) bzw. ¥f„Erhabene Mutter des Erlösers“¥0f (vgl.°GL°530).¥p",
        "deceased": "2024 †¥tErwin°Bednarczyk, Pfr.i.R., Duisburg¥p",
        "deceased_more": "1958 †¥tOtto°Buch, Pfarrer°in°Rustenfelde¥p2024 †¥tErwin°Bednarczyk, Pfr.i.R., Duisburg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "2": {
        "liturgy": "¥fDi¥0f¥t¥fHl. Basilius der Große u. hl. Gregor von Nazianz¥0f, Bi, Kl, ¥fGed¥0f – Psalt:°I.°Woche°–°Off°vom°Ged,°BuM°eig¥pw¥t¥fMs von den Hll¥0f, WeihnPräf¥p",
        "notes": "",
        "deceased": "1999 †¥tP.°Reinhold°Ohlert°OFMCap, Pfr.i.R., GR, Münster¥p2000 †¥tJosef°Köhler°(Leitmeritz/Fulda), Pfr.i.R., Neuhof¥p2001 †¥tFriedrich°Bromm, Pfr.i.R., Amöneburg¥-Erfurtshausen¥p2004 †¥tP.°Josef°Blumör°OMI, GR, Hünfeld¥p",
        "deceased_more": "1988 †¥tDDr.°Karl°Biba, Dr.°theol.°et°phil., OStR°i.R., Msgr., Horbach¥p1989 †¥tJosef°Hambach, Pfr.i.R., Lehnerz¥p1999 †¥tP.°Reinhold°Ohlert°OFMCap, Pfr.i.R., GR, Münster¥p2000 †¥tJosef°Köhler°(Leitmeritz/Fulda), Pfr.i.R., Neuhof¥p2001 †¥tFriedrich°Bromm, Pfr.i.R., Amöneburg¥-Erfurtshausen¥p2004 †¥tP.°Josef°Blumör°OMI, GR, Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "3": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag i.°d.°Weihnachtszeit¥0f¥pw¥tOder ¥fHeiligster Name Jesu¥0f, ¥fGed¥0f¥be¥w¥fMs¥0f:°HR°/°MBErg²°5f°/°Tg:°MBkl°1233°/ Votivmesse°MB°1096/²1128f°– ¥fML°IV°ᴺ444¥0f¥l¥vL:¥0v¥tPhil°2¥v,6¥_11¥0v¥t¥fML°VIII¥0f°372¥l¥vAPs:¥0v¥tPs°8¥v,4¥_5.6¥_7.8¥_9¥0v°(R:°¥v2ab¥0v)¥t350¥l¥vREv:¥0v¥tMt°1¥v,21¥0v¥t–––¥l¥vEv:¥0v¥tLk°2¥v,21¥_24¥0v¥tvgl. 432¥0w¥pw¥t¥fMs¥0f vom 3. Jan. (Tg°vor Ersch) oder vom°Ged, WeihnPräf¥p",
        "notes": "",
        "deceased": "2017 †¥tJosef°Mönninger, Prälat, Domkapitular°i.R., Ehrendomkapitular°von°Plymouth/GB,°Fulda¥p",
        "deceased_more": "1958 †¥tRichard°Feussner, Pfarrer°in°Blankenau¥p1960 †¥tEmil°Ruez, Dechant, Pfarrer°in°Großenlüder¥p1969 †¥tOskar°Diel,°Ehrendechant,°Stadtpfarrer°in°Hanau¥p1979 †¥tJosef°Suchanek°(Olmütz), Pfarrer°in°Mottgers¥p2017 †¥tJosef°Mönninger, Prälat, Domkapitular°i.R., Ehrendomkapitular°von°Plymouth/GB,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "4": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag i.°d.°Weihnachtszeit¥0f – ¥fPriesterdonnerstag¥0f¥pw¥tOder ggf.°¥fMs um Priesterberufe¥0f ¥w(MB°1035f/²1057),¥lL°und°Ev vom°Tag oder aus°den°AuswL¥0w¥pw¥t¥fMs¥0f vom 4. Jan. (Tg°vor Ersch) oder ggf.°Votivmesse, WeihnPräf¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Priesterdonnerstag (monatl. Gebetstag für geistliche Berufe):¥0f Die Votivmesse ist nur bedingt erlaubt (s.°o.°Kap.°III.D.3.). – Fürbitte(n) um Priesterberufungen. – Thema: „Was sucht ihr?“ (Joh°1¥v,38¥0v). Intention: junge Menschen, die ihre Berufung suchen.¥p",
        "deceased": "",
        "deceased_more": "1940 †¥tKaspar°Schulte, Pfarrer°in°Rudolstadt¥p1952 †¥tJohannes°Fischbach°(Prag), Pfr.i.R., Zierenberg¥p1958 †¥tOtto°Hellweg, Pfr.i.R., Erfurt¥p1963 †¥tKarl°Medler, Dechant, Pfarrer°in°Hünfeld¥p1969 †¥tEduard°Preiß°(Leitmeritz), Pfarrer°in°Niedersachswerfen¥p1974 †¥tP.°Leo°Rodenbeck°SDB, Pfarrer°in°Sannerz¥p1974 †¥tWilhelm°Wandzioch°(Breslau), Dechant, Pfarrer°in°Bad°Frankenhausen¥p1976 †¥tP.°Franz°Pietsch°OMI, Pfr.i.R., GR, Bad°Frankenhausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "5": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag i.°d.°Weihnachtszeit¥0f – ¥fHerz¥-Jesu¥-Freitag¥0f¥pw¥tOder ¥fMs vom hl. Johannes Nepomuk Neumann¥0f, Bi, Glb, ¥fGed¥0f¥be¥w¥fMs¥0f:°HR°/°MBkl°1234°/°Com°Ht°Nr.°1¥_4°od.°10¥_12¥l¥vL:¥0v¥t1°Kor°9¥v,16¥_19.22¥_23¥0v¥tML°IV°386/ᴺ386¥l¥vAPs:¥0v¥tPs°96¥v,1¥_2.3+7.8+10¥0v°(R:°vgl.°¥v3a¥0v)¥t439/ᴺ446¥l¥vREv+Ev:¥0v°Joh°10¥v,11¥_16¥0v¥t385/ᴺ385¥0w¥pw¥tOder ggf.°¥fVotivmesse vom hl. Herzen Jesu¥0f¥l¥w(MB°1100f/²1132f oder 257ff), Herz¥-Jesu¥-Präf,¥lL°und°Ev°vom°Tag oder aus°den°AuswL¥0w¥pw¥t¥fMs¥0f vom 5. Jan. (Tg°vor Ersch) oder vom°Hl, WeihnPräf, oder ggf.°Votivmesse,°Herz¥-Jesu¥-Präf¥pw¥t¥kabends:¥0k ggf.°¥fVorabendmesse°vom°H¥0f – ¥f1.°Vp°vom°folg°H¥0f (StB°I°283)°–°¥f1.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum°Herz¥-Jesu¥-Fr:¥0f Die Votivmesse ist nur bedingt erlaubt (s.°o.°Kap.°III.D.3.), dann mit Herz¥-Jesu¥-Präfation.¥p",
        "deceased": "1997 †¥tDr.°Wolfgang°Klemp°(Schneidemühl/Fulda), Pfr.i.R., Apostol.°Protonotar,°Apost.°Visitator für Priester und Gläubige aus der Freien Prälatur°Schneidemühl,°Fulda¥p2000 †¥tJosef°Uhl, Pfr.i.R., GR, Eichenzell¥-Rönshausen¥p2002 †¥tElmar°Löhr, Pfarrer°in°Eschwege¥p",
        "deceased_more": "1930 †¥tJohannes°Pfeifer, Pfr.i.R., Wirtheim¥p1950 †¥tWilhelm°Walter°(Leitmeritz),°Seelsorger°in°Dittlofrod¥p1982 †¥tDr.°Johannes°Tenzler°(Breslau), Prof., Fulda¥p1997 †¥tDr.°Wolfgang°Klemp°(Schneidemühl/Fulda), Pfr.i.R., Apostol.°Protonotar,°Apost.°Visitator für Priester und Gläubige aus der Freien Prälatur°Schneidemühl,°Fulda¥p2000 †¥tJosef°Uhl, Pfr.i.R., GR, Eichenzell¥-Rönshausen¥p2002 †¥tElmar°Löhr, Pfarrer°in°Eschwege¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "6": {
        "liturgy": "¥fSa¥0f¥a¥t¥qhErscheinung des Herrn¥0f, ¥fHochfest¥0f – ¥fHerz¥-Mariä¥-Samstag¥0f¥lLektionar°zum°StB°II/1,°185 – Te°Deum – Kl.°Hore:°eig Ant°und°Ps¥pw¥t¥fMs eig¥0f, Gl,°Cr, eig°Präf, in°den Hg°I¥_III eig°Einschub, FSS:°MB°538 – ¥fAbendmessen°vom°H¥0f°– ¥f2.°Vp°vom°H¥0f°–°¥f2.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fDas Hochfest der Erscheinung des Herrn ist im Bistum Fulda kirchlich gebotener Feiertag¥0f. Es besteht ¥fApplikations- sowie Sonn- und Feiertagspflicht¥0f (s.°o.°Kap.°I.C.1.).¥p¥s¥fSegnungen zum Hochfest der Erscheinung des Herrn¥0f s.°Benediktionale°Nr.°5,°S.°41ff.¥p¥sHeute kann vor dem Schlusssegen die ¥ffeierliche Ankündigung der kirchlichen Hochfeste des neuen Jahres¥0f gesungen werden (siehe Hinweis auf der Homepage des Liturgischen Institutes Trier, www.liturgie.de).¥p¥s¥fDie Vorabendmesse zum Fest der Taufe des Herrn kann heute nicht gefeiert werden¥0f, da das Hochfest der Erscheinung des Herrn in der Rangordnung der liturgischen Tage höher steht als das Fest der Taufe des Herrn (s.°o.°Kap.°VII°A.°2.°I°2.°und°II°5.). ¥fHeutige Abendmessen sind Messfeiern vom Hochfest.¥0f Dies bitte in den Gottesdienstordnungen so veröffentlichen.¥p¥s¥fZum Herz¥-Mariä¥-Sa:¥0f Die Votivmesse ist nicht erlaubt.¥p",
        "deceased": "2016 †¥tRudolf°Bergmann, Pfr.i.R., GR, Zierenberg¥p",
        "deceased_more": "1962 †¥tAloys°Falkenhan, Dechant, Pfarrer°in°Eschwege¥p1962 †¥tP.°Bonifatius°Hertel°OFMCap,°Pfarrkurat°in°Weißensee/Thür.¥p1971 †¥tP.°Heinrich°Eidens°SVD,°Prosynodalrichter°in°Fulda¥p2016 †¥tRudolf°Bergmann, Pfr.i.R., GR, Zierenberg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "7": {
        "liturgy": "¥fSo¥0f¥a¥t¥qfTaufe des Herrn¥0f, ¥fFest¥0f¥l¥fOff¥0f: StB I 327 – Te°Deum – Kl.°Hore:°eig°Ant, Ps°vom°So°der°II.°Woche¥pw¥t¥fMs eig¥0f (MB°72/²70), Gl,°Cr, eig°Präf, FSS:°MB°548¥_553 – ¥wLL°und°Ev:°ML°B/II°59¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sDie ¥fGedenktage des hl. Valentin¥0f und ¥fdes hl. Raimund von Penyafort¥0f entfallen in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1935 †¥tHermann°Lovis, Pfarrer°in°Kleinbartloff¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "8": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°im°Jahreskreis¥lPsalt:°I.°Woche¥pw¥tOder ¥fhl. Severin¥0f, Mönch in Norikum, ¥fGed¥0f°(RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°282;°Gg°301;°Sg°276¥0w¥p",
        "notes": "¥fEnde der Weihnachtszeit¥0f¥j¥fZEIT „IM JAHRESKREIS“¥0f (1. Teil)¥lvom°Montag°nach°dem°Fest°der°Taufe°des°Herrn bis°zum°Dienstag°vor°dem°Aschermittwoch¥jPerikopen an den Wochentagen: ¥fML V, Jahr II¥0f¥p¥fStB¥0f und ¥fLitHor¥0f: ¥fBand III¥0f¥p¥fLektionar zum StB II/4¥0f¥p¥p¥fHinweise:¥0f¥p¥s¥fIn der Zeit im Jahreskreis¥0f stehen an jenen Wochentagen, auf die kein Hochfest, Fest oder gebotener Gedenktag fällt, ¥ffür die Messfeier folgende Texte zur Wahl¥0f:¥p–°¥fMesse vom Tag¥0f: die ¥f34 Messformulare der Sonntage¥0f im Jkr., ¥fWochentagsmessen¥0f (MB°275¥_304), ¥fTagesgebete¥0f (MB°305¥_320), ¥fGabengebete¥0f (MB°348¥_351), ¥fSchlussgebete¥0f (MB°525¥_529) zur Auswahl. ¥fVorschläge zur Auswahl¥0f von Tagesgebet°(Tg), Gabengebet°(Gg) und Schlussgebet°(Sg), die sich am Evangelium des Tages orientieren, sind bei der „Messe nach Wahl“ im Kalendarium jeweils angegeben (vgl. Werkbuch zum Gotteslob VIII/2: Die Wochentage während des Jahres, 1978). Die Seitenzahl bezieht sich auf das MB°II°1975 und MB°II,°2.°Auflage°1988.¥p–°¥fMarien-Messen¥0f (MBm°187¥_297), (vgl.°AEM°316c, MBm, Past.°Einf.°37), vor allem das Gedächtnis Mariens am Samstag; ¥p–°¥fMessen eines/einer Heiligen¥0f, dessen/deren Gedächtnis vorgesehen oder der/die an diesem Tag im Martyrologium Romanum verzeichnet ist (vgl.°AEM°316c); ¥p–°¥fMessen für ein besonderes Anliegen oder Votivmessen¥0f – bei echter Notwendigkeit oder aus pastoraler Erfordernis auch an gebotenen Ged (AEM°333);¥p–°eine ¥fBegräbnismesse¥0f ist an allen Tagen möglich, außer an den gebotenen Hochfesten (AEM°336);¥p–°¥fMessen für Verstorbene nach Eintreffen der Todesnachricht und am ersten Jahrestag¥0f – auch an gebotenen Ged möglich (AEM°337); ¥p–°¥fMessen für bestimmte Verstorbene¥0f (sog. „tägliche Totenmesse“, AEM°337).¥p¥sAn den kommenden Wochentagen kann n.B. das ¥fMessformular „Zum Jahresbeginn“¥0f (MB°1061/²1088,°Nr.°24) genommen werden.¥p¥sAm Schluss der Komplet steht in der Zeit im Jahreskreis die Marianische Antiphon ¥f„Salve Regina“¥0f (GL 666¥v,4¥0v) bzw. ¥f„Sei gegrüßt, o Königin“¥0f (vgl.°GL°536) oder eine andere Marianische Antiphon. Nur die Ant „Regina caeli“ bzw. „O¥°Himmelskönigin, frohlocke“ ist der Osterzeit vorbehalten.¥p",
        "deceased": "1997 †¥tOtto°Rachhals,°Diakon,°Maintal¥-Bischofsheim¥p2000 †¥tEmil°Sapletal°(Olmütz/Fulda), Pfr.i.R., GR, Bad°Hersfeld¥p",
        "deceased_more": "1931 †¥tDDr.°Franz°Josef°Müller, Dr.°iur.°utr., Prälat, Domkapitular,°Generalvikar,°Fulda¥r?¥0r¥p1948 †¥tHermann°Kühn, Pfarrer°in°Ecklingerode¥p1956 †¥tRaimund°Vogel°(Leitmeritz), Pfr.i.R., Bad°Orb¥p1988 †¥tNorbert°Bartsch°(Prag/Glatz), Pfr.i.R., Ringleben/Kyffhäuser¥p1997 †¥tOtto°Rachhals,°Diakon,°Maintal¥-Bischofsheim¥p2000 †¥tEmil°Sapletal°(Olmütz/Fulda), Pfr.i.R., GR, Bad°Hersfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "9": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°306,3;°Gg°286;°Sg°288¥0w¥p",
        "notes": "",
        "deceased": "1994 †¥tWolfgang°Döring, Pfr.i.R., GR, Treffurt¥p1999 †¥tP.°Bernward°Ziwes°OFM, GR, Ulm¥p",
        "deceased_more": "1965 †¥tAlfons°Riedel°(Breslau), Pfr.i.R., Spahl/Rhön¥p1974 †¥tAnton°Müller, Pfarrer°in°Magdlos¥p1994 †¥tWolfgang°Döring, Pfr.i.R., GR, Treffurt¥p1999 †¥tP.°Bernward°Ziwes°OFM, GR, Ulm¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "10": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°11/²9;°Gg+Sg°280 ¥0w¥p",
        "notes": "",
        "deceased": "1996 †¥tRichard°Burkard, Pfr.i.R., GR, Waltershausen¥-Winterstein¥p2002 †¥tFranz°Czotscher°(Budweis/Fulda), Pfr.i.R., GR, Stadtallendorf¥p",
        "deceased_more": "1929 †¥tHermann°Malkmus, Pfr.i.R., Gersfeld¥p1988 †¥tJohannes°Arnau°(Danzig), Pfr.i.R., Deuna/Eichsfeld¥p1996 †¥tRichard°Burkard, Pfr.i.R., GR, Waltershausen¥-Winterstein¥p2002 †¥tFranz°Czotscher°(Budweis/Fulda), Pfr.i.R., GR, Stadtallendorf¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "11": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°316,30;°Gg+Sg°286¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1960 †¥tJoseph°Scholle, Pfr.i.R., Bad°Sassendorf¥p1980 †¥tGottfried°Köhler, Pfr.i.R., GR, Diedorf¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "12": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°315,27;°Gg+Sg°302f¥0w¥p",
        "notes": "",
        "deceased": "2018 †¥tWilhelm°Acker, Pfr.i.R., Großkrotzenburg¥p2023 †¥tReinhold°Hartmann, Pfr.i.R., GR, Fulda¥p",
        "deceased_more": "1948 †¥tKarl°Wess, Pfarrer°in°Schröck¥p1956 †¥tGregor°Wiesner°(Breslau), Pfarrer°in°Berga/Elster¥p1959 †¥tHeinrich°Helbig, Pfr.i.R., Mengelrode¥p1973 †¥tEmil°Goldbach, Pfr.i.R., GR, Ehrendechant,°Fulda¥p2018 †¥tWilhelm°Acker, Pfr.i.R., Großkrotzenburg¥p2023 †¥tReinhold°Hartmann, Pfr.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "13": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Hilarius¥0f, Bi, Kl, ¥fGed¥0f¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°319,39;°Gg+Sg°278¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "2002 †¥tKarl°Eufinger, Pfr.i.R., GR, Kirchhain¥p2003 †¥tKlemens°Zelazny°(Schneidemühl/Fulda), Pfr.i.R., Konsistorialrat,°Fulda¥p",
        "deceased_more": "1957 †¥tHeinrich°Dicke, Pfr.i.R., Dipperz¥p1963 †¥tAndreas°Führ, Pfr.i.R., Liebhards/Krs.°Fulda¥p1979 †¥tAloys°Grösch,°Superior°i.R., Msgr., GR, Fulda¥p1980 †¥tJohannes°Schulz°(Schneidemühl),°StR°i.R., GR, Bad°Soden¥p2002 †¥tKarl°Eufinger, Pfr.i.R., GR, Kirchhain¥p2003 †¥tKlemens°Zelazny°(Schneidemühl/Fulda), Pfr.i.R., Konsistorialrat,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "14": {
        "liturgy": "¥fSo¥0f¥a¥t¥f2. Sonntag im Jahreskreis¥0f¥lPsalt:°II.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1942 †¥tAugust°Ebel, Pfr.i.R., Neustadt¥p1942 †¥tAnton°Ley, Dechant, Pfarrer°in°Hünfeld¥p1942 †¥tKonrad°Trageser, Pfarrer°in°Marbach, gestorben°im°KZ°Dachau¥p1964 †¥tRichard°Koch, Dechant, Pfarrer°in°Birkungen/Eichsfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "15": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°305,2;°Gg°348,2;°Sg°529,15¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute ist der 54. Geburtstag von Bischof Michael.¥p",
        "deceased": "",
        "deceased_more": "1943 †¥tAloys°Bilz, Pfarrer°in°Hosenfeld¥p1951 †¥tJoseph°Wagner, Pfr.i.R., Martinfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "16": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°270f¥0w¥p",
        "notes": "",
        "deceased": "1998 †¥tP.°Urban°Westerwoudt°OFMCap,°Bad°Mergentheim¥p2008 †¥tDr.°Lothar°Rudolph°(Paderborn/Fulda), Pfr.i.R., Fulda¥p",
        "deceased_more": "1975 †¥tAndreas°Portner°(Prag), Pfr.i.R., Dipperz¥-Armenhof¥p1992 †¥tP.°Florentin°Vogt°OFM, Pfr.i.R., GR, Hülfensberg¥p1998 †¥tP.°Urban°Westerwoudt°OFMCap,°Bad°Mergentheim¥p2008 †¥tDr.°Lothar°Rudolph°(Paderborn/Fulda), Pfr.i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "17": {
        "liturgy": "¥fMi¥0f¥t¥fHl. Antonius¥0f, Mönchsvater, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "1981 †¥t¥fHugo°Aufderbeck¥0f,°Bischof,°Apostol.°Administrator°in°Erfurt¥p2002 †¥tWilhelm°Eberl, Pfr.i.R., OStR°i.K.i.R., Kassel¥p2017 †¥tAlois°Krause°(Limburg), Pfr.i.R., Fulda¥p2021 †¥tBernhard°Möller, Pfr.i.R., GR, Hünfeld¥p",
        "deceased_more": "1933 †¥tKarl°Alexander°Ebert,°Konviktassistent°in°Fulda¥p1981 †¥t¥fHugo°Aufderbeck¥0f,°Bischof,°Apostol.°Administrator°in°Erfurt¥p2002 †¥tWilhelm°Eberl, Pfr.i.R., OStR°i.K.i.R., Kassel¥p2017 †¥tAlois°Krause°(Limburg), Pfr.i.R., Fulda¥p2021 †¥tBernhard°Möller, Pfr.i.R., GR, Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "18": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°315,29;°Gg°349,4;°Sg°525,2¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sIn der ¥fWeltgebetswoche für die Einheit der Christen vom 18. bis 25. Januar¥0f unter dem ¥fThema „Du sollst den Herrn, deinen Gott, lieben und deinen Nächsten wie dich selbst!“¥0f (Lk 10¥v,27¥0v) kann an beliebigen Wochentagen, auch am Sonntag, eine ¥fVotivmesse um die Einheit der Christen¥0f gefeiert werden. Formular: Ms für besondere Anliegen Nr.°13°A,°B°oder°C (MB°1040¥_1047/²1062¥_1069), am Sonntag mit Gl, eig°Präf, Farbe:°grün. LL°und°Evv:°ML°VIII°110¥_130. ¥fIn den Fürbitten möge täglich um die Einheit aller Christen gebetet werden.¥0f¥p",
        "deceased": "",
        "deceased_more": "1938 †¥tHeinrich°Fiege, Pfarrer°in°Mittelkalbach¥p1948 †¥tGeorg°Hauptfleisch°(Breslau), Pfr.i.R., Schwarzbach¥p1950 †¥tHeinrich°Funke, Pfr.i.R., Bochum¥-Riemke¥p1966 †¥tJoseph°Wand, Pfarrer°in°Silberhausen/Eichsfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "19": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°1047/²1069;°Gg+Sg°1039f/²1061f¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "20": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°im°Jahreskreis¥pr¥tOder ¥fhl. Fabian¥0f, Pp, Märt, ¥fGed¥0f¥pr¥tOder ¥fhl. Sebastian¥0f, Märt, ¥fGed¥0f¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°305,2;°Gg°348,3;°Sg°131/²129¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1967 †¥tGerhard°Matheis°(Breslau), Pfr.i.R., Lütter¥p1971 †¥tEmil°Schwalbach, Pfarrer°in°Geismar/Rhön¥p1977 †¥tP.°Petrus°Pollak°OT, Pfarrer°in°Wetter¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "21": {
        "liturgy": "¥fSo¥0f¥a¥t¥f3. Sonntag im Jahreskreis¥0f¥lPsalt:°III.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥pg¥tOder ¥fVotivmesse um die Einheit der Christen¥0f, MB°1040¥_1047/²1062¥_1069, Gl,°Cr, ¥fbes.°Fürbitten¥0f, eig°Präf, FSS, LL°und°Ev°vom°So oder aus den AuswL ML°VIII°110–130¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fHeute kann die Votivmesse für die Einheit der Christen gefeiert werden.¥0f¥p¥sDie ¥fGedenktage des hl. Meinrad¥0f und ¥fder hl. Agnes¥0f entfallen in diesem Jahr.¥p",
        "deceased": "2002 †¥tP. Dr.°Leonard°Oreč°OFM, GR, Zagreb/Kroatien¥p2003 †¥tGodwin°Sixtus°Ekuojo°Onuh°(Idah/Nigeria),°Fulda¥p2004 †¥tAlois°Bilo, Pfr.i.R., GR, Fulda¥p2004 †¥tP. Drs.°Johannes°Gerardus°Donkers°OSC, Pfarrer°in°Trendelburg¥p2010 †¥tNorbert°Waclawek°(Breslau/Fulda), Pfr.i.R., Msgr., Fulda¥p",
        "deceased_more": "1940 †¥tWilhelm°Rose, Pfarrer°in°Hausen¥p1946 †¥tJoseph°Sauer, Dechant, Pfarrer°in°Kirchhasel¥p1970 †¥tJohann°Urner°(Königgrätz), Pfr.i.R., GR, Neuhof¥p1973 †¥tErich°Hansmann, Pfarrer°in°Pfaffschwende/Eichsfeld¥p1976 †¥tMaximilian°Völkl°(Leitmeritz), Pfr.i.R., Mackenzell¥p1978 †¥tFerdinand°von°Prondzynski°(Breslau), Pfr.i.R., Eisenach¥p1985 †¥tMedard°Knauf, Pfr.i.R., Burghaun¥p2002 †¥tP. Dr.°Leonard°Oreč°OFM, GR, Zagreb/Kroatien¥p2003 †¥tGodwin°Sixtus°Ekuojo°Onuh°(Idah/Nigeria),°Fulda¥p2004 †¥tAlois°Bilo, Pfr.i.R., GR, Fulda¥p2004 †¥tP. Drs.°Johannes°Gerardus°Donkers°OSC, Pfarrer°in°Trendelburg¥p2010 †¥tNorbert°Waclawek°(Breslau/Fulda), Pfr.i.R., Msgr., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "22": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°im°Jahreskreis¥pr¥tOder ¥fhl. Vinzenz¥0f, Diak, Märt, ¥fGed¥0f¥pw¥tOder ¥fMs vom hl. Vinzenz Pallotti¥0f, Pr,°Ordgr¥be¥w¥fMs¥0f:°HR⁵¥l¥vL:¥0v¥tJes°58¥v,6¥_11¥0v¥t¥fML°VI¥0f°548/ᴺ539¥l¥voder¥0v¥t1°Kor°13¥v,1¥_8.13¥0v¥tvgl. 551/ᴺ542¥l¥vAPs:¥0v¥tPs°22¥v,23¥_24.26¥_27.28¥_29¥0v°(R:°¥v23a¥0v)¥t¥fML°B/II¥0f°°°°°°°°°242¥l¥vREv:¥0v¥tvgl.°Jes°52¥v,7¥0v¥t¥fML°VI¥0f°609/ᴺ606¥l¥vEv:¥0v¥tLk°10¥v,1¥_9¥0v¥t663/ᴺ664¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°1104ff/²1136ff¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1963 †¥tPaul°Sauerbier, Pfarrer°in°Künzell¥p1986 †¥tP.°Cyrill°Eisermann°OFM,°Kaplan°in°Kirchhain¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "23": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°im°Jahreskreis¥pw¥tOder ¥fsel. Heinrich Seuse¥0f, Ordpr, Myst, ¥fGed¥0f°(RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°197/²195;°Gg°196/²194;°Sg°527,7¥0w¥p",
        "notes": "",
        "deceased": "2023 †¥tHermann°Weiser, Pfr.i.R., Kassel¥p",
        "deceased_more": "1945 †¥tDDr.°Gregor°Richter, Prof., Dr.°theol.°et°phil., Msgr., Domkapitular,°Fulda¥p1949 †¥tAugustin°Eckhardt, Pfr.i.R., Beuren/Eichsfeld¥p2023 †¥tHermann°Weiser, Pfr.i.R., Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "24": {
        "liturgy": "¥fMi¥0f¥t¥fHl. Franz von Sales¥0f, Bi, Ordgr, Kl, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1954 †¥tRobert°Schade, Dechant, Pfarrer°in°Großbartloff¥p1981 †¥tFranz°Apel, Pfr.i.R., Kirchgandern¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "25": {
        "liturgy": "¥fDo¥0f¥t¥qfBekehrung des hl. Apostels Paulus¥0f, ¥fFest¥0f¥lTe Deum – Kl.°Hore: eig Ant, Ps vom°Wt¥pw¥t¥fMs eig¥0f, Gl, ApPräf I, FSS:°MB°556 oder 558¥p",
        "notes": "¥fHinweis:¥0f ¥sZum heutigen Fest passen die ¥fLieder GL°275¥0f (auch nach den Melodien GL°484 oder GL°81 singbar) ¥fund GL°873¥v,3+4¥0v¥0f (auch nach den Melodien von GL°280 oder GL°872 singbar). Für den Gesang des Hymnus aus dem Stundenbuch als Gemeindelied steht unter www.direktorium.bistum-fulda.de ein Liedblatt zum Download bereit.¥p",
        "deceased": "2009 †¥tJan°Karol°Kozaczka°(Danzig/Fulda), Pfarrer°in°Buttlar¥p2016 †¥tP.°Josef°Friedrich°Otto°OMI,°Hünfeld¥p",
        "deceased_more": "1932 †¥tFranz°Atzert, Dechant, Pfarrer°in°Romsthal¥p1969 †¥tFelix°Vogelsang°(Schneidemühl), Pfr.i.R., Hünfeld¥p1973 †¥tJosef°Schrimpf, Pfr.i.R., Gersfeld¥p1991 †¥tClemens°Reinhardt, Pfr.i.R., Kella¥p2009 †¥tJan°Karol°Kozaczka°(Danzig/Fulda), Pfarrer°in°Buttlar¥p2016 †¥tP.°Josef°Friedrich°Otto°OMI,°Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "26": {
        "liturgy": "¥fFr¥0f¥t¥fHl. Timotheus und hl.°Titus¥0f, Bi, ¥fGed¥0f¥pw¥t¥fMs von den Hll¥0f, ¥feig°L¥0f – Off°vom°Ged,°BuM°eig¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1932 †¥tEduard°Braun, Dechant, Pfarrer°in°Hanau¥p1938 †¥tDr.°Franz°Anton°Rehrmann, Pfr.i.R., Lenne/Sauerland¥p1986 †¥tJosef°Fröhlich, Pfr.i.R., Fulda¥p1991 †¥tOtmar°Neubauer, Pfarrer°in°Nentershausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "27": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Angela Merici¥0f, Jgfr, Ordgr, ¥fGed¥0f¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg+Gg°1078/²1108;°Sg°1080/²1110¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fHeute¥0f ist der ¥finternationale Gedenktag für die Opfer des Nationalsozialismus¥0f (und gegen weltweiten Antisemitismus). Gebet und Fürbitte.¥p",
        "deceased": "1997 †¥tJan°Kapala°(Łódź/Fulda), Pfr.i.R., Myślenice/Polen¥p2012 †¥tAnton°Schütz, Prälat,°Ehrendomkapitular, Dietingen¥-Gösslingen¥p2021 †¥tHubert°Kümpel, Pfr.i.R., GR, Fulda¥-Horas¥p",
        "deceased_more": "1939 †¥tTheodor°Bottermann,°Kaplan°in°Volkmarsen¥p1971 †¥tOtto°Rosenkranz°(Ermland), Pfarrer°in°Züntersbach¥p1972 †¥tFriedrich°Pasquay°(Breslau), Pfr.i.R., Oberprechtal¥p1997 †¥tJan°Kapala°(Łódź/Fulda), Pfr.i.R., Myślenice/Polen¥p2012 †¥tAnton°Schütz, Prälat,°Ehrendomkapitular, Dietingen¥-Gösslingen¥p2021 †¥tHubert°Kümpel, Pfr.i.R., GR, Fulda¥-Horas¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "28": {
        "liturgy": "¥fSo¥0f¥a¥t¥f4. Sonntag im Jahreskreis¥0f – ¥fSonntag°des°Wortes°Gottes¥0f – ¥fÖkumenischer°Bibelsonntag¥0f¥lPsalt:°IV.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fHeute¥0f wird zum ¥f5. Mal der „Sonntag des Wortes Gottes“¥0f begangen. Papst Franziskus hat diesen neuen Themensonntag mit dem Motu proprio „Aperuit illis“ am 30. September 2019, dem Gedenktag des hl. Hieronymus, zu Beginn des Jubiläumsjahres anlässlich seines 1600. Todestages, eingeführt. ¥fDieser „Sonntag des Wortes Gottes“ soll der Feier, der Betrachtung und der Verbreitung des Wortes gewidmet sein.¥0f Näheres hierzu unter www.vatican.va › Apostolische Schreiben ›. Siehe auch den nachfolgenden Hinweis!¥p¥s¥fHeute¥0f ist der ¥fÖkumenische Bibelsonntag¥0f, den in Deutschland viele christliche Gemeinden seit über 40 Jahren am letzten Sonntag im Januar begehen. In Anerkennung dieser sehr lebendigen Tradition hat die DBK das Anliegen des Papstes mit der ökumenischen Praxis in Deutschland verbunden und festgelegt, dass der ¥fSonntag des Wortes Gottes künftig immer am letzten Sonntag im Januar¥0f gefeiert wird und ¥fdamit der Ökumenische Bibelsonntag und der Sonntag des Wortes Gottes immer an einem gemeinsamen Termin begangen werden¥0f.¥p¥sDer ¥fGed des hl. Thomas von Aquin¥0f entfällt in diesem Jahr.¥p",
        "deceased": "1996 †¥tJosef°Jilek, Pfr.i.R., GR, Bad°Orb¥p2000 †¥tGerhard°Dluhosch°(Olmütz/Fulda), Pfr.i.R., GR, Mittelkalbach¥p",
        "deceased_more": "1966 †¥tAlois°Dittrich°(Schneidemühl),°Konsistorialrat, Pfarrer°in°Kassel,°St.°Bonifatius¥p1982 †¥tKarl°Blumenthal, Pfr.i.R., Zella/Eichsfeld¥p1996 †¥tJosef°Jilek, Pfr.i.R., GR, Bad°Orb¥p2000 †¥tGerhard°Dluhosch°(Olmütz/Fulda), Pfr.i.R., GR, Mittelkalbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "29": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°1039/²1061;°Gg°1080/²1110;°Sg°303¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1945 †¥tAnselm°Schuchart, Pfr.i.R., Dingelstädt¥p1965 †¥tDDDr.°Franz°Ranft, Prof., Dr.°phil., Dr.°theol., Dr.°theol.°habil., OStD°i.R., Msgr., Fulda¥p1981 †¥tPeter°Degenhardt, Pfarrer°in°Seiferts¥p1985 †¥tLudwig°Roth, GR, Pfarrer°in°Stadtallendorf¥p1986 †¥tWinfried°Alt, Dechant, Pfarrer°in°Ecklingerode¥p1988 †¥tGregor°Garske°(Schneidemühl), Pfr.i.R., Konsistorialrat,°Markt°Wallerstein¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "30": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°228;°Gg°274;°Sg°529,14¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "31": {
        "liturgy": "¥fMi¥0f¥t¥fHl. Johannes Bosco¥0f, Pr, Ordgr, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "2004 †¥tP.°Reinhold°Dopp°SDB, GR, Hannover¥p2016 †¥tHermann°Mühl, Prälat, GR, Domkapitular°i.R., Fulda¥p2016 †¥tHermann°Trost, Pfr.i.R., StD°i.R., GR, Hanau¥-Großauheim¥p",
        "deceased_more": "1933 †¥tHermann°Pfafferott, Pfarrer°in°Effelder¥p2004 †¥tP.°Reinhold°Dopp°SDB, GR, Hannover¥p2016 †¥tHermann°Mühl, Prälat, GR, Domkapitular°i.R., Fulda¥p2016 †¥tHermann°Trost, Pfr.i.R., StD°i.R., GR, Hanau¥-Großauheim¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      }
    },
    "2": {
      "1": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°im°Jahreskreis – ¥fPriesterdonnerstag¥0f¥pw¥tOder ¥fMs um Priesterberufe¥0f ¥w(MB°1035f/²1057),¥lL°und°Ev vom°Tag oder aus°den°AuswL¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°1036/²1058;°Gg°350,7;°Sg°153/²151¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Priesterdonnerstag (monatl. Gebetstag für geistliche Berufe):¥0f Die Votivmesse ist erlaubt. – Fürbitte(n) um Priesterberufungen. – Thema: „Er gab ihnen Vollmacht über die unreinen Geister.“ (Mk°6¥v,7¥0v). Intention: Missionare.¥p",
        "deceased": "2011 †¥tJanisław°Jałyński°(Kulm/Fulda), Pfr.i.R., GR, Kassel¥p",
        "deceased_more": "1956 †¥tWalter°Rhoden, Pfarrer°in°Westhausen¥p1973 †¥tGeorg°Gutsfeld, Pfr.i.R., Jena¥p2011 †¥tJanisław°Jałyński°(Kulm/Fulda), Pfr.i.R., GR, Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "2": {
        "liturgy": "¥fFr¥0f¥t¥qfDarstellung des Herrn¥0f, ¥fFest – Welttag°des°gottgeweihten°Lebens¥0f – ¥fHerz¥-Jesu¥-Freitag¥0f¥lTe°Deum – Kl.°Hore: eig Ant,°Ps°vom°Wt¥pw¥t¥fMs eig¥0f, Gl, eig°Präf, in°den Hg°I¥_III eig°Einschub, FSS:°MB°548/I¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fHeute am Fest der Darstellung des Herrn Kerzenweihe mit Prozession oder mit feierlichem Einzug¥0f wie im MB°619/622 angegeben. – Gesänge zur Prozession: GL°372, GL°374, GL°38¥p¥sZum heutigen Fest stehen im „Gotteslob“ die ¥fLieder GL°374 und GL°765¥0f (letzteres auch nach den Melodien GL°872, 873 und 280 singbar) und der ¥fKehrvers GL°264¥v,1+2¥0v¥0f (lat. und deutsch).¥p¥s¥fHeute ist auch der Welttag des gottgeweihten Lebens.¥0f Fürbitten für alle Gottgeweihten: Ordensleute, Mitglieder der Säkularinstitute und Gesellschaften apostolischen Lebens, weiterer Geistlicher Gemeinschaften, für die gottgeweihten Jungfrauen und um Berufungen zum gottgeweihten Leben.¥p¥s¥fHeute Abend und an den folgenden Tagen kann nach den Messfeiern der Blasiussegen mit brennenden Kerzen erteilt werden.¥0f Die Blasiuskerzen erhalten eine eigene Segnung (s.°Benediktionale°Nr.°6,°S.°51ff).¥p¥s¥fZum°Herz¥-Jesu¥-Fr:¥0f Die Votivmesse ist nicht erlaubt.¥p",
        "deceased": "1997 †¥tDr.°Hubert°Hack, Prof., Prälat,°Ehrendomkapitular,°Fulda¥p",
        "deceased_more": "1960 †¥tFranz°Anton°Hahn, Pfarrer°in°Neustadt¥p1964 †¥tWilhelm°Lorenz, Pfarrer°in°Geisleden/Eichsfeld¥p1969 †¥tJosef°Klug°(Königgrätz), Pfr.i.R., Dermbach¥p1977 †¥tAdolf°Joseph°Arend, Pfr.i.R., GR, Fulda¥p1977 †¥tReinhold°Juling, Pfarrer°in°Margretenhaun¥p1997 †¥tDr.°Hubert°Hack, Prof., Prälat,°Ehrendomkapitular,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "3": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°im°Jahreskreis – ¥fHerz¥-Mariä¥-Samstag¥0f¥pw¥tOder ¥fhl. Ansgar¥0f, Bi, Glb, ¥fGed¥0f°(RK/GK)¥pr¥tOder ¥fhl. Blasius¥0f, Bi, Märt, ¥fGed¥0f¥pw¥tOder ¥fVotivmesse vom Unbefleckten Herzen Mariä¥0f, ¥wMBm°und°MLm°Nr.°28,°eig°Präf¥0w¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°314,25;°Gg°350,8;°Sg°527,8¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Herz¥-Mariä¥-Sa:¥0f Die Votivmesse ist erlaubt.¥p",
        "deceased": "1999 †¥tP. Dr.°Johannes°Ries°OMI, Prof., Hünfeld¥p",
        "deceased_more": "1944 †¥tJohannes°Hunold, Pfarrer°in°Hildebrandshausen¥p1981 †¥tHermann°Josef°Heim, Pfr.i.R., GR, Fulda¥p1999 †¥tP. Dr.°Johannes°Ries°OMI, Prof., Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "4": {
        "liturgy": "¥fSo¥0f¥a¥t¥f5. Sonntag im Jahreskreis¥0f¥lPsalt:°I.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweise:¥0f¥p¥sDas ¥fFest des Hl. Rabanus Maurus¥0f entfällt in diesem Jahr.¥p¥sNutzer der Stundenbuch-App des DLI finden die ¥fTexte für das Stundengebet zur heutigen Eigenfeier des Diözesankalenders in der Datei FD-Stundengebet.PDF¥0f (s.°o.°S.°87, Nr.°3).¥pAuch in den Sonntagsmessen können aber die Hymnen zu Laudes und Vesper aus den „Eigenfeiern der Diözese Fulda – Stundengebet“ nach den Melodien von GL°81 oder GL°484 als Gemeindelied gesungen werden (Liedblatt zum Download auf www.direktorium.bistum-fulda.de). Ebenso eignet sich der dem hl. Rabanus Maurus zugeschriebene ¥fHymnus „Veni Creator Spiritus“¥0f (GL°341 und 342, vgl. 351).¥p¥sHeute findet zum 4. Mal der ¥f„Internationale Welttag der Geschwisterlichkeit aller Menschen“¥0f statt, den die Vereinten Nationen (UN) am 21. Dezember 2020 ausgerufen haben. Der Tag wurde in Anlehnung an das Unterzeichnungsdatum des ¥fAbu-Dhabi-Dokumentes von Papst Franziskus und dem Großimam von Al-Azhar, Kairo/Ägypten, Ahmad Al-Tayyeb „Über die Brüderlichkeit aller Menschen für ein friedliches Zusammenleben in der Welt“ am 4. Februar 2019¥0f gewählt, greift die Anliegen und Ziele dieses Dokumentes auf und schreibt sie fort. ¥p",
        "deceased": "1996 †¥tDDr.°Joseph°Gottschalk°(Breslau), Dr.°phil., Dr.°theol.°h.c., StR°i.R., Msgr., GR, Seeheim¥-Malchen¥p2012 †¥tJosef°Cudok,°Diakon,°Stade¥p",
        "deceased_more": "1932 †¥tJoseph°Kraus, Pfr.i.R., KämmerzelI¥p1937 †¥tAnton°Hillenbrand, Pfarrer°in°Großenlüder¥p1967 †¥tAlfons°Lins, Pfr.i.R., Bad°Orb¥p1980 †¥tDr.°Karl°Wortner°(Prag/Limburg),°Frankfurt°a.°M.¥p1996 †¥tDDr.°Joseph°Gottschalk°(Breslau), Dr.°phil., Dr.°theol.°h.c., StR°i.R., Msgr., GR, Seeheim¥-Malchen¥p2012 †¥tJosef°Cudok,°Diakon,°Stade¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "5": {
        "liturgy": "¥fMo¥0f¥t¥fHl. Agatha¥0f, Jgfr, Märt, ¥fGed¥0f¥pr¥t¥fMs von der Hl¥0f, n.B.°Hg°I – Off°vom°Ged,°BuM°eig¥p",
        "notes": "",
        "deceased": "2017 †¥tEdgar°Hohmann, Pfr.i.R., GR, Volkmarsen¥p",
        "deceased_more": "1921 †¥tStephan°Gnau, Pfarrer°in°Uttrichshausen¥p1963 †¥tGereon°Hünseler, Pfr.i.R., Deuna/Eichsfeld¥p1964 †¥tAdrian°Pilot°(Breslau), Pfr.i.R., Bad°Hersfeld¥p2017 †¥tEdgar°Hohmann, Pfr.i.R., GR, Volkmarsen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "6": {
        "liturgy": "¥fDi¥0f¥t¥fHll. Paul Miki und Gefährten¥0f, Märtt, ¥fGed¥0f¥pr¥t¥fMs von den Hll¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1952 †¥tFranz°Xaver°Roth, Pfr.i.R., Leinefelde¥p1967 †¥tMartin°Böhne, Pfr.i.R., Ehrendechant,°Naumburg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "7": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°305,1;°Gg°242;°Sg°525,1¥0w¥p",
        "notes": "",
        "deceased": "2017 †¥tP. Dr.°Sigfried°Klöckner°OFM, GR, Fulda¥p",
        "deceased_more": "1942 †¥tJoseph°Richter, Pfr.i.R., Herolz¥p1964 †¥tEduard°Lerch, Pfr.i.R., Siemerode/üb.°Heiligenstadt¥p1965 †¥tJosef°Löbel°(Leitmeritz), Pfr.i.R., Bachrain¥p2017 †¥tP. Dr.°Sigfried°Klöckner°OFM, GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "8": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°im°Jahreskreis – ¥fWeltgebetstag°gegen°den°Menschenhandel¥0f¥pw¥tOder ¥fhl. Hieronymus Ämiliani¥0f, Ordgr, ¥fGed¥0f¥pw¥tOder ¥fhl. Josefine Bakhita¥0f, Jgfr, ¥fGed¥0f¥be¥w¥fMs¥0f:°HR°/°MBkl°1234f°/°MBErg²°6°/ Com°Jgfr°1¥_3°– ¥fML°V°ᴺ556¥0f¥l¥vL:¥0v¥t1°Kor°7¥v,25¥_35¥0v¥tML°V°612¥l¥vAPs:¥0v¥tPs°45¥v,11¥_12.14¥_15.16¥_17¥0v¥t576¥l¥vREv:¥0v¥tvgl.°Mt°25¥v,10¥0v¥t857¥v,2¥0v¥l¥vEv:¥0v¥tMt°25¥v,1¥_13¥0v¥t576¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°177/²175;°Gg°134/²132;°Sg°527,7¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute ist zum 10. Mal der von Papst Franziskus im Januar 2015 ausgerufene ¥fWeltgebets- und Aktionstag gegen den Menschenhandel (zur Verhinderung von Verbrechen gegen die Menschlichkeit)¥0f. Gebet, Besinnung und Fürbitte in diesem Anliegen. Vgl. hierzu Botschaft von Papst Franziskus zum Weltfriedenstag 2015 und Gebet zur hl. Josefine Bakhita vom 10.02.2019.¥p",
        "deceased": "2004 †¥tHubert°Wiederhold, Pfr.i.R., GR, Frankfurt¥-Bornheim¥p2020 †¥tFranz°J.°Koska°(Kulm/Fulda), Pfr.i.R., Msgr., Rumia/Polen¥p",
        "deceased_more": "1946 †¥tAlois°Hahner, Pfarrer°in°Schmalnau¥p1955 †¥tPeter°Kräuter,°Marine-Oberpfr.i.R., Mardorf¥p1976 †¥tReinhold°Barth°(Königgrätz), Pfr.i.R., Schönbrunn¥p2004 †¥tHubert°Wiederhold, Pfr.i.R., GR, Frankfurt¥-Bornheim¥p2020 †¥tFranz°J.°Koska°(Kulm/Fulda), Pfr.i.R., Msgr., Rumia/Polen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "9": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°305,1;°Gg+Sg°217/²215¥0w¥p",
        "notes": "",
        "deceased": "2012 †¥tJohannes°Goedeke°(Danzig/Fulda), Pfr.i.R., Msgr., Bad°Soden¥-Salmünster¥p",
        "deceased_more": "1938 †¥tHeinrich°Bona, Pfr.i.R., Erfurt¥p1969 †¥tFranz°Ebel, Pfarrer°in°Bremen/Rhön¥p1988 †¥tBruno°Gospos°(Breslau), Pfr.i.R., Borken/Westfalen¥p2012 †¥tJohannes°Goedeke°(Danzig/Fulda), Pfr.i.R., Msgr., Bad°Soden¥-Salmünster¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "10": {
        "liturgy": "¥fSa¥0f¥t¥fHl. Scholastika¥0f, Jgfr, ¥fGed¥0f¥pw¥t¥fMs von der Hl¥0f – Off°vom°Ged¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "2020 †¥tP.°Wolfgang°Mayer°OFM,°Dortmund¥p",
        "deceased_more": "1933 †¥tFerdinand°Spies, Pfarrer°in°Batten¥p1935 †¥tOthmar°Beck, Pfarrer°in°Borsch¥p1950 †¥tGregor°Quell, Pfarrer°in°Burghaun¥p1956 †¥tTheodor°Arend, Pfr.i.R., Worbis¥p1987 †¥tP.°Anton°Hehl°SM,°Direktor°i.R., Fulda¥p1993 †¥tReinhard°Mrasek°(Breslau), Pfr.i.R., Burghaun¥p2020 †¥tP.°Wolfgang°Mayer°OFM,°Dortmund¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "11": {
        "liturgy": "¥fSo¥0f¥a¥t¥f6. Sonntag im Jahreskreis¥0f – ¥fWelttag°der°Kranken¥0f¥lPsalt:°II.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweise:¥0f¥p¥sDer ¥fGedenktag Unserer Lieben Frau in Lourdes¥0f entfällt in diesem Jahr.¥p¥sHeute ist der 32. Welttag der Kranken (eingeführt vom hl. Papst Johannes Paul II. 1993 in Lourdes). ¥fGebet und Fürbitte für die Kranken und alle in der Krankenfürsorge Tätigen¥0f. Papstbotschaft zum Welttag (www.vatican.va › Botschaften › Welttag der Kranken).¥p",
        "deceased": "2002 †¥tP.°DDr.°Georg°Ziener°OMI, Prof., Dr.°theol., Dr.°in°re°bibl., Hünfeld¥p",
        "deceased_more": "1934 †¥tJohannes°Kahlmeyer, Pfr.i.R., Ershausen¥p1937 †¥tJulius°Martin, Dechant, Pfarrer°in°Geisa¥p1966 †¥tAloys°Auth, Pfarrer°in°Dietges¥p1981 †¥tTheodor°Gronde, Pfr.i.R., Heiligenstadt¥p2002 †¥tP.°DDr.°Georg°Ziener°OMI, Prof., Dr.°theol., Dr.°in°re°bibl., Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "12": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 6.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Gregor II.¥0f, Pp, ¥fGed¥0f (FD)¥bf¥w¥vL:¥0v¥tEz°34¥v,11¥_16¥0v¥tML°V°633/ᴺ648¥l¥vAPs:¥0v¥tPs°23¥v,1¥_3.4.5.6¥0v°(R:°¥v1¥0v)¥t634/ᴺ649¥l¥vREv+Ev:¥0v°Mt°9¥v,35¥_38¥0v¥t619f/ᴺ630¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°312,21;°Gg+Sg°280¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sZum heutigen Gedenktag des hl. Gregor II. passen die Strophen GL°877¥v,6+8¥0v des Bonifatiusliedes.¥p",
        "deceased": "2013 †¥tIvan°Barišić,°Kroatenseelsorger°in°Kassel¥p",
        "deceased_more": "2013 †¥tIvan°Barišić,°Kroatenseelsorger°in°Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "13": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 6.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°305,2;°Gg°348,3;°Sg°527,7¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1982 †¥tP.°Archangelus°Löslein°OFMCap,°Seelsorger des Familienferienheims°Michaelshof in°Unterbernhards¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "14": {
        "liturgy": "¥fMi¥0f¥t¥fAschermittwoch – Fast- und Abstinenztag¥0f – Psalt:°IV.°Woche; ¥wzu den Ld können auch die Ant u. Ps vom Freitag der III.°Woche genommen werden.¥0w¥pv¥t¥fMs eig¥0f (MB°77/²75), ¥wSegnung und Auflegung der Asche (aus°den°Zweigen vom Palmsonntag des vorigen Jahres) nach°der°Homilie, s. Ritus im MB°76f. Gesänge°zur Austeilung der Asche: GL°266, GL°268¥0w – FastPräf°III°oder°IV¥p",
        "notes": "¥fDIE QUADRAGESIMA – ÖSTERLICHE°BUSSZEIT°–°FASTENZEIT¥0f¥jPerikopen an den Wochentagen: ¥fML°IV¥0f¥p¥fStB¥0f und ¥fLitHor¥0f: Band II¥p¥fLektionar°zum°StB°II/2¥0f¥p¥p¥fHinweise:¥0f¥p¥sDie Österliche Bußzeit dient der Vorbereitung auf die Feier des Todes und der Auferstehung Christi. Die Liturgie der Vierzig Tage bereitet die Gläubigen auf die Feier des Ostergeheimnisses durch Taufgedächtnis und tätige Buße vor. Zur Orientierung: ¥fRundschreiben der Kongregation für den Gottesdienst: „Über die Feier von Ostern und ihre Vorbereitung“ (FOV)¥0f, in: VAS°Nr.°81 vom 16.°Januar°1988, hrsg. v. Sekr.°d.°DBK, S.°15¥_46; oder in: MBO°9*¥_30*; oder in: „Arbeitshilfen“°Nr.°77, 11.°Auflage°2009, Die Messfeier – Dokumentensammlung. Auswahl für die Praxis, hrsg. v. Sekr.°d.°DBK, Nr.°XI., S.°261¥_292; als PDF-Datei unter www.liturgie.de › Dokumente.¥p¥sDie Gläubigen mögen zu Beginn der Österlichen Bußzeit auf den im Jahre 1986 von den deutschen Bischöfen erlassenen ¥fOrientierungsrahmen „Kirchliche Bußpraxis“¥0f und die darin enthaltenen ¥fWeisungen zur Bußpraxis¥0f hingewiesen werden (in:°Handbuch Bistum Fulda, Gruppe 7, Fundstelle 3.6).¥p¥sZur Feier der Österlichen Bußzeit möge die jährlich erscheinende ¥fPapstbotschaft¥0f beachtet und so gut wie möglich umgesetzt werden.¥p¥s¥fDas Halleluja unterbleibt¥0f überall im Offizium und in der Messe ¥fbis zur Feier der Osternacht¥0f. ¥p¥s¥fDer Altar soll nicht mit Blumen geschmückt werden, und die Orgel oder andere Musikinstrumente sollen nur die Gesänge begleiten. Beides streicht den Bußcharakter dieser Zeit hervor. Nur am 4.°Fastensonntag, an den Hochfesten und Festen ist eine Ausnahme davon erlaubt¥0f (CE°252). (Auch das „Fasten der Augen und Ohren“ in der Liturgie der österlichen Bußzeit ist wichtig und hat seine Bedeutung). Kirchenmusik, die für die Fasten- und Passionszeit geschaffen wurde oder dem Charakter dieser geprägten Zeit besonders gut entspricht, kann in eigens dafür gehaltenen kirchenmusikalischen (Passions-)Andachten oder Geistlichen Konzerten zu Gehör kommen.¥p¥s¥fDie Gesänge¥0f, die bei Gottesdiensten, besonders bei der Messfeier, aber auch bei Andachten, gebraucht werden, ¥fmüssen dieser Zeit angepasst sein und soweit wie möglich den liturgischen Texten entsprechen¥0f.¥p¥sAn den Wochentagen empfiehlt sich eines der ¥fSegensgebete über das Volk¥0f, MB°568¥_575, die aber nicht der Fastenzeit vorbehalten sind.¥p¥sAm Schluss der Komplet steht in der Fastenzeit bis zum Karsamstag einschl. die Marianische Antiphon ¥f„Ave Regina caelorum“¥0f (GL°666¥v,2¥0v) bzw. ¥f„Ave, du Himmelskönigin“¥0f (vgl.°GL°868).¥p¥s¥fGedenktage von Heiligen können kommemoriert werden¥0f (s.°o.°Kap.°II.C.4.).¥p¥s¥fFrei gewählte Votivmessen, Messen für besondere Anliegen und gewöhnliche Totenmessen¥0f (ausgenommen beim Eintreffen der Todesnachricht, am Begräbnistag und am ersten Jahrestag; vgl.°AEM°337) ¥fsind während der Fasten- und Osterzeit nicht gestattet. Dasselbe gilt auch für die Messen um geistliche Berufe und die Votivmessen zum Herz-Jesu-Freitag¥0f.¥p¥sWird in der Fastenzeit eine ¥fTrauung¥0f gehalten, so möge der Priester die Brautleute ersuchen, auf den ¥fErnst und¥0f die ¥fBedeutung dieser liturgischen Zeit¥0f Rücksicht zu nehmen (Die Feier der Trauung, ²1992, Nr.°31, Praenotanda°Nr.°32; Pastorale Einführung Nr.°22). ¥p¥sDie Volksandachten, die zur Fastenzeit gehören, wie z.B. die ¥fKreuzwegandacht¥0f, sollen gepflegt und mit liturgischem Geist erfüllt werden, so dass die Gläubigen durch sie leichter zur Feier des Paschamysteriums Christi hingeführt werden. ¥p¥s¥fDie österliche Bußzeit soll intensiv für die geistliche Vorbereitung der Taufbewerberinnen und Taufbewerber benutzt werden¥0f, besonders durch die Bußfeiern, durch Glaubensunterweisung und die Feier der Einschreibung (Zulassung) zu den Sakramenten der Eingliederung. ¥fGemeinden, in denen es keine jugendlichen oder erwachsenen Taufbewerberinnen und Taufbewerber gibt, sollen dennoch für all jene beten, die in der kommenden Osternacht anderswo die Sakramente der Eingliederung in die Kirche empfangen werden¥0f. Die Osternacht soll die normale Zeit für die Sakramente der Eingliederung sein, da die ganze Eingliederung in die Kirche als erste sakramentale Teilhabe an Christi Tod und Auferstehung einen österlichen Charakter hat (vgl.°FOV°7f).¥p¥s¥fDie Getauften sollen durch Buße und Katechesen auf die Erneuerung des Taufversprechens vorbereitet werden.¥0f Die Seelsorger sollen den Gläubigen erklären, welche Bedeutung für ihr geistliches Leben die Erneuerung des Taufversprechens hat. Getaufte Erwachsene, die noch keine Glaubensunterweisung und keine weiteren Sakramente empfangen haben, sollen ¥fdurch Katechesen und Bußfeiern im Glauben unterwiesen und zum Empfang des Bußsakramentes geführt werden¥0f. Auch für Kinder im Schulalter, die noch nicht getauft, aber zur Glaubensunterweisung fähig sind, wie auch für getaufte Kinder, die zum ersten Mal zum Bußsakrament zugelassen werden sollen, ist die österliche Bußzeit die geeignete Zeit für Bußfeiern und Glaubensunterweisung. ¥fEine gemeinschaftliche Bußfeier am Ende der Österlichen Bußzeit soll den einzelnen Gläubigen und der ganzen Gemeinde helfen, tiefer in das Paschamysterium einzugehen¥0f (vgl.°FOV°6¥_10°und°37). ¥p¥s¥fDie Gläubigen sollen aufgefordert werden, in der Fastenzeit das Bußsakrament zu empfangen¥0f, damit sie mit reinem Herzen die österlichen Geheimnisse mitfeiern können. Dabei ist es sehr angebracht, das Bußsakrament als gemeinschaftliche Feier der Versöhnung mit Bekenntnis und Lossprechung der Einzelnen zu spenden, wie es der Ritus vorsieht („Die°Feier°der°Buße“, S.°35ff.). ¥fDie Priester sollen häufiger als sonst zur Spendung des Bußsakramentes zur Verfügung stehen, längere Zeiten für die Einzelbeichte vorsehen und so den Zugang zu diesem Sakrament erleichtern¥0f (vgl. FOV°15). Im Bußsakrament wird dem Christen, der seine Sünden bereut und aufrichtig bekennt, im Namen Gottes die Vergebung geschenkt; er wird mit Gott und der Kirche versöhnt. Jeder Christ soll sich regelmäßig prüfen, ob er in einer wichtigen Sache bewusst und freiwillig gegen Gott und gegen die Kirche, gegen seine Mitmenschen oder gegen sich selbst schuldig geworden ist. Wer sich in diesem Sinne einer schweren Sünde bewusst ist, soll diese möglichst bald, wenigstens aber innerhalb eines Jahres in der Feier des Bußsakramentes bereuen und aufrichtig bekennen, damit ihm im Namen Gottes die Vergebung zugesagt werden kann und so die volle Gemeinschaft mit Gott und der Kirche wieder hergestellt ist (vgl. can.°916). Er ist aber auch verpflichtet, allen angerichteten Schaden nach besten Kräften gutzumachen. Auch den Gläubigen, die keine schweren Sünden zu beichten haben, wird zur Erneuerung und Vertiefung der Bußgesinnung sowie zur sakramentalen Sündenvergebung die öftere Feier des Bußsakramentes empfohlen. Sie fördert zudem die Selbsterkenntnis und trägt zur inneren Reife bei.¥p¥s¥fDie Priester sollen häufiger und intensiver das Wort Gottes verkündigen¥0f in Homilien während der Werktagsmesse, in Wortgottesdiensten, in Bußfeiern, in eigenen Fastenpredigten oder bei Hausbesuchen, wenn sie eine oder mehrere Familien besuchen. ¥fDie Gläubigen sollen häufig an den Wochentagen die hl.°Messe mitfeiern, und wo sie das nicht tun können, wenigstens die liturgischen Lesungen der Tagesmesse lesen, allein oder mit ihrer Familie¥0f (vgl. FOV°13).¥p¥s¥fDie Kirche empfiehlt den recht vorbereiteten und ehrfürchtigen Kommunionempfang bei jeder hl.°Messe. Jeder Gläubige aber soll wenigstens einmal im Jahr, nach Möglichkeit in der österlichen Zeit¥0f (zwischen Aschermittwoch und Pfingsten), ¥fdie hl. Kommunion empfangen¥0f und durch diese volle Teilnahme an der Eucharistie seine Gemeinschaft mit der Kirche sichtbar machen (vgl. Weisung d. dt. Bischöfe zur kirchl. Bußpraxis, 24.11.1986, zuletzt veröffentlicht in: Handbuch Bistum Fulda, Gruppe°7, Fundstelle°3.6, S.°5, letzter Abschnitt; can.°920°CIC; KKK°1417). ¥p¥s¥fHeute ist Fast- und Abstinenztag¥0f (vgl. cann.°1251ff°CIC; Handbuch Bistum Fulda, Gruppe°7, Fundstelle°3.6 Kirchliche Bußpraxis, Weisungen zur Bußpraxis S.°4,°Nr.°1). Das Abstinenzgebot mit dem „Fastenopfer“ nach der freien Verantwortung des einzelnen Christen sowie der Verzicht auf Fleischspeisen am Aschermittwoch und Karfreitag verpflichtet alle ab dem vollendeten 14.°Lebensjahr. Das Fastengebot (Verzicht auf Fleischspeisen, nur einmalige Sättigung am Tage) am Aschermittwoch und Karfreitag verpflichtet zwischen dem vollendeten 18. bis zum Beginn des 60.°Lebensjahres (vgl. can.°1252°CIC).¥p¥s¥fHeute Segnung und Austeilung der Asche¥0f. Diese kann auch außerhalb der Messfeier stattfinden in einem Wortgottesdienst gem. Rubrik MB°80/²78.¥p¥s¥fDen Gläubigen möge heute die Bedeutung des Aschenkreuzes nahegebracht werden:¥0f „Am Aschermittwoch treten die Gläubigen, indem sie sich Asche auflegen lassen, in die Zeit ein, die zur Reinigung der Seele bestimmt ist. Dieses Zeichen der Buße, das aus biblischer Tradition stammt und im Gebrauch der Kirche bis auf uns gekommen ist, deutet an, dass der Mensch ein Sünder ist, der seine Schuld offen vor Gott bekennt; er gibt so seinem Willen zu innerer Umkehr Ausdruck, von der Hoffnung geleitet, dass der Herr ihm gnädig sein möge. Mit diesem Zeichen beginnt der Weg der Umkehr, deren Ziel der Empfang des Bußsakramentes vor dem Osterfest ist“ (FOV 21; vgl. CE°253).¥p¥s¥fDer Aschermittwoch steht liturgisch im Rang eines Hochfestes¥0f (s.°o.°Kap.°I.B.1.°I.°2.), ohne jedoch Hochfest zu sein.¥p¥sDas ¥fFest der hll. Cyrill und Methodius¥0f und die ¥fKommemoration des hl. Valentin¥0f entfallen in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1920 †¥tDr.°Nikolaus°Kircher, Dr.°iur.°can., GR, Dechant°a.D., Pfarrer°in°Maberzell¥p1946 †¥tJoseph°Gockel, Pfr.i.R., Mardorf¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "15": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f nach Aschermittwoch¥pv¥t¥fMs eig¥0f, FastPräf¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute ist der 81. Geburtstag von Bischof em. Heinz Josef Algermissen.¥p",
        "deceased": "1999 †¥tP. Dr.°Norbert°Hötzel°OMI,°Superior°in°Hünfeld¥p2019 †¥tUlrich°Wittek, Pfr.i.R., GR, Fulda¥p",
        "deceased_more": "1999 †¥tP. Dr.°Norbert°Hötzel°OMI,°Superior°in°Hünfeld¥p2019 †¥tUlrich°Wittek, Pfr.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "16": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f nach Aschermittwoch¥pv¥t¥fMs eig¥0f, FastPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1942 †¥tKarl°Göbel, Pfarrer°in°Hundeshagen, gestorben°im°Reservelazarett°zu°Lublin¥p1963 †¥tArthur°Maximilian°Hilden, Pfr.i.R., Riedering°üb.°Rosenheim¥p1970 †¥tIgnaz°Nolte, Pfr.i.R., GR, Pfarrer°in°Geismar/Eichsfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "17": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f nach Aschermittwoch¥p¥tn. B. Komm der ¥fhll. Sieben Gründer des Servitenordens¥0f (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder von°den°Hll, FastPräf¥pv¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "2012 †¥tAlfons°Gerhardt, Pfarrer°in°Hünfeld¥-Mackenzell¥p2017 †¥tAugust°Aul, Pfr.i.R., GR, Freigericht¥-Bernbach¥p",
        "deceased_more": "1960 †¥tDr.°Rudolf°Tietze°(Leitmeritz), Pfr.i.R., Stotternheim¥p1969 †¥tFriedrich°Horst, Pfr.i.R., Haimbach¥p2012 †¥tAlfons°Gerhardt, Pfarrer°in°Hünfeld¥-Mackenzell¥p2017 †¥tAugust°Aul, Pfr.i.R., GR, Freigericht¥-Bernbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "18": {
        "liturgy": "¥fSo¥0f¥a¥t¥f1. Fastensonntag¥0f – Psalt:°I.°Woche¥pv¥t¥fMs eig¥0f, Cr, eig°Präf, FSS:°MB°540¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute möge in allen Gottesdiensten besonders auch ¥fder jugendlichen und erwachsenen Taufbewerberinnen und ¥-bewerber unserer Diözese¥0f sowie der ganzen Kirche am Tag der ¥fFeier ihrer Zulassung zur Taufe und den weiteren Initiationssakramenten¥0f durch den Bischof/die Bischöfe gedacht und in den Fürbitten für sie, ihre Begleiterinnen und Begleiter, ihre Angehörigen und Herkunftsgemeinden gebetet werden.¥p¥s¥fIn der kommenden Woche¥0f werden die ¥fFrühjahrsquatember¥0f an einem oder mehreren Tagen (nach Wahl) begangen als ¥fTage religiöser Erneuerung. Thema: Buße¥0f. Vorschlag für die Wahl des Messformulars: Quatembermesse MB°266 oder Messe um Nachlass der Sünden MB°1082/²1112, FastPräf, Farbe:°violett. LL°und°Ev aus den AuswL für besondere Anliegen, ML°VIII°303¥_314.¥p",
        "deceased": "2021 †¥tFranz°Heim, Pfr.i.R., GR, Bad°Orb¥p",
        "deceased_more": "1972 †¥tLudwig°Mans, Pfr.i.R., Fulda¥p1986 †¥tLudwig°Atzert, Pfr.i.R., Msgr., Fulda¥p1990 †¥tAlois°Zengerling, Pfr.i.R., Fulda¥-Dietershan¥p2021 †¥tFranz°Heim, Pfr.i.R., GR, Bad°Orb¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "19": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, FastPräf¥p",
        "notes": "",
        "deceased": "1994 †¥tP.°Josef°Heinemann°SVD¥p1994 †¥tHans¥-Georg°Hirmer,°Diakon°i.R., Eiterfeld¥p2002 †¥tKarl°Schönhals, GR, Pfarrer°in°Hanau,°St.°Elisabeth¥p2005 †¥tAlois°Korn, Pfr.i.R., Msgr., GR, Biebergemünd¥-Kassel¥p",
        "deceased_more": "1970 †¥tFerdinand°Reinhardt, Pfr.i.R., GR, Fulda¥p1974 †¥tReinhold°Thiel°(Breslau),°Erzpriester, Pfr.i.R., GR, Hünfeld¥p1994 †¥tP.°Josef°Heinemann°SVD¥p1994 †¥tHans¥-Georg°Hirmer,°Diakon°i.R., Eiterfeld¥p2002 †¥tKarl°Schönhals, GR, Pfarrer°in°Hanau,°St.°Elisabeth¥p2005 †¥tAlois°Korn, Pfr.i.R., Msgr., GR, Biebergemünd¥-Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "20": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, FastPräf¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute ist der 70. Geburtstag von Weihbischof Karlheinz Diez.¥p",
        "deceased": "2023 †¥tEugen°Höfler, Pfr.i.R., GR, Fulda¥-Horas¥p",
        "deceased_more": "1935 †¥tAlbert°Hünermund, Pfarrer°in°Hohengandern¥p1960 †¥tAnton°Wohlgemuth, Prälat, Domkapitular,°Fulda¥p2023 †¥tEugen°Höfler, Pfr.i.R., GR, Fulda¥-Horas¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "21": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°der°Fastenzeit¥p¥tn. B. Komm des ¥fhl. Petrus Damiani¥0f, Bisch, Kl (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder vom°Hl, FastPräf¥p",
        "notes": "",
        "deceased": "2004 †¥tP.°Klemens°Schneiders°OMI,°Hünfeld¥p2009 †¥tHelmut°Schleichert,°Militärpfr.a.D., Fritzlar¥p",
        "deceased_more": "1945 †¥tHermann°Weinreich, Pfr.i.R., Heiligenstadt¥p1958 †¥tPeter°Hardegen, Pfarrer°in°Bickenriede¥p1991 †¥tLudwig°Wiegand, Pfr.i.R., Msgr., Hünfeld¥p2004 †¥tP.°Klemens°Schneiders°OMI,°Hünfeld¥p2009 †¥tHelmut°Schleichert,°Militärpfr.a.D., Fritzlar¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "22": {
        "liturgy": "¥fDo¥0f¥t¥qfKathedra Petri¥0f, ¥fFest¥0f¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pw¥t¥fMs eig¥0f, Gl, ApPräf I, FSS:°MB°558¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1965 †¥tKarl°Busch, Pfr.i.R., Menden/Westfalen¥p1990 †¥tJosef°Schubert°(Leitmeritz), Pfr.i.R., Heiligenstadt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "23": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°der°Fastenzeit¥p¥tn. B. Komm des ¥fhl. Polykarp¥0f, Bi, Märt (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder vom°Hl, FastPräf¥p",
        "notes": "",
        "deceased": "2016 †¥tAlois°Hartmann, Pfr.i.R., Msgr., GR, Petersberg¥p",
        "deceased_more": "2016 †¥tAlois°Hartmann, Pfr.i.R., Msgr., GR, Petersberg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "24": {
        "liturgy": "¥fSa¥0f¥t¥qfHl. Matthias¥0f, Ap, ¥fFest¥0f°(RK; GK:°14.°Mai) – Off:°BuM°eig,°sonst°Com – Te°Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pr¥t¥fMs eig¥0f, Gl, ApPräf I, n.B.°Hg°I, FSS:°MB°558¥pv¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1991 †¥tReinhold°Schuchardt, Pfarrer°in°Neustadt¥p1992 †¥tFranz°Vogt, Pfr.i.R., StD°a.D., Msgr., Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "25": {
        "liturgy": "¥fSo¥0f¥a¥t¥f2. Fastensonntag¥0f – Psalt:°II.°Woche¥pv¥t¥fMs eig¥0f, Cr, eig°Präf, FSS:°MB°540¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute werden die Teilnehmer an den Eucharistiefeiern (einschl. der Vorabendmessen) gezählt.¥p¥s¥fZum Evangelium des heutigen Sonntags¥0f passen besonders die Lieder GL°363 (auch nach der Melodie von GL°375 singbar) und GL°368¥v,5+6¥0v (auch nach der Melodie von GL°329 singbar).¥p¥sDie ¥fKommemoration der hl. Walburga¥0f entfällt in diesem Jahr.¥p",
        "deceased": "1997 †¥tP.°Graziano°Capannolo°CR,°Italienerseelsorger°in°Kassel¥p2019 †¥tP.°Mate Dragičevič°OFM,°Mostar¥p",
        "deceased_more": "1937 †¥tKarl°Lomb, Pfr.i.R., Großenbach¥p1946 †¥tFlorentin°Müller, Professor°in°Heiligenstadt¥p1974 †¥tLeo°Hatscher°(Leitmeritz), Pfr.i.R., Zierenberg¥p1983 †¥tKlaus°Heymann°(Breslau), Dechant°in°Dingelstädt¥p1997 †¥tP.°Graziano°Capannolo°CR,°Italienerseelsorger°in°Kassel¥p2019 †¥tP.°Mate Dragičevič°OFM,°Mostar¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "26": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, FastPräf¥p",
        "notes": "",
        "deceased": "2015 †¥tReinhold°Becker, Pfr.i.R., Fritzlar¥p",
        "deceased_more": "1940 †¥tKarl°Freund, Pfr.i.R., Sondershausen¥p1956 †¥tAdalbert°Schiffhauer, Pfr.i.R., Fulda¥p1957 †¥tJoseph°Klüber, Pfarrer°in°Großentaft¥p1988 †¥tLeo°Wolfen°(Essen), Pfr.i.R., GR, Borken/Westfalen¥p2015 †¥tReinhold°Becker, Pfr.i.R., Fritzlar¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "27": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°der°Fastenzeit¥p¥tn. B. Komm des ¥fhl. Gregor von Narek¥0f, Abt, Kl (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder vom°Hl, FastPräf¥p",
        "notes": "",
        "deceased": "2009 †¥tPeter°Hauser,°Dompfr.i.R., Msgr., Ehrendomkapitular,°Fulda¥p2010 †¥tP.°Lucas°Josef°Tacke°OFMCap, GR, Münster¥p2016 †¥tP.°Leo°Hillebrand°SDB,°Daun¥p2021 †¥tP.°Mladen°Sesar°OFM,°Široki°Brijeg/Bosnien°und°Herzegowina¥p2023 †¥tJosef°Pimper, Pfr.i.R., GR, Künzell¥p",
        "deceased_more": "1939 †¥tJoseph°Himmelmann, Pfarrer°in°Simmershausen¥p1943 †¥tDDr.°Georg°Werner, Dr.°theol.°et°phil., Religionslehrer,°gefallen°in°Rußland¥p2009 †¥tPeter°Hauser,°Dompfr.i.R., Msgr., Ehrendomkapitular,°Fulda¥p2010 †¥tP.°Lucas°Josef°Tacke°OFMCap, GR, Münster¥p2016 †¥tP.°Leo°Hillebrand°SDB,°Daun¥p2021 †¥tP.°Mladen°Sesar°OFM,°Široki°Brijeg/Bosnien°und°Herzegowina¥p2023 †¥tJosef°Pimper, Pfr.i.R., GR, Künzell¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "28": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, FastPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1962 †¥tWilhelm°Breitung, Pfr.i.R., Ehrendomkapitular,°Ried¥p1979 †¥tKarl°Otto, Pfr.i.R., Eisenach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "29": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°der°Fastenzeit – ¥fPriesterdonnerstag¥0f¥pv¥t¥fMs eig¥0f, FastPräf¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Priesterdonnerstag (monatl. Gebetstag für geistliche Berufe):¥0f Die Votivmesse ist nicht erlaubt. – Fürbitte(n) um Priesterberufungen. – Thema: „Gesegnet der Mensch, der auf den Herrn vertraut und dessen Hoffnung der Herr ist.“ (Jer°17¥v,7¥0v). Intention: Familien, Ehepaare und Eltern.¥p",
        "deceased": "",
        "deceased_more": "1992 †¥tAdelbert°Schröter, Pfr.i.R., Geisa¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      }
    },
    "3": {
      "1": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°der°Fastenzeit – ¥fHerz¥-Jesu¥-Freitag¥0f¥pv¥t¥fMs eig¥0f, FastPräf¥p",
        "notes": "¥fHinweise:¥0f¥p¥sFrauen aller Konfessionen laden heute zum Weltgebetstag unter dem Motto „… durch das Band des Friedens“ ein, den Frauen aus Palästina vorbereitet haben.¥p¥s¥fZum°Herz¥-Jesu¥-Fr:¥0f Die Votivmesse ist nicht erlaubt.¥p",
        "deceased": "1995 †¥tRichard°Huth, Pfr.i.R., GR, Romsthal¥p2007 †¥tP. Dr.°Arthur°Krimmel°OMI, Prof., Hünfeld¥p",
        "deceased_more": "1921 †¥tDr.°Adalbert°Ricken, Dr.°phil.°h.c., Pfarrer°in°Lahrbach¥p1925 †¥tDr.°Wilhelm°Frye, Prof., Dr.°phil., Pfr.i.R., Msgr., Fulda¥p1935 †¥tJoseph°Kramer,°Prorektor°i.R., Fulda¥p1939 †¥tWilhelm°Klingebiel, Pfr.i.R., Helmsdorf¥p1995 †¥tRichard°Huth, Pfr.i.R., GR, Romsthal¥p2007 †¥tP. Dr.°Arthur°Krimmel°OMI, Prof., Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "2": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°der°Fastenzeit – ¥fHerz¥-Mariä¥-Samstag¥0f¥pv¥t¥fMs eig¥0f, FastPräf¥pv¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Herz¥-Mariä¥-Sa:¥0f Die Votivmesse ist nicht erlaubt.¥p",
        "deceased": "1995 †¥tFerdinand°Rech°(Leitmeritz), GR, Pfarrer°in°Knüllwald¥-Remsfeld¥p2024 †¥tDr.°Gregor°Predel°(Freiburg), Prof., Dr.°theol.°habil., Freiburg°i.°Br.¥p",
        "deceased_more": "1920 †¥tFranz°Döppenschmidt,°Kaplan°in°Großauheim¥p1926 †¥tFranz°Wieber, Pfarrer°in°Michelsrombach¥p1963 †¥tLeonhard°Heid, Dechant, Pfarrer°in°Somborn¥p1995 †¥tFerdinand°Rech°(Leitmeritz), GR, Pfarrer°in°Knüllwald¥-Remsfeld¥p2024 †¥tDr.°Gregor°Predel°(Freiburg), Prof., Dr.°theol.°habil., Freiburg°i.°Br.¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "3": {
        "liturgy": "¥fSo¥0f¥a¥t¥f3. Fastensonntag¥0f – Psalt:°III.°Woche¥pv¥t¥fMs eig¥0f, Cr, FastPräf I oder II bzw. eig°Präf, FSS:°MB°540¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fHeute können als LL und Ev die Texte vom Lesejahr°A genommen werden.¥0f Dann nimmt man bei den Messtexten die ¥feig°Präf¥0f und den entsprechenden ¥fKommunionvers¥0f.¥p",
        "deceased": "2021 †¥tEugen°Kutzka, OStR°i.K.i.R., GR, Hünfeld¥p",
        "deceased_more": "1967 †¥tPaul°Oberthür, Pfr.i.R., Rheydt/Rheinland¥p2021 †¥tEugen°Kutzka, OStR°i.K.i.R., GR, Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "4": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°der°Fastenzeit¥p¥tn. B. Komm des ¥fhl. Kasimir¥0f (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder vom°Hl, FastPräf¥p",
        "notes": "¥fHinweis:¥0f ¥sWenn am 3.°Fastensonntag die Lesungen vom Lesejahr°A nicht genommen wurden, können die folgenden Lesungen an einem beliebigen Tag dieser Woche genommen werden: L:°Ex°17¥v,1¥_7¥0v; Ev:°Joh°4¥v,5¥_42¥0v (siehe°ML°IV°161ff/ ᴺ163ff). Dazu nimmt man die Messtexte vom Wochentag mit ¥fPräf und Kommunionvers „Von der Samariterin“¥0f (MB°106f/²104f).¥p",
        "deceased": "2009 †¥tHeiner°Pies, Pfr.i.R., GR, Bruchköbel¥p2018 †¥tGerhard°Henning, Pfr.i.R., GR, Juscimeira/Brasilien¥p",
        "deceased_more": "1935 †¥tKaspar°Schick, Pfr.i.R., Hattenhof¥p1973 †¥tKlemens°Lange°(Paderborn), Pfr.i.R., Lenterode/Eichsfeld¥p1992 †¥tAlois°Hauk°(Olmütz), Pfr.i.R., Msgr., GR, Ebersburg¥-Ried¥p2009 †¥tHeiner°Pies, Pfr.i.R., GR, Bruchköbel¥p2018 †¥tGerhard°Henning, Pfr.i.R., GR, Juscimeira/Brasilien¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "5": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, FastPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1963 †¥tWilhelm°Hunstiger, Prälat, Domkapitular°in°Fulda¥p1990 †¥tDDr.°Heribert°Abel, Dr.°theol.°et°phil., Domkapitular°i.R., Fulda¥p1993 †¥tHeinrich°Kretzmer, Pfr.i.R., Msgr., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "6": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°der°Fastenzeit¥p¥tn. B. Komm des ¥fhl. Fridolin von Säckingen¥0f, Mönch, Glb°(RK) (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder vom°Hl, FastPräf¥p",
        "notes": "",
        "deceased": "2006 †¥tPaul°Kasper,°Pfarrkurat°i.R., Künzell¥-Dietershausen¥p2006 †¥tWerner°Diegmüller, Pfr.i.R., Msgr., GR, Fulda¥p2013 †¥tP.°Siegbert°Aloys°Kleene°OP, GR, Bad°Wörishofen¥p2021 †¥tWalter°Hofmann, OStR°i.K.i.R., GR, Künzell¥-Bachrain¥p",
        "deceased_more": "1974 †¥tFranz°Demuth°(Königgrätz), Pfr.i.R., Neuhof¥p1992 †¥tIgnaz°Degenhardt,°Rektor,°Krankenhauspfarrer, Prälat,°Heiligenstadt¥p1993 †¥tRudolf°Koch,°Msgr., Pfarrer°in°Hanau¥p2006 †¥tPaul°Kasper,°Pfarrkurat°i.R., Künzell¥-Dietershausen¥p2006 †¥tWerner°Diegmüller, Pfr.i.R., Msgr., GR, Fulda¥p2013 †¥tP.°Siegbert°Aloys°Kleene°OP, GR, Bad°Wörishofen¥p2021 †¥tWalter°Hofmann, OStR°i.K.i.R., GR, Künzell¥-Bachrain¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "7": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°der°Fastenzeit¥p¥tn. B. Komm der ¥fhll. Perpetua und Felizitas¥0f, Märt (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder von°den°Hll, FastPräf, n.B.°Hg°I¥p",
        "notes": "",
        "deceased": "2013 †¥tP.°Ansgar°Ponczek°OP,°Vechta¥p",
        "deceased_more": "1942 †¥tDr.°Joseph°Wahl, Dr.°iur.°can., Pfarrkurat°in°Neuenberg¥p1955 †¥tPhilipp°Kirchberg,°Komm.°Assessor°in°Heiligenstadt¥p1975 †¥tJohannes°Schütz°(Breslau), Pfr.i.R., Zella/Eichsfeld¥p1989 †¥tHeinrich°Göbel, Pfarrer°in°Weida¥p1992 †¥tP.°Gamelbert°Franz°Josef°Sommer°OFM,°Beicht¥-°und°Umgebungsseelsorger,°Kirchhain¥p2013 †¥tP.°Ansgar°Ponczek°OP,°Vechta¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "8": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°der°Fastenzeit¥p¥tn. B. Komm des ¥fhl. Johannes von Gott¥0f, Ordgr (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder vom°Hl, FastPräf¥p",
        "notes": "",
        "deceased": "2005 †¥tP. Dr.°Franz°Konrad°OMI,°Mainz¥p2010 †¥tClemens°Mayer, Pfr.i.R., Gladenbach¥-Weitershausen¥p",
        "deceased_more": "1981 †¥tAugustin°Möller, Pfr.i.R., Münster¥p1989 †¥tP.°Benignus°Ebert°OFM,°Rottenburg¥p2005 †¥tP. Dr.°Franz°Konrad°OMI,°Mainz¥p2010 †¥tClemens°Mayer, Pfr.i.R., Gladenbach¥-Weitershausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "9": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°der°Fastenzeit¥p¥tn. B. Komm des ¥fhl. Bruno von Querfurt¥0f, Bi, Glb, Märt°(RK), oder der ¥fhl. Franziska von Rom¥0f, Ordgr (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder von°einem°der°Hll, FastPräf¥pv/ros¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "2019 †¥tErwin°Krack, Pfr.i.R., GR, Biebergemünd¥-Kassel¥p",
        "deceased_more": "1959 †¥tP.°Heinrich°Beck°OMI,°Pfarrkurat°in°Niedersachswerfen¥p1975 †¥tPhilipp°Hartmann, Pfr.i.R., Msgr., GR, Erfurt¥p2019 †¥tErwin°Krack, Pfr.i.R., GR, Biebergemünd¥-Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "10": {
        "liturgy": "¥fSo¥0f¥a¥t¥f4. Fastensonntag (Laetare)¥0f – Psalt:°IV.°Woche¥pv/ros¥t¥fMs eig¥0f, Cr, FastPräf I oder II bzw. eig°Präf, FSS:°MB°540¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fHeute können als LL und Ev die Texte vom Lesejahr°A genommen werden.¥0f Dann nimmt man bei den Messtexten die ¥feig°Präf¥0f und den entsprechenden ¥fKommunionvers¥0f.¥p¥sHeute wird unter dem Jahresthema „The Sound of Dialogue – Gemeinsam Zukunft bauen“ das „¥fJahr der christlich-jüdischen Zusammenarbeit 2024 – 5784/5785¥0f“ eröffnet. (Diese Bezeichnung tritt seit 2024 an die Stelle der bisherigen „Woche der Brüderlichkeit“ und nimmt neben der christlichen jetzt auch die jüdische Zeitrechnung auf.) Material für jüdisch-christliche Gemeinschaftsfeiern wird herausgegeben vom Koordinierungsrat der Gesellschaften für Christlich-Jüdische Zusammenarbeit, www.deutscher¥-koordinierungsrat.de.¥p",
        "deceased": "",
        "deceased_more": "1960 †¥tJulius°Mähler, Pfr.i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "11": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, FastPräf¥p",
        "notes": "¥fHinweis:¥0f ¥sWenn am 4.°Fastensonntag die Lesungen vom Lesejahr°A nicht genommen wurden, können die folgenden Lesungen an einem beliebigen Tag dieser Woche genommen werden: L:°Mi°7¥v,7¥_9¥0v, Ev:°Joh°9¥v,1¥_41¥0v (siehe°ML°IV°184ff/ᴺ186ff). Dazu nimmt man die Messtexte vom Wochentag mit ¥fPräf und Kommunionvers „Vom Blindgeborenen“¥0f (MB°116f/²114f).¥p",
        "deceased": "2004 †¥tKurt°Schmegner°(Jassy/Fulda), Pfr.i.R., GR, Sinzing¥-Viehhausen¥p",
        "deceased_more": "1955 †¥tJoseph°Kress, Pfarrer°in°Naumburg¥p2004 †¥tKurt°Schmegner°(Jassy/Fulda), Pfr.i.R., GR, Sinzing¥-Viehhausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "12": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, FastPräf¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute kann in den Gottesdiensten an die ¥fGründung des Klosters Fulda¥0f (und damit der Kirche von Fulda und der Stadt Fulda) mit der Errichtung des Kreuzes durch den hl. Sturmius im Auftrag des hl. Bonifatius am 12. März 744 erinnert und für das Bistum und die Stadt Fulda im Geist ihrer hll. Gründer und des hl. Benedikt in den Fürbitten besonders gebetet werden. Dazu passt die Strophe GL°877¥v,9¥0v des Bonifatiusliedes.¥p",
        "deceased": "1995 †¥tSiegfried°Blaszczyk, GR, Pfarrer°in°Mernes¥p2020 †¥tP.°Bardo°Geßner°OFM,°Fulda¥p",
        "deceased_more": "1969 †¥tEmil°Klüh, Dechant, Pfarrer°in°Großentaft¥p1995 †¥tSiegfried°Blaszczyk, GR, Pfarrer°in°Mernes¥p2020 †¥tP.°Bardo°Geßner°OFM,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "13": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°der°Fastenzeit¥p¥tn. B. Komm der ¥fhl. Paulina¥0f, Ord (FD) (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder von°der°Hl, FastPräf¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute ist der 11. Jahrestag der Wahl von Papst Franziskus.¥p",
        "deceased": "",
        "deceased_more": "1935 †¥tChristoph°Wetter, Pfr.i.R., Westhausen¥p1959 †¥tOtto°Letzner°(Breslau), Pfr.i.R., Bad°Frankenhausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "14": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°der°Fastenzeit¥p¥tn. B. Komm der ¥fhl. Mathilde¥0f, Königin°(RK/FD)°– ¥w¥fMs¥0f:°MB°642¥0w (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder von°der°Hl, FastPräf¥p",
        "notes": "",
        "deceased": "1996 †¥tJosef°Kettner°(Leitmeritz), Pfr.i.R., GR, Fulda¥p1998 †¥tRudolf°Faulstich, Pfr.i.R., GR, Blankenau¥p2018 †¥tAnton°Scheuß°(Köln), Pfr.i.R., Fulda¥p2024 †¥tWolfgang°Hünnekens, Pfr.i.R., GR, Flieden¥p",
        "deceased_more": "1921 †¥tFranz°Herzig, Dechant, Pfarrer°in°Rasdorf¥p1944 †¥tPhilipp°Huschenbett, Pfr.i.R., Heiligenstadt¥p1950 †¥tAndreas°Böhm°(Ermland), Pfr.i.R., Ilmenau¥p1980 †¥tFranz°Wiederhold, Pfr.i.R., GR, Niederorschel¥p1990 †¥tP.°Flavian°Häberle°OFM, GR, Fulda¥p1996 †¥tJosef°Kettner°(Leitmeritz), Pfr.i.R., GR, Fulda¥p1998 †¥tRudolf°Faulstich, Pfr.i.R., GR, Blankenau¥p2018 †¥tAnton°Scheuß°(Köln), Pfr.i.R., Fulda¥p2024 †¥tWolfgang°Hünnekens, Pfr.i.R., GR, Flieden¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "15": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°der°Fastenzeit¥p¥tn. B. Komm des ¥fhl. Klemens Maria Hofbauer¥0f, Ordpr°(RK), oder ¥kim Dom zu Fulda¥0k des ¥fhl.°Zacharias¥0f, Pp (FD) (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder von°einem°der°Hll, FastPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1976 †¥tJosef°Neumann°(Breslau), Pfr.i.R., GR, Birstein¥p1981 †¥tAnton°Josef°Schleicher,°StR°i.K., Pilgerzell¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "16": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, FastPräf¥pv¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1941 †¥tDr.°Karl°Leimbach, Prof., Apostol.°Protonotar,°Domdechant,°Fulda¥p1965 †¥tAloys°Hild, Pfr.i.R., Hallenberg/Krs.°Brilon¥p1967 †¥tFranz°Blaschke°(Leitmeritz), Pfr.i.R., Hebel°üb.°Wabern¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "17": {
        "liturgy": "¥fSo¥0f¥a¥t¥f5. Fastensonntag¥0f – Psalt:°I.°Woche¥pv¥t¥fMs eig¥0f, Cr, FastPräf I oder II bzw. eig°Präf, FSS:°MB°540¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fAb dem 5. Fastensonntag sollen nach altem Brauch Kreuze und Bilder (in Violett) verhüllt werden.¥0f Die Kreuze bleiben verhüllt bis zum Ende der Karfreitagsliturgie, die Bilder jedoch bis zum Beginn der Osternachtfeier.¥p¥s¥fHeute können als LL und Ev die Texte vom Lesejahr°A genommen werden.¥0f Dann nimmt man bei den Messtexten die ¥feig°Präf¥0f und den entsprechenden ¥fKommunionvers¥0f.¥p¥sDie ¥fKommemoration der hl. Gertrud von Nivelles¥0f und ¥fdes hl. Patrick¥0f entfallen in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1943 †¥tAloys°Fick, Pfarrer°in°Mengelrode¥p1952 †¥tHeinrich°Lecher, Pfr.i.R., Niederklein¥p1955 †¥tAloys°Höppner, Pfr.i.R., Heiligenstadt¥p1966 †¥tAugust°Brehler, Pfr.i.R., Müs/Krs.°Fulda¥p1980 †¥tErnst°Pohl°(Olmütz), Pfr.i.R., Schenklengsfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "18": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°der°Fastenzeit¥p¥tn. B. Komm des ¥fhl. Cyrill von Jerusalem¥0f, Bi, Kl (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder vom°Hl, LeidPräf°I°oder°KreuzPräf¥pw¥t¥kabends:¥0k ggf.°¥fVorabendmesse°vom°H¥0f – ¥f1.°Vp°vom°folg°H¥0f°–°¥f1.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥sAn den Wochentagen der 5.°Fastenwoche können zu Lesehore, Laudes und Vesper die Hymnen der Karwoche (StB°II°176ff) genommen werden.¥p¥sWenn am 5.°Fastensonntag die Lesungen vom Lesejahr°A nicht genommen wurden, können die folgenden Lesungen an einem beliebigen Tag dieser Woche (außer am 19. März) genommen werden: L:°2°Kön°4¥v,18b¥_21.32¥_37¥0v, Ev:°Joh°11¥v,1¥_45¥0v (siehe°ML°IV°210ff/ ᴺ212ff). Dazu nimmt man die Messtexte vom Wochentag mit ¥fPräf und Kommunionvers „Von der Auferweckung des Lazarus“¥0f (MB°126f/²124f).¥p",
        "deceased": "",
        "deceased_more": "1935 †¥tFriedrich°Gutberlet, Pfr.i.R., KämmerzeII¥p1973 †¥tRichard°Möller, Pfr.i.R., GR, Erfurtshausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "19": {
        "liturgy": "¥fDi¥0f¥t¥qhHl. Josef, Bräutigam der Gottesmutter Maria¥0f, ¥fSchutzpatron der Kirche, Hochfest¥0f¥lTe°Deum – Kl.°Hore: eig Ant,°ErgPs¥pw¥t¥fMs eig¥0f, Gl,°Cr, Präf hl. Josef, n.B.°Hg°I, FSS:°MB°560°– 2.°Vp°vom°H°–°2.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥sJosefslied im GL°872, auch nach Melodie GL°280 singbar.¥p¥sHeute ist der 11. Jahrestag der Amtseinführung von Papst Franziskus.¥p",
        "deceased": "",
        "deceased_more": "1944 †¥tAugust°Gnau, Pfarrer°in°Mardorf¥p1945 †¥tTheodor°Weidner, Dechant, Pfarrer°in°Hanau¥p1952 †¥tOtto°Fränzel°(Olmütz), Pfr.i.R., Volkmarsen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "20": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, LeidPräf°I°oder°KreuzPräf¥p",
        "notes": "",
        "deceased": "2005 †¥tMartin°Jäger, Pfr.i.R., GR, Fulda¥-Bronnzell¥p",
        "deceased_more": "1952 †¥tFranz°Schopp,°Pfarrkurat°in°Müs¥p2005 †¥tMartin°Jäger, Pfr.i.R., GR, Fulda¥-Bronnzell¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "21": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, LeidPräf°I°oder°KreuzPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1968 †¥tJoseph Decher, Pfr.i.R., Eiterfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "22": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, LeidPräf°I°oder°KreuzPräf¥p",
        "notes": "",
        "deceased": "2009 †¥tLothar°Pfützner, Pfr.i.R., Blankenhain¥p",
        "deceased_more": "1938 †¥tWilhelm°van°Moll, Pfarrer°in°Maberzell¥p1954 †¥tAugust°Günther, Pfarrer°in°Dietershausen¥p1970 †¥tJosef°Luse°(Leitmeritz), Pfr.i.R., GR, Ulmbach¥p1977 †¥tKurt°Richardt, Pfr.i.R., GR, Erfurt¥p2009 †¥tLothar°Pfützner, Pfr.i.R., Blankenhain¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "23": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°der°Fastenzeit¥p¥tn. B. Komm des ¥fhl. Turibio von Mongrovejo¥0f, Bi (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder vom°Hl, LeidPräf°I°oder°KreuzPräf¥pr¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "1994 †¥tP.°Meinolf°Vogt°OFM, Pfarrer°in°Rüstungen¥p",
        "deceased_more": "1945 †¥tGeorg°Riethmüller, Pfarrer°in°Geismar/Eichsfeld¥p1978 †¥tAlbert°Frank°(Prag), GR, Pfarrer°in°Kirchheim¥p1994 †¥tP.°Meinolf°Vogt°OFM, Pfarrer°in°Rüstungen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "24": {
        "liturgy": "¥fSo¥0f¥a¥t¥qhPalmsonntag vom Leiden des Herrn¥0f – Psalt:°II.°Woche¥pr¥t¥fFeier des Einzugs Christi in Jerusalem¥0f, Palmweihe, Evangelium (Mk°11¥v,1¥_10¥0v) und Palmprozession oder feierl. oder einf. Einzug¥pr¥t¥fMs eig¥0f°(nach Prozession oder feierlichem Einzug folgt das Tg), Passion, Cr, eig°Präf, FSS:°MBO°14¥_16,°MBI°226°bzw.°MBkl°540¥p",
        "notes": "¥fHEILIGE WOCHE – KARWOCHE¥0f¥j¥fHinweise:¥0f¥p¥sFür die folgenden beiden Wochen kann das 1992 erschienene Stundenbuch und das 1996 erschienene Messbuch für Karwoche und Osteroktav verwendet werden.¥p¥sVon Sonntag bis Donnerstag gibt es im Offizium ¥feigene Hymnen, Antiphonen und Texte von der Kurzlesung an¥0f.¥p¥sDas ¥fGedächtnis des Einzuges unseres Herrn in Jerusalem¥0f soll ¥fam Palmsonntag¥0f in allen Messen seinen Ausdruck finden: durch Prozession oder feierlichen Einzug vor dem Hauptgottesdienst, durch einfachen Einzug vor den anderen Messen. Der feierliche Einzug, nicht aber die Prozession kann wiederholt werden vor der einen oder anderen Messe mit großer Teilnehmerzahl. Der Priester trägt bei der Prozession Messgewand oder Vespermantel in Rot. Ritus siehe MBI°[1]ff bzw. MBO°3ff.¥p¥s¥fKleinere Gottesdienstgemeinschaften mögen sich zur Feier des Triduum Paschale größeren anschließen¥0f (FOV°43).¥p¥s¥fVon Gründonnerstag bis Ostermontag einschl. sind Messen ohne Gemeinde¥0f (vgl. FOV 47) (Privatzelebration, Messen für Einzelne oder kleine Gruppen) ¥fund Beerdigungsmessen nicht gestattet¥0f (vgl. AEM°336). Über einen eigenen Wortgottesdienst bei einer Beerdigung s.°o.°Kap.°III.D.8a.¥p¥s¥fDie Kirche empfiehlt den recht vorbereiteten und ehrfürchtigen Kommunionempfang bei jeder hl.°Messe. Jeder Gläubige aber soll wenigstens einmal im Jahr, nach Möglichkeit in der österlichen Zeit¥0f (zwischen Aschermittwoch und Pfingsten), ¥fdie hl. Kommunion empfangen¥0f und durch diese volle Teilnahme an der Eucharistie seine Gemeinschaft mit der Kirche sichtbar machen (vgl. Weisung d. dt. Bischöfe zur kirchl. Bußpraxis, 24.11.1986, zuletzt veröffentlicht in: Handbuch Bistum Fulda, Gruppe°7, Fundstelle°3.6, S.°5, letzter Abschnitt; can.°920°CIC; KKK°1417). ¥p¥s¥fAm Ostersonntag im Hohen Dom zu Fulda Pontifikalamt mit Apostolischem Segen¥0f.¥p¥sDer früher am Palmsonntag begangene diözesane Weltjugendtag wurde von Papst Franziskus auf den jährlichen Christkönigssonntag verlegt. Heute wird er nicht mehr gefeiert.¥p¥sDie ¥fKommemoration des hl. Oscar Arnulfo Romero¥0f entfällt in diesem Jahr.¥p",
        "deceased": "1994 †¥tRichard°Heddergott, Pfarrer°in°Ferna¥p",
        "deceased_more": "1994 †¥tRichard°Heddergott, Pfarrer°in°Ferna¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "25": {
        "liturgy": "¥fMo¥0f¥t¥fMontag der Karwoche¥0f¥pv¥t¥fMs eig¥0f, LeidPräf II oder KreuzPräf¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fDas Hochfest der Verkündigung des Herrn wird in diesem Jahr auf den Montag nach dem Weißen Sonntag, den 8. April, verlegt.¥0f¥p",
        "deceased": "1999 †¥tP.°Altfried°Gabor°SDB,°Kaplan°in°Kassel,°St.°Andreas¥p2019 †¥tCarl¥-Heinz°Schmittdiel, Pfr.i.R., GR, Treysa¥p",
        "deceased_more": "1952 †¥tAdolf°Farnung, Pfarrer°in°Anzefahr¥p1974 †¥tRobert°Köllner°(Olmütz), Pfr.i.R., Wächtersbach¥p1990 †¥tGodehard°Fiedler, OStR°i.K.i.R., GR, Hanau¥p1991 †¥tDr.°Josef°Kirchberg, Pfr.i.R., Msgr., GR, Kassel¥p1999 †¥tP.°Altfried°Gabor°SDB,°Kaplan°in°Kassel,°St.°Andreas¥p2019 †¥tCarl¥-Heinz°Schmittdiel, Pfr.i.R., GR, Treysa¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "26": {
        "liturgy": "¥fDi¥0f¥t¥fDienstag der Karwoche¥0f¥pv¥t¥fMs eig¥0f, LeidPräf II oder KreuzPräf¥l¥kAm°Vormittag im°Dom°zu°Fulda:¥0k¥pw¥t¥fFeierliche Chrisammesse¥0f (Ölweihemesse) mit°Erneuerung°der°Weiheversprechen der°Priester°und°Diakone¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fHeute Vormittag ist im Dom zu Fulda Chrisammesse¥0f (Ölweihemesse) mit eig Formular, Gl, eig Präf, Weihe der Öle, Farbe: weiß. ¥fDiese Messe mit der Erneuerung der Weiheversprechen der Priester feiert der Bischof in Konzelebration mit seinem Priesterkollegium.¥0f Sie soll ein Ausdruck der Verbundenheit zwischen dem Bischof und seinen Priestern sein. Daher empfiehlt es sich, ¥fdass alle Priester nach Möglichkeit an dieser Messe teilnehmen.¥0f Zum Zeichen der Einheit sollen Priester aus allen Regionen des Bistums konzelebrieren (vgl.°MBI°[15], MBO°339) und unter beiden Gestalten kommunizieren. Wer in der Chrisammesse (kon)zelebriert hat, darf auch in der Abendmahlsmesse (kon)zelebrieren. Über zweimalige Kommunion  s.°o.°Kap.°III.C.16c.¥p¥sDie ¥fKommemoration des hl. Liudger¥0f entfällt in diesem Jahr.¥p",
        "deceased": "2011 †¥tDr.°Aloysius°Winter°(Hildesheim), Prof.°em., Dr.°theol., lic.°phil., Prälat,°Perl/Saarland¥p",
        "deceased_more": "1921 †¥tWilhelm°Magnus°Weber, Pfr.i.R., Marbach¥p2011 †¥tDr.°Aloysius°Winter°(Hildesheim), Prof.°em., Dr.°theol., lic.°phil., Prälat,°Perl/Saarland¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "27": {
        "liturgy": "¥fMi¥0f¥t¥fMittwoch der Karwoche¥0f¥pv¥t¥fMs eig¥0f, LeidPräf II oder KreuzPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1960 †¥tEduard°Nüdling, Pfarrer°in°Steinbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "28": {
        "liturgy": "¥fDo¥0f¥t¥qhGründonnerstag¥0f oder ¥fHoher Donnerstag¥0f¥l¥fOff vom Tag¥0f. Zur Lesehore können auch die Ant u.°Ps vom Freitag der°III.°Woche genommen werden.¥p¥fVor dem Abendmahlsamt endet die Österliche Bußzeit.¥0f¥j¥fDIE DREI ÖSTERLICHEN TAGE¥0f ¥lVOM°LEIDEN°UND°STERBEN, VON°DER°GRABESRUHE UND°DER°AUFERSTEHUNG UNSERES°HERRN°JESUS°CHRISTUS¥lvom°Abendmahlsamt bis°zur°2.°Vesper°des OStersonntags°einschl.¥jw¥t¥fMs vom Letzten Abendmahl¥0f, ¥wGl mit ¥fLäuten der Glocken¥0f (die danach schweigen bis in die Ostervigil; die Orgel kann bis zum Gesang bei der Übertragung einschl. spielen (s.o.)), ¥0w¥wHomilie, ¥fFußwaschung¥0f nach dem Ev empfohlen, EuchPräf°I°oder°II, in°den Hg°I¥_III eig°Einschübe (MBI°[26¥_37] bzw. MBO°32¥_62). ¥0w¥w¥fKeine°Entlassriten¥0f, sondern nach dem Schlussgebet ¥fÜbertragung des hl.°Sakramentes¥0f für die Kommunionfeier des Karfreitags an einen geeigneten Ort, ¥fEntblößung des Altars¥0f ohne besonderen Ritus, jedoch nur dort, wo auch die Liturgiefeier am Karfreitag gehalten wird, ¥fEntfernen der Kreuze¥0f aus der Kirche ¥fund des Weihwassers¥0f aus den Weihwasserbecken an den Eingängen.¥0w¥lVp entfällt für die Teilnehmer der Abendmahlsfeier.¥l¥f2.°Kp°vom°So¥0f (statt Resp die Ant „Christus°…“)¥p",
        "notes": "¥fHinweise:¥0f¥p¥s„Nach ältester Überlieferung der Kirche sind heute alle Messen ohne Gemeinde untersagt“ (FOV°47), also ¥fkeine Privatzelebration, keine Messen für Einzelne oder für kleine Gruppen¥0f.¥p¥sAm Gründonnerstag darf ¥fkeine Begräbnismesse¥0f gefeiert werden (vgl.°AEM°336). ¥p¥s¥fDen Kranken darf¥0f während des ganzen Triduum Paschale an allen Tagen ¥fdie hl. Kommunion gereicht werden¥0f, ¥fam Karsamstag jedoch nur in Todesgefahr¥0f.¥p¥s¥fAm Gründonnerstag sind Altarkreuz(e) und Prozessionskreuz weiß verhüllt¥0f. ¥p¥sDie ¥fMesse vom Letzten Abendmahl wird am Abend zwischen 16°Uhr und 21°Uhr gefeiert¥0f, zu einer Stunde, die für die Teilnahme der gesamten Ortsgemeinde am geeignetsten ist (FOV°46). In ihr sollen ¥fgenügend Hostien auch für die Kommunionspendung am Karfreitag konsekriert¥0f werden.¥p¥s¥fDie Orgel kann alle Lieder und Gesänge bis einschließlich des Gesanges zur Übertragung des Allerheiligsten „Pange lingua“ begleiten¥0f, danach schweigt sie bis vor dem Gloria der Osternachtfeier, das dann wieder mit der Orgel begleitet wird (vgl. hierzu: SCHOTT Liedvorschläge aus dem Gotteslob, hrsg. von Kurt Grahl, Freiburg°2014, S.°42 unten).¥p¥s¥fDie Fußwaschung in den Abendmahlsfeiern¥0f kann nicht nur an Jungen und Männern, sondern auch an Mädchen und Frauen vorgenommen werden (Dekret der KGS vom 6.°Januar°2016 von Papst Franziskus)¥p¥s¥fNach dem Abendmahlsamt mögen die Gläubigen eine angemessene Zeit hindurch nächtliche Anbetung vor dem hl.°Sakrament (ohne Monstranz!) halten¥0f, die nach Mitternacht jedoch ohne jede Feierlichkeit sein soll. ¥fÖlbergandachten und Anbetungsstunden¥0f werden nach örtlichem Brauch gehalten. Zur Andacht: GL°286; GL°674¥v,2¥0v mit GL°675¥v,3+6+8¥0v; GL°676¥v,1¥0v; Abschluss: GL°682¥v,1¥0v.¥p¥s¥fEin vollkommener Ablass¥0f (s.°o.°Kap.°I.C.10.) kann unter den üblichen Bedingungen (Beichte, entschlossene Abkehr von jeder Sünde, Kommunionempfang, Gebet in den Anliegen des Papstes) gewonnen werden, wenn man ¥fnach der Abendmahlsmesse das „Tantum ergo“ andächtig betet oder singt¥0f.¥p",
        "deceased": "1997 †¥tAlois°Nolte, Pfarrer°in°Rasdorf¥p2007 †¥tWalter°Herber, Pfr.i.R., Kalbach¥-Uttrichshausen¥p2014 †¥tAugust°Kämmerer, Pfr.i.R., GR, Fulda¥p2021 †¥tJürgen°Heldmann, Pfarrer,°Fulda¥-Malkes¥p",
        "deceased_more": "1959 †¥tWilhelm°Schüler,°Dompfr.i.R., Msgr., Fulda¥p1969 †¥tKarl°Pelchen°(Breslau), Pfr.i.R., Holungen/Eichsfeld¥p1986 †¥tFranz°Nitsche°(Breslau/Görlitz),°Caritasdirektor°i.R., Apostol.°Protonotar,°Erfurt¥p1997 †¥tAlois°Nolte, Pfarrer°in°Rasdorf¥p2007 †¥tWalter°Herber, Pfr.i.R., Kalbach¥-Uttrichshausen¥p2014 †¥tAugust°Kämmerer, Pfr.i.R., GR, Fulda¥p2021 †¥tJürgen°Heldmann, Pfarrer,°Fulda¥-Malkes¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "29": {
        "liturgy": "¥fFr¥0f¥t¥qhKarfreitag¥0f – ¥fFast- und Abstinenztag¥0f – ¥fOff°eig¥0f¥pr¥t¥fLiturgiefeier vom Leiden und Sterben Christi¥0f ¥w(15°Uhr°oder°später) ¥0w¥wmit Lesungen, ¥fPassion¥0f, ¥fGroßen°Fürbitten¥0f (Auswahl°möglich), ¥fKreuzverehrung¥0f, ¥fKommunionfeier¥0f. Gemäß der verbindlichen liturgischen Ordnung ist die Kommunionfeier integraler Bestandteil der Karfreitagsliturgie. ¥0w¥wDanach ¥fÜbertragung des hl. Sakrament in einfacher Form¥0f (am Aufbewahrungsort brennt mindestens ein Licht) und ¥fEntblößung des Hauptaltars¥0f, doch bleiben Kreuz und Kerzen stehen. Von der Kreuzverehrung bis zur Ostervigil wird vor dem Kreuz eine Kniebeuge gemacht.¥0w¥lVp entfällt für die Teilnehmer der Liturgiefeier.¥l¥f2.°Kp°vom°So¥0f (statt Resp die Ant „Christus°…“)¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute sind Messfeiern nicht gestattet. ¥p¥s¥fHeute ist strenger Fast- und Abstinenztag¥0f (vgl. cann.°1251f°CIC und Hinweis Nr. 18 vor Aschermittwoch).¥p¥s¥fLesehore und Laudes sollen am Karfreitag gemeinsam mit der Gemeinde in der Kirche gefeiert werden (Trauermette)¥0f (vgl.°GL°307¥v,1¥_9¥0v); liturgische Farbe: violett.¥p¥sZu Beginn der Liturgiefeier am Karfreitag sollen der Altar und Altarraum ganz leer sein, ohne Kreuze, Leuchter und Tücher.¥p¥sDas in der Liturgiefeier am Karfreitag zur Kreuzenthüllung verwendete Kreuz kann rot verhüllt sein (nach römischem Vorbild in St. Peter).¥p¥sBei einer ¥fGrablegungsfeier am Karfreitag¥0f kann das Kreuz oder eine Statue mitgetragen werden. Das Allerheiligste darf jedoch nicht im „Heiligen Grab“ ausgesetzt werden (vgl. CE°1998, Nr.°331).¥p¥s¥fDie hl. Kommunion¥0f darf nur während dieser Feier ausgeteilt werden. Den Kranken darf sie jedoch zu jeder Zeit gebracht werden.¥p¥s¥fAm Karfreitag beginnt die Novene zur Göttlichen Barmherzigkeit¥0f zur Vorbereitung des Festes der göttlichen Barmherzigkeit am 2.°Sonntag der Osterzeit (¥fBarmherzigkeitssonntag¥0f).¥p¥s¥fEin vollkommener Ablass¥0f (s.°o.°Kap.°I.C.10.) kann unter den üblichen Bedingungen (Beichte, entschlossene Abkehr von jeder Sünde, Kommunionempfang, Gebet in den Anliegen des Papstes) gewonnen werden, wenn man die ¥fLiturgie des Karfreitags¥0f andächtig mitfeiert und dabei an der ¥fKreuzverehrung¥0f teilnimmt.¥p",
        "deceased": "",
        "deceased_more": "1935 †¥tWilhelm°Schrimpf,°Rektor°i.R., Fritzlar¥p1947 †¥tLudwig°Nüdling, Pfr.i.R., Oberrothof°bei°Motzlar¥p1976 †¥tAugust°Jost, Pfr.i.R., GR, Hünfeld¥p1978 †¥tFranz°Faulstich, GR, Pfarrer°in°Eschwege¥p1986 †¥tAlbin°Kiel, Pfarrer°in°Gersfeld¥p1989 †¥tJosef°Schminke, GR, Pfarrer°in°Giesel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "30": {
        "liturgy": "¥fSa¥0f¥t¥fKarsamstag¥0f – ¥fOff°eig¥0f¥p¥t¥f2.°Kp°vom°So¥0f (statt Resp die Ant „Christus°…“) ¥l(entfällt für die Teilnehmer der Ostervigilfeier)¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fLesehore und Laudes sollen am Karsamstag gemeinsam mit der Gemeinde in der Kirche gefeiert werden (Trauermette)¥0f (vgl. GL°310¥v,1¥_10¥0v); Farbe: violett.¥p¥sHeute sind Messfeiern ohne die Osternachtfeier mit der Gemeinde nicht gestattet.¥p¥sDie hl. Kommunion kann ¥fam Karsamstag nur als Wegzehrung für die Sterbenden¥0f gereicht werden.¥p",
        "deceased": "2001 †¥tLudwig°Schreiber, Dechant, Pfarrer°in°Züntersbach¥p2013 †¥tP.°Rudolf°Rüttinger°OMI,°Hünfeld¥p2022 †¥tLeonhard°Herden°(Mainz), Pfr.i.R., GR, Fulda¥p",
        "deceased_more": "1937 †¥tAloys°Beck, Pfr.i.R., Heiligenstadt¥p2001 †¥tLudwig°Schreiber, Dechant, Pfarrer°in°Züntersbach¥p2013 †¥tP.°Rudolf°Rüttinger°OMI,°Hünfeld¥p2022 †¥tLeonhard°Herden°(Mainz), Pfr.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "31": {
        "liturgy": "¥fSo¥0f¥a¥t¥qhHochfest der Auferstehung des Herrn¥0f – ¥fOstersonntag¥0f¥p¥pw¥t¥fDie Feier der Osternacht¥0f (GL°312)¥lBeginn nicht vor Einbruch der Dunkelheit und Ende°nicht nach Sonnenaufgang –¥l¥fLichtfeier:¥0f Segnung des Feuers, Bezeichnung der Osterkerze, Lichtprozession°(GL°312¥v,1¥0v), Osterlob°(Exsultet) –¥l¥fWortgottesdienst:¥0f Sieben alttestamentl. Lesungen. Aus°pastoralen Gründen kann die Zahl vermindert werden, es werden aber wenigstens drei gelesen; die Lesung vom Durchzug durch das Rote Meer (Ex°14) darf nie ausfallen. – ¥l¥fGl°(mit Glockengeläut und Orgel), feierliches°Halleluja¥0f°(GL°312¥v,9¥0v oder 175¥v,2¥0v) – ¥l¥fTauffeier:¥0f Litanei (entfällt, wenn kein Taufwasser geweiht wird), Taufwasserweihe (oder OSterwasserweihe), ggf.°Taufe, ¥fErneuerung des Taufversprechens, Besprengung der Gläubigen¥0f („Vidi°aquam“,°GL°125), kein°Cr°(im°Taufbekenntnis°enthalten), Fürbitten; Gesänge: GL°488, GL°491 – ¥l¥fEucharistiefeier:¥0f OsterPräf I, in°den Hg°I¥_III eig°Einschübe, FSS, ¥f„Gehet hin in Frieden. Halleluja, Halleluja“¥0f (bis zum 2.°So°der OSterzeit einschließlich; wenn°gesungen, bis zum Ende der Osterzeit möglich)¥p¥p¥fHinweise:¥0f¥p¥sWer die Osternachtmesse (kon)zelebriert hat, kann am Tage ebenfalls (kon)zelebrieren, ggf. auch binieren oder trinieren.¥p¥s¥fIn der Tagesmesse empfiehlt sich¥0f anstelle des Allgemeinen Schuldbekenntnisses ¥fdie Besprengung mit dem in der Osternacht gesegneten Wasser als Taufgedächtnis¥0f („Vidi aquam“, GL°125).¥p¥s¥fSpeisen (Brot, Eier, Fleisch)¥0f können nach dem Schlussgebet gesegnet werden (s. MBO°182 oder Benediktionale°Nr.°7,°S.°58f).¥p¥s¥fEin vollkommener Ablass¥0f (s.°o.°Kap.°I.C.10.) ist unter den üblichen Bedingungen (Beichte, entschlossene Abkehr von jeder Sünde, Kommunionempfang, Gebet in den Anliegen des Papstes) verbunden mit dem ¥fEmpfang des Apostolischen Segens¥0f, den der Bischof heute Vormittag im Pontifikalamt im Dom zu Fulda spendet, und mit dem ¥fEmpfang des Päpstlichen Segens „Urbi et orbi“ (auch über Fernsehen, Radio oder Internet)¥0f, den der Heilige Vater heute Mittag in Rom spendet.¥p¥sAuf die ¥fFeier des Barmherzigkeitssonntages¥0f und die damit verbundene ¥fGewinnung eines vollkommenen Ablasses am kommenden 2. Sonntag der Osterzeit¥0f mögen die Gläubigen hingewiesen werden (siehe dazu auch Hinweis vor dem 2. So d. Osterzeit).¥p¥sAm Schluss der Komplet steht in der Osterzeit bis Pfingstsonntag einschl. die Marianische Antiphon ¥f„Regina°caeli“¥0f (GL°666¥v,3¥0v) bzw. ¥f„O°Himmelskönigin, frohlocke“¥0f (vgl.°GL°525).¥p¥t¥fAm Ostertag¥0f¥l¥fOff eig¥0f – Das Invitatorium wird heute immer vor den Laudes gebetet. ¥lDie Lesehore als Ersatz für die Teilnahme an der Vigilfeier besteht heute aus zwei, ggf. Drei°Lesungen des°AT sowie Epistel und Evangelium der Vigilfeier mit den zugehörigen Cantica und Orationen. – Te°Deum – ¥lFür die Teilnehmer der Osternachtfeier beginnt das Stundengebet mit dem Invitatorium und den Laudes; die Mitfeier der Osternacht gilt als Lesehore.¥pw¥t¥fMs eig¥0f – Anstelle des Allgemeinen Schuldbekenntnisses empfiehlt sich das ¥fTaufgedächtnis mit Besprengung der Gläubigen¥0f mit dem in der Osternacht geweihten Wasser („Vidi°aquam“,°GL°125). – Gl, Sequenz „Victimae°paschali°laudes“ (GL°320), Cr, OsterPräf°I, in°den Hg°I¥_III eig°Einschübe, FSS, ¥f„Gehet°hin in Frieden. Halleluja,°Halleluja“¥0f (bis°zum 2.°So°der OSterzeit einschließlich; wenn gesungen, bis zum Ende der Osterzeit möglich) – ¥l¥f2.°Kp°vom°So¥0f. Statt Resp die Ant „Das ist der Tag“.¥p",
        "notes": "¥fOSTERZEIT¥0f¥jDie Zeit der ¥fFünfzig Tage vom Sonntag der Auferstehung bis Pfingstsonntag¥0f wird als ¥f„der große Tag des Herrn“¥0f gefeiert. In diesen Tagen wird vor allem das ¥f„Halleluja“¥0f gesungen, ¥f¥kder¥0k Gesang der Osterzeit¥0f (vgl.°GOK°22); er sollte in dieser Zeit neben den charakteristischen ¥fOsterliedern mit Halleluja¥0f (GL°318, 322, 324, 326, 328, 331, 332, 333, 337) als ¥feigener Hallelujaruf¥0f in Erscheinung treten, etwa als Kehrvers zum Antwortpsalm, als Ruf vor dem Evangelium (GL°174¥_176) und als österlicher Entlassungsruf: „Gehet hin in Frieden, Halleluja, Halleluja …“ in der gesungenen Form. ¥fDie ersten acht Tage der Osterzeit bilden die Osteroktav und werden wie Hochfeste des Herrn begangen; während der Osteroktav Komplet vom So nach der 1. oder 2.°Vp mit eigenem Responsorium¥0f. ¥fMarianische Antiphon während der ganzen Osterzeit: „Regina caeli“¥0f (GL°666¥v,3¥0v) oder ¥f„Freu dich, du Himmelskönigin“¥0f (vgl.°GL°525).¥p¥p¥fLektionar zum StB II/3¥0f¥p¥fHinweise:¥0f¥p¥s¥fDie Osternachtmesse ist die eigentliche Osterfeier¥0f. Mit der Teilnahme an dieser Messe ist die sogenannte Sonntagspflicht erfüllt, ganz gleich, ob die Osternachtfeier am Abend, um Mitternacht oder am Morgen stattfindet.¥p¥s„‚¥fDie ganze Feier der Osternacht findet in der Nacht statt¥0f; sie soll entweder nicht vor Einbruch der Dunkelheit beginnen oder nicht nach der Morgendämmerung des Sonntags enden.‘ ¥fDiese Vorschrift ist streng einzuhalten.¥0f Gegenteilige Missbräuche und Gewohnheiten, die sich hier und dort eingebürgert haben, nämlich die Osternacht zu der Zeit zu feiern, zu der man die Vorabendmesse des Sonntags zu halten pflegt, werden verworfen“ (FOV°78; MBO°101 und MBI°[63], Hinweis Nr.°3; CE°333). ¥fIn diesem Jahr dauert die Dunkelheit ungefähr von 20.00°Uhr am Samstagabend bis Sonntag früh um 6.15°Uhr¥0f.¥p¥sEs soll dafür gesorgt werden, dass alle Gläubigen, die an der Osternachtfeier teilnehmen, ¥fKerzen für die Erneuerung des eigenen Taufversprechens¥0f haben.¥p¥sDas feierliche ¥fHalleluja in der Osternacht¥0f soll dreimal vom Zelebranten mit aufsteigendem Ton gesungen werden. Nach dem dritten Mal folgen die Psalmverse und darauf wieder das Halleluja, vom Volk gesungen (CE°352).¥p¥s¥fNeugetaufte Erwachsene sollen die hl. Kommunion unter beiden Gestalten empfangen¥0f und können vorweg besonders dazu eingeladen werden (CE°370).¥p¥s¥fSpeisen (Brot, Eier, Fleisch)¥0f können nach dem Schlussgebet gesegnet werden, s. MBO°174 oder Benediktionale°Nr.°7,°S.°58f.¥p¥s¥fEin vollkommener Ablass¥0f (s.°o.°Kap.°I.C.10.) kann unter den üblichen Bedingungen (Beichte, entschlossene Abkehr von jeder Sünde, Kommunionempfang, Gebet in den Anliegen des Papstes) gewonnen werden, wenn man während der Feier der Osternacht sein ¥fTaufbekenntnis¥0f nach einer rechtmäßig approbierten Formel erneuert.¥p¥s¥fEin vollkommener Ablass¥0f ist ebenso verbunden mit dem ¥fEmpfang des Apostolischen Segens¥0f, den der Bischof heute Vormittag im Pontifikalamt im Dom zu Fulda spendet, und mit dem ¥fEmpfang des Päpstlichen Segens „Urbi et orbi“ (auch über Fernsehen, Radio oder Internet)¥0f, den der Heilige Vater heute Mittag in Rom spendet.¥p¥sZur ¥fOsterzeit¥0f kann eine ¥fStatue des auferstandenen Christus¥0f an einem dafür geeigneten Platz im Altarraum oder in der Kirche aufgestellt werden.¥p¥s¥fIn der kommenden Nacht beginnt die Sommerzeit.¥0f¥p¥sHeute ist der 5. Jahrestag der Amtseinführung unseres Bischofs Michael.¥p",
        "deceased": "2006 †¥tJoachim°Passek°(Breslau/Görlitz), Pfr.i.R., GR, Geisa¥p",
        "deceased_more": "1932 †¥tDDr.°Alexander°Herzberg, Dr.°theol.°et°phil., Pfarrer°in°Erfurt,°Hl.°Kreuz¥p1956 †¥tHermann°Seifert, Pfarrer°in°Maberzell¥p1959 †¥tKarl°Graf, Pfr.i.R., Erfurtshausen¥p1972 †¥tAlfred°Beck°(Glatz), Pfr.i.R., Hirrlingen/Krs.°Tübingen¥p2006 †¥tJoachim°Passek°(Breslau/Görlitz), Pfr.i.R., GR, Geisa¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      }
    },
    "4": {
      "1": {
        "liturgy": "¥fMo¥0f¥a¥t¥fOstermontag¥0f – Off°eig°–°Te°Deum¥pw¥t¥fMs eig¥0f, Gl, n.B. Sequenz, Cr – ¥l¥kAn allen Tagen der Oktav:¥0k¥lOsterPräf°I, in°den°Hg°I¥_III eig°Einschübe, FSS:°MBO°314f oder 322f bzw. 317°(Segensgebet) oder°MB°542 mit Entlassungsruf°MB°531.¥l¥f1. oder 2. Kp vom So¥0f. Statt°des°Resp°die°Ant°„Das°ist°der°Tag°…“ – Or:°„Herr,°bleibe°…“°bzw.°„Allmächtiger°Gott,°…“¥p",
        "notes": "¥fEnde der Drei Österlichen Tage¥0f¥j¥mApril¥0m¥fHinweise:¥0f¥p¥s¥fDer Ostermontag ist in Deutschland kirchlich gebotener Feiertag im Rang eines Hochfestes.¥0f Es besteht ¥fApplikations- sowie Sonn- und Feiertagspflicht¥0f (s.°o.°Kap.°I.C.1.). In den Messfeiern wird das Glaubensbekenntnis gebetet bzw. gesungen.¥p¥s¥fDie Osterkerze¥0f hat bis Pfingsten ihren hervorgehobenen Platz im Altarraum. Sie brennt bei allen Gottesdiensten der Osterzeit.¥p",
        "deceased": "",
        "deceased_more": "1991 †¥tGünther°Hunold, Pfr.i.R., Erfurt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "2": {
        "liturgy": "¥fDi¥0f¥t¥fDienstag der Osteroktav¥0f – Off°eig°–°Te°Deum¥pw¥t¥fMs eig¥0f, Gl, n.B. Sequenz; OsterPräf°I°¥kusw.°wie°am OStermontag¥0k¥p",
        "notes": "¥fHinweis:¥0f ¥sDer ¥fGed des hl. Franz von Páola¥0f entfällt in diesem Jahr.¥p",
        "deceased": "1994 †¥tJohannes°Mainusch, Pfarrer°in°Scheßlitz°bei°Bamberg¥p1997 †¥tHeinrich°Küstner, Pfr.i.R., Homberg/Efze¥p",
        "deceased_more": "1942 †¥tJohannes°Hannig, Pfr.i.R., Kirchhasel¥p1944 †¥tWilhelm°Thüne, Pfr.i.R., Heiligenstadt¥p1971 †¥tWalter°Mutke°(Breslau),°Erzpriester, Pfr.i.R., Ettlingen¥p1994 †¥tJohannes°Mainusch, Pfarrer°in°Scheßlitz°bei°Bamberg¥p1997 †¥tHeinrich°Küstner, Pfr.i.R., Homberg/Efze¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "3": {
        "liturgy": "¥fMi¥0f¥t¥fMittwoch der Osteroktav¥0f – Off°eig°–°Te°Deum¥pw¥t¥fMs eig¥0f, Gl, n.B. Sequenz; OsterPräf°I°¥kusw.°wie°am OStermontag¥0k¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1952 †¥tAlbert°Grobecker°(Aachen),°Rektor°i.R., Deuna¥p1970 †¥tAdolf°Laufer, Pfr.i.R., GR, Michelsrombach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "4": {
        "liturgy": "¥fDo¥0f¥t¥fDonnerstag der Osteroktav¥0f – ¥fPriesterdonnerstag¥0f – Off°eig°–°Te°Deum¥pw¥t¥fMs eig¥0f, Gl, n.B. Sequenz; OsterPräf°I°¥kusw.°wie°am OStermontag¥0k¥p",
        "notes": "¥fHinweise:¥0f¥p¥sDer ¥fGed des hl. Isidor von Sevilla¥0f entfällt in diesem Jahr.¥p¥s¥fZum Priesterdonnerstag (monatl. Gebetstag für geistliche Berufe):¥0f Die Votivmesse ist nicht erlaubt. – Fürbitte(n) um Priesterberufungen. – Thema: „Wir verkünden nämlich nicht uns selbst, sondern Jesus Christus als den Herrn“ (2°Kor°4¥v,5¥0v). Intention: Katecheten.¥p",
        "deceased": "",
        "deceased_more": "1939 †¥tPaul°Fürst, Pfarrer°in°Steinbach/Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "5": {
        "liturgy": "¥fFr¥0f¥t¥fFreitag der Osteroktav¥0f – ¥fHerz¥-Jesu¥-Freitag¥0f – Off°eig°–°Te°Deum¥pw¥t¥fMs eig¥0f, Gl, n.B. Sequenz; OsterPräf°I°¥kusw.°wie°am OStermontag¥0k¥p",
        "notes": "¥fHinweise:¥0f¥p¥sIn der Osteroktav entfällt die Verpflichtung zum Freitagsopfer.¥p¥sDer ¥fGedenktag des hl. Vinzenz Ferrer¥0f entfällt in diesem Jahr.¥p¥s¥fZum°Herz¥-Jesu¥-Fr:¥0f Die Votivmesse ist nicht erlaubt.¥p",
        "deceased": "1974 †¥t¥fDr.°Adolf°Bolte¥0f, Dr.°theol.°h.c., Bischof°von°Fulda°(1959¥_1974)¥p",
        "deceased_more": "1936 †¥tWalter°von°Jagemann, Pfr.i.R., Burghaun¥p1941 †¥tFranz°Pralle, Pfarrer°in°Hofaschenbach¥p1956 †¥tHeinrich°Ständer, Pfr.i.R., Heuthen¥p1958 †¥tErnst°Hildebrand,°Direktor,°Heiligenstadt¥p1974 †¥t¥fDr.°Adolf°Bolte¥0f, Dr.°theol.°h.c., Bischof°von°Fulda°(1959¥_1974)¥p1976 †¥tJosef°Streb,°Propst°i.R., Prälat,°Heiligenstadt¥p1978 †¥tHermann°Hahner, Pfr.i.R., GR, Fulda¥p1988 †¥tMatthias°Wehner,°Kaplan°in°Trendelburg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "6": {
        "liturgy": "¥fSa¥0f¥t¥fSamstag der Osteroktav¥0f – ¥fHerz¥-Mariä¥-Samstag¥0f – Off°eig°–°Te°Deum¥pw¥t¥fMs eig¥0f, Gl, n.B. Sequenz; OsterPräf°I°¥kusw.°wie°am OStermontag¥0k¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Herz¥-Mariä¥-Sa:¥0f Die Votivmesse ist nicht erlaubt.¥p",
        "deceased": "2000 †¥tGerhard°Kunze, Pfr.i.R., GR, Fulda¥-Kohlhaus¥p",
        "deceased_more": "1955 †¥tAnton°Dunkel, Pfarrer°in°Großauheim¥p1956 †¥tFriedrich°Gogolin, Dechant, Pfarrer°in°Bad°Soden¥p1982 †¥tJosef°Schubert°(Königgrätz), Dechant, Pfarrer°in°Neustadt/Orla¥p2000 †¥tGerhard°Kunze, Pfr.i.R., GR, Fulda¥-Kohlhaus¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "7": {
        "liturgy": "¥fSo¥0f¥a¥t¥f2. Sonntag der Osterzeit¥0f – ¥fWeißer°Sonntag – Sonntag°der°Göttlichen°Barmherzigkeit¥0f – Off°eig°–°Te°Deum¥pw¥t¥fMs eig¥0f, Gl, n.B. Sequenz, Cr, OsterPräf°I, in°den Hg°I¥_III eig°Einschübe wie Ostern, FSS: MBO°314f bzw. 317 (Segensgebet) oder MB°542 mit Entlassungsruf°MB°531: „Gehet hin in Frieden. Halleluja, halleluja°…“ – ¥f2.°Vp°vom°So¥0f – ¥f2.°Kp°vom°So¥0f. Statt°des°Resp die°Ant „Das°ist°der°Tag°…“¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fDie Sonntage der Osterzeit¥0f sollen in ihrer festlichen Gestaltung das österliche 50-Tage-Fest zum Ausdruck bringen. Die vorgesehenen Messtexte dürfen nicht ersetzt werden bspw. durch Texte einer Messfeier, in der die Taufe, die Firmung oder ein anderes Sakrament bzw. Sakramentale gespendet werden (AEM°330).¥p¥s¥fDas sonntägliche Taufgedächtnis¥0f (bis Pfingsten mit „Vidi aquam“, GL°125) soll an die Stelle des Allgemeinen Schuldbekenntnisses treten (Segnung und Austeilung des Weihwassers sowie Vergebungsbitte, MB°1171/²1207).¥p¥s¥fHeute ist der Sonntag der Göttlichen Barmherzigkeit¥0f (eingeführt am 30.°April°2000). In den liturgischen Büchern ist die Bezeichnung „Sonntag der Göttlichen Barmherzigkeit“ zu ergänzen.¥p¥sAm Barmherzigkeitssonntag möge das Bild des Barmherzigen Jesus im Altarraum aufgestellt und verehrt und von allen Priestern die göttliche Barmherzigkeit verkündet werden.¥p¥sMit der Feier des Barmherzigkeitssonntags hat der hl. Papst Johannes Paul II. 2002 einen ¥fvollkommenen Ablass¥0f verbunden (s.°o.°Kap.°I.C.10.). Er wird unter den gewohnten Bedingungen (Beichte, entschlossene Abkehr von jeder Sünde, Kommunionempfang, Gebet nach der Meinung des Hl. Vaters) den Gläubigen gewährt, die in einer Kirche oder einem Oratorium ¥fan einer Feier zu Ehren der Göttlichen Barmherzigkeit teilnehmen¥0f oder wenigstens vor dem Allerheiligsten ¥fdas Vaterunser und das Glaubensbekenntnis mit dem Zusatz einer kurzen Anrufung des barmherzigen Herrn Jesus (z.B. „Barmherziger Jesus, ich vertraue auf dich!“) beten¥0f.¥p¥s¥fDie Vorabendmesse zum Hochfest der Verkündigung des Herrn kann heute nicht gefeiert werden.¥0f¥p¥sDer ¥fGedenktag des hl. Johannes Baptist de la Salle¥0f entfällt in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1925 †¥tJoseph°Kremer, Pfarrer°in°Borsch¥p1950 †¥tVinzenz°Neumann, Pfarrer°in°Wirtheim¥p1952 †¥tDr.°Eduard°Hartmann, Prof.°em., Dr.°phil., Msgr., Fulda¥p1958 †¥tValentin°Haas, Pfr.i.R., Hilders¥p1993 †¥tP.°Wilhelm°Borg°SDB, Pfr.i.R., Essen/Oldenburg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "8": {
        "liturgy": "¥fMo¥0f¥t¥qhVerkündigung des Herrn¥0f, ¥fHochfest¥0f¥l¥fOff vom H¥0f (StB°II°1085) – Te°Deum – Kl.°Hore: eig Ant,°ErgPs¥pw¥t¥fMs eig¥0f (MB°649), Gl,°Cr (Kniebeugung bei den Worten „Et°incarnatus est°…“ bzw. „hat°Fleisch angenommen°…“ bzw. „empfangen durch den Hl.°Geist°…“), eig°Präf, in°den Hg°I¥_III eig°Einschub, FSS:°MB°554°– 2.°Vp°vom°H°–°2.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fHeute wird das Hochfest der Verkündigung des Herrn gefeiert¥0f, das in diesem Jahr auf den heutigen Montag nach dem Weißen Sonntag verlegt wurde.¥p",
        "deceased": "2018 †¥tHelmut°Thomas, Pfr.i.R., OStR°i.K.i.R., GR, Bad°Brückenau¥p",
        "deceased_more": "1987 †¥tP.°Calixtus°de°Bruijn°OFMCap, Pfarrer°in°Meißner¥-Abterode¥p1991 †¥tEngelbert°Hilbert, Pfarrer°in°Eichenzell¥-Lütter¥p2018 †¥tHelmut°Thomas, Pfr.i.R., OStR°i.K.i.R., GR, Bad°Brückenau¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "9": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°der OSterzeit¥lPsalt:°II.°Woche¥pw¥t¥fMs vom Tag¥0f, OsterPräf¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fIm Commune für Märtyrer gibt es in der Osterzeit eigene Texte¥0f für die 1. Lesung der Lesehore mit ihrem Responsorium, für die Laudes und die Vesper sowie eigene Messformulare (MB°907ff,°Nr.°8¥_10). In den übrigen Formularen wird den Antiphonen zum Introitus und zur Kommunion ein Halleluja angefügt, sofern nicht die Antiphon schon ein Halleluja enthält oder ihr Sinn dem widerstreitet.¥p¥sAn jenen Wochentagen in der Osterzeit nach der Osteroktav, auf die kein Hochfest, Fest oder gebotener Gedenktag fällt, stehen für die Messfeier folgende Formulare zur Wahl:¥p–°¥fMesse vom Wochentag¥0f; ¥p–°¥fMesse eines/einer Heiligen¥0f, dessen/deren Gedächtnis vorgesehen oder der/die an diesem Tag im Martyrologium Romanum verzeichnet ist (AEM°316b); ¥p–°¥fMessen für ein besonderes Anliegen oder Votivmessen¥0f nur dann, wenn eine echte Notwendigkeit besteht oder die pastorale Situation es erfordert; in diesem Fall auch an Ged (AEM°333); ¥p–°¥fMarien-Messen¥0f (MBm°93¥_119) nur in Marienwallfahrtskirchen („die Erlaubnis wird jedoch nur für auswärtige Priester gegeben oder sooft die Messe für Pilger gefeiert wird“), jedoch mit Tageslesungen (MBm,°Past.°Einf.°31); ¥p–°eine ¥fBegräbnismesse¥0f ist an allen Tagen möglich außer an den gebotenen Hochfesten und den Sonntagen der Osterzeit (AEM°336); ¥p–°¥fMessen für Verstorbene¥0f nach Eintreffen der Todesnachricht und am ersten Jahrestag – auch an Ged möglich (AEM°337).¥p¥sWenn nicht anderes angegeben ist, wird während der Osterzeit in den Messfeiern immer eine der Osterpräfationen I¥_V gewählt.¥p",
        "deceased": "1999 †¥tPaul°Pfahls,°Klinikpfarrer°in°Kassel¥p2013 †¥tP.°Albin°Hahn°OMI,°Hünfeld¥p",
        "deceased_more": "1999 †¥tPaul°Pfahls,°Klinikpfarrer°in°Kassel¥p2013 †¥tP.°Albin°Hahn°OMI,°Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "10": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°der OSterzeit¥pw¥t¥fMs vom Tag¥0f, OsterPräf¥p",
        "notes": "",
        "deceased": "1939 †¥t¥fDDr.°Joseph°Damian°Schmitt¥0f, Dr.°theol.°et°phil., Bischof°von°Fulda°(1907¥_1939)¥p1964 †¥t¥fDr.°Joseph°Freusberg¥0f, Dr.°iur.°can., Weihbischof, Dompropst,°Generalvikar°in°Erfurt¥p2005 †¥tDr.°Hans¥-Georg°Hermesmann°(Berlin), Pfr.i.R., Naumburg¥p2008 †¥tP.°Emmanuel°Josef°Dürr°OFM,°Fulda¥p",
        "deceased_more": "1925 †¥tTheodor°Eugen°Schlitt, Pfarrer°in°Erfurtshausen¥p1936 †¥tJohannes°Xaver°Döring, Pfr.i.R., Pfaffschwende¥p1939 †¥t¥fDDr.°Joseph°Damian°Schmitt¥0f, Dr.°theol.°et°phil., Bischof°von°Fulda°(1907¥_1939)¥p1948 †¥tHieronymus°Kirchner, Pfr.i.R., Kalteneber¥p1964 †¥t¥fDr.°Joseph°Freusberg¥0f, Dr.°iur.°can., Weihbischof, Dompropst,°Generalvikar°in°Erfurt¥p1986 †¥tPaul°Stasch°(Breslau), Pfr.i.R., Bad°Säckingen¥-Wallbach¥p2005 †¥tDr.°Hans¥-Georg°Hermesmann°(Berlin), Pfr.i.R., Naumburg¥p2008 †¥tP.°Emmanuel°Josef°Dürr°OFM,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "11": {
        "liturgy": "¥fDo¥0f¥t¥fHl. Stanislaus¥0f, Bi, Märt, ¥fGed¥0f¥pr¥t¥fMs vom Hl¥0f, OsterPräf – Off°vom°Ged¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fZum heutigen Gedenktag des hl. Stanislaus¥0f, der früher nichtgebotener Gedenktag war, ist in den älteren Ausgaben der liturgischen Bücher (MB und MBkl, ML°IV, Schott-Messbuch für die Wochentage I, StB°II und Lektionare zum StB I/2, I/3, II/2 und II/3) die Bezeichnung „Gedenktag“ zu ergänzen.¥p¥s¥fZu den Märtyrer-Gedenktagen in der Osterzeit¥0f gibt es im Commune eigene Texte für die 1. Lesung der Lesehore mit ihrem Responsorium (StB°II°1257f), für die Laudes (S.°1264f) und die Vesper (S.°1274f) sowie eigene Messformulare (MB°907ff, Nr.°8¥_10).¥p",
        "deceased": "1995 †¥tNorbert°Wenzel°(Breslau), Pfr.i.R., Berlin¥-Lankwitz¥p2004 †¥tEmil°Otto°Wanke°(Olmütz/Fulda), Pfr.i.R., GR, Kassel¥p",
        "deceased_more": "1958 †¥tAugust°Seifert, Pfr.i.R., Mackenzell¥p1983 †¥tRobert°Böning, Pfr.i.R., Birkenfelde¥p1988 †¥tAmand°Haas, Pfr.i.R., Friesenhausen¥p1995 †¥tNorbert°Wenzel°(Breslau), Pfr.i.R., Berlin¥-Lankwitz¥p2004 †¥tEmil°Otto°Wanke°(Olmütz/Fulda), Pfr.i.R., GR, Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "12": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°der OSterzeit¥pw¥t¥fMs vom Tag¥0f, OsterPräf¥p",
        "notes": "",
        "deceased": "1996 †¥tJohannes°Hoppe°(Breslau/Görlitz), Pfr.i.R., Fulda¥p2008 †¥tP. Dr.°Josef°Krasenbrink°OMI,°Bingen¥p2012 †¥tTheo°Breitbach, OStR°i.R., Fulda¥p",
        "deceased_more": "1945 †¥tAlfons°Mersmann°(Schneidemühl), Pfarrer,°zur°Aushilfe°in°Treysa, vermutlich am°12.4.1945 auf dem Weg vom KZ°Buchenwald zum KZ°Dachau gestorben¥p1952 †¥tEmil°Johne°(Leitmeritz), Pfr.i.R., Hilders¥p1966 †¥tReinhold°Reinisch°(Leitmeritz), Pfr.i.R., Oberaula¥p1996 †¥tJohannes°Hoppe°(Breslau/Görlitz), Pfr.i.R., Fulda¥p2008 †¥tP. Dr.°Josef°Krasenbrink°OMI,°Bingen¥p2012 †¥tTheo°Breitbach, OStR°i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "13": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°der OSterzeit¥pr¥tOder ¥fhl. Martin I.¥0f, Pp, Märt, ¥fGed¥0f – BuM°eig¥p(w)¥t¥fMs¥0f vom Tag oder vom°Hl, OsterPräf¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZu den Märtyrer-Gedenktagen in der Osterzeit¥0f gibt es im Commune eigene Texte für die 1. Lesung der Lesehore mit ihrem Responsorium (StB°II°1257f), für die Laudes (S.°1264f) und die Vesper (S.°1274f) sowie eigene Messformulare (MB°907ff, Nr.°8¥_10).¥p",
        "deceased": "",
        "deceased_more": "1961 †¥tJoseph°Schaefer, Pfr.i.R., Heiligenstadt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "14": {
        "liturgy": "¥fSo¥0f¥a¥t¥f3. Sonntag der Osterzeit¥0f¥lPsalt:°III.°Woche°–°Te°Deum¥pw¥t¥fMs eig¥0f, Gl,°Cr, OsterPräf, FSS:°MB°542, Entlassungsruf:°MB°531¥p",
        "notes": "",
        "deceased": "2009 †¥tAlbert°Reinl, Pfr.i.R., GR, Geisa¥p",
        "deceased_more": "1953 †¥tFritz°Lachmuth, Pfr.i.R., Deuna¥p1972 †¥tPeter°Jacob,°Pfarrkurat°in°Berga/Elster¥p1978 †¥tRichard°Himmelmann, Pfr.i.R., Großenlüder¥p2009 †¥tAlbert°Reinl, Pfr.i.R., GR, Geisa¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "15": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°der OSterzeit¥pw¥t¥fMs vom Tag¥0f, OsterPräf¥p",
        "notes": "",
        "deceased": "2012 †¥tKarl¥-Stephan°Fischer,°StD°i.R., Msgr., Fulda¥p",
        "deceased_more": "2012 †¥tKarl¥-Stephan°Fischer,°StD°i.R., Msgr., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "16": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°der OSterzeit¥pw¥t¥fMs vom Tag¥0f, OsterPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1962 †¥tDr.°Karl°Scheller, Prof., Offizial,°Apostol.°Protonotar,°Domdechant,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "17": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°der OSterzeit¥pw¥t¥fMs vom Tag¥0f, OsterPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1957 †¥tSiegfried°Schultheis°(Breslau),°Erzpriester,°Diözesanvertriebenenseelsorger,°Fulda¥p1991 †¥tPeter°Schwarz, Pfr.i.R., Emmerich¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "18": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°der OSterzeit¥pw¥t¥fMs vom Tag¥0f, OsterPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1935 †¥tWilhelm°Ernst, Pfarrer°in°Bischofferode¥p1989 †¥tPaul°Grätz°(Breslau), OStR°i.K.i.R., Fulda¥p1993 †¥tHeinrich°Rumph,°Dompfr., Msgr., Ehrendomkapitular,°Stadtdechant,°Regionaldechant,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "19": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°der OSterzeit¥pw¥tOder ¥fhl. Leo IX.¥0f, Pp°(RK), ¥fGed¥0f¥pr¥tOder ¥fsel. Marcel Callo¥0f, Märt, ¥fGed¥0f°(dD)¥be¥w¥fMs¥0f: HR°/°MBkl°1235f°/°MBErg²°24°/°Com°Märt°Nr.°10¥l¥vL:¥0v¥t2°Kor°6¥v,4¥_10¥0v¥tML°IV°609/ᴺ636¥l¥vAPs:¥0v¥tPs°124¥v,2¥_3.4¥_5.7¥_8¥0v°(R:°¥v7a¥0v)¥t610/ᴺ637¥l¥vREv+Ev:¥0v°Mt°10¥v,28¥_33¥0v¥t584f/ᴺ603¥0w¥p(w)¥t¥fMs¥0f vom Tag oder vom°Hl°oder°Sel, OsterPräf¥p",
        "notes": "",
        "deceased": "2012 †¥tFranz¥-Josef°von°Szczutowski,°Diakon°i.R., Hanau¥p",
        "deceased_more": "1972 †¥tKarl°Kraft, OStR°i.K.i.R., Weiperz¥p1988 †¥tHubert°Lendeckel, Pfr.i.R., GR, Schröck¥p1989 †¥tAnton Dressler°(Königgrätz), Pfr.i.R., Bernbach¥p2012 †¥tFranz¥-Josef°von°Szczutowski,°Diakon°i.R., Hanau¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "20": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°der OSterzeit¥pw¥t¥fMs vom Tag¥0f, OsterPräf¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "1994 †¥tWilhelm°Schönfelder°(Breslau), Pfr.i.R., GR, Grebenstein¥p",
        "deceased_more": "1975 †¥tFranz°Daniel°(Breslau), Pfarrer°in°Mengelrode¥p1979 †¥tFranz°Richter, Pfarrer°in°Großbreitenbach/Thüringen¥p1986 †¥tHubert°Görlich, Pfarrer°in°Geismar/Rhön¥p1994 †¥tWilhelm°Schönfelder°(Breslau), Pfr.i.R., GR, Grebenstein¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "21": {
        "liturgy": "¥fSo¥0f¥a¥t¥f4. Sonntag der Osterzeit¥0f – ¥fWeltgebetstag°für°geistliche°Berufe¥0f¥lPsalt:°IV.°Woche°–°Te°Deum¥pw¥t¥fMs eig¥0f, Gl,°Cr, OsterPräf, FSS:°MB°542, Entlassungsruf:°MB°531¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute ist der ¥f61. Weltgebetstag für geistliche Berufe¥0f unter dem ¥fLeitwort „weiterleben“¥0f. Eine ¥fbesondere Gestaltung der Gottesdienste¥0f unter Beachtung der angebotenen Hilfen für dieses wichtige Anliegen ist sehr angezeigt (Papstwort zum Weltgebetstag, Werkheft, Predigt, Fürbitten, Gebetsbildchen). Auch ¥feucharistische Anbetungsstunden und/oder Vespergottesdienste¥0f können am Sonntagvorabend oder Sonntagabend in diesem Anliegen gehalten werden.¥p¥sDie ¥fGedenktage des hl. Konrad von Parzham¥0f und ¥fdes hl. Anselm¥0f entfallen in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1948 †¥tHeinrich°Ramb, Pfarrer°in°Buttlar¥p1950 †¥tAndreas°Übl°(Leitmeritz), Pfr.i.R., Neuburg/Donau¥p1951 †¥tFerdinand°Gaudl°(Leitmeritz), Pfr.i.R., Bösekendorf¥p1992 †¥tOscar°Schmalbauch, Pfarrer°in°Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "22": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°der OSterzeit¥pw¥t¥fMs vom Tag¥0f, OsterPräf¥p",
        "notes": "",
        "deceased": "1999 †¥tBruno°Leuschner°(Breslau), OStR°i.K.i.R., Schlüchtern¥p2001 †¥tKarl°König, Pfr.i.R., GR, Ebersburg¥-Thalau¥p2009 †¥tGeorg°Pfannmüller,°Diakon,°Freigericht¥-Neuses¥p",
        "deceased_more": "1958 †¥tClemens°Prior°(Olmütz),°Erzpriester°i.R., Konsistorialrat,°Bad°Hersfeld¥p1968 †¥tPeter°Schulte, Pfarrer°in°Lenterode¥p1974 †¥tBernard°Hollenbach,°Msgr., Ordinariatsrat,°Justitiar°in°Fulda¥p1999 †¥tBruno°Leuschner°(Breslau), OStR°i.K.i.R., Schlüchtern¥p2001 †¥tKarl°König, Pfr.i.R., GR, Ebersburg¥-Thalau¥p2009 †¥tGeorg°Pfannmüller,°Diakon,°Freigericht¥-Neuses¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "23": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°der OSterzeit¥pr¥tOder ¥fhl. Adalbert¥0f, Bi, Glb, Märt, ¥fGed¥0f°(RK/GK)¥pr¥tOder ¥fhl. Georg¥0f, Märt, ¥fGed¥0f ¥p(w)¥t¥fMs¥0f vom Tag oder von°einem°der°Hll, OsterPräf¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZu den Märtyrer-Gedenktagen in der Osterzeit¥0f gibt es im Commune eigene Texte für die 1. Lesung der Lesehore mit ihrem Responsorium (StB°II°1257f), für die Laudes (S.°1264f) und die Vesper (S.°1274f) sowie eigene Messformulare (MB°907ff, Nr.°8¥_10).¥p",
        "deceased": "2020 †¥tHubert°Brähler, Pfr.i.R., GR, Hilders¥-Batten¥p",
        "deceased_more": "1951 †¥tAlbert°Gerlach, Pfarrer°in°Friedrichslohra¥p2020 †¥tHubert°Brähler, Pfr.i.R., GR, Hilders¥-Batten¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "24": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°der OSterzeit¥pr¥tOder ¥fhl. Fidelis von Sigmaringen¥0f, Ordpr, Märt, ¥fGed¥0f°(RK/GK)¥p(w)¥t¥fMs¥0f vom Tag oder vom°Hl, OsterPräf¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZu den Märtyrer-Gedenktagen in der Osterzeit¥0f gibt es im Commune eigene Texte für die 1. Lesung der Lesehore mit ihrem Responsorium (StB°II°1257f), für die Laudes (S.°1264f) und die Vesper (S.°1274f) sowie eigene Messformulare (MB°907ff, Nr.°8¥_10).¥p",
        "deceased": "",
        "deceased_more": "1943 †¥tFranz°Rippert, Pfarrer°in°Geismar/Rhön¥p1960 †¥tAnton°Henkel, Dechant, Pfarrer°in°Ufhausen¥p1986 †¥tDr.°Otfried°Müller°(Breslau/Görlitz), Prof., Domkapitular,°Erfurt¥p1993 †¥tAnton°Paul, Pfr.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "25": {
        "liturgy": "¥fDo¥0f¥t¥qfHl. Markus¥0f, Evangelist, ¥fFest¥0f – Te°Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt°(Osterzeit)¥pr¥t¥fMs eig¥0f, Gl, ApPräf II, FSS:°MB°558¥p",
        "notes": "¥fHinweis:¥0f ¥sNach kirchlicher Tradition wird ¥fvom Fest des hl. Markus (25.°April) bis zum Fest Kreuzerhöhung (14.°September) der Wettersegen für das Gedeihen der Feldfrüchte¥0f gebetet. In der Sorge um das tägliche Brot für alle und als Ausdruck der gegenseitigen Fürbitte soll der Wettersegen von den Gemeinden in Stadt und Land, vor allem in den ländlichen Gemeinden, gebetet werden (Benediktionale°Nr.°8, S.°59ff, und MB°566ff). Siehe auch die entsprechenden Hinweise vor der Bittwoche.¥p",
        "deceased": "1999 †¥tP.°Robert°Haller°OMI, GR, Zwickau¥p",
        "deceased_more": "1945 †¥tBonaventura°Goldbach, Dechant, Pfarrer°in°Hofbieber¥p1985 †¥tP.°Alfred°Hennecke°OMI,°Hünfeld¥p1999 †¥tP.°Robert°Haller°OMI, GR, Zwickau¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "26": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°der OSterzeit¥pw¥t¥fMs vom Tag¥0f, OsterPräf¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute ist der ¥fGedenktag des hl. Papstes Kletus¥0f (auch Anaklet), der als zweiter Nachfolger des Apostels Petrus wohl von 76 bis 88 Bischof von Rom war. Er gehört zu den seit alten Zeiten verehrten Heiligen, die im Römischen Messkanon genannt werden, deren Gedenktag heute aber nicht mehr im ARK verzeichnet ist. Durch die ¥fWahl des Hg°I¥0f kann sein Gedächtnis weiter geehrt werden.¥p",
        "deceased": "",
        "deceased_more": "1933 †¥tKaspar°Rüffer,°Rektor°i.R., Dingelstädt¥p1976 †¥tBenedikt°Overhamm, Pfr.i.R., GR, Schlitz¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "27": {
        "liturgy": "¥fSa¥0f¥t¥fhl. Petrus Kanisius¥0f, ¥f2.°Apostel°der°Deutschen¥0f, Ordpr,°Kl, ¥fGed¥0f°(RK/FD;°GK:°21.°Dez.)¥pw¥t¥fMs vom Hl¥0f, OsterPräf – Off°vom°Ged¥l¥w¥fMs¥0f:°MB°662°– ML°IV°553/ᴺ565¥0w¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1928 †¥tDDr.°Constantin°Gutberlet, Prof., Dr.°theol.°et°phil., Apostol.°Protonotar, Domkapitular,°Fulda¥p1947 †¥tJoseph°Ciré, Pfarrer°in°Kirchworbis¥p1953 †¥tHermann°Simon, Dechant, Pfarrer°in°Oberufhausen¥p1985 †¥tJoseph°Weber, Pfr.i.R., GR, Dechant,°Brakel¥p1988 †¥tWolfgang°Walter°(Leitmeritz/Mainz), Pfr.i.R., Wächtersbach¥-Neudorf¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "28": {
        "liturgy": "¥fSo¥0f¥a¥t¥f5. Sonntag der Osterzeit¥0f¥lPsalt:°I.°Woche°–°Te°Deum¥pw¥t¥fMs eig¥0f, Gl,°Cr, OsterPräf, FSS:°MB°542, Entlassungsruf:°MB°531¥p",
        "notes": "¥fHinweis:¥0f ¥sDie ¥fGedenktage des hl. Peter Chanel¥0f und ¥fdes hl. Ludwig Maria Grignion de Montfort¥0f entfallen in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1988 †¥tDr.°Karl°Schlütz°(Paderborn), Pfr.i.R., Cölbe¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "29": {
        "liturgy": "¥fMo¥0f¥t¥qfHl. Katharina von Siena¥0f, Ord, Kl, Patronin°Europas, ¥fFest¥0f°(GK/RK)¥lOff: BuM eig, sonst Com – Te°Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt°(Osterzeit)¥pw¥t¥fMs eig¥0f, Gl, ¥fFürbitten°für°Europa¥0f, Präf°Ord°oder°Hll, FSS:°MB°560¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum heutigen Fest der hl. Katharina von Siena¥0f ist in den älteren Ausgaben der liturgischen Bücher (MB und MBkl, ML°IV, Schott-Messbuch für die Wochentage I, StB°II und Lektionare zum StB I/3 und II/3) ggf. die Bezeichnung „Patronin Europas“ zu ergänzen und der Rang „Gedenktag“ durch „Fest“ zu ersetzen sowie in den Messbüchern vor dem Tagesgebet „Gloria“ und in den Lektionaren zum StB nach dem Responsorium zur 2.°Lesung „Te°Deum“ einzufügen.¥p",
        "deceased": "2000 †¥tRudolf°Bauschke, Pfr.i.R., GR, Fulda¥p2000 †¥tRobert°Krenzer, Pfr.i.R., GR, Fulda¥p2008 †¥tKarl°Hemberger, OStR°i.K.i.R., GR, Münnerstadt¥p",
        "deceased_more": "1941 †¥tFriedrich°Wilhelm°Schmitt, Pfarrer°in°Aufenau¥p1972 †¥tDr.°Wilhelm°Kleine, Dr.°phil., Pfarrer°in°Uttrichshausen¥p1975 †¥tP.°Paul°Banaschik°SJ, Pfr.i.R., Wiesbaden¥p1984 †¥tJosef°Heim, Pfr.i.R., GR, Ehrendechant,°Fulda¥p2000 †¥tRudolf°Bauschke, Pfr.i.R., GR, Fulda¥p2000 †¥tRobert°Krenzer, Pfr.i.R., GR, Fulda¥p2008 †¥tKarl°Hemberger, OStR°i.K.i.R., GR, Münnerstadt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "30": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°der OSterzeit¥pw¥tOder ¥fhl. Pius V.¥0f, Pp, ¥fGed¥0f¥pw¥t¥fMs¥0f vom Tag oder vom°Hl, OsterPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1954 †¥tFriedrich°Lindner°(Prag), Pfarrer°in°Sundhausen¥p1983 †¥tFranz°Ruprecht°(Leitmeritz), Pfr.i.R., Burgkunstadt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      }
    },
    "5": {
      "1": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°der OSterzeit¥pw¥tOder ¥fhl. Josef der Arbeiter¥0f, ¥fGed¥0f – Inv°und°BuM°eig,°LuV°wie°am°19.°März, n.B.°auch°Hymnen°(und°Ant°und°Ps) zu°Lh,°Ld°und°Vp wie°am°19.°März¥pw¥t¥fMs¥0f vom Tag, OsterPräf, oder°vom°Hl,°¥feig°Ev¥0f,°Präf°Josef¥p",
        "notes": "",
        "deceased": "2004 †¥tAloys°Weigand, Pfr.i.R., GR, Petersberg¥p2023 †¥tLothar°Brähler, Pfr.i.R., GR, Großenlüder¥p",
        "deceased_more": "1969 †¥tKarl°Helbing, Pfr.i.R., Duderstadt¥p1969 †¥tNorbert°Goldmann, Pfr.i.R., Neustadt¥p1989 †¥tP.°Erich°Rommerskirch°SJ, Pfr.i.R., Marburg¥p2004 †¥tAloys°Weigand, Pfr.i.R., GR, Petersberg¥p2023 †¥tLothar°Brähler, Pfr.i.R., GR, Großenlüder¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "2": {
        "liturgy": "¥fDo¥0f¥t¥fHl. Athanasius¥0f, Bi, Kl, ¥fGed¥0f – ¥fPriesterdonnerstag¥0f¥pw¥t¥fMs vom Hl¥0f, OsterPräf – Off°vom°Ged¥pw¥tOder ggf.°¥fMs um Priesterberufe¥0f ¥w(MB°1035f/²1057),¥lL°und°Ev vom°Tag oder aus°den°AuswL¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Priesterdonnerstag (monatl. Gebetstag für geistliche Berufe):¥0f Die Votivmesse ist nur bedingt erlaubt (s.°o.°Kap.°III.D.3.). – Fürbitte(n) um Priesterberufungen. – Thema: „mit dir“ (vgl.°Jes°41¥v,10¥0v – Motto der Ministrantenwallfahrt 2024 in Rom). Intention: Ministranten.¥p",
        "deceased": "2002 †¥tJohannes°Rinke°(Breslau/Fulda), Pfr.i.R., Jüchen¥-Hochneukirch¥p",
        "deceased_more": "1946 †¥tFranz°Maßberg, Pfr.i.R., Rottenmünster¥p1948 †¥tAugust°Rübsam, Pfr.i.R., Fulda¥p1951 †¥tFridolin°Füller, Pfarrer°in°Wirtheim¥p1967 †¥tAlfons°Streng°(Breslau),°Oberstudienrat°in°Fulda¥p2002 †¥tJohannes°Rinke°(Breslau/Fulda), Pfr.i.R., Jüchen¥-Hochneukirch¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "3": {
        "liturgy": "¥fFr¥0f¥t¥qfHl. Philippus und hl. Jakobus¥0f, App, ¥fFest¥0f – ¥fHerz¥-Jesu¥-Freitag¥0f – Te°Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt°(Osterzeit)¥pr¥t¥fMs eig¥0f, Gl, ApPräf, n.B.°Hg°I, FSS:°MB°558¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute ist der ¥fGedenktag des hl. Alexander¥0f, der um das Jahr 130 in Rom das Martyrium erlitten hat. Er gehört zu den seit alten Zeiten verehrten Heiligen, die im Römischen Messkanon genannt werden, deren Gedenktag heute aber nicht mehr im ARK verzeichnet ist. Durch die ¥fWahl des Hg°I¥0f kann sein Gedächtnis weiter geehrt werden.¥p¥s¥fZum°Herz¥-Jesu¥-Fr:¥0f Die Votivmesse ist nicht erlaubt.¥p",
        "deceased": "2022 †¥tP.°Johannes°Schreml°SDB,°München¥p",
        "deceased_more": "1935 †¥tWilhelm°Ney, Pfarrer°in°Dipperz¥p1986 †¥tFranz°Massanetz°(Prag), Pfr.i.R., GR, Fulda¥p1990 †¥tHerbert°Schölzel°(Breslau), Pfr.i.R., Hünfeld¥p2022 †¥tP.°Johannes°Schreml°SDB,°München¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "4": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°der OSterzeit – ¥fHerz¥-Mariä¥-Samstag¥0f¥pr¥tOder ¥fhl. Florian¥0f, Märt, und ¥fhll. Märtyrer von Lorch¥0f, ¥fGed¥0f°(RK)¥pw¥tOder ggf.°¥fVotivmesse vom Unbefleckten Herzen Mariä¥0f, ¥wMBm°und°MLm°Nr.°28,°eig°Präf¥0w¥p(w)¥t¥fMs¥0f vom Tag oder von°den°Hll oder ggf.°Votivmesse, OsterPräf¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fZu den Märtyrer-Gedenktagen in der Osterzeit¥0f gibt es im Commune eigene Texte für die 1. Lesung der Lesehore mit ihrem Responsorium (StB°II°1257f), für die Laudes (S.°1264f) und die Vesper (S.°1274f) sowie eigene Messformulare (MB°907ff, Nr.°8¥_10).¥p¥s¥fZum Herz¥-Mariä¥-Sa:¥0f Die Votivmesse ist nur bedingt erlaubt (s.°o.°Kap.°III.D.3.).¥p",
        "deceased": "2016 †¥tErwin°Sturm, Pfr.i.R., Prälat,°Neuhof¥-Rommerz¥p",
        "deceased_more": "1948 †¥tGeorg°Trageser, Pfarrer°in°Großenbach¥p2016 †¥tErwin°Sturm, Pfr.i.R., Prälat,°Neuhof¥-Rommerz¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "5": {
        "liturgy": "¥fSo¥0f¥a¥t¥f6. Sonntag der Osterzeit¥0f – „¥fBittsonntag¥0f“¥lPsalt:°II.°Woche°–°Te°Deum¥pw¥t¥fMs eig¥0f, Gl,°Cr, OsterPräf, FSS:°MB°542, Entlassungsruf:°MB°531¥p",
        "notes": "¥fHinweise:¥0f¥p¥sIn der folgenden Woche sollen die ersten drei Werktage (oder wenigstens einer) wenn möglich als ¥fBitttag(e), auch mit Prozession¥0f, begangen werden (s.°o.°Kap.°I.C.7.). Ihre Feier soll den unterschiedlichen örtlichen und menschlichen Gegebenheiten auch tatsächlich entsprechen. ¥fMessformular für die Gemeindemesse:¥0f MB°272 oder eine der „Messen für besondere Anliegen“, z. B. Nr. 22, 25 oder 35¥_38 (MB°1057¥_1079/²1082¥_1109), OsterPräf, Farbe: violett. LL°u.°Evv: Perikopen für besondere Anliegen, ML°VIII°(bes.°298¥_302).¥p¥sAnstelle des Schlusssegens der Messfeier soll an den Bitttagen der ¥fWettersegen¥0f (MB°566ff oder Benediktionale°Nr.°8, S.°59ff) oder eines der ¥fSegensgebete über das Volk¥0f mit Schlusssegen (MB°569¥_575) gebetet werden.¥p¥sDer Wettersegen kann in der Zeit bis zur Einbringung der Ernte an jedem Tag gebetet werden.¥p¥sDer ¥fGedenktag des hl. Godehard¥0f entfällt in diesem Jahr.¥p",
        "deceased": "1996 †¥tOtto°Fangohr, Pfr.i.R., GR, Hannover¥p",
        "deceased_more": "1974 †¥tP.°Wilhelm°Brauers°CSSp, Pfarrer°in°Förtha¥p1996 †¥tOtto°Fangohr, Pfr.i.R., GR, Hannover¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "6": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 6.°Woche°der OSterzeit¥pv¥tOder ¥fBittmesse¥0f¥p(w)¥t¥fMs¥0f vom Tag oder vom Bitttag, OsterPräf, Wettersegen:°MB°566f°oder°568¥v,1¥0v¥p",
        "notes": "",
        "deceased": "1999 †¥tDieter°Lucas, GR, Pfarrer°in°Künzell¥-Bachrain¥p",
        "deceased_more": "1936 †¥tAdam°Bargon, Pfarrer°in°Schmalnau¥p1999 †¥tDieter°Lucas, GR, Pfarrer°in°Künzell¥-Bachrain¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "7": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 6.°Woche°der OSterzeit¥pv¥tOder ¥fBittmesse¥0f¥p(w)¥t¥fMs¥0f vom Tag oder vom Bitttag, OsterPräf, Wettersegen:°MB°566f°oder°568¥v,1¥0v¥p",
        "notes": "",
        "deceased": "1999 †¥tHeinrich°Dehmer, Pfarrer°in°Stadtallendorf,°St.°Michael¥p2000 †¥tRobert°Arnold, Pfr.i.R., GR, Bad°Salzschlirf¥p2024 †¥tKarl°Gömpel, Pfr.i.R., Kassel¥p",
        "deceased_more": "1932 †¥tAugust°Kienemund, Pfr.i.R., Hosenfeld¥p1936 †¥tRichard°Zentgraf, Pfr.i.R., Bad°Orb¥p1954 †¥tKonrad°Schick, Pfarrer°in°Ungedanken¥p1975 †¥tAloys°Schön, Pfarrer°in°Wüstensachsen¥p1999 †¥tHeinrich°Dehmer, Pfarrer°in°Stadtallendorf,°St.°Michael¥p2000 †¥tRobert°Arnold, Pfr.i.R., GR, Bad°Salzschlirf¥p2024 †¥tKarl°Gömpel, Pfr.i.R., Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "8": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 6.°Woche°der OSterzeit¥pv¥tOder ¥fBittmesse¥0f¥p(w)¥t¥fMs¥0f vom Tag oder vom Bitttag, OsterPräf, Wettersegen:°MB°566f°oder°568¥v,1¥0v¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom H¥0f – ¥f1.°Vp°vom°folg°H¥0f°–°¥f1.°Kp°vom°So¥0f¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1927 †¥tPeter°Weber, Pfarrer°in°Schwarzbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "9": {
        "liturgy": "¥fDo¥0f¥a¥t¥qhChristi Himmelfahrt¥0f, ¥fHochfest¥0f¥lTe°Deum°–°Kl.°Hore:°eig°Ant°und°Ps¥pw¥t¥fMs eig¥0f, Gl,°Cr, eig°Präf, in°den Hg°I¥_III eig°Einschub, FSS:°MB°544, Entlassungsruf:°MB°531 – ¥f2.°Vp°vom°H – 2.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fDas Hochfest Christi Himmelfahrt ist kirchlich gebotener Feiertag¥0f. Es besteht ¥fApplikations- sowie Sonn- und Feiertagspflicht¥0f (s.°o.°Kap.°I.C.1.).¥p¥sSchließt sich die Flurprozession an die heutige Messfeier an, dann ist diese ohne Entlassriten.¥p",
        "deceased": "",
        "deceased_more": "1925 †¥tMichael°Hohmann,°Militärpfr.i.R., Fulda¥p1926 †¥tDr.°Wilhelm°Jestädt, Dr.°phil.°h.c., Dechant, Pfarrer°in°Fritzlar¥p1934 †¥tKarl°Herzberg, Pfr.i.R., Beuren¥p1941 †¥tArnold°Reinhard, Pfarrer°in°Zella¥p1959 †¥tJoseph°Hagedorn, Pfarrer°in°Breitenholz¥p1980 †¥tKarl°Rotter°(Olmütz), Pfr.i.R., Bad°Hersfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "10": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 6.°Woche°der OSterzeit – 1.°Tag°der°Pfingstnovene¥pw¥tOder ¥fhl. Johannes von Avila¥0f, Pr, Kl, ¥fGed¥0f¥be¥w¥fMs¥0f: HR⁵°/°Com°Ht°5°oder°Kl°2°– ¥fML°IV°ᴺ592¥0f¥l¥vL:¥0v¥tApg°13¥v,46¥_49¥0v¥tML°IV°459¥l¥vAPs:¥0v¥tPs°23¥v,1¥_3.4.5.6¥0v°(R:°¥v1¥0v)¥t467¥l¥vREv+Ev:¥0v°Mt°5¥v,13¥_19¥0v¥t554f¥0w¥pw¥tOder ¥fMs vom hl. Damian de Veuster¥0f, Ordpr¥be¥w¥fMs¥0f: HR⁵°/°Com MFr 7¥_9°/°Kommunionvers:°Joh°15¥v,13¥0v¥l¥vL:¥0v¥tRöm°5¥v,1¥_8¥0v¥tML°IV°vgl.°682/ᴺ691¥l¥vAPs:¥0v¥tPs°16¥v,1¥_2+5.7¥_8.9+11¥0v°(R:°vgl.°¥v9a¥0v)¥t396/ᴺ396¥l¥vREv:¥0v¥tJoh°10¥v,11¥0v¥t–––¥l¥vEv:¥0v¥tJoh°10¥v,11¥_18¥0v¥t312/ᴺ314¥0w¥pw¥t¥fMs¥0f vom Tag oder einem°der°Hll, Oster-°oder°HifPräf¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fDie Tage zwischen den Hochfesten Christi Himmelfahrt und Pfingsten sollen im Gebet der Pfingstnovene¥0f (vgl. Apg°1¥v,14¥0v) ¥fder Vorbereitung auf das Pfingstfest dienen.¥0f Weitere Informationen und ein Gebetsheft sind bei „Renovabis“ erhältlich oder unter www.pfingstnovene.de. Es möge in besonderer Weise für die ¥fEinheit der Christen¥0f gebetet werden.¥p¥sIn den Messfeiern bis Pfingsten kann anstelle der Himmelfahrts-Präfation auch eine Oster-Präfation genommen werden.¥p¥sAn Sonn- und Werktagen bis zur 1. Vesper von Pfingsten ausschl. eigene Hymnen in allen Horen.¥p",
        "deceased": "2008 †¥tGerhard°Benzing, Pfr.i.R., Flieden¥p",
        "deceased_more": "1972 †¥tJohannes°Roßmann, Pfr.i.R., Schöllkrippen¥p2008 †¥tGerhard°Benzing, Pfr.i.R., Flieden¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "11": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 6.°Woche°der OSterzeit – 2.°Tag°der°Pfingstnovene¥pw¥t¥fMs vom Tag¥0f, Oster- oder HifPräf¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "1994 †¥tEduard°Herrmann°(Olmütz), Pfr.i.R., GR, Aschaffenburg¥p2005 †¥tRobert°Mayer, Pfarrer°in°Neukirchen¥p",
        "deceased_more": "1949 †¥tWalter°Maria°Reimann°(Breslau), Pfr.i.R., Sieblos¥p1962 †¥tJoseph°Hannappel, Pfarrer°in°Dermbach¥p1989 †¥tKarl°Genau, Pfr.i.R., GR, Odelzhausen¥p1994 †¥tEduard°Herrmann°(Olmütz), Pfr.i.R., GR, Aschaffenburg¥p2005 †¥tRobert°Mayer, Pfarrer°in°Neukirchen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "12": {
        "liturgy": "¥fSo¥0f¥a¥t¥f7. Sonntag der Osterzeit¥0f – 3.°Tag°der°Pfingstnovene¥lPsalt:°III.°Woche°–°Te°Deum¥pw¥tMs eig, Gl,°Cr, Oster- oder HifPräf, FSS:°MB°542 oder°544, Entlassungsruf:°MB°531¥p",
        "notes": "¥fHinweis:¥0f ¥sDie ¥fGedenktage der hll. Nereus und Achilleus¥0f und ¥fdes hl. Pankratius¥0f entfallen in diesem Jahr.¥p",
        "deceased": "2017 †¥tAugustin°Naeten°(Hasselt/Fulda), Pfr.i.R., GR, Kassel¥p",
        "deceased_more": "1923 †¥tHugo°Joseph°Zimmer, Pfarrer°in°Erfurtshausen¥p1940 †¥tJulius°Klitsch, Pfarrer°in°Blankenau¥p2017 †¥tAugustin°Naeten°(Hasselt/Fulda), Pfr.i.R., GR, Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "13": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 7.°Woche°der OSterzeit – 4.°Tag°der°Pfingstnovene¥pw¥tOder ¥fUnsere Liebe Frau in Fatima¥0f, ¥fGed¥0f¥be¥w¥fMs¥0f: HR°/°MBkl°1238°/°MBErg²°8°/°Com°Mar°6¥_7°– ¥fML°IV°ᴺ599¥0f¥l¥vL:¥0v¥tJes°61¥v,9¥_11¥0v¥tML°IV°655¥l¥voder¥0v¥tOffb°11¥v,19a¥0v;°12¥v,1¥_6a.10ab¥0v¥t658¥l¥vAPs:¥0v¥tPs°45¥v,11¥_12.14¥_15.16¥_17¥0v°(R:°vgl.°¥v18a¥0v)¥t475¥l¥vREv:¥0v¥t„Selig bist du, Jungfrau Maria …“¥t663¥v,5¥0v¥l¥vEv:¥0v¥tLk°11¥v,27¥_28¥0v¥t673¥0w¥pw¥t¥fMs¥0f vom Tag, Oster-°oder°HifPräf, oder vom Ged, MarPräf oder OsterPräf¥p",
        "notes": "¥fHinweise:¥0f¥p¥sIn der kommenden Woche werden die ¥fSommerquatember¥0f an einem (oder mehreren) Tag(en) (nach Wahl) begangen als Tag(e) religiöser Erneuerung. ¥fThema: Glaubenseinheit der Christen¥0f. Messformular: Quatembermesse, MB°267, HifPräf, oder Nr. 13 A, B oder C aus den „Messen für besondere Anliegen“ (MB°1040¥_1047/²1062¥_1069), eig°Präf, Farbe: violett. LL u. Evv:°Perikopen für besondere Anliegen, ML°VIII°110¥_130.¥p¥s¥fAm Pfingstsonntag endet die Zeit der Osterkommunion.¥0f¥p",
        "deceased": "",
        "deceased_more": "1921 †¥tDDr.°Johannes°Wilhelm°Arenhold, Prof., Dr.°phil.°et°theol., Generalvikar,°Apostol.°Protonotar,°Domdechant,°Fulda¥p1945 †¥tAmand°Schaub, Pfr.i.R., Friesenhausen¥p1963 †¥tGeorg°Stark°(Breslau), Pfarrer°in°Arenshausen°üb.°Heiligenstadt¥p1967 †¥tDr.°Josef°Maria°Werner, Pfr.i.R., Eichelsdorf°üb.°Haßfurt/M.¥p1985 †¥tDDr.°Ludwig°Pralle, Prof., Prälat, Domkapitular,°Fulda¥p1992 †¥tP.°Corbinian°Engelbert°Benzing°OFM, GR, Großkrotzenburg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "14": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 7.°Woche°der OSterzeit – 5.°Tag°der°Pfingstnovene¥pw¥t¥fMs vom Tag¥0f, OsterPräf¥p",
        "notes": "",
        "deceased": "1997 †¥tDr.°Raphael°von°Rhein, Prof., Domkapitular°i.R., Fulda¥p",
        "deceased_more": "1924 †¥tJohannes°Joseph°Krieg,°Benefiziat°i.R., Fulda¥p1952 †¥tFranz°Schwarz°(Olmütz),°Katechet°i.R., Obervellmar¥p1997 †¥tDr.°Raphael°von°Rhein, Prof., Domkapitular°i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "15": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 7.°Woche°der OSterzeit – 6.°Tag°der°Pfingstnovene¥pw¥t¥fMs vom Tag¥0f, OsterPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1963 †¥tJohann°Storch, Pfr.i.R., Fulda¥p1969 †¥tWilhelm°Köhne°(Köln), OStR°i.K., Dorfborn/Krs.°Fulda¥p1985 †¥tChristoph°Huschenbett, Pfr.i.R., Maria°Bildhausen¥p1987 †¥tHermann°Henkel, Pfr.i.R., Großkrotzenburg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "16": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 7.°Woche°der OSterzeit – 7.°Tag°der°Pfingstnovene¥pr¥tOder ¥fhl. Johannes Nepomuk¥0f, Pr, Märt, ¥fGed¥0f°(RK)¥p(w)¥t¥fMs¥0f vom Tag oder vom°Hl, Oster-°oder°HifPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1923 †¥tLeopold°Alsheimer, Pfarrer°in°Kassel,°St.°Joseph¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "17": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 7.°Woche°der OSterzeit – 8.°Tag°der°Pfingstnovene¥pw¥t¥fMs vom Tag¥0f, Oster- oder HifPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1942 †¥tVincenz°Schleichert, Pfr.i.R., Geisa¥p1955 †¥tLudwig°Möller, Pfr.i.R., Bad°Ems¥p1956 †¥tKarl°Walk, Pfarrer°in°Großenbach¥p1976 †¥tRichard°Haas, Dechant, Pfarrer°in°Eiterfeld¥p1979 †¥tRudolf°Kirchner°(Leitmeritz), Pfr.i.R., GR, Küllstedt¥p1982 †¥tGeorg°Exner°(Jassy), Pfarrer°in°Batten¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "18": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 7.°Woche°der OSterzeit – 9.°Tag°der°Pfingstnovene¥pr¥tOder ¥fhl. Johannes I.¥0f, Pp, Märt, ¥fGed¥0f¥p(w)¥t¥fMs¥0f vom Tag oder vom°Hl, Oster-°oder°HifPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1922 †¥tKarl°Malkmus, Pfarrer°in°Blankenau¥p1941 †¥tRobert°Buch,°Bischöfl.°Kommissar°in°Heiligenstadt¥p1986 †¥tBernhard°Märzdorf°(Breslau), Pfr.i.R., Treysa¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "¥fHOCHHEILIGES PFINGSTFEST¥0f¥j¥fHinweise:¥0f¥p¥sDie ¥fVorabendmesse zu Pfingsten¥0f kann durch eine vermehrte Zahl der Schriftlesungen zu einer ¥fPfingstvigil¥0f erweitert werden (HR,°S.°5¥_9°/°MBkl°1228¥_1232). Diese Pfingstvigil kann auch als eigener Wortgottesdienst gehalten werden.¥p¥sAus pastoralen Gründen können in der Vigilmesse auch die Perikopen vom Pfingstsonntag genommen werden.¥p¥s¥fHeute endet die Zeit der Osterkommunion¥0f.¥p¥sZum ¥fEnde der Osterzeit am Pfingstsonntagabend¥0f empfiehlt es sich, der ¥fOsterkerze¥0f einen würdigen ¥fPlatz beim Taufbecken¥0f zu geben. An ihr werden in der Tauffeier die Taufkerzen entzündet. Bei Begräbnissen kann die Osterkerze an den Sarg oder bei Begräbnismessen in den Altarraum gestellt und angezündet werden (vgl. FOV°99). Außer bei diesen beiden besonderen Feiern darf sie jedoch außerhalb der Osterzeit nicht angezündet werden und auch nicht im Altarraum stehen.¥p¥s¥fEin vollkommener Ablass¥0f (s.°o.°Kap.°I.C.10.) kann unter den üblichen Bedingungen (Beichte, entschlossene Abkehr von jeder Sünde, Kommunionempfang, Gebet in den Anliegen des Papstes) gewonnen werden, wenn man heute Abend oder morgen in einer Kirche oder Kapelle andächtig dem feierlichen Gesang des ¥fHymnus „Veni, Creator Spiritus“¥0f (GL°341) bzw. ¥f„Komm, Heil’ger Geist“¥0f (GL°342) beiwohnt.¥p",
        "vig_liturgy": "r¥t¥kabends:¥0k ggf. ¥fVigilmesse von Pfingsten¥0f, Gl,°Cr, eig°Präf und in°den Hg°I¥_III eig°Einschub wie morgen, FSS:°MB°546, Entlassungsruf:°MB°531°– ¥f1.°Vp°vom°folg°H¥0f°–°1.°Kp°vom°So¥p¥p"
      },
      "19": {
        "liturgy": "¥fSo¥0f¥a¥t¥qhPfingstsonntag¥0f, ¥fHochfest¥0f¥lTe°Deum°–°Kl.°Hore:°eig°Ant°und°Ps¥pr¥t¥fAm Tag: Ms eig¥0f, Gl, Sequenz°(GL°343/344), Cr, eig°Präf, in°den°Hg°I¥_III eig°Einschub, FSS:°MB°546, Entlassungsruf:°MB°531¥l¥f2.°Vp°vom°H mit: „Gehet hin in Frieden. Halleluja,°halleluja …“¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fHeute endet die Zeit der Osterkommunion¥0f.¥p¥sZum ¥fEnde der Osterzeit am Pfingstsonntagabend¥0f empfiehlt es sich, der ¥fOsterkerze¥0f einen würdigen ¥fPlatz beim Taufbecken¥0f zu geben. An ihr werden in der Tauffeier die Taufkerzen entzündet. Bei Begräbnissen kann die Osterkerze an den Sarg oder bei Begräbnismessen in den Altarraum gestellt und angezündet werden (vgl. FOV°99). Außer bei diesen beiden besonderen Feiern darf sie jedoch außerhalb der Osterzeit nicht angezündet werden und auch nicht im Altarraum stehen.¥p¥s¥fEin vollkommener Ablass¥0f (s.°o.°Kap.°I.C.10.) kann unter den üblichen Bedingungen (Beichte, entschlossene Abkehr von jeder Sünde, Kommunionempfang, Gebet in den Anliegen des Papstes) gewonnen werden, wenn man heute in einer Kirche oder Kapelle andächtig dem feierlichen Gesang des ¥fHymnus „Veni, Creator Spiritus“¥0f (GL°341) bzw. ¥f„Komm, Heil’ger Geist“¥0f (GL°342) beiwohnt.¥p",
        "deceased": "",
        "deceased_more": "1978 †¥tP.°Ludger°Suchanek°OT, Pfr.i.R., Haina°(Kloster)¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "20": {
        "liturgy": "¥fMo¥0f¥a¥t¥fPfingstmontag – Maria,°Mutter°der°Kirche,°Ged¥0f¥l¥fOff vom Ged¥0f (Com Maria) – Psalt:°III.°Woche¥pr¥t¥fMs von Pfingsten¥0f (MB°203/²201) oder ¥fvom°Pfingstmontag¥0f°(MB°207/²205) oder ¥fvom Heiligen°Geist¥0f°(MB°1101¥_1109/²1133¥_1141), Gl,°Cr, ¥fFürbitten für die Einheit der Christen¥0f, eig°Präf oder Präf°von°Pfingsten oder SoPräf°VIII, in°den Hg kein eig°Einschub – ¥wLL°u.°Ev:°ML°B/II°237/ᴺ241°oder°VIII°463¥_478¥0w¥p",
        "notes": "¥fEnde der Osterzeit¥0f¥j¥fZEIT „IM JAHRESKREIS“¥0f (2. Teil)¥lvom Pfingstmontag bis vor der 1. Vesper vom 1. Advent¥jPerikopen an den Wochentagen: ¥fML V, Jahr II¥0f¥p¥fStB¥0f und ¥fLitHor¥0f: ¥fBand III¥0f¥p¥fLektionar zum StB II/5¥0f (bis zur 13. Woche i. Jkr.)¥rLektStB  II/5¥0r¥p¥p¥fHinweise:¥0f¥p¥sDer ¥fPfingstmontag¥0f ist in Deutschland ¥fkirchlich gebotener Feiertag¥0f. Es besteht ¥fApplikations- sowie Sonn- und Feiertagspflicht¥0f (s.°o.°Kap.°I.C.1.). In den Eucharistiefeiern wird daher das ¥fGlaubensbekenntnis¥0f gebetet (bzw. gesungen).¥p¥sAm ¥fPfingstmontag¥0f können ¥fökumenische Gottesdienste¥0f gefeiert werden. Sie sind jedoch nicht zu den ortsüblichen Zeiten der Eucharistiefeiern gestattet. Eucharistiefeiern dürfen nicht durch ökumenische Gottesdienste ersetzt werden (vgl. RS°167; EE°30). Bewährt haben sich ökumenische Vespergottesdienste am Abend (ggf. auch am Abend des Pfingstsonntages) und ökumenische Wortgottesdienste am Spätvormittag (ab 11.30 Uhr) oder Nachmittag des Pfingstmontags (vgl. KA 1994, Nr. 151f.; Brief des em. Bischofs vom 15. Mai 2003 an alle Pfarrer und Dechanten;  vgl.°o.°Kap.°I.C.7.). – ¥fFürbitten für die Einheit der Christen¥0f.¥p¥sMit Dekret vom 11. Februar 2018 hat die KGS die ¥fliturgische Feier der seligen Jungfrau Maria als Mutter der Kirche im Rang eines gebotenen Gedenktages in den Römischen Generalkalender eingeführt¥0f. ¥fAls Termin hierfür ist gesamtkirchlich der Pfingstmontag vorgesehen¥0f. In einer Notifikation vom 24. März 2018, in der die Kongregation auf ortskirchliche Gegebenheiten eingeht, ist klargestellt, dass für Deutschland die bisherige liturgische Ordnung durch den neuen Gedenktag nicht abgeschafft wird und die gewohnte liturgische Ordnung hier bestehen bleibt. Eine Verlegung des neuen Gedenktages ist in der Notifikation nicht vorgesehen. Eine abschließende Klärung des Umgangs der deutschen Bischöfe mit dem neuen Gedenktag ist zum Redaktionsschluss noch nicht erfolgt. Ohne dem Ergebnis vorzugreifen, wird auf die ¥fMöglichkeit¥0f verwiesen, je nach pastoraler Situation ¥fan einem der Wochentage in der Woche nach Pfingsten eine Votivmesse zu Maria, der Mutter der Kirche (MB°²1141ff; MBm und MLm Nr.°25¥_27), zu feiern¥0f, sofern der Tag nicht bereits durch einen gebotenen Gedenktag oder ein Gedenken höheren Ranges belegt ist. – ¥fDas bietet sich in diesem Jahr für Donnerstag (ggf. auch Dienstag, Mittwoch oder Samstag) an¥0f.¥p¥sAm Schluss der Komplet steht in der Zeit im Jahreskreis die Marianische Antiphon ¥f„Salve Regina“¥0f (GL 666¥v,4¥0v) bzw. ¥f„Sei gegrüßt, o Königin“¥0f (vgl.°GL°536) oder eine andere Marianische Antiphon. Nur die Ant „Regina caeli“ bzw. „O¥°Himmelskönigin, frohlocke“ ist der Osterzeit vorbehalten.¥p¥sDer ¥fGedenktag des hl. Bernhardin von Siena¥0f entfällt in diesem Jahr.¥p",
        "deceased": "2005 †¥tEugen°Pfahls, Pfr.i.R., GR, Bad°Orb¥p",
        "deceased_more": "1968 †¥tKarl°Weigand, Pfarrer°in°Rüstungen/Eichsfeld¥p2005 †¥tEugen°Pfahls, Pfr.i.R., GR, Bad°Orb¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "21": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 7.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Hermann Josef¥0f, Ordpr, Myst, ¥fGed¥0f°(RK)¥pr¥tOder ¥fhll. Christopher Magallanes, ¥0fPr, ¥fund°Gefährten¥0f, Märtt, ¥fGed¥0f¥be¥w¥fMs¥0f: HR°/°MBkl°1238f°/°MBErg²°8°/°Com°Ht°od.°Märt°– ¥fML°V°ᴺ612¥0f¥l¥vL:¥0v¥tOffb°7¥v,9¥_17¥0v¥tML°V°832ML°IV°¥l¥vAPs:¥0v¥tPs°34¥v,2¥_3.4¥_5.6¥_7.8¥_9¥0v°(R:°vgl.°¥v5b¥0v)¥t504¥l¥vREv:¥0v¥tvgl.°Mt°5¥v,10¥0v¥t490¥l¥vEv:¥0v¥tJoh°12¥v,24¥_26¥0v¥t708¥0w¥pw¥tOder ¥fMs vom hl. Karl Joseph Eugen von Mazenod¥0f, Bi, Ordgr¥be¥w¥fMs¥0f: Com°Ht°1¥_4¥l¥vL:¥0v¥tJes°52¥v,7¥_10¥0v¥tML°IV°438/ᴺ446¥l¥vL°(ggf.°2.°L):¥0v°1°Kor°1¥v,18¥_25¥0v;°2¥v,1¥_5¥0v¥tvgl.°556+553/ᴺ568+565¥l¥vAPs:¥0v¥tPs°96¥v,1¥_2.3+7.8+10¥0v°(R:°vgl.°¥v3a¥0v)¥t439/ᴺ446¥l¥vREv:¥0v¥tMt°28¥v,19a.20b¥0v¥t439/ᴺ447¥l¥vEv:¥0v¥tLk°4¥v,14¥_22a¥0v¥t105/ᴺ107¥0w¥pw¥tOder ggf. ¥fVotivmesse Maria, Mutter der Kirche¥0f¥be¥w(vgl. den Hinweis zum heutigen Dienstag)¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°307,8;°Gg°247;°Sg°525,1¥0w¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fAm°Donnerstag (ggf. auch am Dienstag, Mittwoch oder Samstag) kann in unserem Bistum der neue¥0f gesamtkirchlich auf den Montag nach Pfingsten gelegte ¥fGedenktag „Maria, Mutter der Kirche“ begangen werden mit der Feier der Votivmesse¥0f:¥p   ᴰ  MB ²1141ff oder MBm und MLm Nrr. 25–27 – L: Gen 3¥v,9–15.20¥0v¥p       oder Apg 1¥v,12–14¥0v | APs: Ps 87¥v,1b–﻿3+5.6–﻿7¥0v (R: ¥v3¥0v) | ¥p       Ev: Joh 19¥v,25–34¥0v (ML IV 403 od. 657/vgl. 314/663¥v,5¥0v/vgl. 673¥p       bzw. ᴺ403 od. 671/vgl. 316/674¥v,5¥0v/683)¥p¥s¥fIn der Zeit im Jahreskreis¥0f stehen an jenen Wochentagen, auf die kein Hochfest, Fest oder gebotener Gedenktag fällt, ¥ffür die Messfeier folgende Texte zur Wahl¥0f:¥p–°¥fMesse vom Tag¥0f: die ¥f34 Messformulare der Sonntage¥0f im Jkr., ¥fWochentagsmessen¥0f (MB°275¥_304), ¥fTagesgebete¥0f (MB°305¥_320), ¥fGabengebete¥0f (MB°348¥_351), ¥fSchlussgebete¥0f (MB°525¥_529) zur Auswahl. ¥fVorschläge zur Auswahl¥0f von Tagesgebet°(Tg), Gabengebet°(Gg) und Schlussgebet°(Sg), die sich am Evangelium des Tages orientieren, sind bei der „Messe nach Wahl“ im Kalendarium jeweils angegeben (vgl. Werkbuch zum Gotteslob VIII/2: Die Wochentage während des Jahres, 1978). Die Seitenzahl bezieht sich auf das MB°II°1975 und MB°II,°2.°Auflage°1988.¥p–°¥fMarien-Messen¥0f (MBm°187¥_297), (vgl.°AEM°316c, MBm, Past.°Einf.°37), vor allem das Gedächtnis Mariens am Samstag; ¥p–°¥fMessen eines/einer Heiligen¥0f, dessen/deren Gedächtnis vorgesehen oder der/die an diesem Tag im Martyrologium Romanum verzeichnet ist (vgl.°AEM°316c); ¥p–°¥fMessen für ein besonderes Anliegen oder Votivmessen¥0f – bei echter Notwendigkeit oder aus pastoraler Erfordernis auch an gebotenen Ged (AEM°333);¥p–°eine ¥fBegräbnismesse¥0f ist an allen Tagen möglich, außer an den gebotenen Hochfesten (AEM°336);¥p–°¥fMessen für Verstorbene nach Eintreffen der Todesnachricht und am ersten Jahrestag¥0f – auch an gebotenen Ged möglich (AEM°337); ¥p–°¥fMessen für bestimmte Verstorbene¥0f (sog. „tägliche Totenmesse“, AEM°337).¥p",
        "deceased": "2018 †¥tKlaus¥-Dieter°Mittenentzwei,°Diakon.i.R., Wehretal¥-Reichensachsen¥p",
        "deceased_more": "2018 †¥tKlaus¥-Dieter°Mittenentzwei,°Diakon.i.R., Wehretal¥-Reichensachsen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "22": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 7.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Rita von Cascia¥0f, Ord, ¥fGed¥0f¥be¥w¥fMs¥0f: HR°/°MBkl°1239°/°MBErg²°9°/°Com°MFr°7+8 od.°11+12°– ¥fML°V°ᴺ614¥0f¥l¥vL:¥0v¥tPhil°4¥v,4¥_9¥0v¥tML°V°615¥l¥vAPs:¥0v¥tPs°1¥v,1¥_2.3.4+6¥0v°(R:°vgl.°¥v2a¥0v°oder°vgl.°Jer°17¥v,7¥0v)¥t705¥l¥vREv:¥0v¥tMt°11¥v,28¥0v¥t878¥v,5¥0v¥l¥vEv:¥0v¥tLk°6¥v,27¥_38¥0v¥t883¥0w¥pw¥tOder ggf. ¥fVotivmesse Maria, Mutter der Kirche¥0f¥be¥w(vgl. den Hinweis zum Dienstag dieser Woche)¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°307,7;°Gg°349,6;°Sg°525,2¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1959 †¥tDominikus°Heller, Pfr.i.R., Fulda¥p1984 †¥tGeorg°Gutsfeld°(Breslau), Pfr.i.R., GR, Grafschaft¥-Eckendorf¥p1987 †¥tDr.°Franz°Peter°Sonntag°Or, Prof., Köln¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "23": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 7.°Woche°im°Jahreskreis¥pw¥tOder ¥fVotivmesse Maria, Mutter der Kirche¥0f¥be¥w(vgl. den Hinweis zum Dienstag dieser Woche)¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°315,29;°Gg°348,1;°Sg°529,13¥0w¥p",
        "notes": "",
        "deceased": "1994 †¥tJohannes°Heim, Pfr.i.R., GR, Fulda¥p",
        "deceased_more": "1994 †¥tJohannes°Heim, Pfr.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "24": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 7.°Woche°im°Jahreskreis – ¥fWeltgebetstag für°die°kath.°Kirche°in°China¥0f¥pw¥tOder ¥fhl. Maria, Hilfe der Christen¥0f, ¥fGed¥0f¥be¥wVotivmesse: MBm und MLm°Nr.°42¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°309,12;°Gg°350,9;°Sg°527,9¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute wird zum 17. Mal der von Papst Benedikt XVI. am 20. Juni 2007 in seinem Brief an die Katholiken Chinas bekanntgegebene und auf den ¥fGedenktag „Maria, Hilfe der Christen“¥0f am 24. Mai festgelegte ¥fWeltgebetstag für die katholische Kirche in China¥0f begangen. – Gebet und Fürbitte im Anliegen, „dass die chinesischen Katholiken ihre Gemeinschaft des Glaubens an Jesus, unseren Herrn und in der Treue zum Papst erneuern und dass die Einheit unter ihnen immer tiefer und sichtbarer werde“ (Papst Benedikt XVI., 2007). Informationen, Gebete und Fürbitten unter www.china-zentrum.de, www.kirche-in-not.de. ¥p",
        "deceased": "",
        "deceased_more": "1988 †¥tP.°Paulus°Danitz°OFM,°Berlin¥-Pankow¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "25": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 7.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Beda der Ehrw.¥0f, Ordpr, Kl, ¥fGed¥0f¥pw¥tOder ¥fhl. Gregor VII.¥0f, Pp, ¥fGed¥0f¥pw¥tOder ¥fhl. Maria Magdalena von Pazzi¥0f, Ord, ¥fGed¥0f¥pw¥tOder ggf. ¥fVotivmesse Maria, Mutter der Kirche¥0f¥be¥w(vgl. den Hinweis zum Dienstag dieser Woche)¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°305,2;°Gg°348,1;°Sg°526,6¥0w¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom H¥0f – ¥l¥f1.°Vp°vom°folg°H¥0f°(StB°III°73) – 1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1976 †¥tOtto°Fipper°(Breslau), Pfr.i.R., Winterstein¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "26": {
        "liturgy": "¥fSo¥0f¥a¥t¥qhDreifaltigkeitssonntag¥0f, ¥fHochfest¥0f¥lLektionar°zum°StB°II/5,°237 – Te°Deum – Kl.°Hore:°eig°Ant,°Ps°vom°So°der°I.°Woche¥pw¥t¥fMs eig¥0f (MB°250), Gl,°Cr, eig°Präf, FSS:°MB°552 – LL°und°Ev:°ML°B/II°241/ᴺ245¥l¥f2.°Vp°vom°H¥0f°–°¥f2.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥sDas ¥fsonntägliche Taufgedächtnis mit Segnung und Austeilung des Weihwassers¥0f (Asperges, GL°124) sowie Vergebungsbitte (MB°1171/²1207) kann in allen Sonntagsmessen – auch in den Vorabendmessen – in allen Kirchen und Kapellen vorgenommen werden. Dieser Ritus ersetzt das Allgemeine Schuldbekenntnis. Nach der Vergebungsbitte folgen, soweit vorgesehen, Kyrie und Gloria.¥p¥sDie Liturgie zum 8. Sonntag im Jkr. entfällt in diesem Jahr.¥p¥sHeute ist der ¥fGedenktag der hl. Brüder Johannes und Paulus¥0f, die zwischen 301 und 303 in Rom das Martyrium erlitten haben. Sie gehören zu den seit alten Zeiten verehrten Heiligen, die im Römischen Messkanon genannt werden, deren Gedenktag heute aber nicht mehr im ARK verzeichnet ist. Durch die ¥fWahl des Hg°I¥0f kann ihr Gedächtnis weiter geehrt werden.¥p¥sDer ¥fGedenktag des hl. Philipp Neri¥0f entfällt in diesem Jahr.¥p",
        "deceased": "1996 †¥tAugust°Görge, Pfr.i.R., GR, Stadtallendorf¥p2004 †¥tHans¥-Ludwig°Artmann, Pfr.i.R., GR, Fulda¥-Bronnzell¥p",
        "deceased_more": "1959 †¥tHeinrich°Glorius, Pfarrer°in°Neuendorf¥p1976 †¥tKarl°Ruppel, Pfr.i.R., Msgr., Bad°Soden¥-Salmünster¥p1985 †¥tGeorg°Neugebauer°(Breslau), Pfr.i.R., OStR°i.K.i.R., GR, Kassel¥p1996 †¥tAugust°Görge, Pfr.i.R., GR, Stadtallendorf¥p2004 †¥tHans¥-Ludwig°Artmann, Pfr.i.R., GR, Fulda¥-Bronnzell¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "27": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 8.°Woche°im°Jahreskreis¥lPsalt:°IV.°Woche¥pw¥tOder ¥fhl. Augustinus von Canterbury¥0f, Bi, Glb, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°279¥0w¥p",
        "notes": "",
        "deceased": "2003 †¥tErnst°Ludwig°Grünhage, Pfr.i.R., Fulda¥p2007 †¥tRobert°Arnrich, Pfr.i.R., GR, Geisa¥p",
        "deceased_more": "1937 †¥tAnton°Teichmann, Pfr.i.R., Rohrberg¥p1940 †¥tJohannes°Balzer, Pfarrer°in°Michelsrombach¥p1944 †¥tDr.°Viktor°Thielemann, Prof., Domkapitular,°Domdechant,°Fulda¥p1963 †¥tPaul°Grimm, Pfr.i.R., Uder/Eichsfeld¥p1983 †¥tWerner°Grebener, Pfr.i.R., Offenbach¥p1987 †¥tHugo°Büchel, Pfr.i.R., Fulda¥p2003 †¥tErnst°Ludwig°Grünhage, Pfr.i.R., Fulda¥p2007 †¥tRobert°Arnrich, Pfr.i.R., GR, Geisa¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "28": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 8.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°308,10;°Gg°349,4;°Sg°526,6¥0w¥p",
        "notes": "",
        "deceased": "1996 †¥tPaul°Wehner, Pfr.i.R., GR, Bad°Salzschlirf¥p",
        "deceased_more": "1923 †¥tEmil°Atzert, Pfr.i.R., Redakteur°des°Bonifatiusboten,°Eckweisbach¥p1953 †¥tAlbert°Schäfer, Pfarrer°in°Hildebrandshausen¥p1962 †¥tJosef°Mazurowski,°Sekretär°i.R., Fulda¥p1996 †¥tPaul°Wehner, Pfr.i.R., GR, Bad°Salzschlirf¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "29": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 8.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Paul VI.¥0f, Pp, ¥fGed¥0f¥be¥w¥fMs¥0f: HR⁴ᶠ°/°Com°Ht°1+2°– ¥fML°V°ᴺ631¥0f¥l¥vL:¥0v¥t1°Kor°9¥v,16¥_19.22¥_23¥0v¥tML°V°843¥l¥vAPs:¥0v¥tPs°96¥v,1¥_‍2.3+7.8+10¥0v°(R:°vgl.°¥v3a¥0v)¥t619¥l¥vREv+Ev:¥0v°Mt°16¥v,13¥_19¥0v¥t611¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°307,8;°Gg°349,4;°Sg°527,9 ¥0w¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom H¥0f – ¥f1.°Vp°vom°folg°H¥0f°(StB°III°88)°–°¥f1.°Kp°vom°So¥0f¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1943 †¥tJohannes°Kellner, Pfarrer°in°Silberhausen¥p1960 †¥tJosef°Pleier°(Prag), Dechant°i.R., GR, Küllstedt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "30": {
        "liturgy": "¥fDo¥0f¥a¥t¥qhHochfest des Leibes und Blutes Christi¥0f ¥f(Fronleichnam)¥0f¥lLektionar°zum°StB°II/5,°241 – Te°Deum – Kl.°Hore:°eig°Ant,°ErgPs¥pw¥t¥fMs eig¥0f (MB°255), Gl, n.B. Sequenz, Cr, EuchPräf°II, FSS:°MB°540 oder ²1030 bzw. MBErg¹°28 – LL°und°Ev:°ML°B/II°245/ᴺ249¥l¥f2.°Vp°vom°H¥0f°–°¥f2.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fDas Hochfest Fronleichnam ist kirchlich gebotener Feiertag¥0f. Es besteht ¥fApplikations- sowie Sonn- und Feiertagspflicht¥0f (s.°o.°Kap.°I.C.1.).¥p¥sSchließt sich die Fronleichnamsprozession an die heutige Messfeier an, dann ohne Entlassriten.¥p¥s¥fEin vollkommener Ablass¥0f (s.°o.°Kap.°I.C.10.) kann unter den üblichen Bedingungen (Beichte, entschlossene Abkehr von jeder Sünde, Kommunionempfang, Gebet in den Anliegen des Papstes) gewonnen werden, wenn man ¥fan einer feierlichen eucharistischen Prozession teilnimmt¥0f oder ¥fdas „Tantum ergo“ andächtig betet oder singt¥0f.¥p",
        "deceased": "2024 †¥tVictor John°Gustitus°(Oklahoma°und°Tulsa/USA),°Diakon,°Marburg¥p",
        "deceased_more": "1962 †¥tEdmund°Rausch, Pfr.i.R., Ulmbach¥p2024 †¥tVictor John°Gustitus°(Oklahoma°und°Tulsa/USA),°Diakon,°Marburg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "31": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 8.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°170f/²168f¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1950 †¥tDr.°Joseph°Adrian,°Rektor,°Erfurt¥p1969 †¥tJosef°Brodmann, Pfr.i.R., Wingerode/Eichsfeld¥p1974 †¥tAnton°Hollick°(Eichstätt), Pfr.i.R., Burgwald¥-Ernsthausen¥p1974 †¥tP.°Franz°Döring°SVD,°Rektor°in°Ershausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      }
    },
    "6": {
      "1": {
        "liturgy": "¥fSa¥0f¥t¥fHl. Justin¥0f, Märt, ¥fGed¥0f¥pr¥t¥fMs vom Hl¥0f – Off°vom°Ged,°BuM°eig¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1952 †¥tKarl°Sauer°(Breslau),°Erzpriester°i.R., Kella¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "2": {
        "liturgy": "¥fSo¥0f¥a¥t¥f9. Sonntag im Jahreskreis¥0f – ¥fBonifatiusfest°in°Fulda¥0f¥lPsalt:°I.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fHeute¥0f wird auf dem Domplatz zu Fulda das ¥fBonifatiusfest mit Eröffnung der Bonifatiuswallfahrt¥0f gefeiert. ¥p¥sDer ¥fGedenktag der hll. Marcellinus und Petrus¥0f entfällt in diesem Jahr.¥pIn der kommenden Woche möge in den ¥fFürbitten auch für die Weihekandidaten während ihrer Weiheexerzitien¥0f zur Vorbereitung auf die ¥fDiakonenweihe am kommenden Samstag¥0f gebetet werden.",
        "deceased": "2012 †¥tHerwig°Hofmann, Pfr.i.R., Minden/Westfalen¥p",
        "deceased_more": "1968 †¥tGeorg°Steinberg, Pfarrer°in°Ferna/Eichsfeld¥p2012 †¥tHerwig°Hofmann, Pfr.i.R., Minden/Westfalen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "3": {
        "liturgy": "¥fMo¥0f¥t¥fHll. Karl Lwanga und°Gefährten¥0f, Märtt, ¥fGed¥0f¥pr¥t¥fMs von den Hll¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1958 †¥tWenzel°Rösler°(Leitmeritz), Pfr.i.R., Eisenach¥-Elisabethenruhe¥p1988 †¥tJosef°Vogel, Pfr.i.R., Petersberg¥p1989 †¥tFerdinand°Kribus°(Olmütz), Pfr.i.R., GR, Dietershausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "4": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 9.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°290;°Gg°349,4;°Sg°290¥0w¥pw¥t¥kabends:¥0k ggf.°Vorabendmesse°vom°H – ¥f1.°Vp°vom°folg°H¥0f°–°¥f1.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute Abend und am Mittwoch findet der ¥fTag der Priester und Diakone¥0f statt (siehe Einladung des Bischofs bzw. Generalvikars).¥p",
        "deceased": "2008 †¥tTheodor°Krenzer, Pfr.i.R., GR, Fulda¥p2015 †¥tAlois°Lang, Prälat, GR, Domkapitular°i.R., Fulda¥p",
        "deceased_more": "1951 †¥tWilhelm°Rudolph°(Leitmeritz),°Erzdechant°i.R., Lengenfeld°u.°St.¥p1980 †¥tErnst°Kiel, Dechant, Pfarrer°in°Birkenfelde¥p1989 †¥tDDr.°Georg°Siegmund°(Prag), Prof., Bernhards¥p1993 †¥tDr.°Wilhelm°Kratz, OStD°i.R., Hünfeld¥p2008 †¥tTheodor°Krenzer, Pfr.i.R., GR, Fulda¥p2015 †¥tAlois°Lang, Prälat, GR, Domkapitular°i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "5": {
        "liturgy": "¥fMi¥0f¥t¥qhHl. Bonifatius¥0f, Bi, Märt, Glb in Deutschland, „Apostel°der°Deutschen“, ¥fHauptpatron°der°Diözese¥0f – ¥fHochfest¥0f°(FD/RK/GK)¥lTe Deum – Kl.°Hore: eig Ant,°ErgPs¥pr¥t¥fMs eig¥0f, Gl,°Cr,°eig°Präf, eig°FSS¥bf¥wFDM°15¥_21°(dt.)°/°FDM°22¥_28°(lat.)°– FDL°9¥_14¥0w°– 2.°Vp°vom°H°–°2.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥sDas bisher im Rang der liturgischen Feiern in den deutschen Diözesen unterschiedlich begangene ¥fGedächtnis des hl.°Bonifatius¥0f (Ged oder Fest) wurde durch Dekret der KGS vom 9.°September°2005 (Prot.°N.°1402/05/L) ¥ffür alle deutschen Diözesen einheitlich in den Rang eines Festes erhoben¥0f. Im Bistum Fulda bleibt es Hochfest des Eigenkalenders. In den allgemeinen liturgischen Büchern (MB°und MBkl, ML°V, Schott-Messbuch für die Wochentage°I, StB°III und Lektionare zum StB I/5 und II/5) ist die Bezeichnung „Gedenktag“ durch „¥fFest¥0f“ zu ersetzen, in den Messbüchern „¥fGloria¥0f“ und in den Lektionaren zum StB nach dem Responsorium zur 2.°Lesung „¥fTe°Deum¥0f“ einzufügen.¥p¥sNutzer der Stundenbuch-App des DLI finden die ¥fTexte für das Stundengebet zur heutigen Eigenfeier des Diözesankalenders in der Datei FD-Stundengebet.PDF¥0f (s.°o.°S.°87, Nr.°3).¥p¥sEin Liedblatt mit einem weiteren Hymnus zum hl. Bonifatius aus dem Stundenbuch steht für den Gesang als Gemeindelied unter www.direktorium.bistum-fulda.de zum Download bereit.¥p",
        "deceased": "2010 †¥tDr.°Otmar°Einwag°(Würzburg), Pfr.i.R., Grebenstein¥-Udenhausen¥p",
        "deceased_more": "1930 †¥tFriedrich°Haas, Pfr.i.R., Eichenzell¥p1975 †¥tEmil°Jestädt, Pfr.i.R., GR, Ebersburg¥-Ried¥p2010 †¥tDr.°Otmar°Einwag°(Würzburg), Pfr.i.R., Grebenstein¥-Udenhausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "6": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 9.°Woche°im°Jahreskreis – ¥fPriesterdonnerstag¥0f¥pw¥tOder ¥fhl. Norbert von Xanten¥0f, Bi, Ordgr, ¥fGed¥0f°(RK/GK)¥pw¥tOder ¥fMs um Priesterberufe¥0f ¥w(MB°1035f/²1057),¥lL°und°Ev vom°Tag oder aus°den°AuswL¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°299f¥0w¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom H¥0f – ¥f1.°Vp°vom°folg°H¥0f°(StB°III°105)°–°¥f1.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Priesterdonnerstag (monatl. Gebetstag für geistliche Berufe):¥0f Die Votivmesse ist erlaubt. – Fürbitte(n) um Priesterberufungen. – Thema: „Zukunft hat der Mensch des Friedens“ (vgl.°Ps°37; Motto des Katholikentags¥°2024 in°Erfurt). Intention: Ehrenamtliche, die sich in der Kirche engagieren.¥p",
        "deceased": "",
        "deceased_more": "1957 †¥tDr.°Benno°Rode, Dr.°phil., Pfr.i.R., Holungen¥p1963 †¥tHeinrich°Mark°(Prag), Pfarrer°in°Wendehausen/Krs.°Mühlhausen¥p1970 †¥tWerner°Loskant, Pfr., Defensor°vinculi°in°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "7": {
        "liturgy": "¥fFr¥0f¥t¥qhHeiligstes Herz Jesu¥0f, ¥fHochfest – Weltgebetstag°für°die°Heiligung°der°Priester¥0f – ¥fHerz¥-Jesu¥-Freitag¥0f¥lLektionar°zum°StB°II/5,°247 – Te°Deum – Kl.°Hore:°eig°Ant,°ErgPs¥pw¥t¥fMs eig¥0f (MB°257), Gl,°Cr, eig°Präf, FSS:°MB°552 – ¥wLL°und°Ev:°ML°B/II°252/ᴺ257¥0w¥l¥f2.°Vp°vom°H¥0f – ¥f2.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute ist der ¥f30. Weltgebetstag für die Heiligung der Priester¥0f. In den Fürbitten und/oder auch außerhalb der hl. Messe in eucharistischen Anbetungsstunden und/oder im Rosenkranzgebet möge in diesem Anliegen besonders gebetet werden. – Aktuelle Botschaft des Dikasteriums für den Klerus zum Welt-gebetstag unter www.clerus.org oder www.vatican.va › Die römische Kurie › Dikasterium für den Klerus.¥p¥sWegen des Hochfestes entfällt heute die Verpflichtung zum Freitagsopfer.¥p¥sDer ¥fGedenktag der hll. Eoban, Adelar und übrigen Gefährten des hl. Bonifatius¥0f entfällt in diesem Jahr.¥p¥sDer Herz¥-Jesu¥-Freitag ist in der Feier des Herz¥-Jesu¥-Festes enthalten.¥p",
        "deceased": "2011 †¥tDr.°Eduard°Krieg, Dr.°phil., OStR°i.R., Prälat,°Fulda¥p",
        "deceased_more": "1981 †¥tAnton°Goeb, Pfr.i.R., Offizialsrat°E.h., Fulda¥p2011 †¥tDr.°Eduard°Krieg, Dr.°phil., OStR°i.R., Prälat,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "8": {
        "liturgy": "¥fSa¥0f¥t¥fUnbeflecktes Herz Mariä¥0f, ¥fGed¥0f – ¥fHerz¥-Mariä¥-Samstag¥0f¥l¥fOff¥0f: StB III 783; Lektionar°zum°StB°II/5,°272¥pw¥t¥fMs vom Ged¥0f (MB°679f), ¥feig°Ev¥0f°(ML°V°689f/ᴺ706f), MarPräf¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fZum heutigen Gedenktag des Unbefleckten Herzens Mariä¥0f, der früher nichtgebotener Gedenktag war, ist in den älteren Ausgaben der liturgischen Bücher (MB und MBkl, ML°V, Schott-Messbuch für die Wochentage I, StB°III und Lektionare zum StB I/5 und II/5) die Bezeichnung „Gedenktag“ zu ergänzen.¥p¥fHeute¥0f wird im Dom zu Fulda das ¥fPontifikalamt mit Spendung der Diakonenweihe¥0f gefeiert. ¥fIn den Fürbitten der Sonntagsmessen möge im ganzen Bistum auch für die neugeweihten Diakone gebetet werden.¥0f ¥s¥fZum Herz¥-Mariä¥-Sa:¥0f Wegen des Mariengedenktages erübrigt sich die Wahl der Votivmesse.¥p",
        "deceased": "",
        "deceased_more": "1969 †¥tAugust°Hohmann, Pfr.i.R., Eichenried¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "9": {
        "liturgy": "¥fSo¥0f¥a¥t¥f10. Sonntag im Jahreskreis¥0f¥lPsalt:°II.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweis:¥0f ¥sDer ¥fGed des hl. Ephräm des Syrers¥0f entfällt in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1967 †¥tDr.°Johannes°Haußner,°Studienrat°in°Somborn¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "10": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 10.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Bardo¥0f, Bi, ¥fGed¥0f (FD)¥bf¥w¥vL:¥0v¥t1°Petr°5¥v,1¥_4¥0v¥tML°V°567/ᴺ572¥l¥vAPs:¥0v¥tPs°89¥v,2¥_3.20a+4¥_5.21¥_22.25+27¥0v°(R:°¥v2a¥0v)¥t642/ᴺ657¥l¥vREv+Ev:¥0v°Lk°22¥v,24¥_30¥0v¥t601/ᴺ606¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°318,37;°Gg°350,8;°Sg°525,1¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1975 †¥tBernhard°Bilz, Pfr.i.R., Altenmittlau¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "11": {
        "liturgy": "¥fDi¥0f¥t¥fHl. Barnabas¥0f, Ap, ¥fGed¥0f – Inv°und°LuV°eig – Hy°zur°Lh°aus°dem°Com°oder°vom°Wt – Kl.°Hore:°Hy,°Ant°u.°Ps°vom°Wt,°sonst°eig¥pr¥t¥fMs vom Hl¥0f, ¥feig°L¥0f, ApPräf, n.B.°Hg°I¥p",
        "notes": "",
        "deceased": "1995 †¥tAugust°Kraft, Pfr.i.R., Kassel¥p1995 †¥tPaul°Piosik°(Schneidemühl), OStR°i.K.i.R., GR, Fulda¥p",
        "deceased_more": "1957 †¥tHeinrich°Gellrich, Pfr.i.R., Heiligenstadt¥p1980 †¥tHerbert°Schlensog°(Breslau), GR, Pfarrer°in°Frankenberg¥p1995 †¥tAugust°Kraft, Pfr.i.R., Kassel¥p1995 †¥tPaul°Piosik°(Schneidemühl), OStR°i.K.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "12": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 10.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°270¥0w¥p",
        "notes": "",
        "deceased": "2005 †¥tAntonius°van’t°Walderveen, Pfr.i.R., Msgr., GR, Niederklein¥p",
        "deceased_more": "1960 †¥tFranz°Schreiber°(Breslau), Pfr.i.R., GR, Gottsbüren¥p1970 †¥tP.°Rudolf°Benedikt°Engelhardt°OFM,°Hausgeistlicher°im°Marienstift°in°Erfurt¥p1975 †¥tWilhelm°Strothteicher, Pfr.i.R., GR, Schloß°Holte¥p2005 †¥tAntonius°van’t°Walderveen, Pfr.i.R., Msgr., GR, Niederklein¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "13": {
        "liturgy": "¥fDo¥0f¥t¥fHl. Antonius von Padua¥0f, Ordpr, Kl, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "2017 †¥tWerner°Vogel, OStR°a.D., GR, Petersberg¥p",
        "deceased_more": "1934 †¥tJulius°Schmidt, Pfarrer°in°Margretenhaun¥p2017 †¥tWerner°Vogel, OStR°a.D., GR, Petersberg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "14": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 10.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°272,2;°Gg+Sg°167/²165¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "15": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 10.°Woche°im°Jahreskreis¥pr¥tOder ¥fhl. Vitus¥0f, Märt, ¥fGed¥0f°(RK)¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°1052,1/²1076,1;°Gg+Sg°1053/²1077¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1945 †¥tJoseph°Bottermann, Pfarrer°in°Künzell¥p1987 †¥tGerhard°Mohr, Pfr.i.R., Erfurt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "16": {
        "liturgy": "¥fSo¥0f¥a¥t¥f11. Sonntag im Jahreskreis¥0f¥lPsalt:°III.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fZur Jahreszeit der Sommersonnenwende¥0f passt das Lied ¥fGL°465¥0f (auch nach der Melodie GL°395 singbar).¥p¥sDer ¥fGedenktag des hl. Benno¥0f entfällt in diesem Jahr.¥p",
        "deceased": "2006 †¥tFrankbert°Müller, Pfr.i.R., Poppenhausen¥p",
        "deceased_more": "1936 †¥tFranz°Neureuther, Prof., StR°i.R., Heiligenstadt¥p1977 †¥tKarl°Hohmann, Pfr.i.R., Bachrain¥p1990 †¥tBernhard°Wand, Pfr.i.R., GR, Bad°Salzschlirf¥p1992 †¥tKarl°Schollmeier,°Ehrendomkapitular,°Erfurt¥p2006 †¥tFrankbert°Müller, Pfr.i.R., Poppenhausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "17": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 11.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°317,34;°Gg°350,8;°Sg°527,8¥0w¥p",
        "notes": "",
        "deceased": "1998 †¥tStephan°Weber, Pfr.i.R., Hilders¥-Eckweisbach¥p1998 †¥tP.°Contardo°Müller°OFM,°Marienthal¥p",
        "deceased_more": "1962 †¥tLeopold°Preis, Pfr.i.R., Ufhausen¥p1975 †¥tJoachim°Aust°(Schneidemühl), Pfr.i.R., GR, Breitenworbis¥p1985 †¥tEgon°Rowinski°(Ermland), Pfr.i.R., GR, Steinheim¥-Ottenhausen¥p1989 †¥tGeorg°Hanel°(Breslau/Görlitz), Pfr.i.R., Wittichenau¥p1990 †¥tDr.°Heinrich°Huth, Pfr.i.R., Weyhers¥p1998 †¥tStephan°Weber, Pfr.i.R., Hilders¥-Eckweisbach¥p1998 †¥tP.°Contardo°Müller°OFM,°Marienthal¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "18": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 11.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°1087/²1118;°Gg+Sg°1083/²1113f¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1937 †¥tJoseph°Weber, Pfr.i.R., Haimbach¥p1972 †¥tWilhelm°Wewer, Pfr.i.R., Herne/Westfalen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "19": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 11.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Romuald¥0f, Abt, Ordgr, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°94/²92;°Gg+Sg°293f¥0w¥p",
        "notes": "",
        "deceased": "1996 †¥tP.°Haimo°Gerats°OFMCap, GR, Pfarrer°in°Herleshausen¥p2001 †¥tHermann°Meissner, GR, Pfarrer°in°Hofbieber¥-Schwarzbach¥p2013 †¥tHeinrich°Streb, Pfr.i.R., Meisenheim¥p",
        "deceased_more": "1970 †¥tEduard°Pfeifer, Pfr.i.R., Bronnzell¥p1996 †¥tP.°Haimo°Gerats°OFMCap, GR, Pfarrer°in°Herleshausen¥p2001 †¥tHermann°Meissner, GR, Pfarrer°in°Hofbieber¥-Schwarzbach¥p2013 †¥tHeinrich°Streb, Pfr.i.R., Meisenheim¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "20": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 11.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°315,27;°Gg°349,4;°Sg°528,12¥0w¥p",
        "notes": "",
        "deceased": "1997 †¥tDr.°Josef°Gutmann, OStD°i.K.i.R., Msgr., Hilders¥p2003 †¥tJosef°Peter,°Msgr., Spiritual,°Fulda¥p",
        "deceased_more": "1954 †¥tDr.°Alfons°Goldmann°(Breslau), Pfr.i.R., Küllstedt¥p1957 †¥tGeorg°Gerling, Pfr.i.R., Kirchgandern¥p1997 †¥tDr.°Josef°Gutmann, OStD°i.K.i.R., Msgr., Hilders¥p2003 †¥tJosef°Peter,°Msgr., Spiritual,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "21": {
        "liturgy": "¥fFr¥0f¥t¥fHl. Aloisius Gonzaga¥0f, Ord, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "2018 †¥tJosef°van°Besien, Pfr.i.R., GR, Maintal¥-Hochstadt¥p",
        "deceased_more": "1964 †¥tWilhelm°Hasenau, Pfarrer°in°Neuhof¥p1981 †¥tBernhard°Ewers, Pfr.i.R., GR, Halle¥p2018 †¥tJosef°van°Besien, Pfr.i.R., GR, Maintal¥-Hochstadt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "22": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 11.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Paulinus von Nola¥0f, Bi, ¥fGed¥0f¥pr¥tOder ¥fhl. John Fischer¥0f, Bi, und ¥fhl. Thomas Morus¥0f, Märtt, ¥fGed¥0f¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°320,40;°Gg°350,9;°Sg°529,14¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥sDer hl. Papst Johannes Paul II. hat den ¥fhl. Thomas Morus¥0f am 31. Oktober 2000 mit einem Apostolischen Schreiben zum ¥fPatron der Regierenden und der Politiker¥0f ernannt. Darin schreibt er: „Vom Leben und Martyrium des heiligen Thomas Morus geht eine Botschaft aus, welche die Jahrhunderte durchzieht und zu den Menschen aller Zeiten von der unveräußerlichen Würde des Gewissens spricht.“¥p",
        "deceased": "",
        "deceased_more": "1957 †¥tHeinrich°Mette, Pfarrer°in°Erfurt,°St.°Severi¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "23": {
        "liturgy": "¥fSo¥0f¥a¥t¥f12. Sonntag im Jahreskreis¥0f¥lPsalt:°IV.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "",
        "deceased": "2003 †¥tAlfons°Kluge°(Breslau/Fulda), Pfr.i.R., GR, Bad°Orb¥p",
        "deceased_more": "1960 †¥tFranz°Mayer°(Königgrätz),°Kpl.i.R., Volkmarsen¥p2003 †¥tAlfons°Kluge°(Breslau/Fulda), Pfr.i.R., GR, Bad°Orb¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "¥fHinweise:¥0f¥p¥sAus pastoralen Gründen können in der ¥fVigilmesse vom Hochfest der Geburt des hl. Johannes des Täufers¥0f auch die Perikopen der Tagesmesse genommen werden.¥p¥sZum morgigen Hochfest der Geburt des hl. Johannes des Täufers passen die ¥fLieder GL°748¥v,3¥0v und GL°871¥0f; letzteres kann auch nach der Melodie GL°795 gesungen werden oder – ohne den Kehrvers, nur die Strophen – nach den Melodien GL°236 oder GL°282.¥p¥sFür den Gesang des ¥fHymnus aus dem Stundenbuch als Gemeindelied¥0f steht unter www.direktorium.bistum-fulda.de ein Liedblatt zum Download bereit.¥p",
        "vig_liturgy": "w¥t¥kabends:¥0k ggf. ¥fVigilmesse von der Geburt des hl. Johannes des Täufers¥0f, Gl,°Cr, eig°Präf und in°den Hg°I¥_III eig°Einschub wie morgen, FSS:°MB°560°– ¥f1.°Vp°vom°folg°H¥0f°–°¥f1.°Kp°vom°So¥0f¥p¥p"
      },
      "24": {
        "liturgy": "¥fMo¥0f¥t¥qhGeburt des hl. Johannes des Täufers¥0f, ¥fHochfest¥0f¥lTe Deum – Kl.°Hore: eig Ant,°ErgPs¥pw¥t¥fMs „Am Tag“ eig¥0f, Gl,°Cr, eig°Präf, n.B.°Hg°I, in°den Hg°I¥_III eig°Einschub, FSS:°MB°560°– 2.°Vp°vom°H°–°2.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥sZum morgigen Hochfest der Geburt des hl. Johannes des Täufers passen die ¥fLieder GL°748¥v,3¥0v und GL°871¥0f; letzteres kann auch nach der Melodie GL°795 gesungen werden oder – ohne den Kehrvers, nur die Strophen – nach den Melodien GL°236 oder GL°282.¥p¥sFür den Gesang des ¥fHymnus aus dem Stundenbuch als Gemeindelied¥0f steht unter www.direktorium.bistum-fulda.de ein Liedblatt zum Download bereit.¥p",
        "deceased": "2003 †¥tDr.°Anton°Thaler, Prof., Generalvikar,°St.°Gallen/Schweiz¥p2007 †¥t¥fP.°Rudolf°Maria°Koppmann°OMI¥0f,°Bischof°em., Hünfeld¥p",
        "deceased_more": "1929 †¥tWilhelm°Rhiel,°Direktor°i.R., Steinfeld°(Eifel)¥p1936 †¥tJohannes°Bierschenk, Dechant, Pfarrer°in°Neuendorf¥p2003 †¥tDr.°Anton°Thaler, Prof., Generalvikar,°St.°Gallen/Schweiz¥p2007 †¥t¥fP.°Rudolf°Maria°Koppmann°OMI¥0f,°Bischof°em., Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "25": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 12.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°220/²218f¥0w¥p",
        "notes": "",
        "deceased": "2009 †¥tNorbert°Schneider, Pfr.i.R., GR, Fulda¥p2011 †¥tAlbert°Seikel, Pfr.i.R., OStR°i.K.i.R., Msgr., GR, Freigericht¥-Horbach¥p",
        "deceased_more": "1987 †¥tJoseph°Hawellek°(Breslau), Pfr.i.R., Bad°Soden¥-Salmünster¥p2009 †¥tNorbert°Schneider, Pfr.i.R., GR, Fulda¥p2011 †¥tAlbert°Seikel, Pfr.i.R., OStR°i.K.i.R., Msgr., GR, Freigericht¥-Horbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "26": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 12.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Josefmaria Escrivá de Balaguer¥0f, Pr, ¥fGed¥0f°(dD)¥be¥w¥fMs¥0f:°HR°/°MBErg²°23°/°Com°Ht°5°– ¥fML°V°ᴺ680¥0f¥l¥vL:¥0v¥tGen°2¥v,4b¥_9.15¥0v¥t¥fML°VIII¥0f°232¥l¥voder¥0v¥tRöm°8¥v,14¥_17¥0v¥t351¥l¥vAPs:¥0v¥tPs°2¥v,7¥_8.9+11.12¥0v°(R:°Ps°117¥v,1a¥0v)¥t235¥l¥vREv+Ev:¥0v°Lk°5¥v,1¥_11¥0v¥t88¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°214/²213;°Gg+Sg°288f¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute ist der ¥fGedenktag der hl. Brüder Johannes und Paulus¥0f, die zwischen 301 und 303 in Rom das Martyrium erlitten haben. Sie gehören zu den seit alten Zeiten verehrten Heiligen, die im Römischen Messkanon genannt werden, deren Gedenktag heute aber nicht mehr im ARK verzeichnet ist. Durch die ¥fWahl des Hg°I¥0f kann ihr Gedächtnis weiter geehrt werden.¥p",
        "deceased": "",
        "deceased_more": "1938 †¥tDr.°Hermann°Joseph°Büttner, Dr.°phil., Pfarrer°in°Maberzell¥p1945 †¥tGeorg°Reymann, Pfarrer°in°Erfurt¥-Hochheim¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "27": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 12.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Heimerad¥0f, Pr, Einsiedler, ¥fGed¥0f (FD)¥bf¥w¥vL:¥0v¥t1°Kor°1¥v,26¥_31¥0v¥tML°V°545/ᴺ547¥l¥vAPs:¥0v¥tPs°16¥v,1¥_2+5.7¥_8.9+11¥0v°(R:°vgl.°¥v5a¥0v)¥t565/ᴺ570¥l¥vREv:¥0v¥tLk°14¥v,33¥0v¥t–––¥l¥vEv:¥0v¥tMt°11¥v,25¥_30¥0v¥t606/ᴺ611¥0w¥pw¥tOder ¥fhl. Hemma von Gurk¥0f, ¥fGed¥0f°(RK)¥pw¥tOder ¥fhl. Cyrill von Alexandrien¥0f, Bi, Kl, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°317,33;°Gg°348,1;°Sg°527,8¥0w¥p",
        "notes": "",
        "deceased": "2014 †¥tHubert°Wald, Pfr.i.R., GR, Fulda¥p",
        "deceased_more": "2014 †¥tHubert°Wald, Pfr.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "28": {
        "liturgy": "¥fFr¥0f¥t¥fHl. Irenäus¥0f, Bi, Märt, Kl, ¥fGed¥0f ¥pr¥t¥fMs vom Hl¥0f – Off°vom°Ged,°Ben°eig¥p",
        "notes": "¥fHinweis:¥0f ¥sPapst Franziskus hat am 21. Januar 2022 den ¥fhl.°Irenäus von Lyon¥0f zum ¥fKirchenlehrer mit dem Titel „Doctor unitatis“ („Lehrer der Einheit“)¥0f erklärt.¥p",
        "deceased": "2023 †¥tFranz¥-Karl°Heil, Pfr.i.R., Fulda¥-Horas¥p",
        "deceased_more": "1929 †¥tOskar°Haseneier, Pfarrer°in°Kassel,°St.°Maria¥p1942 †¥tJohannes°Mergler,°Diözesanpriester,°gefallen°in°Rußland¥p2023 †¥tFranz¥-Karl°Heil, Pfr.i.R., Fulda¥-Horas¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "¥fHinweise:¥0f¥p¥sAus pastoralen Gründen können in der ¥fVigilmesse vom Hochfest der hll. Petrus und Paulus¥0f auch die Perikopen der Tagesmesse genommen werden.¥p¥sZum morgigen Hochfest passt das ¥fLied GL°873, bes. Str.°3¥0f (auch nach der Melodie GL°280 singbar).¥p¥sFür den Gesang des ¥fHymnus aus dem Stundenbuch als Gemeindelied¥0f steht unter www.direktorium.bistum-fulda.de ein Liedblatt zum Download bereit.¥p¥s¥fDie Vorabendmesse zum 13. Sonntag im Jkr. kann morgen nicht gefeiert werden¥0f, da das Hochfest der hll. Apostel Petrus und Paulus in der Rangordnung der liturgischen Tage höher steht als die Sonntage im Jkr. (s.°o.°Kap.°I.B.1.°I.+II.). ¥fMorgige Abendmessen sind Messfeiern des Hochfestes.¥0f Dies bitte in den Gottesdienstordnungen so veröffentlichen.¥p",
        "vig_liturgy": "r¥t¥kabends:¥0k ggf. ¥fVigilmesse vom hl. Petrus und hl.°Paulus¥0f, Gl,°Cr, eig°Präf wie morgen, n.B.°Hg°I, FSS:°MB°556°– ¥f1.°Vp°vom°folg°H¥0f°–°¥f1.°Kp°vom°So¥0f¥p¥p"
      },
      "29": {
        "liturgy": "¥fSa¥0f¥t¥qhHl. Petrus und hl. Paulus¥0f, App, ¥fHochfest¥0f¥lTe Deum – Kl.°Hore: eig Ant,°ErgPs¥pr¥t¥fMs eig¥0f, Gl,°Cr, eig°Präf, n.B.°Hg°I, FSS:°MB°556°– 2.°Vp°vom°H°–°2.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥sZum morgigen Hochfest passt das ¥fLied GL°873, bes. Str.°3¥0f (auch nach der Melodie GL°280 singbar).¥p¥sFür den Gesang des ¥fHymnus aus dem Stundenbuch als Gemeindelied¥0f steht unter www.direktorium.bistum-fulda.de ein Liedblatt zum Download bereit.¥p¥s¥fDie Vorabendmesse zum 13. Sonntag im Jkr. kann morgen nicht gefeiert werden¥0f, da das Hochfest der hll. Apostel Petrus und Paulus in der Rangordnung der liturgischen Tage höher steht als die Sonntage im Jkr. (s.°o.°Kap.°I.B.1.°I.+II.). ¥fMorgige Abendmessen sind Messfeiern des Hochfestes.¥0f Dies bitte in den Gottesdienstordnungen so veröffentlichen.¥p",
        "deceased": "2010 †¥tRichard°Fischer, Pfr.i.R., GR, Fulda¥p2016 †¥tKlaus°Dickhut, Pfr.i.R., Inzell¥p",
        "deceased_more": "1954 †¥tAnton°Jendrzejczyk°(Breslau),°Strafanstaltspfarrer°in°Weimar¥p1981 †¥tKarl°Böhmer,°Dozent, Prälat,°Ehrendomherr,°Erfurt¥p1992 †¥tJohannes°Rützel, Pfr.i.R., Msgr., Jossgrund¥p2010 †¥tRichard°Fischer, Pfr.i.R., GR, Fulda¥p2016 †¥tKlaus°Dickhut, Pfr.i.R., Inzell¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "30": {
        "liturgy": "¥fSo¥0f¥a¥t¥f13. Sonntag im Jahreskreis¥0f¥lPsalt:°I.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweis:¥0f ¥sDie ¥fGedenktage der ersten hll. Märtyrer der Stadt Rom¥0f und ¥fdes hl. Otto¥0f entfallen in diesem Jahr.¥p",
        "deceased": "2004 †¥tHeinz°Famulla, Pfr.i.R., GR, Fulda¥-Lehnerz¥p",
        "deceased_more": "2004 †¥tHeinz°Famulla, Pfr.i.R., GR, Fulda¥-Lehnerz¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      }
    },
    "7": {
      "1": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 13.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°308,10;°Gg°348,2;°Sg°525,1¥0w¥p",
        "notes": "",
        "deceased": "2011 †¥tErnst°Watzlawik,°Diakon,°Hünfeld¥-Malges¥p2017 †¥tHans°Heinrich°Welschof,°Diakon,°Oberrodenbach¥p",
        "deceased_more": "1950 †¥tKarl°Wenzel, Pfr.i.R., Birkenfelde¥p1952 †¥tLeo°Schall°(Breslau),°Erzpriester, Pfr.i.R., GR, Dechant,°Horbach¥p1972 †¥tJohannes°Jordan°(Ermland), Pfarrer°in°Stolberg/Harz¥p1975 †¥tGeorg°Dirk, Pfr.i.R., GR, Heiligenstadt¥p1986 †¥tHubert°Wess, Pfr.i.R., GR, Wolfhagen¥p2011 †¥tErnst°Watzlawik,°Diakon,°Hünfeld¥-Malges¥p2017 †¥tHans°Heinrich°Welschof,°Diakon,°Oberrodenbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "2": {
        "liturgy": "¥fDi¥0f¥t¥qfMariä Heimsuchung¥0f, ¥fFest¥0f°(RK; GK: 31. Mai)¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pw¥t¥fMs eig¥0f, Gl, MarPräf II, FSS:°MB°554¥p",
        "notes": "",
        "deceased": "2001 †¥tP.°Capistran°Bavendiek°OFM,°Mühlen¥p",
        "deceased_more": "1944 †¥tAdam°Kalbhenn,°Benefiziat°i.R., Ershausen¥p2001 †¥tP.°Capistran°Bavendiek°OFM,°Mühlen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "3": {
        "liturgy": "¥fMi¥0f¥t¥qfHl. Thomas¥0f, Ap, ¥fFest¥0f¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pr¥t¥fMs eig¥0f, Gl, ApPräf, n.B.°Hg°I, FSS:°MB°558¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1934 †¥tFranz°Dunkelberg, Pfarrer°in°Kirchworbis¥p1969 †¥tJosef°Plescher°(Leitmeritz), Pfr.i.R., Leinefelde/Eichsfeld¥p1986 †¥tDr.°Adalbert°Hosenfeld, Pfr.i.R., Msgr., GR, Brehme¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "4": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 13.°Woche°im°Jahreskreis – ¥fPriesterdonnerstag¥0f¥pw¥tOder ¥fhl. Ulrich¥0f, Bi, ¥fGed¥0f°(RK)¥pw¥tOder ¥fhl. Elisabeth¥0f, Königin von Portugal, ¥fGed¥0f¥pw¥tOder ¥fMs um Priesterberufe¥0f ¥w(MB°1035f/²1057),¥lL°und°Ev vom°Tag oder aus°den°AuswL¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°295;°Gg+Sg°285¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Priesterdonnerstag (monatl. Gebetstag für geistliche Berufe):¥0f Die Votivmesse ist erlaubt. – Fürbitte(n) um Priesterberufungen. – Thema: „Was ihr für einen meiner geringsten Brüder getan habt, das habt ihr mir getan!“ (Mt°25¥v,40¥0v). Intention: Diakone.¥p",
        "deceased": "",
        "deceased_more": "1957 †¥tDr.°Eduard°Busse,°StR°i.R., Heiligenstadt¥p1973 †¥tHeinrich°Weidemann, GR, Pfarrer°in°Fulda,°Hl.°Geist¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "5": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 13.°Woche°im°Jahreskreis – ¥fHerz¥-Jesu¥-Freitag¥0f¥pw¥tOder ¥fhl. Antonius Maria Zaccaria¥0f, Pr, Ordgr, ¥fGed¥0f¥pw¥tOder ¥fVotivmesse vom heiligsten Herzen Jesu¥0f¥l¥w(MB°1100f/²1132f oder 257ff), Herz¥-Jesu¥-Präf,¥lL°und°Ev°vom°Tag oder aus°den°AuswL¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°284f¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum°Herz¥-Jesu¥-Fr:¥0f Die Votivmesse ist erlaubt.¥p",
        "deceased": "2009 †¥tKonrad°Graf, Pfr.i.R., GR, Wadern¥-Nunkirchen¥p2014 †¥tLudwig°Vogel,°Stadtpfr.i.R., Msgr., Ehrendomkapitular, Petersberg¥p2020 †¥tPeter°A.°Macht, Pfr.i.R., GR, Amöneburg¥-Mardorf¥p",
        "deceased_more": "2009 †¥tKonrad°Graf, Pfr.i.R., GR, Wadern¥-Nunkirchen¥p2014 †¥tLudwig°Vogel,°Stadtpfr.i.R., Msgr., Ehrendomkapitular, Petersberg¥p2020 †¥tPeter°A.°Macht, Pfr.i.R., GR, Amöneburg¥-Mardorf¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "6": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 13.°Woche°im°Jahreskreis – ¥fHerz¥-Mariä¥-Samstag¥0f¥pr¥tOder ¥fhl. Maria Goretti¥0f, Jgfr, Märt, ¥fGed¥0f¥pw¥tOder ¥fVotivmesse vom Unbefleckten Herzen Mariä¥0f, ¥wMBm°und°MLm°Nr.°28,°eig°Präf¥0w¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°162/²160¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Herz¥-Mariä¥-Sa:¥0f Die Votivmesse ist erlaubt.¥p",
        "deceased": "1995 †¥tP.°Franz°Senn°OFMCap,°Bad°Mergentheim¥p",
        "deceased_more": "1945 †¥tErnst°Wolf, Pfarrer°in°Margretenhaun¥p1955 †¥tJoseph°Heller,°Kpl.i.R., Flieden¥p1995 †¥tP.°Franz°Senn°OFMCap,°Bad°Mergentheim¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "7": {
        "liturgy": "¥fSo¥0f¥a¥t¥f14. Sonntag im Jahreskreis¥0f¥lPsalt:°II.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fLektionar zum StB II/6¥0f (14.–20. Woche i. Jkr.)¥rLektStB  II/6¥0r¥p¥p¥fHinweis:¥0f ¥sDer ¥fGedenktag der hll. Willibald und Wunibald¥0f entfällt in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1947 †¥tFranz°Otto, Pfr.i.R., Heiligenstadt¥p1956 †¥tKarl°Kramer, Pfr.i.R., Hüpstedt¥p1989 †¥tJosef°Kempf, Pfr.i.R., Lörrach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "8": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 14.°Woche°im°Jahreskreis¥pr¥tOder ¥fhll. Kilian¥0f, Bi, ¥fund°Gefährten¥0f, Glbb, Märtt, ¥fGed¥0f°(RK/FD)°– ¥w¥fMs¥0f:°MB°717°– ML°V°711/ᴺ727¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°227f¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1954 †¥tAndreas°Kaufmann, Pfarrer°in°Kreuzebra¥p1968 †¥tP.°Maurus°Hackmann°OFMCap, Pfarrer°in°Bebra¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "9": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 14.°Woche°im°Jahreskreis¥pr¥tOder ¥fhll. Augustinus Zhao Rong¥0f, Pr, ¥fund°Gefährten¥0f, Märtt, ¥fGed¥0f¥be¥w¥fMs¥0f: HR°/°MBkl°1240°/°MBErg²°9°/°Com°Märt°– ¥fFürbitten°für°China¥0f°– ¥fML°V°ᴺ730¥0f¥l¥vL:¥0v¥t1°Joh°5¥v,1¥_5¥0v¥tML°V°760¥l¥vAPs:¥0v¥tPs°126¥v,1¥_2b.2c¥_3.4¥_5.6¥0v°(R:°¥v5¥0v)¥t548¥l¥vREv:¥0v¥t2°Kor°1¥v,3b¥_4a¥0v¥t836¥v,3¥0v¥l¥vEv:¥0v¥tJoh°12¥v,24¥_26¥0v¥t708¥0w¥pr¥tOder ¥kim Dom zu Fulda:¥0k¥l¥fÜbertragung des hl. Bonifatius¥0f, ¥fGed¥0f°(FD)¥bf¥w¥vL:¥0v¥t1°Thess°2¥v,2b¥_8¥0v¥tML°V°618/ᴺ629¥l¥vAPs:¥0v¥tPs°96¥v,1¥_2.3+7.8+10¥0v°(R:°vgl.°¥v3a¥0v)¥t619/ᴺ630¥l¥vREv:¥0v¥tMt°28¥v,19a.20b¥0v¥t639/ᴺ655¥l¥vEv:¥0v¥tJoh°15¥v,14¥_16a.18¥_20¥0v¥t631/ᴺ646¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°314,25;°Gg+Sg°297f¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1949 †¥tOtto°Henkel, Pfarrer°in°Bieber¥p1958 †¥tHermann°Joseph°Fiege,°Kaplan°in°Eschwege¥p1959 †¥tAmbrosius°Kling, Pfr.i.R., Dietges¥p1961 †¥tNikolaus°Demme, Pfarrer°in°Niederorschel¥p1968 †¥tAugustin°Ackermann, Pfr.i.R., Hünfeld¥p1968 †¥tP.°Oswald°Krause°SDB,°Pfarrkurat°in°Hess.°Lichtenau¥p1972 †¥tErnst°Flessel°(Olmütz), GR, Pfarrer°in°Richelsdorf¥p1982 †¥tJohannes°Platte, Pfarrer°in°Gelnhausen¥-Höchst¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "10": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 14.°Woche°im°Jahreskreis¥pr¥tOder ¥fhl. Knud¥0f, König von Dänemark, Märt, ¥fhl.°Erich¥0f,°König°von°Schweden,°Märt, und ¥fhl.°Olaf¥0f,°König°von°Norwegen, ¥fGed¥0f°(RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°310,17;°Gg°348,3;°Sg°527,8¥0w¥p",
        "notes": "",
        "deceased": "1998 †¥tRoland°Fischer,°Msgr., Pfarrer°in°Hilders¥-Eckweisbach¥p",
        "deceased_more": "1921 †¥tFranz°Joseph°Rudolph, Pfarrer°in°Mackenzell¥p1957 †¥tHugo°Nagels, GR, Pfarrer°in°Erfurt,°St.°Nicolai¥p1979 †¥tPius°Burkardt,°Konviktsdirektor°i.R., Msgr., GR, Fulda¥p1984 †¥tOtto°Buchardt, Pfr.i.R., GR, Heiligenstadt¥p1993 †¥tFerdinand°Dallwig, Pfr.i.R., Msgr., GR, Dietershausen¥p1998 †¥tRoland°Fischer,°Msgr., Pfarrer°in°Hilders¥-Eckweisbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "11": {
        "liturgy": "¥fDo¥0f¥t¥qfHl. Benedikt von Nursia¥0f, Vater des abendländischen Mönchtums, Patron Europas, ¥fFest¥0f°(GK/RK)°– Off: Hy zur Lh wie zur Vp und BuM eig, sonst Com – Te°Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pw¥t¥fMs eig¥0f (MB°719 oder MBErg¹°9), Gl, ¥fFürbitten für Europa¥0f, Präf Ord oder Hll, FSS:°MB°560¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fZum heutigen Fest des hl. Benedikt¥0f ist in den älteren Ausgaben der liturgischen Bücher (MB und MBkl, ML°V, Schott-Messbuch für die Wochentage II, StB°II und Lektionare zum StB I/6 und II/6) ggf. die Bezeichnung „Patron Europas“ zu ergänzen und der Rang „Gedenktag“ durch „Fest“ zu ersetzen sowie in den Messbüchern vor dem Tagesgebet „Gloria“ und in den Lektionaren zum StB nach dem Responsorium zur 2.°Lesung „Te°Deum“ einzufügen.¥p¥sZum heutigen Fest des hl. Benedikt kann der ¥fHymnus zur Vesper¥0f (StB°III°828) nach den Melodien der Lieder GL°81 oder GL°484 als Gemeindelied gesungen werden (Liedblatt zum Download auf www.direktorium.bistum-fulda.de).¥p",
        "deceased": "",
        "deceased_more": "1934 †¥tDr.°Karl°Kirchberg, Pfarrer°in°Büttstedt¥p1981 †¥tDr.°Stephan°Bartylla,°StR°i.K.i.R., Amöneburg¥p1982 †¥tJosef°Krafczyk°(Breslau), Pfarrer°in°Stadtilm¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "12": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 14.°Woche°im°Jahreskreis¥pw¥tOder ¥fMs von den hll. Louis und Marie Zelie¥0f (Ludwig und Cäcilia) ¥fMartin¥0f, Eheleute, Eltern°der°hl.°Theresia von Lisieux¥be¥w¥fMs¥0f: Com MFr°5, Präf°von°den°Hll¥l¥vL:¥0v¥tKol°3¥v,12¥_17¥0v¥tML°V°719/ᴺ736¥l¥vAPs:¥0v¥tPs°103¥v,1¥_2.8+11.17¥_18a¥0v°(R:°¥v17a¥0v)¥tvgl.°102/ᴺ102¥l¥vREv:¥0v¥tJoh°15¥v,9b.5b¥0v¥t720/ᴺ737¥l¥vEv:¥0v¥tJoh°15¥v,9¥_17¥0v¥t724/ᴺ741¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°220/²218f¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1942 †¥tGustav°Vogt, Pfarrer°in°Deuna, gestorben°in°Dachau¥p1992 †¥tAdolf°Fleischmann, Pfr.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "13": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 14.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Heinrich II.¥0f, Kaiser, ¥fund hl. Kunigunde¥0f, Kaiserin, ¥fGed¥0f°(RK/GK/FD)¥l¥w¥fMs¥0f:°MB°720°– ML°V°719/ᴺ736¥0w¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°316,30;°Gg°349,5;°Sg°527,9¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "1995 †¥tWolfgang°Trabandt°(Berlin), Pfr.i.R., Berlin¥p",
        "deceased_more": "1964 †¥tKarl°Troche, Pfarrer°in°Kleinsassen¥p1995 †¥tWolfgang°Trabandt°(Berlin), Pfr.i.R., Berlin¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "14": {
        "liturgy": "¥fSo¥0f¥a¥t¥f15. Sonntag im Jahreskreis¥0f¥lPsalt:°III.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweis:¥0f ¥sDer ¥fGed des hl. Kamillus von Lellis¥0f entfällt in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "15": {
        "liturgy": "¥fMo¥0f¥t¥fHl. Bonaventura¥0f, Ord, Bi, Kl, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "2021 †¥tDr.°Elmar°Fastenrath°(Köln), Prof.°em., Dr.°theol.°habil., Msgr., Leverkusen¥p",
        "deceased_more": "1937 †¥tWilhelm°Müller, Pfarrer°in°Frankfurt¥-Fechenheim¥p2021 †¥tDr.°Elmar°Fastenrath°(Köln), Prof.°em., Dr.°theol.°habil., Msgr., Leverkusen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "16": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 15.°Woche°im°Jahreskreis¥pw¥tOder ¥fUnsere Liebe Frau auf dem Berge Karmel¥0f, ¥fGed¥0f – BuM°eig¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°132/²130¥0w¥p",
        "notes": "",
        "deceased": "2019 †¥tHeribert°Bräscher, Pfr.i.R., GR, Neuhof¥p",
        "deceased_more": "1921 †¥tAugustin°Krah, GR, Dechant, Pfarrer°in°Amöneburg¥p1931 †¥tKajetan°Bott, Dechant, Pfarrer°in°Johannesberg¥p1959 †¥tCanisius°Gellings,°Pfarrkurat°in°Ferna/Eichsfeld¥p1974 †¥tNikolaus°Witzel, Pfr.i.R., GR, Soisdorf¥p2019 †¥tHeribert°Bräscher, Pfr.i.R., GR, Neuhof¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "17": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 15.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°286¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1958 †¥tDr.°Ludwig°Betz, Dr.°phil., Pfarrer°in°Eckweisbach¥p1987 †¥tJosef°Schydlo, GR, Pfarrer°in°Fulda¥-Edelzell¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "18": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 15.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°316,30;°Gg°350,9;°Sg°529,14¥0w¥p",
        "notes": "",
        "deceased": "1994 †¥tFriedrich Driemer°(Königgrätz), Pfr.i.R., GR, Bad°Langensalza¥p2018 †¥tUlrich°Schäfer, Pfarrer°in°Somborn¥p",
        "deceased_more": "1986 †¥tHeinrich°Siebert, Pfr.i.R., Fulda¥p1992 †¥tP.°Emmerich°Reith°OFM,°Sigmaringen¥p1994 †¥tFriedrich Driemer°(Königgrätz), Pfr.i.R., GR, Bad°Langensalza¥p2018 †¥tUlrich°Schäfer, Pfarrer°in°Somborn¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "19": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 15.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg+Gg°247;°Sg°290¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute ist der 55. Jahrestag der Priesterweihe von Bischof em. Heinz Josef Algermissen.¥p",
        "deceased": "",
        "deceased_more": "1943 †¥tDr.°Joseph°Lammeyer, Prälat,°Universitätsprofessor°in°Bonn¥p1965 †¥tP.°Hermann°Vell°CSsR, Pfarrer°in°Jena¥-Land¥p1984 †¥tJosef°Wistuba°(Breslau), Pfr.i.R., Künzell¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "20": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 15.°Woche°im°Jahreskreis¥pr¥tOder ¥fhl. Margareta¥0f, Jgfr, Märt, ¥fGed¥0f°(RK)¥pr¥tOder ¥fhl. Apollinaris¥0f, Bi, Märt, ¥fGed¥0f¥be¥w¥fMs¥0f: HR°/°MBkl°1240f°/°MBErg²°10°/ Com°Märt°oder°Ht°– ¥fML°V°ᴺ749¥0f¥l¥vL:¥0v¥tEz°34¥v,11¥_16¥0v¥tML°V°633¥l¥vAPs:¥0v¥tPs°23¥v,1¥_3.4.5.6¥0v°(R:°¥v1¥0v)¥t634¥l¥vREv:¥0v¥tJoh°10¥v,14¥0v¥t631¥l¥vEv:¥0v¥tJoh°10¥v,11¥_16¥0v¥t632¥0w¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°288f¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1926 †¥tDDr.°Engelbert°Koch, Prof., Dr.°theol.°et°phil., Regens,°Dompräbendat,°Fulda¥p1957 †¥tKarl°Wachtel, Pfarrer°in°Geismar¥p1961 †¥tOtto°Breitenstein°(Paderborn),°Schulrat°i.R., Heiligenstadt¥p1967 †¥tWilhelm°Quell, Pfr.i.R., Hilders¥p1969 †¥tPhilipp°Fricke, Pfr.i.R., Archivar°in°Heiligenstadt¥p1970 †¥tAdolf°Fischer, GR, Pfarrer°in°Kleinbartloff/Eichsfeld¥p1979 †¥tAloys°Herget°(Gurk-Klagenfurt), Pfr.i.R., Lahrbach¥p1988 †¥tKarl°Kiowski°(Breslau), Pfr.i.R., Königsee/Thür.°Wald¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "21": {
        "liturgy": "¥fSo¥0f¥a¥t¥f16. Sonntag im Jahreskreis¥0f¥lPsalt:°IV.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fHeute wird hingewiesen auf den Portiunkulaablass¥0f, einen vollkommenen Ablass (s.°o.°Kap.°I.C.10.), ¥fder am 2. August oder am vorhergehenden oder am darauffolgenden Sonntag, jeweils vom Mittag des Vortages an, gewonnen werden kann¥0f. Er kann nur gewonnen werden in allen Pfarrkirchen und Pfarrkuratiekirchen sowie in den Kirchen und Kapellen, die dafür ein besonderes Indult besitzen, und in den Ordenskirchen der franziskanischen Ordensfamilien. – ¥p¥fZur Gewinnung des Ablasses gehören:¥0f ¥pa) ¥fdie allgemeinen Bedingungen¥0f: Beichte mit entschlossener Abkehr von jeder Sünde, Kommunionempfang und Gebet nach der Meinung des Hl. Vaters (z.B. Vaterunser und Glaubensbekenntnis oder ein anderes Gebet nach freier Wahl);¥pb) ¥fals besondere Bedingung¥0f: ein Kirchenbesuch mit Gebet (Vaterunser und Glaubensbekenntnis). ¥pDieser Ablass kann auch den Verstorbenen zugewendet werden. Er kann aber nur einmal an diesem Ablasstag gewonnen werden.¥p¥sDer ¥fGedenktag des hl. Laurentius von Brindisi¥0f entfällt in diesem Jahr.¥p",
        "deceased": "2022 †¥tGerhard°Willeke, Pfr.i.R., Fulda¥-Horas¥p",
        "deceased_more": "1990 †¥tP. Dr.°Kurt°Michel°SJ, Dr.°phil., Kaplan°in°Marburg¥p1991 †¥tErich°Johne, Pfr.i.R., Weißensee°b.°Sömmerda¥p2022 †¥tGerhard°Willeke, Pfr.i.R., Fulda¥-Horas¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "22": {
        "liturgy": "¥fMo¥0f¥t¥qfHl. Maria Magdalena¥0f, ¥fFest¥0f¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pw¥t¥fMs eig¥0f, Gl, ¥feig°Präf¥0f, FSS:°MB°560°– ¥wᴰ HR⁴ᶠ¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sMit Dekret der KGS vom 3. Juni 2016 (Prot. N. 257/16) hat Papst Franziskus ¥fden bisherigen gebotenen Gedenktag der hl. Maria Magdalena zum Fest erhoben und damit das liturgische Gedächtnis dieser Heiligen dem liturgischen Rang der Apostelfeste¥0f (ausgenommen das Hochfest Peter und Paul) ¥fgleichgestellt aufgrund ihrer Eigenschaft als „Apostelin der Apostel“¥0f. In den liturgischen Büchern (MB°und MBkl, ML°V, Schott-Messbuch für die Wochentage II, StB°III und Lektionare zum StB I/6 und II/6) ist daher zur Feier des Festes der hl. Maria Magdalena ¥fdie Bezeichnung „Apostelin der Apostel“ zu ergänzen und der Rang „Gedenktag“ durch „Fest“ zu ersetzen¥0f, in den Messbüchern ¥f„Gloria“¥0f und in den Lektionaren zum StB nach dem Responsorium zur 2. Lesung ¥f„Te°Deum“¥0f einzufügen.¥p",
        "deceased": "",
        "deceased_more": "1931 †¥tJoseph°Erb, Pfarrer°in°Großkrotzenburg¥p1950 †¥tChristian°Kauth, Pfarrer°in°Poppenhausen¥p1963 †¥tKonrad°Wieber, Pfarrer°in°Oberndorf/Krs.°Gelnhausen¥p1991 †¥tWilhelm°Zimmerling, Pfr.i.R., GR, Fritzlar¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "23": {
        "liturgy": "¥fDi¥0f¥t¥qfHl. Birgitta von Schweden¥0f, Ordgr, Patronin Europas, ¥fFest¥0f (GK/RK)¥lOff: Or°eig, sonst°Com°Ord (StB°III°1244ff°bzw.°1221ff) – ¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pw¥t¥fMs eig¥0f (Com MFr 7+8 oder 11+12), Gl, ¥fFürbitten für Europa¥0f, Präf Ord oder Hll, FSS:°MB°560¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum heutigen Fest der hl. Birgitta von Schweden¥0f ist in den älteren Ausgaben der liturgischen Bücher (MB und MBkl, ML°V, Schott-Messbuch für die Wochentage II, StB°II und Lektionare zum StB I/6 und II/6) ggf. die Bezeichnung „Patronin Europas“ zu ergänzen und der Rang „Gedenktag“ durch „Fest“ zu ersetzen sowie in den Messbüchern vor dem Tagesgebet „Gloria“ und in den Lektionaren zum StB nach dem Responsorium zur 2.°Lesung „Te°Deum“ einzufügen.¥p",
        "deceased": "2000 †¥t¥fDDr.°Johannes°Dyba¥0f, Dr.°iur.°utr., Erzbischof, Bischof°von°Fulda°(1983¥_2000)¥p2007 †¥tHubert°Dudek°(Breslau/Fulda), Pfr.i.R., OStR°i.R., Alzenau¥-Hörstein¥p2023 †¥tHerbert°Schrimpf, Pfarrer°in°Hünfeld¥-Michelsrombach¥p",
        "deceased_more": "1964 †¥tKarl°Dietz,°Rektor°i.R., Amöneburg¥p1973 †¥tPaul°Marx°(Breslau),°Msgr., GR, Kanzleidirektor°in°Fulda¥p2000 †¥t¥fDDr.°Johannes°Dyba¥0f, Dr.°iur.°utr., Erzbischof, Bischof°von°Fulda°(1983¥_2000)¥p2007 †¥tHubert°Dudek°(Breslau/Fulda), Pfr.i.R., OStR°i.R., Alzenau¥-Hörstein¥p2023 †¥tHerbert°Schrimpf, Pfarrer°in°Hünfeld¥-Michelsrombach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "24": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 16.°Woche°im°Jahreskreis¥pr¥tOder ¥fhl. Christophorus¥0f, Märt, ¥fGed¥0f°(RK)¥pw¥tOder ¥fhl. Scharbel (Josef) Mahluf¥0f, Ordpr, ¥fGed¥0f¥be¥w¥fMs¥0f: HR°/°MBkl°1241°/°MBErg²°10°/°Com°MFr°7+8°– ¥fML°V°ᴺ765¥0f¥l¥vL:¥0v¥tSir°3¥v,17¥_25°(19¥_26)¥0v¥tML°V°567¥l¥vAPs:¥0v¥tPs°15¥v,2¥_3.4.5¥0v°(R:°¥v1b¥0v)¥t579¥l¥vREv+Ev:¥0v°Mt°19¥v,27¥_29¥0v¥t563f¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°298f¥0w¥p",
        "notes": "",
        "deceased": "1996 †¥tErnst°Göller, Pfr.i.R., Msgr., GR, Fulda¥p",
        "deceased_more": "1996 †¥tErnst°Göller, Pfr.i.R., Msgr., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "25": {
        "liturgy": "¥fDo¥0f¥t¥qfHl. Jakobus¥0f, Ap, ¥fFest¥0f¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pr¥t¥fMs eig¥0f, Gl, ApPräf, n.B.°Hg°I, FSS:°MB°558¥p",
        "notes": "",
        "deceased": "2010 †¥tHeribert°Sauerbier, Pfr.i.R., GR, Herleshausen¥p",
        "deceased_more": "1937 †¥tAugust°Hornemann, Pfarrer°in°Hildebrandshausen¥p1963 †¥tP.°Ägidius°Keuchen°SJ,°Rektor,°Hospital°z.°Hl.°Geist°in°Heiligenstadt¥p1971 †¥tWilli°Metzler, GR, Pfarrer°in°Dingelstädt¥p2010 †¥tHeribert°Sauerbier, Pfr.i.R., GR, Herleshausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "26": {
        "liturgy": "¥fFr¥0f¥t¥fHl. Joachim und hl. Anna¥0f, Eltern°der°Gottesmutter°Maria, ¥fGed¥0f ¥pw¥t¥fMs von den Hll¥0f – Off°vom°Ged,°LuV eig¥p",
        "notes": "¥fHinweis:¥0f ¥sZum Gedenktag der hll. Joachim und Anna vgl. den Hinweis zum „Welttag der Senioren“ vor dem 28.°Juli.¥p",
        "deceased": "",
        "deceased_more": "1953 †¥tStanislaus°Janowski°(Breslau),°Erzpriester°i.R., Gotha¥p1974 †¥tJoseph°Rimpler°(Breslau), Pfarrer°in°Bad°Sachsa¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "27": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 16.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°309,13;°Gg°351,10;°Sg°528,10¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1940 †¥tLudwig°Roth,°Kuratus°i.R., Dietges¥p1949 †¥tAdolf°Malkmus, Pfarrer°in°Volkmarsen¥p1956 †¥tArthur°Ober°(Breslau), Pfarrer°in°Gotha,°Christ¥-König¥p1983 †¥tAlois°Jungbluth°(Danzig), Pfr.i.R., Wegberg¥p1991 †¥tRichard°Barthelmes, Pfr.i.R., GR, Steinbach/Rhön¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "28": {
        "liturgy": "¥fSo¥0f¥a¥t¥f17. Sonntag im Jahreskreis¥0f – ¥fWelttag°der°Großeltern°und°Senioren¥0f¥lPsalt:°I.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p¥p¥t¥kNur in der Stadt Fulda:¥0k¥pr¥t¥kabends:¥0k ggf.°¥fVorabendmesse°zum°H¥0f – ¥l¥f1.°Vp°vom°folg°H¥0f°(FD,°Com°Märtt, eig°Or) – ¥f1.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute wird zum 4. Mal der ¥f„Welttag der Großeltern und Senioren“¥0f begangen. Papst Franziskus hat ihn am 31. Januar 2021 ausgerufen und – in zeitliche Nähe zum Gedenktag der hll. Joachim und Anna, der Großeltern Jesu – auf den 4. Sonntag im Juli gelegt. ¥rIn seiner Angelus-Ansprache am 31. Januar 2021 sagte er:  „Der Heilige Geist weckt auch heute noch in den alten Menschen Gedanken und Worte der Weisheit: Ihre Stimme ist kostbar, weil sie das Lob Gottes singt und die Wurzeln der Völker bewahrt. Sie erinnern uns daran, dass das Alter ein Geschenk ist und dass die Großeltern das Bindeglied zwischen den Generationen sind, um die Lebens- und Glaubenserfahrung an die Jugend weiterzugeben. ... Es ist wichtig, dass sich die Großeltern mit den Enkeln treffen und die Enkel mit den Großeltern, denn – wie der Prophet Joël sagt – die Großeltern werden vor den Enkeln träumen, Illusionen [große Wünsche] haben, und die jungen Leute, die von ihren Großeltern gestärkt werden, sie werden vorwärts gehen, sie werden prophezeien.“ – ¥0rZur Feier des Welttages mögen das jährliche Leitwort und veröffentlichte Materialien (Vatikan, DBK) berücksichtigt werden.¥p¥sAm heutigen Sonntag kann vom Mittag des Vortages an der ¥fPortiunkulaablass¥0f gewonnen werden, auch am 2. August oder dem darauffolgenden Sonntag vom Mittag des Vortages an (vgl. Hinweis vor dem 21.°Juli).¥p",
        "deceased": "",
        "deceased_more": "1967 †¥tJosef°Knobloch, Pfr.i.R., Andernach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "29": {
        "liturgy": "¥fMo¥0f¥t¥kA. Außerhalb der Stadt Fulda:¥0k¥pw¥t¥fhll. Marta, Maria und Lazarus von Betanien¥0f, ¥fGed¥0f°– BuM°eig¥be¥w¥fMs¥0f: HR⁵°/°Com°MFr°1+4+5, Präf°Hll°I°oder°II, Eröffnungs- und Kommunionvers wie bisher am 29.°Juli°– ¥fL°und°Ev¥0f wie bisher am 29.°Juli (ML°V°749/ᴺ773), ¥feig°Ev¥0f¥0w¥pr¥tOder ¥fhll. Simplicius, Faustinus und Beatrix¥0f, Märtt, ¥fGed¥0f°(FD)¥bf¥w¥fMs¥0f: FDM 35ff – ¥fL°und°Ev¥0f:°FDL°18ff¥0w¥pw/r¥t¥fOff und Ms¥0f von einem der Ged¥p¥l¥kB. In allen Kirchen und Gemeinden der°Stadt°Fulda:¥0k¥l¥fHochfest der hll. Simplicius, Faustinus und Beatrix¥0f, Märtt, Stadtpatrone (FD)¥l¥fOff¥0f Com Märtt, eig 2. L, Resp und Or, Te°Deum – Kl.°Hore:°Ant°aus°dem°Com,°ErgPs¥pr        ᴰ¥t¥fMs eig¥0f ¥w(FDM°35¥_37,°FDL°18¥_21)¥0w, Gl,°Cr, ¥fFürbitten für Fulda¥0f, Präf°Hll°oder°Märtt, FSS:°MB°560 – ¥f2.°Vp°vom°H¥0f°–°¥f2.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥sIn allen Kirchen und Gemeinden der Stadt Fulda wird heute das Hochfest der hll. Stadtpatrone Simplicius, Faustinus und Beatrix gefeiert. Besondere Fürbitten in den Hochfestmessen der Gemeinden und Kirchen Fuldas für alle, die in Fulda leben, arbeiten und sich aufhalten.¥p¥sNutzer der Stundenbuch-App des DLI finden die vollständigen ¥fTexte für das Stundengebet zur heutigen Eigenfeier des Diözesankalenders als Hochfest in der Datei FD-Stundengebet.PDF¥0f (s.°o.°S.°87, Nr.°3).¥p¥sHeute kann außerhalb Fuldas der neue ¥ferweiterte Gedenktag der hll. Marta, Maria und Lazarus¥0f gefeiert werden. Er wurde von Papst Franziskus am 26. Januar 2021 in den Römischen Generalkalender eingefügt. „Im Haus von Bethanien erlebte der Herr Jesus den Familiensinn und die Freundschaft von Marta, Maria und Lazarus; deshalb heißt es im Johannesevangelium, dass er sie liebte. Marta nahm ihn in Gastfreundschaft großzügig auf, Maria hörte aufmerksam auf sein Wort, und Lazarus stieg auf den Befehl dessen, der den Tod erniedrigt hatte, sogleich aus dem Grab. Die Unsicherheit, die in der Überlieferung der lateinischen Kirche bezüglich der Identität Marias – der Magdalena, der Christus nach seiner Auferstehung erschien, der Schwester der Marta und der Sünderin, deren Sünden der Herr vergeben hatte – bestand und die den Ausschlag dafür gab, dass allein Marta am 29. Juli im Römischen Kalender verehrt wird, ist in neueren Studien und Zeiten gelöst worden, wie das erneuerte Römische Martyrologium bezeugt, das an diesem Tag auch Marias und Lazarus’ gedenkt. Auch in einigen partikularen Kalendern werden die drei Geschwister an diesem Tag gefeiert. In Anbetracht des wichtigen Zeugnisses für das Evangelium, das sie gaben, indem sie den Herrn Jesus in ihrem Haus aufnahmen, ihm aufmerksam zuhörten und glaubten, dass er die Auferstehung und das Leben ist, hat Papst Franziskus deshalb auf Vorschlag dieses Dikasteriums (Kongregation für den Gottesdienst und die Sakramentenordnung) angeordnet, dass der Gedenktag der Heiligen Marta, Maria und Lazarus am 29. Juli in den Römischen Generalkalender aufgenommen wird.“¥p",
        "deceased": "",
        "deceased_more": "1954 †¥tHeinrich°Herrmann°(Leitmeritz),°Religionslehrer°i.R., Konsistorialrat,°Erfurt¥p1974 †¥tDr.°Walter°Loos°(Leitmeritz), Pfr.i.R., Walschleben¥p1986 †¥tNikolaus°Bauer, Pfarrer°in°Wächtersbach¥p1991 †¥tDr.°Benno°Löbmann°(Meißen), Prof.°em., Dr.°iur.°can., Prälat,°Augsburg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "30": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 17.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Petrus Chrysologus¥0f, Bi, Kl, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°277f¥0w¥p",
        "notes": "",
        "deceased": "1994 †¥tAdalbert°Nix, Pfr.i.R., GR, Hilders¥p1995 †¥tJosef°Schaub, Pfr.i.R., GR, Münster°(Hessen)¥p",
        "deceased_more": "1931 †¥tAlfred°Rathmann, Pfarrer°in°Melchendorf°b.°Erfurt¥p1966 †¥tPaul°Brandstetter, Dechant, Pfarrer°in°Kassel,°St.°Familia¥p1970 †¥tJakob°Wald, Pfr.i.R., GR, Bad°Soden¥-Salmünster¥p1972 †¥tAnton°Meilinger, Pfr.i.R., GR, Zella/Rhön¥p1986 †¥tDr.°Konrad°Gärtner, Dr.°phil., Pfr.i.R., Fulda¥p1994 †¥tAdalbert°Nix, Pfr.i.R., GR, Hilders¥p1995 †¥tJosef°Schaub, Pfr.i.R., GR, Münster°(Hessen)¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "31": {
        "liturgy": "¥fMi¥0f¥t¥fHl. Ignatius von Loyola¥0f, Pr, Ordgr, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged,°BuM°eig¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1951 †¥tMartin°Böhne,°Pfarrkurat°in°Müs¥p1952 †¥tDr.°Aloys°Kirchner,°Präfekt°des°Bischöfl.°Knabensminars°in°Heiligenstadt¥p1977 †¥tKarl°Kirchberg, Pfr.i.R., GR, Dingelstädt¥p1991 †¥tP.°Wilhelm°Michel°OMI,°Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      }
    },
    "8": {
      "1": {
        "liturgy": "¥fDo¥0f¥t¥fHl. Alfons Maria von Liguori¥0f, Bi, Ordgr, Kl, ¥fGed¥0f – ¥fPriesterdonnerstag¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged¥pw¥tOder ggf.°¥fMs um Priesterberufe¥0f ¥w(MB°1035f/²1057),¥lL°und°Ev vom°Tag oder aus°den°AuswL¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Priesterdonnerstag (monatl. Gebetstag für geistliche Berufe):¥0f Die Votivmesse ist nur bedingt erlaubt (s.°o.°Kap.°III.D.3.). – Fürbitte(n) um Priesterberufungen. – Thema: „Ihr seid das Licht der Welt“ (Mt°5¥v,13¥0v). Intention: Neue geistliche Gemeinschaften.¥p",
        "deceased": "2016 †¥tWalter°Götz, Pfr.i.R., GR, Penzberg¥p",
        "deceased_more": "1957 †¥tPeter°Ernst, Pfr.i.R., Fulda¥p1961 †¥tAmand°Simon, Pfr.i.R., Neuses¥p1962 †¥tWilhelm°Coerdt°(Paderborn),°StR°i.R., GR, Fiddemühle°üb.°Kirchhain¥p1980 †¥tAlbrecht°Hellbach, Pfr.i.R., Körle¥p2016 †¥tWalter°Götz, Pfr.i.R., GR, Penzberg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "2": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 17.°Woche°im°Jahreskreis – ¥fHerz¥-Jesu¥-Freitag¥0f¥pw¥tOder ¥fhl. Eusebius¥0f, Bi, ¥fGed¥0f ¥pw¥tOder ¥fhl. Petrus Julianus Eymard¥0f, Pr, Ordgr, ¥fGed¥0f¥be¥w¥fMs¥0f: HR°/°MBkl°1242°/°MBErg²°11°/ Com°Ord°oder°Ht°– ¥fML°V°ᴺ787¥0f¥l¥vL:¥0v¥tApg°4¥v,32¥_35¥0v¥tML°V°871¥l¥vAPs:¥0v¥tPs°34¥v,2¥_‍3.4¥_‍5.6¥_7.8¥_9.10¥_11¥0v°(R:°vgl.°¥v2a¥0v°od.°¥v9a¥0v)¥t563¥l¥vREv+Ev:¥0v°Joh°15¥v,1¥_8¥0v¥t565f¥0w¥pw¥tOder ¥fVotivmesse vom heiligsten Herzen Jesu¥0f¥l¥w(MB°1100f/²1132f oder 257ff), Herz¥-Jesu¥-Präf,¥lL°und°Ev°vom°Tag oder aus°den°AuswL¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°307,7;°Gg°348,3;°Sg°528,10¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum°Herz¥-Jesu¥-Fr:¥0f Die Votivmesse ist erlaubt.¥p",
        "deceased": "2002 †¥tJosef°Nüdling, Pfr.i.R., GR, Hilders¥p",
        "deceased_more": "1936 †¥tDamian°Lauer, Pfarrer°in°Mardorf¥p1951 †¥tPeter°Kräuter, Pfarrer°in°Simmershausen¥p1952 †¥tRudolf°Bergmann°(Leitmeritz), Pfr.i.R., Erzdechant,°Kirchgandern¥p1975 †¥tDr.°Franz°Gypkens,°Frankfurt°a.°M.¥p1981 †¥tWilhelm°Dominka, Pfr.i.R., GR, Kirchworbis¥p1992 †¥tOtto°Boden, Pfr.i.R., Msgr., GR, Gelnhausen¥p2002 †¥tJosef°Nüdling, Pfr.i.R., GR, Hilders¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "3": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 17.°Woche°im°Jahreskreis – ¥fHerz¥-Mariä¥-Samstag¥0f¥pw¥tOder ¥fVotivmesse vom Unbefleckten Herzen Mariä¥0f, ¥wMBm°und°MLm°Nr.°28,°eig°Präf¥0w¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°313,22;°Gg°350,9;°Sg°527,7¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Herz¥-Mariä¥-Sa:¥0f Die Votivmesse ist erlaubt.¥p",
        "deceased": "2000 †¥tP.°Odilo°Thomas°Kostka°SSCC,°Schlüchtern¥-Wallroth¥p",
        "deceased_more": "1932 †¥tKarl°Poppe,°Propst,°Ehrendomkapitular,°Bischöfl.°Kommissarius°in°Heiligenstadt¥p1946 †¥tJoseph°Scholl, Pfarrer°in°Hosenfeld¥p1956 †¥tAloys°Oberthür, Pfr.i.R., Heiligenstadt¥p2000 †¥tP.°Odilo°Thomas°Kostka°SSCC,°Schlüchtern¥-Wallroth¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "4": {
        "liturgy": "¥fSo¥0f¥a¥t¥f18. Sonntag im Jahreskreis¥0f¥lPsalt:°II.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fOffizium: LitHor: Band IV¥0f¥p¥p¥fHinweis:¥0f ¥sDer ¥fGedenktag des hl. Johannes Maria Vianney¥0f entfällt in diesem Jahr.¥p",
        "deceased": "2016 †¥tPhilipp°Heim, Pfr.i.R., Msgr., GR, Kassel¥p",
        "deceased_more": "1947 †¥tHugo°Wehner, Pfarrer°in°Kranlucken¥p1948 †¥tFranz°Heer, Pfarrer°in°Büttstedt¥p1951 †¥tAnton°Jonczyk°(Breslau), Pfarrer°in°Wiehe/Unstrut¥p1960 †¥tJohannes°Steinwachs, Pfr.i.R., Heiligenstadt¥p2016 †¥tPhilipp°Heim, Pfr.i.R., Msgr., GR, Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "5": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 18.°Woche°im°Jahreskreis¥pw¥tOder ¥fWeihetag der Basilika S. Maria Maggiore in°Rom¥0f, ¥fGed¥0f – BuM°eig – Ms:°Com°Maria,°MarPräf¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°311,19;°Gg°120/²118;°Sg°215/²213¥0w¥l¥l¥kIm Dom zu Fulda:¥0k ¥pw¥t¥kabends:¥0k ggf.°¥fVorabendmesse°vom°H¥0f – ¥f1.°Vp°vom°folg°H¥0f°–°¥f1.°Kp°vom°So¥0f¥p",
        "notes": "Perikopen an den Wochentagen: ¥fML VI, Reihe II¥0f¥p",
        "deceased": "",
        "deceased_more": "1976 †¥tUmberto°Pascolini,°Italienerseelsorger°in°Kassel¥p1977 †¥tErnst°Maria°Franz°Gumbel,°Msgr., GR, Bistumsarchivar°in°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "6": {
        "liturgy": "¥fDi¥0f¥t¥qfVerklärung des Herrn¥0f, ¥fFest¥0f¥l(¥kim Dom zu Fulda:¥0k ¥fHochfest¥0f)¥lTe°Deum – Kl.°Hore: eig Ant,°Ps°vom°Wt¥pw¥t¥fMs eig¥0f, Gl, eig°Präf, FSS:°MB°548/I¥p",
        "notes": "¥fHinweise:¥0f¥p¥sDas heutige Fest der Verklärung des Herrn wird ¥fim Dom zu Fulda als Titularfest im Rang eines Hochfestes¥0f begangen: Kl.°Hore:°eig°Ant,°ErgPs – Ms°mit°Gl°und°Cr – 2.°Kp°vom°So.¥p¥sZum heutigen Fest bzw. Hochfest passen besonders die Lieder GL°363 (auch nach der Melodie von GL°375 singbar) und GL°368¥v,5+6¥0v (auch nach der Melodie von GL°329 singbar).¥p",
        "deceased": "",
        "deceased_more": "1936 †¥tOtto°Amthor,°Kaplan°in°Hofaschenbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "7": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 18.°Woche°im°Jahreskreis¥pr¥tOder ¥fhll. Xystus II.¥0f, Pp, ¥fund°Gefährten¥0f, Märtt, ¥fGed¥0f°– n.B.°Hg°I¥pw¥tOder ¥fhl. Kajetan¥0f, Pr, Ordgr, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°272,3f¥0w¥p",
        "notes": "",
        "deceased": "2003 †¥tErnst°Eduard°Storch, Pfr.i.R., GR, Ehrenberg¥-Reulbach¥p2017 †¥tP.°Heinrich°Rentmeister°SDB, GR, Köln¥-Mühlheim¥r? seit 1.9.09¥0r¥p",
        "deceased_more": "1984 †¥tJosef°Johannes°Fischer, GR, Pfarrer°in°Kreuzebra¥p2003 †¥tErnst°Eduard°Storch, Pfr.i.R., GR, Ehrenberg¥-Reulbach¥p2017 †¥tP.°Heinrich°Rentmeister°SDB, GR, Köln¥-Mühlheim¥r? seit 1.9.09¥0r¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "8": {
        "liturgy": "¥fDo¥0f¥t¥fHl. Dominikus¥0f, Pr, Ordgr, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "9": {
        "liturgy": "¥fFr¥0f¥t¥qfHl. Theresia Benedicta vom Kreuz¥0f ¥f(Edith Stein)¥0f, Jgfr, Märt, ¥fPatronin Europas¥0f, ¥fFest¥0f°(RK/GK)¥lOff: StB°III (²2010), S.°1368, oder:°Ergänzungsheft°1995,°S.°19¥_28, oder:°Com°Märt°(S.°1110ff) oder Ord°(S.°1244ff) – ¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pr¥t¥fMs eig¥0f, Gl, ¥fFürbitten für Europa¥0f, Präf°Ord°oder°Hll, FSS:°MB°560¥be¥w¥fMs¥0f:°HR°/°MBkl°1243°/°MBErg²°11f°– ¥fML°VI°ᴺ499°/°[2009]°905¥0f¥l¥vL:¥0v¥tEst°4¥v,17k¥_m.r¥_t¥0v¥t¥fML°IV¥0f°133¥l¥vAPs:¥0v¥tPs°18¥v,2¥_3.5+7ab.17+20.29+50¥0v°(R:°vgl.°¥v7¥0v)¥tvgl.°234¥l¥vREv:¥0v¥tEz°37¥v,27¥0v¥t–––¥l¥vEv:¥0v¥tJoh°4¥v,19¥_24¥0v¥tvgl.°164¥0w¥p",
        "notes": "¥fHinweise:¥0f¥p¥sZur Feier des Stundengebetes und der hl. Messe am Fest der hl. Theresia Benedicta vom Kreuz: In den beiden älteren Ergänzungsheften (1994 zum MB und 1995 zum StB) ist das „selig“ durch „heilig“ zu ersetzen. Die Bezeichnungen „Patronin Europas“ und „Fest“ sowie das Datum der Heiligsprechung (11.10.1998) in den Einführungen sind zu ergänzen. Im Ergänzungsheft 1995 zum StB ist jeweils nach den vier Responsorien nach den vier als 2. Lesung ausgewählten möglichen Texten „Te°Deum“ einzufügen.¥p¥s¥fVon der hl. Edith Stein gedichtete Lieder¥0f sind GL°439 (auch nach der Melodie von GL°395 singbar) und GL°822 (mit geringfügiger Anpassung auch nach der Melodie von GL 94 singbar, wenn auf die zweite Silbe jeder Textzeile jeweils die beiden Viertelnoten der Melodie gesungen werden).¥p",
        "deceased": "2017 †¥tEligiusz°Woszek°(Katowice/Fulda), Pfr.i.R., GR, Katowice/Polen¥p",
        "deceased_more": "1963 †¥tFranz°Joseph°Krenzer, Pfr.i.R., Geisa¥p1978 †¥tEdgar°Natsch°(Breslau), Pfr.i.R., Wingerode¥p1985 †¥tHermann°Roth, Pfr.i.R., Wiesenfeld¥p2017 †¥tEligiusz°Woszek°(Katowice/Fulda), Pfr.i.R., GR, Katowice/Polen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "10": {
        "liturgy": "¥fSa¥0f¥t¥qfHl. Laurentius¥0f, Diak, Märt, ¥fFest¥0f¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pr¥t¥fMs eig¥0f, Gl, Präf°Märt, n.B.°Hg°I, FSS:°MB°560¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "2017 †¥tKonrad°Meilinger, OStR°i.K.i.R., Msgr., GR, Hanau¥p",
        "deceased_more": "1961 †¥tKarl°Abel, Dechant, Pfarrer°in°Rengelrode¥p2017 †¥tKonrad°Meilinger, OStR°i.K.i.R., Msgr., GR, Hanau¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "11": {
        "liturgy": "¥fSo¥0f¥a¥t¥f19. Sonntag im Jahreskreis¥0f¥lPsalt:°III.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweis:¥0f ¥sDer ¥fGedenktag der hl. Klara¥0f entfällt in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "12": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 19.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Radegunde¥0f, Königin, Ord, ¥fGed¥0f (FD)¥bf¥w¥vL:¥0v¥tSir°2¥v,7¥_11¥0v¥tML°VI°507/ᴺ494¥l¥vAPs,°REv°und°Ev:¥0v¥tFDL°22f¥0w¥pw¥tOder ¥fhl. Johanna Franziska von Chantal¥0f, Ordgr, ¥fGed¥0f (früher°am°12.°Dezember)¥l¥w¥fOff:¥0f StB I 824 bzw. StB°III°(²2010),°S.°1369; Lektionar°zum°StB°II/1,°247¥l¥fMs:¥0f MB°864/²866f / MBkl°745 – ML°IV°410/°VI°ᴺ736¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°287f¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sDer Gedenktag der hl. Johanna Franziska von Chantal ist wegen des neuen Gedenktages Unserer Lieben Frau in Guadalupe vom bisherigen 12.°Dezember auf den 12.°August verlegt worden (vgl.°oben,°Kap.°I.A.1,°Nr.°11, und MBkl°2007, S.°745).¥p",
        "deceased": "",
        "deceased_more": "1957 †¥tKarl°Rohn°(Leitmeritz),°Religionslehrer°i.R., Erfurt¥p1958 †¥tTheodor°Helbig, Pfarrer°in°Dingelstädt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "13": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 19.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Wigbert¥0f, Abt, ¥fGed¥0f (FD)¥bf¥w¥vL:¥0v¥t1°Petr°4¥v,7b¥_11¥0v¥tML°VI°870/ᴺ844¥l¥vAPs:¥0v¥tPs°1¥v,1¥_2.3.4+6¥0v°(R:°vgl.°¥v2a¥0v)¥t732/ᴺ732¥l¥vREv:¥0v¥tvgl.°Joh°14¥v,23¥0v¥t529/ᴺ521¥l¥vEv:¥0v¥tMt°7¥v,21¥_27¥0v¥t872/ᴺ844¥0w¥pr¥tOder ¥fhl. Pontianus¥0f, Pp, ¥fund hl.°Hippolyt¥0f, Pr, Märtt, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°305,1;°Gg°348,1;°Sg°525,1¥0w¥l¥l¥kIm Dom zu Fulda:¥0k ¥pw¥t¥kabends:¥0k ggf.°¥fVorabendmesse°vom°H¥0f – ¥f1.°Vp°vom°folg°H¥0f°–°¥f1.°Kp°vom°So¥0f¥p",
        "notes": "",
        "deceased": "2022 †¥tHans¥-Joachim°Uhde, Pfr.i.R., GR, Maintal¥-Dörnigheim¥p",
        "deceased_more": "1925 †¥tLudwig°Günther, Pfarrer°in°Lütter¥p1970 †¥tJosef°Purschke, Pfarrer°in°Friesenhausen¥p1979 †¥tRonald°Sommer,°Neupriester°in°Erfurt¥p1985 †¥tFranz°Paul°(Leitmeritz), GR, Pfarrer°in°Haselstein¥p2022 †¥tHans¥-Joachim°Uhde, Pfr.i.R., GR, Maintal¥-Dörnigheim¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "14": {
        "liturgy": "¥fMi¥0f¥t¥qfWeihetag der Fuldaer Kathedrale¥0f, ¥fFest¥0f (FD)¥lOff: Com Kirchweihe – Te°Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pw¥t¥fMs aus dem Com Kirchweihe B¥0f (MB°882), Gl,°eig°Präf, FSS:°MB°562¥bf¥w¥vL:¥0v¥tOffb°21¥v,9b¥_14¥0v¥t¥fML°B/II¥0f°472/ᴺ478¥l¥vL°(ggf.°2.°L):¥0v°1°Kor°3¥v,9c¥_11.16¥_17¥0v¥t474/ᴺ480¥l¥vAPs:¥0v¥tPs°122¥v,1¥_3.4¥_5.8¥_9¥0v°(R:°¥v1b¥0v)¥t473/ᴺ479¥l¥vREv:¥0v¥tOffb°21¥v,3¥0v¥t–––¥l¥vEv:¥0v¥tJoh°10¥v,22¥_30¥0v¥t¥fML°IV¥0f°315/ᴺ317¥0w¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fDer Gedenktag des hl. Maximilian Maria Kolbe¥0f (im RK und GK am 14. Aug.) wird im Bistum Fulda ¥fam 17. August¥0f gefeiert.¥p¥sDas Weihefest der Fuldaer Kathedrale wird ¥fim Dom zu Fulda als Hochfest der eigenen Kirchweihe¥0f begangen; alles wie unten angegeben, außer: Kl.°Hore:°Ant°aus dem Com, ErgPs – Ms aus dem Com Kirchweihe A (MB°878/²879) mit Gl°und°Cr, in den Hg°I¥_III eig°Einschub.¥p¥sNutzer der Stundenbuch-App des DLI finden die ¥fTexte für das Stundengebet zur heutigen Eigenfeier des Diözesankalenders in der Datei FD-Stundengebet.PDF¥0f (s.°o.°S.°87, Nr.°3).¥p",
        "deceased": "",
        "deceased_more": "1976 †¥tTheobald°Höfler, Pfr.i.R., Altenmittlau¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "¥fHinweise:¥0f¥p¥s¥fDas Hochfest der Aufnahme Mariens in den Himmel ist im Bistum Fulda kirchlich gebotener Feiertag¥0f. Es besteht ¥fApplikations- sowie Sonn- und Feiertagspflicht¥0f (s.°o.°Kap.°I.C.1.).¥p¥sAus pastoralen Gründen können in der ¥fVigilmesse vom Hochfest der Aufnahme Mariens in den Himmel¥0f auch die Perikopen der Tagesmesse genommen werden.¥p¥sZur ¥fKräutersegnung¥0f s.°Benediktionale°Nr.°9,°S.°63ff.¥p¥sAm Schluss der Komplet kann heute und morgen passenderweise die ¥fMarianische Antiphon „Ave Regina caelorum“¥0f (GL°666¥v,2¥0v) bzw. ¥f„Ave, du Himmelskönigin“¥0f (vgl.°GL°868) gewählt werden, n.B. auch in der gesamten Oktav bis zum Ged Maria Königin am 22.°August.¥p",
        "vig_liturgy": "w¥t¥kabends:¥0k ggf. ¥fVigilmesse von der Aufnahme Mariens in den Himmel¥0f, Gl,°Cr, eig°Präf und in°den Hg°I¥_III eig°Einschub wie morgen, FSS:°MB°554°– ¥f1.°Vp°vom°folg°H¥0f°–°¥f1.°Kp°vom°So¥0f¥p¥p"
      },
      "15": {
        "liturgy": "¥fDo¥0f¥a¥t¥qhMariä Aufnahme in den Himmel¥0f, ¥fHochfest¥0f¥lTe Deum – Kl.°Hore: eig Ant,°ErgPs¥pw¥t¥fMs eig¥0f, Gl,°Cr, eig°Präf, in°den Hg°I¥_III eig°Einschub, FSS:°MB°554°– 2.°Vp°vom°H°–°2.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fDas Hochfest der Aufnahme Mariens in den Himmel ist im Bistum Fulda kirchlich gebotener Feiertag¥0f. Es besteht ¥fApplikations- sowie Sonn- und Feiertagspflicht¥0f (s.°o.°Kap.°I.C.1.).¥p¥sZur ¥fKräutersegnung¥0f s.°Benediktionale°Nr.°9,°S.°63ff.¥p¥sAm Schluss der Komplet kann heute passenderweise die ¥fMarianische Antiphon „Ave Regina caelorum“¥0f (GL°666¥v,2¥0v) bzw. ¥f„Ave, du Himmelskönigin“¥0f (vgl.°GL°868) gewählt werden, n.B. auch in der gesamten Oktav bis zum Ged Maria Königin am 22.°August.¥p",
        "deceased": "",
        "deceased_more": "1980 †¥tRichard°Hellmann°(Breslau), Pfr.i.R., GR, Garmisch¥-Partenkirchen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "16": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 19.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Rochus¥0f, Pilger, ¥fGed¥0f (FD)¥bf¥w¥vL:¥0v¥tJes°58¥v,6¥_11¥0v¥tML°VI°739/ᴺ739¥l¥vL°(ggf.°2.°L):¥0v°1°Joh°3¥v,14¥_18¥0v¥t748/ᴺ747¥l¥vAPs:¥0v¥tPs°112¥v,1¥_2.3¥_4.5¥_6.7+9¥0v°(R:°vgl.°¥v1a¥0v)¥t616/ᴺ613¥l¥vREv+Ev:¥0v°Mt°25¥v,31¥_40¥0v¥t729/ᴺ729¥0w¥pw¥tOder ¥fhl. Stephan I.¥0f, König von Ungarn, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg+Gg°227;°Sg°119/²118¥0w¥p",
        "notes": "",
        "deceased": "2010 †¥tBerthold°Richardt, Pfr.i.R., Msgr., Heiligenstadt¥p",
        "deceased_more": "1940 †¥tAdolf°Knoch,°Assessor°am°Bischöfl.°Kommissariat°in°Heiligenstadt¥p1945 †¥tJoseph°Raab,°Frühmesser°i.R., Rheinbreitbach¥p2010 †¥tBerthold°Richardt, Pfr.i.R., Msgr., Heiligenstadt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "17": {
        "liturgy": "¥fSa¥0f¥t¥fHl. Maximilian Maria Kolbe¥0f, Ordpr, Märt, ¥fGed¥0f (FD; RK/GK:°14.°Aug.)¥pr¥t¥fMs vom Hl¥0f¥bf¥w¥fMs¥0f: HR°/°MBErg²°13f°/°FDM°42f°– ¥fML°VI°519/ᴺ511¥0f oder ¥fFDL°24¥_26¥0f¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum heutigen Gedenktag des hl. Maximilian Kolbe¥0f, der früher nichtgebotener Gedenktag war, ist in den älteren Ausgaben der liturgischen Bücher (MB und MBkl, ML°VI, Schott-Messbuch für die Wochentage II, StB°III und Lektionare zum StB I/6 und II/6) am 14. August die Bezeichnung „Gedenktag“ zu ergänzen.¥p",
        "deceased": "2007 †¥tRoland°Nink,°Diakon,°Flieden¥-Buchenrod¥p",
        "deceased_more": "2007 †¥tRoland°Nink,°Diakon,°Flieden¥-Buchenrod¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "18": {
        "liturgy": "¥fSo¥0f¥a¥t¥f20. Sonntag im Jahreskreis¥0f¥lPsalt:°IV.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "",
        "deceased": "2001 †¥tP.°Hans°Brauner°SAC, GR, Vallendar¥p2001 †¥tRoman°Schymik, Pfarrer°in°Simmershausen¥p",
        "deceased_more": "1965 †¥tP.°Eugen°Bergmann°SJ,°Spiritual°in°Fulda¥p1992 †¥tDr.°Josef°Leinweber, Prof., Dr.°theol.°habil., Msgr., Domkapitular,°Fulda¥p2001 †¥tP.°Hans°Brauner°SAC, GR, Vallendar¥p2001 †¥tRoman°Schymik, Pfarrer°in°Simmershausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "19": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 20.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Johannes Eudes¥0f, Pr, Ordgr, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°236;°Gg°349,6;°Sg°526,6¥0w¥p",
        "notes": "",
        "deceased": "2008 †¥tWolfgang°Laibold,°Diakon,°Fulda¥p",
        "deceased_more": "1962 †¥tKarl°Bohl,°Kaplan°in°Eichenzell¥p2008 †¥tWolfgang°Laibold,°Diakon,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "20": {
        "liturgy": "¥fDi¥0f¥t¥fHl. Bernhard von Clairvaux¥0f, Abt, Kl, ¥fGed¥0f°(GK/RK)¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged,°BuM°eig¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1947 †¥tHermann°Horstkemper, Dechant, Pfarrer°in°Küllstedt¥p1968 †¥tHermann°Mott,°Kpl.i.R., Rektor,°Wachtküppel/Rhön¥p1990 †¥tAlojzije°Hartli, Pfr., Kroatenseelsorger°in°Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "21": {
        "liturgy": "¥fMi¥0f¥t¥fHl. Pius X.¥0f, Pp, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "2010 †¥tSiegfried°Klaus, Pfr.i.R., GR, Meinhard¥p2019 †¥tHans°Höfler, Pfr.i.R., Msgr., GR, Gelnhausen¥p",
        "deceased_more": "1954 †¥tPaul°Kaleve°(Breslau), Pfr.i.R., Kanonikus,°Büttstedt¥p1957 †¥tRobert°Günther,°Generalvikar,°Apostol.°Protonotar, Domkapitular,°Fulda¥p2010 †¥tSiegfried°Klaus, Pfr.i.R., GR, Meinhard¥p2019 †¥tHans°Höfler, Pfr.i.R., Msgr., GR, Gelnhausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "22": {
        "liturgy": "¥fDo¥0f¥t¥fMaria Königin¥0f, ¥fGed¥0f¥lOff°vom°Ged, Inv und BuM eig¥pw¥t¥fMs vom Ged¥0f, MarPräf (siehe auch: MBm und MLm Nr.°29 „Maria°Königin“)¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute findet zum 6. Mal der ¥f„Internationale Gedenktag für Opfer von Gewalt wegen ihrer Religion oder ihres Glaubens“¥0f statt. Er wurde bei der UN-Vollversammlung am 28. Mai 2019 verabschiedet und auf den 22. August gelegt. ¥f(Fürbitt¥-)Gebet¥0f für alle Opfer (und auch Verursacher) religiöser Gewalt, für Religions-, Glaubens- und Gewissensfreiheit weltweit.¥p¥sAm Schluss der Komplet kann heute passenderweise  die ¥fMarianische Antiphon „Ave Regina caelorum“¥0f (GL°666¥v,2¥0v) bzw. ¥f„Ave, du Himmelskönigin“¥0f (vgl.°GL°868) gewählt werden.¥p",
        "deceased": "",
        "deceased_more": "1962 †¥tDr.°Hermann°Schmidt, Domkapitular°in°Fulda¥p1988 †¥tGünter°Fahrig, Pfarrer°in°Hildburghausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "23": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 20.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Rosa von Lima¥0f, Jgfr, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°237;°Gg°348,2;°Sg°234¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1944 †¥tKonstantin°Görge,°Neupriester,°seit°23.°August°1944°vermisst°(Berg°Parnass°bei°Athen)¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "24": {
        "liturgy": "¥fSa¥0f¥t¥qfHl. Bartholomäus¥0f, Ap, ¥fFest¥0f¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pr¥t¥fMs eig¥0f, Gl, ApPräf, n.B.°Hg°I, FSS:°MB°558¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "2010 †¥tHans°Henning, GR, Pfarrer°in°Juscimeira/Brasilien¥p2016 †¥tJohannes°Hubrich, Pfr.i.R., Fulda¥p",
        "deceased_more": "1927 †¥tPaul°Hartmann, Pfarrer°in°Neuses¥p1945 †¥tJoseph°Lotz, Pfarrer°in°Effelder¥p1987 †¥tFranz°Hornischer°(Olmütz), Pfr.i.R., Schauenburg¥-Elgershausen¥p2010 †¥tHans°Henning, GR, Pfarrer°in°Juscimeira/Brasilien¥p2016 †¥tJohannes°Hubrich, Pfr.i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "25": {
        "liturgy": "¥fSo¥0f¥a¥t¥f21. Sonntag im Jahreskreis¥0f¥lPsalt:°I.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fLektionar zum StB II/7¥0f (21.–27. Woche i. Jkr.)¥rLektStB  II/7¥0r¥p¥p¥fHinweis:¥0f ¥sDie ¥fGedenktage des hl. Ludwig¥0f und ¥fdes hl. Josef von Calasanza¥0f entfallen in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1944 †¥tDamian°Dangel, Pfarrer°in°Sombom¥p1968 †¥tDr.°Johannes°Schäfer, Prof.°em., StR°i.R., Fulda¥p1983 †¥tTheodor°Kremer°(Danzig), Pfr.i.R., GR, Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "26": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 21.°Woche°im°Jahreskreis¥pw¥tOder ¥fsel. Johannes Paul I.¥0f, Pp, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg+Gg°247;°Sg°246/²247¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1943 †¥tWalter°Otterbein,°San.¥-Uffz., Diözesanpriester¥p1962 †¥tAdolf°Sander, Pfr.i.R., Wetter/Ruhr¥p1963 †¥tPhilipp°Heim, Pfr.i.R., Bad°Orb¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "27": {
        "liturgy": "¥fDi¥0f¥t¥fHl. Monika¥0f, Mutter des hl. Augustinus, ¥fGed¥0f¥pw¥t¥fMs von der Hl¥0f – Off°vom°Ged,°BuM°eig¥p",
        "notes": "",
        "deceased": "2010 †¥tBernhard°Niemiec°(Katowice/Fulda), Pfarrer°in°Niederkalbach¥p",
        "deceased_more": "1948 †¥tLeo°Franzkowski°(Breslau),°Erzpriester, Pfr.i.R., Bodenrode¥p1953 †¥tWendelin°Brähler, Pfarrer°in°Petersberg¥p1970 †¥tLeonhard°Hruschka°(Breslau), Pfarrer°in°Naumburg¥-Land¥p1984 †¥tGünter°Zucker, Pfr.i.R., OStR°i.K.i.R., Petersberg¥p2010 †¥tBernhard°Niemiec°(Katowice/Fulda), Pfarrer°in°Niederkalbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "28": {
        "liturgy": "¥fMi¥0f¥t¥fHl. Augustinus¥0f, Bi, Kl, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged,°BuM°eig¥p",
        "notes": "",
        "deceased": "2013 †¥tHartmut°Wegner, Pfr.i.R., GR, Alzenau¥p",
        "deceased_more": "1930 †¥tAdalbert°Huhn,°Kooperator°in°Kassel/Gelnhausen¥p1983 †¥tDr.°Martin°Hannappel, Pfr.i.R., Stausebach¥p1985 †¥tP.°Hermes°Wilhelm°Berthold°OFMCap,°Pfarradmin.°in°Bebra¥p2013 †¥tHartmut°Wegner, Pfr.i.R., GR, Alzenau¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "29": {
        "liturgy": "¥fDo¥0f¥t¥fEnthauptung des hl. Johannes des Täufers¥0f, ¥fGed¥0f¥lOff°vom°Ged, Inv und LuV eig¥pr¥t¥fMs vom Ged¥0f, eig°Ev, eig°Präf, n.B.°Hg°I¥p",
        "notes": "",
        "deceased": "2018 †¥tKarl¥-Heinz°Bickert, Pfr.i.R., OStR°i.K.i.R., GR, Fulda¥p",
        "deceased_more": "1930 †¥tIgnatius°Schnaus, Pfr.i.R., Batten¥p1960 †¥tJosef°Freidhof, Pfr.i.R., Rückers¥p2018 †¥tKarl¥-Heinz°Bickert, Pfr.i.R., OStR°i.K.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "30": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 21.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°18/²16;°Gg+Sg°18/²16¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1966 †¥tFranz°Gaschler°(Olmütz), Pfr.i.R., Fritzlar¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "31": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 21.°Woche°im°Jahreskreis¥pr¥tOder ¥fhl. Paulinus¥0f, Bi, Märt, ¥fGed¥0f°(RK)¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°308,10;°Gg°348,1;°Sg°1040/²1062¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1969 †¥tP.°Athanasius°Schwermann°OFMCap, Pfarrer°in°Bad°Hersfeld,°St.°Bonifatius¥p1981 †¥tRudolf°Hammer, Pfr.i.R., GR, Flieden¥p1989 †¥tPaul°Burschel,°Generalvikar°i.R., Apostol.°Protonotar, Domkapitular°i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      }
    },
    "9": {
      "1": {
        "liturgy": "¥fSo¥0f¥a¥t¥f22. Sonntag im Jahreskreis¥0f – ¥l¥fWeltgebetstag°zur°Bewahrung°der°Schöpfung – Beginn°der°„Ökumenischen°Schöpfungszeit“¥0f (bis°zum°4.10.)¥lPsalt:°II.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweis:¥0f ¥sPapst Franziskus hat im August 2015 einen künftig jährlich am 1.°September stattfindenden ¥f„Weltgebetstag zur Bewahrung der Schöpfung“¥0f ins Leben gerufen (Mitteilung des Vatikan vom 10.08.2015). Er wird gemeinsam mit den orthodoxen Kirchen begangen, die ihn schon seit 1988 am 1.°September haben.¥p",
        "deceased": "1998 †¥tDr.°Franz°Scholz°(Breslau), Prof.°em., Dr.°theol.°habil., Prälat,°Ehrendomkapitular,°Dieburg¥p",
        "deceased_more": "1937 †¥tWigbert°Sondergeld,°Rektor°i.R., Hünfeld¥p1949 †¥tJohannes°Delmhorst, Pfr.i.R., Prälat,°Borsum¥p1949 †¥tHeinrich°Melcher°(Köln), Pfr.i.R., Bad°Sachsa¥p1964 †¥tP.°Heinrich°Balnus°SDB,°Kaplan°in°Kassel,°St.°Kunigundis¥p1979 †¥tPaul°Hartmann, Pfr.i.R., Msgr., GR, Dipperz¥p1982 †¥tPaul°Tietz°(Ermland), GR, Pfarrer°in°Steinau°a.°d.°Straße¥p1998 †¥tDr.°Franz°Scholz°(Breslau), Prof.°em., Dr.°theol.°habil., Prälat,°Ehrendomkapitular,°Dieburg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "2": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 22.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°62,1/²60,1;°Gg°167/²165;°Sg°208,1/²206,1¥0w¥p",
        "notes": "",
        "deceased": "1996 †¥tCarl°Josef°Schneider, Pfr.i.R., Msgr., GR, Ehrendechant,°Fulda¥p",
        "deceased_more": "1940 †¥tJoseph°Lier,°Hausgeistlicher°im°Lucius¥-Hebel¥-Stift°in°Erfurt¥p1996 †¥tCarl°Josef°Schneider, Pfr.i.R., Msgr., GR, Ehrendechant,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "3": {
        "liturgy": "¥fDi¥0f¥t¥fHl. Gregor der Große¥0f, Pp, Kl, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged,°BuM°eig¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1969 †¥tMartin Drissel, Pfr.i.R., Fritzlar¥p1986 †¥tFranz°von°Hirsch°(Breslau/Görlitz), Pfr.i.R., Zella/Eichsfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "4": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 22.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°308,9;°Gg°350,7;°Sg°526,6¥0w¥p",
        "notes": "",
        "deceased": "2009 †¥tFranz°Schröder, Pfr.i.R., OStR°i.K.i.R., Fulda¥p",
        "deceased_more": "1983 †¥tKarl°Goldbach, Pfr.i.R., GR, Lenterode/Eichsfeld¥p2009 †¥tFranz°Schröder, Pfr.i.R., OStR°i.K.i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "5": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 22.°Woche°im°Jahreskreis – ¥fPriesterdonnerstag¥0f¥pw¥tOder ¥fMs von der hl. Mutter Teresa¥0f, Ord, Ordgr¥be¥w¥fMs¥0f: HR°/°Com°Jgfr oder MFr°9, Präf°Jgfr¥l¥vL:¥0v¥tGen°12¥v,1¥_4a¥0v¥t¥fML°VII¥0f°°°°3/ᴺ°3¥l¥vAPs:¥0v¥tPs°22¥v,23¥_24b.25.26¥_27.30c¥_32¥0v°(R:°¥v27b¥0v)¥tvgl.°86/ᴺ87¥l¥vREv:¥0v¥tMt°23¥v,11.12b¥0v¥t–––¥l¥vEv:¥0v¥tJoh°19¥v,25¥_30¥0v¥t498/ᴺ512¥0w¥pw¥tOder ¥fMs um Priesterberufe¥0f ¥w(MB°1035f/²1057),¥lL°und°Ev vom°Tag oder aus°den°AuswL¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°1039f/²1061f¥0w¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute wird in Würdigung des Wirkens der hl. Mutter Teresa der von den Vereinten Nationen am 17. Dezember 2012 ausgerufene „Internationale Welttag der Nächstenliebe“ begangen.¥p¥s¥fZum Priesterdonnerstag (monatl. Gebetstag für geistliche Berufe):¥0f Die Votivmesse ist erlaubt. – Fürbitte(n) um Priesterberufungen. – Thema: „Ihr aber gehört Christus.“ (1°Kor°3¥v,23¥0v). Intention: Priester und Bischöfe.¥p",
        "deceased": "1999 †¥tJosef°Schöler°(Leitmeritz/Fulda), Pfr.i.R., GR, Bad°Hersfeld¥p",
        "deceased_more": "1922 †¥tJohann°Bapt.°Blume, Pfr.i.R., Steinbach¥p1949 †¥tHieronymus°Schwethelm, Dechant, Pfarrer°in°Beuren/Eichsfeld¥p1999 †¥tJosef°Schöler°(Leitmeritz/Fulda), Pfr.i.R., GR, Bad°Hersfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "6": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 22.°Woche°im°Jahreskreis – ¥fHerz¥-Jesu¥-Freitag¥0f – ¥fÖkumenischer°Schöpfungstag¥0f¥pw¥tOder ¥fVotivmesse vom heiligsten Herzen Jesu¥0f¥l¥w(MB°1100f/²1132f oder 257ff), Herz¥-Jesu¥-Präf,¥lL°und°Ev°vom°Tag oder aus°den°AuswL¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°176/²174;°Gg+Sg°119/²117¥0w¥p",
        "notes": "¥fHinweise:¥0f¥p¥sEin ¥f„Ökumenischer Schöpfungstag“¥0f wurde beim 2.¥°Ökumenischen Kirchentag im Mai¥°2010 in München feierlich deklariert und von den Mitgliedskirchen der Arbeitsgemeinschaft Christlicher Kirchen in Deutschland (ACK) offiziell auf den ¥f1.¥°Freitag im September¥0f gelegt. Je nach lokalen und regionalen Gegebenheiten können Gemeinden den „Ökumenischen Schöpfungstag“ auch an einem anderen Termin der ¥f„Schöpfungszeit“ zwischen dem 1.¥°September und dem 4.¥°Oktober¥0f feiern. ¥fBesondere Fürbitten und/oder Gottesdienste im Anliegen der Bewahrung der Schöpfung und des Klimaschutzes.¥0f Eine Arbeitshilfe zur Anregung für Gemeinden, in gemeinsamer ökumenischer Initiative die Schöpfung zu feiern, kann bei der ACK – Ökumenische Centrale, www.oekumene-ack.de oder www.schoepfungstag.info, bestellt werden. – Zur ökumenischen Schöpfungszeit eignen sich besonders die Lieder GL°463 und°466.¥p¥s¥fZum°Herz¥-Jesu¥-Fr:¥0f Die Votivmesse ist erlaubt.¥p",
        "deceased": "",
        "deceased_more": "1977 †¥tP.°Hans°von°Schönfeld°SJ,°Frankfurt°a.°M.¥p1986 †¥tOtto°Henkel, Pfarrer°in°Heiligenstadt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "7": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 22.°Woche°im°Jahreskreis – ¥fHerz¥-Mariä¥-Samstag¥0f¥pw¥tOder ¥fVotivmesse vom Unbefleckten Herzen Mariä¥0f, ¥wMBm°und°MLm°Nr.°28,°eig°Präf¥0w¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°247;°Gg+Sg°99f/²97f¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Herz¥-Mariä¥-Sa:¥0f Die Votivmesse ist erlaubt.¥p",
        "deceased": "2002 †¥tJohannes°Nikel°(Breslau/Fulda), Pfr.i.R., GR, Flieden¥-Rückers¥p",
        "deceased_more": "1960 †¥tJulius°Braun, Pfr.i.R., Fulda¥p1983 †¥tPaul°Pöss°(Neusohl/Banská Bystrica), Pfr.i.R., GR, Gelnhausen¥p2002 †¥tJohannes°Nikel°(Breslau/Fulda), Pfr.i.R., GR, Flieden¥-Rückers¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "8": {
        "liturgy": "¥fSo¥0f¥a¥t¥f23. Sonntag im Jahreskreis¥0f – ¥fWelttag°der°sozialen°Kommunikationsmittel¥0f¥lPsalt:°III.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute ist in Deutschland der ¥f58. Welttag der sozialen Kommunikationsmittel¥0f (gesamtkirchl. am 7.¥°So¥°der¥ OSterzeit) ¥funter dem Leitwort: „Mit dem Herzen sprechen“¥0f. Papstwort zum Welttag, Fürbitten. Weitere Infos unter www.dbk.de  ›  Themen  ›  Welttag der sozialen Kommunikationsmittel°–°Mediensonntag)¥p¥sDas ¥fFest Mariä Geburt¥0f entfällt in diesem Jahr. Auch in der Sonntagsmesse kann jedoch das passende Lied ¥fGL 869¥0f gesungen werden (auch nach der Melodie von GL°236 oder GL°282 singbar).¥p",
        "deceased": "",
        "deceased_more": "",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "9": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 23.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Petrus Claver¥0f, Pr, ¥fGed¥0f – ¥fPatron°der°Menschenrechte¥0f¥be¥w¥fMs¥0f: HR°/°MBkl°1244°/°MBErg²°14°/ Com°Ht°5°od.°10¥_12°– ¥fML°VI°ᴺ564¥0f¥l¥vL:¥0v¥tJes°58¥v,6¥_11¥0v¥tML°VI°739¥l¥vAPs:¥0v¥tPs°1¥v,1¥_2.3.4+6¥0v°(R:°¥v2a¥0v)¥t732¥l¥vREv+Ev:¥0v°Mt°25¥v,31¥_40¥0v¥t729¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°315,29;°Gg°349,5;°Sg°526,6¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1958 †¥tMeinolf°Jünemann, Pfr.i.R., Heiligenstadt¥p1964 †¥tHeinrich°Roßbach, Pfarrer°in°Kassel,°St.°Maria¥p1964 †¥tJoseph°Schramm, Pfarrer°in°Witzenhausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "10": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 23.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°309,13;°Gg°350,7;°Sg°529,13¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1939 †¥tAlbin°Kind, Pfr.i.R., Rottenmünster¥p1961 †¥tJosef°Larbig, Pfr.i.R., Bad°Soden¥-Salmünster¥p1979 †¥tWilhelm°Joerg, Pfr.i.R., Breitenbach°a.°Herzberg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "11": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 23.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°318,37;°Gg°348,2;°Sg°208,1/²206,1¥0w¥p",
        "notes": "",
        "deceased": "2020 †¥tJózef°Cieśla, Pfr.i.R., Nowy°Sącz/Polen¥p2023 †¥tWilhelm°Gerlach, Pfr.i.R., GR, Kirchhain¥p",
        "deceased_more": "1944 †¥tKarl°Hofmann,°Konviktsdirektor°in°Fulda, Opfer°eines°Luftangriffes¥p2020 †¥tJózef°Cieśla, Pfr.i.R., Nowy°Sącz/Polen¥p2023 †¥tWilhelm°Gerlach, Pfr.i.R., GR, Kirchhain¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "12": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 23.°Woche°im°Jahreskreis¥pw¥tOder ¥fHeiligster Name Mariens (Mariä Namen)¥0f, ¥fGed¥0f (GK/RK)¥l¥fOff¥0f: StB°III°(²2010),°S.°890¥be¥w¥fMs¥0f: HR°/°MBErg²°15°/ MBm°Nr.°21°(„Mariä°Namen“), MarPräf°– ¥fML°VI°573/ᴺ567¥0f oder MLm°Nr.°21¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°315,27;°Gg°105/²103;°Sg°527,9¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sZum Gedenktag Mariä Namen passen die Lieder GL°524 und¥°856¥v,1¥0v („Maria mit Namen …“, ggf.°auch weitere Strophen).¥p",
        "deceased": "",
        "deceased_more": "1953 †¥tAloys°Gernoth°(Breslau), Pfr.i.R., Bad°Salzschlirf¥p1960 †¥tFranz°Christoph°Gesang, Pfarrer°in°Schröck¥p1975 †¥tHermann°Rübsam, Pfr.i.R., GR, Kirchhasel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "13": {
        "liturgy": "¥fFr¥0f¥t¥fHl. Johannes Chrysostomus¥0f, Bi, Kl, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1978 †¥tDr.°Maximilian°Wenzel°(Leitmeritz),°Apostol.°Protonotar,°Offizial°in°Erfurt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "14": {
        "liturgy": "¥fSa¥0f¥t¥qfKreuzerhöhung¥0f, ¥fFest¥0f¥lTe°Deum – Kl.°Hore:°eig°Ant,°Ps°vom°Wt¥pr¥t¥fMs eig¥0f, Gl, eig°Präf oder LeidPräf I, FSS:°MB°540 oder 548/I oder 566 – ¥fAbendmessen°vom°F°– ¥f2.°Vp°vom°F¥0f°–°¥f1.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥sEin Liedblatt mit dem Hymnus zum heutigen Fest aus dem Stundenbuch steht für den Gesang als Gemeindelied unter www.direktorium.bistum-fulda.de zum Download bereit.¥p¥s¥fDie Vorabendmesse zum 24. Sonntag im Jkr. kann heute nicht gefeiert werden¥0f, da das Fest Kreuzerhöhung in der Rangordnung der liturgischen Tage höher steht als die Sonntage im Jkr. (s.°o.°Kap.°VII°A.°2.°II°5.+6.). ¥fHeutige Abendmessen sind Messfeiern vom Fest.¥0f Dies bitte in den Gottesdienstordnungen so veröffentlichen.¥p",
        "deceased": "",
        "deceased_more": "1960 †¥tLudwig°Kafurke°(Breslau), Pfr.i.R., Breitenworbis¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "15": {
        "liturgy": "¥fSo¥0f¥a¥t¥f24. Sonntag im Jahreskreis¥0f¥lPsalt:°IV.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweis:¥0f ¥sDie liturgische Feier des ¥fGedächtnisses der Schmerzen Mariens¥0f entfällt in diesem Jahr. Auch in der Sonntagsmesse kann jedoch als passendes Lied GL°532, 521¥v,4¥0v oder 860¥v,3¥0v gesungen werden.¥p",
        "deceased": "2019 †¥tOskar°Seufert, Pfr.i.R., GR, Eichenzell¥-Rothemann¥p",
        "deceased_more": "1933 †¥tJoseph°Vogt, Dechant, Pfarrer°in°Niederorschel¥p1947 †¥tHeinrich°Fick, Pfarrer°in°Geisleden¥p1963 †¥tFranz°Arand, Pfr.i.R., Teistungen/Krs.°Worbis¥p1988 †¥tP.°Rainer°Klose°OFM,°Franziskaner°auf°dem°Kerbschen°Berg,°Dingelstädt¥p2019 †¥tOskar°Seufert, Pfr.i.R., GR, Eichenzell¥-Rothemann¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "16": {
        "liturgy": "¥fMo¥0f¥t¥fHl. Kornelius¥0f, Pp, und ¥fhl.°Cyprian°von°Karthago¥0f,°Bi, Märtt, ¥fGed¥0f¥pr¥t¥fMs von den Hll¥0f, n.B.°Hg°I – Off°vom°Ged,°BuM°eig¥p",
        "notes": "",
        "deceased": "2018 †¥tWinfried°Böhm,°Diakon,°Eichenzell¥p",
        "deceased_more": "1931 †¥tHermann°Lins, Pfr.i.R., Rinteln¥p2018 †¥tWinfried°Böhm,°Diakon,°Eichenzell¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "17": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 24.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Hildegard von Bingen¥0f, Äbtissin, Myst, Kl, ¥fGed¥0f°(RK/GK)¥pw¥tOder ¥fhl. Robert Bellarmin¥0f, Ordpr, Bi, Kl, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°228;°Gg°224/²223;°Sg°528,11¥0w¥p",
        "notes": "",
        "deceased": "2011 †¥tDr.°Lothar°Ruppert, Prof., Prälat,°Fulda¥p",
        "deceased_more": "1946 †¥tFranz°Joseph°Beier, Pfarrer°in°Borsch¥p1954 †¥tJohannes°Wiwiora, Pfarrer°in°Hauswurz¥p2011 †¥tDr.°Lothar°Ruppert, Prof., Prälat,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "18": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 24.°Woche°im°Jahreskreis¥pr¥tOder ¥fhl. Lambert¥0f, Bi, Glb, Märt, ¥fGed¥0f°(RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°191/²189;°Gg°199/²197;°Sg°90/²88¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1924 †¥tKarl°Edmund°Pazifikus°Schulz, Pfr.i.R., Soden¥p1942 †¥tJohannes°Bierschenk, Pfr.i.R., Heiligenstadt¥p1947 †¥tFranz°Iseke, Dechant, Pfarrer°in°Kella¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "19": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 24.°Woche°im°Jahreskreis¥pr¥tOder ¥fhl. Januarius¥0f, Bi, Märt, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°211/²209;°Gg°219/²217;°Sg°90/²88¥0w¥p",
        "notes": "",
        "deceased": "1997 †¥tJosef°Fischer°(Olmütz), Pfr.i.R., Fritzlar¥p2018 †¥tP.°Dario°Zanoner°OFM,°Arco°(Trentino)¥p",
        "deceased_more": "1954 †¥tGeorg°Adam°Rhiel, Pfarrer°in°Uttrichshausen¥p1961 †¥tJohannes°Gulitz°(Breslau), Pfarrer°in°Neudietendorf¥p1997 †¥tJosef°Fischer°(Olmütz), Pfr.i.R., Fritzlar¥p2018 †¥tP.°Dario°Zanoner°OFM,°Arco°(Trentino)¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "20": {
        "liturgy": "¥fFr¥0f¥t¥fHll. Andreas Kim Taegon¥0f, Pr, und ¥fPaulus Chong Hasang und°Gefährten¥0f, Märtt, ¥fGed¥0f¥lOff: StB°III°(²2010),°S.°1365°bzw.°1370, oder Ergänzungsheft°1995,°S.°5¥_8¥pr¥t¥fMs von den Hll¥0f¥be¥w¥fMs¥0f: MB°²782°/°HR°/°MBErg²°16f°/°MBErg¹°11°– ¥fML°VI°ᴺ596¥0f¥l¥vL:¥0v¥tWeish°3¥v,1¥_9¥0v¥tML°VI°505¥l¥voder¥0v¥tRöm°8¥v,31b¥_39¥0v¥t672¥l¥vAPs:¥0v¥tPs°126¥v,1¥_2b.2c¥_3.4¥_5.6¥0v°(R:°¥v5¥0v)¥t506¥l¥vREv+Ev:¥0v°Lk°9¥v,23¥_26¥0v¥t761f¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "21": {
        "liturgy": "¥fSa¥0f¥t¥qfHl. Matthäus¥0f, Ap, Evangelist, ¥fFest¥0f¥lOff: BuM eig, sonst Com – Te°Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pr¥t¥fMs eig¥0f, Gl, ApPräf, n.B.°Hg°I, FSS:°MB°558¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "2005 †¥tP.°Josef°Pastwa°SDB,°Berlin¥r?¥0r¥p2011 †¥tJohannes°Krömer, Pfr.i.R., GR, Kassel¥p",
        "deceased_more": "1981 †¥tJoseph°Egert, Pfr.i.R., GR, Duderstadt¥p2005 †¥tP.°Josef°Pastwa°SDB,°Berlin¥r?¥0r¥p2011 †¥tJohannes°Krömer, Pfr.i.R., GR, Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "22": {
        "liturgy": "¥fSo¥0f¥a¥t¥f25. Sonntag im Jahreskreis¥0f – ¥fCaritassonntag¥0f¥lPsalt:°I.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute ist der ¥fCaritassonntag¥0f unter dem Jahresthema der Caritas für 2024.¥p¥sHeute beginnt die ¥fInterkulturelle Woche vom 22.–29. September¥0f. Materialien können bezogen werden unter www.interkulturellewoche.de. Gemeinsames ökumenisches Hirtenwort im KA, besonderes Fürbittgebet.¥p¥sDer ¥fGedenktag der hll. Mauritius und Gefährten¥0f entfällt in diesem Jahr.¥p",
        "deceased": "2010 †¥tP.°Oskar°Klingebiel°OCarm, Pfr.i.R., Flieden¥p2018 †¥t¥fJohannes°Kapp¥0f,°Weihbischof°em., Hofgeismar¥p",
        "deceased_more": "1931 †¥tRudolf°Thiergart, Pfarrer°in°Eichenzell¥p1961 †¥tLeo°Koltermann°(Schneidemühl), Pfarrer°in°Struth/Eichsfeld¥p2010 †¥tP.°Oskar°Klingebiel°OCarm, Pfr.i.R., Flieden¥p2018 †¥t¥fJohannes°Kapp¥0f,°Weihbischof°em., Hofgeismar¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "23": {
        "liturgy": "¥fMo¥0f¥t¥fHl. Pius von Pietrelcina (Pater Pio)¥0f, Ordpr, ¥fGed¥0f¥lOff: StB°III°(²2010),°S.°1371¥pw¥t¥fMs vom Hl¥0f¥be¥w¥fMs¥0f:°HR°/°MBkl°1244f°/°MBErg²°17°/°Com°MFr°7¥_8°– ¥fML°VI°ᴺ603¥0f¥l¥vL:¥0v¥tGal°2¥v,19¥_20¥0v¥tML°VI°865¥l¥vAPs:¥0v¥tPs°128¥v,1¥_2.3.4¥_5¥0v°(R:°¥v1¥0v)¥t864¥l¥vREv:¥0v¥tLk°21¥v,36¥0v¥t483¥l¥vEv:¥0v¥tMt°16¥v,24¥_27¥0v¥t669¥loder vom Ged des hl.°Franz von Assisi°(ML°VI°632/ᴺ631)¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute ist der ¥fGedenktag des hl. Papstes Linus¥0f, der als erster Nachfolger des Apostels Petrus wahrscheinlich ab dem Jahr 67 Bischof von Rom war und im Jahr 79 das Martyrium erlitt. Er gehört zu den seit alten Zeiten verehrten Heiligen, die im Römischen Messkanon genannt werden, deren Gedenktag heute aber nicht mehr im ARK verzeichnet ist. Durch die ¥fWahl des Hg°I¥0f kann sein Gedächtnis weiter geehrt werden.¥p",
        "deceased": "",
        "deceased_more": "1955 †¥tJoseph°Ehrlich°(Breslau),°Religions-Prof.°i.R., Ershausen¥p1981 †¥tPaul°Weyer, Pfr.i.R., GR, Cölbe¥p1983 †¥tAdolf°Schuchert, Pfr.i.R., Prälat,°Fulda¥p1988 †¥tP.°Ludwig°Böhm°OFM, Pfarrer°in°Bad°Soden¥-Salmünster¥-Alsberg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "24": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 25.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Rupert und hl.°Virgil¥0f, Bi, Glbb, ¥fGed¥0f°(RK) – BuM°eig – eig°Präf¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°305,2;°Gg°125/²123;°Sg°219/²218¥0w¥p",
        "notes": "",
        "deceased": "2007 †¥tGerhard°Kostka°(Oppeln/Fulda), Pfr.i.R., Mannheim¥p2007 †¥tWolfgang°Halama, OStR°i.K.i.R., Msgr., Trier¥p2010 †¥tWolfgang°Müller, Pfr.i.R., Hünfeld¥p2015 †¥tP.°Erwin°Schmelz°OFM,°Fulda¥p2018 †¥tAugustinus°Baumgarten, Pfr.i.R., Niederkassel¥p",
        "deceased_more": "1979 †¥tFranz°Hock, Pfarrer°in°Schrecksbach¥p1986 †¥tDr.°Joseph°Reindl°(Meißen), Prof., Erfurt¥p2007 †¥tGerhard°Kostka°(Oppeln/Fulda), Pfr.i.R., Mannheim¥p2007 †¥tWolfgang°Halama, OStR°i.K.i.R., Msgr., Trier¥p2010 †¥tWolfgang°Müller, Pfr.i.R., Hünfeld¥p2015 †¥tP.°Erwin°Schmelz°OFM,°Fulda¥p2018 †¥tAugustinus°Baumgarten, Pfr.i.R., Niederkassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "25": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 25.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Nikolaus von Flüe¥0f, Einsiedler, Friedensstifter, ¥fGed¥0f°(RK) – BuM°eig°–°eig°Präf¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°210/²208;°Gg°7/²5;°Sg°153/²151¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "26": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 25.°Woche°im°Jahreskreis¥pr¥tOder ¥fhl. Kosmas und hl.°Damian¥0f, Ärzte, Märt, ¥fGed¥0f°– n.B.°Hg°I¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°57,2/²55,2;°Gg°1105/²1137;°Sg°526,5¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute ist der 20. Jahrestag der Bischofsweihe von Weihbischof Karlheinz Diez.¥p",
        "deceased": "",
        "deceased_more": "1926 †¥tJohannes°Joseph°Medler, Dechant, Pfarrer°in°Geisa¥p1937 †¥tJohannes°Golbach, Pfarrer°in°Simmershausen¥p1953 †¥tBurkard°Zentgraf,°Kpl.i.R., Eisenach¥p1975 †¥tJosef°Scherer, Pfr.i.R., GR, Fulda¥p1976 †¥tP.°Badulf°Horsten°OFMCap, Pfarrer°in°Reichensachsen¥p1993 †¥tPeter°Hostombe,°Caritasdirektor°in°Erfurt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "27": {
        "liturgy": "¥fFr¥0f¥t¥fHl. Vinzenz von Paul¥0f, Pr, Ordgr, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged,°BuM°eig¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1958 †¥tKarl°Rotter°(Olmütz), Pfr.i.R., Borken¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "28": {
        "liturgy": "¥fSa¥0f¥t¥qfHl. Lioba¥0f, Jgfr, Äbtissin, ¥fFest¥0f (FD/RK)¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pw¥t¥fMs eig¥0f, Gl, Präf°Jgfr, FSS:°MB°560¥bf¥w¥fML°VI°617/ᴺ614¥0f oder ¥fFDL°26¥_28¥0f¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥sDie ¥fGedenktage des hl. Wenzel und der hll. Laurentius Ruiz und°Gefährten¥0f können im Bistum Fulda nicht begangen werden, weil im Diözesankalender auf den 28. September das Fest der hl.°Lioba fällt.¥p¥sNutzer der Stundenbuch-App des DLI finden die ¥fTexte für das Stundengebet zur heutigen Eigenfeier des Diözesankalenders in der Datei FD-Stundengebet.PDF¥0f (s.°o.°S.°87, Nr.°3).¥p¥sZum heutigen ¥fFest der hl. Lioba¥0f kann der Hymnus zur Vesper aus den „Eigenfeiern der Diözese Fulda – Stundengebet“ nach der Melodie von GL°489 als Gemeindelied gesungen werden (Liedblatt zum Download auf www.direktorium.bistum-fulda.de).¥p",
        "deceased": "2011 †¥tP.°Ernst°Rochner°OFMCap, GR, Werne¥p",
        "deceased_more": "1976 †¥tP.°Hermann°Home°SAC, Pfr.i.R., Limburg¥p1992 †¥tP. Dr.°Horestes°Pfeiler°SM¥p2011 †¥tP.°Ernst°Rochner°OFMCap, GR, Werne¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "29": {
        "liturgy": "¥fSo¥0f¥a¥t¥f26. Sonntag im Jahreskreis¥0f – ¥fWelttag°des°Migranten°und°Flüchtlings¥0f¥lPsalt:°II.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute ist der ¥f110. Welttag des Migranten und Flüchtlings¥0f. Papst Franziskus hat am 20. November 2018 den „Welttag des Migranten und Flüchtlings“ vom bisherigen 19. Januar auf den letzten Sonntag im September verlegt. Papstbotschaft zum Welttag, besondere Fürbitten.¥p¥sDas Erntedankfest wird am Sonntag, dem 6. Oktober, gefeiert.¥p¥sDas ¥fFest der hll. Erzengel Michael, Gabriel und Rafael¥0f entfällt in diesem Jahr. Auch in der Sonntagsmesse kann jedoch das passende Lied GL°539 gesungen werden.¥p",
        "deceased": "",
        "deceased_more": "1920 †¥tFlorentin°Jüngst, Pfarrer°in°Geismar¥p1945 †¥tFranz°Kleeschulte,°Kanzleidirektor°in°Fulda¥p1949 †¥tDDr.°Emil°Weber, Prof., Dr.°theol.°et°rer.pol., Domkapitular,°Fulda¥p1962 †¥tJohann°Waclawec°(Königgrätz), Pfr.i.R., Gemünden/Wohra¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "30": {
        "liturgy": "¥fMo¥0f¥t¥fHl. Hieronymus¥0f, Pr, Kl, ¥fGed¥0f  ¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "2001 †¥tKarl°Ditsche°(Meißen), Pfr.i.R., Fulda¥p",
        "deceased_more": "1955 †¥tKarl°Lippert, Pfarrer°in°Großkrotzenburg¥p1971 †¥tWerner°Lerch, Pfr.i.R., GR, Deuna¥p1984 †¥tDr.°Hans°Kluge°(Breslau), Dr.°phil., OStR°i.R., Hanau¥p1987 †¥tFranz°Steffen°(Paderborn), Pfr.i.R., Neustadt¥p2001 †¥tKarl°Ditsche°(Meißen), Pfr.i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      }
    },
    "10": {
      "1": {
        "liturgy": "¥fDi¥0f¥t¥fHl. Theresia vom Kinde Jesus (von Lisieux)¥0f, Ord,°Kl, ¥fPatronin der Weltmission¥0f, ¥fGed¥0f¥pw¥t¥fMs von der Hl¥0f – Off°vom°Ged,°BuM°eig¥p",
        "notes": "¥fHinweise:¥0f¥p¥sIm Oktober werden ¥fRosenkranzandachten¥0f gehalten und wird den Gläubigen das ¥fRosenkranzgebet¥0f besonders empfohlen. Für die ¥fWeltmission¥0f möge besonders gebetet werden.¥p¥s¥fMitbrüder, die in den letzten drei Monaten des vorigen Jahres verstorben sind¥0f, können wegen des Redaktionsschlusses des Direktoriums im folgenden Kalendarium an ihrem 1. Todestag leider nicht genannt werden.¥p",
        "deceased": "2011 †¥tDDr.°Gerhard°Matern°(Ermland/Fulda), Prof.°em., Dr.°phil., Dr.°theol.°habil., Msgr., Fulda¥p",
        "deceased_more": "1968 †¥tDDr.°Josef°Huhn, Prof.°em., Dr.°theol.°et°phil., Fulda¥p1984 †¥tRudolf°Lenz, Pfr.i.R., Fulda¥p2011 †¥tDDr.°Gerhard°Matern°(Ermland/Fulda), Prof.°em., Dr.°phil., Dr.°theol.°habil., Msgr., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "2": {
        "liturgy": "¥fMi¥0f¥t¥fHeilige Schutzengel¥0f, ¥fGed¥0f – Inv,°Hy°zur°Lh°und°LuV°eig – Kl.°Hore:°Hy,°Ant°u.°Ps°vom°Wt,°sonst°eig¥pw¥t¥fMs vom Ged¥0f, eig°Ev, EngelPräf¥p",
        "notes": "¥fHinweis:¥0f ¥sZum Gedenktag der hll.¥°Schutzengel passen die Lieder GL°540 und GL°870. Für den Gesang des Hymnus aus dem Stundenbuch als Gemeindelied steht unter www.direktorium.bistum-fulda.de ein Liedblatt zum Download bereit.¥p",
        "deceased": "2000 †¥tDr.°Balthasar°Gareis°(Bamberg), Prof., Prälat, GR, Fulda¥p",
        "deceased_more": "1931 †¥tPaul°Berger, Pfarrer°in°Schachtebich¥p1951 †¥tDamian°Herbert, Pfr.i.R., Fulda¥p2000 †¥tDr.°Balthasar°Gareis°(Bamberg), Prof., Prälat, GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "3": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 26.°Woche°im°Jahreskreis – ¥fPriesterdonnerstag¥0f – ¥fTag°der°deutschen°Einheit¥0f¥pw¥tOder ¥fMs um Frieden und Gerechtigkeit¥0f, ¥wMB°1057ff/²1082f, L°und°Ev vom Tag oder aus den AuswL°(ML°VIII°201¥_208)¥0w¥pw¥tOder ¥fMs¥0f: Tg°für Heimat und Vaterland und die bürgerliche Gemeinschaft MB°1054/²1078, Gg°und°Sg°MB°1048/²1070, Präf und Hg „Jesus,°unser°Weg“ (Hg°für Messen für bes.°Anliegen°III), L°und°Ev vom Tag oder aus den AuswL°(ML°VIII°170¥_200)¥pw¥tOder ¥fMs um Priesterberufe¥0f ¥w(MB°1035f/²1057),¥lL°und°Ev vom°Tag oder aus°den°AuswL¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°1017/²1035;°Gg°234/²233;°Sg°1020/²1039¥0w¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute am ¥f„Tag der deutschen Einheit“¥0f möge in den Fürbitten auch für diese Anliegen gebetet werden. Es kann eine geeignete Votivmesse gewählt werden (siehe unten). Auch ökumenische Gottesdienste oder ggf.°Gebetstreffen der Religionen und gemeinsame Begegnungen eignen sich für diesen Tag. Vgl. hierzu: Arbeitshilfe Nr. 170 der DBK: Leitlinien für das Gebet bei Treffen von Christen, Juden und Muslimen. Eine Handreichung der deutschen Bischöfe. 2., überarbeitete und aktualisierte Auflage 24. Juni 2008.¥p¥sHeute am ¥f„Tag der Offenen Moschee“¥0f der Muslime in Deutschland möge in den Fürbitten auch für respektvolle Begegnungen, den notwendigen und aufrichtigen Dialog und das ehrliche und gute Zusammenwirken von Christen und Muslimen für den Schutz und die Förderung von sozialer Gerechtigkeit, der sittlichen Güter sowie des Friedens und der (Religions-)Freiheit für alle Menschen gebetet werden.¥p¥s¥fZum Priesterdonnerstag (monatl. Gebetstag für geistliche Berufe):¥0f Die Votivmesse ist erlaubt. – Fürbitte(n) um Priesterberufungen. – Thema: „Doch°ich, ich weiß: Mein Erlöser lebt.“ (Ijob°19¥v,25¥0v). Intention: Ordensleute.¥p",
        "deceased": "1998 †¥tIgnatz°Kleweta°(Olmütz), Pfr.i.R., Vöhl¥p",
        "deceased_more": "1958 †¥tAugust°Gremler, Pfr.i.R., Schachtebich¥p1961 †¥tJohannes°Böhm,°Pfarrkurat°in°Cornberg¥p1993 †¥tKarl°Bott, Pfr.i.R., GR, Bad°Salzschlirf¥p1998 †¥tIgnatz°Kleweta°(Olmütz), Pfr.i.R., Vöhl¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "4": {
        "liturgy": "¥fFr¥0f¥t¥fHl. Franz von Assisi¥0f, Ordgr, ¥fGed¥0f – ¥fHerz¥-Jesu¥-Freitag¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged,°BuM°eig¥pw¥tOder ggf.°¥fVotivmesse vom hl. Herzen Jesu¥0f¥l¥w(MB°1100f/²1132f oder 257ff), Herz¥-Jesu¥-Präf,¥lL°und°Ev°vom°Tag oder aus°den°AuswL¥0w¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute endet die „Ökumenische Schöpfungszeit“ (vgl. Hinweis zum 1.°September).¥p¥sHeute eignet sich das Lied zum Sonnengesang des hl.¥°Franz von Assisi GL°466 oder das Gebet dazu GL°19¥v,2¥0v mit dem Kehrvers GL°559.¥p¥s¥fZum°Herz¥-Jesu¥-Fr:¥0f Die Votivmesse ist nur bedingt erlaubt (s.°o.°Kap.°III.D.3.).¥p",
        "deceased": "",
        "deceased_more": "1943 †¥tFranz°Winter, Pfarrer°in°Flieden¥p1961 †¥tFranz°Sittarz°(Köln), Pfarrer°in°Bad°Langensalza¥-Land¥p1986 †¥tP.°Paul°Schilling°SDB, Pfarrer°in°Oberkaufungen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "5": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 26.°Woche°im°Jahreskreis – ¥fHerz¥-Mariä¥-Samstag¥0f¥pw¥tOder ¥fhl. Maria Faustina Kowalska¥0f, Ord, ¥fGed¥0f¥be¥w¥fMs¥0f: HR°/°Com°Jgfr oder MFr°9, Präf°Jgfr¥l¥vL:¥0v¥tGen°12¥v,1¥_4a¥0v¥t¥fML°VII¥0f°°°°3/ᴺ°3¥l¥vAPs:¥0v¥tPs°22¥v,23¥_24b.25.26¥_27.30c¥_32¥0v°(R:°¥v27b¥0v)¥tvgl.°86/ᴺ87¥l¥vREv:¥0v¥tMt°23¥v,11.12b¥0v¥t–––¥l¥vEv:¥0v¥tJoh°19¥v,25¥_30¥0v¥t498/ᴺ512¥0w¥pw¥tOder ¥fVotivmesse vom Unbefleckten Herzen Mariä¥0f, ¥wMBm°und°MLm°Nr.°28,°eig°Präf¥0w¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg+Gg°197f/²195f;°Sg°290¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Herz¥-Mariä¥-Sa:¥0f Die Votivmesse ist erlaubt.¥p",
        "deceased": "1999 †¥tPaul°Gray, Pfr.i.R., GR, Hünfeld¥p",
        "deceased_more": "1928 †¥tAdolf°Schmidt, Pfarrer°in°Schleid¥p1934 †¥tDDr.°Konrad°Weber, Dr.°theol.°et°phil., Pfr.i.R., Ehrendomkapitular,°Marburg¥p1936 †¥tJoseph°Selzer, Dechant, Pfarrer°in°Fritzlar¥p1945 †¥tBruno°Werner, Pfr.i.R., Diedorf¥p1993 †¥tHermann¥-Josef°Siebrand, Pfr.i.R., Lenkrode¥p1999 †¥tPaul°Gray, Pfr.i.R., GR, Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "6": {
        "liturgy": "¥fSo¥0f¥a¥t¥f27. Sonntag im Jahreskreis¥0f – ¥fErntedanksonntag¥0f¥lPsalt:°III.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥pw/g¥tOder ¥fMs zum Erntedank¥0f, MB°1066f/²1094f, Gl,°Cr, bes. Fürbitten, SoPräf°V, n.B.°Hg°IV, FSS Benediktionale°S.°71 (= MB°536f „An Neujahr“, jedoch ohne die Worte „im neuen Jahr“ im ersten Abschnitt) oder MB°566f; LL und Ev vom So oder aus den AuswL ML°VIII°245¥_252; 286ff¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fHeute¥0f wird das ¥fErntedankfest¥0f gefeiert. Es kann das ¥fMessformular „Zum Erntedank“¥0f genommen werden. Dabei geschieht die ¥fSegnung der Erntegaben durch das Gabengebet¥0f (vgl. Benediktionale°S.°66). In allen Messen werden besondere Fürbitten gehalten (z.B. Benediktionale°S.°69f, jedoch ohne das Vaterunser vor dem Abschlussgebet). Es wird empfohlen, an die Hauptgottesdienste eine ¥fkurze Dankandacht mit Te°Deum und sakramentalem Segen¥0f anzuschließen, wenn für diesen Anlass nicht noch eine eigene Feier vorgesehen ist. Erfolgt die Segnung der Erntegaben nicht in der Messfeier, sondern in einem eigenen Wortgottesdienst, kann die Segensfeier aus dem s.°Benediktionale°Nr.°10,°S.°65ff, genommen werden.¥p¥sIn der kommenden Woche werden die ¥fHerbstquatember¥0f (vgl.°GOK°45¥_47) an einem (oder mehreren) festfreien Werktag(en) (nach Wahl) begangen als Tag(e) religiöser Erneuerung. ¥fThema: Not in der Welt¥0f. Messformular: Quatembermesse, MB°269, oder eine der „Messen für besondere Anliegen, z.°B. Nr.°15, 28, 29 oder 38 (MB°1050¥_1079/²1072¥_1109), Wt-Präf, Farbe: violett. L°u°Ev:°Perikopen für besondere Anliegen, ML°VIII°144¥_160; 252¥_285. Durch Fasten, Buße und Werke der Nächstenliebe kann jeder Christ persönlich nach Erneuerung streben.¥p¥sDer ¥fGedenktag des hl. Bruno¥0f entfällt in diesem Jahr.¥p",
        "deceased": "2010 †¥tWolfram°Fröhlig,°Diakon,°Petersberg¥-Untergötzenhof¥p",
        "deceased_more": "1956 †¥tJohannes Dröder, Pfr.i.R., Berlin¥-Lichtenrade¥p2010 †¥tWolfram°Fröhlig,°Diakon,°Petersberg¥-Untergötzenhof¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "7": {
        "liturgy": "¥fMo¥0f¥t¥fUnsere Liebe Frau vom Rosenkranz¥0f, ¥fGed¥0f¥pw¥t¥fMs vom Ged¥0f, MarPräf – Off°vom°Ged,°LuV°eig ¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1960 †¥tRichard°Schulte, Pfr.i.R., Erfurt¥p1964 †¥tKarl°Altmann°(Leitmeritz), Pfarrer°in°Trutzhain¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "8": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 27.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°217/²215;°Gg°125/²123;°Sg°219/²218¥0w¥p",
        "notes": "",
        "deceased": "2023 †¥tAlfred°Döppenschmitt, Pfr.i.R., GR, Fulda¥p",
        "deceased_more": "1986 †¥tJohannes°Rhode, Pfr.i.R., Küllstedt¥p1993 †¥tJohannes°Haparta°(Hildesheim), Pfr.i.R., Kirchhain¥p2023 †¥tAlfred°Döppenschmitt, Pfr.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "9": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 27.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Gunther von Thüringen¥0f, Einsiedler, ¥fGed¥0f°(FD)¥bf¥w¥vL:¥0v¥tPhil°3¥v,8¥_14¥0v¥tML°VI°514/ᴺ504¥l¥vAPs:¥0v¥tPs°15¥v,2¥_3.4.5¥0v°(R:°vgl.°¥v1b¥0v)¥t863/ᴺ413¥l¥vREv+Ev:¥0v°Lk°14¥v,25¥_33¥0v¥t488f/ᴺ472¥0w¥pr¥tOder ¥fhll. Dionysius¥0f, Bi, ¥fund°Gefährten¥0f, Märtt, ¥fGed¥0f¥pw¥tOder ¥fhl. Johannes Leonardi¥0f, Pr, Ordgr, ¥fGed¥0f¥pw¥tOder ¥fMs vom hl. John Henry Newman¥0f, Pr¥be¥w¥fMs¥0f: HR (im Tagesgebet ist ggf. „selig“ durch „heilig“ zu ersetzen)¥l¥vL:¥0v¥t2°Tim°3¥v,14¥0v°¥_°4¥v,2¥0v¥t¥fML°C/III¥0f°370/ᴺ379¥l¥vAPs:¥0v¥tPs°27¥v,1.4.6b+8.13¥_14¥0v(R:°¥v1a¥0v)¥tvgl.°543/ᴺ555¥l¥vREv:¥0v¥tJoh°8¥v,31b¥_32¥0v¥t–––¥l¥vEv:¥0v¥tLk°1¥v,1¥_4;¥0v°4¥v,14¥_21¥0v¥t258/ᴺ264¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°309,13;°Gg°349,4;°Sg°528,10¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Gedenktag des hl. Johannes Leonardi¥0f: Der Heilige wurde von Papst Benedikt XVI. 2006 zum Patron der Apotheker ernannt.¥p",
        "deceased": "2009 †¥tJohannes°Wagner, Pfr.i.R., Hünfeld¥-Mackenzell¥p",
        "deceased_more": "1958 †¥tAloys°Heinebrodt, Dechant, Pfarrer°in°Weimar¥p1969 †¥tP.°Ludolf°Janssen°OFMCap, Pfarrer°in°Cornberg¥p1971 †¥tPius°Most, Pfr.i.R., GR, Fulda¥p1990 †¥tEdmund°Döring, Pfr.i.R., Heiligenstadt¥p2009 †¥tJohannes°Wagner, Pfr.i.R., Hünfeld¥-Mackenzell¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "10": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 27.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg+Gg°214f/²213f;°Sg°525,2¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1954 †¥tWilhelm°Pfeifer,°StR°i.R., Pfarrkurat°in°Elters¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "11": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 27.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Johannes XXIII.¥0f, Pp, ¥fGed¥0f¥be¥w¥fMs¥0f: HR°/°Com°Ht°1+2°– ¥fML°VI°ᴺ646¥0f¥l¥vL:¥0v¥tEph°4¥v,1¥_7.11¥_13¥0v¥tML°VI°602¥l¥vAPs:¥0v¥tPs°23¥v,1¥_3.4.5.6¥0v°(R:°¥v1¥0v)¥t598¥l¥vREv:¥0v¥tJoh°10¥v,14¥0v¥t598¥l¥vEv:¥0v¥tJoh°21¥v,1.15¥_17¥0v¥t539¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°313,22;°Gg°234/²233;°Sg°208,2/²206,2¥0w¥p",
        "notes": "",
        "deceased": "2006 †¥tHubert°Caris, Pfr.i.R., Münchhausen¥p",
        "deceased_more": "1990 †¥tHeinrich°Richard, Pfarrer°in°Bad°Liebenstein¥p2006 †¥tHubert°Caris, Pfr.i.R., Münchhausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "12": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 27.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°303f¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1938 †¥tAugust°May, Pfarrer°in°Bernterode/Krs.°Worbis¥p1963 †¥tMaximilian°Zips°(Olmütz), Pfr.i.R., Eckardroth/Krs.°Schlüchtern¥p1992 †¥tHerwig°Bartel, Pfarrer°in°Bad°Berka¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "13": {
        "liturgy": "¥fSo¥0f¥a¥t¥f28. Sonntag im Jahreskreis¥0f¥lPsalt:°IV.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fLektionar zum StB II/8¥rLektStB  II/8¥0r¥0f¥p",
        "deceased": "1997 †¥tHermann¥-Josef°Wagner, GR, Pfarrer°in°Borken¥p",
        "deceased_more": "1997 †¥tHermann¥-Josef°Wagner, GR, Pfarrer°in°Borken¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "14": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 28.°Woche°im°Jahreskreis¥pr¥tOder ¥fhl. Kallistus I.¥0f, Pp, Märt, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°187/²185;°Gg°234/²233;°Sg°200/²198¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1924 †¥tAdam°Kramm, Pfarrer°in°Schröck¥p1932 †¥tOtto°Höppner, Pfr.i.R., Struth¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "15": {
        "liturgy": "¥fDi¥0f¥t¥fHl. Theresia von Jesus (von Avila)¥0f, Ord, Kl, ¥fGed¥0f¥pw¥t¥fMs von der Hl¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1954 †¥tJohannes°Brzezinka°(Breslau), Pfr.i.R., Niederorschel¥p1971 †¥tJoseph°Faulstich, Pfr.i.R., GR, Fulda¥p1993 †¥tDr.°Heinz°Reinelt°(Breslau), Prof.°em., Prälat,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "16": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 28.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Lullus¥0f, Bi, ¥fGed¥0f (FD)¥bf¥w¥vL:¥0v¥tEz°34¥v,11¥_16¥0v¥tML°VI°597/ᴺ591¥l¥vL°(ggf.°2.°L):¥0v°1°Kor°4¥v,1¥_5¥0v¥t149/ᴺ144¥l¥vAPs:¥0v¥tPs°16¥v,1¥_2+5.7¥_8.9+11¥0v°(R:°vgl.°¥v5a¥0v)¥t633/ᴺ631¥l¥vREv+Ev:¥0v°Joh°17¥v,20¥_26¥0v¥t732f/ᴺ733¥0w¥pw¥tOder ¥fhl. Margareta Maria Alacoque¥0f, Ord, ¥fGed¥0f¥pw¥tOder ¥fhl. Hedwig¥0f, Herzogin, ¥fGed¥0f°(RK/GK) – BuM°eig¥pw¥tOder ¥fhl. Gallus¥0f, Mönch, Einsiedler, Glb, ¥fGed¥0f°(RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°313,24;°Gg°122/²120;°Sg°124/²122¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute ist der Welternährungstag der Vereinten Nationen (UN), auch „Welthungertag“ genannt, und der „Welttag des Brotes“. Papstbotschaft dazu unter www.vativan.va › Botschaften › Welternährungstag ¥p",
        "deceased": "2016 †¥tOtto°Wengenmair, Pfr.i.R., OStR°i.R., Msgr., GR, Eschwege¥p2020 †¥tWincenty°Krzyżak°(Tarnów/Fulda), Pfr.i.R., GR, Żmiąca/Polen¥p",
        "deceased_more": "1977 †¥tP.°Bernhard°Glatzel°SVD, Pfr.i.R., Sankt°Augustin¥p1983 †¥tVinzenz°Ahmann, Pfr.i.R., Ahaus¥-Wüllen¥p1986 †¥tGerd°Büchner, Pfarrer°in°Friedrichslohra¥p2016 †¥tOtto°Wengenmair, Pfr.i.R., OStR°i.R., Msgr., GR, Eschwege¥p2020 †¥tWincenty°Krzyżak°(Tarnów/Fulda), Pfr.i.R., GR, Żmiąca/Polen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "17": {
        "liturgy": "¥fDo¥0f¥t¥fHl. Ignatius von Antiochien¥0f, Bi, Märt, ¥fGed¥0f¥pr¥t¥fMs vom Hl¥0f, n.B.°Hg°I – Off°vom°Ged,°BuM°eig¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1983 †¥tAloys°Schmand,°Caritasdirektor°i.R., Msgr., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "18": {
        "liturgy": "¥fFr¥0f¥t¥qfHl. Lukas¥0f, Evangelist, ¥fFest¥0f¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pr¥t¥fMs eig¥0f, Gl, ApPräf II, FSS:°MB°558¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1935 †¥tLudwig°Hüber, Pfr.i.R., Wirtheim¥p1970 †¥tPaul°Eiberle°(Caratinga/Brasilien), Pfr.i.R., Großrudestedt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "19": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 28.°Woche°im°Jahreskreis¥pr¥tOder ¥fhll. Johannes de Brébeuf, Isaac Jogues¥0f, Prr, ¥fund°Gefährten¥0f, Märtt, ¥fGed¥0f¥pw¥tOder ¥fhl. Paul vom Kreuz¥0f, Pr, Ordgr, ¥fGed¥0f¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°309,13;°Gg°348,3;°Sg°526,6¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1949 †¥tWilhelm°Engels, Pfr.i.R., Alsberg¥p1957 †¥tAnton°Nitzge, Pfr.i.R., Volkmarsen¥p1968 †¥tP.°Johann¥-Adam°Hüttel°OMI, Pfarrer°in°Wechmar¥p1971 †¥tReinhold°Goy°(Breslau), Pfarrer°in°Niederkalbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "20": {
        "liturgy": "¥fSo¥0f¥a¥t¥f29. Sonntag im Jahreskreis¥0f¥lPsalt:°I.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweis:¥0f ¥sDer ¥fGedenktag des hl. Wendelin¥0f entfällt in diesem Jahr.¥p",
        "deceased": "1996 †¥tDr.°Winfried°Leinweber,°Regionaldechant, Dechant, Pfarrer°in°Marburg,°St.°Johannes°Ev.¥p",
        "deceased_more": "1950 †¥tP. Dr.°Desiderius°Breitenstein°OFM, Prof., Fulda¥p1956 †¥tHeinrich°Bergmann, Pfr.i.R., Fulda¥p1981 †¥tDr.°Franz°Alois°Eckert°(Breslau), Pfr.i.R., Worbis¥p1996 †¥tDr.°Winfried°Leinweber,°Regionaldechant, Dechant, Pfarrer°in°Marburg,°St.°Johannes°Ev.¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "21": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 29.°Woche°im°Jahreskreis¥pr¥tOder ¥fhl. Ursula und°Gefährtinnen¥0f, Märtt, ¥fGed¥0f°(RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°132/²130;°Gg°170/²168;°Sg°528,12¥0w¥p",
        "notes": "",
        "deceased": "2001 †¥tGregor°Paul, Pfr.i.R., GR, Amöneburg¥-Roßdorf¥p",
        "deceased_more": "1970 †¥tHeinrich°Müller, Pfr.i.R., GR, Dechant,°Fulda¥p2001 †¥tGregor°Paul, Pfr.i.R., GR, Amöneburg¥-Roßdorf¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "22": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 29.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Johannes Paul II.¥0f, Pp, ¥fGed¥0f¥be¥w¥fMs¥0f: HR²ᶠᶠ°/°Com°Ht°1+2°– ¥fML°VI°ᴺ675¥0f¥l¥vL:¥0v¥tJes°52¥v,7¥_10¥0v¥tML°VI°678¥l¥vAPs:¥0v¥tPs°96¥v,1¥_2a+2b¥_3.7¥_8.10¥0v°(R:°¥v10a¥0v)¥t510¥l¥vREv+Ev:¥0v°Joh°21¥v,1.15¥_17¥0v¥t539¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°3f/²1f¥0w¥p",
        "notes": "",
        "deceased": "2021 †¥tKarl¥-Peter°Klein, Pfr.i.R., GR, Freigericht¥-Bernbach¥p",
        "deceased_more": "1961 †¥tP.°Konrad°Kletzka°SVD,°Pfarrkurat°in°Trendelburg¥p1983 †¥tPaul°Vogt, Pfr.i.R., Bad°Bellingen¥p2021 †¥tKarl¥-Peter°Klein, Pfr.i.R., GR, Freigericht¥-Bernbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "23": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 29.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Johannes von Capestrano¥0f, Ordpr, ¥fGed¥0f°(GK/RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°1039f/²1061f¥0w¥p",
        "notes": "",
        "deceased": "1999 †¥tAloys°Fink, Pfr.i.R., GR, Hünfeld¥p",
        "deceased_more": "1945 †¥tFranz°Mehlmann, Dechant, Pfarrer°in°KämmerzelI¥p1976 †¥tP.°Richard°Hauffen°SDB, Pfr.i.R., GR, Lohfelden¥p1978 †¥tAlfons°Smykalla°(Breslau), Pfarrer°in°Wingerode¥p1981 †¥tWilhelm°Wald, GR, Pfarrer°in°Thalau¥p1999 †¥tAloys°Fink, Pfr.i.R., GR, Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "24": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 29.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Antonius Maria Claret¥0f, Bi, Ordgr, ¥fGed¥0f ¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°316,30;°Gg°98/²96;°Sg°100¥0w¥p",
        "notes": "",
        "deceased": "2003 †¥tAnton°Schmitt, Pfr.i.R., StR°i.K.i.R., Michelstadt¥p",
        "deceased_more": "1944 †¥tFranz°Emil°Weber, Prof., Lic.°theol., StR°i.R., Kassel¥p1944 †¥tHubert°Biermann, Pfr.i.R., Fulda¥p1954 †¥tKarl°Bub, Pfarrer°in°Kleinsassen¥p1969 †¥tJosef°Redemann, Pfr.i.R., Göttingen¥p2003 †¥tAnton°Schmitt, Pfr.i.R., StR°i.K.i.R., Michelstadt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "25": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 29.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°312,21;°Gg°234/²233;°Sg°200/²198¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1937 †¥tAnton°Genau, Dechant, Pfarrer°in°Rengelrode¥p1953 †¥tKarl°Vatteroth, Pfr.i.R., Kleinbartloff¥p1978 †¥tAnton°Tresp, Pfarrer°in°Großalmerode¥p1980 †¥tHeinrich°Kraut, Pfr.i.R., GR, Eisenach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "26": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 29.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Witta (Albuin)¥0f, Bi (FD), ¥fGed¥0f¥bf¥w¥vL:¥0v¥tEph°4¥v,1¥_7.11¥_13¥0v¥tML°VI°602/ᴺ598¥l¥vAPs:¥0v¥tPs°96¥v,1¥_2.3+7.8+10¥0v°(R:°¥v¥0v)¥t645/ᴺ644¥l¥vREv+Ev:¥0v°Lk°5¥v,1¥_11¥0v¥t645/ᴺ645¥0w¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°313,22;°Gg°348,2;°Sg°528,11¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "1995 †¥tJosef°Albinger, Pfr.i.R., GR, Poppenhausen¥p2021 †¥tDr.°Werner°Marschall°(Görlitz/Fulda), Prof.°em., Dr.°theol.°habil., Msgr., Fulda¥-Horas¥p2022 †¥tAlois°Zimmer, OStR°i.K.i.R., GR, Kassel¥p",
        "deceased_more": "1976 †¥tHeinz°Friedrich, Pfarrer°in°Heldrungen¥p1995 †¥tJosef°Albinger, Pfr.i.R., GR, Poppenhausen¥p2021 †¥tDr.°Werner°Marschall°(Görlitz/Fulda), Prof.°em., Dr.°theol.°habil., Msgr., Fulda¥-Horas¥p2022 †¥tAlois°Zimmer, OStR°i.K.i.R., GR, Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "27": {
        "liturgy": "¥fSo¥0f¥a¥t¥f30. Sonntag im Jahreskreis¥0f – ¥fWeltmissionssonntag¥0f¥lPsalt:°II.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥pg¥tOder ¥fVotivmesse für die Ausbreitung des Evangeliums¥0f (MB°1047ff/²1069ff), Gl,°Cr, bes.°Fürbitten, SoPräf°I°oder°III°oder°VIII oder Präf und Hg°„Jesus,°unser°Weg“ (Hg°für Messen für besondere Anliegen°III), FSS:°MB°552, L°und°Ev vom So oder aus den AuswL (ML°VIII°133¥_144).¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fHeute wird der Weltmissionssonntag begangen.¥0f Im Hauptgottesdienst kann die ¥fVotivmesse für die Ausbreitung des Evangeliums¥0f genommen werden. Papstbotschaft zum Weltmissionssonntag, Arbeitshilfe, besondere Fürbitten.¥p¥s¥fHeute wird hingewiesen auf die vollkommenen Ablässe, die zu Allerheiligen und Allerseelen für Verstorbene gewonnen werden können.¥0f Zur Gewinnung gehören:¥pa)°¥fdie allgemeinen Bedingungen¥0f: sakramentale Beichte, Kommunionempfang und Gebet nach der Meinung des Hl. Vaters (Vaterunser und Glaubensbekenntnis). Diese Bedingungen können auch mehrere Tage vor oder nach dem Ablasstag erfüllt werden. Es muss aber jede Anhänglichkeit an eine Sünde ausgeschlossen sein;¥pb) ¥fdie besonderen Bedingungen¥0f:¥p(1)°¥fein Besuch in einer Kirche oder Kapelle¥0f am Allerseelentage, jeweils schon ab Mittag des Vortages, mit Gebet (Vaterunser und Glaubensbekenntnis); ¥p(2)°¥foder ein Friedhofsbesuch¥0f und dort Gebet für die Verstorbenen.¥p¥fDieser Ablass kann an jedem Tag vom 1. bis 8. November gewonnen werden.¥0f Man kann nicht mehrere vollkommene Ablässe an einem Tag gewinnen. Eine Beichte reicht aus, mehrere vollkommene Ablässe an verschiedenen Tagen zu gewinnen, nicht aber eine einzige Kommunion und nicht das einmalige Gebet nach der Meinung des Papstes. Fehlt die volle Disposition oder bleibt eine der Bedingungen unerfüllt, gewinnt man einen Teilablass für die Verstorbenen. Ein solcher kann in diesen und auch an den übrigen Tagen des Jahres durch Friedhofsbesuch wiederholt gewonnen werden (vgl. Enchiridion Indulgentiarum, 3. Aufl. 1986, pag. 74, n. 67, und pag. 52, n. 13).¥p¥s¥fIn der kommenden Nacht endet die Sommerzeit.¥0f¥p",
        "deceased": "2009 †¥tDDr.°Reinhold°Weier, Prof.°em., Trier¥p2016 †¥tErich°Kiel, Pfr.i.R., GR, Haunetal¥-Oberstoppel¥p",
        "deceased_more": "1950 †¥tP.°Karl°Brungs°SJ,°Pfarrvikar°in°Zella¥-Mehlis¥p2009 †¥tDDr.°Reinhold°Weier, Prof.°em., Trier¥p2016 †¥tErich°Kiel, Pfr.i.R., GR, Haunetal¥-Oberstoppel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "28": {
        "liturgy": "¥fMo¥0f¥t¥qfHl. Simon und hl. Judas¥0f, App, ¥fFest¥0f¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pr¥t¥fMs eig¥0f, Gl, ApPräf, n.B.°Hg°I, FSS:°MB°558¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1924 †¥tJoseph°Herbener, Prälat,°Domdechant,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "29": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 30.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°144/²142;°Gg°221/²220;°Sg°214/²212¥0w¥p",
        "notes": "",
        "deceased": "2000 †¥tRudolf°Gollbach, Pfr.i.R., GR, Flieden¥p2000 †¥tKarl°Wiegel, Pfr.i.R., Geisa¥p2007 †¥tP.°Stefan°Krenzer°OFM,°Fulda¥p",
        "deceased_more": "2000 †¥tRudolf°Gollbach, Pfr.i.R., GR, Flieden¥p2000 †¥tKarl°Wiegel, Pfr.i.R., Geisa¥p2007 †¥tP.°Stefan°Krenzer°OFM,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "30": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 30.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°157/²155;°Gg°234/²233;°Sg°296¥0w¥p",
        "notes": "",
        "deceased": "1996 †¥tGeorg°Knappik, Pfr.i.R., Fronhausen¥p1999 †¥tWerner°Linge,°Diakon,°Kassel¥p2011 †¥tJosef°Kesting,°Msgr., Direktor°i.R., Heiligenstadt¥p2022 †¥tDr.°Winfried°Kurzschenkel, OStR°i.K.i.R., Fulda¥p",
        "deceased_more": "1945 †¥tDDr.°Joseph°Flügel, Dr.°theol.°et°phil., Dechant, Pfarrer°in°Weyhers¥p1996 †¥tGeorg°Knappik, Pfr.i.R., Fronhausen¥p1999 †¥tWerner°Linge,°Diakon,°Kassel¥p2011 †¥tJosef°Kesting,°Msgr., Direktor°i.R., Heiligenstadt¥p2022 †¥tDr.°Winfried°Kurzschenkel, OStR°i.K.i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "31": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 30.°Woche°im°Jahreskreis – ¥fPriesterdonnerstag¥0f¥pw¥tOder ¥fhl. Wolfgang¥0f, Bi, ¥fGed¥0f°(RK)¥pw¥tOder ¥fMs um Priesterberufe¥0f ¥w(MB°1035f/²1057),¥lL°und°Ev vom°Tag oder aus°den°AuswL¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°187/²185;°Gg°350,8;°Sg°527,8¥0w¥pw¥t¥kabends:¥0k ggf.°Vorabendmesse°vom°H – ¥f1.°Vp°vom°folg°H¥0f°–°¥f1.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Priesterdonnerstag (monatl. Gebetstag für geistliche Berufe):¥0f Die Votivmesse ist erlaubt. – Fürbitte(n) um Priesterberufungen. – Thema: „Wir°... verfälschen das Wort Gottes nicht, sondern machen die Wahrheit offenbar“ (2°Kor°4¥v,2¥0v). Intention: Gemeinde- und Pastoralreferenten.¥p",
        "deceased": "",
        "deceased_more": "1983 †¥tJosef°Becker, Pfr.i.R., GR, Morsbach/Sieg¥p1991 †¥tWilhelm°Schröer, Pfr.i.R., Hasselroth¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      }
    },
    "11": {
      "1": {
        "liturgy": "¥fFr¥0f¥a¥t¥qhAllerheiligen¥0f, ¥fHochfest¥0f – ¥fHerz¥-Jesu¥-Freitag¥0f¥lTe Deum – Kl.°Hore: eig Ant,°ErgPs¥pw¥t¥fMs eig¥0f, Gl,°Cr, eig°Präf, in°den Hg°I¥_III eig°Einschub, FSS:°MB°560°– 2.°Vp°vom°H°–°2.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fDas Hochfest Allerheiligen ist im Bistum Fulda kirchlich gebotener Feiertag.¥0f Es besteht ¥fApplikations- sowie Sonn- und Feiertagspflicht¥0f (s.°o.°Kap.°I.C.1.).¥p¥sFinden zu Allerheiligen und Allerseelen auf den Friedhöfen ¥fTotengedächtnisse¥0f statt, soll in ihnen die österliche Auferstehungshoffnung zum Ausdruck kommen. Für die ¥fGräbersegnung¥0f s.°Benediktionale°Nr.°11,°S.°72ff.¥p¥sAuf die ¥fGewinnung der vollkommenen Ablässe vom 1. bis 8.°November¥0f kann nochmals hingewiesen werden (vgl. Hinweis vor dem 27. Oktober).¥p¥sWegen des Hochfestes entfällt heute die Verpflichtung zum Freitagsopfer.¥p¥s¥fZum°Herz¥-Jesu¥-Fr:¥0f Die Votivmesse ist nicht erlaubt.¥p",
        "deceased": "2011 †¥tAlbert°Diedrich, Pfr.i.R., OStR°a.D., Msgr., Frasdorf/Chiemgau¥p",
        "deceased_more": "1948 †¥tSimon°Wehner, Pfr.i.R., GR, Poppenhausen¥p1986 †¥tKarl°Doiwa°(Limburg), Pfr.i.R., Frankenberg/Eder¥p1990 †¥tP.°Siegfried°Budniok°OMI, Pfr.i.R., Erfurt¥p2011 †¥tAlbert°Diedrich, Pfr.i.R., OStR°a.D., Msgr., Frasdorf/Chiemgau¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "2": {
        "liturgy": "¥fSa¥0f¥t¥fAllerseelen¥0f – ¥fHerz¥-Mariä¥-Samstag¥0f¥l¥fOff¥0f vom Tag und vom Gedächtnis der Verstorbenen (StB°III°971°und°1269ff; zur°Vp°vgl.°GL°655ff)¥pv/s¥t¥f3 Ms nach Wahl eig¥0f (MB°826–829), Präf von den Verstorbenen, FSS:°MB°564¥l¥w¥fL und Ev:¥0f ML°B/II°428¥_443/ᴺ434¥_449, VI°689¥_705/ᴺ691¥_707 oder VII°401¥_504/ᴺ409¥_518¥0w¥l¥f1.°Vp°vom°So¥0f. Wird die Vp mit dem Volk gefeiert, kann die Vp von Allerseelen (StB°III°971°mit°1295ff) genommen werden (vgl.°GL°655ff). – ¥f1.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fAn Allerseelen darf jeder Priester dreimal zelebrieren.¥0f Dabei darf er für die 2. und 3.°Messe ein Stipendium annehmen, das ungekürzt an den Generalvorstand des Bonifatiuswerkes abzuführen ist. Wer für die 2. und/oder 3.°Messe kein Stipendium hat, möge in der Intention des Bonifatiuswerkes zelebrieren und dies dorthin melden. Wer von diesen Möglichkeiten keinen Gebrauch macht, muss, wenn er mehrmals zelebriert, seine 2.°Messe für alle verstorbenen Christgläubigen, die 3.°nach der Meinung des Papstes applizieren.¥p¥s¥fAn Allerseelen¥0f empfiehlt es sich, bei den Messfeiern oder bei Andachten für die Verstorbenen die ¥fOsterkerze im Altarraum¥0f aufzustellen und zu entzünden.¥p¥sAllerseelen steht liturgisch im Rang eines Hochfestes, ohne jedoch Hochfest zu sein (s.°o.°Kap.°I.B.1.°I.°3.).¥p¥s¥fDie Vorabendmesse zum 31. Sonntag im Jkr. bzw. zum Hochfest der Kirchweihe kann heute nicht gefeiert werden¥0f, da Allerseelen in der Rangordnung der liturgischen Tage höher steht als die Sonntage im Jkr. und das Hochfest der Kirchweihe (s.°o.°Kap.°I.B.1.°I.+II.). ¥fHeutige Abendmessen sind Messfeiern von Allerseelen.¥0f Dies bitte in den Gottesdienstordnungen so veröffentlichen.¥p¥s¥fZum Herz¥-Mariä¥-Sa:¥0f Die Votivmesse ist nicht erlaubt.¥p",
        "deceased": "",
        "deceased_more": "1944 †¥tOtto°Gramm,°Stadtpfarrer°in°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "3": {
        "liturgy": "¥fSo¥0f¥t¥kA. In allen konsekrierten Kirchen, die nicht ihren wirklichen Weihetag begehen und heute das Hochfest der Kirchweihe feiern:¥0k¥p     ¥a¥t¥qhHochfest der Kirchweihe¥0f (FD) – ¥fKirchweihsonntag¥0f¥lOff vom Com Kirchweihe – Te°Deum – Kl.°Hore: Ant°aus°dem°Com, Ps°vom°So°der°1.°Woche¥pw¥t¥fMs aus dem Com Kirchweihe A¥0f (MB°878/²879ff), Gl,°Cr, eig°Präf, in°den Hg°I¥_III eig°Einschub, FSS:°MB°562¥bf¥w¥v1.°L:¥0v¥t1°Kön°8¥v,22¥_23.27¥_30¥0v¥t¥fML°B/II¥0f°463/ᴺ469¥l¥vAPs:¥0v¥tPs°84¥v,2¥_3.4¥_5.10¥_11a¥0v°(R:°vgl.°¥v5¥0v)¥t464/ᴺ470¥l¥v2.°L:¥0v¥tEph°2¥v,19¥_22¥0v¥t474/ᴺ480¥l¥vREv+Ev:¥0v°Joh°2¥v,13¥_22¥0v¥t479/ᴺ485f¥0w ¥l¥f2.°Vp°vom°H°¥_°2.°Kp°vom°So¥0f¥p¥l¥kB. In allen anderen Kirchen:¥0k¥p     ¥a¥t¥f31. Sonntag im Jahreskreis¥0f¥lPsalt:°III.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fHeute ist der allgemeine Kirchweihsonntag¥0f für alle konsekrierten Kirchen im Bistum Fulda, die nicht ihren wirklichen Weihetag begehen und für die nicht ein anderer Sonntag als Kirchweihtag festgesetzt ist. ¥fAlle Messen mit größerer Teilnehmerzahl können heute als „Sollemnitas externa“ von der Kirchweihe gefeiert werden¥0f. In diesem Fall richtet sich auch das Stundengebet danach; Nutzer der Stundenbuch-App des DLI finden die ¥fTexte für das Stundengebet zur heutigen Eigenfeier des Diözesankalenders in der Datei FD-Stundengebet.PDF¥0f (s.°o.°S.°87, Nr.°3).¥p¥sZur Feier des ¥fHochfestes der Kirchweihe¥0f heute ist es angebracht, die ¥fApostelkerzen¥0f anzuzünden. Auch können die ¥fApostelleuchter¥0f geschmückt werden.¥p¥sDie ¥fGedenktage des hl. Hubert¥0f, ¥fdes hl. Pirmin¥0f, ¥fdes hl. Martin von Porres¥0f und ¥fdes sel. Rupert Mayer¥0f entfallen in diesem Jahr.¥p",
        "deceased": "2022 †¥tErwin°Lachnit, Pfr.i.R., GR, Poppenhausen¥-Gackenhof¥p",
        "deceased_more": "1970 †¥tHeinrich°Joseph°Becker,°Stadtpfr.i.R., GR, Ehrendomkapitular,°Ehrendechant,°Fritzlar¥p1985 †¥tP.°Philipp°Rotering°OFMCap,°Pfarrkurat°in°Cornberg¥p1986 †¥tWilhelm°Kirchner,°Diakon°i.R., Erfurt¥p2022 †¥tErwin°Lachnit, Pfr.i.R., GR, Poppenhausen¥-Gackenhof¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "4": {
        "liturgy": "¥fMo¥0f¥t¥fHl. Karl Borromäus¥0f, Bi, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged¥p¥l¥kIn allen konsekrierten Kirchen, die nicht ihren wirklichen Weihetag begehen und heute das Hochfest der Kirchweihe feiern:¥0k¥pw¥t¥kabends:¥0k ggf.°¥fVorabendmesse°vom°H¥0f – ¥f1.°Vp°vom°folg°H¥0f°(Com°Kirchweihe)°– ¥f1.°Kp°vom°So¥0f¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1984 †¥tFranz°Habersack, Pfr.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "5": {
        "liturgy": "¥fDi¥0f¥t¥kA. In allen konsekrierten Kirchen, die nicht ihren wirklichen Weihetag begehen und heute das Hochfest der Kirchweihe feiern:¥0k¥p¥t¥qhHochfest der Kirchweihe¥0f (FD)¥lOff vom Com Kirchweihe – Te°Deum – Kl.°Hore:°Ant°aus°dem°Com,°ErgPs¥pw¥t¥fMs aus dem Com Kirchweihe A¥0f (MB°878/²879ff), Gl,°Cr, eig°Präf, in°den Hg°I¥_III eig°Einschub, FSS:°MB°562¥bf¥w¥v1.°L:¥0v¥t1°Kön°8¥v,22¥_23.27¥_30¥0v¥t¥fML°B/II¥0f°463/ᴺ469¥l¥vAPs:¥0v¥tPs°84¥v,2¥_3.4¥_5.10¥_11a¥0v°(R:°vgl.°¥v5¥0v)¥t464/ᴺ470¥l¥v2.°L:¥0v¥tEph°2¥v,19¥_22¥0v¥t474/ᴺ480¥l¥vREv+Ev:¥0v°Joh°2¥v,13¥_22¥0v¥t479/ᴺ485f¥0w ¥l¥f2.°Vp°vom°H°¥_°2.°Kp°vom°So¥0f¥p¥l¥kB. In allen anderen Kirchen:¥0k¥p     ¥t¥fVom Wochentag¥0f – 31.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°187/²185;°Gg°286;°Sg°526,5¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sZur Feier des ¥fHochfestes der Kirchweihe¥0f heute ist es angebracht, die ¥fApostelkerzen¥0f anzuzünden. Auch können die ¥fApostelleuchter¥0f geschmückt werden.¥p",
        "deceased": "1998 †¥tNorbert°Maas, Pfarrer°in°Breitenberg¥p2012 †¥tDr.°Ludwig°Strecker°(Anápolis/Brasilien), Pfr.i.R., Bischofsvikar,°Michelsneukirchen¥p",
        "deceased_more": "1992 †¥tFranz°Westermann°(Paderborn), Pfr.i.R., Speyer¥p1998 †¥tNorbert°Maas, Pfarrer°in°Breitenberg¥p2012 †¥tDr.°Ludwig°Strecker°(Anápolis/Brasilien), Pfr.i.R., Bischofsvikar,°Michelsneukirchen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "6": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 31.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Leonhard¥0f, Einsiedler, ¥fGed¥0f°(RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°166f/²164f¥0w¥p",
        "notes": "",
        "deceased": "2000 †¥tHerbert°Oberthür, Pfr.i.R., GR, Hünfeld¥p2015 †¥tWolfgang°Heil, Pfr.i.R., Fulda¥p",
        "deceased_more": "1945 †¥tAnton°Fuhlrott, Pfarrer°in°Wüstensachsen¥p1977 †¥tGeorg°Hauck°(Prag/Glatz), Pfarrer°in°Aufenau¥p2000 †¥tHerbert°Oberthür, Pfr.i.R., GR, Hünfeld¥p2015 †¥tWolfgang°Heil, Pfr.i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "7": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 31.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Willibrord¥0f, Bi, Glb, ¥fGed¥0f°(RK) – BuM°eig°–°eig°Präf¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°101/²99;°Gg+Sg°98/²96¥0w¥p",
        "notes": "",
        "deceased": "2007 †¥tDr.°Werner°Jacobs, Prof., Prälat,°Fulda¥p",
        "deceased_more": "1949 †¥tHermann°von°Keitz, Pfarrer°in°Fulda¥-Horas¥p1949 †¥tPius°Botthoff, Pfarrer°in°Leinefelde¥p2007 †¥tDr.°Werner°Jacobs, Prof., Prälat,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "8": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 31.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°313,22;°Gg°351,11;°Sg°525,1¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1937 †¥tLudwig°Braun, Pfarrer°in°Schröck¥p1957 †¥tKarl°Becker, Pfr.i.R., Fulda¥p1982 †¥tGerhard°Stellmach°(Breslau), OStR°i.R., Darmstadt¥p1987 †¥tP.°Maximilian°Hanf°OFM, Pfr.i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "9": {
        "liturgy": "¥fSa¥0f¥t¥qfWeihetag der Lateranbasilika¥0f, ¥fFest¥0f¥lOff: Com Kirchweihe – Te°Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pw¥t¥fMs aus dem Com Kirchweihe 2B¥0f (MB°882), Gl,°eig°Präf, FSS:°MB°562°– ¥fAbendmessen°vom°F°– ¥f2.°Vp°vom°F¥0f°–°¥f1.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fDie Vorabendmesse zum 32. Sonntag im Jkr. kann heute nicht gefeiert werden¥0f, da das Weihefest der Lateranbasilika in der Rangordnung der liturgischen Tage höher steht als die Sonntage im Jkr. (s.°o.°Kap.°VII°A.°2.°II°5.+6.). ¥fHeutige Abendmessen sind Messfeiern vom Fest.¥0f Dies bitte in den Gottesdienstordnungen so veröffentlichen.¥p",
        "deceased": "",
        "deceased_more": "1934 †¥tJoseph°Weinrich, Pfarrer°in°Rüstungen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "10": {
        "liturgy": "¥fSo¥0f¥a¥t¥f32. Sonntag im Jahreskreis¥0f¥lPsalt:°IV.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute werden die Teilnehmer an den Eucharistiefeiern (einschl. der Vorabendmessen) gezählt.¥p¥sDer ¥fGed des hl. Leo des Großen¥0f entfällt in diesem Jahr.¥p",
        "deceased": "2014 †¥tRudolf°Hofmann, Prälat, Domkapitular°i.R., Fulda¥p2023 †¥tRoland°Knott,°Polizeidekan°i.R., OStR°i.K.i.R., Prälat, Hünfeld¥-Kirchhasel¥p",
        "deceased_more": "1927 †¥tPeter°Ignaz°Nau, Pfarrer°in°Steinhaus¥p1940 †¥tFranz°Wand,°Kuratus°in°Langenschwarz¥p1980 †¥tP.°Wilhelm°Görtz°SDB, Pfarrer°in°Kassel,°St.°Andreas¥p2014 †¥tRudolf°Hofmann, Prälat, Domkapitular°i.R., Fulda¥p2023 †¥tRoland°Knott,°Polizeidekan°i.R., OStR°i.K.i.R., Prälat, Hünfeld¥-Kirchhasel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "11": {
        "liturgy": "¥fMo¥0f¥t¥fHl. Martin von Tours¥0f, Bi, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged, Inv°und°LuV°eig¥p",
        "notes": "¥fHinweis:¥0f ¥sFür eine Kinder- und Lichtersegnung bei Martinsfeier und Martinszug s.°Benediktionale°Nr.°12,°S.°79ff. – Im Gesangbuch steht das passende Lied°GL°545.¥p",
        "deceased": "1995 †¥tDDr.°Adalbert°Peter, Prof., Dr.°theol.°et°phil., Prälat,°Hünfeld¥p",
        "deceased_more": "1995 †¥tDDr.°Adalbert°Peter, Prof., Dr.°theol.°et°phil., Prälat,°Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "12": {
        "liturgy": "¥fDi¥0f¥t¥fHl. Josaphat¥0f, Bi, Märt, ¥fGed¥0f¥pr¥t¥fMs vom Hl¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "2001 †¥tDr.°Georg°Karl°Frank, Prof., GR, Esslingen°am°Neckar¥p",
        "deceased_more": "1924 †¥tHeinrich°Lecher, Pfarrer°in°Margretenhaun¥p1944 †¥tFriedrich°Kalbhenn,°Direktor°des°Johannesstiftes°in°Ershausen¥p1954 †¥tAlfons°Smaczny°(Breslau),°Pfarrkurat°in°Triptis¥p1962 †¥tJoseph°von°Keitz, Pfarrer°in°Bauerbach¥p2001 †¥tDr.°Georg°Karl°Frank, Prof., GR, Esslingen°am°Neckar¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "13": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 32.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°1079,2/²1109,2;°Gg°349,4;°Sg°1080/²1110¥0w¥p",
        "notes": "",
        "deceased": "2012 †¥tJohannes°Mühlen°(Mainz), Pfr.i.R., GR, Bad°Brückenau¥p",
        "deceased_more": "1981 †¥tJosef°Strickstrock, Pfr.i.R., GR, Cölbe¥-Bürgeln¥p2012 †¥tJohannes°Mühlen°(Mainz), Pfr.i.R., GR, Bad°Brückenau¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "14": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 32.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg+Gg°19/²17;°Sg°17/²15¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1947 †¥tBartholomäus°Bretthauer, Pfr.i.R., Kirchgandern¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "15": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 32.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Albert der Große¥0f, Bi, Kl, ¥fGed¥0f°(RK/GK)¥pw¥tOder ¥fhl. Leopold¥0f, Markgraf von Österreich, ¥fGed¥0f°(RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°238;°Gg°193/²191;°Sg°239¥0w¥p",
        "notes": "",
        "deceased": "1996 †¥tFranz°Nitschmann°(Breslau), OStR°i.R., GR, Kassel¥p",
        "deceased_more": "1953 †¥tAlfons°Wiegel, Pfr.i.R., Dietges¥p1954 †¥tLudwig°Hüber, Pfr.i.R., Hattenhof¥p1968 †¥tAloys°Mohn°(Ermland), Pfr.i.R., Jena¥p1976 †¥tWalter°Hoboth, Pfr.i.R., Bad°Salzschlirf¥p1976 †¥tJohannes°Riebartsch, Pfr.i.R., Waldfeucht¥-Braunsrath¥p1980 †¥tHeinrich°Kuptz, Pfr.i.R., Hünfeld¥p1996 †¥tFranz°Nitschmann°(Breslau), OStR°i.R., GR, Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "16": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 32.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Margareta¥0f, Königin von Schottland, ¥fGed¥0f¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°313,22;°Gg°351,11;°Sg°528,10 ¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "2007 †¥tAnton°Weczerek°(Prag/Fulda), Pfr.i.R., GR, Aub¥p",
        "deceased_more": "1957 †¥tGeorg°Kind, Pfarrer°in°Flieden¥p1961 †¥tGeorg°Bartsch°(Breslau), Pfarrer°in°Erfurt,°St.°Nicolai¥p2007 †¥tAnton°Weczerek°(Prag/Fulda), Pfr.i.R., GR, Aub¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "17": {
        "liturgy": "¥fSo¥0f¥a¥t¥f33. Sonntag im Jahreskreis¥0f – ¥fVolkstrauertag¥0f – ¥fWelttag°der°Armen¥0f – ¥fDiasporasonntag¥0f¥lPsalt:°I.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, ¥fbes. Fürbitten¥0f, SoPräf oder Präf und Hg „Jesus, der Bruder aller“ (Hochgebet für Messen für besondere Anliegen IV), FSS¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fHeute ist der 8. „Welttag der Armen“.¥0f Zum Ende des „Heiligen Jahres der Barmherzigkeit“ hat Papst Franziskus mit dem Apostolischen Schreiben „Misericordia et misera“ vom 21.°November°2016 unter Kapitel°21 den 33.°Sonntag im Jahreskreis zum neuen „Welttag der Armen“ erklärt und dazu geschrieben: „Das wird die würdigste Vorbereitung für die Feier des Christkönigssonntags sein, denn Jesus Christus hat sich mit den Geringen und Armen identifiziert und wird uns nach den Werken der Barmherzigkeit richten (vgl.°Mt°25¥v,31–46¥0v). Es wird ein Tag sein, der den Gemeinden und jedem Getauften hilft, darüber nachzudenken, wie die Armut ein Herzensanliegen des Evangeliums ist und dass es keine Gerechtigkeit noch sozialen Frieden geben kann, solange Lazarus vor der Tür unseres Hauses liegt (vgl.°Lk°16¥v,19–21¥0v). Dieser Tag wird auch eine echte Form der Neuevangelisierung darstellen (vgl.°Mt°11¥v,5¥0v), durch die das Antlitz der Kirche in ihrer ständigen pastoralen Umkehr erneuert wird, um Zeugin der Barmherzigkeit zu sein.“¥p¥s¥fHeute ist Volkstrauertag.¥0f ¥fBesondere Fürbitten¥0f für die Opfer und Verursacher der Kriege, von Gewalt und Terror in Vergangenheit und Gegenwart.¥p¥s¥fJugendliche mögen besonders zur Feier des Christkönigssonntags und Weltjugendtages am kommenden Sonntag eingeladen werden.¥0f Papst Franziskus hat am Christkönigssonntag, dem 22.°November°2020, die diözesanen Weltjugendtage ab 2021 vom bisherigen Palmsonntag auf das Christkönigshochfest verlegt.¥p¥s¥fHeute¥0f ist der ¥fDiasporasonntag¥0f. – ¥fBesondere Fürbitten¥0f für die Christen in der Zerstreuung.¥p¥sDer ¥fGed der hl. Gertrud von Helfta¥0f entfällt in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1944 †¥tChristoph°Leinweber, Pfr.i.R., Dingelstädt¥p1985 †¥tBernhard°Köhler, Pfr.i.R., Neuhof¥-Dorfborn¥p1992 †¥tJoseph°Leister, Pfr.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "18": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 33.°Woche°im°Jahreskreis – ¥fGebetstag°für°Opfer°sexuellen°Missbrauchs¥0f¥pw¥tOder ¥fWeihetag der Basiliken St.°Peter und St.°Paul zu Rom¥0f, ¥fGed¥0f – BuM°eig – ¥lMs:°¥feig°L¥0f,°ApPräf°I, n.B.°Hg°I, FSS:°MB°556¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°314,25;°Gg+Sg°1081/²1111¥0w¥p",
        "notes": "¥fHinweise:¥0f¥p¥sPapst Franziskus hat angeregt, jährlich einen ¥fGebetstag für Opfer sexuellen Missbrauchs¥0f zu begehen. Die Deutsche Bischofskonferenz hat für Deutschland erstmals 2018 festgelegt, diesen ¥fGebetstag im zeitlichen Umfeld des durch den Europarat initiierten „Europäischen Tages zum Schutz von Kindern vor sexueller Ausbeutung und sexuellem Missbrauch“¥0f zu begehen. Dieser findet bereits seit 2015 jeweils ¥fam 18. November¥0f statt. Ziel des europäischen Tages ist es, Impulse für einen verbesserten Kinderschutz zu geben und die Gesellschaft weiterhin für die Thematik des sexuellen Kindesmissbrauchs zu sensibilisieren. Mit dem Gebetstag für die Opfer sexuellen Missbrauchs unterstützen die deutschen Bischöfe das Anliegen von Papst Franziskus, der den nationalen Bischofskonferenzen seine Bitte zur Einrichtung eines „Tages des Gebetes und der Buße für die Opfer sexuellen Missbrauchs“ übermittelt hatte. Liturgische Materialien sind unter www.dbk.de/themen/sexueller-missbrauch/gebetstag/ abrufbar.¥p¥s¥fZum heutigen Gedenktag der Weihe der Basiliken St. Peter und St. Paul in Rom¥0f eignet sich das Lied ¥fGL°873, bes. Str.°3+4¥0f, auch nach Melodie GL°280 singbar.¥p",
        "deceased": "2002 †¥tRudolf°Montag, Pfr.i.R., Msgr., GR, Heiligenstadt¥p",
        "deceased_more": "1985 †¥tPaul°Motz, Pfr.i.R., Weilheim°in°Oberbayern¥p2002 †¥tRudolf°Montag, Pfr.i.R., Msgr., GR, Heiligenstadt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "19": {
        "liturgy": "¥fDi¥0f¥t¥qfHl. Elisabeth von Thüringen¥0f, ¥fZweitpatronin der Diözese¥0f, ¥fFest¥0f°(FD/RK;°GK:°17.°Nov.)¥lTe Deum – Kl.°Hore: eig°Ant (FD,°dt.°und°lat.°Text), Ps°vom°Wt¥pw¥t¥fMs eig¥0f (MB 844/²846 ¥fmit Gl¥0f), eig°Präf, FSS:°MB°560¥bf¥wML°VI°748/ᴺ747 oder:¥l¥vL:¥0v¥tJes°58¥v,6¥_11¥0v¥tML°VI°548/ᴺ539¥l¥vL°(ggf.°2.°L):¥0v°2°Kor°9¥v,6¥_10¥0v¥t512/ᴺ502¥l¥vAPs,°REv°und°Ev:¥0v°¥tFDL°30f¥0w¥p",
        "notes": "¥fHinweise:¥0f¥p¥sNutzer der Stundenbuch-App des DLI finden die ¥fTexte für das Stundengebet zur heutigen Eigenfeier des Diözesankalenders in der Datei FD-Stundengebet.PDF¥0f (s.°o.°S.°87, Nr.°3).¥p¥sZum Fest der hl. Elisabeth finden sich folgende ¥fGesänge und Gebetstexte im Gotteslob¥0f: Lieder GL°878 (auch nach der Melodie von GL°543 singbar) und 879; Vesper zum Fest GL°955¥_957; Morgen- und Abendlob zum Fest GL°958f; Gebetstext GL°962¥v,4f¥0v (eventuell als Fürbitten). Auch der Hymnus zur Vesper aus den „Eigenfeiern der Diözese Fulda – Stundengebet“ kann nach der Melodie von GL°339 oder 485 als Gemeindelied gesungen werden (Liedblatt zum Download auf www.direktorium.bistum-fulda.de).¥p",
        "deceased": "",
        "deceased_more": "1937 †¥tChrysostomus°Kiesler, Dechant, Pfarrer°in°Eckweisbach¥p1959 †¥tAugust°Bode, Pfarrer°in°Wachstedt¥-Hagis¥p1981 †¥tBruno°Puscher°(Breslau), Pfr.i.R., Uelzen¥p1986 †¥tMichael°Sauer, Pfr.i.R., Kamenz¥p1988 †¥tHeinrich¥-Julius°Tries°(Köln), Pfr.i.R., Haina°(Kloster)¥p1990 †¥tKarl°Rudolph, Pfr.i.R., Kirchhain¥-Emsdorf¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "20": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 33.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°247;°Gg°99/²97;°Sg°111/²109¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sEvangelische Christen begehen heute den ¥fBuß- und Bettag¥0f.¥p",
        "deceased": "2000 †¥t¥fDr.°Eduard°Schick¥0f, Prof., Dr. Dr.°h.c., Bischof°von°Fulda°(1974¥_1982)¥p2007 †¥tRichard°Fick, Pfr.i.R., GR, Geisa¥p2011 †¥tPaul°Moritz, Pfr.i.R., GR, Felsberg¥-Gensungen¥p",
        "deceased_more": "1952 †¥tBernhard°Gischarowski°(Ermland),°Erzpriester, Pfr.i.R., Wetter¥p1973 †¥tP.°Eugen°Eggert°OP, Pfarrer°in°Haueda¥p2000 †¥t¥fDr.°Eduard°Schick¥0f, Prof., Dr. Dr.°h.c., Bischof°von°Fulda°(1974¥_1982)¥p2007 †¥tRichard°Fick, Pfr.i.R., GR, Geisa¥p2011 †¥tPaul°Moritz, Pfr.i.R., GR, Felsberg¥-Gensungen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "21": {
        "liturgy": "¥fDo¥0f¥t¥fUnsere Liebe Frau in Jerusalem¥0f (Darstellung°der°sel.°Jgfr.°Maria), ¥fGed¥0f¥pw¥t¥fMs vom Ged¥0f, MarPräf – Off°vom°Ged,°BuM°eig¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1946 †¥tJoseph°Kehl, Pfr.i.R., Rüdenschwinden¥p1961 †¥tRudolf°Dominka, Pfarrer°in°Beuren/Eichsfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "22": {
        "liturgy": "¥fFr¥0f¥t¥fHl. Cäcilia¥0f, Jgfr, Märt, ¥fGed¥0f¥pr¥t¥fMs von der Hl¥0f, n.B.°Hg°I – Off°vom°Ged,°BuM°eig¥p",
        "notes": "",
        "deceased": "1999 †¥tEugen°Böhm, Pfr.i.R., GR, Bad°Soden¥-Salmünster¥p2019 †¥tEmil°Wiegand, Pfr.i.R., GR, Kassel¥p",
        "deceased_more": "1953 †¥tIgnaz°Vocke, Pfr.i.R., Heiligenstadt¥p1999 †¥tEugen°Böhm, Pfr.i.R., GR, Bad°Soden¥-Salmünster¥p2019 †¥tEmil°Wiegand, Pfr.i.R., GR, Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "23": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 33.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Kolumban¥0f, Abt, Glb, ¥fGed¥0f°(RK/GK)¥pr¥tOder ¥fhl. Klemens I.¥0f, Pp, Märt, ¥fGed¥0f – n.B.°Hg°I¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°316,30;°Gg°224/²223;°Sg°120/²118¥0w¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom H¥0f – ¥f1.°Vp°vom°folg°H¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1971 †¥tRichard°Brodmann, Pfr.i.R., GR, Spahl/Rhön¥p1989 †¥tNorbert°Weidlich°(Breslau), Pfr.i.R., Alzenau¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "24": {
        "liturgy": "¥fSo¥0f¥a¥t¥qhChristkönigssonntag¥0f, ¥fHochfest – Diözesaner°Weltjugendtag¥0f¥l(letzter (34.) Sonntag im Jahreskreis) – Te°Deum – Kl.°Hore:°eig°Ant,°Ps°vom°So°der°I.°Woche¥pw¥t¥fMs eig¥0f (MB°261ff), Gl,°Cr, eig°Präf, FSS:°MB°548/I¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fHeute wird der diözesane Weltjugendtag begangen.¥0f Papst Franziskus hat die diözesanen Weltjugendtage ab 2021 vom Palmsonntag auf das Christkönigshochfest verlegt. Jugendliche mögen besonders zur Feier des Christkönigsfestes und Weltjugendtages eingeladen werden.¥p¥sDer ¥fGedenktag der hll. Andreas Dung-Lac und Gefährten¥0f entfällt in diesem Jahr.¥p¥sHeute ist der ¥fGedenktag des hl. Chrysogonus¥0f, der um das Jahr 303 das Martyrium erlitten hat. Er gehört zu den seit alten Zeiten verehrten Heiligen, die im Römischen Messkanon genannt werden, deren Gedenktag heute aber nicht mehr im ARK verzeichnet ist. Durch die ¥fWahl des Hg°I¥0f kann sein Gedächtnis weiter geehrt werden.¥p",
        "deceased": "2015 †¥tP.°Matthias°Kircher°OFM,°GR¥p2020 †¥tP.°Flavian°Ascher°OFMCap,°Deggingen¥p",
        "deceased_more": "2015 †¥tP.°Matthias°Kircher°OFM,°GR¥p2020 †¥tP.°Flavian°Ascher°OFMCap,°Deggingen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "25": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 34.°Woche°im°Jahreskreis – Psalt:°II.°Woche¥pr¥tOder ¥fhl. Katharina von Alexandrien¥0f, Jgfr, Märt, ¥fGed¥0f°(GK/RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°318,37;°Gg°350,9;°Sg°208,1/²206,1¥0w¥p",
        "notes": "",
        "deceased": "2018 †¥tHelmut°Wolf, Pfr.i.R., GR, Bad°Sooden¥-Allendorf¥p",
        "deceased_more": "1952 †¥tDDr.°Konrad°Lübeck, Prof., Dr.°theol.°et°phil., OStR°i.R., Prälat,°Fulda¥p1972 †¥tAlexander°Werthmüller, Pfr.i.R., GR, Pilgerzell¥p1983 †¥tFranz°Radtke°(Berlin), Pfr.i.R., Msgr., GR, Bad°Karlshafen¥p2018 †¥tHelmut°Wolf, Pfr.i.R., GR, Bad°Sooden¥-Allendorf¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "26": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 34.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Konrad und hl.°Gebhard¥0f, Bi, ¥fGed¥0f°(RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°314,25;°Gg+Sg°296¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1950 †¥tValentin°Ramb, Pfarrer°in°Gersfeld¥p1964 †¥tDr.°Gregor°Nüdling, Dr.°phil., Dechant, Pfarrer°in°Marburg,°St.°Johannes°Ev.¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "27": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 34.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°238f¥0w¥p",
        "notes": "",
        "deceased": "2013 †¥tP.°Hubert°Aloys°Fösges°OFMCap, GR, Münster¥p",
        "deceased_more": "1951 †¥tJulius°Loidold°(Brünn), Pfr.i.R., Immenhausen¥p2013 †¥tP.°Hubert°Aloys°Fösges°OFMCap, GR, Münster¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "28": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 34.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg+Gg°133/²131;°Sg°527,8¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "29": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 34.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°297f¥0w¥p",
        "notes": "",
        "deceased": "2001 †¥tKlaus°Müller, Pfarrer°in°Zella/Rhön¥p2022 †¥tP.°Alban°Schmitt°OFMCap,°Werne¥p",
        "deceased_more": "1954 †¥tLeo°Herbert,°Ehrendomkapitular, Dechant, Pfarrer°in°Bad°Hersfeld¥p1984 †¥tKurt°Heinz°(Breslau), Pfr.i.R., GR, Steinau¥-Ulmbach¥p2001 †¥tKlaus°Müller, Pfarrer°in°Zella/Rhön¥p2022 †¥tP.°Alban°Schmitt°OFMCap,°Werne¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "30": {
        "liturgy": "¥fSa¥0f¥t¥qfHl. Andreas¥0f, Ap, ¥fFest¥0f¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pr¥t¥fMs eig¥0f, Gl, ApPräf, n.B.°Hg°I, FSS:°MB°558¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1952 †¥tJoseph°Nüdling, Pfarrer°in°Florenberg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "vor einer etwaigen Vorabendmesse und der Vesper:¥l¥fEnde des alten Kirchenjahres¥0f¥j¥fADVENTSZEIT¥0f¥jDie Adventszeit hat einen dreifachen Charakter. Sie ist erstens Vorbereitungszeit auf die weihnachtlichen Hochfeste mit ihrem ¥fGedächtnis des ersten Kommens des Gottessohnes¥0f zu den Menschen. Zweitens ist sie eine besondere Zeit der ¥fAufmerksamkeit und Wachsamkeit für die Ankunft Christi heute¥0f, an jedem Tag, mitten im Alltag und im menschlichen Leben. Und drittens lenkt sie die Herzen zugleich durch dieses Gedenken an die erste Ankunft des Herrn, die Vorbereitung auf Weihnachten und sein tägliches neues (An-)Kommen hin zur ¥fErwartung der Ankunft Christi am Ende der Zeiten¥0f. Unter allen drei Gesichtspunkten ist die Adventszeit ¥feine Zeit wachsamer, hingebender und freudiger Erwartung¥0f.¥p¥p¥fBeginn des neuen Kirchenjahres¥0f¥lmit der 1. Vesper bzw. der Vorabendmesse zum°1.°Adventssonntag¥jEs°beginnt°das°¥fLesejahr°C¥0f¥lfür°die°Messperikopen°an°den Sonntagen°(¥fML°C/III¥0f).¥pEs°beginnt°das°¥fLesejahr°I¥0f¥lder°Lektionar-Faszikel°zum°StB (¥fLektionar°zum°StB°I/1¥0f).¥pPerikopen an den Wochentagen: ¥fML°IV¥0f.¥p¥fStB¥0f und ¥fLitHor¥0f: ¥fBand I¥0f.¥p¥fHinweise:¥0f¥p¥s¥fDie Sonn- und Wochentage des Advent¥0f haben jeweils ein eigenes Offizium. Vor dem Off des 1.°AdvSo sind Hymnen für den ersten Teil der Adventszeit (bis 16.°Dezember) angegeben (StB°I°3ff).¥p¥sAm Schluss der Komplet steht in der Advents- und Weihnachtszeit die Marianische Antiphon ¥f„Alma Redemptoris Mater“¥0f (GL°666¥v,1¥0v) bzw. ¥f„Erhabene Mutter des Erlösers“¥0f (vgl.°GL°530).¥p¥s¥fDas „Gloria“ entfällt an den Sonntagen der Adventszeit.¥0f¥p¥sSofern nichts anderes angegeben ist, wird bis zum 16.°Dez. in der Regel eine der Adventspräfationen°I¥_IV genommen, vom 17.°bis 24.°Dez. aber vor allem Adventspräfation°V.¥p¥sDie ¥fMarienmesse im Advent (Roratemesse)¥0f ist unter den in der Einführung zum Direktorium  (s.°o.°Kap.°III.D.3.) genannten Voraussetzungen bis zum 16.°Dez. gestattet außer an Sonntagen, Hochfesten und Festen. MB°890f mit den laufenden Tageslesungen, oder MBm und MLm Nrr.°1¥_3; Farbe: weiß.¥p¥sIn der kommenden Woche werden die ¥fWinterquatember¥0f an einem oder mehreren Tagen (nach Wahl) begangen als Tag(e) religiöser Erneuerung. ¥fThema: Friede¥0f. Vorschlag für die Wahl des Messformulars: Quatembermesse, MB°265, oder Nr.°17, 21 oder°22 aus den „Messen für besondere Anliegen“ (MB°1054¥_1059/²1078¥_1084), AdvPräf, Farbe: violett. LL und Evv: Perikopen für besondere Anliegen, ML°VIII°201¥_217.¥p¥s¥fDer Blumenschmuck und die Musik¥0f mögen im Advent sehr gemäßigt sein. Die Musik soll auf Weihnachten vorbereiten.¥p¥sZur ¥fSegnung des Adventskranzes/der (mitgebrachten) Adventskränze¥0f s.°Benediktionale°Nr.°1,°S.°25ff oder GL°24.¥p",
        "vig_liturgy": "¥r(30)¥0r¥#v¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f°– ¥f1.°Vp°vom°So¥0f°(StB°I°10ff) – 1. Kp vom So¥p¥p"
      }
    },
    "12": {
      "1": {
        "liturgy": "¥fSo¥0f¥a¥t¥f1. Adventssonntag¥0f¥lPsalt:°I.°Woche°–°Te°Deum¥pv¥t¥fMs eig¥0f (MB°3/²1), Cr, AdvPräf I, FSS:°MB°532¥p",
        "notes": "¥fHinweise:¥0f¥p¥fADVENTSZEIT¥0f¥jDie Adventszeit hat einen dreifachen Charakter. Sie ist erstens Vorbereitungszeit auf die weihnachtlichen Hochfeste mit ihrem ¥fGedächtnis des ersten Kommens des Gottessohnes¥0f zu den Menschen. Zweitens ist sie eine besondere Zeit der ¥fAufmerksamkeit und Wachsamkeit für die Ankunft Christi heute¥0f, an jedem Tag, mitten im Alltag und im menschlichen Leben. Und drittens lenkt sie die Herzen zugleich durch dieses Gedenken an die erste Ankunft des Herrn, die Vorbereitung auf Weihnachten und sein tägliches neues (An-)Kommen hin zur ¥fErwartung der Ankunft Christi am Ende der Zeiten¥0f. Unter allen drei Gesichtspunkten ist die Adventszeit ¥feine Zeit wachsamer, hingebender und freudiger Erwartung¥0f.¥p¥pEs°beginnt°das°¥fLesejahr°C¥0f¥lfür°die°Messperikopen°an°den Sonntagen°(¥fML°C/III¥0f).¥pEs°beginnt°das°¥fLesejahr°I¥0f¥lder°Lektionar-Faszikel°zum°StB (¥fLektionar°zum°StB°I/1¥0f).¥pPerikopen an den Wochentagen: ¥fML°IV¥0f.¥p¥fStB¥0f und ¥fLitHor¥0f: ¥fBand I¥0f.¥p¥s¥fDie Sonn- und Wochentage des Advent¥0f haben jeweils ein eigenes Offizium. Vor dem Off des 1.°AdvSo sind Hymnen für den ersten Teil der Adventszeit (bis 16.°Dezember) angegeben (StB°I°3ff).¥p¥sAm Schluss der Komplet steht in der Advents- und Weihnachtszeit die Marianische Antiphon ¥f„Alma Redemptoris Mater“¥0f (GL°666¥v,1¥0v) bzw. ¥f„Erhabene Mutter des Erlösers“¥0f (vgl.°GL°530).¥p¥s¥fDas „Gloria“ entfällt an den Sonntagen der Adventszeit.¥0f¥p¥sSofern nichts anderes angegeben ist, wird bis zum 16.°Dez. in der Regel eine der Adventspräfationen°I¥_IV genommen, vom 17.°bis 24.°Dez. aber vor allem Adventspräfation°V.¥p¥sDie ¥fMarienmesse im Advent (Roratemesse)¥0f ist unter den in der Einführung zum Direktorium  (s.°o.°Kap.°III.D.3.) genannten Voraussetzungen bis zum 16.°Dez. gestattet außer an Sonntagen, Hochfesten und Festen. MB°890f mit den laufenden Tageslesungen, oder MBm und MLm Nrr.°1¥_3; Farbe: weiß.¥p¥sIn der kommenden Woche werden die ¥fWinterquatember¥0f an einem oder mehreren Tagen (nach Wahl) begangen als Tag(e) religiöser Erneuerung. ¥fThema: Friede¥0f. Vorschlag für die Wahl des Messformulars: Quatembermesse, MB°265, oder Nr.°17, 21 oder°22 aus den „Messen für besondere Anliegen“ (MB°1054¥_1059/²1078¥_1084), AdvPräf, Farbe: violett. LL und Evv: Perikopen für besondere Anliegen, ML°VIII°201¥_217.¥p¥s¥fDer Blumenschmuck und die Musik¥0f mögen im Advent sehr gemäßigt sein. Die Musik soll auf Weihnachten vorbereiten.¥p¥sZur ¥fSegnung des Adventskranzes/der (mitgebrachten) Adventskränze¥0f s.°Benediktionale°Nr.°1,°S.°25ff oder GL°24.¥p¥sDie ¥fGedenktage der Bischofsweihe des hl. Bonifatius¥0f und ¥fdes hl. Charles de Foucauld¥0f entfallen in diesem Jahr.¥p",
        "deceased": "1999 †¥tJohannes°Kalisch°(Oeiras¥-Floriano/Fulda),°Bischofsvikar, Msgr., Ehrendomkapitular, Pfarrer°in°Maceió/Brasilien¥p",
        "deceased_more": "1938 †¥tAnton°Paul,°Dompräbendat,°Fulda¥p1950 †¥tP.°Joseph°Schanz°OMI,°Frühmesser°in°Geisa¥p1978 †¥tJosef°Hillebrand°(Olmütz), Pfr.i.R., GR, Hünfeld¥p1981 †¥tEmil°Schäfer, Pfr.i.R., Hünfeld¥p1986 †¥tJosef°van°Schijndel, Pfarrer°in°Flieden¥-Rückers¥p1999 †¥tJohannes°Kalisch°(Oeiras¥-Floriano/Fulda),°Bischofsvikar, Msgr., Ehrendomkapitular, Pfarrer°in°Maceió/Brasilien¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "2": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°im°Advent¥pr¥tOder ¥fhl. Luzius¥0f, Bi, Märt, ¥fGed¥0f°(RK)¥p(v)¥t¥fMs¥0f vom Tag oder vom°Hl, AdvPräf¥p",
        "notes": "",
        "deceased": "1997 †¥tAloys°Claus, Pfr.i.R., GR, Ehrendomkapitular, Staudach¥-Egerndach¥p",
        "deceased_more": "1974 †¥tHermann°Helfrich, Pfarrer°in°Marborn¥p1983 †¥tWolfgang°Schöpping, OStR°i.K., Brachttal¥-Spielberg¥p1997 †¥tAloys°Claus, Pfr.i.R., GR, Ehrendomkapitular, Staudach¥-Egerndach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "3": {
        "liturgy": "¥fDi¥0f¥t¥fHl. Franz Xaver¥0f, Ordpr, Glb, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f, AdvPräf – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "1994 †¥tP. Dr.°Albert°Strobel°OMI, Prof., Pfr.i.R., Fulda¥p",
        "deceased_more": "1967 †¥tJoseph°Filthaut, Pfr.i.R., Fulda¥p1980 †¥tAnton°Leschik, OStR°i.R., Petersberg¥-Steinau¥p1994 †¥tP. Dr.°Albert°Strobel°OMI, Prof., Pfr.i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "4": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°im°Advent¥pr¥tOder ¥fhl. Barbara¥0f, Märt, ¥fGed¥0f°(RK)¥pw¥tOder ¥fhl. Johannes von Damaskus¥0f, Pr, Kl, ¥fGed¥0f¥pw¥tOder ¥fsel. Adolph Kolping¥0f, Pr, ¥fGed¥0f (dD)¥l¥fOff¥0f: StB Ergänzungsheft 1995, S.°16¥_18¥bf¥w¥fMs¥0f: HR°/°MBkl°1248f°/°MBErg²°24¥l¥vL:¥0v¥tJak°2¥v,14¥_17¥0v¥tML°IV°420/ᴺ425¥l¥vAPs:¥0v¥tPs°112¥v,1¥_2.3¥_4.5¥_6.7+9¥0v¥t420/ᴺ425¥l¥vREv:¥0v¥tLk°11¥v,28¥0v¥t663¥v,4¥0v/ᴺ674¥v,4¥0v¥l¥vEv:¥0v¥tMt°5¥v,13¥_16¥0v¥t732/ᴺ736¥l¥voder¥0v¥tMt°25¥v,14¥_23¥0v¥t734/ᴺ738¥0w¥p(v)¥t¥fMs¥0f vom Tag oder von°einem°der°Hll bzw.°Sel, AdvPräf¥p",
        "notes": "",
        "deceased": "1996 †¥tRudolf°Armstark°(Leitmeritz), Pfr.i.R., GR, Fulda¥p2002 †¥tJosef°Otterbein, Pfr.i.R., GR, Fulda¥p",
        "deceased_more": "1938 †¥tHeinrich°Große, Pfr.i.R., Bad°Salzschlirf¥p1960 †¥tErnst°Barabasch°(Breslau), Pfarrer°in°Ferna/Eichsfeld¥p1982 †¥tJoseph°Plettenberg,°Bischofsvikar,°Apostol.°Protonotar, Domkapitular,°Fulda¥p1983 †¥tBruno°Klute, Pfarrer°in°Uttrichshausen¥p1996 †¥tRudolf°Armstark°(Leitmeritz), Pfr.i.R., GR, Fulda¥p2002 †¥tJosef°Otterbein, Pfr.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "5": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°im°Advent – ¥fPriesterdonnerstag¥0f¥pw¥tOder ¥fhl. Anno¥0f, Bi, ¥fGed¥0f°(RK)¥pw¥tOder ¥kim Dom zu Fulda:¥0k ¥fhl.°Sola¥0f,°Pr,°Einsiedler,°¥fGed¥0f°(FD)¥bf¥w¥vL:¥0v¥tApg°4¥v,32¥_35¥0v¥tML°IV°721/ᴺ727¥l¥vAPs:¥0v¥tPs°16¥v,1¥_2+5.7¥_8.9+11¥0v°(R:°vgl.°¥v5a¥0v)¥t520/ᴺ531¥l¥vREv+Ev:¥0v°Lk°12¥v,32¥_34¥0v¥t520f/ᴺ531f¥0w¥pw¥tOder ggf.°¥fMs um Priesterberufe¥0f ¥w(MB°1035f/²1057),¥lL°und°Ev vom°Tag oder aus°den°AuswL¥0w¥p(v)¥t¥fMs¥0f vom Tag oder von°einem°der°Hll oder ggf.°Votivmesse, AdvPräf¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Priesterdonnerstag (monatl. Gebetstag für geistliche Berufe):¥0f Die Votivmesse ist nur bedingt erlaubt (s.°o.°Kap.°III.D.3.). – Fürbitte(n) um Priesterberufungen. – Thema: „Ihr alle aber seid Brüder“ (Mt°23¥v,8¥0v). Intention: Caritative Berufe: Sozialarbeiter und Erzieher.¥p",
        "deceased": "1994 †¥tHermann°Schabel, Pfr.i.R., Hünfeld¥p",
        "deceased_more": "1934 †¥tNikolaus°Goerich, Pfarrer°in°Bickenriede¥p1937 †¥tPaul°Scharsky,°Kooperator°in°Steinbach¥p1946 †¥tAloys°Ewald, Pfarrer°in°Altenmittlau¥p1960 †¥tMichael°Lerch, Pfarrer°in°Struth¥p1994 †¥tHermann°Schabel, Pfr.i.R., Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "6": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°im°Advent – ¥fHerz¥-Jesu¥-Freitag¥0f¥pw¥tOder ¥fhl. Nikolaus¥0f, Bi, ¥fGed¥0f¥pw¥tOder ggf.°¥fVotivmesse vom hl. Herzen Jesu¥0f¥l¥w(MB°1100f/²1132f oder 257ff), Herz¥-Jesu¥-Präf,¥lL°und°Ev°vom°Tag oder aus°den°AuswL¥0w¥p(v)¥t¥fMs¥0f vom Tag oder vom°Hl, AdvPräf, oder ggf.°Votivmesse,°Herz¥-Jesu¥-Präf¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum°Herz¥-Jesu¥-Fr:¥0f Die Votivmesse ist nur bedingt erlaubt (s.°o.°Kap.°III.D.3.), dann mit Herz¥-Jesu¥-Präfation.¥p",
        "deceased": "2011 †¥tHeinrich°Unterstell°(Köln), Pfr.i.R., GR, Fulda¥p2017 †¥tNorbert°Lomb, Pfr.i.R., Hess.°Lichtenau¥-Velmeden¥p",
        "deceased_more": "1954 †¥tAloys°Ständer, Pfarrer°in°Hundeshagen¥p1967 †¥tHeinrich°Franz°(Leitmeritz), Pfr.i.R., Mardorf¥p2011 †¥tHeinrich°Unterstell°(Köln), Pfr.i.R., GR, Fulda¥p2017 †¥tNorbert°Lomb, Pfr.i.R., Hess.°Lichtenau¥-Velmeden¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "7": {
        "liturgy": "¥fSa¥0f¥t¥fHl. Ambrosius¥0f, Bi, Kl, ¥fGed¥0f  – ¥fHerz¥-Mariä¥-Samstag¥0f¥pw¥t¥fMs vom Hl¥0f, AdvPräf – Off°vom°Ged¥pw¥tOder ggf.°¥fVotivmesse vom Unbefleckten Herzen Mariä¥0f, ¥wMBm°und°MLm°Nr.°28,°eig°Präf¥0w¥pv¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Herz¥-Mariä¥-Sa:¥0f Die Votivmesse ist nur bedingt erlaubt (s.°o.°Kap.°III.D.3.).¥p",
        "deceased": "",
        "deceased_more": "1945 †¥tJoseph°Kircher, Pfr.i.R., Sannerz¥p1956 †¥tBernhard°Wand, Pfarrer°in°Berlingerode¥p1959 †¥tKonrad°Fasselabend, Pfr.i.R., Dorfborn¥p1989 †¥tGerhard°Kocourek, Pfr.i.R., Erfurtshausen¥p1991 †¥tJulius°Apeltauer°(Brünn), Pfr.i.R., GR, Wölf¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "8": {
        "liturgy": "¥fSo¥0f¥a¥t¥f2. Adventssonntag¥0f¥lPsalt:°II.°Woche°–°Te°Deum¥pv¥t¥fMs eig¥0f, Cr, AdvPräf III, FSS:°MB°532¥l¥f2.°Vp°vom°So – 2.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fDie Vorabendmesse zum Hochfest der Empfängnis Mariens kann heute nicht gefeiert werden.¥0f¥p¥sDas Hochfest der Empfängnis Mariens wird in diesem Jahr auf den folgenden Montag, den 9. Dezember, verlegt.¥p",
        "deceased": "",
        "deceased_more": "1943 †¥tAdam°Dehler, Dechant, Pfarrer°in°Johannesberg¥p1948 †¥tFranz°Schröter, Direktor°des°St.¥-Raphaels¥-Heims°in°Heiligenstadt¥p1963 †¥tJosef°Tschöp°(Königgrätz), Pfarrer°in°Steinbach/Eichsfeld¥p1976 †¥tP.°Paul°Blasius°Kaiser°SVD, Pfarrer°in°Trendelburg¥p1981 †¥tPhilipp°Rogge, Pfr.i.R., GR, Weißenborn¥-Lüderode¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "9": {
        "liturgy": "¥fMo¥0f¥t¥qhHochfest der ohne Erbsünde empfangenen Jungfrau und Gottesmutter Maria¥0f¥lTe Deum – Kl.°Hore: eig Ant,°ErgPs¥pw¥t¥fMs eig¥0f, Gl,°Cr, eig°Präf, in°den Hg°I¥_III eig°Einschub, FSS:°MB°554°– 2.°Vp°vom°H°–°2.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥sDie ¥fGedenktage des sel.¥°Liborius Wagner¥0f ¥fund des hl.¥°Johannes Didacus (Juan°Diego Cuauhtlatoatzin)¥0f entfallen in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1957 †¥tErich°Feiereis°(Breslau), Pfr.i.R., Küllstedt¥p1974 †¥tLudwig°Büttner, Pfr.i.R., Hünfeld¥p1977 †¥tViktor°Schulze, Pfr.i.R., Küllstedt¥p1983 †¥tP.°Andreas°Huber°OMI, Pfr.i.R., Rektor, Dresden¥p1985 †¥tJoseph°Wand, Pfr.i.R., GR, Ershausen¥p1989 †¥tDr.°Johannes°Bernard°(Berlin), Prof., Erfurt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "10": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°im°Advent¥pw¥tOder ¥fUnsere Liebe Frau von Loreto¥0f, ¥fGed¥0f¥be¥w¥fMs¥0f: HR⁴ᶠ°/°MMB Nr. 1°– ¥fML°IV°ᴺ409¥0f¥l¥vL:¥0v¥tJes°7¥v,10¥_14¥0v¥tML°IV°56¥l¥vAPs:¥0v¥tLk°1¥v,46b¥_48.49¥_50.51+53.54¥_55¥0v°(R:°¥v49¥0v)¥t660¥l¥vREv:¥0v¥tvgl.°Lk°1¥v,28.42¥0v¥t663¥v,1¥0v¥l¥vEv:¥0v¥tLk°1¥v,26¥_38¥0v¥t57¥0w¥p(v)¥t¥fMs¥0f vom Tag oder vom Ged, AdvPräf¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute ist der internationale „Tag der Menschenrechte“, zu denen die Glaubens-, Gewissens- und Religionsfreiheit gehört.¥p",
        "deceased": "1959 †¥t¥fDDr.°Johannes°B.°Dietz¥0f, Dr.°theol.°et°phil., Titularerzbischof°von°Cotrada, Bischof°von°Fulda°(1939¥_1958)¥p",
        "deceased_more": "1959 †¥t¥fDDr.°Johannes°B.°Dietz¥0f, Dr.°theol.°et°phil., Titularerzbischof°von°Cotrada, Bischof°von°Fulda°(1939¥_1958)¥p1970 †¥tP.°Otto°Nolte°SVD, Pfarrer°in°Rengelrode/Eichsfeld¥p1991 †¥tP.°Sebastian°Zerwas°SDB, Hess.°Lichtenau¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "11": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°im°Advent¥pw¥tOder ¥fhl. Damasus I.¥0f, Pp, ¥fGed¥0f¥p(v)¥t¥fMs¥0f vom Tag oder vom Hl, AdvPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1952 †¥tFranz°Raabe, Pfr.i.R., Mardorf¥p1979 †¥tEduard°Paul, Pfr.i.R., GR, Emsdorf¥p1980 †¥tP.°Franz°Xaver°Schiefer°SJ, Pfr.i.R., Köln¥p1985 †¥tP.°Paul°Franz°Saft°SJ, Berlin¥p1987 †¥tP.°Wilhelm°Bertulf°Schrammen°OFM, Pfr.i.R., Heinsberg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "12": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°im°Advent¥pw¥tOder ¥fUnsere Liebe Frau in Guadalupe¥0f, ¥fGed¥0f¥be¥w¥fMs¥0f: HR°/°MBkl°1250f°/°MBErg²°21°/°Com°Maria, Eröffnungsvers:°Offb°12¥v,1¥0v°– ¥fML°IV°ᴺ414¥0f¥l¥vL:¥0v¥tJes°7¥v,10¥_14¥0v¥tML°IV°56¥l¥vAPs:¥0v¥t1°Sam°2¥v,1b¥_e.4¥_5b.6¥_7.8a¥_d¥0v°(R:°¥v1b¥0v)¥t62¥l¥vREv:¥0v¥tvgl.°Lk°1¥v,45¥0v¥t–––¥l¥vEv:¥0v¥tLk°1¥v,39¥_47¥0v¥t668¥0w¥p(v)¥t¥fMs¥0f vom Tag oder vom Ged, AdvPräf¥p",
        "notes": "",
        "deceased": "2014 †¥tHermann°Röder, Pfr.i.R., GR, Hofbieber¥-Schwarzbach¥p",
        "deceased_more": "1961 †¥tDr.°Bernard°Mock, Dr.°phil., Prälat, Domkapitular°in°Fulda¥p1983 †¥tPaul°Fichtner°(Leitmeritz), Pfr.i.R., GR, Sondershausen¥p2014 †¥tHermann°Röder, Pfr.i.R., GR, Hofbieber¥-Schwarzbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "13": {
        "liturgy": "¥fFr¥0f¥t¥fHl. Luzia¥0f, Jgfr, Märt, ¥fGed¥0f – BuM°eig¥pw¥tOder ¥fhl. Odilia¥0f, Äbtissin, ¥fGed¥0f°(RK)¥pr/w¥t¥fOff und Ms¥0f von einer der Hll, AdvPräf, n.B.°Hg°I¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fDie hl. Luzia steht im ARK als gebotener Ged.¥0f Wenn nicht der Ged der hl. Odilia begangen wird, sind daher im Off und in der Ms die Texte zum Ged der hl. Luzia zu nehmen.¥p¥sHeute ist der 55. Jahrestag der Priesterweihe von Papst Franziskus.¥p¥sHeute ist der 6. Jahrestag der Ernennung unseres Bischofs Michael.¥p",
        "deceased": "2010 †¥tVinzenz°Trageser, Pfr.i.R., GR, Fulda¥p",
        "deceased_more": "1987 †¥tAlbert°Otto, Pfr.i.R., Neustadt/Eichsfeld¥p2010 †¥tVinzenz°Trageser, Pfr.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "14": {
        "liturgy": "¥fSa¥0f¥t¥fHl. Johannes vom Kreuz¥0f, Ordpr, Kl, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f, AdvPräf – Off°vom°Ged¥pv/ros¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "2023 †¥tHans°Stein°(Radom/Fulda), Pfr.i.R., Marl¥p",
        "deceased_more": "1946 †¥tHeinrich°Goebel, Prof., OStR°i.R., Fulda¥p1967 †¥tAloys°Wehner, Pfr.i.R., Geisa¥p1967 †¥tAnton°Trüschler, Pfarrer°in°Helmsdorf/Eichsfeld¥p2023 †¥tHans°Stein°(Radom/Fulda), Pfr.i.R., Marl¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "15": {
        "liturgy": "¥fSo¥0f¥a¥t¥f3. Adventssonntag (Gaudete)¥0f¥lPsalt:°III.°Woche°–°Te°Deum¥pv/ros¥t¥fMs eig¥0f, Cr, AdvPräf II, FSS:°MB°532¥p",
        "notes": "",
        "deceased": "2000 †¥tNorbert°Weber, Pfr.i.R., Msgr., Fulda¥p2016 †¥tMatthias°Krieg, Pfr., GR, Fulda¥p",
        "deceased_more": "1920 †¥tDr.°Anton°Fischer, Dechant, Pfarrer°in°Poppenhausen¥p1952 †¥tAugust°Wassermann, Pfr.i.R., Flieden¥p1975 †¥tAloysius°Vogt, Wehrmachts-Oberpfr.i.R., Frankfurt°a.°M.¥p2000 †¥tNorbert°Weber, Pfr.i.R., Msgr., Fulda¥p2016 †¥tMatthias°Krieg, Pfr., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "16": {
        "liturgy": "¥fMo¥0f¥t¥qfHl. Sturmius¥0f, ¥fGründerabt von Fulda¥0f, ¥fFest¥0f (FD)¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pw¥t¥fMs eig¥0f, Gl, Präf Ht, FSS:°MB°560¥bf¥wFDL°36¥_39¥0w¥p",
        "notes": "¥fHinweise:¥0f¥p¥sNutzer der Stundenbuch-App des DLI finden die ¥fTexte für das Stundengebet zur heutigen Eigenfeier des Diözesankalenders in der Datei FD-Stundengebet.PDF¥0f (s.°o.°S.°87, Nr.°3).¥p¥sZum heutigen Fest des hl. Sturmius passt die Strophe GL°877¥v,9¥0v des Bonifatiusliedes. Die Hymnen zu Laudes und Vesper aus den „Eigenfeiern der Diözese Fulda – Stundengebet“ können nach den Melodien von GL°81 oder GL°484 als Gemeindelied gesungen werden (Liedblatt zum Download auf www.direktorium.bistum-fulda.de).¥p",
        "deceased": "",
        "deceased_more": "1933 †¥tWilhelm°Hülsmann, Pfarrer°in°Anzefahr¥p1946 †¥tKarl°Ellenbrand, Pfarrer°in°Eiterfeld¥p1952 †¥tEugen°Wand, Pfr.i.R., Küllstedt¥p1964 †¥tP.°Bernardin°Höflich°OFM, Hausgeistlicher°im°St.¥-Elisabeth¥-Krankenhaus°in°Eisenach¥p1970 †¥tLeo°Schramm, Dechant, Pfarrer°in°Sömmerda¥p1976 †¥tJosef°Preßner°(Prag), Pfarrer°in°Haimbach¥p1977 †¥tFranz°Faupel, Pfr.i.R., Fulda¥p1988 †¥tHermann°Goeb, Dechant, Pfarrer°in°Lahrbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "17": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°im°Advent¥pv¥t¥fMs vom Tag¥0f, AdvPräf, bes. V¥lAnt zum Magn: ¥fO Weisheit¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fDie Tage vom 17. bis 23. Dez.¥0f haben im Stundengebet ¥fin allen Horen Eigentexte¥0f (StB°I°141ff); die ¥fHymnen für diese Tage¥0f stehen nach dem Offizium des 4. Adventssonntages (StB°I°132ff). Die Antiphonen zu den Psalmen der Laudes und Vesper richten sich nach dem Wochentag (vgl.°StB°I°139f), wie im Psalterium angegeben („... vor dem 24.°Dezember“). In der Vesper werden zum Magnificat ¥fdie großen O¥-Antiphonen¥0f gebetet. ¥p¥sDie O-Antiphonen werden in der Messfeier als Ruf vor dem Evangelium gesungen (vgl. GL°222 mit GL°173¥v,1¥0v oder 173¥v,3¥0v als Halleluja-Ruf in der passenden Tonart).¥p¥s¥fDie Messfeier ist immer vom Kalendertag (MB°27ff/ᴺ25ff)¥0f, ausgenommen der 4. Adventssonntag. Es wird vor allem die AdvPräf°V genommen.¥p¥s¥fGedenktage von Heiligen¥0f, die auf einen Wochentag vom 17. bis 31. Dez. fallen, ¥fkönnen kommemoriert werden¥0f  (s.°o.°Kap.°II.C.4.).¥p¥sHeute ist der 88. Geburtstag von Papst Franziskus.¥p",
        "deceased": "2022 †¥tWinfried°Reith,°Stadtpfr.i.R., Msgr., GR, Ehrendomkapitular, Fulda¥p",
        "deceased_more": "1955 †¥tOtto°Schröter, Pfr.i.R., Mühlhausen¥p1977 †¥tFranz°Mayer°(Prag), Pfr.i.R., Braunfels/Lahn¥p2022 †¥tWinfried°Reith, Stadtpfr.i.R., Msgr., GR, Ehrendomkapitular, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "18": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°im°Advent¥pv¥t¥fMs vom Tag¥0f, AdvPräf, bes. V¥lAnt zum Magn: ¥fO Adonai¥0f¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1944 †¥tRudolf°Weber, Dechant, Pfarrer°in°Hilders¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "19": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°im°Advent¥pv¥t¥fMs vom Tag¥0f, AdvPräf, bes. V¥lAnt zum Magn: ¥fO Spross aus Isais Wurzel¥0f¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1962 †¥tWilhelm°Kotzur°(Breslau), Pfr.i.R., Berggrub°b.°Landshut¥p1973 †¥tFriedrich°Wieden°(Leitmeritz), Pfr.i.R., GR, Breitenholz/Eichsfeld¥p1973 †¥tAdolf°Krause°(Königgrätz), Pfr.i.R., Altötting¥p1983 †¥tMoritz°Weinrich, Caritasdirektor°i.R., Prälat, GR, Steinbach°a.°d.°Milseburg¥p1987 †¥tP.°Bernhard°Ferkinghoff°OMI, Allerheiligenberg°bei°Lahnstein¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "20": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°im°Advent¥pv¥t¥fMs vom Tag¥0f, AdvPräf, bes. V¥lAnt zum Magn: ¥fO Schlüssel Davids¥0f¥p",
        "notes": "",
        "deceased": "2022 †¥tHans¥-Jürgen°Elbrecht, Pfr.i.R., Netphen¥-Eschenbach¥p",
        "deceased_more": "1937 †¥tTheodor°Bermoser, Pfr.i.R., Steinbach¥p1967 †¥tAlfons°Scholz, Pfr.i.R., Dietershan¥p1971 †¥tAlbin°Metze, Pfarrer°in°Mackenrode/Eichsfeld¥p1980 †¥tJosef°Lerner°(Essen), Rektor, Archivar°i.R., Fulda¥p1983 †¥tFranz°Schlehuber, GR, Pfarrer°in°Kleinsassen¥p2022 †¥tHans¥-Jürgen°Elbrecht, Pfr.i.R., Netphen¥-Eschenbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "21": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°im°Advent¥pv¥t¥fMs vom Tag¥0f, AdvPräf, bes. V¥pv¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°4.°AdvSo¥0f°(StB°I°125)°–°1.°Kp°vom°So¥lAnt zum Magn: ¥fO Morgenstern¥0f¥p",
        "notes": "",
        "deceased": "1995 †¥tDr.°Bernhard°Opfermann, Dr.°phil., Pfr.i.R., Hildesheim¥p",
        "deceased_more": "1995 †¥tDr.°Bernhard°Opfermann, Dr.°phil., Pfr.i.R., Hildesheim¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "22": {
        "liturgy": "¥fSo¥0f¥a¥t¥f4. Adventssonntag¥0f¥lPsalt:°IV.°Woche – Te°Deum¥pv¥t¥fMs vom So eig¥0f (MB°35/²33), Cr, AdvPräf V, FSS:°MB°532¥lAnt zum Magn: ¥fO König der Völker¥0f¥p",
        "notes": "",
        "deceased": "1997 †¥tPaul°Seidel°(Breslau), Pfr.i.R., Niedaltdorf/Krs.°Saarlouis¥p",
        "deceased_more": "1949 †¥tDDr.°Georg°Otto°Müller, Prof.°em., Dr.°theol.°et°phil., Dechant, Pfarrer°in°Hilders¥p1982 †¥tStephan°Kral°(Königgrätz), Pfr.i.R., Heiligenstadt¥p1992 †¥tMichael°Kollmann, Diakon, Stadtallendorf¥p1997 †¥tPaul°Seidel°(Breslau), Pfr.i.R., Niedaltdorf/Krs.°Saarlouis¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "23": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°im°Advent¥ln.B. Komm des ¥fhl. Johannes von Krakau¥0f, Pr (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs vom Tag¥0f, Tg°vom Tag oder vom Hl, AdvPräf,°bes.°V¥lAnt zum Magn: ¥fO Immanuel¥0f¥p",
        "notes": "",
        "deceased": "2010 †¥tGerhard°Dietrich, Pfr.i.R., Hammelburg¥p2020 †¥tP.°Dominikus°Ramljak°OFM, GR, Posušje/Herzegowina¥p",
        "deceased_more": "1955 †¥tP.°Franz°Willmes°SJ, Hausgeistlicher°in°Worbis¥p2010 †¥tGerhard°Dietrich, Pfr.i.R., Hammelburg¥p2020 †¥tP.°Dominikus°Ramljak°OFM, GR, Posušje/Herzegowina¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "24": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°im°Advent –°Off°eig°(24.°Dez.)¥pv¥t¥fMs „Am Morgen“¥0f (MB°36f/²34f), AdvPräf V¥pv¥tOder ¥fmorgens: Vigilmesse „Am Heiligen Abend“¥0f (MB°38f/²36f), wenn sie am Abend nicht gefeiert wird; dann adventlich in violetter Farbe, ohne°Gl°und°Cr, mit°AdvPräf°V, ohne°eig°Einschub¥p¥p¥fWEIHNACHTSZEIT¥0f¥jDie Gedächtnisfeier der Geburt des Herrn und seines offenbarenden Erscheinens bildet den besonderen Charakter der Weihnachtszeit. Sie reicht von der 1.°Vesper der Geburt des Herrn bis zum Sonntag nach Erscheinung des Herrn einschließlich.¥p¥p¥fHinweise:¥0f ¥fZum Stundengebet:¥0f Hymnen für die Weihnachtszeit bis zum Fest Erscheinung des Herrn: Stb°I°174ff.¥p¥t¥fAm Heiligen Abend: 1.°Vp°vom°folg H – 1.°Kp°vom°So¥0f (entfällt für jene, die die Vigil und die Messe in der Hl. Nacht mitfeiern)¥pw¥t¥fVigilmesse von Weihnachten „Am Hl. Abend“¥0f (MB°38f/²36f), Gl,°Cr°(Kniebeugung wie heute), WeihnPräf, in°den Hg°I¥_III eig°Einschub (mit „hochheilige Nacht“), FSS:°MB°534.¥pw¥tOder (wo dringende pastorale Gründe dafür vorliegen) als „Christmette“ die ¥fErste Weihnachtsmesse „In der Hl. Nacht“¥0f (siehe°am°25.°Dez.)¥p",
        "notes": "",
        "deceased": "1999 †¥tP.°Wilhelm°Sermon°SVD¥p",
        "deceased_more": "1941 †¥tAugustin°Eckardt, Pfarrer°in°Rohrberg¥p1948 †¥tFerdinand°Krah, Pfarrer°in°Kassel°bei°Gelnhausen¥p1978 †¥tArnold°Motz, Pfr.i.R., GR, Birkenfelde¥p1990 †¥tHermann¥-Josef°Häusler, Pfarrer°in°Erfurt¥p1999 †¥tP.°Wilhelm°Sermon°SVD¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "25": {
        "liturgy": "¥fMi¥0f¥a¥t¥qhHochfest der Geburt des Herrn¥0f – ¥fWeihnachten, Hochfest°mit°Oktav¥0f¥lOff eig – Te°Deum – Kl.°Hore: eig Ant°u. Ps¥pw¥t¥fErste Weihnachtsmesse „In der Heiligen Nacht“¥0f, Gl,°Cr°(Kniebeugung°wie°in°der Messe°„Am°Tage“), WeihnPräf°(bes.°II), in°den Hg°I¥_III eig°Einschub („hochheilige Nacht“), FSS:°MB°534¥pw¥t¥fZweite Weihnachtsmesse „Am Morgen“¥0f, Gl,°Cr°(Kniebeugung°wie°in°der°Messe „Am°Tage“), WeihnPräf, in°den Hg°I¥_III eig°Einschub, FSS:°MB°534¥pw¥t¥fDritte Weihnachtsmesse „Am Tage“¥0f, Gl,°Cr (Kniebeugung bei den Worten „Et°incarnatus est°…“ bzw. „hat°Fleisch angenommen°…“ bzw. „empfangen durch den Hl.°Geist°…“), WeihnPräf°(bes.°I), in°den Hg°I¥_III eig°Einschub, FSS:°MB°534°– 2.°Vp°vom°H°–°2.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute darf jeder Priester dreimal (kon)zelebrieren, jedoch nur zur jeweils entsprechenden Zeit: die erste Messe in der Nacht (Christmette), die zweite am Morgen (Hirtenmesse), die dritte am Tag (Festhochamt).¥p¥s¥fEin vollkommener Ablass¥0f (s.°o.°Kap.°I.C.10.) ist unter den üblichen Bedingungen (Beichte, entschlossene Abkehr von jeder Sünde, Kommunionempfang, Gebet in den Anliegen des Papstes) verbunden mit dem ¥fEmpfang des Apostolischen Segens¥0f, den der Bischof heute Vormittag im Pontifikalamt im Dom zu Fulda spendet, und mit dem ¥fEmpfang des Päpstlichen Segens „Urbi et orbi“ (auch über Fernsehen, Radio oder Internet)¥0f, den der Heilige Vater heute Mittag in Rom spendet.¥p¥sHeute ist der ¥fGed der hl. Anastasia von Sirmium¥0f, die um das Jahr 304 das Martyrium erlitten hat. Sie gehört zu den seit alten Zeiten verehrten Heiligen, die im Römischen Messkanon genannt werden, deren Ged heute aber nicht mehr im ARK verzeichnet ist. Durch die ¥fWahl des Hg°I¥0f kann ihr Gedächtnis weiter geehrt werden.¥p¥sVor Beginn der Christmette kann die ¥ffeierliche Ankündigung der Geburt des Herrn aus dem Römischen Martyrologium¥0f gesungen werden (siehe Hinweis auf der Homepage des Liturgischen Institutes Trier www.liturgie.de).¥p",
        "deceased": "",
        "deceased_more": "1944 †¥tHeinrich°Gnau, Pfarrer°in°Oberufhausen¥p1960 †¥tDr.°Adolf°Schreiber°(Breslau), Pfarrer°in°Veckerhagen¥p1986 †¥tP. Dr.°Gerhard°Koch°SJ, Prof., Dr.°phil., Marburg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "26": {
        "liturgy": "¥fDo¥0f¥a¥t¥qfHl. Stephanus¥0f, Erster Märtyrer, ¥fFest¥0f – ¥f2.°Weihnachtsfeiertag¥0f – ¥fGebetstag für°die°verfolgten und bedrängten°Christen¥0f¥lPsalt:°IV.°Woche – ¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pr¥t¥fMs eig¥0f, Gl,°Cr, ¥fFürbitten für die verfolgten Christen¥0f, WeihnPräf°(bes.°III), n.B.°Hg°I, in°den Hg°I¥_III eig°Einschub wie Weihnachten, FSS:°MB°560°oder°534¥l¥fVp von der WeihnOktav¥0f (26. Dez.) – ¥f1.°oder°2.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fDas Fest des hl. Stephanus ist als 2. Weihnachtsfeiertag kirchlich gebotener Feiertag¥0f. Es besteht ¥fApplikations- sowie Sonn- und Feiertagspflicht¥0f (s.°o.°Kap.°I.C.1.). In den Messfeiern wird daher das Glaubensbekenntnis gebetet (bzw. gesungen).¥p¥sSeit dem Jahr 2003 trägt das Fest des hl. Stephanus in Deutschland auch den Charakter eines Gebetstages der Solidarität mit den verfolgten und bedrängten Christen aufgrund der Initiative der DBK in diesem Anliegen. Durch Beschluss der DBK vom Juni 2012 wurde er ab 2012 zum ¥f„Gebetstag für verfolgte und bedrängte Christen“¥0f erklärt. Spezielle Fürbitten der DBK zum heutigen Gebetstag auf der Homepage der DBK www.dbk.de unter: Menü › Themen › Solidarität mit verfolgten Christen › Gebetstag.¥p",
        "deceased": "",
        "deceased_more": "1983 †¥tWilhelm°Klaus, Pfarrer°in°Leinefelde¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "27": {
        "liturgy": "¥fFr¥0f¥t¥qfHl. Johannes¥0f, Ap, Evangelist, ¥fFest¥0f¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pw¥t¥fMs eig¥0f, Gl, WeihnPräf (bes. I oder III), n.B.°Hg°I, in°den Hg°I¥_III eig°Einschub wie Weihnachten, FSS:°MB°558 oder 534¥l¥fVp von der WeihnOktav¥0f (27. Dez.) – ¥f1.°oder°2.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweis:¥0f ¥sZur ¥fSegnung von Johanneswein¥0f am heutigen Fest s.°Benediktionale°Nr.°3,°S.°38f.¥p",
        "deceased": "",
        "deceased_more": "1933 †¥tRobert°Heddergott, Dechant, Pfarrer°in°Heiligenstadt, St.°Aegidii¥p1967 †¥tAdolf°Lorenz°(Leitmeritz), Pfr.i.R., Deuna°üb.°Leinefelde¥p1969 †¥tP.°Josef°Schwan°SAC, GR, Männerseelsorger°der°Diözese°Fulda¥p1989 †¥tDDr.°Adalbert°Dölle, Pfr.i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "28": {
        "liturgy": "¥fSa¥0f¥t¥qfUnschuldige Kinder, Märtt, Fest¥0f¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pr¥t¥fMs eig¥0f, Gl, ¥fFürbitten für die ungeborenen Kinder¥0f, WeihnPräf°(bes.°III), in°den Hg°I¥_III eig°Einschub wie Weihnachten, FSS:°MB°534¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom F¥0f – ¥f1.°Vp°vom°folg°F¥0f (StB°I°200ff)°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute am Fest der Unschuldigen Kinder ¥fGebet und Fürbitten¥0f in oder auch außerhalb der hl. Messe ¥ffür den Schutz der ungeborenen Kinder/des menschlichen Embryos und eine neue diesbezügliche Mentalität und Gesetzgebung¥0f. An der Mariensäule unterhalb des Frauenberges in Fulda ist heute um 18.30 Uhr gemeinsames Rosenkranzgebet in diesem Anliegen.¥p",
        "deceased": "1998 †¥tFriedrich°Dietz,°Msgr., Ordinariatsrat°i.R., Künzell¥p2021 †¥tWilfried°Umlauf, Pfr.i.R., Bad°Orb¥p",
        "deceased_more": "1998 †¥tFriedrich°Dietz, Msgr., Ordinariatsrat°i.R., Künzell¥p2021 †¥tWilfried°Umlauf, Pfr.i.R., Bad°Orb¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "29": {
        "liturgy": "¥fSo¥0f¥a¥t¥qfFest der Hl. Familie¥0f ¥fJesus, Maria, Josef¥0f – ¥fSonntag in der Weihnachtsoktav¥0f – ¥fFamiliensonntag¥0f – Psalt:°I.°Woche – Te°Deum – Kl.°Hore:°eig°Ant,°Ps°vom°So°der°1.°Woche¥pw¥t¥fMs eig¥0f (MB°44/²42), Gl,°Cr, WeihnPräf°(bes.°II), in°den Hg°I¥_III eig°Einschub wie Weihnachten, FSS:°MB°534 – ¥f2.°Vp°vom°F – 2.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥sAm heutigen ¥fFest der hl. Familie¥0f wird der ¥fFamiliensonntag¥0f begangen. ¥fLeitthema und Arbeitshilfen unter www.ehe-familie-kirche.de¥0f. Diözesen, Gemeinden, Verbände und kirchliche Einrichtungen sind eingeladen, sich mit eigenen Veranstaltungen und Initiativen zum Jahresthema einzubringen und das Jahresmotto ggf.°an einem anderen Sonntag im Kirchenjahr aufzugreifen.¥p¥sZum heutigen ¥fFest der hl. Familie¥0f ist es angebracht, eine ¥ffeierliche Segnung der Kinder¥0f zu halten. Ein Vorschlag findet sich im Benediktionale°Nr.°2,°S.°34ff. Es können aber auch Familien oder Familienteile gesegnet werden, etwa nach der Homilie oder im Anschluss an die hl. Messe (vgl. Benediktionale°Nr.°51,°S.°237ff: Segnung einer Familie durch den Priester).  – Fürbitten für die Familien.¥p¥sDie ¥fKomm des hl. Thomas Becket¥0f entfällt in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1923 †¥tHeinrich°Burchard, Pfarrer°in°Kassel, St.°Michael¥p1925 †¥tAndreas°Weigand, Pfarrer°in°Großentaft¥p1969 †¥tAlbert°Klesper, Pfr.i.R., Ungedanken¥p1972 †¥tFriedrich°Leo°Kreß, Pfr.i.R., Liebhards¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "30": {
        "liturgy": "¥fMo¥0f¥t¥f6. Tag der Weihnachtsoktav¥0f¥lOff eig – Te°Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pw¥t¥fMs vom Tag¥0f, Gl, WeihnPräf, in°den Hg°I¥_III eig°Einschub wie Weihnachten – ¥f1.°oder°2.°Kp°vom°So¥0f¥p",
        "notes": "",
        "deceased": "1998 †¥tKarl°Keil°(Würzburg),°BGS¥-Oberpfarrer°a.D., Würzburg¥p",
        "deceased_more": "1929 †¥tKarl°Alexander°Abel, Pfarrer°in°Frankfurt¥-Fechenheim¥p1946 †¥tOswald°Kullmann, Pfr.i.R., Breitenholz¥p1966 †¥tPaul°Litz, Kpl.i.R., Eiterfeld¥p1981 †¥tDDr.°Gottfried°Ambrosius°Flügel, Prof.°em., Dr.°theol.°et°phil., Prälat, Domkapitular°i.R., Fulda¥p1998 †¥tKarl°Keil°(Würzburg), BGS¥-Oberpfarrer°a.D., Würzburg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "31": {
        "liturgy": "¥fDi¥0f¥t¥f7. Tag der Weihnachtsoktav¥0f¥ln. B. Komm des ¥fhl. Silvester I.¥0f, Pp (s.°o.°Kap.°II.C.4.)¥lOff eig – Te°Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pw¥t¥fMs vom Tag¥0f, Gl, Tg°vom Tag oder vom Hl, WeihnPräf, in°den Hg°I¥_III eig°Einschub wie Weihnachten¥pw¥t¥kabends:¥0k ggf.°¥fVorabendmesse°vom°H¥0f – ¥f1.°Vp°vom°folg°H¥0f°–°¥f1.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fEin vollkommener Ablass¥0f (s.°o.°Kap.°I.C.10.) kann unter den üblichen Bedingungen (Beichte, entschlossene Abkehr von jeder Sünde, Kommunionempfang, Gebet in den Anliegen des Papstes) gewonnen werden, wenn man ¥fheute zum Jahresschluss in einer Kirche oder Kapelle¥0f andächtig dem ¥ffeierlichen Gesang des Hymnus „Dich, Gott, loben wir“ („Te°Deum“)¥0f beiwohnt.¥p",
        "deceased": "1995 †¥tAnton°Kowalewski°(Ermland), Pfr.i.R., GR, Bad°Orb¥p1998 †¥tWalter°Heine, Pfarrer°in°Haina°(Kloster)¥p",
        "deceased_more": "1957 †¥tJohannes°Krebs, Pfarrer°in°Lengenfeld°u.°St.¥p1982 †¥tDr.°Gregor°Krüger°(Schneidemühl), Prälat, Ordinariatsrat°i.R., Erfurt¥p1995 †¥tAnton°Kowalewski°(Ermland), Pfr.i.R., GR, Bad°Orb¥p1998 †¥tWalter°Heine, Pfarrer°in°Haina°(Kloster)¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      }
    }
  },
  "2025": {
    "1": {
      "1": {
        "liturgy": "¥fMi¥0f¥a¥tNeujahr – Oktavtag von Weihnachten¥l¥qhHochfest der Gottesmutter Maria¥0f¥lNamensgebung des Herrn – ¥fWeltfriedenstag¥0f¥lTe Deum – Kl.°Hore: eig Ant,°ErgPs¥pw¥t¥fMs eig¥0f, Gl,°Cr, MarPräf I oder WeihnPräf, in°den°Hg°I¥_III eig°Einschub wie Weihn, FSS:°MB°554°oder°536°oder°548/I°– 2.°Vp°vom°H°–°2.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥rLeerzeichen mit FV Fz_Lekt¥0r¥p¥sHeute ist der ¥f58. Welttag des Friedens¥0f (Papstwort zum Welttag, Arbeitshilfe, Fürbitten).¥p¥s¥fEin vollkommener Ablass¥0f (s.°o.°Kap.°I.C.10.) kann unter den üblichen Bedingungen (Beichte, entschlossene Abkehr von jeder Sünde, Kommunionempfang, Gebet in den Anliegen des Papstes) gewonnen werden, wenn man heute in einer Kirche oder Kapelle andächtig dem ¥ffeierlichen Gesang des Hymnus „Veni, Creator Spiritus“¥0f (GL°341) bzw. ¥f„Komm, Heil’ger Geist“¥0f (GL°342) beiwohnt.¥p¥sDas ¥fMessformular „Zum Jahresbeginn“¥0f (MB°1061/²1088, Nr.°24) kann am heutigen Hochfest und an den Wochentagen der Weihnachtszeit nicht genommen werden (s.°o.°Kap.°III.D.3.), erst an den Wochentagen der Zeit im Jahreskreis ab dem 13. Jan.¥p¥sAm Schluss der Komplet steht in der Weihnachtszeit die Marianische Antiphon ¥f„Alma Redemptoris Mater“¥0f (GL°666¥v,1¥0v) bzw. ¥f„Erhabene Mutter des Erlösers“¥0f (vgl.°GL°530).¥p",
        "deceased": "2024 †¥tErwin°Bednarczyk, Pfr.i.R., Duisburg¥p",
        "deceased_more": "1958 †¥tOtto°Buch, Pfarrer°in°Rustenfelde¥p2024 †¥tErwin°Bednarczyk, Pfr.i.R., Duisburg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "2": {
        "liturgy": "¥fDo¥0f¥t¥fHl. Basilius der Große u. hl. Gregor von Nazianz¥0f, Bi, Kl, ¥fGed¥0f – ¥fPriesterdonnerstag¥0f – Psalt:°I.°Woche°–°Off°vom°Ged,°BuM°eig¥pw¥t¥fMs von den Hll¥0f, WeihnPräf¥pw¥tOder ggf.°¥fMs um Priesterberufe¥0f ¥w(MB°1035f/²1057),¥lL°und°Ev vom°Tag oder aus°den°AuswL¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Priesterdonnerstag (monatl. Gebetstag für geistliche Berufe):¥0f Die Votivmesse ist nur bedingt erlaubt (s.°o.°Kap.°III.D.3.). – Fürbitte(n) um Priesterberufungen. – Thema: „Der Größte von Euch soll Euer Diener sein“ (Mt 23¥v,11¥0v). Intention: Für den Papst und alle im Dienst an der Einheit.¥p",
        "deceased": "1999 †¥tP.°Reinhold°Ohlert°OFMCap, Pfr.i.R., GR, Münster¥p2000 †¥tJosef°Köhler°(Leitmeritz/Fulda), Pfr.i.R., Neuhof¥p2001 †¥tFriedrich°Bromm, Pfr.i.R., Amöneburg¥-Erfurtshausen¥p2004 †¥tP.°Josef°Blumör°OMI, GR, Hünfeld¥p",
        "deceased_more": "1988 †¥tDDr.°Karl°Biba, Dr.°theol.°et°phil., OStR°i.R., Msgr., Horbach¥p1989 †¥tJosef°Hambach, Pfr.i.R., Lehnerz¥p1999 †¥tP.°Reinhold°Ohlert°OFMCap, Pfr.i.R., GR, Münster¥p2000 †¥tJosef°Köhler°(Leitmeritz/Fulda), Pfr.i.R., Neuhof¥p2001 †¥tFriedrich°Bromm, Pfr.i.R., Amöneburg¥-Erfurtshausen¥p2004 †¥tP.°Josef°Blumör°OMI, GR, Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "3": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag i.°d.°Weihnachtszeit¥0f – ¥fHerz¥-Jesu¥-Freitag¥0f¥pw¥tOder ¥fHeiligster Name Jesu¥0f, ¥fGed¥0f¥be¥w¥fMs¥0f:°HR°/°MBErg²°5f°/°Tg:°MBkl°1233°/ Votivmesse°MB°1096/²1128f°– ¥fML°IV°ᴺ444¥0f¥l¥vL:¥0v¥tPhil°2¥v,6¥_11¥0v¥t¥fML°VIII¥0f°372¥l¥vAPs:¥0v¥tPs°8¥v,4¥_5.6¥_7.8¥_9¥0v°(R:°¥v2ab¥0v)¥t350¥l¥vREv:¥0v¥tMt°1¥v,21¥0v¥t–––¥l¥vEv:¥0v¥tLk°2¥v,21¥_24¥0v¥tvgl. 432¥0w¥pw¥tOder ggf.°¥fVotivmesse vom hl. Herzen Jesu¥0f¥l¥w(MB°1100f/²1132f oder 257ff), Herz¥-Jesu¥-Präf,¥lL°und°Ev°vom°Tag oder aus°den°AuswL¥0w¥pw¥t¥fMs¥0f vom 3. Jan. (Tg°vor Ersch) oder vom°Ged, WeihnPräf, oder ggf.°Votivmesse,°Herz¥-Jesu¥-Präf¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum°Herz¥-Jesu¥-Fr:¥0f Die Votivmesse ist nur bedingt erlaubt (s.°o.°Kap.°III.D.3.), dann mit Herz¥-Jesu¥-Präfation.¥p",
        "deceased": "2017 †¥tJosef°Mönninger, Prälat, Domkapitular°i.R., Ehrendomkapitular°von°Plymouth/GB,°Fulda¥p",
        "deceased_more": "1958 †¥tRichard°Feussner, Pfarrer°in°Blankenau¥p1960 †¥tEmil°Ruez, Dechant, Pfarrer°in°Großenlüder¥p1969 †¥tOskar°Diel,°Ehrendechant,°Stadtpfarrer°in°Hanau¥p1979 †¥tJosef°Suchanek°(Olmütz), Pfarrer°in°Mottgers¥p2017 †¥tJosef°Mönninger, Prälat, Domkapitular°i.R., Ehrendomkapitular°von°Plymouth/GB,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "4": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag i.°d.°Weihnachtszeit¥0f – ¥fHerz¥-Mariä¥-Samstag¥0f¥pw¥tOder ggf.°¥fVotivmesse vom Unbefleckten Herzen Mariä¥0f, ¥wMBm°und°MLm°Nr.°28,°eig°Präf¥0w¥pw¥t¥fMs¥0f vom 4. Jan. (Tg°vor Ersch) oder ggf.°Votivmesse, WeihnPräf¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°(StB°I°248)°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Herz¥-Mariä¥-Sa:¥0f Die Votivmesse ist nur bedingt erlaubt (s.°o.°Kap.°III.D.3.).¥p",
        "deceased": "",
        "deceased_more": "1940 †¥tKaspar°Schulte, Pfarrer°in°Rudolstadt¥p1952 †¥tJohannes°Fischbach°(Prag), Pfr.i.R., Zierenberg¥p1958 †¥tOtto°Hellweg, Pfr.i.R., Erfurt¥p1963 †¥tKarl°Medler, Dechant, Pfarrer°in°Hünfeld¥p1969 †¥tEduard°Preiß°(Leitmeritz), Pfarrer°in°Niedersachswerfen¥p1974 †¥tP.°Leo°Rodenbeck°SDB, Pfarrer°in°Sannerz¥p1974 †¥tWilhelm°Wandzioch°(Breslau), Dechant, Pfarrer°in°Bad°Frankenhausen¥p1976 †¥tP.°Franz°Pietsch°OMI, Pfr.i.R., GR, Bad°Frankenhausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "5": {
        "liturgy": "¥fSo¥0f¥a¥t¥f2. Sonntag nach Weihnachten¥0f¥lPsalt:°II.°Woche – Te°Deum¥pw¥t¥fMs eig¥0f (MB°52/²50), Gl,°Cr, WeihnPräf, FSS:°MB°534¥pw¥t¥kabends:¥0k ggf.°¥fVorabendmesse°vom°H¥0f – ¥f1.°Vp°vom°folg°H¥0f (StB°I°283)°–°¥f1.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥sDas ¥fsonntägliche Taufgedächtnis mit Segnung und Austeilung des Weihwassers¥0f (Asperges, GL°124) sowie Vergebungsbitte (MB°1171/²1207) kann in allen Sonntagsmessen – auch in den Vorabendmessen – in allen Kirchen und Kapellen vorgenommen werden. Dieser Ritus ersetzt das Allgemeine Schuldbekenntnis. Nach der Vergebungsbitte folgen, soweit vorgesehen, Kyrie und Gloria.¥p¥sDer ¥fGedenktag des hl. Johannes Nepomuk Neumann¥0f entfällt in diesem Jahr.¥p",
        "deceased": "1997 †¥tDr.°Wolfgang°Klemp°(Schneidemühl/Fulda), Pfr.i.R., Apostol.°Protonotar,°Apost.°Visitator für Priester und Gläubige aus der Freien Prälatur°Schneidemühl,°Fulda¥p2000 †¥tJosef°Uhl, Pfr.i.R., GR, Eichenzell¥-Rönshausen¥p2002 †¥tElmar°Löhr, Pfarrer°in°Eschwege¥p",
        "deceased_more": "1930 †¥tJohannes°Pfeifer, Pfr.i.R., Wirtheim¥p1950 †¥tWilhelm°Walter°(Leitmeritz),°Seelsorger°in°Dittlofrod¥p1982 †¥tDr.°Johannes°Tenzler°(Breslau), Prof., Fulda¥p1997 †¥tDr.°Wolfgang°Klemp°(Schneidemühl/Fulda), Pfr.i.R., Apostol.°Protonotar,°Apost.°Visitator für Priester und Gläubige aus der Freien Prälatur°Schneidemühl,°Fulda¥p2000 †¥tJosef°Uhl, Pfr.i.R., GR, Eichenzell¥-Rönshausen¥p2002 †¥tElmar°Löhr, Pfarrer°in°Eschwege¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "6": {
        "liturgy": "¥fMo¥0f¥a¥t¥qhErscheinung des Herrn¥0f, ¥fHochfest¥0f¥lLektionar°zum°StB°I/1,°159 – Te°Deum – Kl.°Hore:°eig Ant°und°Ps¥pw¥t¥fMs eig¥0f, Gl,°Cr, eig°Präf, in°den Hg°I¥_III eig°Einschub, FSS:°MB°538°– 2.°Vp°vom°H°–°2.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fDas Hochfest der Erscheinung des Herrn ist im Bistum Fulda kirchlich gebotener Feiertag¥0f. Es besteht ¥fApplikations- sowie Sonn- und Feiertagspflicht¥0f (s.°o.°Kap.°I.C.1.).¥p¥s¥fSegnungen zum Hochfest der Erscheinung des Herrn¥0f s.°Benediktionale°Nr.°5,°S.°41ff.¥p¥sHeute kann vor dem Schlusssegen die ¥ffeierliche Ankündigung der kirchlichen Hochfeste des neuen Jahres¥0f gesungen werden (siehe Hinweis auf der Homepage des Liturgischen Institutes Trier, www.liturgie.de).¥p",
        "deceased": "2016 †¥tRudolf°Bergmann, Pfr.i.R., GR, Zierenberg¥p",
        "deceased_more": "1962 †¥tAloys°Falkenhan, Dechant, Pfarrer°in°Eschwege¥p1962 †¥tP.°Bonifatius°Hertel°OFMCap,°Pfarrkurat°in°Weißensee/Thür.¥p1971 †¥tP.°Heinrich°Eidens°SVD,°Prosynodalrichter°in°Fulda¥p2016 †¥tRudolf°Bergmann, Pfr.i.R., GR, Zierenberg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "7": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag nach Erscheinung¥0f¥l¥fOff¥0f vom 7.°Jan., Inv°von°Ersch°(StB°I°371)¥pw¥tOder ¥fhl. Valentin¥0f, Bi, ¥fGed¥0f°(RK)¥pw¥tOder ¥fhl. Raimund von Penyafort¥0f, Ordgr, ¥fGed¥0f¥pw¥t¥fMs¥0f vom 7. Jan. (Tg°nach Ersch) oder von°einem°der°Hll, Präf°Ersch°oder°Weihn¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1935 †¥tHermann°Lovis, Pfarrer°in°Kleinbartloff¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "8": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag nach Erscheinung¥0f¥l¥fOff¥0f vom 8.°Jan., Inv°von°Ersch°(StB°I°371)¥pw¥tOder ¥fhl. Severin¥0f, Mönch in Norikum, ¥fGed¥0f°(RK)¥pw¥t¥fMs¥0f vom 8. Jan. oder vom°Hl, Präf°Ersch°oder°Weihn¥p",
        "notes": "",
        "deceased": "1997 †¥tOtto°Rachhals,°Diakon,°Maintal¥-Bischofsheim¥p2000 †¥tEmil°Sapletal°(Olmütz/Fulda), Pfr.i.R., GR, Bad°Hersfeld¥p",
        "deceased_more": "1931 †¥tDDr.°Franz°Josef°Müller, Dr.°iur.°utr., Prälat, Domkapitular,°Generalvikar,°Fulda¥r?¥0r¥p1948 †¥tHermann°Kühn, Pfarrer°in°Ecklingerode¥p1956 †¥tRaimund°Vogel°(Leitmeritz), Pfr.i.R., Bad°Orb¥p1988 †¥tNorbert°Bartsch°(Prag/Glatz), Pfr.i.R., Ringleben/Kyffhäuser¥p1997 †¥tOtto°Rachhals,°Diakon,°Maintal¥-Bischofsheim¥p2000 †¥tEmil°Sapletal°(Olmütz/Fulda), Pfr.i.R., GR, Bad°Hersfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "9": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag nach Erscheinung¥0f¥l¥fOff¥0f vom 9.°Jan., Inv°von°Ersch°(StB°I°371)¥pw¥t¥fMs¥0f vom 9. Jan., Präf°Ersch°oder°Weihn¥p",
        "notes": "",
        "deceased": "1999 †¥tP.°Bernward°Ziwes°OFM, GR, Ulm¥p",
        "deceased_more": "1965 †¥tAlfons°Riedel°(Breslau), Pfr.i.R., Spahl/Rhön¥p1974 †¥tAnton°Müller, Pfarrer°in°Magdlos¥p1994 †¥tWolfgang°Döring, Pfr.i.R., GR, Treffurt¥p1999 †¥tP.°Bernward°Ziwes°OFM, GR, Ulm¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "10": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag nach Erscheinung¥0f¥l¥fOff¥0f vom 10.°Jan., Inv°von°Ersch°(StB°I°371)¥pw¥t¥fMs¥0f vom 10. Jan., Präf°Ersch°oder°Weihn¥p",
        "notes": "",
        "deceased": "1996 †¥tRichard°Burkard, Pfr.i.R., GR, Waltershausen¥-Winterstein¥p2002 †¥tFranz°Czotscher°(Budweis/Fulda), Pfr.i.R., GR, Stadtallendorf¥p",
        "deceased_more": "1929 †¥tHermann°Malkmus, Pfr.i.R., Gersfeld¥p1988 †¥tJohannes°Arnau°(Danzig), Pfr.i.R., Deuna/Eichsfeld¥p1996 †¥tRichard°Burkard, Pfr.i.R., GR, Waltershausen¥-Winterstein¥p2002 †¥tFranz°Czotscher°(Budweis/Fulda), Pfr.i.R., GR, Stadtallendorf¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "11": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag nach Erscheinung¥0f¥l¥fOff¥0f vom 11.°Jan., Inv°von°Ersch°(StB°I°371)¥pw¥t¥fMs¥0f vom 11. Jan., Präf°Ersch°oder°Weihn¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom F¥0f – ¥f1.°Vp°vom°folg°F¥0f°(StB°I°325)°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1960 †¥tJoseph°Scholle, Pfr.i.R., Bad°Sassendorf¥p1980 †¥tGottfried°Köhler, Pfr.i.R., GR, Diedorf¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "12": {
        "liturgy": "¥fSo¥0f¥a¥t¥qfTaufe des Herrn¥0f, ¥fFest¥0f – Te°Deum – Kl.°Hore:°eig°Ant, Ps°vom°So°der°III.°Woche¥pw¥t¥fMs eig¥0f (MB°72/²70), Gl,°Cr, eig°Präf, FSS:°MB°548¥_553 – ¥wLL°und°Ev:°ML°C/III°54¥0w¥p",
        "notes": "",
        "deceased": "2018 †¥tWilhelm°Acker, Pfr.i.R., Großkrotzenburg¥p2023 †¥tReinhold°Hartmann, Pfr.i.R., GR, Fulda¥p",
        "deceased_more": "1948 †¥tKarl°Wess, Pfarrer°in°Schröck¥p1956 †¥tGregor°Wiesner°(Breslau), Pfarrer°in°Berga/Elster¥p1959 †¥tHeinrich°Helbig, Pfr.i.R., Mengelrode¥p1973 †¥tEmil°Goldbach, Pfr.i.R., GR, Ehrendechant,°Fulda¥p2018 †¥tWilhelm°Acker, Pfr.i.R., Großkrotzenburg¥p2023 †¥tReinhold°Hartmann, Pfr.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "13": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°im°Jahreskreis¥lPsalt:°I.°Woche¥pw¥tOder ¥fhl. Hilarius¥0f, Bi, Kl, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°282;°Gg°301;°Sg°276¥0w¥p",
        "notes": "¥fEnde der Weihnachtszeit¥0f¥j¥fZEIT „IM JAHRESKREIS“¥0f (1. Teil)¥lvom°Montag°nach°dem°Fest°der°Taufe°des°Herrn bis°zum°Dienstag°vor°dem°Aschermittwoch¥jPerikopen an den Wochentagen: ¥fML V, Jahr I¥0f¥p¥fStB¥0f und ¥fLitHor¥0f: ¥fBand III¥0f¥p¥fLektionar zum StB I/4¥0f¥p¥p¥fHinweise:¥0f¥p¥s¥fIn der Zeit im Jahreskreis¥0f stehen an jenen Wochentagen, auf die kein Hochfest, Fest oder gebotener Gedenktag fällt, ¥ffür die Messfeier folgende Texte zur Wahl¥0f:¥p–°¥fMesse vom Tag¥0f: die ¥f34 Messformulare der Sonntage¥0f im Jkr., ¥fWochentagsmessen¥0f (MB°275¥_304), ¥fTagesgebete¥0f (MB°305¥_320), ¥fGabengebete¥0f (MB°348¥_351), ¥fSchlussgebete¥0f (MB°525¥_529) zur Auswahl. ¥fVorschläge zur Auswahl¥0f von Tagesgebet°(Tg), Gabengebet°(Gg) und Schlussgebet°(Sg), die sich am Evangelium des Tages orientieren, sind bei der „Messe nach Wahl“ im Kalendarium jeweils angegeben (vgl. Werkbuch zum Gotteslob VIII/2: Die Wochentage während des Jahres, 1978). Die Seitenzahl bezieht sich auf das MB°II°1975 und MB°II,°2.°Auflage°1988.¥p–°¥fMarien-Messen¥0f (MBm°187¥_297), (vgl.°AEM°316c, MBm, Past.°Einf.°37), vor allem das Gedächtnis Mariens am Samstag; ¥p–°¥fMessen eines/einer Heiligen¥0f, dessen/deren Gedächtnis vorgesehen oder der/die an diesem Tag im Martyrologium Romanum verzeichnet ist (vgl.°AEM°316c); ¥p–°¥fMessen für ein besonderes Anliegen oder Votivmessen¥0f – bei echter Notwendigkeit oder aus pastoraler Erfordernis auch an gebotenen Ged (AEM°333);¥p–°eine ¥fBegräbnismesse¥0f ist an allen Tagen möglich, außer an den gebotenen Hochfesten (AEM°336);¥p–°¥fMessen für Verstorbene nach Eintreffen der Todesnachricht und am ersten Jahrestag¥0f – auch an gebotenen Ged möglich (AEM°337); ¥p–°¥fMessen für bestimmte Verstorbene¥0f (sog. „tägliche Totenmesse“, AEM°337).¥p¥sAn den kommenden Wochentagen kann n.B. das ¥fMessformular „Zum Jahresbeginn“¥0f (MB°1061/²1088,°Nr.°24) genommen werden, außer am 17.°Jan.¥p¥sAm Schluss der Komplet steht in der Zeit im Jahreskreis die Marianische Antiphon ¥f„Salve Regina“¥0f (GL 666¥v,4¥0v) bzw. ¥f„Sei gegrüßt, o Königin“¥0f (vgl.°GL°536) oder eine andere Marianische Antiphon. Nur die Ant „Regina caeli“ bzw. „O¥°Himmelskönigin, frohlocke“ ist der Osterzeit vorbehalten.¥p",
        "deceased": "2002 †¥tKarl°Eufinger, Pfr.i.R., GR, Kirchhain¥p2003 †¥tKlemens°Zelazny°(Schneidemühl/Fulda), Pfr.i.R., Konsistorialrat,°Fulda¥p",
        "deceased_more": "1957 †¥tHeinrich°Dicke, Pfr.i.R., Dipperz¥p1963 †¥tAndreas°Führ, Pfr.i.R., Liebhards/Krs.°Fulda¥p1979 †¥tAloys°Grösch,°Superior°i.R., Msgr., GR, Fulda¥p1980 †¥tJohannes°Schulz°(Schneidemühl),°StR°i.R., GR, Bad°Soden¥p2002 †¥tKarl°Eufinger, Pfr.i.R., GR, Kirchhain¥p2003 †¥tKlemens°Zelazny°(Schneidemühl/Fulda), Pfr.i.R., Konsistorialrat,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "14": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°306,3;°Gg°286;°Sg°288¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1942 †¥tAugust°Ebel, Pfr.i.R., Neustadt¥p1942 †¥tAnton°Ley, Dechant, Pfarrer°in°Hünfeld¥p1942 †¥tKonrad°Trageser, Pfarrer°in°Marbach, gestorben°im°KZ°Dachau¥p1964 †¥tRichard°Koch, Dechant, Pfarrer°in°Birkungen/Eichsfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "15": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°11/²9;°Gg+Sg°280 ¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute ist der 55. Geburtstag von Bischof Michael.¥p",
        "deceased": "",
        "deceased_more": "1943 †¥tAloys°Bilz, Pfarrer°in°Hosenfeld¥p1951 †¥tJoseph°Wagner, Pfr.i.R., Martinfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "16": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°316,30;°Gg+Sg°286¥0w¥p",
        "notes": "",
        "deceased": "1998 †¥tP.°Urban°Westerwoudt°OFMCap,°Bad°Mergentheim¥p2008 †¥tDr.°Lothar°Rudolph°(Paderborn/Fulda), Pfr.i.R., Fulda¥p",
        "deceased_more": "1975 †¥tAndreas°Portner°(Prag), Pfr.i.R., Dipperz¥-Armenhof¥p1992 †¥tP.°Florentin°Vogt°OFM, Pfr.i.R., GR, Hülfensberg¥p1998 †¥tP.°Urban°Westerwoudt°OFMCap,°Bad°Mergentheim¥p2008 †¥tDr.°Lothar°Rudolph°(Paderborn/Fulda), Pfr.i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "17": {
        "liturgy": "¥fFr¥0f¥t¥fHl. Antonius¥0f, Mönchsvater, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "1981 †¥t¥fHugo°Aufderbeck¥0f,°Bischof,°Apostol.°Administrator°in°Erfurt¥p2002 †¥tWilhelm°Eberl, Pfr.i.R., OStR°i.K.i.R., Kassel¥p2017 †¥tAlois°Krause°(Limburg), Pfr.i.R., Fulda¥p2021 †¥tBernhard°Möller, Pfr.i.R., GR, Hünfeld¥p",
        "deceased_more": "1933 †¥tKarl°Alexander°Ebert,°Konviktassistent°in°Fulda¥p1981 †¥t¥fHugo°Aufderbeck¥0f,°Bischof,°Apostol.°Administrator°in°Erfurt¥p2002 †¥tWilhelm°Eberl, Pfr.i.R., OStR°i.K.i.R., Kassel¥p2017 †¥tAlois°Krause°(Limburg), Pfr.i.R., Fulda¥p2021 †¥tBernhard°Möller, Pfr.i.R., GR, Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "18": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°319,39;°Gg+Sg°278¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥sIn der ¥fWeltgebetswoche für die Einheit der Christen vom 18. bis 25. Januar¥0f unter dem ¥fThema „Glaubst Du das?“¥0f (Joh 11¥v,26¥0v) kann an beliebigen Wochentagen, auch am Sonntag, eine ¥fVotivmesse um die Einheit der Christen¥0f gefeiert werden. Formular: Ms für besondere Anliegen Nr.°13°A,°B°oder°C (MB°1040¥_1047/²1062¥_1069), am Sonntag mit Gl, eig°Präf, Farbe:°grün. LL°und°Evv:°ML°VIII°110¥_130. ¥fIn den Fürbitten möge täglich um die Einheit aller Christen gebetet werden.¥0f¥p",
        "deceased": "",
        "deceased_more": "1938 †¥tHeinrich°Fiege, Pfarrer°in°Mittelkalbach¥p1948 †¥tGeorg°Hauptfleisch°(Breslau), Pfr.i.R., Schwarzbach¥p1950 †¥tHeinrich°Funke, Pfr.i.R., Bochum¥-Riemke¥p1966 †¥tJoseph°Wand, Pfarrer°in°Silberhausen/Eichsfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "19": {
        "liturgy": "¥fSo¥0f¥a¥t¥f2. Sonntag im Jahreskreis¥0f¥lPsalt:°II.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥pg¥tOder ¥fVotivmesse um die Einheit der Christen¥0f, MB°1040¥_1047/²1062¥_1069, Gl,°Cr, ¥fbes.°Fürbitten¥0f, eig°Präf, FSS, LL°und°Ev°vom°So oder aus den AuswL ML°VIII°110–130¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fHeute kann die Votivmesse für die Einheit der Christen gefeiert werden.¥0f¥p",
        "deceased": "",
        "deceased_more": "",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "20": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°im°Jahreskreis¥pr¥tOder ¥fhl. Fabian¥0f, Pp, Märt, ¥fGed¥0f¥pr¥tOder ¥fhl. Sebastian¥0f, Märt, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°305,2;°Gg°348,2;°Sg°529,15¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1967 †¥tGerhard°Matheis°(Breslau), Pfr.i.R., Lütter¥p1971 †¥tEmil°Schwalbach, Pfarrer°in°Geismar/Rhön¥p1977 †¥tP.°Petrus°Pollak°OT, Pfarrer°in°Wetter¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "21": {
        "liturgy": "¥fDi¥0f¥t¥fHl. Agnes¥0f, Jgfr, Märt, ¥fGed¥0f – Inv°aus°dem°Com,°LuV°eig¥pr¥tOder ¥fhl. Meinrad¥0f, Einsiedler, Märt, ¥fGed¥0f°(RK)¥pr¥t¥fOff und Ms¥0f von einem der Ged, n.B.°Hg°I¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fDie hl. Agnes steht im ARK als gebotener Ged.¥0f Wenn nicht der Ged des hl. Meinrad begangen wird, sind daher im Off und in der Ms die Texte zum Ged der hl. Agnes zu nehmen.¥p",
        "deceased": "2002 †¥tP. Dr.°Leonard°Oreč°OFM, GR, Zagreb/Kroatien¥p2003 †¥tGodwin°Sixtus°Ekuojo°Onuh°(Idah/Nigeria),°Fulda¥p2004 †¥tAlois°Bilo, Pfr.i.R., GR, Fulda¥p2004 †¥tP. Drs.°Johannes°Gerardus°Donkers°OSC, Pfarrer°in°Trendelburg¥p2010 †¥tNorbert°Waclawek°(Breslau/Fulda), Pfr.i.R., Msgr., Fulda¥p",
        "deceased_more": "1940 †¥tWilhelm°Rose, Pfarrer°in°Hausen¥p1946 †¥tJoseph°Sauer, Dechant, Pfarrer°in°Kirchhasel¥p1970 †¥tJohann°Urner°(Königgrätz), Pfr.i.R., GR, Neuhof¥p1973 †¥tErich°Hansmann, Pfarrer°in°Pfaffschwende/Eichsfeld¥p1976 †¥tMaximilian°Völkl°(Leitmeritz), Pfr.i.R., Mackenzell¥p1978 †¥tFerdinand°von°Prondzynski°(Breslau), Pfr.i.R., Eisenach¥p1985 †¥tMedard°Knauf, Pfr.i.R., Burghaun¥p2002 †¥tP. Dr.°Leonard°Oreč°OFM, GR, Zagreb/Kroatien¥p2003 †¥tGodwin°Sixtus°Ekuojo°Onuh°(Idah/Nigeria),°Fulda¥p2004 †¥tAlois°Bilo, Pfr.i.R., GR, Fulda¥p2004 †¥tP. Drs.°Johannes°Gerardus°Donkers°OSC, Pfarrer°in°Trendelburg¥p2010 †¥tNorbert°Waclawek°(Breslau/Fulda), Pfr.i.R., Msgr., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "22": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°im°Jahreskreis¥pr¥tOder ¥fhl. Vinzenz¥0f, Diak, Märt, ¥fGed¥0f¥pw¥tOder ¥fMs vom hl. Vinzenz Pallotti¥0f, Pr,°Ordgr¥be¥w¥fMs¥0f:°HR⁵¥l¥vL:¥0v¥tJes°58¥v,6¥_11¥0v¥t¥fML°VI¥0f°548/ᴺ539¥l¥voder¥0v¥t1°Kor°13¥v,1¥_8.13¥0v¥tvgl. 551/ᴺ542¥l¥vAPs:¥0v¥tPs°22¥v,23¥_24.26¥_27.28¥_29¥0v°(R:°¥v23a¥0v)¥t¥fML°B/II¥0f°°°°°°°°°242¥l¥vREv:¥0v¥tvgl.°Jes°52¥v,7¥0v¥t¥fML°VI¥0f°609/ᴺ606¥l¥vEv:¥0v¥tLk°10¥v,1¥_9¥0v¥t663/ᴺ664¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°237;°Gg°350,7;°Sg°525,2¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1963 †¥tPaul°Sauerbier, Pfarrer°in°Künzell¥p1986 †¥tP.°Cyrill°Eisermann°OFM,°Kaplan°in°Kirchhain¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "23": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°im°Jahreskreis¥pw¥tOder ¥fsel. Heinrich Seuse¥0f, Ordpr, Myst, ¥fGed¥0f°(RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°315,29;°Gg°349,4;°Sg°525,2¥0w¥p",
        "notes": "",
        "deceased": "2023 †¥tHermann°Weiser, Pfr.i.R., Kassel¥p",
        "deceased_more": "1945 †¥tDDr.°Gregor°Richter, Prof., Dr.°theol.°et°phil., Msgr., Domkapitular,°Fulda¥p1949 †¥tAugustin°Eckhardt, Pfr.i.R., Beuren/Eichsfeld¥p2023 †¥tHermann°Weiser, Pfr.i.R., Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "24": {
        "liturgy": "¥fFr¥0f¥t¥fHl. Franz von Sales¥0f, Bi, Ordgr, Kl, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1954 †¥tRobert°Schade, Dechant, Pfarrer°in°Großbartloff¥p1981 †¥tFranz°Apel, Pfr.i.R., Kirchgandern¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "25": {
        "liturgy": "¥fSa¥0f¥t¥qfBekehrung des hl. Apostels Paulus¥0f, ¥fFest¥0f¥lTe Deum – Kl.°Hore: eig Ant, Ps vom°Wt¥pw¥t¥fMs eig¥0f, Gl, ApPräf I, FSS:°MB°556 oder 558¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥sZum heutigen Fest passen die ¥fLieder GL°275¥0f (auch nach den Melodien GL°484 oder GL°81 singbar) ¥fund GL°873¥v,3+4¥0v¥0f (auch nach den Melodien von GL°280 oder GL°872 singbar). Für den Gesang des Hymnus aus dem Stundenbuch als Gemeindelied steht unter www.direktorium.bistum-fulda.de ein Liedblatt zum Download bereit.¥p",
        "deceased": "2009 †¥tJan°Karol°Kozaczka°(Danzig/Fulda), Pfarrer°in°Buttlar¥p2016 †¥tP.°Josef°Friedrich°Otto°OMI,°Hünfeld¥p",
        "deceased_more": "1932 †¥tFranz°Atzert, Dechant, Pfarrer°in°Romsthal¥p1969 †¥tFelix°Vogelsang°(Schneidemühl), Pfr.i.R., Hünfeld¥p1973 †¥tJosef°Schrimpf, Pfr.i.R., Gersfeld¥p1991 †¥tClemens°Reinhardt, Pfr.i.R., Kella¥p2009 †¥tJan°Karol°Kozaczka°(Danzig/Fulda), Pfarrer°in°Buttlar¥p2016 †¥tP.°Josef°Friedrich°Otto°OMI,°Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "26": {
        "liturgy": "¥fSo¥0f¥a¥t¥f3. Sonntag im Jahreskreis¥0f – ¥fSonntag°des°Wortes°Gottes¥0f – ¥fÖkumenischer°Bibelsonntag¥0f¥lPsalt:°III.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fHeute¥0f wird zum ¥f6. Mal der „Sonntag des Wortes Gottes“¥0f begangen. Papst Franziskus hat diesen neuen Themensonntag mit dem Motu proprio „Aperuit illis“ am 30. September 2019, dem Gedenktag des hl. Hieronymus, zu Beginn des Jubiläumsjahres anlässlich seines 1600. Todestages, eingeführt. ¥fDieser „Sonntag des Wortes Gottes“ soll der Feier, der Betrachtung und der Verbreitung des Wortes gewidmet sein.¥0f Näheres hierzu unter www.vatican.va › Apostolische Schreiben ›. Siehe auch den nachfolgenden Hinweis!¥p¥s¥fHeute¥0f ist der ¥fÖkumenische Bibelsonntag¥0f, den in Deutschland viele christliche Gemeinden seit über 40 Jahren am letzten Sonntag im Januar begehen. In Anerkennung dieser sehr lebendigen Tradition hat die DBK das Anliegen des Papstes mit der ökumenischen Praxis in Deutschland verbunden und festgelegt, dass der ¥fSonntag des Wortes Gottes künftig immer am letzten Sonntag im Januar¥0f gefeiert wird und ¥fdamit der Ökumenische Bibelsonntag und der Sonntag des Wortes Gottes immer an einem gemeinsamen Termin begangen werden¥0f.¥p¥sDer ¥fGed der hll. Timotheus und Titus¥0f entfällt in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1932 †¥tEduard°Braun, Dechant, Pfarrer°in°Hanau¥p1938 †¥tDr.°Franz°Anton°Rehrmann, Pfr.i.R., Lenne/Sauerland¥p1986 †¥tJosef°Fröhlich, Pfr.i.R., Fulda¥p1991 †¥tOtmar°Neubauer, Pfarrer°in°Nentershausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "27": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Angela Merici¥0f, Jgfr, Ordgr, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°1104ff/²1136ff¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fHeute¥0f ist der ¥finternationale Gedenktag für die Opfer des Nationalsozialismus¥0f (und gegen weltweiten Antisemitismus). Gebet und Fürbitte.¥p",
        "deceased": "1997 †¥tJan°Kapala°(Łódź/Fulda), Pfr.i.R., Myślenice/Polen¥p2012 †¥tAnton°Schütz, Prälat,°Ehrendomkapitular, Dietingen¥-Gösslingen¥p2021 †¥tHubert°Kümpel, Pfr.i.R., GR, Fulda¥-Horas¥p",
        "deceased_more": "1939 †¥tTheodor°Bottermann,°Kaplan°in°Volkmarsen¥p1971 †¥tOtto°Rosenkranz°(Ermland), Pfarrer°in°Züntersbach¥p1972 †¥tFriedrich°Pasquay°(Breslau), Pfr.i.R., Oberprechtal¥p1997 †¥tJan°Kapala°(Łódź/Fulda), Pfr.i.R., Myślenice/Polen¥p2012 †¥tAnton°Schütz, Prälat,°Ehrendomkapitular, Dietingen¥-Gösslingen¥p2021 †¥tHubert°Kümpel, Pfr.i.R., GR, Fulda¥-Horas¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "28": {
        "liturgy": "¥fDi¥0f¥t¥fHl. Thomas von Aquin¥0f, Ordpr, Kl, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged,°BuM°eig¥p",
        "notes": "",
        "deceased": "1996 †¥tJosef°Jilek, Pfr.i.R., GR, Bad°Orb¥p2000 †¥tGerhard°Dluhosch°(Olmütz/Fulda), Pfr.i.R., GR, Mittelkalbach¥p",
        "deceased_more": "1966 †¥tAlois°Dittrich°(Schneidemühl),°Konsistorialrat, Pfarrer°in°Kassel,°St.°Bonifatius¥p1982 †¥tKarl°Blumenthal, Pfr.i.R., Zella/Eichsfeld¥p1996 †¥tJosef°Jilek, Pfr.i.R., GR, Bad°Orb¥p2000 †¥tGerhard°Dluhosch°(Olmütz/Fulda), Pfr.i.R., GR, Mittelkalbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "29": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°307,6;°Gg°348,3;°Sg°528,10¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1945 †¥tAnselm°Schuchart, Pfr.i.R., Dingelstädt¥p1965 †¥tDDDr.°Franz°Ranft, Prof., Dr.°phil., Dr.°theol., Dr.°theol.°habil., OStD°i.R., Msgr., Fulda¥p1981 †¥tPeter°Degenhardt, Pfarrer°in°Seiferts¥p1985 †¥tLudwig°Roth, GR, Pfarrer°in°Stadtallendorf¥p1986 †¥tWinfried°Alt, Dechant, Pfarrer°in°Ecklingerode¥p1988 †¥tGregor°Garske°(Schneidemühl), Pfr.i.R., Konsistorialrat,°Markt°Wallerstein¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "30": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°65/²63;°Gg°350;°Sg°61/²59¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "31": {
        "liturgy": "¥fFr¥0f¥t¥fHl. Johannes Bosco¥0f, Pr, Ordgr, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "2004 †¥tP.°Reinhold°Dopp°SDB, GR, Hannover¥p2016 †¥tHermann°Mühl, Prälat, GR, Domkapitular°i.R., Fulda¥p2016 †¥tHermann°Trost, Pfr.i.R., StD°i.R., GR, Hanau¥-Großauheim¥p",
        "deceased_more": "1933 †¥tHermann°Pfafferott, Pfarrer°in°Effelder¥p2004 †¥tP.°Reinhold°Dopp°SDB, GR, Hannover¥p2016 †¥tHermann°Mühl, Prälat, GR, Domkapitular°i.R., Fulda¥p2016 †¥tHermann°Trost, Pfr.i.R., StD°i.R., GR, Hanau¥-Großauheim¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      }
    },
    "2": {
      "1": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg+Gg°1078/²1108;°Sg°1080/²1110¥0w¥pw¥t¥kabends:¥0k ggf.°¥fVorabendmesse°vom°F¥0f – ¥f1.°Vp°vom°folg°F¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fHeute Abend und an den folgenden Tagen kann nach den Messfeiern der Blasiussegen mit brennenden Kerzen erteilt werden.¥0f Die Blasiuskerzen erhalten eine eigene Segnung (s.°Benediktionale°Nr.°6,°S.°51ff).¥p",
        "deceased": "2011 †¥tJanisław°Jałyński°(Kulm/Fulda), Pfr.i.R., GR, Kassel¥p",
        "deceased_more": "1956 †¥tWalter°Rhoden, Pfarrer°in°Westhausen¥p1973 †¥tGeorg°Gutsfeld, Pfr.i.R., Jena¥p2011 †¥tJanisław°Jałyński°(Kulm/Fulda), Pfr.i.R., GR, Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "2": {
        "liturgy": "¥fSo¥0f¥a¥t¥qfDarstellung des Herrn¥0f, ¥fFest – Welttag°des°gottgeweihten°Lebens¥0f – Te°Deum – Kl.°Hore: eig Ant,°Ps°vom°So°der°1.°Woche¥pw¥t¥fMs eig¥0f, Gl,°Cr, eig°Präf, in°den Hg°I¥_III eig°Einschub, FSS:°MB°548/I°– 2.°Vp°vom°F°–°2.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥sDie Liturgie zum 4. Sonntag im Jkr. entfällt in diesem Jahr.¥p¥s¥fHeute am Fest der Darstellung des Herrn Kerzenweihe mit Prozession oder mit feierlichem Einzug¥0f wie im MB°619/622 angegeben. – Gesänge zur Prozession: GL°372, GL°374, GL°38¥p¥sZum heutigen Fest stehen im „Gotteslob“ die ¥fLieder GL°374 und GL°765¥0f (letzteres auch nach den Melodien GL°872, 873 und 280 singbar) und der ¥fKehrvers GL°264¥v,1+2¥0v¥0f (lat. und deutsch).¥p¥s¥fHeute ist auch der Welttag des gottgeweihten Lebens.¥0f Fürbitten für alle Gottgeweihten: Ordensleute, Mitglieder der Säkularinstitute und Gesellschaften apostolischen Lebens, weiterer Geistlicher Gemeinschaften, für die gottgeweihten Jungfrauen und um Berufungen zum gottgeweihten Leben.¥p",
        "deceased": "1997 †¥tDr.°Hubert°Hack, Prof., Prälat,°Ehrendomkapitular,°Fulda¥p",
        "deceased_more": "1960 †¥tFranz°Anton°Hahn, Pfarrer°in°Neustadt¥p1964 †¥tWilhelm°Lorenz, Pfarrer°in°Geisleden/Eichsfeld¥p1969 †¥tJosef°Klug°(Königgrätz), Pfr.i.R., Dermbach¥p1977 †¥tAdolf°Joseph°Arend, Pfr.i.R., GR, Fulda¥p1977 †¥tReinhold°Juling, Pfarrer°in°Margretenhaun¥p1997 †¥tDr.°Hubert°Hack, Prof., Prälat,°Ehrendomkapitular,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "3": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°im°Jahreskreis¥lPsalt:°IV.°Woche¥pw¥tOder ¥fhl. Ansgar¥0f, Bi, Glb, ¥fGed¥0f°(RK/GK)¥pr¥tOder ¥fhl. Blasius¥0f, Bi, Märt, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°1039/²1061;°Gg°1080/²1110;°Sg°303¥0w¥p",
        "notes": "",
        "deceased": "1999 †¥tP. Dr.°Johannes°Ries°OMI, Prof., Hünfeld¥p",
        "deceased_more": "1944 †¥tJohannes°Hunold, Pfarrer°in°Hildebrandshausen¥p1981 †¥tHermann°Josef°Heim, Pfr.i.R., GR, Fulda¥p1999 †¥tP. Dr.°Johannes°Ries°OMI, Prof., Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "4": {
        "liturgy": "¥fDi¥0f¥t¥qfHl. Rabanus Maurus¥0f, Bi, ¥fFest¥0f (FD)¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pw¥t¥fMs eig¥0f, Gl, Präf°Ht, FSS:°MB°560¥bf¥wML°V°542/ᴺ544 oder ¥vL°(ggf.°2.°L):¥0v°1°Kor°1¥v,18¥_25¥0v°(ML°V°581/ᴺ588f)¥0w¥p",
        "notes": "¥fHinweise:¥0f¥p¥sNutzer der Stundenbuch-App des DLI finden die ¥fTexte für das Stundengebet zur heutigen Eigenfeier des Diözesankalenders in der Datei FD-Stundengebet.PDF¥0f (s.°o.°S.°87, Nr.°3).¥p¥sZum heutigen ¥fFest des hl. Rabanus Maurus (FD)¥0f können die Hymnen zu Laudes und Vesper aus den „Eigenfeiern der Diözese Fulda – Stundengebet“ nach den Melodien von GL°81 oder GL°484 als Gemeindelied gesungen werden (Liedblatt zum Download auf www.direktorium.bistum-fulda.de). Ebenso eignet sich der dem hl. Rabanus Maurus zugeschriebene ¥fHymnus „Veni Creator Spiritus“¥0f (GL°341 und 342, vgl. 351).¥p¥sHeute findet zum 5. Mal der ¥f„Internationale Welttag der Geschwisterlichkeit aller Menschen“¥0f statt, den die Vereinten Nationen (UN) am 21. Dezember 2020 ausgerufen haben. Der Tag wurde in Anlehnung an das Unterzeichnungsdatum des ¥fAbu-Dhabi-Dokumentes von Papst Franziskus und dem Großimam von Al-Azhar, Kairo/Ägypten, Ahmad Al-Tayyeb „Über die Brüderlichkeit aller Menschen für ein friedliches Zusammenleben in der Welt“ am 4. Februar 2019¥0f gewählt, greift die Anliegen und Ziele dieses Dokumentes auf und schreibt sie fort. ¥p",
        "deceased": "1996 †¥tDDr.°Joseph°Gottschalk°(Breslau), Dr.°phil., Dr.°theol.°h.c., StR°i.R., Msgr., GR, Seeheim¥-Malchen¥p2012 †¥tJosef°Cudok,°Diakon,°Stade¥p",
        "deceased_more": "1932 †¥tJoseph°Kraus, Pfr.i.R., KämmerzelI¥p1937 †¥tAnton°Hillenbrand, Pfarrer°in°Großenlüder¥p1967 †¥tAlfons°Lins, Pfr.i.R., Bad°Orb¥p1980 †¥tDr.°Karl°Wortner°(Prag/Limburg),°Frankfurt°a.°M.¥p1996 †¥tDDr.°Joseph°Gottschalk°(Breslau), Dr.°phil., Dr.°theol.°h.c., StR°i.R., Msgr., GR, Seeheim¥-Malchen¥p2012 †¥tJosef°Cudok,°Diakon,°Stade¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "5": {
        "liturgy": "¥fMi¥0f¥t¥fHl. Agatha¥0f, Jgfr, Märt, ¥fGed¥0f¥pr¥t¥fMs von der Hl¥0f, n.B.°Hg°I – Off°vom°Ged,°BuM°eig¥p",
        "notes": "",
        "deceased": "2017 †¥tEdgar°Hohmann, Pfr.i.R., GR, Volkmarsen¥p",
        "deceased_more": "1921 †¥tStephan°Gnau, Pfarrer°in°Uttrichshausen¥p1963 †¥tGereon°Hünseler, Pfr.i.R., Deuna/Eichsfeld¥p1964 †¥tAdrian°Pilot°(Breslau), Pfr.i.R., Bad°Hersfeld¥p2017 †¥tEdgar°Hohmann, Pfr.i.R., GR, Volkmarsen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "6": {
        "liturgy": "¥fDo¥0f¥t¥fHll. Paul Miki und Gefährten¥0f, Märtt, ¥fGed¥0f – ¥fPriesterdonnerstag¥0f¥pr¥t¥fMs von den Hll¥0f – Off°vom°Ged¥pw¥tOder ggf.°¥fMs um Priesterberufe¥0f ¥w(MB°1035f/²1057),¥lL°und°Ev vom°Tag oder aus°den°AuswL¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Priesterdonnerstag (monatl. Gebetstag für geistliche Berufe):¥0f Die Votivmesse ist nur bedingt erlaubt (s.°o.°Kap.°III.D.3.). – Fürbitte(n) um Priesterberufungen. – Thema: „Geht zu allen Völkern!“ (Mt 28¥v,19¥0v). Intention: Für alle, die das Wort Gottes in fremde Kulturen tragen.¥p",
        "deceased": "",
        "deceased_more": "1952 †¥tFranz°Xaver°Roth, Pfr.i.R., Leinefelde¥p1967 †¥tMartin°Böhne, Pfr.i.R., Ehrendechant,°Naumburg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "7": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°im°Jahreskreis – ¥fHerz¥-Jesu¥-Freitag¥0f¥pw¥tOder ¥fVotivmesse vom heiligsten Herzen Jesu¥0f¥l¥w(MB°1100f/²1132f oder 257ff), Herz¥-Jesu¥-Präf,¥lL°und°Ev°vom°Tag oder aus°den°AuswL¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°233;°Gg+Sg°225/²224f¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum°Herz¥-Jesu¥-Fr:¥0f Die Votivmesse ist erlaubt.¥p",
        "deceased": "2017 †¥tP. Dr.°Sigfried°Klöckner°OFM, GR, Fulda¥p",
        "deceased_more": "1942 †¥tJoseph°Richter, Pfr.i.R., Herolz¥p1964 †¥tEduard°Lerch, Pfr.i.R., Siemerode/üb.°Heiligenstadt¥p1965 †¥tJosef°Löbel°(Leitmeritz), Pfr.i.R., Bachrain¥p2017 †¥tP. Dr.°Sigfried°Klöckner°OFM, GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "8": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°im°Jahreskreis – ¥fHerz¥-Mariä¥-Samstag¥0f – ¥fWeltgebetstag°gegen°den°Menschenhandel¥0f¥pw¥tOder ¥fhl. Hieronymus Ämiliani¥0f, Ordgr, ¥fGed¥0f¥pw¥tOder ¥fhl. Josefine Bakhita¥0f, Jgfr, ¥fGed¥0f¥be¥w¥fMs¥0f:°HR°/°MBkl°1234f°/°MBErg²°6°/ Com°Jgfr°1¥_3°– ¥fML°V°ᴺ556¥0f¥l¥vL:¥0v¥t1°Kor°7¥v,25¥_35¥0v¥tML°V°612¥l¥vAPs:¥0v¥tPs°45¥v,11¥_12.14¥_15.16¥_17¥0v¥t576¥l¥vREv:¥0v¥tvgl.°Mt°25¥v,10¥0v¥t857¥v,2¥0v¥l¥vEv:¥0v¥tMt°25¥v,1¥_13¥0v¥t576¥0w¥pw¥tOder ¥fVotivmesse vom Unbefleckten Herzen Mariä¥0f, ¥wMBm°und°MLm°Nr.°28,°eig°Präf¥0w¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°314,25;°Gg°350,8;°Sg°527,8¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute ist zum 11. Mal der von Papst Franziskus im Januar 2015 ausgerufene ¥fWeltgebets- und Aktionstag gegen den Menschenhandel (zur Verhinderung von Verbrechen gegen die Menschlichkeit)¥0f. Gebet, Besinnung und Fürbitte in diesem Anliegen. Vgl. hierzu Botschaft von Papst Franziskus zum Weltfriedenstag 2015 und Gebet zur hl. Josefine Bakhita vom 10.02.2019.¥p¥s¥fZum Herz¥-Mariä¥-Sa:¥0f Die Votivmesse ist erlaubt.¥p",
        "deceased": "2004 †¥tHubert°Wiederhold, Pfr.i.R., GR, Frankfurt¥-Bornheim¥p2020 †¥tFranz°J.°Koska°(Kulm/Fulda), Pfr.i.R., Msgr., Rumia/Polen¥p",
        "deceased_more": "1946 †¥tAlois°Hahner, Pfarrer°in°Schmalnau¥p1955 †¥tPeter°Kräuter,°Marine-Oberpfr.i.R., Mardorf¥p1976 †¥tReinhold°Barth°(Königgrätz), Pfr.i.R., Schönbrunn¥p2004 †¥tHubert°Wiederhold, Pfr.i.R., GR, Frankfurt¥-Bornheim¥p2020 †¥tFranz°J.°Koska°(Kulm/Fulda), Pfr.i.R., Msgr., Rumia/Polen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "9": {
        "liturgy": "¥fSo¥0f¥a¥t¥f5. Sonntag im Jahreskreis¥0f¥lPsalt:°I.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "",
        "deceased": "2012 †¥tJohannes°Goedeke°(Danzig/Fulda), Pfr.i.R., Msgr., Bad°Soden¥-Salmünster¥p",
        "deceased_more": "1938 †¥tHeinrich°Bona, Pfr.i.R., Erfurt¥p1969 †¥tFranz°Ebel, Pfarrer°in°Bremen/Rhön¥p1988 †¥tBruno°Gospos°(Breslau), Pfr.i.R., Borken/Westfalen¥p2012 †¥tJohannes°Goedeke°(Danzig/Fulda), Pfr.i.R., Msgr., Bad°Soden¥-Salmünster¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "10": {
        "liturgy": "¥fMo¥0f¥t¥fHl. Scholastika¥0f, Jgfr, ¥fGed¥0f¥pw¥t¥fMs von der Hl¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "2020 †¥tP.°Wolfgang°Mayer°OFM,°Dortmund¥p",
        "deceased_more": "1933 †¥tFerdinand°Spies, Pfarrer°in°Batten¥p1935 †¥tOthmar°Beck, Pfarrer°in°Borsch¥p1950 †¥tGregor°Quell, Pfarrer°in°Burghaun¥p1956 †¥tTheodor°Arend, Pfr.i.R., Worbis¥p1987 †¥tP.°Anton°Hehl°SM,°Direktor°i.R., Fulda¥p1993 †¥tReinhard°Mrasek°(Breslau), Pfr.i.R., Burghaun¥p2020 †¥tP.°Wolfgang°Mayer°OFM,°Dortmund¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "11": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°im°Jahreskreis – ¥fWelttag°der°Kranken¥0f¥pw¥tOder ¥fUnsere Liebe Frau in Lourdes¥0f, ¥fGed¥0f¥lOff:°BuM°eig – in der Marienmesse MarPräf¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°228;°Gg°348,3;°Sg°527,7¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute ist der 33. Welttag der Kranken (eingeführt vom hl. Papst Johannes Paul II. 1993 in Lourdes). ¥fGebet und Fürbitte für die Kranken und alle in der Krankenfürsorge Tätigen¥0f. Papstbotschaft zum Welttag (www.vatican.va › Botschaften › Welttag der Kranken). Es eignen sich für diesen Tag auch ¥fGottesdienste mit Spendung der hl. Krankensalbung¥0f.¥p",
        "deceased": "2002 †¥tP.°DDr.°Georg°Ziener°OMI, Prof., Dr.°theol., Dr.°in°re°bibl., Hünfeld¥p",
        "deceased_more": "1934 †¥tJohannes°Kahlmeyer, Pfr.i.R., Ershausen¥p1937 †¥tJulius°Martin, Dechant, Pfarrer°in°Geisa¥p1966 †¥tAloys°Auth, Pfarrer°in°Dietges¥p1981 †¥tTheodor°Gronde, Pfr.i.R., Heiligenstadt¥p2002 †¥tP.°DDr.°Georg°Ziener°OMI, Prof., Dr.°theol., Dr.°in°re°bibl., Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "12": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Gregor II.¥0f, Pp, ¥fGed¥0f (FD)¥bf¥w¥vL:¥0v¥tEz°34¥v,11¥_16¥0v¥tML°V°633/ᴺ648¥l¥vAPs:¥0v¥tPs°23¥v,1¥_3.4.5.6¥0v°(R:°¥v1¥0v)¥t634/ᴺ649¥l¥vREv+Ev:¥0v°Mt°9¥v,35¥_38¥0v¥t619f/ᴺ630¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°305,1;°Gg°242;°Sg°525,1¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sZum heutigen Gedenktag des hl. Gregor II. passen die Strophen GL°877¥v,6+8¥0v des Bonifatiusliedes.¥p",
        "deceased": "2013 †¥tIvan°Barišić,°Kroatenseelsorger°in°Kassel¥p",
        "deceased_more": "2013 †¥tIvan°Barišić,°Kroatenseelsorger°in°Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "13": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°177/²175;°Gg°134/²132;°Sg°527,7¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1982 †¥tP.°Archangelus°Löslein°OFMCap,°Seelsorger des Familienferienheims°Michaelshof in°Unterbernhards¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "14": {
        "liturgy": "¥fFr¥0f¥t¥qfHl. Cyrill (Konstantin)¥0f, Mönch, und ¥qfhl.°Methodius¥0f, Bi, Glbb, ¥fPatrone Europas¥0f, ¥fFest¥0f°(GK/RK)¥lOff: BuM eig, sonst Com – Te°Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pw      ¥wᴰ¥0w¥t¥fMs vom Fest¥0f, Gl, ¥fFürbitten für Europa¥0f, Präf°Ht°oder°Hll, FSS:°MB°560¥p¥t¥kOder:¥0k¥l¥fHl. Valentin¥0f, Bi, Märt (FD), ¥fGed¥0f¥pr¥t¥fMs vom Hl¥0f (Com Märt Nr. 6), Präf Märt¥bf¥w¥vL:¥0v¥t2°Kor°6¥v,4¥_10¥0v¥tML°V°624/ᴺ640¥l¥vAPs:¥0v¥tPs°34¥v,2¥_3.4¥_5.6¥_7.8¥_9¥0v°(R:°¥v5b¥0v)¥t622/ᴺ638¥l¥vREv+Ev:¥0v°Mt°10¥v,17¥_22¥0v¥t512/ᴺ513¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum heutigen Fest der hll. Cyrill und Methodius¥0f ist in den älteren Ausgaben der liturgischen Bücher (MB und MBkl, ML°IV°und°V, Schott-Messbuch für die Wochentage I, StB°II°und°III und Lektionare zum StB I/2, I/4, II/2 und II/4) ggf. die Bezeichnung „Patrone Europas“ zu ergänzen und der Rang „Gedenktag“ durch „Fest“ zu ersetzen sowie in den Messbüchern vor dem Tagesgebet „Gloria“ und in den Lektionaren zum StB nach dem Responsorium zur 2.°Lesung „Te°Deum“ einzufügen.¥p",
        "deceased": "",
        "deceased_more": "1920 †¥tDr.°Nikolaus°Kircher, Dr.°iur.°can., GR, Dechant°a.D., Pfarrer°in°Maberzell¥p1946 †¥tJoseph°Gockel, Pfr.i.R., Mardorf¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "15": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°314,26;°Gg+Sg°286¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute ist der 82. Geburtstag von Bischof em. Heinz Josef Algermissen.¥p",
        "deceased": "1999 †¥tP. Dr.°Norbert°Hötzel°OMI,°Superior°in°Hünfeld¥p2019 †¥tUlrich°Wittek, Pfr.i.R., GR, Fulda¥p",
        "deceased_more": "1999 †¥tP. Dr.°Norbert°Hötzel°OMI,°Superior°in°Hünfeld¥p2019 †¥tUlrich°Wittek, Pfr.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "16": {
        "liturgy": "¥fSo¥0f¥a¥t¥f6. Sonntag im Jahreskreis¥0f¥lPsalt:°II.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1942 †¥tKarl°Göbel, Pfarrer°in°Hundeshagen, gestorben°im°Reservelazarett°zu°Lublin¥p1963 †¥tArthur°Maximilian°Hilden, Pfr.i.R., Riedering°üb.°Rosenheim¥p1970 †¥tIgnaz°Nolte, Pfr.i.R., GR, Pfarrer°in°Geismar/Eichsfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "17": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 6.°Woche°im°Jahreskreis¥pw¥tOder ¥fhll. Sieben Gründer des Servitenordens¥0f, ¥fGed¥0f – Off:°BuM°eig¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°312,21;°Gg+Sg°280¥0w¥p",
        "notes": "",
        "deceased": "2012 †¥tAlfons°Gerhardt, Pfarrer°in°Hünfeld¥-Mackenzell¥p2017 †¥tAugust°Aul, Pfr.i.R., GR, Freigericht¥-Bernbach¥p",
        "deceased_more": "1960 †¥tDr.°Rudolf°Tietze°(Leitmeritz), Pfr.i.R., Stotternheim¥p1969 †¥tFriedrich°Horst, Pfr.i.R., Haimbach¥p2012 †¥tAlfons°Gerhardt, Pfarrer°in°Hünfeld¥-Mackenzell¥p2017 †¥tAugust°Aul, Pfr.i.R., GR, Freigericht¥-Bernbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "18": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 6.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°305,2;°Gg°348,3;°Sg°527,7¥0w¥p",
        "notes": "",
        "deceased": "2021 †¥tFranz°Heim, Pfr.i.R., GR, Bad°Orb¥p",
        "deceased_more": "1972 †¥tLudwig°Mans, Pfr.i.R., Fulda¥p1986 †¥tLudwig°Atzert, Pfr.i.R., Msgr., Fulda¥p1990 †¥tAlois°Zengerling, Pfr.i.R., Fulda¥-Dietershan¥p2021 †¥tFranz°Heim, Pfr.i.R., GR, Bad°Orb¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "19": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 6.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°313,22;°Gg+Sg°104/²102¥0w¥p",
        "notes": "",
        "deceased": "2002 †¥tKarl°Schönhals, GR, Pfarrer°in°Hanau,°St.°Elisabeth¥p2005 †¥tAlois°Korn, Pfr.i.R., Msgr., GR, Biebergemünd¥-Kassel¥p",
        "deceased_more": "1970 †¥tFerdinand°Reinhardt, Pfr.i.R., GR, Fulda¥p1974 †¥tReinhold°Thiel°(Breslau),°Erzpriester, Pfr.i.R., GR, Hünfeld¥p1994 †¥tP.°Josef°Heinemann°SVD¥p1994 †¥tHans¥-Georg°Hirmer,°Diakon°i.R., Eiterfeld¥p2002 †¥tKarl°Schönhals, GR, Pfarrer°in°Hanau,°St.°Elisabeth¥p2005 †¥tAlois°Korn, Pfr.i.R., Msgr., GR, Biebergemünd¥-Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "20": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 6.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°315,29;°Gg°348,2;°Sg°529,14¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute ist der 71. Geburtstag von Weihbischof Karlheinz Diez.¥p",
        "deceased": "2023 †¥tEugen°Höfler, Pfr.i.R., GR, Fulda¥-Horas¥p",
        "deceased_more": "1935 †¥tAlbert°Hünermund, Pfarrer°in°Hohengandern¥p1960 †¥tAnton°Wohlgemuth, Prälat, Domkapitular,°Fulda¥p2023 †¥tEugen°Höfler, Pfr.i.R., GR, Fulda¥-Horas¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "21": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 6.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Petrus Damiani¥0f, Bi, Kl, ¥fGed¥0f – Off:°BuM°eig¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°279¥0w¥p",
        "notes": "",
        "deceased": "2004 †¥tP.°Klemens°Schneiders°OMI,°Hünfeld¥p2009 †¥tHelmut°Schleichert,°Militärpfr.a.D., Fritzlar¥p",
        "deceased_more": "1945 †¥tHermann°Weinreich, Pfr.i.R., Heiligenstadt¥p1958 †¥tPeter°Hardegen, Pfarrer°in°Bickenriede¥p1991 †¥tLudwig°Wiegand, Pfr.i.R., Msgr., Hünfeld¥p2004 †¥tP.°Klemens°Schneiders°OMI,°Hünfeld¥p2009 †¥tHelmut°Schleichert,°Militärpfr.a.D., Fritzlar¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "22": {
        "liturgy": "¥fSa¥0f¥t¥qfKathedra Petri¥0f, ¥fFest¥0f¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pw¥t¥fMs eig¥0f, Gl, ApPräf I, FSS:°MB°558¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1965 †¥tKarl°Busch, Pfr.i.R., Menden/Westfalen¥p1990 †¥tJosef°Schubert°(Leitmeritz), Pfr.i.R., Heiligenstadt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "23": {
        "liturgy": "¥fSo¥0f¥a¥t¥f7. Sonntag im Jahreskreis¥0f¥lPsalt:°III.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweis:¥0f ¥sDer ¥fGedenktag des hl. Polykarp¥0f entfällt in diesem Jahr.¥p",
        "deceased": "2016 †¥tAlois°Hartmann, Pfr.i.R., Msgr., GR, Petersberg¥p",
        "deceased_more": "2016 †¥tAlois°Hartmann, Pfr.i.R., Msgr., GR, Petersberg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "24": {
        "liturgy": "¥fMo¥0f¥t¥qfHl. Matthias¥0f, Ap, ¥fFest¥0f°(RK; GK:°14.°Mai) – Off:°BuM°eig,°sonst°Com – Te°Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pr¥t¥fMs eig¥0f, Gl, ApPräf I, n.B.°Hg°I, FSS:°MB°558¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1991 †¥tReinhold°Schuchardt, Pfarrer°in°Neustadt¥p1992 †¥tFranz°Vogt, Pfr.i.R., StD°a.D., Msgr., Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "25": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 7.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Walburga¥0f, Äbtissin, ¥fGed¥0f°(RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°307,8;°Gg°247;°Sg°525,1¥0w¥p",
        "notes": "",
        "deceased": "1997 †¥tP.°Graziano°Capannolo°CR,°Italienerseelsorger°in°Kassel¥p2019 †¥tP.°Mate Dragičevič°OFM,°Mostar¥p",
        "deceased_more": "1937 †¥tKarl°Lomb, Pfr.i.R., Großenbach¥p1946 †¥tFlorentin°Müller, Professor°in°Heiligenstadt¥p1974 †¥tLeo°Hatscher°(Leitmeritz), Pfr.i.R., Zierenberg¥p1983 †¥tKlaus°Heymann°(Breslau), Dechant°in°Dingelstädt¥p1997 †¥tP.°Graziano°Capannolo°CR,°Italienerseelsorger°in°Kassel¥p2019 †¥tP.°Mate Dragičevič°OFM,°Mostar¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "26": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 7.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°307,7;°Gg°349,6;°Sg°525,2¥0w¥p",
        "notes": "",
        "deceased": "2015 †¥tReinhold°Becker, Pfr.i.R., Fritzlar¥p",
        "deceased_more": "1940 †¥tKarl°Freund, Pfr.i.R., Sondershausen¥p1956 †¥tAdalbert°Schiffhauer, Pfr.i.R., Fulda¥p1957 †¥tJoseph°Klüber, Pfarrer°in°Großentaft¥p1988 †¥tLeo°Wolfen°(Essen), Pfr.i.R., GR, Borken/Westfalen¥p2015 †¥tReinhold°Becker, Pfr.i.R., Fritzlar¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "27": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 7.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Gregor von Narek¥0f, Abt, Kl, ¥fGed¥0f¥be¥w¥fMs¥0f:°HR⁵°– ¥fML°V°ᴺ582¥0f¥l¥vL:¥0v¥tWeish°7¥v,7¥_10.15¥_16¥0v¥tML°V°528¥l¥vAPs:¥0v¥tPs°37¥v,3¥_4.5¥_6.30¥_31¥0v°(R:°vgl.°¥v30a¥0v)¥t516¥l¥vREv+Ev:¥0v°Mt°7¥v,21¥_29¥0v¥t608¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°315,29;°Gg°348,1;°Sg°529,13¥0w¥p",
        "notes": "",
        "deceased": "2009 †¥tPeter°Hauser,°Dompfr.i.R., Msgr., Ehrendomkapitular,°Fulda¥p2010 †¥tP.°Lucas°Josef°Tacke°OFMCap, GR, Münster¥p2016 †¥tP.°Leo°Hillebrand°SDB,°Daun¥p2021 †¥tP.°Mladen°Sesar°OFM,°Široki°Brijeg/Bosnien°und°Herzegowina¥p2023 †¥tJosef°Pimper, Pfr.i.R., GR, Künzell¥p",
        "deceased_more": "1939 †¥tJoseph°Himmelmann, Pfarrer°in°Simmershausen¥p1943 †¥tDDr.°Georg°Werner, Dr.°theol.°et°phil., Religionslehrer,°gefallen°in°Rußland¥p2009 †¥tPeter°Hauser,°Dompfr.i.R., Msgr., Ehrendomkapitular,°Fulda¥p2010 †¥tP.°Lucas°Josef°Tacke°OFMCap, GR, Münster¥p2016 †¥tP.°Leo°Hillebrand°SDB,°Daun¥p2021 †¥tP.°Mladen°Sesar°OFM,°Široki°Brijeg/Bosnien°und°Herzegowina¥p2023 †¥tJosef°Pimper, Pfr.i.R., GR, Künzell¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "28": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 7.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°309,12;°Gg°350,9;°Sg°527,9¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1962 †¥tWilhelm°Breitung, Pfr.i.R., Ehrendomkapitular,°Ried¥p1979 †¥tKarl°Otto, Pfr.i.R., Eisenach¥p1992 †¥tAdelbert°Schröter, Pfr.i.R., Geisa¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      }
    },
    "3": {
      "1": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 7.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°305,2;°Gg°348,1;°Sg°526,6¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "1995 †¥tRichard°Huth, Pfr.i.R., GR, Romsthal¥p2007 †¥tP. Dr.°Arthur°Krimmel°OMI, Prof., Hünfeld¥p",
        "deceased_more": "1921 †¥tDr.°Adalbert°Ricken, Dr.°phil.°h.c., Pfarrer°in°Lahrbach¥p1925 †¥tDr.°Wilhelm°Frye, Prof., Dr.°phil., Pfr.i.R., Msgr., Fulda¥p1935 †¥tJoseph°Kramer,°Prorektor°i.R., Fulda¥p1939 †¥tWilhelm°Klingebiel, Pfr.i.R., Helmsdorf¥p1995 †¥tRichard°Huth, Pfr.i.R., GR, Romsthal¥p2007 †¥tP. Dr.°Arthur°Krimmel°OMI, Prof., Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "2": {
        "liturgy": "¥fSo¥0f¥a¥t¥f8. Sonntag im Jahreskreis¥0f¥lPsalt:°IV.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "",
        "deceased": "1995 †¥tFerdinand°Rech°(Leitmeritz), GR, Pfarrer°in°Knüllwald¥-Remsfeld¥p2024 †¥tDr.°Gregor°Predel°(Freiburg), Prof., Dr.°theol.°habil., Freiburg°i.°Br.¥p",
        "deceased_more": "1920 †¥tFranz°Döppenschmidt,°Kaplan°in°Großauheim¥p1926 †¥tFranz°Wieber, Pfarrer°in°Michelsrombach¥p1963 †¥tLeonhard°Heid, Dechant, Pfarrer°in°Somborn¥p1995 †¥tFerdinand°Rech°(Leitmeritz), GR, Pfarrer°in°Knüllwald¥-Remsfeld¥p2024 †¥tDr.°Gregor°Predel°(Freiburg), Prof., Dr.°theol.°habil., Freiburg°i.°Br.¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "3": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 8.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°279¥0w¥p",
        "notes": "",
        "deceased": "2021 †¥tEugen°Kutzka, OStR°i.K.i.R., GR, Hünfeld¥p",
        "deceased_more": "1967 †¥tPaul°Oberthür, Pfr.i.R., Rheydt/Rheinland¥p2021 †¥tEugen°Kutzka, OStR°i.K.i.R., GR, Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "4": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 8.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Kasimir¥0f, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°308,10;°Gg°349,4;°Sg°526,6¥0w¥p",
        "notes": "",
        "deceased": "2009 †¥tHeiner°Pies, Pfr.i.R., GR, Bruchköbel¥p2018 †¥tGerhard°Henning, Pfr.i.R., GR, Juscimeira/Brasilien¥p",
        "deceased_more": "1935 †¥tKaspar°Schick, Pfr.i.R., Hattenhof¥p1973 †¥tKlemens°Lange°(Paderborn), Pfr.i.R., Lenterode/Eichsfeld¥p1992 †¥tAlois°Hauk°(Olmütz), Pfr.i.R., Msgr., GR, Ebersburg¥-Ried¥p2009 †¥tHeiner°Pies, Pfr.i.R., GR, Bruchköbel¥p2018 †¥tGerhard°Henning, Pfr.i.R., GR, Juscimeira/Brasilien¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "5": {
        "liturgy": "¥fMi¥0f¥t¥fAschermittwoch – Fast- und Abstinenztag¥0f – Psalt:°IV.°Woche; ¥wzu den Ld können auch die Ant u. Ps vom Freitag der III.°Woche genommen werden.¥0w¥pv¥t¥fMs eig¥0f (MB°77/²75), ¥wSegnung und Auflegung der Asche (aus°den°Zweigen vom Palmsonntag des vorigen Jahres) nach°der°Homilie, s. Ritus im MB°76f. Gesänge°zur Austeilung der Asche: GL°266, GL°268¥0w – FastPräf°III°oder°IV¥p",
        "notes": "¥fDIE QUADRAGESIMA – ÖSTERLICHE°BUSSZEIT°–°FASTENZEIT¥0f¥jPerikopen an den Wochentagen: ¥fML°IV¥0f¥p¥fStB¥0f und ¥fLitHor¥0f: Band II¥p¥fLektionar°zum°StB°I/2¥0f¥p¥p¥fHinweise:¥0f¥p¥sDie Österliche Bußzeit dient der Vorbereitung auf die Feier des Todes und der Auferstehung Christi. Die Liturgie der Vierzig Tage bereitet die Gläubigen auf die Feier des Ostergeheimnisses durch Taufgedächtnis und tätige Buße vor. Zur Orientierung: ¥fRundschreiben der Kongregation für den Gottesdienst: „Über die Feier von Ostern und ihre Vorbereitung“ (FOV)¥0f, in: VAS°Nr.°81 vom 16.°Januar°1988, hrsg. v. Sekr.°d.°DBK, S.°15¥_46; oder in: MBO°9*¥_30*; oder in: „Arbeitshilfen“°Nr.°77, 11.°Auflage°2009, Die Messfeier – Dokumentensammlung. Auswahl für die Praxis, hrsg. v. Sekr.°d.°DBK, Nr.°XI., S.°261¥_292; als PDF-Datei unter www.liturgie.de › Dokumente.¥p¥sDie Gläubigen mögen zu Beginn der Österlichen Bußzeit auf den im Jahre 1986 von den deutschen Bischöfen erlassenen ¥fOrientierungsrahmen „Kirchliche Bußpraxis“¥0f und die darin enthaltenen ¥fWeisungen zur Bußpraxis¥0f hingewiesen werden (in:°Handbuch Bistum Fulda, Gruppe 7, Fundstelle 3.6).¥p¥sZur Feier der Österlichen Bußzeit möge die jährlich erscheinende ¥fPapstbotschaft¥0f beachtet und so gut wie möglich umgesetzt werden.¥p¥s¥fDas Halleluja unterbleibt¥0f überall im Offizium und in der Messe ¥fbis zur Feier der Osternacht¥0f. ¥p¥s¥fDer Altar soll nicht mit Blumen geschmückt werden, und die Orgel oder andere Musikinstrumente sollen nur die Gesänge begleiten. Beides streicht den Bußcharakter dieser Zeit hervor. Nur am 4.°Fastensonntag, an den Hochfesten und Festen ist eine Ausnahme davon erlaubt¥0f (CE°252). (Auch das „Fasten der Augen und Ohren“ in der Liturgie der österlichen Bußzeit ist wichtig und hat seine Bedeutung). Kirchenmusik, die für die Fasten- und Passionszeit geschaffen wurde oder dem Charakter dieser geprägten Zeit besonders gut entspricht, kann in eigens dafür gehaltenen kirchenmusikalischen (Passions-)Andachten oder Geistlichen Konzerten zu Gehör kommen.¥p¥s¥fDie Gesänge¥0f, die bei Gottesdiensten, besonders bei der Messfeier, aber auch bei Andachten, gebraucht werden, ¥fmüssen dieser Zeit angepasst sein und soweit wie möglich den liturgischen Texten entsprechen¥0f.¥p¥sAn den Wochentagen empfiehlt sich eines der ¥fSegensgebete über das Volk¥0f, MB°568¥_575, die aber nicht der Fastenzeit vorbehalten sind.¥p¥sAm Schluss der Komplet steht in der Fastenzeit bis zum Karsamstag einschl. die Marianische Antiphon ¥f„Ave Regina caelorum“¥0f (GL°666¥v,2¥0v) bzw. ¥f„Ave, du Himmelskönigin“¥0f (vgl.°GL°868).¥p¥s¥fGedenktage von Heiligen können kommemoriert werden¥0f (s.°o.°Kap.°II.C.4.).¥p¥s¥fFrei gewählte Votivmessen, Messen für besondere Anliegen und gewöhnliche Totenmessen¥0f (ausgenommen beim Eintreffen der Todesnachricht, am Begräbnistag und am ersten Jahrestag; vgl.°AEM°337) ¥fsind während der Fasten- und Osterzeit nicht gestattet. Dasselbe gilt auch für die Messen um geistliche Berufe und die Votivmessen zum Herz-Jesu-Freitag¥0f.¥p¥sWird in der Fastenzeit eine ¥fTrauung¥0f gehalten, so möge der Priester die Brautleute ersuchen, auf den ¥fErnst und¥0f die ¥fBedeutung dieser liturgischen Zeit¥0f Rücksicht zu nehmen (Die Feier der Trauung, ²1992, Nr.°31, Praenotanda°Nr.°32; Pastorale Einführung Nr.°22). ¥p¥sDie Volksandachten, die zur Fastenzeit gehören, wie z.B. die ¥fKreuzwegandacht¥0f, sollen gepflegt und mit liturgischem Geist erfüllt werden, so dass die Gläubigen durch sie leichter zur Feier des Paschamysteriums Christi hingeführt werden. ¥p¥s¥fDie österliche Bußzeit soll intensiv für die geistliche Vorbereitung der Taufbewerberinnen und Taufbewerber benutzt werden¥0f, besonders durch die Bußfeiern, durch Glaubensunterweisung und die Feier der Einschreibung (Zulassung) zu den Sakramenten der Eingliederung. ¥fGemeinden, in denen es keine jugendlichen oder erwachsenen Taufbewerberinnen und Taufbewerber gibt, sollen dennoch für all jene beten, die in der kommenden Osternacht anderswo die Sakramente der Eingliederung in die Kirche empfangen werden¥0f. Die Osternacht soll die normale Zeit für die Sakramente der Eingliederung sein, da die ganze Eingliederung in die Kirche als erste sakramentale Teilhabe an Christi Tod und Auferstehung einen österlichen Charakter hat (vgl.°FOV°7f).¥p¥s¥fDie Getauften sollen durch Buße und Katechesen auf die Erneuerung des Taufversprechens vorbereitet werden.¥0f Die Seelsorger sollen den Gläubigen erklären, welche Bedeutung für ihr geistliches Leben die Erneuerung des Taufversprechens hat. Getaufte Erwachsene, die noch keine Glaubensunterweisung und keine weiteren Sakramente empfangen haben, sollen ¥fdurch Katechesen und Bußfeiern im Glauben unterwiesen und zum Empfang des Bußsakramentes geführt werden¥0f. Auch für Kinder im Schulalter, die noch nicht getauft, aber zur Glaubensunterweisung fähig sind, wie auch für getaufte Kinder, die zum ersten Mal zum Bußsakrament zugelassen werden sollen, ist die österliche Bußzeit die geeignete Zeit für Bußfeiern und Glaubensunterweisung. ¥fEine gemeinschaftliche Bußfeier am Ende der Österlichen Bußzeit soll den einzelnen Gläubigen und der ganzen Gemeinde helfen, tiefer in das Paschamysterium einzugehen¥0f (vgl.°FOV°6¥_10°und°37). ¥p¥s¥fDie Gläubigen sollen aufgefordert werden, in der Fastenzeit das Bußsakrament zu empfangen¥0f, damit sie mit reinem Herzen die österlichen Geheimnisse mitfeiern können. Dabei ist es sehr angebracht, das Bußsakrament als gemeinschaftliche Feier der Versöhnung mit Bekenntnis und Lossprechung der Einzelnen zu spenden, wie es der Ritus vorsieht („Die°Feier°der°Buße“, S.°35ff.). ¥fDie Priester sollen häufiger als sonst zur Spendung des Bußsakramentes zur Verfügung stehen, längere Zeiten für die Einzelbeichte vorsehen und so den Zugang zu diesem Sakrament erleichtern¥0f (vgl. FOV°15). Im Bußsakrament wird dem Christen, der seine Sünden bereut und aufrichtig bekennt, im Namen Gottes die Vergebung geschenkt; er wird mit Gott und der Kirche versöhnt. Jeder Christ soll sich regelmäßig prüfen, ob er in einer wichtigen Sache bewusst und freiwillig gegen Gott und gegen die Kirche, gegen seine Mitmenschen oder gegen sich selbst schuldig geworden ist. Wer sich in diesem Sinne einer schweren Sünde bewusst ist, soll diese möglichst bald, wenigstens aber innerhalb eines Jahres in der Feier des Bußsakramentes bereuen und aufrichtig bekennen, damit ihm im Namen Gottes die Vergebung zugesagt werden kann und so die volle Gemeinschaft mit Gott und der Kirche wieder hergestellt ist (vgl. can.°916). Er ist aber auch verpflichtet, allen angerichteten Schaden nach besten Kräften gutzumachen. Auch den Gläubigen, die keine schweren Sünden zu beichten haben, wird zur Erneuerung und Vertiefung der Bußgesinnung sowie zur sakramentalen Sündenvergebung die öftere Feier des Bußsakramentes empfohlen. Sie fördert zudem die Selbsterkenntnis und trägt zur inneren Reife bei.¥p¥s¥fDie Priester sollen häufiger und intensiver das Wort Gottes verkündigen¥0f in Homilien während der Werktagsmesse, in Wortgottesdiensten, in Bußfeiern, in eigenen Fastenpredigten oder bei Hausbesuchen, wenn sie eine oder mehrere Familien besuchen. ¥fDie Gläubigen sollen häufig an den Wochentagen die hl.°Messe mitfeiern, und wo sie das nicht tun können, wenigstens die liturgischen Lesungen der Tagesmesse lesen, allein oder mit ihrer Familie¥0f (vgl. FOV°13).¥p¥s¥fDie Kirche empfiehlt den recht vorbereiteten und ehrfürchtigen Kommunionempfang bei jeder hl.°Messe. Jeder Gläubige aber soll wenigstens einmal im Jahr, nach Möglichkeit in der österlichen Zeit¥0f (zwischen Aschermittwoch und Pfingsten), ¥fdie hl. Kommunion empfangen¥0f und durch diese volle Teilnahme an der Eucharistie seine Gemeinschaft mit der Kirche sichtbar machen (vgl. Weisung d. dt. Bischöfe zur kirchl. Bußpraxis, 24.11.1986, zuletzt veröffentlicht in: Handbuch Bistum Fulda, Gruppe°7, Fundstelle°3.6, S.°5, letzter Abschnitt; can.°920°CIC; KKK°1417). ¥p¥s¥fHeute ist Fast- und Abstinenztag¥0f (vgl. cann.°1251ff°CIC; Handbuch Bistum Fulda, Gruppe°7, Fundstelle°3.6 Kirchliche Bußpraxis, Weisungen zur Bußpraxis S.°4,°Nr.°1). Das Abstinenzgebot mit dem „Fastenopfer“ nach der freien Verantwortung des einzelnen Christen sowie der Verzicht auf Fleischspeisen am Aschermittwoch und Karfreitag verpflichtet alle ab dem vollendeten 14.°Lebensjahr. Das Fastengebot (Verzicht auf Fleischspeisen, nur einmalige Sättigung am Tage) am Aschermittwoch und Karfreitag verpflichtet zwischen dem vollendeten 18. bis zum Beginn des 60.°Lebensjahres (vgl. can.°1252°CIC).¥p¥s¥fHeute Segnung und Austeilung der Asche¥0f. Diese kann auch außerhalb der Messfeier stattfinden in einem Wortgottesdienst gem. Rubrik MB°80/²78.¥p¥s¥fDen Gläubigen möge heute die Bedeutung des Aschenkreuzes nahegebracht werden:¥0f „Am Aschermittwoch treten die Gläubigen, indem sie sich Asche auflegen lassen, in die Zeit ein, die zur Reinigung der Seele bestimmt ist. Dieses Zeichen der Buße, das aus biblischer Tradition stammt und im Gebrauch der Kirche bis auf uns gekommen ist, deutet an, dass der Mensch ein Sünder ist, der seine Schuld offen vor Gott bekennt; er gibt so seinem Willen zu innerer Umkehr Ausdruck, von der Hoffnung geleitet, dass der Herr ihm gnädig sein möge. Mit diesem Zeichen beginnt der Weg der Umkehr, deren Ziel der Empfang des Bußsakramentes vor dem Osterfest ist“ (FOV 21; vgl. CE°253).¥p¥s¥fDer Aschermittwoch steht liturgisch im Rang eines Hochfestes¥0f (s.°o.°Kap.°I.B.1.°I.°2.), ohne jedoch Hochfest zu sein.¥p",
        "deceased": "",
        "deceased_more": "1963 †¥tWilhelm°Hunstiger, Prälat, Domkapitular°in°Fulda¥p1990 †¥tDDr.°Heribert°Abel, Dr.°theol.°et°phil., Domkapitular°i.R., Fulda¥p1993 †¥tHeinrich°Kretzmer, Pfr.i.R., Msgr., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "6": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f nach Aschermittwoch – ¥fPriesterdonnerstag¥0f¥p¥tn. B. Komm des ¥fhl. Fridolin von Säckingen¥0f, Mönch, Glb°(RK) (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder vom°Hl, FastPräf¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Priesterdonnerstag (monatl. Gebetstag für geistliche Berufe):¥0f Die Votivmesse ist nicht erlaubt. – Fürbitte(n) um Priesterberufungen. – Thema: „Wähle das Leben, damit Du lebst!“ (Dtn 30¥v,19¥0v). Intention: Für alle jungen Menschen, die nach Gottes Willen fragen.¥p",
        "deceased": "2006 †¥tPaul°Kasper,°Pfarrkurat°i.R., Künzell¥-Dietershausen¥p2006 †¥tWerner°Diegmüller, Pfr.i.R., Msgr., GR, Fulda¥p2013 †¥tP.°Siegbert°Aloys°Kleene°OP, GR, Bad°Wörishofen¥p2021 †¥tWalter°Hofmann, OStR°i.K.i.R., GR, Künzell¥-Bachrain¥p",
        "deceased_more": "1974 †¥tFranz°Demuth°(Königgrätz), Pfr.i.R., Neuhof¥p1992 †¥tIgnaz°Degenhardt,°Rektor,°Krankenhauspfarrer, Prälat,°Heiligenstadt¥p1993 †¥tRudolf°Koch,°Msgr., Pfarrer°in°Hanau¥p2006 †¥tPaul°Kasper,°Pfarrkurat°i.R., Künzell¥-Dietershausen¥p2006 †¥tWerner°Diegmüller, Pfr.i.R., Msgr., GR, Fulda¥p2013 †¥tP.°Siegbert°Aloys°Kleene°OP, GR, Bad°Wörishofen¥p2021 †¥tWalter°Hofmann, OStR°i.K.i.R., GR, Künzell¥-Bachrain¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "7": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f nach Aschermittwoch – ¥fHerz¥-Jesu¥-Freitag¥0f¥p¥tn. B. Komm der ¥fhll. Perpetua und Felizitas¥0f, Märt (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder von°den°Hll, FastPräf, n.B.°Hg°I¥p",
        "notes": "¥fHinweise:¥0f¥p¥sFrauen aller Konfessionen laden heute zum Weltgebetstag unter dem Motto „wunderbar geschaffen!“ ein, den Frauen von den Cook-Inseln vorbereitet haben.¥p¥s¥fZum°Herz¥-Jesu¥-Fr:¥0f Die Votivmesse ist nicht erlaubt.¥p",
        "deceased": "2013 †¥tP.°Ansgar°Ponczek°OP,°Vechta¥p",
        "deceased_more": "1942 †¥tDr.°Joseph°Wahl, Dr.°iur.°can., Pfarrkurat°in°Neuenberg¥p1955 †¥tPhilipp°Kirchberg,°Komm.°Assessor°in°Heiligenstadt¥p1975 †¥tJohannes°Schütz°(Breslau), Pfr.i.R., Zella/Eichsfeld¥p1989 †¥tHeinrich°Göbel, Pfarrer°in°Weida¥p1992 †¥tP.°Gamelbert°Franz°Josef°Sommer°OFM,°Beicht¥-°und°Umgebungsseelsorger,°Kirchhain¥p2013 †¥tP.°Ansgar°Ponczek°OP,°Vechta¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "8": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f nach Aschermittwoch – ¥fHerz¥-Mariä¥-Samstag¥0f¥p¥tn. B. Komm des ¥fhl. Johannes von Gott¥0f, Ordgr (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder vom°Hl, FastPräf¥pv¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Herz¥-Mariä¥-Sa:¥0f Die Votivmesse ist nicht erlaubt.¥p",
        "deceased": "2005 †¥tP. Dr.°Franz°Konrad°OMI,°Mainz¥p2010 †¥tClemens°Mayer, Pfr.i.R., Gladenbach¥-Weitershausen¥p",
        "deceased_more": "1981 †¥tAugustin°Möller, Pfr.i.R., Münster¥p1989 †¥tP.°Benignus°Ebert°OFM,°Rottenburg¥p2005 †¥tP. Dr.°Franz°Konrad°OMI,°Mainz¥p2010 †¥tClemens°Mayer, Pfr.i.R., Gladenbach¥-Weitershausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "9": {
        "liturgy": "¥fSo¥0f¥a¥t¥f1. Fastensonntag¥0f – Psalt:°I.°Woche¥pv¥t¥fMs eig¥0f, Cr, eig°Präf, FSS:°MB°540¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute möge in allen Gottesdiensten besonders auch ¥fder jugendlichen und erwachsenen Taufbewerberinnen und ¥-bewerber unserer Diözese¥0f sowie der ganzen Kirche am Tag der ¥fFeier ihrer Zulassung zur Taufe und den weiteren Initiationssakramenten¥0f durch den Bischof/die Bischöfe gedacht und in den Fürbitten für sie, ihre Begleiterinnen und Begleiter, ihre Angehörigen und Herkunftsgemeinden gebetet werden.¥p¥s¥fIn der kommenden Woche¥0f werden die ¥fFrühjahrsquatember¥0f an einem oder mehreren Tagen (nach Wahl) begangen als ¥fTage religiöser Erneuerung. Thema: Buße¥0f. Vorschlag für die Wahl des Messformulars: Quatembermesse MB°266 oder Messe um Nachlass der Sünden MB°1082/²1112, FastPräf, Farbe:°violett. LL°und°Ev aus den AuswL für besondere Anliegen, ML°VIII°303¥_314.¥p¥sHeute wird unter dem Jahresthema „Füreinander streiten“ das „¥fJahr der christlich-jüdischen Zusammenarbeit 2025 – 5785/5786¥0f“ eröffnet. (Diese Bezeichnung tritt seit 2024 an die Stelle der bisherigen „Woche der Brüderlichkeit“ und nimmt neben der christlichen jetzt auch die jüdische Zeitrechnung auf.) Material für jüdisch-christliche Gemeinschaftsfeiern wird herausgegeben vom Koordinierungsrat der Gesellschaften für Christlich-Jüdische Zusammenarbeit, www.deutscher¥-koordinierungsrat.de.¥p¥sDie ¥fKommemoration des hl. Bruno von Querfurt¥0f und ¥fder hl.°Franziska von Rom¥0f entfallen in diesem Jahr.¥p",
        "deceased": "2019 †¥tErwin°Krack, Pfr.i.R., GR, Biebergemünd¥-Kassel¥p",
        "deceased_more": "1959 †¥tP.°Heinrich°Beck°OMI,°Pfarrkurat°in°Niedersachswerfen¥p1975 †¥tPhilipp°Hartmann, Pfr.i.R., Msgr., GR, Erfurt¥p2019 †¥tErwin°Krack, Pfr.i.R., GR, Biebergemünd¥-Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "10": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, FastPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1960 †¥tJulius°Mähler, Pfr.i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "11": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, FastPräf¥p",
        "notes": "",
        "deceased": "2004 †¥tKurt°Schmegner°(Jassy/Fulda), Pfr.i.R., GR, Sinzing¥-Viehhausen¥p",
        "deceased_more": "1955 †¥tJoseph°Kress, Pfarrer°in°Naumburg¥p2004 †¥tKurt°Schmegner°(Jassy/Fulda), Pfr.i.R., GR, Sinzing¥-Viehhausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "12": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, FastPräf¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute kann in den Gottesdiensten an die ¥fGründung des Klosters Fulda¥0f (und damit der Kirche von Fulda und der Stadt Fulda) mit der Errichtung des Kreuzes durch den hl. Sturmius im Auftrag des hl. Bonifatius am 12. März 744 erinnert und für das Bistum und die Stadt Fulda im Geist ihrer hll. Gründer und des hl. Benedikt in den Fürbitten besonders gebetet werden. Dazu passt die Strophe GL°877¥v,9¥0v des Bonifatiusliedes.¥p",
        "deceased": "1995 †¥tSiegfried°Blaszczyk, GR, Pfarrer°in°Mernes¥p2020 †¥tP.°Bardo°Geßner°OFM,°Fulda¥p",
        "deceased_more": "1969 †¥tEmil°Klüh, Dechant, Pfarrer°in°Großentaft¥p1995 †¥tSiegfried°Blaszczyk, GR, Pfarrer°in°Mernes¥p2020 †¥tP.°Bardo°Geßner°OFM,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "13": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°der°Fastenzeit¥p¥tn. B. Komm der ¥fhl. Paulina¥0f, Ord (FD) (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder von°der°Hl, FastPräf¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute ist der 12. Jahrestag der Wahl von Papst Franziskus.¥p",
        "deceased": "",
        "deceased_more": "1935 †¥tChristoph°Wetter, Pfr.i.R., Westhausen¥p1959 †¥tOtto°Letzner°(Breslau), Pfr.i.R., Bad°Frankenhausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "14": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°der°Fastenzeit¥p¥tn. B. Komm der ¥fhl. Mathilde¥0f, Königin°(RK/FD)°– ¥w¥fMs¥0f:°MB°642¥0w (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder von°der°Hl, FastPräf¥p",
        "notes": "",
        "deceased": "1996 †¥tJosef°Kettner°(Leitmeritz), Pfr.i.R., GR, Fulda¥p1998 †¥tRudolf°Faulstich, Pfr.i.R., GR, Blankenau¥p2018 †¥tAnton°Scheuß°(Köln), Pfr.i.R., Fulda¥p2024 †¥tWolfgang°Hünnekens, Pfr.i.R., GR, Flieden¥p",
        "deceased_more": "1921 †¥tFranz°Herzig, Dechant, Pfarrer°in°Rasdorf¥p1944 †¥tPhilipp°Huschenbett, Pfr.i.R., Heiligenstadt¥p1950 †¥tAndreas°Böhm°(Ermland), Pfr.i.R., Ilmenau¥p1980 †¥tFranz°Wiederhold, Pfr.i.R., GR, Niederorschel¥p1990 †¥tP.°Flavian°Häberle°OFM, GR, Fulda¥p1996 †¥tJosef°Kettner°(Leitmeritz), Pfr.i.R., GR, Fulda¥p1998 †¥tRudolf°Faulstich, Pfr.i.R., GR, Blankenau¥p2018 †¥tAnton°Scheuß°(Köln), Pfr.i.R., Fulda¥p2024 †¥tWolfgang°Hünnekens, Pfr.i.R., GR, Flieden¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "15": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°der°Fastenzeit¥p¥tn. B. Komm des ¥fhl. Klemens Maria Hofbauer¥0f, Ordpr°(RK), oder ¥kim Dom zu Fulda¥0k des ¥fhl.°Zacharias¥0f, Pp (FD) (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder von°einem°der°Hll, FastPräf¥pv¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1976 †¥tJosef°Neumann°(Breslau), Pfr.i.R., GR, Birstein¥p1981 †¥tAnton°Josef°Schleicher,°StR°i.K., Pilgerzell¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "16": {
        "liturgy": "¥fSo¥0f¥a¥t¥f2. Fastensonntag¥0f – Psalt:°II.°Woche¥pv¥t¥fMs eig¥0f, Cr, eig°Präf, FSS:°MB°540¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute werden die Teilnehmer an den Eucharistiefeiern (einschl. der Vorabendmessen) gezählt.¥p¥s¥fZum Evangelium des heutigen Sonntags¥0f passen besonders die Lieder GL°363 (auch nach der Melodie von GL°375 singbar) und GL°368¥v,5+6¥0v (auch nach der Melodie von GL°329 singbar).¥p",
        "deceased": "",
        "deceased_more": "1941 †¥tDr.°Karl°Leimbach, Prof., Apostol.°Protonotar,°Domdechant,°Fulda¥p1965 †¥tAloys°Hild, Pfr.i.R., Hallenberg/Krs.°Brilon¥p1967 †¥tFranz°Blaschke°(Leitmeritz), Pfr.i.R., Hebel°üb.°Wabern¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "17": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°der°Fastenzeit¥p¥tn. B. Komm der ¥fhl. Gertrud von Nivelles¥0f, Äbtissin°(RK), oder des ¥fhl. Patrick¥0f, Bi, Glb (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder von°einem°der°Hll, FastPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1943 †¥tAloys°Fick, Pfarrer°in°Mengelrode¥p1952 †¥tHeinrich°Lecher, Pfr.i.R., Niederklein¥p1955 †¥tAloys°Höppner, Pfr.i.R., Heiligenstadt¥p1966 †¥tAugust°Brehler, Pfr.i.R., Müs/Krs.°Fulda¥p1980 †¥tErnst°Pohl°(Olmütz), Pfr.i.R., Schenklengsfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "18": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°der°Fastenzeit¥p¥tn. B. Komm des ¥fhl. Cyrill von Jerusalem¥0f, Bi, Kl (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder vom°Hl, FastPräf¥pw¥t¥kabends:¥0k ggf.°¥fVorabendmesse°vom°H¥0f – ¥f1.°Vp°vom°folg°H¥0f°–°¥f1.°Kp°vom°So¥0f¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1935 †¥tFriedrich°Gutberlet, Pfr.i.R., KämmerzeII¥p1973 †¥tRichard°Möller, Pfr.i.R., GR, Erfurtshausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "19": {
        "liturgy": "¥fMi¥0f¥t¥qhHl. Josef, Bräutigam der Gottesmutter Maria¥0f, ¥fSchutzpatron der Kirche, Hochfest¥0f¥lTe°Deum – Kl.°Hore: eig Ant,°ErgPs¥pw¥t¥fMs eig¥0f, Gl,°Cr, Präf hl. Josef, n.B.°Hg°I, FSS:°MB°560°– 2.°Vp°vom°H°–°2.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥sJosefslied im GL°872, auch nach Melodie GL°280 singbar.¥p¥sHeute ist der 12. Jahrestag der Amtseinführung von Papst Franziskus.¥p",
        "deceased": "",
        "deceased_more": "1944 †¥tAugust°Gnau, Pfarrer°in°Mardorf¥p1945 †¥tTheodor°Weidner, Dechant, Pfarrer°in°Hanau¥p1952 †¥tOtto°Fränzel°(Olmütz), Pfr.i.R., Volkmarsen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "20": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, FastPräf¥p",
        "notes": "",
        "deceased": "2005 †¥tMartin°Jäger, Pfr.i.R., GR, Fulda¥-Bronnzell¥p",
        "deceased_more": "1952 †¥tFranz°Schopp,°Pfarrkurat°in°Müs¥p2005 †¥tMartin°Jäger, Pfr.i.R., GR, Fulda¥-Bronnzell¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "21": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, FastPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1968 †¥tJoseph Decher, Pfr.i.R., Eiterfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "22": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, FastPräf¥pv¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "2009 †¥tLothar°Pfützner, Pfr.i.R., Blankenhain¥p",
        "deceased_more": "1938 †¥tWilhelm°van°Moll, Pfarrer°in°Maberzell¥p1954 †¥tAugust°Günther, Pfarrer°in°Dietershausen¥p1970 †¥tJosef°Luse°(Leitmeritz), Pfr.i.R., GR, Ulmbach¥p1977 †¥tKurt°Richardt, Pfr.i.R., GR, Erfurt¥p2009 †¥tLothar°Pfützner, Pfr.i.R., Blankenhain¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "23": {
        "liturgy": "¥fSo¥0f¥a¥t¥f3. Fastensonntag¥0f – Psalt:°III.°Woche¥pv¥t¥fMs eig¥0f, Cr, FastPräf I oder II bzw. eig°Präf, FSS:°MB°540¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fHeute können als LL und Ev die Texte vom Lesejahr°A genommen werden.¥0f Dann nimmt man bei den Messtexten die ¥feig°Präf¥0f und den entsprechenden ¥fKommunionvers¥0f.¥p¥sDie ¥fKommemoration des hl. Turibio von Mongrovejo¥0f entfällt in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1945 †¥tGeorg°Riethmüller, Pfarrer°in°Geismar/Eichsfeld¥p1978 †¥tAlbert°Frank°(Prag), GR, Pfarrer°in°Kirchheim¥p1994 †¥tP.°Meinolf°Vogt°OFM, Pfarrer°in°Rüstungen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "24": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°der°Fastenzeit¥p¥tn. B. Komm des ¥fhl. Oscar Arnulfo Romero¥0f, Bi, Märt (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder vom°Hl, FastPräf¥pw¥t¥kabends:¥0k ggf.°¥fVorabendmesse°vom°H¥0f – ¥f1.°Vp°vom°folg°H¥0f°–°¥f1.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥sWenn am 3.°Fastensonntag die Lesungen vom Lesejahr°A nicht genommen wurden, können die folgenden Lesungen an einem beliebigen Tag dieser Woche (außer am 25. März) genommen werden: L:°Ex°17¥v,1¥_7¥0v; Ev:°Joh°4¥v,5¥_42¥0v (siehe°ML°IV°161ff/ ᴺ163ff). Dazu nimmt man die Messtexte vom Wochentag mit ¥fPräf und Kommunionvers „Von der Samariterin“¥0f (MB°106f/²104f).¥p¥sHeute ist die Kommemoration des neuen Gedenktags des hl. Oscar Arnulfo Romero (ermordet am 24. März 1980, heiliggesprochen durch Papst Franziskus am 14. Oktober 2018) möglich. Das Tagesgebet kann vom hl. Oscar Arnulfo Romero (Commune Bischöfe oder Märtyrer) genommen werden.¥p",
        "deceased": "",
        "deceased_more": "1994 †¥tRichard°Heddergott, Pfarrer°in°Ferna¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "25": {
        "liturgy": "¥fDi¥0f¥t¥qhVerkündigung des Herrn¥0f, ¥fHochfest¥0f¥lTe°Deum – Kl.°Hore: eig Ant,°ErgPs¥pw¥t¥fMs eig¥0f, Gl,°Cr (Kniebeugung bei den Worten „Et°incarnatus est°…“ bzw. „hat°Fleisch angenommen°…“ bzw. „empfangen durch den Hl.°Geist°…“), eig°Präf, in°den Hg°I¥_III eig°Einschub, FSS:°MB°554°– 2.°Vp°vom°H°–°2.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "1999 †¥tP.°Altfried°Gabor°SDB,°Kaplan°in°Kassel,°St.°Andreas¥p2019 †¥tCarl¥-Heinz°Schmittdiel, Pfr.i.R., GR, Treysa¥p",
        "deceased_more": "1952 †¥tAdolf°Farnung, Pfarrer°in°Anzefahr¥p1974 †¥tRobert°Köllner°(Olmütz), Pfr.i.R., Wächtersbach¥p1990 †¥tGodehard°Fiedler, OStR°i.K.i.R., GR, Hanau¥p1991 †¥tDr.°Josef°Kirchberg, Pfr.i.R., Msgr., GR, Kassel¥p1999 †¥tP.°Altfried°Gabor°SDB,°Kaplan°in°Kassel,°St.°Andreas¥p2019 †¥tCarl¥-Heinz°Schmittdiel, Pfr.i.R., GR, Treysa¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "26": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°der°Fastenzeit¥p¥tn. B. Komm des ¥fhl. Liudger¥0f, Bi, Glb°(RK) (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder vom°Hl, FastPräf¥p",
        "notes": "",
        "deceased": "2011 †¥tDr.°Aloysius°Winter°(Hildesheim), Prof.°em., Dr.°theol., lic.°phil., Prälat,°Perl/Saarland¥p",
        "deceased_more": "1921 †¥tWilhelm°Magnus°Weber, Pfr.i.R., Marbach¥p2011 †¥tDr.°Aloysius°Winter°(Hildesheim), Prof.°em., Dr.°theol., lic.°phil., Prälat,°Perl/Saarland¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "27": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, FastPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1960 †¥tEduard°Nüdling, Pfarrer°in°Steinbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "28": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, FastPräf¥p",
        "notes": "",
        "deceased": "1997 †¥tAlois°Nolte, Pfarrer°in°Rasdorf¥p2007 †¥tWalter°Herber, Pfr.i.R., Kalbach¥-Uttrichshausen¥p2014 †¥tAugust°Kämmerer, Pfr.i.R., GR, Fulda¥p2021 †¥tJürgen°Heldmann, Pfarrer,°Fulda¥-Malkes¥p",
        "deceased_more": "1959 †¥tWilhelm°Schüler,°Dompfr.i.R., Msgr., Fulda¥p1969 †¥tKarl°Pelchen°(Breslau), Pfr.i.R., Holungen/Eichsfeld¥p1986 †¥tFranz°Nitsche°(Breslau/Görlitz),°Caritasdirektor°i.R., Apostol.°Protonotar,°Erfurt¥p1997 †¥tAlois°Nolte, Pfarrer°in°Rasdorf¥p2007 †¥tWalter°Herber, Pfr.i.R., Kalbach¥-Uttrichshausen¥p2014 †¥tAugust°Kämmerer, Pfr.i.R., GR, Fulda¥p2021 †¥tJürgen°Heldmann, Pfarrer,°Fulda¥-Malkes¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "29": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, FastPräf¥pv/ros¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1935 †¥tWilhelm°Schrimpf,°Rektor°i.R., Fritzlar¥p1947 †¥tLudwig°Nüdling, Pfr.i.R., Oberrothof°bei°Motzlar¥p1976 †¥tAugust°Jost, Pfr.i.R., GR, Hünfeld¥p1978 †¥tFranz°Faulstich, GR, Pfarrer°in°Eschwege¥p1986 †¥tAlbin°Kiel, Pfarrer°in°Gersfeld¥p1989 †¥tJosef°Schminke, GR, Pfarrer°in°Giesel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "30": {
        "liturgy": "¥fSo¥0f¥a¥t¥f4. Fastensonntag (Laetare)¥0f – Psalt:°IV.°Woche¥pv/ros¥t¥fMs eig¥0f, Cr, FastPräf I oder II bzw. eig°Präf, FSS:°MB°540¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fHeute können als LL und Ev die Texte vom Lesejahr°A genommen werden.¥0f Dann nimmt man bei den Messtexten die ¥feig°Präf¥0f und den entsprechenden ¥fKommunionvers¥0f.¥p¥s¥fIn der kommenden Nacht beginnt die Sommerzeit.¥0f¥p",
        "deceased": "2001 †¥tLudwig°Schreiber, Dechant, Pfarrer°in°Züntersbach¥p2013 †¥tP.°Rudolf°Rüttinger°OMI,°Hünfeld¥p2022 †¥tLeonhard°Herden°(Mainz), Pfr.i.R., GR, Fulda¥p",
        "deceased_more": "1937 †¥tAloys°Beck, Pfr.i.R., Heiligenstadt¥p2001 †¥tLudwig°Schreiber, Dechant, Pfarrer°in°Züntersbach¥p2013 †¥tP.°Rudolf°Rüttinger°OMI,°Hünfeld¥p2022 †¥tLeonhard°Herden°(Mainz), Pfr.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "31": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, FastPräf¥p",
        "notes": "¥fHinweise:¥0f¥p¥sWenn am 4.°Fastensonntag die Lesungen vom Lesejahr°A nicht genommen wurden, können die folgenden Lesungen an einem beliebigen Tag dieser Woche genommen werden: L:°Mi°7¥v,7¥_9¥0v, Ev:°Joh°9¥v,1¥_41¥0v (siehe°ML°IV°184ff/ᴺ186ff). Dazu nimmt man die Messtexte vom Wochentag mit ¥fPräf und Kommunionvers „Vom Blindgeborenen“¥0f (MB°116f/²114f).¥p¥sHeute ist der 6. Jahrestag der Amtseinführung unseres Bischofs Michael.¥p",
        "deceased": "2006 †¥tJoachim°Passek°(Breslau/Görlitz), Pfr.i.R., GR, Geisa¥p",
        "deceased_more": "1932 †¥tDDr.°Alexander°Herzberg, Dr.°theol.°et°phil., Pfarrer°in°Erfurt,°Hl.°Kreuz¥p1956 †¥tHermann°Seifert, Pfarrer°in°Maberzell¥p1959 †¥tKarl°Graf, Pfr.i.R., Erfurtshausen¥p1972 †¥tAlfred°Beck°(Glatz), Pfr.i.R., Hirrlingen/Krs.°Tübingen¥p2006 †¥tJoachim°Passek°(Breslau/Görlitz), Pfr.i.R., GR, Geisa¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      }
    },
    "4": {
      "1": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, FastPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1991 †¥tGünther°Hunold, Pfr.i.R., Erfurt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "2": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°der°Fastenzeit¥p¥tn. B. Komm des ¥fhl. Franz von Paola¥0f, Einsiedler, Ordgr (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder vom°Hl, FastPräf¥p",
        "notes": "",
        "deceased": "1997 †¥tHeinrich°Küstner, Pfr.i.R., Homberg/Efze¥p",
        "deceased_more": "1942 †¥tJohannes°Hannig, Pfr.i.R., Kirchhasel¥p1944 †¥tWilhelm°Thüne, Pfr.i.R., Heiligenstadt¥p1971 †¥tWalter°Mutke°(Breslau),°Erzpriester, Pfr.i.R., Ettlingen¥p1994 †¥tJohannes°Mainusch, Pfarrer°in°Scheßlitz°bei°Bamberg¥p1997 †¥tHeinrich°Küstner, Pfr.i.R., Homberg/Efze¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "3": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°der°Fastenzeit – ¥fPriesterdonnerstag¥0f¥pv¥t¥fMs eig¥0f, FastPräf¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Priesterdonnerstag (monatl. Gebetstag für geistliche Berufe):¥0f Die Votivmesse ist nicht erlaubt. – Fürbitte(n) um Priesterberufungen. – Thema: „Schnell sind sie vom Weg abgewichen“ (Ex 32¥v,8¥0v). Intention: Für alle, die in der Theologie forschen und lehren.¥p",
        "deceased": "",
        "deceased_more": "1952 †¥tAlbert°Grobecker°(Aachen),°Rektor°i.R., Deuna¥p1970 †¥tAdolf°Laufer, Pfr.i.R., GR, Michelsrombach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "4": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°der°Fastenzeit – ¥fHerz¥-Jesu¥-Freitag¥0f¥p¥tn. B. Komm des ¥fhl. Isidor von Sevilla¥0f, Bi, Kl (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder vom°Hl, FastPräf¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum°Herz¥-Jesu¥-Fr:¥0f Die Votivmesse ist nicht erlaubt.¥p",
        "deceased": "",
        "deceased_more": "1939 †¥tPaul°Fürst, Pfarrer°in°Steinbach/Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "5": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°der°Fastenzeit – ¥fHerz¥-Mariä¥-Samstag¥0f¥p¥tn. B. Komm des ¥fhl. Vinzenz Ferrer¥0f, Ordpr (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder vom°Hl, FastPräf¥pv¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Herz¥-Mariä¥-Sa:¥0f Die Votivmesse ist nicht erlaubt.¥p",
        "deceased": "1974 †¥t¥fDr.°Adolf°Bolte¥0f, Dr.°theol.°h.c., Bischof°von°Fulda°(1959¥_1974)¥p",
        "deceased_more": "1936 †¥tWalter°von°Jagemann, Pfr.i.R., Burghaun¥p1941 †¥tFranz°Pralle, Pfarrer°in°Hofaschenbach¥p1956 †¥tHeinrich°Ständer, Pfr.i.R., Heuthen¥p1958 †¥tErnst°Hildebrand,°Direktor,°Heiligenstadt¥p1974 †¥t¥fDr.°Adolf°Bolte¥0f, Dr.°theol.°h.c., Bischof°von°Fulda°(1959¥_1974)¥p1976 †¥tJosef°Streb,°Propst°i.R., Prälat,°Heiligenstadt¥p1978 †¥tHermann°Hahner, Pfr.i.R., GR, Fulda¥p1988 †¥tMatthias°Wehner,°Kaplan°in°Trendelburg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "6": {
        "liturgy": "¥fSo¥0f¥a¥t¥f5. Fastensonntag¥0f – Psalt:°I.°Woche¥pv¥t¥fMs eig¥0f, Cr, FastPräf I oder II bzw. eig°Präf, FSS:°MB°540¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fAb dem 5. Fastensonntag sollen nach altem Brauch Kreuze und Bilder (in Violett) verhüllt werden.¥0f Die Kreuze bleiben verhüllt bis zum Ende der Karfreitagsliturgie, die Bilder jedoch bis zum Beginn der Osternachtfeier.¥p¥s¥fHeute können als LL und Ev die Texte vom Lesejahr°A genommen werden.¥0f Dann nimmt man bei den Messtexten die ¥feig°Präf¥0f und den entsprechenden ¥fKommunionvers¥0f.¥p",
        "deceased": "2000 †¥tGerhard°Kunze, Pfr.i.R., GR, Fulda¥-Kohlhaus¥p",
        "deceased_more": "1955 †¥tAnton°Dunkel, Pfarrer°in°Großauheim¥p1956 †¥tFriedrich°Gogolin, Dechant, Pfarrer°in°Bad°Soden¥p1982 †¥tJosef°Schubert°(Königgrätz), Dechant, Pfarrer°in°Neustadt/Orla¥p2000 †¥tGerhard°Kunze, Pfr.i.R., GR, Fulda¥-Kohlhaus¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "7": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°der°Fastenzeit¥p¥tn. B. Komm des ¥fhl. Johannes Baptist de la Salle¥0f, Pr, Ordpr (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder vom°Hl, LeidPräf°I°oder°KreuzPräf¥p",
        "notes": "¥fHinweise:¥0f¥p¥sAn den Wochentagen der 5.°Fastenwoche können zu Lesehore, Laudes und Vesper die Hymnen der Karwoche (StB°II°176ff) genommen werden.¥p¥sWenn am 5.°Fastensonntag die Lesungen vom Lesejahr°A nicht genommen wurden, können die folgenden Lesungen an einem beliebigen Tag dieser Woche genommen werden: L:°2°Kön°4¥v,18b¥_21.32¥_37¥0v, Ev:°Joh°11¥v,1¥_45¥0v (siehe°ML°IV°210ff/ ᴺ212ff). Dazu nimmt man die Messtexte vom Wochentag mit ¥fPräf und Kommunionvers „Von der Auferweckung des Lazarus“¥0f (MB°126f/²124f).¥p",
        "deceased": "",
        "deceased_more": "1925 †¥tJoseph°Kremer, Pfarrer°in°Borsch¥p1950 †¥tVinzenz°Neumann, Pfarrer°in°Wirtheim¥p1952 †¥tDr.°Eduard°Hartmann, Prof.°em., Dr.°phil., Msgr., Fulda¥p1958 †¥tValentin°Haas, Pfr.i.R., Hilders¥p1993 †¥tP.°Wilhelm°Borg°SDB, Pfr.i.R., Essen/Oldenburg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "8": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, LeidPräf°I°oder°KreuzPräf¥p",
        "notes": "",
        "deceased": "2018 †¥tHelmut°Thomas, Pfr.i.R., OStR°i.K.i.R., GR, Bad°Brückenau¥p",
        "deceased_more": "1987 †¥tP.°Calixtus°de°Bruijn°OFMCap, Pfarrer°in°Meißner¥-Abterode¥p1991 †¥tEngelbert°Hilbert, Pfarrer°in°Eichenzell¥-Lütter¥p2018 †¥tHelmut°Thomas, Pfr.i.R., OStR°i.K.i.R., GR, Bad°Brückenau¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "9": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, LeidPräf°I°oder°KreuzPräf¥p",
        "notes": "",
        "deceased": "1999 †¥tPaul°Pfahls,°Klinikpfarrer°in°Kassel¥p2013 †¥tP.°Albin°Hahn°OMI,°Hünfeld¥p",
        "deceased_more": "1999 †¥tPaul°Pfahls,°Klinikpfarrer°in°Kassel¥p2013 †¥tP.°Albin°Hahn°OMI,°Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "10": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, LeidPräf°I°oder°KreuzPräf¥p",
        "notes": "",
        "deceased": "1939 †¥t¥fDDr.°Joseph°Damian°Schmitt¥0f, Dr.°theol.°et°phil., Bischof°von°Fulda°(1907¥_1939)¥p1964 †¥t¥fDr.°Joseph°Freusberg¥0f, Dr.°iur.°can., Weihbischof, Dompropst,°Generalvikar°in°Erfurt¥p2005 †¥tDr.°Hans¥-Georg°Hermesmann°(Berlin), Pfr.i.R., Naumburg¥p2008 †¥tP.°Emmanuel°Josef°Dürr°OFM,°Fulda¥p",
        "deceased_more": "1925 †¥tTheodor°Eugen°Schlitt, Pfarrer°in°Erfurtshausen¥p1936 †¥tJohannes°Xaver°Döring, Pfr.i.R., Pfaffschwende¥p1939 †¥t¥fDDr.°Joseph°Damian°Schmitt¥0f, Dr.°theol.°et°phil., Bischof°von°Fulda°(1907¥_1939)¥p1948 †¥tHieronymus°Kirchner, Pfr.i.R., Kalteneber¥p1964 †¥t¥fDr.°Joseph°Freusberg¥0f, Dr.°iur.°can., Weihbischof, Dompropst,°Generalvikar°in°Erfurt¥p1986 †¥tPaul°Stasch°(Breslau), Pfr.i.R., Bad°Säckingen¥-Wallbach¥p2005 †¥tDr.°Hans¥-Georg°Hermesmann°(Berlin), Pfr.i.R., Naumburg¥p2008 †¥tP.°Emmanuel°Josef°Dürr°OFM,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "11": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°der°Fastenzeit¥p¥tn. B. Komm des ¥fhl. Stanislaus¥0f, Bi, Märt (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs eig¥0f, Tg°vom Tag oder vom°Hl, LeidPräf°I°oder°KreuzPräf¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum heutigen Gedenktag des hl. Stanislaus¥0f, der früher nichtgebotener Gedenktag war, ist in den älteren Ausgaben der liturgischen Bücher (MB und MBkl, ML°IV, Schott-Messbuch für die Wochentage I, StB°II und Lektionare zum StB I/2, I/3, II/2 und II/3) die Bezeichnung „Gedenktag“ zu ergänzen.¥p",
        "deceased": "1995 †¥tNorbert°Wenzel°(Breslau), Pfr.i.R., Berlin¥-Lankwitz¥p2004 †¥tEmil°Otto°Wanke°(Olmütz/Fulda), Pfr.i.R., GR, Kassel¥p",
        "deceased_more": "1958 †¥tAugust°Seifert, Pfr.i.R., Mackenzell¥p1983 †¥tRobert°Böning, Pfr.i.R., Birkenfelde¥p1988 †¥tAmand°Haas, Pfr.i.R., Friesenhausen¥p1995 †¥tNorbert°Wenzel°(Breslau), Pfr.i.R., Berlin¥-Lankwitz¥p2004 †¥tEmil°Otto°Wanke°(Olmütz/Fulda), Pfr.i.R., GR, Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "12": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°der°Fastenzeit¥pv¥t¥fMs eig¥0f, LeidPräf°I°oder°KreuzPräf¥pr¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "1996 †¥tJohannes°Hoppe°(Breslau/Görlitz), Pfr.i.R., Fulda¥p2008 †¥tP. Dr.°Josef°Krasenbrink°OMI,°Bingen¥p2012 †¥tTheo°Breitbach, OStR°i.R., Fulda¥p",
        "deceased_more": "1945 †¥tAlfons°Mersmann°(Schneidemühl), Pfarrer,°zur°Aushilfe°in°Treysa, vermutlich am°12.4.1945 auf dem Weg vom KZ°Buchenwald zum KZ°Dachau gestorben¥p1952 †¥tEmil°Johne°(Leitmeritz), Pfr.i.R., Hilders¥p1966 †¥tReinhold°Reinisch°(Leitmeritz), Pfr.i.R., Oberaula¥p1996 †¥tJohannes°Hoppe°(Breslau/Görlitz), Pfr.i.R., Fulda¥p2008 †¥tP. Dr.°Josef°Krasenbrink°OMI,°Bingen¥p2012 †¥tTheo°Breitbach, OStR°i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "13": {
        "liturgy": "¥fSo¥0f¥a¥t¥qhPalmsonntag vom Leiden des Herrn¥0f – Psalt:°II.°Woche¥pr¥t¥fFeier des Einzugs Christi in Jerusalem¥0f, Palmweihe, Evangelium (Lk°19¥v,28¥_50¥0v) und Palmprozession oder feierl. oder einf. Einzug¥pr¥t¥fMs eig¥0f°(nach Prozession oder feierlichem Einzug folgt das Tg), Passion, Cr, eig°Präf, FSS:°MBO°14¥_16,°MBI°226°bzw.°MBkl°540¥p",
        "notes": "¥fHEILIGE WOCHE – KARWOCHE¥0f¥j¥fHinweise:¥0f¥p¥sFür die folgenden beiden Wochen kann das 1992 erschienene Stundenbuch und das 1996 erschienene Messbuch für Karwoche und Osteroktav verwendet werden.¥p¥sVon Sonntag bis Donnerstag gibt es im Offizium ¥feigene Hymnen, Antiphonen und Texte von der Kurzlesung an¥0f.¥p¥sDas ¥fGedächtnis des Einzuges unseres Herrn in Jerusalem¥0f soll ¥fam Palmsonntag¥0f in allen Messen seinen Ausdruck finden: durch Prozession oder feierlichen Einzug vor dem Hauptgottesdienst, durch einfachen Einzug vor den anderen Messen. Der feierliche Einzug, nicht aber die Prozession kann wiederholt werden vor der einen oder anderen Messe mit großer Teilnehmerzahl. Der Priester trägt bei der Prozession Messgewand oder Vespermantel in Rot. Ritus siehe MBI°[1]ff bzw. MBO°3ff.¥p¥s¥fKleinere Gottesdienstgemeinschaften mögen sich zur Feier des Triduum Paschale größeren anschließen¥0f (FOV°43).¥p¥s¥fVon Gründonnerstag bis Ostermontag einschl. sind Messen ohne Gemeinde¥0f (vgl. FOV 47) (Privatzelebration, Messen für Einzelne oder kleine Gruppen) ¥fund Beerdigungsmessen nicht gestattet¥0f (vgl. AEM°336). Über einen eigenen Wortgottesdienst bei einer Beerdigung s.°o.°Kap.°III.D.8a.¥p¥s¥fDie Kirche empfiehlt den recht vorbereiteten und ehrfürchtigen Kommunionempfang bei jeder hl.°Messe. Jeder Gläubige aber soll wenigstens einmal im Jahr, nach Möglichkeit in der österlichen Zeit¥0f (zwischen Aschermittwoch und Pfingsten), ¥fdie hl. Kommunion empfangen¥0f und durch diese volle Teilnahme an der Eucharistie seine Gemeinschaft mit der Kirche sichtbar machen (vgl. Weisung d. dt. Bischöfe zur kirchl. Bußpraxis, 24.11.1986, zuletzt veröffentlicht in: Handbuch Bistum Fulda, Gruppe°7, Fundstelle°3.6, S.°5, letzter Abschnitt; can.°920°CIC; KKK°1417). ¥p¥s¥fAm Ostersonntag im Hohen Dom zu Fulda Pontifikalamt mit Apostolischem Segen¥0f.¥p¥sDer früher am Palmsonntag begangene diözesane Weltjugendtag wurde von Papst Franziskus auf den jährlichen Christkönigssonntag verlegt. Heute wird er nicht mehr gefeiert.¥p¥sDie ¥fKommemoration des hl. Martin I.¥0f entfällt in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1961 †¥tJoseph°Schaefer, Pfr.i.R., Heiligenstadt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "14": {
        "liturgy": "¥fMo¥0f¥t¥fMontag der Karwoche¥0f¥pv¥t¥fMs eig¥0f, LeidPräf II oder KreuzPräf¥p",
        "notes": "",
        "deceased": "2009 †¥tAlbert°Reinl, Pfr.i.R., GR, Geisa¥p",
        "deceased_more": "1953 †¥tFritz°Lachmuth, Pfr.i.R., Deuna¥p1972 †¥tPeter°Jacob,°Pfarrkurat°in°Berga/Elster¥p1978 †¥tRichard°Himmelmann, Pfr.i.R., Großenlüder¥p2009 †¥tAlbert°Reinl, Pfr.i.R., GR, Geisa¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "15": {
        "liturgy": "¥fDi¥0f¥t¥fDienstag der Karwoche¥0f¥pv¥t¥fMs eig¥0f, LeidPräf II oder KreuzPräf¥l¥kAm°Vormittag im°Dom°zu°Fulda:¥0k¥pw¥t¥fFeierliche Chrisammesse¥0f (Ölweihemesse) mit°Erneuerung°der°Weiheversprechen der°Priester°und°Diakone¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fHeute Vormittag ist im Dom zu Fulda Chrisammesse¥0f (Ölweihemesse) mit eig Formular, Gl, eig Präf, Weihe der Öle, Farbe: weiß. ¥fDiese Messe mit der Erneuerung der Weiheversprechen der Priester feiert der Bischof in Konzelebration mit seinem Priesterkollegium.¥0f Sie soll ein Ausdruck der Verbundenheit zwischen dem Bischof und seinen Priestern sein. Daher empfiehlt es sich, ¥fdass alle Priester nach Möglichkeit an dieser Messe teilnehmen.¥0f Zum Zeichen der Einheit sollen Priester aus allen Regionen des Bistums konzelebrieren (vgl.°MBI°[15], MBO°339) und unter beiden Gestalten kommunizieren. Wer in der Chrisammesse (kon)zelebriert hat, darf auch in der Abendmahlsmesse (kon)zelebrieren. Über zweimalige Kommunion  s.°o.°Kap.°III.C.16c.¥p",
        "deceased": "2012 †¥tKarl¥-Stephan°Fischer,°StD°i.R., Msgr., Fulda¥p",
        "deceased_more": "2012 †¥tKarl¥-Stephan°Fischer,°StD°i.R., Msgr., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "16": {
        "liturgy": "¥fMi¥0f¥t¥fMittwoch der Karwoche¥0f¥pv¥t¥fMs eig¥0f, LeidPräf II oder KreuzPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1962 †¥tDr.°Karl°Scheller, Prof., Offizial,°Apostol.°Protonotar,°Domdechant,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "17": {
        "liturgy": "¥fDo¥0f¥t¥qhGründonnerstag¥0f oder ¥fHoher Donnerstag¥0f¥l¥fOff vom Tag¥0f. Zur Lesehore können auch die Ant u.°Ps vom Freitag der°III.°Woche genommen werden.¥p¥fVor dem Abendmahlsamt endet die Österliche Bußzeit.¥0f¥j¥fDIE DREI ÖSTERLICHEN TAGE¥0f ¥lVOM°LEIDEN°UND°STERBEN, VON°DER°GRABESRUHE UND°DER°AUFERSTEHUNG UNSERES°HERRN°JESUS°CHRISTUS¥lvom°Abendmahlsamt bis°zur°2.°Vesper°des OStersonntags°einschl.¥jw¥t¥fMs vom Letzten Abendmahl¥0f, ¥wGl mit ¥fLäuten der Glocken¥0f (die danach schweigen bis in die Ostervigil; die Orgel kann bis zum Gesang bei der Übertragung einschl. spielen (s.o.)), ¥0w¥wHomilie, ¥fFußwaschung¥0f nach dem Ev empfohlen, EuchPräf°I°oder°II, in°den Hg°I¥_III eig°Einschübe (MBI°[26¥_37] bzw. MBO°32¥_62). ¥0w¥w¥fKeine°Entlassriten¥0f, sondern nach dem Schlussgebet ¥fÜbertragung des hl.°Sakramentes¥0f für die Kommunionfeier des Karfreitags an einen geeigneten Ort, ¥fEntblößung des Altars¥0f ohne besonderen Ritus, jedoch nur dort, wo auch die Liturgiefeier am Karfreitag gehalten wird, ¥fEntfernen der Kreuze¥0f aus der Kirche ¥fund des Weihwassers¥0f aus den Weihwasserbecken an den Eingängen.¥0w¥lVp entfällt für die Teilnehmer der Abendmahlsfeier.¥l¥f2.°Kp°vom°So¥0f (statt Resp die Ant „Christus°…“)¥p",
        "notes": "¥fHinweise:¥0f¥p¥s„Nach ältester Überlieferung der Kirche sind heute alle Messen ohne Gemeinde untersagt“ (FOV°47), also ¥fkeine Privatzelebration, keine Messen für Einzelne oder für kleine Gruppen¥0f.¥p¥sAm Gründonnerstag darf ¥fkeine Begräbnismesse¥0f gefeiert werden (vgl.°AEM°336). ¥p¥s¥fDen Kranken darf¥0f während des ganzen Triduum Paschale an allen Tagen ¥fdie hl. Kommunion gereicht werden¥0f, ¥fam Karsamstag jedoch nur in Todesgefahr¥0f.¥p¥s¥fAm Gründonnerstag sind Altarkreuz(e) und Prozessionskreuz weiß verhüllt¥0f. ¥p¥sDie ¥fMesse vom Letzten Abendmahl wird am Abend zwischen 16°Uhr und 21°Uhr gefeiert¥0f, zu einer Stunde, die für die Teilnahme der gesamten Ortsgemeinde am geeignetsten ist (FOV°46). In ihr sollen ¥fgenügend Hostien auch für die Kommunionspendung am Karfreitag konsekriert¥0f werden.¥p¥s¥fDie Orgel kann alle Lieder und Gesänge bis einschließlich des Gesanges zur Übertragung des Allerheiligsten „Pange lingua“ begleiten¥0f, danach schweigt sie bis vor dem Gloria der Osternachtfeier, das dann wieder mit der Orgel begleitet wird (vgl. hierzu: SCHOTT Liedvorschläge aus dem Gotteslob, hrsg. von Kurt Grahl, Freiburg°2014, S.°42 unten).¥p¥s¥fDie Fußwaschung in den Abendmahlsfeiern¥0f kann nicht nur an Jungen und Männern, sondern auch an Mädchen und Frauen vorgenommen werden (Dekret der KGS vom 6.°Januar°2016 von Papst Franziskus)¥p¥s¥fNach dem Abendmahlsamt mögen die Gläubigen eine angemessene Zeit hindurch nächtliche Anbetung vor dem hl.°Sakrament (ohne Monstranz!) halten¥0f, die nach Mitternacht jedoch ohne jede Feierlichkeit sein soll. ¥fÖlbergandachten und Anbetungsstunden¥0f werden nach örtlichem Brauch gehalten. Zur Andacht: GL°286; GL°674¥v,2¥0v mit GL°675¥v,3+6+8¥0v; GL°676¥v,1¥0v; Abschluss: GL°682¥v,1¥0v.¥p¥s¥fEin vollkommener Ablass¥0f (s.°o.°Kap.°I.C.10.) kann unter den üblichen Bedingungen (Beichte, entschlossene Abkehr von jeder Sünde, Kommunionempfang, Gebet in den Anliegen des Papstes) gewonnen werden, wenn man ¥fnach der Abendmahlsmesse das „Tantum ergo“ andächtig betet oder singt¥0f.¥p",
        "deceased": "",
        "deceased_more": "1957 †¥tSiegfried°Schultheis°(Breslau),°Erzpriester,°Diözesanvertriebenenseelsorger,°Fulda¥p1991 †¥tPeter°Schwarz, Pfr.i.R., Emmerich¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "18": {
        "liturgy": "¥fFr¥0f¥t¥qhKarfreitag¥0f – ¥fFast- und Abstinenztag¥0f – ¥fOff°eig¥0f¥pr¥t¥fLiturgiefeier vom Leiden und Sterben Christi¥0f ¥w(15°Uhr°oder°später) ¥0w¥wmit Lesungen, ¥fPassion¥0f, ¥fGroßen°Fürbitten¥0f (Auswahl°möglich), ¥fKreuzverehrung¥0f, ¥fKommunionfeier¥0f. Gemäß der verbindlichen liturgischen Ordnung ist die Kommunionfeier integraler Bestandteil der Karfreitagsliturgie. ¥0w¥wDanach ¥fÜbertragung des hl. Sakrament in einfacher Form¥0f (am Aufbewahrungsort brennt mindestens ein Licht) und ¥fEntblößung des Hauptaltars¥0f, doch bleiben Kreuz und Kerzen stehen. Von der Kreuzverehrung bis zur Ostervigil wird vor dem Kreuz eine Kniebeuge gemacht.¥0w¥lVp entfällt für die Teilnehmer der Liturgiefeier.¥l¥f2.°Kp°vom°So¥0f (statt Resp die Ant „Christus°…“)¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute sind Messfeiern nicht gestattet. ¥p¥s¥fHeute ist strenger Fast- und Abstinenztag¥0f (vgl. cann.°1251f°CIC und Hinweis Nr. 18 vor Aschermittwoch).¥p¥s¥fLesehore und Laudes sollen am Karfreitag gemeinsam mit der Gemeinde in der Kirche gefeiert werden (Trauermette)¥0f (vgl.°GL°307¥v,1¥_9¥0v); liturgische Farbe: violett.¥p¥sZu Beginn der Liturgiefeier am Karfreitag sollen der Altar und Altarraum ganz leer sein, ohne Kreuze, Leuchter und Tücher.¥p¥sDas in der Liturgiefeier am Karfreitag zur Kreuzenthüllung verwendete Kreuz kann rot verhüllt sein (nach römischem Vorbild in St. Peter).¥p¥sBei einer ¥fGrablegungsfeier am Karfreitag¥0f kann das Kreuz oder eine Statue mitgetragen werden. Das Allerheiligste darf jedoch nicht im „Heiligen Grab“ ausgesetzt werden (vgl. CE°1998, Nr.°331).¥p¥s¥fDie hl. Kommunion¥0f darf nur während dieser Feier ausgeteilt werden. Den Kranken darf sie jedoch zu jeder Zeit gebracht werden.¥p¥s¥fAm Karfreitag beginnt die Novene zur Göttlichen Barmherzigkeit¥0f zur Vorbereitung des Festes der göttlichen Barmherzigkeit am 2.°Sonntag der Osterzeit (¥fBarmherzigkeitssonntag¥0f).¥p¥s¥fEin vollkommener Ablass¥0f (s.°o.°Kap.°I.C.10.) kann unter den üblichen Bedingungen (Beichte, entschlossene Abkehr von jeder Sünde, Kommunionempfang, Gebet in den Anliegen des Papstes) gewonnen werden, wenn man die ¥fLiturgie des Karfreitags¥0f andächtig mitfeiert und dabei an der ¥fKreuzverehrung¥0f teilnimmt.¥p",
        "deceased": "",
        "deceased_more": "1935 †¥tWilhelm°Ernst, Pfarrer°in°Bischofferode¥p1989 †¥tPaul°Grätz°(Breslau), OStR°i.K.i.R., Fulda¥p1993 †¥tHeinrich°Rumph,°Dompfr., Msgr., Ehrendomkapitular,°Stadtdechant,°Regionaldechant,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "19": {
        "liturgy": "¥fSa¥0f¥t¥fKarsamstag¥0f – ¥fOff°eig¥0f¥p¥t¥f2.°Kp°vom°So¥0f (statt Resp die Ant „Christus°…“) ¥l(entfällt für die Teilnehmer der Ostervigilfeier)¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fLesehore und Laudes sollen am Karsamstag gemeinsam mit der Gemeinde in der Kirche gefeiert werden (Trauermette)¥0f (vgl. GL°310¥v,1¥_10¥0v); Farbe: violett.¥p¥sHeute sind Messfeiern ohne die Osternachtfeier mit der Gemeinde nicht gestattet.¥p¥sDie hl. Kommunion kann ¥fam Karsamstag nur als Wegzehrung für die Sterbenden¥0f gereicht werden.¥p¥sDie ¥fGedenktage des hl. Leo IX.¥0f und ¥fdes sel. Marcel Callo¥0f entfallen in diesem Jahr.¥p",
        "deceased": "2012 †¥tFranz¥-Josef°von°Szczutowski,°Diakon°i.R., Hanau¥p",
        "deceased_more": "1972 †¥tKarl°Kraft, OStR°i.K.i.R., Weiperz¥p1988 †¥tHubert°Lendeckel, Pfr.i.R., GR, Schröck¥p1989 †¥tAnton Dressler°(Königgrätz), Pfr.i.R., Bernbach¥p2012 †¥tFranz¥-Josef°von°Szczutowski,°Diakon°i.R., Hanau¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "20": {
        "liturgy": "¥fSo¥0f¥a¥t¥qhHochfest der Auferstehung des Herrn¥0f – ¥fOstersonntag¥0f¥p¥pw¥t¥fDie Feier der Osternacht¥0f (GL°312)¥lBeginn nicht vor Einbruch der Dunkelheit und Ende°nicht nach Sonnenaufgang –¥l¥fLichtfeier:¥0f Segnung des Feuers, Bezeichnung der Osterkerze, Lichtprozession°(GL°312¥v,1¥0v), Osterlob°(Exsultet) –¥l¥fWortgottesdienst:¥0f Sieben alttestamentl. Lesungen. Aus°pastoralen Gründen kann die Zahl vermindert werden, es werden aber wenigstens drei gelesen; die Lesung vom Durchzug durch das Rote Meer (Ex°14) darf nie ausfallen. – ¥l¥fGl°(mit Glockengeläut und Orgel), feierliches°Halleluja¥0f°(GL°312¥v,9¥0v oder 175¥v,2¥0v) – ¥l¥fTauffeier:¥0f Litanei (entfällt, wenn kein Taufwasser geweiht wird), Taufwasserweihe (oder OSterwasserweihe), ggf.°Taufe, ¥fErneuerung des Taufversprechens, Besprengung der Gläubigen¥0f („Vidi°aquam“,°GL°125), kein°Cr°(im°Taufbekenntnis°enthalten), Fürbitten; Gesänge: GL°488, GL°491 – ¥l¥fEucharistiefeier:¥0f OsterPräf I, in°den Hg°I¥_III eig°Einschübe, FSS, ¥f„Gehet hin in Frieden. Halleluja, Halleluja“¥0f (bis zum 2.°So°der OSterzeit einschließlich; wenn°gesungen, bis zum Ende der Osterzeit möglich)¥p¥p¥fHinweise:¥0f¥p¥sWer die Osternachtmesse (kon)zelebriert hat, kann am Tage ebenfalls (kon)zelebrieren, ggf. auch binieren oder trinieren.¥p¥s¥fIn der Tagesmesse empfiehlt sich¥0f anstelle des Allgemeinen Schuldbekenntnisses ¥fdie Besprengung mit dem in der Osternacht gesegneten Wasser als Taufgedächtnis¥0f („Vidi aquam“, GL°125).¥p¥s¥fSpeisen (Brot, Eier, Fleisch)¥0f können nach dem Schlussgebet gesegnet werden (s. MBO°182 oder Benediktionale°Nr.°7,°S.°58f).¥p¥s¥fEin vollkommener Ablass¥0f (s.°o.°Kap.°I.C.10.) ist unter den üblichen Bedingungen (Beichte, entschlossene Abkehr von jeder Sünde, Kommunionempfang, Gebet in den Anliegen des Papstes) verbunden mit dem ¥fEmpfang des Apostolischen Segens¥0f, den der Bischof heute Vormittag im Pontifikalamt im Dom zu Fulda spendet, und mit dem ¥fEmpfang des Päpstlichen Segens „Urbi et orbi“ (auch über Fernsehen, Radio oder Internet)¥0f, den der Heilige Vater heute Mittag in Rom spendet.¥p¥sAuf die ¥fFeier des Barmherzigkeitssonntages¥0f und die damit verbundene ¥fGewinnung eines vollkommenen Ablasses am kommenden 2. Sonntag der Osterzeit¥0f mögen die Gläubigen hingewiesen werden (siehe dazu auch Hinweis vor dem 2. So d. Osterzeit).¥p¥sAm Schluss der Komplet steht in der Osterzeit bis Pfingstsonntag einschl. die Marianische Antiphon ¥f„Regina°caeli“¥0f (GL°666¥v,3¥0v) bzw. ¥f„O°Himmelskönigin, frohlocke“¥0f (vgl.°GL°525).¥p¥t¥fAm Ostertag¥0f¥l¥fOff eig¥0f – Das Invitatorium wird heute immer vor den Laudes gebetet. ¥lDie Lesehore als Ersatz für die Teilnahme an der Vigilfeier besteht heute aus zwei, ggf. Drei°Lesungen des°AT sowie Epistel und Evangelium der Vigilfeier mit den zugehörigen Cantica und Orationen. – Te°Deum – ¥lFür die Teilnehmer der Osternachtfeier beginnt das Stundengebet mit dem Invitatorium und den Laudes; die Mitfeier der Osternacht gilt als Lesehore.¥pw¥t¥fMs eig¥0f – Anstelle des Allgemeinen Schuldbekenntnisses empfiehlt sich das ¥fTaufgedächtnis mit Besprengung der Gläubigen¥0f mit dem in der Osternacht geweihten Wasser („Vidi°aquam“,°GL°125). – Gl, Sequenz „Victimae°paschali°laudes“ (GL°320), Cr, OsterPräf°I, in°den Hg°I¥_III eig°Einschübe, FSS, ¥f„Gehet°hin in Frieden. Halleluja,°Halleluja“¥0f (bis°zum 2.°So°der OSterzeit einschließlich; wenn gesungen, bis zum Ende der Osterzeit möglich) – ¥l¥f2.°Kp°vom°So¥0f. Statt Resp die Ant „Das ist der Tag“.¥p",
        "notes": "¥fOSTERZEIT¥0f¥jDie Zeit der ¥fFünfzig Tage vom Sonntag der Auferstehung bis Pfingstsonntag¥0f wird als ¥f„der große Tag des Herrn“¥0f gefeiert. In diesen Tagen wird vor allem das ¥f„Halleluja“¥0f gesungen, ¥f¥kder¥0k Gesang der Osterzeit¥0f (vgl.°GOK°22); er sollte in dieser Zeit neben den charakteristischen ¥fOsterliedern mit Halleluja¥0f (GL°318, 322, 324, 326, 328, 331, 332, 333, 337) als ¥feigener Hallelujaruf¥0f in Erscheinung treten, etwa als Kehrvers zum Antwortpsalm, als Ruf vor dem Evangelium (GL°174¥_176) und als österlicher Entlassungsruf: „Gehet hin in Frieden, Halleluja, Halleluja …“ in der gesungenen Form. ¥fDie ersten acht Tage der Osterzeit bilden die Osteroktav und werden wie Hochfeste des Herrn begangen; während der Osteroktav Komplet vom So nach der 1. oder 2.°Vp mit eigenem Responsorium¥0f. ¥fMarianische Antiphon während der ganzen Osterzeit: „Regina caeli“¥0f (GL°666¥v,3¥0v) oder ¥f„Freu dich, du Himmelskönigin“¥0f (vgl.°GL°525).¥p¥p¥fLektionar zum StB I/3¥0f¥p¥fHinweise:¥0f¥p¥s¥fDie Osternachtmesse ist die eigentliche Osterfeier¥0f. Mit der Teilnahme an dieser Messe ist die sogenannte Sonntagspflicht erfüllt, ganz gleich, ob die Osternachtfeier am Abend, um Mitternacht oder am Morgen stattfindet.¥p¥s„‚¥fDie ganze Feier der Osternacht findet in der Nacht statt¥0f; sie soll entweder nicht vor Einbruch der Dunkelheit beginnen oder nicht nach der Morgendämmerung des Sonntags enden.‘ ¥fDiese Vorschrift ist streng einzuhalten.¥0f Gegenteilige Missbräuche und Gewohnheiten, die sich hier und dort eingebürgert haben, nämlich die Osternacht zu der Zeit zu feiern, zu der man die Vorabendmesse des Sonntags zu halten pflegt, werden verworfen“ (FOV°78; MBO°101 und MBI°[63], Hinweis Nr.°3; CE°333). ¥fIn diesem Jahr dauert die Dunkelheit ungefähr von 21.45°Uhr am Samstagabend bis Sonntag früh um 5.30°Uhr¥0f.¥p¥sEs soll dafür gesorgt werden, dass alle Gläubigen, die an der Osternachtfeier teilnehmen, ¥fKerzen für die Erneuerung des eigenen Taufversprechens¥0f haben.¥p¥sDas feierliche ¥fHalleluja in der Osternacht¥0f soll dreimal vom Zelebranten mit aufsteigendem Ton gesungen werden. Nach dem dritten Mal folgen die Psalmverse und darauf wieder das Halleluja, vom Volk gesungen (CE°352).¥p¥s¥fNeugetaufte Erwachsene sollen die hl. Kommunion unter beiden Gestalten empfangen¥0f und können vorweg besonders dazu eingeladen werden (CE°370).¥p¥s¥fSpeisen (Brot, Eier, Fleisch)¥0f können nach dem Schlussgebet gesegnet werden, s. MBO°174 oder Benediktionale°Nr.°7,°S.°58f.¥p¥s¥fEin vollkommener Ablass¥0f (s.°o.°Kap.°I.C.10.) kann unter den üblichen Bedingungen (Beichte, entschlossene Abkehr von jeder Sünde, Kommunionempfang, Gebet in den Anliegen des Papstes) gewonnen werden, wenn man während der Feier der Osternacht sein ¥fTaufbekenntnis¥0f nach einer rechtmäßig approbierten Formel erneuert.¥p¥s¥fEin vollkommener Ablass¥0f ist ebenso verbunden mit dem ¥fEmpfang des Apostolischen Segens¥0f, den der Bischof heute Vormittag im Pontifikalamt im Dom zu Fulda spendet, und mit dem ¥fEmpfang des Päpstlichen Segens „Urbi et orbi“ (auch über Fernsehen, Radio oder Internet)¥0f, den der Heilige Vater heute Mittag in Rom spendet.¥p¥sZur ¥fOsterzeit¥0f kann eine ¥fStatue des auferstandenen Christus¥0f an einem dafür geeigneten Platz im Altarraum oder in der Kirche aufgestellt werden.¥p",
        "deceased": "",
        "deceased_more": "1975 †¥tFranz°Daniel°(Breslau), Pfarrer°in°Mengelrode¥p1979 †¥tFranz°Richter, Pfarrer°in°Großbreitenbach/Thüringen¥p1986 †¥tHubert°Görlich, Pfarrer°in°Geismar/Rhön¥p1994 †¥tWilhelm°Schönfelder°(Breslau), Pfr.i.R., GR, Grebenstein¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "21": {
        "liturgy": "¥fMo¥0f¥a¥t¥fOstermontag¥0f – Off°eig°–°Te°Deum¥pw¥t¥fMs eig¥0f, Gl, n.B. Sequenz, Cr – ¥l¥kAn allen Tagen der Oktav:¥0k¥lOsterPräf°I, in°den°Hg°I¥_III eig°Einschübe, FSS:°MBO°314f oder 322f bzw. 317°(Segensgebet) oder°MB°542 mit Entlassungsruf°MB°531.¥l¥f1. oder 2. Kp vom So¥0f. Statt°des°Resp°die°Ant°„Das°ist°der°Tag°…“ – Or:°„Herr,°bleibe°…“°bzw.°„Allmächtiger°Gott,°…“¥p",
        "notes": "¥fEnde der Drei Österlichen Tage¥0f¥j¥fHinweise:¥0f¥p¥s¥fDer Ostermontag ist in Deutschland kirchlich gebotener Feiertag im Rang eines Hochfestes.¥0f Es besteht ¥fApplikations- sowie Sonn- und Feiertagspflicht¥0f (s.°o.°Kap.°I.C.1.). In den Messfeiern wird das Glaubensbekenntnis gebetet bzw. gesungen.¥p¥s¥fDie Osterkerze¥0f hat bis Pfingsten ihren hervorgehobenen Platz im Altarraum. Sie brennt bei allen Gottesdiensten der Osterzeit.¥p¥sDie ¥fGedenktage des hl. Konrad von Parzham¥0f und ¥fdes hl. Anselm¥0f entfallen in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1948 †¥tHeinrich°Ramb, Pfarrer°in°Buttlar¥p1950 †¥tAndreas°Übl°(Leitmeritz), Pfr.i.R., Neuburg/Donau¥p1951 †¥tFerdinand°Gaudl°(Leitmeritz), Pfr.i.R., Bösekendorf¥p1992 †¥tOscar°Schmalbauch, Pfarrer°in°Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "22": {
        "liturgy": "¥fDi¥0f¥t¥fDienstag der Osteroktav¥0f – Off°eig°–°Te°Deum¥pw¥t¥fMs eig¥0f, Gl, n.B. Sequenz; OsterPräf°I°¥kusw.°wie°am OStermontag¥0k¥p",
        "notes": "",
        "deceased": "1999 †¥tBruno°Leuschner°(Breslau), OStR°i.K.i.R., Schlüchtern¥p2001 †¥tKarl°König, Pfr.i.R., GR, Ebersburg¥-Thalau¥p2009 †¥tGeorg°Pfannmüller,°Diakon,°Freigericht¥-Neuses¥p",
        "deceased_more": "1958 †¥tClemens°Prior°(Olmütz),°Erzpriester°i.R., Konsistorialrat,°Bad°Hersfeld¥p1968 †¥tPeter°Schulte, Pfarrer°in°Lenterode¥p1974 †¥tBernard°Hollenbach,°Msgr., Ordinariatsrat,°Justitiar°in°Fulda¥p1999 †¥tBruno°Leuschner°(Breslau), OStR°i.K.i.R., Schlüchtern¥p2001 †¥tKarl°König, Pfr.i.R., GR, Ebersburg¥-Thalau¥p2009 †¥tGeorg°Pfannmüller,°Diakon,°Freigericht¥-Neuses¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "23": {
        "liturgy": "¥fMi¥0f¥t¥fMittwoch der Osteroktav¥0f – Off°eig°–°Te°Deum¥pw¥t¥fMs eig¥0f, Gl, n.B. Sequenz; OsterPräf°I°¥kusw.°wie°am OStermontag¥0k¥p",
        "notes": "¥fHinweis:¥0f ¥sDie ¥fGed des hl. Adalbert¥0f und ¥fdes hl. Georg¥0f entfallen in diesem Jahr.¥p",
        "deceased": "2020 †¥tHubert°Brähler, Pfr.i.R., GR, Hilders¥-Batten¥p",
        "deceased_more": "1951 †¥tAlbert°Gerlach, Pfarrer°in°Friedrichslohra¥p2020 †¥tHubert°Brähler, Pfr.i.R., GR, Hilders¥-Batten¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "24": {
        "liturgy": "¥fDo¥0f¥t¥fDonnerstag der Osteroktav¥0f – Off°eig°–°Te°Deum¥pw¥t¥fMs eig¥0f, Gl, n.B. Sequenz; OsterPräf°I°¥kusw.°wie°am OStermontag¥0k¥p",
        "notes": "¥fHinweis:¥0f ¥sDer ¥fGedenktag des hl. Fidelis von Sigmaringen¥0f entfällt in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1943 †¥tFranz°Rippert, Pfarrer°in°Geismar/Rhön¥p1960 †¥tAnton°Henkel, Dechant, Pfarrer°in°Ufhausen¥p1986 †¥tDr.°Otfried°Müller°(Breslau/Görlitz), Prof., Domkapitular,°Erfurt¥p1993 †¥tAnton°Paul, Pfr.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "25": {
        "liturgy": "¥fFr¥0f¥t¥fFreitag der Osteroktav¥0f – Off°eig°–°Te°Deum¥pw¥t¥fMs eig¥0f, Gl, n.B. Sequenz; OsterPräf°I°¥kusw.°wie°am OStermontag¥0k¥p",
        "notes": "¥fHinweise:¥0f¥p¥sIn der Osteroktav entfällt die Verpflichtung zum Freitagsopfer.¥p¥sDas ¥fFest des hl. Markus¥0f entfällt in diesem Jahr.¥p¥sNach kirchlicher Tradition wird ¥fvom Fest des hl. Markus bis zum Fest Kreuzerhöhung (14.°September) der Wettersegen für das Gedeihen der Feldfrüchte¥0f gebetet. In der Sorge um das tägliche Brot für alle und als Ausdruck der gegenseitigen Fürbitte soll der Wettersegen von den Gemeinden in Stadt und Land, vor allem in den ländlichen Gemeinden, gebetet werden (Benediktionale°Nr.°8, S.°59ff, und MB°566ff). Siehe auch die entsprechenden Hinweise vor der Bittwoche. In der Osteroktav bis zum Weißen Sonntag sollte jedoch der FSS für die Osterzeit den Vorrang behalten, ggf.°auch an den Sonntagen der Osterzeit bis zum Hochfest Christi Himmelfahrt.¥p",
        "deceased": "1999 †¥tP.°Robert°Haller°OMI, GR, Zwickau¥p",
        "deceased_more": "1945 †¥tBonaventura°Goldbach, Dechant, Pfarrer°in°Hofbieber¥p1985 †¥tP.°Alfred°Hennecke°OMI,°Hünfeld¥p1999 †¥tP.°Robert°Haller°OMI, GR, Zwickau¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "26": {
        "liturgy": "¥fSa¥0f¥t¥fSamstag der Osteroktav¥0f – Off°eig°–°Te°Deum¥pw¥t¥fMs eig¥0f, Gl, n.B. Sequenz; OsterPräf°I°¥kusw.°wie°am OStermontag¥0k¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute ist der ¥fGedenktag des hl. Papstes Kletus¥0f (auch Anaklet), der als zweiter Nachfolger des Apostels Petrus wohl von 76 bis 88 Bischof von Rom war. Er gehört zu den seit alten Zeiten verehrten Heiligen, die im Römischen Messkanon genannt werden, deren Gedenktag heute aber nicht mehr im ARK verzeichnet ist. Durch die ¥fWahl des Hg°I¥0f kann sein Gedächtnis weiter geehrt werden.¥p",
        "deceased": "",
        "deceased_more": "1933 †¥tKaspar°Rüffer,°Rektor°i.R., Dingelstädt¥p1976 †¥tBenedikt°Overhamm, Pfr.i.R., GR, Schlitz¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "27": {
        "liturgy": "¥fSo¥0f¥a¥t¥f2. Sonntag der Osterzeit¥0f – ¥fWeißer°Sonntag – Sonntag°der°Göttlichen°Barmherzigkeit¥0f – Off°eig°–°Te°Deum¥pw¥t¥fMs eig¥0f, Gl, n.B. Sequenz, Cr, OsterPräf°I, in°den Hg°I¥_III eig°Einschübe wie Ostern, FSS: MBO°314f bzw. 317 (Segensgebet) oder MB°542 mit Entlassungsruf°MB°531: „Gehet hin in Frieden. Halleluja, halleluja°…“ – ¥f2.°Vp°vom°So¥0f – ¥f2.°Kp°vom°So¥0f. Statt°des°Resp die°Ant „Das°ist°der°Tag°…“¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fDie Sonntage der Osterzeit¥0f sollen in ihrer festlichen Gestaltung das österliche 50-Tage-Fest zum Ausdruck bringen. Die vorgesehenen Messtexte dürfen nicht ersetzt werden bspw. durch Texte einer Messfeier, in der die Taufe, die Firmung oder ein anderes Sakrament bzw. Sakramentale gespendet werden (AEM°330).¥p¥s¥fDas sonntägliche Taufgedächtnis¥0f (bis Pfingsten mit „Vidi aquam“, GL°125) soll an die Stelle des Allgemeinen Schuldbekenntnisses treten (Segnung und Austeilung des Weihwassers sowie Vergebungsbitte, MB°1171/²1207).¥p¥s¥fHeute ist der Sonntag der Göttlichen Barmherzigkeit¥0f (eingeführt am 30.°April°2000). In den liturgischen Büchern ist die Bezeichnung „Sonntag der Göttlichen Barmherzigkeit“ zu ergänzen.¥p¥sAm Barmherzigkeitssonntag möge das Bild des Barmherzigen Jesus im Altarraum aufgestellt und verehrt und von allen Priestern die göttliche Barmherzigkeit verkündet werden.¥p¥sMit der Feier des Barmherzigkeitssonntags hat der hl. Papst Johannes Paul II. 2002 einen ¥fvollkommenen Ablass¥0f verbunden (s.°o.°Kap.°I.C.10.). Er wird unter den gewohnten Bedingungen (Beichte, entschlossene Abkehr von jeder Sünde, Kommunionempfang, Gebet nach der Meinung des Hl. Vaters) den Gläubigen gewährt, die in einer Kirche oder einem Oratorium ¥fan einer Feier zu Ehren der Göttlichen Barmherzigkeit teilnehmen¥0f oder wenigstens vor dem Allerheiligsten ¥fdas Vaterunser und das Glaubensbekenntnis mit dem Zusatz einer kurzen Anrufung des barmherzigen Herrn Jesus (z.B. „Barmherziger Jesus, ich vertraue auf dich!“) beten¥0f.¥p¥sDer ¥fGed des hl. Petrus Kanisius¥0f entfällt in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1928 †¥tDDr.°Constantin°Gutberlet, Prof., Dr.°theol.°et°phil., Apostol.°Protonotar, Domkapitular,°Fulda¥p1947 †¥tJoseph°Ciré, Pfarrer°in°Kirchworbis¥p1953 †¥tHermann°Simon, Dechant, Pfarrer°in°Oberufhausen¥p1985 †¥tJoseph°Weber, Pfr.i.R., GR, Dechant,°Brakel¥p1988 †¥tWolfgang°Walter°(Leitmeritz/Mainz), Pfr.i.R., Wächtersbach¥-Neudorf¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "28": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°der OSterzeit – Psalt:°II.°Woche¥pr¥tOder ¥fhl. Peter Chanel¥0f, Märt, Pr, ¥fGed¥0f¥pw¥tOder ¥fhl. Ludwig Maria Grignion de Montfort¥0f, Pr, ¥fGed¥0f¥be¥w¥fMs¥0f: HR°/°MBkl°1236f°/°MBErg²°7°/ Com°Ht°Nr.°10¥_12°– ¥fML°IV°ᴺ570¥0f¥l¥vL:¥0v¥t1°Kor°1¥v,18¥_25¥0v¥tML°IV°480¥l¥vAPs:¥0v¥tPs°40¥v,2+4ab.7¥_8.9¥_10¥0v°(R:°vgl.°¥v8a.9a¥0v)¥t399¥l¥vREv:¥0v¥tvgl.°Lk°4¥v,18¥0v¥t399¥l¥vEv:¥0v¥tMt°28¥v,16¥_20¥0v¥t697¥0w¥p(w)¥t¥fMs¥0f vom Tag oder von°einem°der°Hll, OsterPräf¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fIm Commune für Märtyrer gibt es in der Osterzeit eigene Texte¥0f für die 1. Lesung der Lesehore mit ihrem Responsorium, für die Laudes und die Vesper sowie eigene Messformulare (MB°907ff,°Nr.°8¥_10). In den übrigen Formularen wird den Antiphonen zum Introitus und zur Kommunion ein Halleluja angefügt, sofern nicht die Antiphon schon ein Halleluja enthält oder ihr Sinn dem widerstreitet.¥p¥sAn jenen Wochentagen in der Osterzeit nach der Osteroktav, auf die kein Hochfest, Fest oder gebotener Gedenktag fällt, stehen für die Messfeier folgende Formulare zur Wahl:¥p–°¥fMesse vom Wochentag¥0f; ¥p–°¥fMesse eines/einer Heiligen¥0f, dessen/deren Gedächtnis vorgesehen oder der/die an diesem Tag im Martyrologium Romanum verzeichnet ist (AEM°316b); ¥p–°¥fMessen für ein besonderes Anliegen oder Votivmessen¥0f nur dann, wenn eine echte Notwendigkeit besteht oder die pastorale Situation es erfordert; in diesem Fall auch an Ged (AEM°333); ¥p–°¥fMarien-Messen¥0f (MBm°93¥_119) nur in Marienwallfahrtskirchen („die Erlaubnis wird jedoch nur für auswärtige Priester gegeben oder sooft die Messe für Pilger gefeiert wird“), jedoch mit Tageslesungen (MBm,°Past.°Einf.°31); ¥p–°eine ¥fBegräbnismesse¥0f ist an allen Tagen möglich außer an den gebotenen Hochfesten und den Sonntagen der Osterzeit (AEM°336); ¥p–°¥fMessen für Verstorbene¥0f nach Eintreffen der Todesnachricht und am ersten Jahrestag – auch an Ged möglich (AEM°337).¥p¥sWenn nicht anderes angegeben ist, wird während der Osterzeit in den Messfeiern immer eine der Osterpräfationen I¥_V gewählt.¥p",
        "deceased": "",
        "deceased_more": "1988 †¥tDr.°Karl°Schlütz°(Paderborn), Pfr.i.R., Cölbe¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "29": {
        "liturgy": "¥fDi¥0f¥t¥qfHl. Katharina von Siena¥0f, Ord, Kl, Patronin°Europas, ¥fFest¥0f°(GK/RK)¥lOff: BuM eig, sonst Com – Te°Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt°(Osterzeit)¥pw¥t¥fMs eig¥0f, Gl, ¥fFürbitten°für°Europa¥0f, Präf°Ord°oder°Hll, FSS:°MB°560¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum heutigen Fest der hl. Katharina von Siena¥0f ist in den älteren Ausgaben der liturgischen Bücher (MB und MBkl, ML°IV, Schott-Messbuch für die Wochentage I, StB°II und Lektionare zum StB I/3 und II/3) ggf. die Bezeichnung „Patronin Europas“ zu ergänzen und der Rang „Gedenktag“ durch „Fest“ zu ersetzen sowie in den Messbüchern vor dem Tagesgebet „Gloria“ und in den Lektionaren zum StB nach dem Responsorium zur 2.°Lesung „Te°Deum“ einzufügen.¥p",
        "deceased": "2000 †¥tRudolf°Bauschke, Pfr.i.R., GR, Fulda¥p2000 †¥tRobert°Krenzer, Pfr.i.R., GR, Fulda¥p2008 †¥tKarl°Hemberger, OStR°i.K.i.R., GR, Münnerstadt¥p",
        "deceased_more": "1941 †¥tFriedrich°Wilhelm°Schmitt, Pfarrer°in°Aufenau¥p1972 †¥tDr.°Wilhelm°Kleine, Dr.°phil., Pfarrer°in°Uttrichshausen¥p1975 †¥tP.°Paul°Banaschik°SJ, Pfr.i.R., Wiesbaden¥p1984 †¥tJosef°Heim, Pfr.i.R., GR, Ehrendechant,°Fulda¥p2000 †¥tRudolf°Bauschke, Pfr.i.R., GR, Fulda¥p2000 †¥tRobert°Krenzer, Pfr.i.R., GR, Fulda¥p2008 †¥tKarl°Hemberger, OStR°i.K.i.R., GR, Münnerstadt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "30": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°der OSterzeit¥pw¥tOder ¥fhl. Pius V.¥0f, Pp, ¥fGed¥0f¥pw¥t¥fMs¥0f vom Tag oder vom°Hl, OsterPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1954 †¥tFriedrich°Lindner°(Prag), Pfarrer°in°Sundhausen¥p1983 †¥tFranz°Ruprecht°(Leitmeritz), Pfr.i.R., Burgkunstadt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      }
    },
    "5": {
      "1": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°der OSterzeit – ¥fPriesterdonnerstag¥0f¥pw¥tOder ¥fhl. Josef der Arbeiter¥0f, ¥fGed¥0f – Inv°und°BuM°eig,°LuV°wie°am°19.°März, n.B.°auch°Hymnen°(und°Ant°und°Ps) zu°Lh,°Ld°und°Vp wie°am°19.°März¥pw¥tOder ggf.°¥fMs um Priesterberufe¥0f ¥w(MB°1035f/²1057),¥lL°und°Ev vom°Tag oder aus°den°AuswL¥0w¥pw¥t¥fMs¥0f vom Tag oder ggf.°Votivmesse, OsterPräf, oder°vom°Hl,°¥feig°Ev¥0f,°Präf°Josef¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Priesterdonnerstag (monatl. Gebetstag für geistliche Berufe):¥0f Die Votivmesse ist nur bedingt erlaubt (s.°o.°Kap.°III.D.3.). – Fürbitte(n) um Priesterberufungen. – Thema: „Tut Eure Arbeit gern!“ (Kol 3¥v,23¥0v). Intention: Für alle Priester, die durch ihren unermüdlichen Dienst Zeugnis geben.¥p",
        "deceased": "2004 †¥tAloys°Weigand, Pfr.i.R., GR, Petersberg¥p2023 †¥tLothar°Brähler, Pfr.i.R., GR, Großenlüder¥p",
        "deceased_more": "1969 †¥tKarl°Helbing, Pfr.i.R., Duderstadt¥p1969 †¥tNorbert°Goldmann, Pfr.i.R., Neustadt¥p1989 †¥tP.°Erich°Rommerskirch°SJ, Pfr.i.R., Marburg¥p2004 †¥tAloys°Weigand, Pfr.i.R., GR, Petersberg¥p2023 †¥tLothar°Brähler, Pfr.i.R., GR, Großenlüder¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "2": {
        "liturgy": "¥fFr¥0f¥t¥fHl. Athanasius¥0f, Bi, Kl, ¥fGed¥0f – ¥fHerz¥-Jesu¥-Freitag¥0f¥pw¥t¥fMs vom Hl¥0f, OsterPräf – Off°vom°Ged¥pw¥tOder ggf.°¥fVotivmesse vom hl. Herzen Jesu¥0f¥l¥w(MB°1100f/²1132f oder 257ff), Herz¥-Jesu¥-Präf,¥lL°und°Ev°vom°Tag oder aus°den°AuswL¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum°Herz¥-Jesu¥-Fr:¥0f Die Votivmesse ist nur bedingt erlaubt (s.°o.°Kap.°III.D.3.), dann mit Herz¥-Jesu¥-Präfation.¥p",
        "deceased": "2002 †¥tJohannes°Rinke°(Breslau/Fulda), Pfr.i.R., Jüchen¥-Hochneukirch¥p",
        "deceased_more": "1946 †¥tFranz°Maßberg, Pfr.i.R., Rottenmünster¥p1948 †¥tAugust°Rübsam, Pfr.i.R., Fulda¥p1951 †¥tFridolin°Füller, Pfarrer°in°Wirtheim¥p1967 †¥tAlfons°Streng°(Breslau),°Oberstudienrat°in°Fulda¥p2002 †¥tJohannes°Rinke°(Breslau/Fulda), Pfr.i.R., Jüchen¥-Hochneukirch¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "3": {
        "liturgy": "¥fSa¥0f¥t¥qfHl. Philippus und hl. Jakobus¥0f, App, ¥fFest¥0f – ¥fHerz¥-Mariä¥-Samstag¥0f – Te°Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt°(Osterzeit)¥pr¥t¥fMs eig¥0f, Gl, ApPräf, n.B.°Hg°I, FSS:°MB°558¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute ist der ¥fGedenktag des hl. Alexander¥0f, der um das Jahr 130 in Rom das Martyrium erlitten hat. Er gehört zu den seit alten Zeiten verehrten Heiligen, die im Römischen Messkanon genannt werden, deren Gedenktag heute aber nicht mehr im ARK verzeichnet ist. Durch die ¥fWahl des Hg°I¥0f kann sein Gedächtnis weiter geehrt werden.¥p¥s¥fZum Herz¥-Mariä¥-Sa:¥0f Die Votivmesse ist nicht erlaubt.¥p",
        "deceased": "2022 †¥tP.°Johannes°Schreml°SDB,°München¥p",
        "deceased_more": "1935 †¥tWilhelm°Ney, Pfarrer°in°Dipperz¥p1986 †¥tFranz°Massanetz°(Prag), Pfr.i.R., GR, Fulda¥p1990 †¥tHerbert°Schölzel°(Breslau), Pfr.i.R., Hünfeld¥p2022 †¥tP.°Johannes°Schreml°SDB,°München¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "4": {
        "liturgy": "¥fSo¥0f¥a¥t¥f3. Sonntag der Osterzeit¥0f¥lPsalt:°III.°Woche°–°Te°Deum¥pw¥t¥fMs eig¥0f, Gl,°Cr, OsterPräf, FSS:°MB°542, Entlassungsruf:°MB°531¥p",
        "notes": "¥fHinweis:¥0f ¥sDer ¥fGedenktag des hl. Florian und der hll. Märtyrer von Lorch¥0f entfällt in diesem Jahr.¥p",
        "deceased": "2016 †¥tErwin°Sturm, Pfr.i.R., Prälat,°Neuhof¥-Rommerz¥p",
        "deceased_more": "1948 †¥tGeorg°Trageser, Pfarrer°in°Großenbach¥p2016 †¥tErwin°Sturm, Pfr.i.R., Prälat,°Neuhof¥-Rommerz¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "5": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°der OSterzeit¥pw¥tOder ¥fhl. Godehard¥0f, Bi, ¥fGed¥0f°(RK/FD)¥l¥w¥fMs¥0f:°MB°671°– ML°IV°575/ᴺ589¥0w¥pw¥t¥fMs¥0f vom Tag oder vom°Hl, OsterPräf¥p",
        "notes": "",
        "deceased": "1996 †¥tOtto°Fangohr, Pfr.i.R., GR, Hannover¥p",
        "deceased_more": "1974 †¥tP.°Wilhelm°Brauers°CSSp, Pfarrer°in°Förtha¥p1996 †¥tOtto°Fangohr, Pfr.i.R., GR, Hannover¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "6": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°der OSterzeit¥pw¥t¥fMs vom Tag¥0f, OsterPräf¥p",
        "notes": "",
        "deceased": "1999 †¥tDieter°Lucas, GR, Pfarrer°in°Künzell¥-Bachrain¥p",
        "deceased_more": "1936 †¥tAdam°Bargon, Pfarrer°in°Schmalnau¥p1999 †¥tDieter°Lucas, GR, Pfarrer°in°Künzell¥-Bachrain¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "7": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°der OSterzeit¥pw¥t¥fMs vom Tag¥0f, OsterPräf¥p",
        "notes": "",
        "deceased": "1999 †¥tHeinrich°Dehmer, Pfarrer°in°Stadtallendorf,°St.°Michael¥p2000 †¥tRobert°Arnold, Pfr.i.R., GR, Bad°Salzschlirf¥p2024 †¥tKarl°Gömpel, Pfr.i.R., Kassel¥p",
        "deceased_more": "1932 †¥tAugust°Kienemund, Pfr.i.R., Hosenfeld¥p1936 †¥tRichard°Zentgraf, Pfr.i.R., Bad°Orb¥p1954 †¥tKonrad°Schick, Pfarrer°in°Ungedanken¥p1975 †¥tAloys°Schön, Pfarrer°in°Wüstensachsen¥p1999 †¥tHeinrich°Dehmer, Pfarrer°in°Stadtallendorf,°St.°Michael¥p2000 †¥tRobert°Arnold, Pfr.i.R., GR, Bad°Salzschlirf¥p2024 †¥tKarl°Gömpel, Pfr.i.R., Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "8": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°der OSterzeit¥pw¥t¥fMs vom Tag¥0f, OsterPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1927 †¥tPeter°Weber, Pfarrer°in°Schwarzbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "9": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°der OSterzeit¥pw¥t¥fMs vom Tag¥0f, OsterPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1925 †¥tMichael°Hohmann,°Militärpfr.i.R., Fulda¥p1926 †¥tDr.°Wilhelm°Jestädt, Dr.°phil.°h.c., Dechant, Pfarrer°in°Fritzlar¥p1934 †¥tKarl°Herzberg, Pfr.i.R., Beuren¥p1941 †¥tArnold°Reinhard, Pfarrer°in°Zella¥p1959 †¥tJoseph°Hagedorn, Pfarrer°in°Breitenholz¥p1980 †¥tKarl°Rotter°(Olmütz), Pfr.i.R., Bad°Hersfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "10": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°der OSterzeit¥pw¥tOder ¥fhl. Johannes von Avila¥0f, Pr, Kl, ¥fGed¥0f¥be¥w¥fMs¥0f: HR⁵°/°Com°Ht°5°oder°Kl°2°– ¥fML°IV°ᴺ592¥0f¥l¥vL:¥0v¥tApg°13¥v,46¥_49¥0v¥tML°IV°459¥l¥vAPs:¥0v¥tPs°23¥v,1¥_3.4.5.6¥0v°(R:°¥v1¥0v)¥t467¥l¥vREv+Ev:¥0v°Mt°5¥v,13¥_19¥0v¥t554f¥0w¥pw¥tOder ¥fMs vom hl. Damian de Veuster¥0f, Ordpr¥be¥w¥fMs¥0f: HR⁵°/°Com MFr 7¥_9°/°Kommunionvers:°Joh°15¥v,13¥0v¥l¥vL:¥0v¥tRöm°5¥v,1¥_8¥0v¥tML°IV°vgl.°682/ᴺ691¥l¥vAPs:¥0v¥tPs°16¥v,1¥_2+5.7¥_8.9+11¥0v°(R:°vgl.°¥v9a¥0v)¥t396/ᴺ396¥l¥vREv:¥0v¥tJoh°10¥v,11¥0v¥t–––¥l¥vEv:¥0v¥tJoh°10¥v,11¥_18¥0v¥t312/ᴺ314¥0w¥pw¥t¥fMs¥0f vom Tag oder einem°der°Hll, OsterPräf¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "2008 †¥tGerhard°Benzing, Pfr.i.R., Flieden¥p",
        "deceased_more": "1972 †¥tJohannes°Roßmann, Pfr.i.R., Schöllkrippen¥p2008 †¥tGerhard°Benzing, Pfr.i.R., Flieden¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "11": {
        "liturgy": "¥fSo¥0f¥a¥t¥f4. Sonntag der Osterzeit¥0f – ¥fWeltgebetstag°für°geistliche°Berufe¥0f¥lPsalt:°IV.°Woche°–°Te°Deum¥pw¥t¥fMs eig¥0f, Gl,°Cr, OsterPräf, FSS:°MB°542, Entlassungsruf:°MB°531¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute ist der ¥f62. Weltgebetstag für geistliche Berufe¥0f unter dem ¥fLeitwort „Pilger der Hoffnung“ (Motto des Heiligen Jahres)¥0f. Eine ¥fbesondere Gestaltung der Gottesdienste¥0f unter Beachtung der angebotenen Hilfen für dieses wichtige Anliegen ist sehr angezeigt (Papstwort zum Weltgebetstag, Werkheft, Predigt, Fürbitten, Gebetsbildchen). Auch ¥feucharistische Anbetungsstunden und/oder Vespergottesdienste¥0f können am Sonntagvorabend oder Sonntagabend in diesem Anliegen gehalten werden.¥p",
        "deceased": "2005 †¥tRobert°Mayer, Pfarrer°in°Neukirchen¥p",
        "deceased_more": "1949 †¥tWalter°Maria°Reimann°(Breslau), Pfr.i.R., Sieblos¥p1962 †¥tJoseph°Hannappel, Pfarrer°in°Dermbach¥p1989 †¥tKarl°Genau, Pfr.i.R., GR, Odelzhausen¥p1994 †¥tEduard°Herrmann°(Olmütz), Pfr.i.R., GR, Aschaffenburg¥p2005 †¥tRobert°Mayer, Pfarrer°in°Neukirchen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "12": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°der OSterzeit¥pr¥tOder ¥fhl. Nereus und hl.°Achilleus¥0f, Märtt, ¥fGed¥0f¥pr¥tOder ¥fhl. Pankratius¥0f, Märt, ¥fGed¥0f¥p(w)¥t¥fMs¥0f vom Tag oder von°einem°der°Hll, OsterPräf¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZu den Märtyrer-Gedenktagen in der Osterzeit¥0f gibt es im Commune eigene Texte für die 1. Lesung der Lesehore mit ihrem Responsorium (StB°II°1257f), für die Laudes (S.°1264f) und die Vesper (S.°1274f) sowie eigene Messformulare (MB°907ff, Nr.°8¥_10).¥p",
        "deceased": "2017 †¥tAugustin°Naeten°(Hasselt/Fulda), Pfr.i.R., GR, Kassel¥p",
        "deceased_more": "1923 †¥tHugo°Joseph°Zimmer, Pfarrer°in°Erfurtshausen¥p1940 †¥tJulius°Klitsch, Pfarrer°in°Blankenau¥p2017 †¥tAugustin°Naeten°(Hasselt/Fulda), Pfr.i.R., GR, Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "13": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°der OSterzeit¥pw¥tOder ¥fUnsere Liebe Frau in Fatima¥0f, ¥fGed¥0f¥be¥w¥fMs¥0f: HR°/°MBkl°1238°/°MBErg²°8°/°Com°Mar°6¥_7°– ¥fML°IV°ᴺ599¥0f¥l¥vL:¥0v¥tJes°61¥v,9¥_11¥0v¥tML°IV°655¥l¥voder¥0v¥tOffb°11¥v,19a¥0v;°12¥v,1¥_6a.10ab¥0v¥t658¥l¥vAPs:¥0v¥tPs°45¥v,11¥_12.14¥_15.16¥_17¥0v°(R:°vgl.°¥v18a¥0v)¥t475¥l¥vREv:¥0v¥t„Selig bist du, Jungfrau Maria …“¥t663¥v,5¥0v¥l¥vEv:¥0v¥tLk°11¥v,27¥_28¥0v¥t673¥0w¥pw¥t¥fMs¥0f vom Tag, OsterPräf, oder vom Ged, MarPräf oder OsterPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1921 †¥tDDr.°Johannes°Wilhelm°Arenhold, Prof., Dr.°phil.°et°theol., Generalvikar,°Apostol.°Protonotar,°Domdechant,°Fulda¥p1945 †¥tAmand°Schaub, Pfr.i.R., Friesenhausen¥p1963 †¥tGeorg°Stark°(Breslau), Pfarrer°in°Arenshausen°üb.°Heiligenstadt¥p1967 †¥tDr.°Josef°Maria°Werner, Pfr.i.R., Eichelsdorf°üb.°Haßfurt/M.¥p1985 †¥tDDr.°Ludwig°Pralle, Prof., Prälat, Domkapitular,°Fulda¥p1992 †¥tP.°Corbinian°Engelbert°Benzing°OFM, GR, Großkrotzenburg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "14": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°der OSterzeit¥pw¥t¥fMs vom Tag¥0f, OsterPräf¥p",
        "notes": "",
        "deceased": "1997 †¥tDr.°Raphael°von°Rhein, Prof., Domkapitular°i.R., Fulda¥p",
        "deceased_more": "1924 †¥tJohannes°Joseph°Krieg,°Benefiziat°i.R., Fulda¥p1952 †¥tFranz°Schwarz°(Olmütz),°Katechet°i.R., Obervellmar¥p1997 †¥tDr.°Raphael°von°Rhein, Prof., Domkapitular°i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "15": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°der OSterzeit¥pw¥t¥fMs vom Tag¥0f, OsterPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1963 †¥tJohann°Storch, Pfr.i.R., Fulda¥p1969 †¥tWilhelm°Köhne°(Köln), OStR°i.K., Dorfborn/Krs.°Fulda¥p1985 †¥tChristoph°Huschenbett, Pfr.i.R., Maria°Bildhausen¥p1987 †¥tHermann°Henkel, Pfr.i.R., Großkrotzenburg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "16": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°der OSterzeit¥pr¥tOder ¥fhl. Johannes Nepomuk¥0f, Pr, Märt, ¥fGed¥0f°(RK)¥p(w)¥t¥fMs¥0f vom Tag oder vom°Hl, OsterPräf¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZu den Märtyrer-Gedenktagen in der Osterzeit¥0f gibt es im Commune eigene Texte für die 1. Lesung der Lesehore mit ihrem Responsorium (StB°II°1257f), für die Laudes (S.°1264f) und die Vesper (S.°1274f) sowie eigene Messformulare (MB°907ff, Nr.°8¥_10).¥p",
        "deceased": "",
        "deceased_more": "1923 †¥tLeopold°Alsheimer, Pfarrer°in°Kassel,°St.°Joseph¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "17": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°der OSterzeit¥pw¥t¥fMs vom Tag¥0f, OsterPräf¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1942 †¥tVincenz°Schleichert, Pfr.i.R., Geisa¥p1955 †¥tLudwig°Möller, Pfr.i.R., Bad°Ems¥p1956 †¥tKarl°Walk, Pfarrer°in°Großenbach¥p1976 †¥tRichard°Haas, Dechant, Pfarrer°in°Eiterfeld¥p1979 †¥tRudolf°Kirchner°(Leitmeritz), Pfr.i.R., GR, Küllstedt¥p1982 †¥tGeorg°Exner°(Jassy), Pfarrer°in°Batten¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "18": {
        "liturgy": "¥fSo¥0f¥a¥t¥f5. Sonntag der Osterzeit¥0f¥lPsalt:°I.°Woche°–°Te°Deum¥pw¥t¥fMs eig¥0f, Gl,°Cr, OsterPräf, FSS:°MB°542, Entlassungsruf:°MB°531¥p",
        "notes": "¥fHinweis:¥0f ¥sDer ¥fGed des hl. Johannes I.¥0f entfällt in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1922 †¥tKarl°Malkmus, Pfarrer°in°Blankenau¥p1941 †¥tRobert°Buch,°Bischöfl.°Kommissar°in°Heiligenstadt¥p1986 †¥tBernhard°Märzdorf°(Breslau), Pfr.i.R., Treysa¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "19": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°der OSterzeit¥pw¥t¥fMs vom Tag¥0f, OsterPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1978 †¥tP.°Ludger°Suchanek°OT, Pfr.i.R., Haina°(Kloster)¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "20": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°der OSterzeit¥pw¥tOder ¥fhl. Bernhardin von Siena¥0f, Ordpr, ¥fGed¥0f¥pw¥t¥fMs¥0f vom Tag oder vom°Hl, OsterPräf¥p",
        "notes": "",
        "deceased": "2005 †¥tEugen°Pfahls, Pfr.i.R., GR, Bad°Orb¥p",
        "deceased_more": "1968 †¥tKarl°Weigand, Pfarrer°in°Rüstungen/Eichsfeld¥p2005 †¥tEugen°Pfahls, Pfr.i.R., GR, Bad°Orb¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "21": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°der OSterzeit¥pw¥tOder ¥fhl. Hermann Josef¥0f, Ordpr, Myst, ¥fGed¥0f°(RK)¥pr¥tOder ¥fhll. Christopher Magallanes, ¥0fPr, ¥fund°Gefährten¥0f, Märtt, ¥fGed¥0f¥be¥w¥fMs¥0f: HR°/°MBkl°1238f°/°MBErg²°8°/°Com°Ht°od.°Märt°– ¥fML°IV°ᴺ611¥0f¥l¥vL:¥0v¥tOffb°7¥v,9¥_17¥0v¥tML°IV°681¥l¥vAPs:¥0v¥tPs°34¥v,2¥_3.4¥_5.6¥_7.8¥_9¥0v°(R:°vgl.°¥v5b¥0v)¥t390¥l¥vREv:¥0v¥tvgl.°Mt°5¥v,10¥0v¥t390¥l¥vEv:¥0v¥tJoh°12¥v,24¥_26¥0v¥t544¥0w¥pw¥tOder ¥fMs vom hl. Karl Joseph Eugen von Mazenod¥0f, Bi, Ordgr¥be¥w¥fMs¥0f: Com°Ht°1¥_4¥l¥vL:¥0v¥tApg°4¥v,32¥_35¥0v¥tML°IV°721/ᴺ727¥l¥vL°(ggf.°2.°L):¥0v°1°Kor°1¥v,18¥_25¥0v;°2¥v,1¥_5¥0v¥tvgl.°556+553/ᴺ568+565¥l¥vAPs:¥0v¥tPs°96¥v,1¥_2.3+7.8+10¥0v°(R:°vgl.°¥v3a¥0v)¥t439/ᴺ446¥l¥vREv:¥0v¥tMt°28¥v,19a.20b¥0v¥t439/ᴺ447¥l¥vEv:¥0v¥tLk°4¥v,14¥_22a¥0v¥t105/ᴺ107¥0w¥p(w)¥t¥fMs¥0f vom Tag oder von°einem°der°Ged, OsterPräf¥p",
        "notes": "",
        "deceased": "2018 †¥tKlaus¥-Dieter°Mittenentzwei,°Diakon.i.R., Wehretal¥-Reichensachsen¥p",
        "deceased_more": "2018 †¥tKlaus¥-Dieter°Mittenentzwei,°Diakon.i.R., Wehretal¥-Reichensachsen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "22": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°der OSterzeit¥pw¥tOder ¥fhl. Rita von Cascia¥0f, Ord, ¥fGed¥0f¥be¥w¥fMs¥0f: HR°/°MBkl°1239°/°MBErg²°9°/°Com°MFr°7+8 od.°11+12°– ¥fML°IV°ᴺ614¥0f¥l¥vL:¥0v¥tPhil°4¥v,4¥_9¥0v¥tML°IV°600¥l¥vAPs:¥0v¥tPs°1¥v,1¥_2.3.4+6¥0v°(R:°vgl.°¥v2a¥0v°oder°vgl.°Jer°17¥v,7¥0v)¥t527¥l¥vREv:¥0v¥tMt°11¥v,28¥0v¥t731¥v,5¥0v¥l¥vEv:¥0v¥tLk°6¥v,27¥_38¥0v¥t421¥0w¥pw¥t¥fMs¥0f vom Tag oder von°der°Hl, OsterPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1959 †¥tDominikus°Heller, Pfr.i.R., Fulda¥p1984 †¥tGeorg°Gutsfeld°(Breslau), Pfr.i.R., GR, Grafschaft¥-Eckendorf¥p1987 †¥tDr.°Franz°Peter°Sonntag°Or, Prof., Köln¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "23": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°der OSterzeit¥pw¥t¥fMs vom Tag¥0f, OsterPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1994 †¥tJohannes°Heim, Pfr.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "24": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 5.°Woche°der OSterzeit – ¥fWeltgebetstag für°die°kath.°Kirche°in°China¥0f¥pw¥tOder ¥fhl. Maria, Hilfe der Christen¥0f, ¥fGed¥0f¥be¥wVotivmesse: MBm und MLm°Nr.°42¥0w¥pw¥t¥fMs¥0f vom Tag, OsterPräf, oder vom Ged, MarPräf, ¥fFürbitten°für°die°Katholiken°in°China¥0f¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute wird zum 18. Mal der von Papst Benedikt XVI. am 20. Juni 2007 in seinem Brief an die Katholiken Chinas bekanntgegebene und auf den ¥fGedenktag „Maria, Hilfe der Christen“¥0f am 24. Mai festgelegte ¥fWeltgebetstag für die katholische Kirche in China¥0f begangen. – Gebet und Fürbitte im Anliegen, „dass die chinesischen Katholiken ihre Gemeinschaft des Glaubens an Jesus, unseren Herrn und in der Treue zum Papst erneuern und dass die Einheit unter ihnen immer tiefer und sichtbarer werde“ (Papst Benedikt XVI., 2007). Informationen, Gebete und Fürbitten unter www.china-zentrum.de, www.kirche-in-not.de. ¥p",
        "deceased": "",
        "deceased_more": "1988 †¥tP.°Paulus°Danitz°OFM,°Berlin¥-Pankow¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "25": {
        "liturgy": "¥fSo¥0f¥a¥t¥f6. Sonntag der Osterzeit¥0f – „¥fBittsonntag¥0f“¥lPsalt:°II.°Woche°–°Te°Deum¥pw¥t¥fMs eig¥0f, Gl,°Cr, OsterPräf, FSS:°MB°542, Entlassungsruf:°MB°531¥p",
        "notes": "¥fHinweise:¥0f¥p¥sIn der folgenden Woche sollen die ersten drei Werktage (oder wenigstens einer) wenn möglich als ¥fBitttag(e), auch mit Prozession¥0f, begangen werden (s.°o.°Kap.°I.C.7.). Ihre Feier soll den unterschiedlichen örtlichen und menschlichen Gegebenheiten auch tatsächlich entsprechen. ¥fMessformular für die Gemeindemesse:¥0f MB°272 oder eine der „Messen für besondere Anliegen“, z. B. Nr. 22, 25 oder 35¥_38 (MB°1057¥_1079/²1082¥_1109), OsterPräf, Farbe: violett. LL°u.°Evv: Perikopen für besondere Anliegen, ML°VIII°(bes.°298¥_302).¥p¥sAnstelle des Schlusssegens der Messfeier soll an den Bitttagen der ¥fWettersegen¥0f (MB°566ff oder Benediktionale°Nr.°8, S.°59ff) oder eines der ¥fSegensgebete über das Volk¥0f mit Schlusssegen (MB°569¥_575) gebetet werden.¥p¥sDer Wettersegen kann in der Zeit bis zur Einbringung der Ernte an jedem Tag gebetet werden.¥p¥sDie ¥fGedenktage des hl. Beda des Ehrw.¥0f und ¥fdes hl. Gregor VII.¥0f und ¥fder hl. Maria Magdalena von Pazzi¥0f entfallen in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1976 †¥tOtto°Fipper°(Breslau), Pfr.i.R., Winterstein¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "26": {
        "liturgy": "¥fMo¥0f¥t¥fHl. Philipp Neri¥0f, Pr, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute ist der ¥fGedenktag der hl. Brüder Johannes und Paulus¥0f, die zwischen 301 und 303 in Rom das Martyrium erlitten haben. Sie gehören zu den seit alten Zeiten verehrten Heiligen, die im Römischen Messkanon genannt werden, deren Gedenktag heute aber nicht mehr im ARK verzeichnet ist. Durch die ¥fWahl des Hg°I¥0f kann ihr Gedächtnis weiter geehrt werden.¥p",
        "deceased": "1996 †¥tAugust°Görge, Pfr.i.R., GR, Stadtallendorf¥p2004 †¥tHans¥-Ludwig°Artmann, Pfr.i.R., GR, Fulda¥-Bronnzell¥p",
        "deceased_more": "1959 †¥tHeinrich°Glorius, Pfarrer°in°Neuendorf¥p1976 †¥tKarl°Ruppel, Pfr.i.R., Msgr., Bad°Soden¥-Salmünster¥p1985 †¥tGeorg°Neugebauer°(Breslau), Pfr.i.R., OStR°i.K.i.R., GR, Kassel¥p1996 †¥tAugust°Görge, Pfr.i.R., GR, Stadtallendorf¥p2004 †¥tHans¥-Ludwig°Artmann, Pfr.i.R., GR, Fulda¥-Bronnzell¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "27": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 6.°Woche°der OSterzeit¥pw¥tOder ¥fhl. Augustinus von Canterbury¥0f, Bi, Glb, ¥fGed¥0f¥pv¥tOder ¥fBittmesse¥0f¥p(w)¥t¥fMs¥0f vom Tag oder vom°Hl oder vom Bitttag, OsterPräf, Wettersegen:°MB°566f°oder°568¥v,1¥0v¥p",
        "notes": "",
        "deceased": "2003 †¥tErnst°Ludwig°Grünhage, Pfr.i.R., Fulda¥p2007 †¥tRobert°Arnrich, Pfr.i.R., GR, Geisa¥p",
        "deceased_more": "1937 †¥tAnton°Teichmann, Pfr.i.R., Rohrberg¥p1940 †¥tJohannes°Balzer, Pfarrer°in°Michelsrombach¥p1944 †¥tDr.°Viktor°Thielemann, Prof., Domkapitular,°Domdechant,°Fulda¥p1963 †¥tPaul°Grimm, Pfr.i.R., Uder/Eichsfeld¥p1983 †¥tWerner°Grebener, Pfr.i.R., Offenbach¥p1987 †¥tHugo°Büchel, Pfr.i.R., Fulda¥p2003 †¥tErnst°Ludwig°Grünhage, Pfr.i.R., Fulda¥p2007 †¥tRobert°Arnrich, Pfr.i.R., GR, Geisa¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "28": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 6.°Woche°der OSterzeit¥pv¥tOder ¥fBittmesse¥0f¥p(w)¥t¥fMs¥0f vom Tag oder vom Bitttag, OsterPräf, Wettersegen:°MB°566f°oder°568¥v,1¥0v¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom H¥0f – ¥f1.°Vp°vom°folg°H¥0f°–°¥f1.°Kp°vom°So¥0f¥p",
        "notes": "",
        "deceased": "1996 †¥tPaul°Wehner, Pfr.i.R., GR, Bad°Salzschlirf¥p",
        "deceased_more": "1923 †¥tEmil°Atzert, Pfr.i.R., Redakteur°des°Bonifatiusboten,°Eckweisbach¥p1953 †¥tAlbert°Schäfer, Pfarrer°in°Hildebrandshausen¥p1962 †¥tJosef°Mazurowski,°Sekretär°i.R., Fulda¥p1996 †¥tPaul°Wehner, Pfr.i.R., GR, Bad°Salzschlirf¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "29": {
        "liturgy": "¥fDo¥0f¥a¥t¥qhChristi Himmelfahrt¥0f, ¥fHochfest¥0f¥lTe°Deum°–°Kl.°Hore:°eig°Ant°und°Ps¥pw¥t¥fMs eig¥0f, Gl,°Cr, eig°Präf, in°den Hg°I¥_III eig°Einschub, FSS:°MB°544, Entlassungsruf:°MB°531 – ¥f2.°Vp°vom°H – 2.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fDas Hochfest Christi Himmelfahrt ist kirchlich gebotener Feiertag¥0f. Es besteht ¥fApplikations- sowie Sonn- und Feiertagspflicht¥0f (s.°o.°Kap.°I.C.1.).¥p¥sSchließt sich die Flurprozession an die heutige Messfeier an, dann ist diese ohne Entlassriten.¥p¥sDer ¥fGedenktag des hl. Paul VI.¥0f entfällt in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1943 †¥tJohannes°Kellner, Pfarrer°in°Silberhausen¥p1960 †¥tJosef°Pleier°(Prag), Dechant°i.R., GR, Küllstedt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "30": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 6.°Woche°der OSterzeit – 1.°Tag°der°Pfingstnovene¥pw¥t¥fMs vom Tag¥0f, Oster- oder HifPräf¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fDie Tage zwischen den Hochfesten Christi Himmelfahrt und Pfingsten sollen im Gebet der Pfingstnovene¥0f (vgl. Apg°1¥v,14¥0v) ¥fder Vorbereitung auf das Pfingstfest dienen.¥0f Weitere Informationen und ein Gebetsheft sind bei „Renovabis“ erhältlich oder unter www.pfingstnovene.de. Es möge in besonderer Weise für die ¥fEinheit der Christen¥0f gebetet werden.¥p¥sIn den Messfeiern bis Pfingsten kann anstelle der Himmelfahrts-Präfation auch eine Oster-Präfation genommen werden.¥p¥sAn Sonn- und Werktagen bis zur 1. Vesper von Pfingsten ausschl. eigene Hymnen in allen Horen.¥p",
        "deceased": "2024 †¥tVictor John°Gustitus°(Oklahoma°und°Tulsa/USA),°Diakon,°Marburg¥p",
        "deceased_more": "1962 †¥tEdmund°Rausch, Pfr.i.R., Ulmbach¥p2024 †¥tVictor John°Gustitus°(Oklahoma°und°Tulsa/USA),°Diakon,°Marburg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "31": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 6.°Woche°der OSterzeit – 2.°Tag°der°Pfingstnovene¥pw¥t¥fMs vom Tag¥0f, Oster- oder HifPräf¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1950 †¥tDr.°Joseph°Adrian,°Rektor,°Erfurt¥p1969 †¥tJosef°Brodmann, Pfr.i.R., Wingerode/Eichsfeld¥p1974 †¥tAnton°Hollick°(Eichstätt), Pfr.i.R., Burgwald¥-Ernsthausen¥p1974 †¥tP.°Franz°Döring°SVD,°Rektor°in°Ershausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      }
    },
    "6": {
      "1": {
        "liturgy": "¥fSo¥0f¥a¥t¥f7. Sonntag der Osterzeit¥0f – 3.°Tag°der°Pfingstnovene¥lPsalt:°III.°Woche°–°Te°Deum¥pw¥tMs eig, Gl,°Cr, Oster- oder HifPräf, FSS:°MB°542 oder°544, Entlassungsruf:°MB°531¥p",
        "notes": "¥fHinweis:¥0f ¥sDer ¥fGedenktag des hl. Justin¥0f entfällt in diesem Jahr.¥pIn der kommenden Woche möge in den ¥fFürbitten auch für die Weihekandidaten während ihrer Weiheexerzitien¥0f zur Vorbereitung auf die ¥fPriesterweihe am kommenden Samstag¥0f gebetet werden.",
        "deceased": "",
        "deceased_more": "1952 †¥tKarl°Sauer°(Breslau),°Erzpriester°i.R., Kella¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "2": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 7.°Woche°der OSterzeit – 4.°Tag°der°Pfingstnovene¥pr¥tOder ¥fhl. Marcellinus und hl.°Petrus¥0f, Märtt, ¥fGed¥0f – n.B.°Hg°I¥p(w)¥t¥fMs¥0f vom Tag oder von°den°Hll, Oster-°oder°HifPräf¥p",
        "notes": "¥fHinweise:¥0f¥p¥sIn der kommenden Woche werden die ¥fSommerquatember¥0f an einem (oder mehreren) Tag(en) (nach Wahl) begangen als Tag(e) religiöser Erneuerung. ¥fThema: Glaubenseinheit der Christen¥0f. Messformular: Quatembermesse, MB°267, HifPräf, oder Nr. 13 A, B oder C aus den „Messen für besondere Anliegen“ (MB°1040¥_1047/²1062¥_1069), eig°Präf, Farbe: violett. LL u. Evv:°Perikopen für besondere Anliegen, ML°VIII°110¥_130.¥p¥s¥fAm Pfingstsonntag endet die Zeit der Osterkommunion.¥0f¥p",
        "deceased": "2012 †¥tHerwig°Hofmann, Pfr.i.R., Minden/Westfalen¥p",
        "deceased_more": "1968 †¥tGeorg°Steinberg, Pfarrer°in°Ferna/Eichsfeld¥p2012 †¥tHerwig°Hofmann, Pfr.i.R., Minden/Westfalen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "3": {
        "liturgy": "¥fDi¥0f¥t¥fHll. Karl Lwanga und°Gefährten¥0f, Märtt, ¥fGed¥0f – 5.°Tag°der°Pfingstnovene – Off°vom°Ged¥pr¥t¥fMs von den Hll¥0f, Oster- oder HifPräf¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute Abend und am Mittwoch findet der ¥fTag der Priester und Diakone¥0f statt (siehe Einladung des Bischofs bzw. Generalvikars).¥p",
        "deceased": "",
        "deceased_more": "1958 †¥tWenzel°Rösler°(Leitmeritz), Pfr.i.R., Eisenach¥-Elisabethenruhe¥p1988 †¥tJosef°Vogel, Pfr.i.R., Petersberg¥p1989 †¥tFerdinand°Kribus°(Olmütz), Pfr.i.R., GR, Dietershausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "4": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 7.°Woche°der OSterzeit – 6.°Tag°der°Pfingstnovene¥pw¥t¥fMs vom Tag¥0f, OsterPräf¥pw¥t¥kabends:¥0k ggf.°Vorabendmesse°vom°H – ¥f1.°Vp°vom°folg°H¥0f°–°¥f1.°Kp°vom°So¥0f¥p",
        "notes": "",
        "deceased": "2008 †¥tTheodor°Krenzer, Pfr.i.R., GR, Fulda¥p2015 †¥tAlois°Lang, Prälat, GR, Domkapitular°i.R., Fulda¥p",
        "deceased_more": "1951 †¥tWilhelm°Rudolph°(Leitmeritz),°Erzdechant°i.R., Lengenfeld°u.°St.¥p1980 †¥tErnst°Kiel, Dechant, Pfarrer°in°Birkenfelde¥p1989 †¥tDDr.°Georg°Siegmund°(Prag), Prof., Bernhards¥p1993 †¥tDr.°Wilhelm°Kratz, OStD°i.R., Hünfeld¥p2008 †¥tTheodor°Krenzer, Pfr.i.R., GR, Fulda¥p2015 †¥tAlois°Lang, Prälat, GR, Domkapitular°i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "5": {
        "liturgy": "¥fDo¥0f¥t¥qhHl. Bonifatius¥0f, Bi, Märt, Glb in Deutschland, „Apostel°der°Deutschen“, ¥fHauptpatron°der°Diözese¥0f – ¥fHochfest¥0f°(FD/RK/GK) – 7.°Tag°der°Pfingstnovene – ¥fPriesterdonnerstag¥0f¥lTe Deum – Kl.°Hore: eig Ant,°ErgPs¥pr¥t¥fMs eig¥0f, Gl,°Cr,°eig°Präf, eig°FSS¥bf¥wFDM°15¥_21°(dt.)°/°FDM°22¥_28°(lat.)°– FDL°9¥_14¥0w°– 2.°Vp°vom°H°–°2.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥sDas bisher im Rang der liturgischen Feiern in den deutschen Diözesen unterschiedlich begangene ¥fGedächtnis des hl.°Bonifatius¥0f (Ged oder Fest) wurde durch Dekret der KGS vom 9.°September°2005 (Prot.°N.°1402/05/L) ¥ffür alle deutschen Diözesen einheitlich in den Rang eines Festes erhoben¥0f. Im Bistum Fulda bleibt es Hochfest des Eigenkalenders. In den allgemeinen liturgischen Büchern (MB°und MBkl, ML°V, Schott-Messbuch für die Wochentage°I, StB°III und Lektionare zum StB I/5 und II/5) ist die Bezeichnung „Gedenktag“ durch „¥fFest¥0f“ zu ersetzen, in den Messbüchern „¥fGloria¥0f“ und in den Lektionaren zum StB nach dem Responsorium zur 2.°Lesung „¥fTe°Deum¥0f“ einzufügen.¥p¥sNutzer der Stundenbuch-App des DLI finden die ¥fTexte für das Stundengebet zur heutigen Eigenfeier des Diözesankalenders in der Datei FD-Stundengebet.PDF¥0f (s.°o.°S.°87, Nr.°3).¥p¥sEin Liedblatt mit einem weiteren Hymnus zum hl. Bonifatius aus dem Stundenbuch steht für den Gesang als Gemeindelied unter www.direktorium.bistum-fulda.de zum Download bereit.¥p¥s¥fZum Priesterdonnerstag (monatl. Gebetstag für geistliche Berufe):¥0f Die Votivmesse ist nicht erlaubt. – Fürbitte(n) um Priesterberufungen. – Thema: „Ich habe euch erwählt, dass ihr euch aufmacht“ (Joh 15¥v,16¥0v). Intention: Für die Bischöfe in unserem Land.¥p",
        "deceased": "2010 †¥tDr.°Otmar°Einwag°(Würzburg), Pfr.i.R., Grebenstein¥-Udenhausen¥p",
        "deceased_more": "1930 †¥tFriedrich°Haas, Pfr.i.R., Eichenzell¥p1975 †¥tEmil°Jestädt, Pfr.i.R., GR, Ebersburg¥-Ried¥p2010 †¥tDr.°Otmar°Einwag°(Würzburg), Pfr.i.R., Grebenstein¥-Udenhausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "6": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 7.°Woche°der OSterzeit – 8.°Tag°der°Pfingstnovene – ¥fHerz¥-Jesu¥-Freitag¥0f¥pw¥tOder ¥fhl. Norbert von Xanten¥0f, Bi, Ordgr, ¥fGed¥0f°(RK/GK)¥pw¥tOder ggf.°¥fVotivmesse vom hl. Herzen Jesu¥0f¥l¥w(MB°1100f/²1132f oder 257ff), Herz¥-Jesu¥-Präf,¥lL°und°Ev°vom°Tag oder aus°den°AuswL¥0w¥pw¥t¥fMs¥0f vom Tag oder vom°Hl, Oster-°oder°HifPräf, oder ggf.°Votivmesse,°Herz¥-Jesu¥-Präf¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum°Herz¥-Jesu¥-Fr:¥0f Die Votivmesse ist nur bedingt erlaubt (s.°o.°Kap.°III.D.3.), dann mit Herz¥-Jesu¥-Präfation.¥p",
        "deceased": "",
        "deceased_more": "1957 †¥tDr.°Benno°Rode, Dr.°phil., Pfr.i.R., Holungen¥p1963 †¥tHeinrich°Mark°(Prag), Pfarrer°in°Wendehausen/Krs.°Mühlhausen¥p1970 †¥tWerner°Loskant, Pfr., Defensor°vinculi°in°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "7": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 7.°Woche°der OSterzeit – 9.°Tag°der°Pfingstnovene – ¥fHerz¥-Mariä¥-Samstag¥0f¥pr¥tOder ¥fhll. Eoban¥0f, Bi, ¥fAdelar und übrige Gefährten des hl. Bonifatius¥0f, Märtt, ¥fGed¥0f (FD) – BuM°eig¥bf¥w¥vL:¥0v¥t2°Kor°4¥v,6¥_15¥0v¥tML°IV°683/ᴺ691¥l¥vAPs:¥0v¥tPs°124¥v,2¥_3.4¥_5.7¥_8¥0v°(R:°¥v7a¥0v)¥t613/ᴺ640¥l¥vREv:¥0v¥t„Dich, Gott, loben wir …“¥t532/ᴺ542¥l¥vEv:¥0v¥tJoh°12¥v,24¥_26¥0v¥t544/ᴺ613¥0w¥pw¥tOder ggf.°¥fVotivmesse vom Unbefleckten Herzen Mariä¥0f, ¥wMBm°und°MLm°Nr.°28,°eig°Präf¥0w¥p(w)¥t¥fMs¥0f vom Tag oder von°den°Hll oder ggf.°Votivmesse, Oster-°oder°HifPräf¥p",
        "notes": "¥fHinweis:¥0f ¥fHeute¥0f wird im Dom zu Fulda das ¥fPontifikalamt mit Spendung der hl. Priesterweihe¥0f gefeiert. ¥fIn den Fürbitten der Sonntagsmessen möge im ganzen Bistum auch für die Neupriester gebetet werden.¥0f Gläubige, besonders auch Jugendliche, sind zur Mitfeier der Priesterweihe nach Fulda eingeladen.¥s¥fZum Herz¥-Mariä¥-Sa:¥0f Die Votivmesse ist nur bedingt erlaubt (s.°o.°Kap.°III.D.3.).¥p",
        "deceased": "2011 †¥tDr.°Eduard°Krieg, Dr.°phil., OStR°i.R., Prälat,°Fulda¥p",
        "deceased_more": "1981 †¥tAnton°Goeb, Pfr.i.R., Offizialsrat°E.h., Fulda¥p2011 †¥tDr.°Eduard°Krieg, Dr.°phil., OStR°i.R., Prälat,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "¥fHOCHHEILIGES PFINGSTFEST¥0f¥j¥fHinweise:¥0f¥p¥sDie ¥fVorabendmesse zu Pfingsten¥0f kann durch eine vermehrte Zahl der Schriftlesungen zu einer ¥fPfingstvigil¥0f erweitert werden (HR,°S.°5¥_9°/°MBkl°1228¥_1232). Diese Pfingstvigil kann auch als eigener Wortgottesdienst gehalten werden.¥p¥sAus pastoralen Gründen können in der Vigilmesse auch die Perikopen vom Pfingstsonntag genommen werden.¥p¥s¥fHeute endet die Zeit der Osterkommunion¥0f.¥p¥sZum ¥fEnde der Osterzeit am Pfingstsonntagabend¥0f empfiehlt es sich, der ¥fOsterkerze¥0f einen würdigen ¥fPlatz beim Taufbecken¥0f zu geben. An ihr werden in der Tauffeier die Taufkerzen entzündet. Bei Begräbnissen kann die Osterkerze an den Sarg oder bei Begräbnismessen in den Altarraum gestellt und angezündet werden (vgl. FOV°99). Außer bei diesen beiden besonderen Feiern darf sie jedoch außerhalb der Osterzeit nicht angezündet werden und auch nicht im Altarraum stehen.¥p¥s¥fEin vollkommener Ablass¥0f (s.°o.°Kap.°I.C.10.) kann unter den üblichen Bedingungen (Beichte, entschlossene Abkehr von jeder Sünde, Kommunionempfang, Gebet in den Anliegen des Papstes) gewonnen werden, wenn man heute Abend oder morgen in einer Kirche oder Kapelle andächtig dem feierlichen Gesang des ¥fHymnus „Veni, Creator Spiritus“¥0f (GL°341) bzw. ¥f„Komm, Heil’ger Geist“¥0f (GL°342) beiwohnt.¥p",
        "vig_liturgy": "r¥t¥kabends:¥0k ggf. ¥fVigilmesse von Pfingsten¥0f, Gl,°Cr, eig°Präf und in°den Hg°I¥_III eig°Einschub wie morgen, FSS:°MB°546, Entlassungsruf:°MB°531°– ¥f1.°Vp°vom°folg°H¥0f°–°1.°Kp°vom°So¥p¥p"
      },
      "8": {
        "liturgy": "¥fSo¥0f¥a¥t¥qhPfingstsonntag¥0f, ¥fHochfest¥0f¥lTe°Deum°–°Kl.°Hore:°eig°Ant°und°Ps¥pr¥t¥fAm Tag: Ms eig¥0f, Gl, Sequenz°(GL°343/344), Cr, eig°Präf, in°den°Hg°I¥_III eig°Einschub, FSS:°MB°546, Entlassungsruf:°MB°531¥l¥f2.°Vp°vom°H mit: „Gehet hin in Frieden. Halleluja,°halleluja …“¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fHeute endet die Zeit der Osterkommunion¥0f.¥p¥sZum ¥fEnde der Osterzeit am Pfingstsonntagabend¥0f empfiehlt es sich, der ¥fOsterkerze¥0f einen würdigen ¥fPlatz beim Taufbecken¥0f zu geben. An ihr werden in der Tauffeier die Taufkerzen entzündet. Bei Begräbnissen kann die Osterkerze an den Sarg oder bei Begräbnismessen in den Altarraum gestellt und angezündet werden (vgl. FOV°99). Außer bei diesen beiden besonderen Feiern darf sie jedoch außerhalb der Osterzeit nicht angezündet werden und auch nicht im Altarraum stehen.¥p¥s¥fEin vollkommener Ablass¥0f (s.°o.°Kap.°I.C.10.) kann unter den üblichen Bedingungen (Beichte, entschlossene Abkehr von jeder Sünde, Kommunionempfang, Gebet in den Anliegen des Papstes) gewonnen werden, wenn man heute in einer Kirche oder Kapelle andächtig dem feierlichen Gesang des ¥fHymnus „Veni, Creator Spiritus“¥0f (GL°341) bzw. ¥f„Komm, Heil’ger Geist“¥0f (GL°342) beiwohnt.¥p",
        "deceased": "",
        "deceased_more": "1969 †¥tAugust°Hohmann, Pfr.i.R., Eichenried¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "9": {
        "liturgy": "¥fMo¥0f¥a¥t¥fPfingstmontag – Maria,°Mutter°der°Kirche,°Ged¥0f – ¥fBonifatiusfest°in°Fulda¥0f¥l¥fOff vom Ged¥0f (Com Maria) – Psalt:°II.°Woche¥pr¥t¥fMs von Pfingsten¥0f (MB°203/²201) oder ¥fvom°Pfingstmontag¥0f°(MB°207/²205) oder ¥fvom Heiligen°Geist¥0f°(MB°1101¥_1109/²1133¥_1141), Gl,°Cr, ¥fFürbitten für die Einheit der Christen¥0f, eig°Präf oder Präf°von°Pfingsten oder SoPräf°VIII, in°den Hg kein eig°Einschub – ¥wLL°u.°Ev:°ML°C/III°233/ᴺ238°oder°VIII°463¥_478¥0w¥p",
        "notes": "¥fEnde der Osterzeit¥0f¥j¥fZEIT „IM JAHRESKREIS“¥0f (2. Teil)¥lvom Pfingstmontag bis vor der 1. Vesper vom 1. Advent¥jPerikopen an den Wochentagen: ¥fML V, Jahr I¥0f¥p¥fStB¥0f und ¥fLitHor¥0f: ¥fBand III¥0f¥p¥fLektionar zum StB I/5¥0f (bis zur 13. Woche i. Jkr.)¥rLektStB  I/5¥0r¥p¥p¥fHinweise:¥0f¥p¥sDer ¥fPfingstmontag¥0f ist in Deutschland ¥fkirchlich gebotener Feiertag¥0f. Es besteht ¥fApplikations- sowie Sonn- und Feiertagspflicht¥0f (s.°o.°Kap.°I.C.1.). In den Eucharistiefeiern wird daher das ¥fGlaubensbekenntnis¥0f gebetet (bzw. gesungen).¥p¥sAm ¥fPfingstmontag¥0f können ¥fökumenische Gottesdienste¥0f gefeiert werden. Sie sind jedoch nicht zu den ortsüblichen Zeiten der Eucharistiefeiern gestattet. Eucharistiefeiern dürfen nicht durch ökumenische Gottesdienste ersetzt werden (vgl. RS°167; EE°30). Bewährt haben sich ökumenische Vespergottesdienste am Abend (ggf. auch am Abend des Pfingstsonntages) und ökumenische Wortgottesdienste am Spätvormittag (ab 11.30 Uhr) oder Nachmittag des Pfingstmontags (vgl. KA 1994, Nr. 151f.; Brief des em. Bischofs vom 15. Mai 2003 an alle Pfarrer und Dechanten;  vgl.°o.°Kap.°I.C.7.). – ¥fFürbitten für die Einheit der Christen¥0f.¥p¥sMit Dekret vom 11. Februar 2018 hat die KGS die ¥fliturgische Feier der seligen Jungfrau Maria als Mutter der Kirche im Rang eines gebotenen Gedenktages in den Römischen Generalkalender eingeführt¥0f. ¥fAls Termin hierfür ist gesamtkirchlich der Pfingstmontag vorgesehen¥0f. In einer Notifikation vom 24. März 2018, in der die Kongregation auf ortskirchliche Gegebenheiten eingeht, ist klargestellt, dass für Deutschland die bisherige liturgische Ordnung durch den neuen Gedenktag nicht abgeschafft wird und die gewohnte liturgische Ordnung hier bestehen bleibt. Eine Verlegung des neuen Gedenktages ist in der Notifikation nicht vorgesehen. Eine abschließende Klärung des Umgangs der deutschen Bischöfe mit dem neuen Gedenktag ist zum Redaktionsschluss noch nicht erfolgt. Ohne dem Ergebnis vorzugreifen, wird auf die ¥fMöglichkeit¥0f verwiesen, je nach pastoraler Situation ¥fan einem der Wochentage in der Woche nach Pfingsten eine Votivmesse zu Maria, der Mutter der Kirche (MB°²1141ff; MBm und MLm Nr.°25¥_27), zu feiern¥0f, sofern der Tag nicht bereits durch einen gebotenen Gedenktag oder ein Gedenken höheren Ranges belegt ist. – ¥fDas bietet sich in diesem Jahr für Donnerstag oder Samstag (ggf. auch Dienstag) an¥0f.¥p¥sAm Schluss der Komplet steht in der Zeit im Jahreskreis die Marianische Antiphon ¥f„Salve Regina“¥0f (GL 666¥v,4¥0v) bzw. ¥f„Sei gegrüßt, o Königin“¥0f (vgl.°GL°536) oder eine andere Marianische Antiphon. Nur die Ant „Regina caeli“ bzw. „O¥°Himmelskönigin, frohlocke“ ist der Osterzeit vorbehalten.¥p¥s¥fHeute¥0f wird auf dem Domplatz zu Fulda das ¥fBonifatiusfest mit Eröffnung der Bonifatiuswallfahrt¥0f gefeiert. ¥p¥sDer ¥fGed des hl. Ephräm des Syrers¥0f entfällt in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1967 †¥tDr.°Johannes°Haußner,°Studienrat°in°Somborn¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "10": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 10.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Bardo¥0f, Bi, ¥fGed¥0f (FD)¥bf¥w¥vL:¥0v¥t1°Petr°5¥v,1¥_4¥0v¥tML°V°567/ᴺ572¥l¥vAPs:¥0v¥tPs°89¥v,2¥_3.20a+4¥_5.21¥_22.25+27¥0v°(R:°¥v2a¥0v)¥t642/ᴺ657¥l¥vREv+Ev:¥0v°Lk°22¥v,24¥_30¥0v¥t601/ᴺ606¥0w¥pw¥tOder ggf. ¥fVotivmesse Maria, Mutter der Kirche¥0f¥be¥w(vgl. den Hinweis zum heutigen Dienstag)¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°319,38;°Gg°350,7;°Sg°301¥0w¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fAm°Donnerstag oder Samstag (ggf. auch am Dienstag) kann in unserem Bistum der neue¥0f gesamtkirchlich auf den Montag nach Pfingsten gelegte ¥fGedenktag „Maria, Mutter der Kirche“ begangen werden mit der Feier der Votivmesse¥0f:¥p   ᴰ  MB ²1141ff oder MBm und MLm Nrr. 25–27 – L: Gen 3¥v,9–15.20¥0v¥p       oder Apg 1¥v,12–14¥0v | APs: Ps 87¥v,1b–﻿3+5.6–﻿7¥0v (R: ¥v3¥0v) | ¥p       Ev: Joh 19¥v,25–34¥0v (ML IV 403 od. 657/vgl. 314/663¥v,5¥0v/vgl. 673¥p       bzw. ᴺ403 od. 671/vgl. 316/674¥v,5¥0v/683)¥p¥s¥fIn der Zeit im Jahreskreis¥0f stehen an jenen Wochentagen, auf die kein Hochfest, Fest oder gebotener Gedenktag fällt, ¥ffür die Messfeier folgende Texte zur Wahl¥0f:¥p–°¥fMesse vom Tag¥0f: die ¥f34 Messformulare der Sonntage¥0f im Jkr., ¥fWochentagsmessen¥0f (MB°275¥_304), ¥fTagesgebete¥0f (MB°305¥_320), ¥fGabengebete¥0f (MB°348¥_351), ¥fSchlussgebete¥0f (MB°525¥_529) zur Auswahl. ¥fVorschläge zur Auswahl¥0f von Tagesgebet°(Tg), Gabengebet°(Gg) und Schlussgebet°(Sg), die sich am Evangelium des Tages orientieren, sind bei der „Messe nach Wahl“ im Kalendarium jeweils angegeben (vgl. Werkbuch zum Gotteslob VIII/2: Die Wochentage während des Jahres, 1978). Die Seitenzahl bezieht sich auf das MB°II°1975 und MB°II,°2.°Auflage°1988.¥p–°¥fMarien-Messen¥0f (MBm°187¥_297), (vgl.°AEM°316c, MBm, Past.°Einf.°37), vor allem das Gedächtnis Mariens am Samstag; ¥p–°¥fMessen eines/einer Heiligen¥0f, dessen/deren Gedächtnis vorgesehen oder der/die an diesem Tag im Martyrologium Romanum verzeichnet ist (vgl.°AEM°316c); ¥p–°¥fMessen für ein besonderes Anliegen oder Votivmessen¥0f – bei echter Notwendigkeit oder aus pastoraler Erfordernis auch an gebotenen Ged (AEM°333);¥p–°eine ¥fBegräbnismesse¥0f ist an allen Tagen möglich, außer an den gebotenen Hochfesten (AEM°336);¥p–°¥fMessen für Verstorbene nach Eintreffen der Todesnachricht und am ersten Jahrestag¥0f – auch an gebotenen Ged möglich (AEM°337); ¥p–°¥fMessen für bestimmte Verstorbene¥0f (sog. „tägliche Totenmesse“, AEM°337).¥p",
        "deceased": "",
        "deceased_more": "1975 †¥tBernhard°Bilz, Pfr.i.R., Altenmittlau¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "11": {
        "liturgy": "¥fMi¥0f¥t¥fHl. Barnabas¥0f, Ap, ¥fGed¥0f – Inv°und°LuV°eig – Hy°zur°Lh°aus°dem°Com°oder°vom°Wt – Kl.°Hore:°Hy,°Ant°u.°Ps°vom°Wt,°sonst°eig¥pr¥t¥fMs vom Hl¥0f, ¥feig°L¥0f, ApPräf, n.B.°Hg°I¥p",
        "notes": "",
        "deceased": "1995 †¥tAugust°Kraft, Pfr.i.R., Kassel¥p1995 †¥tPaul°Piosik°(Schneidemühl), OStR°i.K.i.R., GR, Fulda¥p",
        "deceased_more": "1957 †¥tHeinrich°Gellrich, Pfr.i.R., Heiligenstadt¥p1980 †¥tHerbert°Schlensog°(Breslau), GR, Pfarrer°in°Frankenberg¥p1995 †¥tAugust°Kraft, Pfr.i.R., Kassel¥p1995 †¥tPaul°Piosik°(Schneidemühl), OStR°i.K.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "12": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 10.°Woche°im°Jahreskreis¥pw¥tOder ¥fVotivmesse Maria, Mutter der Kirche¥0f¥be¥w(vgl. den Hinweis zum Dienstag dieser Woche)¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°312,21;°Gg+Sg°83/²81¥0w¥p",
        "notes": "",
        "deceased": "2005 †¥tAntonius°van’t°Walderveen, Pfr.i.R., Msgr., GR, Niederklein¥p",
        "deceased_more": "1960 †¥tFranz°Schreiber°(Breslau), Pfr.i.R., GR, Gottsbüren¥p1970 †¥tP.°Rudolf°Benedikt°Engelhardt°OFM,°Hausgeistlicher°im°Marienstift°in°Erfurt¥p1975 †¥tWilhelm°Strothteicher, Pfr.i.R., GR, Schloß°Holte¥p2005 †¥tAntonius°van’t°Walderveen, Pfr.i.R., Msgr., GR, Niederklein¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "13": {
        "liturgy": "¥fFr¥0f¥t¥fHl. Antonius von Padua¥0f, Ordpr, Kl, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "2017 †¥tWerner°Vogel, OStR°a.D., GR, Petersberg¥p",
        "deceased_more": "1934 †¥tJulius°Schmidt, Pfarrer°in°Margretenhaun¥p2017 †¥tWerner°Vogel, OStR°a.D., GR, Petersberg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "14": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 10.°Woche°im°Jahreskreis¥pw¥tOder ¥fVotivmesse Maria, Mutter der Kirche¥0f¥be¥w(vgl. den Hinweis zum Dienstag dieser Woche)¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°1052,1/²1076,1;°Gg+Sg°1053/²1077¥0w¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom H¥0f – ¥l¥f1.°Vp°vom°folg°H¥0f°(StB°III°73) – 1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "15": {
        "liturgy": "¥fSo¥0f¥a¥t¥qhDreifaltigkeitssonntag¥0f, ¥fHochfest¥0f¥lLektionar°zum°StB°I/5,°218 – Te°Deum – Kl.°Hore:°eig°Ant,°Ps°vom°So°der°I.°Woche¥pw¥t¥fMs eig¥0f (MB°250), Gl,°Cr, eig°Präf, FSS:°MB°552 – LL°und°Ev:°ML°C/III°237/ᴺ243¥l¥f2.°Vp°vom°H¥0f°–°¥f2.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥sDas ¥fsonntägliche Taufgedächtnis mit Segnung und Austeilung des Weihwassers¥0f (Asperges, GL°124) sowie Vergebungsbitte (MB°1171/²1207) kann in allen Sonntagsmessen – auch in den Vorabendmessen – in allen Kirchen und Kapellen vorgenommen werden. Dieser Ritus ersetzt das Allgemeine Schuldbekenntnis. Nach der Vergebungsbitte folgen, soweit vorgesehen, Kyrie und Gloria.¥p¥s¥fZur Jahreszeit der Sommersonnenwende¥0f passt das Lied ¥fGL°465¥0f (auch nach der Melodie GL°395 singbar).¥p¥sDie Liturgie zum 11. Sonntag im Jkr. entfällt in diesem Jahr.¥p¥sDer ¥fGedenktag des hl. Vitus¥0f entfällt in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1945 †¥tJoseph°Bottermann, Pfarrer°in°Künzell¥p1987 †¥tGerhard°Mohr, Pfr.i.R., Erfurt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "16": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 11.°Woche°im°Jahreskreis¥lPsalt:°III.°Woche¥pw¥tOder ¥fhl. Benno¥0f, Bi, ¥fGed¥0f°(RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°317,34;°Gg°350,8;°Sg°527,8¥0w¥p",
        "notes": "",
        "deceased": "2006 †¥tFrankbert°Müller, Pfr.i.R., Poppenhausen¥p",
        "deceased_more": "1936 †¥tFranz°Neureuther, Prof., StR°i.R., Heiligenstadt¥p1977 †¥tKarl°Hohmann, Pfr.i.R., Bachrain¥p1990 †¥tBernhard°Wand, Pfr.i.R., GR, Bad°Salzschlirf¥p1992 †¥tKarl°Schollmeier,°Ehrendomkapitular,°Erfurt¥p2006 †¥tFrankbert°Müller, Pfr.i.R., Poppenhausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "17": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 11.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°1087/²1118;°Gg+Sg°1083/²1113f¥0w¥p",
        "notes": "",
        "deceased": "1998 †¥tStephan°Weber, Pfr.i.R., Hilders¥-Eckweisbach¥p1998 †¥tP.°Contardo°Müller°OFM,°Marienthal¥p",
        "deceased_more": "1962 †¥tLeopold°Preis, Pfr.i.R., Ufhausen¥p1975 †¥tJoachim°Aust°(Schneidemühl), Pfr.i.R., GR, Breitenworbis¥p1985 †¥tEgon°Rowinski°(Ermland), Pfr.i.R., GR, Steinheim¥-Ottenhausen¥p1989 †¥tGeorg°Hanel°(Breslau/Görlitz), Pfr.i.R., Wittichenau¥p1990 †¥tDr.°Heinrich°Huth, Pfr.i.R., Weyhers¥p1998 †¥tStephan°Weber, Pfr.i.R., Hilders¥-Eckweisbach¥p1998 †¥tP.°Contardo°Müller°OFM,°Marienthal¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "18": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 11.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°94/²92;°Gg+Sg°293f¥0w¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom H¥0f – ¥f1.°Vp°vom°folg°H¥0f°(StB°III°88)°–°¥f1.°Kp°vom°So¥0f¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1937 †¥tJoseph°Weber, Pfr.i.R., Haimbach¥p1972 †¥tWilhelm°Wewer, Pfr.i.R., Herne/Westfalen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "19": {
        "liturgy": "¥fDo¥0f¥a¥t¥qhHochfest des Leibes und Blutes Christi¥0f ¥f(Fronleichnam)¥0f¥lLektionar°zum°StB°I/5,°222 – Te°Deum – Kl.°Hore:°eig°Ant,°ErgPs¥pw¥t¥fMs eig¥0f (MB°255), Gl, n.B. Sequenz, Cr, EuchPräf°II, FSS:°MB°540 oder ²1030 bzw. MBErg¹°28 – LL°und°Ev:°ML°C/III°240/ᴺ246¥l¥f2.°Vp°vom°H¥0f°–°¥f2.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fDas Hochfest Fronleichnam ist kirchlich gebotener Feiertag¥0f. Es besteht ¥fApplikations- sowie Sonn- und Feiertagspflicht¥0f (s.°o.°Kap.°I.C.1.).¥p¥sSchließt sich die Fronleichnamsprozession an die heutige Messfeier an, dann ohne Entlassriten.¥p¥s¥fEin vollkommener Ablass¥0f (s.°o.°Kap.°I.C.10.) kann unter den üblichen Bedingungen (Beichte, entschlossene Abkehr von jeder Sünde, Kommunionempfang, Gebet in den Anliegen des Papstes) gewonnen werden, wenn man ¥fan einer feierlichen eucharistischen Prozession teilnimmt¥0f oder ¥fdas „Tantum ergo“ andächtig betet oder singt¥0f.¥p¥sDer ¥fGedenktag des hl. Romuald¥0f entfällt in diesem Jahr.¥p",
        "deceased": "1996 †¥tP.°Haimo°Gerats°OFMCap, GR, Pfarrer°in°Herleshausen¥p2001 †¥tHermann°Meissner, GR, Pfarrer°in°Hofbieber¥-Schwarzbach¥p2013 †¥tHeinrich°Streb, Pfr.i.R., Meisenheim¥p",
        "deceased_more": "1970 †¥tEduard°Pfeifer, Pfr.i.R., Bronnzell¥p1996 †¥tP.°Haimo°Gerats°OFMCap, GR, Pfarrer°in°Herleshausen¥p2001 †¥tHermann°Meissner, GR, Pfarrer°in°Hofbieber¥-Schwarzbach¥p2013 †¥tHeinrich°Streb, Pfr.i.R., Meisenheim¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "20": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 11.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°232f¥0w¥p",
        "notes": "",
        "deceased": "1997 †¥tDr.°Josef°Gutmann, OStD°i.K.i.R., Msgr., Hilders¥p2003 †¥tJosef°Peter,°Msgr., Spiritual,°Fulda¥p",
        "deceased_more": "1954 †¥tDr.°Alfons°Goldmann°(Breslau), Pfr.i.R., Küllstedt¥p1957 †¥tGeorg°Gerling, Pfr.i.R., Kirchgandern¥p1997 †¥tDr.°Josef°Gutmann, OStD°i.K.i.R., Msgr., Hilders¥p2003 †¥tJosef°Peter,°Msgr., Spiritual,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "21": {
        "liturgy": "¥fSa¥0f¥t¥fHl. Aloisius Gonzaga¥0f, Ord, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "2018 †¥tJosef°van°Besien, Pfr.i.R., GR, Maintal¥-Hochstadt¥p",
        "deceased_more": "1964 †¥tWilhelm°Hasenau, Pfarrer°in°Neuhof¥p1981 †¥tBernhard°Ewers, Pfr.i.R., GR, Halle¥p2018 †¥tJosef°van°Besien, Pfr.i.R., GR, Maintal¥-Hochstadt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "22": {
        "liturgy": "¥fSo¥0f¥a¥t¥f12. Sonntag im Jahreskreis¥0f¥lPsalt:°IV.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweise:¥0f¥p¥sDie ¥fGedenktage des hl. Paulinus von Nola¥0f und ¥fder hll. John Fischer und Thomas Morus¥0f entfallen in diesem Jahr.¥p¥sDer hl. Papst Johannes Paul II. hat den ¥fhl. Thomas Morus¥0f am 31. Oktober 2000 mit einem Apostolischen Schreiben zum ¥fPatron der Regierenden und der Politiker¥0f ernannt. Darin schreibt er: „Vom Leben und Martyrium des heiligen Thomas Morus geht eine Botschaft aus, welche die Jahrhunderte durchzieht und zu den Menschen aller Zeiten von der unveräußerlichen Würde des Gewissens spricht.“¥p",
        "deceased": "",
        "deceased_more": "1957 †¥tHeinrich°Mette, Pfarrer°in°Erfurt,°St.°Severi¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "23": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 12.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°313,24;°Gg+Sg°300¥0w¥p",
        "notes": "",
        "deceased": "2003 †¥tAlfons°Kluge°(Breslau/Fulda), Pfr.i.R., GR, Bad°Orb¥p",
        "deceased_more": "1960 †¥tFranz°Mayer°(Königgrätz),°Kpl.i.R., Volkmarsen¥p2003 †¥tAlfons°Kluge°(Breslau/Fulda), Pfr.i.R., GR, Bad°Orb¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "¥fHinweise:¥0f¥p¥sAus pastoralen Gründen können in der ¥fVigilmesse vom Hochfest der Geburt des hl. Johannes des Täufers¥0f auch die Perikopen der Tagesmesse genommen werden.¥p¥sZum morgigen Hochfest der Geburt des hl. Johannes des Täufers passen die ¥fLieder GL°748¥v,3¥0v und GL°871¥0f; letzteres kann auch nach der Melodie GL°795 gesungen werden oder – ohne den Kehrvers, nur die Strophen – nach den Melodien GL°236 oder GL°282.¥p¥sFür den Gesang des ¥fHymnus aus dem Stundenbuch als Gemeindelied¥0f steht unter www.direktorium.bistum-fulda.de ein Liedblatt zum Download bereit.¥p",
        "vig_liturgy": "w¥t¥kabends:¥0k ggf. ¥fVigilmesse von der Geburt des hl. Johannes des Täufers¥0f, Gl,°Cr, eig°Präf und in°den Hg°I¥_III eig°Einschub wie morgen, FSS:°MB°560°– ¥f1.°Vp°vom°folg°H¥0f°–°¥f1.°Kp°vom°So¥0f¥p¥p"
      },
      "24": {
        "liturgy": "¥fDi¥0f¥t¥qhGeburt des hl. Johannes des Täufers¥0f, ¥fHochfest¥0f¥lTe Deum – Kl.°Hore: eig Ant,°ErgPs¥pw¥t¥fMs „Am Tag“ eig¥0f, Gl,°Cr, eig°Präf, n.B.°Hg°I, in°den Hg°I¥_III eig°Einschub, FSS:°MB°560°– 2.°Vp°vom°H°–°2.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥sZum morgigen Hochfest der Geburt des hl. Johannes des Täufers passen die ¥fLieder GL°748¥v,3¥0v und GL°871¥0f; letzteres kann auch nach der Melodie GL°795 gesungen werden oder – ohne den Kehrvers, nur die Strophen – nach den Melodien GL°236 oder GL°282.¥p¥sFür den Gesang des ¥fHymnus aus dem Stundenbuch als Gemeindelied¥0f steht unter www.direktorium.bistum-fulda.de ein Liedblatt zum Download bereit.¥p",
        "deceased": "2003 †¥tDr.°Anton°Thaler, Prof., Generalvikar,°St.°Gallen/Schweiz¥p2007 †¥t¥fP.°Rudolf°Maria°Koppmann°OMI¥0f,°Bischof°em., Hünfeld¥p",
        "deceased_more": "1929 †¥tWilhelm°Rhiel,°Direktor°i.R., Steinfeld°(Eifel)¥p1936 †¥tJohannes°Bierschenk, Dechant, Pfarrer°in°Neuendorf¥p2003 †¥tDr.°Anton°Thaler, Prof., Generalvikar,°St.°Gallen/Schweiz¥p2007 †¥t¥fP.°Rudolf°Maria°Koppmann°OMI¥0f,°Bischof°em., Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "25": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 12.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°214/²213;°Gg+Sg°288f¥0w¥p",
        "notes": "",
        "deceased": "2009 †¥tNorbert°Schneider, Pfr.i.R., GR, Fulda¥p2011 †¥tAlbert°Seikel, Pfr.i.R., OStR°i.K.i.R., Msgr., GR, Freigericht¥-Horbach¥p",
        "deceased_more": "1987 †¥tJoseph°Hawellek°(Breslau), Pfr.i.R., Bad°Soden¥-Salmünster¥p2009 †¥tNorbert°Schneider, Pfr.i.R., GR, Fulda¥p2011 †¥tAlbert°Seikel, Pfr.i.R., OStR°i.K.i.R., Msgr., GR, Freigericht¥-Horbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "26": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 12.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Josefmaria Escrivá de Balaguer¥0f, Pr, ¥fGed¥0f°(dD)¥be¥w¥fMs¥0f:°HR°/°MBErg²°23°/°Com°Ht°5°– ¥fML°V°ᴺ680¥0f¥l¥vL:¥0v¥tGen°2¥v,4b¥_9.15¥0v¥t¥fML°VIII¥0f°232¥l¥voder¥0v¥tRöm°8¥v,14¥_17¥0v¥t351¥l¥vAPs:¥0v¥tPs°2¥v,7¥_8.9+11.12¥0v°(R:°Ps°117¥v,1a¥0v)¥t235¥l¥vREv+Ev:¥0v°Lk°5¥v,1¥_11¥0v¥t88¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°317,33;°Gg°348,1;°Sg°527,8¥0w¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom H¥0f – ¥f1.°Vp°vom°folg°H¥0f°(StB°III°105)°–°¥f1.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute ist der ¥fGedenktag der hl. Brüder Johannes und Paulus¥0f, die zwischen 301 und 303 in Rom das Martyrium erlitten haben. Sie gehören zu den seit alten Zeiten verehrten Heiligen, die im Römischen Messkanon genannt werden, deren Gedenktag heute aber nicht mehr im ARK verzeichnet ist. Durch die ¥fWahl des Hg°I¥0f kann ihr Gedächtnis weiter geehrt werden.¥p",
        "deceased": "",
        "deceased_more": "1938 †¥tDr.°Hermann°Joseph°Büttner, Dr.°phil., Pfarrer°in°Maberzell¥p1945 †¥tGeorg°Reymann, Pfarrer°in°Erfurt¥-Hochheim¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "27": {
        "liturgy": "¥fFr¥0f¥t¥qhHeiligstes Herz Jesu¥0f, ¥fHochfest – Weltgebetstag°für°die°Heiligung°der°Priester¥0f¥lLektionar°zum°StB°I/5,°228 – Te°Deum – Kl.°Hore:°eig°Ant,°ErgPs¥pw¥t¥fMs eig¥0f (MB°257), Gl,°Cr, eig°Präf, FSS:°MB°552 – ¥wLL°und°Ev:°ML°C/III°246/ᴺ252¥0w¥l¥f2.°Vp°vom°H¥0f – ¥f2.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute ist der ¥f31. Weltgebetstag für die Heiligung der Priester¥0f. In den Fürbitten und/oder auch außerhalb der hl. Messe in eucharistischen Anbetungsstunden und/oder im Rosenkranzgebet möge in diesem Anliegen besonders gebetet werden. – Aktuelle Botschaft des Dikasteriums für den Klerus zum Welt-gebetstag unter www.clerus.org oder www.vatican.va › Die römische Kurie › Dikasterium für den Klerus.¥p¥sWegen des Hochfestes entfällt heute die Verpflichtung zum Freitagsopfer.¥p¥sDie ¥fGedenktage des hl. Heimerad¥0f, ¥fder hl. Hemma von Gurk¥0f und ¥fdes hl. Cyrill von Alexandrien¥0f entfallen in diesem Jahr.¥p",
        "deceased": "2014 †¥tHubert°Wald, Pfr.i.R., GR, Fulda¥p",
        "deceased_more": "2014 †¥tHubert°Wald, Pfr.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "28": {
        "liturgy": "¥fSa¥0f¥t¥fUnbeflecktes Herz Mariä¥0f, ¥fGed¥0f¥l¥fOff¥0f: StB III 783; Lektionar°zum°StB°I/5,°252a¥pw¥t¥fMs vom Ged¥0f (MB°679f), ¥feig°Ev¥0f°(ML°V°689f/ᴺ706f), MarPräf¥l¥kOder:¥0k¥p¥t¥fHl. Irenäus¥0f, Bi, Märt, Kl, ¥fGed¥0f ¥pr¥t¥fMs vom Hl¥0f – Off°vom°Ged,°Ben°eig¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fZum heutigen Gedenktag des Unbefleckten Herzens Mariä¥0f, der früher nichtgebotener Gedenktag war, ist in den älteren Ausgaben der liturgischen Bücher (MB und MBkl, ML°V, Schott-Messbuch für die Wochentage I, StB°III und Lektionare zum StB I/5 und II/5) die Bezeichnung „Gedenktag“ zu ergänzen.¥p¥s¥fWegen der Gleichrangigkeit¥0f der beiden gebotenen Gedenktage, die heute zusammentreffen, ¥fkann zwischen beiden frei gewählt werden.¥0f¥p¥sPapst Franziskus hat am 21. Januar 2022 den ¥fhl.°Irenäus von Lyon¥0f zum ¥fKirchenlehrer mit dem Titel „Doctor unitatis“ („Lehrer der Einheit“)¥0f erklärt.¥p",
        "deceased": "2023 †¥tFranz¥-Karl°Heil, Pfr.i.R., Fulda¥-Horas¥p",
        "deceased_more": "1929 †¥tOskar°Haseneier, Pfarrer°in°Kassel,°St.°Maria¥p1942 †¥tJohannes°Mergler,°Diözesanpriester,°gefallen°in°Rußland¥p2023 †¥tFranz¥-Karl°Heil, Pfr.i.R., Fulda¥-Horas¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "¥fHinweise:¥0f¥p¥sAus pastoralen Gründen können in der ¥fVigilmesse vom Hochfest der hll. Petrus und Paulus¥0f auch die Perikopen der Tagesmesse genommen werden.¥p¥sZum morgigen Hochfest passt das ¥fLied GL°873, bes. Str.°3¥0f (auch nach der Melodie GL°280 singbar).¥p¥sFür den Gesang des ¥fHymnus aus dem Stundenbuch als Gemeindelied¥0f steht unter www.direktorium.bistum-fulda.de ein Liedblatt zum Download bereit.¥p",
        "vig_liturgy": "r¥t¥kabends:¥0k ggf. ¥fVigilmesse vom hl. Petrus und hl.°Paulus¥0f, Gl,°Cr, eig°Präf wie morgen, n.B.°Hg°I, FSS:°MB°556°– ¥f1.°Vp°vom°folg°H¥0f°–°1.°Kp°vom°So¥p¥p"
      },
      "29": {
        "liturgy": "¥fSo¥0f¥a¥t¥qhHl. Petrus und hl. Paulus¥0f, App, ¥fHochfest¥0f¥lTe Deum – Kl.°Hore: eig Ant,°Ps°vom°So°der°1.°Woche¥pr¥t¥fMs eig¥0f, Gl,°Cr, eig°Präf, n.B.°Hg°I, FSS:°MB°556°– 2.°Vp°vom°H°–°2.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥sDie Liturgie zum 13. Sonntag im Jkr. entfällt in diesem Jahr.¥p¥sZum morgigen Hochfest passt das ¥fLied GL°873, bes. Str.°3¥0f (auch nach der Melodie GL°280 singbar).¥p¥sFür den Gesang des ¥fHymnus aus dem Stundenbuch als Gemeindelied¥0f steht unter www.direktorium.bistum-fulda.de ein Liedblatt zum Download bereit.¥p",
        "deceased": "2010 †¥tRichard°Fischer, Pfr.i.R., GR, Fulda¥p2016 †¥tKlaus°Dickhut, Pfr.i.R., Inzell¥p",
        "deceased_more": "1954 †¥tAnton°Jendrzejczyk°(Breslau),°Strafanstaltspfarrer°in°Weimar¥p1981 †¥tKarl°Böhmer,°Dozent, Prälat,°Ehrendomherr,°Erfurt¥p1992 †¥tJohannes°Rützel, Pfr.i.R., Msgr., Jossgrund¥p2010 †¥tRichard°Fischer, Pfr.i.R., GR, Fulda¥p2016 †¥tKlaus°Dickhut, Pfr.i.R., Inzell¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "30": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 13.°Woche°im°Jahreskreis¥lPsalt:°I.°Woche¥pr¥tOder ¥fdie ersten hll. Märtyrer der Stadt Rom¥0f, ¥fGed¥0f°– BuM°eig¥pw¥tOder ¥fhl. Otto¥0f, Bi, Glb, ¥fGed¥0f°(RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°308,10;°Gg°348,2;°Sg°525,1¥0w¥p",
        "notes": "",
        "deceased": "2004 †¥tHeinz°Famulla, Pfr.i.R., GR, Fulda¥-Lehnerz¥p",
        "deceased_more": "2004 †¥tHeinz°Famulla, Pfr.i.R., GR, Fulda¥-Lehnerz¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      }
    },
    "7": {
      "1": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 13.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°305,1;°Gg°349,4;°Sg°525,2¥0w¥p",
        "notes": "",
        "deceased": "2011 †¥tErnst°Watzlawik,°Diakon,°Hünfeld¥-Malges¥p2017 †¥tHans°Heinrich°Welschof,°Diakon,°Oberrodenbach¥p",
        "deceased_more": "1950 †¥tKarl°Wenzel, Pfr.i.R., Birkenfelde¥p1952 †¥tLeo°Schall°(Breslau),°Erzpriester, Pfr.i.R., GR, Dechant,°Horbach¥p1972 †¥tJohannes°Jordan°(Ermland), Pfarrer°in°Stolberg/Harz¥p1975 †¥tGeorg°Dirk, Pfr.i.R., GR, Heiligenstadt¥p1986 †¥tHubert°Wess, Pfr.i.R., GR, Wolfhagen¥p2011 †¥tErnst°Watzlawik,°Diakon,°Hünfeld¥-Malges¥p2017 †¥tHans°Heinrich°Welschof,°Diakon,°Oberrodenbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "2": {
        "liturgy": "¥fMi¥0f¥t¥qfMariä Heimsuchung¥0f, ¥fFest¥0f°(RK; GK: 31. Mai)¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pw¥t¥fMs eig¥0f, Gl, MarPräf II, FSS:°MB°554¥p",
        "notes": "",
        "deceased": "2001 †¥tP.°Capistran°Bavendiek°OFM,°Mühlen¥p",
        "deceased_more": "1944 †¥tAdam°Kalbhenn,°Benefiziat°i.R., Ershausen¥p2001 †¥tP.°Capistran°Bavendiek°OFM,°Mühlen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "3": {
        "liturgy": "¥fDo¥0f¥t¥qfHl. Thomas¥0f, Ap, ¥fFest¥0f – ¥fPriesterdonnerstag¥0f¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pr¥t¥fMs eig¥0f, Gl, ApPräf, n.B.°Hg°I, FSS:°MB°558¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Priesterdonnerstag (monatl. Gebetstag für geistliche Berufe):¥0f Die Votivmesse ist nicht erlaubt. – Fürbitte(n) um Priesterberufungen. – Thema: „Mein Herr und mein Gott!“ (Joh 20¥v,28¥0v). Intention: Für alle, die in ihrer Berufung von Zweifeln geplagt werden.¥p",
        "deceased": "",
        "deceased_more": "1934 †¥tFranz°Dunkelberg, Pfarrer°in°Kirchworbis¥p1969 †¥tJosef°Plescher°(Leitmeritz), Pfr.i.R., Leinefelde/Eichsfeld¥p1986 †¥tDr.°Adalbert°Hosenfeld, Pfr.i.R., Msgr., GR, Brehme¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "4": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 13.°Woche°im°Jahreskreis – ¥fHerz¥-Jesu¥-Freitag¥0f¥pw¥tOder ¥fhl. Ulrich¥0f, Bi, ¥fGed¥0f°(RK)¥pw¥tOder ¥fhl. Elisabeth¥0f, Königin von Portugal, ¥fGed¥0f¥pw¥tOder ¥fVotivmesse vom heiligsten Herzen Jesu¥0f¥l¥w(MB°1100f/²1132f oder 257ff), Herz¥-Jesu¥-Präf,¥lL°und°Ev°vom°Tag oder aus°den°AuswL¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°284f¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum°Herz¥-Jesu¥-Fr:¥0f Die Votivmesse ist erlaubt.¥p",
        "deceased": "",
        "deceased_more": "1957 †¥tDr.°Eduard°Busse,°StR°i.R., Heiligenstadt¥p1973 †¥tHeinrich°Weidemann, GR, Pfarrer°in°Fulda,°Hl.°Geist¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "5": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 13.°Woche°im°Jahreskreis – ¥fHerz¥-Mariä¥-Samstag¥0f¥pw¥tOder ¥fhl. Antonius Maria Zaccaria¥0f, Pr, Ordgr, ¥fGed¥0f¥pw¥tOder ¥fVotivmesse vom Unbefleckten Herzen Mariä¥0f, ¥wMBm°und°MLm°Nr.°28,°eig°Präf¥0w¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°162/²160¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Herz¥-Mariä¥-Sa:¥0f Die Votivmesse ist erlaubt.¥p",
        "deceased": "2009 †¥tKonrad°Graf, Pfr.i.R., GR, Wadern¥-Nunkirchen¥p2014 †¥tLudwig°Vogel,°Stadtpfr.i.R., Msgr., Ehrendomkapitular, Petersberg¥p2020 †¥tPeter°A.°Macht, Pfr.i.R., GR, Amöneburg¥-Mardorf¥p",
        "deceased_more": "2009 †¥tKonrad°Graf, Pfr.i.R., GR, Wadern¥-Nunkirchen¥p2014 †¥tLudwig°Vogel,°Stadtpfr.i.R., Msgr., Ehrendomkapitular, Petersberg¥p2020 †¥tPeter°A.°Macht, Pfr.i.R., GR, Amöneburg¥-Mardorf¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "6": {
        "liturgy": "¥fSo¥0f¥a¥t¥f14. Sonntag im Jahreskreis¥0f¥lPsalt:°II.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fLektionar zum StB I/6¥0f (14.–20. Woche i. Jkr.)¥rLektStB  I/6¥0r¥p¥p¥fHinweis:¥0f ¥sDer ¥fGed der hl. Maria Goretti¥0f entfällt in diesem Jahr.¥p",
        "deceased": "1995 †¥tP.°Franz°Senn°OFMCap,°Bad°Mergentheim¥p",
        "deceased_more": "1945 †¥tErnst°Wolf, Pfarrer°in°Margretenhaun¥p1955 †¥tJoseph°Heller,°Kpl.i.R., Flieden¥p1995 †¥tP.°Franz°Senn°OFMCap,°Bad°Mergentheim¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "7": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 14.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Willibald¥0f, Bi, Glb, und ¥fhl.°Wunibald¥0f, Abt,°Glb, ¥fGed¥0f (RK/FD)¥bf¥wML°V°709/ᴺ725°oder:¥l¥vL:¥0v¥t2°Kor°4¥v,1¥_2.5¥_7¥0v¥t¥fML°VI¥0f°682/ᴺ684¥l¥vAPs:¥0v¥tPs°96¥v,1¥_2.3+7.8+10¥0v°(R:°vgl.°¥v3a¥0v)¥t683/ᴺ685¥l¥vREv+Ev:¥0v°Mt°4¥v,18¥_22¥0v¥t766f/ᴺ769¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°227f¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1947 †¥tFranz°Otto, Pfr.i.R., Heiligenstadt¥p1956 †¥tKarl°Kramer, Pfr.i.R., Hüpstedt¥p1989 †¥tJosef°Kempf, Pfr.i.R., Lörrach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "8": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 14.°Woche°im°Jahreskreis¥pr¥tOder ¥fhll. Kilian¥0f, Bi, ¥fund°Gefährten¥0f, Glbb, Märtt, ¥fGed¥0f°(RK/FD)°– ¥w¥fMs¥0f:°MB°717°– ML°V°711/ᴺ727¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°314,25;°Gg+Sg°297f¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1954 †¥tAndreas°Kaufmann, Pfarrer°in°Kreuzebra¥p1968 †¥tP.°Maurus°Hackmann°OFMCap, Pfarrer°in°Bebra¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "9": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 14.°Woche°im°Jahreskreis¥pr¥tOder ¥fhll. Augustinus Zhao Rong¥0f, Pr, ¥fund°Gefährten¥0f, Märtt, ¥fGed¥0f¥be¥w¥fMs¥0f: HR°/°MBkl°1240°/°MBErg²°9°/°Com°Märt°– ¥fFürbitten°für°China¥0f°– ¥fML°V°ᴺ730¥0f¥l¥vL:¥0v¥t1°Joh°5¥v,1¥_5¥0v¥tML°V°760¥l¥vAPs:¥0v¥tPs°126¥v,1¥_2b.2c¥_3.4¥_5.6¥0v°(R:°¥v5¥0v)¥t548¥l¥vREv:¥0v¥t2°Kor°1¥v,3b¥_4a¥0v¥t836¥v,3¥0v¥l¥vEv:¥0v¥tJoh°12¥v,24¥_26¥0v¥t708¥0w¥pr¥tOder ¥kim Dom zu Fulda:¥0k¥l¥fÜbertragung des hl. Bonifatius¥0f, ¥fGed¥0f°(FD)¥bf¥w¥vL:¥0v¥t1°Thess°2¥v,2b¥_8¥0v¥tML°V°618/ᴺ629¥l¥vAPs:¥0v¥tPs°96¥v,1¥_2.3+7.8+10¥0v°(R:°vgl.°¥v3a¥0v)¥t619/ᴺ630¥l¥vREv:¥0v¥tMt°28¥v,19a.20b¥0v¥t639/ᴺ655¥l¥vEv:¥0v¥tJoh°15¥v,14¥_16a.18¥_20¥0v¥t631/ᴺ646¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°310,17;°Gg°348,3;°Sg°527,8¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1949 †¥tOtto°Henkel, Pfarrer°in°Bieber¥p1958 †¥tHermann°Joseph°Fiege,°Kaplan°in°Eschwege¥p1959 †¥tAmbrosius°Kling, Pfr.i.R., Dietges¥p1961 †¥tNikolaus°Demme, Pfarrer°in°Niederorschel¥p1968 †¥tAugustin°Ackermann, Pfr.i.R., Hünfeld¥p1968 †¥tP.°Oswald°Krause°SDB,°Pfarrkurat°in°Hess.°Lichtenau¥p1972 †¥tErnst°Flessel°(Olmütz), GR, Pfarrer°in°Richelsdorf¥p1982 †¥tJohannes°Platte, Pfarrer°in°Gelnhausen¥-Höchst¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "10": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 14.°Woche°im°Jahreskreis¥pr¥tOder ¥fhl. Knud¥0f, König von Dänemark, Märt, ¥fhl.°Erich¥0f,°König°von°Schweden,°Märt, und ¥fhl.°Olaf¥0f,°König°von°Norwegen, ¥fGed¥0f°(RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°307,7;°Gg+Sg°219/²217f¥0w¥p",
        "notes": "",
        "deceased": "1998 †¥tRoland°Fischer,°Msgr., Pfarrer°in°Hilders¥-Eckweisbach¥p",
        "deceased_more": "1921 †¥tFranz°Joseph°Rudolph, Pfarrer°in°Mackenzell¥p1957 †¥tHugo°Nagels, GR, Pfarrer°in°Erfurt,°St.°Nicolai¥p1979 †¥tPius°Burkardt,°Konviktsdirektor°i.R., Msgr., GR, Fulda¥p1984 †¥tOtto°Buchardt, Pfr.i.R., GR, Heiligenstadt¥p1993 †¥tFerdinand°Dallwig, Pfr.i.R., Msgr., GR, Dietershausen¥p1998 †¥tRoland°Fischer,°Msgr., Pfarrer°in°Hilders¥-Eckweisbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "11": {
        "liturgy": "¥fFr¥0f¥t¥qfHl. Benedikt von Nursia¥0f, Vater des abendländischen Mönchtums, Patron Europas, ¥fFest¥0f°(GK/RK)°– Off: Hy zur Lh wie zur Vp und BuM eig, sonst Com – Te°Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pw¥t¥fMs eig¥0f (MB°719 oder MBErg¹°9), Gl, ¥fFürbitten für Europa¥0f, Präf Ord oder Hll, FSS:°MB°560¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fZum heutigen Fest des hl. Benedikt¥0f ist in den älteren Ausgaben der liturgischen Bücher (MB und MBkl, ML°V, Schott-Messbuch für die Wochentage II, StB°II und Lektionare zum StB I/6 und II/6) ggf. die Bezeichnung „Patron Europas“ zu ergänzen und der Rang „Gedenktag“ durch „Fest“ zu ersetzen sowie in den Messbüchern vor dem Tagesgebet „Gloria“ und in den Lektionaren zum StB nach dem Responsorium zur 2.°Lesung „Te°Deum“ einzufügen.¥p¥sZum heutigen Fest des hl. Benedikt kann der ¥fHymnus zur Vesper¥0f (StB°III°828) nach den Melodien der Lieder GL°81 oder GL°484 als Gemeindelied gesungen werden (Liedblatt zum Download auf www.direktorium.bistum-fulda.de).¥p",
        "deceased": "",
        "deceased_more": "1934 †¥tDr.°Karl°Kirchberg, Pfarrer°in°Büttstedt¥p1981 †¥tDr.°Stephan°Bartylla,°StR°i.K.i.R., Amöneburg¥p1982 †¥tJosef°Krafczyk°(Breslau), Pfarrer°in°Stadtilm¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "12": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 14.°Woche°im°Jahreskreis¥pw¥tOder ¥fMs von den hll. Louis und Marie Zelie¥0f (Ludwig und Cäcilia) ¥fMartin¥0f, Eheleute, Eltern°der°hl.°Theresia von Lisieux¥be¥w¥fMs¥0f: Com MFr°5, Präf°von°den°Hll¥l¥vL:¥0v¥tKol°3¥v,12¥_17¥0v¥tML°V°719/ᴺ736¥l¥vAPs:¥0v¥tPs°103¥v,1¥_2.8+11.17¥_18a¥0v°(R:°¥v17a¥0v)¥tvgl.°102/ᴺ102¥l¥vREv:¥0v¥tJoh°15¥v,9b.5b¥0v¥t720/ᴺ737¥l¥vEv:¥0v¥tJoh°15¥v,9¥_17¥0v¥t724/ᴺ741¥0w¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°316,30;°Gg°349,5;°Sg°527,9¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1942 †¥tGustav°Vogt, Pfarrer°in°Deuna, gestorben°in°Dachau¥p1992 †¥tAdolf°Fleischmann, Pfr.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "13": {
        "liturgy": "¥fSo¥0f¥a¥t¥f15. Sonntag im Jahreskreis¥0f¥lPsalt:°III.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweis:¥0f ¥sDer ¥fGedenktag des hl. Heinrich II. und der hl. Kunigunde¥0f entfällt in diesem Jahr.¥p",
        "deceased": "1995 †¥tWolfgang°Trabandt°(Berlin), Pfr.i.R., Berlin¥p",
        "deceased_more": "1964 †¥tKarl°Troche, Pfarrer°in°Kleinsassen¥p1995 †¥tWolfgang°Trabandt°(Berlin), Pfr.i.R., Berlin¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "14": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 15.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Kamillus von Lellis¥0f, Pr, Ordgr, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°227f¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "15": {
        "liturgy": "¥fDi¥0f¥t¥fHl. Bonaventura¥0f, Ord, Bi, Kl, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "2021 †¥tDr.°Elmar°Fastenrath°(Köln), Prof.°em., Dr.°theol.°habil., Msgr., Leverkusen¥p",
        "deceased_more": "1937 †¥tWilhelm°Müller, Pfarrer°in°Frankfurt¥-Fechenheim¥p2021 †¥tDr.°Elmar°Fastenrath°(Köln), Prof.°em., Dr.°theol.°habil., Msgr., Leverkusen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "16": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 15.°Woche°im°Jahreskreis¥pw¥tOder ¥fUnsere Liebe Frau auf dem Berge Karmel¥0f, ¥fGed¥0f – BuM°eig¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°286¥0w¥p",
        "notes": "",
        "deceased": "2019 †¥tHeribert°Bräscher, Pfr.i.R., GR, Neuhof¥p",
        "deceased_more": "1921 †¥tAugustin°Krah, GR, Dechant, Pfarrer°in°Amöneburg¥p1931 †¥tKajetan°Bott, Dechant, Pfarrer°in°Johannesberg¥p1959 †¥tCanisius°Gellings,°Pfarrkurat°in°Ferna/Eichsfeld¥p1974 †¥tNikolaus°Witzel, Pfr.i.R., GR, Soisdorf¥p2019 †¥tHeribert°Bräscher, Pfr.i.R., GR, Neuhof¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "17": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 15.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°316,30;°Gg°350,9;°Sg°529,14¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1958 †¥tDr.°Ludwig°Betz, Dr.°phil., Pfarrer°in°Eckweisbach¥p1987 †¥tJosef°Schydlo, GR, Pfarrer°in°Fulda¥-Edelzell¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "18": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 15.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg+Gg°247;°Sg°290¥0w¥p",
        "notes": "",
        "deceased": "2018 †¥tUlrich°Schäfer, Pfarrer°in°Somborn¥p",
        "deceased_more": "1986 †¥tHeinrich°Siebert, Pfr.i.R., Fulda¥p1992 †¥tP.°Emmerich°Reith°OFM,°Sigmaringen¥p1994 †¥tFriedrich Driemer°(Königgrätz), Pfr.i.R., GR, Bad°Langensalza¥p2018 †¥tUlrich°Schäfer, Pfarrer°in°Somborn¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "19": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 15.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°288f¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1943 †¥tDr.°Joseph°Lammeyer, Prälat,°Universitätsprofessor°in°Bonn¥p1965 †¥tP.°Hermann°Vell°CSsR, Pfarrer°in°Jena¥-Land¥p1984 †¥tJosef°Wistuba°(Breslau), Pfr.i.R., Künzell¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "20": {
        "liturgy": "¥fSo¥0f¥a¥t¥f16. Sonntag im Jahreskreis¥0f¥lPsalt:°IV.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fHeute wird hingewiesen auf den Portiunkulaablass¥0f, einen vollkommenen Ablass (s.°o.°Kap.°I.C.10.), ¥fder am 2. August oder am vorhergehenden oder am darauffolgenden Sonntag, jeweils vom Mittag des Vortages an, gewonnen werden kann¥0f. Er kann nur gewonnen werden in allen Pfarrkirchen und Pfarrkuratiekirchen sowie in den Kirchen und Kapellen, die dafür ein besonderes Indult besitzen, und in den Ordenskirchen der franziskanischen Ordensfamilien. – ¥p¥fZur Gewinnung des Ablasses gehören:¥0f ¥pa) ¥fdie allgemeinen Bedingungen¥0f: Beichte mit entschlossener Abkehr von jeder Sünde, Kommunionempfang und Gebet nach der Meinung des Hl. Vaters (z.B. Vaterunser und Glaubensbekenntnis oder ein anderes Gebet nach freier Wahl);¥pb) ¥fals besondere Bedingung¥0f: ein Kirchenbesuch mit Gebet (Vaterunser und Glaubensbekenntnis). ¥pDieser Ablass kann auch den Verstorbenen zugewendet werden. Er kann aber nur einmal an diesem Ablasstag gewonnen werden.¥p¥sDie ¥fGedenktage der hl. Margareta¥0f und ¥fdes hl. Apollinaris¥0f entfallen in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1926 †¥tDDr.°Engelbert°Koch, Prof., Dr.°theol.°et°phil., Regens,°Dompräbendat,°Fulda¥p1957 †¥tKarl°Wachtel, Pfarrer°in°Geismar¥p1961 †¥tOtto°Breitenstein°(Paderborn),°Schulrat°i.R., Heiligenstadt¥p1967 †¥tWilhelm°Quell, Pfr.i.R., Hilders¥p1969 †¥tPhilipp°Fricke, Pfr.i.R., Archivar°in°Heiligenstadt¥p1970 †¥tAdolf°Fischer, GR, Pfarrer°in°Kleinbartloff/Eichsfeld¥p1979 †¥tAloys°Herget°(Gurk-Klagenfurt), Pfr.i.R., Lahrbach¥p1988 †¥tKarl°Kiowski°(Breslau), Pfr.i.R., Königsee/Thür.°Wald¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "21": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 16.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Laurentius von Brindisi¥0f, Ordpr, Kl, ¥fGed¥0f°(GK/RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°313,24;°Gg°292;°Sg°293¥0w¥p",
        "notes": "",
        "deceased": "2022 †¥tGerhard°Willeke, Pfr.i.R., Fulda¥-Horas¥p",
        "deceased_more": "1990 †¥tP. Dr.°Kurt°Michel°SJ, Dr.°phil., Kaplan°in°Marburg¥p1991 †¥tErich°Johne, Pfr.i.R., Weißensee°b.°Sömmerda¥p2022 †¥tGerhard°Willeke, Pfr.i.R., Fulda¥-Horas¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "22": {
        "liturgy": "¥fDi¥0f¥t¥qfHl. Maria Magdalena¥0f, ¥fFest¥0f¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pw¥t¥fMs eig¥0f, Gl, ¥feig°Präf¥0f, FSS:°MB°560°– ¥wᴰ HR⁴ᶠ¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sMit Dekret der KGS vom 3. Juni 2016 (Prot. N. 257/16) hat Papst Franziskus ¥fden bisherigen gebotenen Gedenktag der hl. Maria Magdalena zum Fest erhoben und damit das liturgische Gedächtnis dieser Heiligen dem liturgischen Rang der Apostelfeste¥0f (ausgenommen das Hochfest Peter und Paul) ¥fgleichgestellt aufgrund ihrer Eigenschaft als „Apostelin der Apostel“¥0f. In den liturgischen Büchern (MB°und MBkl, ML°V, Schott-Messbuch für die Wochentage II, StB°III und Lektionare zum StB I/6 und II/6) ist daher zur Feier des Festes der hl. Maria Magdalena ¥fdie Bezeichnung „Apostelin der Apostel“ zu ergänzen und der Rang „Gedenktag“ durch „Fest“ zu ersetzen¥0f, in den Messbüchern ¥f„Gloria“¥0f und in den Lektionaren zum StB nach dem Responsorium zur 2. Lesung ¥f„Te°Deum“¥0f einzufügen.¥p",
        "deceased": "",
        "deceased_more": "1931 †¥tJoseph°Erb, Pfarrer°in°Großkrotzenburg¥p1950 †¥tChristian°Kauth, Pfarrer°in°Poppenhausen¥p1963 †¥tKonrad°Wieber, Pfarrer°in°Oberndorf/Krs.°Gelnhausen¥p1991 †¥tWilhelm°Zimmerling, Pfr.i.R., GR, Fritzlar¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "23": {
        "liturgy": "¥fMi¥0f¥t¥qfHl. Birgitta von Schweden¥0f, Ordgr, Patronin Europas, ¥fFest¥0f (GK/RK)¥lOff: Or°eig, sonst°Com°Ord (StB°III°1244ff°bzw.°1221ff) – ¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pw¥t¥fMs eig¥0f (Com MFr 7+8 oder 11+12), Gl, ¥fFürbitten für Europa¥0f, Präf Ord oder Hll, FSS:°MB°560¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fZum heutigen Fest der hl. Birgitta von Schweden¥0f ist in den älteren Ausgaben der liturgischen Bücher (MB und MBkl, ML°V, Schott-Messbuch für die Wochentage II, StB°II und Lektionare zum StB I/6 und II/6) ggf. die Bezeichnung „Patronin Europas“ zu ergänzen und der Rang „Gedenktag“ durch „Fest“ zu ersetzen sowie in den Messbüchern vor dem Tagesgebet „Gloria“ und in den Lektionaren zum StB nach dem Responsorium zur 2.°Lesung „Te°Deum“ einzufügen.¥p¥sHeute ist der 25. Todestag von Erzbischof Johannes Dyba.¥p",
        "deceased": "2000 †¥t¥fDDr.°Johannes°Dyba¥0f, Dr.°iur.°utr., Erzbischof, Bischof°von°Fulda°(1983¥_2000)¥p2007 †¥tHubert°Dudek°(Breslau/Fulda), Pfr.i.R., OStR°i.R., Alzenau¥-Hörstein¥p2023 †¥tHerbert°Schrimpf, Pfarrer°in°Hünfeld¥-Michelsrombach¥p",
        "deceased_more": "1964 †¥tKarl°Dietz,°Rektor°i.R., Amöneburg¥p1973 †¥tPaul°Marx°(Breslau),°Msgr., GR, Kanzleidirektor°in°Fulda¥p2000 †¥t¥fDDr.°Johannes°Dyba¥0f, Dr.°iur.°utr., Erzbischof, Bischof°von°Fulda°(1983¥_2000)¥p2007 †¥tHubert°Dudek°(Breslau/Fulda), Pfr.i.R., OStR°i.R., Alzenau¥-Hörstein¥p2023 †¥tHerbert°Schrimpf, Pfarrer°in°Hünfeld¥-Michelsrombach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "24": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 16.°Woche°im°Jahreskreis¥pr¥tOder ¥fhl. Christophorus¥0f, Märt, ¥fGed¥0f°(RK)¥pw¥tOder ¥fhl. Scharbel (Josef) Mahluf¥0f, Ordpr, ¥fGed¥0f¥be¥w¥fMs¥0f: HR°/°MBkl°1241°/°MBErg²°10°/°Com°MFr°7+8°– ¥fML°V°ᴺ765¥0f¥l¥vL:¥0v¥tSir°3¥v,17¥_25°(19¥_26)¥0v¥tML°V°567¥l¥vAPs:¥0v¥tPs°15¥v,2¥_3.4.5¥0v°(R:°¥v1b¥0v)¥t579¥l¥vREv+Ev:¥0v°Mt°19¥v,27¥_29¥0v¥t563f¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°313,22;°Gg°348,2;°Sg°528,10¥0w¥p",
        "notes": "",
        "deceased": "1996 †¥tErnst°Göller, Pfr.i.R., Msgr., GR, Fulda¥p",
        "deceased_more": "1996 †¥tErnst°Göller, Pfr.i.R., Msgr., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "25": {
        "liturgy": "¥fFr¥0f¥t¥qfHl. Jakobus¥0f, Ap, ¥fFest¥0f¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pr¥t¥fMs eig¥0f, Gl, ApPräf, n.B.°Hg°I, FSS:°MB°558¥p",
        "notes": "",
        "deceased": "2010 †¥tHeribert°Sauerbier, Pfr.i.R., GR, Herleshausen¥p",
        "deceased_more": "1937 †¥tAugust°Hornemann, Pfarrer°in°Hildebrandshausen¥p1963 †¥tP.°Ägidius°Keuchen°SJ,°Rektor,°Hospital°z.°Hl.°Geist°in°Heiligenstadt¥p1971 †¥tWilli°Metzler, GR, Pfarrer°in°Dingelstädt¥p2010 †¥tHeribert°Sauerbier, Pfr.i.R., GR, Herleshausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "26": {
        "liturgy": "¥fSa¥0f¥t¥fHl. Joachim und hl. Anna¥0f, Eltern°der°Gottesmutter°Maria, ¥fGed¥0f ¥pw¥t¥fMs von den Hll¥0f – Off°vom°Ged,°LuV eig¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥sZum Gedenktag der hll. Joachim und Anna vgl. den Hinweis zum „Welttag der Senioren“ vor dem 27.°Juli.¥p",
        "deceased": "",
        "deceased_more": "1953 †¥tStanislaus°Janowski°(Breslau),°Erzpriester°i.R., Gotha¥p1974 †¥tJoseph°Rimpler°(Breslau), Pfarrer°in°Bad°Sachsa¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "27": {
        "liturgy": "¥fSo¥0f¥a¥t¥f17. Sonntag im Jahreskreis¥0f – ¥fWelttag°der°Großeltern°und°Senioren¥0f¥lPsalt:°I.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute wird zum 5. Mal der ¥f„Welttag der Großeltern und Senioren“¥0f begangen. Papst Franziskus hat ihn am 31. Januar 2021 ausgerufen und – in zeitliche Nähe zum Gedenktag der hll. Joachim und Anna, der Großeltern Jesu – auf den 4. Sonntag im Juli gelegt. ¥rIn seiner Angelus-Ansprache am 31. Januar 2021 sagte er:  „Der Heilige Geist weckt auch heute noch in den alten Menschen Gedanken und Worte der Weisheit: Ihre Stimme ist kostbar, weil sie das Lob Gottes singt und die Wurzeln der Völker bewahrt. Sie erinnern uns daran, dass das Alter ein Geschenk ist und dass die Großeltern das Bindeglied zwischen den Generationen sind, um die Lebens- und Glaubenserfahrung an die Jugend weiterzugeben. ... Es ist wichtig, dass sich die Großeltern mit den Enkeln treffen und die Enkel mit den Großeltern, denn – wie der Prophet Joël sagt – die Großeltern werden vor den Enkeln träumen, Illusionen [große Wünsche] haben, und die jungen Leute, die von ihren Großeltern gestärkt werden, sie werden vorwärts gehen, sie werden prophezeien.“ – ¥0rZur Feier des Welttages mögen das jährliche Leitwort und veröffentlichte Materialien (Vatikan, DBK) berücksichtigt werden.¥p¥sAm heutigen Sonntag kann vom Mittag des Vortages an der ¥fPortiunkulaablass¥0f gewonnen werden, auch am 2. August oder dem darauffolgenden Sonntag vom Mittag des Vortages an (vgl. Hinweis vor dem 20.°Juli).¥p",
        "deceased": "",
        "deceased_more": "1940 †¥tLudwig°Roth,°Kuratus°i.R., Dietges¥p1949 †¥tAdolf°Malkmus, Pfarrer°in°Volkmarsen¥p1956 †¥tArthur°Ober°(Breslau), Pfarrer°in°Gotha,°Christ¥-König¥p1983 †¥tAlois°Jungbluth°(Danzig), Pfr.i.R., Wegberg¥p1991 †¥tRichard°Barthelmes, Pfr.i.R., GR, Steinbach/Rhön¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "28": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 17.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°1039/²1061;°Gg°274;°Sg°277¥0w¥p¥p¥t¥kNur in der Stadt Fulda:¥0k¥pr¥t¥kabends:¥0k ggf.°¥fVorabendmesse°zum°H¥0f – ¥l¥f1.°Vp°vom°folg°H¥0f°(FD,°Com°Märtt, eig°Or) – ¥f1.°Kp°vom°So¥0f¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1967 †¥tJosef°Knobloch, Pfr.i.R., Andernach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "29": {
        "liturgy": "¥fDi¥0f¥t¥kA. Außerhalb der Stadt Fulda:¥0k¥pw¥t¥fhll. Marta, Maria und Lazarus von Betanien¥0f, ¥fGed¥0f°– BuM°eig¥be¥w¥fMs¥0f: HR⁵°/°Com°MFr°1+4+5, Präf°Hll°I°oder°II, Eröffnungs- und Kommunionvers wie bisher am 29.°Juli°– ¥fL°und°Ev¥0f wie bisher am 29.°Juli (ML°V°749/ᴺ773), ¥feig°Ev¥0f¥0w¥pr¥tOder ¥fhll. Simplicius, Faustinus und Beatrix¥0f, Märtt, ¥fGed¥0f°(FD)¥bf¥w¥fMs¥0f: FDM 35ff – ¥fL°und°Ev¥0f:°FDL°18ff¥0w¥pw/r¥t¥fOff und Ms¥0f von einem der Ged¥p¥l¥kB. In allen Kirchen und Gemeinden der°Stadt°Fulda:¥0k¥l¥fHochfest der hll. Simplicius, Faustinus und Beatrix¥0f, Märtt, Stadtpatrone (FD)¥l¥fOff¥0f Com Märtt, eig 2. L, Resp und Or, Te°Deum – Kl.°Hore:°Ant°aus°dem°Com,°ErgPs¥pr        ᴰ¥t¥fMs eig¥0f ¥w(FDM°35¥_37,°FDL°18¥_21)¥0w, Gl,°Cr, ¥fFürbitten für Fulda¥0f, Präf°Hll°oder°Märtt, FSS:°MB°560 – ¥f2.°Vp°vom°H¥0f°–°¥f2.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥sIn allen Kirchen und Gemeinden der Stadt Fulda wird heute das Hochfest der hll. Stadtpatrone Simplicius, Faustinus und Beatrix gefeiert. Besondere Fürbitten in den Hochfestmessen der Gemeinden und Kirchen Fuldas für alle, die in Fulda leben, arbeiten und sich aufhalten.¥p¥sNutzer der Stundenbuch-App des DLI finden die vollständigen ¥fTexte für das Stundengebet zur heutigen Eigenfeier des Diözesankalenders als Hochfest in der Datei FD-Stundengebet.PDF¥0f (s.°o.°S.°87, Nr.°3).¥p¥sHeute kann außerhalb Fuldas der neue ¥ferweiterte Gedenktag der hll. Marta, Maria und Lazarus¥0f gefeiert werden. Er wurde von Papst Franziskus am 26. Januar 2021 in den Römischen Generalkalender eingefügt. „Im Haus von Bethanien erlebte der Herr Jesus den Familiensinn und die Freundschaft von Marta, Maria und Lazarus; deshalb heißt es im Johannesevangelium, dass er sie liebte. Marta nahm ihn in Gastfreundschaft großzügig auf, Maria hörte aufmerksam auf sein Wort, und Lazarus stieg auf den Befehl dessen, der den Tod erniedrigt hatte, sogleich aus dem Grab. Die Unsicherheit, die in der Überlieferung der lateinischen Kirche bezüglich der Identität Marias – der Magdalena, der Christus nach seiner Auferstehung erschien, der Schwester der Marta und der Sünderin, deren Sünden der Herr vergeben hatte – bestand und die den Ausschlag dafür gab, dass allein Marta am 29. Juli im Römischen Kalender verehrt wird, ist in neueren Studien und Zeiten gelöst worden, wie das erneuerte Römische Martyrologium bezeugt, das an diesem Tag auch Marias und Lazarus’ gedenkt. Auch in einigen partikularen Kalendern werden die drei Geschwister an diesem Tag gefeiert. In Anbetracht des wichtigen Zeugnisses für das Evangelium, das sie gaben, indem sie den Herrn Jesus in ihrem Haus aufnahmen, ihm aufmerksam zuhörten und glaubten, dass er die Auferstehung und das Leben ist, hat Papst Franziskus deshalb auf Vorschlag dieses Dikasteriums (Kongregation für den Gottesdienst und die Sakramentenordnung) angeordnet, dass der Gedenktag der Heiligen Marta, Maria und Lazarus am 29. Juli in den Römischen Generalkalender aufgenommen wird.“¥p",
        "deceased": "",
        "deceased_more": "1954 †¥tHeinrich°Herrmann°(Leitmeritz),°Religionslehrer°i.R., Konsistorialrat,°Erfurt¥p1974 †¥tDr.°Walter°Loos°(Leitmeritz), Pfr.i.R., Walschleben¥p1986 †¥tNikolaus°Bauer, Pfarrer°in°Wächtersbach¥p1991 †¥tDr.°Benno°Löbmann°(Meißen), Prof.°em., Dr.°iur.°can., Prälat,°Augsburg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "30": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 17.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Petrus Chrysologus¥0f, Bi, Kl, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°284f¥0w¥p",
        "notes": "",
        "deceased": "1995 †¥tJosef°Schaub, Pfr.i.R., GR, Münster°(Hessen)¥p",
        "deceased_more": "1931 †¥tAlfred°Rathmann, Pfarrer°in°Melchendorf°b.°Erfurt¥p1966 †¥tPaul°Brandstetter, Dechant, Pfarrer°in°Kassel,°St.°Familia¥p1970 †¥tJakob°Wald, Pfr.i.R., GR, Bad°Soden¥-Salmünster¥p1972 †¥tAnton°Meilinger, Pfr.i.R., GR, Zella/Rhön¥p1986 †¥tDr.°Konrad°Gärtner, Dr.°phil., Pfr.i.R., Fulda¥p1994 †¥tAdalbert°Nix, Pfr.i.R., GR, Hilders¥p1995 †¥tJosef°Schaub, Pfr.i.R., GR, Münster°(Hessen)¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "31": {
        "liturgy": "¥fDo¥0f¥t¥fHl. Ignatius von Loyola¥0f, Pr, Ordgr, ¥fGed¥0f – ¥fPriesterdonnerstag¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged,°BuM°eig¥pw¥tOder ggf.°¥fMs um Priesterberufe¥0f ¥w(MB°1035f/²1057),¥lL°und°Ev vom°Tag oder aus°den°AuswL¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Priesterdonnerstag (monatl. Gebetstag für geistliche Berufe):¥0f Die Votivmesse ist nur bedingt erlaubt (s.°o.°Kap.°III.D.3.). – Fürbitte(n) um Priesterberufungen. – Thema: „Alles zur größeren Ehre Gottes“ (1 Kor 10¥v,31¥0v). Intention: Für alle jungen Menschen in den Priesterseminarien und Noviziaten.¥p",
        "deceased": "",
        "deceased_more": "1951 †¥tMartin°Böhne,°Pfarrkurat°in°Müs¥p1952 †¥tDr.°Aloys°Kirchner,°Präfekt°des°Bischöfl.°Knabensminars°in°Heiligenstadt¥p1977 †¥tKarl°Kirchberg, Pfr.i.R., GR, Dingelstädt¥p1991 †¥tP.°Wilhelm°Michel°OMI,°Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      }
    },
    "8": {
      "1": {
        "liturgy": "¥fFr¥0f¥t¥fHl. Alfons Maria von Liguori¥0f, Bi, Ordgr, Kl, ¥fGed¥0f – ¥fHerz¥-Jesu¥-Freitag¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged¥pw¥tOder ggf.°¥fVotivmesse vom hl. Herzen Jesu¥0f¥l¥w(MB°1100f/²1132f oder 257ff), Herz¥-Jesu¥-Präf,¥lL°und°Ev°vom°Tag oder aus°den°AuswL¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum°Herz¥-Jesu¥-Fr:¥0f Die Votivmesse ist nur bedingt erlaubt (s.°o.°Kap.°III.D.3.).¥p",
        "deceased": "2016 †¥tWalter°Götz, Pfr.i.R., GR, Penzberg¥p",
        "deceased_more": "1957 †¥tPeter°Ernst, Pfr.i.R., Fulda¥p1961 †¥tAmand°Simon, Pfr.i.R., Neuses¥p1962 †¥tWilhelm°Coerdt°(Paderborn),°StR°i.R., GR, Fiddemühle°üb.°Kirchhain¥p1980 †¥tAlbrecht°Hellbach, Pfr.i.R., Körle¥p2016 †¥tWalter°Götz, Pfr.i.R., GR, Penzberg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "2": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 17.°Woche°im°Jahreskreis – ¥fHerz¥-Mariä¥-Samstag¥0f¥pw¥tOder ¥fhl. Eusebius¥0f, Bi, ¥fGed¥0f ¥pw¥tOder ¥fhl. Petrus Julianus Eymard¥0f, Pr, Ordgr, ¥fGed¥0f¥be¥w¥fMs¥0f: HR°/°MBkl°1242°/°MBErg²°11°/ Com°Ord°oder°Ht°– ¥fML°V°ᴺ787¥0f¥l¥vL:¥0v¥tApg°4¥v,32¥_35¥0v¥tML°V°871¥l¥vAPs:¥0v¥tPs°34¥v,2¥_‍3.4¥_‍5.6¥_7.8¥_9.10¥_11¥0v°(R:°vgl.°¥v2a¥0v°od.°¥v9a¥0v)¥t563¥l¥vREv+Ev:¥0v°Joh°15¥v,1¥_8¥0v¥t565f¥0w¥pw¥tOder ¥fVotivmesse vom Unbefleckten Herzen Mariä¥0f, ¥wMBm°und°MLm°Nr.°28,°eig°Präf¥0w¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°313,22;°Gg°350,9;°Sg°527,7¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Herz¥-Mariä¥-Sa:¥0f Die Votivmesse ist erlaubt.¥p",
        "deceased": "2002 †¥tJosef°Nüdling, Pfr.i.R., GR, Hilders¥p",
        "deceased_more": "1936 †¥tDamian°Lauer, Pfarrer°in°Mardorf¥p1951 †¥tPeter°Kräuter, Pfarrer°in°Simmershausen¥p1952 †¥tRudolf°Bergmann°(Leitmeritz), Pfr.i.R., Erzdechant,°Kirchgandern¥p1975 †¥tDr.°Franz°Gypkens,°Frankfurt°a.°M.¥p1981 †¥tWilhelm°Dominka, Pfr.i.R., GR, Kirchworbis¥p1992 †¥tOtto°Boden, Pfr.i.R., Msgr., GR, Gelnhausen¥p2002 †¥tJosef°Nüdling, Pfr.i.R., GR, Hilders¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "3": {
        "liturgy": "¥fSo¥0f¥a¥t¥f18. Sonntag im Jahreskreis¥0f¥lPsalt:°II.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fOffizium: LitHor: Band IV¥0f¥p",
        "deceased": "2000 †¥tP.°Odilo°Thomas°Kostka°SSCC,°Schlüchtern¥-Wallroth¥p",
        "deceased_more": "1932 †¥tKarl°Poppe,°Propst,°Ehrendomkapitular,°Bischöfl.°Kommissarius°in°Heiligenstadt¥p1946 †¥tJoseph°Scholl, Pfarrer°in°Hosenfeld¥p1956 †¥tAloys°Oberthür, Pfr.i.R., Heiligenstadt¥p2000 †¥tP.°Odilo°Thomas°Kostka°SSCC,°Schlüchtern¥-Wallroth¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "4": {
        "liturgy": "¥fMo¥0f¥t¥fHl. Johannes Maria Vianney¥0f, Pfarrer von Ars, Pr, ¥fGed¥0f – Off°vom°Ged¥pw¥t¥fMs vom Hl¥0f ¥w(vgl.°MBErg¹°10)¥0w¥p",
        "notes": "Perikopen an den Wochentagen: ¥fML VI, Reihe I¥0f¥p",
        "deceased": "2016 †¥tPhilipp°Heim, Pfr.i.R., Msgr., GR, Kassel¥p",
        "deceased_more": "1947 †¥tHugo°Wehner, Pfarrer°in°Kranlucken¥p1948 †¥tFranz°Heer, Pfarrer°in°Büttstedt¥p1951 †¥tAnton°Jonczyk°(Breslau), Pfarrer°in°Wiehe/Unstrut¥p1960 †¥tJohannes°Steinwachs, Pfr.i.R., Heiligenstadt¥p2016 †¥tPhilipp°Heim, Pfr.i.R., Msgr., GR, Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "5": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 18.°Woche°im°Jahreskreis¥pw¥tOder ¥fWeihetag der Basilika S. Maria Maggiore in°Rom¥0f, ¥fGed¥0f – BuM°eig – Ms:°Com°Maria,°MarPräf¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°306,5;°Gg°1078/²1108;°Sg°525,2¥0w¥l¥l¥kIm Dom zu Fulda:¥0k ¥pw¥t¥kabends:¥0k ggf.°¥fVorabendmesse°vom°H¥0f – ¥f1.°Vp°vom°folg°H¥0f°–°¥f1.°Kp°vom°So¥0f¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1976 †¥tUmberto°Pascolini,°Italienerseelsorger°in°Kassel¥p1977 †¥tErnst°Maria°Franz°Gumbel,°Msgr., GR, Bistumsarchivar°in°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "6": {
        "liturgy": "¥fMi¥0f¥t¥qfVerklärung des Herrn¥0f, ¥fFest¥0f¥l(¥kim Dom zu Fulda:¥0k ¥fHochfest¥0f)¥lTe°Deum – Kl.°Hore: eig Ant,°Ps°vom°Wt¥pw¥t¥fMs eig¥0f, Gl, eig°Präf, FSS:°MB°548/I¥p",
        "notes": "¥fHinweise:¥0f¥p¥sDas heutige Fest der Verklärung des Herrn wird ¥fim Dom zu Fulda als Titularfest im Rang eines Hochfestes¥0f begangen: Kl.°Hore:°eig°Ant,°ErgPs – Ms°mit°Gl°und°Cr – 2.°Kp°vom°So.¥p¥sZum heutigen Fest bzw. Hochfest passen besonders die Lieder GL°363 (auch nach der Melodie von GL°375 singbar) und GL°368¥v,5+6¥0v (auch nach der Melodie von GL°329 singbar).¥p",
        "deceased": "",
        "deceased_more": "1936 †¥tOtto°Amthor,°Kaplan°in°Hofaschenbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "7": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 18.°Woche°im°Jahreskreis¥pr¥tOder ¥fhll. Xystus II.¥0f, Pp, ¥fund°Gefährten¥0f, Märtt, ¥fGed¥0f°– n.B.°Hg°I¥pw¥tOder ¥fhl. Kajetan¥0f, Pr, Ordgr, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°210/²208;°Gg+Sg°292f¥0w¥p",
        "notes": "",
        "deceased": "2003 †¥tErnst°Eduard°Storch, Pfr.i.R., GR, Ehrenberg¥-Reulbach¥p2017 †¥tP.°Heinrich°Rentmeister°SDB, GR, Köln¥-Mühlheim¥r? seit 1.9.09¥0r¥p",
        "deceased_more": "1984 †¥tJosef°Johannes°Fischer, GR, Pfarrer°in°Kreuzebra¥p2003 †¥tErnst°Eduard°Storch, Pfr.i.R., GR, Ehrenberg¥-Reulbach¥p2017 †¥tP.°Heinrich°Rentmeister°SDB, GR, Köln¥-Mühlheim¥r? seit 1.9.09¥0r¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "8": {
        "liturgy": "¥fFr¥0f¥t¥fHl. Dominikus¥0f, Pr, Ordgr, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "9": {
        "liturgy": "¥fSa¥0f¥t¥qfHl. Theresia Benedicta vom Kreuz¥0f ¥f(Edith Stein)¥0f, Jgfr, Märt, ¥fPatronin Europas¥0f, ¥fFest¥0f°(RK/GK)¥lOff: StB°III (²2010), S.°1368, oder:°Ergänzungsheft°1995,°S.°19¥_28, oder:°Com°Märt°(S.°1110ff) oder Ord°(S.°1244ff) – ¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pr¥t¥fMs eig¥0f, Gl, ¥fFürbitten für Europa¥0f, Präf°Ord°oder°Hll, FSS:°MB°560¥be¥w¥fMs¥0f:°HR°/°MBkl°1243°/°MBErg²°11f°– ¥fML°VI°ᴺ499°/°[2009]°905¥0f¥l¥vL:¥0v¥tEst°4¥v,17k¥_m.r¥_t¥0v¥t¥fML°IV¥0f°133¥l¥vAPs:¥0v¥tPs°18¥v,2¥_3.5+7ab.17+20.29+50¥0v°(R:°vgl.°¥v7¥0v)¥tvgl.°234¥l¥vREv:¥0v¥tEz°37¥v,27¥0v¥t–––¥l¥vEv:¥0v¥tJoh°4¥v,19¥_24¥0v¥tvgl.°164¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥sZur Feier des Stundengebetes und der hl. Messe am Fest der hl. Theresia Benedicta vom Kreuz: In den beiden älteren Ergänzungsheften (1994 zum MB und 1995 zum StB) ist das „selig“ durch „heilig“ zu ersetzen. Die Bezeichnungen „Patronin Europas“ und „Fest“ sowie das Datum der Heiligsprechung (11.10.1998) in den Einführungen sind zu ergänzen. Im Ergänzungsheft 1995 zum StB ist jeweils nach den vier Responsorien nach den vier als 2. Lesung ausgewählten möglichen Texten „Te°Deum“ einzufügen.¥p¥s¥fVon der hl. Edith Stein gedichtete Lieder¥0f sind GL°439 (auch nach der Melodie von GL°395 singbar) und GL°822 (mit geringfügiger Anpassung auch nach der Melodie von GL 94 singbar, wenn auf die zweite Silbe jeder Textzeile jeweils die beiden Viertelnoten der Melodie gesungen werden).¥p",
        "deceased": "2017 †¥tEligiusz°Woszek°(Katowice/Fulda), Pfr.i.R., GR, Katowice/Polen¥p",
        "deceased_more": "1963 †¥tFranz°Joseph°Krenzer, Pfr.i.R., Geisa¥p1978 †¥tEdgar°Natsch°(Breslau), Pfr.i.R., Wingerode¥p1985 †¥tHermann°Roth, Pfr.i.R., Wiesenfeld¥p2017 †¥tEligiusz°Woszek°(Katowice/Fulda), Pfr.i.R., GR, Katowice/Polen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "10": {
        "liturgy": "¥fSo¥0f¥a¥t¥f19. Sonntag im Jahreskreis¥0f¥lPsalt:°III.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweis:¥0f ¥sDas ¥fFest des hl. Diakons Laurentius¥0f entfällt in diesem Jahr.¥p",
        "deceased": "2017 †¥tKonrad°Meilinger, OStR°i.K.i.R., Msgr., GR, Hanau¥p",
        "deceased_more": "1961 †¥tKarl°Abel, Dechant, Pfarrer°in°Rengelrode¥p2017 †¥tKonrad°Meilinger, OStR°i.K.i.R., Msgr., GR, Hanau¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "11": {
        "liturgy": "¥fMo¥0f¥t¥fHl. Klara von Assisi¥0f, Jgfr, Ordgr, ¥fGed¥0f¥pw¥t¥fMs von der Hl¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "12": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 19.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Radegunde¥0f, Königin, Ord, ¥fGed¥0f (FD)¥bf¥w¥vL:¥0v¥tSir°2¥v,7¥_11¥0v¥tML°VI°507/ᴺ494¥l¥vAPs,°REv°und°Ev:¥0v¥tFDL°22f¥0w¥pw¥tOder ¥fhl. Johanna Franziska von Chantal¥0f, Ordgr, ¥fGed¥0f (früher°am°12.°Dezember)¥l¥w¥fOff:¥0f StB I 824 bzw. StB°III°(²2010),°S.°1369; Lektionar°zum°StB°I/1,°217¥l¥fMs:¥0f MB°864/²866f / MBkl°745 – ML°IV°410/°VI°ᴺ736¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°305,1;°Gg°348,1;°Sg°525,1¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sDer Gedenktag der hl. Johanna Franziska von Chantal ist wegen des neuen Gedenktages Unserer Lieben Frau in Guadalupe vom bisherigen 12.°Dezember auf den 12.°August verlegt worden (vgl.°oben,°Kap.°I.A.1,°Nr.°11, und MBkl°2007, S.°745).¥p",
        "deceased": "",
        "deceased_more": "1957 †¥tKarl°Rohn°(Leitmeritz),°Religionslehrer°i.R., Erfurt¥p1958 †¥tTheodor°Helbig, Pfarrer°in°Dingelstädt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "13": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 19.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Wigbert¥0f, Abt, ¥fGed¥0f (FD)¥bf¥w¥vL:¥0v¥t1°Petr°4¥v,7b¥_11¥0v¥tML°VI°870/ᴺ844¥l¥vAPs:¥0v¥tPs°1¥v,1¥_2.3.4+6¥0v°(R:°vgl.°¥v2a¥0v)¥t732/ᴺ732¥l¥vREv:¥0v¥tvgl.°Joh°14¥v,23¥0v¥t529/ᴺ521¥l¥vEv:¥0v¥tMt°7¥v,21¥_27¥0v¥t872/ᴺ844¥0w¥pr¥tOder ¥fhl. Pontianus¥0f, Pp, ¥fund hl.°Hippolyt¥0f, Pr, Märtt, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°310,16;°Gg°349,6;°Sg°525,1¥0w¥l¥l¥kIm Dom zu Fulda:¥0k ¥pw¥t¥kabends:¥0k ggf.°¥fVorabendmesse°vom°H¥0f – ¥f1.°Vp°vom°folg°H¥0f°–°¥f1.°Kp°vom°So¥0f¥p",
        "notes": "",
        "deceased": "2022 †¥tHans¥-Joachim°Uhde, Pfr.i.R., GR, Maintal¥-Dörnigheim¥p",
        "deceased_more": "1925 †¥tLudwig°Günther, Pfarrer°in°Lütter¥p1970 †¥tJosef°Purschke, Pfarrer°in°Friesenhausen¥p1979 †¥tRonald°Sommer,°Neupriester°in°Erfurt¥p1985 †¥tFranz°Paul°(Leitmeritz), GR, Pfarrer°in°Haselstein¥p2022 †¥tHans¥-Joachim°Uhde, Pfr.i.R., GR, Maintal¥-Dörnigheim¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "14": {
        "liturgy": "¥fDo¥0f¥t¥qfWeihetag der Fuldaer Kathedrale¥0f, ¥fFest¥0f (FD)¥lOff: Com Kirchweihe – Te°Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pw¥t¥fMs aus dem Com Kirchweihe B¥0f (MB°882), Gl,°eig°Präf, FSS:°MB°562¥bf¥w¥vL:¥0v¥tOffb°21¥v,9b¥_14¥0v¥t¥fML°C/III¥0f°484/ᴺ496¥l¥vL°(ggf.°2.°L):¥0v°1°Kor°3¥v,9c¥_11.16¥_17¥0v¥t486/ᴺ498¥l¥vAPs:¥0v¥tPs°122¥v,1¥_3.4¥_5.8¥_9¥0v°(R:°¥v1b¥0v)¥t485/ᴺ497¥l¥vREv:¥0v¥tOffb°21¥v,3¥0v¥t–––¥l¥vEv:¥0v¥tJoh°10¥v,22¥_30¥0v¥t¥fML°IV¥0f°315/ᴺ317¥0w¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fDer Gedenktag des hl. Maximilian Maria Kolbe¥0f (im RK und GK am 14. Aug.) wird im Bistum Fulda ¥fam 17. August¥0f gefeiert, entfällt aber in diesem Jahr.¥p¥sDas Weihefest der Fuldaer Kathedrale wird ¥fim Dom zu Fulda als Hochfest der eigenen Kirchweihe¥0f begangen; alles wie unten angegeben, außer: Kl.°Hore:°Ant°aus dem Com, ErgPs – Ms aus dem Com Kirchweihe A (MB°878/²879) mit Gl°und°Cr, in den Hg°I¥_III eig°Einschub.¥p¥sNutzer der Stundenbuch-App des DLI finden die ¥fTexte für das Stundengebet zur heutigen Eigenfeier des Diözesankalenders in der Datei FD-Stundengebet.PDF¥0f (s.°o.°S.°87, Nr.°3).¥p",
        "deceased": "",
        "deceased_more": "1976 †¥tTheobald°Höfler, Pfr.i.R., Altenmittlau¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "¥fHinweise:¥0f¥p¥s¥fDas Hochfest der Aufnahme Mariens in den Himmel ist im Bistum Fulda kirchlich gebotener Feiertag¥0f. Es besteht ¥fApplikations- sowie Sonn- und Feiertagspflicht¥0f (s.°o.°Kap.°I.C.1.).¥p¥sAus pastoralen Gründen können in der ¥fVigilmesse vom Hochfest der Aufnahme Mariens in den Himmel¥0f auch die Perikopen der Tagesmesse genommen werden.¥p¥sZur ¥fKräutersegnung¥0f s.°Benediktionale°Nr.°9,°S.°63ff.¥p¥sAm Schluss der Komplet kann heute und morgen passenderweise die ¥fMarianische Antiphon „Ave Regina caelorum“¥0f (GL°666¥v,2¥0v) bzw. ¥f„Ave, du Himmelskönigin“¥0f (vgl.°GL°868) gewählt werden, n.B. auch in der gesamten Oktav bis zum Ged Maria Königin am 22.°August.¥p¥sWegen des Hochfestes entfällt morgen die Verpflichtung zum Freitagsopfer.¥p",
        "vig_liturgy": "w¥t¥kabends:¥0k ggf. ¥fVigilmesse von der Aufnahme Mariens in den Himmel¥0f, Gl,°Cr, eig°Präf und in°den Hg°I¥_III eig°Einschub wie morgen, FSS:°MB°554°– ¥f1.°Vp°vom°folg°H¥0f°–°¥f1.°Kp°vom°So¥0f¥p¥p"
      },
      "15": {
        "liturgy": "¥fFr¥0f¥a¥t¥qhMariä Aufnahme in den Himmel¥0f, ¥fHochfest¥0f¥lTe Deum – Kl.°Hore: eig Ant,°ErgPs¥pw¥t¥fMs eig¥0f, Gl,°Cr, eig°Präf, in°den Hg°I¥_III eig°Einschub, FSS:°MB°554°– 2.°Vp°vom°H°–°2.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fDas Hochfest der Aufnahme Mariens in den Himmel ist im Bistum Fulda kirchlich gebotener Feiertag¥0f. Es besteht ¥fApplikations- sowie Sonn- und Feiertagspflicht¥0f (s.°o.°Kap.°I.C.1.).¥p¥sZur ¥fKräutersegnung¥0f s.°Benediktionale°Nr.°9,°S.°63ff.¥p¥sAm Schluss der Komplet kann heute passenderweise die ¥fMarianische Antiphon „Ave Regina caelorum“¥0f (GL°666¥v,2¥0v) bzw. ¥f„Ave, du Himmelskönigin“¥0f (vgl.°GL°868) gewählt werden, n.B. auch in der gesamten Oktav bis zum Ged Maria Königin am 22.°August.¥p¥sWegen des Hochfestes entfällt heute die Verpflichtung zum Freitagsopfer.¥p",
        "deceased": "",
        "deceased_more": "1980 †¥tRichard°Hellmann°(Breslau), Pfr.i.R., GR, Garmisch¥-Partenkirchen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "16": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 19.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Rochus¥0f, Pilger, ¥fGed¥0f (FD)¥bf¥w¥vL:¥0v¥tJes°58¥v,6¥_11¥0v¥tML°VI°739/ᴺ739¥l¥vL°(ggf.°2.°L):¥0v°1°Joh°3¥v,14¥_18¥0v¥t748/ᴺ747¥l¥vAPs:¥0v¥tPs°112¥v,1¥_2.3¥_4.5¥_6.7+9¥0v°(R:°vgl.°¥v1a¥0v)¥t616/ᴺ613¥l¥vREv+Ev:¥0v°Mt°25¥v,31¥_40¥0v¥t729/ᴺ729¥0w¥pw¥tOder ¥fhl. Stephan I.¥0f, König von Ungarn, ¥fGed¥0f¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°305,1;°Gg°350,9;°Sg°525,1¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "2010 †¥tBerthold°Richardt, Pfr.i.R., Msgr., Heiligenstadt¥p",
        "deceased_more": "1940 †¥tAdolf°Knoch,°Assessor°am°Bischöfl.°Kommissariat°in°Heiligenstadt¥p1945 †¥tJoseph°Raab,°Frühmesser°i.R., Rheinbreitbach¥p2010 †¥tBerthold°Richardt, Pfr.i.R., Msgr., Heiligenstadt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "17": {
        "liturgy": "¥fSo¥0f¥a¥t¥f20. Sonntag im Jahreskreis¥0f¥lPsalt:°IV.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweis:¥0f ¥sDer ¥fGedenktag des hl. Maximilian Maria Kolbe¥0f entfällt in diesem Jahr.¥p",
        "deceased": "2007 †¥tRoland°Nink,°Diakon,°Flieden¥-Buchenrod¥p",
        "deceased_more": "2007 †¥tRoland°Nink,°Diakon,°Flieden¥-Buchenrod¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "18": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 20.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°236;°Gg°349,6;°Sg°526,6¥0w¥p",
        "notes": "",
        "deceased": "2001 †¥tP.°Hans°Brauner°SAC, GR, Vallendar¥p2001 †¥tRoman°Schymik, Pfarrer°in°Simmershausen¥p",
        "deceased_more": "1965 †¥tP.°Eugen°Bergmann°SJ,°Spiritual°in°Fulda¥p1992 †¥tDr.°Josef°Leinweber, Prof., Dr.°theol.°habil., Msgr., Domkapitular,°Fulda¥p2001 †¥tP.°Hans°Brauner°SAC, GR, Vallendar¥p2001 †¥tRoman°Schymik, Pfarrer°in°Simmershausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "19": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 20.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Johannes Eudes¥0f, Pr, Ordgr, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°125/²123;°Gg°349,6;°Sg°529,14¥0w¥p",
        "notes": "",
        "deceased": "2008 †¥tWolfgang°Laibold,°Diakon,°Fulda¥p",
        "deceased_more": "1962 †¥tKarl°Bohl,°Kaplan°in°Eichenzell¥p2008 †¥tWolfgang°Laibold,°Diakon,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "20": {
        "liturgy": "¥fMi¥0f¥t¥fHl. Bernhard von Clairvaux¥0f, Abt, Kl, ¥fGed¥0f°(GK/RK)¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged,°BuM°eig¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1947 †¥tHermann°Horstkemper, Dechant, Pfarrer°in°Küllstedt¥p1968 †¥tHermann°Mott,°Kpl.i.R., Rektor,°Wachtküppel/Rhön¥p1990 †¥tAlojzije°Hartli, Pfr., Kroatenseelsorger°in°Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "21": {
        "liturgy": "¥fDo¥0f¥t¥fHl. Pius X.¥0f, Pp, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "2010 †¥tSiegfried°Klaus, Pfr.i.R., GR, Meinhard¥p2019 †¥tHans°Höfler, Pfr.i.R., Msgr., GR, Gelnhausen¥p",
        "deceased_more": "1954 †¥tPaul°Kaleve°(Breslau), Pfr.i.R., Kanonikus,°Büttstedt¥p1957 †¥tRobert°Günther,°Generalvikar,°Apostol.°Protonotar, Domkapitular,°Fulda¥p2010 †¥tSiegfried°Klaus, Pfr.i.R., GR, Meinhard¥p2019 †¥tHans°Höfler, Pfr.i.R., Msgr., GR, Gelnhausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "22": {
        "liturgy": "¥fFr¥0f¥t¥fMaria Königin¥0f, ¥fGed¥0f¥lOff°vom°Ged, Inv und BuM eig¥pw¥t¥fMs vom Ged¥0f, MarPräf (siehe auch: MBm und MLm Nr.°29 „Maria°Königin“)¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute findet zum 7. Mal der ¥f„Internationale Gedenktag für Opfer von Gewalt wegen ihrer Religion oder ihres Glaubens“¥0f statt. Er wurde bei der UN-Vollversammlung am 28. Mai 2019 verabschiedet und auf den 22. August gelegt. ¥f(Fürbitt¥-)Gebet¥0f für alle Opfer (und auch Verursacher) religiöser Gewalt, für Religions-, Glaubens- und Gewissensfreiheit weltweit.¥p¥sAm Schluss der Komplet kann heute passenderweise  die ¥fMarianische Antiphon „Ave Regina caelorum“¥0f (GL°666¥v,2¥0v) bzw. ¥f„Ave, du Himmelskönigin“¥0f (vgl.°GL°868) gewählt werden.¥p",
        "deceased": "",
        "deceased_more": "1962 †¥tDr.°Hermann°Schmidt, Domkapitular°in°Fulda¥p1988 †¥tGünter°Fahrig, Pfarrer°in°Hildburghausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "23": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 20.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Rosa von Lima¥0f, Jgfr, ¥fGed¥0f¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°317,33;°Gg°1105/²1137;°Sg°527,9¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1944 †¥tKonstantin°Görge,°Neupriester,°seit°23.°August°1944°vermisst°(Berg°Parnass°bei°Athen)¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "24": {
        "liturgy": "¥fSo¥0f¥a¥t¥f21. Sonntag im Jahreskreis¥0f¥lPsalt:°I.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fLektionar zum StB I/7¥0f (21.–27. Woche i. Jkr.)¥rLektStB  I/7¥0r¥p¥p¥fHinweis:¥0f ¥sDas ¥fFest des hl. Bartholomäus¥0f entfällt in diesem Jahr.¥p",
        "deceased": "2010 †¥tHans°Henning, GR, Pfarrer°in°Juscimeira/Brasilien¥p2016 †¥tJohannes°Hubrich, Pfr.i.R., Fulda¥p",
        "deceased_more": "1927 †¥tPaul°Hartmann, Pfarrer°in°Neuses¥p1945 †¥tJoseph°Lotz, Pfarrer°in°Effelder¥p1987 †¥tFranz°Hornischer°(Olmütz), Pfr.i.R., Schauenburg¥-Elgershausen¥p2010 †¥tHans°Henning, GR, Pfarrer°in°Juscimeira/Brasilien¥p2016 †¥tJohannes°Hubrich, Pfr.i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "25": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 21.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Ludwig¥0f, König von Frankreich, ¥fGed¥0f¥pw¥tOder ¥fhl. Josef von Calasanza¥0f, Pr, Ordgr, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg+Gg°247;°Sg°246/²247¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1944 †¥tDamian°Dangel, Pfarrer°in°Sombom¥p1968 †¥tDr.°Johannes°Schäfer, Prof.°em., StR°i.R., Fulda¥p1983 †¥tTheodor°Kremer°(Danzig), Pfr.i.R., GR, Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "26": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 21.°Woche°im°Jahreskreis¥pw¥tOder ¥fsel. Johannes Paul I.¥0f, Pp, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°1052,1/²1076,1;°Gg°348,3;°Sg°527,7¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1943 †¥tWalter°Otterbein,°San.¥-Uffz., Diözesanpriester¥p1962 †¥tAdolf°Sander, Pfr.i.R., Wetter/Ruhr¥p1963 †¥tPhilipp°Heim, Pfr.i.R., Bad°Orb¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "27": {
        "liturgy": "¥fMi¥0f¥t¥fHl. Monika¥0f, Mutter des hl. Augustinus, ¥fGed¥0f¥pw¥t¥fMs von der Hl¥0f – Off°vom°Ged,°BuM°eig¥p",
        "notes": "",
        "deceased": "2010 †¥tBernhard°Niemiec°(Katowice/Fulda), Pfarrer°in°Niederkalbach¥p",
        "deceased_more": "1948 †¥tLeo°Franzkowski°(Breslau),°Erzpriester, Pfr.i.R., Bodenrode¥p1953 †¥tWendelin°Brähler, Pfarrer°in°Petersberg¥p1970 †¥tLeonhard°Hruschka°(Breslau), Pfarrer°in°Naumburg¥-Land¥p1984 †¥tGünter°Zucker, Pfr.i.R., OStR°i.K.i.R., Petersberg¥p2010 †¥tBernhard°Niemiec°(Katowice/Fulda), Pfarrer°in°Niederkalbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "28": {
        "liturgy": "¥fDo¥0f¥t¥fHl. Augustinus¥0f, Bi, Kl, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged,°BuM°eig¥p",
        "notes": "",
        "deceased": "2013 †¥tHartmut°Wegner, Pfr.i.R., GR, Alzenau¥p",
        "deceased_more": "1930 †¥tAdalbert°Huhn,°Kooperator°in°Kassel/Gelnhausen¥p1983 †¥tDr.°Martin°Hannappel, Pfr.i.R., Stausebach¥p1985 †¥tP.°Hermes°Wilhelm°Berthold°OFMCap,°Pfarradmin.°in°Bebra¥p2013 †¥tHartmut°Wegner, Pfr.i.R., GR, Alzenau¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "29": {
        "liturgy": "¥fFr¥0f¥t¥fEnthauptung des hl. Johannes des Täufers¥0f, ¥fGed¥0f¥lOff°vom°Ged, Inv und LuV eig¥pr¥t¥fMs vom Ged¥0f, eig°Ev, eig°Präf, n.B.°Hg°I¥p",
        "notes": "",
        "deceased": "2018 †¥tKarl¥-Heinz°Bickert, Pfr.i.R., OStR°i.K.i.R., GR, Fulda¥p",
        "deceased_more": "1930 †¥tIgnatius°Schnaus, Pfr.i.R., Batten¥p1960 †¥tJosef°Freidhof, Pfr.i.R., Rückers¥p2018 †¥tKarl¥-Heinz°Bickert, Pfr.i.R., OStR°i.K.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "30": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 21.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°308,10;°Gg°348,1;°Sg°1040/²1062¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1966 †¥tFranz°Gaschler°(Olmütz), Pfr.i.R., Fritzlar¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "31": {
        "liturgy": "¥fSo¥0f¥a¥t¥f22. Sonntag im Jahreskreis¥0f¥lPsalt:°II.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweis:¥0f ¥sDer ¥fGedenktag des hl. Paulinus¥0f entfällt in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1969 †¥tP.°Athanasius°Schwermann°OFMCap, Pfarrer°in°Bad°Hersfeld,°St.°Bonifatius¥p1981 †¥tRudolf°Hammer, Pfr.i.R., GR, Flieden¥p1989 †¥tPaul°Burschel,°Generalvikar°i.R., Apostol.°Protonotar, Domkapitular°i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      }
    },
    "9": {
      "1": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 22.°Woche°im°Jahreskreis – ¥l¥fWeltgebetstag°zur°Bewahrung°der°Schöpfung – Beginn°der°„Ökumenischen°Schöpfungszeit“¥0f (bis°zum°4.10.)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°62,1/²60,1;°Gg°167/²165;°Sg°208,1/²206,1¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sPapst Franziskus hat im August 2015 einen künftig jährlich am 1.°September stattfindenden ¥f„Weltgebetstag zur Bewahrung der Schöpfung“¥0f ins Leben gerufen (Mitteilung des Vatikan vom 10.08.2015). Er wird gemeinsam mit den orthodoxen Kirchen begangen, die ihn schon seit 1988 am 1.°September haben.¥p",
        "deceased": "1998 †¥tDr.°Franz°Scholz°(Breslau), Prof.°em., Dr.°theol.°habil., Prälat,°Ehrendomkapitular,°Dieburg¥p",
        "deceased_more": "1937 †¥tWigbert°Sondergeld,°Rektor°i.R., Hünfeld¥p1949 †¥tJohannes°Delmhorst, Pfr.i.R., Prälat,°Borsum¥p1949 †¥tHeinrich°Melcher°(Köln), Pfr.i.R., Bad°Sachsa¥p1964 †¥tP.°Heinrich°Balnus°SDB,°Kaplan°in°Kassel,°St.°Kunigundis¥p1979 †¥tPaul°Hartmann, Pfr.i.R., Msgr., GR, Dipperz¥p1982 †¥tPaul°Tietz°(Ermland), GR, Pfarrer°in°Steinau°a.°d.°Straße¥p1998 †¥tDr.°Franz°Scholz°(Breslau), Prof.°em., Dr.°theol.°habil., Prälat,°Ehrendomkapitular,°Dieburg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "2": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 22.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°146/²144;°Gg°199/²197;°Sg°219/²218¥0w¥p",
        "notes": "",
        "deceased": "1996 †¥tCarl°Josef°Schneider, Pfr.i.R., Msgr., GR, Ehrendechant,°Fulda¥p",
        "deceased_more": "1940 †¥tJoseph°Lier,°Hausgeistlicher°im°Lucius¥-Hebel¥-Stift°in°Erfurt¥p1996 †¥tCarl°Josef°Schneider, Pfr.i.R., Msgr., GR, Ehrendechant,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "3": {
        "liturgy": "¥fMi¥0f¥t¥fHl. Gregor der Große¥0f, Pp, Kl, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged,°BuM°eig¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1969 †¥tMartin Drissel, Pfr.i.R., Fritzlar¥p1986 †¥tFranz°von°Hirsch°(Breslau/Görlitz), Pfr.i.R., Zella/Eichsfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "4": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 22.°Woche°im°Jahreskreis – ¥fPriesterdonnerstag¥0f¥pw¥tOder ¥fMs um Priesterberufe¥0f ¥w(MB°1035f/²1057),¥lL°und°Ev vom°Tag oder aus°den°AuswL¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°1039f/²1061f¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Priesterdonnerstag (monatl. Gebetstag für geistliche Berufe):¥0f Die Votivmesse ist erlaubt. – Fürbitte(n) um Priesterberufungen. – Thema: „Dankt dem Vater mit Freude!“ (Kol 1¥v,12¥0v). Intention: Für alle, die Sorge tragen für würdige und festliche Gottesdienste.¥p",
        "deceased": "2009 †¥tFranz°Schröder, Pfr.i.R., OStR°i.K.i.R., Fulda¥p",
        "deceased_more": "1983 †¥tKarl°Goldbach, Pfr.i.R., GR, Lenterode/Eichsfeld¥p2009 †¥tFranz°Schröder, Pfr.i.R., OStR°i.K.i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "5": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 22.°Woche°im°Jahreskreis – ¥fHerz¥-Jesu¥-Freitag¥0f – ¥fÖkumenischer°Schöpfungstag¥0f¥pw¥tOder ¥fMs von der hl. Mutter Teresa¥0f, Ord, Ordgr¥be¥w¥fMs¥0f: HR°/°Com°Jgfr oder MFr°9, Präf°Jgfr¥l¥vL:¥0v¥tGen°12¥v,1¥_4a¥0v¥t¥fML°VII¥0f°°°°3/ᴺ°3¥l¥vAPs:¥0v¥tPs°22¥v,23¥_24b.25.26¥_27.30c¥_32¥0v°(R:°¥v27b¥0v)¥tvgl.°86/ᴺ87¥l¥vREv:¥0v¥tMt°23¥v,11.12b¥0v¥t–––¥l¥vEv:¥0v¥tJoh°19¥v,25¥_30¥0v¥t498/ᴺ512¥0w¥pw¥tOder ¥fVotivmesse vom heiligsten Herzen Jesu¥0f¥l¥w(MB°1100f/²1132f oder 257ff), Herz¥-Jesu¥-Präf,¥lL°und°Ev°vom°Tag oder aus°den°AuswL¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°176/²174;°Gg+Sg°119/²117¥0w¥p",
        "notes": "¥fHinweise:¥0f¥p¥sEin ¥f„Ökumenischer Schöpfungstag“¥0f wurde beim 2.¥°Ökumenischen Kirchentag im Mai¥°2010 in München feierlich deklariert und von den Mitgliedskirchen der Arbeitsgemeinschaft Christlicher Kirchen in Deutschland (ACK) offiziell auf den ¥f1.¥°Freitag im September¥0f gelegt. Je nach lokalen und regionalen Gegebenheiten können Gemeinden den „Ökumenischen Schöpfungstag“ auch an einem anderen Termin der ¥f„Schöpfungszeit“ zwischen dem 1.¥°September und dem 4.¥°Oktober¥0f feiern. ¥fBesondere Fürbitten und/oder Gottesdienste im Anliegen der Bewahrung der Schöpfung und des Klimaschutzes.¥0f Eine Arbeitshilfe zur Anregung für Gemeinden, in gemeinsamer ökumenischer Initiative die Schöpfung zu feiern, kann bei der ACK – Ökumenische Centrale, www.oekumene-ack.de oder www.schoepfungstag.info, bestellt werden. – Zur ökumenischen Schöpfungszeit eignen sich besonders die Lieder GL°463 und°466.¥p¥sHeute wird in Würdigung des Wirkens der hl. Mutter Teresa der von den Vereinten Nationen am 17. Dezember 2012 ausgerufene „Internationale Welttag der Nächstenliebe“ begangen.¥p¥s¥fZum°Herz¥-Jesu¥-Fr:¥0f Die Votivmesse ist erlaubt.¥p",
        "deceased": "1999 †¥tJosef°Schöler°(Leitmeritz/Fulda), Pfr.i.R., GR, Bad°Hersfeld¥p",
        "deceased_more": "1922 †¥tJohann°Bapt.°Blume, Pfr.i.R., Steinbach¥p1949 †¥tHieronymus°Schwethelm, Dechant, Pfarrer°in°Beuren/Eichsfeld¥p1999 †¥tJosef°Schöler°(Leitmeritz/Fulda), Pfr.i.R., GR, Bad°Hersfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "6": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 22.°Woche°im°Jahreskreis – ¥fHerz¥-Mariä¥-Samstag¥0f¥pw¥tOder ¥fVotivmesse vom Unbefleckten Herzen Mariä¥0f, ¥wMBm°und°MLm°Nr.°28,°eig°Präf¥0w¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°247;°Gg+Sg°99f/²97f¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Herz¥-Mariä¥-Sa:¥0f Die Votivmesse ist erlaubt.¥p",
        "deceased": "",
        "deceased_more": "1977 †¥tP.°Hans°von°Schönfeld°SJ,°Frankfurt°a.°M.¥p1986 †¥tOtto°Henkel, Pfarrer°in°Heiligenstadt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "7": {
        "liturgy": "¥fSo¥0f¥a¥t¥f23. Sonntag im Jahreskreis¥0f¥lPsalt:°III.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "",
        "deceased": "2002 †¥tJohannes°Nikel°(Breslau/Fulda), Pfr.i.R., GR, Flieden¥-Rückers¥p",
        "deceased_more": "1960 †¥tJulius°Braun, Pfr.i.R., Fulda¥p1983 †¥tPaul°Pöss°(Neusohl/Banská Bystrica), Pfr.i.R., GR, Gelnhausen¥p2002 †¥tJohannes°Nikel°(Breslau/Fulda), Pfr.i.R., GR, Flieden¥-Rückers¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "8": {
        "liturgy": "¥fMo¥0f¥t¥qfMariä Geburt¥0f, ¥fFest¥0f¥lTe Deum – Kl.°Hore: eig Ant, Ps vom°Wt¥pw¥t¥fMs eig¥0f, Gl, eig°Präf, in°den Hg°I¥_III eig°Einschub, FSS:°MB°554¥p",
        "notes": "¥fHinweis:¥0f ¥sZum heutigen Fest Mariä Geburt steht im Gesangbuch das ¥fLied GL°869¥0f (auch nach der Melodie von GL°236 oder GL°282 singbar).¥p",
        "deceased": "",
        "deceased_more": "",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "9": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 23.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Petrus Claver¥0f, Pr, ¥fGed¥0f – ¥fPatron°der°Menschenrechte¥0f¥be¥w¥fMs¥0f: HR°/°MBkl°1244°/°MBErg²°14°/ Com°Ht°5°od.°10¥_12°– ¥fML°VI°ᴺ564¥0f¥l¥vL:¥0v¥tJes°58¥v,6¥_11¥0v¥tML°VI°739¥l¥vAPs:¥0v¥tPs°1¥v,1¥_2.3.4+6¥0v°(R:°¥v2a¥0v)¥t732¥l¥vREv+Ev:¥0v°Mt°25¥v,31¥_40¥0v¥t729¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°309,13;°Gg°350,7;°Sg°529,13¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1958 †¥tMeinolf°Jünemann, Pfr.i.R., Heiligenstadt¥p1964 †¥tHeinrich°Roßbach, Pfarrer°in°Kassel,°St.°Maria¥p1964 †¥tJoseph°Schramm, Pfarrer°in°Witzenhausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "10": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 23.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°318,37;°Gg°348,2;°Sg°208,1/²206,1¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1939 †¥tAlbin°Kind, Pfr.i.R., Rottenmünster¥p1961 †¥tJosef°Larbig, Pfr.i.R., Bad°Soden¥-Salmünster¥p1979 †¥tWilhelm°Joerg, Pfr.i.R., Breitenbach°a.°Herzberg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "11": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 23.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°315,27;°Gg°105/²103;°Sg°527,9¥0w¥p",
        "notes": "",
        "deceased": "2020 †¥tJózef°Cieśla, Pfr.i.R., Nowy°Sącz/Polen¥p2023 †¥tWilhelm°Gerlach, Pfr.i.R., GR, Kirchhain¥p",
        "deceased_more": "1944 †¥tKarl°Hofmann,°Konviktsdirektor°in°Fulda, Opfer°eines°Luftangriffes¥p2020 †¥tJózef°Cieśla, Pfr.i.R., Nowy°Sącz/Polen¥p2023 †¥tWilhelm°Gerlach, Pfr.i.R., GR, Kirchhain¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "12": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 23.°Woche°im°Jahreskreis¥pw¥tOder ¥fHeiligster Name Mariens (Mariä Namen)¥0f, ¥fGed¥0f (GK/RK)¥l¥fOff¥0f: StB°III°(²2010),°S.°890¥be¥w¥fMs¥0f: HR°/°MBErg²°15°/ MBm°Nr.°21°(„Mariä°Namen“), MarPräf°– ¥fML°VI°573/ᴺ567¥0f oder MLm°Nr.°21¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°313,22;°Gg°105/²103;°Sg°527,9¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sZum Gedenktag Mariä Namen passen die Lieder GL°524 und¥°856¥v,1¥0v („Maria mit Namen …“, ggf.°auch weitere Strophen).¥p",
        "deceased": "",
        "deceased_more": "1953 †¥tAloys°Gernoth°(Breslau), Pfr.i.R., Bad°Salzschlirf¥p1960 †¥tFranz°Christoph°Gesang, Pfarrer°in°Schröck¥p1975 †¥tHermann°Rübsam, Pfr.i.R., GR, Kirchhasel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "13": {
        "liturgy": "¥fSa¥0f¥t¥fHl. Johannes Chrysostomus¥0f, Bi, Kl, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged¥pr¥t¥kabends:¥0k ggf.°¥fVorabendmesse°vom°F¥0f – ¥f1.°Vp°vom°folg°F¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1978 †¥tDr.°Maximilian°Wenzel°(Leitmeritz),°Apostol.°Protonotar,°Offizial°in°Erfurt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "14": {
        "liturgy": "¥fSo¥0f¥a¥t¥qfKreuzerhöhung¥0f, ¥fFest¥0f – ¥fWelttag°der°sozialen°Kommunikationsmittel¥0f – Te°Deum – Kl.°Hore:°eig°Ant,°Ps°vom°So°der°1.°Woche¥pr¥t¥fMs eig¥0f, Gl,°Cr, eig°Präf oder LeidPräf I, FSS:°MB°540 oder 548/I oder 566°– 2.°Vp°vom°F°–°2.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute ist in Deutschland der ¥f59. Welttag der sozialen Kommunikationsmittel¥0f (gesamtkirchl. am 7.¥°So¥°der¥ OSterzeit) ¥funter dem Leitwort: „Mit dem Herzen sprechen“¥0f. Papstwort zum Welttag, Fürbitten. Weitere Infos unter www.dbk.de  ›  Themen  ›  Welttag der sozialen Kommunikationsmittel°–°Mediensonntag)¥p¥sDie Liturgie zum 24. Sonntag im Jkr. entfällt in diesem Jahr.¥p¥sEin Liedblatt mit dem Hymnus zum heutigen Fest aus dem Stundenbuch steht für den Gesang als Gemeindelied unter www.direktorium.bistum-fulda.de zum Download bereit.¥p",
        "deceased": "",
        "deceased_more": "1960 †¥tLudwig°Kafurke°(Breslau), Pfr.i.R., Breitenworbis¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "15": {
        "liturgy": "¥fMo¥0f¥t¥fGedächtnis der Schmerzen Mariens¥0f¥lOff°vom°Ged, Inv und LuV eig¥pw¥t¥fMs vom Ged¥0f, n. B. Sequenz, eig°Ev, eig°Präf¥p",
        "notes": "¥fHinweis:¥0f ¥sZum Gedenktag der Schmerzen Mariens passen die Lieder GL°532, 521¥v,4¥0v und 860¥v,3¥0v.¥p",
        "deceased": "2019 †¥tOskar°Seufert, Pfr.i.R., GR, Eichenzell¥-Rothemann¥p",
        "deceased_more": "1933 †¥tJoseph°Vogt, Dechant, Pfarrer°in°Niederorschel¥p1947 †¥tHeinrich°Fick, Pfarrer°in°Geisleden¥p1963 †¥tFranz°Arand, Pfr.i.R., Teistungen/Krs.°Worbis¥p1988 †¥tP.°Rainer°Klose°OFM,°Franziskaner°auf°dem°Kerbschen°Berg,°Dingelstädt¥p2019 †¥tOskar°Seufert, Pfr.i.R., GR, Eichenzell¥-Rothemann¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "16": {
        "liturgy": "¥fDi¥0f¥t¥fHl. Kornelius¥0f, Pp, und ¥fhl.°Cyprian°von°Karthago¥0f,°Bi, Märtt, ¥fGed¥0f¥pr¥t¥fMs von den Hll¥0f, n.B.°Hg°I – Off°vom°Ged,°BuM°eig¥p",
        "notes": "",
        "deceased": "2018 †¥tWinfried°Böhm,°Diakon,°Eichenzell¥p",
        "deceased_more": "1931 †¥tHermann°Lins, Pfr.i.R., Rinteln¥p2018 †¥tWinfried°Böhm,°Diakon,°Eichenzell¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "17": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 24.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Hildegard von Bingen¥0f, Äbtissin, Myst, Kl, ¥fGed¥0f°(RK/GK)¥pw¥tOder ¥fhl. Robert Bellarmin¥0f, Ordpr, Bi, Kl, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°191/²189;°Gg°199/²197;°Sg°90/²88¥0w¥p",
        "notes": "",
        "deceased": "2011 †¥tDr.°Lothar°Ruppert, Prof., Prälat,°Fulda¥p",
        "deceased_more": "1946 †¥tFranz°Joseph°Beier, Pfarrer°in°Borsch¥p1954 †¥tJohannes°Wiwiora, Pfarrer°in°Hauswurz¥p2011 †¥tDr.°Lothar°Ruppert, Prof., Prälat,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "18": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 24.°Woche°im°Jahreskreis¥pr¥tOder ¥fhl. Lambert¥0f, Bi, Glb, Märt, ¥fGed¥0f°(RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°211/²209;°Gg°219/²217;°Sg°90/²88¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1924 †¥tKarl°Edmund°Pazifikus°Schulz, Pfr.i.R., Soden¥p1942 †¥tJohannes°Bierschenk, Pfr.i.R., Heiligenstadt¥p1947 †¥tFranz°Iseke, Dechant, Pfarrer°in°Kella¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "19": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 24.°Woche°im°Jahreskreis¥pr¥tOder ¥fhl. Januarius¥0f, Bi, Märt, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg+Gg°169/²167;°Sg°171/²169¥0w¥p",
        "notes": "",
        "deceased": "1997 †¥tJosef°Fischer°(Olmütz), Pfr.i.R., Fritzlar¥p2018 †¥tP.°Dario°Zanoner°OFM,°Arco°(Trentino)¥p",
        "deceased_more": "1954 †¥tGeorg°Adam°Rhiel, Pfarrer°in°Uttrichshausen¥p1961 †¥tJohannes°Gulitz°(Breslau), Pfarrer°in°Neudietendorf¥p1997 †¥tJosef°Fischer°(Olmütz), Pfr.i.R., Fritzlar¥p2018 †¥tP.°Dario°Zanoner°OFM,°Arco°(Trentino)¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "20": {
        "liturgy": "¥fSa¥0f¥t¥fHll. Andreas Kim Taegon¥0f, Pr, und ¥fPaulus Chong Hasang und°Gefährten¥0f, Märtt, ¥fGed¥0f¥lOff: StB°III°(²2010),°S.°1365°bzw.°1370, oder Ergänzungsheft°1995,°S.°5¥_8¥pr¥t¥fMs von den Hll¥0f¥be¥w¥fMs¥0f: MB°²782°/°HR°/°MBErg²°16f°/°MBErg¹°11°– ¥fML°VI°ᴺ596¥0f¥l¥vL:¥0v¥tWeish°3¥v,1¥_9¥0v¥tML°VI°505¥l¥voder¥0v¥tRöm°8¥v,31b¥_39¥0v¥t672¥l¥vAPs:¥0v¥tPs°126¥v,1¥_2b.2c¥_3.4¥_5.6¥0v°(R:°¥v5¥0v)¥t506¥l¥vREv+Ev:¥0v°Lk°9¥v,23¥_26¥0v¥t761f¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "21": {
        "liturgy": "¥fSo¥0f¥a¥t¥f25. Sonntag im Jahreskreis¥0f – ¥fCaritassonntag¥0f¥lPsalt:°I.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute ist der ¥fCaritassonntag¥0f unter dem Jahresthema der Caritas für 2025.¥p¥sHeute beginnt die ¥fInterkulturelle Woche vom 21.–28. September¥0f. Materialien können bezogen werden unter www.interkulturellewoche.de. Gemeinsames ökumenisches Hirtenwort im KA, besonderes Fürbittgebet.¥p¥sDas ¥fFest des hl. Matthäus¥0f entfällt in diesem Jahr.¥p",
        "deceased": "2005 †¥tP.°Josef°Pastwa°SDB,°Berlin¥r?¥0r¥p2011 †¥tJohannes°Krömer, Pfr.i.R., GR, Kassel¥p",
        "deceased_more": "1981 †¥tJoseph°Egert, Pfr.i.R., GR, Duderstadt¥p2005 †¥tP.°Josef°Pastwa°SDB,°Berlin¥r?¥0r¥p2011 †¥tJohannes°Krömer, Pfr.i.R., GR, Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "22": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 25.°Woche°im°Jahreskreis¥pr¥tOder ¥fhll. Mauritius und°Gefährten¥0f, Märtt, ¥fGed¥0f°(RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°62,1/²60,1;°Gg°350,7;°Sg°53/²51¥0w¥p",
        "notes": "",
        "deceased": "2010 †¥tP.°Oskar°Klingebiel°OCarm, Pfr.i.R., Flieden¥p2018 †¥t¥fJohannes°Kapp¥0f,°Weihbischof°em., Hofgeismar¥p",
        "deceased_more": "1931 †¥tRudolf°Thiergart, Pfarrer°in°Eichenzell¥p1961 †¥tLeo°Koltermann°(Schneidemühl), Pfarrer°in°Struth/Eichsfeld¥p2010 †¥tP.°Oskar°Klingebiel°OCarm, Pfr.i.R., Flieden¥p2018 †¥t¥fJohannes°Kapp¥0f,°Weihbischof°em., Hofgeismar¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "23": {
        "liturgy": "¥fDi¥0f¥t¥fHl. Pius von Pietrelcina (Pater Pio)¥0f, Ordpr, ¥fGed¥0f¥lOff: StB°III°(²2010),°S.°1371¥pw¥t¥fMs vom Hl¥0f¥be¥w¥fMs¥0f:°HR°/°MBkl°1244f°/°MBErg²°17°/°Com°MFr°7¥_8°– ¥fML°VI°ᴺ603¥0f¥l¥vL:¥0v¥tGal°2¥v,19¥_20¥0v¥tML°VI°865¥l¥vAPs:¥0v¥tPs°128¥v,1¥_2.3.4¥_5¥0v°(R:°¥v1¥0v)¥t864¥l¥vREv:¥0v¥tLk°21¥v,36¥0v¥t483¥l¥vEv:¥0v¥tMt°16¥v,24¥_27¥0v¥t669¥loder vom Ged des hl.°Franz von Assisi°(ML°VI°632/ᴺ631)¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute ist der ¥fGedenktag des hl. Papstes Linus¥0f, der als erster Nachfolger des Apostels Petrus wahrscheinlich ab dem Jahr 67 Bischof von Rom war und im Jahr 79 das Martyrium erlitt. Er gehört zu den seit alten Zeiten verehrten Heiligen, die im Römischen Messkanon genannt werden, deren Gedenktag heute aber nicht mehr im ARK verzeichnet ist. Durch die ¥fWahl des Hg°I¥0f kann sein Gedächtnis weiter geehrt werden.¥p",
        "deceased": "",
        "deceased_more": "1955 †¥tJoseph°Ehrlich°(Breslau),°Religions-Prof.°i.R., Ershausen¥p1981 †¥tPaul°Weyer, Pfr.i.R., GR, Cölbe¥p1983 †¥tAdolf°Schuchert, Pfr.i.R., Prälat,°Fulda¥p1988 †¥tP.°Ludwig°Böhm°OFM, Pfarrer°in°Bad°Soden¥-Salmünster¥-Alsberg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "24": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 25.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Rupert und hl.°Virgil¥0f, Bi, Glbb, ¥fGed¥0f°(RK) – BuM°eig – eig°Präf¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°210/²208;°Gg°7/²5;°Sg°153/²151¥0w¥p",
        "notes": "",
        "deceased": "2007 †¥tGerhard°Kostka°(Oppeln/Fulda), Pfr.i.R., Mannheim¥p2007 †¥tWolfgang°Halama, OStR°i.K.i.R., Msgr., Trier¥p2010 †¥tWolfgang°Müller, Pfr.i.R., Hünfeld¥p2015 †¥tP.°Erwin°Schmelz°OFM,°Fulda¥p2018 †¥tAugustinus°Baumgarten, Pfr.i.R., Niederkassel¥p",
        "deceased_more": "1979 †¥tFranz°Hock, Pfarrer°in°Schrecksbach¥p1986 †¥tDr.°Joseph°Reindl°(Meißen), Prof., Erfurt¥p2007 †¥tGerhard°Kostka°(Oppeln/Fulda), Pfr.i.R., Mannheim¥p2007 †¥tWolfgang°Halama, OStR°i.K.i.R., Msgr., Trier¥p2010 †¥tWolfgang°Müller, Pfr.i.R., Hünfeld¥p2015 †¥tP.°Erwin°Schmelz°OFM,°Fulda¥p2018 †¥tAugustinus°Baumgarten, Pfr.i.R., Niederkassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "25": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 25.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Nikolaus von Flüe¥0f, Einsiedler, Friedensstifter, ¥fGed¥0f°(RK) – BuM°eig°–°eig°Präf¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°57,2/²55,2;°Gg°1105/²1137;°Sg°526,5¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "26": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 25.°Woche°im°Jahreskreis¥pr¥tOder ¥fhl. Kosmas und hl.°Damian¥0f, Ärzte, Märt, ¥fGed¥0f°– n.B.°Hg°I¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°309,12;°Gg°350,8;°Sg°525,3¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1926 †¥tJohannes°Joseph°Medler, Dechant, Pfarrer°in°Geisa¥p1937 †¥tJohannes°Golbach, Pfarrer°in°Simmershausen¥p1953 †¥tBurkard°Zentgraf,°Kpl.i.R., Eisenach¥p1975 †¥tJosef°Scherer, Pfr.i.R., GR, Fulda¥p1976 †¥tP.°Badulf°Horsten°OFMCap, Pfarrer°in°Reichensachsen¥p1993 †¥tPeter°Hostombe,°Caritasdirektor°in°Erfurt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "27": {
        "liturgy": "¥fSa¥0f¥t¥fHl. Vinzenz von Paul¥0f, Pr, Ordgr, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged,°BuM°eig¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1958 †¥tKarl°Rotter°(Olmütz), Pfr.i.R., Borken¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "28": {
        "liturgy": "¥fSo¥0f¥a¥t¥f26. Sonntag im Jahreskreis¥0f – ¥fWelttag°des°Migranten°und°Flüchtlings¥0f¥lPsalt:°II.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute ist der ¥f111. Welttag des Migranten und Flüchtlings¥0f. Papst Franziskus hat am 20. November 2018 den „Welttag des Migranten und Flüchtlings“ vom bisherigen 19. Januar auf den letzten Sonntag im September verlegt. Papstbotschaft zum Welttag, besondere Fürbitten.¥p¥sDas ¥fFest der hl. Lioba¥0f und die ¥fGed der hll. Wenzel und Laurentius Ruiz und°Gefährten¥0f entfallen in diesem Jahr.¥p¥sAuch in den Sonntagsmessen kann der Hymnus zur Vesper der hl. Lioba aus den „Eigenfeiern der Diözese Fulda – Stundengebet“ nach der Melodie von GL°489 als Gemeindelied gesungen werden (Liedblatt zum Download auf www.direktorium.bistum-fulda.de).¥p",
        "deceased": "2011 †¥tP.°Ernst°Rochner°OFMCap, GR, Werne¥p",
        "deceased_more": "1976 †¥tP.°Hermann°Home°SAC, Pfr.i.R., Limburg¥p1992 †¥tP. Dr.°Horestes°Pfeiler°SM¥p2011 †¥tP.°Ernst°Rochner°OFMCap, GR, Werne¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "29": {
        "liturgy": "¥fMo¥0f¥t¥qfHll. Erzengel Michael, Gabriel und Raphael¥0f, ¥fFest¥0f¥lTe Deum – Kl.°Hore: eig Ant, Ps vom°Wt¥pw¥t¥fMs eig¥0f, Gl, Präf°Engel, FSS:°MB°549¥p",
        "notes": "¥fHinweis:¥0f ¥sZum Fest der hll. Erzengel Michael, Gabriel und Raphael passt das Lied GL°539. Für den Gesang der Hymnen aus dem Stundenbuch als Gemeindelied steht unter www.direktorium.bistum-fulda.de ein Liedblatt zum Download bereit.¥p",
        "deceased": "",
        "deceased_more": "1920 †¥tFlorentin°Jüngst, Pfarrer°in°Geismar¥p1945 †¥tFranz°Kleeschulte,°Kanzleidirektor°in°Fulda¥p1949 †¥tDDr.°Emil°Weber, Prof., Dr.°theol.°et°rer.pol., Domkapitular,°Fulda¥p1962 †¥tJohann°Waclawec°(Königgrätz), Pfr.i.R., Gemünden/Wohra¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "30": {
        "liturgy": "¥fDi¥0f¥t¥fHl. Hieronymus¥0f, Pr, Kl, ¥fGed¥0f  ¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "2001 †¥tKarl°Ditsche°(Meißen), Pfr.i.R., Fulda¥p",
        "deceased_more": "1955 †¥tKarl°Lippert, Pfarrer°in°Großkrotzenburg¥p1971 †¥tWerner°Lerch, Pfr.i.R., GR, Deuna¥p1984 †¥tDr.°Hans°Kluge°(Breslau), Dr.°phil., OStR°i.R., Hanau¥p1987 †¥tFranz°Steffen°(Paderborn), Pfr.i.R., Neustadt¥p2001 †¥tKarl°Ditsche°(Meißen), Pfr.i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      }
    },
    "10": {
      "1": {
        "liturgy": "¥fMi¥0f¥t¥fHl. Theresia vom Kinde Jesus (von Lisieux)¥0f, Ord,°Kl, ¥fPatronin der Weltmission¥0f, ¥fGed¥0f¥pw¥t¥fMs von der Hl¥0f – Off°vom°Ged,°BuM°eig¥p",
        "notes": "¥fHinweise:¥0f¥p¥sIm Oktober werden ¥fRosenkranzandachten¥0f gehalten und wird den Gläubigen das ¥fRosenkranzgebet¥0f besonders empfohlen. Für die ¥fWeltmission¥0f möge besonders gebetet werden.¥p¥s¥fMitbrüder, die in den letzten drei Monaten des vorigen Jahres verstorben sind¥0f, können wegen des Redaktionsschlusses des Direktoriums im folgenden Kalendarium an ihrem 1. Todestag leider nicht genannt werden.¥p",
        "deceased": "2011 †¥tDDr.°Gerhard°Matern°(Ermland/Fulda), Prof.°em., Dr.°phil., Dr.°theol.°habil., Msgr., Fulda¥p",
        "deceased_more": "1968 †¥tDDr.°Josef°Huhn, Prof.°em., Dr.°theol.°et°phil., Fulda¥p1984 †¥tRudolf°Lenz, Pfr.i.R., Fulda¥p2011 †¥tDDr.°Gerhard°Matern°(Ermland/Fulda), Prof.°em., Dr.°phil., Dr.°theol.°habil., Msgr., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "2": {
        "liturgy": "¥fDo¥0f¥t¥fHeilige Schutzengel¥0f, ¥fGed¥0f – ¥fPriesterdonnerstag¥0f – Inv,°Hy°zur°Lh°und°LuV°eig – Kl.°Hore:°Hy,°Ant°u.°Ps°vom°Wt,°sonst°eig¥pw¥t¥fMs vom Ged¥0f, eig°Ev, EngelPräf¥pw¥tOder ggf.°¥fMs um Priesterberufe¥0f ¥w(MB°1035f/²1057),¥lL°und°Ev vom°Tag oder aus°den°AuswL¥0w¥p",
        "notes": "¥fHinweise:¥0f¥p¥sZum Gedenktag der hll.¥°Schutzengel passen die Lieder GL°540 und GL°870. Für den Gesang des Hymnus aus dem Stundenbuch als Gemeindelied steht unter www.direktorium.bistum-fulda.de ein Liedblatt zum Download bereit.¥p¥s¥fZum Priesterdonnerstag (monatl. Gebetstag für geistliche Berufe):¥0f Die Votivmesse ist nur bedingt erlaubt (s.°o.°Kap.°III.D.3.). – Fürbitte(n) um Priesterberufungen. – Thema: „Wer ein Kind aufnimmt, nimmt mich auf“ (Mt 18¥v,5¥0v). Intention: Für alle, die sich für Kinder und Schutzbefohlene einsetzen.¥p",
        "deceased": "2000 †¥tDr.°Balthasar°Gareis°(Bamberg), Prof., Prälat, GR, Fulda¥p",
        "deceased_more": "1931 †¥tPaul°Berger, Pfarrer°in°Schachtebich¥p1951 †¥tDamian°Herbert, Pfr.i.R., Fulda¥p2000 †¥tDr.°Balthasar°Gareis°(Bamberg), Prof., Prälat, GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "3": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 26.°Woche°im°Jahreskreis – ¥fHerz¥-Jesu¥-Freitag¥0f – ¥fTag°der°deutschen°Einheit¥0f¥pw¥tOder ¥fMs um Frieden und Gerechtigkeit¥0f, ¥wMB°1057ff/²1082f, L°und°Ev vom Tag oder aus den AuswL°(ML°VIII°201¥_208)¥0w¥pw¥tOder ¥fMs¥0f: Tg°für Heimat und Vaterland und die bürgerliche Gemeinschaft MB°1054/²1078, Gg°und°Sg°MB°1048/²1070, Präf und Hg „Jesus,°unser°Weg“ (Hg°für Messen für bes.°Anliegen°III), L°und°Ev vom Tag oder aus den AuswL°(ML°VIII°170¥_200)¥pw¥tOder ¥fVotivmesse vom heiligsten Herzen Jesu¥0f¥l¥w(MB°1100f/²1132f oder 257ff), Herz¥-Jesu¥-Präf,¥lL°und°Ev°vom°Tag oder aus°den°AuswL¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°307,7;°Gg°349,5;°Sg°1097/²1129¥0w¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute am ¥f„Tag der deutschen Einheit“¥0f möge in den Fürbitten auch für diese Anliegen gebetet werden. Es kann eine geeignete Votivmesse gewählt werden (siehe unten). Auch ökumenische Gottesdienste oder ggf.°Gebetstreffen der Religionen und gemeinsame Begegnungen eignen sich für diesen Tag. Vgl. hierzu: Arbeitshilfe Nr. 170 der DBK: Leitlinien für das Gebet bei Treffen von Christen, Juden und Muslimen. Eine Handreichung der deutschen Bischöfe. 2., überarbeitete und aktualisierte Auflage 24. Juni 2008.¥p¥sHeute am ¥f„Tag der Offenen Moschee“¥0f der Muslime in Deutschland möge in den Fürbitten auch für respektvolle Begegnungen, den notwendigen und aufrichtigen Dialog und das ehrliche und gute Zusammenwirken von Christen und Muslimen für den Schutz und die Förderung von sozialer Gerechtigkeit, der sittlichen Güter sowie des Friedens und der (Religions-)Freiheit für alle Menschen gebetet werden.¥p¥s¥fZum°Herz¥-Jesu¥-Fr:¥0f Die Votivmesse ist erlaubt.¥p",
        "deceased": "1998 †¥tIgnatz°Kleweta°(Olmütz), Pfr.i.R., Vöhl¥p",
        "deceased_more": "1958 †¥tAugust°Gremler, Pfr.i.R., Schachtebich¥p1961 †¥tJohannes°Böhm,°Pfarrkurat°in°Cornberg¥p1993 †¥tKarl°Bott, Pfr.i.R., GR, Bad°Salzschlirf¥p1998 †¥tIgnatz°Kleweta°(Olmütz), Pfr.i.R., Vöhl¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "4": {
        "liturgy": "¥fSa¥0f¥t¥fHl. Franz von Assisi¥0f, Ordgr, ¥fGed¥0f – ¥fHerz¥-Mariä¥-Samstag¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged,°BuM°eig¥pw¥tOder ggf.°¥fVotivmesse vom Unbefleckten Herzen Mariä¥0f, ¥wMBm°und°MLm°Nr.°28,°eig°Präf¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute endet die „Ökumenische Schöpfungszeit“ (vgl. Hinweis zum 1.°September).¥p¥sHeute eignet sich das Lied zum Sonnengesang des hl.¥°Franz von Assisi GL°466 oder das Gebet dazu GL°19¥v,2¥0v mit dem Kehrvers GL°559.¥p¥s¥fZum Herz¥-Mariä¥-Sa:¥0f Die Votivmesse ist nur bedingt erlaubt (s.°o.°Kap.°III.D.3.).¥p",
        "deceased": "",
        "deceased_more": "1943 †¥tFranz°Winter, Pfarrer°in°Flieden¥p1961 †¥tFranz°Sittarz°(Köln), Pfarrer°in°Bad°Langensalza¥-Land¥p1986 †¥tP.°Paul°Schilling°SDB, Pfarrer°in°Oberkaufungen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "5": {
        "liturgy": "¥fSo¥0f¥a¥t¥f27. Sonntag im Jahreskreis¥0f – ¥fErntedanksonntag¥0f¥lPsalt:°III.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥pw/g¥tOder ¥fMs zum Erntedank¥0f, MB°1066f/²1094f, Gl,°Cr, bes. Fürbitten, SoPräf°V, n.B.°Hg°IV, FSS Benediktionale°S.°71 (= MB°536f „An Neujahr“, jedoch ohne die Worte „im neuen Jahr“ im ersten Abschnitt) oder MB°566f; LL und Ev vom So oder aus den AuswL ML°VIII°245¥_252; 286ff¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fHeute¥0f wird das ¥fErntedankfest¥0f gefeiert. Es kann das ¥fMessformular „Zum Erntedank“¥0f genommen werden. Dabei geschieht die ¥fSegnung der Erntegaben durch das Gabengebet¥0f (vgl. Benediktionale°S.°66). In allen Messen werden besondere Fürbitten gehalten (z.B. Benediktionale°S.°69f, jedoch ohne das Vaterunser vor dem Abschlussgebet). Es wird empfohlen, an die Hauptgottesdienste eine ¥fkurze Dankandacht mit Te°Deum und sakramentalem Segen¥0f anzuschließen, wenn für diesen Anlass nicht noch eine eigene Feier vorgesehen ist. Erfolgt die Segnung der Erntegaben nicht in der Messfeier, sondern in einem eigenen Wortgottesdienst, kann die Segensfeier aus dem s.°Benediktionale°Nr.°10,°S.°65ff, genommen werden.¥p¥sIn der kommenden Woche werden die ¥fHerbstquatember¥0f (vgl.°GOK°45¥_47) an einem (oder mehreren) festfreien Werktag(en) (nach Wahl) begangen als Tag(e) religiöser Erneuerung. ¥fThema: Not in der Welt¥0f. Messformular: Quatembermesse, MB°269, oder eine der „Messen für besondere Anliegen, z.°B. Nr.°15, 28, 29 oder 38 (MB°1050¥_1079/²1072¥_1109), Wt-Präf, Farbe: violett. L°u°Ev:°Perikopen für besondere Anliegen, ML°VIII°144¥_160; 252¥_285. Durch Fasten, Buße und Werke der Nächstenliebe kann jeder Christ persönlich nach Erneuerung streben.¥p¥sDer ¥fGedenktag der hl. Maria Faustina Kowalska¥0f entfällt in diesem Jahr.¥p",
        "deceased": "1999 †¥tPaul°Gray, Pfr.i.R., GR, Hünfeld¥p",
        "deceased_more": "1928 †¥tAdolf°Schmidt, Pfarrer°in°Schleid¥p1934 †¥tDDr.°Konrad°Weber, Dr.°theol.°et°phil., Pfr.i.R., Ehrendomkapitular,°Marburg¥p1936 †¥tJoseph°Selzer, Dechant, Pfarrer°in°Fritzlar¥p1945 †¥tBruno°Werner, Pfr.i.R., Diedorf¥p1993 †¥tHermann¥-Josef°Siebrand, Pfr.i.R., Lenkrode¥p1999 †¥tPaul°Gray, Pfr.i.R., GR, Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "6": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 27.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Bruno¥0f, Mönch, Einsiedler, Ordgr, ¥fGed¥0f°(GK/RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°237;°Gg°202/²200;°Sg°300¥0w¥p",
        "notes": "",
        "deceased": "2010 †¥tWolfram°Fröhlig,°Diakon,°Petersberg¥-Untergötzenhof¥p",
        "deceased_more": "1956 †¥tJohannes Dröder, Pfr.i.R., Berlin¥-Lichtenrade¥p2010 †¥tWolfram°Fröhlig,°Diakon,°Petersberg¥-Untergötzenhof¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "7": {
        "liturgy": "¥fDi¥0f¥t¥fUnsere Liebe Frau vom Rosenkranz¥0f, ¥fGed¥0f¥pw¥t¥fMs vom Ged¥0f, MarPräf – Off°vom°Ged,°LuV°eig ¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1960 †¥tRichard°Schulte, Pfr.i.R., Erfurt¥p1964 †¥tKarl°Altmann°(Leitmeritz), Pfarrer°in°Trutzhain¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "8": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 27.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°309,13;°Gg°349,4;°Sg°528,10¥0w¥p",
        "notes": "",
        "deceased": "2023 †¥tAlfred°Döppenschmitt, Pfr.i.R., GR, Fulda¥p",
        "deceased_more": "1986 †¥tJohannes°Rhode, Pfr.i.R., Küllstedt¥p1993 †¥tJohannes°Haparta°(Hildesheim), Pfr.i.R., Kirchhain¥p2023 †¥tAlfred°Döppenschmitt, Pfr.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "9": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 27.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Gunther von Thüringen¥0f, Einsiedler, ¥fGed¥0f°(FD)¥bf¥w¥vL:¥0v¥tPhil°3¥v,8¥_14¥0v¥tML°VI°514/ᴺ504¥l¥vAPs:¥0v¥tPs°15¥v,2¥_3.4.5¥0v°(R:°vgl.°¥v1b¥0v)¥t863/ᴺ413¥l¥vREv+Ev:¥0v°Lk°14¥v,25¥_33¥0v¥t488f/ᴺ472¥0w¥pr¥tOder ¥fhll. Dionysius¥0f, Bi, ¥fund°Gefährten¥0f, Märtt, ¥fGed¥0f¥pw¥tOder ¥fhl. Johannes Leonardi¥0f, Pr, Ordgr, ¥fGed¥0f¥pw¥tOder ¥fMs vom hl. John Henry Newman¥0f, Pr¥be¥w¥fMs¥0f: HR (im Tagesgebet ist ggf. „selig“ durch „heilig“ zu ersetzen)¥l¥vL:¥0v¥t2°Tim°3¥v,14¥0v°¥_°4¥v,2¥0v¥t¥fML°C/III¥0f°370/ᴺ379¥l¥vAPs:¥0v¥tPs°27¥v,1.4.6b+8.13¥_14¥0v(R:°¥v1a¥0v)¥tvgl.°543/ᴺ555¥l¥vREv:¥0v¥tJoh°8¥v,31b¥_32¥0v¥t–––¥l¥vEv:¥0v¥tLk°1¥v,1¥_4;¥0v°4¥v,14¥_21¥0v¥t258/ᴺ264¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg+Gg°214f/²213f;°Sg°525,2¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Gedenktag des hl. Johannes Leonardi¥0f: Der Heilige wurde von Papst Benedikt XVI. 2006 zum Patron der Apotheker ernannt.¥p",
        "deceased": "2009 †¥tJohannes°Wagner, Pfr.i.R., Hünfeld¥-Mackenzell¥p",
        "deceased_more": "1958 †¥tAloys°Heinebrodt, Dechant, Pfarrer°in°Weimar¥p1969 †¥tP.°Ludolf°Janssen°OFMCap, Pfarrer°in°Cornberg¥p1971 †¥tPius°Most, Pfr.i.R., GR, Fulda¥p1990 †¥tEdmund°Döring, Pfr.i.R., Heiligenstadt¥p2009 †¥tJohannes°Wagner, Pfr.i.R., Hünfeld¥-Mackenzell¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "10": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 27.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°313,22;°Gg°234/²233;°Sg°208,2/²206,2¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1954 †¥tWilhelm°Pfeifer,°StR°i.R., Pfarrkurat°in°Elters¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "11": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 27.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Johannes XXIII.¥0f, Pp, ¥fGed¥0f¥be¥w¥fMs¥0f: HR°/°Com°Ht°1+2°– ¥fML°VI°ᴺ646¥0f¥l¥vL:¥0v¥tEph°4¥v,1¥_7.11¥_13¥0v¥tML°VI°602¥l¥vAPs:¥0v¥tPs°23¥v,1¥_3.4.5.6¥0v°(R:°¥v1¥0v)¥t598¥l¥vREv:¥0v¥tJoh°10¥v,14¥0v¥t598¥l¥vEv:¥0v¥tJoh°21¥v,1.15¥_17¥0v¥t539¥0w¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°303f¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "2006 †¥tHubert°Caris, Pfr.i.R., Münchhausen¥p",
        "deceased_more": "1990 †¥tHeinrich°Richard, Pfarrer°in°Bad°Liebenstein¥p2006 †¥tHubert°Caris, Pfr.i.R., Münchhausen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "12": {
        "liturgy": "¥fSo¥0f¥a¥t¥f28. Sonntag im Jahreskreis¥0f¥lPsalt:°IV.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fLektionar zum StB I/8¥rLektStB  I/8¥0r¥0f¥p",
        "deceased": "",
        "deceased_more": "1938 †¥tAugust°May, Pfarrer°in°Bernterode/Krs.°Worbis¥p1963 †¥tMaximilian°Zips°(Olmütz), Pfr.i.R., Eckardroth/Krs.°Schlüchtern¥p1992 †¥tHerwig°Bartel, Pfarrer°in°Bad°Berka¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "13": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 28.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°187/²185;°Gg°234/²233;°Sg°200/²198¥0w¥p",
        "notes": "",
        "deceased": "1997 †¥tHermann¥-Josef°Wagner, GR, Pfarrer°in°Borken¥p",
        "deceased_more": "1997 †¥tHermann¥-Josef°Wagner, GR, Pfarrer°in°Borken¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "14": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 28.°Woche°im°Jahreskreis¥pr¥tOder ¥fhl. Kallistus I.¥0f, Pp, Märt, ¥fGed¥0f¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°310,16;°Gg°1058/²1082;°Sg°1079/²1109¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1924 †¥tAdam°Kramm, Pfarrer°in°Schröck¥p1932 †¥tOtto°Höppner, Pfr.i.R., Struth¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "15": {
        "liturgy": "¥fMi¥0f¥t¥fHl. Theresia von Jesus (von Avila)¥0f, Ord, Kl, ¥fGed¥0f¥pw¥t¥fMs von der Hl¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1954 †¥tJohannes°Brzezinka°(Breslau), Pfr.i.R., Niederorschel¥p1971 †¥tJoseph°Faulstich, Pfr.i.R., GR, Fulda¥p1993 †¥tDr.°Heinz°Reinelt°(Breslau), Prof.°em., Prälat,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "16": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 28.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Lullus¥0f, Bi, ¥fGed¥0f (FD)¥bf¥w¥vL:¥0v¥tEz°34¥v,11¥_16¥0v¥tML°VI°597/ᴺ591¥l¥vL°(ggf.°2.°L):¥0v°1°Kor°4¥v,1¥_5¥0v¥t149/ᴺ144¥l¥vAPs:¥0v¥tPs°16¥v,1¥_2+5.7¥_8.9+11¥0v°(R:°vgl.°¥v5a¥0v)¥t633/ᴺ631¥l¥vREv+Ev:¥0v°Joh°17¥v,20¥_26¥0v¥t732f/ᴺ733¥0w¥pw¥tOder ¥fhl. Margareta Maria Alacoque¥0f, Ord, ¥fGed¥0f¥pw¥tOder ¥fhl. Hedwig¥0f, Herzogin, ¥fGed¥0f°(RK/GK) – BuM°eig¥pw¥tOder ¥fhl. Gallus¥0f, Mönch, Einsiedler, Glb, ¥fGed¥0f°(RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°310,16;°Gg°349,5;°Sg°527,8¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute ist der Welternährungstag der Vereinten Nationen (UN), auch „Welthungertag“ genannt, und der „Welttag des Brotes“. Papstbotschaft dazu unter www.vativan.va › Botschaften › Welternährungstag ¥p",
        "deceased": "2016 †¥tOtto°Wengenmair, Pfr.i.R., OStR°i.R., Msgr., GR, Eschwege¥p2020 †¥tWincenty°Krzyżak°(Tarnów/Fulda), Pfr.i.R., GR, Żmiąca/Polen¥p",
        "deceased_more": "1977 †¥tP.°Bernhard°Glatzel°SVD, Pfr.i.R., Sankt°Augustin¥p1983 †¥tVinzenz°Ahmann, Pfr.i.R., Ahaus¥-Wüllen¥p1986 †¥tGerd°Büchner, Pfarrer°in°Friedrichslohra¥p2016 †¥tOtto°Wengenmair, Pfr.i.R., OStR°i.R., Msgr., GR, Eschwege¥p2020 †¥tWincenty°Krzyżak°(Tarnów/Fulda), Pfr.i.R., GR, Żmiąca/Polen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "17": {
        "liturgy": "¥fFr¥0f¥t¥fHl. Ignatius von Antiochien¥0f, Bi, Märt, ¥fGed¥0f¥pr¥t¥fMs vom Hl¥0f, n.B.°Hg°I – Off°vom°Ged,°BuM°eig¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1983 †¥tAloys°Schmand,°Caritasdirektor°i.R., Msgr., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "18": {
        "liturgy": "¥fSa¥0f¥t¥qfHl. Lukas¥0f, Evangelist, ¥fFest¥0f¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pr¥t¥fMs eig¥0f, Gl, ApPräf II, FSS:°MB°558¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1935 †¥tLudwig°Hüber, Pfr.i.R., Wirtheim¥p1970 †¥tPaul°Eiberle°(Caratinga/Brasilien), Pfr.i.R., Großrudestedt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "19": {
        "liturgy": "¥fSo¥0f¥a¥t¥f29. Sonntag im Jahreskreis¥0f¥lPsalt:°I.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥p",
        "notes": "¥fHinweis:¥0f ¥sDie ¥fGedenktage der hll. Johannes de Brébeuf, Isaac Jogues und Gefährten¥0f und ¥fdes hl. Paul vom Kreuz¥0f entfallen in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1949 †¥tWilhelm°Engels, Pfr.i.R., Alsberg¥p1957 †¥tAnton°Nitzge, Pfr.i.R., Volkmarsen¥p1968 †¥tP.°Johann¥-Adam°Hüttel°OMI, Pfarrer°in°Wechmar¥p1971 †¥tReinhold°Goy°(Breslau), Pfarrer°in°Niederkalbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "20": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 29.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Wendelin¥0f, Einsiedler, ¥fGed¥0f°(RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°132/²130;°Gg°170/²168;°Sg°528,12¥0w¥p",
        "notes": "",
        "deceased": "1996 †¥tDr.°Winfried°Leinweber,°Regionaldechant, Dechant, Pfarrer°in°Marburg,°St.°Johannes°Ev.¥p",
        "deceased_more": "1950 †¥tP. Dr.°Desiderius°Breitenstein°OFM, Prof., Fulda¥p1956 †¥tHeinrich°Bergmann, Pfr.i.R., Fulda¥p1981 †¥tDr.°Franz°Alois°Eckert°(Breslau), Pfr.i.R., Worbis¥p1996 †¥tDr.°Winfried°Leinweber,°Regionaldechant, Dechant, Pfarrer°in°Marburg,°St.°Johannes°Ev.¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "21": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 29.°Woche°im°Jahreskreis¥pr¥tOder ¥fhl. Ursula und°Gefährtinnen¥0f, Märtt, ¥fGed¥0f°(RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°3f/²1f¥0w¥p",
        "notes": "",
        "deceased": "2001 †¥tGregor°Paul, Pfr.i.R., GR, Amöneburg¥-Roßdorf¥p",
        "deceased_more": "1970 †¥tHeinrich°Müller, Pfr.i.R., GR, Dechant,°Fulda¥p2001 †¥tGregor°Paul, Pfr.i.R., GR, Amöneburg¥-Roßdorf¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "22": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 29.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Johannes Paul II.¥0f, Pp, ¥fGed¥0f¥be¥w¥fMs¥0f: HR²ᶠᶠ°/°Com°Ht°1+2°– ¥fML°VI°ᴺ675¥0f¥l¥vL:¥0v¥tJes°52¥v,7¥_10¥0v¥tML°VI°678¥l¥vAPs:¥0v¥tPs°96¥v,1¥_2a+2b¥_3.7¥_8.10¥0v°(R:°¥v10a¥0v)¥t510¥l¥vREv+Ev:¥0v°Joh°21¥v,1.15¥_17¥0v¥t539¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°1039f/²1061f¥0w¥p",
        "notes": "",
        "deceased": "2021 †¥tKarl¥-Peter°Klein, Pfr.i.R., GR, Freigericht¥-Bernbach¥p",
        "deceased_more": "1961 †¥tP.°Konrad°Kletzka°SVD,°Pfarrkurat°in°Trendelburg¥p1983 †¥tPaul°Vogt, Pfr.i.R., Bad°Bellingen¥p2021 †¥tKarl¥-Peter°Klein, Pfr.i.R., GR, Freigericht¥-Bernbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "23": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 29.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Johannes von Capestrano¥0f, Ordpr, ¥fGed¥0f°(GK/RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°316,30;°Gg°98/²96;°Sg°100¥0w¥p",
        "notes": "",
        "deceased": "1999 †¥tAloys°Fink, Pfr.i.R., GR, Hünfeld¥p",
        "deceased_more": "1945 †¥tFranz°Mehlmann, Dechant, Pfarrer°in°KämmerzelI¥p1976 †¥tP.°Richard°Hauffen°SDB, Pfr.i.R., GR, Lohfelden¥p1978 †¥tAlfons°Smykalla°(Breslau), Pfarrer°in°Wingerode¥p1981 †¥tWilhelm°Wald, GR, Pfarrer°in°Thalau¥p1999 †¥tAloys°Fink, Pfr.i.R., GR, Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "24": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 29.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Antonius Maria Claret¥0f, Bi, Ordgr, ¥fGed¥0f ¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°312,21;°Gg°234/²233;°Sg°200/²198¥0w¥p",
        "notes": "",
        "deceased": "2003 †¥tAnton°Schmitt, Pfr.i.R., StR°i.K.i.R., Michelstadt¥p",
        "deceased_more": "1944 †¥tFranz°Emil°Weber, Prof., Lic.°theol., StR°i.R., Kassel¥p1944 †¥tHubert°Biermann, Pfr.i.R., Fulda¥p1954 †¥tKarl°Bub, Pfarrer°in°Kleinsassen¥p1969 †¥tJosef°Redemann, Pfr.i.R., Göttingen¥p2003 †¥tAnton°Schmitt, Pfr.i.R., StR°i.K.i.R., Michelstadt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "25": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 29.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°313,22;°Gg°348,2;°Sg°528,11¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1937 †¥tAnton°Genau, Dechant, Pfarrer°in°Rengelrode¥p1953 †¥tKarl°Vatteroth, Pfr.i.R., Kleinbartloff¥p1978 †¥tAnton°Tresp, Pfarrer°in°Großalmerode¥p1980 †¥tHeinrich°Kraut, Pfr.i.R., GR, Eisenach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "26": {
        "liturgy": "¥fSo¥0f¥a¥t¥f30. Sonntag im Jahreskreis¥0f – ¥fWeltmissionssonntag¥0f¥lPsalt:°II.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, SoPräf, FSS¥pg¥tOder ¥fVotivmesse für die Ausbreitung des Evangeliums¥0f (MB°1047ff/²1069ff), Gl,°Cr, bes.°Fürbitten, SoPräf°I°oder°III°oder°VIII oder Präf und Hg°„Jesus,°unser°Weg“ (Hg°für Messen für besondere Anliegen°III), FSS:°MB°552, L°und°Ev vom So oder aus den AuswL (ML°VIII°133¥_144).¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fHeute wird der Weltmissionssonntag begangen.¥0f Im Hauptgottesdienst kann die ¥fVotivmesse für die Ausbreitung des Evangeliums¥0f genommen werden. Papstbotschaft zum Weltmissionssonntag, Arbeitshilfe, besondere Fürbitten.¥p¥s¥fHeute wird hingewiesen auf die vollkommenen Ablässe, die zu Allerheiligen und Allerseelen für Verstorbene gewonnen werden können.¥0f Zur Gewinnung gehören:¥pa)°¥fdie allgemeinen Bedingungen¥0f: sakramentale Beichte, Kommunionempfang und Gebet nach der Meinung des Hl. Vaters (Vaterunser und Glaubensbekenntnis). Diese Bedingungen können auch mehrere Tage vor oder nach dem Ablasstag erfüllt werden. Es muss aber jede Anhänglichkeit an eine Sünde ausgeschlossen sein;¥pb) ¥fdie besonderen Bedingungen¥0f:¥p(1)°¥fein Besuch in einer Kirche oder Kapelle¥0f am Allerseelentage, jeweils schon ab Mittag des Vortages, mit Gebet (Vaterunser und Glaubensbekenntnis); ¥p(2)°¥foder ein Friedhofsbesuch¥0f und dort Gebet für die Verstorbenen.¥p¥fDieser Ablass kann an jedem Tag vom 1. bis 8. November gewonnen werden.¥0f Man kann nicht mehrere vollkommene Ablässe an einem Tag gewinnen. Eine Beichte reicht aus, mehrere vollkommene Ablässe an verschiedenen Tagen zu gewinnen, nicht aber eine einzige Kommunion und nicht das einmalige Gebet nach der Meinung des Papstes. Fehlt die volle Disposition oder bleibt eine der Bedingungen unerfüllt, gewinnt man einen Teilablass für die Verstorbenen. Ein solcher kann in diesen und auch an den übrigen Tagen des Jahres durch Friedhofsbesuch wiederholt gewonnen werden (vgl. Enchiridion Indulgentiarum, 3. Aufl. 1986, pag. 74, n. 67, und pag. 52, n. 13).¥p¥s¥fIn der kommenden Nacht endet die Sommerzeit.¥0f¥p¥sDer ¥fGed des hl. Witta (Albuin)¥0f entfällt in diesem Jahr.¥p",
        "deceased": "1995 †¥tJosef°Albinger, Pfr.i.R., GR, Poppenhausen¥p2021 †¥tDr.°Werner°Marschall°(Görlitz/Fulda), Prof.°em., Dr.°theol.°habil., Msgr., Fulda¥-Horas¥p2022 †¥tAlois°Zimmer, OStR°i.K.i.R., GR, Kassel¥p",
        "deceased_more": "1976 †¥tHeinz°Friedrich, Pfarrer°in°Heldrungen¥p1995 †¥tJosef°Albinger, Pfr.i.R., GR, Poppenhausen¥p2021 †¥tDr.°Werner°Marschall°(Görlitz/Fulda), Prof.°em., Dr.°theol.°habil., Msgr., Fulda¥-Horas¥p2022 †¥tAlois°Zimmer, OStR°i.K.i.R., GR, Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "27": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 30.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°306,4;°Gg°230;°Sg°525,2¥0w¥p",
        "notes": "",
        "deceased": "2009 †¥tDDr.°Reinhold°Weier, Prof.°em., Trier¥p2016 †¥tErich°Kiel, Pfr.i.R., GR, Haunetal¥-Oberstoppel¥p",
        "deceased_more": "1950 †¥tP.°Karl°Brungs°SJ,°Pfarrvikar°in°Zella¥-Mehlis¥p2009 †¥tDDr.°Reinhold°Weier, Prof.°em., Trier¥p2016 †¥tErich°Kiel, Pfr.i.R., GR, Haunetal¥-Oberstoppel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "28": {
        "liturgy": "¥fDi¥0f¥t¥qfHl. Simon und hl. Judas¥0f, App, ¥fFest¥0f¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pr¥t¥fMs eig¥0f, Gl, ApPräf, n.B.°Hg°I, FSS:°MB°558¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1924 †¥tJoseph°Herbener, Prälat,°Domdechant,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "29": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 30.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°157/²155;°Gg°234/²233;°Sg°296¥0w¥p",
        "notes": "",
        "deceased": "2000 †¥tRudolf°Gollbach, Pfr.i.R., GR, Flieden¥p2000 †¥tKarl°Wiegel, Pfr.i.R., Geisa¥p2007 †¥tP.°Stefan°Krenzer°OFM,°Fulda¥p",
        "deceased_more": "2000 †¥tRudolf°Gollbach, Pfr.i.R., GR, Flieden¥p2000 †¥tKarl°Wiegel, Pfr.i.R., Geisa¥p2007 †¥tP.°Stefan°Krenzer°OFM,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "30": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 30.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°187/²185;°Gg°350,8;°Sg°527,8¥0w¥p",
        "notes": "",
        "deceased": "1996 †¥tGeorg°Knappik, Pfr.i.R., Fronhausen¥p1999 †¥tWerner°Linge,°Diakon,°Kassel¥p2011 †¥tJosef°Kesting,°Msgr., Direktor°i.R., Heiligenstadt¥p2022 †¥tDr.°Winfried°Kurzschenkel, OStR°i.K.i.R., Fulda¥p",
        "deceased_more": "1945 †¥tDDr.°Joseph°Flügel, Dr.°theol.°et°phil., Dechant, Pfarrer°in°Weyhers¥p1996 †¥tGeorg°Knappik, Pfr.i.R., Fronhausen¥p1999 †¥tWerner°Linge,°Diakon,°Kassel¥p2011 †¥tJosef°Kesting,°Msgr., Direktor°i.R., Heiligenstadt¥p2022 †¥tDr.°Winfried°Kurzschenkel, OStR°i.K.i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "31": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 30.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Wolfgang¥0f, Bi, ¥fGed¥0f°(RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°319,39;°Gg°245;°Sg°525,1¥0w¥pw¥t¥kabends:¥0k ggf.°Vorabendmesse°vom°H – ¥f1.°Vp°vom°folg°H¥0f°–°¥f1.°Kp°vom°So¥0f¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1983 †¥tJosef°Becker, Pfr.i.R., GR, Morsbach/Sieg¥p1991 †¥tWilhelm°Schröer, Pfr.i.R., Hasselroth¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      }
    },
    "11": {
      "1": {
        "liturgy": "¥fSa¥0f¥a¥t¥qhAllerheiligen¥0f, ¥fHochfest¥0f¥lTe Deum – Kl.°Hore: eig Ant,°ErgPs¥pw¥t¥fMs eig¥0f, Gl,°Cr, eig°Präf, in°den Hg°I¥_III eig°Einschub, FSS:°MB°560 – ¥fAbendmessen°vom°H¥0f°– ¥f2.°Vp°vom°H¥0f°–°¥f2.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fDas Hochfest Allerheiligen ist im Bistum Fulda kirchlich gebotener Feiertag.¥0f Es besteht ¥fApplikations- sowie Sonn- und Feiertagspflicht¥0f (s.°o.°Kap.°I.C.1.).¥p¥sFinden zu Allerheiligen und Allerseelen auf den Friedhöfen ¥fTotengedächtnisse¥0f statt, soll in ihnen die österliche Auferstehungshoffnung zum Ausdruck kommen. Für die ¥fGräbersegnung¥0f s.°Benediktionale°Nr.°11,°S.°72ff.¥p¥sAuf die ¥fGewinnung der vollkommenen Ablässe vom 1. bis 8.°November¥0f kann nochmals hingewiesen werden (vgl. Hinweis vor dem 26. Oktober).¥p",
        "deceased": "2011 †¥tAlbert°Diedrich, Pfr.i.R., OStR°a.D., Msgr., Frasdorf/Chiemgau¥p",
        "deceased_more": "1948 †¥tSimon°Wehner, Pfr.i.R., GR, Poppenhausen¥p1986 †¥tKarl°Doiwa°(Limburg), Pfr.i.R., Frankenberg/Eder¥p1990 †¥tP.°Siegfried°Budniok°OMI, Pfr.i.R., Erfurt¥p2011 †¥tAlbert°Diedrich, Pfr.i.R., OStR°a.D., Msgr., Frasdorf/Chiemgau¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "2": {
        "liturgy": "¥fSo¥0f¥a¥t¥fAllerseelen¥0f¥l¥fOff¥0f vom 31.°So.°im°Jkr. – Psalt:°III.°Woche – Te°Deum. In der Feier mit dem Volk können Ld°und°Vp von Allerseelen genommen werden (StB°III°971 mit 1269ff bzw. 1295ff; zur°Vp°vgl.°GL°655ff).¥pv/s¥t¥f3 Ms nach Wahl eig¥0f (MB°826–829), ¥fkein Gl, aber°Cr¥0f, Präf von den Verstorbenen, FSS:°MB°564¥l¥w¥fL und Ev:¥0f ML°C/III°440¥_455/ᴺ452¥_467, VI°689¥_705/ᴺ691¥_707 oder VII°401¥_504/ᴺ409¥_518¥0w¥p",
        "notes": "¥fHinweise:¥0f¥p¥sDie Messfeier zum 31. Sonntag im Jkr. entfällt in diesem Jahr.¥p¥s¥fDas Hochfest der Kirchweihe als „Sollemnitas externa“ am allgemeinen Kirchweihsonntag¥0f (1.°Sonntag im November) kann in diesem Jahr ¥fheute nicht, aber am kommenden Sonntag, dem 9. November¥0f, gefeiert werden. Es kann auch am kommenden Sonntag das Gedächtnis und die Feier der eigenen Kirchweihe mit der Feier der Liturgie des Weihefestes der Lateranbasilika auf geeignete Weise mitbedacht und verknüpft werden.¥p¥s¥fAn Allerseelen darf jeder Priester dreimal zelebrieren.¥0f Dabei darf er für die 2. und 3.°Messe ein Stipendium annehmen, das ungekürzt an den Generalvorstand des Bonifatiuswerkes abzuführen ist. Wer für die 2. und/oder 3.°Messe kein Stipendium hat, möge in der Intention des Bonifatiuswerkes zelebrieren und dies dorthin melden. Wer von diesen Möglichkeiten keinen Gebrauch macht, muss, wenn er mehrmals zelebriert, seine 2.°Messe für alle verstorbenen Christgläubigen, die 3.°nach der Meinung des Papstes applizieren.¥p¥s¥fAn Allerseelen¥0f empfiehlt es sich, bei den Messfeiern oder bei Andachten für die Verstorbenen die ¥fOsterkerze im Altarraum¥0f aufzustellen und zu entzünden.¥p¥sAllerseelen steht liturgisch im Rang eines Hochfestes, ohne jedoch Hochfest zu sein (s.°o.°Kap.°I.B.1.°I.°3.).¥p",
        "deceased": "",
        "deceased_more": "1944 †¥tOtto°Gramm,°Stadtpfarrer°in°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "3": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 31.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Hubert¥0f, Bi, ¥fGed¥0f°(RK)¥pw¥tOder ¥fhl. Pirmin¥0f, Abt, Bi, Glb, ¥fGed¥0f°(RK)¥pw¥tOder ¥fhl. Martin von Porres¥0f, Ord, ¥fGed¥0f – BuM°eig¥pw¥tOder ¥fMs vom sel. Rupert Mayer¥0f, Ordpr¥l¥fOff:¥0f StB Ergänzungsheft 1995, S.°29¥_31¥be¥w¥fMs¥0f: HR°/°MBkl°1246¥l¥vL:¥0v¥tEph°6¥v,10¥_20¥0v¥tML°VI°358/ᴺ342¥l¥voder¥0v¥t2°Tim°4¥v,1¥_5¥0v¥t840/ᴺ821¥l¥vAPs:¥0v¥tPs°144¥v,1¥_2c.9¥_10¥0v°(R:°¥v1a¥0v)¥t359/ᴺ343¥l¥vREv:¥0v¥tvgl.°Mt°5¥v,10¥0v¥t827¥v,1¥0v/ᴺ777¥v,1¥0v¥l¥vEv:¥0v¥tMt°10¥v,17¥_20¥0v¥tvgl.°828/ᴺ761¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°311,19;°Gg°351,10;°Sg°527,9¥0w¥p",
        "notes": "",
        "deceased": "2022 †¥tErwin°Lachnit, Pfr.i.R., GR, Poppenhausen¥-Gackenhof¥p",
        "deceased_more": "1970 †¥tHeinrich°Joseph°Becker,°Stadtpfr.i.R., GR, Ehrendomkapitular,°Ehrendechant,°Fritzlar¥p1985 †¥tP.°Philipp°Rotering°OFMCap,°Pfarrkurat°in°Cornberg¥p1986 †¥tWilhelm°Kirchner,°Diakon°i.R., Erfurt¥p2022 †¥tErwin°Lachnit, Pfr.i.R., GR, Poppenhausen¥-Gackenhof¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "4": {
        "liturgy": "¥fDi¥0f¥t¥fHl. Karl Borromäus¥0f, Bi, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged¥p¥l¥kIn allen konsekrierten Kirchen, die nicht ihren wirklichen Weihetag begehen und heute das Hochfest der Kirchweihe feiern:¥0k¥pw¥t¥kabends:¥0k ggf.°¥fVorabendmesse°vom°H¥0f – ¥f1.°Vp°vom°folg°H¥0f°(Com°Kirchweihe)°– ¥f1.°Kp°vom°So¥0f¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1984 †¥tFranz°Habersack, Pfr.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "5": {
        "liturgy": "¥fMi¥0f¥t¥kA. In allen konsekrierten Kirchen, die nicht ihren wirklichen Weihetag begehen und heute das Hochfest der Kirchweihe feiern:¥0k¥p¥t¥qhHochfest der Kirchweihe¥0f (FD)¥lOff vom Com Kirchweihe – Te°Deum – Kl.°Hore:°Ant°aus°dem°Com,°ErgPs¥pw¥t¥fMs aus dem Com Kirchweihe A¥0f (MB°878/²879ff), Gl,°Cr, eig°Präf, in°den Hg°I¥_III eig°Einschub, FSS:°MB°562¥bf¥w¥v1.°L:¥0v¥t1°Kön°8¥v,22¥_23.27¥_30¥0v¥t¥fML°C/III¥0f°475/ᴺ487¥l¥vAPs:¥0v¥tPs°84¥v,2¥_3.4¥_5.10¥_11a¥0v°(R:°vgl.°¥v5¥0v)¥t476/ᴺ488¥l¥v2.°L:¥0v¥tEph°2¥v,19¥_22¥0v¥t486/ᴺ498¥l¥vREv+Ev:¥0v°Joh°2¥v,13¥_22¥0v¥t491/ᴺ503f¥0w ¥l¥f2.°Vp°vom°H°¥_°2.°Kp°vom°So¥0f¥p¥l¥kB. In allen anderen Kirchen:¥0k¥p     ¥t¥fVom Wochentag¥0f – 31.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°166f/²164f¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sZur Feier des ¥fHochfestes der Kirchweihe¥0f heute ist es angebracht, die ¥fApostelkerzen¥0f anzuzünden. Auch können die ¥fApostelleuchter¥0f geschmückt werden.¥p",
        "deceased": "1998 †¥tNorbert°Maas, Pfarrer°in°Breitenberg¥p2012 †¥tDr.°Ludwig°Strecker°(Anápolis/Brasilien), Pfr.i.R., Bischofsvikar,°Michelsneukirchen¥p",
        "deceased_more": "1992 †¥tFranz°Westermann°(Paderborn), Pfr.i.R., Speyer¥p1998 †¥tNorbert°Maas, Pfarrer°in°Breitenberg¥p2012 †¥tDr.°Ludwig°Strecker°(Anápolis/Brasilien), Pfr.i.R., Bischofsvikar,°Michelsneukirchen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "6": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 31.°Woche°im°Jahreskreis – ¥fPriesterdonnerstag¥0f¥pw¥tOder ¥fhl. Leonhard¥0f, Einsiedler, ¥fGed¥0f°(RK)¥pw¥tOder ¥fMs um Priesterberufe¥0f ¥w(MB°1035f/²1057),¥lL°und°Ev vom°Tag oder aus°den°AuswL¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°101/²99;°Gg+Sg°98/²96¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Priesterdonnerstag (monatl. Gebetstag für geistliche Berufe):¥0f Die Votivmesse ist erlaubt. – Fürbitte(n) um Priesterberufungen. – Thema: „Keiner lebt sich selber“ (Röm 14¥v,7¥0v). Intention: Für alle, die in der Caritas Menschen nachgehen.¥p",
        "deceased": "2000 †¥tHerbert°Oberthür, Pfr.i.R., GR, Hünfeld¥p2015 †¥tWolfgang°Heil, Pfr.i.R., Fulda¥p",
        "deceased_more": "1945 †¥tAnton°Fuhlrott, Pfarrer°in°Wüstensachsen¥p1977 †¥tGeorg°Hauck°(Prag/Glatz), Pfarrer°in°Aufenau¥p2000 †¥tHerbert°Oberthür, Pfr.i.R., GR, Hünfeld¥p2015 †¥tWolfgang°Heil, Pfr.i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "7": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 31.°Woche°im°Jahreskreis – ¥fHerz¥-Jesu¥-Freitag¥0f¥pw¥tOder ¥fhl. Willibrord¥0f, Bi, Glb, ¥fGed¥0f°(RK) – BuM°eig°–°eig°Präf¥pw¥tOder ¥fVotivmesse vom heiligsten Herzen Jesu¥0f¥l¥w(MB°1100f/²1132f oder 257ff), Herz¥-Jesu¥-Präf,¥lL°und°Ev°vom°Tag oder aus°den°AuswL¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°313,22;°Gg°351,11;°Sg°525,1¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum°Herz¥-Jesu¥-Fr:¥0f Die Votivmesse ist erlaubt.¥p",
        "deceased": "2007 †¥tDr.°Werner°Jacobs, Prof., Prälat,°Fulda¥p",
        "deceased_more": "1949 †¥tHermann°von°Keitz, Pfarrer°in°Fulda¥-Horas¥p1949 †¥tPius°Botthoff, Pfarrer°in°Leinefelde¥p2007 †¥tDr.°Werner°Jacobs, Prof., Prälat,°Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "8": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 31.°Woche°im°Jahreskreis – ¥fHerz¥-Mariä¥-Samstag¥0f¥pw¥tOder ¥fVotivmesse vom Unbefleckten Herzen Mariä¥0f, ¥wMBm°und°MLm°Nr.°28,°eig°Präf¥0w¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg+Gg°94/²92;°Sg°528,10¥0w¥pw¥t¥kabends:¥0k ggf.°¥fVorabendmesse°vom°F°bzw.°H¥0f – ¥f1.°Vp°vom°folg°F°bzw.°H¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Herz¥-Mariä¥-Sa:¥0f Die Votivmesse ist erlaubt.¥p",
        "deceased": "",
        "deceased_more": "1937 †¥tLudwig°Braun, Pfarrer°in°Schröck¥p1957 †¥tKarl°Becker, Pfr.i.R., Fulda¥p1982 †¥tGerhard°Stellmach°(Breslau), OStR°i.R., Darmstadt¥p1987 †¥tP.°Maximilian°Hanf°OFM, Pfr.i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "9": {
        "liturgy": "¥fSo¥0f¥t¥kA. In allen konsekrierten Kirchen, die nicht ihren wirklichen Weihetag begehen und heute das Hochfest der Kirchweihe feiern:¥0k¥p     ¥a¥t¥qhHochfest der Kirchweihe¥0f (FD) – ¥fKirchweihsonntag¥0f¥lOff vom Com Kirchweihe – Te°Deum – Kl.°Hore: Ant°aus°dem°Com, Ps°vom°So°der°1.°Woche¥pw¥t¥fMs aus dem Com Kirchweihe A¥0f (MB°878/²879ff), Gl,°Cr, eig°Präf, in°den Hg°I¥_III eig°Einschub, FSS:°MB°562¥bf¥w¥v1.°L:¥0v¥t1°Kön°8¥v,22¥_23.27¥_30¥0v¥t¥fML°C/III¥0f°475/ᴺ487¥l¥vAPs:¥0v¥tPs°84¥v,2¥_3.4¥_5.10¥_11a¥0v°(R:°vgl.°¥v5¥0v)¥t476/ᴺ488¥l¥v2.°L:¥0v¥tEph°2¥v,19¥_22¥0v¥t486/ᴺ498¥l¥vREv+Ev:¥0v°Joh°2¥v,13¥_22¥0v¥t491/ᴺ503f¥0w ¥l¥f2.°Vp°vom°H°¥_°2.°Kp°vom°So¥0f¥p¥l¥kB. In allen anderen Kirchen:¥0k¥p     ¥a¥t¥qfWeihetag der Lateranbasilika¥0f, ¥fFest¥0f¥lOff: Com Kirchweihe – Te°Deum – Kl.°Hore:°Ant°u.°Ps°vom°So°der°1.°Woche¥pw¥t¥fMs aus dem Com Kirchweihe 2B¥0f (MB°882), Gl,°Cr,°eig°Präf, FSS:°MB°562°– 2.°Vp°vom°F°–°2.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute werden die Teilnehmer an den Eucharistiefeiern (einschl. der Vorabendmessen) gezählt.¥p¥sDie Liturgie zum 32. Sonntag im Jkr. entfällt in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1934 †¥tJoseph°Weinrich, Pfarrer°in°Rüstungen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "10": {
        "liturgy": "¥fMo¥0f¥t¥fHl. Leo der Große¥0f, Pp, Kl, ¥fGed¥0f¥lPsalt:°IV.°Woche – Off°vom°Ged,°BuM°eig¥pw¥t¥fMs vom Hl¥0f¥p",
        "notes": "",
        "deceased": "2014 †¥tRudolf°Hofmann, Prälat, Domkapitular°i.R., Fulda¥p2023 †¥tRoland°Knott,°Polizeidekan°i.R., OStR°i.K.i.R., Prälat, Hünfeld¥-Kirchhasel¥p",
        "deceased_more": "1927 †¥tPeter°Ignaz°Nau, Pfarrer°in°Steinhaus¥p1940 †¥tFranz°Wand,°Kuratus°in°Langenschwarz¥p1980 †¥tP.°Wilhelm°Görtz°SDB, Pfarrer°in°Kassel,°St.°Andreas¥p2014 †¥tRudolf°Hofmann, Prälat, Domkapitular°i.R., Fulda¥p2023 †¥tRoland°Knott,°Polizeidekan°i.R., OStR°i.K.i.R., Prälat, Hünfeld¥-Kirchhasel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "11": {
        "liturgy": "¥fDi¥0f¥t¥fHl. Martin von Tours¥0f, Bi, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f – Off°vom°Ged, Inv°und°LuV°eig¥p",
        "notes": "¥fHinweis:¥0f ¥sFür eine Kinder- und Lichtersegnung bei Martinsfeier und Martinszug s.°Benediktionale°Nr.°12,°S.°79ff. – Im Gesangbuch steht das passende Lied°GL°545.¥p",
        "deceased": "1995 †¥tDDr.°Adalbert°Peter, Prof., Dr.°theol.°et°phil., Prälat,°Hünfeld¥p",
        "deceased_more": "1995 †¥tDDr.°Adalbert°Peter, Prof., Dr.°theol.°et°phil., Prälat,°Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "12": {
        "liturgy": "¥fMi¥0f¥t¥fHl. Josaphat¥0f, Bi, Märt, ¥fGed¥0f¥pr¥t¥fMs vom Hl¥0f – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "2001 †¥tDr.°Georg°Karl°Frank, Prof., GR, Esslingen°am°Neckar¥p",
        "deceased_more": "1924 †¥tHeinrich°Lecher, Pfarrer°in°Margretenhaun¥p1944 †¥tFriedrich°Kalbhenn,°Direktor°des°Johannesstiftes°in°Ershausen¥p1954 †¥tAlfons°Smaczny°(Breslau),°Pfarrkurat°in°Triptis¥p1962 †¥tJoseph°von°Keitz, Pfarrer°in°Bauerbach¥p2001 †¥tDr.°Georg°Karl°Frank, Prof., GR, Esslingen°am°Neckar¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "13": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 32.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg+Gg°19/²17;°Sg°17/²15¥0w¥p",
        "notes": "",
        "deceased": "2012 †¥tJohannes°Mühlen°(Mainz), Pfr.i.R., GR, Bad°Brückenau¥p",
        "deceased_more": "1981 †¥tJosef°Strickstrock, Pfr.i.R., GR, Cölbe¥-Bürgeln¥p2012 †¥tJohannes°Mühlen°(Mainz), Pfr.i.R., GR, Bad°Brückenau¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "14": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 32.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°238;°Gg°193/²191;°Sg°239¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1947 †¥tBartholomäus°Bretthauer, Pfr.i.R., Kirchgandern¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "15": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 32.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Albert der Große¥0f, Bi, Kl, ¥fGed¥0f°(RK/GK)¥pw¥tOder ¥fhl. Leopold¥0f, Markgraf von Österreich, ¥fGed¥0f°(RK)¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°313,22;°Gg°351,11;°Sg°528,10 ¥0w¥pg¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "1996 †¥tFranz°Nitschmann°(Breslau), OStR°i.R., GR, Kassel¥p",
        "deceased_more": "1953 †¥tAlfons°Wiegel, Pfr.i.R., Dietges¥p1954 †¥tLudwig°Hüber, Pfr.i.R., Hattenhof¥p1968 †¥tAloys°Mohn°(Ermland), Pfr.i.R., Jena¥p1976 †¥tWalter°Hoboth, Pfr.i.R., Bad°Salzschlirf¥p1976 †¥tJohannes°Riebartsch, Pfr.i.R., Waldfeucht¥-Braunsrath¥p1980 †¥tHeinrich°Kuptz, Pfr.i.R., Hünfeld¥p1996 †¥tFranz°Nitschmann°(Breslau), OStR°i.R., GR, Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "16": {
        "liturgy": "¥fSo¥0f¥a¥t¥f33. Sonntag im Jahreskreis¥0f – ¥fVolkstrauertag¥0f – ¥fWelttag°der°Armen¥0f – ¥fDiasporasonntag¥0f¥lPsalt:°I.°Woche°–°Te°Deum¥pg¥t¥fMs eig¥0f, Gl,°Cr, ¥fbes. Fürbitten¥0f, SoPräf oder Präf und Hg „Jesus, der Bruder aller“ (Hochgebet für Messen für besondere Anliegen IV), FSS¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fHeute ist der 9. „Welttag der Armen“.¥0f Zum Ende des „Heiligen Jahres der Barmherzigkeit“ hat Papst Franziskus mit dem Apostolischen Schreiben „Misericordia et misera“ vom 21.°November°2016 unter Kapitel°21 den 33.°Sonntag im Jahreskreis zum neuen „Welttag der Armen“ erklärt und dazu geschrieben: „Das wird die würdigste Vorbereitung für die Feier des Christkönigssonntags sein, denn Jesus Christus hat sich mit den Geringen und Armen identifiziert und wird uns nach den Werken der Barmherzigkeit richten (vgl.°Mt°25¥v,31–46¥0v). Es wird ein Tag sein, der den Gemeinden und jedem Getauften hilft, darüber nachzudenken, wie die Armut ein Herzensanliegen des Evangeliums ist und dass es keine Gerechtigkeit noch sozialen Frieden geben kann, solange Lazarus vor der Tür unseres Hauses liegt (vgl.°Lk°16¥v,19–21¥0v). Dieser Tag wird auch eine echte Form der Neuevangelisierung darstellen (vgl.°Mt°11¥v,5¥0v), durch die das Antlitz der Kirche in ihrer ständigen pastoralen Umkehr erneuert wird, um Zeugin der Barmherzigkeit zu sein.“¥p¥s¥fHeute ist Volkstrauertag.¥0f ¥fBesondere Fürbitten¥0f für die Opfer und Verursacher der Kriege, von Gewalt und Terror in Vergangenheit und Gegenwart.¥p¥s¥fJugendliche mögen besonders zur Feier des Christkönigssonntags und Weltjugendtages am kommenden Sonntag eingeladen werden.¥0f Papst Franziskus hat am Christkönigssonntag, dem 22.°November°2020, die diözesanen Weltjugendtage ab 2021 vom bisherigen Palmsonntag auf das Christkönigshochfest verlegt.¥p¥s¥fHeute¥0f ist der ¥fDiasporasonntag¥0f. – ¥fBesondere Fürbitten¥0f für die Christen in der Zerstreuung.¥p¥sDer ¥fGedenktag der hl. Margareta¥0f entfällt in diesem Jahr.¥p",
        "deceased": "2007 †¥tAnton°Weczerek°(Prag/Fulda), Pfr.i.R., GR, Aub¥p",
        "deceased_more": "1957 †¥tGeorg°Kind, Pfarrer°in°Flieden¥p1961 †¥tGeorg°Bartsch°(Breslau), Pfarrer°in°Erfurt,°St.°Nicolai¥p2007 †¥tAnton°Weczerek°(Prag/Fulda), Pfr.i.R., GR, Aub¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "17": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 33.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Gertrud von Helfta¥0f, Ord, Myst, ¥fGed¥0f°(RK;°GK:°16.°Nov.)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°314,25;°Gg+Sg°1081/²1111¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1944 †¥tChristoph°Leinweber, Pfr.i.R., Dingelstädt¥p1985 †¥tBernhard°Köhler, Pfr.i.R., Neuhof¥-Dorfborn¥p1992 †¥tJoseph°Leister, Pfr.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "18": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 33.°Woche°im°Jahreskreis – ¥fGebetstag°für°Opfer°sexuellen°Missbrauchs¥0f¥pw¥tOder ¥fWeihetag der Basiliken St.°Peter und St.°Paul zu Rom¥0f, ¥fGed¥0f – BuM°eig – ¥lMs:°¥feig°L¥0f,°ApPräf°I, n.B.°Hg°I, FSS:°MB°556¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°157/²155;°Gg°104/²102;°Sg°925¥0w¥p",
        "notes": "¥fHinweise:¥0f¥p¥sPapst Franziskus hat angeregt, jährlich einen ¥fGebetstag für Opfer sexuellen Missbrauchs¥0f zu begehen. Die Deutsche Bischofskonferenz hat für Deutschland erstmals 2018 festgelegt, diesen ¥fGebetstag im zeitlichen Umfeld des durch den Europarat initiierten „Europäischen Tages zum Schutz von Kindern vor sexueller Ausbeutung und sexuellem Missbrauch“¥0f zu begehen. Dieser findet bereits seit 2015 jeweils ¥fam 18. November¥0f statt. Ziel des europäischen Tages ist es, Impulse für einen verbesserten Kinderschutz zu geben und die Gesellschaft weiterhin für die Thematik des sexuellen Kindesmissbrauchs zu sensibilisieren. Mit dem Gebetstag für die Opfer sexuellen Missbrauchs unterstützen die deutschen Bischöfe das Anliegen von Papst Franziskus, der den nationalen Bischofskonferenzen seine Bitte zur Einrichtung eines „Tages des Gebetes und der Buße für die Opfer sexuellen Missbrauchs“ übermittelt hatte. Liturgische Materialien sind unter www.dbk.de/themen/sexueller-missbrauch/gebetstag/ abrufbar.¥p¥s¥fZum heutigen Gedenktag der Weihe der Basiliken St. Peter und St. Paul in Rom¥0f eignet sich das Lied ¥fGL°873, bes. Str.°3+4¥0f, auch nach Melodie GL°280 singbar.¥p",
        "deceased": "2002 †¥tRudolf°Montag, Pfr.i.R., Msgr., GR, Heiligenstadt¥p",
        "deceased_more": "1985 †¥tPaul°Motz, Pfr.i.R., Weilheim°in°Oberbayern¥p2002 †¥tRudolf°Montag, Pfr.i.R., Msgr., GR, Heiligenstadt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "19": {
        "liturgy": "¥fMi¥0f¥t¥qfHl. Elisabeth von Thüringen¥0f, ¥fZweitpatronin der Diözese¥0f, ¥fFest¥0f°(FD/RK;°GK:°17.°Nov.)¥lTe Deum – Kl.°Hore: eig°Ant (FD,°dt.°und°lat.°Text), Ps°vom°Wt¥pw¥t¥fMs eig¥0f (MB 844/²846 ¥fmit Gl¥0f), eig°Präf, FSS:°MB°560¥bf¥wML°VI°748/ᴺ747 oder:¥l¥vL:¥0v¥tJes°58¥v,6¥_11¥0v¥tML°VI°548/ᴺ539¥l¥vL°(ggf.°2.°L):¥0v°2°Kor°9¥v,6¥_10¥0v¥t512/ᴺ502¥l¥vAPs,°REv°und°Ev:¥0v°¥tFDL°30f¥0w¥p",
        "notes": "¥fHinweise:¥0f¥p¥sEvangelische Christen begehen heute den ¥fBuß- und Bettag¥0f.¥p¥sNutzer der Stundenbuch-App des DLI finden die ¥fTexte für das Stundengebet zur heutigen Eigenfeier des Diözesankalenders in der Datei FD-Stundengebet.PDF¥0f (s.°o.°S.°87, Nr.°3).¥p¥sZum Fest der hl. Elisabeth finden sich folgende ¥fGesänge und Gebetstexte im Gotteslob¥0f: Lieder GL°878 (auch nach der Melodie von GL°543 singbar) und 879; Vesper zum Fest GL°955¥_957; Morgen- und Abendlob zum Fest GL°958f; Gebetstext GL°962¥v,4f¥0v (eventuell als Fürbitten). Auch der Hymnus zur Vesper aus den „Eigenfeiern der Diözese Fulda – Stundengebet“ kann nach der Melodie von GL°339 oder 485 als Gemeindelied gesungen werden (Liedblatt zum Download auf www.direktorium.bistum-fulda.de).¥p",
        "deceased": "",
        "deceased_more": "1937 †¥tChrysostomus°Kiesler, Dechant, Pfarrer°in°Eckweisbach¥p1959 †¥tAugust°Bode, Pfarrer°in°Wachstedt¥-Hagis¥p1981 †¥tBruno°Puscher°(Breslau), Pfr.i.R., Uelzen¥p1986 †¥tMichael°Sauer, Pfr.i.R., Kamenz¥p1988 †¥tHeinrich¥-Julius°Tries°(Köln), Pfr.i.R., Haina°(Kloster)¥p1990 †¥tKarl°Rudolph, Pfr.i.R., Kirchhain¥-Emsdorf¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "20": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 33.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°270;°Gg°149/²147;°Sg°118/²116¥0w¥p",
        "notes": "",
        "deceased": "2000 †¥t¥fDr.°Eduard°Schick¥0f, Prof., Dr. Dr.°h.c., Bischof°von°Fulda°(1974¥_1982)¥p2007 †¥tRichard°Fick, Pfr.i.R., GR, Geisa¥p2011 †¥tPaul°Moritz, Pfr.i.R., GR, Felsberg¥-Gensungen¥p",
        "deceased_more": "1952 †¥tBernhard°Gischarowski°(Ermland),°Erzpriester, Pfr.i.R., Wetter¥p1973 †¥tP.°Eugen°Eggert°OP, Pfarrer°in°Haueda¥p2000 †¥t¥fDr.°Eduard°Schick¥0f, Prof., Dr. Dr.°h.c., Bischof°von°Fulda°(1974¥_1982)¥p2007 †¥tRichard°Fick, Pfr.i.R., GR, Geisa¥p2011 †¥tPaul°Moritz, Pfr.i.R., GR, Felsberg¥-Gensungen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "21": {
        "liturgy": "¥fFr¥0f¥t¥fUnsere Liebe Frau in Jerusalem¥0f (Darstellung°der°sel.°Jgfr.°Maria), ¥fGed¥0f¥pw¥t¥fMs vom Ged¥0f, MarPräf – Off°vom°Ged,°BuM°eig¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1946 †¥tJoseph°Kehl, Pfr.i.R., Rüdenschwinden¥p1961 †¥tRudolf°Dominka, Pfarrer°in°Beuren/Eichsfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "22": {
        "liturgy": "¥fSa¥0f¥t¥fHl. Cäcilia¥0f, Jgfr, Märt, ¥fGed¥0f¥pr¥t¥fMs von der Hl¥0f, n.B.°Hg°I – Off°vom°Ged,°BuM°eig¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom H¥0f – ¥f1.°Vp°vom°folg°H¥0f°–°1.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "1999 †¥tEugen°Böhm, Pfr.i.R., GR, Bad°Soden¥-Salmünster¥p2019 †¥tEmil°Wiegand, Pfr.i.R., GR, Kassel¥p",
        "deceased_more": "1953 †¥tIgnaz°Vocke, Pfr.i.R., Heiligenstadt¥p1999 †¥tEugen°Böhm, Pfr.i.R., GR, Bad°Soden¥-Salmünster¥p2019 †¥tEmil°Wiegand, Pfr.i.R., GR, Kassel¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "23": {
        "liturgy": "¥fSo¥0f¥a¥t¥qhChristkönigssonntag¥0f, ¥fHochfest – Diözesaner°Weltjugendtag¥0f¥l(letzter (34.) Sonntag im Jahreskreis) – Te°Deum – Kl.°Hore:°eig°Ant,°Ps°vom°So°der°I.°Woche¥pw¥t¥fMs eig¥0f (MB°261ff), Gl,°Cr, eig°Präf, FSS:°MB°548/I¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fHeute wird der diözesane Weltjugendtag begangen.¥0f Papst Franziskus hat die diözesanen Weltjugendtage ab 2021 vom Palmsonntag auf das Christkönigshochfest verlegt. Jugendliche mögen besonders zur Feier des Christkönigsfestes und Weltjugendtages eingeladen werden.¥p¥sDie ¥fGedenktage des hl. Kolumban¥0f und ¥fdes hl. Klemens I.¥0f entfallen in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1971 †¥tRichard°Brodmann, Pfr.i.R., GR, Spahl/Rhön¥p1989 †¥tNorbert°Weidlich°(Breslau), Pfr.i.R., Alzenau¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "24": {
        "liturgy": "¥fMo¥0f¥t¥fHll. Andreas Dung-Lac¥0f, Pr, ¥fund°Gefährten¥0f (117°Märtt), ¥fGed¥0f – Psalt:°II.°Woche¥lOff: StB°III°(²2010),°S.°1367 bzw. 1374 oder Ergänzungsheft°1995,°S.°12ff¥pr¥t¥fMs von den Hll¥0f ¥be¥w¥fMs¥0f: HR°/°MBkl°1247f°/°MBErg²°19f°– ¥fML°VI°ᴺ760¥0f¥l¥vL:¥0v¥tWeish°3¥v,1¥_9¥0v¥tML°VI°505¥l¥voder¥0v¥t1°Kor°1¥v,17¥_25¥0v¥t123¥l¥vAPs:¥0v¥tPs°126¥v,1¥_2b.2c¥_3.4¥_5.6¥0v°(R:°¥v5¥0v)¥t506¥l¥vREv:¥0v¥t1°Petr°4¥v,14¥0v¥t761¥l¥vEv:¥0v¥tMt°10¥v,17¥_22¥0v¥t828¥0w¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute ist der ¥fGedenktag des hl. Chrysogonus¥0f, der um das Jahr 303 das Martyrium erlitten hat. Er gehört zu den seit alten Zeiten verehrten Heiligen, die im Römischen Messkanon genannt werden, deren Gedenktag heute aber nicht mehr im ARK verzeichnet ist. Durch die ¥fWahl des Hg°I¥0f kann sein Gedächtnis weiter geehrt werden.¥p",
        "deceased": "2015 †¥tP.°Matthias°Kircher°OFM,°GR¥p2020 †¥tP.°Flavian°Ascher°OFMCap,°Deggingen¥p",
        "deceased_more": "2015 †¥tP.°Matthias°Kircher°OFM,°GR¥p2020 †¥tP.°Flavian°Ascher°OFMCap,°Deggingen¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "25": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 34.°Woche°im°Jahreskreis¥pr¥tOder ¥fhl. Katharina von Alexandrien¥0f, Jgfr, Märt, ¥fGed¥0f°(GK/RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg°314,25;°Gg+Sg°296¥0w¥p",
        "notes": "",
        "deceased": "2018 †¥tHelmut°Wolf, Pfr.i.R., GR, Bad°Sooden¥-Allendorf¥p",
        "deceased_more": "1952 †¥tDDr.°Konrad°Lübeck, Prof., Dr.°theol.°et°phil., OStR°i.R., Prälat,°Fulda¥p1972 †¥tAlexander°Werthmüller, Pfr.i.R., GR, Pilgerzell¥p1983 †¥tFranz°Radtke°(Berlin), Pfr.i.R., Msgr., GR, Bad°Karlshafen¥p2018 †¥tHelmut°Wolf, Pfr.i.R., GR, Bad°Sooden¥-Allendorf¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "26": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 34.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Konrad und hl.°Gebhard¥0f, Bi, ¥fGed¥0f°(RK)¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°238f¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1950 †¥tValentin°Ramb, Pfarrer°in°Gersfeld¥p1964 †¥tDr.°Gregor°Nüdling, Dr.°phil., Dechant, Pfarrer°in°Marburg,°St.°Johannes°Ev.¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "27": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 34.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°Tg+Gg°133/²131;°Sg°527,8¥0w¥p",
        "notes": "",
        "deceased": "2013 †¥tP.°Hubert°Aloys°Fösges°OFMCap, GR, Münster¥p",
        "deceased_more": "1951 †¥tJulius°Loidold°(Brünn), Pfr.i.R., Immenhausen¥p2013 †¥tP.°Hubert°Aloys°Fösges°OFMCap, GR, Münster¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "28": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 34.°Woche°im°Jahreskreis¥p(g)¥t¥fMs¥0f nach Wahl, ¥wz.B.:°MB°297f¥0w¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "29": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 34.°Woche°im°Jahreskreis¥pw¥tOder ¥fhl. Maria am Samstag¥0f, ¥fGed¥0f¥l¥w¥fMs¥0f: Com Maria, MarPräf, oder nach Wahl aus MBm –¥l¥fL u. Ev¥0f vom Tag oder aus den AuswL bzw. aus MLm¥0w¥p(g)¥t¥fMs¥0f nach Wahl, z.B. Tg°32/²30;°Gg+Sg°1097/²1129¥0w¥p",
        "notes": "",
        "deceased": "2001 †¥tKlaus°Müller, Pfarrer°in°Zella/Rhön¥p2022 †¥tP.°Alban°Schmitt°OFMCap,°Werne¥p",
        "deceased_more": "1954 †¥tLeo°Herbert,°Ehrendomkapitular, Dechant, Pfarrer°in°Bad°Hersfeld¥p1984 †¥tKurt°Heinz°(Breslau), Pfr.i.R., GR, Steinau¥-Ulmbach¥p2001 †¥tKlaus°Müller, Pfarrer°in°Zella/Rhön¥p2022 †¥tP.°Alban°Schmitt°OFMCap,°Werne¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "vor einer etwaigen Vorabendmesse und der Vesper:¥l¥fEnde des alten Kirchenjahres¥0f¥j¥fADVENTSZEIT¥0f¥jDie Adventszeit hat einen dreifachen Charakter. Sie ist erstens Vorbereitungszeit auf die weihnachtlichen Hochfeste mit ihrem ¥fGedächtnis des ersten Kommens des Gottessohnes¥0f zu den Menschen. Zweitens ist sie eine besondere Zeit der ¥fAufmerksamkeit und Wachsamkeit für die Ankunft Christi heute¥0f, an jedem Tag, mitten im Alltag und im menschlichen Leben. Und drittens lenkt sie die Herzen zugleich durch dieses Gedenken an die erste Ankunft des Herrn, die Vorbereitung auf Weihnachten und sein tägliches neues (An-)Kommen hin zur ¥fErwartung der Ankunft Christi am Ende der Zeiten¥0f. Unter allen drei Gesichtspunkten ist die Adventszeit ¥feine Zeit wachsamer, hingebender und freudiger Erwartung¥0f.¥p¥p¥fBeginn des neuen Kirchenjahres¥0f¥lmit der 1. Vesper bzw. der Vorabendmesse zum°1.°Adventssonntag¥jEs°beginnt°das°¥fLesejahr°A¥0f¥lfür°die°Messperikopen°an°den Sonntagen°(¥fML°A/I¥0f).¥pEs°beginnt°das°¥fLesejahr°II¥0f¥lder°Lektionar-Faszikel°zum°StB (¥fLektionar°zum°StB°II/1¥0f).¥pPerikopen an den Wochentagen: ¥fML°IV¥0f.¥p¥fStB¥0f und ¥fLitHor¥0f: ¥fBand I¥0f.¥p¥fHinweise:¥0f¥p¥s¥fDie Sonn- und Wochentage des Advent¥0f haben jeweils ein eigenes Offizium. Vor dem Off des 1.°AdvSo sind Hymnen für den ersten Teil der Adventszeit (bis 16.°Dezember) angegeben (StB°I°3ff).¥p¥sAm Schluss der Komplet steht in der Advents- und Weihnachtszeit die Marianische Antiphon ¥f„Alma Redemptoris Mater“¥0f (GL°666¥v,1¥0v) bzw. ¥f„Erhabene Mutter des Erlösers“¥0f (vgl.°GL°530).¥p¥s¥fDas „Gloria“ entfällt an den Sonntagen der Adventszeit.¥0f¥p¥sSofern nichts anderes angegeben ist, wird bis zum 16.°Dez. in der Regel eine der Adventspräfationen°I¥_IV genommen, vom 17.°bis 24.°Dez. aber vor allem Adventspräfation°V.¥p¥sDie ¥fMarienmesse im Advent (Roratemesse)¥0f ist unter den in der Einführung zum Direktorium  (s.°o.°Kap.°III.D.3.) genannten Voraussetzungen bis zum 16.°Dez. gestattet außer an Sonntagen, Hochfesten und Festen. MB°890f mit den laufenden Tageslesungen, oder MBm und MLm Nrr.°1¥_3; Farbe: weiß.¥p¥sIn der kommenden Woche werden die ¥fWinterquatember¥0f an einem oder mehreren Tagen (nach Wahl) begangen als Tag(e) religiöser Erneuerung. ¥fThema: Friede¥0f. Vorschlag für die Wahl des Messformulars: Quatembermesse, MB°265, oder Nr.°17, 21 oder°22 aus den „Messen für besondere Anliegen“ (MB°1054¥_1059/²1078¥_1084), AdvPräf, Farbe: violett. LL und Evv: Perikopen für besondere Anliegen, ML°VIII°201¥_217.¥p¥s¥fDer Blumenschmuck und die Musik¥0f mögen im Advent sehr gemäßigt sein. Die Musik soll auf Weihnachten vorbereiten.¥p¥sZur ¥fSegnung des Adventskranzes/der (mitgebrachten) Adventskränze¥0f s.°Benediktionale°Nr.°1,°S.°25ff oder GL°24.¥p",
        "vig_liturgy": "¥r(29)¥0r¥#v¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f°– ¥f1.°Vp°vom°So¥0f°(StB°I°10ff) – 1. Kp vom So¥p¥p"
      },
      "30": {
        "liturgy": "¥fSo¥0f¥a¥t¥f1. Adventssonntag¥0f¥lPsalt:°I.°Woche°–°Te°Deum¥pv¥t¥fMs eig¥0f (MB°3/²1), Cr, AdvPräf I, FSS:°MB°532¥p",
        "notes": "¥fHinweise:¥0f¥p¥fADVENTSZEIT¥0f¥jDie Adventszeit hat einen dreifachen Charakter. Sie ist erstens Vorbereitungszeit auf die weihnachtlichen Hochfeste mit ihrem ¥fGedächtnis des ersten Kommens des Gottessohnes¥0f zu den Menschen. Zweitens ist sie eine besondere Zeit der ¥fAufmerksamkeit und Wachsamkeit für die Ankunft Christi heute¥0f, an jedem Tag, mitten im Alltag und im menschlichen Leben. Und drittens lenkt sie die Herzen zugleich durch dieses Gedenken an die erste Ankunft des Herrn, die Vorbereitung auf Weihnachten und sein tägliches neues (An-)Kommen hin zur ¥fErwartung der Ankunft Christi am Ende der Zeiten¥0f. Unter allen drei Gesichtspunkten ist die Adventszeit ¥feine Zeit wachsamer, hingebender und freudiger Erwartung¥0f.¥p¥pEs°beginnt°das°¥fLesejahr°A¥0f¥lfür°die°Messperikopen°an°den Sonntagen°(¥fML°A/I¥0f).¥pEs°beginnt°das°¥fLesejahr°II¥0f¥lder°Lektionar-Faszikel°zum°StB (¥fLektionar°zum°StB°II/1¥0f).¥pPerikopen an den Wochentagen: ¥fML°IV¥0f.¥p¥fStB¥0f und ¥fLitHor¥0f: ¥fBand I¥0f.¥p¥s¥fDie Sonn- und Wochentage des Advent¥0f haben jeweils ein eigenes Offizium. Vor dem Off des 1.°AdvSo sind Hymnen für den ersten Teil der Adventszeit (bis 16.°Dezember) angegeben (StB°I°3ff).¥p¥sAm Schluss der Komplet steht in der Advents- und Weihnachtszeit die Marianische Antiphon ¥f„Alma Redemptoris Mater“¥0f (GL°666¥v,1¥0v) bzw. ¥f„Erhabene Mutter des Erlösers“¥0f (vgl.°GL°530).¥p¥s¥fDas „Gloria“ entfällt an den Sonntagen der Adventszeit.¥0f¥p¥sSofern nichts anderes angegeben ist, wird bis zum 16.°Dez. in der Regel eine der Adventspräfationen°I¥_IV genommen, vom 17.°bis 24.°Dez. aber vor allem Adventspräfation°V.¥p¥sDie ¥fMarienmesse im Advent (Roratemesse)¥0f ist unter den in der Einführung zum Direktorium  (s.°o.°Kap.°III.D.3.) genannten Voraussetzungen bis zum 16.°Dez. gestattet außer an Sonntagen, Hochfesten und Festen. MB°890f mit den laufenden Tageslesungen, oder MBm und MLm Nrr.°1¥_3; Farbe: weiß.¥p¥sIn der kommenden Woche werden die ¥fWinterquatember¥0f an einem oder mehreren Tagen (nach Wahl) begangen als Tag(e) religiöser Erneuerung. ¥fThema: Friede¥0f. Vorschlag für die Wahl des Messformulars: Quatembermesse, MB°265, oder Nr.°17, 21 oder°22 aus den „Messen für besondere Anliegen“ (MB°1054¥_1059/²1078¥_1084), AdvPräf, Farbe: violett. LL und Evv: Perikopen für besondere Anliegen, ML°VIII°201¥_217.¥p¥s¥fDer Blumenschmuck und die Musik¥0f mögen im Advent sehr gemäßigt sein. Die Musik soll auf Weihnachten vorbereiten.¥p¥sZur ¥fSegnung des Adventskranzes/der (mitgebrachten) Adventskränze¥0f s.°Benediktionale°Nr.°1,°S.°25ff oder GL°24.¥p¥sDas ¥fFest des hl. Andreas¥0f entfällt in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1952 †¥tJoseph°Nüdling, Pfarrer°in°Florenberg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      }
    },
    "12": {
      "1": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°im°Advent¥pw¥tOder ¥fBischofsweihe des hl. Bonifatius¥0f, ¥fGed¥0f (FD)¥lInv, BuM und Hy zu Lh und Vp eig¥bf¥w¥fMs¥0f: FDM°49ff, BoniPräf:°FDM°17ff°od. MB°685ff, FSS:°FDM°20°– FDL°32¥_34¥0w¥pw¥tOder ¥fMs vom hl. Charles de Foucauld¥0f, Pr¥be¥w¥fMs¥0f:°HR⁵°/°Com°Ht°5 – ¥fFürbitten°für den christlich¥-islamischen°Dialog¥0f¥l¥vL:¥0v¥tWeish°11¥v,22¥0v¥_12¥v,2¥0v¥t¥fML°VII¥0f°411/ᴺ418¥l¥vAPs:¥0v¥tPs°40¥v,2+4ab.7¥_8.9¥_10.11.12+17cd¥0v°(R:°¥v8a.9a¥0v)¥t327/ᴺ332¥l–Joh°15¥v,14¥0v¥t–––¥l¥vEv:¥0v¥tJoh°15¥v,9¥_17¥0v¥t145/ᴺ147¥0w¥p(v)¥t¥fMs¥0f vom Tag oder von°einem°der°Ged, AdvPräf¥p",
        "notes": "¥fHinweise:¥0f¥p¥sZum heutigen Gedenktag der Bischofsweihe des hl. Bonifatius passt die Strophe GL°877¥v,8¥0v des Bonifatiusliedes. Für den Gesang des Hymnus aus den Eigenfeiern zum Stundengebet als Gemeindelied steht unter www.direktorium.bistum-fulda.de ein Liedblatt zum Download bereit.¥p¥sHeute kann die ¥fMesse vom hl. Charles de Foucauld¥0f gefeiert werden. Dazu passen ¥fFürbitten für den christlich-islamischen Dialog¥0f.¥p",
        "deceased": "1999 †¥tJohannes°Kalisch°(Oeiras¥-Floriano/Fulda),°Bischofsvikar, Msgr., Ehrendomkapitular, Pfarrer°in°Maceió/Brasilien¥p",
        "deceased_more": "1938 †¥tAnton°Paul,°Dompräbendat,°Fulda¥p1950 †¥tP.°Joseph°Schanz°OMI,°Frühmesser°in°Geisa¥p1978 †¥tJosef°Hillebrand°(Olmütz), Pfr.i.R., GR, Hünfeld¥p1981 †¥tEmil°Schäfer, Pfr.i.R., Hünfeld¥p1986 †¥tJosef°van°Schijndel, Pfarrer°in°Flieden¥-Rückers¥p1999 †¥tJohannes°Kalisch°(Oeiras¥-Floriano/Fulda),°Bischofsvikar, Msgr., Ehrendomkapitular, Pfarrer°in°Maceió/Brasilien¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "2": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°im°Advent¥pr¥tOder ¥fhl. Luzius¥0f, Bi, Märt, ¥fGed¥0f°(RK)¥p(v)¥t¥fMs¥0f vom Tag oder vom°Hl, AdvPräf¥p",
        "notes": "",
        "deceased": "1997 †¥tAloys°Claus, Pfr.i.R., GR, Ehrendomkapitular, Staudach¥-Egerndach¥p",
        "deceased_more": "1974 †¥tHermann°Helfrich, Pfarrer°in°Marborn¥p1983 †¥tWolfgang°Schöpping, OStR°i.K., Brachttal¥-Spielberg¥p1997 †¥tAloys°Claus, Pfr.i.R., GR, Ehrendomkapitular, Staudach¥-Egerndach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "3": {
        "liturgy": "¥fMi¥0f¥t¥fHl. Franz Xaver¥0f, Ordpr, Glb, ¥fGed¥0f¥pw¥t¥fMs vom Hl¥0f, AdvPräf – Off°vom°Ged¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1967 †¥tJoseph°Filthaut, Pfr.i.R., Fulda¥p1980 †¥tAnton°Leschik, OStR°i.R., Petersberg¥-Steinau¥p1994 †¥tP. Dr.°Albert°Strobel°OMI, Prof., Pfr.i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "4": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°im°Advent – ¥fPriesterdonnerstag¥0f¥pr¥tOder ¥fhl. Barbara¥0f, Märt, ¥fGed¥0f°(RK)¥pw¥tOder ¥fhl. Johannes von Damaskus¥0f, Pr, Kl, ¥fGed¥0f¥pw¥tOder ¥fsel. Adolph Kolping¥0f, Pr, ¥fGed¥0f (dD)¥l¥fOff¥0f: StB Ergänzungsheft 1995, S.°16¥_18¥bf¥w¥fMs¥0f: HR°/°MBkl°1248f°/°MBErg²°24¥l¥vL:¥0v¥tJak°2¥v,14¥_17¥0v¥tML°IV°420/ᴺ425¥l¥vAPs:¥0v¥tPs°112¥v,1¥_2.3¥_4.5¥_6.7+9¥0v¥t420/ᴺ425¥l¥vREv:¥0v¥tLk°11¥v,28¥0v¥t663¥v,4¥0v/ᴺ674¥v,4¥0v¥l¥vEv:¥0v¥tMt°5¥v,13¥_16¥0v¥t732/ᴺ736¥l¥voder¥0v¥tMt°25¥v,14¥_23¥0v¥t734/ᴺ738¥0w¥pw¥tOder ggf.°¥fMs um Priesterberufe¥0f ¥w(MB°1035f/²1057),¥lL°und°Ev vom°Tag oder aus°den°AuswL¥0w¥p(v)¥t¥fMs¥0f vom Tag oder von°einem°der°Hll bzw.°Sel oder ggf.°Votivmesse, AdvPräf¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Priesterdonnerstag (monatl. Gebetstag für geistliche Berufe):¥0f Die Votivmesse ist nur bedingt erlaubt (s.°o.°Kap.°III.D.3.). – Fürbitte(n) um Priesterberufungen. – Thema: „Wer hört, ist wie ein Mensch, der sein Haus auf Fels baut“ (Mt 7¥v,4¥0v). Intention: Für alle, die ihre Berufung zu einem Beruf in der Kirche führt.¥p",
        "deceased": "1996 †¥tRudolf°Armstark°(Leitmeritz), Pfr.i.R., GR, Fulda¥p2002 †¥tJosef°Otterbein, Pfr.i.R., GR, Fulda¥p",
        "deceased_more": "1938 †¥tHeinrich°Große, Pfr.i.R., Bad°Salzschlirf¥p1960 †¥tErnst°Barabasch°(Breslau), Pfarrer°in°Ferna/Eichsfeld¥p1982 †¥tJoseph°Plettenberg,°Bischofsvikar,°Apostol.°Protonotar, Domkapitular,°Fulda¥p1983 †¥tBruno°Klute, Pfarrer°in°Uttrichshausen¥p1996 †¥tRudolf°Armstark°(Leitmeritz), Pfr.i.R., GR, Fulda¥p2002 †¥tJosef°Otterbein, Pfr.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "5": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°im°Advent – ¥fHerz¥-Jesu¥-Freitag¥0f¥pw¥tOder ¥fhl. Anno¥0f, Bi, ¥fGed¥0f°(RK)¥pw¥tOder ¥kim Dom zu Fulda:¥0k ¥fhl.°Sola¥0f,°Pr,°Einsiedler,°¥fGed¥0f°(FD)¥bf¥w¥vL:¥0v¥tApg°4¥v,32¥_35¥0v¥tML°IV°721/ᴺ727¥l¥vAPs:¥0v¥tPs°16¥v,1¥_2+5.7¥_8.9+11¥0v°(R:°vgl.°¥v5a¥0v)¥t520/ᴺ531¥l¥vREv+Ev:¥0v°Lk°12¥v,32¥_34¥0v¥t520f/ᴺ531f¥0w¥pw¥tOder ggf.°¥fVotivmesse vom hl. Herzen Jesu¥0f¥l¥w(MB°1100f/²1132f oder 257ff), Herz¥-Jesu¥-Präf,¥lL°und°Ev°vom°Tag oder aus°den°AuswL¥0w¥p(v)¥t¥fMs¥0f vom Tag oder von°einem°der°Hll, AdvPräf, oder ggf.°Votivmesse,°Herz¥-Jesu¥-Präf¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum°Herz¥-Jesu¥-Fr:¥0f Die Votivmesse ist nur bedingt erlaubt (s.°o.°Kap.°III.D.3.), dann mit Herz¥-Jesu¥-Präfation.¥p",
        "deceased": "",
        "deceased_more": "1934 †¥tNikolaus°Goerich, Pfarrer°in°Bickenriede¥p1937 †¥tPaul°Scharsky,°Kooperator°in°Steinbach¥p1946 †¥tAloys°Ewald, Pfarrer°in°Altenmittlau¥p1960 †¥tMichael°Lerch, Pfarrer°in°Struth¥p1994 †¥tHermann°Schabel, Pfr.i.R., Hünfeld¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "6": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 1.°Woche°im°Advent – ¥fHerz¥-Mariä¥-Samstag¥0f¥pw¥tOder ¥fhl. Nikolaus¥0f, Bi, ¥fGed¥0f¥pw¥tOder ggf.°¥fVotivmesse vom Unbefleckten Herzen Mariä¥0f, ¥wMBm°und°MLm°Nr.°28,°eig°Präf¥0w¥p(v)¥t¥fMs¥0f vom Tag oder vom°Hl oder ggf.°Votivmesse, AdvPräf¥pv¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fZum Herz¥-Mariä¥-Sa:¥0f Die Votivmesse ist nur bedingt erlaubt (s.°o.°Kap.°III.D.3.).¥p",
        "deceased": "2011 †¥tHeinrich°Unterstell°(Köln), Pfr.i.R., GR, Fulda¥p2017 †¥tNorbert°Lomb, Pfr.i.R., Hess.°Lichtenau¥-Velmeden¥p",
        "deceased_more": "1954 †¥tAloys°Ständer, Pfarrer°in°Hundeshagen¥p1967 †¥tHeinrich°Franz°(Leitmeritz), Pfr.i.R., Mardorf¥p2011 †¥tHeinrich°Unterstell°(Köln), Pfr.i.R., GR, Fulda¥p2017 †¥tNorbert°Lomb, Pfr.i.R., Hess.°Lichtenau¥-Velmeden¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "7": {
        "liturgy": "¥fSo¥0f¥a¥t¥f2. Adventssonntag¥0f¥lPsalt:°II.°Woche°–°Te°Deum¥pv¥t¥fMs eig¥0f, Cr, AdvPräf III, FSS:°MB°532¥l¥f2.°Vp°vom°So – 2.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fDie Vorabendmesse zum Hochfest der Empfängnis Mariens kann heute nicht gefeiert werden.¥0f¥p¥sDer ¥fGed des hl. Ambrosius¥0f entfällt in diesem Jahr.¥p",
        "deceased": "",
        "deceased_more": "1945 †¥tJoseph°Kircher, Pfr.i.R., Sannerz¥p1956 †¥tBernhard°Wand, Pfarrer°in°Berlingerode¥p1959 †¥tKonrad°Fasselabend, Pfr.i.R., Dorfborn¥p1989 †¥tGerhard°Kocourek, Pfr.i.R., Erfurtshausen¥p1991 †¥tJulius°Apeltauer°(Brünn), Pfr.i.R., GR, Wölf¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "8": {
        "liturgy": "¥fMo¥0f¥t¥qhHochfest der ohne Erbsünde empfangenen Jungfrau und Gottesmutter Maria¥0f¥lTe Deum – Kl.°Hore: eig Ant,°ErgPs¥pw¥t¥fMs eig¥0f, Gl,°Cr, eig°Präf, in°den Hg°I¥_III eig°Einschub, FSS:°MB°554°– 2.°Vp°vom°H°–°2.°Kp°vom°So¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1943 †¥tAdam°Dehler, Dechant, Pfarrer°in°Johannesberg¥p1948 †¥tFranz°Schröter, Direktor°des°St.¥-Raphaels¥-Heims°in°Heiligenstadt¥p1963 †¥tJosef°Tschöp°(Königgrätz), Pfarrer°in°Steinbach/Eichsfeld¥p1976 †¥tP.°Paul°Blasius°Kaiser°SVD, Pfarrer°in°Trendelburg¥p1981 †¥tPhilipp°Rogge, Pfr.i.R., GR, Weißenborn¥-Lüderode¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "9": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°im°Advent¥pr¥tOder ¥fsel. Liborius Wagner¥0f, Pr, Märt, ¥fGed¥0f (FD) – BuM°eig¥bf¥w¥vL:¥0v¥tWeish°3¥v,1¥_9¥0v¥tML°IV°678/ᴺ688¥l¥vAPs:¥0v¥tPs°124¥v,2¥_3.4¥_5.7¥_8¥0v°(R:°¥v7a¥0v)¥t429/ᴺ434¥l¥vREv:¥0v¥t„Dich, Gott, loben wir …“¥t429/ᴺ434¥l¥vEv:¥0v¥tJoh°10¥v,11¥_16¥0v¥t549/ᴺ556¥0w¥pw¥tOder ¥fhl. Johannes Didacus Cuauhtlatoatzin (Juan°Diego)¥0f, Laienapostel, Myst, ¥fGed¥0f¥be¥w¥fMs¥0f: HR°/°MBkl°1249f°/°MBErg²°20°/°Com°MFr°– ¥fML°IV°ᴺ406¥0f¥l¥vL:¥0v¥t1°Kor°1¥v,26¥_31¥0v¥tML°IV°498¥l¥vAPs:¥0v¥tPs°131¥v,1.2¥_3¥0v¥t410¥l¥vREv:¥0v¥tvgl.°Mt°11¥v,25¥0v¥t534¥l¥vEv:¥0v¥tMt°11¥v,25¥_30¥0v¥t560¥0w¥p(v)¥t¥fMs¥0f vom Tag oder vom°Sel°oder°Hl, AdvPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1957 †¥tErich°Feiereis°(Breslau), Pfr.i.R., Küllstedt¥p1974 †¥tLudwig°Büttner, Pfr.i.R., Hünfeld¥p1977 †¥tViktor°Schulze, Pfr.i.R., Küllstedt¥p1983 †¥tP.°Andreas°Huber°OMI, Pfr.i.R., Rektor, Dresden¥p1985 †¥tJoseph°Wand, Pfr.i.R., GR, Ershausen¥p1989 †¥tDr.°Johannes°Bernard°(Berlin), Prof., Erfurt¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "10": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°im°Advent¥pw¥tOder ¥fUnsere Liebe Frau von Loreto¥0f, ¥fGed¥0f¥be¥w¥fMs¥0f: HR⁴ᶠ°/°MMB Nr. 1°– ¥fML°IV°ᴺ409¥0f¥l¥vL:¥0v¥tJes°7¥v,10¥_14¥0v¥tML°IV°56¥l¥vAPs:¥0v¥tLk°1¥v,46b¥_48.49¥_50.51+53.54¥_55¥0v°(R:°¥v49¥0v)¥t660¥l¥vREv:¥0v¥tvgl.°Lk°1¥v,28.42¥0v¥t663¥v,1¥0v¥l¥vEv:¥0v¥tLk°1¥v,26¥_38¥0v¥t57¥0w¥p(v)¥t¥fMs¥0f vom Tag oder vom Ged, AdvPräf¥p",
        "notes": "¥fHinweis:¥0f ¥sHeute ist der internationale „Tag der Menschenrechte“, zu denen die Glaubens-, Gewissens- und Religionsfreiheit gehört.¥p",
        "deceased": "1959 †¥t¥fDDr.°Johannes°B.°Dietz¥0f, Dr.°theol.°et°phil., Titularerzbischof°von°Cotrada, Bischof°von°Fulda°(1939¥_1958)¥p",
        "deceased_more": "1959 †¥t¥fDDr.°Johannes°B.°Dietz¥0f, Dr.°theol.°et°phil., Titularerzbischof°von°Cotrada, Bischof°von°Fulda°(1939¥_1958)¥p1970 †¥tP.°Otto°Nolte°SVD, Pfarrer°in°Rengelrode/Eichsfeld¥p1991 †¥tP.°Sebastian°Zerwas°SDB, Hess.°Lichtenau¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "11": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°im°Advent¥pw¥tOder ¥fhl. Damasus I.¥0f, Pp, ¥fGed¥0f¥p(v)¥t¥fMs¥0f vom Tag oder vom Hl, AdvPräf¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1952 †¥tFranz°Raabe, Pfr.i.R., Mardorf¥p1979 †¥tEduard°Paul, Pfr.i.R., GR, Emsdorf¥p1980 †¥tP.°Franz°Xaver°Schiefer°SJ, Pfr.i.R., Köln¥p1985 †¥tP.°Paul°Franz°Saft°SJ, Berlin¥p1987 †¥tP.°Wilhelm°Bertulf°Schrammen°OFM, Pfr.i.R., Heinsberg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "12": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 2.°Woche°im°Advent¥pw¥tOder ¥fUnsere Liebe Frau in Guadalupe¥0f, ¥fGed¥0f¥be¥w¥fMs¥0f: HR°/°MBkl°1250f°/°MBErg²°21°/°Com°Maria, Eröffnungsvers:°Offb°12¥v,1¥0v°– ¥fML°IV°ᴺ414¥0f¥l¥vL:¥0v¥tJes°7¥v,10¥_14¥0v¥tML°IV°56¥l¥vAPs:¥0v¥t1°Sam°2¥v,1b¥_e.4¥_5b.6¥_7.8a¥_d¥0v°(R:°¥v1b¥0v)¥t62¥l¥vREv:¥0v¥tvgl.°Lk°1¥v,45¥0v¥t–––¥l¥vEv:¥0v¥tLk°1¥v,39¥_47¥0v¥t668¥0w¥p(v)¥t¥fMs¥0f vom Tag oder vom Ged, AdvPräf¥p",
        "notes": "",
        "deceased": "2014 †¥tHermann°Röder, Pfr.i.R., GR, Hofbieber¥-Schwarzbach¥p",
        "deceased_more": "1961 †¥tDr.°Bernard°Mock, Dr.°phil., Prälat, Domkapitular°in°Fulda¥p1983 †¥tPaul°Fichtner°(Leitmeritz), Pfr.i.R., GR, Sondershausen¥p2014 †¥tHermann°Röder, Pfr.i.R., GR, Hofbieber¥-Schwarzbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "13": {
        "liturgy": "¥fSa¥0f¥t¥fHl. Luzia¥0f, Jgfr, Märt, ¥fGed¥0f – BuM°eig¥pw¥tOder ¥fhl. Odilia¥0f, Äbtissin, ¥fGed¥0f°(RK)¥pr/w¥t¥fOff und Ms¥0f von einer der Hll, AdvPräf, n.B.°Hg°I¥pv/ros¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°So¥0f°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fDie hl. Luzia steht im ARK als gebotener Ged.¥0f Wenn nicht der Ged der hl. Odilia begangen wird, sind daher im Off und in der Ms die Texte zum Ged der hl. Luzia zu nehmen.¥p¥sHeute ist der 7. Jahrestag der Ernennung unseres Bischofs Michael.¥p",
        "deceased": "2010 †¥tVinzenz°Trageser, Pfr.i.R., GR, Fulda¥p",
        "deceased_more": "1987 †¥tAlbert°Otto, Pfr.i.R., Neustadt/Eichsfeld¥p2010 †¥tVinzenz°Trageser, Pfr.i.R., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "14": {
        "liturgy": "¥fSo¥0f¥a¥t¥f3. Adventssonntag (Gaudete)¥0f¥lPsalt:°III.°Woche°–°Te°Deum¥pv/ros¥t¥fMs eig¥0f, Cr, AdvPräf II, FSS:°MB°532¥p",
        "notes": "¥fHinweis:¥0f ¥sDer ¥fGed des hl. Johannes vom Kreuz¥0f entfällt in diesem Jahr.¥p",
        "deceased": "2023 †¥tHans°Stein°(Radom/Fulda), Pfr.i.R., Marl¥p",
        "deceased_more": "1946 †¥tHeinrich°Goebel, Prof., OStR°i.R., Fulda¥p1967 †¥tAloys°Wehner, Pfr.i.R., Geisa¥p1967 †¥tAnton°Trüschler, Pfarrer°in°Helmsdorf/Eichsfeld¥p2023 †¥tHans°Stein°(Radom/Fulda), Pfr.i.R., Marl¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "15": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°im°Advent¥pv¥t¥fMs vom Tag¥0f, AdvPräf¥p",
        "notes": "",
        "deceased": "2000 †¥tNorbert°Weber, Pfr.i.R., Msgr., Fulda¥p2016 †¥tMatthias°Krieg, Pfr., GR, Fulda¥p",
        "deceased_more": "1920 †¥tDr.°Anton°Fischer, Dechant, Pfarrer°in°Poppenhausen¥p1952 †¥tAugust°Wassermann, Pfr.i.R., Flieden¥p1975 †¥tAloysius°Vogt, Wehrmachts-Oberpfr.i.R., Frankfurt°a.°M.¥p2000 †¥tNorbert°Weber, Pfr.i.R., Msgr., Fulda¥p2016 †¥tMatthias°Krieg, Pfr., GR, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "16": {
        "liturgy": "¥fDi¥0f¥t¥qfHl. Sturmius¥0f, ¥fGründerabt von Fulda¥0f, ¥fFest¥0f (FD)¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pw¥t¥fMs eig¥0f, Gl, Präf Ht, FSS:°MB°560¥bf¥wFDL°36¥_39¥0w¥p",
        "notes": "¥fHinweise:¥0f¥p¥sNutzer der Stundenbuch-App des DLI finden die ¥fTexte für das Stundengebet zur heutigen Eigenfeier des Diözesankalenders in der Datei FD-Stundengebet.PDF¥0f (s.°o.°S.°87, Nr.°3).¥p¥sZum heutigen Fest des hl. Sturmius passt die Strophe GL°877¥v,9¥0v des Bonifatiusliedes. Die Hymnen zu Laudes und Vesper aus den „Eigenfeiern der Diözese Fulda – Stundengebet“ können nach den Melodien von GL°81 oder GL°484 als Gemeindelied gesungen werden (Liedblatt zum Download auf www.direktorium.bistum-fulda.de).¥p",
        "deceased": "",
        "deceased_more": "1933 †¥tWilhelm°Hülsmann, Pfarrer°in°Anzefahr¥p1946 †¥tKarl°Ellenbrand, Pfarrer°in°Eiterfeld¥p1952 †¥tEugen°Wand, Pfr.i.R., Küllstedt¥p1964 †¥tP.°Bernardin°Höflich°OFM, Hausgeistlicher°im°St.¥-Elisabeth¥-Krankenhaus°in°Eisenach¥p1970 †¥tLeo°Schramm, Dechant, Pfarrer°in°Sömmerda¥p1976 †¥tJosef°Preßner°(Prag), Pfarrer°in°Haimbach¥p1977 †¥tFranz°Faupel, Pfr.i.R., Fulda¥p1988 †¥tHermann°Goeb, Dechant, Pfarrer°in°Lahrbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "17": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°im°Advent¥pv¥t¥fMs vom Tag¥0f, AdvPräf, bes. V¥lAnt zum Magn: ¥fO Weisheit¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fDie Tage vom 17. bis 23. Dez.¥0f haben im Stundengebet ¥fin allen Horen Eigentexte¥0f (StB°I°141ff); die ¥fHymnen für diese Tage¥0f stehen nach dem Offizium des 4. Adventssonntages (StB°I°132ff). Die Antiphonen zu den Psalmen der Laudes und Vesper richten sich nach dem Wochentag (vgl.°StB°I°139f), wie im Psalterium angegeben („... vor dem 24.°Dezember“). In der Vesper werden zum Magnificat ¥fdie großen O¥-Antiphonen¥0f gebetet. ¥p¥sDie O-Antiphonen werden in der Messfeier als Ruf vor dem Evangelium gesungen (vgl. GL°222 mit GL°173¥v,1¥0v oder 173¥v,3¥0v als Halleluja-Ruf in der passenden Tonart).¥p¥s¥fDie Messfeier ist immer vom Kalendertag (MB°27ff/ᴺ25ff)¥0f, ausgenommen der 4. Adventssonntag. Es wird vor allem die AdvPräf°V genommen.¥p¥s¥fGedenktage von Heiligen¥0f, die auf einen Wochentag vom 17. bis 31. Dez. fallen, ¥fkönnen kommemoriert werden¥0f  (s.°o.°Kap.°II.C.4.).¥p¥sHeute ist der 89. Geburtstag von Papst Franziskus.¥p",
        "deceased": "2022 †¥tWinfried°Reith,°Stadtpfr.i.R., Msgr., GR, Ehrendomkapitular, Fulda¥p",
        "deceased_more": "1955 †¥tOtto°Schröter, Pfr.i.R., Mühlhausen¥p1977 †¥tFranz°Mayer°(Prag), Pfr.i.R., Braunfels/Lahn¥p2022 †¥tWinfried°Reith, Stadtpfr.i.R., Msgr., GR, Ehrendomkapitular, Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "18": {
        "liturgy": "¥fDo¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°im°Advent¥pv¥t¥fMs vom Tag¥0f, AdvPräf, bes. V¥lAnt zum Magn: ¥fO Adonai¥0f¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1944 †¥tRudolf°Weber, Dechant, Pfarrer°in°Hilders¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "19": {
        "liturgy": "¥fFr¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°im°Advent¥pv¥t¥fMs vom Tag¥0f, AdvPräf, bes. V¥lAnt zum Magn: ¥fO Spross aus Isais Wurzel¥0f¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1962 †¥tWilhelm°Kotzur°(Breslau), Pfr.i.R., Berggrub°b.°Landshut¥p1973 †¥tFriedrich°Wieden°(Leitmeritz), Pfr.i.R., GR, Breitenholz/Eichsfeld¥p1973 †¥tAdolf°Krause°(Königgrätz), Pfr.i.R., Altötting¥p1983 †¥tMoritz°Weinrich, Caritasdirektor°i.R., Prälat, GR, Steinbach°a.°d.°Milseburg¥p1987 †¥tP.°Bernhard°Ferkinghoff°OMI, Allerheiligenberg°bei°Lahnstein¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "20": {
        "liturgy": "¥fSa¥0f¥t¥fVom Wochentag¥0f – 3.°Woche°im°Advent¥pv¥t¥fMs vom Tag¥0f, AdvPräf, bes. V¥pv¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom So¥0f – ¥f1.°Vp°vom°4.°AdvSo¥0f°(StB°I°125)°–°1.°Kp°vom°So¥lAnt zum Magn: ¥fO Schlüssel Davids¥0f¥p",
        "notes": "",
        "deceased": "2022 †¥tHans¥-Jürgen°Elbrecht, Pfr.i.R., Netphen¥-Eschenbach¥p",
        "deceased_more": "1937 †¥tTheodor°Bermoser, Pfr.i.R., Steinbach¥p1967 †¥tAlfons°Scholz, Pfr.i.R., Dietershan¥p1971 †¥tAlbin°Metze, Pfarrer°in°Mackenrode/Eichsfeld¥p1980 †¥tJosef°Lerner°(Essen), Rektor, Archivar°i.R., Fulda¥p1983 †¥tFranz°Schlehuber, GR, Pfarrer°in°Kleinsassen¥p2022 †¥tHans¥-Jürgen°Elbrecht, Pfr.i.R., Netphen¥-Eschenbach¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "21": {
        "liturgy": "¥fSo¥0f¥a¥t¥f4. Adventssonntag¥0f¥lPsalt:°IV.°Woche – Te°Deum¥pv¥t¥fMs vom So eig¥0f (MB°35/²33), Cr, AdvPräf V, FSS:°MB°532¥lAnt zum Magn: ¥fO Morgenstern¥0f¥p",
        "notes": "",
        "deceased": "1995 †¥tDr.°Bernhard°Opfermann, Dr.°phil., Pfr.i.R., Hildesheim¥p",
        "deceased_more": "1995 †¥tDr.°Bernhard°Opfermann, Dr.°phil., Pfr.i.R., Hildesheim¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "22": {
        "liturgy": "¥fMo¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°im°Advent¥pv¥t¥fMs vom Tag¥0f, AdvPräf, bes. V¥lAnt zum Magn: ¥fO König der Völker¥0f¥p",
        "notes": "",
        "deceased": "1997 †¥tPaul°Seidel°(Breslau), Pfr.i.R., Niedaltdorf/Krs.°Saarlouis¥p",
        "deceased_more": "1949 †¥tDDr.°Georg°Otto°Müller, Prof.°em., Dr.°theol.°et°phil., Dechant, Pfarrer°in°Hilders¥p1982 †¥tStephan°Kral°(Königgrätz), Pfr.i.R., Heiligenstadt¥p1992 †¥tMichael°Kollmann, Diakon, Stadtallendorf¥p1997 †¥tPaul°Seidel°(Breslau), Pfr.i.R., Niedaltdorf/Krs.°Saarlouis¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "23": {
        "liturgy": "¥fDi¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°im°Advent¥ln.B. Komm des ¥fhl. Johannes von Krakau¥0f, Pr (s.°o.°Kap.°II.C.4.)¥pv¥t¥fMs vom Tag¥0f, Tg°vom Tag oder vom Hl, AdvPräf,°bes.°V¥lAnt zum Magn: ¥fO Immanuel¥0f¥p",
        "notes": "",
        "deceased": "2010 †¥tGerhard°Dietrich, Pfr.i.R., Hammelburg¥p2020 †¥tP.°Dominikus°Ramljak°OFM, GR, Posušje/Herzegowina¥p",
        "deceased_more": "1955 †¥tP.°Franz°Willmes°SJ, Hausgeistlicher°in°Worbis¥p2010 †¥tGerhard°Dietrich, Pfr.i.R., Hammelburg¥p2020 †¥tP.°Dominikus°Ramljak°OFM, GR, Posušje/Herzegowina¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "24": {
        "liturgy": "¥fMi¥0f¥t¥fVom Wochentag¥0f – 4.°Woche°im°Advent –°Off°eig°(24.°Dez.)¥pv¥t¥fMs „Am Morgen“¥0f (MB°36f/²34f), AdvPräf V¥pv¥tOder ¥fmorgens: Vigilmesse „Am Heiligen Abend“¥0f (MB°38f/²36f), wenn sie am Abend nicht gefeiert wird; dann adventlich in violetter Farbe, ohne°Gl°und°Cr, mit°AdvPräf°V, ohne°eig°Einschub¥p¥p¥fWEIHNACHTSZEIT¥0f¥jDie Gedächtnisfeier der Geburt des Herrn und seines offenbarenden Erscheinens bildet den besonderen Charakter der Weihnachtszeit. Sie reicht von der 1.°Vesper der Geburt des Herrn bis zum Sonntag nach Erscheinung des Herrn einschließlich.¥p¥p¥fHinweise:¥0f ¥fZum Stundengebet:¥0f Hymnen für die Weihnachtszeit bis zum Fest Erscheinung des Herrn: Stb°I°174ff.¥p¥t¥fAm Heiligen Abend: 1.°Vp°vom°folg H – 1.°Kp°vom°So¥0f (entfällt für jene, die die Vigil und die Messe in der Hl. Nacht mitfeiern)¥pw¥t¥fVigilmesse von Weihnachten „Am Hl. Abend“¥0f (MB°38f/²36f), Gl,°Cr°(Kniebeugung wie heute), WeihnPräf, in°den Hg°I¥_III eig°Einschub (mit „hochheilige Nacht“), FSS:°MB°534.¥pw¥tOder (wo dringende pastorale Gründe dafür vorliegen) als „Christmette“ die ¥fErste Weihnachtsmesse „In der Hl. Nacht“¥0f (siehe°am°25.°Dez.)¥p",
        "notes": "",
        "deceased": "1999 †¥tP.°Wilhelm°Sermon°SVD¥p",
        "deceased_more": "1941 †¥tAugustin°Eckardt, Pfarrer°in°Rohrberg¥p1948 †¥tFerdinand°Krah, Pfarrer°in°Kassel°bei°Gelnhausen¥p1978 †¥tArnold°Motz, Pfr.i.R., GR, Birkenfelde¥p1990 †¥tHermann¥-Josef°Häusler, Pfarrer°in°Erfurt¥p1999 †¥tP.°Wilhelm°Sermon°SVD¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "25": {
        "liturgy": "¥fDo¥0f¥a¥t¥qhHochfest der Geburt des Herrn¥0f – ¥fWeihnachten, Hochfest°mit°Oktav¥0f¥lOff eig – Te°Deum – Kl.°Hore: eig Ant°u. Ps¥pw¥t¥fErste Weihnachtsmesse „In der Heiligen Nacht“¥0f, Gl,°Cr°(Kniebeugung°wie°in°der Messe°„Am°Tage“), WeihnPräf°(bes.°II), in°den Hg°I¥_III eig°Einschub („hochheilige Nacht“), FSS:°MB°534¥pw¥t¥fZweite Weihnachtsmesse „Am Morgen“¥0f, Gl,°Cr°(Kniebeugung°wie°in°der°Messe „Am°Tage“), WeihnPräf, in°den Hg°I¥_III eig°Einschub, FSS:°MB°534¥pw¥t¥fDritte Weihnachtsmesse „Am Tage“¥0f, Gl,°Cr (Kniebeugung bei den Worten „Et°incarnatus est°…“ bzw. „hat°Fleisch angenommen°…“ bzw. „empfangen durch den Hl.°Geist°…“), WeihnPräf°(bes.°I), in°den Hg°I¥_III eig°Einschub, FSS:°MB°534°– 2.°Vp°vom°H°–°2.°Kp°vom°So¥p",
        "notes": "¥fHinweise:¥0f¥p¥sHeute darf jeder Priester dreimal (kon)zelebrieren, jedoch nur zur jeweils entsprechenden Zeit: die erste Messe in der Nacht (Christmette), die zweite am Morgen (Hirtenmesse), die dritte am Tag (Festhochamt).¥p¥s¥fEin vollkommener Ablass¥0f (s.°o.°Kap.°I.C.10.) ist unter den üblichen Bedingungen (Beichte, entschlossene Abkehr von jeder Sünde, Kommunionempfang, Gebet in den Anliegen des Papstes) verbunden mit dem ¥fEmpfang des Apostolischen Segens¥0f, den der Bischof heute Vormittag im Pontifikalamt im Dom zu Fulda spendet, und mit dem ¥fEmpfang des Päpstlichen Segens „Urbi et orbi“ (auch über Fernsehen, Radio oder Internet)¥0f, den der Heilige Vater heute Mittag in Rom spendet.¥p¥sHeute ist der ¥fGed der hl. Anastasia von Sirmium¥0f, die um das Jahr 304 das Martyrium erlitten hat. Sie gehört zu den seit alten Zeiten verehrten Heiligen, die im Römischen Messkanon genannt werden, deren Ged heute aber nicht mehr im ARK verzeichnet ist. Durch die ¥fWahl des Hg°I¥0f kann ihr Gedächtnis weiter geehrt werden.¥p¥sVor Beginn der Christmette kann die ¥ffeierliche Ankündigung der Geburt des Herrn aus dem Römischen Martyrologium¥0f gesungen werden (siehe Hinweis auf der Homepage des Liturgischen Institutes Trier www.liturgie.de).¥p",
        "deceased": "",
        "deceased_more": "1944 †¥tHeinrich°Gnau, Pfarrer°in°Oberufhausen¥p1960 †¥tDr.°Adolf°Schreiber°(Breslau), Pfarrer°in°Veckerhagen¥p1986 †¥tP. Dr.°Gerhard°Koch°SJ, Prof., Dr.°phil., Marburg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "26": {
        "liturgy": "¥fFr¥0f¥a¥t¥qfHl. Stephanus¥0f, Erster Märtyrer, ¥fFest¥0f – ¥f2.°Weihnachtsfeiertag¥0f – ¥fGebetstag für°die°verfolgten und bedrängten°Christen¥0f¥lPsalt:°IV.°Woche – ¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pr¥t¥fMs eig¥0f, Gl,°Cr, ¥fFürbitten für die verfolgten Christen¥0f, WeihnPräf°(bes.°III), n.B.°Hg°I, in°den Hg°I¥_III eig°Einschub wie Weihnachten, FSS:°MB°560°oder°534¥l¥fVp von der WeihnOktav¥0f (26. Dez.) – ¥f1.°oder°2.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥s¥fDas Fest des hl. Stephanus ist als 2. Weihnachtsfeiertag kirchlich gebotener Feiertag¥0f. Es besteht ¥fApplikations- sowie Sonn- und Feiertagspflicht¥0f (s.°o.°Kap.°I.C.1.). In den Messfeiern wird daher das Glaubensbekenntnis gebetet (bzw. gesungen).¥p¥sSeit dem Jahr 2003 trägt das Fest des hl. Stephanus in Deutschland auch den Charakter eines Gebetstages der Solidarität mit den verfolgten und bedrängten Christen aufgrund der Initiative der DBK in diesem Anliegen. Durch Beschluss der DBK vom Juni 2012 wurde er ab 2012 zum ¥f„Gebetstag für verfolgte und bedrängte Christen“¥0f erklärt. Spezielle Fürbitten der DBK zum heutigen Gebetstag auf der Homepage der DBK www.dbk.de unter: Menü › Themen › Solidarität mit verfolgten Christen › Gebetstag.¥p",
        "deceased": "",
        "deceased_more": "1983 †¥tWilhelm°Klaus, Pfarrer°in°Leinefelde¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "27": {
        "liturgy": "¥fSa¥0f¥t¥qfHl. Johannes¥0f, Ap, Evangelist, ¥fFest¥0f¥lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pw¥t¥fMs eig¥0f, Gl, WeihnPräf (bes. I oder III), n.B.°Hg°I, in°den Hg°I¥_III eig°Einschub wie Weihnachten, FSS:°MB°558 oder 534¥pw¥t¥kabends:¥0k ggf. ¥fVorabendmesse vom F¥0f – ¥f1.°Vp°vom°folg°F¥0f (StB°I°200ff)°–°1.°Kp°vom°So¥p",
        "notes": "¥fHinweis:¥0f ¥sZur ¥fSegnung von Johanneswein¥0f am heutigen Fest s.°Benediktionale°Nr.°3,°S.°38f.¥p",
        "deceased": "",
        "deceased_more": "1933 †¥tRobert°Heddergott, Dechant, Pfarrer°in°Heiligenstadt, St.°Aegidii¥p1967 †¥tAdolf°Lorenz°(Leitmeritz), Pfr.i.R., Deuna°üb.°Leinefelde¥p1969 †¥tP.°Josef°Schwan°SAC, GR, Männerseelsorger°der°Diözese°Fulda¥p1989 †¥tDDr.°Adalbert°Dölle, Pfr.i.R., Fulda¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "28": {
        "liturgy": "¥fSo¥0f¥a¥t¥qfFest der Hl. Familie¥0f ¥fJesus, Maria, Josef¥0f – ¥fSonntag in der Weihnachtsoktav¥0f – ¥fFamiliensonntag¥0f – Psalt:°I.°Woche – Te°Deum – Kl.°Hore:°eig°Ant,°Ps°vom°So°der°1.°Woche¥pw¥t¥fMs eig¥0f (MB°44/²42), Gl,°Cr, ¥fFürbitten für die ungeborenen Kinder¥0f, WeihnPräf°(bes.°II), in°den Hg°I¥_III eig°Einschub wie Weihnachten, FSS:°MB°534 – ¥f2.°Vp°vom°F – 2.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweise:¥0f¥p¥sAm heutigen ¥fFest der hl. Familie¥0f wird der ¥fFamiliensonntag¥0f begangen. ¥fLeitthema und Arbeitshilfen unter www.ehe-familie-kirche.de¥0f. Diözesen, Gemeinden, Verbände und kirchliche Einrichtungen sind eingeladen, sich mit eigenen Veranstaltungen und Initiativen zum Jahresthema einzubringen und das Jahresmotto ggf.°an einem anderen Sonntag im Kirchenjahr aufzugreifen.¥p¥sZum heutigen ¥fFest der hl. Familie¥0f ist es angebracht, eine ¥ffeierliche Segnung der Kinder¥0f zu halten. Ein Vorschlag findet sich im Benediktionale°Nr.°2,°S.°34ff. Es können aber auch Familien oder Familienteile gesegnet werden, etwa nach der Homilie oder im Anschluss an die hl. Messe (vgl. Benediktionale°Nr.°51,°S.°237ff: Segnung einer Familie durch den Priester).  – Fürbitten für die Familien.¥p¥sDas ¥fFest der Unschuldigen Kinder¥0f entfällt in diesem Jahr. Dennoch empfiehlt sich heute in den ¥fFürbitten¥0f und/oder auch außerhalb der hl. Messe ¥ffür den Schutz der ungeborenen Kinder/des menschlichen Embryos und eine neue diesbezügliche Mentalität und Gesetzgebung¥0f zu beten. Gemeinsames Rosenkranzgebet in diesem Anliegen ist um 18.30 Uhr an der Mariensäule unterhalb des Frauenberges Fulda.¥p",
        "deceased": "1998 †¥tFriedrich°Dietz,°Msgr., Ordinariatsrat°i.R., Künzell¥p2021 †¥tWilfried°Umlauf, Pfr.i.R., Bad°Orb¥p",
        "deceased_more": "1998 †¥tFriedrich°Dietz, Msgr., Ordinariatsrat°i.R., Künzell¥p2021 †¥tWilfried°Umlauf, Pfr.i.R., Bad°Orb¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "29": {
        "liturgy": "¥fMo¥0f¥t¥f5. Tag der Weihnachtsoktav¥0f¥ln. B. Komm des ¥fhl. Thomas Becket¥0f, Bi, Märt (s.°o.°Kap.°II.C.4.)¥lOff eig – Te°Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pw¥t¥fMs vom Tag¥0f, Gl, Tg°vom Tag oder vom Hl, WeihnPräf, in°den Hg°I¥_III eig°Einschub wie Weihnachten – ¥f1.°oder°2.°Kp°vom°So¥0f¥p",
        "notes": "",
        "deceased": "",
        "deceased_more": "1923 †¥tHeinrich°Burchard, Pfarrer°in°Kassel, St.°Michael¥p1925 †¥tAndreas°Weigand, Pfarrer°in°Großentaft¥p1969 †¥tAlbert°Klesper, Pfr.i.R., Ungedanken¥p1972 †¥tFriedrich°Leo°Kreß, Pfr.i.R., Liebhards¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "30": {
        "liturgy": "¥fDi¥0f¥t¥f6. Tag der Weihnachtsoktav¥0f¥lOff eig – Te°Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pw¥t¥fMs vom Tag¥0f, Gl, WeihnPräf, in°den Hg°I¥_III eig°Einschub wie Weihnachten – ¥f1.°oder°2.°Kp°vom°So¥0f¥p",
        "notes": "",
        "deceased": "1998 †¥tKarl°Keil°(Würzburg),°BGS¥-Oberpfarrer°a.D., Würzburg¥p",
        "deceased_more": "1929 †¥tKarl°Alexander°Abel, Pfarrer°in°Frankfurt¥-Fechenheim¥p1946 †¥tOswald°Kullmann, Pfr.i.R., Breitenholz¥p1966 †¥tPaul°Litz, Kpl.i.R., Eiterfeld¥p1981 †¥tDDr.°Gottfried°Ambrosius°Flügel, Prof.°em., Dr.°theol.°et°phil., Prälat, Domkapitular°i.R., Fulda¥p1998 †¥tKarl°Keil°(Würzburg), BGS¥-Oberpfarrer°a.D., Würzburg¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      },
      "31": {
        "liturgy": "¥fMi¥0f¥t¥f7. Tag der Weihnachtsoktav¥0f¥ln. B. Komm des ¥fhl. Silvester I.¥0f, Pp (s.°o.°Kap.°II.C.4.)¥lOff eig – Te°Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt¥pw¥t¥fMs vom Tag¥0f, Gl, Tg°vom Tag oder vom Hl, WeihnPräf, in°den Hg°I¥_III eig°Einschub wie Weihnachten¥pw¥t¥kabends:¥0k ggf.°¥fVorabendmesse°vom°H¥0f – ¥f1.°Vp°vom°folg°H¥0f°–°¥f1.°Kp°vom°So¥0f¥p",
        "notes": "¥fHinweis:¥0f ¥s¥fEin vollkommener Ablass¥0f (s.°o.°Kap.°I.C.10.) kann unter den üblichen Bedingungen (Beichte, entschlossene Abkehr von jeder Sünde, Kommunionempfang, Gebet in den Anliegen des Papstes) gewonnen werden, wenn man ¥fheute zum Jahresschluss in einer Kirche oder Kapelle¥0f andächtig dem ¥ffeierlichen Gesang des Hymnus „Dich, Gott, loben wir“ („Te°Deum“)¥0f beiwohnt.¥p",
        "deceased": "1995 †¥tAnton°Kowalewski°(Ermland), Pfr.i.R., GR, Bad°Orb¥p1998 †¥tWalter°Heine, Pfarrer°in°Haina°(Kloster)¥p",
        "deceased_more": "1957 †¥tJohannes°Krebs, Pfarrer°in°Lengenfeld°u.°St.¥p1982 †¥tDr.°Gregor°Krüger°(Schneidemühl), Prälat, Ordinariatsrat°i.R., Erfurt¥p1995 †¥tAnton°Kowalewski°(Ermland), Pfr.i.R., GR, Bad°Orb¥p1998 †¥tWalter°Heine, Pfarrer°in°Haina°(Kloster)¥p",
        "prayerTexts": "Beispieltext",
        "vig_notes": "",
        "vig_liturgy": ""
      }
    }
  }
};