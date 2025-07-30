import React, { useState, useMemo, useEffect } from 'react';
import formatBibleRef from '../dataHandlers/BibleRefFormatter.js';

const LectureSelector = ({
    texts,
    hour,
    prefSrc,
    prefSollemnity,
    localPrefLanguage = '',
    formatPrayerText,
    getValue,
    SectionHeader,
    ComposeResponse
}) => {
    const [selectedFirstLecture, setSelectedFirstLecture] = useState('standard');
    const [selectedSecondLecture, setSelectedSecondLecture] = useState('standard');

    // Hilfsfunktion zum Extrahieren des Stichworts
    const extractKeyword = (field) => {
        const text = getValue(field)
        if (!text || !text.startsWith('^A:')) return null;
        const match = text.match(/^\^A:([^:]+):/);
        return match ? match[1] : null;
    };

    // Prüfe verfügbare Alternativen
    const availableAlternatives = useMemo(() => {
        const firstKeyword = extractKeyword('les_buch');
        const secondKeyword = extractKeyword('patr_autor');
        const firstData = lectureAlternatives[firstKeyword]?.first;
        const secondData = lectureAlternatives[secondKeyword]?.second;

        return {
            first: {
                hasAlternative: firstKeyword && firstData,
                keyword: firstKeyword,
                standard: getValue('les_buch') + ' ' + getValue('les_stelle'),
                button: firstData?.les_buch + ' ' + firstData?.les_stelle || ''
            },
            second: {
                hasAlternative: secondKeyword && secondData,
                keyword: secondKeyword,
                standard: getValue('patr_autor') + ': ' + getValue('patr_werk'),
                button: secondData?.patr_autor + ': ' + secondData?.patr_werk || ''
            }
        };
    }, [getValue]);

    // Funktion für die Auswahl der anzuzeigenden Daten
    const selected = (field) => {
        const lectureType = field.startsWith('patr_') ? 'second' : 'first';
        const isAlternativeSelected = lectureType === 'first'
            ? selectedFirstLecture === 'alternative'
            : selectedSecondLecture === 'alternative';

        if (!isAlternativeSelected) {
            return getValue(field);
        }

        // Alternative aus Datenbank verwenden
        const keyword = availableAlternatives[lectureType].keyword;

        if (!keyword || !lectureAlternatives[keyword]) return getValue(field);

        const alternativeData = lectureAlternatives[keyword][lectureType];
        return alternativeData?.[field] || getValue(field);
    };

    const getButtonColor = (source) => {
        if (source === 'Standard:') {
            return 'btn-default';
        }
        return 'btn-brown';
    };

    // Reset selections when alternatives change
    useEffect(() => {
        if (!availableAlternatives.first.hasAlternative) {
            setSelectedFirstLecture('standard');
        }
        if (!availableAlternatives.second.hasAlternative) {
            setSelectedSecondLecture('standard');
        }
    }, [availableAlternatives]);

    // Prüfe ob überhaupt Lesungen vorhanden sind
    const hasFirstLecture = selected('les_buch') && selected('les_stelle');
    const hasSecondLecture = selected('patr_text');

    if (!hasFirstLecture && !hasSecondLecture) {
        return null;
    }

    return (
        <div className="w-full">
            {/* ERSTE LESUNG */}
            {hasFirstLecture && (
                <div className="mb-0">
                    <SectionHeader
                        title={hour === "lesehore" ? "ERSTE LESUNG" : "KURZLESUNG"}
                        field="les_text"
                        askContinuous={true}
                    />

                    {/* Auswahl-Buttons für erste Lesung */}
                    {availableAlternatives.first.hasAlternative && (
                        <div className="mb-4">
                            <button
                                onClick={() => setSelectedFirstLecture('standard')}
                                className={`w-full text-sm text-left pl-2 pt-2 pb-1 mt-1 rounded mr-2
                                    ${getButtonColor('Standard:')}
                                    ${selectedFirstLecture === 'standard' ? 'ring-2 ring-yellow-500' : ''}`}
                            >
                                <div className="flex items-baseline gap-0">
                                    <div className="opacity-70 shrink-0 w-10"></div>
                                    <div>{formatPrayerText(availableAlternatives.first.standard)}</div>
                                </div>
                            </button>
                            <button
                                onClick={() => setSelectedFirstLecture('alternative')}
                                className={`w-full text-sm text-left pl-2 pt-2 pb-1 mt-1 rounded
                                    ${getButtonColor('Alternative:')}
                                    ${selectedFirstLecture === 'alternative' ? 'ring-2 ring-yellow-500' : ''}`}
                            >
                                <div className="flex items-baseline gap-0">
                                    <div className="opacity-70 shrink-0 w-10">Oder:</div>
                                    <div>{availableAlternatives.first.button}</div>
                                </div>
                            </button>
                        </div>
                    )}

                    {/* Anzeige der ersten Lesung */}
                    <div>
                        {hour !== "lesehore" && (
                            <div className="text-[0.9em] text-gray-400">
                                {formatPrayerText(selected("les_buch"))}{" "}
                                {formatBibleRef(selected("les_stelle"))}
                            </div>
                        )}
                        {hour === "lesehore" && (
                            <>
                                <div>
                                    <span className="mr-3">
                                        {formatPrayerText(selected("les_buch"))}
                                    </span>
                                    <span className="inline-block whitespace-nowrap text-[0.9em] text-gray-400">
                                        {formatBibleRef(selected("les_stelle"))}
                                    </span>
                                </div>
                            </>
                        )}
                        {formatPrayerText(selected("les_text"))}
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
                    <ComposeResponse
                        resp0={selected("resp0")}
                        resp1={selected("resp1")}
                        resp2={selected("resp2")}
                        resp3={selected("resp3")}
                    />
                </div>
            )}

            {/* ZWEITE LESUNG */}
            {hasSecondLecture && (
                <div className="mb-0">
                    <SectionHeader
                        title="ZWEITE LESUNG"
                        field="patr_text"
                        askContinuous={true}
                    />

                    {/* Auswahl-Buttons für zweite Lesung */}
                    {availableAlternatives.second.hasAlternative && (
                        <div className="mb-4">
                            <button
                                onClick={() => setSelectedSecondLecture('standard')}
                                className={`w-full text-sm text-left pl-2 pt-2 pb-1 mt-1 rounded mr-2
                                    ${getButtonColor('Standard:')}
                                    ${selectedSecondLecture === 'standard' ? 'ring-2 ring-yellow-500' : ''}`}
                            >
                                <div className="flex items-baseline gap-0">
                                    <div className="opacity-70 shrink-0 w-10"></div>
                                    <div>{formatPrayerText(availableAlternatives.second.standard)}</div>
                                </div>
                            </button>
                            <button
                                onClick={() => setSelectedSecondLecture('alternative')}
                                className={`w-full text-sm text-left pl-2 pt-2 pb-1 mt-1 rounded
                                    ${getButtonColor('Alternative:')}
                                    ${selectedSecondLecture === 'alternative' ? 'ring-2 ring-yellow-500' : ''}`}
                            >
                                <div className="flex items-baseline gap-0">
                                    <div className="opacity-70 shrink-0 w-10">Oder:</div>
                                    <div>{availableAlternatives.second.button}</div>
                                </div>
                            </button>
                        </div>
                    )}

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
            {selected("patr_resp1") && (
                <div className="mb-0">
                    <SectionHeader
                        title="RESPONSORIUM"
                        field="resp1"
                    />
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

// Datenbank für alternative Lesungen
const lectureAlternatives = {
    "Christkönig": {
        first: {
            les_buch: "Test für Buch",
            les_stelle: "Test für Stelle 12,1-9",
            les_text: "Test für Text",
            resp1: "Test für Responsorium 1",
            resp2: "Test für Responsorium 2",
            resp3: "Test für Responsorium 3"
        },
        second: {
            patr_autor: "Test für Autor",
            patr_werk: "Test für Werk",
            patr_text: "^hTest für Text",
            patr_resp1: "Test für Responsorium 1.",
            patr_resp2: "test",
            patr_resp3: "Test für Responsorium 3."
        }
    },
    "Weihnachten": {
        first: {
            les_buch: "",
            les_stelle: "",
            les_text: "",
            resp1: "",
            resp2: "",
            resp3: ""
        },
        second: {
            patr_autor: "",
            patr_werk: "",
            patr_text: "",
            patr_resp1: "",
            patr_resp2: "",
            patr_resp3: ""
        }
    },
    "Ostern": {
        first: {
            les_buch: "",
            les_stelle: "",
            les_text: "",
            resp1: "",
            resp2: "",
            resp3: ""
        },
        second: {
            patr_autor: "",
            patr_werk: "",
            patr_text: "",
            patr_resp1: "",
            patr_resp2: "",
            patr_resp3: ""
        }
    },
    "Pfingsten": {
        first: {
            les_buch: "",
            les_stelle: "",
            les_text: "",
            resp1: "",
            resp2: "",
            resp3: ""
        },
        second: {
            patr_autor: "",
            patr_werk: "",
            patr_text: "",
            patr_resp1: "",
            patr_resp2: "",
            patr_resp3: ""
        }
    }
    // Weitere Stichwörter können hier ergänzt werden
};