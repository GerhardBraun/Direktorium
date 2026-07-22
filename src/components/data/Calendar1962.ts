// Kalender nach dem Römischen Kalender von 1962 (Vetus Ordo).
// Gliederung: Monat -> Tag -> Array der an diesem Tag anzuzeigenden Einträge.
// Monat 13 enthält die Sonderdatumsformate (analog zu Calendar.ts):
// swd.combined (z.B. "o-6-4"), dateFormats.ordinal und dateFormats.ordinalLast.
interface Calendar1962Data {
  [month: string]: {
    [day: string]: string[];
  };
}

export const calendar1962Data: Calendar1962Data = {
  "1": {
    "11": [
      "Comm. S. Hygini Papæ°et°Mart."
    ],
    "13": [
      "In Comm. Baptismatis D. N. I. C."
    ],
    "14": [
      "S. Hilarii Ep.,°Conf.°et°Eccl.°Doct. (13.01.)",
      "Comm. S. Felicis Presb.°et°Mart."
    ],
    "15": [
      "S. Pauli primi Eremitæ, Conf.",
      "Comm. S. Mauri Abb."
    ],
    "16": [
      "S. Marcelli I Papæ°et°Mart."
    ],
    "18": [
      "Comm. S. Priscæ Virg.°et°Mart."
    ],
    "19": [
      "Comm. Ss. Marii, Marthæ, Audifacis°et°Abachum Mm.",
      "Comm. S. Canuti Regis, Mart. (10.07.)"
    ],
    "22": [
      "Ss. Vincentii et Anastasii Mm. (23.01.)"
    ],
    "23": [
      "S. Raymundi de Peñafort Conf. (07.01.)",
      "Comm. S. Emerentianæ Virg.°et°Mart."
    ],
    "24": [
      "S. Timothei Ep.°et°Mart. (26.01.)"
    ],
    "26": [
      "S. Polycarpi Ep.°et°Mart. (23.02.)"
    ],
    "27": [
      "S. Ioannis Chrysostomi Ep.,°Conf.°et°Eccl.°Doct. (15.09.)"
    ],
    "28": [
      "S. Petri Nolasci Conf.",
      "Comm. S. Agnetis Virg.°et°Mart. secundo"
    ],
    "29": [
      "S. Francisci Salesii Ep.,°Conf.°et°Eccl.°Doct. (24.01.)"
    ],
    "30": [
      "S. Martinæ Virg.°et°Mart."
    ],
    "5": [
      "Comm. S. Telesphori Papæ°et°Mart."
    ]
  },
  "2": {
    "1": [
      "S. Ignatii Ep.°et°Mart. (17.10.)"
    ],
    "12": [
      "Ss.°septem°Fundatorum Ordinis°Servorum°B.°Mariæ°Virg., Confessorum (17.02.)"
    ],
    "14": [
      "Comm. S. Valentini Presb.°et°Mart."
    ],
    "15": [
      "Comm. Ss. Faustini et Iovitæ Mm."
    ],
    "18": [
      "Comm. S. Simeonis Ep.°et°Mart."
    ],
    "23": [
      "S. Petri Damiani Ep.,°Conf.°et°Eccl.°Doct. (21.02.)"
    ],
    "27": [
      "S. Gabrielis a Virgine Perdolente, Conf."
    ],
    "4": [
      "S. Andreæ Corsini Ep.°et°Conf."
    ],
    "6": [
      "S. Titi Ep.°et°Conf. (26.01.)",
      "Comm. S. Dorotheæ Virg.°et°Mart."
    ],
    "7": [
      "S. Romualdi Abb. (19.06.)"
    ],
    "8": [
      "S. Ioannis de Matha Conf."
    ],
    "9": [
      "S. Cyrilli Ep. Alex., Conf.°et°Eccl.°Doct. (27.06.)",
      "Comm. S. Apolloniæ Virg.°et°Mart."
    ]
  },
  "3": {
    "10": [
      "Ss. Quadraginta Martyrum"
    ],
    "12": [
      "S. Gregorii I Papæ, Conf.°et°Eccl.°Doct. (03.09.)"
    ],
    "17": [
      "S. Patricii Ep.°et°Conf."
    ],
    "21": [
      "S. Benedicti Abb. (11.07.)"
    ],
    "24": [
      "S. Gabrielis Archang. (29.09.)"
    ],
    "27": [
      "S. Ioannis Damasceni Conf.°et°Eccl.°Doct. (04.12.)"
    ],
    "28": [
      "S. Ioannis de Capistrano Conf. (23.10.)"
    ],
    "4": [
      "Comm. S. Lucii I Papæ°et°Mart."
    ],
    "6": [
      "Ss. Perpetuæ et Felicitatis Mm. (07.03.)"
    ],
    "7": [
      "S. Thomæ de Aquino Conf.°et°Eccl.°Doct. (28.01.)"
    ]
  },
  "4": {
    "11": [
      "S. Leonis I Papæ, Conf.°et°Eccl.°Doct. (10.11.)"
    ],
    "13": [
      "S. Hermenegildi Mart."
    ],
    "14": [
      "S. Iustini Mart. (01.06.)",
      "Comm. Ss. Tiburtii, Valeriani et°Maximi°Mm."
    ],
    "17": [
      "Comm. S. Aniceti Papæ°et°Mart."
    ],
    "22": [
      "Ss. Soteris et Caii Pp.°et°Mm."
    ],
    "26": [
      "Ss. Cleti et Marcellini Pp.°et°Mm."
    ],
    "28": [
      "S. Pauli a Cruce Conf. (19.10.)"
    ],
    "29": [
      "S. Petri Mart."
    ],
    "30": [
      "S. Catharinæ Senensis Virg. (29.04.)"
    ]
  },
  "5": {
    "10": [
      "S. Antonini Ep.°et°Conf.",
      "Comm. Ss. Gordiani et Epimachi Mm."
    ],
    "11": [
      "Ss. Philippi et Iacobi App. (03.05.)"
    ],
    "13": [
      "S. Roberti Bellarmino Ep.,°Conf.°et°Eccl.°Doct. (17.09.)"
    ],
    "14": [
      "Comm. S. Bonifatii Mart."
    ],
    "15": [
      "S. Ioannis Baptistæ de la Salle Conf. (07.04.)"
    ],
    "16": [
      "S. Ubaldi Ep.°et°Conf."
    ],
    "17": [
      "S. Paschalis Baylon Conf."
    ],
    "18": [
      "S. Venantii Mart."
    ],
    "19": [
      "S. Petri Cælestini Papæ°et°Conf.",
      "Comm. S. Pudentianæ Virg."
    ],
    "24": [
      "S. Gregorii VII Papæ°et°Conf. (25.05.)"
    ],
    "25": [
      "Comm. S. Urbani I Papæ°et°Mart.",
      "S. Philippi Nerii Conf. (26.05.)"
    ],
    "26": [
      "Comm. S. Eleutherii Papæ°et°Mart.",
      "S. Bedæ Venerabilis Conf.°et°Eccl.°Doct. (25.05.)"
    ],
    "27": [
      "Comm. S. Ioannis I Papæ°et°Mart. (18.05.)",
      "S. Augustini Ep.°et°Conf."
    ],
    "28": [
      "S. Mariæ Magdalenæ de Pazzis Virg. (25.05.)"
    ],
    "29": [
      "Comm. S. Felicis I Papæ°et°Mart."
    ],
    "3": [
      "Comm. Ss. Alexandri, Eventii et Theoduli Mm., ac°S.°Iuvenalis°Ep.°et°Conf."
    ],
    "30": [
      "B. Mariæ Virg. Reginæ (22.08.)"
    ],
    "31": [
      "Comm. S. Petronillæ Virg."
    ],
    "4": [
      "S. Monicæ Vid. (27.08.)"
    ],
    "5": [
      "S. Pii V Papæ°et°Conf. (30.04.)"
    ],
    "7": [
      "S. Stanislai Ep.°et°Mart. (11.04.)"
    ],
    "9": [
      "S. Gregorii Nazianzeni Ep.,°Conf.°et°Eccl.°Doct. (02.01.)"
    ]
  },
  "6": {
    "1": [
      "S. Angelæ Mericiæ Virg. (27.01.)"
    ],
    "10": [
      "S. Margaritæ Reg.,°Vid. (16.11.)"
    ],
    "12": [
      "S. Ioannis de S. Facundo Conf.",
      "Comm. Ss. Basilidis, Cyrini, Naboris°et°Nazarii°Mm."
    ],
    "14": [
      "S. Basilii Magni Ep.,°Conf.°et°Eccl.°Doct. (02.01.)"
    ],
    "15": [
      "Comm. Ss. Viti, Modesti atque°Crescentiæ°Mm."
    ],
    "17": [
      "S. Gregorii Barbadici Ep.°et°Conf."
    ],
    "18": [
      "S. Ephræm Syri Diaconi, Conf.°et°Eccl.°Doct. (09.06.)",
      "Comm. Ss. Marci et Marcelliani Mm."
    ],
    "19": [
      "S. Iulianæ de Falconeriis Virg.",
      "Comm. Ss. Gervasii et Protasii Mm."
    ],
    "20": [
      "Comm. S. Silvestri Papæ°et°Mart."
    ],
    "25": [
      "S. Gulielmi Abb."
    ],
    "26": [
      "Ss. Ioannis et Pauli Mm."
    ],
    "4": [
      "S. Francisci Caraccioli Conf."
    ],
    "9": [
      "Comm. Ss. Primi et Feliciani Mm."
    ]
  },
  "7": {
    "1": [
      "Pretiosissimi Sanguinis D. N. I. C."
    ],
    "10": [
      "Ss. septem Fratrum Mm., ac°Ss.°Rufinæ°et°Secundæ°Vv.°et°Mm."
    ],
    "11": [
      "Comm. S. Pii I Papæ°et°Mart."
    ],
    "12": [
      "S. Ioannis Gualberti Abb.",
      "Comm. Ss. Naboris et Felicis Mm."
    ],
    "14": [
      "S. Bonaventuræ Ep.,°Conf.°et°Eccl.°Doct. (15.07.)"
    ],
    "15": [
      "S. Henrici Imperatoris, Conf. (13.07.)"
    ],
    "17": [
      "Comm. S. Alexii Conf."
    ],
    "18": [
      "S. Camilli de Lellis Conf. (14.07.)",
      "Comm. Ss. Symphorosæ et°septem°eius°filiorum°Mm."
    ],
    "19": [
      "S. Vincentii a Paulo Conf. (27.09.)"
    ],
    "2": [
      "Comm. Ss. Processi et Martiniani Mm."
    ],
    "20": [
      "S. Hieronymi Æmiliani Conf. (08.02.)"
    ],
    "21": [
      "Comm. S. Praxedis Virg."
    ],
    "23": [
      "S. Apollinaris Ep.°et°Mart.",
      "Comm. S. Liborii Ep.°et°Conf."
    ],
    "24": [
      "Comm. S. Christinæ Virg.°et°Mart."
    ],
    "25": [
      "Comm. S. Christophori Mart. (24.07.)"
    ],
    "27": [
      "Comm. S. Pantaleonis Mart."
    ],
    "28": [
      "Ss. Nazarii et Celsi Mm., Victoris°I°Papæ°et°Mart., ac°Innocentii°I°Papæ°et°Conf."
    ],
    "29": [
      "Comm. Ss. Felicis, Simplicii, Faustini°et°Beatricis°Mm."
    ],
    "3": [
      "S. Irenæi Ep.°et°Mart. (28.06.)"
    ],
    "30": [
      "Comm. Ss. Abdon et Sennen Mm."
    ],
    "7": [
      "Ss. Cyrilli et Methodii Epp.°et°Cc. (14.02.)"
    ],
    "8": [
      "S. Elisabeth Reg.,°Vid. (04.07.)"
    ]
  },
  "8": {
    "1": [
      "Comm. Ss. Machabæorum Mm."
    ],
    "10": [
      "Comm. Ss. Tiburtii et Susannæ Virg., Mm."
    ],
    "11": [
      "Comm. Ss. Hippolyti et Cassiani Mm. (13.08.)"
    ],
    "14": [
      "Comm. S. Eusebii Conf."
    ],
    "16": [
      "S. Ioachim, Patris B. Mariæ Virg., Conf. (26.07.)"
    ],
    "17": [
      "S. Hyacinthi Conf."
    ],
    "18": [
      "Comm. S. Agapiti Mart."
    ],
    "2": [
      "Comm. S. Stephani I Papæ°et°Mart."
    ],
    "21": [
      "S. Ioannæ Franciscæ Frémiot°de°Chantal°Vid. (12.08.)"
    ],
    "22": [
      "Immaculati Cordis B. Mariæ Virg.",
      "Comm. Ss. Timothei et Soc. Mm."
    ],
    "23": [
      "S. Philippi Benitii Conf."
    ],
    "26": [
      "Comm. S. Zephyrini Papæ°et°Mart."
    ],
    "27": [
      "S. Iosephi Calasanctii Conf. (25.08.)"
    ],
    "28": [
      "Comm. S. Hermetis Mart."
    ],
    "29": [
      "Comm. S. Sabinæ Mart."
    ],
    "30": [
      "S. Rosæ Limanæ Virg. (23.08.)",
      "Comm. Ss. Felicis et Adaucti Mm."
    ],
    "31": [
      "S. Raymundi Nonnati Conf."
    ],
    "4": [
      "S. Dominici Conf. (08.08.)"
    ],
    "6": [
      "Comm. Ss. Xysti II Papæ, Felicissimi°et°Agapiti°Mm. (07.08.)"
    ],
    "7": [
      "Comm. S. Donati Ep.°et°Mart."
    ],
    "8": [
      "S. Ioannis Mariæ Vianney Conf. (04.08.)",
      "Comm. Ss. Cyriaci, Largi et Smaragdi Mm."
    ],
    "9": [
      "Comm. S. Romani Mart. (30.06.)"
    ]
  },
  "9": {
    "1": [
      "Comm. S. Ægidii Abb.",
      "Comm. Ss. duodecim Fratrum Mm."
    ],
    "10": [
      "S. Nicolai de Tolentino Conf."
    ],
    "11": [
      "Comm. Ss. Proti et Hyacinthi Mm."
    ],
    "15": [
      "Comm. S. Nicomedis Mart."
    ],
    "16": [
      "Comm. Ss. Euphemiæ Virg., Luciæ°et°Geminiani°Mm."
    ],
    "17": [
      "Comm. Impressionis Ss. Stigmatum S.°Francisci°Conf."
    ],
    "18": [
      "S. Iosephi de Cupertino Conf."
    ],
    "2": [
      "S. Stephani Regis, Conf. (16.08.)"
    ],
    "20": [
      "Comm. Ss. Eustachii et Sociorum Mm."
    ],
    "22": [
      "S. Thomæ de Villanova Ep.°et°Conf."
    ],
    "23": [
      "S. Lini Papæ°et°Mart.",
      "Comm. S. Theclæ Virg.°et°Mart."
    ],
    "24": [
      "Comm. B. Mariæ Virg. a Mercede"
    ],
    "26": [
      "Comm. Ss. Cypriani et Iustinæ Virg., Mm."
    ],
    "27": [
      "Ss. Cosmæ et Damiani Mm. (26.09.)"
    ],
    "3": [
      "S. Pii X Papæ°et°Conf. (21.08.)"
    ],
    "5": [
      "S. Laurentii Iustiniani Ep.°et°Conf."
    ],
    "8": [
      "Comm. S. Hadriani Mart."
    ],
    "9": [
      "Comm. S. Gorgonii Mart."
    ]
  },
  "10": {
    "1": [
      "Comm. S. Remigii Ep.°et°Conf."
    ],
    "10": [
      "S. Francisci Borgiæ Conf."
    ],
    "11": [
      "Maternitatis B. Mariæ Virg."
    ],
    "13": [
      "S. Eduardi Regis, Conf."
    ],
    "17": [
      "S. Margaritæ Mariæ Alacoque Virg. (16.10.)"
    ],
    "19": [
      "S. Petri de Alcantara Conf."
    ],
    "20": [
      "S. Ioannis Cantii Conf."
    ],
    "21": [
      "Comm. S. Hilarionis Abb."
    ],
    "22": [
      "S. Antonii Mariæ Claret Ep.°et°Conf. (24.10.)"
    ],
    "23": [
      "S. Raphælis Archang. (29.09.)"
    ],
    "24": [
      "Comm. Ss. Chrysanthi et Dariæ Mm."
    ],
    "25": [
      "Comm. S. Evaristi Papæ°et°Mart."
    ],
    "3": [
      "S. Teresiæ a Iesu Infante Virg. (01.10.)"
    ],
    "5": [
      "Comm. Ss. Placidi et Sociorum Mm."
    ],
    "7": [
      "Comm. S. Marci Papæ°et°Conf."
    ],
    "8": [
      "S. Birgittæ Vid. (23.07.)",
      "Comm. Ss. Sergii, Bacchi, Marcelli°et°Apuleii°Mm."
    ],
    "9": [
      "Comm. Ss. Dionysii Ep., Rustici°et°Eleutherii°Mm."
    ]
  },
  "11": {
    "10": [
      "S. Andreæ Avellini Conf.",
      "Comm. Ss. Tryphonis, Respicii et°Nymphæ°Virg.,°Mart."
    ],
    "11": [
      "Comm. S. Mennæ Mart."
    ],
    "12": [
      "S. Martini I Papæ°et°Mart. (13.04.)"
    ],
    "13": [
      "S. Didaci Conf."
    ],
    "14": [
      "S. Iosaphat Ep.°et°Mart. (12.11.)"
    ],
    "17": [
      "S. Gregorii Thaumaturgi Ep.°et°Conf."
    ],
    "19": [
      "Comm. S. Pontiani Papæ°et°Mart. (13.08.)"
    ],
    "20": [
      "S. Felicis de Valois Conf."
    ],
    "23": [
      "Comm. S. Felicitatis Mart."
    ],
    "24": [
      "S. Ioannis a Cruce Conf.°et°Eccl.°Doct. (14.12.)",
      "Comm. S. Chrysogoni Mart."
    ],
    "26": [
      "S. Silvestri Abb.",
      "Comm. S. Petri Alexandrini Ep.°et°Mart."
    ],
    "29": [
      "Comm. S. Saturnini Mart."
    ],
    "4": [
      "Comm. Ss. Vitalis et Agricolæ Mm."
    ],
    "8": [
      "Comm. Ss. Quatuor Coronatorum Mm."
    ],
    "9": [
      "Comm. S. Theodori Mart."
    ]
  },
  "12": {
    "10": [
      "Comm. S. Melchiadis Papæ°et°Mart."
    ],
    "11": [
      "S. Damasi I Papæ°et°Conf."
    ],
    "16": [
      "S. Eusebii Ep.°et°Mart."
    ],
    "2": [
      "S. Bibianæ Virg.°et°Mart."
    ],
    "21": [
      "S. Thomæ Ap. (03.07.)"
    ],
    "25": [
      "In secunda Missa: Comm.°S.°Anastasiæ°Mart."
    ],
    "4": [
      "S. Petri Chrysologi Ep.,°Conf.°et°Eccl.°Doct. (30.07.)"
    ],
    "5": [
      "Comm. S. Sabbæ Abb."
    ]
  },
  "13": {
    "10-L1-0": [
      "D. N. Iesu Christi Regis"
    ],
    "j-1-0": [
      "S. Familiæ, Iesu, Mariæ, Ioseph"
    ],
    "q-5-6": [
      "Comm. septem Dolorum B. Mariæ Virg. (15.09.)"
    ],
    "w-2-0": [
      "Sanctissimi Nominis Iesu"
    ]
  }
};
