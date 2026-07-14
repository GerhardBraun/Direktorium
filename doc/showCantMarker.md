Ich möchte die Programmierung so umbauen, dass die Markierungen für den Psalmengesang nicht mehr als Sprachvariante _cant verwaltet wird, sondern durch einen neuen State **showCantMarker**.

In dieser md-Datei möchte ich einen Arbeitsplan für dieses Projekt entwerfen und beraten: Welche einzelnen Aspekte und Schritte sind zu beachten?

## Speicherung im LocalStorage
showCantMarker kann (wie localPrefLanguage) im ThemeMenu aktuell geändert werden. Eine Voreinstellung, die beim Programmstart gelesen wird, wird (analog zu prefLanguage) im LocalStorage als showCantMarker gespeichert.
### One-Time-Migration
Ruft ein User nach dem Upgrade das erste Mal die App auf, soll ein vorhandener Local-Storage-Eintrag prefLanguage==="_cant" übersetzt werden: prefLanguage = "" (für die Standard-Textvariante "Stundenbuch"), showCantMarker = true.
Auch beim languages-Eintrag für die Sprachwahl-Schalter wird "_cant" durch "" ersetzt; ["","_cant"] jedoch wird durch ["aus","aus"] ersetzt.

## ThemeMenu
### Speicherung als Grundeinstellung (LocalStorage)

## SectionHeader


## Schnellschalter für Sprachwahl
Im Einstellungen-Menü fällt bei der Auswahl für die Schnellschalter die dritte Spalte mit den vier Kombinationen mit cant weg.