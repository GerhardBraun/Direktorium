
const daysToMilliseconds = (days) => days * 24 * 60 * 60 * 1000;

const writeOut = (season, week, dayOfWeek, combinedSWD, day) => {

    const days = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    const dayName = days[dayOfWeek];

    // Spezielle Festtage basierend auf combinedSWD
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
        'o-9-0': 'Dreifaltigkeitssonntag',
        'o-9-4': 'Fronleichnam',
        'o-9-5': 'Herz-Jesu-Fest',
        'o-9-6': 'Unbeflecktes Herz Mariens',
        'j-34-0': 'Christkönigssonntag'
    };

    // Prüfe zuerst auf spezielle Festtage
    if (specialFeastDays[combinedSWD]) {
        return specialFeastDays[combinedSWD];
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
            default:
                return '';
        }
    }

    // Reguläre Formatierung für andere Wochentage
    return `${dayName} der ${week}.\u00a0${getSeasonName(season)}`;
};

const getSeasonName = (season) => {
    switch (season) {
        case 'a': return 'Adventswoche';
        case 'w': return 'Woche der\u00a0Weihnachtszeit';
        case 'j': return 'Woche im\u00a0Jahreskreis';
        case 'q': return 'Fastenwoche';
        case 'o': return 'Woche der\u00a0Osterzeit';
        default:
            return '';
    }
};

// Helper function to calculate rank for a specific date
function calculateRanks(date, season, week, dayOfWeek, combinedSWD, isImmacHeart) {

    // Rank für Wochentag (rank_wt) bestimmen
    function calculateRankWt() {
        // 1. Grundsätzlich sind alle Sonntage Rang 5
        if (dayOfWeek === 0) {
            // 2. Ausnahme: Sonntage in der Weihnachtszeit und im Jahreskreis (außer Christkönig) sind Rang 3
            if ((season === 'j' && week !== 34) || season === 'w') {
                return 3;
            }
            return 5;
        }

        // 3. Karwoche und Osteroktav
        if (combinedSWD.startsWith('q-6-')) { return 5; }
        if (combinedSWD.startsWith('o-1-')) { return 5; }

        // 5. Einzelne Hochfeste
        if (['q-0-3',  // Aschermittwoch
            'o-6-4',    // Christi Himmelfahrt
            'o-9-4',  // Fronleichnam
            'o-9-5',  // Herz Jesu
        ].includes(combinedSWD)) { return 5; }

        // 6. Gebotene Gedenktage und Kommemoration
        if ((date.getMonth() + 1 === 12 && date.getDate() > 16) ||  // letzte Adventstage und Weihnachtszeit
            (season === 'q') ||                                      // Wochentage der Fastenzeit
            (isImmacHeart)       // Herz Mariae
        ) { return 2; }

        return 0; // Standard-Rang für alle anderen Tage
    }

    // Rank für Datum (rank_date) bestimmen
    function calculateRankDate() {
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const dateCompare = `${month}-${day}`;

        const hochfeste = [
            '01-01', '01-06', '03-19', '03-25',
            '06-05', '06-24', '06-29', '08-15',
            '11-01', '11-02', '12-08', '12-25'];
        const christusfeste = ['02-02', '08-06', '09-14', '11-09'];
        const feste = [
            '01-25', '02-04', '02-14', '02-22', '02-24', '04-25', '04-29', '05-03',
            '07-02', '07-03', '07-11', '07-22', '07-23', '07-25', '08-09', '08-10',
            '08-24', '09-08', '09-21', '09-28', '09-29', '10-18', '10-28', '11-19',
            '11-30', '12-16', '12-26', '12-27', '12-28'];
        const gedenktage = [
            '01-02', '01-17', '01-21', '01-24', '01-26', '01-28', '01-31',
            '02-05', '02-06', '02-10', '02-23', '03-07', '04-07', '04-11',
            '04-27', '05-02', '05-26', '06-01', '06-03', '06-11', '06-13',
            '06-21', '06-28', '07-15', '07-26', '07-29', '07-31', '08-01',
            '08-04', '08-08', '08-11', '08-17', '08-20', '08-21', '08-22',
            '08-27', '08-28', '08-29', '09-03', '09-13', '09-15', '09-16',
            '09-20', '09-23', '09-27', '09-30', '10-01', '10-02', '10-04',
            '10-07', '10-15', '10-17', '11-04', '11-10', '11-11', '11-12',
            '11-21', '11-22', '11-24', '12-03', '12-07', '12-13', '12-14'];

        if (hochfeste.includes(dateCompare)) return 5;
        if (christusfeste.includes(dateCompare)) return 4;
        if (feste.includes(dateCompare)) return 3;
        if (gedenktage.includes(dateCompare)) return 2;
        return 0;
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
        rank_date: calculateRankDate()
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
    d.setUTCDate(d.getUTCDate() + (dayToSunday % 7));
    return d;
};

// Check for special feast days after Pentecost:
// Trinity Sunday, Corpus Christi, Sacred Heart, Immaculate Heart
const isFeastAfterPentecost = (date, easter) => {
    const daysSinceEaster = Math.floor((date - easter) / daysToMilliseconds(1));
    return [56, 60, 68].includes(daysSinceEaster) ? true
        : daysSinceEaster === 69 ? 'ImmacHeart' : null;
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
    christmas.setHours(0, 0, 0, 0);
    const christmasSunday = getNextSunday(christmas);
    const baptism = getNextSunday(new Date(Date.UTC(year, 0, 7)));
    const easter = calculateEaster(year);
    const lentSunday = new Date(easter.getTime() - daysToMilliseconds(42));
    const pentecost = new Date(easter.getTime() + daysToMilliseconds(49));
    const advent = new Date(Date.UTC(year, 11, 25));
    advent.setUTCDate(advent.getUTCDate() - (advent.getUTCDay() || 7) - 21);

    // Helper function for week calculation
    const weeksBetween = (start, current) =>
        Math.floor((current - start) / daysToMilliseconds(7)) + 1;

    let season, week, weekOfPsalter, isImmacHeart = false;

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
    // Ordinary Time before Lent
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
    else if (isFeastAfterPentecost(date, easter) === true) {
        season = 'o';
        week = 9;
    }
    // Ordinary Time after Pentecost
    else if (date < advent) {
        season = 'j';
        week = 34 - Math.floor((advent - date - 1) / daysToMilliseconds(7));
        isImmacHeart = isFeastAfterPentecost(date, easter) === 'ImmacHeart'
    }
    // Advent
    else if (date >= advent) {
        const adventWeek = weeksBetween(advent, date);
        if (adventWeek === 5) {
            season = 'w';
            week = 1;
        } else {
            season = 'a';
            week = adventWeek;
        }
    }

    const dayOfWeek = date.getUTCDay();
    const month = (date.getUTCMonth() + 1);
    const day = date.getUTCDate();

    if (season === 'a' && week === 4 && day > 24) {
        week = 0;
        season = 'w';
    }
    const combinedSWD = `${season}-${week}-${dayOfWeek}`;
    const writtenSWD = writeOut(season, week, dayOfWeek, combinedSWD, day);
    if (!weekOfPsalter) { weekOfPsalter = ((week + 3) % 4) + 1 }
    const ranks = calculateRanks(date, season, week, dayOfWeek, combinedSWD, isImmacHeart);
    const isCommemoration = ranks.rank_date < 3 &&
        (season === 'q' || (month === 12 && day > 16));

    return {
        season,
        week,
        dayOfWeek,
        weekOfPsalter,
        combinedSWD,
        writtenSWD,
        ...ranks,  // Fügt rank_wt und rank_date zum Return-Objekt hinzu
        isCommemoration,
        isImmacHeart
    };
};

export { getLiturgicalInfo };