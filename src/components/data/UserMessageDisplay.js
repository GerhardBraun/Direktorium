import React from 'react';
import { formatPrayerText } from '../dataHandlers/TextFormatter.js';

export const userMessages = {
    "01.05.2025": "#Herzlich willkommen!",
    "19.06.2025": "#ausgeblendete Nachricht",
    "25.09.2025": "Liebe Nutzerinnen und Nutzer!^pDie Stundenbuch-App ist mittlerweile dafür vorbereitet, dass über ihr „Heimatbistum“ Fulda hinaus die Eigenfeiern anderer Diözesen und Gemeinschaften aufgenommen werden können.^pWenn Sie, aus einem anderen Bistum kommend, daran Interesse haben, bekunden Sie dies bitte mit einer kurzen Nachricht an ^kdirektorium@bistum^-fulda.de^0k. Derart angefragte Texte werden dann gerne bevorzugt eingearbeitet.^pEine große Hilfe ist es, wenn Sie die Texte zu Eigenfeiern in digitalisierter Form (z.B. als PDF oder OCR) zur Verfügung stellen können; dann kann die Übernahme in die App sehr zügig erfolgen.^pDie App ist bisher nur durch Weiterempfehlung verbreitet; sie kann noch nicht öffentlich angeboten werden, da die Anfrage bezüglich der Nutzungsrechte für die liturgischen und biblischen Texte bisher unbeantwortet ist. Ihre Rückmeldung kann somit auch Auskunft über die derzeitige Reichweite der App liefern. Vielen Dank dafür!",
};

export const UserMessageDisplay = () => {
    return (
        <div>
            {
                Object.entries(userMessages).map(([date, message]) => {
                    if (message.startsWith('#')) return null
                    return (
                        <div key={date} >
                            <div className="mt-6 border-t dark:border-gray-700" > </div>
                            < div className="mt-3 mb-1 text-sm text-gray-500" > {date} </div>
                            {formatPrayerText(message)}
                        </div>
                    )
                })
            }
        </div >);
};
