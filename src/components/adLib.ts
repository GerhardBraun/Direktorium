interface LeseHoreData {
  comm_1?: string;
  comm_2?: string;
  patr_autor?: string;
  patr_werk?: string;
  patr_text?: string;
  patr_resp1?: string;
  patr_resp2?: string;
  patr_resp3?: string;
  oration?: string;
}

interface LaudesData {
  comm_1?: string;
  comm_2?: string;
  Ant_Ev?: string;
  Ant_Komm?: string;
  oration?: string;
}

interface VesperData {
  comm_1?: string;
  comm_2?: string;
  Ant_Ev?: string;
  Ant_Komm?: string;
  oration?: string;
}

interface DayEntry {
  name?: string;
  genitiv?: string;
  Lesehore?: LeseHoreData;
  Laudes?: LaudesData;
  Vesper?: VesperData;
}

interface DayData {
  [source: string]: DayEntry;
}

interface AdLibData {
  [month: number]: {
    [day: number]: DayData;
  };
}

export const adlibData = {
  "1": {
    "7": {
      "n1": {
        "name": "Valentin",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "II. Vatikanisches Konzil (1962–1965)",
          "patr_werk": "Aus der dogmatischen Konstitution über die Kirche.",
          "patr_text": "Wie nämlich der Sohn vom Vater gesandt ist, so hat er selbst die Apostel gesandt (vgl. Joh 20,21) mit den Worten: „Gehet hin und lehret alle Völker, taufet sie im Namen des Vaters und des Sohnes und des Heiligen Geistes, lehret sie alles halten, was ich euch geboten habe. Und siehe, ich bin bei euch alle Tage bis ans Ende der Welt“ (Mt 28,18–20). Diesen feierlichen Auftrag Christi zur Verkündigung der Heilswahrheit hat die Kirche von den Aposteln erhalten und muss ihn erfüllen bis zu den Grenzen der Erde (vgl. Apg 1,8).^pDaher macht sie sich die Worte des Apostels zu eigen: „Weh mir, wenn ich die Frohbotschaft nicht verkünde!“ (1 Kor 9,16) Unablässig fährt sie darum fort, Verkünder auszusenden, bis die neuen Kirchen voll errichtet sind und auch selbst das Werk der Verkündigung fortsetzen können. Sie wird nämlich vom Heiligen Geiste angetrieben, mitzuwirken, dass der Ratschluss Gottes, der Christus zum Ursprung des Heils für die ganze Welt bestellt hat, tatsächlich ausgeführt werde. In der Verkündigung der Frohbotschaft sucht die Kirche die Hörer zum Glauben und zum Bekenntnis des Glaubens zu bringen, bereitet sie für die Taufe Vor, befreit sie aus der Knechtschaft des Irrtums und gliedert sie Christus ein, damit sie durch die Liebe bis zur Fülle in ihn hineinwachsen.^pIhre Mühe aber bewirkt, dass aller Same des Guten, der sich in Herz und Geist der Menschen oder in den eigenen Riten und Kulturen der Völker findet, nicht nur nicht untergehe, sondern geheilt, erhoben und vollendet werde zur Ehre Gottes, zur Beschämung des Teufels und zur Seligkeit des Menschen.",
          "patr_resp1": "Gebt acht auf die ganze Herde, in der euch der Heilige Geist zu Bischöfen bestellt hat;",
          "patr_resp2": "sorgt wie Hirten für die Kirche Gottes, die er sich durch das Blut seines eigenen Sohnes erworben hat.",
          "patr_resp3": "Von Verwaltern verlangt man, dass sie sich treu erweisen.",
          "oration": "Allmächtiger Gott, du hast den heiligen Valentin befähigt, als Missionar und Bischof den Menschen seiner Zeit ein treuer Helfer zu sein. Wecke in uns das Bewusstsein, dass wir füreinander verantwortlich sind, und hilf uns, einander im Glauben zu stützen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Valentin",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, du hast den heiligen Valentin befähigt, als Missionar und Bischof den Menschen seiner Zeit ein treuer Helfer zu sein. Wecke in uns das Bewusstsein, dass wir füreinander verantwortlich sind, und hilf uns, einander im Glauben zu stützen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Valentin",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, du hast den heiligen Valentin befähigt, als Missionar und Bischof den Menschen seiner Zeit ein treuer Helfer zu sein. Wecke in uns das Bewusstsein, dass wir füreinander verantwortlich sind, und hilf uns, einander im Glauben zu stützen. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Raimund von Penyafort",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Raimund von Penyafort († 1275)",
          "patr_werk": "Aus einem Brief über die christliche Lebensführung.",
          "patr_text": "^hDer Gott des Friedens gebe euren Herzen den Frieden^pWenn der Prediger der Wahrheit mit Recht gesagt hat, dass alle, die fromm in Christus leben, Verfolgung leiden müssen, so meine ich, dass auch in unserer Zeit davon keiner ausgenommen ist, es sei denn, er lege keinen Wert darauf, „besonnen, gerecht und fromm in dieser Welt zu leben“ (Tit 2,12), oder er wisse nichts davon. Ihr sollt auf jeden Fall zu denen gehören, deren Haus ruhig, friedlich und sicher ist, nicht zu denen, die die Zuchtrute Gottes nicht kennen, die ein bequemes Leben führen und plötzlich zur Hölle fahren.^pWeil ihr Gott gefallt und Gnade gefunden habt, so verdient und verlangt es eure Lauterkeit und Frömmigkeit, dass ihr durch häufige Leiden bis zur vollen Reinheit geläutert werdet. Wenn das Schwert zuweilen doppelt und dreifach über euch kommt, so sollt ihr darin reine Freude und ein Zeichen der Liebe erblicken.^pEin zweischneidiges Schwert sind die äußeren Kämpfe und die innere Furcht. Es wird im Inneren verdoppelt oder verdreifacht, wenn der verschlagene Feind das Herz mit List und Schmähung beunruhigt. Ihr habt diese Kampfweise bis heute hinreichend erfahren. Sonst wäre es unmöglich gewesen, zu Frieden und innerer Ruhe mit ihrer Schönheit zu gelangen.^pÄußerlich wird das Schwert verdoppelt und verdreifacht, wenn ohne Ursache eine kirchliche Verfolgung wegen geistlicher Fragen ausbricht. Die Wunden sind dann besonders schwer, wenn sie von Freunden kommen.^pDarin besteht das ersehnte und selige Kreuz Christi, das Andreas mit wahrhaft männlicher Tapferkeit freudigen Herzens annahm, das Kreuz, der einzige Ruhm des „auserwählten Werkzeugs“ (vgl. Apg 9,15).^pSchaut also auf Jesus, den Urheber und Beschützer des Glaubens, der unschuldig von den Seinen leiden musste und unter die Verbrecher gerechnet wurde. Wenn ihr den Kelch des Herrn Jesus – wie herrlich ist er! (vgl. Ps 23,5 Vg.) – trinkt, sagt dem Herrn Dank, von dem alles Gute kommt.^pDer Gott der Liebe und des Friedens gebe euren Herzen den Frieden. Er beschleunige eure Schritte. Er hole euch in die Geborgenheit seines Angesichts, bis er euch in jene Fülle (des Lebens) versetzt, wo ihr auf ewig in der Schönheit des Friedens, in den Gezeiten der Zuversicht, in Reichtum und Ruhe wohnen werdet.",
          "patr_resp1": "Mit den Strahlen seiner Lehre erleuchtet er jene, die in Finsternis sitzen.",
          "patr_resp2": "Mit der Glut der Liebe befreit er jene, die in Armut und Eisen gebunden sind.",
          "patr_resp3": "Die sich verirrt haben auf den Weg der Sünde, führt er zurück, und er befreit den Armen aus der Hand des Mächtigen.",
          "oration": "Barmherziger Gott, du hast dem heiligen Raimund die Kraft deiner Liebe geschenkt und ihn den Gefangenen als Helfer gesandt. Höre auf seine Fürsprache und befreie uns von der Gefangenschaft der Sünde, damit wir als wahrhaft freie Menschen das Gebot der Liebe erfüllen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Raimund von Penyafort",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Barmherziger Gott, du hast dem heiligen Raimund die Kraft deiner Liebe geschenkt und ihn den Gefangenen als Helfer gesandt. Höre auf seine Fürsprache und befreie uns von der Gefangenschaft der Sünde, damit wir als wahrhaft freie Menschen das Gebot der Liebe erfüllen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Raimund von Penyafort",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Barmherziger Gott, du hast dem heiligen Raimund die Kraft deiner Liebe geschenkt und ihn den Gefangenen als Helfer gesandt. Höre auf seine Fürsprache und befreie uns von der Gefangenschaft der Sünde, damit wir als wahrhaft freie Menschen das Gebot der Liebe erfüllen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "8": {
      "n1": {
        "name": "Severin",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Eugippius († nach 533)",
          "patr_werk": "Aus der Lebensbeschreibung über den heiligen Severin.",
          "patr_text": "^hUnsere Lebensweisheit stehe mit unseren Vorsätzen in Einklang^pAm 3. Januar empfand Severin leichte Schmerzen in der Seite. Nach drei Tagen ließ er um Mitternacht die Brüder zusammenkommen, sagte ihnen, dass er den Tod nahen fühle, ermahnte sie väterlich und sprach zu ihnen eindringlich und zu Herzen gehend: Geliebte Söhne in Christus, ihr wisst, dass der heilige Jakob, als er dem Tode nahe war, seine Söhne zu sich berief, jeden einzeln mit prophetischen Worten segnete und ihnen die Geheimnisse der Zukunft enthüllte.^pIch bin schwach, matt, mir fehlt die innere Glut jenes Großen; daher darf ich es nicht wagen, meinen schwachen Kräften solches zuzutrauen. Eines aber, was der Demut nicht widerspricht, kann ich tun: euch auf die Beispiele der Vorfahren verweisen; betrachtet ihren Tod, betrachtet die Kraft ihres Glaubens.^pAbraham, der vom Herrn berufen war, gehorchte im Glauben und zog so in ein Land, welches er zu eigen erhalten sollte; und er zog aus, ohne zu wissen, wohin. Folget also diesem seligen Patriarchen nach, in seinem Glauben, in seiner Heiligkeit, suchet nicht das Irdische, sondern nur euer himmlisches Vaterland.^pUnser Gott ist denen nahe, die aufrichtigen Herzens sind. Die für Gott kämpfen, sollen nie ablassen von beharrlichem Gebet. Die Buße soll nicht scheuen, wer die Tat nicht scheute. Wenn ihr gesündigt habt, haltet nicht mit der Reue zurück, da der Zorn Gottes durch Tränen besänftigt wird und das Opfer, das ihm gefällt, ein zerknirschter Geist ist. Lasset uns also von Herzen still und demütig sein; lasset uns jede Sünde vermeiden und die Gebote Gottes stets beobachten.^pWisst, unser schlichtes Kleid, die Tatsache, dass wir Mönche sind, fromme Reden und frommes Gehaben sind uns alles nichts nütze, wenn wir in der Beobachtung der Gebote Gottes nachlässig und untreu befunden werden. Unsere Lebensweise vor allem, meine lieben Söhne, muss also mit unseren Vorsätzen in Einklang stehen. Es ist traurig, wenn ein Laie in Sünden fällt; wieviel trauriger ist dies aber bei Mönchen, welche die Lockungen der Welt wie eine wilde Bestie fliehen und Christus allein im Herzen tragen sollen; wo Haltung und Kleid allein schon Reinheit der Sitten zu verbürgen scheinen. Aber was halte ich euch auf, liebe Söhne, mit meiner langen Rede!^pDann rief er alle der Reihe nach zu sich und nahm von jedem mit einem Kuss Abschied. Er empfing das Sakrament der Kommunion, bat alle, nicht um ihn zu weinen, bezeichnete mit erhobener Hand seinen ganzen Leib mit dem Zeichen des Kreuzes und forderte sie schließlich auf, den Psalm zu singen. Da sie es, von Schmerz überwältigt, aber nicht vermochten, intonierte er selbst den Gesang: „Lobt den Herrn in seinem Heiligtum, alles, was atmet, lobe den Herrn“ (Ps 150). Wir hatten diesen Vers kaum beantwortet, als er ruhig im Herrn verschied. Es war der 8. Januar 482.",
          "patr_resp1": "Lobet Gott in seinem Heiligtum.",
          "patr_resp2": "Alles, was atmet, lobe den Herrn.",
          "patr_resp3": "Lobt ihn für seine großen Taten.",
          "oration": "Gütiger Gott, du hast den Mönch Severin zu seinen Glaubensbrüdern gesandt, damit er in den Wirren der Zeit ihr Ratgeber und Führer sei. Mache auch uns bereit, Verantwortung zu tragen, und hilf uns, denen beizustehen, die in Not sind. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Severin",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gütiger Gott, du hast den Mönch Severin zu seinen Glaubensbrüdern gesandt, damit er in den Wirren der Zeit ihr Ratgeber und Führer sei. Mache auch uns bereit, Verantwortung zu tragen, und hilf uns, denen beizustehen, die in Not sind. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Severin",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gütiger Gott, du hast den Mönch Severin zu seinen Glaubensbrüdern gesandt, damit er in den Wirren der Zeit ihr Ratgeber und Führer sei. Mache auch uns bereit, Verantwortung zu tragen, und hilf uns, denen beizustehen, die in Not sind. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "13": {
      "n1": {
        "name": "Hilarius",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Hilarius von Poitiers († 367)",
          "patr_werk": "Aus dem Buch über die Dreifaltigkeit.",
          "patr_text": "^hIch diene dir, indem ich dich verkündige^pVater, allmächtiger Gott. Keinen größeren Lohn kann mir die von dir geschenkte Sprache bringen, als dass sie dir dient, indem sie dich verkündigt und dem Unwissenden oder dem Irrlehrer zeigt, wer du bist: der Vater nämlich des einziggezeugten Sohnes Gottes.^pDamit bekenne ich nur mein Wollen. Im übrigen muss ich beten um die Gabe deiner Hilfe und deines Erbarmens, dass du die ausgespannten Segel meines Glaubens und meines Bekennens mit dem Hauch deines Geistes füllst und uns auf dem Kurs der begonnenen Predigt vorantreibst, Denn kein Unglaubwürdiger war es, der die Verheißung gab: „Bittet, dann wird euch gegeben; sucht, dann werdet ihr finden; klopft an, dann wird euch geöffnet“ (Mt 7,7).^pWir sind arm und bitten um das, was wir brauchen. An die Erforschung der Propheten- und Apostelworte werden wir mit eindringlichem Studium herangehen. Wir werden an alle verriegelten Zugänge der Erkenntnis klopfen. Aber an dir liegt es, ob du das Erbetene gewährst, ob sich das Gesuchte finden lässt und ob die Tür aufgeht, an die wir pochen. Ich bin wie betäubt von einer gewissen trägen Gefühlsarmut, und durch die Schwachheit meines Geistes bin ich bei dem Versuch, zu erkennen, was dein ist, in die engen Schranken meiner Unwissenheit gebannt. Schon das Studium deiner Lehre befähigt mich, das Göttliche zu fühlen und zu erkennen. Der Gehorsam des Glaubens jedoch führt über das rein menschliche Meinen hinaus. Ich warte darauf, dass du den Anfang dieses Beginnens weitertreibst, und wenn es im Fortschreiten wächst, dass du es festigst und zur Gemeinschaft mit dem Geist der Propheten und Apostel rufst, damit ich ihre Worte nicht anders verstehe, als sie gesagt sind, und damit ich die Bedeutung der Wirklichkeiten und dadurch die geeigneten Worte finde.^pWas in ihnen im Geheimnis verkündet wurde, das werden wir predigen: dich, den ewigen Gott, den Vater des ewigen einziggezeugten Gottes, dich, den Einen, den Ungeborenen, und den einen Herrn Jesus Christus, aus dir geboren in ewiger Geburt.",
          "patr_resp1": "Jeder Geist, der bekennt: Jesus Christus ist im Fleisch gekommen, der ist aus Gott; und jeder Geist, der Jesus nicht bekennt, ist nicht aus Gott.",
          "patr_resp2": "Daran erkennen wir den Geist der Wahrheit und den Geist der Täuschung.",
          "patr_resp3": "Wer bekennt, dass Jesus der Sohn Gottes ist, in dem bleibt Gott, und er bleibt in Gott.",
          "oration": "Allmächtiger Gott, erhöre unser Gebet am Gedenktag des heiligen Bischofs Hilarius, der unermüdlich die Lehre von der Gottheit deines Sohnes verteidigt hat. Gib uns die Weisheit und Kraft, damit wir die Größe dieses Geheimnisses erkennen und deinen Sohn glaubwürdig bezeugen, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Laudes": {
          "name": "Hilarius",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, erhöre unser Gebet am Gedenktag des heiligen Bischofs Hilarius, der unermüdlich die Lehre von der Gottheit deines Sohnes verteidigt hat. Gib uns die Weisheit und Kraft, damit wir die Größe dieses Geheimnisses erkennen und deinen Sohn glaubwürdig bezeugen, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Vesper": {
          "name": "Hilarius",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, erhöre unser Gebet am Gedenktag des heiligen Bischofs Hilarius, der unermüdlich die Lehre von der Gottheit deines Sohnes verteidigt hat. Gib uns die Weisheit und Kraft, damit wir die Größe dieses Geheimnisses erkennen und deinen Sohn glaubwürdig bezeugen, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      }
    },
    "20": {
      "n1": {
        "name": "Fabian",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Cyprian von Karthago († 258)",
          "patr_werk": "Aus Briefen des hl. Cyprian und der römischen Kirche.",
          "patr_text": "^hFabian hat uns ein Beispiel des Glaubens und der Tugend gegeben^pAls der heilige Cyprian vom Tod des Papstes Fabian erfuhr, sandte er folgenden Brief an die Presbyter und Diakone Roms:^p„Das Gerücht vom Tod meines vortrefflichen Amtsbruders war bei uns noch vage, und die Meinungen waren geteilt. Da erhielt ich von euch durch den Subdiakon Crementius einen Brief, durch den ich volle Klarheit über sein ruhmreiches Ende empfing. Ich jubelte, denn seine ehrenvolle Vollendung entsprach seiner untadeligen Amtsführung.^pAuch euch beglückwünsche ich sehr, dass ihr seinem Gedächtnis ein so feierliches und hervorragendes Zeugnis gebt. Durch euch erfahren wir, was euch bei dem ruhmreichen Andenken des Vorstehers bewegt und was uns zugleich ein Beispiel von Glauben und Tugend bietet.^pSo verhängnisvoll sich das Versagen eines Vorstehers für den Abfall derer auswirkt, die zu ihm gehören, so gut und heilbringend ist es umgekehrt, wenn der Bischof sich für die Brüder als nachahmenswertes Vorbild erweist.“^pNoch ehe die Kirche von Rom diesen Brief erhielt, scheint sie der Kirche von Karthago Nachricht von ihrer eigenen Treue in der Verfolgung übermittelt zu haben: „Die Kirche steht im Glauben fest, wenn auch einige gefallen sind, von Schrecken erschüttert, oder weil sie hohe Stellungen innehatten oder von Menschen furcht gepackt wurden. Wir haben diese von uns Getrennten nicht im Stich gelassen, sondern sie ernstlieh ermahnt, und wir ermahnen sie nach immer, Buße zu tun, ob sie etwa von dem, der sie gewähren kann, Vergebung erlangen können. (so haben wir es gehalten) damit sie nicht, von uns verlassen, noch schlechter werden.^pSeht also, liebe Brüder: auch ihr müsst so verfahren, damit die Gefallenen sich auf euer Zureden hin bessern und, wenn sie wieder ergriffen werden, das Bekenntnis leisten. Dann können sie den Fehltritt von früher gutmachen. Auch andere Pflichten müsst ihr zusätzlich erfüllen wie wir, damit jene, die in Versuchung geraten und schwach zu werden drohen, Buße für ihr Tun üben und nach Wiedervereinigung verlangen. Ja, wir müssen ihnen zu Hilfe kommen. Die Witwen oder die Bedrängten, die sich selbst nicht helfen können, jene, die im Gefängnis sind und die ihre Stellung verloren haben, sie müssen selbstverständlich Menschen haben, die für sie sorgen. Auch die Katechumenen, die von Schwäche erfasst werden, dürfen nicht die Enttäuschung erleben, dass keiner ihnen hilft.^pEs grüßen euch die Brüder, die in Gefangenschaft sind, die Presbyter und die ganze Kirche, die auch mit höchstem Eifer für alle betet, die den Namen des Herrn anrufen. Auch wir bitten, dass ihr eurerseits an uns denkt.“",
          "patr_resp1": "Ich sehne mich danach, aufzubrechen und bei Christus zu sein; ich halte alles für Unrat, um Christus zu gewinnen;",
          "patr_resp2": "Christus ist für mich Leben und Sterben Gewinn.",
          "patr_resp3": "Wenn auch mein Leben dargebracht wird zusammen mit dem Gottesdienst eures Glaubens, freue ich mich, und ich freue mich mit euch allen.",
          "oration": "Gott, du bist der Ruhm deiner Kirche und die Kraft ihrer Hirten. Du stärkst die Märtyrer zum Zeugnis und belohnst sie mit ewiger Herrlichkeit. Höre auf die Fürsprache des heiligen Papstes Fabian, mit dem uns der Glaube an Christus verbindet, und hilf auch uns, dir bis in den Tod die Treue zu bewahren. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Fabian",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du bist der Ruhm deiner Kirche und die Kraft ihrer Hirten. Du stärkst die Märtyrer zum Zeugnis und belohnst sie mit ewiger Herrlichkeit. Höre auf die Fürsprache des heiligen Papstes Fabian, mit dem uns der Glaube an Christus verbindet, und hilf auch uns, dir bis in den Tod die Treue zu bewahren. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Fabian",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du bist der Ruhm deiner Kirche und die Kraft ihrer Hirten. Du stärkst die Märtyrer zum Zeugnis und belohnst sie mit ewiger Herrlichkeit. Höre auf die Fürsprache des heiligen Papstes Fabian, mit dem uns der Glaube an Christus verbindet, und hilf auch uns, dir bis in den Tod die Treue zu bewahren. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Sebastian",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Ambrosius († 397)",
          "patr_werk": " Zu Psalm 119.",
          "patr_text": "^hDas treue Zeugnis für Christus^p„Durch viele Drangsale müssen wir in das Reich Gottes gelangen“ (Apg 14,22). Wenn die Verfolgungen zahlreich sind, dann sind es ebenso viele Prüfungen; wo viele Kronen winken, da gibt es auch viele Kämpfe. Es ist also gut für dich, dass es viele Verfolger gibt, damit du unter den vielen Nachstellungen den Weg findest, auf dem du die Krone erlangen kannst.^pWir wollen uns das Beispiel des heiligen Sebastian zunutze machen, dessen Gedenktag heute ist. Er ist hier in Mailand geboren. Vielleicht war die Verfolgung schon vorbei, oder sie war noch nicht bis hierher vorgedrungen . Sebastian merkte, dass der Kampf ausblieb oder nachließ. Da reiste er nach Rom, wo wegen des Eifers für den Glauben bittere Verfolgungen entbrannt waren, und dort musste er leiden, das heißt: dort wurde er gekrönt. Dort, wohin er als Gast kam, schlug er den Wohnsitz ewiger Unsterblichkeit auf. Hätte es nur EINEN Verfolger gegeben, wäre dieser Märtyrer wohl nicht gekrönt worden.^pAber schlimmer: nicht nur die sind Verfolger, die wir sehen, sondern auch die, welche wir nicht sehen, und diese Verfolger sind zahlreicher. Wie nämlich der eine Verfolgerkönig seine Befehle aussandte und wie es in den einzelnen Städten und Provinzen jedes Mal wieder neue Verfolger gab, so hat auch der Teufel viele Diener unter sich, die nicht nur äußerlich, sondern auch im Innern der einzelnen Seelen Verfolgungen entfachen. Von diesen Verfolgungen heißt es: „Alle, die in der Gemeinschaft mit Christus ein frommes Leben führen wollen, werden verfolgt werden“ (2 Tim 3,12). „Alle“ heißt es, keiner ist ausgenommen! Wer könnte auch ausgenommen sein, da der Herr selbst durch die Leiden der Verfolgungen geprüft wurde.^pWie viele stille Märtyrer Christi gibt es täglich, die Jesus Christus bekennen! Dieses Martyrium, dieses treue Zeugnis für Christus kannte der Apostel, wenn er sagte: „Das ist unser Ruhm: das Zeugnis unseres Gewissens!“ (2 Kor 1,12)",
          "patr_resp1": "Er kämpfte bis zum Tod für das Gesetz seines Gottes und fürchtete sich nicht vor den Worten der Bösen,",
          "patr_resp2": "denn er war auf einen starken Felsen gegründet.",
          "patr_resp3": "Er achtete das Leben der Welt gering und gelangte zum Himmelreich.",
          "oration": "Herr, unser Gott, wir schauen heute auf das Beispiel der Standhaftigkeit, das der heilige Märtyrer Sebastian durch sein mutiges Bekenntnis gegeben hat. Schenke auch uns den Geist der Stärke, damit wir dir mehr gehorchen als den Menschen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Sebastian",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, wir schauen heute auf das Beispiel der Standhaftigkeit, das der heilige Märtyrer Sebastian durch sein mutiges Bekenntnis gegeben hat. Schenke auch uns den Geist der Stärke, damit wir dir mehr gehorchen als den Menschen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Sebastian",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, wir schauen heute auf das Beispiel der Standhaftigkeit, das der heilige Märtyrer Sebastian durch sein mutiges Bekenntnis gegeben hat. Schenke auch uns den Geist der Stärke, damit wir dir mehr gehorchen als den Menschen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "21": {
      "n1": {
        "name": "Meinrad",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Johannes Cassianus († um 430)",
          "patr_werk": "Aus einer Unterredung mit den Vätern.",
          "patr_text": "^hDas Leben der Mönche^pDie Lebensordnung klösterlicher Gemeinschaften wird in der Apostelgeschichte so beschrieben: „Die Gemeinde der Gläubigen war ein Herz und eine Seele. Keiner nannte etwas von dem, was er hatte, sein Eigentum, sondern sie hatten alles gemeinsam … Jedem wurde davon so viel zugeteilt, wie er nötig hatte“ (Apg 4,32–35). Heute findet man mit Mühe in den Klöstern einige wenige, die so leben wie damals die ganze Kirche. Nach dem Tod. der Apostel begann nämlich die Menge der Gläubigen in ihrem Eifer zu erkalten …^pAber es gab Menschen, in denen das Feuer der apostolischen Zeit noch glühte. Um dem ursprünglichen Leitbild treu zu bleiben, verließen sie die Städte und die Gesellschaft derer, die glaubten, sie selbst und die Kirche Gottes dürften sich ohne alle Askese in einem bequemen Leben einrichten. Einige zogen darum in die Umgebung der Städte und in die Einsamkeit. Sie begannen, für sich selber die Regeln zu beobachten, von denen sie wussten, dass die Apostel sie für den ganzen Leib der Kirche aufgestellt hatten. So bildete sich die Lebensform jener Jünger, die sich der Ansteckung durch die breiten Massen entzogen und zu einer von den übrigen Gläubigen unterschiedenen Kategorie entwickelten. Sie enthielten sich der Ehe, der Familie und der weltlichen Lebensführung. Wegen ihres einsamen Lebens ohne Familie erhielten sie den Namen „Mönche“, das heißt „einsam Lebende“. In der Folgezeit nannte man sie von ihrer Lebensgemeinschaft her „Koinobiten“, das heißt „gemeinsam Lebende“, und ihre Zellen und Häuser „Koinóbien“, das heißt „Häuser der Gemeinschaft“. Wie Blumen und Früchte aus einer kräftig treibenden Wurzel gingen aus dieser vollkommenen Lebensform die heiligen Einsiedler hervor. … Sie suchten die Einsamkeit weder aus Angst auf noch aus ungesundem Übereifer, sondern weil sie sich nach höherer Vollkommenheit und nach der betrachtenden Hingabe an Gott sehnten … Mit gutem Grund heißen sie daher „Anachoreten“ oder „Menschen des Auszugs“. Es genügt ihnen nämlich nicht, die Nachstellungen des Bösen mitten in der Gesellschaft siegreich zu überwinden, sondern sie suchen den offenen Kampf und die unmittelbare Auseinandersetzung mit den Dämonen. Deshalb dringen sie ohne Furcht in die endlose Wüste und Einöde vor. So ahmen sie Johannes den Täufer nach, der zeitlebens in der Wüste weilte, ebenso Elija und Elischa sowie die andern, von denen der Apostel sagt: „Sie zogen umher … Not leidend, bedrängt und misshandelt … in Wüsten und Gebirgen“ (Hebr 11,37.38).",
          "patr_resp1": "Weit fort möchte ich fliehen, die Nacht verbringen in der Wüste,",
          "patr_resp2": "denn in der Stadt sehe ich Gewalttat und Hader, in ihr herrscht Verderben.",
          "patr_resp3": "Wort des Herrn: Ich will sie in die Wüste hinausführen und sie umwerben.",
          "oration": "Allmächtiger Gott, du hast das Lebensopfer des heiligen Meinrad reich belohnt und seine Zelle (im „Finstern Wald“) zu einer Stätte des Segens gemacht. Gib, dass auch wir in der Stille über dein Wort nachsinnen und Frucht bringen in Werken der Liebe. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Meinrad",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, du hast das Lebensopfer des heiligen Meinrad reich belohnt und seine Zelle (im „Finstern Wald“) zu einer Stätte des Segens gemacht. Gib, dass auch wir in der Stille über dein Wort nachsinnen und Frucht bringen in Werken der Liebe. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Meinrad",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, du hast das Lebensopfer des heiligen Meinrad reich belohnt und seine Zelle (im „Finstern Wald“) zu einer Stätte des Segens gemacht. Gib, dass auch wir in der Stille über dein Wort nachsinnen und Frucht bringen in Werken der Liebe. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Agnes",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Ambrosius († 397)",
          "patr_werk": "Aus dem Buch über die Jungfrauen.",
          "patr_text": "^hSie war noch zu jung, um bestraft zu werden, aber schon reif, um zu siegen^p(Heute) ist der Gedenktag einer Jungfrau, lasst uns der Jungfräulichkeit folgen, es ist der Tag einer Märtyrin, lasst uns Gaben opfern! Es ist der Gedächtnistag der heiligen Agnes. Nach der Überlieferung hat sie mit zwölf Jahren das Martyrium erlitten. Welch abscheuerregende Grausamkeit, die auch das zarteste Alter nicht schonte! Aber groß war die Kraft des Glaubens, der auch von diesem Lebensalter Zeugnis erhielt.^pBot der kleine Leib Platz für Wunden? Sie hatte nichts, wo das Eisen sie treffen konnte; doch sie hatte, womit sie das Eisen besiegen konnte. Mädchen in diesem Alter können den strengen Blick der Eltern nicht ertragen und weinen über Nadelstiche wie über Wunden. Sie steht unerschrocken unter den blutigen Händen der Henker. Sie steht, unbewegt vom Klirren der Ketten. Sie bietet dem Dolch des wütenden Soldaten den ganzen Leib. Sie weiß noch nicht, was Sterben heißt, aber sie ist bereit. Gegen ihren Willen wird sie zum Altar gezerrt. Sie breitet inmitten der Flammen die Hände auf Christus hin aus, gerade dort am Götzenaltar bezeichnet sie sich mit dem Zeichen Christi, des Siegers. Jetzt legt sie Nacken und Hände in die eisernen Fesseln, aber keine Fessel vermag die zarten Glieder zu fassen.^pIst es eine neue Art des Martyriums? Noch zu jung, um bestraft zu werden, ist sie schon reif zum Sieg. Schwerlich kann sie kämpfen, doch leicht erringt sie den Siegeskranz. Sie ist eine Lehrmeisterin der Tugend und kann es doch dem Alter nach nicht sein. So eilt die Vermählte nicht zum Brautgemach wie die Jungfrau freudigen Schrittes und eilenden Fußes zum Richtplatz, das Haupt nicht im Schmuck des kunstvoll geflochtenen Haares, sondern mit Christus gekrönt, nicht mit Blumen umwunden, sondern mit Tugenden geziert.^pAlle weinen, nur sie nicht. Viele staunen, dass sie so leichthin das Leben verschwendet, als hätte sie schon ausgekostet, wovon sie kaum nippen durfte. Alle waren starr darüber, dass sie schon Zeugin der Gottheit war, obwohl sie dem Alter nach kaum rechtsfähig war. Aber sie brachte es dahin, dass Gott ihr die Zeugenfähigkeit gab, die ihr die Menschen versagten. Was die Kraft der Natur übersteigt, das wirkt der Schöpfer der Natur.^pMit welchen Schrecken droht der Henker, um sie einzuschüchtern, wie schmeichelt er, um sie zu verführen! Was versprechen ihr die vielen Freier alles, um sie heimzuführen! Sie aber spricht: Schon das wäre Unrecht gegen den Bräutigam, wollte ich darauf warten, ob ich jemand gefalle. Der mich zuerst erwählte, dem will ich gehören. Auf was wartest du, Henker? Der Leib vergehe; ihn könnten Augen lieben, deren Liebe ich nicht mag!^pDa stand sie, betete und beugte den Nacken. Da konntest du den Scharfrichter zittern sehen, als wäre er der Verurteilte. Seine Rechte schwankte, sein Gesicht wurde blass. Ihn sehreckte die Bedrohung des fremden Mädchens, das selbst die Gefahr nicht fürchtete.^pDa seht ihr an der einen Opfergabe das zweifache Martyrium: das der Reinheit und das des Glaubens. Sie blieb Jungfrau und gewann das Martyrium.",
          "patr_resp1": "Lasst uns das fest der heiligen Agnes feiern und daran denken, wie sie gelitten hat.",
          "patr_resp2": "In ihrer Jugend verlor sie den Tod und gewann das Leben.",
          "patr_resp3": "Denn sie liebte nur den Urheber des Lebens.",
          "oration": "Ewiger Gott, du berufst, was schwach ist in dieser Welt, um das, was stark ist, zu beschämen. Höre auf die Fürsprache der heiligen Agnes. Komm uns zu Hilfe, damit auch wir unbeirrt den Glauben bekennen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Agnes",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Ewiger Gott, du berufst, was schwach ist in dieser Welt, um das, was stark ist, zu beschämen. Höre auf die Fürsprache der heiligen Agnes. Komm uns zu Hilfe, damit auch wir unbeirrt den Glauben bekennen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Agnes",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Ewiger Gott, du berufst, was schwach ist in dieser Welt, um das, was stark ist, zu beschämen. Höre auf die Fürsprache der heiligen Agnes. Komm uns zu Hilfe, damit auch wir unbeirrt den Glauben bekennen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "22": {
      "n1": {
        "name": "Vinzenz",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Augustinus († 430)",
          "patr_werk": "Aus einer Predigt.",
          "patr_text": "^hVinzenz siegte in dem Sieger über die Welt^pEs heißt: „Euch wurde die Gnade zuteil, für Christus dazusein, also nicht nur, an ihn zu glauben, sondern auch seinetwegen zu leiden“ (Phil 1,29). Der Diakon Vinzenz erlangte beides, er erlangte und hatte es. Denn was hätte er gehabt, wenn er es nicht empfangen hätte (vgl. 1 Kor 4,7)? Er hatte in seiner Rede Zuversicht und Geduld im Leiden.^pNiemand wage zu predigen auf die Kraft seines eigenen Herzens hin, keiner vertraue auf seine eigene Kraft, wenn er Versuchungen erleiden muss. Denn damit wir Gutes klug sagen, dazu kommt unsere Weisheit von Gott, und damit wir das Böse tapfer erdulden, dafür kommt die Geduld von ihm.^pDenkt daran, wie Jesus Christus im Evangelium seine Jünger ermuntert. Denkt daran, wie der König der Märtyrer seine Soldaten mit geistlichen Waffen versieht, wie er sie auf die Kriege hinweist, wie er Hilfe leistet und Belohnungen aussetzt, wie er zu seinen Jüngern sagt: „In dieser Welt seid ihr in Bedrängnis“, wie sie das erschreckte, wie sie aber getröstet wurden, als er fortfuhr: „Aber habt Mut, ich habe die Welt besiegt“ (Joh 16,33).^pWas wundern wir uns also, meine Lieben, wenn Vinzenz in dem siegte, der die Welt besiegt hat? Es heißt: „In dieser Welt seid ihr in Bedrängnis.“ Wenn es uns drückt, soll es uns doch nicht unterdrücken, wenn es uns bestürmt, soll es uns nicht erstürmen. Eine doppelte Schlachtreihe stellt die Welt gegen den Soldaten Christi auf: sie schmeichelt, tun zu täuschen, und sie droht, um zu zerbrechen. Uns soll die eigene Lust nicht fesseln und fremde Grausamkeit nicht schrecken! Dann ist die Welt besiegt!^pEine furchtbare Grausamkeit wütete am Leib des Märtyrers, und tiefe Ruhe sprach aus seiner Stimme; harte Peinigung tobte sich aus an den Gliedern, aber große Sicherheit sprach aus seinen Worten, so dass wir auf seltsame Weise meinen möchten, beim Leiden des Vinzenz werde ein anderer gefoltert, nicht der, welcher spricht.^pWirklich, liebe Brüder, so war es, ganz so war es: ein anderer sprach! Denn auch dies hat Christus im Evangelium seinen Zeugen verheißen, für die er solche Kämpfe bereithielt. Denn er sprach: „Macht euch nicht im voraus Sorgen, was ihr sagen sollt. Denn nicht ihr werdet dann reden, sondern der Geist eures Vaters, der in euch spricht“ (vgl. Mk 13,11).^pDas Fleisch also litt, der Geist redete, und indem der Geist redete, wurde die Bosheit besiegt, und nicht nur das: auch die Schwachheit wurde stark.",
          "patr_resp1": "Der Herr hat mich geprüft wie Gold, das durch Feuer fließt! Mein Fuß folgte seinen Spuren;",
          "patr_resp2": "ich achtete auf seinen Weg und wich nicht ab von ihm.",
          "patr_resp3": "Christus will ich erkennen und die Gemeinschaft mit seinem Leiden.",
          "oration": "Allmächtiger, ewiger Gott, im Vertrauen auf deine Barmherzigkeit rufen wir zu dir: Erfülle uns mit deinem Geist und gib uns jene Liebe, die den heiligen Diakon Vinzenz fähig machte, die Qualen des Martyriums zu bestehen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Vinzenz",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger, ewiger Gott, im Vertrauen auf deine Barmherzigkeit rufen wir zu dir: Erfülle uns mit deinem Geist und gib uns jene Liebe, die den heiligen Diakon Vinzenz fähig machte, die Qualen des Martyriums zu bestehen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Vinzenz",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger, ewiger Gott, im Vertrauen auf deine Barmherzigkeit rufen wir zu dir: Erfülle uns mit deinem Geist und gib uns jene Liebe, die den heiligen Diakon Vinzenz fähig machte, die Qualen des Martyriums zu bestehen. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Vinzenz Pallotti",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Laudes": {
          "name": "Vinzenz Pallotti",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Vesper": {
          "name": "Vinzenz Pallotti",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        }
      }
    },
    "23": {
      "n1": {
        "name": "Heinrich Seuse",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Heinrich Seuse († 1366)",
          "patr_werk": "Aus dem Büchlein der Ewigen Weisheit.",
          "patr_text": "^hWie manche Menschen unbewusst von Gott geführt werden^pLiebster Herr, mein Gemüt hat seit Kindertagen irgend etwas mit dürstendem Verlangen gesucht, Herr, aber was es ist, das habe ich noch nicht vollkommen begriffen. Herr, ich hab’ ihm viele Jahre heftig nachgejagt, und es konnte mir doch nie recht zuteilwerden, denn ich weiß nicht recht, was es ist, und es ist doch etwas, das mein Herz und meine Seele an sich zieht und ohne das ich niemals recht zur Ruhe kommen kann. Herr, ich wollte es in den frühesten Tagen meiner Kindheit suchen, indem ich es vor mir wirken sah in den Kreaturen. Aber je mehr ich suchte, desto weniger fand ich, und je näher ich hinging, desto weiter entfernte ich mich davon. Denn von jeder wahrgenommenen Erscheinung sprach es auf mich ein, ehe ich sie ganz erfahren hatte oder mich ihr in Ruhe hingab: das ist es nicht, was du suchst. Und dieses Getriebensein ist mir immer und immer bei allen Dingen zuvorgekommen. Herr, nun wütet mein Herz danach, denn es hätte es gerne, und es hat immer wieder empfunden, was es nicht ist, Herr, aber was es ist, das ist ihm noch nicht gezeigt worden. Ach geliebter Herr vom Himmelreich, was ist es und wie ist es beschaffen, was so verborgen in mir spielt?^pAntwort der Ewigen Weisheit: Erkennst du es nicht? Es hat dich doch liebend umfangen und hat dir oft den Weg verstellt, bis es dich nun für sich allein gewonnen hat.^pDer Diener: Herr, ich sah es nie und hörte es nie, ich weiß es nicht, was es ist.^pAntwort der Ewigen Weisheit: Tu deine inneren Augen auf und schau, wer ich bin. Ich bin es, die Ewige Weisheit, die dich in Ewigkeit für sich auserwählt hat mit dem Umfangen meiner ewigen Vorsehung. Ich habe dir so oft den Weg versperrt, so oft du von mir geschieden wärest, wenn ich dich verlassen hätte. Du fandest in allen Dingen einen Widerstand; und das ist das sicherste Zeichen meiner Auserwählten, dass ich sie für mich selbst haben will.",
          "patr_resp1": "Jetzt sind wir Kinder Gottes, aber was wir sein werden, ist noch nicht offenbar geworden.",
          "patr_resp2": "Wir wissen, dass wir ihm ähnlich sein werden, wenn er offenbar wird; denn wir werden ihn sehen wie er ist.",
          "patr_resp3": "Niemand hat Gott je geschaut, aber wenn wir einander lieben, bleibt Gott in uns.",
          "oration": "Gott, du Quell der Weisheit, du hast den seligen Heinrich Seuse in deine Nähe gerufen und ihn zu einem Leben der Buße ermutigt. Lass auch uns in der Nachfolge deines gekreuzigten Sohnes den Trost deiner Gegenwart erfahren. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Heinrich Seuse",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Quell der Weisheit, du hast den seligen Heinrich Seuse in deine Nähe gerufen und ihn zu einem Leben der Buße ermutigt. Lass auch uns in der Nachfolge deines gekreuzigten Sohnes den Trost deiner Gegenwart erfahren. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Heinrich Seuse",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Quell der Weisheit, du hast den seligen Heinrich Seuse in deine Nähe gerufen und ihn zu einem Leben der Buße ermutigt. Lass auch uns in der Nachfolge deines gekreuzigten Sohnes den Trost deiner Gegenwart erfahren. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "27": {
      "n1": {
        "name": "Angela Merici",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Angela Merici († 1540)",
          "patr_werk": "Aus ihrem Testament.",
          "patr_text": "^hMit Güte habe ich alles geordnet^pMeine lieben Mütter und Schwestern in Christus Jesus! Ich bitte euch, nehmt auf jede einzelne von euren Töchtern Rücksicht und tragt sie eingeprägt in eure Herzen mit euch, nicht nur mit dem Namen, sondern eine jede mit ihrer Veranlagung und ihrer jeweiligen Verfassung. Das wird euch nicht schwerfallen, wenn ihr sie mit lebendiger Liebe umfangt.^pDie in der Ordnung der Natur Mütter sind, tragen jedes ihrer Kinder, hätten sie ihrer auch tausend, fest im Herzen und vergessen niemals eines von ihnen. Das wirkt in ihnen die wahre Liebe. Mehr noch: es scheint, je mehr Kinder sie haben, desto größer wird in ihnen die Sorge und die Liebe für jedes einzelne. Erst recht können und müssen jene so tun, die im Geist Mütter sind, weil die geistliche Liebe mächtiger ist als die, welche aus der Vereinigung des Blutes kommt.^pWenn ihr, meine lieben Mütter, diese eure Töchter wirklich lebendig und aufrichtig liebt, kann es gar nicht anders sein, als dass ihr sie alle und jede einzelne in eurem Gedächtnis und in eurem Herzen eingeprägt mit euch tragt.^pIch bitte euch weiter, versucht, sie mit Liebe, Bescheidenheit und Wohlwollen anzuziehen, nicht mit Stolz und Härte. Seid zu allen von Herzen freundlich, wie es recht ist nach dem Wort des Herrn: „Lernt von mir, denn ich bin gütig und von Herzen demütig“ (Mt 11,29). Ahmt Gott nach, von dein wir lesen: „Gütig hat er alles geordnet“ (Weish 8,1). Und noch einmal sagt Jesus: „Mein Joch drückt nicht, und meine Last ist leicht“ (Mt 11,30). So übt auch ihr gegenüber jedermann alle Freundlichkeit und gebt vor allem acht, dass eure Weisungen nicht unter Zwang erfüllt werden. Denn Gott hat einem jeden die Freiheit verliehen. Darum zwingt er niemand, sondern gibt nur Hinweise, ruft und rät. Manchmal muss man auch strenger durchgreifen, doch auch dann rücksichtsvoll und unter Beachtung der Lage und der Notlage der Person. Auch hierbei dürfen wir uns nur von Liebe und Seeleneifer treiben lassen.",
          "patr_resp1": "Wenn wir durch den Geist leben, dann wollen wir auch dem Geist folgen.",
          "patr_resp2": "Die Frucht des Geistes ist Liebe, Freude, Freundlichkeit, Güte und Sanftmut.",
          "patr_resp3": "Wir wollen nicht miteinander streiten und einander nichts nachtragen.",
          "oration": "Gütiger Gott, höre auf die Fürsprache der heiligen Angela. Öffne unsere Augen für das Beispiel der Liebe und der Klugheit, das sie als christliche Erzieherin gegeben hat. Hilf uns, an der wahren Lehre festzuhalten und sie im Leben zu bezeugen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Angela Merici",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gütiger Gott, höre auf die Fürsprache der heiligen Angela. Öffne unsere Augen für das Beispiel der Liebe und der Klugheit, das sie als christliche Erzieherin gegeben hat. Hilf uns, an der wahren Lehre festzuhalten und sie im Leben zu bezeugen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Angela Merici",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gütiger Gott, höre auf die Fürsprache der heiligen Angela. Öffne unsere Augen für das Beispiel der Liebe und der Klugheit, das sie als christliche Erzieherin gegeben hat. Hilf uns, an der wahren Lehre festzuhalten und sie im Leben zu bezeugen. Darum bitten wir durch Jesus Christus."
        }
      }
    }
  },
  "2": {
    "3": {
      "n1": {
        "name": "Ansgar",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Rimbertus († 888)",
          "patr_werk": "Aus der Lebensbeschreibung des hl. Ansgar.",
          "patr_text": "^hEr wollte dem Blinden Auge, dem Lahmen Fuß, dem Armen ein Vater sein^pNach Empfang des Bischofsamtes suchte Ansgar, wo es anging, das im Kloster Begonnene zu vervollkommnen und mühte sich, in seinem Wandel allen Heiligen nachzustreben, besonders dem heiligen Martin. Voller Eifer suchte er, wie er in dessen Lebensbeschreibung gelesen hatte, durch Verkündigung des Gotteswortes den Menschen zu helfen. Zuweilen jedoch liebte er auch Einsamkeit, um sich göttlicher Weisheit zu befleißigen. Solange sich Ansgar einigermaßen jugendkräftig fühlte, maß er sich sehr oft Brot und Wasser genau Zu, besonders wenn er in der Einsamkeit weilen durfte. Doch weil er im Alter von seiner gewohnten, kargen Lebensweise abgehen musste, suchte er durch Almosen, Gebet und viele andere gute Werke einen Ausgleich zu schaffen. Deshalb kaufte er viele Gefangene los und schenkte ihnen die Freiheit zurück. Einige aber, die sich hierfür eigneten, ließ er in Theologie unterweisen, um sie für den Dienst Gottes heranzuziehen.^pWie sehr er sich aus Liebe zu Gott der Andacht befleißigte, bezeugen unsere dicken Bücher, die er mit eigener Hand Wort für Wort niederschrieb. Schließlich stellte sich unser Vater aus Bußsprüchen der Heiligen Schrift für jeden Psalm des Psalters eigene kurze Gebete zusammen. Bald preist er darin Gottes Allmacht und gerechtes Gericht, bald tadelt und schilt er sich selber. Bald rühmt er die Heiligen, die Gott dienen, bald beklagt er die armen Sünder. Sich selbst achtete er geringer als sie alle. Diese Sprüche pflegte er beim gemeinsamen Psalmengesang nach jedem Psalm leise vor sich hin zu murmeln, wollte sie aber niemand mitteilen.^pBei Gesundheit sang er regelmäßig zur gehörigen Tageszeit selbst die öffentliche Messe. Andernfalls hörte er sie wenigstens. All seinen Besitz wünschte er nach dem Willen des Herrn Notleidenden zu geben. Nicht nur im eigenen Sprengel, selbst in fernen Gegenden leistete er Hilfe und Unterstützung. Besondere Fürsorge durch Überweisung des Zehnts einiger Dörfer galt dem Armenspital in Bremen, seiner Gründung; dort sollte neben der täglichen Aufnahme Bedürftiger auch Krankenpflege geübt werden.^pWenn er als Bischof seinen Sprengel Visitierte, ließ er erst die Armen hereinführen, bevor er sich selbst zu Tisch setzte, reichte ihnen selbst das Wasser zum Waschen der Hände, gab ihnen gesegnetes Brot, mischte den Trank und ging mit seinen Begleitern nicht eher zum Mahle, als bis vor ihnen ein Tisch stand. Er wollte dem Blinden Auge, dem Lahmen Fuß, den Armen ein wahrer Vater sein.^pIn solcher Glaubensinbrunst wurde er von der Welt genommen; mit einer sehr großen Gefolgschaft von Gläubigen aus dem Dänen- und Schwedenvolke, die er dem Herrn gewann, wird er daher, so glauben wir, zum Lohne für seinen guten Kampf durch göttliches Gnadengesehenk am Tage der Auferstehung aller ruhmreich und glücklich ins Himmelreich eingehen.",
          "patr_resp1": "Wenn ich das Evangelium verkündige, so kann ich mich nicht rühmen; denn ein Zwang liegt auf mir.",
          "patr_resp2": "Wehe mir, wenn ich das Evangelium nicht verkündige!",
          "patr_resp3": "Allen bin ich alles geworden, um wenigstens einige zu retten.",
          "oration": "Gott, du Heil der Menschen, du hast den heiligen Bischof Ansgar gesandt, den Völkern des Nordens das Evangelium zu verkünden. Höre auf seine Fürsprache und erhalte auch den Menschen unserer Zeit das Licht deiner Wahrheit. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Ansgar",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Heil der Menschen, du hast den heiligen Bischof Ansgar gesandt, den Völkern des Nordens das Evangelium zu verkünden. Höre auf seine Fürsprache und erhalte auch den Menschen unserer Zeit das Licht deiner Wahrheit. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Ansgar",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Heil der Menschen, du hast den heiligen Bischof Ansgar gesandt, den Völkern des Nordens das Evangelium zu verkünden. Höre auf seine Fürsprache und erhalte auch den Menschen unserer Zeit das Licht deiner Wahrheit. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Blasius",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Augustinus († 430)",
          "patr_werk": "Aus einer Predigt über die Weihe eines Bischofs.",
          "patr_text": "^hLeide für meine Schafe^p„Der Menschensohn ist nicht gekommen, um sich dienen zu lassen, sondern um zu dienen und sein Leben hinzugeben als Lösegeld für viele“ (Mt 20,28). Siehe, wie der Herr dient und was für Knechte wir nach seinem Willen sein sollen: „Er gab sein Leben als Lösegeld für viele.“ Er hat uns losgekauft.^pWer von uns wäre fähig, einen andern zu erlösen? Durch sein Blut, durch seinen Tod sind wir vom Tod erlöst. Wir lagen darnieder und wurden durch seine Erniedrigung aufgerichtet. Aber weil wir Christi Glieder sind, müssen wir unseren kleinen Teil zum Heil seiner Glieder beitragen: Er ist das Haupt, wir sind die Glieder.^pDer heilige Johannes macht uns in seinem Brief mahnend auf das Beispiel des Herrn aufmerksam, der gesagt hat: „Wer bei euch groß sein will, der soll euer Diener sein; denn auch der Menschensohn ist nicht gekommen, um sich dienen zu lassen, sondern um zu dienen und sein Leben hinzugeben als Lösegeld für viele.“ Johannes mahnt uns also, Christus ähnlich zu werden: „Christus hat sein Leben für uns gegeben. So müssen auch wir für die Brüder das Leben hingeben“ (1 Joh 3,16). Der Herr selbst fragte nach der Auferstehung den Petrus: „Liebst du mich?“ Der erwiderte: „Ja, ich liebe!“ Der Herr sagte es dreimal, und Petrus antwortete dreimal. Und jedes Mal sprach der Herr: „Weide meine Schafe!“ (Joh 21,15–17)^pNun fährt der Herr fort: „Als du noch jung warst, hast du dich selbst gegürtet und konntest gehen, wohin du wolltest. Wenn du aber alt geworden bist, wirst du deine Hände ausstrecken, und ein anderer wird dich gürten und dich führen, wohin du nicht willst. Das sagte Jesus, um anzudeuten, durch welchen Tod er Gott verherrlichen würde“ (Joh 21,18.19). Er kündete Petrus sein Kreuz an und sagte ihm sein Leiden voraus. Auf dem Weg zu diesem Ziel sagte ihm der Herr: „Weide meine Schafe!“ Leide für meine Schafe!",
          "patr_resp1": "Ich werde in keiner Hinsicht beschämt,",
          "patr_resp2": "aber Christus soll durch meinen Leib verherrlicht werden, sei es im Leben oder im Tod.",
          "patr_resp3": "Die Schande bricht mir das Herz, meine Schmach ist unheilbar.",
          "oration": "Herr, unser Gott, erhöre dein Volk, das am Tag des heiligen Bischofs und Märtyrers Blasius zu dir ruft. Bewahre uns vor Krankheit und Schaden in diesem zeitlichen Leben und hilf uns in aller Not, damit wir das ewige Heil erlangen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Blasius",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, erhöre dein Volk, das am Tag des heiligen Bischofs und Märtyrers Blasius zu dir ruft. Bewahre uns vor Krankheit und Schaden in diesem zeitlichen Leben und hilf uns in aller Not, damit wir das ewige Heil erlangen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Blasius",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, erhöre dein Volk, das am Tag des heiligen Bischofs und Märtyrers Blasius zu dir ruft. Bewahre uns vor Krankheit und Schaden in diesem zeitlichen Leben und hilf uns in aller Not, damit wir das ewige Heil erlangen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "5": {
      "n1": {
        "name": "Agatha",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Methodius von Konstantinopel († 847)",
          "patr_werk": "Aus einer Rede zu Ehren der heiligen Agatha.",
          "patr_text": "^hAgatha, „die Gute“, ist ein Geschenk Gottes, der Quelle des Guten^pDas Jahresgedächtnis der heiligen Märtyrin hat uns alle an diesem Ort zusammengeführt. Wie ihr, meine Hörer, alle wisst, ist der Grund für unsere Versammlung der ruhmvolle Kampf einer der ersten Märtyrinnen alter Zeit. Aber sie gehört auch der Gegenwart an, da sie auch jetzt im Kampf siegt durch die Wunder Gottes, die täglich ihr Kranz und ihr kostbarer Schmuck sind.^pSie ist Jungfrau, weil sie aus dem Wort des unsterblichen Gottes – das auch für mich in seiner Menschheit den Tod erlitt –, aus dem ungeteilten Gottessohn, geboren ist, wie Johannes sagt: „Allen aber, die ihn aufnahmen, gab er Macht, Kinder Gottes zu werden“ (Joh 1,12).^pDie Jungfrau also, die euch zu unserem heiligen Mahl geladen hat, ist die Frau, die dem einen Mann Christus verlobt ist, wenn wir im Sinn des Apostels das Bild von der Vereinigung im Brautgemach gebrauchen wollen (2 Kor 11,2).^pDiese wahrhaft Gute, weil Gottes eigener Anteil, ist Agatha für ihren Bräutigam, und sie ist es kraft der Verbundenheit im Guten, dieser Spiegelung von Sinn und Bedeutung ihres Namens, auch für uns. Gott, der Quell des Guten, hat sie uns als Geschenk verliehen.^pWelche gute Gabe wäre größer als das höchste Gut! Wo wäre jemand mehr des Lobes wert als Agatha, die Gute?^pAgatha, deren Gutsein dem Namen und der Wirklichkeit entspricht; Agatha, die durch ihre herrlichen Taten ihrem guten Namen Ehre macht und eben in diesem guten Namen die guten Taten zeigt, die sie vollbracht hat; Agatha, die durch ihren guten Namen eine solche Anziehungskraft besitzt, dass alle von ganzer Seele zu ihr eilen. Sie lehrt alle Menschen durch ihr gutes Beispiel, unverzüglich mit ihr nach dem wahren Gut zu streben, das allein der eine Gott ist.",
          "patr_resp1": "Der Herr hilft mir, und ich beharre in seinem Bekenntnis;",
          "patr_resp2": "er hat mich gerettet und getröstet.",
          "patr_resp3": "Der makellose Herr hat in seinem Erbarmen sich die Dienerin ohne Makel geweiht.",
          "oration": "Allmächtiger Gott, du hast die heilige Agatha zur Jungfräulichkeit um Christi willen berufen und ihr die Gnade des Martyriums geschenkt. Höre auf ihre Fürsprache und hilf uns, in aller Bedrängnis auszuharren und dir in Lauterkeit und Treue zu dienen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Agatha",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Ev": "Vor Freude strahlend, ging Agatha in den Kerker,^lals ginge sie zu einem Gastmahl,^lund betend empfahl sie dem Herrn ihren Kampf.",
          "Ant_Komm": "Vor Freude strahlend, ging Agatha in den Kerker,^lals ginge sie zu einem Gastmahl,^lund betend empfahl sie dem Herrn ihren Kampf.",
          "oration": "Allmächtiger Gott, du hast die heilige Agatha zur Jungfräulichkeit um Christi willen berufen und ihr die Gnade des Martyriums geschenkt. Höre auf ihre Fürsprache und hilf uns, in aller Bedrängnis auszuharren und dir in Lauterkeit und Treue zu dienen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Agatha",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Ev": "Herr Jesus Christus, guter Meister,^lich sage dir Dank.^lDu gabst mir Kraft, die Folter zu bestehen.^lNun nimm mich auf^lin deine Herrlichkeit, die niemals enden wird.",
          "Ant_Komm": "Herr Jesus Christus, guter Meister,^lich sage dir Dank.^lDu gabst mir Kraft, die Folter zu bestehen.^lNun nimm mich auf^lin deine Herrlichkeit, die niemals enden wird.",
          "oration": "Allmächtiger Gott, du hast die heilige Agatha zur Jungfräulichkeit um Christi willen berufen und ihr die Gnade des Martyriums geschenkt. Höre auf ihre Fürsprache und hilf uns, in aller Bedrängnis auszuharren und dir in Lauterkeit und Treue zu dienen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "6": {
      "n1": {
        "name": "Paul Miki und Gefährten",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_werk": "Aus der Geschichte des Martyriums des heiligen Paul Miki und seiner Gefährten, von einem Zeitgenossen.",
          "patr_text": "^hIhr sollt meine Zeugen sein^pIn dem Bewusstsein, in hohen Ehren vor den Augen all derer zu stehen, die ihm einst angehört hatten, erklärte unser Bruder Paulus Miki den Umstehenden, er sei Japaner und gehöre zur Gesellschaft Jesu, er müsse sterben wegen der Verkündigung des Evangeliums und danke Gott für diese außerordentliche Wohltat.^pDann fügte er hinzu: „Da es nun mit mir dahin gekommen ist, denke ich, niemand von euch wird von mir glauben, dass ich die Wahrheit verhehle. So erkläre ich denn euch allen, dass es keinen anderen Weg zum Heil gibt als den der Christen. Dieser Weg lehrt mich, den Feinden zu verzeihen und allen, die mich beleidigt haben. Darum vergebe ich gerne dem König und allen, die an meinem Tod schuldig sind, und ich bitte sie, die christliche Taufe zu empfangen.“^pDann richtete er seine Augen auf die Gefährten und begann ihnen für den Höhepunkt dieses Kampfes Mut zuzusprechen. Auf dem Gesicht aller erschien ein Aufleuchten der Freude, besonders bei Ludwig. Als ihm ein anderer Christ zurief, er werde bald im Paradies sein, lenkte er durch eine von Freude erfüllte Bewegung der Finger und des ganzen Leibes die Augen aller Zuschauer auf sich.^pAntonius, neben Ludwig, richtete seinen Blick zum Himmel und rief die heiligen Namen Jesus und Maria und sang den Psalm: „Lobet, ihr Knechte des Herrn!“ (Ps 113), den er im katechetischen Institut von Nagasaki gelernt hatte, wo man große Mühe darauf verwendet, den Knaben einige Psalmen beizubringen.^pAndere riefen mit frohem Angesicht immer wieder: „Jesus! Maria!“ Einige ermahnten sogar die Umstehenden, ein eines Christen würdiges Leben zu führen. Durch diese und andere Handlungen zeigten sie ihre Bereitschaft zu sterben.^pDa zogen die vier Henker die Schwerter, wie sie bei den Japanern im Gebrauch sind. Bei diesem schrecklichen Anblick schrien die Gläubigen: „Jesus! Maria!“, und ein Wehklagen erhob sich, das den Himmel selbst rühren musste. Die Henker töteten sie nacheinander mit einem oder einem zweiten Stoß.",
          "patr_resp1": "Wir rühmen uns des Kreuzes unseres Herrn Jesus Christus. In ihm ist uns Heil geworden und Auferstehung und Leben.",
          "patr_resp2": "Durch ihn sind wir erlöst und befreit.",
          "patr_resp3": "Euch wurde die Gnade zuteil, nicht nur an Christus zu glauben, sondern auch seinetwegen zu leiden.",
          "oration": "Starker Gott, du bist die Kraft der Heiligen. Du hast den heiligen Paul Miki und seine Gefährten durch das Martyrium am Kreuz zur ewigen Herrlichkeit geführt. Hilf uns auf die Fürbitte dieser Heiligen, Christus, dem Gekreuzigten, nachzufolgen und ihn bis zum Tode gläubig zu bekennen, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Laudes": {
          "name": "Paul Miki und Gefährten",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Selig, die Verfolgung leiden für die Gerechtigkeit; denn ihrer ist das Himmelreich.",
          "oration": "Starker Gott, du bist die Kraft der Heiligen. Du hast den heiligen Paul Miki und seine Gefährten durch das Martyrium am Kreuz zur ewigen Herrlichkeit geführt. Hilf uns auf die Fürbitte dieser Heiligen, Christus, dem Gekreuzigten, nachzufolgen und ihn bis zum Tode gläubig zu bekennen, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Vesper": {
          "name": "Paul Miki und Gefährten",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Im Himmel freuen sich die Gerechten,^ldie dem Herrn gefolgt sind.^lAus Liebe zu Christus vergossen sie ihr Blut.^lNun herrschen sie mit ihm auf ewig.",
          "oration": "Starker Gott, du bist die Kraft der Heiligen. Du hast den heiligen Paul Miki und seine Gefährten durch das Martyrium am Kreuz zur ewigen Herrlichkeit geführt. Hilf uns auf die Fürbitte dieser Heiligen, Christus, dem Gekreuzigten, nachzufolgen und ihn bis zum Tode gläubig zu bekennen, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      }
    },
    "8": {
      "n1": {
        "name": "Hieronymus Ämiliani",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Hieronymus Ämiliani († 1537)",
          "patr_werk": "Aus einem Brief an seine Mitbrüder.",
          "patr_text": "^hWir sollen nur auf Gott vertrauen^pIn Jesus Christus geliebte Brüder, Söhne der Gesellschaft der Diener der Armen! Euer geringer Vater grüßt euch. Unser Ziel ist Gott, der Quell alles Guten, und wir müssen, wie wir es in unserem Gebet aussprechen, nur auf ihn vertrauen, nicht auf andere. Unser Herr ist gütig. Er wird unseren Glauben mehren, ohne den, wie der Evangelist sagt, Christus die vielen Zeichen nicht wirken kann. Er wollte euer Gebet erhören und beschloss, euch arm, gequält, betrübt, ermüdet, von allen mißachtet zu machen, euch auch meiner leiblichen Gegenwart zu berauben, nicht jedoch des Geistes eures armen, geliebten und liebenden Vaters.^pWarum er euch so haben wollte, weiß er selbst allein. Wir können jedoch drei Gründe dafür sehen. Erstens erinnert euch unser gepriesener Herr daran, dass er euch seinen geliebten Söhnen zurechnen will, wenn ihr auf seinen Wegen bleibt; denn so tat er seinen Freunden und machte sie heilig.^pDer zweite Grund ist dieser: Er will, dass ihr immer mehr nur auf ihn vertraut, nicht auf andere. Wie gesagt, wirkt Gott seine Werke nicht an denen, die sich weigern, ihren ganzen Glauben und ihre ganze Hoffnung nur auf ihn zu setzen. Dagegen gießt er die ganze Fülle seiner Liebe aus auf die, welche einen großen Glauben und eine große Hoffnung haben. Ihnen hat er Großes getan. Wenn ihr daher mit Glauben und Hoffnung ausgerüstet seid, tut er Großes an euch, da er die Niedrigen erhöht. Wenn er euch daher mich oder jemand anders, der euch angenehm ist, weggenommen hat, hat er euch zwei Möglichkeiten zur Wahl gestellt: entweder den Glauben aufzugeben und zu den Dingen der Welt zurückzukehren oder im Glauben stark zu bleiben und euch so vor ihm (Gott) zu bewähren.^pDazu kommt noch ein dritter Grund: Gott will euch wie Gold im Feuer läutern. Die Schlacken des Goldes werden im Feuer verzehrt, das gute Gold aber bleibt zurück und gewinnt an Wert. So macht es Gott mit dem guten Knecht, der hofft und während der Bedrängnis standhaft in ihm bleibt. Gott richtet ihn auf, erstattet ihm in dieser Welt hundertfach, was er aus Liebe zu ihm verlassen hat, und gibt ihm einst das ewige Leben.",
          "patr_resp1": "Seid alle eines Sinnes, habt Mitgefühl und brüderliche Liebe;",
          "patr_resp2": "denn ihr seid berufen, Segen zu erlangen.",
          "patr_resp3": "Lasst nicht nach in eurem Eifer, brennt im Geist und dient dem Herrn!",
          "oration": "Gott, du Quelle der Barmherzigkeit, im heiligen Hieronymus Ämiliani hast du den Waisenkindern einen Helfer und Vater gegeben. Schenke allen, die in Not sind, deine sorgende Liebe und gib uns die Bereitschaft, ihnen zu helfen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Hieronymus Ämiliani",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Wer barmherzig ist,^lder lehrt und erzieht wie ein guter Hirt.",
          "oration": "Gott, du Quelle der Barmherzigkeit, im heiligen Hieronymus Ämiliani hast du den Waisenkindern einen Helfer und Vater gegeben. Schenke allen, die in Not sind, deine sorgende Liebe und gib uns die Bereitschaft, ihnen zu helfen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Hieronymus Ämiliani",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Lasst die Kinder zu mir kommen;^ldenn Menschen wie ihnen gehört das Himmelreich.",
          "oration": "Gott, du Quelle der Barmherzigkeit, im heiligen Hieronymus Ämiliani hast du den Waisenkindern einen Helfer und Vater gegeben. Schenke allen, die in Not sind, deine sorgende Liebe und gib uns die Bereitschaft, ihnen zu helfen. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Josefine Bakhita",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Laudes": {
          "name": "Josefine Bakhita",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Vesper": {
          "name": "Josefine Bakhita",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        }
      }
    },
    "10": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Gregor der Große († 604)",
          "patr_werk": "Aus den Dialogen über das Leben und die Wunder der italischen Väter.",
          "patr_text": "^hDie mehr Liebe hatte, vermochte auch mehr^pScholastika, die Schwester des heiligen Benedikt, war von frühester Jugend an dem allmächtigen Gott geweiht. Sie pflegte einmal im Jahr zu ihrem Bruder zu kommen. Der Mann Gottes stieg dann hinunter zu ihr, zu einem Klostergut, nicht weit von der Pforte.^pEines Tages kam sie nach ihrer Gewohnheit, und ihr ehrwürdiger Bruder stieg mit seinen Schülern zu ihr hinab. Den ganzen Tag verbrachten sie im Lob Gottes und in heiligen Gesprächen. Als die Nacht hereinbrach, aßen sie miteinander.^pAls es über ihren frommen Gesprächen spät wurde, bat ihn die heilige Ordensfrau: „Bitte, verlass mich diese Nacht nicht, lass uns bis Tagesanbruch über die Freuden des Himmels sprechen.“ Er aber erwiderte: „Schwester, was redest du da? Nein, nein, ich kann nicht außerhalb der Zelle bleiben!“^pAls die heilige Ordensfrau das Nein ihres Bruders vernahm, legte sie die Hände mit verschränkten Fingern auf den Tisch und beugte ihren Kopfüber die Hände, um zum allmächtigen Herrn zu beten. Als sie den Kopf wieder vom Tisch erhob, herrschte ein derart gewaltiges Blitzen und Donnern, und ein solcher Regen brach los, dass weder der ehrwürdige Benedikt noch die Brüder, die mit ihm dabei waren, den Fuß über die Schwelle des Ortes setzen konnten, an dem sie beisammen saßen.^pDa fing der Mann Gottes betrübt an, sich zu beklagen; „Der allmächtige Gott verzeihe dir, Schwester, was hast du getan?“ Da antwortete sie: „Ich habe dich gebeten, und du wolltest nicht auf mich hören. Da bat ich meinen Gott, und er erhörte mich. Geh hinaus, wenn du kannst, verlass mich und kehre ins Kloster zurück!“^pEr aber, der freiwillig nicht bleiben Wollte, blieb wider Willen, und so kam es, dass sie die ganze Nacht durchwachten und sich durch Gespräche über das geistliche Leben in gegenseitigem Austausch erquickten.^pKein Wunder, dass die Frau mehr vermochte als er; denn nach dem Wort des Johannes: „Gott ist die Liebe“(1 Joh 4,8), war es nur gerecht, dass sie mehr vermochte, weil sie mehr Liebe hatte.^pDrei Tage später stand der Mann Gottes in seiner Zelle. Als er zum Himmel aufblickte, sah er die Seele seiner Schwester, dem Leib entrückt, in Gestalt einer Taube in das Geheimnis des Himmels eingehen. Da freute er sich über ihre große Herrlichkeit, dankte dem allmächtigen Gott mit Lobeshymnen und schickte Brüder, ihren Leib zum Kloster zu holen und in das Grab zu legen, das er für sich selbst gerichtet hatte.^pSo kam es, dass das Grab ihre Leiber nicht trennte, wie ihr Geist immer in Gott verbunden war.",
          "patr_resp1": "In Gestalt einer Taube sah der Mann Gottes die Seele seiner Schwester in den Himmel eingehen,",
          "patr_resp2": "und er freute sich über ihre große Herrlichkeit.",
          "patr_resp3": "Er dankte dem allmächtigen Gott mit Lobeshymnen.",
          "oration": "Erhabener Gott, wir begehen das Gedächtnis der heiligen Jungfrau Scholastika. Lass uns nach ihrem Beispiel dir stets in aufrichtiger Liebe dienen und gewähre uns in deiner Güte einst einen seligen Heimgang zu dir. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Die kluge Jungfrau ging Christus entgegen.^lWie die Sonne strahlt sie im Chor der Heiligen.",
          "oration": "Erhabener Gott, wir begehen das Gedächtnis der heiligen Jungfrau Scholastika. Lass uns nach ihrem Beispiel dir stets in aufrichtiger Liebe dienen und gewähre uns in deiner Güte einst einen seligen Heimgang zu dir. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Braut Christi, komm und empfange die Krone,^ldie der Herr für dich bereithält.",
          "oration": "Erhabener Gott, wir begehen das Gedächtnis der heiligen Jungfrau Scholastika. Lass uns nach ihrem Beispiel dir stets in aufrichtiger Liebe dienen und gewähre uns in deiner Güte einst einen seligen Heimgang zu dir. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "11": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Maria Bernadette Soubirous († 1879)",
          "patr_werk": "Aus einem Brief an P. Gondrand.",
          "patr_text": "^hEine Dame hat zu mir gesprochen^pEines Tages ging ich mit zwei Mädchen an den Gave-Fluss zum Holzsammeln. Da hörte ich ein Geräusch und schaute um nach der Wiese. Aber die Bäume bewegten sich nicht. Da schaute ich zu der Höhle hin. Dort sah ich eine Dame in weißen Gewändern. Sie trug ein weißes Kleid das mit einer blauen Schärpe gegürtet war. Auf jedem Fuß hatte sie eine gelbe Rose von der gleichen Farbe wie ihr Rosenkranz.^pAls ich das sah, rieb ich mir die Augen, weil ich dachte: Du täuschst dich! Ich tat die Hände in den Busen meines Kleides, wo ich meinen Rosenkranz fand. Ich wollte mir auch das Kreuz auf die Stirn machen. Aber ich konnte die Hand nicht hochbringen, sondern sie fiel mir herunter. Als aber die Dame das Kreuzzeichen machte, da versuchte ich es auch mit zitternder Hand, und da könnte ich es. Zugleich begann ich den Rosenkranz zu beten, indessen auch die Dame die Perlen gleiten ließ, aber ohne die Lippen zu bewegen. Als ich mit dem Rosenkranz fertig war, verschwand die Erscheinung sofort.^pIch fragte die beiden Mädchen, ob sie etwas gesehen hätten. Das verneinten sie, fragten aber, was ich ihnen zu enthüllen hätte. Da teilte ich ihnen mit: ich hätte eine Dame in weißen Kleidern gesehen, wisse aber nicht, wer sie sei. Ich kam am Sonntag wieder, weil ich mich hingezogen fühlte …^pErst beim dritten Mal sprach die Dame zu mir und fragte mich, ob ich vierzehn Tage lang zu ihr kommen wolle. Ich sagte: Ja! Sie setzte hinzu, ich solle die Priester auffordern, dort eine Kapelle bauen zu lassen.^pDann hieß sie mich aus der Quelle zu trinken. Da ich keine Quelle sah, ging ich zum Gave-Fluss. Aber sie gab mir zu verstehen, sie spreche nicht von dem Fluss, und zeigte mit dem Finger auf die Quelle. Als ich hinging, fand ich nur ein bisschen lehmiges Wasser. Ich hielt die Hand hin, konnte aber nichts fassen. Darum fing ich an zu scharren und konnte schließlich ein wenig schöpfen. Dreimal schüttete ich es weg. Doch beim vierten Mal konnte ich es trinken. Darauf entfernte sich die Erscheinung, und ich ging weg.^pVierzehn Tage ging ich hin, und jeden Tag erschien die Dame außer an einem Montag und Freitag. Jedes Mal trug sie mir auf, die Priester an den Bau der Kapelle zu mahnen. Jedes Mal forderte sie mich auf, mich in der Quelle zu waschen und um die Bekehrung der Sünder zu bitten. Öfters fragte ich sie, wer sie sei, aber sie lächelte nur. Zuletzt sagte sie mir, die Arme und die Augen zum Himmel erhoben: „Ich bin die Unbefleckte Empfängnis.“",
          "patr_resp1": "Mein Herz ist voll Freude über den Herrn.",
          "patr_resp2": "Große Kraft gibt mir mein Gott.",
          "patr_resp3": "Keiner ist ein Fels wie unser Gott.",
          "oration": "Barmherziger Gott, in unserer Schwachheit suchen wir bei dir Hilfe und Schutz. Höre auf die Fürsprache der jungfräulichen Gottesmutter Maria, die du vor der Erbschuld bewahrt hast, und heile uns von aller Krankheit des Leibes und der Seele. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Ev": "Du Morgenröte des Heils, Jungfrau Maria!^lAus dir ging hervor die Sonne der Gerechtigkeit,^lChristus, das aufstrahlende Licht aus der Höhe.",
          "Ant_Komm": "Du Morgenröte des Heils, Jungfrau Maria!^lAus dir ging hervor die Sonne der Gerechtigkeit,^lChristus, das aufstrahlende Licht aus der Höhe.",
          "oration": "Barmherziger Gott, in unserer Schwachheit suchen wir bei dir Hilfe und Schutz. Höre auf die Fürsprache der jungfräulichen Gottesmutter Maria, die du vor der Erbschuld bewahrt hast, und heile uns von aller Krankheit des Leibes und der Seele. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Ev": "Gegrüßet seist du, Maria, voll der Gnade;^lder Herr ist mit dir.^lDu bist gebenedeit unter den Frauen,^lund gebenedeit ist die Frucht deines Leibes.",
          "Ant_Komm": "Gegrüßet seist du, Maria, voll der Gnade;^lder Herr ist mit dir.^lDu bist gebenedeit unter den Frauen,^lund gebenedeit ist die Frucht deines Leibes.",
          "oration": "Barmherziger Gott, in unserer Schwachheit suchen wir bei dir Hilfe und Schutz. Höre auf die Fürsprache der jungfräulichen Gottesmutter Maria, die du vor der Erbschuld bewahrt hast, und heile uns von aller Krankheit des Leibes und der Seele. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "12": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Hirten der Kirche",
          "comm_2": "Comm_2",
          "patr_autor": "Papst Gregor II. († 731)",
          "patr_werk": "Ein Pastoralbrief.",
          "patr_text": "^hLiebt Gott und lasst euch taufen!^pGregor, Knecht der Knechte Gottes, an das ganze Volk der Thüringer.^pDer Herr Jesus Christus, Gottes Sohn und wahrer Gott, ist vom Himmel herabgestiegen und Mensch geworden; er hat für uns gelitten und sich kreuzigen lassen und ist begraben worden; er ist am dritten Tag von den Toten auferstanden und in den Himmel aufgefahren. Seinen Jüngern, den heiligen Aposteln, hat er gesagt: „Geht zu allen Völkern und macht alle Menschen zu meinen Jüngern; tauft sie auf den Namen des Vaters und des Sohnes und des Heiligen Geistes“ (Mt 28,19). Denen, die an ihn glauben, hat er ewiges Leben verheißen.^pEs ist nun unser sehnlicher Wunsch, dass ihr in Ewigkeit euch mit uns freuen könnt, dort, wo es keine Vergänglichkeit gibt, keine Drangsal und keine Bitterkeit, sondern ewiges Glück. Darum haben wir unseren hochwürdigsten Bruder, den Bischof Bonifatius, zu euch gesandt. Er soll euch taufen, den Glauben an Christus lehren und von euren Irrwegen auf den Weg des Heiles führen, damit ihr Rettung und ewiges Leben erlangt. Gehorcht ihm also in allen Stücken, ehrt ihn als euren Vater und öffnet eure Herzen seiner Lehre; denn wir haben ihn nicht gesandt, um irgendeinen materiellen Gewinn zu machen, nein, sondern damit eure Seelen Gewinn haben, schickten wir ihn zu euch.^pDarum liebt Gott und lasst euch in seinem Namen taufen; denn was keines Menschen Auge je gesehen und was keinem Menschen in den Sinn gekommen ist, das hat der Herr, unser Gott, denen bereitet, die ihn lieben (vgl. 1 Kor 2,9). So lasst ab von bösen Werken und tut das Gute. Betet keine Götzen an und opfert kein Fleisch, denn Gott nimmt solches nicht an; vielmehr tut und befolgt alles, was unser Bruder Bonifatius euch lehrt. So werdet ihr samt euren Kindern auf ewig gerettet werden. Erbaut auch ein Haus, in dem euer Vater, der Bischof, wohnen soll, und Kirchen, in denen ihr beten sollt, auf dass Gott euch die Sünden vergebe und ewiges Leben schenke.",
          "patr_resp1": "Gott hat über die Zeiten der Unwissenheit hinweggesehen.",
          "patr_resp2": "Jetzt lässt er den Menschen verkünden, dass überall alle umkehren sollen.",
          "patr_resp3": "Gott hat seinen Sohn in die Welt gesandt, damit die Welt durch ihn gerettet wird.",
          "oration": "Barmherziger Gott, wir danken dir, dass du deiner Kirche im heiligen Papst Gregor einen Hirten von apostolischer Weisheit und Festigkeit geschenkt und durch ihn unserm Volk den heiligen Bonifatius als Boten des Evangeliums gesandt hast. Lass uns auf seine Fürsprache in der Gemeinschaft der Kirche den Weg zu dir finden. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Hirten der Kirche",
          "comm_2": "Comm_2",
          "oration": "Barmherziger Gott, wir danken dir, dass du deiner Kirche im heiligen Papst Gregor einen Hirten von apostolischer Weisheit und Festigkeit geschenkt und durch ihn unserm Volk den heiligen Bonifatius als Boten des Evangeliums gesandt hast. Lass uns auf seine Fürsprache in der Gemeinschaft der Kirche den Weg zu dir finden. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Hirten der Kirche",
          "comm_2": "Comm_2",
          "oration": "Barmherziger Gott, wir danken dir, dass du deiner Kirche im heiligen Papst Gregor einen Hirten von apostolischer Weisheit und Festigkeit geschenkt und durch ihn unserm Volk den heiligen Bonifatius als Boten des Evangeliums gesandt hast. Lass uns auf seine Fürsprache in der Gemeinschaft der Kirche den Weg zu dir finden. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "14": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Märt",
          "comm_2": "Hirten",
          "patr_autor": "Laktanz († nach 317)",
          "patr_werk": "Aus dem „Abriss der göttlichen Unterweisungen“.",
          "patr_text": "^hDie Hoffnung des Märtyrers^pDass (der Weise) auf den ersten Blick als Tor er scheint, kommt daher, dass man meint, die Seele werde zugleich mit dem Leibe ausgelöscht; darum kennt man nur das Wohl dieses (irdischen) Lebens. Wenn nämlich mit dem Tod alles aus ist, dann handelt natürlich töricht, wer das Leben des Nächsten schont zum Schaden seines eigenen, oder wer mehr für den Vorteil des anderen sorgt als für seinen eigenen. Wenn der Tod die Seele vernichtet, dann gilt es, sich zu bemühen, möglichst lang und möglichst angenehm zu leben. Wenn aber auf den Tod ein ewiges, seliges Leben folgt, dann wird ein gerechter und weiser Mensch dieses leibliche Leben samt allen irdischen Gütern geringschätzen, wohl wissend, welchen Lohn er von Gott erhalten wird.^pDarum lasst uns die Unschuld bewahren und an der Gerechtigkeit festhalten. Lasst uns ruhig als Toren erscheinen, um die wahre Weisheit besitzen zu können. Mögen Menschen es für Verbohrtheit und Dummheit ansehen, lieber Marter und Tod zu erleiden als den Göttern zu opfern und straflos davonzukommen; wir aber wollen uns mit ganzer Kraft und aller Geduld bemühen, Gott die Treue zu halten. Der Tod soll uns nicht schrecken, der Schmerz nicht besiegen, auf dass unsere geistige Stärke und Widerstandskraft unerschüttert bleiben.^pMögen sie uns töricht schelten, wenn sie nur selbst die größten Toren sind, blind und stumpf gleich unvernünftigen Tieren. Denn sie sehen nicht ein, dass es zum Tode führt, den lebendigen Gott zu verlassen und sich vor irdischen Dingen niederzuwerfen, um sie anzubeten. Sie wissen nicht, dass ewige Strafe derer wartet, die empfindungslose Bildwerke verehrt haben, jene dagegen, die sich nicht weigerten, für den Dienst und die Ehre des wahren Gottes Marter und Tod zu erleiden, ewiges Leben erlangen. Darin besteht der Gipfel des Glaubens, darin die Weisheit und die vollkommene Gerechtigkeit. Es berührt uns nicht, wie die Toren urteilen, was armselige Menschen von uns denken. Wir müssen abwarten, bis Gott Gericht hält, dann können auch wir über die richten, die über uns zu Gericht gesessen haben.",
          "patr_resp1": "Wer sein Leben retten will, wird es verlieren; wer aber sein Leben um meinetwillen verliert, der wird es retten.",
          "patr_resp2": "Freut euch und jubelt: Euer Lohn im Himmel wird groß sein.",
          "patr_resp3": "Selig seid ihr, wenn ihr um meinetwillen beschimpft und verfolgt und auf alle mögliche Weise verleumdet werdet.",
          "oration": " Allmächtiger und barmherziger Gott, mit deiner Hilfe hat der heilige Bischof Valentinus die Qualen des Martyriums ausgehalten. Hilf uns, die wir seinen Sieg feiern, durch deinen mächtigen Schutz, damit wir in allen Angriffen des Feindes bestehen können. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Märt",
          "comm_2": "Hirten",
          "oration": " Allmächtiger und barmherziger Gott, mit deiner Hilfe hat der heilige Bischof Valentinus die Qualen des Martyriums ausgehalten. Hilf uns, die wir seinen Sieg feiern, durch deinen mächtigen Schutz, damit wir in allen Angriffen des Feindes bestehen können. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Märt",
          "comm_2": "Hirten",
          "oration": " Allmächtiger und barmherziger Gott, mit deiner Hilfe hat der heilige Bischof Valentinus die Qualen des Martyriums ausgehalten. Hilf uns, die wir seinen Sieg feiern, durch deinen mächtigen Schutz, damit wir in allen Angriffen des Feindes bestehen können. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "17": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_werk": "Aus der Überlieferung von dem Ursprung des Servitenordens.",
          "patr_text": "^hLasst uns die ruhmvollen Männer preisen!^pSieben Männer, der Ehrfurcht und Ehre wert, vereinigte unsere Herrin wie ein Siebengestirn. Sie schloss sie mit Leib und Seele zusammen und legte so den Grund für ihren Orden, den Orden ihrer sieben Knechte.^pAls ich in unsern Orden eintrat, war keiner von ihnen mehr am Leben außer einem, der Bruder Alexius hieß. Das Leben des Bruders Alexius war, wie mich Erfahrung und Augenschein lehrten, so beispielhaft, dass es nicht nur die Anwesenden bewegte, sondern auch den Zustand der Vollkommenheit und die obenerwähnte Frömmigkeit des Alexius und seiner Brüder bestätigte.^pBevor sie sich zusammentaten, war ihre Stellung in vierfacher Weise bestimmt:^pDas erste betraf ihr Verhältnis zur Kirche. Einige waren nicht verheiratet, weil sie sich vorgenommen hatten, immerwährende Jungfräulichkeit und Keuschheit zu bewahren, andere waren schon verheiratet, wieder andere durch den Tod der Gattin bereits vom Eheband gelöst.^pDas zweite bezog sich auf ihren bürgerlichen Erwerb. Ihr Beruf war Handel und Tausch mit irdischen Gütern nach kaufmännischen Regeln. Als sie jedoch die kostbare Perle fanden (vgl. Mt 13,46), unsern Orden, gaben sie alles, was sie hatten, den Armen und weihten darüber hinaus sich selbst Gott und dem Herrn mit frohem Willen, um ihm in ungeteilter Treue zu dienen.^pDas dritte betraf die Ehrfurcht, mit der sie unserer Herrin dienten. In Florenz gab es schon seit langem eine Genossenschaft zu Ehren der Jungfrau Maria. Wegen ihres hohen Alters und der großen Zahl und der Heiligkeit ihrer Mitglieder, der männlichen und der weiblichen, hatte die Vereinigung den Titel der „großen“ erhalten, so dass sie in besonderem Sinn die „große Genossenschaft“ unserer Herrin hieß. Zu dieser gehörten die genannten sieben Männer mit ihrer großen Liebe zu unserer Herrin, ehe sie zu einer förmlichen Vereinigung zusammentraten.^pDas vierte war ihre seelische Vollkommenheit. Sie liebten Gott über alles und richteten alles, was sie taten, auf ihn hin aus, indem sie ihn in all ihren Gedanken, Worten und Werken ehrten. Sie verfügten über ihre Häuser und ihren Hausstand, hinterließen ihren Familien den nötigen Unterhalt und gaben den Rest den Armen.^pDann stiegen sie auf den Montesenario, errichteten oben ein kleines passendes Haus und bezogen es.",
          "patr_resp1": "Sie hatten alles gemeinsam, und keiner nannte etwas sein Eigentum.",
          "patr_resp2": "Sie lobten Gott und waren beim ganzen Volk beliebt.",
          "patr_resp3": "Die Gemeinde der Gläubigen war ein Herz und eine Seele.",
          "oration": "Gütiger Gott, du hast den heiligen Gründern des Servitenordens eine kindliche Liebe zur Mutter Christi geschenkt und sie befähigt, dein Volk näher zu dir zu führen. Gib auch uns den Geist der Frömmigkeit und die Bereitschaft, zu dienen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Wie gut ist es und wie schön,^lwenn Brüder miteinander wohnen in Eintracht.",
          "oration": "Gütiger Gott, du hast den heiligen Gründern des Servitenordens eine kindliche Liebe zur Mutter Christi geschenkt und sie befähigt, dein Volk näher zu dir zu führen. Gib auch uns den Geist der Frömmigkeit und die Bereitschaft, zu dienen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Wo Brüder in Eintracht Gottes Herrlichkeit preisen,^lda spendet der Herr seinen Segen.",
          "oration": "Gütiger Gott, du hast den heiligen Gründern des Servitenordens eine kindliche Liebe zur Mutter Christi geschenkt und sie befähigt, dein Volk näher zu dir zu führen. Gib auch uns den Geist der Frömmigkeit und die Bereitschaft, zu dienen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "21": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Petrus Damiani († 1072)",
          "patr_werk": "Aus einem Brief.",
          "patr_text": "^hNach der Trauer erwarte froh das Glück!^pLieber Freund, du hast mich um brieflichen Trost gebeten, und ich soll die Bitterkeit, die dein Geist unter den vielen Schicksalsschlägen erleidet, durch gute Anregungen erträglicher machen.^pDas Wort Gottes will dich ohne Zweifel lehren, wie ein Sohn das Erbe in Besitz zu nehmen. Denn was ist deutlicher als das Wort: „Mein Sohn, wenn du dem Herrn dienen willst, dann steh fest in Gerechtigkeit und (Gottes-)Furcht und mach dich auf Prüfungen gefasst!“ (Sir 2,3)^pWo Furcht und Gerechtigkeit herrschen, dort ist die Anfechtung durch irgendwelche Widrigkeiten nicht Züchtigung eines Sklaven, sondern väterliche Zucht.^pGerade die Züchtigung durch Gott ist seinen Auserwählten ein Trost. Denn die augenblickliche Geißel, die sie ertragen müssen, macht sie stark für den Weg einer Hoffnung auf den Glanz der überirdischen Seligkeit.^pSo glättet der Hammer das Gold, damit der Schmied die Schlacken herausschlägt. Deswegen schleift die Feile es immer wieder ab, damit die Ader des erzitternden Metalls um so strahlender glänzt. „Töpferware wird nach der Brennhitze des Ofens eingeschätzt, der gerechte Mensch wird durch Versuchung und Not geprüft“ (Sir 27,5). Darum schreibt Jakobus: „Seid voll Freude, meine Brüder, wenn ihr in mancherlei Versuchungen geratet“ (Jak 1,2). Mit Recht darf sich freuen, wem hier für seine Sünden zeitliche Not widerfährt und für das Gute, das er getan hat, im Himmel ewiger Lohn bereitsteht.^pLieber Bruder, keine Hoffnungslosigkeit soll deinen Geist bedrücken, wenn du gegeißelt wirst und Schläge heiliger Zucht dich treffen. Kein Klagen und Murren komme über deine Lippen. Betrübnis und Trauer sollen dich nicht überwältigen, und Kleinmut mache dich nicht ungeduldig. Vielmehr strahle dein Gesicht frohen Mut aus. Heiterkeit herrsche in deinem Gemüt und aus deinem Mund erklinge Dankgesang.^pDie Hoffnung richte dich auf und erfreue dich, die Liebe entzünde ihre Glut, damit der Geist in heiliger Trunkenheit vergisst, was er im Äußeren leidet, und damit sein Wachsen und Streben auf das gerichtet ist, was er im Innern schaut.",
          "patr_resp1": "Selig der Mann, der ohne Makel ist und seine Hoffnung nicht auf reiche Schätze setzt.",
          "patr_resp2": "Sein Gut ist sichergestellt im Herrn.",
          "patr_resp3": "Er konnte sündigen und sündigte nicht, Böses tun und tat es nicht.",
          "oration": "Allmächtiger Gott, lehre uns, nach der Weisung des heiligen Petrus Damiani Christus über alles zu lieben und für deine Kirche einzutreten, damit wir zur ewigen Freude gelangen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Die Weisen strahlen, wie der Himmel strahlt.^lSie haben viele zum rechten Tun geführt;^ldarum werden sie leuchten wie die Sterne,^lauf immer und ewig.",
          "oration": "Allmächtiger Gott, lehre uns, nach der Weisung des heiligen Petrus Damiani Christus über alles zu lieben und für deine Kirche einzutreten, damit wir zur ewigen Freude gelangen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "O Lehrer des Glaubens und Licht der Kirche,^ldu hast Gottes Weisung geliebt.^lHeiliger Petrus, bitte für uns bei Gottes Sohn.",
          "oration": "Allmächtiger Gott, lehre uns, nach der Weisung des heiligen Petrus Damiani Christus über alles zu lieben und für deine Kirche einzutreten, damit wir zur ewigen Freude gelangen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "23": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_werk": "Aus dem Brief der Kirche von Smyrna über das Martyrium des hl. Polykarp.",
          "patr_text": "^hWie ein reiches Opfer wurde er angenommen^pAls der Scheiterhaufen hergerichtet war, legte Polykarp alle seine Kleider ab, löste den Gürtel und suchte selbst die Schuhe auszuziehen; er tat dies früher nicht, weil die Gläubigen immer darauf aus Waren, schnell seinen Leib zu berühren. Denn schon vor seinem Martyrium war er seines vorbildlichen Lebens wegen eine Zierde alles Guten (für die Gemeinde). Sogleich legte man alles, was zum Scheiterhaufen gehörte, um ihn herum. Als sie ihn aber noch annageln wollten, sagte er : „Lasst mich so; denn der mir die Kraft gibt, das Feuer auszuhalten, wird mir auch ohne die Sicherung durch eure Nägel verleihen, dass ich bei der Verbrennung ruhig stehen bleibe.“ Da nagelten sie ihn nicht an, sondern banden ihn nur fest.^pEr legte seine Hände auf den Rücken und wurde gebunden, wie der auserwählte Widder aus einer großen Herde bereitet wird für die Darbringung eines Ganzopfers, das Gott gefällt. Polykarp blickte auf zum Himmel und sprach: „Herr, Gott, Herrscher des Alls, Vater deines geliebten und gepriesenen Knechtes Jesus Christus, durch den wir Kenntnis von dir erhalten haben, Gott der Engel und Mächte, der ganzen Schöpfung und des ganzen Geschlechtes der Gerechten, die vor dir leben! Ich preise dich, dass du mich dieses Tages und dieser Stunde wert gehalten hast, dass ich unter der Schar der Märtyrer am Kelch deines Christus teilhaben darf zur Auferstehung des ewigen Lebens (Joh 5,29) von Seele und Leib in Unverweslichkeit durch den Heiligen Geist. Mit einem reichen, von dir angenommenen Opfer (vgl. Ps 20,4) möchte ich heute unter sie eingereiht werden, mit einem Opfer, wie du es mir im voraus bestimmt und verkündet hast und wie du es nun erfüllst, du wahrhaftiger Gott, der die Lüge nicht kennt. Dafür und für alles lobe ich dich. Ich preise und verherrliche dich mit dem ewigen Hohenpriester Jesus Christus im Himmel, deinem geliebten Sohn und Knecht. Durch ihn ist dir mit ihm und dem Heiligen Geist die Ehre jetzt und in Zukunft und in Ewigkeit. Amen.“^pAls er das Amen gerufen und das Gebet: beendet hatte, entzündeten die Feuerleute den Scheiterhaufen. Als die Flamm hoch emporloderte, sahen wir, denen es zu schauen vergönnt war, ein großes Wunder. Das Feuer war wie ein gewölbter Raum und umgab den Leib des Märtyrers ringsum wie das Segel eines Schiffes, das im Wind gebläht wird. Der Märtyrer stand mitten darin. Er sah nicht aus wie verbrennendes Fleisch, sondern wie Brot, das gebacken wird, oder wie Gold und Silber, das man im Feuer läutert.",
          "patr_resp1": "Ich weiß, dass du bedrängt und arm bist; aber du bist dennoch reich.",
          "patr_resp2": "Sei treu bis in den Tod; dann gebe ich dir den Kranz des Lebens.",
          "patr_resp3": "Fürchte dich nicht vor dem Leiden, das dir bevorsteht.",
          "oration": "Gott, du Herr der ganzen Schöpfung, du hast den heiligen Bischof Polykarp zum standhaften Bekenntnis des Glaubens gestärkt und in die Schar deiner Märtyrer aufgenommen. Gib auch uns deine Kraft, wenn wir am Kelch des Leidens Christi teilhaben, damit wir auferstehen zum ewigen Leben. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Sechsundachtzig Jahre habe ich Christus gedient^lund habe von ihm kein Unrecht erfahren.^lWie könnte ich meinen König schmähen,^lder mich erlöst hat!",
          "oration": "Gott, du Herr der ganzen Schöpfung, du hast den heiligen Bischof Polykarp zum standhaften Bekenntnis des Glaubens gestärkt und in die Schar deiner Märtyrer aufgenommen. Gib auch uns deine Kraft, wenn wir am Kelch des Leidens Christi teilhaben, damit wir auferstehen zum ewigen Leben. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Ich preise dich, Herr, allmächtiger Gott.^lDu nahmst mich auf in die Schar deiner Märtyrer^lund gabst mir Anteil am Kelch deines Gesalbten.",
          "oration": "Gott, du Herr der ganzen Schöpfung, du hast den heiligen Bischof Polykarp zum standhaften Bekenntnis des Glaubens gestärkt und in die Schar deiner Märtyrer aufgenommen. Gib auch uns deine Kraft, wenn wir am Kelch des Leidens Christi teilhaben, damit wir auferstehen zum ewigen Leben. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "25": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_werk": "Auszüge aus der Vita und den Wunderberichten des Mönches Wolfhard.",
          "patr_text": "^hWalburga erfüllt die Gebote des Herrn mit größtem Eifer^pDas glückliche Volk der Angeln wurde durch das apostolische Wirken des denkwürdigen Papstes Gregor der Finsternis des Unglaubens entrissen. Zweige an diesem gewaltigen Baum waren Bonifatius, der Bischof des rechten Glaubens, die Bekenner Christi Willibald und Wunibald und Walburga, die Braut Christi. Sie sammelte, soweit sie es vermochte, Nonnen und ging daran, in dem Ort Heidenheim die Gebote des Herrn mit größtem Eifer zu erfüllen.^pAls die heilige Jungfrau Walburga sich ganz in der Liebe zu Gott gefestigt hatte, ging sie dem Herrn entgegen, der sie zu sieh rief. Bischof Otgar bestimmte, die heiligen Gebeine der Jungfrau mit größter Sorgfalt zu erheben und zum Kloster Eichstätt zu übertragen. Im Jahre 893 befahl der kluge Bischof Erchanbold, die Gebeine der heiligen Jungfrau zu suchen und langersehnte Reliquien an Liubila im Kloster Monheim zu geben. Die Männer fanden beim Graben die Gebeine wie von ein wenig Quellwasser benetzt.^pEinzigartige und große Wunder geschehen bis heute in dem obengenannten Kloster auf die Fürbitte und durch die Verdienste der Jungfrau. Darum glauben wir, dass Christus viele Wunderzeichen durch seine liebenswerte Jungfrau wirken will.",
          "patr_resp1": "Du warst würdig, vom Herrn den Kranz zu empfangen,",
          "patr_resp2": "den Kranz der ewigen Jungfraulichkeit.",
          "patr_resp3": "Niemand kann dir die Siegespalme nehmen.",
          "oration": "Barmherziger Gott, du hast der heiligen Äbtissin Walburga einen starken Glauben und ein mütterliches Herz gegeben. Hilf uns auf ihre Fürsprache, an deinem Wort festzuhalten und in der Welt deine Güte sichtbar zu machen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Mein Anteil ist der Herr, darum harre ich auf ihn;^lgut ist der Herr zur Seele, die ihn sucht.",
          "oration": "Barmherziger Gott, du hast der heiligen Äbtissin Walburga einen starken Glauben und ein mütterliches Herz gegeben. Hilf uns auf ihre Fürsprache, an deinem Wort festzuhalten und in der Welt deine Güte sichtbar zu machen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Der Herr hat sie zu seiner Braut erwählt auf ewig,^lin Treue und Erbarmen.",
          "oration": "Barmherziger Gott, du hast der heiligen Äbtissin Walburga einen starken Glauben und ein mütterliches Herz gegeben. Hilf uns auf ihre Fürsprache, an deinem Wort festzuhalten und in der Welt deine Güte sichtbar zu machen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "27": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        }
      }
    }
  },
  "3": {
    "4": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_werk": "Aus der Lebensbeschreibung des heiligen Kasimir von einem zeitgenössischen Schriftsteller.",
          "patr_text": "^hEr sah seinen Schatz in den Geboten des Höchsten^pIn das Herz Kasimirs war eine ungeheuchelte und aufrichtige Liebe ausgegossen (vgl. Röm 5,5). Er glühte im Geist von dieser Liebe zum allmächtigen Gott. Sie strömte stark von ihm aus und floss aus seinem Innern so reich über die Mitmenschen, dass ihm nichts lieber und wünschenswerter schien, als Hab und Gut herzugeben und darüber hinaus sich selbst ganz den Armen Christi, den Pilgern, den Kranken, den Gefangenen und Betrübten zu weihen und sich für sie zu verzehren. Er war den Witwen, Waisen und Unterdrückten nicht nur ein Beschützer, nicht nur ein Anwalt, sondern Vater, Sohn und Bruder.^pWie groß die Gerechtigkeit war, die er sich angelegen sein ließ, welche Selbstbeherrschung er übte, welche Klugheit er besaß, durch welche Tapferkeit und Standhaftigkeit er sich auszeichnete, ist kaum zu sagen und auszudenken, vor allem, wenn man bedenkt, wie hemmungslos die Zeit, wie verwegen die Menschen waren und wie sie sich von Natur aus dem Bösen zuneigten.^pTäglich gab er seinem Vater bei der Regierung des Königreichs und der untergebenen Völker gerechten Rat. Wenn einmal aus Unachtsamkeit oder menschlicher Torheit etwas in der Regierung vernachlässigt wurde, unterließ er es nicht, den König in aller Bescheidenheit zu tadeln.^pAls wären es seine eigenen, betreute er die Angelegenheiten der Armen und Notleidenden und nahm sie in seine Obhut. Deshalb nannte ihn das Volk den Verteidiger der Armen.^pObwohl er der Sohn des Königs war und vornehmen und hohen Blutes, wurde er im Umgang und im Gespräch für Menschen niederer Herkunft niemals schwierig. Er wollte lieber zu denen gehören, die gütig und vor Gott arm sind und denen das Himmelreich gehört (vgl. Mt 5,3), als zu den Vornehmen und Mächtigen der Welt.^pDie Bürde menschlicher Herrschaft suchte er nicht und mochte sie niemals übernehmen, wenn der Vater sie ihm antrug. Er fürchtete, die Stacheln des Reichtums, die unser Herr Dornen nennt (vgl. Mt 13,7), könnten seinen Geist verwunden oder die Berührung mit den irdischen Dingen möchten ihn beflecken. Er war bis zum Tod jungfräulich.",
          "patr_resp1": "Erblicke deinen Schatz in den Geboten des Höchsten;",
          "patr_resp2": "es wird dir mehr nützen als Gold.",
          "patr_resp3": "Übe Gerechtigkeit, Frömmigkeit, Liebe, Geduld und Milde!",
          "oration": "Allmächtiger Gott, dir dienen heißt herrschen. Hilf uns auf die Fürbitte des heiligen Kasimir, deinen Weisungen zu gehorchen und in Heiligkeit und Gerechtigkeit vor dir zu leben. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Wer die Wahrheit tut, der kommt zum Licht,^ldamit offenbar wird,^ldass seine Taten in Gott vollbracht sind.",
          "oration": "Allmächtiger Gott, dir dienen heißt herrschen. Hilf uns auf die Fürbitte des heiligen Kasimir, deinen Weisungen zu gehorchen und in Heiligkeit und Gerechtigkeit vor dir zu leben. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Du guter und treue Knecht,^lnimm teil an der Freude deines Herrn.",
          "oration": "Allmächtiger Gott, dir dienen heißt herrschen. Hilf uns auf die Fürbitte des heiligen Kasimir, deinen Weisungen zu gehorchen und in Heiligkeit und Gerechtigkeit vor dir zu leben. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "6": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Balther († 10. Jh.)",
          "patr_werk": "Aus der Lebensbeschreibung des hl. Fridolin.",
          "patr_text": "^hEr teilt reichlich aus, seine Gerechtigkeit währet in Ewigkeit^pNachdem nun der heilige Fridolin mit seinen Neffen fröhlich das Abendbrot gegessen und sich in derselben Nacht zur Ruhestätte begeben hatte, gewappnet mit dem heiligen Kreuzeszeichen, erschien ihm der heilige Hilarius abermals und redete ihn also an: „Bruder Fridolin, was zauderst du zu erfüllen, was du Gott und mir versprochen hast, als du gewürdigt wurdest, einen Partikel meines Leibes abzusondern, um ihn mit dir fortzunehmen? Nicht sollst du länger hier verweilen, denn deine Neffen sind von Gott dazu auserlesen, nach deinem Fortgehen an diesem Ort für den ständigen Gottesdienst zu sorgen.“^pDa nun der Mann Gottes Fridolin fragte, wohin zu gehen er geheißen werde, wurde ihm die Antwort gegeben: zu einer gewissen Insel Alemanniens, die von den klaren Wellen eines Flusses namens Rhein umspült werde, möge er sich beeilen, seinen Weg zu nehmen, um sich da der Treue der Schwaben anzuvertrauen.^pAls er seinen Weg eingeschlagen hatte, indem er die Reliquien des heiligen Hilarius mit sich trug, wandte er sich zuerst zum König Chlodwig, tat ihm alles kund, was ihm von Gott widerfahren war, und erhielt von ihm die Erlaubnis. wo immer er die genannte Insel finden würde, in Gottes Namen alles, was er wollte, dort auszurichten.^pMit solcher Erlaubnis ausgestattet, gelangte er zu einem Fluss namens Mosel, an dessen Ufer er ein Kloster zu Ehren des heiligen Hilarius errichtete, ohne hier in diesem Kloster länger verweilen zu wollen, als bis es vollendet wäre. Dann ging er weiter, und zwischen den gewundenen Gebirgstälern eines Massivs mit Namen Vogesen erbaute er eine Kirche ebenso zu Ehren desselben Heiligen. Als sie vollendet war, wandte er sich einer Stadt zu, die bei den Lateinern Argentina (Straßburg) genannt wird, und baute daselbst wieder zu Ehren dieses Heiligen eine Kirche.^pDa er von dieser Stadt wegzog, nahm er seinen Weg über die Klöster des Königreichs der Burgunder bis zu einem Gebiet, das Rätien genannt wird, um den Bischof von Chur aufzusuchen. Ebenda, in Chur, als er daselbst verweilte, bis er eine Kirche dem heiligen Hilarius zu Dienst errichtet hätte, und als er bei den Einwohnern der Stadt nachforschte, ob sie irgendwo eine vom Rhein umspülte Insel wüssten, die von menschlicher Behausung noch frei und unbebaut sei, antworteten sie, eine andere unbebaute und von Menschen noch ungenützte Insel wüssten sie nicht außer einer einzigen, die ihnen aber auch nicht gut bekannt sei; dennoch deuteten sie ihm an, wo diese Insel liege und auf welchem Wege er dorthin gelangen könne.^pNachdem er unter unzähligen Beschwerden mit knapper Not zum Ziel gelangt war, empfand er so große Freude, dass er völlig vergaß, was er vorher an Mühen ausgestanden hatte.^pDie umliegenden Bewohner leisteten aber dem hl. Fridolin großen Widerstand und ließen ihm keine Hoffnung, dort ruhen zu können. So kehrte der hl. Fridolin zum König zurück und erhielt von diesem den Ort, aus dem er kurz vorher geflüchtet war, durch eine Urkunde, von dessen eigener Hand unterzeichnet, als Geschenk für sich und seine Nachfolger zu dauerndem Besitz.",
          "patr_resp1": "Jeder gebe, wie er es sich im Herzen vorgenommen hat, nicht in Verdrossenheit oder aus Zwang.",
          "patr_resp2": "Einen fröhlichen Geber hat Gott lieb.",
          "patr_resp3": "Er teilt reichlich aus, seine Gerechtigkeit währet in Ewigkeit.",
          "oration": "Herr, unser Gott, du hast den heiligen Fridolin als Glaubensboten in das Gebiet der Alemannen gesandt. Wir bitten dich: Erhalte das Werk, das er begonnen hat, und vollende es am Tag unseres Herrn Jesus Christus, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Nicht ihr werdet reden,^lsondern der Geist eures Vaters redet durch euch.",
          "oration": "Herr, unser Gott, du hast den heiligen Fridolin als Glaubensboten in das Gebiet der Alemannen gesandt. Wir bitten dich: Erhalte das Werk, das er begonnen hat, und vollende es am Tag unseres Herrn Jesus Christus, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Wo Brüder in Eintracht Gottes Herrlichkeit preisen,^lda spendet der Herr seinen Segen.",
          "oration": "Herr, unser Gott, du hast den heiligen Fridolin als Glaubensboten in das Gebiet der Alemannen gesandt. Wir bitten dich: Erhalte das Werk, das er begonnen hat, und vollende es am Tag unseres Herrn Jesus Christus, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      }
    },
    "7": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_werk": "Aus den Akten der Märtyrer von Karthago.",
          "patr_text": "^hBerufen und erwählt zur Verherrlichung des Herrn^pDer Tag des Sieges brach an, und die heiligen Märtyrer zogen vom Gefängnis zum Amphitheater, als ob es in den Himmel ginge: mit heiterem Angesicht, schön, und wenn sie erbebten, dann nicht vor Furcht, sondern vor Freude.^pZuerst wurde Perpetua hingeworfen und fiel auf die Seite. Sie erhob sich, und als Felizitas sie am Boden liegen sah, ging sie hin, reichte ihr die Hand und richtete sie auf. Da standen sie nun beide auf. Die Grausamkeit des Volkes war besiegt, und sie wurden zum Sanvivarischen Tor zurückgerufen. Dort wurde Perpetua von einem Mann namens Rusticus in Empfang genommen, der damals noch Katechumene war und zu ihr hielt. Es war, als erwache sie aus dem Schlaf. So sehr war sie im Geist und in der Ekstase gewesen. Sie begann um sich zu schauen und sagte zur Verwunderung aller: „Wann werden wir dieser Kuh – ich weiß nicht welcher – vorgeworfen?“ Als sie hörte, dass es schon geschehen war, glaubte sie es erst, als sie die Spuren ihrer Leiden an ihrem Leib und an ihrem Kleid erkannte. Dann rief sie ihren Bruder und jenen Katechumenen zu sich und sagte zu ihnen: „Steht fest im Glauben und liebt einander, ihr alle. An unseren Leiden nehmt keinen Anstoß!“ Das Volk verlangte nun, sie in der Mitte der Arena zu sehen, um die Augen zu Mordhelfern zu machen, wenn das Schwert in ihren Leib drang. Da erhoben sie sich selbst und sehleppten sich dahin, wo das Volk sie haben wollte. Vorher küssten sie einander, um das Martyrium durch das feierliche Zeichen des Friedens zu vollenden.^pDie übrigen empfingen unbewegt und schweigend den Schwertstreich; vor allem Saturus. Er, der in der Vision zuerst die Leiter hinaufgestiegen war, gab zuerst den Geist auf und erwartete Perpetua. Perpetua schrie auf, als sie zwischen die Rippen getroffen wurde, um auch Schmerz zu kosten. Sie führte aber die Rechte des unerfahrenen Gladiators, als er schwankte, selbst an ihre Kehle. Eine solche Frau hätte vielleicht anders nicht getötet werden können, wenn sie es nicht selbst gewollt hätte; denn der unreine Geist fürchtete sie.^pIhr starken und seligen Märtyrer, wahrhaft berufen und erwählt zur Herrlichkeit unseres Herrn Jesus Christus!",
          "patr_resp1": "Christus Jesus sitzt zur Rechten Gottes und tritt für uns ein.",
          "patr_resp2": "Wer kann uns scheiden von der Liebe Christi? Bedrängnis oder Not, Verfolgung oder das Schwert?",
          "patr_resp3": "All das überwinden wir durch den, der uns geliebt hat.",
          "oration": "Herr, unser Gott, die Liebe zu dir hat den heiligen Frauen Perpetua und Felizitas die Kraft gegeben, ihre Verfolger nicht zu fürchten und die Qualen des Martyriums zu bestehen. Schenke auch uns jene Liebe, die alle Furcht überwindet. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Selig, die Verfolgung leiden für die Gerechtigkeit; denn ihrer ist das Himmelreich.",
          "oration": "Herr, unser Gott, die Liebe zu dir hat den heiligen Frauen Perpetua und Felizitas die Kraft gegeben, ihre Verfolger nicht zu fürchten und die Qualen des Martyriums zu bestehen. Schenke auch uns jene Liebe, die alle Furcht überwindet. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Im Himmel freuen sich die Gerechten,^ldie dem Herrn gefolgt sind.^lAus Liebe zu Christus vergossen sie ihr Blut.^lNun herrschen sie mit ihm auf ewig.",
          "oration": "Herr, unser Gott, die Liebe zu dir hat den heiligen Frauen Perpetua und Felizitas die Kraft gegeben, ihre Verfolger nicht zu fürchten und die Qualen des Martyriums zu bestehen. Schenke auch uns jene Liebe, die alle Furcht überwindet. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "8": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Johannes von Gott († 1550)",
          "patr_werk": "Aus einem Brief.",
          "patr_text": "^hChristus sorgt treu für alles^pWenn wir auf das Erbarmen Gottes schauten, würden wir, soweit es in unserer Macht steht, niemals ablassen, Gutes zu tun. Denn wenn wir aus Liebe zu Gott auf die Armen übertragen, was er uns gewährt hat, verspricht er uns das Hundertfache und die ewige Seligkeit (Mt 19,29). Seliger Gewinn, glücklicher Erfolg! Wer wird diesem guten Kaufmann nicht alles schenken, was er besitzt, da er doch unsere Angelegenheiten weiterbringt und uns mit ausgebreiteten Armen drängt, unsere Sünden zu beweinen und der Liebe zu dienen: der Selbstliebe zuerst und dann der Liebe zum Mitmenschen. Wie Wasser das Feuer löscht, se tilgt Liebe die Sünden.^pSo viele Arme kommen hierher, dass ich mich manchmal wundere, wie man sie ertragen kann. Aber Jesus Christus sorgt für alles und nährt sie alle. In das ‚Haus Gottes‘ kommen viele, weil die Stadt Granada sehr groß und sehr kalt ist, besonders jetzt im Winter. Zur Zeit wohnen mehr als einhundertzehn Leute im Haus: Kranke und Gesunde, Diener und Pilger. Weil es ein offenes Haus ist, nimmt es Kranke aller Art und in jedem Zustand auf: Amputierte, Krüppel, Aussätzige, Stumme, Irre, Gelähmte, Altersschwache, viele Kinder und darüber hinaus zahllose Pilger und Wanderer, die hierher kommen. Auch sie erhalten Feuer, Wasser, Salz und Kochgefäße. Dabei gibt es in all diesen Fällen keine Geldeinnahme. Doch Christus sorgt.^pDaher arbeite ich hier mit Schulden und bin um Christi willen ein Gefangener. Oft drücken mich die Schulden so, dass ich nicht wage, auf die Straße zu gehen wegen der Schulden, die ich habe. Ich sehe so viele Arme, meine Brüder und Mitmenschen, über ihre Kräfte leiden und bedrückt von seelischer und leiblicher Not, und ich bin tieftraurig, dass ich ihnen nicht helfen kann.^pDoch ich vertraue auf Christus; denn ihn erkennt mein Herz. Darum sage ich: „Verflucht der Mann, der auf Menschen vertraut!“ (Jer 17,5) und nicht auf Christus allein. Ob du willst oder nicht, Menschen lassen dich immer im Stich. Christus aber ist treu und beharrlich! Christus sorgt für alles! Ihm lasst uns ohne Unterlass danken. Amen.",
          "patr_resp1": "Brich dem Hungernden dein Brot, dem Heimatlosen gib ein Obdach,",
          "patr_resp2": "dann wird dein Licht aufleuchten wie das Morgenrot.",
          "patr_resp3": "Bekleide den Nackten und lass deinen Bruder nicht im Stich.",
          "oration": "Barmherziger Gott, die Liebe zu dir hat den heiligen Johannes gedrängt, an den Leiden der Kranken Anteil zu nehmen und ihnen zu helfen. Dränge auch uns zu Werken der Barmherzigkeit und lass uns zu denen gehören, die dein Reich besitzen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Daran werden alle erkennen,^ldass ihr meine Jünger seid: wenn ihr einander liebt.",
          "oration": "Barmherziger Gott, die Liebe zu dir hat den heiligen Johannes gedrängt, an den Leiden der Kranken Anteil zu nehmen und ihnen zu helfen. Dränge auch uns zu Werken der Barmherzigkeit und lass uns zu denen gehören, die dein Reich besitzen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Amen, ich sage euch:^lWas ihr dem Geringsten meiner Brüder getan habt,^ldas habt ihr mir getan.^lKommt, ihr Gesegneten meines Vaters,^lnehmt das Reich in Besitz,^ldas seit Anfang der Welt für euch bestimmt ist.",
          "oration": "Barmherziger Gott, die Liebe zu dir hat den heiligen Johannes gedrängt, an den Leiden der Kranken Anteil zu nehmen und ihnen zu helfen. Dränge auch uns zu Werken der Barmherzigkeit und lass uns zu denen gehören, die dein Reich besitzen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "9": {
      "n1": {
        "name": "Bruno",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Bruno von Querfurt († 1009)",
          "patr_werk": "Aus der Lebensbeschreibung des hl. Märtyrerbischofs und Glaubensboten Adalbert von Prag († 997).",
          "patr_text": "^hLobpreis des Martyriums^pJetzt traten die Heiden Adalbert offen entgegen und sagten: „Wir lehnen dich ab!“ Der Bischof hatte zeitlebens als Sehnsucht das Martyrium in sich getragen. Nun konnte er es mit beiden Händen fassen. Zwei Gefährten nahm er mit sich auf seinen Weg: das Gebet der Brüder und ihren Rat.^pDer Anführer der Pruzzen durchbohrte ihm das Herz. Dann fielen die anderen über ihn her …^p(Ihr törichten Heiden,) ihr habt gehandelt nach eurem Wahn. Welche Seligkeit habt ihr in eurer Torheit dem sterbenden (Boten des Evangeliums) bereitet! … Der Leib stürzt nieder und umfasst mit ausgebreiteten Armen die Erde. Die heilige Seele schreitet glücklich zum Leben. Sie staunt über die Freundlichkeit Gottes und über die Festlichkeit der himmlischen Klänge.^p(Märtyrer Christi,) du hast deinen Fuß abgewandt von den Wegen der vergänglichen Schönheit. Nun koste, was darinnen verborgen war. Du weißt um die Tränen der Menschen. Geh nun hinein in die selige Schau der Engel. Alle Heiligen schauen mit Freude auf dich, vor allem die Märtyrer des Herrn. Steige noch weiter empor, über die Engel hinaus. Geh, du Märtyrer, zum König der Märtyrer, zum Erlöser, der lebt. Geh zu ihm, vor dessen Angesicht Erde und Himmel erheben. Sprich mit ihm von Angesicht zu Angesicht, wie ein Mensch mit seinem Freunde spricht. Du bist frei von allem, was Bitterkeit über Bitterkeit bringt. Du erreichst die höchste selige Schau und innere Erquickung, wo das ewige Lob des Schöpfers Speise und Trank ist …^p(Ihr Heiligen) alle, um Gottes Willen legt ein gutes Wort ein vor dem höchsten König für uns Arme hier auf Erden. Was ihr erbittet, das gewähre euch der Herr und Gott durch seinen geliebten Sohn im Heiligen Geist. Ihm sei Ruhm und Heil und Ehre, Königtum und Herrschaft in alle Ewigkeit. Amen.",
          "patr_resp1": "Geht hinaus in die ganze Welt und verkündet das Evangelium allen Geschöpfen!",
          "patr_resp2": "Wer glaubt und sich taufen lässt, wird gerettet.",
          "patr_resp3": "Wenn jemand nicht aus Wasser und Geist geboren wird, kann er nicht in das Reich Gottes kommen.",
          "oration": "Herr, unser Gott, dein heiliger Märtyrer und Bischof Bruno hat für die Ausbreitung des Evangeliums sein Leben eingesetzt. Erhalte uns treu im Glauben, damit wir nicht verlieren, was du uns durch deine Boten geschenkt hast. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Bruno",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Wer sein Leben liebt, wird es verlieren;^ldoch wer in dieser Welt sein Leben hasst,^lder wird es bewahren für das ewige Leben.",
          "oration": "Herr, unser Gott, dein heiliger Märtyrer und Bischof Bruno hat für die Ausbreitung des Evangeliums sein Leben eingesetzt. Erhalte uns treu im Glauben, damit wir nicht verlieren, was du uns durch deine Boten geschenkt hast. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Bruno",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Wenn das Weizenkorn^lnicht in die Erde fällt und stirbt, bleibt es allein;^lwenn es aber stirbt, bringt es reiche Frucht.",
          "oration": "Herr, unser Gott, dein heiliger Märtyrer und Bischof Bruno hat für die Ausbreitung des Evangeliums sein Leben eingesetzt. Erhalte uns treu im Glauben, damit wir nicht verlieren, was du uns durch deine Boten geschenkt hast. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Franziska von Rom",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_werk": "Aus der Lebensbeschreibung der heiligen Franziska Romana.",
          "patr_text": "^hGott hat sie nicht erwählt, für sich allein heilig zu werden^pBeim frühen Begräbnis ihrer zärtlich geliebten Söhne bewies Franziska Standhaftigkeit. Stets fügte sie sich ruhig dem Willen Gottes und dankte ihm für alles, was geschah.^pSie ließ nicht das geringste Zeichen von Abneigung gegen die merken, von denen sie wusste, dass sie unrecht von ihr und ihren Angelegenheiten dachten und sprachen. Vielmehr vergalt sie Böses mit Gutem und pflegte immer für sie zu beten.^pGott hatte sie nicht erwählt, für sich allein heilig zu werden, sondern damit sie die ihr von oben verliehenen Gaben zum geistlichen und leiblichen Heil der Mitmenschen nütze.^pIn Rom gab es viele Krankheiten, überall Sterbende und von der Pest Befallene. Die Heilige achtete nicht auf die Ansteckungsgefahr und zögerte nicht, den Elenden und Hilfsbedürftigen herzliches Erbarmen zu schenken. Wenn sie solche fand, war es ihr ein leichtes, sie durch Mitleid zur Sühne zu bewegen. Dann half sie ihnen eifrig durch ihre Dienste und mahnte sie liebenswürdig, von Gott gerne jedes Ungemach anzunehmen und aus Liebe zu dem zu tragen, der als erster für uns so viel getragen habe.^pFranziska begnügte sich nicht mit der Heilung der Kranken, die sie bei sich zu Hause zusammengebracht hatte. Sie suchte sie in ihren Hütten und in den öffentlichen Krankenhäusern auf. Denen, die sie dort fand, gab sie im Durst zu trinken, machte ihnen die Betten und verband die Wunden.^pDa es in einer solchen Zeit ansteckender Krankheiten schwer ist, für die Heilung des Leibes einen Arzt zu finden, ging sie auf die Suche nach ihnen. Priester führte sie zu denen, die schon zum Empfang des Bußsakramentes und der Eucharistie vorbereitet waren. Damit das leichter nach ihrem Willen geschehen konnte, unterhielt sie auf eigene Kosten einen Priester, der zu den genannten Krankenhäusern zu gehen und die von ihr bezeichneten Kranken zu besuchen hatte.",
          "patr_resp1": "Du bist vom Herrn gesegnet,",
          "patr_resp2": "dein Lob verstummt nicht mehr im Mund der Menschen.",
          "patr_resp3": "Der Herr hat deinen Namen groß gemacht.",
          "oration": "Allmächtiger Gott, die heilige Franziska von Rom hat uns in der Ehe wie auch im Ordensstand ein Beispiel christlichen Lebens gegeben. Gib deinen Gläubigen die Gnade, in jedem Stand und Beruf dir treu zu dienen, stets auf dich zu schauen und deiner Führung zu folgen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Franziska von Rom",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Wer den Willen meines Vaters erfüllt,^lder ist für mich Bruder und Schwester und Mutter.",
          "oration": "Allmächtiger Gott, die heilige Franziska von Rom hat uns in der Ehe wie auch im Ordensstand ein Beispiel christlichen Lebens gegeben. Gib deinen Gläubigen die Gnade, in jedem Stand und Beruf dir treu zu dienen, stets auf dich zu schauen und deiner Führung zu folgen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Franziska von Rom",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Ihr habt alles verlassen und seid mir nachgefolgt:^lDas Hundertfache werdet ihr dafür erhalten^lund das ewige Leben gewinnen.",
          "oration": "Allmächtiger Gott, die heilige Franziska von Rom hat uns in der Ehe wie auch im Ordensstand ein Beispiel christlichen Lebens gegeben. Gib deinen Gläubigen die Gnade, in jedem Stand und Beruf dir treu zu dienen, stets auf dich zu schauen und deiner Führung zu folgen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "13": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Sigeboto (12. Jh.)",
          "patr_werk": "Aus der Lebensbeschreibung der heiligen Paulina.",
          "patr_text": "^hNicht mehr ich lebe, sondern Christus lebt in mir^p(Nach dem Tod ihres Gemahls) gelobte Paulina Enthaltsamkeit und hielt dies Gelübde heilig bis ins hohe Alter. In untadeliger Treue vollendete sie ihren Lebenslauf; wie sie in der früheren Bindung die eheliche Keuschheit unverletzt bewahrt hatte, so hielt sie jetzt die aus freien Stücken gelobte keusche Witwenschaft.^pAlles, was sie hatte, gab Paulina zur Linderung der Not der Armen; ihre Güter vermachte sie in mütterlicher Fürsorge ihren Kindern, so dass von den Einkünften für sie nichts oder nur wenig übrigblieb. Dann begab sie sich, allein von dem Wunsch beseelt, Gott vollkommener und wohlgefälliger zu dienen, in eine abgeschiedene Einsamkeit, ließ sich in dem thüringischen Gau Langwizzi eine Unterkunft erbauen, wie sie ihrer Liebe zur Armut entsprach, und gab sich ganz dem Dienst Gottes hin. Sie ließ dort auch eine Kapelle zum Gedächtnis der hl. Maria Magdalena errichten.^pWer kann beschreiben, mit welcher Strenge Paulina dort ihren Leib abtötete, ihre Glieder, durch Fasten, Nachtwachen und langes Beten geschwächt, mit rauem Bußkleid und eisernen Ketten marterte? Mit aller Entschiedenheit sagte sie allem, was dem äußeren Menschen zugute kommen konnte, den Kampf an. Ihr Leben galt Christus, darum wählte sie den Tod (die Abtötung) des Fleisches, damit, wenn einst ihr Leben dem Tod erliegen werde, nicht der Tod das Erbe des Lebens antrete.^pSie sprach: „Was hat mir das Schwelgen in leiblichen Genüssen eingebracht? Ist ihr Ende nicht Staub und Verwesung? Ist es nicht Anlass zu ständigem Sündenfall? Steht es nicht in dauerndem Gegensatz zum heiligen Leben der Gottsuchenden? Was man dem Fleisch an Luxus bietet, das entzieht man dem Heil der Seele, und wie jeglicher Überfluss für den Leib schädlich war, so schadet es nicht minder der Seele, dass man ihren Bedürfnissen das Notwendigste versagte.^pDarum möge dem Geist, was süß ist, zur Bitternis, und was bitter ist, zur Süßigkeit werden. Der Abbruch, der dem Leib getan wird, soll ein Zeichen sein für die Vervollkommnung des Geistes, und alles, was zuvor den Schöpfer durch die Gier nach den geschaffenen Dingen beleidigt hat, soll nun dem Schöpfer dienstbar sein. Alle Dinge, wie verschieden auch ihr Ursprung ist, nehmen ja das gleiche Ende, und was immer das Rad wechselhaften Geschicks erhöht und erniedrigt, sein Lauf geht abwärts, und das unausweichliche Ende macht alles zunichte.“^pAlso erstarb die Magd Christi dieser Welt, um für Christus zu leben, und so konnte sie mit dem Apostel sprechen: „Nicht mehr ich lebe, sondern Christus lebt in mir“ (Gal 2,20).",
          "patr_resp1": "Das Begehren des Fleisches richtet sich gegen den Geist, das Begehren des Geistes aber gegen das Fleisch; beide stehen sich als Feinde gegenüber.",
          "patr_resp2": "Wenn wir aus dem Geist leben, dann wollen wir dem Geist auch folgen.",
          "patr_resp3": "Die Welt und ihre Begierde vergeht; wer aber den Willen Gottes tut, bleibt in Ewigkeit.",
          "oration": "Herr und Gott, schenke uns den Geist der Liebe und des Glaubens, damit wir das große Beispiel der heiligen Paulina begreifen, dir mit aufrichtigem Herzen dienen und durch Glauben und gute Werke dir gefallen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Mein Anteil ist der Herr, darum harre ich auf ihn;^lgut ist der Herr zur Seele, die ihn sucht.",
          "oration": "Herr und Gott, schenke uns den Geist der Liebe und des Glaubens, damit wir das große Beispiel der heiligen Paulina begreifen, dir mit aufrichtigem Herzen dienen und durch Glauben und gute Werke dir gefallen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Ihr habt alles verlassen und seid mir nachgefolgt:^lDas Hundertfache werdet ihr dafür erhalten^lund das ewige Leben gewinnen.",
          "oration": "Herr und Gott, schenke uns den Geist der Liebe und des Glaubens, damit wir das große Beispiel der heiligen Paulina begreifen, dir mit aufrichtigem Herzen dienen und durch Glauben und gute Werke dir gefallen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "14": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "II. Vatikanisches Konzil (1962–1965)",
          "patr_werk": "Aus der dogmatischen Konstitution über die Kirche.",
          "patr_text": "^hIn freudiger Hoffnung trage einer des anderen Last^pIn den verschiedenen Verhältnissen und Aufgaben des Lebens wird die eine Heiligkeit von allen entfaltet, die sich vom Geist Gottes leiten lassen und der Stimme des Vaters gehorsam Gott den Vater im Geist und in der Wahrheit anbeten und dem armen, demütigen, das Kreuz tragenden Christus folgen und so der Teilnahme an seiner Herrlichkeit würdig werden. Jeder aber muss nach seinen eigenen Gaben und Gnaden auf dem Weg eines lebendigen Glaubens, der die Hoffnung weckt und durch Liebe wirksam ist, entschlossen vorangehen.^pDie christlichen Eheleute und Eltern müssen auf ihrem eigenen Weg in treuer Liebe das ganze Leben hindurch einander in der Gnade Halt und Stütze sein und die von Gott gerne empfangenen Kinder mit den christlichen Lehren und den Tugenden des Evangeliums erfüllen. So geben sie allen das Beispiel einer unermüdlichen und großmütigen Liebe, sie bauen die Bruderschaft der Liebe auf, sind Zeugen und Mitarbeiter der fruchtbaren Mutter Kirche, zum Zeichen und in Teilnahme jener Liebe, in der Christus seine Braut geliebt und sich für sie hingegeben hat.^pEin ähnliches Beispiel wird auf andere Weise von den Witwen und Unverheirateten gegeben, auch sie können nicht wenig zur Heiligkeit und Wirksamkeit in der Kirche beitragen.^pIn freudiger Hoffnung soll einer des anderen Last tragen undd gerade durch die tägliche Arbeit zu einer höheren, auch apostolischen Heiligkeit emporsteigen.^pDie Armen, Schwachen, Kranken und von verschiedener Mühseligkeit Bedrückten oder die um der Gerechtigkeit willen Verfolgten sollen sich in besonderer Weise mit Christus in seinem Leiden für das Heil der Welt zu vereinigen wissen. Sie hat der Herr im Evangelium seliggepriesen, und „der Gott … aller Gnade aber, der euch in (der Gemeinschaft mit) Christus zu seiner ewigen Herrlichkeit berufen hat, wird euch, die ihr kurze Zeit leiden müsst, wiederaufrichten, stärken, kräftigen und auf festen Grund stellen“ (1 Petr 5,10).^pAlle Christgläubigen also werden in ihrer Lebenslage, ihren Pflichten und Verhältnissen und durch dies alles von Tag zu Tag mehr geheiligt, wenn sie alles aus der Hand des himmlischen Vaters im Glauben entgegennehmen und mit Gottes Willen zusammenwirken und so die Liebe, mit der Gott die Welt geliebt hat, im zeitlichen Dienst selbst allen kundmachen.",
          "patr_resp1": "Einer sei dem anderen Stütze und Halt in der Gnade Christi.",
          "patr_resp2": "Christus wird uns vollenden, stärken und festigen.",
          "patr_resp3": "In freudiger Hoffnung trage einer des anderen Last.",
          "oration": "Gott, du liebst die Menschen, die Frieden stiften und barmherzig sind. Mit deiner Hilfe hat die heilige Königin Mathilde Streitende versöhnt und den Notleidenden geholfen. Schenke auch uns Güte und Geduld und mache uns zum Werkzeug deines Friedens. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Selig, die Frieden stiften,^lselig, die reinen Herzens sind;^ldenn sie werden Gott schauen.",
          "oration": "Gott, du liebst die Menschen, die Frieden stiften und barmherzig sind. Mit deiner Hilfe hat die heilige Königin Mathilde Streitende versöhnt und den Notleidenden geholfen. Schenke auch uns Güte und Geduld und mache uns zum Werkzeug deines Friedens. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Preiset sie für den Ertrag ihrer Hände.^lLobt ihre Werke an den Toren der Stadt.",
          "oration": "Gott, du liebst die Menschen, die Frieden stiften und barmherzig sind. Mit deiner Hilfe hat die heilige Königin Mathilde Streitende versöhnt und den Notleidenden geholfen. Schenke auch uns Güte und Geduld und mache uns zum Werkzeug deines Friedens. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "15": {
      "n1": {
        "name": "Klemens Maria Hofbauer",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Klemens Maria Hofbauer († 1820)",
          "patr_werk": "Aus den Briefen an den Nuntius in Wien.",
          "patr_text": "^hSucht nicht euren eigenen Vorteil, sondern die Ehre Gottes^pIch beteuere vor Gott und Eurer Exzellenz, dass ich mit meinen Brüdern keine Anstrengung und keine Mühe scheue, für die Ehre Gottes, die Erhöhung der Kirche und das Heil der Seelen zu arbeiten. Aber ich brauche einen Platz, wo ich Arbeiter sammeln und zur Arbeit heranbilden kann.^pIch wünsche und verlange sehnlichst, mich ganz und gar für unsern Erlöser Jesus Christus und für die mit seinem hochheiligen Blute erlösten Seelen zu opfern. Denn ich sehe, dass sich die Zustände im christlichen Volke immer verschlechtern, und zwar deshalb, weil einerseits die Zahl der Arbeiter beständig abnimmt, anderseits die Arbeiter selbst sich in Verderber der Herde Christi verwandeln.^pIch suche nicht meinen Vorteil. Suchte ich ihn, wo könnte ich ein bequemeres Leben führen als in Warschau inmitten meiner Brüder, deren Arbeiten ich in Ruhe überwachen und mich an ihnen erfreuen könnte? Ich hätte es wahrlich nicht nötig, in meinem vorgerückten Alter mich durch Hunger, Kummer und Sorgen, Ermüdung, beschwerliche Reisen und Unbilden der Witterung aufzureiben.^pDoch das sei ferne, dass ich meine Bequemlichkeit suche! Die Ehre Gottes, das Wohl der Kirche, das Heil der Seelen, das jetzt überall so sehr gefährdet ist, liegen mir am Herzen. Unterdessen flehe ich unablässig den himmlischen König an, er möge die Herzen jener lenken, denen er Gewalt gegeben hat. –^pNur Mut! Gott ist der Herr; er lenkt alles zu seiner Ehre und zu unserem Wohle, und niemand kann ihm widerstehen. Alle Pläne der Menschen, mögen sie auch noch so gut angelegt sein, sie dienen nur, um seinen heiligen Willen zu erfüllen. Was in dieser Lage mich selbst betrifft, so habe ich mich ganz seinem Willen überlassen. Ich sehe, dass alles, was uns feindlich zu sein scheint, uns dorthin führt, wo Gott uns haben will …^pTeure Brüder, bewahren wir unsere Unschuld und unsere Vollkommenheit; das ist das einzige, was wir suchen müssen; der eine möge den andern zum Guten ermutigen, aneifern. Seid liebevoll miteinander!^pHeiligt die Welt! Nichts wird der Feind wider Euch vermögen, wenn Christus für Euch ist. Betet für uns, wie wir für Euch beten, auf dass wir den heiligsten Willen unseres Vaters erfüllen. Es grüßen Euch alle Brüder!",
          "patr_resp1": "Freut euch, lasst euch erneuern und vollenden, lasst euch ermahnen, seid eines Sinnes und lebt in Frieden.",
          "patr_resp2": "Dann wird der Gott der Liebe und des Friedens mit euch sein.",
          "patr_resp3": "Der Gott der Hoffnung aber erfülle euch durch den Glauben mit aller Freude und mit allem Frieden.",
          "oration": "Gütiger Gott, in der Sorge für dein Volk hast du den heiligen Klemens Maria Hofbauer mit besonderem Eifer für die Seelen erfüllt und durch ihn den Reichtum deiner Gnade verkündet. Hilf uns auf seine Fürsprache, den Glauben zu bewahren, den er gelehrt, und den Weg zu gehen, den er uns durch sein Leben gewiesen hat. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Klemens Maria Hofbauer",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Allen bin ich alles geworden, um alle zu retten.",
          "oration": "Gütiger Gott, in der Sorge für dein Volk hast du den heiligen Klemens Maria Hofbauer mit besonderem Eifer für die Seelen erfüllt und durch ihn den Reichtum deiner Gnade verkündet. Hilf uns auf seine Fürsprache, den Glauben zu bewahren, den er gelehrt, und den Weg zu gehen, den er uns durch sein Leben gewiesen hat. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Klemens Maria Hofbauer",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Dies ist der treue und kluge Verwalter:^lDer Herr hat ihn eingesetzt, damit er^lseinen Dienern Nahrung gibt zur rechten Zeit.",
          "oration": "Gütiger Gott, in der Sorge für dein Volk hast du den heiligen Klemens Maria Hofbauer mit besonderem Eifer für die Seelen erfüllt und durch ihn den Reichtum deiner Gnade verkündet. Hilf uns auf seine Fürsprache, den Glauben zu bewahren, den er gelehrt, und den Weg zu gehen, den er uns durch sein Leben gewiesen hat. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Zacharias",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Papst Zacharias († 752)",
          "patr_werk": "Aus einem Brief an fränkische Bischöfe.",
          "patr_text": "^hEine Gemeinschaft und ein Hirt^pZwar sind wir, wenn man an den weiten Weg denkt, euch dem Leibe nach fern, doch im Geist der Liebe sind wir euch allzeit nah; denn wir haben euch ins Herz geschlossen und beten beständig darum, dass unser Gott und Herr Jesus Christus eure Herzen noch viel mehr festige und kräftige bei der Verkündigung des Evangeliums in dem Dienst, den ihr verseht, auf dass das Volk, das euch anvertraut ist, durch eure väterlichen Mahnungen mit Gottes Hilfe vom Trug des Teufels befreit, sein Heil finde und ihr von ihren Seelen Gewinn erlangen dürft für den Tag Christi.^pDenn es steht geschrieben: „Die Söhne der Weisheit sind die Gemeinde der Gerechten, und ihr Stamm ist Gehorsam und Liebe. So ermahne ich euch denn“, meine Lieben, „ein Leben zu führen, das des Rufes würdig ist, der an euch erging“, wie es den Heiligen ziemt; in großer Geduld „ertragt einander in Liebe und bemüht euch, die Einheit des Geistes zu wahren durch den Frieden“ und die Liebe, die euch zusammenhalten; denn „das Ziel der Unterweisung ist Liebe aus reinem Herzen, gutem Gewissen und ungeheucheltem Glauben“ (Sir 3,1 Vg.; vgl. Eph 4,1–3; 1 Tim 1,5).^pIhr Lieben, ich freue mich über euch, weil euer Glaube und eure Einmütigkeit gegen uns kostbar und offenkundig sind, nicht allein vor Gott, sondern auch vor allen Menschen, da ihr euch zu eurem von Gott bestellten Beschützer und Lehrer, dem heiligen Apostelfürsten Petrus, hingewendet habt mit viel gutem Willen. Euer Glaube ist zu loben, und euer Ruf ist gut, weil ihr so denkt, wie man denken muss.^pUnd nun ist durch Gottes Hilfe eure Heiligkeit der Gemeinschaft mit uns angeschlossen in einem Schafstall, und wir haben einen Hirten, der vom Hirten der Hirten, unserem Herrn und Gott und Erlöser Jesus Christus, zum Fürsten der Apostel und zu unserem Lehrer eingesetzt ist.^pIhr habt nun an unser Statt zur Stärkung eurer Liebe und als Helfer in der Verkündigung des Evangeliums Christi unseren heiligen und ehrwürdigen Bruder, den Erzbischof Bonifatius, der Legat des Apostolischen Stuhles und unser Stellvertreter ist.^pRichtet euch nun standhaft gegen die Anstrengungen derer, die auf Feindschaft sinnen und nicht auf das, was Gottes ist, und eure Standhaftigkeit wird stärker als Felsgestein sein. Denn, meine Brüder, „wir leben zwar in dieser Welt, kämpfen aber nicht mit den Waffen dieser Welt. Die Waffen, die wir bei unserem Feldzug einsetzen, sind nicht irdisch, aber sie haben durch Gott die Macht, Festungen zu schleifen; mit ihnen reißen wir alle hohen Gedankengebäude nieder, die sich gegen die Erkenntnis Gottes auftürmen. Wir nehmen alles Denken gefangen, so dass es Christus gehorcht“ (2 Kor 10,3–5). „Und schließlich“, Brüder, „werdet stark durch die Kraft und Macht des Herrn!“ (Eph 6,10) Reichlich werde euch Friede zuteil und Gnade von unserem Gott und Herrn Jesus Christus.",
          "patr_resp1": "Simon, ich habe für dich gebetet, dass dein Glaube nicht erlischt.",
          "patr_resp2": "Wenn du dich wieder bekehrt hast, dann stärke deine Brüder.",
          "patr_resp3": "Seht doch, wie gut und schön es ist, wenn Brüder miteinander in Eintracht wohnen.",
          "oration": "Gütiger Gott, wir ehren heute die Verdienste des heiligen Papstes Zacharias. Du hast ihn berufen, im Geist der Milde und Klugheit für den Frieden zu wirken. Gib, dass wir auf Erden seinem Beispiel folgen und im Himmel mit ihm verherrlicht werden. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Zacharias",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Nicht ihr werdet reden,^lsondern der Geist eures Vaters redet durch euch.",
          "oration": "Gütiger Gott, wir ehren heute die Verdienste des heiligen Papstes Zacharias. Du hast ihn berufen, im Geist der Milde und Klugheit für den Frieden zu wirken. Gib, dass wir auf Erden seinem Beispiel folgen und im Himmel mit ihm verherrlicht werden. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Zacharias",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Dank sei dir, Christus, guter Hirte!^lDu hast mich zur Herrlichkeit geführt;^lgib auch der Herde, die du mir anvertraut hast,^lAnteil an deiner Gnade auf ewig.",
          "oration": "Gütiger Gott, wir ehren heute die Verdienste des heiligen Papstes Zacharias. Du hast ihn berufen, im Geist der Milde und Klugheit für den Frieden zu wirken. Gib, dass wir auf Erden seinem Beispiel folgen und im Himmel mit ihm verherrlicht werden. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "17": {
      "n1": {
        "name": "Gertrud von Nivelles",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "II. Vatikanisches Konzil (1962–1965)",
          "patr_werk": "Aus der dogmatischen Konstitution über die göttliche Offenbarung.",
          "patr_text": "^hDie Heilige Schrift im Leben der Kirche^pDie Kirche hat die Heiligen Schriften immer verehrt wie den Herrenleib selbst, weil sie, vor allem in der heiligen Liturgie, vom Tisch des Wortes Gottes wie des Leibes Christi ohne Unterlass das Brot des Lebens nimmt und den Gläubigen reicht. In ihnen zusammen mit der Heiligen Überlieferung sah sie immer und sieht sie die höchste Richtschnur ihres Glaubens, weil sie, von Gott eingegeben und ein für alle Male niedergeschrieben, das Wort Gottes selbst unwandelbar vermitteln und in den Worten der Propheten und der Apostel die Stimme des Heiligen Geistes vernehmen lassen.^pWie die christliche Religion selbst, so muss auch jede kirchliche Verkündigung sich von der Heiligen Schrift nähren und sich an ihr orientieren. In den Heiligen Büchern kommt ja der Vater, der im Himmel ist, seinen Kindern in Liebe entgegen und nimmt mit ihnen das Gespräch auf. Und solche Gewalt und Kraft west im Worte Gottes, dass es für die Kirche Halt und Leben, für die Kinder der Kirche Glaubensstärke, Seelenspeise und reiner, unversieglicher Quell des geistlichen Lebens ist. Darum gelten von der Heiligen Schrift in besonderer Weise die Worte: „Lebendig ist das Wort Gottes, kraftvoll und schärfer als jedes zweischneidige Schwert“ (Hebr 4,12); „es hat die Kraft, aufzubauen und das Erbe in der Gemeinschaft der Geheiligten zu verleihen“ (Apg 20,32; vgl. 1 Thess 2,13).^pSo möge durch Lesung und Studium der Heiligen Bücher „das Wort des Herrn sich ausbreiten und verherrlicht werden“ (vgl. 2 Thess 3,1). Der Schatz der Offenbarung, der Kirche anvertraut, erfülle mehr und mehr die Herzen der Menschen. Wie das Leben der Kirche sich mehrt durch die ständige Teilnahme am eucharistischen Geheimnis, so darf man neuen Antrieb für das geistliche Leben erhoffen aus der gesteigerten Verehrung des Wortes Gottes, welches „bleibt in Ewigkeit“ (Jes 40,8; vgl. 1 Petr 1,23–25).",
          "patr_resp1": "Die Zeit ist kurz. Daher soll, wer sich freut, so sein, als freue er sich nicht, wer sich die Welt zunutze macht, als nutze er sie nicht.",
          "patr_resp2": "Denn die Gestalt der Welt vergeht.",
          "patr_resp3": "Wir haben nicht den Geist der Welt empfangen.",
          "oration": "Herr, unser Gott, du hast im Herzen der heiligen Gertrud das Verlangen geweckt, das Wort der Schrift zu verstehen und deine Weisung zu erkennen. Lehre auch uns, aus der Kraft deines Wortes zu leben und Werke der Liebe zu tun. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Gertrud von Nivelles",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Mein Anteil ist der Herr, darum harre ich auf ihn;^lgut ist der Herr zur Seele, die ihn sucht.",
          "oration": "Herr, unser Gott, du hast im Herzen der heiligen Gertrud das Verlangen geweckt, das Wort der Schrift zu verstehen und deine Weisung zu erkennen. Lehre auch uns, aus der Kraft deines Wortes zu leben und Werke der Liebe zu tun. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Gertrud von Nivelles",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "In der Freude über Gott, meinen Retter,^lweitet sich mein Herz und jubelt auf im Herrn.",
          "oration": "Herr, unser Gott, du hast im Herzen der heiligen Gertrud das Verlangen geweckt, das Wort der Schrift zu verstehen und deine Weisung zu erkennen. Lehre auch uns, aus der Kraft deines Wortes zu leben und Werke der Liebe zu tun. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Patrick",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Patrick († 461)",
          "patr_werk": "Aus den Bekenntnissen.",
          "patr_text": "^hViele Völker wurden durch mich für Gott wiedergeboren^pUnermüdlich danke ich meinem Gott dafür, dass er mich am Tag der Versuchung in der Treue bewahrte, so dass ich ihm, Christus Jesus, heute voll Vertrauen das Opfer darbringen kann: meine Seele als lebendige Gabe, weil er mich in all meinen Nöten behütet hat. So muss ich sagen: Wer bin ich denn, Herr, und was ist meine Berufung, warum hast du mich mit der großen Gottheit bekleidet, so dass ich heute unter den Leiden jubele, dass ich, wo immer ich bin, deinen Namen preise, und das nicht nur im Glück, sondern auch in der Bedrängnis?^pWas immer mir begegnet, Gutes wie Böses, ich muss es in Gleichmut annehmen und Gott immer danken, weil er mich gelehrt hat, ihm ohne Zweifel unbegrenzt zu glauben, und weil er mich erhört hat. Ich Unwissender durfte in jüngster Zeit dieses fromme und wunderbare Werk beginnen. Ich durfte die Männer nachahmen, von denen der Herr ehedem gesagt hat, dass sie sein Evangelium den Heiden zum Zeugnis (vgl. Mt 10,18) verkünden werden.^pWoher kommt mir die Weisheit, die nicht in mir war, der ich die Zahl der Tage nicht kannte und keinen Geschmack an Gott fand? Woher kam mir später die große und heilbringende Gabe, Gott zu erkennen und zu lieben, woher kam, dass ich Heimat und Eltern verlor und nach Irland kam, um das Evangelium zu predigen, von den Ungläubigen Unbilden zu erleiden, die Schmach meiner Pilgerschaft und viele Verfolgungen bis zu den Fesseln auszuschöpfen, meinen Adel hinzugeben zum Nutzen der andern?^pSollte ich dessen würdig sein, bin ich bereit, ohne Verzug und liebend gern mein Leben für seinen Namen zu opfern, und ich wünschte, es bis in den Tod dranzugeben, wenn Gott es mir gestattet. Denn ich stehe in großer Schuld bei ihm, da er mir die große Gnade verliehen hat, dass durch mich viele Völker für Gott wiedergeboren und vollendet wurden; dass überall Kleriker geweiht werden für sie, das kürzlich zum Glauben gekommene Volk, das Gott von den Enden der Erde holte, wie er einst durch die Propheten verhieß: „Zu dir kommen Völker von den Enden der Erde und sagen: Nur Trug besaßen unsre Väter, Wahngebilde, die nichts nützen“ (Jes 16,19). und: „Ich habe dich geschaffen und dazu bestimmt, der Bund für mein Volk und das Licht für die Völker zu sein“ (Jes 42,6).",
          "patr_resp1": "Gott hat mir die Gnade gegeben, dass ich als Diener Jesu Christi für die Heiden wirke und das Evangelium Gottes wie ein Priester verwalte.",
          "patr_resp2": "Denn die Heiden sollen eine Opfergabe werden, die Gott gefällt.",
          "patr_resp3": "Ich diene dem Vater mit meinem Geist am Evangelium seines Sohnes.",
          "oration": "Ewiger Gott, du hast den heiligen Bischof Patrick gesandt, den Bewohnern Irlands deine Allmacht und Größe zu verkünden. Höre auf seine Fürsprache und hilf allen, die sich Christen nennen, deine großen Werke zu bezeugen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Patrick",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Geht hinaus in alle Welt und lehrt alle Völker^lund tauft sie im Namen des Vaters und des Sohnes^lund des Heiligen Geistes.",
          "oration": "Ewiger Gott, du hast den heiligen Bischof Patrick gesandt, den Bewohnern Irlands deine Allmacht und Größe zu verkünden. Höre auf seine Fürsprache und hilf allen, die sich Christen nennen, deine großen Werke zu bezeugen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Patrick",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Viele werden kommen vom Osten und vom Westen^lund mit Abraham, Isaak und Jakob zu Tische sitzen^lim Himmelreich.",
          "oration": "Ewiger Gott, du hast den heiligen Bischof Patrick gesandt, den Bewohnern Irlands deine Allmacht und Größe zu verkünden. Höre auf seine Fürsprache und hilf allen, die sich Christen nennen, deine großen Werke zu bezeugen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "18": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Cyrill von Jerusalem († 386)",
          "patr_werk": "Aus einer Katechese.",
          "patr_text": "^hBereitet reine Gefäße zur Aufnahme des Heiligen Geistes^pIhr Kinder der Gerechtigkeit, folgt dem Johannes, wenn er ruft: „Bereitet dem Herrn den Weg!“ Beseitigt jedes Hindernis und jeden Anstoß, damit ihr den geraden Weg zum Himmel geht. Macht auch durch den ungeheuchelten Glauben das Innere der Seele rein für die Aufnahme des Heiligen Geistes. Fangt an, eure Kleider durch Buße zu waschen, damit ihr rein seid, wenn ihr zum Brautgemach gerufen werdet.^pDer Bräutigam ruft euch alle zusammen. Denn die Gnade ist freigebig, und die Stimme der laut rufenden Verkünder ruft alle zusammen. Er selbst entscheidet, wer zu dem heiligen Zeichen der Hochzeit eintreten darf.^pMöge keiner von denen, deren Name jetzt aufgeschrieben wird, die Stimme hören: „Mein Freund, wie konntest du hier ohne Hochzeitsgewand erscheinen?“ (Mt 22,12) Möchtet ihr doch alle hören: „Sehr gut, du bist ein tüchtiger und treuer Diener. Du bist im Kleinen ein treuer Verwalter gewesen, ich will dir eine große Aufgabe übertragen. Komm, nimm teil an der Freude deines Herrn“ (Mt 25,21).^pBis jetzt stehst du vor der Tür. Möchtet ihr alle sagen dürfen: „Der König führt mich in seine Gemächer“ (Hld 1,4). „Meine Seele soll jubeln in Gott. Er kleidet mich in Gewänder des Heils, er hüllt mich in den Mantel der Gerechtigkeit, wie ein Bräutigam sich festlich schmückt und wie eine Braut ihr Geschmeide anlegt“ (Jes 61,10).^pSo soll euer aller Seele ohne Makel, Falten oder sonstige Fehler sein (vgl. Eph 5,27); ich will nicht sagen, schon bevor ihr die Gnade empfangt – was brauchtet ihr dann zur Vergebung der Sünden gerufen zu werden –, sondern dass euer Gewissen untadelig mit der Gnade zusammengeht, wenn euch die Gnade geschenkt sein wird.^pEs ist eine wahrhaft große Wirklichkeit, liebe Brüder! Tretet mit großer Aufmerksamkeit an sie heran! Jeder von euch wird vor Gott stehen, vor Tausenden von Engelscharen. Der Heilige Geist wird euren Seelen das Siegel aufdrücken. Ihr werdet in das Heer des großen Königs eingereiht. Seid also bereit, rüstet euch, zieht nicht glanzvolle Gewänder an, sondern die Frömmigkeit einer Seele mit reinem Gewissen!",
          "patr_resp1": "In seinem Mund war das Gesetz der Wahrheit, und seine Lippen kannten keine Sünde;",
          "patr_resp2": "denn er lebte mit mir in Gerechtigkeit und Frieden.",
          "patr_resp3": "Beständig wird meine Hand ihn halten und mein Arm ihn stärken.",
          "oration": "Gott, du Quelle der Wahrheit, durch den heiligen Bischof Cyrill von Jerusalem hast du deine Kirche gelehrt, das Geheimnis der Erlösung tiefer zu verstehen. Höre auf seine Fürsprache und hilf uns, deinen Sohn Jesus Christus zu erkennen und in ihm die Fülle des Lebens zu finden, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Die Weisen strahlen, wie der Himmel strahlt.^lSie haben viele zum rechten Tun geführt;^ldarum werden sie leuchten wie die Sterne,^lauf immer und ewig.",
          "oration": "Gott, du Quelle der Wahrheit, durch den heiligen Bischof Cyrill von Jerusalem hast du deine Kirche gelehrt, das Geheimnis der Erlösung tiefer zu verstehen. Höre auf seine Fürsprache und hilf uns, deinen Sohn Jesus Christus zu erkennen und in ihm die Fülle des Lebens zu finden, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Quelle der Wahrheit, durch den heiligen Bischof Cyrill von Jerusalem hast du deine Kirche gelehrt, das Geheimnis der Erlösung tiefer zu verstehen. Höre auf seine Fürsprache und hilf uns, deinen Sohn Jesus Christus zu erkennen und in ihm die Fülle des Lebens zu finden, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      }
    },
    "23": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "II. Vatikanisches Konzil (1962–1965)",
          "patr_werk": "Aus dem Dekret über die Hirtenaufgabe der Bischöfe in der Kirche.",
          "patr_text": "^hBereit zu jeder guten Tat^pBei der Erfüllung ihres Lehramtes sollen die Bischöfe den Menschen die Frohbotschaft Christi verkünden; das hat den Vorrang unter den Hauptaufgaben der Bischöfe. In der Kraft des Geistes sollen sie die Menschen zum Glauben rufen oder im lebendigen Glauben stärken. Das Geheimnis Christi sollen sie ihnen unverkürzt vorlegen, jene Wahrheiten nämlich, deren Unkenntnis Unkenntnis Christi bedeutet, desgleichen den Weg, den Gott geoffenbart hat, die Verherrlichung Gottes und zugleich damit die ewige Seligkeit zu erreichen.^pFerner sollen sie zeigen, dass selbst die irdischen Dinge und die menschlichen Einrichtungen nach dem Plan des Schöpfergottes auf das Heil der Menschen hingeordnet sind und somit zum Aufbau des Leibes Christi nicht wenig beitragen können.^pSie mögen also aufzeigen, wie sehr nach der Lehre der Kirche die menschliche Person zu achten ist, mit ihrer Freiheit und auch mit ihrem leiblichen Leben; ebenso die Familie, ihre Einheit und Festigkeit sowie die Zeugung und Erziehung der Nachkommenschaft; die weltliche Gesellschaft mit ihren Gesetzen und Berufsständen; die Arbeit und die Freizeit; die Künste und die technischen Erfindungen; die Armut und der Reichtum. Schließlich sollen sie die Grundsätze darlegen, nach denen die überaus schwierigen Fragen über Besitz, Vermehrung und rechte Verteilung der materiellen Güter, über Krieg und Frieden sowie über das brüderliche Zusammenleben aller Völker zu lösen sind.^pSie sollen die christliche Lehre auf eine Weise vertragen, die den Erfordernissen der Zeit angepasst ist, das heißt, die den Schwierigkeiten und Fragen, von denen die Menschen so sehr bedrängt und geängstigt werden, entspricht.^pDiese Lehre sollen sie auch schützen, indem sie die Gläubigen lehren, sie zu verteidigen und auszubreiten. Bei ihrer Verkündigung sollen sie die mütterliche Sorge der Kirche um alle Menschen, seien sie gläubig oder ungläubig, unter Beweis stellen und sich mit besonderer Sorge der Armen und Schwachen annehmen; ihnen die Frohbotschaft zu verkünden hat der Herr sie gesandt.^pUm dies wirksam tun zu können, müssen die Bischöfe „zu jedem guten Werk tauglich“ (2 Tim 2,21) sein, „alles um der Auserwählten willen erdulden (vgl. 2 Tim 2,10) und ihr Leben so ordnen, dass es den Anforderungen der Zeit entspricht.",
          "patr_resp1": "Weidet die Herde Gottes als Vorbild in herzlicher Liebe.",
          "patr_resp2": "Wenn dann der höchste Hirte erscheint, werdet ihr den Kranz der Herrlichkeit empfangen.",
          "patr_resp3": "Gebt acht auf die ganze Herde, in der euch der Heilige Geist zu Vorstehern bestellt hat.",
          "oration": "Barmherziger Gott, durch die apostolische Arbeit des heiligen Bischofs Turibio und seinen Eifer für die wahre Lehre hast du in Lateinamerika die Kirche im Glauben gefestigt. Gib auch den Christen unserer Zeit neue Glaubenskraft und den Mut zu einem heiligen Leben. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Nicht ihr werdet reden,^lsondern der Geist eures Vaters redet durch euch.",
          "oration": "Barmherziger Gott, durch die apostolische Arbeit des heiligen Bischofs Turibio und seinen Eifer für die wahre Lehre hast du in Lateinamerika die Kirche im Glauben gefestigt. Gib auch den Christen unserer Zeit neue Glaubenskraft und den Mut zu einem heiligen Leben. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Dies ist der treue und kluge Verwalter:^lDer Herr hat ihn eingesetzt, damit er^lseinen Dienern Nahrung gibt zur rechten Zeit.",
          "oration": "Barmherziger Gott, durch die apostolische Arbeit des heiligen Bischofs Turibio und seinen Eifer für die wahre Lehre hast du in Lateinamerika die Kirche im Glauben gefestigt. Gib auch den Christen unserer Zeit neue Glaubenskraft und den Mut zu einem heiligen Leben. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "24": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        }
      }
    },
    "26": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Liudger († 809)",
          "patr_werk": "Aus seiner Lebensbeschreibung des heiligen Gregor von Utrecht.",
          "patr_text": "^hSchaut auf das Ende ihres Lebens und ahmt ihren Glauben nach^pDie Gebote der Heiligen Schriften mahnen uns den Herrn aus ganzem Herzen und den Nächsten wie uns selbst zu lieben. Sie mahnen uns weiter, dass wir in Wahrheit jene als unsere Nächsten ansehen, die mehr auf das Geistliche als auf das Irdische bedacht sind und sich bis zum letzten Tag durch gute Werke auf die ewigen Verheißungen vorbereiten; diese rühmen sich nicht stolz ihrer hohen Geburt, sondern die Wiedergeburt aus dem Geist bringt ihnen Frucht und Fortschritt.^pZwar ist diese Liebe allen Brüdern des katholischen Glaubens, der durch die Liebe wirksam ist, zu erweisen, besonders aber unseren heiligen Vätern und Vorgesetzten, wie der heilige Apostel mahnt: „Wir bitten euch, Brüder: Erkennt die unter euch an, die sich solche Mühe geben, euch im Namen des Herrn zu leiten und zum Rechten anzuhalten. Haltet Frieden untereinander!“ (1 Thess 5,12f)^pDiese Verehrung, die wir unseren Vorgesetzten mehr als anderen erweisen sollen, besteht darin, dass wir ihnen bei Lebzeiten mit lauterem Herzen die schuldige Ehre und Gehorsam erweisen; und nach ihrem Tod sollen wir ihr frommes und segensreiches Vorbild nicht nur in unserem Gedächtnis behalten, sondern wir sollen auch zur Erbauung anderer immer wieder darüber reden und es darstellen. So erfüllen wir in Wahrheit die Mahnung, die der Apostel an einer anderen Stelle bezüglich unserer geistlichen Väter ausspricht: „Schaut auf das Ende ihres Lebens und ahmt ihren Glauben nach!“ (Hebr 13,7b)^pWenn wir so im gegenwärtigen Leben ihren Spuren folgen und ihr Vorbild uns getreu zu Herzen nehmen und in unserem Tun beachten, werden wir einst nach dem Wort des Evangeliums mit ihnen in die ewige Freude unseres Herrn eingehen dürfen.^pWenn wir diese erlangt haben und durch die unverdiente Gnade Christi in die ewige Seligkeit eingegangen sind, wird sie uns in Ewigkeit niemand mehr nehmen; denn dazu sind wir ja im Anfang durch den liebevollen Plan des Schöpfers erschaffen und nach dem todbringenden Fall des ersten Menschen durch die erbarmungsvolle Heimsuchung unseres Erlösers von neuem berufen worden. Dahin werden wir am Tag unseres Todes gelangen, wenn wir in den Tagen dieses Lebens mit sicherer Hoffnung die Mahnungen der geistlichen Väter befolgen und wenn Gott selbst immer der höchste Grund unserer Freude ist.^pWie gesagt, müssen wir also nach dem klaren Zeugnis der Heiligen Schrift den geistlichen Vätern mit Recht Ehre erweisen und dürfen außer den Geboten des Herrn ihren Mahnungen und Beispielen nichts vorziehen. In ihnen haben wir die beste Norm für unser Leben.",
          "patr_resp1": "Mit aller Klugheit und Bescheidenheit versah Liudger den Dienst des Evangeliums für die ihm anvertraute Herde,",
          "patr_resp2": "bis er sie mit der Gnade des Herrn zum vollen Glauben geführt hatte.",
          "patr_resp3": "Er schaute nicht auf sich selbst, sondern machte sich für alle zum Diener.",
          "oration": "Allmächtiger Gott, du hast den heiligen Bischof Liudger gesandt, die Friesen und die Sachsen zum christlichen Glauben zu führen. Gib auch uns unermüdlichen Eifer und jene Zuversicht, mit der er sich in den Dienst der Kirche gestellt hat. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Nicht ihr werdet reden,^lsondern der Geist eures Vaters redet durch euch.",
          "oration": "Allmächtiger Gott, du hast den heiligen Bischof Liudger gesandt, die Friesen und die Sachsen zum christlichen Glauben zu führen. Gib auch uns unermüdlichen Eifer und jene Zuversicht, mit der er sich in den Dienst der Kirche gestellt hat. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Dies ist der treue und kluge Verwalter:^lDer Herr hat ihn eingesetzt, damit er^lseinen Dienern Nahrung gibt zur rechten Zeit.",
          "oration": "Allmächtiger Gott, du hast den heiligen Bischof Liudger gesandt, die Friesen und die Sachsen zum christlichen Glauben zu führen. Gib auch uns unermüdlichen Eifer und jene Zuversicht, mit der er sich in den Dienst der Kirche gestellt hat. Darum bitten wir durch Jesus Christus."
        }
      }
    }
  },
  "4": {
    "2": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Franz von Paola († 1507)",
          "patr_werk": "Aus einem Brief.",
          "patr_text": "^hBekehrt euch mit aufrichtigem Herzen^pUnser Herr Jesus Christus, der mit höchstem Großmut vergilt, belohne euch für eure Arbeit. Flieht das Böse, überwindet die Gefahren! Wir und alle unsere Brüder bitten, obwohl wir dessen nicht wert sind, Gott den Vater, seinen Sohn Jesus Christus und die jungfräuliche Mutter unablässig, dass sie euch im Streben nach Heil von Leib und Seele nicht ohne Hilfe lassen. Ich ermahne euch eindringlich, liebe Brüder, dass ihr euch klug und fleißig um euer Seelenheil bemüht. Der Tod ist sicher, das Leben ist kurz und vergeht wie Rauch.^pDarum richtet euren Geist auf das Leiden unseres Herrn Jesus Christus, der, von Liebe zu uns entzündet, vom Himmel kam, uns zu erlösen. Er trug für uns jede Pein der Seele und des Leibes und wich keinem Urteil aus. Er gab uns das Beispiel vollendeter Geduld und Liebe. Wir müssen im Unglück geduldig sein.^pLegt Hass und Feindschaft ab, seid sparsam mit harten Worten, die aus eurem Mund kommen. Er hat Wunden geschlagen und soll auch Mittel zur Heilung hervorbringen. Verzeiht einander, damit ihr nicht weiterhin an das Unrecht denkt, das ihr einander zugefügt habt.^pAn die Bosheit zurückdenken bedeutet neues Unrecht, ist die Vollendung des Zorns, Festhalten an der Sünde, Hass gegen die Gerechtigkeit, Zerstörung der Tugend, Verwirrung im Gebet, Zerrissenheit beim Bitten, das wir vor Gott bringen, Entfremdung von der Liebe, Nagel, der in der Seele steckt, niemals schlafende Bosheit, nie endende Sünde, täglicher Tod.^pLiebt den Frieden. Er ist ein Schatz, den wir uns am meisten wünschen sollen. Ihr wisst, dass unsere Sünden Gott zum Zorn reizen. Ihr müsst also Buße tun, damit Gott euch in seinem Erbarmen verschont. Was wir Menschen verbergen, für Gott liegt es offen; bekehrt euch also mit aufrichtigem Herzen. Lebt so, dass ihr den Segen des Herrn erntet, und der Friede Gottes, unseres Vaters, sei allezeit mit euch.",
          "patr_resp1": "Immer sind wir dem Tod ausgeliefert, auch wenn wir leben,",
          "patr_resp2": "damit das Leben Jesu Christi an uns offenbar wird.",
          "patr_resp3": "Wenn auch unser äußerer Mensch vernichtet wird, der innere wird Tag für Tag erneuert.",
          "oration": "Gott, du erhöhst die Niedrigen; du hast das verborgene Leben des Einsiedlers Franz von Paola belohnt und ihn in die Schar deiner Heiligen aufgenommen. Lass uns durch seine Verdienste und in seiner Nachfolge die Gaben erlangen, welche du den Demütigen versprochen hast. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Siehe, ich stehe vor der Tür und klopfe an.^lWer meine Stimme hört und mir öffnet,^lzu dem trete ich ein und halte Mahl mit ihm,^lund er mit mir.",
          "oration": "Gott, du erhöhst die Niedrigen; du hast das verborgene Leben des Einsiedlers Franz von Paola belohnt und ihn in die Schar deiner Heiligen aufgenommen. Lass uns durch seine Verdienste und in seiner Nachfolge die Gaben erlangen, welche du den Demütigen versprochen hast. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Böte einer für die Liebe^lden ganzen Reichtum seines Hauses,^lnur verachten würde man ihn.",
          "oration": "Gott, du erhöhst die Niedrigen; du hast das verborgene Leben des Einsiedlers Franz von Paola belohnt und ihn in die Schar deiner Heiligen aufgenommen. Lass uns durch seine Verdienste und in seiner Nachfolge die Gaben erlangen, welche du den Demütigen versprochen hast. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "4": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Isidor von Sevilla († 636)",
          "patr_werk": "Aus seinem Sentenzenbuch.",
          "patr_text": "^hDer Schriftgelehrte im Himmelreich^pDurch Gebete werden wir gereinigt, durch Lesungen unterrichtet. Beides ist gut, wenn es zugleich möglich ist, andernfalls ist Beten besser als Lesen. Wer immer bei Gott sein will, muss viel beten und viel lesen. Wenn wir beten, sprechen wir mit Gott, wenn wir lesen, spricht Gott mit uns.^pJeder Fortschritt kommt aus Lesung und Erwägung. Was wir nicht wissen, lernen wir durch Lesen, und was wir gelernt haben, prägen wir uns ein durch Erwägung.^pDas Lesen der Heiligen Schrift gewährt uns einen doppelten Nutzen: Es unterweist die Einsicht unseres Geistes, und es zieht den Menschen von den Nichtigkeiten der Welt ab hin zur Gottesliebe.^pUm ein Zweifaches bemüht sich die Lesung, einmal darum, die Schrift zu verstehen, und dann darum (zu erkennen), mit welchem Nutzen und welcher Ehrfurcht sie vorgetragen werden soll. Denn zuerst wird ein jeder bereit sein, sich dem Verstehen des Gelesenen zu öffnen. Dann wird er auch fähig sein, vorzutragen, was er gelernt hat.^pDem ernsten Leser ist es viel mehr darum zu tun, auszuführen, was er gelernt hat, als es auch zu verstehen. Nicht zu wissen, wonach du streben sollst, ist eine geringere Sünde, als nicht zu tun, was du verstanden hast. Wie wir beim Lesen den Wunsch haben, auch zu verstehen, so müssen wir, nachdem wir verstanden haben, das Rechte, das wir erkannt haben, auch ausführen.^pNiemand kann den Sinn der Heiligen Schrift erkennen, wenn er sich nicht durch Lesen mit ihr vertraut macht. Es heißt ja auch: „Halte sie (die Weisheit) hoch, dann wird sie dich erhöhen, sie bringt dich zu Ehren, wenn du sie umarmst“ (Spr 4,8). Je fleißiger ein jeder die Heilige Schrift studiert, um so reicher ist die Einsicht, die er aus ihr schöpft. Es ist wie mit dem Ackerboden: Je ausgiebiger er gepflegt wird, desto reicher ist die Frucht, die er bringt.^pViele besitzen die Begabung des Verstandes, doch sie vernachlässigen die Lesung und vernachlässigen und verachten, was sie durch Lesen erfahren könnten. Manche lieben das Wissen, sind aber durch die Schwerfälligkeit ihres Geistes gehemmt. Doch sie begreifen durch ein fleißiges Lesen, was die Gescheiten aus Nachlässigkeit nicht wissen.^pWer sich schwer im Auffassen tut, erhält wegen seiner guten Absicht seinen Lohn aus einem guten Studium. Wer die ihm von Gott verliehene Begabung des Verstandes vernachlässigt, verdient es, verurteilt zu werden, weil er die verliehene Gabe verachtet und durch Faulheit fehlt.^pEine Lehre, die ohne Gnade ins Ohr eindringt, gelangt nie bis zum Herzen. Außerdem macht sie zwar Lärm, aber im Innern ist sie nutzlos. Das Wort Gottes, das durch das Ohr eingegossen wird, gelangt bis in die letzte Tiefe des Herzens, wenn die Gnade Gottes den Geist innerlich berührt, so dass der Geist Einsicht gewinnt.",
          "patr_resp1": "Jeder Schriftgelehrte, der ein Jünger des Himmelreichs geworden ist, gleicht einem Hausherrn.",
          "patr_resp2": "Aus seinem reichen Vorrat holt er Neues und Altes hervor.",
          "patr_resp3": "Im Herzen des Verständigen wohnt Weisheit, und die Unverständigen belehrt er.",
          "oration": "Gott, du Quelle der Weisheit, du hast deiner Kirche den heiligen Isidor als geistlichen Lehrer gegeben. Höre auf seine Fürbitte. Schenke deiner Kirche auch in unseren Tagen Treue zur überlieferten Wahrheit und führe sie zur Einheit in deiner Liebe. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Die Weisen strahlen, wie der Himmel strahlt.^lSie haben viele zum rechten Tun geführt;^ldarum werden sie leuchten wie die Sterne,^lauf immer und ewig.",
          "oration": "Gott, du Quelle der Weisheit, du hast deiner Kirche den heiligen Isidor als geistlichen Lehrer gegeben. Höre auf seine Fürbitte. Schenke deiner Kirche auch in unseren Tagen Treue zur überlieferten Wahrheit und führe sie zur Einheit in deiner Liebe. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "O Lehrer des Glaubens und Licht der Kirche,^ldu hast Gottes Weisung geliebt.^lHeiliger Isidor, bitte für uns bei Gottes Sohn.",
          "oration": "Gott, du Quelle der Weisheit, du hast deiner Kirche den heiligen Isidor als geistlichen Lehrer gegeben. Höre auf seine Fürbitte. Schenke deiner Kirche auch in unseren Tagen Treue zur überlieferten Wahrheit und führe sie zur Einheit in deiner Liebe. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "5": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Vinzenz Ferrer († 1419)",
          "patr_werk": "Aus einem Traktat über das geistliche Leben.",
          "patr_text": "^hGütige Seelsorge^pIn Predigten und Ermahnungen bediene dich einer schlichten Beredsamkeit und einer vertrauten Sprache, wenn du einzelne Handlungen beschreiben willst. Soweit du kannst, biete Beispiele, damit jeder Sünder, der die (im Beispiel vorkommende) Sünde hat, sich so getroffen fühlt, als wenn du ihm allein predigtest.^pAber man muss spüren, dass die Worte nicht aus einem stolzen und empörten Geist kommen, sondern aus einem Herzen voll Liebe und väterlicher Güte, der Güte eines Vaters, den es schmerzt, wenn die Söhne sündigen aus großer Schwachheit oder wenn sie wie in einer tiefen Grube liegen und er sie herausziehen und retten und pflegen möchte wie eine Mutter, wie ein Vater, der sich über den Fortschritt der Söhne freut und über die Hoffnung auf das Paradies. Ein solches Verfahren ist für die Hörer gut. Denn ein allgemeines Reden über Tugenden und Laster ist für sie reizlos.^pEbenso ist es mit der Beichte: Ob du freundlich die Kleinmütigen stärkst oder härter die Harten anpackst, immer sollst du ein liebevolles Herz zeigen, damit der Sünder merkt, dass deine Worte aus reiner Liebe kommen. Deshalb sollen auch immer liebevolle und freundliche Worte den strengen vorausgehen.^pDu hast das sehnliche Verlangen, der Seele der Mitmenschen zu helfen. So wende dich denn zuerst mit ganzem Herzen an Gott und trag ihm schlicht die Bitte vor, er möge dir in Gnaden jene Liebe eingeben, in der die Vollendung der Tugenden besteht, damit du vollbringen kannst, wonach du verlangst.",
          "patr_resp1": "Verkünde das Wort, tritt dafür ein zu gelegener und ungelegener Zeit; weise zurecht, tadle, ermahne",
          "patr_resp2": "in unermüdlicher und geduldiger Belehrung.",
          "patr_resp3": "Ich habe den Heiden gepredigt, sie sollen Buße tun und umkehren zu Gott.",
          "oration": "Herr, unser Gott, du hast deiner Kirche im heiligen Vinzenz Ferrer einen machtvollen Prediger geschenkt, der Jesus Christus als den kommenden Richter verkündet hat. Gib, dass wir deinem Sohn freudig entgegentreten und ihn als unseren König schauen, wenn er in Herrlichkeit wiederkommt, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Nicht ihr werdet reden,^lsondern der Geist eures Vaters redet durch euch.",
          "oration": "Herr, unser Gott, du hast deiner Kirche im heiligen Vinzenz Ferrer einen machtvollen Prediger geschenkt, der Jesus Christus als den kommenden Richter verkündet hat. Gib, dass wir deinem Sohn freudig entgegentreten und ihn als unseren König schauen, wenn er in Herrlichkeit wiederkommt, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Allen bin ich alles geworden, um alle zu retten.",
          "oration": "Herr, unser Gott, du hast deiner Kirche im heiligen Vinzenz Ferrer einen machtvollen Prediger geschenkt, der Jesus Christus als den kommenden Richter verkündet hat. Gib, dass wir deinem Sohn freudig entgegentreten und ihn als unseren König schauen, wenn er in Herrlichkeit wiederkommt, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      }
    },
    "7": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Johannes Baptist de la Salle († 1719)",
          "patr_werk": "Aus einer Meditation.",
          "patr_text": "^hDie Liebe Gottes drängt uns^pErwägt im Herzen, liebe Brüder, was der Apostel Paulus sagt: Gott habe in seiner Kirche Apostel, Propheten und Lehrer bestellt (vgl. 1 Kor 12,28), und seid überzeugt dass Gott auch euch in euer Amt eingesetzt hat. Das bezeugt euch derselbe Heilige, wenn er erklärt, es gebe verschiedenen Dienste und verschiedene Kräfte und derselbe Heilige Geist zeige sich in jeder dieser Gaben zum gemeinsamen Nutzen, das heißt zum Nutzen der Kirche (vgl. 1 Kor 12,5.11).^pIhr sollt also nicht an der großen Gnade zweifeln, die ihr erhalten habt: die Knaben zu lehren, ihnen die Frohe Botschaft zu verkünden und sie im Geist der Religion zu erziehen. Es ist ein großes Geschenk Gottes, dass er euch zu einer so heiligen Aufgabe berufen hat.^pDie Schüler, die eurer Sorge anvertraut sind, sollen an eurer ganzen Lehrtätigkeit sehen, dass ihr Diener Gottes seid, da ihr die Aufgabe mit ungeheuchelter Liebe und echter Sorgfalt erfüllt. Auch darum sollt ihr euch eurem Amt verpflichtet fühlen, weil ihr nicht nur Diener Gottes, sondern auch Diener Jesu Christi und der Kirche seid.^pSo sagt der heilige Paulus mahnend, alle seien als Diener Christi zu betrachten, die das Evangelium verkündigen, die den Brief schreiben, den Christus diktiert, „nicht mit Tinte, sondern mit dem Geist des lebendigen Gottes, nicht auf Tafeln aus Stein, sondern – wie auf Tafeln – in Herzen von Fleisch“ (2 Kor 3,3), die Herzen der Knaben. Deswegen dränge euch die Liebe Gottes“(vgl. 2 Kor 5,14), weil Jesus Christus „für alle gestorben ist, damit die Lebenden nicht mehr für sich leben, sondern für den, der für sie starb und auferweckt wurde“ (2 Kor 5,15). Möge daher eure Sorgfalt und euer Eifer die Schüler bewegen. Mögen sie fühlen, dass Gott sie durch euch ermahnt, weil ihr Gesandte Christi seid.^pFerner müsst ihr der Kirche zeigen, wie sehr ihr sie liebt, und ihr sollt ihr Beweise eurer Gewissenhaftigkeit geben. Denn ihr arbeitet durch die Kirche, den mystischen Leib Christi. Durch eure Arbeitsfreudigkeit zeigt, dass ihr die Menschen, die Gott euch anvertraut hat, liebt, wie Christus die Kirche geliebt hat.",
          "patr_resp1": "Sie brachten Kinder zu Jesus. Die Jünger aber wiesen die Leute ab. Als Jesus das sah, sprach er zu ihnen:",
          "patr_resp2": "Lasst die Kinder zu mir kommen; denn ihnen gehört das Gottesreich.",
          "patr_resp3": "Wer ein solches Kind in meinem Namen aufnimmt, nimmt mich auf.",
          "oration": "Gott, du hast den heiligen Johannes Baptist de la Salle berufen, jungen Menschen den Weg des Heils zu zeigen. Erwecke in deiner Kirche verantwortungsbewusste Erzieher voll schöpferischen Geistes, die sich mit aller Kraft dafür einsetzen, gute Menschen und wahre Christen heranzubilden. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Wer barmherzig ist,^lder lehrt und erzieht wie ein guter Hirt.",
          "oration": "Gott, du hast den heiligen Johannes Baptist de la Salle berufen, jungen Menschen den Weg des Heils zu zeigen. Erwecke in deiner Kirche verantwortungsbewusste Erzieher voll schöpferischen Geistes, die sich mit aller Kraft dafür einsetzen, gute Menschen und wahre Christen heranzubilden. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Lasst die Kinder zu mir kommen;^ldenn Menschen wie ihnen gehört das Himmelreich.",
          "oration": "Gott, du hast den heiligen Johannes Baptist de la Salle berufen, jungen Menschen den Weg des Heils zu zeigen. Erwecke in deiner Kirche verantwortungsbewusste Erzieher voll schöpferischen Geistes, die sich mit aller Kraft dafür einsetzen, gute Menschen und wahre Christen heranzubilden. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "11": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Cyprian von Karthago († 258)",
          "patr_werk": "Aus einem Brief.",
          "patr_text": "^hDas Kämpfen in der Schlacht des Glaubens^pWenn wir in der Schlacht stehen und für den Glauben kämpfen, schaut Gott auf uns herab. Zuschauer sind die Engel, und auch Christus blickt auf uns. Welch erhabene Herrlichkeit, welche Glückseligkeit, in der Gegenwart Gottes zu kämpfen und von Christus, dem Richter, den Siegeskranz zu empfangen! Wir wollen uns wappnen mit aller Kraft und uns zum Kampf rüsten mit lauterem Geist, zuversichtlichem Glauben und liebender Tugend. Das Heer Gottes marschiere voran zu der angekündigten Schlacht!^pDer Apostel lehrt uns die Vorbereitung und die Bewaffnung: „Gürtet euch mit Wahrheit, zieht als Panzer die Gerechtigkeit an und als Schuhe die Bereitschaft, für das Evangelium vom Frieden zu kämpfen! Vor allem greift zum Schild des Glaubens! Mit ihm könnt ihr alle feurigen Geschosse des Bösen auslöschen. Nehmt den Helm des Heils und das Schwert des Geistes, das ist das Wort Gottes (Eph 6,14–17) Diese Waffen wollen wir ergreifen, mit diesem Schutz des Geistes und des Himmels uns wappnen, damit wir am bösen Tag den Drohungen des Teufels im Kampf standhalten können.^pWir wollen den Panzer der Gerechtigkeit anlegen, damit unsere Brust gegen die Pfeile des Feindes gefestigt und gesichert ist. Beschuht und bewehrt seien unsere Füße mit der Lehre des Evangeliums. Wenn wir uns darum anschicken, die Schlange zu zertreten, wird sie uns nicht beißen und zum Straucheln bringen können. Liebe Brüder, das hafte fest in eurem Herzen! Wenn der Soldat Christi dies bedenkt und erwägt, wenn der Tag der Verfolgung über ihn kommt, dann wird er, in den Geboten und Mahnungen des Herrn erzogen, sich nicht vor dem Kampf fürchten, sondern für den Kranz bereit sein.",
          "patr_resp1": "Er stritt bis zum Tod für des Gesetz seines Gottes und fürchtete sich nicht vor den Worten der Gottlosen;",
          "patr_resp2": "denn er war auf einen festen Felsen gegründet.",
          "patr_resp3": "Er hat das Leben der Welt geringgeachtet und ist zum Reich des Himmels gelangt.",
          "oration": "Gott und Herr, der heilige Bischof Stanislaus hat sich unerschrocken für deine Ehre eingesetzt und ist unter dem Schwert der Verfolger gefallen. Gib auch uns die Kraft, bis zu unserem Tode im Glauben standhaft zu bleiben. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Wer sein Leben liebt, wird es verlieren;^ldoch wer in dieser Welt sein Leben hasst,^lder wird es bewahren für das ewige Leben.",
          "oration": "Gott und Herr, der heilige Bischof Stanislaus hat sich unerschrocken für deine Ehre eingesetzt und ist unter dem Schwert der Verfolger gefallen. Gib auch uns die Kraft, bis zu unserem Tode im Glauben standhaft zu bleiben. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Im himmlischen Reich ist die Wohnstatt der Heiligen.^lDort finden sie Ruhe auf ewig.",
          "oration": "Gott und Herr, der heilige Bischof Stanislaus hat sich unerschrocken für deine Ehre eingesetzt und ist unter dem Schwert der Verfolger gefallen. Gib auch uns die Kraft, bis zu unserem Tode im Glauben standhaft zu bleiben. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "13": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Martin I. († 655)",
          "patr_werk": "Aus einem Brief.",
          "patr_text": "^hDer Herr ist nahe, was sorge ich mich?^pWir sind voll Sehnsucht, durch Unsere Briefe eure Liebe immer wieder zu trösten und euch die Sorge zu lindern, die ihr Unseretwegen habt, und mit euch alle Heiligen, Unsere Brüder, die um des Herrn willen um Uns besorgt sind. Seht, ich schreibe euch, was uns gegenwärtig bedrängt. Ich sage die Wahrheit im Namen Christi, Unseres Gottes.^pAus allem irdischen Wirbel herausgenommen und unseren Sünden entrückt, seht, müssen wir sogar das Leben entbehren. Die Bewohner dieser Gegend sind alle Heiden, und die sonst hier leben, haben heidnische Sitten angenommen, besitzen keine Liebe, nicht einmal die, welche die menschliche Natur selbst unter den Barbaren durch häufiges Mitleid beweist.^pIch wunderte mich aber und wundere mich noch über die Rücksichtslosigkeit und Mitleidlosigkeit aller, die ehedem zu uns gehörten, sowohl meiner Verwandten als auch meiner Freunde. Sie haben mich in meinem Unglück gründlich vergessen. Sie wollen nicht wissen, wo ich mich befinde, gleich ob ich noch auf der Erde bin oder nicht. Mit welchem Gewissen, denkst du, können wir vor den Richterstuhl Christi treten, wenn dann alle Menschen Anklage gegen mich erheben und Zeugnis (wider mich) ablegen, sie alle, die doch aus dem gleichen Lehm und Stoff bestehen? Welche Furcht hat die Menschen befallen, dass sie die Gebote Gottes nicht erfüllen! Welche Furcht, wo doch nichts zu fürchten ist? (Ps 53,6) Oder decken uns die bösen Geister derart mit Verleumdung zu? Hält mich die ganze Kirche für ihren Feind und Gegner?^pDoch Gott, der „will, dass alle Menschen gerettet werden und zur Erkenntnis der Wahrheit gelangen“ (1 Tim 2,4), möge ihre Herzen auf die Fürsprache des heiligen Petrus im rechten Glauben festigen und stark machen gegen alle Irrlehrer und alle Feinde unserer Kirche. Er möge sie unerschüttert bewahren, besonders den Hirten, der ihnen jetzt als Vorsteher gezeigt wird. Davon sollen sie keinesfalls abfallen oder abweichen. Sie sollen nichts, nicht das Geringste von dem aufgeben, was sie vor Gott und den heiligen Engeln bekannt haben. Sie sollen zusammen mit meiner Niedrigkeit den Kranz des rechten Glaubens erlangen aus der Hand unseres Herrn und Heilandes Jesus Christus.^pFür diesen meinen hinfälligen Leib wird der Herr selber sorgen, wie es ihm zu verfügen gefällt, sei es, dass er ihn in unablässiger Bedrängnis lässt oder ihm ein wenig Erholung gewährt. Der Herr ist nahe, was sorge ich mich? (vgl. Phil 4,5) Ich hoffe auf sein Erbarmen. Er wird nicht zögern, meinen Lauf dort zu beenden, wohin er ihn befohlen hat.^pGrüßt all die Euren im Namen des Herrn und alle, die aus Liebe zu Gott Mitleid mit meinen Fesseln haben. Der höchste Gott beschütze euch mit seiner machtvollen Hand und rette euch und führe euch in sein Reich.",
          "patr_resp1": "Ich habe den guten Kampf gekämpft, den Lauf vollendet;",
          "patr_resp2": "jetzt liegt für mich der Kranz der Gerechtigkeit bereit.",
          "patr_resp3": "Ich sehe alles als Verlust an, um Christus zu erkennen und die Gemeinschaft mit seinem Leiden. Sein Tod soll mich prägen.",
          "oration": "Allmächtiger Gott, in deiner Kraft hat der heilige Papst Martin den Drohungen ungerechter Gewalt widerstanden und Misshandlungen standhaft erduldet. Hilf auch uns, alle Schwierigkeiten mit ungebrochenem Mut zu überwinden. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Wer sein Leben liebt, wird es verlieren;^ldoch wer in dieser Welt sein Leben hasst,^lder wird es bewahren für das ewige Leben.",
          "oration": "Allmächtiger Gott, in deiner Kraft hat der heilige Papst Martin den Drohungen ungerechter Gewalt widerstanden und Misshandlungen standhaft erduldet. Hilf auch uns, alle Schwierigkeiten mit ungebrochenem Mut zu überwinden. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Im himmlischen Reich ist die Wohnstatt der Heiligen.^lDort finden sie Ruhe auf ewig.",
          "oration": "Allmächtiger Gott, in deiner Kraft hat der heilige Papst Martin den Drohungen ungerechter Gewalt widerstanden und Misshandlungen standhaft erduldet. Hilf auch uns, alle Schwierigkeiten mit ungebrochenem Mut zu überwinden. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "19": {
      "n1": {
        "name": "Leo IX.",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Leo der Große († 461)",
          "patr_werk": "Aus einer Predigt.",
          "patr_text": "^hJesus Christus ist das wahre und ewige Oberhaupt der Kirche^pUmhüllt von sterblichem Fleisch und voll Schwäche gegenüber der Versuchung, sind wir nie in dem Maße unbehelligt, dass uns nicht irgendeine Anfechtung zusetzte. Freilich befinden sich durchweg alle Bischöfe in dieser Lage, um wieviel mehr aber fühle ich ihre Last und Bürde, für den gerade die Größe des übernommenen Amtes gar häufig Anlass zum Falle wird!^pMag sich auch die Fürsorge aller Hirten noch so eingehend mit ihren Herden beschäftigen, mögen sie sich auch noch so sehr bewusst sein, dass sie dereinst für die ihnen anvertrauten Schafe Rechenschaft abzulegen haben, so tragen doch wir mit allen die Sorge gemeinsam und nehmen an der Amtsführung eines jeden mühevollen Anteil. Aus der ganzen Welt nimmt man seine Zuflucht zum Stuhl des heiligen Petrus, und alle erwarten von unserer Verwaltung des Hohepriesteramtes dieselbe Liebe zur gesamten Kirche, wie sie dem Petrus vom Herrn ins Herz gelegt wurde. Da fühlen wir die Bürde um so schwerer auf uns lasten, je Größeres wir allen schulden.^pWie können wir also bei solch begründeter Besorgnis mit solchem Vertrauen an die Ausführung unserer Aufgabe gehen, wenn nicht er ohne Schlummer und Schlaf wäre, der über Israel wacht und zu seinen Jüngern spricht: „Seid gewiss: Ich bin bei euch alle Tage bis zum Ende der Welt“ (Mt 28,20), wenn sich nicht er, den man zwar nicht sieht, wohl aber in seinem Innern fühlt, sich dazu herabließe, der Hüter seiner Schafe und der Hirte der Hirten selbst zu sein. Freilich ist er fern dem Leibe nach, in dem wir ihn schauen könnten, doch gegenwärtig in seiner Gottheit, in der er überall ungeteilt weilt.^pEs weilt also – wir bekennen dies nicht unbedachterweise, sondern aus Überzeugung – unser Herr Jesus Christus inmitten seiner Gläubigen. „Obwohl er zur Rechten Gottes, des Vaters, sitzt, bis er seine Feinde als Schemel unter seine Füße legt“, so bleibt er doch nicht als höchster Priester der Versammlung seiner Bischöfe fern. Mit Recht erschallt es ihm zu Ehren aus dem Munde der ganzen Kirche und aller Priester: „Der Herr hat geschworen, und nie wird es ihn reuen: ‚Du bist Priester auf ewig nach der Ordnung Melchisedeks‘“(Ps 110,4).",
          "patr_resp1": "Jesus sprach zu Simon: Du bist Petrus, der Fels, und auf diesen Felsen werde ich meine Kirche bauen",
          "patr_resp2": "und die Mächte der Unterwelt werden sie nicht überwältigen.",
          "patr_resp3": "Gott lässt sie ewig bestehen.",
          "oration": "Ewiger und treuer Gott, du hast deinem Volk im heiligen Papst Leo einen Hirten gegeben, der von tiefem Glauben erfüllt war und sein Leben ganz im Dienst für die Kirche einsetzte. Auf seine Fürsprache gib deinem Volk die Gnade, sich zu erneuern. Hilf uns, Spaltung und Trennung zu überwinden, damit alle, die sich Christen nennen, im Glauben und in der Liebe eins werden. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Leo IX.",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Ewiger und treuer Gott, du hast deinem Volk im heiligen Papst Leo einen Hirten gegeben, der von tiefem Glauben erfüllt war und sein Leben ganz im Dienst für die Kirche einsetzte. Auf seine Fürsprache gib deinem Volk die Gnade, sich zu erneuern. Hilf uns, Spaltung und Trennung zu überwinden, damit alle, die sich Christen nennen, im Glauben und in der Liebe eins werden. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Leo IX.",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Ewiger und treuer Gott, du hast deinem Volk im heiligen Papst Leo einen Hirten gegeben, der von tiefem Glauben erfüllt war und sein Leben ganz im Dienst für die Kirche einsetzte. Auf seine Fürsprache gib deinem Volk die Gnade, sich zu erneuern. Hilf uns, Spaltung und Trennung zu überwinden, damit alle, die sich Christen nennen, im Glauben und in der Liebe eins werden. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Marcel Callo",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Laudes": {
          "name": "Marcel Callo",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Vesper": {
          "name": "Marcel Callo",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        }
      }
    },
    "21": {
      "n1": {
        "name": "Konrad von Parzham",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Pius XII. († 1958)",
          "patr_werk": "Aus einer Predigt zum Fest des heiligen Konrad von Parzham.",
          "patr_text": "^hDer Mensch sieht nur das, was nach außen in Erscheinung tritt, Gott hingegen erforscht die Herzen^pEs wollte der Hirte unserer Seelen den demütigen Kapuzinerbruder und Pförtner Konrad von Parzham erhöhen und verherrlichen. Es ist ja sein Ruhm und seine Ehre, die Hochmütigen zu stürzen und die Demütigen zu erhöhen.^pBei Konrad sucht ihr vergebens nach den bewundernswerten Großtaten anderer Heiliger, die selbst die Welt staunend aufhorchen lassen. Die Erweise göttlicher Huld und die Gnade richten sich nämlich in erster Linie nicht nach der Höhe des Amtes, das man bekleidet, und nicht nach dem äußeren Glanz. Der Mensch sieht in seiner Kurzsichtigkeit nur das, was nach außen in Erscheinung tritt, Gott hingegen erforscht die Herzen. In seinen Augen, die in die geheimnisvollen Tiefen dringen, wo Gnade und menschlicher Wille sich umarmen, kann ein demütiger, einfacher Bruder an einer Klosterpforte in hellerem Licht erstrahlen als etwa einer, der mit goldenem Zepter ganze Völker regiert. Gewiss, Gott dienen heißt herrschen, aber es ist die Herrschaft über ein Reich, das in uns besteht und nicht von dieser Welt ist.^pWer könnte die Scharen zählen, die an die Pforte der hilfreichen Kapuziner klopften und den heiligen Pförtner um ein gutes Wort, einen kleinen Dienst, ein Stück Brot, einen erfrischenden Trunk, ein liebes Andenken und um Trost in ihren Anliegen baten! Selbst Zudringlichkeit, Grobheit und Bosheit brachten es nicht fertig, sein geduldiges Schweigen und seine lächelnde Ruhe zu stören.^pDas Gebet unseres Heiligen war nicht getragen von den hohen Gedanken eines Augustinus, Bernhard, Heinrich Seuse, Thomas von Kempen, Johannes vom Kreuz oder seines heiligen Vaters Franziskus; sein Alverna lag viel tiefer, lag in der Ebene der einfachen Leute, wo sich unser tägliches Leben abspielt und wo das Feuer der Liebe, das zu Gott emporsteigt und die dichten Nebel der niedrigen Welt bezwingt, alle unsere Handlungen und Leiden heiligt und in Ewigkeitswerte verwandelt.^pSo wird in der Ausübung der Pflicht die mühsame Arbeit zum Gebet, das Gebet zur brennenden Liebe, die brennende Liebe zu Standhaftigkeit und dauerndem Wachstum im Guten. Der Diener Gottes machte sich so zugleich zum Diener der Menschen, der Mitbrüder und des Volkes.^pDer offene Klostervorraum war für ihn der Vorhof seines künftigen Paradieses. Für die Mitmenschen sollte er eine Schule des Glaubens, zuversichtlicher Stärke und der – gleich der göttlichen Gnade – vielgestaltigen Liebe werden. Dazu musste aber der Lehrer in einem Ansehen stehen das nicht vom Lehrstuhl, sondern von der Heiligkeit herrührte. Von einer Heiligkeit, die in väterlich-freundlicher, aufmerksam entgegenkommender, heiterer und zugleich ernster Güte gegen Fromme und Gleichgültige, gegen Kinder und Erwachsene, gegen einfache und hochgestellte Personen aufleuchtet. Diese lebendige und tiefreligiöse Frömmigkeit war der nachhaltige Unterricht, den Beobachter und Besucher von Konrad erhielten.^pAls Schüler des Gekreuzigten flößte der heilige Pförtner Kreuzesmut und Kreuzestrost in die bedrückten Herzen, die sich ihm erschlossen. Er zeigte ihnen in Gott den liebevollen Vater, der uns nicht verstößt; auch dann nicht, wenn wir ihn zurückweisen.",
          "patr_resp1": "Legt euren Gürtel nicht ab und lasst eure Lampen brennen!",
          "patr_resp2": "Seid wie Menschen, die auf die Rückkehr ihres Herrn warten und ihm öffnen, sobald er kommt und anklopft.",
          "patr_resp3": "Haltet auch ihr euch bereit, denn der Menschensohn kommt zu einer Stunde, in der ihr es nicht vermutet.",
          "oration": "Gott, du hast den heiligen Bruder Konrad zum Dienst an den Wallfahrern und Notleidenden berufen. Mache auch uns bereit, in Geduld und Güte denen zu begegnen, die auf unsere Hilfe warten. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Konrad von Parzham",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du hast den heiligen Bruder Konrad zum Dienst an den Wallfahrern und Notleidenden berufen. Mache auch uns bereit, in Geduld und Güte denen zu begegnen, die auf unsere Hilfe warten. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Konrad von Parzham",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du hast den heiligen Bruder Konrad zum Dienst an den Wallfahrern und Notleidenden berufen. Mache auch uns bereit, in Geduld und Güte denen zu begegnen, die auf unsere Hilfe warten. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Anselm",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Anselm von Canterbury († 1109)",
          "patr_werk": "Aus dem Buch „Proslogion“.",
          "patr_text": "^hIch möchte dich erkennen, dich lieben und mich an dir freuen^pHast du gefunden, meine Seele, was du gesucht hast? Du hast Gott gesucht und gefunden dass er das Höchste von allem ist, so hoch, dass wir nichts Höheres denken können als ihn. Du hast gefunden, dass er Leben und Licht, Weisheit und Güte, ewige Seligkeit und selige Ewigkeit in Person ist, überall und immerdar.^pHerr, mein Gott, der mich geschaffen und neu geschaffen hat, sag meiner verlangenden Seele, was du über das hinaus bist, was sie gesehen hat, damit sie dich rein erkennt.^pMeine Seele streckt sich aus, um noch mehr zu sehen. Aber jenseits von dem, was sie gesehen hat, erblickt sie nur Finsternis. Ja, sie sieht auch keine Finsternis, da es die nicht in dir gibt. Aber sie merkt, dass sie wegen ihrer eigenen Finsternis mehr nicht sehen kann.^pWirklich, Herr, das ist das unzugängliche Licht, in dem du wohnst (vgl. 1 Tim 6,16); es gibt wirklich nichts anderes, was in dieses Licht eindringen und dich dort sehen konnte. Wahrhaftig, deswegen kann ich nicht sehen, weil es zu hell für mich ist. Und doch: was immer ich sehe, ich sehe es durch dieses Licht, wie ein krankes Auge alles, was es erblickt, durch das Sonnenlicht sieht, obwohl es nicht in die Sonne sehen kann.^pMeine Vernunft ist ohnmächtig gegenüber diesem Licht, es leuchtet zu stark; sie fasst es nicht, und das Auge meiner Seele hält es nicht lange aus, hineinzuschauen. Das Auge schreckt vor dem Glanz zurück, wird von der Fülle besiegt, von der Unermesslichkeit zu Boden geworfen und von der Kraft geblendet.^pDu höchstes, unzugängliches Licht! Du volle und selige Wahrheit, wie fern bist du von mir, obwohl ich doch so nahe bei dir bin! Wie fern bist du meinen Blicken, wo ich deinen Augen doch unmittelbar gegenwärtig bin!^pDu bist überall, und doch sehe ich dich nicht. In dir bewege ich mich, und in dir bin ich (vgl. Apg 17,28), und doch kann ich nicht zu dir kommen! Du bist in mir und um mich, und doch, ich fühle dich nicht!^pMein Gott, ich bete: Ich möchte dich erkennen, dich lieben und an dir mich freuen. Wenn ich es in diesem Leben nicht ganz erreichen kann, so lass mich täglich fortschreiten, bis jenes Ganze kommt; hier möge deine Erkenntnis in mir wachsen und dort vollendet werden. Hier nehme meine Liebe zu dir zu, um dort vollkommen zu werden. Hier sei meine Freude groß in der Hoffnung, dort in der Wirklichkeit unbegrenzt.",
          "patr_resp1": "Dies ist der erhabene Lehrer.",
          "patr_resp2": "Unermüdlich stritt er für die Freiheit der Kirche.",
          "patr_resp3": "Er war ein liebenswerter Vater der Mönche und wurde zum Bischofsamt berufen.",
          "oration": "Gott, du bist unerforschlich in deinem Wesen, und doch offenbarst du dich den Menschen. Du hast den heiligen Anselm gedrängt, die Tiefe deiner Weisheit zu erforschen und zu verkünden. Gib, dass der Glaube unserem Verstand zu Hilfe komme, damit unser Herz liebgewinnt, was du uns zu glauben befiehlst. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Anselm",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du bist unerforschlich in deinem Wesen, und doch offenbarst du dich den Menschen. Du hast den heiligen Anselm gedrängt, die Tiefe deiner Weisheit zu erforschen und zu verkünden. Gib, dass der Glaube unserem Verstand zu Hilfe komme, damit unser Herz liebgewinnt, was du uns zu glauben befiehlst. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Anselm",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du bist unerforschlich in deinem Wesen, und doch offenbarst du dich den Menschen. Du hast den heiligen Anselm gedrängt, die Tiefe deiner Weisheit zu erforschen und zu verkünden. Gib, dass der Glaube unserem Verstand zu Hilfe komme, damit unser Herz liebgewinnt, was du uns zu glauben befiehlst. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "23": {
      "n1": {
        "name": "Adalbert",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Theodor vom Studion († 826)",
          "patr_werk": "Aus einem Brief.",
          "patr_text": "^hErmunterung zum Martyrium^pWas soll die Traurigkeit dieser Zeit? Freude und Frohlocken soll sie uns bringen, weil uns die Gnade zuteil geworden ist, für Christus als Glaubenszeugen auf den Kampfplatz zu treten, um des Wortes Gotteswillen Kerker und Bedrängnissen überantwortet zu werden, für Christus, der für uns gegeißelt, geschmäht und schließlich ans Kreuz genagelt wurde, uns mit Ruten züchtigen und mit Füßen treten zu lassen. Wen sollte das nicht glücklich machen und mit Dank erfüllen! Ost und West ergehen sich in Freudenkundgebungen, und die Kirche aller vier Himmelsgegenden jubelt.^pGekommen, meine Brüder, ist die Zeit der Erprobung! Jetzt lassen sich die von Gott geflochtenen Siegeskränze des Heldenglaubens ernten. Schämen wir uns darum nicht des Zeugnisses für den Herrn! Mit Märtyrerblut wird auch in unsern Tagen die Kirche Gottes getränkt, und die Glaubenshelden, die im gegenwärtigen Augenblick noch im Kampf stehen und auf alle nur mögliche Art bedrängt werden, sind es, die sie tränken. Denn Blut vergießt auch, wer im Kerker schmachtet, wer von der Gesellschaft ausgeschlossen ist, wer Hunger und Durst leiden muss, wer, des Lichtes der Sonne beraubt, um mit Paulus zu reden, täglich stirbt (vgl. 1 Kor 15,31) oder, wie David sagt, wie ein Schaf behandelt wird, „das man zum Schlachten bestimmt hat“ (Ps 44,23). Freilich, „wenn wir mit Christus gestorben sind, werden wir auch mit ihm leben; wenn wir standhaft bleiben, werden wir auch mit ihm herrschen“ (2 Tim 2,11–12).^pVon jeher ist es die Gnade gewesen, welche die Christen zum Martyrium erkor, und neue Märtyrer erstehen von Geschlecht zu Geschlecht, da, wie Christus sagte, die Ärgernisse kommen müssen (vgl. Mt 18,7), damit die Auserwählten wie Sonnen leuchten (vgl. Dan 12,3) und das Unkraut seine Zugehörigkeit zur Finsternis offenbare.^pMeine Brüder! Wir wollen in dieser verkehrten und verkommenen Zeit die Leuchtfeuer werden, welche die mondlose Nacht des Irrtums aufhellen (vgl. 2 Petr 1,19), nachdem uns Christus zu seiner Ehre für den Ruhm des wahren Glaubens auserlesen hat. Wie die Alten uns, so wollen wir den kommenden Generationen eine feste Stütze bieten und ihre Bahn vorzeichnen, damit wir am Tage Christi triumphieren können.^pMöge das Psalmwort: „Fast wären meine Füße gestrauchelt, beinahe wäre ich gefallen, denn ich habe mich über die Prahler ereifert, als ich sah, dass es diesen Frevlern so gut ging“ (Ps 73,2-3), möge dieses Wort, das ich mir zu Herzen gehen ließ, keine Anwendung auf euch finden, möget ihr vielmehr das Wort des Herrn auf euch wirken lassen: Erwarte mich bis zum Tage meiner Auferstehung (vgl. Weish 3,3), und „ihr werdet um meines Namens willen von allen gehasst werden; wer aber bis zum Ende standhaft bleibt der wird gerettet“ (Mk 13,13).",
          "patr_resp1": "Ich habe den guten Kampf gekämpft, den Lauf vollendet, die Treue gehalten.",
          "patr_resp2": "Schon jetzt liegt für mich der Kranz der Gerechtigkeit bereit.",
          "patr_resp3": "Christus will ich erkennen und die Gemeinschaft mit seinen Leiden; sein Tod soll mich prägen.",
          "oration": "Gott, in deinem Auftrag hat der heilige Bischof Adalbert den Samen des Evangeliums ausgesät und ihn mit seinem Blut getränkt. Gib allen, die du zum Glauben berufen hast, die Kraft unbeirrbarer Treue. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Adalbert",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, in deinem Auftrag hat der heilige Bischof Adalbert den Samen des Evangeliums ausgesät und ihn mit seinem Blut getränkt. Gib allen, die du zum Glauben berufen hast, die Kraft unbeirrbarer Treue. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Adalbert",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, in deinem Auftrag hat der heilige Bischof Adalbert den Samen des Evangeliums ausgesät und ihn mit seinem Blut getränkt. Gib allen, die du zum Glauben berufen hast, die Kraft unbeirrbarer Treue. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Georg",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Petrus Damiani († 1072)",
          "patr_werk": "Aus einer Predigt zu Ehren des heiligen Georg.",
          "patr_text": "^hUnter dem Banner des Kreuzes unbesiegbar^pMeine Lieben, das heutige Fest verdoppelt die Freude über die Osterherrlichkeit Es ist wie eine kostbare Perle, die das Gold, in das sie eingefügt wird, mit dem Schimmer ihres eigenen Glanzes überstrahlt.^pVon einem Kriegsdienst trat Georg über zu dem andern,weil er den irdischen Dienst eines Kriegsobersten mit dem Bekenntnis zum Kriegsdienst Christi vertauschte. Wie ein wahrhaft entschlossener Ritter gab er zuerst seine Habe den Armen und tat die Last irdischen Besitzes von sich ab. Auf diese Weise frei und ungehindert, mit dem Panzer des Glaubens angetan, stürzte sich der Krieger Christi begeistert in das dichte Getümmel des Kampfes. So werden wir zuverlässig belehrt, dass keiner tapfer und erfolgreich für die Verteidigung des Glaubens kärnpfen kann, der sich vor dem Verlust irdischer Güter fürchtet.^pVom Feuer des Heiligen Geistes entflammt und unter dem Schutz des Kreuzesbanners, war der heilige Georg unbesiegbar. Er begann den Kampf mit dem bösen König, um den Fürsten alles Bösen in seinem Vasallen zu besiegen und um den Geist der Krieger Christi zu tapferen Kämpfen anzueifern.^pDer höchste, der unsichtbare Kampfrichter war zugegen. Darum durften nach dem Willen der Vorsehung die Hände der Bösen wüten. Gott überließ den Händen der Henker die Glieder seines Zeugen. Doch der Seele gab er als unbezwingliche Feste die Burg des Glaubens und wachte über sie mit dem unbesiegbaren Schutz seiner Obhut.^pLiebe Brüder, darum genügt es uns nicht, diesen Kämpfer im Kriegsdienst des Himmels bloß zu bewundern, wir müssen ihn auch nachahmen. Schon jetzt soll sich der Geist erheben und zum Siegespreis der himmlischen Herrlichkeit aufschauen. Wenn das Herz in der Betrachtung fest darauf gerichtet ist, wird es uns nicht kümmern, ob die Welt schmeichlerisch zustimmt oder mit Feindschaft droht und schreckt, was sie sicher tun wird.^p„Reinigen wir uns also“ nach dem Gebet des heiligen Paulus „von aller Unreinheit des Leibes und des Geistes“ (2 Kor 7,1), damit wir einst in den Tempel der Seligkeil eintreten dürfen, auf den wir jetzt unsern Geist richten.^pWer sich im Zelt Christi, in der Kirche, Gott zum Opfer darbringen will, der muss nach dem Reinigungsbad im heiligen Quell auch die Gewänder der Tugenden anziehen, wie in der Heiligen Schrift steht: „Deine Priester sollen sich bekleiden mit Gerechtigkeit“ (Ps 132,9). Wer durch die Taufe in Christus als neuer Mensch wiedergeboren wird, soll sich nicht wieder mit dem Kennzeichen seiner Sterblichkeit bekleiden. Er soll den alten Menschen ablegen, den neuen anziehen (vgl. Eph 4,22.24) und um ein reines Leben bemüht sein. So feiern wir in der rechten Weise Ostern, gereinigt vom Schmutz der alten Sünde und leuchtend im Glanz des neuen Lebens. So ahmen wir in Wahrheit das Leben der seligen Märtyrer nach.",
          "patr_resp1": "Er stritt bis zum Tod für das Gesetz seines Gottes und fürchtete sich nicht vor den Worten der Gottlosen,",
          "patr_resp2": "denn er war auf einen festen Felsen gegründet.",
          "patr_resp3": "Er hat das Leben der Welt geringgeachtet und ist zum Reich des Himmels gelangt.",
          "oration": "Starker Gott, am Gedenktag des heiligen Georg preisen wir deine Macht. Auf seine Fürsprache hin stehe uns in jeder Not bei. Hilf uns, deinem Sohn im Leiden nachzufolgen und in der Kraft des Kreuzes das Böse zu besiegen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Georg",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Starker Gott, am Gedenktag des heiligen Georg preisen wir deine Macht. Auf seine Fürsprache hin stehe uns in jeder Not bei. Hilf uns, deinem Sohn im Leiden nachzufolgen und in der Kraft des Kreuzes das Böse zu besiegen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Georg",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Starker Gott, am Gedenktag des heiligen Georg preisen wir deine Macht. Auf seine Fürsprache hin stehe uns in jeder Not bei. Hilf uns, deinem Sohn im Leiden nachzufolgen und in der Kraft des Kreuzes das Böse zu besiegen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "24": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Benedikt XIV. († 1753)",
          "patr_werk": "Aus einer Lobrede auf den heiligen Fidelis",
          "patr_text": "^hDer Sieg der die Welt besiegt hat, ist unser Glaube^pDer heilige Fidelis wandte seine Liebe allen Menschen zu, die in Not und Unglück waren. Zahlreiche Arme unterstützte er durch die Almosen, die er überall für sie sammelte. Witwen und Waisen half er in ihrer Verlassenheit, indem er ihnen den Beistand der Mächtigen und der Fürsten vermittelte. Den Gefangenen kam er mit geistlichem und leiblichem Trost zu Hilfe. Die Kranken besuchte er, verschaffte ihnen Linderung, versöhnte sie mit Gott und rüstete sie aus für den letzten Kampf.^pZu keiner anderen Zeit hat er reichere Verdienste geerntet wie damals, als ein österreichisches Heer in Graubünden Stützpunkte besetzt hielt und, von einer Epidemie fast aufgerieben, von Entkräftung und Tod elend verzehrt wurde. Zugleich mit dieser Liebestätigkeit machte er auch durch Eifer in der Verteidigung des katholischen Glaubens seinen Namen, Fidelis, das heißt der Glaubenstreue, wahr. Unverdrossen predigte er den Glauben, und wenige Tage, bevor er ihn mit seinem Blut bezeugte, hinterließ er in seiner letzten Ansprache diese Worte gleichsam als Testament: „Katholischer Glaube, wie unerschütterlich und fest bist du, wie tiefverwurzelt, auf einen festen Felsen gebaut (Mt 7,25)! Himmel und Erde vergehen, du aber kannst niemals vergehen. Die ganze Welt hat dir von Anfang an widersprochen, aber du warst mächtiger und hast über alle triumphiert. ,Der Sieg, der die Welt besiegt hat, ist unser Glaube‘ (1 Joh 5,4) Er hat die mächtigen Könige der Herrschaft Christi unterworfen, er hat die Völker für den Gehorsam gegen Christus gewonnen.^pWas gab den Aposteln und Märtyrern die Kraft, harte Kämpfe und bittere Strafen auf sich zu nehmen, wenn nicht der Glaube, besonders der an die Auferstehung? Was bewog die Einsiedler, die Freuden geringzuschätzen, Ehren zu verachten, Reichtum mit Füßen zu treten und in der Einöde ein eheloses Leben zu führen, wenn nicht der lebendige Glaube?^pWas veranlasst heutzutage wahre Christen, auf Bequemlichkeiten zu verzichten, Annehmlichkeiten aufzugeben, Hartes auf sich zu nehmen und Mühen zu ertragen?^pDer lebendige Glaube, ‚der in der Liebe wirksam ist‘ (Gal 5,6), gibt die Kraft, „die Güter der Gegenwart aufzugeben in der Hoffnung auf die Güter der Zukunft und die gegenwärtigen gegen die künftigen einzutauschen.“",
          "patr_resp1": "Ich habe den guten Kampf gekämpft, den Lauf vollendet;",
          "patr_resp2": "jetzt liegt für mich der Kranz der Gerechtigkeit bereit.",
          "patr_resp3": "Ich sehe alles als Verlust an, um Christus zu erkennen und die Gemeinschaft mit seinem Leiden. Sein Tod soll mich prägen.",
          "oration": "Treuer Gott, aus Liebe zu dir hat der heilige Fidelis für den Glauben sein Leben hingegeben. Im Vertrauen auf seine Fürsprache bitten wir dich: Gib, dass auch wir in der Liebe fest verwurzelt und auf sie gegründet seien, damit wir ohne Menschenfurcht für die Wahrheit einstehen und die Kraft der Auferstehung deines Sohnes erfahren, unseres Herrn Jesus Christus, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Treuer Gott, aus Liebe zu dir hat der heilige Fidelis für den Glauben sein Leben hingegeben. Im Vertrauen auf seine Fürsprache bitten wir dich: Gib, dass auch wir in der Liebe fest verwurzelt und auf sie gegründet seien, damit wir ohne Menschenfurcht für die Wahrheit einstehen und die Kraft der Auferstehung deines Sohnes erfahren, unseres Herrn Jesus Christus, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Treuer Gott, aus Liebe zu dir hat der heilige Fidelis für den Glauben sein Leben hingegeben. Im Vertrauen auf seine Fürsprache bitten wir dich: Gib, dass auch wir in der Liebe fest verwurzelt und auf sie gegründet seien, damit wir ohne Menschenfurcht für die Wahrheit einstehen und die Kraft der Auferstehung deines Sohnes erfahren, unseres Herrn Jesus Christus, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      }
    },
    "27": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Petrus Kanisius († 1597)",
          "patr_werk": "Aus einem Gebet.",
          "patr_text": "^hGeborgen beim Herzen Jesu^pBevor der heilige Petrus Kanisius, nachdem er von Papst Paul III. den Segen empfangen hatte, sich auf den Weg nach Deutschland machte, dessen zweiter Apostel er genannt wird, widerfuhr ihm ein tiefes Erlebnis. Er beschreibt es folgendermaßen:^p„Ewiger Hoherpriester, in deiner unendlichen Güte hat es dir gefallen, dass ich den Erfolg und die Bestätigung dieses apostolischen Segens inständig den Aposteln empfahl, die man im Vatikan besucht und die dort ihre Wunder wirken. Dort erfuhr ich deinen Trost und die Gegenwart deiner Gnade, die mir zuteil wurde durch so hohe Fürsprecher. Auch sie gaben mir den Segen und bestätigten die Sendung nach Deutschland, und sie schienen mir wie einem Apostel Deutschlands ihr Wohlwollen zu schenken. Du weißt, Herr, wie sehr und wie tief du mir an diesem Tag Deutschland anvertraut hast, wohin ich aufbrechen und für das ich zu leben und zu sterben wünschen sollte.^pSchließlich sah ich vor mir das geöffnete Herz deines heiligen Leibes, und du botest mir an, aus ihm zu trinken. Du mein Heiland, du ludest mich ein, Wasser des Heils zu schöpfen aus deinen Quellen (vgl. Jes 12,3). Ich verspürte den großen Wunsch, dass von dort aus Fluten des Glaubens, der Hoffnung und der Liebe in mich einströmten. Ich dürstete nach Armut, Keuschheit und Gehorsam. Ich bat dich, mich zu waschen, zu kleiden und auszustatten. Als ich dann wagte, dein liebevolles Herz zu berühren, und meinen Durst aus ihm zu stillen, da versprachst du mir ein Gewand, aus drei Teilen gewebt, geeignet, die Nacktheit meiner Seele zu bedecken. Diese drei Teile des Gewandes bezogen sich ganz und gar auf meine Aufgabe: Es waren der Friede, die Liebe und die Ausdauer. Angetan mit diesem Gewand des Heils, hatte ich die Zuversicht, mir werde nichts fehlen, sondern mir werde alles gelingen zu deiner Ehre.“",
          "patr_resp1": "Jeder Schriftgelehrte, der ein Jünger des Himmelreichs geworden ist, gleicht einem Hausherrn.",
          "patr_resp2": "Aus seinem reichen Vorrat holt er Neues und Altes hervor.",
          "patr_resp3": "Im Herzen des Verständigen wohnt Weisheit, und die Unverständigen belehrt er.",
          "oration": "Herr, unser Gott, du hast den heiligen Petrus Kanisius berufen, in Wort und Schrift den katholischen Glauben kraftvoll zu verteidigen. Höre auf seine Fürsprache. Lass alle, die nach der Wahrheit suchen, dich finden und erhalte deine Gläubigen im Bekenntnis zu dir. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, du hast den heiligen Petrus Kanisius berufen, in Wort und Schrift den katholischen Glauben kraftvoll zu verteidigen. Höre auf seine Fürsprache. Lass alle, die nach der Wahrheit suchen, dich finden und erhalte deine Gläubigen im Bekenntnis zu dir. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, du hast den heiligen Petrus Kanisius berufen, in Wort und Schrift den katholischen Glauben kraftvoll zu verteidigen. Höre auf seine Fürsprache. Lass alle, die nach der Wahrheit suchen, dich finden und erhalte deine Gläubigen im Bekenntnis zu dir. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "28": {
      "n1": {
        "name": "Peter Chanel",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_werk": "Aus einer Lobrede auf den heiligen Peter Chanel",
          "patr_text": "^hDas Blut der Märtyrer ist der Same, aus dem neue Christen wachsen^pNachdem sich Peter Chanel in der Gesellschaft Mariä dem Ordensleben zugewandt hatte, wurde er sofort in die ozeanische Mission entsandt zur Insel Futuna im Pazifischen Ozean, wo der Name Christi noch nicht verkündigt worden war. Ein Laienbruder, der immer sein Assistent war, erzählt von dem Leben des Heiligen in der Mission:^pBei der Tätigkeit brannte ihn die Sonnenhitze. Oft wurde er von Hunger gequält, und wenn er nach Hause kam, war er in Schweiß gebadet und von Ermüdung erschöpft. Doch immer war er starkmütig, lebensvoll und froh, als komme er von einem Vergnügungsplatz. So war es nicht nur einmal, sondern fast jeden Tag.^pEr pflegte den Leuten von Futuna nichts abzuschlagen, nicht einmal denen, die ihn verfolgten. Er hatte stets eine Entschuldigung für sie und wies sie nie ab, auch wenn sie noch so lästig wurden. Er besaß eine beispiellose Freundlichkeit gegen alle, ganz ohne Ausnahme.“^pKein Wunder, dass Peter Chanel von den Insulanern ‚der Mann mit dem guten Herzen’ genannt wurde. Er sagte einmal einem Mitbruder „In einer so schwierigen Mission müssen wir Heilige sein.“ Nach und nach begann er Christus und das Evangelium zu verkündigen, hatte aber nur wenig Erfolg. Dennoch setzte er standhaft sein menschliches und religiöses Missionswerk fort. Er vertraute auf Wort und Beispiel Christi: „Einer sät, und ein anderer erntet“ (Joh 4,37), und er betete unablässig um die Hilfe der Gottesmutter, die er inständig verehrte.^pSeine Predigt des christlichen Glaubens zerstörte den Kult der bösen Geister, dem die Stammeshäupter von Futuna huldigten, um das Volk unter ihrer Herrschaft zu halten … Darum töteten sie ihn grausam in der Hoffnung, durch den Tod von Peter Chanel werde der von ihm ausgestreute Same des Christentums vernichtet werden.^pAber am Tag vor seinem Zeugentod hatte Peter Chanel gesagt: „Es macht nichts, wenn ich sterbe. Der Glaube an Christus haftet so fest am Boden dieser Insel, dass er durch meinen Tod nicht weggenommen werden kann.“ Das Blut des Märtyrers wurde zuerst für die Bewohner von Futuna fruchtbar, die nach wenigen Jahren alle den Glauben annehmen. Es nützte dann aber auch den übrigen ozeanischen Inseln, auf denen jetzt blühende christliche Kirchen bestehen, die in Peter Chanel ihren ersten Märtyrer verehren.",
          "patr_resp1": "Die Ernte ist groß, der Arbeiter sind wenige;",
          "patr_resp2": "bittet den Herrn der Ernte, dass er Arbeiter in seinen Weinberg sende.",
          "patr_resp3": "Ihr werdet die Kraft des Heiligen Geistes empfangen, der auf euch herabkommt, und ihr werdet meine Zeugen sein bis an die Grenzen der Erde.",
          "oration": "Starker Gott, du hast durch den Märtyrertod des heiligen Peter Chanel den Glauben auf den Inseln der Südsee eingepflanzt. Lass uns in diesen österlichen Tagen die Geheimnisse des Todes und der Auferstehung Christi so feiern, dass wir Zeugen des neuen Lebens sein können. Darum bitten wir durch ihn, Jesus Christus."
        },
        "Laudes": {
          "name": "Peter Chanel",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Starker Gott, du hast durch den Märtyrertod des heiligen Peter Chanel den Glauben auf den Inseln der Südsee eingepflanzt. Lass uns in diesen österlichen Tagen die Geheimnisse des Todes und der Auferstehung Christi so feiern, dass wir Zeugen des neuen Lebens sein können. Darum bitten wir durch ihn, Jesus Christus."
        },
        "Vesper": {
          "name": "Peter Chanel",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Starker Gott, du hast durch den Märtyrertod des heiligen Peter Chanel den Glauben auf den Inseln der Südsee eingepflanzt. Lass uns in diesen österlichen Tagen die Geheimnisse des Todes und der Auferstehung Christi so feiern, dass wir Zeugen des neuen Lebens sein können. Darum bitten wir durch ihn, Jesus Christus."
        }
      },
      "n2": {
        "name": "Ludwig Maria Grignion de Montfort",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Laudes": {
          "name": "Ludwig Maria Grignion de Montfort",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Vesper": {
          "name": "Ludwig Maria Grignion de Montfort",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        }
      }
    },
    "30": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Augustinus († 430)",
          "patr_werk": "Zum Johannesevangelium.",
          "patr_text": "^hDie Kirche ist auf den Felsen gegründet, den Petrus bekannt hat^pÜber die Tröstungen hinaus, die Gott nicht aufhört den Menschen in ihrem Unglück zu schenken, sandte er in der Fülle der Zeit – er wusste, wann es zu geschehen hatte – seinen eingeborenen Sohn, „durch den er auch die Welt erschaffen hat“ (Hebr 1,2) – er blieb Gott und wurde Mensch – „Mittler zwischen Gott und den Menschen: der Mensch Christus Jesus“ (1 Tim 2,5).^pAlle, die an ihn glaubten, sollten durch das Bad der Wiedergeburt von aller Schuld der Sünde erlöst und von der ewigen Verwerfung befreit werden. Sie sollten im Glauben, in der Hoffnung und der Liebe leben, Wanderer sein in dieser Welt, in Versuchungen und Gefahren, sie sollten aber auch unter den leiblichen und geistlichen Tröstungen Gottes hinpilgern zu seiner Anschauung, auf dem Weg, der Christus für sie geworden ist.^pWeil sie auch beim Wandern auf diesem Weg nicht ohne Sünden sind, die sich aus menschlicher Schwachheit einschleichen, gab er ihnen die Vergebung als Gesundheit bringende Arznei, durch die ihr Gebet gestärkt werden sollte. Er hat sie nämlich zu beten gelehrt: Vergib uns unsere Schuld, wie auch wir vergeben unsern Schuldigern (Mt 6,12).^pDas ist die Kirche, voll seliger Hoffnung in diesem leidvollen Leben, sie, deren Ganzheit der Apostel Petrus in seiner Person wegen seines Vorrangs unter den Aposteln im Bild darstellte. Was ihn persönlich anlangt, so war er von Natur aus ein einzelner Mensch, durch die Gnade ein einzelner Christ, durch noch reichere Gnade als ein und derselbe der erste Apostel.^pDoch es wurde ihm gesagt: „Ich werde dir die Schlüssel des Himmelreichs geben; was du auf Erden binden wirst, das wird auch im Himmel gebunden sein, und was du auf Erden lösen wirst, das wird auch im Himmel gelöst sein“ (Mt 16,19). Damit aber stellte Petrus die gesamte Kirche dar, die in dieser Welt von den verschiedenen Versuchungen wie von Regengüssen, Fluten und Stürmen durchschüttelt wird und doch nicht einstürzt, weil sie auf den Felsen gegründet ist (Mt 7,25.27), von dem Petrus den Namen hat.^pWeil Petrus bekannt hatte: „Du bist der Messias, der Sohn des lebendigen Gottes“ (Mt 16,16), darum sagte der Herr: „Auf diesen Felsen werde ich meine Kirche bauen“ (Mt 16,18). Auf diesen Felsen also, so sagt er, zu dem du dich bekannt hast, will ich meine Kirche bauen. „Dieser Fels war Christus“ (1 Kor 10,4); auf dieses Fundament wurde Petrus selbst aufgebaut. „Einen anderen Grund kann niemand legen als den, der gelegt ist: Jesus Christus.“ (1 Kor 3,11)^pDie Kirche ist also auf Christus gegründet und hat von ihm in der Person des Petrus die Schlüssel des Himmelreichs erhalten, das heißt die Macht, Sünden zu binden oder zu lösen. Diese Kirche wird durch die Liebe und Nachfolge Christi vom Bösen befreit. Am stärksten ist aber die Nachfolge in denen, die für die Wahrheit bis zum Tod kämpfen.",
          "patr_resp1": "Wenn du dem Gerechten verkündest, dass er nicht sündigen darf, und er sündigt nicht, so wird er leben;",
          "patr_resp2": "und du befreist deine Seele.",
          "patr_resp3": "Du rettest. dich und alle, die auf dich hören.",
          "oration": "Herr, unser Gott, du hast den heiligen Papst Pius berufen, in deiner Kirche den Glauben zu schützen und die Liturgie zu erneuern. Auf seine Fürsprache gewähre uns, dass wir die Mysterien des Heiles in lebendigem Glauben feiern und Frucht bringen in Werken der Liebe. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, du hast den heiligen Papst Pius berufen, in deiner Kirche den Glauben zu schützen und die Liturgie zu erneuern. Auf seine Fürsprache gewähre uns, dass wir die Mysterien des Heiles in lebendigem Glauben feiern und Frucht bringen in Werken der Liebe. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, du hast den heiligen Papst Pius berufen, in deiner Kirche den Glauben zu schützen und die Liturgie zu erneuern. Auf seine Fürsprache gewähre uns, dass wir die Mysterien des Heiles in lebendigem Glauben feiern und Frucht bringen in Werken der Liebe. Darum bitten wir durch Jesus Christus."
        }
      }
    }
  },
  "5": {
    "1": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "II. Vatikanisches Konzil (1962–1965)",
          "patr_werk": "Aus der Pastoralkonstitution über die Kirche in der Welt von heute.",
          "patr_text": "^hDie Regsamkeit des Menschen in der ganzen Welt^pDurch Arbeit und Geisteskraft hat der Mensch immer versucht, sein Leben reicher zu entfalten. Heute jedoch hat er, vor allem mit den Mitteln der Wissenschaft und der Technik, seine Herrschaft über beinahe die gesamte Natur ausgebreitet und breitet sie ständig weiter aus. Vor allem dank den zwischen den Völkern zunehmenden Beziehungen der mannigfaltigsten Art erfährt und gestaltet sich die Menschheitsfamilie allmählich als eine die ganze Welt umfassende Gemeinschaft. Die Folge von alldem ist, dass sich der Mensch heute viele Güter, die er einst vor allem von höheren Mächten erwartete, durch seine eigene Tat beschafft.^pAngesichts dieses unermesslichen Unternehmens, das schon die ganze Menschheit erfasst, stellen sich den Menschen viele Fragen: Was ist der Sinn und der Wert dieser angestrengten Tätigkeit? Wie sind all diese Güter zu nutzen? Was ist das Ziel dieses individuellen und kollektiven Bemühens? Die Kirche hütet das bei ihr hinterlegte Wort Gottes, aus dem die Grundsätze der religiösen und sittlichen Ordnung gewonnen werden, wenn sie auch nicht immer zu allen einzelnen Fragen eine fertige Antwort bereit hat; und so ist es ihr Wunsch, das Licht der Offenbarung mit der Sachkenntnis aller Menschen in Verbindung zu bringen, damit der Weg, den die Menschheit neuerdings nimmt, erhellt werde.^pEines steht für die Glaubenden fest: das persönliche und gemeinsame menschliche Schaffen, dieses gewaltige Bemühen der Menschen im Lauf der Jahrhunderte, ihre Lebensbedingungen stets zu verbessern, entspricht als solches der Absicht Gottes. Der nach Gottes Bild geschaffene Mensch hat ja den Auftrag erhalten, sich die Erde mit allem, was zu ihr gehört, zu unterwerfen, die Welt in Gerechtigkeit und Heiligkeit zu regieren (vgl. Gen 1,26–27) und durch die Anerkennung Gottes als des Schöpfers aller Dinge sich selbst und die Gesamtheit der Wirklichkeit auf Gott hinzuordnen, so dass alles dem Menschen unterworfen und Gottes Name wunderbar sei auf der ganzen Erde (vgl. Ps 8,7–10).^pDas gilt auch für das gewöhnliche alltägliche Tun; denn Männer und Frauen, die, etwa beim Erwerb des Lebensunterhalts für sich und ihre Familie, ihre Tätigkeit so ausüben, dass sie ein entsprechender Dienst für die Gemeinschaft ist, dürfen überzeugt sein, dass sie durch ihre Arbeit das Werk des Schöpfers weiterentwickeln, dass sie für die Wohlfahrt ihrer Brüder sorgen und durch ihre persönliche Bemühung zur geschichtlichen Erfüllung des göttlichen Plans beitragen (AAS 55 (1963) 297).^pDen Christen liegt es deshalb fern, zu glauben, dass die von des Menschen Geist und Kraft geschaffenen Werke einen Gegensatz zu Gottes Macht bilden oder dass das mit Vernunft begabte Geschöpf sozusagen als Rivale dem Schöpfer gegenübertrete. Im Gegenteil, sie sind überzeugt, dass die Siege der Menschheit ein Zeichen der Größe Gottes und die Frucht seines unergründlichen Ratschlusses sind. Je mehr aber die Macht der Menschen wächst, desto mehr weitet sich ihre Verantwortung, sowohl die der Einzelnen wie die der Gemeinschaften. Daraus wird klar, dass die christliche Botschaft die Menschen nicht vom Aufbau der Welt ablenkt noch zur Vernachlässigung des Wohls ihrer Mitmenschen hintreibt, sondern sie vielmehr strenger zur Bewältigung dieser Aufgaben verpflichtet (AAS 54 (1962) 822f.).",
          "patr_resp1": "Gott, der Herr. nahm den Menschen und setzte ihn in den Garten Eden;",
          "patr_resp2": "er sollte den Garten bebauen und hüten.",
          "patr_resp3": "Das war die Bestimmung des Menschen von Anbeginn.",
          "oration": "Gott, du Schöpfer der Welt, du hast den Menschen zum Schaffen und Wirken bestimmt. Auf die Fürsprache unseres Schutzpatrons, des heiligen Josef, der mit seiner Hände Arbeit die Heilige Familie ernährte, gib uns Kraft und Ausdauer, damit wir deinen Auftrag auf Erden erfüllen und so den verheißenen Lohn empfangen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Schöpfer der Welt, du hast den Menschen zum Schaffen und Wirken bestimmt. Auf die Fürsprache unseres Schutzpatrons, des heiligen Josef, der mit seiner Hände Arbeit die Heilige Familie ernährte, gib uns Kraft und Ausdauer, damit wir deinen Auftrag auf Erden erfüllen und so den verheißenen Lohn empfangen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Schöpfer der Welt, du hast den Menschen zum Schaffen und Wirken bestimmt. Auf die Fürsprache unseres Schutzpatrons, des heiligen Josef, der mit seiner Hände Arbeit die Heilige Familie ernährte, gib uns Kraft und Ausdauer, damit wir deinen Auftrag auf Erden erfüllen und so den verheißenen Lohn empfangen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "4": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_werk": "Aus einem Bericht über das Martyrium des heiligen Florian.",
          "patr_text": "^hDies sind die Väter unseres Glaubens^pAls in den Tagen der Kaiser Diokletian und Maximian die Christenverfolgung Wülﬂíß und dieser Befehl der gottlosen Kaiser auch nach Ufer-Noricum (südliches Donauufer, im heutigen Österreich) gelangte. kam Aguilmllä, Öfff damals das Amt des Statthalters bekleidete, in die Lagerfestung Lauriacum (Lorch an der unteren Ennsmündung) und ging daran, die Christen aufzuspüren. Es wurden vierzig Gläubige verhaftet, die trotz vieler qualvoller Martern sich standhaft zu ihrem Glauben bekannten und schließlich in den Kerker geworfen wurden. Florian, der ehemalige Kanzleivorstand des Statthalters, schloss sich freudig ihrem Bekenntnis an. Er wohnte damals in Cetium (bei Tulln an der Donau) und machte sich sofort auf den Weg, als er von den Vorgängen in Lauriacum hörte. Der Statthalter Aquilinus aber erfuhr von seiner Anwesenheit, ließ ihn zu sich rufen und befahl ihm, den Göttern zu opfern. Als er ihn dazu jedoch nicht überreden konnte, ordnete er an, ihn mit Stöcken zu schlagen. Florian aber erhob seine Stimme zum Herrn und betete: „Herr, mein Gott, auf dich hoffe ich, dich kann ich nicht verleugnen. Für dich kämpfe ich, und dir bringe ich das Opfer des Lobes dar. Deine Rechte schütze mich, denn dein Name ist gepriesen im Himmel und auf Erden. Herr, gib mir die Kraft zum Leiden und nimm mich auf unter deine heiligen Kämpfer, die vor mir Bekenner deines Namens geworden sind. Sei mir Führer auf dem Weg der Gerechtigkeit und stärke mich mit deiner Kraft, damit ich dich preise und dir das Loblied singe. Denn du bist gepriesen in die Ewigkeiten der Ewigkeiten. Amen.“ Obwohl mehrmals geschlagen, sang er heiteren Antlitzes wie in großer Freude und Fröhlichkeit. Da befahl der Statthalter, seine Schultern mit scharfen Eisen zu zerbrechen. Der selige Florian aber pries weiterhin Gott und bekannte sich beständig als Christ. Als der Statthalter sich in allen Versuchen besiegt sah, fällte er das Urteil und befahl, Florian zum Ennsfluss zu führen und dort von der Brücke zu stürzen.^pDies geschah am 4. Mai 304. Man band ihm einen Stein um den Hals und stürzte ihn vor aller Augen kopfüber von der Brücke in den Fluss.^pJene vierzig Bekenner aber, die wir oben erwähnten, starben während dieser Ereignisse im Kerker. Ihre heiligen Reliquien – im Jahre 1900 im Hochaltar der Basilika zu Lorch aufgefunden – wurden 1963 im neuen Hochaltar beigesetzt.",
          "patr_resp1": "Ihr werdet um meinetwillen vor Statthalter und Könige geführt, damit ihr vor ihnen und den Heiden Zeugnis ablegt.",
          "patr_resp2": "Jedem, der siegt, werde ich gewähren, mit mir auf meinem Thron zu sitzen.",
          "patr_resp3": "Ich sah unter dem Altar die Seelen aller, die hingeschlachtet waren wegen des Wortes Gottes und wegen des Zeugnisses, das sie abgelegt hatten.",
          "oration": "Großer und starker Gott, du hast dem heiligen Florian und seinen Gefährten die Gnade geschenkt, den Glauben an Christus durch ihr Sterben zu bezeugen. Gewähre uns auf ihre Fürsprache Schutz und Hilfe und gib auch uns den Mut, den Glauben unerschrocken zu bekennen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Großer und starker Gott, du hast dem heiligen Florian und seinen Gefährten die Gnade geschenkt, den Glauben an Christus durch ihr Sterben zu bezeugen. Gewähre uns auf ihre Fürsprache Schutz und Hilfe und gib auch uns den Mut, den Glauben unerschrocken zu bekennen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Großer und starker Gott, du hast dem heiligen Florian und seinen Gefährten die Gnade geschenkt, den Glauben an Christus durch ihr Sterben zu bezeugen. Gewähre uns auf ihre Fürsprache Schutz und Hilfe und gib auch uns den Mut, den Glauben unerschrocken zu bekennen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "5": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Augustinus († 430)",
          "patr_werk": "Zu Psalm 127 (126),2–3.",
          "patr_text": "^hWenn nicht der Herr das Haus baut, müht sich jeder umsonst^p‚Der Herr baut sein Haus‘: der Herr Jesus Christus baut sein Haus. Viele mühen sich bei diesem Bauen ab, aber „wenn nicht der Herr das Haus baut, müht sich jeder umsonst, der daran baut“ (Ps 127,1). Wer sind jene, die unter Mühen bauen? Es sind alle, die in der Kirche das Wort Gottes verkünden, die Diener der Geheimnisse Gottes. Wir also reden außen, er baut innen. Wir merken, wie ihr zuhört; aber was ihr denkt, weiß er allein, der eure Gedanken sieht. Er ist es, der baut, der ermahnt, der aufschreckt, der die Einsicht auftut, der euer Verständnis dem Glauben anpasst. Und doch arbeiten auch wir wie Werkleute; aber „wenn nicht der Herr das Haus baut. müht sich jeder umsonst, der daran baut“.^pWie die Kirche ihre Bauleute hat, so hat sie auch ihre Wächter. Dazu sind die Bischöfe da. Und darum ist der Platz der Bischöfe erhöht, damit sie einen Überblick haben und gleichsam über dem Volke wachen. Denn das griechische Wort ‚Episkopos‘ (Bischof) bedeutet in unserer Sprache ,Aufseher'. Und über diesen erhöhten Platz wird eine gefährliche Rechenschaft gefordert, wenn wir nicht mit solchem Herzen hier stehen, dass wir in Demut euch zu Füßen sind und für euch beten, dass er, der eure Seelen kennt, selbst die Wache übernehme. Denn wir können euch nur herein- und hinausgehen sehen, aber was ihr in eurem Herzen denkt, das Wissen wir so wenig, dass wir nicht einmal sehen, was ihr in euren Häusern tut. Wie halten wir also Wache? Wie Menschen: so gut wir es können, soweit wir es empfangen haben.^pDa wir also nur auf Menschenweise Aufsicht halten, vollkommene Wache aber nicht halten können, bleibt ihr deshalb ohne Aufsicht? Keineswegs! Denn wo ist er, von dem es heißt: „Wenn nicht der Herr das Haus baut, müht sich jeder umsonst, der daran baut“? Wir bemühen uns, Aufsicht zu halten, aber unser Bemühen ist umsonst, wenn nicht er die Aufsicht führt, der eure Gedanken sieht. Er hält Wache, wenn ihr wach seid; er hält auch Wache, wenn ihr schlaft. Wir wachen über euch als Ausspender der Geheimnisse Christi (vgl. 1 Kor 4,1; vgl. 2 Kor 5,18); aber wir möchten Mit euch zusammen behütet werden. Wir sind eure Hirten, aber unter jenem Hirten sind wir mit euch zusammen Schafe. Wir sind für euch von diesem Platz aus Lehrer, aber unter dem einen Lehrer sind wir in dieser Schule alle zusammen Mitschüler.",
          "patr_resp1": "Komm, du guter und treuer Knecht, du bist im Kleinen ein treuer Verwalter gewesen, darum will ich dir eine große Aufgabe übertragen.",
          "patr_resp2": "Komm, nimm teil an der Freude deines Herrn.",
          "patr_resp3": "Herr, fünf Talente hast du mir gegeben; siehe, ich habe noch fünf dazugewonnen.",
          "oration": "Herr und Gott, du hast den heiligen Godehard berufen, das klösterliche Leben zu erneuern und den Gläubigen seines Bistums ein weiser und gütiger Bischof zu sein. Erhalte in uns den Willen, unser Leben auf dich hin auszurichten und dem Nächsten in Liebe zu begegnen Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr und Gott, du hast den heiligen Godehard berufen, das klösterliche Leben zu erneuern und den Gläubigen seines Bistums ein weiser und gütiger Bischof zu sein. Erhalte in uns den Willen, unser Leben auf dich hin auszurichten und dem Nächsten in Liebe zu begegnen Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr und Gott, du hast den heiligen Godehard berufen, das klösterliche Leben zu erneuern und den Gläubigen seines Bistums ein weiser und gütiger Bischof zu sein. Erhalte in uns den Willen, unser Leben auf dich hin auszurichten und dem Nächsten in Liebe zu begegnen Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "10": {
      "n1": {
        "name": "Johannes von Avila",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Laudes": {
          "name": "Johannes von Avila",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Vesper": {
          "name": "Johannes von Avila",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        }
      },
      "n2": {
        "name": "Damian de Veuster",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Laudes": {
          "name": "Damian de Veuster",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Vesper": {
          "name": "Damian de Veuster",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        }
      }
    },
    "12": {
      "n1": {
        "name": "Nereus und Achilleus",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Augustinus († 430)",
          "patr_werk": "Zu Psalm 62 (61).",
          "patr_text": "^hDie Leiden erleidet nicht Christus allein^pJesus Christus ist mit seinem Haupt und seinem Leib ein einziger Mensch; denn der Erlöser des Leibes und die Glieder des Leibes sind zwei in EINEM Fleisch (vgl. Gen 2,24; vgl. Eph 5,31), mit EINER Stimme und in EINEM Leiden; und wenn das Böse vorüber ist, in EINER Ruhe. Die Leiden Christi sind also nicht in Christus allein; trotzdem sind die Leiden Christi nur in Christus.^pWenn du nämlich unter Christus das Haupt und den Leib verstehst, dann sind die Leiden Christi nur in Christus; wenn du aber unter Christus bloß das Haupt verstehst, dann sind die Leiden Christi nicht allein in Christus. Denn wenn die Leiden Christi in Christus allein, im Haupte allein, wären, wieso kann dann eines seiner Glieder, der Apostel Paulus, sagen: „Ich ergänze in meinem irdischen Leben das, was an den Leiden Christi noch fehlt“ (Kol 1,24)?^pWenn du also zu den Gliedern Christi gehörst, was für ein Mensch du auch bist, der du das hörst oder es jetzt auch nicht hörst – aber du hörst es ja, wenn du zu den Gliedern Christi gehörst –: was immer du von denen erduldest, die nicht zu den Gliedern Christi zählen, das fehlte den Leiden Christi noch.^pDeswegen wird hinzugefügt: ‚Was noch fehlt‘. Du erfüllst das Maß, du bringst es nicht zum Überlaufen. Du leidest so viel, wie von deinem Leiden in das gesamte Leiden Christi einzubringen war; er hat in unserem Haupt gelitten, und er leidet in seinen Gliedern, das heißt in uns selbst.^pWir bilden gleichsam einen gemeinsamen Staat (den mystischen Leib). Diesem Staat entrichten wir – je nach Maßgabe –, was wir ihm schulden, und bringen – je nach unseren Kräften – unsere Leiden gleichsam als Steuer ein.^pDenkt also nicht, liebe Brüder, die Gerechten, die von den Bösen Verfolgung erlitten haben, auch die, welche vor der Ankunft Christi gesandt wurden, um seine Ankunft zu Verkündigen, sie alle hätten nicht zu den Gliedern Christi gehört. Keineswegs: Wer zu dem Staat gehört, der Christus zum König hat, der gehört auch zu den Gliedern Christi.^pDieser ganze Staat ist es also, der spricht, vom Blut Abels des Gerechten bis zum Blut des Sacharja (vgl. Mt 23,35). Und dann ist es vom Blut Johannes’ des Täufers durch das Blut der Apostel, durch das Blut der Märtyrer, das Blut derer, die an Christus glauben, ein und derselbe Staat, der spricht.",
          "patr_resp1": "Gott wird jede Träne aus ihren Augen wischen, der Tod wird nicht mehr sein, nicht Trauer noch Klage, noch Mühsal;",
          "patr_resp2": "denn die alte Welt ist vergangen.",
          "patr_resp3": "Sie werden nicht mehr hungern und nicht mehr dürsten.",
          "oration": "Allmächtiger Gott, deine heiligen Märtyrer Nereus und Achilleus haben dich bis in den Tod mutig bekannt. Auf ihre Fürsprache hin stärke unseren Glauben und unsere Treue, damit auch wir ausharren bis ans Ende. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Nereus und Achilleus",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, deine heiligen Märtyrer Nereus und Achilleus haben dich bis in den Tod mutig bekannt. Auf ihre Fürsprache hin stärke unseren Glauben und unsere Treue, damit auch wir ausharren bis ans Ende. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Nereus und Achilleus",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, deine heiligen Märtyrer Nereus und Achilleus haben dich bis in den Tod mutig bekannt. Auf ihre Fürsprache hin stärke unseren Glauben und unsere Treue, damit auch wir ausharren bis ans Ende. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Pankratius",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Bernhard von Clairvaux († 1153)",
          "patr_werk": "Aus einer Predigt zu Psalm 91 (90).",
          "patr_text": "^hGott nahe zu sein ist mein Glück^p„Ich bin bei ihm in der Not“ (Ps 91,15), spricht Gott, und ich sollte etwas anderes suchen als die Not! „Gott nahe zu sein ist mein Glück“, und nicht nur das: „Ich setze auf Gott, den Herrn, mein Vertrauen“ (Ps 73,28). „Ich befreie ihn“, heißt es, „und bringe ihn zu Ehren“ (Ps 91,15). „Ich bin bei ihm in der Not.“ (ebd.)^pEs heißt weiter: „Ich spielte auf seinem Erdenrund, und meine Freude war es, bei den Menschen zu sein“ (Spr 8,31): Immanuel, „Gott ist mit uns“ (Mt 1,23). Er ist herabgekommen, um nahe bei denen zu sein, die im Herzen betrübt sind, um nahe bei uns zu sein in der Not. Der Tag aber wird kommen, an dem wir „auf den Wolken in die Luft entrückt (werden), dem Herrn entgegen. Dann werden wir immer beim Herrn sein“ (1 Thess 4,17). Voraussetzung ist, dass wir uns in der Zwischenzeit bemühen, ihn immer bei uns zu haben, ihn, der uns die Heimat zurückgeben wird; besser: ihn, der unsere Heimat sein wird, vorausgesetzt, dass er jetzt unser Weg ist.^pHerr, es ist gut für mich zu leiden, wenn du nur bei mir bist; besser, als zu herrschen ohne dich, Mahl zu halten ohne dich, geehrt zu werden ohne dich. Herr, es ist besser, dich in der Not zu empfangen. dich im Schmelzofen bei mir zu haben, als ohne dich sogar im Himmel zu sein. „Was habe ich im Himmel außer dir? Neben dir erfreut mich nichts auf der Erde“ (Ps 73,25) Der Schmelzofen prüft das Gold, Versuchung und Not den Gerechten (vgl. Spr 17,3; 1 Petr 1,7). Dort, ja dort wirst du bei ihnen sein, Herr; dort bist du mitten unter denen, die in deinem Namen versammelt sind, wie einst bei den drei jungen Männern (vgl. Dan 3,49).^pWarum zittern und zögern wir, warum fliehen wir diesen Ofen? Das Feuer wütet, aber der Herr ist bei uns in der Not. „Ist Gott für uns, wer ist dann gegen uns?“ (Röm 8,31) Wenn er herausreißt, wer wird ihm den Raub abnehmen? Wer könnte seiner Hand etwas entreißen? Schließlich: Wenn er Ehre verleiht, welcher andere kann dann entehren? Wenn er verherrlicht, wer kann dann erniedrigen?^p„Ich sättige ihn mit langem Leben“ (Ps 91,16). Es ist, als wollte er geradezu sagen: Ich weiß, wonach er verlangt, wonach er dürstet, was ihm schmeckt. Er hat keinen Geschmack an Gold und Silber, an Vergnügen, Neugierde oder an irgendeiner weltlichen Würde. Alles gilt ihm als Verlust, schätzt er gering, hält er für Unrat (vgl. Phil 3,8). Er hat sich selbst entäußert und lässt nicht zu, dass ihn irgend etwas ganz für sich beansprucht (vgl. Phil 2,6–7) was ihn nach seiner Überzeugung nicht ausfüllen kann. Er weiß gut, nach wessen Bild er geschaffen ist, welcher Größe er fähig ist, und gibt nicht zu, dass er im Kleinen wächst, aber im Größeren abnimmt.^pDaher also: „Ich sättige ihn mit langem Leben“ (Ps 91,16). Nur das wahre Licht kann ihn erquicken, nur das Ewige ihn ausfüllen. Denn jenes lange Leben kennt kein Ende, jener Glanz keinen Untergang, jene Sättigung keinen Überdruss.",
          "patr_resp1": "Er stritt bis zum Tod für das Gesetz seines Gottes und fürchtete sich nicht vor den Worten der Gottlosen,",
          "patr_resp2": "denn er war auf einen festen Felsen gegründet.",
          "patr_resp3": "Er hat das Leben der Welt geringgeachtet und ist zum Reich des Himmels gelangt.",
          "oration": "Gott, höre auf die Fürsprache des heiligen Märtyrers Pankratius, dessen Gedenktag wir in Freude feiern. Schenke deiner Kirche Zuversicht und Gelassenheit, damit sie sich in der Bedrängnis nicht fürchte, sondern ausharre im Vertrauen auf Christus Jesus, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Laudes": {
          "name": "Pankratius",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, höre auf die Fürsprache des heiligen Märtyrers Pankratius, dessen Gedenktag wir in Freude feiern. Schenke deiner Kirche Zuversicht und Gelassenheit, damit sie sich in der Bedrängnis nicht fürchte, sondern ausharre im Vertrauen auf Christus Jesus, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Vesper": {
          "name": "Pankratius",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, höre auf die Fürsprache des heiligen Märtyrers Pankratius, dessen Gedenktag wir in Freude feiern. Schenke deiner Kirche Zuversicht und Gelassenheit, damit sie sich in der Bedrängnis nicht fürchte, sondern ausharre im Vertrauen auf Christus Jesus, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      }
    },
    "13": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        }
      }
    },
    "16": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Gregor der Große († 604)",
          "patr_werk": "Aus einer Homilie.",
          "patr_text": "^hLob der Standhaftigkeit^pLasst uns hören, was Jesus zur Menschenmenge über Johannes den Täufer sagte, nachdem dessen Jünger gegangen waren: „Was habt ihr denn sehen wollen, als ihr in die Wüste hinausgegangen seid? Ein Schilfrohr, das im Wind schwankt?“ (Mt 11,7) Dies sagte der Herr nicht in positivem, sondern in negativem Sinn. Denn sobald der Wind ein Schilfrohr streift, neigt es sich nach der anderen Seite. Was sonst wird mit dem Schilfrohr bezeichnet, als ein irdisch gesinnter Geist! Sobald dieser von Gunst oder Schmähung berührt wird, neigt er sich sofort auf jedwede Seite. Wenn nämlich von einem menschlichen Mund der Windhauch der Gunst weht, freut und überhebt er sich; bricht aber von dort, woher das Lob kam, der Sturm der Schmähung los, beugt sich jener Geist gleichsam auf die andere Seite, zu gewaltiger Wut. Johannes aber war kein Schilfrohr, das im Wind schwankt. Ihn machte weder Gunst zum Schmeichler noch die Schmähung irgendeines Menschen hart vor Zorn. Glück vermochte ihn nicht aufzurichten, Unglück ihn nicht zu beugen. Johannes war also kein Schilfrohr, das im Wind. schwankt, er, dessen Standfestigkeit kein Wechsel der Verhältnisse beugte. Lernen wir daher, liebe Brüder. kein im Wind schwankendes Schilfrohr zu sein! Festigen wir den Geist, der den Winden der Zunge ausgesetzt ist! Unbeugsam fest sei der Standpunkt unseres Geistes! Keine Schmähung soll uns zum Zorn reizen, keine Gunst uns zu schlaffer, nutzloser Gefälligkeit beugen. Wohlergehen soll uns nicht eitel machen, Unglück uns nicht verwirren. Wir, die wir feststehen auf dem Fundament des Glaubens, wollen uns durch die Beweglichkeit vergänglicher Dinge nicht beeinflussen lassen.",
          "patr_resp1": "Ich habe den guten Kampf gekämpft, den Lauf vollendet, die Treue gehalten.",
          "patr_resp2": "Schon jetzt liegt für mich der Kranz der Gerechtigkeit bereit.",
          "patr_resp3": "Ich sehe alles als Verlust an, weil die Erkenntnis Christi Jesu, meines Herrn, alles übertrifft. Christus will ich erkennen und die Gemeinschaft mit seinen Leiden; sein Tod soll mich prägen.",
          "oration": "Allmächtiger, ewiger Gott, du hast dem heiligen Johannes Nepomuk geholfen, bis zur Hingabe seines Lebens die Rechte der Kirche zu verteidigen. Auf seine Fürbitte hin gib uns den Mut, für Gerechtigkeit und Wahrheit einzutreten. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger, ewiger Gott, du hast dem heiligen Johannes Nepomuk geholfen, bis zur Hingabe seines Lebens die Rechte der Kirche zu verteidigen. Auf seine Fürbitte hin gib uns den Mut, für Gerechtigkeit und Wahrheit einzutreten. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger, ewiger Gott, du hast dem heiligen Johannes Nepomuk geholfen, bis zur Hingabe seines Lebens die Rechte der Kirche zu verteidigen. Auf seine Fürbitte hin gib uns den Mut, für Gerechtigkeit und Wahrheit einzutreten. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "18": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Johannes von Ávila († 1569)",
          "patr_werk": "Aus einem Brief an seine Freunde.",
          "patr_text": "^hDamit das Leben Jesu sichtbar wird^p„Gepriesen sei der Gott und Vater Jesu Christi unseres Herrn, der Vater des Erbarmens und der Gott allen Trostes. Er tröstet uns in all unserer Not, damit auch wir die Kraft haben, alle zu trösten, die in Not sind, durch den Trost, mit dem wir von Gott getröstet werden. Wie uns nämlich die Leiden Christi überreich zuteil geworden sind, so wird uns durch Christus auch überreicher Trost zuteil“ (2 Kor 1,3–5).^pDas sind Worte des heiligen Paulus. Dreimal wurde er ausgepeitscht, einmal gesteinigt und liegen gelassen, als wäre er tot (vgl. 2 Kor 11). Von allen möglichen Leuten wurde er verfolgt, mit allen Martern und Mühsalen gepeinigt, nicht ein oder zweimal, sondern, wie er anderswo sagt: „Immer werden wir, obgleich wir leben, um Jesu willen dem Tod ausgeliefert, damit auch das Leben Jesu an unserem sterblichen Fleisch offenbar wird“ (2 Kor 4,11).^pIn all diesen Nöten murrte er nicht und beklagte sich nicht über Gott, wie es die Schwachen zu tun pflegen. Er ließ sich auch nicht betrüben wie die Menschen, die ihre eigene Ehre und Lust lieben. Er flehte nicht zu Gott, von der Not befreit zu werden, wie jene, welche die Not nicht kennen und darum nichts mit ihr zu tun haben wollen. Er verharmlost sie auch nicht, wie es die tun, die sie geringschätzen. Er weist alles Scheinwissen und alle Schwäche von sich. Er preist Gott in der Not und dankt ihm, der sie schickt, dafür, wie für einen großen Lohn. Er schätzt sich glücklich, wenn er etwas für die Ehre Christi leiden darf, der so viel Schmach erduldet hat, um uns von der Schande zu befreien, der wir durch unsere Sünde verhaftet waren, der uns verherrlicht und ausgezeichnet hat durch seinen Geist und die Annahme an Kindes Statt. In ihm und durch ihn gab er uns Angeld und Siegel des himmlischen Glückes.^pWenn ihr also an jenen Festen Freude habt, wenn ihr sie sehen und genießen wollt, dann sollt ihr wissen, dass es keinen besseren Weg gibt als den des Leidens. Das ist der Weg, den Christus und all die Seinen gegangen sind. Er nennt ihn schmal, aber dieser Weg führt gerade zum Leben. Und so lehrte er: Wenn wir zu ihm gelangen wollen, dann müssen wir denselben Weg gehen wie er. Wenn der Sohn Gottes den Weg der Schmach geht, dann ist es nicht recht, wenn Menschen den Weg der Ehre suchen. „Ein Jünger steht nicht über seinem Meister und ein Sklave nicht über seinem Herrn“ (Mt 10,24).^pGebe Gott, dass unser Geist nirgends Ruhe finde und keine andere Speise in dieser Welt suche als in der Mühsal, die zum Kreuz Christi hinführt.",
          "patr_resp1": "Immer sind wir dem Tod ausgeliefert, obgleich wir leben,",
          "patr_resp2": "damit das Leben Jesu Christi an uns offenbar wird.",
          "patr_resp3": "Wenn auch unser äußerer Mensch vernichtet wird, der innere wird Tag für Tag erneuert.",
          "oration": "Gott, du selbst bist der Lohn deiner getreuen Knechte; wir ehren die Verdienste des Bekennerpapstes Johannes, den du am heutigen Tag zu dir heimgerufen hast. Auf seine Fürsprache gib auch uns einen festen Glauben und Geduld in aller Bedrängnis. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du selbst bist der Lohn deiner getreuen Knechte; wir ehren die Verdienste des Bekennerpapstes Johannes, den du am heutigen Tag zu dir heimgerufen hast. Auf seine Fürsprache gib auch uns einen festen Glauben und Geduld in aller Bedrängnis. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du selbst bist der Lohn deiner getreuen Knechte; wir ehren die Verdienste des Bekennerpapstes Johannes, den du am heutigen Tag zu dir heimgerufen hast. Auf seine Fürsprache gib auch uns einen festen Glauben und Geduld in aller Bedrängnis. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "20": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Bernhardin von Siena († 1444)",
          "patr_werk": "Aus einer Predigt über den Namen Jesus",
          "patr_text": "^hDer Name Jesus ist der Glanz der Prediger^pDer Name Jesus ist der Glanz der Prediger, weil er das Verkündigen und das Hören des Gotteswortes zum hellen Leuchten bringt. Woher, meinst du, kommt auf dem ganzen Erdkreis so schnell und glühend das Licht des Glaubens, wenn nicht dadurch, dass Jesus verkündigt wird (vgl. 1 Kor 2,2)? Hat Gott uns nicht durch das Licht und die Lieblichkeit dieses Namens „in sein wunderbares Licht gerufen“ (1 Petr 2,9)? Wir sind erleuchtet, wir schauen das Licht in seinem Licht (vgl. Ps 36,10). Darum sagt uns der Apostel mit Recht: „Einst wart ihr Finsternis, jetzt aber seid ihr durch den Herrn Licht geworden. Lebt als Kinder des Lichts!“ (Eph 5,8)^pDaher muss dieser Name verkündet werden, damit erleuchtet und nicht verschwiegen wird. Aber auch in der Predigt darf der Name nicht mit einem unreinen Herzen und einem befleckten Mund ausgesprochen werden. Er muss in einem erlesenen Gefäß aufbewahrt und aus ihm heraus verkündet werden.^pDarum sagt der Herr vom Apostel: Dieser Mann ist mir ein erlesenes Gefäß, damit er meinen Namen vor Völker und Könige und die Söhne Israels trägt (vgl. Apg 9,15). Ein mir erlesenes Gefäß, sagt er, in dem eine kostbare Flüssigkeit zum Kauf angeboten wird. Sie reizt zum Trinken, da sie in auserwählten Gefäßen glänzt und leuchtet: „damit es meinen Namen trägt“ (vgl. Apg 9,15), wie Gott sagt.^pWie nach dem Abernten der Acker die trockenen und nutzlosen Dornsträucher angezündet und im Feuer verbrannt werden und wie beim Aufgehen der Sonnenstrahlen die Finsternis vertrieben wird und die Diebe, die nächtlichen Streuner und Einbrecher sich verstecken, so war es, als Paulus den Völkern predigte: ein lautes Donnern, ein Blitzen, heller als Feuer, heller als die aufgehende Sonne. Der Unglaube wurde verzehrt, die Falschheit verging, die Wahrheit leuchtete auf: wie bei einer Wachskerze, die sich im Brand der Flamme verflüssigt.^pPaulus verbreitete nämlich überall den Namen Jesus in Worten und Briefen, durch seine Wunder und sein Beispiel. Er lobte den Namen Jesus beharrlich, er lobte ihn in Danksagung (vgl. Sir 51,15 Vg.).^pDiesen Namen trug der Apostel „vor Völker und Könige und die Söhne Israels“ (vgl. Apg 9,15) wie ein Licht. Er erleuchtete damit die Völker und rief überall: „Die Nacht ist vorgerückt, der Tag ist nahe. Darum lasst uns ablegen die Werke der Finsternis und anlegen die Waffen des Lichts! Lasst uns ehrenhaft leben wie am Tage, ohne maßloses Essen und Trinken, ohne Unzucht und Ausschweifung, ohne Streit und Eifersucht“ (Röm 13,12–13). Er zeigte allen die brennende und strahlende Lampe auf dem Leuchter (vgl. Mk 4,27) und verkündigte überall „Jesus Christus, und zwar als den Gekreuzigten“ (1 Kor 2,2).^pDarum jubelt die Kirche, seine Braut, immer auf sein Zeugnis gestützt, mit dem Propheten: „Gott, du hast mich gelehrt von Jugend auf, und noch heute verkünde ich dein wunderbares Walten“ (Ps 71,17). ‚Noch heute‘, das heißt: immer. Der Prophet ermuntert auch: „Singt dem Herrn und preist seinen Namen, verkündet sein Heil von Tag zu Tag“ (Ps 96,2): Jesus, unsern Erlöser!",
          "patr_resp1": "Ich will jubeln und an dir mich freuen;",
          "patr_resp2": "für dich, du Höchster, will ich singen und spielen.",
          "patr_resp3": "Ich lobe deinen Namen ohne Unterlass.",
          "oration": "Gott und Vater unseres Herrn Jesus Christus, du hast im heiligen Bernhardin von Siena der Kirche einen großen Prediger geschenkt und ihm eine besondere Liebe zum Namen Jesus gegeben. Blicke auf sein heiliges Wirken und schenke uns auf seine Fürsprache die Liebe zu diesem Namen, der über allen Namen ist. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott und Vater unseres Herrn Jesus Christus, du hast im heiligen Bernhardin von Siena der Kirche einen großen Prediger geschenkt und ihm eine besondere Liebe zum Namen Jesus gegeben. Blicke auf sein heiliges Wirken und schenke uns auf seine Fürsprache die Liebe zu diesem Namen, der über allen Namen ist. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott und Vater unseres Herrn Jesus Christus, du hast im heiligen Bernhardin von Siena der Kirche einen großen Prediger geschenkt und ihm eine besondere Liebe zum Namen Jesus gegeben. Blicke auf sein heiliges Wirken und schenke uns auf seine Fürsprache die Liebe zu diesem Namen, der über allen Namen ist. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "21": {
      "n1": {
        "name": "Hermann Josef",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Hermann Josef († 1241)",
          "patr_werk": "Aus einem Dankgebet.",
          "patr_text": "^hDank für Christi Wohltaten^pHerr Jesus Christus, wir danken dir, weil du um unseretwillen Mensch geworden bist. Schenke uns durch diese unsagbare Liebe eine wahre und vollkommene Liebe zu dir. Wie du deine Mutter in ihrem Inneren erfreut hast, so erfreue auch uns an Leib und Seele.^pHerr Jesus Christus, wir danken dir, weil ein Stern die Könige zu dir, dem König der Herrlichkeit, geführt hat. Führe du selbst uns zu dir.^pHerr Jesus Christus, wir danken dir, weil du für uns im Tempel dargestellt worden bist. Opfere du uns deinem himmlischen Vater auf.^pHerr Jesus Christus, wir danken dir, weil du dich unseretwegen taufen ließest. Wasche uns in deinem Blut rein von unseren Sünden.^pHerr Jesus Christus, wir danken dir, weil du bei der Hochzeit in Kana das Wasser in Wein verwandelt hast. Wandle unsere Trauer in Freude und führe uns zur himmlischen Hochzeit.^pHerr Jesus Christus, wir danken dir, weil du vor deinem Leiden mit deinen Jüngern das Abendmahl gehalten hast, um dich selbst ihnen zur Speise und zum Trank zu geben. Gib uns, dich so zu empfangen, dass wir mit dir ewig leben dürfen.^pHerr Jesus Christus, wir danken dir, weil du für uns verraten und gefangengenommen worden bist. Befreie uns aus der ewigen Gefangenschaft.^pHerr Jesus Christus, wir danken dir, weil du dich für uns geißeln ließest, verspottet, geschlagen, mit Dornen gekrönt, gekreuzigt, mit Galle und Essig getränkt, von fünf Wunden durchbohrt wurdest; weil du für uns gestorben, begraben und zu den Vätern hinabgestiegen bist, um die Deinigen dort zu befreien. Stehe auch uns bei in aller Not. Schütze, verteidige und bewahre uns vor allem Bösen.^pHerr Jesus Christus, wir danken dir für all dies. Verleihe uns, das Gedächtnis deines Leidens so zu feiern, dass wir mit dir ewig leben können. Herr Jesus Christus, wir danken dir, weil du siegreich von den Toten auferstanden bist und deine Mutter innigst erfreut hast. Durch ihre Verdienste lass uns mit dir auferstehen und uns ewig mit dir freuen. Amen.",
          "patr_resp1": "Dankt Gott für alles.",
          "patr_resp2": "Denn das will Gott von euch, die ihr Christus Jesus gehört. Halleluja",
          "patr_resp3": "Sagt Gott, dem Vater, jederzeit Dank für alles.",
          "oration": "Herr, unser Gott, du hast dem heiligen Hermann Josef die Gabe geschenkt, im betrachtenden Gebet deine Geheimnisse zu erfahren und durch seinen Rat viele Menschen in ihrer Not aufzurichten. Hilf uns auf seine Fürsprache, den rechten Weg zu erkennen, und führe uns zur Offenbarung deiner Herrlichkeit. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Hermann Josef",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, du hast dem heiligen Hermann Josef die Gabe geschenkt, im betrachtenden Gebet deine Geheimnisse zu erfahren und durch seinen Rat viele Menschen in ihrer Not aufzurichten. Hilf uns auf seine Fürsprache, den rechten Weg zu erkennen, und führe uns zur Offenbarung deiner Herrlichkeit. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Hermann Josef",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, du hast dem heiligen Hermann Josef die Gabe geschenkt, im betrachtenden Gebet deine Geheimnisse zu erfahren und durch seinen Rat viele Menschen in ihrer Not aufzurichten. Hilf uns auf seine Fürsprache, den rechten Weg zu erkennen, und führe uns zur Offenbarung deiner Herrlichkeit. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Christopher Magallanes und Gefährten",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Laudes": {
          "name": "Christopher Magallanes und Gefährten",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Vesper": {
          "name": "Christopher Magallanes und Gefährten",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        }
      },
      "n3": {
        "name": "Eugen von Mazenod",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Laudes": {
          "name": "Eugen von Mazenod",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Vesper": {
          "name": "Eugen von Mazenod",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        }
      }
    },
    "22": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        }
      }
    },
    "24": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        }
      }
    },
    "25": {
      "n1": {
        "name": "Beda der Ehrwürdige",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Cuthbert (8. Jh.)",
          "patr_werk": "Aus einem Brief über den Tod Bedas des Ehrwürdigen.",
          "patr_text": "^hIch sehne mich danach, Christus zu schauen^pAls der Dienstag vor Christi Himmelfahrt kam, nahm die Atemnot Bedas zu, und an seinen Füßen zeigte sich ein kleines Geschwür. Trotzdem lehrte und diktierte er den ganzen Tag heiteren Sinnes. Von Zeit zu Zeit sagte er unter anderem: Lernt schnell, ich weiß nicht, wie lange ich noch lebe und ob mein Schöpfer mich nicht in Kürze wegnimmt! Uns schien es aber, als wisse er wohl um sein Sterben Bescheid. Und so durchwachte er die ganze Nacht in Danksagung.^pAls der Morgen dämmerte, am Mittwoch also, befahl er, sorgfältig weiterzuschreiben an dem, was wir begonnen hatten; das taten wir bis zur dritten Stunde. Von der dritten Stunde an hielten wir die Prozession mit den Reliquien der Heiligen, wie es der Brauch des Tages verlangte. Einer von uns blieb bei ihm. Der sagte zu ihm: Lieber Meister, von dem Buch, das du diktiert hast, fehlt noch ein Kapitel; wäre es schwer für dich, wenn du weiter gefragt würdest? Er sagte: Es ist leicht. Nimm deine Feder, mach sie zurecht und schreibe schnell! Der tat so.^pZur neunten Stunde sagte Beda zu mir: Ich habe einige Kostbarkeiten in meinem Kästchen: Pfeffer, Mundtücher und Weihrauch. Lauf schnell und hole mir die Presbyter unseres Klosters, damit ich unter sie das bisschen verteile, das Gott mir gegeben hat! Als sie da waren, sprach er zu ihnen, mahnte einen jeden und bat ihn, Messen für ihn zu feiern und die Gebete gewissenhaft zu sprechen. Das versprachen sie ihm gern.^pAlle trauerten und weinten. Am meisten schmerzte sie sein Wort, sie würden ihn in dieser Welt nicht mehr lange von Angesicht zu Angesicht sehen (vgl. Apg 20,38). Doch freuten sie sich, als er sagte: Es ist Zeit – wenn es meinem Schöpfer so gefällt –, dass ich zu dem zurückkehre, der mich gemacht, der mich geschaffen hat, der mich aus dem Nichts formte, als ich noch nicht war. Ich habe lange gelebt, und der erbarmungsvolle Richter hat mich mein Leben lang umsorgt. „Die Zeit meines Aufbruchs ist nahe“ (2 Tim 4,6). „Ich sehne mich danach, aufzubrechen und bei Christus zu sein“ (Phil 1,23), denn meine Seele verlangt danach, Christus, meinen König, in seiner Herrlichkeit zu schauen. Vieles andere sagte er noch zu unserer Erbauung und verbrachte den ganzen Tag in Freude bis zum Abend.^pDer Knabe Wilbert sagte noch: Geliebter Meister, ein Satz ist noch nicht geschrieben. Er antwortete: Dann schreib ihn schnell! Nach einiger Zeit sagte der Knabe: Nun ist der Satz geschrieben! Er darauf: Gut, du hast die Wahrheit gesagt: Es ist vollbracht! Nimm meinen Kopf in deine Hände; denn es ist mir eine große Freude, im Anblick der heiligen Stätte zu sitzen, an der ich zu beten pflegte. So kann ich sitzend zu meinem Vater beten.^pUnd so sang er auf dem Fußboden seiner Zelle: Ehre sei dem Vater und dem Sohn und dem Heiligen Geist! Als er den Heiligen Geist genannt hatte, tat er den letzten Atemzug. Und so ist er, der sich mit ganzer Hingebung um das Lob Gottes gemüht hatte (wie man ohne Zweifel glauben kann), hinübergegangen zu den himmlischen Freuden, nach denen er sich gesehnt hat.",
          "patr_resp1": "Lange habe ich gelebt, und der Herr hat mich mein Leben lang umsorgt;",
          "patr_resp2": "die Zeit meines Aufbruchs ist gekommen.",
          "patr_resp3": "Es ist Zeit, dass ich zu dem zurückkehre, der mich geschaffen hat.",
          "oration": "Herr, unser Gott, du hast deine Kirche durch die fromme Gelehrsamkeit des heiligen Beda erleuchtet. Sein Fleiß sei uns ein Beispiel, seine Weisheit Licht, sein Leben ein steter Ansporn. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Beda der Ehrwürdige",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, du hast deine Kirche durch die fromme Gelehrsamkeit des heiligen Beda erleuchtet. Sein Fleiß sei uns ein Beispiel, seine Weisheit Licht, sein Leben ein steter Ansporn. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Beda der Ehrwürdige",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, du hast deine Kirche durch die fromme Gelehrsamkeit des heiligen Beda erleuchtet. Sein Fleiß sei uns ein Beispiel, seine Weisheit Licht, sein Leben ein steter Ansporn. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Gregor VII.",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Gregor VII. († 1085)",
          "patr_werk": "Aus einem Brief.",
          "patr_text": "^hDie Kirche ist frei, keusch und katholisch^pWir bitten und beschwören euch im Herrn Jesus, der uns durch seinen Tod erlöst hat, sorgfältig zu prüfen und zu verstehen, warum und wie wir die Trübsal und Not erleiden, die uns den Feinden der christlichen Religion zugefügt werden.^pSeitdem die Mutter Kirche mich Unwürdigen wider meinen Willen – Gott ist mein Zeuge – durch Gottes Fügung auf den apostolischen Stuhl erhoben hat, habe ich mich aufs äußerste bemüht, dass die heilige Kirche, die Braut Gottes, unsere Herrin und Mutter, zu der ihr eigenen Schönheit zurückfinde und frei, keusch und katholisch bleibe. Aber weil das dem alten Feind missfällt, hat er seine Glieder gegen uns bewaffnet, um alles ins Gegenteil zu verkehren. Darum hat er gegen uns oder vielmehr gegen den apostolischen Stuhl solche Aktivitäten unternommen, wie er es seit der Zeit Kaiser Konstantins des Großen nicht mehr fertiggebracht hat. Das ist nicht sehr verwunderlich; denn je mehr die Zeit verrückt, desto eindringlicher bemüht er sich, die christliche Religion zu vernichten.^pNun aber, meine lieben Brüder, hört sorgfältig auf das, was ich euch sage: Alle, die auf dem ganzen Erdkreis einen christlichen Namen führen und den christlichen Glauben wirklich kennen, wissen um den Glauben, dass der heilige Apostelfürst Petrus Vater aller Christen und nach Christus ihr erster Hirt ist und dass die heilige römische Kirche Mutter und Lehrerin aller Kirchen ist.^pWenn ihr also das glaubt und, ohne zu zweifeln, daran festhaltet, dann bitten und befehlen wir euch, wir, euer Bruder und unwürdiger Meister (vgl. Mt 23,8): Um des allmächtigen Gottes willen eilt den vorher Erwähnten, eurem Vater und eurer Mutter, zu Hilfe, wenn ihr danach verlangt, durch sie Vergebung aller Sünden, Segen und Gnade in diesem Leben und in der künftigen Welt zu erlangen.^pDer allmächtige Gott, von dem alles Gute kommt, erleuchte stets euren Geist und befruchte ihn mit der Liebe zu ihm und zu dem Mitmenschen, damit ihr euch euren Vater und eure Mutter durch zuverlässige Hingabe zu Schuldnern macht und ohne Beschämung zur Gemeinschaft mit ihnen gelangt. Amen.",
          "patr_resp1": "Der Herr verherrlichte ihn vor Königen und gab ihm vor allem Volk seine Befehle,",
          "patr_resp2": "er zeigte ihm sein Heil.",
          "patr_resp3": "Der Herr erwählte seinen Knecht, für Israel, sein Erbe, zu sorgen.",
          "oration": "Herr, unser Gott, du hast den heiligen Papst Gregor ausgezeichnet durch Starkmut und Eifer für die Gerechtigkeit. Gib auch heute deiner Kirche den Mut, dem Unrecht entgegenzutreten und das Rechte mit Freimut und Liebe zu tun. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Gregor VII.",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, du hast den heiligen Papst Gregor ausgezeichnet durch Starkmut und Eifer für die Gerechtigkeit. Gib auch heute deiner Kirche den Mut, dem Unrecht entgegenzutreten und das Rechte mit Freimut und Liebe zu tun. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Gregor VII.",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, du hast den heiligen Papst Gregor ausgezeichnet durch Starkmut und Eifer für die Gerechtigkeit. Gib auch heute deiner Kirche den Mut, dem Unrecht entgegenzutreten und das Rechte mit Freimut und Liebe zu tun. Darum bitten wir durch Jesus Christus."
        }
      },
      "n3": {
        "name": "Maria Magdalena von Pazzi",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_werk": "Aus den Niederschriften über die Offenbarung und Prüfung der heiligen Jungfrau Maria Magdalena von Pazzi.",
          "patr_text": "^hKomm, Heiliger Geist^pWahrheit, wunderbar bist du, o Wort Gottes, im Heiligen Geist; du bewirkst, dass er dich so tief in die Seele eindringen lässt, dass sie sich mit Gott verbindet, ihn empfängt und an nichts Geschmack findet außer an Gott.^pDer Heilige Geist kommt in die Seele, gekennzeichnet durch das Siegel, das Blut des Wortes oder des getöteten Lammes. Mehr noch, dieses Blut treibt ihn zu kommen, obwohl der Geist selbst sich bewegt und zu kommen verlangt.^pDer Geist, der sich bewegt, ist in sich das Wesen des Vaters und das Wesen des Wortes und geht hervor aus dem Wesen des Vaters und dem Wohlgefallen des Wortes. Er kommt als sprudelnder Quell in die Seele, und sie taucht in ihm unter. Es ist, wie wenn zwei Flüsse sich vereinigen, so dass der kleinere seinen eigenen Namen verliert und den des größeren annimmt; so wirkt der Heilige Geist, wenn er in die Seele kommt, um sich mit ihr zu verbinden. Die Seele ist kleiner. Darum muss sie ihren Namen verlieren und ihn dem Geist überlassen; das tut sie, wenn sie sich in den Geist verwandelt, um eins mit ihm zu werden.^pDieser Geist, der Ausspender der Schätze, die im Schoß des Vaters sind, und der Hüter der Ratschlüsse, die zwischen dem Vater und dem Sohn gefasst werden, gießt sich der Seele mit solcher Milde ein, dass er nicht wahrgenommen und nur von wenigen in seiner wahren Größe geschätzt wird. Aufgrund seines Gewichtes (seiner Liebe) wie seiner Leichtigkeit bewegt er sich an alle Orte, die geeignet und bereit sind, ihn aufzunehmen. Alle hören sein häufiges Reden wie auch sein tiefstes Schweigen; mit der Macht der Liebe durchdringt er alles, er, der Unbewegliche und der Beweglichste zugleich.^pHeiliger Geist, du stehst nicht still im unbeweglichen Vater und im Wort. Und doch bist du immer im Vater und im Wort und in dir selbst wie auch in allen seligen Geistern und Geschöpfen. Die Geschöpfe brauchen dich wegen des Blutes, das vom Einziggezeugten Wort vergossen wurde, das Blut, das sich aus großer Liebe zu seinem Geschöpf unentbehrlich gemacht hat. Du ruhst in den Geschöpfen, die bereit sind, deine Gaben in Reinheit aufzunehmen und so eine besondere Ähnlichkeit mit dir zu erlangen. Du ruhst in den Geschöpfen, die das Blut des Wortes in sich wirken lassen und sich für dich zu einer würdigen Wohnstätte machen.^pKomm, Heiliger Geist! Es komme die Vereinigung mit dem Vater und das Wohlgefallen des Wortes. Du, Geist der Wahrheit, bist der Lohn der Heiligen, die Erquickung der Seelen, das Licht in der Finsternis, der Reichtum der Armen, der Schatz der Liebenden, die Sättigung der Hungernden, der Trost der Fremden. Schließlich bist du es, in dem alle Schätze enthalten sind (vgl. Kol 2,3).^pDu kamst auf Maria herab und bewirktest, dass das Wort Fleisch annahm. Wirke in uns durch die Gnade, was du in jener durch Natur und Gnade geschaffen hast. Komm, du Nahrung aller reinen Gedanken, du Quell aller Güte, du höchste Reinheit.^pKomm und nimm alles von uns weg, was uns hindert, in dich aufgenommen zu werden.",
          "patr_resp1": "Kein Auge hat es gesehen, und kein Ohr hat es gehört, und in keines Menschen Herz ist es gedrungen,",
          "patr_resp2": "wie Großes Gott denen bereitet hat, die ihn lieben.",
          "patr_resp3": "Uns hat Gott es enthüllt durch seinen Geist.",
          "oration": "Gott, immer wieder berufst du Menschen zur ungeteilten Hingabe an dich in einem jungfräulichen Leben. Du hast die heilige Maria Magdalena von Pazzi mit deiner Liebe erfüllt, so dass sie sich als Ordensfrau in Werken der Buße und im Dienst an den Menschen verzehrte. Hilf uns, ihr Beispiel zu begreifen und die Lauterkeit ihrer Liebe nachzuahmen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Maria Magdalena von Pazzi",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, immer wieder berufst du Menschen zur ungeteilten Hingabe an dich in einem jungfräulichen Leben. Du hast die heilige Maria Magdalena von Pazzi mit deiner Liebe erfüllt, so dass sie sich als Ordensfrau in Werken der Buße und im Dienst an den Menschen verzehrte. Hilf uns, ihr Beispiel zu begreifen und die Lauterkeit ihrer Liebe nachzuahmen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Maria Magdalena von Pazzi",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, immer wieder berufst du Menschen zur ungeteilten Hingabe an dich in einem jungfräulichen Leben. Du hast die heilige Maria Magdalena von Pazzi mit deiner Liebe erfüllt, so dass sie sich als Ordensfrau in Werken der Buße und im Dienst an den Menschen verzehrte. Hilf uns, ihr Beispiel zu begreifen und die Lauterkeit ihrer Liebe nachzuahmen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "27": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Gregor der Große († 604)",
          "patr_werk": "Aus einem Brief.",
          "patr_text": "^hDas Volk der Angeln ist vom Licht des Glaubens erhellt^p„Ehre sei Gott in der Höhe und Friede auf Erden den Menschen seiner Gnade“ (Messbuch: Gloria; vgl. Lk 2,14); denn das Weizenkorn ist in die Erde gefallen und gestorben (vgl. Joh 12,24), um nicht bloß im Himmel zu herrschen. Durch seinen Tod leben wir, durch seine Sehwachheit werden wir stark, durch sein Leiden werden wir den Leiden entrissen, aus Liebe zu ihm suchten wir in England Brüder, die wir nicht kannten, durch seine Gnade fanden wir sie, die wir suchten, ohne sie zu kennen.^pWer vermöchte die Freude zu beschreiben, die in den Herzen aller Gläubigen hervorgerufen wurde, als das Geschlecht der Angeln durch das Gnadenwirken des allmächtigen Gottes und durch dein Mühen, lieber Bruder, die Finsternis des Irrtums vertrieben hat und vom Licht des Glaubens erhellt worden ist. Untadeligen Geistes tritt es nun die Götzenbilder mit Füßen, denen es früher in sinnloser Furcht unterworfen war. Es wirft sich reinen Herzens nieder vor dem allmächtigen Gott. Es lässt sich binden durch die Regeln der heiligen Verkündigung, die es vor dem Rückfall in die Sünde bewahren. Es gehorcht den Geboten Gottes und wächst in der Erkenntnis. Im Gebet beugt es sich nieder zur Erde, damit sein Geist nicht am Boden liegt. Wessen Werk ist das, wenn nicht das Werk dessen, der da spricht: „Mein Vater ist noch immer am Werk, und auch ich bin am Werk“ (Joh 5,17). Um zu zeigen, dass sich die Welt nicht durch die Weisheit der Menschen, sondern durch seine Kraft bekehrt, wählte Gott als seine Prediger, die er in die Welt sandte, ungebildete Männer aus. Das tut er auch jetzt noch, denn er lässt im Stamm der Angeln durch schwache Menschen Großes wirken. Aber in diesem Geschenk vom Himmel, liebe Brüder, ist etwas, was uns neben der großen Freude mit sehr großer Furcht erfüllen muss.^pIch weiß nämlich, dass der allmächtige Gott durch deine Liebe in dem Stamm, den er erwählt hat, große Wunder gewirkt hat. Darum ist es notwendig, dass du dich über das Geschenk des Himmels freust in großer Furcht und dass du dich fürchtest in Freude. Freuen sollst du dich, weil die Seelen der Angeln durch die äußeren Wunder von der inneren Gnade angezogen werden.^pAber fürchten sollst du dich davor, der schwache Geist möge sich am Ende angesichts der Zeichen, die geschehen, anmaßend erheben; was ihm äußerlich Ehren einbringt, möchte ihn durch eitlen Ruhm innerlich zu Fall bringen. Wir dürfen nicht Vergessen: Als die Jünger voll Freude vom Predigen zurückkamen, sagten sie zu ihrem himmlischen Meister: „Herr, sogar die Dämonen gehorchen uns, wenn wir deinen Namen aussprechen.“ Darauf bekamen sie zu hören: „Freut euch nicht darüber, dass euch die Geister gehorchen, sondern freut euch darüber, dass eure Namen im Himmel verzeichnet sind“ (Lk 10,17.20)",
          "patr_resp1": "Ahmt mich nach und achtet auf jene, die nach meinem Vorbild leben.",
          "patr_resp2": "Und der Gott des Friedens wird mit euch sein.",
          "patr_resp3": "Ich ermahne euch im Namen unseres Herrn Jesus Christus: Seid alle einmütig!",
          "oration": "Gott, du Herr aller Völker, durch die Predigt des heiligen Bischofs Augustinus von Canterbury hast du den Bewohnern von England das Licht des Evangeliums gebracht. Gib, dass sein apostolisches Werk immer neue Frucht bringt in deiner Kirche. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Herr aller Völker, durch die Predigt des heiligen Bischofs Augustinus von Canterbury hast du den Bewohnern von England das Licht des Evangeliums gebracht. Gib, dass sein apostolisches Werk immer neue Frucht bringt in deiner Kirche. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Herr aller Völker, durch die Predigt des heiligen Bischofs Augustinus von Canterbury hast du den Bewohnern von England das Licht des Evangeliums gebracht. Gib, dass sein apostolisches Werk immer neue Frucht bringt in deiner Kirche. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "29": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        }
      }
    }
  },
  "6": {
    "2": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Origenes († 253/54)",
          "patr_werk": "Aus seiner Schrift „Aufforderung zum Blutzeugnis“.",
          "patr_text": "^hWer am Leiden Christi teilhat, der hat auch teil am Trost^p„Wir wissen, dass wir aus dem Tod in das Leben hinübergegangen sind“ (1 Joh 3,14), dadurch, dass wir vom Unglauben zum Glauben gekommen sind. Darum dürfen wir uns nicht wundern, dass die Welt uns hasst (vgl. 1 Joh 3,13). Denn keiner, der den Übergang vom Tod zum Leben nicht vollzogen hat, sondern im Tod verharrt, kann die Menschen lieben, die sozusagen vom finsteren Haus des Todes zum Palast des Lichtes und des Lebens gegangen sind, der aus lebendigen Steinen gefertigt ist.^pJesus ‚hat sein Leben für uns hingegeben‘ (vgl. 1 Joh 3,16). So wollen auch wir es geben, ich will nicht einmal sagen: für ihn, sondern: für uns, ich denke für die, welche durch unser Zeugnis erbaut werden sollen.^pDie Zeit ist gekommen, da die Christen sich rühmen dürfen. Es heißt: „Mehr noch, wir rühmen uns ebenso unserer Bedrängnis; denn wir wissen, Bedrängnis bewirkt Geduld, Geduld aber Bewährung, Bewährung Hoffnung. Die Hoffnung aber lässt nicht zugrunde gehen; denn die Liebe Gottes ist ausgegossen in unsere Herzen durch den Heiligen Geist, der uns gegeben ist“ (Röm 5,3–5) …^p„Wie uns nämlich die Leiden Christi überreich zuteil geworden sind, so wird uns durch Christus auch überreicher Trost zuteil“ (2 Kor 1,5). Wenn wir so die Leiden Christi mit höchster Bereitwilligkeit annehmen, sollen sie uns überreich zuteil werden, wenn wir nach überreichem Trost verlangen, mit dem alle Leidenden getröstet werden, vielleicht nicht in gleichem Maß; denn wenn der Trost gleich groß wäre, dann hieße es in der Heiligen Schrift nicht: „Wie uns die Leiden Christi überreich zuteil geworden sind, so wird uns durch Christus auch überreicher Trost zuteil.“ In dem Maß, in dem uns die Leiden Christi zuteil werden, in demselben Maß wird uns auch der Trost zuteil. Das lernt von dem, der in voller Zuversicht gesagt hat: „Wir sind sicher, dass ihr mit uns nicht nur an den Leiden teilhabt, sondern auch am Trost“ (2 Kor 1,7).^pDurch den Propheten sagt Gott: „Zur Zeit der Gnade will ich dich erhören, am Tag der Rettung dir helfen“ (Jes 49,8; 2 Kor 6,2). Welche Zeit ist aber mehr ‚Zeit der Gnade‘ als diese, da wir um unserer christlichen Gottesliebe willen unter Bewachung im Triumphzug dieser Welt mitziehen müssen, dabei aber selber eher triumphieren als im Triumphzug der Welt gefangen geführt werden? Die Märtyrer in Christus berauben mit Christus die Herrschaften und Mächte, mit Christus triumphieren sie über sie; denn wie die Märtyrer an den Leiden teilhatten, so auch an der Tapferkeit des Leidens. Welcher Tag ist also so sehr Tag des Heils wie der, an dem wir aus diesem Leben scheiden?^pDoch ich ermahne euch: Gebt niemand den geringsten Anstoß, „damit unser Dienst nicht getadelt werden kann“ (2 Kor 6,3), sondern erweist euch in allem als Gottes Diener durch große Standhaftigkeit und sprecht: „Und nun, Herr, worauf soll ich hoffen! Auf dich allein will ich harren“ (Ps 39,8).",
          "patr_resp1": "Wir haben nicht gegen Menschen von Fleisch und Blut zu kämpfen, sondern gegen die Fürsten und Gewalten.",
          "patr_resp2": "Seid standhaft, gürtet euch mit der Wahrheit.",
          "patr_resp3": "Darum legt die Rüstung Gottes an, damit ihr am Tag des Unheils bestehen könnt.",
          "oration": "Gott, du gibst deiner Kirche Kraft und Halt durch das mutige Glaubensbekenntnis der Heiligen. Hilf uns auf die Fürsprache der Märtyrer Marcellinus und Petrus, dass auch wir aus dem Glauben leben und dich standhaft bekennen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du gibst deiner Kirche Kraft und Halt durch das mutige Glaubensbekenntnis der Heiligen. Hilf uns auf die Fürsprache der Märtyrer Marcellinus und Petrus, dass auch wir aus dem Glauben leben und dich standhaft bekennen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du gibst deiner Kirche Kraft und Halt durch das mutige Glaubensbekenntnis der Heiligen. Hilf uns auf die Fürsprache der Märtyrer Marcellinus und Petrus, dass auch wir aus dem Glauben leben und dich standhaft bekennen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "6": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_werk": "Aus der Lebensbeschreibung des heiligen Bischofs Norbert.",
          "patr_text": "^hUnter den Großen war er groß, unter den Kleinen ganz klein^pNorbert von Xanten zählt mit Recht zu denen die sich erfolgreich für die Reform Papst Gregor VII. einsetzten. Er bemühte sich vor allem um einen Klerus, der nach dem Evangelium lebt und zugleich dem Apostolat dient, um einen keuschen und armen Klerus, der als Kleid und Zier den neuen Menschen anzieht, das eine im Mönchsgewand, das andere in der priesterlichen Würde. Er wollte einen Klerus, der danach strebt, der Heiligen Schrift zu folgen und Christus zum Führer zu haben. Dem Klerus pflegte er dreierlei zu empfehlen: Reinheit am Altar und heim Gottesdienst, im Schuldkapitel Beseitigung von Auswüchsen und Nachlässigkeiten, Sorge für die Armen und Gastfreundschaft.^pZu den Priestern, die im Kloster die Stelle der Apostel vertraten, gewann er nach dem Vorbild der Urkirche eine so große Zahl von gläubigen Laien, Männern und Frauen, hinzu, dass viele versicherten, seit den Tagen der Apostel habe niemand mehr in so kurzer Zeit für Christus so viele Nachfolger für das vollkommene Leben geworben wie er durch seinen Orden.^pAls er Erzbischof geworden war, rief er seine Mitbrüder und beauftragte sie, das Land der Wenden zum Glauben zu führen. Den Klerus seines Bistums versuchte er, ohne Rücksicht auf Lärm und Aufregung des Volkes, für die Reform zu gewinnen.^pSein besonderes Bemühen war es, unter Wahrung freier kirchlicher Wahlen die Eintracht zwischen dem apostolischen Stuhl und dein Kaisertum zu festigen und zu fördern: Papst Innozenz II. schrieb ihm: „Der apostolische Stuhl beglückwünscht sich aus vollem Herzen, in dir einen so treuen Sohn zu haben“, und der Kaiser machte ihn zum Erzkanzler des Reiches. In alldem bewies er eine unerschrockene Treue. Man sagte von ihm: Norbert zeichnet sich aus durch Treue wie Bernhard von Clairvaux durch Liebe! Dazu kam seine Liebenswürdigkeit in der Unterhaltung! Denn er war groß unter den Großen und unter den Kleinen ganz klein; gegen alle liebenswert. Schließlich ist seine hohe Beredsamkeit zu erwähnen, das glühende Gotteswort, das die Laster ausbrannte, die Tugenden schärfte, eine liebende, die Seele bereichernde Weisheit, die das Göttliche schaute, unablässig betrachtete und ohne Furcht verbreitete.",
          "patr_resp1": "Weise zurecht, tadle und ermahne in unermüdlicher Belehrung;",
          "patr_resp2": "verkünde das Wort zu gelegener und ungelegener Zeit.",
          "patr_resp3": "Gib acht auf die ganze Herde, in der dich der Heilige Geist zum Bischof bestellt hat.",
          "oration": "Gott, du Herr deiner Kirche, der heilige Norbert ist durch sein Beten und Sorgen ein Hirte nach deinem Herzen geworden. Höre auf seine Fürsprache und gib deinem Volk auch heute Bischöfe und Priester, die ihm die Botschaft des Heiles verkünden und es nach deinem Willen leiten. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Herr deiner Kirche, der heilige Norbert ist durch sein Beten und Sorgen ein Hirte nach deinem Herzen geworden. Höre auf seine Fürsprache und gib deinem Volk auch heute Bischöfe und Priester, die ihm die Botschaft des Heiles verkünden und es nach deinem Willen leiten. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Herr deiner Kirche, der heilige Norbert ist durch sein Beten und Sorgen ein Hirte nach deinem Herzen geworden. Höre auf seine Fürsprache und gib deinem Volk auch heute Bischöfe und Priester, die ihm die Botschaft des Heiles verkünden und es nach deinem Willen leiten. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "7": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Commune mehrere Märtyrer",
          "comm_2": "Comm_2",
          "patr_autor": "Willibald (8. Jh.)",
          "patr_werk": "Aus der Lebensbeschreibung des heiligen Bonifatius.",
          "patr_text": "^hKostbar ist in den Augen des Herrn das Sterben seiner Frommen^pBonifatius durchzog ganz Friesland und verkündete das Wort des Herrn. Er schaffte die heidnischen Opfer und verkehrten Gebräuche der Ungläubigen ab und erwies die Gottheiten ihrer Heiligtümer als machtlos. Größten Eifer verwandte er auf den Bau von Kirchen. Er hatte bereits viele tausend Menschen, Männer, Frauen und Kinder, getauft.^pSeine Mitstreiter waren dabei der Chorbischof Eoban (ihm übertrug er in Anbetracht seines eigenen Greisenalters und seiner Gebrechlichkeit die Betreuung der Friesen und bestellte ihn zu seinem Nachfolger im Bischofsamt in der Stadt Trecht) sowie die folgenden Priester und Diakone: Wintrung, Walthere und Aethelhere, die mit dem Priesteramt ausgezeichnet waren, Hamund, Scirbald und Bosa, die dem Levitendienst oblagen, Waccar, Gundaecar, Illehere und Hathowulf, die in den klösterlichen Stand der Mönche aufgenommen waren. Auch diese streuten zusammen mit dem heiligen Bonifatius eifrig weithin im Volk die Samenkörner des ewigen Lebens aus und verkündeten unter dem Schutz Gottes, des Herrn, das Wort. So erlangten sie, die nach der Lehre des Apostels ein Herz und eine Seele waren (vgl. Apg 4,32), vereint auch die eine Palme des Martyriums und den gemeinsamen Lohn ihres Sieges.^pAls der bestimmte Tag anbrach und mit Sonnenaufgang das erste Tageslicht hervorbrach, da kamen statt der Freunde Feinde, statt der neubekehrten Gläubigen neue Schergen heran, und eine riesige waffenschwingende Menge stürzte mit Speeren und Schilden auf das Lager zu. Da sprangen rasch die Knechte aus dem Lager vor, warfen sich auf der ganzen Linie den Bewaffneten entgegen und versuchten, die Heiligen (die späteren Märtyrer) gegen den wahnsinnigen Haufen des rasenden Volkes zu schützen.^pDer Mann Gottes aber rief, als er das Lärmen der angreifenden Menge hörte, sogleich die Kleriker zu sich, nahm die Heiligenreliquien, die er ständig mit sich zu führen pflegte, an sich und trat aus seinem Zelt. Sofort verwies und verbot er den Knechten den bewaffneten Kampf und rief: „Lasst ab, ihr Knechte, vom Handgemenge und hört auf mit Kampf und Krieg! Denn wir werden durch das Zeugnis der Schrift in Wahrheit belehrt, dass wir Böses nicht mit Bösem, sondern mit Gutem vergelten sollen (vgl. 1 Thess 5,15). Endlich ist der lang ersehnte Tag da, und der willkommene Zeitpunkt unserer Auflösung steht bevor. Darum seid stark im Herrn und erduldet mit Danksagung, was er in seiner Gnade über uns kommen lässt. Hofft auf ihn, und er wird eure Seelen retten.“^pAber auch die anwesenden Priester, Diakone und niederen Kleriker ermahnte er in ihrer Muttersprache mit den Worten: „Brüder, fasst Mut und erschreckt nicht vor denen, die den Leib töten, denn die unsterbliche Seele können sie nicht töten (vgl. Mt 10,28). Freut euch vielmehr im Herrn und werft den Anker eurer Hoffnung auf Gott; er wird euch augenblicklich den verdienten ewigen Lohn schenken und euch den Sitz im Himmelssaal als Mitbürgern der Engel anweisen. Nehmt standhaft den sofortigen Tod auf euch, dann könnt ihr in Ewigkeit mit Christus herrschen“.^pWährend er noch seine Schüler auf solch liebevolle Weise belehrte, ermahnte und zur Erlangung der Märtyrerkrone ermunterte, stürzte sich auf einmal das ganze rasende Getümmel der Heiden mit Schwertern und allen Kriegswaffen auf sie und schlug die Leiber der Heiligen blutig nieder. Für diese aber war es ein glückbringendes Sterben.",
          "patr_resp1": "Wer sein Leben retten will, wird es verlieren.",
          "patr_resp2": "Wer aber sein Leben um meinetwillen verliert, wird es gewinnen.",
          "patr_resp3": "Fürchte dich nicht, du kleine Herde! Denn euer Vater hat beschlossen, euch das Reich zu geben.",
          "oration": "Allmächtiger und barmherziger Gott, durch die Predigt und das Zeugnis der heiligen Märtyrer Eoban, Adelar und Gefährten hast du vielen Menschen deinen Sohn als Erlöser geoffenbart. Höre auf ihre Fürsprache und festige uns im Glauben zum Lob und zur Ehre deines Namens. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Commune mehrere Märtyrer",
          "comm_2": "Comm_2",
          "Ant_Ev": "Die mit dem heiligen Bonifatius^ldie Saat des ewigen Lebens ausstreuten,^lwaren ein Herz und eine Seele^lund erlangten vereint die eine Palme des Martyriums.",
          "oration": "Allmächtiger und barmherziger Gott, durch die Predigt und das Zeugnis der heiligen Märtyrer Eoban, Adelar und Gefährten hast du vielen Menschen deinen Sohn als Erlöser geoffenbart. Höre auf ihre Fürsprache und festige uns im Glauben zum Lob und zur Ehre deines Namens. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Commune mehrere Märtyrer",
          "comm_2": "Comm_2",
          "Ant_Ev": "Bonifatius sprach zu seinen Gefährten:^lErschreckt nicht vor denen, die den Leib töten,^ldie Seele aber nicht töten können;^lsondern freut euch im Herrn^lund nehmt standhaft den Tod auf euch,^ldann könnt ihr in Ewigkeit mit Christus herrschen.",
          "oration": "Allmächtiger und barmherziger Gott, durch die Predigt und das Zeugnis der heiligen Märtyrer Eoban, Adelar und Gefährten hast du vielen Menschen deinen Sohn als Erlöser geoffenbart. Höre auf ihre Fürsprache und festige uns im Glauben zum Lob und zur Ehre deines Namens. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "9": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Ephräm († 373)",
          "patr_werk": "Aus einer Predigt.",
          "patr_text": "^hDie göttliche Heilsordnung ist ein Abbild der Welt des Geistes^pHerr, vertreibe die nächtliche Finsternis unseres Geistes und lass es in ihm Tag werden durch das Licht deiner Weisheit. Erleuchte unseren Geist, damit er dir diene in neuer Reinheit. Wenn die Sonne am Himmel ihren Lauf beginnt, beginnt für den Menschen sein Tagewerk. Herr, bereite in unserem Herzen einen Platz für den Tag, der kein Ende kennt. Gib, dass wir an uns selbst das Leben erkennen können, das uns die Auferstehung gebracht hat, und dass nichts unsern Geist von der Freude an dir abwende. Herr, drücke uns das Siegel jenes Tages auf, der nicht vom Sonnenlauf bestimmt ist. Gib, dass wir ständig auf dich gerichtet sind.^pIn deinen Sakramenten empfangen wir dich täglich und nehmen dich auf in unseren Leib. Mach uns würdig, an uns selbst die Auferstehung zu erfahren, die wir erhoffen. Durch die Taufe bergen wir in unserem Leib deinen Schatz. Mehre ihn am Tisch deiner heiligen Geheimnisse. Herr, an deinem Tisch gib uns Freude über deine Gnade. Wir tragen dein Gedächtnis in uns, das wir von deinem geistlichen Tisch empfangen haben. Gib es uns zum vollen Besitz in der kommenden Welt.^pWelche Schönheit wir haben, das lass uns aus jener geistlichen Schönheit erkennen, die dein unsterblicher Wille in unserer Sterblichkeit weckt.^pDeine Kreuzigung, du unser Erlöser, war das Ende des leiblichen Lebens. Gib uns die Gnade, dass wir unseren eigenen Willen kreuzigen, damit das geistliche Leben in uns geboren wird. Deine Auferstehung, o Jesus, lasse den geistlichen Menschen in uns wachsen. Was wir in der Feier deiner Geheimnisse feiern, sei uns ein Spiegel, in dem wir ihn, den geistlichen Menschen, erkennen.^pDeine göttliche Heilsordnung, du unser Erlöser, ist ein Abbild der Welt des Geistes; gib, dass wir in ihr leben als Menschen des Geistes.^pHerr, beraube unser Herz nicht der Zeichen deiner geistlichen Gegenwart und unseren Leib nicht der Wonne deiner Güte. Die unserem Leib eigene Sterblichkeit ist für uns eine Quelle der Verderbnis. Das Wasser deiner göttlichen Liebe reinige unser Herz von den Auswirkungen unserer Sterblichkeit. Herr, lass uns hineilen zu unserer Stadt, und wie du sie dem Mose vom Gipfel des Berges aus zum Besitz gabst, so gib, dass wir sie besitzen, indem du sie uns offenbarst.",
          "patr_resp1": "Von ganzem Herzen lobte er den Herrn und liebte Gott, den Schöpfer;",
          "patr_resp2": "er stellte Sänger vor den Altar und gab ihrer Stimme süße Weisen.",
          "patr_resp3": "Schon vor dem Morgen hallte das Heiligtum wider vom Lobpreis seines heiligen Namens.",
          "oration": "Erhabener Gott, wir begehen den Gedächtnistag des heiligen Diakons Ephräm. Erfüllt vom Heiligen Geist, hat er in Hymnen und Liedern deine Größe besungen. Gib auch uns deinen Geist, damit wir dich loben und dir mit ganzer Hingabe dienen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Erhabener Gott, wir begehen den Gedächtnistag des heiligen Diakons Ephräm. Erfüllt vom Heiligen Geist, hat er in Hymnen und Liedern deine Größe besungen. Gib auch uns deinen Geist, damit wir dich loben und dir mit ganzer Hingabe dienen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Erhabener Gott, wir begehen den Gedächtnistag des heiligen Diakons Ephräm. Erfüllt vom Heiligen Geist, hat er in Hymnen und Liedern deine Größe besungen. Gib auch uns deinen Geist, damit wir dich loben und dir mit ganzer Hingabe dienen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "10": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Cornmune Hirten der Kirche.",
          "comm_2": "Comm_2",
          "patr_autor": "Bardo († 1051)",
          "patr_werk": "Aus einer Predigt am Fest des hl. Evangelisten Johannes im Jahre 1031.",
          "patr_text": "^hGott wollte mit seiner ganzen Fülle in Christus wohnen^p„Vor seinem Glanz schwinden vor ihm die Wolken dahin.“ (Ps 18,13 Vg.)^pDen dunklen, verhüllten Sinn dieses Psalmwortes soll uns ein kompetenter Verkündiger erschließen, der heilige Evangelist Johannes, dessen Fest wir heute feiern.^pAls dieser große Verwalter den Schatz seines Herrn erhalten hatte – ich glaube, nicht drei oder fünf oder zehn Talente, sondern tausend – gab er davon sofort seinen Mitknechten reichen Anteil, da er verkündete: „Im Anfang war das Wort, und das Wort war bei Gott, und das Wort war Gott.“ (Joh 1,1)^pVon diesem ,göttlichen Glanz‘ spricht er noch ein wenig weiter; dann aber, um ihn gebührend zu würdigen, bringt er einen Vergleich, indem er eine große ‚Wolke‘ oder vielmehr ein großes Licht einführt und sagt, dass es im Vergleich mit diesem ‚Glanz‘ ein Nichts sei: „Es trat ein Mensch auf, der von Gott gesandt war; sein Name war Johannes“; und dann: „Er war nicht selbst das Licht“ (Joh 1,6.8). Wenn nun der Größte der von einer Frau Geborenen nicht das Licht ist, so ist auch kein Geringerer das Licht.^p„Vor seinem Glanz schwinden vor ihm die Wolken dahin.“ Wer ist dieser Glanz? Wer sind die Wolken? Der Evangelist sagt, dass das Angesicht Jesu bei seiner Verklärung auf dem Berge leuchtete und wie die Sonne strahlte (vgl. Mt 17,2). Da ist der ,Glanz‘. Und von den ,Wolken‘ heißt es bei Jesaja: „Wer sind die, die heranfliegen wie Wolken?“ (Jes 60,8)^pDie Scharen der Heiligen leuchten wie Wolken, der eine durch Keuschheit, ein anderer durch Redlichkeit, wieder ein anderer durch besondere Friedensliebe, so dass er „Sohn Gottes“ genannt wird, ein anderer im Siegeskranz des Martyriums oder im hellen Weiß der Jungfräulichkeit, ein anderer durch seine Milde oder durch seine Weisheit; schließlich, ganz allgemein gesagt, jeder einzelne leuchtet durch eine besondere Tugend; doch was immer dies im einzelnen ist, in Gott findet sich alles beisammen.^pUnd so ist jener (Christus), ,der Glanz‘, Licht vom Licht, Gott von Gott, Gott Sohn von Gott Vater, der Glanz, von dem Johannes sagt: „Das wahre Licht, das jeden Menschen erleuchtet, kam in die Welt“ (Joh 1,9). Der alle Tugenden einpflanzt und jegliche Frömmigkeit verleiht, der Urheber aller Heiligkeit, er hat alles, was er an die einzelnen austeilt, ungeteilt in sich selbst.^pDie Auserwählten, mögen sie von noch so großer Helligkeit und Heiligkeit sein, sie können mit jenem göttlichen Glanz nicht verglichen werden; denn wenn man sie ihm gegenüberstellt, werden sie bedeutungslos. Sie sind heilig, er macht sie heilig; sie sind hell, er macht sie hell; sie haben Anteil, er gibt ihnen Anteil. Was sie sind, das ist auch er; doch sind sie nicht, was er ist.^pDer Psalmist sagt: „Keiner, der lebt, ist gerecht vor dir“ (Ps 143,2). Auch der Tugendhafte hält den Vergleich (mit Gott) nicht aus. „Wer lebt“, das heißt der Unschuldige, der Bescheidene, wer arm ist im Geiste, der Demütige, oder wer immer durch eine übernatürliche Tugend lebendig ist, er hält den Vergleich nicht aus. „Denn wer in den Wolken ist wie der Herr? Wer gleicht dem Herrn unter den Gottessöhnen?“ (Ps 89,7 Vg.)^pHier also wieder die ,Wolken‘, aber ‚vor seinem Glanz schwinden sie vor ihm dahin‘, das heißt, mit dem Glanz, der sie anstrahlt, können die angestrahlten Wolken nicht verglichen werden. Nimm weg, was anstrahlt, und das Angestrahlte wird finster. Nimm die Sonne weg, und die Wolken sind im Dunkel. Bring die Sonne zurück, und die Wolken werden hell. So wird ohne die Gottheit das Menschliche zum Nichts; mit der Gottheit dagegen gewinnt das Menschliche seine Größe.",
          "patr_resp1": "Jesus Christus ist der Abglanz der Herrlichkeit des Vaters und das Abbild seines Wesens.",
          "patr_resp2": "Aus seiner Fülle haben wir alle empfangen, Gnade über Gnade.",
          "patr_resp3": "Was hast du, das du nicht empfangen hättest? Wenn du es aber empfangen hast, warum rühmst du dich, als hättest du es nicht empfangen?",
          "oration": "Herr und Gott, du hast im heiligen Bischof Bardo den Mönchen ein Vorbild und den Gläubigen einen eifrigen Seelsorger geschenkt. Hilf uns, nach seinem Beispiel in allem auf das Heil der Menschen bedacht zu sein. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Cornmune Hirten der Kirche.",
          "comm_2": "Comm_2",
          "oration": "Herr und Gott, du hast im heiligen Bischof Bardo den Mönchen ein Vorbild und den Gläubigen einen eifrigen Seelsorger geschenkt. Hilf uns, nach seinem Beispiel in allem auf das Heil der Menschen bedacht zu sein. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Cornmune Hirten der Kirche.",
          "comm_2": "Comm_2",
          "oration": "Herr und Gott, du hast im heiligen Bischof Bardo den Mönchen ein Vorbild und den Gläubigen einen eifrigen Seelsorger geschenkt. Hilf uns, nach seinem Beispiel in allem auf das Heil der Menschen bedacht zu sein. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "15": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_werk": "Aus einem Brief römischer Christen an Bischof Cyprian von Karthago.",
          "patr_text": "^hPreis des Martyriums^pWelch höherer Ruhm oder welch größeres Glück könnte irgendeinem Menschen zuteil werden, als inmitten der Henkersknechte unerschrocken Gott, den Herrn, zu bekennen, unter den mannigfachen und ausgesuchten Qualen der wütenden Macht der Welt trotz Folterung, Peinigung und Zerfleischung des Leibes mit dem schon entweichenden, aber dennoch ungebrochenen Geist Christus, den Sohn Gottes, zu bekennen;^lals die Welt zu verlassen, um dem Himmel zuzustreben, von den Menschen sich zu trennen, um unter die Engel zu treten;^lals alle weltlichen Fesseln zu zerbrechen und nun frei vor das Angesicht Gottes zu treten, das Himmelreich ohne alles Zaudern festzuhalten, in Christi Namen ein Leidensgenosse Christi zu werden, durch die göttliche Gnade des eigenen Richters selbst zum Richter erhoben zu werden, sein Gewissen durch das Bekenntnis des Namens Christi unbefleckt zu erhalten;^lals den menschlichen und gottlosen Gesetzen, die dem Glauben widersprechen, nicht zu gehorchen;^lals die Wahrheit mit lauter Stimme öffentlich zu bezeugen, sogar den allgemein gefürchteten Tod selbst im Tode zu überwinden, gerade durch das Sterben Unsterblichkeit zu erlangen, trotz der Zerfleischung und Folterung mit allen möglichen Werkzeugen der Grausamkeit, gerade inmitten der Foltern die Folter zu besiegen, allen Schmerzen des Zerrissenen Körpers mit der Kraft des Geistes zu widerstehen;^lals ohne Schauder sein Blut zu vergießen, seine Martern um des Glaubens willen liebzugewinnen und das irdische Weiterleben als den Verlust des eigentlichen Lebens zu betrachten!^pZu diesem Kampf ruft uns der Herr durch sein Evangelium gleichsam mit Posaunenstimme auf, indem er sagt: „Wer Vater oder Mutter mehr liebt als mich, ist meiner nicht würdig, und wer Sohn oder Tochter mehr liebt als mich, ist meiner nicht würdig. Und wer nicht sein Kreuz auf sich nimmt und mir nachfolgt, ist meiner nicht würdig“ (Mt 10,37–38).^lUnd wieder: „Selig, die um der Gerechtigkeit willen verfolgt werden; denn ihnen gehört das Himmelreich. Selig seid ihr, wenn ihr um meinetwillen beschimpft und verfolgt und auf alle mögliche Weise verleumdet werdet. Freut euch und jubelt: euer Lohn im Himmel wird groß sein. Denn so wurden schon vor euch die Propheten verfolgt“ (Mt 5,10–12).^lUnd ein andermal: „Ihr werdet um meinetwillen vor Statthalter und Könige geführt. Brüder werden einander dem Tod ausliefern und Väter ihre Kinder. Wer aber bis zum Ende standhaft bleibt, der wird gerettet“ (Mt 10,18.21.22).^lUnd abermals: „Wer siegt, der darf mit mir auf meinem Thron sitzen, so wie auch ich gesiegt habe und mich mit meinem Vater auf seinen Thron gesetzt habe“ (Offb 3,21).^lAuch der Apostel schreibt: „Was kann uns scheiden von der Liebe Christi? Bedrängnis oder Not oder Verfolgung, Hunger oder Kälte, Gefahr oder Schwert? In der Schrift steht: Um deinetwillen sind wir den ganzen Tag dem Tod ausgesetzt; wir werden behandelt wie Schafe, die man zum Schlachten bestimmt hat. Doch all das überwinden wir durch den, der uns geliebt hat“ (Röm 8,35–37).",
          "patr_resp1": "Ich habe den guten Kampf gekämpft, den Lauf vollendet, die Treue gehalten.",
          "patr_resp2": "Schon jetzt liegt für mich der Kranz der Gerechtigkeit bereit.",
          "patr_resp3": "Ich sehe alles als Verlust an, weil die Erkenntnis Christi Jesu, meines Herrn, alles übertrifft. Christus will ich erkennen und die Gemeinschaft mit seinem Leiden; sein Tod soll mich prägen.",
          "oration": "Barmherziger Gott, mit deiner Kraft hat der heilige Vitus in jugendlichem Alter die Qualen des Martyriums bestanden. Wir ehren sein Andenken und empfehlen dir alle, deren Glaube bedroht ist. Stärke sie in der Hoffnung und festige sie in der Liebe. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Barmherziger Gott, mit deiner Kraft hat der heilige Vitus in jugendlichem Alter die Qualen des Martyriums bestanden. Wir ehren sein Andenken und empfehlen dir alle, deren Glaube bedroht ist. Stärke sie in der Hoffnung und festige sie in der Liebe. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Barmherziger Gott, mit deiner Kraft hat der heilige Vitus in jugendlichem Alter die Qualen des Martyriums bestanden. Wir ehren sein Andenken und empfehlen dir alle, deren Glaube bedroht ist. Stärke sie in der Hoffnung und festige sie in der Liebe. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "16": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Gregor der Große († 604)",
          "patr_werk": "Aus der Pastoralregel.",
          "patr_text": "^hWer bei euch groß sein will, der soll euer Diener sein^pDas Tun des Vorstehers muss so hoch über dem des Volkes stehen wie das Leben des Hirten über dem der Herde.^pSein Denken muss lauter, sein Handeln beispielhaft, sein Schweigen taktvoll, sein Reden nutzbringend sein. Allen Menschen sei er durch sein Mitleid nahe, mehr als alle in Betrachtung vertieft; denen, die Gutes tun, sei er ein demütiger Freund. Im Eifer für die Gerechtigkeit sei er aufrecht gegenüber dem Sünder und seinen Fehlern. Über der äußeren Beschäftigung vernachlässige er nicht die Sorge für das innere Leben. Bei aller Sorge für das Innere höre er nicht auf, sich auch um das Äußere zu kümmern.^pOft meint der Vorsteher wegen seiner hohen Stellung, er sei über alle erhaben. Weil ihn seine Untergebenen mit Lob überschütten, wenn er etwas gut gemacht hat, weil keiner ihn zu tadeln wagt, wenn etwas schlecht ausgegangen ist, wenn sie ihn sogar dann noch loben, wo sie tadeln müssten, lässt er sich völlig in die Irre führen und zur Überheblichkeit verleiten. Von außen widerfährt ihm ungemessenes Lob, in seinem Innern aber geht ihm die Wahrheit verloren. Er vergisst sich selbst und hört nur auf das, was andere sagen. Er glaubt im Ernst, er sei der Mann, den man ihm schildert; nicht der, den ihm sein Gewissen vorhält. Er sieht geringschätzig auf seine Untergebenen herab und vergisst, dass er ihnen aufgrund der menschlichen Natur gleichsteht. Er hält sich für vorzüglicher als alle anderen, weil er mächtiger ist als sie. Er hält sich auch für weiser als die andern, weil er mehr Macht hat als sie.^pDer Vorsteher muss sich ständig bemühen, das Bewusstsein der Macht in seinem Innern zu zügeln, um so mehr, wenn diese nach außen sehr groß ist. Der Vorsteher darf sich nicht zu eitler Freude an der Macht verführen lassen. Darum sagt der Weise treffend: „Wenn du das Gastmahl leitest, so überheb dich nicht, sei unter den Gästen wie einer von ihnen!“ (Sir 32,1) So sagt auch Petrus: „Seid nicht Beherrscher eurer Gemeinden, sondern Vorbilder für die Herde!“ (1 Petr 5,3) Die ewige Wahrheit spornt uns zu höheren Tugenden an mit den Worten: „Ihr wisst, dass die Herrscher ihre Völker unterdrücken und die Mächtigen ihre Macht über die Menschen missbrauchen Bei euch soll es nicht so sein, sondern wer bei euch groß sein will, der soll euer Diener sein und wer bei euch der Erste sein will, soll euer, Sklave sein. Denn auch der Menschensohn ist nicht gekommen, um sich dienen zu lassen, sondern um zu dienen und sein Leben hinzugeben als Lösegeld für viele“ (Mt 20,25–28).",
          "patr_resp1": "Ich der Meister, habe euch die Füße gewaschen.",
          "patr_resp2": "Darum müsst auch ihr einander die Füße waschen.",
          "patr_resp3": "Ihr nennt mich Meister und Herr, und ihr habt recht, ich bin es.",
          "oration": "Treuer Gott, du hast dem heiligen Bischof Benno den Mut gegeben, in den Wirren seiner Zeit unbeirrt den Weg des Glaubens zu gehen. Zeige auch uns deine Wege und stärke unser Vertrauen auf deine Hilfe. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Treuer Gott, du hast dem heiligen Bischof Benno den Mut gegeben, in den Wirren seiner Zeit unbeirrt den Weg des Glaubens zu gehen. Zeige auch uns deine Wege und stärke unser Vertrauen auf deine Hilfe. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Treuer Gott, du hast dem heiligen Bischof Benno den Mut gegeben, in den Wirren seiner Zeit unbeirrt den Weg des Glaubens zu gehen. Zeige auch uns deine Wege und stärke unser Vertrauen auf deine Hilfe. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "19": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Petrus Damiani († 1072)",
          "patr_werk": "Aus der Lebensbeschreibung des heiligen Romuald.",
          "patr_text": "^hHeilige Einsamkeit und heiliges Schweigen^pRomuald verbrachte drei Jahre im Gebiet von Parenzo. Im ersten Jahr gründete er ein Kloster und setzte darin zusammen mit den Brüdern einen Abt ein; in den beiden andern Jahren lebte er dort als Einsiedler. Die Gnade Gottes führte ihn zu einem Höhepunkt der Vollkommenheit.^pOft wurde er von der Schau der Gottheit so fortgerissen, dass er sich gleichsam ganz in Tränen auflöste und in einer unsagbaren Glut der Gottesliebe ausrief: „Lieber Jesus, lieber! Mein süßer Honig, meine unsagbare Sehnsucht, du Süßigkeit der Heiligen, du Süße der Engel!“ und ähnliche Worte mehr.^pWo sich der heilige aufzuhalten gedachte, schuf er sich jedes Mal in seiner Zelle ein Oratorium und einen Altar. Dann schloss er sich ein und ließ niemand eintreten.^pAls er nach dem ständigen Wechsel seines Aufenthaltsortes das Ende nahen fühlte. kehrte er schließlich in das Kloster zurück, das er in Val di Castro gegründet hatte. Er zweifelte nicht, dass er dort bald sterben werde, und ließ sich in der Erwartung des baldigen Todes eine Zelle mit Oratorium bauen, sich darin einzuschließen und bis zum Tod sein Schweigen zu halten.^pAls die Klause hergerichtet war und sein Sinn danach stand, sich bald einschließen zu lassen, da begann sein Leib immer schlimmer unter Beschwerden zu leiden, und seine Kräfte ließen nach, weniger durch Krankheit als durch Altersschwäche. Eines Tages nahm die Körperkraft zusehends ab, und mit zunehmenden Beschwerden stellte sich eine starke Ermüdung ein. Gegen Sonnenuntergang hieß er die beiden Brüder, die bei ihm waren, hinauszugehen und die Zelle hinter sich zu schließen, aber zum Beten der Frühpsalmen in der Morgendämmerung wieder zu ihm zu kommen. Sie machten sich Sorge wegen seines Todes und gingen nur ungern hinaus.^pSie warteten eine Weile, und als sie neugierig aufmerksamer lauschten, aber keine Körperbewegung und keinen Laut hören konnten, vermuteten sie richtig, was geschehen war. Sie stießen die Tür auf, eilten hinein und machten Licht, Da sahen sie den heiligen Körper daliegen, die Seele aber war zum Himmel entrückt. Der Leib lag da wie eine noch unbeachtete Perle vom Himmel, die einst in Ehren zu dem Schatz des höchsten Königs gelegt werden sollte.",
          "patr_resp1": "Gott hat dich in all deinem Tun reich gesegnet; er sorgte für dich auf deinem langen Weg durch die Wüste.",
          "patr_resp2": "Der Herr, dein Gott, war bei dir.",
          "patr_resp3": "Wie ein Vater seinen Sohn, so erzog dich dein Gott.",
          "oration": "Gott, du Freund der Heiligen, du hast den Abt Romuald berufen, einen Orden für Mönche zu gründen, die in strenger Einsamkeit leben. Schenke uns die Gnade, uns selbst zu verleugnen und Christus nachzufolgen, damit wir mit ihm in die Herrlichkeit des Himmels gelangen, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Freund der Heiligen, du hast den Abt Romuald berufen, einen Orden für Mönche zu gründen, die in strenger Einsamkeit leben. Schenke uns die Gnade, uns selbst zu verleugnen und Christus nachzufolgen, damit wir mit ihm in die Herrlichkeit des Himmels gelangen, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Freund der Heiligen, du hast den Abt Romuald berufen, einen Orden für Mönche zu gründen, die in strenger Einsamkeit leben. Schenke uns die Gnade, uns selbst zu verleugnen und Christus nachzufolgen, damit wir mit ihm in die Herrlichkeit des Himmels gelangen, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      }
    },
    "22": {
      "n1": {
        "name": "Paulinus von Nola",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Paulinus von Nola († 431)",
          "patr_werk": "Aus einem Brief an den Bischof Alypius.",
          "patr_text": "^hGott wirkt seine Liebe überall in den Seinigen durch den Heiligen Geist^pDu heiliger Mann, du wirklich seliger Mann das ist wahre Liebe, das ist vollendete Zuneigung, die du unserer Wenigkeit zeigst, die Liebe, nach der zu Verlangen sich lohnt. Denn wir haben durch unsern Diener Julian, als er aus Karthago zurückkam, Briefe erhalten, die uns das. Licht deiner Frömmigkeit brachten. Es schien nicht so sehr ein Erkennen deiner Liebe zu sein als ein Wiedererkennen. Denn diese Liebe kommt von ihm, der uns von Anbeginn der Welt für sich bestimmt hat, von ihm, in dem wir geschaffen waren, noch ehe wir geboren wurden. „Er hat uns geschaffen und nicht wir selbst“ (Ps 100,3 Vg.), er, der alles macht, was sein wird. Durch sein Vorauswissen und sein Wirken wurden wir erschaffen zur Gleichheit des Wollens und zur Einheit des Glaubens oder zum Glauben der Einheit. Die Liebe verband uns noch bevor wir uns kannten. Noch ehe wir uns mit den Augen des Leibes sahen, kannten wir uns durch die Offenbarung des Geistes.^pSo beglückwünschen wir uns denn und rühmen uns im Herrn, der überall auf der Erde als der eine und gleiche in den Seinen die Liebe wirkt durch den Heiligen Geist, den er über alles Fleisch ausgegossen hat (Joël 3,1), indem er mit den Wassern eines Stromes die Gottesstadt erquickt (vgl. Ps 46,4). Unter den Bürgern dieser Stadt hat er dich als den Edelstein unter den Edlen deines Volkes (vgl. Ps 113,8) mit Recht auf den Stuhl der Apostel gesetzt. Auch uns hat er aufgerichtet, als wir gebeugt waren (vgl. Ps 146,8), und in die gleiche Stellung berufen. Aber mehr noch beglückwünschen wir uns, weil der Herr uns eine Wohnung in deinem Herzen geschenkt und uns in dein Innerstes versetzt hat. So dürfen wir mit besonderer Zuversicht deine Hilfe in Anspruch nehmen. Dazu rufen uns Amt und Gnadengabe auf, dass wir in der Liebe zu dir nicht zaghaft und schwach sein dürfen.^pVon mir sollst du wissen, dass es eine Zeit gab, in der ich als Sünder noch nicht, aus Dunkel und Finsternis herausgeführt (vgl. Ps 107,14), den Geist der Lebensluft atmete, noch nicht die Hand an den Pflug legte (vgl. Lk 9,62) und noch nicht das Kreuz des Herrn auf mich nahm (vgl. Mt 10,38). Möchten deine Gebete mir helfen, dass ich es bis zum Ende zu tragen vermag. Wenn du uns durch deine Fürbitte die Last leichter machst, dann mehre das als Lohn die fülle deiner Verdienste. Den Heiligen, der uns in unserem Mühen hilft, wagen wir nicht Bruder zu nennen. „Er wird erhöht wie eine große Burg“ (Spr 18,19 Vg.). Wir haben deiner Heiligkeit um der Einheit willen ein Brot geschickt, in dem die Kraft der Dreieinigkeit geborgen ist. Iss das Brot und mach es so zu einem Brot der Preisung.",
          "patr_resp1": "Selig der Mann, der ohne Makel ist und seine Hoffnung nicht auf reiche Schätze setzt.",
          "patr_resp2": "Sein Gut ist sichergestellt im Herrn.",
          "patr_resp3": "Er konnte sündigen und sündigte nicht, Böses tun und tat es nicht.",
          "oration": "Gott, du hast dem heiligen Bischof Paulinus von Nola Liebe zu den Armen geschenkt und ihn zu einem großen Seelsorger gemacht. Blicke auf sein heiliges Leben. Hilf uns, dem Beispiel seiner tätigen Liebe zu folgen und allen gut zu sein, denen wir begegnen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Paulinus von Nola",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du hast dem heiligen Bischof Paulinus von Nola Liebe zu den Armen geschenkt und ihn zu einem großen Seelsorger gemacht. Blicke auf sein heiliges Leben. Hilf uns, dem Beispiel seiner tätigen Liebe zu folgen und allen gut zu sein, denen wir begegnen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Paulinus von Nola",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du hast dem heiligen Bischof Paulinus von Nola Liebe zu den Armen geschenkt und ihn zu einem großen Seelsorger gemacht. Blicke auf sein heiliges Leben. Hilf uns, dem Beispiel seiner tätigen Liebe zu folgen und allen gut zu sein, denen wir begegnen. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "John Fisher und Thomas Morus",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Thomas Morus († 1535)",
          "patr_werk": "Aus einem Brief an seine Tochter Margarita.",
          "patr_text": "^hIn aller Hoffnung und in vollem Vertrauen überlasse ich mich Gott^pLiebe Margarita! Ich bin mir zwar bewusst, dass mein bisheriges Leben reichlich schlecht war und dass ich vollauf verdient hätte, von Gott verlassen zu werden. Dennoch werde ich nicht aufhören, stets auf seine grenzenlose Güte zu vertrauen und bester Hoffnung zu sein. Wie er mir bis jetzt durch seine heilige Gnade die Kraft gegeben hat, eher alles herzlich zu verachten, Besitz, Einkommen, ja das Leben selbst, als dass ich gegen mein Gewissen schwüre, so hat er in Seiner gütigen Absicht dem König eingegeben, mich bis jetzt nur der Freiheit zu berauben.^pDurch diese Maßnahme hat mir Seine Majestät eine größere Wohltat erwiesen als durch alle Ehrungen und Güter, die er mir verliehen hat; denn davon verspreche ich mir seelischen Fortschritt. Dieselbe Gnade wird das Herz des Königs bewegen, mir nicht etwas aufzuerlegen, was noch schwerer ist, oder sie wird mir die Kraft geben, alles noch so Schwere geduldig, tapfer und willig zu ertragen.^pMit unserm Herrn und den Verdiensten seines bitteren Leidens verbunden – es übertrifft mein ganzes Dulden an Art und Wert um ein Unendliches –, mit ihm verbunden, wird mein Leiden mir die am Läuterungsort geschuldeten Strafen mildern und durch die freigebige Güte Gottes auch den Lohn im Himmel ein wenig mehren.^pLiebe Margarita, ich will Gottes Güte nicht misstrauen, sosehr ich fühle, wie schwach und gebrechlich ich bin. Wenn ich in Schrecken und Verwirrung sehen sollte, dass ich vor dem Fallen stehe, werde ich an den heiligen Petrus denken, der bei einem einzigen Windstoß aus Mangel an Glauben zu sinken begann, und dann werde ich tun wie er. Ich werde rufen: „Herr, rette mich!“ (Mt 14,30) Denn ich hoffe, er wird seine Hand ausstrecken, mich ergreifen und nicht untergehen lassen.^pSollte er es aber zulassen, dass ich noch darüber hinaus die Rolle des Petrus spiele, dass ich ganz und gar falle, schwöre und leugne – Gott wende es in seinem Erbarmen von mir ab; ein solcher Fall soll mir eher Schaden als Nutzen bringen –, dann hoffe ich dennoch, dass er mich mit dem vollen Blick seines Auges anschaut wie den Petrus (vgl. Lk 22,61) und mich wieder aufrichtet, damit ich aufs Neue die Wahrheit bekenne und mein Gewissen entlaste. Die Strafe und die Beschämung der früheren Verleugnung will ich dann tapfer ertragen.^pLiebe Margarita, schließlich habe ich die Erfahrung, dass Gott mich ohne meine Schuld nicht verlässt. So überlasse ich mich ihm in aller Hoffnung und mit vollem Vertrauen. Wenn er mich wegen meiner Sünden untergehen lässt, dann wird wenigstens seine Gerechtigkeit in mir gepriesen. Ich hoffe aber, ich hoffe es ganz fest, dass seine Milde und Güte mich bewahren wird. Er wird es fügen, dass den Menschen durch mich mehr sein Erbarmen als seine Gerechtigkeit nahegebracht wird.^pSei also guten Mutes, liebe Tochter, und sorge dich nicht so sehr um mich, was mir auch immer in dieser Welt zustößt. Es kann mir nichts geschehen, was Gott nicht will. Was immer er aber will, so schlimm es scheinen mag, es ist dennoch wahrhaft das Beste.",
          "patr_resp1": "Die Märtyrer Christi schauten auf zum Himmel und sprachen:",
          "patr_resp2": "Herr, hilf uns, dass wir dein Werk erfüllen.",
          "patr_resp3": "Schau auf deine Knechte und erbarme dich deiner Kirche!",
          "oration": "Heiliger Gott, du hast die Glaubenstreue des Bischofs John Fisher und des Kanzlers Thomas Morus im Martyrium erprobt und zur Vollendung geführt. Höre auf ihre Fürsprache und hilf uns, den Glauben, den wir mit Worten bekennen, in den Prüfungen des Lebens zu bezeugen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "John Fisher und Thomas Morus",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Heiliger Gott, du hast die Glaubenstreue des Bischofs John Fisher und des Kanzlers Thomas Morus im Martyrium erprobt und zur Vollendung geführt. Höre auf ihre Fürsprache und hilf uns, den Glauben, den wir mit Worten bekennen, in den Prüfungen des Lebens zu bezeugen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "John Fisher und Thomas Morus",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Heiliger Gott, du hast die Glaubenstreue des Bischofs John Fisher und des Kanzlers Thomas Morus im Martyrium erprobt und zur Vollendung geführt. Höre auf ihre Fürsprache und hilf uns, den Glauben, den wir mit Worten bekennen, in den Prüfungen des Lebens zu bezeugen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "26": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        }
      }
    },
    "27": {
      "n1": {
        "name": "Heimerad",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Commune Hirten der Kirche",
          "comm_2": "Comm_2",
          "patr_werk": "Ekkebert (um 1100)",
          "patr_resp1": "In allem erweisen wir uns als Gottes Diener: durch große Standhaftigkeit, in Bedrängnis, unter Schlägen, in Gefängnissen, durch Fasten, bei Ehrung und Schmähung.",
          "patr_resp2": "Wir sind zum Schauspiel geworden für die Welt, für Engel und Menschen.",
          "patr_resp3": "Wir gelten als Betrüger und sind doch wahrhaftig: uns wird Leid zugefügt, und doch sind wir jederzeit fröhlich; wir sind arm und machen doch viele reich.",
          "oration": "Gütiger Gott, im Vertrauen auf dich hat der heilige Heimerad weder Armut und Not noch den Spott der Menschen gescheut. Gewähre uns auf seine Fürsprache die Kraft, den mühsamen Weg unserer Pilgerschaft in Treue zu gehen und so zu dir zu gelangen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Heimerad",
          "genitiv": "Genitiv",
          "comm_1": "Commune Hirten der Kirche",
          "comm_2": "Comm_2",
          "oration": "Gütiger Gott, im Vertrauen auf dich hat der heilige Heimerad weder Armut und Not noch den Spott der Menschen gescheut. Gewähre uns auf seine Fürsprache die Kraft, den mühsamen Weg unserer Pilgerschaft in Treue zu gehen und so zu dir zu gelangen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Heimerad",
          "genitiv": "Genitiv",
          "comm_1": "Commune Hirten der Kirche",
          "comm_2": "Comm_2",
          "oration": "Gütiger Gott, im Vertrauen auf dich hat der heilige Heimerad weder Armut und Not noch den Spott der Menschen gescheut. Gewähre uns auf seine Fürsprache die Kraft, den mühsamen Weg unserer Pilgerschaft in Treue zu gehen und so zu dir zu gelangen. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Hemma von Gurk",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Augustinus († 430)",
          "patr_werk": "Aus einer Predigt über die Nachfolge Christi.",
          "patr_text": "^hDie allgemeine Berufung zur Heiligkeit^p„Wer mein Jünger sein will, der verleugne sich selbst, nehme sein Kreuz auf sich und folge mir nach“ (Mt 16,24). Hart und schwer scheint, was der Herr befiehlt: Wer sein Jünger sein will, soll sich selbst verleugnen. Aber es ist nicht schwer und hart, was er befiehlt; denn er selbst hilft uns, dass wir es vollbringen.^pWas heißt: „Er nehme sein Kreuz auf sich“? Er trage, was Last ist, und so folge er mir. Wenn er anfängt, meinem Leben und meinen Geboten nachzuleben, werden ihm viele widersprechen, werden ihn viele hindern und viele ihm davon abraten, und das von Seiten der Begleiter Christi. Die den Blinden am Schreien hindern (vgl. 18,39), waren Begleiter Christi. Wenn du folgen willst, dann sieh in den Drohungen, Schmeicheleien oder anderen Dingen Hindernisse für das Kreuz; nimm es auf dich, trag es und unterliege nicht! In dieser Welt, der heiligen, guten, versöhnten, geretteten oder richtiger: der zu rettenden, schon jetzt aber in der Hoffnung geretteten – „denn wir sind gerettet, doch in der Hoffnung“ (Röm 8,24) –, in dieser Welt also, das heißt in der Kirche, die Christus ganz nachfolgt, sagt Christus ganz allgemein: „Wer mein Jünger sein will, der verleugne sich selbst!“^pDas bedeutet nicht: Die Jungfrauen sollen es hören, die Verheirateten nicht, die Witwen sollen es hören, die in der Ehe nicht, die Mönche sollen es hören, die Ehemänner nicht, die Kleriker sollen es hören, die Laien nicht. Vielmehr die ganze Kirche, der gesamte Leib, alle Glieder, je nach ihren Aufgaben, sie alle sollen Christus nachfolgen.^pDie ganze Kirche folge, sie, die eine, die Taube, die Braut, die Erlöste, deren Mitgift das Blut des Bräutigams ist. Hier ist Raum für die unverfälschte Jungfräulichkeit ebenso wie für die Enthaltsamkeit der Witwe. Raum hat hier auch die eheliche Keuschheit.^pAlle diese Glieder, die hier Raum haben, sollen Christus nachfolgen je nach ihrer Veranlagung, nach ihrer Art, ihrer Stellung und in ihrer Weise. Sie sollen sich selbst verleugnen, das heißt, sie sollen sich nicht rühmen. Sie sollen ihr Kreuz tragen, das heißt, sie sollen für Christus tragen, was die Welt ihnen auflädt. Sie sollen Christus lieben, der allein nicht trügt, der einzige, den keiner täuscht und der niemand enttäuscht. Sie sollen ihn lieben; denn was er verspricht, ist wahr. Aber der Glaube wankt, weil er eben jetzt noch nicht gibt! Sei standhaft, halte aus, ertrage, trage die Verzögerung; dann trägst du dein Kreuz.",
          "patr_resp1": "Ihr seid Licht geworden durch den Herrn. Lebt als Kinder des Lichts!",
          "patr_resp2": "Das Licht bringt lauter Güte, Gerechtigkeit und Wahrheit hervor.",
          "patr_resp3": "Ihr seid das Licht der Welt. Euer Licht soll vor den Menschen leuchten.",
          "oration": "Barmherziger Gott, du lenkst unsere Wege. In schwerer Zeit hat die heilige Hemma (als Landesmutter von Kärnten) für die Bedrückten und Armen gesorgt. Gib auch uns die Kraft, in der Not nicht zu verzweifeln, sondern auf dich zu schauen und Gutes zu tun. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Hemma von Gurk",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Barmherziger Gott, du lenkst unsere Wege. In schwerer Zeit hat die heilige Hemma (als Landesmutter von Kärnten) für die Bedrückten und Armen gesorgt. Gib auch uns die Kraft, in der Not nicht zu verzweifeln, sondern auf dich zu schauen und Gutes zu tun. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Hemma von Gurk",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Barmherziger Gott, du lenkst unsere Wege. In schwerer Zeit hat die heilige Hemma (als Landesmutter von Kärnten) für die Bedrückten und Armen gesorgt. Gib auch uns die Kraft, in der Not nicht zu verzweifeln, sondern auf dich zu schauen und Gutes zu tun. Darum bitten wir durch Jesus Christus."
        }
      },
      "n3": {
        "name": "Cyrill von Alexandrien",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Cyrill von Alexandrien († 444)",
          "patr_werk": "Aus einem Brief gegen die Arianer.",
          "patr_text": "^hDer Verteidiger der wahren Gottesmutterschaft Marias^pIch wundere mich, dass es Christen gibt, die in Zweifel ziehen, dass Maria Gottesgebärerin genannt werden darf. Denn wenn unser Herr Jesus Christus Gott ist, wie sollte dann die heilige Jungfrau, die ihn geboren hat, nicht Gottesgebärerin sein? Diesen Glauben haben uns die ehrwürdigen Väter überliefert, auch wenn sie den Ausdruck nicht gebrauchten. Die heiligen Väter haben uns angeleitet, so zu denken.^pAuch unser Vater Athanasius rühmlichen Andenkens, der den Bischofssitz von Alexandrien ganze 46 Jahre zierte, der den Erfindungen der gottlosen Irrlehrer eine unbesiegliche Einsicht entgegensetzte und mit seinen eigenen Schriften die Welt unter dem Himmel wie mit wohlriechendem Myron erfreute, dem alle die Richtigkeit und Genauigkeit der Lehre bezeugen, nennt im dritten Teil seines Buches über die wesensgleiche Dreifaltigkeit die heilige Jungfrau immer wieder „Gottesgebärerin“. Ich sehe mich veranlasst, hier seine eigenen Worte und Ausdrücke zu gebrauchen: „Wie wir oft gesagt haben, ist es das Ziel und die Eigenart der Heiligen Schrift, dass ihre Verkündigung über den Heiland zwei Seiten hat: dass er immer Gott war und der Sohn ist, der Abglanz und die Weisheit des Vaters (vgl. Hebr 1,3), und dass er dann um unseretwillen aus der Jungfrau, der Gottesgebärerin Maria, Fleisch und Menschenwürde annahm.“ Nach weiteren Ausführungen fährt Athanasius fort: „Es hat viele Heilige gegeben, die von aller Sünde frei waren: Jeremia wurde schon im Mutterschoß geheiligt (vgl. Jer 1,5), und Johannes hüpfte vor seiner Geburt jubelnd auf, als er die Stimme Marias hörte“ (vgl. Lk 1,41). Dieser Mann ist vertrauenswürdig: er würde nichts sagen, was mit der Heiligen Schrift nicht im Einklang steht.^pEs steht also fest, dass der Immanuel aus zwei Wirklichkeiten besteht: aus Gottheit und Menschheit. Dennoch ist der Herr Jesus einer, der eine wahre und natürliche Sohn: Gott und Mensch zugleich, nicht ein vergöttlichter Mensch wie die, welche die Gnade besitzen, sondern wahrer Gott, der um unseretwillen in Menschengestalt erschienen ist. Das bezeugt uns auch der heilige Paulus: „Als die Zeit erfüllt war, sandte Gott seinen Sohn, geboren von einer Frau und dem Gesetz unterstellt, damit er die freikaufte, die unter dem Gesetz stehen, und damit wir die Sohnschaft erlangten“ (Gal 4,4.5).",
          "patr_resp1": "Er hat vor Gott große Taten vollbracht, die ganze Erde wurde von seiner Lehre erfüllt.",
          "patr_resp2": "Er trete für uns ein bei Gott, unserm Herrn.",
          "patr_resp3": "Er ist Priester des Herrn und sinnt nach über Gottes Gebote Tag und Nacht.",
          "oration": "Vater unseres Herrn Jesus Christus, durch deine Gnade ist der heilige Bischof Cyrill von Alexandrien unerschrocken eingetreten für den Glauben, dass Maria deinen ewigen Sohn geboren hat. Auch wir bekennen sie als wahre Gottesmutter und bitten dich: Rette uns durch die Menschwerdung deines Sohnes Jesus Christus, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Laudes": {
          "name": "Cyrill von Alexandrien",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Vater unseres Herrn Jesus Christus, durch deine Gnade ist der heilige Bischof Cyrill von Alexandrien unerschrocken eingetreten für den Glauben, dass Maria deinen ewigen Sohn geboren hat. Auch wir bekennen sie als wahre Gottesmutter und bitten dich: Rette uns durch die Menschwerdung deines Sohnes Jesus Christus, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Vesper": {
          "name": "Cyrill von Alexandrien",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Vater unseres Herrn Jesus Christus, durch deine Gnade ist der heilige Bischof Cyrill von Alexandrien unerschrocken eingetreten für den Glauben, dass Maria deinen ewigen Sohn geboren hat. Auch wir bekennen sie als wahre Gottesmutter und bitten dich: Rette uns durch die Menschwerdung deines Sohnes Jesus Christus, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      }
    },
    "30": {
      "n1": {
        "name": "Erste römische Märtyrer",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Klemens I. († 101)",
          "patr_werk": "Aus dem Brief an die Korinther.",
          "patr_text": "^hSie mussten als Opfer des Neides leiden und wurden leuchtende Vorbilder^pIch übergehe die älteren Beispiele und komme zu den Kämpfern der jüngeren Zeit und zu den edlen Gestalten unserer Generation. Als Opfer von Eifersucht und Neid wurden sie, die hohen Säulen der Gerechtigkeit, verfolgt, und sie kämpften bis zum Tod.^pHalten wir uns nur die guten Apostel vor Augen: Petrus, der als Opfer schnöden Neides nicht nur ein- oder zweimal, sondern vielmals leiden musste und so als Zeuge an den ihm gebührenden Ort der Herrlichkeit gelangte. Als Opfer von Neid und Hass hat Paulus den Siegespreis gewonnen. Siebenmal wurde er ins Gefängnis geworfen, musste flüchten und wurde gesteinigt. Er war Verkünder im Osten und Westen und erlangte hohen Ruhm seines Glaubens wegen. Er lehrte die ganze Welt Gerechtigkeit, kam bis an die Grenzen der Erde und legte vor den Behörden Zeugnis ab. Dann schied er aus dieser Welt und ging an den heiligen Ort als erhabenes Vorbild der Geduld.^pZu diesen Männern mit ihren erhabenen Lehren gesellte sich die große Schar der Auserwählten, die als Opfer der Eifersucht viel Schimpf und Misshandlung erdulden mussten und so unter uns zu leuchtenden Vorbildern wurden. Aus Eifersucht wurden Frauen wie Danaiden verfolgt, mussten wie Dirke Schreckliches und Gottloses erdulden und kamen so auf den rechten Weg des Glaubens; schwach dem Leib nach, erlangten sie dennoch den Siegespreis.^pEifersucht entfremdete die Gattin dem Mann und kehrte das Wort unseres Vaters Adam ins Gegenteil: „Das ist Bein von meinem Bein und Fleisch von meinem Fleisch“ (Gen 2,23). Eifersucht und Streit haben große Städte zerstört und mächtige Völker ausgerottet.^pLiebe Brüder, das schreibe ich euch nicht nur, um euch zurechtzuweisen, sondern auch um mich selbst anzuspornen. Denn wir sind in der gleichen Arena, und derselbe Kampf ist uns auferlegt. Darum lasst uns die nichtigen und sinnlosen Sorgen aufgeben und uns an die ruhmreiche und ehrwürdige Regel der Vollkommenheit halten. Lasst uns erkennen, was gut, recht und wohlgefällig ist vor Gott, der uns erschaffen hat. Schauen wir hin auf das Blut Christi und beachten wir, wie hoch Gott, sein Vater, dieses Blut schätzt, das, zu unserem Heil ausgegossen, über die ganze Welt die Gnade der Umkehr gebracht hat.",
          "patr_resp1": "Für Gott gaben sie ihren Leib dem Tode hin",
          "patr_resp2": "und gewannen den ewigen Siegeskranz.",
          "patr_resp3": "Sie haben ihre Kleider gewaschen im Blut des Lammes.",
          "oration": "Allmächtiger, ewiger Gott, du hast die Anfänge der Kirche von Rom durch das Blut vieler Märtyrer geheiligt. Das Opfer ihres Lebens werde uns zum Segen, ihr herrlicher Sieg stärke deine Kirche. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Erste römische Märtyrer",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Ev": "Die gewaltige Schar der Märtyrer^lverharrte in brüderlicher Liebe,^ldenn EIN Geist und EIN Glaube beseelte sie.",
          "oration": "Allmächtiger, ewiger Gott, du hast die Anfänge der Kirche von Rom durch das Blut vieler Märtyrer geheiligt. Das Opfer ihres Lebens werde uns zum Segen, ihr herrlicher Sieg stärke deine Kirche. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Erste römische Märtyrer",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Ev": "Im Leben haben sie Christus geliebt,^lim Tode sind sie ihm nachgefolgt;^ldeshalb herrschen sie mit ihm auf ewig.",
          "oration": "Allmächtiger, ewiger Gott, du hast die Anfänge der Kirche von Rom durch das Blut vieler Märtyrer geheiligt. Das Opfer ihres Lebens werde uns zum Segen, ihr herrlicher Sieg stärke deine Kirche. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Otto",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "II. Vatikanisches Konzil (1962–1965)",
          "patr_werk": "Aus dem Dekret über die Missionstätigkeit der Kirche.",
          "patr_text": "^hGeht hin und lehrt alle Völker!^pBevor der Herr Jesus sein Leben freiwillig für die Welt hingab, hat er den apostolischen Dienst so geordnet und die Sendung des Heiligen Geistes verheißen, dass beide sich darin zusammenfinden, das Werk des Heils immer und überall zur Fruchtbarkeit zu bringen.^pDer Heilige Geist eint die ganze Kirche alle Zeiten hindurch in Gemeinschaft und Dienstleistung, stattet sie mit den verschiedenen hierarchischen und charismatischen Gaben aus, wobei er die kirchlichen Einrichtungen wie eine Seele belebt, und senkt den gleichen Geist der Sendung, von dem Christus getrieben war, in die Herzen der Gläubigen ein. Bisweilen geht er sogar sichtbar der apostolischen Tätigkeit voran (vgl. Apg 10,44–47; 11,15; 15,8), wie er sie auch auf verschiedene Weisen unablässig begleitet und lenkt.^pDer Herr Jesus rief von Anfang an „die zu sich, die er wollte, und bestellte die Zwölf, damit sie bei ihm seien und er sie sende, zu verkündigen“ (Mk 3,13). So bildeten die Apostel den Keim des neuen Israel und zugleich den Ursprung der Hierarchie.^pAls er dann ein für allemal durch seinen Tod und seine Auferstehung in sich selbst die Geheimnisse unseres Heils und der Erneuerung von allem vollzogen hatte, gründete er, dem alle Gewalt im Himmel und auf Erden gegeben ist (vgl. Mt 28,18), vor der Aufnahme in den Himmel seine Kirche als Sakrament des Heils, sandte die Apostel in alle Welt, so wie er selbst vom Vater gesandt worden war (vgl. Joh 20,21), und trug ihnen auf: „Geht hin und lehrt alle Völker und tauft sie auf den Namen des Vaters und des Sohnes und des Heiligen Geistes und lehrt sie alles halten, was ich euch geboten habe“ (Mt 28,19–20).^pSo hat die Kirche die Aufgabe, den Christusglauben und das Heil Christi auszubreiten. Dieser Aufgabe unterzieht sich von den Aposteln her das Bischofskollegium, dem die Priester zur Seite stehen, in Einheit mit dem Nachfolger Petri und obersten Hirten der Kirche einmal aufgrund des ausdrücklichen Auftrags, dann aber auch aufgrund des Lebens, das Christus in seine Glieder einströmen lässt.^pDie Sendung der Kirche vollzieht sich mithin durch das Wirken, kraft dessen sie im Gehorsam gegen das Gebot Christi, getrieben von der Gnade und Liebe des Heiligen Geistes, allen Menschen und Völkern in voller Wirklichkeit gegenwärtig wird, um sie durch das Zeugnis des Lebens, die Verkündigung, die Sakramente und die übrigen Mitteilungsweisen der Gnade zum Glauben, zur Freiheit und zum Frieden Christi zu führen: So soll ihnen der freie und sichere Weg zur Vollen Teilnahme am Christusgeheimnis eröffnet werden.",
          "patr_resp1": "Geht hinaus in die ganze Welt und verkündet das Evangeliwn allen Geschöpfen!",
          "patr_resp2": "Wer glaubt und sich taufen lässt, wird gerettet.",
          "patr_resp3": "Wenn jemand nicht aus Wasser und Geist geboren wird, kann er nicht in das Reich Gottes kommen.",
          "oration": "Allmächtiger Gott, in der Kraft deines Geistes hat der heilige Bischof Otto ungezählte Menschen zum Christlichen Glauben geführt und ihnen die Sakramente des Lebens gespendet. Hilf uns, den Glauben dankbar zu bewahren, den auch wir durch deine Vorsehung empfangen haben. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Otto",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, in der Kraft deines Geistes hat der heilige Bischof Otto ungezählte Menschen zum Christlichen Glauben geführt und ihnen die Sakramente des Lebens gespendet. Hilf uns, den Glauben dankbar zu bewahren, den auch wir durch deine Vorsehung empfangen haben. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Otto",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, in der Kraft deines Geistes hat der heilige Bischof Otto ungezählte Menschen zum Christlichen Glauben geführt und ihnen die Sakramente des Lebens gespendet. Hilf uns, den Glauben dankbar zu bewahren, den auch wir durch deine Vorsehung empfangen haben. Darum bitten wir durch Jesus Christus."
        }
      }
    }
  },
  "7": {
    "4": {
      "n1": {
        "name": "Ulrich",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_werk": "Aus einer Lebensbeschreibung des heiligen Ulrich.",
          "patr_text": "^hGott bereitet Großes denen, die ihn lieben^p„Welche Freuden, welche Wonnen den Gesegneten Gottes, die an seine rechte Seite gestellt werden, beschieden sind, das“ – so sagte Bischof Ulrich – „soll man sich immer vorstellen, so gut es der menschliche Geist nur immer vermag. Darüber steht ja geschrieben: ‚Was kein Auge gesehen und kein Ohr gehört hat, was keinem Menschen in den Sinn gekommen ist: das Große, das Gott denen bereitet hat, die ihn lieben‘ (1 Kor 2,9).^pDort strahlen in unsagbarem Glanz die lobpreisenden Chöre der Engel; dort freut sich, belohnt mit verdienter Ehre, die erhabene Schar der Patriarchen; der wahrheitkündende Stand der Propheten dankt Gott ohne Unterlass, vollkommen erfüllt sind nun ihre Worte; der Richter-Chor der Apostel frohlockt dort in Ewigkeit, sie haben den Lohn empfangen, der ihnen verheißen war von Anfang an.^lIm Schmuck ihrer Siegespalme erfreuen sich ewigen Trostes die Märtyrer; im Lob Gottes Verharren die Bekenner, vielfachen Lohn haben sie empfangen.^lDort wird den Jungfrauen hundertfältige Frucht zurückerstattet, und sie haben im Überfluss; die Witwen und Waisen werden belohnt, sechzigfache Frucht (vgl. Mt 13,8) wird ihnen zurückerstattet.^lDort werden mit allen, die hungern und dürsten nach der Gerechtigkeit, die Mönche ohne Unterlass Gott loben, der Lohn ihres irdischen Verzichts wird ihnen zuteil, ihre Sehnsucht ist erfüllt, ihr Hunger gestillt.^lDort werden die Büßer, befreit von der Last ihrer Sünden, sich mitfreuen und Gott loben ohne Ende.^lDort werden die Kleinen, die in weißen Kleidern dem Lamm folgen (vgl. Offb 14,4), sich vor dem Thron mit den Engeln vereinen und im Lob Gottes nimmermehr verstummen.^lDort strahlt, erhöht über die Chöre der Engel, die glorreiche Jungfrau und Gottesmutter Maria in unermesslicher Reinheit und Schönheit, alle mit Freude erfüllend.^lDort werden die Gerechten wie die Sonne leuchten (vgl. Mt 13,43), und alle Heiligen werden ihren Schöpfer und den Schöpfer aller Wesenheit in seinem Licht von Angesicht zu Angesicht schauen und sich freuen. Und er nimmt von ihnen alle Angst, Trauer und Mühsal und alles Leid (vgl. Offb 21,4).^pIn diesem Reich bedarf es des Lichtes der Sonne nicht mehr, noch des Mondes G und der Sterne. Hunger und Durst wird niemand mehr plagen, noch Kälte und Hitze einen belästigen (vgl. Offb 7,16), noch Krankheit und Schmerz einen befallen. Man braucht nicht die Leiden nahenden Alters zu fürchten, denn wie die Leiber der Toten am Tag des Gerichts in der Fülle der Jahre Christi auferstehen, in derselben Kraft und Schönheit werden sie ewig bleiben. So wie die Engel in ihrem ursprünglichen Stand immer bleiben werden, so bleiben auch die Menschen nach ihrer Auferstehung rein und unverändert und wohnen in der Stadt unseres Gottes, die erbaut ist auf seinem heiligen Berg.^pDie Mauer hat zwölf Grundsteine, prächtig wie zwölf Edelsteine (vgl. Offb 21,14.19). Diese zwölf Edelsteine bedeuten die Apostel, auf deren festem Fundament die Kirche ruht, wie der Welterlöser zum heiligen Petrus sagt: ‚Du bist Petrus, und auf diesen Felsen werde ich meine Kirche bauen‘ (Mt 16,16). Indem er das zu Petrus sagte, tat er allen Aposteln kund, dass auf sie seine Kirche gebaut werden solle, auf sie, deren Botschaft in die ganze Welt hinausging und deren Wort bis an die Enden der Erde gelangte (vgl. Ps 19,5).^pWenn nun die Apostel das Fundament des Hauses Gottes sind und wenn die ganze Christenheit der Bau des Tempels sein soll – wie der Herr sagt: ‚Der Tempel Gottes ist heilig, und der seid ihr‘ (1 Kor 3,17), und: ‚Ihr seid Gottes Bau‘ (1 Kor 3,9) usw. –, dann lasst uns alle mit ganzer Kraft danach trachten, uns dem anzuschließen, der uns erbaut und in uns wohnt, auf dass wir mit seiner Gnade würdig seien, aufgebaut zu werden auf dem Fundament, das unsere Lehrer sind, um so als auserwählte Steine, als eingefügt in die Stände der Kirche befunden zu werden und unseren Schöpfer und Erlöser, den Richter der Lebenden und der Toten, dereinst von Angesicht zu Angesicht schauen und ihnen loben dürfen in alle Ewigkeit. Amen.“",
          "patr_resp1": "Komm, du guter und treuer Knecht, du warst im Kleinen ein treuer Verwalter gewesen, darum will ich dir Großes übertragen.",
          "patr_resp2": "Komm, nimm teil an der Freude deines Herrn.",
          "patr_resp3": "Herr, fünf Talente hast du mir gegeben; siehe, ich habe noch fünf dazugewonnen.",
          "oration": "Gott, du bist reich an Erbarmen. Du hast deinem Volk in einer Zeit schwerer Not den heiligen Ulrich als tatkräftigen Bischof geschenkt. Seine Fürbitte helfe uns, die Gefahren unserer Zeit in der Kraft des Glaubens zu bestehen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Ulrich",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du bist reich an Erbarmen. Du hast deinem Volk in einer Zeit schwerer Not den heiligen Ulrich als tatkräftigen Bischof geschenkt. Seine Fürbitte helfe uns, die Gefahren unserer Zeit in der Kraft des Glaubens zu bestehen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Ulrich",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du bist reich an Erbarmen. Du hast deinem Volk in einer Zeit schwerer Not den heiligen Ulrich als tatkräftigen Bischof geschenkt. Seine Fürbitte helfe uns, die Gefahren unserer Zeit in der Kraft des Glaubens zu bestehen. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Elisabeth von Portugal",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Petrus Chrysologus († 450) zugeschrieben",
          "patr_werk": "Aus einer Predigt über den Frieden",
          "patr_text": "^hSelig, die Frieden stiften^pDer Evangelist sagt: „Selig, die Frieden stiften; denn sie werden Söhne Gottes genannt werden“ (Mt 5,9). Meine Lieben, der Friede ist es, der von der Knechtschaft befreit. Er verleiht den edlen Namen, verwandelt vor Gott mit dem Stand auch die Person: er macht aus dem Diener den Sohn und aus dem Knecht den Freien. Friede unter den Brüdern ist der Wille Gottes und die Freude Christi.^pDer Friede ist der Ursprung der Liebe; er ist das Band der Einheit und ein deutliches Zeichen reiner Gesinnung. Diese kann von Gott erbitten, was sie will; was immer sie wünscht, erbittet sie, und um was sie bittet, das erhält sie. Es ist ein Gebot des Königs, den Frieden zu wahren, da Christus, der Herr, sagt: „Frieden hinterlasse ich euch, meinen Frieden gebe ich euch“ (Joh 14,27). Das bedeutet: In Frieden entlasse ich euch, in Frieden will ich euch wiederfinden. Bei seinem Scheiden wollte er geben, was er bei seiner Wiederkehr in allen zu finden wünschte.^pGebot des Himmels ist es, zu bewahren, was er gegeben hat. Es ist sein Wort: Ich will finden, was ich hinterlassen habe. Frieden mit der Wurzel zu pflanzen ist Sache Gottes, ihn ganz zu entwurzeln Sache des Feindes. Denn wie die Bruderliebe von Gott kommt, so der Hass vom Teufel. Daher ist der Hass zu verdammen. Denn in der Heiligen Schrift steht: „Jeder, der seinen Bruder hasst, ist ein Mörder“ (1 Joh 3,15).^pIhr seht, liebe Brüder, warum wir den Frieden lieben und die Eintracht hochschätzen müssen: Sie bringen Liebe hervor und geben ihr Nahrung. Ihr wisst, nach dem Apostel „ist Gott die Liebe“ (1 Joh 4,16). Wer also die Liebe nicht hat, ist ohne Gott.^pLasst uns die Gebote halten, Brüder, denn sie sind Leben. Die Brüderlichkeit bleibe eingebunden in tiefen Frieden. Sie fessele sich durch das heilbringende Band der Liebe und gegenseitiger Zuneigung, die „viele Sünden zudeckt“ (1 Petr 4,8). Wir müssen die Liebe mit der ganzen Sehnsucht umfangen, da sie so hohe Güter als Lohn gewinnen kann. Mehr als alle Tugenden ist der Friede zu wahren, denn im Frieden ist immer Gott.^pLiebt den Frieden, und alles ist still: So bewahrt ihr Lohn für uns und Freude für euch, liebe Brüder, damit die Kirche Gottes, in der Einheit des Friedens begründet, die in Christus vollendete Ordnung festhält.",
          "patr_resp1": "Brich den Hungernden dein Brot und führe die Armen und Obdachlosen in dein Haus,",
          "patr_resp2": "dann bricht dein Licht auf wie der Morgen, und deine Gerechtigkeit geht dir voraus.",
          "patr_resp3": "Wenn du einen Nackten siehst, bekleide ihn. Verachte ihn nicht, er ist ein Mensch wie du.",
          "oration": "Gott, du Ursprung der Liebe und des Friedens, du hast der heiligen Königin Elisabeth von Portugal die Gnade verliehen, Feinde miteinander zu versöhnen. Auf ihre Fürbitte lehre auch uns, Frieden zu stiften, damit wir uns als deine Kinder erweisen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Elisabeth von Portugal",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Ursprung der Liebe und des Friedens, du hast der heiligen Königin Elisabeth von Portugal die Gnade verliehen, Feinde miteinander zu versöhnen. Auf ihre Fürbitte lehre auch uns, Frieden zu stiften, damit wir uns als deine Kinder erweisen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Elisabeth von Portugal",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Ursprung der Liebe und des Friedens, du hast der heiligen Königin Elisabeth von Portugal die Gnade verliehen, Feinde miteinander zu versöhnen. Auf ihre Fürbitte lehre auch uns, Frieden zu stiften, damit wir uns als deine Kinder erweisen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "5": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Antonius Maria Zaccaria († 1539)",
          "patr_werk": "Aus einer Ansprache an seine Mitbrüder.",
          "patr_text": "^hDie Schüler des Apostels Paulus^p„Wir stehen als Toren da um Christi willen“ (1 Kor 4,10); das sagte der heilige Paulus, unser Führer und Schutzherr, von sich und den übrigen Aposteln wie auch von allen, die sich zu einer christlichen und apostolischen Ordnung bekennen. Aber es gibt keinen Grund, liebe Brüder, sich zu wundern oder sich zu fürchten; „denn ein Jünger steht nicht über seinem Meister und ein Sklave nicht über seinem Herrn“ (Mt 10,24).^pUnsere Gegner leisten sich einen schlechten, uns aber einen guten Dienst. Sie verschaffen uns Kronen großer Herrlichkeit, für sich aber fordern sie den Zorn Gottes heraus. Wir müssen mit ihnen Erbarmen haben und sie lieben, statt sie zu verabscheuen und zu hassen. Ja, wir müssen für sie beten und dürfen uns nicht vom Bösen besiegen lassen, sondern müssen das Böse durch das Gute besiegen (vgl. Röm 12,21). Wie uns der Apostel mahnt, müssen wir „glühende Kohlen“ brennender Liebe „auf ihr Haupt sammeln“ (vgl. Röm 12,20), damit sie unsere Geduld sehen, sich zu fruchtbringenderem Leben bekehren und in Gottesliebe entbrennen.^pUns hat Gott in seiner Huld trotz unserer Unwürdigkeit aus der Welt erwählt, damit wir ihm dienen, von Tugend zu Tugend fortschreiten und durch unsere Ausdauer reiche Frucht der Liebe bringen (vgl. Lk 8,15) und nicht nur wegen der Hoffnung auf die Herrlichkeit der Kinder Gottes jubeln, sondern auch wegen unserer Bedrängnis (vgl. Röm 5,3).^p„Seht doch auf eure Berufung, Brüder!“ (1 Kor 1,26) Wenn wir sie ernstlich bedenken, werden wir erkennen, dass dies ihr Sinn und ihre Forderung ist. Da wir begonnen haben, den Spuren der heiligen Apostel und der anderen Streiter Christi, wenn auch nur von weitem, zu folgen, dürfen wir uns auch nicht weigern, an ihren Leiden teilzunehmen. „Lasst uns mit Ausdauer in dem Wettkampf laufen, der uns aufgetragen ist, und dabei auf Jesus blicken, den Urheber und Vollender des Glaubens“ (Hebr 12,1–2).",
          "patr_resp1": "Ich bezeuge den Glauben an den Herrn Jesus Christus und fürchte nichts.",
          "patr_resp2": "Ich schäme mich des Evangeliums nicht.",
          "patr_resp3": "Ich will mein Leben geringschätzen, wenn nur das Wort verkündet wird.",
          "oration": "Herr, unser Gott, im Geist des Apostels Paulus wollte der heilige Antonius Maria Zaccaria nichts anderes verkünden als Jesus Christus, den Gekreuzigten. Lass auch uns die alles überragende Erkenntnis Christi suchen und in der Torheit des Kreuzes die wahre Weisheit finden. Darum bitten wir durch ihn, Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, im Geist des Apostels Paulus wollte der heilige Antonius Maria Zaccaria nichts anderes verkünden als Jesus Christus, den Gekreuzigten. Lass auch uns die alles überragende Erkenntnis Christi suchen und in der Torheit des Kreuzes die wahre Weisheit finden. Darum bitten wir durch ihn, Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, im Geist des Apostels Paulus wollte der heilige Antonius Maria Zaccaria nichts anderes verkünden als Jesus Christus, den Gekreuzigten. Lass auch uns die alles überragende Erkenntnis Christi suchen und in der Torheit des Kreuzes die wahre Weisheit finden. Darum bitten wir durch ihn, Jesus Christus."
        }
      }
    },
    "6": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Pius XII. († 1958)",
          "patr_werk": "Aus seiner Homilie bei der Heiligsprechung der heiligen Maria Goretti.",
          "patr_text": "^hIch fürchte kein Unheil, denn du bist bei mir^pAlle wissen, dass diese Jungfrau wehrlos einen bitteren Kampf zu bestehen hatte; urplötzlich brach der wilde Sturm gegen sie los und versuchte ihre engelgleiche Reinheit zu brechen. Doch in diesem harten Kampf konnte sie dem göttlichen Erlöser die Worte des goldenen Büchleins von der „Nachfolge Christi“ wiederholen: „Wenn ich von vielen Bedrängnissen versucht und gequält werde, fürchte ich kein Unheil; denn du bist bei mir (vgl. Ps 23,4). Die Reinheit ist meine Stärke; sie bringt Rat und Hilfe, und sie ist mächtiger als alle Feinde.“ So half ihr die Gnade des Himmels, und ihr Wille antwortete großmütig und tapfer. Sie vergoss ihr Blut und wahrte den Ruhm der Jungfräulichkeit.^pDas Leben des demütigen Mädchens ist ein Schauspiel nicht nur für den Himmel. Es verdient auch, von unserer Zeit voll Bewunderung und Ehrfurcht betrachtet zu werden. Familienväter und ‑mütter mögen lernen, wie notwendig es ist, die ihnen von Gott geschenkten Kinder heilig und stark zu erziehen und sie nach den Geboten der katholischen Religion heranzubilden. Wenn dann ihre Tugend vor die Entscheidung gestellt wird, werden die Kinder mit Hilfe der göttlichen Gnade die Kraft haben, unbesiegt, unversehrt und unbefleckt zu bleiben.^pDie frohe Kindheit und die lebhafte Jugend soll lernen, nicht zu den flüchtigen und nichtigen Vergnügungen und zu den Freuden verführerischer Laster abzugleiten, sondern vielmehr eifrig, wenn auch auf rauen und harten Wegen, nach christlicher Vollendung des sittlichen Lebens zu streben. Wir alle können die Vollendung einmal erreichen, wenn wir mit der Gnade des Himmels den ernsten Willen dazu haben, uns angestrengt darum mühen und beten.^pGewiss sind wir nicht alle zum Martyrium berufen, wohl aber zu christlicher Tugend. Die Tugend erfordert Kraft. Wenn sie auch den großen Starkmut nicht erreicht, wie wir ihn bei der engelgleichen Jungfrau sehen, so verlangt die Tugend doch auch eine langanhaltende eifrige, niemals nachlassende Mühe von uns bis ans Ende des Lebens. Auch das kann ein langsames, fortgesetztes Martyrium genannt werden. Dieses durchzuhalten, mahnt unser göttlicher Lehrer Jesus Christus: „Dem Himmelreich wird Gewalt angetan; die Gewalttätigen reißen es an sich“ (Mt 11,12).^pDanach wollen wir alle, auf die Gnade Gottes gestützt, streben. Dazu bewege uns die heilige Jungfrau und Märtyrin Maria Goretti. Das erflehe sie uns auf dem himmlischen Thron, wo sie sich der ewigen Seligkeit erfreut, vom göttlichen Erlöser, damit wir alle, ein jeder in Seiner besonderen Lebenslage, ihren ruhmvollen Spuren im Wollen und im Handeln folgen.",
          "patr_resp1": "Wie schön bist du, Jungfrau Christi;",
          "patr_resp2": "du warst würdig, den Siegeskranz des Herrn zu empfangen.",
          "patr_resp3": "Niemand konnte dir die Palme der Jungfräulichkeit entreißen, keiner dich trennen von der Liebe Christi.",
          "oration": "Gott, du bist die Quelle der Unschuld und liebst den Adel der Keuschheit. Du hast die heilige Maria Goretti früh zur Vollendung geführt und ihren Kampf um die Reinheit mit dem Martyrium gekrönt. Hilf uns auf ihre Fürspreche, treu und fest zu deinen Geboten zu stehen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du bist die Quelle der Unschuld und liebst den Adel der Keuschheit. Du hast die heilige Maria Goretti früh zur Vollendung geführt und ihren Kampf um die Reinheit mit dem Martyrium gekrönt. Hilf uns auf ihre Fürspreche, treu und fest zu deinen Geboten zu stehen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du bist die Quelle der Unschuld und liebst den Adel der Keuschheit. Du hast die heilige Maria Goretti früh zur Vollendung geführt und ihren Kampf um die Reinheit mit dem Martyrium gekrönt. Hilf uns auf ihre Fürspreche, treu und fest zu deinen Geboten zu stehen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "7": {
      "n1": {
        "name": "Willibald und Wunibald: Aus den Eigenfeiern",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Commune-Texte für Hirten der Kirche.",
          "comm_2": "Comm_2",
          "patr_autor": "Hugeburc (8. Jh.)",
          "patr_werk": "Aus den Lebensbeschreibungen der heiligen Willibald und Wunibald.",
          "patr_text": "^hZwei eifrige Seelsorger^pAls Willibald von Rom in jene Provinz (Thüringen) gekommen war, empfing er mit 41 Jahren, schon ein weiser und gesetzter Mann, die heilige Bischofsweihe. Dann begann er, an dem Ort, der Eichstätt heißt, ein Kloster zu erbauen. Dort übte er, wie er es früher gewohnt war, weiter die heilige Zucht klösterlichen Lebens.^pWas er in St. Benedikt (Montecassino) gesehen hatte, und nicht nur dort, sondern in vielen andern Mönchsklöstern, in denen er sich landauf, landab mit Geschick und Klugheit eifrig umsah, das übte er nach deren Vorbild und gab selbst das Beispiel einer heiligmäßigen Lebensform. In allen Gemeinschaften, die ihm unterstanden, förderte er das Streben nach guten Sitten und bot ihnen das mustergültige Vorbild seiner eigenen Lebensweise in seinem Reden, in der Bekämpfung der Fehler, in seiner Frömmigkeit, Geduld und ausgewogenen Enthaltsamkeit.^pVon überall her, aus jenen Gegenden wie auch aus fernen Gebieten, begann ein Zustrom zu seiner heilsamen und gelehrten Predigt. Und wie eine Henne ihre Küchlein unter ihren Flügeln schützt und aufzieht, so führten Willibald und die Kirche als Vater und Mutter im Lauf der Zeit viele unter dem schützenden Schild ihrer Liebe dem Herrn als angenommene Kinder zu.^pSeht, das ist Willibald, der in vielen Kämpfen dem Herrn ein würdiges Volk erworben hat. Was soll ich noch über ihn, meinen Lehrer und euren Erzieher, sagen? Wer ist ihm überlegen an Frömmigkeit, an Demut und Geduld? Wer ist strenger in der Enthaltsamkeit, größer an Milde als er? Wem stand er jemals nach, wenn es darum ging, Trauernde zu trösten, Armen zu helfen oder Nackte zu bekleiden?^pDies alles ist nicht aus Ruhmsucht gesagt, sondern schlicht so, wie ich es gesehen und gehört habe. Es sind Werke der Gnade Gottes, nicht Leistungen eines Menschen; dieser spricht vielmehr mit dem Apostel: „Wer sich rühmen will, der rühme sich des Herrn.“ (1 Kor 1,31).^pWunibald, der heiligmäßige und untadelige Edelmann, lebte nach der Mönchsregel, deren Forderungen er in Gesinnung und Tat erfüllte, und wurde, von Gott mit geistlichen Gaben reich ausgestattet, durch den heiligen Bonifatius zum Priester geweiht.^pDann wurde ihm zunächst die geistliche Leitung von sieben Kirchen (Gemeinden) anvertraut, denen er vorstehen und den Weg zum ewigen Heil bahnen sollte. So nahm er die alten Weissagungen der Propheten und die Erklärungen der heiligen (Väter) zu täglicher beschaulicher Betrachtung und ständiger Schriftlesung zur Hand. Vor allem prägte er die Lebensgeschichte des Herrn nach den Berichten der Evangelien täglich seinem Gedächtnis ein. Und worüber er im Geist meditierte, das verkündete er kraft der Gnade Gottes im Wort und erfüllte es im Werk.^pEr richtete seine Lehre und Mahnungen in gleicher Weise an alle, an Mächtige und Geringe, an Reiche und Arme, das besagt, dass er die göttliche Botschaft in Demut allen gleichermaßen verkündete, ohne Scheu vor den Mächtigen und voll Mitleid mit den Armen; denn „die Natur hat alle Menschen gleich geschaffen, erst durch die Verschiedenheit ihres sittlichen Verhaltens“ wurden sie verschieden (Gregor d. Gr., Reg. Past. II,6).^pGegenüber den Übeltätern war sein Verhalten so differenziert, dass er den Sünder mit strengen Worten zurechtwies, aber Nachsicht und mitleidige Liebe zu ihm im Herzen bewahrte. Allen ist er alles geworden, um alle (für Gott) zu gewinnen (vgl. 1 Kor 9,22).^pSeine große Standhaftigkeit in der Entsagung hielt der ehrwürdige, vollkommene Gottesmann heimlich in den Gedanken seines Herzens verborgen. Er übte sie so, dass sie nach Möglichkeit niemandem bekannt wurde als allein dem Blick des höchsten Richters, vor dessen Augen alles nackt und bloß liegt (vgl. Hebr 4,13).^pAnderseits kannte sein demütiger und gottergebener Geist nie einen Stolz auf die Verdienste seiner Tugenden, noch menschlich-überhebliche Prahlerei, noch verfiel er in Selbstgefälligkeit, wenn er gelobt wurde. Er ließ sich nicht zum Zorn hinreißen, wenn schlechte Menschen ihn beschimpften, außer wenn er das verderbliche Treiben der Unverschämten trotz beschwörender Mahnungen nicht bessern konnte.",
          "patr_resp1": "Nicht wer sich selbst empfiehlt, ist anerkannt, sondern der, den der Herr empfiehlt.",
          "patr_resp2": "Wer sich also rühmen will, der rühme sich des Herrn.",
          "patr_resp3": "Selig, die arm sind vor Gott; denn ihnen gehört das Himmelreich.",
          "oration": "Gott, unser Heil, durch die Predigt und das apostolische Wirken der heiligen Willibald und Wunibald hast du deiner Kirche viele Menschen zugeführt. Gib uns auf ihre Fürsprache neue Kraft und mehre den Glauben und die Heiligkeit in deinem Volk. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Willibald und Wunibald: Aus den Eigenfeiern",
          "genitiv": "Genitiv",
          "comm_1": "Commune-Texte für Hirten der Kirche.",
          "comm_2": "Comm_2",
          "oration": "Gott, unser Heil, durch die Predigt und das apostolische Wirken der heiligen Willibald und Wunibald hast du deiner Kirche viele Menschen zugeführt. Gib uns auf ihre Fürsprache neue Kraft und mehre den Glauben und die Heiligkeit in deinem Volk. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Willibald und Wunibald: Aus den Eigenfeiern",
          "genitiv": "Genitiv",
          "comm_1": "Commune-Texte für Hirten der Kirche.",
          "comm_2": "Comm_2",
          "oration": "Gott, unser Heil, durch die Predigt und das apostolische Wirken der heiligen Willibald und Wunibald hast du deiner Kirche viele Menschen zugeführt. Gib uns auf ihre Fürsprache neue Kraft und mehre den Glauben und die Heiligkeit in deinem Volk. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Willibald: Aus dem Stundenbuch",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Hugeburc (8. Jh.)",
          "patr_werk": "Aus der Vita des heiligen Willibald.",
          "patr_text": "^hDie Liebe zum Herrn machte ihn zum Pilger auf Erden^pVon Jericho kam Willibald nach Jerusalem, an jene Stätte, wo das heilige Kreuz des Herrn aufgefunden worden war. Dort steht jetzt eine Kirche, an dem Ort, welcher Kalvarien-Stätte heißt. Diese befand sich früher außerhalb Jerusalems. Dort liegt gleich daneben jener Garten, in dem das Grab des Erlösers war. Das Grab war in einen Felsen gemeißelt. Und dieser Fels steht über der Erde und ist unten viereckig und oben schmal. Jetzt steht auf der Spitze des Grabmals ein Kreuz. Darüber ist jetzt ein wundervoller Dom erbaut. An der Ostseite ist in jenem Felsen des Grabes eine Tür angebracht, durch welche die Menschen in das Grabmal eintreten, um zu beten. Darin befindet sich die Ruhestätte, wo der Leib des Herrn lag, auf der rechten Seite für den eintretenden Besucher. Vor der Türe des Grabes liegt der große viereckige Stein, den der Engel vom Eingang des Grabes wegwälzte.^pVon dort kam Willibald zur Kirche auf dem Berg selber, wo der Herr in den Himmel aufgefahren ist. Jene Kirche ist oben offen und ohne Dach. Dort stehen zwei Säulen im Innern der Kirche, gegenüber der Nordwand und der Wand der Südseite. Diese sind zum Gedächtnis und Zeichen für jene zwei Männer, welche sagten: „Ihr Männer von Galiläa, was steht ihr da und schaut zum Himmel empor?“ (Apg 1,11)^pAuf dem Schiff kam Willibald in die Stadt Konstantinopel, wo drei Heilige: Andreas, Timotheus und Lukas, der Evangelist, in einem Altar ruhen. Johannes Chrysostomus, der berühmte Goldmund, ruht dort vor einem Altar, wo der Priester steht, wenn er die Messe feiert. Hier war unser Bischof zwei Jahre. Er hatte seine Zelle in der Kirche, damit er täglich hinblicken konnte, wo die Heiligen ruhten.^pAuf dem Monte Cassino war er im ersten Jahr nach seiner Ankunft Küster der Kirche; im zweiten Jahr war er Dekan im Kloster. Danach war er acht Jahre lang Pförtner in zwei Klöstern. Damals ließ Papst Gregor III. Willibald zu sich kommen und eröffnete ihm, dass der heilige Bonifatius ihn gebeten habe, Willibald für das Volk der Franken abzuordnen. Sogleich antwortete Willibald, er werde der Aufforderung nachkommen und nicht bloß dorthin gehen, sondern überallhin, an jeden Ort der Welt, wohin ihn der Papst zu schicken geruhe.^pIm Jahre 740 kam er zu Bonifatius, der ihn nach Eichstätt sandte, damit er sehe, wie es ihm gefalle, Bonifatius übergab Willibald das Gebiet, das noch unbesiedelt war, so dass kein Haus dort war außer einer kleinen Marienkirche. Am 22. Juli weihte Bonifatius Willibald zum Priester und nach einem Jahr in Thüringen zum Bischof. Damals war Willibald 41 Jahre alt.",
          "patr_resp1": "Wir rühmen uns des Kreuzes unseres Herrn Jesus Christus.",
          "patr_resp2": "In ihm ist uns Heil geworden und Auferstehung und Leben.",
          "patr_resp3": "Durch ihn sind wir erlöst und befreit.",
          "oration": "Allmächtiger Gott, aus Liebe zu deinem Sohn hat der heilige Willibald die Stätten des Lebens Christi aufgesucht und als Glaubensbote unserem Volk das Evangelium verkündet. Hilf uns, im Licht deiner Wahrheit zu leben und treu zu bleiben im Glauben an Jesus Christus, deinen Sohn, unseren Herrn und Gott, der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Laudes": {
          "name": "Willibald: Aus dem Stundenbuch",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, aus Liebe zu deinem Sohn hat der heilige Willibald die Stätten des Lebens Christi aufgesucht und als Glaubensbote unserem Volk das Evangelium verkündet. Hilf uns, im Licht deiner Wahrheit zu leben und treu zu bleiben im Glauben an Jesus Christus, deinen Sohn, unseren Herrn und Gott, der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Vesper": {
          "name": "Willibald: Aus dem Stundenbuch",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, aus Liebe zu deinem Sohn hat der heilige Willibald die Stätten des Lebens Christi aufgesucht und als Glaubensbote unserem Volk das Evangelium verkündet. Hilf uns, im Licht deiner Wahrheit zu leben und treu zu bleiben im Glauben an Jesus Christus, deinen Sohn, unseren Herrn und Gott, der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      }
    },
    "8": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Caesarius von Arles († 542)",
          "patr_werk": "Aus einer Predigt über die Aufgabe des priesterlichen Amtes.",
          "patr_text": "^hVerkünde allen das Wort Gottes^pEine unendlich schwere Bürde lastet auf den Schultern aller Priester. Wenn wir das beherzigen, wird uns bewusst, wie schwer die Worte wiegen, mit denen der Herr durch den Propheten besonders die Priester aufschreckt: „Rufe, halte dich nicht zurück! Lass deine Stimme ertönen wie eine Posaune!“ (Jes 58,1) Und weiter: „Wenn du den Schuldigen warnst, hast du dein Leben gerettet. Wenn du ihn aber nicht warnst, wird er seiner Sünde wegen sterben, von dir aber fordere ich Rechenschaft für sein Blut“ (vgl. Ez 3,19.18). Und der Apostel sagt: „Denkt daran, dass ich drei Jahre lang Tag und Nacht nicht aufgehört habe, unter Tränen jeden einzelnen zu ermahnen“ (Apg 20,31).^pWer muss über diese Worte nicht zutiefst erschrecken? Um vor Gott zu bestehen, verkündete Paulus Tag und Nacht den ihm anvertrauten Völkern das Wort des Herrn. Dürfen wir es da versäumen, den Schafen des Herrn das Salz der Lehre zu reichen?^pSeiner Verantwortung bewusst, sagt daher der Apostel Paulus in diesem Zusammenhang: „Ich bin an keines Menschen Blut schuldig“ (Apg 20,27). An welchem Blut fühlt sich der Apostel unschuldig? An dem, das der Prophet meint, wenn er, um uns in heilsame Furcht zu versetzen, warnt: „Wenn du den Schuldigen nicht warnst, werde ich von dir Rechenschaft fordern für sein Blut“ (vgl. Ez 3,18). Das Blut der Seele, nicht des Leibes!^pNach den Worten „Ich bin an keines Menschen Blut schuldig“ fügt er schließlich hinzu, als ob ihn jemand gefragt hätte, an welchem Blut er unschuldig sei: „Ich habe mich der Pflicht nicht entzogen, euch den ganzen Willen Gottes zu verkünden“ (Apg 20,27). Einer geistlichen und himmlischen Posaune vergleichbar, ermahnt er daher seinen Schüler in banger Sorge: „Ich beschwöre dich bei Gott und bei Christus Jesus, dem kommenden Richter der Lebenden und der Toten, bei seinem Erscheinen und bei seinem Reich“ (2 Tim 4,1). Wie wenn man ihn gefragt hätte, was er mit dieser beschwörenden und furchterregenden Einleitung sagen wolle, fügt er sogleich hinzu: „Verkünde das Wort, tritt dafür ein, ob man es hören will oder nicht!“ (2 Tim 4,2) Denen, die wollen, muss man es geben; denen, die nicht wollen, aufdrängen.^pDas möchte ich euch deshalb so ans Herz legen, weil wir sonst fürchten müssen, dass sich manche von den uns Anvertrauten am Gerichtstag gegen uns erheben und uns vorwerfen, wir hätten sie weder vom Bösen abgehalten noch zum Guten angespornt. Auch an einer anderen Stelle sagt der Apostel: „Lies ihnen eifrig (aus der Schrift) vor, ermahne und belehre sie!“ (vgl. 1 Tim 4,13) Ja, sein Ruf erschreckt uns, wenn es heißt: „Keiner, der in den Krieg zieht, lässt sich in Alltagsgeschäfte verwickeln, denn er will, dass der Heerführer mit ihm zufrieden ist“ (2 Tim 2,4). In heilsame Furcht sollen uns daher auch diese Worte versetzen: „Über die Hindernisse der Welt sind sie ins Unglück gestürzt“ (vgl. 1 Tim 6,9).^pGewiss, die Erde nimmt uns in Anspruch: wir sind ihr verpflichtet, wir können uns ihr nie ganz entziehen. Aber soweit wir können, wollen wir uns davon freihalten, damit wir immer für die Lesung Zeit haben und die Weisung befolgen können, die der Herr an den heiligen Petrus richtete, als er zum dritten Mal zu ihm sagte: „Weide meine Schafe!“ (Joh 21,16) Die Bischöfe heißen nämlich deshalb „Wächter“, weil sie wie auf einem Turm eine höhere Stelle einnehmen und weil sie auf den Stufen des Altares stehen. Auf diesem Platz tragen sie Verantwortung für die Stadt und den Acker Gottes, das heißt: für die ganze Kirche.",
          "patr_resp1": "Sie haben für den Herrn ihr Blut vergossen, sie haben Christus geliebt im Leben und sind ihm gleich geworden im Tod;",
          "patr_resp2": "darum haben sie den Siegeskranz erlangt.",
          "patr_resp3": "Ein Geist und ein Glaube beseelte sie.",
          "oration": "Allmächtiger und barmherziger Gott, durch die Missionsarbeit des heiligen Kilian und seiner Gefährten hast du im fränkischen Land den christlichen Glauben grundgelegt. Auf die Fürsprache dieser Glaubensboten festige uns alle in der Treue zu unserem Herrn Jesus Christus, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger und barmherziger Gott, durch die Missionsarbeit des heiligen Kilian und seiner Gefährten hast du im fränkischen Land den christlichen Glauben grundgelegt. Auf die Fürsprache dieser Glaubensboten festige uns alle in der Treue zu unserem Herrn Jesus Christus, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger und barmherziger Gott, durch die Missionsarbeit des heiligen Kilian und seiner Gefährten hast du im fränkischen Land den christlichen Glauben grundgelegt. Auf die Fürsprache dieser Glaubensboten festige uns alle in der Treue zu unserem Herrn Jesus Christus, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      }
    },
    "9": {
      "n1": {
        "name": "Augustinus Zhao Rong und Gefährten",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Laudes": {
          "name": "Augustinus Zhao Rong und Gefährten",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Vesper": {
          "name": "Augustinus Zhao Rong und Gefährten",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        }
      },
      "n2": {
        "name": "Übertragung des hl. Bonifatius",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Commune: ein Märtyrer.",
          "comm_2": "Comm_2",
          "patr_autor": "Bonifatius († 754)",
          "patr_werk": "Aus einem Brief an den hl. Papst Zacharias.",
          "patr_text": "^hDes Vaters Segen festigt die Häuser der Kinder^pDem hochwürdigsten Vater und geliebtesten Herrn, dem in Ehrfurcht zu verehrenden Lehrer Zacharias, der mit dem Vorzug apostolischer Würde ausgestattet und durch die Inful des Apostolischen Stuhles ausgezeichnet ist, Bonifatius, euer geringster Diener, obgleich unwürdig und letztrangig, dennoch euer Legat in Germanien, in tiefster Ergebenheit herzlichen Gruß unverwelklicher Liebe in Christus.^pMit inständigem Flehen bitte ich eure väterliche und huldvolle Heiligkeit, nehmt diesen meinen Priester namens Lullus, den Überbringer meines Briefes, in Güte gnädig auf. Er hat nämlich geheime Aufträge von mir, die er allein eurer Huld eröffnen, einiges in mündlicher Rede vortragen, anderes in schriftlicher Aufzeichnung vorlegen soll.^pEs liegt ein Waldgebiet in weiter, menschenleerer Einsamkeit, mitten zwischen den Völkern, denen wir gepredigt haben. Dort haben wir ein Kloster gegründet und Mönche angesiedelt, die nach der Regel des heiligen Vaters Benediktus leben, Männer von strenger Enthaltsamkeit, ohne Fleisch und Wein, ohne Met und Knechte, die sich begnügen mit dem, was sie mit ihren eigenen Händen erarbeiten.Ich habe diesen Platz in rechtmäßigem Bemühen durch fromme und gottesfürchtige Männer erworben, besonders durch Karlmann, der damals fränkischer Hausmeier war, und habe ihn zu Ehren des heiligen Erlösers geweiht.^pMit eurer väterlichen Erlaubnis habe ich mir vorgenommen, an diesem Ort meinen vom Alter ermatteten Leib für kurze Zeit, wenn auch nur wenige Tage, sich erholen und nach dem Tod ruhen zu lassen. Im Umkreis um diesen Ort wohnen nämlich vier Völker, denen wir mit Gottes Gnade die Botschaft Christi verkündet haben; diesen kann ich mit der Unterstützung eurer Fürbitte, solange ich lebe und geistig imstande bin, nützlich sein.^pIch habe den Wunsch, mit Hilfe eurer Gebete und mit der Gnade Gottes in enger Gemeinschaft mit der römischen Kirche zu bleiben, in der Erfüllung eures Auftrages unter den germanischen Stämmen, zu denen ich gesandt bin, auszuharren und eurem Gebot zu gehorchen, wie geschrieben steht: „Hört, geliebte Söhne, was das Recht des Vaters ist, und handelt danach, damit es euch gut geht“; und weiter: „Wer den Vater achtet, wird lange leben“; und wiederum: „Ehre deinen Vater, damit der Segen vom Herrn über dich kommt, und der Segen des Vaters festigt die Häuser der Kinder.“ (vgl. Sir 3,1.6.8–9 = 3,2.7.9–11 Vg.)",
          "patr_resp1": "Jene sind die ehrwürdigen Männer, deren Hoffnung nicht vergeht. Ihr Ruhm wird niemals ausgelöscht.",
          "patr_resp2": "Ihr Leib ist in Frieden bestattet.",
          "patr_resp3": "Von ihrer Weisheit erzählt die Gemeinde, ihr Lob verkündet das versammelte Volk.",
          "oration": "Herr und Gott, du schenkst uns die Freude, die Grabstätte des heiligen Bonifatius zu besitzen. Festige in uns den Glauben an die Auferstehung und gib uns einst Anteil an der ewigen Herrlichkeit. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Übertragung des hl. Bonifatius",
          "genitiv": "Genitiv",
          "comm_1": "Commune: ein Märtyrer.",
          "comm_2": "Comm_2",
          "oration": "Herr und Gott, du schenkst uns die Freude, die Grabstätte des heiligen Bonifatius zu besitzen. Festige in uns den Glauben an die Auferstehung und gib uns einst Anteil an der ewigen Herrlichkeit. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Übertragung des hl. Bonifatius",
          "genitiv": "Genitiv",
          "comm_1": "Commune: ein Märtyrer.",
          "comm_2": "Comm_2",
          "oration": "Herr und Gott, du schenkst uns die Freude, die Grabstätte des heiligen Bonifatius zu besitzen. Festige in uns den Glauben an die Auferstehung und gib uns einst Anteil an der ewigen Herrlichkeit. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "10": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Ambrosius († 397)",
          "patr_werk": "Aus der Trauerrede auf Kaiser Theodosius den Großen.",
          "patr_text": "^hNehmt mein Joch auf euch!^pDas Kreuz des Herrn zog die Augen der Könige nach oben, so dass sie himmelwärts Christus suchten. Sie legten ab den Zaum der Gottlosigkeit, legten an den Zügel der Gottesfürchtigkeit und des Glaubens und folgten dem, der sie einlud: „Nehmt mein Joch auf euch! Denn mein Joch drückt nicht, und meine Last ist leicht“ (Mt 11,29.30). Das Prophetenwort hat sich also bewahrheitet: „Könige wandern zu deinem strahlenden Glanz“ (Jes 60,3). Ja gewiss, sie ‚wandern‘ nicht mehr in der Rüstung ihrer Kriegswaffen, sondern ihrer Verdienste; nicht mehr mit dem Purpurmantel angetan, sondern ins Gewand der Glorie gehüllt.^pWenn sie schon hier ihre Freude daran hatten, viele freizusprechen, wieviel mehr wird sie dort die Rückerinnerung an ihre vielen Begnadigungen mit Freude erfüllen? Dort freuen sie sich des strahlenden Lichtes, dort haben sie weit bessere Wohnungen erlangt, als sie hier besaßen. Sie können sprechen: „Israel, wie groß ist die Wohnung Gottes, wie weit das Gebiet seiner Herrschaft!“ (Bar 3,24)^pNachdem sie die denkbar größten Mühen und Beschwerden überstanden, können sie zueinander sprechen: „Gut ist es für den Mann, ein Joch zu tragen in der Jugend. Er sitze einsam und schweige, wenn der Herr es ihm auflegt“ (Klgl 3,27–28). Nur wer das schwere Joch von Jugend auf getragen, erfreut sich nämlich nachmals der Ruhe. Es wird ihm ein besonderer Ruheplatz zum Besitz angewiesen, und er jubelt: „Du allein, Herr, lässt mich sorglos ruhen“ (Ps 4,9).",
          "patr_resp1": "Müht euch mit Furcht und Zittern um euer Heil.",
          "patr_resp2": "Gott bewirkt in euch das Wollen und das Vollbringen.",
          "patr_resp3": "So spricht der Herr: Getrennt von mir könnt ihr nichts tun.",
          "oration": "Herr, unser Gott, höre auf die Fürsprache der heiligen Könige Knud, Erich und Olaf, die in ihren Ländern die Botschaft von Christus verbreitet haben. Gib, dass wir mit den Völkern des Nordens im Glauben an Christus verbunden bleiben, und stärke in uns allen die Bereitschaft zur Einheit, wie du sie willst. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, höre auf die Fürsprache der heiligen Könige Knud, Erich und Olaf, die in ihren Ländern die Botschaft von Christus verbreitet haben. Gib, dass wir mit den Völkern des Nordens im Glauben an Christus verbunden bleiben, und stärke in uns allen die Bereitschaft zur Einheit, wie du sie willst. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, höre auf die Fürsprache der heiligen Könige Knud, Erich und Olaf, die in ihren Ländern die Botschaft von Christus verbreitet haben. Gib, dass wir mit den Völkern des Nordens im Glauben an Christus verbunden bleiben, und stärke in uns allen die Bereitschaft zur Einheit, wie du sie willst. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "12": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        }
      }
    },
    "13": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Adalbert von Bamberg (12. Jh.)",
          "patr_werk": "Aus einer alten Lebensbeschreibung Kaiser Heinrichs.",
          "patr_text": "^hEr verschaffte der Kirche das Gut des Friedens und der Ruhe^pZum König gekrönt, gab sich der heilige Heinrich als Diener Gottes nicht zufrieden mit den Sorgen für das zeitliche Königtum. Um die Krone der Unsterblichkeit zu erlangen, entschloss er sich, Kriegsdienst zu leisten für den höchsten König, dem zu dienen herrschen bedeutet. Er verwandte große Sorgfalt darauf, den Glauben und den Dienst Gottes auszubreiten, und begann, die Kirchen mit reichen Gütern auszustatten und ihre Kunstschätze zu mehren. Er gründete in seinem Besitztum das Bistum Bamberg und weihte es den Apostelfürsten Petrus und Paulus und dem heiligen Märtyrer Georg. Er übergab es durch Sonderrecht der römischen Kirche, um, von Gott erleuchtet, auch dem obersten Bischofssitz Ehre zu erweisen und seine Gründung Bamberg unter dieser hohen Schutzherrschaft zu festigen und zu sichern.^pDamit aber deutlich wird, mit welcher Umsicht dieser heilige Herrscher auch für die kommenden Zeiten auf Frieden und Ruhe für seine neue Kirche bedacht war, fügen wir hier einen Bestätigungsbrief ein:^pHeinrich, König durch das Erbarmen der göttlichen Vorsehung, an alle Söhne der Kirche, künftige wie gegenwärtige. Durch heilbringende Weisung der Heiligen Schrift werden wir gelehrt und gemahnt, die zeitlichen Güter zu lassen und irdische Bequemlichkeit zurückzustellen, um die Wohnungen im Himmel zu erstreben, die ewig dauern. Der Besitz irdischer Herrlichkeit ist flüchtig und wertlos, wenn wir in ihr nicht etwas von der Ewigkeit des Himmels sehen. In seinem Erbarmen hat Gott dem Menschengeschlecht ein nützliches Heilmittel bereitgestellt, als er den irdischen Besitz zum Kaufpreis für den Erwerb des himmlischen Vaterlandes machte.^pDieses Erbarmens Gottes sind Wir eingedenk und wissen sehr wohl, dass Wir ohne Unser Verdienst durch göttliche Huld zur Würde des Königtums erhoben wurden. Darum hielten Wir es für richtig, nicht nur die von Unsern Vorgängern errichteten Kirchen zu fördern, sondern zur größeren Ehre Gottes auch neue zu erbauen und sie zu ehren durch Geschenke, die von Unserer Dankbarkeit und Frömmigkeit zeugen. Darum waren Unsere Ohren nicht taub für die Gebote des Herrn. Vielmehr hörten Wir hin und gehorchten den Anregungen Gottes. Die Uns von Gott freigebig verliehenen Schätze möchten Wir im Himmel hinterlegen, wo keine Diebe einbrechen und sie stehlen, wo weder Motte noch Wurm sie zerstören (vgl. Mt 6,19). Während Wir der Schätze gedenken, die Wir im Himmel gesammelt haben (vgl. ebd.), möchte Unser Herz mehr und mehr dort in Sehnsucht und Liebe verweilen.^pDaher wollen Wir, dass es allen Gläubigen bekannt sei, dass Wir aus Unserem väterlichen Erbe den Ort Bamberg zum hohen Sitz eines Bischofs erhoben haben, damit dort das feierliche Gedächtnis für Uns und Unsere Eltern gehalten und unaufhörlich für alle Rechtgläubigen das heilbringende Opfer gefeiert werde.",
          "patr_resp1": "Der Herr gab ihm Ehre und bewahrte ihn vor seinen Feinden.",
          "patr_resp2": "Er verlieh ihm die ewige Herrlichkeit.",
          "patr_resp3": "Der Herr führte den Gerechten auf seinen Wegen und zeigte ihm das Reich Gottes.",
          "oration": "Allmächtiger Gott, du hast dem heiligen Kaiser Heinrich und seiner Gemahlin Kunigunde irdische Macht anvertraut und ihr Wirken mit der ewigen Herrlichkeit belohnt. Gib auch uns die Gnade, dass wir unsere Aufgabe in dieser Welt erfüllen und Erben deines Reiches werden. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, du hast dem heiligen Kaiser Heinrich und seiner Gemahlin Kunigunde irdische Macht anvertraut und ihr Wirken mit der ewigen Herrlichkeit belohnt. Gib auch uns die Gnade, dass wir unsere Aufgabe in dieser Welt erfüllen und Erben deines Reiches werden. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, du hast dem heiligen Kaiser Heinrich und seiner Gemahlin Kunigunde irdische Macht anvertraut und ihr Wirken mit der ewigen Herrlichkeit belohnt. Gib auch uns die Gnade, dass wir unsere Aufgabe in dieser Welt erfüllen und Erben deines Reiches werden. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "14": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_werk": "Aus einer Lebensbeschreibung des heiligen Kamillus – verfasst von einem seiner Gefährten.",
          "patr_text": "^hDer Diener Christi und der Brüder^pLasst mich mit der heiligen Liebe beginnen; sie ist die Wurzel und Vermittlerin aller Tugenden. Sie war Kamillus mehr vertraut als anderen Menschen. Er war vom Feuer dieser heiligen Tugend entflammt, nicht bloß von der Liebe zu Gott, sondern auch von der zu den Mitmenschen, vor allem zu den Kranken. Er brauchte die Kranken nur anzuschauen, und schon war er ihnen von Herzen zugetan, schon vergaß er alles Glück und alle irdischen Freuden und Empfindungen. Wenn er einem Kranken diente, gleichviel welchem, schien er sich in Liebe förmlich aufzureiben und zu verzehren. Er hätte all ihre Leiden und jedes denkbare Übel auf sich genommen, wären damit ihre Schmerzen zu lindern oder ihre Krankheiten zu heilen gewesen.^pSo lebhaft sah er in ihnen Christus, dass er oft, wenn er ihnen Speise reichte, im Geist von dem Gedanken erfasst wurde, sie seien Christus. So sehr überkam ihn das, dass er von ihnen Gnade und Verzeihung der Sünden erbat. Darum stand er mit solcher Ehrfurcht da, als befinde er sich wirklich und eigentlich in der Gegenwart seines Herrn. Auf keinen Gegenstand kam er in seinen Predigten häufiger und glühender zu sprechen als auf die heilige Liebe. Er hätte sie gern allen Sterblichen ins Herz gepflanzt.^pUm seine Ordensbrüder für diese wichtigste aller Tugenden zu begeistern, pflegte er ihnen die Worte Jesu Christi einzuschärfen: „Ich war krank, und ihr habt mich besucht“ (Mt 25,36). Als wären diese Worte in sein Herz eingegraben, so oft wiederholte er sie.^pSo groß war die Liebe des heiligen Kamillus, und so umfassend, dass er nicht nur die Kranken und Sterbenden, sondern alle Armen und Unglücklichen mit seiner großen Güte und seinem Wohlwollen umfing. Schließlich war sein Herz so voller Freundlichkeit zu den Bedürftigen, dass er zu sagen pflegte: ‚Gäbe es keine Armen in der Welt, müssten sich die Menschen aufmachen, welche zu suchen. Sie müssten die Erde nach ihnen aufgraben, um Gelegenheit zu finden, ihnen Gutes zu tun und Barmherzigkeit zu erweisen.‘",
          "patr_resp1": "Nehmt euch der Kranken an und seid für alle um das Gute bemüht;",
          "patr_resp2": "denn das will Gott von euch, die ihr Christus Jesus gehört.",
          "patr_resp3": "Nehmt einander an, wie auch Christus euch angenommen hat, zur Ehre Gottes,",
          "oration": "Barmherziger Gott, du hast dem heiligen Kamillus eine außergewöhnliche Liebe zu den Kranken und Sterbenden geschenkt. Sieh auf sein heiliges Leben und gib auch uns den Geist der Barmherzigkeit, damit wir dir in unseren Mitmenschen dienen und in der Stunde unseres Todes voll Zuversicht zu dir hinübergehen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Barmherziger Gott, du hast dem heiligen Kamillus eine außergewöhnliche Liebe zu den Kranken und Sterbenden geschenkt. Sieh auf sein heiliges Leben und gib auch uns den Geist der Barmherzigkeit, damit wir dir in unseren Mitmenschen dienen und in der Stunde unseres Todes voll Zuversicht zu dir hinübergehen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Barmherziger Gott, du hast dem heiligen Kamillus eine außergewöhnliche Liebe zu den Kranken und Sterbenden geschenkt. Sieh auf sein heiliges Leben und gib auch uns den Geist der Barmherzigkeit, damit wir dir in unseren Mitmenschen dienen und in der Stunde unseres Todes voll Zuversicht zu dir hinübergehen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "16": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Leo der Große († 461)",
          "patr_werk": "Aus einer Weihnachtspredigt.",
          "patr_text": "^hMaria empfing in ihrem Geist, bevor sie in ihrem Leib empfing^pEine Jungfrau aus dem königlichen Geschlecht Davids wird erwählt. Sie wird schwanger von heiliger Frucht. Sie sollte diesen Sohn, der zugleich Gott ist und Mensch, in ihrem Geist empfangen, bevor sie ihn in ihrem Leib empfing.^pDamit sie nicht in Unkenntnis des göttlichen Ratschlusses über die ungewöhnlichen Vorgänge erschrecke, erfuhr sie aus dem Gespräch mit dem Engel, was der Heilige Geist in ihr wirken sollte. So denkt sie denn nicht an die Verletzung ihrer Keuschheit, obwohl sie schon bald Gott gebären sollte. Wie sollte sie der nie gehörten Art der Empfängnis misstrauen, da das versprochene Ereignis doch durch die Kraft des Allerhöchsten gewirkt werden wird?^pDas Vertrauen ihres Glaubens wird durch ein Wunder gestärkt, das vorher geschehen soll: Elisabet wird fruchtbar gegen alle Erwartung. Maria soll nicht daran zweifeln, dass Gott, der der Unfruchtbaren die Kraft gibt zu empfangen, sie auch der Jungfrau verleihen wird.^pDas Wort Gottes also, Gott selbst, der Sohn Gottes, der ‚im Anfang bei Gott war, durch den alles geworden ist und ohne den nichts geworden ist‘ (vgl. Joh 1,1.3), er ist Mensch geworden, um die Menschen vom ewigen Tod zu befreien. Er ließ sich ohne Minderung seiner Herrlichkeit dazu herab, unsere Niedrigkeit anzunehmen. Er blieb, was er war, und nahm an, was er nicht war, und vereinigte so die Knechtsgestalt mit der Gottesgestalt, in der er dem Vater gleich war.^pBeide Naturen verband er so eng, dass die Verherrlichung das Niedere nicht verschlang und dass die Annahme des Niederen das Höhere nicht minderte. Beide Naturen behielten ihre Besonderheit und vereinigten sich zu einer Person. So wurde die Niedrigkeit von der Majestät angenommen, die Schwachheit von der Kraft, die Sterblichkeit von der Ewigkeit.^pUm die Schuld, in der wir stehen, abzuzahlen, wurde die unverletzliche Natur mit der leidensfähigen verbunden; der wahre Gott mit dem wahren Menschen zur Einheit des Herrn zusammengefügt. So konnte, wie es für unser Heil angemessen war, der ‚eine‘ und gleiche ‚Mittler zwischen Gott und den Menschen‘ (vgl. 1 Tim 2,6) in der einen Natur sterben und durch die andere auferstehen. Mit Recht fügte die Geburt des Heils der Unversehrtheit der Jungfrau keinen Schaden zu; denn die Geburt der Wahrheit bewahrte die Keuschheit.^pMeine Lieben, für Christus, die Kraft und Weisheit Gottes, ziemte sich eine solche Geburt, durch die er sich das Menschsein anpasste und uns durch die Gottheit überragte. Denn wäre er nicht wahrer Gott, könnte er uns keine Heilung bringen, und wäre er nicht wahrer Mensch, könnte er uns nicht Vorbild sein.^pDarum jubeln die Engel bei der Geburt des Herrn und singen: „Ehre sei Gott in der Höhe!“, und sie verkünden: „Friede auf Erden den Menschen seiner Gnade“ (vgl. Lk 2,24). Denn sie sehen, wie aus allen Völkern der Welt das himmlische Jerusalem erbaut wird. Wie sehr muss sich der Mensch in seiner Erniedrigung freuen über diese unfassbare Liebe Gottes, wenn schon die Engel in der Höhe darüber voll Freude jubeln?",
          "patr_resp1": "Selig preisen mich alle Geschlechter, denn Großes hat der Herr an mir getan.",
          "patr_resp2": "Heilig ist sein Name.",
          "patr_resp3": "Von Geschlecht zu Geschlecht währt sein Erbarmen über jenen, welche ihn fürchten.",
          "oration": "Großer und heiliger Gott, du hast den Berg Karmel schon im Alten Bund durch das Wirken der Propheten ausgezeichnet und ihn auch im Neuen Bund zu einer Stätte der Beschauung erwählt, zu einem Heiligtum der jungfräulichen Mutter Maria. Gib uns auf ihre Fürsprache die Freude, im Gebet deine Nähe zu erfahren. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Ev": "Im Gebete verlangte ich nach Weisheit,^lund wie die erste Frucht des Weinstocks^lerfreute sie mein Herz.",
          "oration": "Großer und heiliger Gott, du hast den Berg Karmel schon im Alten Bund durch das Wirken der Propheten ausgezeichnet und ihn auch im Neuen Bund zu einer Stätte der Beschauung erwählt, zu einem Heiligtum der jungfräulichen Mutter Maria. Gib uns auf ihre Fürsprache die Freude, im Gebet deine Nähe zu erfahren. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Ev": "Maria hörte Gottes Wort^lund bewahrte es in ihrem Herzen.",
          "oration": "Großer und heiliger Gott, du hast den Berg Karmel schon im Alten Bund durch das Wirken der Propheten ausgezeichnet und ihn auch im Neuen Bund zu einer Stätte der Beschauung erwählt, zu einem Heiligtum der jungfräulichen Mutter Maria. Gib uns auf ihre Fürsprache die Freude, im Gebet deine Nähe zu erfahren. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "20": {
      "n1": {
        "name": "Margareta",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Laktanz (4. Jh.)",
          "patr_werk": "Aus dem „Abriß der göttlichen Unterweisungen“.",
          "patr_text": "^hKraft aus der Hoffnung auf das ewige Leben^pWenn mit dem Tode alles zu Ende ist, dann handelt töricht, wer das Leben des Mitmenschen zum Schaden seines eigenen schont. Wenn der Tod die Seele auslöscht, so braucht man sich nur um ein langes und gemächliches Leben zu bemühen; wenn uns aber nach dem Tode ein Leben erwartet, das ewig und glückselig ist, dann wird der Gerechte und Weise dieses leibliche Leben mit allen Gütern der Erde geringschätzen, weil er weiß, welche Belohnung er von Gott empfangen soll.^pWenn es den Menschen auch albern und töricht erscheint, lieber Marter und Tod auf sich zu nehmen, als den Göttern zu opfern und heil und wohlbehalten davonzukommen, so wollen wir uns mit aller Kraft und aller Geduld bemühen, Gott die Treue zu halten. Der Tod darf uns nicht schrecken noch der Schmerz uns beugen; wir müssen die Kraft des Geistes und die Standhaftigkeit unerschütterlich bewahren.^pMögen die uns dann Toren schelten, die selbst die größten Toren sind: sie, die blind und stumpf und unvernünftigen Tieren gleich sind; sie, die nicht einsehen, dass es zum Tode führt, den lebendigen Gott zu verlassen und sich vor irdischen Dingen in den Staub zu werfen; sie, die nicht wissen, dass ewige Strafe auf jene wartet, die empfindungslose Gebilde anbeten, und dass der bereitwilligen Übernahme von Martern und Tod für den Dienst und die Ehre des wahren Gottes das immerwährende Leben folgt.",
          "patr_resp1": "Ich habe den guten Kampf gekämpft, den Lauf vollendet, die Treue gehalten.",
          "patr_resp2": "Schon jetzt liegt für mich der Kranz der Gerechtigkeit bereit.",
          "patr_resp3": "Ich sehe alles als Verlust an, weil die Erkenntnis Christi Jesu, meines Herrn, alles übertrifft. Christus will ich erkennen und die Gemeinschaft mit seinen Leiden; sein Tod soll mich prägen.",
          "oration": "Herr, unser Gott, du offenbarst uns in der Bedrängnis die Macht deines Erbarmens. Von dir empfing die heilige Margareta die Gnade, das Martyrium zu bestehen. Stärke auch uns mit deiner Kraft und lass uns in aller Not auf deine Hilfe vertrauen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Margareta",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, du offenbarst uns in der Bedrängnis die Macht deines Erbarmens. Von dir empfing die heilige Margareta die Gnade, das Martyrium zu bestehen. Stärke auch uns mit deiner Kraft und lass uns in aller Not auf deine Hilfe vertrauen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Margareta",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, du offenbarst uns in der Bedrängnis die Macht deines Erbarmens. Von dir empfing die heilige Margareta die Gnade, das Martyrium zu bestehen. Stärke auch uns mit deiner Kraft und lass uns in aller Not auf deine Hilfe vertrauen. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Apollinaris",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Laudes": {
          "name": "Apollinaris",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Vesper": {
          "name": "Apollinaris",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        }
      }
    },
    "21": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Laurentius von Brindisi († 1619)",
          "patr_werk": "Aus einer Fastenpredigt.",
          "patr_text": "^hDie Predigt ist eine apostolische Aufgabe^pWollen wir mit den Engeln des Himmels und den seligen Geistern, die wie wir nach dem Abbild und der Gestalt Gottes geschaffen sind, ein geistliches Leben führen, so brauchen wir wie das tägliche Brot die Gnade des Heiligen Geistes und die Gottesliebe. Gnade und Liebe aber gibt es nicht ohne den Glauben; denn „ohne den Glauben ist es unmöglich, Gott zu gefallen“ (Hebr 11,6). „Der Glaube gründet in der Botschaft, die Botschaft im Wort Christi“ (Röm 10,17). Daher ist die Predigt des Gotteswortes notwendig für das geistliche Leben wie die Aussaat für die Erhaltung des leiblichen Lebens. Darum sagt Christus: „Ein Sämann ging aufs Feld, um zu säen“ (Mt 13,3). Der Sämann ging aus, um die Gerechtigkeit zu verkündigen.^pManchmal lesen wir, dass Gott ihr Verkünder gewesen ist, zum Beispiel, als er dem ganzen Volk in der Wüste vom Himmel her mit lauter Stimme das Gesetz der Gerechtigkeit gab. Einmal war es der Engel des Herrn, der am ‚Ort des Weinens‘ das Volk tadelte, weil es das Gesetz Gottes übertreten hatte; und alle Israeliten hörten die Rede des Engels, bereuten in ihrem Herzen und brachen in lautes Weinen aus (vgl. Ri 2,4). Auch Mose predigte dem ganzen Volk auf der Ebene von Moab das Gesetz, wie aus dem Buch Deuteronomium hervorgeht. Schließlich kam Christus, der Gottmensch, um das Wort des Herrn zu verkünden. Dazu sandte er auch die Apostel aus, so wie er früher die Propheten geschickt hatte.^pSo ist denn die Predigt eine apostolische Aufgabe, eine Aufgabe für Engel und Christen, eine heilige Aufgabe. Denn das Wort Gottes ist von unschätzbarem Wert. Es ist wie ein Schatz, der alles Gute enthält. Denn aus ihm kommen Glaube, Hoffnung und Liebe; alle Tugenden, alle Gaben des Heiligen Geistes, die Seligpreisungen des Evangeliums; alle guten Taten, alle vorzüglichen Werke des Lebens und alle Herrlichkeit des Paradieses: „Nehmt euch das Wort zu Herzen, das in euch eingepflanzt worden ist und das die Macht hat, euch zu retten“ (Jak 1,21).^pDas Wort Gottes ist Licht für den Verstand und Feuer für den Geist, so dass der Mensch Gott erkennen und lieben kann. Dem inneren Menschen, der vom Geist Gottes lebt, ist es Brot und Wasser. Aber das Brot ist süßer als Honig und Honigwaben, das Wasser besser als Wein und Milch. Es ist für die Seele ein Schatz geistlicher Werte; deshalb wird es Gold und kostbarer Edelstein genannt. Gegen das Herz, das sich in der Sünde verhärtet, ist es wie ein Hammer. Gegen Welt, Fleisch und Teufel ist es wie ein Schwert, das jede Sünde tötet.",
          "patr_resp1": "Steig auf einen hohen Berg, du Künder der Frohen Botschaft für Zion;",
          "patr_resp2": "sag den Städten Judas: Siehe da: dein Gott!",
          "patr_resp3": "Folge mir nach; geh und verkünde das Reich Gottes.",
          "oration": "Allmächtiger Gott, du hast dem heiligen Laurentius von Brindisi den Geist des Rates und der Stärke verliehen, damit er als Prediger und Seelsorger zu deiner Ehre und zum Heil der Menschen wirke. Erleuchte auch uns durch deinen Geist, damit wir unsere Aufgaben erkennen und sie in deiner Kraft erfüllen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, du hast dem heiligen Laurentius von Brindisi den Geist des Rates und der Stärke verliehen, damit er als Prediger und Seelsorger zu deiner Ehre und zum Heil der Menschen wirke. Erleuchte auch uns durch deinen Geist, damit wir unsere Aufgaben erkennen und sie in deiner Kraft erfüllen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, du hast dem heiligen Laurentius von Brindisi den Geist des Rates und der Stärke verliehen, damit er als Prediger und Seelsorger zu deiner Ehre und zum Heil der Menschen wirke. Erleuchte auch uns durch deinen Geist, damit wir unsere Aufgaben erkennen und sie in deiner Kraft erfüllen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "24": {
      "n1": {
        "name": "Christophorus",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Cyprian von Karthago († 2?8)",
          "patr_werk": "Aus einem Brief an verfolgte Christen.",
          "patr_text": "^hIn den Märtyrern kämpft und siegt Christus^pIn dankbarer Freude juble und frohlocke ich, ihr heldenhaften und hochseligen Brüder, bei der Kunde von eurem Glauben und eurem Mut, dessen die Kirche, unsere Mutter, sich rühmen kann.^pSo ziemt es sich auch für die Streiter Christi, dass die unerschütterliche Glaubensfestigkeit durch keine Lockungen sich täuschen, durch keine Drohungen sich schrecken, durch keine Qualen und Martern sich bezwingen lässt; denn er, der in uns ist, ist größer als der, der in der Welt ist (vgl. 1 Joh 4,4). Eher, als die irdische Pein imstande ist, uns niederzuwerfen, vermag der göttliche Schutz uns aufzurichten. Das hat sich deutlich gezeigt im ruhmvollen Kampf der Brüder, die in der Bezwingung der Martern den übrigen als Führer vorangingen und als tapfere Krieger ein Beispiel des Mutes und des Glaubens gaben, bis der Feind im Kampfe unterlag.^pMit welchen Lobsprüchen soll ich euch nun preisen, ihr heldenmütigen Brüder? Wie soll mein Mund die Stärke eures Herzens und eure Beharrlichkeit im Glauben mit rühmenden Worten erheben und feiern? Bis euer Ruhm vollendet war, habt ihr die härtesten Folterqualen erduldet, und nicht ihr seid vor den Leiden, sondern die Leiden sind vielmehr vor euch gewichen. Nicht die Folter, sondern der Siegeskranz hat den Schmerzen ein Ende gemacht.^pDie schweren Martern dauerten so lange, nicht um den standhaften Glauben zu Fall zu bringen, sondern um die Gottesmenschen um so schneller zum Herrn zu senden. Mit Staunen über den himmlischen Kampf Gottes und den geistlichen Streit Christi sah die Menge der Augenzeugen, wie seine Diener aufrecht standen: freimütig in der Rede, unbefleckten Geistes und voll göttlichen Mutes, entblößt zwar aller weltlichen Waffen, aber gerüstet mit der Wehr treuen Glaubens.^p„Kostbar ist in den Augen des Herrn das Sterben seiner Frommen“ (Ps 116,15). Ja, kostbar ist der Tod, bei dem man um den Preis seines eigenen Blutes die Unsterblichkeit erkauft, bei dem man durch die Vollendung der Tugend Gottes Krone erringt.",
          "patr_resp1": "Ich habe den guten Kampf gekämpft, den Lauf vollendet, die Treue gehalten.",
          "patr_resp2": "Schon jetzt liegt für mich der Kranz der Gerechtigkeit bereit.",
          "patr_resp3": "Christus will ich erkennen und die Gemeinschaft mit seinem Leiden; sein Tod soll mich prägen.",
          "oration": "Allmächtiger Gott, auf unserem Lebensweg bedrohen uns viele Gefahren. Höre auf die Fürsprache des heiligen Märtyrers Christophorus. Gib, dass wir Christus in uns tragen und mit unseren Weggefährten sicher zu dem Ziel gelangen, für das wir geschaffen sind. Darum bitten wir durch ihn, Jesus Christus."
        },
        "Laudes": {
          "name": "Christophorus",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, auf unserem Lebensweg bedrohen uns viele Gefahren. Höre auf die Fürsprache des heiligen Märtyrers Christophorus. Gib, dass wir Christus in uns tragen und mit unseren Weggefährten sicher zu dem Ziel gelangen, für das wir geschaffen sind. Darum bitten wir durch ihn, Jesus Christus."
        },
        "Vesper": {
          "name": "Christophorus",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, auf unserem Lebensweg bedrohen uns viele Gefahren. Höre auf die Fürsprache des heiligen Märtyrers Christophorus. Gib, dass wir Christus in uns tragen und mit unseren Weggefährten sicher zu dem Ziel gelangen, für das wir geschaffen sind. Darum bitten wir durch ihn, Jesus Christus."
        }
      },
      "n2": {
        "name": "Scharbel Mahluf",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Laudes": {
          "name": "Scharbel Mahluf",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Vesper": {
          "name": "Scharbel Mahluf",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        }
      }
    },
    "29": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Commune: mehrere Märtyrer.",
          "comm_2": "Comm_2",
          "patr_autor": "Cyprian von Karthago († 258)",
          "patr_werk": "Aus einem Brief.",
          "patr_text": "^hLob des Martyriums^pIch frohlocke in großer Freude und Dankbarkeit, meine überaus tapferen und seligen Brüder, da ich von eurem Glauben und Heldenmut erfuhr, deren die Mutter Kirche sich rühmen kann. Mit unerschütterlichem Mut und opferbereiter Hingabe seid ihr in den schwersten Entscheidungskampf gezogen.^pIch habe vernommen, dass einige von euch bereits die Krone erlangt haben, einige dem Siegeskranz ganz nahe sind, und dass alle, so viele als ruhmvolle Schar im Kerker eingeschlossen sind, mit gleichem Eifer und Starkmut sich zum Kampfe bereithalten. So muss es ja bei den Kämpfern Christi im himmlischen Feldlager sein, dass keine Schmeichelworte die ungeschwächte Glaubensfestigkeit beirren, keine Drohungen sie erschüttern, keine Folter und Marter sie besiegen können. Denn Er, der in uns ist, ist größer als jener, der in der Welt ist (vgl. 1 Joh 4,4), und die irdische Pein hat nicht so viel Macht zum Niederwerfen wie der Beistand Gottes zum Aufrichten.^pMit was für Lobeserhebungen soll ich euch also preisen, tapferste Brüder, mit welchen Ruhmesworten die Kraft eurer Seele und die Beharrlichkeit im Glauben erheben? Bis zur Vollendung eures Ruhmes habt ihr die härteste Folter erduldet; ihr seid nicht vor den Martern, vielmehr sind die Martern vor euch zurückgewichen.^pVoll Bewunderung sah die anwesende Menge den himmlischen, den geistlichen Kampf Gottes, den Kampf Christi; sie sah, wie seine Knechte aufrecht standen mit freimütigem Wort, ungebrochenem Geist, voll göttlicher Kraft, zwar von irdischen Waffen entblößt, doch als Gläubige mit den Waffen des Glaubens ausgerüstet. Da floss das Blut, das den Brand der Verfolgung auslöschen, die Feuerflammen der Hölle mit seiner Kraft ersticken sollte.^pWas für ein Schauspiel war dies für den Herrn! Wie erhaben, wie groß, wie wohlgefällig in Gottes Augen durch den ergebenen Dienst seines Kämpfers, wie in den Psalmen geschrieben steht, wo der Heilige Geist uns sagt und mahnt: „Kostbar ist in den Augen des Herrn das Sterben seiner Frommen“ (Ps 116,15). Ja, kostbar ist dieses Sterben, das um den Preis des eigenen Blutes die Unsterblichkeit erwirbt, das für die Vollendung in der Tugend von Gott die Krone erhält.^pWie freute sich da Christus, wie gern kämpfte und siegte er in solchen Dienern, er, der Beschützer des Glaubens, der seinen Gläubigen so viel gibt, wie der Empfänger nur glaubt fassen zu können. Er war bei seinem Kampf dabei, richtete die Kämpfer und Bekenner seines Namens auf, stärkte und ermutigte sie. Er, der für uns einmal den Tod überwunden hat, überwindet ihn ständig in uns. Er sagte ja: „Wenn man euch vor Gericht stellt, macht euch keine Sorgen, wie und was ihr reden sollt; denn es wird euch in jener Stunde eingegeben, was ihr sagen sollt. Nicht ihr werdet dann reden, sondern der Geist eures Vaters wird durch euch reden“ (Mt 10,19f).^pWenn der Kampfruf an euch ergeht, wenn der Tag eures Kampfes gekommen ist, so streitet tapfer, kämpft standhaft! Denn ihr wisst, dass ihr unter den Augen des Herrn kämpft, der gegenwärtig ist, und dass ihr durch das Bekenntnis seines Namens zu seiner Herrlichkeit gelangt. Es ist ja nicht so, dass er seine Diener nur anblickt, nein, er selber kämpft in uns, er selber streitet, er ist es, der in unserem Kampf und Wettstreit zugleich krönt und gekrönt wird.",
          "patr_resp1": "Wenn einer von euch leiden muss, weil er Christ ist, dann soll er sich nicht schämen, sondern Gott verherrlichen, indem er sich zu diesem Namen bekennt.",
          "patr_resp2": "Er, der in euch ist, ist größer als jener, der in der Welt ist.",
          "patr_resp3": "Wenn man euch vor Gericht stellt, macht euch keine Sorgen, wie und was ihr reden sollt; denn es wird euch in jener Stunde eingegeben, was ihr sagen sollt.",
          "oration": "Herr, unser Gott, wir danken dir für deine Blutzeugen Simplicius, Faustinus und Beatrix, die durch ihr Martyrium wahrhaft Geschwister geworden sind. Die Gemeinschaft mit ihnen gebe unserem Glauben neue Kraft; ihre Fürbitte schenke uns Mut und Zuversicht. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Commune: mehrere Märtyrer.",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, wir danken dir für deine Blutzeugen Simplicius, Faustinus und Beatrix, die durch ihr Martyrium wahrhaft Geschwister geworden sind. Die Gemeinschaft mit ihnen gebe unserem Glauben neue Kraft; ihre Fürbitte schenke uns Mut und Zuversicht. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Commune: mehrere Märtyrer.",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, wir danken dir für deine Blutzeugen Simplicius, Faustinus und Beatrix, die durch ihr Martyrium wahrhaft Geschwister geworden sind. Die Gemeinschaft mit ihnen gebe unserem Glauben neue Kraft; ihre Fürbitte schenke uns Mut und Zuversicht. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "30": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Petrus Chrysologus († 450)",
          "patr_werk": "Aus einer Predigt über die Menschwerdung Gottes.",
          "patr_text": "^hDas Mysterium der Menschwerdung^pDie Jungfrau empfängt, gebiert als Jungfrau und bleibt Jungfrau. Das ist ungewöhnlich, es ist ein Wunderzeichen. Das entspricht nicht der Vernunft, es ist Kraft Gottes. Es kommt vom Schöpfer, nicht von der Natur. Es ist nicht allgemein, sondern einzig; nicht menschlich, sondern göttlich. Denn dass Christus geboren wurde, entsprang nicht der Notwendigkeit, sondern der Allmacht. Es war das Mysterium der Güte, die Wiederherstellung des menschlichen Heils.^pDerjenige, der vor seiner Geburt aus dem noch unberührten Lehm den Menschen formte, schuf bei seiner eigenen Geburt aus dem unberührten Leib einen Menschen. Er, dessen Hand gnädig den Lehm nahm, um uns daraus zu formen, nahm in Gnaden das Fleisch an, um uns neu zu schaffen. So ist es denn eine Ehre für die Schöpfung, nicht jedoch eine Unehre für den Schöpfer, dass der Schöpfer sich im Geschöpf, Gott sich im Fleisch findet.^pDu Mensch, warum missachtest du dich so sehr, da du doch für Gott so kostbar bist? Da Gott dich so hoch ehrt, warum entehrst du dich so sehr! Warum suchst du nach dem, woraus du geschaffen bist, und nicht nach dem, wofür du geschaffen bist? Ist nicht dieses ganze Haus der Welt, das du siehst, für dich gemacht? Das Licht dringt in dich ein und vertreibt die Finsternis, die dich umgibt. Für dein Wohl wurde die Nacht eingeführt, für dich der Tag abgemessen. Für dich wurde der Himmel mit den vielfältigen Strahlen von Sonne, Mond und Sternen erhellt; für dich die Erde mit Blumen, Bäumen und Früchten ausgemalt. Für dich wurde eine erstaunliche Menge von Lebewesen geschaffen, in der Luft, auf den Feldern und im Wasser, damit nicht traurige Einsamkeit die Freude an der neugeschaffenen Welt zerstöre.^pNoch etwas denkt sich der Schöpfer zusätzlich zu deiner Ehre aus: Er macht dich zum Träger seines Bildes. Dieses sichtbare Ebenbild sollte auf der Erde den unsichtbaren Schöpfer gegenwärtig machen. Dir übergab er die Verwaltung der irdischen Güter, damit ein so weiter Besitz einen Statthalter des Herrn habe. Was Gott in dir erschaffen hatte, das nahm er gütig an. Er wollte in Wahrheit in einem Menschen erkannt werden, nachdem er vorher in ihm gleichsam wie in einem Bilde gesehen worden war. Und er bewirkte dass ein Mensch im eigentlichen Sinn des Wortes Gott war, nachdem der Mensch es vorher nur in der Ähnlichkeit sein durfte.^pSo wird denn Christus geboren, um durch seine Geburt die verderbte Natur wiederherzustellen. Er wird ein Kind, lässt sich nähren und durchläuft alle Lebensalter, um das eine, vollkommene, bleibende Alter, das er selbst geschaffen hat, zu erneuern. Er trägt den Menschen, damit der Mensch nicht wieder fallen kann. Den er irdisch geschaffen hat, dem schenkt er überirdisches Leben; den er durch menschlichen Geist belebt hatte, dem schenkt er das Leben des göttlichen Geistes. So erhebt er ihn ganz zu Gott, um nichts in ihm zurückzulassen, was der Sünde, dem Tod, der Mühsal, dem Schmerz und der Erde gehört. Das gewährt uns unser Herr Jesus Christus, der in der Einheit des Heiligen Geistes mit dem Vater lebt und herrscht jetzt und allezeit und in Ewigkeit. Amen.",
          "patr_resp1": "Kommt zum Herrn, zu dem lebendigen Stein;",
          "patr_resp2": "lasst euch als lebendige Steine aufbauen.",
          "patr_resp3": "Er ist der Stein, der zum Eckstein geworden ist.",
          "oration": "Erhabener Gott, du hast den Bischof Petrus Chrysologus zu einem begnadeten Verkünder deines ewigen Wortes gemacht, das unsere Menschennatur angenommen hat. Gewähre uns auf seine Fürsprache, dass wir die Geheimnisse der Erlösung allezeit im Herzen erwägen und in unseren Werken davon Zeugnis geben. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Erhabener Gott, du hast den Bischof Petrus Chrysologus zu einem begnadeten Verkünder deines ewigen Wortes gemacht, das unsere Menschennatur angenommen hat. Gewähre uns auf seine Fürsprache, dass wir die Geheimnisse der Erlösung allezeit im Herzen erwägen und in unseren Werken davon Zeugnis geben. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Erhabener Gott, du hast den Bischof Petrus Chrysologus zu einem begnadeten Verkünder deines ewigen Wortes gemacht, das unsere Menschennatur angenommen hat. Gewähre uns auf seine Fürsprache, dass wir die Geheimnisse der Erlösung allezeit im Herzen erwägen und in unseren Werken davon Zeugnis geben. Darum bitten wir durch Jesus Christus."
        }
      }
    }
  },
  "8": {
    "2": {
      "n1": {
        "name": "Eusebius",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Eusebius von Vercelli († 371)",
          "patr_werk": "Aus einem Brief aus der Verbannung an seine Brüder.",
          "patr_text": "^hIch habe den Lauf vollendet, den Glauben bewahrt^pLiebe Brüder, ich weiß nun, dass ihr ohne Tadel seid, so wie ich es wünschte. Es kommt mir vor, als sei ich zu euch gekommen, plötzlich über die ganze Weite der Erde zu euch hingetragen, wie es Habakuk geschah, den ein Engel zu Daniel brachte (vgl. Dan 14,32–39).^pWenn ich von einigen von euch Briefe bekam und beim Durchlesen dieser Schreiben eure heilige Gesinnung und eure Liebe spürte, mischten sich bei mir Freude und Tränen; und der Geist, der gerne gelesen hätte, wurde durch die Tränen daran gehindert. Beides musste sein, damit jeder einzelne dabei den Wunsch empfinde, die Sehnsucht durch Taten der Liebe zu ergänzen und zu übertreffen.^pTagelang war ich damit beschäftigt, und es kam mir vor, als unterhielte ich mich mit euch. Ich vergaß darüber die Mühsal der Vergangenheit; so sehr umgaben mich Freuden von allen Seiten. Die Freuden gaben mir festen Glauben, Liebe und Frucht, dass es mir inmitten so großer Güter vorkam, als sei ich bei euch.^pLiebe Brüder, ich freue mich über euren Glauben und über das Heil aus dem Glauben. Ich freue mich über die Früchte, die ihr nicht nur den dort Weilenden, sondern auch denen in der Ferne darreicht. Denn wie der Bauer dem guten Baum dient, der wegen der Früchte nicht die Streiche der Axt zu fürchten braucht und nicht dem Feuer überantwortet wird, so wollen und wünschen wir euch nicht nur dem Fleisch nach zu dienen, sondern unser Leben für euch hinzugeben.^pWir haben übrigens beim Schreiben dieses Briefes Gott unaufhörlich gebeten, er möge unsern Wächter von Stunde zu Stunde hinhalten und dafür sorgen, dass der Diakon euch nicht so sehr von unserer Drangsal berichte als vielmehr euch unsere brieflichen Grüße überbringe. Darum bitte ich euch: Wahrt in aller Wachsamkeit den Glauben, wahrt die Eintracht, widmet euch dem Gebet, denkt stets an uns, damit Gott seine Kirche befreit, die auf dem ganzen Erdkreis bedrängt wird, und damit wir, die Unterdrückten, uns mit euch der Freiheit erfreuen dürfen.^pAuch bitte ich euch bei dem Erbarmen Gottes, jeder möge aus diesem Brief seinen Gruß entnehmen. Denn unter dem Zwang der Notwendigkeit konnte ich nicht wie sonst jedem einzelnen schreiben. Darum rufe ich in dieser meiner Not euch alle an, euch, Brüder, und euch, heilige Schwestern, Söhne und Töchter. Jedes Geschlecht, jedes Lebensalter bitte ich, mit diesem Gruß zufrieden zu sein. Grüßt in unserem Auftrag auch diejenigen, die außerhalb unserer Gemeinschaft sind und uns dennoch lieben.",
          "patr_resp1": "Legt euren Gürtel nicht ab und lasst eure Lampen brennen!",
          "patr_resp2": "Seid wie Menschen, die auf die Rückkehr ihres Herrn warten.",
          "patr_resp3": "Seid also wachsam! Denn ihr wisst nicht, an welchem Tag euer Herr kommt.",
          "oration": "Wir bitten dich, Herr, unser Gott, gib, dass wir die Glaubenstreue des heiligen Bischofs Eusebius nachahmen, der die Lehre von der Gottheit Christi unerschrocken verteidigt hat, und lass uns teilhaben am göttlichen Leben deines Sohnes, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Laudes": {
          "name": "Eusebius",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Wir bitten dich, Herr, unser Gott, gib, dass wir die Glaubenstreue des heiligen Bischofs Eusebius nachahmen, der die Lehre von der Gottheit Christi unerschrocken verteidigt hat, und lass uns teilhaben am göttlichen Leben deines Sohnes, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Vesper": {
          "name": "Eusebius",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Wir bitten dich, Herr, unser Gott, gib, dass wir die Glaubenstreue des heiligen Bischofs Eusebius nachahmen, der die Lehre von der Gottheit Christi unerschrocken verteidigt hat, und lass uns teilhaben am göttlichen Leben deines Sohnes, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "n2": {
        "name": "Petrus Julianus Eymard",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Laudes": {
          "name": "Petrus Julianus Eymard",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Vesper": {
          "name": "Petrus Julianus Eymard",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        }
      }
    },
    "5": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Cyrill von Alexandrien († 444)",
          "patr_werk": "Aus einer Homilie während des Konzils von Ephesus.",
          "patr_text": "^hLob der Gottesgebärerin Maria^pIch sehe die frohe Versammlung der Heiligen. Sie alle sind gern gekommen; denn die heilige Gottesgebärerin Maria, die immerwährende Jungfrau, hat sie zusammengerufen. Ich war in tiefer Traurigkeit. Aber die Anwesenheit der heiligen Väter hat mich in Freude versetzt. Jetzt ist für uns das geliebte Wort des Psalmisten erfüllt: „Wie gut und schön ist es, wenn Brüder miteinander in Eintracht wohnen!“ (Ps 133,1)^pSei uns also gegrüßt, heilige, geheimnisvolle Dreifaltigkeit; denn du hast uns alle in dieser Kirche der heiligen Gottesgebärerin zusammengeführt. Sei uns gegrüßt, Gottesgebärerin, du kostbarer Schatz der ganzen Erde, du nie erlöschende Lampe, du Krone der Jungfräulichkeit, du Zepter des wahren Glaubens, du unzerstörbares Heiligtum, du Ort dessen, den kein Ort umfasst, Mutter und Jungfrau! Durch dich wird im Evangelium ‚gesegnet‘ genannt, der da kommt im Namen des Herrn (vgl. Mt 21,9).^pSei gegrüßt! Du hast in deinem Schoß umfangen, den kein Raum zu fassen vermag. Durch dich wird die heilige Dreifaltigkeit verherrlicht; durch dich wird das kostbare Kreuz auf dem ganzen Erdkreis verehrt; deinetwegen jubelt der Himmel; deinetwegen freuen sich die Engel und Erzengel; deinetwegen flüchten die Dämonen; deinetwegen fiel der Teufel, der Versucher, vom Himmel; deinetwegen wird das gefallene Geschöpf in den Himmel aufgenommen; durch dich gelangte die ganze dem Götzendienst verfallene Schöpfung zur Wahrheit; durch dich erhalten die Glaubenden die Taufe und das Öl der Freude; durch dich werden über den ganzen Erdkreis hin Kirchen gegründet; durch dich werden die Heiden zur Umkehr geführt.^pWas soll ich noch mehr sagen? Durch dich leuchtete der eingeborene Sohn Gottes als Licht den Menschen auf, die in Finsternis sitzen und im Dunkel des Todes (vgl. Lk 1,79), durch dich haben die Propheten geweissagt; durch dich die Apostel den Heiden die frohe Botschaft verkündigt; durch dich werden die Toten erweckt; durch dich herrschen die Könige im Namen der heiligen Dreifaltigkeit.^pWelcher Mensch könnte das Lob Mariens würdig singen? Sie ist Mutter und Jungfrau zugleich. O welch staunenswertes Wunder! Wer hätte je gehört, dass Gott, der sich einen Tempel erbaut hat, nicht darin Wohnung nehmen dürfte? Wie könnte Gott darum geschmäht werden, weil er sich seine Magd zur Mutter erwählt hat?^pSiehe, es freuen sich alle, und es werde uns die Gnade zuteil, die Einheit bebend anzurufen und in Ehrfurcht die unteilbare Dreieinigkeit zu verehren. Wir besingen Maria, die allzeit jungfräuliche Mutter, den heiligen Tempel Gottes, sowie ihren Sohn und heiligen Bräutigam. Denn sein ist die Ehre in Ewigkeit. Amen.",
          "patr_resp1": "Selig preisen mich alle Geschlechter, denn Großes hat der Herr an mir getan.",
          "patr_resp2": "Heilig ist sein Name.",
          "patr_resp3": "Von Geschlecht zu Geschlecht währt sein Erbarmen über jenen, welche ihn fürchten.",
          "oration": "Barmherziger Gott, mit unserem eigenen Tun können wir vor dir nicht bestehen. Darum höre auf die Fürsprache der seligen Jungfrau Maria. Schau nicht auf unser Versagen, sondern sei uns gnädig und rette uns. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Ev": "Heilige Jungfrau und Gottesmutter Maria,^lgebenedeit bist du unter den Frauen,^lund gebenedeit ist die Frucht deines Leibes.",
          "oration": "Barmherziger Gott, mit unserem eigenen Tun können wir vor dir nicht bestehen. Darum höre auf die Fürsprache der seligen Jungfrau Maria. Schau nicht auf unser Versagen, sondern sei uns gnädig und rette uns. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Ev": "Heilige Maria, Mutter Gottes, bitte für uns Sünder,^ljetzt und in der Stunde unseres Todes.",
          "oration": "Barmherziger Gott, mit unserem eigenen Tun können wir vor dir nicht bestehen. Darum höre auf die Fürsprache der seligen Jungfrau Maria. Schau nicht auf unser Versagen, sondern sei uns gnädig und rette uns. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "7": {
      "n1": {
        "name": "Xystus II.",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Cyprian von Karthago († 258)",
          "patr_werk": "Aus einem Brief an den Bischof Successus.",
          "patr_text": "^hWir wissen, dass die Streiter Christi nicht untergehen, sondern den Siegeskranz erhalten^pLieber Bruder,^ldass ich euch nicht sofort geschrieben habe, liegt daran, dass alle, die zum Klerus gehören, wegen des drohenden Kampfes von hier nicht wegkonnten, alle in der Liebe bereit für die Herrlichkeit des Himmels. Wisst, dass die Boten zurückgekommen sind, die ich nach Rom geschickt habe, um zuverlässige Kunde darüber zu erhalten, was über uns verfügt worden ist. Denn unsichere Gerüchte verschiedenen Inhalts gehen darüber um.^pIn Wahrheit verhält es sich so: Valerian hat einen Erlass an den Senat gerichtet, nach dem Bischöfe, Presbyter und Diakone sofort hinzurichten sind. Männer von Rang und römische Ritter sollen ihre Ehrenstellung verlieren und ihres Vermögens beraubt werden. Wenn sie nach dem Verlust ihres Eigentums immer noch Christen bleiben, sollen sie enthauptet werden. Frauen sollen ihr Vermögen verlieren und verbannt werden. Kaiserliche Beamte, die früher das Bekenntnis abgelegt haben oder es noch jetzt ablegen, sollen enteignet und gefesselt mit der Darstellung ihres Falles auf die kaiserlichen Güter geschickt werden.^pKaiser Valerian hat seiner Verfügung noch die Abschrift eines Briefes beigegeben, den er unseretwegen an die Statthalter der Provinzen geschrieben hat. Wir hoffen täglich auf das Kommen dieses Briefes. Wir stehen nämlich in der Festigkeit des Glaubens bereit, standhaft zu leiden, und hoffen durch die Hilfe und Huld des Herrn, die Krone des ewigen Lebens zu erlangen. Wisst, dass Xystus am achten Tag vor den Iden des August (6. August) im Zömeterium hingerichtet worden ist zusammen mit vier Diakonen.^pDie Präfekten der Stadt setzen diese Verfolgung Tag für Tag fort. Wenn ihnen jemand vorgeführt wird, lassen sie ihn hinrichten und beschlagnahmen sein Vermögen für den Staat. Bitte, teilt das auch unseren übrigen Mitbrüdern mit, damit sie überall die Brüder durch ihren Zuspruch stärken und sie auf den geistlichen Kampf vorbereiten. Jeder einzelne von uns möge mehr an die Unsterblichkeit als an das Sterben denken. Dem Herrn in vollem Glauben und mit ganzer Kraft geweiht, mögen alle bei diesem Bekenntnis mehr Freude als Furcht empfinden, da sie doch wissen, dass die Streiter Gottes und Christi nicht untergehen, sondern den Siegeskranz erhalten.^pLieber Bruder, ich wünsche dir stetes Wohlergehen im Herrn!",
          "patr_resp1": "Um Jesu willen werden wir dem Tod überliefert, damit auch sein Leben an unserem sterblichen Leib offenbar wird.",
          "patr_resp2": "Um Jesu willen werden wir gemordet Tag um Tag.",
          "patr_resp3": "Wir werden behandelt wie Schafe, die zum Schlachten bestimmt sind.",
          "oration": "Allmächtiger Gott, du hast dem heiligen Xystus und seinen Gefährten die Kraft geschenkt, für dein Wort und das Zeugnis von Jesus ihr Leben dahinzugeben. Stärke uns mit dem Heiligen Geist, damit auch wir deine Botschaft gläubig hören und standhaft bekennen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Xystus II.",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, du hast dem heiligen Xystus und seinen Gefährten die Kraft geschenkt, für dein Wort und das Zeugnis von Jesus ihr Leben dahinzugeben. Stärke uns mit dem Heiligen Geist, damit auch wir deine Botschaft gläubig hören und standhaft bekennen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Xystus II.",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, du hast dem heiligen Xystus und seinen Gefährten die Kraft geschenkt, für dein Wort und das Zeugnis von Jesus ihr Leben dahinzugeben. Stärke uns mit dem Heiligen Geist, damit auch wir deine Botschaft gläubig hören und standhaft bekennen. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Kajetan",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Kajetan († 1547)",
          "patr_werk": "Aus einem Brief an Elisabeth von Porto.",
          "patr_text": "^hChristus wohne durch den Glauben in euren Herzen^pEin Sünder bin ich, ich habe von mir keine große Meinung. Vielmehr wende ich mich an die besten Diener Gottes, dass sie Christus – er sei gepriesen! – und seine Mutter für dich bitten. Vergiss aber nicht, dass alle Heiligen zusammen bei Christus nicht so viel ausrichten können, wie du selbst es vermagst. Es ist deine Sache: wenn du willst, dass Christus dich liebt, so liebe du ihn und richte deinen Willen darauf, ihm immer zu gefallen. Dann zweifle nicht: wenn dich auch die Heiligen und alle Geschöpfe verließen, er würde dir in aller Not zur Seite stehen.^pSei überzeugt, dass wir auf dieser Erde immer als Pilger unterwegs sind. Unsere Heimat ist der Himmel. Der vom Stolz aufgeblähte Mensch irrt vom Weg ab und läuft in den Tod. Während wir hier auf Erden leben, müssen wir das ewige Leben gewinnen; das können wir nicht allein, nachdem wir es wegen der Sünden verloren haben. Doch Jesus Christus hat es uns wieder verschafft. Darum müssen wir ihm immer danken, ihn immer lieben, ihm gehorchen und, soweit wie möglich, immer bei ihm sein.^pEr gab sich uns zur Speise; wehe dem, der dieses große Geschenk nicht kennt! Es ist uns gegeben, Christus, den Sohn der Jungfrau Maria, als Gabe zu besitzen, doch wir wollen nicht. Wehe dem, der sich nicht bemüht, ihn zu empfangen!^pLiebe Tochter, alles Gute, das ich mir selbst wünsche, erflehe ich auch für dich. Aber um es zu bekommen, gibt es nur den einen Weg: Bitte die Jungfrau Maria, dich mit ihrem erhabenen Sohn zu besuchen. Ja, du sollst es wagen und sie bitten, dir ihren Sohn zu schenken, der im heiligen Sakrament des Altars die wahre Speise der Seele ist. Gerne gibt sie ihn dir, und er kommt gerne, dich zu stärken, dass du durch diesen finsteren Wald gehen kannst, sicher vor den zahlreichen Feinden, die auf uns lauern. Sie werden sich fernhalten, wenn sie sehen, dass wir auf so starke Hilfe bauen.^pMeine Tochter, nimm Christus nicht in der Absicht auf, ihn auszunützen nach deinem Belieben. Ich will Vielmehr, dass du dich ihm übergibst und dass er dich aufnimmt, dass Gott, dein Heiland, an dir und in dir tut, was immer er will. Das wünsche ich, darum bitte ich dich, und dazu treibe ich dich an, sosehr ich es vermag.",
          "patr_resp1": "Heilig die Predigt des seligen Mannes, unschätzbar seine Liebe!",
          "patr_resp2": "Er verachtete den Prunk der Welt und erhielt das ewige Leben.",
          "patr_resp3": "Christus bedeutete ihm Leben und Sterben Gewinn.",
          "oration": "Herr, unser Gott, du hast den Priester und Ordensgründer Kajetan berufen, in frei gewählter Armut die Apostel nachzuahmen. Höre auf seine Fürsprache und hilf uns, nach seinem Beispiel auf dich allein zu vertrauen und unser Leben im Geist des Evangeliums zu erneuern. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Kajetan",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, du hast den Priester und Ordensgründer Kajetan berufen, in frei gewählter Armut die Apostel nachzuahmen. Höre auf seine Fürsprache und hilf uns, nach seinem Beispiel auf dich allein zu vertrauen und unser Leben im Geist des Evangeliums zu erneuern. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Kajetan",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, du hast den Priester und Ordensgründer Kajetan berufen, in frei gewählter Armut die Apostel nachzuahmen. Höre auf seine Fürsprache und hilf uns, nach seinem Beispiel auf dich allein zu vertrauen und unser Leben im Geist des Evangeliums zu erneuern. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "12": {
      "n1": {
        "name": "Radegunde",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Commune Ordensleute.",
          "comm_2": "Comm_2",
          "patr_autor": "Baudonivia (um 600)",
          "patr_werk": "Aus der Lebensbeschreibung der heiligen Radegunde.",
          "patr_text": "^hDie Hoffnung auf den Herrn lässt nicht zuschanden werden^pIn Poitiers ließ Frau Radegunde auf die Eingebung und mit der Hilfe Gottes sich ein Kloster gemäß Anordnung des Königs Chlotar errichten und trat voll Freude in dieses Kloster ein. Alsbald begann sie voll Eifer, ein heiliges Leben zu führen, demütig im Umgang, hingebend in der Liebe, strahlend in keuscher Reinheit, ausdauernd im Fasten. So weihte sie sich in ungeteilter Liebe dem himmlischen Bräutigam. Und während sie zu andern voll Erbarmen war, wurde sie für sich selbst zum (strengen) Richter, gütig gegen die anderen, hart gegen sich, gegen alle freigebig, karg gegen sich selbst.^pSo sehr liebte sie ihre Klostergemeinde, dass sie gar nicht mehr zurückdachte, weder an ihre Eltern noch daran, dass sie einen König zum Gemahl gehabt hatte. Oft hat sie uns dies wissen lassen, wenn sie sagte: „Euch habe ich als meine Töchter erwählt, ihr seid mein Licht, ihr mein Leben, ihr mein Trost und mein ganzes Glück, ihr (meine) neue Pflanzung. Ahmt mich nach in dieser Welt, auf dass wir in der kommenden uns erfreuen dürfen. Lasst uns in ganzem Glauben und in ganzer, herzlicher Liebe Gott dienen, in Gottesfurcht und Herzenseinfalt ihn suchen, dann dürfen wir voll Vertrauen zu ihm sagen: ,Gib uns, Herr, was du verheißen, denn wir haben getan, was du geboten hast.‘“^pStändig war sie um den Frieden und das Wohl des Landes besorgt. Ihre Nächstenliebe galt allen Königen; darum betete sie, wenn Krieg zwischen den Ländern war, für das Leben aller und leitete uns an, unablässig für ihr Wohl zu beten. Ja, sobald sie hörte, dass es zu Spannungen zwischen ihnen gekommen sei, war sie zutiefst beunruhigt und sandte Briefe an den einen wie an den anderen, sie sollten nicht zu Krieg und Waffengewalt greifen, sondern den Frieden festigen, damit das Vaterland nicht zugrunde gehe.^pIhren Ordensfrauen befahl sie ständige Nachtwachen und wies sie unter Tränen an, ununterbrochen zu beten. Sie selbst aber – welche Peinigungen sie sich zufügte, können Worte nicht beschreiben.^pSo kam es auf ihre Fürsprache zum Frieden zwischen den Königen, zur Beendigung des Krieges, zur Rettung des Landes. Die Menschen erkannten, dass dies ihr zu danken war, und priesen den gebenedeiten Namen des Herrn.^pNachdem sie (zahlreiche) Reliquien von Heiligen herbeigebracht hatte, hätte sie, wenn möglich, sich erbeten, dass der Herr selbst vom Thron seiner Herrlichkeit (herabsteige und) sichtbar hier wohne. Der gnädige Gott aber gab ihr ein, zu tun wie die heilige Helena, die das heilbringende Holz (des Kreuzes) gesucht hat. Was jene im Morgenland getan, tat die heilige Radegunde in Gallien. Sie schrieb an König Sigibert, er möge ihr erlauben, zum Heil des ganzen Landes und zur Festigung seines Königtums das Kreuzesholz des Herrn vom Kaiser zu erbitten. Jener stimmte dem gnädig zu. Sie nun, von frommer Begierde entflammt, sandte zum Kaiser, jedoch nicht etwa Geschenke (sie hatte sich ja für Gott arm gemacht), vielmehr machte sie zu ihren Gesandten ein Heer von Heiligen, die sie unablässig anrief.^pSie erlangte, worum sie bat, und durfte sich rühmen, das heilige Kreuzesholz des Herrn, mit Gold und edlen Steinen geziert, und viele Reliquien von Heiligen, die es im Orient gab, bei sich am Ort ihres Aufenthalts zu haben. Die Heilige samt ihrem Kloster frohlockte vor Freude und übergab diese gute Gabe und dieses vollkommene Geschenk vom Himmel (vgl. Jak 1,17) ihrem Konvent.^pDurch Gottes wirkende Macht erhalten dort Blinde das Augenlicht, öffnen sich taube Ohren, tut die Zunge der Stummen wieder ihren Dienst, gehen Lahme, werden böse Geister ausgetrieben. Mit einem Wort: Wer immer, von irgendeiner Krankheit heimgesucht, gläubig hinzutritt, kehrt durch die Kraft des heiligen Kreuzes geheilt zurück. Wer könnte ausdrücken, was für ein großes und kostbares Geschenk die Heilige (damit auch) dieser Stadt gemacht hat! Darum preist jeder, der aus dem Glauben lebt, ihren Namen.",
          "patr_resp1": "Ich will mich allein des Kreuzes Jesu Christi, unseres Herrn, rühmen,",
          "patr_resp2": "durch das mir die Welt gekreuzigt ist und ich der Welt.",
          "patr_resp3": "Denn er ist unser Friede. Er brachte Versöhnung mit Gott durch das Kreuz,",
          "oration": "Barmherziger Gott, du hast die heilige Radegunde aus dem Glanz und der Bedrängnis der Welt in die Stille der Klosterzelle und in deinen Frieden geführt. Hilf uns, dass wir unsere Hoffnung nicht auf irdische Mittel setzen, sondern vertrauensvoll alles von dir erwarten. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Radegunde",
          "genitiv": "Genitiv",
          "comm_1": "Commune Ordensleute.",
          "comm_2": "Comm_2",
          "oration": "Barmherziger Gott, du hast die heilige Radegunde aus dem Glanz und der Bedrängnis der Welt in die Stille der Klosterzelle und in deinen Frieden geführt. Hilf uns, dass wir unsere Hoffnung nicht auf irdische Mittel setzen, sondern vertrauensvoll alles von dir erwarten. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Radegunde",
          "genitiv": "Genitiv",
          "comm_1": "Commune Ordensleute.",
          "comm_2": "Comm_2",
          "oration": "Barmherziger Gott, du hast die heilige Radegunde aus dem Glanz und der Bedrängnis der Welt in die Stille der Klosterzelle und in deinen Frieden geführt. Hilf uns, dass wir unsere Hoffnung nicht auf irdische Mittel setzen, sondern vertrauensvoll alles von dir erwarten. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Johanna Franziska von Chantal",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_werk": "Aus den Erinnerungen der Françoise-Madeleine de Chaugy.",
          "patr_text": "^hStark wie der Tod ist die Liebe^pEines Tages sprach die heilige Johanna tief bewegt die folgenden Worte, die sofort getreulich aufgezeichnet wurden: „Liebe Töchter, die meisten Väter und Säulen unserer Kirche haben nicht den Märtyrertod erlitten. Was meint ihr wohl, warum?“ Nachdem jede ihre Meinung gesagt hatte, sprach die heilige Mutter: „Ich denke, es geschah, weil es noch ein anderes Martyrium gibt. Man nennt es das Martyrium der Liebe. In ihm erhält Gott das Leben seiner Diener und Dienerinnen, damit sie zu seiner Ehre arbeiten. Dadurch macht er sie dann zu Märtyrern und zu Bekennern zugleich.“ Sie fügte hinzu: „Ich weiß, dass die Töchter der Heimsuchung diesem Martyrium geweiht sind und dass jene von ihnen, wenn Gott will – die Glücklicheren –, es durchleiden werden, die darum beten.“^pAls aber eine Schwester fragte, worin denn dieses Martyrium bestehe, antwortete sie: „Sagt ein volles Ja zum Willen Gottes, dann werdet ihr es erfahren. Denn die Gottesliebe dringt mit ihrem Schwert in die geheimsten und innersten Schichten unserer Seele ein und scheidet uns von unserem eigenen Selbst (vgl. Lk 2,35; Hebr 4,12). Eine Seele, die ich kenne, hat die Liebe so hart von allem, was ihr lieb war, geschieden, wie wenn der Schwertstreich eines Tyrannen ihren Geist vom Leib getrennt hätte.“^pWir merkten, dass sie von sich selbst sprach. Als aber eine andere Schwester fragte, wie lange dieses Martyrium dauere, da sagte sie: „Von dem Augenblick, in dem wir uns Gott rückhaltlos weihen, bis zum Ende des Lebens. Doch das gilt von den hochherzigen Menschen, die sich nichts vorbehalten und der Liebe treu bleiben. Denn über die Schwachen und alle, die nur wenig Liebe und Standhaftigkeit besitzen, will unser Herr das Martyrium nicht kommen lassen. Er lässt sie das Leben ihrer Mittelmäßigkeit führen, damit sie nicht von ihm abirren; denn er tut dem freien Willen niemals Gewalt an.^pAls sie schließlich mit der Frage bestürmt wurde, ob dieses Martyrium der Liebe dem leiblichen gleich sein könne, sagt sie: „Lasst uns nicht die Frage der Gleichwertigkeit untersuchen. Ich glaube allerdings, dass das eine nicht hinter dem anderen zurücksteht, weil ,die Liebe stark ist wie der Tod‘ (Hld 8,6). Denn die Märtyrer der Liebe erleiden in dem Leben, das sie durchhalten müssen, tausendfach schwerere Schmerzen, als wenn sie tausend Leben hingeben müssten, um das Zeugnis des Glaubens, der Hoffnung und der Liebe abzulegen.“",
          "patr_resp1": "Was immer wahrhaft, edel, recht, was lauter, liebenswert, ansprechend ist, das tut.",
          "patr_resp2": "Und der Gott des Friedens wird mit euch sein.",
          "patr_resp3": "Was immer Tugend heißt und lebenswert ist, darauf seid bedacht.",
          "oration": "Gott, du hast die heilige Johanna Franziska auf den verschiedenen Wegen ihres Lebens zu großen Taten befähigt. Höre auf ihre Fürsprache. Hilf jedem von uns, seine Berufung zu erkennen und deinen Auftrag zu erfüllen, damit wir Zeugen deines Lichtes werden. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Johanna Franziska von Chantal",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du hast die heilige Johanna Franziska auf den verschiedenen Wegen ihres Lebens zu großen Taten befähigt. Höre auf ihre Fürsprache. Hilf jedem von uns, seine Berufung zu erkennen und deinen Auftrag zu erfüllen, damit wir Zeugen deines Lichtes werden. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Johanna Franziska von Chantal",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du hast die heilige Johanna Franziska auf den verschiedenen Wegen ihres Lebens zu großen Taten befähigt. Höre auf ihre Fürsprache. Hilf jedem von uns, seine Berufung zu erkennen und deinen Auftrag zu erfüllen, damit wir Zeugen deines Lichtes werden. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "13": {
      "n1": {
        "name": "Wigbert",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Hirten",
          "comm_2": "Ord",
          "patr_autor": "Wigbert († um 737)",
          "patr_werk": "Brief an die Mönche von Glastonbury.",
          "patr_text": "^hNichts kann die trennen, die in der Liebe Christi verbunden sind^pDen heiligen und in Christus liebenswerten Herren Vätern und Brüdern im Kloster Glestingaburg (Glastonbury) erfleht der Priester Wigbert, euer und der Knechte Gottes Knecht, Heil im Herrn.^pGepriesen sei Gott, der will, dass alle Menschen gerettet werden und zur Erkenntnis der Wahrheit gelangen (1 Tim 2,4).^pNach seinem Willen sind wir in diese Provinzen, das heißt in das Grenzgebiet der heidnischen Hessen und Sachsen, aufgebrochen; und er hat unsere Reise, die wir mit eurer Erlaubnis angetreten haben, ohne unser Verdienst, nur auf Grund eurer Gebete und seiner Barmherzigkeit, glücklich über das Meer und durch alle Fahrnisse dieser Welt gelenkt.^pWie ihr, liebe Brüder, wisst, können uns Entfernungen der Länder nicht trennen, da uns die Liebe Christi verbindet. So bleibt ihr, ehrwürdige Brüder, stets in meinem Geist, wie ich auch allzeit für euch zu Gott bete.^pIch will euch nun wissen lassen, meine Lieben, dass unser Erzbischof Bonifatius, als er von unserer Ankunft hörte, uns die Ehre erwies, uns eine weite Strecke persönlich entgegenzureisen, und uns mit großer Liebenswürdigkeit aufnahm.^pGlaubt mir, Geliebte, dass unsere Mühen im Herrn für uns selbst nicht vergeblich sind, und dass auch ihr davon Lohn habt. Denn Gott verleiht in seiner Allmacht und seinem Erbarmen auf Grund eurer Verdienste unserem Werk ein gutes Gelingen, wenn es auch noch so gefahrbringend und fast in jeder Hinsicht mühevoll ist, bei Hunger und Durst und Kälte sowie unter den gegenseitigen Überfällen der Heiden sein Leben zu fristen.^pDarum bitte ich: Betet inständig für uns, dass uns das rechte Wort gegeben werde, sooft wir unseren Mund auftun (vgl. Eph 6,19), sowie Beharrlichkeit und Erfolg in unserem Werk.^pLebt wohl im Herrn! Grüßt die Brüder in der Runde, zuerst Abt Ingeld und unseren Konvent. Berichtet meiner Mutter Tetta und ihrem Konvent unsere glückliche Reise. Mit eindringlichen Bitten fordere ich alle auf, gemeinsam mit uns inständig füreinander zu beten. Mein Wunsch ist, dass der gnädige Gott eure Seligkeit (die für uns betet) in seinem Schutz erhalte.",
          "patr_resp1": "Ich erduldete Mühsal und Plage, ertrug Hunger und Durst, Kälte und Blöße. – Aber was liegt daran?",
          "patr_resp2": "Wenn nur auf jede Weise Christus verkündigt wird.",
          "patr_resp3": "Betet für uns, damit Gott uns eine Tür öffnet für das Wort.",
          "oration": "Herr, unser Gott, du hast dem heiligen Abt Wigbert einen besonderen Eifer verliehen, junge Menschen zur Nachfolge Christi zu führen. Hilf uns, deine Gebote treu zu beobachten und so für uns und unsere Brüder das Heil zu finden. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Wigbert",
          "genitiv": "Genitiv",
          "comm_1": "Hirten",
          "comm_2": "Ord",
          "oration": "Herr, unser Gott, du hast dem heiligen Abt Wigbert einen besonderen Eifer verliehen, junge Menschen zur Nachfolge Christi zu führen. Hilf uns, deine Gebote treu zu beobachten und so für uns und unsere Brüder das Heil zu finden. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Wigbert",
          "genitiv": "Genitiv",
          "comm_1": "Hirten",
          "comm_2": "Ord",
          "oration": "Herr, unser Gott, du hast dem heiligen Abt Wigbert einen besonderen Eifer verliehen, junge Menschen zur Nachfolge Christi zu führen. Hilf uns, deine Gebote treu zu beobachten und so für uns und unsere Brüder das Heil zu finden. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Pontianus und Hippolyt",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Cyprian von Karthago († 258)",
          "patr_werk": "Aus einem Brief über das christliche Martyrium.",
          "patr_text": "^hUnerschütterlicher Glaube^pWie soll ich euch loben und preisen, tapfere Brüder? Wie soll meine Stimme die Kraft eures Herzens und die Standhaftigkeit eures Glaubens verkünden und verherrlichen? Bis zur Vollendung des Ruhmes habt ihr die härteste Folter ertragen. Ihr seid vor der Marter nicht geflohen, eher die Marter vor euch. Nicht die Folter machte den Schmerzen ein Ende, sondern der Siegeskranz. Lange durfte die furchtbare Zerfleischung anhalten, aber nicht, um den standhaften Glauben zu stürzen, sondern um die Männer Gottes (vgl. 1 Tim 6,11) schneller zu Gott zu schicken.^pDie dabei waren, sahen staunend den erhabenen Kampf für Gott, den geisterfüllten Streit für Christus. Sie sahen die Diener Gottes aufrecht stehen, mit freier Stimme, mit ungebrochenem Geist, in der Kraft Gottes, ohne irdische Wehr, aber im Glauben mit den Waffen des Glaubens gewappnet. Sie standen aufrecht, in den Foltern stärker als die Männer, die sie folterten, und der geschlagene und zerrissene Leib besiegte die Krallen, die zuschlugen und zerfleischten.^pSo lange auch die Qual wütete und wiederholt wurde, sie konnte den unüberwindlichen Glauben nicht besiegen, obgleich das Fleisch zerrissen war und man an den Dienern Gottes schon nicht mehr Glieder, sondern Wunden quälte. Das Blut floss, den Brand der Verfolgung zu löschen und das Feuer der Hölle in dem ruhmreichen Blut zu ersticken. Was für ein Schauspiel war das für den Herrn, wie erhaben und groß; wie wohlgefällig war in den Augen Gottes diese treue und ergebene Liebe seiner Krieger, gemäß dem Psalmwort: „Kostbar ist in den Augen des Herrn das Sterben seiner Frommen“ (Ps 116,15). Kostbar ist dieser Tod. Er erkaufte die Unsterblichkeit mit dem Preis seines Blutes und erlangte durch die Vollendung der Tugend den Siegeskranz Gottes.^pWie sehr freute sich dort Christus, wie gerne kämpfte und siegte er in solchen Dienern. Er ist der Beschützer des Glaubens, und den Glaubenden gibt er so viel, wie ein jeder glaubt, dass er fassen kann. Er war beim Kampf zugegen und richtete die Vorkämpfer und Verteidiger seines Namens auf, stärkte und ermutigte sie. Er hat einmal für uns den Tod besiegt und besiegt ihn immer wieder in uns.^pSelig du, unsere Kirche! So sehr erhellt dich die Ehre der göttlichen Gnade; so sehr erleuchtet dich in unseren Tagen das ruhmvolle Blut der Märtyrer! Vorher warst du leuchtend weiß in den Werken der Brüder, jetzt bist du purpurn durch das Blut der Märtyrer! Unter deinen Blumen fehlen weder die Lilien noch die Rosen. So möge ein jeder um die große Würde der doppelten Auszeichnung kämpfen. Möge er den weißen Kranz der Werke oder den purpurnen des Leidens erringen!",
          "patr_resp1": "Wenn wir in der Schlacht des Glaubens kämpfen, blickt Gott auf uns herab,",
          "patr_resp2": "auf uns blicken die Engel, und Christus sieht uns.",
          "patr_resp3": "Welche Würde und Herrlichkeit, von Christus den Kampfpreis zu erhalten.",
          "oration": "Herr, unser Gott, wir gedenken der heiligen Märtyrer Pontianus und Hippolyt und ehren ihr ruhmvolles Sterben für Christus. Das Beispiel ihrer Treue mehre in uns die Liebe zu dir und stärke unseren Glauben. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Pontianus und Hippolyt",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, wir gedenken der heiligen Märtyrer Pontianus und Hippolyt und ehren ihr ruhmvolles Sterben für Christus. Das Beispiel ihrer Treue mehre in uns die Liebe zu dir und stärke unseren Glauben. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Pontianus und Hippolyt",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, wir gedenken der heiligen Märtyrer Pontianus und Hippolyt und ehren ihr ruhmvolles Sterben für Christus. Das Beispiel ihrer Treue mehre in uns die Liebe zu dir und stärke unseren Glauben. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "16": {
      "n1": {
        "name": "Rochus",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Heilige der Nächstenliebe",
          "comm_2": "Comm_2",
          "patr_autor": "Gregor von Nazianz († 390)",
          "patr_werk": "Aus einer Rede über die Liebe zu den Armen.",
          "patr_text": "^hMut zum Dienst an den Kranken^pWenn du gesund und wohlhabend bist, so lindere die Not des Kranken und Armen. Bist du nicht gefallen, so hilf dem, der gefallen und zerschlagen ist. Bist du fröhlich, nimm dich des Trauernden an. Blüht dir das Glück, so steh dem bei, der Unglück und Not leidet. Erzeige dich Gott dankbar, dass du zu denen gehörst, die anderen Gutes tun können, und nicht zu denen, welche die Wohltaten anderer nötig haben.^pNichts macht den Menschen Gott ähnlicher, als anderen wohlzutun, wenn auch der eine mehr, der andere weniger Wohltaten erweist, ein jeder, meine ich, nach seinen Kräften. Gott hat den Menschen erschaffen und nimmt ihn nach seinem Fall wieder auf; darum sollst du den Gefallenen nicht verachten. Gott hat ihm das größte Erbarmen erzeigt, indem er ihm das Gesetz und die Propheten gab, den (Alten) schattenhaften Bund und den (Neuen) Bund in der Wahrheit, die Gaben des Heiligen Geistes, das Geheimnis des neuen Heils.^pDu also, wenn du auch das Große vermagst, nämlich der Seele Gutes zu tun (denn auch hierin macht dich Gott reich, wenn du nur willst), versäume nicht, dem Bedürftigen auch diese Wohltaten zu erweisen. Wenn du jedoch zu solcher Gabe nicht fähig bist, so schenke wenigstens das Geringere, über das du verfügst: Leiste Hilfe, spende Nahrung, schenke ein abgelegtes Kleid, wende Heilmittel an, verbinde Wunden, erkundige dich nach dem Unglück des Nächsten, ermahne zur Geduld, fasse Mut, besuche die Notleidenden!^pDu vergibst dir dadurch nichts. Du wirst dich bestimmt nicht anstecken, wenn auch überängstliche Leute das meinen, weil sie sich durch dummes Gerede betören lassen, oder vielmehr, weil ihnen dies zum Vorwand für ihre Furchtsamkeit oder Gewissenlosigkeit dient, da sie ihre Zuflucht zur Feigheit nehmen, als sei diese etwas Großes und Kluges.^pDu aber, Knecht Christi, der du Gott und die Menschen liebst, dulde in dir nichts Unwürdiges. Mag auch der Krankenpflege etwas von Furcht und Bangigkeit anhaften, sei mutig im Glauben! Das Mitleid siege über die Feigheit, die Gottesfurcht über die Weichlichkeit. Frömmigkeit halte die fleischlichen Einwände nieder. Verachte deinen Bruder nicht und geh nicht an ihm vorüber; wende dich nicht von ihm ab wie von einem Greuel oder Makel oder sonst etwas, das man fliehen und verabscheuen müsste. Er ist ein Glied von dir, wenn er auch vom Unglück niedergebeugt ist. Der Arme ist dir wie Gott anvertraut (vgl. Ps 10,14).",
          "patr_resp1": "Ich war hungrig, und ihr habt mir zu essen gegeben; ich war durstig, und ihr habt mir zu trinken gegeben; ich war krank, und ihr habt mich besucht.",
          "patr_resp2": "Was ihr für einen meiner geringsten Brüder getan habt, das habt ihr mir getan.",
          "patr_resp3": "Kommt her, die ihr von meinem Vater gesegnet seid, nehmt das Reich in Besitz.",
          "oration": "Gütiger Gott, du hast den heiligen Rochus berufen, in schwerer Zeit den Kranken und Armen beizustehen. Höre auf seine Fürsprache: Bewahre uns vor Schaden an Leib und Seele und mache auch uns bereit, unseren Mitmenschen in Krankheit und Not zu helfen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Rochus",
          "genitiv": "Genitiv",
          "comm_1": "Heilige der Nächstenliebe",
          "comm_2": "Comm_2",
          "oration": "Gütiger Gott, du hast den heiligen Rochus berufen, in schwerer Zeit den Kranken und Armen beizustehen. Höre auf seine Fürsprache: Bewahre uns vor Schaden an Leib und Seele und mache auch uns bereit, unseren Mitmenschen in Krankheit und Not zu helfen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Rochus",
          "genitiv": "Genitiv",
          "comm_1": "Heilige der Nächstenliebe",
          "comm_2": "Comm_2",
          "oration": "Gütiger Gott, du hast den heiligen Rochus berufen, in schwerer Zeit den Kranken und Armen beizustehen. Höre auf seine Fürsprache: Bewahre uns vor Schaden an Leib und Seele und mache auch uns bereit, unseren Mitmenschen in Krankheit und Not zu helfen. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Stephan von Ungarn",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Stephan von Ungarn († 1038)",
          "patr_werk": "Aus einem Mahnschreiben an seinen Sohn.",
          "patr_text": "^hMein Sohn, höre auf die Lehre deines Vaters^pMein Sohn, wenn du der Königskrone Ehre machen willst, befehle und rate ich dir, den katholischen und apostolischen Glauben gewissenhaft und sorgsam zu wahren, damit du allen, die Gott dir als Untertanen anvertraut hat, ein gutes Beispiel gibst und dich alle Männer der Kirche mit Recht einen wirklichen Mann des christlichen Bekenntnisses nennen können. Denn ohne dieses Bekenntnis, dessen bin ich sicher, bist du kein Christ und kein Sohn der Kirche. Im Königspalast hat die Kirche nach dem Glauben den zweiten Rang; denn sie wurde von Christus, unserem Haupt, gegründet, dann durch seine Apostel und die heiligen Väter weiterverbreitet, gefestigt und über den ganzen Erdkreis ausgedehnt. Obgleich sie immer neue Nachkommen hervorbringt, ist sie doch an manchen Orten schon eine alte Kirche.^pDoch in unserem Reich, lieber Sohn, gilt sie immer noch als ganz jung und neu. Sie braucht darum eine besonders kluge und umsichtige Betreuung. Das Gute, das Gott uns in seiner Barmherzigkeit ohne unser Verdienst gewährt hat, darfst du nicht durch Trägheit, Unlust und Nachlässigkeit zerstören.^pGeliebter Sohn, Freude meines Herzens, du Hoffnung derer, die nach uns kommen, ich bitte dich und gebiete dir: sei nicht nur gütig gegen Verwandte und Angehörige, gegen Fürsten, Führer und reiche Leute, sondern auch gegen Fremde und alle, die zu dir kommen. Taten der Güte führen dich zur höchsten Glückseligkeit. Sei gnädig gegen alle, die Gewalt erleiden, und erwäge dabei immer das Beispiel des Herrn in deinem Herzen: „Liebe will ich, nicht Schlachtopfer“ (Hos 6,6). Habe Geduld nicht allein mit den Mächtigen, sondern auch mit dem Machtlosen.^pSei stark, damit das Glück dich nicht übermütig und das Unglück nicht niedergeschlagen macht. Sei demütig, damit Gott dich erhöht, jetzt und in Zukunft. Sei maßvoll, strafe und verurteile nicht maßlos. Sei milde, damit du niemals der Gerechtigkeit widerstreitest. Sei edel und kränke keinen unbedacht. Sei schamhaft und meide üble Begierden wie den Stachel des Todes. Aus alldem, was ich gesagt habe, setzt sich die Königskrone zusammen. Ohne all das kann niemand hier auf Erden herrschen, niemand zum ewigen Reich gelangen.",
          "patr_resp1": "Übe Barmherzigkeit Tag um Tag!",
          "patr_resp2": "Wenn du gibst, zeige ein frohes Gesicht.",
          "patr_resp3": "Gib dem Höchsten, was er selbst dir gegeben hat.",
          "oration": "Allmächtiger Gott, du hast den heiligen König Stephan berufen, das ungarische Volk zum christlichen Glauben zu führen. Lass uns erfahren, dass er seinem Volk und uns allen vom Himmel her ein mächtiger Helfer ist. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Stephan von Ungarn",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, du hast den heiligen König Stephan berufen, das ungarische Volk zum christlichen Glauben zu führen. Lass uns erfahren, dass er seinem Volk und uns allen vom Himmel her ein mächtiger Helfer ist. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Stephan von Ungarn",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, du hast den heiligen König Stephan berufen, das ungarische Volk zum christlichen Glauben zu führen. Lass uns erfahren, dass er seinem Volk und uns allen vom Himmel her ein mächtiger Helfer ist. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "17": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Märt",
          "comm_2": "Ord",
          "patr_autor": "Maximilian Kolbe († 1941)",
          "patr_werk": "Aus der Schrift „Jedem ist der Weg gewiesen“.",
          "patr_text": "^hDurch Leiden zur Herrlichkeit^pEs gibt keinen Menschen unter der Sonne, der nicht das Glück suchte. Bei allem, was wir tun, haben wir das Glück in dieser oder jener Form als Ziel vor Augen und streben ihm von Natur aus zu. Das Glück aber, das nicht auf der Wahrheit gegründet ist, kann ebensowenig von Dauer sein, wie die Unwahrheit von Dauer ist. Allein die Wahrheit ist das zuverlässige Fundament des Glücks, für den einzelnen Menschen wie für die gesamte Menschheit.^pDer Blick des Ungläubigen reicht nicht weiter als bis zum Sarge. Er kann der rein stofflichen Welt nicht entrinnen. Schaut euch diese Menschen an, die im tiefsten Materialismus befangen sind: Sie wagten es, der Menschheit das Glück zu verheißen. Alles, was die Welt geben kann, reicht doch für den Menschen nicht aus. Alle diese Güter haben doch ihre Grenzen. Sie enttäuschen und wecken das Verlangen nach einem größeren, dauerhaften Glück.^pDie Immaculata sagte in der Stunde der Verkündigung: „Ich bin die Magd des Herrn; mir geschehe, wie du es gesagt hast“ (Lk 1,38). Wie Gott es will, so soll es geschehen. In diesen Worten ist die ganze Glückseligkeit, aber auch unsere Aufgabe hier auf Erden eingeschlossen. Gott hat uns erschaffen, dass wir seine Werkzeuge seien. Bitten wir die heilige Mutter, dass sie uns lehrt, wie die Seele einer Magd des Herrn beschaffen sein soll.^pDas muss unser ganzes Bestreben sein, Gott dem Herrn die höchste Ehre zu erweisen. Wir müssen darum bemüht sein, Jesus so zu lieben, wie ihn seine heilige Mutter geliebt hat. Sie steht Gott am nächsten. Wenn wir uns ihr nähern, nähern wir uns damit Gott selbst.^pMitunter ist es wirklich schwierig im Leben, man meint, es gäbe keinen Ausweg mehr. Weil wir nicht alles wissen können, sehen wir den Zusammenhang nicht zwischen unserem eigentlichen Glück und den widrigen Umständen, die uns quälen. Was sollen wir also tun? Gott vertrauen. Durch solches Vertrauen – auch ohne letzte Einsicht in die Dinge – erweisen wir gleichzeitig Gott eine große Ehre, denn wir erkennen seine Weisheit, Güte und Macht an. Vergessen wir nicht, immer wieder mit Jesus auf dem Ölberg zu sprechen: „Nicht mein, sondern dein Wille geschehe.“ Wenn Gott es für richtig und gut findet, dass es so sei wie auf dem Ölberg, dass unsere Bitte keinen Erfolg haben soll und wir den Kelch bis zur Neige trinken müssen, dann wollen wir nicht vergessen, dass Jesus nicht nur gelitten hat, sondern danach in Herrlichkeit auferstanden ist. So müssen auch wir durch Leiden zur Auferstehung kommen.",
          "patr_resp1": "Ich vertraue auf Gott und fürchte mich nicht. Was können Menschen mir antun?",
          "patr_resp2": "Gott hat die Macht für ewige Zeiten.",
          "patr_resp3": "Nur kurze Zeit müsst ihr leiden. Gott wird euch aufrichten und stärken.",
          "oration": "Gott, in deiner Kraft hat der heilige Maximilian Kolbe die Qualen des Martyriums ausgehalten und sein Leben für den Bruder in Christus hingegeben. Sieh auf unsere Schwachheit und gib uns die Kraft, deine Wahrheit und deine Liebe in unserem Leben und Sterben zu bezeugen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Märt",
          "comm_2": "Ord",
          "oration": "Gott, in deiner Kraft hat der heilige Maximilian Kolbe die Qualen des Martyriums ausgehalten und sein Leben für den Bruder in Christus hingegeben. Sieh auf unsere Schwachheit und gib uns die Kraft, deine Wahrheit und deine Liebe in unserem Leben und Sterben zu bezeugen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Märt",
          "comm_2": "Ord",
          "oration": "Gott, in deiner Kraft hat der heilige Maximilian Kolbe die Qualen des Martyriums ausgehalten und sein Leben für den Bruder in Christus hingegeben. Sieh auf unsere Schwachheit und gib uns die Kraft, deine Wahrheit und deine Liebe in unserem Leben und Sterben zu bezeugen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "19": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Johannes Eudes († 1680)",
          "patr_werk": "Aus der Schrift „Über das bewundernswerte Herz Jesu“.",
          "patr_text": "^hDer Quell des Heils und des wahren Lebens^pIch bitte dich, denk daran, dass unser Herr Jesus Christus dein Haupt ist und dass du eines seiner Glieder bist. Er ist für dich, was das Haupt für die Glieder bedeutet: alles, was sein ist, ist auch dein: Geist, Herz, Leib, Seele und alle Fähigkeiten. Du sollst sie gebrauchen, als gehörten sie dir, um ihm zu dienen, ihn zu loben, zu lieben und zu verherrlichen. Du bist für ihn, was ein Glied für das Haupt ist. Darum wünscht er dringend, alle deine Fähigkeiten, als seien es die seinen, in Dienst zu nehmen, um dem Vater zu dienen und ihn zu verherrlichen.^pDoch er gehört dir nicht nur, er will auch in dir sein, in dir leben und herrschen. wie das Haupt in seinen Gliedern lebt und herrscht. Er will, dass alles, was in ihm ist, in dir lebt und herrscht: sein Geist in deinem Geist, sein Herz in deinem Herzen, alle Fähigkeiten seiner Seele in den Fähigkeiten deiner Seele, damit sich an dir das Wort erfüllt: „Verherrlicht Gott und tragt ihn in eurem Leib, damit das Leben Jesu an euch sichtbar wird“ (vgl. 1 Kor 6,20; 2 Kor 4,10).^pAuch du, du gehörst dem Sohn Gottes nicht nur, sondern du sollst in ihm sein, wie Glieder mit dem Haupt verbunden sind. Alles, was in dir ist, soll in ihn eingefügt werden; du sollst dein Leben von ihm entgegennehmen und von ihm regieren lassen. Wahres Leben findest du nur in ihm, der für alle der Quell wahren Lebens ist; außerhalb von ihm nur Tod und Verderben. Das sei dein einziger Grundsatz für alles, was du empfindest, für alles, was du tust, und für die Kräfte deiner Seele. Von ihm und für ihn sollst du leben und das Wort erfüllen: „Keiner von uns lebt sich selber, und keiner stirbt sich selber: leben wir, so leben wir dem Herrn, sterben wir, so sterben wir dem Herrn. Ob wir leben oder ob wir sterben, wir gehören dem Herrn. Denn Christus ist gestorben und lebendig geworden, um Herr zu sein über Tote und Lebende“ (Röm 14,7–9).^pSei eins mit Jesus wie die Glieder mit dem Haupt. Darum musst du einen Geist mit ihm haben, eine Seele, ein Leben, einen Willen, eine Absicht, ein Herz. Er muss dein Geist sein, dein Herz, deine Liebe, dein Leben und alles, was dein ist. Diese großen Dinge haben für den, der an Christus glaubt, ihren Ursprung in der Taufe, sie werden gemehrt und gefestigt durch die Firmung und den guten Gebrauch, den er von den übrigen Gnadengaben macht. Sie werden ihm von Gott mitgegeben und durch die Eucharistie aufs höchste vollendet.",
          "patr_resp1": "Dafür ist Christus gestorben und auferstanden, um Herr zu sein über Tote und Lebende.",
          "patr_resp2": "Ob wir leben oder sterben, wir gehören dem Herrn.",
          "patr_resp3": "Keiner von uns lebt sich selbst, und keiner stirbt sich selbst.",
          "oration": "Gott, in deiner Weisheit hast du den heiligen Johannes Eudes erwählt, den unergründlichen Reichtum Christi neu zu verkünden. Lehre uns durch das Wort und das Beispiel dieses Heiligen, dich immer tiefer zu erkennen und im Licht des Evangeliums voranzuschreiten. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, in deiner Weisheit hast du den heiligen Johannes Eudes erwählt, den unergründlichen Reichtum Christi neu zu verkünden. Lehre uns durch das Wort und das Beispiel dieses Heiligen, dich immer tiefer zu erkennen und im Licht des Evangeliums voranzuschreiten. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, in deiner Weisheit hast du den heiligen Johannes Eudes erwählt, den unergründlichen Reichtum Christi neu zu verkünden. Lehre uns durch das Wort und das Beispiel dieses Heiligen, dich immer tiefer zu erkennen und im Licht des Evangeliums voranzuschreiten. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "23": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Rosa von Lima († 1617)",
          "patr_werk": "Aus einem Brief an den Arzt Castillo.",
          "patr_text": "^hDie Liebe Christi verstehen, die alle Erkenntnis übersteigt^pDer Herr und Heiland erhob seine Stimme und sprach mit unvergleichlicher Hoheit: ‚Alle sollen wissen, dass auf die Anfechtung die Gnade folgt; sie sollen einsehen, dass die Große der Gnadengaben in dem gleichen Maß wachst, wie die Mühsale zunehmen; sie sollen erkennen, dass wir ohne die Last der Bedrängnis nicht zum Gipfel der Gnade gelangen können. Die Menschen sollen sich vor Irrtum und Selbsttäuschung hüten. Das ist die einzige Leiter zum Paradies, ohne Kreuz findet niemand den Aufstieg zum Himmel.‘^pAls ich diese Worte hörte, kam ein heftiges Verlangen über mich, als müsste ich mich mitten auf den Platz stellen und mit lautem Schreien allen Menschen jedes Alters, Geschlechts und Standes zurufen: ‚Hört, ihr Völker, hört, ihr Stämme! Im Auftrag Christi und mit den Worten aus seinem Mund ermahne ich euch: Wir können keine Gnade erwerben, wenn wir keine Drangsale erleiden; notwendig müssen sich Mühen auf Mühen häufen, wenn wir „Anteil an der göttlichen Natur erhalten“ (vgl. 2 Petr 1,4), die Herrlichkeit der Kinder Gottes und das volle Glück der Seele gewinnen wollen.‘^pDer gleiche Stachel trieb mich an, die Schönheit der göttlichen Gnade zu verkündigen. Das bedrückte mich mit Not, trieb mir den Schweiß aus den Poren und ließ mich lechzen. Es kam mir vor, als könne meine Seele nicht länger im Leib gefangenbleiben. Würde man sie aber festhalten, dann werde sie die Ketten zerbrechen und frei, allein und ungehindert die ganze Welt durcheilen und rufen: ‚O wenn doch die Sterblichen erkennen wollten, wie erhaben die Gnade Gottes ist, wie schön, wie edel, wie kostbar; welche Reichtümer sie in sich birgt, wieviel Freude und Jubel! Ohne Zweifel würden dann die Menschen mit Eifer und Fleiß danach streben, sich selber Leiden und Schmerzen zuzufügen! Auf dem ganzen Erdkreis würden alle Menschen eher Unglück, Krankheit und Qual als Glück suchen, um den unendlichen Schatz der Gnade zu erlangen. Das ist Lohn und der letzte Gewinn des Leidensmutes. Keiner würde sich über Kreuz und Mühe beklagen, die ihm etwa begegneten, wenn er die Waage erkennen würde, auf der sie den Menschen zugewogen werden.‘",
          "patr_resp1": "Das Törichte der Welt hat Gott erwählt, um die Weisen zuschanden zu machen.",
          "patr_resp2": "Kein Mensch rühme sich vor Gott!",
          "patr_resp3": "Der Herr ist erhaben: er schaut auf die Niedrigen, und die Stolzen erkennt er von ferne.",
          "oration": "Gott, du Sehnsucht der Menschen, du hast die heilige Rosa von Lima mit solcher Liebe an dich gezogen, dass sie die Welt verließ und in harter Buße für dich allein lebte. Hilf uns auf ihre Fürsprache, unseren Weg durch diese Welt so zu gehen, dass wir dich, den unversiegbaren Quell der Freude, finden. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Sehnsucht der Menschen, du hast die heilige Rosa von Lima mit solcher Liebe an dich gezogen, dass sie die Welt verließ und in harter Buße für dich allein lebte. Hilf uns auf ihre Fürsprache, unseren Weg durch diese Welt so zu gehen, dass wir dich, den unversiegbaren Quell der Freude, finden. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Sehnsucht der Menschen, du hast die heilige Rosa von Lima mit solcher Liebe an dich gezogen, dass sie die Welt verließ und in harter Buße für dich allein lebte. Hilf uns auf ihre Fürsprache, unseren Weg durch diese Welt so zu gehen, dass wir dich, den unversiegbaren Quell der Freude, finden. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "25": {
      "n1": {
        "name": "Ludwig IX. von Frankreich",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Ludwig IX. von Frankreich († 1270)",
          "patr_werk": "Aus dem Testament an seinen Sohn.",
          "patr_text": "^hEin gerechter König richtet das Land auf^pLieber Sohn, an erster Stelle möchte ich dich lehren, den Herrn, deinen Gott, aus deinem ganzen Herzen und aus allen Kräften zu lieben; denn ohne das gibt es kein Heil.^pMein Sohn, du sollst dich vor all dem hüten, wovon du weißt, dass es Gott missfällt, das heißt vor jeder schweren Sünde. Eher sollst du dich jeder Art von Martyrium unterwerfen als eine Todsünde begehen.^pWenn Gott zulässt, dass dich ein Unglück trifft, musst du es bereitwillig ertragen und bedenken, dass es dir zum Guten ausschlägt und dass du es vielleicht durchaus verdient hast. Schenkt Gott dir aber Wohlergehen, sollst du ihm demütig danken. Hüte dich, dass du nicht schlechter wirst, sei es durch eitle Ruhmsucht oder auf irgendeine andere Weise; denn du darfst nicht mit den Gaben Gottes gegen Gott streiten oder ihn beleidigen.^pGern und fromm höre den Gottesdienst der Kirche. Wenn du im Gotteshaus bist, hüte dich umherzuschauen, und führe keine leeren Gespräche. Vielmehr bete zu Gott mit Worten des Mundes oder in der Betrachtung des Herzens. Dein Herz sei gütig gegen die Armen, Elenden und Betrübten. Komm ihnen nach Möglichkeit entgegen und tröste sie! Danke Gott für alle Gaben, die er dir verliehen hat, damit du noch größerer würdig wirst.^pSei gerecht gegenüber deinen Untertanen. Halte den Weg der Gerechtigkeit ein, und weiche nicht zur Rechten oder zur Linken ab! Schlag dich stets eher auf die Seite der Armen als auf die der Reichen, bis du sicher bist, die Wahrheit gefunden zu haben. Sei sorgfältig darauf bedacht, dass alle deine Untertanen im Schutz der Gerechtigkeit und des Friedens leben können, besonders kirchliche Personen und Ordensleute.^pSei unserer Mutter, der römischen Kirche, und dem Papst als dem geistlichen Vater ergeben und gehorsam. Bemühe dich, dass aus deinem Land alle Sünden verschwinden, besonders Gotteslästerung und Irrlehre.^pLieber Sohn, ich gebe dir jeden Segen, den ein liebender Vater seinem Sohn geben kann. Die heilige Dreieinigkeit und alle Heiligen mögen dich vor allem Bösen bewahren. Der Herr gebe dir die Gnade, seinen Willen ganz zu erfüllen, so dass du ihm dienst und ihn ehrst und dass wir nach diesem Leben gemeinsam die Gnade erlangen, ihn ohne Ende zu schauen, zu lieben und zu loben. Amen.",
          "patr_resp1": "Er tat, was gut war vor dem Herrn;",
          "patr_resp2": "keiner war ihm gleich unter allen Königen.",
          "patr_resp3": "Er hing dem Herrn an und wich nicht von seinen Spuren.",
          "oration": "Gott, du hast den heiligen König Ludwig aus der Verantwortung für sein Land in das himmlische Reich gerufen. Seine Fürsprache helfe uns, die irdischen Pflichten so zu erfüllen, dass wir zum Himmelreich gelangen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Ludwig IX. von Frankreich",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du hast den heiligen König Ludwig aus der Verantwortung für sein Land in das himmlische Reich gerufen. Seine Fürsprache helfe uns, die irdischen Pflichten so zu erfüllen, dass wir zum Himmelreich gelangen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Ludwig IX. von Frankreich",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du hast den heiligen König Ludwig aus der Verantwortung für sein Land in das himmlische Reich gerufen. Seine Fürsprache helfe uns, die irdischen Pflichten so zu erfüllen, dass wir zum Himmelreich gelangen. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Josef von Calasanza",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Josef von Calasanz († 1648)",
          "patr_werk": "Aus einer Denkschrift an Kardinal Tonti.",
          "patr_text": "^hLasst uns danach trachten, Christus anzuhangen und ihm allein zu gefallen^pEs ist ein heiliger Dienst, Kinder zu erziehen, besonders die Kinder der Armen, und sie so zu belehren, dass sie das ewige Leben erlangen können. Dieser Dienst besitzt eine hohe Würde und findet großen Lohn; jedermann weiß es.^pWenn wir nämlich die Kinder unterrichten und sie vor allem in christlicher Frömmigkeit und Lehre erziehen, sorgen wir für ihr Heil an Leib und Seele, und wir leisten ihnen gewissermaßen den nämlichen Dienst wie ihre Schutzengel.^pDieser Dienst ist für diejenigen Menschen, welchen Geschlechtes und Standes sie auch sein mögen, eine ausgezeichnete Hilfe. Er zieht sie vom Bösen ab und hält sie zu guten Taten an. Junge Menschen werden mit solcher Hilfe derart zum Guten verwandelt, dass man in den so Erzogenen die Zöglinge von früher nicht mehr wiedererkennt. Junge Menschen kann der Erzieher leicht dahin führen, wohin er ihren Geist führen möchte; wenn wir sie erst verhärten lassen, wird die Möglichkeit, sie zu biegen, stark verringert oder zuweilen ganz aufgehoben.^pWenn wir den Kindern, besonders den armen, eine passende Erziehung angedeihen lassen, mehrt das ihre menschliche Würde. Die ganze menschliche und christliche Gesellschaft stimmt unserem Tun zu: Die Eltern, denn sie in erster Linie freuen sich, dass ihre Kinder auf guten Wegen geführt werden; die Lenker der Staaten, weil sie rechtschaffene Untertanen und gute Bürger gewinnen; vor allem aber die Kirche, denn die Kinder werden auf diese Weise mit größerer Reife und besserem Erfolg als Freunde Christi und Anhänger des Evangeliums in das vielfältige und vielgestaltige Leben der Kirche eingefügt.^pWer das Amt eines Lehrers annimmt und es mit Eifer und Gewissenhaftigkeit ausüben will, braucht viel Liebe, größte Geduld und vor allem eine tiefe Demut. Dann ist er wert, dass der Herr ihn auf sein demütiges Gebet hin zu einem tüchtigen Mitarbeiter der Wahrheit macht, ihn in der Ausübung der Aufgabe stärkt und ihn schließlich mit der Gabe vom Himmel beschenkt nach dem Wort: „Die Männer, die viele zum rechten Tun geführt haben, werden immer und ewig leuchten wie die Sterne“ (Dan 12,3).^pDas werden sie leichter erlangen, wenn sie sich durch ein Gelöbnis zum immerwährenden Dienst verpflichten, Christus anhängen und sich mühen, ihm in allem zu gefallen: „Was ihr für einen meiner geringsten Brüder getan habt, das habt ihr mir getan“ (Mt 25,40).",
          "patr_resp1": "Nicht nur am Evangelium Gottes ließen wir euch teilnehmen, sondern auch an unserm eigenen Leben.",
          "patr_resp2": "Ihr seid uns sehr lieb geworden.",
          "patr_resp3": "Ihr seid meine Kinder, für die ich von neuem Geburtswehen leide.",
          "oration": "Gütiger Gott, du hast den heiligen Josef von Calasanz zu einem Lehrer der Weisheit gemacht und ihn befähigt, sich mit Liebe und Geduld der Erziehung der Jugend zu widmen. Steh uns bei, wenn wir nach seinem Vorbild uns bemühen, junge Menschen zur Erkenntnis der Wahrheit zu führen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Josef von Calasanza",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gütiger Gott, du hast den heiligen Josef von Calasanz zu einem Lehrer der Weisheit gemacht und ihn befähigt, sich mit Liebe und Geduld der Erziehung der Jugend zu widmen. Steh uns bei, wenn wir nach seinem Vorbild uns bemühen, junge Menschen zur Erkenntnis der Wahrheit zu führen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Josef von Calasanza",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gütiger Gott, du hast den heiligen Josef von Calasanz zu einem Lehrer der Weisheit gemacht und ihn befähigt, sich mit Liebe und Geduld der Erziehung der Jugend zu widmen. Steh uns bei, wenn wir nach seinem Vorbild uns bemühen, junge Menschen zur Erkenntnis der Wahrheit zu führen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "26": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        }
      }
    },
    "31": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Basilius der Große († 379)",
          "patr_werk": "Aus einem Brief an die Bischöfe Italiens und Galliens über die arianische Verfolgung.",
          "patr_text": "^hBetrachtet als wahre Jünger des Herrn unsere Drangsale als die eurigen^pEine Verfolgung ist über uns hereingebrochen, ehrwürdige Brüder, und zwar die heftigste der Verfolgungen. Die Hirten werden verfolgt, damit die Herden zerstreut werden: Und das Schlimmste dabei ist, dass die Gequälten die Leiden nicht im Bewusstsein des Märtyrers tragen, noch das Volk die Kämpfer als Märtyrer verehrt, weil die Verfolger selbst den Namen ‚Christen‘ tragen. Die gewissenhafte Beobachtung der Überlieferungen der Väter wird jetzt als Verbrechen furchtbar geahndet. Die Gottesfürchtigen werden aus der Heimat verstoßen und in die Einöden verbannt. Nicht das graue Haar wird von den ungerechten Richtern geachtet, nicht die Ausübung der Religion, nicht der Wandel nach dem Evangelium, dem einer von Jugend an bis ins Greisenalter treu geblieben ist. Kein Missetäter wird ohne Prozess verurteilt, die Bischöfe aber werden auf bloße Verleumdung hin gefangengesetzt, angeklagt und ohne Beweise den Strafen überantwortet. Einige wurden sogar, ohne ihre Ankläger kennengelernt und die Gerichtshöfe gesehen zu haben, ja ohne überhaupt verleumdet worden zu sein, mitten in der Nacht gewaltsam fortgeschleppt, über die Grenze gejagt und in der Einöde dem Tode durch Entbehrungen preisgegeben.^pUns steht es an, zu sagen: „Wir haben in dieser Zeit weder Vorsteher noch Propheten und keinen, der uns anführt, weder Speiseopfer noch Räucherwerk, noch einen Ort, wo wir vor dem Angesicht des Herrn opfern und Barmherzigkeit finden können“ (vgl. Dan 3,38). Dies schreiben wir euch, obschon ihr es bereits wisst; gibt es doch keinen Fleck auf der Erde, wo unsere Heimsuchungen nicht schon bekannt sind. Ihr dürft daher nicht meinen, wir sagten das, um euch zu belehren oder euch an die Sorge zu erinnern. Wir wissen ja, dass ihr uns niemals vergessen werdet, ebensowenig wie eine Mutter die Kinder ihres Schoßes vergisst. Wir tun das vielmehr, weil auch sonst die von Kummer Bedrückten in Seufzern Linderung ihrer Schmerzen suchen; wir schütteln gleichsam die Last der Trauer dadurch von uns ab, dass wir euerer Liebe unsere vielfältigen Heimsuchungen mitteilen. Vielleicht lasst ihr euch bewegen, inständig für uns zu beten und den Herrn zu bitten, dass er uns gnädig sei.^pAls wahre Jünger des Herrn betrachtet darum unsere Drangsale als .die eurigen° Nicht um Geldes und der Ehre willen, nicht wegen eines andern zeitlichen Gutes werden wir bekämpft, sondern wegen unseres gemeinsamen Besitzes, wegen des väterlichen Schatzes, wegen des gesunden Glaubens stehen wir auf dem Kampfplatz. Seht nicht allein auf euch, die ihr im windstillen Hafen seid und die ihr durch die Gnade Gottes vor dem Sturm der bösen Geister bewahrt seid. Reicht auch den Kirchen die Hand, die dem Sturm preisgegeben sind, damit sie nicht vereinsamt und verlassen Schiffbruch im Glauben erleiden.",
          "patr_resp1": "Der Herr stand ihm bei vor seinen Feinden und verlieh ihm Kraft vor seinen Verfolgern;",
          "patr_resp2": "er schenkte ihm Ehre und Ruhm.",
          "patr_resp3": "Er ging mit ihm in den Kerker und überließ ihn nicht seinen Ketten.",
          "oration": "Allmächtiger Gott, du hast dem heiligen Paulinus von Trier im Kampf gegen die arianische Irrlehre unerschrockenen Mut gegeben, so dass er auch die Verbannung nicht scheute. Lehre uns, das Wahre vom Falschen zu unterscheiden, und hilf uns, ohne Furcht für die Wahrheit einzutreten. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, du hast dem heiligen Paulinus von Trier im Kampf gegen die arianische Irrlehre unerschrockenen Mut gegeben, so dass er auch die Verbannung nicht scheute. Lehre uns, das Wahre vom Falschen zu unterscheiden, und hilf uns, ohne Furcht für die Wahrheit einzutreten. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, du hast dem heiligen Paulinus von Trier im Kampf gegen die arianische Irrlehre unerschrockenen Mut gegeben, so dass er auch die Verbannung nicht scheute. Lehre uns, das Wahre vom Falschen zu unterscheiden, und hilf uns, ohne Furcht für die Wahrheit einzutreten. Darum bitten wir durch Jesus Christus."
        }
      }
    }
  },
  "9": {
    "5": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        }
      }
    },
    "9": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        }
      }
    },
    "12": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_resp1": "Wahrhaft gesegnet bist du unter den Frauen, denn Evas Fluch hast du in Segen verwandelt.",
          "patr_resp2": "Durch dich leuchtet die Huld des Vaters den Menschen auf.",
          "patr_resp3": "Die vor dir waren, haben durch dich das Heil gefunden.",
          "oration": "Gott, unser Retter, der Name der seligen Jungfrau Maria ist für uns ein Zeichen der Hoffnung geworden. Befreie uns auf ihre Fürsprache aus allen Gefahren und vollende an uns das Werk der Erlösung. Darum bitten wir durch Jesus Christus. "
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, unser Retter, der Name der seligen Jungfrau Maria ist für uns ein Zeichen der Hoffnung geworden. Befreie uns auf ihre Fürsprache aus allen Gefahren und vollende an uns das Werk der Erlösung. Darum bitten wir durch Jesus Christus. "
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, unser Retter, der Name der seligen Jungfrau Maria ist für uns ein Zeichen der Hoffnung geworden. Befreie uns auf ihre Fürsprache aus allen Gefahren und vollende an uns das Werk der Erlösung. Darum bitten wir durch Jesus Christus. "
        }
      }
    },
    "17": {
      "n1": {
        "name": "Hildegard von Bingen",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Hildegard von Bingen († 1179)",
          "patr_werk": "Aus einem Brief an Werner von Kirchbolanden und seine Priestergemeinschaft.",
          "patr_text": "^hErscheinung der Kirche^pIm Jahre 1170 nach Christi Geburt lag ich lange krank danieder. Da schaute ich, wach an Körper und Geist, eine Frau von solcher Schönheit, dass Menschengeist es nicht zu fassen vermochte. Ihre Gestalt ragte von der Erde bis zum Himmel. Ihr Antlitz leuchtete von höchstem Glanz. Ihr Auge blickte zum Himmel. Bekleidet war sie mit einem strahlendhellen Gewand aus weißer Seide und einem Mantel, besetzt mit kostbaren Steinen. An den Füßen trug sie Schuhe aus Onyx.^pAber ihr Antlitz war mit Staub bestreut, ihr Gewand an der rechten Seite zerrissen. Auch hatte der Mantel seine erlesene Schönheit verloren, und ihre Schuhe waren von oben her beschmutzt. Mit lauter, klagender Stimme schrie sie zum hohen Himmel hinauf: Horch auf, Himmel: mein Antlitz ist besudelt! Trauere, Erde: mein Kleid ist zerrissen! Erzittere, Abgrund: meine Schuhe sind beschmutzt! Und weiter sprach sie: Im Herzen des Vaters war ich verborgen, bis der Menschensohn, in Jungfräulichkeit empfangen und geboren, sein Blut vergoss. Mit diesem Blut, als seiner Mitgift, hat er mich sich vermählt.^pDie Wundmale meines Bräutigams bleiben frisch und offen, solange die Sündenwunden der Menschen offen sind. Eben dieses Offenbleiben der Wunden Christi ist die Schuld der Priester. Mein Gewand zerreißen sie dadurch, dass sie Übertreter des Gesetzes, des Evangeliums und ihrer Priesterpflicht sind. Meinem Mantel nehmen sie den Glanz, da sie die ihnen auferlegten Vorschriften in allem vernachlässigen. Sie beschmutzen meine Schuhe, da sie die geraden, das heißt die harten und rauen Wege der Gerechtigkeit nicht einhalten und auch ihren Untergebenen kein gutes Beispiel geben. Dennoch finde ich bei einigen das Leuchten der Wahrheit.^pUnd ich hörte eine Stimme vom Himmel, die sprach: Dieses Bild stellt die Kirche dar. Deshalb, o Mensch, der du das schaust und die Klageworte hörst, künde es den Priestern, die zur Leitung und Belehrung des Gottesvolkes bestellt sind und denen gleich den Aposteln gesagt wurde: „Geht hinaus in die Welt, und verkündet das Evangelium allen Geschöpfen!“ (Mk 16,15)",
          "patr_resp1": "Der Herr gibt den Weisen die Weisheit und den Verständigen den Verstand.",
          "patr_resp2": "Tiefe und verborgene Dinge enthüllt er, bei ihm wohnt das Licht.",
          "patr_resp3": "Das alles wirkt der eine und gleiche Geist; einemjeden teilt er seine besonderen Gaben zu, wie er will.",
          "oration": "Gott, du Quelle des Lebens, du hast die heilige Hildegard mit prophetischem Geist erfüllt. Hilf uns, nach ihrem Vorbild über deine Wege nachzusinnen und deiner Führung zu folgen, damit wir in der Dunkelheit dieser Welt das Licht deiner Klarheit erkennen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Hildegard von Bingen",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Quelle des Lebens, du hast die heilige Hildegard mit prophetischem Geist erfüllt. Hilf uns, nach ihrem Vorbild über deine Wege nachzusinnen und deiner Führung zu folgen, damit wir in der Dunkelheit dieser Welt das Licht deiner Klarheit erkennen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Hildegard von Bingen",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Quelle des Lebens, du hast die heilige Hildegard mit prophetischem Geist erfüllt. Hilf uns, nach ihrem Vorbild über deine Wege nachzusinnen und deiner Führung zu folgen, damit wir in der Dunkelheit dieser Welt das Licht deiner Klarheit erkennen. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Robert Bellarmin",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Robert Bellarmin († 1621)",
          "patr_werk": "Aus einem Traktat über den Aufstieg des Geistes zu Gott.",
          "patr_text": "^hZu deinen Vorschriften neige mein Herz^p.,Herr, du bist gütig und reich an Gnade“ (Ps 86,5) Wer sollte dir nicht von ganzem Herzen dienen, sobald er anfängt, auch nur ein wenig die Milde deiner väterlichen Herrschaft zu kosten? Herr, was gebietest du deinen Dienern? „Nehmt mein Joch auf euch“, sagst du. Was für ein Joch ist das? Du sagst: „Mein Joch drückt nicht, und meine Last ist leicht.“ Wer sollte nicht gern ein Joch tragen, das nicht niederdrückt, sondern aufrichtet, und eine Last, die nicht beschwert, sondern tragen hilft? Mit Recht hast du also hinzugefügt; „So werdet ihr Ruhe finden für eure Seele“ (Mt 11,29.30).^pWas ist dein Joch, das nicht ermüdet, sondern Ruhe bringt? Dies ist das erste und größte Gebot: „Du sollst den Herrn, deinen Gott, lieben mit ganzem Herzen“ (Mt 22,37). Was ist leichter, angenehmer, erfreuender, als die Güte zu lieben, die Schönheit, die Liebe? Alles das bist du, Herr, mein Gott.^pVersprichst du nicht auch Lohn einem jeden, der deine Gebote hält, sie, die kostbarer sind als Gold in Menge, süßer als Honig, als Honig aus Waben? (vgl. Ps 19,11) Du versprichst ganz allgemein Lohn, reichsten Lohn, wie der Apostel Jakobus sagt: „Den Kranz des Lebens hat der Herr denen bereitet, die ihn lieben“ (vgl. Jak 1,12).^pWas ist der Kranz des Lebens? Er ist ein größeres Gut, als wir denken und begehren können. Denn so schreibt der heilige Paulus mit Jesaja: „Was kein Auge gesehen und kein Ohr gehört hat, was keinem Menschen in den Sinn gekommen ist: das Große, das Gott denen bereitet hat, die ihn lieben“ (1 Kor 2,9; vgl. Jes 64,3).^pWahrhaftig, in der Beobachtung deiner Gebote liegt bereits reicher Lohn. Dabei ist nicht nur dieses erste und höchste Gebot gut für die Menschen, die ihm gehorchen – nicht für Gott, der es gegeben hat –, auch die übrigen Gebote machen die Menschen, die ihnen gehorchen, vollkommen, zieren und erleuchten sie, machen sie gut und zuletzt glücklich.^pWenn du es also begreifst, erkenne, dass du zur Ehre Gottes und zu deinem ewigen Heil erschaffen bist, dass dies dein Ziel ist, dies die Mitte deiner Seele, der Schatz deines Herzens. Wenn du an dieses Ziel gelangst, bist du selig, unglücklich aber, wenn du es verfehlst.^pDarum halte alles für gut, was dich deinem Ziel näherbringt, für schlecht, was dich am Ziel vorbeiführt. Glück und Unglück, Reichturn und Armut, Gesundheit und Krankheit sind nach der Auffassung der Weisen an und für sich weder zu begehren noch zu fliehen. Vielmehr, wenn sie zur Ehre Gottes und zu deinem ewigen Glück beitragen, sind sie gut und zu begehren. Sind sie dem aber im Weg, dann sind sie schlecht, und wir sollen sie fliehen.",
          "patr_resp1": "Inmitten der Kirche öffnete der Herr ihm den Mund.",
          "patr_resp2": "Er hat ihn erfüllt mit dem Geist der Weisheit und des Verstandes.",
          "patr_resp3": "Jubel und Freude ließ er ihn finden.",
          "oration": "Ewiger Gott, du hast uns im heiligen Robert Bellarmin einen Bischof und Gelehrten geschenkt, der durch seine Schriften den Glauben der Kirche gefestigt hat. Höre auf seine Fürsprache und hilf deinem Volk, diesen Glauben in seiner ganzen Fülle zu bewahren und weiterzugeben. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Robert Bellarmin",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Ewiger Gott, du hast uns im heiligen Robert Bellarmin einen Bischof und Gelehrten geschenkt, der durch seine Schriften den Glauben der Kirche gefestigt hat. Höre auf seine Fürsprache und hilf deinem Volk, diesen Glauben in seiner ganzen Fülle zu bewahren und weiterzugeben. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Robert Bellarmin",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Ewiger Gott, du hast uns im heiligen Robert Bellarmin einen Bischof und Gelehrten geschenkt, der durch seine Schriften den Glauben der Kirche gefestigt hat. Höre auf seine Fürsprache und hilf deinem Volk, diesen Glauben in seiner ganzen Fülle zu bewahren und weiterzugeben. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "18": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Petrus Kanisius († 1597)",
          "patr_werk": "Aus einer Rede über die Aufgaben der Hirten der Kirche.",
          "patr_text": "^hDie Lehrer der Kirche^pLieben und verehren will ich die von Christus gesandten Apostel und ihre Nachfolger, die so eifrig den Samen des Evangeliums ausstreuen und so unermüdlich mitarbeiten an der Ausbreitung des Wortes Gottes; sie können mit Recht bezeugen: Jeder erachte uns als Diener Christi und Ausspender der Geheimnisse Gottes. Als treubesorgter Hausvater wollte der Herr, dass durch solche Diener und Boten das Licht des Evangeliums an dem Feuer, das er vom Himmel gebracht hatte, entzündet werde, dass es nicht unter den Scheffel gestellt, sondern auf den Leuchter erhoben werde und so seinen Schein überallhin werfe und aller Finsternis und allem Irrtum bei Juden und Heiden ein Ende mache.^pDenn für einen Lehrer des Evangeliums genügt es nicht, wenn er durch sein Wort beim Volke Licht verbreitet, wenn er wie eine Stimme in der Wüste ist, wenn er durch sein Wort andere in der Frömmigkeit zu fördern sucht – auch das muss er tun, andernfalls, wenn er den Dienst des Wortes vernachlässigte, würde er vom Propheten ein stummer Hund genannt, der nicht bellen kann (vgl. Jes 56,10) –, sondern er muss auch glühen vor Eifer, muss von Tatendrang und Liebe beseelt sein, damit er seinem Apostelamt Ehre macht und Paulus als seinem Vorbild folgt. Dieser war nicht damit zufrieden, dem Bischof von Ephesus die Weisung zu geben: Das musst du fordern und lehren! Arbeite wie ein guter Streiter Jesu Christi (vgl. 2 Tim 2,3)! Er hat auch ständig bei Freund und Feind das Evangelium verkündigt; er konnte zu den Leuten in Ephesus mit gutem Gewissen sagen: Ihr wisst, dass ich euch nichts von dem, was euch nützlich sein kann, vorenthalten habe; alles habe ich euch verkündigt, öffentlich und in den Häusern; vor Juden und Heiden habe ich die Bekehrung zu Gott und den Glauben an unsern Herrn Jesus Christus feierlich bezeugt (vgl. Apg 20,20.21).^pEin Hirt der Kirche muss nämlich so sein, dass er wie Paulus allen alles wird, dass der Kranke bei ihm Genesung findet, der Betrübte Freude, der Verzweifelnde Vertrauen, der Unerfahrene Belehrung, der Schwankende Klarheit, der Reuevolle Vergebung und Trost, kurz, ein jeder das, was ihm zum Heile notwendig ist. Darum ist es sehr sinnvoll, dass Christus, als er die ersten Lehrer der Welt und der Kirche bestellte, zu seinen Jüngern nicht bloß sagte: Ihr seid das Licht der Welt, sondern auch hinzufügte: Eine Stadt, die auf dem Berge liegt, kann nicht verborgen bleiben, auch zündet man kein Licht an und stellt es unter den Scheffel, vielmehr stellt man es auf den Leuchter, dass es allen, die im Hause sind, leuchte (vgl. Mt 5,14.15). Denn die Prediger täuschen sich, wenn sie meinen, sie könnten ihrer Aufgabe mehr durch einen glänzenden Vortrag als durch ein tadelloses Leben und durch glühende Liebe Genüge leisten.",
          "patr_resp1": "Komm, du guter und treuer Knecht, du bist im Kleinen ein treuer Verwalter gewesen, darum will ich dir Großes übertragen.",
          "patr_resp2": "Komm, nimm teil an der Freude deines Herrn.",
          "patr_resp3": "Herr, fünf Talente hast du mir gegeben; siehe, ich habe noch fünf dazugewonnen.",
          "oration": "Gott, von dem alles Gute kommt, aus Liebe zu dir hat der heilige Bischof und Märtyrer Lambert Besitz und Leben geringgeachtet. Gib uns auf seine Fürsprache die Freiheit des Geistes, damit wir uns ohne Zögern deiner Führung überlassen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, von dem alles Gute kommt, aus Liebe zu dir hat der heilige Bischof und Märtyrer Lambert Besitz und Leben geringgeachtet. Gib uns auf seine Fürsprache die Freiheit des Geistes, damit wir uns ohne Zögern deiner Führung überlassen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, von dem alles Gute kommt, aus Liebe zu dir hat der heilige Bischof und Märtyrer Lambert Besitz und Leben geringgeachtet. Gib uns auf seine Fürsprache die Freiheit des Geistes, damit wir uns ohne Zögern deiner Führung überlassen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "19": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Augustinus († 430)",
          "patr_werk": "Aus einer Predigt über das Verhältnis des Bischofs zu seiner Gemeinde.",
          "patr_text": "^hFür euch bin ich Bischof, mit euch Christ^pSeit auf meinen Schultern die Last des Bischofsamtes liegt, mit dem eine so schwere Verantwortung verbunden ist, erfüllt mich ständig bange Sorge wegen meiner Ehrenstellung. Was mich an meinem Amt schreckt, ist dies: ich könnte vielleicht mehr Freude an dem haben, was an dieser Stellung gefährlich ist, als an dem, was daran Frucht für euer Heil verspricht. Schreckt mich, was ich für euch bin, so tröstet mich, was ich mit euch bin. Für euch bin ich Bischof, mit euch Christ. Das eine ist der Name des Amtes, das ich übernahm, das andere der Name der Gnade, die ich empfing; das eine bedeutet Gefahr, das andere Heil.^pEs ist, als würden wir auf dem weiten Meer unserer Wirksamkeit von einem Sturm dahingetrieben. Denken wir aber daran, durch wessen Blut wir erlöst sind, dann wird uns dieser Gedanke zu einem rettenden Hafen, in den wir einlaufen, und während wir in diesem Amt die ihm eigene Arbeit verrichten, genießen wir in der uns allen gemeinsamen Gnade des Christseins Ruhe. So freut es mich denn mehr, dass ich mit euch erlöst, als dass ich über euch gesetzt bin. Dann bin ich in reicherem Maße euer Knecht im Sinn des Herrn und nicht undenkbar angesichts des Preises, durch den ich euer Mitknecht sein darf. Ich muss den Erlöser lieben und weiß, was er zu Petrus gesagt hat: „Simon, liebst du mich? Weide meine Schafe!“ (vgl. Joh 21,15–17) Das sagte er einmal, zweimal, dreimal. Nach der Liebe wurde gefragt und dann die Last auferlegt. Wo die Liebe größer wird, da wird die Last leichter.^p„Wie kann ich dem Herrn all das vergelten, was er mir Gutes getan hat?“ (Ps 116,12) So will ich denn sagen: Ich vergelte ihm dadurch, dass ich seine Schafe weide! Aber auch das tue „nicht ich, sondern das wirkt die Gnade Gottes zusammen mit mir“ (1 Kor 15,10). Wie kann ich mich also je als Vergelter erweisen, da mir die Gnade doch immer zuvorkommt? Und doch erwarten wir Lohn, weil wir ohne Lohn lieben und die Schafe weiden. Wie kann das geschehen? Wie geht das zusammen: Ohne Lohn will ich lieben und weiden, und: Ich verlange Lohn, weil ich weide. Auf keine Weise könnten wir von dem Lohn erwarten, den wir ohne Lohn lieben, wäre er nicht selber der Lohn, er, den wir lieben. Wenn die ‚Vergeltung‘ für unsere Erlösung darin besteht, dass wir die Schafe des Herrn weiden, was sollen wir ihm denn dafür vergelten, dass er uns zu Hirten gemacht hat? Wenn wir sündigen, sind wir schlechte Hirten, was Gott verhüten möge. Gute Hirten sind wir nur durch seine Gnade – und die gewähre er uns!",
          "patr_resp1": "Dieser ist wahrhaft ein Zeuge; er hat sein Blut für den Namen Christi vergossen.",
          "patr_resp2": "So gelangte er zum Himmelreich.",
          "patr_resp3": "Er fürchtete die Drohungen der Richter nicht und suchte nicht den Ruhm irdischer Würden.",
          "oration": "Ewiger Gott, du lässt uns heute den Gedenktag des heiligen Bischofs und Blutzeugen Januarius begehen. Gib uns den festen Glauben dieses Märtyrers und führe auch uns zur ewigen Freude. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Ewiger Gott, du lässt uns heute den Gedenktag des heiligen Bischofs und Blutzeugen Januarius begehen. Gib uns den festen Glauben dieses Märtyrers und führe auch uns zur ewigen Freude. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Ewiger Gott, du lässt uns heute den Gedenktag des heiligen Bischofs und Blutzeugen Januarius begehen. Gib uns den festen Glauben dieses Märtyrers und führe auch uns zur ewigen Freude. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "22": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Eucherius von Lyon († um 450)",
          "patr_werk": "Aus einem Bericht über das Martyrium des heiligen Mauritius und seiner Gefährten.",
          "patr_text": "^hSie gaben Gott, was Gottes war^pIm Heere des Maximianus gab es eine Legion Soldaten, die Thebäer hießen, hervorragend an Tapferkeit, noch hervorragender durch Glaubenstreue. für den Kaiser kämpften sie mit Tapferkeit, für Christus aber mit ihrer Frömmigkeit. Auch als Soldaten vergaßen sie das Gebot des Evangeliums nicht und gaben Gott, was Gottes, und dem Kaiser, was des Kaisers war. Als sie, wie andere Gruppen auch, zu gewaltsamem Vorgehen gegen die zahlreichen Christen aufgeboten wurden, waren sie es allein, die den grausamen Befehl zu verweigern wagten und erklärten, sie würden solchen Weisungen nicht gehorchen.^pAls Maximianus diese Antwort der Thebäer vernahm, ließ er jeden zehnten Mann der Legion mit dein Schwert hinrichten. Als aber der Befehl zum zweitenmal an die Thebäer erging, und sie erkannten, dass sie wieder zu verbrecherischen Handlungen verpflichtet werden sollten, erhob sich im Lager überall Lärm und Aufruhr. Alle schrien, keiner werde je zu solchen Verbrechen Beihilfe leisten. Sie zögen es vor, eher den Tod zu erleiden, als Befehlen gegen den christlichen Glauben zu folgen. Als Maximianus davon erfuhr, ließ er, grausamer als jedes Raubtier, wiederum jeden zehnten Mann hinrichten. Die übrigen Soldaten aber munterten sich gegenseitig auf, in diesem herrlichen Kampfe durchzuhalten.^pDen größten Überredungseifer zeigte dabei Mauritius, der nach der Überlieferung in der Legion den Rang eines Obersten innehatte. Gemeinsam mit dem Offizier Exsuperius, der die Soldaten ausbildete, und dem Soldatensenator Candidus, stärkte er den Glauben dadurch, dass sie jeden einzelnen Mann ermunterten und ermahnten. Gestärkt durch diese Offiziere, ließen sie Maximianus ihren Entschluss übermitteln.^pAls er ihn vernommen hatte, gab er die Hoffnung auf, ihre Standhaftigkeit erschüttern zu können, gab den Befehl, aufgrund eines einzigen Urteils alle hinzurichten und ließ zur Vollstreckung von allen Seiten zahlreiche Truppen heranziehen. So wurden alle mit dem Schwert enthauptet, ohne dass sie sich widersetzten. Sie legten ihre Waffen freiwillig nieder und hielten den Nacken ihren Henkern hin.",
          "patr_resp1": "Die Heiligen vergossen ihr Blut für den Herrn, sie liebten Christus in ihrem Leben und folgten ihm nach bis in den Tod.",
          "patr_resp2": "Darum schenkte ihnen der Herr den Siegeskranz.",
          "patr_resp3": "EIN Geist und Ein Glaube war in ihnen.",
          "oration": "Herr, unser Gott, du hast dem heiligen Märtyrer Mauritius und seinen Gefährten die Kraft gegeben, dem Glauben an Christus treu zu bleiben. Gib auch uns den Mut, dir mehr zu gehorchen als den Menschen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, du hast dem heiligen Märtyrer Mauritius und seinen Gefährten die Kraft gegeben, dem Glauben an Christus treu zu bleiben. Gib auch uns den Mut, dir mehr zu gehorchen als den Menschen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, du hast dem heiligen Märtyrer Mauritius und seinen Gefährten die Kraft gegeben, dem Glauben an Christus treu zu bleiben. Gib auch uns den Mut, dir mehr zu gehorchen als den Menschen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "24": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Augustinus († 430)",
          "patr_werk": "Aus einem Traktat zum Joharınesevangelium.",
          "patr_text": "^hWer an Christus glaubt, bleibt nicht in der Finsternis^pWir glauben dem Apostel, aber wir glauben nicht an den Apostel. Denn nicht der Apostel rechtfertigt den Sünder. Demjenigen aber, der an den glaubt, der den Sünder rechtfertigt, wird sein Glaube zur Gerechtigkeit angerechnet (vgl. Röm 4,5). Der Apostel hätte auch sagen können: Wer mich aufnimmt, nimmt den auf, der mich gesandt hat, oder: Wer mich hört, hört den, der mich gesandt hat. Denn der Herr selbst hat zu ihnen gesagt: „Wer euch aufnimmt, der nimmt mich auf, und wer mich aufnimmt, nimmt den auf, der mich gesandt hat“ (Mt 10,40). Denn der Herr wird im Diener geehrt und im Sohn der Vater.^pDer eingeborene Sohn Gottes aber konnte mit Recht sagen: „Glaubt an Gott, und glaubt an mich!“ (Joh 14,1); ferner: „Wer an mich glaubt, glaubt nicht an mich, sondern an den, der mich gesandt hat“ (Joh 12,44). Er weist nicht den Glauben des Gläubigen von sich weg, sondern will bloß nicht, dass der Glaubende bei der Knechtsgestalt stehenbleibt. Denn wenn einer an den Vater glaubt, der ihn gesandt hat, dann glaubt er folglich auch an den Sohn, ohne den der Vater nicht ist, wie der Gläubige wohl weiß. Und er glaubt so, dass er den Sohn als dem Vater gleich erkennt; denn im folgenden heißt es: „Und wer mich sieht, sieht den, der mich gesandt hat“ (Joh 12,45).^pBeachte die nun folgenden Worte: „Ich bin das Licht, das in die Welt gekommen ist, damit jeder, der an mich glaubt, nicht in der Finsternis bleibt“ (Joh 12,46). An einer anderen Stelle sagte er zu seinen Jüngern: „Ihr seid das Licht der Welt. Eine Stadt, die auf dem Berg liegt, kann nicht verborgen bleiben. Man zündet auch nicht ein Licht an und stellt es unter den Scheffel, sondern man stellt es auf den Leuchter; dann leuchtet es allen im Haus. So soll euer Licht vor den Menschen leuchten, damit sie eure guten Werke sehen und euern Vater im Himmel preisen“ (vgl. Mt 5,14–16).^pAber er hat nicht zu ihnen gesagt: Ihr seid das Licht, das in die Welt gekommen ist, damit jeder, der an euch glaubt, nicht in der Finsternis bleibt. Das könnt ihr nirgends lesen, glaubt mir! Alle Heiligen strahlen also Licht aus, aber sie erhalten das Licht im Glauben vom Herrn; jeder, der sich vom Herrn entfernt, gerät in die Finsternis. Das Licht, das von den Heiligen ausgeht, kann nicht von selbst erlöschen, denn es ist vollkommen unveränderlich. Wir glauben also einem solchen Menschen, der von diesem Licht erleuchtet ist: einem Propheten, einem Apostel. Aber wir glauben ihm, der selber das Licht bloß empfangen hat, nur um mit ihm an jenes Licht zu glauben, von dem er selber erleuchtet ist; und dadurch sollen auch wir erleuchtet werden – nicht jedoch von ihm, sondern mit ihm durch das gleiche Licht wie er.^pWenn der Herr sagt: „Damit jeder, der an mich glaubt, nicht in der Finsternis bleibt“, so gibt er damit deutlich zu erkennen, dass er alle in der Finsternis angetroffen hat. Damit sie nicht in der Finsternis bleiben, in der sie von ihm gefunden wurden, müssen sie an das Licht glauben, das in die Welt gekommen ist. Durch dieses Licht wurde die Welt erschaffen.",
          "patr_resp1": "Seht unsere Heiligen, die treuen Verkünder, die Väter unseres Glaubens.",
          "patr_resp2": "Für ihre Kinder beten sie allzeit zu dir, Herr Jesus Christus.",
          "patr_resp3": "Damit sie nicht Beute des Bösen werden, breiten sie schützend die Arme über sie aus.",
          "oration": "Gott, du Herr aller Völker, du hast durch die heiligen Bischöfe Rupert und Virgil Menschen verschiedener Sprache und Herkunft in die Gemeinschaft der Kirche eingefügt. Erhalte uns auf die Fürsprache dieser Heiligen in der Einheit des Glaubens und der Liebe. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Ev": "Weise Hirten sandte Christus seinem Volk,^ldie ihm den Weg zum Lichte wiesen.",
          "oration": "Gott, du Herr aller Völker, du hast durch die heiligen Bischöfe Rupert und Virgil Menschen verschiedener Sprache und Herkunft in die Gemeinschaft der Kirche eingefügt. Erhalte uns auf die Fürsprache dieser Heiligen in der Einheit des Glaubens und der Liebe. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Ev": "Das sind die heiligen Männer,^ldie Boten des Evangeliums,^ldie uns auf den Weg des Heiles führten.",
          "oration": "Gott, du Herr aller Völker, du hast durch die heiligen Bischöfe Rupert und Virgil Menschen verschiedener Sprache und Herkunft in die Gemeinschaft der Kirche eingefügt. Erhalte uns auf die Fürsprache dieser Heiligen in der Einheit des Glaubens und der Liebe. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "25": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Niklaus von Flüe († 1487)",
          "patr_werk": "Aus einem Dankbrief von Bruder Klaus an die Ratsherren von Bern.",
          "patr_text": "^hFriede ist allweg in Gott^pDer Name Jesus sei Euer Gruß, und wir wünschen Euch viel Gutes, und der Heilige Geist sei Euer letzter Lohn.^pIch danke Euch aufrichtig und innig für die freundliche Gabe, denn ich erkenne dadurch Eure väterliche Liebe, die mich weit mehr erfreute als die Gabe selbst. Ihr sollt wissen, dass ich sehr zufrieden bin. Und wäre die Gabe noch um die Hälfte kleiner, so wäre ich sehr wohl zufrieden; und wenn es mir möglich wäre, Eure Liebe gegen Gott und die Welt zu vergelten, so wäre ich mit gutem Willen bereit, es zutun. Der Bote, dem Ihr es aufgetragen habt, hat es mir überbracht, lasst ihn Euch empfohlen sein.^pAus Liebe schreibe ich Euch noch mehr.^pGehorsam ist die größte Ehre, die es im Himmel und auf Erden gibt, weshalb Ihr trachten müsst, einander gehorsam zu sein, und Weisheit ist das allerliebste, denn sie fängt alle Dinge am besten an. Friede ist allweg in Gott, denn Gott ist der Friede, und Friede mag nicht zerstört werden, Unfriede aber wird zerstört.^pDarum sollt Ihr schauen, dass Ihr auf Frieden stellet, Witwen und Waisen beschirmt, wie Ihr es bisher getan habt. Und wessen Glück sich hienieden mehret, der soll Gott dafür dankbar sein, so wird es sich auch im Himmel mehren. Den offenen Sünden soll man wehren und der Gerechtigkeit allwegs beistehen. Ihr sollt auch das Leiden Gottes in Eurem Herzen tragen, denn es ist des Menschen größter Trost an seinem letzten Ende.^pMancher Mensch ist zweifelhaftig in seinem Glauben, und der Teufel tut manchen Angriff im Glauben und allermeist durch den Glauben. Wir sollen aber darin nicht zweifelhaft sein, denn er ist so, wie er gesetzt ist.^pUnd ich schreibe Euch dies, nicht weil ich etwa glaube, dass Ihr nicht recht glaubt, ich zweifle nicht daran, dass Ihr gute Christen seid, ich schreibe es Euch zu einer Ermahnung, dass Ihr, wenn der böse Feind Euch anficht, desto ritterlicher widersteht.^pIch schließe. Gott sei mit Euch.^lGegeben am Sankt-Barbara-Tag im 82. Jahr.",
          "patr_resp1": "Friede ist allweg in Gott, denn Gott ist der Friede.",
          "patr_resp2": "Selig, die Frieden stiften; sie werden Söhne Gottes genannt werden.",
          "patr_resp3": "Ehre sei dem Vater und dem Sohn und dem Heiligen Geist.",
          "oration": "Herr, unser Gott, deinem Ruf gehorsam, hat der heilige Bruder Klaus Familie und Besitz verlassen, um in der Einsamkeit für dich allein zu leben; du aber hast ihn zu einem Ratgeber für viele und zu einem Mittler des Friedens gemacht. Höre auf seine Fürsprache: Nimm alles von uns, was uns trennt von dir, und mache uns zu einem Werkzeug deines Friedens. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Ev": "Der Herr hat mich erleuchtet.^lEr lenkte meine Schritte auf den Weg des Friedens.",
          "oration": "Herr, unser Gott, deinem Ruf gehorsam, hat der heilige Bruder Klaus Familie und Besitz verlassen, um in der Einsamkeit für dich allein zu leben; du aber hast ihn zu einem Ratgeber für viele und zu einem Mittler des Friedens gemacht. Höre auf seine Fürsprache: Nimm alles von uns, was uns trennt von dir, und mache uns zu einem Werkzeug deines Friedens. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Ev": "Mit dem Brot des Lebens nährte ihn der Herr.^lEr schenkte ihm Klugheit und Einsicht.",
          "oration": "Herr, unser Gott, deinem Ruf gehorsam, hat der heilige Bruder Klaus Familie und Besitz verlassen, um in der Einsamkeit für dich allein zu leben; du aber hast ihn zu einem Ratgeber für viele und zu einem Mittler des Friedens gemacht. Höre auf seine Fürsprache: Nimm alles von uns, was uns trennt von dir, und mache uns zu einem Werkzeug deines Friedens. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "26": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Augustinus († 430)",
          "patr_werk": "Aus einer Predigt über das christliche Martyrium.",
          "patr_text": "^hKostbar ist der Tod der Märtyrer,^lerkauft um den Preis des Todes Christi^pDie ruhmvollen Taten der Märtyrer, von denen die Kirche überall erglänzt, sind uns ein augenscheinlicher Beweis für die Wahrheit des Verses, den wir soeben gesungen haben: „Kostbar ist in den Augen des Herrn der Tod seiner Heiligen“ (vgl. Ps 116,15). Es ist kostbar in unseren Augen und in den Augen des Herrn, für dessen Name dieser Tod erlitten wurde. Aber der Preis für den Tod dieser vielen ist der Tod des einen. Wie viele sind es, deren Tod der eine sterbend erkaufte! Wäre er nicht gestorben, hätte sich das Weizenkorn nicht vermehrt. Ihr habt die Worte gehört, die er beim Herannahen seines Leidens – unserer Erlösung – sprach: „Wenn das Weizenkorn nicht in die Erde fällt und stirbt, bleibt es allein; wenn es aber stirbt, bringt es reiche Frucht“ (Joh 12,24).^pUnser Erlöser vollbrachte am Kreuz einen bedeutungsvollen Tausch: dort wurde das Gefäß, in dem sich der Kaufpreis befand, geöffnet. Als die Lanze Christi Seite aufstieß, floss sein Blut heraus: der Preis für die ganze Welt. Erkauft sind die Glaubenden und die Märtyrer; aber bei den Märtyrern ist der Glaube sichtbar unter Beweis gestellt: Das Blut ist Zeuge!^pSie gaben zurück, was ihnen verliehen war, und erfüllten so, was der heilige Johannes sagt: „Wie Christus sein Leben für uns hingegeben hat, so müssen auch wir für die Brüder das Leben hingeben“ (vgl. 1 Joh 3,16), und ein andermal heißt es: „Wenn du an großer Tafel sitzt, achte wohl darauf, was dir vorgesetzt wird“ (Spr 23,1 Vg.); denn du musst als Gegengabe ein ähnliches Mahl bereiten. Eine große Tafel ist es, an welcher der Herr der Tafel selbst die Speise ist. Niemand sonst gibt sich selbst als Nahrung den Tischgenossen. Christus tut es: er lädt ein, und er ist selber die Speise. Die Märtyrer wussten, was sie aßen und tranken, und eben dies gaben sie auch zurück.^pAber wie hätten sie zurückzugeben vermocht, hätte nicht der Herr zuerst den Kaufpreis aufgebracht und ihnen mitgeteilt, wovon sie geben können? „Wie kann ich dem Herrn all das vergelten, was er mir Gutes getan hat? Ich will den Kelch des Heils ergreifen“ (Ps 116,12.13) Was für ein Kelch ist das! Es ist der bittere, aber Heil schaffende Kelch des Leidens. Hätte nicht der Arzt als erster diesen Kelch getrunken, musste sich der Kranke fürchten, ihn anzurühren. Dieser Kelch des Leidens ist gemeint; denn aus dem Mund Christi erfahren wir, was für ein Kelch das ist: „Vater, wenn es möglich ist, gehe dieser Kelch an mir vorbei!“ (Mt 26,39). Von diesem Kelch sagen die Märtyrer: „Ich will den Kelch des Heils ergreifen und anrufen den Namen des Herrn“ (Ps 116,13).^pDu fürchtest also nicht, dabei zu versagen? Weshalb fürchtest du es nicht? Weil es heißt: „Ich will anrufen den Namen des Herrn!“ (Ps 116,13). Wie hätten die Märtyrer siegen können, hatte nicht der in ihnen gesiegt, von dem das Wert stammt: „Freut euch, ich habe die Welt besiegt“ (vgl. Joh 16,33). Der Herrscher des Himmels lenkte Herz und Zunge der Märtyrer. Er überwand durch die Märtyrer den Teufel auf der Erde und krönte sie im Himmel. Selig, die so diesen Kelch tranken! Ihre Leiden sind beendet, und sie haben den Ehrenkranz empfangen.",
          "patr_resp1": "Die Heiligen vergossen ihr Blut für den Herrn, sie liebten Christus in ihrem Leben und folgten ihm nach bis in den Tod.  ",
          "patr_resp2": "Darum schenkte ihnen der Herr den Siegeskranz.",
          "patr_resp3": "Ein Geist und ein Glaube war in ihnen.",
          "oration": "Erhabener Gott, am Gedenktag der heiligen Märtyrer Kosmas und Damian preisen wir deine Macht und Güte. Du hast ihnen ewigen Ruhm geschenkt, uns aber gewähre immer neu deine Hilfe. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Erhabener Gott, am Gedenktag der heiligen Märtyrer Kosmas und Damian preisen wir deine Macht und Güte. Du hast ihnen ewigen Ruhm geschenkt, uns aber gewähre immer neu deine Hilfe. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Erhabener Gott, am Gedenktag der heiligen Märtyrer Kosmas und Damian preisen wir deine Macht und Güte. Du hast ihnen ewigen Ruhm geschenkt, uns aber gewähre immer neu deine Hilfe. Darum bitten wir durch Jesus Christus."
        }
      }
    }
  },
  "10": {
    "6": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Bruno († 1101)",
          "patr_werk": "Aus einem Brief an seine Söhne, die Kartäuser.",
          "patr_text": "^hMein Geist juble im Herrn^pDurch die wiederholten Berichte unseres heiligen Bruders Landowin weiß ich von dem unbeugsamen Ernst eurer klugen und lobenswerten Lebensordnung. Ich habe von eurer heiligen Liebe gehört und von eurem Eifer für alle, die lauter und ehrbar sind. Darüber jubelt mein Geist im Herrn. Ich juble wirklich, und es drängt mich, dem Herrn Lob und Dank zu sagen.^pDennoch muss ich bitter seufzen. Ich juble zwar, wie es recht ist, über die wachsende Frucht eurer Tugend. Doch über mich selber empfinde ich Schmerz und Scham, weil ich untätig und träge im Elend meiner Sünden verharre.^pFreut euch also, meine lieben Brüder, dass ihr ein glückliches Los habt und dass die Hand Gottes für euch voll von Gnade ist. Freut euch, dass ihr den vielfältigen Gefahren und dem Schiffbruch auf den Wogen dieser Welt entgangen seid. Freut euch, dass ihr den stillen und sicheren Hafenplatz der inneren Welt erreicht habt. Viele wollten schon dahin gelangen, viele gaben sich auch einige Mühe, versuchten es, kamen aber nicht hin. Viele hatten es schon erreicht, wurden aber ausgeschlossen. Es war ihnen nicht vergönnt.^pHaltet es für sicher und bewiesen: Wer dieses begehrenswerte Gut genießen darf, aber etwas davon wieder verliert, der wird es bis zum Ende beklagen – wenn ihm das Heil seiner Seele überhaupt noch etwas bedeutet und irgendeiner Mühe wert ist.^pEuretwegen, meine lieben Laienbrüder, sage ich: „Meine Seele preist die Größe des Herrn“ (Lk 1,46). Denn euer liebenswerter Prior und Vater beglückwünscht sich euretwegen sehr und freut sich. Ich sehe aus seinem Bericht, wie groß die Barmherzigkeit Gottes über euch ist. So will also auch ich mich freuen. Ihr könnt zwar nicht schreiben, aber Gott kann mit seinem Finger nicht nur die Liebe in euer Herz einzeichnen, sondern auch die Kenntnis seines heiligen Gesetzes. Denn durch die Arbeit zeigt ihr, was ihr liebt und was ihr wisst. Mit aller Sorgfalt und allem Eifer beobachtet ihr wahren Gehorsam, und so ist es offenbar, dass es euch gegeben ist, mit Weisheit im Garten Gottes die süßen und lebenspendenden Früchte der Heiligen Schrift zu lesen.",
          "patr_resp1": "Hätte ich doch Flügel wie die Tauben, dann wollte ich davonfliegen, bis ich Ruhe fände.",
          "patr_resp2": "Weit fort möchte ich fliegen und in der Wüste bleiben.",
          "patr_resp3": "Die Welt vergeht und ihre Begierde; wer aber den Willen des Herrn tut, bleibt in Ewigkeit.",
          "oration": "Gott, du hast den heiligen Bruno in die Einsamkeit geführt und ihn zu einem Leben in deiner Nähe berufen. Auf die Fürsprache dieses heiligen Mönches schenke uns die Gnade, dass wir uns nicht blenden lassen vom Glanz dieser Welt, sondern bereit und offen bleiben für deinen Ruf. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du hast den heiligen Bruno in die Einsamkeit geführt und ihn zu einem Leben in deiner Nähe berufen. Auf die Fürsprache dieses heiligen Mönches schenke uns die Gnade, dass wir uns nicht blenden lassen vom Glanz dieser Welt, sondern bereit und offen bleiben für deinen Ruf. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du hast den heiligen Bruno in die Einsamkeit geführt und ihn zu einem Leben in deiner Nähe berufen. Auf die Fürsprache dieses heiligen Mönches schenke uns die Gnade, dass wir uns nicht blenden lassen vom Glanz dieser Welt, sondern bereit und offen bleiben für deinen Ruf. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "9": {
      "n1": {
        "name": "Gunther von Thüringen",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Ordensleute",
          "comm_2": "Comm_2",
          "patr_autor": "Aus dem „Leben des Einsiedlers Gunther“.",
          "patr_werk": "› Wir sind nur Gast auf Erden",
          "patr_resp1": "Auch wenn mein Leib und mein Herz verschmachten, ",
          "patr_resp2": "Gott ist der Fels meines Herzens und mein Anteil auf ewig.",
          "patr_resp3": "Ich will mich allein des Kreuzes Jesu Christi, unseres Herrn, rühmen, durch das mir die Welt gekreuzigt ist und ich der Welt. ",
          "oration": "Allmächtiger Gott, der heilige Einsiedler Gunther hat den Menschen als Helfer in der Not und als Friedensstifter gedient. Gib, dass wir aus christlichem Geist unseren Brüdern in selbstloser Liebe begegnen und stets für den Frieden eintreten. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Gunther von Thüringen",
          "genitiv": "Genitiv",
          "comm_1": "Ordensleute",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, der heilige Einsiedler Gunther hat den Menschen als Helfer in der Not und als Friedensstifter gedient. Gib, dass wir aus christlichem Geist unseren Brüdern in selbstloser Liebe begegnen und stets für den Frieden eintreten. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Gunther von Thüringen",
          "genitiv": "Genitiv",
          "comm_1": "Ordensleute",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, der heilige Einsiedler Gunther hat den Menschen als Helfer in der Not und als Friedensstifter gedient. Gib, dass wir aus christlichem Geist unseren Brüdern in selbstloser Liebe begegnen und stets für den Frieden eintreten. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Dionysius und Gefährten",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Ambrosius († 397)",
          "patr_werk": "Aus einer Auslegung zu Psalm 119 (118).",
          "patr_text": "^hSei ein treuer und tapferer Zeuge!^pEs gibt vielerlei Verfolgungen und so auch vielerlei Martyrien. Täglich kannst du Zeuge Christi sein.^pWenn du vom Geist der Unzucht versucht wirst, aber das kommende Gericht Christi fürchtest und darum die Keuschheit des Leibes und der Seele nicht verletzen zu dürfen glaubst, dann bist du ein Zeuge Christi. Wenn der Geist des Geizes dich versucht, den Besitz der Ärmeren anzutasten und die Rechte der Wehrlosen Witwe zu verletzen, du jedoch die Gebote Gottes bedenkst und dich entscheidest, lieber zu helfen als Unrecht zu tun, dann bist du ein Zeuge Christi! Solche Zeugen liebt Christus, wie die Schrift sagt; „Verschafft den Waisen Recht, tretet ein für die Witwen!, spricht der Herr“ (Jes 1,17).^pWenn dich der Geist des Stolzes versucht, du aber beim Anblick der Armen und Bedürftigen Mitleid im Herzen fühlst und die Demut mehr liebst als die Anmaßung, dann bist du ein Zeuge Christi. Nicht nur mit Worten gibst du Zeugnis, sondern durch Taten.^pWelcher Zeuge wäre glaubwürdiger als der, welcher bekennt: „Jesus Christus ist im Fleisch gekommen“ (1 Joh 4,2), und der die Gebote des Evangeliums hält? Denn wer hört, aber nicht tut, leugnet Jesus Christus. Wenn er auch mit dem Mund bekennt, so leugnet er doch durch die Tat. „Viele werden an jenem Tag sagen: Herr, Herr, sind wir nicht in deinem Namen als Propheten aufgetreten, und haben wir nicht mit deinem Namen Dämonen ausgetrieben und mit deinem Namen viele Wunder vollbracht?“ Aber der Herr wird erwidern: „Weg von mir, ihr Übertreter des Gesetzes!“ (Mt 7,22.23) Ein Zeuge ist also der, bei dem Worte und Taten übereinstimmen und der so die Gebote des Herrn bezeugt.^pWie viele Märtyrer Christi, die den Herrn Jesus bekennen, gibt es also täglich im verborgenen! Der Apostel weiß um dieses Martyrium, da er schreibt: „Das ist unser Ruhm, und dafür zeugt auch unser Gewissen“ (2 Kor 1,12). Wie viele haben äußerlich bekannt und innerlich geleugnet. Es heißt: „Traut nicht jedem Geist!“ (1 Joh 4,1), sondern an ihren Früchten erkennt, wem von ihnen ihr trauen könnt. Sei also treu und tapfer in den inneren Verfolgungen, damit du dich auch in den äußeren bewährst.",
          "patr_resp1": "Die Heiligen Gottes schritten durch Feuer und Wasser und blieben heil.",
          "patr_resp2": "Sie empfingen von Gott, dem Herrn, den Siegeskranz.",
          "patr_resp3": "Das sind die Heiligen, die zum Zeugnis für Gott ihren Leib hingaben.",
          "oration": "Gott, du hast den heiligen Dionysius und seine Gefährten gesandt, in Gallien deine Macht und Größe zu verkünden, und ihnen die Kraft zum Martyrium gegeben. Gib, dass wir über dem Irdischen stehen und keine Verfolgung fürchten, sondern im Leben und Sterben auf dich schauen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Dionysius und Gefährten",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du hast den heiligen Dionysius und seine Gefährten gesandt, in Gallien deine Macht und Größe zu verkünden, und ihnen die Kraft zum Martyrium gegeben. Gib, dass wir über dem Irdischen stehen und keine Verfolgung fürchten, sondern im Leben und Sterben auf dich schauen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Dionysius und Gefährten",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du hast den heiligen Dionysius und seine Gefährten gesandt, in Gallien deine Macht und Größe zu verkünden, und ihnen die Kraft zum Martyrium gegeben. Gib, dass wir über dem Irdischen stehen und keine Verfolgung fürchten, sondern im Leben und Sterben auf dich schauen. Darum bitten wir durch Jesus Christus."
        }
      },
      "n3": {
        "name": "Johannes Leonardi",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Johannes Leonardi († 1609)",
          "patr_werk": "Aus einem Brief an Papst Paul V. über die Reform der Kirche.",
          "patr_text": "^hIch will dir zeigen, was der Herr von dir verlangt^pWer eine Erneuerung der menschlichen Sitten ins Auge fasst, muss zunächst einmal mehr als alles andere die Ehre Gottes suchen und für eine so heilbringende, aber schwere Aufgabe die Hilfe Gottes, von dem alles Gute kommt, erwarten und erbitten.^pSodann muss er selber als Spiegel aller Tugend vor den Augen derer stehen, die er erneuern will – wie ein Licht auf den Leuchter gestellt, um durch die Unbescholtenheit seines Lebens und die Lauterkeit seiner Sitten allen zu leuchten, die im Haus Gottes sind (vgl. Mt 5,15). Denn der Liebreiz des Guten ist es, der zur Erneuerung eher anzieht als antreibt. Nach dem Willen des Trienter Konzils darf vom Leib nicht verlangt werden, was das Haupt nicht leistet. Sonst würden Verfassung und Ordnung der ganzen Gottesfamilie ins Wanken geraten.^pAußerdem muss der Erneuerer wie ein kluger Arzt alle Krankheiten, an denen die Kirche leidet, gründlich studieren, um ihnen mit geeigneten Mitteln begegnen zu können.^pWas nun die Heilmittel anlangt, so betreffen sie natürlich die ganze Kirche, weil die Erneuerung ebenso bei den Höchsten wie bei den Niedersten, bei den Häuptern ebenso wie bei den Kleinen einsetzen muss. Dennoch muss sich das Augenmerk zuerst auf all jene richten, die den übrigen vorstehen, damit die Erneuerung dort beginnt, von wo sie auf die anderen übergehen soll.^pAm stärksten muss dafür Sorge getragen werden, dass die Kardinäle, die Patriarchen, Erzbischöfe, Bischöfe und Pfarrer, denen die Seelsorge unmittelbar anvertraut ist, ihrer Leitungsaufgabe über die Herde des Herrn gewachsen sind.^pAber wir wollen auch von den Höchsten zu den Niedersten, von den Häuptern zu den Kleinen hinabsteigen. Sie dürfen nicht außer acht gelassen werden, denn bei ihnen muss die Erneuerung der kirchlichen Sitten den Anfang nehmen. Wir dürfen nichts unversucht lassen, wodurch die Kinder von früher Jugend an in einem aufrichtigen christlichen Glauben und in heiligen Sitten erzogen werden. Für die Verwirklichung dieses Zieles ist nichts so gut wie religiöse Institutionen, in denen der christliche Glaube gelehrt wird und die Kinder nur guten und gottesfürchtigen Erziehern anvertraut werden.",
          "patr_resp1": "Dieser Mensch hat alles vollbracht, was ihm der Herr gesagt hat.",
          "patr_resp2": "Gott sprach zu ihm; Geh ein in meine Ruhe!",
          "patr_resp3": "Er hat das Leben der Welt geringgeschätzt und gelangte zum Reich des Himmels.",
          "oration": "Gott, du Spender alles Guten, du hast den heiligen Johannes Leonardi zum Diener deines Wortes bestellt. Gib uns auf seine Fürsprache Erzieher und Prediger, die deine Wahrheit lehren und sie durch ihr Leben bezeugen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Johannes Leonardi",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Spender alles Guten, du hast den heiligen Johannes Leonardi zum Diener deines Wortes bestellt. Gib uns auf seine Fürsprache Erzieher und Prediger, die deine Wahrheit lehren und sie durch ihr Leben bezeugen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Johannes Leonardi",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Spender alles Guten, du hast den heiligen Johannes Leonardi zum Diener deines Wortes bestellt. Gib uns auf seine Fürsprache Erzieher und Prediger, die deine Wahrheit lehren und sie durch ihr Leben bezeugen. Darum bitten wir durch Jesus Christus."
        }
      },
      "n4": {
        "name": "John Henry Newman",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du hast dem heiligen Priester John Henry Newman die Gnade geschenkt, deinem gütigen Licht zu folgen und in deiner Kirche Frieden zu finden. Gewähre uns, dass wir auf seine Fürsprache und durch sein Beispiel aus Schatten und Bildern zur Fülle deiner Wahrheit geführt werden. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "John Henry Newman",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du hast dem heiligen Priester John Henry Newman die Gnade geschenkt, deinem gütigen Licht zu folgen und in deiner Kirche Frieden zu finden. Gewähre uns, dass wir auf seine Fürsprache und durch sein Beispiel aus Schatten und Bildern zur Fülle deiner Wahrheit geführt werden. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "John Henry Newman",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du hast dem heiligen Priester John Henry Newman die Gnade geschenkt, deinem gütigen Licht zu folgen und in deiner Kirche Frieden zu finden. Gewähre uns, dass wir auf seine Fürsprache und durch sein Beispiel aus Schatten und Bildern zur Fülle deiner Wahrheit geführt werden. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "14": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Cyprian von Karthago († 258)",
          "patr_werk": "Aus einem Traktat an Fortunatus.",
          "patr_text": "^hIn Friedenszeiten wird das Gewissen gekrönt^p„Die Leiden der gegenwärtigen Zeit bedeuten nichts im Vergleich zu der Herrlichkeit, die an uns offenbar werden soll“ (Röm 8,18). Wer sollte sich nicht auf jede Weise bemühen, zu so großer Herrlichkeit zu gelangen, Freund Gottes zu werden, sich schon jetzt mit Christus zu freuen und nach den Qualen und Strafen der Erde den Lohn Gottes zu erlangen?^pFür weltliche Krieger ist es ruhmvoll, nach dem Sieg über den Feind im Triumph in die Heimat zurückzukehren. Wieviel größer ist der Ruhm, nach der Überwindung des Teufels in das Paradies zurückzukommen, das Siegeszeichen dorthin zurückzutragen, von wo Adam durch den Trug des jetzt besiegten Teufels verjagt wurde; dem Herrn als wohlgefälliges Opfer einen ungebrochenen Glauben, lautere Tugend des Geistes, strahlenden Lobpreis der Liebe darzubringen; ihn zu begleiten, wenn er sich anschickt, zu kommen und den Feinden zu vergelten; an seiner Seite zu stehen, wenn er sich zum Gericht niederlässt; Miterbe Christi und den Engeln gleich zu werden und mit den Patriarchen, Aposteln und Propheten das Reich des Himmels in Freude zu besitzen! Welche Verfolgung und welche Qualen könnten solche Überlegungen überwinden und besiegen?^pEin starker und in der Betrachtung heiliger Dinge festgegründeter Geist harrt aus. Gegenüber allen Schrecken des Teufels und allen Drohungen der Welt bleibt das Herz fest, da die Sicherheit und Unerschütterlichkeit des Glaubens an die kommende Welt es stark macht. Die Erde verschließt sich in der Verfolgung, aber der Himmel tut sich auf; der Antichrist droht, Christus gewährt Schutz; der Tod kommt, doch ihm folgt die Unsterblichkeit.^pWie groß ist die Würde und Sicherheit dessen, der froh von hier Abschied nimmt, der unter Not und Bedrängnis ruhmreich von dieser Welt scheidet, der jetzt die Augen schließt, mit denen er die Menschen sah, und sie sofort wieder öffnet, um Gott und Christus zu schauen! Wie beschwingt ist eine so selige Wanderung! Unversehens wirst du der Erde entrissen, um Bürger des Himmelreiches zu werden.",
          "patr_resp1": "Der Heilige Geist hat euch zu Hirten bestellt über die ganze Erde,",
          "patr_resp2": "die sich Gott durch das Blut seines Sohnes erworben hat.",
          "patr_resp3": "Gebt acht, dass ihr die Kirche Gottes hütet.",
          "oration": "Gütiger Gott, erhöre unsere Gebete, die wir am Gedenktag des heiligen Märtyrerpapstes Kallistus vor dich bringen. Sieh auf sein heiliges Leben und Sterben und gewähre der Kirche allezeit deine Hilfe. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gütiger Gott, erhöre unsere Gebete, die wir am Gedenktag des heiligen Märtyrerpapstes Kallistus vor dich bringen. Sieh auf sein heiliges Leben und Sterben und gewähre der Kirche allezeit deine Hilfe. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gütiger Gott, erhöre unsere Gebete, die wir am Gedenktag des heiligen Märtyrerpapstes Kallistus vor dich bringen. Sieh auf sein heiliges Leben und Sterben und gewähre der Kirche allezeit deine Hilfe. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "16": {
      "n1": {
        "name": "Lullus",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Hirten der Kirche",
          "comm_2": "Comm_2",
          "patr_autor": "Lullus († 786)",
          "patr_werk": "Aus einem Brief an den heiligen Abt Gregor von Utrecht.",
          "patr_text": "^hDie Liebe Christi drängt uns^pAls ich die Nachricht von deiner ehrenvollen Berufung vernahm, empfand ich beides: Freude über den Aufstieg des lieben Mitbruders und Trauer über die Trennung, obwohl ich überzeugt bin, dass keine räumliche Entfernung auf Erden jene trennen kann, welche durch echte Christusliebe in unverbrüchlicher Brüderlichkeit verbunden sind.^pUm eines bitte ich in aller Demut: dass wir unsere in Christus gegründete Liebe nicht durch Gleichgültigkeit und Herzensträgheit erkalten lassen wie ein Fünklein schwachen Feuers, das unter der braunen Asche erstickt; sagt doch die Schrift: „Wer bis zum Ende standhaft bleibt, der wird gerettet“ (Mt 10,22).^pWir wollen, wie der Apostel mahnt, uns mit geistlicher Rüstung wappnen (vgl. Eph 6,11) und füreinander beten, damit wir Heilung finden; denn viel vermag bei Gott, nach dem Zeugnis des heiligen Jakobus, das inständige Gebet eines Gerechten (Jak 5,16).^pUm so eifriger wollen wir uns dem Gebet widmen, je heftiger wir uns den Angriffen mannigfacher Versuchungen ausgesetzt fühlen. So soll die stärkere Rechte nicht nachlassen, die schwächere Linke zu unterstützen, und die Linke nicht aufhören, der Rechten wie die Magd der Herrin zu dienen; das heißt: du mögest nicht aufhören, meine wankelmütige Person – zwar körperlich abwesend, im Geist aber anwesend – zur Höhe des vollkommeneren Lebens zu führen durch das gute Beispiel deines Lebens, durch Tadel, Zurechtweisung und Ermahnung, wie es deine Art ist; ich aber will dir in demütiger Hingabe, soviel ich vermag, in allem treu zu Diensten sein.^pDie Mahnworte meiner Wenigkeit mögen zwar töricht und überflüssig erscheinen; dennoch bitte ich dich, lieber Amtsbruder, sie nicht übel aufzunehmen. Sie zu schreiben veranlasste mich einzig die Liebe, die alles besiegt, wie geschrieben steht: Alles besieget die Liebe, wir wollen ihr nicht widerstehen (Vergil, Ekl 10,69). Alle Wucherung des Hochmuts aber soll verschwinden.^pDie folgenden Ratschläge kann ich nicht aussprechen, ohne an meine eigene Gefährdung zu denken: In der weltlichen Hoheit und zeitlichen Gewalt, die du, von Gott gerufen, von nun an ausübst, sei stets eingedenk des Herrenwortes: „Mein Königtum ist nicht von dieser Welt“ (Joh 18,36) und des Apostelwortes „Liebt nicht die Welt und das, was in der Welt ist“ (1 Joh 2,15). Was anders meinen diese Worte als dies: Richtet euer geistiges Auge nicht auf die Welt, die ihr täglich ihrem eigenen Verfall zueilen seht. Schaut vielmehr mit aller Aufmerksamkeit eures Geistes auf ihn und liebt mit allen Kräften ihn, der vor aller Zeit ist und in alle Ewigkeit unveränderlich bleibt, der weder Vergangenheit noch Zukunft kennt, zu dessen Wesen es gehört, ewig zu sein. – Was ist schließlich das flüchtige Glück und der vergängliche Erfolg dieser Welt anders als Dunst und Rauch? Der Kundige weiß, welch gewaltiger Unterschied besteht zwischen zeitlichem Glück und ewiger Glückseligkeit. Laßt uns darum lernen, diese weltliche Macht zu gebrauchen im Blick auf die ewige Seligkeit, und im Vergleich mit dieser soll uns alles andere wertlos erscheinen.",
          "patr_resp1": "Sorgt als Hirten für die euch anvertraute Herde Gottes, nicht aus Gewinnsucht, sondern aus Neigung.",
          "patr_resp2": "Seid nicht Beherrscher eurer Gemeinden, sondern Vorbilder für die Herde.",
          "patr_resp3": "Einer ordne sich dem andern unter in der gemeinsamen Ehrfurcht vor Christus.",
          "oration": "Herr, unser Gott, du hast den heiligen Lullus mit apostolischem Eifer erfüllt und ihn dem heiligen Bonifatius zum Mitarbeiter und Nachfolger gegeben. Höre auf seine Fürsprache, mache uns treu im Glauben und stark in der Hoffnung, die uns das Evangelium schenkt. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Lullus",
          "genitiv": "Genitiv",
          "comm_1": "Hirten der Kirche",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, du hast den heiligen Lullus mit apostolischem Eifer erfüllt und ihn dem heiligen Bonifatius zum Mitarbeiter und Nachfolger gegeben. Höre auf seine Fürsprache, mache uns treu im Glauben und stark in der Hoffnung, die uns das Evangelium schenkt. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Lullus",
          "genitiv": "Genitiv",
          "comm_1": "Hirten der Kirche",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, du hast den heiligen Lullus mit apostolischem Eifer erfüllt und ihn dem heiligen Bonifatius zum Mitarbeiter und Nachfolger gegeben. Höre auf seine Fürsprache, mache uns treu im Glauben und stark in der Hoffnung, die uns das Evangelium schenkt. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Margareta Maria Alacoque",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Margareta Maria Alacoque († 1690)",
          "patr_werk": "Aus einem Brief über die Bedeutung des göttlichen Herzens.",
          "patr_text": "^hWir sollen die Liebe Christi verstehen, die alles Erkennen übersteigt^pDie große Sehnsucht des Herrn nach der Verehrung seines Herzens scheint mir darauf hinzuzielen, in unseren Herzen die Frucht der Erlösung zu erneuern. Denn sein heiliges Herz ist eine unerschpfliche Quelle und sucht nichts anderes, als sich in demütige Herzen zu ergießen, damit sie frei und bereit werden, das eigene Leben nach seinem göttlichen Wohlgefallen einzusetzen.^pVon diesem göttlichen Herzen fließt die Gnade unaufhörlich in drei Strömen aus: Aus dem ersten Strom fließt das Erbarmen mit den Sündern und .gibt ihnen den Geist der Reue und Umkehr ein. Der zweite Strom ist die Liebe. Er bringt all denen Hilfe, die in Not und Mühsal sind, vor allem denen, die nach Vollkommenheit streben, damit sie bei der Bewältigung ihrer Schwierigkeiten Hilfe linden. Aus dem dritten Strom fließen Liebe und Licht für die vollkommenen Freunde Jesu, die er mit sich vereinigen will, um ihnen sein Wissen und seine Gebote mitzuteilen; sie sollen sich – jeder in einer anderen Form – der Mehrung seiner Herrlichkeit weihen.^pDieses göttliche Herz ist der Abgrund alles Guten, in dem die Armen all ihre Not untertauchen sollen. Es ist ein Abgrund der Freude, in den wir all unsere Traurigkeit versenken sollen, ein Abgrund der Demut gegen unser Unvermögen, ein Abgrund des Erbarmens für alle Unglücklichen, ein Abgrund der Liebe, in dem unsere ganze Armut untergehen soll.^pIhr müsst euch mit dem Herzen unseres Herrn Jesus Christus vereinigen, euch am Anfang der Bekehrung in die rechte Verfassung versetzen, am Ende aber Sühne leisten. Macht ihr keinen Fortschritt im Gebet? Dann genüge es euch, Gott jene Gebete darzubringen, die der Heiland für uns im Sakrament des Altars spricht, und seine Glut aufzuopfern, zur Heilung eurer Lauheit. Sooft ihr etwas tut, betet: „O Gott, das tue ich – oder: das nehme ich auf mich – aus Liebe zum Herzen deines Sohnes und nach seinen heiligen Plänen, die ich dir darbringe, um alles gutzumachen, was an meinem Tun schlecht und unvollkommen ist.“ Ähnlich betet in allen Lebenslagen. Sooft euch etwas Peinliches, Trauriges oder Unrechtes widerfährt, sprecht zu euch selbst: „Nimm es an, das heilige Herz Jesu Christi schickt es, damit du tiefer mit ihm vereint wirst.“^pVor allem haltet den Frieden des Herzens fest, der alle Schätze übertrifft. Um ihn zu bewahren, ist uns nichts von größerem Nutzen, als wenn wir auf unseren eigenen Willen verzichten und an seine Stelle den Willen des göttlichen Herzens setzen, damit Christus für uns alles tut, was zu seiner Ehre beiträgt. Ihm sollen wir uns in Freude unterwerfen und ganz auf ihn vertrauen.",
          "patr_resp1": "Ich preise dich, mein Vater, Herr des Himmels und der Erde. Den Weisen und Klugen hast du es verborgen, Unmündigen aber hast du es offenbart.",
          "patr_resp2": "Ja, mein Vater, so war es wohlgefällig vor dir.",
          "patr_resp3": "Den Sohn kennt keiner außer der Vater, und keiner kennt den Vater außer der Sohn und wem der Sohn es offenbart.",
          "oration": "Barmherziger Gott, du hast die heilige Margareta Maria Alacoque die Liebe deines Sohnes schauen lassen, die alles Begreifen übersteigt. Schenke auch uns deinen Geist, damit wir die Größe deines Erbarmens erkennen und am Reichtum deines göttlichen Lebens teilhaben. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Margareta Maria Alacoque",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Barmherziger Gott, du hast die heilige Margareta Maria Alacoque die Liebe deines Sohnes schauen lassen, die alles Begreifen übersteigt. Schenke auch uns deinen Geist, damit wir die Größe deines Erbarmens erkennen und am Reichtum deines göttlichen Lebens teilhaben. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Margareta Maria Alacoque",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Barmherziger Gott, du hast die heilige Margareta Maria Alacoque die Liebe deines Sohnes schauen lassen, die alles Begreifen übersteigt. Schenke auch uns deinen Geist, damit wir die Größe deines Erbarmens erkennen und am Reichtum deines göttlichen Lebens teilhaben. Darum bitten wir durch Jesus Christus."
        }
      },
      "n3": {
        "name": "Hedwig",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_werk": "Aus der Einleitung zu einer Vita der heiligen Hedwig.",
          "patr_text": "^hHedwig trug stetes Verlangen nach Gott^pDie Dienerin Gottes wusste, dass die lebendigen Steine, die in den Bau des himmlischen Jerusalem eingefügt werden, in dieser Welt durch Schicksalsschläge behauen werden müssen und dass wir durch viele Drangsale in die ewige Herrlichkeit eingehen müssen (Apg 14,22). Darum setzte sie sich ganz den Fluten des Leidens aus und nahm ihren Leib ohne Mitleid in die Zucht harter Kasteiungen. Sie mutete sich täglich so schweres Fasten zu, dass viele Menschen sich wunderten, wie eine so schwache und zarte Frau solches aushalten konnte.^pJe mehr sie so in aller Besonnenheit durch ständige Härte ihr Fleisch abtötete, desto mehr nahm sie in der Kraft des Geistes und in der Gnade zu, und desto mehr wuchs in ihr die Flamme der Gottesliebe. Sie wurde oft von einem so glühenden Verlangen emporgehoben und zu Gott getragen, dass sie das Empfinden verlor und nicht mehr wahrnahm, was um sie her vorging.^pWie sie in der Frömmigkeit ihres Herzens immer zu Gott hinstrebte, so neigte sie sich auch durch Werke der Liebe dem Mitmenschen zu und spendete den Bedürftigen freigebig Almosen. Auch unterstützte sie Kollegien und Ordensleute innerhalb und außerhalb der Klöster. Den Witwen und Waisen, den Kranken und Schwachen, den Aussätzigen, den in Ketten Geschlagenen und Gefesselten, den Obdachlosen und bedürftigen stillenden Müttern erwies sie Gutes. Ganz allgemein aber ließ sie nicht zu, das jemand, der um Hilfe zu ihr kam, ohne Trost von ihr wegging.^pWeil diese Dienerin Gottes keine gute Tat unterließ, die in ihren Kräften stand, gab ihr Gott die Gnade, aus der Kraft Christi und seines Leidens auch dann alles auszuführen, wenn die Menschen in ihrer Not Dinge ersehnten, die über ihr menschliches Vermögen hinausgingen, so dass ihre Kräfte versagten. Wenn daher jemand zu ihr seine Zuflucht nahm, um von einem leiblichen oder seelischen Leiden befreit zu werden, dann hatte sie die Macht zu helfen – soweit es Gott gefiel und seinem Willen entsprach.",
          "patr_resp1": "Sie hat sich mit Kraft gegürtet und ihren Arm stark gemacht;",
          "patr_resp2": "darum wird ihre Lampe in Ewigkeit nicht erlöschen.",
          "patr_resp3": "Sie gewährte Kranken und Schwachen Hilfe und Trost.",
          "oration": "Allmächtiger Gott, du hast die heilige Herzogin Hedwig zu einer Botin des Friedens gemacht und ihr die Gnade geschenkt, inmitten weltlicher Aufgaben ein Beispiel barmherziger Liebe zu geben. Hilf auf ihre Fürsprache auch uns, für Versöhnung und Frieden unter den Menschen zu wirken und dir in den Notleidenden zu dienen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Hedwig",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Ev": "Gottes Wille sei auch unser Wille.^lWas immer unserem Herrn gefällt, soll auch uns gefallen.",
          "oration": "Allmächtiger Gott, du hast die heilige Herzogin Hedwig zu einer Botin des Friedens gemacht und ihr die Gnade geschenkt, inmitten weltlicher Aufgaben ein Beispiel barmherziger Liebe zu geben. Hilf auf ihre Fürsprache auch uns, für Versöhnung und Frieden unter den Menschen zu wirken und dir in den Notleidenden zu dienen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Hedwig",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Ev": "Hedwig, du große Frau, im Himmelreich gekrönt,^lvergiss der Heimatlosen nicht in diesem Tal der Tränen.",
          "oration": "Allmächtiger Gott, du hast die heilige Herzogin Hedwig zu einer Botin des Friedens gemacht und ihr die Gnade geschenkt, inmitten weltlicher Aufgaben ein Beispiel barmherziger Liebe zu geben. Hilf auf ihre Fürsprache auch uns, für Versöhnung und Frieden unter den Menschen zu wirken und dir in den Notleidenden zu dienen. Darum bitten wir durch Jesus Christus."
        }
      },
      "n4": {
        "name": "Gallus",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Wetti († 824)",
          "patr_werk": "Aus der Vita des heiligen Gallus.",
          "patr_text": "^hDas ist der Ort meiner Ruhe für immer, hier will ich wohnen^pNach dem Weggang Kolumbans wandte sich der von Gott erwählte Gallus an den Diakon Hiltibed: „Hast du in der Wildnis einen Ort entdeckt, der für ein Bethaus und eine Zelle geeignet ist? Meine Seele wünscht, die Lebenstage in Einsamkeit zuzubringen, mahnt doch der Psalmist: Entfliehen möchte ich und in der Wüste weilen; ihm harre ich entgegen, der mich heil machen wird“ (Ps 55,8–9).^pDie Wanderer gelangten an den Wasserfall der Steinach, senkten ihre Netze ein und fingen viele Fische. Gallus aber stürzte im Dorngestrüpp und beschloss: „Das ist für immer der Ort meiner Ruhe; hier will ich wohnen, ich hab’ ihn erkoren“ (Ps 132,14). Er formte aus einer Haselstaude ein Kreuz, hängte die Reliquientasche daran und betete: „Herr Jesus Christus, durch dein siegreiches Kreuz bist du dem Menschengeschlecht zu Hilfe gekommen. Verleihe uns zu Ehren deiner Heiligen, dass dieser Ort für dein Lob bewohnbar werde.“^pDer Gottesmann umgab sich mit zwölf Gefährten, die mit ihm zusammenwohnten und die Regel beobachteten. Als dann die Zeit kam, da der Schöpfer ihn belohnen wollte, bat ihn Willimar, der Priester in Arbon, er möge nochmals das Volk belehren. So begab er sich, als Helfer für viele, dorthin. Hernach überfiel ihn ein Fieber, und nach vierzehn Tagen befahl er im Alter von fünfundneunzig Jahren seine heilige Seele dem Himmel. Neben dem Altar in seinem Bethaus wurde der Leichnam in der Erde bestattet, und sein Grab wurde reich an Segen.",
          "patr_resp1": "Entfliehen möchte ich der Welt und in der Einsamkeit weilen;",
          "patr_resp2": "Gott harre ich entgegen, der mich heil machen wird.",
          "patr_resp3": "Das ist für immer der Ort meiner Ruhe; hier will ich wohnen.",
          "oration": "Allmächtiger Gott, du hast den heiligen Gallus berufen, als Mönch und Glaubensbote unter den Alemannen die Wahrheit des Evangeliums auszubreiten. Erhalte uns die Freude, die aus dem Glauben kommt, und stärke unsere Treue zu Jesus Christus, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Laudes": {
          "name": "Gallus",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, du hast den heiligen Gallus berufen, als Mönch und Glaubensbote unter den Alemannen die Wahrheit des Evangeliums auszubreiten. Erhalte uns die Freude, die aus dem Glauben kommt, und stärke unsere Treue zu Jesus Christus, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Vesper": {
          "name": "Gallus",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, du hast den heiligen Gallus berufen, als Mönch und Glaubensbote unter den Alemannen die Wahrheit des Evangeliums auszubreiten. Erhalte uns die Freude, die aus dem Glauben kommt, und stärke unsere Treue zu Jesus Christus, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      }
    },
    "19": {
      "n1": {
        "name": "Johannes de Brébeuf, Isaak Jogues und Gefährten",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Johannes de Brébeuf († 1649)",
          "patr_werk": "Aus den geistlichen Schriften.",
          "patr_text": "^hJesus, für dich möchte ich sterben, denn du starbst auch für mich^pZwei Tage lang spürte ich ein starkes Verlangen nach dem Martyrium und begehrte, alle Qualen zu erdulden, wie sie die Märtyrer erlitten haben. Mein Gott und mein Heiland Jesus, womit kann ich dir alle Wohltaten vergelten, mit denen du mir entgegengekommen bist? Den Kelch deiner Schmerzen will ich aus deiner Hand entgegennehmen und deinen Namen anrufen (vgl. Ps 116,12.13).^pIch gelobe vor deinem ewigen Vater und dem Heiligen Geist, vor deiner heiligen Mutter, vor den Engeln, den Aposteln und Märtyrern, vor meinem Vater Ignatius und dem heiligen Franz Xaver – ich gelobe dir, meinem Heiland Jesus: Soweit es an mir liegt, will ich mich niemals der Gnade des Martyriums entziehen, wenn du sie mir, deinem unwürdigen Diener, in deiner unendlichen Huld jemals anbieten solltest.^pIch verpflichte mich für den ganzen Rest meines Lebens, dass es mir nicht freistehen und erlaubt sein soll, der Gelegenheit, für dich zu sterben und mein Blut zu vergießen, auszuweichen, es sei denn, ich glaubte, es sei im Augenblick für deine Ehre richtiger, anders zu handeln. Ich verpflichte mich weiter, den etwa drohenden Todesstreich aus deinen Händen mit großer Freude entgegenzunehmen. Darum also, mein geliebter Jesus, opfere ich dir in der Freude, die mich heftig bewegt, schon jetzt mein Blut, meinen Leib und mein Leben. Wenn du mir die Gnade dazu gibst, möchte ich nur für dich sterben; denn du starbst auch für mich. Gib mir die Gnade, so zu leben, dass du mir auch die große Gabe schenkst, selig für dich zu sterben. So will ich denn, mein Gott und Heiland, aus deiner Hand den Kelch entgegennehmen und deinen Namen anrufen: Jesus, Jesus, Jesus!^pMein Gott, wie sehr schmerzt es mich, dass du nicht erkannt wirst, dass diese heidnische Gegend sich noch nicht ganz zu dir bekehrt hat und dass die Sünde hier noch nicht ausgerottet ist! Mein Gott, so hart auch die Qualen sind, welche die Gefangenen hierzulande erdulden müssen, so grausam auch die Wildheit ihrer Todesstrafen ist – sollten sie alle über mich hereinbrechen, so biete ich mich doch gerne für sie an und möchte sie alle erleiden.",
          "patr_resp1": "Die Heiligen haben durch den Glauben Königreiche besiegt, Gerechtigkeit geübt, Verheißungen erlangt und sind mächtig geworden im Kampf;",
          "patr_resp2": "sie alle haben durch den Glauben ein rühmliches Zeugnis erlangt.",
          "patr_resp3": "Gott hat sie geprüft und seiner wert gefunden.",
          "oration": "Gütiger Gott, du hast durch die Predigt und das Martyrium des heiligen Johannes und seiner Gefährten die Anfänge der Kirche in Nordamerika geheiligt. Lass auf ihre Fürsprache in der ganzen Welt die Saat des Glaubens aufblühen und reifen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Johannes de Brébeuf, Isaak Jogues und Gefährten",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gütiger Gott, du hast durch die Predigt und das Martyrium des heiligen Johannes und seiner Gefährten die Anfänge der Kirche in Nordamerika geheiligt. Lass auf ihre Fürsprache in der ganzen Welt die Saat des Glaubens aufblühen und reifen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Johannes de Brébeuf, Isaak Jogues und Gefährten",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gütiger Gott, du hast durch die Predigt und das Martyrium des heiligen Johannes und seiner Gefährten die Anfänge der Kirche in Nordamerika geheiligt. Lass auf ihre Fürsprache in der ganzen Welt die Saat des Glaubens aufblühen und reifen. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Paul vom Kreuz",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Paul vom Kreuz († 1775)",
          "patr_werk": "Aus einem Brief über Christi Vorbild im Leiden.",
          "patr_text": "^hWir predigen Christus, den Gekreuzigten^pEs ist gut und heilig, an das Leiden des Herrn zu denken und es zu betrachten; denn so gelangen wir zur Vereinigung mit Gott. In dieser heiligen Schule lernen wir die wahre Weisheit, dort haben alle Heiligen sie gelernt. Wenn das Kreuz Jesu seine Wurzeln tiefer in eure Herzen senkt, werdet ihr rufen: „Leiden, nicht sterben!“ oder: „Entweder leiden oder sterben!“ oder noch besser: „Weder leiden noch sterben, sondern volle Bekehrung zum Willen Gottes!“^pDie Liebe ist eine einigende Kraft, sie macht sich die Qualen des Geliebten zu eigen. Dieses Feuer dringt bis ins Mark, es verwandelt den Liebenden in den Geliebten. Auf erhabene Weise mischt sich die Liebe mit dem Schmerz und der Schmerz mit der Liebe. Es entsteht eine Verbindung von Liebe und Schmerz, die so eng ist, dass man die Liebe nicht mehr vorn Schmerz und den Schmerz nicht mehr von der Liebe trennen kann. Darum freut sich die liebende Seele in ihrem Schmerz und jubelt in ihrer schmerzenden Liebe.^pSeid standhaft in der Übung aller Tugenden, besonders darin, dass ihr Jesus in seinem Leiden nachahmt; denn das ist der Höhepunkt der Liebe, Euer Handeln lasse alle erkennen, dass ihr nicht nur innerlich, sondern auch äußerlich ein Abbild des gekreuzigten Christus seid, des Beispiels aller Güte und Sanftmut. Wer nämlich in seinem Innern mit dem Sohn Gottes vereint ist, der ist auch äußerlich sein Abbild durch die dauernde Übung heroischer Tugend, besonders durch kraftvolle Geduld, die weder geheim noch öffentlich klagt. Bergt euch also in dem gekreuzigten Jesus, und wünscht nichts anderes, als dass sich alle Menschen in allen Dingen zu seinem Willen bekehren.^pWenn ihr den Gekreuzigten wirklich liebt, dann werdet ihr im Tempel eures Innern stets das Fest des Kreuzes feiern, indem ihr schweigend duldet und euch keinem Geschöpf anvertraut. Weil Feste aber in Freude gefeiert werden, müssen alle, die den Gekreuzigten lieben, das Fest des Kreuzes in schweigendem Dulden begehen, mit heiterer und früher Miene, so dass das Leiden den Menschen verborgen und nur dem Höchsten bekannt ist. Bei diesem Fest werden Gastmähler gehalten, bei denen der Wille Gottes die Speise ist nach dem Beispiel unserer gekreuzigten Liebe (vgl. Joh 4,34).",
          "patr_resp1": "Ich rühme mich allein des Kreuzes unseres Herrn Jesus Christus;",
          "patr_resp2": "durch ihn ist mir die Welt gekreuzigt und ich der Welt.",
          "patr_resp3": "Ich freue mich im Herrn und bin glücklich in Gott, meinem Retter.",
          "oration": "Barmherziger Gott, du hast dem heiligen Paul vom Kreuz eine außergewöhnliche Liebe zum Leiden Christi gegeben. Hilf uns, nach seinem Vorbild den Erlöser zu lieben und unser eigenes Kreuz mit Geduld zu tragen. Darum bitten wir durch ihn, Jesus Christus."
        },
        "Laudes": {
          "name": "Paul vom Kreuz",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Barmherziger Gott, du hast dem heiligen Paul vom Kreuz eine außergewöhnliche Liebe zum Leiden Christi gegeben. Hilf uns, nach seinem Vorbild den Erlöser zu lieben und unser eigenes Kreuz mit Geduld zu tragen. Darum bitten wir durch ihn, Jesus Christus."
        },
        "Vesper": {
          "name": "Paul vom Kreuz",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Barmherziger Gott, du hast dem heiligen Paul vom Kreuz eine außergewöhnliche Liebe zum Leiden Christi gegeben. Hilf uns, nach seinem Vorbild den Erlöser zu lieben und unser eigenes Kreuz mit Geduld zu tragen. Darum bitten wir durch ihn, Jesus Christus."
        }
      }
    },
    "20": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Augustinus († 430)",
          "patr_werk": "Aus einer Predigt zum ersten Johannesbrief.",
          "patr_text": "^hSteig auf den Berg und schau das Ziel^pIhr habt im Psalm gehört: „Aller Vollendung Ziel und Ende habe ich gesehen“ (Ps 119,96 Vg.). Was hatte der Psalmist geschaut? Hatte er etwa den Gipfel eines hohen und steilen Berges erstiegen und Ausschau gehalten und so den Umkreis der Erde und die Grenzen des ganzen Erdkreises gesehen? Sagte er darum: „Aller Vollendung Ziel und Ende habe ich gesehen“? Wenn das des Lobpreises würdig ist, so wollen wir den Herrn um scharfe leibliche Augen bitten und den höchsten Berg der Erde aufsuchen, um von seinem Gipfel aus aller Vollendung Ziel und Ende zu schauen.^pDoch du brauchst nicht weit zu gehen. Ich sage dir: Steig auf den Berg und schau das Ziel! Christus ist der Berg: Komm zu Christus, und du siehst von da aus das Ziel jeglicher Vollendung! Was ist das Ziel! „Gott nahe zu sein ist mein Glück“ (Ps 73,28 Vg.). Hast du dich an Gott angeschlossen und bist so den Weg zu Ende gegangen, so wirst du im Vaterland bleiben.^pMerkt auf! Da strebt einer nach Geld: das sei dir nicht das Ziel. Geh daran vorüber wie ein Pilger! Nimm es und geh weiter; denke nicht daran, hier deine Ruhe finden zu wollen. Wenn du es liebst, verstrickst du dich in die Habsucht, und die Habsucht wird dir eine Fußkette sein; du kannst dann nicht mehr weitergehen. Geh also daran vorüber, suche das Ziel! –^pDu strebst nach körperlicher Gesundheit: Bleibe auch dabei noch nicht stehen. Denn was ist schon diese leibliche Gesundheit, die durch den Tod vernichtet, durch Krankheit geschwächt wird! Armselig, sterblich, vergänglich ist sie. Sei besorgt um sie, damit nicht etwa eine schwache Gesundheit dich an deinen guten Werken behindere; sie ist aber für dich nicht das Ziel, weil sie ja um eines andern willen gesucht wird.^pNur was um seiner selbst willen und ohne einen anderen Lohn gesucht wird, ist das Ziel. Du suchst Ehrungen; vielleicht strebst du danach, um durch deine Tat das Wohlgefallen Gottes auf dich zu ziehen? Liebe nicht die Ehre als solche, damit du nicht dabei stehen bleibst!^pDu suchst Lob? Wenn du Gottes Lob suchst, tust du gut; wenn du dein eigenes suchst, handelst du schlecht, dann bleibst du am Wege kleben. Doch du wirst geliebt, wirst gelobt! Freue dich nicht, wenn du um deinetwillen gelobt wirst; werde gelobt im Herrn, so dass du singen kannst: „Im Herrn wird meine Seele gepriesen werden“ (Ps 34,4 Vg.). Wenn all das Deinige in Gott gelobt wird, so brauchst du nicht zu fürchten, dass dein Lob untergeht, weil Gott nicht untergeht. Darum geh an all dem vorbei!^pSeht, an welchen Werten wir vorübergehen, weil in ihnen das Ziel nicht liegt! Wir greifen sie auf, gleichsam unterwegs: wie in einer Herberge lassen wir uns davon erquicken und gehen weiter. Was also ist das Ziel! „Geliebte, wir sind Kinder Gottes. Aber was wir sein werden, ist noch nicht offenbar geworden“, so steht es in diesem Brief. Noch also sind wir auf dein Weg. Noch müssen wir, wohin wir auch kommen, weiterwandern, bis wir ans Ziel gelangen. „Wir wissen, dass wir ihm ähnlich sein werden, wenn er offenbar wird; denn wir werden ihn sehen, wie er ist“ (1 Joh 3,2). Das ist das Ziel. Dort ist ewiger Lobpreis, dort ein ewiges Halleluja ohne Aufhören. Dieses Ziel also meinte die Psalmstelle: „Aller Vollendung Ziel habe ich gesehen“ (Ps 119,96 Vg.).",
          "patr_resp1": "Herr, die Wege des Lebens hast du mir kundgetan. Du wirst mich mit Freude erfüllen vor deinem Angesicht;",
          "patr_resp2": "zu deiner Rechten ist Wonne auf ewig.",
          "patr_resp3": "Du bist es, Herr, der mir mein Erbe gibt.",
          "oration": "Gott, unser Ursprung und Ziel, du hast deinen Knecht, den heiligen Einsiedler Wendelin, auf dem Weg der evangelischen Armut zur Freiheit des Geistes geführt und ihn zu unserem Fürsprecher bestellt. Hilf uns, dass wir in allen Sorgen dieses Lebens stets das eine Notwendige suchen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, unser Ursprung und Ziel, du hast deinen Knecht, den heiligen Einsiedler Wendelin, auf dem Weg der evangelischen Armut zur Freiheit des Geistes geführt und ihn zu unserem Fürsprecher bestellt. Hilf uns, dass wir in allen Sorgen dieses Lebens stets das eine Notwendige suchen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, unser Ursprung und Ziel, du hast deinen Knecht, den heiligen Einsiedler Wendelin, auf dem Weg der evangelischen Armut zur Freiheit des Geistes geführt und ihn zu unserem Fürsprecher bestellt. Hilf uns, dass wir in allen Sorgen dieses Lebens stets das eine Notwendige suchen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "21": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "ZUR WAHL (1/2):",
          "patr_werk": "Joseph Teusch († 1976)^lAus einer Predigt am Gedenktag der heiligen Ursula.",
          "patr_text": "^hDas Blut der Märtyrer ist Same neuer Christen^pIm letzten Buch der Heiligen Schrift, der Geheimen Offenbarung, schreibt Johannes: ,Dann schaute ich auf, und siehe da: eine große Schar, die niemand zu zählen vermochte, aus allen Völkern und Stämmen und Zungen und Sprachen. Sie trugen weiße Gewänder und Palmen in den Händen. Sie standen vor dem Throne und dem Lamm‘ (vgl. Offb 7,9–10).^pDie mit den weißen Gewändern sind die Märtyrer aus allen Völkern und Jahrhunderten. Wenn wir aber die große Schar schauen, die niemand zu zählen vermag, dann erkennen wir, dass die Märtyrer aus unserem Jahrhundert zahlreicher sind als die Märtyrer aus den übrigen Jahrhunderten zusammengenommen. Wir sind eine Kirche der Märtyrer und eine Kirche der Bekenner.^pNach dem Vorbild und Auftrag Christi verbreitet sich der Glaube durch die Verkündigung. Der Verkündiger wird glaubhaft durch die Werke der Liebe: „Seht., wie sie einander lieben“, und: „Der Herr führte ihnen täglich Neue zu“ (vgl. Apg 2,47).^pDie Verkündigung wird aber auch glaubhaft durch das Martyrium. Wenn jemand Freiheit und Leben, Besitz und Einkommen, ja das Wohl der eigenen Familie aufs Spiel setzt, dann muss es ihm doch wohl ernst sein mit dem, was er verkündigt. So hat sich schon früh in der Christenheit das Wort gebildet: „Das Blut der Märtyrer ist Same neuer Christen.“^pBis zum Jahr 313 von Geschlecht zu Geschlecht, unaufhörlich, ohne dass ein Ende abzusehen ist, Verfolgung über Verfolgung. Wenn dann 313 die äußere Freiheit kommt, hat das Römische Reich eine christliche Bürgerschaft, besonders in den Städten. Die neu eintretenden Völker der Germanen und Slawen werden Christen. So sind die Grundlagen gelegt für das christliche Mittelalter, für das christliche Abendland. Wir verneigen uns vor all den Märtyrern des Römischen Reiches.^pGläubige kann man töten, den Glauben nicht. Im Gegenteil: Das Blut der Märtyrer ist Same neuer Christen.^pWenn wir jetzt die Feier zu Ehren der heiligen Ursula und ihrer Schar begehen, dann sind wir einbezogen in diesen großen Gottesdienst, den im Himmel die Chöre der Märtyrer und aller Heiligen und die Chöre der Engel feiern und zu dem hier Erde und Meer und alles, was darin ist, ihr Echo geben. Wir danken Gott, dem Herrn, dass er die Chöre der Engel geschaffen und durch seinen Geist die Chöre der Märtyrer und der Heiligen aufgebaut hat; wir bitten ihn, dass derselbe Geist als Geist der mutigen Verkündigung, als Geist der tätigen Liebe, als Geist zumindest der Bereitschaft zu allem in uns lebendig bleibe.^pZUR WAHL (2/2):^lBreviarium Coloniense (1521)^p› Dient untadelig eurem himmlischen König^pDie heilige Ursula setzte ihr Vertrauen auf das Wort der göttlichen Verheißung. Dennoch war sie auch bemüht um die menschliche Gebrechlichkeit. Sie hatte ihre Mitjungfrauen schon mit Worten und durch das christliche Beispiel belehrt. Doch nun ermahnte sie alle: In eurer bedrängten Lage müsst ihr um so entschlossener an der Tür des göttlichen Erbarmens pochen! Den Gürtel der Keuschheit dürft ihr niemals verlieren! Er ist ja das Zeichen, unter dem ihr eurem himmlischen König untadelig dient.^pMit diesen Worten „gab sie einen Sporn denen, die schon liefen“! Die gottverlobten Jungfrauen brachen in Tränen aus. Von ganzem Herzen und in der Glut des Geistes begannen sie die göttliche Hilfe anzurufen: Gott möge jeder einzelnen, besonders aber der Königin, die Jungfräulichkeit erhalten!^pDer gütige Gott ist allzeit denen nahe, die ihn in der Wahrheit anrufen. Darum wies er ein so frommes Gebet nicht ab. Aus seinen Schatzkammern holte er den Wind hervor. Von ihm wurden die Schiffe so angetrieben, dass sie in einem Tag und einer Nacht in glücklicher Fahrt zum Hafen gelangten, der Tyele heißt. Die Zahl der Schiffe und die Schar der Mädchen erlitt unterdessen keinen Schaden.^pSie gingen ans Ufer, das ihr Ziel war. Die Frau, die ihre Anführerin war, wurde Maria der Prophetin ähnlicher, als sie das Rote Meer vor den Heeren des Pharao durchschritten hatte. Sie sang dem himmlischen Bräutigam das hochzeitliche Lob, das sie ihm schuldete. Die Gemeinschaft der Mädchen stimmte darin ein, nicht mit lautem Rufen, sondern in der Harmonie des Gesanges. Sie sangen das frohe Lied der Schwester des Mose. Es klang empor zum Ohr Gott Zebaots wie lieblicher Klang.^pDort machten sie zur Nacht Station. Am folgenden Tag kauften sie, was sie notwendig hatten. Es war dort Markt. Dann gingen sie zu den Schiffen zurück und lichteten die Anker. Gegen die Strömung des Flusses ruderten sie. So kamen sie zu jener berühmten Stadt Köln, wo heute noch ihre Leiber in Frieden ruhen.^pSie gingen an Land. Nach dem Abendbrot überwältigte der Schlaf die von gottgefälliger Arbeit Übermüdeten. Die heilige Jungfrau Ursula hatte Gottes Wohlgefallen gefunden durch das Bekenntnis zur engelgleichen Keuschheit. Darum sah sie im Traum eine Engelsgestalt voll Licht und Hoheit. Er sagte ihr: Wisse, Tochter, was du so sehr ersehnt hast, wirst du unter dem himmlischen Schutz Gottes mit dieser lieben Gemeinschaft deiner Schwestern erlangen. Du wirst nach Rom gelangen. Die Zahl deiner Gefährtinnen wird keine Minderung erfahren. Die Gelöbnisse werden unvermindert erhalten. Gott hat euch hier die Ruhe in Ewigkeit bestimmt. Hier werdet ihr in Frieden ruhen.",
          "patr_resp1": "Das sind jene, die aus der großen Drangsal kommen,",
          "patr_resp2": "sie haben ihre Kleider im Blute des Lammes rein gewaschen.",
          "patr_resp3": "Deshalb stehen sie vor dem Throne Gottes und dienen ihm in seinem Tempel Tag und Nacht.",
          "oration": "Gott, du hast der heiligen Ursula und ihren Gefährtinnen Kraft und Standhaftigkeit im Martyrium gegeben und sie so zur Schau deiner Herrlichkeit geführt. Stärke uns auf ihre Fürbitte im Glauben und in der Liebe und gib uns ewige Gemeinschaft mit ihnen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du hast der heiligen Ursula und ihren Gefährtinnen Kraft und Standhaftigkeit im Martyrium gegeben und sie so zur Schau deiner Herrlichkeit geführt. Stärke uns auf ihre Fürbitte im Glauben und in der Liebe und gib uns ewige Gemeinschaft mit ihnen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du hast der heiligen Ursula und ihren Gefährtinnen Kraft und Standhaftigkeit im Martyrium gegeben und sie so zur Schau deiner Herrlichkeit geführt. Stärke uns auf ihre Fürbitte im Glauben und in der Liebe und gib uns ewige Gemeinschaft mit ihnen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "22": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Papst Johannes Paul II. († 2005)",
          "patr_werk": "Aus seiner Ansprache am Beginn des Pontifikats",
          "patr_text": "^hHabt keine Angst! Öffnet die Tore für Christus!^pPetrus ist nach Rom gekommen! Nur der Gehorsam gegenüber dem Auftrag des Herrn hat seine Schritte geführt und ihn bis zu dieser Stadt gelangen lassen, dem Herzen des Römischen Reiches. Vielleicht wäre er lieber dort geblieben, an den Ufern des Sees von Gennesaret, bei seinem Boot mit den Fischernetzen. Aber unter der Führung des Herrn und seinem Auftrag getreu ist er hierhergekommen!^pNach einer alten Überlieferung wollte Petrus während der Verfolgung des Nero die Stadt Rom verlassen. Da aber griff der Herr ein: er ging ihm entgegen. Petrus sprach ihn an und fragte: „Quo vadis, Domine?“ – „Wohin gehst du, Herr?“, und der Herr antwortete sofort: „Ich gehe nach Rom, um dort ein zweites Mal gekreuzigt zu werden.“ Da kehrte Petrus nach Rom zurück und ist dort bis zu seiner Kreuzigung geblieben.^pUnsere Zeit lädt uns dazu ein, drängt und verpflichtet uns, auf den Herrn zu schauen und uns in eine demütige und ehrfürchtige Betrachtung des Geheimnisses der höchsten Gewalt Jesu Christi selbst zu vertiefen.^pEr, der aus der Jungfrau Maria geboren wurde, der Sohn des Zimmermanns – wie man glaubte –, der Sohn des lebendigen Gottes – wie Petrus bekannte –, ist gekommen, um uns alle zu einem „königlichen Priestertum“ zu machen.^pDas Zweite Vatikanische Konzil hat uns das Geheimnis dieser Herrschergewalt wiederum in Erinnerung gebracht und auch die Tatsache, dass die Sendung Christi als Priester, prophetischer Lehrer und König in der Kirche fortdauert. Alle, das ganze Volk Gottes, haben Anteil an dieser dreifachen Sendung. ^pIn der Vergangenheit hat man vielleicht dem Papst die Tiara, die dreifache Krone, aufs Haupt gesetzt, um durch diese symbolische Geste den Heilsplan Gottes für seine Kirche zum Ausdruck zu bringen, dass nämlich die ganze hierarchische Ordnung der Kirche Christi, die ganze in ihr ausgeübte „heilige Gewalt“ nichts anderes ist als Dienst, ein Dienst, der nur das eine Ziel hat: dass das ganze Volk Gottes an dieser dreifachen Sendung Christi Anteil habe und immer unter der Herrschaft des Herrn bleibe, die ihre Ursprünge nicht in den Mächten dieser Welt, sondern im Geheimnis des Todes und der Auferstehung hat.^pDie uneingeschränkte und doch milde und sanfte Herrschaft des Herrn ist die Antwort auf das Tiefste im Menschen, auf die höchsten Erwartungen seines Verstandes, seines Willens und Herzens. Sie spricht nicht die Sprache der Gewalt, sondern äußert sich in Liebe und Wahrheit.^pDer neue Nachfolger Petri auf dem Bischofsstuhl in Rom betet heute innig, demütig und vertrauensvoll: „Christus, lass mich ganz Diener deiner alleinigen Herrschaft werden und sein! Diener deiner sanften Herrschaft! Diener deiner Herrschaft, die keinen Untergang kennt! Lass mich Diener sein! Mehr noch: ein Diener deiner Diener!“^pBrüder und Schwestern! Habt keine Angst, Christus aufzunehmen und seine Herrschergewalt anzuerkennen!^pHelft dem Papst und allen, die Christus und mit der Herrschaft Christi dem Menschen und der ganzen Menschheit dienen wollen!^pHabt keine Angst! Öffnet, ja reißt die Tore weit auf für Christus! Öffnet die Grenzen der Staaten, die wirtschaftlichen und politischen Systeme, die weiten Bereiche der Kultur, der Zivilisation und des Fortschritts seiner rettenden Macht! Habt keine Angst! Christus „weiß, was im Innern des Menschen ist“. Er allein weiß es!^pHeute weiß der Mensch oft nicht, was er in seinem Innern, in der Tiefe seiner Seele, seines Herzens trägt. Er ist deshalb oft im Ungewissen über den Sinn seines Lebens auf dieser Erde. Er ist vom Zweifel befallen, der dann in Verzweiflung umschlägt. Erlaubt also – ich bitte euch und flehe euch in Demut und Vertrauen an –, erlaubt Christus, zum Menschen zu sprechen! Nur er hat Worte des Lebens, ja, des ewigen Lebens!",
          "patr_resp1": "Habt keine Angst:^lDer Erlöser der Menschheit^lhat die Macht des Kreuzes offenbart^lund für uns das Leben gegeben!",
          "patr_resp2": "Öffnet, reißt die Tore weit auf für Christus!",
          "patr_resp3": "In der Kirche sind wir dazu berufen,^lan seiner Macht Anteil zu haben.",
          "oration": "Gott, du bist reich an Erbarmen und hast den Heiligen Papst Johannes Paul II. zur Leitung deiner ganzen Kirche bestellt; gib, dass wir, durch seine Lehre geführt, unsere Herzen vertrauensvoll öffnen für die heilbringende Gnade Christi, des einzigen Erlösers der Menschheit. Der mit dir lebt und herrscht in der Einheit des Heiligen Geistes, Gott, von Ewigkeit zu Ewigkeit."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du bist reich an Erbarmen und hast den Heiligen Papst Johannes Paul II. zur Leitung deiner ganzen Kirche bestellt; gib, dass wir, durch seine Lehre geführt, unsere Herzen vertrauensvoll öffnen für die heilbringende Gnade Christi, des einzigen Erlösers der Menschheit. Der mit dir lebt und herrscht in der Einheit des Heiligen Geistes, Gott, von Ewigkeit zu Ewigkeit."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du bist reich an Erbarmen und hast den Heiligen Papst Johannes Paul II. zur Leitung deiner ganzen Kirche bestellt; gib, dass wir, durch seine Lehre geführt, unsere Herzen vertrauensvoll öffnen für die heilbringende Gnade Christi, des einzigen Erlösers der Menschheit. Der mit dir lebt und herrscht in der Einheit des Heiligen Geistes, Gott, von Ewigkeit zu Ewigkeit."
        }
      }
    },
    "23": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Johannes von Capestrano († 1456)",
          "patr_werk": "Aus einem Traktat über das leuchtende Beispiel des Klerikers.",
          "patr_text": "^hDas Leben bewährter Kleriker strahlt Liebe und Heiterkeit aus^pDie an den Tisch des Herrn berufen sind, müssen sich von allem Schmutz und von aller Unreinheit der Sünde befreien. Das Ganze ihres lobenswerten sittlichen Lebens muss in beispielhaftem Glanz leuchten. Als Salz der Erde für sich selbst und für die übrigen Menschen müssen sie in Ehren Zusammenleben, sich von den Mitmenschen unterscheiden und ihnen als Licht der Welt erstrahlen (vgl. Mt 5,13.14). Von dem erhabenen Lehrer Christus sollen sie lernen, dass er nicht nur zu den Aposteln und Jüngern, sondern auch zu all ihren Nachfolgern, den Priestern und Klerikern, gesagt hat: „Ihr seid das Salz der Erde. Wenn das Salz seinen Geschmack verliert, womit kann man es wieder salzig machen? Es taugt zu nichts mehr; es wird weggeworfen und von den Leuten zertreten“ (Mt 5,13).^pEr wird wirklich wie Unrat von den Menschen zertreten, der unreine und schmutzige Kleriker, von der Jauche der Laster durchtränkt und in den Netzen der Sünde verfangen. Keiner glaube, er tauge noch etwas für sich oder andere. Darum sagt Gregor: Wenn unser Leben verachtet wird, dann auch unsere Predigt.^p„Älteste, die das Amt des Vorstehers gut versehen, verdienen doppelte Anerkennung, besonders solche, die sich mit ganzer Kraft dem Wort und der Lehre widmen“ (1 Tim 5,17). Würdige Priester sind doppelter Ehre wert: einmal wegen ihrer Stellung in der Gemeinde, sodann wegen ihres persönlichen Verhaltens, das ist aus einem zeitlichen und darum vorübergehenden Grund einerseits und aus einem geistlichen und darum ewig bleibenden Grund andererseits. Wenn sie auch wie alle sterblichen Geschöpfe, die der Naturnotwendigkeit unterworfen sind, auf der Erde leben, so geht doch ihr ganzes Streben dahin, ihr Leben in Gemeinschaft mit den Engeln im Himmel zu gestalten, damit sie als kluge Diener des Königs gefallen. Wie die Sonne, die bei Gott in der Höhe für die Menschen aufgeht, „so soll euer Licht vor den Menschen leuchten, damit sie eure guten Werke sehen und euren Vater im Himmel preisen“ (Mt 5,16).^p„Ihr seid das Licht der Welt.“ Denn wie das Licht nicht sich selbst erleuchtet, sondern seine Strahlen ringsumher auf alles übrige ergießt, um es sichtbar und hell zu machen, so macht auch das lichte Leben guter Kleriker alle, die es sehen, mit dem Glanz der Heiligkeit hell und heiter. Wer also berufen ist, für andere zu sorgen, der soll an sich selbst zeigen, wie wir im Haus des Herrn zu leben haben.",
          "patr_resp1": "Verkünde das Wert, tritt dafür ein zu gelegener und ungelegener Zeit;",
          "patr_resp2": "halte nicht mit dem Wort zurück.",
          "patr_resp3": "Weise zurecht, tadle, ermahne in unermüdlicher und geduldiger Belehrung!",
          "oration": "Barmherziger Gott, du hast den heiligen Johannes von Capestrano berufen, die Christenheit in Angst und Not zu ermutigen. Lass die Kirche auch heute deinen Schutz erfahren und schenke ihr allezeit deinen Frieden. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Barmherziger Gott, du hast den heiligen Johannes von Capestrano berufen, die Christenheit in Angst und Not zu ermutigen. Lass die Kirche auch heute deinen Schutz erfahren und schenke ihr allezeit deinen Frieden. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Barmherziger Gott, du hast den heiligen Johannes von Capestrano berufen, die Christenheit in Angst und Not zu ermutigen. Lass die Kirche auch heute deinen Schutz erfahren und schenke ihr allezeit deinen Frieden. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "24": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Antonius Maria Claret († 1870)",
          "patr_werk": "Aus der Abhandlung „Die Überwindung der Selbstsucht“.",
          "patr_text": "^hDie Liebe Christi drängt uns^pVom Feuer des Heiligen Geistes getrieben, durchwanderten die Apostel den Erdkreis. Von dem gleichen Feuer entzündet, gelangten die apostolischen Missionare bis an die Enden der Welt, von einem Pol bis zum andern, um das Wort Gottes zu verkünden. So ist es noch heute, und so wird es immer sein. Sie können auf sich das Wort des heiligen Paulus anwenden: „Die Liebe Christi drängt uns“ (2 Kor 5,14).^pDie Liebe Christi stachelt uns an und macht uns wach, so dass wir eilen und gleichsam fliegen, getragen von den Fittichen des Eifers. Wer Gott wirklich liebt, der liebt auch den Nächsten. Der Liebende ist in der Tat ein Eiferer, und zwar um so mehr, je höher der Grad seiner Liebe ist. Je stärker die Liebe in ihm brennt, desto mehr treibt ihn der Eifer. Wenn jemand keinen Eifer hat, dann zeugt das davon, dass in seinem Herzen Liebe und Zuneigung erloschen sind. Wer Eifer hat, wünscht, dass Gott immer mehr erkannt und geliebt und dass ihm in diesem und in jenem Leben gedient wird. Denn die heilige Liebe kennt keine Begrenzung. Das wünscht er, dafür tut er alles, und dafür bietet er das äußerste auf.^pEbenso hält er es auch mit den Mitmenschen. Mit Tatkraft wünscht er, dass alle Menschen hier auf der Erde zufrieden und drohen in der Heimat selig und glücklich sind; dass alle gerettet werden; dass keiner auf immer verlorengeht; dass niemand Gott beleidigt oder zu irgendeinem Zeitpunkt in der Sünde verharrt. Das sehen wir an den heiligen Aposteln und an allen, die vom Geist der Apostel getrieben werden.^pIch sage mir selbst: Ein Sohn des unbefleckten Herzens Marias ist ein Mann, der von Liebe entbrannt ist und, wohin er auch geht, brennt; der wünscht, alle Menschen mit dem Feuer der göttlichen Liebe zu entzünden, und der sich mit allen Mitteln darum bemüht, dass es dahin kommt. Er lässt sich durch nichts abschrecken; er freut sich am Verlust; er geht an die Arbeit; er nimmt die Mühe auf sich und freut sich, wenn er verleumdet und gepeinigt wird. Er denkt an nichts anderes, als wie er Christus nachfolgen und ihn nachahmen kann im Beten, im Arbeiten, im Leiden und in der unablässigen und alleinigen Sorge für die Ehre Gottes und das Heil der Seelen.",
          "patr_resp1": "Wir wollten euch nicht nur am Evangelium Gottes teilnehmen lassen, sondern auch an unserm Leben;",
          "patr_resp2": "ihr seid uns sehr lieb geworden.",
          "patr_resp3": "Meine Kinder, für die ich von neuem Geburtswehen leide, bis Christus in euch Gestalt gewinnt,",
          "oration": "Herr, unser Gott, du hast den heiligen Antonius Maria Claret berufen, die Botschaft Jesu zu verkünden, und ihm große Liebe und Geduld geschenkt. Auf seine Fürsprache mache uns fähig, deinem Reich zu dienen und den Menschen dein Wort so zu sagen, dass sie zum Glauben an deinen Sohn Jesus Christus gelangen, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, du hast den heiligen Antonius Maria Claret berufen, die Botschaft Jesu zu verkünden, und ihm große Liebe und Geduld geschenkt. Auf seine Fürsprache mache uns fähig, deinem Reich zu dienen und den Menschen dein Wort so zu sagen, dass sie zum Glauben an deinen Sohn Jesus Christus gelangen, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, du hast den heiligen Antonius Maria Claret berufen, die Botschaft Jesu zu verkünden, und ihm große Liebe und Geduld geschenkt. Auf seine Fürsprache mache uns fähig, deinem Reich zu dienen und den Menschen dein Wort so zu sagen, dass sie zum Glauben an deinen Sohn Jesus Christus gelangen, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      }
    },
    "26": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Hirten der Kirche",
          "comm_2": "Comm_2",
          "patr_autor": "Augustinus († 430)",
          "patr_werk": "Zu Psalm 127 (126).",
          "patr_text": "^hDer Herr baut das Haus und bewacht die Stadt^pDer Herr baut das Haus, der Herr Jesus Christus erbaut sein Haus. Viele arbeiten an dem Bau, aber wenn er es nicht baut, müht sich jeder umsonst der daran baut. Wer sind sie, die sich mühen am Bau? Alle, die in der Kirche das Wort Gottes verkünden, die Ausspender der Sakramente Gottes.^pWir also reden außen, er baut innen. Wir nehmen wahr, wie ihr zuhört; was ihr aber denkt, weiß allein er, der eure Gedanken sieht. Er baut, er ermahnt, er versetzt in Furcht, er öffnet das Verständnis, er führt euren Geist und Sinn zum Glauben. Und doch arbeiten auch wir als Bauleute; doch „wenn nicht der Herr das Haus baut, müht sich jeder umsonst, der daran baut“.^p(Das neue Jerusalem) hat auch Wächter. Wie es Bauleute hat, die sich um seine Auferbauung mühen, so hat es auch solche, die es bewachen, und zwar tun das die Bischöfe. Darum ist der Platz der Bischöfe erhöht, damit sie die Übersicht haben und gleichsam über dem Volk wachen. Das griechische epískopos heißt übersetzt Beaufsichtiger, weil er die Aufsicht hat, weil er von oben herab sieht. Über diesen erhöhten Platz wird eine gefährliche Rechenschaft verlangt, wenn wir hier nicht in einer solchen Gesinnung stehen, dass wir demutsvoll den Platz zu euren Füßen einnehmen und für euch beten, dass er euch behüte, der eure Gesinnungen kennt.^pDenn wir können euch zwar hereinkommen und hinausgehen sehen; aber was ihr in euren Herzen denkt, sehen wir um so weniger, als wir nicht einmal sehen können, was ihr in euren Häusern tut. Wie führen wir denn dann die Aufsicht? Nach Menschenweise, soviel wir können, soviel wir empfangen haben. Wenn wir aber nach Menschenweise Aufsicht führen und nur unvollkommen Wache halten können, bleibt ihr darum ohne Aufsicht? Das sei fern. Denn wo bliebe der, von dem es heißt: „Wenn nicht der Herr die Stadt bewacht, wacht der Wachter umsonst?“ Wir bemühen uns, Aufsicht zu führen, doch unsere Mühe ist vergebens, wenn er nicht wacht, der eure Gedanken sieht. Er hält Wache, wenn ihr wach seid, er hält auch Wache, wenn ihr schlaft.^pWir wachen über euch, da wir durch unser Verwaltungsamt dazu verpflichtet sind. Doch möchten wir auch zusammen mit euch beschirmt werden. Euch gegenüber sind wir Hirten, aber unter jenem Hirten sind wir zusammen mit euch Schafe. Euch gegenüber sind wir von diesem Platz aus Lehrer, doch unter jenem einzigen Lehrer sind wir in dieser Schule eure Mitschüler.",
          "patr_resp1": "Verkünde das Wort, tritt dafür ein, ob man es hören will oder nicht.",
          "patr_resp2": "Wenn du das tust, rettest du dich und alle, die auf dich hören.",
          "patr_resp3": "Weise zurecht, tadle, ermahne, in unermüdlicher und geduldiger Belehrung.",
          "oration": "Allmächtiger Gott, du hast den heiligen Witta mit deiner Liebe erfüllt; du hast ihm jenen Glauben geschenkt, der die Welt überwindet, und ihn aufgenommen in die Schar der heiligen Bischöfe. Mache auch uns auf seine Fürsprache treu im Glauben und beharrlich in der Liebe, damit wir an seiner Herrlichkeit Anteil erlangen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Hirten der Kirche",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, du hast den heiligen Witta mit deiner Liebe erfüllt; du hast ihm jenen Glauben geschenkt, der die Welt überwindet, und ihn aufgenommen in die Schar der heiligen Bischöfe. Mache auch uns auf seine Fürsprache treu im Glauben und beharrlich in der Liebe, damit wir an seiner Herrlichkeit Anteil erlangen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Hirten der Kirche",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, du hast den heiligen Witta mit deiner Liebe erfüllt; du hast ihm jenen Glauben geschenkt, der die Welt überwindet, und ihn aufgenommen in die Schar der heiligen Bischöfe. Mache auch uns auf seine Fürsprache treu im Glauben und beharrlich in der Liebe, damit wir an seiner Herrlichkeit Anteil erlangen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "31": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Hieronymus († 419/420)",
          "patr_werk": "Aus dem Brief an Oceanus.",
          "patr_text": "^hDie Eigenschaften eines Bischofs^p„Wer das Amt eines Bischofs anstrebt, der strebt nach einer großen Aufgabe“ (1 Tim 3,1). Der Apostel denkt also an eine Aufgabe, nicht an eine Würde; er fasst die Arbeit, nicht das Vergnügen ins Auge. Er spricht von einer Aufgabe, die zur Demut hinabführt und seinen Inhaber nicht vor Stolz sich aufblähen lässt.^p„Der Bischof soll ein Mann ohne Tadel sein“ (1 Tim 3,2), oder wie es im Brief an Titus heißt: „Er soll unbescholten sein“ (Tit 1,6). Hier fasst der Apostel mit einem Ausdruck alle Tugenden zusammen und stellt damit eine Forderung auf, die beinahe über die natürlichen Kräfte hinausgeht. Denn wenn jede Sünde, selbst ein unnützes Wort, Tadel verdient: wo in aller Welt gibt es dann einen Menschen, der ohne Sünde und damit ohne Tadel wäre?^pDer Apostel will, dass nur ein solcher zum zukünftigen Hirten der Kirche ausersehen werde, nach dem sich die anderen richten können, um zur Herde im wahren Sinn zu werden. Die Rhetoren verlangen zwei Dinge vom Redner: er muss ein guter Mensch und im Reden erfahren sein. Vor allem verlangt man eine tadellose Lebensführung und erst an zweiter Stelle eine beredte Zunge, will einer Anerkennung finden. Denn wo das Leben die Worte Lügen straft, hört jede Lehrautorität auf.",
          "patr_resp1": "Gebt acht auf die ganze Herde, in der euch der Heilige Geist zu Bischöfen bestellt hat.",
          "patr_resp2": "Sorgt wie Hirten für die Kirche Gottes, die er sich durch das Blut seines eigenen Sohnes erworben hat.",
          "patr_resp3": "Von Verwaltern verlangt man, dass sie sich treu erweisen.",
          "oration": "Gott, du hast uns im heiligen Wolfgang einen Mann des Geistes und der Tat geschenkt und ihn berufen, als Mönch und Bischof auf vielfache Weise deinem Volk zu dienen. Gib auch der Kirche unserer Zeit die Weite seines Geistes und die Kraft seiner Liebe. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du hast uns im heiligen Wolfgang einen Mann des Geistes und der Tat geschenkt und ihn berufen, als Mönch und Bischof auf vielfache Weise deinem Volk zu dienen. Gib auch der Kirche unserer Zeit die Weite seines Geistes und die Kraft seiner Liebe. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du hast uns im heiligen Wolfgang einen Mann des Geistes und der Tat geschenkt und ihn berufen, als Mönch und Bischof auf vielfache Weise deinem Volk zu dienen. Gib auch der Kirche unserer Zeit die Weite seines Geistes und die Kraft seiner Liebe. Darum bitten wir durch Jesus Christus."
        }
      }
    }
  },
  "11": {
    "3": {
      "n1": {
        "name": "Hubert",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Gregor von Nazianz († 390)",
          "patr_werk": "Aus der Schrift „Über die Mäßigung im Disputieren“.",
          "patr_text": "^hJeder nach seinen Gaben^p‚Wir alle sind ein Leib in Christus, als einzelne aber sind wir Glieder, die zueinander gehören‘ (vgl. Röm 12,5). Die einen gebieten und regieren, die anderen werden geleitet und leisten Gehorsam. Doch wenn auch beide Teile nicht die gleiche Tätigkeit ausüben, da es ja nicht das gleiche ist, zu leiten und sich leiten zu lassen, so werden sie dennoch eins in Beziehung auf den einen Christus, durch denselben Geist zusammengefügt und verbunden. Und wie auch unter den Untergebenen wieder ein großer Abstand und Unterschied besteht, da sie an Kenntnissen, an Werken und an Reife des Alters nicht gleich sind, so besteht gleicherweise auch unter den Vorgesetzten ein nicht geringer Unterschied. Die einen, schreibt Paulus, hat Gott in der Kirche zu Aposteln bestimmt, andere zu Propheten, wieder andere zu Hirten und Lehrern (vgl. Eph 4,11); diese als Leuchten der Wahrheit, jene als Vorbilder, andere zur Segnung und Erleuchtung. Der Geist ist derselbe, die Gaben aber sind ungleich, wie die Gefäße, die den Geist in sich aufnehmen.^pDiese Ordnung, meine Brüder, wollen wir in Ehren halten und bewahren. Der eine sei Ohr, der andere Zunge, der dritte Hand. Der eine lehre, der andere lerne, ein dritter schaffe mit seinen Händen Gutes, damit er davon den Bedürftigen und Notleidenden geben könne. Der eine leite und führe, der andere vervollkommne sich durch Gehorsam. Wer lehrt, lehre mit Anstand und Würde. – Der Lernende sei folgsam, der Leitende freundlich, der Untergebene willig. Wir wollen nicht alle den Dienst der Zunge versehen, der am willigsten und schnellsten geleistet wird; wir wollen nicht alle Propheten sein, nicht alle Apostel, nicht alle Lehrer. Es ist aber doch etwas Großes und Erhebendes, von Gott zu reden? Gewiss, doch etwas noch Größeres ist es, sich Gott zu weihen und sich für ihn zu heiligen.",
          "patr_resp1": "Müht euch mit Furcht und Zittern um euer Heil.",
          "patr_resp2": "Mehr als euer guter Wille ist es Gott, der in euch das Wollen und das Vollbringen bewirkt.",
          "patr_resp3": "So spricht der Herr: Getrennt von mir könnt ihr nichts tun.",
          "oration": "Gott, du Licht der Gläubigen, du hast den heiligen Bischof Hubert dazu berufen, der Kirche durch sein Wort und Beispiel zu dienen. Seine Fürsprache helfe uns, den Glauben zu bewahren, den er in seiner Predigt gelehrt, und den Weg zu gehen, den er uns durch sein Leben gewiesen hat. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Hubert",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Licht der Gläubigen, du hast den heiligen Bischof Hubert dazu berufen, der Kirche durch sein Wort und Beispiel zu dienen. Seine Fürsprache helfe uns, den Glauben zu bewahren, den er in seiner Predigt gelehrt, und den Weg zu gehen, den er uns durch sein Leben gewiesen hat. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Hubert",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Licht der Gläubigen, du hast den heiligen Bischof Hubert dazu berufen, der Kirche durch sein Wort und Beispiel zu dienen. Seine Fürsprache helfe uns, den Glauben zu bewahren, den er in seiner Predigt gelehrt, und den Weg zu gehen, den er uns durch sein Leben gewiesen hat. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Pirmin",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Pirmin († 753)",
          "patr_werk": "Aus dem Missionskatechismus des heiligen Pirmin.",
          "patr_text": "^hGlaubt an das Evangelium, und lasst euch taufen^pDer Heilige Geist sagt durch den Propheten: „Ich gieße reines Wasser über euch aus, dann werdet ihr rein. Ich reinige euch von aller Unreinheit, von allen euren Götzen. Ich schenke euch ein neues Herz und lege einen neuen Geist in euch“ (Ez 36,25.26). Ebenso sagt der Heilige Geist im Evangelium: „Wenn jemand nicht aus Wasser und Geist geboren wird, kann er nicht in das Reich Gottes kommen“ (Joh 3,5). Das heißt: Wer nicht glaubt und getauft worden ist, kann nicht in das Reich Gottes kommen.^pDeswegen, Brüder, erinnern wir euch, welchen Bund wir in unserer Taufe mit Gott geschlossen haben. Als wir vom Priester nach unserem Namen gefragt wurden, da hast du geantwortet – du selber, wenn du schon antworten konntest, oder doch jener, der für dich den Glauben bekannte und dich vom Taufbrunnen aufnahm: „Johannes soll er heißen“ – oder es wurde ein anderer Name genannt. Der Priester aber fragte: „.Johannes, widersagst du dem Teufel, allen seinen Werken und all seiner Pracht?“ Du hast geantwortet: „Ich widersage.“ Das heißt, ich verachte und verlasse alles schlechte und teuflische Tun.^pNach dieser Absage an den Teufel und an alle seine Werke wurdest du vom Priester gefragt: „Glaubst du an den allmächtigen Gott, den Vater, den Schöpfer des Himmels und der Erde?” Da hast du geantwortet: „Ich glaube!“ Und weiter: „Glaubst du an Jesus Christus, seinen eingeborenen Sohn, unseren Herrn, empfangen durch den Heiligen Geist, geboren von der .Jungfrau Maria, gelitten unter Pontius Pilatus, gekreuzigt, gestorben und begraben, hinabgestiegen in das Reich des Todes, am dritten Tag auferstanden von den Toten, aufgefahren in den Himmel; er sitzt zur Rechten Gottes, des allmächtigen Vaters; von dort wird er kommen, zu richten die Lebenden und die Toten?“ Wiederum hast du geantwortet: „Ich glaube!“ Und zum dritten Mal hat dich der Priester gefragt: „Glaubst du an den Heiligen Geist, die heilige katholische Kirche, Gemeinschaft der Heiligen, Vergebung der Sünden, Auferstehung des Fleisches und das ewige Leben?“ Da hast du oder dein Taufpate für dich geantwortet: „Ich glaube!“^pSeht, das ist der Bund oder das Versprechen, das ist euer Bekenntnis, das bei Gott gilt! Als Glaubender bist du getauft worden im Namen des Vaters und des Sohnes und des Heiligen Geistes zur Vergebung aller Sünden.^pVom Priester bist du mit dem Chrisam des Heils zum ewigen Leben gesalbt worden. Dein Leib hat das weiße Gewand angezogen, deine Seele aber mit Christus die himmlische Gnade. Dir zum Schutz ist ein heiliger Engel bestimmt worden. Du hast den Namen Christi angenommen, wirst der katholischen Kirche zugezählt und bist ein Glied Christi geworden, so wie der Apostel sagt: „So sind wir, die vielen, EIN Leib in Christus, als einzelne aber sind wir Glieder, die zueinander gehören“ (Röm 12,5), weil Christus unser Haupt ist, wir aber seine Glieder. Denn von Christus her sind wir ja Christen genannt.",
          "patr_resp1": "Geht hinaus in die ganze Welt und verkündet das Evangelium allen Geschöpfen!",
          "patr_resp2": "Wer glaubt und sich taufen lässt, wird gerettet.",
          "patr_resp3": "Wenn jemand nicht aus Wasser und Geist geboren wird, kann er nicht in das Reich Gottes ",
          "oration": "Gott, unser Retter, du hast den heiligen Bischof Pirmin gesandt, damit er unsere Väter im Glauben unterweise und Klöster gründe als Stätten des Gebetes und christlicher Bildung. Gib, dass das Wort der Frohen Botschaft nicht verstumme und dein Reich in uns Wachse bis zum Tag der Vollendung. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Pirmin",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, unser Retter, du hast den heiligen Bischof Pirmin gesandt, damit er unsere Väter im Glauben unterweise und Klöster gründe als Stätten des Gebetes und christlicher Bildung. Gib, dass das Wort der Frohen Botschaft nicht verstumme und dein Reich in uns Wachse bis zum Tag der Vollendung. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Pirmin",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, unser Retter, du hast den heiligen Bischof Pirmin gesandt, damit er unsere Väter im Glauben unterweise und Klöster gründe als Stätten des Gebetes und christlicher Bildung. Gib, dass das Wort der Frohen Botschaft nicht verstumme und dein Reich in uns Wachse bis zum Tag der Vollendung. Darum bitten wir durch Jesus Christus."
        }
      },
      "n3": {
        "name": "Martin von Porres",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Johannes XXIII. († 1963)",
          "patr_werk": "Aus der Homilie zur Heiligsprechung des heiligen Martin von Porres.",
          "patr_text": "^hMartin von der Liebe^pMartin zeigt am Beispiel seines Lebens, dass wir das Heil auf dem Weg erlangen können, den Christus gezeigt hat: Wenn wir nämlich an erster Stelle Gott lieben aus ganzem Herzen, aus ganzer Seele und mit unserem ganzen Denken, an zweiter Stelle aber unsere Nächsten wie uns selbst (vgl. Mt 22,37.39).^pDa Martin überzeugt war, dass Christus Jesus unsere Sünden mit seinem Leib auf das Holz des Kreuzes hinaufgetragen hat (vgl. 1 Petr 2,24), schenkte er ihm seine Liebe vor allem als dem Gekreuzigten, und wenn er die bitteren Leiden des Gekreuzigten betrachtete, berührte es ihn so stark, dass er viele Tränen vergoss. Er liebte auch mit besonderer Zuneigung das erhabene Sakrament der Eucharistie, betete es viele Stunden lang an, in der Sakristei der Kirche verborgen, und wünschte es so oft wie möglich zu empfangen.^pGehorsam der Mahnung des göttlichen Meisters, schenkte der heilige Martin den Brüdern eine große Liebe, die aus seinem ungebrochenen Glauben und aus tiefer Demut des Herzens kam. Er liebte alle Menschen, weil er sie als Gotteskinder und seine Brüder betrachtete. Ja er liebte sie mehr als sich selbst, und zuweilen meinte er in seiner Demut, sie alle seien besser und gerechter als er. Die Fehler der andern entschuldigte er und verzieh das bitterste Unrecht, weil er überzeugt war, er verdiene wegen seiner Sünden noch viel härtere Strafen; mit allem Eifer mühte er sich, die Schuldigen wieder zum Guten zurückzuführen.^pDen Kranken stand er gütig bei. Den Armen half er mit Speise, Kleidung und Arzneien. Den Landarbeitern, den Menschen schwarzer Hautfarbe und den Mischlingen, die zu jener Zeit für die niedrigsten Dienstleistungen herangezogen wurden, half er mit allem Eifer, soweit es in seiner Macht lag, so dass er im Volksmund mit Recht „Martin von der Liebe“ genannt wurde.^pDieser heilige Mann, der durch seinen Zuspruch und seine Tugend andere so erfolgreich für den Glauben gewann, vermag auch heute noch unsern Geist wunderbar zum Himmel zu erheben. Leider begreifen nicht alle diese Güter von droben, wie sie es sollten, nicht alle ehren sie, ja viele, die sich sündhaften Freuden hingehen, schätzen sie gering, finden sie langweilig und vernachlässigen sie völlig. Möge das Beispiel Martins ihnen die heilsame Lehre geben, wie gut und glücklich ein jeder ist, der in den Fußstapfen Jesu Christi steht und seinen göttlichen Geboten gehorcht.",
          "patr_resp1": "Als Diener Christi soll man uns betrachten und als Verwalter der Geheimnisse Gottes.",
          "patr_resp2": "Von Verwaltern verlangt man, dass sie sich treu erweisen.",
          "patr_resp3": "Viele Menschen rühmen sich ihrer Güte, aber wer findet einen, auf den Verlass ist?",
          "oration": "Barmherziger Gott, du hast den heiligen Martin von Porres auf dem Weg der Armut zur himmlischen Herrlichkeit geführt. Mit großer Hingabe hat er den Notleidenden seiner Vaterstadt gedient. Wecke auch in uns die Bereitschaft, den Mitmenschen in Not und Krankheit beizustehen, und lass uns zusammen mit ihnen die Fülle des Lebens empfangen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Martin von Porres",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Ev": "Gepriesen sei der Herr,^ldenn er hat allen Völkern Erlösung geschaffen^lund sie aus der Finsternis in sein wunderbares Licht gerufen.",
          "oration": "Barmherziger Gott, du hast den heiligen Martin von Porres auf dem Weg der Armut zur himmlischen Herrlichkeit geführt. Mit großer Hingabe hat er den Notleidenden seiner Vaterstadt gedient. Wecke auch in uns die Bereitschaft, den Mitmenschen in Not und Krankheit beizustehen, und lass uns zusammen mit ihnen die Fülle des Lebens empfangen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Martin von Porres",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Ev": "Lasst und preisen die Größe des Herrn,^lder seinen niedrigen Knecht erhöht^lund mit himmlischen Gaben bekleidet hat!",
          "oration": "Barmherziger Gott, du hast den heiligen Martin von Porres auf dem Weg der Armut zur himmlischen Herrlichkeit geführt. Mit großer Hingabe hat er den Notleidenden seiner Vaterstadt gedient. Wecke auch in uns die Bereitschaft, den Mitmenschen in Not und Krankheit beizustehen, und lass uns zusammen mit ihnen die Fülle des Lebens empfangen. Darum bitten wir durch Jesus Christus."
        }
      },
      "n4": {
        "name": "Rupert Mayer",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gütiger Gott, du hast den seligen Priester Rupert zu einem standhaften Bekenner des Glaubens und selbstlosen Helfer der Armen gemacht. Erwecke auf seine Fürsprache der Kirche neue, vorbildliche Verkünder des Glaubens und schenke uns allen ein offenes Herz für die Nöte der Menschen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Rupert Mayer",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gütiger Gott, du hast den seligen Priester Rupert zu einem standhaften Bekenner des Glaubens und selbstlosen Helfer der Armen gemacht. Erwecke auf seine Fürsprache der Kirche neue, vorbildliche Verkünder des Glaubens und schenke uns allen ein offenes Herz für die Nöte der Menschen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Rupert Mayer",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gütiger Gott, du hast den seligen Priester Rupert zu einem standhaften Bekenner des Glaubens und selbstlosen Helfer der Armen gemacht. Erwecke auf seine Fürsprache der Kirche neue, vorbildliche Verkünder des Glaubens und schenke uns allen ein offenes Herz für die Nöte der Menschen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "6": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Basilius der Große († 379)",
          "patr_werk": "Aus dem Brief an seinen Schüler Chilo.",
          "patr_text": "^hStandhaftes Ausharren in der Einsamkeit^pWenn dir Gedanken der Versuchung kommen: Wann nützt es mir, an diesem einsamen Ort zu leben, welcher Gewinn erwächst mir aus der Absonderung von der menschlichen Gesellschaft?, dann halte es so: Will diese schlimme Vorstellung mit vielen und verschiedenen wohlklingenden Scheingründen dich zu Fall bringen, so stelle ihr in frommer Erwägung die praktische Erfahrung gegenüber und sprich: Du sagst mir, die Dinge dieser Welt seien gut; aber gerade deshalb bin ich hierher übergesiedelt, weil ich mich der Güter der Welt für unwürdig hielt. Mit den Gütern der Welt sind aber auch Übel vermischt, und die Übel überwiegen bei weitem. Deshalb ziehe ich mich wie ein Sperling auf die Berge zurück.^pIch lebe in dieser Einöde, wo der Herr verweilt hat. Hier ist die Eiche Mambre, hier die Leiter, die zum Himmel führt; hier sind die Engelscharen, die Jakob sah. Hier ist die Wüste, in der das gereinigte Volk das Gesetz erhielt und so ins Gelobte Land einzog und Gott schaute. Hier ist der Berg Karmel, auf dem Elija hauste, Gott zum Wohlgefallen. Hier ist die Ebene, in die Esra sich zurückzog, um alle göttlich inspirierten Bücher im Auftrag Gottes zu erforschen. Hier ist die Wüste, wo der heilige Johannes Heuschrecken aß und den Menschen Buße predigte. Hier ist der Ölberg, den Christus erstieg, um zu beten und uns beten zu lehren.^pHier ist Christus, der Freund der Einsamkeit; denn er sagt ja: „Wo zwei oder drei in meinem Namen versammelt sind, da bin ich mitten unter ihnen“ (Mt 18,20). Hier ist „der enge und schmale Weg, der zum Leben führt“ (vgl. Mt 7,14). Hier sind die Lehrer und Propheten, die „in Wüsten und Gebirgen, in den Höhlen und Schluchten des Landes umherirren“ (vgl. Hebr 11,38). Hier findet man die Apostel und Evangelisten und das stadtferne Leben der Mönche.^pDas habe ich freiwillig übernommen, um zu erlangen, was den Blutzeugen Christi und allen anderen Heiligen verheißen ist, und um in Wahrheit sagen zu können: „Ich habe den Herrn beständig vor Augen“ (Ps 16,8).",
          "patr_resp1": "Ich betete, und es wurde mir Klugheit gegeben;",
          "patr_resp2": "ich flehte, und der Geist der Weisheit kam zu mir.",
          "patr_resp3": "Fehlt es einem an Weisheit, so soll er sie von Gott erbitten.",
          "oration": "Barmherziger Gott, du hast den heiligen Einsiedler Leonhard berufen, Gefangene zu befreien und Sünder auf den rechten Weg zu führen. Löse uns aus den Fesseln der Sünde und erhalte uns in der Freiheit, zu der du uns berufen hast. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Barmherziger Gott, du hast den heiligen Einsiedler Leonhard berufen, Gefangene zu befreien und Sünder auf den rechten Weg zu führen. Löse uns aus den Fesseln der Sünde und erhalte uns in der Freiheit, zu der du uns berufen hast. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Barmherziger Gott, du hast den heiligen Einsiedler Leonhard berufen, Gefangene zu befreien und Sünder auf den rechten Weg zu führen. Löse uns aus den Fesseln der Sünde und erhalte uns in der Freiheit, zu der du uns berufen hast. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "7": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Alkuin von Tours († 804)",
          "patr_werk": "Aus einer Predigt zum Gedenktag des heiligen Willibrord.",
          "patr_text": "^hWir wollen unsere Wege nach seinen Spuren ausrichten^pLiebe Brüder, wir wollen uns im Herrn freuen und in geistlichem Jubel frohlocken, dass er uns einen solchen Meister des Lebens, Lehrer der Gerechtigkeit und Urheber unserer Einmütigkeit geschenkt hat; denn Willibrord hat uns in dieser heiligen Hürde versammelt und mit gütiger Autorität unterwiesen.^pMit uns soll sich auch alles Volk freuen, das heute zum Geburtsfest unseres heiligen Vaters zusammenströmte und an den Vigilien des apostolischen Mannes in frommer Verehrung teilnehmen wollte.^pIch beschwöre euch, keiner darf im Glauben schwanken, noch an der Vergebung seiner Schuld zweifeln oder an der Frucht und am Erfolg des hingebenden Gebetes. Hat uns Gott doch einen solchen Schutzherrn gewährt! Auf seine Fürsprache schenkt er uns Erhörung, denn je vertrauensvoller wir ihn anrufen, um so eher werden wir erhört. Der Glaube nämlich erlangt alles, wie uns das verlässliche Beispiel dieses heiligen Mannes, dessen Festtag wir heute begehen, vor Augen führt; denn er war schon von Kindheit an bemüht, Gott durch seinen Glauben zu gefallen.^pIn der Inbrunst seines Glaubens hat er Gott zuliebe Vaterland, Verwandte und Freunde verlassen, die irdischen Güter geringgeschätzt, um die himmlischen zu erlangen. Deshalb hat er auch für seine Mühen die verdienten Erfolge gehabt: Viele Völkerscharen hat er zu Christus bekehrt, viele Heiden von Irrtum und Sünde abgebracht und so, mit Hilfe der göttlichen Gnade, aus Kindern des Zornes Kinder des Erbarmens gemacht. Die Hölle hat er verschlossen, den Himmel aufgetan. Zahlreiche Völker hat er aufgesucht, um alle auf den Weg der Wahrheit zu führen. Er hat sich selbst nicht geschont, sondern sich unter wilde Stämme begeben, um dort vielleicht die purpurne Krone des Martyriums zu finden. Gott aber hat ihn um des Heiles vieler willen bewahrt: er sollte durch seine Verkündigung höhere Ehre empfangen, als wenn er als einzelner die Krone durch das Martyrium erlangt hätte. Der sich voll Hoffnung abgemüht hat, ist im Frieden entschlafen. Der das zeitliche Leben verlassen hat, hat nun das ewige erlangt. Uns wurde er weggenommen, den Engeln wurde er zugesellt.^pDas Beispiel dieses heiligen Meisters möge uns aus unserer Halbherzigkeit und Trägheit aufrütteln. Denn wenn wir seinem heiligen Vorbild folgen, erlangen wir auch den ersehnten Lohn der Seligkeit durch den, der ihn gekrönt hat und uns auf dem Weg zum Ziel hilfreich begleitet, Jesus Christus, unseren Herrn, der mit dem Vater und dem Heiligen Geist lebt und herrscht in ewiger Herrlichkeit.",
          "patr_resp1": "Heiliger Willibrord, Bekenner Christi, höre auf die Gläubigen, die zu dir beten,",
          "patr_resp2": "und sende uns vom Himmel her die Vergebung, die du erwirkst.",
          "patr_resp3": "Heiliger Willibrord, nimm um des Herrn willen das Flehen deiner Diener in steter Güte auf.",
          "oration": "Gott, du Heil aller Menschen, du hast den heiligen Bischof Willibrord gesandt, vielen Völkern die Frohe Botschaft zu verkünden (und unsere Väter im Glauben zu festigen). Höre auf seine Fürsprache und hilf, dass auch wir deine Güte in Wort und Tat bezeugen, damit deine Kirche erstarke und wachse. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Ev": "Wie herrlich leuchten die Taten des heiligen Willibrord!^lVielen Völkern hat er das Licht des Glaubens gebracht;^lewiger Lohn wurde ihm zuteil.",
          "oration": "Gott, du Heil aller Menschen, du hast den heiligen Bischof Willibrord gesandt, vielen Völkern die Frohe Botschaft zu verkünden (und unsere Väter im Glauben zu festigen). Höre auf seine Fürsprache und hilf, dass auch wir deine Güte in Wort und Tat bezeugen, damit deine Kirche erstarke und wachse. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Ev": "Heiliger Willibrord,^ldu hast die Freude des Paradieses erlangt.^lBitte bei Gott für alle, die in Not und Bedrängnis zu dir rufen.",
          "oration": "Gott, du Heil aller Menschen, du hast den heiligen Bischof Willibrord gesandt, vielen Völkern die Frohe Botschaft zu verkünden (und unsere Väter im Glauben zu festigen). Höre auf seine Fürsprache und hilf, dass auch wir deine Güte in Wort und Tat bezeugen, damit deine Kirche erstarke und wachse. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "15": {
      "n1": {
        "name": "Albert der Große",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Albert der Große († 1280)",
          "patr_werk": "Aus dem Kommentar zum Lukasevangelium.",
          "patr_text": "^hHirte und Lehrer zum Aufbau des Leibes Christi^p„Tut dies zu meinem Gedächtnis!“ (Lk 22,19) An diesem Satz ist zweierlei zu beachten: Das eine ist der Auftrag, dieses Sakrament zu vollziehen, was mit den Worten gemeint ist: „Tut dies!“ Das andere ist, dass das Sakrament ein Gedächtnis des Herrn ist, der für uns in den Tod geht.^pEr sagt: „Tut dies!“ Kein Auftrag ist nützlicher, liebevoller und heilsamer, keiner liebenswerter; kein Auftrag kommt dem ewigen Leben so nahe. Das soll nun im einzelnen gezeigt werden.^pDer Auftrag ist nützlich zur Vergebung der Sünden, und er ist im Leben das nützlichste, um die Fülle der Gnade zu gewinnen. Der Vater der Geister unterrichtet uns in dem, was nützlich ist, um seine Heiligung zu erlangen (vgl. Hebr 12,10). Die Heiligung liegt in seiner Opferhingabe, das heißt darin, dass er sich im Sakrament für uns darbrachte und dass er sich uns hingab zum Genuss: ‚Für euch heilige ich mich‘ (vgl. Joh 17,19). Christus hat sich selbst durch den Heiligen Geist als makelloses Opfer Gott dargebracht. Er wird unser Gewissen von den toten Werken reinigen, damit wir dem lebendigen Gott dienen (vgl. Hebr 9,14).^pNichts Liebevolleres können wir tun. Denn was könnte liebevoller sein als das, worin Gott uns gegenüber seine ganze Güte zeigt?^pKein Auftrag konnte besser sein für unser Heil. Denn dieses Sakrament ist die Frucht des Lebensbaums. Wer mit Hingabe und aufrichtigem Glauben davon isst, wird auf ewig den Tod nicht erleiden (vgl. Joh 8,52): ‚Ein Lebensbaum ist die Weisheit für jeden, der nach ihr greift, und wer sie festhält, ist glücklich zu preisen‘ (vgl. Spr 3,18). Und: ‚Jeder, der mich isst, wird durch mich leben‘ (vgl. Joh 6,57).^pKein Auftrag könnte liebenswerter sein. Denn dieses Sakrament wirkt Liebe und Einheit. Es ist höchstes Zeichen der Liebe, dass er sich selbst zur Speise reicht: „Meine Zeltgenossen müssen gestehen: Wer gäbe uns von seinem Fleisch, um satt zu werden?“ (vgl. Ijob 31,31 Vg.) Es ist, als sagte er: So sehr habe ich sie geliebt und sie mich; ich verlangte danach, in ihrem Herzen zu sein, dass sie mich so genießen, um meinem Leib angegliedert zu werden. Nicht inniger und natürlicher konnten sie mit mir vereinigt werden und ich mit ihnen. Kein Auftrag konnte dem ewigen Leben näher kommen. Denn die ununterbrochene Dauer des ewigen Lebens kommt daher, dass Gott mit seiner Güte sich selber den in der Seligkeit Lebenden einflößt.",
          "patr_resp1": "Ich habe euch erwählt und dazu bestimmt, dass ihr hingeht und Frucht bringt.",
          "patr_resp2": "Ihr sollt in meinem Reich mit mir an meinem Tisch essen und trinken.",
          "patr_resp3": "Ich vererbe euch das Reich, wie es mein Vater mir vererbt hat.",
          "oration": "Gott, du Quelle aller Weisheit, du hast dem heiligen Bischof Albert die Gabe geschenkt, das Wissen seiner Zeit und den Glauben in Einklang zu bringen. Gib uns die Weite seines Geistes, damit der Fortschritt der Wissenschaft uns hilft, dich tiefer zu erkennen und dir näher zu kommen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Albert der Große",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Quelle aller Weisheit, du hast dem heiligen Bischof Albert die Gabe geschenkt, das Wissen seiner Zeit und den Glauben in Einklang zu bringen. Gib uns die Weite seines Geistes, damit der Fortschritt der Wissenschaft uns hilft, dich tiefer zu erkennen und dir näher zu kommen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Albert der Große",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Quelle aller Weisheit, du hast dem heiligen Bischof Albert die Gabe geschenkt, das Wissen seiner Zeit und den Glauben in Einklang zu bringen. Gib uns die Weite seines Geistes, damit der Fortschritt der Wissenschaft uns hilft, dich tiefer zu erkennen und dir näher zu kommen. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Leopold",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Innozenz VIII. († 1492)",
          "patr_werk": "Aus der Bulle zur Heiligsprechung Leopolds.",
          "patr_text": "^hSeid in eurem Handeln maßvoll, freigebig und barmherzig^pWir sind von Gott erschaffen und von ihm erlöst worden. Aber dennoch bezeigen wir ihm die schuldige Ehrfurcht nicht, ja, wir lassen ihn nicht nur außer acht, sondern schmähen und lästern ihn sehr oft. Es sind uns zwar die Gebote des göttlichen und menschlichen Gesetzes zur Beobachtung vorgelegt, aber wir sträuben uns, diesen Geboten Gehorsam zu leisten. Wir wenden unsere Augen davon weg und zeigen uns widerspenstig. Viele Heilige zeigen uns ihr Beispiel, aber wir weigern uns hartnäckig, diese nachzuahmen, und wenn von unserem Heil gesprochen wird, schützen wir unsere Schwachheit oder unsere irdischen Geschäfte vor.^pDas klare Beispiel des Fürsten Leopold, der verheiratet war und für viele Menschen zu sorgen hatte, ermahnt uns, alle Entschuldigungen fallen zu lassen. um uns im Guten zu üben. Dieser Mann Gottes, in Reichtum erzogen, immer der Freiheit zur Sünde ausgesetzt, mit Ehesorgen und Regierungsgeschäften belastet, vergaß nie den Glauben und die Barmherzigkeit. Er war berühmt wegen seiner Einfachheit, Mäßigkeit und Freigebigkeit. Seine Aufrichtigkeit und seine Demut erwarben ihm die Achtung aller Christen. Er stärkte die Schwachen, stützte die Wankenden, richtete die Unterdrückten auf und half den Bedürftigen.^pInmitten der häuslichen Sorgen, der Schwierigkeiten der Ehe, der Liebe zu seinen Kindern, der Sorgen um sein Land, hielt er Abstand von der Welt und verwaltete das Zeitliche so, dass er das Ewige nicht aus den Augen verlor. Vierzig Jahre regierte er das Land Österreich. Während in anderen Ländern Mord und Totschlag herrschten, erhielt er das ihm anvertraute Land in langem Frieden.",
          "patr_resp1": "Dieser ist es, der vor Gott viel Gutes tat und den Herrn pries von ganzem Herzen.",
          "patr_resp2": "Er möge eintreten für die Sünden der Menschen.",
          "patr_resp3": "Seht den Mann, der niemals murrte, der Gott verehrte mit ungeteiltem Herzen.",
          "oration": "Allherrschender Gott, du hast dem heiligen Markgrafen Leopold für die Ausübung seines Amtes die Gaben deines Geistes geschenkt. Hilf uns, unsere Pflichten treu zu erfüllen, und nimm uns einst auf in dein himmlisches Reich. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Leopold",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allherrschender Gott, du hast dem heiligen Markgrafen Leopold für die Ausübung seines Amtes die Gaben deines Geistes geschenkt. Hilf uns, unsere Pflichten treu zu erfüllen, und nimm uns einst auf in dein himmlisches Reich. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Leopold",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allherrschender Gott, du hast dem heiligen Markgrafen Leopold für die Ausübung seines Amtes die Gaben deines Geistes geschenkt. Hilf uns, unsere Pflichten treu zu erfüllen, und nimm uns einst auf in dein himmlisches Reich. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "16": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "II. Vatikanisches Konzil (1962–1965)",
          "patr_werk": "Aus der Pastoralkonstitution über die Kirche in der Welt von heute.",
          "patr_text": "^hDie Heiligkeit von Ehe und Familie^pMann und Frau, im Ehebund nicht mehr zwei, sondern ein Fleisch (vgl. Mt 19,16), gewähren sich in inniger Verbundenheit der Personen und ihres Tuns gegenseitige Hilfe und gegenseitigen Dienst und erfahren und vollziehen dadurch immer mehr und voller das eigentliche Wesen ihrer Einheit. Diese innige Vereinigung als gegenseitiges Sichschenken zweier Personen wie auch das Wohl der Kinder verlangen die unbedingte Treue der Gatten und fordern die unauflösliche Einheit ihres Bundes.^pEchte eheliche Liebe wird in die göttliche Liebe aufgenommen und durch die erlösende Kraft Christi und die Heilsvermittlung der Kirche gelenkt und bereichert, damit die Ehegatten zu Gott hingeführt und in ihrer hohen Aufgabe als Vater und Mutter unterstützt und gefestigt werden. So werden die christlichen Gatten in den Pflichten und der Würde ihres Standes durch ein eigenes Sakrament gestärkt und gleichsam geweiht. In der Kraft dieses Sakramentes erfüllen sie ihre Aufgabe in Ehe und Familie. Im Geist Christi, durch den ihr ganzes Leben mit Glaube, Hoffnung und Liebe durchdrungen wird, gelangen sie mehr und mehr zu ihrer eigenen Vervollkommnung, zur gegenseitigen Heiligung und so gemeinsam zur Verherrlichung Gottes.^pWenn somit die Eltern durch ihr Beispiel und ihr gemeinsames Gebet auf dem Weg vorausgehen, werden auch die Kinder und alle, die in der Familiengemeinschaft leben, leichter diesen Weg echter Menschlichkeit, des Heils und der Heiligkeit finden. Die Gatten aber müssen in ihrer Würde und Aufgabe als Vater und Mutter die Pflicht der Erziehung, vornehmlich der religiösen, die ihnen in ganz besonderer Weise zukommt, sorgfältig erfüllen.^pAuch die Kinder als lebendige Glieder der Familie tragen auf ihre Weise zur Heiligung der Familie bei. In Dankbarkeit, Ehrfurcht und Vertrauen müssen sie das erwidern, was die Eltern ihnen Gutes tun, und ihnen, wie es Kindern ziemt, im Unglück und in der Einsamkeit des Alters beistehen. Ein Leben, das nach dem Tod des einen Gatten als Fortführung der bisherigen ehelichen Berufung tapfer bejaht wird, soll von allen geachtet werden (vgl. 1 Tim 5,3). Von einem reichen geistlichen Leben soll die Familie auch anderen Familien in hochherziger Weise mitgeben.^pDaher soll die christliche Familie – entsteht sie doch aus der Ehe, die das Bild und die Teilhabe an dem Liebesbund Christi und der Kirche ist (vgl. Eph 5,32) – die lebendige Gegenwart des Erlösers in der Welt und die wahre Natur der Kirche allen kundmachen, sowohl durch die Liebe der Gatten, in hochherziger Fruchtbarkeit, in Einheit und Treue als auch in der bereitwilligen Zusammenarbeit aller ihrer Glieder.",
          "patr_resp1": "Der Frau, die Gott fürchtet, gebührt Lob.",
          "patr_resp2": "Stärke und Hoheit sind ihr Gewand.",
          "patr_resp3": "Spendet ihr Preis ob der Frucht ihrer Hände, es mögen sie rühmen am Tor die Werke ihrer Hände.",
          "oration": "Barmherziger Gott, du hast der heiligen Königin Margareta von Schottland eine große Liebe zu den Armen geschenkt. Höre auf die Fürbitten dieser heiligen Frau und hilf uns, nach ihrem Beispiel so zu leben, dass deine Güte in der Welt sichtbar wird, Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Barmherziger Gott, du hast der heiligen Königin Margareta von Schottland eine große Liebe zu den Armen geschenkt. Höre auf die Fürbitten dieser heiligen Frau und hilf uns, nach ihrem Beispiel so zu leben, dass deine Güte in der Welt sichtbar wird, Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Barmherziger Gott, du hast der heiligen Königin Margareta von Schottland eine große Liebe zu den Armen geschenkt. Höre auf die Fürbitten dieser heiligen Frau und hilf uns, nach ihrem Beispiel so zu leben, dass deine Güte in der Welt sichtbar wird, Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "17": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Gertrud von Helfta († 1302)",
          "patr_werk": "Aus dem Buch „Der Gesandte der göttlichen Liebe“.",
          "patr_text": "^hDu hast Gedanken des Friedens über mich gedacht^pMeine Seele preise dich, Herr und Gott. Mein Schöpfer, meine Seele preise dich, und aus meinem innersten Kern sollen dich bekennen deine Hulderweise, mit denen deine unfassbare Güte mich umgeben hat. Wie und wo immer ich kann, sage ich deiner unermesslichen Barmherzigkeit Dank.^pIch lobe und verherrliche deine Langmut und deine Geduld. Du hast darüber hinweggesehen, dass ich meine Jahre als Kind und junges Mädchen, als heranwachsende junge Frau fast bis zum Ende meines fünfundzwanzigsten Lebensjahres in blinder Torheit durchlief und, wie es mir jetzt scheint, ohne Gewissensbisse in Gedanken, Worten und Werken alles tat, was mir passte und was mir möglich war. Du tratest nicht dazwischen, nicht durch den natürlichen Abscheu vor dem Bösen oder die Liebe zum Guten, die angeboren sind, noch durch Mahnungen der Mitmenschen von außen.^pSo lebte ich, als wäre ich eine Heidin unter Heiden und hätte nie erkannt, dass du, mein Gott, das Gute belohnst und das Böse bestrafst. Dabei hattest du mich von Kindheit an, das heißt vom fünften Lebensjahr an, berufen, unter deinen ergebensten Freunden am Tisch des heiligen Glaubens zu leben.^pLiebster Vater, zur Genugtuung bringe ich dir das Leiden deines geliebten Sohnes dar, von der Stunde an, da er in der Krippe auf Stroh gebettet war, bis zu den Nöten, die er als Kind ertragen musste, bis zu den Entbehrungen des Knaben, den Widerwärtigkeiten des Heranwachsenden und den Leiden des jungen Mannes, bis zur Stunde, in der er am Kreuz das Haupt neigte und mit lautem Schrei den Geist aufgab. Zum Ausgleich all meiner Nachlässigkeiten, liebster Vater, biete ich dir auch das ganze heilige Leben deines Eingeborenen dar mit all seinen Gedanken, Worten und Werken, von der heiligen Stunde an, in der er, von der Höhe seines Thrones gesandt, unsere Erde betrat, bis hin zu jener Stunde, da er deinem väterlichen Angesicht die Herrlichkeit des siegreichen Fleisches Vorstellen durfte.^pZum Dank versenke ich mich in den tiefen Abgrund der Demut. Mit deiner hocherhabenen Barmherzigkeit lobe und verehre ich deine liebe Güte, mit der du über mich, die so verirrt dahinlebte, Pläne des Heils hattest und nicht des Unheils (vgl. Jer 29,11), indem du mich immer wieder mit der Größe deiner Wohltaten erhobst. Darüber hinaus wandtest du mir die unschätzbare Vertrautheit deiner Freundschaft zu und botest mir zur Fülle all meiner Freuden auf verschiedene Weise den edlen Schrein der Gottheit an, dein vergöttlichtes Herz.",
          "patr_resp1": "Mit ewiger Liebe hat der Herr sie geliebt.",
          "patr_resp2": "Von ihrer Kindheit an hat er sie an sich gezogen. Er hat sie in die Einsamkeit geführt.",
          "patr_resp3": "In Treue und Erbarmen hat er sie für immer sich verlobt.",
          "oration": "Gott, du Sehnsucht deiner Geschöpfe, es hat dir gefallen, im Herzen der heiligen Gertrud Wohnung zu nehmen. Schenke auch uns auf ihre Fürbitte die Tröstungen deiner Gegenwart, bringe Licht in das Dunkel unseres Herzens und lass uns erfahren, dass du in uns lebst und wirkst. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Sehnsucht deiner Geschöpfe, es hat dir gefallen, im Herzen der heiligen Gertrud Wohnung zu nehmen. Schenke auch uns auf ihre Fürbitte die Tröstungen deiner Gegenwart, bringe Licht in das Dunkel unseres Herzens und lass uns erfahren, dass du in uns lebst und wirkst. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Sehnsucht deiner Geschöpfe, es hat dir gefallen, im Herzen der heiligen Gertrud Wohnung zu nehmen. Schenke auch uns auf ihre Fürbitte die Tröstungen deiner Gegenwart, bringe Licht in das Dunkel unseres Herzens und lass uns erfahren, dass du in uns lebst und wirkst. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "18": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Leo der Große († 401)",
          "patr_werk": "Aus einer Predigt am Gedenktag der Apostel Petrus und Paulus.",
          "patr_text": "^hPetrus und Paulus, Sprösslinge aus göttlichem Samen^p„Kostbar ist in den Augen des Herrn das Sterben seiner Frommen“ (Ps 116,15). Die auf das Mysterium des Kreuzes Christi gegründete Religion kann durch keinerlei Grausamkeit zerstört werden. Die Kirche wird durch Verfolgungen nicht gemindert, sondern gemehrt, und der Acker des Herrn kleidet sich reicher mit Pracht, wenn die Weizenkörner einzeln in die Erde fallen und dann vervielfacht aufgehen (vgl. Joh 12,24).^pWie fruchtbar diese beiden berühmten Schösslinge aus göttlichem Samen waren, beweisen die Tausende von Märtyrern, die, mit dem Triumph der Apostel wetteifernd, als ein weithin leuchtendes Volk im Purpurgewand in unserer Stadt gelebt haben. Sie krönen die Stadt mit einem einzigen, aus vielen Perlen zusammengesetzten Diadem.^pÜber diesen Schutz, meine Lieben, der uns von Gott als Vorbild der Geduld und zur Festigung des Glaubens bereitet ist, sollen wir ganz allgemein beim Gedächtnis aller Heiligen glücklich sein. Doch in Anbetracht dieser erhabenen Väter dürfen wir uns mit Fug und Recht mit noch größerem Jubel freuen. Denn die Gnade Gottes hat sie unter allen Gliedern der Kirche so hoch erhoben, dass sie dem Leib, dessen Haupt Christus ist, als lichtes Augenpaar eingefügt sind. Ihre Heiligkeit und Tugend sprengt jede sprachliche Ausdrucksmöglichkeit. Wir dürfen nicht meinen, es gebe zwischen ihnen trennende Gegensätze. Die Erwählung macht sie ebenbürtig, die Arbeit ähnlich, der Ausgang gleichwertig.^pWir selbst haben es erfahren und unsere Vorgänger bestätigen es: Wir glauben und Vertrauen, dass uns das Gebet dieser Schutzpatrone stets in allen Mühen des Lebens helfen muss, die Huld Gottes zu erlangen; wenn die eigenen Sünden uns niederdrücken, wollen wir uns durch das Wirken der Apostel aufrichten lassen.",
          "patr_resp1": "Selig die Apostel, die Christus mit glühendem Herzen dienten und mit ihrem Blut die Kirche begründeten;",
          "patr_resp2": "sie tranken den Kelch des Herrn und wurden Freunde Gottes.",
          "patr_resp3": "Wie sie einander im Leben liebten, so wurden sie auch durch den Tod nicht getrennt.",
          "oration": "Ewiger Gott, steh deiner Kirche bei und bewahre sie unter dem Schutz der Apostel Petrus und Paulus, von denen sie den Glauben und das Leben in Christus empfangen hat. Lass sie wachsen in deiner Gnade bis ans Ende der Zeiten. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Ev": "Petrus, der Apostel, und Paulus, der Lehrer der Völker,^lsie haben uns dein Gesetz gelehrt, o Herr.",
          "oration": "Ewiger Gott, steh deiner Kirche bei und bewahre sie unter dem Schutz der Apostel Petrus und Paulus, von denen sie den Glauben und das Leben in Christus empfangen hat. Lass sie wachsen in deiner Gnade bis ans Ende der Zeiten. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Ev": "Der Leib der Heiligen ist in Frieden bestattet,^lihr Name lebt fort auf ewig.",
          "oration": "Ewiger Gott, steh deiner Kirche bei und bewahre sie unter dem Schutz der Apostel Petrus und Paulus, von denen sie den Glauben und das Leben in Christus empfangen hat. Lass sie wachsen in deiner Gnade bis ans Ende der Zeiten. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "23": {
      "n1": {
        "name": "Kolumban",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Kolumban von Luxeuil († 615)",
          "patr_werk": "Aus einer Unterweisung über die Ebenbildlichkeit des Menschen mit Gott.",
          "patr_text": "^hDie Ähnlichkeit mit Gott ist ein hoher Adel^pBei Mose heißt es: „Dann sprach Gott: Lasst uns Menschen machen als unser Abbild, uns ähnlich“ (Gen 1,26). Bitte, betrachtet die hohe Bedeutung dieses Satzes: Gott, der Allmächtige, Unsichtbare, Unfassbare, Unaussprechliche und Unschätzbare, hat den Menschen aus Lehm gebildet und ihn mit der Würde seines Abbildes geadelt!^pWas hat der Mensch mit Gott zu tun, was die Erde mit dem Geist? Denn „Gott ist Geist“ (Joh 4,24). Es ist eine tiefe Herablassung von Gott, dass er dem Menschen das Abbild seiner Ewigkeit und die Ähnlichkeit seines Handelns geschenkt hat; die Ähnlichkeit mit Gott ist ein hoher Adel, wenn sie bewahrt wird.^pWenn der Mensch die der Seele eingesenkten Kräfte recht gebraucht, dann ist er Gott ähnlich. Die Kräfte, die bei der ersten Erschaffung wie Samen in uns eingesenkt wurden, müssen wir Gott zurückgeben. Er gebietet und lehrt: Das ist das erste Gebot, Gott mit ganzem Herzen zu lieben (vgl. Mt 22,37), weil er uns zuerst geliebt hat (vgl. 1 Joh 4,10), von Anfang an, noch bevor wir waren. Die Liebe Gottes ist die Erneuerung des göttlichen Abbildes. Der liebt Gott, der Gottes Gebot hält: denn Gott spricht: „Wenn ihr mich liebt, werdet ihr meine Gebote halten“ (Joh 14,15). Das ist sein Gebot: die gegenseitige Liebe; denn er sagt: „Das ist mein Gebot: Liebt einander, so wie ich euch geliebt habe“ (Joh 15,12).^pDie wahre Liebe besteht aber nicht nur in Worten, sondern vielmehr in Tat und Wahrheit (vgl. 1 Joh 3,18). Wir wollen also unserm Gott, unserm Vater, sein Abbild unversehrt zurückgeben, in Heiligkeit, weil er heilig ist, nach dem Wort: ‚Seid heilig, weil auch ich heilig bin‘ (vgl. Lev 11,44), in Liebe, weil er die Liebe ist nach dem Wort des Johannes: „Gott ist die Liebe“ (1 Joh 4,8), in Güte und Wahrheit, weil Gott gütig und wahrhaftig ist.^pWer wild und zornig und stolz ist, der malt das Bild eines Tyrannen. Damit wir nicht etwa Tyrannenbilder einführen, möge Christus in uns sein Bild schaffen, weil er sagt: „Frieden hinterlasse ich euch, meinen Frieden gebe ich euch“ (Joh 14,27).",
          "patr_resp1": "Umgürtet euch und macht euch bereit. Wie er, der euch berufen hat, heilig ist,",
          "patr_resp2": "so soll auch euer Leben heilig sein.",
          "patr_resp3": "Ich bin der Herr, euer Gott. Erweist euch als heilig und seid heilig, weil ich heilig bin.",
          "oration": "Gott, unser höchstes Gut, du hast den heiligen Kolumban berufen, als Glaubensbote und Mönch für dein Reich zu wirken. Hilf uns auf seine Fürsprache, dass wir in allem dich suchen und mit ganzer Bereitschaft dem Evangelium dienen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Kolumban",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, unser höchstes Gut, du hast den heiligen Kolumban berufen, als Glaubensbote und Mönch für dein Reich zu wirken. Hilf uns auf seine Fürsprache, dass wir in allem dich suchen und mit ganzer Bereitschaft dem Evangelium dienen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Kolumban",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, unser höchstes Gut, du hast den heiligen Kolumban berufen, als Glaubensbote und Mönch für dein Reich zu wirken. Hilf uns auf seine Fürsprache, dass wir in allem dich suchen und mit ganzer Bereitschaft dem Evangelium dienen. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Klemens I.",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Klemens I. († 101)",
          "patr_werk": "Aus dem Brief an die Korinther.",
          "patr_text": "^hWunderbar sind die Gaben Gottes^pWie selig und staunenswert sind die Gaben Gottes: Unsterblichkeit, Glanz der Gerechtigkeit, Wahrhaftigkeit in Freimut, Glaube in Zuversicht, Selbstbeherrschung in Heiligkeit. Das alles liegt im Bereich unserer Erkenntnis. Was haben erst die zu erwarten, die durchhalten? Der Schöpfer und Vater der Welten, der Allheilige selbst kennt die Größe und Schönheit der zu erwartenden Gnadengeschenke. Lasst uns darum ringen, dass wir zur Zahl derer gehören, die ausharren, damit wir Anteil an den verheißenen Gaben erhalten.^pWie soll das geschehen? Wenn sich unser Verstand im Glauben fest auf Gott richtet, wenn wir suchen, was ihm wohlgefällig und angenehm ist, wenn wir tun, was seinem lauteren Willen entspricht, und dem Weg der Wahrheit folgen und wenn wir aller Ungerechtigkeit und Schlechtigkeit, allem Geiz und Zank, aller Bosheit und Hinterlist absagen.^pDas ist der Weg, auf dem wir unser Heil finden: Jesus Christus, der Hohepriester unserer Opfergaben, unser Schützer und Helfer in der Schwachheit. Durch ihn blicken wir auf zur Höhe des Himmels, durch ihn schauen wir wie im Spiegel sein reines und erhabenes Angesicht. Durch ihn werden die Augen unseres Herzens geöffnet. Durch ihn wächst unser unverständiger und verdunkelter Geist dem Licht entgegen. Der Herr will, dass wir durch ihn von der unsterblichen Erkenntnis kosten, er, der als Abglanz seiner Herrlichkeit um so viel erhabener geworden ist als die Engel, wie der Name, den er geerbt hat, den ihren überragt (vgl. Hebr 1,3–4).^pMänner, Brüder, lasst uns mit aller Ausdauer unter seinen lauteren Weisungen Kriegsdienst tun! Die Großen können nicht ohne die Kleinen sein und die Kleinen nicht ohne die Großen. Bei allem gibt es so etwas wie eine Verbindung, und darin liegt die Brauchbarkeit. Nehmen wir unsern Leib als Beispiel: Der Kopf ist nichts ohne die Füße, und die Füße sind nichts ohne den Kopf. Die geringsten Glieder unseres Leibes sind für den ganzen Leib notwendig und gut. Alle sind wohl zusammengefügt und beugen sich einer Ordnung, damit der ganze Leib erhalten bleibt.^pMöge unser ganzer Leib in Christus Jesus erhalten bleiben, und ein jeder ordne sich seinen Nächsten unter, wie es seinen Gnadengaben entspricht. Der Starke sorge für den Schwachen, der Schwache ehre den Starken; der Reiche unterstütze den Armen, der Arme danke Gott, dass er dem Reichen die Mittel gab, seinem Mangel aufzuhelfen. Der Weise zeige seine Weisheit nicht in Worten, sondern in guten Taten. Der Demütige lege nicht für sich selbst Zeugnis ab, sondern überlasse es andern, sein Zeuge zu sein. Da wir also das alles von ihm haben, müssen wir ihm für alles danken. Ihm sei die Ehre in Ewigkeit. Amen.",
          "patr_resp1": "Ich habe David, meinen Knecht, gefunden und mit meinem heiligen Öl ihn gesalbt,",
          "patr_resp2": "beständig wird meine Hand ihn halten.",
          "patr_resp3": "Meine Huld und meine Treue begleiten ihn.",
          "oration": "Allmächtiger, ewiger Gott, der heilige Papst Klemens hat als Priester und Märtyrer deines Sohnes das Wort, das er verkündete, durch sein Tun bekräftigt und die Geheimnisse Christi, die er feierte, mit seinem Blut bezeugt. An seinem Gedenktag rufen wir zu dir: Erfülle uns mit Freude über seinen Sieg und lass uns erfahren, dass deine Macht im Leben der Heiligen sichtbar wird. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Klemens I.",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger, ewiger Gott, der heilige Papst Klemens hat als Priester und Märtyrer deines Sohnes das Wort, das er verkündete, durch sein Tun bekräftigt und die Geheimnisse Christi, die er feierte, mit seinem Blut bezeugt. An seinem Gedenktag rufen wir zu dir: Erfülle uns mit Freude über seinen Sieg und lass uns erfahren, dass deine Macht im Leben der Heiligen sichtbar wird. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Klemens I.",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger, ewiger Gott, der heilige Papst Klemens hat als Priester und Märtyrer deines Sohnes das Wort, das er verkündete, durch sein Tun bekräftigt und die Geheimnisse Christi, die er feierte, mit seinem Blut bezeugt. An seinem Gedenktag rufen wir zu dir: Erfülle uns mit Freude über seinen Sieg und lass uns erfahren, dass deine Macht im Leben der Heiligen sichtbar wird. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "25": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Gregor von Nazianz († 390)",
          "patr_werk": "Aus der Trauerrede auf Basilius den Großen.",
          "patr_text": "^hDas Gut der Bildung^pIch glaube, darin stimmen alle Verständigen überein, dass Bildung das erste unserer Güter ist: nicht nur jene hocherhabene, uns eigene, die jede Armut und jeden Schmuck der Rede verschmäht und sich nur an das Heil und die Schönheit der Wahrheiten hält, sondern auch die heidnische, welche die meisten Christen als schädlich und gefährlich und als von Gott wegführend verachten.^pDenn wir dürfen Himmel und Erde, die Luft und alles, was dazu gehört, nicht deshalb verachten, weil einige eine verkehrte Anschauung davon gehabt haben, indem sie die Werke Gottes als Gott verehrten. Wir müssen vielmehr davon gebrauchen, was zum Leben und zur Freude dienlich ist, und vermeiden, was gefährlich ist, indem wir nicht wie die Unverständigen dem Schöpfer die Schöpfung feindlich gegenüberstellen, sondern aus den Werken den Werkmeister erkennen und, wie der Apostel sagt, alles Denken gefangennehmen, so dass es Christus gehorcht (vgl. 2 Kor 10,5).^pUnseres Wissens ist weder Feuer noch Speise, noch Eisen oder sonst etwas an sich ganz nützlich oder schädlich, sondern je nachdem, wie die Gebrauchenden es wollen. So haben wir auch von den Heiden Wissenschaften übernommen, die sich mit der Erforschung und Untersuchung der Dinge befassen, jedoch verschmäht, was zu Irrtum und zum Abgrund der Verderbnis führt. Dadurch sind wir sogar in der Gottesfurcht gefördert worden, indem wir durch das weniger Gute zur Erkenntnis des Besseren gelangten und uns aus ihrer Ohnmacht eine Stütze unseres Glaubens schufen.^pDemnach ist Bildung nicht zu verachten, wie einige meinen, sondern es sind als töricht und ungebildet zu betrachten, die eine solche Ansicht haben und wollen, dass alle mit ihnen übereinstimmen, damit ihre Unwissenheit bei der allgemeinen Unwissenheit verborgen bleibe und ihre Unwissenheit nicht bekannt werde.",
          "patr_resp1": "Der Herr gibt den Weisen die Weisheit und den Verständigen den Verstand.",
          "patr_resp2": "Tiefe und verborgene Dinge enthüllt er, bei ihm wohnt das Licht.",
          "patr_resp3": "Das alles wirkt der eine und gleiche Geist; einem jeden teilt er seine besonderen Gaben zu, wie er will.",
          "oration": "Herr, unser Gott, du offenbarst uns in der Bedrängnis die Macht deines Erbarmens. Von dir empfing die heilige Katharina die Gnade, das Martyrium zu bestehen. Von dir komme auch uns die Kraft, in aller Not auf deine Hilfe zu vertrauen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, du offenbarst uns in der Bedrängnis die Macht deines Erbarmens. Von dir empfing die heilige Katharina die Gnade, das Martyrium zu bestehen. Von dir komme auch uns die Kraft, in aller Not auf deine Hilfe zu vertrauen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr, unser Gott, du offenbarst uns in der Bedrängnis die Macht deines Erbarmens. Von dir empfing die heilige Katharina die Gnade, das Martyrium zu bestehen. Von dir komme auch uns die Kraft, in aller Not auf deine Hilfe zu vertrauen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "26": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Paul VI. († 1978)",
          "patr_werk": "Aus dem Brief an Erzbischof Hermann Schäufele zum tausendsten Todestag des heiligen Konrad.",
          "patr_text": "^hKonrad, der Hohepriester, der in seinen Tagen Gott wohlgefiel^pAus dem adligen Geschlecht der Welfen hervorgegangen, hat Konrad in schwerer Zeit das Hirtenamt in dem ausgedehnten alemannischen Bistum Konstanz übernommen. In der Ausübung dieses Amtes hat er sich vor allem deshalb Ansehen erworben, weil er reiche geistliche Frucht hervorbrachte, so dass Stadt und Diözese Konstanz zu großer Kraft und zu großem Glanz gelangten. Nachdem er die Sorgen seines Dienstes durch mehr als vierzig Jahre hindurch mit Ausdauer und Stetigkeit getragen hatte, wurde er schließlich als der „treue und kluge Knecht“ (Mt 24,45) erfunden, der sein Leben zum Nutzen und zum Heil der ihm anvertrauten Herde eingesetzt und ihr ein einzigartiges Beispiel der Liebe hinterlassen hat.^pWas Kirche und weltliche Macht in jener Zeit in heilsamer Absicht wieder aufzurichten suchten, förderte Konrad eifrigen Herzens, gewissermaßen als Vorkämpfer religiöser Erneuerung in seiner Diözese. Wie sehr das kirchliche Leben damals aufblühte, wird aus den vielen Pfarreien und Kirchen ersichtlich, die in der Zeit gegründet wurden, als er den Bischofssitz von Konstanz innehatte.^pSein so fruchtbarer seelsorglicher Dienst wurde aus zwei Quellen gespeist: aus der festen Verbundenheit mit dem Apostolischen Stuhl sowie aus der Nachfolge Jesu im täglichen Leben und aus einem leidenschaftlichen Streben nach Frömmigkeit. Darin kann der heilige Konrad den Gliedern der Kirche, die sich auch in unserer Zeit um Erneuerung müht, geeignete Mahnung und sicheres Beispiel sein.^pWie sehr er zu Rom und dem Stuhl des heiligen Petrus als dem Mittelpunkt und dem Fundament der katholischen Kirche hielt, zeigt sich nicht nur daran, dass er den neuerbauten Kirchen von Konstanz die Namen von Heiligen gab, nach denen die bedeutendsten Basiliken Roms benannt sind, sondern auch an mehreren Wallfahrten zu den Gräbern der Apostel. Von der Liebe Christi, seines Herrn, erfüllt, begab er sich dreimal an die Wiege des christlichen Glaubens, in das Land, das durch das Erdenleben unseres Erlösers geheiligt ist.^pWie eifrig Konrad versucht hat, Christus gleichförmig zu werden, wird auch daraus ersichtlich, dass er die Armut und die Armen überaus liebte. So heißt es in einer alten Lebensbeschreibung: „Die Armen bekannten, dass sie in ihm wahrhaft einen Vater gefunden hätten.“ Leuchtendes Zeugnis gibt davon auch das Haus, das er aus eigenen Mitteln in seiner Bischofsstadt für die Armen errichten ließ. Weil er ihnen solche Liebe erwies, verdiente er sich den Namen eines wahren Jüngers seines Meisters, der die Armen seliggepriesen und tätige Liebe ihnen gegenüber und gegenüber jedem Nächsten zum Zeichen seiner Jüngerschaft gemacht hatte (vgl. Joh 13,35).",
          "patr_resp1": "Komm, du guter und treuer Knecht, du bist im Kleinen ein treuer Verwalter gewesen, darum will ich dir eine große Aufgabe übertragen.",
          "patr_resp2": "Komm, nimm teil an der Freude deines Herrn.",
          "patr_resp3": "Herr, fünf Talente hast du mir gegeben; siehe, ich habe noch fünf dazugewonnen.",
          "oration": "Gott, du hast die heiligen Bischöfe Konrad und Gebhard mit dem Geist der Wahrheit und der Liebe erfüllt und ihnen die Sorge für dein Volk anvertraut. Lass uns aus ihrem Geist leben und ihre Hilfe erfahren. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du hast die heiligen Bischöfe Konrad und Gebhard mit dem Geist der Wahrheit und der Liebe erfüllt und ihnen die Sorge für dein Volk anvertraut. Lass uns aus ihrem Geist leben und ihre Hilfe erfahren. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du hast die heiligen Bischöfe Konrad und Gebhard mit dem Geist der Wahrheit und der Liebe erfüllt und ihnen die Sorge für dein Volk anvertraut. Lass uns aus ihrem Geist leben und ihre Hilfe erfahren. Darum bitten wir durch Jesus Christus."
        }
      }
    }
  },
  "12": {
    "1": {
      "n1": {
        "name": "Bischofsweihe des hl. Bonifatius",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Hirten der Kirche",
          "comm_2": "Comm_2",
          "patr_text": "^hTreue zur Kirche Roms^pVor seiner Bischofsweihe leistete der heilige Bonifatius den folgenden Eid:^pIm Namen Gottes des Herrn und unseres Heilands Jesus Christus. Ich, Bonifatius, durch Gottes Gnade Bischof, verspreche euch, dem heiligen Apostelfürsten Petrus und deinem Stellvertreter, dem seligen Papst Gregor sowie dessen Nachfolgern, bei dem Vater, dem Sohn und dem Heiligen Geist, der untrennbaren Dreifaltigkeit, und bei diesem deinem hochheiligen Leib: Ich will den katholischen Glauben in aller Treue und Reinheit bekennen und mit Gottes Hilfe in der Einheit dieses Glaubens verharren. Denn es steht zweifelsfrei fest, dass in diesem Glauben alles Heil der Christen beschlossen ist. Auf keinen Fall will ich mich von irgendjemand überreden lassen, mich gegen die Einheit gemeinsamen und allgemeinen Kirche zu verfehlen; vielmehr will ich, wie gesagt, dir und dem Wohl deiner Kirche, der von Gott dem Herrn die Vollmacht zu binden und zu lösen übertragen ist (vgl. Mt 16,19), sowie deinem erwähnten Stellvertreter und seinen Nachfolgern in allem Treue, Loyalität und Hilfe zuteil werden lassen.^pFerner will ich, wenn ich erfahre, dass Bischöfe sich entgegen den überlieferten Weisungen der heiligen Väter verhalten, mit diesen keine Gemeinschaft oder Verbindung halten; vielmehr will ich sie an ihrem Treiben hindern, wenn ich es vermag, andernfalls unverzüglich meinem apostolischen Herrn wahrheitsgemäß berichten.^pWenn ich, was ferne sei, versuchen sollte, etwas entgegen diesen meinen Versprechungen zu unternehmen, auf welche Weise, mit welcher Absicht und bei welcher Gelegenheit auch immer, will ich dafür im ewigen Gericht schuldig befunden werden und die Strafe des Hananias und der Saphira (vgl. Apg 5,1–6) erleiden, die euch vorsätzlich um ihr Eigentum betrogen und belogen haben.^pDiese Eidesformel habe ich, der geringe Bischof Bonifatius, eigenhändig unterschrieben und auf deinen hochheiligen Leib niedergelegt. So habe ich den obenstehenden Eid vor Gott als Zeugen und Richter geleistet, und ich verspreche, ihn auch zu halten.",
          "patr_resp1": "Wir sollen alle zur Einheit im Glauben und in der Erkenntnis des Sohnes Gottes gelangen, damit wir Christus in seiner vollendeten Gestalt darstellen.",
          "patr_resp2": "Er, Christus, ist das Haupt.",
          "patr_resp3": "Wir wollen uns, von der Liebe geleitet, an die Wahrheit halten und in allem wachsen, bis wir ihn erreicht haben. ",
          "oration": "Ewiger Gott, bei seiner Bischofsweihe hat der heilige Bonifatius am Grab des heiligen Petrus ein feierliches Bekenntnis zum katholischen Glauben und zur Einheit der Kirche abgelegt. Erhalte dein Volk im gleichen Bekenntnis und sende ihm allzeit würdige Hirten. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Bischofsweihe des hl. Bonifatius",
          "genitiv": "Genitiv",
          "comm_1": "Hirten der Kirche",
          "comm_2": "Comm_2",
          "Ant_Ev": "Jeder Hohepriester wird aus den Menschen ausgewählt^lund für die Menschen eingesetzt zum Dienst vor Gott.^lKeiner nimmt sich eigenmächtig diese Würde,^lsondern er wird von Gott berufen.",
          "oration": "Ewiger Gott, bei seiner Bischofsweihe hat der heilige Bonifatius am Grab des heiligen Petrus ein feierliches Bekenntnis zum katholischen Glauben und zur Einheit der Kirche abgelegt. Erhalte dein Volk im gleichen Bekenntnis und sende ihm allzeit würdige Hirten. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Bischofsweihe des hl. Bonifatius",
          "genitiv": "Genitiv",
          "comm_1": "Hirten der Kirche",
          "comm_2": "Comm_2",
          "Ant_Ev": "Dank sei dir, Christus, guter Hirte!^lDu hast mich zur Herrlichkeit geführt,^lgib auch der Herde, die du mir anvertraut hast,^lAnteil an deiner Gnade auf ewig.",
          "oration": "Ewiger Gott, bei seiner Bischofsweihe hat der heilige Bonifatius am Grab des heiligen Petrus ein feierliches Bekenntnis zum katholischen Glauben und zur Einheit der Kirche abgelegt. Erhalte dein Volk im gleichen Bekenntnis und sende ihm allzeit würdige Hirten. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Charles de Foucauld",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Laudes": {
          "name": "Charles de Foucauld",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        },
        "Vesper": {
          "name": "Charles de Foucauld",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2"
        }
      }
    },
    "2": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": " II. Vatikanisches Konzil (1962–1965)",
          "patr_werk": "Aus dem Dekret über die Hirtenaufgabe der Bischöfe.",
          "patr_text": "^hDie Bischöfe und die Teilkirchen^pDie Diözese ist der Teil des Gottesvolkes, der dem Bischof in Zusammenarbeit mit dem Presbyterium zu leiten anvertraut Wird. Indem sie ihrem Hirten anhängt und von ihm durch das Evangelium und die Eucharistie im Heiligen Geist zusammengeführt wird, bildet sie eine Teilkirche, in der die eine, heilige, katholische und apostolische Kirche Christi wahrhaft wirkt und gegenwärtig wird.^pDie einzelnen Bischöfe, denen die Sorge für eine Teilkirche anvertraut ist, leiten diese unter der Autorität des Papstes als deren eigentliche, ordentliche und unmittelbare Hirten im Namen des Herrn, indem sie ihre Aufgabe zu lehren, zu heiligen und zu leiten an ihr ausüben.^pIhrer apostolischen Aufgabe sollen sich die Bischöfe zuwenden als Zeugen Christi vor allen Menschen. Sie sollen sich nicht bloß um die kümmern, die schon dem obersten Hirten nachfolgen, sondern sich mit ganzem Herzen auch jenen widmen, die irgendwie vom Weg der Wahrheit abgewichen sind oder die Frohbotschaft Christi und sein heilbringendes Erbarmen nicht kennen, bis schließlich alle „in lauter Güte, Gerechtigkeit und Wahrheit“ (Eph 5,9) wandeln.^pEs haben zwar alle Priester, die Diözesan- wie die Ordensgeistlichen, mit dem Bischof an dem einen Priestertum Christi und dessen Ausübung Anteil und werden so zu umsichtigen Mitarbeitern des Bischofsstandes bestellt. In der Ausübung der Seelsorge jedoch nehmen die Diözesanpriester den ersten Platz ein. Sie sind ja einer Teilkirche inkardiniert oder zugewiesen und sollen sich ihrem Dienst ganz widmen, um einen Teil der Herde des Herrn zu weiden. Daher bilden sie ein einziges Presbyterium und eine einzige Familie, deren Vater der Bischof ist.",
          "patr_resp1": "Komm, du guter und treuer Knecht,^ldu bist im Kleinen ein treuer Verwalter gewesen, ^ldarum will ich dir ein Großes übertragen.",
          "patr_resp2": "Komm, nimm teil an der Freude deines Herrn.",
          "patr_resp3": "Herr, fünf Talente hast du mir gegeben;^lsiehe, ich habe noch fünf dazugewonnen.",
          "oration": "Gott, du Licht unseres Glaubens, du hast den heiligen Bischof Luzius berufen, der Kirche von Chur durch Wort und Beispiel zu dienen. Seine Fürsprache helfe uns, den Glauben zu bewahren, den er in seiner Predigt gelehrt, und den Weg zu gehen, den er uns durch sein Leben gewiesen hat. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Licht unseres Glaubens, du hast den heiligen Bischof Luzius berufen, der Kirche von Chur durch Wort und Beispiel zu dienen. Seine Fürsprache helfe uns, den Glauben zu bewahren, den er in seiner Predigt gelehrt, und den Weg zu gehen, den er uns durch sein Leben gewiesen hat. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Licht unseres Glaubens, du hast den heiligen Bischof Luzius berufen, der Kirche von Chur durch Wort und Beispiel zu dienen. Seine Fürsprache helfe uns, den Glauben zu bewahren, den er in seiner Predigt gelehrt, und den Weg zu gehen, den er uns durch sein Leben gewiesen hat. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "4": {
      "n1": {
        "name": "Barbara",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Johannes von Damaskus († um 750)",
          "patr_werk": "Aus der Lobrede auf die heilige Barbara.",
          "patr_text": "^hDas göttliche Feuer der heilbringenden Botschaft^pNach seiner Auferstehung schickte der Herr sogleich die heiligen Apostel bis an die Grenzen des ganzen Erdenrunds. Sie sollten den Menschen die heilbringende Botschaft verkünden und sie zu ihrem Urheber zurückführen. Durch das strahlende Licht des Geistes sollten sie das Dunkel der Gottlosigkeit vertreiben, den Irrtum ausrotten und die Wahrheit lehren.^pWenn das Feuer einen großen und mächtigen Holzstoß erfasst, schießt es rasch zu einer hohen Flamme empor und verzehrt ein Holzstück nach dem anderen; es kann auch die Helle seines Lichtes nicht in einer Ecke verbergen, sondern lässt sie auch für den Entferntesten aufstrahlen. So ist es auch mit jenem göttlichen Feuer. Um es auf die Erde zu werfen, stieg der Herr über die Erde empor. Dieses Feuer dringt durch die Apostel und ihre Nachfolger in die Herzen der Menschen ein, es nimmt alle schlechte und irdische Gesinnung hinweg und ertötet sie.^pJene, die willig und belehrbar waren und aufgeschlossen für die Erneuerung, die auf Christus warteten, ihren Schöpfer und ihren Erlöser aus der Gefangenschaft, die befreite und reinigte das Feuer des Geistes und machte sie zu göttlichen, lichtvollen und strahlenden Menschen.^pAuch Barbara empfing das helle Licht des Glaubens, stellte der Finsternis das Licht gegenüber und erkannte, wie groß, wie sehr die Kenntnis Gottes den Irrtum und die Dunkelheit der Götzen überragte. Wie ein guter und fruchtbarer Ackerboden nahm sie den himmlischen Samen auf und brachte dreißigfache, sechzigfache und hundertfache Frucht.",
          "patr_resp1": "Ich habe den guten Kampf gekämpft, den Lauf vollendet, die Treue gehalten.",
          "patr_resp2": "Schon jetzt liegt für mich der Kranz der Gerechtigkeit bereit.",
          "patr_resp3": "Ich sehe alles als Verlust an, weil die Erkenntnis Christi Jesu, meines Herrn, alles übertrifft. Christus will ich erkennen und die Gemeinschaft mit seinen Leiden; sein Tod soll mich prägen.",
          "oration": "Allmächtiger Gott, du hast der heiligen Märtyrin Barbara die Kraft gegeben, bis in den Tod dir treu zu bleiben. Im Vertrauen auf ihre Fürsprache bitten wir dich: Steh uns bei in jeder Not und Gefahr und stärke uns in der Todesstunde mit dem Leib und Blut deines Sohnes, unseres Herrn Jesus Christus, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Laudes": {
          "name": "Barbara",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, du hast der heiligen Märtyrin Barbara die Kraft gegeben, bis in den Tod dir treu zu bleiben. Im Vertrauen auf ihre Fürsprache bitten wir dich: Steh uns bei in jeder Not und Gefahr und stärke uns in der Todesstunde mit dem Leib und Blut deines Sohnes, unseres Herrn Jesus Christus, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Vesper": {
          "name": "Barbara",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, du hast der heiligen Märtyrin Barbara die Kraft gegeben, bis in den Tod dir treu zu bleiben. Im Vertrauen auf ihre Fürsprache bitten wir dich: Steh uns bei in jeder Not und Gefahr und stärke uns in der Todesstunde mit dem Leib und Blut deines Sohnes, unseres Herrn Jesus Christus, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "n2": {
        "name": "Johannes von Damaskus",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Johannes von Damaskus († um 750)",
          "patr_werk": "Aus der Erklärung des Glaubens.",
          "patr_text": "^hVon Gott berufen und geführt^pHerr, du hast mich zum Sohn meines Vaters gemacht und mich im Mutterleib geformt. Du hast mich als nackten Knaben das Licht erblicken lassen, weil die Gesetze unserer Natur stets deinen Geboten zu Willen sind.^pDurch den Segen des Heiligen Geistes hast du meine Neuschöpfung und mein eigentliches Dasein vorbereitet, nicht aus dem Willen des Mannes oder dem Begehren des Fleisches, sondern aus deiner unaussprechlichen Gnade (vgl. Joh 1,13). Du hast meine Geburt auf eine Weise bereitet, die über die Naturgesetze hinausragt. Als du mich ans Licht der Welt brachtest, nahmst du mich als Sohn an und reihtest mich ein unter die Kinder deiner heiligen und makellosen Kirche (vgl. Eph 5,27). Du hast mich mit geistlicher Milch genährt, mit der Milch deiner göttlichen Worte. Du hast mich gestärkt durch die feste Speise des Leibes Christi, unseres Gottes, deines heiligen Eingeborenen. Du hast mich gestärkt mit dem heiligen Kelch (vgl. Ps 23,5 Vg.), mit seinem lebenspendenden Blut, das er für das Heil der ganzen Welt vergossen hat.^pHerr, du hast uns geliebt und deinen geliebten einzigen Sohn für unsre Erlösung hingegeben, und er hat die Aufgabe freiwillig und ohne Widerstand auf sich genommen. Ja, er hat sich zur Verfügung gestellt wie ein unschuldiges Lamm, das fürs Opfer bestimmt ist. Da er Gott war, wurde er Mensch und unterwarf sich mit seinem göttlichen Willen und war dir, Gott, seinem Vater, „gehorsam bis zum Tod, bis zum Tod am Kreuz“ (Phil 2,8).^pSo hast du dich erniedrigt, Christus, mein Gott, um mich, das verirrte Schaf, auf deine Schultern zu nehmen (vgl. Lk 15,5), mich zu weiden auf grüner Au und mich vom Wasser der rechten Lehre trinken zu lassen (vgl. Ps 23,3) durch deine Hirten, die du selbst ernährt hast und die nun die von Gott erwählte edle Herde weiden.^pHerr, du hast mich jetzt durch den Bischof berufen, deinen Kindern zu dienen. Warum du das in deiner Vorsehung getan hast, weiß ich nicht. Du allein weißt es.^pHerr, erleichtere die schwere Last meiner Sünden, mit denen ich schwer gefehlt habe. Reinige mir Geist und Herz. Führe mich auf dem rechten Weg; geh mir Voraus als leuchtende Lampe. Öffne mir den Mund und schenke mir die Gabe des Wertes, Verleihe. kraft der feurigen Zunge deines Geistes, meiner Zunge, dass sie klar und deutlich rede von dir, dessen Augen mich allezeit anschauen.^pSei mir Hirte, Herr, und hilf mir Hirt sein, damit mein Herz sich weder zur Rechten noch zur Linken ablenken lässt. Dein guter Geist führe mich den rechten Weg. Meine Taten sollen nach deinem Willen geschehen, und das bis zuletzt! Du aber, du höchste, edle, vollkommenste Reinheit, du heilige Gemeinde der Kirche, die Gottes Beistand erwartet, du, in der Gott ruht, nimm die Lehre des Glaubens von mir entgegen; die Lehre, gefeit gegen den Irrtum, die Lehre, in der die Kirche Kraft gewinnt, die Lehre nach der Überlieferung der Väter.^p",
          "patr_resp1": "Das Gesetz der Wahrheit ist in seinem Mund, und seine Lippen kennen kein Unrecht.",
          "patr_resp2": "Er wandelt mit mir in Frieden und Redlichkeit.",
          "patr_resp3": "Stets wird meine Hand ihn halten und mein Arm ihn stärken.",
          "oration": "Herr und Gott, du hast dem heiligen Johannes von Damaskus die Fähigkeit geschenkt, den rechten Glauben überzeugend zu verkünden. Hilf uns auf seine Fürsprache, aus diesem Glauben Licht und Kraft zu schöpfen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Johannes von Damaskus",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr und Gott, du hast dem heiligen Johannes von Damaskus die Fähigkeit geschenkt, den rechten Glauben überzeugend zu verkünden. Hilf uns auf seine Fürsprache, aus diesem Glauben Licht und Kraft zu schöpfen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Johannes von Damaskus",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr und Gott, du hast dem heiligen Johannes von Damaskus die Fähigkeit geschenkt, den rechten Glauben überzeugend zu verkünden. Hilf uns auf seine Fürsprache, aus diesem Glauben Licht und Kraft zu schöpfen. Darum bitten wir durch Jesus Christus."
        }
      },
      "n3": {
        "name": "Adolph Kolping",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, unser Vater, du hast den seligen Adolph Kolping vom Handwerker zum Priester berufen, um durch ihn jungen Menschen in ihrer religiösen und sozialen Not zu helfen. Auf seine Fürsprache gib uns Einsicht in die Nöte unserer Zeit und schenke uns Kraft, sie zu überwinden. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Adolph Kolping",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, unser Vater, du hast den seligen Adolph Kolping vom Handwerker zum Priester berufen, um durch ihn jungen Menschen in ihrer religiösen und sozialen Not zu helfen. Auf seine Fürsprache gib uns Einsicht in die Nöte unserer Zeit und schenke uns Kraft, sie zu überwinden. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Adolph Kolping",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, unser Vater, du hast den seligen Adolph Kolping vom Handwerker zum Priester berufen, um durch ihn jungen Menschen in ihrer religiösen und sozialen Not zu helfen. Auf seine Fürsprache gib uns Einsicht in die Nöte unserer Zeit und schenke uns Kraft, sie zu überwinden. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "5": {
      "n1": {
        "name": "Anno",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Augustinus († 430)",
          "patr_werk": "Aus den Predigten über das Johannesevangelium.",
          "patr_text": "^hDas Leben - ein Streit^pWenn wir den irdischen Weg zurückgelegt haben und in das Vaterland gekommen sind, wer wird sich dann mehr freuen als wir, wer wird seliger sein als wir? Weil es ja nichts Friedlicheres geben wird; denn nichts wird sich mehr gegen den Menschen auflehnen.^pJetzt aber, Brüder, leben wir nur schwer ohne Streit. Zur Eintracht sind wir zwar berufen, wir sollen Frieden halten untereinander; danach sollen wir streben und mit allen Kräften darauf hinarbeiten, dass wir einst zum vollendeten Frieden kommen; jetzt aber streiten wir häufig mit denen, für die wir sorgen wollen.^pDa verläuft sich einer, du willst ihn auf den rechten Weg führen; er aber setzt dir Widerstand entgegen, und du streitest. Du weisest auch deinen dir nahestehenden Bruder zurecht, er weilt bei dir im Hause, sucht aber verkehrte Wege; du bist in Sorge, wie du ihn besserst, damit du über ihn dem Herrn gute Rechenschaft ablegen kannst. Wie viele unvermeidliche Streitigkeiten auf allen Seiten!^pSehr häufig sagt ein Mensch im Überdruss bei sich selbst: Warum soll ich die Widersacher ertragen, die Gutes mit Bösem vergelten? Ich möchte ihnen helfen, sie aber wollen zugrunde gehen. Ich verzehre mein Leben mit Streiten, ich habe keinen Frieden. Ich mache mir zudem noch jene zu Feinden, die ich zu Freunden haben müsste, wenn sie nur auf die wohlwollende Gesinnung ihres Helfers Rücksicht nehmen würden. Warum soll ich das alles erleiden? Ich will mich auf mich zurückziehen, bei mir selber Einkehr halten und meinen Gott anrufen.^pZiehst du dich aber auf dich selbst zurück, findest du auch da Streit. Was für einen Streit, sagst du, finde ich da! Das Begehren des Fleisches richtet sich gegen den Geist, das Begehren des Geistes aber gegen das Fleisch (Gal 5,17). Siehe, du selbst bist es. siehe, du bist allein, siehe, du bist bei dir selbst eingekehrt, siehe, du hast es mit keinem anderen zu tun; aber du siehst ein anderes Gesetz in deinen Gliedern, das mit dem Gesetz deiner Vernunft im Streit liegt und dich gefangen hält im Gesetz der Sünde, von dem deine Glieder beherrscht werden (Röm 7,23).^pRufe also aus deinem inneren Streit zu Gott, damit er dir Frieden gibt: „Ich unglücklicher Mensch! Wer wird mich aus diesem dem Tod verfallenen Leib erretten? Die Gnade Gottes durch Jesus Christus, unsern Herrn!“(Röm 7,24) Denn er sagt: „Wer mir nachfolgt. wird nicht in der Finsternis umhergehen, sondern wird das Licht des Lebens haben“ (Joh 8,12). Wenn der ganze Streit zu Ende ist, wird die Unsterblichkeit folgen, denn der letzte Feind, der entmachtet wird, ist der Tod (1 Kor 15,26). Was für ein Friede wird dann sein! Dieses Vergängliche muss sich mit Unvergänglichkeit bekleiden und dieses Sterbliche mit Unsterblichkeit (1 Kor 15,53). Damit wir dorthin kommen, lasst uns, weil das Gesagte dann Wirklichkeit sein wird, jetzt voll Hoffnung dem nachfolgen, der gesagt hat: „Ich bin das Licht der Welt.“ (Joh 8,12)^l",
          "patr_resp1": "Ihr seid nicht vom Fleisch, sondern vom Geist bestimmt.",
          "patr_resp2": "Denn der Geist Gottes wohnt in euch.",
          "patr_resp3": "Dank sei Gott durch Jesus Christus, unsern Herrn.",
          "oration": "Allmächtiger Gott, erhöre unser Gebet am Gedenktag des heiligen Bischofs Anno, der allen, für die er Verantwortung trug, ein Helfer und ein leuchtendes Vorbild war. Gib, dass auch wir seine Fürsprache und seine Hilfe erfahren. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Anno",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, erhöre unser Gebet am Gedenktag des heiligen Bischofs Anno, der allen, für die er Verantwortung trug, ein Helfer und ein leuchtendes Vorbild war. Gib, dass auch wir seine Fürsprache und seine Hilfe erfahren. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Anno",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Allmächtiger Gott, erhöre unser Gebet am Gedenktag des heiligen Bischofs Anno, der allen, für die er Verantwortung trug, ein Helfer und ein leuchtendes Vorbild war. Gib, dass auch wir seine Fürsprache und seine Hilfe erfahren. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Sola",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Hirten der Kirche",
          "comm_2": "Comm_2",
          "patr_autor": "Ermenrich von Ellwangen († 874)",
          "patr_werk": "Aus der Lebensbeschreibung des heiligen Sola.",
          "patr_text": "^hLiebe zur Einsamkeit für Gott^pDer heilige Sola, vom Volk der Angeln, der in seiner Frömmigkeit und in all seinen Werken fast den Aposteln glich, folgte zur Zeit des Herrschers Pipin seinem Lehrmeister, dem heiligen Erzbischof Bonifatius, und kam wie der strahlende Glanz der Sonne hier in unser Land. Von ihm wurde er zum Priester und Mönch geweiht und begann einen heiligmäßigen Lebenswandel. Unter seinen Gefährten leuchtete er wie eine edle Knospe unter Blumen, freilich im Verborgenen.^pDie anderen begaben sich in alle Richtungen, um neue Stämme für Gott zu gewinnen; er trachtete mit um so größerem Eifer danach, in allem seinem Lehrer Bonifatius ähnlich zu werden. Ich glaube, dass er dabei an das Wort des Herrn dachte, dass der ganz vollendet ist, der wie sein Meister ist (vgl. Lk 6,40). Nicht anders als der heilige Evangelist Johannes, der an der Brust unseres Herrn Jesus Christus ruhte und von der göttlichen Weisheit mehr als die übrigen in sich aufnahm, hat auch er in seiner besonderen Anhänglichkeit an seinen Meister Belehrung zu jeglicher geistlichen Auferbauung erhalten. Ihn verlangte mehr nach der Einsamkeit als nach irgendwelchen Neuigkeiten aus einer schon vergehenden Welt oder kurzlebigen Ehren. Er hatte nämlich das Seherwort des Propheten im Sinn: „Weit fort möchte ich fliehen“ aus der Welt „und in der Einsamkeit wohnen“ (Ps 55,8). Also erhob er die Schwingen der Tugenden, flog gleich einer „arglosen Taube“ (vgl. Mt 10,16) davon und ruhte mit seinem Leib in jener Abgeschiedenheit, die er sich selber erwählt hatte, mit Geist und Seele aber beständig im Herrn. So suchte er im Bestreben, mit Lobliedern und Gebeten allein für den Herrn dazusein, die Einöde auf und liebte die Einsamkeit.^pWelche Zierde bedeutet (Sola) für die Gemeinschaft der Männer um den heiligen Bonifatius! Während die Bischöfe und Priester samt den übrigen Klerikern aus seinen Reihen als Leuchten die Fülle ihres Lichtes in die ganze Welt ausstrahlen ließen, duldete Gott in seiner Güte nicht, dass die Einsiedler unter ihnen fehlten. Die Taten von diesen allen zu beschreiben geht nicht nur über meine Kräfte, hier versagt auch die Reihe fast aller wortgewaltigen Lehrer. Sie bemühten sich nämlich mehr, im verborgenen Herzenskämmerlein Gott zu gefallen, als dass sie ihre Leistungen äußerlich und öffentlich hätten zur Schau stellen wollen; und doch wird aus einer solchen Frucht klar, aus welcher Wurzel die Zweige hervorgegangen sind.",
          "patr_resp1": "Geh in deine Kammer, wenn du betest, und schließ die Tür zu. ",
          "patr_resp2": "Dein Vater, der auch das Verborgene sieht, wird es dir vergelten.",
          "patr_resp3": "Hütet euch, eure Gerechtigkeit vor den Menschen zur Schau zu stellen.",
          "oration": "Gütiger Gott, ein großes Verlangen nach dir führte den heiligen Sola in die Einsamkeit und Stille. Hilf uns, in dem wechselnden Vielerlei dieser Welt dich mit ganzem Herzen zu suchen und in dir Ruhe zu finden. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Sola",
          "genitiv": "Genitiv",
          "comm_1": "Hirten der Kirche",
          "comm_2": "Comm_2",
          "oration": "Gütiger Gott, ein großes Verlangen nach dir führte den heiligen Sola in die Einsamkeit und Stille. Hilf uns, in dem wechselnden Vielerlei dieser Welt dich mit ganzem Herzen zu suchen und in dir Ruhe zu finden. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Sola",
          "genitiv": "Genitiv",
          "comm_1": "Hirten der Kirche",
          "comm_2": "Comm_2",
          "oration": "Gütiger Gott, ein großes Verlangen nach dir führte den heiligen Sola in die Einsamkeit und Stille. Hilf uns, in dem wechselnden Vielerlei dieser Welt dich mit ganzem Herzen zu suchen und in dir Ruhe zu finden. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "6": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Augustinus († 430)",
          "patr_werk": "Aus einer Auslegung zum Johannesevangelium.",
          "patr_text": "^hDie Kraft der Liebe siege über die Last des Todes^pDer Herr fragt etwas, was er schon weiß. Er fragt es nicht nur einmal, sondern noch ein zweites und ein drittes Mal: ob Petrus ihn liebt. Nichts will der Herr so oft von Petrus hören, als dass er von ihm geliebt werde, nichts legt er ihm so oft ans Herz, als dass er seine Schafe weiden soll.^pDer dreimaligen Leugnung entspricht das dreimalige Bekenntnis. Die Zunge soll der Liebe nicht Weniger dienen als der Furcht, und der drohende Tod soll die Stimme nicht stärker bewegen als die Gegenwart des Lebens. Aufgabe der Liebe soll es sein, die Herde des Herrn zu weiden, nachdem die Verleugnung das Zeichen der Furcht war.^pWer glaubt, er könne die Schafe Christi weiden, als seien sie seine eigenen Schafe, der zeigt unwiderleglich, dass er nicht Christus liebt, sondern sich selbst.^pÜber die klagt der Apostel, dass sie „ihren eigenen Vorteil suchen, nicht die Sache Christi Jesu“ (Phil 2,21). Gegen sie richtet sich die Wachsamkeit Christi, wenn er so oft und so eindringlich fragt. Denn was heißt das: „Liebst du mich?“ und: „Weide meine Schafe!“? Es ist, als sagte er: Wenn du mich liebst, dann denke nicht daran, dich selbst zu weiden, sondern meine Schafe; sie zu weiden als meine Schafe, nicht als die deinigen; meine Ehre mit ihnen zu suchen, nicht die deine, mein Eigentum, nicht deines, meinen Gewinn, nicht deinen. Gehöre nicht zu der Art Menschen, wie es sie geben wird, wenn die gefährliche Endzeit beginnt, zu denen, die sich selbst lieben, und was sonst noch mit diesem „Anfang der Wehen“ zusammenhängt (vgl. Mk 13,8).^pDie Christi Schafe weiden, sollen sich also nicht selbst lieben. Sie sollen die Schafe nicht weiden, als gehörten sie ihnen, sondern sie sollen sie weiden als Schafe Christi.^pVor allem müssen die Hirten der Schafe sich vor dem Fehler hüten, ihren eigenen Vorteil zu suchen, statt die Sache Jesu Christi; sie dürfen Menschen, für die Christus sein Blut vergossen hat, nicht ihrem eigenen Begehren dienstbar machen.^pDie Liebe dessen, der die Schafe Christi weidet, muss so in uns brennen, dass sie sogar die natürliche Todesfurcht überwindet, die uns vor dem Tod zurückschrecken lässt, obwohl wir bei Christus sein möchten (vgl. Phil 1,23). Was immer die Leiden des Todes sein mögen, überwinden muss sie die Kraft der Liebe, die Christus gilt, der unser Leben ist und deswegen für uns den Tod ertrug.^pDenn wenn das Leiden des Todes nicht wäre oder wenn es klein wäre, dann wäre der Tod der Märtyrer nicht so groß. Aber wenn der Gute Hirt, der sein Leben für die Schafe hingegeben hat (vgl. Joh 10,11), aus diesen Schafen so viele zu Zeugen für seine Person gemacht hat, wieviel mehr müssen jene bis zum Tod für die Wahrheit streiten und bis aufs Blut gegen die Sünde Widerstand leisten (vgl. Hebr 12,4), denen er die Schafe zum Weiden, das heißt zum Lehren und Leiten, anvertraut hat.^pChristus hat das Beispiel des Leidens gegeben – wer sähe da nicht, dass gerade die Hirten dem Hirten nachfolgen und anhangen müssen, da doch so viele Schafe dem Vorbild gefolgt sind? Müssen nicht auch die Hirten unter dem einen Hirten der einen Herde selbst Schafe sein? Denn alle macht er zu seinen Schafen, für die er gelitten hat, da auch er selbst ein Lamm geworden ist, um für alle leiden zu können.",
          "patr_resp1": "Der Herr hat ihn vor Königen verherrlicht und legte ihm vor dem Volk das Gesetz in die ",
          "patr_resp2": "Er zeigte ihm seine Herrlichkeit.",
          "patr_resp3": "Der Herr hat ihn zu seinem Knecht erwählt, Israel, sein Erbe, zu regieren",
          "oration": "Gott, du Spender alles Guten, hilf uns auf die Fürsprache des heiligen Nikolaus in aller Not und steh uns bei in jeder Gefahr. Gib uns ein großmütiges Herz, damit wir anderen schenken, was wir empfangen, und den Weg des Heiles ungehindert gehen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Spender alles Guten, hilf uns auf die Fürsprache des heiligen Nikolaus in aller Not und steh uns bei in jeder Gefahr. Gib uns ein großmütiges Herz, damit wir anderen schenken, was wir empfangen, und den Weg des Heiles ungehindert gehen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Spender alles Guten, hilf uns auf die Fürsprache des heiligen Nikolaus in aller Not und steh uns bei in jeder Gefahr. Gib uns ein großmütiges Herz, damit wir anderen schenken, was wir empfangen, und den Weg des Heiles ungehindert gehen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "9": {
      "n1": {
        "name": "Liborius Wagner",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Märt",
          "comm_2": "Hirten",
          "patr_autor": "Paul Vl. († 1978)",
          "patr_werk": "Aus der Ansprache bei der Seligsprechung von Liborius Wagner.",
          "patr_text": "^hWas ist ein Märtyrer?^pEin Blutzeuge, ein neuer Märtyrer, wird heute von der Kirche bestätigt und den Gläubigen zur Verehrung vorgestellt. Der erste und stärkste Eindruck, den eine solche Kunde in unseren Herzen hervorruft, ist das Erstaunen. Dieses erwächst nicht allein aus diesem Augenblick, da sich die Zustimmung der ganzen Kirche vollzieht, auch nicht aus dem plötzlichen, unaussprechlichen Glanz dieses neuen Sterns, der vor unsern Augen am endzeitlichen Firmament des himmlischen Jerusalem aufflammt, sondern aus der ganz nüchternen Überlegung, was denn ein Märtyrer eigentlich ist. Das Wort gewinnt in diesem Augenblick seine ganze, wunderbare Bedeutung.^pWas ist ein Märtyrer? Welches ist in der authentischen Sprache der Kirche die Bedeutung dieses allzuoft verzerrten und missbrauchten Begriffs? Ein Märtyrer ist ein Gefolgsmann Christi, der für ihn Zeugnis ablegt mit seinem eigenen Blut. Er bekennt Christus mit dem blutigen Opfer des eigenen Lebens. Er verkündet seinen Glauben, indem er für ihn stirbt. Er erweist die Festigkeit seiner Überzeugung mit dem stärksten Beweis, dessen ein Mensch fähig ist. Und nicht nur das, der Märtyrer erbringt einen echten Beweis für die religiöse Wahrheit dieser Überzeugung; denn er hätte von sich aus nicht genügend Kraft, um freiwillig, ohne der Gewalt Widerstand entgegenzusetzen, das grauenvolle Martyrium zu erdulden; vielmehr tritt die Kraft des Heiligen Geistes in seine Schwachheit ein und verwandelt sie völlig in heldenhafte Stärke (vgl. Mt 10,19f). Der Märtyrer verkündet mit einer erstaunlichen Überzeugungskraft die Existenz eines Wertes, nämlich des Glaubens, der höher steht als das Leben, und so beweist er, dass der Glaube selbst das wahre Leben ist.^pWir sind an Nachrichten von blutigen Szenen gewöhnt und an Ereignisse, in denen Gewalttätigkeit und Bosheit sich auf dramatische und eindrucksstarke Weise manifestieren und die uns zutiefst erschüttern. Doch wenn es sich bei diesen Ereignissen um eine Person handelt, die wir Märtyrer nennen, so müssen wir zwei Besonderheiten hervorheben, die, ohne den Abscheu vor der Grausamkeit der Tat abzuschwächen, ihm ein Erstaunen hinzufügen, das schon zur Bewunderung und zur religiösen Verehrung wird. Die eine dieser Besonderheiten ist, dass der Angegriffene keinen Widerstand leistet, vielmehr dem heftigsten Angriff mit einzigartiger Sanftmut begegnet; die andere Besonderheit besteht darin, dass der Märtyrer sein Leiden, vom Geist getrieben, frei bejaht; diese Bejahung, die ihren Ausdruck in der Hingabe von Blut und Leben findet, verleiht dem furchtbaren Geschehen den Charakter und den Wert eines Opfers. Der Gemarterte nimmt die Gestalt des Opferlammes an; und sofort tritt vor unser geistiges Auge das Symbolbild vom „Lamm Gottes“; es verweist uns auf Christus selbst und ruft uns in Erinnerung, dass der Märtyrer gleichsam eins ist mit dem gekreuzigten Gottessohn. Und so geschieht, was wir beim Gedächtnis des qualvollen Todes von Liborius Wagner erleben: Der Schmerz und die Entrüstung über seine unmenschliche Folterung werden überboten durch die Betrachtung seiner Standhaftigkeit, Demut und Güte. Darum überkommt uns, wie gesagt, ein Gefühl des Erstaunens, und die Worte des hl. Augustinus kommen uns wieder in den Sinn: „In den Märtyrern wird Christus selbst zum Zeugen“; und Märtyrer ist jemand nicht so sehr wegen der Marter, die ihm angetan wird, als vielmehr wegen des Grundes, aus dem er sie erleidet: „Mártyrem non facit pœna, sed causa.“^pLassen wir also in dieser Stunde die Bewunderung in unsere Herzen strömen und mit der Bewunderung die Freude, welche der Sieg des Martyriums mit sich bringt. „Das ist der Sieg, der die Welt besiegt hat: unser Glaube“ (1 Joh 5,4).",
          "patr_resp1": "Das Lamm in der Mitte vor dem Thron wird sie weiden und zu den Quellen führen, aus denen das Wasser des Lebens strömt.",
          "patr_resp2": "Und Gott wird alle Tränen von ihren Augen abwischen.",
          "patr_resp3": "Das sind die, die aus der großen Bedrängnis kommen; sie haben ihre Gewänder gewaschen und im Blut des Lammes weiß gemacht.",
          "oration": "Gott, du Vater aller Gläubigen, in deinem Dienst hat der Märtyrerpriester Liborius für die Wiedervereinigung der getrennten Christen gelebt und gelitten. Gib auch uns Ausdauer und Geduld, damit wir nicht müde werden, für die Einheit der Kirche zu wirken. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Liborius Wagner",
          "genitiv": "Genitiv",
          "comm_1": "Märt",
          "comm_2": "Hirten",
          "Ant_Ev": "Des alten Glaubens neuer Zeuge,^lward Liborius in seinem Leiden^lden Märtyrern der frühen Kirche gleich.^lSo sollte Gott in seinem treuen Knecht verherrlicht werden.",
          "oration": "Gott, du Vater aller Gläubigen, in deinem Dienst hat der Märtyrerpriester Liborius für die Wiedervereinigung der getrennten Christen gelebt und gelitten. Gib auch uns Ausdauer und Geduld, damit wir nicht müde werden, für die Einheit der Kirche zu wirken. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Liborius Wagner",
          "genitiv": "Genitiv",
          "comm_1": "Märt",
          "comm_2": "Hirten",
          "Ant_Ev": "Allen Folterungen,^ldie je Tyrannen in ihrer Wut erdachten,^lwurde Liborius unterworfen.^lEr ertrug sie in der ungebrochenen Kraft^ldes Zeugen Christi.",
          "oration": "Gott, du Vater aller Gläubigen, in deinem Dienst hat der Märtyrerpriester Liborius für die Wiedervereinigung der getrennten Christen gelebt und gelitten. Gib auch uns Ausdauer und Geduld, damit wir nicht müde werden, für die Einheit der Kirche zu wirken. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Juan Diego",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du hast durch den heiligen Johannes Didacus die Liebe der heiligen Jungfrau Maria zu deinem Volk offenbar gemacht. Auf seine Fürsprache gewähre uns, dass wir den Weisungen unserer Mutter folgen, die sie in Guadalupe gegeben hat, und dass wir stets fähig sind, deinen Willen zu erfüllen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Juan Diego",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du hast durch den heiligen Johannes Didacus die Liebe der heiligen Jungfrau Maria zu deinem Volk offenbar gemacht. Auf seine Fürsprache gewähre uns, dass wir den Weisungen unserer Mutter folgen, die sie in Guadalupe gegeben hat, und dass wir stets fähig sind, deinen Willen zu erfüllen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Juan Diego",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du hast durch den heiligen Johannes Didacus die Liebe der heiligen Jungfrau Maria zu deinem Volk offenbar gemacht. Auf seine Fürsprache gewähre uns, dass wir den Weisungen unserer Mutter folgen, die sie in Guadalupe gegeben hat, und dass wir stets fähig sind, deinen Willen zu erfüllen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "11": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Augustinus († 430)",
          "patr_werk": "Aus dem Buch gegen Faustus.",
          "patr_text": "^hWir verehren die Märtyrer aus Liebe und im Bewusstsein der Gemeinschaft^pDas christliche Volk feiert die Gedächtnistage der Märtyrer mit Gottesdiensten, um zur Nachfolge anzueifern und um Anteil an ihrer Heiligkeit und den Beistand ihrer Gebete zu gewinnen. Aber keinem der Märtyrer stellen wir einen Altar auf, nicht einmal bei ihren Gedächtnisfeiern.^pWelcher Bischof hätte vor dem Altar an den Gräbern der Märtyrer je gesagt: Wir opfern dir, Petrus und Paulus oder Cyprian? Vielmehr: was geopfert wird, bringt man Gott dar, der die Märtyrer gekrönt hat, und man bringt es dar an den Gedächtnisstätten derer, die er gekrönt hat. Die heiligen Orte sollen selbst eine Mahnung sein, durch die das Gemüt sich erhebt und die Liebe sich steigert zu ihnen, denen wir nacheifern können, und zu ihm, durch dessen Gnade wir es vermögen.^pWir verehren also die Märtyrer aus Liebe und im Bewusstsein der Gemeinschaft mit ihnen, wie wir auch heilige, gottverbundene Menschen schon bei Lebzeiten ehren, wenn wir das Gefühl haben, dass sie zum Leiden für die Wahrheit des Evangeliums bereit sind. Doch verehren wir sie hingebender und mit dem Gefühl größerer Gewissheit, nachdem sie alle Kämpfe bestanden haben. So loben und preisen wir zuversichtlicher die Sieger im seligen Leben, als wenn sie auf Erden noch im Kampf stehen.^pAber mit jenem Kult, den man „Latria“ nennt, mit dem Dienst, den wir ganz allein und eigentlich der Gottheit schulden, verehren wir nur Gott, und wir leiten niemand an, einen anderen als Gott allein so zu verehren.^pZu dieser Art des Gottesdienstes gehört die Darbringung eines Opfers. Deshalb nennt man es „Idolo-Latria“, wenn jemand den Götzen opfert. Mit aller Entschiedenheit lehnen wir es ab, einem Märtyrer, einer heiligen Seele oder einem Engel zu opfern oder gar die Gläubigen dazu anzuleiten. Wer in diesen Irrtum fällt, den rufen wir durch die gesunde Lehre zur Ordnung, um ihn zu bessern oder vor ihm zu warnen.^pWeil die Heiligen Menschen sind, wollen sie selbst nicht, dass man ihnen gibt, was, wie wir wissen, Gott allein gebührt. Das wurde an Paulus und Barnabas deutlich, als die Lykaonier, erregt über die Wunder, den beiden Aposteln wie Göttern opfern wollten. Die beiden zerrissen ihre Kleider, bekannten, dass sie keine Götter waren, redeten ihnen zu und verbaten sich die Opfer (vgl. Apg 14,11–18).",
          "patr_resp1": "Kostbar ist in den Augen des Herrn das Sterben seiner Frommen.",
          "patr_resp2": "Er behütet all ihre Glieder, nicht eines von ihnen wird zerbrochen.",
          "patr_resp3": "In ein Gewand der Freude kleidet sie der Herr.",
          "oration": "Herr und Gott, der heilige Papst Damasus hat den Sieg der Märtyrer gepriesen, er hat sie geliebt und ihr Andenken geehrt. Gib, dass auch wir das Leben und Sterben deiner Blutzeugen ehren, und ermutige uns zu einem Leben aus dem Glauben. Darum bitten wir durch Jesus Christus ."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr und Gott, der heilige Papst Damasus hat den Sieg der Märtyrer gepriesen, er hat sie geliebt und ihr Andenken geehrt. Gib, dass auch wir das Leben und Sterben deiner Blutzeugen ehren, und ermutige uns zu einem Leben aus dem Glauben. Darum bitten wir durch Jesus Christus ."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Herr und Gott, der heilige Papst Damasus hat den Sieg der Märtyrer gepriesen, er hat sie geliebt und ihr Andenken geehrt. Gib, dass auch wir das Leben und Sterben deiner Blutzeugen ehren, und ermutige uns zu einem Leben aus dem Glauben. Darum bitten wir durch Jesus Christus ."
        }
      }
    },
    "13": {
      "n1": {
        "name": "Odilia",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Gregor der Große († 604)",
          "patr_werk": "Aus einer Homilie zu den Evangelien.",
          "patr_text": "^hLasst uns das Licht suchen, das keinen Anfang und kein Ende hat^pJesus sprach zu dem Blinden: „Was soll ich dir tun?“ Der Blinde antwortete: „Rabbuni, ich möchte wieder sehen können“ (Mk 10,51). Wie? Wusste Jesus nicht, was der Blinde wollte, Jesus, der das Augenlicht zu schenken vermag? Jesus weiß, was wir bitten wollen und was er zu erhören gedenkt, aber er will gebeten sein. Er mahnt uns eindringlich zum Gebet, obwohl er euch sagt: „Euer Vater weiß, was ihr braucht, noch ehe ihr ihn bittet“ (Mt 6,8). Darum also verlangt er, dass wir beten, darum will er, dass unser Herz wach sei zum Gebet.^pSo antwortet denn der Blinde sogleich: „Rabbuni, ich möchte wieder sehen können.“ Siehe, der Blinde bittet den Herrn nicht um Gold, sondern um Licht. Nichts ist dem Bittenden wichtig, nur das Licht. Denn könnte der Blinde auch alles Mögliche besitzen, ohne das Licht kann er nicht sehen, was er besitzt. Wir wollen es ihm nachtun. Wir haben es gehört, leiblich und geistig, dass ihm Heil geworden ist.^pLasst uns also nicht falschen Reichtum, nicht irdische Gaben, nicht flüchtige Ehren vom Herrn erbitten, sondern Licht, jenes Licht, das wir nur mit den Engeln zusammen erblicken können, das Licht, das keinen Anfang hat und dem kein Ende gesetzt ist, das Licht, zu dem der Weg des Glaubens führt. Darum hört der zu heilende Blinde alsbald die Antwort: „Geh! Dein Glaube hat dich geheilt“, und es heißt: „Er konnte sehen, und er folgte ihm auf dem Weg“ (Mk 10,52).",
          "patr_resp1": "Der Herr ist mein Licht und mein Heil, vor wem sollte ich mich fürchten?",
          "patr_resp2": "Bei dir ist die Quelle des Lebens, in deinem Licht schauen wir das Licht.",
          "patr_resp3": "Das wahre Licht, das jeden Menschen erleuchtet, kam in die Welt.",
          "oration": "Gott, du wahres Licht, du hast den Blinden und Augenkranken in der heiligen Odilia eine himmlische Patronin gegeben. Öffne uns auf ihre Fürsprache die Augen, damit wir in der geschaffenen Schönheit deine Größe erahnen und dich einst schauen in deinem himmlischen Licht. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Odilia",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du wahres Licht, du hast den Blinden und Augenkranken in der heiligen Odilia eine himmlische Patronin gegeben. Öffne uns auf ihre Fürsprache die Augen, damit wir in der geschaffenen Schönheit deine Größe erahnen und dich einst schauen in deinem himmlischen Licht. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Odilia",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du wahres Licht, du hast den Blinden und Augenkranken in der heiligen Odilia eine himmlische Patronin gegeben. Öffne uns auf ihre Fürsprache die Augen, damit wir in der geschaffenen Schönheit deine Größe erahnen und dich einst schauen in deinem himmlischen Licht. Darum bitten wir durch Jesus Christus."
        }
      },
      "n2": {
        "name": "Luzia",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Ambrosius († 397)",
          "patr_werk": "Aus dem Buch über die Jungfräulichkeit.",
          "patr_text": "^hDie Anmut des Leibes erleuchtest du mit dem Glanz des Geistes^pDem einfachen Volk gehörst du an; aber vor allem: du bist eine aus den Jungfrauen, welche die Anmut des Leibes mit dem Glanz des Geistes erleuchtet; fast bist du mit der Kirche zu vergleichen. Nächtlicherweile sinne in deiner Kammer über Christus nach und erhoffe jeden Augenblick seine Ankunft!^pSo wollte dich Christus, als er nach dir verlangte, so wollte er dich, als er dich erwählte. Er hat versprochen, zu dir zu kommen, er enttäuscht dich nicht. Durch die offene Tür kommt er herein. Umarme ihn also, den du gesucht hast (vgl. Hld 2,1). „Tritt hin zu ihm, und du wirst erstrahlen“ (Ps 34,6 Vg.). Halte ihn fest, bitte ihn, dass er nicht schnell wieder geht, beschwöre ihn, dass er bleibt. Denn das Wort Gottes eilt (vgl. Ps 147,15). Wer hochmütig ist, fasst es nicht; wer gleichgültig, hält es nicht fest. Deine Seele gehe seinem Wort entgegen, hefte dich an die Spur seiner himmlischen Rede; denn er eilt schnell vorüber!^pDenn was sagt jene (Braut)? „Ich suchte ihn, ich fand ihn nicht. Ich rief ihn, er antwortete nicht“ (Hld 5,6). Denk nicht, dass du ihm missfällst, weil du gerufen, gebeten und aufgemacht hast, er aber so schnell wieder wegging. Oft lässt er Prüfung über uns kommen. Was sagte er schließlich, als das Volk ihn bat, nicht wegzugehen? „Ich muss auch den anderen Städten das Wort Gottes verkünden; denn dazu bin ich gesandt worden“ (vgl. Lk 4,43).Wenn es dir auch scheint, er sei weggegangen, geh hinaus und suche wieder nach ihm.^pWer darf dich lehren, Christus festzuhalten, als die Kirche allein? Ja, sie hat es dich schon gelehrt, wenn du verstehst, was du bist: „Kaum war ich an ihnen vorüber, fand ich ihn, den meine Seele liebt. Ich fasste ihn und ließ ihn nicht mehr los“ (Hld 3,4).^pWomit wird Christus also festgehalten? Nicht mit Schlingen des Unrechts. nicht mit Seilen und Stricken, sondern mit Fesseln der Liebe, mit Zügeln des Geistes lässt er sich binden und festhalten durch die Zuneigung des Herzens.^pWenn auch du Christus festhalten willst, such ihn und fürchte keine Pein. Denn häufig lässt er sich besser finden, wenn der Leib gezüchtigt wird, den Verfolgern in die Hände gefallen ist.^p„Kaum war ich an ihnen vorüber“, sagt sie. Denn eine kleine Weile, einen kurzen Augenblick, nachdem du den Verfolgern entronnen bist, ohne den Mächten der Welt unterlegen zu sein, da kommt dir Christus entgegen und lässt nicht länger zu, dass du auf die Probe gestellt wirst. Die Christus so sucht und findet, kann sagen: „Ich fasste ihn, ich ließ ihn nicht mehr los, bis ich ihn in das Haus meiner Mutter brachte, in die Kammer derer, die mich geboren hat“ (Hld 3,4) .Was ist das Haus deiner ;Mutter und ihre Kammer, wenn nicht der innerste und verborgenste Winkel deines Wesens!^pAuf dieses Haus habe acht und reinige sein Innerstes. Wenn es makellos ist, dann wird es sich als geistliches Haus erheben für ein heiliges Priestertum, vom Schlussstein zusammengehalten, und der Heilige Geist wird in ihm wohnen (vgl. 1 Petr 2,5; Eph 8,20).^pDie Christus so sucht, die ihn so beschwört, die verlässt er nicht, ja er besucht sie oft. Denn er ist bei uns bis ans Ende der Welt (vgl. Mt 28,20).",
          "patr_resp1": "Im Kampf hat der Herr ihr Anmut verliehen, denn er hat sie vor Gott und den Menschen verherrlicht. Vor dem Fürst sprach sie Worte der Weisheit.",
          "patr_resp2": "Gott, der Herr des Alls, liebte sie.",
          "patr_resp3": "Das ist die Jungfrau, die Gott in ihrem Herzen eine freundliche Wohnung bereitet hat.",
          "oration": "Herr, unser Gott, wir feiern den Gedenktag der heiligen Jungfrau und Märtyrerin Luzia, die du uns als Fürsprecherin gegeben hast. Gibt, dass wir nach ihrem Beispiel als Kinder des Lichtes leben und einst in der Gemeinschaft der Heiligen den Glanz deiner Herrlichkeit schauen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "name": "Luzia",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Ev": "Ich habe keinem anderen geopfert als dem lebendigen Gott.^lNun, da mir nichts mehr geblieben ist,^lbringe ich mich selbst zum Opfer dar.",
          "oration": "Herr, unser Gott, wir feiern den Gedenktag der heiligen Jungfrau und Märtyrerin Luzia, die du uns als Fürsprecherin gegeben hast. Gibt, dass wir nach ihrem Beispiel als Kinder des Lichtes leben und einst in der Gemeinschaft der Heiligen den Glanz deiner Herrlichkeit schauen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Luzia",
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Ev": "Heilige Luzia, du Braut des Herrn!^lWeil du standhaft bliebst, hast du das Leben gewonnen.^lDen Reichtum dieser Welt hast du verachtet^lund durch dein Blut den Feind besiegt.^lNun strahlt dein Licht inmitten der Engel.",
          "oration": "Herr, unser Gott, wir feiern den Gedenktag der heiligen Jungfrau und Märtyrerin Luzia, die du uns als Fürsprecherin gegeben hast. Gibt, dass wir nach ihrem Beispiel als Kinder des Lichtes leben und einst in der Gemeinschaft der Heiligen den Glanz deiner Herrlichkeit schauen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "23": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Klemens XIII. († 1769)",
          "patr_werk": "Aus einem Brief über die Verdienste des heiligen Johannes von Krakau.",
          "patr_text": "^hGott war ganz und gar der erste in seinem Herzen und in seinem Mund^pUnter den in Lehre und Heiligkeit hervorragenden Männern, die nach dem rechten, von den Gegnern bekämpften Glauben lebten, ihn lehrten und verteidigten, verdient wie wenige Johannes von Krakau erwähnt zu werden. Daran zweifelt niemand, der weiß, wie er an der Universität Krakau eine aus den reinen Quellen geschöpfte Wissenschaft lehrte, und das in einer Zeit, da im Land ringsum Irrlehre und Schisma um sich griffen. Durch Demut, Keuschheit, Barmherzigkeit, körperliche Buße und andere Tugenden eines untadeligen Priesters und unermüdlichen Arbeiters machte er die Ordnung eines heiligen Lebens wahr, wie er sie in der Predigt dem Volk erklärte und für die er die Hörer zu gewinnen suchte.^pSo war er für die Professoren dieser Universität eine besondere Ehre und Zierde. Aber nicht nur das: auch allen anderen, die ein ähnliches Amt innehaben. hinterließ er ein hilfreiches Beispiel, wie sie die Aufgabe eines vollkommenen Lehrers unverdrossen angehen und sich bemühen müssen, zugleich mit den andern Wissenszweigen die Wissenschaft der Heiligen zur Ehre des einen Gottes mit allem Eifer und vollem Einsatz zu lehren.^pMit der Frömmigkeit, in der er die göttlichen Dinge behandelte, war die Demut verbunden. Er, die Leuchte der Wissenschaft, hätte der erste von allen sein können. Aber er achtete sich selbst gering und stellte sich niemals über einen anderen. Ja er wünschte, von allen geschmäht und geringgeachtet zu werden.^pBegleiterin der Demut war eine Schlichtheit des Herzens, wie sie einem Kind Ehre gemacht hätte. Daher gab es in seinem Reden und Tun nichts Hinterhältiges; nichts Falsches war in seinem Herzen verschlossen; was wahr war, das sprach er aus. Wenn er die Wahrheit gesagt hatte, aber fürchtete, den andern beleidigt zu haben, trat er nicht an den Altar, ohne um Verzeihung zu bitten für seinen Irrtum oder den des andern (vgl. Mt 5,23.24).^pWenn er seine Tagesaufgabe erfüllt hatte, ging er von der Universität unmittelbar zur Kirche, Wo er sich vor dem in der Eucharistie verborgenen Christus lange Zeit der Betrachtung und dem Gebet widmete. Überhaupt war Gott der erste in seinem Herzen und in seinem Mund.",
          "patr_resp1": "Brich den Hungernden dein Brot und führe die Armen und Obdachlosen in dein Haus,",
          "patr_resp2": "dann bricht dein Licht auf wie der M^<orgen, und deine Gerechtigkeit geht dir voraus.",
          "patr_resp3": "Wenn du einen Nackten siehst, bekleide ihn. Verachte ihn nicht, er ist ein Mensch wie du.",
          "oration": "Barmherziger Gott, das Beispiel des heiligen Johannes von Krakau helfe uns, immer tiefer einzudringen in die Weisheit der Heiligen: dich über alles lieben und den Menschen Gutes tun. Seine Fürsprache erwirke uns deine Verzeihung. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Daran werden alle erkennen, dass ihr meine Jünger seid:^lwenn ihr einander liebt.",
          "oration": "Barmherziger Gott, das Beispiel des heiligen Johannes von Krakau helfe uns, immer tiefer einzudringen in die Weisheit der Heiligen: dich über alles lieben und den Menschen Gutes tun. Seine Fürsprache erwirke uns deine Verzeihung. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Amen, ich sage euch:^lWas ihr dem Geringsten meiner Brüder getan habt, das habt ihr mir getan.^lKommt, ihr Gesegneten meines Vaters, nehmt das Reich in Besitz,^ldas seit Anfang der Welt für euch bestimmt ist.",
          "oration": "Barmherziger Gott, das Beispiel des heiligen Johannes von Krakau helfe uns, immer tiefer einzudringen in die Weisheit der Heiligen: dich über alles lieben und den Menschen Gutes tun. Seine Fürsprache erwirke uns deine Verzeihung. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "29": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Thomas Becket († 1170)",
          "patr_werk": "Aus seinem Brief an seine Mitbrüder im Bischofsamt.",
          "patr_text": "^hWer an einem Wettkampf teilnimmt, erhält den Siegeskranz nur, wenn er nach den Regeln kämpft^pWir werden Bischöfe und Hohepriester genannt. Wenn wir das wirklich sein wollen und die Bedeutung unseres Namens Verstehen, müssen wir unablässig und voll Eifer den ewigen, von Gott bestellen Hohenpriester betrachten und seinen Spuren folgen. Er hat sich für uns dem Vater am Kreuz dargebracht und sieht von der hohen Warte des Himmels die Taten aller Menschen und ihre Absichten und wird am Ende einem jeden nach seinen Werken vergelten.^pWir haben es übernommen, seine Stelle auf Erden zu vertreten. Wir haben den Ruhm seines Namens, Ehre und Würde erlangt und besitzen in dieser Zeit die Früchte geistlicher Tätigkeit. In der Rangordnung der Kirche sind wir Nachfolger der Apostel und Apostelschüler. Durch unseren Dienst wird das Reich des Todes und der Sünde zerstört. Durch den Glauben und den Fortschritt im Guten wächst das Haus Christi zum heiligen Tempel im Herrn.^pGroß ist die Zahl der Bischöfe, die bei der Weihe Eifer und Tatkraft im Lehr- und Hirtenamt Versprechen, und wir versprechen es täglich wieder mit Worten. Gebe Gott, dass die Treue zum Gelobten durch das Zeugnis der Tat bestätigt wird! Die Ernte ist groß (Mt 3,37). Aber zum Binden der Garben und zum Einbringen in die Scheune sind einer oder wenige nicht genug.^pWer zweifelt daran, dass die römische Kirche das Haupt aller Kirchen und Quell der katholischen Lehre ist! Wer wüsste nicht, dass dem Petrus die Schlüssel des Himmelreiches übergeben wurden (Mt 16,18.19). Erhebt sich nicht der ganze Bau der Kirche auf dem Glauben und auf der Lehre des Petrus, bis wir alle Christus in seiner Vollgestalt entgegengehen in der Einheit des Glaubens und der Erkenntnis des Sohnes Gottes?^pDenkt daran, wie unsere Väter gerettet wurden, wie und unter welchen Bedrängnissen die Kirche wuchs und sich verbreitete, welchen Stürmen das Schiff des Petrus entgangen ist, weil es Christus zum Steuermann hat (vgl. Mk 4,39 par.), wie jene den Kranz erlangten, deren Glaube aus der Not um so heller erstrahlte.^pAuf diesem Weg sind alle Heiligen vorangeschritten, und für immer gilt das Wort: „Wer an einem Wettkampf teilnimmt, erhält den Siegeskranz nur, wenn er nach den Regeln kämpft“ (2 Tim 2,5).",
          "patr_resp1": "Der Herr hat dich mit dem Kranz der Gerechtigkeit bekränzt,",
          "patr_resp2": "das Gewand der Herrlichkeit hat er dir angetan, Gott wohnt in dir, der Heilige Israels.",
          "patr_resp3": "Du hast den guten Kampf gekämpft, den Lauf vollendet. Jetzt liegt für dich der Kranz der Gerechtigkeit bereit.",
          "oration": "Allmächtiger Gott, du hast dem heiligen Thomas Becket Starkmut und Tapferkeit geschenkt, so dass er sein Leben für Recht und Gerechtigkeit hingab. Gib auch uns die Bereitschaft, unser Leben in dieser Welt um Christi Willen zu verlieren, damit wir es wiederfinden im Himmel. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Wer sein Leben liebt, wird es verlieren;^ldoch wer in dieser Welt sein Leben hasst,^lder wird es bewahren für das ewige Leben.",
          "oration": "Allmächtiger Gott, du hast dem heiligen Thomas Becket Starkmut und Tapferkeit geschenkt, so dass er sein Leben für Recht und Gerechtigkeit hingab. Gib auch uns die Bereitschaft, unser Leben in dieser Welt um Christi Willen zu verlieren, damit wir es wiederfinden im Himmel. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Im himmlischen Reich ist die Wohnstatt der Heiligen.^lDort finden sie Ruhe auf ewig.",
          "oration": "Allmächtiger Gott, du hast dem heiligen Thomas Becket Starkmut und Tapferkeit geschenkt, so dass er sein Leben für Recht und Gerechtigkeit hingab. Gib auch uns die Bereitschaft, unser Leben in dieser Welt um Christi Willen zu verlieren, damit wir es wiederfinden im Himmel. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "31": {
      "n1": {
        "name": "",
        "genitiv": "Genitiv",
        "Lesehore": {
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "patr_autor": "Eusebius von Cäsarea († 339)",
          "patr_werk": "Aus der Kirchengeschichte.",
          "patr_text": "^hDer Friede unter Konstantin^pDank sei dem allmächtigen Gott, dem König des Weltalls! Dank sei vor allem aber auch dem Retter und Erlöser unserer Seelen, Jesus Christus! Durch ihn beten wir stets um einen festen und unerschütterlichen Frieden, der gegen Widerwärtigkeiten von außen wie von innen, von der Gesinnung her, gesichert ist.^pNun ist den Kindern Christi überall auf dem Erdkreis ein heller und heiterer Tag aufgegangen, nicht länger von dunklen Wolken getrübt, vielmehr erstrahlend im Glanz himmlischen Lichtes. Auch wer der Gemeinde unseres Glaubens fernstand, brauchte nicht neidisch zu sein, weil er nicht gleichermaßen mit uns genießen durfte; konnte er doch in gewissem Umfang teilhaben und so etwas wie ein Überfließen der Güter erfahren, die Gott uns schenkte. Vor allem aber in uns, die wir alle Hoffnung auf Christus setzen, herrschte eine unfassbare Freude. Eine überirdische Heiterkeit leuchtete vom Gesicht aller. Konnten wir doch sehen, wie all die Stätten, die eine gottlose Tyrannei noch kurz zuvor zerstört hatte, wie aus einem langen und tödlichen Ruin sich wieder erhoben, wie die Gotteshäuser vom Boden zu gewaltiger Höhe emporwuchsen und weit heller erglänzten als vor der Zerstörung.^pEin Schauspiel bot sich uns, wie wir es alle gewünscht und herbeigesehnt hatten: von Stadt zu Stadt das Fest der Weihe und der Konsekration neu erbauter Kirchen.^pBischöfe versammelten sich zu diesen Feiern, Wallfahrer strömten herbei aus weiter Ferne. Liebe und Wohlwollen herrschten zwischen den Völkern, da sie als Glieder des Leibes Christi zu einem Ganzen zusammenwuchsen.^pEs war die Erfüllung einer prophetischen Weissagung, in der die Zukunft in einem geheimnisvollen Bild verkündigt ist: „Die Gebeine rückten zusammen, Bein an Bein“ (Ez 37,7), und anderes mehr geschah uns, was die gleiche Prophetenrede unter der Hülle geheimnisvoller Worte untrüglich verkündet.^pEine Kraft des göttlichen Geistes durchwaltete alle Glieder. Alle waren eines Herzens; es war die gleiche Beschwingtheit des Glaubens, ein Gesang aller, die Gott in Hymnen feierten. Schon schaute man die erhabenen Feiern der Bischöfe, den heiligen Dienst der Priester, die heiligen und ehrwürdigen Handlungen der Kirche. Hier hörte man die Psalmengesänge und die übrigen uns von Gott geschenkten Weisen. Hier erlebte man die Feier der heiligen geheimnisvollen Liturgie. Alle zusammen, Menschen jeden Alters und Geschlechtes, ehrten mit Gebeten und Danksagungen aus ganzem Herzen und aus allen Kräften der Seele Gott, von dem alles Gute kommt.",
          "patr_resp1": "In eurem Herzen herrsche der Friede Christi; dazu seid ihr berufen als Glieder des einen Leibes; seid dankbar.",
          "patr_resp2": "Ihr alle seid eins in Christus.",
          "patr_resp3": "Singt dem Herrn ein neues Lied, sein Lob erschalle in der Gemeinde der Frommen.",
          "oration": "Gott, du Herr der Zeiten, höre auf die Fürsprache des heiligen Papstes Silvester und komme deinem Volk zu Hilfe. Führe es in diesem vergänglichen Leben, damit es einst zum unvergänglichen gelange und bei dir das ewige Glück finde. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "Ant_Komm": "Nicht ihr werdet reden,^lsondern der Geist eures Vaters redet durch euch.",
          "oration": "Gott, du Herr der Zeiten, höre auf die Fürsprache des heiligen Papstes Silvester und komme deinem Volk zu Hilfe. Führe es in diesem vergänglichen Leben, damit es einst zum unvergänglichen gelange und bei dir das ewige Glück finde. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "genitiv": "Genitiv",
          "comm_1": "Comm",
          "comm_2": "Comm_2",
          "oration": "Gott, du Herr der Zeiten, höre auf die Fürsprache des heiligen Papstes Silvester und komme deinem Volk zu Hilfe. Führe es in diesem vergänglichen Leben, damit es einst zum unvergänglichen gelange und bei dir das ewige Glück finde. Darum bitten wir durch Jesus Christus."
        }
      }
    }
  }
};