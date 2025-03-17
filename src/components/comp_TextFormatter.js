import formatBibleRef from './comp_BibleRefFormatter.js';
import React, { Fragment } from 'react';

const doxology = "Ehre sei dem Vater und dem Sohn^*und dem Heiligen Geist,^pwie im Anfang so auch jetzt und alle Zeit^*und in Ewigkeit. Amen.";
const easterAntiphon = "^p^rAnstelle des Responsoriums wird die°folgende°Antiphon°genommen:^0r^lDas ist der Tag, den der Herr gemacht hat. Lasst°uns°jubeln und seiner uns freuen. Halleluja.";

// Formatiert Psalmen mit Nummer, Versen, Titel und Text
export const formatPsalm = (number, verses, title, quote, text) => {
    if (!text) return null;

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
        .replace(/°in°/g, ' in\u00A0')
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
    hour = '', texts = {}, prefSrc = '') => {
    if (!provText || provText === 'LEER') return null;
    const { season, week, isCommemoration } = texts;
    const { nominativ, genitiv, vokativ } = texts?.laudes?.[prefSrc] || {};
    const useFootnoteList = localStorage.getItem('prefFootnotes') === 'true';

    // Wenn marker='oration' und isCommemoration=true, dann leere orSchluss-Elemente
    const orSchluss = ['lesehore', 'laudes', 'vesper'].includes(hour)
        ? (marker === 'commemoration' && isCommemoration === true)
            ? {
                vR: "",
                V: "",
                S: "",
                R: "",
                Sgroß: "",
                Rgroß: ""
            }
            :
            {
                vR: " Darum bitten wir durch ihn, Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit.",
                V: " Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit.",
                S: ", der du in der Einheit des Heiligen Geistes mit Gott dem Vater lebst und herrschest in alle Ewigkeit.",
                R: ", der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit.",
                Sgroß: ". Der du in der Einheit des Heiligen Geistes mit Gott dem Vater lebst und herrschest in alle Ewigkeit.",
                Rgroß: ". Der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit."
            }
        : {
            vR: " Darum bitten wir durch ihn, Christus, unseren Herrn.",
            V: " Darum bitten wir durch Christus, unseren Herrn.",
            S: ", der du lebst und herrschest in alle Ewigkeit.",
            R: ", der mit dir lebt und herrscht in alle Ewigkeit.",
            Sgroß: ". Der du lebst und herrschest in alle Ewigkeit.",
            Rgroß: ". Der mit dir lebt und herrscht in alle Ewigkeit."
        }

    marker = (marker === 'commemoration') ? '' : marker;
    let text = marker ? `^r${marker}^0r${provText}` : provText;
    text = text
        .replace(/°/g, '\u00A0')
        .replace(/\^\*/g, '\u00A0*\n')
        .replace(/\^\+/g, '\u00A0†\n')
        .replace(/\^\//g, '    ')
        .replace(/(\w)–/g, '$1\u200C–')
        .replace(/–(\w)/g, '–\u200C$1')
        .replace(/([0-9])-([0-9])/g, '$1\u200C\u2013\u200C$2')
        .replace(/\^ö/g, season === 'o' ? ' Halleluja.' : '')
        .replace(/\^Ö/g, season === 'q' ? '' : ' Halleluja.')
        .replace(/\^R/g, (season === 'o' && week === 1) ? easterAntiphon : '')
        .replace(/\^ORvR/g, orSchluss.vR)
        .replace(/\^ORV/g, orSchluss.V)
        .replace(/,\^ORS/g, orSchluss.S)
        .replace(/,\^ORR/g, orSchluss.R)
        .replace(/.\^ORS/g, orSchluss.Sgroß)
        .replace(/.\^ORR/g, orSchluss.Rgroß)
        .replace(/\^NP/g, localStorage.getItem('popeName') || '^N')
        .replace(/\^NB/g, localStorage.getItem('bishopName') || '^N')
        .replace(/\^NH/g, '^N');

    if (nominativ) {
        text = text.replace(/Der heilige \^NOM/g, nominativ);
        text = text.replace(/Die heilige \^NOM/g, nominativ);
        text = text.replace(/Die heiligen \^NOM/g, nominativ);
    }

    if (genitiv) {
        text = text.replace(/des heiligen \^GEN/g, genitiv);
        text = text.replace(/der heiligen \^GEN/g, genitiv);
    }

    if (vokativ) {
        text = text.replace(/Heiliger \^VOK/g, vokativ);
        text = text.replace(/Heilige \^VOK/g, vokativ);
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
                            <span className="inline-block">{formatBibleRef(content, true)}</span>
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