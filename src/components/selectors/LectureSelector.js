import React, { useState, useMemo, useEffect } from 'react';
import formatBibleRef from '../dataHandlers/BibleRefFormatter.js';
import { lectureAlternatives, namesOfBooks } from '../data/LectureAlternatives.ts';
import { perikopen } from '../data/Perikopen.ts';

const LectureSelector = ({
    texts,
    hour,
    prefSrc,
    prefSollemnity,
    localPrefLanguage = '',
    formatPrayerText,
    getValue,
    SectionHeader,
    ComposeResponse,
    advResp = ''
}) => {
    const mariendonk = localStorage.getItem('mariendonk') === 'true'

    // State für beide Lesungen - jetzt mit Index 0+ für Alternativen
    const [selectedLecture, setSelectedLecture] = useState({
        first: 0,    // 0 für Standard, 1+ für Alternativen
        second: 0    // 0 für Standard, 1+ für Alternativen
    });

    // State für erweiterte Gruppen
    const [expandedGroups, setExpandedGroups] = useState({
        first: new Set(),
        second: new Set()
    });

    // Hilfsfunktionen für das folgende useMemo
    const extractKeyword = (field) => {
        const text = getValue(field)
        if (!text || !text.startsWith('^A:')) return null;
        const match = text.match(/^\^A:([^:]+):/);
        return match ? match[1] : null;
    };

    const resolvePerikopen = (alternatives) => {
        return alternatives.map(alt => {
            if (alt?.les_stelle?.startsWith('^Q:')) {
                const perikopenKey = alt.les_stelle.substring(3); // Entferne '^Q:'
                const perikopenData = perikopen[perikopenKey];
                if (perikopenData) {
                    // Überschreibe Felder mit Perikopen-Daten
                    return {
                        ...alt,
                        ...perikopenData
                    };
                }
            }
            return alt;
        });
    };

    const abbreviate = (text) => {
        if (!text) return text;

        const sliceIndex = text.indexOf('^SLICE');
        if (sliceIndex !== -1) {
            text = text.substring(0, sliceIndex);
        }
        return formatPrayerText(text.replace(/[.!?;:,]+$/, '') + '\u00a0…');
    };

    const extractTitle = (text) => {
        if (!text) return null;
        const match = text.match(/\^h([^]*?)\^p/);
        let extractedTitle = match ? match[1].trim() : ''
        const sliceIndex = extractedTitle.indexOf('^SLICE');
        if (sliceIndex !== -1) {
            extractedTitle = extractedTitle.substring(0, sliceIndex);
        }
        return extractedTitle;
    };

    const checkLanguageField = (field, alternativeData, titleField = null) => {
        if (!field || !alternativeData) return null;

        const languageField = field + localPrefLanguage;
        let result;

        if (getValue(field)?.endsWith(localPrefLanguage)) {
            result = alternativeData[languageField] || alternativeData[field] || null;
        } else {
            result = alternativeData[field] || '';
        }

        // Wenn ein titleField angegeben ist, versuche eine Überschrift zu extrahieren
        if (titleField && alternativeData[titleField]) {
            const titleText = alternativeData[titleField + localPrefLanguage] || alternativeData[titleField];
            const extractedTitle = extractTitle(titleText);
            if (extractedTitle) {
                return extractedTitle;
            }
        }

        return result;
    };

    const standard = useMemo(() => {
        let result = {};

        // Alle Felder durchlaufen und Werte sammeln
        ['les_buch', 'les_stelle', 'les_text', 'resp1',
            'patr_autor', 'patr_werk', 'patr_text', 'patr_resp1'
        ].forEach(field => {
            result[field] = getValue(field) || '';
        });
        // Perikopen-Verarbeitung mit Querverweisen
        ['les_stelle', 'patr_werk'].forEach(field => {
            if (result[field]?.startsWith('^Q:')) {
                const perikopenKey = result[field].substring(3);
                const perikopenData = perikopen[perikopenKey];
                if (perikopenData) {
                    result = { ...result, ...perikopenData };
                }
            }
        });
        return result;
    }, [getValue]);

    // Prüfe verfügbare Alternativen
    const availableAlternatives = useMemo(() => {
        const firstKeyword = extractKeyword('les_buch');
        const secondKeyword = extractKeyword('patr_autor');

        const provFirstAlternatives = lectureAlternatives[firstKeyword]?.first || [];
        const provSecondAlternatives = lectureAlternatives[secondKeyword]?.second || [];

        const firstAlternatives = resolvePerikopen(provFirstAlternatives);
        const secondAlternatives = resolvePerikopen(provSecondAlternatives);


        // Funktion zum Verarbeiten der Alternativen mit Gruppen
        const processAlternatives = (alternatives, lectureType, keyword) => {
            const processedAlternatives = [];
            const groups = new Map(); // Map für Gruppen: groupName -> groupData

            const fieldAutor = lectureType === 'first' ? 'les_buch' : 'patr_autor'
            const fieldWerk = lectureType === 'first' ? 'les_stelle' : 'patr_werk'
            const fieldText = lectureType === 'first' ? 'les_text' : 'patr_text'
            const fieldResp1 = lectureType === 'first' ? 'resp1' : 'patr_resp1'

            const longBookname = (altData) => {
                if (lectureType !== 'first' || !altData) return '';
                const bookname = altData?.les_buch || ''
                return (bookname.startsWith('Lesung aus')
                    || bookname.startsWith('Aus de'))
                    ? bookname : ''
            }

            const getButtonText = (buttonType, altData) => {
                if (!buttonType || !altData) return '';
                if (altData?.button) return formatPrayerText(altData.button)

                if (longBookname(altData)) {
                    const title = extractTitle(checkLanguageField(fieldText, altData))
                    if (title) return formatPrayerText(title)
                }
                let connector = lectureType !== 'first' ? ':' : ''

                let text1 = standard?.[fieldAutor]
                let text2 = extractTitle(standard?.[fieldText])
                    || standard?.[fieldWerk]

                if (buttonType !== 'standard') {
                    text1 = checkLanguageField(fieldAutor, altData)
                    text2 = lectureType === 'first'
                        ? checkLanguageField(fieldWerk, altData)
                        : checkLanguageField(fieldWerk, altData, fieldText)
                }

                text1 = (!text1 || text1?.startsWith('LEER'))
                    ? '' : text1.replace(/ \(.*$/, '').trim();
                text2 = (!text2 || text2?.startsWith('LEER'))
                    ? '' : text2;
                connector = text1 && text2 ? connector + ' ' : '';

                return formatPrayerText(text1 + connector + text2)

            };

            const getBezug = (altData, excludeYear = '') => {
                const resultBezug = checkLanguageField('bezug', altData)
                if (resultBezug) return formatPrayerText(resultBezug)

                let resultExclusion = (excludeYear?.length === 1)
                    ? 'vom Lesejahr ' + excludeYear?.toUpperCase() : ''

                let evAbbr = longBookname(altData)
                if (evAbbr) {
                    for (const [name, abbr] of Object.entries(namesOfBooks)) {
                        if (evAbbr.includes(name)) {
                            evAbbr = abbr;
                            break; // Stoppe bei der ersten Übereinstimmung
                        }
                    }
                    if (evAbbr !== "LEER") {
                        resultExclusion = resultExclusion ? resultExclusion + ': ' : ''
                        return formatBibleRef(resultExclusion + evAbbr + ' ' + altData.les_stelle, true)
                    }
                }
                return (resultExclusion) ? '(' + resultExclusion + ')' : null
            }

            // Standard-Button (immer Index 0)
            if (keyword && alternatives.length > 0) {
                processedAlternatives.push({
                    index: 0,
                    hide: standard?.[fieldText] === 'LEER',
                    marian: keyword.includes('Maria'),
                    buttonText: getButtonText('standard', standard),
                    buttonResp: abbreviate(standard?.[fieldResp1]),
                    bezug: getBezug(standard),
                    hasText: !!standard?.[fieldText] && standard?.[fieldText] !== 'LEER',
                    onlyResp: !standard?.[fieldText] && !!standard?.[fieldResp1],
                });
            }

            // Verarbeite Alternativen und erkenne Gruppen
            let currentGroup = null;

            alternatives.forEach((altData, index) => {
                if (!altData) return;

                // Prüfe excludeYear-Bedingung
                const excludeYear = altData?.excludeYear || ''
                if (excludeYear === texts.yearABC ||
                    (excludeYear === '!so' && texts.dayOfWeek > 0)
                ) {
                    return; // Überspringe diese Alternative
                }

                const actualIndex = index + 1; // +1 wegen Standard bei Index 0

                // Prüfe ob dies ein Gruppen-Eintrag ist
                if (altData.group) {
                    currentGroup = altData.group;
                    groups.set(currentGroup, []);
                    return; // Gruppen-Eintrag wird nicht als normale Alternative hinzugefügt
                }

                // Erstelle Alternative
                const alternative = {
                    index: actualIndex,
                    marian: keyword.includes('Maria'),
                    buttonText: getButtonText('alternative', altData),
                    buttonResp: abbreviate(checkLanguageField(fieldResp1, altData)),
                    bezug: getBezug(altData, excludeYear),
                    hasText: !!altData[fieldText],
                    onlyResp: !altData[fieldText] && !!altData[fieldResp1],
                    // content und groupName entfernt - werden direkt in selected() behandelt
                    content: altData // Nur die Rohdaten für selected()
                };

                if (currentGroup) {
                    // Zur aktuellen Gruppe hinzufügen
                    groups.get(currentGroup).push(alternative);
                } else {
                    // Normale Alternative ohne Gruppe
                    processedAlternatives.push(alternative);
                }
            });

            // Rest der Funktion bleibt unverändert...
            const hasAlternatives = processedAlternatives.filter(alt => !alt.hide).length > 1 ||
                Array.from(groups.values()).some(groupItems =>
                    groupItems.filter(item => !item.hide).length > 0);

            const hasAlternativeText = processedAlternatives.filter(alt => !alt.hide).some(b => b.index > 0 && b.hasText) ||
                Array.from(groups.values()).some(groupItems =>
                    groupItems.filter(item => !item.hide).some(item => item.hasText)
                );

            const onlyAlternativeResp = hasAlternatives &&
                processedAlternatives.filter(b => b.index > 0 && !b.hide).every(b => b.onlyResp) &&
                Array.from(groups.values()).every(groupItems =>
                    groupItems.filter(item => !item.hide).every(item => item.onlyResp)
                );

            const defaultIndex = processedAlternatives[0]?.hide ?
                processedAlternatives.find(alt => !alt.hide)?.index || 0 : 0;

            return {
                alternatives: processedAlternatives,
                groups,
                hasAlternatives,
                hasAlternativeText,
                onlyAlternativeResp,
                defaultIndex
            };
        };
        return {
            first: processAlternatives(firstAlternatives, 'first', firstKeyword),
            second: processAlternatives(secondAlternatives, 'second', secondKeyword)
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getValue, localPrefLanguage, formatPrayerText, texts.yearABC]);

    // Funktion für die Auswahl der anzuzeigenden Daten
    const selected = (field) => {
        const lectureType = field.startsWith('patr_') ? 'second' : 'first';
        const selectedIndex = selectedLecture[lectureType];
        const languageField = field + localPrefLanguage;
        const standardValue = standard[languageField] || standard[field] || getValue(field);

        // Wenn Index 0 (Standard) oder keine Alternativen, verwende Standard-Werte
        if (selectedIndex === 0 || !availableAlternatives[lectureType].hasAlternatives) {
            return standardValue;
        }

        // Suche in normalen Alternativen
        let alternative = availableAlternatives[lectureType].alternatives
            .find(alt => alt.index === selectedIndex);

        // Wenn nicht gefunden, suche in Gruppen
        if (!alternative) {
            for (const groupItems of availableAlternatives[lectureType].groups.values()) {
                alternative = groupItems.find(item => item.index === selectedIndex);
                if (alternative) break;
            }
        }

        if (!alternative?.content) return standardValue;

        return alternative.content[languageField]
            || alternative.content[field]
            || standardValue;
    };

    // Toggle Funktion für Gruppen
    const toggleGroup = (lectureType, groupName) => {
        setExpandedGroups(prev => {
            const newExpanded = { ...prev };
            const currentSet = new Set(newExpanded[lectureType]);

            if (currentSet.has(groupName)) {
                currentSet.delete(groupName);
            } else {
                currentSet.add(groupName);
            }

            newExpanded[lectureType] = currentSet;
            return newExpanded;
        });
    };

    // DRY: Gemeinsame Funktion für Auswahl-Buttons
    const renderSelectionButtons = (lectureType, lectureMeta) => {
        const { alternatives, groups, onlyAlternativeResp: onlyResp } = lectureMeta;
        const currentSelection = selectedLecture[lectureType];

        const handleSelectionChange = (index) => {
            setSelectedLecture(prev => ({
                ...prev,
                [lectureType]: index
            }));
        };

        const getButtonColor = (button) => {
            const { index, marian } = button
            if (index === 0) { // Standard
                return marian ? 'btn-blue' : 'btn-default';
            }
            return marian ? 'btn-blue' : 'btn-brown';
        };

        const renderButton = (button, showGroupLabel = false, isFirstVisible = false) => (
            <button
                key={button.index}
                onClick={() => handleSelectionChange(button.index)}
                className={`w-full text-sm text-left px-2 pt-2 pb-1 mt-1 rounded
            ${getButtonColor(button)}
            ${currentSelection === button.index ? 'ring-2 ring-yellow-500' : ''}`}
            >
                <div className="flex items-baseline gap-0">
                    <div className="opacity-70 shrink-0 w-10">
                        {isFirstVisible ? '' : 'Oder:'}
                    </div>
                    <div>
                        {onlyResp
                            ? button.buttonResp
                            : button.buttonText}
                        {button.bezug && (
                            <div className="opacity-70">
                                {button.bezug}
                            </div>
                        )}
                    </div>
                </div>
            </button>
        );

        const renderGroupButton = (groupName, groupItems) => {
            const isExpanded = expandedGroups[lectureType].has(groupName);
            return (
                <div key={`group-${groupName}`}>
                    <button
                        onClick={() => toggleGroup(lectureType, groupName)}
                        className="w-full text-sm text-left px-2 pt-2 pb-1 mt-1 rounded btn-brown"
                    >
                        <div className="flex items-baseline gap-0">
                            <div className="opacity-70 shrink-0 w-10">
                                {isExpanded ? '▼' : '▶'}
                            </div>
                            <div>
                                {formatPrayerText(groupName)}
                            </div>
                        </div>
                    </button>
                    {isExpanded && groupItems.map(item => renderButton(item, true))}
                </div>
            );
        };

        return (
            <div className="mb-4">
                {alternatives
                    .filter(button => !button.hide)  // Versteckte Buttons ausfiltern
                    .map((button, filterIndex) => renderButton(button, false, filterIndex === 0))}
                {Array.from(groups.entries()).map(([groupName, groupItems]) =>
                    renderGroupButton(groupName, groupItems.filter(item => !item.hide))
                )}
            </div>
        );
    };

    // Reset selections when alternatives change
    useEffect(() => {
        const getFirstValidIndex = (alternatives, groups) => {
            // Finde den ersten nicht-versteckten Button
            const validAlternative = alternatives.find(alt => !alt.hide);
            if (validAlternative) return validAlternative.index;

            // Falls keine Alternative gefunden, suche in Gruppen
            for (const groupItems of groups.values()) {
                const validItem = groupItems.find(item => !item.hide);
                if (validItem) return validItem.index;
            }
            return 0;
        };

        const defaultFirst = getFirstValidIndex(
            availableAlternatives.first.alternatives,
            availableAlternatives.first.groups
        );
        const defaultSecond = getFirstValidIndex(
            availableAlternatives.second.alternatives,
            availableAlternatives.second.groups
        );

        setSelectedLecture(prev => {
            // Prüfe ob aktuell gewählte Buttons versteckt sind
            const currentFirstButton = availableAlternatives.first.alternatives.find(alt => alt.index === prev.first);
            const currentSecondButton = availableAlternatives.second.alternatives.find(alt => alt.index === prev.second);

            let newFirst = prev.first;
            let newSecond = prev.second;

            // Korrigiere ersten Button falls versteckt oder außerhalb des gültigen Bereichs
            if (currentFirstButton?.hide || prev.first >= availableAlternatives.first.alternatives.length) {
                newFirst = defaultFirst;
            } else if (availableAlternatives.first.hasAlternatives) {
                newFirst = Math.max(prev.first, defaultFirst);
            } else {
                newFirst = defaultFirst;
            }

            // Korrigiere zweiten Button falls versteckt oder außerhalb des gültigen Bereichs
            if (currentSecondButton?.hide || prev.second >= availableAlternatives.second.alternatives.length) {
                newSecond = defaultSecond;
            } else if (availableAlternatives.second.hasAlternatives) {
                newSecond = Math.max(prev.second, defaultSecond);
            } else {
                newSecond = defaultSecond;
            }

            return { first: newFirst, second: newSecond };
        });

        // console.log('availableAlternatives aktualisiert:', availableAlternatives, defaultFirst, defaultSecond);

    }, [availableAlternatives]);

    // Prüfe ob überhaupt Lesungen vorhanden sind
    const hasFirstLecture = standard?.['les_text'];
    const hasSecondLecture = standard?.['patr_text'];

    if (!hasFirstLecture && !hasSecondLecture) {
        return null;
    }

    return (
        <div className="w-full">
            {/* ERSTE LESUNG */}
            {hasFirstLecture && (
                <div className="mb-0">
                    <SectionHeader
                        title={hour === "vigil" ? "EVANGELIUM" :
                            hour === "lesehore" ? "ERSTE LESUNG" : "KURZLESUNG"}
                        field="les_text"
                        askContinuous={true}
                    />

                    {/* Auswahl-Buttons für erste Lesung (nur bei alternativen Texten) */}
                    {availableAlternatives.first.hasAlternativeText &&
                        renderSelectionButtons('first', availableAlternatives.first)}

                    {/* Anzeige der ersten Lesung */}
                    <div>
                        {!['lesehore', 'vigil'].includes(hour) && (
                            <div className="text-[0.9em] text-gray-400"
                                aria-hidden="true">
                                {formatPrayerText(selected("les_buch"))}{" "}
                                {formatBibleRef(selected("les_stelle"))}
                            </div>
                        )}
                        {['lesehore', 'vigil'].includes(hour) && (
                            <>
                                <div>
                                    <span className="mr-3">
                                        {formatPrayerText(selected("les_buch"))}
                                    </span>
                                    <span className="inline-block whitespace-nowrap text-[0.9em] text-gray-400"
                                        aria-hidden="true">
                                        {formatBibleRef(selected("les_stelle"))}
                                    </span>
                                </div>
                            </>
                        )}
                        {formatPrayerText(selected("les_text"))}
                    </div>

                </div>
            )}

            {/* VÄTERLESUNG AUS MARIENDONK */}
            {hasSecondLecture && !['lesehore', 'vigil'].includes(hour)
                && mariendonk && (
                    <div className="mb-0">
                        <SectionHeader
                            title="VÄTERLESUNG"
                            field="patr_text"
                            askContinuous={true}
                        />

                        <div>
                            <div className="text-[0.9em] italic">
                                {formatPrayerText(selected("patr_autor"))}
                            </div>
                            {formatPrayerText(selected("patr_werk"))}
                            {formatPrayerText(selected("patr_text"))}
                        </div>
                    </div>
                )}


            {/* RESPONSORIUM zur ersten Lesung */}
            {selected("resp1") && (
                <div className="mb-0 whitespace-pre-wrap">
                    <SectionHeader
                        title="RESPONSORIUM"
                        field="resp1"
                    />

                    {/* Auswahl-Buttons für erste Lesung (nur bei alternativen Responsorien) */}
                    {availableAlternatives.first.onlyAlternativeResp &&
                        renderSelectionButtons('first', availableAlternatives.first)}

                    <ComposeResponse
                        resp0={selected("resp0")}
                        resp1={selected("resp1")}
                        resp2={selected("resp2")}
                        resp3={selected("resp3")}
                    />
                </div>
            )}

            {/* ZWEITE LESUNG */}
            {hasSecondLecture && ['lesehore', 'vigil'].includes(hour) && (
                <div className="mb-0">
                    <SectionHeader
                        title="ZWEITE LESUNG"
                        field="patr_text"
                        askContinuous={true}
                    />

                    {/* Auswahl-Buttons für zweite Lesung (nur bei alternativen Texten) */}
                    {availableAlternatives.second.hasAlternativeText &&
                        renderSelectionButtons('second', availableAlternatives.second)}

                    {/* Anzeige der zweiten Lesung */}
                    <div>
                        <div className="text-[0.9em] italic">
                            {formatPrayerText(selected("patr_autor"))}
                        </div>
                        {formatPrayerText(selected("patr_werk"))}
                        {formatPrayerText(selected("patr_text"))}
                    </div>
                </div>
            )}

            {/* RESPONSORIUM zur zweiten Lesung */}
            {selected("patr_resp1") && !advResp && (
                <div className="mb-0">
                    <SectionHeader
                        title="RESPONSORIUM"
                        field="resp1"
                    />

                    {/* Auswahl-Buttons für zweite Lesung (nur bei alternativen Responsorien) */}
                    {availableAlternatives.second.onlyAlternativeResp &&
                        renderSelectionButtons('second', availableAlternatives.second)}

                    <ComposeResponse
                        resp0={null}
                        resp1={selected("patr_resp1")}
                        resp2={selected("patr_resp2")}
                        resp3={selected("patr_resp3")}
                    />
                </div>
            )}
        </div>
    );
};

export default LectureSelector;

