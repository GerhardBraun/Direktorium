/**
 * Sicherer Zugriff auf localStorage.getItem mit Fehlerbehandlung
 * @param {string} key - Der Schlüssel für den localStorage-Zugriff
 * @param {*} defaultValue - Rückgabewert bei Fehler (Standard: '')
 * @returns {*} Der gespeicherte Wert oder defaultValue bei Fehler
 */
export function getLocalStorage(key, errorValue = '') {
    try {
        const value = localStorage.getItem(key);
        return value !== null ? value : '';
    } catch (error) {
        console.error(`localStorage.getItem('${key}') fehlgeschlagen:`, error);
        return errorValue;
    }
}

/**
 * Sicheres Speichern im localStorage mit Fehlerbehandlung
 * @param {string} key - Der Schlüssel für den localStorage-Zugriff
 * @param {*} value - Der zu speichernde Wert
 * @returns {boolean} true bei Erfolg, false bei Fehler
 */
export function setLocalStorage(key, value) {
    try {
        localStorage.setItem(key, value);
        return true;
    } catch (error) {
        console.error(`localStorage.setItem('${key}', '${value}') fehlgeschlagen:`, error);
        return false;
    }
}