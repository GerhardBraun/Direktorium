interface BrevierEntry {
  comm_1?: string;
  comm_2?: string;
  name?: string;
  farbe?: string;
  hymn_1?: number;
  hymn_2?: number;
  hymn_3?: number;
  hymn_nacht?: number;
  hymn_kl?: number;
  ps_1?: number;
  ps_2?: number;
  ps_3?: number;
  ps_95?: number;
  ps_100?: number;
  ps_67?: number;
  ps_24?: number;
  ant_0?: string;
  ant_1?: string;
  ant_2?: string;
  ant_3?: string;
  resp0_0?: string;
  resp0_1?: string;
  les_buch?: string;
  les_stelle?: string;
  les_text?: string;
  resp1_0?: string;
  resp1_1?: string;
  resp1_2?: string;
  resp1_3?: string;
  ant_ev?: string;
  ant_a?: string;
  ant_b?: string;
  ant_c?: string;
  ev?: number;
  ev_lat?: number;
  bitten_e?: string;
  bitten_r?: string;
  bitten?: string;
  vu?: number;
  vu_lat?: number;
  oration?: string;
  oration_komplet?: string;
  marant?: number;
  marant_lat?: number;
  }

interface BrevierData {
  [season: string]: {
    [week: string]: {
      [day: string]: {
        [hour: string]: BrevierEntry;
      };
    };
  };
}

export const brevierData = {
  "3": {
    "each": {
      "each": {
        "Laudes": {
          "hymn_kl": 0.0,
          "ps_1": 63.0,
          "ps_2": 160.0,
          "ps_3": 149.0
        }
      }
    }
  },
  "5": {
    "each": {
      "0": {
        "Non": {
          "ps_1": 118.1,
          "ps_2": 118.2,
          "ps_3": 118.3
        },
        "Sext": {
          "ps_1": 118.1,
          "ps_2": 118.2,
          "ps_3": 118.3
        },
        "Terz": {
          "ps_1": 118.1,
          "ps_2": 118.2,
          "ps_3": 118.3
        }
      },
      "each": {
        "ErsteK": {
          "hymn_2": 516.0,
          "ps_1": 4.0,
          "ps_2": 134.0,
          "ant_1": "Sei mir gnädig, Herr, und höre auf mein Flehen.",
          "ant_2": "Zu nächtlicher Stunde preiset den Herrn.",
          "les_buch": "Dtn",
          "les_stelle": "6,4–7",
          "les_text": "Höre, Israel! Jahwe, unser Gott, Jahwe ist einzig. Dar­um sollst du den Herrn, deinen Gott, lieben mit gan­zem Herzen, mit ganzer Seele und mit ganzer Kraft. Diese Worte, auf die ich dich heute verpflichte, sollen auf deinem Herzen geschrieben stehen. Du sollst sie deinen Söhnen wiederholen. Du sollst von ihnen reden, wenn du zu Hause sitzt und wenn du auf der Straße gehst, wenn du dich schlafen legst und wenn du aufstehst.",
          "oration_komplet": "Herr und Gott, kehre ein in dieses Haus und halte alle Nachstellungen des Feindes von ihm fern. Deine heiligen Engel mögen darin wohnen und uns im Frieden bewahren. Und dein Segen sei über uns allezeit. Darum bitten wir durch Christus, unsern Herrn. Amen."
        },
        "Komplet": {
          "hymn_2": 510.0,
          "ps_1": 91.0,
          "ant_0": "Mit seinen Flügeln beschirmt dich der Herr; du brauchst dich nicht zu fürchten vor dem Schrecken der Nacht.",
          "les_buch": "Offb",
          "les_stelle": "22,4–5",
          "les_text": "Sie werden sein Angesicht schauen, und sein Name ist auf ihre Stirn geschrieben. Es wird keine Nacht mehr geben, und sie brauchen weder das Licht einer Lampe noch das Licht der Sonne. Denn der Herr, ihr Gott, wird über ihnen leuchten, und sie werden herrschen in alle Ewigkeit.",
          "oration_komplet": "Herr und Gott, kehre ein in dieses Haus und halte alle Nachstellungen des Feindes von ihm fern. Deine heiligen Engel mögen darin wohnen und uns im Frieden bewahren. Und dein Segen sei über uns allezeit. Darum bitten wir durch Christus, unsern Herrn. Amen."
        },
        "Laudes": {
          "hymn_kl": 0.0,
          "ps_1": 63.0,
          "ps_2": 160.0,
          "ps_3": 149.0
        },
        "Non": {
          "ps_1": 126.0,
          "ps_2": 127.0,
          "ps_3": 128.0
        },
        "Sext": {
          "ps_1": 123.0,
          "ps_2": 124.0,
          "ps_3": 125.0
        },
        "Terz": {
          "ps_1": 120.0,
          "ps_2": 121.0,
          "ps_3": 122.0
        }
      }
    }
  },
  "a": {
    "1": {
      "0": {
        "each": {
          "oration": "a-1-0-each-Oration"
        },
        "Lesehore": {}
      },
      "1": {
        "each": {
          "oration": "a-1-1-each-Oration"
        }
      },
      "2": {
        "each": {
          "oration": "a-1-2-each-Oration"
        }
      },
      "3": {
        "each": {
          "oration": "a-1-3-each-Oration"
        }
      },
      "4": {
        "each": {
          "oration": "a-1-4-each-Oration"
        }
      },
      "5": {
        "each": {
          "oration": "a-1-5-each-Oration"
        }
      },
      "6": {
        "each": {
          "oration": "a-1-6-each-Oration"
        }
      }
    },
    "2": {
      "0": {
        "each": {
          "oration": "a-2-0-each-Oration"
        }
      },
      "1": {
        "each": {
          "oration": "a-2-1-each-Oration"
        }
      },
      "2": {
        "each": {
          "oration": "a-2-2-each-Oration"
        }
      },
      "3": {
        "each": {
          "oration": "a-2-3-each-Oration"
        }
      },
      "4": {
        "each": {
          "oration": "a-2-4-each-Oration"
        }
      },
      "5": {
        "each": {
          "oration": "a-2-5-each-Oration"
        }
      },
      "6": {
        "each": {
          "oration": "a-2-6-each-Oration"
        }
      }
    },
    "3": {
      "0": {
        "each": {
          "oration": "a-3-0-each-Oration"
        }
      },
      "1": {
        "each": {
          "oration": "a-3-1-each-Oration"
        }
      },
      "2": {
        "each": {
          "oration": "a-3-2-each-Oration"
        }
      },
      "3": {
        "each": {
          "oration": "a-3-3-each-Oration"
        }
      },
      "4": {
        "each": {
          "oration": "a-3-4-each-Oration"
        }
      },
      "5": {
        "each": {
          "oration": "a-3-5-each-Oration"
        }
      },
      "6": {
        "each": {
          "oration": "a-3-6-each-Oration"
        }
      }
    },
    "each": {
      "0": {
        "Laudes": {
          "les_buch": "Röm",
          "les_stelle": "13,11b–12",
          "les_text": "Text von Röm 13,11b–12",
          "resp1_3": "Als Richter und Retter kommst du in diese Welt.",
          "bitten_e": "a-each-0-Bitten_E",
          "bitten_r": "a-each-0-Bitten_R",
          "bitten": "a-each-0-Bitten"
        },
        "Non": {
          "les_buch": "vgl. 2 Thess",
          "les_stelle": "1,6.7.10",
          "les_text": "Text von vgl. 2 Thess 1,6.7.10"
        },
        "Sext": {
          "les_buch": "1 Thess",
          "les_stelle": "3,12–13",
          "les_text": "Text von 1 Thess 3,12–13"
        },
        "Terz": {
          "les_buch": "Röm",
          "les_stelle": "13,13–14a",
          "les_text": "Text von Röm 13,13–14a"
        },
        "Vesper": {
          "les_buch": "Phil",
          "les_stelle": "4,4–5",
          "les_text": "Text von Phil 4,4–5",
          "resp1_1": "Herr, zeig uns dein Erbarmen,",
          "resp1_2": "gewähre uns dein Heil.",
          "resp1_3": "Lass deine Herrlichkeit in unserm Lande wohnen.",
          "bitten_e": "a-each-0-Bitten_E",
          "bitten_r": "a-each-0-Bitten_R",
          "bitten": "a-each-0-Bitten"
        }
      },
      "1": {
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "2,3",
          "les_text": "Text von Jes 2,3",
          "bitten_e": "a-each-1-Bitten_E",
          "bitten_r": "a-each-1-Bitten_R",
          "bitten": "a-each-1-Bitten"
        },
        "Non": {
          "les_buch": "vgl. Jes",
          "les_stelle": "13,22; 14,1",
          "les_text": "Text von vgl. Jes 13,22; 14,1"
        },
        "Sext": {
          "les_buch": "vgl. Jes",
          "les_stelle": "10,24.27",
          "les_text": "Text von vgl. Jes 10,24.27"
        },
        "Terz": {
          "les_buch": "Jes",
          "les_stelle": "10,20–21",
          "les_text": "Text von Jes 10,20–21"
        },
        "Vesper": {
          "les_buch": "Phil",
          "les_stelle": "3,20b–21",
          "les_text": "Text von Phil 3,20b–21",
          "bitten_e": "a-each-1-Bitten_E",
          "bitten_r": "a-each-1-Bitten_R",
          "bitten": "a-each-1-Bitten"
        }
      },
      "2": {
        "Laudes": {
          "les_buch": "Gen",
          "les_stelle": "49,10",
          "les_text": "Text von Gen 49,10",
          "bitten_e": "a-each-2-Bitten_E",
          "bitten_r": "a-each-2-Bitten_R",
          "bitten": "a-each-2-Bitten"
        },
        "Non": {
          "les_buch": "Ez",
          "les_stelle": "34,15–16",
          "les_text": "Text von Ez 34,15–16"
        },
        "Sext": {
          "les_buch": "Jer",
          "les_stelle": "23,6",
          "les_text": "Text von Jer 23,6"
        },
        "Terz": {
          "les_buch": "Jer",
          "les_stelle": "23,5",
          "les_text": "Text von Jer 23,5"
        },
        "Vesper": {
          "les_buch": "1 Kor",
          "les_stelle": "1,7b–9",
          "les_text": "Text von 1 Kor 1,7b–9",
          "bitten_e": "a-each-2-Bitten_E",
          "bitten_r": "a-each-2-Bitten_R",
          "bitten": "a-each-2-Bitten"
        }
      },
      "3": {
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "7,14–15",
          "les_text": "Text von Jes 7,14–15",
          "bitten_e": "a-each-3-Bitten_E",
          "bitten_r": "a-each-3-Bitten_R",
          "bitten": "a-each-3-Bitten"
        },
        "Non": {
          "les_buch": "Dan",
          "les_stelle": "9,19",
          "les_text": "Text von Dan 9,19"
        },
        "Sext": {
          "les_buch": "Jes",
          "les_stelle": "12,2",
          "les_text": "Text von Jes 12,2"
        },
        "Terz": {
          "les_buch": "Jes",
          "les_stelle": "2,11",
          "les_text": "Da senken sich die stolzen Augen der Menschen, die hochmütigen Männer müssen sich ducken, der Herr allein ist erhaben an jenem Tag."
        },
        "Vesper": {
          "les_buch": "1 Kor",
          "les_stelle": "4,5",
          "les_text": "Text von 1 Kor 4,5",
          "bitten_e": "a-each-3-Bitten_E",
          "bitten_r": "a-each-3-Bitten_R",
          "bitten": "a-each-3-Bitten"
        }
      },
      "4": {
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "45,8",
          "les_text": "Text von Jes 45,8",
          "bitten_e": "a-each-4-Bitten_E",
          "bitten_r": "a-each-4-Bitten_R",
          "bitten": "a-each-4-Bitten"
        },
        "Non": {
          "les_buch": "Mal",
          "les_stelle": "3,20",
          "les_text": "Text von Mal 3,20"
        },
        "Sext": {
          "les_buch": "Hag",
          "les_stelle": "2,6.9",
          "les_text": "Text von Hag 2,6.9"
        },
        "Terz": {
          "les_buch": "Mi",
          "les_stelle": "5,3.4a",
          "les_text": "Text von Mi 5,3.4a"
        },
        "Vesper": {
          "les_buch": "Jak",
          "les_stelle": "5,7–8.9b",
          "les_text": "Text von Jak 5,7–8.9b",
          "bitten_e": "a-each-4-Bitten_E",
          "bitten_r": "a-each-4-Bitten_R",
          "bitten": "a-each-4-Bitten"
        }
      },
      "5": {
        "Laudes": {
          "les_buch": "Jer",
          "les_stelle": "30,18.21",
          "les_text": "Text von Jer 30,18.21",
          "bitten_e": "a-each-5-Bitten_E",
          "bitten_r": "a-each-5-Bitten_R",
          "bitten": "a-each-5-Bitten"
        },
        "Non": {
          "les_buch": "Bar",
          "les_stelle": "3,5–6a",
          "les_text": "Text von Bar 3,5–6a"
        },
        "Sext": {
          "les_buch": "Jer",
          "les_stelle": "30,18",
          "les_text": "Text von Jer 30,18"
        },
        "Terz": {
          "les_buch": "Jer",
          "les_stelle": "29,11.13.14",
          "les_text": "Text von Jer 29,11.13.14"
        },
        "Vesper": {
          "les_buch": "2 Petr",
          "les_stelle": "3,8b–9",
          "les_text": "Text von 2 Petr 3,8b–9",
          "bitten_e": "a-each-5-Bitten_E",
          "bitten_r": "a-each-5-Bitten_R",
          "bitten": "a-each-5-Bitten"
        }
      },
      "6": {
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "11,1–2",
          "les_text": "Text von Jes 11,1–2",
          "bitten_e": "a-each-6-Bitten_E",
          "bitten_r": "a-each-6-Bitten_R",
          "bitten": "a-each-6-Bitten"
        },
        "Non": {
          "les_buch": "Jes",
          "les_stelle": "61,11",
          "les_text": "Text von Jes 61,11"
        },
        "Sext": {
          "les_buch": "Jes",
          "les_stelle": "4,3",
          "les_text": "Text von Jes 4,3"
        },
        "Terz": {
          "les_buch": "Jes",
          "les_stelle": "4,2",
          "les_text": "Text von Jes 4,2"
        },
        "Vesper": {
          "les_buch": "1 Thess",
          "les_stelle": "5,23–24",
          "les_text": "Text von 1 Thess 5,23–24",
          "bitten_e": "a-each-6-Bitten_E",
          "bitten_r": "a-each-6-Bitten_R",
          "bitten": "a-each-6-Bitten"
        }
      },
      "each": {
        "Invitatorium": {
          "ant_0": "Der Herr ist nahe; kommt, wir beten ihn an."
        },
        "Komplet": {
          "marant": 521.0,
          "marant_lat": 522.0
        },
        "Laudes": {
          "hymn_1": 1201.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "resp1_1": "Über dir, Jerusalem erstrahlt der Herr,",
          "resp1_2": "er geht auf über dir gleich der Sonne.",
          "resp1_3": "Und seine Herrlichkeit erscheint über dir."
        },
        "Lesehore": {
          "hymn_1": 1401.0,
          "hymn_2": 1402.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0
        },
        "Non": {
          "ant_0": "Maria sprach zum Engel: Was soll dein Gruß bedeuten? Den König soll ich gebären und dennoch Jungfrau bleiben.",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "resp1_0": "Komm, Herr, und säume nicht.",
          "resp1_1": "Tilge die Schuld deines Volkes."
        },
        "Sext": {
          "ant_0": "Der Engel sprach zu Maria: Gegrüßet seist du, voll der Gnade, der Herr ist mit dir, du bist gebenedeit unter den Frauen.",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "resp1_0": "Herr, denk an uns aus Liebe zu deinem Volk.",
          "resp1_1": "Komm und bring uns Hilfe."
        },
        "Terz": {
          "ant_0": "Von einer Jungfrau wird der Heiland geboren – so künden die Propheten.",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "resp1_0": "Die Völker werden deinen Namen fürchten.",
          "resp1_1": "Und alle Könige der Erde deine Herrlichkeit."
        },
        "Vesper": {
          "hymn_1": 1301.0,
          "hymn_2": 1302.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "resp1_1": "Der du auf den Kerubim thronst, erscheine.",
          "resp1_2": "Erwecke deine Macht und komm.",
          "resp1_3": "Lass dein Angesicht leuchten, dann ist uns geholfen."
        }
      }
    },
    "even": {
      "0": {
        "Laudes": {
          "bitten_e": "a-even-0-Bitten_E",
          "bitten_r": "a-even-0-Bitten_R",
          "bitten": "a-even-0-Bitten"
        },
        "Vesper": {
          "bitten_e": "a-even-0-Bitten_E",
          "bitten_r": "a-even-0-Bitten_R",
          "bitten": "a-even-0-Bitten"
        }
      },
      "1": {
        "Laudes": {
          "bitten_e": "a-even-1-Bitten_E",
          "bitten_r": "a-even-1-Bitten_R",
          "bitten": "a-even-1-Bitten"
        },
        "Vesper": {
          "bitten_e": "a-even-1-Bitten_E",
          "bitten_r": "a-even-1-Bitten_R",
          "bitten": "a-even-1-Bitten"
        }
      },
      "2": {
        "Laudes": {
          "bitten_e": "a-even-2-Bitten_E",
          "bitten_r": "a-even-2-Bitten_R",
          "bitten": "a-even-2-Bitten"
        },
        "Vesper": {
          "bitten_e": "a-even-2-Bitten_E",
          "bitten_r": "a-even-2-Bitten_R",
          "bitten": "a-even-2-Bitten"
        }
      },
      "3": {
        "Laudes": {
          "bitten_e": "a-even-3-Bitten_E",
          "bitten_r": "a-even-3-Bitten_R",
          "bitten": "a-even-3-Bitten"
        },
        "Vesper": {
          "bitten_e": "a-even-3-Bitten_E",
          "bitten_r": "a-even-3-Bitten_R",
          "bitten": "a-even-3-Bitten"
        }
      },
      "4": {
        "Laudes": {
          "bitten_e": "a-even-4-Bitten_E",
          "bitten_r": "a-even-4-Bitten_R",
          "bitten": "a-even-4-Bitten"
        },
        "Vesper": {
          "bitten_e": "a-even-4-Bitten_E",
          "bitten_r": "a-even-4-Bitten_R",
          "bitten": "a-even-4-Bitten"
        }
      },
      "5": {
        "Laudes": {
          "bitten_e": "a-even-5-Bitten_E",
          "bitten_r": "a-even-5-Bitten_R",
          "bitten": "a-even-5-Bitten"
        },
        "Vesper": {
          "bitten_e": "a-even-5-Bitten_E",
          "bitten_r": "a-even-5-Bitten_R",
          "bitten": "a-even-5-Bitten"
        }
      },
      "6": {
        "Laudes": {
          "bitten_e": "a-even-6-Bitten_E",
          "bitten_r": "a-even-6-Bitten_R",
          "bitten": "a-even-6-Bitten"
        },
        "Vesper": {
          "bitten_e": "a-even-6-Bitten_E",
          "bitten_r": "a-even-6-Bitten_R",
          "bitten": "a-even-6-Bitten"
        }
      }
    },
    "last": {
      "1": {
        "Laudes": {
          "ant_1": "Seht, es naht der Herr, der Fürst über alle Könige der Erde. Selig, die bereit sind, ihm entgegenzugehen.",
          "ant_2": "Singt dem Herrn ein neues Lied, sein Lob halle wider von den Enden der Erde.",
          "ant_3": "Wenn der Menschensohn kommt, wird er wohl Glauben finden auf Erden?"
        },
        "Vesper": {
          "ant_1": "Seht, es naht der Herr, der Fürst über alle Könige der Erde. Selig, die bereit sind, ihm entgegenzugehen.",
          "ant_2": "Singt dem Herrn ein neues Lied, sein Lob halle wider von den Enden der Erde.",
          "ant_3": "Wenn der Menschensohn kommt, wird er wohl Glauben finden auf Erden?"
        }
      },
      "2": {
        "Laudes": {
          "ant_1": "Der Herr wird ausziehen von seiner heiligen Stätte; er wird kommen, sein Volk zu erlösen.",
          "ant_2": "Unsere feste Stadt ist Zion: Der Erlöser ist ihre Mauer und ihr Wall. Öffnet die Tore! Gott ist mit uns. Halleluja.",
          "ant_3": "Lass uns auf Erden deinen Weg erkennen, mitten unter den Völkern dein Heil."
        },
        "Vesper": {
          "ant_1": "Der Herr wird ausziehen von seiner heiligen Stätte; er wird kommen, sein Volk zu erlösen.",
          "ant_2": "Unsere feste Stadt ist Zion: Der Erlöser ist ihre Mauer und ihr Wall. Öffnet die Tore! Gott ist mit uns. Halleluja.",
          "ant_3": "Lass uns auf Erden deinen Weg erkennen, mitten unter den Völkern dein Heil."
        }
      },
      "3": {
        "Laudes": {
          "ant_1": "Von Zion kommt der allmächtige Gott. Er wird sein Volk erlösen.",
          "ant_2": "Um Zions willen kann ich nicht schweigen, bis sein Gerechter aufstrahlt wie das Licht.",
          "ant_3": "Der Geist des Herrn ruht auf mir. Der Herr hat mich gesandt, den Armen das Evangelium zu verkünden."
        },
        "Vesper": {
          "ant_1": "Von Zion kommt der allmächtige Gott. Er wird sein Volk erlösen.",
          "ant_2": "Um Zions willen kann ich nicht schweigen, bis sein Gerechter aufstrahlt wie das Licht.",
          "ant_3": "Der Geist des Herrn ruht auf mir. Der Herr hat mich gesandt, den Armen das Evangelium zu verkünden."
        }
      },
      "4": {
        "Laudes": {
          "ant_1": "Zu dir erhebe ich meine Seele; komm, Herr, und rette mich; ich nehme meine Zuflucht zu dir.",
          "ant_2": "Gib allen ihren Lohn, die auf dich hoffen, und bestätige so deine Propheten.",
          "ant_3": "Herr, wende dich uns doch endlich zu! Hab Mitleid mit deinen Knechten!"
        },
        "Vesper": {
          "ant_1": "Zu dir erhebe ich meine Seele; komm, Herr, und rette mich; ich nehme meine Zuflucht zu dir.",
          "ant_2": "Gib allen ihren Lohn, die auf dich hoffen, und bestätige so deine Propheten.",
          "ant_3": "Herr, wende dich uns doch endlich zu! Hab Mitleid mit deinen Knechten!"
        }
      },
      "5": {
        "Laudes": {
          "ant_1": "Vom Zion kommt der Herr, der herrschen soll. Immanuel ist sein erhabener Name.",
          "ant_2": "Seid standhaft, und ihr werdet Gottes Hilfe erfahren.",
          "ant_3": "Ich schaue aus nach dem Herrn, ich warte voll Vertrauen auf Gott, meinen Retter."
        },
        "Vesper": {
          "ant_1": "Vom Zion kommt der Herr, der herrschen soll. Immanuel ist sein erhabener Name.",
          "ant_2": "Seid standhaft, und ihr werdet Gottes Hilfe erfahren.",
          "ant_3": "Ich schaue aus nach dem Herrn, ich warte voll Vertrauen auf Gott, meinen Retter."
        }
      },
      "6": {
        "Laudes": {
          "ant_1": "Gott kommt vom Libanon, sein Glanz ist wie das Licht der Sonne.",
          "ant_2": "Tauet, ihr Himmel, von oben; ihr Wolken, regnet herab den Gerechten. Tu dich auf, o Erde, und sprosse den Heiland hervor.",
          "ant_3": "Erhebe dich, Israel, mach dich bereit, deinem Herrn zu begegnen; denn siehe, er kommt."
        },
        "Vesper": {
          "ant_1": "Gott kommt vom Libanon, sein Glanz ist wie das Licht der Sonne.",
          "ant_2": "Tauet, ihr Himmel, von oben; ihr Wolken, regnet herab den Gerechten. Tu dich auf, o Erde, und sprosse den Heiland hervor.",
          "ant_3": "Erhebe dich, Israel, mach dich bereit, deinem Herrn zu begegnen; denn siehe, er kommt."
        }
      },
      "each": {
        "Vesper": {
          "hymn_1": 1301.0,
          "hymn_2": 1303.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0
        }
      }
    }
  },
  "com": {
    "Apostel": {
      "each": {
        "Invitatorium": {
          "ant_0": "Den Herr, den König der Apostel – kommt, wir beten ihn an!"
        },
        "Laudes": {
          "hymn_1": 71072.0,
          "ant_1": "Das ist mein Gebot: Liebt einander, so wie ich euch geliebt habe.",
          "ant_2": "Größere Liebe hat niemand, als wer sein Leben gibt für seine Freunde.",
          "ant_3": "Ihr seid meine Freunde, wenn ihr tut, was ich euch gebiete.",
          "les_buch": "Eph",
          "les_stelle": "2,19-22",
          "les_text": "Ihr seid jetzt nicht mehr Fremde ohne Bürgerrecht, sondern Mitbürger der Heiligen und Hausgenossen Gottes. Ihr seid auf das Fundament der Apostel und Propheten gebaut; der Schlussstein ist Christus Jesus selbst. Durch ihn wird der ganze Bau zusammengehalten und wächst zu einem heiligen Tempel im Herrn. Durch ihn werdet auch ihr im Geist zu einer Wohnung Gottes erbaut.",
          "resp1_1": "Du bestellst sie zu Fürsten",
          "resp1_2": "in allen Ländern der Erde.",
          "resp1_3": "Sie rühmen deinen Namen von Geschlecht zu Geschlecht.",
          "ant_ev": "Auf zwölf Steine ist die heilige Stadt gegründet. Sie tragen die Namen der Apostel des Lammes. Und das Lamm ist die Leuchte der Stadt.",
          "bitten_e": "Gepriesen sei Jesus Christus, der durch seine Apostel der Welt das Heil verkündet hat. Zu ihm lasst uns beten:",
          "bitten_r": "Herr, dich lobt der Chor der Apostel.",
          "bitten": "Wir danken dir für deine heilige Kirche, die auf das Fundament der Apostel gegründet ist;^qsie führe uns zusammen zur Einheit in dir.^qWir danken dir für das Wort der Wahrheit, das wir von den Aposteln empfangen haben;^qes sei uns Licht und Freude.^qWir danken dir für das Sakrament deines Leibes und Blutes, das uns die Apostel überliefert haben;^qes sei uns Nahrung und Quelle des Lebens.^qWir danken dir für das Sakrament der Versöhnung, das du den Aposteln anvertraut hast;^qes reinige uns immer neu von unserer Schuld."
        },
        "Lesehore": {
          "hymn_1": 71068.0,
          "ps_1": 19.1,
          "ps_2": 64.0,
          "ps_3": 97.0,
          "ant_1": "Ihre Botschaft ging in die ganze Welt hinaus, ihre Kunde bis zu den Enden der Erde.^ö",
          "ant_2": "Sie verkündeten Gottes Taten und bedachten sein Wirken.^ö",
          "ant_3": "Sie verkündeten die Gerechtigkeit des Herrn, und alle Völker schauten seine Herrlichkeit.^ö",
          "resp0_0": "Sie priesen den Herrn und erzählten von seiner Macht.",
          "resp0_1": "Von den Wundertaten, die er vollbracht.",
          "les_buch": "Aus dem ersten Brief an die Korinther.",
          "les_stelle": "4,1-16",
          "les_text": "com-Apostel-each-Lesehore-Les_Text",
          "resp1_1": "Ich nenne euch nicht mehr Knechte, sondern Freunde,",
          "resp1_2": "ich habe euch alles geoffenbart, was ich von meinem Vater gehört habe.",
          "resp1_3": "Euch ist es gegeben, die Geheimnisse des Himmelreiches zu erkennen. Selig seid ihr, denn eure Augen sehen und eure Ohren hören."
        },
        "Non": {
          "ant_0": "Bleibt standhaft, und ihr werdet das Leben gewinnen.",
          "les_buch": "Apg",
          "les_stelle": "5,41-42",
          "les_text": "Die Apostel gingen weg vom Hohen Rat und freuten sich, dass sie gewürdigt worden waren, für den Namen Jesu Schmach zu erleiden. Und Tag für Tag lehrten sie unermüdlich im Tempel und in den Häusern und verkündeten das Evangelium von Jesus, dem Christus.",
          "resp1_0": "So spricht der Herr: Freut euch und jubelt.",
          "resp1_1": "Denn eure Namen sind im Himmel verzeichnet."
        },
        "Sext": {
          "ant_0": "Seht, ich bin alle Tage bei euch, bis zum Ende der Welt.",
          "les_buch": "Apg",
          "les_stelle": "5,12a.14",
          "les_text": "Durch die Hände der Apostel geschahen viele Zeichen und Wunder im Volk. Immer mehr wurden im Glauben zum Herrn geführt, Scharen von Männern und Frauen.",
          "resp1_0": "Sie hielten fest am Zeugnis Gottes.",
          "resp1_1": "Und bewahrten seine Gebote."
        },
        "Terz": {
          "ant_0": "Geht hin und verkündet das Evangelium vom Reich. Umsonst habt ihr empfangen, umsonst sollt ihr geben.",
          "les_buch": "2 Kor",
          "les_stelle": "5,19b-20",
          "les_text": "Uns Aposteln hat Gott das Wort von der Versöhnung anvertraut. Wir sind also Gesandte an Christi statt, und Gott ist es, der durch uns mahnt. Wir bitten an Christi statt: Lasst euch mit Gott versöhnen!",
          "resp1_0": "Ihre Botschaft geht hinaus in die ganze Welt.",
          "resp1_1": "Ihre Kunde bis hin zu den Enden der Erde."
        },
        "Vesper": {
          "hymn_1": 71076.0,
          "ps_1": 116.2,
          "ps_2": 126.0,
          "ps_3": 152.0,
          "ant_1": "Ihr seid bei mir geblieben in meiner Bedrängnis. Darum gebe ich euch das Reich zum Erbe.",
          "ant_2": "Ich bin in eurer Mitte wie einer, der dient.",
          "ant_3": "Ich nenne euch nicht mehr Knechte, sondern Freunde; denn alles, was ich von meinem Vater hörte, das habe ich euch geoffenbart.",
          "les_buch": "Eph",
          "les_stelle": "4,11–13",
          "les_text": "Christus gab den einen das Apostelamt, andere setzte er als Propheten ein, andere als Evangelisten, andere als Hirten und Lehrer, um die Heiligen für die Erfüllung ihres Dienstes zu rüsten, für den Aufbau des Leibes Christi. So sollen wir alle zur Einheit im Glauben und in der Erkenntnis des Sohnes Gottes gelangen, damit wir zum voll­kommenen Menschen werden und Christus in seiner vollendeten Gestalt darstellen.",
          "resp1_1": "Verkündet die Herrlichkeit Gottes",
          "resp1_2": "unter allen Völkern.",
          "resp1_3": "Rühmt seinen Namen, verkündet sein Heil",
          "ant_ev": "Wenn die Welt neu geschaffen wird und der Menschensohn sich auf den Thron der Herrlichkeit setzt, werdet auch ihr auf zwölf Thronen sitzen und die zwölf Stämme Israels richten.",
          "bitten_e": "Lasst uns zu Jesus Christus beten, der seine Kirche auferbaut hat auf dem Fundament der Apostel:",
          "bitten_r": "Herr, gedenke deiner Kirche.",
          "bitten": "Du hast die Apostel ausgesandt als Zeugen deiner Auferstehung;^qsteh den Bischöfen bei, die du als Nachfolger der Apostel berufen hast.^pDu hast den Aposteln den Auftrag gegeben, den Samen des Wortes auszusäen;^qhilf den Predigern, den apostolischen Glauben treu zu verkünden.^pDu hast den Aposteln befohlen, alle Menschen zu deinen Jüngern zu machen;^qgedenke aller, die auf deinen Namen getauft sind.^pDu hast den Aposteln den Dienst der Versöhnung aufgetragen;^qlass alle, die ihre Sünden bekennen, deinen Trost erfahren. ^pAuf den Grundsteinen der himmlischen Gottesstadt stehen die Namen deiner zwölf Apostel;^qnimm unsere Verstorbenen auf in das neue Jerusalem."
        }
      },
      "o": {
        "Vesper": {
          "resp1_1": "Verkündet die Herrlichkeit Gottes unter allen Völkern.",
          "resp1_2": "Halleluja, halleluja."
        }
      }
    },
    "Erzieher": {
      "each": {
        "Invitatorium": {
          "ant_0": "com-Erzieher-each-Invitatorium-ant_0"
        },
        "Laudes": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Erzieher-each-Laudes-ant_1",
          "ant_2": "com-Erzieher-each-Laudes-ant_2",
          "ant_3": "com-Erzieher-each-Laudes-ant_3",
          "les_buch": "com-Erzieher-each-Laudes-Les_Buch",
          "les_stelle": "com-Erzieher-each-Laudes–Les_Stelle",
          "les_text": "com-Erzieher-each-Laudes-Les_Text",
          "resp1_1": "com-Erzieher-each-Laudes-Resp1_1",
          "resp1_2": "com-Erzieher-each-Laudes-Resp1_2",
          "resp1_3": "com-Erzieher-each-Laudes-Resp1_3",
          "ant_ev": "com-Erzieher-each-Laudes-Ant_Ev",
          "bitten_e": "com-Erzieher-each-Laudes-Bitten_E",
          "bitten_r": "com-Erzieher-each-Laudes-Bitten_R",
          "bitten": "com-Erzieher-each-Laudes-Bitten"
        },
        "Lesehore": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Erzieher-each-Lesehore-ant_1",
          "ant_2": "com-Erzieher-each-Lesehore-ant_2",
          "ant_3": "com-Erzieher-each-Lesehore-ant_3",
          "resp0_0": "com-Erzieher-each-Lesehore-Resp0_0",
          "resp0_1": "com-Erzieher-each-Lesehore-Resp0_1",
          "les_buch": "com-Erzieher-each-Lesehore-Les_Buch",
          "les_stelle": "com-Erzieher-each-Lesehore–Les_Stelle",
          "les_text": "com-Erzieher-each-Lesehore-Les_Text",
          "resp1_1": "com-Erzieher-each-Lesehore-Resp1_1",
          "resp1_2": "com-Erzieher-each-Lesehore-Resp1_2",
          "resp1_3": "com-Erzieher-each-Lesehore-Resp1_3",
          "patr_autor": "com-Erzieher-each-Lesehore-Patr_Autor",
          "patr_text": "com-Erzieher-each-Lesehore-Patr_Text",
          "patr_resp1": "com-Erzieher-each-Lesehore-Patr_Resp1",
          "patr_resp2": "com-Erzieher-each-Lesehore-Patr_Resp2",
          "patr_resp3": "com-Erzieher-each-Lesehore-Patr_Resp3"
        },
        "Non": {
          "ant_1": "com-Erzieher-each-Non-ant_1",
          "ant_2": "com-Erzieher-each-Non-ant_2",
          "ant_3": "com-Erzieher-each-Non-ant_3",
          "les_buch": "com-Erzieher-each-Non-Les_Buch",
          "les_stelle": "com-Erzieher-each-Non–Les_Stelle",
          "les_text": "com-Erzieher-each-Non-Les_Text",
          "resp1_0": "com-Erzieher-each-Non-Resp1_0",
          "resp1_1": "com-Erzieher-each-Non-Resp1_1"
        },
        "Sext": {
          "ant_1": "com-Erzieher-each-Sext-ant_1",
          "ant_2": "com-Erzieher-each-Sext-ant_2",
          "ant_3": "com-Erzieher-each-Sext-ant_3",
          "les_buch": "com-Erzieher-each-Sext-Les_Buch",
          "les_stelle": "com-Erzieher-each-Sext–Les_Stelle",
          "les_text": "com-Erzieher-each-Sext-Les_Text",
          "resp1_0": "com-Erzieher-each-Sext-Resp1_0",
          "resp1_1": "com-Erzieher-each-Sext-Resp1_1"
        },
        "Terz": {
          "ant_1": "com-Erzieher-each-Terz-ant_1",
          "ant_2": "com-Erzieher-each-Terz-ant_2",
          "ant_3": "com-Erzieher-each-Terz-ant_3",
          "les_buch": "com-Erzieher-each-Terz-Les_Buch",
          "les_stelle": "com-Erzieher-each-Terz–Les_Stelle",
          "les_text": "com-Erzieher-each-Terz-Les_Text",
          "resp1_0": "com-Erzieher-each-Terz-Resp1_0",
          "resp1_1": "com-Erzieher-each-Terz-Resp1_1"
        },
        "Vesper": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Erzieher-each-Vesper-ant_1",
          "ant_2": "com-Erzieher-each-Vesper-ant_2",
          "ant_3": "com-Erzieher-each-Vesper-ant_3",
          "les_buch": "com-Erzieher-each-Vesper-Les_Buch",
          "les_stelle": "com-Erzieher-each-Vesper–Les_Stelle",
          "les_text": "com-Erzieher-each-Vesper-Les_Text",
          "resp1_1": "com-Erzieher-each-Vesper-Resp1_1",
          "resp1_2": "com-Erzieher-each-Vesper-Resp1_2",
          "resp1_3": "com-Erzieher-each-Vesper-Resp1_3",
          "ant_ev": "com-Erzieher-each-Vesper-Ant_Ev",
          "bitten_e": "com-Erzieher-each-Vesper-Bitten_E",
          "bitten_r": "com-Erzieher-each-Vesper-Bitten_R",
          "bitten": "com-Erzieher-each-Vesper-Bitten"
        }
      }
    },
    "Frau": {
      "each": {
        "Invitatorium": {
          "ant_0": "com-Frau-each-Invitatorium-ant_0"
        },
        "Laudes": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Frau-each-Laudes-ant_1",
          "ant_2": "com-Frau-each-Laudes-ant_2",
          "ant_3": "com-Frau-each-Laudes-ant_3",
          "les_buch": "com-Frau-each-Laudes-Les_Buch",
          "les_stelle": "com-Frau-each-Laudes–Les_Stelle",
          "les_text": "com-Frau-each-Laudes-Les_Text",
          "resp1_1": "com-Frau-each-Laudes-Resp1_1",
          "resp1_2": "com-Frau-each-Laudes-Resp1_2",
          "resp1_3": "com-Frau-each-Laudes-Resp1_3",
          "ant_ev": "com-Frau-each-Laudes-Ant_Ev",
          "bitten_e": "com-Frau-each-Laudes-Bitten_E",
          "bitten_r": "com-Frau-each-Laudes-Bitten_R",
          "bitten": "com-Frau-each-Laudes-Bitten"
        },
        "Lesehore": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Frau-each-Lesehore-ant_1",
          "ant_2": "com-Frau-each-Lesehore-ant_2",
          "ant_3": "com-Frau-each-Lesehore-ant_3",
          "resp0_0": "com-Frau-each-Lesehore-Resp0_0",
          "resp0_1": "com-Frau-each-Lesehore-Resp0_1",
          "les_buch": "com-Frau-each-Lesehore-Les_Buch",
          "les_stelle": "com-Frau-each-Lesehore–Les_Stelle",
          "les_text": "com-Frau-each-Lesehore-Les_Text",
          "resp1_1": "com-Frau-each-Lesehore-Resp1_1",
          "resp1_2": "com-Frau-each-Lesehore-Resp1_2",
          "resp1_3": "com-Frau-each-Lesehore-Resp1_3",
          "patr_autor": "com-Frau-each-Lesehore-Patr_Autor",
          "patr_text": "com-Frau-each-Lesehore-Patr_Text",
          "patr_resp1": "com-Frau-each-Lesehore-Patr_Resp1",
          "patr_resp2": "com-Frau-each-Lesehore-Patr_Resp2",
          "patr_resp3": "com-Frau-each-Lesehore-Patr_Resp3"
        },
        "Non": {
          "ant_1": "com-Frau-each-Non-ant_1",
          "ant_2": "com-Frau-each-Non-ant_2",
          "ant_3": "com-Frau-each-Non-ant_3",
          "les_buch": "com-Frau-each-Non-Les_Buch",
          "les_stelle": "com-Frau-each-Non–Les_Stelle",
          "les_text": "com-Frau-each-Non-Les_Text",
          "resp1_0": "com-Frau-each-Non-Resp1_0",
          "resp1_1": "com-Frau-each-Non-Resp1_1"
        },
        "Sext": {
          "ant_1": "com-Frau-each-Sext-ant_1",
          "ant_2": "com-Frau-each-Sext-ant_2",
          "ant_3": "com-Frau-each-Sext-ant_3",
          "les_buch": "com-Frau-each-Sext-Les_Buch",
          "les_stelle": "com-Frau-each-Sext–Les_Stelle",
          "les_text": "com-Frau-each-Sext-Les_Text",
          "resp1_0": "com-Frau-each-Sext-Resp1_0",
          "resp1_1": "com-Frau-each-Sext-Resp1_1"
        },
        "Terz": {
          "ant_1": "com-Frau-each-Terz-ant_1",
          "ant_2": "com-Frau-each-Terz-ant_2",
          "ant_3": "com-Frau-each-Terz-ant_3",
          "les_buch": "com-Frau-each-Terz-Les_Buch",
          "les_stelle": "com-Frau-each-Terz–Les_Stelle",
          "les_text": "com-Frau-each-Terz-Les_Text",
          "resp1_0": "com-Frau-each-Terz-Resp1_0",
          "resp1_1": "com-Frau-each-Terz-Resp1_1"
        },
        "Vesper": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Frau-each-Vesper-ant_1",
          "ant_2": "com-Frau-each-Vesper-ant_2",
          "ant_3": "com-Frau-each-Vesper-ant_3",
          "les_buch": "com-Frau-each-Vesper-Les_Buch",
          "les_stelle": "com-Frau-each-Vesper–Les_Stelle",
          "les_text": "com-Frau-each-Vesper-Les_Text",
          "resp1_1": "com-Frau-each-Vesper-Resp1_1",
          "resp1_2": "com-Frau-each-Vesper-Resp1_2",
          "resp1_3": "com-Frau-each-Vesper-Resp1_3",
          "ant_ev": "com-Frau-each-Vesper-Ant_Ev",
          "bitten_e": "com-Frau-each-Vesper-Bitten_E",
          "bitten_r": "com-Frau-each-Vesper-Bitten_R",
          "bitten": "com-Frau-each-Vesper-Bitten"
        }
      }
    },
    "Frauen": {
      "each": {
        "Invitatorium": {
          "ant_0": "com-Frauen-each-Invitatorium-ant_0"
        },
        "Laudes": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Frauen-each-Laudes-ant_1",
          "ant_2": "com-Frauen-each-Laudes-ant_2",
          "ant_3": "com-Frauen-each-Laudes-ant_3",
          "les_buch": "com-Frauen-each-Laudes-Les_Buch",
          "les_stelle": "com-Frauen-each-Laudes–Les_Stelle",
          "les_text": "com-Frauen-each-Laudes-Les_Text",
          "resp1_1": "com-Frauen-each-Laudes-Resp1_1",
          "resp1_2": "com-Frauen-each-Laudes-Resp1_2",
          "resp1_3": "com-Frauen-each-Laudes-Resp1_3",
          "ant_ev": "com-Frauen-each-Laudes-Ant_Ev",
          "bitten_e": "com-Frauen-each-Laudes-Bitten_E",
          "bitten_r": "com-Frauen-each-Laudes-Bitten_R",
          "bitten": "com-Frauen-each-Laudes-Bitten"
        },
        "Lesehore": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Frauen-each-Lesehore-ant_1",
          "ant_2": "com-Frauen-each-Lesehore-ant_2",
          "ant_3": "com-Frauen-each-Lesehore-ant_3",
          "resp0_0": "com-Frauen-each-Lesehore-Resp0_0",
          "resp0_1": "com-Frauen-each-Lesehore-Resp0_1",
          "les_buch": "com-Frauen-each-Lesehore-Les_Buch",
          "les_stelle": "com-Frauen-each-Lesehore–Les_Stelle",
          "les_text": "com-Frauen-each-Lesehore-Les_Text",
          "resp1_1": "com-Frauen-each-Lesehore-Resp1_1",
          "resp1_2": "com-Frauen-each-Lesehore-Resp1_2",
          "resp1_3": "com-Frauen-each-Lesehore-Resp1_3",
          "patr_autor": "com-Frauen-each-Lesehore-Patr_Autor",
          "patr_text": "com-Frauen-each-Lesehore-Patr_Text",
          "patr_resp1": "com-Frauen-each-Lesehore-Patr_Resp1",
          "patr_resp2": "com-Frauen-each-Lesehore-Patr_Resp2",
          "patr_resp3": "com-Frauen-each-Lesehore-Patr_Resp3"
        },
        "Non": {
          "ant_1": "com-Frauen-each-Non-ant_1",
          "ant_2": "com-Frauen-each-Non-ant_2",
          "ant_3": "com-Frauen-each-Non-ant_3",
          "les_buch": "com-Frauen-each-Non-Les_Buch",
          "les_stelle": "com-Frauen-each-Non–Les_Stelle",
          "les_text": "com-Frauen-each-Non-Les_Text",
          "resp1_0": "com-Frauen-each-Non-Resp1_0",
          "resp1_1": "com-Frauen-each-Non-Resp1_1"
        },
        "Sext": {
          "ant_1": "com-Frauen-each-Sext-ant_1",
          "ant_2": "com-Frauen-each-Sext-ant_2",
          "ant_3": "com-Frauen-each-Sext-ant_3",
          "les_buch": "com-Frauen-each-Sext-Les_Buch",
          "les_stelle": "com-Frauen-each-Sext–Les_Stelle",
          "les_text": "com-Frauen-each-Sext-Les_Text",
          "resp1_0": "com-Frauen-each-Sext-Resp1_0",
          "resp1_1": "com-Frauen-each-Sext-Resp1_1"
        },
        "Terz": {
          "ant_1": "com-Frauen-each-Terz-ant_1",
          "ant_2": "com-Frauen-each-Terz-ant_2",
          "ant_3": "com-Frauen-each-Terz-ant_3",
          "les_buch": "com-Frauen-each-Terz-Les_Buch",
          "les_stelle": "com-Frauen-each-Terz–Les_Stelle",
          "les_text": "com-Frauen-each-Terz-Les_Text",
          "resp1_0": "com-Frauen-each-Terz-Resp1_0",
          "resp1_1": "com-Frauen-each-Terz-Resp1_1"
        },
        "Vesper": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Frauen-each-Vesper-ant_1",
          "ant_2": "com-Frauen-each-Vesper-ant_2",
          "ant_3": "com-Frauen-each-Vesper-ant_3",
          "les_buch": "com-Frauen-each-Vesper-Les_Buch",
          "les_stelle": "com-Frauen-each-Vesper–Les_Stelle",
          "les_text": "com-Frauen-each-Vesper-Les_Text",
          "resp1_1": "com-Frauen-each-Vesper-Resp1_1",
          "resp1_2": "com-Frauen-each-Vesper-Resp1_2",
          "resp1_3": "com-Frauen-each-Vesper-Resp1_3",
          "ant_ev": "com-Frauen-each-Vesper-Ant_Ev",
          "bitten_e": "com-Frauen-each-Vesper-Bitten_E",
          "bitten_r": "com-Frauen-each-Vesper-Bitten_R",
          "bitten": "com-Frauen-each-Vesper-Bitten"
        }
      }
    },
    "Hirten": {
      "each": {
        "Invitatorium": {
          "ant_0": "Christus, den obersten Hirten der Kirche – kommt, wir beten ihn an!"
        },
        "Laudes": {
          "name": "Comm Hi",
          "hymn_1": 71151.0,
          "ps_1": 63.0,
          "ps_2": 160.0,
          "ps_3": 149.0,
          "ant_1": "Ihr seid das Licht der Welt. Eine Stadt, die auf dem Berge liegt, kann nicht verborgen bleiben.^ö",
          "ant_2": "Euer Licht soll vor den Menschen leuchten, damit sie eure guten Taten sehen und euren Vater im Himmel preisen.^ö",
          "ant_3": "Lebendig ist Gottes Wort, voll Kraft und schärfer als jedes Schwert.^ö",
          "les_buch": "Hebr",
          "les_stelle": "13,7-9a",
          "les_text": "Denkt an eure Vorsteher, die euch das Wort Gottes verkündet haben; schaut auf das Ende ihres Lebens, und ahmt ihren Glauben nach! Jesus Christus ist derselbe gestern, heute und in Ewigkeit. Lasst euch nicht durch mancherlei fremde Lehren irreführen!",
          "resp1_1": "Jerusalem, ich habe dir Wächter gegeben,",
          "resp1_2": "den Namen Gottes sollen sie verkünden.",
          "resp1_3": "Sie dürfen nicht schweigen bei Tag und bei Nacht.",
          "ant_ev": "Nicht ihr werdet reden, sondern der Geist eures Vaters redet durch euch.^ö",
          "bitten_e": "Gepriesen sei Jesus Christus, der Gute Hirt, der sein Leben hingegeben hat für die Seinen. Zu ihm lasst uns beten:",
          "bitten_r": "Herr, sei du der Hirte deines Volkes.",
          "bitten": "Du hast im Wirken des heiligen N. deine Liebe sichtbar gemacht;^qlass uns heute auf seine Fürbitte dein Erbarmen erfahren.^pDu hast durch große Seelsorger immer wieder deine Kirche erneuert;^qschenke uns auf ihre Fürbitte die Gnade der Bekehrung.^pDurch den Dienst heiliger Seelsorger hast du dich der Armen und Schwachen angenommen;^qschenke uns auf ihre Fürsprache die Kraft, den Schwachen zu dienen.^pDurch die Predigt und das Beispiel heiliger Seelsorger hast du vielen den Weg zum Himmel gewiesen;^qhilf uns, auf ihre Fürsprache diesen Weg zu finden."
        },
        "Lesehore": {
          "hymn_1": 402.0,
          "ps_1": 21.0,
          "ps_2": 92.1,
          "ps_3": 92.2,
          "ant_1": "Will einer der Erste sein, so soll er der Letzte von allen sein und der Diener aller.^ö",
          "ant_2": "Wenn der oberste Hirt erscheint, werdet ihr den Kranz der Herrlichkeit empfangen, der nie verwelkt.^ö",
          "ant_3": "Du guter und treuer Knecht, nimm teil an der Freude deines Herrn.^ö",
          "resp0_0": "Aus meinem Mund wirst du das Wort vernehmen.^ö",
          "resp0_1": "Und in meinem Auftrag wirst du es verkünden.^ö",
          "les_buch": "Aus dem Brief an Titus.",
          "les_stelle": "1,7-11;2,1-8",
          "les_text": "^hEigenschaften und Pflichten eines Bischofs^pEin Bischof muss …",
          "resp1_1": "com-Hirten-each-Lesehore-Resp1_1",
          "resp1_2": "com-Hirten-each-Lesehore-Resp1_2",
          "resp1_3": "com-Hirten-each-Lesehore-Resp1_3",
          "patr_autor": "com-Hirten-each-Lesehore-Patr_Autor",
          "patr_text": "com-Hirten-each-Lesehore-Patr_Text",
          "patr_resp1": "com-Hirten-each-Lesehore-Patr_Resp1",
          "patr_resp2": "com-Hirten-each-Lesehore-Patr_Resp2",
          "patr_resp3": "com-Hirten-each-Lesehore-Patr_Resp3"
        },
        "Non": {
          "ant_1": "com-Hirten-each-Non-ant_1",
          "ant_2": "com-Hirten-each-Non-ant_2",
          "ant_3": "com-Hirten-each-Non-ant_3",
          "les_buch": "com-Hirten-each-Non-Les_Buch",
          "les_stelle": "com-Hirten-each-Non–Les_Stelle",
          "les_text": "com-Hirten-each-Non-Les_Text",
          "resp1_0": "com-Hirten-each-Non-Resp1_0",
          "resp1_1": "com-Hirten-each-Non-Resp1_1"
        },
        "Sext": {
          "ant_1": "com-Hirten-each-Sext-ant_1",
          "ant_2": "com-Hirten-each-Sext-ant_2",
          "ant_3": "com-Hirten-each-Sext-ant_3",
          "les_buch": "com-Hirten-each-Sext-Les_Buch",
          "les_stelle": "com-Hirten-each-Sext–Les_Stelle",
          "les_text": "com-Hirten-each-Sext-Les_Text",
          "resp1_0": "com-Hirten-each-Sext-Resp1_0",
          "resp1_1": "com-Hirten-each-Sext-Resp1_1"
        },
        "Terz": {
          "ant_1": "com-Hirten-each-Terz-ant_1",
          "ant_2": "com-Hirten-each-Terz-ant_2",
          "ant_3": "com-Hirten-each-Terz-ant_3",
          "les_buch": "com-Hirten-each-Terz-Les_Buch",
          "les_stelle": "com-Hirten-each-Terz–Les_Stelle",
          "les_text": "com-Hirten-each-Terz-Les_Text",
          "resp1_0": "com-Hirten-each-Terz-Resp1_0",
          "resp1_1": "com-Hirten-each-Terz-Resp1_1"
        },
        "Vesper": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Hirten-each-Vesper-ant_1",
          "ant_2": "com-Hirten-each-Vesper-ant_2",
          "ant_3": "com-Hirten-each-Vesper-ant_3",
          "les_buch": "com-Hirten-each-Vesper-Les_Buch",
          "les_stelle": "com-Hirten-each-Vesper–Les_Stelle",
          "les_text": "com-Hirten-each-Vesper-Les_Text",
          "resp1_1": "com-Hirten-each-Vesper-Resp1_1",
          "resp1_2": "com-Hirten-each-Vesper-Resp1_2",
          "resp1_3": "com-Hirten-each-Vesper-Resp1_3",
          "ant_ev": "com-Hirten-each-Vesper-Ant_Ev",
          "bitten_e": "com-Hirten-each-Vesper-Bitten_E",
          "bitten_r": "com-Hirten-each-Vesper-Bitten_R",
          "bitten": "com-Hirten-each-Vesper-Bitten"
        }
      }
    },
    "Jgfr": {
      "each": {
        "Invitatorium": {
          "ant_0": "com-Jgfr-each-Invitatorium-ant_0"
        },
        "Laudes": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Jgfr-each-Laudes-ant_1",
          "ant_2": "com-Jgfr-each-Laudes-ant_2",
          "ant_3": "com-Jgfr-each-Laudes-ant_3",
          "les_buch": "com-Jgfr-each-Laudes-Les_Buch",
          "les_stelle": "com-Jgfr-each-Laudes–Les_Stelle",
          "les_text": "com-Jgfr-each-Laudes-Les_Text",
          "resp1_1": "com-Jgfr-each-Laudes-Resp1_1",
          "resp1_2": "com-Jgfr-each-Laudes-Resp1_2",
          "resp1_3": "com-Jgfr-each-Laudes-Resp1_3",
          "ant_ev": "com-Jgfr-each-Laudes-Ant_Ev",
          "bitten_e": "com-Jgfr-each-Laudes-Bitten_E",
          "bitten_r": "com-Jgfr-each-Laudes-Bitten_R",
          "bitten": "com-Jgfr-each-Laudes-Bitten"
        },
        "Lesehore": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Jgfr-each-Lesehore-ant_1",
          "ant_2": "com-Jgfr-each-Lesehore-ant_2",
          "ant_3": "com-Jgfr-each-Lesehore-ant_3",
          "resp0_0": "com-Jgfr-each-Lesehore-Resp0_0",
          "resp0_1": "com-Jgfr-each-Lesehore-Resp0_1",
          "les_buch": "com-Jgfr-each-Lesehore-Les_Buch",
          "les_stelle": "com-Jgfr-each-Lesehore–Les_Stelle",
          "les_text": "com-Jgfr-each-Lesehore-Les_Text",
          "resp1_1": "com-Jgfr-each-Lesehore-Resp1_1",
          "resp1_2": "com-Jgfr-each-Lesehore-Resp1_2",
          "resp1_3": "com-Jgfr-each-Lesehore-Resp1_3",
          "patr_autor": "com-Jgfr-each-Lesehore-Patr_Autor",
          "patr_text": "com-Jgfr-each-Lesehore-Patr_Text",
          "patr_resp1": "com-Jgfr-each-Lesehore-Patr_Resp1",
          "patr_resp2": "com-Jgfr-each-Lesehore-Patr_Resp2",
          "patr_resp3": "com-Jgfr-each-Lesehore-Patr_Resp3"
        },
        "Non": {
          "ant_1": "com-Jgfr-each-Non-ant_1",
          "ant_2": "com-Jgfr-each-Non-ant_2",
          "ant_3": "com-Jgfr-each-Non-ant_3",
          "les_buch": "com-Jgfr-each-Non-Les_Buch",
          "les_stelle": "com-Jgfr-each-Non–Les_Stelle",
          "les_text": "com-Jgfr-each-Non-Les_Text",
          "resp1_0": "com-Jgfr-each-Non-Resp1_0",
          "resp1_1": "com-Jgfr-each-Non-Resp1_1"
        },
        "Sext": {
          "ant_1": "com-Jgfr-each-Sext-ant_1",
          "ant_2": "com-Jgfr-each-Sext-ant_2",
          "ant_3": "com-Jgfr-each-Sext-ant_3",
          "les_buch": "com-Jgfr-each-Sext-Les_Buch",
          "les_stelle": "com-Jgfr-each-Sext–Les_Stelle",
          "les_text": "com-Jgfr-each-Sext-Les_Text",
          "resp1_0": "com-Jgfr-each-Sext-Resp1_0",
          "resp1_1": "com-Jgfr-each-Sext-Resp1_1"
        },
        "Terz": {
          "ant_1": "com-Jgfr-each-Terz-ant_1",
          "ant_2": "com-Jgfr-each-Terz-ant_2",
          "ant_3": "com-Jgfr-each-Terz-ant_3",
          "les_buch": "com-Jgfr-each-Terz-Les_Buch",
          "les_stelle": "com-Jgfr-each-Terz–Les_Stelle",
          "les_text": "com-Jgfr-each-Terz-Les_Text",
          "resp1_0": "com-Jgfr-each-Terz-Resp1_0",
          "resp1_1": "com-Jgfr-each-Terz-Resp1_1"
        },
        "Vesper": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Jgfr-each-Vesper-ant_1",
          "ant_2": "com-Jgfr-each-Vesper-ant_2",
          "ant_3": "com-Jgfr-each-Vesper-ant_3",
          "les_buch": "com-Jgfr-each-Vesper-Les_Buch",
          "les_stelle": "com-Jgfr-each-Vesper–Les_Stelle",
          "les_text": "com-Jgfr-each-Vesper-Les_Text",
          "resp1_1": "com-Jgfr-each-Vesper-Resp1_1",
          "resp1_2": "com-Jgfr-each-Vesper-Resp1_2",
          "resp1_3": "com-Jgfr-each-Vesper-Resp1_3",
          "ant_ev": "com-Jgfr-each-Vesper-Ant_Ev",
          "bitten_e": "com-Jgfr-each-Vesper-Bitten_E",
          "bitten_r": "com-Jgfr-each-Vesper-Bitten_R",
          "bitten": "com-Jgfr-each-Vesper-Bitten"
        }
      }
    },
    "JgfrMärt": {
      "each": {
        "Invitatorium": {
          "ant_0": "com-JgfrMärt-each-Invitatorium-ant_0"
        },
        "Laudes": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-JgfrMärt-each-Laudes-ant_1",
          "ant_2": "com-JgfrMärt-each-Laudes-ant_2",
          "ant_3": "com-JgfrMärt-each-Laudes-ant_3",
          "les_buch": "com-JgfrMärt-each-Laudes-Les_Buch",
          "les_stelle": "com-JgfrMärt-each-Laudes–Les_Stelle",
          "les_text": "com-JgfrMärt-each-Laudes-Les_Text",
          "resp1_1": "com-JgfrMärt-each-Laudes-Resp1_1",
          "resp1_2": "com-JgfrMärt-each-Laudes-Resp1_2",
          "resp1_3": "com-JgfrMärt-each-Laudes-Resp1_3",
          "ant_ev": "com-JgfrMärt-each-Laudes-Ant_Ev",
          "bitten_e": "com-JgfrMärt-each-Laudes-Bitten_E",
          "bitten_r": "com-JgfrMärt-each-Laudes-Bitten_R",
          "bitten": "com-JgfrMärt-each-Laudes-Bitten"
        },
        "Lesehore": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-JgfrMärt-each-Lesehore-ant_1",
          "ant_2": "com-JgfrMärt-each-Lesehore-ant_2",
          "ant_3": "com-JgfrMärt-each-Lesehore-ant_3",
          "resp0_0": "com-JgfrMärt-each-Lesehore-Resp0_0",
          "resp0_1": "com-JgfrMärt-each-Lesehore-Resp0_1",
          "les_buch": "com-JgfrMärt-each-Lesehore-Les_Buch",
          "les_stelle": "com-JgfrMärt-each-Lesehore–Les_Stelle",
          "les_text": "com-JgfrMärt-each-Lesehore-Les_Text",
          "resp1_1": "com-JgfrMärt-each-Lesehore-Resp1_1",
          "resp1_2": "com-JgfrMärt-each-Lesehore-Resp1_2",
          "resp1_3": "com-JgfrMärt-each-Lesehore-Resp1_3",
          "patr_autor": "com-JgfrMärt-each-Lesehore-Patr_Autor",
          "patr_text": "com-JgfrMärt-each-Lesehore-Patr_Text",
          "patr_resp1": "com-JgfrMärt-each-Lesehore-Patr_Resp1",
          "patr_resp2": "com-JgfrMärt-each-Lesehore-Patr_Resp2",
          "patr_resp3": "com-JgfrMärt-each-Lesehore-Patr_Resp3"
        },
        "Non": {
          "ant_1": "com-JgfrMärt-each-Non-ant_1",
          "ant_2": "com-JgfrMärt-each-Non-ant_2",
          "ant_3": "com-JgfrMärt-each-Non-ant_3",
          "les_buch": "com-JgfrMärt-each-Non-Les_Buch",
          "les_stelle": "com-JgfrMärt-each-Non–Les_Stelle",
          "les_text": "com-JgfrMärt-each-Non-Les_Text",
          "resp1_0": "com-JgfrMärt-each-Non-Resp1_0",
          "resp1_1": "com-JgfrMärt-each-Non-Resp1_1"
        },
        "Sext": {
          "ant_1": "com-JgfrMärt-each-Sext-ant_1",
          "ant_2": "com-JgfrMärt-each-Sext-ant_2",
          "ant_3": "com-JgfrMärt-each-Sext-ant_3",
          "les_buch": "com-JgfrMärt-each-Sext-Les_Buch",
          "les_stelle": "com-JgfrMärt-each-Sext–Les_Stelle",
          "les_text": "com-JgfrMärt-each-Sext-Les_Text",
          "resp1_0": "com-JgfrMärt-each-Sext-Resp1_0",
          "resp1_1": "com-JgfrMärt-each-Sext-Resp1_1"
        },
        "Terz": {
          "ant_1": "com-JgfrMärt-each-Terz-ant_1",
          "ant_2": "com-JgfrMärt-each-Terz-ant_2",
          "ant_3": "com-JgfrMärt-each-Terz-ant_3",
          "les_buch": "com-JgfrMärt-each-Terz-Les_Buch",
          "les_stelle": "com-JgfrMärt-each-Terz–Les_Stelle",
          "les_text": "com-JgfrMärt-each-Terz-Les_Text",
          "resp1_0": "com-JgfrMärt-each-Terz-Resp1_0",
          "resp1_1": "com-JgfrMärt-each-Terz-Resp1_1"
        },
        "Vesper": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-JgfrMärt-each-Vesper-ant_1",
          "ant_2": "com-JgfrMärt-each-Vesper-ant_2",
          "ant_3": "com-JgfrMärt-each-Vesper-ant_3",
          "les_buch": "com-JgfrMärt-each-Vesper-Les_Buch",
          "les_stelle": "com-JgfrMärt-each-Vesper–Les_Stelle",
          "les_text": "com-JgfrMärt-each-Vesper-Les_Text",
          "resp1_1": "com-JgfrMärt-each-Vesper-Resp1_1",
          "resp1_2": "com-JgfrMärt-each-Vesper-Resp1_2",
          "resp1_3": "com-JgfrMärt-each-Vesper-Resp1_3",
          "ant_ev": "com-JgfrMärt-each-Vesper-Ant_Ev",
          "bitten_e": "com-JgfrMärt-each-Vesper-Bitten_E",
          "bitten_r": "com-JgfrMärt-each-Vesper-Bitten_R",
          "bitten": "com-JgfrMärt-each-Vesper-Bitten"
        }
      }
    },
    "JgfrPl": {
      "each": {
        "Invitatorium": {
          "ant_0": "com-JgfrPl-each-Invitatorium-ant_0"
        },
        "Laudes": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-JgfrPl-each-Laudes-ant_1",
          "ant_2": "com-JgfrPl-each-Laudes-ant_2",
          "ant_3": "com-JgfrPl-each-Laudes-ant_3",
          "les_buch": "com-JgfrPl-each-Laudes-Les_Buch",
          "les_stelle": "com-JgfrPl-each-Laudes–Les_Stelle",
          "les_text": "com-JgfrPl-each-Laudes-Les_Text",
          "resp1_1": "com-JgfrPl-each-Laudes-Resp1_1",
          "resp1_2": "com-JgfrPl-each-Laudes-Resp1_2",
          "resp1_3": "com-JgfrPl-each-Laudes-Resp1_3",
          "ant_ev": "com-JgfrPl-each-Laudes-Ant_Ev",
          "bitten_e": "com-JgfrPl-each-Laudes-Bitten_E",
          "bitten_r": "com-JgfrPl-each-Laudes-Bitten_R",
          "bitten": "com-JgfrPl-each-Laudes-Bitten"
        },
        "Lesehore": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-JgfrPl-each-Lesehore-ant_1",
          "ant_2": "com-JgfrPl-each-Lesehore-ant_2",
          "ant_3": "com-JgfrPl-each-Lesehore-ant_3",
          "resp0_0": "com-JgfrPl-each-Lesehore-Resp0_0",
          "resp0_1": "com-JgfrPl-each-Lesehore-Resp0_1",
          "les_buch": "com-JgfrPl-each-Lesehore-Les_Buch",
          "les_stelle": "com-JgfrPl-each-Lesehore–Les_Stelle",
          "les_text": "com-JgfrPl-each-Lesehore-Les_Text",
          "resp1_1": "com-JgfrPl-each-Lesehore-Resp1_1",
          "resp1_2": "com-JgfrPl-each-Lesehore-Resp1_2",
          "resp1_3": "com-JgfrPl-each-Lesehore-Resp1_3",
          "patr_autor": "com-JgfrPl-each-Lesehore-Patr_Autor",
          "patr_text": "com-JgfrPl-each-Lesehore-Patr_Text",
          "patr_resp1": "com-JgfrPl-each-Lesehore-Patr_Resp1",
          "patr_resp2": "com-JgfrPl-each-Lesehore-Patr_Resp2",
          "patr_resp3": "com-JgfrPl-each-Lesehore-Patr_Resp3"
        },
        "Non": {
          "ant_1": "com-JgfrPl-each-Non-ant_1",
          "ant_2": "com-JgfrPl-each-Non-ant_2",
          "ant_3": "com-JgfrPl-each-Non-ant_3",
          "les_buch": "com-JgfrPl-each-Non-Les_Buch",
          "les_stelle": "com-JgfrPl-each-Non–Les_Stelle",
          "les_text": "com-JgfrPl-each-Non-Les_Text",
          "resp1_0": "com-JgfrPl-each-Non-Resp1_0",
          "resp1_1": "com-JgfrPl-each-Non-Resp1_1"
        },
        "Sext": {
          "ant_1": "com-JgfrPl-each-Sext-ant_1",
          "ant_2": "com-JgfrPl-each-Sext-ant_2",
          "ant_3": "com-JgfrPl-each-Sext-ant_3",
          "les_buch": "com-JgfrPl-each-Sext-Les_Buch",
          "les_stelle": "com-JgfrPl-each-Sext–Les_Stelle",
          "les_text": "com-JgfrPl-each-Sext-Les_Text",
          "resp1_0": "com-JgfrPl-each-Sext-Resp1_0",
          "resp1_1": "com-JgfrPl-each-Sext-Resp1_1"
        },
        "Terz": {
          "ant_1": "com-JgfrPl-each-Terz-ant_1",
          "ant_2": "com-JgfrPl-each-Terz-ant_2",
          "ant_3": "com-JgfrPl-each-Terz-ant_3",
          "les_buch": "com-JgfrPl-each-Terz-Les_Buch",
          "les_stelle": "com-JgfrPl-each-Terz–Les_Stelle",
          "les_text": "com-JgfrPl-each-Terz-Les_Text",
          "resp1_0": "com-JgfrPl-each-Terz-Resp1_0",
          "resp1_1": "com-JgfrPl-each-Terz-Resp1_1"
        },
        "Vesper": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-JgfrPl-each-Vesper-ant_1",
          "ant_2": "com-JgfrPl-each-Vesper-ant_2",
          "ant_3": "com-JgfrPl-each-Vesper-ant_3",
          "les_buch": "com-JgfrPl-each-Vesper-Les_Buch",
          "les_stelle": "com-JgfrPl-each-Vesper–Les_Stelle",
          "les_text": "com-JgfrPl-each-Vesper-Les_Text",
          "resp1_1": "com-JgfrPl-each-Vesper-Resp1_1",
          "resp1_2": "com-JgfrPl-each-Vesper-Resp1_2",
          "resp1_3": "com-JgfrPl-each-Vesper-Resp1_3",
          "ant_ev": "com-JgfrPl-each-Vesper-Ant_Ev",
          "bitten_e": "com-JgfrPl-each-Vesper-Bitten_E",
          "bitten_r": "com-JgfrPl-each-Vesper-Bitten_R",
          "bitten": "com-JgfrPl-each-Vesper-Bitten"
        }
      }
    },
    "Kirchw": {
      "each": {
        "Invitatorium": {
          "ant_0": "com-Kirchw-each-Invitatorium-ant_0"
        },
        "Laudes": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Kirchw-each-Laudes-ant_1",
          "ant_2": "com-Kirchw-each-Laudes-ant_2",
          "ant_3": "com-Kirchw-each-Laudes-ant_3",
          "les_buch": "com-Kirchw-each-Laudes-Les_Buch",
          "les_stelle": "com-Kirchw-each-Laudes–Les_Stelle",
          "les_text": "com-Kirchw-each-Laudes-Les_Text",
          "resp1_1": "com-Kirchw-each-Laudes-Resp1_1",
          "resp1_2": "com-Kirchw-each-Laudes-Resp1_2",
          "resp1_3": "com-Kirchw-each-Laudes-Resp1_3",
          "ant_ev": "com-Kirchw-each-Laudes-Ant_Ev",
          "bitten_e": "com-Kirchw-each-Laudes-Bitten_E",
          "bitten_r": "com-Kirchw-each-Laudes-Bitten_R",
          "bitten": "com-Kirchw-each-Laudes-Bitten"
        },
        "Lesehore": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Kirchw-each-Lesehore-ant_1",
          "ant_2": "com-Kirchw-each-Lesehore-ant_2",
          "ant_3": "com-Kirchw-each-Lesehore-ant_3",
          "resp0_0": "com-Kirchw-each-Lesehore-Resp0_0",
          "resp0_1": "com-Kirchw-each-Lesehore-Resp0_1",
          "les_buch": "com-Kirchw-each-Lesehore-Les_Buch",
          "les_stelle": "com-Kirchw-each-Lesehore–Les_Stelle",
          "les_text": "com-Kirchw-each-Lesehore-Les_Text",
          "resp1_1": "com-Kirchw-each-Lesehore-Resp1_1",
          "resp1_2": "com-Kirchw-each-Lesehore-Resp1_2",
          "resp1_3": "com-Kirchw-each-Lesehore-Resp1_3",
          "patr_autor": "com-Kirchw-each-Lesehore-Patr_Autor",
          "patr_text": "com-Kirchw-each-Lesehore-Patr_Text",
          "patr_resp1": "com-Kirchw-each-Lesehore-Patr_Resp1",
          "patr_resp2": "com-Kirchw-each-Lesehore-Patr_Resp2",
          "patr_resp3": "com-Kirchw-each-Lesehore-Patr_Resp3"
        },
        "Non": {
          "ant_1": "com-Kirchw-each-Non-ant_1",
          "ant_2": "com-Kirchw-each-Non-ant_2",
          "ant_3": "com-Kirchw-each-Non-ant_3",
          "les_buch": "com-Kirchw-each-Non-Les_Buch",
          "les_stelle": "com-Kirchw-each-Non–Les_Stelle",
          "les_text": "com-Kirchw-each-Non-Les_Text",
          "resp1_0": "com-Kirchw-each-Non-Resp1_0",
          "resp1_1": "com-Kirchw-each-Non-Resp1_1"
        },
        "Sext": {
          "ant_1": "com-Kirchw-each-Sext-ant_1",
          "ant_2": "com-Kirchw-each-Sext-ant_2",
          "ant_3": "com-Kirchw-each-Sext-ant_3",
          "les_buch": "com-Kirchw-each-Sext-Les_Buch",
          "les_stelle": "com-Kirchw-each-Sext–Les_Stelle",
          "les_text": "com-Kirchw-each-Sext-Les_Text",
          "resp1_0": "com-Kirchw-each-Sext-Resp1_0",
          "resp1_1": "com-Kirchw-each-Sext-Resp1_1"
        },
        "Terz": {
          "ant_1": "com-Kirchw-each-Terz-ant_1",
          "ant_2": "com-Kirchw-each-Terz-ant_2",
          "ant_3": "com-Kirchw-each-Terz-ant_3",
          "les_buch": "com-Kirchw-each-Terz-Les_Buch",
          "les_stelle": "com-Kirchw-each-Terz–Les_Stelle",
          "les_text": "com-Kirchw-each-Terz-Les_Text",
          "resp1_0": "com-Kirchw-each-Terz-Resp1_0",
          "resp1_1": "com-Kirchw-each-Terz-Resp1_1"
        },
        "Vesper": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Kirchw-each-Vesper-ant_1",
          "ant_2": "com-Kirchw-each-Vesper-ant_2",
          "ant_3": "com-Kirchw-each-Vesper-ant_3",
          "les_buch": "com-Kirchw-each-Vesper-Les_Buch",
          "les_stelle": "com-Kirchw-each-Vesper–Les_Stelle",
          "les_text": "com-Kirchw-each-Vesper-Les_Text",
          "resp1_1": "com-Kirchw-each-Vesper-Resp1_1",
          "resp1_2": "com-Kirchw-each-Vesper-Resp1_2",
          "resp1_3": "com-Kirchw-each-Vesper-Resp1_3",
          "ant_ev": "com-Kirchw-each-Vesper-Ant_Ev",
          "bitten_e": "com-Kirchw-each-Vesper-Bitten_E",
          "bitten_r": "com-Kirchw-each-Vesper-Bitten_R",
          "bitten": "com-Kirchw-each-Vesper-Bitten"
        }
      }
    },
    "Lehrer": {
      "each": {
        "ErsteV": {
          "ant_ev": "Wer Gottes Gebote hält und sie halten lehrt, wird groß sein im Himmelreich."
        },
        "Invitatorium": {
          "ant_0": "com-Lehrer-each-Invitatorium-ant_0"
        },
        "Laudes": {
          "name": "Kirchenl",
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Lehrer-each-Laudes-ant_1",
          "ant_2": "com-Lehrer-each-Laudes-ant_2",
          "ant_3": "com-Lehrer-each-Laudes-ant_3",
          "les_buch": "com-Lehrer-each-Laudes-Les_Buch",
          "les_stelle": "com-Lehrer-each-Laudes–Les_Stelle",
          "les_text": "com-Lehrer-each-Laudes-Les_Text",
          "resp1_1": "com-Lehrer-each-Laudes-Resp1_1",
          "resp1_2": "com-Lehrer-each-Laudes-Resp1_2",
          "resp1_3": "com-Lehrer-each-Laudes-Resp1_3",
          "ant_ev": "Die Weisen werden strahlen, wie der Himmel strahlt. Sie haben viele zum rechten Tun geführt; darum werden sie leuchten wie die Sterne, auf immer und ewig.",
          "bitten_e": "com-Lehrer-each-Laudes-Bitten_E",
          "bitten_r": "com-Lehrer-each-Laudes-Bitten_R",
          "bitten": "com-Lehrer-each-Laudes-Bitten"
        },
        "Lesehore": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Lehrer-each-Lesehore-ant_1",
          "ant_2": "com-Lehrer-each-Lesehore-ant_2",
          "ant_3": "com-Lehrer-each-Lesehore-ant_3",
          "resp0_0": "com-Lehrer-each-Lesehore-Resp0_0",
          "resp0_1": "com-Lehrer-each-Lesehore-Resp0_1",
          "les_buch": "com-Lehrer-each-Lesehore-Les_Buch",
          "les_stelle": "com-Lehrer-each-Lesehore–Les_Stelle",
          "les_text": "com-Lehrer-each-Lesehore-Les_Text",
          "resp1_1": "com-Lehrer-each-Lesehore-Resp1_1",
          "resp1_2": "com-Lehrer-each-Lesehore-Resp1_2",
          "resp1_3": "com-Lehrer-each-Lesehore-Resp1_3",
          "patr_autor": "com-Lehrer-each-Lesehore-Patr_Autor",
          "patr_text": "com-Lehrer-each-Lesehore-Patr_Text",
          "patr_resp1": "com-Lehrer-each-Lesehore-Patr_Resp1",
          "patr_resp2": "com-Lehrer-each-Lesehore-Patr_Resp2",
          "patr_resp3": "com-Lehrer-each-Lesehore-Patr_Resp3"
        },
        "Non": {
          "ant_1": "com-Lehrer-each-Non-ant_1",
          "ant_2": "com-Lehrer-each-Non-ant_2",
          "ant_3": "com-Lehrer-each-Non-ant_3",
          "les_buch": "com-Lehrer-each-Non-Les_Buch",
          "les_stelle": "com-Lehrer-each-Non–Les_Stelle",
          "les_text": "com-Lehrer-each-Non-Les_Text",
          "resp1_0": "com-Lehrer-each-Non-Resp1_0",
          "resp1_1": "com-Lehrer-each-Non-Resp1_1"
        },
        "Sext": {
          "ant_1": "com-Lehrer-each-Sext-ant_1",
          "ant_2": "com-Lehrer-each-Sext-ant_2",
          "ant_3": "com-Lehrer-each-Sext-ant_3",
          "les_buch": "com-Lehrer-each-Sext-Les_Buch",
          "les_stelle": "com-Lehrer-each-Sext–Les_Stelle",
          "les_text": "com-Lehrer-each-Sext-Les_Text",
          "resp1_0": "com-Lehrer-each-Sext-Resp1_0",
          "resp1_1": "com-Lehrer-each-Sext-Resp1_1"
        },
        "Terz": {
          "ant_1": "com-Lehrer-each-Terz-ant_1",
          "ant_2": "com-Lehrer-each-Terz-ant_2",
          "ant_3": "com-Lehrer-each-Terz-ant_3",
          "les_buch": "com-Lehrer-each-Terz-Les_Buch",
          "les_stelle": "com-Lehrer-each-Terz–Les_Stelle",
          "les_text": "com-Lehrer-each-Terz-Les_Text",
          "resp1_0": "com-Lehrer-each-Terz-Resp1_0",
          "resp1_1": "com-Lehrer-each-Terz-Resp1_1"
        },
        "Vesper": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Lehrer-each-Vesper-ant_1",
          "ant_2": "com-Lehrer-each-Vesper-ant_2",
          "ant_3": "com-Lehrer-each-Vesper-ant_3",
          "les_buch": "com-Lehrer-each-Vesper-Les_Buch",
          "les_stelle": "com-Lehrer-each-Vesper–Les_Stelle",
          "les_text": "com-Lehrer-each-Vesper-Les_Text",
          "resp1_1": "com-Lehrer-each-Vesper-Resp1_1",
          "resp1_2": "com-Lehrer-each-Vesper-Resp1_2",
          "resp1_3": "com-Lehrer-each-Vesper-Resp1_3",
          "ant_ev": "com-Lehrer-each-Vesper-Ant_Ev",
          "bitten_e": "com-Lehrer-each-Vesper-Bitten_E",
          "bitten_r": "com-Lehrer-each-Vesper-Bitten_R",
          "bitten": "com-Lehrer-each-Vesper-Bitten"
        }
      }
    },
    "Liebe": {
      "each": {
        "Invitatorium": {
          "ant_0": "com-Liebe-each-Invitatorium-ant_0"
        },
        "Laudes": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Liebe-each-Laudes-ant_1",
          "ant_2": "com-Liebe-each-Laudes-ant_2",
          "ant_3": "com-Liebe-each-Laudes-ant_3",
          "les_buch": "com-Liebe-each-Laudes-Les_Buch",
          "les_stelle": "com-Liebe-each-Laudes–Les_Stelle",
          "les_text": "com-Liebe-each-Laudes-Les_Text",
          "resp1_1": "com-Liebe-each-Laudes-Resp1_1",
          "resp1_2": "com-Liebe-each-Laudes-Resp1_2",
          "resp1_3": "com-Liebe-each-Laudes-Resp1_3",
          "ant_ev": "com-Liebe-each-Laudes-Ant_Ev",
          "bitten_e": "com-Liebe-each-Laudes-Bitten_E",
          "bitten_r": "com-Liebe-each-Laudes-Bitten_R",
          "bitten": "com-Liebe-each-Laudes-Bitten"
        },
        "Lesehore": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Liebe-each-Lesehore-ant_1",
          "ant_2": "com-Liebe-each-Lesehore-ant_2",
          "ant_3": "com-Liebe-each-Lesehore-ant_3",
          "resp0_0": "com-Liebe-each-Lesehore-Resp0_0",
          "resp0_1": "com-Liebe-each-Lesehore-Resp0_1",
          "les_buch": "com-Liebe-each-Lesehore-Les_Buch",
          "les_stelle": "com-Liebe-each-Lesehore–Les_Stelle",
          "les_text": "com-Liebe-each-Lesehore-Les_Text",
          "resp1_1": "com-Liebe-each-Lesehore-Resp1_1",
          "resp1_2": "com-Liebe-each-Lesehore-Resp1_2",
          "resp1_3": "com-Liebe-each-Lesehore-Resp1_3",
          "patr_autor": "com-Liebe-each-Lesehore-Patr_Autor",
          "patr_text": "com-Liebe-each-Lesehore-Patr_Text",
          "patr_resp1": "com-Liebe-each-Lesehore-Patr_Resp1",
          "patr_resp2": "com-Liebe-each-Lesehore-Patr_Resp2",
          "patr_resp3": "com-Liebe-each-Lesehore-Patr_Resp3"
        },
        "Non": {
          "ant_1": "com-Liebe-each-Non-ant_1",
          "ant_2": "com-Liebe-each-Non-ant_2",
          "ant_3": "com-Liebe-each-Non-ant_3",
          "les_buch": "com-Liebe-each-Non-Les_Buch",
          "les_stelle": "com-Liebe-each-Non–Les_Stelle",
          "les_text": "com-Liebe-each-Non-Les_Text",
          "resp1_0": "com-Liebe-each-Non-Resp1_0",
          "resp1_1": "com-Liebe-each-Non-Resp1_1"
        },
        "Sext": {
          "ant_1": "com-Liebe-each-Sext-ant_1",
          "ant_2": "com-Liebe-each-Sext-ant_2",
          "ant_3": "com-Liebe-each-Sext-ant_3",
          "les_buch": "com-Liebe-each-Sext-Les_Buch",
          "les_stelle": "com-Liebe-each-Sext–Les_Stelle",
          "les_text": "com-Liebe-each-Sext-Les_Text",
          "resp1_0": "com-Liebe-each-Sext-Resp1_0",
          "resp1_1": "com-Liebe-each-Sext-Resp1_1"
        },
        "Terz": {
          "ant_1": "com-Liebe-each-Terz-ant_1",
          "ant_2": "com-Liebe-each-Terz-ant_2",
          "ant_3": "com-Liebe-each-Terz-ant_3",
          "les_buch": "com-Liebe-each-Terz-Les_Buch",
          "les_stelle": "com-Liebe-each-Terz–Les_Stelle",
          "les_text": "com-Liebe-each-Terz-Les_Text",
          "resp1_0": "com-Liebe-each-Terz-Resp1_0",
          "resp1_1": "com-Liebe-each-Terz-Resp1_1"
        },
        "Vesper": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Liebe-each-Vesper-ant_1",
          "ant_2": "com-Liebe-each-Vesper-ant_2",
          "ant_3": "com-Liebe-each-Vesper-ant_3",
          "les_buch": "com-Liebe-each-Vesper-Les_Buch",
          "les_stelle": "com-Liebe-each-Vesper–Les_Stelle",
          "les_text": "com-Liebe-each-Vesper-Les_Text",
          "resp1_1": "com-Liebe-each-Vesper-Resp1_1",
          "resp1_2": "com-Liebe-each-Vesper-Resp1_2",
          "resp1_3": "com-Liebe-each-Vesper-Resp1_3",
          "ant_ev": "com-Liebe-each-Vesper-Ant_Ev",
          "bitten_e": "com-Liebe-each-Vesper-Bitten_E",
          "bitten_r": "com-Liebe-each-Vesper-Bitten_R",
          "bitten": "com-Liebe-each-Vesper-Bitten"
        }
      }
    },
    "Mann": {
      "each": {
        "Invitatorium": {
          "ant_0": "com-Mann-each-Invitatorium-ant_0"
        },
        "Laudes": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Mann-each-Laudes-ant_1",
          "ant_2": "com-Mann-each-Laudes-ant_2",
          "ant_3": "com-Mann-each-Laudes-ant_3",
          "les_buch": "com-Mann-each-Laudes-Les_Buch",
          "les_stelle": "com-Mann-each-Laudes–Les_Stelle",
          "les_text": "com-Mann-each-Laudes-Les_Text",
          "resp1_1": "com-Mann-each-Laudes-Resp1_1",
          "resp1_2": "com-Mann-each-Laudes-Resp1_2",
          "resp1_3": "com-Mann-each-Laudes-Resp1_3",
          "ant_ev": "com-Mann-each-Laudes-Ant_Ev",
          "bitten_e": "com-Mann-each-Laudes-Bitten_E",
          "bitten_r": "com-Mann-each-Laudes-Bitten_R",
          "bitten": "com-Mann-each-Laudes-Bitten"
        },
        "Lesehore": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Mann-each-Lesehore-ant_1",
          "ant_2": "com-Mann-each-Lesehore-ant_2",
          "ant_3": "com-Mann-each-Lesehore-ant_3",
          "resp0_0": "com-Mann-each-Lesehore-Resp0_0",
          "resp0_1": "com-Mann-each-Lesehore-Resp0_1",
          "les_buch": "com-Mann-each-Lesehore-Les_Buch",
          "les_stelle": "com-Mann-each-Lesehore–Les_Stelle",
          "les_text": "com-Mann-each-Lesehore-Les_Text",
          "resp1_1": "com-Mann-each-Lesehore-Resp1_1",
          "resp1_2": "com-Mann-each-Lesehore-Resp1_2",
          "resp1_3": "com-Mann-each-Lesehore-Resp1_3",
          "patr_autor": "com-Mann-each-Lesehore-Patr_Autor",
          "patr_text": "com-Mann-each-Lesehore-Patr_Text",
          "patr_resp1": "com-Mann-each-Lesehore-Patr_Resp1",
          "patr_resp2": "com-Mann-each-Lesehore-Patr_Resp2",
          "patr_resp3": "com-Mann-each-Lesehore-Patr_Resp3"
        },
        "Non": {
          "ant_1": "com-Mann-each-Non-ant_1",
          "ant_2": "com-Mann-each-Non-ant_2",
          "ant_3": "com-Mann-each-Non-ant_3",
          "les_buch": "com-Mann-each-Non-Les_Buch",
          "les_stelle": "com-Mann-each-Non–Les_Stelle",
          "les_text": "com-Mann-each-Non-Les_Text",
          "resp1_0": "com-Mann-each-Non-Resp1_0",
          "resp1_1": "com-Mann-each-Non-Resp1_1"
        },
        "Sext": {
          "ant_1": "com-Mann-each-Sext-ant_1",
          "ant_2": "com-Mann-each-Sext-ant_2",
          "ant_3": "com-Mann-each-Sext-ant_3",
          "les_buch": "com-Mann-each-Sext-Les_Buch",
          "les_stelle": "com-Mann-each-Sext–Les_Stelle",
          "les_text": "com-Mann-each-Sext-Les_Text",
          "resp1_0": "com-Mann-each-Sext-Resp1_0",
          "resp1_1": "com-Mann-each-Sext-Resp1_1"
        },
        "Terz": {
          "ant_1": "com-Mann-each-Terz-ant_1",
          "ant_2": "com-Mann-each-Terz-ant_2",
          "ant_3": "com-Mann-each-Terz-ant_3",
          "les_buch": "com-Mann-each-Terz-Les_Buch",
          "les_stelle": "com-Mann-each-Terz–Les_Stelle",
          "les_text": "com-Mann-each-Terz-Les_Text",
          "resp1_0": "com-Mann-each-Terz-Resp1_0",
          "resp1_1": "com-Mann-each-Terz-Resp1_1"
        },
        "Vesper": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Mann-each-Vesper-ant_1",
          "ant_2": "com-Mann-each-Vesper-ant_2",
          "ant_3": "com-Mann-each-Vesper-ant_3",
          "les_buch": "com-Mann-each-Vesper-Les_Buch",
          "les_stelle": "com-Mann-each-Vesper–Les_Stelle",
          "les_text": "com-Mann-each-Vesper-Les_Text",
          "resp1_1": "com-Mann-each-Vesper-Resp1_1",
          "resp1_2": "com-Mann-each-Vesper-Resp1_2",
          "resp1_3": "com-Mann-each-Vesper-Resp1_3",
          "ant_ev": "com-Mann-each-Vesper-Ant_Ev",
          "bitten_e": "com-Mann-each-Vesper-Bitten_E",
          "bitten_r": "com-Mann-each-Vesper-Bitten_R",
          "bitten": "com-Mann-each-Vesper-Bitten"
        }
      }
    },
    "Männer": {
      "each": {
        "Invitatorium": {
          "ant_0": "com-Männer-each-Invitatorium-ant_0"
        },
        "Laudes": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Männer-each-Laudes-ant_1",
          "ant_2": "com-Männer-each-Laudes-ant_2",
          "ant_3": "com-Männer-each-Laudes-ant_3",
          "les_buch": "com-Männer-each-Laudes-Les_Buch",
          "les_stelle": "com-Männer-each-Laudes–Les_Stelle",
          "les_text": "com-Männer-each-Laudes-Les_Text",
          "resp1_1": "com-Männer-each-Laudes-Resp1_1",
          "resp1_2": "com-Männer-each-Laudes-Resp1_2",
          "resp1_3": "com-Männer-each-Laudes-Resp1_3",
          "ant_ev": "com-Männer-each-Laudes-Ant_Ev",
          "bitten_e": "com-Männer-each-Laudes-Bitten_E",
          "bitten_r": "com-Männer-each-Laudes-Bitten_R",
          "bitten": "com-Männer-each-Laudes-Bitten"
        },
        "Lesehore": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Männer-each-Lesehore-ant_1",
          "ant_2": "com-Männer-each-Lesehore-ant_2",
          "ant_3": "com-Männer-each-Lesehore-ant_3",
          "resp0_0": "com-Männer-each-Lesehore-Resp0_0",
          "resp0_1": "com-Männer-each-Lesehore-Resp0_1",
          "les_buch": "com-Männer-each-Lesehore-Les_Buch",
          "les_stelle": "com-Männer-each-Lesehore–Les_Stelle",
          "les_text": "com-Männer-each-Lesehore-Les_Text",
          "resp1_1": "com-Männer-each-Lesehore-Resp1_1",
          "resp1_2": "com-Männer-each-Lesehore-Resp1_2",
          "resp1_3": "com-Männer-each-Lesehore-Resp1_3",
          "patr_autor": "com-Männer-each-Lesehore-Patr_Autor",
          "patr_text": "com-Männer-each-Lesehore-Patr_Text",
          "patr_resp1": "com-Männer-each-Lesehore-Patr_Resp1",
          "patr_resp2": "com-Männer-each-Lesehore-Patr_Resp2",
          "patr_resp3": "com-Männer-each-Lesehore-Patr_Resp3"
        },
        "Non": {
          "ant_1": "com-Männer-each-Non-ant_1",
          "ant_2": "com-Männer-each-Non-ant_2",
          "ant_3": "com-Männer-each-Non-ant_3",
          "les_buch": "com-Männer-each-Non-Les_Buch",
          "les_stelle": "com-Männer-each-Non–Les_Stelle",
          "les_text": "com-Männer-each-Non-Les_Text",
          "resp1_0": "com-Männer-each-Non-Resp1_0",
          "resp1_1": "com-Männer-each-Non-Resp1_1"
        },
        "Sext": {
          "ant_1": "com-Männer-each-Sext-ant_1",
          "ant_2": "com-Männer-each-Sext-ant_2",
          "ant_3": "com-Männer-each-Sext-ant_3",
          "les_buch": "com-Männer-each-Sext-Les_Buch",
          "les_stelle": "com-Männer-each-Sext–Les_Stelle",
          "les_text": "com-Männer-each-Sext-Les_Text",
          "resp1_0": "com-Männer-each-Sext-Resp1_0",
          "resp1_1": "com-Männer-each-Sext-Resp1_1"
        },
        "Terz": {
          "ant_1": "com-Männer-each-Terz-ant_1",
          "ant_2": "com-Männer-each-Terz-ant_2",
          "ant_3": "com-Männer-each-Terz-ant_3",
          "les_buch": "com-Männer-each-Terz-Les_Buch",
          "les_stelle": "com-Männer-each-Terz–Les_Stelle",
          "les_text": "com-Männer-each-Terz-Les_Text",
          "resp1_0": "com-Männer-each-Terz-Resp1_0",
          "resp1_1": "com-Männer-each-Terz-Resp1_1"
        },
        "Vesper": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Männer-each-Vesper-ant_1",
          "ant_2": "com-Männer-each-Vesper-ant_2",
          "ant_3": "com-Männer-each-Vesper-ant_3",
          "les_buch": "com-Männer-each-Vesper-Les_Buch",
          "les_stelle": "com-Männer-each-Vesper–Les_Stelle",
          "les_text": "com-Männer-each-Vesper-Les_Text",
          "resp1_1": "com-Männer-each-Vesper-Resp1_1",
          "resp1_2": "com-Männer-each-Vesper-Resp1_2",
          "resp1_3": "com-Männer-each-Vesper-Resp1_3",
          "ant_ev": "com-Männer-each-Vesper-Ant_Ev",
          "bitten_e": "com-Männer-each-Vesper-Bitten_E",
          "bitten_r": "com-Männer-each-Vesper-Bitten_R",
          "bitten": "com-Männer-each-Vesper-Bitten"
        }
      }
    },
    "Mar": {
      "each": {
        "Invitatorium": {
          "ps_24": 0,
          "ant_0": "Christus, den Sohn Mariens – kommt, wir beten ihn an!"
        },
        "Laudes": {
          "hymn_1": 9999.0,
          "ps_1": 63.0,
          "ps_2": 160.0,
          "ps_3": 149.0,
          "ant_1": "com-Mar-each-Laudes-ant_1",
          "ant_2": "com-Mar-each-Laudes-ant_2",
          "ant_3": "com-Mar-each-Laudes-ant_3",
          "les_buch": "com-Mar-each-Laudes-Les_Buch",
          "les_stelle": "com-Mar-each-Laudes–Les_Stelle",
          "les_text": "com-Mar-each-Laudes-Les_Text",
          "resp1_1": "com-Mar-each-Laudes-Resp1_1",
          "resp1_2": "com-Mar-each-Laudes-Resp1_2",
          "resp1_3": "com-Mar-each-Laudes-Resp1_3",
          "ant_ev": "com-Mar-each-Laudes-Ant_Ev",
          "bitten_e": "com-Mar-each-Laudes-Bitten_E",
          "bitten_r": "com-Mar-each-Laudes-Bitten_R",
          "bitten": "com-Mar-each-Laudes-Bitten"
        },
        "Lesehore": {
          "hymn_1": 9999.0,
          "ps_1": 24.0,
          "ps_2": 46.0,
          "ps_3": 87.0,
          "ant_1": "Maria hat Segen empfangen vom Herrn und Erbarmen von Gott, ihrem Retter.",
          "ant_2": "Der Höchste hat seine Wohnung geheiligt.",
          "ant_3": "Herrliches sagt man von dir, Jungfrau Maria.",
          "resp0_0": "Selig, die das Wort Gottes hören.",
          "resp0_1": "Und es befolgen.",
          "les_buch": "1 Chr",
          "les_stelle": "17,1–15",
          "resp1_1": "com-Mar-each-Lesehore-Resp1_1",
          "resp1_2": "com-Mar-each-Lesehore-Resp1_2",
          "resp1_3": "com-Mar-each-Lesehore-Resp1_3",
          "patr_autor": "com-Mar-each-Lesehore-Patr_Autor",
          "patr_text": "com-Mar-each-Lesehore-Patr_Text",
          "patr_resp1": "com-Mar-each-Lesehore-Patr_Resp1",
          "patr_resp2": "com-Mar-each-Lesehore-Patr_Resp2",
          "patr_resp3": "com-Mar-each-Lesehore-Patr_Resp3"
        },
        "Non": {
          "ant_1": "com-Mar-each-Non-ant_1",
          "ant_2": "com-Mar-each-Non-ant_2",
          "ant_3": "com-Mar-each-Non-ant_3",
          "les_buch": "com-Mar-each-Non-Les_Buch",
          "les_stelle": "com-Mar-each-Non–Les_Stelle",
          "les_text": "com-Mar-each-Non-Les_Text",
          "resp1_0": "com-Mar-each-Non-Resp1_0",
          "resp1_1": "com-Mar-each-Non-Resp1_1"
        },
        "Sext": {
          "ant_1": "com-Mar-each-Sext-ant_1",
          "ant_2": "com-Mar-each-Sext-ant_2",
          "ant_3": "com-Mar-each-Sext-ant_3",
          "les_buch": "com-Mar-each-Sext-Les_Buch",
          "les_stelle": "com-Mar-each-Sext–Les_Stelle",
          "les_text": "com-Mar-each-Sext-Les_Text",
          "resp1_0": "com-Mar-each-Sext-Resp1_0",
          "resp1_1": "com-Mar-each-Sext-Resp1_1"
        },
        "Terz": {
          "ant_1": "com-Mar-each-Terz-ant_1",
          "ant_2": "com-Mar-each-Terz-ant_2",
          "ant_3": "com-Mar-each-Terz-ant_3",
          "les_buch": "com-Mar-each-Terz-Les_Buch",
          "les_stelle": "com-Mar-each-Terz–Les_Stelle",
          "les_text": "com-Mar-each-Terz-Les_Text",
          "resp1_0": "com-Mar-each-Terz-Resp1_0",
          "resp1_1": "com-Mar-each-Terz-Resp1_1"
        },
        "Vesper": {
          "hymn_1": 9999.0,
          "ps_1": 122.0,
          "ps_2": 127.0,
          "ps_3": 152.0,
          "ant_1": "com-Mar-each-Vesper-ant_1",
          "ant_2": "com-Mar-each-Vesper-ant_2",
          "ant_3": "com-Mar-each-Vesper-ant_3",
          "les_buch": "com-Mar-each-Vesper-Les_Buch",
          "les_stelle": "com-Mar-each-Vesper–Les_Stelle",
          "les_text": "com-Mar-each-Vesper-Les_Text",
          "resp1_1": "com-Mar-each-Vesper-Resp1_1",
          "resp1_2": "com-Mar-each-Vesper-Resp1_2",
          "resp1_3": "com-Mar-each-Vesper-Resp1_3",
          "ant_ev": "com-Mar-each-Vesper-Ant_Ev",
          "bitten_e": "com-Mar-each-Vesper-Bitten_E",
          "bitten_r": "com-Mar-each-Vesper-Bitten_R",
          "bitten": "com-Mar-each-Vesper-Bitten"
        }
      }
    },
    "Märt": {
      "each": {
        "Invitatorium": {
          "ant_0": "Den Herrn, den König der Märtyrer – kommt, wir beten ihn an!"
        },
        "Laudes": {
          "name": "Märt",
          "hymn_1": 71118.0,
          "ps_1": 63.0,
          "ps_2": 160.0,
          "ps_3": 149.0,
          "ant_1": "com-Märt-each-Laudes-ant_1",
          "ant_2": "com-Märt-each-Laudes-ant_2",
          "ant_3": "com-Märt-each-Laudes-ant_3",
          "les_buch": "2 Kor",
          "les_stelle": "1,3-5",
          "les_text": "Gepriesen sei der Gott und Vater Jesu Christi, unseres Herrn, der Vater des Erbarmens und der Gott allen Trostes. Er tröstet uns in all unserer Not, damit auch wir die Kraft haben, alle zu trösten, die in Not sind, durch den Trost, mit dem auch wir von Gott getröstet werden. Wie uns nämlich die Leiden Christi überreich zuteil geworden sind, so wird uns durch Christus auch überreicher Trost zuteil.",
          "resp1_1": "com-Märt-each-Laudes-Resp1_1",
          "resp1_2": "com-Märt-each-Laudes-Resp1_2",
          "resp1_3": "com-Märt-each-Laudes-Resp1_3",
          "ant_ev": "com-Märt-each-Laudes-Ant_Ev",
          "bitten_e": "com-Märt-each-Laudes-Bitten_E",
          "bitten_r": "com-Märt-each-Laudes-Bitten_R",
          "bitten": "com-Märt-each-Laudes-Bitten"
        },
        "Lesehore": {
          "hymn_1": 71110.0,
          "ps_1": 2.0,
          "ps_2": 11.0,
          "ps_3": 17.0,
          "ant_1": "com-Märt-each-Lesehore-ant_1",
          "ant_2": "com-Märt-each-Lesehore-ant_2",
          "ant_3": "com-Märt-each-Lesehore-ant_3",
          "resp0_0": "com-Märt-each-Lesehore-Resp0_0",
          "resp0_1": "com-Märt-each-Lesehore-Resp0_1",
          "les_buch": "com-Märt-each-Lesehore-Les_Buch",
          "les_stelle": "com-Märt-each-Lesehore–Les_Stelle",
          "les_text": "com-Märt-each-Lesehore-Les_Text",
          "resp1_1": "com-Märt-each-Lesehore-Resp1_1",
          "resp1_2": "com-Märt-each-Lesehore-Resp1_2",
          "resp1_3": "com-Märt-each-Lesehore-Resp1_3",
          "patr_autor": "com-Märt-each-Lesehore-Patr_Autor",
          "patr_text": "com-Märt-each-Lesehore-Patr_Text",
          "patr_resp1": "com-Märt-each-Lesehore-Patr_Resp1",
          "patr_resp2": "com-Märt-each-Lesehore-Patr_Resp2",
          "patr_resp3": "com-Märt-each-Lesehore-Patr_Resp3"
        },
        "Non": {
          "ant_1": "com-Märt-each-Non-ant_1",
          "ant_2": "com-Märt-each-Non-ant_2",
          "ant_3": "com-Märt-each-Non-ant_3",
          "les_buch": "com-Märt-each-Non-Les_Buch",
          "les_stelle": "com-Märt-each-Non–Les_Stelle",
          "les_text": "com-Märt-each-Non-Les_Text",
          "resp1_0": "com-Märt-each-Non-Resp1_0",
          "resp1_1": "com-Märt-each-Non-Resp1_1"
        },
        "Sext": {
          "ant_1": "com-Märt-each-Sext-ant_1",
          "ant_2": "com-Märt-each-Sext-ant_2",
          "ant_3": "com-Märt-each-Sext-ant_3",
          "les_buch": "com-Märt-each-Sext-Les_Buch",
          "les_stelle": "com-Märt-each-Sext–Les_Stelle",
          "les_text": "com-Märt-each-Sext-Les_Text",
          "resp1_0": "com-Märt-each-Sext-Resp1_0",
          "resp1_1": "com-Märt-each-Sext-Resp1_1"
        },
        "Terz": {
          "ant_1": "com-Märt-each-Terz-ant_1",
          "ant_2": "com-Märt-each-Terz-ant_2",
          "ant_3": "com-Märt-each-Terz-ant_3",
          "les_buch": "com-Märt-each-Terz-Les_Buch",
          "les_stelle": "com-Märt-each-Terz–Les_Stelle",
          "les_text": "com-Märt-each-Terz-Les_Text",
          "resp1_0": "com-Märt-each-Terz-Resp1_0",
          "resp1_1": "com-Märt-each-Terz-Resp1_1"
        },
        "Vesper": {
          "hymn_1": 71123.0,
          "ps_1": 116.1,
          "ps_2": 116.2,
          "ps_3": 153.0,
          "ant_1": "com-Märt-each-Vesper-ant_1",
          "ant_2": "com-Märt-each-Vesper-ant_2",
          "ant_3": "com-Märt-each-Vesper-ant_3",
          "les_buch": "1 Petr",
          "les_stelle": "4,13-14",
          "les_text": "Freut euch, dass ihr Anteil an den Leiden Christi habt; denn so könnt ihr auch bei der Offenbarung seiner Herrlichkeit voll Freude jubeln. Wenn ihr wegen des Namens Christi beschimpft werdet, seid ihr seligzupreisen; denn der Geist der Herrlichkeit, der Geist Gottes, ruht auf euch.",
          "resp1_1": "com-Märt-each-Vesper-Resp1_1",
          "resp1_2": "com-Märt-each-Vesper-Resp1_2",
          "resp1_3": "com-Märt-each-Vesper-Resp1_3",
          "ant_ev": "com-Märt-each-Vesper-Ant_Ev",
          "bitten_e": "com-Märt-each-Vesper-Bitten_E",
          "bitten_r": "com-Märt-each-Vesper-Bitten_R",
          "bitten": "com-Märt-each-Vesper-Bitten"
        }
      }
    },
    "MärtF": {
      "each": {
        "Invitatorium": {
          "comm_1": "0",
          "comm_2": "0",
          "name": "0",
          "farbe": "0",
          "hymn_1": 0.0,
          "hymn_2": 0.0,
          "hymn_3": 0.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "ps_1": 0.0,
          "ps_2": 0.0,
          "ps_3": 0.0,
          "ps_100": 0.0,
          "ps_95": 0.0,
          "ps_67": 0.0,
          "ps_24": 0.0,
          "ant_0": "Den Herrn, den König der Märtyrer – kommt, wir beten ihn an!",
          "ant_1": "0",
          "ant_2": "0",
          "ant_3": "0",
          "resp0_0": "0",
          "resp0_1": "0",
          "les_buch": "0",
          "les_stelle": "0",
          "les_text": "0",
          "resp1_0": "0",
          "resp1_1": "0",
          "resp1_2": "0",
          "resp1_3": "0",
          "patr_autor": "0",
          "patr_werk": "0",
          "patr_text": "0",
          "patr_resp1": "0",
          "patr_resp2": "0",
          "patr_resp3": "0",
          "ant_ev": "0",
          "ant_a": "0",
          "ant_b": "0",
          "ant_c": "0",
          "ev": 0.0,
          "ev_lat": 0.0,
          "bitten_e": "0",
          "bitten_r": "0",
          "bitten": "0",
          "vu": 0.0,
          "vu_lat": 0.0,
          "oration": "0",
          "oration_komplet": "0",
          "marant": 0.0,
          "marant_lat": 0.0
        },
        "Laudes": {
          "comm_1": "0",
          "comm_2": "0",
          "name": "Märt",
          "farbe": "0",
          "hymn_1": 71118.0,
          "hymn_2": 0.0,
          "hymn_3": 0.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ps_100": 0.0,
          "ps_95": 0.0,
          "ps_67": 0.0,
          "ps_24": 0.0,
          "ant_0": "0",
          "ant_1": "com-MärtPl-each-Laudes-ant_1",
          "ant_2": "com-MärtPl-each-Laudes-ant_2",
          "ant_3": "com-MärtPl-each-Laudes-ant_3",
          "resp0_0": "0",
          "resp0_1": "0",
          "les_buch": "2 Kor",
          "les_stelle": "1,3-5",
          "les_text": "Gepriesen sei der Gott und Vater Jesu Christi, unseres Herrn, der Vater des Erbarmens und der Gott allen Trostes. Er tröstet uns in all unserer Not, damit auch wir die Kraft haben, alle zu trösten, die in Not sind, durch den Trost, mit dem auch wir von Gott getröstet werden. Wie uns nämlich die Leiden Christi überreich zuteil geworden sind, so wird uns durch Christus auch überreicher Trost zuteil.",
          "resp1_0": "0",
          "resp1_1": "com-MärtPl-each-Laudes-Resp1_1",
          "resp1_2": "com-MärtPl-each-Laudes-Resp1_2",
          "resp1_3": "com-MärtPl-each-Laudes-Resp1_3",
          "patr_autor": "0",
          "patr_werk": "0",
          "patr_text": "0",
          "patr_resp1": "0",
          "patr_resp2": "0",
          "patr_resp3": "0",
          "ant_ev": "com-MärtPl-each-Laudes-Ant_Ev",
          "ant_a": "0",
          "ant_b": "0",
          "ant_c": "0",
          "ev": 0.0,
          "ev_lat": 0.0,
          "bitten_e": "com-MärtPl-each-Laudes-Bitten_E",
          "bitten_r": "com-MärtPl-each-Laudes-Bitten_R",
          "bitten": "com-MärtPl-each-Laudes-Bitten",
          "vu": 0.0,
          "vu_lat": 0.0,
          "oration": "0",
          "oration_komplet": "0",
          "marant": 0.0,
          "marant_lat": 0.0
        },
        "Lesehore": {
          "comm_1": "0",
          "comm_2": "0",
          "name": "0",
          "farbe": "0",
          "hymn_1": 71085.0,
          "hymn_2": 0.0,
          "hymn_3": 0.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "ps_1": 2.0,
          "ps_2": 33.1,
          "ps_3": 33.2,
          "ps_100": 0.0,
          "ps_95": 0.0,
          "ps_67": 0.0,
          "ps_24": 0.0,
          "ant_0": "0",
          "ant_1": "Die heiligen Märtyrer vergossen für Christus ihr Blut und erlangten im Himmel ewigen Lohn.",
          "ant_2": "com-MärtPl-each-Lesehore-ant_2",
          "ant_3": "com-MärtPl-each-Lesehore-ant_3",
          "resp0_0": "com-MärtPl-each-Lesehore-Resp0_0",
          "resp0_1": "com-MärtPl-each-Lesehore-Resp0_1",
          "les_buch": "com-MärtPl-each-Lesehore-Les_Buch",
          "les_stelle": "com-MärtPl-each-Lesehore–Les_Stelle",
          "les_text": "com-MärtPl-each-Lesehore-Les_Text",
          "resp1_0": "0",
          "resp1_1": "com-MärtPl-each-Lesehore-Resp1_1",
          "resp1_2": "com-MärtPl-each-Lesehore-Resp1_2",
          "resp1_3": "com-MärtPl-each-Lesehore-Resp1_3",
          "patr_autor": "com-MärtPl-each-Lesehore-Patr_Autor",
          "patr_werk": "0",
          "patr_text": "com-MärtPl-each-Lesehore-Patr_Text",
          "patr_resp1": "com-MärtPl-each-Lesehore-Patr_Resp1",
          "patr_resp2": "com-MärtPl-each-Lesehore-Patr_Resp2",
          "patr_resp3": "com-MärtPl-each-Lesehore-Patr_Resp3",
          "ant_ev": "0",
          "ant_a": "0",
          "ant_b": "0",
          "ant_c": "0",
          "ev": 0.0,
          "ev_lat": 0.0,
          "bitten_e": "0",
          "bitten_r": "0",
          "bitten": "0",
          "vu": 0.0,
          "vu_lat": 0.0,
          "oration": "0",
          "oration_komplet": "0",
          "marant": 0.0,
          "marant_lat": 0.0
        },
        "Non": {
          "comm_1": "0",
          "comm_2": "0",
          "name": "0",
          "farbe": "0",
          "hymn_1": 0.0,
          "hymn_2": 0.0,
          "hymn_3": 0.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "ps_1": 0.0,
          "ps_2": 0.0,
          "ps_3": 0.0,
          "ps_100": 0.0,
          "ps_95": 0.0,
          "ps_67": 0.0,
          "ps_24": 0.0,
          "ant_0": "0",
          "ant_1": "com-MärtPl-each-Non-ant_1",
          "ant_2": "com-MärtPl-each-Non-ant_2",
          "ant_3": "com-MärtPl-each-Non-ant_3",
          "resp0_0": "0",
          "resp0_1": "0",
          "les_buch": "com-MärtPl-each-Non-Les_Buch",
          "les_stelle": "com-MärtPl-each-Non–Les_Stelle",
          "les_text": "com-MärtPl-each-Non-Les_Text",
          "resp1_0": "com-MärtPl-each-Non-Resp1_0",
          "resp1_1": "com-MärtPl-each-Non-Resp1_1",
          "resp1_2": "0",
          "resp1_3": "0",
          "patr_autor": "0",
          "patr_werk": "0",
          "patr_text": "0",
          "patr_resp1": "0",
          "patr_resp2": "0",
          "patr_resp3": "0",
          "ant_ev": "0",
          "ant_a": "0",
          "ant_b": "0",
          "ant_c": "0",
          "ev": 0.0,
          "ev_lat": 0.0,
          "bitten_e": "0",
          "bitten_r": "0",
          "bitten": "0",
          "vu": 0.0,
          "vu_lat": 0.0,
          "oration": "0",
          "oration_komplet": "0",
          "marant": 0.0,
          "marant_lat": 0.0
        },
        "Sext": {
          "comm_1": "0",
          "comm_2": "0",
          "name": "0",
          "farbe": "0",
          "hymn_1": 0.0,
          "hymn_2": 0.0,
          "hymn_3": 0.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "ps_1": 0.0,
          "ps_2": 0.0,
          "ps_3": 0.0,
          "ps_100": 0.0,
          "ps_95": 0.0,
          "ps_67": 0.0,
          "ps_24": 0.0,
          "ant_0": "0",
          "ant_1": "com-MärtPl-each-Sext-ant_1",
          "ant_2": "com-MärtPl-each-Sext-ant_2",
          "ant_3": "com-MärtPl-each-Sext-ant_3",
          "resp0_0": "0",
          "resp0_1": "0",
          "les_buch": "com-MärtPl-each-Sext-Les_Buch",
          "les_stelle": "com-MärtPl-each-Sext–Les_Stelle",
          "les_text": "com-MärtPl-each-Sext-Les_Text",
          "resp1_0": "com-MärtPl-each-Sext-Resp1_0",
          "resp1_1": "com-MärtPl-each-Sext-Resp1_1",
          "resp1_2": "0",
          "resp1_3": "0",
          "patr_autor": "0",
          "patr_werk": "0",
          "patr_text": "0",
          "patr_resp1": "0",
          "patr_resp2": "0",
          "patr_resp3": "0",
          "ant_ev": "0",
          "ant_a": "0",
          "ant_b": "0",
          "ant_c": "0",
          "ev": 0.0,
          "ev_lat": 0.0,
          "bitten_e": "0",
          "bitten_r": "0",
          "bitten": "0",
          "vu": 0.0,
          "vu_lat": 0.0,
          "oration": "0",
          "oration_komplet": "0",
          "marant": 0.0,
          "marant_lat": 0.0
        },
        "Terz": {
          "comm_1": "0",
          "comm_2": "0",
          "name": "0",
          "farbe": "0",
          "hymn_1": 0.0,
          "hymn_2": 0.0,
          "hymn_3": 0.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "ps_1": 0.0,
          "ps_2": 0.0,
          "ps_3": 0.0,
          "ps_100": 0.0,
          "ps_95": 0.0,
          "ps_67": 0.0,
          "ps_24": 0.0,
          "ant_0": "0",
          "ant_1": "com-MärtPl-each-Terz-ant_1",
          "ant_2": "com-MärtPl-each-Terz-ant_2",
          "ant_3": "com-MärtPl-each-Terz-ant_3",
          "resp0_0": "0",
          "resp0_1": "0",
          "les_buch": "com-MärtPl-each-Terz-Les_Buch",
          "les_stelle": "com-MärtPl-each-Terz–Les_Stelle",
          "les_text": "com-MärtPl-each-Terz-Les_Text",
          "resp1_0": "com-MärtPl-each-Terz-Resp1_0",
          "resp1_1": "com-MärtPl-each-Terz-Resp1_1",
          "resp1_2": "0",
          "resp1_3": "0",
          "patr_autor": "0",
          "patr_werk": "0",
          "patr_text": "0",
          "patr_resp1": "0",
          "patr_resp2": "0",
          "patr_resp3": "0",
          "ant_ev": "0",
          "ant_a": "0",
          "ant_b": "0",
          "ant_c": "0",
          "ev": 0.0,
          "ev_lat": 0.0,
          "bitten_e": "0",
          "bitten_r": "0",
          "bitten": "0",
          "vu": 0.0,
          "vu_lat": 0.0,
          "oration": "0",
          "oration_komplet": "0",
          "marant": 0.0,
          "marant_lat": 0.0
        },
        "Vesper": {
          "comm_1": "0",
          "comm_2": "0",
          "name": "0",
          "farbe": "0",
          "hymn_1": 71123.0,
          "hymn_2": 0.0,
          "hymn_3": 0.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ps_100": 0.0,
          "ps_95": 0.0,
          "ps_67": 0.0,
          "ps_24": 0.0,
          "ant_0": "0",
          "ant_1": "com-MärtPl-each-Vesper-ant_1",
          "ant_2": "com-MärtPl-each-Vesper-ant_2",
          "ant_3": "com-MärtPl-each-Vesper-ant_3",
          "resp0_0": "0",
          "resp0_1": "0",
          "les_buch": "1 Petr",
          "les_stelle": "4,13-14",
          "les_text": "Freut euch, dass ihr Anteil an den Leiden Christi habt; denn so könnt ihr auch bei der Offenbarung seiner Herrlichkeit voll Freude jubeln. Wenn ihr wegen des Namens Christi beschimpft werdet, seid ihr seligzupreisen; denn der Geist der Herrlichkeit, der Geist Gottes, ruht auf euch.",
          "resp1_0": "0",
          "resp1_1": "com-MärtPl-each-Vesper-Resp1_1",
          "resp1_2": "com-MärtPl-each-Vesper-Resp1_2",
          "resp1_3": "com-MärtPl-each-Vesper-Resp1_3",
          "patr_autor": "0",
          "patr_werk": "0",
          "patr_text": "0",
          "patr_resp1": "0",
          "patr_resp2": "0",
          "patr_resp3": "0",
          "ant_ev": "com-MärtPl-each-Vesper-Ant_Ev",
          "ant_a": "0",
          "ant_b": "0",
          "ant_c": "0",
          "ev": 0.0,
          "ev_lat": 0.0,
          "bitten_e": "com-MärtPl-each-Vesper-Bitten_E",
          "bitten_r": "com-MärtPl-each-Vesper-Bitten_R",
          "bitten": "com-MärtPl-each-Vesper-Bitten",
          "vu": 0.0,
          "vu_lat": 0.0,
          "oration": "0",
          "oration_komplet": "0",
          "marant": 0.0,
          "marant_lat": 0.0
        }
      }
    },
    "MärtJgfr": {
      "each": {
        "Invitatorium": {
          "comm_1": "0",
          "comm_2": "0",
          "name": "0",
          "farbe": "0",
          "hymn_1": 0.0,
          "hymn_2": 0.0,
          "hymn_3": 0.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "ps_1": 0.0,
          "ps_2": 0.0,
          "ps_3": 0.0,
          "ps_100": 0.0,
          "ps_95": 0.0,
          "ps_67": 0.0,
          "ps_24": 0.0,
          "ant_0": "Den Herrn, den König der Märtyrer – kommt, wir beten ihn an!",
          "ant_1": "0",
          "ant_2": "0",
          "ant_3": "0",
          "resp0_0": "0",
          "resp0_1": "0",
          "les_buch": "0",
          "les_stelle": "0",
          "les_text": "0",
          "resp1_0": "0",
          "resp1_1": "0",
          "resp1_2": "0",
          "resp1_3": "0",
          "patr_autor": "0",
          "patr_werk": "0",
          "patr_text": "0",
          "patr_resp1": "0",
          "patr_resp2": "0",
          "patr_resp3": "0",
          "ant_ev": "0",
          "ant_a": "0",
          "ant_b": "0",
          "ant_c": "0",
          "ev": 0.0,
          "ev_lat": 0.0,
          "bitten_e": "0",
          "bitten_r": "0",
          "bitten": "0",
          "vu": 0.0,
          "vu_lat": 0.0,
          "oration": "0",
          "oration_komplet": "0",
          "marant": 0.0,
          "marant_lat": 0.0
        },
        "Laudes": {
          "comm_1": "0",
          "comm_2": "0",
          "name": "Märt",
          "farbe": "0",
          "hymn_1": 71119.0,
          "hymn_2": 0.0,
          "hymn_3": 0.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ps_100": 0.0,
          "ps_95": 0.0,
          "ps_67": 0.0,
          "ps_24": 0.0,
          "ant_0": "0",
          "ant_1": "com-MärtPl-each-Laudes-ant_1",
          "ant_2": "com-MärtPl-each-Laudes-ant_2",
          "ant_3": "com-MärtPl-each-Laudes-ant_3",
          "resp0_0": "0",
          "resp0_1": "0",
          "les_buch": "2 Kor",
          "les_stelle": "1,3-5",
          "les_text": "Gepriesen sei der Gott und Vater Jesu Christi, unseres Herrn, der Vater des Erbarmens und der Gott allen Trostes. Er tröstet uns in all unserer Not, damit auch wir die Kraft haben, alle zu trösten, die in Not sind, durch den Trost, mit dem auch wir von Gott getröstet werden. Wie uns nämlich die Leiden Christi überreich zuteil geworden sind, so wird uns durch Christus auch überreicher Trost zuteil.",
          "resp1_0": "0",
          "resp1_1": "com-MärtPl-each-Laudes-Resp1_1",
          "resp1_2": "com-MärtPl-each-Laudes-Resp1_2",
          "resp1_3": "com-MärtPl-each-Laudes-Resp1_3",
          "patr_autor": "0",
          "patr_werk": "0",
          "patr_text": "0",
          "patr_resp1": "0",
          "patr_resp2": "0",
          "patr_resp3": "0",
          "ant_ev": "com-MärtPl-each-Laudes-Ant_Ev",
          "ant_a": "0",
          "ant_b": "0",
          "ant_c": "0",
          "ev": 0.0,
          "ev_lat": 0.0,
          "bitten_e": "com-MärtPl-each-Laudes-Bitten_E",
          "bitten_r": "com-MärtPl-each-Laudes-Bitten_R",
          "bitten": "com-MärtPl-each-Laudes-Bitten",
          "vu": 0.0,
          "vu_lat": 0.0,
          "oration": "0",
          "oration_komplet": "0",
          "marant": 0.0,
          "marant_lat": 0.0
        },
        "Lesehore": {
          "comm_1": "0",
          "comm_2": "0",
          "name": "0",
          "farbe": "0",
          "hymn_1": 71085.0,
          "hymn_2": 0.0,
          "hymn_3": 0.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "ps_1": 2.0,
          "ps_2": 33.1,
          "ps_3": 33.2,
          "ps_100": 0.0,
          "ps_95": 0.0,
          "ps_67": 0.0,
          "ps_24": 0.0,
          "ant_0": "0",
          "ant_1": "Die heiligen Märtyrer vergossen für Christus ihr Blut und erlangten im Himmel ewigen Lohn.",
          "ant_2": "com-MärtPl-each-Lesehore-ant_2",
          "ant_3": "com-MärtPl-each-Lesehore-ant_3",
          "resp0_0": "com-MärtPl-each-Lesehore-Resp0_0",
          "resp0_1": "com-MärtPl-each-Lesehore-Resp0_1",
          "les_buch": "com-MärtPl-each-Lesehore-Les_Buch",
          "les_stelle": "com-MärtPl-each-Lesehore–Les_Stelle",
          "les_text": "com-MärtPl-each-Lesehore-Les_Text",
          "resp1_0": "0",
          "resp1_1": "com-MärtPl-each-Lesehore-Resp1_1",
          "resp1_2": "com-MärtPl-each-Lesehore-Resp1_2",
          "resp1_3": "com-MärtPl-each-Lesehore-Resp1_3",
          "patr_autor": "com-MärtPl-each-Lesehore-Patr_Autor",
          "patr_werk": "0",
          "patr_text": "com-MärtPl-each-Lesehore-Patr_Text",
          "patr_resp1": "com-MärtPl-each-Lesehore-Patr_Resp1",
          "patr_resp2": "com-MärtPl-each-Lesehore-Patr_Resp2",
          "patr_resp3": "com-MärtPl-each-Lesehore-Patr_Resp3",
          "ant_ev": "0",
          "ant_a": "0",
          "ant_b": "0",
          "ant_c": "0",
          "ev": 0.0,
          "ev_lat": 0.0,
          "bitten_e": "0",
          "bitten_r": "0",
          "bitten": "0",
          "vu": 0.0,
          "vu_lat": 0.0,
          "oration": "0",
          "oration_komplet": "0",
          "marant": 0.0,
          "marant_lat": 0.0
        },
        "Non": {
          "comm_1": "0",
          "comm_2": "0",
          "name": "0",
          "farbe": "0",
          "hymn_1": 0.0,
          "hymn_2": 0.0,
          "hymn_3": 0.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "ps_1": 0.0,
          "ps_2": 0.0,
          "ps_3": 0.0,
          "ps_100": 0.0,
          "ps_95": 0.0,
          "ps_67": 0.0,
          "ps_24": 0.0,
          "ant_0": "0",
          "ant_1": "com-MärtPl-each-Non-ant_1",
          "ant_2": "com-MärtPl-each-Non-ant_2",
          "ant_3": "com-MärtPl-each-Non-ant_3",
          "resp0_0": "0",
          "resp0_1": "0",
          "les_buch": "com-MärtPl-each-Non-Les_Buch",
          "les_stelle": "com-MärtPl-each-Non–Les_Stelle",
          "les_text": "com-MärtPl-each-Non-Les_Text",
          "resp1_0": "com-MärtPl-each-Non-Resp1_0",
          "resp1_1": "com-MärtPl-each-Non-Resp1_1",
          "resp1_2": "0",
          "resp1_3": "0",
          "patr_autor": "0",
          "patr_werk": "0",
          "patr_text": "0",
          "patr_resp1": "0",
          "patr_resp2": "0",
          "patr_resp3": "0",
          "ant_ev": "0",
          "ant_a": "0",
          "ant_b": "0",
          "ant_c": "0",
          "ev": 0.0,
          "ev_lat": 0.0,
          "bitten_e": "0",
          "bitten_r": "0",
          "bitten": "0",
          "vu": 0.0,
          "vu_lat": 0.0,
          "oration": "0",
          "oration_komplet": "0",
          "marant": 0.0,
          "marant_lat": 0.0
        },
        "Sext": {
          "comm_1": "0",
          "comm_2": "0",
          "name": "0",
          "farbe": "0",
          "hymn_1": 0.0,
          "hymn_2": 0.0,
          "hymn_3": 0.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "ps_1": 0.0,
          "ps_2": 0.0,
          "ps_3": 0.0,
          "ps_100": 0.0,
          "ps_95": 0.0,
          "ps_67": 0.0,
          "ps_24": 0.0,
          "ant_0": "0",
          "ant_1": "com-MärtPl-each-Sext-ant_1",
          "ant_2": "com-MärtPl-each-Sext-ant_2",
          "ant_3": "com-MärtPl-each-Sext-ant_3",
          "resp0_0": "0",
          "resp0_1": "0",
          "les_buch": "com-MärtPl-each-Sext-Les_Buch",
          "les_stelle": "com-MärtPl-each-Sext–Les_Stelle",
          "les_text": "com-MärtPl-each-Sext-Les_Text",
          "resp1_0": "com-MärtPl-each-Sext-Resp1_0",
          "resp1_1": "com-MärtPl-each-Sext-Resp1_1",
          "resp1_2": "0",
          "resp1_3": "0",
          "patr_autor": "0",
          "patr_werk": "0",
          "patr_text": "0",
          "patr_resp1": "0",
          "patr_resp2": "0",
          "patr_resp3": "0",
          "ant_ev": "0",
          "ant_a": "0",
          "ant_b": "0",
          "ant_c": "0",
          "ev": 0.0,
          "ev_lat": 0.0,
          "bitten_e": "0",
          "bitten_r": "0",
          "bitten": "0",
          "vu": 0.0,
          "vu_lat": 0.0,
          "oration": "0",
          "oration_komplet": "0",
          "marant": 0.0,
          "marant_lat": 0.0
        },
        "Terz": {
          "comm_1": "0",
          "comm_2": "0",
          "name": "0",
          "farbe": "0",
          "hymn_1": 0.0,
          "hymn_2": 0.0,
          "hymn_3": 0.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "ps_1": 0.0,
          "ps_2": 0.0,
          "ps_3": 0.0,
          "ps_100": 0.0,
          "ps_95": 0.0,
          "ps_67": 0.0,
          "ps_24": 0.0,
          "ant_0": "0",
          "ant_1": "com-MärtPl-each-Terz-ant_1",
          "ant_2": "com-MärtPl-each-Terz-ant_2",
          "ant_3": "com-MärtPl-each-Terz-ant_3",
          "resp0_0": "0",
          "resp0_1": "0",
          "les_buch": "com-MärtPl-each-Terz-Les_Buch",
          "les_stelle": "com-MärtPl-each-Terz–Les_Stelle",
          "les_text": "com-MärtPl-each-Terz-Les_Text",
          "resp1_0": "com-MärtPl-each-Terz-Resp1_0",
          "resp1_1": "com-MärtPl-each-Terz-Resp1_1",
          "resp1_2": "0",
          "resp1_3": "0",
          "patr_autor": "0",
          "patr_werk": "0",
          "patr_text": "0",
          "patr_resp1": "0",
          "patr_resp2": "0",
          "patr_resp3": "0",
          "ant_ev": "0",
          "ant_a": "0",
          "ant_b": "0",
          "ant_c": "0",
          "ev": 0.0,
          "ev_lat": 0.0,
          "bitten_e": "0",
          "bitten_r": "0",
          "bitten": "0",
          "vu": 0.0,
          "vu_lat": 0.0,
          "oration": "0",
          "oration_komplet": "0",
          "marant": 0.0,
          "marant_lat": 0.0
        },
        "Vesper": {
          "comm_1": "0",
          "comm_2": "0",
          "name": "0",
          "farbe": "0",
          "hymn_1": 71119.0,
          "hymn_2": 0.0,
          "hymn_3": 0.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ps_100": 0.0,
          "ps_95": 0.0,
          "ps_67": 0.0,
          "ps_24": 0.0,
          "ant_0": "0",
          "ant_1": "com-MärtPl-each-Vesper-ant_1",
          "ant_2": "com-MärtPl-each-Vesper-ant_2",
          "ant_3": "com-MärtPl-each-Vesper-ant_3",
          "resp0_0": "0",
          "resp0_1": "0",
          "les_buch": "1 Petr",
          "les_stelle": "4,13-14",
          "les_text": "Freut euch, dass ihr Anteil an den Leiden Christi habt; denn so könnt ihr auch bei der Offenbarung seiner Herrlichkeit voll Freude jubeln. Wenn ihr wegen des Namens Christi beschimpft werdet, seid ihr seligzupreisen; denn der Geist der Herrlichkeit, der Geist Gottes, ruht auf euch.",
          "resp1_0": "0",
          "resp1_1": "com-MärtPl-each-Vesper-Resp1_1",
          "resp1_2": "com-MärtPl-each-Vesper-Resp1_2",
          "resp1_3": "com-MärtPl-each-Vesper-Resp1_3",
          "patr_autor": "0",
          "patr_werk": "0",
          "patr_text": "0",
          "patr_resp1": "0",
          "patr_resp2": "0",
          "patr_resp3": "0",
          "ant_ev": "com-MärtPl-each-Vesper-Ant_Ev",
          "ant_a": "0",
          "ant_b": "0",
          "ant_c": "0",
          "ev": 0.0,
          "ev_lat": 0.0,
          "bitten_e": "com-MärtPl-each-Vesper-Bitten_E",
          "bitten_r": "com-MärtPl-each-Vesper-Bitten_R",
          "bitten": "com-MärtPl-each-Vesper-Bitten",
          "vu": 0.0,
          "vu_lat": 0.0,
          "oration": "0",
          "oration_komplet": "0",
          "marant": 0.0,
          "marant_lat": 0.0
        }
      }
    },
    "MärtPl": {
      "each": {
        "Invitatorium": {
          "ant_0": "Den Herrn, den König der Märtyrer – kommt, wir beten ihn an!"
        },
        "Laudes": {
          "name": "Märt",
          "hymn_1": 71118.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-MärtPl-each-Laudes-ant_1",
          "ant_2": "com-MärtPl-each-Laudes-ant_2",
          "ant_3": "com-MärtPl-each-Laudes-ant_3",
          "les_buch": "2 Kor",
          "les_stelle": "1,3-5",
          "les_text": "Gepriesen sei der Gott und Vater Jesu Christi, unseres Herrn, der Vater des Erbarmens und der Gott allen Trostes. Er tröstet uns in all unserer Not, damit auch wir die Kraft haben, alle zu trösten, die in Not sind, durch den Trost, mit dem auch wir von Gott getröstet werden. Wie uns nämlich die Leiden Christi überreich zuteil geworden sind, so wird uns durch Christus auch überreicher Trost zuteil.",
          "resp1_1": "com-MärtPl-each-Laudes-Resp1_1",
          "resp1_2": "com-MärtPl-each-Laudes-Resp1_2",
          "resp1_3": "com-MärtPl-each-Laudes-Resp1_3",
          "ant_ev": "com-MärtPl-each-Laudes-Ant_Ev",
          "bitten_e": "com-MärtPl-each-Laudes-Bitten_E",
          "bitten_r": "com-MärtPl-each-Laudes-Bitten_R",
          "bitten": "com-MärtPl-each-Laudes-Bitten"
        },
        "Lesehore": {
          "hymn_1": 71085.0,
          "ps_1": 2.0,
          "ps_2": 33.1,
          "ps_3": 33.2,
          "ant_1": "Die heiligen Märtyrer vergossen für Christus ihr Blut und erlangten im Himmel ewigen Lohn.",
          "ant_2": "com-MärtPl-each-Lesehore-ant_2",
          "ant_3": "com-MärtPl-each-Lesehore-ant_3",
          "resp0_0": "com-MärtPl-each-Lesehore-Resp0_0",
          "resp0_1": "com-MärtPl-each-Lesehore-Resp0_1",
          "les_buch": "com-MärtPl-each-Lesehore-Les_Buch",
          "les_stelle": "com-MärtPl-each-Lesehore–Les_Stelle",
          "les_text": "com-MärtPl-each-Lesehore-Les_Text",
          "resp1_1": "com-MärtPl-each-Lesehore-Resp1_1",
          "resp1_2": "com-MärtPl-each-Lesehore-Resp1_2",
          "resp1_3": "com-MärtPl-each-Lesehore-Resp1_3",
          "patr_autor": "com-MärtPl-each-Lesehore-Patr_Autor",
          "patr_text": "com-MärtPl-each-Lesehore-Patr_Text",
          "patr_resp1": "com-MärtPl-each-Lesehore-Patr_Resp1",
          "patr_resp2": "com-MärtPl-each-Lesehore-Patr_Resp2",
          "patr_resp3": "com-MärtPl-each-Lesehore-Patr_Resp3"
        },
        "Non": {
          "ant_1": "com-MärtPl-each-Non-ant_1",
          "ant_2": "com-MärtPl-each-Non-ant_2",
          "ant_3": "com-MärtPl-each-Non-ant_3",
          "les_buch": "com-MärtPl-each-Non-Les_Buch",
          "les_stelle": "com-MärtPl-each-Non–Les_Stelle",
          "les_text": "com-MärtPl-each-Non-Les_Text",
          "resp1_0": "com-MärtPl-each-Non-Resp1_0",
          "resp1_1": "com-MärtPl-each-Non-Resp1_1"
        },
        "Sext": {
          "ant_1": "com-MärtPl-each-Sext-ant_1",
          "ant_2": "com-MärtPl-each-Sext-ant_2",
          "ant_3": "com-MärtPl-each-Sext-ant_3",
          "les_buch": "com-MärtPl-each-Sext-Les_Buch",
          "les_stelle": "com-MärtPl-each-Sext–Les_Stelle",
          "les_text": "com-MärtPl-each-Sext-Les_Text",
          "resp1_0": "com-MärtPl-each-Sext-Resp1_0",
          "resp1_1": "com-MärtPl-each-Sext-Resp1_1"
        },
        "Terz": {
          "ant_1": "com-MärtPl-each-Terz-ant_1",
          "ant_2": "com-MärtPl-each-Terz-ant_2",
          "ant_3": "com-MärtPl-each-Terz-ant_3",
          "les_buch": "com-MärtPl-each-Terz-Les_Buch",
          "les_stelle": "com-MärtPl-each-Terz–Les_Stelle",
          "les_text": "com-MärtPl-each-Terz-Les_Text",
          "resp1_0": "com-MärtPl-each-Terz-Resp1_0",
          "resp1_1": "com-MärtPl-each-Terz-Resp1_1"
        },
        "Vesper": {
          "hymn_1": 71123.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-MärtPl-each-Vesper-ant_1",
          "ant_2": "com-MärtPl-each-Vesper-ant_2",
          "ant_3": "com-MärtPl-each-Vesper-ant_3",
          "les_buch": "1 Petr",
          "les_stelle": "4,13-14",
          "les_text": "Freut euch, dass ihr Anteil an den Leiden Christi habt; denn so könnt ihr auch bei der Offenbarung seiner Herrlichkeit voll Freude jubeln. Wenn ihr wegen des Namens Christi beschimpft werdet, seid ihr seligzupreisen; denn der Geist der Herrlichkeit, der Geist Gottes, ruht auf euch.",
          "resp1_1": "com-MärtPl-each-Vesper-Resp1_1",
          "resp1_2": "com-MärtPl-each-Vesper-Resp1_2",
          "resp1_3": "com-MärtPl-each-Vesper-Resp1_3",
          "ant_ev": "com-MärtPl-each-Vesper-Ant_Ev",
          "bitten_e": "com-MärtPl-each-Vesper-Bitten_E",
          "bitten_r": "com-MärtPl-each-Vesper-Bitten_R",
          "bitten": "com-MärtPl-each-Vesper-Bitten"
        }
      }
    },
    "Ord": {
      "each": {
        "Invitatorium": {
          "ant_0": "com-Ord-each-Invitatorium-ant_0"
        },
        "Laudes": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Ord-each-Laudes-ant_1",
          "ant_2": "com-Ord-each-Laudes-ant_2",
          "ant_3": "com-Ord-each-Laudes-ant_3",
          "les_buch": "com-Ord-each-Laudes-Les_Buch",
          "les_stelle": "com-Ord-each-Laudes–Les_Stelle",
          "les_text": "com-Ord-each-Laudes-Les_Text",
          "resp1_1": "com-Ord-each-Laudes-Resp1_1",
          "resp1_2": "com-Ord-each-Laudes-Resp1_2",
          "resp1_3": "com-Ord-each-Laudes-Resp1_3",
          "ant_ev": "com-Ord-each-Laudes-Ant_Ev",
          "bitten_e": "com-Ord-each-Laudes-Bitten_E",
          "bitten_r": "com-Ord-each-Laudes-Bitten_R",
          "bitten": "com-Ord-each-Laudes-Bitten"
        },
        "Lesehore": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Ord-each-Lesehore-ant_1",
          "ant_2": "com-Ord-each-Lesehore-ant_2",
          "ant_3": "com-Ord-each-Lesehore-ant_3",
          "resp0_0": "com-Ord-each-Lesehore-Resp0_0",
          "resp0_1": "com-Ord-each-Lesehore-Resp0_1",
          "les_buch": "com-Ord-each-Lesehore-Les_Buch",
          "les_stelle": "com-Ord-each-Lesehore–Les_Stelle",
          "les_text": "com-Ord-each-Lesehore-Les_Text",
          "resp1_1": "com-Ord-each-Lesehore-Resp1_1",
          "resp1_2": "com-Ord-each-Lesehore-Resp1_2",
          "resp1_3": "com-Ord-each-Lesehore-Resp1_3",
          "patr_autor": "com-Ord-each-Lesehore-Patr_Autor",
          "patr_text": "com-Ord-each-Lesehore-Patr_Text",
          "patr_resp1": "com-Ord-each-Lesehore-Patr_Resp1",
          "patr_resp2": "com-Ord-each-Lesehore-Patr_Resp2",
          "patr_resp3": "com-Ord-each-Lesehore-Patr_Resp3"
        },
        "Non": {
          "ant_1": "com-Ord-each-Non-ant_1",
          "ant_2": "com-Ord-each-Non-ant_2",
          "ant_3": "com-Ord-each-Non-ant_3",
          "les_buch": "com-Ord-each-Non-Les_Buch",
          "les_stelle": "com-Ord-each-Non–Les_Stelle",
          "les_text": "com-Ord-each-Non-Les_Text",
          "resp1_0": "com-Ord-each-Non-Resp1_0",
          "resp1_1": "com-Ord-each-Non-Resp1_1"
        },
        "Sext": {
          "ant_1": "com-Ord-each-Sext-ant_1",
          "ant_2": "com-Ord-each-Sext-ant_2",
          "ant_3": "com-Ord-each-Sext-ant_3",
          "les_buch": "com-Ord-each-Sext-Les_Buch",
          "les_stelle": "com-Ord-each-Sext–Les_Stelle",
          "les_text": "com-Ord-each-Sext-Les_Text",
          "resp1_0": "com-Ord-each-Sext-Resp1_0",
          "resp1_1": "com-Ord-each-Sext-Resp1_1"
        },
        "Terz": {
          "ant_1": "com-Ord-each-Terz-ant_1",
          "ant_2": "com-Ord-each-Terz-ant_2",
          "ant_3": "com-Ord-each-Terz-ant_3",
          "les_buch": "com-Ord-each-Terz-Les_Buch",
          "les_stelle": "com-Ord-each-Terz–Les_Stelle",
          "les_text": "com-Ord-each-Terz-Les_Text",
          "resp1_0": "com-Ord-each-Terz-Resp1_0",
          "resp1_1": "com-Ord-each-Terz-Resp1_1"
        },
        "Vesper": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-Ord-each-Vesper-ant_1",
          "ant_2": "com-Ord-each-Vesper-ant_2",
          "ant_3": "com-Ord-each-Vesper-ant_3",
          "les_buch": "com-Ord-each-Vesper-Les_Buch",
          "les_stelle": "com-Ord-each-Vesper–Les_Stelle",
          "les_text": "com-Ord-each-Vesper-Les_Text",
          "resp1_1": "com-Ord-each-Vesper-Resp1_1",
          "resp1_2": "com-Ord-each-Vesper-Resp1_2",
          "resp1_3": "com-Ord-each-Vesper-Resp1_3",
          "ant_ev": "com-Ord-each-Vesper-Ant_Ev",
          "bitten_e": "com-Ord-each-Vesper-Bitten_E",
          "bitten_r": "com-Ord-each-Vesper-Bitten_R",
          "bitten": "com-Ord-each-Vesper-Bitten"
        }
      }
    },
    "OrdF": {
      "each": {
        "Invitatorium": {
          "ant_0": "com-OrdF-each-Invitatorium-ant_0"
        },
        "Laudes": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-OrdF-each-Laudes-ant_1",
          "ant_2": "com-OrdF-each-Laudes-ant_2",
          "ant_3": "com-OrdF-each-Laudes-ant_3",
          "les_buch": "com-OrdF-each-Laudes-Les_Buch",
          "les_stelle": "com-OrdF-each-Laudes–Les_Stelle",
          "les_text": "com-OrdF-each-Laudes-Les_Text",
          "resp1_1": "com-OrdF-each-Laudes-Resp1_1",
          "resp1_2": "com-OrdF-each-Laudes-Resp1_2",
          "resp1_3": "com-OrdF-each-Laudes-Resp1_3",
          "ant_ev": "com-OrdF-each-Laudes-Ant_Ev",
          "bitten_e": "com-OrdF-each-Laudes-Bitten_E",
          "bitten_r": "com-OrdF-each-Laudes-Bitten_R",
          "bitten": "com-OrdF-each-Laudes-Bitten"
        },
        "Lesehore": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-OrdF-each-Lesehore-ant_1",
          "ant_2": "com-OrdF-each-Lesehore-ant_2",
          "ant_3": "com-OrdF-each-Lesehore-ant_3",
          "resp0_0": "com-OrdF-each-Lesehore-Resp0_0",
          "resp0_1": "com-OrdF-each-Lesehore-Resp0_1",
          "les_buch": "com-OrdF-each-Lesehore-Les_Buch",
          "les_stelle": "com-OrdF-each-Lesehore–Les_Stelle",
          "les_text": "com-OrdF-each-Lesehore-Les_Text",
          "resp1_1": "com-OrdF-each-Lesehore-Resp1_1",
          "resp1_2": "com-OrdF-each-Lesehore-Resp1_2",
          "resp1_3": "com-OrdF-each-Lesehore-Resp1_3",
          "patr_autor": "com-OrdF-each-Lesehore-Patr_Autor",
          "patr_text": "com-OrdF-each-Lesehore-Patr_Text",
          "patr_resp1": "com-OrdF-each-Lesehore-Patr_Resp1",
          "patr_resp2": "com-OrdF-each-Lesehore-Patr_Resp2",
          "patr_resp3": "com-OrdF-each-Lesehore-Patr_Resp3"
        },
        "Non": {
          "ant_1": "com-OrdF-each-Non-ant_1",
          "ant_2": "com-OrdF-each-Non-ant_2",
          "ant_3": "com-OrdF-each-Non-ant_3",
          "les_buch": "com-OrdF-each-Non-Les_Buch",
          "les_stelle": "com-OrdF-each-Non–Les_Stelle",
          "les_text": "com-OrdF-each-Non-Les_Text",
          "resp1_0": "com-OrdF-each-Non-Resp1_0",
          "resp1_1": "com-OrdF-each-Non-Resp1_1"
        },
        "Sext": {
          "ant_1": "com-OrdF-each-Sext-ant_1",
          "ant_2": "com-OrdF-each-Sext-ant_2",
          "ant_3": "com-OrdF-each-Sext-ant_3",
          "les_buch": "com-OrdF-each-Sext-Les_Buch",
          "les_stelle": "com-OrdF-each-Sext–Les_Stelle",
          "les_text": "com-OrdF-each-Sext-Les_Text",
          "resp1_0": "com-OrdF-each-Sext-Resp1_0",
          "resp1_1": "com-OrdF-each-Sext-Resp1_1"
        },
        "Terz": {
          "ant_1": "com-OrdF-each-Terz-ant_1",
          "ant_2": "com-OrdF-each-Terz-ant_2",
          "ant_3": "com-OrdF-each-Terz-ant_3",
          "les_buch": "com-OrdF-each-Terz-Les_Buch",
          "les_stelle": "com-OrdF-each-Terz–Les_Stelle",
          "les_text": "com-OrdF-each-Terz-Les_Text",
          "resp1_0": "com-OrdF-each-Terz-Resp1_0",
          "resp1_1": "com-OrdF-each-Terz-Resp1_1"
        },
        "Vesper": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-OrdF-each-Vesper-ant_1",
          "ant_2": "com-OrdF-each-Vesper-ant_2",
          "ant_3": "com-OrdF-each-Vesper-ant_3",
          "les_buch": "com-OrdF-each-Vesper-Les_Buch",
          "les_stelle": "com-OrdF-each-Vesper–Les_Stelle",
          "les_text": "com-OrdF-each-Vesper-Les_Text",
          "resp1_1": "com-OrdF-each-Vesper-Resp1_1",
          "resp1_2": "com-OrdF-each-Vesper-Resp1_2",
          "resp1_3": "com-OrdF-each-Vesper-Resp1_3",
          "ant_ev": "com-OrdF-each-Vesper-Ant_Ev",
          "bitten_e": "com-OrdF-each-Vesper-Bitten_E",
          "bitten_r": "com-OrdF-each-Vesper-Bitten_R",
          "bitten": "com-OrdF-each-Vesper-Bitten"
        }
      }
    },
    "OrdMann": {
      "each": {
        "ErsteV": {},
        "Invitatorium": {
          "ant_0": "com-OrdMann-each-Invitatorium-ant_0"
        },
        "Laudes": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-OrdMann-each-Laudes-ant_1",
          "ant_2": "com-OrdMann-each-Laudes-ant_2",
          "ant_3": "com-OrdMann-each-Laudes-ant_3",
          "les_buch": "com-OrdMann-each-Laudes-Les_Buch",
          "les_stelle": "com-OrdMann-each-Laudes–Les_Stelle",
          "les_text": "com-OrdMann-each-Laudes-Les_Text",
          "resp1_1": "com-OrdMann-each-Laudes-Resp1_1",
          "resp1_2": "com-OrdMann-each-Laudes-Resp1_2",
          "resp1_3": "com-OrdMann-each-Laudes-Resp1_3",
          "ant_ev": "com-OrdMann-each-Laudes-Ant_Ev",
          "bitten_e": "com-OrdMann-each-Laudes-Bitten_E",
          "bitten_r": "com-OrdMann-each-Laudes-Bitten_R",
          "bitten": "com-OrdMann-each-Laudes-Bitten"
        },
        "Lesehore": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-OrdMann-each-Lesehore-ant_1",
          "ant_2": "com-OrdMann-each-Lesehore-ant_2",
          "ant_3": "com-OrdMann-each-Lesehore-ant_3",
          "resp0_0": "com-OrdMann-each-Lesehore-Resp0_0",
          "resp0_1": "com-OrdMann-each-Lesehore-Resp0_1",
          "les_buch": "com-OrdMann-each-Lesehore-Les_Buch",
          "les_stelle": "com-OrdMann-each-Lesehore–Les_Stelle",
          "les_text": "com-OrdMann-each-Lesehore-Les_Text",
          "resp1_1": "com-OrdMann-each-Lesehore-Resp1_1",
          "resp1_2": "com-OrdMann-each-Lesehore-Resp1_2",
          "resp1_3": "com-OrdMann-each-Lesehore-Resp1_3",
          "patr_autor": "com-OrdMann-each-Lesehore-Patr_Autor",
          "patr_text": "com-OrdMann-each-Lesehore-Patr_Text",
          "patr_resp1": "com-OrdMann-each-Lesehore-Patr_Resp1",
          "patr_resp2": "com-OrdMann-each-Lesehore-Patr_Resp2",
          "patr_resp3": "com-OrdMann-each-Lesehore-Patr_Resp3"
        },
        "Non": {
          "ant_1": "com-OrdMann-each-Non-ant_1",
          "ant_2": "com-OrdMann-each-Non-ant_2",
          "ant_3": "com-OrdMann-each-Non-ant_3",
          "les_buch": "com-OrdMann-each-Non-Les_Buch",
          "les_stelle": "com-OrdMann-each-Non–Les_Stelle",
          "les_text": "com-OrdMann-each-Non-Les_Text",
          "resp1_0": "com-OrdMann-each-Non-Resp1_0",
          "resp1_1": "com-OrdMann-each-Non-Resp1_1"
        },
        "Sext": {
          "ant_1": "com-OrdMann-each-Sext-ant_1",
          "ant_2": "com-OrdMann-each-Sext-ant_2",
          "ant_3": "com-OrdMann-each-Sext-ant_3",
          "les_buch": "com-OrdMann-each-Sext-Les_Buch",
          "les_stelle": "com-OrdMann-each-Sext–Les_Stelle",
          "les_text": "com-OrdMann-each-Sext-Les_Text",
          "resp1_0": "com-OrdMann-each-Sext-Resp1_0",
          "resp1_1": "com-OrdMann-each-Sext-Resp1_1"
        },
        "Terz": {
          "ant_1": "com-OrdMann-each-Terz-ant_1",
          "ant_2": "com-OrdMann-each-Terz-ant_2",
          "ant_3": "com-OrdMann-each-Terz-ant_3",
          "les_buch": "com-OrdMann-each-Terz-Les_Buch",
          "les_stelle": "com-OrdMann-each-Terz–Les_Stelle",
          "les_text": "com-OrdMann-each-Terz-Les_Text",
          "resp1_0": "com-OrdMann-each-Terz-Resp1_0",
          "resp1_1": "com-OrdMann-each-Terz-Resp1_1"
        },
        "Vesper": {
          "hymn_1": 9999.0,
          "ps_1": 9999.0,
          "ps_2": 9999.0,
          "ps_3": 9999.0,
          "ant_1": "com-OrdMann-each-Vesper-ant_1",
          "ant_2": "com-OrdMann-each-Vesper-ant_2",
          "ant_3": "com-OrdMann-each-Vesper-ant_3",
          "les_buch": "com-OrdMann-each-Vesper-Les_Buch",
          "les_stelle": "com-OrdMann-each-Vesper–Les_Stelle",
          "les_text": "com-OrdMann-each-Vesper-Les_Text",
          "resp1_1": "com-OrdMann-each-Vesper-Resp1_1",
          "resp1_2": "com-OrdMann-each-Vesper-Resp1_2",
          "resp1_3": "com-OrdMann-each-Vesper-Resp1_3",
          "ant_ev": "com-OrdMann-each-Vesper-Ant_Ev",
          "bitten_e": "com-OrdMann-each-Vesper-Bitten_E",
          "bitten_r": "com-OrdMann-each-Vesper-Bitten_R",
          "bitten": "com-OrdMann-each-Vesper-Bitten"
        }
      }
    }
  },
  "eig": {
    "1": {
      "1": {
        "each": {
          "comm_1": "Mar",
          "oration": "Barmherziger Gott, durch die Geburt deines Sohnes aus der Jungfrau Maria hast du der Menschheit das ewige Heil geschenkt. Laß uns auch im neuen Jahr immer und überall die Fürbitte der gnadenvollen Mutter erfahren, die uns den Urheber des Lebens geboren hat, Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Invitatorium": {
          "ps_24": 0,
          "ant_0": "Wir preisen die Mutterschaft der seligen Jungfrau Maria und beten an ihren Sohn, Jesus Christus, unsern Herrn."
        },
        "Laudes": {
          "name": "Hochfest der Gottesmutter Maria",
          "hymn_1": 81011.0,
          "ant_1": "Aus Ísaïs Wurzel sproßt ein Reis, aus Jakob erstrahlt ein Stern: die Jungfrau gebar den Erlöser.",
          "ant_2": "Maria hat uns den Heiland geboren; Johannes sah ihn und rief: Seht, das Lamm Gottes, das hinwegnimmt die Sünde der Welt. Halleluja.",
          "ant_3": "Einen König hat uns Maria geboren, Ewiger ist sein Name. Mutter ist sie und Jung­frau, niemand kommt ihr gleich. Halleluja.",
          "les_buch": "Mi",
          "les_stelle": "5,2–3a",
          "les_text": "Text von Mi 5,2–3a",
          "ant_ev": "Ein wunderbares Geheimnis tritt heute ans Licht: Gott wurde Mensch, er blieb, was er war, und nahm an, was er nicht war, ohne Vermischung und ohne Teilung. So wurde Gottes Schöpfung neu.",
          "bitten_e": "Gepriesen sei Jesus Christus, der durch die Kraft des Heiligen Geistes von Maria, der Jungfrau, geboren wurde. Zu ihm laßt uns beten:",
          "bitten_r": "Sohn der Jungfrau, erbarme dich unser.",
          "bitten": "Du bist der Fürst des Friedens.^qSchenke uns ein Jahr des Friedens.^pDurch dein Herabsteigen in diese Welt hast du den Menschen erhöht.^qGib, dass wir dich alle Tage ehren.^pDu bist uns ähnlich geworden.^qGib, dass wir dir ähnlich werden.^pDu wurdest ein Gast auf dieser Erde.^qMache uns zu deinen Hausgenossen im himm­lischen Reich."
        },
        "Lesehore": {
          "hymn_1": 81012.0,
          "ps_1": 24.0,
          "ps_2": 87.0,
          "ps_3": 99.0,
          "ant_1": "Hebt euch, ihr uralten Pforten! Es kommt der König der Herrlichkeit.",
          "ant_2": "Du Stadt unseres Gottes, vom Höchsten gegründet, in dir ist geboren, der die Völker errettet.",
          "ant_3": "Gezeugt vor dem Morgenstern und vor aller Zeit, ist der Herr, unser Heiland, heute geboren.",
          "resp0_0": "Das Wort ist Fleisch geworden. Halleluja.",
          "resp0_1": "Und hat unter uns gewohnt. Halleluja.",
          "les_buch": "Hebr",
          "les_stelle": "2,9–17",
          "les_text": "Text von Hebr 2,9–17",
          "resp1_1": "Gesegnet bist du, Jungfrau Maria; denn du hast den Herrn getragen, den Schöpfer der Welt;",
          "resp1_2": "du hast den geboren, der dich erschaffen hat, und bleibst Jungfrau für immer.",
          "resp1_3": "Sei gegrüßt, du Begnadete, der Herr ist mit dir.",
          "patr_autor": "Athanasius (+ 373)",
          "patr_text": "Aus dem Brief an Epiktet."
        },
        "Non": {
          "les_buch": "Bar",
          "les_stelle": "5,3–4",
          "les_text": "Text von Bar 5,3–4"
        },
        "Sext": {
          "les_buch": "Sach",
          "les_stelle": "9,9a",
          "les_text": "Text von Sach 9,9a"
        },
        "Terz": {
          "les_buch": "Zef",
          "les_stelle": "3,14.15b",
          "les_text": "Text von Zef 3,14.15b"
        },
        "Vesper": {
          "comm_1": "Mar",
          "hymn_1": 81014.0,
          "ant_0": "",
          "ant_1": "O wunderbarer Tausch! Der den Men­schen erschuf, nimmt menschliches Leben an und wird aus der Jungfrau ge­boren. Von keinem Mann gezeugt, kommt er in die Welt und schenkt uns sein göttliches Leben.",
          "ant_2": "O unsagbar tiefes Geheimnis! In der Geburt aus der Jungfrau erfüllte sich die Schrift: Wie der Tau auf Gídeons Vlies kamst du herab und hast die Menschen errettet. Dich loben wir, du, unser Gott.",
          "ant_3": "O Dornbusch, den Mose schaute! Brennend verbranntest du nicht. In dir erkennen wir ein Gleichnis der seligen Jungfrau, die unversehrt gebar. Gottesmutter, bitte für uns.",
          "les_buch": "Gal",
          "les_stelle": "4,4–5",
          "les_text": "Text von Gal 4,4–5",
          "resp1_1": "Das Wort ist Fleisch geworden und hat unter uns gewohnt.",
          "resp1_2": "Halleluja,°halleluja.",
          "resp1_3": "Aus seiner Fülle haben wir empfangen, Gnade über Gnade.",
          "ant_ev": "Selig der Leib, der dich getragen, und die Brust, die dich genährt hat, dich den Herrn und Retter der Welt. Halleluja.",
          "bitten_e": "Laßt uns zu Jesus Christus beten, den die Jungfrau Maria empfangen und geboren hat:",
          "bitten_r": "Sohn der Jungfrau, erhöre uns.",
          "bitten": "Du, die Freude deiner Mutter Maria,^lschenke den Vätern und Müttern Freude an ihren Kindern.^pDurch deine Menschwerdung hast du das Band der Familien neu gefestigt.^lSchenke unseren Familien Einigkeit und Zusammenhalt.^pDeine Herrschaft ruht auf Gerechtigkeit und Frieden.^lGib, dass die Regierenden dem Frieden dienen.^pDu bist gekommen, um alle Menschen in dem einen, heiligen Volk Gottes zu sammeln.^lSchenke der Welt ein Jahr des Friedens.^pDu bist Mensch geworden in der Zeit.^lLaß unsere Verstorbenen leben in Ewigkeit."
        }
      },
      "2": {
        "Invitatorium": {
          "comm_1": "Hirten",
          "comm_2": "Lehrer"
        },
        "Laudes": {
          "comm_1": "Hirten",
          "comm_2": "Lehrer",
          "name": "Hl. Basilius und hl. Gregor von Nazianz",
          "ant_ev": "Die Weisen werden strahlen, wie der Himmel strahlt. Sie haben viele zum rechten Tun geführt; darum werden sie leuchten wie die Sterne, auf immer und ewig.",
          "oration": "Gott, unser Vater, du hast deiner Kirche in den Bischöfen Basilius und Gregor heilige Hirten gegeben, die uns durch ihre Lehre und ihr Leben den Weg der Wahrheit zeigen. Hilf uns auf ihre Fürsprache, dein Wort in Demut aufzunehmen und in Werken der Liebe zu bezeugen. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "comm_1": "Hirten",
          "comm_2": "Lehrer",
          "oration": "Gott, unser Vater, du hast deiner Kirche in den Bischöfen Basilius und Gregor heilige Hirten gegeben, die uns durch ihre Lehre und ihr Leben den Weg der Wahrheit zeigen. Hilf uns auf ihre Fürsprache, dein Wort in Demut aufzunehmen und in Werken der Liebe zu bezeugen. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Vesper": {
          "comm_1": "Hirten",
          "comm_2": "Lehrer",
          "ant_ev": "Wer Gottes Gebote hält und sie halten lehrt, wird groß sein im Himmelreich.",
          "oration": "Gott, unser Vater, du hast deiner Kirche in den Bischöfen Basilius und Gregor heilige Hirten gegeben, die uns durch ihre Lehre und ihr Leben den Weg der Wahrheit zeigen. Hilf uns auf ihre Fürsprache, dein Wort in Demut aufzunehmen und in Werken der Liebe zu bezeugen. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "6": {
        "each": {
          "comm_1": "Mar",
          "name": "Hochfest der Erscheinung des Herrn",
          "oration": "eig-1-6-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {
          "name": "Erscheinung des Herrn"
        },
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "17": {
        "Invitatorium": {
          "comm_1": "OrdMann"
        },
        "Laudes": {
          "comm_1": "OrdMann",
          "name": "Hl. Antonius",
          "oration": "Herr, unser Gott, du hast den heiligen Mönchsvater Antonius aus der Welt herausgerufen und ihm die Kraft gegeben, in der Einsamkeit der Wüste vor dir zu leben. Hilf uns auf seine Fürbitte, uns selbst zu überwinden und dich über alles zu lieben. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "comm_1": "OrdMann",
          "patr_autor": "Athanasius († 373)",
          "patr_werk": "Aus der Lebensbeschreibung des hl. Antonius.",
          "patr_text": "^hDie Berufung des heiligen Antonius^pNach dem Tod der Eltern stand Antonius mit seiner Schwester allein. Er war noch nicht ganz achtzehn oder zwanzig Jahre alt und musste für das Haus und seine Schwester sorgen.^pSechs Monate nach dem Tod seiner Eltern ging er (eines Tages) nach seiner Gewohnheit zur Kirche und überlegte auf dem Weg, im Geist gesammelt, warum die Apostel alles verließen und dem Herrn folgten {1#Mt 4,20} und warum die Gläubigen in der Apostelgeschichte ihre Habe verkauften und den Aposteln zu Füßen legten. {2#Apg 4,35} Dabei erwog er auch, welch große Hoffnung ihrer im Himmel wartete. Mit diesen Gedanken trat er in die Kirche ein und es traf sich, dass gerade das Evangelium vorgelesen wurde, und er hörte, wie der Herr zu dem Reichen sagte: \"Wenn du vollkommen sein willst, geh, verkauf deinen Besitz und gib das Geld den Armen; so wirst du einen bleibenden Schatz im Himmel haben; dann komm und folge mir nach!\" {3#Mt 19,21}^pEs war dem Antonius, als erinnere ihn eine göttliche Eingebung an die Heiligen und als sei die Lesung für ihn bestimmt. Da ging er sofort aus der Kirche und gab, was er von den Eltern besaß, den Leuten im Dorf, so dass es ihm und seiner Schwester nicht zum Hindernis werden konnte. Auch alles bewegliche Gut, das sie hatten, teilte er an die Armen aus. Nur wenig behielt er für sich und seine Schwester.^pAls er wieder in die Kirche kam, hörte er den Herrn im Evangelium sagen: \"Sorgt euch nicht um morgen!\" {4#Mt 6,34} Da litt es ihn nicht mehr in der Kirche. Er ging hinaus und verteilte auch den Rest noch an die Mitbürger. Seine Schwester übergab er bekannten und zuverlässigen Jungfrauen zur Erziehung. Er selbst widmete sich vor seinem Haus der Aszese und führte beharrlich ein Leben der Selbstheiligung.^pNun arbeitete er mit seinen Händen, weil er hörte: \"Wer nicht arbeiten will, soll auch nicht essen!\" {5#2 Thess 3,10} Den Ertrag verwendete er für seinen Lebensunterhalt und für die Bedürftigen.^pEr betete dauernd, weil er gelernt hatte, man müsse ohne Unterlass beten. {6#1 Thess 5,17} Er las mit solcher Aufmerksamkeit, dass bei ihm das Gedächtnis die Bücher ersetzte.^pAlle Dorfbewohner und alle Freunde des Guten, mit denen er verkehrte, nannten ihn einen Gottesfreund, weil sie sahen, was für ein Mensch er war. Die einen begrüßten ihn als Sohn, die andern als Bruder.",
          "patr_resp1": "Wenn du vollkommen sein willst, verkaufe, was du hast, und gib es den Armen; so wirst du einen Schatz im Himmel haben,",
          "patr_resp2": "dann komm und folge mir nach.",
          "patr_resp3": "Keiner von euch ist mein Jünger, wenn er nicht auf seinen Besitz verzichtet.",
          "oration": "Herr, unser Gott, du hast den heiligen Mönchsvater Antonius aus der Welt herausgerufen und ihm die Kraft gegeben, in der Einsamkeit der Wüste vor dir zu leben. Hilf uns auf seine Fürbitte, uns selbst zu überwinden und dich über alles zu lieben. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Vesper": {
          "comm_1": "OrdMann",
          "oration": "Herr, unser Gott, du hast den heiligen Mönchsvater Antonius aus der Welt herausgerufen und ihm die Kraft gegeben, in der Einsamkeit der Wüste vor dir zu leben. Hilf uns auf seine Fürbitte, uns selbst zu überwinden und dich über alles zu lieben. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "21": {
        "each": {
          "oration": "eig-1-21-each-Oration"
        },
        "Invitatorium": {
          "comm_1": "MärtJgfr"
        },
        "Laudes": {
          "comm_1": "MärtJgfr",
          "name": "Hl. Agnes",
          "farbe": "r",
          "ant_1": "Mit seinem Ring hat mich Christus, mein Herr, zur Treue verpflichtet und mich als Braut geschmückt mit einem Kranz.",
          "ant_2": "Ihm, dem die Engel dienen, bin ich angetraut. Seine Schönheit bewundern Sonne und Mond.",
          "ant_3": "Freut euch und dankt mit mir! Denn auf leuchtendem Thron ist mir ein Platz bereitet unter den Heiligen.",
          "les_buch": "2 Kor",
          "les_stelle": "1,3-5",
          "les_text": "Gepriesen sei der Gott und Vater Jesu Christi, unseres Herrn, der Vater des Erbarmens und der Gott allen Trostes. Er tröstet uns in all unserer Not, damit auch wir die Kraft haben, alle zu trösten, die in Not sind, durch den Trost, mit dem auch wir von Gott getröstet werden. Wie uns nämlich die Leiden Christi überreich zuteil geworden sind, so wird uns durch Christus auch überreicher Trost zuteil.",
          "resp1_1": "Sein Angesicht neigt Gott ihr zu,",
          "resp1_2": "er steht ihr bei, sie wird nicht wanken.",
          "resp1_3": "Gott ist ihr Zuflucht und Stärke, ein Helfer in allen Nöten.",
          "ant_ev": "Schon schaue ich, wonach ich mich sehnte, schon besitze ich, was ich erhoffte. Den ich auf Erden von Herzen geliebt, mit dem bin ich im Himmel vereint.",
          "oration": "Ewiger Gott, du berufst, was schwach ist in dieser Welt, um das, was stark ist, zu beschämen. Höre auf die Fürsprache der heiligen Agnes. Komm uns zu Hilfe, damit auch wir unbeirrt den Glauben bekennen. Darum bitten wir durch Jesus Christus."
        },
        "Lesehore": {
          "comm_1": "MärtJgfr",
          "patr_autor": "Ambrosius († 397)",
          "patr_werk": "Aus dem Buch über die Jungfrauen.",
          "patr_text": "^hSie war noch zu jung, um bestraft zu werden, aber schon reif, um zu siegen^p(Heute) ist der Gedenktag einer Jungfrau, lasst uns der Jungfräulichkeit folgen, es ist der Tag einer Märtyrin, lasst uns Gaben opfern! Es ist der Gedächtnistag der heiligen Agnes. Nach der Überlieferung hat sie mit zwölf Jahren das Martyrium erlitten. Welch abscheuerregende Grausamkeit, die auch das zarteste Alter nicht schonte! Aber groß war die Kraft des Glaubens, der auch von diesem Lebensalter Zeugnis erhielt.^pBot der kleine Leib Platz für Wunden? Sie hatte nichts, wo das Eisen sie treffen konnte; doch sie hatte, womit sie das Eisen besiegen konnte. Mädchen in diesem Alter können den strengen Blick der Eltern nicht ertragen und weinen über Nadelstiche wie über Wunden. Sie steht unerschrocken unter den blutigen Händen der Henker. Sie steht, unbewegt vom Klirren der Ketten. Sie bietet dem Dolch des wütenden Soldaten den ganzen Leib. Sie weiß noch nicht, was Sterben heißt, aber sie ist bereit. Gegen ihren Willen wird sie zum Altar gezerrt. Sie breitet inmitten der Flammen die Hände auf Christus hin aus, gerade dort am Götzenaltar bezeichnet sie sich mit dem Zeichen Christi, des Siegers. Jetzt legt sie Nacken und Hände in die eisernen Fesseln, aber keine Fessel vermag die zarten Glieder zu fassen.^pIst es eine neue Art des Martyriums? Noch zu jung, um bestraft zu werden, ist sie schon reif zum Sieg. Schwerlich kann sie kämpfen, doch leicht erringt sie den Siegeskranz. Sie ist eine Lehrmeisterin der Tugend und kann es doch dem Alter nach nicht sein. So eilt die Vermählte nicht zum Brautgemach wie die Jungfrau freudigen Schrittes und eilenden Fußes zum Richtplatz, das Haupt nicht im Schmuck des kunstvoll geflochtenen Haares, sondern mit Christus gekrönt, nicht mit Blumen umwunden, sondern mit Tugenden geziert.^pAlle weinen, nur sie nicht. Viele staunen, dass sie so leichthin das Leben verschwendet, als hätte sie schon ausgekostet, wovon sie kaum nippen durfte. Alle waren starr darüber, dass sie schon Zeugin der Gottheit war, obwohl sie dem Alter nach kaum rechtsfähig war. Aber sie brachte es dahin, dass Gott ihr die Zeugenfähigkeit gab, die ihr die Menschen versagten. Was die Kraft der Natur übersteigt, das wirkt der Schöpfer der Natur.^pMit welchen Schrecken droht der Henker, um sie einzuschüchtern, wie schmeichelt er, um sie zu verführen! Was versprechen ihr die vielen Freier alles, um sie heimzuführen! Sie aber spricht: Schon das wäre Unrecht gegen den Bräutigam, wollte ich darauf warten, ob ich jemand gefalle. Der mich zuerst erwählte, dem will ich gehören. Auf was wartest du, Henker? Der Leib vergehe; ihn könnten Augen lieben, deren Liebe ich nicht mag!^pDa stand sie, betete und beugte den Nacken. Da konntest du den Scharfrichter zittern sehen, als wäre er der Verurteilte. Seine Rechte schwankte, sein Gesicht wurde blass. Ihn sehreckte die Bedrohung des fremden Mädchens, das selbst die Gefahr nicht fürchtete.^pDa seht ihr an der einen Opfergabe das zweifache Martyrium: das der Reinheit und das des Glaubens. Sie blieb Jungfrau und gewann das Martyrium.",
          "patr_resp1": "Lasst uns das fest der heiligen Agnes feiern und daran denken, wie sie gelitten hat.",
          "patr_resp2": "In ihrer Jugend verlor sie den Tod und gewann das Leben.",
          "patr_resp3": "Denn sie liebte nur den Urheber des Lebens.",
          "oration": "Ewiger Gott, du berufst, was schwach ist in dieser Welt, um das, was stark ist, zu beschämen. Höre auf die Fürsprache der heiligen Agnes. Komm uns zu Hilfe, damit auch wir unbeirrt den Glauben bekennen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "comm_1": "MärtJgfr",
          "ant_1": "Mich schreckt keine Drohung, und kein Versprechen kann mich verlocken; denn als Jungfrau gehöre ich Christus an.",
          "ant_2": "Ihm allein bewahre ich die Treue, ihm weihe ich mich von ganzem Herzen.",
          "ant_3": "Ich preise dich, Vater meines Herrn Jesus Christus; denn durch ihn, deinen Sohn, hast du deiner Magd den Sieg verliehen.",
          "les_buch": "1 Petr",
          "les_stelle": "4,13-14",
          "les_text": "Freut euch, dass ihr Anteil an den Leiden Christi habt; denn so könnt ihr auch bei der Offenbarung seiner Herrlichkeit voll Freude jubeln. Wenn ihr wegen des Namens Christi beschimpft werdet, seid ihr seligzupreisen; denn der Geist der Herrlichkeit, der Geist Gottes, ruht auf euch.",
          "resp1_1": "Der Herr hat sie erwählt,",
          "resp1_2": "vor allen hat er sie erkoren.",
          "resp1_3": "In seinem Zelt lässt er sie wohnen.",
          "ant_ev": "Die heilige Agnes breitete die Hände aus und betete: Heiliger Vater, dich rufe ich an. Siehe, ich komme zu dir, den ich geliebt und gesucht, nach dem ich mich allezeit gesehnt.",
          "oration": "Ewiger Gott, du berufst, was schwach ist in dieser Welt, um das, was stark ist, zu beschämen. Höre auf die Fürsprache der heiligen Agnes. Komm uns zu Hilfe, damit auch wir unbeirrt den Glauben bekennen. Darum bitten wir durch Jesus Christus."
        }
      },
      "24": {
        "Invitatorium": {
          "comm_1": "Hirten",
          "comm_2": "Lehrer"
        },
        "Laudes": {
          "comm_1": "Hirten",
          "comm_2": "Lehrer",
          "name": "Hl. Franz von Sales",
          "oration": "Gütiger Gott, du hast den heiligen Franz von Sales dazu berufen, als Bischof und Lehrer allen alles zu werden. Hilf uns, sein Beispiel nachzuahmen und den Brüdern zu dienen, damit durch uns deine Menschenfreundlickeit sichtbar wird. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "comm_1": "Hirten",
          "comm_2": "Lehrer",
          "patr_autor": "Franz von Sales († 1622)",
          "patr_werk": "Aus der Einführung in das religiöse Leben.",
          "patr_text": "^hVerschiedene Formen frommer Übungen^p^pBei der Erschaffung gebot Gott, der Schöpfer, den Pflanzen, Frucht zu bringen je nach ihrer Art. So befiehlt er auch den Christen, den lebendigen Pflanzen seiner Kirche, Frucht der Frömmigkeit zu bringen je nach persönlicher Eigenart, nach Stand und Beruf.^pAnders, so möchte ich sagen, muss ein Edelmann fromm sein als ein Handwerker, anders ein Diener als ein Fürst, anders eine Witwe als ein unverheiratetes Mädchen oder eine in der Ehe lebende Frau. Doch nicht genug damit: auch die Ausübung der Frömmigkeit selbst muss der Kraft, der Tätigkeit und der Aufgabe eines jeden in besonderer Weise angepasst sein.^pSag mir bitte, liebe Philothea, ob es angebracht wäre, wenn ein Bischof wie ein Kartäuser die Einöde aufsuchte! Wenn Verheiratete sich nicht stärker um die Mehrung ihres Vermögens bemühen würden als ein Kapuziner; wenn ein Handwerker nach Art der Ordensleute den ganzen Tag in der Kirche verbrächte, die Ordensleute aber wie die Bischöfe dauernd den Anforderungen ausgesetzt wären, die sich im Zusammenhang mit der Not der Mitmenschen ergeben! Wäre ein solches Ordensleben nicht vielmehr lächerlich, ungeordnet und unerträglich?^pUnd doch begegnet dieser Fehler häufig... Wenn die Frömmigkeit nur wahr und aufrichtig ist, zerstört sie nichts, sondern vervollkommnet und vollendet alles. Wenn sie jedoch der Berufung und dem Stand eines Menschen widerspricht, ist sie ohne Zweifel falsch.^pDie Biene sammelt ihren Honig aus den Blüten, ohne sie im geringsten zu schädigen oder zu zerstören; sie hinterlässt sie vielmehr heil und frisch, wie sie sie vorfand. Die wahre Frömmigkeit tut dies noch besser: sie zerstört nicht nur keine Form von Beruf oder Tätigkeit, sondern macht sie sogar gefälliger und schöner.^pDurch sie wird dir auch die Sorge für die Familie friedvoller, die gegenseitige Liebe von Mann und Frau wird lauterer, der Dienst bei den Fürsten gewinnt an Treue, und alle Tätigkeiten, welche immer es seien, werden angenehmer und ansprechender.^pAn welcher Stelle immer wir stehen, stets können und sollen wir uns um das vollkommene Leben bemühen.",
          "patr_resp1": "Seid gütig gegeneinander, seid barmherzig, vergebt einander, wie Gott euch vergeben hat.",
          "patr_resp2": "Ahmt Gott nach als seine geliebten Kinder!",
          "patr_resp3": "Nehmt mein Joch auf euch und lernt von mir; denn ich bin gütig und selbstlos.",
          "oration": "Gütiger Gott, du hast den heiligen Franz von Sales dazu berufen, als Bischof und Lehrer allen alles zu werden. Hilf uns, sein Beispiel nachzuahmen und den Brüdern zu dienen, damit durch uns deine Menschenfreundlickeit sichtbar wird. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Vesper": {
          "comm_1": "Hirten",
          "comm_2": "Lehrer",
          "oration": "Gütiger Gott, du hast den heiligen Franz von Sales dazu berufen, als Bischof und Lehrer allen alles zu werden. Hilf uns, sein Beispiel nachzuahmen und den Brüdern zu dienen, damit durch uns deine Menschenfreundlickeit sichtbar wird. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "25": {
        "each": {
          "oration": "Gott, du Heil aller Völker, du hast den Apostel Paulus auserwählt, den Heiden die Frohe Botschaft zu verkünden. Gib uns, die wir das Fest seiner Bekehrung feiern, die Gnade, uns deinem Anruf zu stellen und vor der Welt deine Wahrheit zu bezeugen. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Invitatorium": {
          "ant_0": "Lasst uns Gott loben am Fest der Bekehrung des heiligen Paulus!"
        },
        "Laudes": {
          "comm_1": "Apostel",
          "name": "Bekehrung des hl. Apostels Paulus",
          "hymn_1": 81251.0,
          "ant_1": "Ich weiß, wem ich glaube, und ich bin sicher: er, mein gerechter Richter, hat die Macht, das mir anvertraute Gut zu bewahren bis zu seinem Tag.",
          "ant_2": "Paulus, meine Gnade genügt dir. Denn in der Schwachheit erweist sie ihre Kraft.",
          "ant_3": "Durch die Gnade Gottes bin ich, was ich bin. Sein gnädiges Handeln an mir blieb nicht ohne Wirkung.",
          "les_buch": "Apg",
          "les_stelle": "26,16b-18",
          "les_text": "Ich bin dir erschienen, um dich zum Diener und Zeugen dessen zu erwählen, was du gesehen hast und was ich dir noch zeigen werde. Ich will dich vor dem Volk und den Heiden retten, zu denen ich dich sende, um ihnen die Augen zu öffnen. Denn sie sollen sich von der Finsternis zum Licht und von der Macht des Satans zu Gott bekehren und sollen durch den Glauben an mich die Vergebung der Sünden empfangen und mit den Geheiligten am Erbe teilhaben.",
          "resp1_1": "Du bist ein auserwähltes Werkzeug,",
          "resp1_2": "heiliger Apostel Paulus.",
          "resp1_3": "Ein Künder der Wahrheit in der ganzen Welt.",
          "ant_ev": "Voll Freude feiern wir die Bekehrung des heiligen Paulus. Denn seinen Verfolger hat der Herr zu seinem Werkzeug erwählt."
        },
        "Lesehore": {
          "comm_1": "Apostel",
          "hymn_1": 71068.0,
          "ant_1": "Wer bist du, Herr? Ich bin Jesus, den du verfolgst. Es wird dir schwer sein, gegen den Stachel auszuschlagen.",
          "ant_2": "Hananias, geh und suche den Saulus, denn siehe, er betet. Er ist mir ein auserwähltes Werkzeug: Er soll meinen Namen vor Völker und Könige und vor die Söhne Israels tragen.",
          "ant_3": "Paulus ging in die Synagogen und verkündete Jesus. Er bezeugte vor den Juden: Dieser ist der Christus.",
          "resp0_0": "Der Herr ist barmherzig und gnädig.",
          "resp0_1": "Langmütig und reich an Güte.",
          "les_buch": "Aus dem Brief an die Galater.",
          "les_stelle": "1,11-24",
          "les_text": "^hDer uns einst verfolgte, verkündigt jetzt den Glauben^pIch erkläre euch, Brüder: Das Evangelium, das ich verkündigt habe, stammt nicht von Menschen; ich habe es ja nicht von einem Menschen übernommen oder gelernt, sondern durch die Offenbarung Jesu Christi empfangen. Ihr habt doch gehört, wie ich früher als gesetzestreuer Jude gelebt habe, und wisst, wie maßlos ich die Kirche Gottes verfolgte und zu vernichten suchte. In der Treue zum jüdischen Gesetz übertraf ich die meisten Altersgenossen in meinem Volk, und mit dem größten Eifer setzte ich mich für die Überlieferungen meiner Väter ein. Als aber Gott, der mich schon im Mutterleib auserwählt und durch seine Gnade berufen hat, mir in seiner Güte seinen Sohn offenbarte, damit ich ihn unter den Heiden verkündige, da zog ich keinen Menschen zu Rate; ich ging auch nicht sogleich hinauf nach Jerusalem zu denen, die vor mir Apostel waren, sondern zog nach Arabien und kehrte dann wieder nach Damaskus zurück. Drei Jahre später ging ich hinauf nach Jerusalem, um Kephas kennenzulernen, und blieb fünfzehn Tage bei ihm. Von den anderen Aposteln habe ich keinen gesehen, nur Jakobus, den Bruder des Herrn. Was ich euch hier schreibe - Gott weiß, dass ich nicht lüge. Danach ging ich in das Gebiet von Syrien und Zilizien. Den Gemeinden Christi in Judäa aber blieb ich persönlich unbekannt, sie hörten nur: Er, der uns einst verfolgte, verkündigt jetzt den Glauben, den er früher vernichten wollte. Und sie lobten Gott um meinetwillen.",
          "resp1_1": "Das Evangelium, das ich verkündigt habe, stammt nicht von Menschen.",
          "resp1_2": "Ich habe es nicht von einem Menschen empfangen, sondern durch die Offenbarung Jesu Christi.",
          "resp1_3": "Die Wahrheit Christi ist in mir, weil ich euch das Evangelium Gottes verkündigt habe.",
          "patr_autor": "Johannes Chrysostomus (+ 407)",
          "patr_werk": "Aus einer Homilie zu Ehren des heiligen Paulus.",
          "patr_text": "^hPaulus ertrug alles aus Liebe zu Christus^pAm besten von allen Menschen hat Paulus gezeigt, was der Mensch (eigentlich) ist, wie groß der Adel unserer Natur ist und welch großer Tugend dieses Lebewesen fähig ist. Täglich gab er sein Bestes, und wenn ihm Gefahren drohten, gewann er neue Zuversicht. Das machte er mit den Worten deutlich: „Ich vergesse, was hinter mir liegt, und strecke mich nach dem aus, was vor mir ist.“ {1#Phil 3,13} Als er den Tod nahe glaubte, rief er zur Teilnahme an der Freude darüber auf: „Ebenso sollt auch ihr euch freuen und sollt euch freuen mit mir.“ {2#Phil 2,18} Und wieder jubelt er über die ihn bedrängenden Gefahren, über alle Verspottungen und Schmähungen. Er schreibt den Korinthern: „Ich bejahe alle Misshandlungen und Nöte.“ {3#2 Kor 12,10} Er nannte dies 'die Waffen der Gerechtigkeit' {4#2 Kor 6,7} und zeigte, dass er durch sie größten Vorteil hatte und für die Feinde ringsumher unerreichbar war. Überall wurde er gegeißelt, verspottet und geschmäht. So konnte er wie im Triumph einhergehen und die Siegeszeichen in dichter Folge überall auf der Erde aufrichten. Er frohlockte und danke Gott: „Dank sei Gott, der uns stets im Siegeszug Christi mitführt!“ {5#2 Kor 2,14} Er suchte mehr die Unscheinbarkeit und Verachtung um der Verkündigung willen als wir die Ehre, mehr den Tod als wir das Leben, mehr die Armut als wir den Reichtum, die Plage mehr als andere die Erholung. Eines nur schien ihm furchtbar, eines nur glaubte er fliehen zu müssen: Gott zu beleidigen, sonst nichts! So erschien ihm auch nichts der Sehnsucht wert, als Gott zu gefallen.^pWas wertvoller ist als alles, das trug er in sich: die Liebe Christi, und mit ihr schätzte er sich glücklicher als alle Menschen. Ohne sie wünschte er sich nicht, zu den Mächten, Fürsten und Gewalten zu gehören. Eher wollte er mit dieser Liebe zu den Letzten zählen, ja ein Sträfling sein, als ohne sie zu den Großen und den Geehrten gerechnet werden. Für ihn gab es eine Strafe: ohne diese Liebe zu sein.^pOhne die Liebe Christi sein, das war ihm Höllenstrafe und unerträgliche Pein; sie jedoch zu besitzen, das war ihm Leben, Welt, Engel, Gegenwärtiges und Zukünftiges, Königtum, Verheißung und unzähliges Gute. Nichts, nichts, was nicht Bezug auf die Liebe Christi hatte, wertete er als unangenehm oder angenehm.^pEr verachtete alles Sichtbare wie eine verwesende Pflanze. Die Tyrannen und das wutschnaubende Volk schienen ihm lästige Mücken.^pDer Tod, Strafen und tausend Züchtigungen waren ihm wie Kinderspiel, wenn er nur um Christi willen dulden durfte.",
          "patr_resp1": "Ich habe bei Gott Erbarmen gefunden, weil ich in meinem Unglauben nicht wusste, was ich tat.",
          "patr_resp2": "Übergroß war die Gnade unseres Herrn, die mir den Glauben und die Liebe schenkte.",
          "patr_resp3": "Ich bin nicht wert, Apostel genannt zu werden."
        },
        "Non": {
          "ant_0": "Der Herr sprach zu Saulus: Ich bin Jesus von Nazaret, den du verfolgst.",
          "les_buch": "1 Tim",
          "les_stelle": "1,16",
          "les_text": "Ich habe Erbarmen gefunden, damit Christus Jesus an mir als Erstem seine ganze Langmut beweisen konnte, zum Vorbild für alle, die in Zukunft an ihn glauben, um das ewige Leben zu erlangen.",
          "resp1_0": "Deinen Namen will ich ehren immer und ewig.",
          "resp1_1": "Denn groß ist über mir deine Huld."
        },
        "Sext": {
          "ant_0": "Um die Mittagszeit, als Paulus sich Damaskus näherte, umstrahlte ihn plötzlich ein helles Licht vom Himmel.",
          "les_buch": "1 Tim",
          "les_stelle": "1,14-15",
          "les_text": "So übergroß war die Gnade unseres Herrn, die mir in Christus Jesus den Glauben und die Liebe schenkte. Das Wort ist glaubwürdig und wert, dass man es beherzigt: Christus Jesus ist in die Welt gekommen, um die Sünder zu retten. Von ihnen bin ich der Erste.",
          "resp1_0": "Du, Herr, lässt meine Leuchte erstrahlen.",
          "resp1_1": "Mein Gott, mach meine Finsternis hell."
        },
        "Terz": {
          "ant_0": "Bruder Saul, der Herr hat mich gesandt, Jesus, der dir auf dem Weg erschienen ist. Du sollst wieder sehen und den Heiligen Geist empfangen.",
          "les_buch": "1 Tim",
          "les_stelle": "1,12-13",
          "les_text": "Ich danke dem, der mir Kraft gegeben hat: Christus Jesus, unserem Herrn. Er hat mich für treu gehalten und in seinen Dienst genommen, obwohl ich ihn früher lästerte, verfolgte und verhöhnte. Aber ich habe Erbarmen gefunden, denn ich wusste in meinem Unglauben nicht, was ich tat.",
          "resp1_0": "So spricht der Herr: Freut euch und jubelt.",
          "resp1_1": "Denn eure Namen sind im Himmel verzeichnet."
        },
        "Vesper": {
          "comm_1": "Apostel",
          "hymn_1": 81251.0,
          "ant_1": "Mit Freuden rühme ich mich meiner Schwachheit, dass Christi Kraft in mir wohne.",
          "ant_2": "Ich habe gepflanzt, Apollos hat begossen, Gott aber gab das Wachstum.",
          "ant_3": "Für mich ist Christus das Leben, und Sterben ist mir Gewinn. Im Kreuze unseres Herrn Jesus Christus muss ich mich rühmen.",
          "les_buch": "1 Kor",
          "les_stelle": "15,9-10",
          "les_text": "Ich bin der geringste von den Aposteln; ich bin nicht wert, Apostel genannt zu werden, weil ich die Kirche Gottes verfolgt habe. Doch durch Gottes Gnade bin ich, was ich bin, und sein gnädiges Handeln an mir ist nicht ohne Wirkung geblieben. Mehr als sie alle habe ich mich abgemüht – nicht ich, sondern die Gnade Gottes zusammen mit mir.",
          "resp1_1": "Ich will dir danken, Herr, mein Gott,",
          "resp1_2": "aus ganzem Herzen dir lobsingen.",
          "resp1_3": "Unter den Heiden will ich deinen Namen ehren.",
          "ant_ev": "Heiliger Apostel Paulus, Verkünder der Wahrheit und Lehrer der Heiden, tritt für uns ein bei Gott, der dich erwählt hat."
        }
      },
      "26": {
        "Invitatorium": {
          "comm_1": "Hirten"
        },
        "Laudes": {
          "comm_1": "Hirten",
          "name": "Hl. Timotheus und hl. Titus",
          "ant_ev": "Verkünde das Wort, tritt dafür ein, ob man es hören will oder nicht; weise zurecht, tadle und ermahne in geduldiger Belehrung.",
          "oration": "Gott, unser Vater, du hast die Apostelschüler Timotheus und Titus mit den Gaben des Heiligen Geistes beschenkt und sie deiner Kirche als Hirten gegeben. Höre auf ihre Fürsprache und hilf uns, dass wir gerecht und fromm in dieser Welt leben und so zur Gemeinschaft mit deinen Heiligen gelangen. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "comm_1": "Hirten",
          "patr_autor": "Johannes Chrysostomus (+ 407)",
          "patr_werk": "Aus einer Homilie zu Ehren des heiligen Paulus.",
          "patr_text": "^hIch habe einen guten Kampf gekämpft^pSelbst im Kerker lebte Paulus wie im Himmel. Wunden und Schläge nahm er lieber auf sich als andere nach Ehrenpreisen griffen. Die Mühen liebte er nicht weniger als den Lohn des Kampfes, ja er hielt die Mühen selbst für den Kampfpreis und nannte sie aus diesem Grund auch Gnade! {1#Vgl. Phil 1,7} Siehe, Kampfpreis war es ihm, „aufzubrechen und bei Christus zu sein“ {2#Phil 1,23}. Im Fleisch zu bleiben bedeutete für ihn Kampf. Und doch zog er diesen (Kampf) jenem (Kampfpreis) vor und erklärte, dieser sei für ihn notwendiger als jener.^pVon Christus fern sein war ihm Kampf und Mühe, Kampf und Mühe im Übermaß. Bei ihm sein galt ihm dagegen als Kampfpreis. Dennoch zog er den Kampf um Christi willen vor.^pHier könnte jemand gewiss auch sagen, das alles sei ihm eben um Christi willen angenehm gewesen. So denke ich auch; denn was uns Betrübnis verursacht, schuf ihm große Freude. Was soll ich die Gefahren und die übrigen Leiden aufzählen? Denn er war in fortwährender Trübsal. Deshalb sagte er: „Wer leidet, ohne dass ich mit ihm leide? Wer kommt zu Fall, ohne dass ich von Sorge verzehrt werde!“ {3#2 Kor 11,29}^pIch ermahne euch, dieses Vorbild der Tugend nicht nur zu bewundern, sondern auch nachzuahmen. Dadurch können wir den gleichen Kranz erlangen wie er.^pWunderst du dich, zu hören: wenn du dasselbe vollbringst wie Paulus, dann kannst du dasselbe erlangen wie er? Dann höre, was er selbst sagt: „Ich habe den guten Kampf gekämpft, den Lauf vollendet, die Treue gehalten. Jetzt liegt für mich der Kranz der Gerechtigkeit bereit, den mir der Herr, der gerechte Richter, an jenem Tag geben wird, aber nicht nur mir, sondern allen, die sehnsüchtig auf sein Erscheinen warten.“ {4#2 Tim 4,7.8}^pSiehst du: er ruft alle zur gleichen Gemeinschaft! Weil also allen das gleiche in Aussicht steht, lasst uns dafür sorgen, dass wir der verheißenen Güter wert werden.^pWir wollen nicht bloß auf die große Last des von ihm Vollbrachten schauen, sondern auch auf die angespannte Bereitwilligkeit, mit der er eine so große Gnade gewann, und auf die Verwandtschaft der Natur! Denn er war in allem ein Mensch wie wir. So scheint uns dann auch das ganz Schwere leicht und ohne Gewicht. Und wenn wir uns diese kurze Zeit abgemüht haben, werden wir schließlich den niemals alternden unsterblichen Kranz tragen und so zur Vollendung gelangen; durch die Gnade und Menschenfreundlichkeit unseres Herrn Jesus Christus, dem Macht und Herrlichkeit ist jetzt und immer und in Ewigkeit. Amen.",
          "patr_resp1": "Bemühe dich um Gerechtigkeit, Frömmigkeit, Glauben, Liebe, Standhaftigkeit und Sanftmut.",
          "patr_resp2": "Kämpfe den guten Kampf des Glaubens, ergreife das ewige Leben!",
          "patr_resp3": "Rede, wie es der gesunden Lehre entspricht.",
          "oration": "Gott, unser Vater, du hast die Apostelschüler Timotheus und Titus mit den Gaben des Heiligen Geistes beschenkt und sie deiner Kirche als Hirten gegeben. Höre auf ihre Fürsprache und hilf uns, dass wir gerecht und fromm in dieser Welt leben und so zur Gemeinschaft mit deinen Heiligen gelangen. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Vesper": {
          "comm_1": "Hirten",
          "ant_ev": "Gerecht und heilig wollen wir leben in der Hoffnung auf die Wiederkunft des Herrn.",
          "oration": "Gott, unser Vater, du hast die Apostelschüler Timotheus und Titus mit den Gaben des Heiligen Geistes beschenkt und sie deiner Kirche als Hirten gegeben. Höre auf ihre Fürsprache und hilf uns, dass wir gerecht und fromm in dieser Welt leben und so zur Gemeinschaft mit deinen Heiligen gelangen. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "28": {
        "Invitatorium": {
          "comm_1": "Lehrer"
        },
        "Laudes": {
          "comm_1": "Lehrer",
          "name": "Hl. Thomas von Aquin",
          "ant_ev": "Gepriesen sei der Herr! Aus Liebe zu ihm hat Thomas geforscht, hat Nächte durchwacht und sich abgemüht.",
          "oration": "Gott, du Quell der Weisheit, du hast dem heiligen Thomas von Aquin ein leidenschaftliches Verlangen geschenkt, nach Heiligkeit zu streben und deine Wahrheit zu erfassen. Hilf uns verstehen, was er gelehrt, und nachahmen, was er uns vorgelebt hat. Darum bitten wir durch Jesus Christus."
        },
        "Lesehore": {
          "comm_1": "Lehrer",
          "patr_autor": "Thomas von Aquin (+ 1274)",
          "patr_werk": "Mahnbrief an Frater Johannes über die Weise zu studieren.",
          "patr_text": "^hWas du liest oder hörst, bemühe dich zu verstehen^pDa du mich gefragt hast, mein lieber Bruder Johannes, wie du studieren musst, um den Schatz der Wissenschaften zu gewinnen, möchte ich dir folgenden Rat geben:^pWähle den Weg über die Bäche und stürze dich nicht gleich in das Meer! Man muss durch das Leichtere zum Schwierigen gelangen.^pDas ist also meine Mahnung und Richtlinie für dich. Ich sage dir: sei bedachtsam im Reden und gehe bedachtsam in ein Gespräch.^lErhalte dir die Reinheit des Gewissens.^lHöre nicht auf zu beten.^lLiebe deine Zelle, wenn du in den Weinkeller der Weisheit geführt werden möchtest.^lZeige dich liebenswürdig gegenüber allen.^lKümmere dich nicht um das Tun der anderen.^lSei mit keinem zu vertraut; denn zu große Vertraulichkeit bringt Geringschätzung ein und schafft Gelegenheit, sich dem Studium zu entziehen.^lMische dich nicht in das Reden und Tun der Weltleute ein.^lMeide Streitgespräche, was immer auch beredet wird.^lVersäume nicht, den Spuren der Heiligen und der Guten zu folgen.^lBeachte nicht, von wem du etwas hörst, sondern, wenn Gutes gesagt wird, merke es dir.^lWas du liest oder hörst, bemühe dich zu verstehen.^lIn Zweifeln verschaffe dir Gewissheit.^lWenn du etwas in der Schatzkammer deines Geistes verschließen kannst, dann bemühe dich, wie ein Dürstender die Gefäße zu füllen.^lSuche nicht, was für dich zu hoch ist.^pWenn du diese Bahn einschlägst, wirst du lebendig bleiben und nützliche Frucht bringen im Weinberg des Herrn der Scharen, solange du lebst. Und wenn du das befolgst, wirst du erreichen können, was du begehrst.",
          "patr_resp1": "Ich betete, und es wurde mir Einsicht gegeben.",
          "patr_resp2": "Ich flehte, da kam mir der Geist der Weisheit.",
          "patr_resp3": "Ich zog sie Zeptern und Kronen vor und achtete Reichtum für nichts im Vergleich mit ihr.",
          "oration": "Gott, du Quell der Weisheit, du hast dem heiligen Thomas von Aquin ein leidenschaftliches Verlangen geschenkt, nach Heiligkeit zu streben und deine Wahrheit zu erfassen. Hilf uns verstehen, was er gelehrt, und nachahmen, was er uns vorgelebt hat. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "comm_1": "Lehrer",
          "ant_ev": "Gott gab ihm Weisheit in Fülle; redlich mühte er sich, sie zu erfassen, und gab sie selbstlos weiter.",
          "oration": "Gott, du Quell der Weisheit, du hast dem heiligen Thomas von Aquin ein leidenschaftliches Verlangen geschenkt, nach Heiligkeit zu streben und deine Wahrheit zu erfassen. Hilf uns verstehen, was er gelehrt, und nachahmen, was er uns vorgelebt hat. Darum bitten wir durch Jesus Christus."
        }
      },
      "31": {
        "Invitatorium": {
          "comm_1": "Hirten",
          "comm_2": "Erzieher"
        },
        "Laudes": {
          "comm_1": "Hirten",
          "comm_2": "Erzieher",
          "name": "Hl. Johannes Bosco",
          "oration": "Gott, du Quell der Freude, du hast den heiligen Johannes Bosco berufen, der Jugend ein Vater und Lehrer zu sein. Gib auch uns die Liebe, die ihn erfüllt hat, damit wir fähig werden, Menschen für dich zu gewinnen und dir allein zu dienen. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "comm_1": "Hirten",
          "comm_2": "Erzieher",
          "patr_autor": "Johannes Bosco (+ 1888)",
          "patr_werk": "Aus einem Brief.",
          "patr_text": "^hIch habe immer mit Liebe gearbeitet^pWenn wir eifrig für das wirkliche Glück unserer Zöglinge sorgen und sie zur Erfüllung ihrer Pflichten anleiten möchten, dürfen wir vor allem nie vergessen, dass wir Elternstelle an den lieben jungen Menschen vertreten. Ich habe immer mit Liebe für sie gearbeitet, mich um sie bemüht und das Priestertum ausgeübt, nicht ich allein, sondern die ganze salesianische Gesellschaft.^pLiebe Söhne, wie oft musste ich mich in meinem langen Leben durchringen zu der großen Wahrheit: Leichter ist es zornig zu werden, als zu ertragen, einem Knaben zu drohen, statt ihm eindringlich zuzureden. Ja, ich sage es: es ist bequemer für unsere Ungeduld und unseren Hochmut, die Fehlenden zu strafen, als sie fest und freundlich zu ertragen und so zu bessern.^pIch empfehle euch die Liebe des Paulus, die er gegenüber den Neugetauften an den Tag legte. Oft führte sie dazu, dass er weinte und inständig betete, wenn er sah, wie wenig gelehrig sie waren und wie sie seiner Liebe widerstanden.^pGebt acht, dass euch niemand vorwerfen kann, ihr ließet euch durch heftige Gemütsbewegungen leiten. Es ist schwer, beim Strafen die Standhaftigkeit des Herzens zu bewahren, die nötig ist, wenn es nicht scheinen soll, wir handelten nur, um unsere Autorität zu zeigen oder um der Erregung des Gemüts ihren Lauf zu lassen.^pWir müssen sie als Söhne betrachten, über die wir eine Vollmacht auszuüben haben. Wir wollen uns zu ihren Dienern machen wie Jesus, der kam, um gehorsam zu sein, nicht zu befehlen {1#Vgl. Mk 10,45}, und wir sollten uns schon des Anscheins der Herrschsucht schämen; wir wollen nicht über sie herrschen, es sei denn, um ihnen zu dienen.^pSo machte es Jesus mit den Aposteln. Sie waren unwissend und ungebildet, ja auch ihr Glaube war klein. Aber er ertrug sie. Gegenüber den Sündern bewies er eine so gütige und vertraute Freundschaft, dass die einen staunten, die andern Anstoß nahmen, andere schließlich Hoffnung schöpften, von Gott Verzeihung zu erlangen. Deswegen forderte er uns auf, gütig und von Herzen demütig zu sein {2#Vgl. Mt 11,29}.^pSie sind unsere Söhne. Wenn wir daher ihre Irrtümer unterdrücken wollen, müssen wir allen Zorn ablegen oder doch so mäßigen, als hätten wir ihn ganz ausgelöscht.^pIn besonders schweren Fällen empfiehlt es sich, mehr inständig und demütig zu Gott zu beten, als einen Wortschwall loszulassen, der nur das Gemüt der Hörer beleidigt, den Schuldigen aber keinen Nutzen bringt.",
          "patr_resp1": "Sie brachten Kinder zu Jesus. Die Jünger aber wiesen die Leute ab. Als Jesus das sah, sprach er zu ihnen:",
          "patr_resp2": "Lasst die Kinder zu mir kommen; denn ihnen gehört das Gottesreich.",
          "patr_resp3": "Wer ein solches Kind in meinem Namen aufnimmt, nimmt mich auf.",
          "oration": "Gott, du Quell der Freude, du hast den heiligen Johannes Bosco berufen, der Jugend ein Vater und Lehrer zu sein. Gib auch uns die Liebe, die ihn erfüllt hat, damit wir fähig werden, Menschen für dich zu gewinnen und dir allein zu dienen. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Vesper": {
          "comm_1": "Hirten",
          "comm_2": "Erzieher",
          "oration": "Gott, du Quell der Freude, du hast den heiligen Johannes Bosco berufen, der Jugend ein Vater und Lehrer zu sein. Gib auch uns die Liebe, die ihn erfüllt hat, damit wir fähig werden, Menschen für dich zu gewinnen und dir allein zu dienen. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      }
    },
    "2": {
      "2": {
        "each": {
          "oration": "eig-2-2-each-Oration",
          "oration_komplet": "Allmächtiger, ewiger Gott, dein eingeborener Sohn hat unsere menschliche Natur angenommen und wurde am heutigen Tag im Tempel dargestellt. Läutere unser Leben und Denken, damit wir mit reinem Herzen vor dein Antlitz treten. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Invitatorium": {
          "ant_0": "Zu seinem heiligen Tempel kommt der Herrscher, der Herr; kommt, wir beten ihn an!"
        },
        "Laudes": {
          "name": "Darstellung des Herrn",
          "hymn_1": 82022.0,
          "ant_1": "Simeon war gerecht und fromm und erwartete die Rettung Israels, und der Heilige Geist ruhte auf ihm.",
          "ant_2": "Simeon nahm das Kind auf seine Arme, er lobte Gott und sagte ihm Dank.",
          "ant_3": "Ein Licht, das die Heiden erleuchtet, und Herrlichkeit für dein Volk Israel.",
          "les_buch": "Mal",
          "les_stelle": "3,1",
          "les_text": "Seht, ich sende meinen Boten; er soll den Weg für mich bahnen. Dann kommt plötzlich zu seinem Tempel der Herr, den ihr sucht, und der Bote des Bundes, den ihr herbeiwünscht. Seht, er kommt!, spricht der Herr der Heere.",
          "resp1_1": "Werft euch nieder vor dem Herrn",
          "resp1_2": "in seinem heiligen Tempel.",
          "resp1_3": "Lobpreis und Ehre bringet ihm dar",
          "ant_ev": "Als die Eltern Jesus in den Tempel brachten, nahm Simeon das Kind auf seine Arme und lobte Gott.",
          "bitten_e": "Gepriesen sei unser Erlöser Jesus Christus, der am heutigen Tag im Tempel dargestellt wurde. Zu ihm lasst uns beten:",
          "bitten_r": "Herr, zeige uns dein Angesicht.",
          "bitten": "Du bist der Ruhm deines Volkes Israel;^qmach uns froh in der Gemeinschaft deiner Kirche.^pDu bist das Licht zur Erleuchtung der Heiden;^qöffne unser Herz für die Sorgen der jungen Kirchen.^pDu hast dich in allem dem Willen des Vaters unterworfen;^qhilf uns heute, den Willen Gottes zu tun.^pMaria hat mit dir die Bitternis des Leidens getragen;^qauf ihre Fürsprache stärke uns, wenn wir leiden müssen."
        },
        "Lesehore": {
          "hymn_1": 82021.0,
          "hymn_2": 82022.0,
          "ps_1": 2.0,
          "ps_2": 19.1,
          "ps_3": 45.0,
          "ant_1": "Dieser ist bestimmt zum Falle und zur Auferstehung vieler in Israel.",
          "ant_2": "Steh auf, Jerusalem, und werde licht! Denn dein Licht ist gekommen, und die Herrlichkeit des Herrn geht strahlend über dir auf.",
          "ant_3": "Freue dich, du neues Zion! Siehe, dein König kommt, sein Volk zu erlösen.",
          "resp0_0": "Wir gedenken deiner Huld, o Gott.",
          "resp0_1": "In deinem heiligen Tempel.",
          "les_buch": "Aus dem Buch Exodus.",
          "les_stelle": "13,1-3a.11-16",
          "les_text": "^hJeden Erstgeborenen musst du auslösen^pDer Herr sprach zu Mose: Erkläre alle Erstgeburt als mir geheiligt! Alles, was bei den Israeliten den Mutterschoß durchbricht, bei Mensch und Vieh, gehört mir.^pMose sagte zum Volk: Denkt an diesen Tag, an dem ihr aus Ägypten, dem Sklavenhaus, fortgezogen seid; denn mit starker Hand hat euch der Herr von dort herausgeführt.^pDer Herr wird dich in das Land der Kanaaniter bringen und wird es dir geben, wie er dir und deinen Vätern mit einem Eid zugesichert hat. Dann musst du alles, was den Mutterschoß durchbricht, vor den Herrn bringen; alle männlichen Erstlinge, die dein Vieh wirft, gehören dem Herrn. Jeden Erstling vom Esel aber löse durch ein Schaf aus! Willst du ihn nicht auslösen, dann brich ihm das Genick! Jeden Erstgeborenen deiner Söhne musst du auslösen. Wenn dich morgen dein Sohn fragt: Was bedeutet das?, dann sag ihm: Mit starker Hand hat uns der Herr aus Ägypten, aus dem Sklavenhaus, herausgeführt.^pAls der Pharao hart blieb und uns nicht ziehen ließ, erschlug der Herr alle Erstgeborenen in Ägypten, bei Mensch und Vieh. Darum opfere ich dem Herrn alle männlichen Tiere, die den Mutterschoß durchbrechen; alle Erstgeborenen meiner Söhne aber löse ich aus. Das sei dir ein Zeichen an deiner Hand und ein Schmuck auf deiner Stirn; denn mit starker Hand hat uns der Herr aus Ägypten herausgeführt.",
          "resp1_1": "Als für Maria die Tage der Reinigung vorüber waren, brachten sie Jesus nach Jerusalem, um ihn dem Herrn darzustellen,",
          "resp1_2": "wie es im Gesetz des Herrn geschrieben steht.",
          "resp1_3": "Sie opferten für ihn dem Herrn.",
          "patr_autor": "Sophronius von Jerusalem († 638)",
          "patr_werk": "Rede am Fest der Darstellung des Herrn.",
          "patr_text": "^hLasst uns das helle und ewige Licht aufnehmen^pWir wollen dem Herrn alle entgegengehen, wir alle, die sein Geheimnis verehren; mit willigem Herzen lasst uns alle gehen! Keiner schließe sich von der Begegnung aus, niemand bleibe dem Träger des Lichtes fern!^pWir entzünden den Glanz der Kerzen, um das göttliche Licht der Ankunft dessen anzuzeigen, von dem alles leuchtet, durch den die böse Finsternis verjagt wird und alles von der Fülle ewigen Lichtes hell wird. Wir tun es auch, um sichtbar zu machen, mit welchem Glanz der Seele wir Christus entgegeneilen müssen.^pWie die jungfräuliche Gottesmutter unbefleckt das wahre Licht auf den Armen trug und bei denen war, die in Finsternis und im Dunkel des Todes saßen {1#Lk 1,79}, so wollen auch wir, von seinen Strahlen erleuchtet, den Händen das Licht, das allen erscheint, dem entgegeneilen, der wahrhaft das Licht ist.^p„Das Licht kam in die Welt“ {2#Joh 1,9} und erhellte sie, die von Finsternis umfangen war. Das strahlende Licht aus der Höhe {3#Lk 1,78} kam zu uns und leuchtet denen, die in Finsternis und im Dunkel des Todes saßen. Das ist unser Mysterium, und darum schreiten wir mit Lampen einher, darum sind wir mit Lichtern herbeigeeilt, um zu zeigen, dass uns das Licht aufgeleuchtet ist, um anzudeuten, welcher Glanz von ihm auf uns übergehen wird. Darum lasst uns alle zusammen laufen, lasst uns alle Gott entgegeneilen!^pNiemand von uns bleibe ohne die Weihe dieses Lichtes, niemand, den es erfüllt, bleibe im Finstern. Voll Glanz wollen wir alle hervortreten, erleuchtet lasst uns ihm alle zusammen entgegengehen und mit dem greisen Simeon das klare und ewige Licht in Empfang nehmen. Mit ihm wollen wir im Herzen jubeln und dem Erzeuger und Vater des Lichtes, der das wahre Licht gesandt, das Dunkel verscheucht und alles zum Leuchten gebracht hat, den Hymnus des Dankes singen! {4#Lk 2,28-32}^pAuch wir haben das Heil Gottes gesehen, das er vor allen Völkern bereitet hat, des neuen Israel Herrlichkeit geoffenbart hat. Wir lebten im Dunkel der alten Sünde und wurden wie Simeon beim Anblick Christi von den Fesseln des gegenwärtigen Lebens befreit.^pAuch wir haben Christus, als er aus Bethlehem zu uns kam, im Glauben umarmt und wurden aus Heiden zu Gottes Volk, denn er ist das Heil Gottes des Vaters.^pWir haben mit den Augen den Mensch gewordenen Gott gesehen, und als wir Gottes Gegenwart sahen, haben wir ihn im Geist auf die Arme genommen, und seitdem werden wir das neue Israel genannt. Alljährlich feiern wir dieses Kommen Gottes und werden es niemals vergessen.",
          "patr_resp1": "Die Herrlichkeit des Herrn kam in den Tempel,",
          "patr_resp2": "und das Haus Gottes wurde erfüllt von Herrlichkeit.",
          "patr_resp3": "Die Eltern brachten den Knaben Jesus in den Tempel."
        },
        "Non": {
          "les_buch": "Jes",
          "les_stelle": "12,5-6",
          "les_text": "Preist den Herrn, denn herrliche Taten hat er vollbracht; auf der ganzen Erde soll man es wissen. Jauchzt und jubelt, ihr Bewohner von Zion; denn groß ist in eurer Mitte der Heilige Israels.",
          "resp1_0": "Huld und Treue begegnen einander.",
          "resp1_1": "Gerechtigkeit und Friede küssen sich."
        },
        "Sext": {
          "les_buch": "Jes",
          "les_stelle": "42,13",
          "les_text": "Der Herr zieht in den Kampf wie ein Held, er entfacht seine Leidenschaft wie ein Krieger. Er erhebt den Schlachtruf und schreit, er zeigt sich als Held gegenüber den Feinden.",
          "resp1_0": "Alle Enden der Erde.",
          "resp1_1": "Schauen das Heil unseres Gottes."
        },
        "Terz": {
          "les_buch": "Jes",
          "les_stelle": "8,14",
          "les_text": "Der Herr der Heere wird das Heiligtum sein für die beiden Reiche Israels: der Stein, an dem man anstößt, der Felsen, an dem man zu Fall kommt. Eine Schlinge und Falle wird er sein für alle, die in Jerusalem wohnen.",
          "resp1_0": "Der Herr gedachte seiner Huld.",
          "resp1_1": "Und seiner Treue zum Hause Israel."
        },
        "Vesper": {
          "hymn_1": 82022.0,
          "ps_1": 110.0,
          "ps_2": 130.0,
          "ps_3": 154.0,
          "ant_1": "Simeon hatte vom Heiligen Geist die Verheißung empfangen, er werde den Tod nicht schauen, bevor er den Herrn gesehen habe.",
          "ant_2": "Sie brachten dem Herrn ihr Opfer dar, wie das Gesetz es vorschrieb: ein Paar Turteltauben oder zwei junge Tauben.",
          "ant_3": "Meine Augen haben das Heil gesehen, das du vor allen Völkern bereitet hast.",
          "les_buch": "Hebr",
          "les_stelle": "4,15-16",
          "les_text": "Wir haben nicht einen Hohenpriester, der nicht mitfühlen könnte mit unserer Schwäche, sondern einen, der in allem wie wir in Versuchung geführt worden ist, aber nicht gesündigt hat. Lasst uns also voll Zuversicht hingehen zum Thron der Gnade, damit wir Erbarmen und Gnade finden und so Hilfe erlangen zur rechten Zeit.",
          "resp1_1": "Der Herr hat kundgemacht sein Heil,",
          "resp1_2": "das er bereitet hat vor allen Völkern.",
          "resp1_3": "Meine Augen haben sein Heil geschaut.",
          "ant_ev": "Die Jungfrau Maria weiht heute im Tempel Gott, dem Herrn, ihr Kind. Erfüllt vom Heiligen Geist, nimmt es Simeon auf seine Arme und lobt den Herrn.",
          "bitten_e": "Lasst uns beten zu unserem Erlöser Jesus Christus, der am heutigen Tag im Tempel dargestellt wurde:",
          "bitten_r": "Lass alle Menschen dein Angesicht schauen.",
          "bitten": "Du Sehnsucht der Völker und Licht zur Erleuchtung der Heiden,^qführe alle, die dich noch nicht kennen, zum Glauben.^pDu Hoffnung des greisen Simeon und der Prophetin Hanna,^qsei den alten Menschen nahe.^pDu Zeichen, dem widersprochen wird,^qstärke alle, die um deines Namens willen verfolgt werden.^pDu Sohn der Mutter Maria, deren Seele ein Schwert durchbohrt hat,^qtröste alle, die leiden müssen.^pHier können Fürbitten in besonderen Anliegen eingefügt werden.^pLass die Sterbenden in Frieden scheiden^qund schenke unseren Verstorbenen dein Heil."
        }
      },
      "4": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-2-4-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {
          "name": "Hl. Rabanus Maurus"
        },
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "5": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-2-5-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {
          "name": "Hl. Agatha",
          "farbe": "r",
          "ant_ev": "Vor Freude strahlend, ging Agatha in den Kerker,^lals ginge sie zu einem Gastmahl,^lund betend empfahl sie dem Herrn ihren Kampf.",
          "oration": "Allmächtiger Gott, du hast die heilige Agatha zur Jungfräulichkeit um Christi willen berufen und ihr die Gnade des Martyriums geschenkt. Höre auf ihre Fürsprache und hilf uns, in aller Bedrängnis auszuharren und dir in Lauterkeit und Treue zu dienen. Darum bitten wir durch Jesus Christus."
        },
        "Lesehore": {
          "patr_autor": "Methodius von Konstantinopel († 847)",
          "patr_werk": "Aus einer Rede zu Ehren der heiligen Agatha.",
          "patr_text": "^hAgatha, „die Gute“, ist ein Geschenk Gottes, der Quelle des Guten^pDas Jahresgedächtnis der heiligen Märtyrin hat uns alle an diesem Ort zusammengeführt. Wie ihr, meine Hörer, alle wisst, ist der Grund für unsere Versammlung der ruhmvolle Kampf einer der ersten Märtyrinnen alter Zeit. Aber sie gehört auch der Gegenwart an, da sie auch jetzt im Kampf siegt durch die Wunder Gottes, die täglich ihr Kranz und ihr kostbarer Schmuck sind.^pSie ist Jungfrau, weil sie aus dem Wort des unsterblichen Gottes – das auch für mich in seiner Menschheit den Tod erlitt –, aus dem ungeteilten Gottessohn, geboren ist, wie Johannes sagt: „Allen aber, die ihn aufnahmen, gab er Macht, Kinder Gottes zu werden“ (Joh 1,12).^pDie Jungfrau also, die euch zu unserem heiligen Mahl geladen hat, ist die Frau, die dem einen Mann Christus verlobt ist, wenn wir im Sinn des Apostels das Bild von der Vereinigung im Brautgemach gebrauchen wollen (2 Kor 11,2).^pDiese wahrhaft Gute, weil Gottes eigener Anteil, ist Agatha für ihren Bräutigam, und sie ist es kraft der Verbundenheit im Guten, dieser Spiegelung von Sinn und Bedeutung ihres Namens, auch für uns. Gott, der Quell des Guten, hat sie uns als Geschenk verliehen.^pWelche gute Gabe wäre größer als das höchste Gut! Wo wäre jemand mehr des Lobes wert als Agatha, die Gute?^pAgatha, deren Gutsein dem Namen und der Wirklichkeit entspricht; Agatha, die durch ihre herrlichen Taten ihrem guten Namen Ehre macht und eben in diesem guten Namen die guten Taten zeigt, die sie vollbracht hat; Agatha, die durch ihren guten Namen eine solche Anziehungskraft besitzt, dass alle von ganzer Seele zu ihr eilen. Sie lehrt alle Menschen durch ihr gutes Beispiel, unverzüglich mit ihr nach dem wahren Gut zu streben, das allein der eine Gott ist.",
          "patr_resp1": "Der Herr hilft mir, und ich beharre in seinem Bekenntnis;",
          "patr_resp2": "er hat mich gerettet und getröstet.",
          "patr_resp3": "Der makellose Herr hat in seinem Erbarmen sich die Dienerin ohne Makel geweiht.",
          "oration": "Allmächtiger Gott, du hast die heilige Agatha zur Jungfräulichkeit um Christi willen berufen und ihr die Gnade des Martyriums geschenkt. Höre auf ihre Fürsprache und hilf uns, in aller Bedrängnis auszuharren und dir in Lauterkeit und Treue zu dienen. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "ant_ev": "Herr Jesus Christus, guter Meister,^lich sage dir Dank.^lDu gabst mir Kraft, die Folter zu bestehen.^lNun nimm mich auf^lin deine Herrlichkeit, die niemals enden wird.",
          "oration": "Allmächtiger Gott, du hast die heilige Agatha zur Jungfräulichkeit um Christi willen berufen und ihr die Gnade des Martyriums geschenkt. Höre auf ihre Fürsprache und hilf uns, in aller Bedrängnis auszuharren und dir in Lauterkeit und Treue zu dienen. Darum bitten wir durch Jesus Christus."
        }
      },
      "6": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-2-6-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {
          "name": "Hll. Paul Miki und Gefährten",
          "farbe": "r",
          "oration": "Starker Gott, du bist die Kraft der Heiligen. Du hast den heiligen Paul Miki und seine Gefährten durch das Martyrium am Kreuz zur ewigen Herrlichkeit geführt. Hilf uns auf die Fürbitte dieser Heiligen, Christus, dem Gekreuzigten, nachzufolgen und ihn bis zum Tode gläubig zu bekennen, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "patr_werk": "Aus der Geschichte des Martyriums des heiligen Paul Miki und seiner Gefährten, von einem Zeitgenossen.",
          "patr_text": "^hIhr sollt meine Zeugen sein^pIn dem Bewusstsein, in hohen Ehren vor den Augen all derer zu stehen, die ihm einst angehört hatten, erklärte unser Bruder Paulus Miki den Umstehenden, er sei Japaner und gehöre zur Gesellschaft Jesu, er müsse sterben wegen der Verkündigung des Evangeliums und danke Gott für diese außerordentliche Wohltat.^pDann fügte er hinzu: „Da es nun mit mir dahin gekommen ist, denke ich, niemand von euch wird von mir glauben, dass ich die Wahrheit verhehle. So erkläre ich denn euch allen, dass es keinen anderen Weg zum Heil gibt als den der Christen. Dieser Weg lehrt mich, den Feinden zu verzeihen und allen, die mich beleidigt haben. Darum vergebe ich gerne dem König und allen, die an meinem Tod schuldig sind, und ich bitte sie, die christliche Taufe zu empfangen.“^pDann richtete er seine Augen auf die Gefährten und begann ihnen für den Höhepunkt dieses Kampfes Mut zuzusprechen. Auf dem Gesicht aller erschien ein Aufleuchten der Freude, besonders bei Ludwig. Als ihm ein anderer Christ zurief, er werde bald im Paradies sein, lenkte er durch eine von Freude erfüllte Bewegung der Finger und des ganzen Leibes die Augen aller Zuschauer auf sich.^pAntonius, neben Ludwig, richtete seinen Blick zum Himmel und rief die heiligen Namen Jesus und Maria und sang den Psalm: „Lobet, ihr Knechte des Herrn!“ (Ps 113), den er im katechetischen Institut von Nagasaki gelernt hatte, wo man große Mühe darauf verwendet, den Knaben einige Psalmen beizubringen.^pAndere riefen mit frohem Angesicht immer wieder: „Jesus! Maria!“ Einige ermahnten sogar die Umstehenden, ein eines Christen würdiges Leben zu führen. Durch diese und andere Handlungen zeigten sie ihre Bereitschaft zu sterben.^pDa zogen die vier Henker die Schwerter, wie sie bei den Japanern im Gebrauch sind. Bei diesem schrecklichen Anblick schrien die Gläubigen: „Jesus! Maria!“, und ein Wehklagen erhob sich, das den Himmel selbst rühren musste. Die Henker töteten sie nacheinander mit einem oder einem zweiten Stoß.",
          "patr_resp1": "Wir rühmen uns des Kreuzes unseres Herrn Jesus Christus. In ihm ist uns Heil geworden und Auferstehung und Leben.",
          "patr_resp2": "Durch ihn sind wir erlöst und befreit.",
          "patr_resp3": "Euch wurde die Gnade zuteil, nicht nur an Christus zu glauben, sondern auch seinetwegen zu leiden.",
          "oration": "Starker Gott, du bist die Kraft der Heiligen. Du hast den heiligen Paul Miki und seine Gefährten durch das Martyrium am Kreuz zur ewigen Herrlichkeit geführt. Hilf uns auf die Fürbitte dieser Heiligen, Christus, dem Gekreuzigten, nachzufolgen und ihn bis zum Tode gläubig zu bekennen, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Vesper": {
          "oration": "Starker Gott, du bist die Kraft der Heiligen. Du hast den heiligen Paul Miki und seine Gefährten durch das Martyrium am Kreuz zur ewigen Herrlichkeit geführt. Hilf uns auf die Fürbitte dieser Heiligen, Christus, dem Gekreuzigten, nachzufolgen und ihn bis zum Tode gläubig zu bekennen, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "10": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-2-10-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {
          "name": "Hl. Scholastika",
          "oration": "Erhabener Gott, wir begehen das Gedächtnis der heiligen Jungfrau Scholastika. Lass uns nach ihrem Beispiel dir stets in aufrichtiger Liebe dienen und gewähre uns in deiner Güte einst einen seligen Heimgang zu dir. Darum bitten wir durch Jesus Christus."
        },
        "Lesehore": {
          "patr_autor": "Gregor der Große († 604)",
          "patr_werk": "Aus den Dialogen über das Leben und die Wunder der italischen Väter.",
          "patr_text": "^hDie mehr Liebe hatte, vermochte auch mehr^pScholastika, die Schwester des heiligen Benedikt, war von frühester Jugend an dem allmächtigen Gott geweiht. Sie pflegte einmal im Jahr zu ihrem Bruder zu kommen. Der Mann Gottes stieg dann hinunter zu ihr, zu einem Klostergut, nicht weit von der Pforte.^pEines Tages kam sie nach ihrer Gewohnheit, und ihr ehrwürdiger Bruder stieg mit seinen Schülern zu ihr hinab. Den ganzen Tag verbrachten sie im Lob Gottes und in heiligen Gesprächen. Als die Nacht hereinbrach, aßen sie miteinander.^pAls es über ihren frommen Gesprächen spät wurde, bat ihn die heilige Ordensfrau: „Bitte, verlass mich diese Nacht nicht, lass uns bis Tagesanbruch über die Freuden des Himmels sprechen.“ Er aber erwiderte: „Schwester, was redest du da? Nein, nein, ich kann nicht außerhalb der Zelle bleiben!“^pAls die heilige Ordensfrau das Nein ihres Bruders vernahm, legte sie die Hände mit verschränkten Fingern auf den Tisch und beugte ihren Kopfüber die Hände, um zum allmächtigen Herrn zu beten. Als sie den Kopf wieder vom Tisch erhob, herrschte ein derart gewaltiges Blitzen und Donnern, und ein solcher Regen brach los, dass weder der ehrwürdige Benedikt noch die Brüder, die mit ihm dabei waren, den Fuß über die Schwelle des Ortes setzen konnten, an dem sie beisammen saßen.^pDa fing der Mann Gottes betrübt an, sich zu beklagen; „Der allmächtige Gott verzeihe dir, Schwester, was hast du getan?“ Da antwortete sie: „Ich habe dich gebeten, und du wolltest nicht auf mich hören. Da bat ich meinen Gott, und er erhörte mich. Geh hinaus, wenn du kannst, verlass mich und kehre ins Kloster zurück!“^pEr aber, der freiwillig nicht bleiben Wollte, blieb wider Willen, und so kam es, dass sie die ganze Nacht durchwachten und sich durch Gespräche über das geistliche Leben in gegenseitigem Austausch erquickten.^pKein Wunder, dass die Frau mehr vermochte als er; denn nach dem Wort des Johannes: „Gott ist die Liebe“(1 Joh 4,8), war es nur gerecht, dass sie mehr vermochte, weil sie mehr Liebe hatte.^pDrei Tage später stand der Mann Gottes in seiner Zelle. Als er zum Himmel aufblickte, sah er die Seele seiner Schwester, dem Leib entrückt, in Gestalt einer Taube in das Geheimnis des Himmels eingehen. Da freute er sich über ihre große Herrlichkeit, dankte dem allmächtigen Gott mit Lobeshymnen und schickte Brüder, ihren Leib zum Kloster zu holen und in das Grab zu legen, das er für sich selbst gerichtet hatte.^pSo kam es, dass das Grab ihre Leiber nicht trennte, wie ihr Geist immer in Gott verbunden war.",
          "patr_resp1": "In Gestalt einer Taube sah der Mann Gottes die Seele seiner Schwester in den Himmel eingehen,",
          "patr_resp2": "und er freute sich über ihre große Herrlichkeit.",
          "patr_resp3": "Er dankte dem allmächtigen Gott mit Lobeshymnen.",
          "oration": "Erhabener Gott, wir begehen das Gedächtnis der heiligen Jungfrau Scholastika. Lass uns nach ihrem Beispiel dir stets in aufrichtiger Liebe dienen und gewähre uns in deiner Güte einst einen seligen Heimgang zu dir. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "oration": "Erhabener Gott, wir begehen das Gedächtnis der heiligen Jungfrau Scholastika. Lass uns nach ihrem Beispiel dir stets in aufrichtiger Liebe dienen und gewähre uns in deiner Güte einst einen seligen Heimgang zu dir. Darum bitten wir durch Jesus Christus."
        }
      },
      "14": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-2-14-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {
          "name": "Hl. Cyrill und hl. Methodius"
        },
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "22": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-2-22-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {
          "name": "Kathedra Petri"
        },
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "23": {
        "Invitatorium": {},
        "Laudes": {
          "name": "Hl. Polykarp",
          "farbe": "r",
          "ant_ev": "Sechsundachtzig Jahre habe ich Christus gedient^lund habe von ihm kein Unrecht erfahren.^lWie könnte ich meinen König schmähen,^lder mich erlöst hat!",
          "oration": "Gott, du Herr der ganzen Schöpfung, du hast den heiligen Bischof Polykarp zum standhaften Bekenntnis des Glaubens gestärkt und in die Schar deiner Märtyrer aufgenommen. Gib auch uns deine Kraft, wenn wir am Kelch des Leidens Christi teilhaben, damit wir auferstehen zum ewigen Leben. Darum bitten wir durch Jesus Christus."
        },
        "Lesehore": {
          "patr_werk": "Aus dem Brief der Kirche von Smyrna über das Martyrium des hl. Polykarp.",
          "patr_text": "^hWie ein reiches Opfer wurde er angenommen^pAls der Scheiterhaufen hergerichtet war, legte Polykarp alle seine Kleider ab, löste den Gürtel und suchte selbst die Schuhe auszuziehen; er tat dies früher nicht, weil die Gläubigen immer darauf aus Waren, schnell seinen Leib zu berühren. Denn schon vor seinem Martyrium war er seines vorbildlichen Lebens wegen eine Zierde alles Guten (für die Gemeinde). Sogleich legte man alles, was zum Scheiterhaufen gehörte, um ihn herum. Als sie ihn aber noch annageln wollten, sagte er : „Lasst mich so; denn der mir die Kraft gibt, das Feuer auszuhalten, wird mir auch ohne die Sicherung durch eure Nägel verleihen, dass ich bei der Verbrennung ruhig stehen bleibe.“ Da nagelten sie ihn nicht an, sondern banden ihn nur fest.^pEr legte seine Hände auf den Rücken und wurde gebunden, wie der auserwählte Widder aus einer großen Herde bereitet wird für die Darbringung eines Ganzopfers, das Gott gefällt. Polykarp blickte auf zum Himmel und sprach: „Herr, Gott, Herrscher des Alls, Vater deines geliebten und gepriesenen Knechtes Jesus Christus, durch den wir Kenntnis von dir erhalten haben, Gott der Engel und Mächte, der ganzen Schöpfung und des ganzen Geschlechtes der Gerechten, die vor dir leben! Ich preise dich, dass du mich dieses Tages und dieser Stunde wert gehalten hast, dass ich unter der Schar der Märtyrer am Kelch deines Christus teilhaben darf zur Auferstehung des ewigen Lebens (Joh 5,29) von Seele und Leib in Unverweslichkeit durch den Heiligen Geist. Mit einem reichen, von dir angenommenen Opfer (vgl. Ps 20,4) möchte ich heute unter sie eingereiht werden, mit einem Opfer, wie du es mir im voraus bestimmt und verkündet hast und wie du es nun erfüllst, du wahrhaftiger Gott, der die Lüge nicht kennt. Dafür und für alles lobe ich dich. Ich preise und verherrliche dich mit dem ewigen Hohenpriester Jesus Christus im Himmel, deinem geliebten Sohn und Knecht. Durch ihn ist dir mit ihm und dem Heiligen Geist die Ehre jetzt und in Zukunft und in Ewigkeit. Amen.“^pAls er das Amen gerufen und das Gebet: beendet hatte, entzündeten die Feuerleute den Scheiterhaufen. Als die Flamm hoch emporloderte, sahen wir, denen es zu schauen vergönnt war, ein großes Wunder. Das Feuer war wie ein gewölbter Raum und umgab den Leib des Märtyrers ringsum wie das Segel eines Schiffes, das im Wind gebläht wird. Der Märtyrer stand mitten darin. Er sah nicht aus wie verbrennendes Fleisch, sondern wie Brot, das gebacken wird, oder wie Gold und Silber, das man im Feuer läutert.",
          "patr_resp1": "Ich weiß, dass du bedrängt und arm bist; aber du bist dennoch reich.",
          "patr_resp2": "Sei treu bis in den Tod; dann gebe ich dir den Kranz des Lebens.",
          "patr_resp3": "Fürchte dich nicht vor dem Leiden, das dir bevorsteht.",
          "oration": "Gott, du Herr der ganzen Schöpfung, du hast den heiligen Bischof Polykarp zum standhaften Bekenntnis des Glaubens gestärkt und in die Schar deiner Märtyrer aufgenommen. Gib auch uns deine Kraft, wenn wir am Kelch des Leidens Christi teilhaben, damit wir auferstehen zum ewigen Leben. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "ant_ev": "Ich preise dich, Herr, allmächtiger Gott.^lDu nahmst mich auf in die Schar deiner Märtyrer^lund gabst mir Anteil am Kelch deines Gesalbten.",
          "oration": "Gott, du Herr der ganzen Schöpfung, du hast den heiligen Bischof Polykarp zum standhaften Bekenntnis des Glaubens gestärkt und in die Schar deiner Märtyrer aufgenommen. Gib auch uns deine Kraft, wenn wir am Kelch des Leidens Christi teilhaben, damit wir auferstehen zum ewigen Leben. Darum bitten wir durch Jesus Christus."
        }
      },
      "24": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-2-24-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {
          "name": "Hl. Matthias",
          "farbe": "r"
        },
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      }
    },
    "3": {
      "7": {
        "Invitatorium": {},
        "Laudes": {
          "name": "Hl. Zacharias",
          "oration": "Herr, unser Gott, die Liebe zu dir hat den heiligen Frauen Perpetua und Felizitas die Kraft gegeben, ihre Verfolger nicht zu fürchten und die Qualen des Martyriums zu bestehen. Schenke auch uns jene Liebe, die alle Furcht überwindet. Darum bitten wir durch Jesus Christus."
        },
        "Lesehore": {
          "name": "Hl. Hl. Gertrud von Nivelles",
          "patr_werk": "Aus den Akten der Märtyrer von Karthago.",
          "patr_text": "^hBerufen und erwählt zur Verherrlichung des Herrn^pDer Tag des Sieges brach an, und die heiligen Märtyrer zogen vom Gefängnis zum Amphitheater, als ob es in den Himmel ginge: mit heiterem Angesicht, schön, und wenn sie erbebten, dann nicht vor Furcht, sondern vor Freude.^pZuerst wurde Perpetua hingeworfen und fiel auf die Seite. Sie erhob sich, und als Felizitas sie am Boden liegen sah, ging sie hin, reichte ihr die Hand und richtete sie auf. Da standen sie nun beide auf. Die Grausamkeit des Volkes war besiegt, und sie wurden zum Sanvivarischen Tor zurückgerufen. Dort wurde Perpetua von einem Mann namens Rusticus in Empfang genommen, der damals noch Katechumene war und zu ihr hielt. Es war, als erwache sie aus dem Schlaf. So sehr war sie im Geist und in der Ekstase gewesen. Sie begann um sich zu schauen und sagte zur Verwunderung aller: „Wann werden wir dieser Kuh – ich weiß nicht welcher – vorgeworfen?“ Als sie hörte, dass es schon geschehen war, glaubte sie es erst, als sie die Spuren ihrer Leiden an ihrem Leib und an ihrem Kleid erkannte. Dann rief sie ihren Bruder und jenen Katechumenen zu sich und sagte zu ihnen: „Steht fest im Glauben und liebt einander, ihr alle. An unseren Leiden nehmt keinen Anstoß!“ Das Volk verlangte nun, sie in der Mitte der Arena zu sehen, um die Augen zu Mordhelfern zu machen, wenn das Schwert in ihren Leib drang. Da erhoben sie sich selbst und sehleppten sich dahin, wo das Volk sie haben wollte. Vorher küssten sie einander, um das Martyrium durch das feierliche Zeichen des Friedens zu vollenden.^pDie übrigen empfingen unbewegt und schweigend den Schwertstreich; vor allem Saturus. Er, der in der Vision zuerst die Leiter hinaufgestiegen war, gab zuerst den Geist auf und erwartete Perpetua. Perpetua schrie auf, als sie zwischen die Rippen getroffen wurde, um auch Schmerz zu kosten. Sie führte aber die Rechte des unerfahrenen Gladiators, als er schwankte, selbst an ihre Kehle. Eine solche Frau hätte vielleicht anders nicht getötet werden können, wenn sie es nicht selbst gewollt hätte; denn der unreine Geist fürchtete sie.^pIhr starken und seligen Märtyrer, wahrhaft berufen und erwählt zur Herrlichkeit unseres Herrn Jesus Christus!",
          "patr_resp1": "Christus Jesus sitzt zur Rechten Gottes und tritt für uns ein.",
          "patr_resp2": "Wer kann uns scheiden von der Liebe Christi? Bedrängnis oder Not, Verfolgung oder das Schwert?",
          "patr_resp3": "All das überwinden wir durch den, der uns geliebt hat.",
          "oration": "Herr, unser Gott, die Liebe zu dir hat den heiligen Frauen Perpetua und Felizitas die Kraft gegeben, ihre Verfolger nicht zu fürchten und die Qualen des Martyriums zu bestehen. Schenke auch uns jene Liebe, die alle Furcht überwindet. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Hl. Hl. Patrick",
          "oration": "Herr, unser Gott, die Liebe zu dir hat den heiligen Frauen Perpetua und Felizitas die Kraft gegeben, ihre Verfolger nicht zu fürchten und die Qualen des Martyriums zu bestehen. Schenke auch uns jene Liebe, die alle Furcht überwindet. Darum bitten wir durch Jesus Christus."
        }
      },
      "19": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-3-19-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      }
    },
    "4": {
      "7": {
        "Invitatorium": {},
        "Laudes": {
          "name": "Hl. Marcel Callo",
          "oration": "Gott, du hast den heiligen Johannes Baptist de la Salle berufen, jungen Menschen den Weg des Heils zu zeigen. Erwecke in deiner Kirche verantwortungsbewusste Erzieher voll schöpferischen Geistes, die sich mit aller Kraft dafür einsetzen, gute Menschen und wahre Christen heranzubilden. Darum bitten wir durch Jesus Christus."
        },
        "Lesehore": {
          "name": "Hl. Konrad von Parzham",
          "patr_autor": "Johannes Baptist de la Salle († 1719)",
          "patr_werk": "Aus einer Meditation.",
          "patr_text": "^hDie Liebe Gottes drängt uns^pErwägt im Herzen, liebe Brüder, was der Apostel Paulus sagt: Gott habe in seiner Kirche Apostel, Propheten und Lehrer bestellt (vgl. 1 Kor 12,28), und seid überzeugt dass Gott auch euch in euer Amt eingesetzt hat. Das bezeugt euch derselbe Heilige, wenn er erklärt, es gebe verschiedenen Dienste und verschiedene Kräfte und derselbe Heilige Geist zeige sich in jeder dieser Gaben zum gemeinsamen Nutzen, das heißt zum Nutzen der Kirche (vgl. 1 Kor 12,5.11).^pIhr sollt also nicht an der großen Gnade zweifeln, die ihr erhalten habt: die Knaben zu lehren, ihnen die Frohe Botschaft zu verkünden und sie im Geist der Religion zu erziehen. Es ist ein großes Geschenk Gottes, dass er euch zu einer so heiligen Aufgabe berufen hat.^pDie Schüler, die eurer Sorge anvertraut sind, sollen an eurer ganzen Lehrtätigkeit sehen, dass ihr Diener Gottes seid, da ihr die Aufgabe mit ungeheuchelter Liebe und echter Sorgfalt erfüllt. Auch darum sollt ihr euch eurem Amt verpflichtet fühlen, weil ihr nicht nur Diener Gottes, sondern auch Diener Jesu Christi und der Kirche seid.^pSo sagt der heilige Paulus mahnend, alle seien als Diener Christi zu betrachten, die das Evangelium verkündigen, die den Brief schreiben, den Christus diktiert, „nicht mit Tinte, sondern mit dem Geist des lebendigen Gottes, nicht auf Tafeln aus Stein, sondern – wie auf Tafeln – in Herzen von Fleisch“ (2 Kor 3,3), die Herzen der Knaben. Deswegen dränge euch die Liebe Gottes“(vgl. 2 Kor 5,14), weil Jesus Christus „für alle gestorben ist, damit die Lebenden nicht mehr für sich leben, sondern für den, der für sie starb und auferweckt wurde“ (2 Kor 5,15). Möge daher eure Sorgfalt und euer Eifer die Schüler bewegen. Mögen sie fühlen, dass Gott sie durch euch ermahnt, weil ihr Gesandte Christi seid.^pFerner müsst ihr der Kirche zeigen, wie sehr ihr sie liebt, und ihr sollt ihr Beweise eurer Gewissenhaftigkeit geben. Denn ihr arbeitet durch die Kirche, den mystischen Leib Christi. Durch eure Arbeitsfreudigkeit zeigt, dass ihr die Menschen, die Gott euch anvertraut hat, liebt, wie Christus die Kirche geliebt hat.",
          "patr_resp1": "Sie brachten Kinder zu Jesus. Die Jünger aber wiesen die Leute ab. Als Jesus das sah, sprach er zu ihnen:",
          "patr_resp2": "Lasst die Kinder zu mir kommen; denn ihnen gehört das Gottesreich.",
          "patr_resp3": "Wer ein solches Kind in meinem Namen aufnimmt, nimmt mich auf.",
          "oration": "Gott, du hast den heiligen Johannes Baptist de la Salle berufen, jungen Menschen den Weg des Heils zu zeigen. Erwecke in deiner Kirche verantwortungsbewusste Erzieher voll schöpferischen Geistes, die sich mit aller Kraft dafür einsetzen, gute Menschen und wahre Christen heranzubilden. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Hl. Anselm",
          "oration": "Gott, du hast den heiligen Johannes Baptist de la Salle berufen, jungen Menschen den Weg des Heils zu zeigen. Erwecke in deiner Kirche verantwortungsbewusste Erzieher voll schöpferischen Geistes, die sich mit aller Kraft dafür einsetzen, gute Menschen und wahre Christen heranzubilden. Darum bitten wir durch Jesus Christus."
        }
      },
      "8": {
        "each": {
          "comm_1": "Mar",
          "name": "Hl. Adalbert",
          "oration": "eig-4-8-each-Oration"
        },
        "Invitatorium": {
          "name": "Hl. Georg"
        },
        "Laudes": {},
        "Lesehore": {
          "name": "Hl. "
        },
        "Non": {
          "name": "Hl. Peter Chanel"
        },
        "Sext": {
          "name": "Hl. Ludwig Maria Grignion de Montfort"
        },
        "Terz": {},
        "Vesper": {}
      },
      "11": {
        "Invitatorium": {},
        "Laudes": {
          "oration": "Gott und Herr, der heilige Bischof Stanislaus hat sich unerschrocken für deine Ehre eingesetzt und ist unter dem Schwert der Verfolger gefallen. Gib auch uns die Kraft, bis zu unserem Tode im Glauben standhaft zu bleiben. Darum bitten wir durch Jesus Christus."
        },
        "Lesehore": {
          "name": "Hl. Johannes von Avila",
          "patr_autor": "Cyprian von Karthago († 258)",
          "patr_werk": "Aus einem Brief.",
          "patr_text": "^hDas Kämpfen in der Schlacht des Glaubens^pWenn wir in der Schlacht stehen und für den Glauben kämpfen, schaut Gott auf uns herab. Zuschauer sind die Engel, und auch Christus blickt auf uns. Welch erhabene Herrlichkeit, welche Glückseligkeit, in der Gegenwart Gottes zu kämpfen und von Christus, dem Richter, den Siegeskranz zu empfangen! Wir wollen uns wappnen mit aller Kraft und uns zum Kampf rüsten mit lauterem Geist, zuversichtlichem Glauben und liebender Tugend. Das Heer Gottes marschiere voran zu der angekündigten Schlacht!^pDer Apostel lehrt uns die Vorbereitung und die Bewaffnung: „Gürtet euch mit Wahrheit, zieht als Panzer die Gerechtigkeit an und als Schuhe die Bereitschaft, für das Evangelium vom Frieden zu kämpfen! Vor allem greift zum Schild des Glaubens! Mit ihm könnt ihr alle feurigen Geschosse des Bösen auslöschen. Nehmt den Helm des Heils und das Schwert des Geistes, das ist das Wort Gottes (Eph 6,14–17) Diese Waffen wollen wir ergreifen, mit diesem Schutz des Geistes und des Himmels uns wappnen, damit wir am bösen Tag den Drohungen des Teufels im Kampf standhalten können.^pWir wollen den Panzer der Gerechtigkeit anlegen, damit unsere Brust gegen die Pfeile des Feindes gefestigt und gesichert ist. Beschuht und bewehrt seien unsere Füße mit der Lehre des Evangeliums. Wenn wir uns darum anschicken, die Schlange zu zertreten, wird sie uns nicht beißen und zum Straucheln bringen können. Liebe Brüder, das hafte fest in eurem Herzen! Wenn der Soldat Christi dies bedenkt und erwägt, wenn der Tag der Verfolgung über ihn kommt, dann wird er, in den Geboten und Mahnungen des Herrn erzogen, sich nicht vor dem Kampf fürchten, sondern für den Kranz bereit sein.",
          "patr_resp1": "Er stritt bis zum Tod für des Gesetz seines Gottes und fürchtete sich nicht vor den Worten der Gottlosen;",
          "patr_resp2": "denn er war auf einen festen Felsen gegründet.",
          "patr_resp3": "Er hat das Leben der Welt geringgeachtet und ist zum Reich des Himmels gelangt.",
          "oration": "Gott und Herr, der heilige Bischof Stanislaus hat sich unerschrocken für deine Ehre eingesetzt und ist unter dem Schwert der Verfolger gefallen. Gib auch uns die Kraft, bis zu unserem Tode im Glauben standhaft zu bleiben. Darum bitten wir durch Jesus Christus."
        },
        "Vesper": {
          "name": "Hl. Damian de Veuster",
          "oration": "Gott und Herr, der heilige Bischof Stanislaus hat sich unerschrocken für deine Ehre eingesetzt und ist unter dem Schwert der Verfolger gefallen. Gib auch uns die Kraft, bis zu unserem Tode im Glauben standhaft zu bleiben. Darum bitten wir durch Jesus Christus."
        }
      },
      "25": {
        "each": {
          "comm_1": "Mar",
          "name": "Hl. Nereus und Achilleus",
          "oration": "eig-4-25-each-Oration"
        },
        "Invitatorium": {
          "name": "Hl. Pankratius"
        },
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "27": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-4-27-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "29": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-4-29-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      }
    },
    "5": {
      "2": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-5-2-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "3": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-5-3-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "26": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-5-26-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      }
    },
    "6": {
      "1": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-6-1-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "3": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-6-3-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "5": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-6-5-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "11": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-6-11-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "13": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-6-13-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "21": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-6-21-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "24": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-6-24-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "28": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-6-28-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "29": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-6-29-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      }
    },
    "7": {
      "2": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-7-2-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "3": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-7-3-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "11": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-7-11-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "15": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-7-15-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "22": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-7-22-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "23": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-7-23-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "25": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-7-25-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "26": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-7-26-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "29": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-7-29-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "31": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-7-31-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      }
    },
    "8": {
      "1": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-8-1-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "4": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-8-4-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "6": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-8-6-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "8": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-8-8-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "9": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-8-9-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "10": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-8-10-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "11": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-8-11-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "14": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-8-14-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "15": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-8-15-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "17": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-8-17-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "20": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-8-20-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "21": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-8-21-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "22": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-8-22-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "24": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-8-24-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "27": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-8-27-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "28": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-8-28-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "29": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-8-29-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      }
    },
    "9": {
      "3": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-9-3-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "8": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-9-8-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "13": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-9-13-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "14": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-9-14-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "15": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-9-15-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "16": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-9-16-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "20": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-9-20-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "21": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-9-21-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "23": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-9-23-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "27": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-9-27-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "28": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-9-28-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "29": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-9-29-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "30": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-9-30-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      }
    },
    "10": {
      "1": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-10-1-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "2": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-10-2-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "4": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-10-4-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "7": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-10-7-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "15": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-10-15-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "17": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-10-17-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "18": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-10-18-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "28": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-10-28-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      }
    },
    "11": {
      "1": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-11-1-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "2": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-11-2-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "4": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-11-4-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "5": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-11-5-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "9": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-11-9-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "10": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-11-10-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "11": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-11-11-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "12": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-11-12-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "19": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-11-19-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "21": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-11-21-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "22": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-11-22-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "24": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-11-24-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "30": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-11-30-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      }
    },
    "12": {
      "3": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-12-3-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "7": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-12-7-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "9": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-12-9-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "13": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-12-13-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "14": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-12-14-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Vesper": {}
      },
      "16": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-12-16-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "17": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-12-17-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "18": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-12-18-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "19": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-12-19-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "20": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-12-20-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "21": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-12-21-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "22": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-12-22-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "23": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-12-23-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {}
      },
      "24": {
        "each": {
          "comm_1": "Mar",
          "oration": "eig-12-24-each-Oration"
        },
        "Invitatorium": {},
        "Laudes": {},
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {
          "hymn_1": 2301.0,
          "hymn_2": 0.0,
          "hymn_3": 0.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "ps_1": 113.0,
          "ps_2": 147.2,
          "ps_3": 157.0,
          "ant_0": "",
          "ant_1": "Dem König des Friedens sei Ehre und Herrlichkeit. Nach seinem Angesicht verlangt die ganze Erde.",
          "ant_2": "Er sendet sein Wort zur Erde, rasch eilt sein Befehl dahin.",
          "ant_3": "Er sendet sein Wort zur Erde, rasch eilt sein Befehl dahin.",
          "les_buch": "Gal",
          "les_stelle": "4,4–5",
          "les_text": "Text von Gal 4,4–5",
          "resp1_1": "Heute sollt ihr wissen, dass der Herr kommt.",
          "resp1_2": "Und morgen werdet ihr schauen seine Herrlichkeit.",
          "resp1_3": "Heiligt euch heute und macht euch bereit.",
          "ant_ev": "Wenn die Sonne am Himmel ihren Lauf beginnt, schaut ihr den König der Könige. Wie ein Bräutigam aus seinem Gemach, so geht er aus dem Vater hervor.",
          "bitten_e": "Lasst uns beten zu unserem Herrn Jesus Christus, der sich selbst erniedrigte und Mensch geworden ist.",
          "bitten_r": "Herr, durch deine Geburt komm uns zu Hilfe.",
          "bitten": "Mit deinem Kommen hast du die neue Weltzeit heraufgeführt,^qgib, dass deine Kirche sich immer wieder erneuert.^pDu hast die Gebrechen der Menschen auf dich genommen;^qsei den Blinden Licht, den Schwachen Kraft und den Leidenden Trost.^pIn Armut und Niedrigkeit wurdest du geboren;^qerbarme dich der Armen und mache uns bereit, ihnen zu helfen.^pDeine Geburt auf Erden brachte Freude durch die Verheißung ewigen Lebens;^qschenke den Sterbenden die Zuversicht, dass sie im Tod zum Leben geboren werden.^pDu bist auf die Erde herabgekommen, um alle Menschen zum Himmel zu führen;^qvereine die Toten mit dir in der ewigen Herrlichkeit.",
          "oration": "Gütiger Gott, Jahr für Jahr erwarten wir voll Freude das Fest unserer Erlösung. Gib, dass wir deinen Sohn von ganzem Herzen als unseren Retter und Heiland aufnehmen, damit wir ihm voll Zuversicht entgegengehen können, wenn er am Ende der Zeiten als Richter wiederkommt. Er, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "25": {
        "each": {
          "comm_1": "Mar",
          "oration": "Allmächtiger Gott, du hast den Menschen in seiner Würde wunderbar erschaffen und noch wunderbarer wiederhergestellt. Laß uns teilhaben an der Gottheit deines Sohnes, der unsere Menschennatur angenommen hat. Er, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Invitatorium": {
          "ant_0": "Christus ist uns geboren; kommt, wir beten ihn an!",
          "oration": ""
        },
        "Laudes": {
          "hymn_1": 2201.0,
          "ant_1": "Ihr Hirten, wen habt ihr gesehen? Sagt und verkündet uns: Wer ist auf Erden erschienen? – Wir sahen das Kind und hörten die Chöre der Engel; die sangen das Lob des Herrn. Halleluja.",
          "ant_2": "Der Engel sprach zu den Hirten: Ich verkünde euch große Freude; heute ist euch der Heiland geboren, der Retter der Welt. Halleluja.",
          "ant_3": "Ein Kind ist uns heute geboren. „Starker Gott“ ist sein Name. Halleluja.",
          "les_buch": "Hebr",
          "les_stelle": "1,1–2",
          "les_text": "Text von Hebr 1,1–2",
          "resp1_1": "Der Herr hat kundgemacht sein Heil.",
          "resp1_2": "Halleluja,°halleluja.",
          "resp1_3": "Vor den Augen der Völker hat er sein Walten enthüllt.",
          "ant_ev": "Ehre sei Gott in der Höhe und Friede auf Erden den Menschen seiner Gnade. Halleluja.",
          "bitten_e": "Lob und Preis und Ehre dem Worte Gottes! Es war bei Gott vor aller Zeit und wurde für uns Mensch in der Zeit. Zu ihm lasst uns rufen:",
          "bitten_r": "Es jauchze die Erde, denn du bist gekommen.",
          "bitten": "Christus, ewiges Wort, du bist Fleisch geworden und hast unter uns gewohnt;^qmach unser Herz froh über deine Geburt.^pDu, unser Heiland, in dir ist die Treue Gottes offenbar geworden,^qgib, dass wir Gott die Treue halten.^pKönig des Himmels und der Erde, durch die Engel hast du den Menschen Frieden verkündet;^qbewahre uns in deinem Frieden.^pDu Spross Davids, du wurdest in die Welt eingepflanzt als der wahre Weinstock;^qgib, dass wir in dir bleiben und du in uns.",
          "oration": "Allmächtiger Gott, dein ewiges Wort ist Fleisch geworden, um uns mit dem Glanz deines Lichtes zu erfüllen. Gib, dass in unseren Werken widerstrahlt, was durch den Glauben in unserem Herzen leuchtet. Darum bitten wir durch ihn, Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {},
        "Non": {
          "ant_0": "Meine Augen haben das Heil gesehen, das du vor allen Völkern bereitet hast.",
          "les_buch": "Apg",
          "les_stelle": "10,36",
          "les_text": "Gott hat das Wort den Israeliten gesandt, indem er den Frieden verkündete durch Jesus Christus; dieser ist der Herr aller.",
          "resp1_0": "Huld und Treue begegnen einander. Halleluja.",
          "resp1_1": "Gerechtigkeit und Friede küssen sich. Halleluja."
        },
        "Sext": {
          "ant_0": "Maria bewahrte alles, was geschehen war, und erwog es in ihrem Herzen.",
          "les_buch": "1 Joh",
          "les_stelle": "4,9",
          "les_text": "Die Liebe Gottes wurde unter uns dadurch offenbart, dass Gott seinen einzigen Sohn in die Welt gesandt hat, damit wir durch ihn leben.",
          "resp1_0": "Alle Enden der Erde. Halleluja.",
          "resp1_1": "Schauen das Heil unseres Gottes. Halleluja."
        },
        "Terz": {
          "ps_1": 19.2,
          "ps_2": 47.0,
          "ps_3": 48.0,
          "ant_0": "Josef und Maria staunten über die Worte, die man über Jesus sagte.",
          "les_buch": "Tit",
          "les_stelle": "2,11–12",
          "les_text": "Text von Tit 2,11–12",
          "resp1_0": "Der Herr gedachte seiner Huld. Halleluja.",
          "resp1_1": "Und seiner Treue zum Hause Israel. Halleluja."
        },
        "Vesper": {
          "hymn_1": 2301.0,
          "hymn_2": 0.0,
          "hymn_3": 0.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "ps_1": 110.0,
          "ps_2": 130.0,
          "ps_3": 154.0,
          "ant_0": "",
          "ant_1": "Dein ist die Herrschaft am Tag deiner Macht, wenn du erscheinst in heiligem Schmuck; ich habe dich gezeugt noch vor dem Morgenstern.",
          "ant_2": "Beim Herrn ist die Huld, bei ihm ist Erlösung in Fülle.",
          "ant_3": "Das Wort war Gott – im Anfang und vor aller Zeit; heute ist er geboren als Heiland der Welt.",
          "les_buch": "1 Joh",
          "les_stelle": "1,1–3",
          "les_text": "Text von 1 Joh 1,1–3",
          "resp1_1": "Das Wort ist Fleisch geworden und hat unter uns gewohnt.",
          "resp1_2": "Halleluja,°halleluja.",
          "resp1_3": "Aus seiner Fülle haben wir empfangen, Gnade über Gnade.",
          "ant_ev": "Heute ist Christus geboren, heute ist der Retter erschienen; heute singen die Engel auf Erden, die Erzengel jauchzen; heute jubeln die Gerechten: Ehre sei Gott in der Höhe. Halleluja.",
          "bitten_e": "Lasst uns beten zu unserem Heiland, bei dessen Geburt Engel der Welt den Frieden verkündeten:",
          "bitten_r": "Deine Geburt bringe Frieden den Menschen.",
          "bitten": "Herr, schenke der Kirche die Fülle deiner Gaben;^qmache sie froh durch die Feier deiner Geburt.^pDu bist unser Hirt und Bischof;^qmache den Papst und die Bischöfe zu treuen Dienern deiner Gnade.^pKönig vor aller Zeit und in Ewigkeit, du hast dich eingrenzen lassen in die kurze Spanne menschlichen Lebens;^qgib den sterblichen Menschen Anteil an deiner Ewigkeit.^pVon Urzeit her erwartet, bist du gekommen, als die Zeit erfüllt war;^qoffenbare deine Ankunft denen, die noch auf dich warten.^pDu hast den Menschen, der dem Tod verfallen ist, durch deine Menschwerdung erneuert;^qvollende an unseren Verstorbenen das Werk der Erlösung."
        }
      },
      "26": {
        "each": {
          "comm_1": "Mar",
          "oration": "Stephanus"
        },
        "Invitatorium": {},
        "Laudes": {
          "hymn_1": 92261.0,
          "ant_1": "Meine Seele hängt an dir, Gott, du mein Gott; denn für dich wurde mein Leib gesteinigt.",
          "ant_2": "Stephanus sah den Himmel offen, er sah und trat ein. Selig der Mensch, dem der Himmel offensteht.",
          "ant_3": "Ich sehe den Himmel offen und Jesus zur Rechten Gottes stehen.",
          "les_buch": "Apg",
          "les_stelle": "6,2b–5a",
          "les_text": "Text von Apg 6,2b–5a",
          "resp1_1": "Siehe, Gott ist mein Retter,",
          "resp1_2": "der Herr ist meine Kraft und Stärke.",
          "resp1_3": "Er ist mein Helfer. Was können Menschen mir antun?",
          "ant_ev": "Die Pforten des Himmels taten sich auf für den heiligen Stephanus: Als erster empfing er den Siegeskranz der Märtyrer."
        },
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {
          "hymn_1": 2301.0,
          "hymn_2": 0.0,
          "hymn_3": 0.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "ps_1": 110.0,
          "ps_2": 130.0,
          "ps_3": 154.0,
          "ant_0": "",
          "ant_1": "Das Wort ist Fleisch geworden und hat unter uns gewohnt.",
          "ant_2": "Beim Herrn ist die Huld, bei ihm ist Erlösung in Fülle.",
          "ant_3": "Das Wort war Gott – im Anfang und vor aller Zeit; heute ist er geboren als Heiland der Welt.",
          "les_buch": "1 Joh",
          "les_stelle": "1,5b.7",
          "les_text": "Gott ist Licht, und keine Finsternis ist in ihm. Wenn wir aber im Licht leben, wie er im Licht ist, haben wir Gemeinschaft miteinander, und das Blut seines Sohnes Jesus reinigt uns von aller Sünde.",
          "resp1_2": "Halleluja,°halleluja.",
          "resp1_3": "Aus seiner Fülle haben wir empfangen, Gnade über Gnade.",
          "ant_ev": "Tiefes Schweigen umfing das All. Die Nacht hielt inne in der Mitte ihres Laufes. Da stieg dein allmächtiges Wort hernieder vom königlichen Thron. Halleluja,°halleluja.",
          "bitten_e": "Laßt uns beten zu Jesus Christus, dem Heiland der Welt:",
          "bitten_r": "Befreie die Welt vom Bösen.",
          "bitten": "Durch das Geheimnis deiner Menschwerdung, durch deine Geburt und durch dein ganzes Leben:^pDurch deine Mühen, deine Predigt und deine Liebe zu den Sündern:^pDurch dein Leiden und deine Verlassenheit, durch deinen Tod und dein Begräbnis:^pDurch deine Auferstehung und Himmelfahrt, durch die Sendung des Heiligen Geistes und deine Herrlichkeit:^pBefreie die Welt vom Bösen und bewahre un­sere verstorbenen Brüder und Schwestern vor dem ewigen Tod.",
          "oration": "Allmächtiger Gott, die Knechtschaft der Sünde hält uns Menschen gefangen. Nimm dieses alte Joch von uns und schenke uns die neue Freiheit durch die Geburt deines Sohnes in unserem sterblichen Fleisch. Darum bitten wir durch ihn, Jesus Christus, deinen Sohn, unsern Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in Ewigkeit. "
        }
      },
      "27": {
        "each": {
          "comm_1": "Mar",
          "oration": "Johannes"
        },
        "Invitatorium": {},
        "Laudes": {
          "hymn_1": 92271.0,
          "ant_1": "Johannes wurde vom Herrn erwählt als sein Apostel und Evangelist. Weil er Gott über alles liebte, hat ihn Jesus vor allen geliebt.",
          "ant_2": "Dies ist Johannes. Ihm hat der Herr am Kreuze seine Mutter anvertraut, die Jungfrau dem Jungfräulichen.",
          "ant_3": "Der Jünger, den Jesus liebte, sagte zu Petrus: Es ist der Herr. Halleluja."
        },
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {
          "hymn_1": 2301.0,
          "hymn_2": 0.0,
          "hymn_3": 0.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "ps_1": 110.0,
          "ps_2": 130.0,
          "ps_3": 154.0,
          "ant_0": "",
          "ant_1": "Das Wort ist Fleisch geworden und hat unter uns gewohnt.",
          "ant_2": "Beim Herrn ist die Huld, bei ihm ist Erlösung in Fülle.",
          "ant_3": "Das Wort war Gott – im Anfang und vor aller Zeit; heute ist er geboren als Heiland der Welt.",
          "les_buch": "Röm",
          "les_stelle": "8,3b–4",
          "les_text": "Text von Röm 8,3b–4",
          "resp1_2": "Halleluja,°halleluja.",
          "resp1_3": "Aus seiner Fülle haben wir empfangen, Gnade über Gnade.",
          "ant_ev": "Was alle Propheten von Christus verkünden, das hat sich durch dich, Maria, erfüllt: Als Jungfrau hast du empfangen, als Jungfrau hast du geboren.",
          "bitten_e": "Laßt uns beten zu Gott, unserem Vater, der aus unendlicher Liebe seinen Sohn in die Welt ge­sandt hat:",
          "bitten_r": "Die Gnade deines Sohnes sei mit uns.",
          "bitten": "Vater unseres Herrn Jesus Christus, du hast dich der Menschen erbarmt, die in der Finsternis leben.^lNimm unsere Bitten an für das Heil aller Menschen.^pGedenke deiner Kirche auf der ganzen Erde.^lBeschütze die Christenheit und schenke ihr Frieden.^pLenke die Augen aller Völker auf deinen Sohn^lund schaffe Frieden auch bei denen, die dich nicht kennen.^pBekehre das Herz derer, die auf Gewalt ver­trauen.^lErfülle die Regierenden mit dem Geist der Versöhnung.^pDu hast deinen Sohn in die Welt gesandt, damit alle das Leben haben.^lGib unseren Verstorbenen ewiges Leben bei dir.^pVater unser.",
          "oration": "Allmächtiger Gott, dein ewiges Wort ist Fleisch geworden, um uns mit dem Glanz deines Lichtes zu erfüllen. Gib, dass in unseren Werken widerstrahlt, was durch den Glauben in unserem Herzen leuchtet. Darum bitten wir durch ihn, Jesus Christus, deinen Sohn, unsern Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in Ewigkeit. "
        }
      },
      "28": {
        "each": {
          "comm_1": "Mar",
          "oration": "Unschuldige Kinder"
        },
        "Invitatorium": {},
        "Laudes": {
          "hymn_1": 92281.0,
          "ant_1": "So spricht der Herr: Sie werden mit mir einher­gehen in weißen Gewändern, denn sie sind dessen würdig.",
          "ant_2": "Die Kinder singen das Lob des Herrn: Durch ihren Tod bezeugen sie Christus, den sie im Leben nicht verkünden konnten.",
          "ant_3": "Aus dem Mund der Kinder und Säug­linge schaffst du dir Lob, deinen Gegnern zum Trotz."
        },
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {
          "hymn_1": 2301.0,
          "hymn_2": 0.0,
          "hymn_3": 0.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "ps_1": 110.0,
          "ps_2": 130.0,
          "ps_3": 154.0,
          "ant_0": "",
          "ant_1": "Dein ist die Herrschaft am Tag deiner Macht, wenn du erscheinst in heiligem Schmuck; ich habe dich gezeugt noch vor dem Morgenstern.",
          "ant_2": "Beim Herrn ist die Huld, bei ihm ist Erlösung in Fülle.",
          "ant_3": "Das Wort war Gott – im Anfang und vor aller Zeit; heute ist er geboren als Heiland der Welt.",
          "les_buch": "Eph",
          "les_stelle": "2,3b–5",
          "les_text": "Text von Eph 2,3b–5",
          "resp1_1": "Das Wort ist Fleisch geworden und hat unter uns gewohnt.",
          "resp1_2": "Halleluja,°halleluja.",
          "resp1_3": "Aus seiner Fülle haben wir empfangen, Gnade über Gnade.",
          "ant_ev": "Die makellose Jungfrau hat uns Gott geboren und ihn an ihrer Brust genährt. Kommt, wir beten ihn an, der erschienen ist, uns zu retten.",
          "bitten_e": "Laßt uns beten zu Gott, der seinen Sohn gesandt hat, um die Welt vom Joch des Gesetzes zu befreien:",
          "bitten_r": "Die Gnade deines Sohnes sei mit uns.",
          "bitten": "Gott, beschütze deine Kirche in Verfolgung und Not^lund schenke ihr den Frieden, den die Welt nicht geben kann. ^pTröste die Trauernden.^lGib den Verzweifelten neue Zuversicht.^pWecke Hoffnung in den Herzen der Armen.^lRichte die Kranken und Alten auf.^pGedenke aller, die ihrer Freiheit beraubt sind.^lBeschütze die aus ihrer Heimat Vertriebe­nen.^pBei der Geburt deines Sohnes verkündeten Engel deine Herrlichkeit.^lNimm unsere Verstorbenen auf in den Glanz deines Lichtes.",
          "oration": "Allmächtiger Gott, du hast den Men­schen in seiner Würde wunderbar erschaffen und noch wunderbarer wiederhergestellt. Laß uns teilhaben an der Gottheit deines Sohnes, der unsere Menschennatur angenommen hat. Er, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "29": {
        "each": {
          "comm_1": "Mar",
          "oration": "Unsichtbarer Gott, dein Licht ist in die Welt gekommen und hat die Finsternis überwun­den. Sieh gnädig auf uns und laß uns die Herr­lichkeit der Geburt Christi mit würdigem Lob feiern, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Invitatorium": {},
        "Laudes": {
          "hymn_1": 2201.0,
          "ant_1": "Ihr Hirten, wen habt ihr gesehen? Sagt und verkündet uns: Wer ist auf Erden erschienen? – Wir sahen das Kind und hörten die Chöre der Engel; die sangen das Lob des Herrn. Halleluja.",
          "ant_2": "Der Engel sprach zu den Hirten: Ich verkünde euch große Freude; heute ist euch der Heiland geboren, der Retter der Welt. Halleluja.",
          "ant_3": "Ein Kind ist uns heute geboren. „Starker Gott“ ist sein Name. Halleluja.",
          "resp1_1": "Der Herr hat kundgemacht sein Heil.",
          "resp1_2": "Halleluja,°halleluja.",
          "resp1_3": "Vor den Augen der Völker hat er sein Walten enthüllt."
        },
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {
          "hymn_1": 2301.0,
          "hymn_2": 0.0,
          "hymn_3": 0.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "ps_1": 110.0,
          "ps_2": 130.0,
          "ps_3": 154.0,
          "ant_0": "",
          "ant_1": "Dein ist die Herrschaft am Tag deiner Macht, wenn du erscheinst in heiligem Schmuck; ich habe dich gezeugt noch vor dem Morgenstern.",
          "ant_2": "Beim Herrn ist die Huld, bei ihm ist Erlösung in Fülle.",
          "ant_3": "Das Wort war Gott – im Anfang und vor aller Zeit; heute ist er geboren als Heiland der Welt.",
          "les_buch": "1 Joh",
          "les_stelle": "1,1–3",
          "les_text": "Text von 1 Joh 1,1–3",
          "resp1_1": "Das Wort ist Fleisch geworden und hat unter uns gewohnt.",
          "resp1_2": "Halleluja,°halleluja.",
          "resp1_3": "Aus seiner Fülle haben wir empfangen, Gnade über Gnade.",
          "ant_ev": "Der König des Himmels wurde von einer Jungfrau geboren. Er rief den Menschen, der verloren war, in das Reich des Himmels zurück.",
          "bitten_e": "Laßt uns beten zu Gott, dem barmherzigen Vater, der seinen Sohn als Heiland der Welt gesandt hat:",
          "bitten_r": "Barmherziger Gott, erbarme dich unser.",
          "bitten": "Du willst, dass alle Menschen zur Erkenntnis deines Sohnes gelangen.^lErfülle die ganze Erde mit Freude über seine Geburt.^pDu hast ihn gesandt, den Armen das Evangelium zu verkünden.^lSchenke der Welt Freiheit und Frieden.^pDu hast die Weisen zu ihm geführt, dass sie ihn anbeten.^lGib, dass alle Völker zu ihm kommen und ihm huldigen.^pDu hast deinen Sohn erhöht über alles im Himmel und auf Erden.^lGib, dass jedes Knie vor dem Namen Jesu sich beuge.^pDu hast der Welt in Christus den Abglanz deines Lichtes geschenkt.^lLaß dein Angesicht leuchten über unseren verstorbenen Brüdern und Schwestern."
        }
      },
      "30": {
        "each": {
          "comm_1": "Mar",
          "oration": "Allmächtiger Gott, die Knechtschaft der Sünde hält uns Menschen gefangen. Nimm dieses alte Joch von uns und schenke uns die neue Freiheit durch die Geburt deines Sohnes in unserem sterblichen Fleisch. Darum bitten wir durch ihn, Jesus Christus, deinen Sohn, unsern Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in Ewigkeit. "
        },
        "Invitatorium": {},
        "Laudes": {
          "hymn_1": 2201.0,
          "ant_1": "Ihr Hirten, wen habt ihr gesehen? Sagt und verkündet uns: Wer ist auf Erden erschienen? – Wir sahen das Kind und hörten die Chöre der Engel; die sangen das Lob des Herrn. Halleluja.",
          "ant_2": "Der Engel sprach zu den Hirten: Ich verkünde euch große Freude; heute ist euch der Heiland geboren, der Retter der Welt. Halleluja.",
          "ant_3": "Ein Kind ist uns heute geboren. „Starker Gott“ ist sein Name. Halleluja.",
          "resp1_1": "Der Herr hat kundgemacht sein Heil.",
          "resp1_2": "Halleluja,°halleluja.",
          "resp1_3": "Vor den Augen der Völker hat er sein Walten enthüllt."
        },
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {
          "hymn_1": 2301.0,
          "hymn_2": 0.0,
          "hymn_3": 0.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "ps_1": 110.0,
          "ps_2": 130.0,
          "ps_3": 154.0,
          "ant_0": "",
          "ant_1": "Dein ist die Herrschaft am Tag deiner Macht, wenn du erscheinst in heiligem Schmuck; ich habe dich gezeugt noch vor dem Morgenstern.",
          "ant_2": "Beim Herrn ist die Huld, bei ihm ist Erlösung in Fülle.",
          "ant_3": "Das Wort war Gott – im Anfang und vor aller Zeit; heute ist er geboren als Heiland der Welt.",
          "les_buch": "2 Petr",
          "les_stelle": "1,3–4",
          "les_text": "Text von 2 Petr 1,3–4",
          "resp1_1": "Das Wort ist Fleisch geworden und hat unter uns gewohnt.",
          "resp1_2": "Halleluja,°halleluja.",
          "resp1_3": "Aus seiner Fülle haben wir empfangen, Gnade über Gnade.",
          "ant_ev": "Wir preisen dich, Gottesmutter Maria, denn aus dir ist Christus geboren, unser Heiland. Hilf allen, die dein Lob verkünden.",
          "bitten_e": "Laßt uns beten zu Jesus Christus, dem Heiland der Welt:",
          "bitten_r": "Erhöre uns, Christus.",
          "bitten": "Du Sehnsucht der Heiden, öffne dem Evangelium eine Tür bei allen Völkern.^lZiehe das Herz eines jeden Menschen an dich.^pHerr der ganzen Welt, mache weit den Raum deiner Kirche.^lLaß sie eine Heimstatt sein für alle Menschen.^pHerr der Herrscher, lenke Herz und Sinn der Mächtigen.^lGib, dass sie die Gerechtigkeit suchen und Frieden schaffen.^pDu Kraft der Schwachen, stärke die Angefochte­nen und richte die Gefallenen auf.^lSchütze alle, die von Gefahren umgeben sind.^pDu Trost in der Traurigkeit, stehe den Sterben­den bei in ihrem Todeskampf.^lFühre die Verstorbenen in deinen Frieden."
        }
      },
      "31": {
        "each": {
          "comm_1": "Mar",
          "oration": "Allmächtiger, ewiger Gott, in der Menschwerdung deines Sohnes hat alles menschliche Streben nach dir seinen Ursprung und kommt darin zur Vollendung. Laß uns zu Christus gehören, in dem das Heil aller Menschen begründet ist, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit. "
        },
        "Invitatorium": {},
        "Laudes": {
          "hymn_1": 2201.0,
          "ant_1": "Ihr Hirten, wen habt ihr gesehen? Sagt und verkündet uns: Wer ist auf Erden erschienen? – Wir sahen das Kind und hörten die Chöre der Engel; die sangen das Lob des Herrn. Halleluja.",
          "ant_2": "Der Engel sprach zu den Hirten: Ich verkünde euch große Freude; heute ist euch der Heiland geboren, der Retter der Welt. Halleluja.",
          "ant_3": "Ein Kind ist uns heute geboren. „Starker Gott“ ist sein Name. Halleluja.",
          "resp1_1": "Der Herr hat kundgemacht sein Heil.",
          "resp1_2": "Halleluja,°halleluja.",
          "resp1_3": "Vor den Augen der Völker hat er sein Walten enthüllt."
        },
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {
          "comm_1": "Mar",
          "hymn_1": 81014.0,
          "hymn_2": 0.0,
          "hymn_3": 0.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "ant_0": "",
          "ant_1": "O wunderbarer Tausch! Der den Men­schen erschuf, nimmt menschliches Leben an und wird aus der Jungfrau ge­boren. Von keinem Mann gezeugt, kommt er in die Welt und schenkt uns sein göttliches Leben.",
          "ant_2": "O unsagbar tiefes Geheimnis! In der Geburt aus der Jungfrau erfüllte sich die Schrift: Wie der Tau auf Gídeons Vlies kamst du herab und hast die Menschen errettet. Dich loben wir, du, unser Gott.",
          "ant_3": "O Dornbusch, den Mose schaute! Brennend verbranntest du nicht. In dir erkennen wir ein Gleichnis der seligen Jungfrau, die unversehrt gebar. Gottesmutter, bitte für uns.",
          "les_buch": "Gal",
          "les_stelle": "4,4–5",
          "les_text": "Text von Gal 4,4–5",
          "resp1_1": "Das Wort ist Fleisch geworden und hat unter uns gewohnt.",
          "resp1_2": "Halleluja,°halleluja.",
          "resp1_3": "Aus seiner Fülle haben wir empfangen, Gnade über Gnade.",
          "ant_ev": "Aus Liebe zu uns sandte Gott seinen Sohn in der Gestalt des Fleisches, geboren von einer Frau und dem Gesetz unterstellt, allen Menschen zur Rettung. Halleluja.",
          "bitten_e": "Laßt uns beten zu unserem Herrn Jesus Christus, der sein Volk zusammenführt aus allen Sprachen und Nationen:",
          "bitten_r": "Erhöre uns, Christus.",
          "bitten": "In deiner Geburt ist die Güte und Menschenfreundlichkeit Gottes offenbar geworden.^lGib, dass dein Volk nie aufhört, dir zu danken.^pDu hast Maria, deine Mutter, mit Gnade erfüllt.^lLaß alle Menschen teilhaben am Reichtum deiner Gnade.^pDu bist gesandt, die Frohe Botschaft zu verkün­den.^lSchenke Frieden der ganzen Welt.^pDurch die Geburt aus der Jungfrau Maria bist du der Bruder aller Menschen geworden.^lHilf ihnen, als Brüder und Schwestern miteinander zu leben.^pDu bist der Welt erschienen als die Sonne unseres Heils.^lZeige den Verstorbenen dein leuchtendes Antlitz.",
          "oration": "Barmherziger Gott, durch die Geburt deines Sohnes aus der Jungfrau Maria hast du der Menschheit das ewige Heil geschenkt. Laß uns auch im neuen Jahr immer und überall die Fürbitte der gnadenvollen Mutter erfahren, die uns den Urheber des Lebens geboren hat, Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      }
    }
  },
  "j": {
    "1": {
      "0": {
        "each": {
          "oration": "Allmächtiger, ewiger Gott, bei der Taufe im Jordan kam der Heilige Geist auf unseren Herrn Jesus Christus herab, und du hast ihn als deinen geliebten Sohn geoffenbart. Gib, dass auch wir, die aus dem Wasser und dem Heiligen Geist wiedergeboren sind, in deinem Wohlgefallen stehen und als deine Kinder aus der Fülle dieses Geistes leben. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Invitatorium": {
          "ant_0": "Christus, den geliebten Sohn, der dem Vater wohlgefällt; kommt, wir beten ihn an!"
        },
        "Komplet": {
          "marant": 521.0,
          "marant_lat": 522.0
        },
        "Laudes": {
          "hymn_1": 2204.0,
          "ant_1": "Johannes tauft den Heiland: der Soldat seinen König, der Knecht seinen Herrn. Die Wasser des Jordan erbeben, die Taube gibt Zeugnis, und die Stimme des Vaters erschallt aus dem Himmel: Dieser ist mein Sohn.",
          "ant_2": "Schöpft Wasser aus den Quellen des Heils: Im Wasser hat Christus die Schöpfung geheiligt, da seine Herrlichkeit dem Erdkreis erschien.",
          "ant_3": "Durch Geist und Feuer tilgst du die Sünde der Welt; dich rühmen wir als unsern Gott und Heiland.",
          "les_buch": "Jes",
          "les_stelle": "61,1–2a",
          "les_text": "Der Geist Gottes, des Herrn, ruht auf mir, denn der Herr hat mich gesalbt. Er hat mich gesandt, damit ich den Armen eine frohe Botschaft bringe und alle heile, deren Herz zerbrochen ist, damit ich die Entlassung der Gefangenen verkünde und die Befreiung der Gefesselten, damit ich ein Jahr der Gnade des Herrn ausrufe.",
          "resp1_1": "Christus, du Sohn des lebendigen Gottes,",
          "resp1_2": "erbarme dich unser.",
          "resp1_3": "In Herrlichkeit bist du heute erschienen.",
          "ant_ev": "Christus wird getauft, und die Welt wird geheiligt. Er schenkt uns Nachlass der Sünden; wir werden gereinigt durch Wasser und Geist.",
          "bitten_e": "Gepriesen sei Jesus Christus, der am heutigen Tag von Johannes im Jordan getauft wurde:",
          "bitten_r": "Kyrie, eleison.",
          "bitten": "Bei der Taufe im Jordan wurde deine Herrlichkeit offenbar;^qlass sie aufstrahlen in unseren Herzen.^pVon deinem Knecht hast du dich taufen lassen;^qgib uns den Mut zum Dienst an den Menschen.^pDurch die Taufe im Jordan hast du die Schöpfung geheiligt;^qhilf uns, dass wir sie nicht missbrauchen.^pDurch das Sakrament der Taufe hast du alle Schuld von uns abgewaschen und uns zu Kindern Gottes gemacht;^qerneuere in uns den Geist der Gotteskindschaft."
        },
        "Lesehore": {
          "hymn_1": 2304.0,
          "ps_1": 29.0,
          "ps_2": 66.1,
          "ps_3": 66.2,
          "ant_1": "Die Stimme des Herrn erschallt über den Wassern, die Stimme des Herrn voll Majestät.",
          "ant_2": "Alle Welt bete dich an, o Herr, und freue sich; denn als das neue Licht bist du erschienen für alle Zeiten.",
          "ant_3": "Gepriesen sei Gott: Er erhielt uns am Leben. Er hat uns in die Freiheit hinausgeführt.",
          "resp0_0": "Dies ist mein geliebter Sohn.",
          "resp0_1": "Ihn sollt ihr hören.",
          "les_buch": "Aus dem Buch Jesaja.",
          "les_stelle": "42,1–9; 49,1–9a",
          "les_text": "^hDas erste Lied vom Gottesknecht^pSeht, das ist mein Knecht, den ich stütze; das ist mein Erwählter, an ihm finde ich Gefallen. Ich habe meinen Geist auf ihn gelegt, er bringt den Völkern das Recht. Er schreit nicht und lärmt nicht und lässt seine Stimme nicht auf der Straße erschallen. Das geknickte Rohr zerbricht er nicht und den glimmenden Docht löscht er nicht aus; ja, er bringt wirklich das Recht. Er wird nicht müde und bricht nicht zusammen, bis er auf der Erde das Recht begründet hat. Auf sein Gesetz warten die Inseln.^pSo spricht Gott, der Herr, der den Himmel erschaffen und ausgespannt hat, der die Erde gemacht hat und alles, was auf ihr wächst, der den Menschen auf der Erde den Atem verleiht und allen, die auf ihr leben, den Geist: Ich, der Herr, habe dich aus Gerechtigkeit gerufen, ich fasse dich an der Hand. Ich habe dich geschaffen und dazu bestimmt, der Bund für mein Volk und das Licht für die Völker zu sein: blinde Augen zu öffnen, Gefangene aus dem Kerker zu holen und alle, die im Dunkel sitzen, aus ihrer Haft zu befreien.^pIch bin Jahwe, das ist mein Name; ich überlasse die Ehre, die mir gebührt, keinem andern, meinen Ruhm nicht den Götzen. Seht, das Frühere ist eingetroffen, Neues kündige ich an. Noch ehe es zum Vorschein kommt, mache ich es euch bekannt.^hDas zweite Lied vom Gottesknecht^pHört auf mich, ihr Inseln, merkt auf, ihr Völker in der Ferne! Der Herr hat mich schon im Mutterleib berufen; als ich noch im Schoß meiner Mutter war, hat er meinen Namen genannt. Er machte meinen Mund zu einem scharfen Schwert, er verbarg mich im Schatten seiner Hand. Er machte mich zum spitzen Pfeil und steckte mich in seinen Köcher. Er sagte zu mir: Du bist mein Knecht, Israel, an dem ich meine Herrlichkeit zeigen will. Ich aber sagte: Vergeblich habe ich mich bemüht, habe meine Kraft umsonst und nutzlos vertan. Aber mein Recht liegt beim Herrn und mein Lohn bei meinem Gott.^pJetzt aber hat der Herr gesprochen, der mich schon im Mutterleib zu seinem Knecht gemacht hat, damit ich Jakob zu ihm heimführe und Israel bei ihm versammle. So wurde ich in den Augen des Herrn geehrt und mein Gott war meine Stärke. Und er sagte: Es ist zu wenig, dass du mein Knecht bist, nur um die Stämme Jakobs wieder aufzurichten und die Verschonten Israels heimzuführen. Ich mache dich zum Licht für die Völker; damit mein Heil bis an das Ende der Erde reicht.^pSo spricht der Herr, der Befreier Israels, sein Heiliger, zu dem tief verachteten Mann, dem Abscheu der Leute, dem Knecht der Tyrannen: Könige werden es sehen und sich erheben, Fürsten werfen sich nieder, um des Herrn willen, der treu ist, um des Heiligen Israels willen, der dich erwählt hat.^pSo spricht der Herr: Zur Zeit der Gnade will ich dich erhören, am Tag der Rettung dir helfen. Ich habe dich geschaffen und dazu bestimmt, der Bund zu sein für das Volk, aufzuhelfen dem Land und das verödete Erbe neu zu verteilen, den Gefangenen zu sagen: Kommt heraus!, und denen, die in der Finsternis sind: Kommt ans Licht!",
          "resp1_1": "Heute wurde Jesus im Jordan getauft. Da öffnete sich der Himmel, und die Stimme des Vaters ertönte:",
          "resp1_2": "Das ist mein geliebter Sohn, an dem ich Gefallen habe.",
          "resp1_3": "Der Heilige Geist kam in Gestalt einer Taube auf ihn herab, und eine Stimme vom Himmel sprach:",
          "patr_autor": "Gregor von Nazianz († um 390)",
          "patr_werk": "Aus der Rede auf die heiligen Lichter.",
          "patr_text": "^hDie Taufe Christi^pAm heutigen Tag steigt Jesus aus dem Wasser herauf; er nimmt die Welt mit sich hinauf zur Höhe {1#vgl. Eph 4,8} und sieht, wie der Himmel sich spaltet und öffnet, den Adam für sich und seine Nachkommen verschlossen hatte, genauso wie das Paradies, vor das sich der Engel mit dem flammenden Schwert stellte.^lDer Heilige Geist bezeugt die Gottheit, denn er kommt zu dem, der ihm gleich ist. Eine Stimme erschallt vom Himmel; denn von dort stammt der, dem das Zeugnis gilt. In der Gestalt der Taube, die man leibhaft sieht, huldigt der Geist auch dem Leib (des Herrn), der durch die Vergöttlichung Gott ist ... Wir aber wollen heute der Taufe Christi Ehre erweisen und glanzvoll das Fest begehen, nicht in leiblichen, sondern in geistlichen Freuden. Seid ganz und gar rein und lasst euch reinwaschen. Über nichts freut sich Gott mehr als über die Bekehrung und das Heil des Menschen, dem jedes Wort und jedes Sakrament gilt, damit ihr wie „Lichter in der Welt“ {2#Phil 2,15} Kraft ausstrahlt für die übrigen Menschen. So sollt ihr als vollkommene Lichter an der Seite des großen Lichts stehen und vom Himmel her die Weihe seines Lichtglanzes empfangen. Ihr sollt reiner und heller vom Licht der Dreieinigkeit erleuchtet werden, von dem ihr – vorerst noch unvollkommen – nur einen schwachen Strahl aus der einen Gottheit empfangen habt in unserm Herrn Jesus Christus, dem in Ewigkeit Ehre und Herrschaft sei {3#Ps 114,5}.",
          "patr_resp1": "Heute hat sich der Himmel aufgetan, die Wasser des Meeres sind süß geworden, die Erde jubelt, Berge und Hügel freuen sich.",
          "patr_resp2": "Johannes hat Christus im Jordan getauft.",
          "patr_resp3": "Was ist mit dir, du Meer, dass du fliehst, mit dir, Jordan, dass du zurückweichst?"
        },
        "Non": {
          "ant_0": "Dies ist das Zeugnis des Johannes: Ich sah, dass der Geist vom Himmel herabkam wie eine Taube. Und er blieb auf ihm.",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "les_buch": "Jes",
          "les_stelle": "49,6",
          "les_text": "Der Herr sagte zu mir: Es ist zu wenig, dass du mein Knecht bist, nur um die Stämme Jakobs wieder aufzurichten und die Verschonten Israels heimzuführen. Ich mache dich zum Licht für die Völker; damit mein Heil bis an das Ende der Erde reicht.",
          "resp1_0": "Auf ihn legte ich meinen Geist.",
          "resp1_1": "Damit er den Völkern das Recht bringt."
        },
        "Sext": {
          "ant_0": "Jesus sprach zu Johannes: Weigere dich nicht, mich zu taufen. Wir müssen den Willen Gottes erfüllen.",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "les_buch": "Jes",
          "les_stelle": "42,1",
          "les_text": "Seht, das ist mein Knecht, den ich stütze; das ist mein Erwählter, an ihm finde ich Gefallen. Ich habe meinen Geist auf ihn gelegt, er bringt den Völkern das Recht.",
          "resp1_0": "Seht, das ist mein Knecht, ich halte ihn an der Hand.",
          "resp1_1": "Mein Erwählter, an ihm finde ich Gefallen."
        },
        "Terz": {
          "ant_0": "Johannes weigerte sich, Jesus zu taufen: Ich bedarf deiner Taufe, und du kommst zu mir?",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "les_buch": "Jes",
          "les_stelle": "11,1–2",
          "les_text": "Aus dem Baumstumpf Isais wächst ein Reis hervor, ein junger Trieb aus seinen Wurzeln bringt Frucht. Der Geist des Herrn lässt sich nieder auf ihm: der Geist der Weisheit und der Einsicht, der Geist des Rates und der Stärke, der Geist der Erkenntnis und der Gottesfurcht.",
          "resp1_0": "Ich bin nicht der Messias, sondern nur sein Gesandter.",
          "resp1_1": "Ich muss abnehmen, er aber muss wachsen."
        },
        "Vesper": {
          "hymn_1": 2204.0,
          "ps_1": 110.0,
          "ps_2": 112.0,
          "ps_3": 156.0,
          "ant_1": "Die Stimme des Vaters erscholl vom Himmel: Dieser ist mein Sohn, an ihm habe ich mein Gefallen.",
          "ant_2": "Das Haupt des Drachen hat der Herr im Jordan zerschmettert und alles aus seiner Gewalt befreit.",
          "ant_3": "Ein großes Geheimnis wird heute offenbar: Der alles erschaffen hat, lässt sich im Jordan taufen und reinigt uns von unserer Schuld.",
          "les_buch": "Apg",
          "les_stelle": "10,37–38",
          "les_text": "Ihr wisst, was im ganzen Land der Juden geschehen ist, angefangen in Galiläa, nach der Taufe, die Johannes verkündet hat: wie Gott Jesus von Nazaret gesalbt hat mit dem Heiligen Geist und mit Kraft, wie dieser umherzog, Gutes tat und alle heilte, die in der Gewalt des Teufels waren; denn Gott war mit ihm.",
          "resp1_1": "Durch Wasser und Blut ist Christus gekommen,",
          "resp1_2": "unser Heiland und Retter.",
          "resp1_3": "Er ist der wahre Gott und das ewige Leben.",
          "ant_ev": "Christus hat uns geliebt und durch sein Blut von unseren Sünden erlöst. Er machte uns zu Königen und Priestern für Gott, seinen Vater. Ihm sei die Herrlichkeit und die Macht in alle Ewigkeit. Amen.",
          "bitten_e": "Lasst uns beten zu unserem Erlöser Jesus Christus, der am heutigen Tag von Johannes im Jordan getauft wurde:",
          "bitten_r": "Kyrie, eleison.",
          "bitten": "Du bist der geliebte Sohn, an dem der Vater sein Wohlgefallen hat;^qschenke denen, die auf dich hören, deinen Geist.^pDu zerbrichst das geknickte Rohr nicht und löschst den glimmenden Docht nicht aus;^qerbarme dich aller, die fern sind von dir.^pDer Vater hat dich zum Licht der Heiden gemacht;^qschenke den Katechumenen die Freude des Glaubens.^pDer Vater hat dich mit dem Heiligen Geist gesalbt zum Dienst an den Menschen;^qführe alle, die an dich glauben, zum Heil.^pDu bist die Hoffnung aller, die in Finsternis und Todesschatten sitzen;^qführe unsere Verstorbenen in dein ewiges Licht."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Ich mache dich zum Licht für alle Völker; trage mein Heil bis an die Enden der Erde.",
          "ant_b": "Hier bin ich, Herr, du hast mich gerufen.",
          "ant_c": "Wie der Bräutigam sich freut über die Braut, so freut sich über dich dein Gott.",
          "oration": "Allmächtiger Gott, du gebietest über Himmel und Erde, du hast Macht über die Herzen der Menschen. Darum kommen wir voll Vertrauen zu dir; stärke alle, die sich um die Gerechtigkeit mühen, und schenke unserer Zeit deinen Frieden. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Herr, unser Gott, wir haben uns im Namen deines Sohnes versammelt und rufen zu dir: Erhöre die Bitten deines Volkes, mach uns hellhörig für unseren Auftrag in dieser Zeit und gib uns die Kraft, ihn zu erfüllen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "2": {
      "0": {
        "each": {
          "oration": "Allmächtiger Gott, du gebietest über Himmel und Erde, du hast Macht über die Herzen der Menschen. Darum kommen wir voll Vertrauen zu dir; stärke alle, die sich um die Gerechtigkeit mühen, und schenke unserer Zeit deinen Frieden. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Seht das Lamm Gottes, das hinwegnimmt die Sünde der Welt.",
          "ant_b": "Die beiden Jünger gingen mit Jesus und sahen, wo er wohnte, und sie blieben jenen Tag bei ihm.",
          "ant_c": "Zu Kana fand eine Hochzeit statt, und die Mutter Jesu war dabei. Auch Jesus und seine Jünger waren zur Hochzeit geladen."
        },
        "Vesper": {
          "ant_a": "Ich habe gesehen und bezeuge: Dieser ist Gottes Sohn.",
          "ant_b": "Wir haben den Messias gefunden, den Gesalbten des Herrn.",
          "ant_c": "Zu Kana in Galiläa tat Jesus sein erstes Zeichen und offenbarte seine Herrlichkeit."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Das Volk inmitten der Völker sieht ein helles Licht; für jene, die in Finsternis wohnen, strahlt ein Licht auf.",
          "ant_b": "Das Wort des Herrn erging an Jona. Und Jona machte sich auf den Weg, wie der Herr ihm befahl.",
          "ant_c": "Esra schlug das Buch des Gesetzes auf und pries den Herrn, den großen Gott. Und das ganze Volk rief mit erhobenen Händen: Amen, amen!",
          "oration": "Allmächtiger, ewiger Gott, lenke unser Tun nach deinem Willen und gib, dass wir im Namen deines geliebten Sohnes reich werden an guten Werken. Darum bitten wir durch ihn, Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Allmächtiger Gott, du gebietest über Himmel und Erde, du hast Macht über die Herzen der Menschen. Darum kommen wir voll Vertrauen zu dir; stärke alle, die sich um die Gerechtigkeit mühen, und schenke unserer Zeit deinen Frieden. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "3": {
      "0": {
        "each": {
          "oration": "Allmächtiger, ewiger Gott, lenke unser Tun nach deinem Willen und gib, dass wir im Namen deines geliebten Sohnes reich werden an guten Werken. Darum bitten wir durch ihn, Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Kehrt um! Denn das Himmelreich ist nahe.",
          "ant_b": "Die Zeit ist erfüllt, das Reich Gottes ist nahe. Bekehrt euch und glaubt an das Evangelium.",
          "ant_c": "Der Geist des Herrn ruht auf mir; denn der Herr hat mich gesalbt. Er hat mich gesandt, den Armen die frohe Botschaft zu verkünden."
        },
        "Vesper": {
          "ant_a": "Jesus verkündete die Botschaft vom Reich und heilte im Volk Krankheit und Leiden.",
          "ant_b": "Kommt und folgt mir nach! Ich werde euch zu Menschenfischern machen.",
          "ant_c": "Die Augen aller waren auf Jesus gerichtet. Und er sprach: Heute hat sich das Wort der Schrift erfüllt."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Sucht Gerechtigkeit und Demut! Die Armen finden Zuflucht beim Namen des Herrn.",
          "ant_b": "Einen Propheten will ich erwecken aus deinen Brüdern. Ich lege meine Worte in seinen Mund.",
          "ant_c": "Tritt vor sie hin und verkünde, was ich dir sage! Fürchte dich nicht vor ihnen, denn ich bin mit dir.",
          "oration": "Herr, unser Gott, du hast uns erschaffen, damit wir dich preisen. Gib, dass wir dich mit ungeteiltem Herzen anbeten und die Menschen lieben, wie du sie liebst. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Allmächtiger, ewiger Gott, lenke unser Tun nach deinem Willen und gib, dass wir im Namen deines geliebten Sohnes reich werden an guten Werken. Darum bitten wir durch ihn, Jesus Christus."
        }
      }
    },
    "4": {
      "0": {
        "each": {
          "oration": "Herr, unser Gott, du hast uns erschaffen, damit wir dich preisen. Gib, dass wir dich mit ungeteiltem Herzen anbeten und die Menschen lieben, wie du sie liebst. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Als Jesus die vielen Menschen sah, stieg er auf einen Berg. Dann begann er zu reden und lehrte sie.",
          "ant_b": "Jesus von Nazaret, ich weiß, wer du bist: Du bist der Heilige Gottes.",
          "ant_c": "Alle staunten über die Worte, die aus seinem Munde kamen."
        },
        "Vesper": {
          "ant_a": "Selig, die arm sind vor Gott; denn ihnen gehört das Himmelreich.",
          "ant_b": "Alle staunten über seine Lehre; denn er lehrte wie einer, der Macht hat.",
          "ant_c": "Die Leute von Nazaret trieben Jesus zur Stadt hinaus und zerrten ihn an den Abhang des Berges. Er aber schritt durch die Menge hindurch und ging weg."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Brich dem Hungrigen dein Brot, dann geht dein Licht auf in der Finsternis, und deine Nacht wird hell wie der Tag.",
          "ant_b": "Wie das Schiffchen des Webers eilen meine Tage dahin. Gedenke, Herr, mein Leben ist nur ein Hauch.",
          "ant_c": "Ich hörte die Stimme des Herrn: Wen soll ich senden? Und ich sprach: Hier bin ich, sende mich!",
          "oration": "Gott, unser Vater, wir sind dein Eigentum und setzen unsere Hoffnung allein auf deine Gnade. Bleibe uns nahe in jeder Not und Gefahr und schütze uns. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Herr, unser Gott, du hast uns erschaffen, damit wir dich preisen. Gib, dass wir dich mit ungeteiltem Herzen anbeten und die Menschen lieben, wie du sie liebst. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "5": {
      "0": {
        "each": {
          "oration": "Gott, unser Vater, wir sind dein Eigentum und setzen unsere Hoffnung allein auf deine Gnade. Bleibe uns nahe in jeder Not und Gefahr und schütze uns. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Ihr seid das Licht der Welt. Euer Licht soll vor den Menschen leuchten, damit sie eure guten Taten sehen und euren Vater im Himmel preisen.",
          "ant_b": "In der Frühe, als es noch dunkel war, stand Jesus auf und ging an einen einsamen Ort, um zu beten.",
          "ant_c": "Meister, wir haben uns die ganze Nacht abgemüht und nichts gefangen. Doch auf dein Wort hin werfe ich das Netz noch einmal aus."
        },
        "Vesper": {
          "ant_a": "Jesus sprach zu seinen Jüngern: Ihr seid das Salz der Erde, ihr seid das Licht der Welt.",
          "ant_b": "Am Abend brachte man die Kranken zu Jesus. Und er heilte viele.",
          "ant_c": "Sie zogen die Boote ans Land, ließen alles zurück und folgten Jesus nach."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Gottes Augen schauen auf das Tun der Menschen, er kennt all ihre Taten.",
          "ant_b": "Ob ihr esst oder trinkt oder was immer ihr tut: tut alles zur Verherrlichung Gottes.",
          "ant_c": "Selig der Mann, der auf den Herrn vertraut und dessen Hoffnung der Herr ist.",
          "oration": "Gott, du liebst deine Geschöpfe, und es ist deine Freude, bei den Menschen zu wohnen. Gib uns ein neues und reines Herz, das bereit ist, dich aufzunehmen. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Gott, unser Vater, wir sind dein Eigentum und setzen unsere Hoffnung allein auf deine Gnade. Bleibe uns nahe in jeder Not und Gefahr und schütze uns. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "6": {
      "0": {
        "each": {
          "oration": "Gott, du liebst deine Geschöpfe, und es ist deine Freude, bei den Menschen zu wohnen. Gib uns ein neues und reines Herz, das bereit ist, dich aufzunehmen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Versöhne dich zuerst mit deinem Bruder; dann komm und opfere deine Gabe.",
          "ant_b": "Jesus streckte die Hand aus und berührte den Kranken. Und der Aussatz wich von ihm.",
          "ant_c": "Selig, die ihr jetzt hungert, denn ihr werdet gesättigt; selig, die ihr jetzt weint, denn ihr werdet lachen."
        },
        "Vesper": {
          "ant_a": "Wenn eure Gerechtigkeit nicht noch viel größer ist als die der Schriftgelehrten und der Pharisäer, so werdet ihr nicht in das Himmelreich kommen.",
          "ant_b": "Herr, wenn du willst, kannst du mich heilen. Und Jesus sagte: Ich will es – werde rein!",
          "ant_c": "Jesus richtete die Augen auf seine Jünger und sagte: Selig, ihr Armen, denn euch gehört das Reich Gottes."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Seid heilig, denn ich, der Herr, euer Gott, bin heilig.",
          "ant_b": "So spricht der Herr: Ich tilge deine Vergehen, ich denke nicht mehr an deine Sünden.",
          "ant_c": "Der Herr belohnt den, der rechtschaffen ist und treu.",
          "oration": "Barmherziger Gott, du hast durch deinen Sohn zu uns gesprochen. Lass uns immer wieder über dein Wort nachsinnen, damit wir reden und tun, was dir gefällt. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Gott, du liebst deine Geschöpfe, und es ist deine Freude, bei den Menschen zu wohnen. Gib uns ein neues und reines Herz, das bereit ist, dich aufzunehmen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "7": {
      "0": {
        "each": {
          "oration": "Barmherziger Gott, du hast durch deinen Sohn zu uns gesprochen. Lass uns immer wieder über dein Wort nachsinnen, damit wir reden und tun, was dir gefällt. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Wer dich bittet, dem gib, und wer von dir borgen will, den weise nicht ab.",
          "ant_b": "Ihr sollt erkennen, dass der Menschensohn die Vollmacht hat, hier auf der Erde Sünden zu vergeben.",
          "ant_c": "Richtet nicht, dann werdet auch ihr nicht gerichtet. Verurteilt nicht, dann werdet auch ihr nicht verurteilt."
        },
        "Vesper": {
          "ant_a": "Betet für die, die euch verfolgen und verleumden, dann seid ihr Söhne eures Vaters, der im Himmel ist.",
          "ant_b": "Der Mann, der gelähmt war, stand auf und ging nach Hause. Da gerieten alle außer sich und priesen Gott.",
          "ant_c": "Seid barmherzig, wie euer Vater barmherzig ist."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Kann eine Frau ihr Kind vergessen, eine Mutter den Sohn ihres Schoßes? Und wenn sie ihn vergäße – ich vergesse dich nicht.",
          "ant_b": "Mein Volk, ich traue dich mir an auf ewig; ich traue dich mir an um den Brautpreis von Liebe und Erbarmen.",
          "ant_c": "Wie der Baum, so seine Frucht; wie ein Mensch gesinnt ist, so wird er beurteilt.",
          "oration": "Allmächtiger Gott, deine Vorsehung bestimmt den Lauf der Dinge und das Schicksal der Menschen. Lenke die Welt in den Bahnen deiner Ordnung, damit die Kirche in Frieden deinen Auftrag erfüllen kann. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Barmherziger Gott, du hast durch deinen Sohn zu uns gesprochen. Lass uns immer wieder über dein Wort nachsinnen, damit wir reden und tun, was dir gefällt. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "8": {
      "0": {
        "each": {
          "oration": "Allmächtiger Gott, deine Vorsehung bestimmt den Lauf der Dinge und das Schicksal der Menschen. Lenke die Welt in den Bahnen deiner Ordnung, damit die Kirche in Frieden deinen Auftrag erfüllen kann. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Ihr könnt nicht Gott dienen und zugleich dem Mammon.",
          "ant_b": "Können die Hochzeitsgäste fasten, solange der Bräutigam bei ihnen ist?",
          "ant_c": "Jeden Baum erkennt man an seinen Früchten. Ein guter Baum bringt keine schlechten Früchte, ein schlechter Baum keine guten."
        },
        "Vesper": {
          "ant_a": "Sucht zuerst das Reich Gottes und seine Gerechtigkeit; und alles andere wird euch dazugegeben.",
          "ant_b": "Niemand füllt jungen Wein in alte Schläuche. Jungen Wein füllt man in neue Schläuche.",
          "ant_c": "Ein guter Mensch bringt Gutes hervor aus dem guten Schatz seines Herzens."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Hört auf die Gebote des Herrn, eures Gottes, und er wird euch segnen.",
          "ant_b": "Halte den Sabbat heilig; denn er ist ein Ruhetag, geweiht dem Herrn, deinem Gott.",
          "ant_c": "Alle Völker werden erkennen, dass dein Name ausgerufen ist über diesem Haus.",
          "oration": "Gott, unser Vater, deine Vorsehung geht niemals fehl. Halte von uns fern, was uns schadet, und gewähre uns alles, was zum Heile dient. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Allmächtiger Gott, deine Vorsehung bestimmt den Lauf der Dinge und das Schicksal der Menschen. Lenke die Welt in den Bahnen deiner Ordnung, damit die Kirche in Frieden deinen Auftrag erfüllen kann. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "9": {
      "0": {
        "each": {
          "oration": "Gott, unser Vater, deine Vorsehung geht niemals fehl. Halte von uns fern, was uns schadet, und gewähre uns alles, was zum Heile dient. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Wer meine Worte hört und sie befolgt, der gleicht einem klugen Mann, der sein Haus auf Fels gebaut hat.",
          "ant_b": "Was ist am Sabbat erlaubt: Gutes zu tun oder Böses, ein Leben zu retten oder es zu vernichten?",
          "ant_c": "Herr, ich bin es nicht wert, dass du mein Haus betrittst. Sprich nur ein Wort – und mein Diener wird gesund."
        },
        "Vesper": {
          "ant_a": "Nicht jeder, der zu mir sagt: Herr! Herr!, wird in das Himmelreich kommen, sondern nur, wer den Willen meines Vaters erfüllt.",
          "ant_b": "Der Sabbat ist für den Menschen da, nicht der Mensch für den Sabbat. Deshalb ist der Menschensohn Herr auch über den Sabbat.",
          "ant_c": "Als Jesus hörte, was der Hauptmann sagte, staunte er und sprach: Nicht einmal in Israel habe ich einen so großen Glauben gefunden."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Barmherzigkeit will ich, nicht Opfer, nicht Brandopfer, sondern Erkenntnis Gottes.",
          "ant_b": "Gott, der Herr, sprach zur Schlange: Feindschaft stifte ich zwischen dir und der Frau, zwischen deinem Spross und ihrem Spross. Er wird dir den Kopf zertreten.",
          "ant_c": "Elija nahm den Knaben und gab ihn seiner Mutter und sprach: Siehe, dein Sohn ist wieder am Leben.",
          "oration": "Gott, unser Vater, alles Gute kommt allein von dir. Schenke uns deinen Geist, damit wir erkennen, was recht ist, und es mit deiner Hilfe auch tun. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Gott, unser Vater, deine Vorsehung geht niemals fehl. Halte von uns fern, was uns schadet, und gewähre uns alles, was zum Heile dient. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "10": {
      "0": {
        "each": {
          "oration": "Gott, unser Vater, alles Gute kommt allein von dir. Schenke uns deinen Geist, damit wir erkennen, was recht ist, und es mit deiner Hilfe auch tun. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Zöllner und Sünder kamen und aßen mit Jesus und seinen Jüngern.",
          "ant_b": "Wenn ich Dämonen austreibe mit der Kraft Gottes, wahrlich, dann ist das Reich Gottes zu euch gekommen.",
          "ant_c": "Jesus sprach: Steh auf! Da richtete sich der Tote auf und begann zu sprechen, und Jesus gab ihn seiner Mutter."
        },
        "Vesper": {
          "ant_a": "Barmherzigkeit will ich, nicht Opfer; ich bin gekommen, die Sünder zu rufen, nicht die Gerechten.",
          "ant_b": "Wer den Willen Gottes tut, der ist für mich Bruder und Schwester und Mutter.",
          "ant_c": "Ein großer Prophet ist unter uns erstanden; Gott hat sich seines Volkes erbarmt."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Mein ist die ganze Erde, ihr aber sollt mir gehören als ein heiliges Volk.",
          "ant_b": "Ich pflanze ein Reis auf einem hohen, ragenden Berg. Dort treibt es Zweige, trägt Früchte und wird zur prächtigen Zeder.",
          "ant_c": "Natan sprach zu David: Der Herr hat dir deine Sünde vergeben; du wirst nicht sterben.",
          "oration": "Gott, du unsere Hoffnung und unsere Kraft, ohne dich vermögen wir nichts. Steh uns mit deiner Gnade bei, damit wir denken, reden und tun, was dir gefällt. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Gott, unser Vater, alles Gute kommt allein von dir. Schenke uns deinen Geist, damit wir erkennen, was recht ist, und es mit deiner Hilfe auch tun. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "11": {
      "0": {
        "each": {
          "oration": "Gott, du unsere Hoffnung und unsere Kraft, ohne dich vermögen wir nichts. Steh uns mit deiner Gnade bei, damit wir denken, reden und tun, was dir gefällt. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Die Ernte ist groß, doch der Arbeiter sind wenige. Bittet also den Herrn, dass er Arbeiter sende in seine Ernte.",
          "ant_b": "Von selbst bringt die Erde ihre Frucht: zuerst den Halm, dann die Ähre, dann das volle Korn in der Ähre.",
          "ant_c": "Dieser Frau sind ihre vielen Sünden vergeben, weil sie mir so viel Liebe gezeigt hat."
        },
        "Vesper": {
          "ant_a": "Geht und verkündet: Das Himmelreich ist nahe. Umsonst habt ihr empfangen, umsonst sollt ihr geben.",
          "ant_b": "Das Reich Gottes gleicht einem Senfkorn. Es ist das kleinste von allen Körnern, die man in die Erde sät. Ist es aber gesät, dann geht es auf und wird größer als alle Gewächse.",
          "ant_c": "Jesus sagte zu der Frau: Dein Glaube hat dich gerettet. Geh hin in Frieden!"
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Rühmt den Namen des Herrn; er rettet das Leben der Armen.",
          "ant_b": "Wer verschloss das Meer mit Toren, wer bändigte den Stolz seiner Wogen? Wer anders als der Herr.",
          "ant_c": "Sie schauen auf zu dem, den sie durchbohrten; sie halten Klage wie um den einzigen Sohn.",
          "oration": "Heiliger Gott, gib, dass wir deinen Namen allezeit fürchten und lieben. Denn du entziehst keinem deine väterliche Hand, der fest in deiner Liebe verwurzelt ist. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Gott, du unsere Hoffnung und unsere Kraft, ohne dich vermögen wir nichts. Steh uns mit deiner Gnade bei, damit wir denken, reden und tun, was dir gefällt. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "12": {
      "0": {
        "each": {
          "oration": "Heiliger Gott, gib, dass wir deinen Namen allezeit fürchten und lieben. Denn du entziehst keinem deine väterliche Hand, der fest in deiner Liebe verwurzelt ist. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Was ich euch im Dunkeln sage, das verkündet am hellen Tag.",
          "ant_b": "Jesus stand auf und drohte dem Wind und der See. Da legte sich der Wind, und es ward große Stille.",
          "ant_c": "Der Menschensohn muss vieles erleiden; Man wird ihn verwerfen und töten, doch er wird auferstehen am dritten Tag."
        },
        "Vesper": {
          "ant_a": "Wer sich zu mir bekennt vor den Menschen, zu dem will auch ich mich bekennen vor meinem Vater im Himmel.",
          "ant_b": "Große Furcht ergriff die Jünger. Sie sagten zueinander: Was ist das für ein Mensch, dem sogar Wind und Meer gehorchen?",
          "ant_c": "Wer mein Jünger sein will, der verleugne sich selbst, er nehme täglich sein Kreuz auf sich und folge mir nach."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Ihr seid tot für die Sünde, aber ihr lebt für Gott in Christus Jesus.",
          "ant_b": "Gott hat den Tod nicht gemacht, er hat keine Freude am Untergang der Lebenden.",
          "ant_c": "Elija warf seinen Mantel über Elischa. Dieser verließ sogleich seine Rinder und eilte ihm nach.",
          "oration": "Gott, unser Vater, du hast uns in der Taufe zu Kindern des Lichtes gemacht. Lass nicht zu, dass die Finsternis des Irrtums über uns Macht gewinnt, sondern hilf uns, im Licht deiner Wahrheit zu bleiben. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Heiliger Gott, gib, dass wir deinen Namen allezeit fürchten und lieben. Denn du entziehst keinem deine väterliche Hand, der fest in deiner Liebe verwurzelt ist. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "13": {
      "0": {
        "each": {
          "oration": "Gott, unser Vater, du hast uns in der Taufe zu Kindern des Lichtes gemacht. Lass nicht zu, dass die Finsternis des Irrtums über uns Macht gewinnt, sondern hilf uns, im Licht deiner Wahrheit zu bleiben. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Wer nicht sein Kreuz auf sich nimmt und mir nachfolgt, ist meiner nicht würdig.",
          "ant_b": "Meine Tochter, dein Glaube hat dir Heilung gebracht. Geh hin in Frieden!",
          "ant_c": "Der Menschensohn ist nicht gekommen, um Menschen zu vernichten, sondern um sie zu retten."
        },
        "Vesper": {
          "ant_a": "Wer euch aufnimmt, der nimmt mich auf, und wer mich aufnimmt, nimmt den auf, der mich gesandt hat.",
          "ant_b": "Jesus fasste das Kind an der Hand und sprach: Mädchen, ich sage dir, steh auf!",
          "ant_c": "Wer die Hand an den Pflug legt und zurückblickt, der taugt nicht für das Reich Gottes."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Freue dich, du neues Zion! Siehe, dein König kommt, sein Volk zu erlösen.",
          "ant_b": "Ob sie auf dich hören oder nicht, sie müssen erkennen, dass mitten unter ihnen ein Prophet war.",
          "ant_c": "Wie einen Strom leitet der Herr den Frieden nach Jerusalem.",
          "oration": "Barmherziger Gott, durch die Erniedrigung deines Sohnes hast du die gefallene Menschheit wieder aufgerichtet und aus der Knechtschaft der Sünde befreit. Erfülle uns mit Freude über die Erlösung und führe uns zur ewigen Seligkeit. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Gott, unser Vater, du hast uns in der Taufe zu Kindern des Lichtes gemacht. Lass nicht zu, dass die Finsternis des Irrtums über uns Macht gewinnt, sondern hilf uns, im Licht deiner Wahrheit zu bleiben. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "14": {
      "0": {
        "each": {
          "oration": "Barmherziger Gott, durch die Erniedrigung deines Sohnes hast du die gefallene Menschheit wieder aufgerichtet und aus der Knechtschaft der Sünde befreit. Erfülle uns mit Freude über die Erlösung und führe uns zur ewigen Seligkeit. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Lernt von mir, denn ich bin gütig und demütig von Herzen; und ihr werdet Ruhe finden.",
          "ant_b": "Jesus kam in seine Heimatstadt und lehrte in der Synagoge. Doch die ihn hörten, nahmen Anstoß an ihm und lehnten ihn ab.",
          "ant_c": "Wenn ihr in ein Haus kommt, so sagt als erstes: Friede diesem Haus! Und wenn dort ein Mann des Friedens wohnt, wird der Friede auf ihm ruhen."
        },
        "Vesper": {
          "ant_a": "Ich preise dich, Vater, Herr des Himmels und der Erde, weil du all das den Weisen und Klugen verborgen, den Kleinen aber offenbart hast.",
          "ant_b": "Die Jesus hörten, staunten und sagten: Woher hat er das alles? Ist das nicht der Zimmermann, der Sohn der Maria.",
          "ant_c": "Die Ernte ist groß, doch der Arbeiter sind wenige. Bittet also den Herrn, dass er Arbeiter sende in seine Ernte."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Mein Wort bewirkt, was ich will, und führt aus, wozu ich es sende.",
          "ant_b": "Der Herr hat mich von meiner Herde weggeholt und zu mir gesagt: Geh und rede als Prophet zu meinem Volk Israel!",
          "ant_c": "Das Wort ist ganz nahe bei dir: in deinem Mund und in deinem Herzen. Du kannst es halten.",
          "oration": "Gott, du bist unser Ziel, du zeigst den Irrenden das Licht der Wahrheit und führst sie auf den rechten Weg zurück. Gib allen, die sich Christen nennen, die Kraft, zu meiden, was diesem Namen widerspricht, und zu tun, was unserem Glauben entspricht. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Barmherziger Gott, durch die Erniedrigung deines Sohnes hast du die gefallene Menschheit wieder aufgerichtet und aus der Knechtschaft der Sünde befreit. Erfülle uns mit Freude über die Erlösung und führe uns zur ewigen Seligkeit. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "15": {
      "0": {
        "each": {
          "oration": "Gott, du bist unser Ziel, du zeigst den Irrenden das Licht der Wahrheit und führst sie auf den rechten Weg zurück. Gib allen, die sich Christen nennen, die Kraft, zu meiden, was diesem Namen widerspricht, und zu tun, was unserem Glauben entspricht. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Der Same ist das Wort Gottes, und Christus ist der Sämann: wer das Wort aufnimmt, hat das ewige Leben.",
          "ant_b": "Jesus rief die Zwölf zu sich und sandte sie aus. Er gab ihnen Macht über die unreinen Geister.",
          "ant_c": "Du sollst deinen Nächsten lieben wie dich selbst."
        },
        "Vesper": {
          "ant_a": "Auf guten Boden ist der Same bei dem gesät, der das Wort hört und es aufnimmt.",
          "ant_b": "Die Zwölf zogen aus und riefen die Menschen zur Umkehr. Sie trieben Dämonen aus, salbten die Kranken mit Öl und heilten sie.",
          "ant_c": "Ein Mann aus Samaria sah den Verwundeten und hatte Mitleid mit ihm. Er ging zu ihm hin, goss Öl und Wein auf seine Wunden und verband sie."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Weil du stark bist, o Herr, richtest du in Milde und mit großer Nachsicht.",
          "ant_b": "Ich gebe meinen Schafen Hirten, die sie weiden. Sie werden sich nicht mehr fürchten und nie mehr verlorengehen.",
          "ant_c": "Mein Herr, geh doch an deinem Knecht nicht vorbei.",
          "oration": "Herr, unser Gott, sieh gnädig auf alle, die du in deinen Dienst gerufen hast. Mach uns stark im Glauben, in der Hoffnung und in der Liebe, damit wir immer wachsam sind und auf dem Weg deiner Gebote bleiben. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Gott, du bist unser Ziel, du zeigst den Irrenden das Licht der Wahrheit und führst sie auf den rechten Weg zurück. Gib allen, die sich Christen nennen, die Kraft, zu meiden, was diesem Namen widerspricht, und zu tun, was unserem Glauben entspricht. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "16": {
      "0": {
        "each": {
          "oration": "Herr, unser Gott, sieh gnädig auf alle, die du in deinen Dienst gerufen hast. Mach uns stark im Glauben, in der Hoffnung und in der Liebe, damit wir immer wachsam sind und auf dem Weg deiner Gebote bleiben. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Mit dem Himmelreich ist es wie mit dem Sauerteig: unter das Mehl gemischt, durchsäuert er das Ganze.",
          "ant_b": "Als Jesus die vielen Menschen sah, hatte er Mitleid mit ihnen; denn sie waren wie Schafe, die keinen Hirten haben.",
          "ant_c": "Maria setzte sich dem Herrn zu Füßen und lauschte auf seine Worte."
        },
        "Vesper": {
          "ant_a": "Wenn die Zeit der Ernte da ist, will ich den Schnittern sagen: Sammelt zuerst das Unkraut, um es zu verbrennen; den Weizen aber bringt in meine Scheune.",
          "ant_b": "Kommt mit an einen einsamen Ort, wo wir allein sind, und ruht euch ein wenig aus!",
          "ant_c": "Maria hat das Bessere gewählt, das soll ihr nicht genommen werden."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Verleih deinem Knecht ein hörendes Herz, damit er das Gute vom Bösen zu unterscheiden versteht.",
          "ant_b": "Gib den Leuten das Brot zu essen; denn so spricht der Herr: Man wird essen, und es wird noch übrig sein.",
          "ant_c": "An dem Tag, als ich rief, hast du mich erhört; du gabst meiner Seele große Kraft.",
          "oration": "Gott, du Beschützer aller, die auf dich hoffen, ohne dich ist nichts gesund und nichts heilig. Führe uns in deinem Erbarmen den rechten Weg und hilf uns, die vergänglichen Güter so zu gebrauchen, dass wir die ewigen nicht verlieren. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Herr, unser Gott, sieh gnädig auf alle, die du in deinen Dienst gerufen hast. Mach uns stark im Glauben, in der Hoffnung und in der Liebe, damit wir immer wachsam sind und auf dem Weg deiner Gebote bleiben. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "17": {
      "0": {
        "each": {
          "oration": "Gott, du Beschützer aller, die auf dich hoffen, ohne dich ist nichts gesund und nichts heilig. Führe uns in deinem Erbarmen den rechten Weg und hilf uns, die vergänglichen Güter so zu gebrauchen, dass wir die ewigen nicht verlieren. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Mit dem Himmelreich ist es wie mit einem Kaufmann, der wertvolle Perlen suchte. Als er eine besonders kostbare fand, verkaufte er alles, was er besaß, und kaufte sie.",
          "ant_b": "Jesus nahm die Brote, sprach das Dankgebet und teilte sie aus an alle, die dort saßen.",
          "ant_c": "Wenn schon ihr, die ihr böse seid, euren Kindern gute Gaben zu geben wisst, um wieviel mehr wird euer himmlischer Vater den Heiligen Geist denen geben, die ihn darum bitten."
        },
        "Vesper": {
          "ant_a": "Das Himmelreich ist wie ein Schatz, der in einem Acker vergraben lag. Ein Mann entdeckte ihn. Er verkaufte alles, was er besaß, und kaufte den Acker.",
          "ant_b": "Als die Menschen das Zeichen sahen, das Jesus getan hatte, sagten sie: Das ist wahrhaftig der Prophet, der in die Welt kommen soll.",
          "ant_c": "Bittet, dann wird euch gegeben; sucht, dann werdet ihr finden; klopft an, dann wird euch geöffnet."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Hört doch auf mich, und ihr werdet euch laben an köstlicher Speise.",
          "ant_b": "Der Herr sprach zu Mose: Ich will euch Brot geben vom Himmel, und ihr werdet erkennen, dass ich der Herr, euer Gott, bin.",
          "ant_c": "Richtet euren Sinn auf das Himmlische, denn euer neues Leben ist mit Christus verborgen in Gott.",
          "oration": "Gott, unser Vater, steh deinen Dienern bei und erweise allen, die zu dir rufen, Tag für Tag deine Liebe. Du bist unser Schöpfer und der Lenker unseres Lebens. Erneuere deine Gnade in uns, damit wir dir gefallen, und erhalte, was du erneuert hast. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Gott, du Beschützer aller, die auf dich hoffen, ohne dich ist nichts gesund und nichts heilig. Führe uns in deinem Erbarmen den rechten Weg und hilf uns, die vergänglichen Güter so zu gebrauchen, dass wir die ewigen nicht verlieren. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "18": {
      "0": {
        "each": {
          "oration": "Gott, unser Vater, steh deinen Dienern bei und erweise allen, die zu dir rufen, Tag für Tag deine Liebe. Du bist unser Schöpfer und der Lenker unseres Lebens. Erneuere deine Gnade in uns, damit wir dir gefallen, und erhalte, was du erneuert hast. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Jesus rief seine Jünger zu sich und sprach: Ich habe Mitleid mit diesen Menschen, die nichts zu essen haben.",
          "ant_b": "Müht euch nicht um die Speise, die verdirbt, sondern um jene, die bleibt für das ewige Leben.",
          "ant_c": "Hütet euch vor aller Habgier: denn das Leben eines Menschen hängt nicht an Überfluss und Besitz."
        },
        "Vesper": {
          "ant_a": "Jesus brach die Brote und gab sie den Jüngern; die Jünger aber gaben sie den Leuten. Alle aßen und wurden satt.",
          "ant_b": "Ich bin das Brot des Lebens; wer zu mir kommt, wird nie mehr hungern, wer an mich glaubt, wird nie mehr dürsten.",
          "ant_c": "Wenn dein Leben von dir zurückgefordert wird, wem wird dann gehören, was du aufgehäuft hast?"
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Jesus stieg auf einen Berg, um in der Einsamkeit zu beten. Und als die Nacht hereinbrach, war er immer noch dort.",
          "ant_b": "Der Engel des Herrn rührte Elija an und sprach: Steh auf und iss! Du hast noch einen weiten Weg vor dir.",
          "ant_c": "Unseren Vätern hat Gott die Nacht der Rettung verheißen; auf sein Wort haben sie vertraut.",
          "oration": "Allmächtiger Gott, wir dürfen dich Vater nennen, denn du hast uns an Kindes Statt angenommen und uns den Geist deines Sohnes gesandt. Gib, dass wir in diesem Geist wachsen und einst das verheißene Erbe empfangen. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Gott, unser Vater, steh deinen Dienern bei und erweise allen, die zu dir rufen, Tag für Tag deine Liebe. Du bist unser Schöpfer und der Lenker unseres Lebens. Erneuere deine Gnade in uns, damit wir dir gefallen, und erhalte, was du erneuert hast. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "19": {
      "0": {
        "each": {
          "oration": "Allmächtiger Gott, wir dürfen dich Vater nennen, denn du hast uns an Kindes Statt angenommen und uns den Geist deines Sohnes gesandt. Gib, dass wir in diesem Geist wachsen und einst das verheißene Erbe empfangen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Beim Morgengrauen kam Jesus über den See und sprach zu seinen Jüngern: Habt Vertrauen: ich bin es, fürchtet euch nicht!",
          "ant_b": "Das Brot, das ich geben werde, ist mein Fleisch; ich gebe es hin für das Leben der Welt.",
          "ant_c": "So spricht der Herr: Wo euer Schatz ist, da ist auch euer Herz."
        },
        "Vesper": {
          "ant_a": "Herr, wenn du es bist, so befiehl, dass ich zu dir komme auf dem Wasser.",
          "ant_b": "Amen, amen, ich sage euch: Wer an mich glaubt, hat das ewige Leben.",
          "ant_c": "Fürchte dich nicht, du kleine Herde! Denn es hat eurem Vater gefallen, euch das Reich zu geben."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "So spricht der Herr: Mein Haus wird ein Haus des Gebets sein für alle Völker.",
          "ant_b": "Kommt, esst von meinem Mahl und trinkt vom Wein, den ich gemischt.",
          "ant_c": "Der Herr hörte mein Schreien. Er zog mich heraus aus der Grube des Grauens und legte mir ein neues Lied in den Mund.",
          "oration": "Barmherziger Gott, was kein Auge geschaut und kein Ohr gehört hat, das hast du denen bereitet, die dich lieben. Gib uns ein Herz, das dich in allem und über alles liebt, damit wir den Reichtum deiner Verheißungen erlangen, der alles übersteigt, was wir ersehnen. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Allmächtiger Gott, wir dürfen dich Vater nennen, denn du hast uns an Kindes Statt angenommen und uns den Geist deines Sohnes gesandt. Gib, dass wir in diesem Geist wachsen und einst das verheißene Erbe empfangen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "20": {
      "0": {
        "each": {
          "oration": "Barmherziger Gott, was kein Auge geschaut und kein Ohr gehört hat, das hast du denen bereitet, die dich lieben. Gib uns ein Herz, das dich in allem und über alles liebt, damit wir den Reichtum deiner Verheißungen erlangen, der alles übersteigt, was wir ersehnen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Hab Erbarmen mit mir, Herr, du Sohn Davids!",
          "ant_b": "Wer mein Fleisch isst und mein Blut trinkt, der bleibt in mir und ich in ihm.",
          "ant_c": "Mit einer Taufe muss ich getauft werden, und wie bedrängt es mich, bis es vollbracht ist."
        },
        "Vesper": {
          "ant_a": "Frau, dein Glaube ist groß! Es soll geschehen, um was du bittest.",
          "ant_b": "Ich bin das lebendige Brot, das vom Himmel gekommen ist. Wer von diesem Brot isst, wird leben in Ewigkeit.",
          "ant_c": "Ich bin gekommen, Feuer auf die Erde zu werfen. Was wünsche ich mehr, als dass es schon brenne!"
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Ich berufe meinen Knecht und lege den Schlüssel des Hauses David auf seine Schulter.",
          "ant_b": "Das sei uns fern, dass wir den Herrn verlassen und fremden Göttern dienen.",
          "ant_c": "Alle Völker will ich versammeln. Sie werden kommen und meine Herrlichkeit schauen.",
          "oration": "Gott, unser Herr, du verbindest alle, die an dich glauben, zum gemeinsamen Streben. Gib, dass wir lieben, was du befiehlst, und ersehnen, was du uns verheißen hast, damit in der Unbeständigkeit dieses Lebens unsere Herzen dort verankert seien, wo die wahren Freuden sind. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Barmherziger Gott, was kein Auge geschaut und kein Ohr gehört hat, das hast du denen bereitet, die dich lieben. Gib uns ein Herz, das dich in allem und über alles liebt, damit wir den Reichtum deiner Verheißungen erlangen, der alles übersteigt, was wir ersehnen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "21": {
      "0": {
        "each": {
          "oration": "Gott, unser Herr, du verbindest alle, die an dich glauben, zum gemeinsamen Streben. Gib, dass wir lieben, was du befiehlst, und ersehnen, was du uns verheißen hast, damit in der Unbeständigkeit dieses Lebens unsere Herzen dort verankert seien, wo die wahren Freuden sind. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Petrus bekannte und sagte: Du bist der Messias, der Sohn des lebendigen Gottes. Jesus sprach zu ihm: Selig bist du, Simon Petrus.",
          "ant_b": "Niemand kann zu mir kommen, wenn es ihm nicht vom Vater gegeben ist.",
          "ant_c": "Bemüht euch mit allen Kräften, durch die enge Tür zu gelangen."
        },
        "Vesper": {
          "ant_a": "Du bist Petrus, und auf diesen Felsen will ich meine Kirche bauen. Und die Mächte der Unterwelt werden sie nicht überwältigen.",
          "ant_b": "Zu wem sollen wir gehen? Du, Herr, hast Worte des ewigen Lebens. Wir haben geglaubt und erkannt: Du bist der Heilige Gottes.",
          "ant_c": "Von Osten und Westen werden sie kommen und mit Abraham, Isaak und Jakob zu Tische sitzen im Reiche Gottes."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Gleicht euch dieser Welt nicht an, sondern wandelt euch durch ein neues Denken.",
          "ant_b": "Achtet auf die Gebote des Herrn, eures Gottes, und haltet sie; denn sie sind eure Weisheit.",
          "ant_c": "Halte dich selbst für gering, dann wirst du Gnade finden bei Gott.",
          "oration": "Allmächtiger Gott, von dir kommt alles Gute. Pflanze in unser Herz die Liebe zu deinem Namen ein. Binde uns immer mehr an dich, damit in uns wächst, was gut und heilig ist. Wache über uns und erhalte, was du gewirkt hast. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Gott, unser Herr, du verbindest alle, die an dich glauben, zum gemeinsamen Streben. Gib, dass wir lieben, was du befiehlst, und ersehnen, was du uns verheißen hast, damit in der Unbeständigkeit dieses Lebens unsere Herzen dort verankert seien, wo die wahren Freuden sind. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "22": {
      "0": {
        "each": {
          "oration": "Allmächtiger Gott, von dir kommt alles Gute. Pflanze in unser Herz die Liebe zu deinem Namen ein. Binde uns immer mehr an dich, damit in uns wächst, was gut und heilig ist. Wache über uns und erhalte, was du gewirkt hast. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Der Menschensohn wird kommen in der Herrlichkeit seines Vaters. Dann wird er jedem geben, was er für seine Taten verdient.",
          "ant_b": "Jesus rief das Volk zu sich und sagte: Hört mir zu und begreift, was ich euch sage!",
          "ant_c": "Wenn du eingeladen bist, setz dich auf den untersten Platz; dann wird dir der Gastgeber sagen: Mein Freund, rück weiter hinauf! Das wird dir eine Ehre sein vor allen anderen Gästen."
        },
        "Vesper": {
          "ant_a": "Was nützt es dem Menschen, wenn er die ganze Welt gewinnt, dabei aber sein Leben verliert?",
          "ant_b": "Gebt Gottes Gebot nicht preis um menschlicher Überlieferung willen.",
          "ant_c": "Wer sich selbst erhöht, der wird erniedrigt, und wer sich selbst erniedrigt, der wird erhöht."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Ich gebe dich dem Haus Israel als Wächter. Warne den Schuldigen vor seinem Weg, damit er sich bekehrt.",
          "ant_b": "Der Herr wird kommen und euch retten. Dann werden die Ohren des Tauben sich öffnen, und die Zunge des Stummen wird jubeln.",
          "ant_c": "Welcher Mensch kann Gottes Plan erkennen, oder wer begreift, was der Wille des Herrn ist?",
          "oration": "Gütiger Gott, du hast uns durch deinen Sohn erlöst und als deine geliebten Kinder angenommen. Sieh voll Güte auf alle, die an Christus glauben, und schenke ihnen die wahre Freiheit und das ewige Erbe. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Allmächtiger Gott, von dir kommt alles Gute. Pflanze in unser Herz die Liebe zu deinem Namen ein. Binde uns immer mehr an dich, damit in uns wächst, was gut und heilig ist. Wache über uns und erhalte, was du gewirkt hast. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "23": {
      "0": {
        "each": {
          "oration": "Gütiger Gott, du hast uns durch deinen Sohn erlöst und als deine geliebten Kinder angenommen. Sieh voll Güte auf alle, die an Christus glauben, und schenke ihnen die wahre Freiheit und das ewige Erbe. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Was ihr auf Erden bindet, das wird auch im Himmel gebunden sein, und was ihr auf Erden löst, das wird auch im Himmel gelöst sein.",
          "ant_b": "Jesus sprach zu dem Kranken: Effata! Öffne dich! Da wurden seine Ohren aufgetan, und die Fessel seiner Zunge löste sich.",
          "ant_c": "So spricht der Herr: Wenn jemand nicht auf alles, was er hat, verzichtet, kann er mein Jünger nicht sein."
        },
        "Vesper": {
          "ant_a": "Wo zwei oder drei in meinem Namen versammelt sind, da bin ich mitten unter ihnen.",
          "ant_b": "Er hat alles gut gemacht: Dem Tauben gibt er das Gehör und dem Stummen die Sprache.",
          "ant_c": "Wer nicht sein Kreuz trägt und mir nachfolgt, der kann nicht mein Jünger sein."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Vergib deinem Nächsten das Unrecht, dann werden auch dir deine Sünden vergeben.",
          "ant_b": "Der Herr wird mir helfen; darum werde ich nicht in Schande enden.",
          "ant_c": "Warum, Herr, ist dein Zorn gegen dein Volk entbrannt? Du hast es doch mit starker Hand aus Ägypten herausgeführt.",
          "oration": "Gott, du Schöpfer und Lenker aller Dinge, sieh gnädig auf uns. Gib, dass wir dir mit ganzem Herzen dienen und die Macht deiner Liebe an uns erfahren. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Gütiger Gott, du hast uns durch deinen Sohn erlöst und als deine geliebten Kinder angenommen. Sieh voll Güte auf alle, die an Christus glauben, und schenke ihnen die wahre Freiheit und das ewige Erbe. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "24": {
      "0": {
        "each": {
          "oration": "Gott, du Schöpfer und Lenker aller Dinge, sieh gnädig auf uns. Gib, dass wir dir mit ganzem Herzen dienen und die Macht deiner Liebe an uns erfahren. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Der Herr sprach zu Petrus: Nicht siebenmal sollst du vergeben, sondern siebenundsiebzigmal.",
          "ant_b": "Wer mein Jünger sein will, der verleugne sich selbst; er nehme sein Kreuz auf sich und folge mir nach.",
          "ant_c": "Mein Sohn, du bist immer bei mir, und alles, was mein ist, ist dein. Heute aber müssen wir feiern und fröhlich sein; denn dein Bruder war tot – und er lebt, er war verloren – und wurde gefunden."
        },
        "Vesper": {
          "ant_a": "Der Herr sagte zum Knecht: Deine ganze Schuld habe ich dir erlassen. Musst nicht auch du deines Mitknechtes dich erbarmen, so wie ich mich deiner erbarmte?",
          "ant_b": "Wer sein Leben retten will, wird es verlieren; wer aber sein Leben um meinetwillen verliert, der wird es retten.",
          "ant_c": "Ich sage euch: Bei den Engeln Gottes herrscht große Freude über einen einzigen Sünder, der umkehrt."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Meine Gedanken sind nicht eure Gedanken, und eure Wege sind nicht meine Wege.",
          "ant_b": "Gott nimmt sich des Gerechten an und entreißt ihn der Hand seiner Feinde.",
          "ant_c": "Die ihr die Schwachen verfolgt und die Armen im Land unterdrückt: Keine eurer Taten wird der Herr jemals vergessen.",
          "oration": "Heiliger Gott, du hast uns das Gebot der Liebe zu dir und zu unserem Nächsten aufgetragen als die Erfüllung des ganzen Gesetzes. Gib uns die Kraft, dieses Gebot treu zu befolgen, damit wir das ewige Leben erlangen. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Gott, du Schöpfer und Lenker aller Dinge, sieh gnädig auf uns. Gib, dass wir dir mit ganzem Herzen dienen und die Macht deiner Liebe an uns erfahren. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "25": {
      "0": {
        "each": {
          "oration": "Heiliger Gott, du hast uns das Gebot der Liebe zu dir und zu unserem Nächsten aufgetragen als die Erfüllung des ganzen Gesetzes. Gib uns die Kraft, dieses Gebot treu zu befolgen, damit wir das ewige Leben erlangen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Der Herr des Weinbergs ging am frühen Morgen aus, um Arbeiter für seinen Weinberg zu werben.",
          "ant_b": "Wer mich aufnimmt, nimmt den auf, der mich gesandt hat.",
          "ant_c": "Ihr könnt nicht Gott dienen und zugleich dem Mammon."
        },
        "Vesper": {
          "ant_a": "Geht auch ihr in meinen Weinberg! Ich werde euch geben, was recht ist.",
          "ant_b": "Will einer der Erste sein, so soll er der Letzte von allen sein und der Diener aller.",
          "ant_c": "Macht euch Freunde mit dem ungerechten Mammon, damit man euch, wenn es zu Ende geht, in die ewigen Wohnungen aufnimmt."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Wenn sich der Schuldige vom Unrecht abwendet und nach Recht und Gerechtigkeit handelt, wird er sein Leben bewahren.",
          "ant_b": "Möchten doch alle im Volk des Herrn Propheten sein, möchte der Herr seinen Geist auf sie alle legen.",
          "ant_c": "Wehe denen, die sorglos leben auf dem Zion, die sich in Sicherheit wähnen auf dem Berg von Samaria.",
          "oration": "Großer Gott, du offenbarst deine Macht vor allem im Erbarmen und im Verschonen. Darum nimm uns in Gnaden auf, wenn uns auch Schuld belastet. Gib, dass wir unseren Lauf vollenden und zur Herrlichkeit des Himmels gelangen. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Heiliger Gott, du hast uns das Gebot der Liebe zu dir und zu unserem Nächsten aufgetragen als die Erfüllung des ganzen Gesetzes. Gib uns die Kraft, dieses Gebot treu zu befolgen, damit wir das ewige Leben erlangen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "26": {
      "0": {
        "each": {
          "oration": "Großer Gott, du offenbarst deine Macht vor allem im Erbarmen und im Verschonen. Darum nimm uns in Gnaden auf, wenn uns auch Schuld belastet. Gib, dass wir unseren Lauf vollenden und zur Herrlichkeit des Himmels gelangen. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Wer den Willen meines Vaters tut, kommt in das Himmelreich.",
          "ant_b": "Wer nicht gegen uns ist, der ist für uns, spricht Christus, der Herr.",
          "ant_c": "Als Lazarus starb, wurde er von den Engeln in Abrahams Schoß getragen."
        },
        "Vesper": {
          "ant_a": "Nicht jeder, der zu mir sagt: Herr! Herr!, wird in das Himmelreich kommen, sondern nur, wer den Willen meines Vaters erfüllt.",
          "ant_b": "Wer euch einen Becher Wasser zu trinken gibt um meinetwillen, wahrlich, sein Lohn ist ihm gewiss.",
          "ant_c": "Mein Sohn, denke daran, dass du im Leben schon alles Gute bekommen hast, Lazarus aber nur Schlechtes. Jetzt wird er dafür getröstet."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Der Weinberg des Herrn der Heere ist das Haus Israel.",
          "ant_b": "Gott sprach: Es ist nicht gut, dass der Mensch allein bleibt. Ich will ihm eine Hilfe machen, die ihm entspricht.",
          "ant_c": "Gott hat uns nicht einen Geist der Verzagtheit gegeben, sondern den Geist der Kraft.",
          "oration": "Allmächtiger Gott, du gibst uns in deiner Güte mehr, als wir verdienen, und Größeres, als wir erbitten. Nimm weg, was unser Gewissen belastet, und schenke uns jenen Frieden, den nur deine Barmherzigkeit geben kann. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Großer Gott, du offenbarst deine Macht vor allem im Erbarmen und im Verschonen. Darum nimm uns in Gnaden auf, wenn uns auch Schuld belastet. Gib, dass wir unseren Lauf vollenden und zur Herrlichkeit des Himmels gelangen. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "27": {
      "0": {
        "each": {
          "oration": "Allmächtiger Gott, du gibst uns in deiner Güte mehr, als wir verdienen, und Größeres, als wir erbitten. Nimm weg, was unser Gewissen belastet, und schenke uns jenen Frieden, den nur deine Barmherzigkeit geben kann. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Der Stein, den die Bauleute verwarfen, er ist zum Eckstein geworden.",
          "ant_b": "Wer das Reich Gottes nicht annimmt wie ein Kind, der kommt nicht hinein.",
          "ant_c": "Die Apostel baten den Herrn: Stärke unsern Glauben."
        },
        "Vesper": {
          "ant_a": "Den Bösen wird er ein böses Ende bereiten und den Weinberg anderen verpachten, die ihm die Früchte liefern zur rechten Zeit.",
          "ant_b": "Gott schuf den Menschen als Mann und Frau. Darum verlässt der Mann Vater und Mutter und bindet sich an seine Frau, und sie sind nicht mehr zwei, sondern eins.",
          "ant_c": "Wenn ihr alles getan habt, was euch befohlen war, sollt ihr sagen: Wir sind unnütze Knechte. Wir haben nur unsere Schuldigkeit getan."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Der Herr der Heere wird allen Völkern ein Mahl bereiten auf seinem heiligen Berg.",
          "ant_b": "Die Weisheit zog ich dem Lichte vor; denn nie erlischt der Glanz, der von ihr ausstrahlt.",
          "ant_c": "Als Naaman vom Aussatz geheilt war, trat er vor den Propheten hin und sagte: Jetzt weiß ich, dass es keinen Gott gibt außer in Israel.",
          "oration": "Herr, unser Gott, deine Gnade komme uns zuvor und begleite uns, damit wir dein Wort im Herzen bewahren und immer bereit sind, das Gute zu tun. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Allmächtiger Gott, du gibst uns in deiner Güte mehr, als wir verdienen, und Größeres, als wir erbitten. Nimm weg, was unser Gewissen belastet, und schenke uns jenen Frieden, den nur deine Barmherzigkeit geben kann. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "28": {
      "0": {
        "each": {
          "oration": "Herr, unser Gott, deine Gnade komme uns zuvor und begleite uns, damit wir dein Wort im Herzen bewahren und immer bereit sind, das Gute zu tun. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Geht hinaus auf die Straßen und ladet alle zur Hochzeit ein, so viele ihr findet.",
          "ant_b": "Verkaufe alles, was du hast, und gib das Geld den Armen; dann komm und folge mir nach!",
          "ant_c": "Jesus, Meister, hab Erbarmen mit uns!"
        },
        "Vesper": {
          "ant_a": "Sagt den Geladenen: Seht, ich habe mein Mahl bereitet. Kommt zur Hochzeit.",
          "ant_b": "Wer um meinetwillen alles verlässt, wird das Hundertfache dafür empfangen und das ewige Leben erlangen.",
          "ant_c": "Nur einer der Geheilten kehrte um, ein Mann aus Samaria. Er lobte Gott mit lauter Stimme, warf sich vor Jesus nieder und dankte ihm."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Vom Osten bis zum Westen sollen alle erkennen, dass es außer mir keinen Gott gibt. Ich bin der Herr, und sonst niemand.",
          "ant_b": "Lasst uns mit Zuversicht hintreten zum Thron der Gnade, damit wir Erbarmen finden.",
          "ant_c": "Solange Mose seine Hände erhoben hielt, war Israel stärker als der Feind.",
          "oration": "Allmächtiger Gott, du bist unser Herr und Gebieter. Mach unseren Willen bereit, deinen Weisungen zu folgen, und gib uns ein Herz, das dir aufrichtig dient. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Herr, unser Gott, deine Gnade komme uns zuvor und begleite uns, damit wir dein Wort im Herzen bewahren und immer bereit sind, das Gute zu tun. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "29": {
      "0": {
        "each": {
          "oration": "Allmächtiger Gott, du bist unser Herr und Gebieter. Mach unseren Willen bereit, deinen Weisungen zu folgen, und gib uns ein Herz, das dir aufrichtig dient. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Meister, wir wissen, dass du die Wahrheit sagst und in Wahrheit den Weg Gottes lehrst.",
          "ant_b": "Wer bei euch groß sein will, soll euer Diener sein; und wer bei euch der Erste sein will, der sei der Sklave aller.",
          "ant_c": "Wenn der Menschensohn kommt, wird er wohl Glauben finden auf Erden?"
        },
        "Vesper": {
          "ant_a": "Gebt dem Kaiser, was des Kaisers ist, und Gott, was Gottes ist.",
          "ant_b": "Der Menschensohn ist nicht gekommen, um sich bedienen zu lassen, sondern um zu dienen und um sein Leben hinzugeben als Lösegeld für viele.",
          "ant_c": "Gott wird seinen Erwählten, die Tag und Nacht zu ihm schreien, unverzüglich ihr Recht verschaffen."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Die Erfüllung des Gesetzes ist die Liebe; wer den Nächsten liebt, hat das Gesetz erfüllt.",
          "ant_b": "Der Herr sammelt sein Volk von den Enden der Erde und bringt es heim. Auch die Blinden und Lahmen kehren zurück.",
          "ant_c": "Das Flehen des Armen dringt durch die Wolken, es ruht nicht, bis es am Ziel ist.",
          "oration": "Allmächtiger, ewiger Gott, mehre in uns den Glauben, die Hoffnung und die Liebe. Gib uns die Gnade, zu lieben, was du gebietest, damit wir erlangen, was du verheißen hast. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Allmächtiger Gott, du bist unser Herr und Gebieter. Mach unseren Willen bereit, deinen Weisungen zu folgen, und gib uns ein Herz, das dir aufrichtig dient. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "30": {
      "0": {
        "each": {
          "oration": "Allmächtiger, ewiger Gott, mehre in uns den Glauben, die Hoffnung und die Liebe. Gib uns die Gnade, zu lieben, was du gebietest, damit wir erlangen, was du verheißen hast. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Du sollst deinen Nächsten lieben wie dich selbst.",
          "ant_b": "Jesus, Sohn Davids, erbarme dich meiner! – Was willst du, was soll ich für dich tun? – Rabbuni, ich möchte wieder sehen.",
          "ant_c": "Der Zöllner wagte nicht, die Augen zum Himmel zu erheben. Er schlug an seine Brust und betete: Gott, sei mir Sünder gnädig."
        },
        "Vesper": {
          "ant_a": "Du sollst den Herrn, deinen Gott, lieben von ganzem Herzen.",
          "ant_b": "Jesus sprach: Dein Glaube hat dich geheilt. Da konnte der Blinde wieder sehen und folgte ihm auf seinem Weg.",
          "ant_c": "Wer sich selbst erhöht, der wird erniedrigt, und wer sich selbst erniedrigt, der wird erhöht."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Alle haben wir denselben Vater, uns alle hat der eine Gott erschaffen. Warum handeln wir treulos einer gegen den andern?",
          "ant_b": "Höre, Israel! Der Herr, unser Gott, ist der einzige Herr. Diese Worte sollen auf dein Herz geschrieben sein.",
          "ant_c": "Du erbarmst dich aller, o Gott, und siehst über die Sünden der Menschen hinweg, damit sie sich bekehren.",
          "oration": "Allmächtiger, barmherziger Gott, es ist deine Gabe und dein Werk, wenn das gläubige Volk dir würdig und aufrichtig dient. Nimm alles von uns, was uns auf dem Weg zu dir aufhält, damit wir ungehindert der Freude entgegeneilen, die du uns verheißen hast. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Allmächtiger, ewiger Gott, mehre in uns den Glauben, die Hoffnung und die Liebe. Gib uns die Gnade, zu lieben, was du gebietest, damit wir erlangen, was du verheißen hast. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "31": {
      "0": {
        "each": {
          "oration": "Allmächtiger, barmherziger Gott, es ist deine Gabe und dein Werk, wenn das gläubige Volk dir würdig und aufrichtig dient. Nimm alles von uns, was uns auf dem Weg zu dir aufhält, damit wir ungehindert der Freude entgegeneilen, die du uns verheißen hast. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Nur einer ist euer Meister, ihr alle aber seid Brüder. Der Größte unter euch soll euer Diener sein.",
          "ant_b": "Du sollst den Herrn, deinen Gott, lieben aus ganzem Herzen und aus ganzer Seele, mit deinem ganzen Denken und deiner ganzen Kraft.",
          "ant_c": "Zachäus, steige schnell herab, in deinem Hause muss ich heute bleiben. Da stieg er schnell herab und nahm Jesus voll Freude auf. – Heute ist Gottes Heil in dieses Haus gekommen."
        },
        "Vesper": {
          "ant_a": "Wer sich selbst erhöht, der wird erniedrigt, und wer sich selbst erniedrigt, der wird erhöht.",
          "ant_b": "Seinen Nächsten lieben wie sich selbst, ist weit mehr als alle Opfer.",
          "ant_c": "Der Menschensohn ist gekommen, um zu suchen und zu retten, was verloren ist."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Wer nach der Weisheit verlangt, wird sie erkennen. Wer ihretwegen wacht und an sie denkt, dem kommt sie entgegen.",
          "ant_b": "Die Witwe tat, was der Herr ihr durch Elija sagen ließ. Und sie hatten viele Tage zu essen.",
          "ant_c": "Gott hat uns die Hoffnung gegeben, dass er uns auferweckt. Darauf warten wir.",
          "oration": "Allmächtiger und barmherziger Gott, wir sind dein Eigentum, du hast uns in deine Hand geschrieben. Halte von uns fern, was uns gefährdet, und nimm weg, was uns an Seele und Leib bedrückt, damit wir freien Herzens deinen Willen tun. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Allmächtiger, barmherziger Gott, es ist deine Gabe und dein Werk, wenn das gläubige Volk dir würdig und aufrichtig dient. Nimm alles von uns, was uns auf dem Weg zu dir aufhält, damit wir ungehindert der Freude entgegeneilen, die du uns verheißen hast. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "32": {
      "0": {
        "each": {
          "oration": "Allmächtiger und barmherziger Gott, wir sind dein Eigentum, du hast uns in deine Hand geschrieben. Halte von uns fern, was uns gefährdet, und nimm weg, was uns an Seele und Leib bedrückt, damit wir freien Herzens deinen Willen tun. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Seid wachsam! Denn ihr kennt nicht den Tag, noch wisst ihr die Stunde.",
          "ant_b": "Der Herr richtet die Gebeugten auf, den Waisen und Witwen verhilft er zum Recht.",
          "ant_c": "Die Gott für würdig hält, teilzuhaben an der Auferstehung, die können nicht mehr sterben; denn Söhne Gottes sind sie geworden."
        },
        "Vesper": {
          "ant_a": "Um Mitternacht erscholl der Ruf: Seht, der Bräutigam kommt! Auf, ihm entgegen, Christus, dem Herrn!",
          "ant_b": "Amen, ich sage euch: Die arme Witwe hat mehr als die anderen gegeben; sie opferte alles, was sie besaß.",
          "ant_c": "Gott ist kein Gott von Toten, sondern von Lebenden; für ihn sind alle lebendig."
        }
      },
      "6": {
        "Vesper": {
          "ant_a": "Selig der Knecht, den der Herr wachend findet, wenn er kommt.",
          "ant_b": "Eine Zeit der Drangsal wird kommen, wie noch keine war. Doch dein Volk wird gerettet in jener Zeit.",
          "ant_c": "Der Tag, der kommt, wird die Frevler verbrennen, doch für euch wird die Sonne der Gerechtigkeit aufgehen.",
          "oration": "Gott, du Urheber alles Guten, du bist unser Herr. Lass uns begreifen, dass wir frei werden, wenn wir uns deinem Willen unterwerfen, und dass wir die vollkommene Freude finden, wenn wir in deinem Dienst treu bleiben. Darum bitten wir durch Jesus Christus."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Allmächtiger und barmherziger Gott, wir sind dein Eigentum, du hast uns in deine Hand geschrieben. Halte von uns fern, was uns gefährdet, und nimm weg, was uns an Seele und Leib bedrückt, damit wir freien Herzens deinen Willen tun. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "33": {
      "0": {
        "each": {
          "oration": "Gott, du Urheber alles Guten, du bist unser Herr. Lass uns begreifen, dass wir frei werden, wenn wir uns deinem Willen unterwerfen, und dass wir die vollkommene Freude finden, wenn wir in deinem Dienst treu bleiben. Darum bitten wir durch Jesus Christus."
        },
        "Laudes": {
          "ant_a": "Wir gehören nicht der Finsternis: Wir sind Söhne des Lichts und Kinder des Tages. So lasst uns wachsam und nüchtern sein, dass uns der Tag des Herrn nicht überfällt.",
          "ant_b": "Himmel und Erde werden vergehen, aber meine Worte werden nicht vergehen.",
          "ant_c": "Gebt acht, dass man euch nicht irreführt! Viele werden sagen: Die Zeit ist da. – Lauft ihnen nicht nach."
        },
        "Vesper": {
          "ant_a": "Du guter und treuer Knecht, nimm teil an der Freude deines Herrn.",
          "ant_b": "Der Menschensohn wird kommen mit großer Macht und Herrlichkeit auf den Wolken des Himmels.",
          "ant_c": "Bleibt standhaft, und ihr werdet das Leben gewinnen."
        }
      },
      "6": {
        "Vesper": {
          "oration": "0"
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Gott, du Urheber alles Guten, du bist unser Herr. Lass uns begreifen, dass wir frei werden, wenn wir uns deinem Willen unterwerfen, und dass wir die vollkommene Freude finden, wenn wir in deinem Dienst treu bleiben. Darum bitten wir durch Jesus Christus."
        }
      }
    },
    "34": {
      "0": {
        "each": {},
        "Laudes": {},
        "Vesper": {}
      },
      "6": {
        "Vesper": {
          "ant_1": "Verkündet unter den Völkern: Seht, Gott kommt, unser Retter.",
          "ant_2": "Seht, der Herr wird kommen und alle seine Heiligen mit ihm. An jenem Tag leuchtet ein helles Licht. Halleluja.",
          "ant_3": "Der Herr kommt mit großer Macht. Alles Fleisch wird ihn schauen."
        }
      },
      "each": {
        "Lesehore": {
          "oration": "Gott, unser Vater, erwecke deine Gläubigen zu neuem Eifer, damit das Werk deines Erbarmens in unserem Leben reiche Frucht trägt und wir einst die Fülle des heils empfangen. Darum bitten wir durch Jesus Christus."
        }
      }
    }
  },
  "k": {
    "1": {
      "1": {
        "each": {
          "oration": "k-1-1-each-Oration"
        },
        "Laudes": {
          "les_buch": "k-1-1-Laudes-Les_Buch",
          "les_stelle": "k-1-1-Laudes–Les_Stelle",
          "les_text": "k-1-1-Laudes-Les_Text",
          "ant_ev": "k-1-1-Laudes-Ant_Ev",
          "bitten_e": "k-1-1-Laudes-Bitten_E",
          "bitten_r": "k-1-1-Laudes-Bitten_R",
          "bitten": "k-1-1-Laudes-Bitten"
        },
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {
          "resp0_1": "Gal 4,4-5",
          "les_buch": "k-1-1-Vesper-Les_Buch",
          "les_stelle": "k-1-1-Vesper–Les_Stelle",
          "les_text": "k-1-1-Vesper-Les_Text",
          "ant_ev": "k-1-1-Vesper-Ant_Ev",
          "bitten_e": "k-1-1-Vesper-Bitten_E",
          "bitten_r": "k-1-1-Vesper-Bitten_R",
          "bitten": "k-1-1-Vesper-Bitten"
        }
      },
      "2": {
        "each": {
          "oration": "k-1-2-each-Oration"
        },
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "49,8b–9",
          "les_text": "Ich habe dich geschaffen und dazu bestimmt, der Bund zu sein für das Volk, aufzuhelfen dem Land und das verödete Erbe neu zu verteilen, den Gefangenen zu sagen: Kommt heraus!, und denen, die in der Finsternis sind: Kommt ans Licht!",
          "ant_ev": "k-1-2-Laudes-Ant_Ev",
          "bitten_e": "k-1-2-Laudes-Bitten_E",
          "bitten_r": "k-1-2-Laudes-Bitten_R",
          "bitten": "k-1-2-Laudes-Bitten"
        },
        "Lesehore": {},
        "Non": {
          "les_buch": "1 Joh",
          "les_stelle": "1,5",
          "les_text": "Das ist die Botschaft, die wir von ihm gehört haben und euch verkünden: Gott ist Licht und keine Finsternis ist in ihm."
        },
        "Sext": {
          "les_buch": "Offb",
          "les_stelle": "21,23–24",
          "les_text": "Die Stadt braucht weder Sonne noch Mond, die ihr leuchten. Denn die Herrlichkeit Gottes erleuchtet sie und ihre Leuchte ist das Lamm. Die Völker werden in diesem Licht einhergehen und die Könige der Erde werden ihre Pracht in die Stadt bringen."
        },
        "Terz": {
          "les_buch": "1 Tim",
          "les_stelle": "1,15",
          "les_text": "Das Wort ist glaubwürdig und wert, dass man es beherzigt: Christus Jesus ist in die Welt gekommen, um die Sünder zu retten."
        },
        "Vesper": {
          "les_buch": "Kol",
          "les_stelle": "1,13–15",
          "les_text": "Gott hat uns der Macht der Finsternis entrissen und aufgenommen in das Reich seines geliebten Sohnes. Durch ihn haben wir die Erlösung, die Vergebung der Sünden. Er ist das Ebenbild des unsichtbaren Gottes, der Erstgeborene der ganzen Schöpfung.",
          "ant_ev": "k-1-2-Vesper-Ant_Ev",
          "bitten_e": "k-1-2-Vesper-Bitten_E",
          "bitten_r": "k-1-2-Vesper-Bitten_R",
          "bitten": "k-1-2-Vesper-Bitten"
        }
      },
      "3": {
        "each": {
          "oration": "Allmächtiger Gott, dein Sohn ist durch die Geburt aus der Jungfrau uns in allem gleich geworden, außer der Sünde. Gib, dass wir in unserem Denken und Tun den alten Menschen ablegen und als neue Menschen ein neues Leben beginnen. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "62,11b–12a",
          "les_text": "Sagt der Tochter Zion: Sieh her, jetzt kommt deine Rettung. Siehe, er bringt seinen Siegespreis mit: Alle, die er gewonnen hat, gehen vor ihm her. Dann nennt man sie «Das heilige Volk», «Die Erlösten des Herrn».",
          "ant_ev": "Das Wort ist Fleisch geworden und hat unter uns gewohnt, voll Gnade und Wahrheit. Aus seiner Fülle haben wir alle empfangen, Gnade über Gnade. Halleluja.",
          "bitten_e": "Gepriesen sei Jesus Christus, der Mensch geworden ist, um uns den Weg zum Vater zu zeigen. Zu ihm lasst uns beten:",
          "bitten_r": "Erhöre uns, Christus.",
          "bitten": "Jesus, Abglanz des Vaters, Sonne der Gerechtigkeit, Sohn der Jungfrau Maria:^qsei uns nahe an diesem Tag.^pJesus, wunderbarer Ratgeber, starker Gott, Vater der kommenden Welt;^qdeine Menschenfreundlichkeit weise uns heute den rechten Weg.^pJesus, geduldig und gehorsam, mild und demütig von Herzen;^qzeige uns den Weg des Friedens.^pJesus, Vater der Armen, guter Hirt, unendliche Weisheit:^qführe uns den Weg des Lebens."
        },
        "Lesehore": {},
        "Non": {
          "les_buch": "Jes",
          "les_stelle": "60,4b–5",
          "les_text": "Deine Söhne, Jerusalem, kommen von fern, deine Töchter trägt man auf den Armen herbei. Du wirst es sehen, und du wirst strahlen, dein Herz bebt vor Freude und öffnet sich weit. Denn der Reichtum des Meeres strömt dir zu, die Schätze der Völker kommen zu dir."
        },
        "Sext": {
          "les_buch": "Jes",
          "les_stelle": "9,1",
          "les_text": "Das Volk, das im Dunkel lebt, sieht ein helles Licht; über denen, die im Land der Finsternis wohnen, strahlt ein Licht auf."
        },
        "Terz": {
          "les_buch": "Jes",
          "les_stelle": "2,3b–4",
          "les_text": "Von Zion kommt die Weisung des Herrn, aus Jerusalem sein Wort. Er spricht Recht im Streit der Völker, er weist viele Nationen zurecht. Dann schmieden sie Pflugscharen aus ihren Schwertern und Winzermesser aus ihren Lanzen. Man zieht nicht mehr das Schwert, Volk gegen Volk, und übt nicht mehr für den Krieg."
        },
        "Vesper": {
          "les_buch": "1 Joh",
          "les_stelle": "1,5b.7",
          "les_text": "Gott ist Licht, und keine Finsternis ist in ihm. Wenn wir aber im Licht leben, wie er im Licht ist, haben wir Gemeinschaft miteinander, und das Blut seines Sohnes Jesus reinigt uns von aller Sünde.",
          "ant_ev": "k-1-3-Vesper-Ant_Ev",
          "bitten_e": "k-1-3-Vesper-Bitten_E",
          "bitten_r": "k-1-3-Vesper-Bitten_R",
          "bitten": "k-1-3-Vesper-Bitten"
        }
      },
      "4": {
        "each": {
          "oration": "Allmächtiger Gott, zu unserem Heil ist dein Sohn als Licht der Welt erschienen. Lass dieses Licht in unseren Herzen aufstrahlen, damit sich unser Leben von Tag zu Tag erneuert. Darum bitten wir durch ihn, Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "45,22–24",
          "les_text": "Wendet euch mir zu und lasst euch erretten, ihr Menschen aus den fernsten Ländern der Erde; denn ich bin Gott, und sonst niemand. Ich habe bei mir selbst geschworen, und mein Mund hat die Wahrheit gesprochen, es ist ein unwiderrufliches Wort: Vor mir wird jedes Knie sich beugen, und jede Zunge wird bei mir schwören: Nur beim Herrn – sagt man von mir – gibt es Rettung und Schutz. Beschämt kommen alle zu ihm, die sich ihm widersetzten.",
          "ant_ev": "Christus, unser Herr, in dem die Fülle der Gottheit wohnt, du hast die Schwachheit unseres Fleisches angenommen und wurdest geboren als der neue Mensch.",
          "bitten_e": "Gepriesen sei Christus, das Wort Gottes, geoffenbart im Fleisch, geschaut von den Engeln, verkündet unter den Völkern. Zu ihm lasst uns beten:",
          "bitten_r": "Sohn Gottes, wir beten dich an.",
          "bitten": "Du bist Mensch geworden aus der Jungfrau Maria;^qauf ihre Fürbitte befreie uns von der Hinfälligkeit des alten Menschen.^pDu unerschaffene Sonne der Gerechtigkeit;^qin deinem Licht lenke unseren Tag.^pDu hast uns gezeigt, wie sehr der Vater die Menschen liebt;^qgib, dass in unseren Werken die Liebe Gottes sichtbar wird.^pDu hast unter uns Wohnung genommen;^qmache uns deiner Freundschaft würdig."
        },
        "Lesehore": {},
        "Non": {
          "les_buch": "Sach",
          "les_stelle": "8,7–8",
          "les_text": "Seht, ich werde mein Volk befreien aus dem Land des Sonnenaufgangs und aus dem Land des Sonnenuntergangs. Ich werde sie heimbringen und sie werden in Jerusalem wohnen. Sie werden mein Volk sein und ich werde ihr Gott sein, unwandelbar und treu."
        },
        "Sext": {
          "les_buch": "Jer",
          "les_stelle": "31,11–12",
          "les_text": "Der Herr erlöst Jakob und befreit ihn aus der Hand des Stärkeren. Sie kommen und jubeln auf Zions Höhe, sie strahlen vor Freude über die Gaben des Herrn, über Korn, Wein und Öl, über Lämmer und Rinder. Sie werden wie ein bewässerter Garten sein und nie mehr verschmachten."
        },
        "Terz": {
          "les_buch": "Jer",
          "les_stelle": "31,7b–8a",
          "les_text": "Jubelt Jakob voll Freude zu und jauchzt über das Haupt der Völker! Verkündet, lobsingt und sagt: Der Herr hat sein Volk gerettet, den Rest Israels. Seht, ich bringe sie heim aus dem Nordland und sammle sie von den Enden der Erde."
        },
        "Vesper": {
          "les_buch": "Röm",
          "les_stelle": "8,3b–4",
          "les_text": "Gott sandte seinen Sohn in der Gestalt des Fleisches, das unter der Macht der Sünde steht, zur Sühne für die Sünde, um an diesem Fleisch die Sünde zu verurteilen; dies tat er, damit die Forderung des Gesetzes durch uns erfüllt werde, die wir nicht nach dem Fleisch, sondern nach dem Geist leben.",
          "ant_ev": "k-1-4-Vesper-Ant_Ev",
          "bitten_e": "k-1-4-Vesper-Bitten_E",
          "bitten_r": "k-1-4-Vesper-Bitten_R",
          "bitten": "k-1-4-Vesper-Bitten"
        }
      },
      "5": {
        "each": {
          "oration": "k-1-5-each-Oration"
        },
        "Laudes": {
          "les_buch": "Weish",
          "les_stelle": "7,26–27",
          "les_text": "Die Weisheit ist der Widerschein des ewigen Lichts, der ungetrübte Spiegel von Gottes Kraft, das Bild seiner Vollkommenheit. Sie ist nur eine, und vermag doch alles; ohne sich zu ändern, erneuert sie alles. Von Geschlecht zu Geschlecht tritt sie in heilige Seelen ein und schafft Freunde Gottes und Propheten.",
          "ant_ev": "k-1-5-Laudes-Ant_Ev",
          "bitten_e": "k-1-5-Laudes-Bitten_E",
          "bitten_r": "k-1-5-Laudes-Bitten_R",
          "bitten": "k-1-5-Laudes-Bitten"
        },
        "Lesehore": {},
        "Non": {
          "les_buch": "Mich",
          "les_stelle": "2,12",
          "les_text": "Ich werde ganz Jakob versammeln, den Rest von Israel will ich vereinen. Ich führe sie zusammen wie die Schafe im Pferch, wie die Herde mitten auf der Weide – eine wogende Menschenmenge."
        },
        "Sext": {
          "les_buch": "Ez",
          "les_stelle": "34, 11–12",
          "les_text": "Ich will meine Schafe selber suchen und mich selber um sie kümmern. Wie ein Hirt sich um die Tiere seiner Herde kümmert, die sich verirrt haben, so kümmere ich mich um meine Schafe und hole sie zurück von all den Orten, wohin sie sich am dunklen, düsteren Tag zerstreut haben."
        },
        "Terz": {
          "les_buch": "Ez",
          "les_stelle": "20,41–42a",
          "les_text": "Beim Aufsteigen des Dufts eurer Opfer will ich euch gnädig annehmen. Wenn ich euch aus den Völkern herausführe und aus den Ländern sammle, in die ihr zerstreut seid, werde ich mich vor den Augen der Völker an euch als heilig erweisen. Ihr sollt erkennen, dass ich der Herr bin."
        },
        "Vesper": {
          "les_buch": "1 Joh",
          "les_stelle": "5,2",
          "les_text": "Wir wissen: Der Sohn Gottes ist gekommen und er hat uns Einsicht geschenkt, damit wir den Wahren erkennen. Und wir sind in diesem Wahren, in seinem Sohn Jesus Christus. Er ist der wahre Gott und ewiges Leben.",
          "ant_ev": "Wir haben den gefunden, über den Mose und die Propheten schrieben: Jesus von Nazaret, den Sohn Josefs.",
          "bitten_e": "Lasst uns zu Jesus Christus beten, den die Jungfrau Maria empfangen und geboren hat:",
          "bitten_r": "Sohn der Jungfrau, erhöre uns.",
          "bitten": "Du, die Freude deiner Mutter Maria:^qschenke den Vätern und Müttern Freude an ihren Kindern.^pDurch deine Menschwerdung hast du das Band der Familien neu gefestigt;^qschenke unseren Familien Einigkeit und Zusammenhalt.^pDeine Herrschaft ruht auf Gerechtigkeit und Frieden;^qgib, dass die Regierenden den Frieden fördern.^pDu bist gekommen, um alle Menschen in dem einen, heiligen Volk Gottes zu sammeln;^qschenke der Welt ein Jahr des Friedens.^pDu bist Mensch geworden in der Zeit;^qlass unsere Verstorbenen leben in Ewigkeit."
        }
      },
      "7": {
        "each": {
          "oration": "Allmächtiger, ewiger Gott, du hast uns durch deinen Sohn neu geschaffen zum Lob deiner Herrlichkeit. Mache uns durch die Gnade deinem Sohn gleichförmig, in dem unsere menschliche Natur mit deinem göttlichen Wesen vereint ist, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "9,5",
          "les_text": "Ein Kind ist uns geboren, ein Sohn ist uns geschenkt. Die Herrschaft liegt auf seiner Schulter; man nennt ihn Wunderbarer Ratgeber, Starker Gott, Vater in Ewigkeit, Fürst des Friedens.",
          "ant_ev": "Die Weisen aus dem Morgenland kamen nach Betlehem, um dem Herrn zu huldigen. Halleluja. Sie taten ihre Schätze auf und brachten ihm ihre Gaben dar: Gold dem König, Weihrauch dem wahren Gott und Myrrhe für sein Begräbnis. Halleluja.",
          "bitten_e": "Gepriesen sei Jesus Christus, der Heiland der Welt. Zu ihm lasst uns beten:",
          "bitten_r": "Ehre sei dir, Christus.",
          "bitten": "Du bist in unserer Mitte;^qhilf uns, dich heute zu erkennen.^pDu hast uns zu deinen Brüdern und Schwestern gemacht;^qmach uns offen füreinander.^pDu bist der ewige Sohn Gottes;^qzeig uns den Vater.^pDu bist gekommen, die Schöpfung zu erneueren;^qgib uns einen neuen Geist in allem, was wir denken und tun."
        },
        "Lesehore": {
          "les_buch": "Aus dem Buch Jesaja.",
          "les_stelle": "61,1–11",
          "les_text": "^hDie frohe Botschaft des Gesalbten Jahwes^pDer Geist Gottes, des Herrn, ruht auf mir; denn der Herr hat mich gesalbt. Er hat mich gesandt, damit ich den Armen eine frohe Botschaft bringe und alle heile, deren Herz zerbrochen ist, damit ich den Gefangenen die Entlassung verkünde und den Gefesselten die Befreiung, damit ich ein Gnadenjahr des Herrn ausrufe, einen Tag der Vergeltung unseres Gottes, damit ich alle Trauernden tröste, die Trauernden Zions erfreue, ihnen Schmuck bringe anstelle von Schmutz, Freudenöl statt Trauergewand, Jubel statt der Verzweiflung. Man wird sie «Die Eichen der Gerechtigkeit» nennen, «Die Pflanzung, durch die der Herr seine Herrlichkeit zeigt». Dann bauen sie die uralten Trümmerstätten wieder auf und richten die Ruinen ihrer Vorfahren wieder her. Die verödeten Städte erbauen sie neu, die Ruinen vergangener Generationen. Fremde stehen bereit und führen eure Herden auf die Weide, Ausländer sind eure Bauern und Winzer. Ihr alle aber werdet «Priester des Herrn» genannt, man sagt zu euch «Diener unseres Gottes». Was die Völker besitzen, werdet ihr genießen, mit ihrem Reichtum könnt ihr euch brüsten.^pDoppelte Schande mussten sie ertragen, sie wurden angespuckt und verhöhnt; darum erhalten sie doppelten Besitz in ihrem Land, ewige Freude wird ihnen zuteil. Denn ich, der Herr, liebe das Recht, ich hasse Verbrechen und Raub. Ich bin treu und gebe ihnen den Lohn, ich schließe mit ihnen einen ewigen Bund. Ihre Nachkommen werden bei allen Nationen bekannt sein und ihre Kinder in allen Völkern. Jeder, der sie sieht, wird erkennen: Das sind die Nachkommen, die der Herr gesegnet hat.^pVon Herzen will ich mich freuen über den Herrn. Meine Seele soll jubeln über meinen Gott. Denn er kleidet mich in Gewänder des Heils, er hüllt mich in den Mantel der Gerechtigkeit, wie ein Bräutigam sich festlich schmückt und wie eine Braut ihr Geschmeide anlegt. Denn wie die Erde die Saat wachsen lässt und der Garten die Pflanzen hervorbringt, so bringt Gott, der Herr, Gerechtigkeit hervor und Ruhm vor allen Völkern.",
          "resp1_1": "Der Geist des Herrn ist über mir; denn der Herr hat mich gesalbt. Er hat mich gesandt, den Armen die frohe Botschaft zu bringen,",
          "resp1_2": "alle zu heilen, deren Herz bedrückt ist.",
          "resp1_3": "Ich bin nicht von mir aus gekommen, sondern der Vater hat mich gesandt."
        },
        "Non": {
          "les_buch": "Tob",
          "les_stelle": "14,8–9 (Vg.)",
          "les_text": "Die Heiden werden ihre Götzen verlassen, nach Jerusalem kommen und dort wohnen. Alle Könige der Erde werden sich dort freuen und niederfallen vor dem König von Israel."
        },
        "Sext": {
          "les_buch": "Jes",
          "les_stelle": "12,5–6",
          "les_text": "Preist den Herrn, denn herrliche Taten hat er vollbracht; auf der ganzen Erde soll man es wissen. Jauchzt und jubelt, ihr Bewohner von Zion; denn groß ist in eurer Mitte der Heilige Israels."
        },
        "Terz": {
          "les_buch": "Dtn",
          "les_stelle": "4,7",
          "les_text": "Welche große Nation hätte Götter, die ihr so nah sind, wie Jahwe, unser Gott, uns nah ist, wo immer wir ihn anrufen?"
        },
        "Vesper": {
          "les_buch": "2 Petr",
          "les_stelle": "1,3–4",
          "les_text": "Alles, was für unser Leben und unsere Frömmigkeit gut ist, hat Gottes Macht uns geschenkt; sie hat uns den erkennen lassen, der uns durch seine Herrlichkeit und Kraft berufen hat. Durch sie wurden uns die kostbaren und überaus großen Verheißungen geschenkt, damit ihr der verderblichen Begierde, die in der Welt herrscht, entflieht und an der göttlichen Natur Anteil erhaltet.",
          "ant_ev": "Mit großer Freude schauten die Weisen den Stern. Sie traten in das Haus und taten ihre Schätze auf: Gold, Weihrauch und Myrrhe. Halleluja.",
          "bitten_e": "Lasst uns beten zu unserem Herrn Jesus Christus, der die Menschen aus der Finsternis in sein Licht führt:",
          "bitten_r": "Herr, erbarme dich.",
          "bitten": "Du bist gekommen, dir ein Volk zu sammeln;^qgib, dass deine Kirche wachse auf der ganzen Erde.^pDu lenkst die Herzen der Menschen;^qlenke die Pläne der Staatsmänner zum Frieden.^pDu bist der Hohepriester auf ewig;^qsteh denen bei, denen du Anteil gibst an deinem Dienst.^pDu Sohn der Jungfrau Maria:^qsegne die Jungfrauen, die sich dir geweiht haben.^pDu hast dem Tod die Macht genommen;^qnimm unsere Verstorbenen auf in das ewige Leben."
        }
      },
      "8": {
        "each": {
          "oration": "Gütiger Gott, wir gehen durch eine Welt voll Zwielicht und Schatten. Lass dein Licht in unseren Herzen aufstrahlen und führe uns durch das Dunkel dieses Lebens in deine unvergängliche Klarheit. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "4,2–3",
          "les_text": "An jenem Tag wird der Spross des Herrn für alle Israeliten, die entronnen sind, eine Zierde und Ehre sein; die Früchte des Landes sind ihr Stolz und Ruhm. Dann wird der Rest von Zion und wer in Jerusalem noch übrig ist, heilig genannt werden, jeder, der in Jerusalem in das Verzeichnis derer, die am Leben bleiben sollen, eingetragen ist.",
          "ant_ev": "Drei Geschenke brachten die Weisen dem Herrn, dem Sohne Gottes, dem großen König: Gold, Weihrauch und Myrrhe. Halleluja.",
          "bitten_e": "Gepriesen sei Jesus Christus, der uns in die Freiheit der Kinder Gottes führt. Zu ihm lasst uns beten:",
          "bitten_r": "Christe, eleison.",
          "bitten": "Du bist für uns Mensch geworden;^qerneuere uns durch das Geheimnis deiner Geburt.^pDu bist Gott geblieben;^qgib uns Anteil an deinem göttlichen Leben.^pDu bist erschienen als das Licht der Welt;^qdein Wort sei unser Licht an diesem Tag.^pDurch den Glauben wohnst du in unseren Herzen;^qbleibe in uns allezeit."
        },
        "Lesehore": {},
        "Non": {
          "les_buch": "Jes",
          "les_stelle": "65,1",
          "les_text": "Ich wäre zu erreichen gewesen für die, die nicht nach mir fragten, ich wäre zu finden gewesen für die, die nicht nach mir suchten. Ich sagte zu einem Volk, das meinen Namen nicht anrief: Hier bin ich, hier bin ich!"
        },
        "Sext": {
          "les_buch": "Jes",
          "les_stelle": "48,2",
          "les_text": "Verkündet es jauchzend, damit man es hört! Ruft es hinaus bis ans Ende der Erde! Ruft: Der Herr hat seinen Knecht Jakob ausgelöst."
        },
        "Terz": {
          "les_buch": "Jes",
          "les_stelle": "45,13",
          "les_text": "Ich habe ihn aus Gerechtigkeit zum Aufbruch veranlasst. Alle Wege ebne ich ihm. Er baut meine Stadt wieder auf, mein verschlepptes Volk lässt er frei, aber nicht für Lösegeld oder Geschenke. Der Herr der Heere hat gesprochen."
        },
        "Vesper": {
          "les_buch": "Eph",
          "les_stelle": "2,3b.5",
          "les_text": "Wir waren von Natur aus Kinder des Zorns wie die anderen. Gott aber, der voll Erbarmen ist, hat uns, die wir infolge unserer Sünden tot waren, in seiner großen Liebe, mit der er uns geliebt hat, zusammen mit Christus wieder lebendig gemacht. Aus Gnade seid ihr gerettet.",
          "ant_ev": "Erschienen bist du, Licht vom Lichte, Christus, Gottes Sohn; die Weisen bringen dir ihre Gaben. Halleluja.",
          "bitten_e": "Mit allen Christen im Lobpreis vereint, lasst uns zu Gott rufen:",
          "bitten_r": "Erhöre unser Gebet.",
          "bitten": "Ewiger Vater, komm den Menschen zu Hilfe, denen du ein unbekannter Gott bist;^qerleuchte sie durch Christus, deinen Sohn, das Licht vom Licht.^pSieh auf alle, die dich als den alleinigen Gott anbeten;^qlass sie dein Erbarmen finden.^pGedenke der Getauften, die durch Christus an dich glauben;^qsei keinem von ihnen fern.^pBeschütze unsere Brüder und Schwestern, die unterwegs sind;^qbewahre sie vor Unheil.^pDu willst, dass alle Menschen selig werden;^qschenke den Verstorbenen die ewige Seligkeit bei dir."
        }
      },
      "9": {
        "each": {
          "oration": "Allmächtiger Gott, dein einziger Sohn, vor aller Zeit aus dir geboren, ist in unserem Fleisch sichtbar erschienen. Wie er uns gleich geworden ist in der menschlichen Gestalt, so werde unser Inneres neu geschaffen nach seinem Bild. Darum bitten wir durch ihn, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "49,8b–9",
          "les_text": "Ich habe dich geschaffen und dazu bestimmt, der Bund zu sein für das Volk, aufzuhelfen dem Land und das verödete Erbe neu zu verteilen, den Gefangenen zu sagen: Kommt heraus!, und denen, die in der Finsternis sind: Kommt ans Licht!",
          "ant_ev": "Wo ist der neugeborene König? Wir haben seinen Stern gesehen und sind gekommen, ihm zu huldigen.",
          "bitten_e": "Gepriesen sei Jesus Christus, das Wort des ewigen Vaters. Zu ihm lasst uns beten:",
          "bitten_r": "Ehre sei dir, Christus.",
          "bitten": "Du kamst auf die Erde, um die Menschen zu retten;^qmache uns zu Boten deines Evangeliums.^pAls Licht der Welt bist du erschienen;^qsei unser Licht an diesem Tag.^pDu bist unser Heiland geworden;^qheile uns an Leib und Seele.^pDu bist das Brot für das Leben der Welt,^qsei unsere Speise im Sakrament des Altares."
        },
        "Lesehore": {},
        "Non": {
          "les_buch": "1 Joh",
          "les_stelle": "1,5",
          "les_text": "Das ist die Botschaft, die wir von ihm gehört haben und euch verkünden: Gott ist Licht und keine Finsternis ist in ihm."
        },
        "Sext": {
          "les_buch": "Offb",
          "les_stelle": "21,23–24",
          "les_text": "Die Stadt braucht weder Sonne noch Mond, die ihr leuchten. Denn die Herrlichkeit Gottes erleuchtet sie und ihre Leuchte ist das Lamm. Die Völker werden in diesem Licht einhergehen und die Könige der Erde werden ihre Pracht in die Stadt bringen."
        },
        "Terz": {
          "les_buch": "1 Tim",
          "les_stelle": "1,15",
          "les_text": "Das Wort ist glaubwürdig und wert, dass man es beherzigt: Christus Jesus ist in die Welt gekommen, um die Sünder zu retten."
        },
        "Vesper": {
          "les_buch": "Kol",
          "les_stelle": "1,13–15",
          "les_text": "Gott hat uns der Macht der Finsternis entrissen und aufgenommen in das Reich seines geliebten Sohnes. Durch ihn haben wir die Erlösung, die Vergebung der Sünden. Er ist das Ebenbild des unsichtbaren Gottes, der Erstgeborene der ganzen Schöpfung.",
          "ant_ev": "Herodes fragte die Weisen: Was für ein Zeichen habt ihr gesehen für die Geburt des Königs? – Wir sahen einen leuchtenden Stern, der die ganze Erde erhellt.",
          "bitten_e": "Lasst uns beten zu Jesus Christus, der gekommen ist als Heiland der Welt:",
          "bitten_r": "Christus, erbarme dich.",
          "bitten": "Du lehrst uns, den Vater im Geist und in der Wahrheit anzubeten;^qgib, dass alle Menschen den Vater erkennen.^pDu bist der Arzt, der alle heilen kann;^qschenke den Kranken Gesundheit und Kraft.^pDurch deine Geburt hast du Freude in die Welt gebracht;^qkomm den Unglücklichen zu Hilfe.^pDu hast die Last der Sünde von uns genommen;^qschenke den Gläubigen die Freiheit der Kinder Gottes.^pDu hast das Tor des Himmels geöffnet;^qführe unsere Verstorbenen in das Haus deines Vaters."
        }
      },
      "10": {
        "each": {
          "oration": "Gott, du Licht der Völker, du hast unsere Väter durch die Propheten erleuchtet, uns aber hast du in deinem Sohn die Fülle der Wahrheit und des Friedens geschenkt. Gib uns die Gnade, diese Wahrheit zu bezeugen und deinen Frieden hineinzutragen in unsere Welt. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "62,11b–12a",
          "les_text": "Sagt der Tochter Zion: Sieh her, jetzt kommt deine Rettung. Siehe, er bringt seinen Siegespreis mit: Alle, die er gewonnen hat, gehen vor ihm her. Dann nennt man sie «Das heilige Volk», «Die Erlösten des Herrn».",
          "ant_ev": "In Scharen kommen die Völker von ferne, von allen Enden der Erde. Geschenke halten sie in ihren Händen, Gaben für den König des Himmels. Halleluja.",
          "bitten_e": "Gepriesen sei Gott, der uns tröstet und froh macht durch die Geburt seines Sohnes. Zu ihm lasst uns beten:",
          "bitten_r": "Ehre sei Gott in der Höhe.",
          "bitten": "Mit den Engeln, den Patriarchen und Propheten^qloben wir dich, Herr, unser Gott.^pMit Maria, der Jungfrau und Gottesmutter,^qpreist unsere Seele deine Größe.^pMit den Aposteln und Evangelisten^qsagen wir Dank.^pMit allen Märtyrern Christi^qbringen wir uns selbst als Opfergabe dar.^pMit allen heiligen Männern und Frauen^qweihen wir diesen Tag."
        },
        "Lesehore": {},
        "Non": {
          "les_buch": "Jes",
          "les_stelle": "60,4b–5",
          "les_text": "Deine Söhne, Jerusalem, kommen von fern, deine Töchter trägt man auf den Armen herbei. Du wirst es sehen, und du wirst strahlen, dein Herz bebt vor Freude und öffnet sich weit. Denn der Reichtum des Meeres strömt dir zu, die Schätze der Völker kommen zu dir."
        },
        "Sext": {
          "les_buch": "Jes",
          "les_stelle": "9,1",
          "les_text": "Das Volk, das im Dunkel lebt, sieht ein helles Licht; über denen, die im Land der Finsternis wohnen, strahlt ein Licht auf."
        },
        "Terz": {
          "les_buch": "Jes",
          "les_stelle": "2,3b–4",
          "les_text": "Von Zion kommt die Weisung des Herrn, aus Jerusalem sein Wort. Er spricht Recht im Streit der Völker, er weist viele Nationen zurecht. Dann schmieden sie Pflugscharen aus ihren Schwertern und Winzermesser aus ihren Lanzen. Man zieht nicht mehr das Schwert, Volk gegen Volk, und übt nicht mehr für den Krieg."
        },
        "Vesper": {
          "les_buch": "1 Joh",
          "les_stelle": "1,5b.7",
          "les_text": "Gott ist Licht, und keine Finsternis ist in ihm. Wenn wir aber im Licht leben, wie er im Licht ist, haben wir Gemeinschaft miteinander, und das Blut seines Sohnes Jesus reinigt uns von aller Sünde.",
          "ant_ev": "Ganz Saba kommt, bringt Weihrauch und Gold und verkündet den Ruhm des Herrn.",
          "bitten_e": "Mit allen Gläubigen im Gebet vereint, lasst uns zu Christus rufen:",
          "bitten_r": "Christe, eleison.",
          "bitten": "Sei allen nahe, die dich suchen;^qoffenbare dich ihnen in deiner Frohen Botschaft.^pSteh denen bei, die sich mühen, die Menschen von Hunger und Elend zu befreien;^qmache sie zu einem Werkzeug deiner Liebe.^pSieh auf alle Menschen, die ihrer Religion getreu leben;^qhilf ihnen, dich zu finden.^pLäutere die Herzen der Gläubigen^qund befreie deine Kirche von Schuld und Sünde.^pSchenke unseren Verstorbenen dein Erbarmen^qund führe sie in die Herrlichkeit des Vaters."
        }
      },
      "11": {
        "each": {
          "oration": "Heiliger Gott, in Christus hast du den Völkern deine ewige Herrlichkeit geoffenbart. Gib uns die Gnade, das Geheimnis unseres Erlösers immer tiefer zu erfassen, damit wir durch ihn zum unvergänglichen Leben gelangen, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "45,22–24",
          "les_text": "Wendet euch mir zu und lasst euch erretten, ihr Menschen aus den fernsten Ländern der Erde; denn ich bin Gott, und sonst niemand. Ich habe bei mir selbst geschworen, und mein Mund hat die Wahrheit gesprochen, es ist ein unwiderrufliches Wort: Vor mir wird jedes Knie sich beugen, und jede Zunge wird bei mir schwören: Nur beim Herrn – sagt man von mir – gibt es Rettung und Schutz. Beschämt kommen alle zu ihm, die sich ihm widersetzten.",
          "ant_ev": "Alle, die dich verachtet haben, werfen sich dir zu Füßen.",
          "bitten_e": "Gepriesen sei Jesus Christus, der gekommen ist, die Welt zu erneuern. Zu ihm lasst uns beten:",
          "bitten_r": "Herr, schenke uns dein Heil.",
          "bitten": "Du bist Mensch geworden, um uns Anteil an deinem göttlichen Leben zu geben;^qlass uns dir danken für dein Wort und dein Sakrament.^pDich hat die reine Jungfrau Maria geboren;^qauf ihre Fürbitte schenke uns dein Heil.^pDu kamst zur Erde wie der Tau aus der Höhe;^qerquicke unser Herz mit deinem Wort.^pWir haben den Anfang deines irdischen Lebens gefeiert;^qlass uns dir heute folgen auf deinem Weg."
        },
        "Lesehore": {},
        "Non": {
          "les_buch": "Sach",
          "les_stelle": "8,7–8",
          "les_text": "Seht, ich werde mein Volk befreien aus dem Land des Sonnenaufgangs und aus dem Land des Sonnenuntergangs. Ich werde sie heimbringen und sie werden in Jerusalem wohnen. Sie werden mein Volk sein und ich werde ihr Gott sein, unwandelbar und treu."
        },
        "Sext": {
          "les_buch": "Jer",
          "les_stelle": "31,11–12",
          "les_text": "Der Herr erlöst Jakob und befreit ihn aus der Hand des Stärkeren. Sie kommen und jubeln auf Zions Höhe, sie strahlen vor Freude über die Gaben des Herrn, über Korn, Wein und Öl, über Lämmer und Rinder. Sie werden wie ein bewässerter Garten sein und nie mehr verschmachten."
        },
        "Terz": {
          "les_buch": "Jer",
          "les_stelle": "31,7b–8a",
          "les_text": "Jubelt Jakob voll Freude zu und jauchzt über das Haupt der Völker! Verkündet, lobsingt und sagt: Der Herr hat sein Volk gerettet, den Rest Israels. Seht, ich bringe sie heim aus dem Nordland und sammle sie von den Enden der Erde."
        },
        "Vesper": {
          "les_buch": "Röm",
          "les_stelle": "8,3b–4",
          "les_text": "Gott sandte seinen Sohn in der Gestalt des Fleisches, das unter der Macht der Sünde steht, zur Sühne für die Sünde, um an diesem Fleisch die Sünde zu verurteilen; dies tat er, damit die Forderung des Gesetzes durch uns erfüllt werde, die wir nicht nach dem Fleisch, sondern nach dem Geist leben.",
          "ant_ev": "Auf einem anderen Weg kehrten die Weisen in ihr Land zurück, wie es ihnen im Traum der Engel geboten hatte.",
          "bitten_e": "Lasst uns beten zu Gott dem Vater, der Christus zum Licht der Völker gemacht hat:",
          "bitten_r": "Wir bitten dich, erhöre uns.",
          "bitten": "Herr, unser Gott, breite deine Kirche aus über die ganze Erde,^qdamit die Herrlichkeit deines Sohnes offenbar wird.^pDu hast die Weisen zu Christus geführt;^qoffenbare deinen Sohn allen, die nach der Wahrheit suchen.^pRufe alle Völker in dein Licht,^qdamit sich alle Knie beugen vor dem Namen Jesu.^pSende Arbeiter in deine Ernte,^qdamit den Armen die Frohe Botschaft verkündet wird.^pGewähre den Verstorbenen die Frucht der Erlösung,^qdamit sie teilhaben am Sieg deines Sohnes."
        }
      },
      "12": {
        "each": {
          "oration": "Allmächtiger Gott, du hast den Heiden die Geburt des Welterlösers geoffenbart und die Weisen durch den Stern zu ihm geführt. Lass uns immer tiefer erfassen, dass Christus zu unserem Heil Mensch geworden ist. Er, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Laudes": {
          "les_buch": "Weish",
          "les_stelle": "7,26–27",
          "les_text": "Die Weisheit ist der Widerschein des ewigen Lichts, der ungetrübte Spiegel von Gottes Kraft, das Bild seiner Vollkommenheit. Sie ist nur eine, und vermag doch alles; ohne sich zu ändern, erneuert sie alles. Von Geschlecht zu Geschlecht tritt sie in heilige Seelen ein und schafft Freunde Gottes und Propheten.",
          "ant_ev": "Zu Kana in Galiläa tat Jesus sein erstes Zeichen und offenbarte seine Herrlichkeit.",
          "bitten_e": "Gepriesen sei Christus, in dem der unsichtbare Gott erschienen ist. Zu ihm lasst uns beten:",
          "bitten_r": "Sohn Gottes, erhöre uns.",
          "bitten": "Du hast uns die Liebe des Vaters geoffenbart;^qmache uns zu Zeugen seiner Liebe.^pDu hast dich kundgetan als Herr des Lebens;^qschenke uns dein Leben.^pDu hast für uns das Todesleiden auf dich genommen;^qsteh uns bei, wenn Leid und Tod über uns kommen.^pSei heute in unserer Mitte^qund gib uns füreinander Geduld und Liebe."
        },
        "Lesehore": {},
        "Non": {
          "les_buch": "Mich",
          "les_stelle": "2,12",
          "les_text": "Ich werde ganz Jakob versammeln, den Rest von Israel will ich vereinen. Ich führe sie zusammen wie die Schafe im Pferch, wie die Herde mitten auf der Weide – eine wogende Menschenmenge."
        },
        "Sext": {
          "les_buch": "Ez",
          "les_stelle": "34, 11–12",
          "les_text": "Ich will meine Schafe selber suchen und mich selber um sie kümmern. Wie ein Hirt sich um die Tiere seiner Herde kümmert, die sich verirrt haben, so kümmere ich mich um meine Schafe und hole sie zurück von all den Orten, wohin sie sich am dunklen, düsteren Tag zerstreut haben."
        },
        "Terz": {
          "les_buch": "Ez",
          "les_stelle": "20,41–42a",
          "les_text": "Beim Aufsteigen des Dufts eurer Opfer will ich euch gnädig annehmen. Wenn ich euch aus den Völkern herausführe und aus den Ländern sammle, in die ihr zerstreut seid, werde ich mich vor den Augen der Völker an euch als heilig erweisen. Ihr sollt erkennen, dass ich der Herr bin."
        }
      }
    },
    "12": {
      "17": {
        "each": {
          "oration": "k-12-17-each-Oration"
        },
        "Laudes": {
          "resp0_1": "Jes 11,1-2",
          "les_buch": "k-12-17-Laudes-Les_Buch",
          "les_stelle": "k-12-17-Laudes–Les_Stelle",
          "les_text": "k-12-17-Laudes-Les_Text",
          "ant_ev": "k-12-17-Laudes-Ant_Ev",
          "bitten_e": "k-12-17-Laudes-Bitten_E",
          "bitten_r": "k-12-17-Laudes-Bitten_R",
          "bitten": "k-12-17-Laudes-Bitten"
        },
        "Lesehore": {},
        "Non": {
          "resp0_1": "Jes 61,11",
          "les_buch": "Jes",
          "les_stelle": "61,11",
          "les_text": "Advent-Non"
        },
        "Sext": {
          "resp0_1": "Jes 4,3",
          "les_buch": "Jes",
          "les_stelle": "4,3",
          "les_text": "Advent-Sext"
        },
        "Terz": {
          "resp0_1": "Jes 4,2",
          "les_buch": "Jes",
          "les_stelle": "4,2",
          "les_text": "Advent-Terz"
        },
        "Vesper": {
          "resp0_1": "1 Thess 5,23-24",
          "les_buch": "k-12-17-Vesper-Les_Buch",
          "les_stelle": "k-12-17-Vesper–Les_Stelle",
          "les_text": "k-12-17-Vesper-Les_Text",
          "ant_ev": "k-12-17-Vesper-Ant_Ev",
          "bitten_e": "k-12-17-Vesper-Bitten_E",
          "bitten_r": "k-12-17-Vesper-Bitten_R",
          "bitten": "k-12-17-Vesper-Bitten"
        }
      },
      "18": {
        "each": {
          "oration": "k-12-18-each-Oration"
        },
        "Laudes": {
          "resp0_1": "Röm 13,11b-12",
          "les_buch": "k-12-18-Laudes-Les_Buch",
          "les_stelle": "k-12-18-Laudes–Les_Stelle",
          "les_text": "k-12-18-Laudes-Les_Text",
          "ant_ev": "k-12-18-Laudes-Ant_Ev",
          "bitten_e": "k-12-18-Laudes-Bitten_E",
          "bitten_r": "k-12-18-Laudes-Bitten_R",
          "bitten": "k-12-18-Laudes-Bitten"
        },
        "Lesehore": {},
        "Non": {
          "resp0_1": "vgl.2 Thess 1,6.7.10",
          "les_buch": "vgl. 2 Thess",
          "les_stelle": "1,6.7.10",
          "les_text": "Advent-Non"
        },
        "Sext": {
          "resp0_1": "1Thess 3,12-13",
          "les_buch": "1Thess",
          "les_stelle": "3,12-13",
          "les_text": "Advent-Sext"
        },
        "Terz": {
          "resp0_1": "Röm 13,13-14a",
          "les_buch": "Röm",
          "les_stelle": "13,13-14a",
          "les_text": "Advent-Terz"
        },
        "Vesper": {
          "resp0_1": "Phil 4,4-5",
          "les_buch": "k-12-18-Vesper-Les_Buch",
          "les_stelle": "k-12-18-Vesper–Les_Stelle",
          "les_text": "k-12-18-Vesper-Les_Text",
          "ant_ev": "k-12-18-Vesper-Ant_Ev",
          "bitten_e": "k-12-18-Vesper-Bitten_E",
          "bitten_r": "k-12-18-Vesper-Bitten_R",
          "bitten": "k-12-18-Vesper-Bitten"
        }
      },
      "19": {
        "each": {
          "oration": "k-12-19-each-Oration"
        },
        "Laudes": {
          "resp0_1": "Jes 2,3",
          "les_buch": "k-12-19-Laudes-Les_Buch",
          "les_stelle": "k-12-19-Laudes–Les_Stelle",
          "les_text": "k-12-19-Laudes-Les_Text",
          "ant_ev": "k-12-19-Laudes-Ant_Ev",
          "bitten_e": "k-12-19-Laudes-Bitten_E",
          "bitten_r": "k-12-19-Laudes-Bitten_R",
          "bitten": "k-12-19-Laudes-Bitten"
        },
        "Lesehore": {},
        "Non": {
          "resp0_1": "vgl.Jes 13,22; 14,1",
          "les_buch": "vgl.Jes",
          "les_stelle": "13,22; 14,1",
          "les_text": "Advent-Non"
        },
        "Sext": {
          "resp0_1": "vgl.Jes 10,24.27",
          "les_buch": "vgl.Jes",
          "les_stelle": "10,24.27",
          "les_text": "Advent-Sext"
        },
        "Terz": {
          "resp0_1": "Jes 10,20-21",
          "les_buch": "Jes",
          "les_stelle": "10,20-21",
          "les_text": "Advent-Terz"
        },
        "Vesper": {
          "resp0_1": "Phil 3,20b-21",
          "les_buch": "k-12-19-Vesper-Les_Buch",
          "les_stelle": "k-12-19-Vesper–Les_Stelle",
          "les_text": "k-12-19-Vesper-Les_Text",
          "ant_ev": "k-12-19-Vesper-Ant_Ev",
          "bitten_e": "k-12-19-Vesper-Bitten_E",
          "bitten_r": "k-12-19-Vesper-Bitten_R",
          "bitten": "k-12-19-Vesper-Bitten"
        }
      },
      "20": {
        "each": {
          "oration": "k-12-20-each-Oration"
        },
        "Laudes": {
          "resp0_1": "Gen 49,10",
          "les_buch": "k-12-20-Laudes-Les_Buch",
          "les_stelle": "k-12-20-Laudes–Les_Stelle",
          "les_text": "k-12-20-Laudes-Les_Text",
          "ant_ev": "k-12-20-Laudes-Ant_Ev",
          "bitten_e": "k-12-20-Laudes-Bitten_E",
          "bitten_r": "k-12-20-Laudes-Bitten_R",
          "bitten": "k-12-20-Laudes-Bitten"
        },
        "Lesehore": {},
        "Non": {
          "resp0_1": "Ez 34,15-16",
          "les_buch": "Ez",
          "les_stelle": "34,15-16",
          "les_text": "Advent-Non"
        },
        "Sext": {
          "resp0_1": "Jer 23,6",
          "les_buch": "Jer",
          "les_stelle": "23,6",
          "les_text": "Advent-Sext"
        },
        "Terz": {
          "resp0_1": "Jer 23,5",
          "les_buch": "Jer",
          "les_stelle": "23,5",
          "les_text": "Advent-Terz"
        },
        "Vesper": {
          "resp0_1": "1 Kor 1,7b-9",
          "les_buch": "k-12-20-Vesper-Les_Buch",
          "les_stelle": "k-12-20-Vesper–Les_Stelle",
          "les_text": "k-12-20-Vesper-Les_Text",
          "ant_ev": "k-12-20-Vesper-Ant_Ev",
          "bitten_e": "k-12-20-Vesper-Bitten_E",
          "bitten_r": "k-12-20-Vesper-Bitten_R",
          "bitten": "k-12-20-Vesper-Bitten"
        }
      },
      "21": {
        "each": {
          "oration": "k-12-21-each-Oration"
        },
        "Laudes": {
          "resp0_1": "Jes 7,14-15",
          "les_buch": "k-12-21-Laudes-Les_Buch",
          "les_stelle": "k-12-21-Laudes–Les_Stelle",
          "les_text": "k-12-21-Laudes-Les_Text",
          "ant_ev": "k-12-21-Laudes-Ant_Ev",
          "bitten_e": "k-12-21-Laudes-Bitten_E",
          "bitten_r": "k-12-21-Laudes-Bitten_R",
          "bitten": "k-12-21-Laudes-Bitten"
        },
        "Lesehore": {},
        "Non": {
          "resp0_1": "Dan 9,19",
          "les_buch": "Dan",
          "les_stelle": "9,19",
          "les_text": "Advent-Non"
        },
        "Sext": {
          "resp0_1": "Jes 12,2",
          "les_buch": "Jes",
          "les_stelle": "12,2",
          "les_text": "Advent-Sext"
        },
        "Terz": {
          "resp0_1": "Jes 2,11",
          "les_buch": "Jes",
          "les_stelle": "2,11",
          "les_text": "Advent-Terz"
        },
        "Vesper": {
          "resp0_1": "1 Kor 4,5",
          "les_buch": "k-12-21-Vesper-Les_Buch",
          "les_stelle": "k-12-21-Vesper–Les_Stelle",
          "les_text": "k-12-21-Vesper-Les_Text",
          "ant_ev": "k-12-21-Vesper-Ant_Ev",
          "bitten_e": "k-12-21-Vesper-Bitten_E",
          "bitten_r": "k-12-21-Vesper-Bitten_R",
          "bitten": "k-12-21-Vesper-Bitten"
        }
      },
      "22": {
        "each": {
          "oration": "k-12-22-each-Oration"
        },
        "Laudes": {
          "resp0_1": "Jes 45,8",
          "les_buch": "k-12-22-Laudes-Les_Buch",
          "les_stelle": "k-12-22-Laudes–Les_Stelle",
          "les_text": "k-12-22-Laudes-Les_Text",
          "ant_ev": "k-12-22-Laudes-Ant_Ev",
          "bitten_e": "k-12-22-Laudes-Bitten_E",
          "bitten_r": "k-12-22-Laudes-Bitten_R",
          "bitten": "k-12-22-Laudes-Bitten"
        },
        "Lesehore": {},
        "Non": {
          "resp0_1": "Mal 3,20",
          "les_buch": "Mal",
          "les_stelle": "3,20",
          "les_text": "Advent-Non"
        },
        "Sext": {
          "resp0_1": "Hag 2,6.9",
          "les_buch": "Hag",
          "les_stelle": "2,6.9",
          "les_text": "Advent-Sext"
        },
        "Terz": {
          "resp0_1": "Mi 5,3.4a",
          "les_buch": "Mi",
          "les_stelle": "5,3.4a",
          "les_text": "Advent-Terz"
        },
        "Vesper": {
          "resp0_1": "Jak 5,7-8.9b",
          "les_buch": "k-12-22-Vesper-Les_Buch",
          "les_stelle": "k-12-22-Vesper–Les_Stelle",
          "les_text": "k-12-22-Vesper-Les_Text",
          "ant_ev": "k-12-22-Vesper-Ant_Ev",
          "bitten_e": "k-12-22-Vesper-Bitten_E",
          "bitten_r": "k-12-22-Vesper-Bitten_R",
          "bitten": "k-12-22-Vesper-Bitten"
        }
      },
      "23": {
        "each": {
          "oration": "k-12-23-each-Oration"
        },
        "Laudes": {
          "resp0_1": "Jer 30,18.21",
          "les_buch": "k-12-23-Laudes-Les_Buch",
          "les_stelle": "k-12-23-Laudes–Les_Stelle",
          "les_text": "k-12-23-Laudes-Les_Text",
          "ant_ev": "k-12-23-Laudes-Ant_Ev",
          "bitten_e": "k-12-23-Laudes-Bitten_E",
          "bitten_r": "k-12-23-Laudes-Bitten_R",
          "bitten": "k-12-23-Laudes-Bitten"
        },
        "Lesehore": {},
        "Non": {
          "resp0_1": "Bar 3,5-6a",
          "les_buch": "Bar",
          "les_stelle": "3,5-6a",
          "les_text": "Advent-Non"
        },
        "Sext": {
          "resp0_1": "Jer 30,18",
          "les_buch": "Jer",
          "les_stelle": "30,18",
          "les_text": "Advent-Sext"
        },
        "Terz": {
          "resp0_1": "Jer 29,11.13.14",
          "les_buch": "Jer",
          "les_stelle": "29,11.13.14",
          "les_text": "Advent-Terz"
        },
        "Vesper": {
          "resp0_1": "2 Petr 3,8b-9",
          "les_buch": "k-12-23-Vesper-Les_Buch",
          "les_stelle": "k-12-23-Vesper–Les_Stelle",
          "les_text": "k-12-23-Vesper-Les_Text",
          "ant_ev": "k-12-23-Vesper-Ant_Ev",
          "bitten_e": "k-12-23-Vesper-Bitten_E",
          "bitten_r": "k-12-23-Vesper-Bitten_R",
          "bitten": "k-12-23-Vesper-Bitten"
        }
      },
      "24": {
        "each": {
          "oration": "k-12-24-each-Oration"
        },
        "Laudes": {
          "resp0_1": "Jes 11,1-2",
          "les_buch": "k-12-24-Laudes-Les_Buch",
          "les_stelle": "k-12-24-Laudes–Les_Stelle",
          "les_text": "k-12-24-Laudes-Les_Text",
          "ant_ev": "k-12-24-Laudes-Ant_Ev",
          "bitten_e": "k-12-24-Laudes-Bitten_E",
          "bitten_r": "k-12-24-Laudes-Bitten_R",
          "bitten": "k-12-24-Laudes-Bitten"
        },
        "Lesehore": {},
        "Non": {
          "resp0_1": "Jes 61,11",
          "les_buch": "Jes",
          "les_stelle": "61,11",
          "les_text": "Advent-Non"
        },
        "Sext": {
          "resp0_1": "Jes 4,3",
          "les_buch": "Jes",
          "les_stelle": "4,3",
          "les_text": "Advent-Sext"
        },
        "Terz": {
          "resp0_1": "Jes 4,2",
          "les_buch": "Jes",
          "les_stelle": "4,2",
          "les_text": "Advent-Terz"
        },
        "Vesper": {
          "resp0_1": "Gal 4,4-5",
          "les_buch": "k-12-24-Vesper-Les_Buch",
          "les_stelle": "k-12-24-Vesper–Les_Stelle",
          "les_text": "k-12-24-Vesper-Les_Text",
          "ant_ev": "k-12-24-Vesper-Ant_Ev",
          "bitten_e": "k-12-24-Vesper-Bitten_E",
          "bitten_r": "k-12-24-Vesper-Bitten_R",
          "bitten": "k-12-24-Vesper-Bitten"
        }
      },
      "25": {
        "each": {
          "oration": "k-12-25-each-Oration"
        },
        "Laudes": {
          "resp0_1": "Hebr 1,1-2",
          "les_buch": "k-12-25-Laudes-Les_Buch",
          "les_stelle": "k-12-25-Laudes–Les_Stelle",
          "les_text": "k-12-25-Laudes-Les_Text",
          "ant_ev": "k-12-25-Laudes-Ant_Ev",
          "bitten_e": "k-12-25-Laudes-Bitten_E",
          "bitten_r": "k-12-25-Laudes-Bitten_R",
          "bitten": "k-12-25-Laudes-Bitten"
        },
        "Lesehore": {},
        "Non": {
          "resp0_1": "Apg 10,36",
          "les_buch": "Apg",
          "les_stelle": "10,36",
          "les_text": "Gott hat das Wort den Israeliten gesandt, indem er den Frieden verkündete durch Jesus Christus; dieser ist der Herr aller."
        },
        "Sext": {
          "resp0_1": "1Joh 4,9",
          "les_buch": "1Joh",
          "les_stelle": "4,9",
          "les_text": "Weihnachten-Sext"
        },
        "Terz": {
          "resp0_1": "Tit 2,11-12",
          "les_buch": "Tit",
          "les_stelle": "2,11-12",
          "les_text": "Weihnachten-Terz"
        },
        "Vesper": {
          "resp0_1": "1 Joh 1,1-3",
          "les_buch": "k-12-25-Vesper-Les_Buch",
          "les_stelle": "k-12-25-Vesper–Les_Stelle",
          "les_text": "k-12-25-Vesper-Les_Text",
          "ant_ev": "k-12-25-Vesper-Ant_Ev",
          "bitten_e": "k-12-25-Vesper-Bitten_E",
          "bitten_r": "k-12-25-Vesper-Bitten_R",
          "bitten": "k-12-25-Vesper-Bitten"
        }
      },
      "26": {
        "each": {
          "oration": "k-12-26-each-Oration"
        },
        "Laudes": {
          "les_buch": "k-12-26-Laudes-Les_Buch",
          "les_stelle": "k-12-26-Laudes–Les_Stelle",
          "les_text": "k-12-26-Laudes-Les_Text",
          "ant_ev": "k-12-26-Laudes-Ant_Ev",
          "bitten_e": "k-12-26-Laudes-Bitten_E",
          "bitten_r": "k-12-26-Laudes-Bitten_R",
          "bitten": "k-12-26-Laudes-Bitten"
        },
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {
          "resp0_1": "1 Joh 1,5b.7",
          "les_buch": "k-12-26-Vesper-Les_Buch",
          "les_stelle": "k-12-26-Vesper–Les_Stelle",
          "les_text": "k-12-26-Vesper-Les_Text",
          "ant_ev": "k-12-26-Vesper-Ant_Ev",
          "bitten_e": "k-12-26-Vesper-Bitten_E",
          "bitten_r": "k-12-26-Vesper-Bitten_R",
          "bitten": "k-12-26-Vesper-Bitten"
        }
      },
      "27": {
        "each": {
          "oration": "k-12-27-each-Oration"
        },
        "Laudes": {
          "les_buch": "k-12-27-Laudes-Les_Buch",
          "les_stelle": "k-12-27-Laudes–Les_Stelle",
          "les_text": "k-12-27-Laudes-Les_Text",
          "ant_ev": "k-12-27-Laudes-Ant_Ev",
          "bitten_e": "k-12-27-Laudes-Bitten_E",
          "bitten_r": "k-12-27-Laudes-Bitten_R",
          "bitten": "k-12-27-Laudes-Bitten"
        },
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {
          "resp0_1": "Röm 8,3b-4",
          "les_buch": "k-12-27-Vesper-Les_Buch",
          "les_stelle": "k-12-27-Vesper–Les_Stelle",
          "les_text": "k-12-27-Vesper-Les_Text",
          "ant_ev": "k-12-27-Vesper-Ant_Ev",
          "bitten_e": "k-12-27-Vesper-Bitten_E",
          "bitten_r": "k-12-27-Vesper-Bitten_R",
          "bitten": "k-12-27-Vesper-Bitten"
        }
      },
      "28": {
        "each": {
          "oration": "k-12-28-each-Oration"
        },
        "Laudes": {
          "les_buch": "k-12-28-Laudes-Les_Buch",
          "les_stelle": "k-12-28-Laudes–Les_Stelle",
          "les_text": "k-12-28-Laudes-Les_Text",
          "ant_ev": "k-12-28-Laudes-Ant_Ev",
          "bitten_e": "k-12-28-Laudes-Bitten_E",
          "bitten_r": "k-12-28-Laudes-Bitten_R",
          "bitten": "k-12-28-Laudes-Bitten"
        },
        "Lesehore": {},
        "Non": {},
        "Sext": {},
        "Terz": {},
        "Vesper": {
          "resp0_1": "Eph 2,3b-5",
          "les_buch": "k-12-28-Vesper-Les_Buch",
          "les_stelle": "k-12-28-Vesper–Les_Stelle",
          "les_text": "k-12-28-Vesper-Les_Text",
          "ant_ev": "k-12-28-Vesper-Ant_Ev",
          "bitten_e": "k-12-28-Vesper-Bitten_E",
          "bitten_r": "k-12-28-Vesper-Bitten_R",
          "bitten": "k-12-28-Vesper-Bitten"
        }
      },
      "29": {
        "each": {
          "oration": "k-12-29-each-Oration"
        },
        "Laudes": {
          "resp0_1": "Hebr 1,1-2",
          "les_buch": "k-12-29-Laudes-Les_Buch",
          "les_stelle": "k-12-29-Laudes–Les_Stelle",
          "les_text": "k-12-29-Laudes-Les_Text",
          "ant_ev": "k-12-29-Laudes-Ant_Ev",
          "bitten_e": "k-12-29-Laudes-Bitten_E",
          "bitten_r": "k-12-29-Laudes-Bitten_R",
          "bitten": "k-12-29-Laudes-Bitten"
        },
        "Lesehore": {},
        "Non": {
          "resp0_1": "Apg 10,36",
          "les_buch": "Apg",
          "les_stelle": "10,36",
          "les_text": "Gott hat das Wort den Israeliten gesandt, indem er den Frieden verkündete durch Jesus Christus; dieser ist der Herr aller."
        },
        "Sext": {
          "resp0_1": "1Joh 4,9",
          "les_buch": "1Joh",
          "les_stelle": "4,9",
          "les_text": "Weihnachten-Sext"
        },
        "Terz": {
          "resp0_1": "Tit 2,11-12",
          "les_buch": "Tit",
          "les_stelle": "2,11-12",
          "les_text": "Weihnachten-Terz"
        },
        "Vesper": {
          "resp0_1": "1 Joh 1,1-3",
          "les_buch": "k-12-29-Vesper-Les_Buch",
          "les_stelle": "k-12-29-Vesper–Les_Stelle",
          "les_text": "k-12-29-Vesper-Les_Text",
          "ant_ev": "k-12-29-Vesper-Ant_Ev",
          "bitten_e": "k-12-29-Vesper-Bitten_E",
          "bitten_r": "k-12-29-Vesper-Bitten_R",
          "bitten": "k-12-29-Vesper-Bitten"
        }
      },
      "30": {
        "each": {
          "oration": "k-12-30-each-Oration"
        },
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "9,5",
          "les_text": "Ein Kind ist uns geboren, ein Sohn ist uns geschenkt. Die Herrschaft liegt auf seiner Schulter; man nennt ihn Wunderbarer Ratgeber, Starker Gott, Vater in Ewigkeit, Fürst des Friedens.",
          "ant_ev": "k-12-30-Laudes-Ant_Ev",
          "bitten_e": "k-12-30-Laudes-Bitten_E",
          "bitten_r": "k-12-30-Laudes-Bitten_R",
          "bitten": "k-12-30-Laudes-Bitten"
        },
        "Lesehore": {},
        "Non": {
          "les_buch": "Tob",
          "les_stelle": "14,8–9 (Vg.)",
          "les_text": "Die Heiden werden ihre Götzen verlassen, nach Jerusalem kommen und dort wohnen. Alle Könige der Erde werden sich dort freuen und niederfallen vor dem König von Israel."
        },
        "Sext": {
          "les_buch": "Jes",
          "les_stelle": "12,5–6",
          "les_text": "Preist den Herrn, denn herrliche Taten hat er vollbracht; auf der ganzen Erde soll man es wissen. Jauchzt und jubelt, ihr Bewohner von Zion; denn groß ist in eurer Mitte der Heilige Israels."
        },
        "Terz": {
          "les_buch": "Dtn",
          "les_stelle": "4,7",
          "les_text": "Welche große Nation hätte Götter, die ihr so nah sind, wie Jahwe, unser Gott, uns nah ist, wo immer wir ihn anrufen?"
        },
        "Vesper": {
          "les_buch": "2 Petr",
          "les_stelle": "1,3–4",
          "les_text": "Alles, was für unser Leben und unsere Frömmigkeit gut ist, hat Gottes Macht uns geschenkt; sie hat uns den erkennen lassen, der uns durch seine Herrlichkeit und Kraft berufen hat. Durch sie wurden uns die kostbaren und überaus großen Verheißungen geschenkt, damit ihr der verderblichen Begierde, die in der Welt herrscht, entflieht und an der göttlichen Natur Anteil erhaltet.",
          "ant_ev": "k-12-30-Vesper-Ant_Ev",
          "bitten_e": "k-12-30-Vesper-Bitten_E",
          "bitten_r": "k-12-30-Vesper-Bitten_R",
          "bitten": "k-12-30-Vesper-Bitten"
        }
      },
      "31": {
        "each": {
          "oration": "k-12-31-each-Oration"
        },
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "4,2–3",
          "les_text": "An jenem Tag wird der Spross des Herrn für alle Israeliten, die entronnen sind, eine Zierde und Ehre sein; die Früchte des Landes sind ihr Stolz und Ruhm. Dann wird der Rest von Zion und wer in Jerusalem noch übrig ist, heilig genannt werden, jeder, der in Jerusalem in das Verzeichnis derer, die am Leben bleiben sollen, eingetragen ist.",
          "ant_ev": "k-12-31-Laudes-Ant_Ev",
          "bitten_e": "k-12-31-Laudes-Bitten_E",
          "bitten_r": "k-12-31-Laudes-Bitten_R",
          "bitten": "k-12-31-Laudes-Bitten"
        },
        "Lesehore": {},
        "Non": {
          "les_buch": "Jes",
          "les_stelle": "65,1",
          "les_text": "Ich wäre zu erreichen gewesen für die, die nicht nach mir fragten, ich wäre zu finden gewesen für die, die nicht nach mir suchten. Ich sagte zu einem Volk, das meinen Namen nicht anrief: Hier bin ich, hier bin ich!"
        },
        "Sext": {
          "les_buch": "Jes",
          "les_stelle": "48,2",
          "les_text": "Verkündet es jauchzend, damit man es hört! Ruft es hinaus bis ans Ende der Erde! Ruft: Der Herr hat seinen Knecht Jakob ausgelöst."
        },
        "Terz": {
          "les_buch": "Jes",
          "les_stelle": "45,13",
          "les_text": "Ich habe ihn aus Gerechtigkeit zum Aufbruch veranlasst. Alle Wege ebne ich ihm. Er baut meine Stadt wieder auf, mein verschlepptes Volk lässt er frei, aber nicht für Lösegeld oder Geschenke. Der Herr der Heere hat gesprochen."
        },
        "Vesper": {
          "resp0_1": "Gal 4,4-5",
          "les_buch": "k-12-31-Vesper-Les_Buch",
          "les_stelle": "k-12-31-Vesper–Les_Stelle",
          "les_text": "k-12-31-Vesper-Les_Text",
          "ant_ev": "k-12-31-Vesper-Ant_Ev",
          "bitten_e": "k-12-31-Vesper-Bitten_E",
          "bitten_r": "k-12-31-Vesper-Bitten_R",
          "bitten": "k-12-31-Vesper-Bitten"
        }
      }
    }
  },
  "o": {
    "1": {
      "0": {
        "each": {
          "oration": "o-1-0-each-Oration"
        }
      },
      "1": {
        "each": {
          "oration": "o-1-1-each-Oration"
        }
      },
      "2": {
        "each": {
          "oration": "o-1-2-each-Oration"
        }
      },
      "3": {
        "each": {
          "oration": "o-1-3-each-Oration"
        }
      },
      "4": {
        "each": {
          "oration": "o-1-4-each-Oration"
        }
      },
      "5": {
        "each": {
          "oration": "o-1-5-each-Oration"
        }
      },
      "6": {
        "each": {
          "oration": "o-1-6-each-Oration"
        }
      }
    },
    "2": {
      "0": {
        "each": {
          "oration": "o-2-0-each-Oration"
        }
      },
      "1": {
        "each": {
          "oration": "o-2-1-each-Oration"
        }
      },
      "2": {
        "each": {
          "oration": "o-2-2-each-Oration"
        }
      },
      "3": {
        "each": {
          "oration": "o-2-3-each-Oration"
        }
      },
      "4": {
        "each": {
          "oration": "o-2-4-each-Oration"
        }
      },
      "5": {
        "each": {
          "oration": "o-2-5-each-Oration"
        }
      },
      "6": {
        "each": {
          "oration": "o-2-6-each-Oration"
        }
      }
    },
    "3": {
      "0": {
        "each": {
          "oration": "o-3-0-each-Oration"
        }
      },
      "1": {
        "each": {
          "oration": "o-3-1-each-Oration"
        }
      },
      "2": {
        "each": {
          "oration": "o-3-2-each-Oration"
        }
      },
      "3": {
        "each": {
          "oration": "o-3-3-each-Oration"
        }
      },
      "4": {
        "each": {
          "oration": "o-3-4-each-Oration"
        }
      },
      "5": {
        "each": {
          "oration": "o-3-5-each-Oration"
        }
      },
      "6": {
        "each": {
          "oration": "o-3-6-each-Oration"
        }
      }
    },
    "4": {
      "0": {
        "each": {
          "oration": "o-4-0-each-Oration"
        }
      },
      "1": {
        "each": {
          "oration": "o-4-1-each-Oration"
        }
      },
      "2": {
        "each": {
          "oration": "o-4-2-each-Oration"
        }
      },
      "3": {
        "each": {
          "oration": "o-4-3-each-Oration"
        }
      },
      "4": {
        "each": {
          "oration": "o-4-4-each-Oration"
        }
      },
      "5": {
        "each": {
          "oration": "o-4-5-each-Oration"
        }
      },
      "6": {
        "each": {
          "oration": "o-4-6-each-Oration"
        }
      }
    },
    "5": {
      "0": {
        "each": {
          "oration": "o-5-0-each-Oration"
        }
      },
      "1": {
        "each": {
          "oration": "o-5-1-each-Oration"
        }
      },
      "2": {
        "each": {
          "oration": "o-5-2-each-Oration"
        }
      },
      "3": {
        "each": {
          "oration": "o-5-3-each-Oration"
        }
      },
      "4": {
        "each": {
          "oration": "o-5-4-each-Oration"
        }
      },
      "5": {
        "each": {
          "oration": "o-5-5-each-Oration"
        }
      },
      "6": {
        "each": {
          "oration": "o-5-6-each-Oration"
        }
      }
    },
    "6": {
      "0": {
        "each": {
          "oration": "o-6-0-each-Oration"
        }
      },
      "1": {
        "each": {
          "oration": "o-6-1-each-Oration"
        }
      },
      "2": {
        "each": {
          "oration": "o-6-2-each-Oration"
        }
      },
      "3": {
        "each": {
          "oration": "o-6-3-each-Oration"
        }
      },
      "4": {
        "each": {
          "oration": "o-6-4-each-Oration"
        }
      },
      "5": {
        "each": {
          "oration": "o-6-5-each-Oration"
        }
      },
      "6": {
        "each": {
          "oration": "o-6-6-each-Oration"
        }
      }
    },
    "7": {
      "0": {
        "each": {
          "oration": "o-7-0-each-Oration"
        }
      },
      "1": {
        "each": {
          "oration": "o-7-1-each-Oration"
        }
      },
      "2": {
        "each": {
          "oration": "o-7-2-each-Oration"
        }
      },
      "3": {
        "each": {
          "oration": "o-7-3-each-Oration"
        }
      },
      "4": {
        "each": {
          "oration": "o-7-4-each-Oration"
        }
      },
      "5": {
        "each": {
          "oration": "o-7-5-each-Oration"
        }
      },
      "6": {
        "each": {
          "oration": "o-7-6-each-Oration"
        }
      }
    },
    "8": {
      "0": {
        "each": {
          "oration": "o-8-0-each-Oration"
        }
      },
      "1": {
        "each": {
          "oration": "o-8-1-each-Oration"
        }
      }
    },
    "9": {
      "0": {
        "each": {
          "oration": "o-9-0-each-Oration"
        }
      },
      "4": {
        "each": {
          "oration": "o-9-4-each-Oration"
        }
      },
      "5": {
        "each": {
          "oration": "o-9-5-each-Oration"
        }
      },
      "6": {
        "each": {
          "oration": "o-9-6-each-Oration"
        }
      }
    },
    "each": {
      "0": {
        "Laudes": {
          "les_buch": "Apg",
          "les_stelle": "10,40–43",
          "les_text": "Text von Apg 10,40–43",
          "resp1_1": "Christus, du Sohn des lebendigen Gottes!",
          "resp1_2": "Halleluja,°halleluja.",
          "resp1_3": "Du bist wahrhaft vom Tode erstanden.",
          "bitten_e": "o-each-0-Bitten_E",
          "bitten_r": "o-each-0-Bitten_R",
          "bitten": "o-each-0-Bitten"
        },
        "Non": {
          "les_buch": "Röm",
          "les_stelle": "6,4",
          "les_text": "Text von Röm 6,4"
        },
        "Sext": {
          "les_buch": "Eph",
          "les_stelle": "2,4–6",
          "les_text": "Text von Eph 2,4–6"
        },
        "Terz": {
          "les_buch": "1 Kor",
          "les_stelle": "15,3b–5",
          "les_text": "Text von 1 Kor 15,3b–5"
        },
        "Vesper": {
          "les_buch": "Hebr",
          "les_stelle": "10,12–14",
          "les_text": "Text von Hebr 10,12–14",
          "bitten_e": "o-each-0-Bitten_E",
          "bitten_r": "o-each-0-Bitten_R",
          "bitten": "o-each-0-Bitten"
        }
      },
      "1": {
        "Laudes": {
          "les_buch": "Röm",
          "les_stelle": "10,8b–10",
          "les_text": "Text von Röm 10,8b–10",
          "bitten_e": "o-each-1-Bitten_E",
          "bitten_r": "o-each-1-Bitten_R",
          "bitten": "o-each-1-Bitten"
        },
        "Non": {
          "les_buch": "2 Tim",
          "les_stelle": "2,8.11",
          "les_text": "Text von 2 Tim 2,8.11"
        },
        "Sext": {
          "les_buch": "Kol",
          "les_stelle": "2,9.10a.12",
          "les_text": "Text von Kol 2,9.10a.12"
        },
        "Terz": {
          "les_buch": "Offb",
          "les_stelle": "1,17c–18",
          "les_text": "Text von Offb 1,17c–18"
        },
        "Vesper": {
          "les_buch": "Hebr",
          "les_stelle": "8,1b–3a",
          "les_text": "Text von Hebr 8,1b–3a",
          "bitten_e": "o-each-1-Bitten_E",
          "bitten_r": "o-each-1-Bitten_R",
          "bitten": "o-each-1-Bitten"
        }
      },
      "2": {
        "Laudes": {
          "les_buch": "Apg",
          "les_stelle": "13,30–33",
          "les_text": "Text von Apg 13,30–33",
          "bitten_e": "o-each-2-Bitten_E",
          "bitten_r": "o-each-2-Bitten_R",
          "bitten": "o-each-2-Bitten"
        },
        "Non": {
          "les_buch": "Kol",
          "les_stelle": "3,1–2",
          "les_text": "Text von Kol 3,1–2"
        },
        "Sext": {
          "les_buch": "1 Petr",
          "les_stelle": "3,21–22a",
          "les_text": "Text von 1 Petr 3,21–22a"
        },
        "Terz": {
          "les_buch": "vgl. Apg",
          "les_stelle": "4,11–12",
          "les_text": "Text von vgl. Apg 4,11–12"
        },
        "Vesper": {
          "les_buch": "1 Petr",
          "les_stelle": "2,4–5",
          "les_text": "Text von 1 Petr 2,4–5",
          "bitten_e": "o-each-2-Bitten_E",
          "bitten_r": "o-each-2-Bitten_R",
          "bitten": "o-each-2-Bitten"
        }
      },
      "3": {
        "Laudes": {
          "les_buch": "Röm",
          "les_stelle": "6,8–11",
          "les_text": "Text von Röm 6,8–11",
          "bitten_e": "o-each-3-Bitten_E",
          "bitten_r": "o-each-3-Bitten_R",
          "bitten": "o-each-3-Bitten"
        },
        "Non": {
          "les_buch": "Eph",
          "les_stelle": "4,23–24",
          "les_text": "Text von Eph 4,23–24"
        },
        "Sext": {
          "les_buch": "1 Joh",
          "les_stelle": "5,5–6a",
          "les_text": "Text von 1 Joh 5,5–6a"
        },
        "Terz": {
          "les_buch": "Röm",
          "les_stelle": "4,24–25",
          "les_text": "Text von Röm 4,24–25"
        },
        "Vesper": {
          "les_buch": "Hebr",
          "les_stelle": "7,24–27",
          "les_text": "Text von Hebr 7,24–27",
          "bitten_e": "o-each-3-Bitten_E",
          "bitten_r": "o-each-3-Bitten_R",
          "bitten": "o-each-3-Bitten"
        }
      },
      "4": {
        "Laudes": {
          "les_buch": "Röm",
          "les_stelle": "8,10–11",
          "les_text": "Text von Röm 8,10–11",
          "bitten_e": "o-each-4-Bitten_E",
          "bitten_r": "o-each-4-Bitten_R",
          "bitten": "o-each-4-Bitten"
        },
        "Non": {
          "les_buch": "vgl. Kol",
          "les_stelle": "1,12–14",
          "les_text": "Text von vgl. Kol 1,12–14"
        },
        "Sext": {
          "les_buch": "Tit",
          "les_stelle": "3,5b–7",
          "les_text": "Text von Tit 3,5b–7"
        },
        "Terz": {
          "les_buch": "1 Kor",
          "les_stelle": "12,13",
          "les_text": "Text von 1 Kor 12,13"
        },
        "Vesper": {
          "les_buch": "1 Petr",
          "les_stelle": "3,18.22",
          "les_text": "Text von 1 Petr 3,18.22",
          "bitten_e": "o-each-4-Bitten_E",
          "bitten_r": "o-each-4-Bitten_R",
          "bitten": "o-each-4-Bitten"
        }
      },
      "5": {
        "Laudes": {
          "les_buch": "Apg",
          "les_stelle": "5,30–32",
          "les_text": "Text von Apg 5,30–32",
          "bitten_e": "o-each-5-Bitten_E",
          "bitten_r": "o-each-5-Bitten_R",
          "bitten": "o-each-5-Bitten"
        },
        "Non": {
          "les_buch": "1 Kor",
          "les_stelle": "5,7–8",
          "les_text": "Text von 1 Kor 5,7–8"
        },
        "Sext": {
          "les_buch": "Gal",
          "les_stelle": "3,27–28",
          "les_text": "Text von Gal 3,27–28"
        },
        "Terz": {
          "les_buch": "Apg",
          "les_stelle": "2,32.36",
          "les_text": "Text von Apg 2,32.36"
        },
        "Vesper": {
          "les_buch": "Hebr",
          "les_stelle": "5,8–10",
          "les_text": "Text von Hebr 5,8–10",
          "bitten_e": "o-each-5-Bitten_E",
          "bitten_r": "o-each-5-Bitten_R",
          "bitten": "o-each-5-Bitten"
        }
      },
      "6": {
        "Laudes": {
          "les_buch": "Röm",
          "les_stelle": "14,7–9",
          "les_text": "Text von Röm 14,7–9",
          "bitten_e": "o-each-6-Bitten_E",
          "bitten_r": "o-each-6-Bitten_R",
          "bitten": "o-each-6-Bitten"
        },
        "Non": {
          "les_buch": "2 Kor",
          "les_stelle": "5,14–15",
          "les_text": "Text von 2 Kor 5,14–15"
        },
        "Sext": {
          "les_buch": "1 Kor",
          "les_stelle": "15,20–22",
          "les_text": "Text von 1 Kor 15,20–22"
        },
        "Terz": {
          "les_buch": "Röm",
          "les_stelle": "5,10–11",
          "les_text": "Text von Röm 5,10–11"
        },
        "Vesper": {
          "les_buch": "1 Petr",
          "les_stelle": "2,9–10",
          "les_text": "Text von 1 Petr 2,9–10",
          "bitten_e": "o-each-6-Bitten_E",
          "bitten_r": "o-each-6-Bitten_R",
          "bitten": "o-each-6-Bitten"
        }
      },
      "each": {
        "Invitatorium": {
          "ant_0": "Christus ist erstanden; kommt, wir beten ihn an! Halleluja."
        },
        "Komplet": {
          "ant_0": "Halleluja,°halleluja, halleluja.",
          "ant_1": "",
          "ant_2": "",
          "resp1_1": "Herr, auf dich vertraue ich, in deine Hände lege ich mein Leben.",
          "resp1_2": "Halleluja,°halleluja.",
          "marant": 525.0,
          "marant_lat": 526.0
        },
        "Laudes": {
          "hymn_1": 4201.0,
          "hymn_2": 4202.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "resp1_1": "Der Herr ist aus dem Grab erstanden.",
          "resp1_2": "Halleluja,°halleluja.",
          "resp1_3": "Der für uns am Kreuz gehangen."
        },
        "Lesehore": {
          "hymn_1": 4401.0,
          "hymn_2": 4402.0,
          "hymn_3": 4403.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0
        },
        "Non": {
          "ant_0": "Halleluja,°halleluja, halleluja.",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "resp1_0": "Herr, bleibe bei uns. Halleluja.",
          "resp1_1": "Denn es will Abend werden. Halleluja."
        },
        "Sext": {
          "ant_0": "Halleluja,°halleluja, halleluja.",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "resp1_0": "Der Herr ist den Jüngern erschienen. Halleluja.",
          "resp1_1": "Sie sahen ihn und freuten sich."
        },
        "Terz": {
          "ant_0": "Halleluja,°halleluja, halleluja.",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "resp1_0": "Der Herr ist wahrhaft auferstanden. Halleluja.",
          "resp1_1": "Er ist dem Simon erschienen. Halleluja."
        },
        "Vesper": {
          "hymn_1": 4301.0,
          "hymn_2": 4302.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "resp1_1": "Der Herr ist den Jüngern erschienen.",
          "resp1_2": "Halleluja,°halleluja.",
          "resp1_3": "Sie sahen ihn und freuten sich."
        }
      }
    },
    "even": {
      "0": {
        "Laudes": {
          "bitten_e": "o-even-0-Bitten_E",
          "bitten_r": "o-even-0-Bitten_R",
          "bitten": "o-even-0-Bitten"
        },
        "Vesper": {
          "bitten_e": "o-even-0-Bitten_E",
          "bitten_r": "o-even-0-Bitten_R",
          "bitten": "o-even-0-Bitten"
        }
      },
      "1": {
        "Laudes": {
          "bitten_e": "o-even-1-Bitten_E",
          "bitten_r": "o-even-1-Bitten_R",
          "bitten": "o-even-1-Bitten"
        },
        "Vesper": {
          "bitten_e": "o-even-1-Bitten_E",
          "bitten_r": "o-even-1-Bitten_R",
          "bitten": "o-even-1-Bitten"
        }
      },
      "2": {
        "Laudes": {
          "bitten_e": "o-even-2-Bitten_E",
          "bitten_r": "o-even-2-Bitten_R",
          "bitten": "o-even-2-Bitten"
        },
        "Vesper": {
          "bitten_e": "o-even-2-Bitten_E",
          "bitten_r": "o-even-2-Bitten_R",
          "bitten": "o-even-2-Bitten"
        }
      },
      "3": {
        "Laudes": {
          "bitten_e": "o-even-3-Bitten_E",
          "bitten_r": "o-even-3-Bitten_R",
          "bitten": "o-even-3-Bitten"
        },
        "Vesper": {
          "bitten_e": "o-even-3-Bitten_E",
          "bitten_r": "o-even-3-Bitten_R",
          "bitten": "o-even-3-Bitten"
        }
      },
      "4": {
        "Laudes": {
          "bitten_e": "o-even-4-Bitten_E",
          "bitten_r": "o-even-4-Bitten_R",
          "bitten": "o-even-4-Bitten"
        },
        "Vesper": {
          "bitten_e": "o-even-4-Bitten_E",
          "bitten_r": "o-even-4-Bitten_R",
          "bitten": "o-even-4-Bitten"
        }
      },
      "5": {
        "Laudes": {
          "bitten_e": "o-even-5-Bitten_E",
          "bitten_r": "o-even-5-Bitten_R",
          "bitten": "o-even-5-Bitten"
        },
        "Vesper": {
          "bitten_e": "o-even-5-Bitten_E",
          "bitten_r": "o-even-5-Bitten_R",
          "bitten": "o-even-5-Bitten"
        }
      },
      "6": {
        "Laudes": {
          "bitten_e": "o-even-6-Bitten_E",
          "bitten_r": "o-even-6-Bitten_R",
          "bitten": "o-even-6-Bitten"
        },
        "Vesper": {
          "bitten_e": "o-even-6-Bitten_E",
          "bitten_r": "o-even-6-Bitten_R",
          "bitten": "o-even-6-Bitten"
        }
      }
    },
    "last": {
      "0": {
        "Laudes": {},
        "Terz": {
          "les_buch": "1 Kor",
          "les_stelle": "15,3b–5",
          "les_text": "Text von 1 Kor 15,3b–5"
        },
        "Vesper": {}
      },
      "1": {
        "Laudes": {},
        "Terz": {
          "les_buch": "Offb",
          "les_stelle": "1,17c–18",
          "les_text": "Text von Offb 1,17c–18"
        },
        "Vesper": {
          "les_buch": "Röm",
          "les_stelle": "8,14–17",
          "les_text": "Text von Röm 8,14–17"
        }
      },
      "2": {
        "Laudes": {},
        "Terz": {
          "les_buch": "vgl. Apg",
          "les_stelle": "4,11–12",
          "les_text": "Text von vgl. Apg 4,11–12"
        },
        "Vesper": {
          "les_buch": "Röm",
          "les_stelle": "8,26–27",
          "les_text": "Text von Röm 8,26–27"
        }
      },
      "3": {
        "Laudes": {},
        "Terz": {
          "les_buch": "Röm",
          "les_stelle": "4,24–25",
          "les_text": "Text von Röm 4,24–25"
        },
        "Vesper": {
          "les_buch": "1 Kor",
          "les_stelle": "2,9–10",
          "les_text": "Text von 1 Kor 2,9–10"
        }
      },
      "4": {
        "Laudes": {},
        "Terz": {
          "les_buch": "1 Kor",
          "les_stelle": "12,13",
          "les_text": "Text von 1 Kor 12,13"
        },
        "Vesper": {
          "les_buch": "1 Kor",
          "les_stelle": "6,19–20",
          "les_text": "Text von 1 Kor 6,19–20"
        }
      },
      "5": {
        "Laudes": {},
        "Terz": {
          "les_buch": "Apg",
          "les_stelle": "2,32.36",
          "les_text": "Text von Apg 2,32.36"
        },
        "Vesper": {
          "les_buch": "Gal",
          "les_stelle": "5,16.22–23a.25",
          "les_text": "Text von Gal 5,16.22–23a.25"
        }
      },
      "6": {
        "Laudes": {},
        "Terz": {
          "les_buch": "Röm",
          "les_stelle": "5,10–11",
          "les_text": "Text von Röm 5,10–11"
        },
        "Vesper": {
          "les_buch": "Röm",
          "les_stelle": "8,11",
          "les_text": "Text von Röm 8,11"
        }
      },
      "each": {
        "Invitatorium": {
          "ant_0": "Christus, den Herrn, der uns den Heiligen Geist verheißen hat – kommt, wir beten ihn an! Halleluja."
        },
        "Laudes": {
          "hymn_1": 4204.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0
        },
        "Lesehore": {
          "hymn_1": 4404.0,
          "hymn_2": 0.0,
          "hymn_3": 0.0
        },
        "Vesper": {
          "hymn_1": 4304.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "resp1_1": "Der Beistand, den der Vater senden wird, er wird euch alles lehren.",
          "resp1_2": "Halleluja,°halleluja.",
          "resp1_3": "An alles, was ich euch sagte, wird er euch erinnern."
        }
      }
    }
  },
  "p": {
    "1": {
      "0": {
        "Laudes": {
          "hymn_1": 220.0,
          "ps_1": 63.0,
          "ps_2": 160.0,
          "ps_3": 149.0,
          "ant_1": "Mein Gott, in der Frühe halte ich Ausschau nach dir, deine Macht zu sehen und deine Herrlichkeit. Halleluja.",
          "ant_2": "Mitten im Feuer sangen die drei und riefen wie aus einem Mund: Gepriesen sei Gott. Halleluja.",
          "ant_3": "Die Kinder Zions sollen jauchzen über ihren König. Halleluja.",
          "les_buch": "Offb",
          "les_stelle": "7,10.12",
          "les_text": "Die Rettung kommt von unserem Gott, der auf dem Thron sitzt, und von dem Lamm! Amen, Lob und Herrlichkeit, Weisheit und Dank, Ehre und Macht und Stärke unserem Gott in alle Ewigkeit! Amen.",
          "resp1_1": "Christus, du Sohn des lebendigen Gottes,",
          "resp1_2": "erbarme dich unser.",
          "resp1_3": "Du sitzest zur Rechten des Vaters.",
          "ant_ev": "0",
          "bitten_e": "Gepriesen sei Christus, der Herr, der jeden Menschen erleuchtet. Zu ihm lasst uns beten:",
          "bitten_r": "Du bist unser Leben und unser Heil.",
          "bitten": "Herr, du schenkst uns den Morgen dieses Tages;^qlass uns dankbar deine Auferstehung feiern.^pDein Geist geleite uns durch diesen Tag,^qdamit wir vollbringen, was dir gefällt.^pLass uns heute mit Freude am Gottesdienst deiner Gemeinde teilnehmen;^qnähre uns mit deinem Wort und deinem Sakrament.^pErleuchte unser Herz,^qdamit wir deine Wohltaten erkennen.",
          "oration": "0"
        },
        "Lesehore": {
          "hymn_1": 400.0,
          "ps_1": 1.0,
          "ps_2": 2.0,
          "ps_3": 3.0,
          "ant_1": "Dein Kreuz, o Herr, das ist der Baum des Lebens. Halleluja.",
          "ant_2": "Ich habe meinen König eingesetzt auf Zion, meinem heiligen Berg. Halleluja.",
          "ant_3": "Du, Herr, bist ein Schild für mich, du richtest mich auf. Halleluja.",
          "resp0_0": "Das Wort Christi wohne bei euch mit seinem ganzen Reichtum.",
          "resp0_1": "Belehrt und ermahnt einander in aller Weisheit."
        },
        "Non": {
          "les_buch": "Gal",
          "les_stelle": "6,9–10",
          "les_text": "Lasst uns nicht müde werden, das Gute zu tun; denn wenn wir darin nicht nachlassen, werden wir ernten, sobald die Zeit dafür gekommen ist. Deshalb wollen wir, solange wir noch Zeit haben, allen Menschen Gutes tun, besonders aber denen, die mit uns im Glauben verbunden sind.",
          "resp1_0": "Erhöre mich, Herr, ich rufe zu dir.",
          "resp1_1": "Deine Gesetze will ich befolgen.",
          "oration": "0"
        },
        "Sext": {
          "les_buch": "Gal",
          "les_stelle": "6,7b–8",
          "les_text": "Was der Mensch sät, das wird er auch ernten. Wer im Vertrauen auf das Fleisch sät, wird vom Fleisch Verderben ernten; wer aber im Vertrauen auf den Geist sät, wird vom Geist ewiges Leben ernten.",
          "resp1_0": "Herr, dein Wort bleibt auf ewig.",
          "resp1_1": "Deine Treue währt von Geschlecht zu Geschlecht.",
          "oration": "0"
        },
        "Terz": {
          "ps_1": 118.1,
          "ps_2": 118.2,
          "ps_3": 118.3,
          "ant_1": "Gut ist es, sich zu bergen beim Herrn; seine Huld währt ewig. Halleluja.",
          "ant_2": "Meine Stärke und mein Lied ist der Herr. Halleluja.",
          "ant_3": "Ich danke dir, Herr, denn du hast mich erhört. Halleluja.",
          "les_buch": "1 Joh",
          "les_stelle": "4,16",
          "les_text": "Wir haben die Liebe, die Gott zu uns hat, erkannt und gläubig angenommen. Gott ist die Liebe, und wer in der Liebe bleibt, bleibt in Gott und Gott bleibt in ihm.",
          "resp1_0": "Zu deinen Vorschriften neige mein Herz.",
          "resp1_1": "Belebe mich durch dein Wort.",
          "oration": "0"
        },
        "Vesper": {
          "hymn_1": 310.0,
          "ps_1": 110.0,
          "ps_2": 114.0,
          "ps_3": 151.0,
          "ant_1": "Der Herr streckt das Zepter seiner Macht aus vom Zion und herrscht in Ewigkeit. Halleluja.",
          "ant_2": "Die Erde erbebte vor dem Antlitz des Gottes Jakobs. Halleluja.",
          "ant_3": "Der Herr, unser Gott, ist König, er, der Herrscher über das All. Halleluja.",
          "les_buch": "2 Kor",
          "les_stelle": "1,3–4",
          "les_text": "Gepriesen sei der Gott und Vater Jesu Christi, unseres Herrn, der Vater des Erbarmens und der Gott allen Trostes. Er tröstet uns in all unserer Not, damit auch wir die Kraft haben, alle zu trösten, die in Not sind, durch den Trost, mit dem auch wir von Gott getröstet werden.",
          "resp1_1": "Gepriesen bist du, Herr, am Gewölbe des Himmels.",
          "resp1_2": "Gerühmt und verherrlicht in Ewigkeit.",
          "resp1_3": "Gepriesen ist dein herrlicher Name.",
          "ant_ev": "0",
          "bitten_e": "Lasst uns beten zu Christus, dem Herrn, denn er ist das Haupt seiner Kirche:",
          "bitten_r": "Christus, erhöre uns.",
          "bitten": "Hilf deiner Kirche, die Spaltungen zu überwinden;^qmache sie zum Zeichen der Einheit für alle Völker.^pStehe unserem Papst N. und allen Bischöfen bei;^qschenke ihnen Eintracht, Liebe und Frieden.^pGib, dass die Christen immer enger mit dir verbunden werden^qund durch ihr Leben dich als den Herrn bezeugen.^pGib der Welt den Frieden,^qgib den Völkern Ruhe und Sicherheit.^pLass unsere Verstorbenen auferstehen zum ewigen Leben;^qschenke auch uns die Freude deiner Heiligen.",
          "oration": "0"
        }
      },
      "1": {
        "Laudes": {
          "hymn_1": 211.0,
          "ps_1": 5.0,
          "ps_2": 161.0,
          "ps_3": 29.0,
          "ant_1": "Herr, ich flehe zu dir; am Morgen hörst du mein Rufen.",
          "ant_2": "Herr, unser Gott, wir rühmen deinen herrlichen Namen.",
          "ant_3": "Werft euch nieder vor dem Herrn in seinem heiligen Tempel.",
          "les_buch": "2 Thess",
          "les_stelle": "3,10b–13",
          "les_text": "Wer nicht arbeiten will, soll auch nicht essen. Wir hören aber, dass einige von euch ein unordentliches Leben führen und alles Mögliche treiben, nur nicht arbeiten. Wir ermahnen sie und gebieten ihnen im Namen Jesu Christi, des Herrn, in Ruhe ihrer Arbeit nachzugehen und ihr selbst verdientes Brot zu essen. Ihr aber, Brüder, werdet nicht müde, Gutes zu tun.",
          "resp1_1": "Gepriesen sei der Herr",
          "resp1_2": "von Ewigkeit zu Ewigkeit.",
          "resp1_3": "Er allein tut große Wunder",
          "ant_ev": "Gepriesen sei der Herr, unser Gott.",
          "bitten_e": "Gepriesen sei Christus, unser Erlöser. Zu ihm lasst uns beten:",
          "bitten_r": "Schenke uns deinen Geist.",
          "bitten": "Herr, hilf uns, heute ohne Sünde vor dir zu leben,^qdamit wir am Abend dir danken können.^pSchenke uns das Licht deines Geistes^qund segne unser Tagewerk.^pLass dein Antlitz über uns leuchten^qund schütze uns mit starker Hand.^pSteh allen bei, die wir dir heute anempfehlen;^qnimm unser Beten gnädig an.",
          "oration": "Herr, unser Gott, komm unserem Beten und Arbeiten mit deiner Gnade zuvor und begleite es, damit alles, was wir beginnen, bei dir seinen Anfang nehme und durch dich vollendet werde. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "hymn_1": 401.0,
          "hymn_nacht": 405.0,
          "ps_1": 6.0,
          "ps_2": 9.1,
          "ps_3": 9.2,
          "ant_1": "Herr, in deiner Huld bring mir Hilfe.^ö",
          "ant_2": "Für den Bedrückten wird der Herr zur Burg, zur Burg in Zeiten der Not.^ö",
          "ant_3": "Deinen Ruhm will ich verkünden in den Toren von Zion.^ö",
          "resp0_0": "Gib mir Einsicht, o Herr, und ich folge deiner Weisung.",
          "resp0_1": "Ich halte mich an sie aus ganzem Herzen."
        },
        "Non": {
          "les_buch": "1 Petr",
          "les_stelle": "1,17b–19",
          "les_text": "Führt, solange ihr in der Fremde seid, ein Leben in Gottesfurcht! Ihr wisst, dass ihr aus eurer sinnlosen, von den Vätern ererbten Lebensweise nicht um einen vergänglichen Preis losgekauft wurdet, nicht um Silber oder Gold, sondern mit dem kostbaren Blut Christi, des Lammes ohne Fehl und Makel.",
          "resp1_0": "Erlöse mich, Herr, und sei mir gnädig.",
          "oration": "Gott, unser Herr, zur neunten Stunde, als Petrus und Johannes zum Tempel hinaufgingen, um zu beten, bitten auch wir dich im Namen Jesu: Schenke allen, die diesen Namen anrufen, dein Heil. Durch ihn, Christus, unseren Herrn."
        },
        "Sext": {
          "les_buch": "Jak",
          "les_stelle": "1,19b–20.26",
          "les_text": "Jeder Mensch soll schnell bereit sein zu hören, aber zurückhaltend im Reden und nicht schnell zum Zorn bereit; denn im Zorn tut der Mensch nicht das, was vor Gott recht ist. Wer meint, er diene Gott, aber seine Zunge nicht im Zaum hält, der betrügt sich selbst und sein Gottesdienst ist wertlos.",
          "resp1_0": "Allezeit will ich den Herrn lobpreisen.",
          "resp1_1": "Sein Lob sei stets in meinem Munde.",
          "oration": "Gott, du bist Herr und Hüter von Weinberg und Ernte; du teilst die Arbeit zu und gibst gerechten Lohn. Verleihe uns die Kraft, deine Fügung anzunehmen und die Last des Tages ohne Murren zu tragen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Terz": {
          "ps_1": 19.2,
          "ps_2": 7.1,
          "ps_3": 7.2,
          "ant_1": "Die Weisung des Herrn erfreut das Herz und erleuchtet die Augen.",
          "ant_2": "Der Herr wird sich erheben und die Völker richten nach Gerechtigkeit.",
          "ant_3": "Gott ist ein gerechter Richter, er rettet die Menschen mit redlichem Herzen.",
          "les_buch": "Röm",
          "les_stelle": "13,8.10",
          "les_text": "13,8.10",
          "resp1_0": "Verstoß mich nicht, o Herr, sei du mein Helfer.",
          "resp1_1": "Verlass mich nicht, du Gott meines Heiles.",
          "oration": "Gütiger Gott und Vater, du hast die Menschen zu gemeinsamer Arbeit berufen, damit sie einander ergänzen und jeder die Fähigkeit entfaltet, die du ihm gegeben hast, zum Wohle aller. Gib, dass wir unser Werk als deine Kinder verrichten, beseelt von deinem Geist und von der Liebe zu allen Menschen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Vesper": {
          "hymn_1": 311.0,
          "ps_1": 11.0,
          "ps_2": 15.0,
          "ps_3": 152.0,
          "ant_1": "Die Augen des Herrn schauen herab, seine Blicke prüfen die Menschen.",
          "ant_2": "Selig, die reinen Herzens sind: sie werden Gott schauen.",
          "ant_3": "Gott hat uns erwählt, seine Kinder zu werden durch Jesus Christus.",
          "les_buch": "Kol",
          "les_stelle": "1,9–11",
          "les_text": "Wir hören nicht auf, inständig für euch zu beten, dass ihr in aller Weisheit und Einsicht, die der Geist schenkt, den Willen des Herrn ganz erkennt. Denn ihr sollt ein Leben führen, das des Herrn würdig ist und in allem sein Gefallen findet. Ihr sollt Frucht bringen in jeder Art von guten Werken und wachsen in der Erkenntnis Gottes. Er gebe euch in der Macht seiner Herrlichkeit viel Kraft, damit ihr in allem Geduld und Ausdauer habt.",
          "resp1_1": "Heile mich, o Herr,",
          "resp1_2": "ich habe gegen dich gesündigt.",
          "resp1_3": "Erbarme dich meiner und sei mir gnädig,",
          "ant_ev": "Meine Seele preist die Größe des Herrn; denn auf die Niedrigkeit seiner Magd hat er geschaut.",
          "bitten_e": "Lasst uns beten zu Gott, dem allmächtigen Vater, der die Menschen liebt:",
          "bitten_r": "Erbarme dich über dein Volk.",
          "bitten": "Herr, rette dein Volk^qund segne dein Erbe.^pFühre die Christen zur Einheit zusammen,^qdamit die Welt an Christus glauben kann.^pSegne unsere Freunde und Bekannten;^qsei ihnen nahe mit deiner Liebe.^pStehe den Sterbenden bei^qund lass sie dein Heil schauen.^pSei unseren Verstorbenen gnädig^qund rufe sie zum Gastmahl des ewigen Lebens.",
          "oration": "Dich, großer Gott, preise unser Lobgesang. Um unseres Heiles willen hast du auf die Niedrigkeit der Jungfrau Maria geschaut und sie erhöht. Erhöhe auch uns und schenke uns die Fülle der Erlösung. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "2": {
        "Invitatorium": {
          "ps_24": 0
        },
        "Laudes": {
          "hymn_1": 212.0,
          "ps_1": 24.0,
          "ps_2": 162.0,
          "ps_3": 33.0,
          "ant_1": "Wer reine Hände hat und ein lauteres Herz, darf hinaufziehen zum Berg des Herrn.",
          "ant_2": "Preist den Herrn der Gerechtigkeit, rühmt den ewigen König.",
          "ant_3": "Ihr Gerechten, jubelt vor dem Herrn; für die Frommen ziemt es sich, Gott zu loben.",
          "les_buch": "Röm",
          "les_stelle": "13,11b–13a",
          "les_text": "Die Stunde ist gekommen, sich vom Schlaf zu erheben. Denn jetzt ist das Heil uns näher als zu der Zeit, da wir gläubig wurden. Die Nacht ist vorgerückt, der Tag ist nahe. Darum lasst uns ablegen die Werke der Finsternis und anlegen die Waffen des Lichts! Lasst uns ehrenhaft leben wie am Tage.",
          "resp1_1": "Gott ist mein Helfer,",
          "resp1_2": "auf ihn allein will ich vertrauen.",
          "resp1_3": "Meine Zuflucht und mein Retter,",
          "ant_ev": "Einen starken Retter hat der Herr uns erweckt, wie er verheißen hat durch den Mund seiner Propheten.",
          "bitten_e": "Gepriesen sei Jesus Christus, unser Hoherpriester. Zu ihm lasst uns beten:",
          "bitten_r": "Herr, unser Gott und Heiland.",
          "bitten": "Du hast uns Anteil an deinem Priestertum gegeben;^qhilf uns, das Opfer des Lobes darzubringen.^pGib, dass wir deine Gebote halten,^qdamit wir in dir bleiben und du in uns.^pSchenke uns die Gabe der Weisheit,^qdamit wir den Auftrag dieses Tages erkennen.^pGib, dass wir heute niemand kränken^qund gut sind zu allen, die mit uns leben.",
          "oration": "Herr, neige dein Ohr und vernimm das Morgengebet deiner Gläubigen. Erhelle und heile, was in der Tiefe unseres Herzens krank ist, damit kein Begehren uns in seinem Bann gefangenhält, die wir erleuchtet wurden durch das Licht der himmlischen Gnade. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "hymn_1": 402.0,
          "hymn_nacht": 2402.0,
          "ps_1": 10.1,
          "ps_2": 10.2,
          "ps_3": 12.0,
          "ant_1": "Der Herr verschafft den Armen ihr Recht.^ö",
          "ant_2": "Herr, du schaust auf Unheil und Kummer, du bist den Verwaisten ein Helfer.^ö",
          "ant_3": "Die Worte des Herrn sind lautere Worte, Silber geschmolzen im Ofen.^ö",
          "resp0_0": "Die Demütigen leitet der Herr nach seinem Recht.",
          "resp0_1": "Die Gebeugten lehrt er seinen Weg."
        },
        "Non": {
          "les_buch": "Ijob",
          "les_stelle": "5,17–18",
          "les_text": "Wohl dem Mann, den Gott zurechtweist! Die Zucht des Allmächtigen verschmähe nicht! Denn er verwundet und er verbindet, er schlägt, doch seine Hände heilen auch.",
          "resp1_0": "Handle an deinem Knecht nach deiner Huld.",
          "resp1_1": "Lehre mich deine Gesetze.",
          "oration": "Gott, um die neunte Stunde hast du dem Hauptmann Kornelius deinen Engel geschickt, dass er ihm den Weg des Heiles weise. Mach uns bereit, in der Gemeinschaft der Kirche mitzuwirken an der Rettung der Menschen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Sext": {
          "les_buch": "Spr",
          "les_stelle": "3,13–15",
          "les_text": "Glücklich der Mann, der Weisheit gefunden, der Mann, der Einsicht gewonnen hat. Denn sie zu erwerben ist besser als Silber, sie zu gewinnen ist besser als Gold. Sie übertrifft die Perlen an Wert, keine kostbaren Steine kommen ihr gleich.",
          "resp1_0": "Ein lauteres Herz gefällt dir, o Herr.",
          "resp1_1": "In der Stille lehrst du mich Weisheit.",
          "oration": "Gütiger Gott, als Petrus um die sechste Stunde betete, hast du ihn belehrt, dass das Heil allen Völkern zuteil werden soll. Bewirke durch deine Gnade, dass unser Tagewerk dir gefällt und dem Heilsplan deiner Liebe dient. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Terz": {
          "ps_1": 119.001,
          "ps_2": 13.0,
          "ps_3": 14.0,
          "ant_1": "Selig, die leben nach der Weisung des Herrn.",
          "ant_2": "Mein Herz frohlockt über deine Hilfe.",
          "ant_3": "Alle waren in Schuld verstrickt, doch Gott hat sich aller erbarmt.",
          "les_buch": "Jer",
          "les_stelle": "17,7–8",
          "les_text": "Gesegnet der Mann, der auf den Herrn sich verlässt und dessen Hoffnung der Herr ist. Er ist wie ein Baum, der am Wasser gepflanzt ist und am Bach seine Wurzeln ausstreckt: Er hat nichts zu fürchten, wenn Hitze kommt; seine Blätter bleiben grün; auch in einem trockenen Jahr ist er ohne Sorge, unablässig bringt er seine Früchte.",
          "resp1_0": "Den Redlichen versagt der Herr kein Gut.",
          "resp1_1": "Herr der Heerscharen, wohl dem, der dir vertraut.",
          "oration": "Allmächtiger, ewiger Gott. Um die dritte Stunde hast du deinen Heiligen Geist über die Apostel ausgegossen. Sende den Geist der Liebe auch in unser Herz, damit wir in Treue für dich Zeugnis geben vor den Menschen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Vesper": {
          "hymn_1": 312.0,
          "ps_1": 20.0,
          "ps_2": 21.0,
          "ps_3": 153.0,
          "ant_1": "Der Herr hat seinem Gesalbten den Sieg verliehen.",
          "ant_2": "Herr, deiner siegreichen Kraft wollen wir singen und spielen.",
          "ant_3": "Du hast uns, Herr, zu Königen gemacht und zu Priestern für unseren Gott.",
          "les_buch": "1 Joh",
          "les_stelle": "3,1a–2",
          "les_text": "Seht, wie groß die Liebe ist, die der Vater uns geschenkt hat: Wir heißen Kinder Gottes, und wir sind es. Liebe Brüder, jetzt sind wir Kinder Gottes. Aber was wir sein werden, ist noch nicht offenbar geworden. Wir wissen, dass wir ihm ähnlich sein werden, wenn er offenbar wird; denn wir werden ihn sehen, wie er ist.",
          "resp1_1": "Fest wie der Himmel steht dein Wort,",
          "resp1_2": "dein Wort, o Herr, bleibt ewig.",
          "resp1_3": "Deine Treue währt durch alle Geschlechter,",
          "ant_ev": "Mein Geist jubelt über Gott, meinen Herrn und meinen Retter.",
          "bitten_e": "Lasst uns beten zu Jesus Christus, dem Heiland der Welt:",
          "bitten_r": "Herr, erhöre uns.",
          "bitten": "Schau gnädig herab auf die Völker der Erde^qund stehe denen bei, die für sie Verantwortung tragen.^pDu hast uns die Freiheit der Kinder Gottes erworben;^qerlöse die Menschen aus der Knechtschaft der Sünde.^pSegne die Kinder (dieser Gemeinde)^qund lass sie zu guten Christen heranwachsen.^pGib den jungen Menschen (unserer Gemeinde) das Verlangen, das Rechte zu tun^qund dir zu folgen, wenn du sie rufst.^pNimm unsere Verstorbenen auf in dein Reich^qund stärke in uns die Hoffnung auf das ewige Leben.",
          "oration": "Wir danken dir, allmächtiger Vater, für diesen Abend. Voll Vertrauen heben wir unsere Hände zu dir empor; nimm unser Beten an als ein Opfer, das dir gefällt. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "3": {
        "Laudes": {
          "hymn_1": 213.0,
          "ps_1": 36.0,
          "ps_2": 163.0,
          "ps_3": 47.0,
          "ant_1": "In deinem Licht, o Gott, schauen wir das Licht.",
          "ant_2": "Herr, du bist groß und wunderbar in deiner Macht.",
          "ant_3": "Jauchzet Gott zu mit lautem Jubel.",
          "les_buch": "Tob",
          "les_stelle": "4,15a–16.18–19",
          "les_text": "Was dir selbst verhasst ist, das mute auch einem anderen nicht zu! Gib dem Hungrigen von deinem Brot und dem Nackten von deinen Kleidern. Such nur bei Verständigen Rat; einen brauchbaren Ratschlag verachte nicht! Preise Gott, den Herrn, zu jeder Zeit; bitte ihn, dass dein Weg geradeaus führt und dass alles, was du tust und planst, ein gutes Ende nimmt.",
          "resp1_1": "Zu deinen Geboten neige mein Herz,",
          "resp1_2": "deinem Gesetz will ich folgen.",
          "resp1_3": "Belebe mich durch deine Weisung.",
          "ant_ev": "Vollende an uns dein Erbarmen, o Herr, und denk an deinen heiligen Bund.",
          "bitten_e": "Gepriesen sei Christus, der unser Bruder geworden ist. Zu ihm lasst uns beten:",
          "bitten_r": "Herr Jesus Christus, steh uns bei.",
          "bitten": "Am Beginn dieses Tages gedenken wir deiner Auferstehung;^qgib uns Zuversicht für den ganzen Tag.^pDu schenkst uns diesen neuen Tag zu unserem Heil;^qlass uns ihn zu deiner Ehre vollenden.^pLehre uns heute, in allen Menschen dir zu begegnen^qund in den Armen und Betrübten dich zu erkennen.^pLass uns heute mit allen in Frieden leben^qund keinem Böses mit Bösem vergelten.",
          "oration": "Erhöre uns, Gott, unser Heiland, und gib, dass wir in deinem Lichte leben und die Wahrheit tun; denn als Kinder des Lichtes sind wir aus dir geboren. Mache uns zu deinen Zeugen unter den Menschen. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "hymn_1": 403.0,
          "hymn_nacht": 1402.0,
          "ps_1": 18.1,
          "ps_2": 18.2,
          "ps_3": 18.3,
          "ant_1": "Ich will dich rühmen, Herr, meine Stärke.^ö",
          "ant_2": "Der Herr befreite mich, denn er hatte an mir Gefallen.^ö",
          "ant_3": "Herr, lass meine Leuchte erstrahlen, mach meine Finsternis hell.^ö",
          "resp0_0": "Alle staunten über die Kraft seiner Rede.",
          "resp0_1": "Über die Worte aus seinem Mund."
        },
        "Non": {
          "les_buch": "Jak",
          "les_stelle": "4,7–8a.10",
          "les_text": "Ordnet euch Gott unter, leistet dem Teufel Widerstand; dann wird er vor euch fliehen. Sucht die Nähe Gottes; dann wird er sich euch nähern. Demütigt euch vor dem Herrn; dann wird er euch erhöhen.",
          "resp1_0": "Das Auge des Herrn ruht auf allen, die ihn fürchten.",
          "resp1_1": "Die Ausschau halten nach seine Güte.",
          "oration": "Herr Jesus Christus, am Kreuz hast du die Arme ausgebreitet, um alle Menschen zu retten. Lass unsere Werke dir gefallen und sichtbar machen, dass du die Welt erlöst hast. Der du lebst und herrschest in alle Ewigkeit."
        },
        "Sext": {
          "les_buch": "1 Petr",
          "les_stelle": "1,15–16",
          "les_text": "Wie er, der euch berufen hat, heilig ist, so soll auch euer ganzes Leben heilig werden. Denn es heißt in der Schrift: Seid heilig, denn ich bin heilig.",
          "resp1_0": "Deine Priester sollen sich bekleiden mit Gerechtigkeit.",
          "resp1_1": "Deine Frommen sollen jauchzen und jubeln.",
          "oration": "Allmächtiger, gütiger Gott, in der Mitte des Tages lässt du uns innehalten und zur Ruhe kommen. Schau gnädig auf unsere Arbeit. Mache gut, was wir falsch gemacht haben und gib, dass am Abend unser ganzes Tagewerk dir gefallen kann. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Terz": {
          "ps_1": 119.009,
          "ps_2": 17.1,
          "ps_3": 17.2,
          "ant_1": "Gepriesen seist du, Herr; lehre mich deine Gesetze.",
          "ant_2": "Herr, lenke meine Schritte auf deinem Weg.",
          "ant_3": "Erhebe dich, Herr, und rette mich.",
          "les_buch": "1 Petr",
          "les_stelle": "1,13–14",
          "les_text": "Umgürtet euch und macht euch bereit! Seid nüchtern und setzt eure Hoffnung ganz auf die Gnade, die euch bei der Offenbarung Jesu Christi geschenkt wird! Seid gehorsame Kinder und lasst euch nicht mehr von euren Begierden treiben wie früher, in der Zeit eurer Unwissenheit!",
          "resp1_0": "Zeige mir, Herr, deine Wege.",
          "resp1_1": "Lehre mich deine Pfade.",
          "oration": "Herr, heiliger Vater, Gott, auf dessen Treue wir bauen, du hast den verheißenen Geist gesandt, um die Menschen zusammenzuführen, die durch die Sünde getrennt sind. Gib, dass wir die Einheit und den Frieden als deinen Auftrag erkennen und nach Kräften fördern. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Vesper": {
          "hymn_1": 313.0,
          "ps_1": 27.1,
          "ps_2": 27.2,
          "ps_3": 154.0,
          "ant_1": "Der Herr ist mein Licht und mein Heil: Vor wem sollte ich mich fürchten?",
          "ant_2": "Dein Angesicht, Herr, will ich suchen; verbirg nicht dein Gesicht vor mir.",
          "ant_3": "Er ist der Erstgeborene der ganzen Schöpfung, in allem hat er den Vorrang.",
          "les_buch": "Jak",
          "les_stelle": "1,22.25",
          "les_text": "Hört das Wort nicht nur an, sondern handelt danach; sonst betrügt ihr euch selbst. Wer sich aber in das vollkommene Gesetz der Freiheit vertieft und an ihm festhält, wer es nicht nur hört, um es wieder zu vergessen, sondern danach handelt, der wird durch sein Tun selig sein.",
          "resp1_1": "Herr, auf dich vertraue ich,",
          "resp1_2": "erlöse mich und sei mir gnädig.",
          "resp1_3": "Raff mich nicht hinweg mit den Sündern, lass mich nicht zu Grunde gehn.",
          "ant_ev": "Großes hat an mir getan der Mächtige, sein Name ist heilig.",
          "bitten_e": "Lasst uns zu Gott, dem Vater, beten, der für sein Volk in Liebe sorgt:",
          "bitten_r": "Wir bitten dich, erhöre uns.",
          "bitten": "Herr, gedenke deiner Kirche^qund bewahre sie vor aller Spaltung.^pGib, dass die Völker dich erkennen^qund den du gesandt hast: Jesus Christus, deinen Sohn.^pErbarme dich derer, die uns nahestehen;^qschenke ihnen Leben und Segen in Fülle.^pTröste die Mühseligen und Beladenen;^qschaffe Recht den Entrechteten.^pÖffne denen, die heute gestorben sind, die Tür deines Hauses;^qnimm sie auf in die Seligkeit des Himmels.",
          "oration": "Höre unser Gebet, o Herr, und beschütze uns bei Tag und Nacht. Wir sind dem Wandel der Zeit unterworfen; schenke uns festen Halt in dir, dem unwandelbaren Gott. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "4": {
        "Laudes": {
          "hymn_1": 214.0,
          "ps_1": 57.0,
          "ps_2": 164.0,
          "ps_3": 48.0,
          "ant_1": "Wacht auf, Harfe und Saitenspiel, ich will das Morgenrot wecken.",
          "ant_2": "So spricht der Herr: Mein Volk wird satt an meinen Gaben.",
          "ant_3": "Groß ist der Herr und hoch zu preisen in der Stadt unseres Gottes.",
          "les_buch": "Jes",
          "les_stelle": "66,1–2",
          "les_text": "So spricht der Herr: Der Himmel ist mein Thron und die Erde der Schemel für meine Füße. Was wäre das für ein Haus, das ihr mir bauen könntet, was wäre das für ein Ort, an dem ich ausruhen könnte? Denn all das hat meine Hand gemacht, es gehört mir ja schon – Spruch des Herrn. Ich blicke auf den Armen und Zerknirschten und auf den, der zittert vor meinem Wort.",
          "resp1_1": "Aus ganzem Herzen rufe ich,",
          "resp1_2": "erhöre mich und sei mir gnädig.",
          "resp1_3": "Herr, deine Weisung will ich befolgen.",
          "ant_ev": "Dienet dem Herrn in Heiligkeit, denn er befreit uns aus der Hand unserer Feinde.",
          "bitten_e": "Gepriesen sei Christus, der uns allezeit nahe ist. Zu ihm lasst uns beten:",
          "bitten_r": "Christus, erhöre uns.",
          "bitten": "Du schenkst uns diesen neuen Tag;^qmach unsere Herzen hell in deinem Licht.^pLass uns schon am Morgen dein Erbarmen erfahren;^qdie Freude an dir sei unsere Kraft den ganzen Tag.^pGib, dass wir heute deinem Beispiel folgen^qund gut sind zu allen Menschen.^pBekehre unsere Herzen zu dir;^qbewahre uns heute vor jeder Sünde.",
          "oration": "Allmächtiger, ewiger Gott, am Abend, am Morgen und am Mittag preisen wir deine göttliche Herrlichkeit und bitten: Vertreibe aus unserem Herzen die Finsternis der Sünde, damit wir zum wahren Licht gelangen, zu Christus, deinem Sohn, unserem Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "hymn_1": 401.0,
          "hymn_nacht": 405.0,
          "ps_1": 18.4,
          "ps_2": 18.5,
          "ps_3": 18.6,
          "ant_1": "Ein Schild ist der Herr für alle, die sich bei ihm bergen.^ö",
          "ant_2": "Herr, du umgürtest mich mit Kraft, deine Rechte stützt mich.^ö",
          "ant_3": "Es lebt der Herr, gepriesen sei der Gott meines Heils.^ö",
          "resp0_0": "Herr, öffne mir die Augen.",
          "resp0_1": "Für das Wunderbare an deiner Weisung."
        },
        "Non": {
          "les_buch": "Am",
          "les_stelle": "9,6",
          "les_text": "Er erbaut seine Hallen im Himmel und gründet sein Gewölbe auf die Erde; er ruft das Wasser des Meeres und gießt es aus über die Erde – Jahwe ist sein Name.",
          "resp1_0": "Die Himmel rühmen Gottes Herrlichkeit.",
          "resp1_1": "Vom Werk seiner Hände kündet das Firmament.",
          "oration": "Herr, gib uns die Kraft, dem Leidensmut deines eingeborenen Sohnes zu folgen und die Widrigkeiten des Lebens in Geduld zu ertragen. Darum bitten wir durch ihn, Christus, unseren Herrn."
        },
        "Sext": {
          "les_buch": "Am",
          "les_stelle": "5,8",
          "les_text": "Er hat das Siebengestirn und den Orion erschaffen; er verwandelt die Finsternis in den hellen Morgen, er verdunkelt den Tag zur Nacht, er ruft das Wasser des Meeres und gießt es aus über die Erde – Jahwe ist sein Name.",
          "resp1_0": "Hoheit und Pracht sind vor seinem Angesicht.",
          "resp1_1": "Macht und Glanz erfüllen sein Heiligtum.",
          "oration": "Allmächtiger, ewiger Gott, bei dir gibt es keine Finsternis, denn du wohnst im Licht. Sende einen Strahl deines Lichtes in unser Herz, damit wir den Sinn deiner Gebote erkennen und bereitwillig deine Wege gehen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Terz": {
          "ps_1": 119.017,
          "ps_2": 25.1,
          "ps_3": 25.2,
          "ant_1": "Öffne mir die Augen, Herr, für das Wunderbare an deiner Weisung.",
          "ant_2": "Herr, führe mich in deiner Treue, auf dich hoffe ich allezeit.",
          "ant_3": "Wende dich mir zu und sei mir gnädig, denn ich bin einsam und gebeugt.",
          "les_buch": "Am",
          "les_stelle": "4,13",
          "les_text": "Siehe, er formt die Berge, er erschafft den Wind, er verkündet den Menschen, was er im Sinn hat, er macht das Morgenrot und die Finsternis, er schreitet über die Höhen der Erde dahin – Jahwe, Gott der Heere, ist sein Name.",
          "resp1_0": "Preiset den Herrn, all ihr Werke des Herrn.",
          "resp1_1": "Lobt und erhebt ihn in Ewigkeit.",
          "oration": "Herr und Gott, als die Apostel um die dritte Stunde zum Gebet versammelt waren, hast du ihnen den Heiligen Geist geschenkt. Mache auch uns zu einer Wohnstatt deines Geistes. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Vesper": {
          "hymn_1": 314.0,
          "ps_1": 30.0,
          "ps_2": 32.0,
          "ps_3": 155.0,
          "ant_1": "Ich rief zu dir, und du hast mich geheilt. Herr, mein Gott, ich will dir danken in Ewigkeit.",
          "ant_2": "Selig der Mensch, dem der Herr die Schuld nicht zur Last legt.",
          "ant_3": "Macht und Ehre und Königtum hat Gott ihm verliehen. Alle Völker werden ihm dienen.",
          "les_buch": "1 Petr",
          "les_stelle": "1,6–9",
          "les_text": "Ihr seid voll Freude, obwohl ihr jetzt vielleicht kurze Zeit unter mancherlei Prüfungen leiden müsst. Dadurch soll sich euer Glaube bewähren, und es wird sich zeigen, dass er wertvoller ist als Gold, das im Feuer geprüft wurde und doch vergänglich ist. So wird eurem Glauben Lob, Herrlichkeit und Ehre zuteil bei der Offenbarung Jesu Christi. Ihn habt ihr nicht gesehen, und dennoch liebt ihr ihn; ihr seht ihn auch jetzt nicht; aber ihr glaubt an ihn und jubelt in unsagbarer, von himmlischer Herrlichkeit verklärter Freude, da ihr das Ziel des Glaubens erreichen werdet: euer Heil.",
          "resp1_1": "Preise den Herrn, Jerusalem,",
          "resp1_2": "er nährte dich mit bestem Weizen.",
          "resp1_3": "Mit Honig aus dem Felsen hat er dich gesättigt.",
          "ant_ev": "Gott stürzt die Mächtigen vom Thron und erhöht die Niedrigen.",
          "bitten_e": "Lasst uns beten zu Gott, denn er ist der Grund unserer Hoffnung:",
          "bitten_r": "Herr, erhöre unser Gebet.",
          "bitten": "Du hast mit deinem Volk einen ewigen Bund geschlossen;^qgib, dass es allezeit deiner Taten gedenkt.^pStärke den Glauben der Bischöfe, Priester und Diakone;^qbewahre sie in deiner Liebe.^pSende Arbeiter in deine Ernte,^qdamit dein Name den Völkern verkündet wird.^pSteh denen bei, die für Staat und Gesellschaft Verantwortung tragen;^qgib, dass sie sich nicht vergebens mühen.^pLass unsere verstorbenen Verwandten und Wohltäter bei dir geborgen sein^qund stärke in uns die Hoffnung, auf ewig bei dir zu sein.",
          "oration": "Gott, du bist unser Licht in der Nacht und schenkst uns nach der Finsternis einen neuen Tag. Beschütze uns vor der Macht des bösen Feindes, damit wir heil durch das Dunkel der kommenden Nacht gelangen und am Morgen vor deinem Angesicht dir Dank sagen können. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "5": {
        "Invitatorium": {
          "ps_100": 0
        },
        "Laudes": {
          "hymn_1": 215.0,
          "ps_1": 51.0,
          "ps_2": 165.0,
          "ps_3": 100.0,
          "ant_1": "Gott, du nimmst das Opfer deines Gerechten an auf deinem Altar.",
          "ant_2": "Alle Nachkommen Israels bekommen ihr Recht und erlangen Ruhm durch den Herrn.",
          "ant_3": "Kommt mit Jubel vor das Antlitz des Herrn.",
          "les_buch": "Eph",
          "les_stelle": "4,29–32",
          "les_text": "Über eure Lippen komme kein böses Wort, sondern nur ein gutes, das den, der es braucht, stärkt und dem, der es hört, Nutzen bringt. Beleidigt nicht den Heiligen Geist Gottes, dessen Siegel ihr tragt für den Tag der Erlösung. Jede Art von Bitterkeit, Wut, Zorn, Geschrei und Lästerung und alles Böse verbannt aus eurer Mitte! Seid gütig zueinander, seid barmherzig, vergebt einander, weil auch Gott euch durch Christus vergeben hat.",
          "resp1_1": "Lass mich am Morgen deine Huld erfahren,",
          "resp1_2": "denn auf dich vertraue ich.",
          "resp1_3": "Zu dir erheb' ich meine Seele; zeig mir den Weg, den ich gehen soll.",
          "ant_ev": "Der Herr hat sein Volk besucht und ihm Erlösung geschaffen.",
          "bitten_e": "Gepriesen sei Jesus Christus, der durch sein Kreuz das Heil gebracht hat. Zu ihm lasst uns beten:",
          "bitten_r": "Schenke uns dein Erbarmen.",
          "bitten": "Christus, du hast durch deinen Tod die Welt hell gemacht;^qvertreibe das Dunkel aus unseren Herzen.^pWende dein Angesicht ab von unseren Sünden^qund tilge all unsere Schuld.^pWache heute über unseren Gedanken, Worten und Werken,^qdamit wir dir gefallen können.^pRette uns durch dein Kreuz und deine Auferstehung;^qschenke uns in Schmerz und Leid den Trost deines Geistes.",
          "oration": "Gott, durch das Licht deines Wortes vertreibst du das Dunkel der Unwissenheit. Mehre in unserem Herzen die Kraft des Glaubens, damit das Feuer, das deine Gnade in uns entfacht hat, durch keine Anfechtung ausgelöscht wird. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "hymn_1": 402.0,
          "hymn_nacht": 2402.0,
          "ps_1": 35.1,
          "ps_2": 35.2,
          "ps_3": 35.3,
          "ant_1": "Erhebe dich, Herr, und komm mir zu Hilfe.^ö",
          "ant_2": "Tritt ein für mein Recht, denn du bist mächtig.^ö",
          "ant_3": "Deine Gerechtigkeit will ich verkünden den ganzen Tag.^ö",
          "resp0_0": "Mein Sohn, bewahre meine Worte.",
          "resp0_1": "Beachte meine Gebote und du wirst leben."
        },
        "Non": {
          "les_buch": "Kol",
          "les_stelle": "3,12–13",
          "les_text": "Ihr seid von Gott geliebt, seid seine auserwählten Heiligen; darum bekleidet euch mit aufrichtigem Erbarmen, mit Güte, Demut, Milde, Geduld! Ertragt euch gegenseitig und vergebt einander, wenn einer dem andern etwas vorzuwerfen hat! Wie der Herr euch vergeben hat, so vergebt auch ihr!",
          "resp1_0": "Barmherzig und gnädig ist der Herr.",
          "resp1_1": "Langmütig und reich an Güte.",
          "oration": "Herr Jesus Christus, um die neunte Stunde hast du dem reumütigen Schächer vom Marterpfahl des Kreuzes aus dein Reich versprochen. Wir bekennen dir, dass wir Sünder sind und bitten dich voll Vertrauen: Lass auch uns nach dem Tod bei dir im Paradiese sein. Der du lebst und herrschest in alle Ewigkeit."
        },
        "Sext": {
          "les_buch": "2 Kor",
          "les_stelle": "13,4",
          "les_text": "Zwar wurde Christus in seiner Schwachheit gekreuzigt, aber er lebt aus Gottes Kraft. Auch wir sind schwach in ihm, aber wir werden zusammen mit ihm vor euren Augen aus Gottes Kraft leben.",
          "resp1_0": "Am Boden klebt meine Seele.",
          "resp1_1": "Belebe mich, Herr, durch dein Wort.",
          "oration": "Herr, Jesus Christus, um die sechste Stunde kam Finsternis über die ganze Welt, als du unschuldig das Kreuz bestiegst, um uns von unserer Schuld zu erlösen. Erleuchte unsere Dunkelheit, damit wir zum ewigen Leben finden in deinem Licht. Der du lebst und herrschest in alle Ewigkeit."
        },
        "Terz": {
          "ps_1": 119.025,
          "ps_2": 26.0,
          "ps_3": 28.0,
          "ant_1": "Ich eile voran auf dem Weg deiner Gebote, denn mein Herz machst du weit.",
          "ant_2": "Auf Gott vertraue ich, darum werde ich nicht wanken.",
          "ant_3": "Mein Herz vertraut auf den Herrn, mir wurde geholfen.",
          "les_buch": "Phil",
          "les_stelle": "2,2b–4",
          "les_text": "Seid eines Sinnes, einander in Liebe verbunden, einmütig und einträchtig! Tut nichts aus Ehrgeiz und nichts aus Prahlerei, sondern in Demut schätze einer den andern höher ein als sich selbst. Jeder achte nicht nur auf das eigene Wohl, sondern auch auf das der anderen.",
          "resp1_0": "Alle Pfade des Herrn sind Huld und Treue.",
          "resp1_1": "Für alle, die seine Gebote bewahren und seinen Bund.",
          "oration": "Herr Jesus Christus, um die dritte Stunde wurdest du zur Kreuzigung geführt für das Heil der Welt. Wir bitten dich, vergib, was wir Böses getan haben und bewahre uns vor neuer Schuld. Der du lebst und herrschest in alle Ewigkeit."
        },
        "Vesper": {
          "hymn_1": 315.0,
          "ps_1": 41.0,
          "ps_2": 46.0,
          "ps_3": 156.0,
          "ant_1": "Heile mich, Herr, denn ich habe gegen dich gesündigt.",
          "ant_2": "Der Herr der Heerscharen ist mit uns, der Gott Jakobs ist unsre Burg.",
          "ant_3": "Alle Völker werden kommen und niederfallen vor dir, unserm Gott und Herrn.",
          "les_buch": "Röm",
          "les_stelle": "15,1–3",
          "les_text": "Wir müssen als die Starken die Schwäche derer tragen, die schwach sind, und dürfen nicht für uns selbst leben. Jeder von uns soll Rücksicht auf den Nächsten nehmen, um Gutes zu tun und die Gemeinde aufzubauen. Denn auch Christus hat nicht für sich selbst gelebt; in der Schrift heißt es vielmehr: Die Schmähungen derer, die dich schmähen, haben mich getroffen.",
          "resp1_1": "Christus hat uns geliebt,",
          "resp1_2": "uns durch sein Blut befreit von unsern Sünden.",
          "resp1_3": "Er hat uns zu Königen gemacht und zu Priestern für den Dienst vor Gott.",
          "ant_ev": "Der Herr nimmt sich seiner Kinder an und denkt an sein Erbarmen.",
          "bitten_e": "Lasst uns beten zu Gott, dem Vater aller Menschen:",
          "bitten_r": "Zeige uns dein Erbarmen.",
          "bitten": "Dein eingeborener Sohn hat sich als Abendopfer für die Welt dargebracht;^qerbarme dich aller Menschen auf der ganzen Erde.^pRichte auf, die ungerecht verfolgt und gefangen gehalten werden;^qnimm dich derer an, die einsam und traurig sind.^pSei du die Kraft deiner Gläubigen,^qdamit sie den Angriffen des Bösen standhalten können.^pUmgib die Sterbenden mit deinem Erbarmen;^qlass sie heimkehren zu dir.^pFühre unsere Verstorbenen in das Licht, in dem du wohnst,^qdass sie dich schauen in Ewigkeit.",
          "oration": "Herr, wir schauen hin auf das Kreuz deines Sohnes. Gib, dass wir sein Leiden und Sterben besser verstehen und fähig werden, sein Joch auf uns zu nehmen. Darum bitten wir durch ihn, Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "6": {
        "Laudes": {
          "hymn_1": 216.0,
          "ps_1": 119.145,
          "ps_2": 166.0,
          "ps_3": 117.0,
          "ant_1": "Schon beim Morgengrauen komme ich zu dir; Herr, ich warte auf dein Wort.",
          "ant_2": "Meine Stärke und mein Lied ist der Herr, er ist mein Retter.",
          "ant_3": "Ihr Völker der Erde, lobet den Herrn.",
          "les_buch": "2 Petr",
          "les_stelle": "1,10–11",
          "les_text": "Meine Brüder, bemüht euch noch mehr darum, dass eure Berufung und Erwählung Bestand hat! Wenn ihr das tut, werdet ihr niemals scheitern. Dann wird euch in reichem Maß gewährt, in das ewige Reich unseres Herrn und Retters Jesus Christus einzutreten.",
          "resp1_1": "Herr, ich rufe zu dir,",
          "resp1_2": "ich sage: Du bist meine Zuflucht.",
          "resp1_3": "Du bist mein Anteil im Lande der Lebenden:",
          "ant_ev": "Licht aus der Höhe, leuchte allen, die in Finsternis sind und im Schatten des Todes.",
          "bitten_e": "Gepriesen sei Christus, unser Fürsprecher beim Vater. Zu ihm lasst uns beten:",
          "bitten_r": "Christus, höre uns.",
          "bitten": "In der Taufe bist du unser Licht geworden;^qführe uns durch diesen Tag.^pDu bist uns nahe alle Stunden dieses Tages;^qhilf uns in Geduld ertragen, was uns heute widerfährt.^pMaria, deine Mutter, bewahrte dein Wort in ihrem Herzen;^qhilf uns, dein Wort zu hören und zu befolgen.^pLass uns in dieser vergänglichen Welt das Unvergängliche erwarten^qund im Glauben erhoffen, was uns verheißen ist.",
          "oration": "Heiliger Gott, mache unser Herz hell durch den Glanz der Auferstehung deines Sohnes, damit das Dunkel des Todes uns nicht befalle und wir zum ewigen Licht gelangen. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "hymn_1": 403.0,
          "hymn_nacht": 1402.0,
          "ps_1": 105.1,
          "ps_2": 105.2,
          "ps_3": 105.3,
          "ant_1": "Singet dem Herrn, gedenkt all seiner Wunder.",
          "ant_2": "Den Gerechten, der verkauft worden war, hat der Herr nicht verlassen. Er befreite ihn aus den Händen der Sünder.^ö",
          "ant_3": "Der Herr dachte an sein heiliges Wort: Er hat sein Volk herausgeführt in Freude.^ö",
          "resp0_0": "Kommt und schaut die Taten des Herrn.",
          "resp0_1": "Der Wunderbares vollbringt auf der Erde."
        },
        "Non": {
          "les_buch": "Weish",
          "les_stelle": "7,27a; 8,1",
          "les_text": "Die Weisheit ist nur eine und vermag doch alles; ohne sich zu ändern, erneuert sie alles. Machtvoll entfaltet sie ihre Kraft von einem Ende zum andern und durchwaltet voll Güte das All.",
          "resp1_0": "Wie groß sind deine Werke, o Herr.",
          "resp1_1": "Wie tief sind deine Gedanken.",
          "oration": "Herr, unser Gott, höre auf die Fürsprache der seligen Jungfrau Maria und erfülle unsere Sehnsucht nach Frieden, damit wir alle Tage unseres Lebens frei sind für den Dienst vor deinem Angesicht und ohne Gefährdung zu dir gelangen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Sext": {
          "les_buch": "Jer",
          "les_stelle": "17,9–10",
          "les_text": "Arglistig ohnegleichen ist das Herz und unverbesserlich. Wer kann es ergründen? Ich, der Herr, erforsche das Herz und prüfe die Nieren, um jedem zu vergelten, wie es sein Verhalten verdient.",
          "resp1_0": "Reinige mich von verborgener Schuld.",
          "resp1_1": "Behüte deinen Knecht vor vermessenen Menschen.",
          "oration": "Herr, du Feuer ewiger Liebe, entzünde unser Herz mit deiner Glut, damit wir dich über alles lieben und aus Liebe zu dir auch unsere Brüder. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Terz": {
          "ps_1": 119.033,
          "ps_2": 34.1,
          "ps_3": 34.2,
          "ant_1": "Führe mich, Herr, auf dem Pfad deiner Gebote.",
          "ant_2": "Wer den Herrn fürchtet, leidet keinen Mangel.",
          "ant_3": "Suche Frieden und jage ihm nach.",
          "les_buch": "1 Kön",
          "les_stelle": "8,60–61",
          "les_text": "Alle Völker der Erde sollen erkennen, dass niemand Gott ist als der Herr allein. Euer Herz aber bleibe ungeteilt beim Herrn, unserem Gott, sodass ihr seinen Gesetzen folgt und auf seine Gebote beachtet.",
          "resp1_0": "Lehre mich, Herr, deine Pfade.",
          "resp1_1": "Führe mich in deiner Treue.",
          "oration": "Gott, allmächtiger Vater, du unser Herr, wir neigen uns vor dir. Sende uns das Licht des Heiligen Geistes, damit wir sicher sind vor jedem Feind und in der Freude des Herzens dir unser Lob weihen, heute und alle Tage. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Vesper": {
          "hymn_1": 316.0,
          "ps_1": 119.105,
          "ps_2": 16.0,
          "ps_3": 157.0,
          "ant_1": "Dein Wort ist meinem Fuß eine Leuchte, ein Licht für meine Pfade. Halleluja.",
          "ant_2": "Dein Antlitz, Herr, wird mich mit Freude erfüllen. Halleluja.",
          "ant_3": "Vor dem Namen Jesu soll jedes Knie sich beugen im Himmel und auf Erden. Halleluja.",
          "les_buch": "Kol",
          "les_stelle": "1,2b–6",
          "les_text": "Gnade sei mit euch und Friede von Gott, unserem Vater. Wir danken Gott, dem Vater Jesu Christi, unseres Herrn, jedes Mal, wenn wir für euch beten. Denn wir haben von eurem Glauben an Christus Jesus gehört und von der Liebe, die ihr zu allen Heiligen habt, weil im Himmel die Erfüllung eurer Hoffnung für euch bereitliegt. Schon früher habt ihr davon gehört durch das wahre Wort des Evangeliums, das zu euch gelangt ist. Wie in der ganzen Welt, so trägt es auch bei euch Frucht und wächst seit dem Tag, an dem ihr den Ruf der göttlichen Gnade vernommen und in Wahrheit erkannt habt.",
          "resp1_1": "Der Name des Herrn sei gepriesen",
          "resp1_2": "vom Aufgang der Sonne bis zu ihrem Untergang.",
          "resp1_3": "Seine Herrlichkeit überragt die Himmel.",
          "ant_ev": "0",
          "bitten_e": "Lasst uns beten zu Gott, dem Herrn, der uns zu seinem Volk erwählt hat:",
          "bitten_r": "Herr, wir vertrauen auf dich.",
          "bitten": "Für unseren Papst N. und unseren Bischof N.:^qFühre sie durch deinen Geist.^pFür die Kranken und Leidenden:^qLass sie die Gemeinschaft mit unserem Herrn Jesus Christus erfahren.^pFür die Obdachlosen und Flüchtlinge:^qLass sie einen Ort finden, wo sie menschenwürdig leben können.^pUm das tägliche Brot:^qHilf, dass niemand zu hungern braucht.^pFür unser Volk:^qSchenke ihm Einheit und Frieden.^pFür die Verstorbenen:^qNimm sie auf in deine ewige Wohnung.",
          "oration": "0"
        }
      }
    },
    "2": {
      "0": {
        "Laudes": {
          "hymn_1": 220.0,
          "ps_1": 118.0,
          "ps_2": 170.0,
          "ps_3": 150.0,
          "ant_1": "Hochgelobt sei, der da kommt im Namen des Herrn. Halleluja.",
          "ant_2": "Lasst uns ein Loblied singen dem Herrn, unserm Gott. Halleluja.",
          "ant_3": "Lobet den Herrn in seiner gewaltigen Größe. Halleluja.",
          "les_buch": "Ez",
          "les_stelle": "36,25–27",
          "les_text": "Ich gieße reines Wasser über euch aus, dann werdet ihr rein. Ich reinige euch von aller Unreinheit und von allen euren Götzen. Ich schenke euch ein neues Herz und lege einen neuen Geist in euch. Ich nehme das Herz von Stein aus eurer Brust und gebe euch ein Herz von Fleisch. Ich lege meinen Geist in euch und bewirke, dass ihr meinen Gesetzen folgt und auf meine Gebote achtet und sie erfüllt.",
          "resp1_1": "Wir preisen dich, Herr, unser Gott,",
          "resp1_2": "und rufen deinen Namen an.",
          "resp1_3": "Wir verkünden deine Wunder.",
          "ant_ev": "0",
          "bitten_e": "Gepriesen sei Jesus Christus, der König der Herrlichkeit. Zu ihm lasst uns beten:",
          "bitten_r": "Christe, eleison.",
          "bitten": "Du bist der Gesalbte Gottes;^qführe uns heute durch deinen Heiligen Geist.^pDu bist der Anfang der Auferstehung;^qschenke uns dein Leben.^pÖffne uns die Augen,^qdass wir die Spuren deiner Herrlichkeit erkennen.^pBeschütze uns an diesem Tag vor der Macht des Bösen;^qhilf uns, das Böse durch das Gute zu überwinden.",
          "oration": "0"
        },
        "Lesehore": {
          "hymn_1": 4401.0,
          "ps_1": 104.1,
          "ps_2": 104.2,
          "ps_3": 104.3,
          "ant_1": "Herr, mein Gott, du bist bekleidet mit Hoheit und Pracht; du hüllst dich in Licht wie in ein Gewand. Halleluja.",
          "ant_2": "Nach deinem Willen, o Herr, bringt die Erde Brot hervor und Wein, der das Herz des Menschen erfreut. Halleluja.",
          "ant_3": "Gott sah alles, was er geschaffen, und es war sehr gut. Halleluja.",
          "resp0_0": "Selig seid ihr, denn eure Augen sehen.",
          "resp0_1": "Und eure Ohren hören."
        },
        "Non": {
          "les_buch": "2 Kor",
          "les_stelle": "1,21–22",
          "les_text": "Gott, der uns und euch in der Treue zu Christus festigt und der uns alle gesalbt hat, er ist es auch, der uns sein Siegel aufgedrückt und als ersten Anteil (am verheißenen Heil) den Geist in unser Herz gegeben hat.",
          "resp1_0": "Der Herr ist mein Licht und mein Heil.",
          "resp1_1": "Er ist die Kraft meines Lebens.",
          "oration": "0"
        },
        "Sext": {
          "les_buch": "Röm",
          "les_stelle": "8,26",
          "les_text": "Der Geist nimmt sich unserer Schwachheit an. Denn wir wissen nicht, worum wir in rechter Weise beten sollen; der Geist selber tritt jedoch für uns ein mit Seufzen, das wir nicht in Worte fassen können.",
          "resp1_0": "Herr, mein Rufen dringe zu dir.",
          "resp1_1": "Gib mir Einsicht nach deinem Wort.",
          "oration": "0"
        },
        "Terz": {
          "ps_1": 23.0,
          "ps_2": 76.1,
          "ps_3": 76.2,
          "ant_1": "Der Herr lässt mich lagern auf grünen Auen. Halleluja.",
          "ant_2": "Groß ist in Israel der Name des Herrn. Halleluja.",
          "ant_3": "Furcht packt die Erde, und sie verstummt, wenn Gott sich erhebt zum Gericht. Halleluja.",
          "les_buch": "Röm",
          "les_stelle": "5,1–2.5",
          "les_text": "Gerecht gemacht aus Glauben, haben wir Frieden mit Gott durch Jesus Christus, unseren Herrn. Durch ihn haben wir auch den Zugang zu der Gnade erhalten, in der wir stehen, und rühmen uns unserer Hoffnung auf die Herrlichkeit Gottes. Die Hoffnung aber lässt nicht zugrunde gehen; denn die Liebe Gottes ist ausgegossen in unsere Herzen durch den Heiligen Geist, der uns gegeben ist.",
          "resp1_0": "Von den Taten deiner Huld will ich ewig singen.",
          "resp1_1": "Bis zum fernsten Geschlecht deine Treue verkünden.",
          "oration": "0"
        },
        "Vesper": {
          "hymn_1": 320.0,
          "ps_1": 110.0,
          "ps_2": 115.0,
          "ps_3": 151.0,
          "ant_1": "Christus, der Herr, ist Priester auf ewig nach der Ordnung Melchisedeks. Halleluja.",
          "ant_2": "Unser Gott ist im Himmel; was ihm gefällt, das vollbringt er. Halleluja.",
          "ant_3": "Preist unseren Gott, ihr seine Knechte und alle, die ihn fürchten, Große und Kleine. Halleluja.",
          "les_buch": "2 Thess",
          "les_stelle": "2,13–14",
          "les_text": "Wir müssen Gott zu jeder Zeit euretwegen danken, vom Herrn geliebte Brüder, weil Gott euch als Erstlingsgabe dazu auserwählt hat, aufgrund der Heiligung durch den Geist und aufgrund eures Glaubens an die Wahrheit gerettet zu werden. Dazu hat er euch durch unser Evangelium auch berufen; ihr sollt nämlich die Herrlichkeit Jesu Christi, unseres Herrn, erlangen.",
          "resp1_1": "Groß ist unser Herr,",
          "resp1_2": "seine Macht ist gewaltig.",
          "resp1_3": "Unermesslich ist seine Weisheit.",
          "ant_ev": "0",
          "bitten_e": "Lasst uns beten zu Christus, der alle Menschen retten will:",
          "bitten_r": "Herr, gedenke deines Volkes.",
          "bitten": "Am Abend dieses Tages bitten wir dich:^qDein Licht, das niemals untergeht, leuchte allen Menschen.^pIn deinem Blut hast du den Neuen Bund geschlossen;^qheilige deine Kirche.^pGedenke deiner Gemeinde (unserer Gemeinschaft)^qund wohne in unserer Mitte.^pGeleite die Reisenden zu Wasser, zu Land und in der Luft;^qschenke ihnen glückliche Ankunft.^pNimm die Verstorbenen auf,^qverzeih ihnen ihre Schuld und schenke ihnen das ewige Leben.",
          "oration": "0"
        }
      },
      "1": {
        "Laudes": {
          "hymn_1": 211.0,
          "hymn_kl": 71110.0,
          "ps_1": 42.0,
          "ps_2": 171.0,
          "ps_3": 19.1,
          "ant_1": "Wann darf ich kommen und Gottes Antlitz schauen?",
          "ant_2": "Zeige uns, Herr, das Licht deines Erbarmens.",
          "ant_3": "Sei gepriesen, o Herr, am Gewölbe des Himmels.",
          "les_buch": "Jer",
          "les_stelle": "15,16",
          "les_text": "Kamen Worte von dir, so verschlang ich sie; dein Wort war mir Glück und Herzensfreude; denn dein Name ist über mir ausgerufen, Herr, Gott der Heere.",
          "resp1_1": "Ihr Gerechten, jubelt dem Herrn.",
          "resp1_2": "Gott zu loben ziemt sich für die Frommen.",
          "resp1_3": "Greift in die Saiten, singt ihm ein neues Lied.",
          "ant_ev": "Gepriesen sei der Herr, der Gott Israels. Er hat uns besucht und befreit.",
          "bitten_e": "Gepriesen sei der Gott und Vater unseres Herrn Jesus Christus. Zu ihm lasst uns beten:",
          "bitten_r": "Bewahre uns in deinem Dienst.",
          "bitten": "Gott, du hast uns zu einem priesterlichen Volk gemacht;^qlass uns ganz dir gehören.^pDu spendest uns die Gaben deines Geistes;^qschenke uns heute Freundlichkeit und Geduld.^pGib, dass wir dich allezeit lieben^qund dich durch unser Leben preisen.^pMach uns bereit, einander zu dienen,^qdamit wir miteinander das Heil erlangen.",
          "oration": "Herr, allmächtiger Gott, du hast uns diesen neuen Tag geschenkt. Bewahre uns an ihm vor Unheil und Sünde und lenke unsere Gedanken, Worte und Werke, dass wir stets deinen Willen tun. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "hymn_1": 401.0,
          "hymn_nacht": 405.0,
          "ps_1": 31.1,
          "ps_2": 31.2,
          "ps_3": 31.3,
          "ant_1": "Wende dein Ohr mir zu, erlöse mich bald.",
          "ant_2": "Lass dein Angesicht leuchten über deinem Knecht.^ö",
          "ant_3": "Gepriesen sei der Herr, der wunderbar an mir gehandelt hat.^ö",
          "resp0_0": "Führe mich in deiner Treue und lehre mich.",
          "resp0_1": "Denn du bist der Gott meines Heiles."
        },
        "Non": {
          "les_buch": "Ez",
          "les_stelle": "34,31",
          "les_text": "Ihr seid meine Schafe, ihr seid die Herde meiner Weide. Ich bin euer Gott – Spruch Gottes, des Herrn.",
          "resp1_0": "Der Herr ist mein Hirte, nichts wird mir fehlen.",
          "resp1_1": "Er lässt mich lagern auf grünen Auen.",
          "oration": "Gott, unser Herr, zur neunten Stunde, als Petrus und Johannes zum Tempel hinaufgingen, um zu beten, bitten auch wir dich im Namen Jesu: Schenke allen, die diesen Namen anrufen, dein Heil. Durch ihn, Christus, unseren Herrn."
        },
        "Sext": {
          "les_buch": "Jer",
          "les_stelle": "32,4",
          "les_text": "Ich schließe mit ihnen einen ewigen Bund, dass ich mich nicht von ihnen abwenden will, sondern ihnen Gutes erweise. Ich lege ihnen die Furcht vor mir ins Herz, damit sie nicht von mir weichen.",
          "resp1_0": "Bei Gott ist mein Heil und meine Ehre.",
          "resp1_1": "Er ist meine Zuflucht.",
          "oration": "Gott, du bist Herr und Hüter von Weinberg und Ernte; du teilst die Arbeit zu und gibst gerechten Lohn. Verleihe uns die Kraft, deine Fügung anzunehmen und die Last des Tages ohne Murren zu tragen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Terz": {
          "ps_1": 119.041,
          "ps_2": 40.1,
          "ps_3": 40.2,
          "ant_1": "Selig, die das Wort Gottes hören und es im Herzen bewahren.",
          "ant_2": "Das ist meine Speise: den Willen meines Vaters zu tun.",
          "ant_3": "Ich bin arm und gebeugt, der Herr aber sorgt für mich.",
          "les_buch": "Jer",
          "les_stelle": "31,33",
          "les_text": "Das wird der Bund sein, den ich nach diesen Tagen mit dem Haus Israel schließe – Spruch des Herrn: Ich lege mein Gesetz in sie hinein und schreibe es auf ihr Herz. Ich werde ihr Gott sein, und sie werden mein Volk sein.",
          "resp1_0": "Ein reines Herz erschaffe mir, o Gott.",
          "resp1_1": "Verwirf mich nicht vor deinem Angesicht.",
          "oration": "Gütiger Gott und Vater, du hast die Menschen zu gemeinsamer Arbeit berufen, damit sie einander ergänzen und jeder die Fähigkeit entfaltet, die du ihm gegeben hast, zum Wohle aller. Gib, dass wir unser Werk als deine Kinder verrichten, beseelt von deinem Geist und von der Liebe zu allen Menschen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Vesper": {
          "hymn_1": 321.0,
          "ps_1": 45.1,
          "ps_2": 45.2,
          "ps_3": 152.0,
          "ant_1": "Du bist der Schönste von allen Menschen, für immer hat Gott dich gesegnet.",
          "ant_2": "Seht, der Bräutigam kommt! Geht ihm entgegen!",
          "ant_3": "Das Geheimnis seines Willens hat Gott uns kundgetan: in der Fülle der Zeiten alles in Christus zu vereinen.",
          "les_buch": "1 Thess",
          "les_stelle": "2,13",
          "les_text": "Wir danken Gott unablässig dafür, dass ihr das Wort Gottes, das ihr durch unsere Verkündigung empfangen habt, nicht als Menschenwort, sondern – was es in Wahrheit ist – als Gottes Wort angenommen habt; und jetzt ist es in euch, den Gläubigen, wirksam.",
          "resp1_1": "Mein Beten steige vor dir auf",
          "resp1_2": "wie Weihrauch, Herr, vor deinem Angesicht.",
          "resp1_3": "Das Erheben meiner Hände sei wie das Opfer am Abend.",
          "ant_ev": "Meine Seele preise dich allezeit, Gott, du mein Retter.",
          "bitten_e": "Lasst uns beten zu Jesus Christus, der seine Kirche liebt:",
          "bitten_r": "Erfülle die Bitten deines Volkes.",
          "bitten": "Herr, du willst, dass keiner verlorengeht;^qgib, dass alle Menschen zur Erkenntnis der Wahrheit gelangen.^pZeige, dass du der Anwalt der Armen bist;^qstehe ihnen bei in ihrer Bedrängnis.^pGib, dass alle Menschen Arbeit finden,^qdamit sie in Sicherheit leben können.^pBeschütze unseren Papst N. und unseren Bischof N.;^qführe sie durch deinen Heiligen Geist.^pWir empfehlen dir die verstorbenen Bischöfe, Priester und Diakone;^qnimm all unsere Verstorbenen bei dir auf.",
          "oration": "Allmächtiger Gott, wir danken dir für alles, was wir heute empfangen haben, denn du hast uns unnützen Knechten die Kraft für unser Tagewerk gegeben. Nimm unser Abendgebet als Opfer des Lobes an. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "2": {
        "Laudes": {
          "hymn_1": 212.0,
          "hymn_kl": 401.0,
          "ps_1": 43.0,
          "ps_2": 172.0,
          "ps_3": 65.0,
          "ant_1": "Sende dein Licht und deine Wahrheit, dass sie mich führen zu deinem heiligen Berg.",
          "ant_2": "Sei unsere Hilfe, Herr, alle Tage unseres Lebens.",
          "ant_3": "Dir gebührt Lobgesang, Gott, auf dem Zion, dir erfüllt man Gelübde.",
          "les_buch": "1 Thess",
          "les_stelle": "5,4–5",
          "les_text": "Brüder, ihr lebt nicht im Finstern, sodass euch der Tag nicht wie ein Dieb überraschen kann. Ihr alle seid Söhne des Lichts und Söhne des Tages. Wir gehören nicht der Nacht und nicht der Finsternis.",
          "resp1_1": "Ich warte auf dein Wort,",
          "resp1_2": "höre, o Herr, meine Stimme.",
          "resp1_3": "Schon am Morgen komme ich und flehe.",
          "ant_ev": "Aus den Händen aller, die uns hassen, errette uns, o Herr.",
          "bitten_e": "Gepriesen sei Jesus Christus, unser Erlöser. Zu ihm lasst uns beten:",
          "bitten_r": "Herr, erbarme dich.",
          "bitten": "In der Frühe des Tages gedenken wir deiner Auferstehung;^qlass uns den Tag beginnen in der Hoffnung auf dich.^pBegleite unser Tagewerk mit deiner Gnade;^qlass gelingen, was wir heute tun.^pGib, dass alles, was heute geschieht, uns dir näher bringt;^qlass uns wachsen in der Liebe zu dir.^pLass uns heute deine Güte erfahren^qund hilf uns, den Menschen Gutes zu tun.",
          "oration": "Herr Jesus Christus, du wahres Licht, das alle Menschen erleuchtet, damit sie das Heil finden, gib uns die Kraft, deinem Frieden und deiner Gerechtigkeit den Weg zu bereiten. Der du in der Einheit des Heiligen Geistes mit Gott dem Vater lebst und herrschest in alle Ewigkeit."
        },
        "Lesehore": {
          "hymn_1": 402.0,
          "hymn_nacht": 2402.0,
          "ps_1": 37.1,
          "ps_2": 37.2,
          "ps_3": 37.3,
          "ant_1": "Befiehl dem Herrn deinen Weg und vertrau ihm; er wird es fügen.^ö",
          "ant_2": "Meide das Böse und tu das Gute; der Herr verlässt seine Frommen nicht.^ö",
          "ant_3": "Hoffe auf den Herrn und bleib auf seinem Weg.^ö",
          "resp0_0": "Lehre mich Erkenntnis und rechtes Urteil.",
          "resp0_1": "Ich vertraue auf deine Gebote."
        },
        "Non": {
          "les_buch": "1 Kor",
          "les_stelle": "12,24–26",
          "les_text": "Gott hat den Leib so zusammengefügt, dass in ihm kein Zwiespalt entsteht, sondern alle Glieder einträchtig füreinander sorgen. Wenn darum ein Glied leidet, leiden alle Glieder mit; wenn ein Glied geehrt wird, freuen sich alle anderen mit ihm. Ihr aber seid der Leib Christi und jeder einzelne ist ein Glied an ihm.",
          "resp1_0": "Herr, unser Gott, führe uns zusammen aus den Völkern.",
          "resp1_1": "Damit wir deinen heiligen Namen preisen.",
          "oration": "Gott, um die neunte Stunde hast du dem Hauptmann Kornelius deinen Engel geschickt, dass er ihm den Weg des Heiles weise. Mach uns bereit, in der Gemeinschaft der Kirche mitzuwirken an der Rettung der Menschen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Sext": {
          "les_buch": "1 Kor",
          "les_stelle": "12,12–13",
          "les_text": "Wie der Leib eine Einheit ist, doch viele Glieder hat, alle Glieder des Leibes aber, obgleich es viele sind, einen einzigen Leib bilden: So ist es auch mit Christus. Durch den einen Geist wurden wir in der Taufe alle in einen einzigen Leib aufgenommen, Juden und Griechen, Sklaven und Freie; und alle wurden wir mit dem einen Geist getränkt.",
          "resp1_0": "Heiliger Vater, bewahre uns in deinem Namen.",
          "resp1_1": "Damit wir eins sind in dir.",
          "oration": "Gütiger Gott, als Petrus um die sechste Stunde betete, hast du ihn belehrt, dass das Heil allen Völkern zuteil werden soll. Bewirke durch deine Gnade, dass unser Tagewerk dir gefällt und dem Heilsplan deiner Liebe dient. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Terz": {
          "ps_1": 119.049,
          "ps_2": 53.0,
          "ps_3": 54.0,
          "ant_1": "Ein Pilger bin ich auf Erden; Herr, deine Weisung will ich beachten.",
          "ant_2": "Gott wird das Schicksal seines Volkes wenden, und unser Jubel wird groß sein.",
          "ant_3": "Gott ist mein Helfer; der Herr beschützt mein Leben.",
          "les_buch": "1 Kor",
          "les_stelle": "12,4–6",
          "les_text": "Es gibt verschiedene Gnadengaben, aber nur den einen Geist. Es gibt verschiedene Dienste, aber nur den einen Herrn. Es gibt verschiedene Kräfte, die wirken, aber nur den einen Gott: Er wirkt alles in allen.",
          "resp1_0": "Sein Heil ist denen nahe, die ihn fürchten.",
          "resp1_1": "Seine Herrlichkeit wohne in unserem Lande.",
          "oration": "Allmächtiger, ewiger Gott. Um die dritte Stunde hast du deinen Heiligen Geist über die Apostel ausgegossen. Sende den Geist der Liebe auch in unser Herz, damit wir in Treue für dich Zeugnis geben vor den Menschen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Vesper": {
          "hymn_1": 322.0,
          "ps_1": 49.1,
          "ps_2": 49.2,
          "ps_3": 153.0,
          "ant_1": "Ihr könnt nicht Gott dienen und zugleich dem Mammon.",
          "ant_2": "So spricht der Herr: Sammelt euch Schätze im Himmel.",
          "ant_3": "Würdig ist das Lamm, das geschlachtet ist, Macht zu empfangen und Herrlichkeit und Ehre.",
          "les_buch": "Röm",
          "les_stelle": "3,23–25b",
          "les_text": "Alle haben gesündigt und die Herrlichkeit Gottes verloren. Ohne es verdient zu haben, werden sie gerecht, dank seiner Gnade, durch die Erlösung in Christus Jesus. Ihn hat Gott dazu bestimmt, Sühne zu leisten mit seinem Blut, Sühne, wirksam durch Glauben. So erweist Gott seine Gerechtigkeit durch die Vergebung der Sünden.",
          "resp1_1": "Du zeigst mir, Herr, den Pfad zum Leben,",
          "resp1_2": "vor deinem Angesicht herrscht Freude in Fülle.",
          "resp1_3": "Zu deiner Rechten ist Wonne für alle Zeit.",
          "ant_ev": "Großes hat an mir getan der Mächtige, sein Name ist heilig.",
          "bitten_e": "Lasst uns zu Christus beten, auf den wir unsere Hoffnung setzen:",
          "bitten_r": "Herr, erbarme dich deines Volkes.",
          "bitten": "Behüte unseren Bischof N.^qund stärke seine Mitarbeiter in ihrem Dienst.^pSteh den Regierenden bei^qund erleuchte die Gesetzgeber.^pVerhilf den Armen zu ihrem Recht;^qgib allen Menschen, was sie zum Leben brauchen.^pSieh auf die Menschen, die bedrängt und verfolgt werden,^qund komm ihnen zu Hilfe.^pErbarme dich der Verstorbenen;^qlass sie teilnehmen am Hochzeitsmahl des ewigen Lebens.",
          "oration": "Herr, unser Gott, dein ist der Tag, und dein ist die Nacht. Lass Christus, die Sonne der Gerechtigkeit, in unseren Herzen nicht untergehen, damit wir aus dem Dunkel dieser Zeit in das Licht gelangen, in dem du wohnst. Darum bitten wir durch ihn, Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "3": {
        "Invitatorium": {
          "ps_67": 0
        },
        "Laudes": {
          "hymn_1": 213.0,
          "hymn_kl": 402.0,
          "ps_1": 77.0,
          "ps_2": 173.0,
          "ps_3": 97.0,
          "ant_1": "Gott, dein Weg ist heilig. Wo ist ein Gott, so groß wie unser Gott?",
          "ant_2": "Mein Herz ist voll Freude über den Herrn; er erniedrigt, und er erhöht.",
          "ant_3": "Der Herr ist König. Die Erde frohlocke!",
          "les_buch": "Röm",
          "les_stelle": "8,35.37",
          "les_text": "Was kann uns scheiden von der Liebe Christi? Bedrängnis oder Not oder Verfolgung, Hunger oder Kälte, Gefahr oder Schwert? All das überwinden wir durch den, der uns geliebt hat.",
          "resp1_1": "Ich will Gott preisen Tag für Tag,",
          "resp1_2": "sein Lob sei stets in meinem Munde.",
          "resp1_3": "All meinen Ängsten hat er mich entrissen.",
          "ant_ev": "Dienet dem Herrn in Heiligkeit, denn er befreit uns aus der Hand unserer Feinde.",
          "bitten_e": "Gepriesen sei unser Erlöser, der bei seiner Kirche bleiben wird bis zum Ende der Welt. Zu ihm lasst uns beten:",
          "bitten_r": "Kyrie, eleison.",
          "bitten": "Führe uns durch diesen Tag;^qbegleite uns mit deiner Gnade.^pUnser Tagewerk sei dir geweiht;^qgib, dass wir nichts Böses tun und kein Unrecht gutheißen.^pMach deine Gläubigen zum Licht der Welt;^qmach sie zum Salz der Erde.^pDein Heiliger Geist lenke unser Herz,^qdamit unser Mund dein Lob verkünde.",
          "oration": "Gütiger Gott, lass es hellen Tag werden in unserem Herzen, damit wir nicht in die Irre gehen, sondern auf dem Weg deiner Gebote bleiben. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "hymn_1": 403.0,
          "hymn_nacht": 1402.0,
          "ps_1": 39.1,
          "ps_2": 39.2,
          "ps_3": 52.0,
          "ant_1": "Wir seufzen in unserem Herzen und warten auf die Erlösung unseres Leibes.",
          "ant_2": "Höre mein Gebet, o Herr, und schweige nicht zu meinen Tränen.",
          "ant_3": "Auf Gottes Huld vertraue ich immer und ewig.^ö",
          "resp0_0": "Ich hoffe auf den Herrn.",
          "resp0_1": "Ich warte voll Vertrauen auf sein Wort."
        },
        "Non": {
          "les_buch": "1 Sam",
          "les_stelle": "16,7b",
          "les_text": "Gott sieht nicht auf das, worauf der Mensch sieht. Der Mensch sieht, was vor den Augen ist, der Herr aber sieht das Herz.",
          "resp1_0": "Erforsche mich, Gott, und erkenne mein Herz.",
          "resp1_1": "Leite mich auf dem Weg zum Leben.",
          "oration": "Herr Jesus Christus, am Kreuz hast du die Arme ausgebreitet, um alle Menschen zu retten. Lass unsere Werke dir gefallen und sichtbar machen, dass du die Welt erlöst hast. Der du lebst und herrschest in alle Ewigkeit."
        },
        "Sext": {
          "les_buch": "Jes",
          "les_stelle": "55,8–9",
          "les_text": "Meine Gedanken sind nicht eure Gedanken und eure Wege sind nicht meine Wege – Spruch des Herrn.",
          "resp1_0": "Meine Gedanken sind nicht eure Gedanken und eure Wege sind nicht meine Wege – Spruch des Herrn.",
          "resp1_1": "So hoch der Himmel über der Erde ist, so hoch erhaben sind meine Wege über eure Wege und meine Gedanken über eure Gedanken.",
          "oration": "Allmächtiger, gütiger Gott, in der Mitte des Tages lässt du uns innehalten und zur Ruhe kommen. Schau gnädig auf unsere Arbeit. Mache gut, was wir falsch gemacht haben und gib, dass am Abend unser ganzes Tagewerk dir gefallen kann. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Terz": {
          "ps_1": 119.057,
          "ps_2": 55.1,
          "ps_3": 55.2,
          "ant_1": "Ich überdenke meine Wege; Herr, lehre mich deine Gesetze.",
          "ant_2": "Furcht und Zittern erfassten mich; achte auf mich und erhöre mich, Herr!",
          "ant_3": "Zu Gott will ich rufen; der Herr wird mir helfen.",
          "les_buch": "Dtn",
          "les_stelle": "1,16–17a",
          "les_text": "Ich habe eure Richter verpflichtet: Lasst jeden Streit zwischen euren Brüdern vor euch kommen. Entscheidet gerecht, es sei der Streit eines Mannes mit einem Bruder oder mit einem Fremden. Kennt vor Gericht kein Ansehen der Person! Klein wie Groß hört an! Fürchtet euch nicht vor angesehenen Leuten, denn das Gericht hat mit Gott zu tun.",
          "resp1_0": "Der Herr ist gerecht, er liebt gerechtes Handeln.",
          "resp1_1": "Wer rechtschaffen ist, darf sein Angesicht schauen.",
          "oration": "Herr, heiliger Vater, Gott, auf dessen Treue wir bauen, du hast den verheißenen Geist gesandt, um die Menschen zusammenzuführen, die durch die Sünde getrennt sind. Gib, dass wir die Einheit und den Frieden als deinen Auftrag erkennen und nach Kräften fördern. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Vesper": {
          "hymn_1": 323.0,
          "ps_1": 62.0,
          "ps_2": 67.0,
          "ps_3": 154.0,
          "ant_1": "Wir erwarten die selige Erfüllung unserer Hoffnung, das Erscheinen der Herrlichkeit unseres Retters Christus Jesus.",
          "ant_2": "Gott lasse sein Angesicht über uns leuchten und segne uns.",
          "ant_3": "Alles ist durch ihn und auf ihn hin geschaffen, und alles hat in ihm Bestand.",
          "les_buch": "1 Petr",
          "les_stelle": "5,5b–7",
          "les_text": "Begegnet einander in Demut! Denn Gott tritt den Stolzen entgegen, den Demütigen aber schenkt er seine Gnade. Beugt euch also in Demut unter die mächtige Hand Gottes, damit er euch erhöht, wenn die Zeit gekommen ist. Werft alle eure Sorge auf ihn, denn er kümmert sich um euch.",
          "resp1_1": "Wie deines Auges Stern behüte mich.",
          "resp1_2": "Birg mich im Schatten deiner Flügel.",
          "resp1_3": "Herr, du erhörst mich, wenn ich zu dir rufe.",
          "ant_ev": "Machtvolle Taten vollbringt der Herr, er zerstreut, die im Herzen voll Hochmut sind.",
          "bitten_e": "Lasst uns beten zu Gott, dem allmächtigen Vater, der den Menschen Gutes tut:",
          "bitten_r": "Wir bitten dich, erhöre uns.",
          "bitten": "Gott, schütze unsere Stadt ^(unsere Gemeinde^)^qund bewahre ihre Bewohner vor Schaden.^pSieh auf die Kinder und die jungen Menschen;^qlass sie zu aufrechten Christen heranwachsen.^pErbarme dich der Kranken;^qsei den alten Menschen nahe.^pSegne die Früchte der Erde;^qspende Nahrung allem, was lebt.^pLass den Verstorbenen das Licht deines Angesichtes leuchten^qund schenke ihnen deinen Frieden.",
          "oration": "Gott, dein Name ist heilig, und deine Barmherzigkeit wird gerühmt von Geschlecht zu Geschlecht. Nimm das Abendgebet deiner Kirche an und gib, dass in ihr dein Lobpreis niemals verstumme. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "4": {
        "Laudes": {
          "hymn_1": 214.0,
          "hymn_kl": 1402.0,
          "ps_1": 80.0,
          "ps_2": 174.0,
          "ps_3": 81.0,
          "ant_1": "Biete auf deine Macht und komm uns zu Hilfe, Herr, unser Gott.",
          "ant_2": "Herrliche Taten hat Gott vollbracht; die ganze Erde soll es wissen.",
          "ant_3": "Jubelt Gott zu, er ist unsre Zuflucht.",
          "les_buch": "Röm",
          "les_stelle": "14,17–19",
          "les_text": "Das Reich Gottes ist nicht Essen und Trinken, es ist Gerechtigkeit, Friede und Freude im Heiligen Geist. Und wer Christus so dient, wird von Gott anerkannt und ist bei den Menschen geachtet. Lasst uns also nach dem streben, was zum Frieden und zum Aufbau der Gemeinde beiträgt.",
          "resp1_1": "Am Morgen denke ich an dich.",
          "resp1_2": "Herr, deine Huld ist besser als das Leben.",
          "resp1_3": "Du wurdest meine Hilfe, darum preisen dich meine Lippen.",
          "ant_ev": "Lass uns, Herr, dein Heil erfahren und vergib uns unsere Sünden.",
          "bitten_e": "Gepriesen sei Jesus Christus, der Sohn des lebendigen Gottes. Zu ihm lasst uns beten:",
          "bitten_r": "Herr, steh uns bei.",
          "bitten": "Du bist das Licht der Welt;^qleuchte uns an diesem Tag.^pDu bist die ewige Weisheit;^qschenke uns Einsicht und Geduld.^pDu gibst Kraft, die Last des Tages zu tragen;^qhilf uns, dir großherzig zu dienen.^pDu lenkst unser Denken, Fühlen und Tun;^qlass uns deiner Weisung folgen.",
          "oration": "Herr und Gott, du wahres Licht, gib, dass wir in der Tiefe unseres Herzens gläubig erfassen, was heilig ist, und in der Klarheit deines Lichtes diesen Tag verbringen. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "hymn_1": 401.0,
          "hymn_nacht": 405.0,
          "ps_1": 44.1,
          "ps_2": 44.2,
          "ps_3": 44.3,
          "ant_1": "Du hast uns gerettet, Herr, wir preisen deinen Namen auf ewig.^ö",
          "ant_2": "Verschone dein Volk, o Herr; gib dein Erbe nicht der Schande preis.",
          "ant_3": "Steh auf und hilf uns, Herr; in deiner Huld erlöse uns.^ö",
          "resp0_0": "Herr, zu wem sollen wir gehen?",
          "resp0_1": "Du hast Worte des ewigen Lebens."
        },
        "Non": {
          "les_buch": "Gal",
          "les_stelle": "5,22–23a.25",
          "les_text": "Die Frucht des Geistes aber ist Liebe, Freude, Friede, Langmut, Freundlichkeit, Güte, Treue, Sanftmut und Selbstbeherrschung. Wenn wir aus dem Geist leben, dann wollen wir dem Geist auch folgen.",
          "resp1_0": "Herr, zeige mir den Weg, den ich gehen soll.",
          "resp1_1": "Dein guter Geist geleite mich auf ebenem Pfad.",
          "oration": "Herr, gib uns die Kraft, dem Leidensmut deines eingeborenen Sohnes zu folgen und die Widrigkeiten des Lebens in Geduld zu ertragen. Darum bitten wir durch ihn, Christus, unseren Herrn."
        },
        "Sext": {
          "les_buch": "Gal",
          "les_stelle": "5,16–17",
          "les_text": "Lasst euch vom Geist leiten, dann werdet ihr das Begehren des Fleisches nicht erfüllen. Denn das Begehren des Fleisches richtet sich gegen den Geist, das Begehren des Geistes aber gegen das Fleisch; beide stehen sich als Feinde gegenüber, sodass ihr nicht imstande seid, das zu tun, was ihr wollt.",
          "resp1_0": "Herr, du bist gut, du schenkst uns das Gute.",
          "resp1_1": "Lehre uns deine Gesetze.",
          "oration": "Allmächtiger, ewiger Gott, bei dir gibt es keine Finsternis, denn du wohnst im Licht. Sende einen Strahl deines Lichtes in unser Herz, damit wir den Sinn deiner Gebote erkennen und bereitwillig deine Wege gehen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Terz": {
          "ps_1": 119.065,
          "ps_2": 56.0,
          "ps_3": 57.0,
          "ant_1": "Die Weisung deines Mundes ist mir lieb, mehr als große Mengen von Gold und Silber.",
          "ant_2": "Ich vertraue auf Gott und fürchte mich nicht. Was können Menschen mir antun?",
          "ant_3": "Herr, deine Güte reicht, so weit der Himmel ist, und deine Treue so weit die Wolken ziehn.",
          "les_buch": "Gal",
          "les_stelle": "5,13–14",
          "les_text": "Ihr seid zur Freiheit berufen, Brüder. Nur nehmt die Freiheit nicht zum Vorwand für das Fleisch, sondern dient einander in Liebe! Denn das ganze Gesetz ist in dem einen Wort zusammengefasst: Du sollst deinen Nächsten lieben wie dich selbst!",
          "resp1_0": "Ich eile voran auf dem Weg deiner Gebote.",
          "resp1_1": "Denn mein Herz machst du mir weit.",
          "oration": "Herr und Gott, als die Apostel um die dritte Stunde zum Gebet versammelt waren, hast du ihnen den Heiligen Geist geschenkt. Mache auch uns zu einer Wohnstatt deines Geistes. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Vesper": {
          "hymn_1": 324.0,
          "ps_1": 72.1,
          "ps_2": 72.2,
          "ps_3": 155.0,
          "ant_1": "Ich mache dich zum Licht für alle Völker: trage mein Heil bis an die Enden der Erde.",
          "ant_2": "Der Herr rettet das Leben der Armen; von Unterdrückung und Gewalttat befreit er sie.",
          "ant_3": "Jetzt ist gekommen die Rettung und die Macht und die Herrschaft unseres Gottes.",
          "les_buch": "1 Petr",
          "les_stelle": "1,22–23",
          "les_text": "Der Wahrheit gehorsam, habt ihr euer Herz rein gemacht für eine aufrichtige Bruderliebe; darum hört nicht auf, einander von Herzen zu lieben. Ihr seid neu geboren worden, nicht aus vergänglichem, sondern aus unvergänglichem Samen: aus Gottes Wort, das lebt und das bleibt.",
          "resp1_1": "Mein Hirte ist der Herr,",
          "resp1_2": "er weidet mich auf grünen Auen.",
          "resp1_3": "Er leitet mich auf rechten Pfaden, treu seinem Namen.",
          "ant_ev": "Selig, die hungern nach der Gerechtigkeit; der Herr wird sie sättigen und mit seinen Gaben beschenken.",
          "bitten_e": "Lasst uns beten zu unserem Herrn und Erlöser Jesus Christus:",
          "bitten_r": "Herr, segne dein Volk.",
          "bitten": "Behüte unser Land ^(unsere Stadt, unsere Gemeinde^)^qund bewahre es (sie) vor Schaden.^pSchütze unseren Papst ^N. und unseren Bischof ^N.;^qgib, dass sie deiner Kirche als gute Hirten dienen.^pRufe junge Männer in deine Nachfolge;^qmach sie zu treuen Dienern deines Altars.^pBehüte die dir geweihten Jungfrauen;^qschenke ihnen Freude in deinem Dienst.^pNimm unsere Verstorbenen auf zu dir;^qlass sie ruhen in deinem Frieden.",
          "oration": "Gütiger Gott, nimm unser Abendopfer an. Gib, dass unser Herz niemals aufhört, über deine Weisung nachzusinnen, und schenke uns als Lohn das Licht des ewigen Lebens. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "5": {
        "Laudes": {
          "hymn_1": 215.0,
          "hymn_kl": 403.0,
          "ps_1": 51.0,
          "ps_2": 175.0,
          "ps_3": 147.2,
          "ant_1": "Ein zerbrochenes und zerschlagenes Herz wirst du, o Gott, nicht verschmähen.",
          "ant_2": "Auch wenn du zürnst, Herr, denk an dein Erbarmen.",
          "ant_3": "Jerusalem, preise den Herrn; Zion, lobsinge deinem Gott!",
          "les_buch": "Eph",
          "les_stelle": "2,13–16",
          "les_text": "Jetzt seid ihr, die ihr einst in der Ferne wart, durch Christus Jesus, nämlich durch sein Blut, in die Nähe gekommen.^pDenn er ist unser Friede. Er vereinigte die beiden Teile, Juden und Heiden, und riss durch sein Sterben die trennende Wand der Feindschaft nieder.^pEr hob das Gesetz mit seinen Geboten und Forderungen auf, um die zwei in seiner Person zu dem einen neuen Menschen zu machen. Er stiftete Frieden^pund versöhnte die beiden durch das Kreuz mit Gott in einem einzigen Leib. Er hat in seiner Person die Feindschaft getötet.",
          "resp1_1": "Ich rufe zu Gott, dem Höchsten,",
          "resp1_2": "zu Gott, der mir beisteht.",
          "resp1_3": "Er sendet mir Hilfe vom Himmel; zu ihm flüchte ich.",
          "ant_ev": "Durch die barmherzige Liebe unseres Gottes hat uns besucht das aufstrahlende Licht aus der Höhe.",
          "bitten_e": "Gepriesen sei Christus, der uns mit seinem kostbaren Blut erkauft hat. Zu ihm lasst uns beten:",
          "bitten_r": "Lamm Gottes, erbarme dich unser.",
          "bitten": "Als du am Kreuze hingst, floss Blut und Wasser aus deiner Seite;^qwasche uns rein von unseren Sünden.^pDu hast den Neuen Bund in deinem Blut gestiftet;^qgib, dass wir dir die Treue halten.^pDurch dein Kreuz hast du die ganze Welt erlöst;^qgib, dass wir in allen Dingen deine Spur erkennen.^pDu hast uns den Anfang dieses Tages geschenkt;^qstärke uns auf dem Weg deiner Nachfolge.",
          "oration": "Allmächtiger Gott, wir bringen dir unser Morgenlob dar. Gib, dass unser Lied einst sich vollende im Chor deiner Heiligen. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "hymn_1": 402.0,
          "hymn_nacht": 2402.0,
          "ps_1": 38.1,
          "ps_2": 38.2,
          "ps_3": 38.3,
          "ant_1": "Schwer lastet deine Hand auf mir, strafe mich nicht in deinem Zorn.",
          "ant_2": "All mein Sehnen, Herr, liegt offen vor dir, mein Seufzen ist dir nicht verborgen.^ö",
          "ant_3": "Ich bekenne dir meine Schuld; verlass mich nicht, Herr du mein Heil.^ö",
          "resp0_0": "Nach deiner Hilfe sehnt sich meine Seele.",
          "resp0_1": "Meine Augen sehnen sich nach deiner Verheißung."
        },
        "Non": {
          "les_buch": "Weish",
          "les_stelle": "1,13–14",
          "les_text": "Gott hat den Tod nicht gemacht und hat keine Freude am Untergang der Lebenden. Zum Dasein hat er alles geschaffen und heilbringend sind die Geschöpfe der Welt. Kein Gift des Verderbens ist in ihnen, das Reich des Todes hat keine Macht auf der Erde; denn die Gerechtigkeit ist unsterblich.",
          "resp1_0": "Der Herr entriss mein Leben dem Tod.",
          "resp1_1": "Ich gehe meinen Weg vor ihm im Lande der Lebenden.",
          "oration": "Herr Jesus Christus, um die neunte Stunde hast du dem reumütigen Schächer vom Marterpfahl des Kreuzes aus dein Reich versprochen. Wir bekennen dir, dass wir Sünder sind und bitten dich voll Vertrauen: Lass auch uns nach dem Tod bei dir im Paradiese sein. Der du lebst und herrschest in alle Ewigkeit."
        },
        "Sext": {
          "les_buch": "Bar",
          "les_stelle": "4,28–29",
          "les_text": "Wie euer Sinn auf den Abfall von Gott gerichtet war, so zeigt nun zehnfachen Eifer, umzukehren und ihn zu suchen. Er, der über euch das Unheil gebracht hat, wird mit eurer Rettung euch ewige Freude bringen.",
          "resp1_0": "Beim Herrn ist die Huld.",
          "resp1_1": "Bei ihm ist Erlösung in Fülle.",
          "oration": "Herr, Jesus Christus, um die sechste Stunde kam Finsternis über die ganze Welt, als du unschuldig das Kreuz bestiegst, um uns von unserer Schuld zu erlösen. Erleuchte unsere Dunkelheit, damit wir zum ewigen Leben finden in deinem Licht. Der du lebst und herrschest in alle Ewigkeit."
        },
        "Terz": {
          "ps_1": 119.073,
          "ps_2": 59.0,
          "ps_3": 60.0,
          "ant_1": "Tröste mich mit deiner Huld, wie du es deinem Knecht verheißen hast.",
          "ant_2": "Mein Gott, beschütze mich vor meinen Feinden.",
          "ant_3": "Selig der Mensch, den Gott zurechtweist; Gott schlägt, doch seine Hände heilen auch.",
          "les_buch": "Dtn",
          "les_stelle": "1,31b",
          "les_text": "Der Herr, dein Gott, hat dich auf dem ganzen Weg, den ihr gewandert seid, getragen, wie ein Vater seinen Sohn trägt.",
          "resp1_0": "Nimm mich auf, o Herr, nach deiner Verheißung, und ich werde leben.",
          "resp1_1": "Lass mich nicht scheitern in meiner Hoffnung.",
          "oration": "Herr Jesus Christus, um die dritte Stunde wurdest du zur Kreuzigung geführt für das Heil der Welt. Wir bitten dich, vergib, was wir Böses getan haben und bewahre uns vor neuer Schuld. Der du lebst und herrschest in alle Ewigkeit."
        },
        "Vesper": {
          "hymn_1": 325.0,
          "ps_1": 116.1,
          "ps_2": 121.0,
          "ps_3": 156.0,
          "ant_1": "Herr, lass meine Füße nicht straucheln, entreiße mein Leben dem Tod!",
          "ant_2": "Meine Hilfe kommt vom Herrn, der Himmel und Erde gemacht hat.",
          "ant_3": "Deine Wege sind gerecht und wahr, du König aller Zeiten.",
          "les_buch": "1 Kor",
          "les_stelle": "2,7–10a",
          "les_text": "Wir verkündigen das Geheimnis der verborgenen Weisheit Gottes, die Gott vor allen Zeiten vorausbestimmt hat zu unserer Verherrlichung. Keiner der Machthaber dieser Welt hat sie erkannt; denn hätte einer sie erkannt, so hätten sie den Herrn der Herrlichkeit nicht gekreuzigt. Nein, wir verkündigen, wie in der Schrift steht, was kein Auge gesehen und kein Ohr gehört hat, was keinem Menschen in den Sinn gekommen ist: das Große, das Gott denen bereitet hat, die ihn lieben. Denn uns hat es Gott enthüllt durch den Geist.",
          "resp1_1": "Der Sünden wegen ist Christus gestorben,",
          "resp1_2": "um uns zu Gott zu führen.",
          "resp1_3": "Getötet wurde er dem Fleische nach, dem Geiste nach aber zum Leben erweckt.",
          "ant_ev": "Denke, Herr, an dein Erbarmen, das du unseren Vätern verheißen hast.",
          "bitten_e": "Lasst uns beten zu unserem Heiland Jesus Christus, der sich für uns dahingegeben hat:",
          "bitten_r": "Herr, erbarme dich deines Volkes.",
          "bitten": "Du bist denen nahe, die dich suchen;^qtröste alle, die im Elend leben.^pNimm dich der Vertriebenen und Verbannten an;^qlass sie an dir nicht irre werden.^pGib, dass die Sünder deinem Ruf nicht widerstehen^qund dass wir alle uns zu dir bekehren.^pSieh an die Not der Sterbenden;^qsende deine Engel, dass sie ihnen beistehen.^pSchenke den Verstorbenen dein Heil^qund vollende an ihnen das Werk der Erlösung.",
          "oration": "Herr, unser Gott, im Ärgernis des Kreuzes hast du deine unerforschliche Weisheit kundgetan. Lass uns die verborgene Herrlichkeit des Leidens Christi erkennen, damit wir niemals an seinem Kreuz irre werden, sondern allezeit uns im Kreuze rühmen. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "6": {
        "Laudes": {
          "hymn_1": 216.0,
          "hymn_kl": 226.0,
          "ps_1": 92.0,
          "ps_2": 176.0,
          "ps_3": 8.0,
          "ant_1": "Am Morgen verkünden wir, Herr, deine Huld und in den Nächten deine Treue.",
          "ant_2": "Preist die Größe unseres Gottes; denn er ist treu und gerecht.",
          "ant_3": "Wie gewaltig ist dein Name, o Herr, auf der ganzen Erde!",
          "les_buch": "Röm",
          "les_stelle": "12,14–16a",
          "les_text": "Segnet eure Verfolger; segnet sie, verflucht sie nicht. Freut euch mit den Fröhlichen und weint mit den Weinenden. Seid untereinander eines Sinnes; strebt nicht hoch hinaus, sondern bleibt demütig.",
          "resp1_1": "Jubeln soll dir, Herr, mein Mund,",
          "resp1_2": "dir will ich singen und spielen.",
          "resp1_3": "Von deiner Gerechtigkeit soll meine Zunge reden.",
          "ant_ev": "Herr, lenke unsere Schritte auf den Weg des Friedens.",
          "bitten_e": "Gepriesen sei unser Herr Jesus Christus. Zu ihm lasst uns beten:",
          "bitten_r": "Christus, hilf uns.",
          "bitten": "Am Morgen dieses Tages gedenken wir deiner Auferstehung;^qschenke uns heute die Freude deiner Erlösten.^pHilf uns, dass wir von dir Zeugnis geben^qund mit dir den Vater loben.^pLass uns in jedem Menschen dein Bild erkennen;^qnimm unseren Dienst an den Brüdern entgegen.^pDu bist der wahre Weinstock, und wir sind die Rebzweige;^qgib, dass wir in dir bleiben und Frucht bringen.",
          "oration": "Dich lobe, Herr, unser Mund, dich lobe unser Leben. Von dir kommt alles, was wir sind und haben. Sei gepriesen durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "hymn_1": 403.0,
          "hymn_nacht": 1402.0,
          "ps_1": 106.1,
          "ps_2": 106.2,
          "ps_3": 106.3,
          "ant_1": "Herr, denk an uns, komm und bring uns Hilfe.^ö",
          "ant_2": "Hüte dich, den Bund zu vergessen, den der Herr, dein Gott, mit dir geschlossen hat!",
          "ant_3": "Hilf uns, Herr, unser Gott, führe uns aus den Völkern zusammen!^ö",
          "resp0_0": "Zeige mir, Herr, deine Wege.",
          "resp0_1": "Lehre mich deine Pfade."
        },
        "Non": {
          "les_buch": "Jer",
          "les_stelle": "6,16",
          "les_text": "Stellt euch an die Wege und haltet Ausschau, fragt nach den Pfaden der Vorzeit, fragt, wo der Weg zum Guten liegt; geht auf ihm, so werdet ihr Ruhe finden für eure Seele!",
          "resp1_0": "Deine Vorschriften sind mein Erbteil auf ewig.",
          "resp1_1": "Sie erfreuen mein Herz.",
          "oration": "Herr, unser Gott, höre auf die Fürsprache der seligen Jungfrau Maria und erfülle unsere Sehnsucht nach Frieden, damit wir alle Tage unseres Lebens frei sind für den Dienst vor deinem Angesicht und ohne Gefährdung zu dir gelangen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Sext": {
          "les_buch": "1 Kön",
          "les_stelle": "2,2b–3",
          "les_text": "Sei stark und mannhaft! Erfülle deine Pflicht gegen den Herrn, deinen Gott: Geh auf seinen Wegen und befolge alle Gebote, Befehle, Satzungen und Anordnungen, die im Gesetz des Mose niedergeschrieben sind. Dann wirst du Erfolg haben bei allem, was du tust, und in allem, was du unternimmst.",
          "resp1_0": "Herr, führe mich auf dem Pfade deiner Gebote.",
          "resp1_1": "An ihm habe ich Gefallen.",
          "oration": "Herr, du Feuer ewiger Liebe, entzünde unser Herz mit deiner Glut, damit wir dich über alles lieben und aus Liebe zu dir auch unsere Brüder. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Terz": {
          "ps_1": 119.081,
          "ps_2": 61.0,
          "ps_3": 64.0,
          "ant_1": "Himmel und Erde werden vergehen, aber meine Worte werden nicht vergehen.",
          "ant_2": "Du bist meine Zuflucht, Herr, ein fester Turm gegen die Feinde.",
          "ant_3": "Vor den Schrecken des Feindes schütze mein Leben, o Herr.",
          "les_buch": "Dtn",
          "les_stelle": "8,5b–6",
          "les_text": "Der Herr, dein Gott, erzieht dich, wie ein Vater seinen Sohn erzieht. Du sollst auf die Gebote des Herrn, deines Gottes, achten, auf seinen Wegen gehen und ihn fürchten.",
          "resp1_0": "Die Furcht des Herrn ist rein, sie besteht für immer.",
          "resp1_1": "Die Entscheide des Herrn sind wahr, gerecht sind sie alle.",
          "oration": "Gott, allmächtiger Vater, du unser Herr, wir neigen uns vor dir. Sende uns das Licht des Heiligen Geistes, damit wir sicher sind vor jedem Feind und in der Freude des Herzens dir unser Lob weihen, heute und alle Tage. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Vesper": {
          "hymn_1": 326.0,
          "ps_1": 113.0,
          "ps_2": 116.0,
          "ps_3": 157.0,
          "ant_1": "Vom Aufgang der Sonne bis zu ihrem Untergang sei gelobt der Name des Herrn. Halleluja.",
          "ant_2": "Ich will den Kelch des Heiles erheben und anrufen den Namen des Herrn. Halleluja.",
          "ant_3": "Jesus, der Herr hat sich selbst erniedrigt; darum hat Gott ihn erhöht in Ewigkeit. Halleluja.",
          "les_buch": "Hebr",
          "les_stelle": "13,20–21",
          "les_text": "Der Gott des Friedens, der Jesus, unseren Herrn, den erhabenen Hirten seiner Schafe, von den Toten heraufgeführt hat durch das Blut eines ewigen Bundes, er mache euch tüchtig in allem Guten, damit ihr seinen Willen tut. Er bewirke in uns, was ihm gefällt, durch Jesus Christus, dem die Ehre sei in alle Ewigkeit! Amen.",
          "resp1_1": "Wie groß sind deine Werke, o Herr.",
          "resp1_2": "Mit Weisheit hast du sie alle geschaffen.",
          "resp1_3": "Erfüllt ist die Erde von deinen Geschöpfen.",
          "ant_ev": "0",
          "bitten_e": "Lasst uns beten zu Gott, unserem Vater, der alle Menschen liebt:",
          "bitten_r": "Herr, zeige uns dein Erbarmen.",
          "bitten": "Alles Gute kommt von dir;^qgib, dass alle Menschen dir danken.^pDu lässt dein Wort in der ganzen Welt verkünden;^qstärke deine Boten mit der Kraft des Heiligen Geistes.^pDu sprichst zu uns durch die Zeichen der Zeit;^qhilf, dass alle Christen mitbauen an einer menschenwürdigen Welt.^pDu vermagst Seele und Leib zu heilen;^qrichte die Kranken auf und stehe den Sterbenden bei.^pDu hast die Namen der Deinen in das Buch des Lebens geschrieben;^qnimm unsere Verstorbenen auf in die Schar der Heiligen.",
          "oration": "0"
        }
      }
    },
    "3": {
      "0": {
        "Laudes": {
          "hymn_1": 210.0,
          "hymn_kl": 230.0,
          "ps_1": 93.0,
          "ps_2": 160.0,
          "ps_3": 148.0,
          "ant_1": "Gewaltig ist der Herr in der Höhe. Halleluja.",
          "ant_2": "Herr, du bist des Lobes würdig und hoch erhaben in Ewigkeit. Halleluja.",
          "ant_3": "Lobet den Herrn vom Himmel her. Halleluja.",
          "les_buch": "Ez",
          "les_stelle": "37,12b–14",
          "les_text": "So spricht Gott, der Herr: Ich öffne eure Gräber und hole euch, mein Volk, aus euren Gräbern herauf. Ich bringe euch zurück in das Land Israel. Wenn ich eure Gräber öffne und euch, mein Volk, aus euren Gräbern heraufhole, dann werdet ihr erkennen, dass ich der Herr bin. Ich hauche euch meinen Geist ein, dann werdet ihr lebendig, und ich bringe euch wieder in euer Land. Dann werdet ihr erkennen, dass ich der Herr bin. Ich habe gesprochen, und ich führe es aus – Spruch des Herrn.",
          "resp1_1": "Christus, du Sohn des lebendigen Gottes,",
          "resp1_2": "erbarme dich unser.",
          "resp1_3": "Du sitzest zur Rechten des Vaters.",
          "ant_ev": "0",
          "bitten_e": "Gepriesen sei Gott, der Vater, der uns durch Christus den Heiligen Geist gesandt hat. Zu ihm lasst uns beten:",
          "bitten_r": "Herr, nimm an unser Gebet.",
          "bitten": "Du bist der Schöpfer des Lichtes;^qlass uns diesen Tag als dein Geschenk annehmen.^pDurch die Auferstehung deines Sohnes hast du der Welt neue Hoffnung geschenkt;^qgib, dass wir aus dieser Hoffnung leben.^pDu hast deiner Kirche den Heiligen Geist gesandt;^qfestige uns in der Treue zum Evangelium.^pDu bist allen Lobes würdig;^qlass uns dich heute mit allen Erlösten preisen.",
          "oration": "0"
        },
        "Lesehore": {
          "hymn_1": 400.0,
          "ps_1": 145.2,
          "ps_2": 145.3,
          "ps_3": 145.4,
          "ant_1": "Ich will dich preisen Tag für Tag und deinen Namen loben immer und ewig. Halleluja.",
          "ant_2": "Dein Königtum, o Herr, ist ein Königtum für ewige Zeiten. Halleluja.",
          "ant_3": "Der Herr ist treu in all seinen Worten, voll Huld in all seinen Taten. Halleluja.",
          "resp0_0": "Mein Sohn, achte auf meine Worte.",
          "resp0_1": "Neige dein Ohr meiner Rede."
        },
        "Non": {
          "les_buch": "2 Tim",
          "les_stelle": "1,9",
          "les_text": "Gott hat uns gerettet; mit einem heiligen Ruf hat er uns gerufen, nicht aufgrund unserer Werke, sondern aus eigenem Entschluss und aus Gnade, die uns schon vor ewigen Zeiten in Christus Jesus geschenkt wurde.",
          "resp1_0": "Der Herr führte sie sicher, sie fürchteten nichts.",
          "resp1_1": "Er brachte sie in sein heiliges Land.",
          "oration": "0"
        },
        "Sext": {
          "les_buch": "Röm",
          "les_stelle": "8,22–23",
          "les_text": "Wir wissen, dass die gesamte Schöpfung bis zum heutigen Tag seufzt und in Geburtswehen liegt. Aber auch wir, obwohl wir als Erstlingsgabe den Geist haben, seufzen in unserem Herzen und warten darauf, dass wir mit der Erlösung unseres Leibes als Söhne offenbar werden.",
          "resp1_0": "Lobe den Herrn, meine Seele.",
          "resp1_1": "Er rettet dein Leben vor dem Untergang.",
          "oration": "0"
        },
        "Terz": {
          "ps_1": 118.1,
          "ps_2": 118.2,
          "ps_3": 118.3,
          "ant_1": "In der Bedrängnis rief ich zum Herrn, und er hat mich erhört. Halleluja.",
          "ant_2": "Die Rechte des Herrn hat mich erhöht. Halleluja.",
          "ant_3": "Gott, der Herr, hat uns erleuchtet. Halleluja.",
          "les_buch": "Röm",
          "les_stelle": "8,15–16",
          "les_text": "Ihr habt nicht einen Geist empfangen, der euch zu Sklaven macht, so dass ihr euch immer noch fürchten müsstet, sondern ihr habt den Geist empfangen, der euch zu Söhnen macht, den Geist, in dem wir rufen: Abba, Vater! So bezeugt der Geist selber unserem Geist, dass wir Kinder Gottes sind.",
          "resp1_0": "Bei dir, o Herr, ist die Quelle des Lebens.",
          "resp1_1": "In deinem Licht schauen wir das Licht.",
          "oration": "0"
        },
        "Vesper": {
          "hymn_1": 310.0,
          "hymn_kl": 71151.0,
          "ps_1": 110.0,
          "ps_2": 111.0,
          "ps_3": 151.0,
          "ant_1": "So spricht der Herr zu meinem Herrn: Setze dich mir zur Rechten. Halleluja.",
          "ant_2": "Ein Gedächtnis seiner Wunder hat der Herr gestiftet. Halleluja.",
          "ant_3": "Der Herr, unser Gott, ist König, er, der Herrscher über das All. Halleluja.",
          "les_buch": "1 Petr",
          "les_stelle": "1,3–5",
          "les_text": "Gepriesen sei der Gott und Vater Jesu Christi, unseres Herrn: Er hat uns in seinem großen Erbarmen neu geboren, damit wir durch die Auferstehung Jesu Christi von den Toten eine lebendige Hoffnung haben und das unzerstörbare, makellose und unvergängliche Erbe empfangen, das im Himmel für euch aufbewahrt ist. Gottes Macht behütet euch durch den Glauben, damit ihr das Heil erlangt, das am Ende der Zeit offenbart werden soll.",
          "resp1_1": "Gepriesen bist du, Herr, am Gewölbe des Himmels.",
          "resp1_2": "Gerühmt und verherrlicht in Ewigkeit.",
          "resp1_3": "Gepriesen ist dein herrlicher Name.",
          "ant_ev": "0",
          "bitten_e": "Lasst uns beten zu Gott, dem Vater, der durch die Auferstehung seines Sohnes die Welt erneuert hat:",
          "bitten_r": "Herr, schenk uns dein Erbarmen.",
          "bitten": "Schenke deiner Kirche die Gaben des Heiligen Geistes;^qmach sie inmitten der Welt zu einem Zeichen des neuen Lebens.^pBewahre die Völker vor Angst und Verzweiflung;^qschenke der Welt Frieden und Sicherheit.^pGewähre deine Hilfe allen, die nach Gerechtigkeit streben;^qstehe den Unterdrückten bei.^pDu bist die Zuflucht und die Kraft der Schwachen;^qtröste die Betrübten, gib Brot den Hungernden.^pDu hast deinen Sohn durch den Tod hindurch in die Herrlichkeit geführt;^qlass unsere Verstorbenen mit ihm auferstehen zum ewigen Leben.",
          "oration": "0"
        }
      },
      "1": {
        "Laudes": {
          "hymn_1": 211.0,
          "hymn_kl": 231.0,
          "ps_1": 84.0,
          "ps_2": 181.0,
          "ps_3": 96.0,
          "ant_1": "Selig, die in deinem Hause wohnen. Sie loben dich allezeit.",
          "ant_2": "Kommt, wir ziehen hinauf zum Berg des Herrn.",
          "ant_3": "Singt dem Herrn, alle Länder der Erde, und preist seinen Namen.",
          "les_buch": "Jak",
          "les_stelle": "2,12–13",
          "les_text": "Redet und handelt wie Menschen, die nach dem Gesetz der Freiheit gerichtet werden! Denn das Gericht ist erbarmungslos gegen den, der kein Erbarmen gezeigt hat. Barmherzigkeit aber triumphiert über das Gericht.",
          "resp1_1": "Gepriesen sei der Herr",
          "resp1_2": "von Ewigkeit zu Ewigkeit.",
          "resp1_3": "Er allein tut große Wunder",
          "ant_ev": "Gepriesen sei der Herr, unser Gott.",
          "bitten_e": "Gepriesen sei Gott, der die Menschen ruft, dass sie wirken zu seiner Ehre. Zu ihm lasst uns beten:",
          "bitten_r": "Ehre sei Gott in der Höhe.",
          "bitten": "Du lenkst unser Leben an jedem Tag;^qgib, dass wir dir heute die Ehre erweisen.^pSteh uns bei, da wir die Arbeit dieses Tages auf uns nehmen;^qlenke unser Tun nach deinem Willen.^pLass unser Werk gelingen^qund mach es fruchtbar für unsere Brüder.^pSei mit allen, die uns heute begegnen;^qschenke ihnen deinen Frieden und deine Freude.",
          "oration": "Herr Jesus Christus, König des Himmels und der Erde, lenke und heilige heute unser Herz und unseren Leib, unsere Gedanken, Worte und Werke. Gib, dass wir tun, was du gebietest, damit wir mit deiner Hilfe das Heil erlangen und frei werden hier und auf ewig. Darum bitten wir dich, der du in der Einheit des Heiligen Geistes mit Gott dem Vater lebst und herrschest in alle Ewigkeit."
        },
        "Lesehore": {
          "hymn_1": 401.0,
          "hymn_nacht": 405.0,
          "ps_1": 50.1,
          "ps_2": 50.2,
          "ps_3": 50.3,
          "ant_1": "Bring Gott, dem Höchsten, als Opfer dein Lob.^ö",
          "ant_2": "Barmherzigkeit will ich, nicht Opfer, nicht Brandopfer, sondern Erkenntnis Gottes.^ö",
          "ant_3": "Barmherzigkeit will ich, nicht Opfer, nicht Brandopfer, sondern Erkenntnis Gottes.^ö",
          "resp0_0": "Höre, mein Volk, ich will reden.",
          "resp0_1": "Höre, denn ich bin dein Gott."
        },
        "Non": {
          "les_buch": "Kol",
          "les_stelle": "1,21–22",
          "les_text": "Auch ihr standet Christus einst fremd und feindlich gegenüber; denn euer Sinn trieb euch zu bösen Taten. Jetzt aber hat er euch durch den Tod seines sterblichen Leibes versöhnt, um euch heilig, untadelig und schuldlos vor sich treten zu lassen.",
          "resp1_0": "Singt dem Herrn, ihr, seine Frommen.",
          "resp1_1": "Preist seinen heiligen Namen.",
          "oration": "Gott, unser Herr, zur neunten Stunde, als Petrus und Johannes zum Tempel hinaufgingen, um zu beten, bitten auch wir dich im Namen Jesu: Schenke allen, die diesen Namen anrufen, dein Heil. Durch ihn, Christus, unseren Herrn."
        },
        "Sext": {
          "les_buch": "Röm",
          "les_stelle": "6,22",
          "les_text": "Jetzt, da ihr aus der Macht der Sünde befreit wurdet und zu Sklaven Gottes geworden seid, habt ihr einen Gewinn, der zu eurer Heiligung führt und das ewige Leben bringt.",
          "resp1_0": "Gott, wende dich uns zu und schenk uns neues Leben.",
          "resp1_1": "Dann wird dein Volk sich an dir freuen.",
          "oration": "Gott, du bist Herr und Hüter von Weinberg und Ernte; du teilst die Arbeit zu und gibst gerechten Lohn. Verleihe uns die Kraft, deine Fügung anzunehmen und die Last des Tages ohne Murren zu tragen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Terz": {
          "ps_1": 119.089,
          "ps_2": 71.1,
          "ps_3": 71.2,
          "ant_1": "Deine Weisungen suche ich, Herr, durch sie schenkst du mir Leben.",
          "ant_2": "Herr, du bist meine Hoffnung von Jugend auf.",
          "ant_3": "Auch wenn ich alt und grau bin, verlass mich nicht, du, mein Gott.",
          "les_buch": "2 Kor",
          "les_stelle": "13,11",
          "les_text": "Liebe Brüder, freut euch, kehrt zur Ordnung zurück, lasst euch ermahnen, seid eines Sinnes und lebt in Frieden! Dann wird der Gott der Liebe und des Friedens mit euch sein.",
          "resp1_0": "Die Augen des Herrn blicken auf die Gerechten.",
          "resp1_1": "Seine Ohren hören auf ihr Rufen.",
          "oration": "Gütiger Gott und Vater, du hast die Menschen zu gemeinsamer Arbeit berufen, damit sie einander ergänzen und jeder die Fähigkeit entfaltet, die du ihm gegeben hast, zum Wohle aller. Gib, dass wir unser Werk als deine Kinder verrichten, beseelt von deinem Geist und von der Liebe zu allen Menschen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Vesper": {
          "hymn_1": 311.0,
          "hymn_kl": 331.0,
          "ps_1": 123.0,
          "ps_2": 124.0,
          "ps_3": 152.0,
          "ant_1": "Unsere Augen schauen auf den Herrn, bis er uns gnädig ist.",
          "ant_2": "Unsere Hilfe ist im Namen des Herrn, der Himmel und Erde gemacht hat.",
          "ant_3": "Gott hat uns erwählt, seine Kinder zu werden durch Jesus Christus.",
          "les_buch": "Jak",
          "les_stelle": "4,11–12",
          "les_text": "Verleumdet einander nicht, Brüder! Wer seinen Bruder verleumdet oder seinen Bruder verurteilt, verleumdet das Gesetz und verurteilt das Gesetz; wenn du aber das Gesetz verurteilst, handelst du nicht nach dem Gesetz, sondern bist sein Richter. Nur einer ist der Gesetzgeber und Richter: er, der die Macht hat, zu retten und zu verderben. Wer aber bist du, dass du über deinen Nächsten richtest?",
          "resp1_1": "Heile mich, o Herr,",
          "resp1_2": "ich habe gegen dich gesündigt.",
          "resp1_3": "Erbarme dich meiner und sei mir gnädig,",
          "ant_ev": "Meine Seele preist die Größe des Herrn; denn auf die Niedrigkeit seiner Magd hat er geschaut.",
          "bitten_e": "Lasst uns beten zu unserem Herrn Jesus Christus, der alle Menschen an sich ziehen will:",
          "bitten_r": "Herr, führe alle Menschen zum Heil.",
          "bitten": "Du hast uns aus der Knechtschaft der Sünde befreit;^qhilf deiner Kirche, die Vergebung der Sünden zu verkünden.^pStärke unseren Bischof N. und alle Hirten der Kirche,^qdamit sie dir mit ganzer Hingabe dienen.^pGib, dass alle, die nach der Wahrheit suchen, dich finden^qund nicht aufhören, nach deiner Wahrheit zu streben.^pStehe den Witwen und Waisen und allen Verlassenen bei;^qlass sie deine Nähe erfahren.^pGedenke unserer Verstorbenen;^qnimm sie auf in dein himmlisches Reich.",
          "oration": "Gott, du bist das Licht, das sich nie verzehrt. Du hast uns durch diesen Tag geführt. Verzeihe uns, was wir gefehlt haben, und sei unser Licht auch in der Nacht. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "2": {
        "Invitatorium": {
          "ps_67": 0
        },
        "Laudes": {
          "hymn_1": 212.0,
          "hymn_kl": 232.0,
          "ps_1": 85.0,
          "ps_2": 182.0,
          "ps_3": 67.0,
          "ant_1": "Begnadet hast du, Herr, dein Land, hast deinem Volk die Schuld vergeben.",
          "ant_2": "Meine Seele sehnt sich nach dir in der Nacht, mein Geist verlangt nach dir am Morgen.",
          "ant_3": "Lass dein Antlitz über uns leuchten, o Herr.",
          "les_buch": "1 Joh",
          "les_stelle": "4,14–15",
          "les_text": "Wir haben gesehen und bezeugen, dass der Vater den Sohn gesandt hat als den Retter der Welt. Wer bekennt, dass Jesus der Sohn Gottes ist, in dem bleibt Gott, und er bleibt in Gott.",
          "resp1_1": "Gott ist mein Helfer,",
          "resp1_2": "auf ihn allein will ich vertrauen.",
          "resp1_3": "Meine Zuflucht und mein Retter,",
          "ant_ev": "Einen starken Retter hat der Herr uns erweckt, wie er verheißen hat durch den Mund seiner Propheten.",
          "bitten_e": "Gepriesen sei Jesus Christus, unser Erlöser. Zu ihm lasst uns beten:",
          "bitten_r": "Herr, erbarme dich unser.",
          "bitten": "Zum Beginn dieses Tages nimm das Lobgebet deiner Kirche an;^qlehre uns deine Herrlichkeit preisen.^pAuf dich vertrauen wir;^qlass uns nicht zuschanden werden.^pEile uns zu Hilfe;^qdenn ohne dich können wir nichts tun.^pMach uns verständnisvoll und barmherzig,^qdass wir helfen können, wo Hilfe not tut.",
          "oration": "Allmächtiger Gott, alles, was du erschaffen hast, ist gut und schön. Lass uns diesen Tag in deinem Namen freudig beginnen und in Wort und Tat aus Liebe zu dir und den Menschen vollenden. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "hymn_1": 402.0,
          "hymn_nacht": 2402.0,
          "ps_1": 68.1,
          "ps_2": 68.2,
          "ps_3": 68.3,
          "ant_1": "Gott steht auf; seine Feinde zerstieben; die ihn hassen, fliehen vor seinem Angesicht.^ö",
          "ant_2": "Gott ist ein Gott, der uns Rettung bringt; Gott, der Herr, führt uns heraus aus dem Tod.^ö",
          "ant_3": "Ihr Königreiche der Erde, singt für Gott und spielt für den Herrn.^ö",
          "resp0_0": "Ich will hören, was Gott redet.",
          "resp0_1": "Frieden verkündet der Herr seinem Volk."
        },
        "Non": {
          "les_buch": "Spr",
          "les_stelle": "22,22–23",
          "les_text": "Beraube den Schwachen nicht, denn er ist ja so schwach, zertritt den Armen nicht am Tor! Denn der Herr führt den Rechtsstreit für sie und raubt denen das Leben, die sie berauben.",
          "resp1_0": "Der Herr rettet den Armen, der keinen Helfer hat.",
          "resp1_1": "Er erbarmt sich des Gebeugten und Schwachen.",
          "oration": "Gott, um die neunte Stunde hast du dem Hauptmann Kornelius deinen Engel geschickt, dass er ihm den Weg des Heiles weise. Mach uns bereit, in der Gemeinschaft der Kirche mitzuwirken an der Rettung der Menschen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Sext": {
          "les_buch": "Dtn",
          "les_stelle": "15,7–8",
          "les_text": "Wenn bei dir ein Armer lebt, irgendeiner deiner Brüder in irgendeinem deiner Stadtbereiche in dem Land, das der Herr, dein Gott, dir gibt, dann sollst du nicht hartherzig sein und sollst deinem armen Bruder deine Hand nicht verschließen. Du sollst ihm deine Hand öffnen und ihm gegen Pfand leihen, was der Not, die ihn bedrückt, abhilft.",
          "resp1_0": "Herr, du hast die Sehnsucht der Armen gestillt.",
          "resp1_1": "Du stärkst ihr Herz, dein Ohr vernimmt ihr Rufen.",
          "oration": "Gütiger Gott, als Petrus um die sechste Stunde betete, hast du ihn belehrt, dass das Heil allen Völkern zuteil werden soll. Bewirke durch deine Gnade, dass unser Tagewerk dir gefällt und dem Heilsplan deiner Liebe dient. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Terz": {
          "ps_1": 119.097,
          "ps_2": 74.1,
          "ps_3": 74.2,
          "ant_1": "Die Erfüllung des Gesetzes ist die Liebe; wer den Nächsten liebt, hat das Gesetz erfüllt.",
          "ant_2": "Gedenke deiner Gemeinde, o Herr; denn sie ist dein von Anbeginn.",
          "ant_3": "Erhebe dich, Gott, und führe deine Sache.",
          "les_buch": "Jer",
          "les_stelle": "22,3",
          "les_text": "Sorgt für Recht und Gerechtigkeit und rettet den Ausgeplünderten aus der Hand des Gewalttäters! Fremde, Waisen und Witwen bedrängt und misshandelt nicht; vergießt kein unschuldiges Blut an diesem Ort!",
          "resp1_0": "Der Herr richtet den Erdkreis gerecht.",
          "resp1_1": "Er spricht den Völkern das Urteil, das sie verdienen.",
          "oration": "Allmächtiger, ewiger Gott. Um die dritte Stunde hast du deinen Heiligen Geist über die Apostel ausgegossen. Sende den Geist der Liebe auch in unser Herz, damit wir in Treue für dich Zeugnis geben vor den Menschen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Vesper": {
          "hymn_1": 312.0,
          "hymn_kl": 332.0,
          "ps_1": 125.0,
          "ps_2": 131.0,
          "ps_3": 153.0,
          "ant_1": "Wie Berge Jerusalem rings umgeben, so ist der Herr um sein Volk, von nun an auf ewig.",
          "ant_2": "Wenn ihr nicht werdet wie die Kinder, kommt ihr nicht in das Himmelreich.",
          "ant_3": "Du hast uns, Herr, zu Königen gemacht und zu Priestern für unseren Gott.",
          "les_buch": "Röm",
          "les_stelle": "12,9–12",
          "les_text": "Eure Liebe sei ohne Heuchelei. Verabscheut das Böse, haltet fest am Guten. Seid einander in brüderlicher Liebe zugetan, übertrefft euch in gegenseitiger Achtung. Lasst nicht nach in eurem Eifer, lasst euch vom Geist entflammen und dient dem Herrn. Seid fröhlich in der Hoffnung, geduldig in der Bedrängnis, beharrlich im Gebet.",
          "resp1_1": "Fest wie der Himmel steht dein Wort,",
          "resp1_2": "dein Wort, o Herr, bleibt ewig.",
          "resp1_3": "Deine Treue währt durch alle Geschlechter,",
          "ant_ev": "Mein Geist jubelt über Gott, meinen Herrn und meinen Retter.",
          "bitten_e": "Lasst uns beten zum Gott unserer Hoffnung:",
          "bitten_r": "Herr, erhöre uns.",
          "bitten": "In Christus hast du uns reich gemacht;^qführe alle Menschen zur Erkenntnis deines Sohnes.^pDu hast Macht über die Herzen der Mächtigen;^qgib den Staatsmännern Klugkeit und Maß.^pDu gibst den Künstlern schöpferische Kraft;^qschenke durch ihre Werke den Menschen Freude und Hoffnung.^pDu lässt nicht zu, dass jemand über seine Kraft versucht wird;^qstärke die Schwachen und richte die Gefallenen auf.^pGedenke unserer Verstorbenen;^qlass sie auferstehen zum ewigen Leben.",
          "oration": "Gütiger Gott, unser Abendgebet steige zu dir empor, und dein Segen komme auf uns herab, damit wir mit deiner Hilfe das Heil erlangen und frei werden, hier und auf ewig. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "3": {
        "Laudes": {
          "hymn_1": 213.0,
          "hymn_kl": 4301.0,
          "ps_1": 86.0,
          "ps_2": 183.0,
          "ps_3": 98.0,
          "ant_1": "Herr, erfreue deinen Knecht: ich erhebe meine Seele zu dir.",
          "ant_2": "Selig, wer rechtschaffen lebt und die Wahrheit sagt.",
          "ant_3": "Freut euch, jubelt und singt, jauchzt vor dem Herrn, dem König.",
          "les_buch": "Ijob",
          "les_stelle": "1,21; 2,10b",
          "les_text": "Nackt kam ich hervor aus dem Schoß meiner Mutter; nackt kehre ich dahin zurück. Der Herr hat gegeben, der Herr hat genommen; gelobt sei der Name des Herrn! Nehmen wir das Gute an von Gott, sollen wir dann nicht auch das Böse annehmen?",
          "resp1_1": "Zu deinen Geboten neige mein Herz,",
          "resp1_2": "deinem Gesetz will ich folgen.",
          "resp1_3": "Belebe mich durch deine Weisung.",
          "ant_ev": "Vollende an uns dein Erbarmen, o Herr, und denk an deinen heiligen Bund.",
          "bitten_e": "Gepriesen sei Jesus Christus, der bei uns bleibt bis ans Ende der Zeiten. Zu ihm lasst uns beten:",
          "bitten_r": "Kyrie, eleison.",
          "bitten": "Du schenkst uns heute Licht und Leben;^qmach uns dankbar für deine Gaben.^pDu hast uns in dein Volk gerufen;^qfestige uns in der Treue zu dir.^pDu führst die Kirche auf den Weg deiner Gebote;^qbewahre uns vor Schuld und Sünde.^pDu nährst uns am Tisch des Wortes und des Sakramentes,^qgib, dass wir in der Kraft dieser Speise dir folgen.",
          "oration": "Allmächtiger Gott, deine Weisheit hat uns erschaffen, und deine Vorsehung leitet uns. Lass dein heiliges Licht in unseren Herzen leuchten, damit wir in allem, was wir heute sinnen und tun, dir in Treue dienen. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "hymn_1": 403.0,
          "hymn_nacht": 1402.0,
          "ps_1": 89.1,
          "ps_2": 89.2,
          "ps_3": 89.3,
          "ant_1": "Von deiner Huld, o Herr, will ich ewig singen, bis zum fernsten Geschlecht will ich laut deine Treue verkünden.^ö",
          "ant_2": "Der Sohn Gottes ist dem Fleische nach gekommen als Nachkomme Davids.^ö",
          "ant_3": "Ich habe David, meinem Knecht, geschworen: Sein Geschlecht soll bleiben auf ewig.^ö",
          "resp0_0": "Herr, deine Worte bringen Erleuchtung.",
          "resp0_1": "Den Unerfahrenen schenken sie Einsicht."
        },
        "Non": {
          "les_buch": "Kol",
          "les_stelle": "3,14–15",
          "les_text": "Liebt einander, denn die Liebe ist das Band, das alles zusammenhält und vollkommen macht. In eurem Herzen herrsche der Friede Christi; dazu seid ihr berufen als Glieder des einen Leibes. Seid dankbar!",
          "resp1_0": "Die Armen erben das Land.",
          "resp1_1": "Sie genießen Glück in Fülle.",
          "oration": "Herr Jesus Christus, am Kreuz hast du die Arme ausgebreitet, um alle Menschen zu retten. Lass unsere Werke dir gefallen und sichtbar machen, dass du die Welt erlöst hast. Der du lebst und herrschest in alle Ewigkeit."
        },
        "Sext": {
          "les_buch": "1 Kor",
          "les_stelle": "13,8–9.13",
          "les_text": "Die Liebe hört niemals auf. Prophetisches Reden hat ein Ende, verzückte Rede verstummt, Erkenntnis vergeht. Denn Stückwerk ist unser Erkennen, Stückwerk unser prophetisches Reden; Für jetzt bleiben Glaube, Hoffnung, Liebe, diese drei; doch am größten unter ihnen ist die Liebe.",
          "resp1_0": "Deine Güte, o Herr, lass über uns walten.",
          "resp1_1": "Denn nach dir schauen wir aus.",
          "oration": "Allmächtiger, gütiger Gott, in der Mitte des Tages lässt du uns innehalten und zur Ruhe kommen. Schau gnädig auf unsere Arbeit. Mache gut, was wir falsch gemacht haben und gib, dass am Abend unser ganzes Tagewerk dir gefallen kann. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Terz": {
          "ps_1": 119.105,
          "ps_2": 70.0,
          "ps_3": 75.0,
          "ant_1": "Ich bin das Licht der Welt. Wer mir nachfolgt, wandelt nicht in Finsternis, sondern hat das Licht des Lebens.",
          "ant_2": "Herr, steh mir bei; denn ich bin arm und gebeugt.",
          "ant_3": "Gott richtet nicht nach dem Augenschein, sondern nach Gerechtigkeit und Recht.",
          "les_buch": "1 Kor",
          "les_stelle": "13,4–7",
          "les_text": "Die Liebe ist langmütig, die Liebe ist gütig. Sie ereifert sich nicht, sie prahlt nicht, sie bläht sich nicht auf. Sie handelt nicht ungehörig, sucht nicht ihren Vorteil, lässt sich nicht zum Zorn reizen, trägt das Böse nicht nach. Sie freut sich nicht über das Unrecht, sondern freut sich an der Wahrheit. Sie erträgt alles, glaubt alles, hofft alles, hält allem stand.",
          "resp1_0": "Die dich suchen, Herr, sollen sich freuen und jubeln.",
          "resp1_1": "Sie sollen immerdar sprechen: Gepriesen sei der Herr.",
          "oration": "Herr, heiliger Vater, Gott, auf dessen Treue wir bauen, du hast den verheißenen Geist gesandt, um die Menschen zusammenzuführen, die durch die Sünde getrennt sind. Gib, dass wir die Einheit und den Frieden als deinen Auftrag erkennen und nach Kräften fördern. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Vesper": {
          "hymn_1": 313.0,
          "hymn_kl": 333.0,
          "ps_1": 126.0,
          "ps_2": 127.0,
          "ps_3": 154.0,
          "ant_1": "Die mit Tränen säen, werden mit Jubel ernten.",
          "ant_2": "Herr, erbaue uns das Haus und bewache die Stadt.",
          "ant_3": "Er ist der Erstgeborene der ganzen Schöpfung, in allem hat er den Vorrang.",
          "les_buch": "Eph",
          "les_stelle": "3,20–21",
          "les_text": "Gott, der durch die Macht, die in uns wirkt, unendlich viel mehr tun kann, als wir erbitten oder uns ausdenken können, er werde verherrlicht durch die Kirche und durch Christus Jesus in allen Generationen, für ewige Zeiten. Amen.",
          "resp1_1": "Herr, auf dich vertraue ich,",
          "resp1_2": "erlöse mich und sei mir gnädig.",
          "resp1_3": "Raff mich nicht hinweg mit den Sündern, lass mich nicht zu Grunde gehn.",
          "ant_ev": "Großes hat an mir getan der Mächtige, sein Name ist heilig.",
          "bitten_e": "Lasst uns beten zu Gott, der sich aller Menschen erbarmt:",
          "bitten_r": "Wir bitten dich, erhöre uns.",
          "bitten": "Du rufst alle Menschen zum Heil;^qgib, dass sie deinen Ruf vernehmen.^pGedenke aller, die sich zu dir bekennen;^qlass sie spüren, dass sie Kinder eines Vaters sind.^pDein Sohn hat auf Erden mit seinen eigenen Händen gearbeitet;^qgedenke derer, die durch ihrer Hände Arbeit ihr Brot verdienen.^pSchenke neue Hoffnung denen, die durch Misserfolg und Undank entmutigt sind,^qund bewahre vor Hochmut die Erfolgreichen, damit sie nicht überheblich werden.^pGedenke unserer verstorbenen Brüder und Schwestern^qund schenke ihnen das ewige Leben.",
          "oration": "Gütiger Gott und Vater, höre auf die Stimme deiner Kirche und nimm ihr Abendgebet an. Verzeih uns unsere Sünden. Gib, dass wir dir in Treue dienen und in deiner Liebe geborgen sind. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "4": {
        "Laudes": {
          "hymn_1": 214.0,
          "hymn_kl": 234.0,
          "ps_1": 87.0,
          "ps_2": 184.0,
          "ps_3": 99.0,
          "ant_1": "Herrliches sagt man von dir, du Stadt unseres Gottes.",
          "ant_2": "Der Herr kommt mit Macht und mit ihm sein Siegespreis.",
          "ant_3": "Rühmt den Herrn, unsern Gott; an seinem heiligen Berg werft euch nieder.",
          "les_buch": "1 Petr",
          "les_stelle": "4,10.11c",
          "les_text": "Dient einander als gute Verwalter der vielfältigen Gnade Gottes, jeder mit der Gabe, die er empfangen hat! Wer redet, der rede mit den Worten, die Gott ihm gibt; wer dient, der diene aus der Kraft, die Gott verleiht. So wird in allem Gott verherrlicht durch Jesus Christus.",
          "resp1_1": "Aus ganzem Herzen rufe ich,",
          "resp1_2": "erhöre mich und sei mir gnädig.",
          "resp1_3": "Herr, deine Weisung will ich befolgen.",
          "ant_ev": "Dienet dem Herrn in Heiligkeit, denn er befreit uns aus der Hand unserer Feinde.",
          "bitten_e": "Gepriesen sei Gott, der allmächtige Vater, der allezeit für uns sorgt. Zu ihm lasst uns beten:",
          "bitten_r": "Dir sei Ehre in Ewigkeit.",
          "bitten": "Gott, du hast uns Menschen wunderbar geschaffen und noch wunderbarer erneuert;^qgib, dass wir dir allezeit danken.^pDu hast uns zum Beginn dieses neuen Tages geführt;^qgib, dass wir über all unserem Tun dich nicht vergessen.^pReinige unser Herz von jedem bösen Verlangen;^qmach uns bereit, heute in allem deinen Willen zu tun.^pÖffne unsere Augen für die Not der Mitmenschen^qund lass sie unsere Hilfe erfahren.",
          "oration": "Allmächtiger Gott, erleuchte die Völker, die im Schatten des Todes sitzen, mit dem Licht jener Herrlichkeit, mit der uns der Aufgang aus der Höhe heimgesucht hat, Jesus Christus, unser Herr. Der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "hymn_1": 401.0,
          "hymn_nacht": 405.0,
          "ps_1": 89.4,
          "ps_2": 89.5,
          "ps_3": 90.0,
          "ant_1": "Herr, denk daran, was uns geschehen, blick her und sieh unsere Schmach.",
          "ant_2": "Ich bin die Wurzel Davids und sein Stamm, ich bin der leuchtende Stern, der Morgenstern.^ö",
          "ant_3": "Unsere Jahre vergehen wie Gras, Du aber, Gott, bleibst in Ewigkeit.^ö",
          "resp0_0": "Herr, bei dir ist die Quelle des Lebens.",
          "resp0_1": "In deinem Licht schauen wir das Licht."
        },
        "Non": {
          "les_buch": "Est",
          "les_stelle": "10,3f",
          "les_text": "Mein Volk, das sind die Israeliten; sie haben zu Gott geschrien und sind gerettet worden. Der Herr hat sein Volk gerettet, der Herr hat uns von allen diesen Heiden erlöst. Gott hat große Zeichen und Wunder getan, wie sie unter den Völkern noch nie geschehen sind.",
          "resp1_0": "Ich danke dir, du hast mich erhört.",
          "resp1_1": "Herr, du bist mein Retter.",
          "oration": "Herr, gib uns die Kraft, dem Leidensmut deines eingeborenen Sohnes zu folgen und die Widrigkeiten des Lebens in Geduld zu ertragen. Darum bitten wir durch ihn, Christus, unseren Herrn."
        },
        "Sext": {
          "les_buch": "Dtn",
          "les_stelle": "4,7",
          "les_text": "Welche große Nation hätte Götter, die ihr so nah sind, wie Jahwe, unser Gott, uns nah ist, wo immer wir ihn anrufen?",
          "resp1_0": "Nahe ist der Herr allen, die zu ihm rufen.",
          "resp1_1": "Er erhört ihr Schreien und rettet sie.",
          "oration": "Allmächtiger, ewiger Gott, bei dir gibt es keine Finsternis, denn du wohnst im Licht. Sende einen Strahl deines Lichtes in unser Herz, damit wir den Sinn deiner Gebote erkennen und bereitwillig deine Wege gehen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Terz": {
          "ps_1": 119.113,
          "ps_2": 79.0,
          "ps_3": 80.0,
          "ant_1": "Herr, stütze mich, wie du es verheißen hast, damit ich lebe.",
          "ant_2": "Hilf uns, du Gott unseres Heils. Vergib uns die Sünden.",
          "ant_3": "Gott der Scharen, blicke vom Himmel herab. Komm und sorge für deinen Weinstock.",
          "les_buch": "Weish",
          "les_stelle": "19,22",
          "les_text": "In allem hast du, Herr, dein Volk groß gemacht und verherrlicht; du hast es nicht im Stich gelassen, sondern bist ihm immer und überall beigestanden.",
          "resp1_0": "Du allein bist der Gott, der Wunder vollbringt.",
          "resp1_1": "Du hast deine Macht den Völkern kundgetan.",
          "oration": "Herr und Gott, als die Apostel um die dritte Stunde zum Gebet versammelt waren, hast du ihnen den Heiligen Geist geschenkt. Mache auch uns zu einer Wohnstatt deines Geistes. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Vesper": {
          "hymn_1": 314.0,
          "hymn_kl": 334.0,
          "ps_1": 132.1,
          "ps_2": 132.2,
          "ps_3": 155.0,
          "ant_1": "Dein heiliges Volk soll jubeln, Herr, und dir huldigen in deinem Tempel.",
          "ant_2": "Den Zion hat der Herr erwählt, er hat ihn erkoren zu seinem Wohnsitz.",
          "ant_3": "Macht und Ehre und Königtum hat Gott ihm verliehen. Alle Völker werden ihm dienen.",
          "les_buch": "1 Petr",
          "les_stelle": "3,8–9",
          "les_text": "Seid alle eines Sinnes, voll Mitgefühl und brüderlicher Liebe, seid barmherzig und demütig! Vergeltet nicht Böses mit Bösem noch Kränkung mit Kränkung! Stattdessen segnet; denn ihr seid dazu berufen, Segen zu erlangen.",
          "resp1_1": "Preise den Herrn, Jerusalem,",
          "resp1_2": "er nährte dich mit bestem Weizen.",
          "resp1_3": "Mit Honig aus dem Felsen hat er dich gesättigt.",
          "ant_ev": "Gott stürzt die Mächtigen vom Thron und erhöht die Niedrigen.",
          "bitten_e": "Lasst uns beten zu Jesus Christus, unserem Helfer:",
          "bitten_r": "Herr, erhöre uns.",
          "bitten": "Du hast Menschen aller Völker in deine Kirche gerufen;^qlass sie die Kraft der Glaubensgemeischaft erfahren.^pDu hast unserem Papst N. die Sorge für die ganze Kirche aufgetragen;^qstärke ihn im Glauben und in der Liebe.^pSchenke den Sündern die Gnade der Bekehrung;^qführe uns alle durch Buße zum Heil.^pDu hast als Mensch das Los der Fremde auf dich genommen;^qgedenke aller, die getrennt von Heimat und Familie leben müssen.^pGewähre den Verstorbenen den ewigen Frieden,^qdenn auf dich haben sie gehofft.",
          "oration": "Allmächtiger Gott, wir sagen dir Dank für den Tag, der nun zu Ende geht. Bewahre uns deine Huld und verzeihe uns, was wir in unserer Schwachheit gesündigt haben. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "5": {
        "Invitatorium": {
          "ps_100": 0
        },
        "Laudes": {
          "hymn_1": 215.0,
          "hymn_kl": 235.0,
          "ps_1": 51.0,
          "ps_2": 185.0,
          "ps_3": 100.0,
          "ant_1": "Herr, gegen dich allein hab’ ich gesündigt; erbarme dich meiner.",
          "ant_2": "Herr, wir erkennen unsere Schuld; wir haben gegen dich gesündigt.",
          "ant_3": "Der Herr allein ist Gott; wir sind sein Volk, die Herde seiner Weide.",
          "les_buch": "2 Kor",
          "les_stelle": "12,9b–10",
          "les_text": "Ich will mich meiner Schwachheit rühmen, damit die Kraft Christi auf mich herabkommt. Deswegen bejahe ich meine Ohnmacht, alle Misshandlungen und Nöte, Verfolgungen und Ängste, die ich für Christus ertrage; denn wenn ich schwach bin, dann bin ich stark.",
          "resp1_1": "Lass mich am Morgen deine Huld erfahren,",
          "resp1_2": "denn auf dich vertraue ich.",
          "resp1_3": "Zu dir erheb' ich meine Seele; zeig mir den Weg, den ich gehen soll.",
          "ant_ev": "Der Herr hat sein Volk besucht und ihm Erlösung geschaffen.",
          "bitten_e": "Gepriesen sei Christus, der für uns gestorben und auferstanden ist. Zu ihm lasst uns beten:",
          "bitten_r": "Christe, eleison.",
          "bitten": "Du hast nicht gezögert, am Kreuz für uns dein Blut zu vergießen;^qlass uns heute dankbar deines Leidens gedenken.^pDu lässt die Deinen teilhaben an deinem Kreuz;^qgib uns Kraft und Geduld, wenn wir leiden müssen.^pDu hast uns das lebendige Wasser versprochen, das hinüberströmt ins ewige Leben;^qgieße deinen Geist über uns aus.^pDu hast deinen Jüngern aufgetragen, den Menschen das Evangelium zu bringen;^qhilf uns, durch unser Leben die Botschaft vom Kreuz zu verkünden.",
          "oration": "Allmächtiger Vater, komm in unser Herz und erleuchte es durch dein Licht, damit wir deine Weisungen erkennen und dir als unserem König folgen auf dem Weg, den du uns führst. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "hymn_1": 402.0,
          "hymn_nacht": 2402.0,
          "ps_1": 69.1,
          "ps_2": 69.2,
          "ps_3": 69.3,
          "ant_1": "Ich bin müde vom Rufen, mir versagen die Augen, während ich warte auf meinen Gott.",
          "ant_2": "Sie gaben mir Galle als Speise und reichten mir Essig in meinem Durst.",
          "ant_3": "Ihr, die ihr Gott sucht: euer Herz lebe auf.^ö",
          "resp0_0": "Herr, zeige uns deine Wege.",
          "resp0_1": "Auf deinen Pfaden wollen wir gehen."
        },
        "Non": {
          "les_buch": "Eph",
          "les_stelle": "2,8–9",
          "les_text": "Aus Gnade seid ihr durch den Glauben gerettet, nicht aus eigener Kraft – Gott hat es geschenkt –, nicht aufgrund eurer Werke, damit keiner sich rühmen kann.",
          "resp1_0": "Herr, dein Weg werde auf Erden erkannt.",
          "resp1_1": "Dein Heil unter allen Völkern.",
          "oration": "Herr Jesus Christus, um die neunte Stunde hast du dem reumütigen Schächer vom Marterpfahl des Kreuzes aus dein Reich versprochen. Wir bekennen dir, dass wir Sünder sind und bitten dich voll Vertrauen: Lass auch uns nach dem Tod bei dir im Paradiese sein. Der du lebst und herrschest in alle Ewigkeit."
        },
        "Sext": {
          "les_buch": "Röm",
          "les_stelle": "3,21–22a",
          "les_text": "Jetzt ist unabhängig vom Gesetz die Gerechtigkeit Gottes offenbart worden, bezeugt vom Gesetz und von den Propheten: die Gerechtigkeit Gottes aus dem Glauben an Jesus Christus, offenbart für alle, die glauben.",
          "resp1_0": "Die Befehle des Herrn sind richtig, sie erfreuen das Herz.",
          "resp1_1": "Das Gebot des Herrn ist lauter, es erleuchtet die Augen.",
          "oration": "Herr, Jesus Christus, um die sechste Stunde kam Finsternis über die ganze Welt, als du unschuldig das Kreuz bestiegst, um uns von unserer Schuld zu erlösen. Erleuchte unsere Dunkelheit, damit wir zum ewigen Leben finden in deinem Licht. Der du lebst und herrschest in alle Ewigkeit."
        },
        "Terz": {
          "ps_1": 22.1,
          "ps_2": 22.2,
          "ps_3": 22.3,
          "ant_1": "Wir sahen ihn, den Verachteten, einen Mann voller Schmerzen, mit der Krankheit vertraut.",
          "ant_2": "Sie verteilen unter sich meine Kleider und werfen das Los um mein Gewand.",
          "ant_3": "Alle Stämme der Völker werfen sich nieder vor dem Herrn.",
          "les_buch": "Röm",
          "les_stelle": "1,16b–17",
          "les_text": "Das Evangelium ist eine Kraft Gottes, die jeden rettet, der glaubt, zuerst den Juden, aber ebenso den Griechen. Denn im Evangelium wird die Gerechtigkeit Gottes offenbart aus Glauben zum Glauben, wie es in der Schrift steht: Der aus Glauben Gerechte wird leben.",
          "resp1_0": "Am Herrn freut sich unser Herz.",
          "resp1_1": "Wir vertrauen auf seinen heiligen Namen.",
          "oration": "Herr Jesus Christus, um die dritte Stunde wurdest du zur Kreuzigung geführt für das Heil der Welt. Wir bitten dich, vergib, was wir Böses getan haben und bewahre uns vor neuer Schuld. Der du lebst und herrschest in alle Ewigkeit."
        },
        "Vesper": {
          "hymn_1": 315.0,
          "hymn_kl": 335.0,
          "ps_1": 135.1,
          "ps_2": 135.2,
          "ps_3": 156.0,
          "ant_1": "Groß ist der Herr, unser Gott ist größer als alle Götter.",
          "ant_2": "Haus Israel, preise den Herrn, singt und spielt seinem Namen, denn er ist freundlich.",
          "ant_3": "Alle Völker werden kommen und niederfallen vor dir, unserm Gott und Herrn.",
          "les_buch": "Jak",
          "les_stelle": "1,2–4",
          "les_text": "Seid voll Freude, meine Brüder, wenn ihr in mancherlei Versuchungen geratet! Ihr wisst, dass die Prüfung eures Glaubens Ausdauer bewirkt. Die Ausdauer aber soll zu einem vollendeten Werk führen; denn so werdet ihr vollendet und untadelig sein, es wird euch nichts mehr fehlen.",
          "resp1_1": "Christus hat uns geliebt,",
          "resp1_2": "uns durch sein Blut befreit von unsern Sünden.",
          "resp1_3": "Er hat uns zu Königen gemacht und zu Priestern für den Dienst vor Gott.",
          "ant_ev": "Der Herr nimmt sich seiner Kinder an und denkt an sein Erbarmen.",
          "bitten_e": "Lasst uns beten zu Jesus Christus, den der Vater um unserer Sünden willen in den Tod gegeben hat:",
          "bitten_r": "Herr, erbarme dich.",
          "bitten": "Wir haben viel gesündigt, doch du hast dich unser erbarmt;^qschenke den Sündern die Gnade der Bekehrung.^pHabe Nachsicht mit denen, die ihre Sünden bekennen;^qgewähre ihnen Verzeihung und Frieden.^pErbarme dich aller, die um deines Namens willen verfolgt werden,^qund vergib denen, die ihnen Unrecht tun.^pRichte auf die Kranken und Schwachen;^qtröste die Einsamen und vom Leid Geprüften.^pDu hast dem Schächer das Paradies geöffnet, weil er dich als Heiland bekannt hat;^qöffne unseren Verstorbenen die Pforten des Himmels.",
          "oration": "Herr, heiliger Vater, du hast deinen Sohn Jesus Christus zum Lösegeld für unser Heil gemacht. Hilf uns, so zu leben, dass wir durch die Teilnahme an seinem Leiden die Kraft seiner Auferstehung erfahren. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "6": {
        "Laudes": {
          "hymn_1": 216.0,
          "hymn_kl": 236.0,
          "ps_1": 119.145,
          "ps_2": 186.0,
          "ps_3": 117.0,
          "ant_1": "Nahe bist du, Herr, und alle deine Gebote sind Wahrheit.",
          "ant_2": "Herr, deine Weisheit sei bei mir und teile mit mir alle Mühe.",
          "ant_3": "Die Treue des Herrn währt in Ewigkeit.",
          "les_buch": "Phil",
          "les_stelle": "2,14–15",
          "les_text": "Tut alles ohne Murren und Bedenken, damit ihr rein und ohne Tadel seid, Kinder Gottes ohne Makel mitten in einer verdorbenen und verwirrten Generation, unter der ihr als Lichter in der Welt leuchtet.",
          "resp1_1": "Herr, ich rufe zu dir,",
          "resp1_2": "ich sage: Du bist meine Zuflucht.",
          "resp1_3": "Du bist mein Anteil im Lande der Lebenden:",
          "ant_ev": "Licht aus der Höhe, leuchte allen, die in Finsternis sind und im Schatten des Todes.",
          "bitten_e": "Gepriesen sei Gott, der Maria, die Mutter Christi, über alle Geschöpfe erhoben hat. Zu ihm lasst uns beten:",
          "bitten_r": "Schenke uns dein Erbarmen.",
          "bitten": "Herr, unser Gott, du hast Maria geheiligt und zur Mutter deines Sohnes gemacht;^qhöre auf ihre Fürsprache und heilige uns.^pDu hast uns Maria als Mutter und Vorbild geschenkt;^qhöre auf ihre Fürsprache und beschütze uns.^pDu hast Maria unter dem Kreuz gestärkt;^qhöre auf ihre Fürsprache und stärke uns, wenn wir leiden müssen.^pDu hast Maria durch die Auferweckung deines Sohnes froh gemacht;^qhöre auf ihre Fürsprache und festige unsere Hoffnung.",
          "oration": "Gott, du Quell und Ursprung unseres Heils, mach unser ganzes Leben zu einem Loblied deiner Herrlichkeit, damit wir einst im Himmel dich preisen können ohne Ende. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "hymn_1": 403.0,
          "hymn_nacht": 1402.0,
          "ps_1": 107.1,
          "ps_2": 107.2,
          "ps_3": 107.3,
          "ant_1": "Danket dem Herrn für seine Huld, für sein wunderbares Tun an den Menschen.^ö",
          "ant_2": "Sie bestaunten die Werke des Herrn, alle Wunder, die er getan.^ö",
          "ant_3": "Die Redlichen sehen, und sie freuen sich; sie begreifen die Huld des Herrn.^ö",
          "resp0_0": "Herr, deine Treue reicht, so weit die Wolken ziehn.",
          "resp0_1": "Deine Urteile sind tief wie das Meer."
        },
        "Non": {
          "les_buch": "Mi",
          "les_stelle": "6,8",
          "les_text": "Es ist dir gesagt worden, Mensch, was gut ist und was der Herr von dir erwartet: Nichts anderes, als das Rechte zu tun, die Treue zu lieben und in Ehrfurcht deinen Weg zu gehen mit deinem Gott.",
          "resp1_0": "Ich habe meine Freude an deinen Gesetzen.",
          "resp1_1": "Dein Wort will ich nicht vergessen.",
          "oration": "Herr, unser Gott, höre auf die Fürsprache der seligen Jungfrau Maria und erfülle unsere Sehnsucht nach Frieden, damit wir alle Tage unseres Lebens frei sind für den Dienst vor deinem Angesicht und ohne Gefährdung zu dir gelangen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Sext": {
          "les_buch": "Gal",
          "les_stelle": "5,26; 6,2",
          "les_text": "Wir wollen nicht prahlen, nicht miteinander streiten und einander nichts nachtragen. Einer trage des anderen Last; so werdet ihr das Gesetz Christi erfüllen.",
          "resp1_0": "Wie gut ist es doch und wie schön, wenn Brüder miteinander wohnen in Eintracht.",
          "resp1_1": "Dort spendet der Herr Segen und Leben in Ewigkeit.",
          "oration": "Herr, du Feuer ewiger Liebe, entzünde unser Herz mit deiner Glut, damit wir dich über alles lieben und aus Liebe zu dir auch unsere Brüder. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Terz": {
          "ps_1": 119.121,
          "ps_2": 34.1,
          "ps_3": 34.2,
          "ant_1": "Verbürge dich, Herr, für das Wohl deines Knechtes.",
          "ant_2": "Blickt auf zum Herrn, und euer Antlitz wird leuchten.",
          "ant_3": "Nahe ist der Herr den zerbrochenen Herzen.",
          "les_buch": "1 Sam",
          "les_stelle": "15,22",
          "les_text": "Hat der Herr an Brandopfern und Schlachtopfern das gleiche Gefallen wie am Gehorsam gegenüber der Stimme des Herrn? Wahrhaftig, Gehorsam ist besser als Opfer, Hinhören besser als das Fett von Widdern.",
          "resp1_0": "Wer Opfer des Lobes bringt, der ehrt mich.",
          "resp1_1": "Wer rechtschaffen lebt, dem zeige ich mein Heil.",
          "oration": "Gott, allmächtiger Vater, du unser Herr, wir neigen uns vor dir. Sende uns das Licht des Heiligen Geistes, damit wir sicher sind vor jedem Feind und in der Freude des Herzens dir unser Lob weihen, heute und alle Tage. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Vesper": {
          "hymn_1": 316.0,
          "hymn_kl": 336.0,
          "ps_1": 122.0,
          "ps_2": 130.0,
          "ps_3": 157.0,
          "ant_1": "Jerusalem, du starke Stadt, Friede wohne in deinen Mauern. Halleluja.",
          "ant_2": "Vom frühen Morgen bis zur Nacht hofft meine Seele auf den Herrn. Halleluja.",
          "ant_3": " Vor dem Namen Jesu soll jedes Knie sich beugen im Himmel und auf Erden. Halleluja.",
          "les_buch": "2 Petr",
          "les_stelle": "1,19–21",
          "les_text": "Das Wort der Propheten ist für uns noch sicherer geworden, und ihr tut gut daran, es zu beachten; denn es ist ein Licht, das an einem finsteren Ort scheint, bis der Tag anbricht und der Morgenstern aufgeht in eurem Herzen. Bedenkt dabei vor allem dies: Keine Weissagung der Schrift darf eigenmächtig ausgelegt werden; denn niemals wurde eine Weissagung ausgesprochen, weil ein Mensch es wollte, sondern vom Heiligen Geist getrieben haben Menschen im Auftrag Gottes geredet.",
          "resp1_1": "Der Name des Herrn sei gepriesen",
          "resp1_2": "vom Aufgang der Sonne bis zu ihrem Untergang.",
          "resp1_3": "Seine Herrlichkeit überragt die Himmel.",
          "ant_ev": "0",
          "bitten_e": "Lasst uns beten zu Jesus Christus, der Hoffnung aller, die zu ihm rufen:",
          "bitten_r": "Erhöre uns, Christus.",
          "bitten": "Du bist das geopferte Lamm;^qerbarme dich der Kirche, die deiner Heilstaten gedenkt.^pDu bist der treue Zeuge;^qmach die Verkünder des Evangeliums treu in ihrem Dienst.^pDu bist der König des Friedens;^qöffne die Augen der Regierenden für die Not der Armen.^pDu bist der Heiland aller Menschen;^qverhilf den Unterdrückten zu ihrem Recht.^pDu bist der Erstgeborene von den Toten;^qschenke unseren Toten Gemeinschaft mit dir und deinen Heiligen.",
          "oration": "0"
        }
      }
    },
    "4": {
      "0": {
        "Invitatorium": {
          "ps_24": 0
        },
        "Laudes": {
          "hymn_1": 210.0,
          "hymn_kl": 400.0,
          "ps_1": 118.0,
          "ps_2": 170.0,
          "ps_3": 150.0,
          "ant_1": "Danket dem Herrn, denn seine Huld währt ewig. Halleluja.",
          "ant_2": "Preiset den Herrn, ihr seine Werke alle. Halleluja.",
          "ant_3": "Alles, was atmet, lobe den Herrn. Halleluja.",
          "les_buch": "2 Tim",
          "les_stelle": "2,8a.11–13",
          "les_text": "Denk daran, dass Jesus Christus, der Nachkomme Davids, von den Toten auferstanden ist. Das Wort ist glaubwürdig: Wenn wir mit Christus gestorben sind, werden wir auch mit ihm leben; wenn wir standhaft bleiben, werden wir auch mit ihm herrschen; wenn wir ihn verleugnen, wird auch er uns verleugnen. Wenn wir untreu sind, bleibt er doch treu, denn er kann sich selbst nicht verleugnen.",
          "resp1_1": "Wir preisen dich, Herr, unser Gott,",
          "resp1_2": "und rufen deinen Namen an.",
          "resp1_3": "Wir verkünden deine Wunder.",
          "ant_ev": "0",
          "bitten_e": "Gepriesen sei der allmächtige und gütige Gott, der weiß, was uns not tut. Zu ihm lasst uns beten:",
          "bitten_r": "Gott, auf dich vertrauen wir.",
          "bitten": "Du hast uns Sünder in deine Nähe gerufen;^qgib, dass wir dich erkennen und dir dienen.^pDu hast uns das Tor deines Erbarmens geöffnet;^qlass nicht zu, dass wir vom Weg des Lebens abweichen.^pDu rufst heute dein Volk zusammen;^qmach uns zu einer Gemeinschaft des Gebetes und der Liebe.^pWir gedenken heute der Auferstehung deines Sohnes;^qlass uns diesen Tag als Tag des Dankes und der Freude feiern.",
          "oration": "0"
        },
        "Lesehore": {
          "hymn_1": 4401.0,
          "ps_1": 24.0,
          "ps_2": 66.1,
          "ps_3": 66.2,
          "ant_1": "Wer darf hinaufziehen zum Berg des Herrn, wer darf stehen an seiner heiligen Stätte? Halleluja.",
          "ant_2": "Ihr Völker, preist unseren Gott, er erhält uns am Leben. Halleluja.",
          "ant_3": "Die ihr Gott fürchtet, kommt alle und hört; ich will euch erzählen, was der Herr mir getan. Halleluja.",
          "resp0_0": "Lebendig ist das Wort Gottes und voll Kraft.",
          "resp0_1": "Schärfer als jedes zweischneidige Schwert."
        },
        "Non": {
          "les_buch": "Hld",
          "les_stelle": "8,6b–7",
          "les_text": "Stark wie der Tod ist die Liebe, die Leidenschaft ist hart wie die Unterwelt. Ihre Gluten sind Feuergluten, gewaltige Flammen. Auch mächtige Wasser können die Liebe nicht löschen; auch Ströme schwemmen sie nicht weg. Böte einer für die Liebe den ganzen Reichtum seines Hauses, nur verachten würde man ihn.",
          "resp1_0": "Ich will dich lieben, Herr, meine Stärke.",
          "resp1_1": "Gott, du mein Fels, meine Burg und mein Retter.",
          "oration": "0"
        },
        "Sext": {
          "les_buch": "Dtn",
          "les_stelle": "10,12",
          "les_text": "Was fordert der Herr, dein Gott, von dir außer dem einen: dass du den Herrn, deinen Gott, fürchtest, indem du auf allen seinen Wegen gehst, ihn liebst und dem Herrn, deinem Gott, mit ganzem Herzen und mit ganzer Seele dienst;",
          "resp1_0": "Herr, wer darf Gast sein in deinem Zelt?",
          "resp1_1": "Wer makellos lebt und von Herzen die Wahrheit sagt.",
          "oration": "0"
        },
        "Terz": {
          "ps_1": 23.0,
          "ps_2": 76.1,
          "ps_3": 76.2,
          "ant_1": "Wer von diesem Brot isst, wird leben in Ewigkeit. Halleluja.",
          "ant_2": "Der Herr wird kommen und in Herrlichkeit erscheinen inmitten seiner Heiligen. Halleluja.",
          "ant_3": "Legt Gelübde ab dem Herrn, eurem Gott, und bringt ihm Gaben. Halleluja.",
          "les_buch": "1 Kor",
          "les_stelle": "6,19–20",
          "les_text": "Wisst ihr nicht, dass euer Leib ein Tempel des Heiligen Geistes ist, der in euch wohnt und den ihr von Gott habt? Ihr gehört nicht euch selbst; denn um einen teuren Preis seid ihr erkauft worden. Verherrlicht also Gott in eurem Leib!",
          "resp1_0": "Meine Seele verzehrt sich in Sehnsucht nach dem Tempel des Herrn.",
          "resp1_1": "Mein Herz und mein Leib jauchzen ihm zu, ihm, dem lebendigen Gott.",
          "oration": "0"
        },
        "Vesper": {
          "hymn_1": 320.0,
          "hymn_kl": 340.0,
          "ps_1": 110.0,
          "ps_2": 112.0,
          "ps_3": 151.0,
          "ant_1": "Dein ist die Herrschaft am Tag deiner Macht; ich habe dich gezeugt noch vor dem Morgenstern. Halleluja.",
          "ant_2": "Selig, die hungern und dürsten nach der Gerechtigkeit; sie werden gesättigt. Halleluja.",
          "ant_3": "Preist unseren Gott, ihr seine Knechte und alle, die ihn fürchten, Große und Kleine. Halleluja.",
          "les_buch": "Hebr",
          "les_stelle": "12,22–24",
          "les_text": "Ihr seid zum Berg Zion hingetreten, zur Stadt des lebendigen Gottes, dem himmlischen Jerusalem, zu Tausenden von Engeln, zu einer festlichen Versammlung und zur Gemeinschaft der Erstgeborenen, die im Himmel verzeichnet sind; zu Gott, dem Richter aller, zu den Geistern der schon vollendeten Gerechten, zum Mittler eines neuen Bundes, Jesus, und zum Blut der Besprengung, das mächtiger ruft als das Blut Abels.",
          "resp1_1": "Groß ist unser Herr,",
          "resp1_2": "seine Macht ist gewaltig.",
          "resp1_3": "Unermesslich ist seine Weisheit.",
          "ant_ev": "0",
          "bitten_e": "Lasst uns beten zu Gott, unserem Vater, von dem alles Gute kommt:",
          "bitten_r": "Herr, erhöre unser Gebet.",
          "bitten": "Du hast deinen Sohn gesandt, damit auf der ganzen Erde dein Name verherrlicht wird;^qlass das Zeugnis der Kirche zu allen Menschen dringen.^pDu lehrst deine Gemeinde durch dein Wort;^qforme ihr Leben nach deiner Weisung.^pDu liebst den Frieden und die Gerechtigkeit;^qöffne den unterdrückten Völkern den Weg zur Freiheit.^pDu richtest die Gebeugten auf;^qschenke den Kranken Gesundheit und beschütze die Heimatlosen.^pGedenke der Verstorbenen, die in deinem Frieden entschlafen sind;^qlass sie durch Christus auferstehen zum ewigen Leben.",
          "oration": "0"
        }
      },
      "1": {
        "Laudes": {
          "hymn_1": 211.0,
          "hymn_kl": 241.0,
          "ps_1": 90.0,
          "ps_2": 191.0,
          "ps_3": 135.1,
          "ant_1": "Schon am Morgen, o Herr, erfüllt uns deine Huld.",
          "ant_2": "Verkündet Gottes Ruhm bis ans Ende der Erde.",
          "ant_3": "Lobet den Herrn im Hause des Herrn, singt und spielt seinem Namen.",
          "les_buch": "Jdt",
          "les_stelle": "8,25–27",
          "les_text": "Lasst uns dem Herrn, unserem Gott, danken, dass er uns ebenso prüft wie schon unsere Väter. Denkt daran, was er mit Abraham machte, wie er Isaak prüfte und was Jakob im syrischen Mesopotamien erlebte, als er die Schafe Labans, des Bruders seiner Mutter, hütete. Denn wie er diese Männer im Feuer geläutert hat, um ihr Herz zu prüfen, so hat er auch mit uns kein Strafgericht vor, sondern der Herr züchtigt seine Freunde, um sie zur Einsicht zu führen.",
          "resp1_1": "Ihr Gerechten, jubelt dem Herrn.",
          "resp1_2": "Gott zu loben ziemt sich für die Frommen.",
          "resp1_3": "Greift in die Saiten, singt ihm ein neues Lied.",
          "ant_ev": "Gepriesen sei der Herr, der Gott Israels. Er hat uns besucht und befreit.",
          "bitten_e": "Gepriesen sei unser Herr Jesus Christus, denn er rettet alle, die auf ihn vertrauen. Zu ihm lasst uns beten:",
          "bitten_r": "Herr, wir hoffen auf dich.",
          "bitten": "Du bist reich an Erbarmen;^qwir sagen dir Dank für deine Liebe.^pDu schenkst uns allezeit deine Gnade;^qerneuere uns heute im Heiligen Geist.^pÖffne die Augen unseres Herzens,^qdamit wir deine Gegenwart in uns erkennen.^pDu hast uns in deinen Dienst gerufen;^qmache uns heute zu Dienern deines Erbarmens.",
          "oration": "Gott, du hast den Menschen die Erde anvertraut, sie zu hüten und zu bebauen, und lässt die Sonne über ihnen aufgehen, damit sie ihnen leuchte. Gib, dass unser Tagewerk gelinge, zu deiner Ehre und zum Wohl unseres Nächsten. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "hymn_1": 401.0,
          "hymn_nacht": 405.0,
          "ps_1": 73.1,
          "ps_2": 73.2,
          "ps_3": 73.3,
          "ant_1": "Lauter Güte ist Gott für Israel, für alle Menschen mit reinem Herzen.^ö",
          "ant_2": "Das Lachen der Sünder wird sich in Trauer verwandeln, ihre Freude in Betrübnis.^ö",
          "ant_3": "Wer dir fern ist, Herr, geht zugrunde; ich aber – Gott nahe zu sein ist mein Glück.^ö",
          "resp0_0": "Herr, wie köstlich ist deine Verheißung.",
          "resp0_1": "Süßer als Honig für meinen Mund."
        },
        "Non": {
          "les_buch": "Bar",
          "les_stelle": "4,21–22",
          "les_text": "Habt Vertrauen, meine Kinder, schreit zu Gott! Er wird euch der Gewalt entreißen, den Händen der Feinde. Denn ich erhoffe vom Ewigen eure Rettung; schon wurde mir vom Heiligen Freude zuteil wegen der Erbarmung, die bald zu euch kommt vom Ewigen, eurem Retter.",
          "resp1_0": "Herr, denk an dein Erbarmen.",
          "resp1_1": "An die Taten deiner Huld; sie sind ja von Ewigkeit.",
          "oration": "Gott, unser Herr, zur neunten Stunde, als Petrus und Johannes zum Tempel hinaufgingen, um zu beten, bitten auch wir dich im Namen Jesu: Schenke allen, die diesen Namen anrufen, dein Heil. Durch ihn, Christus, unseren Herrn."
        },
        "Sext": {
          "les_buch": "Weish",
          "les_stelle": "15,1.3",
          "les_text": "Du, unser Gott, bist gütig, wahrhaftig und langmütig; voll Erbarmen durchwaltest du das All. Es ist vollendete Gerechtigkeit, dich zu verstehen; und deine Stärke zu kennen ist die Wurzel der Unsterblichkeit.",
          "resp1_0": "Gnädig ist der Herr und barmherzig.",
          "resp1_1": "Langmütig, reich an Güte und Treue.",
          "oration": "Gott, du bist Herr und Hüter von Weinberg und Ernte; du teilst die Arbeit zu und gibst gerechten Lohn. Verleihe uns die Kraft, deine Fügung anzunehmen und die Last des Tages ohne Murren zu tragen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Terz": {
          "ps_1": 119.129,
          "ps_2": 82.0,
          "ps_3": 120.0,
          "ant_1": "Festige meine Schritte, Herr, wie du es verheißen hast.",
          "ant_2": "Nur einer ist Richter. Wer bist du, dass du über deinen Nächsten richtest?",
          "ant_3": "Ich rief zum Herrn in meiner Not, und er hat mich erhört.",
          "les_buch": "Lev",
          "les_stelle": "20,26",
          "les_text": "Seid mir geheiligt; denn ich, der Herr, bin heilig und ich habe euch von all diesen Völkern ausgesondert, damit ihr mir gehört.",
          "resp1_0": "Selig das Volk, dessen Gott der Herr ist.",
          "resp1_1": "Die Nation, die er sich zum Erbteil erwählt hat.",
          "oration": "Gütiger Gott und Vater, du hast die Menschen zu gemeinsamer Arbeit berufen, damit sie einander ergänzen und jeder die Fähigkeit entfaltet, die du ihm gegeben hast, zum Wohle aller. Gib, dass wir unser Werk als deine Kinder verrichten, beseelt von deinem Geist und von der Liebe zu allen Menschen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Vesper": {
          "hymn_1": 321.0,
          "hymn_kl": 341.0,
          "ps_1": 136.1,
          "ps_2": 136.2,
          "ps_3": 152.0,
          "ant_1": "Danket dem Herrn, denn seine Huld währt ewig.",
          "ant_2": "Herr, allmächtiger Gott! Groß und wunderbar sind all deine Werke.",
          "ant_3": "Das Geheimnis seines Willens hat Gott uns kundgetan: in der Fülle der Zeiten alles in Christus zu vereinen.",
          "les_buch": "1 Thess",
          "les_stelle": "3,12–13",
          "les_text": "Der Herr lasse euch wachsen und reich werden in der Liebe zueinander und zu allen, wie auch wir euch lieben, damit euer Herz gefestigt wird und ihr ohne Tadel seid, geheiligt vor Gott, unserem Vater, wenn Jesus, unser Herr, mit allen seinen Heiligen kommt.",
          "resp1_1": "Mein Beten steige vor dir auf",
          "resp1_2": "wie Weihrauch, Herr, vor deinem Angesicht.",
          "resp1_3": "Das Erheben meiner Hände sei wie das Opfer am Abend.",
          "ant_ev": "Meine Seele preise dich allezeit, Gott, du mein Retter.",
          "bitten_e": "Lasst uns beten zu unserem Herrn Jesus Christus, denn er verlässt keinen, der auf ihn seine Hoffnung setzt.",
          "bitten_r": "Christus, erhöre uns.",
          "bitten": "Stärke die Kirche mit deinem Geist,^qdamit sie unter den Völkern dein Geheimnis verkündet.^pBeschütze alle, die in deiner Kirche zum Dienst der Predigt bestellt sind,^qdamit sie selbst nicht verlorengehen.^pBefreie die Welt von Zwietracht und Krieg,^qdamit die Menschen in Frieden miteinander leben können.^pSchenke den Eheleuten deine Gnade;^qmach unsere Familien zu Heimstätten des Glaubens und der Liebe.^pGewähre allen Verstorbenen die Vergebung ihrer Sünden^qund schenke ihnen dein Erbarmen.",
          "oration": "Bleibe bei uns, Herr Jesus, denn es wird Abend. Begleite uns auf dem Weg, mache unser Herz brennen und wecke unsere Hoffnung. Gib, dass wir in der Gemeinschaft der Brüder, in den Heiligen Schriften und beim Brechen des Brotes dich erkennen. Der du mit Gott, dem Vater, in der Einheit des Heiligen Geistes lebst und herrschest in alle Ewigkeit"
        }
      },
      "2": {
        "Laudes": {
          "hymn_1": 212.0,
          "hymn_kl": 242.0,
          "ps_1": 101.0,
          "ps_2": 192.0,
          "ps_3": 144.3,
          "ant_1": "Dir, o Herr, will ich spielen; ich will achten auf den Weg der Bewährten.",
          "ant_2": "Versage uns nicht dein Erbarmen, Herr! Löse deinen Bund nicht auf!",
          "ant_3": "Ein neues Lied will ich dir singen, Herr, du mein Gott.",
          "les_buch": "Jes",
          "les_stelle": "55,1",
          "les_text": "Auf, ihr Durstigen, kommt alle zum Wasser! Auch wer kein Geld hat, soll kommen. Kauft Getreide und esst, kommt und kauft ohne Geld, kauft Wein und Milch ohne Bezahlung!",
          "resp1_1": "Ich warte auf dein Wort,",
          "resp1_2": "höre, o Herr, meine Stimme.",
          "resp1_3": "Schon am Morgen komme ich und flehe.",
          "ant_ev": "Aus den Händen aller, die uns hassen, errette uns, o Herr.",
          "bitten_e": "Gepriesen sei Gott, der uns diese Morgenstunde schenkt. Zu ihm lasst uns beten:",
          "bitten_r": "Wir bitten dich, erhöre uns.",
          "bitten": "Gott, wir danken dir für Jesus Christus, deinen Sohn;^qschenke uns durch ihn die Wahrheit und das Leben.^pWir danken dir für deinen Heiligen Geist;^qlass uns heute leben aus seiner Kraft.^pMache unser Herz demütig,^qdamit wir bereitwillig einander dienen.^pDu lässt uns mitwirken an deiner Schöpfung;^qgib, dass unsere Arbeit beitrage zu deinem Lob.",
          "oration": "Gott und Herr, mehre in uns den Glauben an dich, damit unser Lobgebet Frucht bringt für Zeit und Ewigkeit. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "hymn_1": 402.0,
          "hymn_nacht": 2402.0,
          "ps_1": 102.1,
          "ps_2": 102.2,
          "ps_3": 102.3,
          "ant_1": "Mein Schreien dringe zu dir, o Herr, verbirg dein Antlitz nicht vor mir.^ö",
          "ant_2": "Wende dich dem Gebet der Verlassenen zu, verschmähe ihre Bitten nicht.^ö",
          "ant_3": "Du, o Herr, hast der Erde Grund gelegt, die Himmel sind das Werk deiner Hände.^ö",
          "resp0_0": "Mein Volk, vernimm meine Weisung.",
          "resp0_1": "Wendet euer Ohr zu den Worten meines Mundes."
        },
        "Non": {
          "les_buch": "Jes",
          "les_stelle": "55,10–11",
          "les_text": "Wie der Regen und der Schnee vom Himmel fällt und nicht dorthin zurückkehrt, sondern die Erde tränkt und sie zum Keimen und Sprossen bringt, wie er dem Sämann Samen gibt und Brot zum Essen, so ist es auch mit dem Wort, das meinen Mund verlässt: Es kehrt nicht leer zu mir zurück, sondern bewirkt, was ich will, und erreicht all das, wozu ich es ausgesandt habe.",
          "resp1_0": "Der Herr sendet sein Wort zur Erde.",
          "resp1_1": "Rasch eilt dahin sein Befehl.",
          "oration": "Gott, um die neunte Stunde hast du dem Hauptmann Kornelius deinen Engel geschickt, dass er ihm den Weg des Heiles weise. Mach uns bereit, in der Gemeinschaft der Kirche mitzuwirken an der Rettung der Menschen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Sext": {
          "les_buch": "Dtn",
          "les_stelle": "30,11.14",
          "les_text": "Dieses Gebot, auf das ich dich heute verpflichte, geht nicht über deine Kraft und ist nicht fern von dir. Nein, das Wort ist ganz nah bei dir, es ist in deinem Mund und in deinem Herzen, du kannst es halten.",
          "resp1_0": "Herr, dein Wort ist meinem Fuß eine Leuchte.",
          "resp1_1": "Ein Licht für meine Pfade.",
          "oration": "Gütiger Gott, als Petrus um die sechste Stunde betete, hast du ihn belehrt, dass das Heil allen Völkern zuteil werden soll. Bewirke durch deine Gnade, dass unser Tagewerk dir gefällt und dem Heilsplan deiner Liebe dient. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Terz": {
          "ps_1": 119.137,
          "ps_2": 88.1,
          "ps_3": 88.2,
          "ant_1": "Selig, wer deine Weisung kennt und danach handelt.",
          "ant_2": "Lass mein Gebet zu dir dringen, Herr, du Gott meines Heils.",
          "ant_3": "Herr, ich schreie zu dir. Warum verbirgst du vor mir dein Gesicht?",
          "les_buch": "1 Joh",
          "les_stelle": "3,17–18",
          "les_text": "Wenn jemand Vermögen hat und sein Herz vor dem Bruder verschließt, den er in Not sieht, wie kann die Gottesliebe in ihm bleiben? Meine Kinder, wir wollen nicht mit Wort und Zunge lieben, sondern in Tat und Wahrheit.",
          "resp1_0": "Wohl dem, der gütig und hilfreich ist.",
          "resp1_1": "Fest ist sein Herz, er vertraut auf den Herrn.",
          "oration": "Allmächtiger, ewiger Gott. Um die dritte Stunde hast du deinen Heiligen Geist über die Apostel ausgegossen. Sende den Geist der Liebe auch in unser Herz, damit wir in Treue für dich Zeugnis geben vor den Menschen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Vesper": {
          "hymn_1": 322.0,
          "hymn_kl": 342.0,
          "ps_1": 137.0,
          "ps_2": 138.0,
          "ps_3": 153.0,
          "ant_1": "Wie könnte ich dich je vergessen, Jerusalem, du meine höchste Freude!",
          "ant_2": "Vor den Engeln will ich dir singen, Herr, du mein Gott.",
          "ant_3": "Würdig ist das Lamm, das geschlachtet ist, Macht zu empfangen und Herrlichkeit und Ehre.",
          "les_buch": "Kol",
          "les_stelle": "3,16",
          "les_text": "Das Wort Christi wohne mit seinem ganzen Reichtum bei euch. Belehrt und ermahnt einander in aller Weisheit! Singt Gott in eurem Herzen Psalmen, Hymnen und Lieder, wie sie der Geist eingibt, denn ihr seid in Gottes Gnade.",
          "resp1_1": "Du zeigst mir, Herr, den Pfad zum Leben,",
          "resp1_2": "vor deinem Angesicht herrscht Freude in Fülle.",
          "resp1_3": "Zu deiner Rechten ist Wonne für alle Zeit.",
          "ant_ev": "Großes hat an mir getan der Mächtige, sein Name ist heilig.",
          "bitten_e": "Lasst uns beten zu unserem Herrn Jesus Christus, denn er ist die Kraft seines Volkes:",
          "bitten_r": "Herr, erhöre uns.",
          "bitten": "Mach standhaft alle, die du zum Glauben berufen hast,^qdamit sie an deiner Wahrheit festhalten.^pGib, dass der Glaube wachse und sich ausbreite;^qsende Arbeiter in deinen Weinberg.^pLenke das Tun der Männer und Frauen, die uns regieren;^qdamit sie den Frieden sichern.^pErbarme dich der Hungernden und Armen;^qzeige uns Wege, ihnen zu helfen.^pWenn du die Toten auferweckst,^qlass unsere Verstorbenen auferstehen zum ewigen Leben.",
          "oration": "Herr, unser Gott, nimm unser Abendlob an. Gib, dass wir allezeit im Herzen bewahren, was wir mit den Lippen bekennen. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "3": {
        "Laudes": {
          "hymn_1": 213.0,
          "hymn_kl": 405.0,
          "ps_1": 108.0,
          "ps_2": 193.0,
          "ps_3": 146.0,
          "ant_1": "Mein Herz ist bereit, o Gott. Ich will dir singen und spielen.",
          "ant_2": "Ich will mich freuen über den Herrn. Er kleidet mich in Gewänder des Heils.",
          "ant_3": "Den Herrn will ich loben, solange ich lebe.",
          "les_buch": "Dtn",
          "les_stelle": "4,39–40a",
          "les_text": "Heute sollst du erkennen und dir zu Herzen nehmen: Jahwe ist der Gott im Himmel droben und auf der Erde unten, keiner sonst. Daher sollst du auf seine Gesetze und seine Gebote achten, auf die ich dich heute verpflichte.",
          "resp1_1": "Ich will Gott preisen Tag für Tag,",
          "resp1_2": "sein Lob sei stets in meinem Munde.",
          "resp1_3": "All meinen Ängsten hat er mich entrissen.",
          "ant_ev": "Dienet dem Herrn in Heiligkeit, denn er befreit uns aus der Hand unserer Feinde.",
          "bitten_e": "Gepriesen sei unser Herr Jesus Christus, der durch sein Wort unser Leben erleuchtet. Zu ihm lasst uns beten:",
          "bitten_r": "Erhöre uns, König der Herrlichkeit.",
          "bitten": "Du hast uns aus der Finsternis in dein wunderbares Licht gerufen;^qlenke heute unser Denken und Tun.^pDu hast den Blinden die Augen geöffnet;^qhilf unserem Unglauben.^pGib, dass wir im Unglück nicht verzagen^qund in den Tagen des Glücks dir danken.^pLass uns in deiner Liebe bleiben,^qdamit wir nie von dir getrennt werden.",
          "oration": "Herr, gedenke deines heiligen Bundes, den das Blut des Lammes neu besiegelt hat. Schenke deinem Volk die Vergebung der Sünden und mehre sein Heil Tag für Tag, bis zur Vollendung der Erlösung. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "hymn_1": 403.0,
          "hymn_nacht": 1402.0,
          "ps_1": 103.1,
          "ps_2": 103.2,
          "ps_3": 103.3,
          "ant_1": "Lobe den Herrn, meine Seele, und vergiss nicht, was er dir Gutes getan hat.^ö",
          "ant_2": "Wie ein Vater sich seiner Kinder erbarmt, so erbarmt sich der Herr über alle, die ihn fürchten.^ö",
          "ant_3": "Lobet den Herrn, all seine Werke.^ö",
          "resp0_0": "Lass mich den Weg begreifen, den du mir zeigst.",
          "resp0_1": "Nachsinnen will ich über deine Wunder."
        },
        "Non": {
          "les_buch": "Kol",
          "les_stelle": "3,23–24",
          "les_text": "Tut eure Arbeit gern, als wäre sie für den Herrn und nicht für Menschen; ihr wisst, dass ihr vom Herrn euer Erbe als Lohn empfangen werdet. Dient Christus, dem Herrn!",
          "resp1_0": "Du gibst mir das Erbe und reichst mir den Becher.",
          "resp1_1": "In deinen Händen hältst du mein Los.",
          "oration": "Herr Jesus Christus, am Kreuz hast du die Arme ausgebreitet, um alle Menschen zu retten. Lass unsere Werke dir gefallen und sichtbar machen, dass du die Welt erlöst hast. Der du lebst und herrschest in alle Ewigkeit."
        },
        "Sext": {
          "les_buch": "Kol",
          "les_stelle": "3,17",
          "les_text": "Alles, was ihr in Worten und Werken tut, geschehe im Namen Jesu, des Herrn; durch ihn dankt Gott, dem Vater!",
          "resp1_0": "Ein Opfer des Dankes will ich dir bringen.",
          "resp1_1": "Anrufen will ich deinen Namen.",
          "oration": "Allmächtiger, gütiger Gott, in der Mitte des Tages lässt du uns innehalten und zur Ruhe kommen. Schau gnädig auf unsere Arbeit. Mache gut, was wir falsch gemacht haben und gib, dass am Abend unser ganzes Tagewerk dir gefallen kann. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Terz": {
          "ps_1": 119.145,
          "ps_2": 94.1,
          "ps_3": 94.2,
          "ant_1": "Herr, ich rufe zu dir, ich warte auf dein Wort.",
          "ant_2": "Der Herr kennt die Gedanken der Menschen: sie sind nichts als ein Hauch.",
          "ant_3": "Meine Burg ist der Herr, mein Gott ist der Fels meiner Zuflucht.",
          "les_buch": "1 Kor",
          "les_stelle": "10,24.31",
          "les_text": "Denkt nicht an euch selbst, sondern an die anderen. Ob ihr also esst oder trinkt oder etwas anderes tut: tut alles zur Verherrlichung Gottes!",
          "resp1_0": "Gut ist es, dem Herrn zu danken.",
          "resp1_1": "Deinem Namen zu singen, du Höchster.",
          "oration": "Herr, heiliger Vater, Gott, auf dessen Treue wir bauen, du hast den verheißenen Geist gesandt, um die Menschen zusammenzuführen, die durch die Sünde getrennt sind. Gib, dass wir die Einheit und den Frieden als deinen Auftrag erkennen und nach Kräften fördern. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Vesper": {
          "hymn_1": 323.0,
          "hymn_kl": 343.0,
          "ps_1": 139.1,
          "ps_2": 139.2,
          "ps_3": 154.0,
          "ant_1": "Wunderbar ist dein Wissen, o Herr: bis auf den Grund durchschaust du mich.",
          "ant_2": "Ich, der Herr, erforsche das Herz und vergelte jedem nach seinen Wegen.",
          "ant_3": "Alles ist durch ihn und auf ihn hin geschaffen, und alles hat in ihm Bestand.",
          "les_buch": "1 Joh",
          "les_stelle": "2,3–6",
          "les_text": "Wenn wir die Gebote Christi halten, erkennen wir, dass wir ihn erkannt haben. Wer sagt: Ich habe ihn erkannt, aber seine Gebote nicht hält, ist ein Lügner und die Wahrheit ist nicht in ihm. Wer sich aber an sein Wort hält, in dem ist die Gottesliebe wahrhaft vollendet. Wir erkennen daran, dass wir in ihm sind. Wer sagt, dass er in ihm bleibt, muss auch leben, wie er gelebt hat.",
          "resp1_1": "Wie deines Auges Stern behüte mich.",
          "resp1_2": "Birg mich im Schatten deiner Flügel.",
          "resp1_3": "Herr, du erhörst mich, wenn ich zu dir rufe.",
          "ant_ev": "Machtvolle Taten vollbringt der Herr, er zerstreut, die im Herzen voll Hochmut sind.",
          "bitten_e": "Lasst uns beten zu Gott, dem ewigen Vater, dessen Erbarmen ohne Grenzen ist:",
          "bitten_r": "Wir bitten dich, erhöre uns.",
          "bitten": "Gott, du hast deinen Sohn gesandt, dass er die Welt rette;^qgib, dass alle Völker ihn als ihren Erlöser erkennen.^pDu hast den Menschen als Mann und Frau erschaffen;^qwache über unseren Familien und bewahre sie in der Liebe.^pHilf allen, die du zur Ehelosigkeit berufen hast;^qgib, dass sie in Freude deinem Sohn nachfolgen.^pDu hast deine Priester zu Ausspendern deiner Geheimnisse bestellt;^qschenke ihnen Weisheit und stärke sie in der Treue.",
          "oration": "Gütiger Gott, du sättigst die Hungernden, die zu dir rufen. Gedenke deiner Huld und schenke unserer Armut den Reichtum deiner Gaben. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "4": {
        "Laudes": {
          "hymn_1": 214.0,
          "hymn_kl": 244.0,
          "ps_1": 143.0,
          "ps_2": 194.0,
          "ps_3": 147.1,
          "ant_1": "Herr, lass mich deine Huld erfahren am frühen Morgen.",
          "ant_2": "Wie einen Strom leitet der Herr den Frieden nach Jerusalem.",
          "ant_3": "Gut ist es, unserem Gott zu singen, schön ist es, ihn zu loben.",
          "les_buch": "Röm",
          "les_stelle": "8,18–21",
          "les_text": "Die Leiden der gegenwärtigen Zeit bedeuten nichts im Vergleich zu der Herrlichkeit, die an uns offenbar werden soll. Denn die ganze Schöpfung wartet sehnsüchtig auf das Offenbarwerden der Söhne Gottes. Die Schöpfung ist der Vergänglichkeit unterworfen, nicht aus eigenem Willen, sondern durch den, der sie unterworfen hat; aber zugleich gab er ihr Hoffnung: auch die Schöpfung soll von der Sklaverei und Verlorenheit befreit werden zur Freiheit und Herrlichkeit der Kinder Gottes.",
          "resp1_1": "Am Morgen denke ich an dich.",
          "resp1_2": "Herr, deine Huld ist besser als das Leben.",
          "resp1_3": "Du wurdest meine Hilfe, darum preisen dich meine Lippen.",
          "ant_ev": "Lass uns, Herr, dein Heil erfahren und vergib uns unsere Sünden.",
          "bitten_e": "Gepriesen sei Gott, die Quelle unseres Heils. Zu ihm lasst uns beten:",
          "bitten_r": "Schenke uns dein Erbarmen.",
          "bitten": "Gott, du hast uns durch die Auferweckung deines Sohnes neue Hoffnung geschenkt;^qgib, dass diese Zuversicht unser Tagewerk begleite.^pDu hast uns durch den Heiligen Geist deine Liebe eingegossen;^qheile unsere Herzen von Missgunst und Neid.^pDu hast uns in der Kirche zu einer neuen Gemeinschaft zusammengeführt;^qgib, dass wir einander dienen in Geduld.^pDu willst das gute Werk vollenden, das du in uns begonnen hast;^qlass uns den Glauben bewahren bis ans Ende.",
          "oration": "Herr, lass uns heute und immerdar bedenken, dass wir erlöst und aus Feindeshand befreit sind. Gib, dass wir dir furchtlos dienen in Heiligkeit und Gerechtigkeit alle Tage unseres Lebens. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "hymn_1": 401.0,
          "hymn_nacht": 405.0,
          "ps_1": 44.1,
          "ps_2": 44.2,
          "ps_3": 44.3,
          "ant_1": "Nicht ihr eigener Arm hat ihnen den Sieg verschafft, nein, deine Rechte, o Herr, und dein leuchtendes Angesicht.^ö",
          "ant_2": "Wenn ihr euch zum Herrn bekehrt, wird er sein Angesicht nicht von euch wenden.^ö",
          "ant_3": "Wach auf! Warum schläfst du, o Herr? Erwache, verstoß uns nicht für immer.^ö",
          "resp0_0": "Lass dein Angesicht leuchten über deinem Knecht.",
          "resp0_1": "Lehre mich deine Gesetze."
        },
        "Non": {
          "les_buch": "Hebr",
          "les_stelle": "12,1b–2",
          "les_text": "Wir wollen alle Last und die Fesseln der Sünde abwerfen. Lasst uns mit Ausdauer in dem Wettkampf laufen, der uns aufgetragen ist, und dabei auf Jesus blicken, den Urheber und Vollender des Glaubens; er hat angesichts der vor ihm liegenden Freude das Kreuz auf sich genommen, ohne auf die Schande zu achten, und sich zur Rechten von Gottes Thron gesetzt.",
          "resp1_0": "Meine Seele hofft auf den Herrn.",
          "resp1_1": "Ich warte voll Vertrauen auf sein Wort.",
          "oration": "Herr, gib uns die Kraft, dem Leidensmut deines eingeborenen Sohnes zu folgen und die Widrigkeiten des Lebens in Geduld zu ertragen. Darum bitten wir durch ihn, Christus, unseren Herrn."
        },
        "Sext": {
          "les_buch": "Weish",
          "les_stelle": "1,1–2",
          "les_text": "Liebt Gerechtigkeit, ihr Herrscher der Erde, denkt in Frömmigkeit an den Herrn, sucht ihn mit reinem Herzen! Denn er lässt sich finden von denen, die ihn nicht versuchen, und zeigt sich denen, die ihm nicht misstrauen.",
          "resp1_0": "Vertrau auf den Herrn und tu das Gute.",
          "resp1_1": "Bleib wohnen im Land und bewahre die Treue.",
          "oration": "Allmächtiger, ewiger Gott, bei dir gibt es keine Finsternis, denn du wohnst im Licht. Sende einen Strahl deines Lichtes in unser Herz, damit wir den Sinn deiner Gebote erkennen und bereitwillig deine Wege gehen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Terz": {
          "ps_1": 119.153,
          "ps_2": 128.0,
          "ps_3": 129.0,
          "ant_1": "So spricht der Herr: Wenn ihr mich liebt, haltet meine Gebote!",
          "ant_2": "Es segne dich der Herr; Frieden sollst du schauen dein Leben lang.",
          "ant_3": "Gott kämpft für dich, wenn deine Feinde dich bedrängen.",
          "les_buch": "1 Joh",
          "les_stelle": "3,23–24",
          "les_text": "Das ist das Gebot Gottes: Wir sollen an den Namen seines Sohnes Jesus Christus glauben und einander lieben, wie es seinem Gebot entspricht. Wer seine Gebote hält, bleibt in Gott und Gott in ihm. Und dass er in uns bleibt, erkennen wir an dem Geist, den er uns gegeben hat.",
          "resp1_0": "Herr, du gibst dem Gerechten Bestand.",
          "resp1_1": "Du rettest die Menschen mit redlichem Herzen.",
          "oration": "Herr und Gott, als die Apostel um die dritte Stunde zum Gebet versammelt waren, hast du ihnen den Heiligen Geist geschenkt. Mache auch uns zu einer Wohnstatt deines Geistes. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Vesper": {
          "hymn_1": 324.0,
          "hymn_kl": 344.0,
          "ps_1": 144.1,
          "ps_2": 144.2,
          "ps_3": 155.0,
          "ant_1": "Herr, du bist meine Burg, mein Schild, dem ich vertraue.",
          "ant_2": "Glücklich das Volk, dessen Gott der Herr ist.",
          "ant_3": "Jetzt ist gekommen die Rettung und die Macht und die Herrschaft unseres Gottes.",
          "les_buch": "Kol",
          "les_stelle": "1,23",
          "les_text": "Ihr müsst unerschütterlich und unbeugsam am Glauben festhalten und dürft euch nicht von der Hoffnung abbringen lassen, die euch das Evangelium schenkt. In der ganzen Schöpfung unter dem Himmel wurde das Evangelium verkündet; und ihr habt es gehört.",
          "resp1_1": "Mein Hirte ist der Herr,",
          "resp1_2": "er weidet mich auf grünen Auen.",
          "resp1_3": "Er leitet mich auf rechten Pfaden, treu seinem Namen.",
          "ant_ev": "Selig, die hungern nach der Gerechtigkeit; der Herr wird sie sättigen und mit seinen Gaben beschenken.",
          "bitten_e": "Lasst uns beten zu Christus, dem Licht der Völker:",
          "bitten_r": "Christus, erhöre uns.",
          "bitten": "Du Licht, das keinen Abend kennt,^qführe alle Menschen zur vollen Erkenntnis der Wahrheit.^pSteh denen bei, die sich dem Dienst an den Kranken widmen,^qschenke ihnen Herzlichkeit und Geduld.^pDu lässt die Menschen die Geheimnisse der Natur erforschen;^qlenke ihr Wissen zum Wohl aller, die diese Erde bewohnen.^pErbarme dich derer, die sich in Schuld verstrickt haben;^qschenke ihnen Einsicht und Umkehr.^pDu öffnest, und niemand kann schließen;^qöffne unseren Verstorbenen das Tor zum ewigen Leben.",
          "oration": "Herr, höre auf unser Abendgebet. Gib, dass wir dem Beispiel deines Sohnes folgen und in Geduld einander jene Liebe erweisen, die er den Seinen am Abend vor seinem Leiden erwiesen hat. Darum bitten wir durch ihn, Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "5": {
        "Laudes": {
          "hymn_1": 215.0,
          "hymn_kl": 245.0,
          "ps_1": 51.0,
          "ps_2": 195.0,
          "ps_3": 147.2,
          "ant_1": "Ein reines Herz erschaffe mir, o Gott, und gib mir einen neuen, beständigen Geist.",
          "ant_2": "Freue dich, Jerusalem! Die Völker werden sich in dir versammeln und den Herrn lobpreisen.",
          "ant_3": "Zion, lobsinge deinem Gott; er sendet sein Wort zur Erde.",
          "les_buch": "Gal",
          "les_stelle": "2,19b–20",
          "les_text": "Ich bin mit Christus gekreuzigt worden; nicht mehr ich lebe, sondern Christus lebt in mir. Soweit ich aber jetzt noch in dieser Welt lebe, lebe ich im Glauben an den Sohn Gottes, der mich geliebt und sich für mich hingegeben hat.",
          "resp1_1": "Ich rufe zu Gott, dem Höchsten,",
          "resp1_2": "zu Gott, der mir beisteht.",
          "resp1_3": "Er sendet mir Hilfe vom Himmel; zu ihm flüchte ich.",
          "ant_ev": "Durch die barmherzige Liebe unseres Gottes hat uns besucht das aufstrahlende Licht aus der Höhe.",
          "bitten_e": "Gepriesen sei Jesus Christus, unsere Freude und Hoffnung. Zu ihm lasst uns beten:",
          "bitten_r": "Christus, höre uns.",
          "bitten": "Herr, du hast uns in deine Kirche berufen;^qlass uns dich loben mit allen, die glauben.^pWir vertrauen auf dich,^qlass uns nicht zuschanden werden.^pLeite heute unsere Schritte;^qgib, dass wir tun, was wahr und gerecht ist.^pBleibe bei uns, Herr;^qdenn ohne dich können wir nichts tun.",
          "oration": "Herr und Gott, schenk uns den Reichtum deiner Gnade und lenke unsere Schritte auf dem Weg deiner Gebote, damit wir schon in diesem Leben Trost und Frieden finden und einst die ewige Freude erlangen. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "hymn_1": 402.0,
          "hymn_nacht": 2402.0,
          "ps_1": 78.1,
          "ps_2": 78.2,
          "ps_3": 78.3,
          "ant_1": "Die Väter erzählten uns die ruhmreichen Taten des Herrn, die Wunder, die er getan hat^ö",
          "ant_2": "Die Kinder Israels aßen das Manna und tranken aus dem Felsen, der mit ihnen zog.^ö",
          "ant_3": "Sie dachten daran, dass Gott ihr Fels ist und ihr Erlöser.^ö",
          "resp0_0": "Mein Sohn, merke auf meine Weisheit.",
          "resp0_1": "Meiner Einsicht neige dein Ohr."
        },
        "Non": {
          "les_buch": "1 Joh",
          "les_stelle": "4,9–11",
          "les_text": "Die Liebe Gottes wurde unter uns dadurch offenbart, dass Gott seinen einzigen Sohn in die Welt gesandt hat, damit wir durch ihn leben. Nicht darin besteht die Liebe, dass wir Gott geliebt haben, sondern dass er uns geliebt und seinen Sohn als Sühne für unsere Sünden gesandt hat. Liebe Brüder, wenn Gott uns so geliebt hat, müssen auch wir einander lieben.",
          "resp1_0": "Sieh her, o Gott, du, unser Beschützer.",
          "resp1_1": "Schau auf das Antlitz deines Gesalbten.",
          "oration": "Herr Jesus Christus, um die neunte Stunde hast du dem reumütigen Schächer vom Marterpfahl des Kreuzes aus dein Reich versprochen. Wir bekennen dir, dass wir Sünder sind und bitten dich voll Vertrauen: Lass auch uns nach dem Tod bei dir im Paradiese sein. Der du lebst und herrschest in alle Ewigkeit."
        },
        "Sext": {
          "les_buch": "1 Joh",
          "les_stelle": "3,16",
          "les_text": "Daran haben wir die Liebe erkannt, dass Er sein Leben für uns hingegeben hat. So müssen auch wir für die Brüder das Leben hingeben.",
          "resp1_0": "Danket dem Herrn, denn er ist gütig.",
          "resp1_1": "Denn seine Huld währt ewig.",
          "oration": "Herr, Jesus Christus, um die sechste Stunde kam Finsternis über die ganze Welt, als du unschuldig das Kreuz bestiegst, um uns von unserer Schuld zu erlösen. Erleuchte unsere Dunkelheit, damit wir zum ewigen Leben finden in deinem Licht. Der du lebst und herrschest in alle Ewigkeit."
        },
        "Terz": {
          "ps_1": 119.161,
          "ps_2": 133.0,
          "ps_3": 140.0,
          "ant_1": "Die deine Weisung lieben, o Gott, empfangen Heil in Fülle.",
          "ant_2": "Lasst uns einander lieben; denn die Liebe ist aus Gott.",
          "ant_3": "Behüte mich vor den Händen der Frevler, Herr, meine starke Hilfe.",
          "les_buch": "Röm",
          "les_stelle": "12,17a.19b–21",
          "les_text": "Vergeltet niemand Böses mit Bösem. Denn in der Schrift steht: Mein ist die Rache, ich werde vergelten, spricht der Herr. Vielmehr: Wenn dein Feind Hunger hat, gib ihm zu essen, wenn er Durst hat, gib ihm zu trinken; tust du das, dann sammelst du glühende Kohlen auf sein Haupt. Lass dich nicht vom Bösen besiegen, sondern besiege das Böse durch das Gute!",
          "resp1_0": "Die Huld des Herrn währt immer und ewig.",
          "resp1_1": "Für alle, die seinen Bund bewahren.",
          "oration": "Herr Jesus Christus, um die dritte Stunde wurdest du zur Kreuzigung geführt für das Heil der Welt. Wir bitten dich, vergib, was wir Böses getan haben und bewahre uns vor neuer Schuld. Der du lebst und herrschest in alle Ewigkeit."
        },
        "Vesper": {
          "hymn_1": 325.0,
          "hymn_kl": 345.0,
          "ps_1": 145.1,
          "ps_2": 145.4,
          "ps_3": 156.0,
          "ant_1": "Tag um Tag will ich dich preisen, Herr, und deine Wunder besingen.",
          "ant_2": "Aller Augen warten auf dich, o Herr; nahe bist du allen, die zu dir rufen.",
          "ant_3": "Deine Wege sind gerecht und wahr, du König aller Zeiten.",
          "les_buch": "Röm",
          "les_stelle": "8,1–2",
          "les_text": "Jetzt gibt es keine Verurteilung mehr für die, welche in Christus Jesus sind. Denn das Gesetz des Geistes, des Lebens in Christus Jesus, hat dich frei gemacht vom Gesetz der Sünde und des Todes.",
          "resp1_1": "Der Sünden wegen ist Christus gestorben,",
          "resp1_2": "um uns zu Gott zu führen.",
          "resp1_3": "Getötet wurde er dem Fleische nach, dem Geiste nach aber zum Leben erweckt.",
          "ant_ev": "Denke, Herr, an dein Erbarmen, das du unseren Vätern verheißen hast.",
          "bitten_e": "Lasst uns beten zu Jesus Christus, der Hoffnung aller, die zu ihm aufschauen:",
          "bitten_r": "Herr, erbarme dich unser.",
          "bitten": "Du hast das schwere Kreuz auf dich genommen;^qstärke alle, die schwer tragen an der Last des Lebens.^pDu bist unter dem Kreuz zusammengebrochen;^qrichte die auf, die nicht mehr weiterkönnen.^pDu hast den Spott der Menge erduldet;^qverzeih denen, die andere verachten und beschimpfen.^pDu hast dem reumütigen Schächer das Paradies verheißen;^qwende dich den Sündern zu, damit sie sich zu dir bekehren.^pDu hast dein Leben in die Hände des Vaters zurückgegeben;^qnimm unsere Verstorbenen auf in deine Herrlichkeit.",
          "oration": "Allmächtiger Gott, so sehr hast du die Welt geliebt, dass du deinen einzigen Sohn dahingabst für das Heil der Welt. Schenke deiner Kirche die Bereitschaft, sich dir als lebendiges Opfer zu weihen, damit sie ganz erfüllt werde von deiner Liebe. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "6": {
        "Laudes": {
          "hymn_1": 216.0,
          "hymn_kl": 246.0,
          "ps_1": 92.0,
          "ps_2": 196.0,
          "ps_3": 8.0,
          "ant_1": "Wie schön ist es, deinem Namen zu singen, am Morgen deine Huld zu verkünden.",
          "ant_2": "Ich gebe euch ein neues Herz und einen neuen Geist.",
          "ant_3": "Aus dem Mund der Kinder schaffst du dir Lob, o Herr.",
          "les_buch": "2 Petr",
          "les_stelle": "3,13–14",
          "les_text": "Gottes Verheißung gemäß erwarten wir einen neuen Himmel und eine neue Erde, in denen die Gerechtigkeit wohnt. Weil ihr das erwartet, liebe Brüder, bemüht euch darum, von ihm ohne Makel und Fehler und in Frieden angetroffen zu werden!",
          "resp1_1": "Jubeln soll dir, Herr, mein Mund,",
          "resp1_2": "dir will ich singen und spielen.",
          "resp1_3": "Von deiner Gerechtigkeit soll meine Zunge reden.",
          "ant_ev": "Herr, lenke unsere Schritte auf den Weg des Friedens.",
          "bitten_e": "Gepriesen sei Gott, der durch seinen Sohn der Welt Hoffnung und Leben schenkt. Zu ihm lasst uns beten:",
          "bitten_r": "Höre unser Gebet.",
          "bitten": "Gott, du schenkst uns diesen neuen Tag;^qgib, dass wir ihn zu deiner Ehre vollenden.^pDu hast Glaube, Hoffnung und Liebe in unsere Herzen eingesenkt;^qerhalte in uns allezeit deine Gaben.^pUnsere Augen seien stets auf dich gerichtet;^qmach uns bereit, deinem Ruf zu folgen.^pBewahre uns vor den Verlockungen des Bösen^qund schütze uns auf allen unseren Wegen.",
          "oration": "Allmächtiger Gott, du wahres Licht und ewiger Tag, du schenkst uns im Kreislauf der Zeit immer wieder einen neuen Morgen. Vertreibe die Nacht des Bösen und erleuchte unser Herz durch den hellen Glanz deines Kommens. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Lesehore": {
          "hymn_1": 403.0,
          "hymn_nacht": 1402.0,
          "ps_1": 78.4,
          "ps_2": 78.5,
          "ps_3": 78.6,
          "ant_1": "Denkt an Gottes mächtige Hand, denkt an den Tag, an dem er euch befreite.^ö",
          "ant_2": "Er brachte sie in sein heiliges Land, zum Berge, den seine Rechte sich erworben.^ö",
          "ant_3": "Der Herr hat sich Juda zum Eigentum erwählt und David zum Hirten seines Volkes.^ö",
          "resp0_0": "Wir hören nicht auf, für euch zu beten.",
          "resp0_1": "Dass ihr den Willen Gottes erkennt."
        },
        "Non": {
          "les_buch": "Phil",
          "les_stelle": "4,8.9b",
          "les_text": "Was immer wahrhaft, edel, recht, was lauter, liebenswert, ansprechend ist, was Tugend heißt und lobenswert ist, darauf seid bedacht! Und der Gott des Friedens wird mit euch sein.",
          "resp1_0": "Ich will dich rühmen, mein Gott und König.",
          "resp1_1": "Deinen Namen preisen immer und ewig.",
          "oration": "Herr, unser Gott, höre auf die Fürsprache der seligen Jungfrau Maria und erfülle unsere Sehnsucht nach Frieden, damit wir alle Tage unseres Lebens frei sind für den Dienst vor deinem Angesicht und ohne Gefährdung zu dir gelangen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Sext": {
          "les_buch": "Röm",
          "les_stelle": "15,5–7",
          "les_text": "Der Gott der Geduld und des Trostes schenke euch die Einmütigkeit, die Christus Jesus entspricht, damit ihr Gott, den Vater unseres Herrn Jesus Christus, einträchtig und mit einem Munde preist. Darum nehmt einander an, wie auch Christus uns angenommen hat, zur Ehre Gottes.",
          "resp1_0": "Der Herr hat Gefallen an seinem Volk.",
          "resp1_1": "Er krönt die Gebeugten mit Sieg.",
          "oration": "Herr, du Feuer ewiger Liebe, entzünde unser Herz mit deiner Glut, damit wir dich über alles lieben und aus Liebe zu dir auch unsere Brüder. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Terz": {
          "ps_1": 119.169,
          "ps_2": 45.1,
          "ps_3": 45.2,
          "ant_1": "Deine Hand sei bereit, mir zu helfen; ich habe mir deine Befehle erwählt.",
          "ant_2": "Dein Thron, o Herr, steht für immer und ewig.",
          "ant_3": "Ich sah das neue Jerusalem wie eine Braut, die sich geschmückt hat für ihren Bräutigam.",
          "les_buch": "Dan",
          "les_stelle": "6,27b–28a",
          "les_text": "Der Gott Israels ist der lebendige Gott; er lebt in Ewigkeit. Sein Reich geht niemals unter; seine Herrschaft hat kein Ende. Er rettet und befreit; er wirkt Zeichen und Wunder am Himmel und auf der Erde.",
          "resp1_0": "Erkennt, dass ich Gott bin.",
          "resp1_1": "Erhaben über die Völker, erhaben auf Erden.",
          "oration": "Gott, allmächtiger Vater, du unser Herr, wir neigen uns vor dir. Sende uns das Licht des Heiligen Geistes, damit wir sicher sind vor jedem Feind und in der Freude des Herzens dir unser Lob weihen, heute und alle Tage. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Vesper": {
          "hymn_1": 326.0,
          "hymn_kl": 346.0,
          "ps_1": 141.0,
          "ps_2": 142.0,
          "ps_3": 157.0,
          "ant_1": "Wie Weihrauch steige mein Gebet vor dir auf, Herr, du mein Gott. Halleluja.",
          "ant_2": "Meine Zuflucht bist du, o Herr, mein Anteil im Lande der Lebenden. Halleluja.",
          "ant_3": "Jesus, der Herr, hat sich selbst erniedrigt; darum hat Gott ihn erhöht in Ewigkeit. Halleluja.",
          "les_buch": "Röm",
          "les_stelle": "11,33–36",
          "les_text": "0",
          "resp1_1": "Wie groß sind deine Werke, o Herr.",
          "resp1_2": "Mit Weisheit hast du sie alle geschaffen.",
          "resp1_3": "Erfüllt ist die Erde von deinen Geschöpfen.",
          "ant_ev": "0",
          "bitten_e": "Lasst uns dem ewigen Gott die Ehre erweisen und zu ihm beten:",
          "bitten_r": "Gott steh deinem Volke bei.",
          "bitten": "Führe die Menschen zum Glauben,^ldamit sie in dir das Heil finden.^pSchenke den Völkern der Erde Frieden;^lschaffe Recht den Unterdrückten.^pGib den Eheleuten deine Gnade,^lhilf ihnen, einander treu zu sein.^pVergilt den Menschen, die uns Gutes getan haben,^lund schenke ihnen das ewige Leben.^pErbarme dich aller unserer Verstorbenen;^lnimm sie auf in die ewige Ruhe des Himmels.",
          "oration": "0"
        }
      }
    },
    "each": {
      "0": {
        "Invitatorium": {
          "ant_0": "Kommt, lasst uns jubeln vor dem Herrn, lasst uns jauchzen dem Fels unseres Heiles! Halleluja."
        },
        "Komplet": {
          "hymn_2": 510.0,
          "ps_1": 91.0,
          "ant_0": "Mit seinen Flügeln beschirmt dich der Herr; du brauchst dich nicht zu fürchten vor dem Schrecken der Nacht.",
          "les_buch": "Offb",
          "les_stelle": "22,4–5",
          "les_text": "Sie werden sein Angesicht schauen, und sein Name ist auf ihre Stirn geschrieben. Es wird keine Nacht mehr geben, und sie brauchen weder das Licht einer Lampe noch das Licht der Sonne. Denn der Herr, ihr Gott, wird über ihnen leuchten, und sie werden herrschen in alle Ewigkeit.",
          "oration_komplet": "Allmächtiger Gott, wir haben heute das Geheimnis der Auferstehung unseres Herrn gefeiert. Am Abend rufen wir zu dir: Bewahre uns in dieser Nacht vor allem Bösen. Lass uns in deinem Frieden ruhen und morgen den neuen Tag mit deinem Lob beginnen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Lesehore": {
          "vu": 406.0,
          "vu_lat": 407.0
        }
      },
      "1": {
        "Invitatorium": {
          "ant_0": "Kommt vor das Angesicht des Herrn, naht ihm mit Lobpreis!"
        },
        "Komplet": {
          "hymn_2": 511.0,
          "ps_1": 86.0,
          "ant_0": "Herr, du bist ein gnädiger Gott, voll Langmut und reich an Erbarmen.",
          "les_buch": "1 Thess",
          "les_stelle": "5,9–10",
          "les_text": "Gott hat uns nicht für das Gericht seines Zornes bestimmt, sondern dafür, dass wir durch Jesus Christus, unseren Herrn, das Heil erlangen. Er ist für uns gestorben, damit wir vereint mit ihm leben, ob wir nun wachen oder schlafen.",
          "oration_komplet": "Herr, schenke uns eine ruhige Nacht und erholsamen Schlaf. Was wir heute durch Wort und Werk an Gutem ausgesät haben, das lass Wurzel schlagen und wachsen und heranreifen für die ewige Ernte. Darum bitten wir durch Christus, unseren Herrn."
        }
      },
      "2": {
        "Invitatorium": {
          "ant_0": "Ein großer König ist der Herr; kommt, wir fallen vor ihm nieder!"
        },
        "Komplet": {
          "hymn_2": 512.0,
          "ps_1": 143.0,
          "ant_0": "Verbirg dein Antlitz nicht vor mir; auf dich, o Herr, vertraue ich.",
          "les_buch": "1 Petr",
          "les_stelle": "5,8–9",
          "les_text": "Seid nüchtern und wachsam! Euer Widersacher, der Teufel, geht wie ein brüllender Löwe umher und sucht, wen er verschlingen kann. Leistet ihm Widerstand in der Kraft des Glaubens!",
          "oration_komplet": "Herr, gütiger Vater, sei du unsere Leuchte im Dunkel der Nacht. Gib, dass wir in Frieden schlafen, damit wir uns beim Anbruch des neuen Tages in deinem Namen freudig erheben. Darum bitten wir durch Christus, unseren Herrn."
        }
      },
      "3": {
        "Invitatorium": {
          "ant_0": "Lasst uns niederfallen vor Gott, vor dem Herrn, unserm Schöpfer!"
        },
        "Komplet": {
          "hymn_2": 513.0,
          "ps_1": 31.4,
          "ps_2": 130.0,
          "ant_1": "Sei mir ein schützender Fels, eine feste Burg, die mich rettet.",
          "ant_2": "Aus der Tiefe rufe ich, Herr, zu dir.",
          "les_buch": "Eph",
          "les_stelle": "4,26–27",
          "les_text": "Lasst euch durch den Zorn nicht zur Sünde hinreißen! Die Sonne soll über eurem Zorn nicht untergehen. Gebt dem Teufel keinen Raum!",
          "oration_komplet": "Herr Jesus Christus, du bist gütig und von Herzen demütig. Das Joch, das du denen auflegst, die dir nachfolgen, ist nicht drückend, und deine Last ist leicht. Nimm gnädig an, was wir uns heute vorgenommen und was wir vollbracht haben. Erneuere uns durch die Ruhe der Nacht und mache uns morgen eifriger in deinem Dienst. Der du lebst und herrschest in alle Ewigkeit."
        }
      },
      "4": {
        "Invitatorium": {
          "ant_0": "Kommt, lasst uns niederknien vor dem Herrn, denn er ist unser Gott!"
        },
        "Komplet": {
          "hymn_2": 514.0,
          "ps_1": 16.0,
          "ant_0": "Mein Leib wird ruhen in Sicherheit.",
          "les_buch": "1 Thess",
          "les_stelle": "5,23",
          "les_text": "Der Gott des Friedens heilige euch ganz und gar und bewahre euren Geist, eure Seele und euren Leib unversehrt, damit ihr ohne Tadel seid, wenn Jesus Christus, unser Herr, kommt.",
          "oration_komplet": "Herr, unser Gott, sende uns in dieser Nacht einen ruhigen Schlaf, damit wir uns von der Mühe des Tages erholen und morgen mit neuer Kraft dir dienen können. Darum bitten wir durch Jesus Christus, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "5": {
        "Invitatorium": {
          "ant_0": "Danket dem Herrn; denn seine Huld währt ewig!"
        },
        "Komplet": {
          "hymn_2": 515.0,
          "ps_1": 88.0,
          "ant_0": "Herr, du Gott meines Heils, zu dir schreie ich am Tag und bei Nacht.",
          "les_buch": "Jer",
          "les_stelle": "14,9",
          "les_text": "Du bist in unsrer Mitte, Herr, und dein Name ist über uns ausgerufen; verlass uns nicht, Herr, unser Gott!",
          "oration_komplet": "Allmächtiger Gott, dein eingeborener Sohn ist hinabgestiegen in die Nacht des Todes und auferstanden. Gib, dass wir alle Tage durch den Glauben ihm verbunden bleiben, damit wir einst mit ihm auferstehen zum neuen Leben. Darum bitten wir durch ihn, Christus, unseren Herrn."
        }
      },
      "6": {
        "Invitatorium": {
          "ant_0": "Dem Herrn gehört die Erde und was sie erfüllt; kommt, wir beten ihn an!"
        },
        "Komplet": {
          "hymn_2": 516.0,
          "ps_1": 4.0,
          "ps_2": 134.0,
          "ant_1": "Sei mir gnädig, Herr, und höre auf mein Flehen.",
          "ant_2": "Zu nächtlicher Stunde preiset den Herrn.",
          "les_buch": "Dtn",
          "les_stelle": "6,4–7",
          "les_text": "Höre, Israel! Jahwe, unser Gott, Jahwe ist einzig. Dar­um sollst du den Herrn, deinen Gott, lieben mit gan­zem Herzen, mit ganzer Seele und mit ganzer Kraft. Diese Worte, auf die ich dich heute verpflichte, sollen auf deinem Herzen geschrieben stehen. Du sollst sie deinen Söhnen wiederholen. Du sollst von ihnen reden, wenn du zu Hause sitzt und wenn du auf der Straße gehst, wenn du dich schlafen legst und wenn du aufstehst.",
          "oration_komplet": "Herr, bleibe bei uns in dieser Nacht, und wenn wir uns am Morgen erheben, dann lass uns in Freude der Auferstehung deines Sohnes gedenken, der mit dir lebt und herrscht in alle Ewigkeit."
        }
      },
      "each": {
        "Invitatorium": {
          "ps_100": 100.0,
          "ps_95": 95.0,
          "ps_67": 67.0,
          "ps_24": 24.0
        },
        "Komplet": {
          "hymn_1": 504.0,
          "resp1_1": "Herr, auf dich vertraue ich,",
          "resp1_2": "in deine Hände lege ich mein Leben.",
          "resp1_3": "Lass leuchten über deinem Knecht dein Antlitz, hilf mir in deiner Güte.",
          "ant_ev": "Sei unser Heil, o Herr, wenn wir wachen, und unser Schutz, wenn wir schlafen, damit wir wachen mit Christus und ruhen in Frieden.^ö",
          "ev": 501.0,
          "ev_lat": 502.0,
          "marant": 505.0,
          "marant_lat": 506.0
        },
        "Laudes": {
          "ev": 201.0,
          "ev_lat": 202.0,
          "vu": 206.0,
          "vu_lat": 207.0
        },
        "Non": {
          "hymn_1": 690.0,
          "hymn_2": 691.0
        },
        "Sext": {
          "hymn_1": 660.0,
          "hymn_2": 661.0
        },
        "Terz": {
          "hymn_1": 630.0,
          "hymn_2": 631.0
        },
        "Vesper": {
          "ev": 301.0,
          "ev_lat": 302.0,
          "vu": 206.0,
          "vu_lat": 207.0
        }
      }
    },
    "even": {
      "0": {
        "Invitatorium": {
          "ant_0": "Wir sind das Volk des Herrn, die Herde seiner Weide; kommt, wir beten ihn an! Halleluja."
        }
      }
    }
  },
  "pj": {
    "1": {
      "6": {
        "Lesehore": {
          "ps_1": 131.0,
          "ps_2": 132.1,
          "ps_3": 132.2,
          "ant_1": "Wer so klein sein kann wie ein Kind, der ist im Himmelreich der Größte.",
          "ant_2": "Mit ungeteiltem Herzen habe ich freudig alles gegeben, Herr, du mein Gott.",
          "ant_3": "Der Herr hat David Treue geschworen; er hat seine Herrschaft auf ewig gefestigt."
        }
      }
    },
    "2": {
      "6": {
        "Lesehore": {
          "ps_1": 136.1,
          "ps_2": 136.3,
          "ps_3": 136.4,
          "ant_1": "Der Herr allein tut große Wunder; seine Huld währt ewig.",
          "ant_2": "Der Herr hat Israel herausgeführt aus Ägypten; seine Huld währt ewig.",
          "ant_3": "Dankt dem Gott des Himmels; seine Huld währt ewig."
        }
      }
    },
    "4": {
      "5": {
        "Lesehore": {
          "ps_1": 55.3,
          "ps_2": 55.4,
          "ps_3": 55.5,
          "ant_1": "Mein Gott, verbirg dich nicht vor meinem Flehen; mir ist angst, weil mich die Frevler bedrängen.",
          "ant_2": "Der Herr wird uns befreien aus der Hand des Feindes und Verfolgers.",
          "ant_3": "Wirf deine Sorge auf den Herrn; er hält dich aufrecht."
        }
      },
      "6": {
        "Lesehore": {
          "ps_1": 50.1,
          "ps_2": 50.2,
          "ps_3": 50.3,
          "ant_1": "Dem Himmel und der Erde ruft Gott zu, er werde sein Volk nun richten.",
          "ant_2": "Rufe mich an am Tag der Not, und ich werde dich retten.",
          "ant_3": "Wer Opfer des Lobes bringt, ehrt mich; wer rechtschaffen lebt, dem zeig’ ich mein Heil."
        }
      }
    }
  },
  "q": {
    "0": {
      "3": {
        "each": {
          "oration": "q-0-3-each-Oration"
        }
      },
      "4": {
        "each": {
          "oration": "q-0-4-each-Oration"
        }
      },
      "5": {
        "each": {
          "oration": "q-0-5-each-Oration"
        }
      },
      "6": {
        "each": {
          "oration": "q-0-6-each-Oration"
        }
      }
    },
    "1": {
      "0": {
        "each": {
          "oration": "q-1-0-each-Oration"
        }
      },
      "1": {
        "each": {
          "oration": "q-1-1-each-Oration"
        }
      },
      "2": {
        "each": {
          "oration": "q-1-2-each-Oration"
        }
      },
      "3": {
        "each": {
          "oration": "q-1-3-each-Oration"
        }
      },
      "4": {
        "each": {
          "oration": "q-1-4-each-Oration"
        }
      },
      "5": {
        "each": {
          "oration": "q-1-5-each-Oration"
        }
      },
      "6": {
        "each": {
          "oration": "q-1-6-each-Oration"
        }
      }
    },
    "2": {
      "0": {
        "each": {
          "oration": "q-2-0-each-Oration"
        }
      },
      "1": {
        "each": {
          "oration": "q-2-1-each-Oration"
        }
      },
      "2": {
        "each": {
          "oration": "q-2-2-each-Oration"
        }
      },
      "3": {
        "each": {
          "oration": "q-2-3-each-Oration"
        }
      },
      "4": {
        "each": {
          "oration": "q-2-4-each-Oration"
        }
      },
      "5": {
        "each": {
          "oration": "q-2-5-each-Oration"
        }
      },
      "6": {
        "each": {
          "oration": "q-2-6-each-Oration"
        }
      }
    },
    "3": {
      "0": {
        "each": {
          "oration": "q-3-0-each-Oration"
        }
      },
      "1": {
        "each": {
          "oration": "q-3-1-each-Oration"
        }
      },
      "2": {
        "each": {
          "oration": "q-3-2-each-Oration"
        }
      },
      "3": {
        "each": {
          "oration": "q-3-3-each-Oration"
        }
      },
      "4": {
        "each": {
          "oration": "q-3-4-each-Oration"
        }
      },
      "5": {
        "each": {
          "oration": "q-3-5-each-Oration"
        }
      },
      "6": {
        "each": {
          "oration": "q-3-6-each-Oration"
        }
      }
    },
    "4": {
      "0": {
        "each": {
          "oration": "q-4-0-each-Oration"
        }
      },
      "1": {
        "each": {
          "oration": "q-4-1-each-Oration"
        }
      },
      "2": {
        "each": {
          "oration": "q-4-2-each-Oration"
        }
      },
      "3": {
        "each": {
          "oration": "q-4-3-each-Oration"
        }
      },
      "4": {
        "each": {
          "oration": "q-4-4-each-Oration"
        }
      },
      "5": {
        "each": {
          "oration": "q-4-5-each-Oration"
        }
      },
      "6": {
        "each": {
          "oration": "q-4-6-each-Oration"
        }
      }
    },
    "5": {
      "0": {
        "each": {
          "oration": "q-5-0-each-Oration"
        }
      },
      "1": {
        "each": {
          "oration": "q-5-1-each-Oration"
        }
      },
      "2": {
        "each": {
          "oration": "q-5-2-each-Oration"
        }
      },
      "3": {
        "each": {
          "oration": "q-5-3-each-Oration"
        }
      },
      "4": {
        "each": {
          "oration": "q-5-4-each-Oration"
        }
      },
      "5": {
        "each": {
          "oration": "q-5-5-each-Oration"
        }
      },
      "6": {
        "each": {
          "oration": "q-5-6-each-Oration"
        }
      }
    },
    "6": {
      "0": {
        "each": {
          "oration": "q-6-0-each-Oration"
        }
      },
      "1": {
        "each": {
          "oration": "q-6-1-each-Oration"
        }
      },
      "2": {
        "each": {
          "oration": "q-6-2-each-Oration"
        }
      },
      "3": {
        "each": {
          "oration": "q-6-3-each-Oration"
        }
      },
      "4": {
        "each": {
          "oration": "q-6-4-each-Oration"
        }
      },
      "5": {
        "each": {
          "oration": "q-6-5-each-Oration"
        }
      },
      "6": {
        "each": {
          "oration": "q-6-6-each-Oration"
        }
      }
    },
    "each": {
      "0": {
        "Laudes": {
          "les_buch": "Neh",
          "les_stelle": "8,9b.10b",
          "les_text": "Text von Neh 8,9b.10b",
          "resp1_3": "Du wurdest misshandelt wegen unsrer Sünden, wegen unsrer Verbrechen durchbohrt.",
          "bitten_e": "q-each-0-Bitten_E",
          "bitten_r": "q-each-0-Bitten_R",
          "bitten": "q-each-0-Bitten"
        },
        "Lesehore": {
          "hymn_1": 3401.0,
          "hymn_2": 3402.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "vu": 0,
          "vu_lat": 0
        },
        "Non": {
          "les_buch": "Dtn",
          "les_stelle": "4,29b–31",
          "les_text": "Text von Dtn 4,29b–31"
        },
        "Sext": {
          "les_buch": "vgl. Jes",
          "les_stelle": "30,15.18",
          "les_text": "Text von vgl. Jes 30,15.18"
        },
        "Terz": {
          "les_buch": "1 Thess",
          "les_stelle": "4,1.7",
          "les_text": "Text von 1 Thess 4,1.7"
        },
        "Vesper": {
          "ps_3": 158.0,
          "les_buch": "vgl. 1 Kor",
          "les_stelle": "9,24–25",
          "les_text": "9,24-25",
          "resp1_2": "Herr, sei uns gnädig, erbarme dich unser.",
          "resp1_3": "Erhöre, Christus, unser Rufen und Flehen.",
          "bitten_e": "q-each-0-Bitten_E",
          "bitten_r": "q-each-0-Bitten_R",
          "bitten": "q-each-0-Bitten"
        }
      },
      "1": {
        "Laudes": {
          "les_buch": "Ex",
          "les_stelle": "19,4ac–6a",
          "les_text": "Text von Ex 19,4ac–6a",
          "bitten_e": "q-each-1-Bitten_E",
          "bitten_r": "q-each-1-Bitten_R",
          "bitten": "q-each-1-Bitten"
        },
        "Non": {
          "les_buch": "Jes",
          "les_stelle": "58,6a.7",
          "les_text": "Text von Jes 58,6a.7"
        },
        "Sext": {
          "les_buch": "Ez",
          "les_stelle": "18,23",
          "les_text": "Text von Ez 18,23"
        },
        "Terz": {
          "les_buch": "Weish",
          "les_stelle": "11,23–24a",
          "les_text": "Text von Weish 11,23–24a"
        },
        "Vesper": {
          "les_buch": "Röm",
          "les_stelle": "12,1–2",
          "les_text": "Text von Röm 12,1–2",
          "bitten_e": "q-each-1-Bitten_E",
          "bitten_r": "q-each-1-Bitten_R",
          "bitten": "q-each-1-Bitten"
        }
      },
      "2": {
        "Laudes": {
          "les_buch": "Joel",
          "les_stelle": "2,12–13",
          "les_text": "Text von Joel 2,12–13",
          "bitten_e": "q-each-2-Bitten_E",
          "bitten_r": "q-each-2-Bitten_R",
          "bitten": "q-each-2-Bitten"
        },
        "Non": {
          "les_buch": "Jes",
          "les_stelle": "58,1–2",
          "les_text": "Text von Jes 58,1–2"
        },
        "Sext": {
          "les_buch": "Jer",
          "les_stelle": "3,25b",
          "les_text": "Text von Jer 3,25b"
        },
        "Terz": {
          "les_buch": "Joel",
          "les_stelle": "2,17",
          "les_text": "Text von Joel 2,17"
        },
        "Vesper": {
          "les_buch": "Jak",
          "les_stelle": "2,14.17.18b",
          "les_text": "Text von Jak 2,14.17.18b",
          "bitten_e": "q-each-2-Bitten_E",
          "bitten_r": "q-each-2-Bitten_R",
          "bitten": "q-each-2-Bitten"
        }
      },
      "3": {
        "Laudes": {
          "les_buch": "Dtn",
          "les_stelle": "7,6b.8–9",
          "les_text": "Text von Dtn 7,6b.8–9",
          "bitten_e": "q-each-3-Bitten_E",
          "bitten_r": "q-each-3-Bitten_R",
          "bitten": "q-each-3-Bitten"
        },
        "Non": {
          "les_buch": "Dan",
          "les_stelle": "4,24b",
          "les_text": "Text von Dan 4,24b"
        },
        "Sext": {
          "les_buch": "Sach",
          "les_stelle": "1,3b–4b",
          "les_text": "Text von Sach 1,3b–4b"
        },
        "Terz": {
          "les_buch": "Ez",
          "les_stelle": "18,30b–32",
          "les_text": "Text von Ez 18,30b–32"
        },
        "Vesper": {
          "les_buch": "Phil",
          "les_stelle": "2,12b–15a",
          "les_text": "Text von Phil 2,12b–15a",
          "bitten_e": "q-each-3-Bitten_E",
          "bitten_r": "q-each-3-Bitten_R",
          "bitten": "q-each-3-Bitten"
        }
      },
      "4": {
        "Laudes": {
          "les_buch": "vgl. 1 Kön",
          "les_stelle": "8,51a.52–53",
          "les_text": "Text von vgl. 1 Kön 8,51a.52–53",
          "bitten_e": "q-each-4-Bitten_E",
          "bitten_r": "q-each-4-Bitten_R",
          "bitten": "q-each-4-Bitten"
        },
        "Non": {
          "les_buch": "Hebr",
          "les_stelle": "10,35–36",
          "les_text": "Text von Hebr 10,35–36"
        },
        "Sext": {
          "les_buch": "Dtn",
          "les_stelle": "30,2–3a",
          "les_text": "Text von Dtn 30,2–3a"
        },
        "Terz": {
          "les_buch": "Jes",
          "les_stelle": "55,6–7",
          "les_text": "Text von Jes 55,6–7"
        },
        "Vesper": {
          "les_buch": "Jak",
          "les_stelle": "4,7–8.10",
          "les_text": "Text von Jak 4,7–8.10",
          "bitten_e": "q-each-4-Bitten_E",
          "bitten_r": "q-each-4-Bitten_R",
          "bitten": "q-each-4-Bitten"
        }
      },
      "5": {
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "53,11b–12",
          "les_text": "Text von Jes 53,11b–12",
          "bitten_e": "q-each-5-Bitten_E",
          "bitten_r": "q-each-5-Bitten_R",
          "bitten": "q-each-5-Bitten"
        },
        "Non": {
          "les_buch": "Jak",
          "les_stelle": "1,27",
          "les_text": "Text von Jak 1,27"
        },
        "Sext": {
          "les_buch": "Jer",
          "les_stelle": "3,12.14a",
          "les_text": "Text von Jer 3,12.14a"
        },
        "Terz": {
          "les_buch": "Jes",
          "les_stelle": "55,3",
          "les_text": "Text von Jes 55,3"
        },
        "Vesper": {
          "les_buch": "Jak",
          "les_stelle": "5,16.19–20",
          "les_text": "Text von Jak 5,16.19–20",
          "bitten_e": "q-each-5-Bitten_E",
          "bitten_r": "q-each-5-Bitten_R",
          "bitten": "q-each-5-Bitten"
        }
      },
      "6": {
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "1,16–18",
          "les_text": "Text von Jes 1,16–18",
          "bitten_e": "q-each-6-Bitten_E",
          "bitten_r": "q-each-6-Bitten_R",
          "bitten": "q-each-6-Bitten"
        },
        "Non": {
          "les_buch": "Gal",
          "les_stelle": "6,7b–8",
          "les_text": "Was der Mensch sät, das wird er auch ernten. Wer im Vertrauen auf das Fleisch sät, wird vom Fleisch Verderben ernten; wer aber im Vertrauen auf den Geist sät, wird vom Geist ewiges Leben ernten."
        },
        "Sext": {
          "les_buch": "Jes",
          "les_stelle": "44,21–22",
          "les_text": "Text von Jes 44,21–22"
        },
        "Terz": {
          "les_buch": "Offb",
          "les_stelle": "3,19–20",
          "les_text": "Text von Offb 3,19–20"
        },
        "Vesper": {
          "les_buch": "2 Kor",
          "les_stelle": "6,1–4a",
          "les_text": "Text von 2 Kor 6,1–4a",
          "bitten_e": "q-each-6-Bitten_E",
          "bitten_r": "q-each-6-Bitten_R",
          "bitten": "q-each-6-Bitten"
        }
      },
      "each": {
        "Invitatorium": {
          "ant_0": "Christus, der Herr, wurde für uns versucht und hat für uns gelitten; kommt, wir beten ihn an."
        },
        "Komplet": {
          "marant": 523.0,
          "marant_lat": 524.0
        },
        "Laudes": {
          "hymn_1": 3201.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "resp1_1": "Er rettet mich aus der Schlinge des Jägers,",
          "resp1_2": "er befreit mich aus allem Verderben.",
          "resp1_3": "Der Herr ist meine Zuflucht, zum Schutze hab’ ich mir erwählt den Höchsten."
        },
        "Non": {
          "ant_0": "Mit den Waffen der Gerechtigkeit und durch Gottes Kraft halten wir stand in großer Geduld.",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "resp1_0": "Das Opfer, das Gott gefällt, ist ein zerknirschter Geist.",
          "resp1_1": "Ein zerschlagenes Herz wird er nicht verschmähen."
        },
        "Sext": {
          "ant_0": "So wahr ich lebe, spricht der Herr, ich will nicht den Tod des Sünders, ich will, dass er umkehrt und lebt.",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "resp1_0": "Verbirg dein Angesicht vor meinen Sünden.",
          "resp1_1": "Tilge all meine Frevel."
        },
        "Terz": {
          "ant_0": "Tage der Buße sind gekommen, Tage des Heils zur Vergebung der Sünden.",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "resp1_0": "Erschaffe mir, Gott, ein reines Herz.",
          "resp1_1": "Gib mir einen neuen, beständigen Geist."
        },
        "Vesper": {
          "hymn_1": 3301.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "resp1_1": "Sei mir gnädig und heile mich, ",
          "resp1_2": "ich habe vor dir gesündigt.",
          "resp1_3": "Verschließe mir nicht dein Erbarmen; Herr, eile mir zu Hilfe."
        }
      }
    },
    "even": {
      "0": {
        "Laudes": {
          "bitten_e": "q-even-0-Bitten_E",
          "bitten_r": "q-even-0-Bitten_R",
          "bitten": "q-even-0-Bitten"
        },
        "Vesper": {
          "bitten_e": "q-even-0-Bitten_E",
          "bitten_r": "q-even-0-Bitten_R",
          "bitten": "q-even-0-Bitten"
        }
      },
      "1": {
        "Laudes": {
          "bitten_e": "q-even-1-Bitten_E",
          "bitten_r": "q-even-1-Bitten_R",
          "bitten": "q-even-1-Bitten"
        },
        "Vesper": {
          "bitten_e": "q-even-1-Bitten_E",
          "bitten_r": "q-even-1-Bitten_R",
          "bitten": "q-even-1-Bitten"
        }
      },
      "2": {
        "Laudes": {
          "bitten_e": "q-even-2-Bitten_E",
          "bitten_r": "q-even-2-Bitten_R",
          "bitten": "q-even-2-Bitten"
        },
        "Vesper": {
          "bitten_e": "q-even-2-Bitten_E",
          "bitten_r": "q-even-2-Bitten_R",
          "bitten": "q-even-2-Bitten"
        }
      },
      "3": {
        "Laudes": {
          "bitten_e": "q-even-3-Bitten_E",
          "bitten_r": "q-even-3-Bitten_R",
          "bitten": "q-even-3-Bitten"
        },
        "Vesper": {
          "bitten_e": "q-even-3-Bitten_E",
          "bitten_r": "q-even-3-Bitten_R",
          "bitten": "q-even-3-Bitten"
        }
      },
      "4": {
        "Laudes": {
          "bitten_e": "q-even-4-Bitten_E",
          "bitten_r": "q-even-4-Bitten_R",
          "bitten": "q-even-4-Bitten"
        },
        "Vesper": {
          "bitten_e": "q-even-4-Bitten_E",
          "bitten_r": "q-even-4-Bitten_R",
          "bitten": "q-even-4-Bitten"
        }
      },
      "5": {
        "Laudes": {
          "bitten_e": "q-even-5-Bitten_E",
          "bitten_r": "q-even-5-Bitten_R",
          "bitten": "q-even-5-Bitten"
        },
        "Vesper": {
          "bitten_e": "q-even-5-Bitten_E",
          "bitten_r": "q-even-5-Bitten_R",
          "bitten": "q-even-5-Bitten"
        }
      },
      "6": {
        "Laudes": {
          "bitten_e": "q-even-6-Bitten_E",
          "bitten_r": "q-even-6-Bitten_R",
          "bitten": "q-even-6-Bitten"
        },
        "Vesper": {
          "bitten_e": "q-even-6-Bitten_E",
          "bitten_r": "q-even-6-Bitten_R",
          "bitten": "q-even-6-Bitten"
        }
      }
    },
    "last": {
      "0": {
        "Laudes": {
          "les_buch": "Lev",
          "les_stelle": "23,4–7",
          "les_text": "23,4-7"
        },
        "Non": {
          "les_buch": "1 Petr",
          "les_stelle": "5,10–11",
          "les_text": "5,10-11"
        },
        "Sext": {
          "les_buch": "1 Petr",
          "les_stelle": "4,13–14",
          "les_text": "4,13-14"
        },
        "Terz": {
          "les_buch": "2 Kor",
          "les_stelle": "4,10–11",
          "les_text": "4,10-11"
        },
        "Vesper": {
          "les_buch": "Apg",
          "les_stelle": "13,26b–30a",
          "les_text": "13,26b-30a"
        }
      },
      "1": {
        "Laudes": {
          "les_buch": "Jer",
          "les_stelle": "11,19–20",
          "les_text": "11,19-20"
        },
        "Non": {
          "les_buch": "Jer",
          "les_stelle": "31,2.3b.4a",
          "les_text": "31,2.3b.4a"
        },
        "Sext": {
          "les_buch": "Jer",
          "les_stelle": "18,20b",
          "les_text": "18,20b"
        },
        "Terz": {
          "les_buch": "Ez",
          "les_stelle": "33,10b.11b",
          "les_text": "33,10b.11b"
        },
        "Vesper": {
          "les_buch": "Röm",
          "les_stelle": "5,8–9",
          "les_text": "5,8-9"
        }
      },
      "2": {
        "Laudes": {
          "les_buch": "Sach",
          "les_stelle": "12,10–11a",
          "les_text": "12,10-11a"
        },
        "Non": {
          "les_buch": "1 Kor",
          "les_stelle": "1,25.27a",
          "les_text": "1,25.27a"
        },
        "Sext": {
          "les_buch": "1 Kor",
          "les_stelle": "1,22–24",
          "les_text": "1,22-24"
        },
        "Terz": {
          "les_buch": "1 Kor",
          "les_stelle": "1,18–19",
          "les_text": "1,18-19"
        },
        "Vesper": {
          "les_buch": "1 Kor",
          "les_stelle": "1,27b–30",
          "les_text": "1,27b-30"
        }
      },
      "3": {
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "50,5–7",
          "les_text": "50,5-7"
        },
        "Non": {
          "les_buch": "Hebr",
          "les_stelle": "9,28",
          "les_text": "9,28"
        },
        "Sext": {
          "les_buch": "Röm",
          "les_stelle": "15,3",
          "les_text": "15,3"
        },
        "Terz": {
          "les_buch": "1 Tim",
          "les_stelle": "2,4–6",
          "les_text": "2,4-6"
        },
        "Vesper": {
          "les_buch": "Eph",
          "les_stelle": "4,32– 5,2",
          "les_text": "4,32- 5,2"
        }
      },
      "4": {
        "Laudes": {
          "les_buch": "Hebr",
          "les_stelle": "2,9b–10",
          "les_text": "2,9b-10"
        },
        "Non": {
          "les_buch": "Hebr",
          "les_stelle": "9,11–12",
          "les_text": "9,11-12"
        },
        "Sext": {
          "les_buch": "Hebr",
          "les_stelle": "7,26–27",
          "les_text": "7,26-27"
        },
        "Terz": {
          "les_buch": "Hebr",
          "les_stelle": "4,14–15",
          "les_text": "4,14-15"
        },
        "Vesper": {
          "les_buch": "Hebr",
          "les_stelle": "13,12–15",
          "les_text": "13,12-15"
        }
      },
      "5": {
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "52,13–15",
          "les_text": "52,13-15"
        },
        "Non": {
          "les_buch": "Jes",
          "les_stelle": "53,6–7",
          "les_text": "53,6-7"
        },
        "Sext": {
          "les_buch": "Jes",
          "les_stelle": "53,4–5",
          "les_text": "53,4-5"
        },
        "Terz": {
          "les_buch": "Jes",
          "les_stelle": "53,2–3",
          "les_text": "53,2-3"
        },
        "Vesper": {
          "les_buch": "1 Petr",
          "les_stelle": "2,21b–24",
          "les_text": "2,21b-24"
        }
      },
      "6": {
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "65,1b–3a",
          "les_text": "65,1b-3a"
        },
        "Non": {
          "les_buch": "1 Joh",
          "les_stelle": "2,8b–10",
          "les_text": "2,8b-10"
        },
        "Sext": {
          "les_buch": "1 Joh",
          "les_stelle": "2,1b–2",
          "les_text": "2,1b-2"
        },
        "Terz": {
          "les_buch": "1 Joh",
          "les_stelle": "1,8–9",
          "les_text": "1,8-9"
        },
        "Vesper": {
          "les_buch": "1 Petr",
          "les_stelle": "1,18–21",
          "les_text": "1,18-21"
        }
      },
      "each": {
        "Invitatorium": {
          "ant_0": "Christus, der Herr, wurde für uns versucht und hat für uns gelitten; kommt, wir beten ihn an."
        },
        "Laudes": {
          "hymn_1": 3203.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "resp1_1": "Mit deinem heiligen Blute",
          "resp1_2": "hast du uns losgekauft.",
          "resp1_3": "Aus allen Stämmen und Sprachen"
        },
        "Lesehore": {
          "hymn_1": 3403.0,
          "hymn_2": 0.0
        },
        "Non": {
          "ant_0": "Für mich ist Christus das Leben und Sterben Gewinn. Ich rühme mich des Kreuzes meines Herrn Jesus Christus.",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "resp1_0": "Lasst uns niederfallen vor dem Kreuz unseres Erlösers.",
          "resp1_1": "Durch das wir das Geheimnis des Heiles empfangen."
        },
        "Sext": {
          "ant_0": "Wie mich der Vater kennt, so kenne ich den Vater; ich gebe mein Leben hin für meine Schafe.",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "resp1_0": "Wahrlich, er trug unsere Krankheit.",
          "resp1_1": "Und nahm auf sich unsere Sünden."
        },
        "Terz": {
          "ant_0": "Es war vor dem Paschafest. Jesus wusste, dass seine Stunde gekommen war. Und da er die Seinen liebte, liebte er sie bis zur Vollendung.",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "resp1_0": "Er wurde geopfert, weil er selbst es wollte.",
          "resp1_1": "Und tat seinen Mund nicht auf."
        },
        "Vesper": {
          "hymn_1": 3303.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "resp1_1": "Wir beten dich an, Herr, Jesus Christus,",
          "resp1_2": "wir preisen dein heiliges Leiden.",
          "resp1_3": "Durch deinen Tod am Kreuz hast du die Welt erlöst."
        }
      }
    }
  },
  "w": {
    "1": {
      "0": {
        "each": {
          "oration": "w-1-0-each-Oration"
        }
      },
      "6": {
        "Vesper": {
          "ant_1": "Durch das Wort hat die Jungfrau empfangen. Jungfrau blieb sie. Als Jungfrau gebar sie den König der Könige.",
          "ant_2": "Freut euch mit Jerusalem; denn der Herr leitet den Frieden zu ihr wie einen Strom.",
          "ant_3": "Gottes Sohn ist uns geboren: Gott von Gott, Licht vom Licht vor aller Zeit.",
          "les_buch": "1 Joh",
          "les_stelle": "5,2",
          "les_text": "Wir wissen: Der Sohn Gottes ist gekommen, und er hat uns Einsicht geschenkt, damit wir den Wahren erkennen. Und wir sind in diesem Wahren, in seinem Sohn Jesus Christus. Er ist der wahre Gott und das ewige Leben.",
          "ant_ev": "Voll der Gnade bist du, Jungfrau Maria, denn ein großes Geheimnis hat dein Schoß getragen. Halleluja.",
          "bitten_e": "Lasst uns beten zu unserem Herrn Jesus Christus, der sich selbst erniedrigte und Mensch geworden ist:",
          "bitten_r": "Herr, durch deine Geburt komm uns zu Hilfe.",
          "bitten": "Mit deinem Kommen hast du die neue Weltzeit heraufgeführt;^qgib, dass deine Kirche sich immer wieder erneuert.^pDu hast die Gebrechen der Menschen auf dich genommen;^qsei den Blinden Licht, den Schwachen Kraft und den Leidenden Trost.^pIn Armut und Niedrigkeit wurdest du geboren;^qerbarme dich der Armen und mache uns bereit, ihnen zu helfen.^pDeine Geburt auf Erden brachte Freude durch die Verheißung ewigen Lebens;^qschenke den Sterbenden die Zuversicht, dass sie im Tod zum Leben geboren werden.^pDu bist auf die Erde herabgekommen, um alle Menschen zum Himmel zu führen;^qvereine die Toten mit dir in der ewigen Herrlichkeit.",
          "oration": "Allmächtiger, ewiger Gott, du erleuchtest alle, die an dich glauben. Offenbare dich den Völkern der Erde, damit alle Menschen das Licht deiner Herrlichkeit schauen. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      }
    },
    "2": {
      "0": {
        "each": {
          "oration": "Allmächtiger, ewiger Gott, du erleuchtest alle, die an dich glauben. Offenbare dich den Völkern der Erde, damit alle Menschen das Licht deiner Herrlichkeit schauen. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        },
        "Laudes": {
          "ant_1": "Ein Licht erstrahlt den Gerechten; denn der Erlöser der Welt ist geboren. Halleluja.",
          "ant_2": "Lasst uns ein Loblied singen dem Herrn, unserm Gott. Halleluja.",
          "ant_3": "Das Volk inmitten der Völker sieht ein helles Licht; über denen, die in Finsternis wohnen, strahlt ein Licht auf.",
          "les_buch": "Hebr",
          "les_stelle": "1,1–2",
          "les_text": "Viele Male und auf vielerlei Weise hat Gott einst zu den Vätern gesprochen durch die Propheten; in dieser Endzeit aber hat er zu uns gesprochen durch den Sohn, den er zum Erben des Alls eingesetzt und durch den er auch die Welt erschaffen hat.",
          "resp1_1": "Christus, du Sohn des lebendigen Gottes,",
          "resp1_2": "erbarme dich unser.",
          "resp1_3": "Du bist geboren von Maria, der Jungfrau.",
          "ant_ev": "Gebenedeit bist du unter den Frauen, allzeit jungfräuliche Mutter Maria; denn du hast der Welt das ewige Wort geboren.",
          "bitten_e": "Lob und Preis und Ehre dem Worte Gottes! Es war bei Gott vor aller Zeit und wurde für uns Mensch in der Zeit. Zu ihm lasst uns rufen:",
          "bitten": "Christus, ewiges Wort, du bist Fleisch geworden und hast unter uns gewohnt;^qmach unser Herz froh über deine Geburt.^pDu, unser Heiland, in dir ist die Treue Gottes offenbar geworden,^qgib, dass wir Gott die Treue halten.^pKönig des Himmels und der Erde, durch die Engel hast du den Menschen Frieden verkündet;^qbewahre uns in deinem Frieden.^pDu Spross Davids, du wurdest in die Welt eingepflanzt als der wahre Weinstock;^qgib, dass wir in dir bleiben und du in uns."
        },
        "Non": {
          "les_buch": "Apg",
          "les_stelle": "10,36",
          "les_text": "Gott hat das Wort den Israeliten gesandt, indem er den Frieden verkündete durch Jesus Christus; dieser ist der Herr aller."
        },
        "Sext": {
          "les_buch": "1 Joh",
          "les_stelle": "4,9",
          "les_text": "Die Liebe Gottes wurde unter uns dadurch offenbart, dass Gott seinen einzigen Sohn in die Welt gesandt hat, damit wir durch ihn leben."
        },
        "Terz": {
          "les_buch": "Tit",
          "les_stelle": "2,11–12",
          "les_text": "Die Gnade Gottes ist erschienen, um alle Menschen zu retten. Sie erzieht uns dazu, uns von der Gottlosigkeit und den irdischen Begierden loszusagen und besonnen, gerecht und fromm in dieser Welt zu leben,"
        },
        "Vesper": {
          "ant_1": "Aufgeleuchtet ist uns aufs neue der Tag der Erlösung, der uralte Sehnsucht erfüllt und ewige Glückseligkeit verheißt.",
          "ant_2": "Der Herr ist barmherzig und getreu. Er hat seinen Sohn gesandt, uns zu erlösen.",
          "ant_3": "Auf Erden ist uns geboren der Herr, der König der Könige. Siehe, schon ist gekommen das Heil der Welt, unsere Erlösung. Halleluja.",
          "les_buch": "1 Joh",
          "les_stelle": "1,1–3",
          "les_text": "Was von Anfang an war, was wir gehört haben, was wir mit unseren Augen gesehen, was wir geschaut und was unsere Hände angefasst haben, das verkünden wir, vom Wort des Lebens sprechen wir. Denn das Leben wurde offenbart; wir haben gesehen und bezeugen und verkünden euch das ewige Leben, das beim Vater war und uns offenbart wurde. Was wir gesehen und gehört haben, das verkünden wir auch euch, damit auch ihr Gemeinschaft mit uns habt. Wir aber haben Gemeinschaft mit dem Vater und mit seinem Sohn Jesus Christus.",
          "ant_ev": "Selig der Leib, der den Sohn des ewigen Vaters getragen, selig die Brust, die Christus, den Herrn, genährt hat.",
          "bitten_e": "Lasst uns beten zu unserem Heiland, bei dessen Geburt Engel der Welt den Frieden verkündeten:",
          "bitten_r": "Deine Geburt bringe Frieden den Menschen.",
          "bitten": "Herr, schenke der Kirche die Fülle deiner Gaben;^qmache sie froh durch die Feier deiner Geburt.^pDu bist unser Hirt und Bischof;^qmache den Papst und die Bischöfe zu treuen Dienern deiner Gnade.^pKönig vor aller Zeit und in Ewigkeit, du hast dich eingrenzen lassen in die kurze Spanne menschlichen Lebens;^qgib den sterblichen Menschen Anteil an deiner Ewigkeit.^pVon Urzeit her erwartet, bist du gekommen, als die Zeit erfüllt war;^qoffenbare deine Ankunft denen, die noch auf dich warten.^pDu hast den Menschen, der dem Tod verfallen ist, durch deine Menschwerdung erneuert;^qvollende an unseren Verstorbenen das Werk der Erlösung."
        }
      },
      "6": {
        "Vesper": {
          "hymn_1": 2204.0,
          "ps_1": 135.1,
          "ps_2": 135.2,
          "ps_3": 159.0,
          "ant_1": "Johannes kam zum Jordan und verkündete: Lasst euch taufen zur Buße und zur Vergebung der Sünden.",
          "ant_2": "Ich taufe mit Wasser. Der nach mir kommt, wird euch taufen mit heiligem Geist und mit Feuer.",
          "ant_3": "Als Jesus getauft war, stieg er aus dem Wasser, und siehe, der Himmel tat sich auf über ihm.",
          "les_buch": "Apg",
          "les_stelle": "10,37–38",
          "les_text": "Ihr wisst, was im ganzen Land der Juden geschehen ist, angefangen in Galiläa, nach der Taufe, die Johannes verkündet hat: wie Gott Jesus von Nazaret gesalbt hat mit dem Heiligen Geist und mit Kraft, wie dieser umherzog, Gutes tat und alle heilte, die in der Gewalt des Teufels waren; denn Gott war mit ihm.",
          "resp1_1": "Herr, unser Gott,",
          "resp1_2": "vernimm das Flehen deines Volkes.",
          "resp1_3": "Öffne ihm die Quelle lebendigen Wassers.",
          "ant_ev": "Der uns im Wasser der Taufe von der alten Verderbnis reinigt, uns neu schafft und mit Unvergänglichkeit bekleidet, er, unser Heiland, kommt heute zum Jordan und erbittet von Johannes die Taufe.",
          "bitten_e": "Lasst uns beten zu unserem Erlöser Jesus Christus, der am heutigen Tag von Johannes im Jordan getauft wurde:",
          "bitten_r": "Kyrie, eleison.",
          "bitten": "Du bist der geliebte Sohn, an dem der Vater sein Wohlgefallen hat;^qschenke denen, die auf dich hören, deinen Geist.^pDu zerbrichst das geknickte Rohr nicht und löschst den glimmenden Docht nicht aus;^qerbarme dich aller, die fern sind von dir.^pDer Vater hat dich zum Licht der Heiden gemacht;^qschenke den Katechumenen die Freude des Glaubens.^pDer Vater hat dich mit dem Heiligen Geist gesalbt zum Dienst an den Menschen;^qführe alle, die an dich glauben zum Heil.^pDu bist die Hoffnung aller, die in Finsternis und Todesschatten sitzen;^qführe unsere Verstorbenen in dein ewiges Licht.",
          "oration": "Allmächtiger, ewiger Gott, bei der Taufe im Jordan kam der Heilige Geist auf unseren Herrn Jesus Christus herab, und du hast ihn als deinen geliebten Sohn geoffenbart. Gib, dass auch wir, die aus dem Wasser und dem Heiligen Geist wiedergeboren sind, in deinem Wohlgefallen stehen und als deine Kinder aus der Fülle dieses Geistes leben. Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
        }
      }
    },
    "each": {
      "each": {
        "Invitatorium": {
          "ant_0": "Christus ist uns geboren; kommt, wir beten ihn an."
        },
        "Komplet": {
          "marant": 521.0,
          "marant_lat": 522.0
        },
        "Laudes": {
          "hymn_1": 2201.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "resp1_1": "Der Herr hat kundgemacht sein Heil.",
          "resp1_2": "Halleluja,°halleluja.",
          "resp1_3": "Vor den Augen der Völker hat er sein Walten enthüllt."
        },
        "Lesehore": {
          "hymn_1": 2401.0,
          "hymn_2": 2402.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0
        },
        "Non": {
          "ant_0": "Meine Augen haben das Heil gesehen, das du vor allen Völkern bereitet hast.",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "resp1_0": "Huld und Treue begegnen einander. Halleluja.",
          "resp1_1": "Gerechtigkeit und Friede küssen sich. Halleluja."
        },
        "Sext": {
          "ant_0": "Maria bewahrte alles, was geschehen war, und erwog es in ihrem Herzen.",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "resp1_0": "Alle Enden der Erde. Halleluja.",
          "resp1_1": "Schauen das Heil unseres Gottes. Halleluja."
        },
        "Terz": {
          "ant_0": "Josef und Maria staunten über die Worte, die man über Jesus sagte.",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "resp1_0": "Der Herr gedachte seiner Huld. Halleluja.",
          "resp1_1": "Und seiner Treue zum Hause Israel. Halleluja."
        },
        "Vesper": {
          "hymn_1": 2301.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "resp1_1": "Das Wort ist Fleisch geworden und hat unter uns gewohnt.",
          "resp1_2": "Halleluja,°halleluja.",
          "resp1_3": "Aus seiner Fülle haben wir empfangen, Gnade über Gnade."
        }
      }
    },
    "last": {
      "each": {
        "Invitatorium": {
          "ant_0": "Christus ist uns erschienen; kommt, wir beten ihn an."
        },
        "Laudes": {
          "hymn_1": 2203.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "resp1_1": "Alle Könige müssen ihm huldigen, alle Völker ihm dienen.",
          "resp1_2": "Halleluja,°halleluja.",
          "resp1_3": "Sein Name wird ewig bestehen, seine Herrlichkeit erfüllt die Erde."
        },
        "Lesehore": {
          "hymn_1": 2403.0,
          "hymn_2": 0.0
        },
        "Non": {
          "ant_0": "Ich mache dich zum Licht für alle Völker; trage mein Heil bis an die Enden der Erde.",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "resp1_0": "Ihr Völker, preist unsern Gott.",
          "resp1_1": "Erhebt die Stimme zu seinem Lob."
        },
        "Sext": {
          "ant_0": "Einst wart ihr fern, nun seid ihr nahe; denn Christus ist erschienen, euer Friede.",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "resp1_0": "Die Völker schauen den Gerechten.",
          "resp1_1": "Alle Könige den Herrn der Herrlichkeit."
        },
        "Terz": {
          "ant_0": "Das Geheimnis, das von Ewigkeit her verborgen war – heute wurde es kundgetan.",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "resp1_0": "Er ist auf Erden erschienen.",
          "resp1_1": "Er hat mit den Menschen gelebt."
        },
        "Vesper": {
          "hymn_1": 2303.0,
          "hymn_nacht": 0.0,
          "hymn_kl": 0.0,
          "resp1_1": "In ihm sind gesegnet alle Völker der Erde.",
          "resp1_2": "Halleluja,°halleluja.",
          "resp1_3": "Alle Stämme sollen ihn preisen."
        }
      }
    },
    "okt": {
      "each": {
        "Laudes": {
          "ps_1": 63.0,
          "ps_2": 160.0,
          "ps_3": 149.0,
          "ant_1": "Ihr Hirten, wen habt ihr gesehen? Sagt und verkündet uns: Wer ist auf Erden erschienen? – Wir sahen das Kind und hörten die Chöre der Engel; die sangen das Lob des Herrn. Halleluja.",
          "ant_2": "Der Engel sprach zu den Hirten: Ich verkünde euch große Freude; heute ist euch der Heiland geboren, der Retter der Welt. Halleluja.",
          "ant_3": "Ein Kind ist uns heute geboren. „Starker Gott“ ist sein Name. Halleluja."
        },
        "Vesper": {
          "ps_1": 110.0,
          "ps_2": 130.0,
          "ps_3": 154.0,
          "ant_1": "Dein ist die Herrschaft am Tag deiner Macht, wenn du erscheinst in heiligem Schmuck; ich habe dich gezeugt noch vor dem Morgenstern.",
          "ant_2": "Beim Herrn ist die Huld, bei ihm ist Erlösung in Fülle.",
          "ant_3": "Das Wort war Gott – im Anfang und vor aller Zeit; heute ist er geboren als Heiland der Welt."
        }
      }
    }
  }
};