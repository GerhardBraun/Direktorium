// Abbildung ausgeschriebener Bibelbuchnamen (wie sie in Perikopen.ts als "Buch" stehen,
// z.B. "Aus dem Evangelium nach Markus") auf ihre Kurzform, für die Bibelstellen-Angabe
// unter den Auswahl-Buttons alternativer Lesungen (siehe LectureSelector.js).
// Eigenständige Datei, damit sie bei der Excel-Regenerierung von LectureAlternatives.ts
// nicht überschrieben wird.
export const namesOfBooks = {
    // Neues Testament - Evangelien
    "Matthäus": "Mt",
    "Markus": "Mk",
    "Lukas": "Lk",
    "Johannes": "Joh",

    // Apostelgeschichte
    "Apostelgeschichte": "Apg",

    // Paulusbriefe
    "Römer": "Röm",
    "ersten Brief an die Korinther": "1\u00a0Kor",
    "ersten Korintherbrief": "1\u00a0Kor",
    "zweiten Brief an die Korinther": "2\u00a0Kor",
    "zweiten Korintherbrief": "2\u00a0Kor",
    "Galater": "Gal",
    "Epheser": "Eph",
    "Philipper": "Phil",
    "Kolosser": "Kol",
    "ersten Brief an die Thessalonicher": "1\u00a0Thess",
    "ersten Thessalonicherbrief": "1\u00a0Thess",
    "zweiten Brief an die Thessalonicher": "2\u00a0Thess",
    "zweiten Thessalonicherbrief": "2\u00a0Thess",
    "ersten Timotheusbrief": "1\u00a0Tim",
    "zweiten Timotheusbrief": "2\u00a0Tim",
    "Titus": "Tit",
    "Philemon": "Phlm",

    // Hebräerbrief
    "Hebräerbrief": "Hebr",

    // Katholische Briefe
    "Jakobusbrief": "Jak",
    "ersten Petrusbrief": "1\u00a0Petr",
    "zweiten Petrusbrief": "2\u00a0Petr",
    "ersten Johannesbrief": "1\u00a0Joh",
    "zweiten Johannesbrief": "2\u00a0Joh",
    "dritten Johannesbrief": "3\u00a0Joh",
    "Judasbrief": "Jud",

    // Offenbarung
    "Offenbarung": "Offb",

    // Altes Testament - Die fünf Bücher Mose (Pentateuch/Tora)
    "Genesis": "Gen",
    "Exodus": "Ex",
    "Levitikus": "Lev",
    "Numeri": "Num",
    "Deuteronomium": "Dtn",

    // Geschichtsbücher
    "Josua": "Jos",
    "Richter": "Ri",
    "Rut": "Rut",
    "ersten Buch Samuel": "1\u00a0Sam",
    "ersten Samuelbuch": "1\u00a0Sam",
    "zweiten Buch Samuel": "2\u00a0Sam",
    "zweiten Samuelbuch": "2\u00a0Sam",
    "ersten Buch der Könige": "1\u00a0Kön",
    "ersten Königsbuch": "1\u00a0Kön",
    "zweiten Buch der Könige": "2\u00a0Kön",
    "zweiten Königsbuch": "2\u00a0Kön",
    "ersten Buch der Chronik": "1\u00a0Chr",
    "ersten Chronikbuch": "1\u00a0Chr",
    "zweiten Buch der Chronik": "2\u00a0Chr",
    "zweiten Chronikbuch": "2\u00a0Chr",
    "Esra": "Esra",
    "Nehemia": "Neh",
    "Tobit": "Tob",
    "Judit": "Jdt",
    "Ester": "Est",
    "ersten Makkabäerbuch": "1\u00a0Makk",
    "ersten Buch der Makkabäer": "1\u00a0Makk",
    "zweiten Makkabäerbuch": "2\u00a0Makk",
    "zweiten Buch der Makkabäer": "2\u00a0Makk",

    // Poetische und Weisheitsbücher
    "Hiob": "Ijob",
    "Ijob": "Ijob",
    "Sprichwörter": "Spr",
    "Kohelet": "Koh",
    "Hohelied": "Hld",
    "Hohenlied": "Hld",

    // Deuterokanonische Bücher (katholisch)
    "Weisheit": "Weish",
    "Sirach": "Sir",

    // Große Propheten
    "Jesaja": "Jes",
    "Buch Jesaja": "Jes",
    "Jeremia": "Jer",
    "Baruch": "Bar",
    "Klagelieder": "Klgl",
    "Hesekiel": "Ez",
    "Ezechiel": "Ez",
    "Daniel": "Dan",

    // Kleine Propheten (Zwölfprophetenbuch)
    "Hosea": "Hos",
    "Joel": "Joel",
    "Amos": "Am",
    "Obadja": "Obd",
    "Jona": "Jona",
    "Micha": "Mi",
    "Nahum": "Nah",
    "Habakuk": "Hab",
    "Zefanja": "Zef",
    "Haggai": "Hag",
    "Sacharja": "Sach",
    "Maleachi": "Mal",

    // Fallback-Einträge
    "Aus de": "LEER",
    "Lesung aus": "LEER",
};
