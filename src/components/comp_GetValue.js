export const getValue = ({ hour, texts, field,
    prefSrc, prefSollemnity, localPrefComm,
    localPrefPsalmsWt, localPrefErgPs,
    localPrefContinuous, localPrefLanguage = '' }) => {
    if (!hour || !texts || !texts[hour]) {
        return null;
    }

    const getValueWithLanguage = (field) => {
        if (localPrefLanguage) {
            const languageField = `${field}${localPrefLanguage}`;
            const languageResult = getFieldValue(languageField);
            if (languageResult) {
                return languageResult;
            }
        }
        return getFieldValue(field);
    };

    // Helper function für die eigentliche Feldabfrage
    const getFieldValue = (field) => {
        const { rank_date = 0, rank_wt = 0, isCommemoration, hasErsteVesper = false, combinedSWD, dayOfWeek } = texts;
        const sollemnityErsteVesper = () => ['soll', 'kirchw'].includes(prefSollemnity)
        const isTSN = ['terz', 'sext', 'non'].includes(hour)
        const isKirchwVerst = ['kirchw', 'verst'].includes(prefSollemnity)

        // Feier wie ein Hochfest
        const isSollemnity = (hour === 'vesper' && hasErsteVesper)
            || prefSollemnity || rank_date === 5 ||
            (rank_wt === 5 &&
                combinedSWD !== 'q-0-3' &&
                !combinedSWD.startsWith('q-6-') &&
                !combinedSWD.startsWith('o-1-') &&
                dayOfWeek !== 0);

        // Bei Vesper als Hochfest
        if (hour === 'vesper' && sollemnityErsteVesper()) { hour = 'prefsollemnity'; }

        // Bei lokaler Feier als Hochfest Oration immer aus den Laudes
        if (prefSollemnity === 'soll' && field === 'oration') {
            if (texts.laudes[prefSrc]?.oration) {
                return texts.laudes[prefSrc].oration;
            }
            return null;
        }

        // Sonderfall Ergänzungspsalmodie
        if ((field.startsWith('ps_') ||
            (field.startsWith('ant_') && !field.startsWith('ant_ev'))
        ) && (isSollemnity || (localPrefErgPs && isTSN))
        ) {
            let sollSource = prefSollemnity ? prefSollemnity : 'soll';
            if (texts[hour]?.[sollSource]?.[field]) {
                return texts[hour]?.[sollSource]?.[field]
            } else if (isKirchwVerst) { return null; }
        }

        // Abruf der Werte für die Kommemoration
        if (field.startsWith('c_')) {
            field = field.substring(2);
            if (texts[hour][prefSrc]?.[field]) {
                return texts[hour][prefSrc][field];
            }
            if (field === 'ant_ev' && texts[hour][prefSrc]?.ant_komm) {
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

                ((hour === 'laudes' || hour === 'vesper') &&  // Laudes/Vesper Psalmodie
                    (field.startsWith('ps_') ||
                        (field.startsWith('ant_') && !field.startsWith('ant_ev'))
                    )) ||
                isTSN) // Kleine Horen: ganz vom Wt
        ) { skipCommune = true }

        if (rank_date < 5 && isTSN &&  // an Festen: Ant und Ps in Kleinen Horen vom Wt
            (field.startsWith('ps_') || field.startsWith('ant_'))
        ) { skipCommune = true }

        if (isSollemnity) { skipCommune = false }
        if (isKirchwVerst) { skipCommune = true }

        let prefTexts = texts[hour]?.[prefSrc];
        if (!prefTexts) { prefTexts = texts[hour]?.pers }
        if (isKirchwVerst) { prefTexts = texts[hour]?.[prefSollemnity] }

        let prefCommTexts = '';
        if (!skipCommune) {
            if (localPrefComm === 1
                || (isSollemnity && localPrefComm === 0)
            ) { prefCommTexts = prefTexts?.com1 }
            if (localPrefComm === 2
            ) { prefCommTexts = prefTexts?.com2 }
        }

        if ((!isCommemoration && !(rank_date < 3 && isTSN)) // an Tagen mit Kommemoration und in Kl. Horen an Gedenktagen nur wt-Werte
            || isSollemnity) {

            //Sonderfall Antiphonen: entweder ant_0 oder ant_1-3
            if (field === 'ant_0' &&
                (prefTexts?.ant_1 || prefCommTexts?.ant_1)
            ) { return null }

            if ((field === 'ant_1' || field === 'ant_2' || field === 'ant_3') &&
                (prefTexts?.ant_0 || prefCommTexts?.ant_0)
            ) { return null }

            //Sonderfall Wochentagspsalmen
            if (localPrefPsalmsWt &&
                hour !== 'invitatorium' && hour !== 'komplet' &&
                field.startsWith('ps_')
            ) { return texts[hour]?.wt?.[field] }

            //Sonderfall Bahnlesung
            if (localPrefContinuous &&
                hour === 'lesehore' &&
                (field.startsWith('les_')
                    || field.startsWith('resp1_')
                    || field.startsWith('patr_'))
            ) { return texts[hour]?.wt?.[field] }

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

    // Hauptaufruf
    return getValueWithLanguage(field);
}