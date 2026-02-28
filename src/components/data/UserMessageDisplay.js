import React from 'react';
import { formatPrayerText } from '../dataHandlers/TextFormatter.js';

export const userMessages = {
    "01.05.2025": "#Herzlich willkommen!",
    "19.06.2025": "#ausgeblendete Nachricht",
    "25.09.2025": "#Liebe Nutzerinnen und Nutzer!^pDie Stundenbuch-App ist mittlerweile dafür vorbereitet, dass über ihr „Heimatbistum“ Fulda hinaus die Eigenfeiern anderer Diözesen und Gemeinschaften aufgenommen werden können (siehe Menü „Einstellungen“).^pWenn Sie, aus einem anderen Bistum kommend, daran Interesse haben, bekunden Sie dies bitte mit einer kurzen Nachricht an ^kdirektorium@bistum^-fulda.de^0k. Derart angefragte Texte werden dann gerne bevorzugt eingearbeitet.^pEine große Hilfe ist es, wenn Sie die Texte zu Eigenfeiern in digitalisierter Form (z.B. als PDF oder OCR) zur Verfügung stellen können; dann kann die Übernahme in die App sehr zügig erfolgen.^pDie App ist bisher nur durch Weiterempfehlung verbreitet; sie kann noch nicht öffentlich angeboten werden, da die Anfrage bezüglich der Nutzungsrechte für die liturgischen und biblischen Texte bisher unbeantwortet ist. Ihre Rückmeldung kann somit auch Auskunft über die derzeitige Reichweite der App liefern. Vielen Dank dafür!",
    "28.02.2026": "Ab sofort können Psalmen zum Singen eingerichtet angezeigt werden. Wählen Sie dazu ^fin den Spracheinstellungen die Option [cant]^0f. Wenn Sie den Button [cant] lange gedrückt halten, können Sie dies als ihre Grundeinstellung bei jedem Start der App speichern.^lDer Bestand an Psalmen wird nach und nach erweitert, zunächst für Laudes, Vesper und Komplet. Noch nicht eingerichtete Psalmen werden in der Übergangszeit einfach mit dem Text des Stundenbuchs angezeigt.^lEs wird zu jedem Psalm ein Psalmton vorgeschlagen; durch einen ^fKlick auf die Notenzeile^0f des Psalmodiemodells kann aber jeder andere Psalmton ausgewählt werden.^lKorrekturhinweise sind – wie in allen anderen Fällen – auch bei der Einrichtung zum Singen herzlich willkommen! Senden Sie diese bitte an ^kdirektorium@bistum^-fulda.de^0k. Vielen°Dank!",
};

export const UserMessageDisplay = () => {
    return (
        <div>
            {
                Object.entries(userMessages).map(([date, message]) => {
                    if (message.startsWith('#')) return null
                    return (
                        <div key={date} className='text-sm'>
                            <div className="mt-6 border-t dark:border-gray-700" > </div>
                            < div className="mt-3 mb-1 text-xs text-gray-500" > {date} </div>
                            {formatPrayerText(message)}
                        </div>
                    )
                })
            }
        </div >);
};
