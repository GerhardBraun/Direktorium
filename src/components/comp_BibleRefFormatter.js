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
                    currentText = '–\u200c'; // Gedankenstrich + ZWNJ
                } else {
                    if (!nextPunctuationType) {
                        currentText += '–\u200c';
                    } else if (nextPunctuationType === ',') {
                        addCurrentText();              // Fügt den bisherigen Vers-Text formatiert hinzu
                        inVerseSection = false;        // Beendet die Vers-Sektion
                        result.push('\u00a0–\u200c\u00A0');  // Fügt die komplette bis-Strich-Gruppe als normalen Text hinzu
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

    return finalResult.length > 0 ? <>{finalResult}</> : originalText.replace(/°°/g, '°');
};

export default formatBibleRef;