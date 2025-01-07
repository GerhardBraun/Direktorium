import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Menu } from 'lucide-react';
import React from 'react';
import { liturgicalData } from './liturgicalData.ts';
import { deceasedData } from './deceasedData.ts';
import { ReferenceDialog, parseTextWithReferences } from './referenceLink.jsx';
import { getLiturgicalInfo, LiturgicalSeason } from './liturgicalCalendar.js';
import { processBrevierData } from './brevierDataProcessor.js';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip.jsx';


const formatText = (text) => {
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

    formattedText = processFormatting(formattedText, '¥w', '¥0w', 'formatKleiner');
    formattedText = processFormatting(formattedText, '¥f', '¥0f', 'font-bold');
    formattedText = processFormatting(formattedText, '¥k', '¥0k', 'italic');
    formattedText = processFormatting(formattedText, '¥v', '¥0v', 'formatVerse');
    formattedText = processFormatting(formattedText, '¥qh', '¥0f', 'formatHochfest');
    formattedText = processFormatting(formattedText, '¥qf', '¥0f', 'formatFest');

    return formattedText;
};

const getDateRange = (date, daysBefore, daysAfter) => {
    const startDate = new Date(date);
    startDate.setDate(date.getDate() - daysBefore);
    const endDate = new Date(date);
    endDate.setDate(date.getDate() + daysAfter);
    return { startDate, endDate };
};

const isDateInRange = (date, startDate, endDate) => {
    return date >= startDate && date <= endDate;
};

const months = ["Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember"];

const PrayerHours = {
    INVITATORIUM: 'invitatorium',
    LESEHORE: 'lesehore',
    LAUDES: 'laudes',
    TERZ: 'terz',
    SEXT: 'sext',
    NON: 'non',
    VESPER: 'vesper',
    KOMPLET: 'komplet'
};

// Enum for text sources
const TextSources = {
    EIG: 'eig',
    COM: 'com',
    WT: 'wt'
};

const processNotesContent = (content) => {
    if (!content) return [];

    // Zuerst alle ¥l durch <br /> ersetzen
    content = content.replace(/¥l/g, '<br />');

    // Dann die Absätze durch ¥h und ¥j splitten und verarbeiten
    const segments = content.split(/(¥[hj])/);

    // Kombiniere jeweils den Text mit seinem nachfolgenden Tag
    const processedSegments = [];
    for (let i = 0; i < segments.length - 1; i += 2) {
        const text = segments[i];
        const tag = segments[i + 1] || ''; // falls kein Tag am Ende
        processedSegments.push(text + tag);
    }

    // Counter für die Nummerierung
    let counter = 0;

    // Jetzt die Segmente verarbeiten
    return processedSegments.map(segment => {
        // Bestimme den Typ basierend auf dem End-Tag
        const type = segment.endsWith('¥j') ? 'centered' :
            segment.endsWith('¥h') ? 'normal' :
                'normal';

        // Entferne End-Tags
        let cleanedSegment = segment.replace(/¥[hj]$/, '');

        // Verarbeite ¥s und füge Nummerierung hinzu
        if (cleanedSegment.startsWith('¥s')) {
            counter++;
            cleanedSegment = `${counter}. ${cleanedSegment.substring(2)}`;
        }
        // Spezialfall "Hinweis: ¥s"
        else if (cleanedSegment.includes('¥fHinweis:¥0f ¥s')) {
            cleanedSegment = cleanedSegment.replace('¥s', '');
        }

        return {
            type,
            content: cleanedSegment.trim()
        };
    }).filter(segment => segment.content);
};

const NotesSection = ({ content, fontSize = '0.93em' }) => {
    if (!content) return null;

    const processedSegments = processNotesContent(content);

    return (
        <div style={{ marginBottom: '1.25em' }}>
            <div style={{ fontSize }} className="text-gray-900 dark:text-gray-100">
                {processedSegments.map((segment, index) => {
                    if (/^\d+\./.test(segment.content)) {
                        // Nummerierte Absätze
                        const match = segment.content.match(/^(\d+\.\s*)(.*)$/);
                        if (match) {
                            const [, number, text] = match;
                            return (
                                <div key={index} style={{ marginBottom: '0.16em' }}>
                                    <span style={{
                                        float: 'left',
                                        width: '1.6em'
                                    }}>{number}</span>
                                    <div style={{
                                        display: 'block',
                                        marginLeft: '0em'
                                    }}
                                        dangerouslySetInnerHTML={{ __html: parseTextWithReferences(formatText(text)) }} />
                                </div>
                            );
                        }
                    }

                    // Normale und zentrierte Absätze
                    return (
                        <p
                            key={index}
                            style={{
                                marginBottom: '0.75em',
                                textAlign: segment.type === 'centered' ? 'center' : 'left',
                                fontSize: segment.type === 'centered' ? '1em' : 'inherit'
                            }}
                            dangerouslySetInnerHTML={{
                                __html: parseTextWithReferences(formatText(segment.content))
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

const DayEntry = ({
    entry,
    formatDate,
    formatText,
    selectedDate,
    months,
    hangingIndent,
    deceasedMode,
    deceasedSizeRatio,
    expandedDeceased,
    setExpandedDeceased,
    entriesRef
}) => {
    const dateKey = entry.date.toISOString();
    // Modified condition to check if deceased_more exists and is different from deceased
    const hasMoreDeceased = entry.deceased_more && (!entry.deceased || entry.deceased !== entry.deceased_more);
    const isExpanded = expandedDeceased[dateKey];
    const shouldShowMore = deceasedMode === 'all' || isExpanded;
    const day = entry.date.getDate();
    const month = months[entry.date.getMonth()];
    const year = entry.date.getFullYear();
    const formattedDate = `${day}. ${month} ${year}`;

    return (
        <div
            key={dateKey}
            ref={el => entriesRef.current[formatDate(entry.date)] = el}
        >
            <div className={`p-4 border dark:border-gray-700 rounded transition-colors ${entry.date.getDate() === selectedDate.getDate() &&
                entry.date.getMonth() === selectedDate.getMonth()
                ? 'bg-orange-50 dark:bg-yellow-400/60'
                : 'bg-white dark:bg-gray-700'
                }`}>
                {/* Datumsheader */}
                <div className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
                    {formattedDate}
                </div>

                {/* Liturgy Section */}
                {entry.liturgy && (
                    <div style={{ marginBottom: '1.25em' }}>
                        <div style={{ fontSize: '1em' }} className="text-gray-900 dark:text-gray-100">
                            {formatText(entry.liturgy).split('¥p').map((paragraph, index) => {
                                const [marker, ...contentParts] = paragraph.split('¥t');
                                const content = contentParts.join('¥t');
                                const lines = content.split('¥l');

                                return (
                                    <div key={index} style={{
                                        marginBottom: '0.2em',
                                        position: 'relative'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: 0
                                        }} dangerouslySetInnerHTML={{ __html: marker }} />

                                        <div style={{
                                            paddingLeft: hangingIndent,
                                            margin: 0,
                                            fontFamily: 'inherit'
                                        }}>
                                            {lines.map((line, lineIndex) => {
                                                const commonLineStyle = {
                                                    marginTop: lineIndex > 0 ? '0em' : 0
                                                };

                                                const parts = line.split('¥t');

                                                if (parts.length >= 3) {
                                                    const [occasion, reference, pageNum, ...rest] = parts;
                                                    return (
                                                        <div key={lineIndex} style={{
                                                            ...commonLineStyle,
                                                            display: 'grid',
                                                            gridTemplateColumns: 'minmax(2em, auto) minmax(0, 1fr) auto',
                                                            gap: '0.25em',
                                                            maxWidth: '25em'
                                                        }}>
                                                            <span style={{
                                                                textAlign: 'left',
                                                                minWidth: 0,
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                whiteSpace: 'nowrap'
                                                            }} dangerouslySetInnerHTML={{ __html: occasion }} />
                                                            <TooltipProvider>
                                                                <Tooltip>
                                                                    <TooltipTrigger asChild>
                                                                        <span
                                                                            style={{
                                                                                textAlign: 'left',
                                                                                minWidth: 0,
                                                                                overflow: 'hidden',
                                                                                textOverflow: 'ellipsis',
                                                                                whiteSpace: 'nowrap',
                                                                                cursor: 'help',
                                                                                maxWidth: '100%',
                                                                                display: 'block'
                                                                            }}
                                                                            dangerouslySetInnerHTML={{ __html: reference }}
                                                                        />
                                                                    </TooltipTrigger>
                                                                    <TooltipContent>
                                                                        <p dangerouslySetInnerHTML={{ __html: reference.replace(/<[^>]*>/g, '') }} />
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </TooltipProvider>
                                                            <span style={{
                                                                textAlign: 'right',
                                                                whiteSpace: 'nowrap'
                                                            }} dangerouslySetInnerHTML={{ __html: pageNum + rest.join('') }} />
                                                        </div>
                                                    );
                                                } else if (parts.length === 2 && parts[0].includes('\u00A0')) {
                                                    const [firstPart, pageNum] = parts;
                                                    const firstSpaceIndex = firstPart.indexOf('\u00A0');
                                                    const occasion = firstPart.substring(0, firstSpaceIndex);
                                                    const reference = firstPart.substring(firstSpaceIndex + 1);

                                                    return (
                                                        <div key={lineIndex} style={{
                                                            ...commonLineStyle,
                                                            display: 'grid',
                                                            gridTemplateColumns: 'minmax(2em, auto) minmax(0, 1fr) auto',
                                                            gap: '0.25em',
                                                            maxWidth: '25em'
                                                        }}>
                                                            <span style={{
                                                                textAlign: 'left',
                                                                minWidth: 0,
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                whiteSpace: 'nowrap'
                                                            }} dangerouslySetInnerHTML={{ __html: occasion }} />
                                                            <TooltipProvider>
                                                                <Tooltip>
                                                                    <TooltipTrigger asChild>
                                                                        <span
                                                                            style={{
                                                                                textAlign: 'left',
                                                                                minWidth: 0,
                                                                                overflow: 'hidden',
                                                                                textOverflow: 'ellipsis',
                                                                                whiteSpace: 'nowrap',
                                                                                cursor: 'help',
                                                                                maxWidth: '100%',
                                                                                display: 'block'
                                                                            }}
                                                                            dangerouslySetInnerHTML={{ __html: reference }}
                                                                        />
                                                                    </TooltipTrigger>
                                                                    <TooltipContent>
                                                                        <p dangerouslySetInnerHTML={{ __html: reference.replace(/<[^>]*>/g, '') }} />
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </TooltipProvider>
                                                            <span style={{
                                                                textAlign: 'right',
                                                                whiteSpace: 'nowrap'
                                                            }} dangerouslySetInnerHTML={{ __html: pageNum }} />
                                                        </div>
                                                    );
                                                } else {
                                                    return (
                                                        <div
                                                            key={lineIndex}
                                                            style={{
                                                                whiteSpace: 'pre-line'
                                                            }}
                                                            dangerouslySetInnerHTML={{ __html: parseTextWithReferences(line) }}
                                                        />
                                                    );
                                                }
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Notes Section */}
                {entry.notes && (
                    <NotesSection content={entry.notes} />
                )}

                {entry.sec_notes && (
                    <NotesSection content={entry.sec_notes} />
                )}


                {/* Secondary Liturgy Section */}
                {entry.sec_liturgy && (
                    <div style={{ marginBottom: '1.25em' }}>
                        <div style={{ fontSize: '1em' }} className="text-gray-900 dark:text-gray-100">
                            {formatText(entry.sec_liturgy).split('¥p').map((paragraph, index) => {
                                const [marker, ...contentParts] = paragraph.split('¥t');
                                const content = contentParts.join('¥t');
                                const lines = content.split('¥l');

                                return (
                                    <div key={index} style={{
                                        marginBottom: '0.2em',
                                        position: 'relative'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: 0
                                        }} dangerouslySetInnerHTML={{ __html: marker }} />

                                        <div style={{
                                            paddingLeft: hangingIndent,
                                            margin: 0,
                                            fontFamily: 'inherit'
                                        }}>
                                            {lines.map((line, lineIndex) => {
                                                const commonLineStyle = {
                                                    marginTop: lineIndex > 0 ? '0em' : 0
                                                };

                                                const parts = line.split('¥t');

                                                if (parts.length >= 3) {
                                                    const [occasion, reference, pageNum, ...rest] = parts;
                                                    return (
                                                        <div key={lineIndex} style={{
                                                            ...commonLineStyle,
                                                            display: 'grid',
                                                            gridTemplateColumns: 'minmax(2em, auto) minmax(0, 1fr) auto',
                                                            gap: '0.25em',
                                                            maxWidth: '25em'
                                                        }}>
                                                            <span style={{
                                                                textAlign: 'left',
                                                                minWidth: 0,
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                whiteSpace: 'nowrap'
                                                            }} dangerouslySetInnerHTML={{ __html: occasion }} />
                                                            <TooltipProvider>
                                                                <Tooltip>
                                                                    <TooltipTrigger asChild>
                                                                        <span
                                                                            style={{
                                                                                textAlign: 'left',
                                                                                minWidth: 0,
                                                                                overflow: 'hidden',
                                                                                textOverflow: 'ellipsis',
                                                                                whiteSpace: 'nowrap',
                                                                                cursor: 'help',
                                                                                maxWidth: '100%',
                                                                                display: 'block'
                                                                            }}
                                                                            dangerouslySetInnerHTML={{ __html: reference }}
                                                                        />
                                                                    </TooltipTrigger>
                                                                    <TooltipContent>
                                                                        <p dangerouslySetInnerHTML={{ __html: reference.replace(/<[^>]*>/g, '') }} />
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </TooltipProvider>
                                                            <span style={{
                                                                textAlign: 'right',
                                                                whiteSpace: 'nowrap'
                                                            }} dangerouslySetInnerHTML={{ __html: pageNum + rest.join('') }} />
                                                        </div>
                                                    );
                                                } else if (parts.length === 2 && parts[0].includes('\u00A0')) {
                                                    const [firstPart, pageNum] = parts;
                                                    const firstSpaceIndex = firstPart.indexOf('\u00A0');
                                                    const occasion = firstPart.substring(0, firstSpaceIndex);
                                                    const reference = firstPart.substring(firstSpaceIndex + 1);

                                                    return (
                                                        <div key={lineIndex} style={{
                                                            ...commonLineStyle,
                                                            display: 'grid',
                                                            gridTemplateColumns: 'minmax(2em, auto) minmax(0, 1fr) auto',
                                                            gap: '0.25em',
                                                            maxWidth: '25em'
                                                        }}>
                                                            <span style={{
                                                                textAlign: 'left',
                                                                minWidth: 0,
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                whiteSpace: 'nowrap'
                                                            }} dangerouslySetInnerHTML={{ __html: occasion }} />
                                                            <TooltipProvider>
                                                                <Tooltip>
                                                                    <TooltipTrigger asChild>
                                                                        <span
                                                                            style={{
                                                                                textAlign: 'left',
                                                                                minWidth: 0,
                                                                                overflow: 'hidden',
                                                                                textOverflow: 'ellipsis',
                                                                                whiteSpace: 'nowrap',
                                                                                cursor: 'help',
                                                                                maxWidth: '100%',
                                                                                display: 'block'
                                                                            }}
                                                                            dangerouslySetInnerHTML={{ __html: reference }}
                                                                        />
                                                                    </TooltipTrigger>
                                                                    <TooltipContent>
                                                                        <p dangerouslySetInnerHTML={{ __html: reference.replace(/<[^>]*>/g, '') }} />
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </TooltipProvider>
                                                            <span style={{
                                                                textAlign: 'right',
                                                                whiteSpace: 'nowrap'
                                                            }} dangerouslySetInnerHTML={{ __html: pageNum }} />
                                                        </div>
                                                    );
                                                } else {
                                                    return (
                                                        <div key={lineIndex} style={{
                                                            ...commonLineStyle,
                                                            whiteSpace: 'pre-line'
                                                        }} dangerouslySetInnerHTML={{ __html: parseTextWithReferences(line) }} />
                                                    );
                                                }
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Deceased Section */}
                {(entry.deceased || entry.deceased_more) && (
                    <div style={{ marginBottom: '1.25em' }}>
                        <div style={{ fontSize: `${deceasedSizeRatio}em` }} className="text-gray-900 dark:text-gray-100">
                            {formatText(shouldShowMore ? entry.deceased_more : (entry.deceased || '')).split('¥+k').map((paragraph, index) => {
                                const parts = paragraph.split('¥t');
                                if (parts.length === 2) {
                                    return (
                                        <div key={index} style={{
                                            marginBottom: '0.16em',
                                            position: 'relative'
                                        }}>
                                            <span style={{
                                                position: 'absolute',
                                                left: 0
                                            }} dangerouslySetInnerHTML={{ __html: parts[0] }} />
                                            <pre style={{
                                                paddingLeft: `calc(${hangingIndent} / ${deceasedSizeRatio})`,
                                                margin: 0,
                                                fontFamily: 'inherit',
                                                whiteSpace: 'pre-line'
                                            }} dangerouslySetInnerHTML={{ __html: parts[1] }} />
                                        </div>
                                    );
                                }
                                return (
                                    <p key={index} style={{ marginBottom: '0.16em' }}
                                        dangerouslySetInnerHTML={{ __html: paragraph }} />
                                );
                            })}
                            {hasMoreDeceased && deceasedMode !== 'all' && !isExpanded && (
                                <button
                                    onClick={() => setExpandedDeceased(prev => ({
                                        ...prev,
                                        [dateKey]: true
                                    }))}
                                    style={{
                                        display: 'block',
                                        marginTop: '0em',
                                        paddingLeft: `calc(${hangingIndent} / ${deceasedSizeRatio} / 0.9)`,
                                        color: 'rgb(27, 83, 204)',
                                        fontSize: '0.9em'
                                    }}
                                >
                                    Todestage in früheren Jahren ...
                                </button>
                            )}
                        </div>
                    </div>
                )}

                {/* Prayer Section */}
                {entry.prayerTexts && (
                    <div style={{ marginBottom: '1.25em' }}>
                        <h3 style={{
                            fontSize: '1.1em',
                            fontWeight: '600',
                            marginBottom: '0em'
                        }} className="text-purple-600 dark:text-purple-400">
                            Gebete
                        </h3>
                        <div style={{
                            fontSize: '1em',
                            whiteSpace: 'pre-wrap'
                        }} className="text-gray-900 dark:text-gray-100"
                            dangerouslySetInnerHTML={{ __html: formatText(entry.prayerTexts) }} />
                    </div>
                )}

                {/* Vigil Notes Section */}
                {entry.vig_notes && (
                    <NotesSection content={entry.vig_notes} />
                )}

                {/* Vigil Liturgy Section */}
                {entry.vig_liturgy && (
                    <div style={{ marginBottom: '1.25em' }}>
                        <div style={{ fontSize: '1em' }} className="text-gray-900 dark:text-gray-100">
                            {formatText(entry.vig_liturgy).split('¥p').map((paragraph, index) => {
                                const parts = paragraph.split('¥t');
                                if (parts.length >= 2) {
                                    const marker = parts[0];
                                    const content = parts.slice(1).join('¥t').replace(/¥l/g, '\n');
                                    return (
                                        <div key={index} style={{
                                            marginBottom: '0em',
                                            position: 'relative'
                                        }}>
                                            <span style={{
                                                position: 'absolute',
                                                left: 0
                                            }} dangerouslySetInnerHTML={{ __html: marker }} />
                                            <pre style={{
                                                paddingLeft: hangingIndent,
                                                margin: 0,
                                                fontFamily: 'inherit',
                                                whiteSpace: 'pre-line'
                                            }} dangerouslySetInnerHTML={{ __html: parseTextWithReferences(content) }} />
                                        </div>
                                    );
                                }
                                return (
                                    <p key={index} style={{ marginBottom: '0.5em' }}
                                        dangerouslySetInnerHTML={{ __html: parseTextWithReferences(paragraph) }} />
                                );
                            })}
                        </div>
                    </div>
                )}

            </div>

            {/* Post Notes Section - außerhalb des Hauptrahmens */}
            {entry.post_notes && (
                <div className="px-4 mt-0 mb-4">
                    <div style={{ fontSize: '0.93em', marginTop: '0.75em' }} className="text-gray-900 dark:text-gray-100">
                        {entry.post_notes.split('¥h').map((paragraph, index) => {
                            // Check if paragraph contains ¥j
                            const paragraphs = paragraph.split('¥j');

                            return paragraphs.map((subParagraph, subIndex) => {
                                const isLastInSequence = subIndex === paragraphs.length - 1;

                                if (!isLastInSequence) {
                                    // This is a ¥j paragraph that should be centered
                                    return (
                                        <p
                                            key={`${index}-${subIndex}`}
                                            style={{
                                                marginBottom: '0.75em',
                                                textAlign: 'center',
                                                fontSize: '1em'
                                            }}
                                            dangerouslySetInnerHTML={{ __html: formatText(subParagraph.trim()) }}
                                        />
                                    );
                                }

                                // Handle normal paragraphs or the remainder after ¥j
                                if (subParagraph.trim()) {
                                    return (
                                        <p
                                            key={`${index}-${subIndex}`}
                                            style={{
                                                marginBottom: '0.75em',
                                                textAlign: 'left'
                                            }}
                                            dangerouslySetInnerHTML={{ __html: formatText(subParagraph.trim()) }}
                                        />
                                    );
                                }
                                return null;
                            }).filter(Boolean);
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

const DeceasedEntry = ({
    entry,
    formatDate,
    formatText,
    selectedDate,
    months,
    entriesRef
}) => {
    const deceasedIndent = '2.7em'; // Variable für den Einzug
    const day = entry.date.getDate();
    const month = months[entry.date.getMonth()];
    const year = entry.date.getFullYear();
    const formattedDate = `${day}. ${month} ${year}`;

    // Get deceased entries for this day and month from deceasedData
    const deceasedEntries = deceasedData[entry.date.getMonth() + 1][entry.date.getDate()];

    const renderDeceasedEntry = (deceased) => {
        return (
            <div className="mb-4 relative">
                {/* Erste Zeile mit Jahr und Name */}
                <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, }}>
                        {deceased.year}
                    </span>
                    <div style={{ paddingLeft: deceasedIndent }}>
                        <span dangerouslySetInnerHTML={{ __html: formatText(deceased.name) }} />
                        {deceased.age && (
                            <span> ({deceased.age}&nbsp;Jahre)</span>
                        )}
                    </div>
                </div>

                {/* Zweite Zeile mit Geburtsinfo */}
                {deceased.birth && (
                    <div style={{
                        paddingLeft: deceasedIndent,
                        position: 'relative'
                    }}>
                        <span style={{
                            position: 'absolute',
                            left: deceasedIndent
                        }}>*</span>
                        <div style={{
                            paddingLeft: '0.7em'
                        }} dangerouslySetInnerHTML={{ __html: formatText(deceased.birth) }} />
                    </div>
                )}

                {/* Dritte Zeile mit Grabinfo */}
                {deceased.grave && (
                    <div style={{ paddingLeft: deceasedIndent }}>
                        Grab: <span dangerouslySetInnerHTML={{ __html: formatText(deceased.grave) }} />
                    </div>
                )}
            </div>
        );
    };

    return (
        <div
            key={entry.date.toISOString()}
            ref={el => entriesRef.current[formatDate(entry.date)] = el}
        >
            <div className={`p-4 border dark:border-gray-700 rounded transition-colors ${entry.date.getDate() === selectedDate.getDate() &&
                entry.date.getMonth() === selectedDate.getMonth()
                ? 'bg-orange-50 dark:bg-yellow-400/60'
                : 'bg-white dark:bg-gray-700'
                }`}>
                {/* Date header */}
                <div className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
                    {formattedDate}
                </div>

                {/* Deceased entries */}
                {deceasedEntries && (
                    <div className="text-gray-900 dark:text-gray-100" style={{ fontSize: '0.93em' }}>
                        {deceasedEntries.map((deceased, index) => (
                            <div key={index}>
                                {renderDeceasedEntry(deceased)}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};


// Prayer Menu Component
const PrayerMenu = ({ title, onSelectHour, setViewMode, onPrevDay, onNextDay, selectedDate }) => {
    const [liturgicalInfo, setLiturgicalInfo] = useState(null);
    const [prayerTexts, setPrayerTexts] = useState(null);  // Neuer State für die Gebetstext-Daten

    useEffect(() => {
        const info = getLiturgicalInfo(selectedDate);
        setLiturgicalInfo(info);

        // Verarbeite die Gebetsdaten
        if (info) {
            const processedData = processBrevierData({
                season: info.season,
                week: info.week,
                dayOfWeek: selectedDate.getDay(),
                calendarDay: selectedDate.getDate()
            });
            setPrayerTexts(processedData);
        }
    }, [selectedDate]);

    const getSeasonName = (season) => {
        switch (season) {
            case LiturgicalSeason.ADVENT:
                return 'Adventswoche';
            case LiturgicalSeason.CHRISTMAS:
                return 'Woche der Weihnachtszeit';
            case LiturgicalSeason.ORDINARY_TIME:
                return 'Woche im Jahreskreis';
            case LiturgicalSeason.LENT:
                return 'Fastenwoche';
            case LiturgicalSeason.EASTER:
                return 'Woche der Osterzeit';
            default:
                return '';
        }
    };

    const getDayName = (date) => {
        const days = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
        return days[date.getDay()];
    };

    const formatLiturgicalInfo = (info, date) => {
        if (!info) return '';
        const dayName = getDayName(date);
        return `${dayName} der ${info.week}. ${getSeasonName(info.season)}`;
    };

    return (
        <div className="flex flex-col p-4 bg-white dark:bg-gray-900">
            {/* Title bar with navigation */}
            <div className="flex items-center justify-between mb-2">
                <button
                    onClick={onPrevDay}
                    className="shrink-0 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                    title="Vorheriger Tag"
                >
                    ‹
                </button>
                <div className="text-center">
                    <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        {title}
                    </h1>
                    {liturgicalInfo && (
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            {formatLiturgicalInfo(liturgicalInfo, selectedDate)}
                        </div>
                    )}
                </div>
                <button
                    onClick={onNextDay}
                    className="shrink-0 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                    title="Nächster Tag"
                >
                    ›
                </button>
            </div>

            {/* Prayer Hours */}
            <div className="space-y-2 mb-6">
                {Object.values(PrayerHours).map(hour => (
                    <button
                        key={hour}
                        onClick={() => {
                            console.log('Sending to parent:', {
                                hour,
                                texts: prayerTexts
                            });
                            onSelectHour(hour, prayerTexts);
                        }}
                        className="w-full p-3 text-left rounded-lg bg-gray-100 dark:bg-gray-800 
                            hover:bg-gray-200 dark:hover:bg-gray-700 
                            text-gray-900 dark:text-gray-100"
                    >
                        {hour.charAt(0).toUpperCase() + hour.slice(1)}
                    </button>
                ))}
            </div>

            {/* Mass */}
            <button
                onClick={() => onSelectHour('mass')}
                className="w-full p-3 mb-6 text-left rounded-lg bg-gray-100 dark:bg-gray-800 
                           hover:bg-gray-200 dark:hover:bg-gray-700 
                           text-gray-900 dark:text-gray-100"
            >
                Messfeier
            </button>

            {/* View Selection with spacing */}
            <div className="space-y-2 pt-4 border-t dark:border-gray-700">
                <button
                    onClick={() => setViewMode('directory')}
                    className="w-full p-3 text-left rounded-lg bg-gray-100 dark:bg-gray-800 
                             hover:bg-gray-200 dark:hover:bg-gray-700 
                             text-gray-900 dark:text-gray-100"
                >
                    Direktorium
                </button>
                <button
                    onClick={() => setViewMode('deceased')}
                    className="w-full p-3 text-left rounded-lg bg-gray-100 dark:bg-gray-800 
                             hover:bg-gray-200 dark:hover:bg-gray-700 
                             text-gray-900 dark:text-gray-100"
                >
                    Totenverzeichnis
                </button>
            </div>
        </div>
    );
};

// Prayer Text Display Component
const PrayerTextDisplay = ({ hour, texts }) => {
    if (!hour || !texts || !texts[hour]) {
        return <div className="p-4">Keine Daten verfügbar</div>;
    }

    const hourData = texts[hour].wt;

    // Gruppierung der Felder nach Kategorien mit original Feldnamen
    const fieldGroups = {
        hymns: ['hymn_1', 'hymn_2', 'hymn_3', 'hymn_nacht', 'hymn_kl'],
        psalms: ['ps_1', 'ps_2', 'ps_3'],
        antiphons: ['ant_0', 'ant_1', 'ant_2', 'ant_3', 'ant_ev'],
        readings: ['les_buch', 'les_stelle'],
        responsories: ['resp0_0', 'resp0_1', 'resp1_0', 'resp1_1', 'resp1_2', 'resp1_3'],
        intercessions: ['bitten_e', 'bitten_r', 'bitten'],
        prayers: ['oration']
    };

    const sectionTitles = {
        hymns: 'Hymnen',
        psalms: 'Psalmen',
        antiphons: 'Antiphonen',
        readings: 'Lesungen',
        responsories: 'Responsorien',
        intercessions: 'Fürbitten',
        prayers: 'Gebete'
    };

    const getFieldLabel = (field) => {
        const labels = {
            'hymn_1': 'Erster Hymnus',
            'hymn_2': 'Zweiter Hymnus',
            'hymn_3': 'Dritter Hymnus',
            'hymn_nacht': 'Hymnus in der Nacht oder am frühen Morgen',
            'hymn_kl': 'Hymnus im Kleinen Stundenbuch',
            'ps_1': 'Psalm 1',
            'ps_2': 'Psalm 2',
            'ps_3': 'Psalm 3',
            'ant_0': 'Antiphon (für alle Psalmen)',
            'ant_1': 'Erste Antiphon',
            'ant_2': 'Zweite Antiphon',
            'ant_3': 'Dritte Antiphon',
            'ant_ev': 'Benedictus-/Magnificat-Antiphon',
            'les_buch': 'Lesungsbuch',
            'les_stelle': 'Lesungsstelle',
            'resp0_0': 'Versikel-V',
            'resp0_1': 'Versikel-R',
            'resp1_0': 'Erstes Responsorium',
            'resp1_1': 'Zweites Responsorium',
            'resp1_2': 'Drittes Responsorium',
            'resp1_3': 'Viertes Responsorium',
            'bitten_e': 'Einleitung der Fürbitten',
            'bitten_r': 'Antwort zu den Fürbitten',
            'bitten': 'Fürbitten-Text',
            'oration': 'Schlussgebet'
        };
        return labels[field] || field;
    };

    const formatPrayerText = (text) => {
        if (!text) return '';

        // Replace ° with NBSP
        text = text.replace(/°/g, '\u00A0');

        // Process ^* (NBSP + asterisk + line break)
        text = text.replace(/\^\*/g, '\u00A0*\n');

        // Process ^+ (NBSP + dagger + line break)
        text = text.replace(/\^\+/g, '\u00A0\u2020\n');

        // Process verse formatting (^v ... ^0v)
        text = text.replace(/\^v(.*?)\^0v/g, (_, content) =>
            `<span class="formatVerse">${content}</span>`
        );

        // Process paragraph breaks (^p)
        text = text.replace(/\^p/g, '\n\n');

        // Process line breaks (^l)
        text = text.replace(/\^l/g, '\n');

        // Process indented paragraphs with hanging dash (^q)
        text = text.replace(/\^q(.*?)(?=\^q|$)/gs, (match, content) => {
            const lines = content.trim().split('\n');
            const processedLines = lines.map((line, index) => {
                if (index === 0) {
                    // First line starts with em dash
                    return `–${'\u00A0'.repeat(4)}${line.trim()}`;
                }
                // Subsequent lines are indented
                return `${'\u00A0'.repeat(5)}${line.trim()}`;
            });
            return processedLines.join('\n') + '\n\n';
        });

        return text;
    };

    const ReferenceDisplay = ({ value }) => {
        if (!value || typeof value !== 'object') return null;

        return (
            <div className="pl-4 mt-2 text-sm">
                {value.verses && (
                    <div className="mb-1">
                        <span className="font-medium">Verse: </span>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: formatPrayerText(value.verses)
                            }}
                            className="whitespace-pre-wrap"
                        />
                    </div>
                )}
                {value.title && (
                    <div className="mb-1">
                        <span className="font-medium">Titel: </span>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: formatPrayerText(value.title)
                            }}
                            className="whitespace-pre-wrap"
                        />
                    </div>
                )}
                {value.quote && (
                    <div className="mb-1 italic">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: formatPrayerText(value.quote)
                            }}
                            className="whitespace-pre-wrap"
                        />
                    </div>
                )}
                {value.text && (
                    <div className="mb-1">
                        <span className="font-medium">Text: </span>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: formatPrayerText(value.text)
                            }}
                            className="whitespace-pre-wrap"
                        />
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="p-4 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-semibold capitalize text-gray-900 dark:text-gray-100">
                        {hour}
                    </h2>
                </div>
                <div className="p-4">
                    {Object.entries(fieldGroups).map(([groupKey, fields]) => {
                        const hasData = fields.some(field =>
                            hourData[field] !== undefined && hourData[field] !== ''
                        );

                        if (!hasData) return null;

                        return (
                            <div key={groupKey} className="mb-6">
                                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                                    {sectionTitles[groupKey]}
                                </h3>
                                <div className="space-y-4">
                                    {fields.map(field => {
                                        const value = hourData[field];
                                        if (value === undefined || value === '') return null;

                                        return (
                                            <div key={field} className="border-b border-gray-200 dark:border-gray-700 pb-2">
                                                <div className="font-medium text-sm text-gray-700 dark:text-gray-300 mb-1">
                                                    {getFieldLabel(field)}
                                                </div>
                                                <div className="text-gray-900 dark:text-gray-100">
                                                    {typeof value === 'object' ? (
                                                        <>
                                                            <div>Nr. {value.reference}</div>
                                                            <ReferenceDisplay value={value} />
                                                        </>
                                                    ) : (
                                                        <div
                                                            dangerouslySetInnerHTML={{
                                                                __html: formatPrayerText(value)
                                                            }}
                                                            className="whitespace-pre-wrap"
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export { PrayerMenu, PrayerTextDisplay, PrayerHours, TextSources };

const ScrollableContainer = ({ children, containerRef }) => {
    const [containersReady, setContainersReady] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        const currentContainer = container?.querySelector('[data-current-container="true"]');

        if (container && currentContainer) {
            setContainersReady(true);
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex flex-col max-h-[calc(100vh-88px)] overflow-y-auto px-4"
            style={{
                scrollBehavior: 'smooth',
                WebkitOverflowScrolling: 'touch'
            }}
        >
            {children}
        </div>
    );
};

export default function LiturgicalCalendar() {
    const fontFamily = 'Cambria, serif';
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'light';
    });
    const [selectedHour, setSelectedHour] = useState(null);
    const [prayerTexts, setPrayerTexts] = useState(null);
    const [expandedDeceased, setExpandedDeceased] = useState({});
    const [deceasedMode, setDeceasedMode] = useState('recent');
    const [viewMode, setViewMode] = useState('directory'); // 'directory', 'deceased' oder 'prayer'
    const [baseFontSize, setBaseFontSize] = useState(14); // Standard-Schriftgröße in pt
    const [isReady, setIsReady] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('fontSize');
    const [isNarrowScreen, setIsNarrowScreen] = useState(false);
    const hangingIndent = '3.2em'; // Variable für den Einzug
    const deceasedSizeRatio = 0.9;
    const entriesRef = useRef({});
    const containerRef = useRef(null);
    const [visibleRange, setVisibleRange] = useState({ startDate: null, endDate: null });
    const DAYS_BUFFER = 7; // Anzahl der Tage vor/nach dem ausgewählten Datum
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef(null);

    const formatDate = useCallback((date, forDisplay = false) => {
        if (forDisplay && isNarrowScreen) {
            // Short format for narrow screens: DD.MM.YY
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear().toString().slice(-2);
            return `${day}.${month}.${year}`;
        }
        // Original format for wider screens: DD. Month YYYY
        return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
    }, [isNarrowScreen]);// months ist konstant, daher keine Dependency nötig

    const [dateChangeSource, setDateChangeSource] = useState('navigation'); // 'navigation' oder 'scroll'

    const handleScroll = useCallback((event) => {
        if (!containerRef.current || isScrolling) return;
        const container = containerRef.current;
        const entries = Object.entries(entriesRef.current);

        // Get nav height for offset calculation
        const navElement = container.parentElement.querySelector('[role="navigation"]');
        const navHeight = navElement ? navElement.offsetHeight : 0;

        // Adjust the target position to account for sticky nav
        const containerRect = container.getBoundingClientRect();
        const middleY = containerRect.top + navHeight + (containerRect.height / 2);

        let closestEntry = null;
        let minDistance = Infinity;

        entries.forEach(([dateStr, element]) => {
            if (!element) return;

            const rect = element.getBoundingClientRect();
            const elementMiddleY = rect.top + (rect.height / 2);
            const distance = Math.abs(elementMiddleY - middleY);

            if (distance < minDistance) {
                minDistance = distance;
                closestEntry = dateStr;
            }
        });

        if (closestEntry) {
            const parts = closestEntry.split(' ');
            const day = parseInt(parts[0]);
            const month = months.indexOf(parts[1]);
            const year = parseInt(parts[2]);

            const newDate = new Date(year, month, day);

            if (closestEntry && formatDate(selectedDate) !== formatDate(newDate)) {
                setDateChangeSource('scroll');
                setSelectedDate(newDate);
            }
        }
    }, [selectedDate, isScrolling, formatDate]);

    // Effect für die visibleEntries-Berechnung
    useEffect(() => {
        entriesRef.current = {};
        if (selectedDate) {
            setIsReady(false);
            // Kurze Verzögerung um sicherzustellen, dass das DOM aktualisiert wurde
            setTimeout(() => {
                setIsReady(true);
            }, 100);
        }
    }, [selectedDate]);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const currentContainer = container.querySelector('[data-current-container="true"]');

        const debouncedScroll = (event) => {
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
            scrollTimeoutRef.current = setTimeout(() => handleScroll(event), 150);
        };

        container.addEventListener('scroll', debouncedScroll);
        return () => {
            if (container) {
                container.removeEventListener('scroll', debouncedScroll);
            }
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, [handleScroll]);

    useEffect(() => {
        const calculateInitialFontSize = () => {
            // Nur für Smartphones (< 640px) die Schriftgröße dynamisch berechnen
            if (window.innerWidth < 640) {
                const container = document.createElement('div');
                container.style.visibility = 'hidden';
                container.style.position = 'absolute';
                container.style.width = '25em';
                container.style.fontFamily = fontFamily;
                container.style.fontSize = '16pt';
                document.body.appendChild(container);

                const actualWidth = container.offsetWidth;
                const viewportWidth = window.innerWidth - 32; // 32px für Padding
                const ratio = viewportWidth / actualWidth;
                const calculatedFontSize = Math.round(16 * ratio);

                document.body.removeChild(container);
                return Math.min(Math.max(calculatedFontSize, 8), 24);
            }
            return 14; // Standardgröße für Tablets und Desktop
        };

        setBaseFontSize(calculateInitialFontSize());
    }, []);


    useEffect(() => {
        // Lade das gespeicherte Theme beim Start
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        document.body.classList.toggle('dark', savedTheme === 'dark');
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.body.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        // Wenn durch Scrollen ausgelöst oder nicht bereit, nichts tun
        if (!isReady || !containerRef.current || dateChangeSource === 'scroll') {
            return;
        }

        // Nur bei navigation-induzierten Änderungen scrollen
        if (dateChangeSource === 'navigation') {
            const container = containerRef.current;
            const currentContainer = container.querySelector('[data-current-container="true"]');

            if (!currentContainer) return;

            // Scroll-Position berechnen
            const navElement = container.parentElement.querySelector('[role="navigation"]');
            const navHeight = navElement ? navElement.offsetHeight : 0;
            const fontSize = parseFloat(getComputedStyle(container).fontSize);
            const fiveEmInPixels = fontSize * 5;
            const scrollPosition = currentContainer.offsetTop - navHeight - fiveEmInPixels;

            // Scrollen mit Animation
            setIsScrolling(true); // Scroll-Handler deaktivieren

            container.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });

            // Nach Scroll-Ende aufräumen
            const scrollEndListener = () => {
                setTimeout(() => {
                    setIsScrolling(false);  // Scroll-Handler reaktivieren
                    setDateChangeSource(null);
                }, 100);
                container.removeEventListener('scrollend', scrollEndListener);
            };

            container.addEventListener('scrollend', scrollEndListener);

            // Cleanup
            return () => {
                if (containerRef.current) {
                    containerRef.current.removeEventListener('scrollend', scrollEndListener);
                }
            };
        }
    }, [selectedDate, dateChangeSource, isReady]);

    // Aktualisiere den sichtbaren Bereich wenn sich das ausgewählte Datum ändert
    useEffect(() => {
        const { startDate, endDate } = getDateRange(selectedDate, DAYS_BUFFER, DAYS_BUFFER);
        setVisibleRange({ startDate, endDate });
    }, [selectedDate]);

    const allEntries = useMemo(() => {
        const entries = [];
        Object.entries(liturgicalData).forEach(([year, yearData]) => {
            Object.entries(yearData).forEach(([month, monthData]) => {
                Object.entries(monthData).forEach(([day, data]) => {
                    entries.push({
                        date: new Date(parseInt(year), parseInt(month) - 1, parseInt(day)),
                        ...data
                    });
                });
            });
        });
        return entries.sort((a, b) => a.date - b.date);
    }, []); // Leeres Dependency Array, da liturgicalData konstant ist

    const handleDateSelect = (date) => {
        setDateChangeSource('navigation');
        setSelectedDate(new Date(date));
        setShowDatePicker(false);
    };

    const handlePrevWeek = () => {
        setDateChangeSource('navigation');
        setSelectedDate(date => {
            const newDate = new Date(date);
            newDate.setDate(date.getDate() - 7);
            return newDate;
        });
    };

    const handleNextWeek = () => {
        setDateChangeSource('navigation');
        setSelectedDate(date => {
            const newDate = new Date(date);
            newDate.setDate(date.getDate() + 7);
            return newDate;
        });
    };

    const handleToday = () => {
        setDateChangeSource('navigation');
        setSelectedDate(new Date());
    };

    const visibleEntries = useMemo(() => {
        if (!visibleRange.startDate || !visibleRange.endDate) return [];

        const entries = allEntries.filter(entry =>
            isDateInRange(entry.date, visibleRange.startDate, visibleRange.endDate)
        );

        // Sortiere Einträge nach Datum
        entries.sort((a, b) => a.date - b.date);

        // Finde Index des ausgewählten Datums
        const selectedIndex = entries.findIndex(entry =>
            entry.date.getDate() === selectedDate.getDate() &&
            entry.date.getMonth() === selectedDate.getMonth() &&
            entry.date.getFullYear() === selectedDate.getFullYear()
        );

        if (selectedIndex === -1) return entries;

        // Teile die Einträge in zwei Gruppen
        return {
            before: entries.slice(Math.max(0, selectedIndex - 7), selectedIndex),
            current: entries.slice(selectedIndex, selectedIndex + 8)
        };
    }, [allEntries, visibleRange, selectedDate]);


    const parseDateString = (dateStr) => {
        const match = dateStr.match(/^(\d{1,2})[.-](\d{1,2})[.-](\d{2}|\d{4})$/);
        if (!match) return null;

        let [, day, month, year] = match;
        day = parseInt(day, 10);
        month = parseInt(month, 10) - 1;
        year = parseInt(year, 10);

        if (year < 100) {
            year += year < 50 ? 2000 : 1900;
        }

        const date = new Date(year, month, day);

        if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day) {
            return null;
        }

        return date;
    };

    const DatePicker = () => {
        const [viewDate, setViewDate] = useState(new Date(selectedDate));
        const firstDayOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
        const startingDay = firstDayOfMonth.getDay() || 7;
        const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();

        const days = Array.from({ length: 42 }, (_, i) => {
            const day = i - (startingDay - 2);
            return day > 0 && day <= daysInMonth ? day : null;
        });

        return (
            <div className="absolute left-0 right-0 mt-1 p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border dark:border-gray-700 rounded shadow-lg z-[60]" style={{
                ...datePickerStyle,
                position: 'fixed',  // Änderung zu fixed positioning
                top: '60px',      // Fester Abstand von oben
                left: '50%',       // Zentrieren
                transform: 'translateX(-50%)', // Zentrieren
                width: '90%',      // Breite auf Mobilgeräten
                maxWidth: '300px'  // Maximale Breite
            }}>
                <div className="flex justify-between mb-2">
                    <button
                        onClick={() => setViewDate(date => {
                            const newDate = new Date(date);
                            newDate.setMonth(date.getMonth() - 1);
                            return newDate;
                        })}
                        className="px-2"
                    >←</button>
                    <div>{months[viewDate.getMonth()]} {viewDate.getFullYear()}</div>
                    <button
                        onClick={() => setViewDate(date => {
                            const newDate = new Date(date);
                            newDate.setMonth(date.getMonth() + 1);
                            return newDate;
                        })}
                        className="px-2"
                    >→</button>
                </div>

                <div className="grid grid-cols-7 gap-0.5 text-center">
                    {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map(day => (
                        <div key={day} className="font-bold py-1">{day}</div>
                    ))}
                    {days.map((day, index) => {
                        const isSelected = day === selectedDate.getDate() &&
                            viewDate.getMonth() === selectedDate.getMonth() &&
                            viewDate.getFullYear() === selectedDate.getFullYear();

                        return (
                            <button
                                key={index}
                                onClick={() => {
                                    if (day) {
                                        const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
                                        handleDateSelect(newDate);
                                        setShowDatePicker(false);
                                    }
                                }}
                                className={`py-1 ${day ? 'hover:bg-gray-100 dark:hover:bg-gray-700' : ''} 
                                    ${isSelected ? 'bg-blue-100 dark:bg-blue-900' : ''}`}
                                disabled={!day}
                            >
                                {day}
                            </button>
                        );
                    })}
                </div>
            </div>
        );
    };

    const ThemeMenu = () => {
        const [tempFontSize, setTempFontSize] = useState(baseFontSize);
        const menuRef = useRef(null);
        const sections = ['fontSize', 'theme', 'deceased', 'view'];

        const toggleMenu = () => {
            setIsMenuOpen(prev => !prev);
            if (!isMenuOpen) {
                setActiveSection(sections[0]);
            }
        };

        const handleSectionChange = (sectionIndex) => {
            setActiveSection(sections[sectionIndex]);
        };

        const handleViewChange = (isRight) => {
            setViewMode(prev => prev === 'directory' ? 'deceased' : 'directory');
        };

        // Modified to prevent menu closing
        const handleOptionChange = (e, isRight) => {
            e.preventDefault();
            e.stopPropagation();

            switch (activeSection) {
                case 'fontSize':
                    handleFontSizeChange(isRight);
                    break;
                case 'theme':
                    handleThemeChange(isRight);
                    break;
                case 'deceased':
                    handleDeceasedModeChange(isRight);
                    break;
                case 'view':
                    handleViewChange(isRight);
                    break;
                default:
                    break;
            }
        };

        const handleFontSizeChange = (increase) => {
            const change = increase ? 1 : -1;
            const newSize = tempFontSize + change;
            if (newSize >= 8 && newSize <= 24) {
                setTempFontSize(newSize);
                setBaseFontSize(newSize);
            }
        };

        const handleThemeChange = (isRight) => {
            setTheme(prev => {
                const newTheme = prev === 'light' ? 'dark' : 'light';
                return newTheme;
            });
        };

        const handleDeceasedModeChange = (isRight) => {
            setDeceasedMode(prev => prev === 'recent' ? 'all' : 'recent');
            setExpandedDeceased({});
        };

        // Modified click outside handler
        useEffect(() => {
            const handleClickOutside = (event) => {
                // Check if click target is a button inside the menu
                const isMenuButton = event.target.closest('button') && menuRef.current?.contains(event.target);

                if (menuRef.current && !menuRef.current.contains(event.target) && !isMenuButton) {
                    setIsMenuOpen(false);
                }
            };

            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }, []);

        useEffect(() => {
            const handleKeyDown = (event) => {
                if (!isMenuOpen) {
                    if (event.key === 'Alt') {
                        event.preventDefault();
                        toggleMenu();
                    }
                    return;
                }

                if (event.key === 'Alt' || event.key === 'Escape') {
                    event.preventDefault();
                    toggleMenu();
                    return;
                }

                if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                    event.preventDefault();
                    const currentIndex = sections.indexOf(activeSection);
                    const newIndex = event.key === 'ArrowDown'
                        ? (currentIndex + 1) % sections.length
                        : (currentIndex - 1 + sections.length) % sections.length;
                    handleSectionChange(newIndex);
                } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                    event.preventDefault();
                    handleOptionChange(new Event('keydown'), event.key === 'ArrowRight');
                }
            };

            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }, [activeSection, handleOptionChange, handleSectionChange, sections, toggleMenu]);

        return (
            <div className="relative" ref={menuRef}>
                <button
                    onClick={toggleMenu}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                    aria-label="Theme menu"
                >
                    <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </button>

                {isMenuOpen && (
                    <div className="fixed sm:absolute left-0 sm:left-auto right-0 sm:right-auto top-16 sm:top-auto sm:mt-2 mx-4 sm:mx-0 w-60 bg-white dark:bg-gray-700 rounded-lg shadow-lg border dark:border-gray-600 z-50">
                        {/* Font Size Section */}
                        <div
                            className={`px-3 py-2 cursor-pointer ${activeSection === 'fontSize' ? 'bg-gray-100 dark:bg-gray-600' : ''}`}
                            onClick={() => handleSectionChange(sections.indexOf('fontSize'))}
                        >
                            <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                                Schriftgröße <span className="text-xs text-gray-400 ml-2">(←/→)</span>
                            </div>
                            <div className="mt-2 flex items-center justify-center gap-3">
                                <button
                                    onClick={(e) => {
                                        setActiveSection('fontSize');
                                        handleOptionChange(e, false);
                                    }}
                                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
                                >
                                    ←
                                </button>
                                <span className="w-8 text-center">{tempFontSize}</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">pt</span>
                                <button
                                    onClick={(e) => {
                                        setActiveSection('fontSize');
                                        handleOptionChange(e, true);
                                    }}
                                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
                                >
                                    →
                                </button>
                            </div>
                        </div>

                        <div className="border-t dark:border-gray-700"></div>

                        {/* Theme Section */}
                        <div
                            className={`px-3 py-2 cursor-pointer ${activeSection === 'theme' ? 'bg-gray-100 dark:bg-gray-600' : ''}`}
                            onClick={() => handleSectionChange(sections.indexOf('theme'))}
                        >
                            <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                                Design <span className="text-xs text-gray-400 ml-2">(←/→)</span>
                            </div>
                            <div className="flex gap-1">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setTheme('light');
                                    }}
                                    className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${theme === 'light' ? 'bg-orange-100 dark:bg-yellow-400/60' : ''}`}
                                >
                                    hell
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setTheme('dark');
                                    }}
                                    className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${theme === 'dark' ? 'bg-orange-100 dark:bg-yellow-400/60' : ''}`}
                                >
                                    dunkel
                                </button>
                            </div>
                        </div>

                        <div className="border-t dark:border-gray-700"></div>

                        {/* Deceased Section */}
                        <div
                            className={`px-3 py-2 cursor-pointer ${activeSection === 'deceased' ? 'bg-gray-100 dark:bg-gray-600' : ''}`}
                            onClick={() => handleSectionChange(sections.indexOf('deceased'))}
                        >
                            <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                                Verstorbene <span className="text-xs text-gray-400 ml-2">(←/→)</span>
                            </div>
                            <div className="flex gap-1">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setDeceasedMode('recent');
                                        setExpandedDeceased({});
                                    }}
                                    className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${deceasedMode === 'recent' ? 'bg-orange-100 dark:bg-yellow-400/60' : ''}`}
                                >
                                    kurz
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setDeceasedMode('all');
                                        setExpandedDeceased({});
                                    }}
                                    className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${deceasedMode === 'all' ? 'bg-orange-100 dark:bg-yellow-400/60' : ''}`}
                                >
                                    voll
                                </button>
                            </div>
                            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                                <p><b>kurz:</b> Verstorbene der letzten 30 Jahre (wie&nbsp;im&nbsp;gedruckten&nbsp;Direktorium)</p>
                                <p><b>voll:</b> alle Verstorbene seit 1920</p>
                            </div>
                        </div>

                        <div className="border-t dark:border-gray-700"></div>

                        {/* View Selection Section */}
                        <div
                            className={`px-3 py-2 cursor-pointer ${activeSection === 'view' ? 'bg-gray-100 dark:bg-gray-600' : ''}`}
                            onClick={() => handleSectionChange(sections.indexOf('view'))}
                        >
                            <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                                Verzeichnis <span className="text-xs text-gray-400 ml-2">(←/→)</span>
                            </div>
                            <div className="flex gap-1">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setViewMode('directory');
                                        toggleMenu();
                                    }}
                                    className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${viewMode === 'directory' ? 'bg-orange-100 dark:bg-yellow-400/60' : ''}`}
                                >
                                    Direktorium
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setViewMode('deceased');
                                        toggleMenu();
                                    }}
                                    className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${viewMode === 'deceased' ? 'bg-orange-100 dark:bg-yellow-400/60' : ''}`}
                                >
                                    Totenverzeichnis
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    const baseStyle = {
        fontFamily,
        fontSize: `${baseFontSize}pt`,
        lineHeight: '1.2',
        margin: 0
    };

    const navStyle = {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        fontSize: '11pt'
    };

    const datePickerStyle = {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        fontSize: '10pt'
    };

    useEffect(() => {
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            .formatVerse {
                font-size: 0.9em;
            }
            .formatKleiner {
                font-size: 0.94em;
            }
            .formatHochfest {
                font-weight: bold;
                text-transform: uppercase;
            }
            .formatFest {
                font-weight: bold;
                font-variant: small-caps;
            }
        `;
        document.head.appendChild(styleElement);
        return () => {
            document.head.removeChild(styleElement);
        };
    }, []);

    useEffect(() => {
        const checkScreenWidth = () => {
            setIsNarrowScreen(window.innerWidth < 640); // 640px is the 'sm' breakpoint in Tailwind
        };

        // Initial check
        checkScreenWidth();

        // Add resize listener
        window.addEventListener('resize', checkScreenWidth);

        // Cleanup
        return () => window.removeEventListener('resize', checkScreenWidth);
    }, []);

    const [inputValue, setInputValue] = useState(formatDate(selectedDate, true));

    // Aktualisiere inputValue wenn sich selectedDate ändert
    useEffect(() => {
        setInputValue(formatDate(selectedDate, true));
    }, [selectedDate, formatDate]);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <ReferenceDialog />
            <div
                className="mx-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors w-full sm:max-w-[40em]"
                style={baseStyle}
            >
                {/* Navigation Bar */}
                <div
                    className="sticky top-0 left-0 right-0 w-full sm:max-w-[40em] bg-white dark:bg-gray-900 shadow-sm z-10 transition-colors"
                    style={navStyle}
                    role="navigation"
                >
                    <div className="flex items-center gap-2 px-4 py-4 overflow-x-auto sm:overflow-visible">
                        <ThemeMenu />

                        <div className="flex items-center gap-2 flex-1 min-w-0">
                            <button
                                onClick={handlePrevWeek}
                                className="shrink-0 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                                title="1 Woche zurück"
                            >
                                «
                            </button>
                            <button
                                onClick={handleToday}
                                className="shrink-0 px-4 py-2 bg-orange-100 dark:bg-yellow-400/60 hover:bg-orange-200 dark:hover:bg-yellow-400/70 rounded"
                            >
                                Heute
                            </button>

                            <div className="relative flex-1 min-w-0">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => {
                                        setInputValue(e.target.value);
                                        if (e.target.value.length >= 6) {
                                            const date = parseDateString(e.target.value);
                                            if (date) {
                                                handleDateSelect(date);
                                            }
                                        }
                                    }}
                                    onClick={(e) => {
                                        e.target.select();
                                        setShowDatePicker(!showDatePicker);
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && e.target.value.length >= 6) {
                                            const date = parseDateString(e.target.value);
                                            if (date) {
                                                handleDateSelect(date);
                                                setShowDatePicker(false);
                                            }
                                        } else if (e.key === 'Escape') {
                                            setShowDatePicker(false);
                                            setInputValue(formatDate(selectedDate, true));
                                        }
                                    }}
                                    onBlur={() => {
                                        const date = parseDateString(inputValue);
                                        if (!date) {
                                            setInputValue(formatDate(selectedDate, true));
                                        }
                                    }}
                                    className="w-full px-4 py-2 border dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 
                    cursor-pointer bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                                    placeholder="TT.MM.JJ"
                                />
                                <svg
                                    className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                {showDatePicker && <DatePicker />}
                            </div>

                            <button
                                onClick={handleNextWeek}
                                className="shrink-0 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                                title="1 Woche vor"
                            >
                                »
                            </button>

                            <button
                                onClick={() => setViewMode('prayer')}
                                className="shrink-0 px-4 py-2 bg-orange-100 dark:bg-yellow-400/60 hover:bg-orange-200 dark:hover:bg-yellow-400/70 rounded"
                                title="Stundengebet"
                            >
                                StB
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="mt-4">
                    {/* Prayer Views */}
                    {viewMode === 'prayer' && (
                        <>
                            <PrayerMenu
                                title={formatDate(selectedDate)}
                                selectedDate={selectedDate}
                                onSelectHour={(hour, texts) => {
                                    setSelectedHour(hour);
                                    setPrayerTexts(texts);
                                }}
                                setViewMode={setViewMode}
                                onPrevDay={() => {
                                    setDateChangeSource('navigation');
                                    setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() - 1)));
                                }}
                                onNextDay={() => {
                                    setDateChangeSource('navigation');
                                    setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() + 1)));
                                }}
                            />
                            {selectedHour && prayerTexts && (
                                <PrayerTextDisplay
                                    hour={selectedHour}
                                    texts={prayerTexts}
                                />
                            )}
                        </>
                    )}

                    {/* Original ScrollableContainer for directory/deceased views */}
                    {viewMode !== 'prayer' && (
                        <ScrollableContainer
                            containerRef={containerRef}
                            selectedDate={selectedDate}
                            dateChangeSource={dateChangeSource}
                        >
                            {visibleEntries.before && visibleEntries.before.length > 0 && (
                                <div
                                    data-before-container="true"
                                    style={{
                                        position: 'relative',
                                        marginTop: '-50vh',
                                        paddingTop: '50vh',
                                        marginBottom: '0'
                                    }}
                                >
                                    {visibleEntries.before.map(entry => (
                                        viewMode === 'directory' ? (
                                            <DayEntry
                                                key={entry.date.toISOString()}
                                                entry={entry}
                                                formatDate={formatDate}
                                                formatText={formatText}
                                                selectedDate={selectedDate}
                                                months={months}
                                                hangingIndent={hangingIndent}
                                                deceasedMode={deceasedMode}
                                                deceasedSizeRatio={deceasedSizeRatio}
                                                expandedDeceased={expandedDeceased}
                                                setExpandedDeceased={setExpandedDeceased}
                                                entriesRef={entriesRef}
                                            />
                                        ) : (
                                            <DeceasedEntry
                                                key={entry.date.toISOString()}
                                                entry={entry}
                                                formatDate={formatDate}
                                                formatText={formatText}  // Added this prop
                                                selectedDate={selectedDate}
                                                months={months}
                                                entriesRef={entriesRef}
                                            />
                                        )
                                    ))}
                                </div>
                            )}

                            {visibleEntries.current && visibleEntries.current.length > 0 && (
                                <div
                                    data-current-container="true"
                                    style={{
                                        position: 'relative',
                                        marginTop: '0'
                                    }}
                                >
                                    {visibleEntries.current.map(entry => (
                                        viewMode === 'directory' ? (
                                            <DayEntry
                                                key={entry.date.toISOString()}
                                                entry={entry}
                                                formatDate={formatDate}
                                                formatText={formatText}
                                                selectedDate={selectedDate}
                                                months={months}
                                                hangingIndent={hangingIndent}
                                                deceasedMode={deceasedMode}
                                                deceasedSizeRatio={deceasedSizeRatio}
                                                expandedDeceased={expandedDeceased}
                                                setExpandedDeceased={setExpandedDeceased}
                                                entriesRef={entriesRef}
                                            />
                                        ) : (
                                            <DeceasedEntry
                                                key={entry.date.toISOString()}
                                                entry={entry}
                                                formatDate={formatDate}
                                                formatText={formatText}  // Added this prop
                                                selectedDate={selectedDate}
                                                months={months}
                                                entriesRef={entriesRef}
                                            />
                                        )
                                    ))}
                                </div>
                            )}
                        </ScrollableContainer>
                    )}
                </div>
            </div>
        </div>
    );
}