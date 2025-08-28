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

    // State für beide Lesungen - jetzt mit Index 0+ für Alternativen
    const [selectedLecture, setSelectedLecture] = useState({
        first: 0,    // 0 für Standard, 1+ für Alternativen
        second: 0    // 0 für Standard, 1+ für Alternativen
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
            return formatPrayerText(text1 + connector + text2)
        }

        const abbreviate = (text) => {
            if (!text) return text;

            const sliceIndex = text.indexOf('^SLICE');
            if (sliceIndex !== -1) {
                text = text.substring(0, sliceIndex);
            }
            return formatPrayerText(text.replace(/[.!?;:,]+$/, '') + '\u00a0…');
        };

        const checkLanguageField = (field, alternativeData) => {
            if (!field || !alternativeData) return null;

            const languageField = field + localPrefLanguage;

            if (getValue(field)?.endsWith(localPrefLanguage)) {
                return alternativeData[languageField] || alternativeData[field] || null;
            }
            else return alternativeData[field] || null;
        }

        const firstKeyword = extractKeyword('les_buch');
        const secondKeyword = extractKeyword('patr_autor');

        // Neue Struktur: lectureAlternatives[keyword].first/second ist jetzt ein Array
        const firstAlternatives = lectureAlternatives[firstKeyword]?.first || [];
        const secondAlternatives = lectureAlternatives[secondKeyword]?.second || [];

        // Erstelle Buttons für erste Lesung
        const firstReadings = [];

        // Standard-Button (immer Index 0)
        if (firstKeyword && firstAlternatives.length > 0) {
            firstReadings.push({
                index: 0,
                buttonText: chain(getValue('les_buch'), getValue('les_stelle')),
                buttonResp: abbreviate(getValue('resp1')),
                hasText: !!getValue('les_text'),
                onlyResp: !getValue('les_text') && !!getValue('resp1')
                // Kein content für Standard (wird mit getValue geholt)
            });
        }

        // Alternative Buttons
        firstAlternatives.forEach((altData, index) => {
            if (!altData) return;

            firstReadings.push({
                index: index + 1, // +1 wegen Standard bei Index 0
                buttonText: chain(
                    checkLanguageField('les_buch', altData),
                    checkLanguageField('les_stelle', altData)
                ),
                buttonResp: abbreviate(checkLanguageField('resp1', altData)),
                hasText: !!altData.les_text,
                onlyResp: !altData.les_text && !!altData.resp1,
                content: altData // Vollständiger Inhalt der Alternative
            });
        });

        // Erstelle Buttons für zweite Lesung
        const secondReadings = [];

        // Standard-Button (immer Index 0)
        if (secondKeyword && secondAlternatives.length > 0) {
            secondReadings.push({
                index: 0,
                buttonText: chain(getValue('patr_autor'), getValue('patr_werk'), ':'),
                buttonResp: abbreviate(getValue('patr_resp1')),
                hasText: !!getValue('patr_text'),
                onlyResp: !getValue('patr_text') && !!getValue('patr_resp1')
                // Kein content für Standard (wird mit getValue geholt)
            });
        }

        // Alternative Buttons
        secondAlternatives.forEach((altData, index) => {
            if (!altData) return;

            secondReadings.push({
                index: index + 1, // +1 wegen Standard bei Index 0
                buttonText: chain(
                    checkLanguageField('patr_autor', altData),
                    checkLanguageField('patr_werk', altData),
                    ':'
                ),
                buttonResp: abbreviate(checkLanguageField('patr_resp1', altData)),
                hasText: !!altData.patr_text,
                onlyResp: !altData.patr_text && !!altData.patr_resp1,
                content: altData // Vollständiger Inhalt der Alternative
            });
        });

        return {
            first: {
                hasAlternatives: firstReadings.length > 1,
                hasAlternativeText: firstReadings.some(b => b.index > 0 && b.hasText),
                onlyAlternativeResp: firstReadings.some(b => b.index > 0 && b.onlyResp),
                alternatives: firstReadings
            },
            second: {
                hasAlternatives: secondReadings.length > 1,
                hasAlternativeText: secondReadings.some(b => b.index > 0 && b.hasText),
                onlyAlternativeResp: secondReadings.some(b => b.index > 0 && b.onlyResp),
                alternatives: secondReadings
            }
        };
    }, [getValue, localPrefLanguage]);

    // Funktion für die Auswahl der anzuzeigenden Daten
    const selected = (field) => {
        const lectureType = field.startsWith('patr_') ? 'second' : 'first';
        const selectedIndex = selectedLecture[lectureType];
        const languageField = field + localPrefLanguage;

        // Wenn Index 0 (Standard) oder keine Alternativen, verwende Standard-Werte
        if (selectedIndex === 0 ||
            !availableAlternatives[lectureType].hasAlternatives) {
            return getValue(field);
        }

        // Alternative aus content verwenden
        const alternative = availableAlternatives[lectureType].alternatives
            .find(alt => alt.index === selectedIndex);
        if (!alternative?.content) return getValue(field);

        return alternative.content[languageField]
            || alternative.content[field]
            || getValue(field);
    };

    // DRY: Gemeinsame Funktion für Auswahl-Buttons
    const renderSelectionButtons = (lectureType, lectureMeta) => {
        const { alternatives, onlyAlternativeResp: onlyResp } = lectureMeta;
        const currentSelection = selectedLecture[lectureType];

        const handleSelectionChange = (index) => {
            setSelectedLecture(prev => ({
                ...prev,
                [lectureType]: index
            }));
        };

        const getButtonColor = (index) => {
            if (index === 0) { // Standard
                return 'btn-default';
            }
            return 'btn-brown';
        };

        return (
            <div className="mb-4">
                {alternatives.map((button) => (
                    <button
                        key={button.index}
                        onClick={() => handleSelectionChange(button.index)}
                        className={`w-full text-sm text-left pl-2 pt-2 pb-1 mt-1 rounded ${button.index > 0 ? 'mr-2' : ''}
                            ${getButtonColor(button.index)}
                            ${currentSelection === button.index ? 'ring-2 ring-yellow-500' : ''}`}
                    >
                        <div className="flex items-baseline gap-0">
                            <div className="opacity-70 shrink-0 w-10">
                                {button.index === 0 ? '' : 'Oder:'}
                            </div>
                            <div>
                                {onlyResp
                                    ? button.buttonResp
                                    : button.buttonText}
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        );
    };

    // Reset selections when alternatives change
    useEffect(() => {
        //console.log('availableAlternatives aktualisiert:', availableAlternatives);
        setSelectedLecture(prev => ({
            first: availableAlternatives.first.hasAlternatives ?
                (prev.first >= availableAlternatives.first.alternatives.length ? 0 : prev.first) : 0,
            second: availableAlternatives.second.hasAlternatives ?
                (prev.second >= availableAlternatives.second.alternatives.length ? 0 : prev.second) : 0
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

const lectureAlternatives = {
    "q-4-0": {
        second: [{
            patr_autor: "Augustinus († 430)",
            patr_werk: "Zum Johannesevangelium.",
            patr_text: "^hDie Heilung des Blindgeborenen^pÜber den Blindgeborenen, den der Herr Jesus sehend gemacht hat, ist eine lange Lesung vorgetragen worden. In aller Kürze gebe ich das Mysterium dieses sehend gewordenen Blinden zu überlegen.^pWas unser Herr Jesus Christus da getan hat, ist erschreckend und wunderbar. Es sind Werke, und es sind Worte; Werke, weil es getan wurde, Worte, weil es Zeichen sind.^pWenn wir also darüber nachdenken, was der Vorgang eigentlich bedeutet, so kommen wir zu dem Ergebnis: der Blinde ist das Menschengeschlecht. Zu dieser Blindheit kam es beim ersten Menschen durch die Sünde; von ihm kommen wir alle her, von ihm haben wir nicht nur den Tod, sondern auch die Sünde.^pWenn die Blindheit der Unglaube ist und das Sehendwerden der Glaube, wen hat Christus glaubend vorgefunden, als er kam? Der Apostel, der doch aus dem Geschlecht der Propheten stammt, sagt: „Auch wir waren von Natur aus Kinder des Zorns wie die anderen“.{1#Eph 2,3} Waren wir aber Kinder des Zorns, dann waren wir auch der Rache, der Strafe, der Hölle verfallen.^pWieso ‚von Natur aus‘? Weil der erste Mensch gesündigt hat, nistete das Böse sich in die Natur ein. Wenn sich das Böse in die Natur einnistet, dann ist dem Sinn nach jeder Mensch blind geboren. Sieht er nämlich, dann braucht er keinen Führer und keinen, der ihn sehend macht. Braucht er aber einen Blindenführer und einen, der ihn sehend macht, dann ist er blind von Geburt an.^pDer Herr kam! Was tat er? Er schenkte uns ein großes Mysterium. „Er spie auf die Erde“ und machte mit seinem Speichel einen Teig; denn das Wort ist Fleisch geworden. Er salbte die Augen des Blinden. Nun war er gesalbt, sah aber noch nicht.^pEr schickte ihn zum Teich Schiloach. Es ist eine Erklärung des Evangelisten, wenn da steht: „das heißt übersetzt ‚der Gesandte‘“. Ihr wisst, wer der Gesandte ist. Wäre er nicht gesandt, dann wäre keiner von uns aus der Schuld entlassen. Er wusch also die Augen in dem Teich, der ‚Gesandter‘ heißt: Er wurde getauft in Christus! Als Christus ihn in sich taufte, da machte er ihn sehend. Vielleicht machte er ihn zum Katechumenen, als er ihn salbte.",
            patr_resp1: "Jesus sprach zum Blinden: Geh, wasche dich im Teiche Schiloach.",
            patr_resp2: "Der Blinde wusch sich und konnte sehen.",
            patr_resp3: "Erschreckend und wunderbar ist, was unser Herr getan hat!"
        }]
    },
    "Fronleichnam": {
        second: [{
            patr_autor: "Thomas von Aquin († 1274)",
            patr_werk: "Sequenz zum Fronleichnamsfest.",
            patr_text: "^h^pLauda, Sion, Salvatórem,^llauda ducem et pastórem^lin hymnis et cánticis.^lQuantum potes, tantum aude,^lquia maior omni laude,^lnec laudáre súfficis.^pLaudis thema speciális,^lpanis vivus et vitális^lhódie propónitur.^lQuem in sacræ mensa cœnæ^lturbæ fratrum duodénæ^ldatum non ambígitur.^pSit laus plena, sit sonóra;^lsit iucúnda, sit decóra^lmentis iubilátio.^lDies enim solémnis ágitur^lin qua mensæ prima recólitur^lhuius institútio.^pIn hac mensa novi Regis^lnovum Pascha novæ legis^lphase vetus términat.^lVetustátem nóvitas,^lumbram fugat véritas,^lnoctem lux elíminat.^pQuod in cœna Christus gessit,^lfaciéndum hoc expréssit^lin sui memóriam:^lDocti sacris institútis^lpanem, vinum in salútis^lconsecrámus hóstiam.^pDogma datur Christiánis,^lquod in carnem transit panis^let vinum in sánguinem.^lQuod non capis, quod non vides,^lanimósa firmat fides^lpræter rerum órdinem.^pSub divérsis speciébus,^lsignis tantum et non rebus,^llatent res exímiæ:^lCaro cibus, sanguis potus,^lmanet tamen Christus totus^lsub utráque spécie.^pA suménte non concísus,^lnon confráctus, non divísus^línteger accípitur.^lSumit unus, sumunt mille,^lquantum isti, tantum ille,^lnec sumptus consúmitur.^pSumunt boni, sumunt mali,^lsorte tamen inæquáli,^lvitæ vel intéritus:^lMors est malis, vita bonis,^lvide paris sumptiónis^lquam sit dispar éxitus.^pFracto demum sacraménto,^lne vacilles, sed meménto^ltantum esse sub fragménto,^lquantum toto tégitur.^pNulla rei fit scissúra,^lsigni tantum fit fractúra,^lqua nec status nec statúra^lsignáti minúitur^pEcce panis Angelórum,^lfactus cibus viatórum,^lvere panis filiórum,^lnon mitténdus cánibus!^pIn figúris præsignátur,^lcum Isaac immolátur,^lagnus Paschæ deputátur,^ldatur manna pátribus.^pBone pastor, panis vere,^lJesu, nostri miserére,^ltu nos pasce, nos tuére,^ltu nos bona fac vidére^lin terra vivéntium.^pTu qui cuncta scis et vales,^lqui nos pascis hic mortáles,^ltuos ibi commensáles,^lcohærédes et sodáles^lfac sanctórum cívium.^lAmen. Allelúja."
        }]
    },
    "j-11-2": {
        first: [{
            les_buch: "Aus dem Buch der Richter.",
            les_stelle: "5,1-21",
            les_text: "^hDas Debora-Lied^pDebora und Barak, der Sohn Abinoams, sangen an jenem Tag dieses Lied:^pDass Führer Israel führten^lund das Volk sich bereit zeigte,^ldafür preist den Herrn!^lHört, ihr Könige, horcht auf, ihr Fürsten!^lIch will dem Herrn zu Ehren singen,^lich will zu Ehren des Herrn,^ldes Gottes Israels, spielen.^pHerr, als du auszogst aus Seir,^lals du vom Grünland Edoms heranschrittest,^lda bebte die Erde, die°Himmel°ergossen°sich,^lja, aus den Wolken ergoss sich das Wasser.^lDie Berge wankten vor°dem°Blick°des°Herrn,^lvor dem Blick des Herrn, des Gottes Israels.^pIn den Tagen Schamgars, des°Sohnes°des°Anat,^lin den Tagen Jaëls lagen°die°Wege°verlassen°da;^lwer unterwegs war, musste°Umwege°machen.^lBewohner des offenen Landes gab°es°nicht°mehr,^les gab sie nicht mehr in Israel,^lbis du dich erhobst, Debora,^lbis du dich erhobst, Mutter in Israel.^pMan hatte sich neue Götter erwählt.^lEs gab kein Brot an den Toren.^lSchild und Speer waren°nicht°mehr°zu°sehen^lbei den Vierzigtausend in Israel.^pMein Herz gehört Israels Führern.^lIhr, die ihr bereit seid im Volk,^lpreist den Herrn!^lIhr, die ihr auf weißen Eselinnen reitet,^ldie ihr auf Teppichen sitzt,^ldie ihr auf der Straße dahinzieht,^lsingt!^pHorch, sie jubeln zwischen den Tränken,^ldort besingt man die°rettenden°Taten°des°Herrn,^lseine hilfreiche Tat an den Bauern in Israel.^lDamals zog das Volk des Herrn hinab°zu°den°Toren.^pAuf, auf, Debora!^lAuf, auf, sing ein Lied!^lErheb dich, Barak,^lführ deine Gefangenen heim, Sohn°Abinoams!^lDann stieg herab,^lwas übrig ist unter°den°Herrlichen°des°Volkes.^lDer Herr steige herab mit°mir°unter°den°Helden.^pAus Efraim zogen sie hinunter ins Tal,^lhinter ihnen Benjamin mit seinen Scharen;^lvon Machir stiegen die Führer hinab,^lvon Sebulon die, die das Zepter tragen.^lDie Fürsten Issachars zusammen°mit°Debora^lund wie Issachar so auch Barak,^lins Tal getragen von seinen Füßen.^pIn Rubens Bezirken überlegte°man°lange.^lGilead bleibt jenseits des Jordan.^lWarum verweilt Dan bei den Schiffen?^lAscher sitzt am Ufer des Meeres,^lbleibt ruhig an seinen Buchten.^lSebulon ist ein Volk, das°sein°Leben°aufs°Spiel°setzt,^lauch Naftali auf den Höhen des Feldes.^pKönige kamen und kämpften,^ldamals kämpften Kanaans Könige^lin Taanach, an den Wassern Megiddos,^ldoch Beute an Silber machten sie nicht.^lVom Himmel her kämpften die Sterne,^lvon ihren Bahnen aus kämpften°sie°gegen°Sisera.^lDer Bach Kischon schwemmte sie fort,^lder altberühmte Bach, der Bach Kischon.^pMeine Seele soll auftreten mit Macht.^lDamals stampften die Hufe der Pferde^lim Jagen, im Dahinjagen der Hengste.^lIhr sollt Meros verfluchen,^lspricht der Engel des Herrn.^lMit Flüchen flucht seinen Bewohnern;^ldenn sie kamen dem Herrn nicht zu Hilfe,^lzu Hilfe dem Herrn unter den Helden.^pGepriesen sei Jaël unter den Frauen,^ldie Frau des Keniters Heber,^lgepriesen unter den Frauen im Zelt.^lEr hatte Wasser verlangt, sie°gab°ihm°Milch,^lin einer prächtigen Schale reichte sie Sahne.^lIhre Hand streckte sie aus nach dem Pflock,^lihre Rechte nach°dem°Hammer°des°Schmieds.^lSie erschlug Sisera, zermalmte sein Haupt,^lzerschlug, durchbohrte seine Schläfe.^lZu ihren Füßen brach er zusammen,^lfiel nieder, lag da,^lzu ihren Füßen brach er zusammen, fiel°nieder.^lWo er zusammenbrach, da lag er vernichtet.^pAus ihrem Fenster blickt Siseras Mutter^lund klagt durch das Gitter:^lWarum säumt sein Wagen zu kommen,^lwarum zögert der°Hufschlag°seiner°Gespanne?^lEine Kluge aus ihren Fürstinnen antwortet°ihr,^lund sie selbst wiederholt deren Worte:^lSicher machen und teilen sie Beute,^lein, zwei Frauen für jeden Mann,^lBeute an Kleidern für Sisera,^lBeute an Kleidern,^lfür meinen Hals als°Beute°ein,°zwei°bunte°Tücher.^pSo gehen all deine Feinde zugrunde, Herr.^lDoch die, die ihn lieben, sind°wie°die°Sonne,^lwenn sie aufgeht in ihrer Kraft.^pDann hatte das Land vierzig Jahre lang Ruhe.",
            resp1: "Hört, ihr Könige, horcht auf, ihr Fürsten!",
            resp2: "Ich will jubeln vor dem Gott Israels.",
            resp3: "Wer dich liebt, ist wie der prachtvolle Aufgang der Sonne."
        }]
    },
    "j-12-0": {
        second: [{
            patr_autor: "Meister Eckehart (†vor 1328)",
            patr_werk: "Aus den Reden der Unterweisung.",
            patr_text: "^hWesen und Werk der Liebe^pZwei Dinge musst du beachten, die sich in der Liebe finden: Das eine ist das Wesen der Liebe, das andere ist ein Werk oder ein Ausdruck des Wesens der Liebe.^pDie Stätte der Liebe ist allein im Willen; wer mehr Willen hat, der hat auch mehr Liebe. Aber wer davon mehr hat, das weiß niemand vom andern; das liegt verborgen in der Seele, während Gott im Grunde der Seele liegt.^pNun gibt’s aber noch ein Zweites: das ist ein Ausdruck oder ein Werk der Liebe. Das tritt uns recht in die Augen, wie zum Beispiel Innigkeit und Andacht und Jubilieren, und ist dennoch allwegs nicht das Beste. Denn es stammt mitunter gar nicht von der Liebe her, sondern es kommt bisweilen aus der Natur, dass man solches Wohlgefühl und süßes Empfinden hat, oder es mag des Himmels Einfluss oder auch durch die Sinne eingetragen sein.^pDie dergleichen öfter erfahren, das sind nicht allwegs die Allerbesten. Denn, sei’s auch, dass es wirklich von Gott stamme, so gibt unser Herr das solchen Menschen, um sie zu locken oder zu reizen, auf dass man dadurch von anderen Menschen recht ferngehalten wird. Wenn aber diese gleichen Menschen hernach an Liebe zunehmen, so mögen sie nicht mehr soviel Gefühle und Empfindungen haben, und daran erst wird ganz deutlich, dass sie Liebe haben: wenn sie auch ohne solchen Rückhalt Gott ganz und fest Treue bewahren.^pMan soll nämlich von solchem Jubilus bisweilen ablassen um eines Besseren aus Liebe willen und um zuweilen ein Liebeswerk zu wirken, wo es dessen not tut, sei’s geistlich oder weltlich oder leiblich. Wie ich auch sonst schon gesagt habe: Wäre der Mensch so in Verzückung, wie’s Sankt Paulus war, und wüsste einen kranken Menschen, der eines Süppleins von ihm bedürfte, ich erachtete es für weit besser, du ließest aus Liebe von der Verzückung ab und dientest dem Bedürftigen in größerer Liebe.^pNicht soll der Mensch wähnen, dass er dabei Gnaden versäume; denn was der Mensch aus Liebe willig lässt, das wird ihm um vieles herrlicher zuteil, wie Christus sprach: „Wer etwas lässt um meinetwillen, der wird hundertmal soviel zurückerhalten.“{1#vgl. Mk 10,29f}",
        }]
    },
    "Christkönig": {
        second: [{
            patr_autor: "Romano Guardini († 1968)",
            patr_werk: "Aus dem Buch „Der Herr“.",
            patr_text: "^hGottes Trost in der Bedrängnis^pDie Geheime Offenbarung ist ein Buch des Trostes. Keine Theologie der Geschichte oder der letzten Dinge, sondern ein Trost, den Gott beim Ausgang der Apostelzeit seiner Kirche in die Hand gegeben hat. Dieses Trostes bedurfte sie, denn sie war sehr bedrängt.^pWie tröstet aber Gott? Nicht so, dass er sagte: „Die Not sei im Grunde nicht so schlimm“; sie ist schlimm und wird auch schlimm gesehen. Gott verheißt auch keine wunderbaren Eingriffe. Die Geschichte hat ihre Zeit und ihre Macht, auch wo sie sich wider Gott richtet, und die werden nicht aufgehoben.^pDoch über der irdischen Wirklichkeit wird die himmlische gezeigt. Über den bedrängenden Mächten der Geschichte erscheint, schweigend und wartend, der, den sie angreifen, Christus. Ihm gehört die Ewigkeit. Er sieht alles, wägt alles, vom innersten Beginn im Herzen bis zur letzten Auswirkung im Gang der Ereignisse, und schreibt alles in „das Buch“ seines unfehlbaren Wissens.^pUnd einmal schlägt die Stunde, da alle Dinge ihre Zeit gehabt haben. Dann vergehen sie, Christus aber lebt. Alles wird vor Ihn kommen, und Er wird das Wort sprechen, das jedes Menschenwerk enthüllt, jedem seinen genauen Wert gibt und ewig währt.^pDas ist der Trost. Ein Trost des Glaubens, der voraussetzt, dass der Hörende die Überwindung des Glaubens vollbringe. Und er ist nicht auf morgen und das nächste Jahr bezogen, überhaupt nicht auf dieses Leben, sondern über den Tod hinweg auf die Ewigkeit, und hilft soviel, als den Hörenden Gott und Christus und Ewigkeit wirklich sind.",
        }]
    },
    "Ursula": {
        second: [{
            patr_autor: "Breviarium Coloniense (1521)",
            patr_werk: "LEER",
            patr_text: "^hDient untadelig eurem himmlischen König^pDie heilige Ursula setzte ihr Vertrauen auf das Wort der göttlichen Verheißung. Dennoch war sie auch bemüht um die menschliche Gebrechlichkeit. Sie hatte ihre Mitjungfrauen schon mit Worten und durch das christliche Beispiel belehrt. Doch nun ermahnte sie alle: In eurer bedrängten Lage müsst ihr um so entschlossener an der Tür des göttlichen Erbarmens pochen! Den Gürtel der Keuschheit dürft ihr niemals verlieren! Er ist ja das Zeichen, unter dem ihr eurem himmlischen König untadelig dient.^pMit diesen Worten „gab sie einen Sporn denen, die schon liefen“! Die gottverlobten Jungfrauen brachen in Tränen aus. Von ganzem Herzen und in der Glut des Geistes begannen sie die göttliche Hilfe anzurufen: Gott möge jeder einzelnen, besonders aber der Königin, die Jungfräulichkeit erhalten!^pDer gütige Gott ist allzeit denen nahe, die ihn in der Wahrheit anrufen. Darum wies er ein so frommes Gebet nicht ab. Aus seinen Schatzkammern holte er den Wind hervor. Von ihm wurden die Schiffe so angetrieben, dass sie in einem Tag und einer Nacht in glücklicher Fahrt zum Hafen gelangten, der Tyele heißt. Die Zahl der Schiffe und die Schar der Mädchen erlitt unterdessen keinen Schaden.^pSie gingen ans Ufer, das ihr Ziel war. Die Frau, die ihre Anführerin war, wurde Maria der Prophetin ähnlicher, als sie das Rote Meer vor den Heeren des Pharao durchschritten hatte. Sie sang dem himmlischen Bräutigam das hochzeitliche Lob, das sie ihm schuldete. Die Gemeinschaft der Mädchen stimmte darin ein, nicht mit lautem Rufen, sondern in der Harmonie des Gesanges. Sie sangen das frohe Lied der Schwester des Mose. Es klang empor zum Ohr Gott Zebaots wie lieblicher Klang.^pDort machten sie zur Nacht Station. Am folgenden Tag kauften sie, was sie notwendig hatten. Es war dort Markt. Dann gingen sie zu den Schiffen zurück und lichteten die Anker. Gegen die Strömung des Flusses ruderten sie. So kamen sie zu jener berühmten Stadt Köln, wo heute noch ihre Leiber in Frieden ruhen.^pSie gingen an Land. Nach dem Abendbrot überwältigte der Schlaf die von gottgefälliger Arbeit Übermüdeten. Die heilige Jungfrau Ursula hatte Gottes Wohlgefallen gefunden durch das Bekenntnis zur engelgleichen Keuschheit. Darum sah sie im Traum eine Engelsgestalt voll Licht und Hoheit. Er sagte ihr: Wisse, Tochter, was du so sehr ersehnt hast, wirst du unter dem himmlischen Schutz Gottes mit dieser lieben Gemeinschaft deiner Schwestern erlangen. Du wirst nach Rom gelangen. Die Zahl deiner Gefährtinnen wird keine Minderung erfahren. Die Gelöbnisse werden unvermindert erhalten. Gott hat euch hier die Ruhe in Ewigkeit bestimmt. Hier werdet ihr in Frieden ruhen.",
        }]
    },
    "Allerheiligen": {
        second: [{
            patr_autor: "Romano Guardini († 1968)",
            patr_werk: "Aus der „Vorschule des Betens“.",
            patr_text: "^hIn den Heiligen strahlt die Freiheit und Herrlichkeit der Kinder Gottes^pDie im Namen Christi sterben, gehen nicht ins Wesenlose, sondern in die Fülle heiliger Wirklichkeit ein.^pDas unwillkürliche Gefühl meint, die Toten würden schattenhaft, wendet sich von ihnen ab und sucht das warme Licht der irdischen Sonne oder es glaubt, sie bekämen eine unheimliche, zerstörende Macht, und sucht sich davor zu schützen.^pDiese Empfindungen werden aber im Glauben überwunden. Er sagt uns, dass die in der Gnade Heimgegangenen zur „Herrlichkeit der Kinder Gottes“ und zur reinen Vollendung ihres Wesens im ewigen Lichte gelangen.^pLiegt es da nicht nahe, jene Menschen, die schon auf Erden Zeugen göttlicher Liebe und Macht gewesen sind, auch in ihrer Erfüllung aufzusuchen? So ist es denn auch geschehen, und wir finden von den frühesten christlichen Zeiten an eine lebendige Beziehung der Gläubigen zu jenen, die sich auf Erden in besonderer Weise als Freunde Gottes erwiesen haben, den Heiligen. Und zwar ist diese Beziehung sehr mannigfaltig.^pAuf den ersten Blick scheint sie ganz in der Bitte um Hilfe zu bestehen, und diese Bitte hat recht, denn die Not des Daseins ist groß. In ihr aber zu denen zu rufen, die ganz in Gottes Gemeinschaft eingegangen, mit seinem Willen eins und seiner Gnade voll sind, bedeutet nichts anderes als die Verbundenheit des gläubigen Daseins.^pNeben der Bitte tritt aber auch das Lob hervor: die Freude an dem frommen und edlen Leben der Heiligen; an der göttlichen Führung, die darin deutlich wird; an ihren Überwindungen und Taten. Sie sind Zeugen der Erlösung. Die neue Schöpfung, die immerfort aus Christi Tat hervorgeht, ist verhüllt; alles widerspricht ihr, und der Glaube hat Mühe, sich der einstigen Vollendung gewiss zu halten. In den Heiligen strahlt „die Freiheit und Herrlichkeit der Kinder Gottes“{1#Röm 8,21} auf und hilft der Hoffnung.^pDie Heiligen können auch eine besondere Bedeutung für die Weise erhalten, wie der einzelne sein Leben führt. Sie öffnen den Reichtum Christi. Dieser ist „das Licht“, einfach und alleinbegreifend zugleich; die Heiligen aber sind wie Prismen, welche seine Unbegreiflichkeit aufbrechen und bald diese, bald jene Farbe daraus erstrahlen lassen. So können sie dem Glaubenden helfen, sich selber besser aus Christus heraus zu verstehen und den Weg zu finden, den er gehen soll.^pWas aber im Tiefsten zu den Heiligen treibt, ist doch wohl einfach der Wunsch, bei ihnen zu sein, mit ihnen umzugehen, Anteil an ihnen zu haben. Es ist die Liebe, welche die Gemeinschaft derer sucht, die ganz in der Liebe gelebt haben und nun in ihr vollendet sind.",
            patr_resp1: "Preist unsern Gott, all seine Knechte und alle, die ihn fürchten, klein und groß.",
            patr_resp2: "Der°Herr°ist König geworden, Gott, der Herrscher des Alls.",
            patr_resp3: "Jubelt dem Herrn, ihr Gerechten, den Frommen kommt es zu, Gott zu loben.",
        }]
    },
    "Allerseelen": {
        second: [{
            patr_autor: "LEER",
            patr_werk: "Sequenz „Dies irae“",
            patr_text: "^pDies iræ, dies illa,^lsolvet sæclum in favílla,^lteste David cum Sibýlla.^pQuantus tremor est futúrus,^lquando iudex est ventúrus^lcuncta stricte discussúrus.^pTuba mirum spargens sonum^lper sepúlcra regiónum^lcoget omnes ante thronum.^pMors stupébit et natúra,^lcum resúrget creatúra^liudicánti responsúra.^pLiber scriptus proferétur,^lin quo totum continétur,^lunde mundus iudicétur.^pIudex ergo cum sedébit,^lquidquid latet apparébit;^lnil inúltum remanébit.^pQuid sum miser tunc dictúrus,^lquem patrónum rogatúrus,^lcum vix iustus sit secúrus?^pRex treméndæ maiestátis,^lqui salvándos salvas gratis,^lsalva me, fons pietátis.^pRecordáre, Iesu pie,^lquod sum causa tuæ viæ,^lne me perdas illa die.^pQuærens me sedísti lassus,^lredemísti crucem passus;^ltantus labor non sit cassus.^pIuste iudex ultiónis,^ldonum fac remissiónis^lante diem ratiónis.^pIngemísco tamquam reus,^lculpa rubet vultus meus;^lsupplicánti parce, Deus.^pQui Maríam absolvísti^let latrónem exaudísti,^lmihi quoque spem dedísti.^pPreces meæ non sunt dignæ,^lsed tu, bonus, fac benígne,^lne perénni cremer igne.^pInter oves locum præsta^let ab hædis me sequéstra^lstátuens in parte dextra.^pConfutátis maledíctis,^lflammis ácribus addíctis,^lvoca me cum benedíctis.^pOro supplex et aclínis,^lcor contrítum quasi cinis,^lgere curam mei finis.^pLacrimósa dies illa,^lqua resúrget ex favílla^liudicándus homo reus:^lhuic ergo parce, Deus!^pPie Iesu, Dómine,^ldona eis réquiem. Amen."
        }]
    },
    "Sept16": {
        second: [{
            patr_autor: "LEER",
            patr_werk: "Aus den Akten über das Martyrium des heiligen Cyprian.",
            patr_text: "^hCyprian starb unter der Königsherrschaft Jesu Christi^pAm 18. Tag vor den Kalenden des Monats Oktober (14.°September) kam auf Befehl des Prokonsuls Galerius Maximus viel Volk morgens früh zum Ager Sexti. Der Prokonsul saß an diesem Tag im Atrium Sauciolum zu Gericht und ließ den Cyprian vor sich bringen. Als er vorgeführt war, sagte der Prokonsul Galerius Maximus zum Bischof Cyprian: „Du bist Thascius Cyprianus?“ Der Bischof Cyprian antwortete: „Ich bin es.“ Der Prokonsul Galerius Maximus sagte: „Du hast dich gottlos gesinnten Menschen als Papst zur Verfügung gestellt.“ Der Bischof Cyprian antwortete: „Ja, ich habe es getan!“ Der Prokonsul Galerius Maximus sagte: „Die heiligen Kaiser haben dir befohlen zu opfern.“ Der Bischof Cyprian erwiderte: „Das tue ich nicht!“ Galerius Maximus sagte: „Überlege es dir!“ Der Bischof Cyprian antwortete: „Tu, was dir befohlen ist; in einer so gerechten Sache gibt es nichts zu überlegen.“^pGalerius Maximus besprach sich mit seinen Räten und gab dann widerwillig das Urteil ab mit den Worten: „Du hast lange in einem ruchlosen Geist gelebt, viele Menschen in einer ruchlosen Verschwörung um dich versammelt und dich zum Feind der römischen Götter und der heiligen Bräuche gemacht. Die frommen und heiligen Fürsten, die Kaiser Valerianus und Gallienus und der erlauchte Unterkaiser Valerianus konnten dich nicht zur Gemeinschaft ihrer heiligen Riten zurückrufen. Da du also als Urheber und Rädelsführer schlimmer Verbrechen erfasst bist, soll – für diese, die du für deinen Frevel gewonnen hast, zum warnenden Beispiel – die heilige Ordnung mit deinem Blut bestätigt werden.“ Nach diesen Worten verlas er aus der Tabelle das Urteil: „Thascius Cyprianus soll mit dem Schwert hingerichtet werden.“ Der Bischof Cyprian sprach: „Dank sei Gott!“^pNach diesem Urteilsspruch sagte die Schar der Brüder: „Auch wir wollen mit ihm enthauptet werden.“ Darum gab es laute Unruhe unter den Brüdern, und eine große Menge folgte ihm. So wurde Cyprian zum Ager Sexti geführt. Dort legte er den roten Mantel ab, kniete nieder und warf sich zu Boden, um zum Herrn zu beten. Dann zog er die Dalmatik aus und reichte sie den Diakonen. Nun stand er im Linnengewand da und wartete auf den Scharfrichter. Als dieser kam, gebot Cyprian den Seinen, ihm 25 Goldstücke zu reichen. Leintücher und Handbinden wurden ihm von den Brüdern hingehalten. Dann verband sich Cyprian mit eigener Hand die Augen. Da er sich die Streifen für die Hände nicht selbst binden konnte, banden sie ihm der Presbyter Julian und der Subdiakon Julian.^pSo litt der heilige Cyprian. Wegen der Neugierde der Heiden wurde der Leib in der Nähe beigesetzt. Von dort holte man ihn bei Nacht mit Kerzen und Fackeln ab und brachte ihn unter Gebet in großem Triumphzug zur Grabstätte des Prokurators Macrobius Candidus, die an der Straße nach Mappalia bei den Fischteichen liegt. Der Prokonsul Galerius Maximus starb wenige Tage später.^pDer heilige Märtyrer Cyprian starb am 18.°Tag vor den Kalenden des Oktobers (14.°September) unter den Kaisern Valerian und Gallienus, unter der Königsherrschaft Jesu Christi, dem Ehre und Herrlichkeit ist in Ewigkeit. Amen."
        }]
    },
    "Dez22": {
        second: [{
            patr_autor: "LEER",
            patr_werk: "Aus „Sprüche der Sibylle“ (1.–3. Jh.)",
            patr_text: "^hKommen wird ein heiliger Fürst^hI^pWenn auch Ägypten einst^ßvon Rom besiegt und beherrscht wird,^leine Grenze sie eint,^ßja dann wird endlich erscheinen^lunter Menschen^ßdas größte Reich unsterblichen Königs:^lKommen wird ein heiliger Fürst^ßund schwingen das Zepter^lüber die Länder der Welt hinfort^ßbis in ewige Zeiten.^hII^pNicht in Herrlichkeit, er kommt^ßals Mensch in die Schöpfung,^lelend, niedrig und arm:^ßElenden Hoffnung zu bringen^lgibt dem morschen Fleische Gestalt^ßund himmlischen Glauben^lGlaubenslosen, und neu gestaltet er^ßwieder den Menschen,^lwie er einst erstand^ßaus Gottes heiligen Händen.^hIII^pWenn er die Arme breitet,^ßdas All umspannt, auf dem Haupte^ldorngeflochtene Krone trägt^ßund wenn ihm die Seite^lnach dem Gesetz der Speer durchstößt,^ßwird schauriges Dunkel,^lwird drei Stunden die Nacht sich senken^ßmitten am Tage,^lund ein großes Zeichen geschieht^ßvor den Augen der Menschen^lim Salomonischen Tempel,^ßwenn er zum Hause des Hades^lniedersteigt und Auffahrt ruft^ßdem Volke der Toten.^hIV^pUnd erstanden gesellt zuerst^ßden Seinen der Herr sich^lwieder im Fleisch, wie er vordem war,^ßdoch an Händen und Füßen^lzeigt er der Schar vier Male,^ßdie ihm die Glieder durchbohrten,^lAufgang nämlich und Untergang^ßund Mittag und Mitternacht:^lSoviel Königreiche der Welt^ßbegehen in Zukunft^lfrevelhafte niedrige Tat^ßam Vorbild der Menschen."
        }]
    },
    "Dez23": {
        second: [{
            patr_autor: "Heinrich Schlier († 1978)",
            patr_werk: "Aus dem Buch „Der Herr ist nahe – Adventsbetrachtungen“.",
            patr_text: "^hDes Herrn Nähe^pIn welcher Weise können wir denn „in Ihm“ sein und also „in Ihm“ uns freuen? Ist er denn nicht in die äußerste Ferne gerückt, sei es, dass er als der am Kreuz einmal Gestorbene irdisch vergangen ist, wie wir alle einmal vergehen als Menschen, sei es, dass er als der von den Toten Erweckte im Jenseits, im Himmel, bei Gott ist, und wir sind heute hier auf Erden, und morgen holt uns der Tod zu sich? Wie können wir uns seiner freuen, nein, zur Freude „in Ihm“ gelangen, wenn er als der Gekreuzigte und Auferstandene und Erhöhte nicht gegenwärtig ist, gegenwärtig in der Gegenwart unserer Welt und Zeit?^pDarauf gibt der Apostel mit seiner Formulierung Antwort: „Der Herr ist nahe!“{1#Phil 4,5} „Im Herrn“ können und sollen wir uns freuen, weil der Herr „nahe“ ist.^pUnd dieses „Nahesein“ meint nicht nur und nicht zuerst und zuletzt ein Nahesein im zeitlichen Sinn. Es meint eine sachliche Nähe, ein Nahegekommen und in der Nähe, ein in das Erreichbare und das Erreichen Gerücktsein. Und es meint dies auch in der zeitlichen Nähe. Es meint mit anderen Worten, dass seine Ankunft in Kreuz und Auferstehung und Erhöhung zu Gott zugleich ein Ankommen in die Nähe zu uns ist. Er ist uns nahegekommen und ist in unserer Nähe. Ja man kann sagen: Er ist unsere Nähe.^pAdvent hat sich erfüllt in seinem Nahesein. Er ist der, der da kommen soll. Und Er ist in den Horizont der Welt und unseres Lebens eingetreten, der uns von allen Seiten umgibt und angeht.^pUnd als solcher ist er der Grund jener Freude, die über alle Freude und noch Freude im Leid ist. Seine Ankunft in die Nähe erweckt die Freude, die Adventsfreude seiner Nähe.^pEr ist ja so nahe, dass wir sein Wort hören. Er ist – und das ist nicht metaphorisch gemeint – nahe in seinem Wort, im Wort seines Weges, im Wort seines Wirkens, im Wort seiner Person. Dies Wort ist mit ihm und seinem Leben laut geworden und hat sich im Wort des Evangeliums zur Sprache gebracht. Dieses Wort des Herrn in Menschenwort stellt die Welt und unser Leben in das Licht der Wahrheit und erleuchtet unseren Weg.^pSo nahe ist der Herr, dass er über alle Zeiten hinweg, ja dass er über die Grenze zwischen Himmel und Erde hinweg uns mit seinem Wort erreicht und sich uns glaub-würdig macht, dass wir ihn und sein Heil im Glauben erkennen und erfahren können.^pAber die nächste Nähe des Herrn erfahren wir, wenn er sich uns unter den einfachen Zeichen von Brot und Wein auf die Lippen legt und so uns selbst sich mitteilt und mit sich sein ganzes Heil. So nahe ist er, dass wir nur im Glauben unseren Mund zu öffnen brauchen, und wir werden von ihm gespeist."
        }]
    },
    "Dez24": {
        second: [{
            patr_autor: "Franz von Sales († 1622)",
            patr_werk: "Aus einer Predigt zur Vigil von Weihnachten.",
            patr_text: "^hMorgen werdet ihr seine Herrlichkeit sehen^pDie heilige Kirche ist gewohnt, uns am Vorabend der großen Feste vorzubereiten, damit wir begierig sind, die großen Gnadenerweise zu erkennen, die wir in ihnen von Gott empfangen haben. Wenn die Christen der Urkirche unserem Herrn gewissermaßen Genugtuung leisten wollten für sein Blut, das er bei seinem Tod am Kreuz so freigebig vergossen hat, dann waren sie sorgsam bedacht, die Zeit der Feste recht zu nutzen und sie möglichst ganz zu feiern.^pDie heilige Kirche will also, dass wir uns in der Vigil des heiligen Weihnachtsfestes vorbereiten, und als ganz liebenswürdige Mutter will sie nicht, dass wir von einem so großen Geheimnis unvorbereitet überrascht werden; deshalb sagt sie uns die Worte: „Heute sollt ihr wissen, dass unser Herr morgen kommt.“ Das heißt soviel wie: Morgen wird er geboren, und ihr werdet ihn als ganz kleines Kind in einer Krippe liegend sehen{1#vgl. Lk 2,12}. Dabei hat sie keine andere Absicht, als zu erreichen, dass wir unseren Verstand in die Betrachtung der Größe des Geheimnisses der hochheiligen Geburt unseres Herrn versenken.^pUm das möglichst gut zu machen, werden wir vor allem unseren Verstand demütigen und anerkennen, dass er in keiner Weise fähig ist, auf den Grund dieses großen Geheimnisses vorzudringen, das ein wahrhaft christliches Mysterium ist.^pIch sage „christlich“, weil nur die Christen jemals begreifen konnten, dass Gott Mensch und der Mensch vergöttlicht wurde. Es ist ja ein Geheimnis, das verborgen ist im Dunkel und in der Finsternis der Nacht; nicht als ob das Geheimnis dunkel in sich selbst wäre, denn Gott ist nur Licht{2#vgl. Joh 1,5.9}.^pMan weiß ja, dass unsere Augen nicht fähig sind, das Licht oder die Klarheit der Sonne zu betrachten, ohne zu erblinden (wenn wir es unternehmen wollten, dieses Licht zu betrachten, sind wir gezwungen, die Augen zu schließen, und sind einige Zeit unfähig, etwas zu sehen). Ebenso liegt das, was uns daran hindert, das Geheimnis der hochheiligen Geburt unseres Herrn zu begreifen, nicht daran, dass es in sich dunkel wäre, sondern daran, dass es nichts als helles Licht ist.^pUnser Verstand, der das Auge unserer Seele ist, kann es nicht lange betrachten, ohne sich zu trüben, und muss demütig bekennen, dass er dieses Geheimnis nicht ergründen kann, um zu begreifen, wie Gott im jungfräulichen Schoß der allerseligsten Jungfrau Fleisch angenommen hat und Mensch geworden ist gleich uns, um uns Gott ähnlich zu machen."
        }]
    },
    "Dez25": {
        first: [{
            resp1: "Vom Himmel stieg herab der wahre Gott^SLICE, vom Vater geboren. Er scheute nicht den Schoß der Jungfrau und nahm an das Fleisch des Menschen, in dem Adam geschaffen war,",
            resp2: "und ist uns sichtbar erschienen, Gott und Mensch, Licht und Leben, Schöpfer der Welt.",
            resp3: "Durch ihn ist alles geschaffen, für uns Menschen und um unseres Heiles willen stieg er vom Himmel herab"
        }],
        second: [{
            patr_resp1: "Das Wort ist Fleisch geworden und hat unter uns gewohnt,",
            patr_resp2: "und wir haben seine Herrlichkeit gesehen, die Herrlichkeit des einzigen Sohnes vom Vater, voll Gnade und Wahrheit.",
            patr_resp3: "Er erschien auf der Erde und verkehrte unter den Menschen,"
        }]
    },
    "Dez31": {
        second: [{
            patr_autor: "Hugo Rahner († 1968)",
            patr_werk: "Aus dem Buch „Maria und die Kirche“.",
            patr_text: "^hMaria ist Mutter der Glieder Christi^pDer Urbeginn unserer Erlösung liegt in dem unbegreiflichen Ratschluss des ewigen Vaters, seinen eingeborenen Sohn uns als Menschen zu schenken. In diesem göttlichen Gnadenentschluss ist aber auch mitgegeben der von eben dieser Gnade angerührte und ermöglichte freie Entschluss jenes Menschenkindes, das auserwählt ward, Mutter des Menschensohnes zu werden. In dem freien Ja der Jungfrau Maria ist gleichsam alles schon eingeschlossen, was je im Lauf der Erlösungsgeschichte an Gnade und Gottesliebe sich in das Geschlecht des Adam ergießen wird. Das Jawort der Jungfrau ist in einem wahren Sinn der Anfang der Kirche. Augustinus hat dies in einem berühmten Wort ausgesprochen: „Wahrlich, Maria ist auch die Mutter der Christusglieder, die wir selber sind. Denn sie hat mitgewirkt in Liebe, dass Glaubende in der Kirche geboren werden, Glaubende, die da sind die Glieder jenes Hauptes, dessen Mutter sie leiblich wurde.“{1#Augustinus, De sancta virginitate 6}^pDiese „liebende Mitwirkung“ ist zunächst einmal ihr Jawort, das den Einstrom der göttlichen Begnadigung in das ganze Menschengeschlecht durch die Menschwerdung Gottes ermöglicht hat. Im jungfräulichen Schoß Marias beginnt also, wie die Väter so oft sagen, in Wahrheit die Existenz der Kirche. Denn durch die hochzeitliche Vereinigung von Gottheit und Menschheit in der einen Person Christi ist der weltgestaltende Heilsschluss des Vaters festgelegt und begonnen: alles, was nun folgt, vom erlösenden Kreuz dieses aus Maria für den Vater geborenen Menschenkindes bis zur Vollendung in der herrlichen Wiederkunft des Gottmenschen, also die ganze Geschichte der Kirche, ist Entfaltung des Geheimnisses, das sich am Herzen Marias vollzog. Es ist das eigentliche Mysterium der Kirche – so wie es einmal in einem wundervollen Hymnus des achten Jahrhunderts heißt: „Das Mysterium der Kirche wollen wir besingen in einem Hymnus auf Christus, den die mütterliche Frau geboren hat, das Wort des Vaters. Groß nämlich ist das Mysterium, das Maria anvertraut ward.“{2#vgl.°Analecta Hymnica 51} Jenes „große Mysterium“, von dem Paulus in Bezug auf die Kirche spricht, beginnt schon in Marias Schoß.^pIn der klassischen Diktion seiner Theologie hat uns dieses Geheimnis der Kirche der heilige Papst Leo in einer seiner Weihnachtspredigten verkündet: „Indem wir die Menschwerdung unseres Erlösers anbeten, feiern wir offenbar auch den Beginn unseres eigenen Lebens. Ist doch die Zeugung Christi der Ursprung des christlichen Volkes. Der Geburtstag des Hauptes ist zugleich der Geburtstag des Leibes. Mag auch jeder einzelne von den Berufenen seinen besonderen Stand haben, mögen auch alle Kinder der Kirche durch die Folge der Zeiten voneinander getrennt sein: die Gesamtheit aller Gläubigen, die aus dem Taufquell hervorgingen, ist mit Christus in seiner Geburt geboren worden.“{3#Leo der Große, Sermo 26,2} Weihnacht ist für die alte Kirche ein Fest der Kirche, Maria der Inbegriff aller Mysterien, die sich in unserer Wiedergeburt an uns selbst vollziehen."
        }]
    },
    "Jan1": {
        second: [{
            patr_autor: "Walther von der Vogelweide († um 1230) zugeschrieben",
            patr_werk: "An Maria.",
            patr_text: "^h^pMaria klar,^ßviel hochgelobte Herrin, süße,^lHilf mir durch deines Kindes Ehr,^ßdass ich die Sünde büße.^lDu flutige Flut der Tugend,^ßErbarmung, aller Güte,^lDer süße Gottesgeist^ßaus deinem edlen Herzen blühte:^lEr ist dein Kind,^ßdein Vater und dein Schöpfer. ^pWohl uns, dass du^ßihn durftest einst gebären!^lDen Höhe, Tiefe, Breite, Länge^ßnie umgreifen ging,^lDein kleiner Leib^ßmit süßer Keusche ihn umfing,^lKein Wunder gleicht^ßdem wunderbaren Ding:^lDer Engel Königin,^ßdu trugst ihn ohne alle Schweren."
        }]
    },
    "Jan3": {
        second: [{
            patr_autor: "Theresia vom Kinde Jesus (†°1897)",
            patr_werk: "Aus einem Brief an Schwester Marie du Sacré-Cœur.",
            patr_text: "^hMeine Berufung ist die Liebe^pAls beim Gebet meine Begierden mich ein wahres Martyrium erleiden ließen, schlug ich die Briefe des hl. Paulus auf, um irgendeine Antwort zu suchen. Das 12. und 13. Kapitel des ersten Korintherbriefes fiel mir in die Hände. Ich las im ersten, dass nicht alle zugleich Apostel, Propheten, Lehrer usw. sein können, dass die Kirche sich aus verschiedenen Gliedern zusammensetzt und dass das Auge nicht zugleich Hand sein kann {1#vgl.°1 Kor 12,29.12.21}.^pDie Antwort war klar, stillte aber mein Sehnen nicht und brachte mir keinen Frieden. Wie Magdalena sich immer wieder über das leere Grab beugte und schließlich fand, was sie suchte, so erniedrigte ich mich bis in die Tiefen meines Nichts, und da erhob ich mich so hoch, dass ich mein Ziel erreichte {2#Hl. Johannes vom Kreuz, Gedichte, Zweiter Gesang über eine Ekstase}. Ohne mich entmutigen zu lassen, setzte ich meine Lesung fort und fand Trost in folgendem Satz: „Strebt eifrig nach den vollkommensten Gaben, aber ich will euch einen noch vorzüglicheren Weg zeigen.“ {3#1 Kor 12,31} Und der Apostel erklärt, wie die vollkommenen Gaben nichts sind ohne die Liebe. Dass die Liebe {4#charité – die christliche Gottes- und Nächstenliebe} der vortreffliche Weg ist, der mit Sicherheit zu Gott führt.^pEndlich hatte ich Ruhe gefunden. Den mystischen Leib der Kirche betrachtend, hatte ich mich in keinem der von hl. Paulus geschilderten Glieder wiedererkannt, oder vielmehr, ich wollte mich in allen wiedererkennen. Die Liebe gab mir den Schlüssel meiner Berufung. Ich begriff, dass wenn die Kirche einen aus verschiedenen Gliedern bestehenden Leib hat, ihr auch das notwendigste, das edelste von allen nicht fehlt; ich begriff, dass die Kirche ein Herz hat und dass dieses Herz von Liebe brennt. Ich erkannte, dass die Liebe allein die Glieder der Kirche in Tätigkeit setzt, und würde die Liebe erlöschen, so würden die Apostel das Evangelium nicht mehr verkünden, die Märtyrer sich weigern, ihr Blut zu vergießen. Ich begriff, dass die Liebe alle Berufungen in sich schließt, dass die Liebe alles ist, dass sie alle Zeiten und Orte umspannt. Mit einem Wort, dass sie ewig ist!^pDa rief ich im Übermaß meiner überschäumenden Freude: O Jesus, meine Liebe, endlich habe ich meine Berufung gefunden, meine Berufung ist die Liebe!^pJa, ich habe meinen Platz in der Kirche gefunden, und diesen Platz, mein Gott, den hast du mir geschenkt; im Herzen der Kirche, meiner Mutter, werde ich die Liebe sein, so werde ich alles sein."
        }]
    },
    "Jan4": {
        second: [{
            patr_autor: "Reginald Garrigou-Lagrange (†°1964)",
            patr_werk: "Aus dem Buch „Mystik und christliche Vollendung“.",
            patr_text: "^hDie vollkommene Liebe^pNach dem heiligen Johannes vom Kreuz findet sich die wahre, auf Erden noch mögliche Vollkommenheit nur in der umbildenden Vereinigung oder geistigen Vermählung {1#Geistl. Gesang, III.°Teil, 22.°Strophe}. Es erfüllt sich da, was im Hohenliede geschrieben steht: „Schon ist der Winter vorüber, der Regen hat aufgehört und ist vergangen, schon erscheinen die Blumen in unserem Lande.“ {2#vgl.°Hld°2,11}^pDas ist die volle Entfaltung der Liebe. Die vollkommene Liebe nimmt Gottes wegen jedes Werk oder jedes Opfer auf sich, sie findet darin sogar eine heilige Freude {3#a.a.O.°24.°Strophe}. Sie schreckt vor dem Tode nicht zurück, sondern wünscht ihn herbei; nichts schreibt sie sich selbst zu, sondern bezieht alles auf Gott. In ihn bildet sie sich gewissermaßen um nach dem Wort des heiligen Paulus: „Wer aber dem Herrn anhängt, ist^w ein ^0wGeist mit ihm.“ {4#vgl.°1°Kor°6,17}^p„Gott selbst ist es, der sich ihr in wunderbarer Herrlichkeit mitteilt und sie umgestaltet. In diesem Stande werden beide eins wie das Glas und der Sonnenstrahl, wie die Kohle und das Feuer, wie das Licht der Sterne und das Sonnenlicht, wenn auch diese Vereinigung noch nicht so wesenhaft und so vollkommen ist wie im anderen Leben.“ {5#a.a.O.°26.°Strophe}"
        }]
    },
    "Jan5": {
        second: [{
            patr_autor: "Ernest Hello (†°1885)",
            patr_werk: "Aus dem Buch „Der Mensch“.",
            patr_text: "^hDie christliche Liebe^pMan sollte sich doch darüber klar sein: Je schöner ein Wort ist, um so gefährlicher ist es. Es lässt sich gar nicht sagen, welch ungeheure Bedeutung die Sprache hat. Worte sind Brot oder Gift, und die allgemeine Verwirrung ist eines der Kennzeichen unserer Zeit. Durch ihre Nachgiebigkeit werden die Zeichen, die der Sprache zur Verfügung stehen, zu furchtbaren Werkzeugen. Jeden beliebigen Missbrauch kann man mit ihnen treiben, sie widersprechen nicht. Sie lassen sich ruhig entehren, und die Entstellung der Worte offenbart sich lediglich durch die gründliche Unordnung, die sie in der Wirklichkeit anrichtet.^pEs gibt ein Wort des heiligen Paulus, dessen Tiefe unbekannt ist: Der Heide, erklärte er, der Berge versetzte und hätte die Liebe nicht, so wäre er nichts. Dies Wort hat einen Umfang, den nur wenige kennen. Der es gesprochen, wusste um seltsame Geheimnisse.^p„Der Teufel ist der, der nicht liebt“, hat die heilige Theresia gesagt, und die heilige Brigitte hat dies schreckliche Geständnis aus dem Munde des Verfluchten selbst vernommen. Da der Teufel zu Jesus spricht, sagt er ihm die Worte: „Richter, ich bin die Kälte.“^p„Wer nicht liebt, ist nichts“, sagt der heilige Paulus.^pWie verhält sich das Nichts zur Sünde? Welchen Namen trüge die Liebe in einer Sprache, die höher stünde als die unsere? Wäre es nicht ein und derselbe Name? Wie tiefe Geheimnisse auch die fleischliche Liebe hüten mag, in der sittlichen Ordnung ist die Liebe jedenfalls das Gesetz des Lebens. Sie ist der Urgrund selber der Tätigkeit. Hätten die Menschen nicht gar soviel Geschäfte am Halse, so könnten sie vielleicht einen Augenblick über diese Dinge nachdenken. Sie ist zu alltäglich, um bemerkt, zu tief, um verstanden zu werden.^pAber eben deshalb, weil die Liebe^w das ^0werhabene Ding und^w die ^0wWirklichkeit in des Wortes verwegenster Bedeutung, dazu das Knochenmark der Schöpfung ist, gerade deswegen muss es ganz besonders gefährlich sein, wenn die Liebe missbraucht und ihr Name falsch angewendet wird. Das Beste wird, wenn es verdorben wird, zum Allerschlechtesten. Je schöner der Name Liebe, um so schrecklicher ist er! Und wenn er sich nun mit der Macht bewaffnet, die er für das Leben empfing und sie gegen die Wahrheit kehrt, so wird er dem Tode jeden Dienst leisten. Immer dann, wenn man sich mit dem Irrtum unter dem Vorwand, die Menschen zu schonen, verträgt, statt ihn auszurotten, richtet man den Namen der Liebe wider das Licht. Und so schafft man sich womöglich den Vorwand, sich das Schlechte in der eigenen Seele, das Schlechte, das man so gerne hätschelt, zu verzeihen.^pDer Mensch wird gegenüber der Schwäche, die Besitz von ihm ergreifen will, weichlich, sobald es ihm erst einmal zur Gewohnheit geworden ist, die völlige Anpassung an jedwede Schwäche Liebe zu nennen."
        }]
    },
    "Kirchweihe": {
        second: [{
            patr_autor: "Augustinus († 430)",
            patr_werk: "Aus einer Predigt zur Weihe einer Kirche. (Sermo°336^v,1.6^0v)",
            patr_text: "^hDer Aufbau und die Weihe des°Hauses°Gottes°in°uns^pWir sind hier versammelt, um ein Haus des Gebets feierlich zu weihen. Dies hier ist also ein Haus für unser Beten; Haus Gottes dagegen sind wir selbst. Wenn wir selbst Haus Gottes sind, werden wir in dieser Welt aufgebaut, um am Ende der Zeiten geweiht zu werden. Das Bauwerk, vor allem das Bauen, bringt Mühsal, die Weihe Jubel.^pWas hier geschah, als diese Mauern erstanden, ereignet sich nun, da die Christusgläubigen sich versammeln. Im Glauben werden sozusagen in den Wäldern die Hölzer gefällt und in den Bergen die Steine gebrochen. Werden aber die Glaubenden unterrichtet, getauft und herangebildet, ist es, als würden sie von den Händen der Zimmerleute und Steinmetzen behauen, gerichtet und geglättet.^pAber sie werden nicht zum Haus des Herrn, wenn sie nicht durch die Liebe verbunden werden. Wenn diese Hölzer und Steine nicht nach einem bestimmten Bauplan miteinander zusammenhingen, wenn sie nicht friedlich ineinandergefügt wären, wenn sie einander nicht gewissermaßen lieb hätten, niemand würde hier eintreten. Wenn du jedoch siehst, dass in einem Gebäude Hölzer und Steine gut miteinander zusammenhängen, trittst du unbesorgt ein und fürchtest keinen Einsturz.^pAls darum Christus der Herr eintreten und in uns wohnen wollte, sagte er gewissermaßen als Baumeister: „Ein neues Gebot gebe ich euch: Liebet einander“ {1#Joh 13, 34}. Ich gebe euch ein Gebot, sagt er: Ihr wart alt, bautet mir noch kein Haus, lagt in Trümmern. Nun liebt einander, damit ihr aus eurer alten Trümmerstätte herauskommt.^pDenkt also daran, meine Lieben, dass dieses Haus auf der ganzen Erde gebaut wird; so ist es vorausgesagt und versprochen. Denn als der Tempel nach der Gefangenschaft erbaut wurde, hieß es, wie in einem andern Psalm steht: „Singt dem Herrn ein neues Lied, singt dem Herrn, alle Lande“ {2#Ps 96, 1}.^pWas dort hieß „neues Lied“, hieß beim Herrn „neues Gebot“. Denn was soll „neues Lied“, wenn nicht „neue Liebe“?! Wer liebt, muss singen. Dieses Sängers Stimme ist das Feuer heiliger Liebe.^pWas wir in diesen Wänden leiblich vollbracht sehen, geschehe geistig in den Herzen, und was wir hier vollendet sehen in Stein und Holz, möge, erbaut von Gottes Gnade, in eurem Leib vollendet werden.^pIn erster Linie wollen wir also dem Herrn, unserem Gott, danken, von dem jede gute Gabe und jedes vollkommene Geschenk kommt {3#Jak 1, 17}. Seine Güte wollen wir mit der ganzen Freudigkeit des Herzens loben, weil er für den Bau dieses Hauses des Gebets den Geist seiner Gläubigen besucht, ihr Herz angespornt, ihre Mühen hilfreich mitgetragen hat.^pAls sie noch nicht wollten, hat er sie zum Wollen erweckt. Die Regungen ihres guten Wollens hat er unterstützt zum Vollbringen. So hat Gott, der in den Seinen „das Wollen und das Vollbringen nach seinem Wohlgefallen wirkt“ {4#Phil 2,13 Vg}, dies alles selbst begonnen und selbst vollendet {5#vgl. Phil 1,6}.",
            patr_resp1: "Wie liebenswert ist deine Wohnung, Herr der Heerscharen!",
            patr_resp2: "Meine Seele verlangt und sehnt sich nach den Vorhöfen des Herrn.^Ö",
            patr_resp3: "Selig, die in deinem Hause wohnen, die dich allezeit loben.",
        }]
    },
    "VerstLesehore": {
        first: [{
            les_buch: "Aus dem ersten Brief an die Korinther.",
            les_stelle: "15,35-57",
            les_text: "^hDie Auferstehung der Toten und°das°Kommen°des°Herrn^pEs könnte einer fragen: Wie werden die Toten auferweckt, was für einen Leib werden sie haben? Was für eine törichte Frage! Auch das, was du säst, wird nicht lebendig, wenn es nicht stirbt. Und was du säst, hat noch nicht die Gestalt, die entstehen wird; es ist nur ein nacktes Samenkorn, zum Beispiel ein Weizenkorn oder ein anderes. Gott gibt ihm die Gestalt, die er vorgesehen hat, jedem Samen eine andere.^pAuch die Lebewesen haben nicht alle die gleiche Gestalt. Die Gestalt der Menschen ist anders als die der Haustiere, die Gestalt der Vögel anders als die der Fische.^pAuch gibt es Himmelskörper und irdische Körper. Die Schönheit der Himmelskörper ist anders als die der irdischen Körper. Der Glanz der Sonne ist anders als der Glanz des Mondes, anders als der Glanz der Sterne; denn auch die Gestirne unterscheiden sich durch ihren Glanz.^pSo ist es auch mit der Auferstehung der Toten. Was gesät wird, ist verweslich, was auferweckt wird, unverweslich. Was gesät wird, ist armselig, was auferweckt wird, herrlich. Was gesät wird, ist schwach, was auferweckt wird, ist stark. Gesät wird ein irdischer Leib, auferweckt ein überirdischer Leib.^pWenn es einen irdischen Leib gibt, gibt es auch einen überirdischen. So steht es auch in der Schrift: Adam, der Erste Mensch, wurde ein irdisches Lebewesen. Der Letzte Adam wurde lebendig machender Geist. Aber zuerst kommt nicht das Überirdische; zuerst kommt das Irdische, dann das Überirdische.^pDer Erste Mensch stammt von der Erde und ist Erde; der Zweite Mensch stammt vom Himmel. Wie der von der Erde irdisch war, so sind es auch seine Nachfahren. Und wie der vom Himmel himmlisch ist, so sind es auch seine Nachfahren. Wie wir nach dem Bild des Irdischen gestaltet wurden, so werden wir auch nach dem Bild des Himmlischen gestaltet werden.^pDamit will ich sagen, Brüder: Fleisch und Blut können das Reich Gottes nicht erben; das Vergängliche erbt nicht das Unvergängliche.^pSeht, ich enthülle euch ein Geheimnis: Wir werden nicht alle entschlafen, aber wir werden alle verwandelt werden – plötzlich, in einem Augenblick, beim letzten Posaunenschall. Die Posaune wird erschallen, die Toten werden zur Unvergänglichkeit auferweckt, wir aber werden verwandelt werden. Denn dieses Vergängliche muss sich mit Unvergänglichkeit bekleiden und dieses Sterbliche mit Unsterblichkeit. Wenn sich aber dieses Vergängliche mit Unvergänglichkeit bekleidet und dieses Sterbliche mit Unsterblichkeit, dann erfüllt sich das Wort der Schrift:^pVerschlungen ist der Tod vom Sieg.^lTod, wo ist dein Sieg?^lTod, wo ist dein Stachel?^pDer Stachel des Todes aber ist die Sünde,^ldie Kraft der Sünde ist das Gesetz.^lGott aber sei Dank, der°uns°den°Sieg°geschenkt°hat^ldurch Jesus Christus, unseren Herrn.",
            resp1: "Christus muss herrschen, bis Gott ihm alle Feinde unter die Füße gelegt hat.",
            resp2: "Der letzte Feind, der vernichtet wird, ist der Tod.",
            resp3: "Dann werden Tod und Totenwelt ihre Toten herausgeben. Und der Tod und die Totenwelt werden in den Feuersee geworfen.",
        },
        {
            les_buch: "Aus dem zweiten Brief an die Korinther.",
            les_stelle: "4,16b – 5,10",
            les_text: "^hWenn unser irdisches Zelt abgebrochen wird, dann haben wir ein ewiges Haus im Himmel^pWenn auch unser äußerer Mensch aufgerieben wird, der innere wird Tag für Tag erneuert. Denn die kleine Last unserer gegenwärtigen Not schafft uns in maßlosem Übermaß ein ewiges Gewicht an Herrlichkeit, uns, die wir nicht auf das Sichtbare starren, sondern nach dem Unsichtbaren ausblicken; denn das Sichtbare ist vergänglich, das Unsichtbare ist ewig.^pWir wissen: Wenn unser irdisches Zelt abgebrochen wird, dann haben wir eine Wohnung von Gott, ein nicht von Menschenhand errichtetes ewiges Haus im Himmel. Im gegenwärtigen Zustand seufzen wir und sehnen uns danach, mit dem himmlischen Haus überkleidet zu werden. So bekleidet, werden wir nicht nackt erscheinen. Solange wir nämlich in diesem Zelt leben, seufzen wir unter schwerem Druck, weil wir nicht entkleidet, sondern überkleidet werden möchten, damit so das Sterbliche vom Leben verschlungen werde.^pGott aber, der uns gerade dazu fähig gemacht hat, er hat uns auch als ersten Anteil den Geist gegeben. Wir sind also immer zuversichtlich, auch wenn wir wissen, dass wir fern vom Herrn in der Fremde leben, solange wir in diesem Leib zu Hause sind; denn als Glaubende gehen wir unseren Weg, nicht als Schauende. Weil wir aber zuversichtlich sind, ziehen wir es vor, aus dem Leib auszuwandern und daheim beim Herrn zu sein.^pDeswegen suchen wir unsere Ehre darin, ihm zu gefallen, ob wir daheim oder in der Fremde sind. Denn wir alle müssen vor dem Richterstuhl Christi offenbar werden, damit jeder seinen Lohn empfängt für das Gute oder Böse, das er im irdischen Leben getan hat.",
            resp1: "Herr, richte mich nicht nach meinem Tun, denn meine Taten können vor dir nicht bestehen. Darum flehe ich zur dir:",
            resp2: "Herr, tilge all meine Frevel.",
            resp3: "Gott, wasche meine Schuld von mir ab und mache mich rein von meiner Sünde.",
        }],
        second: [{
            patr_autor: "Braulio von Saragossa († um 651)",
            patr_werk: "Aus einem Brief.",
            patr_text: "^hDer auferstandene Christus ist die Hoffnung aller Gläubigen^pChristus ist die Hoffnung aller Gläubigen. Er nennt alle, die aus der Welt scheiden, Schlafende, nicht Tote. Denn er sagt: „Lazarus, unser Freund, schläft“ {1#Joh 11,11}.^pAuch der Apostel will nicht, dass wir über die Entschlafenen trauern {2#1 Thess 4,13}.^pWenn wir glauben, dass alle Christgläubigen nach dem Evangelium „in Ewigkeit nicht sterben“ {3#Joh 11,26}, dann wissen wir das durch den Glauben, dass Christus nicht gestorben ist und dass auch wir nicht sterben.^p„Der Herr selbst wird vom Himmel herabkommen, wenn der Befehl ergeht, der Erzengel ruft und die Fanfare Gottes erschallt; und die Toten, die in Christus sind, werden auferstehen“ {4#1 Thess 4,16}.^pDie Hoffnung, dass wir auferstehen, soll uns Mut machen; denn was wir hier verlieren, werden wir dort wiedersehen. So wichtig ist es, fest an Gott zu glauben und seine Gebote zu halten, da er doch alle Kraft besitzt und leichter einen Toten erweckt, als wir einen Schlafenden.^pSo sagen wir. Und doch werden wir im Widerspruch dazu von einer Gemütsbewegung zu Tränen übermannt, und die Sehnsucht des Gemüts bricht die Kraft des gläubigen Geistes. Ach, wie elend ist der Mensch! Ohne Christus ist unser ganzes Leben sinnlos.^pO Tod, du trennst, was verbunden ist, und grausam reißt du auseinander, was in Freundschaft vereint ist! Aber deine Kraft ist schon gebrochen. Zerbrochen ist dein unheilvolles Joch durch ihn, der dir bereits durch Hosea drohte: „O Tod, ich werde dein Tod sein!“ {5#Hos 13,14 Vg} Darum verspotten wir ihn mit dem Apostel: „Tod, wo ist dein Sieg? Tod, wo ist dein Stachel?“ {6#1 Kor 15,50}^pEr, der dich besiegt hat, hat uns erlöst. Er gab seinen Herzensliebiling in die Hand der Gottlosen {7#vgl. Jer 12,7}, um aus den Gottlosen Freunde zu machen. In langer Aufzählung wäre vieles aus der Heiligen Schrift zum allgemeinen Trost heranzuziehen. Uns genüge die Hoffnung, dass wir auferstehen, und die Herrlichkeit des Erlösers, auf die sich unser Auge richtet. Wie wir glauben, sind wir in ihm schon auferstanden, da der Apostel sagt: „Sind wir mit Christus gestorben, so glauben wir, dass wir auch mit ihm leben werden“ {8#Röm 6,8}.^pDenn wir gehören uns nicht selbst, sondern ihm, der uns erlöst hat, von dessen Willen unser Wille stets abhängig sein muss; deswegen sagen wir im Gebet: „Dein Wille geschehe!“ {9#Mt 6,10} Darum müssen wir beim Begräbnis mit Ijob sprechen: „Der Herr hat gegeben, der Herr hat genommen; gelobt sei der Name des Herrn!“ {10#Ijob 1,21} So wollen wir hier mit Ijob sprechen, damit sich dort zeigt, wie ähnlich wir ihm in unserer gegenwärtigen Lage sind.",
            patr_resp1: "Über die Verstorbenen sollt ihr nicht trauern wie die anderen, die keine Hoffnung haben.",
            patr_resp2: "Wenn Jesus – und das ist unser Glaube – gestorben und auferstanden ist, dann wird Gott durch Jesus auch die Verstorbenen zusammen mit ihm zur Herrlichkeit führen.",
            patr_resp3: "Weint nicht um den Toten und beklagt ihn nicht."
        }]
    },
    "VerstVesper": {
        first: [{
            resp1: "Herr, in deinem Erbarmen",
            resp2: "gib ihnen ewige Ruhe.",
            resp3: "Du wirst kommen in Herrlichkeit, zu richten die Lebenden und die Toten,",
            resp1_lat: "In misericórdia tua, Dómine,",
            resp2_lat: "dona eis réquiem.",
            resp3_lat: "Qui ventúrus es iudicáre vivos et mórtuos,"
        }]
    },
    "MUSTERsecond": {
        second: [{
            patr_autor: "",
            patr_werk: "",
            patr_text: "",
            patr_resp1: "",
            patr_resp2: "",
            patr_resp3: ""
        }]
    },
    "MUSTER": {
        first: [
            {
                les_buch: "",
                les_stelle: "",
                les_text: "",
                resp1: "",
                resp2: "",
                resp3: ""
            },
        ],
        second: [
            {
                patr_autor: "",
                patr_werk: "",
                patr_text: "",
                patr_resp1: "",
                patr_resp2: "",
                patr_resp3: ""
            },
        ]
    },
    // Weitere Stichwörter können hier ergänzt werden
};