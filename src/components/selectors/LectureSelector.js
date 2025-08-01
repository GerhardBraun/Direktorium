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

        const chain = (text1, text2, connector = '') => {
            text1 = (!text1 || text1?.startsWith('LEER'))
                ? '' : text1.replace(/ \(.*$/, '').trim();
            text2 = (!text2 || text2?.startsWith('LEER'))
                ? '' : text2;
            connector = text1 && text2 ? connector + ' ' : '';
            return text1 + connector + text2
        }

        return {
            first: {
                hasAlternative: firstKeyword && firstData,
                keyword: firstKeyword,
                standard: chain(getValue('les_buch'), getValue('les_stelle')),
                button: chain(firstData?.les_buch, firstData?.les_stelle)
            },
            second: {
                hasAlternative: secondKeyword && secondData,
                keyword: secondKeyword,
                standard: chain(getValue('patr_autor'), getValue('patr_werk'), ':'),
                button: chain(secondData?.patr_autor, secondData?.patr_werk, ':')
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
        return 'btn-default';
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
        second: {
            patr_autor: "Romano Guardini († 1968)",
            patr_werk: "Aus dem Buch „Der Herr“.",
            patr_text: "^hGottes Trost in der Bedrängnis^pDie Geheime Offenbarung ist ein Buch des Trostes. Keine Theologie der Geschichte oder der letzten Dinge, sondern ein Trost, den Gott beim Ausgang der Apostelzeit seiner Kirche in die Hand gegeben hat. Dieses Trostes bedurfte sie, denn sie war sehr bedrängt.^pWie tröstet aber Gott? Nicht so, dass er sagte: „Die Not sei im Grunde nicht so schlimm“; sie ist schlimm und wird auch schlimm gesehen. Gott verheißt auch keine wunderbaren Eingriffe. Die Geschichte hat ihre Zeit und ihre Macht, auch wo sie sich wider Gott richtet, und die werden nicht aufgehoben.^pDoch über der irdischen Wirklichkeit wird die himmlische gezeigt. Über den bedrängenden Mächten der Geschichte erscheint, schweigend und wartend, der, den sie angreifen, Christus. Ihm gehört die Ewigkeit. Er sieht alles, wägt alles, vom innersten Beginn im Herzen bis zur letzten Auswirkung im Gang der Ereignisse, und schreibt alles in „das Buch“ seines unfehlbaren Wissens.^pUnd einmal schlägt die Stunde, da alle Dinge ihre Zeit gehabt haben. Dann vergehen sie, Christus aber lebt. Alles wird vor Ihn kommen, und Er wird das Wort sprechen, das jedes Menschenwerk enthüllt, jedem seinen genauen Wert gibt und ewig währt.^pDas ist der Trost. Ein Trost des Glaubens, der voraussetzt, dass der Hörende die Überwindung des Glaubens vollbringe. Und er ist nicht auf morgen und das nächste Jahr bezogen, überhaupt nicht auf dieses Leben, sondern über den Tod hinweg auf die Ewigkeit, und hilft soviel, als den Hörenden Gott und Christus und Ewigkeit wirklich sind.",
        }
    },
    "Ursula": {
        second: {
            patr_autor: "Breviarium Coloniense (1521)",
            patr_werk: "LEER",
            patr_text: "^hDient untadelig eurem himmlischen König^pDie heilige Ursula setzte ihr Vertrauen auf das Wort der göttlichen Verheißung. Dennoch war sie auch bemüht um die menschliche Gebrechlichkeit. Sie hatte ihre Mitjungfrauen schon mit Worten und durch das christliche Beispiel belehrt. Doch nun ermahnte sie alle: In eurer bedrängten Lage müsst ihr um so entschlossener an der Tür des göttlichen Erbarmens pochen! Den Gürtel der Keuschheit dürft ihr niemals verlieren! Er ist ja das Zeichen, unter dem ihr eurem himmlischen König untadelig dient.^pMit diesen Worten „gab sie einen Sporn denen, die schon liefen“! Die gottverlobten Jungfrauen brachen in Tränen aus. Von ganzem Herzen und in der Glut des Geistes begannen sie die göttliche Hilfe anzurufen: Gott möge jeder einzelnen, besonders aber der Königin, die Jungfräulichkeit erhalten!^pDer gütige Gott ist allzeit denen nahe, die ihn in der Wahrheit anrufen. Darum wies er ein so frommes Gebet nicht ab. Aus seinen Schatzkammern holte er den Wind hervor. Von ihm wurden die Schiffe so angetrieben, dass sie in einem Tag und einer Nacht in glücklicher Fahrt zum Hafen gelangten, der Tyele heißt. Die Zahl der Schiffe und die Schar der Mädchen erlitt unterdessen keinen Schaden.^pSie gingen ans Ufer, das ihr Ziel war. Die Frau, die ihre Anführerin war, wurde Maria der Prophetin ähnlicher, als sie das Rote Meer vor den Heeren des Pharao durchschritten hatte. Sie sang dem himmlischen Bräutigam das hochzeitliche Lob, das sie ihm schuldete. Die Gemeinschaft der Mädchen stimmte darin ein, nicht mit lautem Rufen, sondern in der Harmonie des Gesanges. Sie sangen das frohe Lied der Schwester des Mose. Es klang empor zum Ohr Gott Zebaots wie lieblicher Klang.^pDort machten sie zur Nacht Station. Am folgenden Tag kauften sie, was sie notwendig hatten. Es war dort Markt. Dann gingen sie zu den Schiffen zurück und lichteten die Anker. Gegen die Strömung des Flusses ruderten sie. So kamen sie zu jener berühmten Stadt Köln, wo heute noch ihre Leiber in Frieden ruhen.^pSie gingen an Land. Nach dem Abendbrot überwältigte der Schlaf die von gottgefälliger Arbeit Übermüdeten. Die heilige Jungfrau Ursula hatte Gottes Wohlgefallen gefunden durch das Bekenntnis zur engelgleichen Keuschheit. Darum sah sie im Traum eine Engelsgestalt voll Licht und Hoheit. Er sagte ihr: Wisse, Tochter, was du so sehr ersehnt hast, wirst du unter dem himmlischen Schutz Gottes mit dieser lieben Gemeinschaft deiner Schwestern erlangen. Du wirst nach Rom gelangen. Die Zahl deiner Gefährtinnen wird keine Minderung erfahren. Die Gelöbnisse werden unvermindert erhalten. Gott hat euch hier die Ruhe in Ewigkeit bestimmt. Hier werdet ihr in Frieden ruhen.",
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