import React from 'react';

interface TextFormatterProps {
    text: string;
    context: 'liturgy' | 'notes' | 'deceased';
    className?: string;
}

const formatText = (text: string) => {
    return text
        .replace(/¥f(.*?)¥0f/g, '<strong>$1</strong>')
        .replace(/¥k(.*?)¥0k/g, '<em>$1</em>')
        .replace(/¥p|¥h|¥\+k/g, '</p><p>')
        .replace(/¥-/g, '&#8209;')
        .replace(/¥_/g, '&#150;&#65279;')
        .replace(/°/g, '&nbsp;')
        .replace(/¥be|¥bf/g, '</p><p>\u2003\u2003ᴰ¥t')

        // Zeichenformatierungen
        .replace(/¥qh(.*?)¥0qh/g, '<span class="formatHochfest">$1</span>')
        .replace(/¥qf(.*?)¥0qf/g, '<span class="formatFest">$1</span>')
        .replace(/¥v(.*?)¥0/g, '<span class="formatVers">$1</span>')
        .replace(/¥w(.*?)¥0w/g, '<span class="formatKleiner">$1</span>')
};

const TextFormatter: React.FC<TextFormatterProps> = ({ text, context, className }) => {
    let formattedText = formatText(text);

    if (formattedText.trim()) {
        formattedText = `<p>${formattedText}</p>`;
    }

    const baseClasses = {
        liturgy: "pl-4 -indent-4",
        notes: "text-sm",
        deceased: "pl-4 -indent-4 text-sm"
    }[context];

    return (
        <div
            dangerouslySetInnerHTML={{ __html: formattedText }}
            className={`${baseClasses} ${className || ''}`}
        />
    );
};

export default TextFormatter;