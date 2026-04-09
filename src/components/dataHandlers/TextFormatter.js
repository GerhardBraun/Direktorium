import React, { Fragment, useState, useRef, useEffect } from 'react';
import formatBibleRef from './BibleRefFormatter.js';
import { psalmsData } from '../data/PsHymn.ts';
import { formatCantMarkers, bracketTrim } from './CantFormatter.js';

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

const psalmToneImageSrc = (mode) => `${process.env.PUBLIC_URL}/images/psalmtones/${mode}.png`;

const getDoxology = (localPrefLanguage, psalm, isBuM = false) => {
    if (localPrefLanguage === "_lat" && (isBuM || psalm.text_lat)) {
        return "Glória Patri et Fílio^*"
            + "et Spirítui Sancto.^p"
            + "Sicut erat in princípio, et°nunc°et°semper,^*"
            + "et in sǽcula sæculórum. Amen.";
    }
    if (localPrefLanguage === "_cant" && (isBuM || psalm.text_cant)) {
        return "Ehre sei dem |Va0ter 2und 1dem ||Sohn^*"
            + "und 4dem 3|Hei2li1gen ||Geist,^p"
            + "wie im Anfang, so°auch°2|jetzt°1und°||al0le°Zeit^*"
            + "und in 3|E2wig1keit. ||A0men.";
    }
    return "Ehre sei dem Vater und dem Sohn^*"
        + "und dem Heiligen Geist,^p"
        + "wie im Anfang, so°auch°jetzt°und°alle°Zeit^*"
        + "und in Ewigkeit. Amen.";
};

// Formatiert Psalmen mit Nummer, Versen, Titel und Text
export const formatPsalm = (psalmRef, num = 0, localPrefLanguage = '', modeOverride = null) => {
    // num=0 für Invitatorium: keine verses, title, quote;
    // num=1-3 für Vigil: Ordinalzahlen bei den Cantica
    // num=-1 bei regulären Psalmen
    // num='BuM' für Benedictus, Magnificat und Nunc Dimittis
    if (!psalmRef) return null;

    const isBuM = num === 'BuM'
    num = isBuM ? 0 : num;

    const psalm = isBuM ? '' : resolveReference(psalmRef);
    if (!isBuM && (!psalm || !psalm.text)) return null;

    const number = isBuM ? 0 : psalm[`number${localPrefLanguage}`] || psalm.number;
    const text = isBuM ? psalmRef.cant : psalm[`text${localPrefLanguage}`] || psalm.text;
    const verses = !num ? '' : psalm[`verses${localPrefLanguage}`] || psalm.verses || "";
    const title = !num ? '' : psalm[`title${localPrefLanguage}`] || psalm.title || "";
    const quote = !num ? '' : psalm[`quote${localPrefLanguage}`] || psalm.quote || "";

    const doxology = getDoxology(localPrefLanguage, psalm, isBuM);
    const cantMode = localPrefLanguage !== '_cant' ? null :
        isBuM ? modeOverride || psalmRef.mode
            : psalm.text_cant
                ? (modeOverride || psalm.text_mode) : null;
    // console.log(`Rendering Psalm ${number}:`, { modeOverride, cantMode });


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
            {cantMode
                ? <PsalmCantDisplay
                    text={text}
                    doxology={doxology}
                    localPrefLanguage={localPrefLanguage}
                    number={number}
                    canonicalMode={cantMode}
                />
                : <>
                    {text && <div className="whitespace-pre-wrap">
                        {formatPrayerText(text, localPrefLanguage)}
                    </div>}
                    {(![157, 160].includes(number) || (number === 157 && localPrefLanguage === "_lat")) &&
                        <div className="whitespace-pre-wrap">
                            {formatPrayerText(doxology, localPrefLanguage)}
                        </div>}
                </>
            }
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

// Komponente für den _cant-Modus: Notenzeile als Ton-Button + Popup-Auswahl + Psalmtext
const PsalmCantDisplay = ({ text, doxology, localPrefLanguage, number, canonicalMode }) => {
    const [selectedMode, setSelectedMode] = useState(canonicalMode);
    const [showSelector, setShowSelector] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!showSelector) return;
        const onOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target))
                setShowSelector(false);
        };
        document.addEventListener('mousedown', onOutside);
        return () => document.removeEventListener('mousedown', onOutside);
    }, [showSelector]);

    useEffect(() => {
        setSelectedMode(canonicalMode);
    }, [text, localPrefLanguage, canonicalMode]);

    // Psalmtöne in Zeilen gegliedert: Haupttöne, dann Varianten; null = Trennlinie
    const toneRows = [
        ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'],
        ['IX', 'X'],
        null,
        ['Ia', 'Ig', 'Im'],
        ['IIc', 'IIm'],
        ['IVa', 'IVg'],
        ['VIIIa', 'VIIIc'],
    ];
    const toneLabels = { 'IX': 'IX (per.)', 'X': 'X (irr.)' };

    const showDoxology = ![157, 160].includes(number)
        || (number === 157 && localPrefLanguage === '_lat');

    return (
        <>
            <div className="mb-2 mt-1 relative inline-block" ref={containerRef}>
                <button
                    onClick={() => setShowSelector(s => !s)}
                    className="cursor-pointer block"
                    title="Psalmton wählen"
                    aria-label={`Psalmodiemodell Ton ${selectedMode} – zum Ändern klicken`}
                >
                    <img
                        src={psalmToneImageSrc(selectedMode)}
                        alt={`Psalmodiemodell Ton ${selectedMode}`}
                        className="psalm-tone-image max-w-full h-auto"
                    />
                </button>
                {showSelector && (
                    <div className="absolute top-full left-0 z-50 mt-1 bg-white dark:bg-gray-800
                                    border border-gray-200 dark:border-gray-600
                                    rounded shadow-lg p-2 text-sm">
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 font-semibold">
                            Psalmton wählen:
                        </div>
                        <div className="flex flex-col gap-0.5">
                            {toneRows.map((row, rowIdx) =>
                                row === null
                                    ? <hr key={`sep-${rowIdx}`} className="border-gray-200 dark:border-gray-600 my-0.5" />
                                    : <div key={rowIdx} className="flex gap-1">
                                        {row.map(mode => (
                                            <button
                                                key={mode}
                                                onClick={() => { setSelectedMode(mode); setShowSelector(false); }}
                                                title={mode === canonicalMode ? 'Originalton des Psalms' : undefined}
                                                className={`px-2 py-0.5 rounded text-xs font-mono
                                                    ${selectedMode === mode
                                                        ? 'bg-orange-100 dark:bg-yellow-400/60 font-bold'
                                                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'}
                                                    ${mode === canonicalMode
                                                        ? 'ring-1 ring-orange-300 dark:ring-yellow-600'
                                                        : ''}`}
                                            >
                                                {toneLabels[mode] ?? mode}
                                            </button>
                                        ))}
                                    </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            {text && (
                <div className="whitespace-pre-wrap">
                    {formatPrayerText(text, '_cant', 'cant' + selectedMode)}
                </div>
            )}
            {showDoxology && (
                <div className="whitespace-pre-wrap">
                    {formatPrayerText(doxology, '_cant', 'cant' + selectedMode)}
                </div>
            )}
        </>
    );
};

// Formatiert Gebetstext mit speziellen Tags und saisonalen Anpassungen
export const formatPrayerText = (provText, localPrefLanguage = '', marker = '',
    hour = '', texts = {},
    prefSrc = '', widthForHymns = false) => {
    if (!provText || provText === 'LEER' || provText === 'LEER_lat' || provText === '_lat') return null;

    // Cant-Modus: abstrakte Gesangsmarker in ^u/^b-Tags umwandeln
    // Muss vor der Haupttransformation laufen, da ^* und ^+ dort umgeschrieben werden.
    if (marker.startsWith('cant')) {
        const cantMode = marker.replace('cant', '').trim() || 'IX';
        marker = '';
        provText = formatCantMarkers(provText, cantMode);
    }

    const season = texts?.season || '';
    const swdCombined = texts?.swd?.combined || '';
    const { nominativ, genitiv, vokativ, genitiv_lat, vokativ_lat } = texts?.laudes?.[prefSrc] || {};

    const useFootnoteList = localStorage.getItem('prefFootnotes') === 'true';
    const useCommemoration = marker === 'commemoration'
        && texts?.rank?.isCommemoration === true
        && !(hour === 'vesper' && texts?.rank?.hasErsteVesper);

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
        const bishopTitle = localStorage.getItem('bishopTitle') || 'Bischof';
        text = text
            .replace(/Bischof \^NB/g, bishopTitle + ' ^NB')
        if (bishopTitle === 'Erzbischof') {
            text = text.replace(/Epíscop(.*?)\^N/g, 'Archiepíscop$1^N')
        }
        else if (bishopTitle === 'Diözesanadministrator') {
            // bei Vakanz Bischof durch Diözesanadministrator ersetzen
            text = text
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
        .replace(/\^SPRICHT/g, '^(So spricht der Herr:^)^l')
        .replace(/\^SPRGOTT/g, '^(So spricht Gott, der Herr:^)^l')
        .replace(/\^EINZUG/g, '') // Einzug bei Sprechzeilen-Gliederung im Messlektionar
        .replace(/^›|\^<|\$|_lat|_neu|_ben|\^SLICE|\^APSHALL/g, '')
        .replace(/°/g, '\u00A0')
        .replace(/(?<!\^)(?<!\^0)([^ \n^]*)\^\*/g, isAps ? '$1\u00A0^r*^0r\n' : '^STAR$1^0STAR')
        .replace(/\^\+/g, isAps ? '\u00A0^r†^0r\n' : '\u00A0†\n')
        .replace(/\^\//g, (() => {
            // Wenn keine ^/-Tags vorhanden oder maxLineLength <= widthForHymns, dann Leerzeichen
            // Andernfalls Zeilenumbruch
            return (maxLineLength > 0 && maxLineLength > widthForHymns) ? '\n' : '   ';
        })())
        .replace(/\^ß/g, (() => {
            return (maxLineLength > 0 && maxLineLength > widthForHymns) ? '\n      ' : ' ';
        })())
        .replace(/\^-/g, '\u2011')
        .replace(/(\w)–/g, '$1\u2060–')
        .replace(/–(\w)/g, '–\u2060$1')
        .replace(/([0-9])-([0-9])/g, '$1\u2060\u2013\u2060$2')
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

        // Verarbeitet ^ELL-Tags innerhalb eines Strings (für Verwendung in ^u/^b-Inhalten).
        const renderWithEll = (s, keyPrefix) => {
            if (!s.includes('^ELL')) return s;
            return s.split(/(\^ELL.*?\^0ELL)/g).map((part, j) =>
                part.startsWith('^ELL')
                    ? <span key={`${keyPrefix}-ell-${j}`} className='italic' aria-hidden="true">{part.slice(4, -5)}</span>
                    : part
            );
        };

        // ERWEITERTE REGEX um Satzzeichen-Marker zu erfassen
        const segments = text.split(/(\^RUBR.*?\^0RUBR|\^r.*?\^0r|\^w.*?\^0w|\^f.*?\^0f|\^v.*?\^0v|\^c.*?\^0c|\^k.*?\^0k|\^u.*?\^0u|\^b.*?\^0b|\^d.*?\^0d|\^ELL.*?\^0ELL|§FN\d+§|§PUNCT\d+§|\^STAR.*?\^0STAR)/g).filter(Boolean);

        // Group-basiertes nowrap: zusammenhängende ^u/^b/^d-Segmente (verbunden durch Text ohne echte
        // Leerzeichen) werden in einem gemeinsamen nowrap-Span zusammengefasst, um Zeilenumbrüche
        // mitten in solchen Gruppen zu verhindern. Trennstellen: ' ' und '\n'.
        const nowrapGroupOf = new Map();   // segIdx → groupId
        const nowrapGroupInfo = new Map(); // groupId → {leftExt, rightExt, memberIndices, firstIndex}
        let nowrapGroupCounter = 0;

        for (let ni = 0; ni < segments.length; ni++) {
            if (nowrapGroupOf.has(ni)) continue;
            const seg = segments[ni];
            if (!seg.startsWith('^u') && !seg.startsWith('^b') && !seg.startsWith('^d')) continue;

            const gid = nowrapGroupCounter++;
            const memberIndices = [ni];
            nowrapGroupOf.set(ni, gid);

            // Linke Erweiterung: aus dem vorherigen Nicht-Tag-Segment bis zum letzten echten Leerzeichen
            let leftExt = '';
            if (ni > 0 && !segments[ni - 1].startsWith('^')) {
                const prev = segments[ni - 1];
                const sp = Math.max(prev.lastIndexOf(' '), prev.lastIndexOf('\n'));
                leftExt = prev.slice(sp + 1);
                segments[ni - 1] = prev.slice(0, sp + 1);
            }

            // Gruppe nach rechts erweitern: weitere ^u/^b/^d-Segmente und Text ohne echte Leerzeichen
            let j = ni + 1;
            let rightExt = '';
            while (j < segments.length) {
                const jseg = segments[j];
                if (jseg.startsWith('^u') || jseg.startsWith('^b') || jseg.startsWith('^d')) {
                    memberIndices.push(j);
                    nowrapGroupOf.set(j, gid);
                    j++;
                } else if (!jseg.startsWith('^')) {
                    const sp = jseg.search(/[ \n]/);
                    if (sp < 0) {
                        // Kein echtes Leerzeichen: gesamter Text gehört zur Gruppe
                        memberIndices.push(j);
                        nowrapGroupOf.set(j, gid);
                        j++;
                    } else {
                        // Echtes Leerzeichen: Text davor als rechte Erweiterung
                        rightExt = jseg.slice(0, sp);
                        segments[j] = jseg.slice(sp);
                        break;
                    }
                } else {
                    break;
                }
            }

            nowrapGroupInfo.set(gid, { leftExt, rightExt, memberIndices, firstIndex: ni });
        }

        // Rendert den Inhalt eines ^u/^b/^d-Segments oder Plain-Text-Segments ohne eigenen nowrap-Span
        const renderMember = (s, mi) => {
            if (!s.startsWith('^')) {
                return s || null;
            } else if (s.startsWith('^u')) {
                const content = s.substring(2, s.length - 3);
                return <span key={`underline-${mi}`} style={{ textDecoration: 'underline' }}>{renderWithEll(content, `u-${mi}`)}</span>;
            } else if (s.startsWith('^b')) {
                const content = s.substring(2, s.length - 3);
                const { left, inner, right } = bracketTrim(content);
                return (
                    <React.Fragment key={`cant-bracket-${mi}`}>
                        {renderWithEll(left, `bl-${mi}`)}
                        <span className="psalm-cant-bracket">{renderWithEll(inner || content, `bi-${mi}`)}</span>
                        {'\u2060'}{renderWithEll(right, `br-${mi}`)}
                    </React.Fragment>
                );
            } else if (s.startsWith('^d')) {
                const content = s.substring(2, s.length - 3);
                return <span key={`flexa-dot-${mi}`} className="psalm-cant-flexa-dot">{content}</span>;
            }
            return null;
        };

        return segments.map((segment, index) => {
            // Nowrap-Gruppe: erstes Mitglied rendert die gesamte Gruppe im gemeinsamen nowrap-Span
            if (nowrapGroupOf.has(index)) {
                const gid = nowrapGroupOf.get(index);
                const info = nowrapGroupInfo.get(gid);
                if (info.firstIndex !== index) return null;
                return (
                    <span key={`nowrap-group-${index}`} style={{ whiteSpace: 'nowrap' }}>
                        {info.leftExt}
                        {info.memberIndices.map(mi => renderMember(segments[mi], mi))}
                        {info.rightExt}
                    </span>
                );
            }
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
                return <span key={`ellipsis-${index}`} className='text-gray-500 dark:text-gray-400 italic' aria-hidden="true">{content}</span>;
            } else if (segment.startsWith('^RUBR')) {
                const content = segment.substring(5, segment.length - 6);
                return <span key={`long-rubric-${index}`} className="long-rubric" aria-hidden="true">{content}</span>;
            } else if (segment.startsWith('^STAR')) {
                const tail = segment.substring(5, segment.length - 6);
                return (
                    <React.Fragment key={`mute-star-${index}`}>
                        <span style={{ whiteSpace: 'nowrap' }}>
                            {tail && processInlineFormats(tail)}
                            <span className="sr-only">.</span>
                            <span aria-hidden="true">{'\u00a0*'}</span>
                        </span>
                        {'\n'}
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
                                leading-[1.2em]"
                                    aria-hidden="true">
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