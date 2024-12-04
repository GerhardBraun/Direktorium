import { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';

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

export default function LiturgicalCalendar() {
    const fontFamily = 'Cambria, serif';
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showThemeMenu, setShowThemeMenu] = useState(false);
    const [theme, setTheme] = useState('light');
    const [expandedDeceased, setExpandedDeceased] = useState({});
    const [deceasedMode, setDeceasedMode] = useState('recent');
    const [baseFontSize, setBaseFontSize] = useState(14); // Standard-Schriftgröße in pt
    const hangingIndent = '3.2em'; // Variable für den Einzug
    const deceasedSizeRatio = 0.9;
    const entriesRef = useRef({});
    const containerRef = useRef(null);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    useEffect(() => {
        const selectedEntry = entriesRef.current[formatDate(selectedDate)];
        if (selectedEntry && containerRef.current) {
            const container = containerRef.current;
            const entryRect = selectedEntry.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            const scrollOffset = selectedEntry.offsetTop - (container.clientHeight / 2) + (entryRect.height / 2);
            container.scrollTo({ top: scrollOffset, behavior: 'smooth' });
        }
    }, [selectedDate]);
    const months = ["Januar", "Februar", "März", "April", "Mai", "Juni",
        "Juli", "August", "September", "Oktober", "November", "Dezember"];

    const { liturgicalData } = require('./liturgicalData.ts');

    const getAllEntries = () => {
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
    };

    const allEntries = getAllEntries();

    const formatDate = (date) => {
        return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
    };

    const handleDateSelect = (date) => {
        setSelectedDate(new Date(date));
        setShowDatePicker(false);
    };

    const handlePrevDay = () => {
        setSelectedDate(date => {
            const newDate = new Date(date);
            newDate.setDate(date.getDate() - 1);
            return newDate;
        });
    };

    const handleNextDay = () => {
        setSelectedDate(date => {
            const newDate = new Date(date);
            newDate.setDate(date.getDate() + 1);
            return newDate;
        });
    };

    const handlePrevWeek = () => {
        setSelectedDate(date => {
            const newDate = new Date(date);
            newDate.setDate(date.getDate() - 7);
            return newDate;
        });
    };

    const handleNextWeek = () => {
        setSelectedDate(date => {
            const newDate = new Date(date);
            newDate.setDate(date.getDate() + 7);
            return newDate;
        });
    };

    const handleToday = () => {
        setSelectedDate(new Date());
    };

    const formatNotes = (notes) => {
        if (!notes) return '';

        const paragraphs = notes.split('¥p');

        let counter = 0;
        return paragraphs.map(p => {
            const trimmedP = p.trim();
            if (trimmedP.startsWith('¥s')) {
                // Mehrere Hinweise: Nummerierung hinzufügen und dann formatieren
                counter++;
                return `${counter}. ${formatText(trimmedP.substring(2))}`;
            } else if (trimmedP.startsWith('¥fHinweis:¥0f ¥s')) {
                // Einzelner Hinweis mit ¥s: ¥s entfernen und dann formatieren
                return formatText(trimmedP.replace('¥s', ''));
            }
            // Alle anderen Fälle
            return formatText(trimmedP);
        }).join('\n');
    };

    const globalStyles = `
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

    {/* Vorheriger Code bleibt gleich bis zum ThemeMenu Component */ }

    const ThemeMenu = () => {
        const [tempFontSize, setTempFontSize] = useState(baseFontSize);
        const menuRef = useRef(null);
        const sections = ['fontSize', 'theme', 'deceased'];
        const [activeSection, setActiveSection] = useState('fontSize');
        const [showThemeMenu, setShowThemeMenu] = useState(false);

        const toggleMenu = () => {
            setShowThemeMenu(prev => !prev);
            // Wenn das Menü geöffnet wird, setze activeSection auf den ersten Abschnitt
            if (showThemeMenu) {
                setActiveSection(sections[0]);
            }
        };

        const handleSectionChange = (sectionIndex) => {
            setActiveSection(sections[sectionIndex]);
        };

        const handleOptionChange = (isRight) => {
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
            }
        };

        // Neue separate Funktionen für State-Änderungen
        const handleFontSizeChange = (increase) => {
            const change = increase ? 1 : -1;
            const newSize = tempFontSize + change;
            if (newSize >= 8 && newSize <= 24) {
                setTempFontSize(newSize);
                setBaseFontSize(newSize);
            }
        };

        const handleThemeChange = (isRight) => {
            setTheme(prev => prev === 'light' ? 'dark' : 'light');
        };

        const handleDeceasedModeChange = (isRight) => {
            setDeceasedMode(prev => prev === 'recent' ? 'all' : 'recent');
            setExpandedDeceased({});
        };

        useEffect(() => {
            const handleKeyDown = (event) => {
                if (!showThemeMenu) {
                    if (event.key === 'Alt') {
                        event.preventDefault();
                        toggleMenu();
                    }
                    return;
                }

                if (event.key === 'Alt' || event.key === 'Escape') {
                    event.preventDefault();
                    toggleMenu();
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
                    const isRight = event.key === 'ArrowRight';
                    handleOptionChange(isRight);
                } else if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    switch (activeSection) {
                        case 'fontSize':
                            handleFontSizeChange(true);
                            break;
                        case 'theme':
                            handleThemeChange(true);
                            break;
                        case 'deceased':
                            handleDeceasedModeChange(true);
                            break;
                    }
                }
            };

            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }, [showThemeMenu, activeSection, tempFontSize, sections]);


        useEffect(() => {
            const handleClickOutside = (event) => {
                if (menuRef.current && !menuRef.current.contains(event.target)) {
                    toggleMenu(false);
                }
            };

            if (showThemeMenu) {
                document.addEventListener('mousedown', handleClickOutside);
            }
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }, [showThemeMenu]);



        return (
            <div className="relative" ref={menuRef}>
                <button
                    onClick={toggleMenu}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                    aria-label="Theme menu"
                >
                    <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </button>

                {showThemeMenu && (
                    <div className="absolute left-0 mt-2 w-60 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700">
                        {/* Schriftgröße */}
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
                                        e.stopPropagation();
                                        handleOptionChange(false);
                                    }}
                                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
                                    tabIndex={-1}
                                >
                                    ←
                                </button>
                                <span className="w-8 text-center">{tempFontSize}</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">pt</span>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleOptionChange(true);
                                    }}
                                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
                                    tabIndex={-1}
                                >
                                    →
                                </button>
                            </div>
                        </div>

                        <div className="border-t dark:border-gray-700"></div>

                        {/* Design */}
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
                                        e.stopPropagation();
                                        handleThemeChange(false);
                                    }}
                                    className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${theme === 'light' ? 'bg-blue-100 dark:bg-blue-900' : ''}`}
                                    tabIndex={-1}
                                >
                                    hell
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleThemeChange(true);
                                    }}
                                    className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${theme === 'dark' ? 'bg-blue-100 dark:bg-blue-900' : ''}`}
                                    tabIndex={-1}
                                >
                                    dunkel
                                </button>
                            </div>
                        </div>

                        <div className="border-t dark:border-gray-700"></div>

                        {/* Verstorbene */}
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
                                        e.stopPropagation();
                                        handleDeceasedModeChange(false);
                                    }}
                                    className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${deceasedMode === 'recent' ? 'bg-blue-100 dark:bg-blue-900' : ''}`}
                                    tabIndex={-1}
                                >
                                    kurz
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeceasedModeChange(true);
                                    }}
                                    className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${deceasedMode === 'all' ? 'bg-blue-100 dark:bg-blue-900' : ''}`}
                                    tabIndex={-1}
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
        fontFamily: fontFamily,
        fontSize: `${baseFontSize}pt`,
        lineHeight: '1.2'
    };

    const navStyle = {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        fontSize: '11pt' // Kleinere Schriftgröße für die Navigation
    };

    const datePickerStyle = {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        fontSize: '10pt'  // Kleinere Schriftgröße für den DatePicker
    };

    useEffect(() => {
        const styleElement = document.createElement('style');
        styleElement.textContent = globalStyles;
        document.head.appendChild(styleElement);
        return () => {
            document.head.removeChild(styleElement);
        };
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100" style={baseStyle}>
            <div className="flex justify-between items-start mb-4 sticky top-0 bg-white dark:bg-gray-900 p-4 shadow-sm z-10" style={navStyle}>
                <div className="flex items-start gap-2">
                    <ThemeMenu />

                    {/* Previous navigation buttons */}
                    <button
                        onClick={handlePrevWeek}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                        title="1 Woche zurück"
                    >
                        ←←
                    </button>
                    <button
                        onClick={handlePrevDay}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                        title="1 Tag zurück"
                    >
                        ←
                    </button>
                    <button
                        onClick={handleToday}
                        className="px-4 py-2 bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 rounded"
                    >
                        Heute
                    </button>

                    <div className="relative">
                        <button
                            onClick={() => setShowDatePicker(!showDatePicker)}
                            className="flex items-center gap-2 px-4 py-2 border dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                            <span>{formatDate(selectedDate)}</span>
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

                    {/* Next navigation buttons */}
                    <button
                        onClick={handleNextDay}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                        title="1 Tag vor"
                    >
                        →
                    </button>
                    <button
                        onClick={handleNextWeek}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                        title="1 Woche vor"
                    >
                        →→
                    </button>
                </div>
                <div></div>
            </div>

            <div ref={containerRef} className="grid grid-cols-1 gap-4 max-h-[calc(100vh-120px)] overflow-y-auto">
                {allEntries.map((entry) => {
                    const dateKey = entry.date.toISOString();
                    const hasMoreDeceased = entry.deceased && entry.deceased_more && entry.deceased !== entry.deceased_more;
                    const isExpanded = expandedDeceased[dateKey];
                    const shouldShowMore = deceasedMode === 'all' || isExpanded;

                    return (
                        <div key={dateKey} ref={el => entriesRef.current[formatDate(entry.date)] = el}
                            className={`p-4 border dark:border-gray-700 rounded ${entry.date.getDate() === selectedDate.getDate() &&
                                entry.date.getMonth() === selectedDate.getMonth()
                                ? 'ring-2 ring-blue-500 dark:ring-blue-400'
                                : ''
                                }`}
                            style={{
                                ...baseStyle,
                                marginBottom: '1em'
                            }}>
                            <div style={{
                                fontSize: '1.15em',
                                fontWeight: 'bold',
                                marginBottom: '0.75em'
                            }}>
                                {formatDate(entry.date)}
                            </div>

                            {entry.liturgy && (
                                <div style={{ marginBottom: '1.25em' }}>
                                    <h3 style={{
                                        fontSize: '1.1em',
                                        fontWeight: '600',
                                        marginBottom: '0em'
                                    }}>Liturgie</h3>
                                    <div style={{ fontSize: '1em' }}>
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
                                                            // Gemeinsamer Style für alle Zeilen
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
                                                                        gap: '0.25em'
                                                                    }}>
                                                                        <span style={{ textAlign: 'left' }}
                                                                            dangerouslySetInnerHTML={{ __html: occasion }} />
                                                                        <span style={{ textAlign: 'left' }}
                                                                            dangerouslySetInnerHTML={{ __html: reference }} />
                                                                        <span style={{ textAlign: 'right' }}
                                                                            dangerouslySetInnerHTML={{ __html: pageNum + rest.join('') }} />
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
                                                                        gap: '0.25em'
                                                                    }}>
                                                                        <span style={{ textAlign: 'left' }}
                                                                            dangerouslySetInnerHTML={{ __html: occasion }} />
                                                                        <span style={{ textAlign: 'left' }}
                                                                            dangerouslySetInnerHTML={{ __html: reference }} />
                                                                        <span style={{ textAlign: 'right' }}
                                                                            dangerouslySetInnerHTML={{ __html: pageNum }} />
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

                            {entry.notes && (
                                <div style={{ marginBottom: '1.25em' }}>
                                    <h3 style={{
                                        fontSize: '1.1em',
                                        fontWeight: '600',
                                        marginBottom: '0.5em',
                                        color: 'rgb(37, 99, 235)'
                                    }}>Hinweise</h3>
                                    <div style={{ fontSize: '0.93em' }}>
                                        {formatNotes(entry.notes).split('\n').map((paragraph, index) => {
                                            if (/^\d+\./.test(paragraph)) {
                                                const match = paragraph.match(/^(\d+\.\s*)(.*)$/);
                                                if (match) {
                                                    const [_, number, text] = match;
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

                            {entry.deceased && (
                                <div style={{ marginBottom: '1.25em' }}>
                                    <h3 style={{
                                        fontSize: '1.1em',
                                        fontWeight: '600',
                                        marginBottom: '0.5em',
                                        color: 'rgb(107, 114, 128)'
                                    }}>Verstorbene</h3>
                                    <div style={{ fontSize: `${deceasedSizeRatio}em` }}>
                                        {formatText(shouldShowMore ? entry.deceased_more : entry.deceased).split('¥p').map((paragraph, index) => {
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
                                        {hasMoreDeceased && deceasedMode !== 'all' && (
                                            <button
                                                onClick={() => setExpandedDeceased(prev => ({
                                                    ...prev,
                                                    [dateKey]: !prev[dateKey]
                                                }))}
                                                style={{
                                                    display: 'block',
                                                    marginTop: '0.5em',
                                                    color: 'rgb(37, 99, 235)',
                                                    fontSize: '0.9em'
                                                }}
                                            >
                                                {isExpanded ? "weniger ..." : "mehr ..."}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            )}

                            {entry.prayerTexts && (
                                <div style={{ marginBottom: '1.25em' }}>
                                    <h3 style={{
                                        fontSize: '1.1em',
                                        fontWeight: '600',
                                        marginBottom: '0.5em',
                                        color: 'rgb(147, 51, 234)'
                                    }}>Gebete</h3>
                                    <div style={{
                                        fontSize: '1em',
                                        whiteSpace: 'pre-wrap'
                                    }} dangerouslySetInnerHTML={{ __html: formatText(entry.prayerTexts) }} />
                                </div>
                            )}

                            {entry.vig_notes && (
                                <div style={{ marginBottom: '1.25em' }}>
                                    <h3 style={{
                                        fontSize: '1.1em',
                                        fontWeight: '600',
                                        marginBottom: '0.5em',
                                        color: 'rgb(37, 99, 235)'
                                    }}>Hinweise zur Vigil</h3>
                                    <div style={{ fontSize: '0.93em' }}>
                                        {formatNotes(entry.vig_notes).split('\n').map((paragraph, index) => {
                                            if (/^\d+\./.test(paragraph)) {
                                                const match = paragraph.match(/^(\d+\.\s*)(.*)$/);
                                                if (match) {
                                                    const [_, number, text] = match;
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

                            {/* Neue Sektion: Zur Vigilfeier */}
                            {entry.vig_liturgy && (
                                <div style={{ marginBottom: '1.25em' }}>
                                    <h3 style={{
                                        fontSize: '1.1em',
                                        fontWeight: '600',
                                        marginBottom: '0.5em'
                                    }}>Zur Vigilfeier</h3>
                                    <div style={{ fontSize: '1em' }}>
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
                })}
            </div>
        </div>
    );
}