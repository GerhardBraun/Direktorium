export const getValue = ({ hour, texts, field,
    prefSrc, prefSollemnity, localPrefComm,
    localPrefPsalmsWt, localPrefErgPs,
    localPrefContinuous, localPrefKomplet }) => {
    if (!hour || !texts || !texts[hour]) {
        return null;
    }

    // Sonderfall Komplet
    if (hour === 'komplet') {
        if (localPrefKomplet === 'wt') {
            if (!texts?.komplet?.showKompletWt) { return null }
            if (texts['komplet']['eig']?.[field]) {
                return texts['komplet']['eig']?.[field];
            }
        }
        if (texts['komplet'][localPrefKomplet]?.[field]) {
            return texts['komplet'][localPrefKomplet]?.[field];
        }
        return null;
    }

    const { rank_date = 0, rank_wt = 0, isCommemoration, hasErsteVesper = false } = texts;

    // Feier wie ein Hochfest
    const isSollemnity = (hour === 'vesper' && hasErsteVesper)
        || prefSollemnity || rank_date === 5 || rank_wt === 5

    // Bei Vesper als Hochfest
    if (hour === 'vesper' && prefSollemnity) { hour = 'prefsollemnity'; }

    // Bei lokaler Feier als Hochfest Oration immer aus den Laudes
    if (prefSollemnity && field === 'oration') {
        if (texts['laudes'][prefSrc]?.['oration']) {
            return texts['laudes'][prefSrc]['oration'];
        }
        return null;
    }

    // Sonderfall Ergänzungspsalmodie
    if ((isSollemnity || localPrefErgPs) && texts[hour]?.['soll']?.[field]
    ) { return texts[hour]?.['soll']?.[field] }

    // Abruf der Werte für die Kommemoration
    if (field.startsWith('c_')) {
        field = field.substring(2);
        if (texts[hour][prefSrc]?.[field]) {
            return texts[hour][prefSrc][field];
        }
        if (field === 'ant_ev' && texts[hour][prefSrc]?.['ant_komm']) {
            return texts[hour][prefSrc]['ant_komm'];
        }
        if (texts[hour][prefSrc]?.['com1']?.[field]) {
            return texts[hour][prefSrc]?.['com1'][field];
        }
        return null;
    }

    // Prüfe, ob Commune übersprungen werden soll
    let skipCommune = false;
    if (rank_date < 3 && (  // an Gedenktagen
        (hour === 'lesehore' && // Lesehore: nur Hymnus und Oration ggf. Commune
            field !== 'oration') ||
        ((hour === 'laudes' || hour === 'vesper') &&  // Laudes/Vesper Psalmodie
            (field.startsWith('ps_') ||
                (field.startsWith('ant_') && !field.startsWith('ant_ev'))
            )) ||
        ['terz', 'sext', 'non'].includes(hour)) // Kleine Horen: ganz vom Wt
    ) { skipCommune = true }

    if (rank_date < 5 &&    // an Festen: Ant und Ps in Kleinen Horen vom Wt
        ['terz', 'sext', 'non'].includes(hour) &&
        (field.startsWith('ps_') || field.startsWith('ant_'))
    ) { skipCommune = true }

    if (isSollemnity) { skipCommune = false }

    const prefTexts = texts[hour]?.[prefSrc];
    let prefCommTexts = '';
    if (!skipCommune) {
        if (localPrefComm === 1
            || (isSollemnity && localPrefComm === 0)
        ) { prefCommTexts = prefTexts?.['com1'] }
        if (localPrefComm === 2
        ) { prefCommTexts = prefTexts?.['com2'] }
    }

    if ((!isCommemoration &&    // an Tagen mit Kommemoration und in Kl. Horen an Gedenktagen nur wt-Werte
        !(rank_date < 3 && ['terz', 'sext', 'non'].includes(hour)))
        || isSollemnity) {

        //Sonderfall Antiphonen
        if (field === 'ant_0' &&
            (prefTexts?.['ant_1'] || prefCommTexts?.['ant_1'])
        ) { return null }

        if ((field === 'ant_1' || field === 'ant_2' || field === 'ant_3') &&
            (prefTexts?.['ant_0'] || prefCommTexts?.['ant_0'])
        ) { return null }

        //Sonderfall Wochentagspsalmen
        if (hour !== 'invitatorium' && hour !== 'komplet' &&
            field.startsWith('ps_') &&
            localPrefPsalmsWt
        ) { return texts[hour]?.['wt']?.[field] }

        //Sonderfall Bahnlesung
        if (hour === 'lesehore' &&
            (field.startsWith('les_') ||
                field.startsWith('resp1_') ||
                field.startsWith('patr_')) &&
            localPrefContinuous
        ) { return texts[hour]?.['wt']?.[field] }

        // 1. Prüfe zuerst prefSrc
        if (prefTexts?.[field]) {
            return prefTexts[field]
        }

        // 2. Prüfe Commune (prefCommTexts ist leer, wenn Commune übersprungen werden soll)
        // Prüfe com2 wenn prefComm = 2
        if (prefCommTexts?.[field]) {
            return prefCommTexts[field]
        }
    }


    // 4. Verwende "wt" als letzte Option
    if (texts[hour]['wt']?.[field]) {
        return texts[hour]['wt'][field];
    }
    return null;
}