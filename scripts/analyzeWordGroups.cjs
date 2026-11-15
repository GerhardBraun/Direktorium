// Statistik der °-Wortgruppen (geschützte Leerzeichen) in Psalmen, Lesungen und resp2-Feldern.
// Aufruf: node scripts/analyzeWordGroups.cjs [Grenzwert-in-em]
// Ergebnis: doc/Wortgruppen-Statistik.md
//
// Die Breite wird mit derselben Heuristik berechnet wie in calculateMaxLineLength (TextFormatter.js),
// damit die Werte direkt mit widthForHymns (verfügbare Breite in em) vergleichbar sind.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA = path.join(ROOT, 'src', 'components', 'data');

// Gleiche Zeichenbreiten wie calculateCharWidth in TextFormatter.js
const charWidth = (c) => {
    if (/[ijl.,;:!|]/.test(c)) return 0.3;
    if (/[Ijlt()[\]{}'"´`]/.test(c)) return 0.4;
    if (/[frs]/.test(c)) return 0.5;
    if (/[mwMW]|æ|œ|Æ|Œ/.test(c)) return 0.9;
    if (/[ABCDEFGHIJKLMNOPQRSTUVWXYZ0-9]/.test(c)) return 0.7;
    if (/\s|°/.test(c)) return 0.3;
    return 0.6;
};
const width = (s) => Math.round([...s].reduce((sum, c) => sum + charWidth(c), 0) * 10) / 10;

const REFERENCE = 'preist°die°Größe°des°Herrn,';
const LIMIT = process.argv[2] ? parseFloat(process.argv[2]) : width(REFERENCE);

// Quellen: Datei, Feldmuster, Kategorie, Gesangsmarker entfernen?
const SOURCES = [
    { file: 'PsHymn.ts', fields: /^text(_lat|_neu|_ben)?$/, cat: 'Psalmen/Hymnen', cant: true },
    ...['Brevier.ts', 'Calendar.ts', 'Lecture1.ts', 'Lecture2.ts', 'LectureABC.ts',
        'LectureAlternatives.ts', 'Sollemnities.ts', 'Perikopen.ts'].flatMap(file => [
        { file, fields: /^(les_text|patr_text)(_lat|_neu)?$/, cat: 'Lesungen', cant: false },
        { file, fields: /^resp2(_lat|_neu)?$/, cat: 'resp2', cant: false },
    ]),
];

// Entspricht stripCantMarkers in CantFormatter.js
const stripCant = (t) => t
    .replace(/\[([+-])([^\]]+)\]/g, (_, sign, content) => sign === '-' ? content : '')
    .replace(/(?<!\^)\+e/g, '')
    .replace(/(?<!\^)-e/g, 'e')
    .replace(/(?<!\^)'e/g, 'e')
    .replace(/\|{1,2}/g, '')
    .replace(/[1-4]/g, '')
    .replace(/~/g, '')
    .replace(/(?<!\^)0/g, '');

// Liefert alle °-Wortgruppen eines Textes so, wie sie am Bildschirm erscheinen
const extractGroups = (raw, cant) => {
    let t = cant ? stripCant(raw) : raw;
    t = t
        .replace(/\^RUBR.*?\^0RUBR/g, ' ')
        .replace(/\^r.*?\^0r/g, ' ')                 // Rubriken
        .replace(/\{(\d{1,2})#.*?\}/g, '$1')         // Fußnoten nur als Nummer
        .replace(/\^0?[wfvck]/g, '')                 // Auszeichnungen ohne Breite
        .replace(/\^-/g, '-')
        .replace(/[>$]/g, '')
        // Asterisk/Flexa werden per   an das letzte Wort gebunden (formatPrayerText)
        .replace(/\^\*/g, '°* ')
        .replace(/\^\+/g, '°† ')
        .replace(/\^[A-Z]{2,}[a-z]*/g, ' ')          // lange Tags (^HALLo, ^ODER …)
        .replace(/\^0?./g, ' ');                     // übrige Tags (^l, ^p, ^/, ^ß …)
    return t.split(/\s+/)
        .filter(tok => /°/.test(tok.replace(/°[*†]$/, '')))  // nur echte Wortgruppen
        .map(tok => tok.replace(/^[„‚(»›]+/, ''));
};

const results = [];  // { group, width, cat, file, line, field }
for (const src of SOURCES) {
    const lines = fs.readFileSync(path.join(DATA, src.file), 'utf8').split('\n');
    const re = /"([a-z_0-9]+)":\s*"((?:[^"\\]|\\.)*)"/g;
    lines.forEach((ln, i) => {
        for (const m of ln.matchAll(re)) {
            if (!src.fields.test(m[1])) continue;
            let val;
            try { val = JSON.parse(`"${m[2]}"`); } catch { val = m[2]; }
            const isLined = /\^l/.test(val);
            for (const g of extractGroups(val, src.cant)) {
                results.push({ group: g.replace(/°/g, ' '), width: width(g), cat: src.cat,
                    file: src.file, line: i + 1, field: m[1], isLined });
            }
        }
    });
}

// --- Auswertung ---
const cats = ['Psalmen/Hymnen', 'Lesungen', 'resp2'];
const STEP = 1;
const maxW = Math.ceil(Math.max(...results.map(r => r.width)));
let md = `# Statistik der °-Wortgruppen\n\n`;
md += `Erzeugt mit \`node scripts/analyzeWordGroups.cjs\` am ${new Date().toISOString().slice(0, 10)}.\n\n`;
md += `Breiten in em (Heuristik aus \`calculateMaxLineLength\`). Ein an das Gruppenende gebundener `;
md += `Asterisk bzw. Flexa (\` *\`, \` †\`) ist mitgezählt.\n\n`;
md += `Referenz: „${REFERENCE.replace(/°/g, ' ')}“ = **${width(REFERENCE)} em**; verwendeter Grenzwert: **${LIMIT} em**.\n\n`;

md += `## Häufigkeitsverteilung\n\n| Breite (em) | ${cats.join(' | ')} | gesamt |\n|---|${cats.map(() => '---:').join('|')}|---:|\n`;
for (let w = 0; w < maxW; w += STEP) {
    const inBin = results.filter(r => r.width >= w && r.width < w + STEP);
    if (!inBin.length) continue;
    md += `| ${w}–${w + STEP} | ${cats.map(c => inBin.filter(r => r.cat === c).length).join(' | ')} | ${inBin.length} |\n`;
}
md += `| **Summe** | ${cats.map(c => results.filter(r => r.cat === c).length).join(' | ')} | ${results.length} |\n\n`;

const over = results.filter(r => r.width > LIMIT);
md += `## Wortgruppen über dem Grenzwert (${over.length} Vorkommen)\n\n`;
md += `Gleiche Wortgruppen sind zusammengefasst. Fundstellen als Datei:Zeile (Feld).\n\n`;
const byGroup = new Map();
for (const r of over) {
    const key = r.group;
    if (!byGroup.has(key)) byGroup.set(key, { ...r, places: [] });
    byGroup.get(key).places.push(`${r.file}:${r.line} (${r.field})`);
}
const sorted = [...byGroup.values()].sort((a, b) => b.width - a.width);
for (const c of cats) {
    const list = sorted.filter(r => r.cat === c);
    if (!list.length) continue;
    md += `### ${c}\n\n| em | Wortgruppe | Anzahl | Fundstellen |\n|---:|---|---:|---|\n`;
    for (const r of list) {
        const places = r.places.length > 4 ? r.places.slice(0, 4).join(', ') + ', …' : r.places.join(', ');
        md += `| ${r.width} | ${r.group} | ${r.places.length} | ${places} |\n`;
    }
    md += '\n';
}

fs.writeFileSync(path.join(ROOT, 'doc', 'Wortgruppen-Statistik.md'), md, 'utf8');
console.log(`Wortgruppen: ${results.length}, über ${LIMIT} em: ${over.length} (${byGroup.size} verschiedene)`);
for (const c of cats) {
    const ws = results.filter(r => r.cat === c).map(r => r.width).sort((a, b) => a - b);
    if (ws.length) console.log(`${c}: n=${ws.length}, Median ${ws[ws.length >> 1]}, Max ${ws[ws.length - 1]}`);
}
