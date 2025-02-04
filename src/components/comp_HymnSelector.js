import React, { useState, useMemo, useEffect } from 'react';

const HymnSelector = ({ texts, hour, prefSrc, formatPrayerText }) => {
    const [selectedHymn, setSelectedHymn] = useState(null);

    const sourceOrder = useMemo(() => {
        // Prüfe die Ränge
        const rank_date = texts?.rank_date || 0;
        const rank_wt = texts?.rank_wt || 0;
        const isHighRank = rank_date > 2 || rank_wt > 2;

        // Stelle die Basis-Quellen zusammen
        let sources = [prefSrc];

        // Füge Commune-Sources hinzu, wenn vorhanden
        const communeSources = ['com1', 'com2'].filter(com =>
            texts[hour]?.[prefSrc]?.[com]?.hymn_1?.text ||
            texts[hour]?.[prefSrc]?.[com]?.hymn_2?.text
        ).map(com => `${prefSrc}.${com}`);

        // Bei hohem Rang oder wenn kein eigener Hymnus vorhanden ist
        if (isHighRank || !texts[hour]?.[prefSrc]?.hymn_1?.text) {
            sources = [...sources, ...communeSources];
        }

        // Füge 'wt' an der passenden Position hinzu
        if (isHighRank) {
            sources.push('wt');  // bei hohem Rang nach den Commune-Sources
        } else {
            sources.splice(1, 0, 'wt');  // sonst direkt nach prefSrc
        }

        // Füge Commune-Sources am Ende hinzu, wenn noch nicht geschehen
        if (!isHighRank && !texts[hour]?.[prefSrc]?.hymn_1?.text) {
            sources = [...sources, ...communeSources];
        }
        return sources;
    }, [texts, hour, prefSrc]);

    const hymnTypes = ['hymn_nacht', 'hymn_1', 'hymn_2', 'hymn_3', 'hymn_kl'];

    // Helper to get first line of hymn without punctuation
    const getFirstLine = (hymnText) => {
        if (!hymnText) return '';
        const firstLineEnd = hymnText.indexOf('^l');
        let line = firstLineEnd > -1 ? hymnText.substring(0, firstLineEnd) : hymnText;

        // Entferne Satzzeichen am Ende
        return line.replace(/[,.;!?\-]\s*$/, '').trim();
    };

    // Sammle alle verfügbaren Hymnen
    const availableHymns = useMemo(() => {
        const hymns = [];
        const usedHymnNumbers = new Set();
        const hasNachtHymn = texts[hour]?.wt?.hymn_nacht?.text;

        sourceOrder.forEach(sourcePath => {
            const pathParts = sourcePath.split('.');
            let currentLevel = texts[hour];
            pathParts.forEach(part => {
                currentLevel = currentLevel?.[part];
            });

            if (!currentLevel) return;

            hymnTypes.forEach(hymnType => {
                if (currentLevel[hymnType]?.text) {
                    const hymnNumber = currentLevel[hymnType]?.number;

                    // Füge nur hinzu, wenn die Nummer noch nicht verwendet wurde
                    if (!hymnNumber || !usedHymnNumbers.has(hymnNumber)) {
                        let sourceLabel;

                        if (sourcePath === prefSrc) {
                            sourceLabel = 'eigen:';
                        } else if (sourcePath === 'wt') {
                            if (hymnType === 'hymn_nacht') {
                                sourceLabel = 'In der Nacht oder am frühen Morgen:';
                            } else if (hymnType === 'hymn_kl') {
                                sourceLabel = 'kl. Stb:';
                            } else if (hymnType === 'hymn_1' && hasNachtHymn) {
                                sourceLabel = 'Am Tag:';
                            } else {
                                sourceLabel = 'vom Tag:';
                            }
                        } else {
                            sourceLabel = 'Comm:';
                        }

                        hymns.push({
                            id: `${sourcePath.replace('.', '_')}_${hymnType}`,
                            source: sourceLabel,
                            text: currentLevel[hymnType].text,
                            hymnNumber,
                            isNachtHymn: hymnType === 'hymn_nacht'
                        });

                        if (hymnNumber) {
                            usedHymnNumbers.add(hymnNumber);
                        }
                    }
                }
            });
        });

        return hymns;
    }, [texts, hour, prefSrc, sourceOrder]);

    // Setze den ersten gefundenen Hymnus als ausgewählt
    useEffect(() => {
        if (availableHymns.length > 0) {
            setSelectedHymn(availableHymns[0].id);
        }
    }, [availableHymns]);

    if (availableHymns.length === 0) return null;

    return (
        <div className="w-full">
            {availableHymns.map((hymn) => (
                <button
                    key={hymn.id}
                    onClick={() => setSelectedHymn(hymn.id)}
                    className={`w-full text-left pl-2 p-1 rounded ${selectedHymn === hymn.id
                        ? 'bg-orange-100 dark:bg-yellow-400/60'
                        : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                >
                    {hymn.isNachtHymn ? (
                        // Spezielles Layout für Nachthymnus
                        <div className="flex flex-col gap-0">
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                {hymn.source}
                            </div>
                            <div className="text-sm text-gray-900 dark:text-gray-100 pl-16">
                                {formatPrayerText(getFirstLine(hymn.text))}
                            </div>
                        </div>
                    ) : (
                        // Standard-Layout für alle anderen Hymnen
                        <div className="flex items-baseline gap-0">
                            <div className="text-sm text-gray-600 dark:text-gray-400 shrink-0 w-16">
                                {hymn.source}
                            </div>
                            <div className="text-sm text-gray-900 dark:text-gray-100">
                                {formatPrayerText(getFirstLine(hymn.text))}
                            </div>
                        </div>
                    )}
                </button>
            ))}

            {selectedHymn && (
                <div className="mt-4">
                    {formatPrayerText(
                        availableHymns.find(h => h.id === selectedHymn)?.text
                    )}
                </div>
            )}
        </div>
    );
};

export default HymnSelector;