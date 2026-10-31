# Prüflauf Namensfelder

Stand: 31.10.2026 – Ergebnis: **keine Beanstandungen** (0 fehlende, 0 überflüssige Namensfelder).

## Geprüfte Datei

`src/components/data/Calendar.ts`, alle Bistümer. Geprüft wird jeder Eintrag Bistum → Monat → Tag → Source; die Felder aller Horen (`each`, `Laudes`, `Vesper`, `Invitatorium` …) werden zusammengefasst.

## Regeln

Die comm-Werte (`comm_1`, `comm_2`) werden am `_` zerlegt (z. B. `Mann_Ord` → Mann + Ord, `Hirten_Kl` → Hirten + Kl).

| Namensfeld | nötig bei comm-Bestandteil | nicht nötig, wenn … |
|---|---|---|
| nominativ | Mann, Jgfr | die Vesper ein eigenes `bitten` hat |
| genitiv | MärtSg, MärtPl, Hirten, Jgfr, Mann, Frau | die Vesper ein eigenes `bitten` hat |
| vokativ | Kl | das Invitatorium hat `ant0_lat` |
| genitiv_lat | Mann, Frau, Ord, Jgfr | Jgfr: Laudes **und** Vesper haben `bitten_lat`; Mann/Frau/Ord: das Invitatorium hat `ant0_lat` |
| vokativ_lat | Kl | das Invitatorium hat `ant0_lat` |

Dieselben Regeln, nach comm-Bestandteil geordnet (Ausnahmen wie oben):

| comm-Bestandteil | erforderliche Namensfelder |
|---|---|
| Mann | nominativ, genitiv, genitiv_lat |
| Jgfr | nominativ, genitiv, genitiv_lat |
| Frau | genitiv, genitiv_lat |
| Ord | genitiv_lat |
| MärtSg | genitiv |
| MärtPl | genitiv |
| Hirten | genitiv |
| Kl | vokativ, vokativ_lat |
| alle übrigen (Apostel, Evang, Maria, Kirchw, Liebe, Erz, Paar …) | – |

Bei zusammengesetzten Einträgen gelten die Felder aller Bestandteile, bei zwei comm-Einträgen die beider. Beispiele: `Hirten_Kl` → genitiv, vokativ, vokativ_lat; `Jgfr_Ord` → nominativ, genitiv, genitiv_lat; `MärtSg_Jgfr` → nominativ, genitiv, genitiv_lat.

Einträge, deren `button` mit „1. Vesper“ beginnt, werden nicht geprüft.

Rubriken:
1. Namensfeld fehlt, obwohl ein comm-Eintrag es braucht.
2. Namensfeld vorhanden, das für keinen comm-Eintrag nötig ist.

## Verlauf

| Lauf | Regeln | fehlt | überflüssig |
|---|---|---|---|
| 1 | Grundregeln | 91 | 140 |
| 2 | nach Korrekturen und Konverterlauf | 12 | 5 |
| 3 | mit Ausnahmen (1. Vesper, `bitten`, `bitten_lat`, `ant0_lat`) | 4 | 4 |
| 4 | nach letzten Korrekturen | 0 | 0 |
