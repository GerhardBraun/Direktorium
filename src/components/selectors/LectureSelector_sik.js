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
    // Array-basierter State für beide Lesungen
    const [selectedLecture, setSelectedLecture] = useState({
        first: 'standard',
        second: 'standard'
    });

    // Prüfe verfügbare Alternativen
    const availableAlternatives = useMemo(() => {

        const extractKeyword = (field) => {
            const text = getValue(field)
            if (!text || !text.startsWith('^A:')) return null;
            const match = text.match(/^\^A:([^:]+):/);
            return match ? match[1] : null;
        };

        const chain = (text1, text2, connector = '') => {
            text1 = (!text1 || text1?.startsWith('LEER'))
                ? '' : text1.replace(/ \(.*$/, '').trim();
            text2 = (!text2 || text2?.startsWith('LEER'))
                ? '' : text2;
            connector = text1 && text2 ? connector + ' ' : '';
            return text1 + connector + text2
        }

        const abbreviate = (text) => {
            if (!text) return text;

            const sliceIndex = text.indexOf('^SLICE');
            if (sliceIndex !== -1) {
                text = text.substring(0, sliceIndex);
            }

            return text.replace(/[.!?;:,]+$/, '') + '\u00a0…';
        };

        const firstKeyword = extractKeyword('les_buch');
        const secondKeyword = extractKeyword('patr_autor');
        const firstData = lectureAlternatives[firstKeyword]?.first;
        const secondData = lectureAlternatives[secondKeyword]?.second;

        const lesText = `les_text${localPrefLanguage}`;
        const lesBuch = `les_buch${localPrefLanguage}`;
        const lesStelle = `les_stelle${localPrefLanguage}`;
        const lesResp1 = `resp1${localPrefLanguage}`;
        const patrText = `patr_text${localPrefLanguage}`;
        const patrAutor = `patr_autor${localPrefLanguage}`;
        const patrWerk = `patr_werk${localPrefLanguage}`;
        const patrResp1 = `patr_resp1${localPrefLanguage}`;

        return {
            first: {
                hasAlternative: firstKeyword && firstData,
                hasAlternativeText: firstKeyword && firstData?.les_text,
                onlyAlternativeResp: firstKeyword && !firstData?.les_text && firstData?.resp1,
                keyword: firstKeyword,
                button: {
                    standard: chain(getValue('les_buch'), getValue('les_stelle')),
                    alternative: chain(firstData?.les_buch, firstData?.les_stelle)
                },
                resp: {
                    standard: abbreviate(getValue('resp1')),
                    alternative: abbreviate(firstData?.resp1)
                }
            },
            second: {
                hasAlternative: secondKeyword && secondData,
                hasAlternativeText: secondKeyword && secondData?.patr_text,
                onlyAlternativeResp: secondKeyword && !secondData?.patr_text && secondData?.patr_resp1,
                keyword: secondKeyword,
                button: {
                    standard: chain(getValue('patr_autor'), getValue('patr_werk'), ':'),
                    alternative: chain(secondData?.patr_autor, secondData?.patr_werk, ':')
                },
                resp: {
                    standard: abbreviate(getValue('patr_resp1')),
                    alternative: abbreviate(secondData?.patr_resp1)
                }
            }
        };
    }, [getValue]);

    // Funktion für die Auswahl der anzuzeigenden Daten
    const selected = (field) => {
        const lectureType = field.startsWith('patr_') ? 'second' : 'first';
        const isAlternativeSelected = selectedLecture[lectureType] === 'alternative';
        field = field + localPrefLanguage;

        if (!isAlternativeSelected) {
            return getValue(field);
        }

        // Alternative aus Datenbank verwenden
        const keyword = availableAlternatives[lectureType].keyword;

        if (!keyword || !lectureAlternatives[keyword]) return getValue(field);

        const alternativeData = lectureAlternatives[keyword][lectureType];
        return alternativeData?.[field] || getValue(field);
    };

    // DRY: Gemeinsame Funktion für Auswahl-Buttons
    const renderSelectionButtons = (lectureType, alternatives) => {
        const { button, resp } = alternatives;
        const currentSelection = selectedLecture[lectureType];

        const handleSelectionChange = (selection) => {
            setSelectedLecture(prev => ({
                ...prev,
                [lectureType]: selection
            }));
        };

        const getButtonColor = (source) => {
            if (source === 'standard') {
                return 'btn-default';
            }
            return 'btn-brown';
        };

        return (
            <div className="mb-4">
                <button
                    onClick={() => handleSelectionChange('standard')}
                    className={`w-full text-sm text-left pl-2 pt-2 pb-1 mt-1 rounded mr-2
                        ${getButtonColor('standard')}
                        ${currentSelection === 'standard' ? 'ring-2 ring-yellow-500' : ''}`}
                >
                    <div className="flex items-baseline gap-0">
                        <div className="opacity-70 shrink-0 w-10"></div>
                        <div>{alternatives.onlyAlternativeResp ? resp.standard : formatPrayerText(button.standard)}</div>
                    </div>
                </button>
                <button
                    onClick={() => handleSelectionChange('alternative')}
                    className={`w-full text-sm text-left pl-2 pt-2 pb-1 mt-1 rounded
                        ${getButtonColor('alternative')}
                        ${currentSelection === 'alternative' ? 'ring-2 ring-yellow-500' : ''}`}
                >
                    <div className="flex items-baseline gap-0">
                        <div className="opacity-70 shrink-0 w-10">Oder:</div>
                        <div>{alternatives.onlyAlternativeResp ? resp.alternative : formatPrayerText(button.alternative)}</div>
                    </div>
                </button>
            </div>
        );
    };

    // Reset selections when alternatives change
    useEffect(() => {
        setSelectedLecture(prev => ({
            first: availableAlternatives.first.hasAlternative ? prev.first : 'standard',
            second: availableAlternatives.second.hasAlternative ? prev.second : 'standard'
        }));
    }, [availableAlternatives]);

    // Prüfe ob überhaupt Lesungen vorhanden sind
    const hasFirstLecture = getValue('les_text');
    const hasSecondLecture = getValue('patr_text');

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

                    {/* Auswahl-Buttons für erste Lesung (nur bei alternativen Texten) */}
                    {availableAlternatives.first.hasAlternativeText &&
                        renderSelectionButtons('first', availableAlternatives.first)}

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
            {hasSecondLecture && (
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
            {selected("patr_resp1") && (
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
    "Fronleichnam": {
        second: {
            patr_autor: "Thomas von Aquin († 1274)",
            patr_werk: "Sequenz zum Fronleichnamsfest.",
            patr_text: "^h^pLauda, Sion, Salvatórem,^llauda ducem et pastórem^lin hymnis et cánticis.^lQuantum potes, tantum aude,^lquia maior omni laude,^lnec laudáre súfficis.^pLaudis thema speciális,^lpanis vivus et vitális^lhódie propónitur.^lQuem in sacræ mensa cœnæ^lturbæ fratrum duodénæ^ldatum non ambígitur.^pSit laus plena, sit sonóra;^lsit iucúnda, sit decóra^lmentis iubilátio.^lDies enim solémnis ágitur^lin qua mensæ prima recólitur^lhuius institútio.^pIn hac mensa novi Regis^lnovum Pascha novæ legis^lphase vetus términat.^lVetustátem nóvitas,^lumbram fugat véritas,^lnoctem lux elíminat.^pQuod in cœna Christus gessit,^lfaciéndum hoc expréssit^lin sui memóriam:^lDocti sacris institútis^lpanem, vinum in salútis^lconsecrámus hóstiam.^pDogma datur Christiánis,^lquod in carnem transit panis^let vinum in sánguinem.^lQuod non capis, quod non vides,^lanimósa firmat fides^lpræter rerum órdinem.^pSub divérsis speciébus,^lsignis tantum et non rebus,^llatent res exímiæ:^lCaro cibus, sanguis potus,^lmanet tamen Christus totus^lsub utráque spécie.^pA suménte non concísus,^lnon confráctus, non divísus^línteger accípitur.^lSumit unus, sumunt mille,^lquantum isti, tantum ille,^lnec sumptus consúmitur.^pSumunt boni, sumunt mali,^lsorte tamen inæquáli,^lvitæ vel intéritus:^lMors est malis, vita bonis,^lvide paris sumptiónis^lquam sit dispar éxitus.^pFracto demum sacraménto,^lne vacilles, sed meménto^ltantum esse sub fragménto,^lquantum toto tégitur.^pNulla rei fit scissúra,^lsigni tantum fit fractúra,^lqua nec status nec statúra^lsignáti minúitur^pEcce panis Angelórum,^lfactus cibus viatórum,^lvere panis filiórum,^lnon mitténdus cánibus!^pIn figúris præsignátur,^lcum Isaac immolátur,^lagnus Paschæ deputátur,^ldatur manna pátribus.^pBone pastor, panis vere,^lJesu, nostri miserére,^ltu nos pasce, nos tuére,^ltu nos bona fac vidére^lin terra vivéntium.^pTu qui cuncta scis et vales,^lqui nos pascis hic mortáles,^ltuos ibi commensáles,^lcohærédes et sodáles^lfac sanctórum cívium.^lAmen. Allelúja."
        }
    },
    "Dez22": {
        second: {
            patr_autor: "LEER",
            patr_werk: "Aus „Sprüche der Sibylle“ (1.–3. Jh.)",
            patr_text: "^hKommen wird ein heiliger Fürst^hI^pWenn auch Ägypten einst von Rom besiegt und beherrscht wird,^leine Grenze sie eint, ja dann wird endlich erscheinen^lunter Menschen das größte Reich unsterblichen Königs:^lKommen wird ein heiliger Fürst und schwingen das Zepter^lüber die Länder der Welt hinfort bis in ewige Zeiten.^hII^pNicht in Herrlichkeit, er kommt als Mensch in die Schöpfung,^lelend, niedrig und arm: Elenden Hoffnung zu bringen^lgibt dem morschen Fleische Gestalt und himmlischen Glauben^lGlaubenslosen, und neu gestaltet er wieder den Menschen,^lwie er einst erstand aus Gottes heiligen Händen.^hIII^pWenn er die Arme breitet, das All umspannt, auf dem Haupte^ldorngeflochtene Krone trägt und wenn ihm die Seite^lnach dem Gesetz der Speer durchstößt, wird schauriges Dunkel,^lwird drei Stunden die Nacht sich senken mitten am Tage,^lund ein großes Zeichen geschieht vor den Augen der Menschen^lim Salomonischen Tempel, wenn er zum Hause des Hades^lniedersteigt und Auffahrt ruft dem Volke der Toten.^hIV^pUnd erstanden gesellt zuerst den Seinen der Herr sich^lwieder im Fleisch, wie er vordem war, doch an Händen und Füßen^lzeigt er der Schar vier Male, die ihm die Glieder durchbohrten,^lAufgang nämlich und Untergang und Mittag und Mitternacht:^lSoviel Königreiche der Welt begehen in Zukunft^lfrevelhafte niedrige Tat am Vorbild der Menschen."
        }
    },
    "Dez23": {
        second: {
            patr_autor: "Heinrich Schlier († 1978)",
            patr_werk: "Aus dem Buch „Der Herr ist nahe – Adventsbetrachtungen“.",
            patr_text: "^hDes Herrn Nähe^pIn welcher Weise können wir denn „in Ihm“ sein und also „in Ihm“ uns freuen? Ist er denn nicht in die äußerste Ferne gerückt, sei es, dass er als der am Kreuz einmal Gestorbene irdisch vergangen ist, wie wir alle einmal vergehen als Menschen, sei es, dass er als der von den Toten Erweckte im Jenseits, im Himmel, bei Gott ist, und wir sind heute hier auf Erden, und morgen holt uns der Tod zu sich? Wie können wir uns seiner freuen, nein, zur Freude „in Ihm“ gelangen, wenn er als der Gekreuzigte und Auferstandene und Erhöhte nicht gegenwärtig ist, gegenwärtig in der Gegenwart unserer Welt und Zeit?^pDarauf gibt der Apostel mit seiner Formulierung Antwort: „Der Herr ist nahe!“{1#Phil 4,5} „Im Herrn“ können und sollen wir uns freuen, weil der Herr „nahe“ ist.^pUnd dieses „Nahesein“ meint nicht nur und nicht zuerst und zuletzt ein Nahesein im zeitlichen Sinn. Es meint eine sachliche Nähe, ein Nahegekommen und in der Nähe, ein in das Erreichbare und das Erreichen Gerücktsein. Und es meint dies auch in der zeitlichen Nähe. Es meint mit anderen Worten, dass seine Ankunft in Kreuz und Auferstehung und Erhöhung zu Gott zugleich ein Ankommen in die Nähe zu uns ist. Er ist uns nahegekommen und ist in unserer Nähe. Ja man kann sagen: Er ist unsere Nähe.^pAdvent hat sich erfüllt in seinem Nahesein. Er ist der, der da kommen soll. Und Er ist in den Horizont der Welt und unseres Lebens eingetreten, der uns von allen Seiten umgibt und angeht.^pUnd als solcher ist er der Grund jener Freude, die über alle Freude und noch Freude im Leid ist. Seine Ankunft in die Nähe erweckt die Freude, die Adventsfreude seiner Nähe.^pEr ist ja so nahe, dass wir sein Wort hören. Er ist – und das ist nicht metaphorisch gemeint – nahe in seinem Wort, im Wort seines Weges, im Wort seines Wirkens, im Wort seiner Person. Dies Wort ist mit ihm und seinem Leben laut geworden und hat sich im Wort des Evangeliums zur Sprache gebracht. Dieses Wort des Herrn in Menschenwort stellt die Welt und unser Leben in das Licht der Wahrheit und erleuchtet unseren Weg.^pSo nahe ist der Herr, dass er über alle Zeiten hinweg, ja dass er über die Grenze zwischen Himmel und Erde hinweg uns mit seinem Wort erreicht und sich uns glaub-würdig macht, dass wir ihn und sein Heil im Glauben erkennen und erfahren können.^pAber die nächste Nähe des Herrn erfahren wir, wenn er sich uns unter den einfachen Zeichen von Brot und Wein auf die Lippen legt und so uns selbst sich mitteilt und mit sich sein ganzes Heil. So nahe ist er, dass wir nur im Glauben unseren Mund zu öffnen brauchen, und wir werden von ihm gespeist."
        }
    },
    "Dez24": {
        second: {
            patr_autor: "Franz von Sales († 1622)",
            patr_werk: "Aus einer Predigt zur Vigil von Weihnachten.",
            patr_text: "^hMorgen werdet ihr seine Herrlichkeit sehen^pDie heilige Kirche ist gewohnt, uns am Vorabend der großen Feste vorzubereiten, damit wir begierig sind, die großen Gnadenerweise zu erkennen, die wir in ihnen von Gott empfangen haben. Wenn die Christen der Urkirche unserem Herrn gewissermaßen Genugtuung leisten wollten für sein Blut, das er bei seinem Tod am Kreuz so freigebig vergossen hat, dann waren sie sorgsam bedacht, die Zeit der Feste recht zu nutzen und sie möglichst ganz zu feiern.^pDie heilige Kirche will also, dass wir uns in der Vigil des heiligen Weihnachtsfestes vorbereiten, und als ganz liebenswürdige Mutter will sie nicht, dass wir von einem so großen Geheimnis unvorbereitet überrascht werden; deshalb sagt sie uns die Worte: „Heute sollt ihr wissen, dass unser Herr morgen kommt.“ Das heißt soviel wie: Morgen wird er geboren, und ihr werdet ihn als ganz kleines Kind in einer Krippe liegend sehen{1#vgl. Lk 2,12}. Dabei hat sie keine andere Absicht, als zu erreichen, dass wir unseren Verstand in die Betrachtung der Größe des Geheimnisses der hochheiligen Geburt unseres Herrn versenken.^pUm das möglichst gut zu machen, werden wir vor allem unseren Verstand demütigen und anerkennen, dass er in keiner Weise fähig ist, auf den Grund dieses großen Geheimnisses vorzudringen, das ein wahrhaft christliches Mysterium ist.^pIch sage „christlich“, weil nur die Christen jemals begreifen konnten, dass Gott Mensch und der Mensch vergöttlicht wurde. Es ist ja ein Geheimnis, das verborgen ist im Dunkel und in der Finsternis der Nacht; nicht als ob das Geheimnis dunkel in sich selbst wäre, denn Gott ist nur Licht{2#vgl. Joh 1,5.9}.^pMan weiß ja, dass unsere Augen nicht fähig sind, das Licht oder die Klarheit der Sonne zu betrachten, ohne zu erblinden (wenn wir es unternehmen wollten, dieses Licht zu betrachten, sind wir gezwungen, die Augen zu schließen, und sind einige Zeit unfähig, etwas zu sehen). Ebenso liegt das, was uns daran hindert, das Geheimnis der hochheiligen Geburt unseres Herrn zu begreifen, nicht daran, dass es in sich dunkel wäre, sondern daran, dass es nichts als helles Licht ist.^pUnser Verstand, der das Auge unserer Seele ist, kann es nicht lange betrachten, ohne sich zu trüben, und muss demütig bekennen, dass er dieses Geheimnis nicht ergründen kann, um zu begreifen, wie Gott im jungfräulichen Schoß der allerseligsten Jungfrau Fleisch angenommen hat und Mensch geworden ist gleich uns, um uns Gott ähnlich zu machen."
        }
    },
    "Dez25": {
        first: {
            resp1: "Vom Himmel stieg herab der wahre Gott^SLICE, vom Vater geboren. Er scheute nicht den Schoß der Jungfrau und nahm an das Fleisch des Menschen, in dem Adam geschaffen war,",
            resp2: "und ist uns sichtbar erschienen, Gott und Mensch, Licht und Leben, Schöpfer der Welt.",
            resp3: "Durch ihn ist alles geschaffen, für uns Menschen und um unseres Heiles willen stieg er vom Himmel herab"
        },
        second: {
            patr_resp1: "Das Wort ist Fleisch geworden und hat unter uns gewohnt,",
            patr_resp2: "und wir haben seine Herrlichkeit gesehen, die Herrlichkeit des einzigen Sohnes vom Vater, voll Gnade und Wahrheit.",
            patr_resp3: "Er erschien auf der Erde und verkehrte unter den Menschen,"
        }
    },
    "Dez31": {
        second: {
            patr_autor: "Hugo Rahner († 1968)",
            patr_werk: "Aus dem Buch „Maria und die Kirche“.",
            patr_text: "^hMaria ist Mutter der Glieder Christi^pDer Urbeginn unserer Erlösung liegt in dem unbegreiflichen Ratschluss des ewigen Vaters, seinen eingeborenen Sohn uns als Menschen zu schenken. In diesem göttlichen Gnadenentschluss ist aber auch mitgegeben der von eben dieser Gnade angerührte und ermöglichte freie Entschluss jenes Menschenkindes, das auserwählt ward, Mutter des Menschensohnes zu werden. In dem freien Ja der Jungfrau Maria ist gleichsam alles schon eingeschlossen, was je im Lauf der Erlösungsgeschichte an Gnade und Gottesliebe sich in das Geschlecht des Adam ergießen wird. Das Jawort der Jungfrau ist in einem wahren Sinn der Anfang der Kirche. Augustinus hat dies in einem berühmten Wort ausgesprochen: „Wahrlich, Maria ist auch die Mutter der Christusglieder, die wir selber sind. Denn sie hat mitgewirkt in Liebe, dass Glaubende in der Kirche geboren werden, Glaubende, die da sind die Glieder jenes Hauptes, dessen Mutter sie leiblich wurde.“{1#Augustinus, De sancta virginitate 6}^pDiese „liebende Mitwirkung“ ist zunächst einmal ihr Jawort, das den Einstrom der göttlichen Begnadigung in das ganze Menschengeschlecht durch die Menschwerdung Gottes ermöglicht hat. Im jungfräulichen Schoß Marias beginnt also, wie die Väter so oft sagen, in Wahrheit die Existenz der Kirche. Denn durch die hochzeitliche Vereinigung von Gottheit und Menschheit in der einen Person Christi ist der weltgestaltende Heilsschluss des Vaters festgelegt und begonnen: alles, was nun folgt, vom erlösenden Kreuz dieses aus Maria für den Vater geborenen Menschenkindes bis zur Vollendung in der herrlichen Wiederkunft des Gottmenschen, also die ganze Geschichte der Kirche, ist Entfaltung des Geheimnisses, das sich am Herzen Marias vollzog. Es ist das eigentliche Mysterium der Kirche – so wie es einmal in einem wundervollen Hymnus des achten Jahrhunderts heißt: „Das Mysterium der Kirche wollen wir besingen in einem Hymnus auf Christus, den die mütterliche Frau geboren hat, das Wort des Vaters. Groß nämlich ist das Mysterium, das Maria anvertraut ward.“{2#vgl.°Analecta Hymnica 51} Jenes „große Mysterium“, von dem Paulus in Bezug auf die Kirche spricht, beginnt schon in Marias Schoß.^pIn der klassischen Diktion seiner Theologie hat uns dieses Geheimnis der Kirche der heilige Papst Leo in einer seiner Weihnachtspredigten verkündet: „Indem wir die Menschwerdung unseres Erlösers anbeten, feiern wir offenbar auch den Beginn unseres eigenen Lebens. Ist doch die Zeugung Christi der Ursprung des christlichen Volkes. Der Geburtstag des Hauptes ist zugleich der Geburtstag des Leibes. Mag auch jeder einzelne von den Berufenen seinen besonderen Stand haben, mögen auch alle Kinder der Kirche durch die Folge der Zeiten voneinander getrennt sein: die Gesamtheit aller Gläubigen, die aus dem Taufquell hervorgingen, ist mit Christus in seiner Geburt geboren worden.“{3#Leo der Große, Sermo 26,2} Weihnacht ist für die alte Kirche ein Fest der Kirche, Maria der Inbegriff aller Mysterien, die sich in unserer Wiedergeburt an uns selbst vollziehen."
        }
    },
    "Jan1": {
        second: {
            patr_autor: "Walther von der Vogelweide († um 1230) zugeschrieben",
            patr_werk: "An Maria.",
            patr_text: "^h^pMaria klar,^ßviel hochgelobte Herrin, süße,^lHilf mir durch deines Kindes Ehr,^ßdass ich die Sünde büße.^lDu flutige Flut der Tugend,^ßErbarmung, aller Güte,^lDer süße Gottesgeist^ßaus deinem edlen Herzen blühte:^lEr ist dein Kind,^ßdein Vater und dein Schöpfer. ^pWohl uns, dass du^ßihn durftest einst gebären!^lDen Höhe, Tiefe, Breite, Länge^ßnie umgreifen ging,^lDein kleiner Leib^ßmit süßer Keusche ihn umfing,^lKein Wunder gleicht^ßdem wunderbaren Ding:^lDer Engel Königin,^ßdu trugst ihn ohne alle Schweren."
        }
    },
    "Jan3": {
        second: {
            patr_autor: "Theresia vom Kinde Jesus (†°1897)",
            patr_werk: "Aus einem Brief an Schwester Marie du Sacré-Cœur.",
            patr_text: "^hMeine Berufung ist die Liebe^pAls beim Gebet meine Begierden mich ein wahres Martyrium erleiden ließen, schlug ich die Briefe des hl. Paulus auf, um irgendeine Antwort zu suchen. Das 12. und 13. Kapitel des ersten Korintherbriefes fiel mir in die Hände. Ich las im ersten, dass nicht alle zugleich Apostel, Propheten, Lehrer usw. sein können, dass die Kirche sich aus verschiedenen Gliedern zusammensetzt und dass das Auge nicht zugleich Hand sein kann {1#vgl.°1 Kor 12,29.12.21}.^pDie Antwort war klar, stillte aber mein Sehnen nicht und brachte mir keinen Frieden. Wie Magdalena sich immer wieder über das leere Grab beugte und schließlich fand, was sie suchte, so erniedrigte ich mich bis in die Tiefen meines Nichts, und da erhob ich mich so hoch, dass ich mein Ziel erreichte {2#Hl. Johannes vom Kreuz, Gedichte, Zweiter Gesang über eine Ekstase}. Ohne mich entmutigen zu lassen, setzte ich meine Lesung fort und fand Trost in folgendem Satz: „Strebt eifrig nach den vollkommensten Gaben, aber ich will euch einen noch vorzüglicheren Weg zeigen.“ {3#1 Kor 12,31} Und der Apostel erklärt, wie die vollkommenen Gaben nichts sind ohne die Liebe. Dass die Liebe {4#charité – die christliche Gottes- und Nächstenliebe} der vortreffliche Weg ist, der mit Sicherheit zu Gott führt.^pEndlich hatte ich Ruhe gefunden. Den mystischen Leib der Kirche betrachtend, hatte ich mich in keinem der von hl. Paulus geschilderten Glieder wiedererkannt, oder vielmehr, ich wollte mich in allen wiedererkennen. Die Liebe gab mir den Schlüssel meiner Berufung. Ich begriff, dass wenn die Kirche einen aus verschiedenen Gliedern bestehenden Leib hat, ihr auch das notwendigste, das edelste von allen nicht fehlt; ich begriff, dass die Kirche ein Herz hat und dass dieses Herz von Liebe brennt. Ich erkannte, dass die Liebe allein die Glieder der Kirche in Tätigkeit setzt, und würde die Liebe erlöschen, so würden die Apostel das Evangelium nicht mehr verkünden, die Märtyrer sich weigern, ihr Blut zu vergießen. Ich begriff, dass die Liebe alle Berufungen in sich schließt, dass die Liebe alles ist, dass sie alle Zeiten und Orte umspannt. Mit einem Wort, dass sie ewig ist!^pDa rief ich im Übermaß meiner überschäumenden Freude: O Jesus, meine Liebe, endlich habe ich meine Berufung gefunden, meine Berufung ist die Liebe!^pJa, ich habe meinen Platz in der Kirche gefunden, und diesen Platz, mein Gott, den hast du mir geschenkt; im Herzen der Kirche, meiner Mutter, werde ich die Liebe sein, so werde ich alles sein."
        }
    },
    "Jan4": {
        second: {
            patr_autor: "Reginald Garrigou-Lagrange (†°1964)",
            patr_werk: "Aus dem Buch „Mystik und christliche Vollendung“.",
            patr_text: "^hDie vollkommene Liebe^pNach dem heiligen Johannes vom Kreuz findet sich die wahre, auf Erden noch mögliche Vollkommenheit nur in der umbildenden Vereinigung oder geistigen Vermählung {1#Geistl. Gesang, III.°Teil, 22.°Strophe}. Es erfüllt sich da, was im Hohenliede geschrieben steht: „Schon ist der Winter vorüber, der Regen hat aufgehört und ist vergangen, schon erscheinen die Blumen in unserem Lande.“ {2#vgl.°Hld°2,11}^pDas ist die volle Entfaltung der Liebe. Die vollkommene Liebe nimmt Gottes wegen jedes Werk oder jedes Opfer auf sich, sie findet darin sogar eine heilige Freude {3#a.a.O.°24.°Strophe}. Sie schreckt vor dem Tode nicht zurück, sondern wünscht ihn herbei; nichts schreibt sie sich selbst zu, sondern bezieht alles auf Gott. In ihn bildet sie sich gewissermaßen um nach dem Wort des heiligen Paulus: „Wer aber dem Herrn anhängt, ist^w ein ^0wGeist mit ihm.“ {4#vgl.°1°Kor°6,17}^p„Gott selbst ist es, der sich ihr in wunderbarer Herrlichkeit mitteilt und sie umgestaltet. In diesem Stande werden beide eins wie das Glas und der Sonnenstrahl, wie die Kohle und das Feuer, wie das Licht der Sterne und das Sonnenlicht, wenn auch diese Vereinigung noch nicht so wesenhaft und so vollkommen ist wie im anderen Leben.“ {5#a.a.O.°26.°Strophe}"
        }
    },
    "Jan5": {
        second: {
            patr_autor: "Ernest Hello (†°1885)",
            patr_werk: "Aus dem Buch „Der Mensch“.",
            patr_text: "^hDie christliche Liebe^pMan sollte sich doch darüber klar sein: Je schöner ein Wort ist, um so gefährlicher ist es. Es lässt sich gar nicht sagen, welch ungeheure Bedeutung die Sprache hat. Worte sind Brot oder Gift, und die allgemeine Verwirrung ist eines der Kennzeichen unserer Zeit. Durch ihre Nachgiebigkeit werden die Zeichen, die der Sprache zur Verfügung stehen, zu furchtbaren Werkzeugen. Jeden beliebigen Missbrauch kann man mit ihnen treiben, sie widersprechen nicht. Sie lassen sich ruhig entehren, und die Entstellung der Worte offenbart sich lediglich durch die gründliche Unordnung, die sie in der Wirklichkeit anrichtet.^pEs gibt ein Wort des heiligen Paulus, dessen Tiefe unbekannt ist: Der Heide, erklärte er, der Berge versetzte und hätte die Liebe nicht, so wäre er nichts. Dies Wort hat einen Umfang, den nur wenige kennen. Der es gesprochen, wusste um seltsame Geheimnisse.^p„Der Teufel ist der, der nicht liebt“, hat die heilige Theresia gesagt, und die heilige Brigitte hat dies schreckliche Geständnis aus dem Munde des Verfluchten selbst vernommen. Da der Teufel zu Jesus spricht, sagt er ihm die Worte: „Richter, ich bin die Kälte.“^p„Wer nicht liebt, ist nichts“, sagt der heilige Paulus.^pWie verhält sich das Nichts zur Sünde? Welchen Namen trüge die Liebe in einer Sprache, die höher stünde als die unsere? Wäre es nicht ein und derselbe Name? Wie tiefe Geheimnisse auch die fleischliche Liebe hüten mag, in der sittlichen Ordnung ist die Liebe jedenfalls das Gesetz des Lebens. Sie ist der Urgrund selber der Tätigkeit. Hätten die Menschen nicht gar soviel Geschäfte am Halse, so könnten sie vielleicht einen Augenblick über diese Dinge nachdenken. Sie ist zu alltäglich, um bemerkt, zu tief, um verstanden zu werden.^pAber eben deshalb, weil die Liebe^w das ^0werhabene Ding und^w die ^0wWirklichkeit in des Wortes verwegenster Bedeutung, dazu das Knochenmark der Schöpfung ist, gerade deswegen muss es ganz besonders gefährlich sein, wenn die Liebe missbraucht und ihr Name falsch angewendet wird. Das Beste wird, wenn es verdorben wird, zum Allerschlechtesten. Je schöner der Name Liebe, um so schrecklicher ist er! Und wenn er sich nun mit der Macht bewaffnet, die er für das Leben empfing und sie gegen die Wahrheit kehrt, so wird er dem Tode jeden Dienst leisten. Immer dann, wenn man sich mit dem Irrtum unter dem Vorwand, die Menschen zu schonen, verträgt, statt ihn auszurotten, richtet man den Namen der Liebe wider das Licht. Und so schafft man sich womöglich den Vorwand, sich das Schlechte in der eigenen Seele, das Schlechte, das man so gerne hätschelt, zu verzeihen.^pDer Mensch wird gegenüber der Schwäche, die Besitz von ihm ergreifen will, weichlich, sobald es ihm erst einmal zur Gewohnheit geworden ist, die völlige Anpassung an jedwede Schwäche Liebe zu nennen."
        }
    },
    "Kirchweihe": {
        second: {
            patr_autor: "Augustinus († 430)",
            patr_werk: "Aus einer Predigt zur Weihe einer Kirche. (Sermo°336^v,1.6^0v)",
            patr_text: "^hDer Aufbau und die Weihe des°Hauses°Gottes°in°uns^pWir sind hier versammelt, um ein Haus des Gebets feierlich zu weihen. Dies hier ist also ein Haus für unser Beten; Haus Gottes dagegen sind wir selbst. Wenn wir selbst Haus Gottes sind, werden wir in dieser Welt aufgebaut, um am Ende der Zeiten geweiht zu werden. Das Bauwerk, vor allem das Bauen, bringt Mühsal, die Weihe Jubel.^pWas hier geschah, als diese Mauern erstanden, ereignet sich nun, da die Christusgläubigen sich versammeln. Im Glauben werden sozusagen in den Wäldern die Hölzer gefällt und in den Bergen die Steine gebrochen. Werden aber die Glaubenden unterrichtet, getauft und herangebildet, ist es, als würden sie von den Händen der Zimmerleute und Steinmetzen behauen, gerichtet und geglättet.^pAber sie werden nicht zum Haus des Herrn, wenn sie nicht durch die Liebe verbunden werden. Wenn diese Hölzer und Steine nicht nach einem bestimmten Bauplan miteinander zusammenhingen, wenn sie nicht friedlich ineinandergefügt wären, wenn sie einander nicht gewissermaßen lieb hätten, niemand würde hier eintreten. Wenn du jedoch siehst, dass in einem Gebäude Hölzer und Steine gut miteinander zusammenhängen, trittst du unbesorgt ein und fürchtest keinen Einsturz.^pAls darum Christus der Herr eintreten und in uns wohnen wollte, sagte er gewissermaßen als Baumeister: „Ein neues Gebot gebe ich euch: Liebet einander“ {1#Joh 13, 34}. Ich gebe euch ein Gebot, sagt er: Ihr wart alt, bautet mir noch kein Haus, lagt in Trümmern. Nun liebt einander, damit ihr aus eurer alten Trümmerstätte herauskommt.^pDenkt also daran, meine Lieben, dass dieses Haus auf der ganzen Erde gebaut wird; so ist es vorausgesagt und versprochen. Denn als der Tempel nach der Gefangenschaft erbaut wurde, hieß es, wie in einem andern Psalm steht: „Singt dem Herrn ein neues Lied, singt dem Herrn, alle Lande“ {2#Ps 96, 1}.^pWas dort hieß „neues Lied“, hieß beim Herrn „neues Gebot“. Denn was soll „neues Lied“, wenn nicht „neue Liebe“?! Wer liebt, muss singen. Dieses Sängers Stimme ist das Feuer heiliger Liebe.^pWas wir in diesen Wänden leiblich vollbracht sehen, geschehe geistig in den Herzen, und was wir hier vollendet sehen in Stein und Holz, möge, erbaut von Gottes Gnade, in eurem Leib vollendet werden.^pIn erster Linie wollen wir also dem Herrn, unserem Gott, danken, von dem jede gute Gabe und jedes vollkommene Geschenk kommt {3#Jak 1, 17}. Seine Güte wollen wir mit der ganzen Freudigkeit des Herzens loben, weil er für den Bau dieses Hauses des Gebets den Geist seiner Gläubigen besucht, ihr Herz angespornt, ihre Mühen hilfreich mitgetragen hat.^pAls sie noch nicht wollten, hat er sie zum Wollen erweckt. Die Regungen ihres guten Wollens hat er unterstützt zum Vollbringen. So hat Gott, der in den Seinen „das Wollen und das Vollbringen nach seinem Wohlgefallen wirkt“ {4#Phil 2,13 Vg}, dies alles selbst begonnen und selbst vollendet {5#vgl. Phil 1,6}.",
            patr_resp1: "Wie liebenswert ist deine Wohnung, Herr der Heerscharen!",
            patr_resp2: "Meine Seele verlangt und sehnt sich nach den Vorhöfen des Herrn.^Ö",
            patr_resp3: "Selig, die in deinem Hause wohnen, die dich allezeit loben.",
        },
    },
    "MUSTERsecond": {
        second: {
            patr_autor: "",
            patr_werk: "",
            patr_text: ""
        }
    },
    "VerstVesper": {
        first: {
            resp1: "Herr, in deinem Erbarmen",
            resp2: "gib ihnen ewige Ruhe.",
            resp3: "Du wirst kommen in Herrlichkeit, zu richten die Lebenden und die Toten,",
            resp1_lat: "In misericórdia tua, Dómine,",
            resp2_lat: "dona eis réquiem.",
            resp3_lat: "Qui ventúrus es iudicáre vivos et mórtuos,"
        },
    },
    "MUSTER": {
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
    // Weitere Stichwörter können hier ergänzt werden
};