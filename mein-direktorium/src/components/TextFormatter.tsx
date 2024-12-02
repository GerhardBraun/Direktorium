import React from 'react';

interface TextFormatterProps {
    text: string;
    context: 'liturgy' | 'notes' | 'deceased';
    className?: string;
}

// Separate formatting functions for different contexts
const formatInlineStyles = (text: string) => {
    return text
        .replace(/¥f(.*?)¥0f/g, '<span class="font-bold">$1</span>')
        .replace(/¥k(.*?)¥0k/g, '<span class="italic">$1</span>')
        .replace(/¥-/g, '&#8209;')
        .replace(/¥_/g, '&#150;&#65279;')
        .replace(/°/g, '&nbsp;')
        .replace(/¥qh(.*?)¥0qh/g, '<span class="formatHochfest">$1</span>')
        .replace(/¥qf(.*?)¥0qf/g, '<span class="formatFest">$1</span>')
        .replace(/¥v(.*?)¥0/g, '<span class="formatVers">$1</span>')
        .replace(/¥w(.*?)¥0w/g, '<span class="formatKleiner">$1</span>');
};

const splitIntoParagraphs = (text: string) => {
    // Split on paragraph markers but preserve them for processing
    return text.split(/(?=¥p|¥h|¥\+k|¥be|¥bf)/).map(para => {
        // Process each paragraph
        return para
            .replace(/^(¥p|¥h|¥\+k)/, '') // Remove leading paragraph markers
            .replace(/^(¥be|¥bf)/, '\u2003\u2003ᴰ¥t'); // Handle special indentation
    }).filter(para => para.trim());
};

const TextFormatter: React.FC<TextFormatterProps> = ({ text, context, className }) => {
    if (!text.trim()) {
        return null;
    }

    switch (context) {
        case 'liturgy': {
            const paragraphs = splitIntoParagraphs(text);
            return (
                <div className="liturgical-container">
                    {paragraphs.map((para, index) => (
                        <p
                            key={index}
                            className="content"
                            dangerouslySetInnerHTML={{
                                __html: formatInlineStyles(para)
                            }}
                        />
                    ))}
                </div>
            );
        }

        case 'notes': {
            const items = text.split('¥s').filter(item => item.trim());
            return (
                <ol>
                    {items.map((item, index) => (
                        <li
                            key={index}
                            dangerouslySetInnerHTML={{
                                __html: formatInlineStyles(item.trim())
                            }}
                        />
                    ))}
                </ol>
            );
        }

        case 'deceased': {
            const lines = text.split('\n').filter(line => line.trim());
            return (
                <div className="deceased-container">
                    {lines.map((line, index) => {
                        const [marker, ...contentParts] = line.split('¥t');
                        const content = contentParts.join('¥t');

                        return (
                            <div key={index} className="entry">
                                {marker && (
                                    <div
                                        className="marker"
                                        dangerouslySetInnerHTML={{
                                            __html: formatInlineStyles(marker)
                                        }}
                                    />
                                )}
                                <div
                                    className="content"
                                    dangerouslySetInnerHTML={{
                                        __html: formatInlineStyles(content || marker)
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            );
        }

        default:
            const paragraphs = splitIntoParagraphs(text);
            return (
                <div className={className}>
                    {paragraphs.map((para, index) => (
                        <p
                            key={index}
                            dangerouslySetInnerHTML={{
                                __html: formatInlineStyles(para)
                            }}
                        />
                    ))}
                </div>
            );
    }
};

export default TextFormatter;