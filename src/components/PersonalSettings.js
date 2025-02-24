import React, { useState, useEffect } from 'react';

const PersonalSettings = () => {
    const [personalData, setPersonalData] = useState(null);
    const [startView, setStartView] = useState(() =>
        localStorage.getItem('startViewMode') || 'directory'
    );
    const [prefFootnotes, setPrefFootnotes] = useState(() =>
        localStorage.getItem('prefFootnotes') === 'true'
    );
    const [popeName, setPopeName] = useState(() =>
        localStorage.getItem('popeName') || ''
    );
    const [bishopName, setBishopName] = useState(() =>
        localStorage.getItem('bishopName') || ''
    );
    const [sequenceInv, setSequenceInv] = useState(() => {
        const stored = localStorage.getItem('sequenceInv');
        return stored ? JSON.parse(stored) : [95, 100, 24, 67, 67, 100, 24];
    });

    useEffect(() => {
        const loadedData = localStorage.getItem('personalData');
        if (loadedData) {
            setPersonalData(JSON.parse(loadedData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('startViewMode', startView);
    }, [startView]);

    useEffect(() => {
        localStorage.setItem('prefFootnotes', prefFootnotes);
    }, [prefFootnotes]);

    useEffect(() => {
        localStorage.setItem('popeName', popeName);
    }, [popeName]);

    useEffect(() => {
        localStorage.setItem('bishopName', bishopName);
    }, [bishopName]);

    useEffect(() => {
        localStorage.setItem('sequenceInv', JSON.stringify(sequenceInv));
    }, [sequenceInv]);

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
                localStorage.setItem('personalData', JSON.stringify(data));
                setPersonalData(data);

                if (data.settings) {
                    if (data.settings.startViewMode) {
                        setStartView(data.settings.startViewMode);
                        localStorage.setItem('startViewMode', data.settings.startViewMode);
                    }
                    if (data.settings.prefFootnotes !== undefined) {
                        setPrefFootnotes(data.settings.prefFootnotes);
                        localStorage.setItem('prefFootnotes', data.settings.prefFootnotes);
                    }
                    if (data.settings.popeName) {
                        setPopeName(data.settings.popeName);
                        localStorage.setItem('popeName', data.settings.popeName);
                    }
                    if (data.settings.bishopName) {
                        setBishopName(data.settings.bishopName);
                        localStorage.setItem('bishopName', data.settings.bishopName);
                    }
                    if (data.settings.sequenceInv) {
                        setSequenceInv(data.settings.sequenceInv);
                        localStorage.setItem('sequenceInv', JSON.stringify(data.settings.sequenceInv));
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
            prefFootnotes,
            popeName,
            bishopName,
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
                <div className="grid gap-2 items-center" style={{ gridTemplateColumns: '6rem 2fr 1fr 2fr' }}>
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
                        className={`px-3 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded 
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
            </div>

            {/* Fußnoten Section */}
            <div className="px-3 py-0">
                <div className="grid gap-2 items-center" style={{ gridTemplateColumns: '6rem 1fr 1fr' }}>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        Fußnoten
                    </div>
                    <button
                        onClick={() => setPrefFootnotes(false)}
                        className={`px-3 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded 
                ${!prefFootnotes ? 'bg-orange-100 dark:bg-yellow-400/60' : 'bg-gray-100 dark:bg-gray-800'}`}
                    >
                        im Text
                    </button>
                    <button
                        onClick={() => setPrefFootnotes(true)}
                        className={`px-3 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded 
                ${prefFootnotes ? 'bg-orange-100 dark:bg-yellow-400/60' : 'bg-gray-100 dark:bg-gray-800'}`}
                    >
                        unter dem&nbsp;Text
                    </button>
                </div>
            </div>

            {/* Names Section */}
            <div className="px-3">
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    Namen für die Fürbitten
                </div>
                <div className="grid gap-2 items-center mb-1"
                    style={{ gridTemplateColumns: '6rem 1fr' }}>
                    <label className="text-sm text-gray-500 dark:text-gray-400">
                        Papst
                    </label>
                    <input
                        type="text"
                        value={popeName}
                        onChange={(e) => setPopeName(e.target.value)}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 
            border dark:border-gray-600 rounded 
            text-gray-900 dark:text-gray-100"
                        placeholder="Name des Papstes"
                    />
                </div>
                <div className="grid gap-2 items-center"
                    style={{ gridTemplateColumns: '6rem 1fr' }}>
                    <label className="text-sm text-gray-500 dark:text-gray-400">
                        Bischof
                    </label>
                    <input
                        type="text"
                        value={bishopName}
                        onChange={(e) => setBishopName(e.target.value)}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 
            border dark:border-gray-600 rounded 
            text-gray-900 dark:text-gray-100"
                        placeholder="Name des Bischofs"
                    />
                </div>
            </div>

            {/* Invitatorium Psalms Section - Neu als Auswahlraster */}
            <div className="px-3 py-2">
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">
                    Invitatoriumspsalmen an den Wochentagen
                </div>
                <div className="space-y-3">
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
        </div>
    );
};

export default PersonalSettings;