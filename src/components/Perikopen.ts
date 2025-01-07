interface PerikopenEntry {
  text: string;
}

interface PerikopenData {
  [book: string]: {
    [passage: string]: PerikopenEntry;
  };
}

export const perikopenData = {
  "1 Joh": {
    "4,16": {
      "text": "Wir haben die Liebe, die Gott zu uns hat, erkannt und gläubig angenommen. Gott ist die Liebe, und wer in der Liebe bleibt, bleibt in Gott und Gott bleibt in ihm."
    },
    "4,9": {
      "text": "Text von 1 Joh 4,9"
    },
    "1,1–3": {
      "text": "Text von 1 Joh 1,1–3"
    },
    "1,5b.7": {
      "text": "Text von 1 Joh 1,5b.7"
    },
    "1,8–9": {
      "text": "Text von 1 Joh 1,8–9"
    },
    "2,1b–2": {
      "text": "Text von 1 Joh 2,1b–2"
    },
    "2,8b–10": {
      "text": "Text von 1 Joh 2,8b–10"
    },
    "3,1a–2": {
      "text": "Seht, wie groß die Liebe ist, die der Vater uns geschenkt hat: Wir heißen Kinder Gottes, und wir sind es. Liebe Brüder, jetzt sind wir Kinder Gottes. Aber was wir sein werden, ist noch nicht offenbar geworden. Wir wissen, dass wir ihm ähnlich sein werden, wenn er offenbar wird; denn wir werden ihn sehen, wie er ist."
    },
    "5,5–6a": {
      "text": "Text von 1 Joh 5,5–6a"
    }
  },
  "1 Kön": {
    "2,2b–3": {
      "text": "Sei stark und mannhaft! Erfülle deine Pflicht gegen den Herrn, deinen Gott: Geh auf seinen Wegen und befolge alle Gebote, Befehle, Satzungen und Anordnungen, die im Gesetz des Mose niedergeschrieben sind. Dann wirst du Erfolg haben bei allem, was du tust, und in allem, was du unternimmst."
    },
    "8,60–61": {
      "text": "Alle Völker der Erde sollen erkennen, dass niemand Gott ist als der Herr allein. Euer Herz aber bleibe ungeteilt beim Herrn, unserem Gott, sodass ihr seinen Gesetzen folgt und auf seine Gebote beachtet."
    }
  },
  "1 Kor": {
    "4,5": {
      "text": "Text von 1 Kor 4,5"
    },
    "12,13": {
      "text": "Text von 1 Kor 12,13"
    },
    "1,18–19": {
      "text": "Text von 1 Kor 1,18–19"
    },
    "1,22–24": {
      "text": "Text von 1 Kor 1,22–24"
    },
    "1,25.27a": {
      "text": "Text von 1 Kor 1,25.27a"
    },
    "1,27b–30": {
      "text": "Text von 1 Kor 1,27b–30"
    },
    "1,7b–9": {
      "text": "Text von 1 Kor 1,7b–9"
    },
    "12,12–13": {
      "text": "Wie der Leib eine Einheit ist, doch viele Glieder hat, alle Glieder des Leibes aber, obgleich es viele sind, einen einzigen Leib bilden: So ist es auch mit Christus. Durch den einen Geist wurden wir in der Taufe alle in einen einzigen Leib aufgenommen, Juden und Griechen, Sklaven und Freie; und alle wurden wir mit dem einen Geist getränkt."
    },
    "12,24–26": {
      "text": "Gott hat den Leib so zusammengefügt, dass in ihm kein Zwiespalt entsteht, sondern alle Glieder einträchtig füreinander sorgen. Wenn darum ein Glied leidet, leiden alle Glieder mit; wenn ein Glied geehrt wird, freuen sich alle anderen mit ihm. Ihr aber seid der Leib Christi und jeder einzelne ist ein Glied an ihm."
    },
    "12,4–6": {
      "text": "Es gibt verschiedene Gnadengaben, aber nur den einen Geist. Es gibt verschiedene Dienste, aber nur den einen Herrn. Es gibt verschiedene Kräfte, die wirken, aber nur den einen Gott: Er wirkt alles in allen."
    },
    "15,20–22": {
      "text": "Text von 1 Kor 15,20–22"
    },
    "15,3b–5": {
      "text": "Text von 1 Kor 15,3b–5"
    },
    "2,7–10a": {
      "text": "Wir verkündigen das Geheimnis der verborgenen Weisheit Gottes, die Gott vor allen Zeiten vorausbestimmt hat zu unserer Verherrlichung. Keiner der Machthaber dieser Welt hat sie erkannt; denn hätte einer sie erkannt, so hätten sie den Herrn der Herrlichkeit nicht gekreuzigt. Nein, wir verkündigen, wie in der Schrift steht, was kein Auge gesehen und kein Ohr gehört hat, was keinem Menschen in den Sinn gekommen ist: das Große, das Gott denen bereitet hat, die ihn lieben. Denn uns hat es Gott enthüllt durch den Geist."
    },
    "2,9–10": {
      "text": "Text von 1 Kor 2,9–10"
    },
    "5,7–8": {
      "text": "Text von 1 Kor 5,7–8"
    },
    "6,19–20": {
      "text": "Text von 1 Kor 6,19–20"
    }
  },
  "1 Petr": {
    "1,13–14": {
      "text": "Umgürtet euch und macht euch bereit! Seid nüchtern und setzt eure Hoffnung ganz auf die Gnade, die euch bei der Offenbarung Jesu Christi geschenkt wird! Seid gehorsame Kinder und lasst euch nicht mehr von euren Begierden treiben wie früher, in der Zeit eurer Unwissenheit!"
    },
    "1,15–16": {
      "text": "Wie er, der euch berufen hat, heilig ist, so soll auch euer ganzes Leben heilig werden. Denn es heißt in der Schrift: Seid heilig, denn ich bin heilig."
    },
    "1,17b–19": {
      "text": "Führt, solange ihr in der Fremde seid, ein Leben in Gottesfurcht! Ihr wisst, dass ihr aus eurer sinnlosen, von den Vätern ererbten Lebensweise nicht um einen vergänglichen Preis losgekauft wurdet, nicht um Silber oder Gold, sondern mit dem kostbaren Blut Christi, des Lammes ohne Fehl und Makel."
    },
    "1,18–21": {
      "text": "Text von 1 Petr 1,18–21"
    },
    "1,22–23": {
      "text": "Der Wahrheit gehorsam, habt ihr euer Herz rein gemacht für eine aufrichtige Bruderliebe; darum hört nicht auf, einander von Herzen zu lieben. Ihr seid neu geboren worden, nicht aus vergänglichem, sondern aus unvergänglichem Samen: aus Gottes Wort, das lebt und das bleibt."
    },
    "1,6–9": {
      "text": "Ihr seid voll Freude, obwohl ihr jetzt vielleicht kurze Zeit unter mancherlei Prüfungen leiden müsst. Dadurch soll sich euer Glaube bewähren, und es wird sich zeigen, dass er wertvoller ist als Gold, das im Feuer geprüft wurde und doch vergänglich ist. So wird eurem Glauben Lob, Herrlichkeit und Ehre zuteil bei der Offenbarung Jesu Christi. Ihn habt ihr nicht gesehen, und dennoch liebt ihr ihn; ihr seht ihn auch jetzt nicht; aber ihr glaubt an ihn und jubelt in unsagbarer, von himmlischer Herrlichkeit verklärter Freude, da ihr das Ziel des Glaubens erreichen werdet: euer Heil."
    },
    "2,21b–24": {
      "text": "Text von 1 Petr 2,21b–24"
    },
    "2,4–5": {
      "text": "Text von 1 Petr 2,4–5"
    },
    "2,9–10": {
      "text": "Text von 1 Petr 2,9–10"
    },
    "3,18.22": {
      "text": "Text von 1 Petr 3,18.22"
    },
    "3,21–22a": {
      "text": "Text von 1 Petr 3,21–22a"
    },
    "4,13–14": {
      "text": "Text von 1 Petr 4,13–14"
    },
    "5,10–11": {
      "text": "Text von 1 Petr 5,10–11"
    },
    "5,5b–7": {
      "text": "Begegnet einander in Demut! Denn Gott tritt den Stolzen entgegen, den Demütigen aber schenkt er seine Gnade. Beugt euch also in Demut unter die mächtige Hand Gottes, damit er euch erhöht, wenn die Zeit gekommen ist. Werft alle eure Sorge auf ihn, denn er kümmert sich um euch."
    }
  },
  "1 Sam": {
    "16,7b": {
      "text": "Gott sieht nicht auf das, worauf der Mensch sieht. Der Mensch sieht, was vor den Augen ist, der Herr aber sieht das Herz."
    }
  },
  "1 Thess": {
    "2.13": {
      "text": "Wir danken Gott unablässig dafür, dass ihr das Wort Gottes, das ihr durch unsere Verkündigung empfangen habt, nicht als Menschenwort, sondern – was es in Wahrheit ist – als Gottes Wort angenommen habt; und jetzt ist es in euch, den Gläubigen, wirksam."
    },
    "3,12–13": {
      "text": "Text von 1 Thess 3,12–13"
    },
    "4,1.7": {
      "text": "Text von 1 Thess 4,1.7"
    },
    "5,23–24": {
      "text": "Text von 1 Thess 5,23–24"
    },
    "5,4–5": {
      "text": "Brüder, ihr lebt nicht im Finstern, sodass euch der Tag nicht wie ein Dieb überraschen kann. Ihr alle seid Söhne des Lichts und Söhne des Tages. Wir gehören nicht der Nacht und nicht der Finsternis."
    }
  },
  "1 Tim": {
    "2,4–6": {
      "text": "Text von 1 Tim 2,4–6"
    }
  },
  "2 Kor": {
    "13.4": {
      "text": "Zwar wurde Christus in seiner Schwachheit gekreuzigt, aber er lebt aus Gottes Kraft. Auch wir sind schwach in ihm, aber wir werden zusammen mit ihm vor euren Augen aus Gottes Kraft leben."
    },
    "1,21–22": {
      "text": "Gott, der uns und euch in der Treue zu Christus festigt und der uns alle gesalbt hat, er ist es auch, der uns sein Siegel aufgedrückt und als ersten Anteil (am verheißenen Heil) den Geist in unser Herz gegeben hat."
    },
    "1,3–4": {
      "text": "Gepriesen sei der Gott und Vater Jesu Christi, unseres Herrn, der Vater des Erbarmens und der Gott allen Trostes. Er tröstet uns in all unserer Not, damit auch wir die Kraft haben, alle zu trösten, die in Not sind, durch den Trost, mit dem auch wir von Gott getröstet werden."
    },
    "4,10–11": {
      "text": "Text von 2 Kor 4,10–11"
    },
    "5,14–15": {
      "text": "Text von 2 Kor 5,14–15"
    },
    "6,1–4a": {
      "text": "Text von 2 Kor 6,1–4a"
    }
  },
  "2 Petr": {
    "1,10–11": {
      "text": "Meine Brüder, bemüht euch noch mehr darum, dass eure Berufung und Erwählung Bestand hat! Wenn ihr das tut, werdet ihr niemals scheitern. Dann wird euch in reichem Maß gewährt, in das ewige Reich unseres Herrn und Retters Jesus Christus einzutreten."
    },
    "1,3–4": {
      "text": "Text von 2 Petr 1,3–4"
    },
    "3,8b–9": {
      "text": "Text von 2 Petr 3,8b–9"
    }
  },
  "2 Thess": {
    "2,13–14": {
      "text": "Wir müssen Gott zu jeder Zeit euretwegen danken, vom Herrn geliebte Brüder, weil Gott euch als Erstlingsgabe dazu auserwählt hat, aufgrund der Heiligung durch den Geist und aufgrund eures Glaubens an die Wahrheit gerettet zu werden. Dazu hat er euch durch unser Evangelium auch berufen; ihr sollt nämlich die Herrlichkeit Jesu Christi, unseres Herrn, erlangen."
    },
    "3,10b–13": {
      "text": "Wer nicht arbeiten will, soll auch nicht essen. Wir hören aber, dass einige von euch ein unordentliches Leben führen und alles Mögliche treiben, nur nicht arbeiten. Wir ermahnen sie und gebieten ihnen im Namen Jesu Christi, des Herrn, in Ruhe ihrer Arbeit nachzugehen und ihr selbst verdientes Brot zu essen. Ihr aber, Brüder, werdet nicht müde, Gutes zu tun."
    }
  },
  "2 Tim": {
    "2,8.11": {
      "text": "Text von 2 Tim 2,8.11"
    },
    "1.9": {
      "text": "Gott hat uns gerettet; mit einem heiligen Ruf hat er uns gerufen, nicht aufgrund unserer Werke, sondern aus eigenem Entschluss und aus Gnade, die uns schon vor ewigen Zeiten in Christus Jesus geschenkt wurde."
    }
  },
  "Am": {
    "4,13": {
      "text": "Siehe, er formt die Berge, er erschafft den Wind, er verkündet den Menschen, was er im Sinn hat, er macht das Morgenrot und die Finsternis, er schreitet über die Höhen der Erde dahin – Jahwe, Gott der Heere, ist sein Name."
    },
    "5,8": {
      "text": "Er hat das Siebengestirn und den Orion erschaffen; er verwandelt die Finsternis in den hellen Morgen, er verdunkelt den Tag zur Nacht, er ruft das Wasser des Meeres und gießt es aus über die Erde – Jahwe ist sein Name."
    },
    "9.6": {
      "text": "Er erbaut seine Hallen im Himmel und gründet sein Gewölbe auf die Erde; er ruft das Wasser des Meeres und gießt es aus über die Erde – Jahwe ist sein Name."
    }
  },
  "Apg": {
    "10,36": {
      "text": "Text von Apg 10,36"
    },
    "10,40–43": {
      "text": "Text von Apg 10,40–43"
    },
    "13,26b–30a": {
      "text": "Text von Apg 13,26b–30a"
    },
    "13,30–33": {
      "text": "Text von Apg 13,30–33"
    },
    "2,32.36": {
      "text": "Text von Apg 2,32.36"
    },
    "5,30–32": {
      "text": "Text von Apg 5,30–32"
    },
    "6,2b–5a": {
      "text": "Text von Apg 6,2b–5a"
    }
  },
  "Bar": {
    "3,5–6a": {
      "text": "Text von Bar 3,5–6a"
    },
    "4,28–29": {
      "text": "Wie euer Sinn auf den Abfall von Gott gerichtet war, so zeigt nun zehnfachen Eifer, umzukehren und ihn zu suchen. Er, der über euch das Unheil gebracht hat, wird mit eurer Rettung euch ewige Freude bringen."
    },
    "5,3–4": {
      "text": "Text von Bar 5,3–4"
    }
  },
  "Dan": {
    "9,19": {
      "text": "Text von Dan 9,19"
    },
    "4,24b": {
      "text": "Text von Dan 4,24b"
    }
  },
  "Dtn": {
    "1,16–17a": {
      "text": "Ich habe eure Richter verpflichtet: Lasst jeden Streit zwischen euren Brüdern vor euch kommen. Entscheidet gerecht, es sei der Streit eines Mannes mit einem Bruder oder mit einem Fremden. Kennt vor Gericht kein Ansehen der Person! Klein wie Groß hört an! Fürchtet euch nicht vor angesehenen Leuten, denn das Gericht hat mit Gott zu tun."
    },
    "1,31b": {
      "text": "Der Herr, dein Gott, hat dich auf dem ganzen Weg, den ihr gewandert seid, getragen, wie ein Vater seinen Sohn trägt."
    },
    "30,2–3a": {
      "text": "Text von Dtn 30,2–3a"
    },
    "4,29b–31": {
      "text": "Text von Dtn 4,29b–31"
    },
    "7,6b.8–9": {
      "text": "Text von Dtn 7,6b.8–9"
    },
    "8,5b–6": {
      "text": "Der Herr, dein Gott, erzieht dich, wie ein Vater seinen Sohn erzieht. Du sollst auf die Gebote des Herrn, deines Gottes, achten, auf seinen Wegen gehen und ihn fürchten."
    }
  },
  "Eph": {
    "2,13–16": {
      "text": "Jetzt seid ihr, die ihr einst in der Ferne wart, durch Christus Jesus, nämlich durch sein Blut, in die Nähe gekommen.^pDenn er ist unser Friede. Er vereinigte die beiden Teile, Juden und Heiden, und riss durch sein Sterben die trennende Wand der Feindschaft nieder.^pEr hob das Gesetz mit seinen Geboten und Forderungen auf, um die zwei in seiner Person zu dem einen neuen Menschen zu machen. Er stiftete Frieden^pund versöhnte die beiden durch das Kreuz mit Gott in einem einzigen Leib. Er hat in seiner Person die Feindschaft getötet."
    },
    "2,3b–5": {
      "text": "Text von Eph 2,3b–5"
    },
    "2,4–6": {
      "text": "Text von Eph 2,4–6"
    },
    "4,23–24": {
      "text": "Text von Eph 4,23–24"
    },
    "4,29–32": {
      "text": "Über eure Lippen komme kein böses Wort, sondern nur ein gutes, das den, der es braucht, stärkt und dem, der es hört, Nutzen bringt. Beleidigt nicht den Heiligen Geist Gottes, dessen Siegel ihr tragt für den Tag der Erlösung. Jede Art von Bitterkeit, Wut, Zorn, Geschrei und Lästerung und alles Böse verbannt aus eurer Mitte! Seid gütig zueinander, seid barmherzig, vergebt einander, weil auch Gott euch durch Christus vergeben hat."
    },
    "4,32–5,2": {
      "text": "Text von Eph 4,32–5,2"
    }
  },
  "Ex": {
    "19,4ac–6a": {
      "text": "Text von Ex 19,4ac–6a"
    }
  },
  "Ez": {
    "18,23": {
      "text": "Text von Ez 18,23"
    },
    "34.31": {
      "text": "Ihr seid meine Schafe, ihr seid die Herde meiner Weide. Ich bin euer Gott – Spruch Gottes, des Herrn."
    },
    "18,30b–32": {
      "text": "Text von Ez 18,30b–32"
    },
    "33,10b.11b": {
      "text": "Text von Ez 33,10b.11b"
    },
    "34,15–16": {
      "text": "Text von Ez 34,15–16"
    },
    "36,25–27": {
      "text": "Ich gieße reines Wasser über euch aus, dann werdet ihr rein. Ich reinige euch von aller Unreinheit und von allen euren Götzen. Ich schenke euch ein neues Herz und lege einen neuen Geist in euch. Ich nehme das Herz von Stein aus eurer Brust und gebe euch ein Herz von Fleisch. Ich lege meinen Geist in euch und bewirke, dass ihr meinen Gesetzen folgt und auf meine Gebote achtet und sie erfüllt."
    }
  },
  "Gal": {
    "3,27–28": {
      "text": "Text von Gal 3,27–28"
    },
    "4,4–5": {
      "text": "Text von Gal 4,4–5"
    },
    "5,13–14": {
      "text": "Ihr seid zur Freiheit berufen, Brüder. Nur nehmt die Freiheit nicht zum Vorwand für das Fleisch, sondern dient einander in Liebe! Denn das ganze Gesetz ist in dem einen Wort zusammengefasst: Du sollst deinen Nächsten lieben wie dich selbst!"
    },
    "5,16.22–23a.25": {
      "text": "Text von Gal 5,16.22–23a.25"
    },
    "5,16–17": {
      "text": "Lasst euch vom Geist leiten, dann werdet ihr das Begehren des Fleisches nicht erfüllen. Denn das Begehren des Fleisches richtet sich gegen den Geist, das Begehren des Geistes aber gegen das Fleisch; beide stehen sich als Feinde gegenüber, sodass ihr nicht imstande seid, das zu tun, was ihr wollt."
    },
    "5,22–23a.25": {
      "text": "Die Frucht des Geistes aber ist Liebe, Freude, Friede, Langmut, Freundlichkeit, Güte, Treue, Sanftmut und Selbstbeherrschung. Wenn wir aus dem Geist leben, dann wollen wir dem Geist auch folgen."
    },
    "6,7b–8": {
      "text": "Was der Mensch sät, das wird er auch ernten. Wer im Vertrauen auf das Fleisch sät, wird vom Fleisch Verderben ernten; wer aber im Vertrauen auf den Geist sät, wird vom Geist ewiges Leben ernten."
    },
    "6,9–10": {
      "text": "Lasst uns nicht müde werden, das Gute zu tun; denn wenn wir darin nicht nachlassen, werden wir ernten, sobald die Zeit dafür gekommen ist. Deshalb wollen wir, solange wir noch Zeit haben, allen Menschen Gutes tun, besonders aber denen, die mit uns im Glauben verbunden sind."
    }
  },
  "Gen": {
    "49,10": {
      "text": "Text von Gen 49,10"
    }
  },
  "Hag": {
    "2,6.9": {
      "text": "Text von Hag 2,6.9"
    }
  },
  "Hebr": {
    "9,28": {
      "text": "Text von Hebr 9,28"
    },
    "1,1–2": {
      "text": "Text von Hebr 1,1–2"
    },
    "10,12–14": {
      "text": "Text von Hebr 10,12–14"
    },
    "10,35–36": {
      "text": "Text von Hebr 10,35–36"
    },
    "13,12–15": {
      "text": "Text von Hebr 13,12–15"
    },
    "2,9–17": {
      "text": "Text von Hebr 2,9–17"
    },
    "2,9b–10": {
      "text": "Text von Hebr 2,9b–10"
    },
    "4,14–15": {
      "text": "Text von Hebr 4,14–15"
    },
    "5,8–10": {
      "text": "Text von Hebr 5,8–10"
    },
    "7,24–27": {
      "text": "Text von Hebr 7,24–27"
    },
    "7,26–27": {
      "text": "Text von Hebr 7,26–27"
    },
    "8,1b–3a": {
      "text": "Text von Hebr 8,1b–3a"
    },
    "9,11–12": {
      "text": "Text von Hebr 9,11–12"
    }
  },
  "Ijob": {
    "5,17–18": {
      "text": "Wohl dem Mann, den Gott zurechtweist! Die Zucht des Allmächtigen verschmähe nicht! Denn er verwundet und er verbindet, er schlägt, doch seine Hände heilen auch."
    }
  },
  "Jak": {
    "1,27": {
      "text": "Text von Jak 1,27"
    },
    "1,19b–20.26": {
      "text": "Jeder Mensch soll schnell bereit sein zu hören, aber zurückhaltend im Reden und nicht schnell zum Zorn bereit; denn im Zorn tut der Mensch nicht das, was vor Gott recht ist. Wer meint, er diene Gott, aber seine Zunge nicht im Zaum hält, der betrügt sich selbst und sein Gottesdienst ist wertlos."
    },
    "1,22.25": {
      "text": "Hört das Wort nicht nur an, sondern handelt danach; sonst betrügt ihr euch selbst. Wer sich aber in das vollkommene Gesetz der Freiheit vertieft und an ihm festhält, wer es nicht nur hört, um es wieder zu vergessen, sondern danach handelt, der wird durch sein Tun selig sein."
    },
    "2,14.17.18b": {
      "text": "Text von Jak 2,14.17.18b"
    },
    "4,7–8.10": {
      "text": "Text von Jak 4,7–8.10"
    },
    "4,7–8a.10": {
      "text": "Ordnet euch Gott unter, leistet dem Teufel Widerstand; dann wird er vor euch fliehen. Sucht die Nähe Gottes; dann wird er sich euch nähern. Demütigt euch vor dem Herrn; dann wird er euch erhöhen."
    },
    "5,16.19–20": {
      "text": "Text von Jak 5,16.19–20"
    },
    "5,7–8.9b": {
      "text": "Text von Jak 5,7–8.9b"
    }
  },
  "Jer": {
    "6.16": {
      "text": "Stellt euch an die Wege und haltet Ausschau, fragt nach den Pfaden der Vorzeit, fragt, wo der Weg zum Guten liegt; geht auf ihm, so werdet ihr Ruhe finden für eure Seele!"
    },
    "15.16": {
      "text": "Kamen Worte von dir, so verschlang ich sie; dein Wort war mir Glück und Herzensfreude; denn dein Name ist über mir ausgerufen, Herr, Gott der Heere."
    },
    "23,5": {
      "text": "Text von Jer 23,5"
    },
    "23,6": {
      "text": "Text von Jer 23,6"
    },
    "30,18": {
      "text": "Text von Jer 30,18"
    },
    "31.33": {
      "text": "Das wird der Bund sein, den ich nach diesen Tagen mit dem Haus Israel schließe – Spruch des Herrn: Ich lege mein Gesetz in sie hinein und schreibe es auf ihr Herz. Ich werde ihr Gott sein, und sie werden mein Volk sein."
    },
    "32.4": {
      "text": "Ich schließe mit ihnen einen ewigen Bund, dass ich mich nicht von ihnen abwenden will, sondern ihnen Gutes erweise. Ich lege ihnen die Furcht vor mir ins Herz, damit sie nicht von mir weichen."
    },
    "11,19–20": {
      "text": "Text von Jer 11,19–20"
    },
    "17,7–8": {
      "text": "Gesegnet der Mann, der auf den Herrn sich verlässt und dessen Hoffnung der Herr ist. Er ist wie ein Baum, der am Wasser gepflanzt ist und am Bach seine Wurzeln ausstreckt: Er hat nichts zu fürchten, wenn Hitze kommt; seine Blätter bleiben grün; auch in einem trockenen Jahr ist er ohne Sorge, unablässig bringt er seine Früchte."
    },
    "17,9–10": {
      "text": "Arglistig ohnegleichen ist das Herz und unverbesserlich. Wer kann es ergründen? Ich, der Herr, erforsche das Herz und prüfe die Nieren, um jedem zu vergelten, wie es sein Verhalten verdient."
    },
    "18,20b": {
      "text": "Text von Jer 18,20b"
    },
    "29,11.13.14": {
      "text": "Text von Jer 29,11.13.14"
    },
    "3,12.14a": {
      "text": "Text von Jer 3,12.14a"
    },
    "3,25b": {
      "text": "Text von Jer 3,25b"
    },
    "30,18.21": {
      "text": "Text von Jer 30,18.21"
    },
    "31,2.3b.4a": {
      "text": "Text von Jer 31,2.3b.4a"
    }
  },
  "Jes": {
    "2,11": {
      "text": "Text von Jes 2,11"
    },
    "2,3": {
      "text": "Text von Jes 2,3"
    },
    "4,2": {
      "text": "Text von Jes 4,2"
    },
    "4,3": {
      "text": "Text von Jes 4,3"
    },
    "12,2": {
      "text": "Text von Jes 12,2"
    },
    "45,8": {
      "text": "Text von Jes 45,8"
    },
    "55,3": {
      "text": "Text von Jes 55,3"
    },
    "61,11": {
      "text": "Text von Jes 61,11"
    },
    "1,16–18": {
      "text": "Text von Jes 1,16–18"
    },
    "10,20–21": {
      "text": "Text von Jes 10,20–21"
    },
    "11,1–2": {
      "text": "Text von Jes 11,1–2"
    },
    "44,21–22": {
      "text": "Text von Jes 44,21–22"
    },
    "50,5–7": {
      "text": "Text von Jes 50,5–7"
    },
    "52,13–15": {
      "text": "Text von Jes 52,13–15"
    },
    "53,11b–12": {
      "text": "Text von Jes 53,11b–12"
    },
    "53,2–3": {
      "text": "Text von Jes 53,2–3"
    },
    "53,4–5": {
      "text": "Text von Jes 53,4–5"
    },
    "53,6–7": {
      "text": "Text von Jes 53,6–7"
    },
    "55,6–7": {
      "text": "Text von Jes 55,6–7"
    },
    "55,8–9": {
      "text": "Meine Gedanken sind nicht eure Gedanken und eure Wege sind nicht meine Wege – Spruch des Herrn."
    },
    "58,1–2": {
      "text": "Text von Jes 58,1–2"
    },
    "58,6a.7": {
      "text": "Text von Jes 58,6a.7"
    },
    "65,1b–3a": {
      "text": "Text von Jes 65,1b–3a"
    },
    "66,1–2": {
      "text": "So spricht der Herr: Der Himmel ist mein Thron und die Erde der Schemel für meine Füße. Was wäre das für ein Haus, das ihr mir bauen könntet, was wäre das für ein Ort, an dem ich ausruhen könnte? Denn all das hat meine Hand gemacht, es gehört mir ja schon – Spruch des Herrn. Ich blicke auf den Armen und Zerknirschten und auf den, der zittert vor meinem Wort."
    },
    "7,14–15": {
      "text": "Text von Jes 7,14–15"
    }
  },
  "Joel": {
    "2,17": {
      "text": "Text von Joel 2,17"
    },
    "2,12–13": {
      "text": "Text von Joel 2,12–13"
    }
  },
  "Kol": {
    "1,2b–6": {
      "text": "Gnade sei mit euch und Friede von Gott, unserem Vater. Wir danken Gott, dem Vater Jesu Christi, unseres Herrn, jedes Mal, wenn wir für euch beten. Denn wir haben von eurem Glauben an Christus Jesus gehört und von der Liebe, die ihr zu allen Heiligen habt, weil im Himmel die Erfüllung eurer Hoffnung für euch bereitliegt. Schon früher habt ihr davon gehört durch das wahre Wort des Evangeliums, das zu euch gelangt ist. Wie in der ganzen Welt, so trägt es auch bei euch Frucht und wächst seit dem Tag, an dem ihr den Ruf der göttlichen Gnade vernommen und in Wahrheit erkannt habt."
    },
    "1,9–11": {
      "text": "Wir hören nicht auf, inständig für euch zu beten, dass ihr in aller Weisheit und Einsicht, die der Geist schenkt, den Willen des Herrn ganz erkennt. Denn ihr sollt ein Leben führen, das des Herrn würdig ist und in allem sein Gefallen findet. Ihr sollt Frucht bringen in jeder Art von guten Werken und wachsen in der Erkenntnis Gottes. Er gebe euch in der Macht seiner Herrlichkeit viel Kraft, damit ihr in allem Geduld und Ausdauer habt."
    },
    "2,9.10a.12": {
      "text": "Text von Kol 2,9.10a.12"
    },
    "3,1–2": {
      "text": "Text von Kol 3,1–2"
    },
    "3,12–13": {
      "text": "Ihr seid von Gott geliebt, seid seine auserwählten Heiligen; darum bekleidet euch mit aufrichtigem Erbarmen, mit Güte, Demut, Milde, Geduld! Ertragt euch gegenseitig und vergebt einander, wenn einer dem andern etwas vorzuwerfen hat! Wie der Herr euch vergeben hat, so vergebt auch ihr!"
    }
  },
  "Lev": {
    "23,4–7": {
      "text": "Text von Lev 23,4–7"
    }
  },
  "Mal": {
    "3,20": {
      "text": "Text von Mal 3,20"
    }
  },
  "Mi": {
    "5,2–3a": {
      "text": "Text von Mi 5,2–3a"
    },
    "5,3.4a": {
      "text": "Text von Mi 5,3.4a"
    }
  },
  "Neh": {
    "8,9b.10b": {
      "text": "Text von Neh 8,9b.10b"
    }
  },
  "Offb": {
    "1,17c–18": {
      "text": "Text von Offb 1,17c–18"
    },
    "3,19–20": {
      "text": "Text von Offb 3,19–20"
    },
    "7,10.12": {
      "text": "Die Rettung kommt von unserem Gott, der auf dem Thron sitzt, und von dem Lamm! Amen, Lob und Herrlichkeit, Weisheit und Dank, Ehre und Macht und Stärke unserem Gott in alle Ewigkeit! Amen."
    }
  },
  "Phil": {
    "2,12b–15a": {
      "text": "Text von Phil 2,12b–15a"
    },
    "2,2b–4": {
      "text": "Seid eines Sinnes, einander in Liebe verbunden, einmütig und einträchtig! Tut nichts aus Ehrgeiz und nichts aus Prahlerei, sondern in Demut schätze einer den andern höher ein als sich selbst. Jeder achte nicht nur auf das eigene Wohl, sondern auch auf das der anderen."
    },
    "3,20b–21": {
      "text": "Text von Phil 3,20b–21"
    },
    "4,4–5": {
      "text": "Text von Phil 4,4–5"
    }
  },
  "Röm": {
    "6,4": {
      "text": "Text von Röm 6,4"
    },
    "8,11": {
      "text": "Text von Röm 8,11"
    },
    "8.26": {
      "text": "Der Geist nimmt sich unserer Schwachheit an. Denn wir wissen nicht, worum wir in rechter Weise beten sollen; der Geist selber tritt jedoch für uns ein mit Seufzen, das wir nicht in Worte fassen können."
    },
    "15,3": {
      "text": "Text von Röm 15,3"
    },
    "10,8b–10": {
      "text": "Text von Röm 10,8b–10"
    },
    "11,33–36": {
      "text": "O Tiefe des Reichtums, der Weisheit und der Erkenntnis Gottes! Wie unergründlich sind seine Entscheidungen, wie unerforschlich seine Wege! Denn wer hat die Gedanken des Herrn erkannt? Oder wer ist sein Ratgeber gewesen? Wer hat ihm etwas gegeben, sodass Gott ihm etwas geben müsste? Denn aus ihm und durch ihn und auf ihn hin ist die ganze Schöpfung. Ihm sei Ehre in Ewigkeit. Amen."
    },
    "12,1–2": {
      "text": "Text von Röm 12,1–2"
    },
    "12,14–16a": {
      "text": "Segnet eure Verfolger; segnet sie, verflucht sie nicht. Freut euch mit den Fröhlichen und weint mit den Weinenden. Seid untereinander eines Sinnes; strebt nicht hoch hinaus, sondern bleibt demütig."
    },
    "13,11b–12": {
      "text": "Text von Röm 13,11b–12"
    },
    "13,11b–13a": {
      "text": "Die Stunde ist gekommen, sich vom Schlaf zu erheben. Denn jetzt ist das Heil uns näher als zu der Zeit, da wir gläubig wurden. Die Nacht ist vorgerückt, der Tag ist nahe. Darum lasst uns ablegen die Werke der Finsternis und anlegen die Waffen des Lichts! Lasst uns ehrenhaft leben wie am Tage."
    },
    "13,13–14a": {
      "text": "Text von Röm 13,13–14a"
    },
    "13,8.10": {
      "text": "Bleibt niemand etwas schuldig; nur die Liebe schuldet ihr einander immer. Wer den andern liebt, hat das Gesetz erfüllt. Die Liebe tut dem Nächsten nichts Böses. Also ist die Liebe die Erfüllung des Gesetzes."
    },
    "14,17–19": {
      "text": "Das Reich Gottes ist nicht Essen und Trinken, es ist Gerechtigkeit, Friede und Freude im Heiligen Geist. Und wer Christus so dient, wird von Gott anerkannt und ist bei den Menschen geachtet. Lasst uns also nach dem streben, was zum Frieden und zum Aufbau der Gemeinde beiträgt."
    },
    "14,7–9": {
      "text": "Text von Röm 14,7–9"
    },
    "15,1–3": {
      "text": "Wir müssen als die Starken die Schwäche derer tragen, die schwach sind, und dürfen nicht für uns selbst leben. Jeder von uns soll Rücksicht auf den Nächsten nehmen, um Gutes zu tun und die Gemeinde aufzubauen. Denn auch Christus hat nicht für sich selbst gelebt; in der Schrift heißt es vielmehr: Die Schmähungen derer, die dich schmähen, haben mich getroffen."
    },
    "3,23–25b": {
      "text": "Alle haben gesündigt und die Herrlichkeit Gottes verloren. Ohne es verdient zu haben, werden sie gerecht, dank seiner Gnade, durch die Erlösung in Christus Jesus. Ihn hat Gott dazu bestimmt, Sühne zu leisten mit seinem Blut, Sühne, wirksam durch Glauben. So erweist Gott seine Gerechtigkeit durch die Vergebung der Sünden."
    },
    "4,24–25": {
      "text": "Text von Röm 4,24–25"
    },
    "5,10–11": {
      "text": "Text von Röm 5,10–11"
    },
    "5,1–2.5": {
      "text": "Gerecht gemacht aus Glauben, haben wir Frieden mit Gott durch Jesus Christus, unseren Herrn. Durch ihn haben wir auch den Zugang zu der Gnade erhalten, in der wir stehen, und rühmen uns unserer Hoffnung auf die Herrlichkeit Gottes. Die Hoffnung aber lässt nicht zugrunde gehen; denn die Liebe Gottes ist ausgegossen in unsere Herzen durch den Heiligen Geist, der uns gegeben ist."
    },
    "5,8–9": {
      "text": "Text von Röm 5,8–9"
    },
    "6,8–11": {
      "text": "Text von Röm 6,8–11"
    },
    "8,10–11": {
      "text": "Text von Röm 8,10–11"
    },
    "8,14–17": {
      "text": "Text von Röm 8,14–17"
    },
    "8,26–27": {
      "text": "Text von Röm 8,26–27"
    },
    "8,35.37": {
      "text": "Was kann uns scheiden von der Liebe Christi? Bedrängnis oder Not oder Verfolgung, Hunger oder Kälte, Gefahr oder Schwert? All das überwinden wir durch den, der uns geliebt hat."
    },
    "8,3b–4": {
      "text": "Text von Röm 8,3b–4"
    },
    "8,15–16": {
      "text": "Ihr habt nicht einen Geist empfangen, der euch zu Sklaven macht, so dass ihr euch immer noch fürchten müsstet, sondern ihr habt den Geist empfangen, der euch zu Söhnen macht, den Geist, in dem wir rufen: Abba, Vater! So bezeugt der Geist selber unserem Geist, dass wir Kinder Gottes sind."
    },
    "8,22–23": {
      "text": "Wir wissen, dass die gesamte Schöpfung bis zum heutigen Tag seufzt und in Geburtswehen liegt. Aber auch wir, obwohl wir als Erstlingsgabe den Geist haben, seufzen in unserem Herzen und warten darauf, dass wir mit der Erlösung unseres Leibes als Söhne offenbar werden."
    }
  },
  "Sach": {
    "1,3b–4b": {
      "text": "Text von Sach 1,3b–4b"
    },
    "12,10–11a": {
      "text": "Text von Sach 12,10–11a"
    },
    "9,9a": {
      "text": "Text von Sach 9,9a"
    }
  },
  "Spr": {
    "3,13–15": {
      "text": "Glücklich der Mann, der Weisheit gefunden, der Mann, der Einsicht gewonnen hat. Denn sie zu erwerben ist besser als Silber, sie zu gewinnen ist besser als Gold. Sie übertrifft die Perlen an Wert, keine kostbaren Steine kommen ihr gleich."
    }
  },
  "Tit": {
    "2,11–12": {
      "text": "Text von Tit 2,11–12"
    },
    "3,5b–7": {
      "text": "Text von Tit 3,5b–7"
    }
  },
  "Tob": {
    "4,15a–16.18–19": {
      "text": "Was dir selbst verhasst ist, das mute auch einem anderen nicht zu! Gib dem Hungrigen von deinem Brot und dem Nackten von deinen Kleidern. Such nur bei Verständigen Rat; einen brauchbaren Ratschlag verachte nicht! Preise Gott, den Herrn, zu jeder Zeit; bitte ihn, dass dein Weg geradeaus führt und dass alles, was du tust und planst, ein gutes Ende nimmt."
    }
  },
  "vgl. 1 Kön": {
    "8,51a.52–53": {
      "text": "Text von vgl. 1 Kön 8,51a.52–53"
    }
  },
  "vgl. 1 Kor": {
    "9,24–25": {
      "text": "Text von vgl. 1 Kor 9,24–25"
    }
  },
  "vgl. 2 Thess": {
    "1,6.7.10": {
      "text": "Text von vgl. 2 Thess 1,6.7.10"
    }
  },
  "vgl. Apg": {
    "4,11–12": {
      "text": "Text von vgl. Apg 4,11–12"
    }
  },
  "vgl. Jes": {
    "10,24.27": {
      "text": "Text von vgl. Jes 10,24.27"
    },
    "13,22; 14,1": {
      "text": "Text von vgl. Jes 13,22; 14,1"
    },
    "30,15.18": {
      "text": "Text von vgl. Jes 30,15.18"
    }
  },
  "vgl. Kol": {
    "1,12–14": {
      "text": "Text von vgl. Kol 1,12–14"
    }
  },
  "Weish": {
    "1,13–14": {
      "text": "Gott hat den Tod nicht gemacht und hat keine Freude am Untergang der Lebenden. Zum Dasein hat er alles geschaffen und heilbringend sind die Geschöpfe der Welt. Kein Gift des Verderbens ist in ihnen, das Reich des Todes hat keine Macht auf der Erde; denn die Gerechtigkeit ist unsterblich."
    },
    "11,23–24a": {
      "text": "Text von Weish 11,23–24a"
    },
    "7,27a; 8,1": {
      "text": "Die Weisheit ist nur eine und vermag doch alles; ohne sich zu ändern, erneuert sie alles. Machtvoll entfaltet sie ihre Kraft von einem Ende zum andern und durchwaltet voll Güte das All."
    }
  },
  "Zef": {
    "3,14.15b": {
      "text": "Text von Zef 3,14.15b"
    }
  }
};