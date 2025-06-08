import React from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../ui/tooltip.jsx";

/**
 * LanguageProgress - Komponente zur Anzeige des Bearbeitungsstands der Sprachversionen
 *
 * Diese Komponente zeigt Informationen über den aktuellen Stand der Einarbeitung
 * von lateinischen Texten und der neuen Einheitsübersetzung an.
 *
 * Letzte Aktualisierung: Dezember 2024
 */
const LanguageProgress = () => {
    return (
        <div className="m-0 text-xs text-gray-500 dark:text-gray-400">
            <div className=" flex items-start gap-1">
                <span className="mb-1 italic">
                    Der Bestand der Texte für die alternativen Sprachen wird nach und nach aufgebaut.
                    Wo diese noch fehlen, werden die Texte aus dem Stundenbuch angezeigt.
                </span>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <button
                                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 cursor-help flex-shrink-0"
                                aria-label="Informationen zum aktuellen Bearbeitungsstand"
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
                                display: 'flex', flexDirection: 'column', gap: '8px',
                                whiteSpace: 'normal', margin: 0
                            }}>
                                <p className="italic">
                                    Aktueller Bearbeitungsstand
                                </p>
                                <p className="mt-0 -mb-1 font-semibold">
                                    neue Einheitsübersetzung
                                </p>
                                <p>
                                    Alle Psalmen und Cantica können in der neuen Einheitsübersetzung angezeigt werden.
                                    <br />
                                    Die Kurzlesungen werden voraussichtlich Buch für Buch ergänzt.
                                    <br />
                                    Wo eine Kurzlesung bereits in der neuen Einheitsübersetzung steht, wird dies
                                    durch das Zeichen › am Anfang des Textes angezeigt.
                                    <br />
                                    Die Lesungen der Lesehore werden nachrangig behandelt und vorerst nicht eingearbeitet.
                                </p>
                                <p className="mt-2 -mb-1 font-semibold">
                                    lateinischer Text der Liturgia Horarum
                                </p>
                                <p>
                                    Für das Stundengebet im Jahreskreis steht der Vierwochenpsalter vollständig zur Verfügung.<br />
                                    Die Eigentexte für die Sonntage und die bevorstehenden Hochfeste und Feste werden nach Möglichkeit
                                    rechtzeitig zum Gebrauch ergänzt.<br />
                                    Die Lesungen der Lesehore werden nachrangig behandelt und vorerst nicht eingearbeitet.
                                </p>
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