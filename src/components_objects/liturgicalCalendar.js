// Liturgical seasons enum
const LiturgicalSeason = {
    ADVENT: 'a',
    CHRISTMAS: 'w',
    ORDINARY_TIME: 'j',
    LENT: 'f',
    EASTER: 'o'
};

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

    return new Date(year, month - 1, day);
};

// Get next Sunday after or on the given date
const getNextSunday = (date) => {
    const d = new Date(date);
    const dayToSunday = 7 - d.getDay();
    d.setDate(d.getDate() + (dayToSunday % 7));
    return d;
};

// Check for special feast days after Pentecost
const isSpecialEasterFeast = (date, easter) => {
    const daysSinceEaster = Math.floor((date - easter) / (24 * 60 * 60 * 1000));

    if (daysSinceEaster === 56) return { week: 9 }; // Trinity Sunday
    if (daysSinceEaster === 60) return { week: 9 }; // Corpus Christi
    if (daysSinceEaster === 68) return { week: 9 }; // Sacred Heart
    if (daysSinceEaster === 69) return { week: 9 }; // Immaculate Heart

    return null;
};

// Get liturgical information for a given date
const getLiturgicalInfo = (date) => {
    const year = date.getFullYear();

    // Calculate key dates
    const christmas = new Date(year - 1, 11, 25);
    const christmasSunday = getNextSunday(christmas);
    const epiphany = getNextSunday(new Date(year, 0, 7));
    const easter = calculateEaster(year);
    const lentSunday = new Date(easter.getTime() - 42 * 24 * 60 * 60 * 1000);
    const pentecost = new Date(easter.getTime() + 49 * 24 * 60 * 60 * 1000);
    const advent = new Date(year, 11, 25);
    advent.setDate(advent.getDate() - (advent.getDay() || 7) - 21);

    // Helper function for week calculation
    const weeksBetween = (start, current) =>
        Math.floor((current - start) / (7 * 24 * 60 * 60 * 1000)) + 1;

    let season, week;

    // Christmas Day
    if (date.getTime() === christmas.getTime()) {
        return {
            season: LiturgicalSeason.CHRISTMAS,
            week: date.getDay() === 0 ? 1 : 0,
            dayOfWeek: date.getDay()
        };
    }

    // Christmas Season until Baptism
    if (date < epiphany) {
        season = LiturgicalSeason.CHRISTMAS;
        week = weeksBetween(christmasSunday, date);
    }
    // Ordinary Time before Lent
    else if (date < lentSunday - 4 * 24 * 60 * 60 * 1000) {
        season = LiturgicalSeason.ORDINARY_TIME;
        week = weeksBetween(epiphany, date);
    }
    // Ash Wednesday until First Sunday of Lent
    else if (date < lentSunday) {
        season = LiturgicalSeason.LENT;
        week = 0;
    }
    // Lent and Holy Week
    else if (date < easter) {
        season = LiturgicalSeason.LENT;
        week = weeksBetween(lentSunday, date);
    }
    // Easter through Pentecost Monday
    else if (date <= new Date(pentecost.getTime() + 24 * 60 * 60 * 1000)) {
        season = LiturgicalSeason.EASTER;
        week = weeksBetween(easter, date);
    }
    // Special feasts after Pentecost
    else if (isSpecialEasterFeast(date, easter)) {
        season = LiturgicalSeason.EASTER;
        week = 9;
    }
    // Ordinary Time after Pentecost
    else if (date < advent) {
        season = LiturgicalSeason.ORDINARY_TIME;
        week = 34 - Math.floor((advent - date - 1) / (7 * 24 * 60 * 60 * 1000));
    }
    // Advent
    if (date >= advent) {
        const adventWeek = weeksBetween(advent, date);
        if (adventWeek === 5) {
            // Ab der "5. Adventswoche" ist es die 1. Woche der Weihnachtszeit
            season = LiturgicalSeason.CHRISTMAS;
            week = 1;
        } else {
            season = LiturgicalSeason.ADVENT;
            week = adventWeek;
        }
    }

    return {
        season,
        week,
        dayOfWeek: date.getDay()
    };
};

export { getLiturgicalInfo, LiturgicalSeason };