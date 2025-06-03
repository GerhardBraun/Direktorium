interface PersonalEntry {
  comm_1?: string;
  comm_2?: string;
  button?: string;
  farbe?: string;
  nominativ?: string;
  genitiv?: string;
  vokativ?: string;
  hymn_1?: number;
  hymn_2?: number;
  hymn_3?: number;
  hymn_kl?: number;
  ps_1?: number;
  ps_2?: number;
  ps_3?: number;
  ant0?: string;
  ant1?: string;
  ant2?: string;
  ant3?: string;
  versikel0?: string;
  versikel1?: string;
  les_buch?: string;
  les_stelle?: string;
  les_text?: string;
  resp0?: string;
  resp1?: string;
  resp2?: string;
  resp3?: string;
  patr_autor?: string;
  patr_werk?: string;
  patr_text?: string;
  patr_resp1?: string;
  patr_resp2?: string;
  patr_resp3?: string;
  antEv?: string;
  bitten_e?: string;
  bitten_r?: string;
  bitten?: string;
  oration?: string;
}

interface PersonalData {
  [season: string]: {
    [week: string]: {
      [day: string]: {
        [hour: string]: PersonalEntry;
      };
    };
  };
}

export const personalData = {
  "a": {
    "2": {
      "each": {
        "Invitatorium": {
          "ant0": "Fallt nieder vor dem Herrn, unserm König; er wird kommen und uns retten."
        }
      }
    },
    "3": {
      "each": {
        "Lesehore": {
          "hymn_1": 3112.0
        },
        "Vesper": {
          "hymn_1": 3142.0
        }
      }
    },
    "each": {
      "each": {
        "Invitatorium": {
          "ant0": "Den Herrn, den König, der kommen wird – kommt, wir beten ihn an!"
        }
      }
    },
    "last": {
      "each": {
        "Invitatorium": {
          "ant0": "Der Herr ist nahe – kommt, wir beten ihn an!"
        },
        "Lesehore": {
          "hymn_1": 3112.0
        },
        "Vesper": {
          "hymn_1": 3142.1
        }
      }
    }
  },
  "j": {
    "each": {
      "1": {
        "Lesehore": {
          "hymn_1": 2111.0
        }
      },
      "2": {
        "Lesehore": {
          "hymn_1": 2112.0
        }
      },
      "3": {
        "Lesehore": {
          "hymn_1": 3112.0
        }
      },
      "4": {
        "Lesehore": {
          "hymn_1": 2114.0
        }
      },
      "5": {
        "Lesehore": {
          "hymn_1": 3212.0
        }
      },
      "6": {
        "Lesehore": {
          "hymn_1": 2113.0
        }
      }
    },
    "even": {
      "1": {
        "Lesehore": {
          "hymn_1": 3229.0
        }
      },
      "2": {
        "Lesehore": {
          "hymn_1": 1306.0
        }
      },
      "3": {
        "Lesehore": {
          "hymn_1": 9002.0
        }
      },
      "4": {
        "Lesehore": {
          "hymn_1": 3942.0
        }
      },
      "5": {
        "Lesehore": {
          "hymn_1": 3952.0
        }
      },
      "6": {
        "Lesehore": {
          "hymn_1": 8101.4
        }
      }
    }
  },
  "k": {
    "1": {
      "each": {
        "Lesehore": {
          "hymn_1": 3212.0
        }
      }
    }
  },
  "o": {
    "3": {
      "each": {
        "Lesehore": {
          "hymn_1": 3412.0
        }
      }
    },
    "4": {
      "each": {
        "Laudes": {
          "hymn_1": 3422.0
        },
        "Lesehore": {
          "hymn_1": 3412.0
        },
        "Vesper": {
          "hymn_1": 3442.0
        }
      }
    },
    "5": {
      "each": {
        "Laudes": {
          "hymn_1": 3422.0
        },
        "Lesehore": {
          "hymn_1": 3413.0
        },
        "Vesper": {
          "hymn_1": 3442.0
        }
      }
    },
    "6": {
      "each": {
        "Laudes": {
          "hymn_1": 3422.0
        },
        "Lesehore": {
          "hymn_1": 3413.0
        },
        "Vesper": {
          "hymn_1": 3442.0
        }
      }
    },
    "last": {
      "each": {
        "Laudes": {
          "hymn_1": 0.0
        },
        "Lesehore": {
          "hymn_1": 0.0
        },
        "Vesper": {
          "hymn_1": 0.0
        }
      }
    }
  },
  "q": {
    "2": {
      "each": {
        "Invitatorium": {
          "ant0": "Verhärtet eure Herzen nicht, hört auf die Stimme des Herrn!"
        }
      }
    },
    "3": {
      "each": {
        "Invitatorium": {
          "ant0": "Verhärtet eure Herzen nicht, hört auf die Stimme des Herrn!"
        },
        "Vesper": {
          "hymn_1": 3342.0
        }
      }
    },
    "4": {
      "0": {
        "Terz": {
          "les_buch": "2°Kor",
          "les_stelle": "4,10-11",
          "les_text": "Immer tragen wir das Todesleiden Jesu an unserem Leib, damit auch das Leben Jesu an unserem Leib sichtbar wird. Denn immer werden wir, obgleich wir leben, um Jesu willen dem Tod ausgeliefert, damit auch das Leben Jesu an unserem sterblichen Fleisch offenbar wird."
        }
      },
      "1": {
        "Terz": {
          "les_buch": "Ez",
          "les_stelle": "33,10b.11b",
          "les_text": "Unsere Vergehen und unsere Sünden lasten auf uns, wir siechen ihretwegen dahin. Wie sollen wir da am Leben bleiben? So wahr ich lebe – Spruch Gottes des Herrn –, ich habe kein Gefallen am Tod des Schuldigen, sondern daran, dass er auf seinem Weg umkehrt und am Leben bleibt."
        }
      },
      "2": {
        "Terz": {
          "les_buch": "1°Kor",
          "les_stelle": "1,18-19",
          "les_text": "Das Wort vom Kreuz ist denen, die verloren gehen, Torheit; uns aber, die gerettet werden, ist es Gottes Kraft. Es heißt nämlich in der Schrift: Ich lasse die Weisheit der Weisen vergehen und die Klugheit der Klugen verschwinden."
        }
      },
      "3": {
        "Terz": {
          "les_buch": "1°Tim",
          "les_stelle": "2,4-6",
          "les_text": "Gott will, dass alle Menschen gerettet werden und zur Erkenntnis der Wahrheit gelangen. Denn: Einer ist Gott. Einer auch Mittler zwischen Gott und den Menschen: der Mensch Christus Jesus, der sich als Lösegeld hingegeben hat für alle, ein Zeugnis zur vorherbestimmten Zeit."
        }
      },
      "4": {
        "Terz": {
          "les_buch": "Hebr",
          "les_stelle": "4,14-15",
          "les_text": "Da wir einen erhabenen Hohenpriester haben, der die Himmel durchschritten hat, Jesus, den Sohn Gottes, lasst uns an dem Bekenntnis festhalten. Wir haben ja nicht einen Hohenpriester, der nicht mitfühlen könnte mit unserer Schwäche, sondern einen, der in allem wie wir in Versuchung geführt worden ist, aber nicht gesündigt hat."
        }
      },
      "5": {
        "Terz": {
          "les_buch": "Jes",
          "les_stelle": "53,2-3",
          "les_text": "Vor den Augen des Herrn wuchs er auf wie ein junger Spross, wie ein Wurzeltrieb aus trockenem Boden. Er hatte keine schöne und edle Gestalt, so dass wir ihn anschauen mochten. Er sah nicht so aus, dass wir Gefallen fanden an ihm. Er wurde verachtet und von den Menschen gemieden, ein Mann voller Schmerzen, mit Krankheit vertraut. Wie einer, vor dem man das Gesicht verhüllt, war er verachtet; wir schätzten ihn nicht."
        }
      },
      "6": {
        "Terz": {
          "les_buch": "1°Joh",
          "les_stelle": "1,8-9",
          "les_text": "Wenn wir sagen, dass wir keine Sünde haben, führen wir uns selbst in die Irre, und die Wahrheit ist nicht in uns. Wenn wir unsere Sünden bekennen, ist er treu und gerecht; er vergibt uns die Sünden und reinigt uns von allem Unrecht."
        }
      },
      "each": {
        "Invitatorium": {
          "ant0": "Verhärtet eure Herzen nicht, hört auf die Stimme des Herrn!"
        },
        "Terz": {
          "ant0": "Es war vor dem Paschafest. Jesus wusste, dass seine Stunde gekommen war. Und da er die Seinen liebte, liebte er sie bis zur Vollendung.",
          "ant1": "",
          "ant2": "",
          "ant3": "",
          "resp0": "Er wurde geopfert, weil er selbst es wollte.",
          "resp1": "Und tat seinen Mund nicht auf."
        },
        "Vesper": {
          "hymn_1": 3342.0
        }
      }
    },
    "5": {
      "each": {
        "Laudes": {
          "hymn_1": 3323.0
        },
        "Lesehore": {
          "hymn_1": 3313.0
        },
        "Vesper": {
          "hymn_1": 3343.0
        }
      }
    },
    "6": {
      "each": {
        "Invitatorium": {
          "ant0": ""
        },
        "Lesehore": {
          "hymn_1": 0.0
        }
      }
    },
    "each": {
      "each": {
        "Invitatorium": {
          "ant0": "Christus, der Herr, wurde für uns versucht und hat für uns gelitten; kommt, wir beten ihn an."
        },
        "Lesehore": {
          "hymn_1": 3312.0
        }
      }
    },
    "even": {
      "each": {
        "Lesehore": {
          "hymn_1": 3311.0
        }
      }
    }
  },
  "wt": {
    "each": {
      "0": {
        "Komplet": {
          "hymn_1": 2510.0
        }
      },
      "1": {
        "Komplet": {
          "hymn_1": 2511.0
        },
        "Non": {
          "hymn_1": 2901.0
        },
        "Sext": {
          "hymn_1": 2601.0
        },
        "Terz": {
          "hymn_1": 2301.0
        }
      },
      "2": {
        "Komplet": {
          "hymn_1": 2512.0
        },
        "Non": {
          "hymn_1": 2902.0
        },
        "Sext": {
          "hymn_1": 2602.0
        },
        "Terz": {
          "hymn_1": 2302.0
        }
      },
      "3": {
        "Komplet": {
          "hymn_1": 2513.0
        },
        "Non": {
          "hymn_1": 2903.0
        },
        "Sext": {
          "hymn_1": 2603.0
        },
        "Terz": {
          "hymn_1": 2303.0
        }
      },
      "4": {
        "Komplet": {
          "hymn_1": 2514.0
        },
        "Non": {
          "hymn_1": 2904.0
        },
        "Sext": {
          "hymn_1": 2604.0
        },
        "Terz": {
          "hymn_1": 2304.0
        }
      },
      "5": {
        "Komplet": {
          "hymn_1": 2515.0
        },
        "Non": {
          "hymn_1": 2502.0
        },
        "Sext": {
          "hymn_1": 3902.0
        },
        "Terz": {
          "hymn_1": 3418.0
        }
      },
      "6": {
        "Komplet": {
          "hymn_1": 2516.0
        },
        "Non": {
          "hymn_1": 2501.0
        },
        "Sext": {
          "hymn_1": 8325.0
        },
        "Terz": {
          "hymn_1": 3428.0
        }
      }
    },
    "even": {
      "1": {
        "Non": {
          "hymn_1": 9101.1
        },
        "Sext": {
          "hymn_1": 9101.1
        },
        "Terz": {
          "hymn_1": 9101.1
        }
      },
      "2": {
        "Non": {
          "hymn_1": 8222.0
        },
        "Sext": {
          "hymn_1": 8222.0
        },
        "Terz": {
          "hymn_1": 8222.0
        }
      },
      "3": {
        "Non": {
          "hymn_1": 8929.1
        },
        "Sext": {
          "hymn_1": 8929.1
        },
        "Terz": {
          "hymn_1": 8929.1
        }
      },
      "4": {
        "Non": {
          "hymn_1": 9201.0
        },
        "Sext": {
          "hymn_1": 9201.0
        },
        "Terz": {
          "hymn_1": 9201.0
        }
      },
      "5": {
        "Non": {
          "hymn_1": 3991.0
        },
        "Sext": {
          "hymn_1": 3991.0
        },
        "Terz": {
          "hymn_1": 3991.0
        }
      },
      "6": {
        "Non": {
          "hymn_1": 1020.0
        },
        "Sext": {
          "hymn_1": 1020.0
        },
        "Terz": {
          "hymn_1": 1020.0
        }
      }
    }
  }
};