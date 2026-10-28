"""Stichwortbezogene Ausgabe: Ersetzungsvorschlag + Prüfung, ob „Alles ersetzen“ gefahrlos ist."""
import re, os, unicodedata
from collections import defaultdict, Counter

LETTERS = 'A-Za-zÀ-ÿæœÆŒǽǼëÿ́'
MARK = '<>|0-3'
ANY_STRING_RE = re.compile(r'"(\w+)"\s*:\s*"((?:[^"\\]|\\.)*)"')
ACUTE = {'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ý': 'y', 'ǽ': 'æ',
         'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U', 'Ý': 'Y', 'Ǽ': 'Æ'}


def unaccent(w):
    w = w.replace('́', '')
    return ''.join(ACUTE.get(c, c) for c in w)


def match_case(form, model):
    return form[0].upper() + form[1:] if model[0].isupper() else form


def apply_to_raw(raw, accented):
    """Akzente aus `accented` (ohne Marker) in die Rohform mit Markern übertragen."""
    out, k = [], 0
    for c in raw:
        if c in '<>|0123' and (k == 0 or k >= len(accented) or unaccent(accented[k]) != c):
            out.append(c)
            continue
        if k < len(accented):
            out.append(accented[k])
            # kombinierender Akut (œ́) gehört zum vorigen Zeichen
            if k + 1 < len(accented) and accented[k + 1] == '́':
                out.append('́'); k += 1
            k += 1
    return ''.join(out)


class WordReport:
    def __init__(self, files, data_dir, field_re, strip_markup, join_markers, has_accent, is_checked_field, manual):
        self.manual = manual
        self.has_accent = has_accent
        self.forms = defaultdict(Counter)   # unakzentuiert (klein) -> akzentuierte Formen (klein)
        self.values = []                     # (fn, key, value, checked?)
        raw_word = re.compile(rf'[{LETTERS}]+(?:[{MARK}]+[{LETTERS}]+)*')
        for fn in files:
            text = open(os.path.join(data_dir, fn), encoding='utf-8').read()
            for m in ANY_STRING_RE.finditer(text):
                key, val = m.group(1), m.group(2)
                checked = is_checked_field(fn, text, m.start(), key)
                self.values.append((fn, key, val, checked))
                if checked:
                    for wm in raw_word.finditer(strip_markup(val)):
                        w = join_markers(wm.group(0))
                        if has_accent(w):
                            self.forms[unaccent(w).lower()][w.lower()] += 1

    def suggest(self, w):
        if w in self.manual:
            v = self.manual[w]
            if v.startswith('!'):
                return None, v[1:]
            return v, 'manuell' + (' – Tippfehler korrigiert' if unaccent(v).lower() != w.lower() else '')
        cands = self.forms.get(w.lower())
        if cands:
            form, n = cands.most_common(1)[0]
            note = f"Datenbank {n}×" + (f"; Varianten: {', '.join(f for f in cands if f != form)}" if len(cands) > 1 else '')
            return match_case(form, w), note
        if w.lower().endswith('que'):
            base = self.forms.get(w.lower()[:-3])
            if base:
                form = base.most_common(1)[0][0]
                # Enklitikon: Akzent auf die Silbe vor -que; bei schon akzentuierter Basis meist auf letzte Silbe
                return None, f"Basis „{form}“ in Datenbank – Akzent vor -que prüfen"
        return None, 'kein Vorschlag'

    def conflicts(self, raw):
        """Vorkommen von `raw` (Groß-/Kleinschreibung beachtet), die NICHT ersetzt werden dürfen."""
        part = Counter()
        other = Counter()
        pat = re.compile(re.escape(raw))
        for fn, key, val, checked in self.values:
            for m in pat.finditer(val):
                a, b = m.start(), m.end()
                before = val[a - 1] if a > 0 else ''
                after = val[b] if b < len(val) else ''
                # ^-Codes (^p, ^l, ^*) direkt vor dem Wort sind Grenzen, kein Wortteil
                if before and re.match(rf'[{LETTERS}{MARK}]', before) and not (a >= 2 and val[a - 2] == '^'):
                    pass
                elif after and re.match(rf'[{LETTERS}{MARK}]', after):
                    pass
                else:
                    if not checked:
                        other[f"{fn} ({key})"] += 1
                    continue
                s_ = a
                while s_ > 0 and re.match(rf'[{LETTERS}{MARK}]', val[s_ - 1]) and not (s_ >= 2 and val[s_ - 2] == '^'):
                    s_ -= 1
                e_ = b
                while e_ < len(val) and re.match(rf'[{LETTERS}{MARK}]', val[e_]):
                    e_ += 1
                part[re.sub(r'^[A-Z]{2,}(?=[A-Z][a-zæœ])', '', val[s_:e_])] += 1  # ^RUBR-Präfix abtrennen
        return part, other

    def write(self, f, title, dct, extra=None):
        f.write(f"\n## {title}\n\n")
        f.write(f"{len(dct)} verschiedene Wörter, {sum(len(v) for v in dct.values())} Vorkommen\n\n")
        for w in sorted(dct, key=lambda x: unaccent(x).lower()):
            entries = dct[w]
            locs = [e[0] if isinstance(e[0], tuple) else e for e in entries]
            raws = Counter(l[3] for l in locs)
            sug, note = self.suggest(w)
            f.write(f"### {w}\n\n")
            if extra and w in extra:
                f.write(f"{extra[w]}\n\n")
            for raw, n in sorted(raws.items()):
                repl = apply_to_raw(raw, sug) if sug else '???'
                f.write(f"- Suchen: `{raw}` → Ersetzen: `{repl}` ({n}×; Vorschlag: {note})\n")
                part, other = self.conflicts(raw)
                if not part and not other:
                    f.write("  - ✅ „Alles ersetzen“ möglich\n")
                if part:
                    f.write("  - ⚠️ auch Teil anderer Wörter: " + ', '.join(f"{p} ({c}×)" for p, c in part.most_common()) + "\n")
                if other:
                    f.write("  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: " + ', '.join(f"{p} {c}×" for p, c in other.most_common()) + "\n")
            f.write("- Fundstellen: " + '; '.join(dict.fromkeys(l[2] for l in sorted(locs, key=lambda l: (l[0], l[1])))) + "\n\n")


def collect_variants(report, files, data_dir, strip_markup, join_markers, has_accent, is_checked_field, path_index_cls):
    """unakzentuiert (klein) -> akzentuierte Form (klein) -> [(Sortierschlüssel, Fundstelle, Rohform)]"""
    raw_word = re.compile(rf'[{LETTERS}]+(?:[{MARK}]+[{LETTERS}]+)*')
    var = defaultdict(lambda: defaultdict(list))
    for fn in files:
        text = open(os.path.join(data_dir, fn), encoding='utf-8').read()
        idx = path_index_cls(text)
        for m in ANY_STRING_RE.finditer(text):
            key, val = m.group(1), m.group(2)
            if not is_checked_field(fn, text, m.start(), key):
                continue
            for wm in raw_word.finditer(strip_markup(val)):
                raw = wm.group(0)
                w = join_markers(raw)
                if has_accent(w):
                    var[unaccent(w).lower()][w.lower()].append(((fn, m.start()), f"{fn} : {idx.path(m.start())} ({key})", raw))
    return {k: v for k, v in var.items() if len(v) > 1}


def write_variants(f, report, variants, correct, homograph, unsure):
    f.write("\n# Teil D: Unterschiedliche Akzentuierung desselben Wortes\n\n")
    f.write("Korrekte Form = häufigste Form, außer wo ausdrücklich anders angegeben (seltenere Form / Gleichstand). "
            "Homographen (ℹ️) haben je nach Bedeutung unterschiedliche Betonung – dort jede Stelle einzeln prüfen.\n\n")
    f.write(f"{len(variants)} Wörter mit mehreren Akzentuierungen\n\n")
    for k in sorted(variants):
        forms = variants[k]
        ranked = sorted(forms.items(), key=lambda x: -len(x[1]))
        best = correct.get(k, ranked[0][0])
        f.write(f"### {k}\n\n")
        f.write("- Formen: " + ', '.join(f"{fm} ({len(locs)}×)" for fm, locs in ranked) + "\n")
        if k in homograph:
            f.write(f"- ℹ️ Homograph: {homograph[k]} – jede Fundstelle einzeln prüfen\n")
            for fm, locs in ranked:
                f.write(f"- Fundstellen „{fm}“: " + '; '.join(dict.fromkeys(l for _, l, _ in sorted(locs))) + "\n")
            f.write("\n")
            continue
        if k in unsure:
            f.write(f"- ❓ {unsure[k]}\n")
            for fm, locs in ranked:
                f.write(f"- Fundstellen „{fm}“: " + '; '.join(dict.fromkeys(l for _, l, _ in sorted(locs))) + "\n")
            f.write("\n")
            continue
        tie = len(ranked[0][1]) == len(ranked[1][1])
        f.write(f"- Korrekt: **{best}**" + (" (Gleichstand in der Datenbank)" if tie else
                                           " (die seltenere Form!)" if best != ranked[0][0] else "") + "\n")
        for fm, locs in ranked:
            if fm == best:
                continue
            raws = Counter(r for _, _, r in locs)
            for raw, n in sorted(raws.items()):
                repl = apply_to_raw(raw, match_case(best, raw))
                f.write(f"- Suchen: `{raw}` → Ersetzen: `{repl}` ({n}×)\n")
                part, other = report.conflicts(raw)
                if not part and not other:
                    f.write("  - ✅ „Alles ersetzen“ möglich\n")
                if part:
                    f.write("  - ⚠️ auch Teil anderer Wörter: " + ', '.join(f"{p} ({c}×)" for p, c in part.most_common()) + "\n")
                if other:
                    f.write("  - ⚠️ auch als ganzes Wort in nicht zu ändernden Feldern: " + ', '.join(f"{p} {c}×" for p, c in other.most_common()) + "\n")
            f.write(f"- Fundstellen „{fm}“: " + '; '.join(dict.fromkeys(l for _, l, _ in sorted(locs))) + "\n")
        f.write("\n")
