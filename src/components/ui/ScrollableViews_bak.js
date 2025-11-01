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

// Hilfsfunktionen
const getDateRange = (date, daysBefore, daysAfter) => {
    const startDate = new Date(date);
    startDate.setDate(date.getDate() - daysBefore);
    const endDate = new Date(date);
    endDate.setDate(date.getDate() + daysAfter);
    return { startDate, endDate };
};

const isDateInRange = (date, startDate, endDate) => {
    return date >= startDate && date <= endDate;
};

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
    entryDate, // Geändert: Verwendet entryDate statt selectedDate
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
    entry,
    formatDate,
    entryDate, // Geändert: Verwendet entryDate statt selectedDate
    months,
    entriesRef,
}) => {
    const deceasedIndent = "2.7em"; // Variable für den Einzug
    const day = entry.date.getDate();
    const month = months[entry.date.getMonth()];
    const year = entry.date.getFullYear();
    //const formattedDate = `${day}. ${month} ${year}`;
    const formattedDate = `${day}. ${month}`;

    // Prüft, ob dieser Eintrag dem aktuellen entryDate entspricht (für Hervorhebung)
    const isCurrentEntry =
        entry.date.getDate() === entryDate.getDate() &&
        entry.date.getMonth() === entryDate.getMonth()
    // && entry.date.getFullYear() === entryDate.getFullYear();

    // Get deceased entries for this day and month from deceasedData
    const deceasedEntries =
        deceasedData[entry.date.getMonth() + 1][entry.date.getDate()];

    const renderDeceasedEntry = (deceased) => {
        return (
            <div className="mb-4 relative">
                {/* Erste Zeile mit Jahr und Name */}
                <div style={{ position: "relative" }}>
                    <span style={{ position: "absolute", left: 0 }}>{deceased.year}</span>
                    <div style={{ paddingLeft: deceasedIndent }}>
                        <span
                            dangerouslySetInnerHTML={{ __html: formatText(deceased.name) }}
                        />
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
                        <span
                            style={{
                                position: "absolute",
                                left: deceasedIndent,
                            }}
                        >
                            *
                        </span>
                        <div
                            style={{
                                paddingLeft: "0.7em",
                            }}
                            dangerouslySetInnerHTML={{ __html: formatText(deceased.birth) }}
                        />
                    </div>
                )}

                {/* Dritte Zeile mit Grabinfo */}
                {deceased.grave && (
                    <div style={{ paddingLeft: deceasedIndent }}>
                        Grab:{" "}
                        <span
                            dangerouslySetInnerHTML={{ __html: formatText(deceased.grave) }}
                        />
                    </div>
                )}
            </div>
        );
    };

    return (
        <div
            key={entry.date.toISOString()}
            ref={(el) => (entriesRef.current[formatDate(entry.date)] = el)}
        >
            <div
                className={`p-4 border dark:border-gray-700 rounded transition-colors ${isCurrentEntry
                    ? "bg-orange-50 dark:bg-yellow-400/60"
                    : "bg-white dark:bg-gray-700"
                    }`}
            >
                {/* Date header */}
                <div className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
                    {formattedDate}
                </div>

                {/* Deceased entries */}
                {deceasedEntries && (
                    <div
                        className="text-gray-900 dark:text-gray-100"
                        style={{ fontSize: "0.93em" }}
                    >
                        {deceasedEntries.map((deceased, index) => (
                            <div key={index}>{renderDeceasedEntry(deceased)}</div>
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
    ref,
    viewMode,
    selectedDate, // Globales Datum aus der Hauptkomponente
    entryDate,
    setEntryDate,
    months,
    formatDate,
    deceasedMode,
    expandedDeceased,
    setExpandedDeceased,
    onDateChange, // Callback für Änderungen am entryDate, die an die Hauptkomponente kommuniziert werden sollen
}) => {
    // Update entryDate wenn sich selectedDate ändert (z.B. durch Navigation in Hauptkomponente)
    useEffect(() => {
        setEntryDate(selectedDate);
    }, [selectedDate]);

    // State für den sichtbaren Bereich
    const [visibleRange, setVisibleRange] = useState({
        startDate: null,
        endDate: null,
    });

    // Lokale Scroll-bezogene States
    const entriesRef = useRef({});
    const containerRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const scrollTimeoutRef = useRef(null);
    const [dateChangeSource, setDateChangeSource] = useState(null);

    // Alle Einträge aus den liturgicalData
    const allEntries = useMemo(() => {
        const entries = [];
        Object.entries(liturgicalData).forEach(([year, yearData]) => {
            Object.entries(yearData).forEach(([month, monthData]) => {
                Object.entries(monthData).forEach(([day, data]) => {
                    entries.push({
                        date: new Date(parseInt(year), parseInt(month) - 1, parseInt(day)),
                        ...data,
                    });
                });
            });
        });
        return entries.sort((a, b) => a.date - b.date);
    }, []);

    // Die sichtbaren Einträge basierend auf dem ausgewählten Datum
    const visibleEntries = useMemo(() => {
        if (!visibleRange.startDate || !visibleRange.endDate) return [];

        const entries = allEntries.filter((entry) =>
            isDateInRange(entry.date, visibleRange.startDate, visibleRange.endDate)
        );

        // Sortiere Einträge nach Datum
        entries.sort((a, b) => a.date - b.date);

        // Finde Index des ausgewählten Datums
        const selectedIndex = entries.findIndex(
            (entry) =>
                entry.date.getDate() === entryDate.getDate() &&
                entry.date.getMonth() === entryDate.getMonth() &&
                entry.date.getFullYear() === entryDate.getFullYear()
        );

        if (selectedIndex === -1) return entries;

        // Teile die Einträge in zwei Gruppen
        return {
            before: entries.slice(Math.max(0, selectedIndex - 7), selectedIndex),
            current: entries.slice(selectedIndex, selectedIndex + 8),
        };
    }, [allEntries, visibleRange, entryDate]);

    // Aktualisiere den sichtbaren Bereich wenn sich das ausgewählte Datum ändert
    useEffect(() => {
        const { startDate, endDate } =
            getDateRange(entryDate, DAYS_BUFFER, DAYS_BUFFER);
        setVisibleRange({ startDate, endDate });
    }, [entryDate, DAYS_BUFFER]);

    // Zeit geben für die entriesRef-Berechnung
    useEffect(() => {
        entriesRef.current = {};
        if (entryDate) {
            setIsReady(false);
            setTimeout(() => {
                setIsReady(true);
            }, 100);
        }
    }, [entryDate]);

    // Scroll-Handler
    const handleScroll = useCallback((event) => {
        if (!containerRef.current || isScrolling) return;
        const container = containerRef.current;
        const entries = Object.entries(entriesRef.current);
        console.log('entries: ', entries, '\ncontainer: ', container)

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

        for (const [dateStr, element] of entries) {
            if (!element) continue;

            const rect = element.getBoundingClientRect();

            // Prüfen, ob dieses Element die Viewport-Mitte enthält
            if (rect.top <= middleY && rect.bottom >= middleY) {
                closestEntry = dateStr;
                found = true;
                break; // Schleife beenden, da wir das gesuchte Element gefunden haben
            }

            // Fallback zur ursprünglichen Methode
            const elementMiddleY = rect.top + rect.height / 2;
            const distance = Math.abs(elementMiddleY - middleY);

            if (distance < minDistance) {
                minDistance = distance;
                closestEntry = dateStr;
            }
        }
        if (closestEntry) {
            const parts = closestEntry.split(" ");
            const day = parseInt(parts[0]);
            const month = months.indexOf(parts[1]);
            const year = parseInt(parts[2]);

            const newDate = new Date(year, month, day);

            if (
                closestEntry &&
                formatDate(entryDate) !== formatDate(newDate)
            ) {
                setDateChangeSource('scroll');
                setEntryDate(newDate);
                // Optional: Informiere die Hauptkomponente über Änderungen
                if (onDateChange) onDateChange(newDate);
            }
        }
    }, [entryDate, isScrolling, formatDate, months, onDateChange]);

    // Füge Scroll-Listener hinzu
    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const debouncedScroll = (event) => {
            if (scrollTimeoutRef.current)
                clearTimeout(scrollTimeoutRef.current);
            scrollTimeoutRef.current = setTimeout(() =>
                handleScroll(event), 150);
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
        // Wenn nicht bereit, nichts tun
        if (!isReady || !containerRef.current)
            return;
        if (dateChangeSource === 'scroll') {
            // Flag zurücksetzen für zukünftige Änderungen
            setDateChangeSource(null);
            return;
        }
        const container = containerRef.current;
        const currentContainer = container
            .querySelector('[data-current-container="true"]');

        if (!currentContainer) return;

        // Scroll-Position berechnen
        const navElement = container.parentElement
            .querySelector('[role="navigation"]');
        const navHeight = navElement ? navElement.offsetHeight : 0;
        const fontSize = parseFloat(getComputedStyle(container).fontSize);
        const emInPixels = (value) => fontSize * value;
        const scrollPosition =
            currentContainer.offsetTop - navHeight - emInPixels(7);

        // Scrollen mit Animation
        setIsScrolling(true); // Scroll-Handler deaktivieren

        container.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
        });

        // Nach Scroll-Ende aufräumen
        const scrollEndListener = () => {
            setTimeout(() => {
                setIsScrolling(false); // Scroll-Handler reaktivieren
            }, 100);
            container.removeEventListener("scrollend", scrollEndListener);
        };

        container.addEventListener("scrollend", scrollEndListener);

        // Cleanup
        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener("scrollend", scrollEndListener);
            }
        };
    }, [isReady]);


    return (
        <ScrollableContainer
            containerRef={containerRef}
        >
            {visibleEntries.before && visibleEntries.before.length > 0 && (
                <div
                    data-before-container="true"
                    style={{
                        position: "relative",
                        marginTop: "-50vh",
                        paddingTop: "50vh",
                        marginBottom: "0",
                    }}
                >
                    {visibleEntries.before.map((entry) =>
                        viewMode === "directory" ? (
                            <DayEntry
                                key={entry.date.toISOString()}
                                entry={entry}
                                formatDate={formatDate}
                                formatText={formatText}
                                entryDate={entryDate}
                                months={months}
                                hangingIndent={hangingIndent}
                                deceasedMode={deceasedMode}
                                deceasedSizeRatio={deceasedSizeRatio}
                                expandedDeceased={expandedDeceased}
                                setExpandedDeceased={setExpandedDeceased}
                                entriesRef={entriesRef}
                            />
                        ) : (
                            <DeceasedEntry
                                key={entry.date.toISOString()}
                                entry={entry}
                                formatDate={formatDate}
                                formatText={formatText}
                                entryDate={entryDate}
                                months={months}
                                entriesRef={entriesRef}
                            />
                        )
                    )}
                </div>
            )}

            {visibleEntries.current && visibleEntries.current.length > 0 && (
                <div
                    data-current-container="true"
                    style={{
                        position: "relative",
                        marginTop: "0",
                    }}
                >
                    {visibleEntries.current.map((entry) =>
                        viewMode === "directory" ? (
                            <DayEntry
                                key={entry.date.toISOString()}
                                entry={entry}
                                formatDate={formatDate}
                                formatText={formatText}
                                entryDate={entryDate}
                                months={months}
                                hangingIndent={hangingIndent}
                                deceasedMode={deceasedMode}
                                deceasedSizeRatio={deceasedSizeRatio}
                                expandedDeceased={expandedDeceased}
                                setExpandedDeceased={setExpandedDeceased}
                                entriesRef={entriesRef}
                            />
                        ) : (
                            <DeceasedEntry
                                key={entry.date.toISOString()}
                                entry={entry}
                                formatDate={formatDate}
                                formatText={formatText}
                                entryDate={entryDate}
                                months={months}
                                entriesRef={entriesRef}
                            />
                        )
                    )}
                </div>
            )}
        </ScrollableContainer>
    );
};

export default ScrollableViews;
export { DayEntry, DeceasedEntry, ScrollableContainer };