import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Menu } from 'lucide-react';
import React from 'react';
import { liturgicalData } from './liturgicalData.ts';
import { deceasedData } from './deceasedData.ts';
import { ReferenceDialog, parseTextWithReferences } from './referenceLink.jsx';
import { getLiturgicalInfo, LiturgicalSeason } from './liturgicalCalendar.js';
import { processBrevierData } from './brevierDataProcessor.js';
import formatBibleRef from './bibleRefFormatter.js';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip.jsx';
import SourceSelector from './SourceSelector.js';

const fontFamily = 'Cambria, serif';
const hangingIndent = '3.2em'; // Variable für den Einzug
const deceasedSizeRatio = 0.9;
const DAYS_BUFFER = 7; // Anzahl der Tage vor/nach dem ausgewählten Datum
const rubricColor = '#b6a03a'; // Tailwind red-700

const months = ["Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember"];

const PrayerHours = {
    ERSTEVESPER: 'erstev',
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

const useSwipeNavigation = (onSwipeLeft, onSwipeRight, isDatePickerOpen) => {
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        // Wenn DatePicker offen ist, keine Swipe-Gesten verarbeiten
        if (isDatePickerOpen) return;

        if (e.touches.length === 1) {
            setTouchEnd(null);
            setTouchStart({
                x: e.targetTouches[0].clientX,
                y: e.targetTouches[0].clientY
            });
        }
    };

    const onTouchMove = (e) => {
        // Wenn DatePicker offen ist, keine Swipe-Gesten verarbeiten
        if (isDatePickerOpen) return;

        if (e.touches.length === 1) {
            setTouchEnd({
                x: e.targetTouches[0].clientX,
                y: e.targetTouches[0].clientY
            });
        }
    };

    const onTouchEnd = () => {
        // Wenn DatePicker offen ist, keine Swipe-Gesten verarbeiten
        if (isDatePickerOpen) return;

        if (!touchStart || !touchEnd) return;

        const distanceX = touchStart.x - touchEnd.x;
        const distanceY = Math.abs(touchStart.y - touchEnd.y);
        const angle = Math.abs(Math.atan2(distanceY, Math.abs(distanceX)) * (180 / Math.PI));
        const maxAngle = 30;
        const isHorizontalSwipe = angle <= maxAngle;

        if (isHorizontalSwipe && Math.abs(distanceX) > minSwipeDistance) {
            if (distanceX > 0) {
                onSwipeLeft();
            } else {
                onSwipeRight();
            }
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    useEffect(() => {
        // Nur Event-Listener hinzufügen, wenn DatePicker nicht geöffnet ist
        if (!isDatePickerOpen) {
            document.addEventListener('touchstart', onTouchStart);
            document.addEventListener('touchmove', onTouchMove);
            document.addEventListener('touchend', onTouchEnd);

            return () => {
                document.removeEventListener('touchstart', onTouchStart);
                document.removeEventListener('touchmove', onTouchMove);
                document.removeEventListener('touchend', onTouchEnd);
            };
        }
    }, [touchStart, touchEnd, isDatePickerOpen]);
};

// Ähnliche Anpassung für den useTouchZoom Hook
const useTouchZoom = (initialFontSize, minSize = 8, maxSize = 24, sensitivity = 1.0, isDatePickerOpen) => {
    const [touchStartDistance, setTouchStartDistance] = useState(null);
    const [startFontSize, setStartFontSize] = useState(initialFontSize);
    const [currentFontSize, setCurrentFontSize] = useState(initialFontSize);

    const getTouchDistance = useCallback((touches) => {
        if (touches.length < 2) return null;
        const dx = touches[0].clientX - touches[1].clientX;
        const dy = touches[0].clientY - touches[1].clientY;
        return Math.sqrt(dx * dx + dy * dy);
    }, []);

    const handleTouchStart = useCallback((e) => {
        // Wenn DatePicker offen ist, keine Zoom-Gesten verarbeiten
        if (isDatePickerOpen) return;

        if (e.touches.length === 2) {
            const distance = getTouchDistance(e.touches);
            setTouchStartDistance(distance);
            setStartFontSize(currentFontSize);
        }
    }, [getTouchDistance, currentFontSize, isDatePickerOpen]);

    const handleTouchMove = useCallback((e) => {
        // Wenn DatePicker offen ist, keine Zoom-Gesten verarbeiten
        if (isDatePickerOpen) return;

        if (e.touches.length === 2 && touchStartDistance) {
            e.preventDefault();

            const currentDistance = getTouchDistance(e.touches);
            const rawScale = currentDistance / touchStartDistance;
            const scale = 1.0 + (rawScale - 1.0) * sensitivity;
            let newSize = Math.round(startFontSize * scale);
            newSize = Math.max(minSize, Math.min(maxSize, newSize));
            setCurrentFontSize(newSize);
        }
    }, [touchStartDistance, startFontSize, getTouchDistance, minSize, maxSize, sensitivity, isDatePickerOpen]);

    const handleTouchEnd = useCallback(() => {
        setTouchStartDistance(null);
    }, []);

    useEffect(() => {
        // Nur Event-Listener hinzufügen, wenn DatePicker nicht geöffnet ist
        if (!isDatePickerOpen) {
            document.addEventListener('touchstart', handleTouchStart, { passive: false });
            document.addEventListener('touchmove', handleTouchMove, { passive: false });
            document.addEventListener('touchend', handleTouchEnd);
            document.addEventListener('touchcancel', handleTouchEnd);

            return () => {
                document.removeEventListener('touchstart', handleTouchStart);
                document.removeEventListener('touchmove', handleTouchMove);
                document.removeEventListener('touchend', handleTouchEnd);
                document.removeEventListener('touchcancel', handleTouchEnd);
            };
        }
    }, [handleTouchStart, handleTouchMove, handleTouchEnd, isDatePickerOpen]);

    return [currentFontSize, setCurrentFontSize];
};

// Helper-Funktion für View-Navigation
const getNextView = (currentView, direction) => {
    const views = ['deceased', 'directory', 'prayer'];
    const currentIndex = views.indexOf(currentView);

    if (direction === 'right') {
        return views[Math.min(currentIndex + 1, 2)];
    } else {
        return views[Math.max(currentIndex - 1, 0)];
    }
};

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
const PrayerMenu = ({ title, onSelectHour, viewMode, setViewMode, season,
    onPrevDay, onNextDay, selectedDate,
    prefSrc, prefSollemnity, setPrefSollemnity,
    useCommemoration, setUseCommemoration,
    onSourceSelect
}) => {
    const [liturgicalInfo, setLiturgicalInfo] = useState(null);
    const [prayerTexts, setPrayerTexts] = useState(null);  // Neuer State für die Gebetstext-Daten
    const rank_wt = prayerTexts?.rank_wt || 0
    const rank_date = prayerTexts?.rank_date || 0

    useEffect(() => {
        const info = getLiturgicalInfo(selectedDate);
        setLiturgicalInfo(info);

        if (info) {
            const processedData = processBrevierData(selectedDate);
            setPrayerTexts(processedData);
        }
    }, [selectedDate, prefSrc]); // Dependencies aktualisiert

    useEffect(() => {
        onSourceSelect('eig', false);
    }, [selectedDate]);

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
                            {liturgicalInfo.writtenSWD}
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

            {/* Source Selector */}
            <SourceSelector
                prayerTexts={prayerTexts}
                selectedSource={prefSrc}
                prefSollemnity={prefSollemnity}
                useCommemoration={useCommemoration}
                setUseCommemoration={setUseCommemoration}
                viewMode={viewMode}
                season={season}
                onSourceSelect={(source, newPrefSrc, newSollemnity) => {
                    onSourceSelect(newPrefSrc, newSollemnity);  // Aktualisiert
                }}
                className="mb-4"
            />

            {/* Prayer Hours */}
            <div className="space-y-2 mb-6">

                {Object.values(PrayerHours).map(hour => {
                    // Spezielle Behandlung für Terz, Sext, Non
                    if (['terz', 'sext', 'non'].includes(hour)) {
                        if (hour === 'terz') {
                            return (
                                <div key="tsn" className="flex gap-2 w-full">
                                    {['terz', 'sext', 'non'].map(tsnHour => (
                                        <button
                                            key={tsnHour}
                                            onClick={() => {
                                                console.log('Daten:', { hour, texts: prayerTexts });
                                                onSelectHour(tsnHour, prayerTexts)
                                            }}
                                            className="flex-1 p-3 text-center rounded-lg bg-gray-100 dark:bg-gray-800 
                                                hover:bg-gray-200 dark:hover:bg-gray-700 
                                                text-gray-900 dark:text-gray-100"
                                        >
                                            {tsnHour.charAt(0).toUpperCase() + tsnHour.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            );
                        }
                        return null; // Sext und Non überspringen, da sie bereits in der Flex-Box enthalten sind
                    }

                    if (hour === 'erstev') {
                        if (prefSollemnity) {
                            return (
                                <button
                                    onClick={() => {
                                        console.log('Daten:', { hour, texts: prayerTexts });
                                        onSelectHour(hour, prayerTexts)
                                    }}
                                    className="w-full p-3 text-center rounded-lg bg-gray-100 dark:bg-gray-800 
                                    hover:bg-gray-200 dark:hover:bg-gray-700 
                                    text-gray-900 dark:text-gray-100"
                                >
                                    Erste Vesper
                                </button>
                            );
                        }
                        return null;
                    }

                    let displayText = hour.charAt(0).toUpperCase() + hour.slice(1);
                    if (hour === 'vesper') {
                        if (prayerTexts?.vesper?.eig?.name) {
                            displayText = prayerTexts.vesper.eig.name;
                        } else if (prayerTexts?.vesper?.wt?.name) {
                            displayText = prayerTexts.vesper.wt.name;
                        } else {
                            const dayOfWeek = selectedDate.getDay();
                            if (dayOfWeek === 6 && rank_date < 4 &&
                                rank_wt < 5 && !prefSollemnity) { // Samstag
                                displayText = '1. Vesper vom Sonntag';
                            } else {
                                if (prefSollemnity) { displayText = 'Zweite Vesper' }
                                else displayText = 'Vesper';
                            }
                        }
                    }

                    // Normale Darstellung für andere Horen
                    return (
                        <button
                            key={hour}
                            onClick={() => {
                                console.log('Daten:', { hour, texts: prayerTexts });
                                onSelectHour(hour, prayerTexts)
                            }}
                            className="w-full p-3 text-center rounded-lg bg-gray-100 dark:bg-gray-800 
                                hover:bg-gray-200 dark:hover:bg-gray-700 
                                text-gray-900 dark:text-gray-100"
                        >
                            {displayText}
                        </button>
                    );
                })}
            </div>

            {/* Mass */}
            <button
                onClick={() => onSelectHour('mass')}
                className="w-full p-3 mb-6 text-center rounded-lg bg-gray-100 dark:bg-gray-800 
                           hover:bg-gray-200 dark:hover:bg-gray-700 
                           text-gray-900 dark:text-gray-100"
            >
                Messfeier
            </button>

            {/* View Selection with spacing */}
            <div className="pt-4 border-t dark:border-gray-700">
                <div className="flex gap-2">
                    <button
                        onClick={() => setViewMode('directory')}
                        className="flex-1 p-3 text-center rounded-lg bg-gray-100 dark:bg-gray-800 
                                hover:bg-gray-200 dark:hover:bg-gray-700 
                                text-gray-900 dark:text-gray-100"
                    >
                        Direktorium
                    </button>
                    <button
                        onClick={() => setViewMode('deceased')}
                        className="flex-1 p-3 text-center rounded-lg bg-gray-100 dark:bg-gray-800 
                                hover:bg-gray-200 dark:hover:bg-gray-700 
                                text-gray-900 dark:text-gray-100"
                    >
                        Totenverzeichnis
                    </button>
                </div>
            </div>
        </div >
    );
};

const BackButton = ({ onClick }) => (
    <button
        onClick={onClick}
        className="w-full p-2 mb-1 rounded-sm bg-gray-100 dark:bg-gray-800 
                 hover:bg-gray-200 dark:hover:bg-gray-700 
                 text-gray-900 dark:text-gray-100 text-left text-sm"
        style={{ color: rubricColor }}
    >
        ← zurück zur Stundengebetauswahl
    </button>
);


// Prayer Text Display Component
const PrayerTextDisplay = ({
    hour, texts, season, onBack, viewMode, onUpdateTexts,
    prefSrc, prefSollemnity, setPrefSollemnity,
    useCommemoration, setUseCommemoration,
    onSourceSelect, onSelectHour
}) => {
    const [localPrefComm, setLocalPrefComm] = useState(texts?.prefComm || 0);
    const [localPrefLatin, setLocalPrefLatin] = useState(false);
    const [localPrefContinuous, setLocalPrefContinuous] = useState(false);
    const [localPrefPsalmsWt, setLocalPrefPsalmsWt] = useState(false);

    if (!hour || !texts || !texts[hour]) {
        return <div className="p-4">Keine Daten verfügbar</div>;
    }

    const doxology = "Ehre sei dem Vater und dem Sohn^*und dem Heiligen Geist,^pwie im Anfang so auch jetzt und alle Zeit^*und in Ewigkeit. Amen.";
    const { prefComm = 0, rank_wt = 0, rank_date = 0, isCommemoration } = texts;

    // Get value from sources in priority order: prefSrc -> com1/com2 -> wt
    const getValue = (field) => {
        if (hour === 'vesper' && prefSollemnity) {
            hour = 'prefsollemnity';
        }

        //Bei lokaler Feier als Hochfest Oration immer aus den Laudes
        if (prefSollemnity && field === 'oration') {
            if (texts['laudes'][prefSrc]?.['oration']) {
                return texts['laudes'][prefSrc]['oration'];
            }
            else return null
        }

        // Abruf der Werte für die Kommemoration
        if (field.startsWith('c_')) {
            field = field.substring(2); // Remove c_ prefix
            if (texts[hour][prefSrc]?.[field]) {
                return texts[hour][prefSrc][field];
            }
            if (field === 'ant_ev' && texts[hour][prefSrc]?.['ant_komm']) {
                return texts[hour][prefSrc]['ant_komm'];
            }
            if (texts[hour][prefSrc]?.['com1']?.[field]) {
                return texts[hour][prefSrc]?.['com1'][field];
            }
            return
        }

        const fallbackCom1 = localPrefComm === 1 || prefSollemnity ||
            (texts.hasErsteVesper && hour === 'vesper');
        const fallbackCom2 = localPrefComm === 2 || prefSollemnity ||
            (texts.hasErsteVesper && hour === 'vesper');

        // Sonderfall Hymnen: 
        // klStb und Nacht-Hymnus werden nicht gezeigt, wenn eigener Hymnus vorhanden
        // oder Feier als Hochfest oder Commune-Hymnus gewählt ist
        if ((field === 'hymn_kl' || field === 'hymn_nacht') &&
            (texts[hour]?.[prefSrc]?.['hymn_1']
                || prefSollemnity
                || (fallbackCom1 && texts[hour]?.[prefSrc]?.['com1']?.['hymn_1'])
                || (fallbackCom2 && texts[hour]?.[prefSrc]?.['com2']?.['hymn_1'])
            )) { return null; }

        //Sonderfall Antiphonen: nicht ant_0 und ant_1-3 gleichzeitig
        if (field === 'ant_0' &&
            (texts[hour]?.['eig']?.['ant_1']
                || (fallbackCom1 && texts[hour]?.[prefSrc]?.['com1']?.['ant_1'])
                || (fallbackCom2 && texts[hour]?.[prefSrc]?.['com2']?.['ant_1']))
        ) { return null; }

        if (field.startsWith('ant_') && field !== 'ant_0') {
            if (texts[hour]?.['eig']?.['ant_0']
                || (fallbackCom1 && texts[hour]?.[prefSrc]?.['com1']?.['ant_0'])
                || (fallbackCom2 && texts[hour]?.[prefSrc]?.['com2']?.['ant_0'])
            ) { return null; }
        }

        //Sonderfall Wochentagspsalmen:
        if (hour !== 'invitatorium' && hour !== 'komplet' &&
            field.startsWith('ps_') &&
            localPrefPsalmsWt
        ) { return texts[hour]?.['wt']?.[field]; }

        //Sonderfall Bahnlesung:
        if (hour === 'lesehore' &&
            (field.startsWith('les_') ||
                field.startsWith('resp1_') ||
                field.startsWith('patr_')) &&
            localPrefContinuous
        ) { return texts[hour]?.['wt']?.[field]; }

        // Prüfe, ob Commune übersprungen werden soll
        const skipCommune = rank_date < 3 && !prefSollemnity &&
            !(texts.hasErsteVesper && hour === 'vesper') && (
                // Bedingung 1: Lesehore
                (hour === 'lesehore' && !field.startsWith('hymn_') && field !== 'oration') ||
                // Bedingung 2: Laudes/Vesper Psalmodie
                ((hour === 'laudes' || hour === 'vesper') &&
                    (field.startsWith('ps_') ||
                        (field.startsWith('ant_') && !field.startsWith('ant_ev')))) ||
                // Bedingung 3: Kleinen Horen
                ['terz', 'sext', 'non'].includes(hour)
            );

        if (!isCommemoration) {  // an Tagen mit Kommemoration nur wt-Werte
            // 1. Prüfe zuerst prefSrc
            if (texts[hour][prefSrc]?.[field]) {
                return texts[hour][prefSrc][field];
            }

            // 2. & 3. Prüfe Commune nur wenn nicht übersprungen werden soll
            if (!skipCommune) {
                // Prüfe com2 wenn prefComm = 2
                if (fallbackCom2 && texts[hour][prefSrc]?.['com2']?.[field]) {
                    return texts[hour][prefSrc]?.['com2'][field];
                }
                // Prüfe com1 wenn prefComm = 1 oder prefSollemnity gewählt ist
                if (fallbackCom1 && texts[hour][prefSrc]?.['com1']?.[field]) {
                    return texts[hour][prefSrc]?.['com1'][field];
                }
            }
        }

        // 4. Verwende "wt" als letzte Option
        if (texts[hour]['wt']?.[field]) {
            return texts[hour]['wt'][field];
        }
        return null;
    }

    const checkSources = (field) => {
        const hasEig = texts[hour][prefSrc]?.[field];
        const hasWt = texts[hour]['wt']?.[field];
        const hasComm1 = texts[hour][prefSrc]?.['com1']?.[field];
        const hasComm2 = texts[hour][prefSrc]?.['com2']?.[field];
        const nameComm1 = texts['laudes'][prefSrc]?.['com1']?.['name'] || '1';
        const nameComm2 = texts['laudes'][prefSrc]?.['com2']?.['name'] || '2';

        return {
            hasEig,
            hasWt,
            hasComm1,
            hasComm2,
            nameComm1,
            nameComm2,
            showSources: !hasEig && hasWt && hasComm1,
            showComm2: hasComm1 && hasComm2
        };
    };

    // Component for section headers with source indicators
    const SectionHeader = ({ title, field: provField, latinField, askContinuous, askTSN, onSelectHour }) => {
        const field = (hour === 'invitatorium' && provField === 'ps_1')
            ? 'ant_0' : provField;
        const { hasEig, hasWt, nameComm1, nameComm2, showSources, showComm2 } =
            checkSources(field);
        const hasLatin = latinField && texts[hour]['wt']?.[latinField];
        const showContinuous = hasEig && hasWt && askContinuous && hour === 'lesehore';
        const showPsalmsWt = hasEig && hasWt &&
            title === 'PSALMODIE' && (hour !== 'invitatorium' && hour !== 'komplet');
        const showTSN = askTSN && ["terz", "sext", "non"].includes(hour);
        // Prüfe, ob Commune übersprungen werden soll
        const skipCommune = (prefSollemnity && !showComm2)
            ||
            (rank_date < 3 && !prefSollemnity && (
                // Bedingung 1: Lesehore
                (hour === 'lesehore' && !field.startsWith('hymn_') && field !== 'oration') ||
                // Bedingung 2: Laudes/Vesper Psalmodie
                ((hour === 'laudes' || hour === 'vesper') &&
                    (field.startsWith('ps_') ||
                        (field.startsWith('ant_') && !field.startsWith('ant_ev')))) ||
                // Bedingung 3: Kleinen Horen
                ['terz', 'sext', 'non'].includes(hour)
            ));
        if (title === "RESPONSORIUM" ||
            (!showSources && !hasLatin && !showPsalmsWt && !showContinuous && !showTSN)) {
            return <h2 className="prayer-heading">{title}</h2>;
        }

        return (
            <h2 className="prayer-heading flex items-center gap-3"
                style={{ color: rubricColor }}>
                {title}
                {hasLatin && (
                    <button
                        onClick={() => setLocalPrefLatin(prev => !prev)}
                        className="font-normal text-[0.85em]"
                        style={{ color: rubricColor }}
                    >
                        (dt./lat.)
                    </button>
                )}
                {showPsalmsWt && (
                    <span className="font-normal text-[0.85em]">
                        <button
                            onClick={() => setLocalPrefPsalmsWt(false)}
                            className={!localPrefPsalmsWt && 'underline'}
                        >
                            Ps eig
                        </button>
                        {" | "}
                        <button
                            onClick={() => setLocalPrefPsalmsWt(true)}
                            className={localPrefPsalmsWt && 'underline'}
                        >
                            vom Wt
                        </button>
                    </span>
                )}
                {showContinuous && (
                    <span className="font-normal text-[0.85em]">
                        <button
                            onClick={() => setLocalPrefContinuous(false)}
                            className={!localPrefContinuous && 'underline'}
                        >
                            Eigenlesung
                        </button>
                        {" | "}
                        <button
                            onClick={() => setLocalPrefContinuous(true)}
                            className={localPrefContinuous && 'underline'}
                        >
                            Bahnlesung
                        </button>
                    </span>
                )}
                {showSources && !skipCommune && (
                    <span className="font-normal text-[0.85em]">
                        <button
                            onClick={() => setLocalPrefComm(1)}
                            className={`${localPrefComm === 1 ? 'underline' : ''}`}
                        >
                            Comm {nameComm1}
                        </button>
                        {showComm2 && (
                            <>
                                {"  |  "}
                                <button
                                    onClick={() => setLocalPrefComm(2)}
                                    className={`${localPrefComm === 2 ? 'underline' : ''}`}
                                >
                                    {nameComm2}
                                </button>

                            </>
                        )}
                        {!prefSollemnity && (
                            <>
                                {" | "}
                                <button
                                    onClick={() => setLocalPrefComm(0)}
                                    className={`${localPrefComm === 0 ? 'underline' : ''}`}
                                >
                                    Wt
                                </button>
                            </>
                        )}
                    </span>
                )}
                {showTSN && (
                    <span className="font-normal text-[0.85em]">
                        <button
                            onClick={() => onSelectHour('terz')}
                            className={`${hour === 'terz' ? 'underline' : ''}`}
                        >
                            Terz
                        </button>
                        {" | "}
                        <button
                            onClick={() => onSelectHour('sext')}
                            className={`${hour === 'sext' ? 'underline' : ''}`}
                        >
                            Sext
                        </button>
                        {" | "}
                        <button
                            onClick={() => onSelectHour('non')}
                            className={`${hour === 'non' ? 'underline' : ''}`}
                        >
                            Non
                        </button>
                    </span>
                )}
            </h2>
        );
    };

    // Format psalm data
    const formatPsalm = (number, verses, title, quote, text) => {
        if (!text) return null;
        return (
            <div className="mb-4">
                <div className="font-bold" style={{ color: rubricColor }}>
                    {number > 0 && (
                        number > 150 ? (<>Canticum: {formatBibleRef(verses)}</>) : (
                            <>  Psalm {number}
                                {verses && <>{formatBibleRef(`,${verses}`)}</>}
                            </>
                        ))}
                </div>
                {title && <div className="text-[0.9em] text-gray-400 mb-[0.66em]">{title}</div>}
                {quote && <div className="text-[0.9em] leading-[1.1em] italic text-gray-400 -mt-[0.66em] mb-[0.66em]">{quote}</div>}
                {text && <div className="whitespace-pre-wrap">{formatPrayerText(text)}</div>}
                {number !== 160 && <div className="whitespace-pre-wrap">{formatPrayerText(doxology)}</div>}
            </div >
        );
    };

    // Rubric component for styled headers and labels
    const Rubric = ({ children, style, isHeader = false }) => (
        <span
            className={`${isHeader ? 'text-lg font-bold mb-4' : ''}`}
            style={{
                color: rubricColor,
                ...style
            }}
        >
            {children}
        </span>
    );

    const formatPrayerText = (text) => {
        if (!text) return null;

        // Inline-Formatierungen als React-Elemente verarbeiten
        const processInlineFormats = (text) => {
            // Basis-Ersetzungen
            let processedText = text
                .replace(/°/g, '\u00A0')
                .replace(/\^\*/g, '\u00A0*\n')
                .replace(/\^\+/g, '\u00A0†\n')
                .replace(/\^\//g, '    ')
                .replace(/\^l/g, '\n')
                .replace(/\^ö/g, season === 'o' ? ' Halleluja.' : '')
                .replace(/}/g, ')')
                .replace(/\{(\d{1,2})#/g, '(');

            // Split text into segments, keeping delimiters
            const segments = processedText.split(/(\^r.*?\^0r|\^w.*?\^0w|\^\(|\^\)|\^N)/g).filter(Boolean);

            return segments.map((segment, index) => {
                if (segment.startsWith('^r')) {
                    // Rubrik-Text
                    const content = segment.substring(2, segment.length - 3);
                    return <span key={`rubric-${index}`} style={{ color: rubricColor }}>{content}</span>;
                } else if (segment.startsWith('^w')) {
                    // Gesperrter Text
                    const content = segment.substring(2, segment.length - 3);
                    return <span key={`tracked-${index}`} className='tracking-[0.16em]'>{content}</span>;
                } else if (segment === '^(') {
                    return <span key={`open-${index}`} style={{ color: rubricColor }}>(</span>;
                } else if (segment === '^)') {
                    return <span key={`close-${index}`} style={{ color: rubricColor }}>)</span>;
                } else if (segment === '^N') {
                    return <span key={`name-${index}`} style={{ color: rubricColor }}>N.</span>;
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
    const PrayerResponse = ({ resp1_3, resp1_2, rubricColor }) => {
        const formatSecondResponse = (firstResp, secondResp) => {
            if (!firstResp || !secondResp) return secondResp;

            // Prüfe, ob resp1_3 mit einem Punkt endet
            const endsWithPeriod = firstResp.trim().endsWith('.');

            // Wenn ja, beginne resp1_2 mit Großbuchstaben, ansonsten mit Kleinbuchstaben
            // Nur bei Punkt am Ende von resp1_3 wird resp1_2 großgeschrieben
            return endsWithPeriod
                ? secondResp.charAt(0).toUpperCase() + secondResp.slice(1)
                : secondResp;
        };

        return (
            <div className="flex gap-0">
                <Rubric>V&nbsp;&nbsp;</Rubric>
                <div>
                    {formatPrayerText(resp1_3)}
                    <span style={{ color: rubricColor }}> *&nbsp;</span>
                    {formatPrayerText(formatSecondResponse(resp1_3, resp1_2))}
                </div>
            </div>
        );
    };

    const getCanticleTitle = (hour) => {
        switch (hour) {
            case 'laudes':
                return 'BENEDICTUS';
            case 'komplet':
                return 'NUNC DIMITTIS';
            case 'vesper':
            default:
                return 'MAGNIFICAT';
        }
    }

    return (
        <div className="leading-[1.33em] pb-8">
            <BackButton onClick={onBack} />
            <div className="bg-white dark:bg-gray-800 rounded-sm shadow pl-2 pr-6 pb-1">
                <SourceSelector
                    prayerTexts={texts}
                    selectedSource={prefSrc}
                    prefSollemnity={prefSollemnity}
                    useCommemoration={useCommemoration}
                    setUseCommemoration={setUseCommemoration}
                    viewMode={viewMode}
                    season={season}
                    hour={hour}
                    onSourceSelect={(
                        source, newPrefSrc, newSollemnity) => {
                        onSourceSelect(newPrefSrc);
                        setPrefSollemnity(newSollemnity);
                    }}
                    className="mb-4"
                />
                {getValue('hymn_1') && (
                    <div className="mb-2">
                        <SectionHeader
                            title="HYMNUS"
                            field="hymn_1"
                            askTSN={true}
                            onSelectHour={onSelectHour}
                        />
                        {getValue('hymn_1')?.text && (
                            <div className="mb-4">
                                {formatPrayerText(getValue('hymn_1').text)}
                            </div>
                        )}
                        {getValue('hymn_2')?.text && (
                            <>
                                <Rubric>Oder:</Rubric>
                                <div className="mb-4">
                                    {formatPrayerText(getValue('hymn_2').text)}
                                </div>
                            </>
                        )}
                        {getValue('hymn_3')?.text && (
                            <>
                                <Rubric>Oder:</Rubric>
                                <div className="mb-4">
                                    {formatPrayerText(getValue('hymn_3').text)}
                                </div>
                            </>
                        )}
                        {getValue('hymn_nacht')?.text && (
                            <>
                                <Rubric>In der Nacht oder am frühen Morgen:</Rubric>
                                <div className="mb-4">
                                    {formatPrayerText(getValue('hymn_nacht').text)}
                                </div>
                            </>
                        )}
                        {getValue('hymn_kl')?.text && (
                            <>
                                <Rubric>im Kleinen Stundenbuch:</Rubric>
                                <div className="">
                                    {formatPrayerText(getValue('hymn_kl').text)}
                                </div>
                            </>
                        )}
                    </div>)}

                <div className="mb-1">
                    <SectionHeader title="PSALMODIE" field="ps_1" />
                    {getValue('ant_0') && (
                        <div className="mb-4">
                            <Rubric style={{ display: 'inline' }}>Ant.&nbsp;</Rubric>
                            {formatPrayerText(getValue('ant_0'))}
                        </div>)}

                    {[95, 100, 67, 24].map(num => {
                        const psalm = getValue(`ps_${num}`);
                        if (!psalm) return null;

                        return (
                            <div key={num} className="mb-4">
                                {(num !== 95) && (<Rubric>Oder:</Rubric>)}
                                {psalm && formatPsalm(
                                    psalm.number,
                                    '', '', '',
                                    psalm.text
                                )}
                            </div>
                        );
                    })}
                    {[1, 2, 3].map(num => {
                        const psalm = getValue(`ps_${num}`);
                        const ant = getValue(`ant_${num}`);
                        if (!psalm && !ant) return null;

                        return (
                            <div key={num} className="mb-6">
                                {ant && (
                                    <div className="mb-3" >
                                        <Rubric >{num}. Ant.&nbsp;&nbsp;</Rubric>
                                        {formatPrayerText(ant)}
                                    </div>
                                )}
                                {psalm && formatPsalm(
                                    psalm.number,
                                    psalm.verses,
                                    psalm.title,
                                    psalm.quote,
                                    psalm.text
                                )}
                                {ant && (
                                    <div >
                                        <Rubric>{num}. Ant.&nbsp;&nbsp;</Rubric>
                                        {formatPrayerText(ant)}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                    {getValue('ant_0') && (
                        <div>
                            <Rubric>Ant.&nbsp;</Rubric>
                            {formatPrayerText(getValue('ant_0'))}
                        </div>
                    )}
                </div>
                {getValue('resp0_0') && (
                    <div className="mb-1">
                        <SectionHeader title="VERSIKEL" field="resp0_0" />
                        {getValue('resp0_0') && (
                            <div className="mb-0 flex gap-0">
                                <Rubric>V&nbsp;&nbsp;</Rubric>
                                <div>{formatPrayerText(getValue('resp0_0'))}</div>
                            </div>
                        )}
                        {getValue('resp0_1') && (
                            <div className="flex gap-0">
                                <Rubric>R&nbsp;&nbsp;</Rubric>
                                <div>{formatPrayerText(getValue('resp0_1'))}</div>
                            </div>
                        )}
                    </div>)}

                {getValue('les_buch') && getValue('les_stelle') && (<div className="mb-1">
                    <SectionHeader
                        title={hour === "lesehore" ? "ERSTE LESUNG" : "KURZLESUNG"}
                        field="les_text"
                        askContinuous={true}
                        askTSN={true}
                        onSelectHour={onSelectHour}
                    />
                    <div>
                        {(hour !== "lesehore") && (
                            <div className='text-[0.9em] text-gray-400'>{getValue('les_buch')} {formatBibleRef(getValue('les_stelle'))}</div>
                        )}
                        {(hour == "lesehore") && (
                            <>
                                <div className='flex gap-3 items-baseline'>{getValue('les_buch')}
                                    <span className='text-[0.9em] text-gray-400'>{formatBibleRef(getValue('les_stelle'))}</span></div>
                            </>)}
                        {formatPrayerText(getValue('les_text'))}
                    </div>
                </div>)}

                {getValue('resp1_1') && (
                    <div className="mb-1 whitespace-pre-wrap">
                        <SectionHeader title="RESPONSORIUM" field="resp1_1" />
                        {getValue('resp1_0') && getValue('resp1_1') && (
                            <div className="mb-0 flex gap-0">
                                <Rubric>V&nbsp;&nbsp;</Rubric>
                                <div>
                                    {formatPrayerText(getValue('resp1_0'))}
                                </div>

                            </div>

                        )}
                        {getValue('resp1_0') && getValue('resp1_1') && (
                            <div className="mb-0 flex gap-0">
                                <Rubric>R&nbsp;&nbsp;</Rubric>
                                <div>
                                    {formatPrayerText(getValue('resp1_1'))}
                                </div>
                            </div>

                        )}
                        {getValue('resp1_1') && getValue('resp1_2') && (
                            <div className="mb-0 flex gap-0">
                                <Rubric>R&nbsp;&nbsp;</Rubric>
                                <div>
                                    {formatPrayerText(getValue('resp1_1'))}
                                    <span style={{ color: rubricColor }}> *&nbsp;</span>
                                    {formatPrayerText(getValue('resp1_2'))}
                                    {hour !== 'lesehore' && (
                                        <span style={{ color: rubricColor }}>
                                            &nbsp;–&nbsp;R
                                        </span>
                                    )}
                                </div>
                            </div>
                        )}
                        {getValue('resp1_3') && getValue('resp1_2') && (
                            <>
                                <PrayerResponse
                                    resp1_3={getValue('resp1_3')}
                                    resp1_2={getValue('resp1_2')}
                                    rubricColor={rubricColor}
                                />
                                {(hour !== 'lesehore') && (
                                    <div>Ehre sei dem Vater.
                                        <span style={{ color: rubricColor }}>
                                            &nbsp;–&nbsp;R
                                        </span>
                                    </div>
                                )}
                            </>
                        )}
                    </div>)}

                {getValue('patr_text') && (
                    <div className="mb-1">
                        <SectionHeader
                            title="ZWEITE LESUNG"
                            field="patr_text"
                            askContinuous={true}
                        />
                        <div>
                            <div className='text-[0.9em] italic'> {formatPrayerText(getValue('patr_autor'))}</div>
                            {formatPrayerText(getValue('patr_werk'))}
                            {formatPrayerText(getValue('patr_text'))}
                        </div>
                    </div>)}

                {getValue('patr_resp1') && (
                    <div className="mb-1">
                        <SectionHeader title="RESPONSORIUM" field="resp1_1" />
                        {getValue('patr_resp1') && getValue('patr_resp2') && (
                            <div className="mb-0 flex gap-0">
                                <Rubric>R&nbsp;&nbsp;</Rubric>
                                <div>
                                    {formatPrayerText(getValue('patr_resp1'))}
                                    <span style={{ color: rubricColor }}> *&nbsp;</span>
                                    {formatPrayerText(getValue('patr_resp2'))}
                                    {hour !== 'lesehore' && (
                                        <span style={{ color: rubricColor }}>
                                            &nbsp;–&nbsp;R
                                        </span>
                                    )}
                                </div>
                            </div>
                        )}
                        {getValue('patr_resp3') && getValue('patr_resp2') && (
                            <PrayerResponse
                                resp1_3={getValue('patr_resp3')}
                                resp1_2={getValue('patr_resp2')}
                                rubricColor={rubricColor}
                            />
                        )}
                    </div>)}

                {getValue('ev') && (
                    <div className="mb-1">
                        <SectionHeader
                            title={getCanticleTitle(hour)}
                            field='ant_ev'
                            latinField='ev_lat'
                        />
                        {getValue('ant_ev') && (
                            <div className="mb-4">
                                <Rubric>Ant.&nbsp;</Rubric>
                                {formatPrayerText(getValue('ant_ev'))}
                            </div>
                        )}
                        {getValue('ev') && (
                            <div className="mb-4">
                                {localPrefLatin ? formatPrayerText(getValue('ev_lat').text) : formatPsalm(0, '', '', '', getValue('ev').text)}
                            </div>
                        )}
                        {getValue('ant_ev') && (
                            <div className="mb-4">
                                <Rubric>Ant.&nbsp;</Rubric>
                                {formatPrayerText(getValue('ant_ev'))}
                            </div>
                        )}
                    </div>)}

                {getValue('bitten') && (
                    <div className="mb-1">
                        <SectionHeader
                            title={hour === "laudes" ? "BITTEN" : "FÜRBITTEN"}
                            field="bitten"
                        />
                        {getValue('bitten_e') && (
                            <div className="mb-2">
                                {formatPrayerText(getValue('bitten_e'))}
                            </div>
                        )}
                        {getValue('bitten_r') && (
                            <div className="mb-2 flex gap-0">
                                <Rubric>R&nbsp;&nbsp;</Rubric>
                                <div>{formatPrayerText(getValue('bitten_r'))}</div>
                            </div>
                        )}
                        {getValue('bitten') && (
                            <div className="">
                                {formatPrayerText(getValue('bitten'))}
                            </div>
                        )}
                    </div>)
                }

                {getValue('vu') && (
                    <div className="mb-1">
                        <SectionHeader
                            title={hour === "lesehore" ? "TE DEUM" : "VATERUNSER"}
                            field="vu"
                            latinField="vu_lat"
                        />
                        {getValue('vu') && (
                            <div className="mb-4 whitespace-pre-wrap">
                                {localPrefLatin ? formatPrayerText(getValue('vu_lat').text) : formatPrayerText(getValue('vu').text)}
                            </div>
                        )}

                    </div>)
                }

                {(hour !== "invitatorium") && (hour !== "komplet") && (
                    <div className="mb-1">
                        <SectionHeader title="ORATION" field="oration" />
                        {getValue('oration') && (
                            <div className="whitespace-pre-wrap">
                                {formatPrayerText(getValue('oration'))}
                            </div>
                        )}
                    </div>)
                }

                {getValue('oration_komplet') && (<div className="mb-1">
                    <SectionHeader title="ORATION" field="oration_komplet"
                    />
                    <div>
                        {formatPrayerText(getValue('oration_komplet'))}
                    </div>
                </div>)}

                {getValue('marant') && (
                    <div className="mb-1">
                        <SectionHeader
                            title={"MARIANISCHE ANTIPHON"}
                            field="marant"
                            latinField="marant_lat"
                        />
                        {getValue('marant') && (
                            <div className="mb-4">
                                {localPrefLatin ? formatPrayerText(getValue('marant_lat').text) : formatPrayerText(getValue('marant').text)}
                            </div>
                        )}

                    </div>)
                }
            </div>
            <div className="mt-2">
                <BackButton onClick={onBack} />
            </div>
            {isCommemoration && !prefSollemnity &&
                ['lesehore', 'laudes', 'vesper'].includes(hour) && (
                    <>
                        <div className="bg-white dark:bg-gray-800 rounded-sm shadow pl-2 pr-6 pb-1">
                            <SourceSelector
                                prayerTexts={texts}
                                selectedSource={prefSrc}
                                prefSollemnity={prefSollemnity}
                                useCommemoration={useCommemoration}
                                setUseCommemoration={setUseCommemoration}
                                viewMode={viewMode}
                                season={season}
                                hour={hour}
                                reduced={true}
                                onSourceSelect={(
                                    source, newPrefSrc, newSollemnity) => {
                                    onSourceSelect(newPrefSrc);
                                    setPrefSollemnity(newSollemnity);
                                }}
                                className="mb-4"
                            />

                            {getValue('c_patr_text') && (
                                <div className="mb-1">
                                    <SectionHeader
                                        title="ZWEITE LESUNG"
                                        field="patr_text"
                                    />
                                    <div>
                                        <div className='text-[0.9em] italic'>
                                            {formatPrayerText(getValue('c_patr_autor'))}
                                        </div>
                                        {formatPrayerText(getValue('c_patr_werk'))}
                                        {formatPrayerText(getValue('c_patr_text'))}
                                    </div>
                                </div>)}

                            {getValue('c_patr_resp1') && (
                                <div className="mb-1">
                                    <SectionHeader title="RESPONSORIUM" field="resp1_1" />
                                    {getValue('c_patr_resp1') && getValue('c_patr_resp2') && (
                                        <div className="mb-0 flex gap-0">
                                            <Rubric>R&nbsp;&nbsp;</Rubric>
                                            <div>
                                                {formatPrayerText(getValue('c_patr_resp1'))}
                                                <span style={{ color: rubricColor }}> *&nbsp;</span>
                                                {formatPrayerText(getValue('c_patr_resp2'))}
                                                {hour !== 'lesehore' && (
                                                    <span style={{ color: rubricColor }}>
                                                        &nbsp;–&nbsp;R
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    {getValue('c_patr_resp3') && getValue('c_patr_resp2') && (
                                        <PrayerResponse
                                            resp1_3={getValue('c_patr_resp3')}
                                            resp1_2={getValue('c_patr_resp2')}
                                            rubricColor={rubricColor}
                                        />
                                    )}
                                </div>)}

                            {getValue('c_ant_ev') && (
                                <div className="mb-1">
                                    <SectionHeader
                                        title={`${getCanticleTitle(hour)}-ANTIPHON`}
                                        field='ant_ev'
                                    />
                                    <div className="mb-4">
                                        {formatPrayerText(getValue('c_ant_ev'))}
                                    </div>
                                </div>)}

                            {getValue('c_oration') && (
                                <div className="mb-1">
                                    <SectionHeader title="ORATION" field="oration" />
                                    <div className="whitespace-pre-wrap">
                                        {formatPrayerText(getValue('c_oration'))}
                                    </div>
                                </div>)}
                        </div>
                        <div className="mt-2">
                            <BackButton onClick={onBack} />
                        </div>
                    </>)}
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
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'light';
    });
    const [prefSrc, setPrefSrc] = useState('eig');
    const [prefSollemnity, setPrefSollemnity] = useState(false);
    const [useCommemoration, setUseCommemoration] = useState(false);
    const [selectedHour, setSelectedHour] = useState(null);
    const [prayerTexts, setPrayerTexts] = useState(null);
    const [expandedDeceased, setExpandedDeceased] = useState({});
    const [deceasedMode, setDeceasedMode] = useState('recent');
    const [viewMode, setViewMode] = useState('directory'); // 'directory', 'deceased', 'prayer', or 'prayerText'
    const [baseFontSize, setBaseFontSize] = useTouchZoom(14, 8, 24, 0.7, showDatePicker);
    const [isReady, setIsReady] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('fontSize');
    const [isNarrowScreen, setIsNarrowScreen] = useState(false);
    const entriesRef = useRef({});
    const containerRef = useRef(null);
    const [visibleRange, setVisibleRange] = useState({ startDate: null, endDate: null });
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef(null);
    const [liturgicalInfo, setLiturgicalInfo] = useState(null);
    const [currentSeason, setCurrentSeason] = useState(null);

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

    const handleSwipeLeft = () => {
        // Nur navigieren wenn nicht im Text-View
        if (viewMode !== 'prayerText') {
            setViewMode(getNextView(viewMode, 'right'));
        }
    };

    const handleSwipeRight = () => {
        // Nur navigieren wenn nicht im Text-View
        if (viewMode !== 'prayerText') {
            setViewMode(getNextView(viewMode, 'left'));
        }
    };

    // Touch-Navigation Hook
    //  - bis auf Weiteres deaktiviert, weil die Scroll-Funktionen beeinträchtigt werden
    // useSwipeNavigation(handleSwipeLeft, handleSwipeRight, showDatePicker);

    // Effect für die visibleEntries-Berechnung
    useEffect(() => {
        entriesRef.current = {};
        if (selectedDate) {
            setIsReady(false);
            setTimeout(() => {
                setIsReady(true);
            }, 100);
        }

        const info = getLiturgicalInfo(selectedDate);
        setLiturgicalInfo(info);
        if (info?.season) {
            setCurrentSeason(info.season);
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
        if (dateChangeSource === 'navigation' ||
            (viewMode === 'directory' || viewMode === 'deceased')) {
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
    }, [selectedDate, dateChangeSource, isReady, viewMode]);

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
                                    –
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
                                    +
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
                                        setViewMode('deceased');
                                        toggleMenu();
                                    }}
                                    className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${viewMode === 'deceased' ? 'bg-orange-100 dark:bg-yellow-400/60' : ''}`}
                                >
                                    Totenverzeichnis
                                </button>
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
        lineHeight: '1.3',
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
            .formatGesperrt {
                letter-spacing: 0.2em;        
            }
            .prayer-heading {
                font-weight: bold;
                margin-top: 1em;
                color: ${rubricColor};
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
                    <div className="flex items-center gap-2 px-4 py-2 overflow-x-auto sm:overflow-visible">
                        <ThemeMenu />

                        <div className="flex items-center gap-2 flex-1 min-w-0">
                            {viewMode !== 'prayerText' && (
                                <>
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
                                </>
                            )}

                            {/* StB Button ist immer sichtbar */}
                            <div className={viewMode === 'prayerText' ? 'flex-1 flex justify-end' : ''}>
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
                </div>

                {/* Main Content Area */}
                <div className="mt-4">
                    {/* Prayer Views */}
                    {viewMode === 'prayer' && (
                        <PrayerMenu
                            title={formatDate(selectedDate)}
                            viewMode={viewMode}
                            season={currentSeason}
                            selectedDate={selectedDate}
                            prefSrc={prefSrc}
                            prefSollemnity={prefSollemnity}
                            setPrefSollemnity={setPrefSollemnity}
                            useCommemoration={useCommemoration}
                            setUseCommemoration={setUseCommemoration}
                            onSourceSelect={(newPrefSrc, newSollemnity) => {
                                setPrefSrc(newPrefSrc);
                                setPrefSollemnity(newSollemnity);
                            }}
                            onSelectHour={(hour, texts) => {
                                setSelectedHour(hour);
                                setPrayerTexts(texts);
                                setViewMode('prayerText');
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
                    )}

                    {viewMode === 'prayerText' && (
                        <PrayerTextDisplay
                            hour={selectedHour}
                            texts={prayerTexts}
                            viewMode={viewMode}
                            season={currentSeason}
                            prefSrc={prefSrc}
                            prefSollemnity={prefSollemnity}
                            setPrefSollemnity={setPrefSollemnity}
                            useCommemoration={useCommemoration}
                            setUseCommemoration={setUseCommemoration}
                            onSourceSelect={(newPrefSrc, newSollemnity) => {
                                setPrefSrc(newPrefSrc);
                                setPrefSollemnity(newSollemnity);
                            }}
                            onBack={() => setViewMode('prayer')}
                            onSelectHour={(hour) => {  // Neue Prop
                                setSelectedHour(hour);
                                setPrayerTexts(prayerTexts);
                            }} />
                    )}

                    {/* Original ScrollableContainer for directory/deceased views */}
                    {(viewMode === 'directory' || viewMode === 'deceased') && (
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