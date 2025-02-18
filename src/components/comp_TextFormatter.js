import formatBibleRef from './comp_BibleRefFormatter.js';

const doxology = "Ehre sei dem Vater und dem Sohn^*und dem Heiligen Geist,^pwie im Anfang so auch jetzt und alle Zeit^*und in Ewigkeit. Amen.";
const easterAntiphon = "^p^rAnstelle des Responsoriums wird die°folgende°Antiphon°genommen:^0r^lDas ist der Tag, den der Herr gemacht hat. Lasst°uns°jubeln und seiner uns freuen. Halleluja.";

const orVater = " Darum bitten wir durch Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit.";
const orVaterRel = " Darum bitten wir durch ihn, Jesus Christus, deinen Sohn, unseren Herrn und Gott, der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit.";
const orRel = " Der in der Einheit des Heiligen Geistes mit dir lebt und herrscht in alle Ewigkeit.";
const orSohn = " Der du in der Einheit des Heiligen Geistes mit Gott dem Vater lebst und herrschest in alle Ewigkeit.";

const orKurzVater = " Darum bitten wir durch Christus, unseren Herrn.";
const orKurzVaterRel = " Darum bitten wir durch ihn, Christus, unseren Herrn.";
const orKurzRel = " Der mit dir lebt und herrscht in alle Ewigkeit.";
const orKurzSohn = " Der du lebst und herrschest in alle Ewigkeit.";

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
    const isTSN = ['terz', 'sext', 'non'].includes(hour);
    const { season, week } = texts;
    const { nominativ, genitiv, vokativ } = texts?.laudes?.[prefSrc] || {};

    let text = marker ? `^r${marker}^0r${provText}` : provText;
    text = text
        .replace(/\^ö/g, season === 'o' ? ' Halleluja.' : '')
        .replace(/\^Ö/g, season === 'q' ? '' : ' Halleluja.')
        .replace(/\^R/g, (season === 'o' && week === 1) ? easterAntiphon : '')
        .replace(/\^ORvR/g, isTSN ? orKurzVaterRel : orVaterRel)
        .replace(/\^ORV/g, isTSN ? orKurzVater : orVater)
        .replace(/\^ORR/g, isTSN ? orKurzRel : orRel)
        .replace(/\^ORS/g, isTSN ? orKurzSohn : orSohn)
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

    // Inline-Formatierungen als React-Elemente verarbeiten
    const processInlineFormats = (text) => {
        // Basis-Ersetzungen
        let processedText = text
            .replace(/°/g, '\u00A0')
            .replace(/\^\*/g, '\u00A0*\n')
            .replace(/\^\+/g, '\u00A0†\n')
            .replace(/\^\//g, '    ')
            .replace(/\^l/g, '\n')
            .replace(/}/g, ')')
            .replace(/\{(\d{1,2})#/g, '(');

        // Split text into segments
        const segments = processedText.split(/(\^r.*?\^0r|\^w.*?\^0w|\^f.*?\^0f|\^v.*?\^0v|\^\(|\^\)|\^N)/g).filter(Boolean);

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

    return segments
        .filter(segment => segment.trim().length > 0)
        .map((segment, index) => {
            // Format bestimmen
            let format = 'p'; // Standard-Format
            let content = segment;

            // Format aus dem Segment extrahieren, falls vorhanden
            if (segment.startsWith('^')) {
                format = segment[1];
                content = segment.slice(2);
            }

            // Marker zurück in Inline-Formatierungen umwandeln
            let originalContent = content;
            for (const [marker, originalTag] of markerMap) {
                originalContent = originalContent.replace(marker, originalTag);
            }

            // Inline-Formatierungen verarbeiten
            const processedContent = processInlineFormats(originalContent);

            // Entsprechendes React-Element zurückgeben
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
                default: // 'p'
                    return (
                        <div key={index} className="whitespace-pre-wrap mb-[0.75em]">
                            {processedContent}
                        </div>
                    );
            }
        });
};