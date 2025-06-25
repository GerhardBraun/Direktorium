import React, { Fragment } from 'react';
import { getLocalStorage } from '../utils/localStorage.js';
import formatBibleRef from './BibleRefFormatter.js';
import { psalmsData } from '../data/PsHymn.ts';

export const firstCapital = (word) => {
    if (!word) return ''
    return word.includes(' ')
        ? word[0].toUpperCase() + word.slice(1)
        : word[0].toUpperCase() + word.slice(1).toLowerCase()
}

const resolveReference = (ref) => {
    if (!ref) return null;

    const wholePart = Math.floor(ref);
    const decimalStr = (ref % 1).toFixed(3).split('.')[1];
    const multiplier = decimalStr.replace(/0+$/, '').length === 1 ? 10 : 1000;
    const decimalPart = Math.round((ref % 1) * multiplier);

    const data = psalmsData[wholePart]?.[decimalPart] || {};

    return { number: wholePart, ...data };
};
// Hilfsfunktion zur Berechnung der maximalen Zeilenlänge in einem Hymnus
const calculateMaxLineLength = (text) => {
    if (!text.includes('^/')) {
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
        .replace(/\^\//g, '   ')
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
        // Dabei sowohl ^l als auch ^/ als potentielle Zeilenenden betrachten
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
// Formatiert Psalmen mit Nummer, Versen, Titel und Text
export const formatPsalm = (psalmRef, inv, localPrefLanguage = '') => {
    if (!psalmRef) return null;

    const psalm = resolveReference(psalmRef);
    if (!psalm || !psalm.text) return null;

    const number = psalm[`number${localPrefLanguage}`] || psalm.number;
    const text = psalm[`text${localPrefLanguage}`] || psalm.text;
    const verses = inv ? '' : psalm[`verses${localPrefLanguage}`] || psalm.verses || "";
    const title = inv ? '' : psalm[`title${localPrefLanguage}`] || psalm.title || "";
    const quote = inv ? '' : psalm[`quote${localPrefLanguage}`] || psalm.quote || "";

    const doxology =
        (localPrefLanguage === "_lat"
            && psalm.text_lat)
            ? "Glória Patri et Fílio^*et Spirítui Sancto.^pSicut erat in princípio, et°nunc°et°semper^*et in sǽcula sæculórum. Amen."
            : "Ehre sei dem Vater und dem Sohn^*und dem Heiligen Geist,^pwie im Anfang, so°auch°jetzt°und°alle°Zeit^*und in Ewigkeit. Amen.";

    return (
        <div className="mb-4">
            <div className="font-bold text-rubric">
                {number > 0 && (
                    number > 150 ? (<>Canticum: {formatBibleRef(verses)}</>) : (
                        <>  Psalm {number}
                            {verses && <>{formatBibleRef(`,${verses}`)}</>}
                        </>
                    ))}
            </div>
            {title && <div className="text-[0.9em] text-gray-400 mb-[0.66em]">{title}</div>}
            {quote && <div className="text-[0.9em] leading-[1.1em] italic text-gray-400 -mt-[0.66em] mb-[0.66em]">{formatPrayerText(quote)}</div>}
            {text && <div className="whitespace-pre-wrap">{formatPrayerText(text, localPrefLanguage)}</div>}
            {number !== 160 && <div className="whitespace-pre-wrap">{formatPrayerText(doxology, localPrefLanguage)}</div>}
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
    if (!provText || provText === 'LEER' || provText === 'LEER_lat') return null;
    const { season, isCommemoration, swdCombined = '' } = texts;
    const { nominativ, genitiv, vokativ } = texts?.laudes?.[prefSrc] || {};

    const useFootnoteList = getLocalStorage('prefFootnotes') === 'true';
    const useCommemoration = (marker === 'commemoration' && isCommemoration === true)

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
                    'vR': "Qui técum vivit et regnat in unitáte Spíritus Sancti, Deus, per ómnia sǽcula sæculórum.",
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

        // Bei Commemorationen alle Orationsschlüsse entfernen
        if (useCommemoration) {
            return text.replace(/([,.])(\^ORl?)(vR|V|S|R)/g, '$1');
        }

        const formLength = ['lesehore', 'laudes', 'vesper'].includes(hour)
            ? 'lang' : 'kurz';

        // Regex für Orationsschluss-Tags: (Satzzeichen)(^ORl?)(Kürzel)
        return text.replace(/([,.])(\^ORl?)(vR|V|S|R)/g, (match, punctuation, language, formula) => {

            let ending = orationEnding[language]?.[formLength]?.[formula];

            if (!ending) {
                console.warn(`Orationsschluss nicht gefunden: ${language}.${formLength}.${formula}`);
                return match; // Originaltext beibehalten
            }

            if (punctuation === '.') {
                ending = firstCapital(ending);
            }

            return punctuation + ' ' + ending;
        });
    };

    const replacePronomina = (text) => {
        if (nominativ) {
            text = text
                .replace(/Der heilige \^NOM/g, nominativ)
                .replace(/Die heilige \^NOM/g, nominativ)
                .replace(/Die heiligen \^NOM/g, nominativ);
        }

        if (genitiv) {
            text = text
                .replace(/des heiligen \^GEN/g, genitiv)
                .replace(/der heiligen \^GEN/g, genitiv)
                .replace(/auf seine Fürbitte/g, match =>
                    genitiv.startsWith('der') ? 'auf ihre Fürbitte' : match);
        }

        if (vokativ) {
            text = text
                .replace(/Heiliger \^VOK/g, vokativ)
                .replace(/Heilige \^VOK/g, vokativ)
                .replace(/tat ihm den/g, match =>
                    vokativ.startsWith('Heilige ') ? 'tat ihr den' : match)
                .replace(/gab ihm Weisheit/g, match =>
                    vokativ.startsWith('Heilige ') ? 'gab ihr Weisheit' : match);
        }

        text = text.replace(/\^(NOM|GEN|VOK|NH|N)/g, '^rN.^0r');
        return text;
    }

    marker = (marker === 'commemoration') ? '' : marker;
    let text = marker ? `^r${marker}^0r${provText}` : provText;
    const maxLineLength = calculateMaxLineLength(text);

    text = text
        .replace(/^›|(_lat|_neu)/g, '')
        .replace(/°/g, '\u00A0')
        .replace(/\^\*/g, '\u00A0*\n')
        .replace(/\^\+/g, '\u00A0†\n')
        .replace(/\^\//g, (() => {
            // Wenn keine ^/-Tags vorhanden oder maxLineLength <= widthForHymns, dann Leerzeichen
            // Andernfalls Zeilenumbruch
            return (maxLineLength > 0 && maxLineLength > widthForHymns) ? '\n' : '   ';
        })())
        .replace(/\^-/g, '\u2011')
        .replace(/(\w)–/g, '$1\u200C–')
        .replace(/–(\w)/g, '–\u200C$1')
        .replace(/([0-9])-([0-9])/g, '$1\u200C\u2013\u200C$2')
        .replace(/>([aeiouæ])/g, '^k$1^0k')
        .replace(/\^([()[\]])/g, '^r$1^0r')
        .replace(/\^ö/g, season === 'o' ? ' Halleluja.' : '')
        .replace(/\^Ö/g, season === 'q' ? '' : ' Halleluja.')
        .replace(/\^Lö/g, season === 'o' ? ' Allelúia.' : '')
        .replace(/\^LÖ/g, season === 'q' ? '' : ' Allelúia.')
        .replace(/\^NP/g, getLocalStorage('popeName') || 'Leo')
        .replace(/\^NB/g, getLocalStorage('bishopName') || '^N')
        .replace(/\^NdatP/g, getLocalStorage('popeNameLat') || 'Leóni')
        .replace(/\^NdatB/g, getLocalStorage('bishopNameLat') || '^N')
        .replace(/\^NakkP/g, getLocalStorage('popeNameLat')
            .replace(/i\b/g, 'em').replace(/o\b/g, 'um') || 'Leónem')
        .replace(/\^NakkB/g, getLocalStorage('bishopNameLat')
            .replace(/i\b/g, 'em').replace(/o\b/g, 'um') || '^N')
        .replace(/\^NablP/g, getLocalStorage('popeNameLat')
            .replace(/i\b/g, 'e') || 'Leóne')
        .replace(/\^NablB/g, getLocalStorage('bishopNameLat')
            .replace(/i\b/g, 'e') || '^N')
        .replace(/(HERRN?|GOTT)/g, (match) => {
            const word = firstCapital(match);
            return localPrefLanguage === '_neu' ? `^c${word}^0c` : word;
        })

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
        const segments = text.split(/(\^RUBR.*?\^0RUBR|\^r.*?\^0r|\^w.*?\^0w|\^f.*?\^0f|\^v.*?\^0v|\^c.*?\^0c|\^k.*?\^0k|§FN\d+§|§PUNCT\d+§)/g).filter(Boolean);

        return segments.map((segment, index) => {
            if (segment.startsWith('^r')) {
                const content = segment.substring(2, segment.length - 3);
                return <span key={`rubric-${index}`} className="text-rubric">{content}</span>;
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
            } else if (segment.startsWith('^RUBR')) {
                const content = segment.substring(5, segment.length - 6);
                return <span key={`long-rubric-${index}`} className="long-rubric">{content}</span>;
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
    const hasParagraphTags = /\^[phql]/.test(text);

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
    let segments = processedText.split(/(?=\^[phq])/);

    // KORREKTUR: Prüfen ob der Text mit einem ERKANNTEN Format-Tag beginnt
    if (!segments[0].match(/^\^[phq]/)) {
        // Wenn NICHT mit ^p, ^h oder ^q beginnt, als Standard-Absatz behandeln
        segments = [segments[0], ...segments.slice(1)];
    }

    return (
        <>
            {maxLineLength < 0 && (
                // Kontrollanzeige ausgeschaltet durch <-Zeichen
                <div className="text-xs text-gray-500 mb-2">
                    <div>Maximale Zeilenlänge: {maxLineLength}em</div>
                    <div>Bildschirmbreite: {widthForHymns}em</div >
                    <div>baseFontSize: {getLocalStorage('baseFontSize')}pt</div >
                    <div>innerWidth: {window.innerWidth}pt</div >
                </div>)}
            {
                segments
                    .filter(segment => segment.trim().length > 0)
                    .map((segment, index) => {
                        let format = 'p';  // Standard-Format
                        let content = segment;

                        // KORREKTUR: Nur bei erkannten Format-Tags verarbeiten
                        if (segment.match(/^\^[phq]/)) {
                            format = segment[1];
                            content = segment.slice(2);
                        }

                        let originalContent = content;
                        for (const [marker, originalTag] of markerMap) {
                            originalContent = originalContent.replace(marker, originalTag);
                        }

                        const processedContent = processInlineFormats(originalContent);

                        switch (format) {
                            case 'h':
                                return (
                                    <div key={index} className="whitespace-pre-wrap font-bold text-[0.9em] mt-2">
                                        {processedContent}
                                    </div>
                                );
                            case 'q':
                                return (
                                    <div key={index} className="whitespace-pre-wrap flex -mt-[0.75em] mb-[0.75em]">
                                        <span className="w-[0.8em] flex-shrink-0">–</span>
                                        <div>{processedContent}</div>
                                    </div>
                                );
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