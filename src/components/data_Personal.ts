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
        "Non": {
          "hymn_1": 1301.0
        },
        "Sext": {
          "hymn_1": 1301.0
        },
        "Terz": {
          "hymn_1": 1301.0
        }
      },
      "2": {
        "Non": {
          "hymn_1": 1302.0
        },
        "Sext": {
          "hymn_1": 1302.0
        },
        "Terz": {
          "hymn_1": 1302.0
        }
      },
      "3": {
        "Non": {
          "hymn_1": 1303.0
        },
        "Sext": {
          "hymn_1": 1303.0
        },
        "Terz": {
          "hymn_1": 1303.0
        }
      },
      "4": {
        "Non": {
          "hymn_1": 1304.0
        },
        "Sext": {
          "hymn_1": 1304.0
        },
        "Terz": {
          "hymn_1": 1304.0
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
          "hymn_1": 1305.0
        },
        "Sext": {
          "hymn_1": 1305.0
        },
        "Terz": {
          "hymn_1": 1305.0
        }
      }
    },
    "even": {
      "1": {
        "Non": {
          "hymn_1": 1306.0
        },
        "Sext": {
          "hymn_1": 1306.0
        },
        "Terz": {
          "hymn_1": 1306.0
        }
      },
      "2": {
        "Non": {
          "hymn_1": 1307.0
        },
        "Sext": {
          "hymn_1": 1307.0
        },
        "Terz": {
          "hymn_1": 1307.0
        }
      },
      "3": {
        "Non": {
          "hymn_1": 1310.0
        },
        "Sext": {
          "hymn_1": 1310.0
        },
        "Terz": {
          "hymn_1": 1310.0
        }
      },
      "4": {
        "Non": {
          "hymn_1": 1311.0
        },
        "Sext": {
          "hymn_1": 1311.0
        },
        "Terz": {
          "hymn_1": 1311.0
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
          "hymn_1": 1312.0
        },
        "Sext": {
          "hymn_1": 1312.0
        },
        "Terz": {
          "hymn_1": 1312.0
        }
      }
    }
  }
};