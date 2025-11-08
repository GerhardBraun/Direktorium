
interface LiturgicalEntry {
  notes?: string[];
  application?: boolean;
  entry?: string;
  entry_supplement?: string;
  office?: string;
  d1?: LiturgicalEntry;
  d2?: LiturgicalEntry;
  n1?: LiturgicalEntry;
  n2?: LiturgicalEntry;
  c?: LiturgicalEntry;
  mar?: LiturgicalEntry;
  color?: string;
  mass?: string;
  alternative?: LiturgicalEntry;
  evening?: string;
  deceased?: string[];
  vigil?: LiturgicalEntry;
}

interface LiturgicalData {
  [diocese: string]: {
    [year: string]: {
      [month: string]: {
        [day: string]: LiturgicalEntry;
      };
    };
  };
}

export const liturgicalData: LiturgicalData =
{
  "Fulda": {
    "2025": {
      "7": {
        "1": {
          "entry": "Vom Wochentag – 13. Woche im Jahreskreis",
          "office": "",
          "notes": [],
          "color": "(g)",
          "mass": "¥fMs¥0f nach Wahl",
          "deceased": [
            " 13.°März°1868°in°Rüstungen (D^-37308°Schimberg)",
            " Friedhof°Horbach 14.°April°1880°in°Rogau (Rogów Opolski,°PL^-47^-300)",
            " Friedhof°Stolberg°(D^-06536) 22.°März°1892°in°Mehlsack (Pieniężno,°PL^-14^-520)",
            " Friedhof°Heiligenstadt 15.°August°1906°in°Danzig (Gdańsk,°PL^-80^-...)",
            " Friedhof°Lehnerz 20.°Dezember°1924°in°Wüstensachsen",
            " Friedhof°Hünfeld^-Malges 1.°Juli°1937°in°Bad°Liebwerda (Lázně°Libverda,°CZ^-463°62)",
            " Friedhof°Oberrodenbach 5.°Januar°1943°in°Hann.°Münden (D^-34346)"
          ],
          "n1": {
            "entry": "g°°Die°ersten°hll.°Märtyrer der Stadt°Rom / Hl.°Otto",
            "office": ""
          }
        },
        "2": {
          "entry": "Vom Wochentag – 13. Woche im Jahreskreis",
          "office": "",
          "notes": [],
          "color": "(g)",
          "mass": "¥fMs¥0f nach Wahl, Gl",
          "deceased": [
            " 15.°April°1874°in°Ershausen/Eichsfeld (D^-37308°Schimberg)",
            " Friedhof°Mühlen 18.°Februar°1903°in°Mühlen (D^-49439°Steinfeld)"
          ]
        },
        "3": {
          "entry": "^t^qfMariä Heimsuchung^n, ^fFest^n^o>°(RK; GK: 31. Mai)^0o>",
          "office": "^lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt",
          "notes": [],
          "color": "(g)",
          "mass": "¥fMs¥0f nach Wahl, Gl",
          "deceased": [
            " 28.°August°1872°in°Schwarza/Krs.°Schleusingen (D^-98547)",
            " 20.°Oktober°1882°in°Suttom (Sutom,°CZ^-411°15)",
            " Friedhof°Brehme°(D^-37339°Lindenberg/Eichsfeld) 23.°Dezember°1903°in°Hainzell"
          ]
        },
        "4": {
          "entry": "^t^qfHl. Thomas^n, Ap, ^fFest^n",
          "office": "^lTe Deum – Kl.°Hore:°Ant°u.°Ps°vom°Wt",
          "notes": [],
          "color": "(g)",
          "mass": "¥fMs¥0f nach Wahl",
          "deceased": [
            " 11.°April°1881°in°Dingelstädt",
            " Friedhof°am°Frauenberg,°Fulda 17.°September°1905°in°Bodenrode/Eichsfeld (D^-37308)"
          ]
        },
        "5": {
          "entry": "Vom Wochentag – 13. Woche im Jahreskreis",
          "office": "",
          "notes": [],
          "color": "(g)",
          "mass": "¥fMs¥0f nach Wahl",
          "deceased": [
            " Friedhof°Nunkirchen°(D^-66687) 13.°März°1933°in°Amöneburg",
            " Friedhof°Petersberg 13.°November°1920°in°Petersberg",
            " Friedhof°Frankfurt^-Bornheim 23.°März°1937°in°Minsk/Weißrussland"
          ],
          "n1": {
            "entry": "g°°Hl.°Ulrich / Hl.°Elisabeth°von°Portugal",
            "office": ""
          }
        },
        "6": {
          "entry": "Vom Wochentag – 14. Woche im Jahreskreis",
          "office": "",
          "notes": [],
          "color": "g",
          "mass": "¥fMs¥0f nach Wahl, Gl,°Cr",
          "deceased": [
            " 23.°März°1880°in°Kassel",
            " 12.°April°1897°in°Flieden",
            " Alter°Friedhof°Bad°Mergentheim 19.°Juni°1942°in°Hinzistobel (D^-88212°Ravensburg)"
          ],
          "n1": {
            "entry": "g°°Hl.°Antonius°Maria°Zaccaria",
            "office": ""
          }
        },
        "7": {
          "entry": "Vom Wochentag – 14. Woche im Jahreskreis",
          "office": "",
          "notes": [],
          "color": "(g)",
          "mass": "¥fMs¥0f nach Wahl",
          "deceased": [
            " 16.°März°1869°in°Hamburg",
            " 9.°März°1878°in°Krombach/Eichsfeld (D^-37308)",
            " Friedhof°Altenmittlau 29.°August°1917°in°Altenmittlau"
          ],
          "n1": {
            "entry": "g°°Hl.°Maria°Goretti",
            "office": ""
          }
        }
      }
    }
  }
};