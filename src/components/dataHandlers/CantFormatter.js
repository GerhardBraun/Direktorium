// Psalmodieberechnung für den _cant-Modus:
// Wandelt abstrakte Gesangsmarker (|, ||, 1–4, ~, 0) in ^u/^b-Tags um.
// Exportiert: formatCantMarkers, bracketTrim

// Psalmodie-Kadenzstruktur je Psalmton: { Mittelkadenz: [v, b], Schlusskadenz: [v, b] }
export const PSALM_TONE_CADENCE = {
    'I': { mk: [0, 2], sk: [2, 1] },
    'Ia': { mk: [0, 2], sk: [2, 1] },
    'Ig': { mk: [0, 2], sk: [2, 1] },
    'Im': { mk: [0, 2], sk: [2, 1, 'noUnstressed'], skNoUnstressed: true },
    'II': { mk: [0, 1], sk: [1, 1] },
    'IIc': { mk: [0, 1], sk: [2, 1] },
    'IIm': { mk: [0, 1], sk: [2, 1, 'noUnstressed'], skNoUnstressed: true },
    'III': { mk: [0, 2], sk: [2, 1] },
    'IV': { mk: [2, 1], sk: [3, 1] },
    'IVa': { mk: [2, 1], sk: [1, 1] },
    'IVg': { mk: [2, 1], sk: [0, 1, 'singleTone'], skSingleTone: true },
    'V': { mk: [0, 1], sk: [0, 2] },
    'VI': { mk: [1, 1], sk: [3, 1] },
    'VII': { mk: [0, 2], sk: [0, 2] },
    'VIII': { mk: [0, 1], sk: [2, 1] },
    'VIIIa': { mk: [0, 1], sk: [2, 1] },
    'VIIIc': { mk: [0, 1], sk: [2, 1] },
    'IX': { mk: [0, 2], sk: [2, 1] },
    'X': { mk: [0, 1, 'maleVeff'], sk: [0, 2], mkMaleVeff: true },
};

// Wandelt die abstrakten Gesangsmarker (|, ||, 1–4, ~, 0) in ^u/^b-Tags um.
// Wird als Subroutine in formatPrayerText aufgerufen wenn marker === 'cant'.
export const formatCantMarkers = (text, mode) => {
    const cadence = PSALM_TONE_CADENCE[mode] || PSALM_TONE_CADENCE['IX']; // Default auf IX, falls kein Psalmton angegeben
    if (!cadence) return text;  // unbekannter Psalmton: Text unverändert lassen

    // Textanpassungen für den Gesang: [+…]/[-…] = Zeichenfolge hinzufügen/weglassen (Klammerform);
    // +e/-e als Kurzform nur für den Buchstaben e.
    text = text.replace(/\[([+-])([^\]]+)\]/g, (_, sign, content) => sign === '+' ? content : '');
    text = text.replace(/(?<!\^)\+e/g, 'e');
    text = text.replace(/(?<!\^)-e/g, '');
    text = text.replace(/(?<!\^)\'e/g, '’');

    // > vor Vokal → ^ELL-Tag (elidierende Silbe, grau-kursiv): muss vor dem ^b/^u-Tagging geschehen,
    // damit der Tag nicht innerhalb von ^b/^u landet und von processInlineFormats übergangen wird.
    // (Altnotation, wird schrittweise durch +/- ersetzt.)
    text = text.replace(/>([aeiouæm])/g, '^ELL$1^0ELL');

    // Teile in Halbverse auf. Trennzeichen ^*, ^p, ^+ bleiben im Array (captureGroups)
    const halfVerseRe = /(\^\*|\^p|\^\+)/;
    const parts = text.split(halfVerseRe);
    // parts = [hv0, sep0, hv1, sep1, …] wobei sep auch leer sein kann

    // Klassifiziere jeden Halbvers-Index: Mittelkadenz (mk) oder Schlusskadenz (sk)
    // Trenner ^* = Mittelkadenz, ^p = Schlusskadenz, ^+ = Flexa
    // Für jeden Halbvers ermitteln wir seinen nachfolgenden Trenner
    const result = [];
    let i = 0;
    while (i < parts.length) {
        const hv = parts[i];
        const sep = parts[i + 1] || '';
        i += 2;

        let cadenceType;
        if (sep === '^*') cadenceType = 'mk';
        else if (sep === '^p') cadenceType = 'sk';
        else if (sep === '^+') cadenceType = 'flexa';
        else cadenceType = 'sk'; // letzter Halbvers (kein Trenner) → Schlusskadenz

        result.push(formatHalfVerse(hv, cadence, cadenceType));
        if (sep) result.push(sep);
    }
    return result.join('');
};

// Verarbeitet einen einzelnen Halbvers und setzt ^u/^b-Tags
// Zerlegt einen Halbvers in Slots: jeder Slot enthält die Marker-Infos + den folgenden Silbentext.
// Struktur: { countdown: '1'|'2'|'3'|'4'|'', stressed: '|'|'||'|'', tilde: bool, syllBound: bool, text: string }
const tokenizeHalfVerse = (hv) => {
    const markerSplitRe = /((?:[|]{1,2}|[1-4]|~|(?<!\^)0)+)/g;
    const parts = hv.split(markerSplitRe);
    // parts = [prefixText, marker1, text1, marker2, text2, ...]
    const parseMarker = (m) => {
        const countdowns = m.match(/[1-4]/g) ?? [];
        return {
            countdown: countdowns[0] ?? '',
            countdowns,
            stressed: m.includes('||') ? '||' : /(?<!\|)\|(?!\|)/.test(m) ? '|' : '',
            tilde: m.includes('~'),
            syllBound: m.includes('0'),
        };
    };
    // Teilt einen Slot-Text an Wort-/Silbengrenzen auf (Leerzeichen und °-Platzhalter).
    // Gibt "Wort + nachfolgende Trennzeichen"-Einheiten zurück.
    // °– (geschütztes Leerzeichen + Gedankenstrich) gilt als Satzzeichen,
    // nicht als Wortgrenze → bleibt am vorangehenden Wort hängen.
    const splitWords = (text) =>
        text.match(/(?:[^\s°]|°–)*(?:(?!°–)[\s°])*/g)?.filter(s => s.length > 0) ?? [];
    // Fügt Slots ein: erster Sub-Slot erbt den Marker, weitere sind plain.
    const emptyMarker = { countdown: '', countdowns: [], stressed: '', tilde: false, syllBound: false };
    const pushSlots = (slots, markerInfo, text) => {
        const words = splitWords(text);
        if (words.length <= 1) {
            slots.push({ ...markerInfo, text });
        } else {
            slots.push({ ...markerInfo, text: words[0] });
            for (let k = 1; k < words.length; k++) {
                slots.push({ ...emptyMarker, text: words[k] });
            }
        }
    };
    const slots = [];
    if (parts[0]) pushSlots(slots, emptyMarker, parts[0]);
    for (let i = 1; i < parts.length; i += 2) {
        pushSlots(slots, parseMarker(parts[i] || ''), parts[i + 1] ?? '');
    }
    return slots;
};

const formatHalfVerse = (hv, cadence, cadenceType) => {
    if (!hv || !hv.trim()) return hv;

    // --- Flexa-Sonderfall (§ Sonderfall 4) ---
    if (cadenceType === 'flexa') {
        let result = hv;
        if (/(?<!\|)\|(?!\|)/.test(result)) {
            // | vorhanden → letzte Silbe direkt vor | unterstreichen, | entfernen.
            // [^\s°|0]+ matcht genau eine Silbe (0 = interne Silbengrenze wie Leerzeichen).
            // ([\s°0]*) absorbiert Silbengrenzen und Leerzeichen zwischen Silbe und |.
            result = result.replace(
                /([^\s°|0]+)([\s°0]*)(?<!\|)\|(?!\|)/,
                (_m, syl, space) => {
                    const vi = syl.search(CANT_VOWEL_RE);
                    if (vi < 0) return syl + space;
                    // Punkt unter dem silbenbildenden Vokal (erster Vokal des Diphthongs)
                    return syl.slice(0, vi) + '^d' + syl[vi] + '^0d' + syl.slice(vi + 1) + space;
                }
            );
        } else if (result.includes('~')) {
            // ~ vorhanden → letzte Silbe vor ~ und erste Silbe nach ~ klammern.
            // ([\s°0]*) absorbiert °, Leerzeichen und 0-Grenzen zwischen Silbe und ~.
            result = result.replace(
                /([^\s°|0]+)([\s°0]*)~([^\s°|0]+)/g,
                (_m, a, sep, b) => {
                    const [core, trail] = splitTrail(b);
                    return `^b${a}${sep}${core}^0b${trail}`;
                }
            );
        }
        // 0-Marker (Silbengrenzen) am Ende aus dem Text entfernen
        return result.replace(/(?<!\^)0/g, '');
    }

    const { v, b } = cadenceType === 'mk'
        ? { v: cadence.mk[0], b: cadence.mk[1] }
        : { v: cadence.sk[0], b: cadence.sk[1] };

    // --- Halbvers in Slots zerlegen und Marker-Positionen ablesen ---
    const slots = tokenizeHalfVerse(hv);

    let dblBarIdx = -1;
    const sglBarIdxs = [];
    const countdownIdxs = {};
    let tildeIdx = -1;
    slots.forEach((slot, idx) => {
        if (slot.stressed === '||') dblBarIdx = idx;
        if (slot.stressed === '|') sglBarIdxs.push(idx);
        slot.countdowns.forEach(c => countdownIdxs[c] = idx);
        if (slot.tilde) tildeIdx = idx;
    });

    if (dblBarIdx < 0) return hv; // kein ||: Text unverändert

    // Sonderfall 1 (b=1): || steht VOR | im Text (Nebenbetonung am Versende)
    const sonderfall1 = (b === 1) && sglBarIdxs.some(idx => idx > dblBarIdx);
    // Verkürzte Kadenz: Marker 4 und 3 auf demselben Slot (Vers zu kurz für separaten 3er-Slot)
    const has43Combined = b === 1 && !sonderfall1 &&
        countdownIdxs['4'] !== undefined &&
        countdownIdxs['4'] === countdownIdxs['3'];
    // Verkürzte Kadenz: Marker 3 und 2 auf demselben Slot, kein 4-Marker (Vers noch kürzer)
    const has32Combined = b === 1 && !sonderfall1 && !has43Combined &&
        countdownIdxs['3'] !== undefined &&
        countdownIdxs['2'] !== undefined &&
        countdownIdxs['3'] === countdownIdxs['2'];
    // Sonderfall 3 (b=1): 4-Marker vorhanden (aber nicht wenn 4+3 kombiniert auf einem Slot)
    const has4 = !has43Combined && ('4' in countdownIdxs);
    // skNoUnstressed: bei männlichem Versschluss kein vEff=v+1, weil der 4-Marker
    // dort keine zusätzliche Kadenzstelle eröffnet, sondern nur den Kadenzanfang markiert.
    const noUnstressed = !!(cadence.skNoUnstressed && cadenceType === 'sk');
    const v_eff = (b === 1 && has4 && !noUnstressed) ? v + 1 : v;

    // Kadenzanfang (Slot-Index)
    let cadStartIdx;
    if (b === 2) {
        const preBars = sglBarIdxs.filter(idx => idx < dblBarIdx);
        cadStartIdx = preBars.length > 0 ? Math.min(dblBarIdx, preBars[0]) : dblBarIdx;
    } else {
        if (sonderfall1) {
            const active = Object.entries(countdownIdxs)
                .filter(([k]) => parseInt(k) <= v_eff)
                .sort((a, b) => parseInt(b[0]) - parseInt(a[0]));
            cadStartIdx = active.length > 0 ? active[0][1] : dblBarIdx;
        } else {
            cadStartIdx = v_eff === 0 ? dblBarIdx : (countdownIdxs[String(v_eff)] ?? dblBarIdx);
        }
    }

    // noUnstressed SK mit zwei 1-Markern: cadStartIdx von b abhängig korrigieren.
    // countdownIdxs['1'] zeigt nur auf den letzten 1-Marker-Slot; der erste muss separat
    // gesucht werden. b=1 → rechte (letzte) 1; b=2 → linke (erste) 1; b≥3 unverändert.
    if (noUnstressed && cadenceType === 'sk') {
        const oneIdxs = slots.reduce((acc, slot, idx) => {
            if (idx < dblBarIdx && slot.countdowns.includes('1')) acc.push(idx);
            return acc;
        }, []);
        if (oneIdxs.length >= 2) {
            if (v === 1) cadStartIdx = oneIdxs[oneIdxs.length - 1]; // rechte (letzte) 1
            else if (v === 2) cadStartIdx = oneIdxs[0];             // linke (erste) 1
            // v >= 3: countdownIdxs[String(v_eff)] greift bereits korrekt
        }
    }

    // Verkürzte Kadenz (b=1, männlicher Versschluss): 43-kombinierter Slot trägt T4 + T3.
    // v_eff im Code bleibt v (weil has4=false), aber reale vEff = v+1 (männlicher Versschluss).
    // Deshalb: cadStartIdx ggf. auf den richtigen Slot korrigieren:
    //   realVEff ≥ 3 → auf den 43-kombinierten Slot; realVEff = 2 → auf den 2-Marker-Slot.
    // Tilde (Signal: zwei Kadenztöne auf einer Silbe) nur wenn realVEff = 4.
    if (has43Combined) {
        const isMaennlichShort = !slots.slice(dblBarIdx + 1).some(s => s.text.trim().length > 0);
        const realVEff43 = isMaennlichShort && !noUnstressed ? v + 1 : v;
        if (realVEff43 >= 3 && cadStartIdx !== countdownIdxs['3']) {
            cadStartIdx = countdownIdxs['3']; // = 43-kombinierter Slot
        }
        // v=1, männlicher Versschluss → realVEff43=2: cadStartIdx auf den 2-Marker-Slot.
        if (isMaennlichShort && !noUnstressed && realVEff43 === 2) {
            cadStartIdx = countdownIdxs['2'] ?? cadStartIdx;
        }
        if (isMaennlichShort && realVEff43 >= 4) {
            const cadSlot = slots[cadStartIdx];
            const t = cadSlot.text;
            const endsWithSep = t.length > 0 && (t[t.length - 1] === ' ' || t[t.length - 1] === '°');
            cadSlot.text = endsWithSep
                ? t.slice(0, t.length - 1) + '~' + t.slice(t.length - 1)
                : t + '~';
        }
    }
    // Verkürzte Kadenz (b=1, weiblicher Versschluss): Marker 3 und 2 auf einer Silbe.
    // Tilde nur wenn vEff ≥ 3 (Marker 3 ist aktive Kadenzstelle) – analog zu has43Combined.
    if (has32Combined && v_eff >= 3) {
        const cadSlot = slots[countdownIdxs['3']];
        const t = cadSlot.text;
        const endsWithSep = t.length > 0 && (t[t.length - 1] === ' ' || t[t.length - 1] === '°');
        cadSlot.text = endsWithSep
            ? t.slice(0, t.length - 1) + '~' + t.slice(t.length - 1)
            : t + '~';
    }

    // Sonderfall: zwei aufeinanderfolgende Silben mit 1-Marker (b=1).
    // Beide Silben teilen dieselbe Melodiestelle und sollen als Klammer verbunden werden.
    // Erkennung: ein Slot mit countdown='1' gefolgt von einem weiteren Slot mit countdown='1'.
    let dual1Idx = -1;
    if (b === 1 && !sonderfall1 && !noUnstressed) {
        for (let i = 0; i < dblBarIdx - 1; i++) {
            if (slots[i].countdowns.includes('1') && slots[i + 1].countdowns.includes('1')) {
                dual1Idx = i;
                break;
            }
        }
    }

    // Ton-Zuweisung: tone[slotIdx] = 0 (Rezitation) | 4 (Unterstr.) | 3 | 2 | 1 (Klammer)
    const tone = new Array(slots.length).fill(0);

    if (b === 2) {
        const preBars = sglBarIdxs.filter(idx => idx < dblBarIdx);
        if (preBars.length >= 2) {
            preBars.sort((a, b) => a - b);
            assignTonesThreeStressed(tone, preBars[0], preBars[1], dblBarIdx);
        } else {
            assignTonesB2(tone, slots, cadStartIdx, dblBarIdx, sglBarIdxs);
        }
    } else {
        if (cadence.skSingleTone && cadenceType === 'sk') {
            // skSingleTone (z. B. IVg): einziger Kadenzton ist T1.
            // Männlicher Versschluss: || fällt auf T1 → unterstreichen.
            // Weiblicher Versschluss: || steht noch vor T1; Koda (Folgesilben) = T1 → durchgehend unterstreichen.
            const isMaennlich = !slots.slice(dblBarIdx + 1).some(s => s.text.trim().length > 0);
            if (isMaennlich) {
                tone[dblBarIdx] = 4; // || = T1
            } else {
                // tone[dblBarIdx] bleibt 0 (||: keine eigene Unterstreichung)
                for (let i = dblBarIdx + 1; i < slots.length; i++) tone[i] = 5; // Koda = T1
            }
        } else if (sonderfall1) {
            assignTonesB1Sonderfall1(tone, slots, cadStartIdx, dblBarIdx, sglBarIdxs);
        } else if (cadenceType === 'mk' && cadence.mkMaleVeff && !has4) {
            // Ton X Sonderfall: männliches Versende in der Mittelkadenz verhält sich wie
            // Sonderfall 3 in der Schlusskadenz → vEff = v+1 = 1; || fällt auf letzten Ton.
            const isMaennlich = !slots.slice(dblBarIdx + 1).some(s => s.text.trim().length > 0);
            if (isMaennlich && countdownIdxs['1'] !== undefined) {
                tone[countdownIdxs['1']] = 4; // neuer Kadenzanfang bei 1-Marker
                tone[dblBarIdx] = 1;          // || auf letztem Ton
            } else {
                assignTonesB1(tone, slots, cadStartIdx, dblBarIdx, has4);
            }
        } else {
            assignTonesB1(tone, slots, cadStartIdx, dblBarIdx, has4, noUnstressed);
        }
    }

    // Tilde-Erweiterung des Kadenzanfangs:
    // b=2, Tilde im T3-Slot: alle Silben von cadStartIdx bis tildeIdx → tone=5
    //   (gemeinsame Unterstreichung statt Einzelunterstreichung + Klammerung)
    // b=1, Tilde im T1-Slot: Silbe nach T2 schieben
    //   v=0: cadStartIdx (= ||) bis tildeIdx → tone=5 (Unterstreichung verlängert)
    //   v>0: Slots von ||+1 bis tildeIdx → tone=2 (Klammerung mit ||)
    // Tilde in einem anderen Slot als T3 (b=2) bzw. T1 (b=1) bleibt unberücksichtigt.
    if (tildeIdx >= 0) {
        if (b === 2 && tone[tildeIdx] === 3) {
            for (let i = cadStartIdx; i <= tildeIdx; i++) tone[i] = 5;
        } else if (b === 1 && tone[tildeIdx] === 1) {
            if (v_eff === 0) {
                for (let i = dblBarIdx; i <= tildeIdx; i++) tone[i] = 5;
            } else {
                for (let i = dblBarIdx + 1; i <= tildeIdx; i++) tone[i] = 2;
            }
        }
    }

    // Sonderfall: zwei aufeinanderfolgende 1-Marker-Silben → beide auf tone=3 setzen,
    // damit sie in buildTaggedText zu einer Klammer gruppiert werden.
    // Ton 3 vermeidet Verschmelzung mit || (tone=1 bei Sonderfall 3 oder tone=2 bei normalem b=1).
    if (dual1Idx >= 0) {
        tone[dual1Idx] = 3;
        tone[dual1Idx + 1] = 3;
    }

    return buildTaggedText(slots, tone);
};

// Hilfsfunktion: Tonzuweisung für b=1 (Normalfall)
// Slot-Index zeigt direkt auf den Silbentext → kein Marker-Überspringen nötig.
// noUnstressed: kein eigener Ton nach ||; Folgesilben werden mit || in eine Klammer gezogen.
const assignTonesB1 = (tone, slots, cadStartIdx, dblBarIdx, has4, noUnstressed = false) => {
    tone[cadStartIdx] = 4; // Kadenzanfang: Unterstreichung
    // Slots zwischen cadStart und || bleiben tone=0 (jede Silbe auf eigenem Schritt, plain)
    if (cadStartIdx === dblBarIdx) {
        // v=0: cadenz beginnt bei ||; Koda = letzter Ton
        if (!has4) {
            for (let i = cadStartIdx + 1; i < slots.length; i++) tone[i] = 1;
        }
    } else {
        if (has4) {
            tone[dblBarIdx] = 1; // Sonderfall 3: || ist letzter Ton
        } else {
            tone[dblBarIdx] = 2; // vorletzter Ton
            // noUnstressed: Koda-Silben haben keinen eigenen Ton → gleicher Ton wie ||,
            // damit sie in der Anzeige mit || zusammengeklammert werden.
            const kodaTone = noUnstressed ? 2 : 1;
            for (let i = dblBarIdx + 1; i < slots.length; i++) tone[i] = kodaTone;
        }
    }
};

// Hilfsfunktion: Sonderfall 1 b=1 (Nebenbetonung am Versende, || vor |)
const assignTonesB1Sonderfall1 = (tone, slots, cadStartIdx, dblBarIdx, sglBarIdxs) => {
    const postBar = sglBarIdxs.find(idx => idx > dblBarIdx); // immer vorhanden (Sonderfall1-Bedingung)
    tone[cadStartIdx] = 4; // Kadenzanfang: Unterstreichung
    if (cadStartIdx === dblBarIdx) {
        // v=0: || ist Kadenzanfang; || und alle Zwischensilben bis | → durchgehende Unterstreichung
        for (let i = dblBarIdx; i < postBar; i++) tone[i] = 5;
    } else {
        // v>0: || → T2; alle Zwischensilben bis | ebenfalls T2 (eine Klammergruppe)
        tone[dblBarIdx] = 2;
        for (let i = dblBarIdx + 1; i < postBar; i++) tone[i] = 2;
    }
    tone[postBar] = 1; // | → letzter Ton
    for (let i = postBar + 1; i < slots.length; i++) tone[i] = 1;
};

// Hilfsfunktion: Tonzuweisung für b=2 (weiblicher/männlicher Versschluss)
const assignTonesB2 = (tone, slots, cadStartIdx, dblBarIdx, sglBarIdxs) => {
    const postBars = sglBarIdxs.filter(idx => idx > dblBarIdx);
    const firstStressed = cadStartIdx;
    const secondStressed = postBars.length > 0 ? postBars[0] : dblBarIdx;

    const isMaennlich = !slots.slice(secondStressed + 1).some(s => s.text.trim().length > 0);

    tone[firstStressed] = 4; // Kadenzanfang: Unterstreichung

    if (!isMaennlich) {
        // Weiblicher Versschluss
        if (firstStressed < dblBarIdx) {
            // Normalfall: | vor ||
            for (let i = firstStressed + 1; i < dblBarIdx; i++) tone[i] = 3;
            tone[dblBarIdx] = 2;
            if (postBars.length > 0) tone[postBars[0]] = 2;
            const afterSecond = postBars.length > 0 ? postBars[0] : dblBarIdx;
            for (let i = afterSecond + 1; i < slots.length; i++) tone[i] = 1;
        } else if (postBars.length > 0) {
            // || vor |: Kadenzanfang (||) bleibt T4, Zwischensilben → T3, | → T2, Koda → T1
            for (let i = dblBarIdx + 1; i < postBars[0]; i++) tone[i] = 3;
            tone[postBars[0]] = 2;
            for (let i = postBars[0] + 1; i < slots.length; i++) tone[i] = 1;
        }
    } else {
        // Männlicher Versschluss mit genau zwei |/||-Markern:
        // T3: alle unbetonten Silben außer der letzten
        // T2: nur die letzte unbetonte Silbe vor dem zweiten Marker
        // T1: zweiter Marker (betonte Schlusssilbe)
        const unstrBetween = [];
        for (let i = firstStressed + 1; i < secondStressed; i++) {
            if (slots[i].text.trim()) unstrBetween.push(i);
        }
        for (let i = 0; i < unstrBetween.length - 1; i++) tone[unstrBetween[i]] = 3;
        if (unstrBetween.length > 0) tone[unstrBetween[unstrBetween.length - 1]] = 2;
        tone[secondStressed] = 1;
    }
};

// Hilfsfunktion: Sonderfall drei betonte Silben (b=2, zwei | + ein ||)
const assignTonesThreeStressed = (tone, bar1, bar2, dblBarIdx) => {
    tone[bar1] = 4; // erste betonte Silbe: Unterstreichung
    for (let i = bar1 + 1; i < bar2; i++) tone[i] = 3; // zwischen bar1 und bar2: Ton 3
    tone[bar2] = 2; // zweite betonte Silbe
    // alle Folgesilben nach bar2 (vor ||) → Ton 2 (gleiche Gruppe wie zweiter |-Marker)
    for (let i = bar2 + 1; i < dblBarIdx; i++) tone[i] = 2;
    tone[dblBarIdx] = 1; // || → letzter Ton
};

// Baut den getaggten Text aus Slots und Ton-Zuweisung zusammen.
// Jeder Slot enthält genau einen Silbentext; kein Marker-Überspringen nötig.
// Hilfsfunktion: trennt abschließende Leerzeichen, °-Platzhalter, Tilde und
// Satzzeichen vom Kerntext ab (bleiben außerhalb von ^u/^b-Tags).
const splitTrail = (s) => {
    let i = s.length;
    while (i > 0 && ' °~–.,;:’‘“!?^])'.includes(s[i - 1])) i--;
    return [s.slice(0, i), s.slice(i)];
};
const buildTaggedText = (slots, tone) => {
    let out = '';
    let i = 0;
    while (i < slots.length) {
        const t_tone = tone[i];
        const text = slots[i].text;
        if (t_tone === 0) {
            out += text;
            i++;
        } else if (t_tone === 4) {
            const [core, trail] = splitTrail(text);
            out += `^u${core}^0u` + trail;
            i++;
        } else if (t_tone === 5) {
            // tone=5: erweiterte Unterstreichung — aufeinanderfolgende Slots → ein ^u...^0u
            let j = i + 1;
            let group = text;
            while (j < slots.length && tone[j] === 5) {
                // \u200b als Silbengrenze zwischen Slots: jede Slot-Grenze ist eine Silbengrenze,
                // damit bracketTrim keinen Diphthong-Fehlmatch über Silbengrenzen hinweg erzeugt.
                group += '\u200b';
                group += slots[j].text;
                j++;
            }
            const [core, trail] = splitTrail(group);
            out += `^u${core}^0u` + trail;
            i = j;
        } else {
            // Töne 1, 2, 3: aufeinanderfolgende gleiche Töne → Klammer
            let j = i + 1;
            let group = text;
            while (j < slots.length && tone[j] === t_tone) {
                // \u200b als Silbengrenze zwischen Slots (s. o.)
                group += '\u200b';
                group += slots[j].text;
                j++;
            }
            if (j > i + 1) {
                const [core, trail] = splitTrail(group);
                out += `^b${core}^0b` + trail;
            } else {
                out += text;
            }
            i = j;
        }
    }
    // ^b innerhalb ^u..^0u auflösen: Unterstreichung auf den gesamten Bereich ausdehnen.
    // Zeichen nach ^0b bis zum nächsten Trenner (Leerzeichen, °, ^) = Auslaut-Konsonanten,
    // die noch zur Silbe gehören → ebenfalls in die Unterstreichung einschließen.
    // Muster: ^u[A]^b[B]^0u[C]^0b[Auslaut] → ^u[A][B][C][Auslaut]^0u
    return out.replace(
        /\^u([^^]*)\^b([^^]*)\^0u([^^]*)\^0b([^ °^]*)/g,
        (_, a, b, c, coda) => `^u${a}${b}${c}${coda}^0u`
    );
};

// Berechnet Anlaut- und Auslaut-Trimming für psalm-cant-bracket-Spans.
// Links:  Anlaut-Konsonanten; bei öffnendem Diphthong auch erster Vokal → außerhalb Klammer.
// Rechts: Auslaut-Konsonanten; bei schließendem Diphthong auch zweiter Vokal → außerhalb Klammer.
// Wort-Trennzeichen (Leerzeichen, °) stoppen den Scan.
const CANT_VOWEL_RE = /[aeiouäëïöüáéíóúàèìòùAEIOUÄÖÜÁÉÍÓÚÀÈÌÒÙ]/;
const CANT_DIPHTHONGS = new Set(['ei', 'ai', 'au', 'eu', 'äu', 'ie', 'ae', 'oe']);
export const bracketTrim = (content) => {
    // Wenn der Inhalt ^-Tags enthält (z. B. ^ELL...^0ELL durch Elisionsersetzung):
    // zeichenweises Scan-Trimming ist nicht möglich → kein Trimming.
    if (content.includes('^')) return { left: '', inner: content, right: '' };
    // \u200b (Zero-Width Space) wird als Silbengrenze zwischen 0-markierten Slots eingefügt;
    // es muss wie Leerzeichen und ° als Trennzeichen behandelt werden, um Diphthong-Fehlmatch
    // über Silbengrenzen hinweg (z. B. 'ae' in 'ra' + 'el') zu verhindern.
    const isSep = c => c === ' ' || c === '°' || c === '\u200b';
    // Linker Rand: Anlaut-Konsonanten; bei öffnendem Diphthong auch erster Vokal
    let li = 0;
    while (li < content.length && !CANT_VOWEL_RE.test(content[li]) && !isSep(content[li])) li++;
    if (li < content.length - 1 && CANT_VOWEL_RE.test(content[li]) && !isSep(content[li + 1])) {
        const pair = (content[li] + content[li + 1]).toLowerCase();
        if (CANT_DIPHTHONGS.has(pair)) li++;
    }
    // Rechter Rand: Auslaut-Konsonanten; bei schließendem Diphthong auch zweiter Vokal
    let ri = content.length;
    while (ri > li && !CANT_VOWEL_RE.test(content[ri - 1]) && !isSep(content[ri - 1])) ri--;
    if (ri > li + 1 && CANT_VOWEL_RE.test(content[ri - 1]) && CANT_VOWEL_RE.test(content[ri - 2]) && !isSep(content[ri - 2])) {
        const pair = (content[ri - 2] + content[ri - 1]).toLowerCase();
        if (CANT_DIPHTHONGS.has(pair)) ri--;
    }
    return { left: content.slice(0, li), inner: content.slice(li, ri), right: content.slice(ri) };
};
