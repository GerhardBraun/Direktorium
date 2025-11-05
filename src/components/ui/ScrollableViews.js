import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { liturgicalData } from "../data/Direktorium.ts";
import { deceasedData } from "../data/Deceased.ts";
import { parseTextWithReferences } from "./RefLink.jsx";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip.jsx";
import { formatText } from "../dataHandlers/TextFormatter.js";

// Konstanten
const DAYS_BUFFER = 7; // Anzahl der Tage vor/nach dem ausgewählten Datum
const hangingIndent = "3.2em"; // Variable für den Einzug
const deceasedSizeRatio = 0.9;

const debugLog = (message, ...args) => {
    const now = new Date();
    const timeStamp = `${now.getSeconds()}.${now.getMilliseconds().toString().padStart(3, '0')}`;
    console.log(`[${timeStamp}]`, message, ...args);
};

// Neue Hilfsfunktion: Effizienter Lookup für liturgische Daten nach Datum
const createLiturgicalDataLookup = (() => {
    let lookup = null;

    return () => {
        if (!lookup) {
            lookup = {};

            // Durchlaufen der verschachtelten Struktur
            for (const year in liturgicalData) {
                for (const month in liturgicalData[year]) {
                    for (const day in liturgicalData[year][month]) {
                        // Erstelle ein Date-Objekt aus den verschachtelten Schlüsseln
                        const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

                        // Speichere den Eintrag mit dem Datum als Schlüssel
                        const key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

                        // Kopiere den Eintrag und füge das date-Objekt hinzu
                        const entry = { ...liturgicalData[year][month][day], date };
                        lookup[key] = entry;
                    }
                }
            }
        }
        return lookup;
    };
})();

// NotesSection-Komponente für formatierte Notizen
const NotesSection = ({ content, fontSize = "0.93em" }) => {
    const processNotesContent = (content) => {
        if (!content) return [];

        // Zuerst alle ¥l durch <br /> ersetzen
        content = content.replace(/¥l/g, "<br />");

        // Dann die Absätze durch ¥h und ¥j splitten und verarbeiten
        const segments = content.split(/(¥[hj])/);

        // Kombiniere jeweils den Text mit seinem nachfolgenden Tag
        const processedSegments = [];
        for (let i = 0; i < segments.length - 1; i += 2) {
            const text = segments[i];
            const tag = segments[i + 1] || ""; // falls kein Tag am Ende
            processedSegments.push(text + tag);
        }

        // Counter für die Nummerierung
        let counter = 0;

        // Jetzt die Segmente verarbeiten
        return processedSegments
            .map((segment) => {
                // Bestimme den Typ basierend auf dem End-Tag
                const type = segment.endsWith("¥j")
                    ? "centered"
                    : segment.endsWith("¥h")
                        ? "normal"
                        : "normal";

                // Entferne End-Tags
                let cleanedSegment = segment.replace(/¥[hj]$/, "");

                // Verarbeite ¥s und füge Nummerierung hinzu
                if (cleanedSegment.startsWith("¥s")) {
                    counter++;
                    cleanedSegment = `${counter}. ${cleanedSegment.substring(2)}`;
                }
                // Spezialfall "Hinweis: ¥s"
                else if (cleanedSegment.includes("¥fHinweis:¥0f ¥s")) {
                    cleanedSegment = cleanedSegment.replace("¥s", "");
                }

                return {
                    type,
                    content: cleanedSegment.trim(),
                };
            })
            .filter((segment) => segment.content);
    };

    const processedSegments = processNotesContent(content);

    return (
        <div style={{ marginBottom: "1.25em" }}>
            <div style={{ fontSize }} className="text-gray-900 dark:text-gray-100">
                {processedSegments.map((segment, index) => {
                    if (/^\d+\./.test(segment.content)) {
                        // Nummerierte Absätze
                        const match = segment.content.match(/^(\d+\.\s*)(.*)$/);
                        if (match) {
                            const [, number, text] = match;
                            return (
                                <div key={index} style={{ marginBottom: "0.16em" }}>
                                    <span
                                        style={{
                                            float: "left",
                                            width: "1.6em",
                                        }}
                                    >
                                        {number}
                                    </span>
                                    <div
                                        style={{
                                            display: "block",
                                            marginLeft: "0em",
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html: parseTextWithReferences(formatText(text)),
                                        }}
                                    />
                                </div>
                            );
                        }
                    }

                    // Normale und zentrierte Absätze
                    return (
                        <p
                            key={index}
                            style={{
                                marginBottom: "0.75em",
                                textAlign: segment.type === "centered" ? "center" : "left",
                                fontSize: segment.type === "centered" ? "1em" : "inherit",
                            }}
                            dangerouslySetInnerHTML={{
                                __html: parseTextWithReferences(formatText(segment.content)),
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

// DayEntry-Komponente
const DayEntry = ({
    entry,
    formatDate,
    id,
    entryDate,
    months,
    deceasedMode,
    expandedDeceased,
    setExpandedDeceased,
    entriesRef,
}) => {
    const dateKey = entry.date.toISOString();
    // Modified condition to check if deceased_more exists and is different from deceased
    const hasMoreDeceased =
        entry.deceased_more &&
        entry.deceased !== entry.deceased_more;
    const isExpanded = expandedDeceased[dateKey];
    const shouldShowMore = deceasedMode === "all" || isExpanded;
    const day = entry.date.getDate();
    const month = months[entry.date.getMonth()];
    const year = entry.date.getFullYear();
    const formattedDate = `${day}. ${month} ${year}`;

    // Prüft, ob dieser Eintrag dem aktuellen entryDate entspricht (für Hervorhebung)
    const isCurrentEntry =
        entry.date.getDate() === entryDate.getDate() &&
        entry.date.getMonth() === entryDate.getMonth() &&
        entry.date.getFullYear() === entryDate.getFullYear();

    return (
        <div
            key={dateKey}
            id={id}
            ref={(el) => (entriesRef.current[formatDate(entry.date)] = el)}
        >
            <div
                className={`p-4 border dark:border-gray-700 rounded transition-colors ${isCurrentEntry
                    ? "bg-orange-50 dark:bg-yellow-400/60"
                    : "bg-white dark:bg-gray-700"
                    }`}
            >
                {/* Datumsheader */}
                <div className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
                    {formattedDate}
                </div>

                {/* Liturgy Section */}
                {entry.liturgy && (
                    <div style={{ marginBottom: "1.25em" }}>
                        <div
                            style={{ fontSize: "1em" }}
                            className="text-gray-900 dark:text-gray-100"
                        >
                            {formatText(entry.liturgy)
                                .split("¥p")
                                .map((paragraph, index) => {
                                    const [marker, ...contentParts] = paragraph.split("¥t");
                                    const content = contentParts.join("¥t");
                                    const lines = content.split("¥l");

                                    return (
                                        <div
                                            key={index}
                                            style={{
                                                marginBottom: "0.2em",
                                                position: "relative",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                }}
                                                dangerouslySetInnerHTML={{ __html: marker }}
                                            />

                                            <div
                                                style={{
                                                    paddingLeft: hangingIndent,
                                                    margin: 0,
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                {lines.map((line, lineIndex) => {
                                                    const commonLineStyle = {
                                                        marginTop: lineIndex > 0 ? "0em" : 0,
                                                    };

                                                    const parts = line.split("¥t");

                                                    if (parts.length >= 3) {
                                                        const [occasion, reference, pageNum, ...rest] =
                                                            parts;
                                                        return (
                                                            <div
                                                                key={lineIndex}
                                                                style={{
                                                                    ...commonLineStyle,
                                                                    display: "grid",
                                                                    gridTemplateColumns:
                                                                        "minmax(2em, auto) minmax(0, 1fr) auto",
                                                                    gap: "0.25em",
                                                                    maxWidth: "25em",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        textAlign: "left",
                                                                        minWidth: 0,
                                                                        overflow: "hidden",
                                                                        textOverflow: "ellipsis",
                                                                        whiteSpace: "nowrap",
                                                                    }}
                                                                    dangerouslySetInnerHTML={{ __html: occasion }}
                                                                />
                                                                <TooltipProvider>
                                                                    <Tooltip>
                                                                        <TooltipTrigger asChild>
                                                                            <span
                                                                                style={{
                                                                                    textAlign: "left",
                                                                                    minWidth: 0,
                                                                                    overflow: "hidden",
                                                                                    textOverflow: "ellipsis",
                                                                                    whiteSpace: "nowrap",
                                                                                    cursor: "help",
                                                                                    maxWidth: "100%",
                                                                                    display: "block",
                                                                                }}
                                                                                dangerouslySetInnerHTML={{
                                                                                    __html: reference,
                                                                                }}
                                                                            />
                                                                        </TooltipTrigger>
                                                                        <TooltipContent>
                                                                            <p
                                                                                dangerouslySetInnerHTML={{
                                                                                    __html: reference.replace(
                                                                                        /<[^>]*>/g,
                                                                                        ""
                                                                                    ),
                                                                                }}
                                                                            />
                                                                        </TooltipContent>
                                                                    </Tooltip>
                                                                </TooltipProvider>
                                                                <span
                                                                    style={{
                                                                        textAlign: "right",
                                                                        whiteSpace: "nowrap",
                                                                    }}
                                                                    dangerouslySetInnerHTML={{ __html: pageNum }}
                                                                />
                                                            </div>
                                                        );
                                                    } else {
                                                        return (
                                                            <div
                                                                key={lineIndex}
                                                                style={{
                                                                    whiteSpace: "pre-line",
                                                                }}
                                                                dangerouslySetInnerHTML={{
                                                                    __html: parseTextWithReferences(line),
                                                                }}
                                                            />
                                                        );
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                )}

                {/* Notes Section */}
                {entry.notes && <NotesSection content={entry.notes} />}

                {entry.sec_notes && <NotesSection content={entry.sec_notes} />}

                {/* Secondary Liturgy Section */}
                {entry.sec_liturgy && (
                    <div style={{ marginBottom: "1.25em" }}>
                        <div
                            style={{ fontSize: "1em" }}
                            className="text-gray-900 dark:text-gray-100"
                        >
                            {formatText(entry.sec_liturgy)
                                .split("¥p")
                                .map((paragraph, index) => {
                                    const [marker, ...contentParts] = paragraph.split("¥t");
                                    const content = contentParts.join("¥t");
                                    const lines = content.split("¥l");

                                    return (
                                        <div
                                            key={index}
                                            style={{
                                                marginBottom: "0.2em",
                                                position: "relative",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                }}
                                                dangerouslySetInnerHTML={{ __html: marker }}
                                            />

                                            <div
                                                style={{
                                                    paddingLeft: hangingIndent,
                                                    margin: 0,
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                {lines.map((line, lineIndex) => {
                                                    const commonLineStyle = {
                                                        marginTop: lineIndex > 0 ? "0em" : 0,
                                                    };

                                                    const parts = line.split("¥t");

                                                    if (parts.length >= 3) {
                                                        const [occasion, reference, pageNum, ...rest] =
                                                            parts;
                                                        return (
                                                            <div
                                                                key={lineIndex}
                                                                style={{
                                                                    ...commonLineStyle,
                                                                    display: "grid",
                                                                    gridTemplateColumns:
                                                                        "minmax(2em, auto) minmax(0, 1fr) auto",
                                                                    gap: "0.25em",
                                                                    maxWidth: "25em",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        textAlign: "left",
                                                                        minWidth: 0,
                                                                        overflow: "hidden",
                                                                        textOverflow: "ellipsis",
                                                                        whiteSpace: "nowrap",
                                                                    }}
                                                                    dangerouslySetInnerHTML={{ __html: occasion }}
                                                                />
                                                                <TooltipProvider>
                                                                    <Tooltip>
                                                                        <TooltipTrigger asChild>
                                                                            <span
                                                                                style={{
                                                                                    textAlign: "left",
                                                                                    minWidth: 0,
                                                                                    overflow: "hidden",
                                                                                    textOverflow: "ellipsis",
                                                                                    whiteSpace: "nowrap",
                                                                                    cursor: "help",
                                                                                    maxWidth: "100%",
                                                                                    display: "block",
                                                                                }}
                                                                                dangerouslySetInnerHTML={{
                                                                                    __html: reference,
                                                                                }}
                                                                            />
                                                                        </TooltipTrigger>
                                                                        <TooltipContent>
                                                                            <p
                                                                                dangerouslySetInnerHTML={{
                                                                                    __html: reference.replace(
                                                                                        /<[^>]*>/g,
                                                                                        ""
                                                                                    ),
                                                                                }}
                                                                            />
                                                                        </TooltipContent>
                                                                    </Tooltip>
                                                                </TooltipProvider>
                                                                <span
                                                                    style={{
                                                                        textAlign: "right",
                                                                        whiteSpace: "nowrap",
                                                                    }}
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: pageNum + rest.join(""),
                                                                    }}
                                                                />
                                                            </div>
                                                        );
                                                    } else if (
                                                        parts.length === 2 &&
                                                        parts[0].includes("\u00A0")
                                                    ) {
                                                        const [firstPart, pageNum] = parts;
                                                        const firstSpaceIndex = firstPart.indexOf("\u00A0");
                                                        const occasion = firstPart.substring(
                                                            0,
                                                            firstSpaceIndex
                                                        );
                                                        const reference = firstPart.substring(
                                                            firstSpaceIndex + 1
                                                        );

                                                        return (
                                                            <div
                                                                key={lineIndex}
                                                                style={{
                                                                    ...commonLineStyle,
                                                                    display: "grid",
                                                                    gridTemplateColumns:
                                                                        "minmax(2em, auto) minmax(0, 1fr) auto",
                                                                    gap: "0.25em",
                                                                    maxWidth: "25em",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        textAlign: "left",
                                                                        minWidth: 0,
                                                                        overflow: "hidden",
                                                                        textOverflow: "ellipsis",
                                                                        whiteSpace: "nowrap",
                                                                    }}
                                                                    dangerouslySetInnerHTML={{ __html: occasion }}
                                                                />
                                                                <TooltipProvider>
                                                                    <Tooltip>
                                                                        <TooltipTrigger asChild>
                                                                            <span
                                                                                style={{
                                                                                    textAlign: "left",
                                                                                    minWidth: 0,
                                                                                    overflow: "hidden",
                                                                                    textOverflow: "ellipsis",
                                                                                    whiteSpace: "nowrap",
                                                                                    cursor: "help",
                                                                                    maxWidth: "100%",
                                                                                    display: "block",
                                                                                }}
                                                                                dangerouslySetInnerHTML={{
                                                                                    __html: reference,
                                                                                }}
                                                                            />
                                                                        </TooltipTrigger>
                                                                        <TooltipContent>
                                                                            <p
                                                                                dangerouslySetInnerHTML={{
                                                                                    __html: reference.replace(
                                                                                        /<[^>]*>/g,
                                                                                        ""
                                                                                    ),
                                                                                }}
                                                                            />
                                                                        </TooltipContent>
                                                                    </Tooltip>
                                                                </TooltipProvider>
                                                                <span
                                                                    style={{
                                                                        textAlign: "right",
                                                                        whiteSpace: "nowrap",
                                                                    }}
                                                                    dangerouslySetInnerHTML={{ __html: pageNum }}
                                                                />
                                                            </div>
                                                        );
                                                    } else {
                                                        return (
                                                            <div
                                                                key={lineIndex}
                                                                style={{
                                                                    ...commonLineStyle,
                                                                    whiteSpace: "pre-line",
                                                                }}
                                                                dangerouslySetInnerHTML={{
                                                                    __html: parseTextWithReferences(line),
                                                                }}
                                                            />
                                                        );
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                )}

                {/* Deceased Section */}
                {(entry.deceased || entry.deceased_more) && (
                    <div style={{ marginBottom: "1.25em" }}>
                        <div
                            style={{ fontSize: `${deceasedSizeRatio}em` }}
                            className="text-gray-900 dark:text-gray-100"
                        >
                            {formatText(
                                shouldShowMore ? entry.deceased_more : entry.deceased || ""
                            )
                                .split("¥+k")
                                .map((paragraph, index) => {
                                    const parts = paragraph.split("¥t");
                                    if (parts.length === 2) {
                                        return (
                                            <div
                                                key={index}
                                                style={{
                                                    marginBottom: "0.16em",
                                                    position: "relative",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        position: "absolute",
                                                        left: 0,
                                                    }}
                                                    dangerouslySetInnerHTML={{ __html: parts[0] }}
                                                />
                                                <pre
                                                    style={{
                                                        paddingLeft: `calc(${hangingIndent} / ${deceasedSizeRatio})`,
                                                        margin: 0,
                                                        fontFamily: "inherit",
                                                        whiteSpace: "pre-line",
                                                    }}
                                                    dangerouslySetInnerHTML={{ __html: parts[1] }}
                                                />
                                            </div>
                                        );
                                    }
                                    return (
                                        <p
                                            key={index}
                                            style={{ marginBottom: "0.16em" }}
                                            dangerouslySetInnerHTML={{ __html: paragraph }}
                                        />
                                    );
                                })}
                            {hasMoreDeceased && deceasedMode !== "all" && !isExpanded && (
                                <button
                                    onClick={() =>
                                        setExpandedDeceased((prev) => ({
                                            ...prev,
                                            [dateKey]: true,
                                        }))
                                    }
                                    style={{
                                        display: "block",
                                        marginTop: "0em",
                                        paddingLeft: `calc(${hangingIndent} / ${deceasedSizeRatio} / 0.9)`,
                                        color: "rgb(27, 83, 204)",
                                        fontSize: "0.9em",
                                    }}
                                >
                                    Todestage in früheren Jahren ...
                                </button>
                            )}
                        </div>
                    </div>
                )}

                {/* Vigil Notes Section */}
                {entry.vig_notes && <NotesSection content={entry.vig_notes} />}

                {/* Vigil Liturgy Section */}
                {entry.vig_liturgy && (
                    <div style={{ marginBottom: "1.25em" }}>
                        <div
                            style={{ fontSize: "1em" }}
                            className="text-gray-900 dark:text-gray-100"
                        >
                            {formatText(entry.vig_liturgy)
                                .split("¥p")
                                .map((paragraph, index) => {
                                    const parts = paragraph.split("¥t");
                                    if (parts.length >= 2) {
                                        const marker = parts[0];
                                        const content = parts
                                            .slice(1)
                                            .join("¥t")
                                            .replace(/¥l/g, "\n");
                                        return (
                                            <div
                                                key={index}
                                                style={{
                                                    marginBottom: "0em",
                                                    position: "relative",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        position: "absolute",
                                                        left: 0,
                                                    }}
                                                    dangerouslySetInnerHTML={{ __html: marker }}
                                                />
                                                <pre
                                                    style={{
                                                        paddingLeft: hangingIndent,
                                                        margin: 0,
                                                        fontFamily: "inherit",
                                                        whiteSpace: "pre-line",
                                                    }}
                                                    dangerouslySetInnerHTML={{
                                                        __html: parseTextWithReferences(content),
                                                    }}
                                                />
                                            </div>
                                        );
                                    }
                                    return (
                                        <p
                                            key={index}
                                            style={{ marginBottom: "0.5em" }}
                                            dangerouslySetInnerHTML={{
                                                __html: parseTextWithReferences(paragraph),
                                            }}
                                        />
                                    );
                                })}
                        </div>
                    </div>
                )}
            </div>

            {/* Post Notes Section - außerhalb des Hauptrahmens */}
            {entry.post_notes && (
                <div className="px-4 mt-0 mb-4">
                    <div
                        style={{ fontSize: "0.93em", marginTop: "0.75em" }}
                        className="text-gray-900 dark:text-gray-100"
                    >
                        {entry.post_notes.split("¥h").map((paragraph, index) => {
                            // Check if paragraph contains ¥j
                            const paragraphs = paragraph.split("¥j");

                            return paragraphs
                                .map((subParagraph, subIndex) => {
                                    const isLastInSequence = subIndex === paragraphs.length - 1;

                                    if (!isLastInSequence) {
                                        // This is a ¥j paragraph that should be centered
                                        return (
                                            <p
                                                key={`${index}-${subIndex}`}
                                                style={{
                                                    marginBottom: "0.75em",
                                                    textAlign: "center",
                                                    fontSize: "1em",
                                                }}
                                                dangerouslySetInnerHTML={{
                                                    __html: formatText(subParagraph.trim()),
                                                }}
                                            />
                                        );
                                    }

                                    // Handle normal paragraphs or the remainder after ¥j
                                    if (subParagraph.trim()) {
                                        return (
                                            <p
                                                key={`${index}-${subIndex}`}
                                                style={{
                                                    marginBottom: "0.75em",
                                                    textAlign: "left",
                                                }}
                                                dangerouslySetInnerHTML={{
                                                    __html: formatText(subParagraph.trim()),
                                                }}
                                            />
                                        );
                                    }
                                    return null;
                                })
                                .filter(Boolean);
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

// DeceasedEntry-Komponente
const DeceasedEntry = ({
    dayOffset,
    entryDate,
    formatDate,
    months,
    entriesRef,
    id,

}) => {
    // Berechnet das anzuzeigende Datum basierend auf entryDate und dem Offset
    // Für das Totenverzeichnis verwenden wir das Jahr 2000 (Schaltjahr)
    const calculateDateForOffset = (baseDate, offset) => {
        // Neues Datum erstellen mit Jahr 2000, aber Tag/Monat vom entryDate
        const date = new Date(2000, baseDate.getMonth(), baseDate.getDate());

        // Offset anwenden
        date.setDate(date.getDate() + offset);

        return date;
    };

    // Berechne das Datum für diesen Eintrag
    const date = calculateDateForOffset(entryDate, dayOffset);

    const day = date.getDate();
    const month = date.getMonth() + 1; // Monate in JS sind 0-basiert, in deceasedData 1-basiert

    // Formatieren des Datums ohne Jahr (nur Tag und Monat) für die Anzeige
    const formattedDate = `${day}. ${months[date.getMonth()]}`;

    // Erstelle einen stabilen Key für diesen Tag+Monat, unabhängig vom Jahr
    // Dies ist wichtig für stabile React-Rendering beim Scrollen
    const stableKey = `${month}-${day}`;

    // Prüft, ob dieser Eintrag dem aktuellen entryDate entspricht (für Hervorhebung)
    const isCurrentEntry = dayOffset === 0;

    // Get deceased entries for this day and month from deceasedData
    const deceasedEntries = deceasedData[month] && deceasedData[month][day]
        ? deceasedData[month][day]
        : [];

    const renderDeceasedEntry = (deceased) => {
        const deceasedIndent = "2.7em"; // Variable für den Einzug

        return (
            <div className="mb-4 relative">
                {/* Erste Zeile mit Jahr und Name */}
                <div style={{ position: "relative" }}>
                    <span style={{ position: "absolute", left: 0 }}>{deceased.year}</span>
                    <div style={{ paddingLeft: deceasedIndent }}>
                        <span dangerouslySetInnerHTML={{ __html: formatText(deceased.name) }} />
                        {deceased.age && <span> ({deceased.age}&nbsp;Jahre)</span>}
                    </div>
                </div>

                {/* Zweite Zeile mit Geburtsinfo */}
                {deceased.birth && (
                    <div
                        style={{
                            paddingLeft: deceasedIndent,
                            position: "relative",
                        }}
                    >
                        <span style={{ position: "absolute", left: deceasedIndent }}>*</span>
                        <div style={{ paddingLeft: "0.7em" }}
                            dangerouslySetInnerHTML={{ __html: formatText(deceased.birth) }} />
                    </div>
                )}

                {/* Dritte Zeile mit Grabinfo */}
                {deceased.grave && (
                    <div style={{ paddingLeft: deceasedIndent }}>
                        Grab:{" "}
                        <span dangerouslySetInnerHTML={{ __html: formatText(deceased.grave) }} />
                    </div>
                )}
            </div>
        );
    };

    // Falls keine Einträge vorhanden sind, leeren Container zurückgeben
    if (deceasedEntries.length === 0) {
        return null;
    }

    return (
        <div
            key={stableKey}
            id={id}
            ref={(el) => {
                // Verwende formatDate, aber mit dem berechneten Datum im Jahr 2000
                // Dies stellt sicher, dass wir für jeden Tag/Monat einen konsistenten Referenzwert haben
                entriesRef.current[stableKey] = el;
            }}
        >
            <div
                className={`p-4 border dark:border-gray-700 rounded transition-colors ${isCurrentEntry
                    ? "bg-orange-50 dark:bg-yellow-400/60"
                    : "bg-white dark:bg-gray-700"
                    }`}
            >
                {/* Date header - Nur Tag und Monat, ohne Jahr */}
                <div className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
                    {formattedDate}
                </div>

                {/* Deceased entries */}
                {deceasedEntries.length > 0 && (
                    <div className="text-gray-900 dark:text-gray-100" style={{ fontSize: "0.93em" }}>
                        {deceasedEntries.map((deceased, index) => (
                            <div key={`${stableKey}-${index}`}>{renderDeceasedEntry(deceased)}</div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

// ScrollableContainer-Komponente
const ScrollableContainer = ({ children, containerRef }) => {
    const [containersReady, setContainersReady] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        const currentContainer = container?.querySelector(
            '[data-current-container="true"]'
        );

        if (container && currentContainer) {
            setContainersReady(true);
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex flex-col max-h-[calc(100vh-88px)] overflow-y-auto px-4"
            style={{
                scrollBehavior: "smooth",
                WebkitOverflowScrolling: "touch",
            }}
        >
            {children}
        </div>
    );
};

// ScrollableViews-Hauptkomponente
const ScrollableViews = ({
    entryDate,
    selectedDate,
    setEntryDate,
    viewMode,
    onDateChange,
    navHeight = 0,
    months = [
        "Januar", "Februar", "März",
        "April", "Mai", "Juni",
        "Juli", "August", "September",
        "Oktober", "November", "Dezember",
    ],
    deceasedMode = "default", // "default" or "all"
    expandedDeceased,
    setExpandedDeceased
}) => {    // Update entryDate wenn sich selectedDate ändert

    // Lokale Scroll-bezogene States
    const entriesRef = useRef({});
    const containerRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState('default');
    const [isReady, setIsReady] = useState(false);
    const scrollTimeoutRef = useRef(null);
    const [dateChangeSource, setDateChangeSource] = useState(null);

    // Formatierungsfunktion für Datumsdarstellung
    const formatDate = useCallback(
        (date) => {
            const day = date.getDate();
            const month = months[date.getMonth()];
            const year = date.getFullYear();
            return `${day} ${month} ${year}`;
        },
        [months]
    );

    // Hilfsfunktion für das Totenverzeichnis
    const getDateFromStableKey = useCallback((key) => {
        const [month, day] = key.split('-').map(Number);
        return new Date(entryDate.getFullYear(), month - 1, day);
    }, [entryDate]);

    // Nach dem ersten Rendern bereit setzen
    useEffect(() => {
        setIsReady(true);
    }, []);

    // Zeit geben für die entriesRef-Berechnung
    useEffect(() => {
        entriesRef.current = {};
        if (entryDate) {
            //debugLog('isReady', isReady, '=> false')
            setIsReady(false);
            setTimeout(() => {
                // debugLog('isReady-Timeout', isReady, '=> true')
                setIsReady(true);
            }, 300);
        }
    }, [entryDate]);

    // Scroll-Handler - verbessert für das Totenverzeichnis
    const handleScroll = useCallback((event) => {
        debugLog('handleScroll ausgelöst mit', formatDate(entryDate), isScrolling)
        if (!containerRef.current || isScrolling === 'navigation') {
            debugLog('handleScroll abgebrochen - isScrolling: ', isScrolling)
            return
        };
        const container = containerRef.current;
        const entries = Object.entries(entriesRef.current);

        // Get nav height for offset calculation
        const navElement = container.parentElement
            .querySelector('[role="navigation"]');
        const navHeight = navElement ? navElement.offsetHeight : 0;

        // Adjust the target position to account for sticky nav
        const containerRect = container.getBoundingClientRect();
        const middleY = containerRect.top + navHeight + containerRect.height / 2;

        let closestEntry = null;
        let minDistance = Infinity;
        let found = false;
        // debugLog('entries:', entries)
        for (const [entryKey, element] of entries) {
            if (!element) continue;

            const rect = element.getBoundingClientRect();

            // Prüfen, ob dieses Element die Viewport-Mitte enthält
            //debugLog('', entryKey, Math.floor(rect.top), Math.floor(rect.bottom), Math.floor(rect.bottom) - Math.floor(rect.top))
            if (rect.top <= middleY && rect.bottom >= middleY) {
                closestEntry = entryKey;
                found = true;
                break; // Schleife beenden, da wir das gesuchte Element gefunden haben
            }

            // Fallback zur ursprünglichen Methode
            const elementMiddleY = rect.top + rect.height / 2;
            const distance = Math.abs(elementMiddleY - middleY);

            if (distance < minDistance) {
                minDistance = distance;
                closestEntry = entryKey;
            }
        }

        if (closestEntry) {
            let newDate;

            if (viewMode === "deceased") {
                // Im Totenverzeichnis ist der Key bereits als 'month-day' formatiert
                newDate = getDateFromStableKey(closestEntry);
            } else {
                // Im Direktorium ist der Key noch als formatiertes Datum
                const parts = closestEntry.split(" ");
                const day = parseInt(parts[0]);
                const month = months.indexOf(parts[1]);
                const year = parseInt(parts[2]);

                newDate = new Date(year, month, day);
            }

            // Nur updaten, wenn sich das Datum tatsächlich geändert hat
            if (
                viewMode === "deceased" ?
                    // Für Totenverzeichnis: vergleiche nur Tag und Monat
                    (entryDate.getDate() !== newDate.getDate() ||
                        entryDate.getMonth() !== newDate.getMonth()) :
                    // Für Direktorium: normaler Vergleich wie bisher
                    formatDate(entryDate) !== formatDate(newDate)
            ) {
                setDateChangeSource('scroll');
                setEntryDate(newDate);
                // Optional: Informiere die Hauptkomponente über Änderungen
                if (onDateChange) onDateChange(newDate);
            }
        }
    }, [isScrolling, entryDate, formatDate, months, onDateChange, setEntryDate, viewMode]);

    // Füge Scroll-Listener hinzu
    useEffect(() => {
        if (!containerRef.current) return;
        debugLog('handleScroll wurde neu erstellt mit isScrolling:', isScrolling);
        const container = containerRef.current;
        const debouncedScroll = (event) => {
            //debugLog('scroll-Listener ausgelöst')
            if (scrollTimeoutRef.current)
                clearTimeout(scrollTimeoutRef.current);
            scrollTimeoutRef.current = setTimeout(() => {
                debugLog('handleScroll durch debouncedScroll ausgelöst')
                handleScroll(event)
            }, 100
            );
        };

        container.addEventListener("scroll", debouncedScroll);
        return () => {
            if (container)
                container.removeEventListener("scroll", debouncedScroll);
            if (scrollTimeoutRef.current)
                clearTimeout(scrollTimeoutRef.current);
        };
    }, [handleScroll]);

    // Scroll zum ausgewählten Datum, wenn sich entryDate ändert
    useEffect(() => {
        debugLog('isReady-useEffect\ncontainerRef:', containerRef)
        // Wenn nicht bereit, nichts tun
        if (!isReady || !containerRef.current)
            return;
        const container = containerRef.current;

        // Nach Scroll-Ende aufräumen
        const scrollEndListener = () => {
            debugLog('SCROLLEND: isScrolling', isScrolling, entriesRef)
            setTimeout(() => {
                debugLog('SCROLLEND-Timeout: isScrolling', isScrolling, '=>null\n', entriesRef)
                setIsScrolling(null); // Scroll-Handler reaktivieren
            }, 300);
            container.removeEventListener("scrollend", scrollEndListener);
        };

        container.addEventListener("scrollend", scrollEndListener);

        if (dateChangeSource === 'scroll') {
            // Flag zurücksetzen für zukünftige Änderungen
            debugLog('isScrolling', isScrolling, ' => scroll')
            setIsScrolling('scroll')
            setDateChangeSource(null);
            return;
        }
        const bookmark = document.getElementById('scroll-to-entryDate');
        debugLog('bookmark:', bookmark)
        // Scrollen mit Animation
        debugLog('isScrolling:', isScrolling, '=> Navigation')
        setIsScrolling('navigation'); // Scroll-Handler deaktivieren

        // Mit scrollIntoView zum Element scrollen
        if (bookmark) {
            bookmark.scrollIntoView({
                behavior: 'smooth',
                block: 'center', // Element in der Mitte des Viewports positionieren
            });
        }

        // Cleanup
        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener("scrollend", scrollEndListener);
            }
        };
    }, [isReady]);

    // Hilfsfunktion: Datum in Lookup-Key umwandeln
    const getDateKey = (date) => {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    };

    // Neue vereinheitlichte Funktion zum Erstellen der Einträge für Directory-Modus
    const renderDirectoryEntries = () => {
        const entries = [];
        const liturgicalLookup = createLiturgicalDataLookup();

        // Durchlaufe den gesamten sichtbaren Bereich in einem einzigen Loop
        for (let offset = -DAYS_BUFFER; offset <= DAYS_BUFFER; offset++) {
            // Berechne das Datum für diesen Offset
            const date = new Date(entryDate);
            date.setDate(date.getDate() + offset);

            // Finde den entsprechenden Eintrag im Lookup
            const dateKey = getDateKey(date);
            const entry = liturgicalLookup[dateKey];

            // Prüfe, ob dies der aktuelle Eintrag ist (für ID und Styling)
            const isCurrentEntry = offset === 0;

            // Nur Einträge hinzufügen, die tatsächlich existieren
            if (entry) {
                entries.push(
                    <DayEntry
                        key={entry.date.toISOString()}
                        entry={entry}
                        formatDate={formatDate}
                        id={isCurrentEntry ? "scroll-to-entryDate" : undefined}
                        entryDate={entryDate}
                        months={months}
                        deceasedMode={deceasedMode}
                        expandedDeceased={expandedDeceased}
                        setExpandedDeceased={setExpandedDeceased}
                        entriesRef={entriesRef}
                    />
                );
            }
        }
        return entries;
    };

    // Funktion zum Erstellen der Eintragslisten für das Totenverzeichnis
    const renderDeceasedEntries = () => {
        const entries = [];

        // Durchlaufe den gesamten sichtbaren Bereich in einem einzigen Loop
        for (let offset = -DAYS_BUFFER; offset <= DAYS_BUFFER; offset++) {
            // Berechne das Datum für diesen Offset
            const date = new Date(2000, entryDate.getMonth(), entryDate.getDate());
            date.setDate(date.getDate() + offset);

            // Erstelle einen stabilen Key aus Tag und Monat
            const stableKey = `${date.getMonth() + 1}-${date.getDate()}`;

            // Prüfe, ob dies der aktuelle Eintrag ist (für ID und Styling)
            const isCurrentEntry = offset === 0;

            entries.push(
                <DeceasedEntry
                    key={stableKey}
                    id={isCurrentEntry ? 'scroll-to-entryDate' : undefined}
                    dayOffset={offset}
                    entryDate={entryDate}
                    isCurrentEntry={isCurrentEntry} // Optional: für visuelle Hervorhebung
                    formatDate={formatDate}
                    months={months}
                    entriesRef={entriesRef}
                />
            );
        }

        return entries;
    };
    // Aktualisierte Render-Funktion
    return (
        <ScrollableContainer containerRef={containerRef}>
            <div className="full-entries-container">
                {viewMode === "directory"
                    ? renderDirectoryEntries()
                    : renderDeceasedEntries()}
            </div>
        </ScrollableContainer>
    );
};

export default ScrollableViews;
export { DayEntry, DeceasedEntry, ScrollableContainer };