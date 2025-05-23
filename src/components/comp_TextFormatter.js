import formatBibleRef from './comp_BibleRefFormatter.js';
import React, { Fragment } from 'react';
import { getLocalStorage } from './utils/localStorage.js';

// Formatiert Psalmen mit Nummer, Versen, Titel und Text
export const formatPsalm = (psalm, localPrefLanguage = '') => {
    if (!psalm || !psalm.text) return null;

    const number = psalm[`number${localPrefLanguage}`] || psalm.number;
    const verses = psalm[`verses${localPrefLanguage}`] || psalm.verses || "";
    const title = psalm[`title${localPrefLanguage}`] || psalm.title || "";
    const quote = psalm[`quote${localPrefLanguage}`] || psalm.quote || "";
    const text = psalm[`text${localPrefLanguage}`] || psalm.text;

    const hasLatin = localPrefLanguage === "_lat"
        && psalm[`text${localPrefLanguage}`];
    const doxology = hasLatin
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
            {text && <div className="whitespace-pre-wrap">{formatPrayerText(text)}</div>}
            {number !== 160 && <div className="whitespace-pre-wrap">{formatPrayerText(doxology)}</div>}
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
export const formatPrayerText = (provText, marker = '',
    hour = '', texts = {},
    prefSrc = '', localPrefLanguage = '', isNarrowScreen = false) => {
    if (!provText || provText === 'LEER') return null;
    const { season, isCommemoration, combinedSWD = '' } = texts;
    const { nominativ, genitiv, vokativ } = texts?.laudes?.[prefSrc] || {};

    const useFootnoteList = getLocalStorage('prefFootnotes') === 'true';
    const easterAntiphon = "^p^rAnstelle des Responsoriums wird die\u00a0folgende\u00a0Antiphon\u00a0genommen:^0r^lDas ist der Tag, den der Herr gemacht hat. Lasst\u00a0uns\u00a0jubeln und seiner uns freuen. Halleluja.";
    const latinEasterAntiphon = "^p^rLoco responsorii dicitur:^0r^lHæc est dies quam fecit Dóminus: exsultémus\u00a0et\u00a0lætémur\u00a0in\u00a0ea.\u00a0Allelúia."

    const orSchluss = ['lesehore', 'laudes', 'vesper'].includes(hour)
        ? (marker === 'commemoration' && isCommemoration === true)
            ? {
                vR: "",
                V: "",
                S: "",
                R: "",
                Sgroß: "",
                Rgroß: "",
                vR_lat: "",
                V_lat: "",
                S_lat: "",
                R_lat: "",
                Sgroß_lat: "",
                Rgroß_lat: ""
            } : {
                vR: " Darum bitten wir durch ihn, Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit.",
                V: " Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit.",
                S: ", der du in der Einheit des Heiligen Geistes mit Gott dem Vater lebst und herrschest in alle Ewigkeit.",
                R: ", der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit.",
                Sgroß: ". Der du in der Einheit des Heiligen Geistes mit Gott dem Vater lebst und herrschest in alle Ewigkeit.",
                Rgroß: ". Der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit.",
                vR_lat: " Qui técum vivit et regnat in unitáte Spíritus Sancti, Deus, per ómnia sǽcula sæculórum. Amen.",
                V_lat: " Per Dóminum nostrum Iesum Christum, Fílium tuum, qui tecum vivit et regnat in unitáte Spíritus Sancti, Deus, per ómnia sǽcula sæculórum. Amen.",
                S_lat: ", qui vivis et regnas in unitáte Spíritus Sancti, Deus, per ómnia sǽcula sæculórum. Amen.",
                R_lat: ", qui tecum vivit et regnat in unitáte Spíritus Sancti, Deus, per ómnia sǽcula sæculórum. Amen.",
                Sgroß_lat: ". Qui vivis et regnas in unitáte Spíritus Sancti, Deus, per ómnia sǽcula sæculórum. Amen.",
                Rgroß_lat: ". Qui tecum vivit et regnat in unitáte Spíritus Sancti, Deus, per ómnia sǽcula sæculórum. Amen.",
            } : {
            vR: " Darum bitten wir durch ihn, Christus, unseren Herrn.",
            V: " Darum bitten wir durch Christus, unseren Herrn.",
            S: ", der du lebst und herrschest in alle Ewigkeit.",
            R: ", der mit dir lebt und herrscht in alle Ewigkeit.",
            Sgroß: ". Der du lebst und herrschest in alle Ewigkeit.",
            Rgroß: ". Der mit dir lebt und herrscht in alle Ewigkeit.",
            vR_lat: " Qui vivit et regnat in sǽcula sæculórum. Amen.",
            V_lat: " Per Christum Dóminum nostrum. Amen.",
            S_lat: ", qui vivis et regnas in sǽcula sæculórum. Amen.",
            R_lat: ", qui vivit et regnat in sǽcula sæculórum. Amen.",
            Sgroß_lat: ". Qui vivis et regnas in sǽcula sæculórum. Amen.",
            Rgroß_lat: ". Qui vivit et regnat in sǽcula sæculórum. Amen.",
        }

    marker = (marker === 'commemoration') ? '' : marker;
    let text = marker ? `^r${marker}^0r${provText}` : provText;
    text = text
        .replace(/_lat/g, '')
        .replace(/_neu/g, '')
        .replace(/°/g, '\u00A0')
        .replace(/\^\*/g, '\u00A0*\n')
        .replace(/\^\+/g, '\u00A0†\n')
        .replace(/\^\//g, isNarrowScreen ? '\n' : '    ')
        .replace(/\^-/g, '\u2011')
        .replace(/(\w)–/g, '$1\u200C–')
        .replace(/–(\w)/g, '–\u200C$1')
        .replace(/([0-9])-([0-9])/g, '$1\u200C\u2013\u200C$2')
        .replace(/\^ö/g, season === 'o' ? ' Halleluja.' : '')
        .replace(/\^Ö/g, season === 'q' ? '' : ' Halleluja.')
        .replace(/\^Lö/g, season === 'o' ? ' Allelúia.' : '')
        .replace(/\^LÖ/g, season === 'q' ? '' : ' Allelúia.')
        .replace(/\^R/g, (combinedSWD.startsWith('o-1-') || combinedSWD === 'o-2-0') ? easterAntiphon : '')
        .replace(/\^LR/g, (combinedSWD.startsWith('o-1-') || combinedSWD === 'o-2-0') ? latinEasterAntiphon : '')
        .replace(/\^ORvR/g, orSchluss.vR)
        .replace(/\^ORV/g, orSchluss.V)
        .replace(/,\^ORS/g, orSchluss.S)
        .replace(/,\^ORR/g, orSchluss.R)
        .replace(/.\^ORS/g, orSchluss.Sgroß)
        .replace(/.\^ORR/g, orSchluss.Rgroß)
        .replace(/\^ORlvR/g, orSchluss.vR_lat)
        .replace(/\^ORlV/g, orSchluss.V_lat)
        .replace(/,\^ORlS/g, orSchluss.S_lat)
        .replace(/,\^ORlR/g, orSchluss.R_lat)
        .replace(/.\^ORlS/g, orSchluss.Sgroß_lat)
        .replace(/.\^ORlR/g, orSchluss.Rgroß_lat)
        .replace(/\^NP/g, getLocalStorage('popeName') || 'Leo')
        .replace(/\^NB/g, getLocalStorage('bishopName') || '^N')
        .replace(/\^NH/g, '^N');

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

    text = text
        .replace(/\^NOM/g, '^N')
        .replace(/\^GEN/g, '^N')
        .replace(/\^VOK/g, '^N');

    let footnoteCounter = 0;
    const footnoteMap = new Map();
    const footnoteNumbers = new Map();
    const allFootnotes = [];

    text = text.replace(/\s*\{(\d{1,2})#(.*?)\}/g, (match, number, content) => {
        const marker = `§FN${footnoteCounter}§`;
        footnoteMap.set(marker, content);
        footnoteNumbers.set(marker, number);
        allFootnotes.push({
            number: number,
            content: content
        });
        footnoteCounter++;
        return useFootnoteList ? marker : ` ${marker}`;
    });

    // Inline-Formatierungen als React-Elemente verarbeiten
    const processInlineFormats = (text) => {
        text = text
            .replace(/\^l/g, '\n')
        const segments = text.split(/(\^r.*?\^0r|\^w.*?\^0w|\^f.*?\^0f|\^v.*?\^0v|\^\(|\^\)|\^N|§FN\d+§)/g).filter(Boolean);

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
            } else if (segment === '^(') {
                return <span key={`open-${index}`} className="text-rubric">(</span>;
            } else if (segment === '^)') {
                return <span key={`close-${index}`} className="text-rubric">)</span>;
            } else if (segment === '^N') {
                return <span key={`name-${index}`} className="text-rubric">N.</span>;
            } else if (segment.match(/^§FN\d+§$/)) {
                const number = footnoteNumbers.get(segment);
                const content = footnoteMap.get(segment);

                if (useFootnoteList) {
                    // Fußnote zur Gesamtliste hinzufügen
                    return <sup key={`footnote-ref-${index}`}>{number}</sup>;
                } else {
                    return (
                        <Fragment key={`footnote-${index}`}>
                            <span className="inline-block text-fussnote">{formatBibleRef(content, true)}</span>
                        </Fragment>
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

    processedText = processedText.replace(/(\^r.*?\^0r|\^v.*?\^0v|\^\(|\^\))/g, (match) => {
        const marker = `§MARKER${markerCounter}§`;
        markerMap.set(marker, match);
        markerCounter++;
        return marker;
    });

    // Text in Absätze aufteilen
    let segments = processedText.split(/(?=\^[phq])/);

    // Wenn der Text nicht mit einem Format-Tag beginnt, als Standard-Absatz behandeln
    if (!segments[0].startsWith('^')) {
        segments = [segments[0], ...segments.slice(1)];
    }

    return (
        <>
            {segments
                .filter(segment => segment.trim().length > 0)
                .map((segment, index) => {
                    let format = 'p';
                    let content = segment;

                    if (segment.startsWith('^')) {
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
                })}
            {useFootnoteList && allFootnotes.length > 0 && (
                <div className="mt-4 text-sm ">
                    {allFootnotes.map(fn => (
                        <span key={`footnote-${fn.number}`} className="inline-block mr-3">
                            <sup>{fn.number}&nbsp;&nbsp;</sup>
                            <span>{formatBibleRef(fn.content)}</span>
                        </span>
                    ))}
                </div>
            )}
        </>
    );
};