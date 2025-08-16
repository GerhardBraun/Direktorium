import React, { useState, useMemo, useEffect } from 'react';
import { psalmsData } from '../data/PsHymn.ts'; // Import hinzufügen

const HymnSelector = ({ texts, hour, season,
    prefSrc, prefSollemnity,
    localPrefKomplet, localPrefLanguage = '',
    formatPrayerText }) => {
    const [selectedHymn, setSelectedHymn] = useState(null);

    // Neue Hilfsfunktion zum Auflösen der Hymnen-Referenz
    const resolveHymnReference = (ref) => {
        if (!ref) return null;

        const wholePart = Math.floor(ref);
        const decimalStr = (ref % 1).toFixed(3).split('.')[1];
        const multiplier = decimalStr.replace(/0+$/, '').length === 1 ? 10 : 1000;
        const decimalPart = Math.round((ref % 1) * multiplier);

        return psalmsData[wholePart]?.[decimalPart] || {};
    };

    const getButtonColor = (sourcePath, sourceLabel) => {
        const hasOnlyWtSources = availableHymns.every(
            // wt und pers ungültig gemacht für Färbung der Buttons in allen Fällen
            hymn => ['wtt', 'perss'].includes(hymn.id.split('_')[0]));

        if (sourcePath === 'wt' && !hasOnlyWtSources) {
            if (texts?.laudes?.wt?.farbe === 'r' ||
                (hour === 'vesper' && texts?.vesper?.wt?.farbe === 'r')) {
                return 'btn-red';
            }
            else if (season === 'j') { return 'btn-green'; }
            else if (season === 'a' || season === 'q') { return 'btn-violett'; }
            else { return 'btn-gold'; }
        };

        // Prüfe auf rote Farbe im prefSrc
        const pathParts = sourcePath.split('_')[0].split('.');
        let currentLevel = texts.laudes;
        if (texts?.hasErsteVesper && hour === 'vesper') {
            currentLevel = texts.vesper
        }
        pathParts.forEach(part => {
            currentLevel = currentLevel?.[part];
        });

        const color = currentLevel?.farbe;
        if (color?.startsWith('r')) { return 'btn-red' }
        if (color?.startsWith('m')) { return 'btn-blue' }
        if (sourceLabel === 'Comm:') { return 'btn-brown'; }
        if (sourceLabel === 'pers:') { return 'btn-pers'; }
        return 'btn-default'
    };
    const hasEigenHymn = (sourceData) => {
        if (!sourceData?.hymn_1) return false;

        const hymnData = resolveHymnReference(sourceData.hymn_1);
        const title = hymnData?.title || '';

        // Wenn der Titel mit ^[ beginnt, ist es kein eigener Hymnus
        return !title.startsWith('^[');
    };

    const sourceOrder = useMemo(() => {
        // Prüfe die Ränge
        const { rank_date = 0, rank_wt = 0, isCommemoration = false } = texts;

        let useWt = (prefSollemnity
            && !(['terz', 'sext', 'non'].includes(hour)))
            ? '' : 'wt'

        const isHighRank = rank_date > 2 || rank_wt > 2;

        // Stelle die Basis-Quellen zusammen
        let sources = [prefSrc, 'pers'];

        if (isHighRank && rank_wt > rank_date) {
            sources = ['wt', ...sources];
            useWt = ''
        }

        // Ermittle Commune-Sources nur wenn nötig
        const communeSources =
            ((!isCommemoration || prefSollemnity === 'soll') &&
                !hasEigenHymn(texts[hour]?.[prefSrc])) // Geändert: Verwende hasEigenHymn
                ? ['com1', 'com2']
                    .filter(com =>
                        texts[hour]?.[prefSrc]?.[com]?.hymn_1 || // Geändert
                        texts[hour]?.[prefSrc]?.[com]?.hymn_2    // Geändert
                    )
                    .map(com => `${prefSrc}.${com}`)
                : [];

        // Füge die Sources in der richtigen Reihenfolge hinzu
        if (isHighRank) {
            sources = [...sources, ...communeSources, useWt];
        } else {
            sources = [...sources, useWt, ...communeSources];
        }

        if (hour === 'komplet') { sources = ['pers', 'wt'] }
        return sources;
    }, [texts, hour, prefSrc, prefSollemnity]);

    // Sammle alle verfügbaren Hymnen
    const availableHymns = useMemo(() => {
        const collectHymns = (localPrefLanguage = '') => {
            const hymns = [];
            const usedHymnNumbers = new Set();
            const hasNachtHymn = texts[hour]?.wt?.[`hymn_nacht${localPrefLanguage}`];

            const addNewHymn = ({ hymnNumber, id, sourceLabel, isNachtHymn = false }) => {
                // Korrigierte Logik: Nur verarbeiten wenn hymnNumber existiert und noch nicht verwendet
                if (hymnNumber && !usedHymnNumbers.has(hymnNumber)) {
                    // Löse die Referenz auf, um Text und Titel zu bekommen
                    const hymnData = resolveHymnReference(hymnNumber);

                    // Prüfe auf gewünschte Sprache
                    const textField = `text${localPrefLanguage}`;
                    const titleField = `title${localPrefLanguage}`;
                    const hymnText = hymnData?.[textField]?.replace('LEER', '')
                    const stb3 = (['kl. Stb:', 'pers:'].includes(sourceLabel)
                        && hymnData?.stb3) ? hymnData.stb3 : ''

                    // Nur hinzufügen, wenn der Text in der gewünschten Sprache existiert
                    if (!hymnText) return;

                    hymns.push({
                        id,
                        source: sourceLabel,
                        stb3,
                        text: hymnText,
                        title: hymnData[titleField],
                        hymnNumber,
                        isNachtHymn,
                    });

                    usedHymnNumbers.add(hymnNumber);
                }
            }

            const specialHymns = dataSpecialHymns?.[prefSollemnity]?.[localPrefLanguage]?.[hour]
                || dataSpecialHymns?.[prefSollemnity]?.[hour];
            const hymnNumbers = Array.isArray(specialHymns) ? specialHymns : [specialHymns];

            hymnNumbers.forEach((specialHymn, index) => {
                addNewHymn({
                    hymnNumber: specialHymn,
                    id: `${prefSollemnity}_hymn_${index + 1}`,
                    sourceLabel: prefSollemnity.charAt(0).toUpperCase() + prefSollemnity.slice(1),
                    isNachtHymn: false
                });
            });

            let hymnTypes = ['hymn_nacht', 'hymn_1', 'hymn_2', 'hymn_3',
                'hymn_nacht_lat', 'hymn_1_lat', 'hymn_2_lat', 'hymn_3_lat', 'hymn_kl'];
            if (prefSollemnity) {
                hymnTypes = ['hymn_1', 'hymn_2', 'hymn_3',
                    'hymn_1_lat', 'hymn_2_lat', 'hymn_3_lat']
            }

            sourceOrder.forEach(sourcePath => {
                const pathParts = sourcePath.split('.');
                let currentLevel = texts[hour];
                pathParts.forEach(part => {
                    currentLevel = currentLevel?.[part];
                });

                if (!currentLevel) return;

                hymnTypes.forEach(hymnType => {
                    if (currentLevel?.[hymnType]) {
                        const hymnNumber = currentLevel[hymnType];

                        let sourceLabel;
                        if (sourcePath === prefSrc) {
                            sourceLabel = 'eigen:';
                        } else if (sourcePath === prefSollemnity) {
                            sourceLabel = prefSollemnity.charAt(0).toUpperCase() + prefSollemnity.slice(1);
                        } else if (sourcePath === 'pers') {
                            sourceLabel = 'pers:';
                        } else if (['wt', 'k1', 'k2'].includes(sourcePath)) {
                            if (hymnType.startsWith('hymn_nacht')) {
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

                        addNewHymn({
                            hymnNumber,
                            id: `${sourcePath.replace('.', '_')}_${hymnType}`,
                            sourceLabel,
                            isNachtHymn: hymnType.startsWith('hymn_nacht')
                        });
                    }
                });
            });

            // Spezielle Komplet-Hymnen hinzufügen
            if (hour === 'komplet') {
                const kompletHymnNumber = dataSpecialHymns[localPrefKomplet];

                // Verwende die addNewHymn Funktion auch hier
                addNewHymn({
                    hymnNumber: kompletHymnNumber,
                    id: 'wt_hymn_k',
                    sourceLabel: 'vom Tag:',
                    isNachtHymn: false
                });
            }

            return hymns;
        };

        // Erster Durchlauf: Mit Sprachpräferenz (oder Standard wenn nicht gesetzt)
        const firstPass = collectHymns(localPrefLanguage);
        if (firstPass.length > 0) {
            return firstPass;
        }

        // Fallback: Standard-Sprache (nur wenn erster Durchlauf leer war)
        return collectHymns('');

    }, [texts, hour, prefSrc, sourceOrder, localPrefLanguage, localPrefKomplet]);

    // Setze den ersten gefundenen Hymnus als ausgewählt
    useEffect(() => {
        if (availableHymns.length > 0) {
            setSelectedHymn(availableHymns[0].id);
        }
    }, [availableHymns]);

    if (availableHymns.length === 0) return null;

    if (availableHymns.length === 1) {
        return (
            <div className="w-full">
                {formatPrayerText(availableHymns[0].text)}
            </div>
        );
    }

    return (
        <div className="w-full">
            {availableHymns.map((hymn) => (
                <button
                    key={hymn.id}
                    onClick={() => setSelectedHymn(hymn.id)}
                    className={`w-full text-sm text-left pl-2 pt-2 pb-1 mt-1 rounded
                        ${getButtonColor(hymn.id.split('_')[0], hymn.source)}
                        ${selectedHymn === hymn.id ? 'ring-2 ring-yellow-500' : ''}`}
                >
                    {hymn.isNachtHymn ? (
                        <div className="flex flex-col gap-0">
                            <div className="opacity-70">
                                {hymn.source}
                            </div>
                            <div className="pl-16">
                                {formatPrayerText(hymn?.title)}
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-baseline gap-0">
                            <div className="opacity-70 shrink-0 w-16">
                                {hymn.source}
                            </div>
                            <div>
                                {formatPrayerText(hymn?.title)}
                            </div>
                        </div>
                    )}
                </button>
            ))}

            {availableHymns.find(h => h.id === selectedHymn)?.stb3 && (
                <div className="mt-3 -mb-3 long-rubric">
                    Stundenbuch III/
                    {formatPrayerText(
                        availableHymns.find(h => h.id === selectedHymn)?.stb3
                    )}
                </div>
            )}
            {selectedHymn && (
                <div className="mt-5">
                    {formatPrayerText(
                        availableHymns.find(h => h.id === selectedHymn)?.text
                    )}
                </div>
            )}
        </div>
    );
};

export default HymnSelector;

const dataSpecialHymns = {
    "k1": 2516,
    "k2": 2510,
    "kirchw": {
        "erstev": 1154,
        "lesehore": 1139,
        "laudes": 1150,
        "vesper": 1154,
        "_lat": {
            "erstev": 5450,
            "lesehore": 5436,
            "laudes": 5446,
            "vesper": 5450,
        },
    },
    "verst": {
        "lesehore": [2514, 1425],
        "laudes": 1440,
        "tert": 1440,
        "sext": 1440,
        "non": 1440,
        "vesper": 2512,
        "_lat": {
            "lesehore": [5698.1, 5698.2, 5698.3],
            "laudes": [5708.1, 5708.2, 5708.3],
            "terz": [5713.1, 5713.2, 5713.3],
            "sext": [5716.1, 5716.2, 5716.3],
            "non": [5719.1, 5719.2, 5719.3],
            "vesper": [5720.1, 5720.2, 5720.3],
        }
    }
}