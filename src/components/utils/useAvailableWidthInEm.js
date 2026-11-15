import { useState, useEffect } from 'react';

// Misst die tatsächlich verfügbare Textbreite eines Elements in em (bezogen auf dessen Schriftgröße).
// Grundlage für
//  - den Umbruch der Hymnenzeilen an ^/ bzw. ^ß (calculateMaxLineLength in TextFormatter.js) und
//  - die Auflösung zu breiter °-Wortgruppen (releaseOverlongWordGroups in TextFormatter.js).
// Anders als die Fensterbreite berücksichtigt das Maß Innenabstände (Padding) und eine schmalere
// Textspalte, z. B. bei Einbettung in eine Webseite mit mehreren Spalten.
//
// Liefert null, solange noch nicht gemessen werden konnte; dann gilt der Wert aus der Fensterbreite.
// remeasureKey: Wert, bei dessen Änderung neu gemessen wird (z. B. Schriftgröße), weil sich die
// Breite in em dann ändert, ohne dass sich die Breite des Elements in Pixeln ändern muss.
// safetyMargin: Abschlag in em, weil die Breiten der Buchstaben nur geschätzt sind.
export const useAvailableWidthInEm = (ref, remeasureKey, safetyMargin = 0.5) => {
    const [width, setWidth] = useState(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const measure = () => {
            const style = window.getComputedStyle(element);
            const fontPx = parseFloat(style.fontSize);
            const contentPx = element.clientWidth
                - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
            if (fontPx > 0 && contentPx > 0) {
                const widthInEm = Math.round((contentPx / fontPx - safetyMargin) * 10) / 10;
                setWidth(prev => (prev === widthInEm ? prev : widthInEm));
            }
        };

        measure();
        if (typeof ResizeObserver === 'undefined') return;
        const observer = new ResizeObserver(measure);
        observer.observe(element);
        return () => observer.disconnect();
    }, [ref, remeasureKey, safetyMargin]);

    return width;
};
