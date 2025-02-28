import React from 'react';

const formatBibleRef = (text, bracket = false) => {
    const originalText = text;
    let formattedText = text
        .replace(/-/g, '–')
        .replace(/°/g, ' ')
        .replace(/\u00a0/g, ' ');
    formattedText = formattedText.replace(/[ ]+/g, ' ');

    // Leerzeichen vor und nach relevanten Satzzeichen entfernen
    [',', '.', ';', '–'].forEach(punct => {
        formattedText = formattedText.replace(new RegExp(`[ ]*\\${punct}[ ]*`, 'g'), punct);
    });
    formattedText = formattedText.replace(/vgl./g, 'vgl. ');

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
        const nextPunctuation = formattedText.slice(i + 1).match(/[,.;–]/);
        const nextPunctuationType = nextPunctuation ? nextPunctuation[0] : null;

        switch (char) {
            case ' ':
                if (inVerseSection) {
                    addCurrentText();
                    inVerseSection = false;
                }
                currentText += '\u00A0';

                break;

            case ',':
                if (inVerseSection) {
                    return originalText;
                }
                addCurrentText();
                inVerseSection = true;
                currentText += ',';
                break;

            case ';':
                if (!inVerseSection) {
                    return originalText;
                }
                addCurrentText();
                inVerseSection = false;
                currentText += ';\u00A0';
                break;

            case '–':
                if (!inVerseSection) {
                    addCurrentText();
                    currentText += '–\u200c';
                } else {
                    if (!nextPunctuationType) {
                        currentText += '–\u200c';
                    } else if (nextPunctuationType === ',') {
                        addCurrentText();
                        inVerseSection = false;
                        currentText += '\u00a0–\u200c\u00A0';
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
            ? item.replace(/\u00A0\u00A0/g, '\u00a0')
            : React.cloneElement(item, {}, item.props.children.replace(/\u00A0\u00A0/g, '\u00A0'))
    );

    let output = finalResult.length > 0 ? <>{finalResult}</> : originalText;

    // Optional in Klammern einschließen
    if (bracket) { output = <>({output})</>; }

    return output;
};

export default formatBibleRef;