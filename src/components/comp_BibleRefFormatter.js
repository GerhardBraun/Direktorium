import React from 'react';

const formatBibleRef = (text, bracket = false) => {
    const originalText = text;
    let formattedText = text;

    // Relevante Satzzeichen für Bibelstellen
    const relevantPunctuation = ['-', ',', '.', ';', '–'];

    // Leerzeichen vor und nach relevanten Satzzeichen entfernen
    relevantPunctuation.forEach(punct => {
        formattedText = formattedText.replace(new RegExp(`\\s*\\${punct}\\s*`, 'g'), punct);
    });

    // Verbleibende Leerzeichen durch ° ersetzen
    formattedText = formattedText.replace(/\s/g, '°');

    // Bindestriche durch Gedankenstriche ersetzen
    formattedText = formattedText.replace(/-/g, '–');

    let result = [];
    let currentText = '';
    let inVerseSection = false;

    const addCurrentText = () => {
        if (currentText) {
            if (inVerseSection) {
                result.push(
                    <span className='format-verse' key={`verse-${result.length}`}>
                        {currentText}
                    </span>
                );
            } else {
                result.push(currentText);
            }
            currentText = '';
        }
    };

    for (let i = 0; i < formattedText.length; i++) {
        const char = formattedText[i];
        const nextPunctuation = formattedText.slice(i + 1).match(/[,\.;–]/);
        const nextPunctuationType = nextPunctuation ? nextPunctuation[0] : null;

        switch (char) {
            case '°':
                if (inVerseSection) {
                    addCurrentText();
                    inVerseSection = false;
                    currentText = '\u00A0';
                } else {
                    currentText += '\u00A0';
                }
                break;

            case ',':
                if (inVerseSection) {
                    return originalText;
                }
                addCurrentText();
                inVerseSection = true;
                currentText = ',';
                break;

            case ';':
                if (!inVerseSection) {
                    return originalText;
                }
                currentText += ';';
                addCurrentText();
                inVerseSection = false;
                result.push('\u00A0');
                break;

            case '–':
                if (!inVerseSection) {
                    addCurrentText();
                    currentText = '–\u200c';
                } else {
                    if (!nextPunctuationType) {
                        currentText += '–\u200c';
                    } else if (nextPunctuationType === ',') {
                        addCurrentText();
                        inVerseSection = false;
                        result.push('\u00a0–\u200c\u00A0');
                    } else if (nextPunctuationType === '–') {
                        return originalText;
                    } else {
                        currentText += '–\u200c';
                    }
                }
                break;
            default:
                currentText += char;
        }
    }

    addCurrentText();

    // Doppelte ° durch einzelnes ° ersetzen
    const finalResult = result.map(item =>
        typeof item === 'string'
            ? item.replace(/°°/g, '°')
            : React.cloneElement(item, {}, item.props.children.replace(/°°/g, '°'))
    );

    let output = finalResult.length > 0 ? <>{finalResult}</> : originalText.replace(/°°/g, '°');

    // Optional in Klammern einschließen
    if (bracket) { output = <>({output})</>; }

    return output;
};

export default formatBibleRef;