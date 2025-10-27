interface DeceasedPerson {
  year: number;
  birthdate: string;
  name: string;
  birth: string;
  grave: string;
  age: number;
}

interface DeceasedData {
  [month: number]: {
    [day: number]: DeceasedPerson[];
  };
}

export const deceasedData =  {
  "1": {
    "1": [
      {
        "year": 1958,
        "birthdate": "2178-03-20",
        "name": "Otto°Buch, Pfarrer°in°Rustenfelde",
        "birth": "20.°März°1878°in°Küllstedt (D¥-37359)",
        "grave": "",
        "age": 79
      },
      {
        "year": 2024,
        "birthdate": "2246-11-09",
        "name": "Erwin°Bednarczyk, Pfr.i.R., Duisburg",
        "birth": "9.°November°1946°in°Frankfurt°a.°M.",
        "grave": "Waldfriedhof°Duisburg",
        "age": 77
      }
    ],
    "2": [
      {
        "year": 1988,
        "birthdate": "2198-04-20",
        "name": "DDr.°Karl°Biba, Dr.°theol.°et°phil., OStR°i.R., Msgr., Horbach",
        "birth": "20.°April°1898°in°Horbach",
        "grave": "Friedhof°Horbach",
        "age": 89
      },
      {
        "year": 1989,
        "birthdate": "2209-09-13",
        "name": "Josef°Hambach, Pfr.i.R., Lehnerz",
        "birth": "13.°September°1909°in°Hofaschenbach",
        "grave": "Friedhof°Hofaschenbach",
        "age": 79
      },
      {
        "year": 1999,
        "birthdate": "2210-04-05",
        "name": "P.°Reinhold°Ohlert°OFMCap, Pfr.i.R., GR, Münster",
        "birth": "5.°April°1910°in°Rupperath/Eifel (D¥-53902°Bad°Münstereifel)",
        "grave": "Friedhof°des°Kapuzinerklosters°Münster",
        "age": 88
      },
      {
        "year": 2000,
        "birthdate": "2219-01-14",
        "name": "Josef°Köhler°(Leitmeritz/Fulda), Pfr.i.R., Neuhof",
        "birth": "14.°Januar°1919°in°Philippsgrund (Filipka,°CZ¥-463°31)",
        "grave": "Friedhof°Neuhof¥-Opperz",
        "age": 80
      },
      {
        "year": 2001,
        "birthdate": "2215-04-01",
        "name": "Friedrich°Bromm, Pfr.i.R., Amöneburg¥-Erfurtshausen",
        "birth": "1.°April°1915°in°Himmelsberg",
        "grave": "Friedhof°Himmelsberg",
        "age": 85
      },
      {
        "year": 2004,
        "birthdate": "2214-07-18",
        "name": "P.°Josef°Blumör°OMI, GR, Hünfeld",
        "birth": "18.°Juli°1914°in°Hainstadt (D¥-63512°Hainburg)",
        "grave": "Klosterfriedhof°Hünfeld",
        "age": 89
      }
    ],
    "3": [
      {
        "year": 1958,
        "birthdate": "2199-02-06",
        "name": "Richard°Feussner, Pfarrer°in°Blankenau",
        "birth": "6.°Februar°1899°in°Emsdorf",
        "grave": "",
        "age": 58
      },
      {
        "year": 1960,
        "birthdate": "2178-07-24",
        "name": "Emil°Ruez, Dechant, Pfarrer°in°Großenlüder",
        "birth": "24.°Juli°1878°in°Amöneburg",
        "grave": "",
        "age": 81
      },
      {
        "year": 1969,
        "birthdate": "2203-12-28",
        "name": "Oskar°Diel, Ehrendechant, Stadtpfarrer°in°Hanau",
        "birth": "28.°Dezember°1903°in°Bermbach",
        "grave": "",
        "age": 65
      },
      {
        "year": 1979,
        "birthdate": "2211-04-20",
        "name": "Josef°Suchanek°(Olmütz), Pfarrer°in°Mottgers",
        "birth": "20.°April°1911°in°Meltsch (Melč,°CZ¥-787°84)",
        "grave": "Friedhof°Mottgers",
        "age": 67
      },
      {
        "year": 2017,
        "birthdate": "2219-12-02",
        "name": "Josef°Mönninger, Prälat, Domkapitular°i.R., Ehrendomkapitular°von°Plymouth/GB, Fulda",
        "birth": "2.°Dezember°1919°in°Rüdigheim",
        "grave": "Friedhof°Rüdigheim",
        "age": 97
      }
    ],
    "4": [
      {
        "year": 1940,
        "birthdate": "2185-02-10",
        "name": "Kaspar°Schulte, Pfarrer°in°Rudolstadt",
        "birth": "10.°Februar°1885°in°Eickeloh (D¥-29693)",
        "grave": "",
        "age": 54
      },
      {
        "year": 1952,
        "birthdate": "2199-08-20",
        "name": "Johannes°Fischbach°(Prag), Pfr.i.R., Zierenberg",
        "birth": "20.°August°1899°in°Eger (Cheb,°CZ¥-350°02)",
        "grave": "",
        "age": 52
      },
      {
        "year": 1958,
        "birthdate": "2178-07-18",
        "name": "Otto°Hellweg, Pfr.i.R., Erfurt",
        "birth": "18.°Juli°1878°in°Arnsberg/Westfalen",
        "grave": "",
        "age": 79
      },
      {
        "year": 1963,
        "birthdate": "2193-01-03",
        "name": "Karl°Medler, Dechant, Pfarrer°in°Hünfeld",
        "birth": "3.°Januar°1893°in°Rodges",
        "grave": "",
        "age": 70
      },
      {
        "year": 1969,
        "birthdate": "2214-07-09",
        "name": "Eduard°Preiß°(Leitmeritz), Pfarrer°in°Niedersachswerfen",
        "birth": "9.°Juli°1914°in°Frankstadt (Nový°Malín,°CZ¥-788°0.)",
        "grave": "",
        "age": 54
      },
      {
        "year": 1974,
        "birthdate": "2206-05-01",
        "name": "P.°Leo°Rodenbeck°SDB, Pfarrer°in°Sannerz",
        "birth": "1.°Mai°1906°in°Liemke (D¥-33758°Schloß°Holte¥-Stukenbrock)",
        "grave": "Friedhof°Sannerz",
        "age": 67
      },
      {
        "year": 1974,
        "birthdate": "2216-02-04",
        "name": "Wilhelm°Wandzioch°(Breslau), Dechant, Pfarrer°in°Bad°Frankenhausen",
        "birth": "4.°Februar°1916°in°Hohenlinde (Łagiewniki,°PL¥-41¥-9..°Bytom)",
        "grave": "Friedhof°Bad°Frankenhausen",
        "age": 57
      },
      {
        "year": 1976,
        "birthdate": "2204-04-01",
        "name": "P.°Franz°Pietsch°OMI, Pfr.i.R., GR, Bad°Frankenhausen",
        "birth": "1.°April°1904°in°Leuber (Lubrza,°PL¥-48¥-231)",
        "grave": "Dresden",
        "age": 71
      }
    ],
    "5": [
      {
        "year": 1930,
        "birthdate": "2169-02-06",
        "name": "Johannes°Pfeifer, Pfr.i.R., Wirtheim",
        "birth": "6.°Februar°1869°in°Bad°Orb",
        "grave": "",
        "age": 60
      },
      {
        "year": 1950,
        "birthdate": "2199-09-15",
        "name": "Wilhelm°Walter°(Leitmeritz), Seelsorger°in°Dittlofrod",
        "birth": "15.°September°1899°in°Mildenau (Luh°pod°Smrkem,°CZ¥-463°61)",
        "grave": "",
        "age": 50
      },
      {
        "year": 1982,
        "birthdate": "2220-02-12",
        "name": "Dr.°Johannes°Tenzler°(Breslau), Prof., Fulda",
        "birth": "12.°Februar°1920°in°Breslau (Wrocław,°PL¥-50¥-...)",
        "grave": "Fulda",
        "age": 61
      },
      {
        "year": 1997,
        "birthdate": "2222-06-04",
        "name": "Dr.°Wolfgang°Klemp°(Schneidemühl/Fulda), Pfr.i.R., Apostol.°Protonotar, Apost.°Visitator für Priester und Gläubige aus der Freien°Prälatur°Schneidemühl, Fulda",
        "birth": "4.°Juni°1922°in°Schneidemühl (Piła,°PL¥-64¥-920)",
        "grave": "Friedhof°am°Florenberg",
        "age": 74
      },
      {
        "year": 2000,
        "birthdate": "2212-07-21",
        "name": "Josef°Uhl, Pfr.i.R., GR, Eichenzell¥-Rönshausen",
        "birth": "21.°Juli°1912°in°Fulda",
        "grave": "Friedhof°Rönshausen",
        "age": 87
      },
      {
        "year": 2002,
        "birthdate": "2237-04-18",
        "name": "Elmar°Löhr, Pfarrer°in°Eschwege",
        "birth": "18.°April°1937°in°Fulda",
        "grave": "Friedhof°Eschwege",
        "age": 64
      }
    ],
    "6": [
      {
        "year": 1962,
        "birthdate": "2191-09-20",
        "name": "Aloys°Falkenhan, Dechant, Pfarrer°in°Eschwege",
        "birth": "20.°September°1891°in°Oberufhausen",
        "grave": "",
        "age": 70
      },
      {
        "year": 1962,
        "birthdate": "2200-10-17",
        "name": "P.°Bonifatius°Hertel°OFMCap, Pfarrkurat°in°Weißensee/Thür.",
        "birth": "17.°Oktober°1900°in°Biblis (D¥-68647)",
        "grave": "",
        "age": 61
      },
      {
        "year": 1971,
        "birthdate": "2204-06-27",
        "name": "P.°Heinrich°Eidens°SVD, Prosynodalrichter°in°Fulda",
        "birth": "27.°Juni°1904°in°Essen",
        "grave": "Friedhof°der°Steyler°Missionare,°Bad°Driburg",
        "age": 66
      },
      {
        "year": 2016,
        "birthdate": "2223-02-03",
        "name": "Rudolf°Bergmann, Pfr.i.R., GR, Zierenberg",
        "birth": "3.°Februar°1923°in°Großauheim",
        "grave": "Friedhof°Zierenberg",
        "age": 92
      }
    ],
    "7": [
      {
        "year": 1935,
        "birthdate": "2168-12-27",
        "name": "Hermann°Lovis, Pfarrer°in°Kleinbartloff",
        "birth": "27.°Dezember°1868°in°Heiligenstadt",
        "grave": "",
        "age": 66
      }
    ],
    "8": [
      {
        "year": 1931,
        "birthdate": "2175-02-05",
        "name": "DDr.°Franz°Josef°Müller, Dr.°iur.°utr., Prälat, Domkapitular, Generalvikar, Fulda",
        "birth": "5.°Februar°1875°in°Fulda",
        "grave": "",
        "age": 55
      },
      {
        "year": 1948,
        "birthdate": "2183-06-05",
        "name": "Hermann°Kühn, Pfarrer°in°Ecklingerode",
        "birth": "5.°Juni°1883°in°Westhausen (D¥-37308)",
        "grave": "",
        "age": 64
      },
      {
        "year": 1956,
        "birthdate": "2180-04-18",
        "name": "Raimund°Vogel°(Leitmeritz), Pfr.i.R., Bad°Orb",
        "birth": "18.°April°1880°in°Blottendorf (Polevsko,°CZ¥-471°16)",
        "grave": "",
        "age": 75
      },
      {
        "year": 1988,
        "birthdate": "2214-02-10",
        "name": "Norbert°Bartsch°(Prag/Glatz), Pfr.i.R., Ringleben/Kyffhäuser",
        "birth": "10.°Februar°1914°in°Rengersdorf (Krosnowice,°PL¥-57¥-362°Kłodzko)",
        "grave": "Friedhof°Erfurt",
        "age": 73
      },
      {
        "year": 1997,
        "birthdate": "2225-09-10",
        "name": "Otto°Rachhals, Diakon, Maintal¥-Bischofsheim",
        "birth": "10.°September°1925°in°Frankfurt°a.°M.",
        "grave": "Friedhof°Bischofsheim",
        "age": 71
      },
      {
        "year": 2000,
        "birthdate": "2216-03-28",
        "name": "Emil°Sapletal°(Olmütz/Fulda), Pfr.i.R., GR, Bad°Hersfeld",
        "birth": "28.°März°1916°in°Neutitschein (Nový°Jičín,°CZ¥-741°01)",
        "grave": "Hauptfriedhof°Frauenberg,°Bad°Hersfeld",
        "age": 83
      }
    ],
    "9": [
      {
        "year": 1965,
        "birthdate": "2184-07-13",
        "name": "Alfons°Riedel°(Breslau), Pfr.i.R., Spahl/Rhön",
        "birth": "13.°Juli°1884°in°Breslau (Wrocław,°PL¥-50¥-...)",
        "grave": "",
        "age": 80
      },
      {
        "year": 1974,
        "birthdate": "2216-07-13",
        "name": "Anton°Müller, Pfarrer°in°Magdlos",
        "birth": "13.°Juli°1916°in°Rönshausen",
        "grave": "Friedhof°Magdlos",
        "age": 57
      },
      {
        "year": 1994,
        "birthdate": "2207-11-09",
        "name": "Wolfgang°Döring, Pfr.i.R., GR, Treffurt",
        "birth": "9.°November°1907°in°Treffurt (D¥-99830)",
        "grave": "Friedhof°Effelder",
        "age": 86
      },
      {
        "year": 1999,
        "birthdate": "2231-05-04",
        "name": "P.°Bernward°Ziwes°OFM, GR, Ulm",
        "birth": "4.°Mai°1931°in°Saarlouis (D¥-66740)",
        "grave": "",
        "age": 67
      }
    ],
    "10": [
      {
        "year": 1929,
        "birthdate": "2168-05-27",
        "name": "Hermann°Malkmus, Pfr.i.R., Gersfeld",
        "birth": "27.°Mai°1868°in°Hanau",
        "grave": "",
        "age": 60
      },
      {
        "year": 1988,
        "birthdate": "2209-01-08",
        "name": "Johannes°Arnau°(Danzig), Pfr.i.R., Deuna/Eichsfeld",
        "birth": "8.°Januar°1909°in°Schneidemühl (Piła,°PL¥-64¥-920)",
        "grave": "Friedhof°Deuna",
        "age": 79
      },
      {
        "year": 1996,
        "birthdate": "2206-08-09",
        "name": "Richard°Burkard, Pfr.i.R., GR, Waltershausen¥-Winterstein",
        "birth": "9.°August°1906°in°Hilders",
        "grave": "",
        "age": 89
      },
      {
        "year": 2002,
        "birthdate": "2212-05-26",
        "name": "Franz°Czotscher°(Budweis/Fulda), Pfr.i.R., GR, Stadtallendorf",
        "birth": "26.°Mai°1912°in°Ebensee (A¥-4802)",
        "grave": "Friedhof°Stadtallendorf",
        "age": 89
      }
    ],
    "11": [
      {
        "year": 1960,
        "birthdate": "2189-05-31",
        "name": "Joseph°Scholle, Pfr.i.R., Bad°Sassendorf",
        "birth": "31.°Mai°1889°in°Bad°Pyrmont (D¥-31812)",
        "grave": "",
        "age": 70
      },
      {
        "year": 1980,
        "birthdate": "2199-09-19",
        "name": "Gottfried°Köhler, Pfr.i.R., GR, Diedorf",
        "birth": "19.°September°1899°in°Kreuzebra¥-Steinhagen (D¥-37351°Dingelstädt)",
        "grave": "Friedhof°Diedorf°(D¥-36466°Dermbach)",
        "age": 80
      }
    ],
    "12": [
      {
        "year": 1948,
        "birthdate": "2190-09-24",
        "name": "Karl°Wess, Pfarrer°in°Schröck",
        "birth": "24.°September°1890°in°Hauswurz",
        "grave": "",
        "age": 57
      },
      {
        "year": 1956,
        "birthdate": "2204-02-16",
        "name": "Gregor°Wiesner°(Breslau), Pfarrer°in°Berga/Elster",
        "birth": "16.°Februar°1904°in°Schönbrunnᵒ",
        "grave": "",
        "age": 51
      },
      {
        "year": 1959,
        "birthdate": "2182-11-24",
        "name": "Heinrich°Helbig, Pfr.i.R., Mengelrode",
        "birth": "24.°November°1882°in°Deuna (D¥-37355°Niederorschel)",
        "grave": "",
        "age": 76
      },
      {
        "year": 1973,
        "birthdate": "2184-09-29",
        "name": "Emil°Goldbach, Pfr.i.R., GR, Ehrendechant, Fulda",
        "birth": "29.°September°1884°in°Gackenhof",
        "grave": "Friedhof°Lütter",
        "age": 88
      },
      {
        "year": 2018,
        "birthdate": "2232-04-29",
        "name": "Wilhelm°Acker, Pfr.i.R., Großkrotzenburg",
        "birth": "29.°April°1932°in°Gelnhausen",
        "grave": "Neuer°Friedhof°Großkrotzenburg",
        "age": 85
      },
      {
        "year": 2023,
        "birthdate": "2230-11-17",
        "name": "Reinhold°Hartmann, Pfr.i.R., GR, Fulda",
        "birth": "17.°November°1930°in°Fulda",
        "grave": "Friedhof°Petersberg",
        "age": 92
      }
    ],
    "13": [
      {
        "year": 1957,
        "birthdate": "2179-07-17",
        "name": "Heinrich°Dicke, Pfr.i.R., Dipperz",
        "birth": "17.°Juli°1879°in°Volkmarsen",
        "grave": "",
        "age": 77
      },
      {
        "year": 1963,
        "birthdate": "2181-11-27",
        "name": "Andreas°Führ, Pfr.i.R., Liebhards/Krs.°Fulda",
        "birth": "27.°November°1881°in°Kehrenbach",
        "grave": "",
        "age": 81
      },
      {
        "year": 1979,
        "birthdate": "2202-02-15",
        "name": "Aloys°Grösch, Superior°i.R., Msgr., GR, Fulda",
        "birth": "15.°Februar°1902°in°Steinwand",
        "grave": "Fulda",
        "age": 76
      },
      {
        "year": 1980,
        "birthdate": "2183-09-12",
        "name": "Johannes°Schulz°(Schneidemühl), StR°i.R., GR, Bad°Soden",
        "birth": "12.°September°1883°in°Schwetzkau (Święciechowa,°PL¥-64¥-115)",
        "grave": "Friedhof°Bad°Soden",
        "age": 96
      },
      {
        "year": 2002,
        "birthdate": "2226-09-26",
        "name": "Karl°Eufinger, Pfr.i.R., GR, Kirchhain",
        "birth": "26.°September°1926°in°Kirchhain",
        "grave": "Friedhof°Kirchhain",
        "age": 75
      },
      {
        "year": 2003,
        "birthdate": "2217-07-30",
        "name": "Klemens°Zelazny°(Schneidemühl/Fulda), Pfr.i.R., Konsistorialrat, Fulda",
        "birth": "30.°Juli°1917°in°Konitz (Chojnice,°PL¥-89¥-6..)",
        "grave": "Friedhof°Petersberg¥-Steinhaus",
        "age": 85
      }
    ],
    "14": [
      {
        "year": 1942,
        "birthdate": "2168-03-21",
        "name": "August°Ebel, Pfr.i.R., Neustadt",
        "birth": "21.°März°1868°in°Ungedanken",
        "grave": "",
        "age": 73
      },
      {
        "year": 1942,
        "birthdate": "2172-06-16",
        "name": "Anton°Ley, Dechant, Pfarrer°in°Hünfeld",
        "birth": "16.°Juni°1872°in°Geisa",
        "grave": "",
        "age": 69
      },
      {
        "year": 1942,
        "birthdate": "2184-06-18",
        "name": "Konrad°Trageser, Pfarrer°in°Marbach, gestorben°im°KZ°Dachau",
        "birth": "18.°Juni°1884°in°Altenmittlau",
        "grave": "",
        "age": 57
      },
      {
        "year": 1964,
        "birthdate": "2190-04-13",
        "name": "Richard°Koch, Dechant, Pfarrer°in°Birkungen/Eichsfeld",
        "birth": "13.°April°1890°in°Schweighof (Gut Schwaighof,°D¥-86695°Allmannshofen)",
        "grave": "",
        "age": 73
      }
    ],
    "15": [
      {
        "year": 1943,
        "birthdate": "2182-03-17",
        "name": "Aloys°Bilz, Pfarrer°in°Hosenfeld",
        "birth": "17.°März°1882°in°Somborn",
        "grave": "",
        "age": 60
      },
      {
        "year": 1951,
        "birthdate": "2184-02-06",
        "name": "Joseph°Wagner, Pfr.i.R., Martinfeld",
        "birth": "6.°Februar°1884°in°Kleinbartloff (D¥-37355°Niederorschel)",
        "grave": "",
        "age": 66
      }
    ],
    "16": [
      {
        "year": 1975,
        "birthdate": "2214-09-20",
        "name": "Andreas°Portner°(Prag), Pfr.i.R., Dipperz¥-Armenhof",
        "birth": "20.°September°1914°in°Muttersdorf (Mutěnín,°CZ¥-345°25)",
        "grave": "Friedhof°Elters",
        "age": 60
      },
      {
        "year": 1992,
        "birthdate": "2208-01-20",
        "name": "P.°Florentin°Vogt°OFM, Pfr.i.R., GR, Hülfensberg",
        "birth": "20.°Januar°1908°in°Oestereiden (D¥-59602)",
        "grave": "Friedhof°am°Hülfensberg",
        "age": 83
      },
      {
        "year": 1998,
        "birthdate": "2217-09-25",
        "name": "P.°Urban°Westerwoudt°OFMCap, Bad°Mergentheim",
        "birth": "25.°September°1917°in°Arnheim (NL¥-68..)",
        "grave": "Alter°Friedhof°Bad°Mergentheim",
        "age": 80
      },
      {
        "year": 2008,
        "birthdate": "2224-12-16",
        "name": "Dr.°Lothar°Rudolph°(Paderborn/Fulda), Pfr.i.R., Fulda",
        "birth": "16.°Dezember°1924°in°Breitenworbis (D¥-37339)",
        "grave": "Zentralfriedhof°Fulda",
        "age": 83
      }
    ],
    "17": [
      {
        "year": 1933,
        "birthdate": "2194-08-26",
        "name": "Karl°Alexander°Ebert, Konviktassistent°in°Fulda",
        "birth": "26.°August°1894°in°Geisa",
        "grave": "",
        "age": 38
      },
      {
        "year": 1981,
        "birthdate": "2209-03-23",
        "name": "¥fHugo°Aufderbeck¥0f, Bischof, Apostol.°Administrator°in°Erfurt",
        "birth": "23.°März°1909°in°Hellefeld/Sauerland (D¥-59846°Sundern)",
        "grave": "im°Lichthof°des°Domkreuzgangs°in°Erfurt",
        "age": 71
      },
      {
        "year": 2002,
        "birthdate": "2225-06-19",
        "name": "Wilhelm°Eberl, Pfr.i.R., OStR°i.K.i.R., Kassel",
        "birth": "19.°Juni°1925°in°Hanau",
        "grave": "Friedhof°Karben¥-Rendel°(D¥-61184)",
        "age": 76
      },
      {
        "year": 2017,
        "birthdate": "2227-04-11",
        "name": "Alois°Krause°(Limburg), Pfr.i.R., Fulda",
        "birth": "11.°April°1927°in°Ziegenhals/Krs.°Neisse (Głuchołazy,°PL¥-48¥-34.)",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 89
      },
      {
        "year": 2021,
        "birthdate": "2228-08-20",
        "name": "Bernhard°Möller, Pfr.i.R., GR, Hünfeld",
        "birth": "20.°August°1928°in°Borsch",
        "grave": "Friedhof°Eiterfeld¥-Wölf",
        "age": 92
      }
    ],
    "18": [
      {
        "year": 1938,
        "birthdate": "2181-08-18",
        "name": "Heinrich°Fiege, Pfarrer°in°Mittelkalbach",
        "birth": "18.°August°1881°in°Geismar/Eichsfeld (D¥-37308)",
        "grave": "",
        "age": 56
      },
      {
        "year": 1948,
        "birthdate": "2177-06-26",
        "name": "Georg°Hauptfleisch°(Breslau), Pfr.i.R., Schwarzbach",
        "birth": "26.°Juni°1877°in°Bolkenhain/Krs.°Jauer (Bolków,°PL¥-59¥-420)",
        "grave": "",
        "age": 70
      },
      {
        "year": 1950,
        "birthdate": "2168-11-03",
        "name": "Heinrich°Funke, Pfr.i.R., Bochum¥-Riemke",
        "birth": "3.°November°1868°in°Bochum¥-Riemke",
        "grave": "",
        "age": 81
      },
      {
        "year": 1966,
        "birthdate": "2206-12-14",
        "name": "Joseph°Wand, Pfarrer°in°Silberhausen/Eichsfeld",
        "birth": "14.°Dezember°1906°in°Holungen/Eichsfeld (D¥-37345°Sonnenstein)",
        "grave": "",
        "age": 59
      }
    ],
    "19": [
      {
        "year": 2025,
        "birthdate": "2242-04-15",
        "name": "Albert°Köchling, Pfr.i.R., Marburg",
        "birth": "15.°April°1942°in°Volkmarsen",
        "grave": "Hauptfriedhof°am°Rotenberg,°Marburg",
        "age": 82
      }
    ],
    "20": [
      {
        "year": 1967,
        "birthdate": "2206-05-13",
        "name": "Gerhard°Matheis°(Breslau), Pfr.i.R., Lütter",
        "birth": "13.°Mai°1906°in°Saarau (Strzegom,°PL¥-58¥-150)",
        "grave": "",
        "age": 60
      },
      {
        "year": 1971,
        "birthdate": "2207-03-28",
        "name": "Emil°Schwalbach, Pfarrer°in°Geismar/Rhön",
        "birth": "28.°März°1907°in°Oberufhausen",
        "grave": "Friedhof°Geismar/Rhön",
        "age": 63
      },
      {
        "year": 1977,
        "birthdate": "2209-04-13",
        "name": "P.°Petrus°Pollak°OT, Pfarrer°in°Wetter",
        "birth": "13.°April°1909°in°Neuzechsdorf (Nové°Těchanovice,°CZ¥-747°43°Vítkov)",
        "grave": "Darmstadt",
        "age": 67
      }
    ],
    "21": [
      {
        "year": 1940,
        "birthdate": "2188-02-21",
        "name": "Wilhelm°Rose, Pfarrer°in°Hausen",
        "birth": "21.°Februar°1888°in°Stendal (D¥-39576)",
        "grave": "",
        "age": 51
      },
      {
        "year": 1946,
        "birthdate": "2196-03-06",
        "name": "Joseph°Sauer, Dechant, Pfarrer°in°Kirchhasel",
        "birth": "6.°März°1896°in°Hanau",
        "grave": "",
        "age": 49
      },
      {
        "year": 1970,
        "birthdate": "2193-11-09",
        "name": "Johann°Urner°(Königgrätz), Pfr.i.R., GR, Neuhof",
        "birth": "9.°November°1893°in°Wichstadt (Mladkov,°CZ¥-561°67)",
        "grave": "Friedhof°Neuhof",
        "age": 76
      },
      {
        "year": 1973,
        "birthdate": "2211-10-28",
        "name": "Erich°Hansmann, Pfarrer°in°Pfaffschwende/Eichsfeld",
        "birth": "28.°Oktober°1911°in°Weißenborn¥-Lüderode (D¥-37345°Sonnenstein)",
        "grave": "Friedhof°Pfaffschwende",
        "age": 61
      },
      {
        "year": 1976,
        "birthdate": "2206-01-16",
        "name": "Maximilian°Völkl°(Leitmeritz), Pfr.i.R., Mackenzell",
        "birth": "16.°Januar°1906°in°Holtschitz (Holešice,°CZ¥-434°01)",
        "grave": "Friedhof°Kirchhasel",
        "age": 70
      },
      {
        "year": 1978,
        "birthdate": "2188-01-05",
        "name": "Ferdinand°von°Prondzynski°(Breslau), Pfr.i.R., Eisenach",
        "birth": "5.°Januar°1888°in°Groschowitz (Groszowice,°PL¥-49¥-120)",
        "grave": "Eisenach",
        "age": 90
      },
      {
        "year": 1985,
        "birthdate": "2202-10-18",
        "name": "Medard°Knauf, Pfr.i.R., Burghaun",
        "birth": "18.°Oktober°1902°in°Borsch",
        "grave": "Friedhof°Burghaun",
        "age": 82
      },
      {
        "year": 2002,
        "birthdate": "2228-01-20",
        "name": "P.°Dr.°Leonard°Oreč°OFM, GR, Zagreb/Kroatien",
        "birth": "20.°Januar°1928°in°Posuški°Gradac (BIH¥-88240)",
        "grave": "Friedhof°Posušje",
        "age": 74
      },
      {
        "year": 2003,
        "birthdate": "2271-01-27",
        "name": "Godwin°Sixtus°Ekuojo°Onuh°(Idah/Nigeria), Fulda",
        "birth": "27.°Januar°1971°in°Ogugu/Nigeria (NGR¥-270109)",
        "grave": "in°Nigeria",
        "age": 31
      },
      {
        "year": 2004,
        "birthdate": "2221-12-09",
        "name": "Alois°Bilo, Pfr.i.R., GR, Fulda",
        "birth": "9.°Dezember°1921°in°Braubach/Rhein (D¥-56338)",
        "grave": "Friedhof°Biebergemünd¥-Kassel",
        "age": 82
      },
      {
        "year": 2004,
        "birthdate": "2232-01-23",
        "name": "P.°Drs.°Johannes°Gerardus°Donkers°OSC, Pfarrer°in°Trendelburg",
        "birth": "23.°Januar°1932°in°Erp (NL¥-5469°Meierijstad)",
        "grave": "Friedhof°Uden/Niederlande",
        "age": 71
      },
      {
        "year": 2010,
        "birthdate": "2220-05-23",
        "name": "Norbert°Waclawek°(Breslau/Fulda), Pfr.i.R., Msgr., Fulda",
        "birth": "23.°Mai°1920°in°Beuthen (Bytom,°PL¥-41¥-9..)",
        "grave": "Friedhof°Freigericht¥-Altenmittlau",
        "age": 89
      }
    ],
    "22": [
      {
        "year": 1963,
        "birthdate": "2196-01-06",
        "name": "Paul°Sauerbier, Pfarrer°in°Künzell",
        "birth": "6.°Januar°1896°in°Roßbach",
        "grave": "",
        "age": 67
      },
      {
        "year": 1986,
        "birthdate": "2228-05-19",
        "name": "P.°Cyrill°Eisermann°OFM, Kaplan°in°Kirchhain",
        "birth": "19.°Mai°1928°in°Emmanuelssegen (Murcki,°PL¥-40¥-749°Katowice)",
        "grave": "Friedhof°Fulda",
        "age": 57
      }
    ],
    "23": [
      {
        "year": 1945,
        "birthdate": "2174-04-29",
        "name": "DDr.°Gregor°Richter, Prof., Dr.°theol.°et°phil., Msgr., Domkapitular, Fulda",
        "birth": "29.°April°1874°in°Grüsselbach",
        "grave": "",
        "age": 70
      },
      {
        "year": 1949,
        "birthdate": "2173-05-24",
        "name": "Augustin°Eckhardt, Pfr.i.R., Beuren/Eichsfeld",
        "birth": "24.°Mai°1873°in°Beuren/Eichsfeld (D¥-37327°Leinefelde¥-Worbis)",
        "grave": "",
        "age": 75
      },
      {
        "year": 2023,
        "birthdate": "2239-01-23",
        "name": "Hermann°Weiser, Pfr.i.R., Kassel",
        "birth": "23.°Januar°1939°in°Schlögelsdorf (Šléglov,°CZ¥-788°25)",
        "grave": "Hauptfriedhof°Kassel",
        "age": 84
      }
    ],
    "24": [
      {
        "year": 1954,
        "birthdate": "2180-03-20",
        "name": "Robert°Schade, Dechant, Pfarrer°in°Großbartloff",
        "birth": "20.°März°1880°in°Hohengandern (D¥-37318)",
        "grave": "",
        "age": 73
      },
      {
        "year": 1981,
        "birthdate": "2200-02-17",
        "name": "Franz°Apel, Pfr.i.R., Kirchgandern",
        "birth": "17.°Februar°1900°in°Bodenrode/Eichsfeld (D¥-37308)",
        "grave": "Friedhof°Kirchgandern",
        "age": 80
      }
    ],
    "25": [
      {
        "year": 1932,
        "birthdate": "2155-04-22",
        "name": "Franz°Atzert, Dechant, Pfarrer°in°Romsthal",
        "birth": "22.°April°1855°in°Rommerz",
        "grave": "",
        "age": 76
      },
      {
        "year": 1969,
        "birthdate": "2204-04-29",
        "name": "Felix°Vogelsang°(Schneidemühl), Pfr.i.R., Hünfeld",
        "birth": "29.°April°1904°in°Wischen (Wyszanowo,°PL¥-66¥-313)",
        "grave": "",
        "age": 64
      },
      {
        "year": 1973,
        "birthdate": "2205-03-30",
        "name": "Josef°Schrimpf, Pfr.i.R., Gersfeld",
        "birth": "30.°März°1905°in°Bochum¥-Gerthe",
        "grave": "Friedhof°Gersfeld",
        "age": 67
      },
      {
        "year": 1991,
        "birthdate": "2201-10-28",
        "name": "Clemens°Reinhardt, Pfr.i.R., Kella",
        "birth": "28.°Oktober°1901°in°Helbra (D¥-06311)",
        "grave": "",
        "age": 89
      },
      {
        "year": 2009,
        "birthdate": "2244-12-01",
        "name": "Jan°Karol°Kozaczka°(Danzig/Fulda), Pfarrer°in°Buttlar",
        "birth": "1.°Dezember°1944°in°Wólka°Grądzka (PL¥-33¥-221°Mędrzechów)",
        "grave": "Friedhof°Buttlar",
        "age": 64
      },
      {
        "year": 2016,
        "birthdate": "2235-05-26",
        "name": "P.°Josef°Friedrich°Otto°OMI, Hünfeld",
        "birth": "26.°Mai°1935°in°Birkenfelde/Eichsfeld (D¥-37318)",
        "grave": "Klosterfriedhof°Hünfeld",
        "age": 80
      }
    ],
    "26": [
      {
        "year": 1932,
        "birthdate": "2168-10-13",
        "name": "Eduard°Braun, Dechant, Pfarrer°in°Hanau",
        "birth": "13.°Oktober°1868°in°Bauerbach",
        "grave": "",
        "age": 63
      },
      {
        "year": 1938,
        "birthdate": "2163-10-05",
        "name": "Dr.°Franz°Anton°Rehrmann, Pfr.i.R., Lenne/Sauerland",
        "birth": "5.°Oktober°1863°in°Paderborn",
        "grave": "",
        "age": 74
      },
      {
        "year": 1986,
        "birthdate": "2191-06-25",
        "name": "Josef°Fröhlich, Pfr.i.R., Fulda",
        "birth": "25.°Juni°1891°in°Marbach",
        "grave": "Friedhof°Mittelkalbach",
        "age": 94
      },
      {
        "year": 1991,
        "birthdate": "2221-11-05",
        "name": "Otmar°Neubauer, Pfarrer°in°Nentershausen",
        "birth": "5.°November°1921°in°Fritzlar",
        "grave": "Friedhof°Fritzlar",
        "age": 69
      },
      {
        "year": 2025,
        "birthdate": "2241-12-09",
        "name": "Bernhard°Langner, Pfr.i.R., Wächtersbach¥-Aufenau",
        "birth": "9.°Dezember°1941°in°Fraustadt (Wschowa,°PL¥-67¥-400)",
        "grave": "Friedhof°Aufenau",
        "age": 83
      }
    ],
    "27": [
      {
        "year": 1939,
        "birthdate": "2192-12-21",
        "name": "Theodor°Bottermann, Kaplan°in°Volkmarsen",
        "birth": "21.°Dezember°1892°in°Höhr¥-Grenzhausen (D¥-56203)",
        "grave": "",
        "age": 46
      },
      {
        "year": 1971,
        "birthdate": "2202-11-06",
        "name": "Otto°Rosenkranz°(Ermland), Pfarrer°in°Züntersbach",
        "birth": "6.°November°1902°in°Elbing (Elbląg,°PL¥-82¥-3..)",
        "grave": "Friedhof°Züntersbach",
        "age": 68
      },
      {
        "year": 1972,
        "birthdate": "2205-09-05",
        "name": "Friedrich°Pasquay°(Breslau), Pfr.i.R., Oberprechtal",
        "birth": "5.°September°1905°in°Neustadt (Prudnik,°PL¥-48¥-200)",
        "grave": "Friedhof°Oberprechtal°(D¥-79215°Elzach)",
        "age": 66
      },
      {
        "year": 1997,
        "birthdate": "2229-04-27",
        "name": "Jan°Kapala°(Łódź/Fulda), Pfr.i.R., Myślenice/Polen",
        "birth": "27.°April°1929°in°Fałkowice (PL¥-46¥-034)",
        "grave": "Friedhof°Gdów°(PL¥-32¥-420)",
        "age": 67
      },
      {
        "year": 2012,
        "birthdate": "2230-06-28",
        "name": "Anton°Schütz, Prälat, Ehrendomkapitular, Dietingen¥-Gösslingen",
        "birth": "28.°Juni°1930°in°Lütter",
        "grave": "Friedhof°Eichenzell¥-Lütter",
        "age": 81
      },
      {
        "year": 2021,
        "birthdate": "2231-04-04",
        "name": "Hubert°Kümpel, Pfr.i.R., GR, Fulda¥-Horas",
        "birth": "4.°April°1931°in°Schwarzbach",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 89
      },
      {
        "year": 2025,
        "birthdate": "2247-06-19",
        "name": "Josef°Gebauer, Diakon°i.R., Fulda",
        "birth": "19.°Juni°1947°in°Guggenberg (D¥-63928 Eichenbühl)",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 77
      }
    ],
    "28": [
      {
        "year": 1966,
        "birthdate": "2208-06-20",
        "name": "Alois°Dittrich°(Schneidemühl), Konsistorialrat, Pfarrer°in°Kassel, St.°Bonifatius",
        "birth": "20.°Juni°1908°in°Schwerin",
        "grave": "",
        "age": 57
      },
      {
        "year": 1982,
        "birthdate": "2202-02-09",
        "name": "Karl°Blumenthal, Pfr.i.R., Zella/Eichsfeld",
        "birth": "9.°Februar°1902°in°Zella/Eichsfeld (D¥-37351°Dingelstädt)",
        "grave": "",
        "age": 79
      },
      {
        "year": 1996,
        "birthdate": "2227-02-21",
        "name": "Josef°Jilek, Pfr.i.R., GR, Bad°Orb",
        "birth": "21.°Februar°1927°in°Hohenstadt (Zábřeh,°CZ¥-789°01)",
        "grave": "Friedhof°Wirtheim",
        "age": 68
      },
      {
        "year": 2000,
        "birthdate": "2223-05-25",
        "name": "Gerhard°Dluhosch°(Olmütz/Fulda), Pfr.i.R., GR, Mittelkalbach",
        "birth": "25.°Mai°1923°in°Kranstädt/Krs.°Ratibor (Krzanowice,°PL¥-47¥-470)",
        "grave": "Friedhof°Mittelkalbach",
        "age": 76
      }
    ],
    "29": [
      {
        "year": 1945,
        "birthdate": "2183-05-08",
        "name": "Anselm°Schuchart, Pfr.i.R., Dingelstädt",
        "birth": "8.°Mai°1883°in°Dingelstädt",
        "grave": "",
        "age": 61
      },
      {
        "year": 1965,
        "birthdate": "2192-10-19",
        "name": "DDDr.°Franz°Ranft, Prof., Dr.°phil., Dr.°theol., Dr.°theol.°habil., OStD°i.R., Msgr., Fulda",
        "birth": "19.°Oktober°1892°in°Osterode/Harz (D¥-37520)",
        "grave": "",
        "age": 72
      },
      {
        "year": 1981,
        "birthdate": "2210-03-12",
        "name": "Peter°Degenhardt, Pfarrer°in°Seiferts",
        "birth": "12.°März°1910°in°Bickenriede/Eichsfeld (D¥-99976°Anrode)",
        "grave": "Friedhof°Seiferts",
        "age": 70
      },
      {
        "year": 1985,
        "birthdate": "2231-02-13",
        "name": "Ludwig°Roth, GR, Pfarrer°in°Stadtallendorf",
        "birth": "13.°Februar°1931°in°Fulda",
        "grave": "Friedhof°Stadtallendorf",
        "age": 53
      },
      {
        "year": 1986,
        "birthdate": "2235-11-25",
        "name": "Winfried°Alt, Dechant, Pfarrer°in°Ecklingerode",
        "birth": "25.°November°1935°in°Worbis (D¥-37339)",
        "grave": "",
        "age": 50
      },
      {
        "year": 1988,
        "birthdate": "2209-02-22",
        "name": "Gregor°Garske°(Schneidemühl), Pfr.i.R., Konsistorialrat, Markt°Wallerstein",
        "birth": "22.°Februar°1909°in°Hochwalde (Wysoka,°PL¥-66¥-433)",
        "grave": "Friedhof°Wallerstein°(D¥-86757)",
        "age": 78
      }
    ],
    "31": [
      {
        "year": 1933,
        "birthdate": "2169-11-20",
        "name": "Hermann°Pfafferott, Pfarrer°in°Effelder",
        "birth": "20.°November°1869°in°Weißenborn/Krs.°Worbis (D¥-37345°Sonnenstein)",
        "grave": "",
        "age": 63
      },
      {
        "year": 2004,
        "birthdate": "2228-09-24",
        "name": "P.°Reinhold°Dopp°SDB, GR, Hannover",
        "birth": "24.°September°1928°in°Duderstadt (D¥-49624°Löningen)",
        "grave": "Stadtfriedhof°Hannover",
        "age": 75
      },
      {
        "year": 2016,
        "birthdate": "2225-10-10",
        "name": "Hermann°Mühl, Prälat, GR, Domkapitular°i.R., Fulda",
        "birth": "10.°Oktober°1925°in°Lampertheim (D¥-68623)",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 90
      },
      {
        "year": 2016,
        "birthdate": "2236-05-26",
        "name": "Hermann°Trost, Pfr.i.R., StD°i.R., GR, Hanau¥-Großauheim",
        "birth": "26.°Mai°1936°in°Körnbach",
        "grave": "Waldfriedhof°Großauheim",
        "age": 79
      }
    ]
  },
  "2": {
    "1": [
      {
        "year": 1956,
        "birthdate": "2188-02-20",
        "name": "Walter°Rhoden, Pfarrer°in°Westhausen",
        "birth": "20.°Februar°1888°in°Heiligenstadt",
        "grave": "",
        "age": 67
      },
      {
        "year": 1973,
        "birthdate": "2205-09-16",
        "name": "Georg°Gutsfeld, Pfr.i.R., Jena",
        "birth": "16.°September°1905°in°Myslowitz (Mysłowice,°PL¥-41¥-4..)",
        "grave": "Jena",
        "age": 67
      },
      {
        "year": 2011,
        "birthdate": "2235-04-07",
        "name": "Janisław°Jałyński°(Kulm/Fulda), Pfr.i.R., GR, Kassel",
        "birth": "7.°April°1935°in°Gdynia (PL¥-81¥-...)",
        "grave": "Hauptfriedhof°Kassel",
        "age": 75
      },
      {
        "year": 2025,
        "birthdate": "2240-03-12",
        "name": "P.°Klaus¥-Peter°Dewes°SDB",
        "birth": "12.°März°1940°in°Köln",
        "grave": "Friedhof°Köln¥-Stammheim",
        "age": 84
      }
    ],
    "2": [
      {
        "year": 1960,
        "birthdate": "2184-12-20",
        "name": "Franz°Anton°Hahn, Pfarrer°in°Neustadt",
        "birth": "20.°Dezember°1884°in°Obernkirchen (D¥-31683)",
        "grave": "",
        "age": 75
      },
      {
        "year": 1964,
        "birthdate": "2192-10-01",
        "name": "Wilhelm°Lorenz, Pfarrer°in°Geisleden/Eichsfeld",
        "birth": "1.°Oktober°1892°in°Berlingerode (D¥-37339)",
        "grave": "",
        "age": 71
      },
      {
        "year": 1969,
        "birthdate": "2196-01-11",
        "name": "Josef°Klug°(Königgrätz), Pfr.i.R., Dermbach",
        "birth": "11.°Januar°1896°in°Hermannseifen (Rudník°v°Krkonoších,°CZ¥-543°7.)",
        "grave": "",
        "age": 73
      },
      {
        "year": 1977,
        "birthdate": "2187-12-04",
        "name": "Adolf°Joseph°Arend, Pfr.i.R., GR, Fulda",
        "birth": "4.°Dezember°1887°in°Kassel",
        "grave": "Fulda",
        "age": 89
      },
      {
        "year": 1977,
        "birthdate": "2229-08-26",
        "name": "Reinhold°Juling, Pfarrer°in°Margretenhaun",
        "birth": "26.°August°1929°in°Offenbach",
        "grave": "Friedhof°Neuhof",
        "age": 47
      },
      {
        "year": 1997,
        "birthdate": "2217-01-01",
        "name": "Dr.°Hubert°Hack, Prof., Prälat, Ehrendomkapitular, Fulda",
        "birth": "1.°Januar°1917°in°Petersberg",
        "grave": "Friedhof°Petersberg",
        "age": 80
      }
    ],
    "3": [
      {
        "year": 1944,
        "birthdate": "2194-09-11",
        "name": "Johannes°Hunold, Pfarrer°in°Hildebrandshausen",
        "birth": "11.°September°1894°in°Neuendorf/Eichsfeld (D¥-37339°Teistungen)",
        "grave": "",
        "age": 49
      },
      {
        "year": 1981,
        "birthdate": "2210-09-18",
        "name": "Hermann°Josef°Heim, Pfr.i.R., GR, Fulda",
        "birth": "18.°September°1910°in°Bad°Orb",
        "grave": "Friedhof°Bad°Orb",
        "age": 70
      },
      {
        "year": 1999,
        "birthdate": "2208-10-18",
        "name": "P.°Dr.°Johannes°Ries°OMI, Prof., Hünfeld",
        "birth": "18.°Oktober°1908°in°Treis/Mosel (D¥-56253°Treis¥-Karden)",
        "grave": "Klosterfriedhof°Hünfeld",
        "age": 90
      }
    ],
    "4": [
      {
        "year": 1932,
        "birthdate": "2168-07-03",
        "name": "Joseph°Kraus, Pfr.i.R., KämmerzelI",
        "birth": "3.°Juli°1868°in°Borsch",
        "grave": "",
        "age": 63
      },
      {
        "year": 1937,
        "birthdate": "2164-11-28",
        "name": "Anton°Hillenbrand, Pfarrer°in°Großenlüder",
        "birth": "28.°November°1864°in°Fulda",
        "grave": "",
        "age": 72
      },
      {
        "year": 1967,
        "birthdate": "2188-12-06",
        "name": "Alfons°Lins, Pfr.i.R., Bad°Orb",
        "birth": "6.°Dezember°1888°in°Wachstedt (D¥-37359)",
        "grave": "",
        "age": 78
      },
      {
        "year": 1980,
        "birthdate": "2228-06-06",
        "name": "Dr.°Karl°Wortner°(Prag/Limburg), Frankfurt°a.°M.",
        "birth": "6.°Juni°1928°in°Prag",
        "grave": "",
        "age": 51
      },
      {
        "year": 1996,
        "birthdate": "2204-03-07",
        "name": "DDr.°Joseph°Gottschalk°(Breslau), Dr.°phil., Dr.°theol.°h.c., StR°i.R., Msgr., GR, Seeheim¥-Malchen",
        "birth": "7.°März°1904°in°Militsch (Milicz,°PL¥-56¥-300)",
        "grave": "Friedhof°Fulda¥-Neuenberg",
        "age": 91
      },
      {
        "year": 2012,
        "birthdate": "2222-05-10",
        "name": "Josef°Cudok, Diakon, Stade",
        "birth": "10.°Mai°1922°in°Beuthen (Bytom,°PL¥-41¥-9..)",
        "grave": "Nordfriedhof°Kassel",
        "age": 89
      }
    ],
    "5": [
      {
        "year": 1921,
        "birthdate": "2168-10-14",
        "name": "Stephan°Gnau, Pfarrer°in°Uttrichshausen",
        "birth": "14.°Oktober°1868°in°Stausebach",
        "grave": "",
        "age": 52
      },
      {
        "year": 1963,
        "birthdate": "2179-03-31",
        "name": "Gereon°Hünseler, Pfr.i.R., Deuna/Eichsfeld",
        "birth": "31.°März°1879°in°Duisburg",
        "grave": "",
        "age": 83
      },
      {
        "year": 1964,
        "birthdate": "2189-09-12",
        "name": "Adrian°Pilot°(Breslau), Pfr.i.R., Bad°Hersfeld",
        "birth": "12.°September°1889°in°Groß°Patschin (Paczyna,°PL¥-44¥-120)",
        "grave": "",
        "age": 74
      },
      {
        "year": 2017,
        "birthdate": "2243-12-21",
        "name": "Edgar°Hohmann, Pfr.i.R., GR, Volkmarsen",
        "birth": "21.°Dezember°1943°in°Arzell",
        "grave": "Friedhof°Volkmarsen",
        "age": 73
      }
    ],
    "6": [
      {
        "year": 1952,
        "birthdate": "2169-07-12",
        "name": "Franz°Xaver°Roth, Pfr.i.R., Leinefelde",
        "birth": "12.°Juli°1869°in°Oschersleben (D¥-39387)",
        "grave": "",
        "age": 82
      },
      {
        "year": 1967,
        "birthdate": "2190-01-22",
        "name": "Martin°Böhne, Pfr.i.R., Ehrendechant, Naumburg",
        "birth": "22.°Januar°1890°in°Naumburg",
        "grave": "",
        "age": 77
      }
    ],
    "7": [
      {
        "year": 1942,
        "birthdate": "2169-03-19",
        "name": "Joseph°Richter, Pfr.i.R., Herolz",
        "birth": "19.°März°1869°in°Schmallenberg°i.W. (D¥-57392)",
        "grave": "",
        "age": 72
      },
      {
        "year": 1964,
        "birthdate": "2180-03-03",
        "name": "Eduard°Lerch, Pfr.i.R., Siemerode/üb.°Heiligenstadt",
        "birth": "3.°März°1880°in°Wachstedt (D¥-37359)",
        "grave": "",
        "age": 83
      },
      {
        "year": 1965,
        "birthdate": "2188-08-30",
        "name": "Josef°Löbel°(Leitmeritz), Pfr.i.R., Bachrain",
        "birth": "30.°August°1888°in°Schneeberg (Sněžník,°CZ¥-407°01°Jílové°u°Děčína)",
        "grave": "",
        "age": 76
      },
      {
        "year": 2017,
        "birthdate": "2229-02-23",
        "name": "P.°Dr.°Sigfried°Klöckner°OFM, GR, Fulda",
        "birth": "23.°Februar°1929°in°Höchst/Krs.°Gelnhausen",
        "grave": "Klosterfriedhof°Frauenberg,°Fulda",
        "age": 87
      }
    ],
    "8": [
      {
        "year": 1946,
        "birthdate": "2181-01-24",
        "name": "Alois°Hahner, Pfarrer°in°Schmalnau",
        "birth": "24.°Januar°1881°in°Flieden",
        "grave": "",
        "age": 65
      },
      {
        "year": 1955,
        "birthdate": "2171-02-20",
        "name": "Peter°Kräuter, Marine-Oberpfr.i.R., Mardorf",
        "birth": "20.°Februar°1871°in°Mardorf",
        "grave": "",
        "age": 83
      },
      {
        "year": 1976,
        "birthdate": "2200-05-21",
        "name": "Reinhold°Barth°(Königgrätz), Pfr.i.R., Schönbrunn",
        "birth": "21.°Mai°1900°in°Altenbuch (Staré°Buky,°CZ¥-542°43)",
        "grave": "Friedhof°Großberghofen°(D¥-85253°Erdweg)",
        "age": 75
      },
      {
        "year": 2004,
        "birthdate": "2227-05-08",
        "name": "Hubert°Wiederhold, Pfr.i.R., GR, Frankfurt¥-Bornheim",
        "birth": "8.°Mai°1927°in°Naumburg",
        "grave": "Friedhof°Frankfurt¥-Enkheim",
        "age": 76
      },
      {
        "year": 2020,
        "birthdate": "2233-09-08",
        "name": "Franz°J.°Koska°(Kulm/Fulda), Pfr.i.R., Msgr., Rumia/Polen",
        "birth": "8.°September°1933°in°Neustadt/Westpreußen (Wejherowo,°PL¥-84¥-20.)",
        "grave": "Friedhof°Śmiechowski°in°Wejherowo",
        "age": 86
      }
    ],
    "9": [
      {
        "year": 1938,
        "birthdate": "2164-11-17",
        "name": "Heinrich°Bona, Pfr.i.R., Erfurt",
        "birth": "17.°November°1864°in°Oberkirchen/Westfalen (D¥-57392°Schmallenberg)",
        "grave": "",
        "age": 73
      },
      {
        "year": 1969,
        "birthdate": "2195-05-05",
        "name": "Franz°Ebel, Pfarrer°in°Bremen/Rhön",
        "birth": "5.°Mai°1895°in°Fulda",
        "grave": "",
        "age": 73
      },
      {
        "year": 1988,
        "birthdate": "2213-05-25",
        "name": "Bruno°Gospos°(Breslau), Pfr.i.R., Borken/Westfalen",
        "birth": "25.°Mai°1913°in°Ruderswald (Rudyszwałd,°PL¥-47¥-450)",
        "grave": "Friedhof°Borken/Westfalen",
        "age": 74
      },
      {
        "year": 2012,
        "birthdate": "2214-07-13",
        "name": "Johannes°Goedeke°(Danzig/Fulda), Pfr.i.R., Msgr., Bad°Soden¥-Salmünster",
        "birth": "13.°Juli°1914°in°Kladau°bei°Danzig (Kłodawa,°PL¥-83¥-035°Trąbki°Wielkie)",
        "grave": "Friedhof°Bad°Soden¥-Salmünster",
        "age": 97
      }
    ],
    "10": [
      {
        "year": 1933,
        "birthdate": "2174-09-16",
        "name": "Ferdinand°Spies, Pfarrer°in°Batten",
        "birth": "16.°September°1874°in°Flieden",
        "grave": "",
        "age": 58
      },
      {
        "year": 1935,
        "birthdate": "2185-05-24",
        "name": "Othmar°Beck, Pfarrer°in°Borsch",
        "birth": "24.°Mai°1885°in°Somborn",
        "grave": "",
        "age": 49
      },
      {
        "year": 1950,
        "birthdate": "2181-11-17",
        "name": "Gregor°Quell, Pfarrer°in°Burghaun",
        "birth": "17.°November°1881°in°Jossa",
        "grave": "",
        "age": 68
      },
      {
        "year": 1956,
        "birthdate": "2177-11-28",
        "name": "Theodor°Arend, Pfr.i.R., Worbis",
        "birth": "28.°November°1877°in°Nordhausen (D¥-99734)",
        "grave": "",
        "age": 78
      },
      {
        "year": 1987,
        "birthdate": "2213-02-06",
        "name": "P.°Anton°Hehl°SM, Direktor°i.R., Fulda",
        "birth": "6.°Februar°1913°in°Horas",
        "grave": "Fulda",
        "age": 74
      },
      {
        "year": 1993,
        "birthdate": "2214-10-23",
        "name": "Reinhard°Mrasek°(Breslau), Pfr.i.R., Burghaun",
        "birth": "23.°Oktober°1914°in°Jungferndorf (Kobylá°nad°Vidnavkou,°CZ¥-790¥-56)",
        "grave": "Friedhof°Steinbach",
        "age": 78
      },
      {
        "year": 2020,
        "birthdate": "2240-01-15",
        "name": "P.°Wolfgang°Mayer°OFM, Dortmund",
        "birth": "15.°Januar°1940°in°Freiburg",
        "grave": "Ostfriedhof°Dortmund",
        "age": 80
      }
    ],
    "11": [
      {
        "year": 1934,
        "birthdate": "2161-04-28",
        "name": "Johannes°Kahlmeyer, Pfr.i.R., Ershausen",
        "birth": "28.°April°1861°in°Schachtebich (D¥-37318)",
        "grave": "",
        "age": 72
      },
      {
        "year": 1937,
        "birthdate": "2177-09-22",
        "name": "Julius°Martin, Dechant, Pfarrer°in°Geisa",
        "birth": "22.°September°1877°in°Ungedanken",
        "grave": "",
        "age": 59
      },
      {
        "year": 1966,
        "birthdate": "2195-03-13",
        "name": "Aloys°Auth, Pfarrer°in°Dietges",
        "birth": "13.°März°1895°in°Mittelkalbach",
        "grave": "",
        "age": 70
      },
      {
        "year": 1981,
        "birthdate": "2219-01-29",
        "name": "Theodor°Gronde, Pfr.i.R., Heiligenstadt",
        "birth": "29.°Januar°1919°in°Saragossa/Spanien",
        "grave": "",
        "age": 62
      },
      {
        "year": 2002,
        "birthdate": "2217-12-25",
        "name": "P.°DDr.°Georg°Ziener°OMI, Prof., Dr.°theol., Dr.°in°re°bibl., Hünfeld",
        "birth": "25.°Dezember°1917°in°Ober-Abtsteinbach (D¥-69518)",
        "grave": "Klosterfriedhof°Hünfeld",
        "age": 84
      }
    ],
    "12": [
      {
        "year": 2013,
        "birthdate": "2250-08-10",
        "name": "Ivan°Barišić, Kroatenseelsorger°in°Kassel",
        "birth": "10.°August°1950°in°Drinovci (BIH¥-88340)",
        "grave": "Friedhof°Drinovci",
        "age": 62
      }
    ],
    "13": [
      {
        "year": 1982,
        "birthdate": "2203-11-03",
        "name": "P.°Archangelus°Löslein°OFMCap, Seelsorger des Familienferienheims°Michaelshof in°Unterbernhards",
        "birth": "3.°November°1903°in°Alzey (D¥-55232)",
        "grave": "Friedhof°Bebra",
        "age": 78
      }
    ],
    "14": [
      {
        "year": 1920,
        "birthdate": "2140-10-30",
        "name": "Dr.°Nikolaus°Kircher, Dr.°iur.°can., GR, Dechant°a.D., Pfarrer°in°Maberzell",
        "birth": "30.°Oktober°1840°in°Großenbach",
        "grave": "",
        "age": 79
      },
      {
        "year": 1946,
        "birthdate": "2171-09-24",
        "name": "Joseph°Gockel, Pfr.i.R., Mardorf",
        "birth": "24.°September°1871°in°Mardorf",
        "grave": "",
        "age": 74
      }
    ],
    "15": [
      {
        "year": 1999,
        "birthdate": "2223-10-22",
        "name": "P.°Dr.°Norbert°Hötzel°OMI, Superior°in°Hünfeld",
        "birth": "22.°Oktober°1923°in°Beckern/Krs.°Neumarkt (Piekary,°PL¥-55¥-340)",
        "grave": "Klosterfriedhof°Hünfeld",
        "age": 75
      },
      {
        "year": 2019,
        "birthdate": "2235-06-23",
        "name": "Ulrich°Wittek, Pfr.i.R., GR, Fulda",
        "birth": "23.°Juni°1935°in°Ratibor (Racibórz,°PL¥-47¥-4..)",
        "grave": "Zentralfriedhof°Fulda",
        "age": 83
      }
    ],
    "16": [
      {
        "year": 1942,
        "birthdate": "2212-11-05",
        "name": "Karl°Göbel, Pfarrer°in°Hundeshagen, gestorben°im°Reservelazarett°zu°Lublin",
        "birth": "5.°November°1912°in°Ershausen/Eichsfeld (D¥-37308°Schimberg)",
        "grave": "",
        "age": 29
      },
      {
        "year": 1963,
        "birthdate": "2180-07-23",
        "name": "Arthur°Maximilian°Hilden, Pfr.i.R., Riedering°üb.°Rosenheim",
        "birth": "23.°Juli°1880°in°Hofgeismar",
        "grave": "",
        "age": 82
      },
      {
        "year": 1970,
        "birthdate": "2205-08-26",
        "name": "Ignaz°Nolte, Pfr.i.R., GR, Pfarrer°in°Geismar/Eichsfeld",
        "birth": "26.°August°1905°in°Holungen/Eichsfeld (D¥-37345°Sonnenstein)",
        "grave": "Friedhof°Geismar/Eichsfeld",
        "age": 64
      }
    ],
    "17": [
      {
        "year": 1960,
        "birthdate": "2190-03-15",
        "name": "Dr.°Rudolf°Tietze°(Leitmeritz), Pfr.i.R., Stotternheim",
        "birth": "15.°März°1890°in°Neuehrenberg (Nové°Křečany,°CZ¥-407°61)",
        "grave": "",
        "age": 69
      },
      {
        "year": 1969,
        "birthdate": "2184-11-20",
        "name": "Friedrich°Horst, Pfr.i.R., Haimbach",
        "birth": "20.°November°1884°in°Schröck",
        "grave": "",
        "age": 84
      },
      {
        "year": 2012,
        "birthdate": "2248-10-03",
        "name": "Alfons°Gerhardt, Pfarrer°in°Hünfeld¥-Mackenzell",
        "birth": "3.°Oktober°1948°in°Fulda",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 63
      },
      {
        "year": 2017,
        "birthdate": "2227-06-18",
        "name": "August°Aul, Pfr.i.R., GR, Freigericht¥-Bernbach",
        "birth": "18.°Juni°1927°in°Bernbach",
        "grave": "Friedhof°Bernbach",
        "age": 89
      }
    ],
    "18": [
      {
        "year": 1972,
        "birthdate": "2185-10-12",
        "name": "Ludwig°Mans, Pfr.i.R., Fulda",
        "birth": "12.°Oktober°1885°in°Dörmbach",
        "grave": "Friedhof°Eichenzell",
        "age": 86
      },
      {
        "year": 1986,
        "birthdate": "2200-12-29",
        "name": "Ludwig°Atzert, Pfr.i.R., Msgr., Fulda",
        "birth": "29.°Dezember°1900°in°Petersberg",
        "grave": "Friedhof°Petersberg",
        "age": 85
      },
      {
        "year": 1990,
        "birthdate": "2213-06-21",
        "name": "Alois°Zengerling, Pfr.i.R., Fulda¥-Dietershan",
        "birth": "21.°Juni°1913°in°Heyerode/Eichsfeld (D¥-99988°Südeichsfeld)",
        "grave": "Friedhof°Dietershan",
        "age": 76
      },
      {
        "year": 2021,
        "birthdate": "2223-01-17",
        "name": "Franz°Heim, Pfr.i.R., GR, Bad°Orb",
        "birth": "17.°Januar°1923°in°Bad°Orb",
        "grave": "Friedhof°Bad°Orb",
        "age": 98
      }
    ],
    "19": [
      {
        "year": 1970,
        "birthdate": "2184-07-10",
        "name": "Ferdinand°Reinhardt, Pfr.i.R., GR, Fulda",
        "birth": "10.°Juli°1884°in°Müs",
        "grave": "Friedhof°Müs",
        "age": 85
      },
      {
        "year": 1974,
        "birthdate": "2188-10-02",
        "name": "Reinhold°Thiel°(Breslau), Erzpriester, Pfr.i.R., GR, Hünfeld",
        "birth": "2.°Oktober°1888°in°Breslau (Wrocław,°PL¥-50¥-...)",
        "grave": "Friedhof°Hünfeld",
        "age": 85
      },
      {
        "year": 1994,
        "birthdate": "2208-04-03",
        "name": "P.°Josef°Heinemann°SVD",
        "birth": "3.°April°1908°in°Nagladden (Naglady,°PL¥-11¥-036°Gietrzwałd)",
        "grave": "",
        "age": 85
      },
      {
        "year": 1994,
        "birthdate": "2218-02-20",
        "name": "Hans¥-Georg°Hirmer, Diakon°i.R., Eiterfeld",
        "birth": "20.°Februar°1918°in°Berlin",
        "grave": "Friedhof°Unterufhausen",
        "age": 75
      },
      {
        "year": 2002,
        "birthdate": "2221-11-17",
        "name": "Karl°Schönhals, GR, Pfarrer°in°Hanau, St.°Elisabeth",
        "birth": "17.°November°1921°in°Hanau",
        "grave": "Hauptfriedhof°Hanau",
        "age": 80
      },
      {
        "year": 2005,
        "birthdate": "2227-10-22",
        "name": "Alois°Korn, Pfr.i.R., Msgr., GR, Biebergemünd¥-Kassel",
        "birth": "22.°Oktober°1927°in°Burgjoß",
        "grave": "Friedhof°Oberndorf",
        "age": 77
      }
    ],
    "20": [
      {
        "year": 1935,
        "birthdate": "2170-11-11",
        "name": "Albert°Hünermund, Pfarrer°in°Hohengandern",
        "birth": "11.°November°1870°in°Kleinbartloff (D¥-37355°Niederorschel)",
        "grave": "",
        "age": 64
      },
      {
        "year": 1960,
        "birthdate": "2188-01-15",
        "name": "Anton°Wohlgemuth, Prälat, Domkapitular, Fulda",
        "birth": "15.°Januar°1888°in°Hünfeld",
        "grave": "",
        "age": 72
      },
      {
        "year": 2023,
        "birthdate": "2227-09-03",
        "name": "Eugen°Höfler, Pfr.i.R., GR, Fulda¥-Horas",
        "birth": "3.°September°1927°in°Altenmittlau",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 95
      }
    ],
    "21": [
      {
        "year": 1945,
        "birthdate": "2164-09-17",
        "name": "Hermann°Weinreich, Pfr.i.R., Heiligenstadt",
        "birth": "17.°September°1864°in°Heiligenstadt",
        "grave": "",
        "age": 80
      },
      {
        "year": 1958,
        "birthdate": "2193-09-29",
        "name": "Peter°Hardegen, Pfarrer°in°Bickenriede",
        "birth": "29.°September°1893°in°Hildebrandshausen (D¥-99976°Südeichsfeld)",
        "grave": "",
        "age": 64
      },
      {
        "year": 1991,
        "birthdate": "2204-03-08",
        "name": "Ludwig°Wiegand, Pfr.i.R., Msgr., Hünfeld",
        "birth": "8.°März°1904°in°Soisdorf",
        "grave": "Friedhof°Soisdorf",
        "age": 86
      },
      {
        "year": 2004,
        "birthdate": "2237-08-22",
        "name": "P.°Klemens°Schneiders°OMI, Hünfeld",
        "birth": "22.°August°1937°in°Rhedebrügge (D¥-46325°Borken)",
        "grave": "Klosterfriedhof°Hünfeld",
        "age": 66
      },
      {
        "year": 2009,
        "birthdate": "2230-05-05",
        "name": "Helmut°Schleichert, Militärpfr.a.D., Fritzlar",
        "birth": "5.°Mai°1930°in°Fulda",
        "grave": "Neuer°Friedhof°Fritzlar",
        "age": 78
      }
    ],
    "22": [
      {
        "year": 1965,
        "birthdate": "2196-02-28",
        "name": "Karl°Busch, Pfr.i.R., Menden/Westfalen",
        "birth": "28.°Februar°1896°in°Altena/Westfalen (D¥-58762)",
        "grave": "",
        "age": 68
      },
      {
        "year": 1990,
        "birthdate": "2206-02-01",
        "name": "Josef°Schubert°(Leitmeritz), Pfr.i.R., Heiligenstadt",
        "birth": "1.°Februar°1906°in°Oschitz (Osečná,°CZ¥-463°52)",
        "grave": "Friedhof°Heiligenstadt",
        "age": 84
      }
    ],
    "23": [
      {
        "year": 2016,
        "birthdate": "2247-07-03",
        "name": "Alois°Hartmann, Pfr.i.R., Msgr., GR, Petersberg",
        "birth": "3.°Juli°1947°in°Petersberg",
        "grave": "Friedhof°Petersberg",
        "age": 68
      },
      {
        "year": 2025,
        "birthdate": "2237-12-30",
        "name": "Lothar°Sperling°(Schneidemühl/Fulda), Pfr.i.R., GR, Hanau",
        "birth": "30.°Dezember°1937°in°Fraustadt (Wschowa,°PL¥-67¥-400)",
        "grave": "Waldfriedhof°Großauheim",
        "age": 87
      }
    ],
    "24": [
      {
        "year": 1991,
        "birthdate": "2232-02-11",
        "name": "Reinhold°Schuchardt, Pfarrer°in°Neustadt",
        "birth": "11.°Februar°1932°in°Homberg°(Efze)",
        "grave": "Friedhof°Neustadt",
        "age": 59
      },
      {
        "year": 1992,
        "birthdate": "2209-11-22",
        "name": "Franz°Vogt, Pfr.i.R., StD°a.D., Msgr., Kassel",
        "birth": "22.°November°1909°in°Hünfeld",
        "grave": "Hauptfriedhof°Kassel",
        "age": 82
      }
    ],
    "25": [
      {
        "year": 1937,
        "birthdate": "2152-02-12",
        "name": "Karl°Lomb, Pfr.i.R., Großenbach",
        "birth": "12.°Februar°1852°in°Oldendorf/Krs.°Rinteln (D¥-31840°Hessisch°Oldendorf)",
        "grave": "",
        "age": 85
      },
      {
        "year": 1946,
        "birthdate": "2172-09-20",
        "name": "Florentin°Müller, Professor°in°Heiligenstadt",
        "birth": "20.°September°1872°in°Hundeshagen (D¥-37327°Leinefelde¥-Worbis)",
        "grave": "",
        "age": 73
      },
      {
        "year": 1974,
        "birthdate": "2189-12-16",
        "name": "Leo°Hatscher°(Leitmeritz), Pfr.i.R., Zierenberg",
        "birth": "16.°Dezember°1889°in°Klein¥-Teuplitz (Tuplice,°PL¥-68¥-219)",
        "grave": "Friedhof°Zierenberg",
        "age": 84
      },
      {
        "year": 1983,
        "birthdate": "2227-04-07",
        "name": "Klaus°Heymann°(Breslau), Dechant°in°Dingelstädt",
        "birth": "7.°April°1927°in°Schweidnitz (Świdnica,°PL¥-58¥-10.)",
        "grave": "Bamberg",
        "age": 55
      },
      {
        "year": 1997,
        "birthdate": "2240-01-15",
        "name": "P.°Graziano°Capannolo°CR, Italienerseelsorger°in°Kassel",
        "birth": "15.°Januar°1940°in°Arischia°(L’Aquila) (I¥-67100)",
        "grave": "Rom",
        "age": 57
      },
      {
        "year": 2019,
        "birthdate": "2249-10-23",
        "name": "P.°Mate°Dragičevič°OFM, Mostar",
        "birth": "23.°Oktober°1949°in°Miletina (BIH¥-88320°Ljubuški)",
        "grave": "Neuer°Friedhof°Humac°(BIH¥-88320°Ljubuški)",
        "age": 69
      }
    ],
    "26": [
      {
        "year": 1940,
        "birthdate": "2169-02-26",
        "name": "Karl°Freund, Pfr.i.R., Sondershausen",
        "birth": "26.°Februar°1869°in°Erfurt",
        "grave": "",
        "age": 71
      },
      {
        "year": 1956,
        "birthdate": "2177-02-20",
        "name": "Adalbert°Schiffhauer, Pfr.i.R., Fulda",
        "birth": "20.°Februar°1877°in°Aschaffenburg",
        "grave": "",
        "age": 79
      },
      {
        "year": 1957,
        "birthdate": "2187-08-13",
        "name": "Joseph°Klüber, Pfarrer°in°Großentaft",
        "birth": "13.°August°1887°in°Steens",
        "grave": "",
        "age": 69
      },
      {
        "year": 1988,
        "birthdate": "2201-03-25",
        "name": "Leo°Wolfen°(Essen), Pfr.i.R., GR, Borken/Westfalen",
        "birth": "25.°März°1901°in°Wuppertal",
        "grave": "",
        "age": 86
      },
      {
        "year": 2015,
        "birthdate": "2240-03-28",
        "name": "Reinhold°Becker, Pfr.i.R., Fritzlar",
        "birth": "28.°März°1940°in°Fritzlar",
        "grave": "Neuer°Friedhof°Fritzlar",
        "age": 74
      }
    ],
    "27": [
      {
        "year": 1939,
        "birthdate": "2187-11-23",
        "name": "Joseph°Himmelmann, Pfarrer°in°Simmershausen",
        "birth": "23.°November°1887°in°Uffhausen",
        "grave": "",
        "age": 51
      },
      {
        "year": 1943,
        "birthdate": "2202-01-04",
        "name": "DDr.°Georg°Werner, Dr.°theol.°et°phil., Religionslehrer, gefallen°in°Rußland",
        "birth": "4.°Januar°1902°in°Nienborg/Krs.°Ahaus (D¥-48619°Heek)",
        "grave": "",
        "age": 41
      },
      {
        "year": 2009,
        "birthdate": "2245-02-06",
        "name": "Peter°Hauser, Dompfr.i.R., Msgr., Ehrendomkapitular, Fulda",
        "birth": "6.°Februar°1945°in°Burghaun",
        "grave": "Friedhof°Fulda¥-Lehnerz",
        "age": 64
      },
      {
        "year": 2010,
        "birthdate": "2227-10-10",
        "name": "P.°Lucas°Josef°Tacke°OFMCap, GR, Münster",
        "birth": "10.°Oktober°1927°in°Bocholt/Westfalen (D¥-4639.)",
        "grave": "Friedhof°des°Kapuzinerklosters°Münster",
        "age": 82
      },
      {
        "year": 2016,
        "birthdate": "2228-02-04",
        "name": "P.°Leo°Hillebrand°SDB, Daun",
        "birth": "4.°Februar°1928°in°Wuppertal¥-Elberfeld",
        "grave": "Mitbrüderfriedhof°Jünkerath",
        "age": 88
      },
      {
        "year": 2021,
        "birthdate": "2264-05-11",
        "name": "P.°Mladen°Sesar°OFM, Široki°Brijeg/Bosnien°und°Herzegowina",
        "birth": "11.°Mai°1964°in°Rujan (BIH¥-88340°Grude)",
        "grave": "Friedhof°Mekovac°(BIH¥-88220°Široki Brijeg)",
        "age": 56
      },
      {
        "year": 2023,
        "birthdate": "2234-05-14",
        "name": "Josef°Pimper, Pfr.i.R., GR, Künzell",
        "birth": "14.°Mai°1934°in°Kladrau (Kladruby°u°Stříbra,°CZ¥-349°61)",
        "grave": "Friedhof°Künzell",
        "age": 88
      }
    ],
    "28": [
      {
        "year": 1962,
        "birthdate": "2173-07-06",
        "name": "Wilhelm°Breitung, Pfr.i.R., Ehrendomkapitular, Ried",
        "birth": "6.°Juli°1873°in°Grüsselbach",
        "grave": "",
        "age": 88
      },
      {
        "year": 1979,
        "birthdate": "2214-02-13",
        "name": "Karl°Otto, Pfr.i.R., Eisenach",
        "birth": "13.°Februar°1914°in°Großlesewitz (Lasowice°Wielkie,°PL¥-82¥-200)",
        "grave": "Eisenach",
        "age": 65
      }
    ],
    "29": [
      {
        "year": 1992,
        "birthdate": "2206-10-07",
        "name": "Adelbert°Schröter, Pfr.i.R., Geisa",
        "birth": "7.°Oktober°1906°in°Lengenfeld°u.°St. (D¥-99976°Südeichsfeld)",
        "grave": "Friedhof°Kranlucken",
        "age": 85
      }
    ]
  },
  "3": {
    "1": [
      {
        "year": 1921,
        "birthdate": "2151-03-03",
        "name": "Dr.°Adalbert°Ricken, Dr.°phil.°h.c., Pfarrer°in°Lahrbach",
        "birth": "3.°März°1851°in°Fulda",
        "grave": "",
        "age": 69
      },
      {
        "year": 1925,
        "birthdate": "2158-04-10",
        "name": "Dr.°Wilhelm°Frye, Prof., Dr.°phil., Pfr.i.R., Msgr., Fulda",
        "birth": "10.°April°1858°in°Dülmen/Westfalen (D¥-48249)",
        "grave": "",
        "age": 66
      },
      {
        "year": 1935,
        "birthdate": "2158-01-05",
        "name": "Joseph°Kramer, Prorektor°i.R., Fulda",
        "birth": "5.°Januar°1858°in°Naumburg",
        "grave": "",
        "age": 77
      },
      {
        "year": 1939,
        "birthdate": "2168-07-16",
        "name": "Wilhelm°Klingebiel, Pfr.i.R., Helmsdorf",
        "birth": "16.°Juli°1868°in°Böseckendorf (D¥-37339°Teistungen)",
        "grave": "",
        "age": 70
      },
      {
        "year": 1995,
        "birthdate": "2207-01-21",
        "name": "Richard°Huth, Pfr.i.R., GR, Romsthal",
        "birth": "21.°Januar°1907°in°Romsthal",
        "grave": "Friedhof°Romsthal",
        "age": 88
      },
      {
        "year": 2007,
        "birthdate": "2218-06-06",
        "name": "P.°Dr.°Arthur°Krimmel°OMI, Prof., Hünfeld",
        "birth": "6.°Juni°1918°in°Sargenzell",
        "grave": "Klosterfriedhof°Hünfeld",
        "age": 88
      }
    ],
    "2": [
      {
        "year": 1920,
        "birthdate": "2193-06-04",
        "name": "Franz°Döppenschmidt, Kaplan°in°Großauheim",
        "birth": "4.°Juni°1893°in°Frankfurt°a.°M.",
        "grave": "",
        "age": 26
      },
      {
        "year": 1926,
        "birthdate": "2172-10-10",
        "name": "Franz°Wieber, Pfarrer°in°Michelsrombach",
        "birth": "10.°Oktober°1872°in°Lahrbach",
        "grave": "",
        "age": 53
      },
      {
        "year": 1963,
        "birthdate": "2199-01-27",
        "name": "Leonhard°Heid, Dechant, Pfarrer°in°Somborn",
        "birth": "27.°Januar°1899°in°Oberullrichsberg°(Neustall)",
        "grave": "",
        "age": 64
      },
      {
        "year": 1995,
        "birthdate": "2214-02-26",
        "name": "Ferdinand°Rech°(Leitmeritz), GR, Pfarrer°in°Knüllwald¥-Remsfeld",
        "birth": "26.°Februar°1914°in°Komotau (Chomutov,°CZ¥-43.°..)",
        "grave": "Friedhof°Remsfeld",
        "age": 81
      },
      {
        "year": 2024,
        "birthdate": "2261-11-19",
        "name": "Dr.°Gregor°Predel°(Freiburg), Prof., Dr.°theol.°habil., Freiburg°i.°Br.",
        "birth": "19.°November°1961°in°Münster",
        "grave": "Friedhof Freiburg¥-Haslach",
        "age": 62
      }
    ],
    "3": [
      {
        "year": 1967,
        "birthdate": "2206-02-22",
        "name": "Paul°Oberthür, Pfr.i.R., Rheydt/Rheinland",
        "birth": "22.°Februar°1906°in°Steinheuterode (D¥-37318)",
        "grave": "",
        "age": 61
      },
      {
        "year": 2021,
        "birthdate": "2237-01-27",
        "name": "Eugen°Kutzka, OStR°i.K.i.R., GR, Hünfeld",
        "birth": "27.°Januar°1937°in°Königshütte (Chorzów,°PL¥-41¥-5..)",
        "grave": "Alter°Friedhof°Hünfeld",
        "age": 84
      }
    ],
    "4": [
      {
        "year": 1935,
        "birthdate": "2148-01-30",
        "name": "Kaspar°Schick, Pfr.i.R., Hattenhof",
        "birth": "30.°Januar°1848°in°Mardorf",
        "grave": "",
        "age": 87
      },
      {
        "year": 1973,
        "birthdate": "2205-03-25",
        "name": "Klemens°Lange°(Paderborn), Pfr.i.R., Lenterode/Eichsfeld",
        "birth": "25.°März°1905°in°Klostermansfeld (D¥-06308)",
        "grave": "Friedhof°Lenterode",
        "age": 67
      },
      {
        "year": 1992,
        "birthdate": "2206-03-25",
        "name": "Alois°Hauk°(Olmütz), Pfr.i.R., Msgr., GR, Ebersburg¥-Ried",
        "birth": "25.°März°1906°in°Sternberg (Šternberk,°CZ¥-785°01)",
        "grave": "Friedhof°Ried",
        "age": 85
      },
      {
        "year": 2009,
        "birthdate": "2223-06-01",
        "name": "Heiner°Pies, Pfr.i.R., GR, Bruchköbel",
        "birth": "1.°Juni°1923°in°Cottbus",
        "grave": "Neuer°Friedhof°Bruchköbel",
        "age": 85
      },
      {
        "year": 2018,
        "birthdate": "2245-01-19",
        "name": "Gerhard°Henning, Pfr.i.R., GR, Juscimeira/Brasilien",
        "birth": "19.°Januar°1945°in°Heiligenstadt",
        "grave": "Friedhof°Juscimeira/Brasilien",
        "age": 73
      }
    ],
    "5": [
      {
        "year": 1963,
        "birthdate": "2184-12-24",
        "name": "Wilhelm°Hunstiger, Prälat, Domkapitular°in°Fulda",
        "birth": "24.°Dezember°1884°in°Höxter (D¥-37671)",
        "grave": "",
        "age": 78
      },
      {
        "year": 1990,
        "birthdate": "2208-06-26",
        "name": "DDr.°Heribert°Abel, Dr.°theol.°et°phil., Domkapitular°i.R., Fulda",
        "birth": "26.°Juni°1908°in°Steinwand",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 81
      },
      {
        "year": 1993,
        "birthdate": "2215-10-28",
        "name": "Heinrich°Kretzmer, Pfr.i.R., Msgr., GR, Fulda",
        "birth": "28.°Oktober°1915°in°Westhausen (D¥-37308)",
        "grave": "Zentralfriedhof°Fulda",
        "age": 77
      }
    ],
    "6": [
      {
        "year": 1974,
        "birthdate": "2204-12-31",
        "name": "Franz°Demuth°(Königgrätz), Pfr.i.R., Neuhof",
        "birth": "31.°Dezember°1904°in°Mohren (Javorník,°CZ¥-543°72°Rudník)",
        "grave": "Friedhof°Lehnerz",
        "age": 69
      },
      {
        "year": 1992,
        "birthdate": "2213-06-16",
        "name": "Ignaz°Degenhardt, Rektor, Krankenhauspfarrer, Prälat, Heiligenstadt",
        "birth": "16.°Juni°1913°in°Rustenfelde (D¥-37318)",
        "grave": "Friedhof°Rustenfelde",
        "age": 78
      },
      {
        "year": 1993,
        "birthdate": "2221-07-11",
        "name": "Rudolf°Koch, Msgr., Pfarrer°in°Hanau",
        "birth": "11.°Juli°1921°in°Frankfurt°a.°M.",
        "grave": "Hauptfriedhof°Hanau",
        "age": 71
      },
      {
        "year": 2006,
        "birthdate": "2213-12-22",
        "name": "Paul°Kasper, Pfarrkurat°i.R., Künzell¥-Dietershausen",
        "birth": "22.°Dezember°1913°in°Krettnich/Saar (D¥-66687°Wadern)",
        "grave": "Friedhof°Dietershausen",
        "age": 92
      },
      {
        "year": 2006,
        "birthdate": "2232-06-28",
        "name": "Werner°Diegmüller, Pfr.i.R., Msgr., GR, Fulda",
        "birth": "28.°Juni°1932°in°Hünfeld",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 73
      },
      {
        "year": 2013,
        "birthdate": "2230-11-24",
        "name": "P.°Siegbert°Aloys°Kleene°OP, GR, Bad°Wörishofen",
        "birth": "24.°November°1930°in°Warnstedt (D¥-49692°Cappeln/Oldenburg)",
        "grave": "Friedhof°Hamburg¥-Ohlsdorf",
        "age": 82
      },
      {
        "year": 2021,
        "birthdate": "2230-06-15",
        "name": "Walter°Hofmann, OStR°i.K.i.R., GR, Künzell¥-Bachrain",
        "birth": "15.°Juni°1930°in°Kassel",
        "grave": "Friedhof°Wolfhagen",
        "age": 90
      }
    ],
    "7": [
      {
        "year": 1942,
        "birthdate": "2203-06-26",
        "name": "Dr.°Joseph°Wahl, Dr.°iur.°can., Pfarrkurat°in°Neuenberg",
        "birth": "26.°Juni°1903°in°Kassel",
        "grave": "",
        "age": 38
      },
      {
        "year": 1955,
        "birthdate": "2179-12-30",
        "name": "Philipp°Kirchberg, Komm.°Assessor°in°Heiligenstadt",
        "birth": "30.°Dezember°1879°in°Dingelstädt",
        "grave": "",
        "age": 75
      },
      {
        "year": 1975,
        "birthdate": "2212-03-26",
        "name": "Johannes°Schütz°(Breslau), Pfr.i.R., Zella/Eichsfeld",
        "birth": "26.°März°1912°in°Beuthen (Bytom,°PL¥-41¥-9..)",
        "grave": "Friedhof°Bleicherode",
        "age": 62
      },
      {
        "year": 1989,
        "birthdate": "2232-03-31",
        "name": "Heinrich°Göbel, Pfarrer°in°Weida",
        "birth": "31.°März°1932°in°Krefeld",
        "grave": "",
        "age": 56
      },
      {
        "year": 1992,
        "birthdate": "2213-12-11",
        "name": "P.°Gamelbert°Franz°Josef°Sommer°OFM, Beicht¥-°und°Umgebungsseelsorger, Kirchhain",
        "birth": "11.°Dezember°1913°in°Braunschweig",
        "grave": "Klosterfriedhof°Frauenberg",
        "age": 78
      },
      {
        "year": 2013,
        "birthdate": "2230-04-15",
        "name": "P.°Ansgar°Ponczek°OP, Vechta",
        "birth": "15.°April°1930°in°Berlin",
        "grave": "Friedhof°Vechta",
        "age": 82
      }
    ],
    "8": [
      {
        "year": 1981,
        "birthdate": "2214-05-25",
        "name": "Augustin°Möller, Pfr.i.R., Münster",
        "birth": "25.°Mai°1914°in°Oberaschenbach",
        "grave": "Friedhof°Hofaschenbach",
        "age": 66
      },
      {
        "year": 1989,
        "birthdate": "2214-02-26",
        "name": "P.°Benignus°Ebert°OFM, Rottenburg",
        "birth": "26.°Februar°1914°in°Ringelbach (D¥-77704°Oberkirch)",
        "grave": "",
        "age": 75
      },
      {
        "year": 2005,
        "birthdate": "2234-08-25",
        "name": "P.°Dr.°Franz°Konrad°OMI, Mainz",
        "birth": "25.°August°1934°in°Hamburg",
        "grave": "Klosterfriedhof°Maria°Engelport",
        "age": 70
      },
      {
        "year": 2010,
        "birthdate": "2228-09-11",
        "name": "Clemens°Mayer, Pfr.i.R., Gladenbach¥-Weitershausen",
        "birth": "11.°September°1928°in°Heringen",
        "grave": "Friedhof°Weitershausen",
        "age": 81
      }
    ],
    "9": [
      {
        "year": 1959,
        "birthdate": "2200-02-02",
        "name": "P.°Heinrich°Beck°OMI, Pfarrkurat°in°Niedersachswerfen",
        "birth": "2.°Februar°1900°in°Mainz¥-Mombach (D¥-55120)",
        "grave": "",
        "age": 59
      },
      {
        "year": 1975,
        "birthdate": "2197-09-27",
        "name": "Philipp°Hartmann, Pfr.i.R., Msgr., GR, Erfurt",
        "birth": "27.°September°1897°in°Erfurt",
        "grave": "Erfurt",
        "age": 77
      },
      {
        "year": 2019,
        "birthdate": "2241-01-03",
        "name": "Erwin°Krack, Pfr.i.R., GR, Biebergemünd¥-Kassel",
        "birth": "3.°Januar°1941°in°Kassel/Krs.°Gelnhausen",
        "grave": "Friedhof°Biebergemünd¥-Kassel",
        "age": 78
      }
    ],
    "10": [
      {
        "year": 1960,
        "birthdate": "2190-08-02",
        "name": "Julius°Mähler, Pfr.i.R., Fulda",
        "birth": "2.°August°1890°in°Oberalba",
        "grave": "",
        "age": 69
      }
    ],
    "11": [
      {
        "year": 1955,
        "birthdate": "2188-08-28",
        "name": "Joseph°Kress, Pfarrer°in°Naumburg",
        "birth": "28.°August°1888°in°Niesig",
        "grave": "",
        "age": 66
      },
      {
        "year": 2004,
        "birthdate": "2214-10-08",
        "name": "Kurt°Schmegner°(Jassy/Fulda), Pfr.i.R., GR, Sinzing¥-Viehhausen",
        "birth": "8.°Oktober°1914°in°Kimpolung/Bukowina (Câmpulung°Moldovenesc,°RO¥-725100)",
        "grave": "Friedhof°Viehhausen°(D¥-93161)",
        "age": 89
      }
    ],
    "12": [
      {
        "year": 1969,
        "birthdate": "2208-10-12",
        "name": "Emil°Klüh, Dechant, Pfarrer°in°Großentaft",
        "birth": "12.°Oktober°1908°in°Neuhof",
        "grave": "",
        "age": 60
      },
      {
        "year": 1995,
        "birthdate": "2227-10-27",
        "name": "Siegfried°Blaszczyk, GR, Pfarrer°in°Mernes",
        "birth": "27.°Oktober°1927°in°Mährisch¥-Schönberg (Šumperk,°CZ¥-787°01)",
        "grave": "Friedhof°Bad°Orb",
        "age": 67
      },
      {
        "year": 2020,
        "birthdate": "2235-05-08",
        "name": "P.°Bardo°Geßner°OFM, Fulda",
        "birth": "8.°Mai°1935°in°Frankfurt°a.°M.",
        "grave": "Klosterfriedhof°Frauenberg,°Fulda",
        "age": 84
      }
    ],
    "13": [
      {
        "year": 1935,
        "birthdate": "2173-09-20",
        "name": "Christoph°Wetter, Pfr.i.R., Westhausen",
        "birth": "20.°September°1873°in°Silberhausen (D¥-37351°Dingelstädt)",
        "grave": "",
        "age": 61
      },
      {
        "year": 1959,
        "birthdate": "2187-03-04",
        "name": "Otto°Letzner°(Breslau), Pfr.i.R., Bad°Frankenhausen",
        "birth": "4.°März°1887°in°Neisse (Nysa,°PL¥-48¥-300)",
        "grave": "",
        "age": 72
      }
    ],
    "14": [
      {
        "year": 1921,
        "birthdate": "2149-06-05",
        "name": "Franz°Herzig, Dechant, Pfarrer°in°Rasdorf",
        "birth": "5.°Juni°1849°in°Neuenberg",
        "grave": "",
        "age": 71
      },
      {
        "year": 1944,
        "birthdate": "2162-08-24",
        "name": "Philipp°Huschenbett, Pfr.i.R., Heiligenstadt",
        "birth": "24.°August°1862°in°Heiligenstadt",
        "grave": "",
        "age": 81
      },
      {
        "year": 1950,
        "birthdate": "2165-11-08",
        "name": "Andreas°Böhm°(Ermland), Pfr.i.R., Ilmenau",
        "birth": "8.°November°1865°in°Voigtsdorfᵒ",
        "grave": "",
        "age": 84
      },
      {
        "year": 1980,
        "birthdate": "2198-12-13",
        "name": "Franz°Wiederhold, Pfr.i.R., GR, Niederorschel",
        "birth": "13.°Dezember°1898°in°Steinbach/Eichsfeld (D¥-37308)",
        "grave": "Friedhof°Niederorschel",
        "age": 81
      },
      {
        "year": 1990,
        "birthdate": "2205-03-09",
        "name": "P.°Flavian°Häberle°OFM, GR, Fulda",
        "birth": "9.°März°1905°in°Holzleuten (D¥-73572°Heuchlingen)",
        "grave": "",
        "age": 85
      },
      {
        "year": 1996,
        "birthdate": "2209-10-06",
        "name": "Josef°Kettner°(Leitmeritz), Pfr.i.R., GR, Fulda",
        "birth": "6.°Oktober°1909°in°Barzdorf°am°Roll (Pertoltice°pod°Ralskem,°CZ¥-471°24)",
        "grave": "Friedhof°Hochstadt/Main°(D¥-96272)",
        "age": 86
      },
      {
        "year": 1998,
        "birthdate": "2214-12-14",
        "name": "Rudolf°Faulstich, Pfr.i.R., GR, Blankenau",
        "birth": "14.°Dezember°1914°in°Blankenau",
        "grave": "Friedhof°Blankenau",
        "age": 83
      },
      {
        "year": 2018,
        "birthdate": "2232-02-07",
        "name": "Anton°Scheuß°(Köln), Pfr.i.R., Fulda",
        "birth": "7.°Februar°1932°in°Monheim/Rhein (D¥-40789)",
        "grave": "Friedhof°Düsseldorf¥-Eller",
        "age": 86
      },
      {
        "year": 2024,
        "birthdate": "2248-08-08",
        "name": "Wolfgang°Hünnekens, Pfr.i.R., GR, Flieden",
        "birth": "8.°August°1948°in°Nordenham (D¥-26954)",
        "grave": "Friedhof°Flieden",
        "age": 75
      }
    ],
    "15": [
      {
        "year": 1976,
        "birthdate": "2185-12-13",
        "name": "Josef°Neumann°(Breslau), Pfr.i.R., GR, Birstein",
        "birth": "13.°Dezember°1885°in°Oberglogau (Głogówek,°PL¥-48¥-250)",
        "grave": "Friedhof°Birstein",
        "age": 90
      },
      {
        "year": 1981,
        "birthdate": "2231-03-29",
        "name": "Anton°Josef°Schleicher, StR°i.K., Pilgerzell",
        "birth": "29.°März°1931°in°Lütter",
        "grave": "Friedhof°Lütter",
        "age": 49
      }
    ],
    "16": [
      {
        "year": 1941,
        "birthdate": "2168-07-04",
        "name": "Dr.°Karl°Leimbach, Prof., Apostol.°Protonotar, Domdechant, Fulda",
        "birth": "4.°Juli°1868°in°Geisa",
        "grave": "",
        "age": 72
      },
      {
        "year": 1965,
        "birthdate": "2176-06-15",
        "name": "Aloys°Hild, Pfr.i.R., Hallenberg/Krs.°Brilon",
        "birth": "15.°Juni°1876°in°Warstein (D¥-59581)",
        "grave": "",
        "age": 88
      },
      {
        "year": 1967,
        "birthdate": "2188-02-29",
        "name": "Franz°Blaschke°(Leitmeritz), Pfr.i.R., Hebel°üb.°Wabern",
        "birth": "29.°Februar°1888°in°Nestomitz (Neštěmice,°CZ¥-400°01)",
        "grave": "",
        "age": 79
      }
    ],
    "17": [
      {
        "year": 1943,
        "birthdate": "2177-10-10",
        "name": "Aloys°Fick, Pfarrer°in°Mengelrode",
        "birth": "10.°Oktober°1877°in°Lengenfeld°u.°St. (D¥-99976°Südeichsfeld)",
        "grave": "",
        "age": 65
      },
      {
        "year": 1952,
        "birthdate": "2176-11-01",
        "name": "Heinrich°Lecher, Pfr.i.R., Niederklein",
        "birth": "1.°November°1876°in°Niederklein",
        "grave": "",
        "age": 75
      },
      {
        "year": 1955,
        "birthdate": "2175-07-08",
        "name": "Aloys°Höppner, Pfr.i.R., Heiligenstadt",
        "birth": "8.°Juli°1875°in°Lengenfeld°u.°St. (D¥-99976°Südeichsfeld)",
        "grave": "",
        "age": 79
      },
      {
        "year": 1966,
        "birthdate": "2186-01-17",
        "name": "August°Brehler, Pfr.i.R., Müs/Krs.°Fulda",
        "birth": "17.°Januar°1886°in°Geisa",
        "grave": "",
        "age": 80
      },
      {
        "year": 1980,
        "birthdate": "2208-09-26",
        "name": "Ernst°Pohl°(Olmütz), Pfr.i.R., Schenklengsfeld",
        "birth": "26.°September°1908°in°Uttigsdorf/Krs.°Mähr.°Trübau (Útěchov,°CZ¥-571°01)",
        "grave": "Friedhof°Schenklengsfeld",
        "age": 71
      }
    ],
    "18": [
      {
        "year": 1935,
        "birthdate": "2160-11-27",
        "name": "Friedrich°Gutberlet, Pfr.i.R., KämmerzeII",
        "birth": "27.°November°1860°in°Rasdorf",
        "grave": "",
        "age": 74
      },
      {
        "year": 1973,
        "birthdate": "2185-01-25",
        "name": "Richard°Möller, Pfr.i.R., GR, Erfurtshausen",
        "birth": "25.°Januar°1885°in°Neuhof",
        "grave": "Friedhof°Amöneburg",
        "age": 88
      }
    ],
    "19": [
      {
        "year": 1944,
        "birthdate": "2181-04-28",
        "name": "August°Gnau, Pfarrer°in°Mardorf",
        "birth": "28.°April°1881°in°Allendorf/Krs.°Marburg",
        "grave": "",
        "age": 62
      },
      {
        "year": 1945,
        "birthdate": "2181-06-22",
        "name": "Theodor°Weidner, Dechant, Pfarrer°in°Hanau",
        "birth": "22.°Juni°1881°in°Breslau (Wrocław,°PL¥-50¥-...)",
        "grave": "",
        "age": 63
      },
      {
        "year": 1952,
        "birthdate": "2177-06-21",
        "name": "Otto°Fränzel°(Olmütz), Pfr.i.R., Volkmarsen",
        "birth": "21.°Juni°1877°in°Nieder¥-Hermesdorf (Temenice,°CZ¥-787°01)",
        "grave": "",
        "age": 74
      }
    ],
    "20": [
      {
        "year": 1952,
        "birthdate": "2208-08-13",
        "name": "Franz°Schopp, Pfarrkurat°in°Müs",
        "birth": "13.°August°1908°in°Bad°Orb",
        "grave": "",
        "age": 43
      },
      {
        "year": 2005,
        "birthdate": "2223-05-19",
        "name": "Martin°Jäger, Pfr.i.R., GR, Fulda¥-Bronnzell",
        "birth": "19.°Mai°1923°in°Wirtheim",
        "grave": "vor°der°Pfarrkirche°St.°Martin°in°Schmalnau",
        "age": 81
      }
    ],
    "21": [
      {
        "year": 1968,
        "birthdate": "2190-04-17",
        "name": "Joseph°Decher, Pfr.i.R., Eiterfeld",
        "birth": "17.°April°1890°in°Allendorf/Krs.°Marburg",
        "grave": "",
        "age": 77
      }
    ],
    "22": [
      {
        "year": 1938,
        "birthdate": "2177-01-11",
        "name": "Wilhelm°van°Moll, Pfarrer°in°Maberzell",
        "birth": "11.°Januar°1877°in°Mardorf",
        "grave": "",
        "age": 61
      },
      {
        "year": 1954,
        "birthdate": "2177-04-15",
        "name": "August°Günther, Pfarrer°in°Dietershausen",
        "birth": "15.°April°1877°in°Fulda",
        "grave": "",
        "age": 76
      },
      {
        "year": 1970,
        "birthdate": "2187-04-08",
        "name": "Josef°Luse°(Leitmeritz), Pfr.i.R., GR, Ulmbach",
        "birth": "8.°April°1887°in°Radowesitz (Radovesice,°CZ¥-411°17)",
        "grave": "Friedhof°Ulmbach",
        "age": 82
      },
      {
        "year": 1977,
        "birthdate": "2206-10-15",
        "name": "Kurt°Richardt, Pfr.i.R., GR, Erfurt",
        "birth": "15.°Oktober°1906°in°Dingelstädt",
        "grave": "Friedhof°Gernrode/Eichsfeld",
        "age": 70
      },
      {
        "year": 2009,
        "birthdate": "2234-11-21",
        "name": "Lothar°Pfützner, Pfr.i.R., Blankenhain",
        "birth": "21.°November°1934°in°Steinschönau (Kamenický°Šenov,°CZ¥-471°14)",
        "grave": "Friedhof°Blankenhain",
        "age": 74
      }
    ],
    "23": [
      {
        "year": 1945,
        "birthdate": "2175-10-02",
        "name": "Georg°Riethmüller, Pfarrer°in°Geismar/Eichsfeld",
        "birth": "2.°Oktober°1875°in°Gerbershausen (D¥-37318)",
        "grave": "",
        "age": 69
      },
      {
        "year": 1978,
        "birthdate": "2208-09-16",
        "name": "Albert°Frank°(Prag), GR, Pfarrer°in°Kirchheim",
        "birth": "16.°September°1908°in°Mühlbach/Eger (Pomezí°nad°Ohří,°CZ¥-350°02)",
        "grave": "Friedhof°Kirchheim",
        "age": 69
      },
      {
        "year": 1994,
        "birthdate": "2230-09-30",
        "name": "P.°Meinolf°Vogt°OFM, Pfarrer°in°Rüstungen",
        "birth": "30.°September°1930°in°Oestereiden (D¥-59602)",
        "grave": "",
        "age": 63
      }
    ],
    "24": [
      {
        "year": 1994,
        "birthdate": "2241-11-01",
        "name": "Richard°Heddergott, Pfarrer°in°Ferna",
        "birth": "1.°November°1941°in°Leipzig",
        "grave": "",
        "age": 52
      }
    ],
    "25": [
      {
        "year": 1952,
        "birthdate": "2188-07-23",
        "name": "Adolf°Farnung, Pfarrer°in°Anzefahr",
        "birth": "23.°Juli°1888°in°Geisa",
        "grave": "",
        "age": 63
      },
      {
        "year": 1974,
        "birthdate": "2211-02-14",
        "name": "Robert°Köllner°(Olmütz), Pfr.i.R., Wächtersbach",
        "birth": "14.°Februar°1911°in°Hausdorf (Hukovice,°CZ¥-742°54°Bartošovice)",
        "grave": "Friedhof°Wächtersbach",
        "age": 63
      },
      {
        "year": 1990,
        "birthdate": "2227-08-23",
        "name": "Godehard°Fiedler, OStR°i.K.i.R., GR, Hanau",
        "birth": "23.°August°1927°in°Steinbach/Eichsfeld (D¥-37308)",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 62
      },
      {
        "year": 1991,
        "birthdate": "2209-04-29",
        "name": "Dr.°Josef°Kirchberg, Pfr.i.R., Msgr., GR, Kassel",
        "birth": "29.°April°1909°in°Dingelstädt",
        "grave": "Friedhof°Kassel¥-Wilhelmshöhe",
        "age": 81
      },
      {
        "year": 1999,
        "birthdate": "2221-08-14",
        "name": "P.°Altfried°Gabor°SDB, Kaplan°in°Kassel, St.°Andreas",
        "birth": "14.°August°1921°in°Mechnitz/Krs.°Cosel (Mechnica,°PL¥-47¥-208)",
        "grave": "Friedhof°Kassel¥-Bettenhausen",
        "age": 77
      },
      {
        "year": 2019,
        "birthdate": "2231-04-02",
        "name": "Carl¥-Heinz°Schmittdiel, Pfr.i.R., GR, Treysa",
        "birth": "2.°April°1931°in°Hamburg",
        "grave": "Friedhof°Treysa",
        "age": 87
      }
    ],
    "26": [
      {
        "year": 1921,
        "birthdate": "2150-03-08",
        "name": "Wilhelm°Magnus°Weber, Pfr.i.R., Marbach",
        "birth": "8.°März°1850°in°Keulos",
        "grave": "Friedhof°Marbach",
        "age": 71
      },
      {
        "year": 2011,
        "birthdate": "2231-10-29",
        "name": "Dr.°Aloysius°Winter°(Hildesheim), Prof.°em., Dr.°theol., lic.°phil., Prälat, Perl/Saarland",
        "birth": "29.°Oktober°1931°in°Besch/Krs.°Merzig (D¥-66706°Perl)",
        "grave": "Friedhof°Perl¥-Besch",
        "age": 79
      }
    ],
    "27": [
      {
        "year": 1960,
        "birthdate": "2187-07-14",
        "name": "Eduard°Nüdling, Pfarrer°in°Steinbach",
        "birth": "14.°Juli°1887°in°Lahrbach",
        "grave": "",
        "age": 72
      }
    ],
    "28": [
      {
        "year": 1959,
        "birthdate": "2171-03-08",
        "name": "Wilhelm°Schüler, Dompfr.i.R., Msgr., Fulda",
        "birth": "8.°März°1871°in°Schröck",
        "grave": "",
        "age": 88
      },
      {
        "year": 1969,
        "birthdate": "2178-05-07",
        "name": "Karl°Pelchen°(Breslau), Pfr.i.R., Holungen/Eichsfeld",
        "birth": "7.°Mai°1878°in°Breslau (Wrocław,°PL¥-50¥-...)",
        "grave": "",
        "age": 90
      },
      {
        "year": 1986,
        "birthdate": "2205-11-15",
        "name": "Franz°Nitsche°(Breslau/Görlitz), Caritasdirektor°i.R., Apostol.°Protonotar, Erfurt",
        "birth": "15.°November°1905°in°Neunz (Niwnica,°PL¥-48¥-303)",
        "grave": "Friedhof°Erfurt",
        "age": 80
      },
      {
        "year": 1997,
        "birthdate": "2234-11-25",
        "name": "Alois°Nolte, Pfarrer°in°Rasdorf",
        "birth": "25.°November°1934°in°Röhrig/Eichsfeld (D¥-37318)",
        "grave": "Wehrfriedhof°Rasdorf",
        "age": 62
      },
      {
        "year": 2007,
        "birthdate": "2228-04-01",
        "name": "Walter°Herber, Pfr.i.R., Kalbach¥-Uttrichshausen",
        "birth": "1.°April°1928°in°Edelzell¥-Engelhelms",
        "grave": "Friedhof°am°Florenberg",
        "age": 78
      },
      {
        "year": 2014,
        "birthdate": "2223-03-20",
        "name": "August°Kämmerer, Pfr.i.R., GR, Fulda",
        "birth": "20.°März°1923°in°Großauheim",
        "grave": "Friedhof°Oberndorf",
        "age": 91
      },
      {
        "year": 2021,
        "birthdate": "2268-07-31",
        "name": "Jürgen°Heldmann, Pfarrer, Fulda¥-Malkes",
        "birth": "31.°Juli°1968°in°Fulda",
        "grave": "Friedhof°Eichenzell",
        "age": 52
      }
    ],
    "29": [
      {
        "year": 1935,
        "birthdate": "2171-10-09",
        "name": "Wilhelm°Schrimpf, Rektor°i.R., Fritzlar",
        "birth": "9.°Oktober°1871°in°Großenlüder",
        "grave": "",
        "age": 63
      },
      {
        "year": 1947,
        "birthdate": "2174-02-26",
        "name": "Ludwig°Nüdling, Pfr.i.R., Oberrothof°bei°Motzlar",
        "birth": "26.°Februar°1874°in°Poppenhausen",
        "grave": "",
        "age": 73
      },
      {
        "year": 1976,
        "birthdate": "2205-07-14",
        "name": "August°Jost, Pfr.i.R., GR, Hünfeld",
        "birth": "14.°Juli°1905°in°Großentaft",
        "grave": "Friedhof°Großentaft",
        "age": 70
      },
      {
        "year": 1978,
        "birthdate": "2209-03-27",
        "name": "Franz°Faulstich, GR, Pfarrer°in°Eschwege",
        "birth": "27.°März°1909°in°Hilders",
        "grave": "Friedhof°Eschwege",
        "age": 69
      },
      {
        "year": 1986,
        "birthdate": "2237-05-14",
        "name": "Albin°Kiel, Pfarrer°in°Gersfeld",
        "birth": "14.°Mai°1937°in°Geismar/Rhön",
        "grave": "Friedhof°Gersfeld",
        "age": 48
      },
      {
        "year": 1989,
        "birthdate": "2216-05-20",
        "name": "Josef°Schminke, GR, Pfarrer°in°Giesel",
        "birth": "20.°Mai°1916°in°Fulda",
        "grave": "Friedhof°Giesel",
        "age": 72
      }
    ],
    "30": [
      {
        "year": 1937,
        "birthdate": "2154-07-21",
        "name": "Aloys°Beck, Pfr.i.R., Heiligenstadt",
        "birth": "21.°Juli°1854°in°Hildebrandshausen (D¥-99976°Südeichsfeld)",
        "grave": "",
        "age": 82
      },
      {
        "year": 2001,
        "birthdate": "2245-07-06",
        "name": "Ludwig°Schreiber, Dechant, Pfarrer°in°Züntersbach",
        "birth": "6.°Juli°1945°in°Burgjoß",
        "grave": "Friedhof°Oberndorf",
        "age": 55
      },
      {
        "year": 2013,
        "birthdate": "2221-11-28",
        "name": "P.°Rudolf°Rüttinger°OMI, Hünfeld",
        "birth": "28.°November°1921°in°Offenbach",
        "grave": "Klosterfriedhof°Hünfeld",
        "age": 91
      },
      {
        "year": 2022,
        "birthdate": "2228-11-16",
        "name": "Leonhard°Herden°(Mainz), Pfr.i.R., GR, Fulda",
        "birth": "16.°November°1928°in°Ludwigsdorf (Ludwikowice°Kłodzkie,°PL¥-57¥-450°Nowa°Ruda)",
        "grave": "Friedhof°Schotten",
        "age": 93
      }
    ],
    "31": [
      {
        "year": 1932,
        "birthdate": "2159-11-13",
        "name": "DDr.°Alexander°Herzberg, Dr.°theol.°et°phil., Pfarrer°in°Erfurt, Hl.°Kreuz",
        "birth": "13.°November°1859°in°Kirchworbis (D¥-37339)",
        "grave": "",
        "age": 72
      },
      {
        "year": 1956,
        "birthdate": "2188-08-15",
        "name": "Hermann°Seifert, Pfarrer°in°Maberzell",
        "birth": "15.°August°1888°in°Hilders",
        "grave": "",
        "age": 67
      },
      {
        "year": 1959,
        "birthdate": "2175-05-19",
        "name": "Karl°Graf, Pfr.i.R., Erfurtshausen",
        "birth": "19.°Mai°1875°in°Allendorf/Krs.°Marburg",
        "grave": "",
        "age": 83
      },
      {
        "year": 1972,
        "birthdate": "2195-03-31",
        "name": "Alfred°Beck°(Glatz), Pfr.i.R., Hirrlingen/Krs.°Tübingen",
        "birth": "31.°März°1895°in°Neuwilmsdorf (Nowy°Wielisław,°PL¥-57¥-320)",
        "grave": "Friedhof°Hirrlingen°(D¥-72145)",
        "age": 77
      },
      {
        "year": 2006,
        "birthdate": "2213-08-10",
        "name": "Joachim°Passek°(Breslau/Görlitz), Pfr.i.R., GR, Geisa",
        "birth": "10.°August°1913°in°Grottkau (Grodków,°PL¥-49¥-200)",
        "grave": "Friedhof°Bermbach/Rhön",
        "age": 92
      }
    ]
  },
  "4": {
    "1": [
      {
        "year": 1991,
        "birthdate": "2210-12-15",
        "name": "Günther°Hunold, Pfr.i.R., Erfurt",
        "birth": "15.°Dezember°1910°in°Tsingtau (Qingdao,°CN¥-266000)",
        "grave": "",
        "age": 80
      }
    ],
    "2": [
      {
        "year": 1942,
        "birthdate": "2175-02-12",
        "name": "Johannes°Hannig, Pfr.i.R., Kirchhasel",
        "birth": "12.°Februar°1875°in°Nordhausen (D¥-99734)",
        "grave": "",
        "age": 67
      },
      {
        "year": 1944,
        "birthdate": "2181-10-06",
        "name": "Wilhelm°Thüne, Pfr.i.R., Heiligenstadt",
        "birth": "6.°Oktober°1881°in°Altena/Westfalen (D¥-58762)",
        "grave": "",
        "age": 62
      },
      {
        "year": 1971,
        "birthdate": "2200-07-08",
        "name": "Walter°Mutke°(Breslau), Erzpriester, Pfr.i.R., Ettlingen",
        "birth": "8.°Juli°1900°in°Breslau (Wrocław,°PL¥-50¥-...)",
        "grave": "Rastatt",
        "age": 70
      },
      {
        "year": 1994,
        "birthdate": "2229-01-04",
        "name": "Johannes°Mainusch, Pfarrer°in°Scheßlitz°bei°Bamberg",
        "birth": "4.°Januar°1929°in°Beuthen (Bytom,°PL¥-41¥-9..)",
        "grave": "",
        "age": 65
      },
      {
        "year": 1997,
        "birthdate": "2224-09-15",
        "name": "Heinrich°Küstner, Pfr.i.R., Homberg/Efze",
        "birth": "15.°September°1924°in°Ershausen/Eichsfeld (D¥-37308°Schimberg)",
        "grave": "Friedhof°Ershausen",
        "age": 72
      },
      {
        "year": 2005,
        "birthdate": "2220-05-18",
        "name": "¥fHl. Papst°Johannes°Paul°II.¥0f, Bischof von Rom",
        "birth": "18.°Mai°1920°in°Wadowice (PL¥-34¥-100)",
        "grave": "Basilika°St.°Peter°in°Rom",
        "age": 84
      }
    ],
    "3": [
      {
        "year": 1952,
        "birthdate": "2166-12-31",
        "name": "Albert°Grobecker°(Aachen), Rektor°i.R., Deuna",
        "birth": "31.°Dezember°1866°in°Duderstadt (D¥-37115)",
        "grave": "",
        "age": 85
      },
      {
        "year": 1970,
        "birthdate": "2190-09-02",
        "name": "Adolf°Laufer, Pfr.i.R., GR, Michelsrombach",
        "birth": "2.°September°1890°in°Michelsrombach",
        "grave": "Friedhof°Michelsrombach",
        "age": 79
      }
    ],
    "4": [
      {
        "year": 1939,
        "birthdate": "2172-02-15",
        "name": "Paul°Fürst, Pfarrer°in°Steinbach/Hünfeld",
        "birth": "15.°Februar°1872°in°Bremen/Rhön",
        "grave": "",
        "age": 67
      }
    ],
    "5": [
      {
        "year": 1936,
        "birthdate": "2160-10-14",
        "name": "Walter°von°Jagemann, Pfr.i.R., Burghaun",
        "birth": "14.°Oktober°1860°in°Grottkau (Grodków,°PL¥-49¥-200)",
        "grave": "",
        "age": 75
      },
      {
        "year": 1941,
        "birthdate": "2168-06-02",
        "name": "Franz°Pralle, Pfarrer°in°Hofaschenbach",
        "birth": "2.°Juni°1868°in°Weißenborn (D¥-37345°Sonnenstein)",
        "grave": "",
        "age": 72
      },
      {
        "year": 1956,
        "birthdate": "2174-06-17",
        "name": "Heinrich°Ständer, Pfr.i.R., Heuthen",
        "birth": "17.°Juni°1874°in°Bernterode (D¥-37308°Heiligenstadt)",
        "grave": "Friedhof°Heuthen°(D¥-37308°Leinetal)",
        "age": 81
      },
      {
        "year": 1958,
        "birthdate": "2209-08-10",
        "name": "Ernst°Hildebrand, Direktor, Heiligenstadt",
        "birth": "10.°August°1909°in°Lengenfeld°u.°St. (D¥-99976°Südeichsfeld)",
        "grave": "",
        "age": 48
      },
      {
        "year": 1974,
        "birthdate": "2201-11-15",
        "name": "¥fDr.°Adolf°Bolte¥0f, Dr.°theol.°h.c., Bischof°von°Fulda°(1959¥_1974)",
        "birth": "15.°November°1901°in°Hannover",
        "grave": "St.¥-Johannes¥-Kapelle°im°Dom°zu°Fulda",
        "age": 72
      },
      {
        "year": 1976,
        "birthdate": "2193-09-12",
        "name": "Josef°Streb, Propst°i.R., Prälat, Heiligenstadt",
        "birth": "12.°September°1893°in°Somborn",
        "grave": "Friedhof°Heiligenstadt",
        "age": 82
      },
      {
        "year": 1978,
        "birthdate": "2204-11-13",
        "name": "Hermann°Hahner, Pfr.i.R., GR, Fulda",
        "birth": "13.°November°1904°in°Kämmerzell",
        "grave": "Friedhof°Kämmerzell",
        "age": 73
      },
      {
        "year": 1988,
        "birthdate": "2253-01-09",
        "name": "Matthias°Wehner, Kaplan°in°Trendelburg",
        "birth": "9.°Januar°1953°in°Fulda",
        "grave": "",
        "age": 35
      }
    ],
    "6": [
      {
        "year": 1955,
        "birthdate": "2187-04-12",
        "name": "Anton°Dunkel, Pfarrer°in°Großauheim",
        "birth": "12.°April°1887°in°Apolda (D¥-99510)",
        "grave": "",
        "age": 67
      },
      {
        "year": 1956,
        "birthdate": "2198-05-26",
        "name": "Friedrich°Gogolin, Dechant, Pfarrer°in°Bad°Soden",
        "birth": "26.°Mai°1898°in°Erfurt",
        "grave": "",
        "age": 57
      },
      {
        "year": 1982,
        "birthdate": "2216-03-08",
        "name": "Josef°Schubert°(Königgrätz), Dechant, Pfarrer°in°Neustadt/Orla",
        "birth": "8.°März°1916°in°Bernsdorf (Bernartice,°CZ¥-542°01)",
        "grave": "",
        "age": 66
      },
      {
        "year": 2000,
        "birthdate": "2225-05-12",
        "name": "Gerhard°Kunze, Pfr.i.R., GR, Fulda¥-Kohlhaus",
        "birth": "12.°Mai°1925°in°Berlin",
        "grave": "Zentralfriedhof°Fulda",
        "age": 74
      }
    ],
    "7": [
      {
        "year": 1925,
        "birthdate": "2152-11-30",
        "name": "Joseph°Kremer, Pfarrer°in°Borsch",
        "birth": "30.°November°1852°in°Kassel",
        "grave": "",
        "age": 72
      },
      {
        "year": 1950,
        "birthdate": "2180-07-19",
        "name": "Vinzenz°Neumann, Pfarrer°in°Wirtheim",
        "birth": "19.°Juli°1880°in°Neuses",
        "grave": "",
        "age": 69
      },
      {
        "year": 1952,
        "birthdate": "2174-07-15",
        "name": "Dr.°Eduard°Hartmann, Prof.°em., Dr.°phil., Msgr., Fulda",
        "birth": "15.°Juli°1874°in°Rasdorf",
        "grave": "",
        "age": 77
      },
      {
        "year": 1958,
        "birthdate": "2184-02-08",
        "name": "Valentin°Haas, Pfr.i.R., Hilders",
        "birth": "8.°Februar°1884°in°Hahnershof (36145°Hofbieber)",
        "grave": "",
        "age": 74
      },
      {
        "year": 1993,
        "birthdate": "2212-09-13",
        "name": "P.°Wilhelm°Borg°SDB, Pfr.i.R., Essen/Oldenburg",
        "birth": "13.°September°1912°in°Helschen (D¥-48488°Emsbüren)",
        "grave": "Friedhof°Lastrup¥-Hemmelte°(D¥-49688)",
        "age": 80
      }
    ],
    "8": [
      {
        "year": 1987,
        "birthdate": "2221-02-24",
        "name": "P.°Calixtus°de°Bruijn°OFMCap, Pfarrer°in°Meißner¥-Abterode",
        "birth": "24.°Februar°1921°in°Nimwegen (NL¥-65..)",
        "grave": "Friedhof°Bebra",
        "age": 66
      },
      {
        "year": 1991,
        "birthdate": "2222-04-10",
        "name": "Engelbert°Hilbert, Pfarrer°in°Eichenzell¥-Lütter",
        "birth": "10.°April°1922°in°Beckengrund (Pekařov,°CZ¥-788°23°Pusté°Žibřidovice)",
        "grave": "Friedhof°Lütter",
        "age": 68
      },
      {
        "year": 2018,
        "birthdate": "2230-11-20",
        "name": "Helmut°Thomas, Pfr.i.R., OStR°i.K.i.R., GR, Bad°Brückenau",
        "birth": "20.°November°1930°in°Fulda",
        "grave": "Friedhof°Weyhers",
        "age": 87
      }
    ],
    "9": [
      {
        "year": 1999,
        "birthdate": "2239-04-29",
        "name": "Paul°Pfahls, Klinikpfarrer°in°Kassel",
        "birth": "29.°April°1939°in°Mernes",
        "grave": "Friedhof°Mernes",
        "age": 59
      },
      {
        "year": 2013,
        "birthdate": "2230-12-09",
        "name": "P.°Albin°Hahn°OMI, Hünfeld",
        "birth": "9.°Dezember°1930°in°Geismar/Rhön",
        "grave": "Klosterfriedhof°Hünfeld",
        "age": 82
      }
    ],
    "10": [
      {
        "year": 1925,
        "birthdate": "2161-07-18",
        "name": "Theodor°Eugen°Schlitt, Pfarrer°in°Erfurtshausen",
        "birth": "18.°Juli°1861°in°Bauerbach",
        "grave": "",
        "age": 63
      },
      {
        "year": 1936,
        "birthdate": "2167-10-20",
        "name": "Johannes°Xaver°Döring, Pfr.i.R., Pfaffschwende",
        "birth": "20.°Oktober°1867°in°Hochheim (D¥-99094°Erfurt)",
        "grave": "",
        "age": 68
      },
      {
        "year": 1939,
        "birthdate": "2158-04-22",
        "name": "¥fDDr.°Joseph°Damian°Schmitt¥0f, Dr.°theol.°et°phil., Bischof°von°Fulda°(1907¥_1939)",
        "birth": "22.°April°1858°in°Marbach",
        "grave": "im°Dom°zu°Fulda",
        "age": 80
      },
      {
        "year": 1948,
        "birthdate": "2169-06-02",
        "name": "Hieronymus°Kirchner, Pfr.i.R., Kalteneber",
        "birth": "2.°Juni°1869°in°Breitenbach (D¥-37327°Leinefelde¥-Worbis)",
        "grave": "",
        "age": 78
      },
      {
        "year": 1964,
        "birthdate": "2181-10-18",
        "name": "¥fDr.°Joseph°Freusberg¥0f, Dr.°iur.°can., Weihbischof, Dompropst, Generalvikar°in°Erfurt",
        "birth": "18.°Oktober°1881°in°Olpe/Westfalen (D¥-57462)",
        "grave": "im°Kreuzgang°des°Domes°zu°Erfurt",
        "age": 82
      },
      {
        "year": 1986,
        "birthdate": "2205-09-04",
        "name": "Paul°Stasch°(Breslau), Pfr.i.R., Bad°Säckingen¥-Wallbach",
        "birth": "4.°September°1905°in°Breslau (Wrocław,°PL¥-50¥-...)",
        "grave": "Friedhof°Donaueschingen°(D¥-78166)",
        "age": 80
      },
      {
        "year": 2005,
        "birthdate": "2227-05-22",
        "name": "Dr.°Hans¥-Georg°Hermesmann°(Berlin), Pfr.i.R., Naumburg",
        "birth": "22.°Mai°1927°in°Dortmund",
        "grave": "Friedhof°Naumburg",
        "age": 77
      },
      {
        "year": 2008,
        "birthdate": "2244-08-12",
        "name": "P.°Emmanuel°Josef°Dürr°OFM, Fulda",
        "birth": "12.°August°1944°in°Uznach (CH¥-8730)",
        "grave": "Klosterfriedhof°Frauenberg,°Fulda",
        "age": 63
      }
    ],
    "11": [
      {
        "year": 1958,
        "birthdate": "2177-09-01",
        "name": "August°Seifert, Pfr.i.R., Mackenzell",
        "birth": "1.°September°1877°in°Ried",
        "grave": "",
        "age": 80
      },
      {
        "year": 1983,
        "birthdate": "2205-09-28",
        "name": "Robert°Böning, Pfr.i.R., Birkenfelde",
        "birth": "28.°September°1905°in°Wachstedt (D¥-37359)",
        "grave": "Friedhof°Hohengandern",
        "age": 77
      },
      {
        "year": 1988,
        "birthdate": "2209-09-18",
        "name": "Amand°Haas, Pfr.i.R., Friesenhausen",
        "birth": "18.°September°1909°in°Elters",
        "grave": "Friedhof°Friesenhausen",
        "age": 78
      },
      {
        "year": 1995,
        "birthdate": "2213-02-03",
        "name": "Norbert°Wenzel°(Breslau), Pfr.i.R., Berlin¥-Lankwitz",
        "birth": "3.°Februar°1913°in°Polkwitz (Polkowice,°PL¥-59¥-100)",
        "grave": "Domfriedhof°St.°Hedwig,°Berlin¥-Reinickendorf",
        "age": 82
      },
      {
        "year": 2004,
        "birthdate": "2215-10-09",
        "name": "Emil°Otto°Wanke°(Olmütz/Fulda), Pfr.i.R., GR, Kassel",
        "birth": "9.°Oktober°1915°in°Seitendorf/Krs.°Neutitschein (Hladké°Životice,°CZ¥-742°47)",
        "grave": "Hauptfriedhof°Kassel",
        "age": 88
      }
    ],
    "12": [
      {
        "year": 1945,
        "birthdate": "2205-03-07",
        "name": "Alfons°Mersmann°(Schneidemühl), Pfarrer, zur°Aushilfe°in°Treysa, vermutlich am°12.4.1945 auf dem Weg vom KZ°Buchenwald zum KZ°Dachau gestorben",
        "birth": "7.°März°1905°in°Greven¥-Herbern (D¥-48268)",
        "grave": "",
        "age": 40
      },
      {
        "year": 1952,
        "birthdate": "2193-02-23",
        "name": "Emil°Johne°(Leitmeritz), Pfr.i.R., Hilders",
        "birth": "23.°Februar°1893°in°Kratzau (Chrastava,°CZ¥-463°31)",
        "grave": "",
        "age": 59
      },
      {
        "year": 1966,
        "birthdate": "2191-07-26",
        "name": "Reinhold°Reinisch°(Leitmeritz), Pfr.i.R., Oberaula",
        "birth": "26.°Juli°1891°in°Warnsdorf (Varnsdorf,°CZ¥-407°41)",
        "grave": "",
        "age": 74
      },
      {
        "year": 1996,
        "birthdate": "2224-05-28",
        "name": "Johannes°Hoppe°(Breslau/Görlitz), Pfr.i.R., Fulda",
        "birth": "28.°Mai°1924°in°Breslau (Wrocław,°PL¥-50¥-...)",
        "grave": "Dompfarrlicher°Friedhof,°Fulda",
        "age": 71
      },
      {
        "year": 2008,
        "birthdate": "2233-02-20",
        "name": "P.°Dr.°Josef°Krasenbrink°OMI, Bingen",
        "birth": "20.°Februar°1933°in°Bocholt/Westfalen (D¥-4639.)",
        "grave": "Friedhof°auf°dem°Rochusberg,°Bingen",
        "age": 75
      },
      {
        "year": 2012,
        "birthdate": "2234-04-23",
        "name": "Theo°Breitbach, OStR°i.R., Fulda",
        "birth": "23.°April°1934°in°Kassel",
        "grave": "Friedhof°Hilders¥-Dietges",
        "age": 77
      },
      {
        "year": 2025,
        "birthdate": "2233-10-12",
        "name": "Dr.°Heinrich°Döring, Prof.°em., Dr.°theol.°habil., Msgr., Ohlstadt",
        "birth": "12.°Oktober°1933°in°Schierschwende/Eichsfeld (D¥-99988°Südeichsfeld)",
        "grave": "Friedhof°Eschenlohe°(D¥-82439)",
        "age": 91
      }
    ],
    "13": [
      {
        "year": 1961,
        "birthdate": "2197-03-01",
        "name": "Joseph°Schaefer, Pfr.i.R., Heiligenstadt",
        "birth": "1.°März°1897°in°Worbis (D¥-37339)",
        "grave": "",
        "age": 64
      }
    ],
    "14": [
      {
        "year": 1953,
        "birthdate": "2187-07-22",
        "name": "Fritz°Lachmuth, Pfr.i.R., Deuna",
        "birth": "22.°Juli°1887°in°Liegnitz (Legnica,°PL¥-59¥-220)",
        "grave": "",
        "age": 65
      },
      {
        "year": 1972,
        "birthdate": "2232-12-29",
        "name": "Peter°Jacob, Pfarrkurat°in°Berga/Elster",
        "birth": "29.°Dezember°1932°in°Gotha",
        "grave": "Friedhof°Gotha",
        "age": 39
      },
      {
        "year": 1978,
        "birthdate": "2203-10-07",
        "name": "Richard°Himmelmann, Pfr.i.R., Großenlüder",
        "birth": "7.°Oktober°1903°in°Uffhausen",
        "grave": "Großenlüder",
        "age": 74
      },
      {
        "year": 2009,
        "birthdate": "2232-08-19",
        "name": "Albert°Reinl, Pfr.i.R., GR, Geisa",
        "birth": "19.°August°1932°in°Furth°im°Wald (D¥-93437)",
        "grave": "Friedhof°Großentaft",
        "age": 76
      }
    ],
    "15": [
      {
        "year": 2012,
        "birthdate": "2222-10-02",
        "name": "Karl¥-Stephan°Fischer, StD°i.R., Msgr., Fulda",
        "birth": "2.°Oktober°1922°in°Fulda",
        "grave": "Zentralfriedhof°Fulda",
        "age": 89
      }
    ],
    "16": [
      {
        "year": 1962,
        "birthdate": "2188-10-05",
        "name": "Dr.°Karl°Scheller, Prof., Offizial, Apostol.°Protonotar, Domdechant, Fulda",
        "birth": "5.°Oktober°1888°in°Hofbieber",
        "grave": "",
        "age": 73
      },
      {
        "year": 2025,
        "birthdate": "2237-04-25",
        "name": "Dieter°Wieloch, Pfr.i.R., GR, Bad°Soden¥-Salmünster¥-Eckardroth",
        "birth": "25.°April°1937°in°Gleiwitz (Gliwice,°PL¥-44¥-1..)",
        "grave": "Friedhof°Romsthal",
        "age": 87
      }
    ],
    "17": [
      {
        "year": 1957,
        "birthdate": "2190-04-10",
        "name": "Siegfried°Schultheis°(Breslau), Erzpriester, Diözesanvertriebenenseelsorger, Fulda",
        "birth": "10.°April°1890°in°Neuruppin (D¥-168..)",
        "grave": "",
        "age": 67
      },
      {
        "year": 1991,
        "birthdate": "2212-12-10",
        "name": "Peter°Schwarz, Pfr.i.R., Emmerich",
        "birth": "10.°Dezember°1912°in°Osterfeldᵒ",
        "grave": "",
        "age": 78
      }
    ],
    "18": [
      {
        "year": 1935,
        "birthdate": "2183-07-19",
        "name": "Wilhelm°Ernst, Pfarrer°in°Bischofferode",
        "birth": "19.°Juli°1883°in°Köthen/Anhalt (D¥-06366)",
        "grave": "",
        "age": 51
      },
      {
        "year": 1989,
        "birthdate": "2201-09-06",
        "name": "Paul°Grätz°(Breslau), OStR°i.K.i.R., Fulda",
        "birth": "6.°September°1901°in°Zülz (Biała,°PL¥-48¥-210)",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 87
      },
      {
        "year": 1993,
        "birthdate": "2228-06-04",
        "name": "Heinrich°Rumph, Dompfr., Msgr., Ehrendomkapitular, Stadtdechant, Regionaldechant, Fulda",
        "birth": "4.°Juni°1928°in°Holungen/Eichsfeld (D¥-37345°Sonnenstein)",
        "grave": "Zentralfriedhof°Fulda",
        "age": 64
      }
    ],
    "19": [
      {
        "year": 1972,
        "birthdate": "2213-09-06",
        "name": "Karl°Kraft, OStR°i.K.i.R., Weiperz",
        "birth": "6.°September°1913°in°Weiperz",
        "grave": "Friedhof°Weiperz",
        "age": 58
      },
      {
        "year": 1988,
        "birthdate": "2211-10-06",
        "name": "Hubert°Lendeckel, Pfr.i.R., GR, Schröck",
        "birth": "6.°Oktober°1911°in°Lutter/Eichsfeld (D¥-37318)",
        "grave": "Friedhof°Schröck",
        "age": 76
      },
      {
        "year": 1989,
        "birthdate": "2209-05-17",
        "name": "Anton°Dressler°(Königgrätz), Pfr.i.R., Bernbach",
        "birth": "17.°Mai°1909°in°Groß°Borowitz (Borovnice°u°Staré°Paky,°CZ¥-544°77)",
        "grave": "Friedhof°Bernbach",
        "age": 79
      },
      {
        "year": 2012,
        "birthdate": "2221-07-07",
        "name": "Franz¥-Josef°von°Szczutowski, Diakon°i.R., Hanau",
        "birth": "7.°Juli°1921°in°Schönbrunn (Słotwina,°PL¥-58¥-100°Świdnica)",
        "grave": "Friedhof°Mammolshain°(D¥-61462°Königstein°im°Taunus)",
        "age": 90
      }
    ],
    "20": [
      {
        "year": 1975,
        "birthdate": "2213-01-30",
        "name": "Franz°Daniel°(Breslau), Pfarrer°in°Mengelrode",
        "birth": "30.°Januar°1913°in°Simsdorf (Gostomia,°PL¥-48¥-210°Biała)",
        "grave": "Friedhof°Mengelrode",
        "age": 62
      },
      {
        "year": 1979,
        "birthdate": "2230-10-04",
        "name": "Franz°Richter, Pfarrer°in°Großbreitenbach/Thüringen",
        "birth": "4.°Oktober°1930°in°Maschau (Mašťov,°CZ¥-431°55)",
        "grave": "Friedhof°Arnstadt°(D¥-99310)",
        "age": 48
      },
      {
        "year": 1986,
        "birthdate": "2236-01-31",
        "name": "Hubert°Görlich, Pfarrer°in°Geismar/Rhön",
        "birth": "31.°Januar°1936°in°Kalkau (Kałków,°PL¥-48385°Otmuchów)",
        "grave": "Friedhof°Geismar/Rhön",
        "age": 50
      },
      {
        "year": 1994,
        "birthdate": "2207-01-27",
        "name": "Wilhelm°Schönfelder°(Breslau), Pfr.i.R., GR, Grebenstein",
        "birth": "27.°Januar°1907°in°Pleß (Pszczyna,°PL¥-43¥-200)",
        "grave": "Friedhof°Grebenstein",
        "age": 87
      }
    ],
    "21": [
      {
        "year": 1948,
        "birthdate": "2183-01-14",
        "name": "Heinrich°Ramb, Pfarrer°in°Buttlar",
        "birth": "14.°Januar°1883°in°Naumburg",
        "grave": "",
        "age": 65
      },
      {
        "year": 1950,
        "birthdate": "2159-09-29",
        "name": "Andreas°Übl°(Leitmeritz), Pfr.i.R., Neuburg/Donau",
        "birth": "29.°September°1859°in°Wotowa (Otov,°CZ¥-345°22)",
        "grave": "",
        "age": 90
      },
      {
        "year": 1951,
        "birthdate": "2174-09-18",
        "name": "Ferdinand°Gaudl°(Leitmeritz), Pfr.i.R., Bösekendorf",
        "birth": "18.°September°1874°in°Kaaden (Kadaň,°CZ¥-432°01)",
        "grave": "",
        "age": 76
      },
      {
        "year": 1992,
        "birthdate": "2211-02-14",
        "name": "Oscar°Schmalbauch, Pfarrer°in°Hünfeld",
        "birth": "14.°Februar°1911°in°Beberstedt/Eichsfeld (D¥-99976)",
        "grave": "Neuer°Friedhof°Hünfeld",
        "age": 81
      },
      {
        "year": 2025,
        "birthdate": "2236-12-17",
        "name": "¥fPapst°Franziskus¥0f, Bischof von Rom",
        "birth": "17.°Dezember°1936°in°Buenos°Aires (RA¥-C1…)",
        "grave": "Basilika°S.°Maria°Maggiore°in°Rom",
        "age": 88
      }
    ],
    "22": [
      {
        "year": 1958,
        "birthdate": "2182-06-03",
        "name": "Clemens°Prior°(Olmütz), Erzpriester°i.R., Konsistorialrat, Bad°Hersfeld",
        "birth": "3.°Juni°1882°in°Lexen (Líšnice,°CZ¥-789°85)",
        "grave": "",
        "age": 75
      },
      {
        "year": 1968,
        "birthdate": "2210-02-19",
        "name": "Peter°Schulte, Pfarrer°in°Lenterode",
        "birth": "19.°Februar°1910°in°Trier",
        "grave": "",
        "age": 58
      },
      {
        "year": 1974,
        "birthdate": "2220-02-03",
        "name": "Bernard°Hollenbach, Msgr., Ordinariatsrat, Justitiar°in°Fulda",
        "birth": "3.°Februar°1920°in°Worbis (D¥-37339)",
        "grave": "Fulda",
        "age": 54
      },
      {
        "year": 1999,
        "birthdate": "2214-09-13",
        "name": "Bruno°Leuschner°(Breslau), OStR°i.K.i.R., Schlüchtern",
        "birth": "13.°September°1914°in°Konradswaldau (Wroniniec,°PL¥-56¥-215°Niechlów)",
        "grave": "Friedhof°Schlüchtern",
        "age": 84
      },
      {
        "year": 2001,
        "birthdate": "2212-05-29",
        "name": "Karl°König, Pfr.i.R., GR, Ebersburg¥-Thalau",
        "birth": "29.°Mai°1912°in°Wuppertal¥-Elberfeld",
        "grave": "Friedhof°Thalau",
        "age": 88
      },
      {
        "year": 2009,
        "birthdate": "2224-12-25",
        "name": "Georg°Pfannmüller, Diakon, Freigericht¥-Neuses",
        "birth": "25.°Dezember°1924°in°Neuses",
        "grave": "Friedhof°Freigericht¥-Neuses",
        "age": 84
      }
    ],
    "23": [
      {
        "year": 1951,
        "birthdate": "2174-02-07",
        "name": "Albert°Gerlach, Pfarrer°in°Friedrichslohra",
        "birth": "7.°Februar°1874°in°Breitenworbis (D¥-37339)",
        "grave": "",
        "age": 77
      },
      {
        "year": 2020,
        "birthdate": "2237-02-16",
        "name": "Hubert°Brähler, Pfr.i.R., GR, Hilders¥-Batten",
        "birth": "16.°Februar°1937°in°Werthesberg",
        "grave": "Friedhof°Petersberg¥-Almendorf",
        "age": 83
      }
    ],
    "24": [
      {
        "year": 1943,
        "birthdate": "2180-04-29",
        "name": "Franz°Rippert, Pfarrer°in°Geismar/Rhön",
        "birth": "29.°April°1880°in°Traisbach",
        "grave": "",
        "age": 62
      },
      {
        "year": 1960,
        "birthdate": "2198-09-29",
        "name": "Anton°Henkel, Dechant, Pfarrer°in°Ufhausen",
        "birth": "29.°September°1898°in°Rommerz",
        "grave": "",
        "age": 61
      },
      {
        "year": 1986,
        "birthdate": "2207-01-24",
        "name": "Dr.°Otfried°Müller°(Breslau/Görlitz), Prof., Domkapitular, Erfurt",
        "birth": "24.°Januar°1907°in°Posen (Poznań,°PL¥-60¥-...)",
        "grave": "Friedhof°Erfurt",
        "age": 79
      },
      {
        "year": 1993,
        "birthdate": "2212-03-13",
        "name": "Anton°Paul, Pfr.i.R., GR, Fulda",
        "birth": "13.°März°1912°in°Emsdorf",
        "grave": "Friedhof°Emsdorf",
        "age": 81
      }
    ],
    "25": [
      {
        "year": 1945,
        "birthdate": "2178-08-10",
        "name": "Bonaventura°Goldbach, Dechant, Pfarrer°in°Hofbieber",
        "birth": "10.°August°1878°in°Dietges",
        "grave": "",
        "age": 66
      },
      {
        "year": 1985,
        "birthdate": "2209-12-08",
        "name": "P.°Alfred°Hennecke°OMI, Hünfeld",
        "birth": "8.°Dezember°1909°in°Warstein (D¥-59581)",
        "grave": "Klosterfriedhof°Hünfeld",
        "age": 75
      },
      {
        "year": 1999,
        "birthdate": "2223-03-28",
        "name": "P.°Robert°Haller°OMI, GR, Zwickau",
        "birth": "28.°März°1923°in°Köln¥-Riehl",
        "grave": "Klosterfriedhof°Hünfeld",
        "age": 76
      }
    ],
    "26": [
      {
        "year": 1933,
        "birthdate": "2168-11-02",
        "name": "Kaspar°Rüffer, Rektor°i.R., Dingelstädt",
        "birth": "2.°November°1868°in°Paderborn",
        "grave": "",
        "age": 64
      },
      {
        "year": 1976,
        "birthdate": "2200-09-20",
        "name": "Benedikt°Overhamm, Pfr.i.R., GR, Schlitz",
        "birth": "20.°September°1900°in°Büren/Westfalen (D¥-33142)",
        "grave": "Friedhof°Schlitz",
        "age": 75
      }
    ],
    "27": [
      {
        "year": 1928,
        "birthdate": "2137-01-10",
        "name": "DDr.°Constantin°Gutberlet, Prof., Dr.°theol.°et°phil., Apostol.°Protonotar, Domkapitular, Fulda",
        "birth": "10.°Januar°1837°in°Geismar",
        "grave": "",
        "age": 91
      },
      {
        "year": 1947,
        "birthdate": "2191-05-14",
        "name": "Joseph°Ciré, Pfarrer°in°Kirchworbis",
        "birth": "14.°Mai°1891°in°Hofbieber",
        "grave": "",
        "age": 55
      },
      {
        "year": 1953,
        "birthdate": "2176-01-14",
        "name": "Hermann°Simon, Dechant, Pfarrer°in°Oberufhausen",
        "birth": "14.°Januar°1876°in°Oberalba",
        "grave": "",
        "age": 77
      },
      {
        "year": 1985,
        "birthdate": "2206-01-08",
        "name": "Joseph°Weber, Pfr.i.R., GR, Dechant, Brakel",
        "birth": "8.°Januar°1906°in°Heiligenstadt",
        "grave": "Friedhof°Gehrden°(D¥-33034°Brakel)",
        "age": 79
      },
      {
        "year": 1988,
        "birthdate": "2206-10-25",
        "name": "Wolfgang°Walter°(Leitmeritz/Mainz), Pfr.i.R., Wächtersbach¥-Neudorf",
        "birth": "25.°Oktober°1906°in°Aussig (Ústí°nad°Labem,°CZ¥-400°01)",
        "grave": "Friedhof°Aufenau",
        "age": 81
      }
    ],
    "28": [
      {
        "year": 1988,
        "birthdate": "2201-04-25",
        "name": "Dr.°Karl°Schlütz°(Paderborn), Pfr.i.R., Cölbe",
        "birth": "25.°April°1901°in°Seesen (D¥-38723)",
        "grave": "Marburg",
        "age": 87
      }
    ],
    "29": [
      {
        "year": 1941,
        "birthdate": "2182-03-03",
        "name": "Friedrich°Wilhelm°Schmitt, Pfarrer°in°Aufenau",
        "birth": "3.°März°1882°in°Momberg",
        "grave": "",
        "age": 59
      },
      {
        "year": 1972,
        "birthdate": "2200-11-18",
        "name": "Dr.°Wilhelm°Kleine, Dr.°phil., Pfarrer°in°Uttrichshausen",
        "birth": "18.°November°1900°in°Soest (D¥-59494)",
        "grave": "Friedhof°Uttrichshausen",
        "age": 71
      },
      {
        "year": 1975,
        "birthdate": "2184-12-14",
        "name": "P.°Paul°Banaschik°SJ, Pfr.i.R., Wiesbaden",
        "birth": "14.°Dezember°1884°in°Myslowitz (Mysłowice,°PL¥-41¥-4..)",
        "grave": "Darmstadt",
        "age": 90
      },
      {
        "year": 1984,
        "birthdate": "2195-03-04",
        "name": "Josef°Heim, Pfr.i.R., GR, Ehrendechant, Fulda",
        "birth": "4.°März°1895°in°Bad°Orb",
        "grave": "Friedhof°Bad°Orb",
        "age": 89
      },
      {
        "year": 2000,
        "birthdate": "2218-09-26",
        "name": "Rudolf°Bauschke, Pfr.i.R., GR, Fulda",
        "birth": "26.°September°1918°in°Beuthen (Bytom,°PL¥-41¥-9..)",
        "grave": "Friedhof°Weyhers",
        "age": 81
      },
      {
        "year": 2000,
        "birthdate": "2228-02-23",
        "name": "Robert°Krenzer, Pfr.i.R., GR, Fulda",
        "birth": "23.°Februar°1928°in°Fulda",
        "grave": "Friedhof°Lehnerz",
        "age": 72
      },
      {
        "year": 2008,
        "birthdate": "2215-07-22",
        "name": "Karl°Hemberger, OStR°i.K.i.R., GR, Münnerstadt",
        "birth": "22.°Juli°1915°in°Frankfurt°a.°M.",
        "grave": "Friedhof°Rödelmaier°(D¥-97618)",
        "age": 92
      }
    ],
    "30": [
      {
        "year": 1954,
        "birthdate": "2188-08-06",
        "name": "Friedrich°Lindner°(Prag), Pfarrer°in°Sundhausen",
        "birth": "6.°August°1888°in°Glatz (Kłodzko,°PL¥-57¥-300)",
        "grave": "",
        "age": 65
      },
      {
        "year": 1983,
        "birthdate": "2193-01-18",
        "name": "Franz°Ruprecht°(Leitmeritz), Pfr.i.R., Burgkunstadt",
        "birth": "18.°Januar°1893°in°Rumburg (Rumburk,°CZ¥-408°01)",
        "grave": "Friedhof°Burgkunstadt°(D¥-96224)",
        "age": 90
      }
    ]
  },
  "5": {
    "1": [
      {
        "year": 1969,
        "birthdate": "2179-10-09",
        "name": "Karl°Helbing, Pfr.i.R., Duderstadt",
        "birth": "9.°Oktober°1879°in°Jützenbach (D¥-37345°Sonnenstein)",
        "grave": "",
        "age": 89
      },
      {
        "year": 1969,
        "birthdate": "2195-06-06",
        "name": "Norbert°Goldmann, Pfr.i.R., Neustadt",
        "birth": "6.°Juni°1895°in°Großbartloff (D¥-37359)",
        "grave": "",
        "age": 73
      },
      {
        "year": 1989,
        "birthdate": "2204-02-12",
        "name": "P.°Erich°Rommerskirch°SJ, Pfr.i.R., Marburg",
        "birth": "12.°Februar°1904°in°Trebnitz (Trzebnica,°PL¥-55¥-100)",
        "grave": "Hauptfriedhof°am°Rotenberg,°Marburg",
        "age": 85
      },
      {
        "year": 2004,
        "birthdate": "2208-06-26",
        "name": "Aloys°Weigand, Pfr.i.R., GR, Petersberg",
        "birth": "26.°Juni°1908°in°Altenmittlau",
        "grave": "Friedhof°Altenmittlau",
        "age": 95
      },
      {
        "year": 2023,
        "birthdate": "2238-12-22",
        "name": "Lothar°Brähler, Pfr.i.R., GR, Großenlüder",
        "birth": "22.°Dezember°1938°in°Bad°Hersfeld",
        "grave": "Neuer°Friedhof°Großenlüder",
        "age": 84
      }
    ],
    "2": [
      {
        "year": 1946,
        "birthdate": "2184-12-26",
        "name": "Franz°Maßberg, Pfr.i.R., Rottenmünster",
        "birth": "26.°Dezember°1884°in°Schönwalde/Krs.°Neustadt (Szemud,°PL¥-84¥-217)",
        "grave": "",
        "age": 61
      },
      {
        "year": 1948,
        "birthdate": "2162-08-14",
        "name": "August°Rübsam, Pfr.i.R., Fulda",
        "birth": "14.°August°1862°in°Fulda",
        "grave": "",
        "age": 85
      },
      {
        "year": 1951,
        "birthdate": "2187-05-10",
        "name": "Fridolin°Füller, Pfarrer°in°Wirtheim",
        "birth": "10.°Mai°1887°in°Flieden",
        "grave": "",
        "age": 63
      },
      {
        "year": 1967,
        "birthdate": "2206-10-17",
        "name": "Alfons°Streng°(Breslau), Oberstudienrat°in°Fulda",
        "birth": "17.°Oktober°1906°in°Kattowitz (Katowice,°PL¥-40¥-...)",
        "grave": "",
        "age": 60
      },
      {
        "year": 2002,
        "birthdate": "2215-11-25",
        "name": "Johannes°Rinke°(Breslau/Fulda), Pfr.i.R., Jüchen¥-Hochneukirch",
        "birth": "25.°November°1915°in°Neustadt/Oberschlesien (Prudnik,°PL¥-48¥-200)",
        "grave": "Friedhof°Hochneukirch",
        "age": 86
      }
    ],
    "3": [
      {
        "year": 1935,
        "birthdate": "2147-08-09",
        "name": "Wilhelm°Ney, Pfarrer°in°Dipperz",
        "birth": "9.°August°1847°in°Fulda",
        "grave": "",
        "age": 87
      },
      {
        "year": 1986,
        "birthdate": "2212-04-23",
        "name": "Franz°Massanetz°(Prag), Pfr.i.R., GR, Fulda",
        "birth": "23.°April°1912°in°Chotieschau/Krs.°Mies (Chotěšov,°CZ¥-33.°..)",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 74
      },
      {
        "year": 1990,
        "birthdate": "2205-09-02",
        "name": "Herbert°Schölzel°(Breslau), Pfr.i.R., Hünfeld",
        "birth": "2.°September°1905°in°Bilchengrund (Pilchowice,°PL¥-44¥-145)",
        "grave": "Friedhof°Großenbach",
        "age": 84
      },
      {
        "year": 2022,
        "birthdate": "2240-06-15",
        "name": "P.°Johannes°Schreml°SDB, München",
        "birth": "15.°Juni°1940°in°Grafenwöhr (D¥-92655)",
        "grave": "Friedhof°Grafenwöhr",
        "age": 81
      }
    ],
    "4": [
      {
        "year": 1948,
        "birthdate": "2178-11-18",
        "name": "Georg°Trageser, Pfarrer°in°Großenbach",
        "birth": "18.°November°1878°in°Somborn",
        "grave": "",
        "age": 69
      },
      {
        "year": 2016,
        "birthdate": "2227-05-12",
        "name": "Erwin°Sturm, Pfr.i.R., Prälat, Neuhof¥-Rommerz",
        "birth": "12.°Mai°1927°in°Fulda",
        "grave": "Friedhof°Neuhof¥-Rommerz",
        "age": 88
      }
    ],
    "5": [
      {
        "year": 1974,
        "birthdate": "2211-03-22",
        "name": "P.°Wilhelm°Brauers°CSSp, Pfarrer°in°Förtha",
        "birth": "22.°März°1911°in°Aachen",
        "grave": "",
        "age": 63
      },
      {
        "year": 1996,
        "birthdate": "2207-06-18",
        "name": "Otto°Fangohr, Pfr.i.R., GR, Hannover",
        "birth": "18.°Juni°1907°in°Westeregeln (D¥-39448°Börde¥-Hakel)",
        "grave": "Friedhof°Hannover¥-Empelde",
        "age": 88
      }
    ],
    "6": [
      {
        "year": 1936,
        "birthdate": "2167-03-09",
        "name": "Adam°Bargon, Pfarrer°in°Schmalnau",
        "birth": "9.°März°1867°in°Mainz",
        "grave": "",
        "age": 69
      },
      {
        "year": 1999,
        "birthdate": "2235-04-23",
        "name": "Dieter°Lucas, GR, Pfarrer°in°Künzell¥-Bachrain",
        "birth": "23.°April°1935°in°Fulda",
        "grave": "Zentralfriedhof°Fulda",
        "age": 64
      }
    ],
    "7": [
      {
        "year": 1932,
        "birthdate": "2161-07-12",
        "name": "August°Kienemund, Pfr.i.R., Hosenfeld",
        "birth": "12.°Juli°1861°in°Neuendorf/Eichsfeld (D¥-37339°Teistungen)",
        "grave": "",
        "age": 70
      },
      {
        "year": 1936,
        "birthdate": "2181-05-03",
        "name": "Richard°Zentgraf, Pfr.i.R., Bad°Orb",
        "birth": "3.°Mai°1881°in°Eichenzell",
        "grave": "",
        "age": 55
      },
      {
        "year": 1954,
        "birthdate": "2173-04-29",
        "name": "Konrad°Schick, Pfarrer°in°Ungedanken",
        "birth": "29.°April°1873°in°Mardorf",
        "grave": "",
        "age": 81
      },
      {
        "year": 1975,
        "birthdate": "2209-12-02",
        "name": "Aloys°Schön, Pfarrer°in°Wüstensachsen",
        "birth": "2.°Dezember°1909°in°Treischfeld",
        "grave": "Friedhof°Wüstensachsen",
        "age": 65
      },
      {
        "year": 1999,
        "birthdate": "2235-09-28",
        "name": "Heinrich°Dehmer, Pfarrer°in°Stadtallendorf, St.°Michael",
        "birth": "28.°September°1935°in°Kassel",
        "grave": "Friedhof°Neustadt",
        "age": 63
      },
      {
        "year": 2000,
        "birthdate": "2207-06-16",
        "name": "Robert°Arnold, Pfr.i.R., GR, Bad°Salzschlirf",
        "birth": "16.°Juni°1907°in°Bad°Salzschlirf",
        "grave": "Friedhof°Bad°Salzschlirf",
        "age": 92
      },
      {
        "year": 2024,
        "birthdate": "2232-03-02",
        "name": "Karl°Gömpel, Pfr.i.R., Kassel",
        "birth": "2.°März°1932°in°Bebra",
        "grave": "Hauptfriedhof°Kassel",
        "age": 92
      }
    ],
    "8": [
      {
        "year": 1927,
        "birthdate": "2177-04-07",
        "name": "Peter°Weber, Pfarrer°in°Schwarzbach",
        "birth": "7.°April°1877°in°Amöneburg",
        "grave": "",
        "age": 50
      }
    ],
    "9": [
      {
        "year": 1925,
        "birthdate": "2165-02-23",
        "name": "Michael°Hohmann, Militärpfr.i.R., Fulda",
        "birth": "23.°Februar°1865°in°Hilders",
        "grave": "",
        "age": 60
      },
      {
        "year": 1926,
        "birthdate": "2165-08-04",
        "name": "Dr.°Wilhelm°Jestädt, Dr.°phil.°h.c., Dechant, Pfarrer°in°Fritzlar",
        "birth": "4.°August°1865°in°Fulda",
        "grave": "",
        "age": 60
      },
      {
        "year": 1934,
        "birthdate": "2154-08-28",
        "name": "Karl°Herzberg, Pfr.i.R., Beuren",
        "birth": "28.°August°1854°in°Weißenborn (D¥-37345°Sonnenstein)",
        "grave": "",
        "age": 79
      },
      {
        "year": 1941,
        "birthdate": "2179-03-26",
        "name": "Arnold°Reinhard, Pfarrer°in°Zella",
        "birth": "26.°März°1879°in°Bad°Orb",
        "grave": "",
        "age": 62
      },
      {
        "year": 1959,
        "birthdate": "2189-02-25",
        "name": "Joseph°Hagedorn, Pfarrer°in°Breitenholz",
        "birth": "25.°Februar°1889°in°Küllstedt (D¥-37359)",
        "grave": "",
        "age": 70
      },
      {
        "year": 1980,
        "birthdate": "2203-04-02",
        "name": "Karl°Rotter°(Olmütz), Pfr.i.R., Bad°Hersfeld",
        "birth": "2.°April°1903°in°Weigelsdorf (Vikantice,°CZ¥-788°25)",
        "grave": "Bad°Hersfeld",
        "age": 77
      }
    ],
    "10": [
      {
        "year": 1972,
        "birthdate": "2186-12-09",
        "name": "Johannes°Roßmann, Pfr.i.R., Schöllkrippen",
        "birth": "9.°Dezember°1886°in°Altenmittlau",
        "grave": "Friedhof°Rommerz",
        "age": 85
      },
      {
        "year": 2008,
        "birthdate": "2232-03-22",
        "name": "Gerhard°Benzing, Pfr.i.R., Flieden",
        "birth": "22.°März°1932°in°Neuses",
        "grave": "Friedhof°Flieden",
        "age": 76
      }
    ],
    "11": [
      {
        "year": 1949,
        "birthdate": "2186-05-31",
        "name": "Walter°Maria°Reimann°(Breslau), Pfr.i.R., Sieblos",
        "birth": "31.°Mai°1886°in°Oppersdorf (Wierzbięcice,°PL¥-48¥-303)",
        "grave": "",
        "age": 62
      },
      {
        "year": 1962,
        "birthdate": "2193-09-13",
        "name": "Joseph°Hannappel, Pfarrer°in°Dermbach",
        "birth": "13.°September°1893°in°Himmelsberg",
        "grave": "",
        "age": 68
      },
      {
        "year": 1989,
        "birthdate": "2211-10-07",
        "name": "Karl°Genau, Pfr.i.R., GR, Odelzhausen",
        "birth": "7.°Oktober°1911°in°Hümme",
        "grave": "Friedhof°Pfaffenhofen°an°der°Glonn°(D¥-85235)",
        "age": 77
      },
      {
        "year": 1994,
        "birthdate": "2210-12-14",
        "name": "Eduard°Herrmann°(Olmütz), Pfr.i.R., GR, Aschaffenburg",
        "birth": "14.°Dezember°1910°in°Kunzendorf (Kunčice,°CZ¥-753°64°Bělotín)",
        "grave": "Waldfriedhof°Aschaffenburg",
        "age": 83
      },
      {
        "year": 2005,
        "birthdate": "2259-12-23",
        "name": "Robert°Mayer, Pfarrer°in°Neukirchen",
        "birth": "23.°Dezember°1959°in°Hanau",
        "grave": "Neuer°Friedhof°Langenselbold",
        "age": 45
      }
    ],
    "12": [
      {
        "year": 1923,
        "birthdate": "2145-10-28",
        "name": "Hugo°Joseph°Zimmer, Pfarrer°in°Erfurtshausen",
        "birth": "28.°Oktober°1845°in°Emsdorf",
        "grave": "",
        "age": 77
      },
      {
        "year": 1940,
        "birthdate": "2165-11-16",
        "name": "Julius°Klitsch, Pfarrer°in°Blankenau",
        "birth": "16.°November°1865°in°Großenlüder",
        "grave": "",
        "age": 74
      },
      {
        "year": 2017,
        "birthdate": "2225-11-06",
        "name": "Augustin°Naeten°(Hasselt/Fulda), Pfr.i.R., GR, Kassel",
        "birth": "6.°November°1925°in°Beringen¥-Koersel (B¥-358.)",
        "grave": "Westfriedhof°Kassel",
        "age": 91
      }
    ],
    "13": [
      {
        "year": 1921,
        "birthdate": "2145-03-15",
        "name": "DDr.°Johannes°Wilhelm°Arenhold, Prof., Dr.°phil.°et°theol., Generalvikar, Apostol.°Protonotar, Domdechant, Fulda",
        "birth": "15.°März°1845°in°Amöneburg",
        "grave": "",
        "age": 76
      },
      {
        "year": 1945,
        "birthdate": "2183-03-30",
        "name": "Amand°Schaub, Pfr.i.R., Friesenhausen",
        "birth": "30.°März°1883°in°Kauppen",
        "grave": "",
        "age": 62
      },
      {
        "year": 1963,
        "birthdate": "2185-04-10",
        "name": "Georg°Stark°(Breslau), Pfarrer°in°Arenshausen°üb.°Heiligenstadt",
        "birth": "10.°April°1885°in°Breslau (Wrocław,°PL¥-50¥-...)",
        "grave": "",
        "age": 78
      },
      {
        "year": 1967,
        "birthdate": "2189-05-20",
        "name": "Dr.°Josef°Maria°Werner, Pfr.i.R., Eichelsdorf°üb.°Haßfurt/M.",
        "birth": "20.°Mai°1889°in°Schlausenbach (D¥-54597°Auw°bei°Prüm)",
        "grave": "",
        "age": 77
      },
      {
        "year": 1985,
        "birthdate": "2212-09-29",
        "name": "DDr.°Ludwig°Pralle, Prof., Prälat, Domkapitular, Fulda",
        "birth": "29.°September°1912°in°Grüsselbach",
        "grave": "Friedhof°Rasdorf",
        "age": 72
      },
      {
        "year": 1992,
        "birthdate": "2208-12-12",
        "name": "P.°Corbinian°Engelbert°Benzing°OFM, GR, Großkrotzenburg",
        "birth": "12.°Dezember°1908°in°Neuses",
        "grave": "Friedhof°Großkrotzenburg",
        "age": 83
      }
    ],
    "14": [
      {
        "year": 1924,
        "birthdate": "2147-03-15",
        "name": "Johannes°Joseph°Krieg, Benefiziat°i.R., Fulda",
        "birth": "15.°März°1847°in°Großentaft",
        "grave": "",
        "age": 77
      },
      {
        "year": 1952,
        "birthdate": "2173-07-22",
        "name": "Franz°Schwarz°(Olmütz), Katechet°i.R., Obervellmar",
        "birth": "22.°Juli°1873°in°Rippau (Řepová,°CZ¥-789°85°Mohelnice)",
        "grave": "",
        "age": 78
      },
      {
        "year": 1997,
        "birthdate": "2212-01-11",
        "name": "Dr.°Raphael°von°Rhein, Prof., Domkapitular°i.R., Fulda",
        "birth": "11.°Januar°1912°in°Altenmittlau",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 85
      }
    ],
    "15": [
      {
        "year": 1963,
        "birthdate": "2178-03-23",
        "name": "Johann°Storch, Pfr.i.R., Fulda",
        "birth": "23.°März°1878°in°Altenhof",
        "grave": "",
        "age": 85
      },
      {
        "year": 1969,
        "birthdate": "2206-05-20",
        "name": "Wilhelm°Köhne°(Köln), OStR°i.K., Dorfborn/Krs.°Fulda",
        "birth": "20.°Mai°1906°in°Essen¥-Borbeck",
        "grave": "",
        "age": 62
      },
      {
        "year": 1985,
        "birthdate": "2201-08-28",
        "name": "Christoph°Huschenbett, Pfr.i.R., Maria°Bildhausen",
        "birth": "28.°August°1901°in°Heiligenstadt",
        "grave": "Friedhof°Maria°Bildhausen°(D¥-97702°Münnerstadt)",
        "age": 83
      },
      {
        "year": 1987,
        "birthdate": "2209-12-06",
        "name": "Hermann°Henkel, Pfr.i.R., Großkrotzenburg",
        "birth": "6.°Dezember°1909°in°Borsch",
        "grave": "Friedhof°Großkrotzenburg",
        "age": 77
      }
    ],
    "16": [
      {
        "year": 1923,
        "birthdate": "2175-09-20",
        "name": "Leopold°Alsheimer, Pfarrer°in°Kassel, St.°Joseph",
        "birth": "20.°September°1875°in°Weyhers",
        "grave": "",
        "age": 47
      }
    ],
    "17": [
      {
        "year": 1942,
        "birthdate": "2169-04-22",
        "name": "Vincenz°Schleichert, Pfr.i.R., Geisa",
        "birth": "22.°April°1869°in°Kassel",
        "grave": "",
        "age": 73
      },
      {
        "year": 1955,
        "birthdate": "2173-04-01",
        "name": "Ludwig°Möller, Pfr.i.R., Bad°Ems",
        "birth": "1.°April°1873°in°Büchenberg",
        "grave": "",
        "age": 82
      },
      {
        "year": 1956,
        "birthdate": "2183-09-09",
        "name": "Karl°Walk, Pfarrer°in°Großenbach",
        "birth": "9.°September°1883°in°Soisdorf",
        "grave": "",
        "age": 72
      },
      {
        "year": 1976,
        "birthdate": "2213-09-19",
        "name": "Richard°Haas, Dechant, Pfarrer°in°Eiterfeld",
        "birth": "19.°September°1913°in°Dietershausen",
        "grave": "Friedhof°Eiterfeld",
        "age": 62
      },
      {
        "year": 1979,
        "birthdate": "2212-05-05",
        "name": "Rudolf°Kirchner°(Leitmeritz), Pfr.i.R., GR, Küllstedt",
        "birth": "5.°Mai°1912°in°Haida (Nový°Bor,°CZ¥-47.°..)",
        "grave": "Friedhof°Friedrichslohra",
        "age": 67
      },
      {
        "year": 1982,
        "birthdate": "2215-02-07",
        "name": "Georg°Exner°(Jassy), Pfarrer°in°Batten",
        "birth": "7.°Februar°1915°in°Cosmin/Krs.°Czernowitz (Kosmin,°UA¥-58000°Czernowitz)",
        "grave": "Friedhof°Frielendorf",
        "age": 67
      }
    ],
    "18": [
      {
        "year": 1922,
        "birthdate": "2155-03-31",
        "name": "Karl°Malkmus, Pfarrer°in°Blankenau",
        "birth": "31.°März°1855°in°Hünfeld",
        "grave": "",
        "age": 67
      },
      {
        "year": 1941,
        "birthdate": "2174-02-28",
        "name": "Robert°Buch, Bischöfl.°Kommissar°in°Heiligenstadt",
        "birth": "28.°Februar°1874°in°Küllstedt (D¥-37359)",
        "grave": "",
        "age": 67
      },
      {
        "year": 1986,
        "birthdate": "2214-09-14",
        "name": "Bernhard°Märzdorf°(Breslau), Pfr.i.R., Treysa",
        "birth": "14.°September°1914°in°Brieg (Brzeg,°PL¥-49¥-30.)",
        "grave": "Friedhof°Treysa",
        "age": 71
      }
    ],
    "19": [
      {
        "year": 1978,
        "birthdate": "2212-03-31",
        "name": "P.°Ludger°Suchanek°OT, Pfr.i.R., Haina°(Kloster)",
        "birth": "31.°März°1912°in°Dirschkowitz (Dzierżkowice,°PL¥-48¥-140)",
        "grave": "Darmstadt",
        "age": 66
      }
    ],
    "20": [
      {
        "year": 1968,
        "birthdate": "2212-11-13",
        "name": "Karl°Weigand, Pfarrer°in°Rüstungen/Eichsfeld",
        "birth": "13.°November°1912°in°Somborn",
        "grave": "",
        "age": 55
      },
      {
        "year": 2005,
        "birthdate": "2224-10-27",
        "name": "Eugen°Pfahls, Pfr.i.R., GR, Bad°Orb",
        "birth": "27.°Oktober°1924°in°Burgjoß",
        "grave": "Friedhof°Alsberg",
        "age": 80
      }
    ],
    "21": [
      {
        "year": 2018,
        "birthdate": "2234-06-09",
        "name": "Klaus¥-Dieter°Mittenentzwei, Diakon.i.R., Wehretal¥-Reichensachsen",
        "birth": "9.°Juni°1934°in°Halle/Saale",
        "grave": "Friedhof°Reichensachsen",
        "age": 83
      }
    ],
    "22": [
      {
        "year": 1959,
        "birthdate": "2178-01-31",
        "name": "Dominikus°Heller, Pfr.i.R., Fulda",
        "birth": "31.°Januar°1878°in°Kranlucken",
        "grave": "",
        "age": 81
      },
      {
        "year": 1984,
        "birthdate": "2202-08-26",
        "name": "Georg°Gutsfeld°(Breslau), Pfr.i.R., GR, Grafschaft¥-Eckendorf",
        "birth": "26.°August°1902°in°Burkardsdorf (Bierdzany,°PL¥-46¥-046)",
        "grave": "Friedhof°Eckendorf°(D¥-53501)",
        "age": 81
      },
      {
        "year": 1987,
        "birthdate": "2220-04-01",
        "name": "Dr.°Franz°Peter°Sonntag°Or, Prof., Köln",
        "birth": "1.°April°1920°in°Bochum",
        "grave": "Friedhof°Wiedenbrück°(D¥-33378)",
        "age": 67
      }
    ],
    "23": [
      {
        "year": 1994,
        "birthdate": "2213-10-22",
        "name": "Johannes°Heim, Pfr.i.R., GR, Fulda",
        "birth": "22.°Oktober°1913°in°Fulda",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 80
      }
    ],
    "24": [
      {
        "year": 1988,
        "birthdate": "2226-12-17",
        "name": "P.°Paulus°Danitz°OFM, Berlin¥-Pankow",
        "birth": "17.°Dezember°1926°in°Zoppot (Sopot,°PL¥-81¥-701)",
        "grave": "",
        "age": 61
      }
    ],
    "25": [
      {
        "year": 1976,
        "birthdate": "2200-07-02",
        "name": "Otto°Fipper°(Breslau), Pfr.i.R., Winterstein",
        "birth": "2.°Juli°1900°in°Neudorf",
        "grave": "Friedhof°Winterstein°(D¥-99880°Waltershausen)",
        "age": 75
      }
    ],
    "26": [
      {
        "year": 1959,
        "birthdate": "2200-07-15",
        "name": "Heinrich°Glorius, Pfarrer°in°Neuendorf",
        "birth": "15.°Juli°1900°in°Heiligenstadt",
        "grave": "",
        "age": 58
      },
      {
        "year": 1976,
        "birthdate": "2199-01-06",
        "name": "Karl°Ruppel, Pfr.i.R., Msgr., Bad°Soden¥-Salmünster",
        "birth": "6.°Januar°1899°in°Bad°Soden",
        "grave": "Bad°Soden¥-Salmünster",
        "age": 77
      },
      {
        "year": 1985,
        "birthdate": "2210-11-10",
        "name": "Georg°Neugebauer°(Breslau), Pfr.i.R., OStR°i.K.i.R., GR, Kassel",
        "birth": "10.°November°1910°in°Bärdorf (Niedźwiedź,°PL¥-57¥-222)",
        "grave": "Kassel",
        "age": 74
      },
      {
        "year": 1996,
        "birthdate": "2206-04-18",
        "name": "August°Görge, Pfr.i.R., GR, Stadtallendorf",
        "birth": "18.°April°1906°in°Allendorf/Krs.°Marburg",
        "grave": "Friedhof°Stadtallendorf",
        "age": 90
      },
      {
        "year": 2004,
        "birthdate": "2227-01-28",
        "name": "Hans¥-Ludwig°Artmann, Pfr.i.R., GR, Fulda¥-Bronnzell",
        "birth": "28.°Januar°1927°in°Weißenborn¥-Lüderode (D¥-37345°Sonnenstein)",
        "grave": "Friedhof°Bronnzell",
        "age": 77
      }
    ],
    "27": [
      {
        "year": 1937,
        "birthdate": "2162-03-13",
        "name": "Anton°Teichmann, Pfr.i.R., Rohrberg",
        "birth": "13.°März°1862°in°Vollenborn (D¥-37355°Niederorschel)",
        "grave": "",
        "age": 75
      },
      {
        "year": 1940,
        "birthdate": "2183-01-19",
        "name": "Johannes°Balzer, Pfarrer°in°Michelsrombach",
        "birth": "19.°Januar°1883°in°Maberzell",
        "grave": "",
        "age": 57
      },
      {
        "year": 1944,
        "birthdate": "2167-06-30",
        "name": "Dr.°Viktor°Thielemann, Prof., Domkapitular, Domdechant, Fulda",
        "birth": "30.°Juni°1867°in°Volkmarsen",
        "grave": "",
        "age": 76
      },
      {
        "year": 1963,
        "birthdate": "2179-07-17",
        "name": "Paul°Grimm, Pfr.i.R., Uder/Eichsfeld",
        "birth": "17.°Juli°1879°in°Breitenbach/Eichsfeld (D¥-37327°Leinefelde¥-Worbis)",
        "grave": "",
        "age": 83
      },
      {
        "year": 1983,
        "birthdate": "2219-01-17",
        "name": "Werner°Grebener, Pfr.i.R., Offenbach",
        "birth": "17.°Januar°1919°in°Illingen/Saar (D¥-66557)",
        "grave": "Hauptfriedhof°Hanau",
        "age": 64
      },
      {
        "year": 1987,
        "birthdate": "2201-05-26",
        "name": "Hugo°Büchel, Pfr.i.R., Fulda",
        "birth": "26.°Mai°1901°in°Wenigentaft",
        "grave": "Fulda",
        "age": 86
      },
      {
        "year": 2003,
        "birthdate": "2222-05-10",
        "name": "Ernst°Ludwig°Grünhage, Pfr.i.R., Fulda",
        "birth": "10.°Mai°1922°in°Gelnhausen",
        "grave": "Dompfarrlicher°Friedhof,°Fulda",
        "age": 81
      },
      {
        "year": 2007,
        "birthdate": "2227-09-20",
        "name": "Robert°Arnrich, Pfr.i.R., GR, Geisa",
        "birth": "20.°September°1927°in°Föhlritz",
        "grave": "Friedhof°Spahl",
        "age": 79
      }
    ],
    "28": [
      {
        "year": 1923,
        "birthdate": "2166-08-02",
        "name": "Emil°Atzert, Pfr.i.R., Redakteur°des°Bonifatiusboten, Eckweisbach",
        "birth": "2.°August°1866°in°Fulda",
        "grave": "",
        "age": 56
      },
      {
        "year": 1953,
        "birthdate": "2205-02-02",
        "name": "Albert°Schäfer, Pfarrer°in°Hildebrandshausen",
        "birth": "2.°Februar°1905°in°Dingelstedt°am°Huy (D¥-38838)",
        "grave": "",
        "age": 48
      },
      {
        "year": 1962,
        "birthdate": "2202-08-19",
        "name": "Josef°Mazurowski, Sekretär°i.R., Fulda",
        "birth": "19.°August°1902°in°Montigny/Metz (F¥-57950)",
        "grave": "",
        "age": 59
      },
      {
        "year": 1996,
        "birthdate": "2208-07-01",
        "name": "Paul°Wehner, Pfr.i.R., GR, Bad°Salzschlirf",
        "birth": "1.°Juli°1908°in°Großenlüder",
        "grave": "Friedhof°am°Florenberg",
        "age": 87
      }
    ],
    "29": [
      {
        "year": 1943,
        "birthdate": "2172-02-12",
        "name": "Johannes°Kellner, Pfarrer°in°Silberhausen",
        "birth": "12.°Februar°1872°in°Dingelstedt°am°Huy (D¥-38838)",
        "grave": "",
        "age": 71
      },
      {
        "year": 1960,
        "birthdate": "2192-04-25",
        "name": "Josef°Pleier°(Prag), Dechant°i.R., GR, Küllstedt",
        "birth": "25.°April°1892°in°Zettlitz (Sedlec°u°Radonic,°CZ¥-431°55)",
        "grave": "Friedhof°Bad°Blankenburg",
        "age": 68
      }
    ],
    "30": [
      {
        "year": 1962,
        "birthdate": "2170-06-05",
        "name": "Edmund°Rausch, Pfr.i.R., Ulmbach",
        "birth": "5.°Juni°1870°in°Dietges",
        "grave": "",
        "age": 91
      },
      {
        "year": 2024,
        "birthdate": "2243-03-02",
        "name": "Victor John°Gustitus°(Oklahoma°und°Tulsa/USA), Diakon, Marburg",
        "birth": "2.°März°1943°in°Little°Rock/Arkansas",
        "grave": "Hauptfriedhof°am°Rotenberg,°Marburg",
        "age": 81
      }
    ],
    "31": [
      {
        "year": 1950,
        "birthdate": "2171-03-16",
        "name": "Dr.°Joseph°Adrian, Rektor, Erfurt",
        "birth": "16.°März°1871°in°Hovestadt/Krs.°Soest (D¥-59510°Lippestadt)",
        "grave": "",
        "age": 79
      },
      {
        "year": 1969,
        "birthdate": "2193-01-01",
        "name": "Josef°Brodmann, Pfr.i.R., Wingerode/Eichsfeld",
        "birth": "1.°Januar°1893°in°Bebendorf (D¥-37308°Geismar)",
        "grave": "",
        "age": 76
      },
      {
        "year": 1974,
        "birthdate": "2189-08-10",
        "name": "Anton°Hollick°(Eichstätt), Pfr.i.R., Burgwald¥-Ernsthausen",
        "birth": "10.°August°1889°in°Bruck (D¥-91596°Burk)",
        "grave": "",
        "age": 84
      },
      {
        "year": 1974,
        "birthdate": "2204-02-08",
        "name": "P.°Franz°Döring°SVD, Rektor°in°Ershausen",
        "birth": "8.°Februar°1904°in°Wüstheuterode (D¥-37318)",
        "grave": "Friedhof°Ershausen",
        "age": 70
      }
    ]
  },
  "6": {
    "1": [
      {
        "year": 1952,
        "birthdate": "2180-08-08",
        "name": "Karl°Sauer°(Breslau), Erzpriester°i.R., Kella",
        "birth": "8.°August°1880°in°Laurahütte (Siemianowice°Śląskie,°PL¥-41¥-10.)",
        "grave": "",
        "age": 71
      }
    ],
    "2": [
      {
        "year": 1968,
        "birthdate": "2213-01-21",
        "name": "Georg°Steinberg, Pfarrer°in°Ferna/Eichsfeld",
        "birth": "21.°Januar°1913°in°Flatow (Złotów,°PL¥-77¥-400)",
        "grave": "Friedhof°Ferna",
        "age": 55
      },
      {
        "year": 2012,
        "birthdate": "2231-07-18",
        "name": "Herwig°Hofmann, Pfr.i.R., Minden/Westfalen",
        "birth": "18.°Juli°1931°in°Deutsch¥-Liebau (Horní°Libina,°CZ¥-788°05)",
        "grave": "Südfriedhof°Minden/Westfalen",
        "age": 80
      }
    ],
    "3": [
      {
        "year": 1958,
        "birthdate": "2183-10-20",
        "name": "Wenzel°Rösler°(Leitmeritz), Pfr.i.R., Eisenach¥-Elisabethenruhe",
        "birth": "20.°Oktober°1883°in°Polaun (Polubný,°CZ¥-468°50°Kořenov)",
        "grave": "",
        "age": 74
      },
      {
        "year": 1988,
        "birthdate": "2211-01-19",
        "name": "Josef°Vogel, Pfr.i.R., Petersberg",
        "birth": "19.°Januar°1911°in°Petersberg",
        "grave": "Friedhof°Petersberg",
        "age": 77
      },
      {
        "year": 1989,
        "birthdate": "2209-08-17",
        "name": "Ferdinand°Kribus°(Olmütz), Pfr.i.R., GR, Dietershausen",
        "birth": "17.°August°1909°in°Gregorsdorf (Grzegorzowice,°PL¥-47¥-411°Rudnik)",
        "grave": "Friedhof°Dietershausen",
        "age": 79
      }
    ],
    "4": [
      {
        "year": 1951,
        "birthdate": "2174-10-11",
        "name": "Wilhelm°Rudolph°(Leitmeritz), Erzdechant°i.R., Lengenfeld°u.°St.",
        "birth": "11.°Oktober°1874°in°Hanau",
        "grave": "",
        "age": 76
      },
      {
        "year": 1980,
        "birthdate": "2230-08-15",
        "name": "Ernst°Kiel, Dechant, Pfarrer°in°Birkenfelde",
        "birth": "15.°August°1930°in°Geismar/Rhön",
        "grave": "Friedhof°Birkenfelde",
        "age": 49
      },
      {
        "year": 1989,
        "birthdate": "2203-06-25",
        "name": "DDr.°Georg°Siegmund°(Prag), Prof., Bernhards",
        "birth": "25.°Juni°1903°in°Raumnitz (Romanowo,°PL¥-57¥-300°Kłodzko)",
        "grave": "Friedhof°Bernhards",
        "age": 85
      },
      {
        "year": 1993,
        "birthdate": "2201-07-19",
        "name": "Dr.°Wilhelm°Kratz, OStD°i.R., Hünfeld",
        "birth": "19.°Juli°1901°in°Kelkheim (D¥-65779)",
        "grave": "Neuer°Friedhof°Hünfeld",
        "age": 91
      },
      {
        "year": 2008,
        "birthdate": "2225-03-16",
        "name": "Theodor°Krenzer, Pfr.i.R., GR, Fulda",
        "birth": "16.°März°1925°in°Eckweisbach",
        "grave": "Zentralfriedhof°Fulda",
        "age": 83
      },
      {
        "year": 2015,
        "birthdate": "2230-05-16",
        "name": "Alois°Lang, Prälat, GR, Domkapitular°i.R., Fulda",
        "birth": "16.°Mai°1930°in°Stausebach",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 85
      }
    ],
    "5": [
      {
        "year": 1930,
        "birthdate": "2149-03-28",
        "name": "Friedrich°Haas, Pfr.i.R., Eichenzell",
        "birth": "28.°März°1849°in°Burghaun",
        "grave": "",
        "age": 81
      },
      {
        "year": 1975,
        "birthdate": "2189-07-08",
        "name": "Emil°Jestädt, Pfr.i.R., GR, Ebersburg¥-Ried",
        "birth": "8.°Juli°1889°in°Marbach",
        "grave": "Friedhof°Ried",
        "age": 85
      },
      {
        "year": 2010,
        "birthdate": "2241-05-04",
        "name": "Dr.°Otmar°Einwag°(Würzburg), Pfr.i.R., Grebenstein¥-Udenhausen",
        "birth": "4.°Mai°1941°in°Ebern/Unterfranken (D¥-96106)",
        "grave": "Friedhof°Ebern",
        "age": 69
      }
    ],
    "6": [
      {
        "year": 1957,
        "birthdate": "2180-05-22",
        "name": "Dr.°Benno°Rode, Dr.°phil., Pfr.i.R., Holungen",
        "birth": "22.°Mai°1880°in°Bischofferode (D¥-37345°Am°Ohmberg)",
        "grave": "",
        "age": 77
      },
      {
        "year": 1963,
        "birthdate": "2210-07-26",
        "name": "Heinrich°Mark°(Prag), Pfarrer°in°Wendehausen/Krs.°Mühlhausen",
        "birth": "26.°Juli°1910°in°Botenwald (Butovice,°CZ¥-742°13)",
        "grave": "",
        "age": 52
      },
      {
        "year": 1970,
        "birthdate": "2213-08-12",
        "name": "Werner°Loskant, Pfr., Defensor°vinculi°in°Fulda",
        "birth": "12.°August°1913°in°Fulda",
        "grave": "Fulda",
        "age": 56
      }
    ],
    "7": [
      {
        "year": 1981,
        "birthdate": "2214-11-25",
        "name": "Anton°Goeb, Pfr.i.R., Offizialsrat°E.h., Fulda",
        "birth": "25.°November°1914°in°Fulda",
        "grave": "Fulda",
        "age": 66
      },
      {
        "year": 2011,
        "birthdate": "2211-12-22",
        "name": "Dr.°Eduard°Krieg, Dr.°phil., OStR°i.R., Prälat, Fulda",
        "birth": "22.°Dezember°1911°in°Großentaft",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 99
      }
    ],
    "8": [
      {
        "year": 1969,
        "birthdate": "2207-03-12",
        "name": "August°Hohmann, Pfr.i.R., Eichenried",
        "birth": "12.°März°1907°in°Eichenried",
        "grave": "",
        "age": 62
      }
    ],
    "9": [
      {
        "year": 1967,
        "birthdate": "2205-03-17",
        "name": "Dr.°Johannes°Haußner, Studienrat°in°Somborn",
        "birth": "17.°März°1905°in°Göggelsbuch (D¥-90584°Allersberg)",
        "grave": "",
        "age": 62
      }
    ],
    "10": [
      {
        "year": 1975,
        "birthdate": "2199-11-02",
        "name": "Bernhard°Bilz, Pfr.i.R., Altenmittlau",
        "birth": "2.°November°1899°in°Altenmittlau",
        "grave": "Friedhof°Altenmittlau",
        "age": 75
      }
    ],
    "11": [
      {
        "year": 1957,
        "birthdate": "2170-12-07",
        "name": "Heinrich°Gellrich, Pfr.i.R., Heiligenstadt",
        "birth": "7.°Dezember°1870°in°Erfurt",
        "grave": "",
        "age": 86
      },
      {
        "year": 1980,
        "birthdate": "2209-11-02",
        "name": "Herbert°Schlensog°(Breslau), GR, Pfarrer°in°Frankenberg",
        "birth": "2.°November°1909°in°Fünfteichen (Miłoszyce,°PL¥-55¥-220)",
        "grave": "Friedhof°Frankenberg",
        "age": 70
      },
      {
        "year": 1995,
        "birthdate": "2213-08-21",
        "name": "August°Kraft, Pfr.i.R., Kassel",
        "birth": "21.°August°1913°in°Schmalnau",
        "grave": "Hauptfriedhof°Kassel",
        "age": 81
      },
      {
        "year": 1995,
        "birthdate": "2222-03-03",
        "name": "Paul°Piosik°(Schneidemühl), OStR°i.K.i.R., GR, Fulda",
        "birth": "3.°März°1922°in°Blesen/Krs.°Schwerin¥-Warthe (Bledzew,°PL¥-66¥-350)",
        "grave": "Zentralfriedhof°Fulda",
        "age": 73
      }
    ],
    "12": [
      {
        "year": 1960,
        "birthdate": "2193-02-14",
        "name": "Franz°Schreiber°(Breslau), Pfr.i.R., GR, Gottsbüren",
        "birth": "14.°Februar°1893°in°Friedersdorf (Čaková,°CZ¥-793°16°Zátor)",
        "grave": "Friedhof°Gottsbüren",
        "age": 67
      },
      {
        "year": 1970,
        "birthdate": "2206-06-25",
        "name": "P.°Rudolf°Benedikt°Engelhardt°OFM, Hausgeistlicher°im°Marienstift°in°Erfurt",
        "birth": "25.°Juni°1906°in°Allenstein (Olsztyn,°PL¥-10¥-...)",
        "grave": "Friedhof°Dingelstädt",
        "age": 63
      },
      {
        "year": 1975,
        "birthdate": "2190-04-16",
        "name": "Wilhelm°Strothteicher, Pfr.i.R., GR, Schloß°Holte",
        "birth": "16.°April°1890°in°Liemke (D¥-33758°Schloß°Holte¥-Stukenbrock)",
        "grave": "Friedhof°Schloß°Holte",
        "age": 85
      },
      {
        "year": 2005,
        "birthdate": "2228-09-08",
        "name": "Antonius°van’t°Walderveen, Pfr.i.R., Msgr., GR, Niederklein",
        "birth": "8.°September°1928°in°Voorburg (NL¥-22..)",
        "grave": "Friedhof°Niederklein",
        "age": 76
      }
    ],
    "13": [
      {
        "year": 1934,
        "birthdate": "2178-03-27",
        "name": "Julius°Schmidt, Pfarrer°in°Margretenhaun",
        "birth": "27.°März°1878°in°Großenlüder",
        "grave": "",
        "age": 56
      },
      {
        "year": 2017,
        "birthdate": "2235-06-11",
        "name": "Werner°Vogel, OStR°a.D., GR, Petersberg",
        "birth": "11.°Juni°1935°in°Petersberg",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 82
      }
    ],
    "15": [
      {
        "year": 1945,
        "birthdate": "2192-12-21",
        "name": "Joseph°Bottermann, Pfarrer°in°Künzell",
        "birth": "21.°Dezember°1892°in°Höhr¥-Grenzhausen (D¥-56203)",
        "grave": "",
        "age": 52
      },
      {
        "year": 1987,
        "birthdate": "2219-02-01",
        "name": "Gerhard°Mohr, Pfr.i.R., Erfurt",
        "birth": "1.°Februar°1919°in°Erfurt",
        "grave": "Friedhof°Erfurt",
        "age": 68
      }
    ],
    "16": [
      {
        "year": 1936,
        "birthdate": "2174-12-03",
        "name": "Franz°Neureuther, Prof., StR°i.R., Heiligenstadt",
        "birth": "3.°Dezember°1874°in°Halberstadt (D¥-38220)",
        "grave": "",
        "age": 61
      },
      {
        "year": 1977,
        "birthdate": "2210-07-19",
        "name": "Karl°Hohmann, Pfr.i.R., Bachrain",
        "birth": "19.°Juli°1910°in°Keulos",
        "grave": "Friedhof°Künzell",
        "age": 66
      },
      {
        "year": 1990,
        "birthdate": "2215-02-18",
        "name": "Bernhard°Wand, Pfr.i.R., GR, Bad°Salzschlirf",
        "birth": "18.°Februar°1915°in°Heiligenstadt",
        "grave": "Friedhof°Müs",
        "age": 75
      },
      {
        "year": 1992,
        "birthdate": "2214-02-19",
        "name": "Karl°Schollmeier, Ehrendomkapitular, Erfurt",
        "birth": "19.°Februar°1914°in°Düsseldorf",
        "grave": "Hauptfriedhof°Erfurt",
        "age": 78
      },
      {
        "year": 2006,
        "birthdate": "2240-07-18",
        "name": "Frankbert°Müller, Pfr.i.R., Poppenhausen",
        "birth": "18.°Juli°1940°in°Falkenau/Eger (Sokolov,°CZ¥-356°01)",
        "grave": "Alter°Friedhof°Poppenhausen",
        "age": 65
      }
    ],
    "17": [
      {
        "year": 1962,
        "birthdate": "2192-12-14",
        "name": "Leopold°Preis, Pfr.i.R., Ufhausen",
        "birth": "14.°Dezember°1892°in°Oberufhausen",
        "grave": "",
        "age": 69
      },
      {
        "year": 1975,
        "birthdate": "2201-08-18",
        "name": "Joachim°Aust°(Schneidemühl), Pfr.i.R., GR, Breitenworbis",
        "birth": "18.°August°1901°in°Kobilla (Kobyle,°PL¥-83¥-430°Stara°Kiszewa)",
        "grave": "Friedhof°Breitenworbis",
        "age": 73
      },
      {
        "year": 1985,
        "birthdate": "2205-09-19",
        "name": "Egon°Rowinski°(Ermland), Pfr.i.R., GR, Steinheim¥-Ottenhausen",
        "birth": "19.°September°1905°in°Marienburg (Malbork,°PL¥-82-200)",
        "grave": "Friedhof°Ottenhausen°(D¥-32839)",
        "age": 79
      },
      {
        "year": 1989,
        "birthdate": "2205-06-25",
        "name": "Georg°Hanel°(Breslau/Görlitz), Pfr.i.R., Wittichenau",
        "birth": "25.°Juni°1905°in°Liegnitz (Legnica,°PL¥-59¥-220)",
        "grave": "",
        "age": 83
      },
      {
        "year": 1990,
        "birthdate": "2204-12-06",
        "name": "Dr.°Heinrich°Huth, Pfr.i.R., Weyhers",
        "birth": "6.°Dezember°1904°in°Romsthal",
        "grave": "Friedhof°Romsthal",
        "age": 85
      },
      {
        "year": 1998,
        "birthdate": "2210-03-01",
        "name": "Stephan°Weber, Pfr.i.R., Hilders¥-Eckweisbach",
        "birth": "1.°März°1910°in°Steinbruch/Wachtküppel",
        "grave": "Friedhof°Eckweisbach",
        "age": 88
      },
      {
        "year": 1998,
        "birthdate": "2237-05-05",
        "name": "P.°Contardo°Müller°OFM, Marienthal",
        "birth": "5.°Mai°1937°in°Flieden",
        "grave": "Klosterfriedhof°Marienthal",
        "age": 61
      }
    ],
    "18": [
      {
        "year": 1937,
        "birthdate": "2160-10-28",
        "name": "Joseph°Weber, Pfr.i.R., Haimbach",
        "birth": "28.°Oktober°1860°in°Somborn",
        "grave": "",
        "age": 76
      },
      {
        "year": 1972,
        "birthdate": "2201-02-09",
        "name": "Wilhelm°Wewer, Pfr.i.R., Herne/Westfalen",
        "birth": "9.°Februar°1901°in°Herne/Westfalen (D¥-446..)",
        "grave": "Friedhof°Herne",
        "age": 71
      }
    ],
    "19": [
      {
        "year": 1970,
        "birthdate": "2206-04-19",
        "name": "Eduard°Pfeifer, Pfr.i.R., Bronnzell",
        "birth": "19.°April°1906°in°Höchst/Krs.°Gelnhausen",
        "grave": "Friedhof°Höchst",
        "age": 64
      },
      {
        "year": 1996,
        "birthdate": "2203-03-15",
        "name": "P.°Haimo°Gerats°OFMCap, GR, Pfarrer°in°Herleshausen",
        "birth": "15.°März°1903°in°Bünde¥-Ennigloh (D¥-32257)",
        "grave": "Friedhof°des°Kapuzinerklosters°Münster",
        "age": 93
      },
      {
        "year": 2001,
        "birthdate": "2223-08-06",
        "name": "Hermann°Meissner, GR, Pfarrer°in°Hofbieber¥-Schwarzbach",
        "birth": "6.°August°1923°in°Neustadt/Krs.°Marburg",
        "grave": "Friedhof°Schwarzbach",
        "age": 77
      },
      {
        "year": 2013,
        "birthdate": "2239-06-25",
        "name": "Heinrich°Streb, Pfr.i.R., Meisenheim",
        "birth": "25.°Juni°1939°in°Somborn",
        "grave": "Friedhof°Schönenberg¥-Kübelberg°(D¥-66901)",
        "age": 73
      }
    ],
    "20": [
      {
        "year": 1954,
        "birthdate": "2183-10-28",
        "name": "Dr.°Alfons°Goldmann°(Breslau), Pfr.i.R., Küllstedt",
        "birth": "28.°Oktober°1883°in°Lissek (Lyski,°PL¥-44¥-295)",
        "grave": "",
        "age": 70
      },
      {
        "year": 1957,
        "birthdate": "2183-10-18",
        "name": "Georg°Gerling, Pfr.i.R., Kirchgandern",
        "birth": "18.°Oktober°1883°in°Heiligenstadt",
        "grave": "",
        "age": 73
      },
      {
        "year": 1997,
        "birthdate": "2213-01-06",
        "name": "Dr.°Josef°Gutmann, OStD°i.K.i.R., Msgr., Hilders",
        "birth": "6.°Januar°1913°in°Reulbach",
        "grave": "Friedhof°Reulbach",
        "age": 84
      },
      {
        "year": 2003,
        "birthdate": "2233-12-20",
        "name": "Josef°Peter, Msgr., Spiritual, Fulda",
        "birth": "20.°Dezember°1933°in°Somborn",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 69
      }
    ],
    "21": [
      {
        "year": 1964,
        "birthdate": "2212-03-14",
        "name": "Wilhelm°Hasenau, Pfarrer°in°Neuhof",
        "birth": "14.°März°1912°in°Welkers",
        "grave": "",
        "age": 52
      },
      {
        "year": 1981,
        "birthdate": "2209-05-20",
        "name": "Bernhard°Ewers, Pfr.i.R., GR, Halle",
        "birth": "20.°Mai°1909°in°Röhlinghausen (D¥-44651°Herne)",
        "grave": "Friedhof°Weißenborn¥-Lüderode°(D¥-37345°Sonnenstein)",
        "age": 72
      },
      {
        "year": 2018,
        "birthdate": "2227-11-01",
        "name": "Josef°van°Besien, Pfr.i.R., GR, Maintal¥-Hochstadt",
        "birth": "1.°November°1927°in°Brügge (B¥-8000)",
        "grave": "Friedhof°Maintal¥-Bischofsheim",
        "age": 90
      }
    ],
    "22": [
      {
        "year": 1957,
        "birthdate": "2186-02-15",
        "name": "Heinrich°Mette, Pfarrer°in°Erfurt, St.°Severi",
        "birth": "15.°Februar°1886°in°Niedereimer (D¥-59823°Arnsberg)",
        "grave": "",
        "age": 71
      }
    ],
    "23": [
      {
        "year": 1960,
        "birthdate": "2214-01-02",
        "name": "Franz°Mayer°(Königgrätz), Kpl.i.R., Volkmarsen",
        "birth": "2.°Januar°1914°in°Porstendorf (Bořitov,°CZ¥-679°21)",
        "grave": "",
        "age": 46
      },
      {
        "year": 2003,
        "birthdate": "2223-09-18",
        "name": "Alfons°Kluge°(Breslau/Fulda), Pfr.i.R., GR, Bad°Orb",
        "birth": "18.°September°1923°in°Löwenberg (Lwówek°Śląski,°PL¥-59¥-600)",
        "grave": "Friedhof°Bad°Orb",
        "age": 79
      }
    ],
    "24": [
      {
        "year": 1929,
        "birthdate": "2159-03-31",
        "name": "Wilhelm°Rhiel, Direktor°i.R., Steinfeld°(Eifel)",
        "birth": "31.°März°1859°in°Erfurtshausen",
        "grave": "",
        "age": 70
      },
      {
        "year": 1936,
        "birthdate": "2171-04-14",
        "name": "Johannes°Bierschenk, Dechant, Pfarrer°in°Neuendorf",
        "birth": "14.°April°1871°in°Bodenrode/Eichsfeld (D¥-37308)",
        "grave": "",
        "age": 65
      },
      {
        "year": 2003,
        "birthdate": "2238-05-05",
        "name": "Dr.°Anton°Thaler, Prof., Generalvikar, St.°Gallen/Schweiz",
        "birth": "5.°Mai°1938°in°Bazenheid (CH¥-9602)",
        "grave": "Friedhof°Bazenheid",
        "age": 65
      },
      {
        "year": 2007,
        "birthdate": "2213-01-18",
        "name": "¥fP.°Rudolf°Maria°Koppmann°OMI¥0f, Bischof°em., Hünfeld",
        "birth": "18.°Januar°1913°in°Essen",
        "grave": "Klosterfriedhof°Hünfeld",
        "age": 94
      }
    ],
    "25": [
      {
        "year": 1987,
        "birthdate": "2210-10-22",
        "name": "Joseph°Hawellek°(Breslau), Pfr.i.R., Bad°Soden¥-Salmünster",
        "birth": "22.°Oktober°1910°in°Beuthen (Bytom,°PL¥-41¥-9..)",
        "grave": "Friedhof°Bad°Soden¥-Salmünster",
        "age": 76
      },
      {
        "year": 2009,
        "birthdate": "2230-03-15",
        "name": "Norbert°Schneider, Pfr.i.R., GR, Fulda",
        "birth": "15.°März°1930°in°Fulda",
        "grave": "Friedhof°Eichenzell¥-Büchenberg",
        "age": 79
      },
      {
        "year": 2011,
        "birthdate": "2234-11-03",
        "name": "Albert°Seikel, Pfr.i.R., OStR°i.K.i.R., Msgr., GR, Freigericht¥-Horbach",
        "birth": "3.°November°1934°in°Neuenberg",
        "grave": "Friedhof°Horbach",
        "age": 76
      }
    ],
    "26": [
      {
        "year": 1938,
        "birthdate": "2190-08-08",
        "name": "Dr.°Hermann°Joseph°Büttner, Dr.°phil., Pfarrer°in°Maberzell",
        "birth": "8.°August°1890°in°Hünfeld",
        "grave": "",
        "age": 47
      },
      {
        "year": 1945,
        "birthdate": "2173-04-26",
        "name": "Georg°Reymann, Pfarrer°in°Erfurt¥-Hochheim",
        "birth": "26.°April°1873°in°Heiligenstadt",
        "grave": "",
        "age": 72
      }
    ],
    "27": [
      {
        "year": 2014,
        "birthdate": "2236-05-28",
        "name": "Hubert°Wald, Pfr.i.R., GR, Fulda",
        "birth": "28.°Mai°1936°in°Bad°Orb",
        "grave": "Friedhof°Bad°Orb",
        "age": 78
      }
    ],
    "28": [
      {
        "year": 1929,
        "birthdate": "2175-05-04",
        "name": "Oskar°Haseneier, Pfarrer°in°Kassel, St.°Maria",
        "birth": "4.°Mai°1875°in°Fulda",
        "grave": "",
        "age": 54
      },
      {
        "year": 1942,
        "birthdate": "2213-10-15",
        "name": "Johannes°Mergler, Diözesanpriester, gefallen°in°Rußland",
        "birth": "15.°Oktober°1913°in°Straßburg",
        "grave": "",
        "age": 28
      },
      {
        "year": 2023,
        "birthdate": "2236-01-31",
        "name": "Franz¥-Karl°Heil, Pfr.i.R., Fulda¥-Horas",
        "birth": "31.°Januar°1936°in°Fulda",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 87
      }
    ],
    "29": [
      {
        "year": 1954,
        "birthdate": "2199-10-20",
        "name": "Anton°Jendrzejczyk°(Breslau), Strafanstaltspfarrer°in°Weimar",
        "birth": "20.°Oktober°1899°in°Koschentin (Koszęcin,°PL¥-42¥-286)",
        "grave": "",
        "age": 54
      },
      {
        "year": 1981,
        "birthdate": "2204-01-22",
        "name": "Karl°Böhmer, Dozent, Prälat, Ehrendomherr, Erfurt",
        "birth": "22.°Januar°1904°in°Berlin",
        "grave": "St.¥-Hedwigs¥-Friedhof°Berlin¥-Hohenschönhausen",
        "age": 77
      },
      {
        "year": 1992,
        "birthdate": "2212-03-26",
        "name": "Johannes°Rützel, Pfr.i.R., Msgr., Jossgrund",
        "birth": "26.°März°1912°in°Pfaffenhausen",
        "grave": "Friedhof°Pfaffenhausen",
        "age": 80
      },
      {
        "year": 2010,
        "birthdate": "2224-02-14",
        "name": "Richard°Fischer, Pfr.i.R., GR, Fulda",
        "birth": "14.°Februar°1924°in°Fulda",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 86
      },
      {
        "year": 2016,
        "birthdate": "2244-02-21",
        "name": "Klaus°Dickhut, Pfr.i.R., Inzell",
        "birth": "21.°Februar°1944°in°Hilders",
        "grave": "Friedhof°Inzell¥-Niederachen°(D¥-83334)",
        "age": 72
      }
    ],
    "30": [
      {
        "year": 2004,
        "birthdate": "2217-01-09",
        "name": "Heinz°Famulla, Pfr.i.R., GR, Fulda¥-Lehnerz",
        "birth": "9.°Januar°1917°in°Berlin",
        "grave": "Friedhof°Lehnerz",
        "age": 87
      }
    ]
  },
  "7": {
    "1": [
      {
        "year": 1950,
        "birthdate": "2168-03-13",
        "name": "Karl°Wenzel, Pfr.i.R., Birkenfelde",
        "birth": "13.°März°1868°in°Rüstungen (D¥-37308°Schimberg)",
        "grave": "",
        "age": 82
      },
      {
        "year": 1952,
        "birthdate": "2180-04-14",
        "name": "Leo°Schall°(Breslau), Erzpriester, Pfr.i.R., GR, Dechant, Horbach",
        "birth": "14.°April°1880°in°Rogau (Rogów Opolski,°PL¥-47¥-300)",
        "grave": "Friedhof°Horbach",
        "age": 72
      },
      {
        "year": 1972,
        "birthdate": "2192-03-22",
        "name": "Johannes°Jordan°(Ermland), Pfarrer°in°Stolberg/Harz",
        "birth": "22.°März°1892°in°Mehlsack (Pieniężno,°PL¥-14¥-520)",
        "grave": "Friedhof°Stolberg°(D¥-06536)",
        "age": 80
      },
      {
        "year": 1975,
        "birthdate": "2206-08-15",
        "name": "Georg°Dirk, Pfr.i.R., GR, Heiligenstadt",
        "birth": "15.°August°1906°in°Danzig (Gdańsk,°PL¥-80¥-...)",
        "grave": "Friedhof°Heiligenstadt",
        "age": 68
      },
      {
        "year": 1986,
        "birthdate": "2224-12-20",
        "name": "Hubert°Wess, Pfr.i.R., GR, Wolfhagen",
        "birth": "20.°Dezember°1924°in°Wüstensachsen",
        "grave": "Friedhof°Lehnerz",
        "age": 61
      },
      {
        "year": 2011,
        "birthdate": "2237-07-01",
        "name": "Ernst°Watzlawik, Diakon, Hünfeld¥-Malges",
        "birth": "1.°Juli°1937°in°Bad°Liebwerda (Lázně°Libverda,°CZ¥-463°62)",
        "grave": "Friedhof°Hünfeld¥-Malges",
        "age": 74
      },
      {
        "year": 2017,
        "birthdate": "2243-01-05",
        "name": "Hans°Heinrich°Welschof, Diakon, Oberrodenbach",
        "birth": "5.°Januar°1943°in°Hann.°Münden (D¥-34346)",
        "grave": "Friedhof°Oberrodenbach",
        "age": 74
      }
    ],
    "2": [
      {
        "year": 1944,
        "birthdate": "2174-04-15",
        "name": "Adam°Kalbhenn, Benefiziat°i.R., Ershausen",
        "birth": "15.°April°1874°in°Ershausen/Eichsfeld (D¥-37308°Schimberg)",
        "grave": "",
        "age": 70
      },
      {
        "year": 2001,
        "birthdate": "2203-02-18",
        "name": "P.°Capistran°Bavendiek°OFM, Mühlen",
        "birth": "18.°Februar°1903°in°Mühlen (D¥-49439°Steinfeld)",
        "grave": "Friedhof°Mühlen",
        "age": 98
      }
    ],
    "3": [
      {
        "year": 1934,
        "birthdate": "2172-08-28",
        "name": "Franz°Dunkelberg, Pfarrer°in°Kirchworbis",
        "birth": "28.°August°1872°in°Schwarza/Krs.°Schleusingen (D¥-98547)",
        "grave": "",
        "age": 61
      },
      {
        "year": 1969,
        "birthdate": "2182-10-20",
        "name": "Josef°Plescher°(Leitmeritz), Pfr.i.R., Leinefelde/Eichsfeld",
        "birth": "20.°Oktober°1882°in°Suttom (Sutom,°CZ¥-411°15)",
        "grave": "",
        "age": 86
      },
      {
        "year": 1986,
        "birthdate": "2203-12-23",
        "name": "Dr.°Adalbert°Hosenfeld, Pfr.i.R., Msgr., GR, Brehme",
        "birth": "23.°Dezember°1903°in°Hainzell",
        "grave": "Friedhof°Brehme°(D¥-37339°Lindenberg/Eichsfeld)",
        "age": 82
      }
    ],
    "4": [
      {
        "year": 1957,
        "birthdate": "2181-04-11",
        "name": "Dr.°Eduard°Busse, StR°i.R., Heiligenstadt",
        "birth": "11.°April°1881°in°Dingelstädt",
        "grave": "",
        "age": 76
      },
      {
        "year": 1973,
        "birthdate": "2205-09-17",
        "name": "Heinrich°Weidemann, GR, Pfarrer°in°Fulda, Hl.°Geist",
        "birth": "17.°September°1905°in°Bodenrode/Eichsfeld (D¥-37308)",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 67
      }
    ],
    "5": [
      {
        "year": 2009,
        "birthdate": "2233-03-13",
        "name": "Konrad°Graf, Pfr.i.R., GR, Wadern¥-Nunkirchen",
        "birth": "13.°März°1933°in°Amöneburg",
        "grave": "Friedhof°Nunkirchen°(D¥-66687)",
        "age": 76
      },
      {
        "year": 2014,
        "birthdate": "2220-11-13",
        "name": "Ludwig°Vogel, Stadtpfr.i.R., Msgr., Ehrendomkapitular, Petersberg",
        "birth": "13.°November°1920°in°Petersberg",
        "grave": "Friedhof°Petersberg",
        "age": 93
      },
      {
        "year": 2020,
        "birthdate": "2237-03-23",
        "name": "Peter°A.°Macht, Pfr.i.R., GR, Amöneburg¥-Mardorf",
        "birth": "23.°März°1937°in°Minsk/Weißrussland",
        "grave": "Friedhof°Frankfurt¥-Bornheim",
        "age": 83
      }
    ],
    "6": [
      {
        "year": 1945,
        "birthdate": "2180-03-23",
        "name": "Ernst°Wolf, Pfarrer°in°Margretenhaun",
        "birth": "23.°März°1880°in°Kassel",
        "grave": "",
        "age": 65
      },
      {
        "year": 1955,
        "birthdate": "2197-04-12",
        "name": "Joseph°Heller, Kpl.i.R., Flieden",
        "birth": "12.°April°1897°in°Flieden",
        "grave": "",
        "age": 58
      },
      {
        "year": 1995,
        "birthdate": "2242-06-19",
        "name": "P.°Franz°Senn°OFMCap, Bad°Mergentheim",
        "birth": "19.°Juni°1942°in°Hinzistobel (D¥-88212°Ravensburg)",
        "grave": "Alter°Friedhof°Bad°Mergentheim",
        "age": 53
      }
    ],
    "7": [
      {
        "year": 1947,
        "birthdate": "2169-03-16",
        "name": "Franz°Otto, Pfr.i.R., Heiligenstadt",
        "birth": "16.°März°1869°in°Hamburg",
        "grave": "",
        "age": 78
      },
      {
        "year": 1956,
        "birthdate": "2178-03-09",
        "name": "Karl°Kramer, Pfr.i.R., Hüpstedt",
        "birth": "9.°März°1878°in°Krombach/Eichsfeld (D¥-37308)",
        "grave": "",
        "age": 78
      },
      {
        "year": 1989,
        "birthdate": "2217-08-29",
        "name": "Josef°Kempf, Pfr.i.R., Lörrach",
        "birth": "29.°August°1917°in°Altenmittlau",
        "grave": "Friedhof°Altenmittlau",
        "age": 71
      }
    ],
    "8": [
      {
        "year": 1954,
        "birthdate": "2183-01-31",
        "name": "Andreas°Kaufmann, Pfarrer°in°Kreuzebra",
        "birth": "31.°Januar°1883°in°Schwobfeld (D¥-37308)",
        "grave": "",
        "age": 71
      },
      {
        "year": 1968,
        "birthdate": "2202-08-16",
        "name": "P.°Maurus°Hackmann°OFMCap, Pfarrer°in°Bebra",
        "birth": "16.°August°1902°in°Enschede (NL¥-75..)",
        "grave": "",
        "age": 65
      }
    ],
    "9": [
      {
        "year": 1949,
        "birthdate": "2190-08-24",
        "name": "Otto°Henkel, Pfarrer°in°Bieber",
        "birth": "24.°August°1890°in°Fulda",
        "grave": "",
        "age": 58
      },
      {
        "year": 1958,
        "birthdate": "2225-04-01",
        "name": "Hermann°Joseph°Fiege, Kaplan°in°Eschwege",
        "birth": "1.°April°1925°in°Geismar/Rhön",
        "grave": "",
        "age": 33
      },
      {
        "year": 1959,
        "birthdate": "2193-04-19",
        "name": "Ambrosius°Kling, Pfr.i.R., Dietges",
        "birth": "19.°April°1893°in°Schleid",
        "grave": "",
        "age": 66
      },
      {
        "year": 1961,
        "birthdate": "2206-12-05",
        "name": "Nikolaus°Demme, Pfarrer°in°Niederorschel",
        "birth": "5.°Dezember°1906°in°Hüpstedt (D¥-37351°Dingelstädt)",
        "grave": "",
        "age": 54
      },
      {
        "year": 1968,
        "birthdate": "2187-11-25",
        "name": "Augustin°Ackermann, Pfr.i.R., Hünfeld",
        "birth": "25.°November°1887°in°Zillbach",
        "grave": "",
        "age": 80
      },
      {
        "year": 1968,
        "birthdate": "2204-07-31",
        "name": "P.°Oswald°Krause°SDB, Pfarrkurat°in°Hess.°Lichtenau",
        "birth": "31.°Juli°1904°in°Holthausen (D¥-44627°Herne¥-Sodingen)",
        "grave": "Friedhof°Kassel¥-Bettenhausen",
        "age": 63
      },
      {
        "year": 1972,
        "birthdate": "2209-05-08",
        "name": "Ernst°Flessel°(Olmütz), GR, Pfarrer°in°Richelsdorf",
        "birth": "8.°Mai°1909°in°Neutitschein (Nový°Jičín,°CZ¥-741°01)",
        "grave": "Friedhof°Richelsdorf",
        "age": 63
      },
      {
        "year": 1982,
        "birthdate": "2219-01-15",
        "name": "Johannes°Platte, Pfarrer°in°Gelnhausen¥-Höchst",
        "birth": "15.°Januar°1919°in°Wächtersbach",
        "grave": "Friedhof°Wächtersbach",
        "age": 63
      }
    ],
    "10": [
      {
        "year": 1921,
        "birthdate": "2163-08-25",
        "name": "Franz°Joseph°Rudolph, Pfarrer°in°Mackenzell",
        "birth": "25.°August°1863°in°Krebeck/Krs.°Duderstadt (D¥-37434)",
        "grave": "Friedhof°Mackenzell",
        "age": 57
      },
      {
        "year": 1957,
        "birthdate": "2176-03-29",
        "name": "Hugo°Nagels, GR, Pfarrer°in°Erfurt, St.°Nicolai",
        "birth": "29.°März°1876°in°Stockum (D¥-59427°Unna)",
        "grave": "Hauptfriedhof°Erfurt",
        "age": 81
      },
      {
        "year": 1979,
        "birthdate": "2206-03-14",
        "name": "Pius°Burkardt, Konviktsdirektor°i.R., Msgr., GR, Fulda",
        "birth": "14.°März°1906°in°Roßbach",
        "grave": "Fulda",
        "age": 73
      },
      {
        "year": 1984,
        "birthdate": "2210-01-28",
        "name": "Otto°Buchardt, Pfr.i.R., GR, Heiligenstadt",
        "birth": "28.°Januar°1910°in°Großbartloff (D¥-37359)",
        "grave": "Friedhof°Großbartloff",
        "age": 74
      },
      {
        "year": 1993,
        "birthdate": "2209-11-20",
        "name": "Ferdinand°Dallwig, Pfr.i.R., Msgr., GR, Dietershausen",
        "birth": "20.°November°1909°in°Wickers",
        "grave": "Friedhof°Dietershausen",
        "age": 83
      },
      {
        "year": 1998,
        "birthdate": "2239-02-26",
        "name": "Roland°Fischer, Msgr., Pfarrer°in°Hilders¥-Eckweisbach",
        "birth": "26.°Februar°1939°in°Liptitz (Liptice,°CZ¥-419°01°Duchcov)",
        "grave": "Friedhof°Eckweisbach",
        "age": 59
      }
    ],
    "11": [
      {
        "year": 1934,
        "birthdate": "2169-06-23",
        "name": "Dr.°Karl°Kirchberg, Pfarrer°in°Büttstedt",
        "birth": "23.°Juni°1869°in°Dingelstädt",
        "grave": "",
        "age": 65
      },
      {
        "year": 1981,
        "birthdate": "2210-08-30",
        "name": "Dr.°Stephan°Bartylla, StR°i.K.i.R., Amöneburg",
        "birth": "30.°August°1910°in°Lugendorf (Łubniany,°PL¥-46¥-024)",
        "grave": "Friedhof°Hegelhofen°(D¥-89264°Weißenhorn)",
        "age": 70
      },
      {
        "year": 1982,
        "birthdate": "2227-02-05",
        "name": "Josef°Krafczyk°(Breslau), Pfarrer°in°Stadtilm",
        "birth": "5.°Februar°1927°in°Laband (Łabędy,°PL¥-44¥-1..)",
        "grave": "Friedhof°Stadtilm",
        "age": 55
      }
    ],
    "12": [
      {
        "year": 1942,
        "birthdate": "2190-04-09",
        "name": "Gustav°Vogt, Pfarrer°in°Deuna, gestorben°in°Dachau",
        "birth": "9.°April°1890°in°Küllstedt (D¥-37359)",
        "grave": "",
        "age": 52
      },
      {
        "year": 1992,
        "birthdate": "2209-05-19",
        "name": "Adolf°Fleischmann, Pfr.i.R., GR, Fulda",
        "birth": "19.°Mai°1909°in°Fulda",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 83
      }
    ],
    "13": [
      {
        "year": 1964,
        "birthdate": "2206-07-31",
        "name": "Karl°Troche, Pfarrer°in°Kleinsassen",
        "birth": "31.°Juli°1906°in°Fulda",
        "grave": "",
        "age": 57
      },
      {
        "year": 1995,
        "birthdate": "2230-12-04",
        "name": "Wolfgang°Trabandt°(Berlin), Pfr.i.R., Berlin",
        "birth": "4.°Dezember°1930°in°Radawnitz (Radawnica,°PL¥-77¥-400°Złotów)",
        "grave": "Ev.°Waldfriedhof°Kleinmachnow",
        "age": 64
      }
    ],
    "15": [
      {
        "year": 1937,
        "birthdate": "2183-07-07",
        "name": "Wilhelm°Müller, Pfarrer°in°Frankfurt¥-Fechenheim",
        "birth": "7.°Juli°1883°in°Poppenhausen",
        "grave": "",
        "age": 54
      },
      {
        "year": 2021,
        "birthdate": "2234-09-09",
        "name": "Dr.°Elmar°Fastenrath°(Köln), Prof.°em., Dr.°theol.°habil., Msgr., Leverkusen",
        "birth": "9.°September°1934°in°Remscheid",
        "grave": "Friedhof°Lützenkirchen°(D¥-51381)",
        "age": 86
      }
    ],
    "16": [
      {
        "year": 1921,
        "birthdate": "2144-01-31",
        "name": "Augustin°Krah, GR, Dechant, Pfarrer°in°Amöneburg",
        "birth": "31.°Januar°1844°in°Weidenau",
        "grave": "",
        "age": 77
      },
      {
        "year": 1931,
        "birthdate": "2160-07-28",
        "name": "Kajetan°Bott, Dechant, Pfarrer°in°Johannesberg",
        "birth": "28.°Juli°1860°in°Dittlofrod",
        "grave": "",
        "age": 70
      },
      {
        "year": 1959,
        "birthdate": "2180-05-05",
        "name": "Canisius°Gellings, Pfarrkurat°in°Ferna/Eichsfeld",
        "birth": "5.°Mai°1880°in°Bonn",
        "grave": "",
        "age": 79
      },
      {
        "year": 1974,
        "birthdate": "2184-09-29",
        "name": "Nikolaus°Witzel, Pfr.i.R., GR, Soisdorf",
        "birth": "29.°September°1884°in°Soisdorf",
        "grave": "Friedhof°Soisdorf",
        "age": 89
      },
      {
        "year": 2019,
        "birthdate": "2238-05-22",
        "name": "Heribert°Bräscher, Pfr.i.R., GR, Neuhof",
        "birth": "22.°Mai°1938°in°Fulda",
        "grave": "Friedhof°Neuhof¥-Opperz",
        "age": 81
      }
    ],
    "17": [
      {
        "year": 1958,
        "birthdate": "2212-02-03",
        "name": "Dr.°Ludwig°Betz, Dr.°phil., Pfarrer°in°Eckweisbach",
        "birth": "3.°Februar°1912°in°Salmünster",
        "grave": "",
        "age": 46
      },
      {
        "year": 1987,
        "birthdate": "2222-09-09",
        "name": "Josef°Schydlo, GR, Pfarrer°in°Fulda¥-Edelzell",
        "birth": "9.°September°1922°in°Ellguth¥-Zabrze (Ligota°Zabrska,°PL¥-44¥-1..°Gliwice)",
        "grave": "Fulda",
        "age": 64
      }
    ],
    "18": [
      {
        "year": 1986,
        "birthdate": "2214-09-27",
        "name": "Heinrich°Siebert, Pfr.i.R., Fulda",
        "birth": "27.°September°1914°in°Berlin¥-Steglitz",
        "grave": "Friedhof°Haimbach",
        "age": 71
      },
      {
        "year": 1992,
        "birthdate": "2209-12-19",
        "name": "P.°Emmerich°Reith°OFM, Sigmaringen",
        "birth": "19.°Dezember°1909°in°Hünfeld",
        "grave": "",
        "age": 82
      },
      {
        "year": 1994,
        "birthdate": "2214-03-18",
        "name": "Friedrich°Driemer°(Königgrätz), Pfr.i.R., GR, Bad°Langensalza",
        "birth": "18.°März°1914°in°Saufloß (Souvlastní,°CZ¥-517°61°Zdobnice)",
        "grave": "Friedhof°Bad°Langensalza",
        "age": 80
      },
      {
        "year": 2018,
        "birthdate": "2267-12-17",
        "name": "Ulrich°Schäfer, Pfarrer°in°Somborn",
        "birth": "17.°Dezember°1967°in°Fulda",
        "grave": "Neuer°Friedhof°Eichenzell",
        "age": 50
      }
    ],
    "19": [
      {
        "year": 1943,
        "birthdate": "2170-03-13",
        "name": "Dr.°Joseph°Lammeyer, Prälat, Universitätsprofessor°in°Bonn",
        "birth": "13.°März°1870°in°Fulda",
        "grave": "",
        "age": 73
      },
      {
        "year": 1965,
        "birthdate": "2194-11-17",
        "name": "P.°Hermann°Vell°CSsR, Pfarrer°in°Jena¥-Land",
        "birth": "17.°November°1894°in°Kochern (Cocheren,°F¥-57800)",
        "grave": "",
        "age": 70
      },
      {
        "year": 1984,
        "birthdate": "2210-07-18",
        "name": "Josef°Wistuba°(Breslau), Pfr.i.R., Künzell",
        "birth": "18.°Juli°1910°in°Schomberg (Szombierki,°PL¥-41¥-907)",
        "grave": "Friedhof°Künzell",
        "age": 74
      }
    ],
    "20": [
      {
        "year": 1926,
        "birthdate": "2183-09-29",
        "name": "DDr.°Engelbert°Koch, Prof., Dr.°theol.°et°phil., Regens, Dompräbendat, Fulda",
        "birth": "29.°September°1883°in°Motzlar°bei°Geisa",
        "grave": "",
        "age": 42
      },
      {
        "year": 1957,
        "birthdate": "2201-10-09",
        "name": "Karl°Wachtel, Pfarrer°in°Geismar",
        "birth": "9.°Oktober°1901°in°Rüdigheim",
        "grave": "",
        "age": 55
      },
      {
        "year": 1961,
        "birthdate": "2177-10-14",
        "name": "Otto°Breitenstein°(Paderborn), Schulrat°i.R., Heiligenstadt",
        "birth": "14.°Oktober°1877°in°Heiligenstadt",
        "grave": "",
        "age": 83
      },
      {
        "year": 1967,
        "birthdate": "2185-11-22",
        "name": "Wilhelm°Quell, Pfr.i.R., Hilders",
        "birth": "22.°November°1885°in°Jossa",
        "grave": "",
        "age": 81
      },
      {
        "year": 1969,
        "birthdate": "2192-03-28",
        "name": "Philipp°Fricke, Pfr.i.R., Archivar°in°Heiligenstadt",
        "birth": "28.°März°1892°in°Sonnenstein/Eichsfeld (D¥-37345)",
        "grave": "",
        "age": 77
      },
      {
        "year": 1970,
        "birthdate": "2202-10-07",
        "name": "Adolf°Fischer, GR, Pfarrer°in°Kleinbartloff/Eichsfeld",
        "birth": "7.°Oktober°1902°in°Rasdorf",
        "grave": "Friedhof°Kleinbartloff",
        "age": 67
      },
      {
        "year": 1979,
        "birthdate": "2193-09-06",
        "name": "Aloys°Herget°(Gurk-Klagenfurt), Pfr.i.R., Lahrbach",
        "birth": "6.°September°1893°in°Lahrbach",
        "grave": "Friedhof°Lahrbach",
        "age": 85
      },
      {
        "year": 1988,
        "birthdate": "2212-07-26",
        "name": "Karl°Kiowski°(Breslau), Pfr.i.R., Königsee/Thür.°Wald",
        "birth": "26.°Juli°1912°in°Ratibor (Racibórz,°PL¥-47¥-4..)",
        "grave": "Friedhof°Königsee°(D¥-07426)",
        "age": 75
      }
    ],
    "21": [
      {
        "year": 1990,
        "birthdate": "2220-04-03",
        "name": "P.°Dr.°Kurt°Michel°SJ, Dr.°phil., Kaplan°in°Marburg",
        "birth": "3.°April°1920°in°Breslau (Wrocław,°PL¥-50¥-...)",
        "grave": "Hauptfriedhof°am°Rotenberg,°Marburg",
        "age": 70
      },
      {
        "year": 1991,
        "birthdate": "2220-06-25",
        "name": "Erich°Johne, Pfr.i.R., Weißensee°b.°Sömmerda",
        "birth": "25.°Juni°1920°in°Deutsch¥-Gabel (Jablonné°v°Podještědí,°CZ¥-471°25)",
        "grave": "",
        "age": 71
      },
      {
        "year": 2022,
        "birthdate": "2228-07-22",
        "name": "Gerhard°Willeke, Pfr.i.R., Fulda¥-Horas",
        "birth": "22.°Juli°1928°in°Kassel",
        "grave": "Friedhof°Ebersburg¥-Ried",
        "age": 93
      }
    ],
    "22": [
      {
        "year": 1931,
        "birthdate": "2171-03-05",
        "name": "Joseph°Erb, Pfarrer°in°Großkrotzenburg",
        "birth": "5.°März°1871°in°Schleid",
        "grave": "",
        "age": 60
      },
      {
        "year": 1950,
        "birthdate": "2176-10-17",
        "name": "Christian°Kauth, Pfarrer°in°Poppenhausen",
        "birth": "17.°Oktober°1876°in°Frankfurt¥-Bockenheim",
        "grave": "",
        "age": 73
      },
      {
        "year": 1963,
        "birthdate": "2185-08-20",
        "name": "Konrad°Wieber, Pfarrer°in°Oberndorf/Krs.°Gelnhausen",
        "birth": "20.°August°1885°in°Niederklein",
        "grave": "",
        "age": 77
      },
      {
        "year": 1991,
        "birthdate": "2211-04-29",
        "name": "Wilhelm°Zimmerling, Pfr.i.R., GR, Fritzlar",
        "birth": "29.°April°1911°in°Hagen/Westfalen",
        "grave": "Neuer°Friedhof°Fritzlar",
        "age": 80
      }
    ],
    "23": [
      {
        "year": 1964,
        "birthdate": "2193-10-04",
        "name": "Karl°Diez, Rektor°i.R., GR, Amöneburg",
        "birth": "4.°Oktober°1893°in°Nüst",
        "grave": "",
        "age": 70
      },
      {
        "year": 1973,
        "birthdate": "2209-08-08",
        "name": "Paul°Marx°(Breslau), Msgr., GR, Kanzleidirektor°in°Fulda",
        "birth": "8.°August°1909°in°Ruda (Ruda°Śląska,°PL¥-41¥-7..)",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 63
      },
      {
        "year": 2000,
        "birthdate": "2229-09-15",
        "name": "¥fDDr.°Johannes°Dyba¥0f, Dr.°iur.°utr., Erzbischof, Bischof°von°Fulda°(1983¥_2000)",
        "birth": "15.°September°1929°in°Berlin",
        "grave": "St.¥-Johannes¥-Kapelle°im°Dom°zu°Fulda",
        "age": 70
      },
      {
        "year": 2007,
        "birthdate": "2227-10-13",
        "name": "Hubert°Dudek°(Breslau/Fulda), Pfr.i.R., OStR°i.R., Alzenau¥-Hörstein",
        "birth": "13.°Oktober°1927°in°Stein/Oberschlesien (Kamień,°PL¥-44¥-213°Rybnik)",
        "grave": "Friedhof°Hörstein",
        "age": 79
      },
      {
        "year": 2023,
        "birthdate": "2260-08-07",
        "name": "Herbert°Schrimpf, Pfarrer°in°Hünfeld¥-Michelsrombach",
        "birth": "7.°August°1960°in°Hanau",
        "grave": "Friedhof°Hanau¥-Kesselstadt",
        "age": 62
      }
    ],
    "24": [
      {
        "year": 1996,
        "birthdate": "2206-01-31",
        "name": "Ernst°Göller, Pfr.i.R., Msgr., GR, Fulda",
        "birth": "31.°Januar°1906°in°Fulda",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 90
      }
    ],
    "25": [
      {
        "year": 1937,
        "birthdate": "2173-08-10",
        "name": "August°Hornemann, Pfarrer°in°Hildebrandshausen",
        "birth": "10.°August°1873°in°Leinefelde (D¥-37327)",
        "grave": "",
        "age": 63
      },
      {
        "year": 1963,
        "birthdate": "2176-10-10",
        "name": "P.°Ägidius°Keuchen°SJ, Rektor, Hospital°z.°Hl.°Geist°in°Heiligenstadt",
        "birth": "10.°Oktober°1876°in°Aachen",
        "grave": "",
        "age": 86
      },
      {
        "year": 1971,
        "birthdate": "2212-06-26",
        "name": "Willi°Metzler, GR, Pfarrer°in°Dingelstädt",
        "birth": "26.°Juni°1912°in°Gersfeld",
        "grave": "Friedhof°Dingelstädt",
        "age": 59
      },
      {
        "year": 2010,
        "birthdate": "2230-05-28",
        "name": "Heribert°Sauerbier, Pfr.i.R., GR, Herleshausen",
        "birth": "28.°Mai°1930°in°Dortmund",
        "grave": "Friedhof°Herleshausen",
        "age": 80
      }
    ],
    "26": [
      {
        "year": 1953,
        "birthdate": "2183-11-04",
        "name": "Stanislaus°Janowski°(Breslau), Erzpriester°i.R., Gotha",
        "birth": "4.°November°1883°in°Kreuzburg (Kluczbork,°PL¥-46¥-200)",
        "grave": "",
        "age": 69
      },
      {
        "year": 1974,
        "birthdate": "2204-10-21",
        "name": "Joseph°Rimpler°(Breslau), Pfarrer°in°Bad°Sachsa",
        "birth": "21.°Oktober°1904°in°Schwientochlowitz (Świętochłowice,°PL¥-41¥-60.)",
        "grave": "Friedhof°Ostbevern°(D¥-48346)",
        "age": 69
      }
    ],
    "27": [
      {
        "year": 1940,
        "birthdate": "2187-10-07",
        "name": "Ludwig°Roth, Kuratus°i.R., Dietges",
        "birth": "7.°Oktober°1887°in°Dammersbach",
        "grave": "",
        "age": 52
      },
      {
        "year": 1949,
        "birthdate": "2173-07-21",
        "name": "Adolf°Malkmus, Pfarrer°in°Volkmarsen",
        "birth": "21.°Juli°1873°in°Hanau",
        "grave": "",
        "age": 76
      },
      {
        "year": 1956,
        "birthdate": "2190-10-11",
        "name": "Arthur°Ober°(Breslau), Pfarrer°in°Gotha, Christ¥-König",
        "birth": "11.°Oktober°1890°in°Jätschau (Jaczów,°PL¥-67¥-210)",
        "grave": "",
        "age": 65
      },
      {
        "year": 1983,
        "birthdate": "2203-03-18",
        "name": "Alois°Jungbluth°(Danzig), Pfr.i.R., Wegberg",
        "birth": "18.°März°1903°in°Poppe (Popowo,°PL¥-66¥-350°Bledzew)",
        "grave": "Friedhof°Wegberg°(D¥-41844)",
        "age": 80
      },
      {
        "year": 1991,
        "birthdate": "2209-12-18",
        "name": "Richard°Barthelmes, Pfr.i.R., GR, Steinbach/Rhön",
        "birth": "18.°Dezember°1909°in°Rupsroth",
        "grave": "Friedhof°Eckweisbach",
        "age": 81
      }
    ],
    "28": [
      {
        "year": 1967,
        "birthdate": "2203-09-22",
        "name": "Josef°Knobloch, Pfr.i.R., Andernach",
        "birth": "22.°September°1903°in°Schletzenhausen",
        "grave": "",
        "age": 63
      }
    ],
    "29": [
      {
        "year": 1954,
        "birthdate": "2172-08-18",
        "name": "Heinrich°Herrmann°(Leitmeritz), Religionslehrer°i.R., Konsistorialrat, Erfurt",
        "birth": "18.°August°1872°in°Insterburgᵒ",
        "grave": "",
        "age": 81
      },
      {
        "year": 1974,
        "birthdate": "2205-01-05",
        "name": "Dr.°Walter°Loos°(Leitmeritz), Pfr.i.R., Walschleben",
        "birth": "5.°Januar°1905°in°Schwaz (Světec,°CZ¥-417°53)",
        "grave": "Hauptfriedhof°Erfurt",
        "age": 69
      },
      {
        "year": 1986,
        "birthdate": "2211-09-05",
        "name": "Nikolaus°Bauer, Pfarrer°in°Wächtersbach",
        "birth": "5.°September°1911°in°Fisch (D¥-54439)",
        "grave": "Friedhof°Fisch",
        "age": 74
      },
      {
        "year": 1991,
        "birthdate": "2214-04-10",
        "name": "Dr.°Benno°Löbmann°(Meißen), Prof.°em., Dr.°iur.°can., Prälat, Augsburg",
        "birth": "10.°April°1914°in°Callenberg (D¥-02681°Schirgiswalde¥-Kirschau)",
        "grave": "",
        "age": 77
      }
    ],
    "30": [
      {
        "year": 1931,
        "birthdate": "2194-03-25",
        "name": "Alfred°Rathmann, Pfarrer°in°Melchendorf°b.°Erfurt",
        "birth": "25.°März°1894°in°Kempen (Kępno,°PL¥-63¥-600)",
        "grave": "",
        "age": 37
      },
      {
        "year": 1966,
        "birthdate": "2197-08-03",
        "name": "Paul°Brandstetter, Dechant, Pfarrer°in°Kassel, St.°Familia",
        "birth": "3.°August°1897°in°Templin (D¥-17268)",
        "grave": "",
        "age": 68
      },
      {
        "year": 1970,
        "birthdate": "2179-02-08",
        "name": "Jakob°Wald, Pfr.i.R., GR, Bad°Soden¥-Salmünster",
        "birth": "8.°Februar°1879°in°Geisa",
        "grave": "Friedhof°Bad°Soden",
        "age": 91
      },
      {
        "year": 1972,
        "birthdate": "2199-07-20",
        "name": "Anton°Meilinger, Pfr.i.R., GR, Zella/Rhön",
        "birth": "20.°Juli°1899°in°Ried",
        "grave": "Friedhof°Zella/Rhön",
        "age": 73
      },
      {
        "year": 1986,
        "birthdate": "2202-06-04",
        "name": "Dr.°Konrad°Gärtner, Dr.°phil., Pfr.i.R., Fulda",
        "birth": "4.°Juni°1902°in°Malkes",
        "grave": "Friedhof°Malkes",
        "age": 84
      },
      {
        "year": 1994,
        "birthdate": "2209-06-02",
        "name": "Adalbert°Nix, Pfr.i.R., GR, Hilders",
        "birth": "2.°Juni°1909°in°Spahl",
        "grave": "Friedhof°Spahl",
        "age": 85
      },
      {
        "year": 1995,
        "birthdate": "2216-11-03",
        "name": "Josef°Schaub, Pfr.i.R., GR, Münster°(Hessen)",
        "birth": "3.°November°1916°in°Allendorf/Krs.°Marburg",
        "grave": "Friedhof°Münster",
        "age": 78
      }
    ],
    "31": [
      {
        "year": 1951,
        "birthdate": "2206-11-02",
        "name": "Martin°Böhne, Pfarrkurat°in°Müs",
        "birth": "2.°November°1906°in°Naumburg",
        "grave": "",
        "age": 44
      },
      {
        "year": 1952,
        "birthdate": "2180-06-09",
        "name": "Dr.°Aloys°Kirchner, Präfekt°des°Bischöfl.°Knabensminars°in°Heiligenstadt",
        "birth": "9.°Juni°1880°in°Breitenbach/Eichsfeld (D¥-37327°Leinefelde¥-Worbis)",
        "grave": "",
        "age": 72
      },
      {
        "year": 1977,
        "birthdate": "2202-06-21",
        "name": "Karl°Kirchberg, Pfr.i.R., GR, Dingelstädt",
        "birth": "21.°Juni°1902°in°Dingelstädt",
        "grave": "Friedhof°Dingelstädt",
        "age": 75
      },
      {
        "year": 1991,
        "birthdate": "2206-09-27",
        "name": "P.°Wilhelm°Michel°OMI, Hünfeld",
        "birth": "27.°September°1906°in°Sargenzell",
        "grave": "Klosterfriedhof°Hünfeld",
        "age": 84
      }
    ]
  },
  "8": {
    "1": [
      {
        "year": 1957,
        "birthdate": "2170-07-31",
        "name": "Peter°Ernst, Pfr.i.R., Fulda",
        "birth": "31.°Juli°1870°in°Kallenhardt/Westfalen (D¥-59602°Rüthen)",
        "grave": "",
        "age": 87
      },
      {
        "year": 1961,
        "birthdate": "2188-12-22",
        "name": "Amand°Simon, Pfr.i.R., Neuses",
        "birth": "22.°Dezember°1888°in°Oberalba",
        "grave": "",
        "age": 72
      },
      {
        "year": 1962,
        "birthdate": "2182-12-17",
        "name": "Wilhelm°Coerdt°(Paderborn), StR°i.R., GR, Fiddemühle°üb.°Kirchhain",
        "birth": "17.°Dezember°1882°in°Oestinghausen (59510°Lippetal)",
        "grave": "",
        "age": 79
      },
      {
        "year": 1980,
        "birthdate": "2212-02-25",
        "name": "Albrecht°Hellbach, Pfr.i.R., Körle",
        "birth": "25.°Februar°1912°in°Fulda",
        "grave": "Friedhof°Körle¥-Lobenhausen",
        "age": 68
      },
      {
        "year": 2016,
        "birthdate": "2243-08-28",
        "name": "Walter°Götz, Pfr.i.R., GR, Penzberg",
        "birth": "28.°August°1943°in°Karlsbad (Karlovy°Vary,°CZ¥-360°01)",
        "grave": "Neuer°Friedhof°Bruchköbel",
        "age": 72
      },
      {
        "year": 2025,
        "birthdate": "2239-04-28",
        "name": "Dr.°Willi Paulo°Link, Msgr., GR, Carapicuíba/Brasilien",
        "birth": "28.°April°1939°in°Stellberg/Krs. Fulda",
        "grave": "Friedhof°Ebersburg¥-Stellberg",
        "age": 86
      }
    ],
    "2": [
      {
        "year": 1936,
        "birthdate": "2179-09-17",
        "name": "Damian°Lauer, Pfarrer°in°Mardorf",
        "birth": "17.°September°1879°in°Hauswurz",
        "grave": "",
        "age": 56
      },
      {
        "year": 1951,
        "birthdate": "2191-12-30",
        "name": "Peter°Kräuter, Pfarrer°in°Simmershausen",
        "birth": "30.°Dezember°1891°in°Schröck",
        "grave": "",
        "age": 59
      },
      {
        "year": 1952,
        "birthdate": "2172-08-03",
        "name": "Rudolf°Bergmann°(Leitmeritz), Pfr.i.R., Erzdechant, Kirchgandern",
        "birth": "3.°August°1872°in°Niederhanichen (Dolní°Hanychov,°CZ¥-460°01°Liberec)",
        "grave": "",
        "age": 79
      },
      {
        "year": 1975,
        "birthdate": "2211-09-18",
        "name": "Dr.°Franz°Gypkens, Frankfurt°a.°M.",
        "birth": "18.°September°1911°in°Sigmaringen (D¥-72488)",
        "grave": "Frankfurt",
        "age": 63
      },
      {
        "year": 1981,
        "birthdate": "2208-03-23",
        "name": "Wilhelm°Dominka, Pfr.i.R., GR, Kirchworbis",
        "birth": "23.°März°1908°in°Dingelstädt",
        "grave": "Friedhof°Dingelstädt",
        "age": 73
      },
      {
        "year": 1992,
        "birthdate": "2200-07-22",
        "name": "Otto°Boden, Pfr.i.R., Msgr., GR, Gelnhausen",
        "birth": "22.°Juli°1900°in°Hanau",
        "grave": "Friedhof°Gelnhausen",
        "age": 92
      },
      {
        "year": 2002,
        "birthdate": "2211-01-18",
        "name": "Josef°Nüdling, Pfr.i.R., GR, Hilders",
        "birth": "18.°Januar°1911°in°Hilders",
        "grave": "Friedhof°Hilders",
        "age": 91
      }
    ],
    "3": [
      {
        "year": 1932,
        "birthdate": "2163-09-10",
        "name": "Karl°Poppe, Propst, Ehrendomkapitular, Bischöfl.°Kommissarius°in°Heiligenstadt",
        "birth": "10.°September°1863°in°Heiligenstadt",
        "grave": "",
        "age": 68
      },
      {
        "year": 1946,
        "birthdate": "2198-02-24",
        "name": "Joseph°Scholl, Pfarrer°in°Hosenfeld",
        "birth": "24.°Februar°1898°in°Konstanz (D¥-7846.)",
        "grave": "",
        "age": 48
      },
      {
        "year": 1956,
        "birthdate": "2171-01-16",
        "name": "Aloys°Oberthür, Pfr.i.R., Heiligenstadt",
        "birth": "16.°Januar°1871°in°Hildebrandshausen (D¥-99976°Südeichsfeld)",
        "grave": "",
        "age": 85
      },
      {
        "year": 2000,
        "birthdate": "2221-10-31",
        "name": "P.°Odilo°Thomas°Kostka°SSCC, Schlüchtern¥-Wallroth",
        "birth": "31.°Oktober°1921°in°Wellendorf/Krs.°Ratibor (Turze,°PL¥-47¥-420°Kuźnia Raciborska)",
        "grave": "Friedhof°am°Allerheiligenberg,°Niederlahnstein",
        "age": 78
      }
    ],
    "4": [
      {
        "year": 1947,
        "birthdate": "2174-04-16",
        "name": "Hugo°Wehner, Pfarrer°in°Kranlucken",
        "birth": "16.°April°1874°in°Fulda",
        "grave": "",
        "age": 73
      },
      {
        "year": 1948,
        "birthdate": "2189-10-04",
        "name": "Franz°Heer, Pfarrer°in°Büttstedt",
        "birth": "4.°Oktober°1889°in°Hamburg",
        "grave": "",
        "age": 58
      },
      {
        "year": 1951,
        "birthdate": "2206-10-19",
        "name": "Anton°Jonczyk°(Breslau), Pfarrer°in°Wiehe/Unstrut",
        "birth": "19.°Oktober°1906°in°Bischofsthal (Tuszkowo,°PL¥-89¥-413)",
        "grave": "",
        "age": 44
      },
      {
        "year": 1960,
        "birthdate": "2179-08-30",
        "name": "Johannes°Steinwachs, Pfr.i.R., Heiligenstadt",
        "birth": "30.°August°1879°in°Lengenfeld°u.°St. (D¥-99976°Südeichsfeld)",
        "grave": "",
        "age": 80
      },
      {
        "year": 2016,
        "birthdate": "2221-08-07",
        "name": "Philipp°Heim, Pfr.i.R., Msgr., GR, Kassel",
        "birth": "7.°August°1921°in°Bad°Orb",
        "grave": "Hauptfriedhof°Kassel",
        "age": 94
      }
    ],
    "5": [
      {
        "year": 1976,
        "birthdate": "2215-06-04",
        "name": "Umberto°Pascolini, Italienerseelsorger°in°Kassel",
        "birth": "4.°Juni°1915°in°Bastia°Umbra (I¥-06083)",
        "grave": "Parma",
        "age": 61
      },
      {
        "year": 1977,
        "birthdate": "2202-12-09",
        "name": "Ernst°Maria°Franz°Gumbel, Msgr., GR, Bistumsarchivar°in°Fulda",
        "birth": "9.°Dezember°1902°in°Frankfurt°a.°M.",
        "grave": "Fulda",
        "age": 74
      }
    ],
    "6": [
      {
        "year": 1936,
        "birthdate": "2205-01-14",
        "name": "Otto°Amthor, Kaplan°in°Hofaschenbach",
        "birth": "14.°Januar°1905°in°Gotha",
        "grave": "",
        "age": 31
      },
      {
        "year": 1978,
        "birthdate": "2197-09-26",
        "name": "¥fHl. Papst°Paul°VI.¥0f, Bischof von Rom",
        "birth": "26.°September°1897°in°Concesio (I¥-25062)",
        "grave": "Basilika°St.°Peter°in°Rom",
        "age": 80
      }
    ],
    "7": [
      {
        "year": 1984,
        "birthdate": "2210-10-20",
        "name": "Josef°Johannes°Fischer, GR, Pfarrer°in°Kreuzebra",
        "birth": "20.°Oktober°1910°in°Lutter/Eichsfeld (D¥-37318)",
        "grave": "Friedhof°Kreuzebra",
        "age": 73
      },
      {
        "year": 2003,
        "birthdate": "2230-05-02",
        "name": "Ernst°Eduard°Storch, Pfr.i.R., GR, Ehrenberg¥-Reulbach",
        "birth": "2.°Mai°1930°in°Steinwand",
        "grave": "Friedhof°Kleinsassen",
        "age": 73
      },
      {
        "year": 2017,
        "birthdate": "2236-06-08",
        "name": "P.°Heinrich°Rentmeister°SDB, GR, Köln¥-Mühlheim",
        "birth": "8.°Juni°1936°in°Bottrop",
        "grave": "Friedhof°Köln¥-Stammheim",
        "age": 81
      }
    ],
    "9": [
      {
        "year": 1963,
        "birthdate": "2191-03-29",
        "name": "Franz°Joseph°Krenzer, Pfr.i.R., Geisa",
        "birth": "29.°März°1891°in°Ketten/Rhön",
        "grave": "",
        "age": 72
      },
      {
        "year": 1978,
        "birthdate": "2207-12-24",
        "name": "Edgar°Natsch°(Breslau), Pfr.i.R., Wingerode",
        "birth": "24.°Dezember°1907°in°Breslau (Wrocław,°PL¥-50¥-...)",
        "grave": "Friedhof°Wingerode",
        "age": 70
      },
      {
        "year": 1985,
        "birthdate": "2221-10-16",
        "name": "Hermann°Roth, Pfr.i.R., Wiesenfeld",
        "birth": "16.°Oktober°1921°in°Berlin",
        "grave": "Friedhof°Steinbach/Eichsfeld",
        "age": 63
      },
      {
        "year": 2017,
        "birthdate": "2230-11-16",
        "name": "Eligiusz°Woszek°(Katowice/Fulda), Pfr.i.R., GR, Katowice/Polen",
        "birth": "16.°November°1930°in°Katowice (PL¥-40¥-...)",
        "grave": "Friedhof°Ruptawa/Polen",
        "age": 86
      }
    ],
    "10": [
      {
        "year": 1961,
        "birthdate": "2199-07-31",
        "name": "Karl°Abel, Dechant, Pfarrer°in°Rengelrode",
        "birth": "31.°Juli°1899°in°Buttlar",
        "grave": "",
        "age": 62
      },
      {
        "year": 2017,
        "birthdate": "2236-05-09",
        "name": "Konrad°Meilinger, OStR°i.K.i.R., Msgr., GR, Hanau",
        "birth": "9.°Mai°1936°in°Fulda",
        "grave": "Friedhof°Hanau¥-Kesselstadt",
        "age": 81
      },
      {
        "year": 2025,
        "birthdate": "2264-12-06",
        "name": "Michael°Möller, Pfarrer°in°Hilders",
        "birth": "6.°Dezember°1964°in°Fulda",
        "grave": "Friedhof°Veitsteinbach",
        "age": 60
      }
    ],
    "12": [
      {
        "year": 1957,
        "birthdate": "2184-10-18",
        "name": "Karl°Rohn°(Leitmeritz), Religionslehrer°i.R., Erfurt",
        "birth": "18.°Oktober°1884°in°Grottau (Hrádek°nad°Nisou,°CZ¥-463°34)",
        "grave": "",
        "age": 72
      },
      {
        "year": 1958,
        "birthdate": "2186-01-18",
        "name": "Theodor°Helbig, Pfarrer°in°Dingelstädt",
        "birth": "18.°Januar°1886°in°Deuna (D¥-37355°Niederorschel)",
        "grave": "",
        "age": 72
      },
      {
        "year": 2025,
        "birthdate": "2288-07-31",
        "name": "Piotr Andrzej°Maśnica°(Tarnów), Pfr., Kaplan°der°Polnischen°Mission°in°Stadtallendorf",
        "birth": "31.°Juli°1988°in°Limanowa (PL¥-34¥-600)",
        "grave": "Friedhof°Łososina°Górna (PL¥-34¥-600)",
        "age": 37
      }
    ],
    "13": [
      {
        "year": 1925,
        "birthdate": "2171-05-22",
        "name": "Ludwig°Günther, Pfarrer°in°Lütter",
        "birth": "22.°Mai°1871°in°Geisa",
        "grave": "",
        "age": 54
      },
      {
        "year": 1970,
        "birthdate": "2196-07-14",
        "name": "Josef°Purschke, Pfarrer°in°Friesenhausen",
        "birth": "14.°Juli°1896°in°Hamburg",
        "grave": "Friedhof°Friesenhausen",
        "age": 74
      },
      {
        "year": 1979,
        "birthdate": "2256-02-03",
        "name": "Ronald°Sommer, Neupriester°in°Erfurt",
        "birth": "3.°Februar°1956°in°Beuren/Eichsfeld (D¥-37327°Leinefelde¥-Worbis)",
        "grave": "Friedhof°Beuren",
        "age": 23
      },
      {
        "year": 1985,
        "birthdate": "2212-09-21",
        "name": "Franz°Paul°(Leitmeritz), GR, Pfarrer°in°Haselstein",
        "birth": "21.°September°1912°in°Niedereinsiedel (Dolní°Poustevna,°CZ¥-407°82)",
        "grave": "Friedhof°Haselstein",
        "age": 72
      },
      {
        "year": 2022,
        "birthdate": "2240-03-17",
        "name": "Hans¥-Joachim°Uhde, Pfr.i.R., GR, Maintal¥-Dörnigheim",
        "birth": "17.°März°1940°in°Kassel",
        "grave": "Neuer°Friedhof°Maintal¥-Dörnigheim",
        "age": 82
      }
    ],
    "14": [
      {
        "year": 1976,
        "birthdate": "2212-02-29",
        "name": "Theobald°Höfler, Pfr.i.R., Altenmittlau",
        "birth": "29.°Februar°1912°in°Altenmittlau",
        "grave": "Friedhof°Altenmittlau",
        "age": 64
      },
      {
        "year": 2025,
        "birthdate": "2238-04-30",
        "name": "Nikolaus°Schwarz, Pfr.i.R., Fulda¥-Horas",
        "birth": "30.°April°1938°in°Wolfersweiler (D¥-66625°Nohfelden)",
        "grave": "Friedhof°Grüsselbach",
        "age": 87
      }
    ],
    "15": [
      {
        "year": 1980,
        "birthdate": "2196-03-12",
        "name": "Richard°Hellmann°(Breslau), Pfr.i.R., GR, Garmisch¥-Partenkirchen",
        "birth": "12.°März°1896°in°Kunzendorf/Schlesienᵒ",
        "grave": "Friedhof°Partenkirchen",
        "age": 84
      }
    ],
    "16": [
      {
        "year": 1940,
        "birthdate": "2175-09-16",
        "name": "Adolf°Knoch, Assessor°am°Bischöfl.°Kommissariat°in°Heiligenstadt",
        "birth": "16.°September°1875°in°Küllstedt (D¥-37359)",
        "grave": "",
        "age": 64
      },
      {
        "year": 1945,
        "birthdate": "2173-02-18",
        "name": "Joseph°Raab, Frühmesser°i.R., Rheinbreitbach",
        "birth": "18.°Februar°1873°in°Limburg",
        "grave": "",
        "age": 72
      },
      {
        "year": 2010,
        "birthdate": "2224-12-15",
        "name": "Berthold°Richardt, Pfr.i.R., Msgr., Heiligenstadt",
        "birth": "15.°Dezember°1924°in°Großbartloff (D¥-37359)",
        "grave": "Friedhof°Worbis",
        "age": 85
      }
    ],
    "17": [
      {
        "year": 2007,
        "birthdate": "2258-09-25",
        "name": "Roland°Nink, Diakon, Flieden¥-Buchenrod",
        "birth": "25.°September°1958°in°Görgeshausen (D¥-56412)",
        "grave": "Friedhof°Buchenrod",
        "age": 48
      }
    ],
    "18": [
      {
        "year": 1965,
        "birthdate": "2207-11-25",
        "name": "P.°Eugen°Bergmann°SJ, Spiritual°in°Fulda",
        "birth": "25.°November°1907°in°Berlin",
        "grave": "",
        "age": 57
      },
      {
        "year": 1992,
        "birthdate": "2240-04-09",
        "name": "Dr.°Josef°Leinweber, Prof., Dr.°theol.°habil., Msgr., Domkapitular, Fulda",
        "birth": "9.°April°1940°in°Fulda",
        "grave": "Friedhof°am°Florenberg",
        "age": 52
      },
      {
        "year": 2001,
        "birthdate": "2232-05-13",
        "name": "P.°Hans°Brauner°SAC, GR, Vallendar",
        "birth": "13.°Mai°1932°in°Neurode/Schlesien (Nowa°Ruda,°PL¥-57¥-400)",
        "grave": "",
        "age": 69
      },
      {
        "year": 2001,
        "birthdate": "2235-06-19",
        "name": "Roman°Schymik, Pfarrer°in°Simmershausen",
        "birth": "19.°Juni°1935°in°Tarnowitz (Tarnowskie°Góry,°PL¥-42¥-6..)",
        "grave": "Friedhof°Simmershausen",
        "age": 66
      }
    ],
    "19": [
      {
        "year": 1962,
        "birthdate": "2226-06-30",
        "name": "Karl°Bohl, Kaplan°in°Eichenzell",
        "birth": "30.°Juni°1926°in°Lütter",
        "grave": "Friedhof°Lütter",
        "age": 36
      },
      {
        "year": 2008,
        "birthdate": "2253-02-21",
        "name": "Wolfgang°Laibold, Diakon, Fulda",
        "birth": "21.°Februar°1953°in°Fulda",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 55
      }
    ],
    "20": [
      {
        "year": 1947,
        "birthdate": "2188-02-29",
        "name": "Hermann°Horstkemper, Dechant, Pfarrer°in°Küllstedt",
        "birth": "29.°Februar°1888°in°Moese°bei°Mastholte (D¥-33397)",
        "grave": "",
        "age": 59
      },
      {
        "year": 1968,
        "birthdate": "2206-07-12",
        "name": "Hermann°Mott, Kpl.i.R., Rektor, Wachtküppel/Rhön",
        "birth": "12.°Juli°1906°in°Frankfurt°a.°M.",
        "grave": "",
        "age": 62
      },
      {
        "year": 1990,
        "birthdate": "2221-06-20",
        "name": "Alojzije°Hartli, Pfr., Kroatenseelsorger°in°Kassel",
        "birth": "20.°Juni°1921°in°Lisičine (HR¥-33522°Voćin)",
        "grave": "Friedhof°Mirogoj°in°Zagreb",
        "age": 69
      }
    ],
    "21": [
      {
        "year": 1954,
        "birthdate": "2173-05-31",
        "name": "Paul°Kaleve°(Breslau), Pfr.i.R., Kanonikus, Büttstedt",
        "birth": "31.°Mai°1873°in°Glogau (Głogów,°PL¥-67¥-2..)",
        "grave": "",
        "age": 81
      },
      {
        "year": 1957,
        "birthdate": "2175-12-22",
        "name": "Robert°Günther, Generalvikar, Apostol.°Protonotar, Domkapitular, Fulda",
        "birth": "22.°Dezember°1875°in°Geisa",
        "grave": "",
        "age": 81
      },
      {
        "year": 2010,
        "birthdate": "2226-05-05",
        "name": "Siegfried°Klaus, Pfr.i.R., GR, Meinhard",
        "birth": "5.°Mai°1926°in°Beberstedt/Eichsfeld (D¥-99976)",
        "grave": "Friedhof°Eschwege",
        "age": 84
      },
      {
        "year": 2019,
        "birthdate": "2236-09-23",
        "name": "Hans°Höfler, Pfr.i.R., Msgr., GR, Gelnhausen",
        "birth": "23.°September°1936°in°Altenmittlau",
        "grave": "Friedhof°Altenmittlau",
        "age": 82
      }
    ],
    "22": [
      {
        "year": 1962,
        "birthdate": "2195-07-18",
        "name": "Dr.°Hermann°Schmidt, Domkapitular°in°Fulda",
        "birth": "18.°Juli°1895°in°Minden/Westfalen (D¥-3242.)",
        "grave": "",
        "age": 67
      },
      {
        "year": 1988,
        "birthdate": "2244-01-11",
        "name": "Günter°Fahrig, Pfarrer°in°Hildburghausen",
        "birth": "11.°Januar°1944°in°Leinefelde (D¥-37327)",
        "grave": "",
        "age": 44
      }
    ],
    "23": [
      {
        "year": 1944,
        "birthdate": "2215-03-26",
        "name": "Konstantin°Görge, Neupriester, seit°23.°August°1944°vermisst°(Berg°Parnass°bei°Athen)",
        "birth": "26.°März°1915°in°Allendorf/Krs.°Marburg",
        "grave": "",
        "age": 29
      }
    ],
    "24": [
      {
        "year": 1927,
        "birthdate": "2174-03-12",
        "name": "Paul°Hartmann, Pfarrer°in°Neuses",
        "birth": "12.°März°1874°in°Fulda",
        "grave": "",
        "age": 53
      },
      {
        "year": 1945,
        "birthdate": "2188-07-14",
        "name": "Joseph°Lotz, Pfarrer°in°Effelder",
        "birth": "14.°Juli°1888°in°Anzefahr",
        "grave": "",
        "age": 57
      },
      {
        "year": 1987,
        "birthdate": "2203-05-19",
        "name": "Franz°Hornischer°(Olmütz), Pfr.i.R., Schauenburg¥-Elgershausen",
        "birth": "19.°Mai°1903°in°Kunzendorf (Kunčina,°CZ¥-569°24)",
        "grave": "Hauptfriedhof°Kassel",
        "age": 84
      },
      {
        "year": 2010,
        "birthdate": "2234-07-07",
        "name": "Hans°Henning, GR, Pfarrer°in°Juscimeira/Brasilien",
        "birth": "7.°Juli°1934°in°Bodenrode/Eichsfeld (D¥-37308)",
        "grave": "Friedhof°Juscimeira/Brasilien",
        "age": 76
      },
      {
        "year": 2016,
        "birthdate": "2226-09-06",
        "name": "Johannes°Hubrich, Pfr.i.R., Fulda",
        "birth": "6.°September°1926°in°Dambrau (Dąbrowa,°PL¥-49¥-120)",
        "grave": "Friedhof°am°Florenberg",
        "age": 89
      }
    ],
    "25": [
      {
        "year": 1944,
        "birthdate": "2169-09-28",
        "name": "Damian°Dangel, Pfarrer°in°Sombom",
        "birth": "28.°September°1869°in°Hünhan",
        "grave": "",
        "age": 74
      },
      {
        "year": 1968,
        "birthdate": "2180-12-19",
        "name": "Dr.°Johannes°Schäfer, Prof.°em., StR°i.R., Fulda",
        "birth": "19.°Dezember°1880°in°Eiterfeld",
        "grave": "",
        "age": 87
      },
      {
        "year": 1983,
        "birthdate": "2209-07-15",
        "name": "Theodor°Kremer°(Danzig), Pfr.i.R., GR, Kassel",
        "birth": "15.°Juli°1909°in°Danzig¥-Langfuhr (Wrzeszcz,°PL¥-80¥-...°Gdańsk)",
        "grave": "Kassel",
        "age": 74
      }
    ],
    "26": [
      {
        "year": 1943,
        "birthdate": "2212-11-07",
        "name": "Walter°Otterbein, San.¥-Uffz., Diözesanpriester",
        "birth": "7.°November°1912°in°Bad°Salzschlirf",
        "grave": "Friedhof°Bad°Salzschlirf",
        "age": 30
      },
      {
        "year": 1962,
        "birthdate": "2177-07-30",
        "name": "Adolf°Sander, Pfr.i.R., Wetter/Ruhr",
        "birth": "30.°Juli°1877°in°Küllstedt (D¥-37359)",
        "grave": "",
        "age": 85
      },
      {
        "year": 1963,
        "birthdate": "2189-09-14",
        "name": "Philipp°Heim, Pfr.i.R., Bad°Orb",
        "birth": "14.°September°1889°in°Bad°Orb",
        "grave": "",
        "age": 73
      }
    ],
    "27": [
      {
        "year": 1948,
        "birthdate": "2183-03-02",
        "name": "Leo°Franzkowski°(Breslau), Erzpriester, Pfr.i.R., Bodenrode",
        "birth": "2.°März°1883°in°Groß°Wartenberg (Syców,°PL¥-56¥-500)",
        "grave": "",
        "age": 65
      },
      {
        "year": 1953,
        "birthdate": "2184-10-19",
        "name": "Wendelin°Brähler, Pfarrer°in°Petersberg",
        "birth": "19.°Oktober°1884°in°Unterbimbach",
        "grave": "",
        "age": 68
      },
      {
        "year": 1970,
        "birthdate": "2206-04-13",
        "name": "Leonhard°Hruschka°(Breslau), Pfarrer°in°Naumburg¥-Land",
        "birth": "13.°April°1906°in°Groß°Wartenberg (Syców,°PL¥-56¥-500)",
        "grave": "Friedhof°Naumburg",
        "age": 64
      },
      {
        "year": 1984,
        "birthdate": "2219-06-07",
        "name": "Günter°Zucker, Pfr.i.R., OStR°i.K.i.R., Petersberg",
        "birth": "7.°Juni°1919°in°Kassel",
        "grave": "Friedhof°Petersberg",
        "age": 65
      },
      {
        "year": 2010,
        "birthdate": "2254-11-26",
        "name": "Bernhard°Niemiec°(Katowice/Fulda), Pfarrer°in°Niederkalbach",
        "birth": "26.°November°1954°in°Zabrze (PL¥-41¥-8..)",
        "grave": "Friedhof°Ornontowice/Polen",
        "age": 55
      }
    ],
    "28": [
      {
        "year": 1930,
        "birthdate": "2203-04-12",
        "name": "Adalbert°Huhn, Kooperator°in°Kassel/Gelnhausen",
        "birth": "12.°April°1903°in°Brand",
        "grave": "",
        "age": 27
      },
      {
        "year": 1983,
        "birthdate": "2198-07-15",
        "name": "Dr.°Martin°Hannappel, Pfr.i.R., Stausebach",
        "birth": "15.°Juli°1898°in°Himmelsberg",
        "grave": "Friedhof°Mardorf",
        "age": 85
      },
      {
        "year": 1985,
        "birthdate": "2211-05-27",
        "name": "P.°Hermes°Wilhelm°Berthold°OFMCap, Pfarradmin.°in°Bebra",
        "birth": "27.°Mai°1911°in°Fahrnau/Krs.°Lörrach (D¥-79650°Schopfheim)",
        "grave": "Friedhof°Bebra",
        "age": 74
      },
      {
        "year": 2013,
        "birthdate": "2240-08-06",
        "name": "Hartmut°Wegner, Pfr.i.R., GR, Alzenau",
        "birth": "6.°August°1940°in°Frankfurt°a.°M.",
        "grave": "Friedhof°Niederrodenbach",
        "age": 73
      }
    ],
    "29": [
      {
        "year": 1930,
        "birthdate": "2141-04-14",
        "name": "Ignatius°Schnaus, Pfr.i.R., Batten",
        "birth": "14.°April°1841°in°Kerbersdorf",
        "grave": "",
        "age": 89
      },
      {
        "year": 1960,
        "birthdate": "2170-01-06",
        "name": "Josef°Freidhof, Pfr.i.R., Rückers",
        "birth": "6.°Januar°1870°in°Sindersfeld",
        "grave": "",
        "age": 90
      },
      {
        "year": 2018,
        "birthdate": "2231-11-08",
        "name": "Karl¥-Heinz°Bickert, Pfr.i.R., OStR°i.K.i.R., GR, Fulda",
        "birth": "8.°November°1931°in°Fulda",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 86
      }
    ],
    "30": [
      {
        "year": 1966,
        "birthdate": "2187-08-13",
        "name": "Franz°Gaschler°(Olmütz), Pfr.i.R., Fritzlar",
        "birth": "13.°August°1887°in°Arbora/Bukowina (Arbore,°RO¥-727015)",
        "grave": "Alter°Friedhof°Fritzlar",
        "age": 79
      }
    ],
    "31": [
      {
        "year": 1969,
        "birthdate": "2211-12-02",
        "name": "P.°Athanasius°Schwermann°OFMCap, Pfarrer°in°Bad°Hersfeld, St.°Bonifatius",
        "birth": "2.°Dezember°1911°in°Essen¥-Dellwig",
        "grave": "",
        "age": 57
      },
      {
        "year": 1981,
        "birthdate": "2202-04-30",
        "name": "Rudolf°Hammer, Pfr.i.R., GR, Flieden",
        "birth": "30.°April°1902°in°Fulda",
        "grave": "Fulda",
        "age": 79
      },
      {
        "year": 1989,
        "birthdate": "2213-10-14",
        "name": "Paul°Burschel, Generalvikar°i.R., Apostol.°Protonotar, Domkapitular°i.R., Fulda",
        "birth": "14.°Oktober°1913°in°Metz (F¥-57000)",
        "grave": "",
        "age": 75
      }
    ]
  },
  "9": {
    "1": [
      {
        "year": 1937,
        "birthdate": "2174-07-29",
        "name": "Wigbert°Sondergeld, Rektor°i.R., Hünfeld",
        "birth": "29.°Juli°1874°in°Treischfeld",
        "grave": "",
        "age": 63
      },
      {
        "year": 1949,
        "birthdate": "2165-03-13",
        "name": "Johannes°Delmhorst, Pfr.i.R., Prälat, Borsum",
        "birth": "13.°März°1865°in°Borsum (D¥-31177)",
        "grave": "",
        "age": 84
      },
      {
        "year": 1949,
        "birthdate": "2178-08-23",
        "name": "Heinrich°Melcher°(Köln), Pfr.i.R., Bad°Sachsa",
        "birth": "23.°August°1878°in°Schnellweide/Köln (D¥-51067°Köln¥-Holweide)",
        "grave": "",
        "age": 71
      },
      {
        "year": 1964,
        "birthdate": "2199-07-08",
        "name": "P.°Heinrich°Balnus°SDB, Kaplan°in°Kassel, St.°Kunigundis",
        "birth": "8.°Juli°1899°in°Essen¥-Altenessen",
        "grave": "",
        "age": 65
      },
      {
        "year": 1979,
        "birthdate": "2204-10-11",
        "name": "Paul°Hartmann, Pfr.i.R., Msgr., GR, Dipperz",
        "birth": "11.°Oktober°1904°in°Eiterfeld",
        "grave": "Friedhof°Dipperz",
        "age": 74
      },
      {
        "year": 1982,
        "birthdate": "2211-11-28",
        "name": "Paul°Tietz°(Ermland), GR, Pfarrer°in°Steinau°a.°d.°Straße",
        "birth": "28.°November°1911°in°Frauenburg/Ostpreußen (Frombork,°PL¥-14¥-530)",
        "grave": "Friedhof°Steinau°a.°d.°Straße",
        "age": 70
      },
      {
        "year": 1998,
        "birthdate": "2209-12-10",
        "name": "Dr.°Franz°Scholz°(Breslau), Prof.°em., Dr.°theol.°habil., Prälat, Ehrendomkapitular, Dieburg",
        "birth": "10.°Dezember°1909°in°Breslau (Wrocław,°PL¥-50¥-...)",
        "grave": "Friedhof°Dieburg",
        "age": 88
      }
    ],
    "2": [
      {
        "year": 1940,
        "birthdate": "2205-01-21",
        "name": "Joseph°Lier, Hausgeistlicher°im°Lucius¥-Hebel¥-Stift°in°Erfurt",
        "birth": "21.°Januar°1905°in°Worbis (D¥-37339)",
        "grave": "",
        "age": 35
      },
      {
        "year": 1996,
        "birthdate": "2213-11-01",
        "name": "Carl°Josef°Schneider, Pfr.i.R., Msgr., GR, Ehrendechant, Fulda",
        "birth": "1.°November°1913°in°Fulda",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 82
      }
    ],
    "3": [
      {
        "year": 1969,
        "birthdate": "2188-10-08",
        "name": "Martin°Drissel, Pfr.i.R., Fritzlar",
        "birth": "8.°Oktober°1888°in°Fritzlar",
        "grave": "",
        "age": 80
      },
      {
        "year": 1986,
        "birthdate": "2200-11-30",
        "name": "Franz°von°Hirsch°(Breslau/Görlitz), Pfr.i.R., Zella/Eichsfeld",
        "birth": "30.°November°1900°in°Cottbus",
        "grave": "Friedhof°Zella",
        "age": 85
      }
    ],
    "4": [
      {
        "year": 1983,
        "birthdate": "2209-01-16",
        "name": "Karl°Goldbach, Pfr.i.R., GR, Lenterode/Eichsfeld",
        "birth": "16.°Januar°1909°in°Holenbrunn (D¥-95632°Wunsiedel)",
        "grave": "Friedhof°Martinfeld/Eichsfeld",
        "age": 74
      },
      {
        "year": 2009,
        "birthdate": "2212-12-08",
        "name": "Franz°Schröder, Pfr.i.R., OStR°i.K.i.R., Fulda",
        "birth": "8.°Dezember°1912°in°Meggen/Krs.°Olpe (D¥-57368°Lennestadt)",
        "grave": "Friedhof°Petersberg¥-Steinau",
        "age": 96
      }
    ],
    "5": [
      {
        "year": 1922,
        "birthdate": "2140-01-31",
        "name": "Johann°Bapt.°Blume, Pfr.i.R., Steinbach",
        "birth": "31.°Januar°1840°in°Hildesheim",
        "grave": "",
        "age": 82
      },
      {
        "year": 1949,
        "birthdate": "2190-03-26",
        "name": "Hieronymus°Schwethelm, Dechant, Pfarrer°in°Beuren/Eichsfeld",
        "birth": "26.°März°1890°in°Hundeshagen (D¥-37327°Leinefelde¥-Worbis)",
        "grave": "",
        "age": 59
      },
      {
        "year": 1999,
        "birthdate": "2216-01-03",
        "name": "Josef°Schöler°(Leitmeritz/Fulda), Pfr.i.R., GR, Bad°Hersfeld",
        "birth": "3.°Januar°1916°in°Kratzau (Chrastava,°CZ¥-463°31)",
        "grave": "Hauptfriedhof°Frauenberg,°Bad°Hersfeld",
        "age": 83
      }
    ],
    "6": [
      {
        "year": 1977,
        "birthdate": "2205-07-10",
        "name": "P.°Hans°von°Schönfeld°SJ, Frankfurt°a.°M.",
        "birth": "10.°Juli°1905°in°Hechingen (D¥-72379)",
        "grave": "",
        "age": 72
      },
      {
        "year": 1986,
        "birthdate": "2212-08-27",
        "name": "Otto°Henkel, Pfarrer°in°Heiligenstadt",
        "birth": "27.°August°1912°in°Niederorschel/Eichsfeld (D¥-37355)",
        "grave": "Friedhof°Heiligenstadt",
        "age": 74
      }
    ],
    "7": [
      {
        "year": 1960,
        "birthdate": "2172-08-30",
        "name": "Julius°Braun, Pfr.i.R., Fulda",
        "birth": "30.°August°1872°in°Wallhausen (D¥-55595°Rüdesheim)",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 88
      },
      {
        "year": 1983,
        "birthdate": "2214-11-19",
        "name": "Paul°Pöss°(Neusohl/Banská Bystrica), Pfr.i.R., GR, Gelnhausen",
        "birth": "19.°November°1914°in°Handlova (Handlová,°SK¥-972°51)",
        "grave": "Friedhof°Gelnhausen",
        "age": 68
      },
      {
        "year": 2002,
        "birthdate": "2212-12-10",
        "name": "Johannes°Nikel°(Breslau/Fulda), Pfr.i.R., GR, Flieden¥-Rückers",
        "birth": "10.°Dezember°1912°in°Kostellitz (Kościeliska,°PL¥-46¥-331)",
        "grave": "Friedhof°Rückers",
        "age": 89
      }
    ],
    "9": [
      {
        "year": 1958,
        "birthdate": "2179-01-12",
        "name": "Meinolf°Jünemann, Pfr.i.R., Heiligenstadt",
        "birth": "12.°Januar°1879°in°Leinefelde (D¥-37327)",
        "grave": "",
        "age": 79
      },
      {
        "year": 1964,
        "birthdate": "2183-11-16",
        "name": "Heinrich°Roßbach, Pfarrer°in°Kassel, St.°Maria",
        "birth": "16.°November°1883°in°Köln",
        "grave": "",
        "age": 80
      },
      {
        "year": 1964,
        "birthdate": "2208-02-13",
        "name": "Joseph°Schramm, Pfarrer°in°Witzenhausen",
        "birth": "13.°Februar°1908°in°Lütter",
        "grave": "",
        "age": 56
      }
    ],
    "10": [
      {
        "year": 1939,
        "birthdate": "2164-08-31",
        "name": "Albin°Kind, Pfr.i.R., Rottenmünster",
        "birth": "31.°August°1864°in°Bermbach",
        "grave": "",
        "age": 75
      },
      {
        "year": 1961,
        "birthdate": "2180-08-24",
        "name": "Josef°Larbig, Pfr.i.R., Bad°Soden¥-Salmünster",
        "birth": "24.°August°1880°in°Fulda",
        "grave": "",
        "age": 81
      },
      {
        "year": 1979,
        "birthdate": "2214-07-14",
        "name": "Wilhelm°Joerg, Pfr.i.R., Breitenbach°a.°Herzberg",
        "birth": "14.°Juli°1914°in°Mühlhausen/Elsaß (F¥-68100)",
        "grave": "Friedhof°Niederaula",
        "age": 65
      }
    ],
    "11": [
      {
        "year": 1944,
        "birthdate": "2190-01-07",
        "name": "Karl°Hofmann, Konviktsdirektor°in°Fulda, Opfer°eines°Luftangriffes",
        "birth": "7.°Januar°1890°in°Großentaft",
        "grave": "",
        "age": 54
      },
      {
        "year": 2020,
        "birthdate": "2252-11-24",
        "name": "Józef°Cieśla, Pfr.i.R., Nowy°Sącz/Polen",
        "birth": "24.°November°1952°in°Muszyna (PL¥-33¥-370)",
        "grave": "Friedhof°Muszyna¥-Powroźnik",
        "age": 67
      },
      {
        "year": 2023,
        "birthdate": "2238-03-08",
        "name": "Wilhelm°Gerlach, Pfr.i.R., GR, Kirchhain",
        "birth": "8.°März°1938°in°Erfurtshausen",
        "grave": "Friedhof°Amöneburg¥-Erfurtshausen",
        "age": 85
      }
    ],
    "12": [
      {
        "year": 1953,
        "birthdate": "2176-03-10",
        "name": "Aloys°Gernoth°(Breslau), Pfr.i.R., Bad°Salzschlirf",
        "birth": "10.°März°1876°in°Frauenwaldau/Krs.°Trebnitz (Bukowice,°56¥-320°Krośnice)",
        "grave": "",
        "age": 77
      },
      {
        "year": 1960,
        "birthdate": "2208-02-19",
        "name": "Franz°Christoph°Gesang, Pfarrer°in°Schröck",
        "birth": "19.°Februar°1908°in°Dingelstädt",
        "grave": "",
        "age": 52
      },
      {
        "year": 1975,
        "birthdate": "2202-01-05",
        "name": "Hermann°Rübsam, Pfr.i.R., GR, Kirchhasel",
        "birth": "5.°Januar°1902°in°Kirchhasel",
        "grave": "Friedhof°Kirchhasel",
        "age": 73
      }
    ],
    "13": [
      {
        "year": 1978,
        "birthdate": "2202-02-02",
        "name": "Dr.°Maximilian°Wenzel°(Leitmeritz), Apostol.°Protonotar, Offizial°in°Erfurt",
        "birth": "2.°Februar°1902°in°Kosten (Košťany,°CZ¥-417°23)",
        "grave": "Erfurt",
        "age": 76
      }
    ],
    "14": [
      {
        "year": 1960,
        "birthdate": "2175-10-13",
        "name": "Ludwig°Kafurke°(Breslau), Pfr.i.R., Breitenworbis",
        "birth": "13.°Oktober°1875°in°Jauer (Jawor,°PL¥-59¥-400)",
        "grave": "",
        "age": 84
      }
    ],
    "15": [
      {
        "year": 1933,
        "birthdate": "2169-04-10",
        "name": "Joseph°Vogt, Dechant, Pfarrer°in°Niederorschel",
        "birth": "10.°April°1869°in°Dingelstädt",
        "grave": "",
        "age": 64
      },
      {
        "year": 1947,
        "birthdate": "2173-09-24",
        "name": "Heinrich°Fick, Pfarrer°in°Geisleden",
        "birth": "24.°September°1873°in°Wendehausen (D¥-99988°Südeichsfeld)",
        "grave": "",
        "age": 73
      },
      {
        "year": 1963,
        "birthdate": "2186-02-11",
        "name": "Franz°Arand, Pfr.i.R., Teistungen/Krs.°Worbis",
        "birth": "11.°Februar°1886°in°Uder/Eichsfeld (D¥-37318)",
        "grave": "",
        "age": 77
      },
      {
        "year": 1988,
        "birthdate": "2212-01-20",
        "name": "P.°Rainer°Klose°OFM, Franziskaner°auf°dem°Kerbschen°Berg, Dingelstädt",
        "birth": "20.°Januar°1912°in°Schönowitz (PL¥-48¥-210°Biała)",
        "grave": "",
        "age": 76
      },
      {
        "year": 2019,
        "birthdate": "2230-08-06",
        "name": "Oskar°Seufert, Pfr.i.R., GR, Eichenzell¥-Rothemann",
        "birth": "6.°August°1930°in°Weyhers",
        "grave": "Friedhof°Rothemann",
        "age": 89
      }
    ],
    "16": [
      {
        "year": 1931,
        "birthdate": "2163-08-15",
        "name": "Hermann°Lins, Pfr.i.R., Rinteln",
        "birth": "15.°August°1863°in°Kefferhausen (D¥-37351°Dingelstädt)",
        "grave": "",
        "age": 68
      },
      {
        "year": 2018,
        "birthdate": "2265-02-12",
        "name": "Winfried°Böhm, Diakon, Eichenzell",
        "birth": "12.°Februar°1965°in°Fulda",
        "grave": "Friedhof°Thalau",
        "age": 53
      }
    ],
    "17": [
      {
        "year": 1946,
        "birthdate": "2188-02-10",
        "name": "Franz°Joseph°Beier, Pfarrer°in°Borsch",
        "birth": "10.°Februar°1888°in°Meindroth°bei°Hofaschenbach",
        "grave": "",
        "age": 58
      },
      {
        "year": 1954,
        "birthdate": "2215-07-16",
        "name": "Johannes°Wiwiora, Pfarrer°in°Hauswurz",
        "birth": "16.°Juli°1915°in°Gladbeck (D¥-4596.)",
        "grave": "",
        "age": 39
      },
      {
        "year": 2011,
        "birthdate": "2233-03-23",
        "name": "Dr.°Lothar°Ruppert, Prof., Prälat, Fulda",
        "birth": "23.°März°1933°in°Neuenberg",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 78
      }
    ],
    "18": [
      {
        "year": 1924,
        "birthdate": "2143-06-03",
        "name": "Karl°Edmund°Pazifikus°Schulz, Pfr.i.R., Soden",
        "birth": "3.°Juni°1843°in°Salmünster",
        "grave": "",
        "age": 81
      },
      {
        "year": 1942,
        "birthdate": "2163-02-25",
        "name": "Johannes°Bierschenk, Pfr.i.R., Heiligenstadt",
        "birth": "25.°Februar°1863°in°Heiligenstadt",
        "grave": "",
        "age": 79
      },
      {
        "year": 1947,
        "birthdate": "2165-09-27",
        "name": "Franz°Iseke, Dechant, Pfarrer°in°Kella",
        "birth": "27.°September°1865°in°Holungen/Eichsfeld (D¥-37345°Sonnenstein)",
        "grave": "",
        "age": 81
      }
    ],
    "19": [
      {
        "year": 1954,
        "birthdate": "2174-07-15",
        "name": "Georg°Adam°Rhiel, Pfarrer°in°Uttrichshausen",
        "birth": "15.°Juli°1874°in°Mardorf",
        "grave": "",
        "age": 80
      },
      {
        "year": 1961,
        "birthdate": "2193-02-05",
        "name": "Johannes°Gulitz°(Breslau), Pfarrer°in°Neudietendorf",
        "birth": "5.°Februar°1893°in°Liegnitz (Legnica,°PL¥-59¥-220)",
        "grave": "",
        "age": 68
      },
      {
        "year": 1997,
        "birthdate": "2215-03-09",
        "name": "Josef°Fischer°(Olmütz), Pfr.i.R., Fritzlar",
        "birth": "9.°März°1915°in°Kunzendorf (Kunčina,°CZ¥-569°24)",
        "grave": "Friedhof°Gudensberg",
        "age": 82
      },
      {
        "year": 2018,
        "birthdate": "2236-05-01",
        "name": "P.°Dario°Zanoner°OFM, Arco°(Trentino)",
        "birth": "1.°Mai°1936°in°Moena/Trient (I¥-38035)",
        "grave": "",
        "age": 82
      }
    ],
    "21": [
      {
        "year": 1981,
        "birthdate": "2200-09-01",
        "name": "Joseph°Egert, Pfr.i.R., GR, Duderstadt",
        "birth": "1.°September°1900°in°Jützenbach (D¥-37345°Sonnenstein)",
        "grave": "Friedhof°Brochthausen°(D¥-37115°Duderstadt)",
        "age": 81
      },
      {
        "year": 2005,
        "birthdate": "2237-04-25",
        "name": "P.°Josef°Pastwa°SDB, Berlin",
        "birth": "25.°April°1937°in°Großhelm (Chełm°Śląski,°PL¥-41¥-403)",
        "grave": "",
        "age": 68
      },
      {
        "year": 2011,
        "birthdate": "2232-08-28",
        "name": "Johannes°Krömer, Pfr.i.R., GR, Kassel",
        "birth": "28.°August°1932°in°Oppeln (Opole,°PL¥-45¥-...)",
        "grave": "Hauptfriedhof°Kassel",
        "age": 79
      }
    ],
    "22": [
      {
        "year": 1931,
        "birthdate": "2183-09-01",
        "name": "Rudolf°Thiergart, Pfarrer°in°Eichenzell",
        "birth": "1.°September°1883°in°Geisa",
        "grave": "",
        "age": 48
      },
      {
        "year": 1961,
        "birthdate": "2209-01-15",
        "name": "Leo°Koltermann°(Schneidemühl), Pfarrer°in°Struth/Eichsfeld",
        "birth": "15.°Januar°1909°in°Deutsch¥-Krone (Wałcz,°PL¥-78¥-600)",
        "grave": "",
        "age": 52
      },
      {
        "year": 2010,
        "birthdate": "2228-01-16",
        "name": "P.°Oskar°Klingebiel°OCarm, Pfr.i.R., Flieden",
        "birth": "16.°Januar°1928°in°Rex",
        "grave": "Klosterkirche°Straubing",
        "age": 82
      },
      {
        "year": 2018,
        "birthdate": "2229-05-14",
        "name": "¥fJohannes°Kapp¥0f, Weihbischof°em., Hofgeismar",
        "birth": "14.°Mai°1929°in°Burguffeln",
        "grave": "Friedhof°Gesundbrunnen°Hofgeismar",
        "age": 89
      }
    ],
    "23": [
      {
        "year": 1955,
        "birthdate": "2185-12-16",
        "name": "Joseph°Ehrlich°(Breslau), Religions-Prof.°i.R., Ershausen",
        "birth": "16.°Dezember°1885°in°Weidenau (Vidnava,°CZ¥-790°55)",
        "grave": "",
        "age": 69
      },
      {
        "year": 1981,
        "birthdate": "2197-08-04",
        "name": "Paul°Weyer, Pfr.i.R., GR, Cölbe",
        "birth": "4.°August°1897°in°Marburg",
        "grave": "Marburg",
        "age": 84
      },
      {
        "year": 1983,
        "birthdate": "2210-07-01",
        "name": "Adolf°Schuchert, Pfr.i.R., Prälat, Fulda",
        "birth": "1.°Juli°1910°in°Kranlucken",
        "grave": "Fulda",
        "age": 73
      },
      {
        "year": 1988,
        "birthdate": "2233-02-10",
        "name": "P.°Ludwig°Böhm°OFM, Pfarrer°in°Bad°Soden¥-Salmünster¥-Alsberg",
        "birth": "10.°Februar°1933°in°Rönshausen",
        "grave": "Friedhof°Salmünster",
        "age": 55
      }
    ],
    "24": [
      {
        "year": 1979,
        "birthdate": "2213-06-03",
        "name": "Franz°Hock, Pfarrer°in°Schrecksbach",
        "birth": "3.°Juni°1913°in°Pflaumheim (D¥-63762°Großostheim)",
        "grave": "Friedhof°Pflaumheim",
        "age": 66
      },
      {
        "year": 1986,
        "birthdate": "2231-05-02",
        "name": "Dr.°Joseph°Reindl°(Meißen), Prof., Erfurt",
        "birth": "2.°Mai°1931°in°Dresden",
        "grave": "Friedhof°Erfurt",
        "age": 55
      },
      {
        "year": 2007,
        "birthdate": "2227-08-26",
        "name": "Gerhard°Kostka°(Oppeln/Fulda), Pfr.i.R., Mannheim",
        "birth": "26.°August°1927°in°Wellendorf/Krs.°Ratibor (Turze,°PL¥-47¥-420)",
        "grave": "Friedhof°Turze",
        "age": 80
      },
      {
        "year": 2007,
        "birthdate": "2232-04-30",
        "name": "Wolfgang°Halama, OStR°i.K.i.R., Msgr., Trier",
        "birth": "30.°April°1932°in°Brünn (Brno,°CZ¥-602°00)",
        "grave": "Friedhof°Gründau¥-Rothenbergen",
        "age": 75
      },
      {
        "year": 2010,
        "birthdate": "2220-05-18",
        "name": "Wolfgang°Müller, Pfr.i.R., Hünfeld",
        "birth": "18.°Mai°1920°in°Warnemünde (D¥-18119°Rostock)",
        "grave": "Alter°Friedhof°Hünfeld",
        "age": 90
      },
      {
        "year": 2015,
        "birthdate": "2215-09-10",
        "name": "P.°Erwin°Schmelz°OFM, Fulda",
        "birth": "10.°September°1915°in°Dietershan",
        "grave": "Klosterfriedhof°Frauenberg,°Fulda",
        "age": 100
      },
      {
        "year": 2018,
        "birthdate": "2229-10-20",
        "name": "Augustinus°Baumgarten, Pfr.i.R., Niederkassel",
        "birth": "20.°Oktober°1929°in°Lutter/Eichsfeld (D¥-37318)",
        "grave": "San°Francisco/USA",
        "age": 88
      }
    ],
    "26": [
      {
        "year": 1926,
        "birthdate": "2161-08-20",
        "name": "Johannes°Joseph°Medler, Dechant, Pfarrer°in°Geisa",
        "birth": "20.°August°1861°in°Rodges",
        "grave": "",
        "age": 65
      },
      {
        "year": 1937,
        "birthdate": "2171-12-04",
        "name": "Johannes°Golbach, Pfarrer°in°Simmershausen",
        "birth": "4.°Dezember°1871°in°Eschwege",
        "grave": "",
        "age": 65
      },
      {
        "year": 1953,
        "birthdate": "2185-10-15",
        "name": "Burkard°Zentgraf, Kpl.i.R., Eisenach",
        "birth": "15.°Oktober°1885°in°Lahrbach",
        "grave": "",
        "age": 67
      },
      {
        "year": 1975,
        "birthdate": "2190-08-02",
        "name": "Josef°Scherer, Pfr.i.R., GR, Fulda",
        "birth": "2.°August°1890°in°Fulda",
        "grave": "Friedhof°Reulbach",
        "age": 85
      },
      {
        "year": 1976,
        "birthdate": "2214-01-04",
        "name": "P.°Badulf°Horsten°OFMCap, Pfarrer°in°Reichensachsen",
        "birth": "4.°Januar°1914°in°Hüls (D¥-47839°Krefeld)",
        "grave": "Krefeld",
        "age": 62
      },
      {
        "year": 1993,
        "birthdate": "2228-08-19",
        "name": "Peter°Hostombe, Caritasdirektor°in°Erfurt",
        "birth": "19.°August°1928°in°Würzburg",
        "grave": "",
        "age": 65
      }
    ],
    "27": [
      {
        "year": 1958,
        "birthdate": "2203-10-05",
        "name": "Karl°Rotter°(Olmütz), Pfr.i.R., Borken",
        "birth": "5.°Oktober°1903°in°Mährisch°Lotschnau (Lačnov,°CZ¥-568°02°Svitavy)",
        "grave": "",
        "age": 54
      }
    ],
    "28": [
      {
        "year": 1976,
        "birthdate": "2207-04-05",
        "name": "P.°Hermann°Home°SAC, Pfr.i.R., Limburg",
        "birth": "5.°April°1907°in°Alsleben/Saale (D¥-06425)",
        "grave": "Limburg",
        "age": 69
      },
      {
        "year": 1978,
        "birthdate": "2212-10-17",
        "name": "¥fSel. Papst°Johannes°Paul°I.¥0f, Bischof von Rom",
        "birth": "17.°Oktober°1912°in°Forno°di°Canale (I¥-32020°Canale°d’Agordo)",
        "grave": "Basilika°St.°Peter°in°Rom",
        "age": 65
      },
      {
        "year": 1992,
        "birthdate": "2220-06-23",
        "name": "P.°Dr.°Horestes°Pfeiler°SM",
        "birth": "23.°Juni°1920°in°Breslau (Wrocław,°PL¥-50¥-...)",
        "grave": "",
        "age": 72
      },
      {
        "year": 2011,
        "birthdate": "2229-06-21",
        "name": "P.°Ernst°Rochner°OFMCap, GR, Werne",
        "birth": "21.°Juni°1929°in°Lichtenau (Zaręba,°PL¥-59¥-800°Siekierczyn)",
        "grave": "Friedhof°des°Kapuzinerklosters°Münster",
        "age": 82
      }
    ],
    "29": [
      {
        "year": 1920,
        "birthdate": "2151-03-04",
        "name": "Florentin°Jüngst, Pfarrer°in°Geismar",
        "birth": "4.°März°1851°in°Anzefahr",
        "grave": "",
        "age": 69
      },
      {
        "year": 1945,
        "birthdate": "2182-07-04",
        "name": "Franz°Kleeschulte, Kanzleidirektor°in°Fulda",
        "birth": "4.°Juli°1882°in°Messinghausen (D¥-59929°Brilon)",
        "grave": "",
        "age": 63
      },
      {
        "year": 1949,
        "birthdate": "2187-08-24",
        "name": "DDr.°Emil°Weber, Prof., Dr.°theol.°et°rer.pol., Domkapitular, Fulda",
        "birth": "24.°August°1887°in°Thaiden",
        "grave": "",
        "age": 62
      },
      {
        "year": 1962,
        "birthdate": "2191-06-23",
        "name": "Johann°Waclawec°(Königgrätz), Pfr.i.R., Gemünden/Wohra",
        "birth": "23.°Juni°1891°in°Arnau (Hostinné,°CZ¥-543°71)",
        "grave": "",
        "age": 71
      }
    ],
    "30": [
      {
        "year": 1955,
        "birthdate": "2180-10-20",
        "name": "Karl°Lippert, Pfarrer°in°Großkrotzenburg",
        "birth": "20.°Oktober°1880°in°Asch/Krs.°Eger (Aš,°CZ¥-352°01)",
        "grave": "",
        "age": 74
      },
      {
        "year": 1971,
        "birthdate": "2208-10-22",
        "name": "Werner°Lerch, Pfr.i.R., GR, Deuna",
        "birth": "22.°Oktober°1908°in°Wachstedt (D¥-37359)",
        "grave": "Friedhof°Deuna",
        "age": 62
      },
      {
        "year": 1984,
        "birthdate": "2211-11-05",
        "name": "Dr.°Hans°Kluge°(Breslau), Dr.°phil., OStR°i.R., Hanau",
        "birth": "5.°November°1911°in°Gleiwitz (Gliwice,°PL¥-44¥-1..)",
        "grave": "Hanau",
        "age": 72
      },
      {
        "year": 1987,
        "birthdate": "2194-02-02",
        "name": "Franz°Steffen°(Paderborn), Pfr.i.R., Neustadt",
        "birth": "2.°Februar°1894°in°Minden/Westfalen (D¥-3242.)",
        "grave": "Friedhof°Deifeld°(D¥-59964°Medebach)",
        "age": 93
      },
      {
        "year": 2001,
        "birthdate": "2231-06-28",
        "name": "Karl°Ditsche°(Meißen), Pfr.i.R., Fulda",
        "birth": "28.°Juni°1931°in°Grottkau (Grodków,°PL¥-49¥-200)",
        "grave": "Friedhof°Arzell",
        "age": 70
      }
    ]
  },
  "10": {
    "1": [
      {
        "year": 1968,
        "birthdate": "2190-11-03",
        "name": "DDr.°Josef°Huhn, Prof.°em., Dr.°theol.°et°phil., Fulda",
        "birth": "3.°November°1890°in°Kerzell",
        "grave": "",
        "age": 77
      },
      {
        "year": 1984,
        "birthdate": "2202-09-30",
        "name": "Rudolf°Lenz, Pfr.i.R., Fulda",
        "birth": "30.°September°1902°in°Großauheim",
        "grave": "Friedhof°Altenmittlau",
        "age": 82
      },
      {
        "year": 2011,
        "birthdate": "2213-06-07",
        "name": "DDr.°Gerhard°Matern°(Ermland/Fulda), Prof.°em., Dr.°phil., Dr.°theol.°habil., Msgr., Fulda",
        "birth": "7.°Juni°1913°in°Lisettenhof (Elżbiecin,°PL¥-14¥-500°Braniewo)",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 98
      }
    ],
    "2": [
      {
        "year": 1931,
        "birthdate": "2172-10-07",
        "name": "Paul°Berger, Pfarrer°in°Schachtebich",
        "birth": "7.°Oktober°1872°in°Wingerode (D¥-37327)",
        "grave": "",
        "age": 58
      },
      {
        "year": 1951,
        "birthdate": "2174-11-08",
        "name": "Damian°Herbert, Pfr.i.R., Fulda",
        "birth": "8.°November°1874°in°Zirkenbach",
        "grave": "",
        "age": 76
      },
      {
        "year": 2000,
        "birthdate": "2229-05-25",
        "name": "Dr.°Balthasar°Gareis°(Bamberg), Prof., Prälat, GR, Fulda",
        "birth": "25.°Mai°1929°in°Birnbaum (D¥-96349°Steinwiesen)",
        "grave": "Friedhof°Birnbaum",
        "age": 71
      }
    ],
    "3": [
      {
        "year": 1958,
        "birthdate": "2183-08-02",
        "name": "August°Gremler, Pfr.i.R., Schachtebich",
        "birth": "2.°August°1883°in°Breitenbach/Eichsfeld (D¥-37327°Leinefelde¥-Worbis)",
        "grave": "",
        "age": 75
      },
      {
        "year": 1961,
        "birthdate": "2212-02-02",
        "name": "Johannes°Böhm, Pfarrkurat°in°Cornberg",
        "birth": "2.°Februar°1912°in°Worms",
        "grave": "",
        "age": 49
      },
      {
        "year": 1993,
        "birthdate": "2215-11-17",
        "name": "Karl°Bott, Pfr.i.R., GR, Bad°Salzschlirf",
        "birth": "17.°November°1915°in°Fulda",
        "grave": "Alter°Friedhof°Großenlüder",
        "age": 77
      },
      {
        "year": 1998,
        "birthdate": "2213-01-16",
        "name": "Ignatz°Kleweta°(Olmütz), Pfr.i.R., Vöhl",
        "birth": "16.°Januar°1913°in°Stadt°Liebau (Město°Libavá,°CZ¥-783°07)",
        "grave": "Friedhof°Vöhl",
        "age": 85
      }
    ],
    "4": [
      {
        "year": 1943,
        "birthdate": "2171-02-18",
        "name": "Franz°Winter, Pfarrer°in°Flieden",
        "birth": "18.°Februar°1871°in°Geisa",
        "grave": "",
        "age": 72
      },
      {
        "year": 1961,
        "birthdate": "2215-02-05",
        "name": "Franz°Sittarz°(Köln), Pfarrer°in°Bad°Langensalza¥-Land",
        "birth": "5.°Februar°1915°in°Düsseldorf",
        "grave": "",
        "age": 46
      },
      {
        "year": 1986,
        "birthdate": "2209-08-11",
        "name": "P.°Paul°Schilling°SDB, Pfarrer°in°Oberkaufungen",
        "birth": "11.°August°1909°in°Hamborn (D¥-4716.°Duisburg)",
        "grave": "Friedhof°Kassel¥-Bettenhausen",
        "age": 77
      }
    ],
    "5": [
      {
        "year": 1928,
        "birthdate": "2173-09-13",
        "name": "Adolf°Schmidt, Pfarrer°in°Schleid",
        "birth": "13.°September°1873°in°Wächtersbach",
        "grave": "",
        "age": 55
      },
      {
        "year": 1934,
        "birthdate": "2149-03-27",
        "name": "DDr.°Konrad°Weber, Dr.°theol.°et°phil., Pfr.i.R., Ehrendomkapitular, Marburg",
        "birth": "27.°März°1849°in°Sargenzell",
        "grave": "",
        "age": 85
      },
      {
        "year": 1936,
        "birthdate": "2174-08-25",
        "name": "Joseph°Selzer, Dechant, Pfarrer°in°Fritzlar",
        "birth": "25.°August°1874°in°Ohmes (D¥-36326°Antrifttal)",
        "grave": "",
        "age": 62
      },
      {
        "year": 1945,
        "birthdate": "2178-09-08",
        "name": "Bruno°Werner, Pfr.i.R., Diedorf",
        "birth": "8.°September°1878°in°Heiligenstadt",
        "grave": "",
        "age": 67
      },
      {
        "year": 1993,
        "birthdate": "2212-02-28",
        "name": "Hermann¥-Josef°Siebrand, Pfr.i.R., Lenkrode",
        "birth": "28.°Februar°1912°in°Breitenworbis (D¥-37339)",
        "grave": "",
        "age": 81
      },
      {
        "year": 1999,
        "birthdate": "2211-08-25",
        "name": "Paul°Gray, Pfr.i.R., GR, Hünfeld",
        "birth": "25.°August°1911°in°Frankfurt°a.°M.",
        "grave": "Friedhof°Elters",
        "age": 88
      }
    ],
    "6": [
      {
        "year": 1956,
        "birthdate": "2194-10-14",
        "name": "Johannes°Dröder, Pfr.i.R., Berlin¥-Lichtenrade",
        "birth": "14.°Oktober°1894°in°Berlin¥-Spandau",
        "grave": "",
        "age": 61
      },
      {
        "year": 2010,
        "birthdate": "2254-07-23",
        "name": "Wolfram°Fröhlig, Diakon, Petersberg¥-Untergötzenhof",
        "birth": "23.°Juli°1954°in°Stöckels",
        "grave": "Friedhof°Petersberg¥-Almendorf",
        "age": 56
      }
    ],
    "7": [
      {
        "year": 1960,
        "birthdate": "2176-08-01",
        "name": "Richard°Schulte, Pfr.i.R., Erfurt",
        "birth": "1.°August°1876°in°Dortmund",
        "grave": "",
        "age": 84
      },
      {
        "year": 1964,
        "birthdate": "2202-04-18",
        "name": "Karl°Altmann°(Leitmeritz), Pfarrer°in°Trutzhain",
        "birth": "18.°April°1902°in°St.°Katharina (Svatá°Kateřina,°CZ¥-340°22°Chudenín)",
        "grave": "Friedhof°Eichenzell",
        "age": 62
      }
    ],
    "8": [
      {
        "year": 1986,
        "birthdate": "2210-04-30",
        "name": "Johannes°Rhode, Pfr.i.R., Küllstedt",
        "birth": "30.°April°1910°in°Reinholterode (D¥-37308)",
        "grave": "Friedhof°Küllstedt",
        "age": 76
      },
      {
        "year": 1993,
        "birthdate": "2224-09-11",
        "name": "Johannes°Haparta°(Hildesheim), Pfr.i.R., Kirchhain",
        "birth": "11.°September°1924°in°Tarnowitz (Tarnowskie°Góry,°PL¥-42¥-6..)",
        "grave": "Friedhof°Roßdorf",
        "age": 69
      },
      {
        "year": 2023,
        "birthdate": "2232-06-27",
        "name": "Alfred°Döppenschmitt, Pfr.i.R., GR, Fulda",
        "birth": "27.°Juni°1932°in°Bad°Orb",
        "grave": "Zentralfriedhof°Fulda",
        "age": 91
      }
    ],
    "9": [
      {
        "year": 1958,
        "birthdate": "2202-12-24",
        "name": "Aloys°Heinebrodt, Dechant, Pfarrer°in°Weimar",
        "birth": "24.°Dezember°1902°in°Diedorf",
        "grave": "",
        "age": 55
      },
      {
        "year": 1969,
        "birthdate": "2207-02-06",
        "name": "P.°Ludolf°Janssen°OFMCap, Pfarrer°in°Cornberg",
        "birth": "6.°Februar°1907°in°Kleve (D¥-47533)",
        "grave": "Friedhof°Bebra",
        "age": 62
      },
      {
        "year": 1971,
        "birthdate": "2205-12-24",
        "name": "Pius°Most, Pfr.i.R., GR, Fulda",
        "birth": "24.°Dezember°1905°in°Neuwirtshaus",
        "grave": "Fulda",
        "age": 65
      },
      {
        "year": 1990,
        "birthdate": "2212-03-29",
        "name": "Edmund°Döring, Pfr.i.R., Heiligenstadt",
        "birth": "29.°März°1912°in°Rüstungen (D¥-37308°Schimberg)",
        "grave": "",
        "age": 78
      },
      {
        "year": 2009,
        "birthdate": "2234-02-27",
        "name": "Johannes°Wagner, Pfr.i.R., Hünfeld¥-Mackenzell",
        "birth": "27.°Februar°1934°in°Kassel",
        "grave": "Friedhof°Weißenborn",
        "age": 75
      }
    ],
    "10": [
      {
        "year": 1954,
        "birthdate": "2184-11-10",
        "name": "Wilhelm°Pfeifer, StR°i.R., Pfarrkurat°in°Elters",
        "birth": "10.°November°1884°in°Bad°Orb",
        "grave": "",
        "age": 69
      }
    ],
    "11": [
      {
        "year": 1990,
        "birthdate": "2224-08-19",
        "name": "Heinrich°Richard, Pfarrer°in°Bad°Liebenstein",
        "birth": "19.°August°1924°in°Heiligenstadt",
        "grave": "",
        "age": 66
      },
      {
        "year": 2006,
        "birthdate": "2232-03-11",
        "name": "Hubert°Caris, Pfr.i.R., Münchhausen",
        "birth": "11.°März°1932°in°Weert (NL¥-60..)",
        "grave": "Marburg",
        "age": 74
      }
    ],
    "12": [
      {
        "year": 1938,
        "birthdate": "2172-12-12",
        "name": "August°May, Pfarrer°in°Bernterode/Krs.°Worbis",
        "birth": "12.°Dezember°1872°in°Hausen/Worbis (D¥-37355°Niederorschel)",
        "grave": "",
        "age": 65
      },
      {
        "year": 1963,
        "birthdate": "2196-08-14",
        "name": "Maximilian°Zips°(Olmütz), Pfr.i.R., Eckardroth/Krs.°Schlüchtern",
        "birth": "14.°August°1896°in°Bautsch (Budišov°nad°Budišovkou,°CZ¥-747°87)",
        "grave": "",
        "age": 67
      },
      {
        "year": 1992,
        "birthdate": "2238-03-14",
        "name": "Herwig°Bartel, Pfarrer°in°Bad°Berka",
        "birth": "14.°März°1938°in°Warnsdorf (Varnsdorf,°CZ¥-407°47)",
        "grave": "Hauptfriedhof°Erfurt",
        "age": 54
      }
    ],
    "13": [
      {
        "year": 1997,
        "birthdate": "2240-12-27",
        "name": "Hermann¥-Josef°Wagner, GR, Pfarrer°in°Borken",
        "birth": "27.°Dezember°1940°in°Fulda",
        "grave": "Friedhof°Borken",
        "age": 56
      }
    ],
    "14": [
      {
        "year": 1924,
        "birthdate": "2169-07-24",
        "name": "Adam°Kramm, Pfarrer°in°Schröck",
        "birth": "24.°Juli°1869°in°Horas",
        "grave": "",
        "age": 55
      },
      {
        "year": 1932,
        "birthdate": "2161-09-16",
        "name": "Otto°Höppner, Pfr.i.R., Struth",
        "birth": "16.°September°1861°in°Lengenfeld°u.°St. (D¥-99976°Südeichsfeld)",
        "grave": "",
        "age": 71
      },
      {
        "year": 2025,
        "birthdate": "2235-11-12",
        "name": "P.°Aloys°Weber°SDB, Köln¥-Mülheim",
        "birth": "12.°November°1935°in°Hannover¥-Döhren",
        "grave": "Friedhof°Köln¥-Stammheim",
        "age": 89
      }
    ],
    "15": [
      {
        "year": 1954,
        "birthdate": "2185-06-23",
        "name": "Johannes°Brzezinka°(Breslau), Pfr.i.R., Niederorschel",
        "birth": "23.°Juni°1885°in°Ellguth¥-Guttentag (Ligota°Dobrodzieńska,°PL¥-46¥-380)",
        "grave": "",
        "age": 69
      },
      {
        "year": 1971,
        "birthdate": "2186-09-10",
        "name": "Joseph°Faulstich, Pfr.i.R., GR, Fulda",
        "birth": "10.°September°1886°in°Hainzell",
        "grave": "Fulda",
        "age": 85
      },
      {
        "year": 1993,
        "birthdate": "2225-05-30",
        "name": "Dr.°Heinz°Reinelt°(Breslau), Prof.°em., Prälat, Fulda",
        "birth": "30.°Mai°1925°in°Schweidnitz (Świdnica,°PL¥-58¥-10.)",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 68
      }
    ],
    "16": [
      {
        "year": 1977,
        "birthdate": "2209-06-02",
        "name": "P.°Bernhard°Glatzel°SVD, Pfr.i.R., Sankt°Augustin",
        "birth": "2.°Juni°1909°in°Bischofswalde (Biskupów,°PL¥-48¥-340)",
        "grave": "Klosterfriedhof°Sankt°Augustin",
        "age": 68
      },
      {
        "year": 1983,
        "birthdate": "2211-04-05",
        "name": "Vinzenz°Ahmann, Pfr.i.R., Ahaus¥-Wüllen",
        "birth": "5.°April°1911°in°Dorsten (D¥-4628.)",
        "grave": "Friedhof°Dorsten",
        "age": 72
      },
      {
        "year": 1986,
        "birthdate": "2247-01-16",
        "name": "Gerd°Büchner, Pfarrer°in°Friedrichslohra",
        "birth": "16.°Januar°1947°in°Erfurt",
        "grave": "Friedhof°Erfurt",
        "age": 39
      },
      {
        "year": 2016,
        "birthdate": "2230-06-01",
        "name": "Otto°Wengenmair, Pfr.i.R., OStR°i.R., Msgr., GR, Eschwege",
        "birth": "1.°Juni°1930°in°Haslau (Hazlov,°CZ¥-351°32)",
        "grave": "Friedhof°Eschwege",
        "age": 86
      },
      {
        "year": 2020,
        "birthdate": "2241-04-09",
        "name": "Wincenty°Krzyżak°(Tarnów/Fulda), Pfr.i.R., GR, Żmiąca/Polen",
        "birth": "9.°April°1941°in°Żmiąca (PL¥-34¥-603)",
        "grave": "Friedhof°Żmiąca/Polen",
        "age": 79
      }
    ],
    "17": [
      {
        "year": 1983,
        "birthdate": "2201-08-02",
        "name": "Aloys°Schmand, Caritasdirektor°i.R., Msgr., Fulda",
        "birth": "2.°August°1901°in°Volkmarsen",
        "grave": "Friedhof°Volkmarsen",
        "age": 82
      }
    ],
    "18": [
      {
        "year": 1935,
        "birthdate": "2158-06-06",
        "name": "Ludwig°Hüber, Pfr.i.R., Wirtheim",
        "birth": "6.°Juni°1858°in°Salmünster",
        "grave": "",
        "age": 77
      },
      {
        "year": 1970,
        "birthdate": "2192-11-18",
        "name": "Paul°Eiberle°(Caratinga/Brasilien), Pfr.i.R., Großrudestedt",
        "birth": "18.°November°1892°in°Bad°Homburg",
        "grave": "Erfurt",
        "age": 77
      }
    ],
    "19": [
      {
        "year": 1949,
        "birthdate": "2176-07-10",
        "name": "Wilhelm°Engels, Pfr.i.R., Alsberg",
        "birth": "10.°Juli°1876°in°Herforst/Krs.°Bitburg (D¥-54662)",
        "grave": "",
        "age": 73
      },
      {
        "year": 1957,
        "birthdate": "2168-07-19",
        "name": "Anton°Nitzge, Pfr.i.R., Volkmarsen",
        "birth": "19.°Juli°1868°in°Volkmarsen",
        "grave": "",
        "age": 89
      },
      {
        "year": 1968,
        "birthdate": "2199-06-01",
        "name": "P.°Johann¥-Adam°Hüttel°OMI, Pfarrer°in°Wechmar",
        "birth": "1.°Juni°1899°in°Altenmittlau",
        "grave": "",
        "age": 69
      },
      {
        "year": 1971,
        "birthdate": "2208-09-12",
        "name": "Reinhold°Goy°(Breslau), Pfarrer°in°Niederkalbach",
        "birth": "12.°September°1908°in°Kattowitz (Katowice,°PL¥-40¥-...)",
        "grave": "Friedhof°Niederkalbach",
        "age": 63
      }
    ],
    "20": [
      {
        "year": 1950,
        "birthdate": "2189-02-02",
        "name": "P.°Dr.°Desiderius°Breitenstein°OFM, Prof., Fulda",
        "birth": "2.°Februar°1889°in°Kallmerode (D¥-37327°Leinefelde¥-Worbis)",
        "grave": "",
        "age": 61
      },
      {
        "year": 1956,
        "birthdate": "2174-05-25",
        "name": "Heinrich°Bergmann, Pfr.i.R., Fulda",
        "birth": "25.°Mai°1874°in°Großkrotzenburg",
        "grave": "",
        "age": 82
      },
      {
        "year": 1981,
        "birthdate": "2199-12-11",
        "name": "Dr.°Franz°Alois°Eckert°(Breslau), Pfr.i.R., Worbis",
        "birth": "11.°Dezember°1899°in°Stephansdorf (Radzikowice,°PL¥-48¥-300)",
        "grave": "",
        "age": 81
      },
      {
        "year": 1996,
        "birthdate": "2237-02-26",
        "name": "Dr.°Winfried°Leinweber, Regionaldechant, Dechant, Pfarrer°in°Marburg, St.°Johannes°Ev.",
        "birth": "26.°Februar°1937°in°Fulda",
        "grave": "Hauptfriedhof°am°Rotenberg,°Marburg",
        "age": 59
      }
    ],
    "21": [
      {
        "year": 1970,
        "birthdate": "2200-01-27",
        "name": "Heinrich°Müller, Pfr.i.R., GR, Dechant, Fulda",
        "birth": "27.°Januar°1900°in°Hanau",
        "grave": "Friedhof°Hilders",
        "age": 70
      },
      {
        "year": 2001,
        "birthdate": "2214-02-12",
        "name": "Gregor°Paul, Pfr.i.R., GR, Amöneburg¥-Roßdorf",
        "birth": "12.°Februar°1914°in°Emsdorf",
        "grave": "Friedhof°Roßdorf",
        "age": 87
      }
    ],
    "22": [
      {
        "year": 1961,
        "birthdate": "2203-12-31",
        "name": "P.°Konrad°Kletzka°SVD, Pfarrkurat°in°Trendelburg",
        "birth": "31.°Dezember°1903°in°Groß¥-Peterwitz (Pietrowice°Wielkie,°PL¥-47¥-480)",
        "grave": "",
        "age": 57
      },
      {
        "year": 1983,
        "birthdate": "2210-09-27",
        "name": "Paul°Vogt, Pfr.i.R., Bad°Bellingen",
        "birth": "27.°September°1910°in°Kassel",
        "grave": "Friedhof°Bad°Bellingen°(D¥-79415)",
        "age": 73
      },
      {
        "year": 2021,
        "birthdate": "2252-04-27",
        "name": "Karl¥-Peter°Klein, Pfr.i.R., GR, Freigericht¥-Bernbach",
        "birth": "27.°April°1952°in°Bernbach",
        "grave": "Friedhof°Freigericht¥-Bernbach",
        "age": 69
      },
      {
        "year": 2025,
        "birthdate": "2254-10-29",
        "name": "Bernd°Bruno°Wystrach, Diakon, Steinau°a.°d.°Straße",
        "birth": "29.°Oktober°1954°in°Homberg",
        "grave": "Friedhof°Steinau¥-Marborn",
        "age": 70
      }
    ],
    "23": [
      {
        "year": 1945,
        "birthdate": "2187-12-01",
        "name": "Franz°Mehlmann, Dechant, Pfarrer°in°KämmerzelI",
        "birth": "1.°Dezember°1887°in°Frankfurt°a.°M.",
        "grave": "",
        "age": 57
      },
      {
        "year": 1976,
        "birthdate": "2199-01-18",
        "name": "P.°Richard°Hauffen°SDB, Pfr.i.R., GR, Lohfelden",
        "birth": "18.°Januar°1899°in°Sackisch (Zakrze,°PL¥-57¥-350°Kudowa¥-Zdrój)",
        "grave": "Friedhof°Kassel¥-Bettenhausen",
        "age": 77
      },
      {
        "year": 1978,
        "birthdate": "2216-02-03",
        "name": "Alfons°Smykalla°(Breslau), Pfarrer°in°Wingerode",
        "birth": "3.°Februar°1916°in°Reinschdorf (Reńska°Wieś,°PL¥-47¥-208)",
        "grave": "Friedhof°Wingerode",
        "age": 62
      },
      {
        "year": 1981,
        "birthdate": "2198-10-30",
        "name": "Wilhelm°Wald, GR, Pfarrer°in°Thalau",
        "birth": "30.°Oktober°1898°in°Geisa",
        "grave": "Friedhof°Thalau",
        "age": 82
      },
      {
        "year": 1999,
        "birthdate": "2210-03-01",
        "name": "Aloys°Fink, Pfr.i.R., GR, Hünfeld",
        "birth": "1.°März°1910°in°Oberufhausen",
        "grave": "Friedhof°Ufhausen",
        "age": 89
      }
    ],
    "24": [
      {
        "year": 1944,
        "birthdate": "2171-10-04",
        "name": "Franz°Emil°Weber, Prof., Lic.°theol., StR°i.R., Kassel",
        "birth": "4.°Oktober°1871°in°Burghaun",
        "grave": "",
        "age": 73
      },
      {
        "year": 1944,
        "birthdate": "2178-08-12",
        "name": "Hubert°Biermann, Pfr.i.R., Fulda",
        "birth": "12.°August°1878°in°Duisburg",
        "grave": "",
        "age": 66
      },
      {
        "year": 1954,
        "birthdate": "2190-03-11",
        "name": "Karl°Bub, Pfarrer°in°Kleinsassen",
        "birth": "11.°März°1890°in°Niederkalbach",
        "grave": "",
        "age": 64
      },
      {
        "year": 1969,
        "birthdate": "2198-06-01",
        "name": "Josef°Redemann, Pfr.i.R., Göttingen",
        "birth": "1.°Juni°1898°in°Ferna/Eichsfeld (D¥-37339)",
        "grave": "",
        "age": 71
      },
      {
        "year": 2003,
        "birthdate": "2234-07-06",
        "name": "Anton°Schmitt, Pfr.i.R., StR°i.K.i.R., Michelstadt",
        "birth": "6.°Juli°1934°in°Lingen/Ems (D¥-498..)",
        "grave": "Friedhof°Vielbrunn°(D¥-64720)",
        "age": 69
      }
    ],
    "25": [
      {
        "year": 1937,
        "birthdate": "2170-07-17",
        "name": "Anton°Genau, Dechant, Pfarrer°in°Rengelrode",
        "birth": "17.°Juli°1870°in°Geismar",
        "grave": "",
        "age": 67
      },
      {
        "year": 1953,
        "birthdate": "2162-10-31",
        "name": "Karl°Vatteroth, Pfr.i.R., Kleinbartloff",
        "birth": "31.°Oktober°1862°in°Kleinbartloff (D¥-37355°Niederorschel)",
        "grave": "",
        "age": 90
      },
      {
        "year": 1978,
        "birthdate": "2232-02-23",
        "name": "Anton°Tresp, Pfarrer°in°Großalmerode",
        "birth": "23.°Februar°1932°in°Kölmersdorf/Ostpreußen (Wiśniowo°Ełckie,°PL¥-19¥-335)",
        "grave": "Friedhof°Witzenhausen",
        "age": 46
      },
      {
        "year": 1980,
        "birthdate": "2212-09-11",
        "name": "Heinrich°Kraut, Pfr.i.R., GR, Eisenach",
        "birth": "11.°September°1912°in°Somborn",
        "grave": "Friedhof°Somborn",
        "age": 68
      }
    ],
    "26": [
      {
        "year": 1976,
        "birthdate": "2214-06-21",
        "name": "Heinz°Friedrich, Pfarrer°in°Heldrungen",
        "birth": "21.°Juni°1914°in°Klausberg (Mikulczyce,°41¥-807°Zabrze)",
        "grave": "Erfurt",
        "age": 62
      },
      {
        "year": 1995,
        "birthdate": "2211-12-20",
        "name": "Josef°Albinger, Pfr.i.R., GR, Poppenhausen",
        "birth": "20.°Dezember°1911°in°Neuhof",
        "grave": "Poppenhausen",
        "age": 83
      },
      {
        "year": 2021,
        "birthdate": "2227-04-09",
        "name": "Dr.°Werner°Marschall°(Görlitz/Fulda), Prof.°em., Dr.°theol.°habil., Msgr., Fulda¥-Horas",
        "birth": "9.°April°1927°in°Oppeln (Opole,°PL¥-45¥-...)",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 94
      },
      {
        "year": 2022,
        "birthdate": "2221-11-26",
        "name": "Alois°Zimmer, OStR°i.K.i.R., GR, Kassel",
        "birth": "26.°November°1921°in°Schoden°bei°Trier (D¥-54441)",
        "grave": "Hauptfriedhof°Kassel",
        "age": 100
      }
    ],
    "27": [
      {
        "year": 1950,
        "birthdate": "2214-05-08",
        "name": "P.°Karl°Brungs°SJ, Pfarrvikar°in°Zella¥-Mehlis",
        "birth": "8.°Mai°1914°in°Köln",
        "grave": "",
        "age": 36
      },
      {
        "year": 2009,
        "birthdate": "2228-02-06",
        "name": "DDr.°Reinhold°Weier, Prof.°em., Trier",
        "birth": "6.°Februar°1928°in°Fulda",
        "grave": "Friedhof°St.°Paulin,°Trier",
        "age": 81
      },
      {
        "year": 2016,
        "birthdate": "2229-12-05",
        "name": "Erich°Kiel, Pfr.i.R., GR, Haunetal¥-Oberstoppel",
        "birth": "5.°Dezember°1929°in°Eschwege",
        "grave": "Waldfriedhof°Gehilfersberg°bei°Rasdorf",
        "age": 86
      }
    ],
    "28": [
      {
        "year": 1924,
        "birthdate": "2148-05-01",
        "name": "Joseph°Herbener, Prälat, Domdechant, Fulda",
        "birth": "1.°Mai°1848°in°Bauerbach",
        "grave": "",
        "age": 76
      }
    ],
    "29": [
      {
        "year": 2000,
        "birthdate": "2222-04-17",
        "name": "Rudolf°Gollbach, Pfr.i.R., GR, Flieden",
        "birth": "17.°April°1922°in°Grüsselbach",
        "grave": "Friedhof°Magdlos",
        "age": 78
      },
      {
        "year": 2000,
        "birthdate": "2225-04-02",
        "name": "Karl°Wiegel, Pfr.i.R., Geisa",
        "birth": "2.°April°1925°in°Beberstedt/Eichsfeld (D¥-99976)",
        "grave": "Friedhof°Buttlar",
        "age": 75
      },
      {
        "year": 2007,
        "birthdate": "2235-11-09",
        "name": "P.°Stefan°Krenzer°OFM, Fulda",
        "birth": "9.°November°1935°in°Wüstensachsen",
        "grave": "",
        "age": 71
      }
    ],
    "30": [
      {
        "year": 1945,
        "birthdate": "2165-10-03",
        "name": "DDr.°Joseph°Flügel, Dr.°theol.°et°phil., Dechant, Pfarrer°in°Weyhers",
        "birth": "3.°Oktober°1865°in°Sprockhövel/Westfalen (D¥-45549)",
        "grave": "",
        "age": 80
      },
      {
        "year": 1996,
        "birthdate": "2210-04-21",
        "name": "Georg°Knappik, Pfr.i.R., Fronhausen",
        "birth": "21.°April°1910°in°Hindenburg (Zabrze,°PL¥-41¥-8..)",
        "grave": "Friedhof°Fronhausen",
        "age": 86
      },
      {
        "year": 1999,
        "birthdate": "2228-03-25",
        "name": "Werner°Linge, Diakon, Kassel",
        "birth": "25.°März°1928°in°Kassel",
        "grave": "Friedhof°Kassel¥-Wehlheiden",
        "age": 71
      },
      {
        "year": 2011,
        "birthdate": "2227-04-09",
        "name": "Josef°Kesting, Msgr., Direktor°i.R., Heiligenstadt",
        "birth": "9.°April°1927°in°Beuren/Eichsfeld (D¥-37327°Leinefelde¥-Worbis)",
        "grave": "Friedhof°Beuren",
        "age": 84
      },
      {
        "year": 2022,
        "birthdate": "2238-04-18",
        "name": "Dr.°Winfried°Kurzschenkel, OStR°i.K.i.R., Fulda",
        "birth": "18.°April°1938°in°Großauheim",
        "grave": "Friedhof°Großauheim",
        "age": 84
      }
    ],
    "31": [
      {
        "year": 1983,
        "birthdate": "2207-04-14",
        "name": "Josef°Becker, Pfr.i.R., GR, Morsbach/Sieg",
        "birth": "14.°April°1907°in°Großauheim",
        "grave": "Friedhof°Morsbach°(D¥-51597)",
        "age": 76
      },
      {
        "year": 1991,
        "birthdate": "2216-03-27",
        "name": "Wilhelm°Schröer, Pfr.i.R., Hasselroth",
        "birth": "27.°März°1916°in°Metz (F¥-57000)",
        "grave": "Friedhof°Neuenhaßlau",
        "age": 75
      }
    ]
  },
  "11": {
    "1": [
      {
        "year": 1948,
        "birthdate": "2180-04-18",
        "name": "Simon°Wehner, Pfr.i.R., GR, Poppenhausen",
        "birth": "18.°April°1880°in°Oberrothhof (36419°Schleid)",
        "grave": "Friedhof°Poppenhausen",
        "age": 68
      },
      {
        "year": 1986,
        "birthdate": "2210-08-12",
        "name": "Karl°Doiwa°(Limburg), Pfr.i.R., Frankenberg/Eder",
        "birth": "12.°August°1910°in°Tarnowitz (Tarnowskie°Góry,°PL¥-42¥-6..)",
        "grave": "",
        "age": 76
      },
      {
        "year": 1990,
        "birthdate": "2210-01-14",
        "name": "P.°Siegfried°Budniok°OMI, Pfr.i.R., Erfurt",
        "birth": "14.°Januar°1910°in°Glatz (Kłodzko,°PL¥-57¥-300)",
        "grave": "",
        "age": 80
      },
      {
        "year": 2011,
        "birthdate": "2236-12-09",
        "name": "Albert°Diedrich, Pfr.i.R., OStR°a.D., Msgr., Frasdorf/Chiemgau",
        "birth": "9.°Dezember°1936°in°Heringen",
        "grave": "Friedhof°Frasdorf°(D¥-83112)",
        "age": 74
      }
    ],
    "2": [
      {
        "year": 1944,
        "birthdate": "2171-12-21",
        "name": "Otto°Gramm, Stadtpfarrer°in°Fulda",
        "birth": "21.°Dezember°1871°in°Ebersberg",
        "grave": "",
        "age": 72
      }
    ],
    "3": [
      {
        "year": 1970,
        "birthdate": "2188-11-08",
        "name": "Heinrich°Joseph°Becker, Stadtpfr.i.R., GR, Ehrendomkapitular, Ehrendechant, Fritzlar",
        "birth": "8.°November°1888°in°Bad°Orb",
        "grave": "Fritzlar",
        "age": 81
      },
      {
        "year": 1985,
        "birthdate": "2209-06-16",
        "name": "P.°Philipp°Rotering°OFMCap, Pfarrkurat°in°Cornberg",
        "birth": "16.°Juni°1909°in°Bocholt/Westfalen (D¥-4639.)",
        "grave": "Friedhof°Bebra",
        "age": 76
      },
      {
        "year": 1986,
        "birthdate": "2216-01-25",
        "name": "Wilhelm°Kirchner, Diakon°i.R., Erfurt",
        "birth": "25.°Januar°1916°in°Haida (Nový°Bor,°CZ¥-47.°..)",
        "grave": "",
        "age": 70
      },
      {
        "year": 2022,
        "birthdate": "2241-07-18",
        "name": "Erwin°Lachnit, Pfr.i.R., GR, Poppenhausen¥-Gackenhof",
        "birth": "18.°Juli°1941°in°Mährisch¥-Schönberg (Šumperk,°CZ¥-787°01)",
        "grave": "Kirchl.°Friedhof°Poppenhausen",
        "age": 81
      }
    ],
    "4": [
      {
        "year": 1984,
        "birthdate": "2214-02-24",
        "name": "Franz°Habersack, Pfr.i.R., GR, Fulda",
        "birth": "24.°Februar°1914°in°Fulda",
        "grave": "Friedhof°Schmalnau",
        "age": 70
      }
    ],
    "5": [
      {
        "year": 1992,
        "birthdate": "2212-02-29",
        "name": "Franz°Westermann°(Paderborn), Pfr.i.R., Speyer",
        "birth": "29.°Februar°1912°in°Halle/Saale",
        "grave": "Friedhof°in°Malgersdorf°(D¥-84333)",
        "age": 80
      },
      {
        "year": 1998,
        "birthdate": "2245-05-31",
        "name": "Norbert°Maas, Pfarrer°in°Breitenberg",
        "birth": "31.°Mai°1945°in°Merseburg (D¥-06217)",
        "grave": "Friedhof°Bad°Orb",
        "age": 53
      },
      {
        "year": 2012,
        "birthdate": "2247-03-10",
        "name": "Dr.°Ludwig°Strecker°(Anápolis/Brasilien), Pfr.i.R., Bischofsvikar, Michelsneukirchen",
        "birth": "10.°März°1947°in°Arnstorf (D¥-94424)",
        "grave": "Friedhof°Michelsneukirchen°(D¥-93185)",
        "age": 65
      }
    ],
    "6": [
      {
        "year": 1945,
        "birthdate": "2166-10-12",
        "name": "Anton°Fuhlrott, Pfarrer°in°Wüstensachsen",
        "birth": "12.°Oktober°1866°in°Birkungen (D¥-37327°Leinefelde¥-Worbis)",
        "grave": "",
        "age": 79
      },
      {
        "year": 1977,
        "birthdate": "2215-04-23",
        "name": "Georg°Hauck°(Prag/Glatz), Pfarrer°in°Aufenau",
        "birth": "23.°April°1915°in°Bad°Landeck (Lądek¥-Zdrój,°PL¥-57¥-540)",
        "grave": "Friedhof°Aufenau",
        "age": 62
      },
      {
        "year": 2000,
        "birthdate": "2227-03-30",
        "name": "Herbert°Oberthür, Pfr.i.R., GR, Hünfeld",
        "birth": "30.°März°1927°in°Mühlhausen/Thür. (D¥-99974)",
        "grave": "Friedhof°Ufhausen",
        "age": 73
      },
      {
        "year": 2015,
        "birthdate": "2240-10-24",
        "name": "Wolfgang°Heil, Pfr.i.R., Fulda",
        "birth": "24.°Oktober°1940°in°Fulda",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 75
      }
    ],
    "7": [
      {
        "year": 1949,
        "birthdate": "2172-04-15",
        "name": "Hermann°von°Keitz, Pfarrer°in°Fulda¥-Horas",
        "birth": "15.°April°1872°in°Maberzell",
        "grave": "",
        "age": 77
      },
      {
        "year": 1949,
        "birthdate": "2192-10-07",
        "name": "Pius°Botthoff, Pfarrer°in°Leinefelde",
        "birth": "7.°Oktober°1892°in°Niederklein",
        "grave": "",
        "age": 57
      },
      {
        "year": 2007,
        "birthdate": "2213-04-17",
        "name": "Dr.°Werner°Jacobs, Prof., Prälat, Fulda",
        "birth": "17.°April°1913°in°Kassel",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 94
      }
    ],
    "8": [
      {
        "year": 1937,
        "birthdate": "2179-10-07",
        "name": "Ludwig°Braun, Pfarrer°in°Schröck",
        "birth": "7.°Oktober°1879°in°Amöneburg",
        "grave": "",
        "age": 58
      },
      {
        "year": 1957,
        "birthdate": "2178-01-08",
        "name": "Karl°Becker, Pfr.i.R., Fulda",
        "birth": "8.°Januar°1878°in°Fritzlar",
        "grave": "",
        "age": 79
      },
      {
        "year": 1982,
        "birthdate": "2210-09-20",
        "name": "Gerhard°Stellmach°(Breslau), OStR°i.R., Darmstadt",
        "birth": "20.°September°1910°in°Gleiwitz (Gliwice,°PL¥-44¥-1..)",
        "grave": "Darmstadt",
        "age": 72
      },
      {
        "year": 1987,
        "birthdate": "2209-07-19",
        "name": "P.°Maximilian°Hanf°OFM, Pfr.i.R., Fulda",
        "birth": "19.°Juli°1909°in°Waltersdorf (Niegosławice,°PL¥-67¥-312)",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 78
      }
    ],
    "9": [
      {
        "year": 1934,
        "birthdate": "2174-04-07",
        "name": "Joseph°Weinrich, Pfarrer°in°Rüstungen",
        "birth": "7.°April°1874°in°Worbis (D¥-37339)",
        "grave": "",
        "age": 60
      }
    ],
    "10": [
      {
        "year": 1927,
        "birthdate": "2162-10-16",
        "name": "Peter°Ignaz°Nau, Pfarrer°in°Steinhaus",
        "birth": "16.°Oktober°1862°in°Schröck",
        "grave": "",
        "age": 65
      },
      {
        "year": 1940,
        "birthdate": "2204-02-24",
        "name": "Franz°Wand, Kuratus°in°Langenschwarz",
        "birth": "24.°Februar°1904°in°Breitenworbis (D¥-37339)",
        "grave": "",
        "age": 36
      },
      {
        "year": 1980,
        "birthdate": "2219-10-27",
        "name": "P.°Wilhelm°Görtz°SDB, Pfarrer°in°Kassel, St.°Andreas",
        "birth": "27.°Oktober°1919°in°Essen¥-Bergeborbeck",
        "grave": "Friedhof°Kassel¥-Bettenhausen",
        "age": 61
      },
      {
        "year": 2014,
        "birthdate": "2239-07-19",
        "name": "Rudolf°Hofmann, Prälat, Domkapitular°i.R., Fulda",
        "birth": "19.°Juli°1939°in°Marburg",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 75
      },
      {
        "year": 2023,
        "birthdate": "2228-10-11",
        "name": "Roland°Knott, Polizeidekan°i.R., OStR°i.K.i.R., Prälat, Hünfeld¥-Kirchhasel",
        "birth": "11.°Oktober°1928°in°Köln",
        "grave": "Friedhof°Kirchhasel",
        "age": 95
      }
    ],
    "11": [
      {
        "year": 1995,
        "birthdate": "2203-12-16",
        "name": "DDr.°Adalbert°Peter, Prof., Dr.°theol.°et°phil., Prälat, Hünfeld",
        "birth": "16.°Dezember°1903°in°Soisdorf",
        "grave": "Friedhof°Soisdorf",
        "age": 91
      }
    ],
    "12": [
      {
        "year": 1924,
        "birthdate": "2164-07-15",
        "name": "Heinrich°Lecher, Pfarrer°in°Margretenhaun",
        "birth": "15.°Juli°1864°in°Emsdorf",
        "grave": "",
        "age": 60
      },
      {
        "year": 1944,
        "birthdate": "2182-10-16",
        "name": "Friedrich°Kalbhenn, Direktor°des°Johannesstiftes°in°Ershausen",
        "birth": "16.°Oktober°1882°in°Wachstedt (D¥-37359)",
        "grave": "",
        "age": 62
      },
      {
        "year": 1954,
        "birthdate": "2207-05-19",
        "name": "Alfons°Smaczny°(Breslau), Pfarrkurat°in°Triptis",
        "birth": "19.°Mai°1907°in°Peiskretscham (Pyskowice,°PL¥-44¥-120)",
        "grave": "",
        "age": 47
      },
      {
        "year": 1962,
        "birthdate": "2186-03-27",
        "name": "Joseph°von°Keitz, Pfarrer°in°Bauerbach",
        "birth": "27.°März°1886°in°Rüdigheim",
        "grave": "",
        "age": 76
      },
      {
        "year": 2001,
        "birthdate": "2213-09-13",
        "name": "Dr.°Georg°Karl°Frank, Prof., GR, Esslingen°am°Neckar",
        "birth": "13.°September°1913°in°Großenlüder",
        "grave": "Neuer°Friedhof°Großenlüder",
        "age": 88
      }
    ],
    "13": [
      {
        "year": 1981,
        "birthdate": "2201-01-09",
        "name": "Josef°Strickstrock, Pfr.i.R., GR, Cölbe¥-Bürgeln",
        "birth": "9.°Januar°1901°in°Bischofferode (D¥-37345°Am°Ohmberg)",
        "grave": "Friedhof°Hofbieber",
        "age": 80
      },
      {
        "year": 2012,
        "birthdate": "2228-11-14",
        "name": "Johannes°Mühlen°(Mainz), Pfr.i.R., GR, Bad°Brückenau",
        "birth": "14.°November°1928°in°Burbach/Krs.°Bitburg (D¥-54597)",
        "grave": "RuheForst°Rhön,°Zeitlofs¥-Eckarts°(D¥-97799)",
        "age": 83
      }
    ],
    "14": [
      {
        "year": 1947,
        "birthdate": "2169-11-10",
        "name": "Bartholomäus°Bretthauer, Pfr.i.R., Kirchgandern",
        "birth": "10.°November°1869°in°Kirchgandern (D¥-37318)",
        "grave": "",
        "age": 78
      }
    ],
    "15": [
      {
        "year": 1953,
        "birthdate": "2176-07-12",
        "name": "Alfons°Wiegel, Pfr.i.R., Dietges",
        "birth": "12.°Juli°1876°in°Beberstedt/Eichsfeld (D¥-99976)",
        "grave": "",
        "age": 77
      },
      {
        "year": 1954,
        "birthdate": "2178-02-03",
        "name": "Ludwig°Hüber, Pfr.i.R., Hattenhof",
        "birth": "3.°Februar°1878°in°Salmünster",
        "grave": "",
        "age": 76
      },
      {
        "year": 1968,
        "birthdate": "2200-04-25",
        "name": "Aloys°Mohn°(Ermland), Pfr.i.R., Jena",
        "birth": "25.°April°1900°in°Kunzendorf (Kończewice,°PL¥-82¥-213°Miłoradz)",
        "grave": "Friedhof°Jena",
        "age": 68
      },
      {
        "year": 1976,
        "birthdate": "2204-05-03",
        "name": "Walter°Hoboth, Pfr.i.R., Bad°Salzschlirf",
        "birth": "3.°Mai°1904°in°Eschwege",
        "grave": "Friedhof°Bad°Salzschlirf",
        "age": 72
      },
      {
        "year": 1976,
        "birthdate": "2211-10-22",
        "name": "Johannes°Riebartsch, Pfr.i.R., Waldfeucht¥-Braunsrath",
        "birth": "22.°Oktober°1911°in°Mülheim (D¥-454..)",
        "grave": "Geilenkirchen¥-Loherhof",
        "age": 65
      },
      {
        "year": 1980,
        "birthdate": "2211-07-30",
        "name": "Heinrich°Kuptz, Pfr.i.R., Hünfeld",
        "birth": "30.°Juli°1911°in°Danzig¥-Oliva (Oliwa,°PL¥-80¥-...°Gdańsk)",
        "grave": "Friedhof°Hünfeld",
        "age": 69
      },
      {
        "year": 1996,
        "birthdate": "2210-04-19",
        "name": "Franz°Nitschmann°(Breslau), OStR°i.R., GR, Kassel",
        "birth": "19.°April°1910°in°Cottbus",
        "grave": "Hauptfriedhof°Kassel",
        "age": 86
      }
    ],
    "16": [
      {
        "year": 1957,
        "birthdate": "2187-03-21",
        "name": "Georg°Kind, Pfarrer°in°Flieden",
        "birth": "21.°März°1887°in°Fulda",
        "grave": "",
        "age": 70
      },
      {
        "year": 1961,
        "birthdate": "2200-10-23",
        "name": "Georg°Bartsch°(Breslau), Pfarrer°in°Erfurt, St.°Nicolai",
        "birth": "23.°Oktober°1900°in°Ziegenhals (Głuchołazy,°PL¥-48¥-34.)",
        "grave": "",
        "age": 61
      },
      {
        "year": 2007,
        "birthdate": "2214-09-05",
        "name": "Anton°Weczerek°(Prag/Fulda), Pfr.i.R., GR, Aub",
        "birth": "5.°September°1914°in°Deutsch¥-Krawarn (Kravaře°ve°Slezsku,°CZ¥-747°21)",
        "grave": "Friedhof°Aufstetten",
        "age": 93
      }
    ],
    "17": [
      {
        "year": 1944,
        "birthdate": "2167-09-21",
        "name": "Christoph°Leinweber, Pfr.i.R., Dingelstädt",
        "birth": "21.°September°1867°in°Steinbach/Eichsfeld (D¥-37308)",
        "grave": "",
        "age": 77
      },
      {
        "year": 1985,
        "birthdate": "2204-03-20",
        "name": "Bernhard°Köhler, Pfr.i.R., Neuhof¥-Dorfborn",
        "birth": "20.°März°1904°in°Fulda",
        "grave": "Fulda",
        "age": 81
      },
      {
        "year": 1992,
        "birthdate": "2212-03-31",
        "name": "Joseph°Leister, Pfr.i.R., GR, Fulda",
        "birth": "31.°März°1912°in°Borsch",
        "grave": "Friedhof°Borsch",
        "age": 80
      }
    ],
    "18": [
      {
        "year": 1985,
        "birthdate": "2206-01-11",
        "name": "Paul°Motz, Pfr.i.R., Weilheim°in°Oberbayern",
        "birth": "11.°Januar°1906°in°Witterda (D¥-99189)",
        "grave": "Friedhof°Weilheim°(D¥-82362)",
        "age": 79
      },
      {
        "year": 2002,
        "birthdate": "2225-03-28",
        "name": "Rudolf°Montag, Pfr.i.R., Msgr., GR, Heiligenstadt",
        "birth": "28.°März°1925°in°Küllstedt (D¥-37359)",
        "grave": "Friedhof°Witzenhausen",
        "age": 77
      }
    ],
    "19": [
      {
        "year": 1937,
        "birthdate": "2165-12-04",
        "name": "Chrysostomus°Kiesler, Dechant, Pfarrer°in°Eckweisbach",
        "birth": "4.°Dezember°1865°in°Schleid",
        "grave": "",
        "age": 71
      },
      {
        "year": 1959,
        "birthdate": "2199-01-17",
        "name": "August°Bode, Pfarrer°in°Wachstedt¥-Hagis",
        "birth": "17.°Januar°1899°in°Mackenrode (D¥-37318)",
        "grave": "",
        "age": 60
      },
      {
        "year": 1981,
        "birthdate": "2210-09-30",
        "name": "Bruno°Puscher°(Breslau), Pfr.i.R., Uelzen",
        "birth": "30.°September°1910°in°Schönwald (Bojków,°PL¥-44¥-160°Gliwice)",
        "grave": "Friedhof°Uelzen¥-Veerßen°(D¥-29525)",
        "age": 71
      },
      {
        "year": 1986,
        "birthdate": "2211-09-11",
        "name": "Michael°Sauer, Pfr.i.R., Kamenz",
        "birth": "11.°September°1911°in°Ralbitz (D¥-01920°Ralbitz¥-Rosenthal)",
        "grave": "Friedhof°Ralbitz",
        "age": 75
      },
      {
        "year": 1988,
        "birthdate": "2215-01-01",
        "name": "Heinrich¥-Julius°Tries°(Köln), Pfr.i.R., Haina°(Kloster)",
        "birth": "1.°Januar°1915°in°Aachen",
        "grave": "Städt.°Friedhof Schlitz",
        "age": 73
      },
      {
        "year": 1990,
        "birthdate": "2211-08-29",
        "name": "Karl°Rudolph, Pfr.i.R., Kirchhain¥-Emsdorf",
        "birth": "29.°August°1911°in°Breitenworbis (D¥-37339)",
        "grave": "Friedhof°Emsdorf",
        "age": 79
      }
    ],
    "20": [
      {
        "year": 1952,
        "birthdate": "2186-10-23",
        "name": "Bernhard°Gischarowski°(Ermland), Erzpriester, Pfr.i.R., Wetter",
        "birth": "23.°Oktober°1886°in°Robawen (Robawy,°PL¥-11¥-440)",
        "grave": "",
        "age": 66
      },
      {
        "year": 1973,
        "birthdate": "2205-09-03",
        "name": "P.°Eugen°Eggert°OP, Pfarrer°in°Haueda",
        "birth": "3.°September°1905°in°Oesede (D¥-49124°Georgsmarienhütte)",
        "grave": "Warburg",
        "age": 68
      },
      {
        "year": 2000,
        "birthdate": "2206-02-23",
        "name": "¥fDr.°Eduard°Schick¥0f, Prof., Dr.°Dr.°h.c., Bischof°von°Fulda°(1974¥_1982)",
        "birth": "23.°Februar°1906°in°Mardorf",
        "grave": "Pfarrkirche°St.°Hubertus,°Mardorf",
        "age": 94
      },
      {
        "year": 2007,
        "birthdate": "2225-01-27",
        "name": "Richard°Fick, Pfr.i.R., GR, Geisa",
        "birth": "27.°Januar°1925°in°Hedersleben°bei°Magdeburg (D¥-06458°Vorharz)",
        "grave": "Friedhof°Schleid",
        "age": 82
      },
      {
        "year": 2011,
        "birthdate": "2231-03-09",
        "name": "Paul°Moritz, Pfr.i.R., GR, Felsberg¥-Gensungen",
        "birth": "9.°März°1931°in°Tiefenbach°bei°Passau (D¥-94113)",
        "grave": "Friedhof°Felsberg¥-Gensungen",
        "age": 80
      }
    ],
    "21": [
      {
        "year": 1946,
        "birthdate": "2165-03-04",
        "name": "Joseph°Kehl, Pfr.i.R., Rüdenschwinden",
        "birth": "4.°März°1865°in°Motzlar",
        "grave": "",
        "age": 81
      },
      {
        "year": 1961,
        "birthdate": "2210-05-17",
        "name": "Rudolf°Dominka, Pfarrer°in°Beuren/Eichsfeld",
        "birth": "17.°Mai°1910°in°Dingelstädt",
        "grave": "",
        "age": 51
      }
    ],
    "22": [
      {
        "year": 1953,
        "birthdate": "2171-05-12",
        "name": "Ignaz°Vocke, Pfr.i.R., Heiligenstadt",
        "birth": "12.°Mai°1871°in°Heiligenstadt",
        "grave": "",
        "age": 82
      },
      {
        "year": 1999,
        "birthdate": "2229-05-29",
        "name": "Eugen°Böhm, Pfr.i.R., GR, Bad°Soden¥-Salmünster",
        "birth": "29.°Mai°1929°in°Höchst/Krs.°Gelnhausen",
        "grave": "Friedhof°Gelnhausen¥-Mitte",
        "age": 70
      },
      {
        "year": 2019,
        "birthdate": "2231-04-16",
        "name": "Emil°Wiegand, Pfr.i.R., GR, Kassel",
        "birth": "16.°April°1931°in°Spahl",
        "grave": "Friedhof°Spahl",
        "age": 88
      }
    ],
    "23": [
      {
        "year": 1971,
        "birthdate": "2198-04-14",
        "name": "Richard°Brodmann, Pfr.i.R., GR, Spahl/Rhön",
        "birth": "14.°April°1898°in°Soisdorf",
        "grave": "Friedhof°Spahl",
        "age": 73
      },
      {
        "year": 1989,
        "birthdate": "2209-07-22",
        "name": "Norbert°Weidlich°(Breslau), Pfr.i.R., Alzenau",
        "birth": "22.°Juli°1909°in°Breslau (Wrocław,°PL¥-50¥-...)",
        "grave": "Friedhof°Rückingen",
        "age": 80
      }
    ],
    "24": [
      {
        "year": 2015,
        "birthdate": "2236-09-01",
        "name": "P.°Matthias°Kircher°OFM, GR",
        "birth": "1.°September°1936°in°Großenbach",
        "grave": "Klosterfriedhof°Frauenberg,°Fulda",
        "age": 79
      },
      {
        "year": 2020,
        "birthdate": "2235-03-04",
        "name": "P.°Flavian°Ascher°OFMCap, Deggingen",
        "birth": "4.°März°1935°in°Sternberg (Šternberk,°CZ¥-785°01)",
        "grave": "Kapuzinerfriedhof°Deggingen",
        "age": 85
      }
    ],
    "25": [
      {
        "year": 1952,
        "birthdate": "2173-05-13",
        "name": "DDr.°Konrad°Lübeck, Prof., Dr.°theol.°et°phil., OStR°i.R., Prälat, Fulda",
        "birth": "13.°Mai°1873°in°Hünfeld",
        "grave": "",
        "age": 79
      },
      {
        "year": 1972,
        "birthdate": "2189-03-14",
        "name": "Alexander°Werthmüller, Pfr.i.R., GR, Pilgerzell",
        "birth": "14.°März°1889°in°Dipperz",
        "grave": "Friedhof°Dipperz",
        "age": 83
      },
      {
        "year": 1983,
        "birthdate": "2202-05-24",
        "name": "Franz°Radtke°(Berlin), Pfr.i.R., Msgr., GR, Bad°Karlshafen",
        "birth": "24.°Mai°1902°in°Berlin",
        "grave": "Friedhof°Bad°Karlshafen",
        "age": 81
      },
      {
        "year": 2018,
        "birthdate": "2232-06-15",
        "name": "Helmut°Wolf, Pfr.i.R., GR, Bad°Sooden¥-Allendorf",
        "birth": "15.°Juni°1932°in°Luditz (Žlutice,°CZ¥-364°52)",
        "grave": "Friedhof°Allendorf",
        "age": 86
      }
    ],
    "26": [
      {
        "year": 1950,
        "birthdate": "2174-07-03",
        "name": "Valentin°Ramb, Pfarrer°in°Gersfeld",
        "birth": "3.°Juli°1874°in°Momberg",
        "grave": "",
        "age": 76
      },
      {
        "year": 1964,
        "birthdate": "2206-09-12",
        "name": "Dr.°Gregor°Nüdling, Dr.°phil., Dechant, Pfarrer°in°Marburg, St.°Johannes°Ev.",
        "birth": "12.°September°1906°in°Poppenhausen",
        "grave": "",
        "age": 58
      }
    ],
    "27": [
      {
        "year": 1951,
        "birthdate": "2197-04-11",
        "name": "Julius°Loidold°(Brünn), Pfr.i.R., Immenhausen",
        "birth": "11.°April°1897°in°Zulb/Krs.°Znaim (Slup,°CZ¥-671°28)",
        "grave": "",
        "age": 54
      },
      {
        "year": 2013,
        "birthdate": "2231-11-28",
        "name": "P.°Hubert°Aloys°Fösges°OFMCap, GR, Münster",
        "birth": "28.°November°1931°in°Ormont (D¥-54597)",
        "grave": "Friedhof°des°Kapuzinerklosters°Münster",
        "age": 81
      }
    ],
    "29": [
      {
        "year": 1954,
        "birthdate": "2188-03-24",
        "name": "Leo°Herbert, Ehrendomkapitular, Dechant, Pfarrer°in°Bad°Hersfeld",
        "birth": "24.°März°1888°in°Zirkenbach",
        "grave": "",
        "age": 66
      },
      {
        "year": 1984,
        "birthdate": "2215-02-24",
        "name": "Kurt°Heinz°(Breslau), Pfr.i.R., GR, Steinau¥-Ulmbach",
        "birth": "24.°Februar°1915°in°Beuthen (Bytom,°PL¥-41¥-9..)",
        "grave": "Friedhof°Ulmbach",
        "age": 69
      },
      {
        "year": 2001,
        "birthdate": "2246-07-31",
        "name": "Klaus°Müller, Pfarrer°in°Zella/Rhön",
        "birth": "31.°Juli°1946°in°Lenterode/Eichsfeld (D¥-37318)",
        "grave": "Friedhof°Zella",
        "age": 55
      },
      {
        "year": 2022,
        "birthdate": "2233-06-29",
        "name": "P.°Alban°Schmitt°OFMCap, Werne",
        "birth": "29.°Juni°1933°in°Mainz",
        "grave": "Friedhof°des°Kapuzinerklosters°Münster",
        "age": 89
      }
    ],
    "30": [
      {
        "year": 1952,
        "birthdate": "2175-12-09",
        "name": "Joseph°Nüdling, Pfarrer°in°Florenberg",
        "birth": "9.°Dezember°1875°in°Poppenhausen",
        "grave": "",
        "age": 76
      }
    ]
  },
  "12": {
    "1": [
      {
        "year": 1938,
        "birthdate": "2190-11-07",
        "name": "Anton°Paul, Dompräbendat, Fulda",
        "birth": "7.°November°1890°in°Emsdorf",
        "grave": "",
        "age": 48
      },
      {
        "year": 1950,
        "birthdate": "2211-07-25",
        "name": "P.°Joseph°Schanz°OMI, Frühmesser°in°Geisa",
        "birth": "25.°Juli°1911°in°Birkenhard (D¥-88447°Warthausen°an°der°Riß)",
        "grave": "Klosterfriedhof°Hünfeld",
        "age": 39
      },
      {
        "year": 1978,
        "birthdate": "2208-11-23",
        "name": "Josef°Hillebrand°(Olmütz), Pfr.i.R., GR, Hünfeld",
        "birth": "23.°November°1908°in°Kunzendorf (Kunčice,°CZ¥-788°32°Staré°Město°pod°Sněžníkem)",
        "grave": "Friedhof°Michelsrombach",
        "age": 70
      },
      {
        "year": 1981,
        "birthdate": "2230-02-18",
        "name": "Emil°Schäfer, Pfr.i.R., Hünfeld",
        "birth": "18.°Februar°1930°in°Kiliansberg",
        "grave": "Friedhof°Arzell",
        "age": 51
      },
      {
        "year": 1986,
        "birthdate": "2229-11-06",
        "name": "Josef°van°Schijndel, Pfarrer°in°Flieden¥-Rückers",
        "birth": "6.°November°1929°in°Helvort (NL¥-5268°Vught)",
        "grave": "Friedhof°Rückers",
        "age": 57
      },
      {
        "year": 1999,
        "birthdate": "2250-02-15",
        "name": "Johannes°Kalisch°(Oeiras¥-Floriano/Fulda), Bischofsvikar, Msgr., Ehrendomkapitular, Pfarrer°in°Maceió/Brasilien",
        "birth": "15.°Februar°1950°in°Bad°Sooden¥-Allendorf",
        "grave": "Friedhof°Bad°Sooden",
        "age": 49
      }
    ],
    "2": [
      {
        "year": 1974,
        "birthdate": "2222-07-24",
        "name": "Hermann°Helfrich, Pfarrer°in°Marborn",
        "birth": "24.°Juli°1922°in°Frankfurt°a.°M.",
        "grave": "Friedhof°Marborn",
        "age": 52
      },
      {
        "year": 1983,
        "birthdate": "2226-09-16",
        "name": "Wolfgang°Schöpping, OStR°i.K., Brachttal¥-Spielberg",
        "birth": "16.°September°1926°in°Rennerod (D¥-56477)",
        "grave": "Friedhof°Lahnstein°(D¥-56112)",
        "age": 57
      },
      {
        "year": 1997,
        "birthdate": "2211-01-22",
        "name": "Aloys°Claus, Pfr.i.R., GR, Ehrendomkapitular, Staudach¥-Egerndach",
        "birth": "22.°Januar°1911°in°Niederorschel/Eichsfeld (D¥-37355)",
        "grave": "Friedhof°Egerndach",
        "age": 86
      }
    ],
    "3": [
      {
        "year": 1967,
        "birthdate": "2188-12-02",
        "name": "Joseph°Filthaut, Pfr.i.R., Fulda",
        "birth": "2.°Dezember°1888°in°Ibbenbüren/Westfalen (D¥-4947.)",
        "grave": "",
        "age": 79
      },
      {
        "year": 1980,
        "birthdate": "2213-10-06",
        "name": "Anton°Leschik, OStR°i.R., Petersberg¥-Steinau",
        "birth": "6.°Oktober°1913°in°Bergstadt (Leśnica,°PL¥-47¥-150)",
        "grave": "Fulda",
        "age": 67
      },
      {
        "year": 1994,
        "birthdate": "2210-01-09",
        "name": "P.°Dr.°Albert°Strobel°OMI, Prof., Pfr.i.R., Fulda",
        "birth": "9.°Januar°1910°in°Niederroedern/Elsaß (F¥-67470)",
        "grave": "Klosterfriedhof°Hünfeld",
        "age": 84
      }
    ],
    "4": [
      {
        "year": 1938,
        "birthdate": "2172-05-07",
        "name": "Heinrich°Große, Pfr.i.R., Bad°Salzschlirf",
        "birth": "7.°Mai°1872°in°Worbis (D¥-37339)",
        "grave": "",
        "age": 66
      },
      {
        "year": 1960,
        "birthdate": "2200-06-30",
        "name": "Ernst°Barabasch°(Breslau), Pfarrer°in°Ferna/Eichsfeld",
        "birth": "30.°Juni°1900°in°Wollstein (Wolsztyn,°PL¥-64¥-200)",
        "grave": "",
        "age": 60
      },
      {
        "year": 1982,
        "birthdate": "2209-02-17",
        "name": "Joseph°Plettenberg, Bischofsvikar, Apostol.°Protonotar, Domkapitular, Fulda",
        "birth": "17.°Februar°1909°in°Bergisch°Gladbach (D¥-514..)",
        "grave": "Fulda",
        "age": 73
      },
      {
        "year": 1983,
        "birthdate": "2217-08-01",
        "name": "Bruno°Klute, Pfarrer°in°Uttrichshausen",
        "birth": "1.°August°1917°in°Oberbimbach",
        "grave": "Friedhof°Niederbieber",
        "age": 66
      },
      {
        "year": 1996,
        "birthdate": "2211-11-19",
        "name": "Rudolf°Armstark°(Leitmeritz), Pfr.i.R., GR, Fulda",
        "birth": "19.°November°1911°in°Luck (Luka,°CZ¥-364°52)",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 85
      },
      {
        "year": 2002,
        "birthdate": "2212-04-01",
        "name": "Josef°Otterbein, Pfr.i.R., GR, Fulda",
        "birth": "1.°April°1912°in°Großenlüder",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 90
      }
    ],
    "5": [
      {
        "year": 1934,
        "birthdate": "2181-12-31",
        "name": "Nikolaus°Goerich, Pfarrer°in°Bickenriede",
        "birth": "31.°Dezember°1881°in°Dingelstädt",
        "grave": "",
        "age": 52
      },
      {
        "year": 1937,
        "birthdate": "2208-11-10",
        "name": "Paul°Scharsky, Kooperator°in°Steinbach",
        "birth": "10.°November°1908°in°Nordhausen (D¥-99734)",
        "grave": "",
        "age": 29
      },
      {
        "year": 1946,
        "birthdate": "2173-04-09",
        "name": "Aloys°Ewald, Pfarrer°in°Altenmittlau",
        "birth": "9.°April°1873°in°Lahrbach",
        "grave": "",
        "age": 73
      },
      {
        "year": 1960,
        "birthdate": "2184-10-18",
        "name": "Michael°Lerch, Pfarrer°in°Struth",
        "birth": "18.°Oktober°1884°in°Wachstedt (D¥-37359)",
        "grave": "",
        "age": 76
      },
      {
        "year": 1994,
        "birthdate": "2214-03-15",
        "name": "Hermann°Schabel, Pfr.i.R., Hünfeld",
        "birth": "15.°März°1914°in°Rasdorf",
        "grave": "Wehrfriedhof°Rasdorf",
        "age": 80
      }
    ],
    "6": [
      {
        "year": 1954,
        "birthdate": "2200-10-22",
        "name": "Aloys°Ständer, Pfarrer°in°Hundeshagen",
        "birth": "22.°Oktober°1900°in°Kirchworbis (D¥-37339)",
        "grave": "",
        "age": 54
      },
      {
        "year": 1967,
        "birthdate": "2192-04-24",
        "name": "Heinrich°Franz°(Leitmeritz), Pfr.i.R., Mardorf",
        "birth": "24.°April°1892°in°Schönborn (Studánka,°CZ¥-407°52°Varnsdorf)",
        "grave": "",
        "age": 75
      },
      {
        "year": 2011,
        "birthdate": "2209-11-27",
        "name": "Heinrich°Unterstell°(Köln), Pfr.i.R., GR, Fulda",
        "birth": "27.°November°1909°in°Kendenich°bei°Köln (D¥-50354°Hürth)",
        "grave": "Friedhof°Künzell",
        "age": 102
      },
      {
        "year": 2017,
        "birthdate": "2246-06-06",
        "name": "Norbert°Lomb, Pfr.i.R., Hess.°Lichtenau¥-Velmeden",
        "birth": "6.°Juni°1946°in°Fulda",
        "grave": "Friedhof°Großalmerode",
        "age": 71
      }
    ],
    "7": [
      {
        "year": 1945,
        "birthdate": "2182-09-18",
        "name": "Joseph°Kircher, Pfr.i.R., Sannerz",
        "birth": "18.°September°1882°in°Borbels/Krs.°Eisenach",
        "grave": "",
        "age": 63
      },
      {
        "year": 1956,
        "birthdate": "2188-12-06",
        "name": "Bernhard°Wand, Pfarrer°in°Berlingerode",
        "birth": "6.°Dezember°1888°in°Heiligenstadt",
        "grave": "",
        "age": 68
      },
      {
        "year": 1959,
        "birthdate": "2189-03-16",
        "name": "Konrad°Fasselabend, Pfr.i.R., Dorfborn",
        "birth": "16.°März°1889°in°Schröck",
        "grave": "",
        "age": 70
      },
      {
        "year": 1989,
        "birthdate": "2214-09-18",
        "name": "Gerhard°Kocourek, Pfr.i.R., Erfurtshausen",
        "birth": "18.°September°1914°in°Apolda (D¥-99510)",
        "grave": "Friedhof°Erfurtshausen",
        "age": 75
      },
      {
        "year": 1991,
        "birthdate": "2214-04-11",
        "name": "Julius°Apeltauer°(Brünn), Pfr.i.R., GR, Wölf",
        "birth": "11.°April°1914°in°Kurlupp (Korolupy,°CZ¥-671°07)",
        "grave": "Friedhof°Wölf",
        "age": 77
      }
    ],
    "8": [
      {
        "year": 1943,
        "birthdate": "2173-10-19",
        "name": "Adam°Dehler, Dechant, Pfarrer°in°Johannesberg",
        "birth": "19.°Oktober°1873°in°Steinbach",
        "grave": "",
        "age": 70
      },
      {
        "year": 1948,
        "birthdate": "2182-09-25",
        "name": "Franz°Schröter, Direktor°des°St.¥-Raphaels¥-Heims°in°Heiligenstadt",
        "birth": "25.°September°1882°in°Dingelstädt",
        "grave": "",
        "age": 66
      },
      {
        "year": 1963,
        "birthdate": "2211-03-13",
        "name": "Josef°Tschöp°(Königgrätz), Pfarrer°in°Steinbach/Eichsfeld",
        "birth": "13.°März°1911°in°Kaile (Kyje,°CZ¥-544°66)",
        "grave": "",
        "age": 52
      },
      {
        "year": 1976,
        "birthdate": "2206-01-31",
        "name": "P.°Paul°Blasius°Kaiser°SVD, Pfarrer°in°Trendelburg",
        "birth": "31.°Januar°1906°in°Kalau (Kaława,°PL¥-66¥-305)",
        "grave": "",
        "age": 70
      },
      {
        "year": 1981,
        "birthdate": "2212-04-19",
        "name": "Philipp°Rogge, Pfr.i.R., GR, Weißenborn¥-Lüderode",
        "birth": "19.°April°1912°in°Birkungen (D¥-37327°Leinefelde¥-Worbis)",
        "grave": "Friedhof°Birkungen",
        "age": 69
      }
    ],
    "9": [
      {
        "year": 1957,
        "birthdate": "2187-11-05",
        "name": "Erich°Feiereis°(Breslau), Pfr.i.R., Küllstedt",
        "birth": "5.°November°1887°in°Glogau (Głogów,°PL¥-67¥-2..)",
        "grave": "",
        "age": 70
      },
      {
        "year": 1974,
        "birthdate": "2194-04-23",
        "name": "Ludwig°Büttner, Pfr.i.R., Hünfeld",
        "birth": "23.°April°1894°in°Hünfeld",
        "grave": "Friedhof°Hünfeld",
        "age": 80
      },
      {
        "year": 1977,
        "birthdate": "2210-08-16",
        "name": "Viktor°Schulze, Pfr.i.R., Küllstedt",
        "birth": "16.°August°1910°in°Prag",
        "grave": "",
        "age": 67
      },
      {
        "year": 1983,
        "birthdate": "2214-04-19",
        "name": "P.°Andreas°Huber°OMI, Pfr.i.R., Rektor, Dresden",
        "birth": "19.°April°1914°in°Weicht°bei°Buchloe (D¥-86860°Jengen)",
        "grave": "Alter°Kath.°Friedhof°Dresden",
        "age": 69
      },
      {
        "year": 1985,
        "birthdate": "2206-01-20",
        "name": "Joseph°Wand, Pfr.i.R., GR, Ershausen",
        "birth": "20.°Januar°1906°in°Holungen/Eichsfeld (D¥-37345°Sonnenstein)",
        "grave": "Friedhof°Ershausen",
        "age": 79
      },
      {
        "year": 1989,
        "birthdate": "2226-04-02",
        "name": "Dr.°Johannes°Bernard°(Berlin), Prof., Erfurt",
        "birth": "2.°April°1926°in°Berlin",
        "grave": "",
        "age": 63
      }
    ],
    "10": [
      {
        "year": 1959,
        "birthdate": "2179-01-30",
        "name": "¥fDDr.°Johannes°B.°Dietz¥0f, Dr.°theol.°et°phil., Titularerzbischof°von°Cotrada, Bischof°von°Fulda°(1939¥_1958)",
        "birth": "30.°Januar°1879°in°Birkach°in°Franken (D¥-96250°Ebensfeld)",
        "grave": "St.¥-Johannes¥-Kapelle°im°Dom°zu°Fulda",
        "age": 80
      },
      {
        "year": 1970,
        "birthdate": "2213-07-19",
        "name": "P.°Otto°Nolte°SVD, Pfarrer°in°Rengelrode/Eichsfeld",
        "birth": "19.°Juli°1913°in°Schachtebich (D¥-37318)",
        "grave": "Friedhof°Rengelrode",
        "age": 57
      },
      {
        "year": 1991,
        "birthdate": "2211-07-04",
        "name": "P.°Sebastian°Zerwas°SDB, Hess.°Lichtenau",
        "birth": "4.°Juli°1911°in°Bell (D¥-56745)",
        "grave": "Friedhof°Bell",
        "age": 80
      }
    ],
    "11": [
      {
        "year": 1952,
        "birthdate": "2169-01-28",
        "name": "Franz°Raabe, Pfr.i.R., Mardorf",
        "birth": "28.°Januar°1869°in°Nordhausen (D¥-99734)",
        "grave": "",
        "age": 83
      },
      {
        "year": 1979,
        "birthdate": "2206-12-11",
        "name": "Eduard°Paul, Pfr.i.R., GR, Emsdorf",
        "birth": "11.°Dezember°1906°in°Emsdorf",
        "grave": "Friedhof°Emsdorf",
        "age": 73
      },
      {
        "year": 1980,
        "birthdate": "2195-12-06",
        "name": "P.°Franz°Xaver°Schiefer°SJ, Pfr.i.R., Köln",
        "birth": "6.°Dezember°1895°in°Köln",
        "grave": "Köln",
        "age": 85
      },
      {
        "year": 1985,
        "birthdate": "2208-06-29",
        "name": "P.°Paul°Franz°Saft°SJ, Berlin",
        "birth": "29.°Juni°1908°in°Dresden",
        "grave": "Berlin¥-Kladow",
        "age": 77
      },
      {
        "year": 1987,
        "birthdate": "2210-07-14",
        "name": "P.°Wilhelm°Bertulf°Schrammen°OFM, Pfr.i.R., Heinsberg",
        "birth": "14.°Juli°1910°in°Wegberg (D¥-41844)",
        "grave": "Friedhof°Mönchengladbach",
        "age": 77
      }
    ],
    "12": [
      {
        "year": 1961,
        "birthdate": "2174-01-18",
        "name": "Dr.°Bernard°Mock, Dr.°phil., Prälat, Domkapitular°in°Fulda",
        "birth": "18.°Januar°1874°in°Küllstedt (D¥-37359)",
        "grave": "",
        "age": 87
      },
      {
        "year": 1983,
        "birthdate": "2191-03-04",
        "name": "Paul°Fichtner°(Leitmeritz), Pfr.i.R., GR, Sondershausen",
        "birth": "4.°März°1891°in°Landeshut (Kamienna°Góra,°PL¥-58¥-40.)",
        "grave": "Friedhof°Sondershausen",
        "age": 92
      },
      {
        "year": 2014,
        "birthdate": "2231-11-18",
        "name": "Hermann°Röder, Pfr.i.R., GR, Hofbieber¥-Schwarzbach",
        "birth": "18.°November°1931°in°Schwarzbach",
        "grave": "Friedhof°Hofbieber¥-Schwarzbach",
        "age": 83
      }
    ],
    "13": [
      {
        "year": 1987,
        "birthdate": "2213-02-22",
        "name": "Albert°Otto, Pfr.i.R., Neustadt/Eichsfeld",
        "birth": "22.°Februar°1913°in°Mühlhausen/Thür. (D¥-99974)",
        "grave": "",
        "age": 74
      },
      {
        "year": 2010,
        "birthdate": "2222-05-27",
        "name": "Vinzenz°Trageser, Pfr.i.R., GR, Fulda",
        "birth": "27.°Mai°1922°in°Altenmittlau",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 88
      }
    ],
    "14": [
      {
        "year": 1946,
        "birthdate": "2177-08-27",
        "name": "Heinrich°Goebel, Prof., OStR°i.R., Fulda",
        "birth": "27.°August°1877°in°Fulda",
        "grave": "",
        "age": 69
      },
      {
        "year": 1967,
        "birthdate": "2191-06-21",
        "name": "Aloys°Wehner, Pfr.i.R., Geisa",
        "birth": "21.°Juni°1891°in°Kranlucken",
        "grave": "",
        "age": 76
      },
      {
        "year": 1967,
        "birthdate": "2213-10-09",
        "name": "Anton°Trüschler, Pfarrer°in°Helmsdorf/Eichsfeld",
        "birth": "9.°Oktober°1913°in°Kleinlüder",
        "grave": "",
        "age": 54
      },
      {
        "year": 2023,
        "birthdate": "2253-05-14",
        "name": "Hans°Stein°(Radom/Fulda), Pfr.i.R., Marl",
        "birth": "14.°Mai°1953°in°Eichrode (Roszowicki°Las,°PL¥-47¥-253)",
        "grave": "Friedhof°Większyce/Polen",
        "age": 70
      }
    ],
    "15": [
      {
        "year": 1920,
        "birthdate": "2155-05-20",
        "name": "Dr.°Anton°Fischer, Dechant, Pfarrer°in°Poppenhausen",
        "birth": "20.°Mai°1855°in°Roßdorf",
        "grave": "",
        "age": 65
      },
      {
        "year": 1952,
        "birthdate": "2187-02-04",
        "name": "August°Wassermann, Pfr.i.R., Flieden",
        "birth": "4.°Februar°1887°in°Schwarzbach",
        "grave": "",
        "age": 65
      },
      {
        "year": 1975,
        "birthdate": "2202-12-23",
        "name": "Aloysius°Vogt, Wehrmachts-Oberpfr.i.R., Frankfurt°a.°M.",
        "birth": "23.°Dezember°1902°in°Körnbach",
        "grave": "Friedhof°Körnbach",
        "age": 72
      },
      {
        "year": 2000,
        "birthdate": "2223-01-24",
        "name": "Norbert°Weber, Pfr.i.R., Msgr., Fulda",
        "birth": "24.°Januar°1923°in°Fulda",
        "grave": "Zentralfriedhof°Fulda",
        "age": 77
      },
      {
        "year": 2016,
        "birthdate": "2267-08-03",
        "name": "Matthias°Krieg, Pfr., GR, Fulda",
        "birth": "3.°August°1967°in°Volkmarsen",
        "grave": "Friedhof°Marburg¥-Ginseldorf",
        "age": 49
      }
    ],
    "16": [
      {
        "year": 1933,
        "birthdate": "2168-09-06",
        "name": "Wilhelm°Hülsmann, Pfarrer°in°Anzefahr",
        "birth": "6.°September°1868°in°Füchtorf/Krs.°Warendorf (D¥-48336°Sassenberg)",
        "grave": "",
        "age": 65
      },
      {
        "year": 1946,
        "birthdate": "2182-07-05",
        "name": "Karl°Ellenbrand, Pfarrer°in°Eiterfeld",
        "birth": "5.°Juli°1882°in°Ahl",
        "grave": "",
        "age": 64
      },
      {
        "year": 1952,
        "birthdate": "2178-04-09",
        "name": "Eugen°Wand, Pfr.i.R., Küllstedt",
        "birth": "9.°April°1878°in°Breitenworbis (D¥-37339)",
        "grave": "",
        "age": 74
      },
      {
        "year": 1964,
        "birthdate": "2187-05-04",
        "name": "P.°Bernardin°Höflich°OFM, Hausgeistlicher°im°St.¥-Elisabeth¥-Krankenhaus°in°Eisenach",
        "birth": "4.°Mai°1887°in°Kreiwitz (Skrzypiec,°PL¥-48¥-231°Lubrza)",
        "grave": "",
        "age": 77
      },
      {
        "year": 1970,
        "birthdate": "2213-11-30",
        "name": "Leo°Schramm, Dechant, Pfarrer°in°Sömmerda",
        "birth": "30.°November°1913°in°Lütter",
        "grave": "Fulda",
        "age": 57
      },
      {
        "year": 1976,
        "birthdate": "2215-01-29",
        "name": "Josef°Preßner°(Prag), Pfarrer°in°Haimbach",
        "birth": "29.°Januar°1915°in°Worka (Borek,°CZ¥-364°52)",
        "grave": "",
        "age": 61
      },
      {
        "year": 1977,
        "birthdate": "2210-06-29",
        "name": "Franz°Faupel, Pfr.i.R., Fulda",
        "birth": "29.°Juni°1910°in°Fritzlar",
        "grave": "Friedhof°Kämmerzell",
        "age": 67
      },
      {
        "year": 1988,
        "birthdate": "2212-12-07",
        "name": "Hermann°Goeb, Dechant, Pfarrer°in°Lahrbach",
        "birth": "7.°Dezember°1912°in°Fulda",
        "grave": "Friedhof°Lahrbach",
        "age": 76
      }
    ],
    "17": [
      {
        "year": 1955,
        "birthdate": "2206-08-02",
        "name": "Otto°Schröter, Pfr.i.R., Mühlhausen",
        "birth": "2.°August°1906°in°Breitenbach/Eichsfeld (D¥-37327°Leinefelde¥-Worbis)",
        "grave": "",
        "age": 49
      },
      {
        "year": 1977,
        "birthdate": "2212-09-01",
        "name": "Franz°Mayer°(Prag), Pfr.i.R., Braunfels/Lahn",
        "birth": "1.°September°1912°in°Neuzedlisch (Nové°Sedliště,°CZ¥-348°01)",
        "grave": "Friedhof°Windecken",
        "age": 65
      },
      {
        "year": 2022,
        "birthdate": "2239-02-10",
        "name": "Winfried°Reith, Stadtpfr.i.R., Msgr., GR, Ehrendomkapitular, Fulda",
        "birth": "10.°Februar°1939°in°Rüsselsheim (D¥-65428)",
        "grave": "Friedhof°am°Frauenberg,°Fulda",
        "age": 83
      }
    ],
    "18": [
      {
        "year": 1944,
        "birthdate": "2173-05-19",
        "name": "Rudolf°Weber, Dechant, Pfarrer°in°Hilders",
        "birth": "19.°Mai°1873°in°Geismar",
        "grave": "",
        "age": 71
      }
    ],
    "19": [
      {
        "year": 1962,
        "birthdate": "2191-03-01",
        "name": "Wilhelm°Kotzur°(Breslau), Pfr.i.R., Berggrub°b.°Landshut",
        "birth": "1.°März°1891°in°Guhrau (Góra,°PL¥-56¥-200)",
        "grave": "",
        "age": 71
      },
      {
        "year": 1973,
        "birthdate": "2187-05-05",
        "name": "Friedrich°Wieden°(Leitmeritz), Pfr.i.R., GR, Breitenholz/Eichsfeld",
        "birth": "5.°Mai°1887°in°Haida (Nový°Bor,°CZ¥-47.°..)",
        "grave": "Friedhof°Breitenholz",
        "age": 86
      },
      {
        "year": 1973,
        "birthdate": "2209-03-22",
        "name": "Adolf°Krause°(Königgrätz), Pfr.i.R., Altötting",
        "birth": "22.°März°1909°in°Merkelsdorf (Zdoňov,°CZ¥-549°57°Teplice°nad°Metují)",
        "grave": "Friedhof°Altötting",
        "age": 64
      },
      {
        "year": 1983,
        "birthdate": "2208-03-14",
        "name": "Moritz°Weinrich, Caritasdirektor°i.R., Prälat, GR, Steinbach°a.°d.°Milseburg",
        "birth": "14.°März°1908°in°Steinbach/Eichsfeld (D¥-37308)",
        "grave": "Fulda",
        "age": 75
      },
      {
        "year": 1987,
        "birthdate": "2234-04-25",
        "name": "P.°Bernhard°Ferkinghoff°OMI, Allerheiligenberg°bei°Lahnstein",
        "birth": "25.°April°1934°in°Aachen",
        "grave": "Friedhof°Treis-Karden°(D¥-56253)",
        "age": 53
      }
    ],
    "20": [
      {
        "year": 1937,
        "birthdate": "2164-02-02",
        "name": "Theodor°Bermoser, Pfr.i.R., Steinbach",
        "birth": "2.°Februar°1864°in°Fritzlar",
        "grave": "",
        "age": 73
      },
      {
        "year": 1967,
        "birthdate": "2203-10-13",
        "name": "Alfons°Scholz, Pfr.i.R., Dietershan",
        "birth": "13.°Oktober°1903°in°Kassel",
        "grave": "",
        "age": 64
      },
      {
        "year": 1971,
        "birthdate": "2212-01-01",
        "name": "Albin°Metze, Pfarrer°in°Mackenrode/Eichsfeld",
        "birth": "1.°Januar°1912°in°Zella/Eichsfeld (D¥-37351°Dingelstädt)",
        "grave": "Friedhof°Mackenrode",
        "age": 59
      },
      {
        "year": 1980,
        "birthdate": "2215-12-07",
        "name": "Josef°Lerner°(Essen), Rektor, Archivar°i.R., Fulda",
        "birth": "7.°Dezember°1915°in°Oberhausen",
        "grave": "Fulda",
        "age": 65
      },
      {
        "year": 1983,
        "birthdate": "2217-12-14",
        "name": "Franz°Schlehuber, GR, Pfarrer°in°Kleinsassen",
        "birth": "14.°Dezember°1917°in°Allmus",
        "grave": "Friedhof°Kleinsassen",
        "age": 66
      },
      {
        "year": 2022,
        "birthdate": "2251-01-27",
        "name": "Hans¥-Jürgen°Elbrecht, Pfr.i.R., Netphen¥-Eschenbach",
        "birth": "27.°Januar°1951°in°Oberissigheim",
        "grave": "Friedhof°Netphen¥-Eschenbach",
        "age": 71
      }
    ],
    "21": [
      {
        "year": 1995,
        "birthdate": "2213-02-03",
        "name": "Dr.°Bernhard°Opfermann, Dr.°phil., Pfr.i.R., Hildesheim",
        "birth": "3.°Februar°1913°in°Kassel",
        "grave": "Friedhof°Struth",
        "age": 82
      }
    ],
    "22": [
      {
        "year": 1949,
        "birthdate": "2185-02-17",
        "name": "DDr.°Georg°Otto°Müller, Prof.°em., Dr.°theol.°et°phil., Dechant, Pfarrer°in°Hilders",
        "birth": "17.°Februar°1885°in°Hanau",
        "grave": "",
        "age": 64
      },
      {
        "year": 1982,
        "birthdate": "2218-12-19",
        "name": "Stephan°Kral°(Königgrätz), Pfr.i.R., Heiligenstadt",
        "birth": "19.°Dezember°1918°in°Schönbrunn (Jedlová,°CZ¥-569°91)",
        "grave": "Friedhof°Rohrberg°(D¥-37318°Hanstein-Rusteberg)",
        "age": 64
      },
      {
        "year": 1992,
        "birthdate": "2227-07-07",
        "name": "Michael°Kollmann, Diakon, Stadtallendorf",
        "birth": "7.°Juli°1927°in°Secul/Rumänien (RO¥-320005°Reșița)",
        "grave": "Friedhof°Stadtallendorf",
        "age": 65
      },
      {
        "year": 1997,
        "birthdate": "2222-08-20",
        "name": "Paul°Seidel°(Breslau), Pfr.i.R., Niedaltdorf/Krs.°Saarlouis",
        "birth": "20.°August°1922°in°Rasselwitz (Racławiczki,°PL¥-47¥-364)",
        "grave": "Friedhof°Niedaltdorf°(D¥-66780)",
        "age": 75
      }
    ],
    "23": [
      {
        "year": 1955,
        "birthdate": "2174-08-19",
        "name": "P.°Franz°Willmes°SJ, Hausgeistlicher°in°Worbis",
        "birth": "19.°August°1874°in°Heimicke (D¥-57489°Drolshagen)",
        "grave": "",
        "age": 81
      },
      {
        "year": 2010,
        "birthdate": "2237-02-12",
        "name": "Gerhard°Dietrich, Pfr.i.R., Hammelburg",
        "birth": "12.°Februar°1937°in°Martinfeld/Eichsfeld (D¥-37308°Schimberg)",
        "grave": "Friedhof°Martinfeld/Eichsfeld",
        "age": 73
      },
      {
        "year": 2020,
        "birthdate": "2237-05-12",
        "name": "P.°Dominikus°Ramljak°OFM, GR, Posušje/Herzegowina",
        "birth": "12.°Mai°1937°in°Posušje (BIH¥-88240)",
        "grave": "Friedhof°Posušje",
        "age": 83
      },
      {
        "year": 2024,
        "birthdate": "2238-04-22",
        "name": "Dr.°Norbert°Zwergel, Pfr.i.R., Msgr., GR, Ehrendomkapitular, Freigericht¥-Somborn",
        "birth": "22.°April°1938°in°Horbach",
        "grave": "Friedhof°Altenmittlau",
        "age": 86
      }
    ],
    "24": [
      {
        "year": 1941,
        "birthdate": "2196-07-09",
        "name": "Augustin°Eckardt, Pfarrer°in°Rohrberg",
        "birth": "9.°Juli°1896°in°Beuren/Eichsfeld (D¥-37327°Leinefelde¥-Worbis)",
        "grave": "",
        "age": 45
      },
      {
        "year": 1948,
        "birthdate": "2182-02-27",
        "name": "Ferdinand°Krah, Pfarrer°in°Kassel°bei°Gelnhausen",
        "birth": "27.°Februar°1882°in°Weidenau/Krs.°Fulda",
        "grave": "",
        "age": 66
      },
      {
        "year": 1978,
        "birthdate": "2189-06-22",
        "name": "Arnold°Motz, Pfr.i.R., GR, Birkenfelde",
        "birth": "22.°Juni°1889°in°Diedorf",
        "grave": "Friedhof°Birkenfelde",
        "age": 89
      },
      {
        "year": 1990,
        "birthdate": "2221-07-02",
        "name": "Hermann¥-Josef°Häusler, Pfarrer°in°Erfurt",
        "birth": "2.°Juli°1921°in°Weimar",
        "grave": "",
        "age": 69
      },
      {
        "year": 1999,
        "birthdate": "2210-03-15",
        "name": "P.°Wilhelm°Sermon°SVD",
        "birth": "15.°März°1910°in°Hilfarth (D¥-41836°Hückelhoven)",
        "grave": "",
        "age": 89
      }
    ],
    "25": [
      {
        "year": 1944,
        "birthdate": "2165-07-08",
        "name": "Heinrich°Gnau, Pfarrer°in°Oberufhausen",
        "birth": "8.°Juli°1865°in°Stausebach",
        "grave": "",
        "age": 79
      },
      {
        "year": 1960,
        "birthdate": "2198-05-25",
        "name": "Dr.°Adolf°Schreiber°(Breslau), Pfarrer°in°Veckerhagen",
        "birth": "25.°Mai°1898°in°Friedersdorf (Čaková,°CZ¥-793°16°Zátor)",
        "grave": "Friedhof°Veckerhagen",
        "age": 62
      },
      {
        "year": 1986,
        "birthdate": "2205-03-23",
        "name": "P.°Dr.°Gerhard°Koch°SJ, Prof., Dr.°phil., Marburg",
        "birth": "23.°März°1905°in°Hagen/Westfalen",
        "grave": "Marburg",
        "age": 81
      }
    ],
    "26": [
      {
        "year": 1983,
        "birthdate": "2211-05-10",
        "name": "Wilhelm°Klaus, Pfarrer°in°Leinefelde",
        "birth": "10.°Mai°1911°in°Birkungen (D¥-37327°Leinefelde¥-Worbis)",
        "grave": "Friedhof°Birkungen",
        "age": 72
      }
    ],
    "27": [
      {
        "year": 1933,
        "birthdate": "2168-08-12",
        "name": "Robert°Heddergott, Dechant, Pfarrer°in°Heiligenstadt, St.°Aegidii",
        "birth": "12.°August°1868°in°Dingelstädt",
        "grave": "",
        "age": 65
      },
      {
        "year": 1967,
        "birthdate": "2192-09-01",
        "name": "Adolf°Lorenz°(Leitmeritz), Pfr.i.R., Deuna°üb.°Leinefelde",
        "birth": "1.°September°1892°in°Schatzlar (Žacléř,°CZ¥-542°01)",
        "grave": "",
        "age": 75
      },
      {
        "year": 1969,
        "birthdate": "2211-01-24",
        "name": "P.°Josef°Schwan°SAC, GR, Männerseelsorger°der°Diözese°Fulda",
        "birth": "24.°Januar°1911°in°Betzdorf (D¥-57518)",
        "grave": "",
        "age": 58
      },
      {
        "year": 1989,
        "birthdate": "2207-02-19",
        "name": "DDr.°Adalbert°Dölle, Pfr.i.R., Fulda",
        "birth": "19.°Februar°1907°in°Kirchworbis (D¥-37339)",
        "grave": "Friedhof°Kirchworbis",
        "age": 82
      }
    ],
    "28": [
      {
        "year": 1998,
        "birthdate": "2221-11-04",
        "name": "Friedrich°Dietz, Msgr., Ordinariatsrat°i.R., Künzell",
        "birth": "4.°November°1921°in°Hünfeld",
        "grave": "Friedhof°Künzell",
        "age": 77
      },
      {
        "year": 2021,
        "birthdate": "2243-04-09",
        "name": "Wilfried°Umlauf, Pfr.i.R., Bad°Orb",
        "birth": "9.°April°1943°in°Bärn (Moravský°Beroun,°CZ¥-793°05)",
        "grave": "Friedhof°Bad°Soden¥-Salmünster¥-Mernes",
        "age": 78
      }
    ],
    "29": [
      {
        "year": 1923,
        "birthdate": "2167-10-31",
        "name": "Heinrich°Burchard, Pfarrer°in°Kassel, St.°Michael",
        "birth": "31.°Oktober°1867°in°Kleinbartloff (D¥-37355°Niederorschel)",
        "grave": "",
        "age": 56
      },
      {
        "year": 1925,
        "birthdate": "2166-09-10",
        "name": "Andreas°Weigand, Pfarrer°in°Großentaft",
        "birth": "10.°September°1866°in°Altenmittlau",
        "grave": "",
        "age": 59
      },
      {
        "year": 1969,
        "birthdate": "2204-11-15",
        "name": "Albert°Klesper, Pfr.i.R., Ungedanken",
        "birth": "15.°November°1904°in°Löschenrod",
        "grave": "",
        "age": 65
      },
      {
        "year": 1972,
        "birthdate": "2195-10-07",
        "name": "Friedrich°Leo°Kreß, Pfr.i.R., Liebhards",
        "birth": "7.°Oktober°1895°in°Saarburg (D¥-54439)",
        "grave": "Friedhof°Rasdorf",
        "age": 77
      }
    ],
    "30": [
      {
        "year": 1929,
        "birthdate": "2173-08-12",
        "name": "Karl°Alexander°Abel, Pfarrer°in°Frankfurt¥-Fechenheim",
        "birth": "12.°August°1873°in°Buttlar",
        "grave": "",
        "age": 56
      },
      {
        "year": 1946,
        "birthdate": "2173-05-02",
        "name": "Oswald°Kullmann, Pfr.i.R., Breitenholz",
        "birth": "2.°Mai°1873°in°Breitenholz (D¥-37327°Leinefelde¥-Worbis)",
        "grave": "",
        "age": 73
      },
      {
        "year": 1966,
        "birthdate": "2210-01-24",
        "name": "Paul°Litz, Kpl.i.R., Eiterfeld",
        "birth": "24.°Januar°1910°in°Leibolz",
        "grave": "",
        "age": 56
      },
      {
        "year": 1981,
        "birthdate": "2196-12-07",
        "name": "DDr.°Gottfried°Ambrosius°Flügel, Prof.°em., Dr.°theol.°et°phil., Prälat, Domkapitular°i.R., Fulda",
        "birth": "7.°Dezember°1896°in°Mittelberg°(Steinwand)",
        "grave": "Fulda",
        "age": 85
      },
      {
        "year": 1998,
        "birthdate": "2217-01-28",
        "name": "Karl°Keil°(Würzburg), BGS¥-Oberpfarrer°a.D., Würzburg",
        "birth": "28.°Januar°1917°in°Würzburg",
        "grave": "Waldfriedhof°Würzburg",
        "age": 81
      }
    ],
    "31": [
      {
        "year": 1957,
        "birthdate": "2181-08-11",
        "name": "Johannes°Krebs, Pfarrer°in°Lengenfeld°u.°St.",
        "birth": "11.°August°1881°in°Uder/Eichsfeld (D¥-37318)",
        "grave": "",
        "age": 76
      },
      {
        "year": 1982,
        "birthdate": "2201-10-28",
        "name": "Dr.°Gregor°Krüger°(Schneidemühl), Prälat, Ordinariatsrat°i.R., Erfurt",
        "birth": "28.°Oktober°1901°in°Schloppe (Człopa,°PL¥-78¥-630)",
        "grave": "Erfurt",
        "age": 81
      },
      {
        "year": 1995,
        "birthdate": "2215-12-02",
        "name": "Anton°Kowalewski°(Ermland), Pfr.i.R., GR, Bad°Orb",
        "birth": "2.°Dezember°1915°in°Plautzig (Pluski,°PL¥-11¥-034)",
        "grave": "Waldfriedhof°Hailer/Meerholz",
        "age": 80
      },
      {
        "year": 1998,
        "birthdate": "2233-10-24",
        "name": "Walter°Heine, Pfarrer°in°Haina°(Kloster)",
        "birth": "24.°Oktober°1933°in°Birnai (Brná,°CZ¥-400°01)",
        "grave": "Friedhof°Gemünden",
        "age": 65
      },
      {
        "year": 2022,
        "birthdate": "2227-04-16",
        "name": "¥fPapst°Benedikt°XVI.¥0f, Bischof von Rom",
        "birth": "16.°April°1927°in°Marktl°am°Inn (D¥-84533)",
        "grave": "Basilika°St.°Peter°in°Rom",
        "age": 95
      }
    ]
  }
};