import React from "react";
import { deceasedData } from "../data/Deceased.ts";

const DeceasedEntry = ({
    entry,
    formatDate,
    formatText,
    selectedDate,
    months,
    entriesRef,
}) => {
    const deceasedIndent = "2.7em"; // Variable für den Einzug
    const day = entry.date.getDate();
    const month = months[entry.date.getMonth()];
    const year = entry.date.getFullYear();
    const formattedDate = `${day}. ${month} ${year}`;

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
                className={`p-4 border dark:border-gray-700 rounded transition-colors ${entry.date.getDate() === selectedDate.getDate() &&
                    entry.date.getMonth() === selectedDate.getMonth()
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

export default DeceasedEntry;