// getValue.js
export const getValue = ({ hour, texts, field,
    prefSrc, prefSollemnity,
    localPrefComm, localPrefPsalmsWt, localPrefContinuous, localPrefKomplet }) => {
    if (!hour || !texts || !texts[hour]) {
        return null;
    }

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
    const isSollemnity = (hour === 'vesper' && hasErsteVesper) || prefSollemnity

    // Bei Vesper als Hochfest
    if (hour === 'vesper' && prefSollemnity) { hour = 'prefsollemnity'; }

    // Bei lokaler Feier als Hochfest Oration immer aus den Laudes
    if (prefSollemnity && field === 'oration') {
        if (texts['laudes'][prefSrc]?.['oration']) {
            return texts['laudes'][prefSrc]['oration'];
        }
        return null;
    }

    // Abruf der Werte für die Kommemoration
    if (field.startsWith('c_')) {
        console.log('Abruf Kommemoration: \nhour/prefSrc/field\n', hour, prefSrc, field)
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
            !field.startsWith('hymn_') && field !== 'oration') ||
        ((hour === 'laudes' || hour === 'vesper') &&  // Laudes/Vesper Psalmodie
            (field.startsWith('ps_') ||
                (field.startsWith('ant_') && !field.startsWith('ant_ev'))
            )) ||
        ['terz', 'sext', 'non'].includes(hour)) // Kleinen Horen: ganz vom Wt
    ) { skipCommune = true }

    if (rank_date < 5 &&    // an Festen: Ant und Ps in Kleinen Horen vom Wt
        ['terz', 'sext', 'non'].includes(hour) &&
        (field.startsWith('ps_') || field.startsWith('ant_'))
    ) { skipCommune = true }

    if (isSollemnity) { skipCommune = false }

    const fallbackCom1 = !skipCommune &&
        (localPrefComm === 1 || prefSollemnity ||
            (texts.hasErsteVesper && hour === 'vesper'));
    const fallbackCom2 = !skipCommune &&
        (localPrefComm === 2 || prefSollemnity ||
            (texts.hasErsteVesper && hour === 'vesper'));

    if ((!isCommemoration &&    // an Tagen mit Kommemoration und in Kl. Horen an Gedenktagen nur wt-Werte
        !(rank_date < 3 && ['terz', 'sext', 'non'].includes(hour)))
        || isSollemnity) {
        // Sonderfall Hymnen
        if ((field === 'hymn_kl' || field === 'hymn_nacht') &&
            (texts[hour]?.[prefSrc]?.['hymn_1']
                || prefSollemnity
                || (fallbackCom1 && texts[hour]?.[prefSrc]?.['com1']?.['hymn_1'])
                || (fallbackCom2 && texts[hour]?.[prefSrc]?.['com2']?.['hymn_1'])
            )) { return null }

        //Sonderfall Antiphonen
        if (field === 'ant_0' &&
            (texts[hour]?.['eig']?.['ant_1']
                || (fallbackCom1 && texts[hour]?.[prefSrc]?.['com1']?.['ant_1'])
                || (fallbackCom2 && texts[hour]?.[prefSrc]?.['com2']?.['ant_1']))
        ) { return null }

        if (field.startsWith('ant_') && field !== 'ant_0') {
            if (texts[hour]?.['eig']?.['ant_0']
                || (fallbackCom1 && texts[hour]?.[prefSrc]?.['com1']?.['ant_0'])
                || (fallbackCom2 && texts[hour]?.[prefSrc]?.['com2']?.['ant_0'])
            ) { return null }
        }

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
        if (texts[hour][prefSrc]?.[field]) {
            return texts[hour][prefSrc][field];
        }

        // 2. & 3. Prüfe Commune nur wenn nicht übersprungen werden soll
        if (!skipCommune) {
            // Prüfe com2 wenn prefComm = 2
            if (fallbackCom2 && texts[hour][prefSrc]?.['com2']?.[field]) {
                return texts[hour][prefSrc]?.['com2'][field];
            }
            // Prüfe com1 wenn prefComm = 1 oder prefSollemnity gewählt ist
            if (fallbackCom1 && texts[hour][prefSrc]?.['com1']?.[field]) {
                return texts[hour][prefSrc]?.['com1'][field];
            }
        }
    }

    // 4. Verwende "wt" als letzte Option
    if (texts[hour]['wt']?.[field]) {
        return texts[hour]['wt'][field];
    }
    return null;
}