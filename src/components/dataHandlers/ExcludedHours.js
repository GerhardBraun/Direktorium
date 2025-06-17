// Hilfsfunktion zur Bestimmung der ausgeschlossenen Horen basierend auf Ergänzungspsalmodie
export const getExcludedHours = (texts, localPrefErgPs, title) => {
    if (title !== 'PSALMODIE' || !localPrefErgPs) {
        return [];
    }

    const excludedHours = [];
    const checkHours = ['terz', 'sext', 'non'];

    // Definiere die Psalm-Bereiche für jede Hore
    const psalmRanges = {
        terz: [120, 121, 122],
        sext: [123, 124, 125],
        non: [126, 127, 128]
    };

    checkHours.forEach(hourName => {
        let shouldExclude = false;
        const psalmRange = psalmRanges[hourName];

        // Prüfe in terz.wt und vesper.wt auf die entsprechenden Psalmen
        ['terz', 'vesper'].forEach(sourceHour => {
            if (texts[sourceHour]?.wt) {
                // Prüfe psalm1, psalm2, psalm3
                ['psalm1', 'psalm2', 'psalm3'].forEach(psalmField => {
                    const psalmData = texts[sourceHour].wt[psalmField];
                    if (psalmData && psalmRange.includes(psalmData)) {
                        shouldExclude = true;
                    }
                });
            }
        });

        if (shouldExclude) {
            excludedHours.push(hourName);
        }
    });

    return excludedHours;
};
