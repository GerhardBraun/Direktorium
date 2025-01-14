import React from 'react';

const formatBibleRef = (text) => {
    // Ursprünglichen Text für Fehlerfälle speichern
    const originalText = text;

    // Text bereinigen: Bindestriche durch Gedankenstriche ersetzen
    text = text.replace(/-/g, '–');

    let result = [];        // Array für die React-Elemente
    let currentText = '';   // Puffer für den aktuellen Text
    let inVerseSection = false;

    // Hilfsfunktion zum Hinzufügen des aktuellen Texts zum Result-Array
    const addCurrentText = () => {
        if (currentText) {
            if (inVerseSection) {
                result.push(
                    <span class='formatVerse' key={`verse-${result.length}`}>
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

        // Nächstes Satzzeichen finden (wenn vorhanden)
        const nextPunctuation = text.slice(i + 1).match(/[,\.;–]/);
        const nextPunctuationType = nextPunctuation ? nextPunctuation[0] : null;

        switch (char) {
            case ' ':
                if (inVerseSection) {
                    // Bei Leerzeichen in VerseSection: Aktuelle Section beenden
                    addCurrentText();
                    inVerseSection = false;
                    currentText = ' ';
                } else {
                    // Leerzeichen außerhalb VerseSection: Normal hinzufügen
                    currentText += ' ';
                }
                break;

            case ',':
                if (inVerseSection) {
                    // Fehler: Komma während eines Vers-Abschnitts
                    return originalText;
                }
                addCurrentText();
                inVerseSection = true;
                currentText = ',';
                break;

            case ';':
                if (!inVerseSection) {
                    // Fehler: Semikolon außerhalb eines Vers-Abschnitts
                    return originalText;
                }
                currentText += ';';
                addCurrentText();
                inVerseSection = false;
                result.push(' ');
                break;

            case '–':
                if (!inVerseSection) {
                    // Fall 1: Gedankenstrich außerhalb eines Vers-Abschnitts
                    addCurrentText();
                    currentText = '–';
                } else {
                    if (!nextPunctuationType) {
                        // Fall 3: Kein weiteres Satzzeichen folgt
                        currentText += '–';
                    } else if (nextPunctuationType === ',') {
                        // Fall 2: Nächstes Satzzeichen ist Komma
                        currentText += '–';
                        addCurrentText();
                        inVerseSection = false;
                        result.push(' ');
                    } else if (nextPunctuationType === '–') {
                        // Fall 4: Nächstes Satzzeichen ist Gedankenstrich
                        return originalText;
                    } else {
                        // Fall 3: Nächstes Satzzeichen ist Punkt oder Semikolon
                        currentText += '–';
                    }
                }
                break;

            default:
                currentText += char;
        }
    }

    // Restlichen Text hinzufügen
    addCurrentText();

    return result.length > 0 ? <>{result}</> : originalText;
};

export default formatBibleRef;