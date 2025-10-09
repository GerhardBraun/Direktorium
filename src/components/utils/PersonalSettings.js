import React, { useState, useEffect } from 'react';
import { calendarData } from '../data/Calendar.ts';

export function setLocalStorage(key, value) {
    try {
        localStorage.setItem(key, value);
        return true;
    } catch (error) {
        console.error(`localStorage.setItem('${key}', '${value}') fehlgeschlagen:`, error);
        return false;
    }
}

const PersonalSettings = () => {
    const [personalData, setPersonalData] = useState(null);
    const [startView, setStartView] = useState(() =>
        localStorage.getItem('startViewMode') || 'directory'
    );
    const [prefLanguage, setPrefLanguage] = useState(() =>
        localStorage.getItem('prefLanguage') || ''
    );
    const [diocese, setDiocese] = useState(() =>
        localStorage.getItem('diocese') || 'Fulda'
    );

    const [vacancy, setVacancy] = useState(() =>
        localStorage.getItem('vacancy') === 'true'
    );
    const [showDioceseDropdown, setShowDioceseDropdown] = useState(false);
    const [languages, setLanguages] = useState(() => {
        const stored = localStorage.getItem('languages');
        return stored ? JSON.parse(stored) : ['', '_lat'];
    });
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
    const [popeName, setPopeName] = useState(() =>
        localStorage.getItem('popeName') || 'Leo'
    );
    const [popeNameLat, setPopeNameLat] = useState(() =>
        localStorage.getItem('popeNameLat') || 'Leóni'
    );
    const [bishopName, setBishopName] = useState(() =>
        localStorage.getItem('bishopName') || 'Michael'
    );
    const [bishopNameLat, setBishopNameLat] = useState(() =>
        localStorage.getItem('bishopNameLat') || 'Michaéli'
    );

    // Lokale States für die Eingabefelder (um Umwandlung zu verzögern)
    const [popeNameLatInput, setPopeNameLatInput] = useState(() =>
        localStorage.getItem('popeNameLat') || ''
    );
    const [bishopNameLatInput, setBishopNameLatInput] = useState(() =>
        localStorage.getItem('bishopNameLat') || ''
    );
    const [popeNameAccInput, setPopeNameAccInput] = useState('');
    const [bishopNameAccInput, setBishopNameAccInput] = useState('');

    const [sequenceInv, setSequenceInv] = useState(() => {
        const stored = localStorage.getItem('sequenceInv');
        return stored ? JSON.parse(stored) : [95, 100, 24, 67, 67, 100, 24];
    });

    // Hilfsfunktion für Kasuswechsel → Dativ
    const convertToDative = (name) => {
        if (!name) return name;
        return name
            .replace(/(em|is|e)(?![a-záéíóúýæœő])/g, 'i')
            .replace(/(um|us)(?![a-záéíóúýæœő])/g, 'o');
    };

    // Hilfsfunktion für Kasuswechsel Dativ → Akkusativ
    const convertToAccusative = (name) => {
        if (!name) return name;
        return name
            .replace(/i(?![a-záéíóúýæœő])/g, 'em')
            .replace(/o(?![a-záéíóúýæœő])/g, 'um');
    };

    // Handler für Dativ-Eingabe (beim Verlassen des Feldes)
    const handleDativeBlur = (value, setter, inputSetter) => {
        const dativeForm = convertToDative(value);
        setter(dativeForm);
        inputSetter(dativeForm);
    };

    // Handler für Akkusativ-Eingabe (beim Verlassen des Feldes)
    const handleAccusativeBlur = (value, setter, inputSetter) => {
        const dativeForm = convertToDative(value);
        setter(dativeForm);
        inputSetter(convertToAccusative(dativeForm));
    };

    // Funktion zum Verarbeiten der Diözesendaten
    const getDioceseOptions = () => {
        if (!calendarData) return [];

        // Verfügbare Diözesen (ohne Sperrvermerk)
        const availableOptions = Object.entries(calendarData)
            .filter(([key, data]) => {
                const hasBlockEntry = data && data.hasOwnProperty('99');
                return !hasBlockEntry;
            })
            .map(([key, data]) => ({
                key,
                label: key === 'AAA' ? 'keine Eigenfeiern' : key,
                disabled: false
            }))
            .sort((a, b) => {
                if (a.key === 'AAA') return -1;
                if (b.key === 'AAA') return 1;
                return a.label.localeCompare(b.label);
            });

        // Gesperrte Diözesen (mit Sperrvermerk)
        const blockedOptions = Object.entries(calendarData)
            .filter(([key, data]) => {
                const hasBlockEntry = data && data.hasOwnProperty('99');
                return hasBlockEntry;
            })
            .map(([key, data]) => ({
                key,
                label: key,
                disabled: true
            }))
            .sort((a, b) => a.label.localeCompare(b.label));

        // Erst verfügbare, dann gesperrte Diözesen
        return [...availableOptions, ...blockedOptions];
    };
    const dioceseOptions = getDioceseOptions();

    useEffect(() => {
        const loadedData = localStorage.getItem('personalData');
        if (loadedData) {
            setPersonalData(JSON.parse(loadedData));
        }
    }, []);

    useEffect(() => {
        setLocalStorage('startViewMode', startView);
    }, [startView]);

    useEffect(() => {
        setLocalStorage('prefLanguage', prefLanguage);
    }, [prefLanguage]);

    useEffect(() => {
        setLocalStorage('languages', JSON.stringify(languages));
    }, [languages]);

    // Click-outside Handler für Language Dropdown (nach dem Diocese Click-outside Handler):
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showLanguageDropdown && !event.target.closest('.language-dropdown')) {
                setShowLanguageDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showLanguageDropdown]);

    useEffect(() => {
        setLocalStorage('diocese', diocese);
    }, [diocese]);

    useEffect(() => {
        setLocalStorage('vacancy', vacancy.toString());
    }, [vacancy]);

    useEffect(() => {
        setLocalStorage('popeName', popeName);
    }, [popeName]);

    useEffect(() => {
        setLocalStorage('popeNameLat', popeNameLat);
    }, [popeNameLat]);

    useEffect(() => {
        setLocalStorage('bishopName', bishopName);
    }, [bishopName]);

    useEffect(() => {
        setLocalStorage('bishopNameLat', bishopNameLat);
    }, [bishopNameLat]);

    // Synchronisiere die Eingabefelder mit den gespeicherten Werten
    useEffect(() => {
        setPopeNameLatInput(popeNameLat);
        setPopeNameAccInput(convertToAccusative(popeNameLat));
    }, [popeNameLat]);

    useEffect(() => {
        setBishopNameLatInput(bishopNameLat);
        setBishopNameAccInput(convertToAccusative(bishopNameLat));
    }, [bishopNameLat]);

    useEffect(() => {
        setLocalStorage('sequenceInv', JSON.stringify(sequenceInv));
    }, [sequenceInv]);

    // Handler für Diözesen-Auswahl
    const handleDioceseSelect = (selectedKey) => {
        setDiocese(selectedKey);
        setShowDioceseDropdown(false);
    };

    // Click-outside Handler für Dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showDioceseDropdown && !event.target.closest('.diocese-dropdown')) {
                setShowDioceseDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showDioceseDropdown]);

    const handleSequenceChange = (event, index) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value)) {
            const newSequence = [...sequenceInv];
            newSequence[index] = value;
            setSequenceInv(newSequence);
        }
    };

    const handleImport = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            const text = await file.text();
            let data;

            try {
                data = JSON.parse(text);
            } catch {
                const dataMatch = text.match(/export const personalData = ({[\s\S]*});/);
                if (!dataMatch) {
                    throw new Error('Keine gültigen Daten gefunden');
                }
                data = JSON.parse(dataMatch[1]);
            }

            const isValid = validateDataStructure(data);

            if (isValid) {
                setLocalStorage('personalData', JSON.stringify(data));
                setPersonalData(data);

                if (data.settings) {
                    if (data.settings.startViewMode) {
                        setStartView(data.settings.startViewMode);
                        setLocalStorage('startViewMode', data.settings.startViewMode);
                    }
                    if (data.settings.prefLanguage) {
                        setPrefLanguage(data.settings.prefLanguage);
                        setLocalStorage('prefLanguage', data.settings.prefLanguage);
                    }
                    if (data.settings.diocese) {
                        setDiocese(data.settings.diocese);
                        setLocalStorage('diocese', data.settings.diocese);
                    }
                    if (data.settings.vacancy !== undefined) {
                        setVacancy(data.settings.vacancy);
                        setLocalStorage('vacancy', data.settings.vacancy.toString());
                    }
                    if (data.settings.popeName) {
                        setPopeName(data.settings.popeName);
                        setLocalStorage('popeName', data.settings.popeName);
                    }
                    if (data.settings.popeNameLat) {
                        setPopeNameLat(data.settings.popeNameLat);
                        setLocalStorage('popeNameLat', data.settings.popeNameLat);
                    }
                    if (data.settings.bishopName) {
                        setBishopName(data.settings.bishopName);
                        setLocalStorage('bishopName', data.settings.bishopName);
                    }
                    if (data.settings.bishopNameLat) {
                        setBishopNameLat(data.settings.bishopNameLat);
                        setLocalStorage('bishopNameLat', data.settings.bishopNameLat);
                    }
                    if (data.settings.sequenceInv) {
                        setSequenceInv(data.settings.sequenceInv);
                        setLocalStorage('sequenceInv', JSON.stringify(data.settings.sequenceInv));
                    }
                    if (data.settings.languages) {
                        setLanguages(data.settings.languages);
                        setLocalStorage('languages', JSON.stringify(data.settings.languages));
                    }
                }
                alert('Persönliche Einstellungen erfolgreich importiert');
            } else {
                alert('Ungültiges Dateiformat');
            }
        } catch (error) {
            console.error('Import fehlgeschlagen:', error);
            alert('Import fehlgeschlagen: ' + error.message);
        }
    };

    const handleExport = () => {
        const data = localStorage.getItem('personalData');
        let exportData = data ? JSON.parse(data) : {};

        exportData.settings = {
            startViewMode: startView,
            prefLanguage,
            languages,
            diocese,
            vacancy,
            popeName,
            popeNameLat,
            bishopName,
            bishopNameLat,
            sequenceInv
        };

        const formattedData = JSON.stringify(exportData, null, 2);
        const blob = new Blob([formattedData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'brevier_personal_settings.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const validateDataStructure = (data) => {
        if (typeof data !== 'object' || data === null) return false;
        const expectKeys = ['j', 'a', 'w', 'o', 'p'];
        return Object.keys(data).some(key => expectKeys.includes(key));
    };

    const weekdays = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    const availablePsalms = [95, 100, 67, 24];

    const handlePsalmSelect = (dayIndex, psalm) => {
        const newSequence = [...sequenceInv];
        newSequence[dayIndex] = psalm;
        setSequenceInv(newSequence);
    };

    return (
        <div className="space-y-2 pt-2">
            {/* Start View Section */}
            <div className="px-3 py-0">
                <div className="grid gap-2 items-center" style={{ gridTemplateColumns: '6rem 1fr 3rem 1fr' }}>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        Startansicht
                    </div>
                    <button
                        onClick={() => setStartView('directory')}
                        className={`px-3 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded
            ${startView === 'directory' ? 'bg-orange-100 dark:bg-yellow-400/60' : 'bg-gray-100 dark:bg-gray-800'}`}
                    >
                        Direk&shy;torium
                    </button>
                    <button
                        onClick={() => setStartView('auto')}
                        className={`px-0 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded
            ${startView === 'auto' ? 'bg-orange-100 dark:bg-yellow-400/60' : 'bg-gray-100 dark:bg-gray-800'}`}
                    >
                        Auto
                    </button>
                    <button
                        onClick={() => setStartView('prayer')}
                        className={`px-3 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded
            ${startView === 'prayer' ? 'bg-orange-100 dark:bg-yellow-400/60' : 'bg-gray-100 dark:bg-gray-800'}`}
                    >
                        Stunden&shy;gebet
                    </button>
                </div>
                <div
                    className="grid gap-2 items-top text-xs mt-1 text-gray-500 dark:text-gray-400"
                    style={{
                        gridTemplateColumns: '2rem 1fr',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
                    }}>
                    <span className="font-semibold text-gray-700 dark:text-gray-300" >
                        Auto:&nbsp;
                    </span>
                    <p>
                        Beim ersten Aufruf des Tages wird zunächst das Direktorium angezeigt, bei&nbsp;den weiteren Aufrufen direkt das&nbsp;Stundengebet.
                    </p>
                </div>
            </div>

            {/* Language Selection Section */}
            <div className="px-3">
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    Schnellschalter für Sprachauswahl
                </div>
                <div className="grid gap-2 items-center" style={{ gridTemplateColumns: '6rem 1fr' }}>
                    <div></div> {/* Leerer Platzhalter für den Einzug */}
                    <div className="relative language-dropdown">
                        <button
                            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                            className="w-full px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800
                    border dark:border-gray-600 rounded text-left
                    text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >                        {(() => {
                            const langKey = `${languages[0]}-${languages[1]}`;
                            const options = {
                                '-_lat': 'Stb/lat.',
                                '_ben-_lat': 'Ben/lat.',
                                '_neu-_lat': 'neu/lat.',
                                '-_ben': 'Stb/Ben',
                                '-_neu': 'Stb/neu',
                                '_ben-_neu': 'Ben/neu'
                            };
                            return options[langKey] || 'Stb/lat.';
                        })()}
                            <span className="float-right">▼</span>
                        </button>

                        {showLanguageDropdown && (
                            <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800
                    border dark:border-gray-600 rounded shadow-lg z-50">
                                <div className="grid" style={{ gridTemplateColumns: '90px 90px' }}>
                                    {/* Linke Spalte: Kombinationen mit lat. */}
                                    <div className="border-r dark:border-gray-600"                                    >
                                        {[
                                            [['', '_lat'], 'Stb/lat.'],
                                            [['_ben', '_lat'], 'Ben/lat.'],
                                            [['_neu', '_lat'], 'neu/lat.']
                                        ].map(([langPair, label]) => {
                                            const isSelected = (languages[0] === langPair[0] && languages[1] === langPair[1]) ||
                                                (languages[0] === langPair[1] && languages[1] === langPair[0]);
                                            return (
                                                <button
                                                    key={label}
                                                    onClick={() => {
                                                        setLanguages(langPair);
                                                        setShowLanguageDropdown(false);
                                                    }}
                                                    className={`w-full px-3 pt-1 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700
                                text-gray-900 dark:text-gray-100
                                ${isSelected ? 'bg-orange-100 dark:bg-yellow-400/60' : ''}`}
                                                >
                                                    {label}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    {/* Rechte Spalte: Deutsche Kombinationen */}
                                    <div>
                                        {[
                                            [['', '_ben'], 'Stb/Ben'],
                                            [['', '_neu'], 'Stb/neu'],
                                            [['_ben', '_neu'], 'Ben/neu']
                                        ].map(([langPair, label]) => {
                                            const isSelected = (languages[0] === langPair[0] && languages[1] === langPair[1]) ||
                                                (languages[0] === langPair[1] && languages[1] === langPair[0]);
                                            return (
                                                <button
                                                    key={label}
                                                    onClick={() => {
                                                        setLanguages(langPair);
                                                        setShowLanguageDropdown(false);
                                                    }}
                                                    className={`w-full px-3 pt-1 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700
                                text-gray-900 dark:text-gray-100
                                ${isSelected ? 'bg-orange-100 dark:bg-yellow-400/60' : ''}`}
                                                >
                                                    {label}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}                </div>
                </div>
            </div>

            {/* Diocese Section - NEU */}
            <div className="px-3">
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    Eigenfeiern der Diözese
                </div>
                <div className="grid gap-2 items-center" style={{ gridTemplateColumns: '6rem 1fr' }}>
                    <div></div> {/* Leerer Platzhalter für den Einzug */}
                    <div className="relative diocese-dropdown">
                        <button
                            onClick={() => setShowDioceseDropdown(!showDioceseDropdown)}
                            className="w-full px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800
                        border dark:border-gray-600 rounded text-left
                        text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            {dioceseOptions.find(option => option.key === diocese)?.label || diocese}
                            <span className="float-right">▼</span>
                        </button>

                        {showDioceseDropdown && (
                            <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800
                            border dark:border-gray-600 rounded shadow-lg z-50 max-h-48 overflow-y-auto">
                                {dioceseOptions.map(option => (
                                    <button
                                        key={option.key}
                                        onClick={() => !option.disabled && handleDioceseSelect(option.key)}
                                        disabled={option.disabled}
                                        className={`w-full px-3 pt-1 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700
                                        ${option.disabled
                                                ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                                                : 'text-gray-900 dark:text-gray-100'
                                            }
                                        ${diocese === option.key ? 'bg-orange-100 dark:bg-yellow-400/60' : ''}`}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Names Section */}
            <div className="px-3">
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    Namen des Papstes und des Bischofs für&nbsp;die&nbsp;Fürbitten
                </div>

                {/* Diözesanadministrator Toggle - NEU */}
                <div className="grid gap-1 items-center mb-2"
                    style={{ gridTemplateColumns: '6rem minmax(0, 1fr) minmax(0, 1fr)' }}>
                    <div></div>
                    <div></div>
                    <button
                        onClick={() => setVacancy(!vacancy)}
                        className={`px-2 py-1 text-xs rounded text-left
                            ${vacancy
                                ? 'bg-orange-100 dark:bg-yellow-400/60 text-gray-900'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-600'
                            }`}
                    >
                        Diözesan&shy;administrator
                    </button>
                </div>

                {/* Deutsche Namen */}
                <div className="grid gap-1 items-center mb-3"
                    style={{ gridTemplateColumns: '6rem minmax(0, 1fr) minmax(0, 1fr)' }}>
                    <label className="text-sm text-gray-500 dark:text-gray-400">
                        Deutsch
                    </label>
                    <input
                        type="text"
                        value={popeName}
                        onChange={(e) => setPopeName(e.target.value)}
                        className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800
            border dark:border-gray-600 rounded
            text-gray-900 dark:text-gray-100 min-w-0"
                        placeholder="Name des Papstes"
                    />
                    <input
                        type="text"
                        value={bishopName}
                        onChange={(e) => setBishopName(e.target.value)}
                        className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800
            border dark:border-gray-600 rounded
            text-gray-900 dark:text-gray-100 min-w-0"
                        placeholder="Name des Bischofs"
                    />
                </div>

                {/* Lateinisch (Dativ) */}
                <div className="grid gap-1 items-center mb-1"
                    style={{ gridTemplateColumns: '6rem minmax(0, 1fr) minmax(0, 1fr)' }}>
                    <label className="text-sm text-gray-500 dark:text-gray-400">
                        Latein (Dat.)
                    </label>
                    <input
                        type="text"
                        value={popeNameLatInput}
                        onChange={(e) => setPopeNameLatInput(e.target.value)}
                        onBlur={(e) => handleDativeBlur(e.target.value, setPopeNameLat, setPopeNameLatInput)}
                        className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800
            border dark:border-gray-600 rounded
            text-gray-900 dark:text-gray-100 min-w-0"
                        placeholder="nomen Papae"
                    />
                    <input
                        type="text"
                        value={bishopNameLatInput}
                        onChange={(e) => setBishopNameLatInput(e.target.value)}
                        onBlur={(e) => handleDativeBlur(e.target.value, setBishopNameLat, setBishopNameLatInput)}
                        className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800
            border dark:border-gray-600 rounded
            text-gray-900 dark:text-gray-100 min-w-0"
                        placeholder="nomen Episcopi"
                    />
                </div>

                {/* Lateinisch (Akkusativ) - nur Anzeige */}
                <div className="grid gap-1 items-center"
                    style={{ gridTemplateColumns: '6rem minmax(0, 1fr) minmax(0, 1fr)' }}>
                    <label className="text-sm text-gray-500 dark:text-gray-400">
                        Latein (Akk.)
                    </label>
                    <input
                        type="text"
                        value={popeNameAccInput}
                        onChange={(e) => setPopeNameAccInput(e.target.value)}
                        onBlur={(e) => handleAccusativeBlur(e.target.value, setPopeNameLat, setPopeNameAccInput)}
                        className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800
            border dark:border-gray-600 rounded
            text-gray-900 dark:text-gray-100 min-w-0"
                        placeholder="nomen Papae"
                    />
                    <input
                        type="text"
                        value={bishopNameAccInput}
                        onChange={(e) => setBishopNameAccInput(e.target.value)}
                        onBlur={(e) => handleAccusativeBlur(e.target.value, setBishopNameLat, setBishopNameAccInput)}
                        className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800
            border dark:border-gray-600 rounded
            text-gray-900 dark:text-gray-100 min-w-0"
                        placeholder="nomen Episcopi"
                    />
                </div>
            </div>

            {/* Invitatorium Psalms Section */}
            <div className="px-3 py-2">
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">
                    Invitatoriumspsalmen an den Wochentagen
                </div>
                <div className="space-y-2">
                    {weekdays.map((day, dayIndex) => (
                        <div key={day} className="grid gap-2 items-center"
                            style={{ gridTemplateColumns: '6rem 1fr 1fr 1fr 1fr' }}>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                {day}
                            </div>
                            {availablePsalms.map(psalm => (
                                <button
                                    key={psalm}
                                    onClick={() => handlePsalmSelect(dayIndex, psalm)}
                                    className={`p-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded
                                  ${sequenceInv[dayIndex] === psalm
                                            ? 'bg-orange-100 dark:bg-yellow-400/60'
                                            : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                                >
                                    {psalm}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Import/Export Section */}
            <div className="px-3 py-2">
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    Personalisierung
                </div>

                <div className="flex gap-2">
                    <div className="flex-1">
                        <input
                            type="file"
                            onChange={handleImport}
                            accept=".json,.ts"
                            className="hidden"
                            id="fileInput"
                        />
                        <label
                            htmlFor="fileInput"
                            className="block px-3 py-2 text-center text-sm text-gray-700 dark:text-gray-300
                                rounded bg-gray-100 dark:bg-gray-800 hover:bg-gray-200
                                dark:hover:bg-gray-700 cursor-pointer"
                        >
                            Importieren
                        </label>
                    </div>

                    <div className="flex-1">
                        <button
                            onClick={handleExport}
                            className="w-full px-3 py-2 text-center text-sm text-gray-700
                                dark:text-gray-300 rounded bg-gray-100 dark:bg-gray-800
                                hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            Exportieren
                        </button>
                    </div>
                </div>
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    <p>Personalisierte Einstellungen importieren oder exportieren</p>
                    <p>Format: JSON (.json)</p>
                </div>
            </div>
        </div >
    );
};

export default PersonalSettings;