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

export default function LiturgicalCalendar() {
    const fontFamily = 'Cambria, serif';
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [theme, setTheme] = useState('light');
    const [expandedDeceased, setExpandedDeceased] = useState({});
    const [deceasedMode, setDeceasedMode] = useState('recent');
    const [baseFontSize, setBaseFontSize] = useState(14); // Standard-Schriftgröße in pt
    const hangingIndent = '3.2em'; // Variable für den Einzug
    const deceasedSizeRatio = 0.9;
    const entriesRef = useRef({});
    const containerRef = useRef(null);
    const [visibleRange, setVisibleRange] = useState({ startDate: null, endDate: null });
    const DAYS_BUFFER = 7; // Anzahl der Tage vor/nach dem ausgewählten Datum
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef(null);
    const formatDate = useCallback((date) => {
        return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
    }, []); // months ist konstant, daher keine Dependency nötig
    useEffect(() => {
        // Lade das gespeicherte Theme beim Start
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        document.body.classList.toggle('dark', savedTheme === 'dark');
    }, []);

    useEffect(() => {
        // Toggle 'dark' class on both documentElement (html) and body
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.body.classList.toggle('dark', theme === 'dark');

        // Optional: Speichern der Theme-Präferenz im localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const selectedEntry = entriesRef.current[formatDate(selectedDate)];
        if (selectedEntry && containerRef.current && !isScrolling) {
            setIsScrolling(true);
            const container = containerRef.current;

            const containerHeight = container.clientHeight;
            const elementHeight = selectedEntry.offsetHeight;
            const containerMiddle = containerHeight / 2;
            const scrollOffset = selectedEntry.offsetTop - containerMiddle + (elementHeight / 2);

            console.log('Scroll calculation:', {
                containerHeight,
                elementHeight,
                containerMiddle,
                elementOffsetTop: selectedEntry.offsetTop,
                calculatedOffset: scrollOffset
            });

            // Scroll-Event-Listener für das Ende der Animation
            const scrollEndListener = () => {
                // Warte einen weiteren Frame um sicherzustellen, dass alles aktualisiert ist
                requestAnimationFrame(() => {
                    const finalRect = selectedEntry.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();
                    const actualMiddle = containerRect.top + (containerRect.height / 2);
                    const elementMiddle = finalRect.top + (finalRect.height / 2);

                    console.log('Final positions:', {
                        containerMiddle: actualMiddle,
                        elementMiddle,
                        difference: Math.abs(actualMiddle - elementMiddle)
                    });

                    // Wenn die Differenz zu groß ist, korrigieren
                    if (Math.abs(actualMiddle - elementMiddle) > 10) {
                        // Sanfte Korrektur
                        container.scrollTo({
                            top: container.scrollTop + (elementMiddle - actualMiddle),
                            behavior: 'smooth'
                        });
                    }

                    // Entferne den Listener und setze isScrolling zurück
                    container.removeEventListener('scrollend', scrollEndListener);
                    setTimeout(() => setIsScrolling(false), 100);
                });
            };

            container.addEventListener('scrollend', scrollEndListener);

            container.scrollTo({
                top: scrollOffset,
                behavior: 'smooth'
            });

            // Cleanup
            return () => {
                container.removeEventListener('scrollend', scrollEndListener);
            };
        }
    }, [selectedDate, formatDate, isScrolling]);

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

    const [pendingScroll, setPendingScroll] = useState(null);

    const handleScroll = useCallback((event) => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const entries = Object.entries(entriesRef.current);

        const containerRect = container.getBoundingClientRect();
        const middleY = containerRect.top + (containerRect.height / 2);

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
            console.log('Found closest entry:', closestEntry, 'isScrolling:', isScrolling);

            const parts = closestEntry.split(' ');
            const day = parseInt(parts[0]);
            const month = months.indexOf(parts[1]);
            const year = parseInt(parts[2]);

            const newDate = new Date(year, month, day);

            if (formatDate(selectedDate) !== formatDate(newDate)) {
                // Statt sofort zu scrollen, speichern wir das Ziel
                setPendingScroll(newDate);
                // Setzen Sie das neue Datum ohne zu scrollen
                setSelectedDate(newDate);
            }
        }
    }, [selectedDate, isScrolling, formatDate]);

    useEffect(() => {
        if (pendingScroll) {
            const timeoutId = setTimeout(() => {
                const selectedEntry = entriesRef.current[formatDate(pendingScroll)];
                if (selectedEntry && containerRef.current) {
                    const container = containerRef.current;
                    const containerMiddle = container.clientHeight / 2;
                    const elementHeight = selectedEntry.offsetHeight;
                    const scrollOffset = selectedEntry.offsetTop - containerMiddle + (elementHeight / 2);

                    container.scrollTo({
                        top: scrollOffset,
                        behavior: 'smooth'
                    });
                }
                setPendingScroll(null);
            }, 150); // Warte kurz, bis das Scrollen aufhört

            return () => clearTimeout(timeoutId);
        }
    }, [pendingScroll, formatDate]);

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

    const visibleEntries = useMemo(() => {
        if (!visibleRange.startDate || !visibleRange.endDate) return [];

        return allEntries.filter(entry =>
            isDateInRange(entry.date, visibleRange.startDate, visibleRange.endDate)
        );
    }, [allEntries, visibleRange]);

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
        const sections = ['fontSize', 'theme', 'deceased'];
        const [activeSection, setActiveSection] = useState('fontSize');
        const [isMenuOpen, setIsMenuOpen] = useState(false); // Umbenennung zu isMenuOpen

        const toggleMenu = () => {
            setIsMenuOpen(prev => !prev);
            if (!isMenuOpen) {
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
            setTheme(prev => prev === 'light' ? 'dark' : 'light');
        };

        const handleDeceasedModeChange = (isRight) => {
            setDeceasedMode(prev => prev === 'recent' ? 'all' : 'recent');
            setExpandedDeceased({});
        };

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
                }
            };

            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }, [isMenuOpen, activeSection, tempFontSize, sections, toggleMenu, handleOptionChange, handleSectionChange]);

        useEffect(() => {
            const handleClickOutside = (event) => {
                if (menuRef.current && !menuRef.current.contains(event.target)) {
                    setIsMenuOpen(false);
                }
            };

            if (isMenuOpen) {
                document.addEventListener('mousedown', handleClickOutside);
            }
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }, [isMenuOpen]);

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
                                    className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${theme === 'light' ? 'bg-orange-100 dark:bg-orange-900' : ''}`}
                                    tabIndex={-1}
                                >
                                    hell
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleThemeChange(true);
                                    }}
                                    className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${theme === 'dark' ? 'bg-orange-100 dark:bg-orange-900' : ''}`}
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
                                    className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${deceasedMode === 'recent' ? 'bg-orange-100 dark:bg-orange-900' : ''
                                        }`}
                                    tabIndex={-1}
                                >
                                    kurz
                                </button>
                                <button
                                    className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${deceasedMode === 'all' ? 'bg-orange-100 dark:bg-orange-900' : ''
                                        }`}
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
        lineHeight: '1.2',
        maxWidth: '40em',  // Neue maximale Breite
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

    return (
        <div className="mx-auto p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors" style={baseStyle}>
            <div className="flex justify-between items-start mb-4 sticky top-0 bg-white dark:bg-gray-900 p-4 shadow-sm z-10 transition-colors" style={navStyle}>
                <div className="flex items-start gap-2">
                    <ThemeMenu />

                    <button
                        onClick={handlePrevWeek}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                        title="1 Woche zurück"
                    >
                        «
                    </button>
                    <button
                        onClick={handlePrevDay}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                        title="1 Tag zurück"
                    >
                        ‹
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
                        ›
                    </button>
                    <button
                        onClick={handleNextWeek}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                        title="1 Woche vor"
                    >
                        »
                    </button>
                </div>
            </div>

            <div ref={containerRef} className="grid grid-cols-1 gap-4 max-h-[calc(100vh-120px)] overflow-y-auto">
                {visibleEntries.map((entry) => {
                    const dateKey = entry.date.toISOString();
                    const hasMoreDeceased = entry.deceased && entry.deceased_more && entry.deceased !== entry.deceased_more;
                    const isExpanded = expandedDeceased[dateKey];
                    const shouldShowMore = deceasedMode === 'all' || isExpanded;
                    // Format the date for display
                    const day = entry.date.getDate();
                    const month = months[entry.date.getMonth()];
                    const year = entry.date.getFullYear();
                    const formattedDate = `${day}. ${month} ${year}`;

                    return (
                        <div key={dateKey}
                            ref={el => entriesRef.current[formatDate(entry.date)] = el}
                            className={`p-4 border dark:border-gray-700 rounded transition-colors ${entry.date.getDate() === selectedDate.getDate() &&
                                entry.date.getMonth() === selectedDate.getMonth()
                                ? 'bg-orange-50 dark:bg-orange-900/30'
                                : 'bg-white dark:bg-gray-900'
                                }`}
                            style={{
                                ...baseStyle,
                                marginBottom: '1em'
                            }}>

                            {/* Add the date header */}
                            <div className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                                {formattedDate}
                            </div>

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
                                                                                            maxWidth: '100%',  // Wichtig für mobile Geräte
                                                                                            display: 'block'   // Wichtig für die Textkürzung
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
                                                                                            maxWidth: '100%',  // Wichtig für mobile Geräte
                                                                                            display: 'block'   // Wichtig für die Textkürzung
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
                            {entry.deceased && (
                                <div style={{ marginBottom: '1.25em' }}>
                                    <div style={{ fontSize: `${deceasedSizeRatio}em` }} className="text-gray-900 dark:text-gray-100">
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
                                                mehr ...
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
                                        marginBottom: '0em'
                                    }} className="text-purple-600 dark:text-purple-400">
                                        Gebete
                                    </h3>
                                    <div style={{
                                        fontSize: '1em',
                                        whiteSpace: 'pre-wrap'
                                    }} className="text-gray-900 dark:text-gray-100" dangerouslySetInnerHTML={{ __html: formatText(entry.prayerTexts) }} />
                                </div>
                            )}

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

                            {/* Neue Sektion: Zur Vigilfeier */}
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
                })}
            </div>
        </div>
    );
}