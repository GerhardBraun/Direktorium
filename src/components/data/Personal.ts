interface PersonalEntry {
  comm_1?: string;
  comm_2?: string;
  name?: string;
  farbe?: string;
  hymn_1?: number;
  hymn_2?: number;
  hymn_3?: number;
  hymn_kl?: number;
  ps_1?: number;
  ps_2?: number;
  ps_3?: number;
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
  patr_autor?: string;
  patr_werk?: string;
  patr_text?: string;
  patr_resp1?: string;
  patr_resp2?: string;
  patr_resp3?: string;
  ant_ev?: string;
  bitten_e?: string;
  bitten_r?: string;
  bitten?: string;
  vu?: number;
  vu_lat?: number;
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
  "j": {
    "each": {
      "1": {
        "Lesehore": {
          "hymn_1": 2111.0
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
        "Lesehore": {
          "hymn_1": 2112.0
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
        "Lesehore": {
          "hymn_1": 3112.0
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
        "Lesehore": {
          "hymn_1": 2114.0
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
        "Lesehore": {
          "hymn_1": 3212.0
        },
        "Non": {
          "hymn_1": 2517.0
        },
        "Sext": {
          "hymn_1": 3902.0
        },
        "Terz": {
          "hymn_1": 3418.0
        }
      },
      "6": {
        "Lesehore": {
          "hymn_1": 2113.0
        },
        "Non": {
          "hymn_1": 2516.0
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
        "Lesehore": {
          "hymn_1": 3229.0
        },
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
        "Lesehore": {
          "hymn_1": 1306.0
        },
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
        "Lesehore": {
          "hymn_1": 9002.0
        },
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
        "Lesehore": {
          "hymn_1": 3942.0
        },
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
        "Lesehore": {
          "hymn_1": 3952.0
        },
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
        "Lesehore": {
          "hymn_1": 8101.4
        },
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