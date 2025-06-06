import React, { useState, useMemo, useEffect } from 'react';
import { psalmsData } from '../data/PsHymn.ts'; // Import hinzufügen

const HymnSelector = ({ texts, hour, season,
    prefSrc, prefSollemnity,
    localPrefKomplet, localPrefLanguage = '',
    formatPrayerText }) => {
    const [selectedHymn, setSelectedHymn] = useState(null);
    let localPrefSrc = prefSrc;
    if (['kirchw', 'verst'].includes(prefSollemnity)) { localPrefSrc = prefSollemnity; }

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
            hymn => ['wt', 'pers'].includes(hymn.id.split('_')[0]));

        if (sourcePath === 'wt' && !hasOnlyWtSources) {
            if (season === 'j') { return 'btn-green'; }
            else if (season === 'a' || season === 'q') { return 'btn-violett'; }
            else { return 'btn-gold'; }
        };

        // Prüfe auf rote Farbe im localPrefSrc
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

    const sourceOrder = useMemo(() => {
        // Prüfe die Ränge
        const { rank_date = 0, rank_wt = 0, isCommemoration = false } = texts;

        let useWt = (prefSollemnity
            && !(['terz', 'sext', 'non'].includes(hour)))
            ? '' : 'wt'

        const isHighRank = rank_date > 2 || rank_wt > 2;

        // Stelle die Basis-Quellen zusammen
        let sources = [localPrefSrc, 'pers', localPrefKomplet];

        if (isHighRank && rank_wt > rank_date) {
            sources = ['wt', ...sources];
            useWt = ''
        }

        // Ermittle Commune-Sources nur wenn nötig
        const communeSources = ((!isCommemoration || prefSollemnity === 'soll') &&
            !texts[hour]?.[localPrefSrc]?.hymn_1) // Geändert: Prüfe auf reference statt text
            ? ['com1', 'com2']
                .filter(com =>
                    texts[hour]?.[localPrefSrc]?.[com]?.hymn_1 || // Geändert
                    texts[hour]?.[localPrefSrc]?.[com]?.hymn_2    // Geändert
                )
                .map(com => `${localPrefSrc}.${com}`)
            : [];

        // Füge die Sources in der richtigen Reihenfolge hinzu
        if (isHighRank) {
            sources = [...sources, ...communeSources, useWt];
        } else {
            sources = [...sources, useWt, ...communeSources];
        }

        return sources;
    }, [texts, hour, localPrefSrc, localPrefKomplet, prefSollemnity]);



    // Sammle alle verfügbaren Hymnen
    const availableHymns = useMemo(() => {
        const collectHymns = (localPrefLanguage = '') => {
            const hymns = [];
            const usedHymnNumbers = new Set();
            const hasNachtHymn = texts[hour]?.wt?.hymn_nacht;

            let hymnTypes = ['hymn_nacht', 'hymn_1', 'hymn_2', 'hymn_3',
                'hymn_1_lat', 'hymn_2_lat', 'hymn_3_lat', 'hymn_kl'];
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
                    if (currentLevel[hymnType]) {
                        const hymnNumber = currentLevel[hymnType];

                        // Füge nur hinzu, wenn die Nummer noch nicht verwendet wurde
                        if (!hymnNumber || !usedHymnNumbers.has(hymnNumber)) {
                            // Löse die Referenz auf, um Text und Titel zu bekommen
                            const hymnData = resolveHymnReference(hymnNumber);

                            // Prüfe auf gewünschte Sprache
                            const textField = `text${localPrefLanguage}`;
                            const titleField = `title${localPrefLanguage}`;
                            const hymnText = hymnData?.[textField]?.replace('LEER', '')

                            // Nur hinzufügen, wenn der Text in der gewünschten Sprache existiert
                            if (!hymnText) return;

                            let sourceLabel;

                            if (sourcePath === prefSrc) {
                                sourceLabel = 'eigen:';
                            } else if (sourcePath === prefSollemnity) {
                                sourceLabel = prefSollemnity.charAt(0).toUpperCase() + prefSollemnity.slice(1);
                            } else if (sourcePath === 'pers') {
                                sourceLabel = 'pers:';
                            } else if (['wt', 'k1', 'k2'].includes(sourcePath)) {
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
                                text: hymnText,
                                title: hymnData[titleField],
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

            // Spezielle Komplet-Hymnen hinzufügen
            if (hour === 'komplet') {
                const kompletHymns = {
                    'k1': 2516,
                    'k2': 2510
                };

                const kompletHymnNumber = kompletHymns[localPrefKomplet];
                if (kompletHymnNumber && !usedHymnNumbers.has(kompletHymnNumber)) {
                    const kompletHymnData = resolveHymnReference(kompletHymnNumber);

                    const textField = `text${localPrefLanguage}`;
                    const titleField = `title${localPrefLanguage}`;
                    const kompletHymnText = kompletHymnData?.[textField]?.replace('LEER', '');

                    if (kompletHymnText) {
                        hymns.push({
                            id: 'wt_hymn_k',
                            source: 'vom Tag:',
                            text: kompletHymnText,
                            title: kompletHymnData[titleField],
                            hymnNumber: kompletHymnNumber,
                            isNachtHymn: false
                        });

                        usedHymnNumbers.add(kompletHymnNumber);
                    }
                }
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

    }, [texts, hour, localPrefSrc, sourceOrder, localPrefLanguage, localPrefKomplet]);

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