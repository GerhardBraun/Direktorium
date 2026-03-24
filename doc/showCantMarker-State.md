Die Einrichtung der Psalmen zum Singen soll nicht mehr als Sprachvariante (localPrefLanguage='cant') verwaltet werden, sondern als State `showCantMarkers`.

Vorteile:
1. Längerfristig können auch die anderen Sprachvarianten (lateinisch, benediktinisch, neue Einheitsübersetzung) zum Singen eingerichtet werden.
2. In PsHymn.ts ist kein zusätzlicher Eintrag `text_cant` nötig, sondern in `text` wird der Text mit Cant-Markern gespeichert; dadurch wird die Datenbank verkleinert.

Wenn `showCantMarkers`=false, werden aus dem `text`-Eintrag durch ein einfaches Replace-Kommando die Ziffern `0` bis `4` sowie das `|`-Zeichen gelöscht; damit werden alle Marker entfernt und der bloße Psalmtext bleibt übrig.

**Textanpassungen fürs Singen**
Gelegentlich wird der Psalmtext für das Singen leicht angepasst durch Einfügen oder Weglassen eines `e`:
unsere -> unsre
im Land wohnen -> im Lande wohnen

Das wird durch die Marker `+e` bzw. `-e` gekennzeichnet.
Bei `showCantMarkers`=`true` wird `+e` durch `e` ersetzt, `-e` wird gelöscht;
Bei `showCantMarkers`=`false` wird `-e` durch `e` ersetzt, `+e` wird gelöscht.

uns-ere
-> unsere bei `showCantMarkers`=`false`
-> unsre bei `showCantMarkers`=`true`

im Land+e wohnen
-> im Land wohnen bei `showCantMarkers`=`false`
-> im Lande wohnen bei `showCantMarkers`=`true`

Sollen andere Buchstaben, Silben oder Wörter für das Singen eingefügt oder weggelassen werden, dann werden diese in eckige Klammern gesetzt:

[+nur ]du allein bist Gott
-> du allein bist Gott bei `showCantMarkers`=`false`
-> nur du allein bist Gott bei `showCantMarkers`=`true`

**Psalmton und Antiphon**
Da der Psalmton direkt mit der Antiphon verknüpft ist, soll statt des bisherigen `text_mode`-Eintrags der Psalmton in das `ant`-Feld aufgenommen werden:

          "ant1": "^MODE:VIII:Auferstanden ist Christus; er erleuchtet sein Volk, das er mit seinem Blut erlöst hat.^ö",


