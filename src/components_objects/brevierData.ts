interface BrevierEntry {
  hymn_1?: number;
  hymn_2?: number;
  hymn_3?: number;
  hymn_nacht?: number;
  hymn_kl?: number;
  ps_1?: number;
  ps_2?: number;
  ps_3?: number;
  ant_0?: string;
  ant_1?: string;
  ant_2?: string;
  ant_3?: string;
  resp0_0?: string;
  resp0_1?: string;
  les_buch?: string;
  les_stelle?: string;
  resp1_0?: string;
  resp1_1?: string;
  resp1_2?: string;
  resp1_3?: string;
  ant_ev?: string;
  bitten_e?: string;
  bitten_r?: string;
  bitten?: string;
  oration?: string;
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
  "a": {
    "each": {
      "0": {
        "Laudes": {
          "les_buch": "Röm",
          "les_stelle": "13,11b-12",
          "resp1_1": "Christus, du Sohn des lebendigen Gottes,",
          "resp1_2": "erbarme dich unser.",
          "resp1_3": "Als Richter und Retter kommst du in diese Welt.",
          "bitten_e": "a-each-0-Bitten_E",
          "bitten_r": "a-each-0-Bitten_R",
          "bitten": "a-each-0-Bitten"
        },
        "Non": {
          "les_buch": "vgl.2Thess",
          "les_stelle": "1,6.7.10"
        },
        "Sext": {
          "les_buch": "1Thess",
          "les_stelle": "3,12-13"
        },
        "Terz": {
          "les_buch": "Röm",
          "les_stelle": "13,13-14a"
        },
        "Vesper": {
          "les_buch": "Phil",
          "les_stelle": "4,4-5",
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
          "bitten_e": "a-each-1-Bitten_E",
          "bitten_r": "a-each-1-Bitten_R",
          "bitten": "a-each-1-Bitten"
        },
        "Non": {
          "les_buch": "vgl.Jes",
          "les_stelle": "13,22; 14,1"
        },
        "Sext": {
          "les_buch": "vgl.Jes",
          "les_stelle": "10,24.27"
        },
        "Terz": {
          "les_buch": "Jes",
          "les_stelle": "10,20-21"
        },
        "Vesper": {
          "les_buch": "Phil",
          "les_stelle": "3,20b-21",
          "bitten_e": "a-each-1-Bitten_E",
          "bitten_r": "a-each-1-Bitten_R",
          "bitten": "a-each-1-Bitten"
        }
      },
      "2": {
        "Laudes": {
          "les_buch": "Gen",
          "les_stelle": "49,10",
          "bitten_e": "a-each-2-Bitten_E",
          "bitten_r": "a-each-2-Bitten_R",
          "bitten": "a-each-2-Bitten"
        },
        "Non": {
          "les_buch": "Ez",
          "les_stelle": "34,15-16"
        },
        "Sext": {
          "les_buch": "Jer",
          "les_stelle": "23,6"
        },
        "Terz": {
          "les_buch": "Jer",
          "les_stelle": "23,5"
        },
        "Vesper": {
          "les_buch": "1Kor",
          "les_stelle": "1,7b-9",
          "bitten_e": "a-each-2-Bitten_E",
          "bitten_r": "a-each-2-Bitten_R",
          "bitten": "a-each-2-Bitten"
        }
      },
      "3": {
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "7,14-15",
          "bitten_e": "a-each-3-Bitten_E",
          "bitten_r": "a-each-3-Bitten_R",
          "bitten": "a-each-3-Bitten"
        },
        "Non": {
          "les_buch": "Dan",
          "les_stelle": "9,19"
        },
        "Sext": {
          "les_buch": "Jes",
          "les_stelle": "12,2"
        },
        "Terz": {
          "les_buch": "Jes",
          "les_stelle": "2,11"
        },
        "Vesper": {
          "les_buch": "1Kor",
          "les_stelle": "4,5",
          "bitten_e": "a-each-3-Bitten_E",
          "bitten_r": "a-each-3-Bitten_R",
          "bitten": "a-each-3-Bitten"
        }
      },
      "4": {
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "45,8",
          "bitten_e": "a-each-4-Bitten_E",
          "bitten_r": "a-each-4-Bitten_R",
          "bitten": "a-each-4-Bitten"
        },
        "Non": {
          "les_buch": "Mal",
          "les_stelle": "3,20"
        },
        "Sext": {
          "les_buch": "Hag",
          "les_stelle": "2,6.9"
        },
        "Terz": {
          "les_buch": "Mi",
          "les_stelle": "5,3.4a"
        },
        "Vesper": {
          "les_buch": "Jak",
          "les_stelle": "5,7-8.9b",
          "bitten_e": "a-each-4-Bitten_E",
          "bitten_r": "a-each-4-Bitten_R",
          "bitten": "a-each-4-Bitten"
        }
      },
      "5": {
        "Laudes": {
          "les_buch": "Jer",
          "les_stelle": "30,18.21",
          "bitten_e": "a-each-5-Bitten_E",
          "bitten_r": "a-each-5-Bitten_R",
          "bitten": "a-each-5-Bitten"
        },
        "Non": {
          "les_buch": "Bar",
          "les_stelle": "3,5-6a"
        },
        "Sext": {
          "les_buch": "Jer",
          "les_stelle": "30,18"
        },
        "Terz": {
          "les_buch": "Jer",
          "les_stelle": "29,11.13.14"
        },
        "Vesper": {
          "les_buch": "2Petr",
          "les_stelle": "3,8b-9",
          "bitten_e": "a-each-5-Bitten_E",
          "bitten_r": "a-each-5-Bitten_R",
          "bitten": "a-each-5-Bitten"
        }
      },
      "6": {
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "11,1-2",
          "bitten_e": "a-each-6-Bitten_E",
          "bitten_r": "a-each-6-Bitten_R",
          "bitten": "a-each-6-Bitten"
        },
        "Non": {
          "les_buch": "Jes",
          "les_stelle": "61,11"
        },
        "Sext": {
          "les_buch": "Jes",
          "les_stelle": "4,3"
        },
        "Terz": {
          "les_buch": "Jes",
          "les_stelle": "4,2"
        },
        "Vesper": {
          "les_buch": "1 Thess",
          "les_stelle": "5,23-24",
          "bitten_e": "a-each-6-Bitten_E",
          "bitten_r": "a-each-6-Bitten_R",
          "bitten": "a-each-6-Bitten"
        }
      },
      "each": {
        "Invitatorium": {
          "ant_0": "Der Herr ist nahe; kommt, wir beten ihn an."
        },
        "Laudes": {
          "hymn_1": 1201.0,
          "hymn_nacht": 0,
          "hymn_kl": 0,
          "resp1_1": "Über dir, Jerusalem erstrahlt der Herr,",
          "resp1_2": "er geht auf über dir gleich der Sonne.",
          "resp1_3": "Und seine Herrlichkeit erscheint über dir."
        },
        "Lesehore": {
          "hymn_1": 1401.0,
          "hymn_2": 1402.0,
          "hymn_nacht": 0,
          "hymn_kl": 0
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
          "hymn_nacht": 0,
          "hymn_kl": 0,
          "resp1_2": "Erwecke deine Macht und komm.",
          "resp1_3": "Lass dein Angesicht leuchten, dann ist uns geholfen."
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
          "hymn_nacht": 0,
          "hymn_kl": 0
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
    }
  },
  "f": {
    "each": {
      "0": {
        "Laudes": {
          "les_buch": "Neh",
          "les_stelle": "8,9b.10b",
          "resp1_2": "erbarme dich unser.",
          "resp1_3": "Du wurdest misshandelt wegen unsrer Sünden, wegen unsrer Verbrechen durchbohrt.",
          "bitten_e": "f-each-0-Bitten_E",
          "bitten_r": "f-each-0-Bitten_R",
          "bitten": "f-each-0-Bitten"
        },
        "Non": {
          "les_buch": "Dtn",
          "les_stelle": "4,29b-31"
        },
        "Sext": {
          "les_buch": "vgl.Jes",
          "les_stelle": "30,15.18"
        },
        "Terz": {
          "les_buch": "1Thess",
          "les_stelle": "4,1.7"
        },
        "Vesper": {
          "ps_3": 158.0,
          "les_buch": "vgl.1Kor",
          "les_stelle": "9,24-25",
          "resp1_2": "Herr, sei uns gnädig, erbarme dich unser.",
          "resp1_3": "Erhöre, Christus, unser Rufen und Flehen.",
          "bitten_e": "f-each-0-Bitten_E",
          "bitten_r": "f-each-0-Bitten_R",
          "bitten": "f-each-0-Bitten"
        }
      },
      "1": {
        "Laudes": {
          "les_buch": "Ex",
          "les_stelle": "19,4ac-6a",
          "bitten_e": "f-each-1-Bitten_E",
          "bitten_r": "f-each-1-Bitten_R",
          "bitten": "f-each-1-Bitten"
        },
        "Non": {
          "les_buch": "Jes",
          "les_stelle": "58,6a.7"
        },
        "Sext": {
          "les_buch": "Ez",
          "les_stelle": "18,23"
        },
        "Terz": {
          "les_buch": "Weish",
          "les_stelle": "11,23-24a"
        },
        "Vesper": {
          "les_buch": "Röm",
          "les_stelle": "12,1-2",
          "bitten_e": "f-each-1-Bitten_E",
          "bitten_r": "f-each-1-Bitten_R",
          "bitten": "f-each-1-Bitten"
        }
      },
      "2": {
        "Laudes": {
          "les_buch": "Joel",
          "les_stelle": "2,12-13",
          "bitten_e": "f-each-2-Bitten_E",
          "bitten_r": "f-each-2-Bitten_R",
          "bitten": "f-each-2-Bitten"
        },
        "Non": {
          "les_buch": "Jes",
          "les_stelle": "58,1-2"
        },
        "Sext": {
          "les_buch": "Jer",
          "les_stelle": "3,25b"
        },
        "Terz": {
          "les_buch": "Joel",
          "les_stelle": "2,17"
        },
        "Vesper": {
          "les_buch": "Jak",
          "les_stelle": "2,14.17.18b",
          "bitten_e": "f-each-2-Bitten_E",
          "bitten_r": "f-each-2-Bitten_R",
          "bitten": "f-each-2-Bitten"
        }
      },
      "3": {
        "Laudes": {
          "les_buch": "Dtn",
          "les_stelle": "7,6b.8-9",
          "bitten_e": "f-each-3-Bitten_E",
          "bitten_r": "f-each-3-Bitten_R",
          "bitten": "f-each-3-Bitten"
        },
        "Non": {
          "les_buch": "Dan",
          "les_stelle": "4,24b"
        },
        "Sext": {
          "les_buch": "Sach",
          "les_stelle": "1,3b-4b"
        },
        "Terz": {
          "les_buch": "Ez",
          "les_stelle": "18,30b-32"
        },
        "Vesper": {
          "les_buch": "Phil",
          "les_stelle": "2,12b-15a",
          "bitten_e": "f-each-3-Bitten_E",
          "bitten_r": "f-each-3-Bitten_R",
          "bitten": "f-each-3-Bitten"
        }
      },
      "4": {
        "Laudes": {
          "les_buch": "vgl.1Kön",
          "les_stelle": "8,51a.52-53",
          "bitten_e": "f-each-4-Bitten_E",
          "bitten_r": "f-each-4-Bitten_R",
          "bitten": "f-each-4-Bitten"
        },
        "Non": {
          "les_buch": "Hebr",
          "les_stelle": "10,35-36"
        },
        "Sext": {
          "les_buch": "Dtn",
          "les_stelle": "30,2-3a"
        },
        "Terz": {
          "les_buch": "Jes",
          "les_stelle": "55,6-7"
        },
        "Vesper": {
          "les_buch": "Jak",
          "les_stelle": "4,7-8.10",
          "bitten_e": "f-each-4-Bitten_E",
          "bitten_r": "f-each-4-Bitten_R",
          "bitten": "f-each-4-Bitten"
        }
      },
      "5": {
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "53,11b-12",
          "bitten_e": "f-each-5-Bitten_E",
          "bitten_r": "f-each-5-Bitten_R",
          "bitten": "f-each-5-Bitten"
        },
        "Non": {
          "les_buch": "Jak",
          "les_stelle": "1,27"
        },
        "Sext": {
          "les_buch": "Jer",
          "les_stelle": "3,12.14a"
        },
        "Terz": {
          "les_buch": "Jes",
          "les_stelle": "55,3"
        },
        "Vesper": {
          "les_buch": "Jak",
          "les_stelle": "5,16.19-20",
          "bitten_e": "f-each-5-Bitten_E",
          "bitten_r": "f-each-5-Bitten_R",
          "bitten": "f-each-5-Bitten"
        }
      },
      "6": {
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "1,16-18",
          "bitten_e": "f-each-6-Bitten_E",
          "bitten_r": "f-each-6-Bitten_R",
          "bitten": "f-each-6-Bitten"
        },
        "Non": {
          "les_buch": "Gal",
          "les_stelle": "6,7b-8"
        },
        "Sext": {
          "les_buch": "Jes",
          "les_stelle": "44,21-22"
        },
        "Terz": {
          "les_buch": "Offb",
          "les_stelle": "3,19-20"
        },
        "Vesper": {
          "les_buch": "2Kor",
          "les_stelle": "6,1-4a",
          "bitten_e": "f-each-6-Bitten_E",
          "bitten_r": "f-each-6-Bitten_R",
          "bitten": "f-each-6-Bitten"
        }
      },
      "each": {
        "Invitatorium": {
          "ant_0": "Christus, der Herr, wurde für uns versucht und hat für uns gelitten; kommt, wir beten ihn an."
        },
        "Laudes": {
          "hymn_1": 3201.0,
          "hymn_nacht": 0,
          "hymn_kl": 0,
          "resp1_2": "er befreit mich aus allem Verderben.",
          "resp1_3": "Der Herr ist meine Zuflucht, zum Schutze hab’ ich mir erwählt den Höchsten."
        },
        "Lesehore": {
          "hymn_1": 3401.0,
          "hymn_2": 3402.0,
          "hymn_nacht": 0,
          "hymn_kl": 0
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
          "hymn_nacht": 0,
          "hymn_kl": 0,
          "resp1_2": "ich habe vor dir gesündigt.",
          "resp1_3": "Verschließe mir nicht dein Erbarmen; Herr, eile mir zu Hilfe."
        }
      }
    },
    "last": {
      "0": {
        "Laudes": {
          "les_buch": "Lev",
          "les_stelle": "23,4-7"
        },
        "Non": {
          "les_buch": "1Petr",
          "les_stelle": "5,10-11"
        },
        "Sext": {
          "les_buch": "1Petr",
          "les_stelle": "4,13-14"
        },
        "Terz": {
          "les_buch": "2Kor",
          "les_stelle": "4,10-11"
        },
        "Vesper": {
          "les_buch": "Apg",
          "les_stelle": "13,26b-30a"
        }
      },
      "1": {
        "Laudes": {
          "les_buch": "Jer",
          "les_stelle": "11,19-20"
        },
        "Non": {
          "les_buch": "Jer",
          "les_stelle": "31,2.3b.4a"
        },
        "Sext": {
          "les_buch": "Jer",
          "les_stelle": "18,20b"
        },
        "Terz": {
          "les_buch": "Ez",
          "les_stelle": "33,10b.11b"
        },
        "Vesper": {
          "les_buch": "Röm",
          "les_stelle": "5,8-9"
        }
      },
      "2": {
        "Laudes": {
          "les_buch": "Sach",
          "les_stelle": "12,10-11a"
        },
        "Non": {
          "les_buch": "1Kor",
          "les_stelle": "1,25.27a"
        },
        "Sext": {
          "les_buch": "1Kor",
          "les_stelle": "1,22-24"
        },
        "Terz": {
          "les_buch": "1Kor",
          "les_stelle": "1,18-19"
        },
        "Vesper": {
          "les_buch": "1Kor",
          "les_stelle": "1,27b-30"
        }
      },
      "3": {
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "50,5-7"
        },
        "Non": {
          "les_buch": "Hebr",
          "les_stelle": "9,28"
        },
        "Sext": {
          "les_buch": "Röm",
          "les_stelle": "15,3"
        },
        "Terz": {
          "les_buch": "1Tim",
          "les_stelle": "2,4-6"
        },
        "Vesper": {
          "les_buch": "Eph",
          "les_stelle": "4,32- 5,2"
        }
      },
      "4": {
        "Laudes": {
          "les_buch": "Hebr",
          "les_stelle": "2,9b-10"
        },
        "Non": {
          "les_buch": "Hebr",
          "les_stelle": "9,11-12"
        },
        "Sext": {
          "les_buch": "Hebr",
          "les_stelle": "7,26-27"
        },
        "Terz": {
          "les_buch": "Hebr",
          "les_stelle": "4,14-15"
        },
        "Vesper": {
          "les_buch": "Hebr",
          "les_stelle": "13,12-15"
        }
      },
      "5": {
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "52,13-15"
        },
        "Non": {
          "les_buch": "Jes",
          "les_stelle": "53,6-7"
        },
        "Sext": {
          "les_buch": "Jes",
          "les_stelle": "53,4-5"
        },
        "Terz": {
          "les_buch": "Jes",
          "les_stelle": "53,2-3"
        },
        "Vesper": {
          "les_buch": "1Petr",
          "les_stelle": "2,21b-24"
        }
      },
      "6": {
        "Laudes": {
          "les_buch": "Jes",
          "les_stelle": "65,1b-3a"
        },
        "Non": {
          "les_buch": "1Joh",
          "les_stelle": "2,8b-10"
        },
        "Sext": {
          "les_buch": "1Joh",
          "les_stelle": "2,1b-2"
        },
        "Terz": {
          "les_buch": "1Joh",
          "les_stelle": "1,8-9"
        },
        "Vesper": {
          "les_buch": "1Petr",
          "les_stelle": "1,18-21"
        }
      },
      "each": {
        "Invitatorium": {
          "ant_0": "Christus, der Herr, wurde für uns versucht und hat für uns gelitten; kommt, wir beten ihn an."
        },
        "Laudes": {
          "hymn_1": 3203.0,
          "hymn_nacht": 0,
          "hymn_kl": 0,
          "resp1_2": "hast du uns losgekauft.",
          "resp1_3": "Aus allen Stämmen und Sprachen"
        },
        "Lesehore": {
          "hymn_1": 3403.0,
          "hymn_nacht": 0,
          "hymn_kl": 0
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
          "ant_0": "Es war vor dem Paschafest. Jesus wusste, daß seine Stunde gekommen war. Und da er die Seinen liebte, liebte er sie bis zur Vollendung.",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "resp1_0": "Er wurde geopfert, weil er selbst es wollte.",
          "resp1_1": "Und tat seinen Mund nicht auf."
        },
        "Vesper": {
          "hymn_1": 3303.0,
          "hymn_nacht": 0,
          "hymn_kl": 0,
          "resp1_2": "wir preisen dein heiliges Leiden.",
          "resp1_3": "Durch deinen Tod am Kreuz hast du die Welt erlöst."
        }
      }
    },
    "even": {
      "0": {
        "Laudes": {
          "bitten_e": "f-even-0-Bitten_E",
          "bitten_r": "f-even-0-Bitten_R",
          "bitten": "f-even-0-Bitten"
        },
        "Vesper": {
          "bitten_e": "f-even-0-Bitten_E",
          "bitten_r": "f-even-0-Bitten_R",
          "bitten": "f-even-0-Bitten"
        }
      },
      "1": {
        "Laudes": {
          "bitten_e": "f-even-1-Bitten_E",
          "bitten_r": "f-even-1-Bitten_R",
          "bitten": "f-even-1-Bitten"
        },
        "Vesper": {
          "bitten_e": "f-even-1-Bitten_E",
          "bitten_r": "f-even-1-Bitten_R",
          "bitten": "f-even-1-Bitten"
        }
      },
      "2": {
        "Laudes": {
          "bitten_e": "f-even-2-Bitten_E",
          "bitten_r": "f-even-2-Bitten_R",
          "bitten": "f-even-2-Bitten"
        },
        "Vesper": {
          "bitten_e": "f-even-2-Bitten_E",
          "bitten_r": "f-even-2-Bitten_R",
          "bitten": "f-even-2-Bitten"
        }
      },
      "3": {
        "Laudes": {
          "bitten_e": "f-even-3-Bitten_E",
          "bitten_r": "f-even-3-Bitten_R",
          "bitten": "f-even-3-Bitten"
        },
        "Vesper": {
          "bitten_e": "f-even-3-Bitten_E",
          "bitten_r": "f-even-3-Bitten_R",
          "bitten": "f-even-3-Bitten"
        }
      },
      "4": {
        "Laudes": {
          "bitten_e": "f-even-4-Bitten_E",
          "bitten_r": "f-even-4-Bitten_R",
          "bitten": "f-even-4-Bitten"
        },
        "Vesper": {
          "bitten_e": "f-even-4-Bitten_E",
          "bitten_r": "f-even-4-Bitten_R",
          "bitten": "f-even-4-Bitten"
        }
      },
      "5": {
        "Laudes": {
          "bitten_e": "f-even-5-Bitten_E",
          "bitten_r": "f-even-5-Bitten_R",
          "bitten": "f-even-5-Bitten"
        },
        "Vesper": {
          "bitten_e": "f-even-5-Bitten_E",
          "bitten_r": "f-even-5-Bitten_R",
          "bitten": "f-even-5-Bitten"
        }
      },
      "6": {
        "Laudes": {
          "bitten_e": "f-even-6-Bitten_E",
          "bitten_r": "f-even-6-Bitten_R",
          "bitten": "f-even-6-Bitten"
        },
        "Vesper": {
          "bitten_e": "f-even-6-Bitten_E",
          "bitten_r": "f-even-6-Bitten_R",
          "bitten": "f-even-6-Bitten"
        }
      }
    }
  },
  "j": {
    "1": {
      "6": {
        "Lesehore": {
          "ps_1": 131.0,
          "ps_2": 132.1,
          "ps_3": 132.2
        }
      }
    },
    "2": {
      "6": {
        "Lesehore": {
          "ps_1": 136.1,
          "ps_2": 136.3,
          "ps_3": 136.4
        }
      }
    },
    "4": {
      "5": {
        "Lesehore": {
          "ps_1": 55.3,
          "ps_2": 55.4,
          "ps_3": 55.5
        }
      },
      "6": {
        "Lesehore": {
          "ps_1": 50.1,
          "ps_2": 50.2,
          "ps_3": 50.3
        }
      }
    }
  },
  "o": {
    "each": {
      "0": {
        "Laudes": {
          "les_buch": "Apg",
          "les_stelle": "10,40-43",
          "resp1_2": "Halleluja, halleluja.",
          "resp1_3": "Du bist wahrhaft vom Tode erstanden.",
          "bitten_e": "o-each-0-Bitten_E",
          "bitten_r": "o-each-0-Bitten_R",
          "bitten": "o-each-0-Bitten"
        },
        "Non": {
          "les_buch": "Röm",
          "les_stelle": "6,4"
        },
        "Sext": {
          "les_buch": "Eph",
          "les_stelle": "2,4-6"
        },
        "Terz": {
          "les_buch": "1Kor",
          "les_stelle": "15,3b-5"
        },
        "Vesper": {
          "les_buch": "Hebr",
          "les_stelle": "10,12-14",
          "bitten_e": "o-each-0-Bitten_E",
          "bitten_r": "o-each-0-Bitten_R",
          "bitten": "o-each-0-Bitten"
        }
      },
      "1": {
        "Laudes": {
          "les_buch": "Röm",
          "les_stelle": "10,8b-10",
          "bitten_e": "o-each-1-Bitten_E",
          "bitten_r": "o-each-1-Bitten_R",
          "bitten": "o-each-1-Bitten"
        },
        "Non": {
          "les_buch": "2Tim",
          "les_stelle": "2,8.11"
        },
        "Sext": {
          "les_buch": "Kol",
          "les_stelle": "2,9.10a.12"
        },
        "Terz": {
          "les_buch": "Offb",
          "les_stelle": "1,17c-18"
        },
        "Vesper": {
          "les_buch": "Hebr",
          "les_stelle": "8,1b-3a",
          "bitten_e": "o-each-1-Bitten_E",
          "bitten_r": "o-each-1-Bitten_R",
          "bitten": "o-each-1-Bitten"
        }
      },
      "2": {
        "Laudes": {
          "les_buch": "Apg",
          "les_stelle": "13,30-33",
          "bitten_e": "o-each-2-Bitten_E",
          "bitten_r": "o-each-2-Bitten_R",
          "bitten": "o-each-2-Bitten"
        },
        "Non": {
          "les_buch": "Kol",
          "les_stelle": "3,1-2"
        },
        "Sext": {
          "les_buch": "1Petr",
          "les_stelle": "3,21-22a"
        },
        "Terz": {
          "les_buch": "vgl.Apg",
          "les_stelle": "4,11-12"
        },
        "Vesper": {
          "les_buch": "1Petr",
          "les_stelle": "2,4-5",
          "bitten_e": "o-each-2-Bitten_E",
          "bitten_r": "o-each-2-Bitten_R",
          "bitten": "o-each-2-Bitten"
        }
      },
      "3": {
        "Laudes": {
          "les_buch": "Röm",
          "les_stelle": "6,8-11",
          "bitten_e": "o-each-3-Bitten_E",
          "bitten_r": "o-each-3-Bitten_R",
          "bitten": "o-each-3-Bitten"
        },
        "Non": {
          "les_buch": "Eph",
          "les_stelle": "4,23-24"
        },
        "Sext": {
          "les_buch": "1Joh",
          "les_stelle": "5,5-6a"
        },
        "Terz": {
          "les_buch": "Röm",
          "les_stelle": "4,24-25"
        },
        "Vesper": {
          "les_buch": "Hebr",
          "les_stelle": "7,24-27",
          "bitten_e": "o-each-3-Bitten_E",
          "bitten_r": "o-each-3-Bitten_R",
          "bitten": "o-each-3-Bitten"
        }
      },
      "4": {
        "Laudes": {
          "les_buch": "Röm",
          "les_stelle": "8,10-11",
          "bitten_e": "o-each-4-Bitten_E",
          "bitten_r": "o-each-4-Bitten_R",
          "bitten": "o-each-4-Bitten"
        },
        "Non": {
          "les_buch": "vgl.Kol",
          "les_stelle": "1,12-14"
        },
        "Sext": {
          "les_buch": "Tit",
          "les_stelle": "3,5b-7"
        },
        "Terz": {
          "les_buch": "1Kor",
          "les_stelle": "12,13"
        },
        "Vesper": {
          "les_buch": "1Petr",
          "les_stelle": "3,18.22",
          "bitten_e": "o-each-4-Bitten_E",
          "bitten_r": "o-each-4-Bitten_R",
          "bitten": "o-each-4-Bitten"
        }
      },
      "5": {
        "Laudes": {
          "les_buch": "Apg",
          "les_stelle": "5,30-32",
          "bitten_e": "o-each-5-Bitten_E",
          "bitten_r": "o-each-5-Bitten_R",
          "bitten": "o-each-5-Bitten"
        },
        "Non": {
          "les_buch": "1Kor",
          "les_stelle": "5,7-8"
        },
        "Sext": {
          "les_buch": "Gal",
          "les_stelle": "3,27-28"
        },
        "Terz": {
          "les_buch": "Apg",
          "les_stelle": "2,32.36"
        },
        "Vesper": {
          "les_buch": "Hebr",
          "les_stelle": "5,8-10",
          "bitten_e": "o-each-5-Bitten_E",
          "bitten_r": "o-each-5-Bitten_R",
          "bitten": "o-each-5-Bitten"
        }
      },
      "6": {
        "Laudes": {
          "les_buch": "Röm",
          "les_stelle": "14,7-9",
          "bitten_e": "o-each-6-Bitten_E",
          "bitten_r": "o-each-6-Bitten_R",
          "bitten": "o-each-6-Bitten"
        },
        "Non": {
          "les_buch": "2Kor",
          "les_stelle": "5,14-15"
        },
        "Sext": {
          "les_buch": "1Kor",
          "les_stelle": "15,20-22"
        },
        "Terz": {
          "les_buch": "Röm",
          "les_stelle": "5,10-11"
        },
        "Vesper": {
          "les_buch": "1Petr",
          "les_stelle": "2,9-10",
          "bitten_e": "o-each-6-Bitten_E",
          "bitten_r": "o-each-6-Bitten_R",
          "bitten": "o-each-6-Bitten"
        }
      },
      "each": {
        "Invitatorium": {
          "ant_0": "Christus ist erstanden; kommt, wir beten ihn an! Halleluja."
        },
        "Laudes": {
          "hymn_1": 4201.0,
          "hymn_2": 4202.0,
          "hymn_nacht": 0,
          "hymn_kl": 0,
          "resp1_2": "Halleluja, halleluja.",
          "resp1_3": "Der für uns am Kreuz gehangen."
        },
        "Lesehore": {
          "hymn_1": 4401.0,
          "hymn_2": 4402.0,
          "hymn_3": 4403.0,
          "hymn_nacht": 0,
          "hymn_kl": 0
        },
        "Non": {
          "ant_0": "Halleluja, halleluja, halleluja.",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "resp1_0": "Herr, bleibe bei uns. Halleluja.",
          "resp1_1": "Denn es will Abend werden. Halleluja."
        },
        "Sext": {
          "ant_0": "Halleluja, halleluja, halleluja.",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "resp1_0": "Der Herr ist den Jüngern erschienen. Halleluja.",
          "resp1_1": "Sie sahen ihn und freuten sich."
        },
        "Terz": {
          "ant_0": "Halleluja, halleluja, halleluja.",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "resp1_0": "Der Herr ist wahrhaft auferstanden. Halleluja.",
          "resp1_1": "Er ist dem Simon erschienen. Halleluja."
        },
        "Vesper": {
          "hymn_1": 4301.0,
          "hymn_2": 4302.0,
          "hymn_nacht": 0,
          "hymn_kl": 0,
          "resp1_1": "Der Herr ist den Jüngern erschienen.",
          "resp1_2": "Halleluja, halleluja.",
          "resp1_3": "Sie sahen ihn und freuten sich."
        }
      }
    },
    "last": {
      "0": {
        "Laudes": {},
        "Terz": {
          "les_buch": "1Kor",
          "les_stelle": "15,3b-5"
        },
        "Vesper": {}
      },
      "1": {
        "Laudes": {},
        "Terz": {
          "les_buch": "Offb",
          "les_stelle": "1,17c-18"
        },
        "Vesper": {
          "les_buch": "Röm",
          "les_stelle": "8,14-17"
        }
      },
      "2": {
        "Laudes": {},
        "Terz": {
          "les_buch": "vgl.Apg",
          "les_stelle": "4,11-12"
        },
        "Vesper": {
          "les_buch": "Röm",
          "les_stelle": "8,26-27"
        }
      },
      "3": {
        "Laudes": {},
        "Terz": {
          "les_buch": "Röm",
          "les_stelle": "4,24-25"
        },
        "Vesper": {
          "les_buch": "1Kor",
          "les_stelle": "2,9-10"
        }
      },
      "4": {
        "Laudes": {},
        "Terz": {
          "les_buch": "1Kor",
          "les_stelle": "12,13"
        },
        "Vesper": {
          "les_buch": "1Kor",
          "les_stelle": "6,19-20"
        }
      },
      "5": {
        "Laudes": {},
        "Terz": {
          "les_buch": "Apg",
          "les_stelle": "2,32.36"
        },
        "Vesper": {
          "les_buch": "Gal",
          "les_stelle": "5,16.22-23a.25"
        }
      },
      "6": {
        "Laudes": {},
        "Terz": {
          "les_buch": "Röm",
          "les_stelle": "5,10-11"
        },
        "Vesper": {
          "les_buch": "Röm",
          "les_stelle": "8,11"
        }
      },
      "each": {
        "Invitatorium": {
          "ant_0": "Christus, den Herrn, der uns den Heiligen Geist verheißen hat – kommt, wir beten ihn an! Halleluja."
        },
        "Laudes": {
          "hymn_1": 4204.0,
          "hymn_nacht": 0,
          "hymn_kl": 0
        },
        "Lesehore": {
          "hymn_1": 4404.0,
          "hymn_nacht": 0,
          "hymn_kl": 0
        },
        "Vesper": {
          "hymn_1": 4304.0,
          "hymn_nacht": 0,
          "hymn_kl": 0,
          "resp1_1": "Der Beistand, den der Vater senden wird, er wird euch alles lehren.",
          "resp1_2": "Halleluja, halleluja.",
          "resp1_3": "An alles, was ich euch sagte, wird er euch erinnern."
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
    }
  },
  "p": {
    "1": {
      "0": {
        "Laudes": {
          "hymn_1": 210.0,
          "ps_1": 63.0,
          "ps_2": 160.0,
          "ps_3": 149.0,
          "ant_1": "Mein Gott, in der Frühe halte ich Ausschau nach dir, deine Macht zu sehen und deine Herrlichkeit. Halleluja.",
          "ant_2": "Mitten im Feuer sangen die drei und riefen wie aus einem Mund: Gepriesen sei Gott. Halleluja.",
          "ant_3": "Die Kinder Zions sollen jauchzen über ihren König. Halleluja.",
          "les_buch": "Offb",
          "les_stelle": "7,10.12",
          "resp1_1": "Christus, du Sohn des lebendigen Gottes,",
          "resp1_2": "erbarme dich unser.",
          "resp1_3": "Du sitzest zur Rechten des Vaters.",
          "ant_ev": "<Prop>",
          "bitten_e": "Gepriesen sei Christus, der Herr, der jeden Menschen erleuchtet. Zu ihm lasst uns beten:",
          "bitten_r": "Du bist unser Leben und unser Heil.",
          "bitten": "Herr, du schenkst uns den Morgen dieses Tages;^qlass uns dankbar deine Auferstehung feiern.^pDein Geist geleite uns durch diesen Tag,^qdamit wir vollbringen, was dir gefällt.^pLass uns heute mit Freude am Gottesdienst deiner Gemeinde teilnehmen;^qnähre uns mit deinem Wort und deinem Sakrament.^pErleuchte unser Herz,^qdamit wir deine Wohltaten erkennen.",
          "oration": "<Propr>"
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
          "les_buch": "p-1-0-Terz-Les_Buch",
          "les_stelle": "p-1-0-Terz-Les_Stelle",
          "resp1_0": "Erhöre mich, Herr, ich rufe zu dir.",
          "resp1_1": "Deine Gesetze will ich befolgen.",
          "oration": "p-1-0-Terz-Oration"
        },
        "Sext": {
          "les_buch": "p-1-0-Terz-Les_Buch",
          "les_stelle": "p-1-0-Terz-Les_Stelle",
          "resp1_0": "Herr, dein Wort bleibt auf ewig.",
          "resp1_1": "Deine Treue währt von Geschlecht zu Geschlecht.",
          "oration": "p-1-0-Terz-Oration"
        },
        "Terz": {
          "ps_1": 118.1,
          "ps_2": 118.2,
          "ps_3": 118.3,
          "ant_1": "p-1-0-Terz-ant_1",
          "ant_2": "p-1-0-Terz-ant_2",
          "ant_3": "p-1-0-Terz-ant_3",
          "les_buch": "p-1-0-Terz-Les_Buch",
          "les_stelle": "p-1-0-Terz-Les_Stelle",
          "resp1_0": "Zu deinen Vorschriften neige mein Herz.",
          "resp1_1": "Belebe mich durch dein Wort.",
          "oration": "p-1-0-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 310.0,
          "ps_1": 110.0,
          "ps_2": 114.0,
          "ps_3": 151.0,
          "ant_1": "p-1-0-Vp-ant_1",
          "ant_2": "p-1-0-Vp-ant_2",
          "ant_3": "p-1-0-Vp-ant_3",
          "les_buch": "p-1-0-Vp-Les_Buch",
          "les_stelle": "p-1-0-Vp-Les_Stelle",
          "resp1_1": "Gepriesen bist du, Herr, am Gewölbe des Himmels.",
          "resp1_2": "Gerühmt und verherrlicht in Ewigkeit.",
          "resp1_3": "Gepriesen ist dein herrlicher Name.",
          "ant_ev": "p-1-0-Vp-Ant_Ev",
          "bitten_e": "p-1-0-Vp-Bitten_E",
          "bitten_r": "p-1-0-Vp-Bitten_R",
          "bitten": "p-1-0-Vp-Bitten",
          "oration": "p-1-0-Vp-Oration"
        }
      },
      "1": {
        "Laudes": {
          "hymn_1": 211.0,
          "ps_1": 5.0,
          "ps_2": 161.0,
          "ps_3": 29.0,
          "ant_1": "p-1-1-Ld-ant_1",
          "ant_2": "p-1-1-Ld-ant_2",
          "ant_3": "p-1-1-Ld-ant_3",
          "les_buch": "p-1-1-Ld-Les_Buch",
          "les_stelle": "p-1-1-Ld-Les_Stelle",
          "resp1_1": "Gepriesen sei der Herr",
          "resp1_2": "von Ewigkeit zu Ewigkeit.",
          "resp1_3": "Er allein tut große Wunder",
          "ant_ev": "p-1-1-Ld-Ant_Ev",
          "bitten_e": "p-1-1-Ld-Bitten_E",
          "bitten_r": "p-1-1-Ld-Bitten_R",
          "bitten": "p-1-1-Ld-Bitten",
          "oration": "p-1-1-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 401.0,
          "hymn_nacht": 405.0,
          "ps_1": 6.0,
          "ps_2": 9.1,
          "ps_3": 9.2,
          "ant_1": "p-1-1-Lh-ant_1",
          "ant_2": "p-1-1-Lh-ant_2",
          "ant_3": "p-1-1-Lh-ant_3",
          "resp0_0": "p-1-1-Lh-Resp0_0",
          "resp0_1": "p-1-1-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-1-1-Terz-Les_Buch",
          "les_stelle": "p-1-1-Terz-Les_Stelle",
          "resp1_0": "p-1-1-Terz-Resp1_0",
          "oration": "p-1-1-Terz-Oration"
        },
        "Sext": {
          "les_buch": "p-1-1-Terz-Les_Buch",
          "les_stelle": "p-1-1-Terz-Les_Stelle",
          "resp1_0": "p-1-1-Terz-Resp1_0",
          "resp1_1": "p-1-1-Terz-Resp1_1",
          "oration": "p-1-1-Terz-Oration"
        },
        "Terz": {
          "ps_1": 19.2,
          "ps_2": 7.1,
          "ps_3": 7.2,
          "ant_1": "p-1-1-Terz-ant_1",
          "ant_2": "p-1-1-Terz-ant_2",
          "ant_3": "p-1-1-Terz-ant_3",
          "les_buch": "Röm",
          "les_stelle": "13,8.10",
          "resp1_0": "Verstoß mich nicht, o Herr, sei du mein Helfer.",
          "resp1_1": "Verlass mich nicht, du Gott meines Heiles.",
          "oration": "Gütiger Gott und Vater, du hast die Menschen zu gemeinsamer Arbeit berufen, damit sie einander ergänzen und jeder die Fähigkeit entfaltet, die du ihm gegeben hast, zum Wohle aller. Gib, dass wir unser Werk als deine Kinder verrichten, beseelt von deinem Geist und von der Liebe zu allen Menschen. Darum bitten wir durch Christus, unseren Herrn."
        },
        "Vesper": {
          "hymn_1": 311.0,
          "ps_1": 11.0,
          "ps_2": 15.0,
          "ps_3": 152.0,
          "ant_1": "p-1-1-Vp-ant_1",
          "ant_2": "p-1-1-Vp-ant_2",
          "ant_3": "p-1-1-Vp-ant_3",
          "les_buch": "p-1-1-Vp-Les_Buch",
          "les_stelle": "p-1-1-Vp-Les_Stelle",
          "resp1_1": "p-1-1-Vp-Resp1_1",
          "resp1_2": "p-1-1-Vp-Resp1_2",
          "resp1_3": "p-1-1-Vp-Resp1_3",
          "ant_ev": "p-1-1-Vp-Ant_Ev",
          "bitten_e": "p-1-1-Vp-Bitten_E",
          "bitten_r": "p-1-1-Vp-Bitten_R",
          "bitten": "p-1-1-Vp-Bitten",
          "oration": "p-1-1-Vp-Oration"
        }
      },
      "2": {
        "Laudes": {
          "hymn_1": 212.0,
          "ps_1": 24.0,
          "ps_2": 162.0,
          "ps_3": 33.0,
          "ant_1": "p-1-2-Ld-ant_1",
          "ant_2": "p-1-2-Ld-ant_2",
          "ant_3": "p-1-2-Ld-ant_3",
          "les_buch": "p-1-2-Ld-Les_Buch",
          "les_stelle": "p-1-2-Ld-Les_Stelle",
          "resp1_1": "p-1-2-Ld-Resp1_1",
          "resp1_2": "p-1-2-Ld-Resp1_2",
          "resp1_3": "p-1-2-Ld-Resp1_3",
          "ant_ev": "p-1-2-Ld-Ant_Ev",
          "bitten_e": "p-1-2-Ld-Bitten_E",
          "bitten_r": "p-1-2-Ld-Bitten_R",
          "bitten": "p-1-2-Ld-Bitten",
          "oration": "p-1-2-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 402.0,
          "hymn_nacht": 2402.0,
          "ps_1": 10.1,
          "ps_2": 10.2,
          "ps_3": 12.0,
          "ant_1": "p-1-2-Lh-ant_1",
          "ant_2": "p-1-2-Lh-ant_2",
          "ant_3": "p-1-2-Lh-ant_3",
          "resp0_0": "p-1-2-Lh-Resp0_0",
          "resp0_1": "p-1-2-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-1-2-Terz-Les_Buch",
          "les_stelle": "p-1-2-Terz-Les_Stelle",
          "resp1_0": "p-1-2-Terz-Resp1_0",
          "resp1_1": "p-1-2-Terz-Resp1_1",
          "oration": "p-1-2-Terz-Oration"
        },
        "Sext": {
          "les_buch": "p-1-2-Terz-Les_Buch",
          "les_stelle": "p-1-2-Terz-Les_Stelle",
          "resp1_0": "p-1-2-Terz-Resp1_0",
          "resp1_1": "p-1-2-Terz-Resp1_1",
          "oration": "p-1-2-Terz-Oration"
        },
        "Terz": {
          "ps_1": 119.001,
          "ps_2": 13.0,
          "ps_3": 14.0,
          "ant_1": "p-1-2-Terz-ant_1",
          "ant_2": "p-1-2-Terz-ant_2",
          "ant_3": "p-1-2-Terz-ant_3",
          "les_buch": "p-1-2-Terz-Les_Buch",
          "les_stelle": "p-1-2-Terz-Les_Stelle",
          "resp1_0": "p-1-2-Terz-Resp1_0",
          "resp1_1": "p-1-2-Terz-Resp1_1",
          "oration": "p-1-2-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 312.0,
          "ps_1": 20.0,
          "ps_2": 21.0,
          "ps_3": 153.0,
          "ant_1": "p-1-2-Vp-ant_1",
          "ant_2": "p-1-2-Vp-ant_2",
          "ant_3": "p-1-2-Vp-ant_3",
          "les_buch": "p-1-2-Vp-Les_Buch",
          "les_stelle": "p-1-2-Vp-Les_Stelle",
          "resp1_1": "p-1-2-Vp-Resp1_1",
          "resp1_2": "p-1-2-Vp-Resp1_2",
          "resp1_3": "p-1-2-Vp-Resp1_3",
          "ant_ev": "p-1-2-Vp-Ant_Ev",
          "bitten_e": "p-1-2-Vp-Bitten_E",
          "bitten_r": "p-1-2-Vp-Bitten_R",
          "bitten": "p-1-2-Vp-Bitten",
          "oration": "p-1-2-Vp-Oration"
        }
      },
      "3": {
        "Laudes": {
          "hymn_1": 213.0,
          "ps_1": 36.0,
          "ps_2": 163.0,
          "ps_3": 47.0,
          "ant_1": "p-1-3-Ld-ant_1",
          "ant_2": "p-1-3-Ld-ant_2",
          "ant_3": "p-1-3-Ld-ant_3",
          "les_buch": "p-1-3-Ld-Les_Buch",
          "les_stelle": "p-1-3-Ld-Les_Stelle",
          "resp1_1": "p-1-3-Ld-Resp1_1",
          "resp1_2": "p-1-3-Ld-Resp1_2",
          "resp1_3": "p-1-3-Ld-Resp1_3",
          "ant_ev": "p-1-3-Ld-Ant_Ev",
          "bitten_e": "p-1-3-Ld-Bitten_E",
          "bitten_r": "p-1-3-Ld-Bitten_R",
          "bitten": "p-1-3-Ld-Bitten",
          "oration": "p-1-3-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 403.0,
          "hymn_nacht": 1402.0,
          "ps_1": 18.1,
          "ps_2": 18.2,
          "ps_3": 18.3,
          "ant_1": "p-1-3-Lh-ant_1",
          "ant_2": "p-1-3-Lh-ant_2",
          "ant_3": "p-1-3-Lh-ant_3",
          "resp0_0": "p-1-3-Lh-Resp0_0",
          "resp0_1": "p-1-3-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-1-3-Terz-Les_Buch",
          "les_stelle": "p-1-3-Terz-Les_Stelle",
          "resp1_0": "p-1-3-Terz-Resp1_0",
          "resp1_1": "p-1-3-Terz-Resp1_1",
          "oration": "p-1-3-Terz-Oration"
        },
        "Sext": {
          "les_buch": "p-1-3-Terz-Les_Buch",
          "les_stelle": "p-1-3-Terz-Les_Stelle",
          "resp1_0": "p-1-3-Terz-Resp1_0",
          "resp1_1": "p-1-3-Terz-Resp1_1",
          "oration": "p-1-3-Terz-Oration"
        },
        "Terz": {
          "ps_1": 119.009,
          "ps_2": 17.1,
          "ps_3": 17.2,
          "ant_1": "p-1-3-Terz-ant_1",
          "ant_2": "p-1-3-Terz-ant_2",
          "ant_3": "p-1-3-Terz-ant_3",
          "les_buch": "p-1-3-Terz-Les_Buch",
          "les_stelle": "p-1-3-Terz-Les_Stelle",
          "resp1_0": "p-1-3-Terz-Resp1_0",
          "resp1_1": "p-1-3-Terz-Resp1_1",
          "oration": "p-1-3-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 313.0,
          "ps_1": 27.1,
          "ps_2": 27.2,
          "ps_3": 154.0,
          "ant_1": "p-1-3-Vp-ant_1",
          "ant_2": "p-1-3-Vp-ant_2",
          "ant_3": "p-1-3-Vp-ant_3",
          "les_buch": "p-1-3-Vp-Les_Buch",
          "les_stelle": "p-1-3-Vp-Les_Stelle",
          "resp1_1": "p-1-3-Vp-Resp1_1",
          "resp1_2": "p-1-3-Vp-Resp1_2",
          "resp1_3": "p-1-3-Vp-Resp1_3",
          "ant_ev": "p-1-3-Vp-Ant_Ev",
          "bitten_e": "p-1-3-Vp-Bitten_E",
          "bitten_r": "p-1-3-Vp-Bitten_R",
          "bitten": "p-1-3-Vp-Bitten",
          "oration": "p-1-3-Vp-Oration"
        }
      },
      "4": {
        "Laudes": {
          "hymn_1": 214.0,
          "ps_1": 57.0,
          "ps_2": 164.0,
          "ps_3": 48.0,
          "ant_1": "p-1-4-Ld-ant_1",
          "ant_2": "p-1-4-Ld-ant_2",
          "ant_3": "p-1-4-Ld-ant_3",
          "les_buch": "p-1-4-Ld-Les_Buch",
          "les_stelle": "p-1-4-Ld-Les_Stelle",
          "resp1_1": "p-1-4-Ld-Resp1_1",
          "resp1_2": "p-1-4-Ld-Resp1_2",
          "resp1_3": "p-1-4-Ld-Resp1_3",
          "ant_ev": "p-1-4-Ld-Ant_Ev",
          "bitten_e": "p-1-4-Ld-Bitten_E",
          "bitten_r": "p-1-4-Ld-Bitten_R",
          "bitten": "p-1-4-Ld-Bitten",
          "oration": "p-1-4-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 401.0,
          "hymn_nacht": 405.0,
          "ps_1": 18.4,
          "ps_2": 18.5,
          "ps_3": 18.6,
          "ant_1": "p-1-4-Lh-ant_1",
          "ant_2": "p-1-4-Lh-ant_2",
          "ant_3": "p-1-4-Lh-ant_3",
          "resp0_0": "p-1-4-Lh-Resp0_0",
          "resp0_1": "p-1-4-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-1-4-Non-Les_Buch",
          "les_stelle": "p-1-4-Non-Les_Stelle",
          "resp1_0": "p-1-4-Non-Resp1_0",
          "resp1_1": "p-1-4-Non-Resp1_1",
          "oration": "p-1-4-Non-Oration"
        },
        "Sext": {
          "les_buch": "p-1-4-Sext-Les_Buch",
          "les_stelle": "p-1-4-Sext-Les_Stelle",
          "resp1_0": "p-1-4-Sext-Resp1_0",
          "resp1_1": "p-1-4-Sext-Resp1_1",
          "oration": "p-1-4-Sext-Oration"
        },
        "Terz": {
          "ps_1": 119.017,
          "ps_2": 25.1,
          "ps_3": 25.2,
          "ant_1": "p-1-4-Terz-ant_1",
          "ant_2": "p-1-4-Terz-ant_2",
          "ant_3": "p-1-4-Terz-ant_3",
          "les_buch": "p-1-4-Terz-Les_Buch",
          "les_stelle": "p-1-4-Terz-Les_Stelle",
          "resp1_0": "p-1-4-Terz-Resp1_0",
          "resp1_1": "p-1-4-Terz-Resp1_1",
          "oration": "p-1-4-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 314.0,
          "ps_1": 30.0,
          "ps_2": 32.0,
          "ps_3": 155.0,
          "ant_1": "p-1-4-Vp-ant_1",
          "ant_2": "p-1-4-Vp-ant_2",
          "ant_3": "p-1-4-Vp-ant_3",
          "les_buch": "p-1-4-Vp-Les_Buch",
          "les_stelle": "p-1-4-Vp-Les_Stelle",
          "resp1_1": "p-1-4-Vp-Resp1_1",
          "resp1_2": "p-1-4-Vp-Resp1_2",
          "resp1_3": "p-1-4-Vp-Resp1_3",
          "ant_ev": "p-1-4-Vp-Ant_Ev",
          "bitten_e": "p-1-4-Vp-Bitten_E",
          "bitten_r": "p-1-4-Vp-Bitten_R",
          "bitten": "p-1-4-Vp-Bitten",
          "oration": "p-1-4-Vp-Oration"
        }
      },
      "5": {
        "Laudes": {
          "hymn_1": 215.0,
          "ps_1": 51.0,
          "ps_2": 165.0,
          "ps_3": 100.0,
          "ant_1": "p-1-5-Ld-ant_1",
          "ant_2": "p-1-5-Ld-ant_2",
          "ant_3": "p-1-5-Ld-ant_3",
          "les_buch": "p-1-5-Ld-Les_Buch",
          "les_stelle": "p-1-5-Ld-Les_Stelle",
          "resp1_1": "p-1-5-Ld-Resp1_1",
          "resp1_2": "p-1-5-Ld-Resp1_2",
          "resp1_3": "p-1-5-Ld-Resp1_3",
          "ant_ev": "p-1-5-Ld-Ant_Ev",
          "bitten_e": "p-1-5-Ld-Bitten_E",
          "bitten_r": "p-1-5-Ld-Bitten_R",
          "bitten": "p-1-5-Ld-Bitten",
          "oration": "p-1-5-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 402.0,
          "hymn_nacht": 2402.0,
          "ps_1": 35.1,
          "ps_2": 35.2,
          "ps_3": 35.3,
          "ant_1": "p-1-5-Lh-ant_1",
          "ant_2": "p-1-5-Lh-ant_2",
          "ant_3": "p-1-5-Lh-ant_3",
          "resp0_0": "p-1-5-Lh-Resp0_0",
          "resp0_1": "p-1-5-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-1-5-Non-Les_Buch",
          "les_stelle": "p-1-5-Non-Les_Stelle",
          "resp1_0": "p-1-5-Non-Resp1_0",
          "resp1_1": "p-1-5-Non-Resp1_1",
          "oration": "p-1-5-Non-Oration"
        },
        "Sext": {
          "les_buch": "p-1-5-Sext-Les_Buch",
          "les_stelle": "p-1-5-Sext-Les_Stelle",
          "resp1_0": "p-1-5-Sext-Resp1_0",
          "resp1_1": "p-1-5-Sext-Resp1_1",
          "oration": "p-1-5-Sext-Oration"
        },
        "Terz": {
          "ps_1": 119.025,
          "ps_2": 26.0,
          "ps_3": 28.0,
          "ant_1": "p-1-5-Terz-ant_1",
          "ant_2": "p-1-5-Terz-ant_2",
          "ant_3": "p-1-5-Terz-ant_3",
          "les_buch": "p-1-5-Terz-Les_Buch",
          "les_stelle": "p-1-5-Terz-Les_Stelle",
          "resp1_0": "p-1-5-Terz-Resp1_0",
          "resp1_1": "p-1-5-Terz-Resp1_1",
          "oration": "p-1-5-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 315.0,
          "ps_1": 41.0,
          "ps_2": 46.0,
          "ps_3": 156.0,
          "ant_1": "p-1-5-Vp-ant_1",
          "ant_2": "p-1-5-Vp-ant_2",
          "ant_3": "p-1-5-Vp-ant_3",
          "les_buch": "p-1-5-Vp-Les_Buch",
          "les_stelle": "p-1-5-Vp-Les_Stelle",
          "resp1_1": "p-1-5-Vp-Resp1_1",
          "resp1_2": "p-1-5-Vp-Resp1_2",
          "resp1_3": "p-1-5-Vp-Resp1_3",
          "ant_ev": "p-1-5-Vp-Ant_Ev",
          "bitten_e": "p-1-5-Vp-Bitten_E",
          "bitten_r": "p-1-5-Vp-Bitten_R",
          "bitten": "p-1-5-Vp-Bitten",
          "oration": "p-1-5-Vp-Oration"
        }
      },
      "6": {
        "Laudes": {
          "hymn_1": 216.0,
          "ps_1": 119.145,
          "ps_2": 166.0,
          "ps_3": 117.0,
          "ant_1": "p-1-6-Ld-ant_1",
          "ant_2": "p-1-6-Ld-ant_2",
          "ant_3": "p-1-6-Ld-ant_3",
          "les_buch": "p-1-6-Ld-Les_Buch",
          "les_stelle": "p-1-6-Ld-Les_Stelle",
          "resp1_1": "p-1-6-Ld-Resp1_1",
          "resp1_2": "p-1-6-Ld-Resp1_2",
          "resp1_3": "p-1-6-Ld-Resp1_3",
          "ant_ev": "p-1-6-Ld-Ant_Ev",
          "bitten_e": "p-1-6-Ld-Bitten_E",
          "bitten_r": "p-1-6-Ld-Bitten_R",
          "bitten": "p-1-6-Ld-Bitten",
          "oration": "p-1-6-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 403.0,
          "hymn_nacht": 1402.0,
          "ps_1": 105.1,
          "ps_2": 105.2,
          "ps_3": 105.3,
          "ant_1": "p-1-6-Lh-ant_1",
          "ant_2": "p-1-6-Lh-ant_2",
          "ant_3": "p-1-6-Lh-ant_3",
          "resp0_0": "p-1-6-Lh-Resp0_0",
          "resp0_1": "p-1-6-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-1-6-Non-Les_Buch",
          "les_stelle": "p-1-6-Non-Les_Stelle",
          "resp1_0": "p-1-6-Non-Resp1_0",
          "resp1_1": "p-1-6-Non-Resp1_1",
          "oration": "p-1-6-Non-Oration"
        },
        "Sext": {
          "les_buch": "p-1-6-Sext-Les_Buch",
          "les_stelle": "p-1-6-Sext-Les_Stelle",
          "resp1_0": "p-1-6-Sext-Resp1_0",
          "resp1_1": "p-1-6-Sext-Resp1_1",
          "oration": "p-1-6-Sext-Oration"
        },
        "Terz": {
          "ps_1": 119.033,
          "ps_2": 34.1,
          "ps_3": 34.2,
          "ant_1": "p-1-6-Terz-ant_1",
          "ant_2": "p-1-6-Terz-ant_2",
          "ant_3": "p-1-6-Terz-ant_3",
          "les_buch": "p-1-6-Terz-Les_Buch",
          "les_stelle": "p-1-6-Terz-Les_Stelle",
          "resp1_0": "p-1-6-Terz-Resp1_0",
          "resp1_1": "p-1-6-Terz-Resp1_1",
          "oration": "p-1-6-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 316.0,
          "ps_1": 119.105,
          "ps_2": 16.0,
          "ps_3": 157.0,
          "ant_1": "p-1-6-Vp-ant_1",
          "ant_2": "p-1-6-Vp-ant_2",
          "ant_3": "p-1-6-Vp-ant_3",
          "les_buch": "p-1-6-Vp-Les_Buch",
          "les_stelle": "p-1-6-Vp-Les_Stelle",
          "resp1_1": "p-1-6-Vp-Resp1_1",
          "resp1_2": "p-1-6-Vp-Resp1_2",
          "resp1_3": "p-1-6-Vp-Resp1_3",
          "ant_ev": "p-1-6-Vp-Ant_Ev",
          "bitten_e": "p-1-6-Vp-Bitten_E",
          "bitten_r": "p-1-6-Vp-Bitten_R",
          "bitten": "p-1-6-Vp-Bitten",
          "oration": "p-1-6-Vp-Oration"
        }
      }
    },
    "2": {
      "0": {
        "Laudes": {
          "hymn_1": 210.0,
          "hymn_kl": 220.0,
          "ps_1": 118.0,
          "ps_2": 170.0,
          "ps_3": 150.0,
          "ant_1": "p-2-0-Ld-ant_1",
          "ant_2": "p-2-0-Ld-ant_2",
          "ant_3": "p-2-0-Ld-ant_3",
          "les_buch": "p-2-0-Ld-Les_Buch",
          "les_stelle": "p-2-0-Ld-Les_Stelle",
          "resp1_1": "p-2-0-Ld-Resp1_1",
          "resp1_2": "p-2-0-Ld-Resp1_2",
          "resp1_3": "p-2-0-Ld-Resp1_3",
          "ant_ev": "p-2-0-Ld-Ant_Ev",
          "bitten_e": "p-2-0-Ld-Bitten_E",
          "bitten_r": "p-2-0-Ld-Bitten_R",
          "bitten": "p-2-0-Ld-Bitten",
          "oration": "p-2-0-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 4401.0,
          "ps_1": 104.1,
          "ps_2": 104.2,
          "ps_3": 104.3,
          "ant_1": "p-2-0-Lh-ant_1",
          "ant_2": "p-2-0-Lh-ant_2",
          "ant_3": "p-2-0-Lh-ant_3",
          "resp0_0": "p-2-0-Lh-Resp0_0",
          "resp0_1": "p-2-0-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-2-0-Non-Les_Buch",
          "les_stelle": "p-2-0-Non-Les_Stelle",
          "resp1_0": "p-2-0-Non-Resp1_0",
          "resp1_1": "p-2-0-Non-Resp1_1",
          "oration": "p-2-0-Non-Oration"
        },
        "Sext": {
          "les_buch": "p-2-0-Sext-Les_Buch",
          "les_stelle": "p-2-0-Sext-Les_Stelle",
          "resp1_0": "p-2-0-Sext-Resp1_0",
          "resp1_1": "p-2-0-Sext-Resp1_1",
          "oration": "p-2-0-Sext-Oration"
        },
        "Terz": {
          "ps_1": 23.0,
          "ps_2": 76.1,
          "ps_3": 76.2,
          "ant_1": "p-2-0-Terz-ant_1",
          "ant_2": "p-2-0-Terz-ant_2",
          "ant_3": "p-2-0-Terz-ant_3",
          "les_buch": "p-2-0-Terz-Les_Buch",
          "les_stelle": "p-2-0-Terz-Les_Stelle",
          "resp1_0": "p-2-0-Terz-Resp1_0",
          "resp1_1": "p-2-0-Terz-Resp1_1",
          "oration": "p-2-0-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 320.0,
          "ps_1": 110.0,
          "ps_2": 115.0,
          "ps_3": 151.0,
          "ant_1": "p-2-0-Vp-ant_1",
          "ant_2": "p-2-0-Vp-ant_2",
          "ant_3": "p-2-0-Vp-ant_3",
          "les_buch": "p-2-0-Vp-Les_Buch",
          "les_stelle": "p-2-0-Vp-Les_Stelle",
          "resp1_1": "p-2-0-Vp-Resp1_1",
          "resp1_2": "p-2-0-Vp-Resp1_2",
          "resp1_3": "p-2-0-Vp-Resp1_3",
          "ant_ev": "p-2-0-Vp-Ant_Ev",
          "bitten_e": "p-2-0-Vp-Bitten_E",
          "bitten_r": "p-2-0-Vp-Bitten_R",
          "bitten": "p-2-0-Vp-Bitten",
          "oration": "p-2-0-Vp-Oration"
        }
      },
      "1": {
        "Laudes": {
          "hymn_1": 211.0,
          "hymn_kl": 221.0,
          "ps_1": 42.0,
          "ps_2": 171.0,
          "ps_3": 19.1,
          "ant_1": "p-2-1-Ld-ant_1",
          "ant_2": "p-2-1-Ld-ant_2",
          "ant_3": "p-2-1-Ld-ant_3",
          "les_buch": "p-2-1-Ld-Les_Buch",
          "les_stelle": "p-2-1-Ld-Les_Stelle",
          "resp1_1": "p-2-1-Ld-Resp1_1",
          "resp1_2": "p-2-1-Ld-Resp1_2",
          "resp1_3": "p-2-1-Ld-Resp1_3",
          "ant_ev": "p-2-1-Ld-Ant_Ev",
          "bitten_e": "p-2-1-Ld-Bitten_E",
          "bitten_r": "p-2-1-Ld-Bitten_R",
          "bitten": "p-2-1-Ld-Bitten",
          "oration": "p-2-1-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 401.0,
          "hymn_nacht": 405.0,
          "ps_1": 31.1,
          "ps_2": 31.2,
          "ps_3": 31.3,
          "ant_1": "p-2-1-Lh-ant_1",
          "ant_2": "p-2-1-Lh-ant_2",
          "ant_3": "p-2-1-Lh-ant_3",
          "resp0_0": "p-2-1-Lh-Resp0_0",
          "resp0_1": "p-2-1-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-2-1-Non-Les_Buch",
          "les_stelle": "p-2-1-Non-Les_Stelle",
          "resp1_0": "p-2-1-Non-Resp1_0",
          "resp1_1": "p-2-1-Non-Resp1_1",
          "oration": "p-2-1-Non-Oration"
        },
        "Sext": {
          "les_buch": "p-2-1-Sext-Les_Buch",
          "les_stelle": "p-2-1-Sext-Les_Stelle",
          "resp1_0": "p-2-1-Sext-Resp1_0",
          "resp1_1": "p-2-1-Sext-Resp1_1",
          "oration": "p-2-1-Sext-Oration"
        },
        "Terz": {
          "ps_1": 119.041,
          "ps_2": 40.1,
          "ps_3": 40.2,
          "ant_1": "p-2-1-Terz-ant_1",
          "ant_2": "p-2-1-Terz-ant_2",
          "ant_3": "p-2-1-Terz-ant_3",
          "les_buch": "p-2-1-Terz-Les_Buch",
          "les_stelle": "p-2-1-Terz-Les_Stelle",
          "resp1_0": "p-2-1-Terz-Resp1_0",
          "resp1_1": "p-2-1-Terz-Resp1_1",
          "oration": "p-2-1-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 321.0,
          "ps_1": 45.1,
          "ps_2": 45.2,
          "ps_3": 152.0,
          "ant_1": "p-2-1-Vp-ant_1",
          "ant_2": "p-2-1-Vp-ant_2",
          "ant_3": "p-2-1-Vp-ant_3",
          "les_buch": "p-2-1-Vp-Les_Buch",
          "les_stelle": "p-2-1-Vp-Les_Stelle",
          "resp1_1": "p-2-1-Vp-Resp1_1",
          "resp1_2": "p-2-1-Vp-Resp1_2",
          "resp1_3": "p-2-1-Vp-Resp1_3",
          "ant_ev": "p-2-1-Vp-Ant_Ev",
          "bitten_e": "p-2-1-Vp-Bitten_E",
          "bitten_r": "p-2-1-Vp-Bitten_R",
          "bitten": "p-2-1-Vp-Bitten",
          "oration": "p-2-1-Vp-Oration"
        }
      },
      "2": {
        "Laudes": {
          "hymn_1": 212.0,
          "hymn_kl": 401.0,
          "ps_1": 43.0,
          "ps_2": 172.0,
          "ps_3": 65.0,
          "ant_1": "p-2-2-Ld-ant_1",
          "ant_2": "p-2-2-Ld-ant_2",
          "ant_3": "p-2-2-Ld-ant_3",
          "les_buch": "p-2-2-Ld-Les_Buch",
          "les_stelle": "p-2-2-Ld-Les_Stelle",
          "resp1_1": "p-2-2-Ld-Resp1_1",
          "resp1_2": "p-2-2-Ld-Resp1_2",
          "resp1_3": "p-2-2-Ld-Resp1_3",
          "ant_ev": "p-2-2-Ld-Ant_Ev",
          "bitten_e": "p-2-2-Ld-Bitten_E",
          "bitten_r": "p-2-2-Ld-Bitten_R",
          "bitten": "p-2-2-Ld-Bitten",
          "oration": "p-2-2-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 402.0,
          "hymn_nacht": 2402.0,
          "ps_1": 37.1,
          "ps_2": 37.2,
          "ps_3": 37.3,
          "ant_1": "p-2-2-Lh-ant_1",
          "ant_2": "p-2-2-Lh-ant_2",
          "ant_3": "p-2-2-Lh-ant_3",
          "resp0_0": "p-2-2-Lh-Resp0_0",
          "resp0_1": "p-2-2-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-2-2-Non-Les_Buch",
          "les_stelle": "p-2-2-Non-Les_Stelle",
          "resp1_0": "p-2-2-Non-Resp1_0",
          "resp1_1": "p-2-2-Non-Resp1_1",
          "oration": "p-2-2-Non-Oration"
        },
        "Sext": {
          "les_buch": "p-2-2-Sext-Les_Buch",
          "les_stelle": "p-2-2-Sext-Les_Stelle",
          "resp1_0": "p-2-2-Sext-Resp1_0",
          "resp1_1": "p-2-2-Sext-Resp1_1",
          "oration": "p-2-2-Sext-Oration"
        },
        "Terz": {
          "ps_1": 119.049,
          "ps_2": 53.0,
          "ps_3": 54.0,
          "ant_1": "p-2-2-Terz-ant_1",
          "ant_2": "p-2-2-Terz-ant_2",
          "ant_3": "p-2-2-Terz-ant_3",
          "les_buch": "p-2-2-Terz-Les_Buch",
          "les_stelle": "p-2-2-Terz-Les_Stelle",
          "resp1_0": "p-2-2-Terz-Resp1_0",
          "resp1_1": "p-2-2-Terz-Resp1_1",
          "oration": "p-2-2-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 322.0,
          "ps_1": 49.1,
          "ps_2": 49.2,
          "ps_3": 153.0,
          "ant_1": "p-2-2-Vp-ant_1",
          "ant_2": "p-2-2-Vp-ant_2",
          "ant_3": "p-2-2-Vp-ant_3",
          "les_buch": "p-2-2-Vp-Les_Buch",
          "les_stelle": "p-2-2-Vp-Les_Stelle",
          "resp1_1": "p-2-2-Vp-Resp1_1",
          "resp1_2": "p-2-2-Vp-Resp1_2",
          "resp1_3": "p-2-2-Vp-Resp1_3",
          "ant_ev": "p-2-2-Vp-Ant_Ev",
          "bitten_e": "p-2-2-Vp-Bitten_E",
          "bitten_r": "p-2-2-Vp-Bitten_R",
          "bitten": "p-2-2-Vp-Bitten",
          "oration": "p-2-2-Vp-Oration"
        }
      },
      "3": {
        "Laudes": {
          "hymn_1": 213.0,
          "hymn_kl": 402.0,
          "ps_1": 77.0,
          "ps_2": 173.0,
          "ps_3": 97.0,
          "ant_1": "p-2-3-Ld-ant_1",
          "ant_2": "p-2-3-Ld-ant_2",
          "ant_3": "p-2-3-Ld-ant_3",
          "les_buch": "p-2-3-Ld-Les_Buch",
          "les_stelle": "p-2-3-Ld-Les_Stelle",
          "resp1_1": "p-2-3-Ld-Resp1_1",
          "resp1_2": "p-2-3-Ld-Resp1_2",
          "resp1_3": "p-2-3-Ld-Resp1_3",
          "ant_ev": "p-2-3-Ld-Ant_Ev",
          "bitten_e": "p-2-3-Ld-Bitten_E",
          "bitten_r": "p-2-3-Ld-Bitten_R",
          "bitten": "p-2-3-Ld-Bitten",
          "oration": "p-2-3-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 403.0,
          "hymn_nacht": 1402.0,
          "ps_1": 39.1,
          "ps_2": 39.2,
          "ps_3": 52.0,
          "ant_1": "p-2-3-Lh-ant_1",
          "ant_2": "p-2-3-Lh-ant_2",
          "ant_3": "p-2-3-Lh-ant_3",
          "resp0_0": "p-2-3-Lh-Resp0_0",
          "resp0_1": "p-2-3-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-2-3-Non-Les_Buch",
          "les_stelle": "p-2-3-Non-Les_Stelle",
          "resp1_0": "p-2-3-Non-Resp1_0",
          "resp1_1": "p-2-3-Non-Resp1_1",
          "oration": "p-2-3-Non-Oration"
        },
        "Sext": {
          "les_buch": "p-2-3-Sext-Les_Buch",
          "les_stelle": "p-2-3-Sext-Les_Stelle",
          "resp1_0": "p-2-3-Sext-Resp1_0",
          "resp1_1": "p-2-3-Sext-Resp1_1",
          "oration": "p-2-3-Sext-Oration"
        },
        "Terz": {
          "ps_1": 119.057,
          "ps_2": 55.1,
          "ps_3": 55.2,
          "ant_1": "p-2-3-Terz-ant_1",
          "ant_2": "p-2-3-Terz-ant_2",
          "ant_3": "p-2-3-Terz-ant_3",
          "les_buch": "p-2-3-Terz-Les_Buch",
          "les_stelle": "p-2-3-Terz-Les_Stelle",
          "resp1_0": "p-2-3-Terz-Resp1_0",
          "resp1_1": "p-2-3-Terz-Resp1_1",
          "oration": "p-2-3-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 323.0,
          "ps_1": 62.0,
          "ps_2": 67.0,
          "ps_3": 154.0,
          "ant_1": "p-2-3-Vp-ant_1",
          "ant_2": "p-2-3-Vp-ant_2",
          "ant_3": "p-2-3-Vp-ant_3",
          "les_buch": "p-2-3-Vp-Les_Buch",
          "les_stelle": "p-2-3-Vp-Les_Stelle",
          "resp1_1": "p-2-3-Vp-Resp1_1",
          "resp1_2": "p-2-3-Vp-Resp1_2",
          "resp1_3": "p-2-3-Vp-Resp1_3",
          "ant_ev": "p-2-3-Vp-Ant_Ev",
          "bitten_e": "p-2-3-Vp-Bitten_E",
          "bitten_r": "p-2-3-Vp-Bitten_R",
          "bitten": "p-2-3-Vp-Bitten",
          "oration": "p-2-3-Vp-Oration"
        }
      },
      "4": {
        "Laudes": {
          "hymn_1": 214.0,
          "hymn_kl": 1402.0,
          "ps_1": 80.0,
          "ps_2": 174.0,
          "ps_3": 81.0,
          "ant_1": "p-2-4-Ld-ant_1",
          "ant_2": "p-2-4-Ld-ant_2",
          "ant_3": "p-2-4-Ld-ant_3",
          "les_buch": "p-2-4-Ld-Les_Buch",
          "les_stelle": "p-2-4-Ld-Les_Stelle",
          "resp1_1": "p-2-4-Ld-Resp1_1",
          "resp1_2": "p-2-4-Ld-Resp1_2",
          "resp1_3": "p-2-4-Ld-Resp1_3",
          "ant_ev": "p-2-4-Ld-Ant_Ev",
          "bitten_e": "p-2-4-Ld-Bitten_E",
          "bitten_r": "p-2-4-Ld-Bitten_R",
          "bitten": "p-2-4-Ld-Bitten",
          "oration": "p-2-4-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 401.0,
          "hymn_nacht": 405.0,
          "ps_1": 44.1,
          "ps_2": 44.2,
          "ps_3": 44.3,
          "ant_1": "p-2-4-Lh-ant_1",
          "ant_2": "p-2-4-Lh-ant_2",
          "ant_3": "p-2-4-Lh-ant_3",
          "resp0_0": "p-2-4-Lh-Resp0_0",
          "resp0_1": "p-2-4-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-2-4-Non-Les_Buch",
          "les_stelle": "p-2-4-Non-Les_Stelle",
          "resp1_0": "p-2-4-Non-Resp1_0",
          "resp1_1": "p-2-4-Non-Resp1_1",
          "oration": "p-2-4-Non-Oration"
        },
        "Sext": {
          "les_buch": "p-2-4-Sext-Les_Buch",
          "les_stelle": "p-2-4-Sext-Les_Stelle",
          "resp1_0": "p-2-4-Sext-Resp1_0",
          "resp1_1": "p-2-4-Sext-Resp1_1",
          "oration": "p-2-4-Sext-Oration"
        },
        "Terz": {
          "ps_1": 119.065,
          "ps_2": 56.0,
          "ps_3": 57.0,
          "ant_1": "p-2-4-Terz-ant_1",
          "ant_2": "p-2-4-Terz-ant_2",
          "ant_3": "p-2-4-Terz-ant_3",
          "les_buch": "p-2-4-Terz-Les_Buch",
          "les_stelle": "p-2-4-Terz-Les_Stelle",
          "resp1_0": "p-2-4-Terz-Resp1_0",
          "resp1_1": "p-2-4-Terz-Resp1_1",
          "oration": "p-2-4-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 324.0,
          "ps_1": 72.1,
          "ps_2": 72.2,
          "ps_3": 155.0,
          "ant_1": "p-2-4-Vp-ant_1",
          "ant_2": "p-2-4-Vp-ant_2",
          "ant_3": "p-2-4-Vp-ant_3",
          "les_buch": "p-2-4-Vp-Les_Buch",
          "les_stelle": "p-2-4-Vp-Les_Stelle",
          "resp1_1": "p-2-4-Vp-Resp1_1",
          "resp1_2": "p-2-4-Vp-Resp1_2",
          "resp1_3": "p-2-4-Vp-Resp1_3",
          "ant_ev": "p-2-4-Vp-Ant_Ev",
          "bitten_e": "p-2-4-Vp-Bitten_E",
          "bitten_r": "p-2-4-Vp-Bitten_R",
          "bitten": "p-2-4-Vp-Bitten",
          "oration": "p-2-4-Vp-Oration"
        }
      },
      "5": {
        "Laudes": {
          "hymn_1": 215.0,
          "hymn_kl": 403.0,
          "ps_1": 51.0,
          "ps_2": 175.0,
          "ps_3": 147.2,
          "ant_1": "p-2-5-Ld-ant_1",
          "ant_2": "p-2-5-Ld-ant_2",
          "ant_3": "p-2-5-Ld-ant_3",
          "les_buch": "p-2-5-Ld-Les_Buch",
          "les_stelle": "p-2-5-Ld-Les_Stelle",
          "resp1_1": "p-2-5-Ld-Resp1_1",
          "resp1_2": "p-2-5-Ld-Resp1_2",
          "resp1_3": "p-2-5-Ld-Resp1_3",
          "ant_ev": "p-2-5-Ld-Ant_Ev",
          "bitten_e": "p-2-5-Ld-Bitten_E",
          "bitten_r": "p-2-5-Ld-Bitten_R",
          "bitten": "p-2-5-Ld-Bitten",
          "oration": "p-2-5-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 402.0,
          "hymn_nacht": 2402.0,
          "ps_1": 38.1,
          "ps_2": 38.2,
          "ps_3": 38.3,
          "ant_1": "p-2-5-Lh-ant_1",
          "ant_2": "p-2-5-Lh-ant_2",
          "ant_3": "p-2-5-Lh-ant_3",
          "resp0_0": "p-2-5-Lh-Resp0_0",
          "resp0_1": "p-2-5-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-2-5-Non-Les_Buch",
          "les_stelle": "p-2-5-Non-Les_Stelle",
          "resp1_0": "p-2-5-Non-Resp1_0",
          "resp1_1": "p-2-5-Non-Resp1_1",
          "oration": "p-2-5-Non-Oration"
        },
        "Sext": {
          "les_buch": "p-2-5-Sext-Les_Buch",
          "les_stelle": "p-2-5-Sext-Les_Stelle",
          "resp1_0": "p-2-5-Sext-Resp1_0",
          "resp1_1": "p-2-5-Sext-Resp1_1",
          "oration": "p-2-5-Sext-Oration"
        },
        "Terz": {
          "ps_1": 119.073,
          "ps_2": 59.0,
          "ps_3": 60.0,
          "ant_1": "p-2-5-Terz-ant_1",
          "ant_2": "p-2-5-Terz-ant_2",
          "ant_3": "p-2-5-Terz-ant_3",
          "les_buch": "p-2-5-Terz-Les_Buch",
          "les_stelle": "p-2-5-Terz-Les_Stelle",
          "resp1_0": "p-2-5-Terz-Resp1_0",
          "resp1_1": "p-2-5-Terz-Resp1_1",
          "oration": "p-2-5-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 325.0,
          "ps_1": 116.0,
          "ps_2": 121.0,
          "ps_3": 156.0,
          "ant_1": "p-2-5-Vp-ant_1",
          "ant_2": "p-2-5-Vp-ant_2",
          "ant_3": "p-2-5-Vp-ant_3",
          "les_buch": "p-2-5-Vp-Les_Buch",
          "les_stelle": "p-2-5-Vp-Les_Stelle",
          "resp1_1": "p-2-5-Vp-Resp1_1",
          "resp1_2": "p-2-5-Vp-Resp1_2",
          "resp1_3": "p-2-5-Vp-Resp1_3",
          "ant_ev": "p-2-5-Vp-Ant_Ev",
          "bitten_e": "p-2-5-Vp-Bitten_E",
          "bitten_r": "p-2-5-Vp-Bitten_R",
          "bitten": "p-2-5-Vp-Bitten",
          "oration": "p-2-5-Vp-Oration"
        }
      },
      "6": {
        "Laudes": {
          "hymn_1": 216.0,
          "hymn_kl": 226.0,
          "ps_1": 92.0,
          "ps_2": 176.0,
          "ps_3": 8.0,
          "ant_1": "p-2-6-Ld-ant_1",
          "ant_2": "p-2-6-Ld-ant_2",
          "ant_3": "p-2-6-Ld-ant_3",
          "les_buch": "p-2-6-Ld-Les_Buch",
          "les_stelle": "p-2-6-Ld-Les_Stelle",
          "resp1_1": "p-2-6-Ld-Resp1_1",
          "resp1_2": "p-2-6-Ld-Resp1_2",
          "resp1_3": "p-2-6-Ld-Resp1_3",
          "ant_ev": "p-2-6-Ld-Ant_Ev",
          "bitten_e": "p-2-6-Ld-Bitten_E",
          "bitten_r": "p-2-6-Ld-Bitten_R",
          "bitten": "p-2-6-Ld-Bitten",
          "oration": "p-2-6-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 403.0,
          "hymn_nacht": 1402.0,
          "ps_1": 106.1,
          "ps_2": 106.2,
          "ps_3": 106.3,
          "ant_1": "p-2-6-Lh-ant_1",
          "ant_2": "p-2-6-Lh-ant_2",
          "ant_3": "p-2-6-Lh-ant_3",
          "resp0_0": "p-2-6-Lh-Resp0_0",
          "resp0_1": "p-2-6-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-2-6-Non-Les_Buch",
          "les_stelle": "p-2-6-Non-Les_Stelle",
          "resp1_0": "p-2-6-Non-Resp1_0",
          "resp1_1": "p-2-6-Non-Resp1_1",
          "oration": "p-2-6-Non-Oration"
        },
        "Sext": {
          "les_buch": "p-2-6-Sext-Les_Buch",
          "les_stelle": "p-2-6-Sext-Les_Stelle",
          "resp1_0": "p-2-6-Sext-Resp1_0",
          "resp1_1": "p-2-6-Sext-Resp1_1",
          "oration": "p-2-6-Sext-Oration"
        },
        "Terz": {
          "ps_1": 119.081,
          "ps_2": 61.0,
          "ps_3": 64.0,
          "ant_1": "p-2-6-Terz-ant_1",
          "ant_2": "p-2-6-Terz-ant_2",
          "ant_3": "p-2-6-Terz-ant_3",
          "les_buch": "p-2-6-Terz-Les_Buch",
          "les_stelle": "p-2-6-Terz-Les_Stelle",
          "resp1_0": "p-2-6-Terz-Resp1_0",
          "resp1_1": "p-2-6-Terz-Resp1_1",
          "oration": "p-2-6-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 326.0,
          "ps_1": 113.0,
          "ps_2": 116.0,
          "ps_3": 157.0,
          "ant_1": "p-2-6-Vp-ant_1",
          "ant_2": "p-2-6-Vp-ant_2",
          "ant_3": "p-2-6-Vp-ant_3",
          "les_buch": "p-2-6-Vp-Les_Buch",
          "les_stelle": "p-2-6-Vp-Les_Stelle",
          "resp1_1": "p-2-6-Vp-Resp1_1",
          "resp1_2": "p-2-6-Vp-Resp1_2",
          "resp1_3": "p-2-6-Vp-Resp1_3",
          "ant_ev": "p-2-6-Vp-Ant_Ev",
          "bitten_e": "p-2-6-Vp-Bitten_E",
          "bitten_r": "p-2-6-Vp-Bitten_R",
          "bitten": "p-2-6-Vp-Bitten",
          "oration": "p-2-6-Vp-Oration"
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
          "ant_1": "p-3-0-Ld-ant_1",
          "ant_2": "p-3-0-Ld-ant_2",
          "ant_3": "p-3-0-Ld-ant_3",
          "les_buch": "p-3-0-Ld-Les_Buch",
          "les_stelle": "p-3-0-Ld-Les_Stelle",
          "resp1_1": "p-3-0-Ld-Resp1_1",
          "resp1_2": "p-3-0-Ld-Resp1_2",
          "resp1_3": "p-3-0-Ld-Resp1_3",
          "ant_ev": "p-3-0-Ld-Ant_Ev",
          "bitten_e": "p-3-0-Ld-Bitten_E",
          "bitten_r": "p-3-0-Ld-Bitten_R",
          "bitten": "p-3-0-Ld-Bitten",
          "oration": "p-3-0-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 400.0,
          "ps_1": 145.1,
          "ps_2": 145.2,
          "ps_3": 145.3,
          "ant_1": "p-3-0-Lh-ant_1",
          "ant_2": "p-3-0-Lh-ant_2",
          "ant_3": "p-3-0-Lh-ant_3",
          "resp0_0": "p-3-0-Lh-Resp0_0",
          "resp0_1": "p-3-0-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-3-0-Non-Les_Buch",
          "les_stelle": "p-3-0-Non-Les_Stelle",
          "resp1_0": "p-3-0-Non-Resp1_0",
          "resp1_1": "p-3-0-Non-Resp1_1",
          "oration": "p-3-0-Non-Oration"
        },
        "Sext": {
          "les_buch": "p-3-0-Sext-Les_Buch",
          "les_stelle": "p-3-0-Sext-Les_Stelle",
          "resp1_0": "p-3-0-Sext-Resp1_0",
          "resp1_1": "p-3-0-Sext-Resp1_1",
          "oration": "p-3-0-Sext-Oration"
        },
        "Terz": {
          "ps_1": 118.1,
          "ps_2": 118.2,
          "ps_3": 118.3,
          "ant_1": "p-3-0-Terz-ant_1",
          "ant_2": "p-3-0-Terz-ant_2",
          "ant_3": "p-3-0-Terz-ant_3",
          "les_buch": "p-3-0-Terz-Les_Buch",
          "les_stelle": "p-3-0-Terz-Les_Stelle",
          "resp1_0": "p-3-0-Terz-Resp1_0",
          "resp1_1": "p-3-0-Terz-Resp1_1",
          "oration": "p-3-0-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 310.0,
          "hymn_kl": 330.0,
          "ps_1": 110.0,
          "ps_2": 111.0,
          "ps_3": 151.0,
          "ant_1": "p-3-0-Vp-ant_1",
          "ant_2": "p-3-0-Vp-ant_2",
          "ant_3": "p-3-0-Vp-ant_3",
          "les_buch": "p-3-0-Vp-Les_Buch",
          "les_stelle": "p-3-0-Vp-Les_Stelle",
          "resp1_1": "p-3-0-Vp-Resp1_1",
          "resp1_2": "p-3-0-Vp-Resp1_2",
          "resp1_3": "p-3-0-Vp-Resp1_3",
          "ant_ev": "p-3-0-Vp-Ant_Ev",
          "bitten_e": "p-3-0-Vp-Bitten_E",
          "bitten_r": "p-3-0-Vp-Bitten_R",
          "bitten": "p-3-0-Vp-Bitten",
          "oration": "p-3-0-Vp-Oration"
        }
      },
      "1": {
        "Laudes": {
          "hymn_1": 211.0,
          "hymn_kl": 231.0,
          "ps_1": 84.0,
          "ps_2": 181.0,
          "ps_3": 96.0,
          "ant_1": "p-3-1-Ld-ant_1",
          "ant_2": "p-3-1-Ld-ant_2",
          "ant_3": "p-3-1-Ld-ant_3",
          "les_buch": "p-3-1-Ld-Les_Buch",
          "les_stelle": "p-3-1-Ld-Les_Stelle",
          "resp1_1": "p-3-1-Ld-Resp1_1",
          "resp1_2": "p-3-1-Ld-Resp1_2",
          "resp1_3": "p-3-1-Ld-Resp1_3",
          "ant_ev": "p-3-1-Ld-Ant_Ev",
          "bitten_e": "p-3-1-Ld-Bitten_E",
          "bitten_r": "p-3-1-Ld-Bitten_R",
          "bitten": "p-3-1-Ld-Bitten",
          "oration": "p-3-1-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 401.0,
          "hymn_nacht": 405.0,
          "ps_1": 50.1,
          "ps_2": 50.2,
          "ps_3": 50.3,
          "ant_1": "p-3-1-Lh-ant_1",
          "ant_2": "p-3-1-Lh-ant_2",
          "ant_3": "p-3-1-Lh-ant_3",
          "resp0_0": "p-3-1-Lh-Resp0_0",
          "resp0_1": "p-3-1-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-3-1-Non-Les_Buch",
          "les_stelle": "p-3-1-Non-Les_Stelle",
          "resp1_0": "p-3-1-Non-Resp1_0",
          "resp1_1": "p-3-1-Non-Resp1_1",
          "oration": "p-3-1-Non-Oration"
        },
        "Sext": {
          "les_buch": "p-3-1-Sext-Les_Buch",
          "les_stelle": "p-3-1-Sext-Les_Stelle",
          "resp1_0": "p-3-1-Sext-Resp1_0",
          "resp1_1": "p-3-1-Sext-Resp1_1",
          "oration": "p-3-1-Sext-Oration"
        },
        "Terz": {
          "ps_1": 119.089,
          "ps_2": 71.1,
          "ps_3": 71.2,
          "ant_1": "p-3-1-Terz-ant_1",
          "ant_2": "p-3-1-Terz-ant_2",
          "ant_3": "p-3-1-Terz-ant_3",
          "les_buch": "p-3-1-Terz-Les_Buch",
          "les_stelle": "p-3-1-Terz-Les_Stelle",
          "resp1_0": "p-3-1-Terz-Resp1_0",
          "resp1_1": "p-3-1-Terz-Resp1_1",
          "oration": "p-3-1-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 311.0,
          "hymn_kl": 331.0,
          "ps_1": 123.0,
          "ps_2": 124.0,
          "ps_3": 152.0,
          "ant_1": "p-3-1-Vp-ant_1",
          "ant_2": "p-3-1-Vp-ant_2",
          "ant_3": "p-3-1-Vp-ant_3",
          "les_buch": "p-3-1-Vp-Les_Buch",
          "les_stelle": "p-3-1-Vp-Les_Stelle",
          "resp1_1": "p-3-1-Vp-Resp1_1",
          "resp1_2": "p-3-1-Vp-Resp1_2",
          "resp1_3": "p-3-1-Vp-Resp1_3",
          "ant_ev": "p-3-1-Vp-Ant_Ev",
          "bitten_e": "p-3-1-Vp-Bitten_E",
          "bitten_r": "p-3-1-Vp-Bitten_R",
          "bitten": "p-3-1-Vp-Bitten",
          "oration": "p-3-1-Vp-Oration"
        }
      },
      "2": {
        "Laudes": {
          "hymn_1": 212.0,
          "hymn_kl": 232.0,
          "ps_1": 85.0,
          "ps_2": 182.0,
          "ps_3": 67.0,
          "ant_1": "p-3-2-Ld-ant_1",
          "ant_2": "p-3-2-Ld-ant_2",
          "ant_3": "p-3-2-Ld-ant_3",
          "les_buch": "p-3-2-Ld-Les_Buch",
          "les_stelle": "p-3-2-Ld-Les_Stelle",
          "resp1_1": "p-3-2-Ld-Resp1_1",
          "resp1_2": "p-3-2-Ld-Resp1_2",
          "resp1_3": "p-3-2-Ld-Resp1_3",
          "ant_ev": "p-3-2-Ld-Ant_Ev",
          "bitten_e": "p-3-2-Ld-Bitten_E",
          "bitten_r": "p-3-2-Ld-Bitten_R",
          "bitten": "p-3-2-Ld-Bitten",
          "oration": "p-3-2-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 402.0,
          "hymn_nacht": 2402.0,
          "ps_1": 68.1,
          "ps_2": 68.2,
          "ps_3": 68.3,
          "ant_1": "p-3-2-Lh-ant_1",
          "ant_2": "p-3-2-Lh-ant_2",
          "ant_3": "p-3-2-Lh-ant_3",
          "resp0_0": "p-3-2-Lh-Resp0_0",
          "resp0_1": "p-3-2-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-3-2-Non-Les_Buch",
          "les_stelle": "p-3-2-Non-Les_Stelle",
          "resp1_0": "p-3-2-Non-Resp1_0",
          "resp1_1": "p-3-2-Non-Resp1_1",
          "oration": "p-3-2-Non-Oration"
        },
        "Sext": {
          "les_buch": "p-3-2-Sext-Les_Buch",
          "les_stelle": "p-3-2-Sext-Les_Stelle",
          "resp1_0": "p-3-2-Sext-Resp1_0",
          "resp1_1": "p-3-2-Sext-Resp1_1",
          "oration": "p-3-2-Sext-Oration"
        },
        "Terz": {
          "ps_1": 119.097,
          "ps_2": 74.1,
          "ps_3": 74.2,
          "ant_1": "p-3-2-Terz-ant_1",
          "ant_2": "p-3-2-Terz-ant_2",
          "ant_3": "p-3-2-Terz-ant_3",
          "les_buch": "p-3-2-Terz-Les_Buch",
          "les_stelle": "p-3-2-Terz-Les_Stelle",
          "resp1_0": "p-3-2-Terz-Resp1_0",
          "resp1_1": "p-3-2-Terz-Resp1_1",
          "oration": "p-3-2-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 312.0,
          "hymn_kl": 332.0,
          "ps_1": 125.0,
          "ps_2": 131.0,
          "ps_3": 153.0,
          "ant_1": "p-3-2-Vp-ant_1",
          "ant_2": "p-3-2-Vp-ant_2",
          "ant_3": "p-3-2-Vp-ant_3",
          "les_buch": "p-3-2-Vp-Les_Buch",
          "les_stelle": "p-3-2-Vp-Les_Stelle",
          "resp1_1": "p-3-2-Vp-Resp1_1",
          "resp1_2": "p-3-2-Vp-Resp1_2",
          "resp1_3": "p-3-2-Vp-Resp1_3",
          "ant_ev": "p-3-2-Vp-Ant_Ev",
          "bitten_e": "p-3-2-Vp-Bitten_E",
          "bitten_r": "p-3-2-Vp-Bitten_R",
          "bitten": "p-3-2-Vp-Bitten",
          "oration": "p-3-2-Vp-Oration"
        }
      },
      "3": {
        "Laudes": {
          "hymn_1": 213.0,
          "hymn_kl": 4301.0,
          "ps_1": 86.0,
          "ps_2": 183.0,
          "ps_3": 98.0,
          "ant_1": "p-3-3-Ld-ant_1",
          "ant_2": "p-3-3-Ld-ant_2",
          "ant_3": "p-3-3-Ld-ant_3",
          "les_buch": "p-3-3-Ld-Les_Buch",
          "les_stelle": "p-3-3-Ld-Les_Stelle",
          "resp1_1": "p-3-3-Ld-Resp1_1",
          "resp1_2": "p-3-3-Ld-Resp1_2",
          "resp1_3": "p-3-3-Ld-Resp1_3",
          "ant_ev": "p-3-3-Ld-Ant_Ev",
          "bitten_e": "p-3-3-Ld-Bitten_E",
          "bitten_r": "p-3-3-Ld-Bitten_R",
          "bitten": "p-3-3-Ld-Bitten",
          "oration": "p-3-3-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 403.0,
          "hymn_nacht": 1402.0,
          "ps_1": 89.1,
          "ps_2": 89.2,
          "ps_3": 89.3,
          "ant_1": "p-3-3-Lh-ant_1",
          "ant_2": "p-3-3-Lh-ant_2",
          "ant_3": "p-3-3-Lh-ant_3",
          "resp0_0": "p-3-3-Lh-Resp0_0",
          "resp0_1": "p-3-3-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-3-3-Non-Les_Buch",
          "les_stelle": "p-3-3-Non-Les_Stelle",
          "resp1_0": "p-3-3-Non-Resp1_0",
          "resp1_1": "p-3-3-Non-Resp1_1",
          "oration": "p-3-3-Non-Oration"
        },
        "Sext": {
          "les_buch": "p-3-3-Sext-Les_Buch",
          "les_stelle": "p-3-3-Sext-Les_Stelle",
          "resp1_0": "p-3-3-Sext-Resp1_0",
          "resp1_1": "p-3-3-Sext-Resp1_1",
          "oration": "p-3-3-Sext-Oration"
        },
        "Terz": {
          "ps_1": 119.105,
          "ps_2": 70.0,
          "ps_3": 75.0,
          "ant_1": "p-3-3-Terz-ant_1",
          "ant_2": "p-3-3-Terz-ant_2",
          "ant_3": "p-3-3-Terz-ant_3",
          "les_buch": "p-3-3-Terz-Les_Buch",
          "les_stelle": "p-3-3-Terz-Les_Stelle",
          "resp1_0": "p-3-3-Terz-Resp1_0",
          "resp1_1": "p-3-3-Terz-Resp1_1",
          "oration": "p-3-3-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 313.0,
          "hymn_kl": 333.0,
          "ps_1": 126.0,
          "ps_2": 127.0,
          "ps_3": 154.0,
          "ant_1": "p-3-3-Vp-ant_1",
          "ant_2": "p-3-3-Vp-ant_2",
          "ant_3": "p-3-3-Vp-ant_3",
          "les_buch": "p-3-3-Vp-Les_Buch",
          "les_stelle": "p-3-3-Vp-Les_Stelle",
          "resp1_1": "p-3-3-Vp-Resp1_1",
          "resp1_2": "p-3-3-Vp-Resp1_2",
          "resp1_3": "p-3-3-Vp-Resp1_3",
          "ant_ev": "p-3-3-Vp-Ant_Ev",
          "bitten_e": "p-3-3-Vp-Bitten_E",
          "bitten_r": "p-3-3-Vp-Bitten_R",
          "bitten": "p-3-3-Vp-Bitten",
          "oration": "p-3-3-Vp-Oration"
        }
      },
      "4": {
        "Laudes": {
          "hymn_1": 214.0,
          "hymn_kl": 234.0,
          "ps_1": 87.0,
          "ps_2": 184.0,
          "ps_3": 99.0,
          "ant_1": "p-3-4-Ld-ant_1",
          "ant_2": "p-3-4-Ld-ant_2",
          "ant_3": "p-3-4-Ld-ant_3",
          "les_buch": "p-3-4-Ld-Les_Buch",
          "les_stelle": "p-3-4-Ld-Les_Stelle",
          "resp1_1": "p-3-4-Ld-Resp1_1",
          "resp1_2": "p-3-4-Ld-Resp1_2",
          "resp1_3": "p-3-4-Ld-Resp1_3",
          "ant_ev": "p-3-4-Ld-Ant_Ev",
          "bitten_e": "p-3-4-Ld-Bitten_E",
          "bitten_r": "p-3-4-Ld-Bitten_R",
          "bitten": "p-3-4-Ld-Bitten",
          "oration": "p-3-4-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 401.0,
          "hymn_nacht": 405.0,
          "ps_1": 89.4,
          "ps_2": 89.5,
          "ps_3": 90.0,
          "ant_1": "p-3-4-Lh-ant_1",
          "ant_2": "p-3-4-Lh-ant_2",
          "ant_3": "p-3-4-Lh-ant_3",
          "resp0_0": "p-3-4-Lh-Resp0_0",
          "resp0_1": "p-3-4-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-3-4-Non-Les_Buch",
          "les_stelle": "p-3-4-Non-Les_Stelle",
          "resp1_0": "p-3-4-Non-Resp1_0",
          "resp1_1": "p-3-4-Non-Resp1_1",
          "oration": "p-3-4-Non-Oration"
        },
        "Sext": {
          "les_buch": "p-3-4-Sext-Les_Buch",
          "les_stelle": "p-3-4-Sext-Les_Stelle",
          "resp1_0": "p-3-4-Sext-Resp1_0",
          "resp1_1": "p-3-4-Sext-Resp1_1",
          "oration": "p-3-4-Sext-Oration"
        },
        "Terz": {
          "ps_1": 119.113,
          "ps_2": 79.0,
          "ps_3": 80.0,
          "ant_1": "p-3-4-Terz-ant_1",
          "ant_2": "p-3-4-Terz-ant_2",
          "ant_3": "p-3-4-Terz-ant_3",
          "les_buch": "p-3-4-Terz-Les_Buch",
          "les_stelle": "p-3-4-Terz-Les_Stelle",
          "resp1_0": "p-3-4-Terz-Resp1_0",
          "resp1_1": "p-3-4-Terz-Resp1_1",
          "oration": "p-3-4-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 314.0,
          "hymn_kl": 334.0,
          "ps_1": 132.1,
          "ps_2": 132.2,
          "ps_3": 155.0,
          "ant_1": "p-3-4-Vp-ant_1",
          "ant_2": "p-3-4-Vp-ant_2",
          "ant_3": "p-3-4-Vp-ant_3",
          "les_buch": "p-3-4-Vp-Les_Buch",
          "les_stelle": "p-3-4-Vp-Les_Stelle",
          "resp1_1": "p-3-4-Vp-Resp1_1",
          "resp1_2": "p-3-4-Vp-Resp1_2",
          "resp1_3": "p-3-4-Vp-Resp1_3",
          "ant_ev": "p-3-4-Vp-Ant_Ev",
          "bitten_e": "p-3-4-Vp-Bitten_E",
          "bitten_r": "p-3-4-Vp-Bitten_R",
          "bitten": "p-3-4-Vp-Bitten",
          "oration": "p-3-4-Vp-Oration"
        }
      },
      "5": {
        "Laudes": {
          "hymn_1": 215.0,
          "hymn_kl": 235.0,
          "ps_1": 51.0,
          "ps_2": 185.0,
          "ps_3": 100.0,
          "ant_1": "p-3-5-Ld-ant_1",
          "ant_2": "p-3-5-Ld-ant_2",
          "ant_3": "p-3-5-Ld-ant_3",
          "les_buch": "p-3-5-Ld-Les_Buch",
          "les_stelle": "p-3-5-Ld-Les_Stelle",
          "resp1_1": "p-3-5-Ld-Resp1_1",
          "resp1_2": "p-3-5-Ld-Resp1_2",
          "resp1_3": "p-3-5-Ld-Resp1_3",
          "ant_ev": "p-3-5-Ld-Ant_Ev",
          "bitten_e": "p-3-5-Ld-Bitten_E",
          "bitten_r": "p-3-5-Ld-Bitten_R",
          "bitten": "p-3-5-Ld-Bitten",
          "oration": "p-3-5-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 402.0,
          "hymn_nacht": 2402.0,
          "ps_1": 69.1,
          "ps_2": 69.2,
          "ps_3": 69.3,
          "ant_1": "p-3-5-Lh-ant_1",
          "ant_2": "p-3-5-Lh-ant_2",
          "ant_3": "p-3-5-Lh-ant_3",
          "resp0_0": "p-3-5-Lh-Resp0_0",
          "resp0_1": "p-3-5-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-3-5-Non-Les_Buch",
          "les_stelle": "p-3-5-Non-Les_Stelle",
          "resp1_0": "p-3-5-Non-Resp1_0",
          "resp1_1": "p-3-5-Non-Resp1_1",
          "oration": "p-3-5-Non-Oration"
        },
        "Sext": {
          "les_buch": "p-3-5-Sext-Les_Buch",
          "les_stelle": "p-3-5-Sext-Les_Stelle",
          "resp1_0": "p-3-5-Sext-Resp1_0",
          "resp1_1": "p-3-5-Sext-Resp1_1",
          "oration": "p-3-5-Sext-Oration"
        },
        "Terz": {
          "ps_1": 22.1,
          "ps_2": 22.2,
          "ps_3": 22.3,
          "ant_1": "p-3-5-Terz-ant_1",
          "ant_2": "p-3-5-Terz-ant_2",
          "ant_3": "p-3-5-Terz-ant_3",
          "les_buch": "p-3-5-Terz-Les_Buch",
          "les_stelle": "p-3-5-Terz-Les_Stelle",
          "resp1_0": "p-3-5-Terz-Resp1_0",
          "resp1_1": "p-3-5-Terz-Resp1_1",
          "oration": "p-3-5-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 315.0,
          "hymn_kl": 335.0,
          "ps_1": 135.1,
          "ps_2": 135.2,
          "ps_3": 156.0,
          "ant_1": "p-3-5-Vp-ant_1",
          "ant_2": "p-3-5-Vp-ant_2",
          "ant_3": "p-3-5-Vp-ant_3",
          "les_buch": "p-3-5-Vp-Les_Buch",
          "les_stelle": "p-3-5-Vp-Les_Stelle",
          "resp1_1": "p-3-5-Vp-Resp1_1",
          "resp1_2": "p-3-5-Vp-Resp1_2",
          "resp1_3": "p-3-5-Vp-Resp1_3",
          "ant_ev": "p-3-5-Vp-Ant_Ev",
          "bitten_e": "p-3-5-Vp-Bitten_E",
          "bitten_r": "p-3-5-Vp-Bitten_R",
          "bitten": "p-3-5-Vp-Bitten",
          "oration": "p-3-5-Vp-Oration"
        }
      },
      "6": {
        "Laudes": {
          "hymn_1": 216.0,
          "hymn_kl": 236.0,
          "ps_1": 119.145,
          "ps_2": 186.0,
          "ps_3": 117.0,
          "ant_1": "p-3-6-Ld-ant_1",
          "ant_2": "p-3-6-Ld-ant_2",
          "ant_3": "p-3-6-Ld-ant_3",
          "les_buch": "p-3-6-Ld-Les_Buch",
          "les_stelle": "p-3-6-Ld-Les_Stelle",
          "resp1_1": "p-3-6-Ld-Resp1_1",
          "resp1_2": "p-3-6-Ld-Resp1_2",
          "resp1_3": "p-3-6-Ld-Resp1_3",
          "ant_ev": "p-3-6-Ld-Ant_Ev",
          "bitten_e": "p-3-6-Ld-Bitten_E",
          "bitten_r": "p-3-6-Ld-Bitten_R",
          "bitten": "p-3-6-Ld-Bitten",
          "oration": "p-3-6-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 403.0,
          "hymn_nacht": 1402.0,
          "ps_1": 107.1,
          "ps_2": 107.2,
          "ps_3": 107.3,
          "ant_1": "p-3-6-Lh-ant_1",
          "ant_2": "p-3-6-Lh-ant_2",
          "ant_3": "p-3-6-Lh-ant_3",
          "resp0_0": "p-3-6-Lh-Resp0_0",
          "resp0_1": "p-3-6-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-3-6-Non-Les_Buch",
          "les_stelle": "p-3-6-Non-Les_Stelle",
          "resp1_0": "p-3-6-Non-Resp1_0",
          "resp1_1": "p-3-6-Non-Resp1_1",
          "oration": "p-3-6-Non-Oration"
        },
        "Sext": {
          "les_buch": "p-3-6-Sext-Les_Buch",
          "les_stelle": "p-3-6-Sext-Les_Stelle",
          "resp1_0": "p-3-6-Sext-Resp1_0",
          "resp1_1": "p-3-6-Sext-Resp1_1",
          "oration": "p-3-6-Sext-Oration"
        },
        "Terz": {
          "ps_1": 119.121,
          "ps_2": 34.1,
          "ps_3": 34.2,
          "ant_1": "p-3-6-Terz-ant_1",
          "ant_2": "p-3-6-Terz-ant_2",
          "ant_3": "p-3-6-Terz-ant_3",
          "les_buch": "p-3-6-Terz-Les_Buch",
          "les_stelle": "p-3-6-Terz-Les_Stelle",
          "resp1_0": "p-3-6-Terz-Resp1_0",
          "resp1_1": "p-3-6-Terz-Resp1_1",
          "oration": "p-3-6-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 316.0,
          "hymn_kl": 336.0,
          "ps_1": 122.0,
          "ps_2": 130.0,
          "ps_3": 157.0,
          "ant_1": "p-3-6-Vp-ant_1",
          "ant_2": "p-3-6-Vp-ant_2",
          "ant_3": "p-3-6-Vp-ant_3",
          "les_buch": "p-3-6-Vp-Les_Buch",
          "les_stelle": "p-3-6-Vp-Les_Stelle",
          "resp1_1": "p-3-6-Vp-Resp1_1",
          "resp1_2": "p-3-6-Vp-Resp1_2",
          "resp1_3": "p-3-6-Vp-Resp1_3",
          "ant_ev": "p-3-6-Vp-Ant_Ev",
          "bitten_e": "p-3-6-Vp-Bitten_E",
          "bitten_r": "p-3-6-Vp-Bitten_R",
          "bitten": "p-3-6-Vp-Bitten",
          "oration": "p-3-6-Vp-Oration"
        }
      }
    },
    "4": {
      "0": {
        "Laudes": {
          "hymn_1": 210.0,
          "hymn_kl": 400.0,
          "ps_1": 118.0,
          "ps_2": 170.0,
          "ps_3": 150.0,
          "ant_1": "p-4-0-Ld-ant_1",
          "ant_2": "p-4-0-Ld-ant_2",
          "ant_3": "p-4-0-Ld-ant_3",
          "les_buch": "p-4-0-Ld-Les_Buch",
          "les_stelle": "p-4-0-Ld-Les_Stelle",
          "resp1_1": "p-4-0-Ld-Resp1_1",
          "resp1_2": "p-4-0-Ld-Resp1_2",
          "resp1_3": "p-4-0-Ld-Resp1_3",
          "ant_ev": "p-4-0-Ld-Ant_Ev",
          "bitten_e": "p-4-0-Ld-Bitten_E",
          "bitten_r": "p-4-0-Ld-Bitten_R",
          "bitten": "p-4-0-Ld-Bitten",
          "oration": "p-4-0-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 4401.0,
          "ps_1": 24.0,
          "ps_2": 66.1,
          "ps_3": 66.2,
          "ant_1": "p-4-0-Lh-ant_1",
          "ant_2": "p-4-0-Lh-ant_2",
          "ant_3": "p-4-0-Lh-ant_3",
          "resp0_0": "p-4-0-Lh-Resp0_0",
          "resp0_1": "p-4-0-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-4-0-Non-Les_Buch",
          "les_stelle": "p-4-0-Non-Les_Stelle",
          "resp1_0": "p-4-0-Non-Resp1_0",
          "resp1_1": "p-4-0-Non-Resp1_1",
          "oration": "p-4-0-Non-Oration"
        },
        "Sext": {
          "les_buch": "p-4-0-Sext-Les_Buch",
          "les_stelle": "p-4-0-Sext-Les_Stelle",
          "resp1_0": "p-4-0-Sext-Resp1_0",
          "resp1_1": "p-4-0-Sext-Resp1_1",
          "oration": "p-4-0-Sext-Oration"
        },
        "Terz": {
          "ps_1": 23.0,
          "ps_2": 76.1,
          "ps_3": 76.2,
          "ant_1": "p-4-0-Terz-ant_1",
          "ant_2": "p-4-0-Terz-ant_2",
          "ant_3": "p-4-0-Terz-ant_3",
          "les_buch": "p-4-0-Terz-Les_Buch",
          "les_stelle": "p-4-0-Terz-Les_Stelle",
          "resp1_0": "p-4-0-Terz-Resp1_0",
          "resp1_1": "p-4-0-Terz-Resp1_1",
          "oration": "p-4-0-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 320.0,
          "hymn_kl": 340.0,
          "ps_1": 110.0,
          "ps_2": 112.0,
          "ps_3": 151.0,
          "ant_1": "p-4-0-Vp-ant_1",
          "ant_2": "p-4-0-Vp-ant_2",
          "ant_3": "p-4-0-Vp-ant_3",
          "les_buch": "p-4-0-Vp-Les_Buch",
          "les_stelle": "p-4-0-Vp-Les_Stelle",
          "resp1_1": "p-4-0-Vp-Resp1_1",
          "resp1_2": "p-4-0-Vp-Resp1_2",
          "resp1_3": "p-4-0-Vp-Resp1_3",
          "ant_ev": "p-4-0-Vp-Ant_Ev",
          "bitten_e": "p-4-0-Vp-Bitten_E",
          "bitten_r": "p-4-0-Vp-Bitten_R",
          "bitten": "p-4-0-Vp-Bitten",
          "oration": "p-4-0-Vp-Oration"
        }
      },
      "1": {
        "Laudes": {
          "hymn_1": 211.0,
          "hymn_kl": 241.0,
          "ps_1": 90.0,
          "ps_2": 191.0,
          "ps_3": 135.1,
          "ant_1": "p-4-1-Ld-ant_1",
          "ant_2": "p-4-1-Ld-ant_2",
          "ant_3": "p-4-1-Ld-ant_3",
          "les_buch": "p-4-1-Ld-Les_Buch",
          "les_stelle": "p-4-1-Ld-Les_Stelle",
          "resp1_1": "p-4-1-Ld-Resp1_1",
          "resp1_2": "p-4-1-Ld-Resp1_2",
          "resp1_3": "p-4-1-Ld-Resp1_3",
          "ant_ev": "p-4-1-Ld-Ant_Ev",
          "bitten_e": "p-4-1-Ld-Bitten_E",
          "bitten_r": "p-4-1-Ld-Bitten_R",
          "bitten": "p-4-1-Ld-Bitten",
          "oration": "p-4-1-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 401.0,
          "hymn_nacht": 405.0,
          "ps_1": 73.1,
          "ps_2": 73.2,
          "ps_3": 73.3,
          "ant_1": "p-4-1-Lh-ant_1",
          "ant_2": "p-4-1-Lh-ant_2",
          "ant_3": "p-4-1-Lh-ant_3",
          "resp0_0": "p-4-1-Lh-Resp0_0",
          "resp0_1": "p-4-1-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-4-1-Non-Les_Buch",
          "les_stelle": "p-4-1-Non-Les_Stelle",
          "resp1_0": "p-4-1-Non-Resp1_0",
          "resp1_1": "p-4-1-Non-Resp1_1",
          "oration": "p-4-1-Non-Oration"
        },
        "Sext": {
          "les_buch": "p-4-1-Sext-Les_Buch",
          "les_stelle": "p-4-1-Sext-Les_Stelle",
          "resp1_0": "p-4-1-Sext-Resp1_0",
          "resp1_1": "p-4-1-Sext-Resp1_1",
          "oration": "p-4-1-Sext-Oration"
        },
        "Terz": {
          "ps_1": 119.129,
          "ps_2": 82.0,
          "ps_3": 120.0,
          "ant_1": "p-4-1-Terz-ant_1",
          "ant_2": "p-4-1-Terz-ant_2",
          "ant_3": "p-4-1-Terz-ant_3",
          "les_buch": "p-4-1-Terz-Les_Buch",
          "les_stelle": "p-4-1-Terz-Les_Stelle",
          "resp1_0": "p-4-1-Terz-Resp1_0",
          "resp1_1": "p-4-1-Terz-Resp1_1",
          "oration": "p-4-1-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 321.0,
          "hymn_kl": 341.0,
          "ps_1": 136.1,
          "ps_2": 136.2,
          "ps_3": 152.0,
          "ant_1": "p-4-1-Vp-ant_1",
          "ant_2": "p-4-1-Vp-ant_2",
          "ant_3": "p-4-1-Vp-ant_3",
          "les_buch": "p-4-1-Vp-Les_Buch",
          "les_stelle": "p-4-1-Vp-Les_Stelle",
          "resp1_1": "p-4-1-Vp-Resp1_1",
          "resp1_2": "p-4-1-Vp-Resp1_2",
          "resp1_3": "p-4-1-Vp-Resp1_3",
          "ant_ev": "p-4-1-Vp-Ant_Ev",
          "bitten_e": "p-4-1-Vp-Bitten_E",
          "bitten_r": "p-4-1-Vp-Bitten_R",
          "bitten": "p-4-1-Vp-Bitten",
          "oration": "p-4-1-Vp-Oration"
        }
      },
      "2": {
        "Laudes": {
          "hymn_1": 212.0,
          "hymn_kl": 242.0,
          "ps_1": 101.0,
          "ps_2": 192.0,
          "ps_3": 144.3,
          "ant_1": "p-4-2-Ld-ant_1",
          "ant_2": "p-4-2-Ld-ant_2",
          "ant_3": "p-4-2-Ld-ant_3",
          "les_buch": "p-4-2-Ld-Les_Buch",
          "les_stelle": "p-4-2-Ld-Les_Stelle",
          "resp1_1": "p-4-2-Ld-Resp1_1",
          "resp1_2": "p-4-2-Ld-Resp1_2",
          "resp1_3": "p-4-2-Ld-Resp1_3",
          "ant_ev": "p-4-2-Ld-Ant_Ev",
          "bitten_e": "p-4-2-Ld-Bitten_E",
          "bitten_r": "p-4-2-Ld-Bitten_R",
          "bitten": "p-4-2-Ld-Bitten",
          "oration": "p-4-2-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 402.0,
          "hymn_nacht": 2402.0,
          "ps_1": 102.1,
          "ps_2": 102.2,
          "ps_3": 102.3,
          "ant_1": "p-4-2-Lh-ant_1",
          "ant_2": "p-4-2-Lh-ant_2",
          "ant_3": "p-4-2-Lh-ant_3",
          "resp0_0": "p-4-2-Lh-Resp0_0",
          "resp0_1": "p-4-2-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-4-2-Non-Les_Buch",
          "les_stelle": "p-4-2-Non-Les_Stelle",
          "resp1_0": "p-4-2-Non-Resp1_0",
          "resp1_1": "p-4-2-Non-Resp1_1",
          "oration": "p-4-2-Non-Oration"
        },
        "Sext": {
          "les_buch": "p-4-2-Sext-Les_Buch",
          "les_stelle": "p-4-2-Sext-Les_Stelle",
          "resp1_0": "p-4-2-Sext-Resp1_0",
          "resp1_1": "p-4-2-Sext-Resp1_1",
          "oration": "p-4-2-Sext-Oration"
        },
        "Terz": {
          "ps_1": 119.137,
          "ps_2": 88.1,
          "ps_3": 88.2,
          "ant_1": "p-4-2-Terz-ant_1",
          "ant_2": "p-4-2-Terz-ant_2",
          "ant_3": "p-4-2-Terz-ant_3",
          "les_buch": "p-4-2-Terz-Les_Buch",
          "les_stelle": "p-4-2-Terz-Les_Stelle",
          "resp1_0": "p-4-2-Terz-Resp1_0",
          "resp1_1": "p-4-2-Terz-Resp1_1",
          "oration": "p-4-2-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 322.0,
          "hymn_kl": 342.0,
          "ps_1": 137.0,
          "ps_2": 138.0,
          "ps_3": 153.0,
          "ant_1": "p-4-2-Vp-ant_1",
          "ant_2": "p-4-2-Vp-ant_2",
          "ant_3": "p-4-2-Vp-ant_3",
          "les_buch": "p-4-2-Vp-Les_Buch",
          "les_stelle": "p-4-2-Vp-Les_Stelle",
          "resp1_1": "p-4-2-Vp-Resp1_1",
          "resp1_2": "p-4-2-Vp-Resp1_2",
          "resp1_3": "p-4-2-Vp-Resp1_3",
          "ant_ev": "p-4-2-Vp-Ant_Ev",
          "bitten_e": "p-4-2-Vp-Bitten_E",
          "bitten_r": "p-4-2-Vp-Bitten_R",
          "bitten": "p-4-2-Vp-Bitten",
          "oration": "p-4-2-Vp-Oration"
        }
      },
      "3": {
        "Laudes": {
          "hymn_1": 213.0,
          "hymn_kl": 405.0,
          "ps_1": 108.0,
          "ps_2": 193.0,
          "ps_3": 146.0,
          "ant_1": "p-4-3-Ld-ant_1",
          "ant_2": "p-4-3-Ld-ant_2",
          "ant_3": "p-4-3-Ld-ant_3",
          "les_buch": "p-4-3-Ld-Les_Buch",
          "les_stelle": "p-4-3-Ld-Les_Stelle",
          "resp1_1": "p-4-3-Ld-Resp1_1",
          "resp1_2": "p-4-3-Ld-Resp1_2",
          "resp1_3": "p-4-3-Ld-Resp1_3",
          "ant_ev": "p-4-3-Ld-Ant_Ev",
          "bitten_e": "p-4-3-Ld-Bitten_E",
          "bitten_r": "p-4-3-Ld-Bitten_R",
          "bitten": "p-4-3-Ld-Bitten",
          "oration": "p-4-3-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 403.0,
          "hymn_nacht": 1402.0,
          "ps_1": 103.1,
          "ps_2": 103.2,
          "ps_3": 103.3,
          "ant_1": "p-4-3-Lh-ant_1",
          "ant_2": "p-4-3-Lh-ant_2",
          "ant_3": "p-4-3-Lh-ant_3",
          "resp0_0": "p-4-3-Lh-Resp0_0",
          "resp0_1": "p-4-3-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-4-3-Non-Les_Buch",
          "les_stelle": "p-4-3-Non-Les_Stelle",
          "resp1_0": "p-4-3-Non-Resp1_0",
          "resp1_1": "p-4-3-Non-Resp1_1",
          "oration": "p-4-3-Non-Oration"
        },
        "Sext": {
          "les_buch": "p-4-3-Sext-Les_Buch",
          "les_stelle": "p-4-3-Sext-Les_Stelle",
          "resp1_0": "p-4-3-Sext-Resp1_0",
          "resp1_1": "p-4-3-Sext-Resp1_1",
          "oration": "p-4-3-Sext-Oration"
        },
        "Terz": {
          "ps_1": 119.145,
          "ps_2": 94.1,
          "ps_3": 94.2,
          "ant_1": "p-4-3-Terz-ant_1",
          "ant_2": "p-4-3-Terz-ant_2",
          "ant_3": "p-4-3-Terz-ant_3",
          "les_buch": "p-4-3-Terz-Les_Buch",
          "les_stelle": "p-4-3-Terz-Les_Stelle",
          "resp1_0": "p-4-3-Terz-Resp1_0",
          "resp1_1": "p-4-3-Terz-Resp1_1",
          "oration": "p-4-3-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 323.0,
          "hymn_kl": 343.0,
          "ps_1": 139.1,
          "ps_2": 139.2,
          "ps_3": 154.0,
          "ant_1": "p-4-3-Vp-ant_1",
          "ant_2": "p-4-3-Vp-ant_2",
          "ant_3": "p-4-3-Vp-ant_3",
          "les_buch": "p-4-3-Vp-Les_Buch",
          "les_stelle": "p-4-3-Vp-Les_Stelle",
          "resp1_1": "p-4-3-Vp-Resp1_1",
          "resp1_2": "p-4-3-Vp-Resp1_2",
          "resp1_3": "p-4-3-Vp-Resp1_3",
          "ant_ev": "p-4-3-Vp-Ant_Ev",
          "bitten_e": "p-4-3-Vp-Bitten_E",
          "bitten_r": "p-4-3-Vp-Bitten_R",
          "bitten": "p-4-3-Vp-Bitten",
          "oration": "p-4-3-Vp-Oration"
        }
      },
      "4": {
        "Laudes": {
          "hymn_1": 214.0,
          "hymn_kl": 244.0,
          "ps_1": 143.0,
          "ps_2": 194.0,
          "ps_3": 147.1,
          "ant_1": "p-4-4-Ld-ant_1",
          "ant_2": "p-4-4-Ld-ant_2",
          "ant_3": "p-4-4-Ld-ant_3",
          "les_buch": "p-4-4-Ld-Les_Buch",
          "les_stelle": "p-4-4-Ld-Les_Stelle",
          "resp1_1": "p-4-4-Ld-Resp1_1",
          "resp1_2": "p-4-4-Ld-Resp1_2",
          "resp1_3": "p-4-4-Ld-Resp1_3",
          "ant_ev": "p-4-4-Ld-Ant_Ev",
          "bitten_e": "p-4-4-Ld-Bitten_E",
          "bitten_r": "p-4-4-Ld-Bitten_R",
          "bitten": "p-4-4-Ld-Bitten",
          "oration": "p-4-4-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 401.0,
          "hymn_nacht": 405.0,
          "ps_1": 44.1,
          "ps_2": 44.2,
          "ps_3": 44.3,
          "ant_1": "p-4-4-Lh-ant_1",
          "ant_2": "p-4-4-Lh-ant_2",
          "ant_3": "p-4-4-Lh-ant_3",
          "resp0_0": "p-4-4-Lh-Resp0_0",
          "resp0_1": "p-4-4-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-4-4-Non-Les_Buch",
          "les_stelle": "p-4-4-Non-Les_Stelle",
          "resp1_0": "p-4-4-Non-Resp1_0",
          "resp1_1": "p-4-4-Non-Resp1_1",
          "oration": "p-4-4-Non-Oration"
        },
        "Sext": {
          "les_buch": "p-4-4-Sext-Les_Buch",
          "les_stelle": "p-4-4-Sext-Les_Stelle",
          "resp1_0": "p-4-4-Sext-Resp1_0",
          "resp1_1": "p-4-4-Sext-Resp1_1",
          "oration": "p-4-4-Sext-Oration"
        },
        "Terz": {
          "ps_1": 119.153,
          "ps_2": 128.0,
          "ps_3": 129.0,
          "ant_1": "p-4-4-Terz-ant_1",
          "ant_2": "p-4-4-Terz-ant_2",
          "ant_3": "p-4-4-Terz-ant_3",
          "les_buch": "p-4-4-Terz-Les_Buch",
          "les_stelle": "p-4-4-Terz-Les_Stelle",
          "resp1_0": "p-4-4-Terz-Resp1_0",
          "resp1_1": "p-4-4-Terz-Resp1_1",
          "oration": "p-4-4-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 324.0,
          "hymn_kl": 344.0,
          "ps_1": 144.1,
          "ps_2": 144.2,
          "ps_3": 155.0,
          "ant_1": "p-4-4-Vp-ant_1",
          "ant_2": "p-4-4-Vp-ant_2",
          "ant_3": "p-4-4-Vp-ant_3",
          "les_buch": "p-4-4-Vp-Les_Buch",
          "les_stelle": "p-4-4-Vp-Les_Stelle",
          "resp1_1": "p-4-4-Vp-Resp1_1",
          "resp1_2": "p-4-4-Vp-Resp1_2",
          "resp1_3": "p-4-4-Vp-Resp1_3",
          "ant_ev": "p-4-4-Vp-Ant_Ev",
          "bitten_e": "p-4-4-Vp-Bitten_E",
          "bitten_r": "p-4-4-Vp-Bitten_R",
          "bitten": "p-4-4-Vp-Bitten",
          "oration": "p-4-4-Vp-Oration"
        }
      },
      "5": {
        "Laudes": {
          "hymn_1": 215.0,
          "hymn_kl": 245.0,
          "ps_1": 51.0,
          "ps_2": 195.0,
          "ps_3": 147.2,
          "ant_1": "p-4-5-Ld-ant_1",
          "ant_2": "p-4-5-Ld-ant_2",
          "ant_3": "p-4-5-Ld-ant_3",
          "les_buch": "p-4-5-Ld-Les_Buch",
          "les_stelle": "p-4-5-Ld-Les_Stelle",
          "resp1_1": "p-4-5-Ld-Resp1_1",
          "resp1_2": "p-4-5-Ld-Resp1_2",
          "resp1_3": "p-4-5-Ld-Resp1_3",
          "ant_ev": "p-4-5-Ld-Ant_Ev",
          "bitten_e": "p-4-5-Ld-Bitten_E",
          "bitten_r": "p-4-5-Ld-Bitten_R",
          "bitten": "p-4-5-Ld-Bitten",
          "oration": "p-4-5-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 402.0,
          "hymn_nacht": 2402.0,
          "ps_1": 78.1,
          "ps_2": 78.2,
          "ps_3": 78.3,
          "ant_1": "p-4-5-Lh-ant_1",
          "ant_2": "p-4-5-Lh-ant_2",
          "ant_3": "p-4-5-Lh-ant_3",
          "resp0_0": "p-4-5-Lh-Resp0_0",
          "resp0_1": "p-4-5-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-4-5-Non-Les_Buch",
          "les_stelle": "p-4-5-Non-Les_Stelle",
          "resp1_0": "p-4-5-Non-Resp1_0",
          "resp1_1": "p-4-5-Non-Resp1_1",
          "oration": "p-4-5-Non-Oration"
        },
        "Sext": {
          "les_buch": "p-4-5-Sext-Les_Buch",
          "les_stelle": "p-4-5-Sext-Les_Stelle",
          "resp1_0": "p-4-5-Sext-Resp1_0",
          "resp1_1": "p-4-5-Sext-Resp1_1",
          "oration": "p-4-5-Sext-Oration"
        },
        "Terz": {
          "ps_1": 119.161,
          "ps_2": 133.0,
          "ps_3": 140.0,
          "ant_1": "p-4-5-Terz-ant_1",
          "ant_2": "p-4-5-Terz-ant_2",
          "ant_3": "p-4-5-Terz-ant_3",
          "les_buch": "p-4-5-Terz-Les_Buch",
          "les_stelle": "p-4-5-Terz-Les_Stelle",
          "resp1_0": "p-4-5-Terz-Resp1_0",
          "resp1_1": "p-4-5-Terz-Resp1_1",
          "oration": "p-4-5-Terz-Oration"
        },
        "Vesper": {
          "hymn_1": 325.0,
          "hymn_kl": 345.0,
          "ps_1": 145.1,
          "ps_2": 145.2,
          "ps_3": 156.0,
          "ant_1": "p-4-5-Vp-ant_1",
          "ant_2": "p-4-5-Vp-ant_2",
          "ant_3": "p-4-5-Vp-ant_3",
          "les_buch": "p-4-5-Vp-Les_Buch",
          "les_stelle": "p-4-5-Vp-Les_Stelle",
          "resp1_1": "p-4-5-Vp-Resp1_1",
          "resp1_2": "p-4-5-Vp-Resp1_2",
          "resp1_3": "p-4-5-Vp-Resp1_3",
          "ant_ev": "p-4-5-Vp-Ant_Ev",
          "bitten_e": "p-4-5-Vp-Bitten_E",
          "bitten_r": "p-4-5-Vp-Bitten_R",
          "bitten": "p-4-5-Vp-Bitten",
          "oration": "p-4-5-Vp-Oration"
        }
      },
      "6": {
        "Laudes": {
          "hymn_1": 216.0,
          "hymn_kl": 246.0,
          "ps_1": 92.0,
          "ps_2": 196.0,
          "ps_3": 8.0,
          "ant_1": "p-4-6-Ld-ant_1",
          "ant_2": "p-4-6-Ld-ant_2",
          "ant_3": "p-4-6-Ld-ant_3",
          "les_buch": "p-4-6-Ld-Les_Buch",
          "les_stelle": "p-4-6-Ld-Les_Stelle",
          "resp1_1": "p-4-6-Ld-Resp1_1",
          "resp1_2": "p-4-6-Ld-Resp1_2",
          "resp1_3": "p-4-6-Ld-Resp1_3",
          "ant_ev": "p-4-6-Ld-Ant_Ev",
          "bitten_e": "p-4-6-Ld-Bitten_E",
          "bitten_r": "p-4-6-Ld-Bitten_R",
          "bitten": "p-4-6-Ld-Bitten",
          "oration": "p-4-6-Ld-Oration"
        },
        "Lesehore": {
          "hymn_1": 403.0,
          "hymn_nacht": 1402.0,
          "ps_1": 78.4,
          "ps_2": 78.5,
          "ps_3": 78.6,
          "ant_1": "p-4-6-Lh-ant_1",
          "ant_2": "p-4-6-Lh-ant_2",
          "ant_3": "p-4-6-Lh-ant_3",
          "resp0_0": "p-4-6-Lh-Resp0_0",
          "resp0_1": "p-4-6-Lh-Resp0_1"
        },
        "Non": {
          "les_buch": "p-4-6-Non-Les_Buch",
          "les_stelle": "p-4-6-Non-Les_Stelle",
          "resp1_0": "p-4-6-Non-Resp1_0",
          "resp1_1": "p-4-6-Non-Resp1_1",
          "oration": "p-4-6-Non-Oration"
        },
        "Sext": {
          "les_buch": "p-4-6-Sext-Les_Buch",
          "les_stelle": "p-4-6-Sext-Les_Stelle",
          "resp1_0": "p-4-6-Sext-Resp1_0",
          "resp1_1": "p-4-6-Sext-Resp1_1",
          "oration": "p-4-6-Sext-Oration"
        },
        "Terz": {
          "ps_1": 119.169,
          "ps_2": 45.1,
          "ps_3": 45.2,
          "ant_1": "p-4-6-Terz-ant_1",
          "ant_2": "p-4-6-Terz-ant_2",
          "ant_3": "p-4-6-Terz-ant_3",
          "les_buch": "p-4-6-Terz-Les_Buch",
          "les_stelle": "p-4-6-Terz-Les_Stelle",
          "resp1_0": "p-4-6-Terz-Resp1_0",
          "resp1_1": "p-4-6-Terz-Resp1_1",
          "oration": "p-4-6-Terz-Oration"
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
          "les_stelle": "11,33-36",
          "resp1_1": "Wie groß sind deine Werke, o Herr.",
          "resp1_2": "Mit Weisheit hast du sie alle geschaffen.",
          "resp1_3": "Erfüllt ist die Erde von deinen Geschöpfen.",
          "ant_ev": "<Prop>",
          "bitten_e": "Lasst uns dem ewigen Gott die Ehre erweisen und zu ihm beten:",
          "bitten_r": "Gott steh deinem Volke bei.",
          "bitten": "Führe die Menschen zum Glauben,^ldamit sie in dir das Heil finden.^pSchenke den Völkern der Erde Frieden;^lschaffe Recht den Unterdrückten.^pGib den Eheleuten deine Gnade,^lhilf ihnen, einander treu zu sein.^pVergilt den Menschen, die uns Gutes getan haben,^lund schenke ihnen das ewige Leben.^pHier können Fürbitten in besonderen Anliegen eingefügt werden.^pErbarme dich aller unserer Verstorbenen;^lnimm sie auf in die ewige Ruhe des Himmels.",
          "oration": "<Prop>"
        }
      }
    }
  },
  "w": {
    "each": {
      "each": {
        "Invitatorium": {
          "ant_0": "Christus ist uns geboren; kommt, wir beten ihn an."
        },
        "Laudes": {
          "hymn_1": 2201.0,
          "hymn_nacht": 0,
          "hymn_kl": 0,
          "resp1_1": "Der Herr hat kundgemacht sein Heil.",
          "resp1_2": "Halleluja, halleluja.",
          "resp1_3": "Vor den Augen der Völker hat er sein Walten enthüllt."
        },
        "Lesehore": {
          "hymn_1": 2401.0,
          "hymn_2": 2402.0,
          "hymn_nacht": 0,
          "hymn_kl": 0
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
          "hymn_nacht": 0,
          "hymn_kl": 0,
          "resp1_2": "Halleluja, halleluja.",
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
          "hymn_nacht": 0,
          "hymn_kl": 0,
          "resp1_2": "Halleluja, halleluja.",
          "resp1_3": "Sein Name wird ewig bestehen, seine Herrlichkeit erfüllt die Erde."
        },
        "Lesehore": {
          "hymn_1": 2403.0,
          "hymn_nacht": 0,
          "hymn_kl": 0
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
          "ant_0": "Das Geheimnis, das von Ewigkeit her verborgen war - heute wurde es kundgetan.",
          "ant_1": "",
          "ant_2": "",
          "ant_3": "",
          "resp1_0": "Er ist auf Erden erschienen.",
          "resp1_1": "Er hat mit den Menschen gelebt."
        },
        "Vesper": {
          "hymn_1": 2303.0,
          "hymn_nacht": 0,
          "hymn_kl": 0,
          "resp1_1": "In ihm sind gesegnet alle Völker der Erde.",
          "resp1_2": "Halleluja, halleluja.",
          "resp1_3": "Alle Stämme sollen ihn preisen."
        }
      }
    }
  }
};