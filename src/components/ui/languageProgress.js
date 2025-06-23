import React, { useState } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../ui/tooltip.jsx";
import { formatPrayerText } from "../dataHandlers/TextFormatter.js";

/**
 * LanguageProgress - Komponente zur Anzeige des Bearbeitungsstands der Sprachversionen
 *
 * Diese Komponente zeigt Informationen über den aktuellen Stand der Einarbeitung
 * von lateinischen Texten und der neuen Einheitsübersetzung an.
 *
 * Letzte Aktualisierung: Dezember 2024
 */
const LanguageProgress = () => {
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);

    const infoText = "^kDer Bestand der Texte für die alternativen Sprachen wird nach und nach aufgebaut. Wo diese noch fehlen, werden die Texte aus dem Stundenbuch angezeigt.^0k";
    const progressText = "^kAktueller Bearbeitungsstand^0k^p^fNeue Einheitsübersetzung^0f^lAlle Psalmen und Cantica und alle Kurzlesungen können in der neuen Einheitsübersetzung angezeigt werden.^lDie Lesungen der Lesehore werden nachrangig behandelt und vorerst nicht eingearbeitet.^p^flateinischer Text der Liturgia Horarum^0f^lFür das Stundengebet im Jahreskreis steht der Vierwochenpsalter vollständig zur Verfügung.^lDie Eigentexte für die Sonntage und die bevorstehenden Hochfeste und Feste werden nach Möglichkeit rechtzeitig zum Gebrauch ergänzt.^lDie Commune-Texte sind noch nicht enthalten.^lDie Lesungen der Lesehore werden nachrangig behandelt und vorerst nicht eingearbeitet.";

    return (
        <div className="mb-2 text-xs text-gray-500 dark:text-gray-400">
            <div className="mb-1 flex items-start gap-1">
                {formatPrayerText(infoText)}
                <TooltipProvider>
                    <Tooltip open={isTooltipOpen} onOpenChange={setIsTooltipOpen}>
                        <TooltipTrigger asChild>
                            <button
                                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 cursor-help flex-shrink-0 touch-manipulation"
                                aria-label="Informationen zum aktuellen Bearbeitungsstand"
                                onClick={() => setIsTooltipOpen(!isTooltipOpen)}
                            >
                                ⓘ
                            </button>
                        </TooltipTrigger>
                        <TooltipContent
                            style={{
                                width: '450px',
                                maxWidth: '90vw',
                                whiteSpace: 'normal',
                                padding: '12px',
                                fontSize: '14px'
                            }}
                        >
                            <div style={{
                                display: 'flex', flexDirection: 'column', gap: '0px',
                                whiteSpace: 'normal', margin: 0
                            }}>
                                {formatPrayerText(progressText)}
                                <div style={{
                                    paddingTop: '8px',
                                    borderTop: '1px solid #d1d5db',
                                    marginTop: '8px'
                                }}>
                                    <p style={{
                                        fontSize: '12px',
                                        color: '#9ca3af',
                                        whiteSpace: 'normal',
                                        margin: 0
                                    }}>

                                    </p>
                                </div>
                            </div>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    );
};

export default LanguageProgress;

