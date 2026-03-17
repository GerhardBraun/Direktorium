Für Aschermittwoch (q-0-3) und Gründonnerstag (q-6-4) soll die Auswahl einer alternativen Psalmodie ermöglicht werden.
Dazu wird ein neuer State `alternativePsalms` eingeführt, der standardmäßig auf `false` steht.
Durch einen useEffect wird der State bei Änderung von `texts` oder `hour` auf `false` zurückgesetzt.

Ist `alternativePsalms`=`true`, wird in **getValue.js** zunächst die Source `alt` ausgelesen, `wt` erst danach als Fallback.
Da beide Tage, an denen eine alternative Psalmodie gewählt werden kann, im Rang eines Hochfestes stehen, gibt es neben `alt`und `wt`keine anderen Sources.

Der State wird im **SectionHeader.js** gesteuert.
Dafür wird ein neuer Button eingefügt, der in der Reihe der Buttons als letzter steht.
Er wird angezeigt in Abhängigkeit von hasAltPsalms, das in SectionHeader.js schon angelegt ist.
Die Beschriftung der Buttons lautet,
- wenn hasAltPsalms=51 (numerischer Wert): `Ant und Ps vom Mi der IV. Woche | Fr der III. Woche` (für Aschermittwoch);
- wenn hasAltPsalms=69.1 (numerischer Wert): `Ant und Ps vom Do der II. Woche | Fr der III. Woche` (für Gründonnerstag).
Der Klick auf `Fr der III. Woche` setzt den State auf `true`.