import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Menu } from 'lucide-react';
import React from 'react';
import { liturgicalData } from './liturgicalData';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const formatText = (text) => {
    if (!text) return '';

    text = text
        .replace(/¥°/g, ' \uFEFF')
        .replace(/°/g, '\u00A0')
        .replace(/¥a/g, '\u2002\u2720')
        .replace(/¥-/g, '\u2011')
        .replace(/¥_/g, '\u2013\uFEFF')
        .replace(/¥be/g, '¥p\u2003\u2003\u1D30¥t')
        .replace(/¥bf/g, '¥p\u2003\u2003\u1D30¥t');

    const processFormatting = (str, startTag, endTag, className) => {
        // Füge 's' Flag hinzu für multiline matching
        const regex = new RegExp(`${startTag}([\\s\\S]*?)${endTag}`, 'g');
        return str.replace(regex, (_, content) => `<span class="${className}">${content}</span>`);
    };

    text = processFormatting(text, '¥f', '¥0f', 'font-bold');
    text = processFormatting(text, '¥k', '¥0k', 'italic');
    text = processFormatting(text, '¥v', '¥0v', 'formatVerse');
    text = processFormatting(text, '¥w', '¥0w', 'formatKleiner');
    text = processFormatting(text, '¥qh', '¥0f', 'formatHochfest');
    text = processFormatting(text, '¥qf', '¥0f', 'formatFest');

    return text;
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

const DayEntry = ({
    entry,
    formatDate,
    formatText,
    formatNotes,
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
            className={`p-4 border dark:border-gray-700 rounded transition-colors ${entry.date.getDate() === selectedDate.getDate() &&
                entry.date.getMonth() === selectedDate.getMonth()
                ? 'bg-orange-50 dark:bg-orange-900/30'
                : 'bg-white dark:bg-gray-900'
                }`}
        >
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
                                                    <div key={lineIndex} style={{
                                                        ...commonLineStyle,
                                                        whiteSpace: 'pre-line'
                                                    }} dangerouslySetInnerHTML={{ __html: line }} />
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
                <div style={{ marginBottom: '1.25em' }}>
                    <div style={{ fontSize: '0.93em' }} className="text-gray-900 dark:text-gray-100">
                        {formatNotes(entry.notes).split('\n').map((paragraph, index) => {
                            if (/^\d+\./.test(paragraph)) {
                                const match = paragraph.match(/^(\d+\.\s*)(.*)$/);
                                if (match) {
                                    const [, number, text] = match;
                                    return (
                                        <div key={index} style={{ marginBottom: '0.16em' }}>
                                            <span style={{
                                                float: 'left',
                                                width: '1.5em'
                                            }}>{number}</span>
                                            <div style={{
                                                display: 'block',
                                                marginLeft: '1.5em'
                                            }} dangerouslySetInnerHTML={{ __html: text }} />
                                        </div>
                                    );
                                }
                            }
                            return (
                                <p key={index}
                                    style={{ marginBottom: '0.75em' }}
                                    dangerouslySetInnerHTML={{ __html: paragraph }} />
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Deceased Section */}
            {(entry.deceased || entry.deceased_more) && (
                <div style={{ marginBottom: '1.25em' }}>
                    <div style={{ fontSize: `${deceasedSizeRatio}em` }} className="text-gray-900 dark:text-gray-100">
                        {formatText(shouldShowMore ? entry.deceased_more : (entry.deceased || '')).split('¥p').map((paragraph, index) => {
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
                                    color: 'rgb(37, 99, 235)',
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
                <div style={{ marginBottom: '1.25em' }}>
                    <div style={{ fontSize: '0.93em' }} className="text-gray-900 dark:text-gray-100">
                        {formatNotes(entry.vig_notes).split('\n').map((paragraph, index) => {
                            if (/^\d+\./.test(paragraph)) {
                                const match = paragraph.match(/^(\d+\.\s*)(.*)$/);
                                if (match) {
                                    const [, number, text] = match;
                                    return (
                                        <div key={index} style={{ marginBottom: '0.16em' }}>
                                            <span style={{
                                                float: 'left',
                                                width: '1.5em'
                                            }}>{number}</span>
                                            <div style={{
                                                display: 'block',
                                                marginLeft: '0em'
                                            }} dangerouslySetInnerHTML={{ __html: text }} />
                                        </div>
                                    );
                                }
                            }
                            return (
                                <p key={index} style={{ marginBottom: '0.75em' }}
                                    dangerouslySetInnerHTML={{ __html: paragraph }} />
                            );
                        })}
                    </div>
                </div>
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
                                        }} dangerouslySetInnerHTML={{ __html: content }} />
                                    </div>
                                );
                            }
                            return (
                                <p key={index} style={{ marginBottom: '0.5em' }}
                                    dangerouslySetInnerHTML={{ __html: paragraph }} />
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

const ScrollableContainer = ({ children, containerRef }) => {
    const [containersReady, setContainersReady] = useState(false);

    // Effect für das Setzen der Container-Bereitschaft
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
            className="grid grid-cols-1 gap-4 max-h-[calc(100vh-88px)] overflow-y-auto px-4"
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
        console.log('Initializing theme state');
        const savedTheme = localStorage.getItem('theme');
        console.log('Saved theme from localStorage:', savedTheme);
        return savedTheme || 'light';
    });
    const [expandedDeceased, setExpandedDeceased] = useState({});
    const [deceasedMode, setDeceasedMode] = useState('recent');
    const [baseFontSize, setBaseFontSize] = useState(14); // Standard-Schriftgröße in pt
    const [renderKey, setRenderKey] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sections = ['fontSize', 'theme', 'deceased'];
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
            setRenderKey(prev => prev + 1);

            requestAnimationFrame(() => {
                setTimeout(() => {
                    setIsReady(true);
                }, 100);
            });
        }
    }, [selectedDate]);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;

        const debouncedScroll = (event) => {
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
            scrollTimeoutRef.current = setTimeout(() => handleScroll(event), 150);
        };

        container.addEventListener('scroll', debouncedScroll);
        return () => {
            container.removeEventListener('scroll', debouncedScroll);
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
        console.log('Theme effect triggered. New theme:', theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.body.classList.toggle('dark', theme === 'dark');
        console.log('dark class on html:', document.documentElement.classList.contains('dark'));
        console.log('dark class on body:', document.body.classList.contains('dark'));
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        console.log('Scroll Effect triggered:', {
            selectedDate: selectedDate?.toISOString(),
            dateChangeSource,
            isReady
        });

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


    const formatNotes = (notes) => {
        if (!notes) return '';

        const paragraphs = notes.split('¥p');

        let counter = 0;
        return paragraphs.map(p => {
            const trimmedP = p.trim();
            // Replace ¥l with <br /> before any other formatting
            const processedText = trimmedP.replace(/¥l/g, '<br />');

            if (trimmedP.startsWith('¥s')) {
                // Mehrere Hinweise: Nummerierung hinzufügen und dann formatieren
                counter++;
                return `${counter}. ${formatText(processedText.substring(2))}`;
            } else if (trimmedP.startsWith('¥fHinweis:¥0f ¥s')) {
                // Einzelner Hinweis mit ¥s: ¥s entfernen und dann formatieren
                return formatText(processedText.replace('¥s', ''));
            }
            // Alle anderen Fälle
            return formatText(processedText);
        }).join('\n');
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
            <div className="max-w-4xl mx-auto p-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100" style={datePickerStyle}>
                <div className="flex justify-between mb-2">
                    <button onClick={() => setViewDate(date => {
                        const newDate = new Date(date);
                        newDate.setMonth(date.getMonth() - 1);
                        return newDate;
                    })}
                        className="px-2"
                    >←</button>
                    <div>{months[viewDate.getMonth()]} {viewDate.getFullYear()}</div>
                    <button onClick={() => setViewDate(date => {
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
                                onClick={() => day && handleDateSelect(new Date(viewDate.getFullYear(), viewDate.getMonth(), day))}
                                className={`py-1 ${day ? 'hover:bg-gray-100' : ''} ${isSelected ? 'bg-blue-100' : ''}`}
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

        const toggleMenu = () => {
            setIsMenuOpen(prev => !prev);
            if (!isMenuOpen) {
                setActiveSection(sections[0]);
            }
        };

        const handleSectionChange = (sectionIndex) => {
            setActiveSection(sections[sectionIndex]);
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
            console.log('handleThemeChange called with isRight:', isRight);
            console.log('Current theme before change:', theme);
            setTheme(prev => {
                const newTheme = prev === 'light' ? 'dark' : 'light';
                console.log('Setting new theme to:', newTheme);
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

            if (isMenuOpen) {
                document.addEventListener('mousedown', handleClickOutside);
            }
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }, [isMenuOpen]);

        // Keyboard handler remains the same
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
        }, [isMenuOpen, activeSection]);

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
                    <div className="fixed sm:absolute left-0 sm:left-auto right-0 sm:right-auto top-16 sm:top-auto sm:mt-2 mx-4 sm:mx-0 w-auto sm:w-60 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-50">
                        {/* Font Size Section */}
                        <div
                            className={`px-3 py-2 cursor-pointer ${activeSection === 'fontSize' ? 'bg-gray-50 dark:bg-gray-700' : ''}`}
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
                            className={`px-3 py-2 cursor-pointer ${activeSection === 'theme' ? 'bg-gray-50 dark:bg-gray-700' : ''}`}
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
                                    className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${theme === 'light' ? 'bg-orange-100 dark:bg-orange-900' : ''}`}
                                >
                                    hell
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setTheme('dark');
                                    }}
                                    className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${theme === 'dark' ? 'bg-orange-100 dark:bg-orange-900' : ''}`}
                                >
                                    dunkel
                                </button>
                            </div>
                        </div>

                        <div className="border-t dark:border-gray-700"></div>

                        {/* Deceased Section */}
                        <div
                            className={`px-3 py-2 cursor-pointer ${activeSection === 'deceased' ? 'bg-gray-50 dark:bg-gray-700' : ''}`}
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
                                    className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${deceasedMode === 'recent' ? 'bg-orange-100 dark:bg-orange-900' : ''}`}
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
                                    className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${deceasedMode === 'all' ? 'bg-orange-100 dark:bg-orange-900' : ''}`}
                                >
                                    voll
                                </button>
                            </div>
                            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                                <p>kurz: Verstorbene der letzten 30 Jahre<br />(wie im gedruckten Direktorium)</p>
                                <p>voll: alle Verstorbene seit 1920</p>
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

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <div
                className="mx-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors w-full sm:max-w-[40em]"
                style={baseStyle}
            >
                {/* Navigation Bar */}
                {/* Navigation Bar - Zwei separate Container */}
                {/* Navigation Bar */}
                <div
                    className="sticky top-0 left-0 right-0 w-full sm:max-w-[40em] bg-white dark:bg-gray-900 shadow-sm z-10 transition-colors"
                    style={navStyle}
                    role="navigation"
                >
                    <div className="flex items-center gap-2 px-4 py-4 overflow-x-auto sm:overflow-visible">
                        <ThemeMenu />

                        <button
                            onClick={handlePrevWeek}
                            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                            title="1 Woche zurück"
                        >
                            «
                        </button>
                        <button
                            onClick={handleToday}
                            className="px-4 py-2 bg-orange-100 dark:bg-orange-900 hover:bg-orange-200 dark:hover:bg-orange-800 rounded"
                        >
                            Heute
                        </button>

                        <div className="relative">
                            <button
                                onClick={() => setShowDatePicker(!showDatePicker)}
                                className="flex items-center gap-2 px-4 py-2 border dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                                <span>{formatDate(selectedDate, true)}</span>
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                            </button>
                            {showDatePicker && <DatePicker />}
                        </div>

                        <button
                            onClick={handleNextWeek}
                            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                            title="1 Woche vor"
                        >
                            »
                        </button>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="mt-4">
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
                                    paddingTop: '50vh'
                                }}
                            >
                                {visibleEntries.before.map(entry => (
                                    <DayEntry
                                        key={entry.date.toISOString()}
                                        entry={entry}
                                        formatDate={formatDate}
                                        formatText={formatText}
                                        formatNotes={formatNotes}
                                        selectedDate={selectedDate}
                                        months={months}
                                        hangingIndent={hangingIndent}
                                        deceasedMode={deceasedMode}
                                        deceasedSizeRatio={deceasedSizeRatio}
                                        expandedDeceased={expandedDeceased}
                                        setExpandedDeceased={setExpandedDeceased}
                                        entriesRef={entriesRef}
                                    />
                                ))}
                            </div>
                        )}

                        {visibleEntries.current && visibleEntries.current.length > 0 && (
                            <div
                                data-current-container="true"
                                style={{
                                    position: 'relative'
                                }}
                            >
                                {visibleEntries.current.map(entry => (
                                    <DayEntry
                                        key={entry.date.toISOString()}
                                        entry={entry}
                                        formatDate={formatDate}
                                        formatText={formatText}
                                        formatNotes={formatNotes}
                                        selectedDate={selectedDate}
                                        months={months}
                                        hangingIndent={hangingIndent}
                                        deceasedMode={deceasedMode}
                                        deceasedSizeRatio={deceasedSizeRatio}
                                        expandedDeceased={expandedDeceased}
                                        setExpandedDeceased={setExpandedDeceased}
                                        entriesRef={entriesRef}
                                    />
                                ))}
                            </div>
                        )}
                    </ScrollableContainer>
                </div>
            </div>
        </div>
    );
}