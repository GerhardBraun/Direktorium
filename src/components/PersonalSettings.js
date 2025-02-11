import React, { useState, useEffect } from 'react';

const PersonalSettings = () => {
    const [personalData, setPersonalData] = useState(null);

    useEffect(() => {
        // Lade die personalisierten Daten beim Komponenten-Mount
        const loadedData = localStorage.getItem('personalData');
        if (loadedData) {
            setPersonalData(JSON.parse(loadedData));
        }
    }, []);

    const handleImport = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            const text = await file.text();
            let data;

            try {
                // Versuche zuerst als JSON zu parsen
                data = JSON.parse(text);
            } catch {
                // Falls das fehlschlägt, versuche den JSON-Teil aus einer TypeScript-Datei zu extrahieren
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
        if (!data) {
            alert('Keine persönlichen Einstellungen zum Exportieren vorhanden');
            return;
        }

        // Exportiere als formatierte JSON-Datei
        const formattedData = JSON.stringify(JSON.parse(data), null, 2);
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
        // Prüfe ob es sich um ein Objekt handelt
        if (typeof data !== 'object' || data === null) return false;

        // Prüfe die erwartete Struktur 
        const expectKeys = ['j', 'a', 'w', 'o', 'p'];
        return Object.keys(data).some(key => expectKeys.includes(key));
    };

    return (
        <div className="border-t dark:border-gray-700">
            <div className="px-3 py-2">
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    Personalisierung
                </div>

                <div className="flex gap-1">
                    <div className="w-1/2">  {/* Exakt 50% Breite */}
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

                    <div className="w-1/2">  {/* Exakt 50% Breite */}
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
        </div>
    );
};

export default PersonalSettings;