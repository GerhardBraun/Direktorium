import React, { useState, useEffect } from 'react';

const PersonalSettings = () => {
    const [personalData, setPersonalData] = useState(null);
    const [startView, setStartView] = useState(() =>
        localStorage.getItem('startViewMode') || 'directory'
    );
    const [popeName, setPopeName] = useState(() =>
        localStorage.getItem('popeName') || ''
    );
    const [bishopName, setBishopName] = useState(() =>
        localStorage.getItem('bishopName') || ''
    );

    useEffect(() => {
        // Lade die personalisierten Daten beim Komponenten-Mount
        const loadedData = localStorage.getItem('personalData');
        if (loadedData) {
            setPersonalData(JSON.parse(loadedData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('startViewMode', startView);
    }, [startView]);

    useEffect(() => {
        localStorage.setItem('popeName', popeName);
    }, [popeName]);

    useEffect(() => {
        localStorage.setItem('bishopName', bishopName);
    }, [bishopName]);

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

            // Validiere das Format
            const isValid = validateDataStructure(data);

            if (isValid) {
                localStorage.setItem('personalData', JSON.stringify(data));
                setPersonalData(data);

                // Zusätzliche Einstellungen aus den importierten Daten laden
                if (data.settings) {
                    if (data.settings.startViewMode) {
                        setStartView(data.settings.startViewMode);
                        localStorage.setItem('startViewMode', data.settings.startViewMode);
                    }
                    if (data.settings.popeName) {
                        setPopeName(data.settings.popeName);
                        localStorage.setItem('popeName', data.settings.popeName);
                    }
                    if (data.settings.bishopName) {
                        setBishopName(data.settings.bishopName);
                        localStorage.setItem('bishopName', data.settings.bishopName);
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

        // Füge die zusätzlichen Einstellungen hinzu
        exportData.settings = {
            startViewMode: startView,
            popeName,
            bishopName
        };

        // Exportiere als formatierte JSON-Datei
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

    return (
        <>
            {/* Start View Section */}
            <div className="px-3 py-2 border-t dark:border-gray-700">
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    Startansicht
                </div>
                <div className="flex gap-1">
                    <button
                        onClick={() => setStartView('directory')}
                        className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded 
                            ${startView === 'directory' ? 'bg-orange-100 dark:bg-yellow-400/60' : ''}`}
                    >
                        Direktorium
                    </button>
                    <button
                        onClick={() => setStartView('prayer')}
                        className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded 
                            ${startView === 'prayer' ? 'bg-orange-100 dark:bg-yellow-400/60' : ''}`}
                    >
                        Stundengebet
                    </button>
                </div>
            </div>

            {/* Names Section */}
            <div className="px-3 py-2 border-t dark:border-gray-700">
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    Namen für die Fürbitten
                </div>
                <div className="space-y-2">
                    <div>
                        <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                            Papst
                        </label>
                        <input
                            type="text"
                            value={popeName}
                            onChange={(e) => setPopeName(e.target.value)}
                            className="w-full px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800 
                                border dark:border-gray-600 rounded 
                                text-gray-900 dark:text-gray-100"
                            placeholder="Name des Papstes"
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                            Bischof
                        </label>
                        <input
                            type="text"
                            value={bishopName}
                            onChange={(e) => setBishopName(e.target.value)}
                            className="w-full px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800 
                                border dark:border-gray-600 rounded 
                                text-gray-900 dark:text-gray-100"
                            placeholder="Name des Bischofs"
                        />
                    </div>
                </div>
            </div>

            {/* Import/Export Section */}
            <div className="px-3 py-2 border-t dark:border-gray-700">
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    Personalisierung
                </div>

                <div className="flex gap-1">
                    <div className="w-1/2">
                        <input
                            type="file"
                            onChange={handleImport}
                            accept=".json,.ts"
                            className="hidden"
                            id="fileInput"
                        />
                        <label
                            htmlFor="fileInput"
                            className="block px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                        >
                            Importieren
                        </label>
                    </div>

                    <div className="w-1/2">
                        <button
                            onClick={handleExport}
                            className="w-full px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
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
        </>
    );
};

export default PersonalSettings;