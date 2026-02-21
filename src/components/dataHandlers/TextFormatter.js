import React, { Fragment } from 'react';
import formatBibleRef from './BibleRefFormatter.js';
import { psalmsData } from '../data/PsHymn.ts';

export const firstCapital = (word) => {
    if (!word || typeof word !== 'string') { return word }
    return /\s|°/.test(word)
        ? word[0].toUpperCase() + word.slice(1)
        : word[0].toUpperCase() + word.slice(1).toLowerCase()
}

const resolveReference = (ref) => {
    if (!ref) return null;

    const wholePart = Math.floor(ref);
    const decimalStr = (ref % 1).toFixed(3).split('.')[1];
    const multiplier = decimalStr?.replace(/0+$/, '').length === 1 ? 10 : 1000;
    const decimalPart = Math.round((ref % 1) * multiplier);

    const data = psalmsData[wholePart]?.[decimalPart] || {};

    return { number: wholePart, ...data };
};
// Hilfsfunktion zur Berechnung der maximalen Zeilenlänge in einem Hymnus
const calculateMaxLineLength = (text) => {
    if (!text.includes('^/') && !text.includes('^ß')) {
        return 0; // Kein ^/-Tag vorhanden, keine Berechnung nötig
    }

    // Entferne alle Formatierungs-Tags außer ^l und ^p für die Längenberechnung
    let cleanText = text
        .replace(/\^r.*?\^0r/g, '') // Rubriken entfernen
        .replace(/\^w.*?\^0w/g, '$1') // Gesperrten Text normal zählen
        .replace(/\^f.*?\^0f/g, '$1') // Fetten Text normal zählen
        .replace(/\^v.*?\^0v/g, '$1') // Kleinen Text normal zählen
        .replace(/\^c.*?\^0c/g, '$1') // Kapitälchen normal zählen
        .replace(/\^k.*?\^0k/g, '$1') // Kursiven Text normal zählen
        .replace(/\^RUBR.*?\^0RUBR/g, '') // Lange Rubriken entfernen
        .replace(/°/g, ' ') // Geschützte Leerzeichen als normale Leerzeichen
        .replace(/>/g, '')
        .replace(/ Amen./g, '')
        .replace(/\^\//g, '   ')
        .replace(/\^ß/g, ' ')
        .replace(/\^-/g, '-') // Bindestriche
        .replace(/\{(\d{1,2})#.*?\}/g, '$1') // Fußnoten nur als Nummer zählen
        .replace(/\^[öÖLö]/g, ' Halleluja'); // Halleluja-Marker

    // Funktion zur Berechnung der Zeichenbreite in em
    const calculateCharWidth = (char) => {
        // Sehr schmale Zeichen (ca. 0.3em)
        if (/[ijl.,;:!|]/.test(char)) return 0.3;

        // Schmale Zeichen (ca. 0.4em)
        if (/[Ijlt()[\]{}'"´`]/.test(char)) return 0.4;

        // Etwas schmalere Zeichen (ca. 0.5em)
        if (/[frs]/.test(char)) return 0.5;

        // Sehr breite Zeichen (ca. 0.9em) - inkl. Ligaturen
        if (/[mwMW]|æ|œ|Æ|Œ/.test(char)) return 0.9;

        // Breite Zeichen (ca. 0.7em)
        if (/[ABCDEFGHIJKLMNOPQRSTUVWXYZ0-9]/.test(char)) return 0.7;

        // Leerzeichen
        if (/\s/.test(char)) return 0.3;

        // Normale Zeichen (ca. 0.6em) - Standardbreite für Kleinbuchstaben
        return 0.6;
    };

    // Teile den Text in Strophen (^p) und dann in Zeilen (^l oder ^/)
    const strophes = cleanText.split(/\^p/);
    let maxLength = 0;
    let zeile = 0;

    strophes.forEach(strophe => {
        // Teile jede Strophe in Zeilen auf
        // Dabei ^l als potentielle Zeilenenden betrachten
        const lines = strophe.split(/\^l/);
        lines.forEach(line => {
            // Entferne führende/nachfolgende Leerzeichen
            const trimmedLine = line.trim();
            zeile = zeile + 1
            if (trimmedLine.length > 0) {
                // Berechne die Breite durch Summierung der einzelnen Zeichenbreiten
                let lineWidth = 0;
                for (let i = 0; i < trimmedLine.length; i++) {
                    lineWidth += calculateCharWidth(trimmedLine[i]);
                }
                maxLength = Math.max(maxLength, lineWidth);
            }
        });
    });
    return maxLength;
};


const findOAntiphon = (data) => {
    if (!data || !data.antev) return { "dt": '', "lat": '' };
    // O-Antiphonen Enum für die Zuordnung von Laudes- zu Vesper-Antiphonen
    // Verwendung vom 17. bis 23. Dezember
    const OAntiphons = {
        "Wisset, das Reich Gottes ist nahe; wahrlich, ich sage euch: Es wird nicht säumen.": "O Weisheit, hervorgegangen aus dem Munde des Höchsten – die Welt umspannst du von einem Ende zum andern, in Kraft und Milde ordnest du alles: o komm und offenbare uns den Weg der Weisheit und Einsicht!^ODER^ANTO Sapientia, quæ ex ore Altíssimi prodísti, attingens a fine usque ad finem, fórtiter suavitérque dispónens ómnia: veni ad docéndum nos viam prudéntiæ.",
        "Euer Herz sei wach und bereit: ganz nahe schon ist der Herr, unser Gott.": "O Adonai, Herr und Führer des Hauses Israel – im flammenden Dornbusch bist du dem Mose erschienen und hast ihm auf dem Berg das Gesetz gegeben: o komm und befreie uns mit deinem starken Arm!^ODER^ANTO Adonái et Dux domus Israel, qui Móysi in igne flammæ rubi apparuísti, et ei in Sina legem dedísti: veni ad rediméndum nos in brácchio exténto.",
        "Wie die Sonne aufgeht, so wird der Erlöser erscheinen; wie Tau auf das Gras kommt er herab in den Schoß der Jungfrau.": "O Spross aus Isais Wurzel, gesetzt zum Zeichen für die Völker – vor dir verstummen die Herrscher der Erde, dich flehen an die Völker: o komm und errette uns, erhebe dich, säume nicht länger!^ODER^ANTO radix Iesse, qui stas in signum populórum, super quem continébunt reges os suum, quem gentes deprecabúntur: veni ad liberándum nos, iam noli tardáre.",
        "Der Engel Gabriel wurde zu Maria, der Jungfrau, gesandt, die mit Josef verlobt war.": "O Schlüssel Davids, Zepter des Hauses Israel – du öffnest, und niemand kann schließen, du schließt, und keine Macht vermag zu öffnen: o komm und öffne den Kerker der Finsternis und die Fessel des Todes!^ODER^ANTO clavis David, et sceptrum domus Israel; qui áperis, et nemo claudit; claudis, et nemo áperit: veni et educ vinctum de domo cárceris, sedéntem in ténebris et umbra mortis.",
        "Fürchtet euch nicht: Am fünften Tag kommt unser Herr zu euch.": "O Morgenstern, Glanz des unversehrten Lichtes, der Gerechtigkeit strahlende Sonne: o komm und erleuchte, die da sitzen in Finsternis und im Schatten des Todes!^ODER^ANTO Oriens, splendor lucis ætérnæ et sol iustitiæ: veni, et illúmina sedéntes in ténebris et umbra mortis.",
        "Als der Klang deines Grußes an mein Ohr drang, da regte sich vor Freude das Kind in meinem Schoß.^ö": "O König aller Völker, ihre Erwartung und Sehnsucht; Schlussstein, der den Bau zusammenhält: o komm und errette den Menschen, den du aus Erde gebildet!^ODER^ANTO Rex géntium et desiderátus eárum, lapísque anguláris, qui facis útraque unum: veni et salva hóminem, quem de limo formásti.",
        "Seht, nun ist alles erfüllt, was der Engel von der Jungfrau gesagt hat.": "O Immanuel, unser König und Lehrer, du Hoffnung und Heiland der Völker: o komm, eile und schaffe uns Hilfe, du unser Herr und unser Gott!^ODER^ANTO Emmánuel, rex et légifer noster, exspectátio gentium et salvátor eárum: veni ad salvándum nos, Dómine Deus noster."
    };
    const antBenedictus = data?.antev || '';
    const antMagnificat = antBenedictus
        ? OAntiphons?.[antBenedictus] || '' : '';
    const antMagnificat_lat = antMagnificat
        ? antMagnificat.split('^ODER^ANT')[1] || '' : '';

    return { "dt": antMagnificat, "lat": antMagnificat_lat };
}

// Formatiert Psalmen mit Nummer, Versen, Titel und Text
export const formatPsalm = (psalmRef, num, localPrefLanguage = '') => {
    if (!psalmRef) return null;

    const psalm = resolveReference(psalmRef);
    if (!psalm || !psalm.text) return null;

    const number = psalm[`number${localPrefLanguage}`] || psalm.number;
    const text = psalm[`text${localPrefLanguage}`] || psalm.text;
    const verses = !num ? '' : psalm[`verses${localPrefLanguage}`] || psalm.verses || "";
    const title = !num ? '' : psalm[`title${localPrefLanguage}`] || psalm.title || "";
    const quote = !num ? '' : psalm[`quote${localPrefLanguage}`] || psalm.quote || "";

    const doxology =
        (localPrefLanguage === "_lat"
            && psalm.text_lat)
            ? "Glória Patri et Fílio^*et Spirítui Sancto.^pSicut erat in princípio, et°nunc°et°semper^*et in sǽcula sæculórum. Amen."
            : "Ehre sei dem Vater und dem Sohn^*und dem Heiligen Geist,^pwie im Anfang, so°auch°jetzt°und°alle°Zeit^*und in Ewigkeit. Amen.";

    const ordinal = ['', 'Erstes ', 'Zweites ', 'Drittes ']

    return (
        <div className="mb-4">
            <div className="font-bold text-rubric" aria-hidden="true">
                {number > 0 && (
                    number > 150 ? (<>{ordinal?.[num]}Canticum: {formatBibleRef(verses)}</>) : (
                        <>  Psalm {number}
                            {verses && <>{formatBibleRef(`,${verses}`)}</>}
                        </>
                    ))}
            </div>
            {title && <div className="text-[0.9em] text-gray-400 mb-[0.66em]"
                aria-hidden="true">
                {title}</div>}
            {quote && <div className="text-[0.9em] leading-[1.1em] italic text-gray-400 -mt-[0.66em] mb-[0.66em]"
                aria-hidden="true">
                {formatQuote(quote)}</div>}
            {text && <div className="whitespace-pre-wrap">{formatPrayerText(text, localPrefLanguage)}</div>}
            {(![151, 160].includes(number) || (number === 151 && localPrefLanguage === "_lat")) &&
                <div className="whitespace-pre-wrap">{formatPrayerText(doxology, localPrefLanguage)}</div>}
        </div>
    );
};

const formatQuote = (quote) => {
    if (!quote || quote === 'LEER' || quote === 'LEER_lat' || quote === '_lat') {
        return null;
    }

    // Regex zum Aufteilen: Alles vor der letzten öffnenden Klammer ist der Text,
    // alles ab der letzten öffnenden Klammer bis zur schließenden Klammer ist die Quelle
    const match = quote.match(/^(.*?)\s*\(([^)]+)\)\s*$/);

    if (!match) return formatPrayerText(quote)

    const [, quoteText, sourceText] = match;
    if (!sourceText.includes(',')) return formatPrayerText(quote)
    return (
        <div>
            {formatPrayerText(quoteText.trim()) + ' '}
            {formatBibleRef(sourceText.trim(), true)}
        </div>
    );
};

// Basisformatierung für Text mit speziellen Markierungen
export const formatText = (text) => {
    if (!text) return '';

    // Basis-Formatierungen
    let formattedText = text
        .replace(/¥°/g, ' \uFEFF')
        .replace(/(d)°in°/g, '$1 in\u00A0')
        .replace(/°/g, '\u00A0')
        .replace(/¥a/g, '\u2002\u2720')
        .replace(/¥-/g, '\u2011')
        .replace(/¥_/g, '\u2013\uFEFF')
        .replace(/¥be/g, '¥p\u2003\u2003\u1D30¥t')
        .replace(/¥bf/g, '¥p\u2003\u2003\u1D30¥t');

    // Formatierungen mit Klassen
    const processFormatting = (str, startTag, endTag, className) => {
        const regex = new RegExp(`${startTag}([\\s\\S]*?)${endTag}`, 'g');
        return str.replace(regex, (_, content) => `<span class="${className}">${content}</span>`);
    };

    formattedText = processFormatting(formattedText, '¥w', '¥0w', 'format-kleiner');
    formattedText = processFormatting(formattedText, '¥f', '¥0f', 'font-bold');
    formattedText = processFormatting(formattedText, '¥k', '¥0k', 'italic');
    formattedText = processFormatting(formattedText, '¥v', '¥0v', 'format-verse');
    formattedText = processFormatting(formattedText, '¥qh', '¥0f', 'format-hochfest');
    formattedText = processFormatting(formattedText, '¥qf', '¥0f', 'format-fest');

    return formattedText;
};

// Formatiert Gebetstext mit speziellen Tags und saisonalen Anpassungen
export const formatPrayerText = (provText, localPrefLanguage = '', marker = '',
    hour = '', texts = {},
    prefSrc = '', widthForHymns = false) => {
    if (!provText || provText === 'LEER' || provText === 'LEER_lat' || provText === '_lat') return null;

    const season = texts?.season || '';
    const swdCombined = texts?.swd?.combined || '';
    const { nominativ, genitiv, vokativ, genitiv_lat, vokativ_lat } = texts?.laudes?.[prefSrc] || {};

    const useFootnoteList = localStorage.getItem('prefFootnotes') === 'true';
    const useCommemoration = (marker === 'commemoration' && texts?.rank?.isCommemoration === true);

    // bei Antwortpsalmen in den Messlesungen wird das Sternchen in Rubrik-Farbe angezeigt
    const isAps = marker === 'Aps';

    // wiederholte Antworten in den Fürbitten bei localPrefLongform
    let insertResponse = '';
    if (marker.startsWith('^R:')) {
        insertResponse = marker
            .replace('^R:', '')
            .replace(/^›|\^<|_lat|_neu|_ben|\^SLICE|\^APSHALL/g, '');
        marker = '';
    }

    const replaceRESP = (text) => {
        const easterAntiphons = {
            'oktav': {
                '^RESP': "Das ist der Tag, den der Herr gemacht hat. Lasst\u00a0uns\u00a0jubeln und seiner uns freuen. Halleluja.",
                '^LRESP': "Hæc est dies quam fecit Dóminus: exsultémus\u00a0et\u00a0lætémur\u00a0in\u00a0ea.\u00a0Allelúia."
            },
            'q-6-4': {
                '^RESP': "Christus war für uns gehorsam bis\u00a0zum\u00a0Tod.",
                '^LRESP': "Christus factus est pro nobis obœ́diens\u00a0usque\u00a0ad\u00a0mortem."
            },
            'q-6-5': {
                '^RESP': "Christus war für uns gehorsam bis zum Tod, bis\u00a0zum\u00a0Tod\u00a0am\u00a0Kreuze.",
                '^LRESP': "Christus factus est pro nobis obœ́diens usque ad mortem, mortem\u00a0autem\u00a0crucis."
            },
            'q-6-6': {
                '^RESP': "Christus war für uns gehorsam bis zum Tod, bis\u00a0zum\u00a0Tod\u00a0am\u00a0Kreuze. Darum hat ihn Gott über alle erhöht und ihm den Namen verliehen, der größer ist als alle Namen.",
                '^LRESP': "Christus factus est pro nobis obœ́diens usque ad mortem, mortem autem crucis. Propter quod et Deus exaltávit illum, et dedit illi nomen, quod est super omne nomen."
            }
        }
        return text.replace(/(\^L?RESP)/g, (match) => {

            const replaceDay =
                (swdCombined.startsWith('o-1-') || swdCombined === 'o-2-0')
                    ? 'oktav' : swdCombined;

            const antiphon = easterAntiphons?.[replaceDay]?.[match];

            if (!antiphon) { return '' }

            const rubric = match === '^RESP'
                ? '^p^RUBRAnstelle des Responsoriums wird die\u00a0folgende\u00a0Antiphon\u00a0genommen:^0RUBR^l'
                : '^p^RUBRLoco responsorii dicitur:^0RUBR^l';

            return rubric + antiphon;
        })
    }

    const replaceOR = (text) => {
        const orationEnding = {
            "^OR": {
                "lang": {
                    'vR': "Darum bitten wir durch ihn, Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit.",
                    'V': "Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit.",
                    'S': "der du in der Einheit des Heiligen Geistes mit Gott dem Vater lebst und herrschest in alle Ewigkeit.",
                    'R': "der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit.",
                },
                "kurz": {
                    'vR': "Darum bitten wir durch ihn, Christus, unseren Herrn.",
                    'V': "Darum bitten wir durch Christus, unseren Herrn.",
                    'S': "der du lebst und herrschest in alle Ewigkeit.",
                    'R': "der mit dir lebt und herrscht in alle Ewigkeit.",
                },
            },
            "^ORl": {
                "lang": {
                    'vR': "Per eúndem Dóminum nostrum Iesum Christum, Fílium tuum, qui tecum vivit et regnat in unitáte Spíritus Sancti, Deus, per ómnia sǽcula sæculórum.",
                    'V': "Per Dóminum nostrum Iesum Christum, Fílium tuum, qui tecum vivit et regnat in unitáte Spíritus Sancti, Deus, per ómnia sǽcula sæculórum.",
                    'S': "qui vivis et regnas in unitáte Spíritus Sancti, Deus, per ómnia sǽcula sæculórum.",
                    'R': "qui tecum vivit et regnat in unitáte Spíritus Sancti, Deus, per ómnia sǽcula sæculórum.",
                },
                "kurz": {
                    'vR': "Qui vivit et regnat in sǽcula sæculórum.",
                    'V': "Per Christum Dóminum nostrum.",
                    'S': "qui vivis et regnas in sǽcula sæculórum.",
                    'R': "qui vivit et regnat in sǽcula sæculórum.",
                },
            },
        };

        const formLength = ['terz', 'sext', 'non', 'komplet'].includes(hour)
            ? 'kurz' : 'lang';

        // Bei Kommemorationen lange Orationsschlüsse entfernen
        if (useCommemoration && formLength === 'lang') {
            return text
                .replace('. Er,^ORR', '.')
                .replace('. Darum bitten wir durch ihn,^ORR', '.')
                .replace(',^ORR', '.')
                .replace(',^ORlR', '.')
                .replace(/([,.])(\^ORl?)(vR|V|S|R)/g, '$1');
        }

        // Regex für Orationsschluss-Tags: (Satzzeichen)(^ORl?)(Kürzel)
        return text.replace(/([,.])(\^ORl?)(vR|V|S|R)/g, (match, punctuation, language, formula) => {

            let ending = orationEnding[language]?.[formLength]?.[formula];

            if (!ending) {
                console.warn(`Orationsschluss nicht gefunden: ${language}.${formLength}.${formula}`);
                return match; // Originaltext beibehalten
            }

            if (punctuation === '.')
                ending = firstCapital(ending);

            return punctuation + ' ' + ending;
        });
    };

    const replacePronomina = (text) => {
        if (nominativ)
            text = text
                .replace(/(Der|Die) heiligen? \^NOM/g, nominativ)

        if (genitiv)
            text = text
                .replace(/(des|der) heiligen \^GEN/g, genitiv)
                .replace(/auf seine Fürbitte/g, match =>
                    genitiv.startsWith('der') ? 'auf ihre Fürbitte' : match);

        if (vokativ) {
            text = text
                .replace(/Heiliger? \^VOK/g, vokativ)
            // weibliche Formen verwenden
            if (vokativ.startsWith('Heilige ')) {
                text = text
                    .replace(/tat ihm den/g, 'tat ihr den')
                    .replace(/gab ihm Weisheit/g, 'gab ihr Weisheit')
                    .replace(/O Lehrer/g, 'O Lehrerin')
            }
        }

        if (genitiv_lat) {
            text = text
                .replace(
                    /(sancti|sanctæ|sanctae)\s+([a-záéíóúýæǽœ\s]+)?\^GEN/gi,
                    function (match, sancti, apposition) {
                        console.log('genitiv_lat match:', match, 'apposition:', apposition);
                        if (apposition && apposition.trim()) {
                            // Apposition gefunden - in genitiv_lat einfügen
                            // genitiv_lat = "sancti Lauréntii" → "sancti mártyris Lauréntii"
                            return genitiv_lat.replace(
                                /^(sancti|sanctæ|sanctae)\s+/i,
                                '$1 ' + apposition.trim() + ' '
                            );
                        } else {
                            // Keine Apposition - genitiv_lat direkt verwenden
                            return genitiv_lat;
                        }
                    }
                );
        }

        if (vokativ_lat) {
            text = text
                .replace(/(sancte|sancta) \^VOK/g, vokativ_lat)
                .replace(/(beáte|beáta) \^VOK/g, vokativ_lat
                    .replace(/sancte/g, 'beáte')
                    .replace(/sancta/g, 'beáta'))
            // weibliche Formen verwenden
            if (vokativ_lat.startsWith('sancta ')) {
                text = text
                    .replace(/implévit eum/g, 'implévit eam')
                    .replace(/doctor óptime/g, 'doctrix óptime')
                    .replace(/amátor legis/g, 'amátrix legis')
            }
        }
        // Wenn keine Namenseinträge vorhanden sind, wird N. verwendet
        return text.replace(/\^(NOM|GEN|VOK|NH|N)\.?/g, '^rN.^0r');
    }

    const replaceNames = (text) => {
        if (localStorage.getItem('vacancy') === 'true') {
            // bei Vakanz Bischof durch Diözesanadministrator ersetzen
            text = text
                .replace(/Bischof \^NB/g, 'Diözesanadministrator ^NB')
                .replace(/Epíscopo(\s+nostro)?\s*\^NdatB/g, 'Administratóri$1 diœcesáno ^NdatB')
                .replace(/Epíscopum(\s+nostrum)?\s*\^NakkB/g, 'Administratórem$1 diœcesánum ^NakkB')
                .replace(/Epíscopo(\s+nostro)?\s*\^NablB/g, 'Administratóre$1 diœcesáno ^NablB')
        }
        return text
            .replace(/\^NP/g, localStorage.getItem('popeName') || 'Leo')
            .replace(/\^NB/g, localStorage.getItem('bishopName') || '^N')
            .replace(/\^N(dat|akk|abl)(P|B)/g, (match, casus, person) => {
                if (!casus || !person) return match;
                const name = person === 'P'
                    ? localStorage.getItem('popeNameLat') || 'Leóni'
                    : localStorage.getItem('bishopNameLat') || '^N';
                // lat. Namen sind im Dativ gespeichert, daher Anpassung für andere Kasus
                if (casus === 'akk')
                    return name
                        .replace(/i\b/g, 'em')
                        .replace(/o\b/g, 'um');
                if (casus === 'abl')
                    return name.replace(/i\b/g, 'e');
                return name;
            })
            // Gottesname in Kapitälchen (neue Einheitsübersetzung und Benediktinisches Antiphonale)
            .replace(/(HERREN|HERRN?|GOTTES|GOTT|IHN)/g, (match) => {
                const word = firstCapital(match);
                return ['_neu', '_ben'].includes(localPrefLanguage) ? `^c${word}^0c` : word;
            })
    }

    marker = ['commemoration', 'Aps'].includes(marker) ? '' : marker;
    marker = provText?.startsWith('^RUBR') ? '' : marker
    let text = marker ? `^r${marker}^0r${provText}` : provText;
    const maxLineLength = calculateMaxLineLength(text);
    const OAntiphon = findOAntiphon(texts.laudes?.wt);

    text = text
        .replace('O-AntiphonVomTag', OAntiphon.dt)
        .replace('AntiphonaDiei', OAntiphon.lat)
        .replace(/\^HULDKL/g, 'denn seine Huld währt ewig')
        .replace(/\^HULDGR/g, 'Denn seine Huld währt ewig')
        .replace(/\^HULDlat/g, '^*quóniam in sǽculum misericórdia eius')
        .replace(/\^HULDaet/g, '^*quóniam in ætérnum misericórdia eius')
        .replace(/\^SPRICHT/g, '^(So spricht der Herr:^)^l')
        .replace(/\^SPRGOTT/g, '^(So spricht Gott, der Herr:^)^l')
        .replace(/\^EINZUG/g, '') // Einzug bei Sprechzeilen-Gliederung im Messlektionar
        .replace(/^›|\^<|_lat|_neu|_ben|\^SLICE|\^APSHALL/g, '')
        .replace(/°/g, '\u00A0')
        .replace(/\^\*/g, isAps ? '\u00A0^r*^0r\n' : '^muteSTAR')
        .replace(/\^\+/g, isAps ? '\u00A0^r†^0r\n' : '\u00A0†\n')
        .replace(/\^\//g, (() => {
            // Wenn keine ^/-Tags vorhanden oder maxLineLength <= widthForHymns, dann Leerzeichen
            // Andernfalls Zeilenumbruch
            return (maxLineLength > 0 && maxLineLength > widthForHymns) ? '\n' : '  ';
        })())
        .replace(/\^ß/g, (() => {
            return (maxLineLength > 0 && maxLineLength > widthForHymns) ? '\n      ' : ' ';
        })())
        .replace(/\^-/g, '\u2011')
        .replace(/(\w)–/g, '$1\u200C–')
        .replace(/–(\w)/g, '–\u200C$1')
        .replace(/([0-9])-([0-9])/g, '$1\u200C\u2013\u200C$2')
        .replace(/>([aeiouæm])/g, '^ELL$1^0ELL')
        .replace(/\^([()[\]†])/g, '^r$1^0r')
        .replace(/ \^w/g, '^w ')
        .replace(/ \^0w/g, '^0w ')
        .replace(/^\^A:[^:]+:/, '')
        .replace(/\^ANT/, '^rAnt.\u00A0\u00A0^0r')
        .replace(/\^KV/g, '^r\u00A0–\u00A0(Kv)^0r')
        .replace(/\^(ODER|VEL)/g, (match, text) => '^l^RUBR' + firstCapital(text) + ':^0RUBR^l')
        .replace(/([.?!]|)( |)(EINE?[RMN]?)/g, (match, punctuation, space, text) => {
            if (!punctuation && space) { return '^w' + match.toLowerCase() + '^0w' }
            else return punctuation + space + '^w' + firstCapital(text) + '^0w';
        })
        .replace(/\^Ö/g, season === 'o' ? ' Halleluja.' : '')
        .replace(/\^ö/g, season === 'q' ? '' : ' Halleluja.')
        .replace(/\^LÖ/g, season === 'o' ? ' Allelúia.' : '')
        .replace(/\^Lö/g, season === 'q' ? '' : ' Allelúia.')

    text = replaceNames(text)
    text = replaceRESP(text);
    text = replaceOR(text);
    text = replacePronomina(text);

    let footnoteCounter = 0;
    const footnoteMap = new Map();
    const footnoteNumbers = new Map();
    const allFootnotes = [];

    // VERBESSERTE FUSSNOTENVERARBEITUNG: Satzzeichen erfassen
    text = text.replace(/\s*\{(\d{1,2})#(.*?)\}([,.;?!]?)/g, (match, number, content, punctuation) => {
        const marker = `§FN${footnoteCounter}§`;
        footnoteMap.set(marker, content);
        footnoteNumbers.set(marker, number);

        // Satzzeichen separat speichern, falls vorhanden
        const punctuationMarker = punctuation ? `§PUNCT${footnoteCounter}§` : '';
        if (punctuation) {
            footnoteMap.set(punctuationMarker, punctuation);
        }

        allFootnotes.push({
            number: number,
            content: content,
            punctuation: punctuation || ''
        });
        footnoteCounter++;

        return useFootnoteList ? marker + punctuationMarker : ` ${marker}${punctuationMarker}`;
    });

    // Inline-Formatierungen als React-Elemente verarbeiten
    const processInlineFormats = (text) => {
        text = text
            .replace(/\^l/g, '\n')

        // ERWEITERTE REGEX um Satzzeichen-Marker zu erfassen
        const segments = text.split(/(\^RUBR.*?\^0RUBR|\^r.*?\^0r|\^w.*?\^0w|\^f.*?\^0f|\^v.*?\^0v|\^c.*?\^0c|\^k.*?\^0k|\^ELL.*?\^0ELL|§FN\d+§|§PUNCT\d+§|\^muteSTAR)/g).filter(Boolean);

        return segments.map((segment, index) => {
            if (segment.startsWith('^r')) {
                const content = segment.substring(2, segment.length - 3);
                return <span key={`rubric-${index}`} className="text-rubric" aria-hidden="true">{content}</span>;
            } else if (segment.startsWith('^w')) {
                const content = segment.substring(2, segment.length - 3);
                return <span key={`tracked-${index}`} className='tracking-[0.16em]'>{content}</span>;
            } else if (segment.startsWith('^f')) {
                const content = segment.substring(2, segment.length - 3);
                return <span key={`bold-${index}`} className='font-bold'>{content}</span>;
            } else if (segment.startsWith('^v')) {
                const content = segment.substring(2, segment.length - 3);
                return <span key={`small-${index}`} className='format-verse'>{content}</span>;
            } else if (segment.startsWith('^c')) {
                const content = segment.substring(2, segment.length - 3);
                return <span key={`smallcaps-${index}`} style={{ fontVariant: 'small-caps' }}>{content}</span>;
            } else if (segment.startsWith('^k')) {
                const content = segment.substring(2, segment.length - 3);
                return <span key={`italic-${index}`} style={{ fontStyle: 'italic' }}>{content}</span>;
            } else if (segment.startsWith('^ELL')) {
                const content = segment.substring(4, segment.length - 5);
                return <span key={`ellipsis-${index}`} className='text-gray-500 dark:text-gray-400 italic' >{content}</span>;
            } else if (segment.startsWith('^RUBR')) {
                const content = segment.substring(5, segment.length - 6);
                return <span key={`long-rubric-${index}`} className="long-rubric" aria-hidden="true">{content}</span>;
            } else if (segment === '^muteSTAR') {
                return (
                    <React.Fragment key={`mute-star-${index}`}>
                        <span className="sr-only">.</span>
                        <span aria-hidden="true">{'\u00a0*\n'}</span>
                    </React.Fragment>
                );
            } else if (segment.match(/^§FN\d+§$/)) {
                const number = footnoteNumbers.get(segment);
                const content = footnoteMap.get(segment);

                if (useFootnoteList) {
                    return <sup key={`footnote-ref-${index}`}>{number}</sup>;
                } else {
                    return (
                        <Fragment key={`footnote-${index}`}>
                            <span className="text-fussnote">{formatBibleRef(content, true)}</span>
                        </Fragment>
                    );
                }
            } else if (segment.match(/^§PUNCT\d+§$/)) {
                // Satzzeichen - nur im Text, nicht in der Fußnotenliste
                const punctuation = footnoteMap.get(segment);

                if (useFootnoteList) {
                    // Bei Fußnotenliste: Satzzeichen mit nowrap an die Fußnotenziffer anhängen
                    return <span key={`punctuation-${index}`} style={{ whiteSpace: 'nowrap' }}>{punctuation}</span>;
                } else {
                    // Bei Inline-Fußnoten: Satzzeichen mit nowrap an die Fußnote anhängen
                    return (
                        <span key={`footnote-punct-${index}`} style={{ whiteSpace: 'nowrap' }}>{punctuation}</span>
                    );
                }
            }
            return segment;
        });
    };

    // Prüfen, ob der Text Absatz-Tags enthält
    const hasParagraphTags = /\^[phqlxP]/.test(text);

    if (!hasParagraphTags) {
        // Bei Texten ohne Absatz-Tags: Direkt Inline-Formatierung zurückgeben
        return processInlineFormats(text);
    }

    // Vorverarbeitung: Inline-Formatierungen mit temporären Markern ersetzen
    let processedText = text;
    const markerMap = new Map();
    let markerCounter = 0;

    processedText = processedText.replace(/(\^r.*?\^0r|\^v.*?\^0v|\^c.*?\^0c|\^\(|\^\))/g, (match) => {
        const marker = `§MARKER${markerCounter}§`;
        markerMap.set(marker, match);
        markerCounter++;
        return marker;
    });

    // Text in Absätze aufteilen
    let segments = processedText.split(/(?=\^[phqxP])/);

    // KORREKTUR: Prüfen ob der Text mit einem ERKANNTEN Format-Tag beginnt
    if (!segments[0].match(/^\^[phqxP]/)) {
        // Wenn NICHT mit ^p, ^h oder ^q beginnt, als Standard-Absatz behandeln
        segments = [segments[0], ...segments.slice(1)];
    }

    return (
        <>
            {segments
                .filter(segment => segment.trim().length > 0)
                .map((segment, index) => {
                    let format = 'p';  // Standard-Format
                    let content = segment;

                    if (segment.match(/^\^[phqxP]/)) {
                        format = segment[1];
                        content = segment.slice(2);
                    }

                    let originalContent = content;
                    for (const [marker, originalTag] of markerMap) {
                        originalContent = originalContent.replace(marker, originalTag);
                    }

                    const processedContent = processInlineFormats(originalContent);
                    const indent = insertResponse ? 'w-[1.1em]' : 'w-[0.8em]';

                    switch (format) {
                        case 'P':
                            return (
                                <div key={index} className="whitespace-pre-wrap  mt-[1.5em] mb-[0.5em]">
                                    {processedContent}
                                </div>
                            );
                        case 'h':
                            return (
                                <div key={index} className="whitespace-pre-wrap font-bold text-[0.9em] mt-2">
                                    {processedContent}
                                </div>
                            );
                        case 'q':
                            return (
                                <Fragment key={index}>
                                    <div className="whitespace-pre-wrap flex -mt-[0.75em] mb-[0.75em]">
                                        <span className={`${indent} flex-shrink-0`}>–</span>                                        <div>{processedContent}</div>
                                    </div>
                                    {insertResponse && (
                                        <div className=" -mt-[0.75em] mb-[0.75em] flex  gap-0">
                                            <span className={`${indent} text-rubric`} aria-hidden="true">R</span>
                                            <div>{processInlineFormats(insertResponse)}</div>
                                        </div>
                                    )}
                                </Fragment>
                            );
                        case 'x':
                            return (
                                <div key={index}
                                    className="whitespace-pre-wrap mb-[0.75em]
                                text-gray-500 dark:text-gray-400 text-[0.95em]
                                leading-[1.2em]">
                                    {processedContent}
                                </div>
                            )
                        default:
                            return (
                                <div key={index} className="whitespace-pre-wrap mb-[0.75em]">
                                    {processedContent}
                                </div>
                            );
                    }
                })
            }
            {
                useFootnoteList && allFootnotes.length > 0 && (
                    <div className="mt-4 text-sm ">
                        {allFootnotes.map(fn => (
                            <span key={`footnote-${fn.number}`} className="inline-block mr-3">
                                <sup>{fn.number}&nbsp;&nbsp;</sup>
                                <span>{formatBibleRef(fn.content)}</span>
                            </span>
                        ))}
                    </div>
                )
            }
        </>
    );
};