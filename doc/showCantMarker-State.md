Die Einrichtung der Psalmen zum Singen soll nicht mehr als Sprachvariante (localPrefLanguage='cant') verwaltet werden, sondern als State `showCantMarkers`.

**Vorteile:**
1. Längerfristig können auch die anderen Sprachvarianten (lateinisch, benediktinisch, neue Einheitsübersetzung) zum Singen eingerichtet werden.
2. In PsHymn.ts ist kein zusätzlicher Eintrag `text_cant` nötig, sondern in `text` wird der Text mit Cant-Markern gespeichert. Dadurch wird die Datenbank verkleinert, und etwaige Korrekturen sind nur an einer Stelle nötig.

In dieser md-Datei möchte ich einen Arbeitsplan für dieses Projekt entwerfen und beraten: Welche einzelnen Aspekte und Schritte sind zu beachten?

## Speicherung im LocalStorage
showCantMarker kann (wie localPrefLanguage) im ThemeMenu aktuell geändert werden. Eine Voreinstellung, die beim Programmstart gelesen wird, wird (analog zu prefLanguage) im LocalStorage als showCantMarker gespeichert.
### One-Time-Migration
Ruft ein User nach dem Upgrade das erste Mal die App auf, soll ein vorhandener Local-Storage-Eintrag prefLanguage==="_cant" übersetzt werden: prefLanguage = "" (für die Standard-Textvariante "Stundenbuch"), showCantMarker = true.
Auch beim languages-Eintrag für die Sprachwahl-Schalter wird "_cant" durch "" ersetzt; ["","_cant"] jedoch wird durch ["aus","aus"] ersetzt.

## ThemeMenu
Der Button `cant` kann mit den anderen Sprachwahl-Buttons in einer Reihe stehen bleiben, allerdings durch eine senkrechte Linie optisch abgetrennt.
### Anzeige und Speicherung "Voreinstellung beim Programmstart"
"Psalmen zum Singen eingerichtet" wird als Ergänzung zur Bezeichnung der gewählten Übersetzung angezeigt, wenn `showCantMarkers`=true ist.
Ergänzt werden soll ein Button "aktuelle Einstellung als Voreinstellung speichern". Das ersetzt die bisherige LongPress-Funktion.

## SectionHeader
Nach dem Schnellschalter für die Sprachwahl wird ein Schalter "cant" ergänzt.
Dieser wird nur bei den Überschriften "Psalmodie" und "Benedictus/Magnificat/Nunc dimittis" angezeigt.
"cant" wird unterstrichen bei showCantMarkers=true, durchgestrichen bei false.

## Schnellschalter für Sprachwahl
Im Einstellungen-Menü fällt bei der Auswahl für die Schnellschalter die dritte Spalte mit den vier Kombinationen mit cant weg.

## Aufruf von formatCantMarkers in formatPsalm
formatCantMarkers wird nur aufgerufen, wenn showCantMarkers=true ist und text in der gewählten Sprachvariante CantMarkers enthält. Zuverlässige Prüfung dafür ist, ob der Text wenigstens ein Pipe-Symbol enthält.
### Textanpassungen fürs Singen
Wenn `showCantMarkers`=false, werden aus dem `text`-Eintrag durch ein einfaches Replace-Kommando die Ziffern `0` bis `4` sowie das `|`-Zeichen gelöscht; damit werden alle Marker entfernt und der bloße Psalmtext bleibt übrig.

Gelegentlich wird der Psalmtext für das Singen leicht angepasst durch Einfügen oder Weglassen eines `e`:
unsere -> unsre
im Land wohnen -> im Lande wohnen
rufe ich zu dir -> ruf’ ich zu dir

Das wird durch die Marker `+e`, `-e` und `'e` gekennzeichnet.
Bei `showCantMarkers`=`true` wird `+e` durch `e` ersetzt, `'e` durch `’`, `-e` wird gelöscht;
Bei `showCantMarkers`=`false` wird `-e` und `'e` durch `e` ersetzt, `+e` wird gelöscht.

uns-ere
-> unsere bei `showCantMarkers`=`false`
-> unsre bei `showCantMarkers`=`true`

im Land+e wohnen
-> im Land wohnen bei `showCantMarkers`=`false`
-> im Lande wohnen bei `showCantMarkers`=`true`

ruf'e ich zu dir
-> rufe ich zu dir bei `showCantMarkers`=`false`
-> ruf’ ich zu dir bei `showCantMarkers`=`true`

Sollen andere Buchstaben, Silben oder Wörter für das Singen eingefügt oder weggelassen werden, dann werden diese in eckige Klammern gesetzt:

[+nur ]du allein bist Gott
-> du allein bist Gott bei `showCantMarkers`=`false`
-> nur du allein bist Gott bei `showCantMarkers`=`true`


## Anpassungen im TextFormatter
### getDoxology
auch die lateinische Doxologie mit cant-Markern versehen

### Ermittlung von cantMode

### PsalmCantDisplay

## Converter
berücksichtigt nicht mehr Text_cant für das Excel-Blatt "PsalmenHymnen"

