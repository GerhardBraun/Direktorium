interface Lecture2Entry {
  resp0_0?: string;
  resp0_1?: string;
  les_buch?: string;
  les_stelle?: string;
  les_text?: string;
  resp1_1?: string;
  resp1_2?: string;
  resp1_3?: string;
  patr_autor?: string;
  patr_werk?: string;
  patr_text?: string;
  patr_resp1?: string;
  patr_resp2?: string;
  patr_resp3?: string;
  oration?: string;
  les_buch_alt?: string;
  les_stelle_alt?: string;
  les_text_alt?: string;
  resp1_1_alt?: string;
  resp1_2_alt?: string;
  resp1_3_alt?: string;
  patr_autor_alt?: string;
  patr_werk_alt?: string;
  patr_text_alt?: string;
  patr_resp1_alt?: string;
  patr_resp2_alt?: string;
  patr_resp3_alt?: string;
}

interface Lecture2Data {
  [season: string]: {
    [week: string]: {
      [day: string]: {
        [hour: string]: Lecture2Entry;
      };
    };
  };
}

export const lecture2Data = {
  "a": {
    "1": {
      "0": {
        "Lesehore": {}
      }
    }
  },
  "j": {
    "1": {
      "1": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)"
        }
      },
      "2": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)"
        }
      },
      "3": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)"
        }
      },
      "4": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)"
        }
      },
      "5": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)"
        }
      },
      "6": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)"
        }
      }
    },
    "2": {
      "0": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)"
        }
      },
      "1": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)",
          "resp1_1": "Wir rühmen uns Gottes durch Jesus Christus, unsern Herrn;",
          "resp1_2": "durch ihn haben wir die Versöhnung empfangen.",
          "resp1_3": "Gott hat seine Liebe darin erwiesen, dass Christus für uns gestorben ist, als wir noch Sünder waren. ",
          "patr_autor": "Aus einem Pauluskommentar des 4. Jh. (Ambrosiaster)",
          "patr_werk": "Zum Brief an die Römer.",
          "patr_text": "^hChristus ist für die Gottlosen gestorben^pWarum „ist Christus, als wir noch Sünder waren, auf eine Zeit für die Gottlosen gestorben? Schwerlich wird jemand für einen Gerechten sterben; allenfalls wird er für einen guten Menschen sein Leben wagen.“ {1#Röm 5,6-7} Wenn sich Christus für die Ungläubigen und Feinde auf Zeit dem Tod überlieferte – „auf eine Zeit“ ist er gestorben, insofern er am dritten Tag auferstand –, wieviel eher wird er uns helfen und schützen, nachdem wir zum Glauben an ihn gekommen sind! Denn er ist für uns gestorben, um uns Leben und Herrlichkeit zu erwerben. Wenn er daher für die Feinde gestorben ist, dann muss uns einleuchten, wieviel er den Freunden gewähren wird.^pDie Liebe, die der Erlöser für uns hegt, wollte der Apostel uns verständlich machen mit den Worten: „Schwerlich wird jemand für einen Gerechten sterben.“ Christus ist aber für die Gottlosen gestorben. Wenn also kaum jemand für einen Gerechten stirbt, wie ist es dann möglich, dass jemand für die Gottlosen in den Tod geht? … Wenn jemand das Leben nicht für einen gerechten und guten Menschen wagt, von einem gewissen Erbarmen oder von liebender Anerkennung seiner guten Taten veranlasst, so fehlt bei den Gottlosen der Beweggrund, für sie zu sterben oder auch nur Tränen zu vergießen. Christus aber hat für die gottlosen Taten des Volkes den Tod erlitten, für das Volk, das noch nicht das seine war, wo doch sonst einer einem hartnäckigen Schuldner gegenüber nur zögernd zugibt, eine Verpflichtung zu Treue und Glauben zu haben.",
          "patr_resp1": "Christus ist der Sünden wegen gestorben, er, der Gerechte für die Ungerechten,",
          "patr_resp2": "um euch zu Gott hinzuführen.",
          "patr_resp3": "Der Gute Hirte gab sein Leben für seine Schafe,"
        }
      },
      "2": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)",
          "resp1_1": "Wie die Sünde herrschte und zum Tode führte, so soll auch die Gnade herrschen und zu ewigem Leben führen,",
          "resp1_2": "durch Jesus Christus, unseren Herrn.",
          "resp1_3": "Alle sollen leben, denen die Gabe der Gerechtigkeit zuteil wurde",
          "patr_autor": "Johannes Chrysostomus (†°407)",
          "patr_werk": "Zum Brief an die Römer.",
          "patr_text": "^hGerechtigkeit ist mehr als das Leben, weil sie die Wurzel des Lebens ist^pWo die Gerechtigkeit ist, folgt notwendig auch das Leben und tausenderlei Gutes, während dort, wo die Sünde wirksam ist, der Tod herrscht. ^pDie Gerechtigkeit ist mehr als Leben, weil sie die Wurzel des Lebens ist. dass mehr Gutes kam und dass nicht nur die eine Sünde weggenommen wurde, sondern auch alle übrigen, das sagt der Apostel mit den Worten: „Die Gnade führt aus vielen Übertretungen zur Gerechsprechung.“ {1#Röm 5,16} Damit ist gleichzeitig ausgesprochen, dass der Tod mit der Wurzel ausgerottet ist.^pDanach legt der Apostel dar, dass nicht nur die Sünde beseitigt, sondern auch Gerechtigkeit verliehen wurde, dass Christus nicht nur so viel Nutzen brachte, wie Adam geschadet hatte, sondern viel mehr und in größerem Ausmaß.^pWie begründet der Apostel seine Behauptung? „Ist durch die Übertretung des einen der Tod zur Herrschaft gekommen durch diesen einen, so werden erst recht alle, denen die Gnade und die Gabe der Gerechtigkeit reichlich zuteil wurde, leben und herrschen durch den einen, Jesus Christus.“ {2#Röm 5,17} Was er sagen will, ist dies: Was hat dem Tod die Waffen gegen eine ganze Welt gegeben? Allein, dass der eine Mensch von dem Baum gegessen hat. Wenn nun der Tod aus dem Fehltritt des einen solche Kraft gewonnen hat, wie können dann die, die einige aber Höheres empfangen haben, Heiligkeit und Gerechtigkeit, und zwar in reichlichem, die Sünden weit übersteigendem Maß: wie können diese dann fortan der Sünde unterworfen sein? Darum sagt er hier nicht: „Gnade“, sondern „reichliche Gabe“. Denn wir erhielten nicht nur so viel, wie wir für die Beseitigung der Sünde brauchten, sondern viel mehr: Wir wurden von der Strafe befreit, haben die Bosheit abgelegt, wurden von oben wiedergeboren, sind auferstanden, nachdem der alte Mensch begraben war, wir wurden losgekauft und geheiligt, an Kindes Statt angenommen und gerecht gemacht, wir wurden Brüder des Einziggezeugten, seine Miterben, Glieder seines Leibes, wir wurden seinem Fleisch eingefügt und mit ihm vereint wie der Leib mit dem Haupt.^pAll das zusammen nennt Paulus die reichliche Gabe.",
          "patr_resp1": "Wie durch den Ungehorsam des einen Menschen die vielen zu Sündern wurden,",
          "patr_resp2": "so werden durch den Gehorsam des einen die vielen gerecht.",
          "patr_resp3": "Christus ist gehorsam geworden bis zum Tod, ja bis zum Tod am Kreuz."
        }
      },
      "3": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)",
          "resp1_1": "Alle, die wir auf Christus Jesus getauft wurden, sind auf seinen Tod getauft.",
          "resp1_2": "Wie Christus von den Toten auferweckt wurde, so sollen auch wir als neue Menschen leben.",
          "resp1_3": "Unser alter Mensch wurde mitgekreuzigt, damit wir nicht Sklaven der Sünde bleiben.",
          "patr_autor": "Cyrill von Jerusalem (†°386)",
          "patr_werk": "Aus einer mystagogischen Katechese.",
          "patr_text": "^hVom Leiden Christi haben wir die Gestalt, vom Heil die Wirklichkeit^pDie Taufe ist Abbild der Leiden Christi. Darum ruft Paulus mit Recht: „wisst ihr denn nicht, dass wir alle, die wir auf Christus Jesus getauft worden sind, auf seinen Tod getauft wurden? Wir wurden mit ihm begraben durch die Taufe auf den Tod.“ {1#Röm 6,3-4} Das sagte er Leuten, die der Meinung waren, die Taufe bringe zwar Vergebung der Sünden und Annahme an Kindes Statt, nicht aber Teilnahme an dem wirklichen Leiden Christi im Zeichen.^pDamit wir aber erkennen, dass Christus für uns und unser Heil all seine Leiden nicht bloß scheinbar, sondern in Wirklichkeit ertragen hat und dass wir seiner Leiden teilhaftig werden, hat Paulus unmißverständlich gesagt: „Wenn wir nämlich mit der Gestalt seines Todes zusammengepflanzt worden sind, dann werden wir es auch mit der Gestalt seiner Auferstehung sein.“ {2#Röm 6,5} Treffend ist dieses „zusammengepflanzt mit“. Denn hier ist der wahre Weinstock, und wir sind mit ihm in der Gemeinschaft der Taufe auf den Tod „zusammengepflanzt“ worden. Richte also deinen Geist mit großer Aufmerksamkeit auf die Worte des Apostels. Er sagt nicht: „Wenn wir mit ihm durch den Tod zusammengepflanzt sind“, sondern: „in der Gestalt des Todes“. Der Tod Christi ist nämlich wirklich, und wirklich trennte sich die Seele vom Leib. Und es war ein wirkliches Begräbnis; in ein reines Leinentuch war sein heiliger Leib gehüllt. {3#Mt 27,59} All das geschah bei ihm wirklich, bei unserem Tod (in der Taufe) aber gibt es vom Leiden nur das Abbild, vom Heil jedoch nicht das Abbild, sondern die Wirklichkeit.^pGott ist auch mächtig genug, euch die Gnade zu verleihen, „als neue Menschen zu leben“ {4#Röm 6,4}. Ihm sei die Ehre und die Macht in Ewigkeit. Amen.",
          "patr_resp1": "Das ist wahr: Wir sind mit Christus gestorben;",
          "patr_resp2": "wir werden auch mit ihm leben.",
          "patr_resp3": "Wer an ihn glaubt, wird leben, wenn er auch stirbt."
        }
      },
      "4": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)",
          "resp1_1": "Ihr wurdet aus der Macht der Sünde befreit und seid Diener Gottes geworden.",
          "resp1_2": "Ihr habt einen Gewinn erlangt, der zur Heiligung führt und das Leben Gottes bringt.",
          "resp1_3": "Daher soll die Sünde euren sterblichen Leib nicht mehr beherrschen. ",
          "patr_autor": "Aus einem Pauluskommentar des 4. Jh. (Ambrosiaster)",
          "patr_werk": "Zum Brief an die Römer.",
          "patr_text": "^hMit dem „alten Menschen“ meint Paulus die Taten der Vergangenheit^p „Wenn wir mit der Gestalt seines Todes vereinigt worden sind, dann werden wir es auch mit der Gestalt seiner Auferstehung sein.“ {1#Röm 6,5} Der Apostel sagt, dass wir selig auferstehen können, wenn wir mit der Gestalt seines Todes vereinigt werden, das heißt: wenn wir in der Taufe alles Böse ablegen, zum neuen Leben übergehen und fortan nicht mehr sündigen. Dadurch werden wir ihm zugleich in der Auferstehung ähnlich. Denn die Ähnlichkeit im Tod wird auch eine ähnliche Auferstehung bringen, woran der Apostel Johannes erinnert: „Wir wissen, dass wir ihm ähnlich sein werden, wenn er offenbar wird.“ {2#1°Joh°3,3}Das ist das Auferstehen in Unsterblichkeit und Herrlichkeit. Diese Ähnlichkeit wird nicht so weit gehen, dass überhaupt kein Unterschied mehr besteht: wir werden ihm in der Herrlichkeit des Leibes ähnlich sein, nicht in der göttlichen Natur.^p„Wir wissen: Unser alter Mensch wurde mitgekreuzigt, damit der von der Sünde beherrschte Leib vernichtet und wir nicht Sklaven der Sünde bleiben.“ {3#Röm 6,6} Vieles sagt und wiederholt er, um die Getauften zu lehren, dass sie nicht mehr sündigen, vor allem nicht zum Götzendienst zurückkehren dürfen. Denn das ist die schwerste Sünde und der Gipfel der Verirrung. Sonst verlieren sie die Gnade, die sie von Gott durch Christus empfangen haben. Den „alten Menschen“ nennt er die Taten der Vergangenheit. Denn wie von dem neuen Menschen gesagt werden kann, dass er durch Christus und den Glauben an ihn ein reines Leben besitzt, so vom alten Menschen, dass er Unglauben und böse Taten aufzuweisen hat. Von diesen Taten sagt Paulus, sie seien mitgekreuzigt, das heißt: tot, „damit der von der Sünde beherrschte Leib vernichtet werde“, nämlich die Gesamtheit der Sünden. Alle Sünden zusammen nennt er einen Leib und sagt von ihm, er werde vernichtet durch ein gutes Leben und den katholischen Glauben.^p„Sind wir mit Christus gestorben, so glauben wir, dass wir auch mit ihm leben werden.“ {4#Röm 6,8} Offenbar ist, dass alle, die das Fleisch, das heißt: die Welt, mit ihren Leidenschaften und Begierden gekreuzigt haben {5#Gal 5,24}, der Welt sterben, mit Christus sterben, und dass sie dem ewigen Leben und Heil gleichgestaltet und so der Herrlichkeit Gottes ähnlich werden dürfen.",
          "patr_resp1": "Der Lohn der Sünde ist der Tod, die Gabe Gottes ist das ewige Leben",
          "patr_resp2": "in Christus Jesus, unserem Herrn.",
          "patr_resp3": "Stellt eure Glieder in den Dienst der Gerechtigkeit, so dass ihr heilig werdet."
        }
      },
      "5": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)",
          "resp1_1": "Wir sind frei geworden von dem Gesetz, an das wir gebunden waren.",
          "resp1_2": "Wir dienen in der neuen Wirklichkeit des Geistes.",
          "resp1_3": "Denn die Liebe Gottes ist ausgegossen in unsern Herzen, durch den Heiligen Geist. ",
          "patr_autor": "Aus einem Pauluskommentar des 4. Jh. (Ambrosiaster)",
          "patr_werk": "Zum Brief an die Römer.",
          "patr_text": "^hWer stirbt, sündigt nicht mehr, der Tod ist das Ende der Sünde^p„Wie können wir, die wir für die Sünde tot sind, noch in ihr leben?“ {1#Röm 6,2} Das sagt der Apostel, weil wir für Gott tot waren, als wir in der Sünde lebten. Sündigen heißt nämlich für die Sünde leben, so wie es ein Leben für Gott ist, wenn wir nicht sündigen. Als durch Christus die Gnade Gottes kam, fingen wir an, für Gott zu leben, der uns durch den Glauben im geistlichen Bad neu zeugte, für die Sünde aber (die der Teufel ist) tot zu sein. Das Sterben für die Sünde bedeutet, von der Sünde befreit, Knecht Gottes zu werden. So wollen wir denn, nachdem wir für die Sünde gestorben sind, nicht zu dem Bösen von früher zurückkehren, damit wir nicht abermals für die Sünde leben, tot für Gott unsere Würde verlieren und der Strafe verfallen, der wir entgangen waren.^p„wisst ihr nicht, dass wir alle, die wir auf Christus Jesus getauft worden sind, auf seinen Tod getauft wurden?“ {2#Röm 6,3} Das sagt Paulus, um uns ins Bewusstsein zu rufen, dass der Getaufte nicht sündigen darf, weil wir in der Taufe mit Christus gestorben sind. So ist der Ausdruck zu verstehen: „auf seinen Tod getauft sein“. In der Taufe sterben nämlich all unsere Sünden, damit wir vom Tod frei werden und, als neue Menschen zum Leben wiedergeboren, wie Aufstandene sind. Wie Christus der Sünde starb und auferstand, so sollen auch wir durch die Taufe Hoffnung auf Auferstehung erhalten. Die Taufe ist also der Tod der Sünde. Danach folgt die zweite Geburt. Sie lässt den Leib bestehen, begräbt aber alle bösen Taten des alten Menschen und macht neu im Geist. „Wir wurden mit ihm begraben durch die Taufe auf den Tod; wie Christus durch die Herrlichkeit des Vaters von den Toten auferweckt wurde, so sollen auch wir als neue Menschen leben.“ {3#Röm 6,4 (Vet.Lat.)} Indem er so spricht, deutet er auch auf das hin, was am Anfang steht: dass Christus seinen Leib von den Toten auferweckt hat. Denn wie er selbst sagt, ist er die Kraft des Vaters: „Reißt diesen Tempel nieder, in drei Tagen werde ich ihn wieder aufrichten; er meinte aber den Tempel seines Leibes.“ {4#Joh 2,19.21} Er erstand zu neuem Leben, das kein Sterben mehr kennt.",
          "patr_resp1": "Zieht den neuen Menschen an, der nach Gott geschaffen ist",
          "patr_resp2": "in Heiligkeit und Gerechtigkeit.",
          "patr_resp3": "Wir gehören Christus, damit wir Gott Frucht bringen."
        }
      },
      "6": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)",
          "resp1_1": "Wenn ihr euch vom Geiste führen lasst, dann seid ihr nicht mehr unter dem Gesetz.",
          "resp1_2": "Die Frucht des Geistes aber ist Liebe, Freude, Friede.",
          "resp1_3": "Wenn wir im Geist leben, dann wollen wir dem Geist auch folgen. ",
          "patr_autor": "Augustinus (†°430)",
          "patr_werk": "Aus den Bekenntnissen.",
          "patr_text": "^hDer Widerstreit des Willens im Menschen^pDie Gedanken, die mein Sinnen auf dich richtete, gleichen dem Bemühen derer, die erwachen wollen, aber, von der Schwere des Schlummers überwältigt, immer wieder zurücksinken. Nun möchte aber niemand immer schlafen, und nach dem Urteil aller Vernünftigen ist das Wachen besser; trotzdem aber schiebt der Mensch die Stunde des Aufstehens häufig hinaus, wenn er in den Gliedern eine große Schwere empfindet und den Schlaf, obwohl er ihn mißbilligt, noch gar zu gern genießt, auch wenn die Stunde des Aufstehens schon da ist. So wusste auch ich gewiss, dass es besser ist, mich deiner Liebe hinzugeben, als meiner Begierlichkeit nachzugehen. Doch jenes schien mir gut und überwand mich, dieses aber gefiel mir und hielt mich in Banden. Denn ich wusste nicht, was ich dir hätte antworten sollen, der du mir sagtest: „Wach auf du Schläfer, und steh auf von den Toten, und Christus wird dein Licht sein.“ {1#Eph 5,14} Überall zeigtest du mir die Wahrheit deiner Worte, und von der Wahrheit überzeugt, wusste ich doch dir durchaus nichts anderes zu antworten als träge, schlaftrunkene Worte: „Gleich, sogleich! lass mich nur noch ein wenig!“ Doch dieses „gleich, sogleich“ hatte kein Ende, und dieses „lass mich nur noch ein wenig!“ zog sich gar sehr in die Länge. Vergebens war es, dass ich „im Innern mich an deinem Gesetz freute“ {2#Röm 7,22f}, da ein anderes Gesetz „in meinen Gliedern mit dem Gesetz meiner Vernunft im Streit lag und mich gefangen hielt im Gesetz der Sünde, von dem meine Glieder beherrscht wurden“ {3#Röm 7,24f}. Denn das Gesetz der Sünde ist die Macht der Gewohnheit, die den Geist auch wider seinen Willen fortreißt und festhält, und zwar verdientermaßen, da er sich ihr willig hingab. „Ich unglücklicher Mensch! Wer wird mich aus diesem dem Tod verfallenen Leib erretten? Dank sei Gott durch Jesus Christus, unseren Herrn!“",
          "patr_resp1": "Ich unglückseliger Mensch! Wer wird mich von dem Leib dieses Todes befreien?",
          "patr_resp2": "Dank sei Gott, der mich befreit, durch Jesus Christus, unsern Herrn.",
          "patr_resp3": "Ich sehe ein anderes Gesetz in meinen Gliedern, das mich gefangenhält."
        }
      }
    },
    "3": {
      "0": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)",
          "resp1_1": "Gott sandte seinen Sohn in der Gestalt des Fleisches, und so verurteilte er an diesem Fleisch die Sünde,",
          "resp1_2": "damit die Forderung des Gesetzes erfüllt werde.",
          "resp1_3": "Als Gerechter hat mein Knecht die Vielen gerechtfertigt und ihre Schuld auf sich geladen.",
          "patr_autor": "Aus einem Pauluskommentar des 4. Jh. (Ambrosiaster)",
          "patr_werk": "Zum Brief an die Römer.",
          "patr_text": "^hIhr habt den Geist empfangen, der euch zu Söhnen Gottes macht^p„Alle, die sich vom Geist Gottes führen lassen, sind Söhne Gottes.“ {1#Röm 8,14} Mit denen, die sich vom Geist Gottes führen lassen, meint Paulus die Menschen, in deren Taten nicht die Pläne der Fürsten und Mächte sichtbar werden. Denn alle, in denen diese sichtbar werden, sind nicht Kinder Gottes, sondern Kinder des Teufels; denn „jeder, der von Gott stammt, tut keine Sünde“ {2#1°Joh°3,9}, sagt der Apostel Johannes. Daran unterscheidet man die Kinder Gottes von denen des Teufels.^p „Ihr habt nicht einen Geist empfangen, der euch zu Sklaven macht, so dass ihr euch immer noch fürchten müsstet.“ {3#Röm 8,15a} Das sagt der Apostel, weil wir nach dem Empfang des Heiligen Geistes von aller Furcht vor bösen Taten befreit sind, so dass wir fortan, was uns von neuem fürchten ließe, nicht mehr tun; denn vorher standen wir unter der Furcht, weil alle durch den Erlass des Gesetzes Sünder wurden. Paulus nennt das Gesetz „Geist der Furcht“, weil es die Menschen wegen der Sünde in Furcht versetzte. Das Gesetz des Glaubens aber, auf das mit dem „Geist der Kindschaft“ hingewiesen wird, ist ein Geist der Sicherheit, weil es uns von der Furcht rettet, indem es uns die Sünde nachlässt und dadurch zuversichtlich macht. Es wird Geist nicht der Furcht im Sinn dieser Welt genannt.^p„Ihr habt den Geist empfangen, der euch zu Söhnen macht, den Geist, in dem wir rufen: Abba, Vater!“ {4#Röm 8,15b} Durch die Gnade Gottes von der Furcht befreit, haben wir den Geist empfangen, der uns zu Kindern (Gottes) macht. Darum wollen wir bedenken, was wir waren und was wir durch die Gnade Gottes empfangen haben, und wir wollen unser Leben mit großer Sorgfalt so ordnen, dass dem Namen Gottes in uns kein Schimpf angetan wird und dass wir nicht als Undankbare all dem wieder verfallen, dem wir entgangen sind. Haben wir doch eine derartige Gnade empfangen, dass wir es wagen dürfen, zu Gott zu sprechen: Abba! das heißt: Vater!",
          "patr_resp1": "Eine große Liebe hat der Vater uns geschenkt:",
          "patr_resp2": "Kinder Gottes werden wir genannt und sind es.",
          "patr_resp3": "Denen, die ihn aufnahmen, gab er Macht, Kinder Gottes zu werden."
        }
      },
      "1": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)",
          "resp1_1": "Der Geist nimmt sich unserer Schwachheit an,",
          "resp1_2": "denn wir wissen nicht, worum wir beten sollen.",
          "resp1_3": "Der Geist selber tritt für uns ein mit unaussprechlichem Seufzen.",
          "patr_autor": "Cyrill von Alexandrien (†°444)",
          "patr_werk": "Zum Brief an die Römer.",
          "patr_text": "^hGott bewahrt die Schöpfung auf für die Freiheit derer, die ihn lieben^p „Die ganze Schöpfung wartet sehnsüchtig auf das Offenbarwerden der Söhne Gottes.“{1#Röm 8,19} Erwartung ist Hoffnung und gespanntes Ausschauen nach dem Ausgang der Dinge. Die Schöpfung wartet auf das Offenbarwerden der Söhne Gottes, nicht als ob sie jemals das Künftige zu wissen vermöchte. Und doch wird sie durch die geheimnisvollen Fügungen Gottes, der alles zum Besten lenkt, an dieses Ziel gelangen. Wenn nämlich die Kinder Gottes verwandelt werden, dann wird auch die Schöpfung selbst zum Besseren gewandelt werden. Darüber lässt uns auch der heilige Petrus keinen Zweifel, da er sagt, dass wir einen neuen Himmel und eine neue Erde erwarten{2#2°Petr°3,13}.^p „Die Schöpfung ist der Vergänglichkeit unterworfen.“{3#Röm 8,20} Unter „Vergänglichkeit“ versteht Paulus hier alle Menschen, die in der Vergänglichkeit, das heißt in fleischlicher Gesinnung, leben. Von ihnen könnte höchst treffend gesagt werden: „Der Mensch gleicht einem Hauch.“{4#Ps 144,4} Er wird ja auch neben die vernunftlosen Tiere gestellt und mit ihnen verglichen. Vergänglichkeit ist das Leben solcher Menschen gewiss. Ihnen wird die Schöpfung unterstellt, auch wenn diese niemals irgendwie zustimmt. Warum betonen wir das? Weil die wahrnehmbare und sichtbare Schöpfung durchaus nichts von unseren Angelegenheiten weiß; denn sie hat keine Vernunft. Gäbe ihr aber jemand die Fähigkeit, etwas zu erkennen, so würde sie es nicht ertragen – das will Paulus sagen –, in einem so schimpflichen Dienst zu stehen, und sie würde es ablehnen, sich dem Dienst derer zu beugen, die in keiner Weise bereit sind, der Verpflichtung zum Guten zu leben. Aber, wie der Apostel sagt, die Welt bleibt unterworfen wegen der Hoffnung auf die durch alle Zeiten hin erwählten Heiligen. Gott selbst beugt sie unter dieses Joch und bewahrt sie für die Freiheit (die sie erlangen wird) unter denen, die heilig sind und ihn lieben.",
          "patr_resp1": "Weil ihr Söhne seid, sandte Gott den Geist seines Sohnes in eure Herzen,",
          "patr_resp2": "den Geist, der da ruft: Abba, Vater!",
          "patr_resp3": "Gott hat uns nicht einen Geist der Furcht gegeben, sondern einen Geist der Kraft, der Besonnenheit und Liebe."
        }
      },
      "2": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)",
          "resp1_1": "Den Kindern Israels ist das Gesetz gegeben.",
          "resp1_2": "Die Kinder der Verheißung jedoch werden als Nachkommen anerkannt.",
          "resp1_3": "Denn nicht alle, die aus Israel stammen, sind Israel.",
          "patr_autor": "Augustinus (†°430)",
          "patr_werk": "Aus dem Enchiridion.",
          "patr_text": "^hSeligkeit nicht durch den freien Willen, sondern nur durch die Gnade Gottes^pKann jener Teil des Menschengeschlechtes, dem Gott Rettung und Besitz des ewigen Reiches in Aussicht gestellt hat, seine Wiederherstellung durch das Verdienst der eigenen Werke erringen? Durchaus nicht. Damit sich demnach niemand seiner Werke noch seines eigenen freien Willensentschlusses rühme, als ob in diesem selbst der Ursprung der Verdienstlichkeit liege, höre man, was Paulus, der Prediger der Gnade, sagt: „Gott ist es, der in euch das Wollen und das Vollbringen bewirkt nach seinem Wohlgefallen.“ {1#Phil 2,13} Und an einer anderen Stelle sagt er: „Also kommt es nicht auf das Wollen oder Streben des Menschen an, sondern auf das Erbarmen Gottes.“ {2#Röm 9,16} Und doch kann ohne Zweifel der einmal zum Gebrauch der Vernunft herangewachsene Mensch nur dann glauben, hoffen und lieben, wenn er selber will, und nur dann jenen himmlischen Siegespreis erlangen, zu dem Gott den Menschen beruft, wenn er sich müht, danach zu laufen. Es liegt jedoch nicht am Wollen oder Streben eines Menschen, sondern am Erbarmen Gottes, weil auch der Wille selbst nach dem Wort der Schrift „vom Herrn vorbereitet wird“ {3#Spr 8,35}. So bleibt keine andere richtige Auffassung der Schriftstelle: „Es kommt nicht auf das Wollen und Streben des Menschen an, sondern auf das Erbarmen Gottes“, übrig, als dass wir alles Gott zuschreiben, der den guten Willen des Menschen zur Unterstützung vorbereitet und nach der Vorbereitung unterstützt. Denn in der Heiligen Schrift heißt es sowohl: „Seine Barmherzigkeit kommt mir entgegen“ {4#Ps 58,11}, als auch: „Seine Barmherzigkeit wird mir folgen.“ {5#Ps 22,6} Dem, der nicht will, kommt sie entgegen, damit er will; dem aber, der will, folgt sie nach, damit er nicht vergeblich will.",
          "patr_resp1": "Es kommt nicht auf das Wollen und Streben des Menschen an, sondern auf den sich erbarmenden Gott.",
          "patr_resp2": "Zu Gefäßen seines Erbarmens hat er uns berufen.",
          "patr_resp3": "Gott erbarmt sich, wessen er will."
        }
      },
      "3": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)",
          "resp1_1": "Ich werde die Unbegnadeten begnaden und werde sagen: Ihr seid mein Volk.",
          "resp1_2": "Und wir werden sagen: Mein Gott bist du.",
          "resp1_3": "Gott, der den Reichtum seiner Herrlichkeit erweisen wollte, hat uns berufen.",
          "patr_autor": "Johannes Chrysostomus (†°407)",
          "patr_werk": "Zum Brief an die Römer.",
          "patr_text": "^hTöpfer und Ton^pWenn der Apostel sagt: „Hat der Töpfer nicht Macht über den Ton, aus derselben Masse das eine Gefäß zu einer edlen, das andere zu einer unedlen Bestimmung zu formen?“, so glaube nicht, Paulus habe dies gesagt, um eine Unfreiheit des menschlichen Willens zu behaupten, die ihm anerschaffen sei! Nein, er wollte lediglich damit ausdrücken, dass Gott in seinen Verfügungen frei sei und diese darum verschieden seien.^pEr will also hier nichts anderes erreichen, als den Zuhörer zu überzeugen, dass er sich ganz und gar Gott überlassen müsse und nicht einmal nach einem Grund für die Verfügungen Gottes fragen dürfe. Neige dich in demütiger Anbetung und verhalte dich wie der Ton: wie dieser sich den Händen des Töpfers fügt, so füge auch du dich dem Willen Gottes, wenn er das oder jenes verfügt. Er tut ja nichts ohne Grund, auch da, wo ein Zufall zu walten scheint und wo du das Geheimnis seiner Weisheit nicht durchschaust. Du gestehst ja auch dem Töpfer das Recht zu, aus derselben Masse Verschiedenes zu formen, und machst ihm keinen Vorwurf; von Gott aber möchtest du Rechenschaft darüber fordern, wie er Strafe und Lohn austeilt. Du traust ihm nicht zu, zu wissen, wer des einen oder andern würdig ist, sondern verlangst, dass die ganze Masse, weil sie dem Wesen nach gleich ist, auch die gleiche Bestimmung haben müsse. Was ist das doch für eine Torheit! Es liegt ja auch nicht am Töpfer, dass aus derselben Masse Edles und Unedles wird, sondern am Gebrauch, den die Besitzer der Gefäße davon machen; so hängt es auch hier vom Gebrauch des freien Willens ab.",
          "patr_resp1": "Darf etwa das Gebilde zu dem Bildner sagen: Warum hast du mich so gemacht?",
          "patr_resp2": "Wer an ihn glaubt, wird nicht zuschanden werden.",
          "patr_resp3": "Gott hat die Gefäße des Zornes in großer Langmut ertragen, um den Reichtum seiner Herrlichkeit zu offenbaren."
        }
      },
      "4": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)",
          "resp1_1": "Alle haben ein und denselben Herrn;",
          "resp1_2": "aus seinem Reichtum beschenkt er alle, die ihn anrufen.",
          "resp1_3": "Denn jeder, der den Namen des Herrn anruft, wird gerettet.",
          "patr_autor": "Johann Michael Sailer (†°1832)",
          "patr_werk": "Aus der Schrift „Die Lehre vom Heil des Menschen“.",
          "patr_text": "^hDen Herrn anrufen heißt nicht: mit halbem Herzen sprechen^p„Einer ist der Herr über alle, und dieser eine Herr beschenkt aus seinem Reichtum alle, die ihn anrufen.“ {1#Röm 10,12}^pWenn Paulus von der Seligkeit der Christen spricht, so fängt er bei Gott an und endet mit Gott, und alles, was er vom Anfang bis zum Ende sagt, steht im genauesten Zusammenhang unter sich und mit dem Anfang und Ende.^pEiner ist der Herr über alle, und der eine Herr ist reich für alle, die ihn anrufen. Das ist die Grundlehre des Apostels, davon gehen alle seine übrigen Lehren, davon alle seine Ermahnungen aus. Dieser eine Herr ist ihm Gott, dessen ganze Fülle, in Christus innewohnend, die Welt mit sich versöhnte; dieser eine Herr ist ihm Christus, der für alle gestorben, der von den Toten erweckt, der zur Rechten des Vaters erhöht – wirklich der eine Herr ist über alle und reich für alle. Er spendet die Erlösung, das Heil, die Seligkeit aus, wie wir Brot spenden den Hungrigen.^pEr ist reich für alle, die ihn anrufen. Den Herrn anrufen heißt aber nicht: mit den bloßen Lippen oder auch mit halbem Herzen sprechen: Herr, Herr! Den Herrn anrufen heißt: ihn als den Herrn anerkennen, ihn als den Herrn mit voller Zuversicht anflehen, ihn als den Herrn mit dem innersten Gemüte anbeten, heißt: mit ganzer Seele zu ihm sprechen: Erlöser, erlöse mich doch von allen Finstern, von Sünde und allem Geistestod. Der du reich bist für alle, reinige mich von allen Sünden, vergib auch mir alle Sünden, zerbrich auch in mir die Fesseln der Selbstsucht, verjage den Hass und die Lüge und alles Böse. Den Herrn anrufen heißt: zu ihm sprechen: Der du reich bist für alle, die dich anrufen, sei auch reich für mich; gib mir die heilige Liebe – und ich bin reich genug. Denn mit der heiligen Liebe habe ich den Frieden aus Gott und mit Gott; mit der heiligen Liebe habe ich Stärke des Geistes, zu tun, zu lassen, zu tragen, zu entbehren, was ich soll; mit der heiligen Liebe habe ich die Seligkeit, hier in Hoffnung, dort im vollen Genusse.",
          "patr_resp1": "Mir, dem Geringsten unter allen Heiligen, wurde diese Gnade geschenkt:",
          "patr_resp2": "Ich soll den Heiden den unergründlichen Reichtum Christi verkündigen.",
          "patr_resp3": "Christus, der reich war, wurde euretwegen arm, so dass ihr durch seine Armut reich wurdet."
        }
      },
      "5": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)",
          "resp1_1": "Gott sprach: Ich habe siebentausend Männer für mich aufbewahrt,",
          "resp1_2": "die ihre Knie nicht vor Baal beugen.",
          "resp1_3": "So gibt es auch in dieser Zeit einen Rest, Männer, die aus Gnade erwählt sind.",
          "patr_autor": "Johann Michael Sailer (†°1832)",
          "patr_werk": "Aus der Schrift „Die Lehre vom Heil des Menschen“.",
          "patr_text": "^hOhne die Liebe keine Seligkeit^p„Jeder, der den Namen des Herrn anruft, der wird selig werden.“ {1#Röm 10,13} Dies ist die Verheißung aller Verheißungen, weil sie keinen ausschließt, der den Namen des Herrn anruft, und jedem das höchste Gut verheißt. Diese Verheißung schließt keinen aus: wer den Namen des Herrn anruft, der wird selig. Diese Verheißung lässt uns nicht etwa eine geringe Gabe, sondern das höchste Gut erwarten: wer den Namen des Herrn anruft, der wird selig. Seligkeit, das höchste Gut des Menschen, kommt von dem Herrn, der reich ist für alle.^pWenn der eine Herr, der reich ist für alle, geben soll, so müssen die Dürftigen wohl annehmen, was ihnen dargereicht wird. Wer nun seine Sünden, sein Elend, seine Armut nicht erkennt oder dem Namen des Herrn nicht die Ehre geben und lassen will, durch ihn reich zu werden, der ruft den Herrn nicht als seinen Herrn an; er verschmäht also die Gabe seiner Hände, bleibt arm und elend, bleibt ein Sünder und behält den Fluch der Sünde, bleibt ohne Liebe und ohne Seligkeit. Dagegen wer seine Sünde und seine Armut an Liebe und Seligkeit erkennt, wer in Christus seinen Herrn, der reich ist für alle, erkennt, der spricht wohl auch zu ihm: Der du reich bist für alle, sei es auch für mich! Lehre mich lieben, wie du geliebt hast. Sei auch mein Heil und mache mich in Liebe selig! Er spricht’s und empfängt eine Gabe nach der andern, kann seinen Herrn lieben und liebend in ihm selig sein.",
          "patr_resp1": "Mit ewiger Liebe hat Gott uns geliebt.",
          "patr_resp2": "Voll Erbarmen hat er uns an sich gezogen.",
          "patr_resp3": "In seiner großen Liebe hat Gott uns in Christus zum Leben auferweckt."
        }
      },
      "6": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)",
          "resp1_1": "Überhebe dich nicht!",
          "resp1_2": "Nicht du trägst die Wurzel, die Wurzel trägt dich.",
          "resp1_3": "Ist die Wurzel heilig, so sind es auch die Zweige.",
          "patr_autor": "Johann Michael Sailer (†°1832)",
          "patr_werk": "Aus der Schrift „Die Lehre vom Heil des Menschen“.",
          "patr_text": "^hKeine Sendung zur Predigt außer durch Christus und die Kirche^pEs ist kein Glaube an den Herrn da, wo man nie etwas von dem Herrn gehört, vernommen hat. Der Glaube kommt vom Hören. Die Natur mag mir vieles von Gott ins Herz reden; aber von Christus, dem Erlöser der Welt, sagt sie mir nichts. Die Natur mag mich recht kräftig an Gott erinnern; aber von dem ewigen Ratschluss Gottes, die Menschheit durch Christus selig zu machen, weiß sie mir nichts zu sagen. Das muss durch Menschen, die den Erlöser kennen, die ihn gesehen haben, ausgesprochen werden, und so klar, dass es die andern hören können.^pEs ist kein Hören des göttlichen Wortes, wenn das Wort Gottes nicht verkündet, gepredigt wird. Ich kann das Wort Gottes nicht hören, wenn es nicht als Wort Gottes an mich gesprochen wird. Das hat sich bei der ersten Gründung der apostolischen Gemeinde herrlich erwiesen. Petrus, Paulus, Johannes predigten Gottes Wort unter Juden und Heiden. Nun konnten sie es hören, und die es ins Ohr und dann ins Herz aufnahmen, die konnten glauben, und die von ganzem Herzen glaubten, die konnten lieben, und die von ganzem Herzen liebten, die konnten selig sein in Christus.^pWie keine Seligkeit ohne Liebe, wie keine Liebe ohne Anrufung des Herrn, wie keine Anrufung ohne Glaube, wie kein Glaube ohne Hören, wie kein Hören des göttlichen Wortes ohne Predigt, wie keine Predigt des göttlichen Wortes wenn nicht von denen, die dazu gesendet sind; so ist auch keine Sendung zur Predigt des göttlichen Wortes außer von dem Herrn; denn der Herr ist über allen und reich für alle. Der Herr sendet seine Boten; der Herr sendet sie durch sich und durch seine Kirche. Christus sendet seine Prediger. Deswegen heißt auch das Wort Gottes – das Wort Christi; deswegen heißen auch die ersten Prediger – Apostel, Gesandte, Boten Christi.^pSende, Herr, sende Prediger, damit deine Jünger das Wort Gottes hören, hörend glauben, glaubend lieben und liebend selig werden können.",
          "patr_resp1": "Ihre Botschaft geht in die ganze Welt hinaus,",
          "patr_resp2": "ihre Kunde dringt bis zu den Enden der Erde.",
          "patr_resp3": "Willkommen sind die Füße derer, die Frohe Botschaft verkündigen!"
        }
      }
    },
    "4": {
      "0": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)"
        }
      },
      "1": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)"
        }
      },
      "2": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)"
        }
      },
      "3": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)"
        }
      },
      "4": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)"
        }
      },
      "5": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)"
        }
      },
      "6": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Genesis.",
          "les_text": "(…)"
        }
      }
    }
  },
  "k": {
    "1": {
      "2": {
        "Lesehore": {
          "les_buch": "Aus dem Hohenlied.",
          "les_stelle": "4,1a.8-5,1",
          "les_text": "^hChristus verlangt nach der Liebe der Kirche^p^r(Stimme des Bräutigams)^0r^lSchön bist du, meine Freundin,^lja, du bist schön.^pKomm doch mit mir, meine Braut, vom°Libanon,^lweg vom Libanon komm du mit mir!^lWeg vom Gipfel des Amana,^lvon den Höhen des Senir und Hermon;^lweg von den Lagern der Löwen,^lden Bergen der Panther!^pVerzaubert hast du mich,^lmeine Schwester Braut;^lja verzaubert^lmit einem (Blick) deiner Augen,^lmit einer Perle deiner Halskette.^lWie schön ist deine Liebe,^lmeine Schwester Braut;^lwieviel süßer ist deine Liebe als Wein,^lder Duft deiner Salben köstlicher^lals alle Balsamdüfte!^lVon deinen Lippen, Braut, tropft Honig;^lMilch und Honig ist unter deiner Zunge.^lDer Duft deiner Kleider ist wie des Libanon Duft.^pEin verschlossener Garten^list meine Schwester Braut,^lein verschlossener Garten,^lein versiegelter Quell.^pEin Lustgarten sprosst aus dir,^lGranatbäume mit köstlichen Früchten,^lHennadolden, Nardenblüten,^lNarde, Krokus, Gewürzrohr und Zimt,^lalle Weihrauchbäume,^lMyrrhe und Aloë,^lallerbester Balsam.^lDie Quelle des Gartens bist du,^lein Brunnen lebendigen Wassers,^lWasser vom Libanon.^p^r(Stimme der Braut)^0r^lNordwind, erwache! Südwind, herbei!^lDurchweht meinen Garten,^llasst strömen die Balsamdüfte!^pMein Geliebter komme in seinen Garten^lund esse von den köstlichen Früchten.^p^r(Stimme des Bräutigams)^0r^lIch komme in meinen Garten, Schwester°Braut;^lich pflücke meine Myrrhe, den Balsam;^lesse meine Wabe samt dem Honig,^ltrinke meinen Wein und die Milch.^lFreunde, esst und trinkt,^lberauscht euch an der Liebe!",
          "resp1_1": "Alles an dir ist schön, kein Makel haftet dir an,",
          "resp1_2": "Komm mit mir, meine Braut, vom Libanon komm mit mir.",
          "resp1_3": "Mit ewiger Liebe habe ich dich geliebt, darum habe ich dir meine Huld bewahrt.",
          "patr_autor": "Leo der Große (†°461)",
          "patr_werk": "Aus einer Predigt über das Geheimnis der Menschwerdung Gottes.",
          "patr_text": "^hDer Herr des Weltalls nimmt Knechtsgestalt an und verhüllt die Würde seiner Herrlichkeit^pDie Jungfrau aus dem Königsgeschlecht des David wird erwählt, das gottmenschliche Kind zu empfangen: zuerst im gläubigen Geist, dann auch in ihrem Leib {1#vgl.°Lk 1,26–38; Joh 1,14}.^pDamit sie nicht aus Unkenntnis des Außerordentlichen, das Gott mit ihr plant, erschrecke, erscheint ihr der Engel und sie erfährt, was durch den Heiligen Geist in ihr geschehen wird, dass sie zur Würde der Gottesmutter erhoben wird. Für ihre Unversehrtheit braucht sie nicht zu fürchten. Warum sollte sie misstrauisch sein? Die Kraft des Höchsten ist ihr verheißen, und ihrem Glauben wird ein Wunderzeichen gegeben: der hochbetagten Elisabeth ist Fruchtbarkeit geschenkt. Wenn aber Gott der Unfruchtbaren Empfängnis schenkt, warum dann zweifeln, dass er sie auch der Jungfrau schenken wird?^pDann steigt Jesus Christus, der Sohn Gottes, zur Erde nieder. Er bleibt in der Herrlichkeit des Vaters. Aber auf einer anderen Ebene und in einer neuen Art wird er geboren. In einer neuen Ordnung: Unsichtbar und unfassbar als Gott, wird er sichtbar und fassbar als Mensch. Vor aller Zeit in ewig bleibendem Sein, will er einen Anfang nehmen in der Zeit. Der Herr des Weltalls nimmt Knechtsgestalt an und verhüllt die Würde seiner Herrlichkeit. Gott, der keinem Leiden unterworfen ist, nimmt die Natur des leidensfähigen Menschen an. Der Unsterbliche unterwirft sich den Gesetzen des Todes.^pAuf eine neue Art wird er gezeugt, empfangen und geboren von der Jungfrau ohne das Wollen eines irdischen Vaters. Die Unversehrtheit der Mutter wird nicht verletzt. Bei der Geburt Gottes ist Gott selbst der Schöpfer, wie es der Erzengel der heiligen Jungfrau Maria bezeugt: „Der Heilige Geist wird über dich kommen, die Kraft des Höchsten wird dich überschatten. Deshalb wird auch das Kind heilig und 'Sohn Gottes' genannt werden.“{2#Lk 1,35}^pDie Geburt ist anderer Art, aber die Natur des Kindes ist der unsrigen gleich. Anders ist die Art der Geburt, denn die Jungfrau empfängt durch göttliche Macht, durch göttliche Macht bringt sie das Kind zur Welt und bleibt Jungfrau. Hier ist nicht die menschliche Natur der Mutter, sondern die Entscheidung des Sohnes zu bedenken, der Mensch wird, so wie er selbst es will. Fragst du nach seiner wahren Natur, so schau auf die menschliche Natur. Fragst du nach der Art seiner Menschwerdung, dann preise Gottes Kraft!",
          "patr_resp1": "Fürchte dich nicht, Maria;",
          "patr_resp2": "denn du hast Gnade gefunden bei Gott.",
          "patr_resp3": "Du wirst einen Sohn gebären; dem sollst du den Namen Jesus geben."
        }
      },
      "3": {
        "Lesehore": {
          "les_buch": "Aus dem Hohenlied.",
          "les_stelle": "5,2.6-11a.15b-6,1",
          "les_text": "^hDie Kirche sucht Christus^p^r(Stimme der Braut)^0r^lIch schlief, doch mein Herz war wach.^lHorch, mein Geliebter klopft:^p^r(Stimme des Bräutigams)^0r^lMach auf, meine Schwester und Freundin,^lmeine Taube, du Makellose!^lMein Kopf ist voll Tau,^laus meinen Locken tropft die Nacht.^p^r(Stimme der Braut)^0r^lIch öffnete meinem Geliebten:^lDoch der Geliebte war weg, verschwunden.^lMir stockte der Atem: Er war weg.^lIch suchte ihn, ich fand ihn nicht.^lIch rief ihn, er antwortete nicht.^pDa fanden mich die Wächter^lbei ihrer Runde durch die Stadt;^lsie schlugen, sie verletzten mich.^lDen Mantel entrissen sie mir,^ldie Wächter der Mauern.^pIch beschwöre euch, Jerusalems Töchter:^lWenn ihr meinen Geliebten findet,^lsagt ihm,^lich bin krank vor Liebe.^p^r(Stimme der Gefährtinnen)^0r^lWas hat dein Geliebter den andern voraus,^ldu schönste der Frauen?^lWas hat dein Geliebter den andern voraus,^ldass du uns beschwörst?^p^r(Stimme der Braut)^0r^lMein Geliebter ist weiß und rot,^list ausgezeichnet vor Tausenden.^lSein Haupt ist reines Gold.^lSeine Gestalt ist wie der Libanon,^lerlesen wie Zedern.^lSein Mund ist voll Süße;^lalles ist Wonne an ihm.^lDas ist mein Geliebter,^lja, das ist mein Freund,^lihr Töchter Jerusalems.^p^r(Stimme der Gefährtinnen)^0r^lWohin ist dein Geliebter gegangen,^ldu schönste der Frauen?^lWohin wandte sich dein Geliebter?^lWir wollen ihn suchen mit dir.",
          "resp1_1": "Dein Geliebter ist ausgezeichnet vor Tausenden.",
          "resp1_2": "Wir wollen ihn suchen mit dir.",
          "resp1_3": "Sein Haupt ist reines Gold, seine Gestalt ist wie der Libanon.",
          "patr_autor": "Theresia vom Kinde Jesus (†°1897)",
          "patr_werk": "Aus einem Brief an Schwester Marie du Sacré-Cœur.",
          "patr_text": "^hMeine Berufung ist die Liebe^pAls beim Gebet meine Begierden mich ein wahres Martyrium erleiden ließen, schlug ich die Briefe des hl. Paulus auf, um irgendeine Antwort zu suchen. Das 12. und 13. Kapitel des ersten Korintherbriefes fiel mir in die Hände. Ich las im ersten, dass nicht alle zugleich Apostel, Propheten, Lehrer usw. sein können, dass die Kirche sich aus verschiedenen Gliedern zusammensetzt und dass das Auge nicht zugleich Hand sein kann {1#vgl.°1 Kor 12,29.12.21}.^pDie Antwort war klar, stillte aber mein Sehnen nicht und brachte mir keinen Frieden. Wie Magdalena sich immer wieder über das leere Grab beugte und schließlich fand, was sie suchte, so erniedrigte ich mich bis in die Tiefen meines Nichts, und da erhob ich mich so hoch, dass ich mein Ziel erreichte {2#Hl. Johannes vom Kreuz, Gedichte, Zweiter Gesang über eine Ekstase}. Ohne mich entmutigen zu lassen, setzte ich meine Lesung fort und fand Trost in folgendem Satz: „Strebt eifrig nach den vollkommensten Gaben, aber ich will euch einen noch vorzüglicheren Weg zeigen.“ {3#1 Kor 12,31} Und der Apostel erklärt, wie die vollkommenen Gaben nichts sind ohne die Liebe. Dass die Liebe {4#charité – die christliche Gottes- und Nächstenliebe} der vortreffliche Weg ist, der mit Sicherheit zu Gott führt.^pEndlich hatte ich Ruhe gefunden. Den mystischen Leib der Kirche betrachtend, hatte ich mich in keinem der von hl. Paulus geschilderten Glieder wiedererkannt, oder vielmehr, ich wollte mich in allen wiedererkennen. Die Liebe gab mir den Schlüssel meiner Berufung. Ich begriff, dass wenn die Kirche einen aus verschiedenen Gliedern bestehenden Leib hat, ihr auch das notwendigste, das edelste von allen nicht fehlt; ich begriff, dass die Kirche ein Herz hat und dass dieses Herz von Liebe brennt. Ich erkannte, dass die Liebe allein die Glieder der Kirche in Tätigkeit setzt, und würde die Liebe erlöschen, so würden die Apostel das Evangelium nicht mehr verkünden, die Märtyrer sich weigern, ihr Blut zu vergießen. Ich begriff, dass die Liebe alle Berufungen in sich schließt, dass die Liebe alles ist, dass sie alle Zeiten und Orte umspannt. Mit einem Wort, dass sie ewig ist!^pDa rief ich im Übermaß meiner überschäumenden Freude: O Jesus, meine Liebe, endlich habe ich meine Berufung gefunden, meine Berufung ist die Liebe!^pJa, ich habe meinen Platz in der Kirche gefunden, und diesen Platz, mein Gott, den hast du mir geschenkt; im Herzen der Kirche, meiner Mutter, werde ich die Liebe sein, so werde ich alles sein.",
          "patr_resp1": "Ahmt Gott nach als seine geliebten Kinder und übt die Liebe,",
          "patr_resp2": "weil auch Christus uns geliebt und sich für uns hingegeben hat als Gabe und Opfer, das Gott gefällt.",
          "patr_resp3": "Die Liebe Christi drängt uns, wenn wir erklären: Einer ist für alle gestorben, also sind alle gestorben.",
          "patr_autor_alt": "Mechthild von Magdeburg (†°um 1294)",
          "patr_werk_alt": "Aus der Schrift „Das fließende Licht der Gottheit“.",
          "patr_text_alt": "^hGottes Atem muss mich in sich ziehen^pDies spricht die Braut Gottes:^lJa, ich frage ihn, Gottes Sohn, wohl, wenn wir^lin die Blumen der heiligen Erkenntnis gehen.^lUnd bitte ihn voll Verlangen,^ldass er mir die spielende Flut aufschließe,^ldie in der Heiligen Dreifaltigkeit fließt,^lvon der die Seele allein lebt.^pSoll ich getröstet werden^lnach dem Maß eines edlen Verlangens,^lmuss mich Gottes Atem in sich ziehen^lohne Beschwerlichkeit.^pDenn die spielende Sonne^lder lebendigen Gottheit^lscheint durch das klare Wasser^lder seligen Menschheit,^lund die süße Lust des Heiligen Geistes^list aus ihnen beiden gekommen^lund hat mir alles genommen,^lwas unterhalb der Gottheit wohnt.^pMir schmeckt nichts denn Gott allein;^lIch bin dieser Welt ganz wunderlich tot,^lihren Geschmack^lwill ich mit Freuden entbehren,^ldamit Gott wunderbar gepriesen werde.^pDenn wenn ich unwürdiger Mensch^lmit meinen Kräften Gott nicht loben kann,^lsende ich alle Kreaturen zum himmlischen Hof^lund heiße sie Gott für mich preisen^lmit all ihrer Weisheit,^lmit all ihrer Liebe,^lmit all ihrer Schönheit,^lmit all ihrer Sehnsucht,^lwie sie unverletzt von Gott geschaffen waren,^lund auch mit all ihren Stimmen,^lwie sie nun singen.^lWenn ich dieses große Lob anseh’,^ldann ist mir nirgends weh.^pIch kann es aber nicht leiden,^ldass ein einziger Trost mich berühre,^laußer von meinem Viellieben.^lMeine irdischen Freunde liebe ich^lwie Gefährten der Ewigkeit,^lund meine Feinde liebe ich^lin heiligem Schmerz nach ihrer Seligkeit.^pGott allein hat an allen Dingen genug,^lnur allein die Berührung der Seele^lwird ihm nie genug."
        }
      },
      "4": {
        "Lesehore": {
          "les_buch": "Aus dem Hohenlied.",
          "les_stelle": "6,3-4.9-10;7,7",
          "les_text": "^hLob der Braut^p^r(Stimme der Braut)^0r^lMeinem Geliebten gehöre ich,^lund mir gehört der Geliebte,^lder in den Lilien weidet.^p^r(Stimme des Bräutigams)^0r^lSchön wie Tirza bist du, meine Freundin,^llieblich wie Jerusalem,^lprächtig wie Himmelsbilder.^pEinzig ist meine Taube, die Makellose,^ldie Einzige ihrer Mutter,^ldie Erwählte ihrer Gebärerin.^lErblicken sie die Mädchen,^lsie preisen sie;^lKöniginnen rühmen sie.^pWer ist, die da erscheint wie das Morgenrot,^lwie der Mond so schön,^lstrahlend rein wie die Sonne,^lprächtig wie Himmelsbilder?^lWie schön bist du und wie reizend,^ldu Liebe voller Wonnen!",
          "resp1_1": "Meine Augen warten auf dich, Herr;",
          "resp1_2": "wann darf ich kommen und dein Angesicht schauen?",
          "resp1_3": "Meines Herzens Freude ist es, dir nahe zu sein, denn deine Liebe ist mehr als Leben.",
          "patr_autor": "Reginald Garrigou-Lagrange (†°1964)",
          "patr_werk": "Aus dem Buch „Mystik und christliche Vollendung“.",
          "patr_text": "^hDie vollkommene Liebe^pNach dem heiligen Johannes vom Kreuz findet sich die wahre, auf Erden noch mögliche Vollkommenheit nur in der umbildenden Vereinigung oder geistigen Vermählung {1#Geistl. Gesang, III.°Teil, 22.°Strophe}. Es erfüllt sich da, was im Hohenliede geschrieben steht: „Schon ist der Winter vorüber, der Regen hat aufgehört und ist vergangen, schon erscheinen die Blumen in unserem Lande.“ {2#vgl.°Hld°2,11}^pDas ist die volle Entfaltung der Liebe. Die vollkommene Liebe nimmt Gottes wegen jedes Werk oder jedes Opfer auf sich, sie findet darin sogar eine heilige Freude {3#a.a.O.°24.°Strophe}. Sie schreckt vor dem Tode nicht zurück, sondern wünscht ihn herbei; nichts schreibt sie sich selbst zu, sondern bezieht alles auf Gott. In ihn bildet sie sich gewissermaßen um nach dem Wort des heiligen Paulus: „Wer aber dem Herrn anhängt, ist^w ein ^0wGeist mit ihm.“ {4#vgl.°1°Kor°6,17}^p„Gott selbst ist es, der sich ihr in wunderbarer Herrlichkeit mitteilt und sie umgestaltet. In diesem Stande werden beide eins wie das Glas und der Sonnenstrahl, wie die Kohle und das Feuer, wie das Licht der Sterne und das Sonnenlicht, wenn auch diese Vereinigung noch nicht so wesenhaft und so vollkommen ist wie im anderen Leben.“ {5#a.a.O.°26.°Strophe}",
          "patr_resp1": "Gott ist Licht, und Finsternis gibt es nicht in ihm.",
          "patr_resp2": "Wenn wir im Licht leben, wie er im Licht ist, dann haben wir miteinander Gemeinschaft.",
          "patr_resp3": "Wir wissen, dass wir ihm ähnlich sein werden, denn wir werden ihn sehen, wie er ist.",
          "patr_autor_alt": "Johannes vom Kreuz (†°1591)",
          "patr_werk_alt": "Aus den Dichtungen.",
          "patr_text_alt": "^hDie Flamme lebendiger Liebe^pO Flamme lebendigen Lebens,^ldie zart meine Seele entzündet^lin ihrem tiefen Grunde:^lSchon lohest du, nicht vergebens.^lSchon ist, wie vorverkündet,^lverzehrt, was uns verwebt in innigem Bunde.^pO süße Versehrung! O Wunde,^lzartestes aller Zeichen!^lSanfteste Hand, die dies Geschenk gegeben!^lEwigen Lebens Kunde^lwird alle Schuld begleichen,^ltötend, den Tod verwandelnd in das Leben.^pO Lampen voll Feuergefunkels,^lin die Höhlen der blinden, geliebten^lSinne niederscheinend,^ldurchstrahlend die Schatten des Dunkels^lund für den Geliebten^lSchönheit mit Licht und Wärme seltsam einend.^pWie du, der heimlich im Innern^lallein in mir wohnt, der Verhüllte,^lAugen aufschlägst aus der Nacht!^lWie dein Anhauch aus süßem Erinnern,^lder mit Wohlduft und Glorie gefüllte,^lmich hebt und dich lieben macht!"
        }
      },
      "5": {
        "Lesehore": {
          "les_buch": "Aus dem Hohenlied.",
          "les_stelle": "7,11-14;8,4-7",
          "les_text": "^hLob der Liebe^p^r(Stimme der Braut)^0r^lIch gehöre meinem Geliebten,^lund ihn verlangt nach mir.^lKomm, mein Geliebter,^lwandern wir auf das Land,^lschlafen wir in den Dörfern.^lFrüh wollen wir dann zu den Weinbergen gehen^lund sehen, ob der Weinstock schon treibt,^lob die Rebenblüte sich öffnet,^lob die Granatbäume blühen.^lDort schenke ich dir meine Liebe.^pAch, wärst du doch mein Bruder,^lgenährt an der Brust meiner Mutter.^lTräfe ich dich dann draußen,^lich würde dich küssen;^lniemand dürfte mich deshalb verachten.^lFühren wollte ich dich,^lin das Haus meiner Mutter dich bringen,^ldie mich erzogen hat.^lWürzwein gäbe ich dir zu trinken,^lGranatapfelmost.^lSeine Linke liegt unter meinem Kopf,^lseine Rechte umfängt mich.^p^r(Stimme des Bräutigams)^0r^lIch beschwöre euch, Jerusalems Töchter:^lWas stört ihr die Liebe auf,^lwarum weckt ihr sie,^lehe ihr selbst es gefällt!^pWer ist sie,^ldie aus der Steppe heraufsteigt,^lauf ihren Geliebten gestützt?^lUnter dem Apfelbaum hab’ ich dich geweckt,^ldort, wo deine Mutter dich empfing,^lwo deine Gebärerin in Wehen lag.^pLeg mich wie ein Siegel auf dein Herz,^lwie ein Siegel an deinen Arm!^lStark wie der Tod ist die Liebe,^ldie Leidenschaft ist hart wie die Unterwelt.^lIhre Gluten sind Feuergluten,^lgewaltige Flammen.^pAuch mächtige Wasser^lkönnen die Liebe nicht löschen;^lauch Ströme schwemmen sie nicht weg.^lBöte einer für die Liebe^lden ganzen Reichtum seines Hauses,^lnur verachten würde man ihn.",
          "resp1_1": "Am Himmel erschien ein großes Zeichen: eine Frau, umkleidet mit der Sonne, der Mond unter ihren Füßen.",
          "resp1_2": "Auf ihrem Haupt ein Kranz von zwölf Sternen.",
          "resp1_3": "Sie ist wie das Morgenrot, wie der Mond so schön, strahlend rein wie die Sonne.",
          "patr_autor": "Ernest Hello (†°1885)",
          "patr_werk": "Aus dem Buch „Der Mensch“.",
          "patr_text": "^hDie christliche Liebe^pMan sollte sich doch darüber klar sein: Je schöner ein Wort ist, um so gefährlicher ist es. Es lässt sich gar nicht sagen, welch ungeheure Bedeutung die Sprache hat. Worte sind Brot oder Gift, und die allgemeine Verwirrung ist eines der Kennzeichen unserer Zeit. Durch ihre Nachgiebigkeit werden die Zeichen, die der Sprache zur Verfügung stehen, zu furchtbaren Werkzeugen. Jeden beliebigen Missbrauch kann man mit ihnen treiben, sie widersprechen nicht. Sie lassen sich ruhig entehren, und die Entstellung der Worte offenbart sich lediglich durch die gründliche Unordnung, die sie in der Wirklichkeit anrichtet.^pEs gibt ein Wort des heiligen Paulus, dessen Tiefe unbekannt ist: Der Heide, erklärte er, der Berge versetzte und hätte die Liebe nicht, so wäre er nichts. Dies Wort hat einen Umfang, den nur wenige kennen. Der es gesprochen, wusste um seltsame Geheimnisse.^p„Der Teufel ist der, der nicht liebt“, hat die heilige Theresia gesagt, und die heilige Brigitte hat dies schreckliche Geständnis aus dem Munde des Verfluchten selbst vernommen. Da der Teufel zu Jesus spricht, sagt er ihm die Worte: „Richter, ich bin die Kälte.“^p„Wer nicht liebt, ist nichts“, sagt der heilige Paulus.^pWie verhält sich das Nichts zur Sünde? Welchen Namen trüge die Liebe in einer Sprache, die höher stünde als die unsere? Wäre es nicht ein und derselbe Name? Wie tiefe Geheimnisse auch die fleischliche Liebe hüten mag, in der sittlichen Ordnung ist die Liebe jedenfalls das Gesetz des Lebens. Sie ist der Urgrund selber der Tätigkeit. Hätten die Menschen nicht gar soviel Geschäfte am Halse, so könnten sie vielleicht einen Augenblick über diese Dinge nachdenken. Sie ist zu alltäglich, um bemerkt, zu tief, um verstanden zu werden.^pAber eben deshalb, weil die Liebe^w das ^0werhabene Ding und^w die ^0wWirklichkeit in des Wortes verwegenster Bedeutung, dazu das Knochenmark der Schöpfung ist, gerade deswegen muss es ganz besonders gefährlich sein, wenn die Liebe missbraucht und ihr Name falsch angewendet wird. Das Beste wird, wenn es verdorben wird, zum Allerschlechtesten. Je schöner der Name Liebe, um so schrecklicher ist er! Und wenn er sich nun mit der Macht bewaffnet, die er für das Leben empfing und sie gegen die Wahrheit kehrt, so wird er dem Tode jeden Dienst leisten. Immer dann, wenn man sich mit dem Irrtum unter dem Vorwand, die Menschen zu schonen, verträgt, statt ihn auszurotten, richtet man den Namen der Liebe wider das Licht. Und so schafft man sich womöglich den Vorwand, sich das Schlechte in der eigenen Seele, das Schlechte, das man so gerne hätschelt, zu verzeihen.^pDer Mensch wird gegenüber der Schwäche, die Besitz von ihm ergreifen will, weichlich, sobald es ihm erst einmal zur Gewohnheit geworden ist, die völlige Anpassung an jedwede Schwäche Liebe zu nennen.",
          "patr_resp1": "Auch mächtige Wasser können die Liebe nicht löschen;",
          "patr_resp2": "auch Ströme schwemmen sie nicht weg.",
          "patr_resp3": "Stark wie der Tod ist die Liebe.",
          "patr_autor_alt": "Johannes vom Kreuz (†°1591)",
          "patr_werk_alt": "Aus den Dichtungen.",
          "patr_text_alt": "^hChristus, der junge Hirt, und die Menschheit^pEin junger Hirt, vereinsamt, wacht im Leeren,^lder Freude fern, entfremdet dem Behagen.^lAn seine Hirtin denkt er. Und die Klagen^lder Liebe sind es, die sein Herz verzehren.^pNicht weint er, weil Gedanken ihn versehren^lan Liebe, die so trauernd ihn betrübte,^ldass ihm das Herz wie wund war, weil es liebte.^lEr weint, weil er vergessen ist im Leeren.^pWeil er so ganz vergessen ist im Leeren^lvon seiner schönen Hirtin. Unter Schmerzen^lmisshandeln lässt er sich, doch nur im Herzen^lfühlt er die Liebe ihn mit Leid beschweren.^pEs spricht der junge Hirt: „Weh mir! Entbehren^lmuss ich die Liebe, die mir weit entfernte,^ldie meine Gegenwart nie kennenlernte,^lund darum meiner Brust den Schmerz bescheren.“^pUnd über eine Zeit, an jenem Lehren^lBaum hoch erhöht, die schönen Arme breitend,^ldas Haupt inmitten neigt' er, schwer verscheidend,^ldas Liebesherz erfüllt von Gram und Zähren."
        }
      },
      "7": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Jesaja.",
          "les_stelle": "54,1-12",
          "les_text": "^hDer Segen Gottes für das Volk^pFreu dich, du Unfruchtbare, die nie gebar,^ldu, die nie in Wehen lag.^lBrich in Jubel aus, jauchze!^lDenn die Einsame hat jetzt viel mehr Söhne^lals die Vermählte, spricht der Herr.^lMach den Raum deines Zeltes weit,^lspann deine Zelttücher aus,^lohne zu sparen.^lMach die Stricke lang und die Pflöcke fest!^lDenn nach rechts und links breitest du dich aus.^lDeine Nachkommen werden Völker beerben^lund verödete Städte besiedeln.^lFürchte dich nicht, du wirst nicht beschämt;^lschäme dich nicht, du wirst nicht enttäuscht.^lDenn die Schande in deiner Jugend^lwirst du vergessen,^lan die Schmach deiner Witwenschaft^lwirst du nicht mehr denken.^lDenn der Schöpfer ist dein Gemahl,^l„Herr der Heere“ ist sein Name.^lDer Heilige Israels ist dein Erlöser,^l„Gott der ganzen Erde“ wird er genannt.^lJa, der Herr hat dich gerufen^lals verlassene, bekümmerte Frau.^lKann man denn die Frau verstoßen,^ldie man in der Jugend geliebt hat?,^lspricht dein Gott.^lNur für eine kleine Weile habe ich dich verlassen,^ldoch mit großem Erbarmen hole ich dich heim.^lEinen Augenblick nur^lverbarg ich vor dir mein Gesicht^lin aufwallendem Zorn;^laber mit ewiger Huld habe ich Erbarmen mit dir,^lspricht dein Erlöser, der Herr.^lWie in den Tagen Noachs soll es für mich sein:^lSo wie ich damals schwor,^ldass die Flut Noachs^ldie Erde nie mehr überschwemmen wird,^lso schwöre ich jetzt, dir nie mehr zu zürnen^lund dich nie mehr zu schelten.^lAuch wenn die Berge von ihrem Platz weichen^lund die Hügel zu wanken beginnen –^lmeine Huld wird nie von dir weichen^lund der Bund meines Friedens nicht wanken,^lspricht der Herr, der Erbarmen hat mit dir.^hDas neue Jerusalem^pDu Ärmste, vom Sturm Gepeitschte,^ldie ohne Trost ist,^lsieh her:^lIch selbst lege dir ein Fundament aus Malachit^lund Grundmauern aus Saphir.^lAus Rubinen mache ich deine Zinnen,^laus Beryll deine Tore^lund alle deine Mauern aus kostbaren Steinen.^lAlle deine Söhne werden Jünger des Herrn sein^lund groß ist der Friede deiner Söhne.^lDu wirst auf Gerechtigkeit gegründet sein.^lDu bist fern von Bedrängnis,^ldenn du brauchst dich nicht mehr zu fürchten^lund bist fern von Schrecken;^ler kommt an dich nicht heran.^lWenn dich jemand angreift, misslingt es,^ldenn es geschieht ohne mich;^lwer dich angreift, fällt im Kampf gegen dich.^lIch habe den Schmied erschaffen,^lder das Kohlenfeuer entfacht^lund Waffen erzeugt,^lwie es seinem Handwerk entspricht.^lIch habe auch den, der vernichtet,^lerschaffen, damit er zerstört.^lKeine Waffe wird etwas ausrichten,^ldie man gegen dich schmiedet;^ljede Zunge, die dich vor Gericht verklagt,^lstrafst du Lügen.^lDas ist das Erbteil der Knechte des Herrn:^lVon mir kommt ihre Rettung –^lSpruch des Herrn.",
          "resp1_1": "So spricht der Herr, der Erbarmen hat mit dir:",
          "resp1_2": "meine Gnade wird nie von dir weichen.",
          "resp1_3": "Auch wenn die Hügel zu wanken beginnen,",
          "patr_autor": "Karl Adam (†1966)",
          "patr_werk": "Aus dem Buch „Christus unser Bruder“.",
          "patr_text": "^hUnd das Wort ist Fleisch geworden^pGewiss ist Christus nach der Offenbarung wahrer Gott, als zweite Person der Gottheit Licht vom Lichte. Aber er ist auch wahrer Mensch, nicht bloß dem Vater und dem Heiligen Geist, sondern auch uns wesensgleich. Jesus besitzt nicht nur das Wissen und Wollen Gottes, sondern auch ein rein menschliches Bewusstsein, einen rein menschlichen Willen, ein rein menschliches Gefühlsleben. Er ist ganzer Mensch, wie er vollkommener Gott ist. So ungeschmälert ist diese Menschennatur, dass ihre Vereinigung mit dem göttlichen „Wort“ nur in der Einheit der (göttlichen) Person gründet, das heißt: Im Geheimnis der Menschwerdung erfolgte nicht ohne weiteres auch eine Mitteilung des göttlichen Wesens und der göttlichen Eigenschaften an die Menschheit Christi. Diese Menschheit beharrt vielmehr auch nach ihrer Vereinigung mit dem göttlichen Wort in ihrer rein menschlichen Besonderheit.^pDarin liegt das Unfassbare, Überwältigende der Christusgestalt: Nicht dass die Menschheit in die Person des Wortes aufgenommen wurde, sondern genau gesprochen: dass Gott ganzer, voller Mensch wurde. Nicht der Aufstieg des Menschen zu Gott, sondern das Herabsteigen Gottes zum Menschen ist das Geheimnis. Nicht in der Gottwerdung eines Menschen, sondern in der Menschwerdung Gottes liegt das Wunder, das Ungeheuerliche. Das macht den Christen jubeln: „Und das Wort ist Fleisch geworden.“ {1#Joh 1,14} „Er entäußerte sich selbst, nahm die Natur des Knechtes an, ward den Menschen gleich und am Äußern wie ein Mensch erfunden.“ {2#vgl.°Phil 2,7}^pWarum liegt in der Menschwerdung Gottes das Wesentliche, das Entscheidende? Weil erst in ihr der Wille Gottes, uns zu erlösen, leibhafte Gestalt angenommen hat. Es ist keine Form der Erlösung denkbar, in der Gottes Liebeswille sich so anschaulich, so hinreißend, so wirksam hätte offenbaren können als in der Menschwerdung des ewigen Wortes. So anschaulich – denn was gibt es Anschaulicheres als das Kind in der Krippe, als den Gekreuzigten, als den Auferstandenen? So hinreißend – hätte Gott mehr tun können, als dass er seinen eingeborenen Sohn für uns dahingegeben hat! Und so wirksam – denn indem Gott Mensch wurde, ist die Erlösung nicht bloß als Frohbotschaft angekündigt, sondern ist bereits zur frohen, leuchtenden Wirklichkeit geworden. Wir haben wieder einen neuen Menschen unter uns, der mit reinem Herzen „Vater“ rufen kann und dem es vom Himmel entgegenruft: „Du bist mein geliebtes Kind.“ Indem er als „der Erstgeborene unter vielen Brüdern“ {3#vgl.°Röm 8,29} sein Leben für uns hingab, erwarb er unser eigenes ewiges Leben.",
          "patr_resp1": "Gott hat die Welt so geliebt, dass er seinen einzigen Sohn hingab,",
          "patr_resp2": "damit jeder, der an ihn glaubt, nicht verlorengeht, sondern das ewige Leben hat.",
          "patr_resp3": "Und das Wort ist Fleisch geworden."
        }
      },
      "8": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Jesaja.",
          "les_stelle": "55,1-13",
          "les_text": "^hDie Teilnahme des ganzen Volkes am Heil^pAuf, ihr Durstigen, kommt alle zum Wasser!^lAuch wer kein Geld hat, soll kommen.^lKauft Getreide, und esst,^lkommt und kauft ohne Geld,^lkauft Wein und Milch ohne Bezahlung!^lWarum bezahlt ihr mit Geld,^lwas euch nicht nährt,^lund mit dem Lohn eurer Mühen,^lwas euch nicht satt macht?^lHört auf mich,^ldann bekommt ihr das Beste zu essen^lund könnt euch laben an fetten Speisen.^lNeigt euer Ohr mir zu und kommt zu mir,^lhört, dann werdet ihr leben.^lIch will einen ewigen Bund mit euch schließen^lgemäß der beständigen Huld,^ldie ich David erwies.^lSeht her: Ich habe ihn^lzum Zeugen für die Völker gemacht,^lzum Fürsten und Gebieter der Nationen.^lVölker, die dich nicht kennen, wirst du rufen;^lVölker, die dich nicht kennen, eilen zu dir,^lum des Herrn, deines Gottes,^ldes Heiligen Israels willen,^lweil er dich herrlich gemacht hat.^p^hMahnung zur Umkehr und zum Vertrauen auf Gottes Wort^pSucht den Herrn, solange er sich finden lässt,^lruft ihn an, solange er nahe ist.^lDer Ruchlose soll seinen Weg verlassen,^lder Frevler seine Pläne.^lEr kehre um zum Herrn,^ldamit er Erbarmen hat mit ihm,^lund zu unserem Gott,^ldenn er ist groß im Verzeihen.^lMeine Gedanken sind nicht eure Gedanken,^lund eure Wege sind nicht meine Wege –^lSpruch des Herrn.^lSo hoch der Himmel über der Erde ist,^lso hoch erhaben^lsind meine Wege über eure Wege^lund meine Gedanken über eure Gedanken.^lDenn wie der Regen und der Schnee^lvom Himmel fällt^lund nicht dorthin zurückkehrt,^lsondern die Erde tränkt^lund sie zum Keimen und Sprossen bringt,^lwie er dem Sämann Samen gibt^lund Brot zum Essen,^lso ist es auch mit dem Wort,^ldas meinen Mund verlässt:^lEs kehrt nicht leer zu mir zurück,^lsondern bewirkt, was ich will,^lund erreicht all das,^lwozu ich es ausgesandt habe.^pVoll Freude werdet ihr fortziehen,^lwohlbehalten kehrt ihr zurück.^lBerge und Hügel^lbrechen bei eurem Anblick in Jubel aus,^lalle Bäume auf dem Feld klatschen Beifall.^lStatt Dornen wachsen Zypressen,^lstatt Brennnesseln Myrten.^lDas geschieht zum Ruhm des Herrn^lals ein ewiges Zeichen,^ldas niemals getilgt wird.",
          "resp1_1": "Neigt euer Ohr mir zu und kommt zu mir,",
          "resp1_2": "hört auf mich, dann werdet ihr leben.",
          "resp1_3": "Ich will einen ewigen Bund mit euch schließen.",
          "patr_autor": "Karl Adam (†1966)",
          "patr_werk": "Aus dem Buch „Christus unser Bruder“.",
          "patr_text": "^hIch bin der Weinstock, ihr seid die Reben^pDie Kette der vielen tausend Generationen, gleich in ihrem ersten Glied losgerissen von Gott, ist nunmehr wieder an einem Punkt mit Gott verbunden, derart fest, derart wesenhaft mit ihm verbunden, dass sie nicht mehr abzubrechen ist. In diesem Einen ist die ganze Menschheit nun wieder aus dem Nein in das Ja erhoben, aus dem Nichts in die Fülle, aus dem Unwert in den Wert. So ward sie in der ganzen Breite und Tiefe ihres Seins eine neue Einheit in ihm. Dieser Eine ist die neue Grundlage, der neue Quellpunkt, die neue Wurzel der Menschen. Wie die Reben aus dem Weinstock, so sprießen sie, durch die Taufe „mit ihm verwachsen“ {1#vgl.°Röm 6,5}, aus ihm hervor. Er ist das Haupt, sie sind die Glieder. Es gibt grundsätzlich und seinshaft keinen einzelnen, keinen vereinzelten Christen mehr, es gibt nur mehr Glieder Christi, Glieder eines Hauptes. Mit dem einen Haupt ist auch der eine Leib gesetzt.^pDas ist der Kern der Frohen Botschaft: nicht nur, dass in Jesus Christus Gott leiblich unter uns wohnt, nicht nur, dass wir „die Herrlichkeit Gottes“ auf seinem Antlitz schauen, sondern dass dieser Gott unser Bruder ist, mit dem wir Blutgemeinschaft haben, das Haupt unseres Leibes. Wohl ist die Gottheit ein Wesentliches im Christusbild. Wäre Christus nicht auch wahrer Gott, so wäre die unendliche Kluft zwischen Gott und dem Geschöpf in der Person Jesu nicht überbrückt. Das gab den antiarianischen Kämpfern ihren starken Antrieb und ihren heißen Atem, diese Überzeugung: wenn der Erlöser nicht selber wahrer Gott ist, kann er uns auch nicht zu Gott erheben und uns am göttlichen Leben teilgeben.^pAber diese göttliche Natur ist nicht der ganze Jesus. Sie ist vielmehr nur der goldene Hintergrund, auf dem sich sein menschheitliches Wirken abhebt und von dem es seine heimliche Kraft, seine Heilandsmacht bezieht. Sie ist sozusagen das ruhende Moment im Bilde Jesu. Das Zündende an ihm ist die Erscheinung des Göttlichen im Menschlichen, das Unglaubliche, dass wir einen Menschen unter uns haben, der Gott ist; dass in seiner Person und durch sein Werk die ganze Menschheit eine gottverbundene Einheit wurde, dass wir alle durch diesen einen den Zugang zum Vater haben.",
          "patr_resp1": "Die Herrlichkeit, die du mir gegeben hast, habe ich ihnen gegeben, damit sie eins sind, wie wir eins sind,",
          "patr_resp2": "ich in ihnen und du in mir.",
          "patr_resp3": "Heiliger Vater, bewahre sie in deinem Namen, damit sie eins seien wie wir."
        }
      },
      "9": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Jesaja.",
          "les_stelle": "56,1-8",
          "les_text": "^hVerheißung an die Fremden und Kinderlosen^pSo spricht der Herr:^lWahrt das Recht, und sorgt für Gerechtigkeit,^ldenn bald kommt von mir das Heil,^lmeine Gerechtigkeit wird sich bald offenbaren.^lGlücklich der Mann, der so handelt,^lwohl dem Menschen, der daran festhält,^lden Sabbat zu halten und nie zu entweihen^lund seine Hand vor jeder bösen Tat zu bewahren.^pDer Fremde,^lder sich dem Herrn angeschlossen hat,^lsoll nicht sagen:^lSicher wird der Herr mich ausschließen^laus meinem Volk.^lDer Verschnittene soll nicht sagen:^lIch bin nur ein dürrer Baum.^lDenn so spricht der Herr:^lDen Verschnittenen, die meine Sabbate halten,^ldie gerne tun, was mir gefällt,^lund an meinem Bund festhalten,^lihnen allen errichte ich in meinem Haus^lund in meinen Mauern ein Denkmal,^lich gebe ihnen einen Namen,^lder mehr wert ist als Söhne und Töchter:^lEinen ewigen Namen gebe ich ihnen,^lder niemals ausgetilgt wird.^pDie Fremden,^ldie sich dem Herrn angeschlossen haben,^ldie ihm dienen und seinen Namen lieben,^lum seine Knechte zu sein,^lalle, die den Sabbat halten^lund ihn nicht entweihen,^ldie an meinem Bund festhalten,^lsie bringe ich zu meinem heiligen Berg^lund erfülle sie in meinem Bethaus mit Freude.^lIhre Brandopfer und Schlachtopfer^lfinden Gefallen auf meinem Altar,^ldenn mein Haus wird ein Haus des Gebets^lfür alle Völker genannt.^lSpruch Gottes, des Herrn,^lder die verstoßenen Israeliten sammelt:^lNoch mehr,^lals ich schon von ihnen gesammelt habe,^lwill ich dort versammeln.",
          "resp1_1": "Auf, lasst uns hinaufziehen zum Berg des Herrn, zum Haus unseres Gottes.",
          "resp1_2": "Er lehre uns seine Wege, und wir wollen auf seinen Pfaden gehen.",
          "resp1_3": "Der Herr baut Jerusalem wieder auf, er sammelt die Zerstreuten Israels.",
          "patr_autor": "Karl Adam (†1966)",
          "patr_werk": "Aus dem Buch „Christus unser Bruder“.",
          "patr_text": "^hAm Ende übergibt Christus das Reich dem Vater^pDarin liegt der tiefste Sinn des Christusdogmas beschlossen: durch Christus hin zum Vater. Die entscheidende Bedeutung Christi für uns, für unsere Weltzeit, ist nicht die, dass er schon jetzt als der menschgewordene Gott die Anbetung der Menschen entgegennimmt, sondern ist die, dass er als der neue Mensch alle Heilswilligen seiner Liebe eingliedert und als König des neuen Gottesvolkes dem Vater entgegenführt. Die sogenannte eschatologische Spannung zwischen dem Diesseits und Jenseits, zwischen der Zeit der Aussaat und der Ernte, ist zugleich eine christologische Spannung: die Spannung zwischen dem „Menschen“ Christus Jesus hier und dem dreifaltigen Gott dort, zwischen der Königsherrschaft des Menschgewordenen hier und der reinen Gottesherrschaft dort.^pEs hat seinen tiefen Sinn zu sagen: Das Christentum ist die Zeit des Werdens, der Selbstentfaltung, der Selbstverwirklichung des Menschen Christus Jesus. Im Lehr-, Priester- und Hirtenamt der Kirche setzt der Verklärte sein messianisches Wirken fort. In ihr – in der Kirche – erbaut er sich seinen Leib. Sie – die Kirche – ist seine Fülle, wie der Apostel sagt {1#vgl.°Eph 1,23}. Solange diese Weltzeit nach des Vaters Willen währt, ist er noch nicht fertig, noch nicht vollendet. Er ist noch immer am Werk, immer noch unser Mittler. Immerzu, durch alle Orte und Zeiten, vollendet er sich in immer neuen Gliedern, bis nach Gottes unerforschlichem Ratschluss mit dem Schlussakt des göttlichen Äon die neue Weltzeit anhebt.^pNun erst ist mit der eschatologischen die christologische Spannung vorbei, die Zeit des Werdens und Reifens Christi, die Zeit seiner Heilandsarbeit, seiner Mittlerschaft, seines Hohepriestertums. Nun beginnt die Zeit des dreifaltigen Gottes. Nun wird er als das Haupt des Leibes, als der König des neuen Israel die Seinen dem Vater zuführen und seine Herrschaft dem dreieinigen Gott übergeben: „Wenn alles ihm wird untergeordnet sein, dann wird auch er selbst dem untergeordnet sein, der ihm alles untergeordnet hat, auf dass Gott alles in allem.“ {2#vgl.°1 Kor 15,28}",
          "patr_resp1": "Ihn, der als Haupt alles überragt, hat er über die Kirche gesetzt.",
          "patr_resp2": "Alles hat er ihm zu Füßen gelegt.",
          "patr_resp3": "Sie ist sein Leib und wird von ihm erfüllt, der das All ganz und gar beherrscht."
        }
      },
      "10": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Jesaja.",
          "les_stelle": "59,15-21",
          "les_text": "^hHindernisse für das kommende Heil^pJede Redlichkeit wird vermisst,^lwer das Böse meidet, wird ausgeraubt.^lDas hat der Herr gesehen,^lund ihm missfiel, dass es kein Recht mehr gab.^lEr sah, dass keiner sich regte,^lund war entsetzt, dass niemand einschritt.^lDa half ihm sein eigener Arm,^lseine eigene Gerechtigkeit war seine Stütze.^lEr legte die Gerechtigkeit an wie einen Panzer^lund setzte den Helm der Hilfe auf.^lEr machte die Rache zu seinem Gewand^lund umhüllte sich mit leidenschaftlichem Eifer^lwie mit einem Mantel.^lWie es die Taten verdienen,^lso übt er Vergeltung:^ler zürnt seinen Gegnern^lund vergilt seinen Feinden;^lbis hin zu den Inseln übt er Vergeltung.^lDann fürchtet man im Westen^lden Namen des Herrn^lund im Osten seine Herrlichkeit.^lJa, er kommt wie ein reißender Strom,^lden der Sturm des Herrn vor sich hertreibt.^lDoch für Zion kommt er als Erlöser^lund für alle in Jakob,^ldie umkehren von ihrer Sünde –^lSpruch des Herrn.^lDas ist der Bund, den ich mit ihnen schließe,^lspricht der Herr:^lMein Geist, der auf dir ruht,^lsoll nicht von dir weichen;^lund meine Worte,^ldie ich dir in den Mund gelegt habe,^lsollen immer in deinem Mund bleiben^lund im Mund deiner Kinder^lund im Mund deiner Enkel,^ljetzt und in Ewigkeit – spricht der Herr.",
          "resp1_1": "Vom Zion wird der Retter kommen und die Gottlosigkeit aus Jakob wegschaffen.",
          "resp1_2": "Dies ist mein Bund für sie, wenn ich ihre Sünden wegnehme.",
          "resp1_3": "Ganz Israel wird gerettet; denn Gottes Verheißung bleibt bestehen.",
          "patr_autor": "John Henry Kardinal Newman (†1890)",
          "patr_werk": "Aus dem Buch „Betrachtungen und Gebete“.",
          "patr_text": "^hJesu vertrauter Umgang mit den Menschen^pDer heilige Johannes der Täufer sprach in seiner Predigt von einem, der zu den Menschen kommen und in ganz anderer Weise zu ihnen sprechen werde. Er werde sich nicht von ihnen trennen und als ein höheres Wesen zur Schau stellen, sondern ihr Bruder sein; Fleisch von ihrem Fleisch, einer unter vielen Brüdern, der aus ihrer Mitte kommt und zu ihnen gehört. Ja, er war schon unter ihnen: „Mitten unter euch steht einer, den ihr nicht kennt.“ {1#Joh 1,26} Dieser Größere nannte sich selbst den Menschensohn. Er war zufrieden, in allem wie ein Mensch befunden zu werden, obwohl er der Allerhöchste war. Der heilige Johannes und die anderen Evangelisten, deren Berichte über ihn ihrem Charakter nach sonst so verschieden sind, stimmen darin auffallend überein. Der Täufer wies ausdrücklich auf Jesus hin, nicht vor der Menge, sondern vor einem oder zweien seiner Jünger, die sich dann aufmachen, Jesus zu suchen, und die Erlaubnis erhalten, ihm nach Hause zu folgen {2#vgl.°Joh°1,36–39}.^pAllmählich fängt Jesus an, sich zu erkennen zu geben und seine Herrlichkeit in Wundern zu offenbaren. Aber wo? Bei einer Hochzeit, wo es nicht selten zu Ausschweifungen kam, wie der Speisemeister andeutet {3#vgl.°Joh 2,10}. Und wie? Indem er den Wein vermehrt, das Mittel solcher Ausschweifungen. Er nahm an dieser Hochzeit nicht als Lehrer teil, sondern als Gast und sozusagen aus gesellschaftlichen Rücksichten, denn er war in Begleitung seiner Mutter.^pDies alles geschah, o geliebter Herr und Heiland, weil du die menschliche Natur, die du ins Dasein gerufen, so sehr geliebt hast. Du hast uns nicht allein geliebt als deine Geschöpfe, als das Werk deiner Hand, sondern als Menschen. Du liebst alle, denn alle hast du erschaffen, den Menschen aber liebst du über alles.^pWie ist das möglich, o Herr? Was hat der Mensch voraus vor andern? Wer kann die Tiefe deiner Ratschlüsse und Pläne ergründen? Du hast die Menschen mehr geliebt als die Engel; darum hast du nicht Engelsgestalt angenommen, als du dich zu unserer Erlösung offenbartest; du hast auch verschmäht, eine Gestalt, eine Lebensweise oder einen Beruf zu wählen, der über dem gewöhnlichen menschlichen Dasein lag – du wolltest weder als Einsiedler noch als Levit oder Priester, als Mönch oder Einsiedler zu uns kommen, sondern in der Fülle und im wahren Sinn der Menschennatur, die du so sehr geliebt hast. Du bist nicht bloß als vollkommener, sondern als eigentlicher Mensch gekommen, mit all unserer Gebrechlichkeit, unseren Gefühlen und Neigungen, die Sünde allein ausgenommen.^pDu bist mein älterer Bruder. Was sollte ich fürchten? Du bist jetzt im Himmel noch derselbe wie einst auf Erden: der allmächtige Gott und doch das kleine Kind – der Allheilige und doch ein fühlender, ein ganzer Mensch.",
          "patr_resp1": "Mitten unter euch steht einer, den ihr nicht kennt.",
          "patr_resp2": "Seht das Lamm Gottes, das hinwegnimmt die Sünde der Welt.",
          "patr_resp3": "Er kommt nach mir, und ich bin nicht wert, die Riemen seiner Sandalen zu lösen."
        }
      },
      "11": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Baruch.",
          "les_stelle": "4,5-29",
          "les_text": "^hJerusalems Klage^pHab Vertrauen, mein Volk, du trägst den Namen Israel. Ihr wurdet verkauft an die Völker, doch nicht zur Vernichtung. Weil ihr Gott erzürnt habt, wurdet ihr den Feinden preisgegeben. Denn ihr habt euren Schöpfer zum Zorn gereizt, da ihr den Dämonen und nicht Gott Opfer dargebracht. Euren Ernährer habt ihr vergessen, den ewigen Gott. Ihr habt auch Jerusalem betrübt, die euch aufzog. Denn als sie Gottes Zorn über euch hereinbrechen sah, sprach sie: Hört, ihr Nachbarn Zions! Gott hat großes Leid über mich gebracht. Denn ich musste sehen, dass meine Söhne und Töchter verschleppt wurden, wie es der Ewige über sie verhängt hat. Mit Freude habe ich sie großgezogen, mit Weinen und Klagen musste ich sie ziehen lassen, und von vielen verlassen; der Sünden meiner Kinder wegen bin ich vereinsamt, denn sie sind abgewichen vom Gesetz Gottes. Seine Satzungen haben sie nicht anerkannt. Sie gingen nicht die Wege der Gottesfurcht. Die Pfade der Zucht nach seiner rechten Weisung beschritten sie nicht.^pKommt, ihr Nachbarn Zions! Bedenkt die Gefangenschaft, die der Ewige über meine Söhne und Töchter verhängt hat. Denn er ließ ein Volk von weit her über sie kommen, ein rohes Volk mit fremder Sprache: es hatte keine Scheu vor Greisen, kein Mitleid mit Kindern. Es führte die Lieblinge der Witwe weg, raubte der Vereinsamten die Töchter. Ich aber, wie könnte ich euch helfen? Nur er, der das Unheil über euch brachte, kann euch der Hand eurer Feinde entreißen. So geht, meine Kinder, geht fort! Ich bleibe ja einsam zurück. Abgelegt habe ich das Gewand froher Zeiten, angezogen das Bußkleid meines Elends. Zum Ewigen will ich rufen, solange ich lebe.^hJerusalem Hoffnung^pHabt Vertrauen, meine Kinder, schreit zu Gott! Denn schon wurde mir von ihm Freude zuteil wegen der Erbarmung, die bald zu euch kommt vom Ewigen, eurem Retter. In Trauer und in Tränen ließ ich euch ziehen, doch wird mir Gott euch wiederschenken zur Freude und zum Jubel für immer. Wie jetzt die Nachbarn Zions eure Gefangenschaft vor Augen haben, so werden sie bald die Rettung sehen, die von eurem Gott kommt; mit großer Herrlichkeit kommt sie zu euch und mit dem Glanz des Ewigen. Meine Kinder, ertragt geduldig den Zorn, der von Gott her über euch kam. Der Feind hat dich verfolgt, bald aber wirst du seinen Untergang sehen und den Fuß auf seinen Nacken setzen.^pMeine zarten Kinder mussten auf rauhen Wegen ziehen. Sie wurden fortgeschleppt wie eine Herde, vom Feinde geraubt. Hab Vertrauen, meine Kinder, schreit zu Gott! Denn er, der euch verhängt hat, wird wieder an euch denken. Wie euer Sinn auf den Abfall von Gott gerichtet war, so zeigt nun zehnfachen Eifer, umzukehren und ihn zu suchen. Er, der über euch das Unheil gebracht hat, wird mit eurer Rettung auch ewige Freude bringen.",
          "resp1_1": "Warum schreist du so laut, Tochter Zion? Gibt es keinen König bei dir, dass dich Wehen treffen wie eine Gebärende?",
          "resp1_2": "Du wirst gerettet werden, der Herr wird dich loskaufen aus der Hand deiner Feinde.",
          "resp1_3": "Hab Vertrauen, Jerusalem! Der dir den Namen gab, wird dich trösten.",
          "patr_autor": "John Henry Kardinal Newman (†1890)",
          "patr_werk": "Aus dem Buch „Betrachtungen und Gebete“.",
          "patr_text": "^hJesus, das Licht der Seele^pIch bete dich an, o mein Gott, als das wahre und einzige Licht. Von Ewigkeit zu Ewigkeit, ehe es ein Geschöpf gab, warst du allein – allein, aber nicht einsam, denn du warst immer Drei in Einem, du warst das unendliche Licht. Es gab nichts, was dich anschauen konnte, als du selbst. Der Vater sah das Licht im Sohn und der Sohn im Vater.^pWie du am Anfang warst, so bist du noch heute: ganz verschieden von den Geschöpfen in deinem unerschaffenen Glanze. Alles Geschaffene ist nur ein Schatten von dir. Auch die Engel in all ihrer Pracht sind nichts als armselige und unvollkommene Abbilder von dir. Sie verblassen und dunkeln vor dir.^pMir ist es nicht einmal möglich, in die Sonne zu schauen, und doch ist sie nur ein niederes, sinnliches Bild von dir. Wie wäre ich imstande, einen Engel anzuschauen! Und wie könnte ich die Augen zu dir erheben und leben? Wie Gras würde ich verdorren, wenn ich in das Licht deines Angesichtes versetzt würde. O gnädiger Gott, wer darf dir nahen in deiner Herrlichkeit – doch wie soll ich dir ferne bleiben?^pWie kann ich dir ferne bleiben? Denn du, der Engel Licht, bist auch das einzige Licht meiner Seele. Du erleuchtest jeden Menschen, der in diese Welt kommt {1#vgl.°Joh 1,9}. Ohne dich umgibt mich dunkle Nacht, eine Finsternis wie in der Hölle. Ich welke und verdorre, wenn du ferne bist. Nur wenn dein Licht mir aufgeht, lebe ich wieder auf. Du aber kommst und gehst nach deinem Gefallen. O mein Gott, ich kann dich nicht halten. Ich kann nur bitten zu bleiben: „Bleib bei uns, es wird bald Abend!“ {2#vgl.°Lk 24,29} Verweile bis zum Morgen und geh nicht fort, ohne mir deinen Segen zu geben! Bleibe bei mir in diesem dunklen Tal, bis zu meinem Tode, wenn die Finsternis nicht von dir ist, kommt über mich. Leuchte mir, o immer brennendes und nie erlöschendes Feuer, und ich werde anfangen, durch dein Licht und in ihm das Licht zu sehen und dich wahrhaft zu erkennen als die Quelle des Lichtes!^pBleibe bei mir! Dann werde ich selber auch leuchten, wie du geleuchtet hast, werde andern ein Licht sein. All dieses Licht ist von dir, o Jesus. Du bist es, der durch mich andern leuchtet. O gib, dass ich dich so verherrliche, wie es dir am besten gefällt, indem ich allen um mich leuchte! Lehre mich, dein Lob, deine Wahrheit und deinen Willen kundzutun! Gib, dass ich dich verkündige – nicht durch Worte, sondern durch mein Beispiel und die offenbare Fülle der Liebe, die mein Herz für dich bewegt!",
          "patr_resp1": "Ohne dich, o Herr, umgibt mich dunkle Nacht;",
          "patr_resp2": "bleibe bei uns, bis die Finsternis weicht.",
          "patr_resp3": "Wenn dein Licht mir aufgeht, lebe ich wieder auf."
        }
      },
      "12": {
        "Lesehore": {
          "les_buch": "Aus dem Buch Baruch.",
          "les_stelle": "4,30-5,9",
          "les_text": "^hFreude des neuen Jerusalem^pHab Vertrauen, Jerusalem! Der dir den Namen gab, wird dich trösten. Unglück über jene, die dir Böses taten und über deinen Sturz sich freuten! Unglück über die Städte, zu deren Sklaven deine Kinder wurden! Unglück über jene Stadt, die deine Söhne als Sklaven aufgenommen hat! Wie sie sich freute über deinen Sturz, frohlockte über deinen Fall, so wird sie ihre eigene Verwüstung betrauern müssen. Ich nehme ihr den Jubel der Volksmenge; ihr Prahlen wandelt sich in Jammer. Denn Feuer vom Ewigen wird über sie kommen für viele Tage, und Dämonen werden dort hausen für lange Zeit.^pBlick nach Osten, Jerusalem! Schau die Freude, die von Gott zu dir kommt. Siehe, deine Söhne, die du einst fortziehen ließest, kehren zurück; sie kommen, vom Aufgang der Sonne bis zum Untergang, gesammelt durch das Wort des Heiligen; sie freuen sich über die Herrlichkeit des Herrn.^pLeg ab, Jerusalem, das Kleid deiner Trauer und deines Elends und bekleide dich mit dem Schmuck der Herrlichkeit, die Gott dir für immer verleiht. Leg den Mantel der göttlichen Gerechtigkeit an; setz dir die Krone der Herrlichkeit des Ewigen aufs Haupt! Denn Gott will deinen Glanz dem ganzen Erdkreis unter dem Himmel zeigen. Gott gibt dir für immer den Namen: Friede der Gerechtigkeit und Herrlichkeit der Gottesfurcht.^pSteh auf, Jerusalem, und steig auf die Höhe! Schau nach Osten und sieh deine Kinder: Vom Untergang der Sonne bis zum Aufgang hat das Wort des Heiligen sie gesammelt. Sie freuen sich, dass Gott an sie gedacht hat. Denn zu Fuß zogen sie fort von dir, weggetrieben von Feinden; Gott aber bringt sie heim zu dir, ehrenvoll getragen wie in einem königlichen Sänfte. Denn Gott hat befohlen: Senken sollen sich alle hohen Berge und die ewigen Hügel, und heben sollen sich die Täler zu ebenem Land, so dass Israel unter der Herrlichkeit Gottes sicher dahinziehen kann. Wälder und duftende Bäume aller Art spenden Israel Schatten auf Gottes Geheiß. Denn Gott führt Israel heim in Freude, im Licht seiner Herrlichkeit; Erbarmen und Gerechtigkeit kommen von ihm.",
          "resp1_1": "Ich will allezeit bei dir sein, denn du hast meine Rechte erfasst.",
          "resp1_2": "Herr, nach deinem Ratschluss geleitest du mich und nimmst mich auf in deine Herrlichkeit.",
          "resp1_3": "Seht, welche Liebe uns der Vater geschenkt hat: Wir heißen seine Kinder, und wir sind es.",
          "patr_autor": "John Henry Kardinal Newman (†1890)",
          "patr_werk": "Aus dem Buch „Betrachtungen und Gebete“.",
          "patr_text": "^hJesus Christus ist derselbe gestern, heute und in Ewigkeit^pAlles hier auf Erden unterliegt der Veränderung. Ich bekenne es, o Herr, ich glaube es, und je länger ich lebe, desto mehr empfinde ich es. Vor deinen Augen, o über alles ehrwürdiger Gott, liegt meine ganze Zukunft offen da. Du weißt alles, was über mich kommt, jedes Jahr und jeden Tag, bis zur letzten Stunde. Mir ist es verborgen, wie mein Leben sich gestaltet, eines aber weiß ich, dass mein Leben dir von fortwährender Veränderung erzählt. Ich weiß nicht, wie lang ich lebe. Ich werde vorwärts gedrängt, ob ich will oder nicht, durch steten Wechsel. O mein Gott, worauf kann ich mich verlassen? Hier ist nichts, auf das ich vertrauen könnte. Ja, ich glaube sogar, wenn ich mich auf etwas Irdisches verlassen wollte, würde es mir eben deshalb genommen.^pAlles außer dir, o Herr, ist veränderlich, du allein bestehst. Ewig bist du derselbe. Immer und ewig der wahre Gott der Menschen, ohne jede Veränderung. Du bist das auserlesenste, das kostbarste, das einzige Gut, das allein Bestand hat. Das Geschöpf ändert sich, der Schöpfer nicht. Nur wenn das Geschöpf in dir bleibt, kann es der Veränderung Einhalt tun. Die Engel schauen dich und bleiben im Frieden, und darum ist ihre Seligkeit vollkommen. Sie verlieren sie nie, weil sie dich nicht verlieren können. Jede Angst und Sorge ist ihnen fremd, denn ihre Liebe ist der Schöpfer; nicht irgendein Wesen der Zeit und der Sinne, sondern „Jesus Christus ist derselbe gestern, heute und in Ewigkeit.“ {1#Hebr 13,8}^pMein Herr und mein einziger Gott, mein Gott und alles, gib, dass ich nie Eitelkeit nachjage! Alles Irdische ist Eitelkeit und Schatten. Gib nicht zu, dass ich mein Herz an Irdisches hänge! Nichts darf mich von dir trennen. Halte mein ganzes Wesen fest! Bewahre das übermäßig schwache Herz und den ganz haltlosen Geist in deiner göttlichen Hut! Zieh mich an dich am Morgen, am Mittag und in der Nacht, früh und spät, und tröste mich! Sei du mein hellstrahlendes Licht, zu dem ich aufschaue um Führung und Frieden!^pGib mir Liebe zu dir, o Herr Jesus, eine reine und innige Hingabe an dich! Gib, dass ich dich liebe mit noch größerem Eifer, als die Menschen dieser Welt das Irdische lieben! Schenke mir eine ebensolche Innigkeit und Beständigkeit in der Liebe zu dir, wie die Menschen sie preisen, wenn ihr Gegenstand von der Erde ist! Lass mich erkennen und tief empfinden, dass du bist meine einzige Freude und meine einzige Zuflucht, meine einzige Kraft und Tröstung und Hoffnung, meine einzige Furcht und meine einzige Liebe!",
          "patr_resp1": "Gott ist die Liebe!",
          "patr_resp2": "Wer in der Liebe bleibt, bleibt in Gott, und Gott bleibt in ihm.",
          "patr_resp3": "Die Liebe Gottes wurde unter uns dadurch offenbar, dass Gott seinen einzigen Sohn in die Welt gesandt hat, damit wir durch ihn leben."
        }
      }
    },
    "12": {
      "17": {
        "Lesehore": {}
      },
      "18": {
        "Lesehore": {}
      },
      "19": {
        "Lesehore": {}
      },
      "20": {
        "Lesehore": {}
      },
      "21": {
        "Lesehore": {}
      },
      "22": {
        "Lesehore": {}
      },
      "23": {
        "Lesehore": {}
      },
      "24": {
        "Lesehore": {}
      },
      "29": {
        "Lesehore": {
          "les_buch": "Aus dem Hohelied.",
          "les_stelle": "1,1-8",
          "les_text": "^hDie Braut Christi ist die Kirche;^lsie verlangt nach der Liebe ihres Königs^p^r(Stimme der Braut)^0r^lMit Küssen seines Mundes bedecke er mich,^lsüßer als Wein ist deine Liebe.^lKöstlich ist der Duft deiner Salben,^ldein Name hingegossenes Salböl;^ldarum lieben dich die Mädchen.^lZieh mich her hinter dir! Lass uns eilen!^lDer König führt mich in seine Gemächer.^lJauchzen lass uns, deiner uns freuen,^ldeine Liebe höher rühmen als Wein.^lDich liebt man zu Recht.^pBraun bin ich, doch schön,^lihr Töchter Jerusalems,^lwie die Zelte von Kedar,^lwie Salomos Decken.^lSchaut mich nicht so an,^lweil ich gebräunt bin.^lDie Sonne hat mich verbrannt.^lMeiner Mutter Söhne waren mir böse,^lließen mich Weinberge hüten;^lden eigenen Weinberg konnte ich nicht hüten.^pDu, den meine Seele liebt,^lsag mir: Wo weidest du die Herde?^lWo lagerst du am Mittag?^lWozu soll ich erst umherirren^lbei den Herzen deiner Gefährten?^p^r(Stimme des Bräutigams)^0r^lWenn du das nicht weißt, ^ldu schönste der Frauen,^ldann folge den Spuren der Schafe,^ldann weide dein Zicklein^ldort, wo die Hirten lagern.",
          "resp1_1": "Ich habe dich erwählt auf ewig,",
          "resp1_2": "ich schließe meinen Bund mit dir in Güte und Erbarmen,",
          "resp1_3": "An die Zeit deiner Jugend will ich denken, an die Liebe deiner Brautzeit, wie du mir in die Wüste gefolgt bist.",
          "patr_autor": "Gregor der Große († 604)",
          "patr_werk": "Aus einer Auslegung zum Hohelied.",
          "patr_text": "^hIn Bild und Gleichnis spricht die Schrift von°der°Gottesliebe^pNachdem das Menschengeschlecht aus dem Paradies verstoßen und auf die Pilgerstraße dieses gegenwärtigen Lebens gekommen war, war das Herz für die Einsicht in geistliche Wirklichkeiten erblindet. Wenn eine menschliche Stimme diesem erblindeten Herzen sagte: „Geh auf den Wegen Gottes!“ oder: „Liebe Gott mit ganzem Herzen!“, wie es das Alte Testament tut, so könnte es, einmal verstoßen und in der Kälte des Unglaubens erstarrt, das, was es da hört, gar nicht begreifen. Darum spricht das Wort Gottes zu der erstarrten und kalten Seele in Bild und Rätselwort. Durch den Hinweis auf Dinge, mit denen sie vertraut ist, gibt es ihr insgeheim die Liebe ein, die sie nicht kennt.^pDie Bildrede baut der Seele, die fern von Gott ist, gleichsam eine Leiter oder eine Stiege, damit sie sich auf dieser zu Gott begeben kann. Die Ohren werden vorgehoben, und so erkennt die Seele in solchen Worten etwas, was auf ihrer Ebene liegt, und erfasst im tieferen Sinn der Worte etwas, was ihre Ebene übersteigt. Sie erkennt etwas, was sie nicht abschreckt, und versteht dadurch, was ihr unbekannt ist. Durch die irdischen Worte erhebt sie sich über das Irdische. In die uns bekannten Wirklichkeiten, aus denen die Bildreden genommen sind, kleiden sich die Offenbarungen Gottes; indem wir die äußeren Worte verstehen, gelangen wir zu innerer Erkenntnis.^pAlso werden in diesem Buch, das den Titel das „Hohelied“ trägt, Worte einer leiblichen Liebe gebraucht, damit die Seele durch Worte, die ihr vertraut sind, aus der Erstarrung gelöst, wieder warm wird und durch die Worte über die irdische Liebe zur höheren Liebe gelangt. Um unser Herz in heiliger Liebe zu entzünden, gebraucht Gott sogar Worte, die von unserer irdischen Liebe sprechen. Aber wenn er sich in seiner Sprache so zu uns herab lässt, will er uns auf die höhere Ebene des Verstehens führen. Denn aus den Worten der irdischen Liebe lernen wir, zu welcher Glut göttlicher Liebe wir entbrennen sollen.",
          "patr_resp1": "Du, den meine Seele liebt,",
          "patr_resp2": "sage mir, wo du lagerst am Mittag,",
          "patr_resp3": "Wer meine Gebote hat und sie hält, der ist es, der mich liebt."
        }
      },
      "30": {
        "Lesehore": {
          "les_buch": "Aus dem Hohelied.",
          "les_stelle": "1,12-2,7",
          "les_text": "^hGespräch Christi und der Kirche^p^r(Stimme der Braut)^0r^lSolange der König an der Tafel liegt,^lgibt meine Narde ihren Duft.^lMein Geliebter ruht wie ein Beutel mit Myrrhe^lan meiner Brust.^lEine Hennablüte ist mein Geliebter mir^laus den Weinbergen von En-Gedi.^p^r(Stimme des Bräutigams)^0r^lSchön bist du, meine Freundin,^lja, du bist schön.^lZwei Tauben sind deine Augen.^p^r(Stimme der Braut)^0r^lSchön bist du, mein Geliebter,^lverlockend.^lFrisches Grün ist unser Lager.^lZedern sind die Balken unseres Hauses,^lZypressen die Wände.^lIch bin eine Blume auf den Wiesen des Scharon,^leine Lilie der Täler.^p^r(Stimme des Bräutigams)^0r^lEine Lilie unter Disteln^list meine Freundin unter den Mädchen.^p^r(Stimme der Braut)^0r^lEin Apfelbaum unter Waldbäumen^list mein Geliebter unter den Burschen.^lIn seinem Schatten begehre ich zu sitzen,^lwie süß schmeckt seine Frucht^lmeinem Gaumen!^lIn das Weinhaus hat er mich geführt.^lSein Zeichen über mir heißt Liebe.^lStärkt mich mit Traubenkuchen,^lerquickt mich mit Äpfeln,^ldenn ich bin krank vor Liebe.^lSeine Linke liegt unter meinem Kopf,^lseine Rechte umfängt mich.^p^r(Stimmen der Gefährten)^0r^lBei den Gazellen und Hirschen auf der Flur^lbeschwöre ich euch, Jerusalems Töchter:^lStört die Liebe nicht auf,^lweckt sie nicht,^lbis es ihr selbst gefällt.",
          "resp1_1": "Freuen soll sich die Wüste und das dürre Land, frohlockend und blühen die Steppe,",
          "resp1_2": "gleich der Narzisse soll sie blühen und frohloken, ja frohlokken und jubeln,",
          "resp1_3": "Die Herrlichkeit des Herrn wird sie sehen, die Pracht unseres Gottes schauen.",
          "patr_autor": "Hugo Rahner († 1968)",
          "patr_werk": "Aus dem Buch „Maria und die Kirche“.",
          "patr_text": "^hMaria – Vorbild und Inbegriff der Kirche^pMaria, die Mutter Jesu, ist durch die unaussprechliche Würde, die jungfräuliche Mutter des Gottmenschen zu sein, Vorbild und Inbegriff der Mutter Kirche geworden. „Maria gebar euer Haupt, euch gebiert die Kirche. Denn auch sie ist Mutter und Jungfrau zugleich: Mutter durch die Unversehrtheit des Glaubens. Völker gebiert sie, die ja Glieder eines Einzigen sind, auch darin vergleichbar jener Jungfrau Maria, die da ist in den Vielen die Mutter der Einheit“, sagt Augustinus{1#vgl.°Augustinus, Sermo 25,8}.^pVersuchen wir nun, diesen Grundgedanken zu entfalten und zu vertiefen. Gottes liebender Heilsplan geht vom ersten Augenblick der Gnadengeschichte, ohne je sich durch Schuld und Untreue ablenken zu lassen, auf das Eine und Einzige: die Menschwerdung seines Wortes und darin auf die Vergöttlichung des Menschengeschlechtes, also auf Christus und die Kirche. Darum hat alles, was er in der vorbereitenden Heilsgeschichte sagt und tut und geschehen lässt, auch (ja in erster Linie) eine Vorbedeutung auf das Kommende hin.^p„Auf ihn hin ist alles geschaffen“, sagt Paulus{2#vgl.°Kol 1,16} von Christus, dem Erstgeborenen aller Schöpfung. Das Typologische also an allen Gestalten des Alten Bundes ist ihr Gehalt an Vorbedeutung auf Christus und seinen Leib hin, der wir sind. Alles, was sich im Volk der einstigen Auserwählung begab, „ist für uns zum Typus geworden ... uns, über die das Ende der Äonen hereingebrochen ist“{3#vgl.°1 Kor 10,6.11}. Adam, der Urmensch, ist einfachhin der „Typos des Kommenden“, das ist des Gottmenschen{4#vgl.°Röm 5,14}. Die Grundstruktur aller alttestamentlichen Typologie geht also auf Christus hin; aber nicht nur auf ihn, insofern er der gottmenschliche Träger des Erlösungswerkes von Bethlehem bis Golgotha ist, sondern über ihn und durch ihn hinaus und hinein in die „letzten Zeiten“, in denen sich Christus das Haupt seinen mystischen Leib baut, „und bis hinauf in die Ereignisse der kommenden Parusie, wo Christus und sein Leib in Herrlichkeit erscheinen werden“ {5#vgl.°Kol 3,4; Phil 3,21}.",
          "patr_resp1": "Mein Geist jubelt über Gott, meinen Retter,",
          "patr_resp2": "denn auf die Niedrigkeit seiner Magd hat er geschaut,",
          "patr_resp3": "Die kinderlos war, lässt er im Hause wohnen als Mutter, froh ihrer Kinder."
        }
      },
      "31": {
        "Lesehore": {
          "les_buch": "Aus dem Hohelied.",
          "les_stelle": "2,8-3,5",
          "les_text": "^hDie Braut hört die Stimme Christi und sucht ihn^p^r(Stimme der Braut)^0r^lHorch! Mein Geliebter!^lSieh da, er kommt.^lEr springt über die Berge,^lhüpft über die Hügel.^lDer Gazelle gleicht mein Geliebter,^ldem jungen Hirsch.^lJa, draußen steht er^lan der Wand unsres Hauses;^ler blickt durch die Fenster,^lspäht durch die Gitter.^p^r(Stimme des Bräutigams)^0r^lSteh auf, meine Freundin,^lmeine Schöne, so komm doch!^lDenn vorbei ist der Winter,^lverrauscht der Regen.^lAuf der Flur erscheinen die Blumen;^ldie Zeit zum Singen ist da.^lDie Stimme der Turteltaube^list zu hören in unserem Land.^lAm Feigenbaum reifen die ersten Früchte;^ldie blühenden Reben duften.^pSteh auf, meine Freundin,^lmeine Schöne, so komm doch!^lMeine Taube im Felsennest,^lversteckt an der Steilwand,^ldein Gesicht lass mich sehen,^ldeine Stimme hören!^lDenn süß ist deine Stimme,^llieblich dein Gesicht.^pFangt uns die Füchse,^ldie kleinen Füchse!^lSie verwüsten die Weinberge,^lunsre blühenden Reben.^p^r(Stimme der Braut)^0r^lDer Geliebte ist mein,^lund ich bin sein;^ler weidet in den Lilien.^lWenn der Tag verweht^lund die Schatten wachsen,^lkomm du, mein Geliebter,^lder Gazelle gleich,^ldem jungen Hirsch^lauf den Balsambergen.^pDes Nachts auf meinem Lager suchte ich ihn,^lden meine Seele liebt.^lIch suchte ihn und fand ihn nicht.^lAufstehen will ich, die Stadt durchstreifen,^ldie Gassen und Plätze,^lihn suchen, den meine Seele liebt.^lIch suchte ihn und fand ihn nicht.^lMich fanden die Wächter^lbei ihrer Runde durch die Stadt.^lHabt ihr ihn gesehen,^lden meine Seele liebt?^pKaum war ich an ihnen vorüber,^lfand ich ihn, den meine Seele liebt.^lIch packte ihn, ließ ihn nicht mehr los,^lbis ich ihn ins Haus meiner Mutter brachte,^lin die Kammer derer, die mich geboren hat.^p^r(Stimmen der Gefährtinnen)^0r^lBei den Gazellen und Hirschen der Flur^lbeschwöre ich euch, Jerusalems Töchter:^lStört die Liebe nicht auf,^lweckt sie nicht,^lbis es ihr selbst gefällt.",
          "resp1_1": "Die Huld des Herrn will ich preisen,",
          "resp1_2": "jubeln will ich über meinen Gott,",
          "resp1_3": "Denn der mich erschaffen, ist mein Gemahl, der mich erlöst hat, ist der Heilige Israels.",
          "patr_autor": "Hugo Rahner († 1968)",
          "patr_werk": "Aus dem Buch „Maria und die Kirche“.",
          "patr_text": "^hMaria ist Mutter der Glieder Christi^pDer Urbeginn unserer Erlösung liegt in dem unbegreiflichen Ratschluss des ewigen Vaters, seinen eingeborenen Sohn uns als Menschen zu schenken. In diesem göttlichen Gnadenentschluss ist aber auch mitgegeben der von eben dieser Gnade angerührte und ermöglichte freie Entschluss jenes Menschenkindes, das auserwählt ward, Mutter des Menschensohnes zu werden. In dem freien Ja der Jungfrau Maria ist gleichsam alles schon eingeschlossen, was je im Lauf der Erlösungsgeschichte an Gnade und Gottesliebe sich in das Geschlecht des Adam ergießen wird. Das Jawort der Jungfrau ist in einem wahren Sinn der Anfang der Kirche. Augustinus hat dies in einem berühmten Wort ausgesprochen: „Wahrlich, Maria ist auch die Mutter der Christusglieder, die wir selber sind. Denn sie hat mitgewirkt in Liebe, dass Glaubende in der Kirche geboren werden, Glaubende, die da sind die Glieder jenes Hauptes, dessen Mutter sie leiblich wurde.“{1#Augustinus, De sancta virginitate 6}^pDiese „liebende Mitwirkung“ ist zunächst einmal ihr Jawort, das den Einstrom der göttlichen Begnadigung in das ganze Menschengeschlecht durch die Menschwerdung Gottes ermöglicht hat. Im jungfräulichen Schoß Marias beginnt also, wie die Väter so oft sagen, in Wahrheit die Existenz der Kirche. Denn durch die hochzeitliche Vereinigung von Gottheit und Menschheit in der einen Person Christi ist der weltgestaltende Heilsschluss des Vaters festgelegt und begonnen: alles, was nun folgt, vom erlösenden Kreuz dieses aus Maria für den Vater geborenen Menschenkindes bis zur Vollendung in der herrlichen Wiederkunft des Gottmenschen, also die ganze Geschichte der Kirche, ist Entfaltung des Geheimnisses, das sich am Herzen Marias vollzog. Es ist das eigentliche Mysterium der Kirche – so wie es einmal in einem wundervollen Hymnus des achten Jahrhunderts heißt: „Das Mysterium der Kirche wollen wir besingen in einem Hymnus auf Christus, den die mütterliche Frau geboren hat, das Wort des Vaters. Groß nämlich ist das Mysterium, das Maria anvertraut ward.“{2#vgl.°Analecta Hymnica 51} Jenes „große Mysterium“, von dem Paulus in Bezug auf die Kirche spricht, beginnt schon in Marias Schoß.^pIn der klassischen Diktion seiner Theologie hat uns dieses Geheimnis der Kirche der heilige Papst Leo in einer seiner Weihnachtspredigten verkündet: „Indem wir die Menschwerdung unseres Erlösers anbeten, feiern wir offenbar auch den Beginn unseres eigenen Lebens. Ist doch die Zeugung Christi der Ursprung des christlichen Volkes. Der Geburtstag des Hauptes ist zugleich der Geburtstag des Leibes. Mag auch jeder einzelne von den Berufenen seinen besonderen Stand haben, mögen auch alle Kinder der Kirche durch die Folge der Zeiten voneinander getrennt sein: die Gesamtheit aller Gläubigen, die aus dem Taufquell hervorgingen, ist mit Christus in seiner Geburt geboren worden.“{3#Leo der Große, Sermo 26,2} Weihnacht ist für die alte Kirche ein Fest der Kirche, Maria der Inbegriff aller Mysterien, die sich in unserer Wiedergeburt an uns selbst vollziehen.",
          "patr_resp1": "In Christus wohnt die ganze Fülle des göttlichen Lebens,",
          "patr_resp2": "er ist das Haupt aller Mächte und Gewalten,",
          "patr_resp3": "Mit Christus wurden wir in der Taufe begraben, mit ihm auch auferweckt.",
          "patr_autor_alt": "Augustinus († 430)",
          "patr_werk_alt": "Aus den Reden über das Johannesevangelium.",
          "patr_text_alt": "^hDie Befreiung von der Zeit^pAls die Fülle der Zeit kam, erschien auch er, der uns von der Zeit befreien wollte. Denn befreit von der Zeit, sollen wir zu jener Ewigkeit gelangen, wo keine Zeit ist. Und da sagt man nicht: Wann wird die Stunde kommen? Denn es ist ein ewiger Tag, dem kein gestriger vorangeht und dem kein morgiger nachfolgt.^pIn dieser Welt aber rollen die Tage dahin, die einen gehen, die anderen kommen, keiner bleibt. Auch die Augenblicke, da wir reden, verdrängen einander, und es bleibt die erste Silbe nicht stehen, damit die zweite erklingen kann. Seitdem wir reden, sind wir etwas älter geworden, und ohne Zweifel bin ich jetzt älter als heute morgen. So steht nichts still, nichts bleibt fest in der Zeit. Darum müssen wir den, durch den die Zeiten geworden sind, lieben, um von der Zeit befreit und in der Ewigkeit befestigt zu werden, wo es keine Veränderlichkeit der Zeit mehr gibt."
        }
      }
    }
  }
};