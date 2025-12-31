import { getExcludedHours } from "./ExcludedHours.js";
import { sollemnitiesData } from "../data/Sollemnities.ts";

export const getValue = ({ season, hour, texts, field,
    prefSrc, prefSollemnity,
    localPrefKomplet, localPrefComm,
    localPrefPsalmsWt, localPrefErgPs,
    localPrefContinuous, localPrefLanguage = '' }) => {
    if (!hour || !texts || !texts[hour])
        return null;

    if (hour === 'komplet')
        return getKompletValue({ texts, field, localPrefKomplet, localPrefLanguage })

    const { rank = { wt: 0, date: 0 },
        swdCombined, dayOfWeek } = texts;
    const languageField = field + localPrefLanguage
    const isForeignLanguage = localPrefLanguage.replace(/_neu|_ben/g, '')
    const allSouls = texts.dateCompare === '11-02'

    // Weihnachtsoktav: Vesper im Rang eines Festes
    const wtRankToCompare = (rank.wt === 2.4 && hour === 'vesper') ? 4 : rank.wt

    if (['kirchw', 'verst'].includes(prefSollemnity)) {
        const data = sollemnitiesData[prefSollemnity]
        const readValue = (field) => {
            const value = data?.[season]?.[hour]?.[field]
                || data?.each?.[hour]?.[field]
                || data?.each?.each?.[field]
                || null

            //Sonderfall: Orationen für Allerseelen
            if (typeof value === 'string' && allSouls) {
                if (value?.startsWith('^A:OmniumDefunctorum:'))
                    return "Preces nostras, quǽsumus, Dómine, benígnus exáudi, ut, dum attóllitur nostra fides in Fílio tuo a mórtuis suscitáto, in famulórum tuórum præstolánda resurrectióne spes quoque nostra firmétur.^ORlV"
                else if (value?.startsWith('^A:Allerseelen:'))
                    return "Allmächtiger Gott, wir glauben und bekennen, dass du deinen Sohn als Ersten von den Toten auferweckt hast. Stärke unsere Hoffnung, dass du auch unsere Brüder und Schwestern auferwecken wirst zum ewigen Leben.^ORV"
            }
            return value
        }
        const value = readValue(languageField)
        return value ? value + localPrefLanguage
            : readValue(field)
    }

    const replaceErgPs = (data) => {
        // Prüfe nur die kritischen Psalmen, die ersetzt werden müssen
        if (![121, 122, 126, 127].includes(data)) return data;

        // Bestimme, ob Commune-Texte geprüft werden sollen
        const textsEig = texts.vesper?.[prefSrc] || {};
        const textsCommune = (((prefSollemnity || (rank.date > 2 || rank.wt > 2))
            && localPrefComm > 0) &&
            texts.vesper?.[prefSrc]?.[`com${localPrefComm}`])
            || {};

        // Prüfe in der Vesper auf Konflikte mit Eigenpsalmen oder Commune-Psalmen
        if ([textsEig?.psalm1, textsEig?.psalm2].includes(data) ||
            [textsCommune?.psalm1, textsCommune?.psalm2].includes(data))
            // Ersatzpsalmen: 127→131, andere→129
            return (data === 127) ? 131 : 129;
        return data;
    };

    const result = (data) => {
        const standField = field.replace(/^c_/, '');
        const langField = languageField.replace(/^c_/, '');
        const standardResult = data?.[standField] || null;
        const languageResult = data?.[langField] || null;

        if (typeof languageResult === 'string' &&
            languageResult?.startsWith('comm:')) {
            const add = standardResult
                ? "^p^RUBROder: Eigene°Oration°auf°Deutsch:^0RUBR^l" + standardResult
                : '';
            return "^RUBRLateinische Commune-Oration:^0RUBR^l"
                + languageResult.replace('comm:', '')
                + add
                + localPrefLanguage;
        }
        else if (languageResult)
            return languageResult + localPrefLanguage;
        return standardResult;
    }

    const isPsalmodie = field.startsWith('psalm')
        ? true
        : (field.startsWith('ant') && !field.startsWith('antev')
            ? 'inclAnt'
            : false);
    // if (isPsalmodie) console.log('skipCommune: ', isPsalmodie, field, localPrefPsalmsWt);

    const isTSN = ['terz', 'sext', 'non'].includes(hour)

    const checkAnt0 = `ant0${isForeignLanguage}`
    const hasAnt0 = field.startsWith('ant') &&
        (texts[hour][prefSrc]?.[checkAnt0] ||
            texts[hour][prefSrc]?.[`com${localPrefComm}`]?.[checkAnt0])

    const hasEigFirstReading = !!texts.lesehore?.oblig?.les_text

    //Aschermittwoch und Allerseelen: trotz Hochfest keine Fest-Psalmodie in den Laudes
    const psalm51 = hour === 'laudes' &&
        (swdCombined === 'q-0-3' || allSouls)

    // Gedenktage mit Eigentexten für die Kleinen Horen:
    // Barnabas und Schutzengel
    const memorialWithTSN = ['06-11', '10-02'].includes(texts.dateCompare)

    // Feier wie ein Hochfest
    const isSollemnity = (hour === 'vesper' && texts?.rank?.hasErsteVesper)
        || prefSollemnity || rank.date === 5 ||
        (rank.date === 4 && dayOfWeek === 0) ||
        (rank.wt === 5 &&
            swdCombined !== 'q-0-3' &&
            !swdCombined.startsWith('q-6-') &&
            !swdCombined.startsWith('o-1-') &&
            dayOfWeek !== 0);

    // Bei lokaler Feier als Hochfest: Vespertexte aus prefSollemnity
    if (hour === 'vesper' && prefSollemnity === 'soll')
        hour = 'prefsollemnity';

    // Bei lokaler Feier als Hochfest Oration immer aus den Laudes
    if (prefSollemnity && field.startsWith('oration'))
        return result(texts.laudes[prefSrc]);

    // Sonderfall Ergänzungspsalmodie
    if (isPsalmodie && !localPrefPsalmsWt
        && (isSollemnity
            || (isTSN && localPrefErgPs && !getExcludedHours(texts, localPrefErgPs, 'PSALMODIE').includes(hour))
            || (hour === 'laudes' && rank?.useFeastPsalms)
        )) {
        if (!psalm51 && !hasAnt0) {
            const data = sollemnitiesData.soll?.[dayOfWeek]?.[hour]?.[languageField]
                || sollemnitiesData.soll?.[dayOfWeek]?.[hour]?.[field]
                || sollemnitiesData.soll.each?.[hour]?.[languageField]
                || sollemnitiesData.soll.each?.[hour]?.[field]

            if (data) return replaceErgPs(data)
        }
    }

    // Abruf der Werte für die Kommemoration
    if (field.startsWith('c_')) {
        const data = texts[hour][prefSrc]
        if (result(data)) return result(data);
        const antKomm = languageField === `c_antev${localPrefLanguage}`
            && data?.[`ant_komm${localPrefLanguage}`]
        console.log('Kommemoration: field, antKomm: ', languageField, antKomm);

        return antKomm
            || (field === 'c_antev' && data?.ant_komm)
            || data?.[`com${localPrefComm}`]?.[field]
            || data?.com1?.[field]
            || null;
    }

    // Prüfe, ob Commune übersprungen werden soll
    let skipCommune = wtRankToCompare >= rank.date;
    if (rank.date < 3  // an Gedenktagen
        && ((hour === 'lesehore' && field !== 'oration') // Lesehore: nur Hymnus und Oration ggf. Commune
            || (['laudes', 'vesper'].includes(hour) && isPsalmodie) // Laudes/Vesper Psalmodie
            || isTSN) // Kleine Horen: ganz vom Wt
    ) skipCommune = true
    if (rank.date < 5 && isTSN && isPsalmodie) // an Festen: Ant und Ps in Kleinen Horen vom Wt
        skipCommune = true
    if (isSollemnity) skipCommune = false
    if (isPsalmodie) {
        if (localPrefPsalmsWt) {
            skipCommune = true
            if (isPsalmodie === 'inclAnt' && localPrefPsalmsWt !== 'inclAnt')
                skipCommune = false
        }
        //console.log('skipCommune: ', isPsalmodie, field, localPrefPsalmsWt, skipCommune);
    }

    const prefTexts = texts[hour]?.[prefSrc] || texts[hour]?.pers
    let prefCommTexts = '';
    if (!skipCommune) {
        if (localPrefComm === 1
            //    || (isSollemnity && localPrefComm === 0)  // auskommentiert: auch an Hochfesten soll Wt-Auswahl möglich sein
        )
            prefCommTexts = prefTexts?.com1
        if (localPrefComm === 2)
            prefCommTexts = prefTexts?.com2
    }

    if ((!rank?.isCommemoration // an Tagen mit Kommemoration und in Kl. Horen an Gedenktagen nur wt-Werte
        && !(rank.date < 3 && isTSN && !memorialWithTSN))
        || isSollemnity) {

        //Sonderfall Wochentagspsalmen
        if (localPrefPsalmsWt && field.startsWith('psalm') &&
            hour !== 'invitatorium'
        ) return result(texts[hour]?.wt)

        //Sonderfall Bahnlesung
        if (localPrefContinuous && hour === 'lesehore') {
            if (/^(patr_)/.test(field) ||
                (/^(les_|resp)/.test(field) && (!localPrefComm || hasEigFirstReading)
                ))
                return result(texts[hour]?.wt)
        }

        //Sonderfall Antiphonen: entweder ant0 oder ant1-3
        if (languageField === `ant0${localPrefLanguage}` &&
            (prefTexts?.[`ant1${isForeignLanguage}`] || prefCommTexts?.[`ant1${isForeignLanguage}`])
        ) return null

        if ([`ant1${localPrefLanguage}`, `ant2${localPrefLanguage}`, `ant3${localPrefLanguage}`].includes(languageField) &&
            (prefTexts?.[`ant0${isForeignLanguage}`] || prefCommTexts?.[`ant0${isForeignLanguage}`])
        ) return null

        // 1. Prüfe zuerst prefSrc
        // 2. Prüfe Commune (prefCommTexts ist leer, wenn Commune übersprungen werden soll)
        if (result(prefTexts) || result(prefCommTexts))
            return result(prefTexts) || result(prefCommTexts)

    }
    return result(texts[hour].pers)
        || result(texts[hour].wt)
        || null;
}

const getKompletValue = ({ texts, field, localPrefKomplet, localPrefLanguage = '' }) => {
    if (!texts || !texts.komplet) return null;
    if (localPrefKomplet === 'wt' && !texts?.komplet?.showKompletWt) return null
    let { season, dayOfWeek, swdCombined } = texts;

    // Helper function to actually retrieve the field value
    const getFieldValue = (targetField) => {
        if (targetField.startsWith('oration') && localPrefKomplet !== 'wt') {
            if ([0, 6].includes(dayOfWeek) && swdCombined !== 'q-6-6')
                return dataKomplet?.[dayOfWeek]?.[targetField];
            else if (!swdCombined.startsWith('o-1-') && swdCombined !== 'o-2-0')
                return dataKomplet.sollemnity[targetField];
        }

        if (targetField.startsWith('resp1') &&
            (swdCombined.startsWith('o-1-') ||
                ['q-6-4', 'q-6-5', 'q-6-6', 'o-2-0'].includes(swdCombined))
        ) return '';

        // Anpassungen für Wochentag
        if (localPrefKomplet === 'k1') dayOfWeek = 6;
        if (localPrefKomplet === 'k2') dayOfWeek = 0;

        return dataKomplet?.[season]?.[targetField]
            || dataKomplet?.[season]?.[dayOfWeek]?.[targetField]
            || dataKomplet?.[dayOfWeek]?.[targetField]
            || dataKomplet?.each?.[targetField]
            || null;
    };

    // Get value with optional language suffix
    return getFieldValue(`${field}${localPrefLanguage}`)
        || getFieldValue(field);
};

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
        "antev": "Sei unser Heil, o°Herr, wenn wir wachen, und unser Schutz, wenn wir schlafen, damit wir wachen mit Christus und ruhen in Frieden.^Ö",
        "resp1_lat": "In manus tuas, Dómine,",
        "resp2_lat": "comméndo\u00a0spíritum\u00a0meum.",
        "resp3_lat": "Redemísti nos, Dómine Deus veritátis._lat",
        "antev_lat": "Salva nos, Dómine, vigilántes, custódi nos dormiéntes, ut vigilémus cum Christo et requiescámus in pace.^LÖ"
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
        "les_stelle": "5,8–9a",
        "les_text": "Seid nüchtern und wachsam! Euer Widersacher, der Teufel, geht wie ein brüllender Löwe umher und sucht, wen er verschlingen kann. Leistet ihm Widerstand in der Kraft des Glaubens!",
        "les_text_neu": "Seid nüchtern, seid wachsam! Euer Widersacher, der Teufel, geht wie ein brüllender Löwe umher und sucht, wen er verschlingen kann. Leistet ihm Widerstand in der Kraft des Glaubens!",
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
        "les_text_neu": "Wenn ihr zürnt, sündigt nicht! Die Sonne soll über eurem Zorn nicht untergehen. Gebt dem Teufel keinen Raum!",
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
        "les_text_neu": "Der Gott des Friedens heilige euch ganz und gar und bewahre euren Geist, eure Seele und euren Leib unversehrt, damit ihr ohne Tadel seid bei der Ankunft unseres Herrn Jesus Christus.",
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
        "les_stelle": "14,9b",
        "les_text": "Du bist in unsrer Mitte, Herr, und dein Name ist über uns ausgerufen; verlass uns nicht, Herr, unser Gott!",
        "les_text_neu": "Du bist in unsrer Mitte, HERR, und dein Name ist über uns ausgerufen. Verlass uns nicht, HERR, unser Gott!",
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
        "les_text_neu": "Höre, Israel! Der HERR, unser Gott, der HERR ist einzig. Darum sollst du den HERRN, deinen Gott, lieben mit ganzem Herzen, mit ganzer Seele und mit ganzer Kraft. Und diese Worte, auf die ich dich heute verpflichte, sollen auf deinem Herzen geschrieben stehen. Du sollst sie deinen Kindern wiederholen. Du sollst sie sprechen, wenn du zu Hause sitzt und wenn du auf der Straße gehst, wenn du dich schlafen legst und wenn du aufstehst.^RESP",
        "oration_komplet": "Herr, bleibe bei uns in dieser Nacht, und wenn wir uns am Morgen erheben, dann lass uns in Freude der Auferstehung deines Sohnes gedenken,^ORR",
        "ant1_lat": "Miserére mei, Dómine, et exáudi oratiónem meam.",
        "ant2_lat": "In nóctibus benedícite Dóminum.",
        "les_text_lat": "Audi Israel: Dóminus Deus noster Dóminus unus est. Díliges Dóminum Deum tuum ex toto corde tuo et ex tota ánima tua et ex tota fortitúdine tua. Erúntque verba hæc, quæ ego præcípio tibi hódie, in corde tuo, et inculcábis ea fíliis tuis et loquéris ea sedens in domo tua et ámbulans in itínere, decúmbens atque consúrgens.^LRESP",
        "oration_komplet_lat": "Vísita nos, quǽsumus, Dómine, hac nocte præsénti, ut, dilúculo tua virtúte surgéntes, de resurrectióne Christi tui gaudére valeámus.^ORlvR"
    }
};
