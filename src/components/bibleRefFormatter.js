import React from 'react';

const formatBibleRef = (text) => {
    const originalText = text;

    // Alle Leerzeichen entfernen, außer die mit ° markierten
    text = text.replace(/[^\S°]/g, '');

    // Bindestriche durch Gedankenstriche ersetzen
    text = text.replace(/-/g, '–');

    let result = [];
    let currentText = '';
    let inVerseSection = false;

    const addCurrentText = () => {
        if (currentText) {
            if (inVerseSection) {
                result.push(
                    <span className='formatVerse' key={`verse-${result.length}`}>
                        {currentText}
                    </span>
                );
            } else {
                result.push(currentText);
            }
            currentText = '';
        }
    };

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const nextPunctuation = text.slice(i + 1).match(/[,\.;–]/);
        const nextPunctuationType = nextPunctuation ? nextPunctuation[0] : null;

        switch (char) {
            case '°':
                if (inVerseSection) {
                    addCurrentText();
                    inVerseSection = false;
                    currentText = '\u00A0'; // Unicode für geschütztes Leerzeichen
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
                    currentText = '–';
                } else {
                    if (!nextPunctuationType) {
                        currentText += '–';
                    } else if (nextPunctuationType === ',') {
                        currentText += '–';
                        addCurrentText();
                        inVerseSection = false;
                        result.push('\u00A0');
                    } else if (nextPunctuationType === '–') {
                        return originalText;
                    } else {
                        currentText += '–';
                    }
                }
                break;

            default:
                currentText += char;
        }
    }

    addCurrentText();
    return result.length > 0 ? <>{result}</> : originalText;
};

export default formatBibleRef;