import { getExcludedHours } from "./ExcludedHours.js";

export const getValue = ({ season, hour, texts, field,
    prefSrc, prefSollemnity,
    localPrefKomplet, localPrefComm,
    localPrefPsalmsWt, localPrefErgPs,
    localPrefContinuous, localPrefLanguage = '' }) => {
    if (!hour || !texts || !texts[hour]) {
        return null;
    }

    if (hour === 'komplet') {
        return getKompletValue({ texts, field, localPrefKomplet, localPrefLanguage })
    }
    if (['kirchw', 'verst'].includes(prefSollemnity)) {
        const data = dataSollemnities[prefSollemnity]
        const languageField = `${field}${localPrefLanguage}`
        return data?.[season]?.[hour]?.[languageField]
            || data?.each?.[hour]?.[languageField]
            || data?.each?.each?.[languageField]
            ||
            data?.[season]?.[hour]?.[field]
            || data?.each?.[hour]?.[field]
            || data?.each?.each?.[field] || null
    }

    const replaceErgPs = (data) => {
        // Prüfe nur die kritischen Psalmen, die ersetzt werden müssen
        if (![121, 122, 126, 127].includes(data)) { return data; }

        // Bestimme, ob Commune-Texte geprüft werden sollen
        const textsEig = texts.vesper?.[prefSrc] || {};
        const textsCommune = ((prefSollemnity || (texts.rank_date > 2 || texts.rank_wt > 2)) && localPrefComm > 0) &&
            texts.vesper?.[prefSrc]?.[`com${localPrefComm}`] || {};

        let doReplace = false;

        // Prüfe in der Vesper auf Konflikte mit Eigenpsalmen oder Commune-Psalmen
        doReplace = [textsEig?.psalm1, textsEig?.psalm2].includes(data) ||
            [textsCommune?.psalm1, textsCommune?.psalm2].includes(data);

        if (doReplace) {
            // Ersatzpsalmen: 127→131, andere→129
            return (data === 127) ? 131 : 129;
        }
        return data;
    };

    // Helper function für die eigentliche Feldabfrage
    const getFieldValue = (field) => {
        const { rank_date = 0, rank_wt = 0, isCommemoration, hasErsteVesper = false, swdCombined, dayOfWeek } = texts;
        const sollemnityErsteVesper = () => ['soll', 'kirchw'].includes(prefSollemnity)
        const isPsalmodie = field.startsWith('psalm') ||
            (field.startsWith('ant') && !field.startsWith('antev'))
        const isErsteLesung = field.startsWith('les_text') && hour === 'lesehore';
        const isTSN = ['terz', 'sext', 'non'].includes(hour)
        const memorialWithTNS = texts?.laudes?.eig?.button
            ?.includes('Barnabas' || 'Schutzengel')

        // Feier wie ein Hochfest
        const isSollemnity = (hour === 'vesper' && hasErsteVesper)
            || prefSollemnity || rank_date === 5 ||
            (rank_date === 4 && dayOfWeek === 0) ||
            (rank_wt === 5 &&
                swdCombined !== 'q-0-3' &&
                !swdCombined.startsWith('q-6-') &&
                !swdCombined.startsWith('o-1-') &&
                dayOfWeek !== 0);

        // Bei Vesper als Hochfest
        if (hour === 'vesper' && sollemnityErsteVesper()) { hour = 'prefsollemnity'; }

        // Bei lokaler Feier als Hochfest Oration immer aus den Laudes
        if (prefSollemnity && field.startsWith('oration')) {
            return texts.laudes[prefSrc]?.[field] ?? null;
        }

        // Sonderfall Ergänzungspsalmodie
        if (isPsalmodie && !localPrefPsalmsWt
            && (isSollemnity
                || (isTSN && localPrefErgPs && !getExcludedHours(texts, localPrefErgPs, 'PSALMODIE').includes(hour))
                || (hour === 'laudes' && (rank_date > 2 || rank_wt > 2)) // Hochfeste und Feste: Ps vom So der I. Woche
            )) {
            const checkAnt0 = `ant0${localPrefLanguage}`
            if (!(field.startsWith('ant') &&
                (texts[hour][prefSrc]?.[checkAnt0] ||
                    texts[hour][prefSrc]?.[`com${localPrefComm}`]?.[checkAnt0])
            )) {
                const languageField = `${field}${localPrefLanguage}`
                const data = dataSollemnities.soll?.[dayOfWeek]?.[hour]?.[languageField]
                    || dataSollemnities.soll?.[dayOfWeek]?.[hour]?.[field]
                    || dataSollemnities.soll.each?.[hour]?.[languageField]
                    || dataSollemnities.soll.each?.[hour]?.[field]

                if (data) { return replaceErgPs(data) }
            }
        }

        // Abruf der Werte für die Kommemoration
        if (field.startsWith('c_')) {
            field = field.substring(2);
            if (texts[hour][prefSrc]?.[field]) {
                return texts[hour][prefSrc][field];
            }
            if (field === 'antev' && texts[hour][prefSrc]?.ant_komm) {
                return texts[hour][prefSrc].ant_komm;
            }
            if (texts[hour][prefSrc]?.com1?.[field]) {
                return texts[hour][prefSrc]?.com1[field];
            }
            return null;
        }

        // Prüfe, ob Commune übersprungen werden soll
        let skipCommune = false;
        if (rank_date < 3  // an Gedenktagen
            && ((hour === 'lesehore' && field !== 'oration') ||// Lesehore: nur Hymnus und Oration ggf. Commune
                (['laudes', 'vesper'].includes(hour) && isPsalmodie) || // Laudes/Vesper Psalmodie
                isTSN) // Kleine Horen: ganz vom Wt
        ) { skipCommune = true }

        if (rank_date < 5 && isTSN && isPsalmodie // an Festen: Ant und Ps in Kleinen Horen vom Wt
        ) { skipCommune = true }

        if (isSollemnity
        ) { skipCommune = false }

        if (isPsalmodie && localPrefPsalmsWt
        ) { skipCommune = true }

        const prefTexts = texts[hour]?.[prefSrc] || texts[hour]?.pers

        let prefCommTexts = '';
        if (!skipCommune) {
            if (localPrefComm === 1
                || (isSollemnity && localPrefComm === 0)
            ) { prefCommTexts = prefTexts?.com1 }
            if (localPrefComm === 2
            ) { prefCommTexts = prefTexts?.com2 }
        }

        if ((!isCommemoration // an Tagen mit Kommemoration und in Kl. Horen an Gedenktagen nur wt-Werte
            && !(rank_date < 3 && isTSN && !memorialWithTNS))
            || isSollemnity) {

            //Sonderfall Wochentagspsalmen
            if (localPrefPsalmsWt && isPsalmodie &&
                hour !== 'invitatorium'
            ) {
                return texts[hour]?.wt?.[field]
            }

            //Sonderfall Bahnlesung
            if (localPrefContinuous && hour === 'lesehore' &&
                /^(les_|resp|patr_)/.test(field)
            ) {
                return texts[hour]?.wt?.[field]
            }
            //Sonderfall Antiphonen: entweder ant0 oder ant1-3
            if (field === `ant0${localPrefLanguage}` &&
                (prefTexts?.[`ant1${localPrefLanguage}`] || prefCommTexts?.[`ant1${localPrefLanguage}`])
            ) {
                return 'STOP'
            }

            if ([`ant1${localPrefLanguage}`, `ant2${localPrefLanguage}`, `ant3${localPrefLanguage}`].includes(field) &&
                (prefTexts?.[`ant0${localPrefLanguage}`] || prefCommTexts?.[`ant0${localPrefLanguage}`])
            ) {
                return 'STOP'
            }

            // 1. Prüfe zuerst prefSrc
            if (prefTexts?.[field]) {
                return prefTexts[field]
            }
            // 2. Prüfe Commune (prefCommTexts ist leer, wenn Commune übersprungen werden soll)
            if (prefCommTexts?.[field]) {
                return prefCommTexts[field]
            }
        }
        if (texts[hour].pers?.[field]) {
            return texts[hour].pers[field];
        }
        // 3. Verwende "wt" als letzte Option
        if (texts[hour].wt?.[field]) {
            return texts[hour].wt[field];
        }
        return null;
    };

    const languageResult = getFieldValue(`${field}${localPrefLanguage}`);
    if (languageResult === 'STOP') { return null }
    else if (languageResult) {
        return `${languageResult}${localPrefLanguage}`;
    }
    return getFieldValue(field);

}

const getKompletValue = ({ texts, field, localPrefKomplet, localPrefLanguage = '' }) => {
    if (!texts || !texts.komplet) {
        return null;
    }

    let { season, dayOfWeek, swdCombined } = texts;

    // Helper function to get value with optional language suffix
    const getValueKomplet = (targetField) => {
        const languageResult = getFieldValue(`${targetField}${localPrefLanguage}`);
        if (languageResult) { return languageResult; }
        return getFieldValue(targetField);
    };

    // Helper function to actually retrieve the field value
    const getFieldValue = (targetField) => {
        if (targetField.startsWith('oration') && localPrefKomplet !== 'wt') {
            if ([0, 6].includes(dayOfWeek) && swdCombined !== 'q-6-6') {
                return dataKomplet?.[dayOfWeek]?.[targetField];
            } else if (!swdCombined.startsWith('o-1-') && swdCombined !== 'o-2-0') {
                return dataKomplet.sollemnity[targetField];
            }
        }

        if (targetField.startsWith('resp1') &&
            (swdCombined.startsWith('o-1-') ||
                ['q-6-4', 'q-6-5', 'q-6-6', 'o-2-0'].includes(swdCombined))
        ) {
            return '';
        }

        // Anpassungen für Saison und Wochentag
        if (swdCombined.startsWith('o-9-')) { season = 'j'; }
        if (localPrefKomplet === 'k1') { dayOfWeek = 6; }
        if (localPrefKomplet === 'k2') { dayOfWeek = 0; }

        return dataKomplet?.[season]?.[targetField]
            || dataKomplet?.[season]?.[dayOfWeek]?.[targetField]
            || dataKomplet?.[dayOfWeek]?.[targetField]
            || dataKomplet?.each?.[targetField]
            || null;
    };

    // Hauptaufruf mit Sprachlogik
    return getValueKomplet(field);
};

// Daten bleiben unverändert
const dataKomplet = {
    "o": {
        "ant0": "Halleluja, halleluja, halleluja.",
        "ant0_lat": "Allelúia, allelúia, allelúia.",
        "ant1": "LEER",
        "ant2": "LEER",
        "ant1_lat": "LEER",
        "ant2_lat": "LEER",
        "resp1": "Herr, auf dich vertraue ich, in deine Hände lege ich mein Leben.",
        "resp2": "Halleluja,°halleluja.",
        "resp1_lat": "In manus tuas, Dómine, comméndo\u00a0spíritum\u00a0meum.",
        "resp2_lat": "Allelúia,°allelúia.",
        "3": { "psalm2": 130, },
        "5": { "psalm1": 88, },
    },
    "sollemnity": {
        "oration_komplet": "Herr und Gott, kehre ein in dieses Haus und halte alle Nachstellungen des Feindes von ihm fern. Deine heiligen Engel mögen darin wohnen und uns im Frieden bewahren. Und dein Segen sei über uns allezeit.^ORV",
        "oration_komplet_lat": "Vísita, quǽsumus, Dómine, habitatiónem istam, et omnes insídias inimíci ab ea longe repélle; ángeli tui sancti hábitent in ea, qui nos in pace custódiant; et benedíctio tua sit super nos semper.^ORlV"
    },
    "each": {
        "hymn_1": 2500.0,
        "resp1": "Herr, auf dich vertraue ich,",
        "resp2": "in deine Hände lege ich mein Leben.",
        "resp3": "Lass leuchten über deinem Knecht dein Antlitz, hilf mir in deiner Güte.",
        "antev": "Sei unser Heil, o°Herr, wenn wir wachen, und unser Schutz, wenn wir schlafen, damit wir wachen mit Christus und ruhen in Frieden.^ö",
        "resp1_lat": "In manus tuas, Dómine,",
        "resp2_lat": "comméndo\u00a0spíritum\u00a0meum.",
        "resp3_lat": "Redemísti nos, Dómine Deus veritátis._lat",
        "antev_lat": "Salva nos, Dómine, vigilántes, custódi nos dormiéntes, ut vigilémus cum Christo et requiescámus in pace.^Lö"
    },
    "0": {
        "hymn_2": 2510.0,
        "psalm1": 91.0,
        "ant0": "Mit seinen Flügeln beschirmt dich der Herr; du brauchst dich nicht zu fürchten vor dem Schrecken der Nacht.",
        "les_buch": "Offb",
        "les_stelle": "22,4–5",
        "les_text": "Sie werden sein Angesicht schauen, und sein Name ist auf ihre Stirn geschrieben. Es wird keine Nacht mehr geben, und sie brauchen weder das Licht einer Lampe noch das Licht der Sonne. Denn der Herr, ihr Gott, wird über ihnen leuchten, und sie werden herrschen in alle Ewigkeit.^RESP",
        "oration_komplet": "Allmächtiger Gott, wir haben heute das Geheimnis der Auferstehung unseres Herrn gefeiert. Am Abend rufen wir zu dir: Bewahre uns in dieser Nacht vor allem Bösen. Lass uns in deinem Frieden ruhen und morgen den neuen Tag mit deinem Lob beginnen.^ORV",
        "ant0_lat": "Alis suis obumbrábit tibi; non timébis a timóre noctúrno.",
        "les_text_lat": "Vidébunt fáciem Dómini, et nomen eius in fróntibus eórum. Et nox ultra non erit, et non egent lúmine lucérnæ neque lúmine solis, quóniam Dóminus Deus illuminábit super illos, et regnábunt in sǽcula sæculórum.^LRESP",
        "oration_komplet_lat": "Vox nostra te, Dómine, humíliter deprecétur, ut, domínicæ resurrectiónis hac die mystério celebráto, in pace tua secúri a malis ómnibus quiescámus, et in tua resurgámus laude gaudéntes.^ORlV"
    },
    "1": {
        "hymn_2": 2511.0,
        "psalm1": 86.0,
        "ant0": "Herr, du bist ein gnädiger Gott, voll Langmut und reich an Erbarmen.",
        "les_buch": "1°Thess",
        "les_stelle": "5,9–10",
        "les_text": "Gott hat uns nicht für das Gericht seines Zornes bestimmt, sondern dafür, dass wir durch Jesus Christus, unseren Herrn, das Heil erlangen. Er ist für uns gestorben, damit wir vereint mit ihm leben, ob wir nun wachen oder schlafen.",
        "oration_komplet": "Herr, schenke uns eine ruhige Nacht und erholsamen Schlaf. Was wir heute durch Wort und Werk an Gutem ausgesät haben, das lass Wurzel schlagen und wachsen und heranreifen für die ewige Ernte.^ORV",
        "ant0_lat": "Tu, Dómine Deus, pátiens et multæ misericórdiæ.",
        "les_text_lat": "Pósuit nos Deus in acquisitiónem salútis per Dóminum nostrum Iesum Christum, qui mórtuus est pro nobis, ut sive vigilémus sive dormiámus, simul cum illo vivámus.",
        "oration_komplet_lat": "Quiétem, Dómine, corpóribus nostris tríbue salutárem, et quæ fúdimus hódie sémina per labórem, fac ut messem gérminent sempitérnam.^ORlV"
    },
    "2": {
        "hymn_2": 2512.0,
        "psalm1": 143.0,
        "ant0": "Verbirg dein Antlitz nicht vor mir; auf dich, o°Herr, vertraue ich.",
        "les_buch": "1°Petr",
        "les_stelle": "5,8–9",
        "les_text": "Seid nüchtern und wachsam! Euer Widersacher, der Teufel, geht wie ein brüllender Löwe umher und sucht, wen er verschlingen kann. Leistet ihm Widerstand in der Kraft des Glaubens!",
        "oration_komplet": "Herr, gütiger Vater, sei du unsere Leuchte im Dunkel der Nacht. Gib, dass wir in Frieden schlafen, damit wir uns beim Anbruch des neuen Tages in deinem Namen freudig erheben.^ORV",
        "ant0_lat": "Non abscóndas fáciem tuam a me, quia in te sperávi.",
        "les_text_lat": "Sóbrii estóte, vigiláte. Adversárius vester Diábolus tamquam leo rúgiens círcuit quærens quem dévoret. Cui resístite fortes fide.",
        "oration_komplet_lat": "Noctem istam, quǽsumus, Dómine, benígnus illúmina, et ita fac in pace nos tuos fámulos obdormíre, ut læti ad novi diéi claritátem in tuo nómine suscitémur.^ORlV"
    },
    "3": {
        "hymn_2": 2513.0,
        "psalm1": 31.4,
        "psalm2": 130.101,
        "ant1": "Sei mir ein schützender Fels, eine feste Burg, die mich rettet.",
        "ant2": "Aus der Tiefe rufe ich, Herr, zu dir.",
        "les_buch": "Eph",
        "les_stelle": "4,26–27",
        "les_text": "Lasst euch durch den Zorn nicht zur Sünde hinreißen! Die Sonne soll über eurem Zorn nicht untergehen. Gebt dem Teufel keinen Raum!",
        "oration_komplet": "Herr Jesus Christus, du bist gütig und von Herzen demütig. Das Joch, das du denen auflegst, die dir nachfolgen, ist nicht drückend, und deine Last ist leicht. Nimm gnädig an, was wir uns heute vorgenommen und was wir vollbracht haben. Erneuere uns durch die Ruhe der Nacht und mache uns morgen eifriger in deinem Dienst.^ORS",
        "ant1_lat": "Esto mihi in Deum protectórem et in domum refúgii.",
        "ant2_lat": "De profúndis clamávi ad te, Dómine.",
        "les_text_lat": "Irascímini et nolíte peccáre; sol non óccidat super iracúndiam vestram, et nolíte locum dare Diábolo.",
        "oration_komplet_lat": "Dómine Iesu Christe, qui iugum suáve te sequéntibus onúsque leve pérhibes mitis et húmilis, dignáre huius diéi vota et ópera nostra suscípere, et quiétem tribúere, qua tuo nos fácias servítio promptióres.^ORlS"
    },
    "4": {
        "hymn_2": 2514.0,
        "psalm1": 16.0,
        "ant0": "Mein Leib wird ruhen in Sicherheit.",
        "les_buch": "1°Thess",
        "les_stelle": "5,23",
        "les_text": "Der Gott des Friedens heilige euch ganz und gar und bewahre euren Geist, eure Seele und euren Leib unversehrt, damit ihr ohne Tadel seid, wenn Jesus Christus, unser Herr, kommt.",
        "oration_komplet": "Herr, unser Gott, sende uns in dieser Nacht einen ruhigen Schlaf, damit wir uns von der Mühe des Tages erholen und morgen mit neuer Kraft dir dienen können.^ORV",
        "ant0_lat": "Caro mea requiéscet in spe.",
        "les_text_lat": "Ipse Deus pacis sanctíficet vos per ómnia, et ínteger spíritus vester et ánima et corpus sine queréla in advéntu Dómini nostri Iesu Christi servétur.",
        "oration_komplet_lat": "Dómine Deus noster, diúrno labóre fatigátos quiéto sopóre nos réfove, ut, tuo semper auxílio recreáti, tibi córpore simus et mente devóti.^ORlV"
    },
    "5": {
        "hymn_2": 2515.0,
        "psalm1": 88.101,
        "ant0": "Herr, du Gott meines Heils, zu dir schreie ich am Tag und bei Nacht.",
        "les_buch": "Jer",
        "les_stelle": "14,9",
        "les_text": "Du bist in unsrer Mitte, Herr, und dein Name ist über uns ausgerufen; verlass uns nicht, Herr, unser Gott!",
        "oration_komplet": "Allmächtiger Gott, dein eingeborener Sohn ist hinabgestiegen in die Nacht des Todes und auferstanden. Gib, dass wir alle Tage durch den Glauben ihm verbunden bleiben, damit wir einst mit ihm auferstehen zum neuen Leben.^ORvR",
        "ant0_lat": "In die clamávi et nocte coram te, Dómine.",
        "les_text_lat": "Tu autem in médio nostri es, Dómine, et nomen tuum invocátum est super nos; ne derelínquas nos, Dómine Deus noster.",
        "oration_komplet_lat": "Concéde nos, omnípotens Deus, ita sepúlto Unigénito tuo fidéliter inhærére, ut cum ipso in novitáte vitæ resúrgere mereámur.^ORlvR"
    },
    "6": {
        "hymn_2": 2516.0,
        "psalm1": 4.0,
        "psalm2": 134.0,
        "ant1": "Sei mir gnädig, Herr, und höre auf mein Flehen.",
        "ant2": "Zu nächtlicher Stunde preiset den Herrn.",
        "les_buch": "Dtn",
        "les_stelle": "6,4–7",
        "les_text": "Höre, Israel! Jahwe, unser Gott, Jahwe ist einzig. Dar­um sollst du den Herrn, deinen Gott, lieben mit gan­zem Herzen, mit ganzer Seele und mit ganzer Kraft. Diese Worte, auf die ich dich heute verpflichte, sollen auf deinem Herzen geschrieben stehen. Du sollst sie deinen Söhnen wiederholen. Du sollst von ihnen reden, wenn du zu Hause sitzt und wenn du auf der Straße gehst, wenn du dich schlafen legst und wenn du aufstehst.^RESP",
        "oration_komplet": "Herr, bleibe bei uns in dieser Nacht, und wenn wir uns am Morgen erheben, dann lass uns in Freude der Auferstehung deines Sohnes gedenken,^ORR",
        "ant1_lat": "Miserére mei, Dómine, et exáudi oratiónem meam.",
        "ant2_lat": "In nóctibus benedícite Dóminum.",
        "les_text_lat": "Audi Israel: Dóminus Deus noster Dóminus unus est. Díliges Dóminum Deum tuum ex toto corde tuo et ex tota ánima tua et ex tota fortitúdine tua. Erúntque verba hæc, quæ ego præcípio tibi hódie, in corde tuo, et inculcábis ea fíliis tuis et loquéris ea sedens in domo tua et ámbulans in itínere, decúmbens atque consúrgens.^LRESP",
        "oration_komplet_lat": "Vísita nos, quǽsumus, Dómine, hac nocte præsénti, ut, dilúculo tua virtúte surgéntes, de resurrectióne Christi tui gaudére valeámus.^ORlvR"
    }
};
const dataSollemnities = {
    "soll": {
        "0": {
            "terz": {
                "psalm1": 118.1,
                "psalm2": 118.2,
                "psalm3": 118.3,
                "ant1": "Gut ist es, sich zu bergen beim Herrn; seine Huld währt ewig.^Ö",
                "ant2": "Meine Stärke und mein Lied ist der Herr.^Ö",
                "ant3": "Ich danke dir, Herr, denn du hast mich erhört.^Ö",
                "ant1_lat": "Bonum est confúgere ad Dóminum; in sǽculum misericórdia eius.^LÖ",
                "ant2_lat": "Fortitúdo mea et laus mea Dóminus.^LÖ",
                "ant3_lat": "Confitébor tibi, Dómine, quóniam exaudísti me.^LÖ"
            },
            "sext": {
                "psalm1": 118.1,
                "psalm2": 118.2,
                "psalm3": 118.3,
                "ant1": "Gut ist es, sich zu bergen beim Herrn; seine Huld währt ewig.^Ö",
                "ant2": "Meine Stärke und mein Lied ist der Herr.^Ö",
                "ant3": "Ich danke dir, Herr, denn du hast mich erhört.^Ö",
                "ant1_lat": "Bonum est confúgere ad Dóminum; in sǽculum misericórdia eius.^LÖ",
                "ant2_lat": "Fortitúdo mea et laus mea Dóminus.^LÖ",
                "ant3_lat": "Confitébor tibi, Dómine, quóniam exaudísti me.^LÖ"
            },
            "non": {
                "psalm1": 118.1,
                "psalm2": 118.2,
                "psalm3": 118.3,
                "ant1": "Gut ist es, sich zu bergen beim Herrn; seine Huld währt ewig.^Ö",
                "ant2": "Meine Stärke und mein Lied ist der Herr.^Ö",
                "ant3": "Ich danke dir, Herr, denn du hast mich erhört.^Ö",
                "ant1_lat": "Bonum est confúgere ad Dóminum; in sǽculum misericórdia eius.^LÖ",
                "ant2_lat": "Fortitúdo mea et laus mea Dóminus.^LÖ",
                "ant3_lat": "Confitébor tibi, Dómine, quóniam exaudísti me.^LÖ"
            }
        },
        "each": {
            "laudes": {
                "psalm1": 63.0,
                "psalm2": 160.0,
                "psalm3": 149.0
            },
            "terz": {
                "psalm1": 120.0,
                "psalm2": 121.0,
                "psalm3": 122.0
            },
            "sext": {
                "psalm1": 123.0,
                "psalm2": 124.0,
                "psalm3": 125.0
            },
            "non": {
                "psalm1": 126.0,
                "psalm2": 127.0,
                "psalm3": 128.0
            }
        }
    },
    "kirchw": {
        "each": {
            "each": {
                "oration": "^RUBRIn der Kirche, deren Weihefest begangen wird:^0RUBR^lGroßer und heiliger Gott, jedes Jahr feiern wir den Weihetag dieses heiligen Hauses. Höre auf die Bitten deines Volkes. Hilf uns, dass wir an diesem Ort in rechter Gesinnung den heiligen Dienst vollziehen und den Reichtum der Erlösungsgnade empfangen.^ORV^p^RUBRAußerhalb der Kirche, deren Weihefest begangen wird:^0RUBR^lErhabener Gott, du erbaust dir aus lebendigen und erlesenen Steinen ein ewiges Haus. Mache die Kirche reich an Früchten des Geistes, den du ihr geschenkt hast, und lass alle Gläubigen in der Gnade wachsen, bis das Volk, das dir gehört, im himmlischen Jerusalem vollendet wird.^ORV^p^RUBROder:^0RUBR^lAllmächtiger Gott, du hast gewollt, dass dein Volk Kirche heiße, denn wir sind das Haus, in dem deine Herrlichkeit wohnt. Gib, dass die Gläubigen, die sich in deinem Namen versammeln, dich ehren, dich lieben und dir gehorchen damit sie unter deiner Führung das ewige Erbe erlangen.^ORV",
                "oration_lat": ""
            },
            "erstev": {
                "button": "1. Vesper zur Kirchweihe",
                "hymn_1": 1154.0,
                "hymn_kl": 0.0,
                "psalm1": 147.1,
                "psalm2": 147.2,
                "psalm3": 154.0,
                "ant1": "Im Heiligtum des Herrn rufen alle: O herrlicher Gott!",
                "ant2": "Der Herr hat die Riegel deiner Tore festgemacht, die Kinder in deiner Mitte gesegnet.^ö",
                "ant3": "Ehre sei dir, o Gott, durch Christus in deiner Kirche.",
                "les_buch": "Eph",
                "les_stelle": "2,19–22",
                "les_text": "Ihr seid jetzt nicht mehr Fremde ohne Bürgerrecht, sondern Mitbürger der Heiligen und Gottes Hausgenossen. Ihr seid auf das Fundament der Apostel und Propheten gebaut; der Schlussstein ist Christus Jesus selbst. Durch ihn wird der ganze Bau zusammengehalten und wächst zu einem heiligen Tempel im Herrn. Durch ihn werdet auch ihr im Geist zu einer Wohnung Gottes erbaut.",
                "resp1": "Heiligkeit ziemt dem Hause des Herrn",
                "resp2": "für alle Zeiten.",
                "resp3": "Der Herr ist König, mit Hoheit bekleidet.",
                "antev": "Freut euch mit Jerusalem und jubelt in Ewigkeit alle, die ihr es liebt.^ö",
                "bitten_e": "Lasst uns beten zum allmächtigen Gott, der seine Kirche aufbaut aus lebendigen Steinen:",
                "bitten_r": "Wohne in unserer Mitte.",
                "bitten": "Du göttlicher Bauherr, erhalte deine Kirche^qund heilige das Volk, das du darin versammelt hast.^pDu Winzer deines Weinbergs, schütze deine Pflanzung;^qreinige sie und schenke ihr Wachstum.^pDu göttlicher Sämann, streue den Samen des Wortes aus,^qdamit es hundertfache Frucht bringe am Tag der Ernte.^pDu Hirte von Ewigkeit her, weide deine Herde^qund führe alle Völker zusammen unter dem einen Hirten Jesus Christus.^pVater im Himmel, du weist niemand ab, der zu dir kommt;^qnimm unsere Verstorbenen auf in dein Haus.",
                "ant1_lat": "",
                "ant2_lat": "",
                "ant3_lat": "",
                "resp1_lat": "",
                "resp2_lat": "",
                "antev_lat": "",
                "bitten_e_lat": "",
                "bitten_r_lat": "",
                "bitten_lat": "",
                "les_text_lat": ""
            },
            "invitatorium": {
                "ant0": "Wie ein Bräutigam liebt Christus seine Kirche; kommt, wir beten ihn an!^ö^p^RUBROder:^0RUBR^l^rAnt.^0r°°Christus, den Herrn, der seine Kirche liebt – kommt, wir beten ihn an!^ö",
                "ant0_lat": "Christum, Sponsum Ecclésiæ, adorémus in ea.^Lö"
            },
            "lesehore": {
                "hymn_1": 1139.0,
                "psalm1": 24.0,
                "psalm2": 84.101,
                "psalm3": 87.0,
                "ant1": "Ihr Tore, hebt euch nach oben, hebt euch, ihr uralten Pforten!^ö",
                "ant2": "Wie liebenswert ist deine Wohnung, Herr der Heerscharen!^ö",
                "ant3": "Herrliches sagt man von dir, du Stadt unseres Gottes.^ö",
                "versikel0": "Ich werfe mich nieder in Ehrfurcht vor deinem heiligen Tempel.^ö",
                "versikel1": "Ich lobe deinen Namen, denn du bist gütig.^ö",
                "les_buch": "Aus dem ersten Petrusbrief.",
                "les_stelle": "2,1–17",
                "les_text": "Legt alle Bosheit ab, alle Falschheit und Heuchelei, allen Neid und alle Verleumdung. Verlangt, gleichsam als neugeborene Kinder, nach der unverfälschten, geistigen Milch, damit ihr durch sie heranwachst und das Heil erlangt. Denn ihr habt erfahren, wie gütig der Herr ist.^pKommt zu ihm, dem lebendigen Stein, der von den Menschen verworfen, aber von Gott aus­erwählt und geehrt worden ist. Lasst euch als lebendige Steine zu einem geistigen Haus auf­bauen, zu einer heiligen Priesterschaft, um durch Jesus Christus geistige Opfer darzu­bringen, die Gott gefallen. Denn es heißt in der Schrift: Seht her, ich lege in Zion einen auser­wählten Stein, einen Eckstein, den ich in Ehren halte; wer an ihn glaubt, der geht nicht zugrunde.^pEuch, die ihr glaubt, gilt diese Ehre. Für jene aber, die nicht glauben, ist dieser Stein, den die Bauleute verworfen haben, zum Eckstein geworden, zum Stein, an den man anstößt, und zum Felsen, an dem man zu Fall kommt. Sie stoßen sich an ihm, weil sie dem Wort nicht gehorchen; doch dazu sind sie bestimmt.^pIhr aber seid ein auserwähltes Geschlecht, eine königliche Priesterschaft, ein heiliger Stamm, ein Volk, das sein besonderes Eigentum wurde, damit ihr die großen Taten dessen verkündet, der euch aus der Finsternis in sein wunderbares Licht gerufen hat. Einst wart ihr nicht sein Volk, jetzt aber seid ihr Gottes Volk; einst gab es für euch kein Erbarmen, jetzt aber habt ihr Erbarmen gefunden.^pLiebe Brüder, da ihr Fremde und Gäste seid in dieser Welt, ermahne ich euch: Gebt den irdischen Begierden nicht nach, die gegen die Seele kämpfen. Führt unter den Heiden ein rechtschaffenes Leben, damit sie, die euch jetzt als Übeltäter verleumden, durch eure guten Taten zur Einsicht kommen und Gott preisen am Tag der Heimsuchung.^pUnterwerft euch um des Herrn willen jeder menschlichen Ordnung: dem Kaiser, weil er über allen steht, den Statthaltern, weil sie von ihm entsandt sind, um die zu bestrafen, die Böses tun, und die auszuzeichnen, die Gutes tun.^pDenn es ist der Wille Gottes, dass ihr durch eure guten Taten die Unwissenheit unverständiger Menschen zum Schweigen bringt. Handelt als Freie, aber nicht als solche, die die Freiheit als Deckmantel für das Böse nehmen, sondern wie Knechte Gottes. Erweist allen Menschen Ehre, liebt die Brüder, fürchtet Gott und ehrt den Kaiser!",
                "resp1": "Deine Mauern sind aus edlem Stein.",
                "resp2": "Aus Perlen sind Jerusalems Türme erbaut.",
                "resp3": "Die Tore sind aus Saphir und Smaragd, aus kost­baren Steinen die Mauern rings um die Stadt.",
                "patr_autor": "Origenes († 253/254)",
                "patr_werk": "Aus einer Homilie zum Buch Josua. (Hom. 9,1–2)",
                "patr_text": "^hAus uns als lebendigen Bausteinen wird der Tempel und Altar Gottes aufgebaut^pWir alle, die an Christus Jesus glauben, werden „lebendige Steine“ genannt, wie die Schrift sagt: „Ihr seid als lebendige Steine zu einem geistigen Haus aufgebaut, zu einer heiligen Priesterschaft, um durch Jesus Christus geistige Opfer darzubringen, die Gott gefallen“ {1#1 Petr 2,5}.^pBekanntlich legt man bei unseren irdischen Steinen die stärkeren und tragfähigeren als erste in die Fundamente, damit man ihnen die Last des ganzen Bauwerks anvertrauen und aufbürden kann. Es leuchtet ein, dass es auch in den Fundamenten dieses geistigen Bauwerks einige von den lebendigen Steinen gibt. Welche erhalten nun ihren Platz in den Fundamenten? Die Apostel und Propheten. Denn so lehrt Paulus: „Ihr seid auf das Fundament der Apostel und Propheten gebaut; der Schlussstein ist unser Herr Christus Jesus selbst“ {2#Eph 2,20}.^pDamit du dich aber williger für die Errichtung dieses Bauwerks bereitmachst, lieber Zuhörer, damit du dich erweist als Stein näher dem Fundament, nimm zur Kenntnis, dass Christus selbst das Fundament dieses von mir jetzt beschriebenen Bauwerks ist. Denn Paulus lehrt: „Einen anderen Grund kann niemand legen als den, der gelegt ist: Jesus Christus“ {3#1 Kor 3,11}. Wohl also denen, die auf diesem so edlen Fundament gottgefällige und heilige Bauwerke errichtet haben.^pIn diesem Bauwerk Kirche muss aber auch ein Altar stehen. So meine ich denn, dass der eine und andere von euch lebendigen Steinen dort eingefügt und also bereit ist, sich dem Gebet zu widmen, Tag und Nacht Bittrufe vor Gott zu bringen und Bußgebete als Gabe zu opfern – die sind es, aus denen Jesus den Altar baut.^pSchau, welches Lob den Altarsteinen gespendet wird, wenn es heißt: „Der Gesetzgeber Mose hat geboten, den Altar aus unversehrten Steinen zu bauen, an die kein Eisen gekommen ist“ {4#Dtn 27,5; Jos 8,31}. Wer sind diese unversehrten Steine? Vielleicht könnten die heiligen Apostel jene unversehrten und unverdorbenen Steine sein, die wegen ihrer Einmütigkeit und Eintracht alle zusammen einen Altar bilden. Denn von ihnen wird berichtet, sie hätten alle einmütig miteinander gebetet, ihren Mund aufgetan und gesprochen: „Herr, du kennst die Herzen aller“ {5#Apg 1,24}. Vielleicht also sind sie, die es verstanden haben, eines Sinnes mit einer Stimme und in einem Geist zu beten, würdig, alle zusammen den einen Altar zu bilden, damit auf ihm Jesus dem Vater das Opfer darbringt.^pDoch sollen auch wir uns mühe alle einmütig in Gedanken und Worten dasselbe zu sprechen, indem wir eines Sinnes sind, ohne etwas aus Lust am Streit oder aus Sucht nach eitler Ehre zu betreiben. Wir sollten vielmehr in der gleichen Sinnesart und Denkweise verharren; vielleicht könnten dann auch wir passende Steine für den Altar werden.",
                "patr_resp1": "Festgegründet steht das Haus des Herrn auf dem höchsten der Berge; es ragt empor über alle Hügel.",
                "patr_resp2": "Alle Völker strömen zu ihm und rufen: Ehre sei dir, o Herr!^ö",
                "patr_resp3": "Mit Jubel kommen sie und bringen ihre Garben ein.",
                "ant1_lat": "Attóllite, portæ, cápita vestra, et elevámini, portæ æternáles.^Lö",
                "ant2_lat": "Quam dilécta tabernácula tua, Dómine virtútum.^Lö",
                "ant3_lat": "Gloriósa dicta sunt de te, cívitas Dei.^Lö",
                "versikel0_lat": "Adorábo ad templum sanctum tuum.^Lö",
                "versikel1_lat": "Et confitébor nómini tuo, Dómine.^Lö",
                "resp1_lat": "",
                "resp2_lat": "",
                "resp3_lat": "",
                "patr_resp1_lat": "",
                "patr_resp2_lat": "",
                "patr_resp3_lat": "",
                "les_text_lat": ""
            },
            "laudes": {
                "hymn_1": 1150.0,
                "hymn_kl": 0.0,
                "psalm1": 63.0,
                "psalm2": 160.0,
                "psalm3": 149.0,
                "ant1": "Mein Haus wird ein Haus des Gebetes sein für alle Völker.^ö",
                "ant2": "Gepriesen bist du, Herr, in deinem heiligen Tempel.^ö",
                "ant3": "Lobt den Herrn in der Gemeinde der Heiligen.^ö",
                "les_buch": "Jes",
                "les_stelle": "56,7",
                "les_text": "Ich bringe sie zu meinem heiligen Berg und erfülle sie in meinem Bethaus mit Freude. Ihre Brandopfer und Schlachtopfer finden Gefallen auf meinem Altar, denn mein Haus wird ein Haus des Gebets für alle Völker genannt.",
                "resp1": "Groß ist der Herr in seiner Stadt,",
                "resp2": "er ist hoch zu preisen.",
                "resp3": "Seht die Stadt unseres Gottes: Gott lässt sie ewig bestehen.",
                "antev": "Zachäus, steige schnell herab. In deinem Hause muss ich heute bleiben. Da stieg er schnell herab und nahm Jesus voll Freude auf. Heute ist Gottes Heil in dieses Haus gekommen.^ö",
                "bitten_e": "Gepriesen sei unser Erlöser Jesus Christus, der die zerstreute Herde Gottes in seiner Kirche sammelt. Zu ihm lasst uns beten:",
                "bitten_r": "Herr, gedenke deiner Kirche.",
                "bitten": "Du hast deine Kirche auf Felsen gebaut;^qstärke unseren Glauben und festige unsere Zuversicht.^pAus deiner Seite strömen Blut und Wasser;^qerneuere deine Gemeinde durch die Sakramente des Neuen Bundes.^pDu bist mitten unter denen, die in deinem Namen versammelt sind;^qerhöre unser einmütiges Gebet.^pMit dem Vater und dem Heiligen Geist nimmst du Wohnung bei denen, die dich lieben;^qgib, dass die Liebe zum dreifaltigen Gott in uns wachse.",
                "ant1_lat": "",
                "ant2_lat": "",
                "ant3_lat": "",
                "resp1_lat": "",
                "resp2_lat": "",
                "resp3_lat": "",
                "antev_lat": "",
                "bitten_e_lat": "",
                "bitten_r_lat": "",
                "bitten_lat": "",
                "les_text_lat": ""
            },
            "terz": {
                "psalm1": 120.0,
                "psalm2": 121.0,
                "psalm3": 129.0,
                "ant0": "Heilig ist das Haus des Herrn; er selber baut und erhält es.^ö",
                "les_buch": "1°Kor",
                "les_stelle": "3,16–17",
                "les_text": "Wisst ihr nicht, dass ihr Gottes Tempel seid und der Geist Gottes in euch wohnt? Wer den Tempel Gottes verdirbt, den wird Gott verderben. Denn Gottes Tempel ist heilig, und der seid ihr.",
                "resp0": "Ich liebe, Herr, die Schönheit deines Hauses.^ö",
                "resp1": "Die Wohnung deiner Herrlichkeit.^ö",
                "ant0_lat": "",
                "resp0_lat": "",
                "resp1_lat": "",
                "les_text_lat": ""
            },
            "sext": {
                "psalm1": 123.0,
                "psalm2": 124.0,
                "psalm3": 125.0,
                "ant0": "Deinem Haus, o Herr, gebührt Heiligkeit für alle Zeiten.^ö",
                "les_buch": "2°Kor",
                "les_stelle": "6,16",
                "les_text": "Wir sind der Tempel des lebendigen Gottes; denn Gott hat gesprochen: Ich will unter ihnen wohnen und mit ihnen gehen. Ich werde ihr Gott sein, und sie werden mein Volk sein.",
                "resp0": "Erbittet für Jerusalem Frieden.^ö",
                "resp1": "Wer dich liebt, sei in dir geborgen.^ö",
                "ant0_lat": "",
                "resp0_lat": "",
                "resp1_lat": "",
                "les_text_lat": ""
            },
            "non": {
                "psalm1": 126.0,
                "psalm2": 127.0,
                "psalm3": 128.0,
                "ant0": "Das ist das Haus des Herrn: fest gefügt und gegründet auf sicherem Felsen.^ö",
                "les_buch": "Jer",
                "les_stelle": "7,2b.4–5a.7a",
                "les_text": "Hört das Wort des Herrn, ganz Juda, alle, die ihr durch diese Tore kommt, um dem Herrn zu huldigen! Vertraut nicht auf die trügerischen Worte: Der Tempel des Herrn, der Tempel des Herrn, der Tempel des Herrn ist hier. Denn nur wenn ihr euer Verhalten und euer Tun von Grund auf bessert, will ich bei euch wohnen hier an diesem Ort.",
                "resp0": "Tretet durch seine Tore ein mit Dank.^ö",
                "resp1": "Kommt mit Lobgesang in die Höfe seines Tempels.^ö",
                "ant0_lat": "",
                "resp0_lat": "",
                "resp1_lat": "",
                "les_text_lat": ""
            },
            "vesper": {
                "hymn_1": 1154.0,
                "hymn_kl": 0.0,
                "psalm1": 46.0,
                "psalm2": 122.0,
                "psalm3": 156.0,
                "ant1": "Geheiligt hat der Herr sein Haus. Gott wohnt in seiner Mitte, darum wankt es nicht.^ö",
                "ant2": "Voll Freude ziehen wir hinauf zum Hause des Herrn.^ö",
                "ant3": "Alle Völker werden kommen und niederfallen vor dir, unserm Gott und Herrn.",
                "les_buch": "Offb",
                "les_stelle": "21,2–3.22.27",
                "les_text": "Ich, Johannes, sah die heilige Stadt, das neue Jerusalem, von Gott her aus dem Himmel herabkommen; sie war bereit wie eine Braut, die sich für ihren Mann geschmückt hat. Da hörte ich eine laute Stimme vom Thron her rufen: Seht die Wohnung Gottes unter den Menschen! Er wird in ihrer Mitte wohnen, und sie werden sein Volk sein; und er, Gott, wird bei ihnen sein. Einen Tempel sah ich nicht in der Stadt. Denn der Herr, ihr Gott, der Herrscher über die ganze Schöpfung, ist ihr Tempel, er und das Lamm. Nichts Unreines wird hineinkommen, keiner, der Gräuel verübt und lügt. Nur die, die im Lebensbuch des Lammes eingetragen sind, werden eingelassen.",
                "resp1": "Selig, die in deinem Hause wohnen,",
                "resp2": "sie loben dich in Ewigkeit.",
                "resp3": "Sie schauen Gott auf dem Zion.",
                "antev": "Geheiligt hat der Herr sein Zelt; hier ist Gottes Haus, in dem er angerufen wird, wie geschrieben steht: Dort wird mein Name sein – Spruch des Herrn.^ö",
                "bitten_e": "Lasst uns beten zum allmächtigen Gott, der seine Kirche aufbaut aus lebendigen Steinen:",
                "bitten_r": "Wohne in unserer Mitte.",
                "bitten": "Du göttlicher Bauherr, erhalte deine Kirche^qund heilige das Volk, das du darin versammelt hast.^pDu Winzer deines Weinbergs, schütze deine Pflanzung;^qreinige sie und schenke ihr Wachstum.^pDu göttlicher Sämann, streue den Samen des Wortes aus,^qdamit es hundertfache Frucht bringe am Tag der Ernte.^pDu Hirte von Ewigkeit her, weide deine Herde^qund führe alle Völker zusammen unter dem einen Hirten Jesus Christus.^pVater im Himmel, du weist niemand ab, der zu dir kommt;^qnimm unsere Verstorbenen auf in dein Haus.",
                "ant1_lat": "",
                "ant2_lat": "",
                "ant3_lat": "",
                "resp1_lat": "",
                "resp2_lat": "",
                "resp3_lat": "",
                "antev_lat": "",
                "bitten_e_lat": "",
                "bitten_r_lat": "",
                "bitten_lat": "",
                "les_text_lat": ""
            }
        },
        "o": {
            "erstev": {
                "ant1": "Jerusalems Plätze hallen wider von Lobgesang, in all seinen Gassen erschallt das Lied der Freude:^ö",
                "ant3": "In der Stadt Gottes frohlocken die Scharen der Heiligen; die Engel singen das Loblied vor Gottes Thron.^ö",
                "ant1_lat": "",
                "ant3_lat": ""
            },
            "lesehore": {
                "les_buch": "Aus der Offenbarung des Johannes.",
                "les_stelle": "21,9–27",
                "les_text": "^hDas neue Jerusalem^pEs kam einer von den sieben Engeln, die die sieben Schalen mit den sieben letzten Plagen getragen hatten. Er sagte zu mir: Komm, ich will dir die Braut zeigen, die Frau des Lammes.^pDa entrückte er mich in der Verzückung auf einen großen, hohen Berg und zeigte mir die heilige Stadt Jerusalem, wie sie von Gott her aus dem Himmel herabkam, erfüllt von der Herrlichkeit Gottes. Sie glänzte wie ein kostbarer Edelstein, wie ein kristallklarer Jaspis. Die Stadt hat eine große und hohe Mauer mit zwölf Toren und zwölf Engeln darauf. Auf die Tore sind Namen geschrieben: die Namen der zwölf Stämme der Söhne Israels. Im Osten hat die Stadt drei Tore und im Norden drei Tore und im Süden drei Tore und im Westen drei Tore. Die Mauer der Stadt hat zwölf Grundsteine; auf ihnen stehen die zwölf Namen der zwölf Apostel des Lammes.^pUnd der Engel, der zu mir sprach, hatte einen goldenen Messstab, mit dem die Stadt, ihre Tore und ihre Mauer gemessen wurden. Die Stadt war viereckig angelegt und ebenso lang wie breit. Er maß die Stadt mit dem Messstab; ihre Länge, Breite und Höhe sind gleich: zwölftausend Stadien. Und er maß ihre Mauer; sie ist hundertvierundvierzig Ellen hoch nach Menschenmaß, das der Engel benutzt hatte. Ihre Mauer ist aus Jaspis gebaut und die Stadt ist aus reinem Gold, wie aus reinem Glas.^pDie Grundsteine der Stadtmauer sind mit edlen Steinen aller Art geschmückt; der erste Grundstein ist ein Jaspis, der zweite ein Saphir, der dritte ein Chalzedon, der vierte ein Smaragd, der fünfte ein Sardonyx, der sechste ein Sardion, der siebte ein Chrysolith, der achte ein Beryll, der neunte ein Topas, der zehnte ein Chrysopras, der elfte ein Hyazinth, der zwölfte ein Amethyst. Die zwölf Tore sind zwölf Perlen; jedes der Tore besteht aus einer einzigen Perle. Die Straße der Stadt ist aus reinem Gold, wie aus klarem Glas.^pEinen Tempel sah ich nicht in der Stadt. Denn der Herr, ihr Gott, der Herrscher über die ganze Schöpfung, ist ihr Tempel, er und das Lamm. Die Stadt braucht weder Sonne noch Mond, die ihr leuchten. Denn die Herrlichkeit Gottes erleuchtet sie und ihre Leuchte ist das Lamm. Die Völker werden in diesem Licht einhergehen und die Könige der Erde werden ihre Pracht in die Stadt bringen.^pIhre Tore werden den ganzen Tag nicht geschlossen – Nacht wird es dort nicht mehr geben. Und man wird die Pracht und die Kostbarkeiten der Völker in die Stadt bringen. Aber nichts Unreines wird hineinkommen, keiner, der Gräuel verübt und lügt. Nur die, die im Lebensbuch des Lammes eingetragen sind, werden eingelassen.",
                "resp1": "Deine Plätze, Jerusalem, sind aus reinem Gold; sie hallen wider von Lobgesängen.",
                "resp2": "Auf all deinen Straßen erschallt der Ruf:^Ö",
                "resp3": "Als strahlendes Licht erleuchtest du aller Länder Erde.",
                "resp1_lat": "",
                "resp2_lat": "",
                "resp3_lat": "",
                "les_text_lat": ""
            },
            "vesper": {
                "ant3": "Lobt unseren Gott, preist ihn, all seine Heiligen!^ö",
                "resp1": "Selig, die in deinem Hause wohnen.",
                "resp2": "Halleluja,°halleluja.",
                "resp3": "Sie loben dich in Ewigkeit.",
                "ant3_lat": "",
                "resp1_lat": "",
                "resp2_lat": "",
                "resp3_lat": ""
            }
        },
        "q": {
            "lesehore": {
                "les_buch": "Aus dem ersten Buch der Könige.",
                "les_stelle": "8,1–4.10–13.22–30",
                "les_text": "^hTempelweihe^pSalomo versammelte die Ältesten Israels, die Stammesführer und die Häupter der israelitischen Familien bei sich in Jerusalem, um die Bundeslade des Herrn aus der Stadt Davids, das ist Zion, heraufzuholen. Am Fest im Monat Etanim, das ist der siebte Monat, kamen alle Männer Israels beim König Salomo zusammen. In Gegenwart aller Ältesten Israels nahmen die Priester die Lade und brachten sie zugleich mit dem Offenbarungszelt und den heiligen Geräten, die im Zelt waren, hinauf. Die Priester und die Leviten übernahmen den Trägerdienst. Als dann die Priester aus dem Heiligtum traten, erfüllte die Wolke das Haus des Herrn. Sie konnten wegen der Wolke ihren Dienst nicht verrichten; denn die Herrlichkeit des Herrn füllte das Haus des Herrn. Damals sagte Salomo:^pDer Herr hat die Sonne an den Himmel gesetzt,^ler selbst wollte im Dunkel wohnen.^lIch habe ein fürstliches Haus für dich gebaut,^leine Wohnstätte für ewige Zeiten.^pDann trat Salomo im Angesicht der ganzen versammelten Israeliten vor den Altar des Herrn, breitete seine Hände zum Himmel aus und betete: Herr, Gott Israels, im Himmel oben und auf der Erde unten gibt es keinen Gott, der so wie du Bund und Huld seinen Knechten bewahrt, die mit ungeteiltem Herzen vor ihm leben. Du hast das Versprechen gehalten, das du deinem Knecht, meinem Vater David, gegeben hast. Deine Hand hat heute erfüllt, was dein Mund versprochen hat.^pUnd nun, Herr, Gott Israels, halte auch das andere Versprechen, das du deinem Knecht David, meinem Vater, gegeben hast, als du sagtest: Es soll dir nie an einem Nachkommen fehlen, der vor mir auf dem Thron Israels sitzt, wenn nur deine Söhne darauf achten, ihren Weg so zu gehen, wie du es getan hast. Gott Israels, möge sich jetzt dein Wort, das du deinem Knecht David, meinem Vater, gegeben hast, als wahr erweisen.^pWohnt denn Gott wirklich auf der Erde? Siehe, selbst der Himmel und die Himmel der Himmel fassen dich nicht, wie viel weniger dieses Haus, das ich gebaut habe. Wende dich, Herr, mein Gott, dem Beten und Flehen deines Knechtes zu! Höre auf das Rufen und auf das Gebet, das dein Knecht heute vor dir verrichtet! Halte deine Augen offen über diesem Haus bei Nacht und bei Tag, über der Stätte, von der du gesagt hast, dass dein Name hier wohnen soll! Höre auf das Gebet, das dein Knecht an dieser Stätte verrichtet! Achte auf das Flehen deines Knechtes und deines Volkes Israel, wenn sie an dieser Stätte beten! Höre sie im Himmel, dem Ort, wo du wohnst! Erhöre sie und verzeih!",
                "resp1": "Alles, was zwei von euch auf Erden gemeinsam erbitten, werden sie von meinem Vater im Himmel erhalten.",
                "resp2": "Wo zwei oder drei in meinem Namen versammelt sind, da bin ich mitten unter ihnen.",
                "resp3": "Wenn einer an diesem Orte betet, so wird mein Ohr für seine Bitten offen sein.",
                "resp1_lat": "",
                "resp2_lat": "",
                "resp3_lat": "",
                "les_text_lat": ""
            }
        }
    },
    "verst": {
        "each": {
            "each": {
                "oration": "Allmächtiger Gott, wir glauben und bekennen, dass du deinen Sohn als Ersten von den Toten auferweckt hast. Stärke in uns die Hoffnung, dass du auch unseren Bruder ^(unsere Schwester^) ^N auferwecken wirst zum ewigen Leben.^ORV^p^RUBROder:^0RUBR^lHerr, unser Gott, du bist das Licht der Glaubenden und das Leben der Heiligen. Du hast uns durch den Tod und die Auferstehung deines Sohnes erlöst. Sei deinem Diener ^(deiner Dienerin^) ^N gnädig, der ^(die^) das Geheimnis unserer Auferstehung gläubig bekannt hat, und lass ihn ^(sie^) auf ewig deine Herrlichkeit schauen.^ORV",
                "oration_lat": ""
            },
            "invitatorium": {
                "ant0": "Den König, dem alles lebt, Christus, den Herrn – kommt, wir beten ihn an!",
                "ant0_lat": ""
            },
            "lesehore": {
                "hymn_1": 2514.0,
                "hymn_2": 1425.0,
                "psalm1": 40.1,
                "psalm2": 40.2,
                "psalm3": 42.0,
                "ant1": "Du hast mich aus Erde gebildet und mich mit Fleisch umkleidet; Herr, mein Erlöser, erwecke mich am Jüngsten Tag.",
                "ant2": "Reiß mich heraus, o Herr; eile mir zu Hilfe.",
                "ant3": "Meine Seele dürstet nach dem lebendigen Gott; wann darf ich kommen und Gottes Antlitz schauen?",
                "les_buch": "Aus dem ersten Brief an die Korinther.",
                "les_stelle": "15,12–34",
                "les_text": "^hDie Auferweckung Christi und der Christen^pWenn verkündigt wird, dass Christus von den Toten auferweckt worden ist, wie können dann einige von euch sagen: Eine Auferstehung der Toten gibt es nicht? Wenn es keine Auferstehung der Toten gibt, ist auch Christus nicht auferweckt worden. Ist aber Christus nicht auferweckt worden, dann ist unsere Verkündigung leer und euer Glaube sinnlos. Wir werden dann auch als falsche Zeugen Gottes entlarvt, weil wir im Widerspruch zu Gott das Zeugnis abgelegt haben: Er hat Christus auferweckt. Er hat ihn eben nicht auferweckt, wenn Tote nicht auferweckt werden. Denn wenn Tote nicht auferweckt werden, ist auch Christus nicht auferweckt worden. Wenn aber Christus nicht auferweckt worden ist, dann ist euer Glaube nutzlos und ihr seid immer noch in euren Sünden; und auch die in Christus Entschlafenen sind dann verloren. Wenn wir unsere Hoffnung nur in diesem Leben auf Christus gesetzt haben, sind wir erbärmlicher daran als alle anderen Menschen.^pNun aber^w ist ^0wChristus von den Toten auferweckt worden als der Erste der Entschlafenen. Da nämlich durch einen Menschen der Tod gekommen ist, kommt durch einen Menschen auch die Auferstehung der Toten. Denn wie in Adam alle sterben, so werden in Christus alle lebendig gemacht werden.^pEs gibt aber eine bestimmte Reihenfolge: Erster ist Christus; dann folgen, wenn Christus kommt, alle, die zu ihm gehören. Danach kommt das Ende, wenn er jede Macht, Gewalt und Kraft vernichtet hat und seine Herrschaft Gott, dem Vater, übergibt. Denn er muss herrschen, bis Gott ihm alle Feinde unter die Füße gelegt hat. Der letzte Feind, der entmachtet wird, ist der Tod. Sonst hätte er ihm nicht alles zu Füßen gelegt. Wenn es aber heißt, alles sei unterworfen, ist offenbar der ausgenommen, der ihm alles unterwirft. Wenn ihm dann alles unterworfen ist, wird auch er, der Sohn, sich dem unterwerfen, der ihm alles unterworfen hat, damit Gott herrscht über alles und in allem.^pWie kämen sonst einige dazu, sich für die Toten taufen zu lassen? Wenn Tote gar nicht auferweckt werden, warum lässt man sich dann taufen für sie? Warum setzen dann auch wir uns stündlich der Gefahr aus? Täglich sehe ich dem Tod ins Auge, so wahr ihr, Brüder, mein Ruhm seid, den ich in Christus Jesus, unserem Herrn, empfangen habe. Was habe ich dann davon, dass ich in Ephesus, wie man so sagt, mit wilden Tieren gekämpft habe? Wenn Tote nicht auferweckt werden, dann lasst uns essen und trinken; denn morgen sind wir tot. Lasst euch nicht irreführen! Schlechter Umgang verdirbt gute Sitten. Werdet nüchtern, wie es sich gehört, und sündigt nicht! Einige Leute wissen nichts von Gott; ich sage das, damit ihr euch schämt.",
                "patr_autor": "Anastatius von Antiochien († 599)",
                "patr_werk": "Aus einer Rede über die Auferstehung Christi. (Or. 5,6-7.9)",
                "patr_text": "^hChristus wird unsern Leib verwandeln^p„Christus ist gestorben und wieder lebendig geworden, um Herr zu sein über Lebende und Tote“ {1#Röm 14,9}. Doch Gott ist „ein Gott von Lebenden, nicht von Toten“ {2#Mt 22,32 par.}. Also sind die Toten, über die der Lebende herrscht, nicht länger tot, sondern sie leben. Deswegen herrscht das Leben über sie, dass sie leben, ohne den Tod fürchten zu müssen, wie „Christus, von den Toten auferweckt, nicht mehr stirbt“ {3#Röm 6,9}.^pSo werden auch die den Tod nicht mehr zu fürchten haben, die auferweckt und von der Vergänglichkeit des Fleisches befreit sind. Sie werden teilhaft der Auferstehung Christi, wie dieser selbst ihres Todes teilhaftig wurde.^pEben deswegen kam er auf die Erde, die durch ewige Riegel versperrt ist, um „die ehernen Tore zu zerbrechen und die eisernen Riegel zu zerschlagen“ {4#vgl. Ps 107,16}, um uns statt der Knechtschaft die Freiheit zu schenken, unser Leben aus der Vergänglichkeit zu retten und mit dem seinen zu vereinigen.^pDieser Heilsplan scheint noch nicht voll verwirklicht zu sein. Denn noch sterben Menschen, der Leib geht zugrunde und löst sich auf. Aber das darf nicht Anlass sein, dass wir Unrecht tun. Denn schon vor der vollen Verwirklichung haben wir ein Unterpfand in unserem Erstling, durch den wir zum Himmel aufgestiegen sind und zur Rechten des Herrn sitzen, der uns zur Höhe mitgenommen hat, wie Paulus sagt: „Er hat uns mit Christus auferweckt und uns mit ihm einen Platz im Himmel gegeben“ {5#Eph 2,6}.^pWenn aber die vom Vater festgesetzte Zeit kommt, werden wir die Vollendung erlangen. Wir werden ablegen, was kindlich ist, und das volle Mannesalter erreichen. Der ewige Vater hat das so gewollt, damit die Gabe, die er uns geschenkt hat, Bestand hat und unser Geist nicht wieder in das Kindesalter zurückfällt.^pEs braucht kaum darauf hingewiesen zu werden, dass der auferstandene Leib überirdisch ist, da doch Paulus vom Leib bezeugt, dass Irdisches gesät wird, Überirdisches aber aufersteht {6#vgl. 1 Kor 15,44}. Das Irdische wird verwandelt wie Christus, der in herrlicher Verklärung vorangegangen ist.^pAuch Paulus war sich ganz klar darüber, dass dies dem ganzen Menschengeschlecht geschehen soll durch Christus, „der unseren armseligen Leib verwandeln wird in die Gestalt seines verherrlichten Leibes“ {7#Phil 3,21}.^pDie Verklärung besteht darin, dass der Leib in der Verwandlung überirdisch wird und die verherrlichte Gestalt Christi erhält. Mit einem überirdischen Leib ist Christus auferstanden. Aber der Leib ist der gleiche, der in Armseligkeit gesät, aber in Herrlichkeit verwandelt wurde.^pChristus hat die Erstlinge unserer Natur zum Vater geführt, er wird auch die ganze Welt zu ihm geleiten, wie er versprochen hat: „Wenn ich von der Erde erhöht bin, werde ich alle an mich ziehen“ {8#Joh 12,32}.",
                "patr_resp1": "Alle, die in den Gräbern sind, werden die Stimme des Menschensohnes hören; und sie werden herauskommen.",
                "patr_resp2": "Die das Gute getan haben, werden zum Leben auferstehen, die das Böse getan haben, zum Gericht.",
                "patr_resp3": "Plötzlich, in einem Augenblick, beim letzten Posaunenschall werden die Toten auferweckt zur Unvergänglichkeit.",
                "ant1_lat": "",
                "ant2_lat": "",
                "ant3_lat": "",
                "patr_resp1_lat": "",
                "patr_resp2_lat": "",
                "patr_resp3_lat": "",
                "les_text_lat": ""
            },
            "laudes": {
                "hymn_1": 1440.0,
                "hymn_kl": 0.0,
                "psalm1": 51.0,
                "psalm2": 172.0,
                "psalm3": 146.0,
                "ant1": "Dem Herrn wird jubeln das zerschlagene Gebein.",
                "ant2": "Vor den Pforten der Unterwelt rette mein Leben, o Herr.",
                "ant3": "Meinen Gott will ich loben, solange ich lebe.",
                "les_buch": "1°Thess",
                "les_stelle": "4,14",
                "les_text": "Das ist unser Glaube: Wenn Jesus gestorben und auferstanden ist, dann wird Gott durch Jesus auch die Verstorbenen zusammen mit ihm zur Herrlichkeit führen.",
                "resp1": "Herr, ich will dich rühmen,",
                "resp2": "du hast mich herausgeholt aus dem Reich des Todes.",
                "resp3": "Meine Klage und Trauer hast du verwandelt in Freude.",
                "antev": "Ich bin die Auferstehung und das Leben; wer an mich glaubt, wird leben, auch wenn er stirbt, und jeder, der lebt und an mich glaubt, wird in Ewigkeit nicht sterben.",
                "bitten_e": "Gepriesen sei der allmächtige Gott, der seinen Sohn Jesus Christus von den Toten auferweckt hat und auch unseren sterblichen Leib neugestalten wird. Zu ihm lasst uns beten:",
                "bitten_r": "Schenke uns das Leben in Christus.",
                "bitten": "Ewiger Gott, durch die Taufe sind wir mit Christus gestorben und zu einem neuen Leben auferstanden;^qgib, dass wir aus der Kraft Christi leben.^pDu nährst uns mit dem lebendigen Brot, damit wir das ewige Leben haben;^qlass uns auferstehen in Herrlichkeit am Jüngsten Tag.^pDu hast deinen Sohn in seiner Todesangst durch den Engel gestärkt;^qsei unsere Zuversicht in der Stunde des Todes.^pGott der Lebenden und der Toten, wecke unsere Verstorbenen auf;^qmit ihnen gib auch uns Anteil am ewigen Leben.",
                "ant1_lat": "",
                "ant2_lat": "",
                "ant3_lat": "",
                "resp1_lat": "",
                "resp2_lat": "",
                "resp3_lat": "",
                "antev_lat": "",
                "bitten_e_lat": "",
                "bitten_r_lat": "",
                "bitten_lat": "",
                "les_text_lat": ""
            },
            "terz": {
                "hymn_1": 1440.0,
                "psalm1": 70.0,
                "psalm2": 85.0,
                "psalm3": 86.0,
                "ant0": "Herr, wende dich mir zu und errette mich.",
                "les_buch": "Ijob",
                "les_stelle": "19,25–26",
                "les_text": "Ich weiß: Mein Erlöser lebt. Am Letzten Tag werde ich auferstehen, und in meinem Leib werde ich meinen Gott schauen.",
                "resp0": "Warum bist du betrübt, meine Seele?",
                "resp1": "Harre auf Gott, denn ich werde ihm noch danken.",
                "ant0_lat": "",
                "resp0_lat": "",
                "resp1_lat": "",
                "les_text_lat": ""
            },
            "sext": {
                "hymn_1": 1440.0,
                "psalm1": 70.0,
                "psalm2": 85.0,
                "psalm3": 86.0,
                "ant0": "Heile mich, Herr, denn ich habe gegen dich gesündigt.",
                "les_buch": "Weish",
                "les_stelle": "1,13–14a.6.15",
                "les_text": "Gott hat den Tod nicht gemacht und hat keine Freude am Untergang der Lebenden. Zum Dasein hat er alles erschaffen. Das Reich des Todes hat keine Macht auf der Erde; denn die Gerechtigkeit ist unsterblich.",
                "resp0": "Muss ich auch wandern in finsterer Schlucht, ich fürchte kein Unheil.",
                "resp1": "Denn du, o Herr, bist bei mir.",
                "ant0_lat": "",
                "resp0_lat": "",
                "resp1_lat": "",
                "les_text_lat": ""
            },
            "non": {
                "hymn_1": 1440.0,
                "psalm1": 70.0,
                "psalm2": 85.0,
                "psalm3": 86.0,
                "ant0": "Hilf mir, o Gott, durch deinen Namen; mit deiner Stärke schaffe mir Recht.",
                "les_buch": "Jes",
                "les_stelle": "25,8",
                "les_text": "Gott beseitigt den Tod für immer. Gott, der Herr, wischt die Tränen ab von jedem Gesicht. Auf der ganzen Erde nimmt er von seinem Volk die Schande hinweg.",
                "resp0": "Herr, erhöre mein Gebet.",
                "resp1": "Zu dir kommt alles Fleisch.",
                "ant0_lat": "",
                "resp0_lat": "",
                "resp1_lat": "",
                "les_text_lat": ""
            },
            "vesper": {
                "hymn_1": 2512.0,
                "hymn_kl": 0.0,
                "psalm1": 121.0,
                "psalm2": 130.0,
                "psalm3": 157.0,
                "ant1": "Der Herr behüte dich vor allem Bösen, er behüte dein Leben.",
                "ant2": "Würdest du, Herr, unsere Sünden beachten, Herr, wer könnte bestehen?",
                "ant3": "Wie der Vater die Toten erweckt und lebendig macht, so macht auch der Sohn lebendig, wen er will.",
                "les_buch": "1°Kor",
                "les_stelle": "15,55–57",
                "les_text": "Tod, wo ist dein Sieg? Tod, wo ist dein Stachel? Der Stachel des Todes aber ist die Sünde, die Kraft der Sünde ist das Gesetz. Gott aber sei Dank, der uns den Sieg geschenkt hat durch Jesus Christus, unseren Herrn.",
                "resp1": "Christus muss herrschen, bis Gott ihm alle Feinde unter die Füße gelegt hat.",
                "resp2": "Der letzte Feind der vernichtet wird, ist der Tod.",
                "resp3": "Dann werden Tod und Totenwelt ihre Toten herausgeben. Und Tod und die Totenwelt werden in den Feuersee geworfen.",
                "antev": "Alles, was der Vater mir gibt, wird zu mir kommen, und wer zu mir kommt, den weise ich nicht zurück.",
                "bitten_e": "Lasst uns beten zu Christus, unserer Hoffnung:",
                "bitten_r": "Du bist unser Leben und unsere Auferstehung.",
                "bitten": "Herr, du hast deinen Freund Lazarus von den Toten auferweckt;^qerwecke unsere Verstorbenen zum ewigen Leben.^pDu Tröster der Trauernden;^qsei mit deinem Trost allen nahe, die um ihre Verstorbenen weinen.^pErbarme dich der Menschen, die keine Hoffnung haben;^qschenke ihnen den Glauben an die Auferstehung und an das Leben der kommenden Welt.^pDu bist ein gnädiger Richter;^qerbarme dich dessen, den du als den nächsten aus unserer Mitte vor dein Angesicht rufen wirst.^pSchenke allen Verstorbenen die ewige Ruhe^qund das ewige Licht leuchte ihnen.",
                "ant1_lat": "",
                "ant2_lat": "",
                "ant3_lat": "",
                "resp1_lat": "",
                "resp2_lat": "",
                "resp3_lat": "",
                "antev_lat": "",
                "bitten_e_lat": "",
                "bitten_r_lat": "",
                "bitten_lat": "",
                "les_text_lat": ""
            }
        },
        "o": {
            "vesper": {
                "antev": "Der am Kreuze starb, ist von den Toten erstanden und hat uns erlöst.^ö",
                "antev_lat": ""
            }
        }
    },

}