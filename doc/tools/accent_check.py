"""Akzentprüfung der lateinischen Texte in den Datenbankdateien.

Aufruf (aus beliebigem Verzeichnis):  python -I direktorium/doc/tools/accent_check.py [Log-Datei]
Ohne Angabe wird direktorium/doc/Akzentpruefung-lat.md überschrieben.
Pflege: Whitelist in doc/Akzentpruefung-lat-whitelist.txt, Vorschläge in manual_suggestions.py,
korrekte Formen / Homographen / geprüfte Fälle (CHECKED) in variant_rules.py.
"""
import re, sys, os, unicodedata
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from tspath import PathIndex
from collections import defaultdict

DATA = os.path.normpath(os.path.join(HERE, "..", "..", "src", "components", "data"))
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(HERE, '..', 'Akzentpruefung-lat.md')
FILES = [f for f in os.listdir(DATA) if f.endswith('.ts') and '_bak' not in f and 'copy' not in f]

FIELD_RE = re.compile(r'"(\w+)"\s*:\s*"((?:[^"\\]|\\.)*)"')
_GER_HINT = re.compile(r'\b(der|das|und|ist|nicht|wir|uns|dich|euch|Herr|Gott|ihn)\b')
def is_latin(key, val):
    """_lat-Felder sowie lateinische Texte in anderen Feldern (z. B. Sequenzen, nur lateinisch vorliegende Hymnen)."""
    if key.endswith('_lat'):
        return True
    return (len(re.findall('[æœǽ]', val)) >= 2 and not re.search('[äöüßÄÖÜ]', val)
            and len(_GER_HINT.findall(val)) < 2)
ACC = set('áéíóúýǽÁÉÍÓÚÝǼ\u0301')
WORD_RE = re.compile(r"[A-Za-zÀ-ÿæœÆŒǽǼëÿ\u0301]+")

def strip_markup(s):
    s = re.sub(r'\^RUBR.*?\^0RUBR', ' ', s)
    s = re.sub(r'\^r.*?\^0r', ' ', s)
    s = re.sub(r'\^(ANT|VEL|ODER|FIRST|LRESP|INVANT)', ' ', s)
    s = re.sub(r'\^[A-Z]{2,}[A-Za-z]*', ' ', s)
    s = re.sub(r'\^.', ' ', s)
    s = s.replace('\\n', ' ')
    return s

def join_markers(s):
    """Elisions- (>, <) und Gesangsmarker (|, 0-3) innerhalb von Wörtern entfernen."""
    return re.sub(r'(?<=[A-Za-zÀ-ÿæœÆŒǽǼ])[<>|0-3]+(?=[A-Za-zÀ-ÿæœÆŒǽǼ])', '', s)

def norm(w):
    """lowercase, accents removed; æ->'A', œ->'O' (one vowel unit); ë->'E' (vowel, never diphthong)."""
    w = w.replace('\u0301', '').lower()
    out = []
    for ch in w:
        if ch in 'æǽ': out.append('A')
        elif ch == 'œ': out.append('O')
        elif ch == 'ë': out.append('E')
        else:
            d = unicodedata.normalize('NFD', ch)[0]
            out.append(d)
    return ''.join(out)

V = set('aeiouyAOE')
PREFIXES = ('ad', 'con', 'in', 'ob', 'sub', 'ab', 'per', 'dis', 'trans')

def syllables(w):
    """Returns (min, max, reasons) for syllable count."""
    n = norm(w)
    L = len(n)
    vowel = [c in V for c in n]
    amb = []  # list of (index, kind) where a vowel unit may merge / be consonantal
    # consonantal u: qu, ngu + vowel
    for i, c in enumerate(n):
        if c == 'u' and i > 0 and i + 1 < L and vowel[i + 1]:
            if n[i - 1] == 'q' or (n[i - 1] == 'g' and i > 1 and n[i - 2] == 'n'):
                vowel[i] = False
            elif n[i - 1] == 's' and n[i + 1] in 'ae' and not n.startswith('su'):
                amb.append((i, 'su+V (suavis/consuetudo?)'))
            elif n[i - 1] == 's' and n[i + 1] in 'ae' and n.startswith('sua'):
                amb.append((i, 'su+V (suavis?)'))
    # consonantal i: initial i+V, intervocalic i
    for i, c in enumerate(n):
        if c != 'i': continue
        nxt = i + 1 < L and n[i + 1] in V
        if not nxt: continue
        if i == 0 or (n[0] == 'h' and i == 1):
            vowel[i] = False
        elif i > 0 and n[i - 1] in V and vowel[i - 1]:
            vowel[i] = False
            if not re.match(r'(h?ei|cui|hui|mai|pei|eia)', n):
                amb.append((i, 'intervokal. i (konsonantisch?)'))
        elif any(n[:i] == p for p in PREFIXES):
            vowel[i] = False
            amb.append((i, 'Präfix + i (adiutor/coniunx?)'))
    # count vowel units; adjacent vowels = separate except diphthong au, eu (known), others ambiguous
    count = 0
    i = 0
    merges = []
    units = [j for j in range(L) if vowel[j]]
    count = len(units)
    sure_merge = 0
    for a, b in zip(units, units[1:]):
        if b != a + 1: continue
        pair = n[a] + n[b]
        if pair == 'au':
            if w[0].isupper() and re.search(r'aus?$', n):
                merges.append('au in Eigenname (Emmaus/Esau?)'); sure_merge += 1
            else:
                sure_merge += 1
        elif pair == 'eu':
            if n in ('heu', 'seu', 'neu', 'ceu') or n.startswith('eu'):
                sure_merge += 1
            elif re.search(r'eu(s|m|i|o|ntes?)?$', n) or 'eunt' in n:
                pass
            else:
                merges.append('eu (Diphthong?)')
        elif pair == 'ui' and n in ('cui', 'huic'):
            sure_merge += 1
        elif pair in ('ae', 'oe') and w[0].isupper():
            pass  # Israel, Michael, Raphael, Noe: getrennt
        elif pair in ('ae', 'oe'):
            merges.append(pair + ' ohne Ligatur – Tippfehler für æ/œ?')
        elif pair in ('ai', 'ei', 'oy', 'ay', 'ey', 'ae', 'oe', 'oi'):
            merges.append(pair + ' (Diphthong?)')
    # au in proper names counted as merged by default but ambiguous: undo for max
    base = count - sure_merge
    au_names = sum(1 for m in merges if m.startswith('au in'))
    other_merges = len(merges) - au_names
    mx = base + au_names
    mn = base - other_merges
    # consonantal-i / su ambiguities: alternative is one MORE syllable (i vocalic) or one LESS (su consonantal)
    for _, kind in amb:
        if kind.startswith('su'):
            mn -= 1
        else:
            mx += 1
    default = base
    reasons = [m for m in merges] + [k for _, k in amb]
    return default, mn, mx, reasons

RAW_WORD_RE = re.compile(r"[A-Za-zÀ-ÿæœÆŒǽǼëÿ́]+(?:[<>|0-3]+[A-Za-zÀ-ÿæœÆŒǽǼëÿ́]+)*")

def has_accent(w):
    return any(c in ACC for c in w)

SEP_FIELDS = ('title_lat', 'quote_lat')
WL_FILE = os.path.normpath(os.path.join(HERE, "..", "Akzentpruefung-lat-whitelist.txt"))
WHITELIST = set()
if os.path.exists(WL_FILE):
    WHITELIST = {l.strip() for l in open(WL_FILE, encoding='utf-8') if l.strip() and not l.startswith('#')}
whitelisted = defaultdict(int)

def capital_vowel(w):
    """Großgeschriebener Vokal/Diphthong/Ligatur am Anfang; I vor Vokal ist konsonantisch (Iesus, Iudica)."""
    if w[0] not in 'AEIOUYÆŒǼ':
        return False
    return not (w[0] == 'I' and len(w) > 1 and norm(w[1]) in 'aeiouyAO')
buckets = {k: (defaultdict(list), defaultdict(list), defaultdict(list)) for k in ('std',)}
accented_sep = defaultdict(list)
# je Feld: Anzahl akzentuierter / fehlender Wörter, je Abschnitt (^p ^* ^+ ^l)
field_stats = {}
for fn in sorted(FILES):
    text = open(os.path.join(DATA, fn), encoding='utf-8').read()
    idx = PathIndex(text)
    for m in FIELD_RE.finditer(text):
        field, val = m.group(1), m.group(2)
        if not is_latin(field, val): continue
        where = idx.path(m.start())
        top = where.split(' : ')[0]
        # Psalmen (Nr. < 1000): Überschriften/Zitate ohne Akzente.
        # Hymnen-Titel: Akzente egal (HymnSelector entfernt sie) → gar nicht prüfen
        psalm_sep = field in SEP_FIELDS and fn == 'PsHymn.ts' and re.fullmatch(r'\d+(\.\d+)?', top) and float(top) < 1000
        if field in SEP_FIELDS and not psalm_sep:
            continue
        stripped = strip_markup(re.sub(r'\^[p*+l]', '', val))
        st = field_stats.setdefault((fn, m.start()), {'label': f"{fn} : {where} ({field})", 'ok': 0, 'miss': [],
                                                      'nseg': stripped.count('') + 1, 'segs_ok': set()})
        for wm in RAW_WORD_RE.finditer(stripped):
            raw = wm.group(0)
            w = join_markers(raw)
            seg = stripped.count('', 0, wm.start())
            loc = (fn, m.start(), f"{fn} : {where} ({field})", raw)
            if not psalm_sep and has_accent(w):
                st['ok'] += 1; st['segs_ok'].add(seg)
            if psalm_sep:
                # Überschriften/Zitate: hier sollen gerade keine Akzente stehen
                if has_accent(w): accented_sep[w].append(loc)
                continue
            if has_accent(w) or len(w) < 3: continue
            if w.isupper() and len(w) > 1: continue  # Abkürzungen/Codes
            d, mn, mx, reasons = syllables(w)
            main, caps, unsure = buckets['std']
            if mn >= 3:
                if capital_vowel(w):
                    if w in WHITELIST:
                        whitelisted[w] += 1
                    else:
                        caps[w].append(loc); st['miss'].append((seg, w))
                elif w in WHITELIST:
                    whitelisted[w] += 1
                else:
                    main[w].append(loc); st['miss'].append((seg, w))
            elif mx >= 3:
                if w in WHITELIST:
                    whitelisted[w] += 1
                    continue
                unsure[w].append((loc, d, mn, mx, '; '.join(sorted(set(reasons)))))

def write_section(f, title, dct, unsure_mode=False):
    f.write(f"\n## {title}\n\n")
    f.write(f"{len(dct)} verschiedene Wörter, {sum(len(v) for v in dct.values())} Vorkommen\n\n")
    # nach Fundstelle gruppieren, in Dateireihenfolge (= Gliederung der Datenbank)
    by_loc = defaultdict(list)
    for w, locs in dct.items():
        for entry in locs:
            if unsure_mode:
                loc, d, mn, mx, r = entry
                label = f"**{w}** ({mn}–{mx} Silben: {r})"
            else:
                loc, label = entry, f"**{w}**"
            if label not in by_loc[loc]:
                by_loc[loc].append(label)
    for loc in sorted(by_loc, key=lambda l: (l[0], l[1])):
        f.write(f"- {loc[2]}: " + ', '.join(by_loc[loc]) + "\n")

_pidx = {}
def is_checked_field(fn, text, pos, key):
    """True: Feld wird geprüft oder Akzente sind egal (Hymnen-Titel). False: darf nicht geändert werden."""
    if not key.endswith('_lat'):
        mm = FIELD_RE.match(text, pos)
        return bool(mm) and is_latin(key, mm.group(2))
    if key not in SEP_FIELDS:
        return True
    if fn not in _pidx:
        _pidx[fn] = PathIndex(text)
    top = _pidx[fn].path(pos).split(' : ')[0]
    return not (fn == 'PsHymn.ts' and re.fullmatch(r'\d+(\.\d+)?', top) and float(top) < 1000)

from word_report import WordReport
from manual_suggestions import MANUAL
report = WordReport(sorted(FILES), DATA, FIELD_RE, strip_markup, join_markers, has_accent, is_checked_field, MANUAL)

with open(OUT, 'w', encoding='utf-8') as f:
    f.write("# Akzentprüfung _lat-Felder\n\nGeprüft: " + ', '.join(sorted(FILES)) + "\n")
    main, caps, unsure = buckets['std']
    f.write("\n# Teil A: Liturgische Texte (alle _lat-Felder außer title_lat/quote_lat; Hymnen-Titel werden nicht geprüft)\n")
    f.write("\n**Hinweis für Excel:** beim Ersetzen „Groß-/Kleinschreibung beachten“ einschalten; die Prüfung auf Kollisionen ist darauf ausgelegt.\n")
    report.write(f, "1. Wörter ab 3 Silben ohne Akzent (Kleinbuchstabe oder großgeschriebener Konsonant am Anfang)", main)
    report.write(f, "2. Wörter ab 3 Silben ohne Akzent mit großgeschriebenem Vokal am Anfang", caps)
    f.write(f"\n_Ausgeblendet per Whitelist ({os.path.basename(WL_FILE)}): {len(whitelisted)} Wörter, "
            f"{sum(whitelisted.values())} Vorkommen._\n")
    report.write(f, "3. Unsichere Silbenzahl (2 oder 3)", unsure,
                 {w: f"_{v[0][2]}–{v[0][3]} Silben: {v[0][4]}_" for w, v in unsure.items()})
    print('std', len(main), len(caps), len(unsure))
    f.write("\n# Teil B: Psalm-Überschriften und -Zitate (title_lat, quote_lat in PsHymn.ts, Nr. < 1000) – sollen keine Akzente haben\n")
    write_section(f, "Wörter MIT Akzent (zu entfernen)", accented_sep)
    print('sep accented', len(accented_sep), sum(len(v) for v in accented_sep.values()))

# Zusatz: auffällige Zeichen in Wörtern und deutsche Texte in _lat-Feldern
odd, german, pending = [], [], []
GER = re.compile(r'\b(der|das|und|ist|nicht|wir|uns|dich|euch|Herr|Gott|ihn)\b')
LET = 'A-Za-zÀ-ÿæœÆŒǽǼ'
ODD = re.compile(rf'[{LET}]+(?:[<|0-9ìòàèùÌÒÀÈÙ]+[{LET}]*)+|[{LET}]*[ìòàèùÌÒÀÈÙ][{LET}]*')
for fn in sorted(FILES):
    text = open(os.path.join(DATA, fn), encoding='utf-8').read()
    idx = PathIndex(text)
    if True:
        for m in FIELD_RE.finditer(text):
            field, val = m.group(1), m.group(2)
            if not is_latin(field, val): continue
            where = idx.path(m.start())
            clean = strip_markup(val)
            for o in re.finditer(rf'[{LET}]*<[{LET}<]*', clean):
                pending.append(f"- `{o.group(0)}` — {fn} : {where} ({field})")
            for o in ODD.finditer(clean):
                if '<' in o.group(0): continue
                if re.search(rf'[{LET}]', o.group(0)) and not re.fullmatch(r'[0-9]+', o.group(0)):
                    odd.append(f"- `{o.group(0)}` — {fn} : {where} ({field})")
            if len(GER.findall(clean)) >= 2:
                german.append(f"- {fn} : {where} ({field}): „{clean.strip()[:90]}“")
with open(OUT, 'a', encoding='utf-8') as f:
    f.write("\n# Teil C: Nebenbefunde\n\n## Nicht ersetzte Akzentmarkierung `<`\n\n"
            "`<` markiert den folgenden Vokal bzw. die Ligatur für einen Akzent; die Makro-Ersetzung ist hier ausgeblieben.\n\n"
            + '\n'.join(pending) + "\n")
    f.write("\n## Auffällige Zeichen innerhalb von Wörtern (Tippfehler?)\n\n"
            "Nicht gewertet: `>` (Elision in Hymnen). Gemeldet: Ziffern, `|` in _lat-Feldern sowie Gravis.\n\n" + '\n'.join(odd) + "\n")
    f.write("\n## Offenbar deutscher Text in _lat-Feldern\n\n" + '\n'.join(german) + "\n")
print('pending', len(pending), 'odd', len(odd), 'german', len(german))

from word_report import collect_variants, write_variants
variants = collect_variants(report, sorted(FILES), DATA, strip_markup, join_markers, has_accent, is_checked_field, PathIndex)
# Whitelist: dort eingetragene akzentuierte Formen gelten als korrekt → keine Variante
_wl_lower = {x.lower() for x in WHITELIST}
for _k in list(variants):
    if all(fm in _wl_lower for fm in variants[_k]):
        for fm in variants[_k]:
            whitelisted[fm] += 1
        del variants[_k]
from variant_rules import CORRECT, HOMOGRAPH, UNSURE, CHECKED
for _k in list(variants):
    if CHECKED.get(_k) == sum(len(l) for l in variants[_k].values()):
        del variants[_k]
with open(OUT, 'a', encoding='utf-8') as f:
    write_variants(f, report, variants, CORRECT, HOMOGRAPH, UNSURE)
print('variants', len(variants))

print('unbenutzt:', sorted(w for w in WHITELIST if w not in whitelisted and w.lower() not in whitelisted))
