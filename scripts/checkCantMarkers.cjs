// Prüft alle für den Gesang annotierten Texte auf die Regeln der Gesangsmarker
// (|, ||, Countdown 1–4, 0, ~, $).
//
// Aufruf (im Ordner direktorium):
//   node scripts/checkCantMarkers.cjs              alle Sprachfassungen
//   node scripts/checkCantMarkers.cjs lat          nur eine Sprachfassung (dt, lat, neu, ben, …)
//   npm run check:cant                             dasselbe wie der erste Aufruf
//
// Geprüfte Quellen:
//   - PsHymn.ts: jedes Feld eines Psalm-Abschnitts, das || enthält (text, text_lat, text_neu, …)
//   - utils/ordinarium.js: "cant"-Felder (Benedictus, Magnificat, Nunc dimittis)
//   - dataHandlers/TextFormatter.js: getDoxology (dt/lat)
//
// Regeln (siehe doc/Singbare-Psalmen.md):
//   - ^*/^p-Halbvers: genau ein ||, dazu ein |; ein zweites | nur bei männlichem Versschluss.
//   - Countdown: ^* genau 1,2; ^p weiblich 1–3, männlich (|| auf der Schlusssilbe) 1–4;
//     lückenlos rückwärts bis zur ||-Silbe. Mehrere Zahlen auf einer Silbe = verkürzte Kadenz.
//   - Zwei 1-Marker: Pflicht bei ^p männlich mit genau einer Silbe zwischen | und ||;
//     Ermessensfall bei ≥ 2 Silben dazwischen; sonst Fehler.
//   - Ab dem ersten Pipe-Marker sind alle Silbengrenzen markiert (Leerzeichen, °, ~, |, 0, 1–4).
//     Die Silbenzählung ist eine Heuristik über Vokalgruppen (Diphthonge je Sprache).
//   - Flexa (^+): kein ||, höchstens ein |, keine Countdown-Marker.
//   - $ = Notation weicht vom Antiphonale zum Stundengebet ab → Hinweis.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const BASE = path.join(__dirname, '..', 'src', 'components');
const langFilter = process.argv[2] || null;

// ---- Quellen einsammeln ----
const sources = []; // { loc, text, lang }
const fieldLang = (f) => (f.match(/^text_(.+)$/)?.[1]) ?? 'dt';
{
  const src = fs.readFileSync(path.join(BASE, 'data', 'PsHymn.ts'), 'utf8');
  const code = src.slice(src.indexOf('export const psalmsData =')).replace('export const psalmsData =', 'module.exports =');
  const mod = { exports: {} };
  vm.runInNewContext(code, { module: mod });
  const data = mod.exports;
  const fieldsSeen = {};
  for (const num of Object.keys(data)) for (const sec of Object.keys(data[num])) {
    const entry = data[num][sec];
    for (const [f, v] of Object.entries(entry)) {
      if (typeof v !== 'string' || !v.includes('||')) continue;
      const lang = fieldLang(f);
      const mode = entry[`text_mode_${lang}`] ?? entry.text_mode ?? '–';
      fieldsSeen[f] = (fieldsSeen[f] || 0) + 1;
      sources.push({ loc: `PsHymn ${num}/${sec} ${f} [${mode}]`, text: v, lang });
    }
  }
  console.log('PsHymn: annotierte Felder', fieldsSeen);
}
{
  const src = fs.readFileSync(path.join(BASE, 'utils', 'ordinarium.js'), 'utf8');
  const re = /'(dt|lat|[a-z]{2,3})':\s*\{|"titel":\s*"([^"]*)"|"cant":\s*"((?:[^"\\]|\\.)*)"/g;
  let lang = 'dt', titel = '?', m;
  while ((m = re.exec(src))) {
    if (m[1] !== undefined) lang = m[1];
    else if (m[2] !== undefined) titel = m[2];
    else sources.push({ loc: `ordinarium ${titel} ${lang}`, text: JSON.parse('"' + m[3] + '"'), lang });
  }
}
{
  const src = fs.readFileSync(path.join(BASE, 'dataHandlers', 'TextFormatter.js'), 'utf8');
  const start = src.indexOf('const getDoxology');
  const fn = src.slice(start, src.indexOf('\n};', start) + 3).replace('const getDoxology =', '').replace(/;\s*$/, '');
  const get = vm.runInNewContext('(' + fn + ')');
  sources.push({ loc: 'Doxologie dt', text: get('', {}), lang: 'dt' });
  sources.push({ loc: 'Doxologie lat', text: get('_lat', { text_lat: 'x' }), lang: 'lat' });
}

// ---- Hilfsfunktionen ----
const errors = {};   // Kategorie → [Meldungen]
const infos = {};
const add = (bag, cat, msg) => (bag[cat] ??= []).push(msg);

// Textanpassungen für den Gesang wie in formatCantMarkers
const prep = (t) => t
  .replace(/\[([+-])([^\]]+)\]/g, (_, s, c) => s === '+' ? c : '')
  .replace(/(?<!\^)\+e/g, 'e').replace(/(?<!\^)-e/g, '').replace(/(?<!\^)'e/g, '’')
  .replace(/>/g, '');

// Format-Tags (^r, ^0r, ^RUBR, ^(, ^-, …) entfernen; sie gelten als Trenner
const stripTags = (t) => t.replace(/\^-/g, ' ').replace(/\^0?[A-Za-z]+/g, ' ').replace(/\^[()]/g, ' ');

// Zerlegt einen Halbvers in Silbeneinheiten { markers, text }
const MARKER_RE = /^(?:\|\|?|[1-4]|~|0)+$/;
const SEP_RE = /^[\s°  ]+$/;
const units = (hv) => {
  const toks = hv.split(/((?:\|\|?|[1-4]|~|0)+|[\s°  ]+)/).filter(s => s);
  const out = [];
  let pending = '';
  let cur = null;
  for (const tk of toks) {
    if (MARKER_RE.test(tk)) { pending += tk; cur = null; }
    else if (SEP_RE.test(tk)) { cur = null; }
    else if (/\p{L}/u.test(tk)) {
      if (cur && !pending) cur.text += tk;           // gehört zur selben Silbe (z. B. nach Satzzeichen)
      else { cur = { markers: pending, text: tk }; out.push(cur); pending = ''; }
    } else if (cur) {
      cur.text += tk;                                // reines Satzzeichen: an vorige Einheit hängen
    }
  }
  if (pending) out.push({ markers: pending, text: '', dangling: true });
  return out;
};

// Silbenzahl (Heuristik): Vokalgruppen zählen, Diphthonge je Sprache als eine Silbe
const DIPH = {
  dt: new Set(['ei', 'ai', 'au', 'eu', 'äu', 'ie', 'aa', 'ee', 'oo', 'ey', 'ay']),
  lat: new Set(['au', 'ae', 'oe']),   // æ/œ sind ohnehin Einzelzeichen
};
const nuclei = (w, lang) => {
  const diph = DIPH[lang] ?? DIPH.dt;
  let t = w.toLowerCase()
    .replace(/ä/g, '\u0001').replace(/ö/g, '\u0002').replace(/ü/g, '\u0003')   // Umlaute vor NFD schützen
    .normalize('NFD').replace(/\p{M}/gu, '')
    .replace(/\u0001/g, 'ä').replace(/\u0002/g, 'ö').replace(/\u0003/g, 'ü');
  t = t.replace(/(q|g)u(?=[aeiouäöüyæœ])/g, '$1');    // qu/gu + Vokal: u konsonantisch
  t = t.replace(/^i(?=[aeiouæœ])/, 'j');               // lat. Iesu, iustus: i konsonantisch
  if (lang === 'dt') t = t.replace(/tio/g, 'tjo');    // Na-tio-nen: tio einsilbig
  const runs = t.match(/[aeiouäöüyæœ]+/g) || [];
  let n = 0;
  for (const r of runs) {
    let k = 0;
    while (k < r.length) { k += (k + 1 < r.length && diph.has(r.slice(k, k + 2))) ? 2 : 1; n++; }
  }
  return n;
};

// ---- Analyse ----
let hvCount = 0, textCount = 0;

for (const { loc, text, lang } of sources) {
  if (langFilter && lang !== langFilter) continue;
  textCount++;
  const parts = prep(text).split(/(\^\*|\^p|\^\+)/);
  for (let i = 0, k = 0; i < parts.length; i += 2, k++) {
    let raw = parts[i]; const sep = parts[i + 1] || '';
    // ^l-Suffix (Responsorium) nach || abtrennen, wie formatHalfVerse
    { const db = raw.indexOf('||'); const l = db >= 0 ? raw.indexOf('^l', db) : -1; if (l >= 0) raw = raw.slice(0, l); }
    const hv = stripTags(raw).replace(/\$/g, '');
    if (!/\p{L}/u.test(hv)) continue;
    hvCount++;
    const type = sep === '^*' ? 'MK' : sep === '^+' ? 'Flexa' : 'SK';
    const where = `${loc} HV${k + 1} ${type}: ${raw.trim()}`;
    if (raw.includes('$')) add(infos, 'Kompatibilität mit Antiphonale prüfen ($)', where);
    const u = units(hv);
    if (u.some(x => x.dangling)) add(errors, 'Marker am Halbversende ohne folgende Silbe', where);

    const dbl = u.map((x, j) => x.markers.includes('||') ? j : -1).filter(j => j >= 0);
    const sgl = u.map((x, j) => /(?<!\|)\|(?!\|)/.test(x.markers) ? j : -1).filter(j => j >= 0);
    const digits = u.flatMap((x, j) => (x.markers.match(/[1-4]/g) || []).map(d => ({ d, j })));

    if (type === 'Flexa') {
      if (dbl.length) add(errors, 'Flexa mit ||', where);
      if (sgl.length > 1) add(errors, 'Flexa mit mehr als einem |', where);
      if (digits.length) add(errors, 'Flexa mit Countdown-Marker', where);
      continue;
    }

    // --- Pipe-Regeln ---
    if (dbl.length === 0) { add(infos, 'kein || (Kehrvers, Rubrik, Intonation)', where); continue; }
    if (dbl.length > 1) { add(errors, 'mehr als ein ||', where); continue; }
    const d = dbl[0];
    const last = u.length - 1;
    const lastStressed = dbl.includes(last) || sgl.includes(last);
    if (sgl.length === 0) add(errors, 'kein einfaches |', where);
    else if (sgl.length > 2) add(errors, 'mehr als zwei einfache |', where);
    else if (sgl.length === 2 && !lastStressed) add(errors, 'zwei einfache | ohne männlichen Versschluss', where);

    // --- Silbengrenzen ab dem ersten Pipe-Marker ---
    const firstStress = Math.min(d, ...sgl);
    for (let q = firstStress; q < u.length; q++) {
      const nuc = nuclei(u[q].text, lang);
      if (nuc > 1) add(errors, 'Silbengrenze nach erstem Pipe-Marker nicht markiert', `${where}   [„${u[q].text}“ = ${nuc} Silben?]`);
    }

    // --- Countdown-Regeln ---
    const masc = d === last; // || auf der Schlusssilbe
    let seq = '';
    const usedUnits = new Set();
    for (let j = d - 1; j >= 0; j--) {
      const ds = (u[j].markers.match(/[1-4]/g) || []).sort();
      if (!ds.length) break;
      seq += ds.join(''); usedUnits.add(j);
    }
    const stray = digits.filter(x => !usedUnits.has(x.j));
    if (stray.length) add(errors, 'Countdown-Marker nicht lückenlos vor || (verirrt/Lücke/nach ||)', where);

    const dual1 = seq.startsWith('11');
    const core = dual1 ? seq.slice(1) : seq;
    const combined = usedUnits.size < core.length;

    // --- Zwei 1-Marker ---
    const prevBar = Math.max(-1, ...sgl.filter(x => x < d));
    const needDual1 = type === 'SK' && masc && prevBar >= 0 && d - prevBar === 2;
    const mayDual1 = type === 'SK' && masc && prevBar >= 0 && d - prevBar >= 3;
    if (needDual1 && !dual1) add(infos, 'Zur Prüfung: zwei 1-Marker fehlen (SK männl., eine Silbe zwischen | und ||)', where + `   [rückwärts: ${seq || '–'}]`);
    if (mayDual1 && dual1) add(infos, 'Zur Prüfung: zwei 1-Marker bei ≥2 unbetonten Silben zwischen | und || (Ermessensfall)', where + `   [rückwärts: ${seq}]`);
    if (!needDual1 && !mayDual1 && dual1) add(errors, 'zwei 1-Marker, obwohl Bedingung nicht erfüllt', where + `   [rückwärts: ${seq}]`);

    // --- Anzahl der Countdown-Marker ---
    const expected = type === 'MK' ? '12' : masc ? '1234' : '123';
    if (!stray.length) {
      if (core !== expected) {
        const desc = type === 'MK' ? 'MK: nicht genau 2 (1,2)' : masc ? 'SK männlich: nicht genau 4 (1–4)' : 'SK weiblich: nicht genau 3 (1–3)';
        add(errors, `${desc} – gefunden ${digits.length}`, where + `   [rückwärts: ${seq || '–'}]`);
      } else if (combined) {
        add(infos, 'Sonderform: kombinierte Marker auf einer Silbe (verkürzt)', where + `   [rückwärts: ${seq}]`);
      }
    }
  }
}

// ---- Ausgabe ----
const dump = (title, bag) => {
  console.log(`\n===== ${title} =====`);
  const cats = Object.keys(bag);
  if (!cats.length) console.log('(keine)');
  for (const c of cats) {
    console.log(`\n--- ${c} (${bag[c].length}) ---`);
    for (const m of bag[c]) console.log('  ' + m);
  }
};
console.log(`Sprachfassung: ${langFilter ?? 'alle'} – Texte: ${textCount}, Halbverse: ${hvCount}`);
dump('FEHLER', errors);
dump('HINWEISE', infos);
process.exitCode = Object.keys(errors).length ? 1 : 0;
