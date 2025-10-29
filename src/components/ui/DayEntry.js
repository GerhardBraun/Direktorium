import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip.jsx";
import { parseTextWithReferences } from "./ui/RefLink.jsx";

// NotesSection-Hilfsfunktion, die in DayEntry verwendet wird
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
                let type = "normal";
                if (segment.endsWith("¥h")) {
                    segment = segment.slice(0, -2);
                    type = "normal";
                } else if (segment.endsWith("¥j")) {
                    segment = segment.slice(0, -2);
                    type = "centered";
                }

                return {
                    type,
                    content: segment,
                };
            })
            .filter((segment) => segment.content.trim() !== "");
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

const DayEntry = ({
    entry,
    formatDate,
    formatText,
    selectedDate,
    months,
    hangingIndent,
    deceasedMode,
    deceasedSizeRatio,
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

    return (
        <div
            key={dateKey}
            ref={(el) => (entriesRef.current[formatDate(entry.date)] = el)}
        >
            <div
                className={`p-4 border dark:border-gray-700 rounded transition-colors ${entry.date.getDate() === selectedDate.getDate() &&
                    entry.date.getMonth() === selectedDate.getMonth()
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

export default DayEntry;