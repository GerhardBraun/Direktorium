import { getLocalStorage } from '../utils/localStorage.js';
import { tableOfRanks } from '../data/TableOfRanks.ts';

const diocese = getLocalStorage('diocese') || 'Fulda'

const daysToMilliseconds = (days) => days * 24 * 60 * 60 * 1000;

const writeOut = (season, week, dayOfWeek, swdCombined, day, afterPentecost) => {

    const days = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    const dayName = days[dayOfWeek];

    // Spezielle Festtage basierend auf swdCombined bzw. afterPentecost
    const specialFeastDays = {
        'w-1-0': 'Fest der Heiligen Familie',
        'j-1-0': 'Fest der Taufe Jesu',
        'q-6-0': 'Palmsonntag',
        'q-6-4': 'Gründonnerstag',
        'q-6-5': 'Karfreitag',
        'q-6-6': 'Karsamstag',
        'o-1-0': 'Ostersonntag',
        'o-1-1': 'Ostermontag',
        'o-2-0': 'Weißer Sonntag – Sonntag der Göttlichen Barmherzigkeit',
        'o-6-4': 'Christi Himmelfahrt',
        'o-8-0': 'Pfingstsonntag',
        'o-8-1': 'Pfingstmontag',
        40: 'Dreifaltigkeitssonntag',
        44: 'Fronleichnam',
        45: 'Herz-Jesu-Fest',
        'j-34-0': 'Christkönigssonntag'
    };

    // Prüfe zuerst auf spezielle Festtage
    const specialFeast = afterPentecost || swdCombined
    if (specialFeastDays[specialFeast]) {
        return specialFeastDays[specialFeast];
    }

    // Spezielle Behandlung für die Aschermittwochswoche (0. Fastenwoche)
    if (season === 'q' && week === 0) {
        if (dayOfWeek === 3) { return "Aschermittwoch"; }
        else if (dayOfWeek > 3) {  // Donnerstag, Freitag, Samstag
            return `${dayName} nach Aschermittwoch`;
        }
    }

    if (season === 'w' && (day > 24 || day === 1)) {
        return `${dayName} in der Weihnachtsoktav`;
    }

    if (season === 'q' && week === 6) {
        return `${dayName} der Karwoche`
    }

    if (season === 'o' && week === 1) {
        return `${dayName} der Osteroktav`
    }

    // Spezielle Formatierung für Sonntage
    if (dayOfWeek === 0) {
        switch (season) {
            case 'a': return `${week}. Adventssonntag`;
            case 'w': return `${week}. Sonntag nach Weihnachten`;
            case 'j': return `${week}. Sonntag im Jahreskreis`;
            case 'q': return `${week}. Fastensonntag`;
            case 'o': return `${week}. Sonntag der Osterzeit`;
            default: return '';
        }
    }

    // Reguläre Formatierung für andere Wochentage
    const regularDayName = `${dayName} der ${week}.\u00a0`
    switch (season) {
        case 'a': return `${regularDayName}Adventswoche`;
        case 'w': return `${regularDayName}Woche der\u00a0Weihnachtszeit`;
        case 'j': return `${regularDayName}Woche im\u00a0Jahreskreis`;
        case 'q': return `${regularDayName}Fastenwoche`;
        case 'o': return `${regularDayName}Woche der\u00a0Osterzeit`;
        default: return '';
    }
};

// Helper function to calculate rank for a specific date
function calculateRanks(date, season, week, dayOfWeek, swdCombined, afterPentecost) {

    const month = date.getMonth() + 1;
    const day = date.getDate();

    // Rank für Wochentag (rank_wt) bestimmen
    function calculateRankWt() {
        // 5. Feste nach Pfingsten
        if (afterPentecost) {
            return [41, 46].includes(afterPentecost) ? 2 : 5
        }

        // 1. Grundsätzlich sind alle Sonntage Rang 5
        if (dayOfWeek === 0) {
            // 2. Ausnahme: Sonntage in der Weihnachtszeit und im Jahreskreis (außer Christkönig) sind Rang 3
            if ((season === 'j' && week !== 34) || season === 'w') {
                return 3;
            }
            return 5;
        }

        // 3. Karwoche und Osteroktav
        if (swdCombined.startsWith('q-6-')) { return 5; }
        if (swdCombined.startsWith('o-1-')) { return 5; }

        // 4. Aschermittwoch und Christi Himmelfahrt
        if (['q-0-3', 'o-6-4'].includes(swdCombined)) { return 5; }

        // 6. Gebotene Gedenktage und Kommemoration
        if (season === 'q') { return 2; }          // Wochentage der Fastenzeit
        if (month === 12 && day > 25) { return 2.4; }  // Weihnachtsoktav
        if (month === 12 && day > 16) { return 2; }  // letzte Adventstage und Weihnachtszeit

        return 0; // Standard-Rang für alle anderen Tage
    }

    // Rank für Datum (rank_date) bestimmen
    // Rank für Datum (rank_date) bestimmen
    function calculateRankDate() {
        const dateCompare = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

        // Schleife durch die Ränge (von hoch zu niedrig)
        for (const rank of [6, 5, 4, 3, 2]) {
            if (tableOfRanks?.[diocese]?.[rank]?.includes(dateCompare)) return rank;
        }
        for (const rank of [6, 5, 4, 3, 2]) {
            if (tableOfRanks?.[rank]?.includes(dateCompare)) return rank;
        }
        return 0; // Kein spezieller Rang gefunden
    }

    if (!date || !(date instanceof Date)) {
        console.error('Invalid date provided to calculateRanks:', date);
        return { rank_wt: 0, rank_date: 0 };
    }

    if (!season) {
        console.error('No season provided to calculateRanks for date:', date);
        return { rank_wt: 0, rank_date: 0 };
    }

    if (week === undefined || week === null) {
        console.error('No week provided to calculateRanks for date:', date);
        return { rank_wt: 0, rank_date: 0 };
    }

    return {
        rank_wt: calculateRankWt(),
        rank_date: calculateRankDate(),
        hasVigil: calculateRankWt() > 2 || calculateRankDate() > 2
    };
}

// Calculate Easter using Meeus/Jones/Butcher algorithm
const calculateEaster = (year) => {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;

    return new Date(Date.UTC(year, month - 1, day));
};

// Get next Sunday after or on the given date
const getNextSunday = (date) => {
    const d = new Date(date);
    const dayToSunday = 7 - d.getDay();
    d.setUTCDate(d.getUTCDate() + dayToSunday);
    return d;
};

// Get liturgical information for a given date
const getLiturgicalInfo = (provDate) => {
    // Normalisiere das Eingabedatum auf Mitternacht
    const date = new Date(Date.UTC(
        provDate.getFullYear(),
        provDate.getMonth(),
        provDate.getDate()
    ));

    const year = date.getUTCFullYear();

    // Berechne Schlüsseldaten und normalisiere sie
    const christmas = new Date(Date.UTC(year - 1, 11, 25));
    const christmasSunday = getNextSunday(christmas);
    const baptism = getNextSunday(new Date(Date.UTC(year, 0, 7)));
    const easter = calculateEaster(year);
    const lentSunday = new Date(easter.getTime() - daysToMilliseconds(42));
    const pentecost = new Date(easter.getTime() + daysToMilliseconds(49));
    const advent = new Date(Date.UTC(year, 11, 25));
    advent.setUTCDate(advent.getUTCDate() - (advent.getUTCDay() || 7) - 21);

    const daysSinceEaster = Math.floor((date - easter) / daysToMilliseconds(1));
    const afterPentecost = [50, 56, 60, 68, 69].includes(daysSinceEaster)
        ? 40 + (daysSinceEaster % 7)
        : [66, 67].includes(daysSinceEaster)
            ? 68 - daysSinceEaster
            : null;

    // Helper function for week calculation
    const weeksBetween = (start, current) =>
        Math.floor((current - start) / daysToMilliseconds(7)) + 1;

    let season, week, weekOfPsalter;

    // Christmas Season until Baptism
    if (date < baptism) {
        season = 'w';
        week = weeksBetween(christmasSunday, date);
    }
    else if (date === baptism) {
        season = 'j';
        week = 1
        weekOfPsalter = weeksBetween(christmasSunday, date);
    }
    // Ordinary Time before Ash Wednesday
    else if (date < lentSunday - daysToMilliseconds(4)) {
        season = 'j';
        week = weeksBetween(baptism, date);
    }
    // Ash Wednesday until First Sunday of Lent
    else if (date < lentSunday) {
        season = 'q';
        week = 0;
    }
    // Lent and Holy Week
    else if (date < easter) {
        season = 'q';
        week = weeksBetween(lentSunday, date);
    }
    // Easter through Pentecost
    else if (date <= pentecost) {
        season = 'o';
        week = weeksBetween(easter, date);
    }
    // Special feasts after Pentecost
    // else if ([40, 44, 45].includes(afterPentecost)) { season = 'o'; week = 9; }
    // Ordinary Time after Pentecost
    else if (date < advent) {
        season = 'j';
        week = 34 - Math.floor((advent - date - 1) / daysToMilliseconds(7));
    }
    // Advent
    else if (date >= advent) {
        const adventWeek = weeksBetween(advent, date);
        if (adventWeek < 5) {
            season = 'a';
            week = adventWeek;
        } else {
            season = 'w';
            week = 1;
        }
    }

    const dayOfWeek = date.getUTCDay();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();

    if (season === 'a' && week === 4 && day > 24) {
        season = 'w';
        week = 0;
    }
    const swdCombined = `${season}-${week}-${dayOfWeek}`;
    const swdWritten = writeOut(season, week, dayOfWeek, swdCombined, day, afterPentecost);
    weekOfPsalter = weekOfPsalter ?? (week % 4 || 4)
    const ranks = calculateRanks(date, season, week, dayOfWeek, swdCombined, afterPentecost);
    const isCommemoration = ranks.rank_date < 3 &&
        (season === 'q' || (month === 12 && day > 16));

    return {
        season,
        week,
        dayOfWeek,
        weekOfPsalter,
        swdCombined,
        swdWritten,
        ...ranks,  // Fügt rank_wt und rank_date zum Return-Objekt hinzu
        afterPentecost,
        isCommemoration,
    };
};

export { getLiturgicalInfo };