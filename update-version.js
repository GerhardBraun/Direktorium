// update-version.js - Mit Modus-Unterscheidung
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';
import { execSync } from 'child_process';

// ES Module Äquivalent für __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Readline-Interface für Benutzereingaben
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pfad zur version-info.json
const versionFilePath = path.join(__dirname, 'public', 'version-info.json');

// Hilfsfunktion für Promises mit readline
const question = (query) => new Promise(resolve => rl.question(query, resolve));

async function main() {
    try {
        // Prüfen, ob vom upgrade-Skript mit --upgrade aufgerufen
        const isUpgradeMode = process.argv.includes('--upgrade');

        // Aktuelle Versionsinformationen laden (für beide Modi)
        let versionInfo = {
            appVersion: "1.0.0",
            dataVersion: "",
            updateNotes: "Initiale Version"
        };

        if (fs.existsSync(versionFilePath)) {
            versionInfo = JSON.parse(fs.readFileSync(versionFilePath, 'utf8'));
        }

        if (!isUpgradeMode) {
            // NORMALER MODUS: Versionsabfrage

            // Aktuelle Werte anzeigen
            console.log("\n=== Aktuelle Versionsinformationen ===");
            console.log(`App-Version: ${versionInfo.appVersion}`);
            console.log(`Daten-Version: ${versionInfo.dataVersion}`);
            console.log(`Update-Hinweise: ${versionInfo.updateNotes}`);
            console.log("=====================================\n");

            // Abfrage nach App-Version-Änderung
            const changeVersion = await question("App-Version ändern? (j/n): ");

            if (changeVersion.toLowerCase() === 'j') {
                const newVersion = await question(`Neue App-Version (aktuell ${versionInfo.appVersion}): `);
                if (newVersion.trim()) {
                    versionInfo.appVersion = newVersion.trim();

                    // Neue Update-Hinweise abfragen
                    const newNotes = await question("Neue Update-Hinweise: ");
                    if (newNotes.trim()) {
                        versionInfo.updateNotes = newNotes.trim();
                    }
                }
            }

            // Datenzeitstempel aktualisieren
            const now = new Date();
            versionInfo.dataVersion = `${now.getFullYear()}.${(now.getMonth() + 1).toString().padStart(2, '0')}.${now.getDate().toString().padStart(2, '0')}_${now.getHours().toString().padStart(2, '0')}-${now.getMinutes().toString().padStart(2, '0')}`;

            // Datei schreiben
            fs.writeFileSync(versionFilePath, JSON.stringify(versionInfo, null, 2));
            console.log(`\nVersion aktualisiert: App ${versionInfo.appVersion}, Daten ${versionInfo.dataVersion}`);

        } else {
            // UPGRADE-MODUS: Nur Datenbankabfrage
            console.log("\n=== Aktuelle Versionsinformationen ===");
            console.log(`App-Version: ${versionInfo.appVersion}`);
            console.log(`Daten-Version: ${versionInfo.dataVersion}`);
            console.log("=====================================\n");

            const updateDatabases = await question("Datenbanken aktualisieren? (j/n): ");

            if (updateDatabases.toLowerCase() === 'j') {
                console.log("\nFühre brevier-update aus...");
                execSync("npm run brevier-update", { stdio: 'inherit' });
            } else {
                console.log("\nFühre einfaches update aus...");
                execSync("npm run update", { stdio: 'inherit' });
            }
        }
    } catch (error) {
        console.error("Fehler:", error);
    } finally {
        rl.close();
    }
}

main();