"""Ermittelt zu einer Textposition in einer TS-Datendatei den Schlüsselpfad der umschließenden Objekte."""
import bisect, re

KEY_RE = re.compile(r'(?:"((?:[^"\\]|\\.)*)"|\'((?:[^\'\\]|\\.)*)\'|([A-Za-z0-9_$.\-]+))\s*:\s*$')


class PathIndex:
    def __init__(self, text):
        self.pos, self.paths = [0], [()]
        stack = []
        i, n = 0, len(text)
        seg_start = 0  # Beginn des Abschnitts seit dem letzten Strukturzeichen (für Schlüsselerkennung)
        buf = []       # Text seit dem letzten , { [ ohne String-Inhalte, aber mit Schlüssel-Strings
        while i < n:
            c = text[i]
            if c in '"\'`':
                j = i + 1
                while j < n and text[j] != c:
                    j += 2 if text[j] == '\\' else 1
                buf.append(text[i:j + 1])
                i = j + 1
                continue
            if text.startswith('//', i):
                j = text.find('\n', i)
                i = n if j < 0 else j
                continue
            if text.startswith('/*', i):
                j = text.find('*/', i + 2)
                i = n if j < 0 else j + 2
                continue
            if c in '{[':
                m = KEY_RE.search(''.join(buf))
                key = next((g for g in m.groups() if g is not None), None) if m else None
                if c == '[' and key is None:
                    key = None
                stack.append(key)
                self._snap(i, stack)
                buf = []
                if c == '[':
                    stack.append(0)  # Array-Index
                    stack[-1] = ('#', 0)
                    self._snap(i, stack)
            elif c in '}]':
                if c == ']' and stack and isinstance(stack[-1], tuple):
                    stack.pop()
                if stack:
                    stack.pop()
                self._snap(i, stack)
                buf = []
            elif c == ',':
                if stack and isinstance(stack[-1], tuple):
                    stack[-1] = ('#', stack[-1][1] + 1)
                    self._snap(i, stack)
                buf = []
            else:
                buf.append(c)
            i += 1

    def _snap(self, i, stack):
        self.pos.append(i + 1)
        self.paths.append(tuple(stack))

    def path(self, p):
        k = bisect.bisect_right(self.pos, p) - 1
        parts = []
        for s in self.paths[k]:
            if s is None:
                continue
            parts.append(f"[{s[1]}]" if isinstance(s, tuple) else s)
        return ' : '.join(parts)
