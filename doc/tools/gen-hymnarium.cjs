// Erzeugt doc/Hymnarium.md aus Brevier.ts, Calendar.ts, Sollemnities.ts und PsHymn.ts.
// Aufruf: node doc/tools/gen-hymnarium.cjs doc/Hymnarium.md
//
// Die Schichten werden feldweise überlagert wie in BrevierDataProcessor
// (wt → p → Zeit-each → Zeit-even …; Wert 0 löscht einen Eintrag der darunterliegenden Schicht).
const fs = require('fs');
const path = require('path');
const D = path.join(__dirname, '../../src/components/data/');
function load(f, name) {
  let s = fs.readFileSync(D + f, 'utf8');
  s = s.slice(s.indexOf('export const ' + name)).replace(/^export const \w+(:\s*\w+)?\s*=/, 'return ');
  return new Function(s.replace(/;\s*$/, ''))();
}
const brev = load('Brevier.ts', 'brevierData');
const ps = load('PsHymn.ts', 'psalmsData');
const cal = load('Calendar.ts', 'calendarData');
const sol = load('Sollemnities.ts', 'sollemnitiesData');

// ---------------------------------------------------------------- Konfiguration
const HOURS = ['Lesehore', 'Laudes', 'Terz', 'Sext', 'Non', 'Vesper', 'Komplet'];
const DAYS = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
const ROM = ['', 'I', 'II', 'III', 'IV'];
const LANG = {
  de: { fields: ['hymn_1', 'hymn_2', 'hymn_3', 'hymn_nacht', 'hymn_kl'], text: 'text', title: 'title' },
  lat: { fields: ['hymn_1_lat', 'hymn_2_lat', 'hymn_3_lat', 'hymn_nacht_lat'], text: 'text_lat', title: 'title_lat' },
};
// Felder, die nur im Jahreskreis gelten (nicht in die geprägten Zeiten übernehmen)
const ONLY_J = ['hymn_kl', 'hymn_nacht', 'hymn_nacht_lat'];
// Geprägte Zeiten: Grundschicht = Zeit-each-(each|Tag); weitere Schichten mit Hinweis
const SEASONS = [
  ['Advent', 'a', [[['a', 'last', 'each'], 'ab 17. Dez.']]],
  ['Weihnachtszeit', 'w', [[['w', 'okt', 'each'], 'Weihnachtsoktav'], [['w', 'last', 'each'], 'nach Erscheinung'],
    [['kso', '1', '0'], 'Hl. Familie'], [['xj', '1', '0'], 'Taufe des Herrn'], [['j', '1', '0'], 'Taufe des Herrn']]],
  ['Fastenzeit', 'q', [[['q', '5', 'each'], '5. Fastenwoche'], [['q', '6', 'each'], 'Karwoche'], [['q', '6', '0'], 'Palmsonntag'],
    [['q', '6', '4'], 'Gründonnerstag'], [['q', '6', '5'], 'Karfreitag'], [['q', '6', '6'], 'Karsamstag']]],
  ['Osterzeit', 'o', [[['o', '1', 'each'], 'Osteroktav'], [['xo', '6', '4'], 'Christi Himmelfahrt'],
    [['o', 'last', 'each'], 'nach Himmelfahrt'], [['o', '8', '0'], 'Pfingsten']]],
];
const J_SPECIAL = [[['j', '34', '0'], 'Christkönigssonntag'], [['j', '34', 'each'], '34. Woche im Jahreskreis']];
// Zusätzliche Hymnen zur Wahl für die Kleinen Horen (Angabe des Fachexperten), ganzjährig
const EXTRA_J = { Terz: [2302, 2304], Sext: [2602, 2604], Non: [2902, 2904] };
// Teil E – Preisungen und Gebete (Angabe des Fachexperten; 1306.1/.2 = Aufteilung von 1306)
const PREISUNGEN = [1301, 1302, 1303, 1304, 1305, 1306, 1306.1, 1306.2, 1307, 3991, 2516, 1310, 1311, 1312];
// Commune-Gruppen aus Sollemnities.ts
const SOL_GROUPS = ['kirchw', 'verst'];

// ---------------------------------------------------------------- Hilfen
// gleiche Auflösung wie resolveHymnReference in HymnSelector.js
function resolve(ref) {
  const w = Math.floor(ref);
  const ds = (ref % 1).toFixed(3).split('.')[1];
  const mul = ds.replace(/0+$/, '').length === 1 ? 10 : 1000;
  return ps[w]?.[Math.round((ref % 1) * mul)];
}
function fmtRef(ref) {
  const w = Math.floor(ref);
  const ds = (ref % 1).toFixed(3).replace(/^0\./, '');
  const t = ds.replace(/0+$/, '');
  return t ? `${w}.${t.length === 1 ? t : ds}` : `${w}`;
}
const clean = t => t.replace(/°/g, ' ').replace(/\^ß/g, ' ').replace(/\^\//g, ' ').replace(/\^\w*/g, '').replace(/\s+/g, ' ').trim().replace(/[,;:.]$/, '');
function title(ref, L) {
  const e = resolve(ref);
  if (!e) return '⚠ nicht gefunden';
  if (e[L.title]) return clean(e[L.title]);
  const t = e[L.text] || '';
  if (!t) return L === LANG.de ? '⚠ ohne deutschen Text' : '⚠ ohne lateinischen Text';
  return clean(t.split(/\^l|\^p/)[0]);
}
const get = (o, p) => p.reduce((o, k) => o?.[k], o);
const normHour = h => ({ erstev: 'ErsteV', ErsteV: 'ErsteV' }[h] || h.charAt(0).toUpperCase() + h.slice(1));
const hourOf = h => (normHour(h) === 'ErsteV' ? 'Vesper' : normHour(h));
const fieldNote = f => (f === 'hymn_kl' ? 'KlStB' : /^hymn_nacht/.test(f) ? 'in der Nacht' : null);

// feldweise Überlagerung: state[hour][field] = ref
function overlay(state, layer, fields, skip = []) {
  if (!layer) return;
  for (const [h, v] of Object.entries(layer)) {
    if (!v || typeof v !== 'object' || h === 'each') continue;
    const H = (state[normHour(h)] = state[normHour(h)] || {});
    for (const f of fields) {
      if (skip.includes(f) || !(f in v)) continue;
      if (v[f]) H[f] = v[f]; else delete H[f];
    }
  }
}
// alle Hymnen einer einzelnen Schicht
function hymnsIn(layer, fields) {
  const r = [];
  if (!layer) return r;
  for (const [h, v] of Object.entries(layer)) {
    if (!v || typeof v !== 'object' || h === 'each') continue;
    for (const f of fields) if (v[f]) r.push({ h: normHour(h), f, ref: v[f] });
  }
  return r;
}

// Gruppe = { hour: Map(refKey -> {ref, notes[], base}) }
const newGroup = () => Object.fromEntries(HOURS.map(h => [h, new Map()]));
function add(G, hour, ref, notes = []) {
  const m = (G[hour] = G[hour] || new Map());
  const k = fmtRef(ref);
  notes = notes.filter(Boolean);
  if (!m.has(k)) m.set(k, { ref, notes: [], base: false });
  const e = m.get(k);
  if (!notes.length) { e.base = true; e.notes = []; return; }
  if (e.base) return;
  for (const n of notes) if (!e.notes.includes(n)) e.notes.push(n);
}

// ---------------------------------------------------------------- Aufbau je Sprache
function build(L) {
  const F = L.fields;
  const used = new Set();
  const addU = (G, h, ref, notes) => { used.add(fmtRef(ref)); add(G, h, ref, notes); };

  // Sammelt über Tage/Wochen: occ[hour][refKey] = {ref, f, erstev, days:Set, weeks:Set}
  function collect(layersFor, skip) {
    const occ = {};
    for (let d = 0; d < 7; d++) for (let w = 1; w <= 4; w++) {
      const st = {};
      for (const p of layersFor(d, w)) overlay(st, get(brev, p), F, skip);
      for (const [h, fs] of Object.entries(st)) for (const [f, ref] of Object.entries(fs)) {
        const hh = hourOf(h), k = fmtRef(ref) + '|' + f + '|' + h;
        const o = ((occ[hh] = occ[hh] || {})[k] = occ[hh][k] || { ref, f, erstev: h === 'ErsteV', days: new Set(), weeks: new Set() });
        o.days.add(d); o.weeks.add(w);
      }
    }
    return occ;
  }
  const even = w => w % 2 === 0;
  const baseLayers = (d, w) => [['wt', 'each', 'each'], ['wt', 'each', String(d)],
    ...(even(w) ? [['wt', 'even', 'each'], ['wt', 'even', String(d)]] : []), ['p', String(w), String(d)]];

  // --- Jahreskreis nach Wochentagen
  const weekdays = [];
  for (let d = 0; d < 7; d++) {
    const occ = collect((_, w) => [...baseLayers(d, w), ['j', 'each', 'each'], ['j', 'each', String(d)],
      ...(even(w) ? [['j', 'even', 'each'], ['j', 'even', String(d)]] : [])], []);
    const G = newGroup();
    for (const [h, items] of Object.entries(occ)) for (const o of Object.values(items)) {
      const n = [];
      if (o.erstev) n.push('1. Vesper');
      n.push(fieldNote(o.f));
      if (o.weeks.size < 4) n.push('Wo. ' + [...o.weeks].sort().map(w => ROM[w]).join(', '));
      addU(G, h, o.ref, n);
    }
    if (L === LANG.de) for (const [h, refs] of Object.entries(EXTRA_J)) for (const r of refs) addU(G, h, r, ['zur Wahl']);
    weekdays.push(G);
  }
  const jSpecial = newGroup();
  for (const [p, label] of J_SPECIAL) for (const x of hymnsIn(get(brev, p), F)) addU(jSpecial, hourOf(x.h), x.ref, [label]);

  // --- geprägte Zeiten
  const seasons = {};
  for (const [name, s, extra] of SEASONS) {
    const occ = collect((d, w) => [...baseLayers(d, w), [s, 'each', 'each'], [s, 'each', String(d)],
      ...(even(w) ? [[s, 'even', 'each'], [s, 'even', String(d)]] : [])], ONLY_J);
    const G = newGroup();
    for (const [h, items] of Object.entries(occ)) for (const o of Object.values(items)) {
      const days = [...o.days].sort();
      const n = [];
      if (days.length < 7 && !(h === 'Vesper' && o.erstev)) n.push(days.length === 1 && days[0] === 0 ? 'Sonntage' : days.map(d => DAYS[d]).join(', '));
      if (o.erstev && !(days.length === 1)) n.push('1. Vesper');
      if (o.weeks.size < 4) n.push('Wo. ' + [...o.weeks].sort().map(w => ROM[w]).join(', '));
      addU(G, h, o.ref, n);
    }
    for (const [p, label] of extra) for (const x of hymnsIn(get(brev, p), F)) addU(G, hourOf(x.h), x.ref, [label, fieldNote(x.f)]);
    if (L === LANG.de) for (const [h, refs] of Object.entries(EXTRA_J)) for (const r of refs) addU(G, h, r, ['zur Wahl']);
    seasons[name] = G;
  }

  // --- Commune (Brevier com + Sollemnities)
  const commune = [];
  for (const [typ, subs] of Object.entries(brev.com)) for (const sub of Object.keys(subs)) {
    const xs = hymnsIn(brev.com[typ][sub], F);
    if (!xs.length) continue;
    const G = {};
    for (const x of xs) addU(G, hourOf(x.h), x.ref, [fieldNote(x.f)]);
    commune.push([`com-${typ}-${sub}`, G, 'Brevier.ts']);
  }
  for (const grp of SOL_GROUPS) for (const sub of Object.keys(sol[grp] || {})) {
    const xs = hymnsIn(sol[grp][sub], F);
    if (!xs.length) continue;
    const G = {};
    for (const x of xs) addU(G, hourOf(x.h), x.ref, [fieldNote(x.f)]);
    commune.push([`${grp}-${sub}`, G, 'Sollemnities.ts']);
  }

  // --- Herkunft für „auch: …“
  const origin = {};
  const mark = (G, label, pred = () => true) => {
    for (const m of Object.values(G)) for (const [k, e] of m.entries()) if (pred(e)) origin[k] = origin[k] || [];
    for (const m of Object.values(G)) for (const [k, e] of m.entries()) if (pred(e) && !origin[k].includes(label)) origin[k].push(label);
  };
  weekdays.forEach(G => mark(G, 'Jahreskreis', e => !e.notes.includes('KlStB')));
  for (const [n, G] of Object.entries(seasons)) mark(G, n);
  for (const [n, G] of commune) mark(G, n);
  mark(jSpecial, 'Jahreskreis (Sonderfall)');
  weekdays.forEach(G => mark(G, 'Jahreskreis (KlStB)', e => e.notes.includes('KlStB')));
  const auch = (k, except) => {
    const o = (origin[k] || []).filter(x => x !== except);
    return o.length ? 'auch: ' + o.slice(0, 3).join(', ') + (o.length > 3 ? ' …' : '') : null;
  };

  // --- Kalender
  const calOut = [];
  for (const [dio, months] of Object.entries(cal)) {
    const feasts = [];
    for (const [m, days] of Object.entries(months)) for (const [d, srcs] of Object.entries(days)) for (const [src, e] of Object.entries(srcs)) {
      // je Hymnus: in welchen Horen er genommen wird
      const G = new Map();
      let name = '';
      for (const [h, v] of Object.entries(e)) {
        if (!v || typeof v !== 'object') continue;
        if (v.button && (!name || h === 'Laudes')) name = v.button;
        for (const f of F) if (v[f]) {
          const k = fmtRef(v[f]);
          used.add(k);
          if (!G.has(k)) G.set(k, { ref: v[f], hours: [], notes: [] });
          const x = G.get(k);
          if (!x.hours.includes(hourOf(h))) x.hours.push(hourOf(h));
          for (const n of [fieldNote(f), auch(k)]) if (n && !x.notes.includes(n)) x.notes.push(n);
        }
      }
      if (G.size)
        feasts.push({ m: +m || 0, d: +d || 0, mk: m, dk: d, src, name: clean(name.replace(/^1\. Vesper (zu[mr]?|zu) /, '')), G });
    }
    feasts.sort((a, b) => a.m - b.m || a.d - b.d);
    calOut.push([dio, feasts]);
  }

  // --- Preisungen und Gebete (nur deutsch)
  const preis = L === LANG.de ? PREISUNGEN.map(r => { used.add(fmtRef(r)); return { ref: r, notes: [auch(fmtRef(r))].filter(Boolean) }; }) : [];

  // --- nicht zugeordnet (zusätzlich: fest verdrahtete Hymnen in HymnSelector.js)
  const hs = fs.readFileSync(path.join(D, '../selectors/HymnSelector.js'), 'utf8');
  const hsTable = hs.slice(hs.indexOf('const dataSpecialHymns'));
  for (const m of hsTable.matchAll(/\b\d{4}(\.\d+)?\b/g)) used.add(fmtRef(+m[0]));
  const un = [];
  for (const [k, v] of Object.entries(ps)) {
    if (+k < 1000) continue;
    for (const [sub, e] of Object.entries(v)) {
      if (!e[L.text]) continue;
      const ref = +sub === 0 ? +k : +(k + '.' + (+sub < 10 ? sub : String(sub).padStart(3, '0')));
      if (!used.has(fmtRef(ref))) un.push(ref);
    }
  }
  un.sort((a, b) => a - b);
  return { weekdays, jSpecial, seasons, commune, calOut, preis, un };
}


// ---------------------------------------------------------------- Zusammenführen Deutsch + Latein
const R = { de: build(LANG.de), lat: build(LANG.lat) };
// Namen für Kalendereinträge ohne button
const CAL_NAMES = { '1/67': 'Taufe des Herrn' };
const SEASON_NAMES = SEASONS.map(s => s[0]);
// Sonderschicht-Hinweise, die in Teil B ohne Zeitangabe missverständlich wären
const LABEL_IN_B = { 'ab 17. Dez.': 'Advent ab 17. Dez.', 'nach Erscheinung': 'Weihnachtszeit nach Erscheinung', 'nach Himmelfahrt': 'Osterzeit nach Himmelfahrt' };

function tag(G, lang) { for (const m of Object.values(G)) for (const e of m.values()) e.lang = lang; return G; }
function mergeG(gde, glat) {
  const G = {};
  for (const [g, lang] of [[gde, 'de'], [glat, 'lat']]) {
    if (!g) continue;
    for (const [h, m] of Object.entries(tag(g, lang))) {
      G[h] = G[h] || new Map();
      for (const [k, e] of m) if (!G[h].has(k)) G[h].set(k, e);
    }
  }
  return G;
}
const weekdays = R.de.weekdays.map((G, d) => mergeG(G, R.lat.weekdays[d]));
const jSpecial = mergeG(R.de.jSpecial, R.lat.jSpecial);
const seasons = Object.fromEntries(SEASON_NAMES.map(n => [n, mergeG(R.de.seasons[n], R.lat.seasons[n])]));
const communeNames = [...new Set([...R.de.commune, ...R.lat.commune].map(c => c[0]))];
const commune = communeNames.map(n => [n, mergeG(R.de.commune.find(c => c[0] === n)?.[1], R.lat.commune.find(c => c[0] === n)?.[1])]);
// Kalender: Feiern beider Sprachen zusammenführen
const calendar = [];
for (const [dio] of R.de.calOut) {
  const byKey = new Map();
  for (const lang of ['de', 'lat']) for (const f of R[lang].calOut.find(c => c[0] === dio)?.[1] || []) {
    const k = f.mk + '/' + f.dk + '/' + f.src;
    if (!byKey.has(k)) byKey.set(k, { ...f, items: [] });
    const t = byKey.get(k);
    if (!t.name && f.name) t.name = f.name;
    for (const x of f.G.values()) t.items.push({ ...x, lang });
  }
  calendar.push([dio, [...byKey.values()].sort((a, b) => a.m - b.m || a.d - b.d)]);
}

// ---------------------------------------------------------------- Ausgabe
const out = [];
const P = s => out.push(s);
const DIO = { AAA: 'Allgemeiner Regionalkalender' };
const item = (e, notes = e.notes) => `${fmtRef(e.ref)} ${title(e.ref, LANG[e.lang || 'de'])}` + (notes && notes.length ? ` *(${notes.join('; ')})*` : '');
const sorted = m => [...m.values()].sort((a, b) => (a.lang === b.lang ? 0 : a.lang === 'de' ? -1 : 1) || (b.base ? 1 : 0) - (a.base ? 1 : 0));
function emitList(label, items, showEmpty = true) {
  if (!items.length) { if (showEmpty) P(`- **${label}:** –`); return; }
  if (items.length === 1) P(`- **${label}:** ${item(items[0], items[0].shown)}`);
  else { P(`- **${label}:**`); for (const x of items) P(`  - ${item(x, x.shown)}`); }
}
const emit = (label, m, showEmpty = true) => emitList(label, m ? sorted(m).map(e => ({ ...e, shown: e.notes })) : [], showEmpty);
const sigOf = m => (m ? sorted(m).map(x => x.lang + fmtRef(x.ref) + x.notes.join()).join('|') : '');
// Stundenblock; Terz/Sext/Non mit gleichen Hymnen → „Kleine Horen“
function block(G, hours = HOURS) {
  const kh = ['Terz', 'Sext', 'Non'];
  const same = G.Terz?.size && kh.every(h => sigOf(G[h]) === sigOf(G.Terz));
  for (const h of hours) {
    if (same && h === 'Terz') { emit('Kleine Horen', G.Terz, false); continue; }
    if (same && kh.includes(h)) continue;
    emit(h, G[h], false);
  }
}
const hoursLabel = hs => {
  const order = HOURS.filter(h => hs.includes(h));
  if (['Terz', 'Sext', 'Non'].every(h => order.includes(h))) order.splice(order.indexOf('Terz'), 3, 'Kleine Horen');
  return order.join(', ');
};

// Teil B für Terz/Sext/Non/Komplet: eine Liste, Zeiten und Tage in den Bemerkungen
function mergedHour(h) {
  const isDay = n => DAYS.includes(n) || n === 'Sonntage' || /^(Sonntag|Montag|Dienstag|Mittwoch|Donnerstag|Freitag|Samstag)(, |$)/.test(n);
  const acc = new Map();
  const get = e => {
    const k = e.lang + fmtRef(e.ref);
    if (!acc.has(k)) acc.set(k, { ref: e.ref, lang: e.lang, ctx: new Set(), days: new Set(), special: [], other: [], order: acc.size });
    return acc.get(k);
  };
  const push = (arr, n) => { if (n && !arr.includes(n)) arr.push(n); };
  weekdays.forEach((G, d) => { for (const e of G[h]?.values() || []) { const a = get(e); a.ctx.add('Jahreskreis'); a.days.add(d); e.notes.forEach(n => n !== '1. Vesper' && push(a.other, n)); } });
  for (const e of jSpecial[h]?.values() || []) e.notes.forEach(n => push(get(e).special, n));
  for (const [name, G] of Object.entries(seasons)) for (const e of G[h]?.values() || []) {
    const a = get(e);
    const dayNotes = e.notes.filter(isDay), spec = e.notes.filter(n => !isDay(n) && !['1. Vesper', 'zur Wahl'].includes(n));
    if (e.notes.includes('zur Wahl')) push(a.other, 'zur Wahl');
    if (!spec.length) {
      a.ctx.add(name);
      if (!dayNotes.length) for (let d = 0; d < 7; d++) a.days.add(d);
      for (const n of dayNotes) n === 'Sonntage' ? a.days.add(0) : n.split(', ').forEach(x => a.days.add(DAYS.indexOf(x)));
    }
    spec.forEach(n => push(a.special, LABEL_IN_B[n] || n));
  }
  const res = [];
  for (const a of acc.values()) {
    const n = [];
    const hasJ = a.ctx.has('Jahreskreis'), allS = SEASON_NAMES.every(s => a.ctx.has(s));
    if (a.ctx.size && !(hasJ && allS)) n.push(allS ? 'geprägte Zeiten' : [...a.ctx].join(', '));
    if (a.days.size && a.days.size < 7) n.push([...a.days].sort().map(d => DAYS[d]).join(', '));
    a.special.forEach(x => n.push(x));
    a.other.forEach(x => n.push(x));
    const rank = !n.length ? 0 : a.ctx.size ? (hasJ ? 1 : 2) : 3;
    res.push({ ...a, shown: n, rank });
  }
  return res.sort((x, y) => (x.lang === y.lang ? 0 : x.lang === 'de' ? -1 : 1) || x.rank - y.rank || x.order - y.order);
}

P('# Hymnarium – Verzeichnis der Hymnen'); P('');
P('Stand: ' + new Date().toISOString().slice(0, 10) + ' · automatisch erzeugt mit `node doc/tools/gen-hymnarium.cjs doc/Hymnarium.md` aus `Brevier.ts`, `Calendar.ts`, `Sollemnities.ts` und `PsHymn.ts`. **Nicht von Hand bearbeiten** – Änderungen gehören in die Daten oder in die Konfiguration am Anfang des Skripts.'); P('');
P('**Konventionen**'); P('');
P('- In jeder Liste stehen zuerst die deutschen Hymnen (`hymn_1`, `hymn_2`, `hymn_3`, `hymn_nacht`, `hymn_kl`), danach die lateinischen (`hymn_*_lat`).');
P('- Nummer = Hymnen-ID wie in den Daten (`3142.1` = Variante 1 von Hymnus 3142); Titel = Feld `title`/`title_lat`, sonst erste Zeile des Textes.');
P('- Erste Vesper und Vesper sind zusammengefasst; „1. Vesper“ in Klammern nur als Herkunftshinweis.');
P('- **Kleine Horen** = Terz, Sext und Non mit denselben Hymnen.');
P('- *KlStB* = abweichender Hymnus des Kleinen Stundenbuchs (`hymn_kl`); *in der Nacht* = `hymn_nacht` (Lesehore); beides nur im Jahreskreis.');
P('- *Wo. I, III* = nur in diesen Wochen des Vierwochenpsalters (gerade Wochen = Schicht `even`); ohne Angabe = in allen vier Wochen.');
P('- In den geprägten Zeiten: Tagesangabe (z. B. *Sonntage*), wenn der Hymnus nicht an allen Wochentagen gilt; weitere Angaben = Sonderschichten (z. B. *ab 17. Dez.*).');
P('- *zur Wahl* = zusätzliche Hymnen für die Kleinen Horen ohne eigene Zuordnung in den Daten, ganzjährig (Angabe des Fachexperten).');
P('- *auch: Gruppe* (Teile C und E) = der Hymnus kommt auch in dieser Gruppe vor.'); P('');
P('---'); P('');

// Teil A nur für Lesehore, Laudes und Vesper; Terz, Sext, Non und Komplet sind übers Jahr
// so einheitlich, dass sie nur in Teil B (zusammengefasst) stehen
const A_HOURS = ['Lesehore', 'Laudes', 'Vesper'];
P('# Teil A – Nach Wochentagen und Kirchenjahreszeiten'); P('');
P('*Nur Lesehore, Laudes und Vesper. Terz, Sext, Non und Komplet stehen zusammengefasst in Teil B (B3–B5, B7).*'); P('');
P('## A1 Im Jahreskreis – nach Wochentagen'); P('');
weekdays.forEach((G, d) => { P(`### ${DAYS[d]}`); P(''); block(G, A_HOURS); P(''); });
P('### Sonderfälle im Jahreskreis'); P(''); P('*Schichten:* ' + J_SPECIAL.map(([p, l]) => `\`${p.join('-')}\` = ${l}`).join(', ')); P(''); block(jSpecial, A_HOURS); P('');
SEASONS.forEach(([name, s, extra], i) => {
  P(`## A${i + 2} ${name}`); P('');
  P(`*Schichten:* \`${s}-each-each\`, \`${s}-each-<Tag>\`` + extra.map(([p, l]) => `, \`${p.join('-')}\` = ${l}`).join('')); P('');
  block(seasons[name], A_HOURS); P('');
});
P('---'); P('');

P('# Teil B – Nach Horen'); P('');
HOURS.forEach((h, i) => {
  P(`## B${i + 1} ${h}`); P('');
  if (['Terz', 'Sext', 'Non', 'Komplet'].includes(h)) {
    for (const x of mergedHour(h)) P(`- ${item(x, x.shown)}`);
    P(''); return;
  }
  if ([1, 2, 3, 4, 5, 6].every(d => sigOf(weekdays[d][h]) === sigOf(weekdays[0][h]))) emit('Jahreskreis, jeder Tag', weekdays[0][h]);
  else weekdays.forEach((G, d) => emit(DAYS[d], G[h]));
  emit('Sonderfälle im Jahreskreis', jSpecial[h], false);
  for (const name of SEASON_NAMES) emit(name, seasons[name][h]);
  P('');
});
P('---'); P('');

P('# Teil C – Eigenhymnen nach dem Kalender'); P('');
P('Einträge in eckigen Klammern [Monat/Tag] sind bewegliche Feiern bzw. Sonderkennungen in `Calendar.ts` (z. B. [1/66] = Erscheinung des Herrn). In Klammern: Hore(n), in denen der Hymnus genommen wird; *auch: Gruppe* = der Hymnus kommt auch in dieser Gruppe vor (also kein reiner Eigenhymnus).'); P('');
for (const [dio, feasts] of calendar) {
  if (!feasts.length) continue;
  P(`## ${DIO[dio] || 'Diözese ' + dio}`); P('');
  for (const f of feasts) {
    const isDate = +f.dk >= 1 && +f.dk <= 31 && +f.mk >= 1 && +f.mk <= 12;
    const date = isDate ? `${f.dk}.${f.mk}.` : `[${f.mk}/${f.dk}]`;
    P(`### ${date} ${f.name || CAL_NAMES[f.mk + '/' + f.dk] || '(ohne Bezeichnung)'}${f.src !== 'oblig' ? ` [${f.src}]` : ''}`); P('');
    const items = f.items.sort((a, b) => (a.lang === b.lang ? 0 : a.lang === 'de' ? -1 : 1) || HOURS.indexOf(a.hours[0]) - HOURS.indexOf(b.hours[0]));
    for (const x of items) P(`- ${item(x, [hoursLabel(x.hours), ...x.notes])}`);
    P('');
  }
}
P('---'); P('');

P('# Teil D – Commune'); P('');
P('Gruppen `com-…` aus `Brevier.ts`, `kirchw-…` (Kirchweihe) und `verst-…` (Totenoffizium) aus `Sollemnities.ts`.'); P('');
for (const [name, G] of commune) { P(`### ${name}`); P(''); block(G); P(''); }
P('---'); P('');

P('# Teil E – Preisungen und Gebete'); P('');
P('*(Zusammenstellung nach Angabe des Fachexperten; 1306.1 und 1306.2 sind eine Aufteilung von 1306)*'); P('');
for (const x of R.de.preis) P(`- ${item({ ...x, lang: 'de' })}`);
P(''); P('---'); P('');

P('# Anhang – In keiner Gruppe zugeordnete Hymnen'); P('');
P('Einträge in `PsHymn.ts` (ID ≥ 1000) mit deutschem bzw. lateinischem Text, die in der jeweiligen Sprache nirgends referenziert werden (Brevier.ts, Calendar.ts, Sollemnities.ts, fest verdrahtete Tabelle in HymnSelector.js, Teil E).'); P('');
const un = [...R.de.un.map(r => ({ ref: r, lang: 'de' })), ...R.lat.un.map(r => ({ ref: r, lang: 'lat' }))];
if (!un.length) P('*(keine)*');
for (const x of un) P(`- ${item(x, [])}`);
P('');
fs.writeFileSync(process.argv[2], out.join('\n').replace(/\n{3,}/g, '\n\n') + '\n', 'utf8');
console.log('Zeilen', out.length);
