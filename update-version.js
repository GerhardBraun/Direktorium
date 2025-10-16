// update-version.js - ES Module Version
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES Module Äquivalent für __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pfad zur version-info.json
const versionFilePath = path.join(__dirname, 'public', 'version-info.json');

// Vorhandene version-info.json lesen (falls existiert)
let versionInfo = {
    appVersion: "1.0.0",
    dataVersion: "",
    updateNotes: "Initiale Version"
};

if (fs.existsSync(versionFilePath)) {
    try {
        versionInfo = JSON.parse(fs.readFileSync(versionFilePath, 'utf8'));
    } catch (err) {
        console.log('Fehler beim Lesen der Version:', err);
    }
}

// Datenzeitstempel aktualisieren
const now = new Date();
versionInfo.dataVersion = `${now.getFullYear()}.${(now.getMonth() + 1).toString().padStart(2, '0')}.${now.getDate().toString().padStart(2, '0')}_${now.getHours().toString().padStart(2, '0')}-${now.getMinutes().toString().padStart(2, '0')}`;

// Datei schreiben
fs.writeFileSync(versionFilePath, JSON.stringify(versionInfo, null, 2));
console.log(`Version aktualisiert: App ${versionInfo.appVersion}, Daten ${versionInfo.dataVersion}`);