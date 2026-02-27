import React, { Fragment, useState, useRef, useEffect } from 'react';
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

const psalmToneImageSrc = (mode) => `${process.env.PUBLIC_URL}/images/psalmtones/${mode}.png`;

const getDoxology = (localPrefLanguage, psalm) => {
    if (localPrefLanguage === "_lat" && psalm.text_lat) {
        return "Glória Patri et Fílio^*"
            + "et Spirítui Sancto.^p"
            + "Sicut erat in princípio^*"
            + "et in sáecula saeculórum. Amen.";
    }
    if (localPrefLanguage === "_cant" && psalm.text_cant) {
        return "Ehre sei dem |Vater 2und 1dem ||Sohn^*"
            + "und dem 3|Hei2li1gen ||Geist,^p"
            + "wie im Anfang, so°auch°2|jetzt°1und°||alle°Zeit^*"
            + "und in 3|E2wig1keit. ||Amen.";
    }
    return "Ehre sei dem Vater und dem Sohn^*"
        + "und dem Heiligen Geist,^p"
        + "wie im Anfang, so°auch°jetzt°und°alle°Zeit^*"
        + "und in Ewigkeit. Amen.";
};

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

    const doxology = getDoxology(localPrefLanguage, psalm);
    const cantMode = localPrefLanguage === '_cant' && psalm.text_cant ? psalm.text_mode : null;

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
                      psalm={psalm}
                      text={text}
                      doxology={doxology}
                      localPrefLanguage={localPrefLanguage}
                      number={number}
                  />
                : <>
                      {text && <div className="whitespace-pre-wrap">
                          {formatPrayerText(text, localPrefLanguage)}
                      </div>}
                      {(![151, 160].includes(number) || (number === 151 && localPrefLanguage === "_lat")) &&
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

// Psalmodie-Kadenzstruktur je Psalmton: { Mittelkadenz: [v, b], Schlusskadenz: [v, b] }
const PSALM_TONE_CADENCE = {
    'I': { mk: [0, 2], sk: [2, 1] },
    'Ia': { mk: [0, 2], sk: [2, 1] },
    'Ig': { mk: [0, 2], sk: [2, 1] },
    'Im': { mk: [0, 2], sk: [2, 1] },
    'II': { mk: [0, 1], sk: [1, 1] },
    'IIc': { mk: [0, 1], sk: [1, 1] },
    'IIg': { mk: [0, 1], sk: [1, 1] },
    'IIm': { mk: [0, 1], sk: [1, 1] },
    'III': { mk: [0, 2], sk: [2, 1] },
    'IV': { mk: [2, 1], sk: [3, 1] },
    'IVa': { mk: [2, 1], sk: [3, 1] },
    'IVg': { mk: [2, 1], sk: [3, 1] },
    'V': { mk: [0, 1], sk: [0, 2] },
    'VI': { mk: [1, 1], sk: [3, 1] },
    'VII': { mk: [0, 2], sk: [0, 2] },
    'VIIa': { mk: [0, 2], sk: [0, 2] },
    'VIII': { mk: [0, 1], sk: [2, 1] },
    'VIIIa': { mk: [0, 1], sk: [2, 1] },
    'VIIIb': { mk: [0, 1], sk: [2, 1] },
    'VIIIc': { mk: [0, 1], sk: [2, 1] },
    'IX': { mk: [0, 2], sk: [2, 1] },
    'X': { mk: [0, 1], sk: [0, 2] },
};

// Komponente für den _cant-Modus: Notenzeile als Ton-Button + Popup-Auswahl + Psalmtext
const PsalmCantDisplay = ({ psalm, text, doxology, localPrefLanguage, number }) => {
    const canonicalMode = psalm.text_mode || 'IX';
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

    const availableTones = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

    const showDoxology = ![151, 160].includes(number)
        || (number === 151 && localPrefLanguage === '_lat');

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
                        <div className="flex flex-wrap gap-1">
                            {availableTones.map(mode => (
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
                                    {mode}
                                </button>
                            ))}
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

// Wandelt die abstrakten Gesangsmarker (|, ||, 1–4, ~, 0) in ^u/^b-Tags um.
// Wird als Subroutine in formatPrayerText aufgerufen wenn marker === 'cant'.
const formatCantMarkers = (text, mode) => {
    const cadence = PSALM_TONE_CADENCE[mode] || PSALM_TONE_CADENCE['IX']; // Default auf I, falls kein Psalmton angegeben
    if (!cadence) return text;  // unbekannter Psalmton: Text unverändert lassen

    // Teile in Halbverse auf. Trennzeichen ^*, ^p, ^+ bleiben im Array (captureGroups)
    const halfVerseRe = /(\^\*|\^p|\^\+)/;
    const parts = text.split(halfVerseRe);
    // parts = [hv0, sep0, hv1, sep1, …] wobei sep auch leer sein kann

    // Klassifiziere jeden Halbvers-Index: Mittelkadenz (mk) oder Schlusskadenz (sk)
    // Trenner ^* = Mittelkadenz, ^p = Schlusskadenz, ^+ = Flexa
    // Für jeden Halbvers ermitteln wir seinen nachfolgenden Trenner
    const result = [];
    let i = 0;
    while (i < parts.length) {
        const hv = parts[i];
        const sep = parts[i + 1] || '';
        i += 2;

        let cadenceType;
        if (sep === '^*') cadenceType = 'mk';
        else if (sep === '^p') cadenceType = 'sk';
        else if (sep === '^+') cadenceType = 'flexa';
        else cadenceType = 'sk'; // letzter Halbvers (kein Trenner) → Schlusskadenz

        result.push(formatHalfVerse(hv, cadence, cadenceType));
        if (sep) result.push(sep);
    }
    return result.join('');
};

// Verarbeitet einen einzelnen Halbvers und setzt ^u/^b-Tags
const formatHalfVerse = (hv, cadence, cadenceType) => {
    if (!hv || !hv.trim()) return hv;

    // --- Flexa-Sonderfall (§ Sonderfall 4) ---
    if (cadenceType === 'flexa') {
        // | vorhanden → Silbe vor | unterstreichen
        if (/(?<![|])\|(?![|])/.test(hv)) {
            // einfaches |: Silbe davor unterstreichen
            // Silbe = alles zwischen letztem Wort-Anfang und dem |-Marker
            return hv.replace(/(\S+)(?<![|])\|(?![|])/, (_m, syl) => `^u${syl}^0u|`);
        }
        // ~ vorhanden → durch ~ verbundene Silben klammern
        if (hv.includes('~')) {
            return hv.replace(/(\S+)~(\S+)/g, (_m, a, b) => `^b${a}${b}^0b`);
        }
        // kein | und kein ~ → keine Markierung
        return hv;
    }

    const { v, b } = cadenceType === 'mk'
        ? { v: cadence.mk[0], b: cadence.mk[1] }
        : { v: cadence.sk[0], b: cadence.sk[1] };

    // --- Abstrakte Marker aus dem Halbvers extrahieren ---
    // Marker: ||, |, 1, 2, 3, 4, ~, 0 (stehen unmittelbar vor der Silbe)
    // Wir zerlegen den Halbvers in eine Folge von Token.
    // Baue eine Tokenliste: [{prefix: 'Wortgefüge davor', markers: [...], text: 'Silbe+Rest'}]
    // Einfacherer Ansatz: Trenne den Halbvers an Marker-Positionen
    // Splitte bei Marker-Sequenzen (bleiben als Capture-Group)
    const markerSplitRe = /((?:[|]{1,2}|[1-4]|~|(?<!\^)0)+)/g;
    const segments = hv.split(markerSplitRe); // abwechselnd: Text, Marker, Text, Marker, ...

    // Baue eine lineare Liste von Segmenten: [{type:'text'|'marker', val}]
    const tokens = segments.map((s, idx) => ({
        type: idx % 2 === 0 ? 'text' : 'marker',
        val: s
    })).filter(t => t.val !== '');

    // Extrahiere die Marker-Positionen mit ihren Inhalten
    // Marker-Folgen können mehrere Zeichen haben, z.B. "2|" = Countdown 2 + Nebenbetonung
    // Wir bauen eine Positionsliste für die wichtigen Marker:
    // - positions der ||, |, 1,2,3,4 (in Textleserichtung)
    let dblBar = -1;   // Index des ||
    let sglBars = [];  // Indizes der |
    let countdowns = {}; // {1: idx, 2: idx, 3: idx, 4: idx}
    let tildeIdx = -1; // Index von ~

    // Wir arbeiten mit einem Array von "slots" (Silbenpositionen, inkl. Präfix-Text)
    // Jeder Slot hat: vorhergehender Text (ungekennzeichnet), Marker-Set, Silben-Text (erster Buchstabe bis nächster Marker)
    // Vereinfachung: Wir rekonstruieren den Text mit Tags direkt aus den Tokens.

    // Zähle ||-Positionen und |-Positionen (token-Index)
    let tokenIdx = 0;
    for (const t of tokens) {
        if (t.type === 'marker') {
            if (t.val.includes('||')) dblBar = tokenIdx;
            if (/(?<!\|)\|(?!\|)/.test(t.val)) sglBars.push(tokenIdx);
            if (t.val.includes('~')) tildeIdx = tokenIdx;
            for (const d of ['4', '3', '2', '1']) {
                if (t.val.includes(d) && !(d in countdowns)) {
                    countdowns[d] = tokenIdx;
                }
            }
        }
        tokenIdx++;
    }

    // Prüfe: hat der Halbvers überhaupt || ? (Minimalvoraussetzung)
    if (dblBar < 0) return hv; // kein ||: ungekennzeichnet, zurückgeben

    // Prüfe Sonderfall 1 (b=1): || steht VOR | im Text (Nebenbetonung am Versende)
    const sonderfall1 = (b === 1) && sglBars.length > 0 && sglBars.some(idx => idx > dblBar);

    // Prüfe Sonderfall 3 (b=1): 4-Marker vorhanden
    const has4 = '4' in countdowns;
    const v_eff = (b === 1 && has4) ? v + 1 : v;

    // Bestimme Kadenzanfang (Index des ersten aktiven Markers):
    let cadStartIdx = -1;
    if (b === 2) {
        // Kadenzanfang bei erstem | oder || (welches früher im Text steht)
        const firstBarIdx = Math.min(
            dblBar,
            ...sglBars.filter(idx => idx < dblBar)
        );
        cadStartIdx = isFinite(firstBarIdx) ? firstBarIdx : dblBar;
    } else {
        // b = 1
        if (sonderfall1) {
            // Kadenzanfang: erster aktiver Countdown oder ||
            const active = Object.entries(countdowns)
                .filter(([k]) => parseInt(k) <= v_eff)
                .sort((a, b) => parseInt(b[0]) - parseInt(a[0])); // absteigend nach Zahl (größte = früheste)
            cadStartIdx = active.length > 0 ? active[0][1] : dblBar;
        } else {
            if (v_eff === 0) cadStartIdx = dblBar;
            else {
                const key = String(v_eff);
                cadStartIdx = countdowns[key] !== undefined ? countdowns[key] : dblBar;
            }
        }
    }

    // Nun rekonstruiere den Text mit ^u/^b-Tags
    // Strategie: baue den Output-String Token für Token
    // Kategorien für jeden Token (nach cadStartIdx):
    // - vor Kadenz: Text unverändert, Marker entfernen (nicht aktiv)
    // - Kadenzanfang: ^u...^0u um Silbe
    // - innerhalb Kadenz: ^b-Gruppen nach Tonzuweisung

    // Zuerst: Welche Tokens sind die "Silbenträger" (auf welchen Ton fallen sie)?
    // Für die Tonzuweisung brauchen wir die Reihenfolge der aktiven Marker ab cadStartIdx.

    // Baue Ton-Zuweisung:
    // tone[tokenIdx] = Tonnummer (4=Kadenzanfang, 3, 2, 1=letzter) oder 0=Rezitationston
    const tone = new Array(tokens.length).fill(0);

    if (b === 2) {
        // Sonderfall drei betonte Silben (zwei | + ein ||)?
        const preBars = sglBars.filter(idx => idx < dblBar);
        const threeStressed = preBars.length >= 2;

        if (threeStressed) {
            // drei betonte Silben: erster |, zweiter |, ||
            // sortiere preBars
            preBars.sort((a, b) => a - b);
            const bar1 = preBars[0]; // erste betonte
            const bar2 = preBars[1]; // zweite betonte
            // Ton 4: ab bar1 bis vor bar2
            // Ton 3: ab bar2 bis ||
            // Ton 2: || + erste Folgesilbe (durch ~) — geklammert
            // Ton 1: || selbst... wait, let me re-read §1.3
            // Sonderfall: drei betonte Silben:
            // 1. Kadenzton: erste betonte Silbe (|), ggf. durch Tilde verbundene weitere Silbe(n)
            // 2. Kadenzton: alle weiteren (unbetonten) Silben bis zur zweiten betonten Silbe (|) ausschließlich; wenn mehrere: durch ^b geklammert
            // 3. Kadenzton: die zweite betonte Silbe (|) und die folgende unbetonte Silbe, durch ^b geklammert
            // 4. Kadenzton: die abschließende betonte Silbe (||)
            cadStartIdx = bar1;
            assignTonesThreeStressed(tone, tokens, bar1, bar2, dblBar, tildeIdx);
        } else {
            // Normale b=2-Zuweisung
            assignTonesB2(tone, tokens, cadStartIdx, dblBar, sglBars, tildeIdx);
        }
    } else {
        // b=1
        if (sonderfall1) {
            assignTonesB1Sonderfall1(tone, tokens, cadStartIdx, dblBar, sglBars);
        } else {
            assignTonesB1(tone, tokens, cadStartIdx, dblBar, has4);
        }
    }

    // Rekonstruiere den Text mit Tags
    return buildTaggedText(tokens, tone);
};

// Hilfsfunktion: Tonzuweisung für b=2 (weiblicher/männlicher Versschluss)
const assignTonesB2 = (tone, tokens, cadStartIdx, dblBar, sglBars, tildeIdx) => {
    // frühere betonte Silbe = cadStartIdx = min(|,||)
    // spätere betonte Silbe = später von | und ||
    const postBars = sglBars.filter(idx => idx > dblBar);

    const firstStressed = cadStartIdx; // Ton 4
    const secondStressed = postBars.length > 0 ? postBars[0] : dblBar; // Ton 2 (oder letzter, wenn kein post-bar)

    // Bestimme ob weiblicher oder männlicher Versschluss:
    // männlich = nach der zweiten betonten Silbe folgen keine weiteren (unbetonten) Text-Tokens mehr
    const afterSecond = tokens.slice(secondStressed + 1);
    const hasPostSyllables = afterSecond.some(t => t.type === 'text' && t.val.trim().length > 0);
    const isMaennlich = !hasPostSyllables;

    // Ton 4: firstStressed
    tone[firstStressed] = 4;

    if (tildeIdx >= 0 && tildeIdx > firstStressed && tildeIdx < (isMaennlich ? secondStressed : dblBar)) {
        // Tilde definiert abweichende Gruppen: Silben bis Tilde → Ton 3, danach → Ton 2
        // Ton 3: von nach firstStressed bis tildeIdx (inkl.)
        for (let i = firstStressed + 1; i <= tildeIdx; i++) {
            if (tokens[i]?.type === 'text') tone[i] = 3;
        }
        // Ton 2: von nach tildeIdx bis secondStressed
        for (let i = tildeIdx + 1; i <= secondStressed; i++) {
            if (tokens[i]?.type === 'text' || tokens[i]?.val.replace(/[|~0]/g, '').length > 0) tone[i] = 2;
        }
        tone[secondStressed] = 2;
        // Ton 1: nach secondStressed
        for (let i = secondStressed + 1; i < tokens.length; i++) {
            if (tokens[i]?.type === 'text') tone[i] = 1;
        }
        return;
    }

    if (!isMaennlich) {
        // Weiblicher Versschluss:
        // Ton 3: Silben zwischen firstStressed und secondStressed (||), durch ^b
        for (let i = firstStressed + 1; i < dblBar; i++) {
            if (tokens[i]?.type === 'text') tone[i] = 3;
        }
        // Ton 2: secondStressed (dblBar oder post-bar)
        tone[dblBar] = 2;
        if (postBars.length > 0) tone[postBars[0]] = 2;
        // Ton 1: nach secondStressed
        for (let i = (postBars.length > 0 ? postBars[0] : dblBar) + 1; i < tokens.length; i++) {
            if (tokens[i]?.type === 'text') tone[i] = 1;
        }
    } else {
        // Männlicher Versschluss:
        // Erste Silbe nach firstStressed → Ton 3 (allein)
        let firstAfter = -1;
        for (let i = firstStressed + 1; i < secondStressed; i++) {
            if (tokens[i]?.type === 'text' && tokens[i].val.trim()) { firstAfter = i; break; }
        }
        if (firstAfter >= 0) tone[firstAfter] = 3;
        // Weitere bis vor secondStressed → Ton 2, geklammert
        for (let i = (firstAfter >= 0 ? firstAfter + 1 : firstStressed + 1); i < secondStressed; i++) {
            if (tokens[i]?.type === 'text') tone[i] = 2;
        }
        // Ton 1: secondStressed (Versende)
        tone[secondStressed] = 1;
    }
};

// Hilfsfunktion: Sonderfall drei betonte Silben (b=2)
const assignTonesThreeStressed = (tone, tokens, bar1, bar2, dblBar, _tildeIdx) => {
    tone[bar1] = 4;
    // Ton 3: Silben zwischen bar1 und bar2 (ausschließlich)
    for (let i = bar1 + 1; i < bar2; i++) {
        if (tokens[i]?.type === 'text') tone[i] = 3;
    }
    // Ton 2: bar2 und die folgende unbetonte Silbe, durch ^b
    tone[bar2] = 2;
    let nextAfterBar2 = -1;
    for (let i = bar2 + 1; i < dblBar; i++) {
        if (tokens[i]?.type === 'text' && tokens[i].val.trim()) { nextAfterBar2 = i; break; }
    }
    if (nextAfterBar2 >= 0) tone[nextAfterBar2] = 2; // gleiche Gruppe wie bar2
    // Ton 1: dblBar
    tone[dblBar] = 1;
};

// Hilfsfunktion: Tonzuweisung für b=1 (Normalfall)
const assignTonesB1 = (tone, tokens, cadStartIdx, dblBar, has4) => {
    tone[cadStartIdx] = 4; // Kadenzanfang = Ton 4 (erster aktiver)
    // Töne zwischen Kadenzanfang und || → Ton 3 (einzeln) oder nicht explizit geklammert
    for (let i = cadStartIdx + 1; i < dblBar; i++) {
        if (tokens[i]?.type === 'text') tone[i] = 3;
    }
    // || → wenn has4 (Sonderfall 3): Ton 1 (letzter); sonst: Ton 2 (vorletzter)
    tone[dblBar] = has4 ? 1 : 2;
    if (!has4) {
        // Folgesilben → Ton 1, geklammert
        for (let i = dblBar + 1; i < tokens.length; i++) {
            if (tokens[i]?.type === 'text') tone[i] = 1;
        }
    }
};

// Hilfsfunktion: Sonderfall 1 b=1 (Nebenbetonung am Versende, || vor |)
const assignTonesB1Sonderfall1 = (tone, tokens, cadStartIdx, dblBar, sglBars) => {
    const postBar = sglBars.find(idx => idx > dblBar);
    tone[cadStartIdx] = 4;
    for (let i = cadStartIdx + 1; i < dblBar; i++) {
        if (tokens[i]?.type === 'text') tone[i] = 3;
    }
    // || + Folgesilben bis vor | → Ton 2 (vorletzter), geklammert
    tone[dblBar] = 2;
    if (postBar !== undefined) {
        for (let i = dblBar + 1; i < postBar; i++) {
            if (tokens[i]?.type === 'text') tone[i] = 2;
        }
        // | + Folgesilben → Ton 1 (letzter), geklammert
        tone[postBar] = 1;
        for (let i = postBar + 1; i < tokens.length; i++) {
            if (tokens[i]?.type === 'text') tone[i] = 1;
        }
    }
};

// Baut den getaggten Text aus Tokens und Ton-Zuweisung zusammen
const buildTaggedText = (tokens, tone) => {
    // Marker-Tokens entfernen (nicht rendern), Text-Tokens mit Tags versehen
    // Gleiche Töne (≥ 1) hintereinander werden mit ^b...^0b geklammert wenn Ton = 3 oder 1 (letzter/drittletzter)
    // Ton 4 = Kadenzanfang → ^u...^0u
    // Ton 2 oder 1 in Gruppe → ^b...^0b um den Vokal der Silbe...
    // VEREINFACHUNG: Wir wenden die Klammer auf den gesamten Text-Inhalt des Segments an,
    // da die genaue Vokal-Position in der Enddarstellung durch CSS gehandhabt wird.
    // Die Spec §1 beschreibt den ^b-Marker als vor dem silbenbildenden Vokal stehend (für die Dateneingabe),
    // aber beim Rendering (formatCantMarkers) können wir die ganze Silbe klammern.

    let out = '';
    let i = 0;
    while (i < tokens.length) {
        const t = tokens[i];

        if (t.type === 'marker') {
            // Marker entfernen (nicht in Output)
            i++;
            continue;
        }

        // Text-Token
        const t_tone = tone[i];

        if (t_tone === 0) {
            // Rezitationston: Text unverändert
            out += t.val;
            i++;
            continue;
        }

        if (t_tone === 4) {
            // Kadenzanfang: ^u...^0u
            out += `^u${t.val}^0u`;
            i++;
            continue;
        }

        // Töne 3, 2, 1: ggf. Klammer
        // Sammle zusammenhängende Text-Tokens mit gleichem Ton (ohne Marker dazwischen)
        // → werden zu einer ^b-Gruppe
        // Prüfe: gibt es benachbarte Text-Tokens mit gleichem Ton?
        let group = [t.val];
        let j = i + 1;
        // Überspringe Marker-Tokens zwischen Text-Tokens mit gleichem Ton
        while (j < tokens.length) {
            if (tokens[j].type === 'marker') { j++; continue; }
            if (tone[j] === t_tone) {
                group.push(tokens[j].val);
                j++;
            } else {
                break;
            }
        }

        const groupText = group.join('');
        if (group.length > 1) {
            // Mehrere Silben auf gleichem Ton → klammern
            // Verschachtelung: wenn Ton 4 (^u) direkt vorausgeht, ist bereits geregelt
            out += `^b${groupText}^0b`;
        } else {
            out += groupText;
        }

        // Überspringe alle verarbeiteten Tokens
        i = j;
    }
    return out;
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
        .replace(/(?<!\^)(?<!\^0)([^ \n^]*)\^\*/g, isAps ? '$1\u00A0^r*^0r\n' : '^STAR$1^0STAR')
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

        // ERWEITERTE REGEX um Satzzeichen-Marker zu erfassen
        const segments = text.split(/(\^RUBR.*?\^0RUBR|\^r.*?\^0r|\^w.*?\^0w|\^f.*?\^0f|\^v.*?\^0v|\^c.*?\^0c|\^k.*?\^0k|\^u.*?\^0u|\^b.*?\^0b|\^ELL.*?\^0ELL|§FN\d+§|§PUNCT\d+§|\^STAR.*?\^0STAR)/g).filter(Boolean);

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
            } else if (segment.startsWith('^u')) {
                const content = segment.substring(2, segment.length - 3);
                return <span key={`underline-${index}`} style={{ textDecoration: 'underline' }}>{content}</span>;
            } else if (segment.startsWith('^b')) {
                const content = segment.substring(2, segment.length - 3);
                return <span key={`cant-bracket-${index}`} className="psalm-cant-bracket">{content}</span>;
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