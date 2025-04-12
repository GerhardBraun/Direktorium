import React, { useState, useMemo, useEffect } from 'react';

const HymnSelector = ({ texts, hour, season, prefSrc, prefSollemnity, formatPrayerText }) => {
    const [selectedHymn, setSelectedHymn] = useState(null);
    let localPrefSrc = prefSrc;
    if (['kirchw', 'verst'].includes(prefSollemnity)) { localPrefSrc = prefSollemnity; }

    const getButtonColor = (sourcePath, sourceLabel) => {
        const hasOnlyWtSources = availableHymns.every(hymn => hymn.id.split('_')[0] === 'wt');

        if (sourcePath === 'wt' && !hasOnlyWtSources) {
            if (season === 'j') { return 'btn-green'; }
            else if (season === 'a' || season === 'q') { return 'btn-violett'; }
            else { return 'btn-gold'; }
        };


        // Prüfe auf rote Farbe im localPrefSrc
        const pathParts = sourcePath.split('_')[0].split('.');
        let currentLevel = texts.laudes;
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

        const useWt = (prefSollemnity
            && !(['terz', 'sext', 'non'].includes(hour)))
            ? '' : 'wt'
        const isHighRank = rank_date > 2 || rank_wt > 2;

        // Stelle die Basis-Quellen zusammen
        let sources = [localPrefSrc, 'pers'];

        // Ermittle Commune-Sources nur wenn nötig
        const communeSources = ((!isCommemoration || prefSollemnity === 'soll') &&
            !texts[hour]?.[localPrefSrc]?.hymn_1?.text)
            ? ['com1', 'com2']
                .filter(com =>
                    texts[hour]?.[localPrefSrc]?.[com]?.hymn_1?.text ||
                    texts[hour]?.[localPrefSrc]?.[com]?.hymn_2?.text
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
    }, [texts, hour, localPrefSrc, prefSollemnity]);

    // Sammle alle verfügbaren Hymnen
    const availableHymns = useMemo(() => {
        const hymns = [];
        const usedHymnNumbers = new Set();
        const hasNachtHymn = texts[hour]?.wt?.hymn_nacht?.text;

        let hymnTypes = ['hymn_nacht', 'hymn_1', 'hymn_2', 'hymn_3', 'hymn_kl'];
        if (prefSollemnity) {
            hymnTypes = ['hymn_1', 'hymn_2', 'hymn_3']
        }

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
                        } else if (sourcePath === prefSollemnity) {
                            sourceLabel = prefSollemnity.charAt(0).toUpperCase() + prefSollemnity.slice(1);
                        } else if (sourcePath === 'pers') {
                            sourceLabel = 'pers:';
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
                            title: currentLevel[hymnType].title,
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
    }, [texts, hour, localPrefSrc, sourceOrder]);

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