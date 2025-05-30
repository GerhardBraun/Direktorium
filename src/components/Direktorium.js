import React from "react";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Menu, MonitorCheck } from "lucide-react";
import useWakeLock from "./comp_WakeLock.js";
import { liturgicalData } from "./data/Direktorium.ts";
import { deceasedData } from "./data/Deceased.ts";
import { ReferenceDialog, parseTextWithReferences } from "./comp_RefLink.jsx";
import { getLiturgicalInfo } from "./comp_LitCalendar.js";
import { processBrevierData } from "./comp_BrevierDataProcessor.js";
import formatBibleRef from "./comp_BibleRefFormatter.js";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip.jsx";
import SourceSelector from "./selectors/SourceSelector.js";
import { SectionHeader as extSectionHeader } from "./selectors/SectionHeader.js";
import KompletSelector from "./selectors/KompletSelector.js";
import HymnSelector from "./selectors/HymnSelector.js";
import MarAntSelector from "./selectors/MarAntSelector.js";
import { getValue as extGetValue } from "./comp_GetValue.js";
import { getKompletValue } from "./comp_GetKompletValue.js";
import {
  formatPsalm as extFormatPsalm,
  formatText,
  formatPrayerText as extFormatPrayerText,
} from "./comp_TextFormatter.js";
import NavigationButtons from "./comp_NavigationButtons.js";
import PersonalSettings from "./PersonalSettings.js";
import TitleBar from "./comp_TitleBar.js";
import { getLocalStorage, setLocalStorage } from './utils/localStorage.js';
import { ordinarium } from "./utils/ordinarium.js";

const fontFamily = "Cambria, serif";
const hangingIndent = "3.2em"; // Variable für den Einzug
const deceasedSizeRatio = 0.9;
const DAYS_BUFFER = 7; // Anzahl der Tage vor/nach dem ausgewählten Datum

const months = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

const PrayerHours = {
  ERSTEVESPER: "erstev",
  INVITATORIUM: "invitatorium",
  LESEHORE: "lesehore",
  LAUDES: "laudes",
  TERZ: "terz",
  SEXT: "sext",
  NON: "non",
  VESPER: "vesper",
  KOMPLET: "komplet",
};

// Enum for text sources
const TextSources = {
  EIG: "eig",
  COM: "com",
  WT: "wt",
};

// Ähnliche Anpassung für den useTouchZoom Hook
const useTouchZoom = (
  initialFontSize,
  minSize = 8,
  maxSize = 24,
  sensitivity = 1.0,
  isDatePickerOpen
) => {
  // Initialisierung mit gespeichertem Wert aus localStorage
  const getInitialFontSize = () => {
    const savedSize = getLocalStorage("baseFontSize");
    return savedSize ? parseFloat(savedSize) : initialFontSize;
  };

  const [touchStartDistance, setTouchStartDistance] = useState(null);
  const [startFontSize, setStartFontSize] = useState(getInitialFontSize());
  const [currentFontSize, setCurrentFontSize] = useState(getInitialFontSize());

  // Speichern der Schriftgröße im localStorage bei Änderungen
  useEffect(() => {
    setLocalStorage("baseFontSize", currentFontSize.toString());
  }, [currentFontSize]);

  const getTouchDistance = useCallback((touches) => {
    if (touches.length < 2) return null;
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }, []);

  const handleTouchStart = useCallback(
    (e) => {
      if (isDatePickerOpen) return;

      if (e.touches.length === 2) {
        const distance = getTouchDistance(e.touches);
        setTouchStartDistance(distance);
        setStartFontSize(currentFontSize);
      }
    },
    [getTouchDistance, currentFontSize, isDatePickerOpen]
  );

  const handleTouchMove = useCallback(
    (e) => {
      if (isDatePickerOpen) return;

      if (e.touches.length === 2 && touchStartDistance) {
        e.preventDefault();

        const currentDistance = getTouchDistance(e.touches);
        const rawScale = currentDistance / touchStartDistance;
        const scale = 1.0 + (rawScale - 1.0) * sensitivity;
        let newSize = Math.round(startFontSize * scale);
        newSize = Math.max(minSize, Math.min(maxSize, newSize));
        setCurrentFontSize(newSize);
      }
    },
    [
      touchStartDistance,
      startFontSize,
      getTouchDistance,
      minSize,
      maxSize,
      sensitivity,
      isDatePickerOpen,
    ]
  );

  const handleTouchEnd = useCallback(() => {
    setTouchStartDistance(null);
  }, []);

  useEffect(() => {
    if (!isDatePickerOpen) {
      document.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleTouchEnd);
      document.addEventListener("touchcancel", handleTouchEnd);

      return () => {
        document.removeEventListener("touchstart", handleTouchStart);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
        document.removeEventListener("touchcancel", handleTouchEnd);
      };
    }
  }, [handleTouchStart, handleTouchMove, handleTouchEnd, isDatePickerOpen]);

  return [currentFontSize, setCurrentFontSize];
};

// Helper-Funktion für View-Navigation
const getNextView = (currentView, direction) => {
  const views = ["deceased", "directory", "prayer"];
  const currentIndex = views.indexOf(currentView);

  if (direction === "right") {
    return views[Math.min(currentIndex + 1, 2)];
  } else {
    return views[Math.max(currentIndex - 1, 0)];
  }
};

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

const NotesSection = ({ content, fontSize = "0.93em" }) => {
  if (!content) return null;

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
    (!entry.deceased || entry.deceased !== entry.deceased_more);
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

// Prayer Menu Component
const PrayerMenu = ({
  title,
  onSelectHour,
  viewMode,
  setViewMode,
  season,
  liturgicalInfo,
  prayerTexts,
  onPrevDay,
  onNextDay,
  selectedDate,
  prefSrc,
  setPrefSrc,
  prefSollemnity,
  setPrefSollemnity,
  useCommemoration,
  setUseCommemoration,
}) => {
  const rank_wt = prayerTexts?.rank_wt || 0;
  const rank_date = prayerTexts?.rank_date || 0;
  const sollemnityErsteVesper = () =>
    ["soll", "kirchw"].includes(prefSollemnity);

  return (
    <div className="flex flex-col p-4 bg-white dark:bg-gray-900">
      {/* Title bar with navigation */}
      <TitleBar
        title={''}
        onPrevDay={onPrevDay}
        onNextDay={onNextDay}
        liturgicalInfo={liturgicalInfo}
      />
      {/* Source Selector */}
      <SourceSelector
        prayerTexts={prayerTexts}
        prefSrc={prefSrc}
        prefSollemnity={prefSollemnity}
        useCommemoration={useCommemoration}
        setPrefSrc={setPrefSrc}
        setPrefSollemnity={setPrefSollemnity}
        setUseCommemoration={setUseCommemoration}
        viewMode={viewMode}
        season={season}
        className="mb-4"
      />

      {/* Prayer Hours */}
      <div className="space-y-2 mb-6">
        {Object.values(PrayerHours).map((hour) => {
          // Spezielle Behandlung für Terz, Sext, Non
          if (["terz", "sext", "non"].includes(hour)) {
            if (hour === "terz") {
              return (
                <div key="tsn" className="flex gap-2 w-full">
                  {["terz", "sext", "non"].map((tsnHour) => (
                    <button
                      key={tsnHour}
                      onClick={() => {
                        onSelectHour(tsnHour, prayerTexts);
                      }}
                      className="flex-1 p-3 text-center rounded-lg bg-gray-100 dark:bg-gray-800
                                                hover:bg-gray-200 dark:hover:bg-gray-700
                                                text-gray-900 dark:text-gray-100"
                    >
                      {tsnHour.charAt(0).toUpperCase() + tsnHour.slice(1)}
                    </button>
                  ))}
                </div>
              );
            }
            return null; // Sext und Non überspringen, da sie bereits in der Flex-Box enthalten sind
          }

          if (hour === "erstev") {
            if (sollemnityErsteVesper()) {
              return (
                <button
                  onClick={() => {
                    onSelectHour(hour, prayerTexts);
                  }}
                  className="w-full p-3 text-center rounded-lg bg-gray-100 dark:bg-gray-800
                                    hover:bg-gray-200 dark:hover:bg-gray-700
                                    text-gray-900 dark:text-gray-100"
                >
                  Erste Vesper
                </button>
              );
            }
            return null;
          }

          let displayText = hour.charAt(0).toUpperCase() + hour.slice(1);
          if (hour === "vesper") {
            if (
              prayerTexts?.vesper?.eig?.button &&
              prayerTexts.hasErsteVesper
            ) {
              displayText = prayerTexts.vesper.eig.button;
            } else if (prayerTexts?.vesper?.wt?.button) {
              displayText = prayerTexts.vesper.wt.button;
            } else {
              const dayOfWeek = selectedDate.getDay();
              if (
                dayOfWeek === 6 &&
                rank_date < 4 &&
                rank_wt < 5 &&
                !sollemnityErsteVesper()
              ) {
                // Samstag
                displayText = "1. Vesper vom Sonntag";
              } else {
                if (sollemnityErsteVesper()) {
                  displayText = "Zweite Vesper";
                } else displayText = "Vesper";
              }
            }
          }

          // Normale Darstellung für andere Horen
          return (
            <button
              key={hour}
              onClick={() => {
                onSelectHour(hour, prayerTexts);
              }}
              className="w-full p-3 text-center rounded-lg bg-gray-100 dark:bg-gray-800
                                hover:bg-gray-200 dark:hover:bg-gray-700
                                text-gray-900 dark:text-gray-100"
            >
              {displayText}
            </button>
          );
        })}
      </div>

      {/* Mass - ausgeblendet */}
      {viewMode === "ausblenden" && (<>

        <button
          onClick={() => onSelectHour("mass")}
          className="w-full p-3 mb-6 text-center rounded-lg bg-gray-100 dark:bg-gray-800
        hover:bg-gray-200 dark:hover:bg-gray-700
        text-gray-900 dark:text-gray-100"
        >
          Messfeier
        </button>
      </>)}

      {/* View Selection with spacing */}
      <div className="pt-4 border-t dark:border-gray-700">
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("directory")}
            className="flex-1 p-3 text-center rounded-lg bg-gray-100 dark:bg-gray-800
                                hover:bg-gray-200 dark:hover:bg-gray-700
                                text-gray-900 dark:text-gray-100"
          >
            Direktorium
          </button>
          <button
            onClick={() => setViewMode("deceased")}
            className="flex-1 p-3 text-center rounded-lg bg-gray-100 dark:bg-gray-800
                                hover:bg-gray-200 dark:hover:bg-gray-700
                                text-gray-900 dark:text-gray-100"
          >
            Totenverzeichnis
          </button>
        </div>
      </div>
    </div>
  );
};

// Prayer Text Display Component
const PrayerTextDisplay = ({
  hour,
  texts,
  season,
  selectedDate,
  liturgicalInfo,
  title = "",
  onBack,
  viewMode,
  onUpdateTexts,
  prefSrc,
  setPrefSrc,
  prefSollemnity,
  setPrefSollemnity,
  useCommemoration,
  setUseCommemoration,
  localPrefLanguage,
  localPrefLatin,
  setLocalPrefLatin,
  setLocalPrefLanguage,
  onSelectHour,
  onPrevDay,
  onNextDay,
  isNarrowForHymns
}) => {
  const [localPrefComm, setLocalPrefComm] = useState(texts?.prefComm || 0);
  const [localPrefContinuous, setLocalPrefContinuous] = useState(false);
  const [localPrefPsalmsWt, setLocalPrefPsalmsWt] = useState(false);
  const [localPrefErgPs, setLocalPrefErgPs] = useState(false);
  const [localPrefKomplet, setLocalPrefKomplet] = useState(texts?.komplet?.prefKomplet || "wt");
  const [localPrefInv, setLocalPrefInv] = useState(texts?.prefInv || 95);

  if (!hour || !texts || !texts[hour]) {
    return <div className="p-4">Keine Daten hier verfügbar</div>;
  }

  const { rank_wt = 0, rank_date = 0, isCommemoration } = texts;

  // Get value from sources in priority order: prefSrc -> com1/com2 -> wt
  const getValue = (field) => {
    if (hour === 'komplet') {
      return getKompletValue({
        localPrefKomplet,
        texts,
        field,
        localPrefLanguage
      });
    } else {
      return extGetValue({
        hour,
        prefSrc,
        prefSollemnity,
        localPrefComm,
        localPrefPsalmsWt,
        localPrefErgPs,
        localPrefContinuous,
        localPrefLanguage,
        texts,
        field,
      })
    };
  }
  // Component for section headers with source indicators
  const SectionHeader = ({
    title,
    field: provField,
    askLatin,
    askContinuous,
    askTSN,
    onSelectHour,
  }) =>
    extSectionHeader({
      title,
      provField,
      askLatin,
      askContinuous,
      askTSN,
      onSelectHour,
      texts,
      hour,
      prefSrc,
      prefSollemnity,
      rank_wt,
      rank_date,
      localPrefComm,
      localPrefPsalmsWt,
      localPrefErgPs,
      localPrefContinuous,
      localPrefInv,
      localPrefLatin,
      setLocalPrefLatin,
      setLocalPrefLanguage,
      setLocalPrefInv,
      setLocalPrefPsalmsWt,
      setLocalPrefErgPs,
      setLocalPrefContinuous,
      setLocalPrefComm,
    });

  // Rubric component for styled headers and labels
  const Rubric = ({ children, isHeader = false }) => (
    <span className={`text-rubric ${isHeader ? "text-lg font-bold mb-4" : ""}`}>
      {children}
    </span>
  );

  const formatPrayerText = (provText, marker = "") => {
    return extFormatPrayerText(provText, marker, hour, texts,
      prefSrc, localPrefLanguage, isNarrowForHymns);
  };

  const formatPsalm = (psalm, inv = false) => {
    return extFormatPsalm(psalm, inv, localPrefLanguage);
  };

  const PrayerResponse = ({ resp1_3, resp1_2 }) => {
    const formatSecondResponse = (firstResp, secondResp) => {
      if (!firstResp || !secondResp) return secondResp;

      firstResp = firstResp.trim()
        .replace(/_lat/g, '')
        .replace(/_neu/g, '');

      secondResp = secondResp.trim()
        .replace(/[,;]$/, '.');

      return (/[.!?]$/.test(firstResp))
        ? secondResp.charAt(0).toUpperCase() + secondResp.slice(1)
        : secondResp;
    };

    return (
      <div className="flex gap-0">
        <Rubric>V&nbsp;&nbsp;</Rubric>
        <div>
          {formatPrayerText(resp1_3)}
          <Rubric> *&nbsp;</Rubric>
          {formatPrayerText(formatSecondResponse(resp1_3, resp1_2))}
        </div>
      </div>
    );
  };

  const ordinariumTexts = ordinarium(texts, hour, localPrefLatin, prefSollemnity)
  const { advResp, advVers } =
    (texts.combinedSWD === 'a-1-0'
      && hour === 'lesehore'
      && !getValue('patr_resp1'))
      ? ordinarium('advent') : { advResp: '', advVers: '' };

  return (
    <div className="leading-[1.33em] pb-8">
      <TitleBar
        title={''}
        onPrevDay={onPrevDay}
        onNextDay={onNextDay}
        liturgicalInfo={liturgicalInfo}
      />
      <NavigationButtons
        hour={hour}
        topButton={true}
        onBack={onBack}
        onSelectHour={onSelectHour}
        texts={texts}
      />
      <div className="bg-white dark:bg-gray-800 rounded-sm shadow pl-2 pr-6 pb-1">
        {hour === "komplet" ? (
          <KompletSelector
            texts={texts}
            localPrefKomplet={localPrefKomplet}
            setLocalPrefKomplet={setLocalPrefKomplet}
            className="mb-4"
          />
        ) : (
          <SourceSelector
            prayerTexts={texts}
            prefSrc={prefSrc}
            prefSollemnity={prefSollemnity}
            useCommemoration={useCommemoration}
            setPrefSrc={setPrefSrc}
            setPrefSollemnity={setPrefSollemnity}
            setUseCommemoration={setUseCommemoration}
            viewMode={viewMode}
            season={season}
            hour={hour}
            className="mb-4"
          />
        )}
        {ordinariumTexts.opening[0] && (
          <div className="mt-0 mb-0">
            <SectionHeader
              title="ERÖFFNUNG"
              field="resp0_0"
              askLatin={true} />
            <div>
              {formatPrayerText(ordinariumTexts.opening[0], "V°°")}
            </div>
            <div>
              {formatPrayerText(ordinariumTexts.opening[1], "R°°")}
            </div>
          </div>
        )}

        {ordinariumTexts.opening[2] && (
          <div className="mt-0 mb-0">
            <div className="mt-1">
              {formatPrayerText(ordinariumTexts.opening[2])}
            </div>
            <div>
              {formatPrayerText(ordinariumTexts.opening[3])}
            </div>
          </div>
        )}
        {getValue("hymn_1") && (
          <div className="mb-0">
            <SectionHeader
              title="HYMNUS"
              field="hymn_1"
              askTSN={true}
              onSelectHour={onSelectHour}
            />

            <HymnSelector
              texts={texts}
              hour={hour}
              season={season}
              prefSrc={prefSrc}
              prefSollemnity={prefSollemnity}
              localPrefKomplet={localPrefKomplet}
              localPrefLanguage={localPrefLanguage}
              formatPrayerText={formatPrayerText}
            />
          </div>
        )}

        {(getValue("ps_1") || hour === "invitatorium") && (
          <div className="mb-0">
            <SectionHeader title="PSALMODIE" field="ps_1" />
            {getValue("ant_0") && (
              <div className="mb-4">
                {formatPrayerText(getValue("ant_0"), "Ant.°°")}
              </div>
            )}
            {hour === "invitatorium" &&
              texts?.invitatorium?.psalms?.includes(localPrefInv) && (
                <div className="mb-4">
                  {formatPsalm(localPrefInv, true)}
                </div>
              )}
            {hour !== "invitatorium" &&
              [1, 2, 3].map((num) => {
                const psalm = getValue(`ps_${num}`);
                const ant = getValue(`ant_${num}`);
                if (!psalm && !ant) return null;

                return (
                  <div key={num}>
                    {ant && (
                      <div className="mb-3">
                        {formatPrayerText(ant, `${num}. Ant.°°`)}
                      </div>
                    )}
                    {psalm &&
                      formatPsalm(psalm)}
                    {ant && (
                      <div className="mb-6">
                        {formatPrayerText(ant, `Ant.°°`)}
                      </div>
                    )}
                  </div>
                );
              })}
            {getValue("ant_0") && (
              <div>{formatPrayerText(getValue("ant_0"), "Ant.°°")}</div>
            )}
          </div>
        )}
        {getValue("resp0_0") && (
          <div className="mb-0">
            <SectionHeader title="VERSIKEL" field="resp0_0" />
            {getValue("resp0_0") && (
              <div className="mb-0 flex gap-0">
                <div>{formatPrayerText(getValue("resp0_0"), "V°°")}</div>
              </div>
            )}
            {getValue("resp0_1") && (
              <div className="flex gap-0">
                <div>{formatPrayerText(getValue("resp0_1"), "R°°")}</div>
              </div>
            )}
          </div>
        )}

        {getValue("les_buch") && getValue("les_stelle") && (
          <div className="mb-0">
            <SectionHeader
              title={hour === "lesehore" ? "ERSTE LESUNG" : "KURZLESUNG"}
              field="les_text"
              askContinuous={true}
              askTSN={true}
              onSelectHour={onSelectHour}
            />
            <div>
              {hour !== "lesehore" && (
                <div className="text-[0.9em] text-gray-400">
                  {formatPrayerText(getValue("les_buch"))}{" "}
                  {formatBibleRef(getValue("les_stelle"))}
                </div>
              )}
              {hour === "lesehore" && (
                <>
                  <div>
                    <span className="mr-3">
                      {formatPrayerText(getValue("les_buch"))}
                    </span>
                    <span className="inline-block whitespace-nowrap text-[0.9em] text-gray-400">
                      {formatBibleRef(getValue("les_stelle"))}
                    </span>
                  </div>
                </>
              )}
              {formatPrayerText(getValue("les_text"))}
            </div>
          </div>
        )}

        {getValue("resp1_1") && (
          <div className="mb-0 whitespace-pre-wrap">
            <SectionHeader title="RESPONSORIUM" field="resp1_1" />
            {getValue("resp1_0") && getValue("resp1_1") && (
              <div className="mb-0 flex gap-0">
                <div>{formatPrayerText(getValue("resp1_0"), "V°°")}</div>
              </div>
            )}
            {getValue("resp1_0") && getValue("resp1_1") && (
              <div className="mb-0 flex gap-0">
                <div>{formatPrayerText(getValue("resp1_1"), "R°°")}</div>
              </div>
            )}
            {getValue("resp1_1") && getValue("resp1_2") && (
              <div className="mb-0 flex gap-0">
                <Rubric>R&nbsp;&nbsp;</Rubric>
                <div>
                  {formatPrayerText(getValue("resp1_1"))}
                  <Rubric> *&nbsp;</Rubric>
                  {formatPrayerText(getValue("resp1_2"))}
                  {hour !== "lesehore" && <Rubric> –&#8288;&#160;R</Rubric>}
                </div>
              </div>
            )}
            {getValue("resp1_3") && getValue("resp1_2") && (
              <>
                <PrayerResponse
                  resp1_3={getValue("resp1_3")}
                  resp1_2={getValue("resp1_2")}
                />
                {hour !== "lesehore" && (
                  <div>
                    {getValue("resp1_3").endsWith("_lat")
                      ? 'Glória Patri et Fílio et\u00a0Spirítui\u00a0Sancto.'
                      : 'Ehre sei dem Vater und\u00a0dem\u00a0Sohn und\u00a0dem\u00a0Heiligen\u00a0Geist.'}
                    <Rubric> –&#8288;&#160;R</Rubric>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {getValue("patr_text") && (
          <div className="mb-0">
            <SectionHeader
              title="ZWEITE LESUNG"
              field="patr_text"
              askContinuous={true}
            />
            <div>
              <div className="text-[0.9em] italic">
                {" "}
                {formatPrayerText(getValue("patr_autor"))}
              </div>
              {formatPrayerText(getValue("patr_werk"))}
              {formatPrayerText(getValue("patr_text"))}
            </div>
          </div>
        )}

        {getValue("patr_resp1") && (
          <div className="mb-0">
            <SectionHeader title="RESPONSORIUM" field="resp1_1" />
            {getValue("patr_resp1") && getValue("patr_resp2") && (
              <div className="mb-0 flex gap-0">
                <Rubric>R&nbsp;&nbsp;</Rubric>
                <div>
                  {formatPrayerText(getValue("patr_resp1"))}
                  <Rubric> *&nbsp;</Rubric>
                  {formatPrayerText(getValue("patr_resp2"))}
                  {hour !== "lesehore" && <Rubric> –&#8288;&#160;R</Rubric>}
                </div>
              </div>
            )}
            {getValue("patr_resp3") && getValue("patr_resp2") && (
              <PrayerResponse
                resp1_3={getValue("patr_resp3")}
                resp1_2={getValue("patr_resp2")}
              />
            )}
          </div>
        )}

        {/* erweitertes Responsorium am 1. Adventssonntag Jahr II */}
        {advResp && (
          <div className="mb-0">
            <SectionHeader title="RESPONSORIUM" field="resp1_1" />
            <div className="mb-0 flex gap-0">
              <Rubric>R&nbsp;&nbsp;</Rubric>
              <div>
                {advResp.map((respPart, index) => (
                  <span key={`resp-main-${index}`}>
                    {formatPrayerText(respPart)}
                    {index < advResp.length - 1 && <Rubric> *&nbsp;</Rubric>}
                  </span>
                ))}
              </div>
            </div>
            {/* Drei PrayerResponse-Abschnitte */}
            {advVers.slice(0, 3).map((versText, index) => (
              <PrayerResponse
                key={`prayer-response-${index}`}
                resp1_3={versText}
                resp1_2={advResp[index + 1]}
              />
            ))}
            {/* Letzter Vers ohne Response */}
            <div className="flex gap-0">
              <Rubric>V&nbsp;&nbsp;</Rubric>
              <div>{formatPrayerText(advVers[3])}</div>
            </div>
            {/* Wiederholung der vier resp-Elemente */}
            <div className="mb-0 flex gap-0">
              <Rubric>R&nbsp;&nbsp;</Rubric>
              <div>
                {advResp.map((respPart, index) => (
                  <span key={`resp-main-${index}`}>
                    {formatPrayerText(respPart)}
                    {index < advResp.length - 1 && <Rubric> *&nbsp;</Rubric>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {ordinariumTexts.cant && (
          <div className="mb-0">
            <SectionHeader
              title={ordinariumTexts.titel}
              field="ant_ev"
              askLatin={true}
            />
            {getValue("ant_ev") && (
              <div className="mb-4">
                {formatPrayerText(getValue("ant_ev"), "Ant.°°")}
              </div>
            )}
            <div className="mb-4">
              {formatPrayerText(ordinariumTexts.cant)}
            </div>
            {getValue("ant_ev") && (
              <div className="mb-0">
                {formatPrayerText(getValue("ant_ev"), "Ant.°°")}
              </div>
            )}
          </div>
        )}

        {getValue("bitten") && (
          <div className="mb-0">
            <SectionHeader
              title={hour === "laudes" ? "BITTEN" : "FÜRBITTEN"}
              field="bitten"
            />
            {getValue("bitten_e") && (
              <div className="mb-2">
                {formatPrayerText(getValue("bitten_e"))}
              </div>
            )}
            {getValue("bitten_r") && (
              <div className="mb-2 flex gap-0">
                <div>{formatPrayerText(getValue("bitten_r"), "R°°")}</div>
              </div>
            )}
            {getValue("bitten") && (
              <div className="mb-[-0.75em]">
                {formatPrayerText(getValue("bitten"))}
              </div>
            )}
          </div>
        )}

        {ordinariumTexts.vu && (
          <div className="mb-0">
            <SectionHeader
              title={hour === "lesehore" ? "TE DEUM" : "VATERUNSER"}
              field=""
              askLatin={true}
            />
            <div className="mb-4 whitespace-pre-wrap">
              {formatPrayerText(ordinariumTexts.vu)}
            </div>
          </div>
        )}

        <div className="mt-3 long-rubric">
          {ordinariumTexts.closing[2]}
        </div>

        {hour !== "invitatorium" && hour !== "komplet" && (
          <div className="mb-0">
            <SectionHeader title="ORATION" field="oration" />
            {getValue("oration") && (
              <div className="whitespace-pre-wrap">
                {formatPrayerText(
                  getValue("oration"),
                  useCommemoration ? "commemoration" : ""
                )}
              </div>
            )}
          </div>
        )}

        {getValue("oration_komplet") && (
          <div className="mb-0">
            <SectionHeader title="ORATION" field="oration_komplet" />
            <div>{formatPrayerText(getValue("oration_komplet"))}</div>
          </div>
        )}

        {ordinariumTexts.closing[0] && (
          <div className="mb-0 mt-0">
            <SectionHeader
              title="ABSCHLUSS"
              field="resp0_0"
              askLatin={true} />
            <div className="flex gap-0">
              {formatPrayerText(ordinariumTexts.closing[0], "V°°")}
            </div>
            <div className="flex gap-0">
              {formatPrayerText(ordinariumTexts.closing[1], "R°°")}
            </div>
          </div>
        )}

        {(hour === 'komplet') && (
          <div className="mb-0">
            <SectionHeader
              title={"MARIANISCHE ANTIPHON"}
              field="marant"
              askLatin={true}
            />
            <MarAntSelector
              season={season}
              selectedDate={selectedDate}
              combinedSWD={texts?.combinedSWD}
              localPrefLatin={localPrefLatin}
              formatPrayerText={formatPrayerText}
            />

          </div>
        )}
      </div>

      {!(useCommemoration && ["laudes", "vesper"].includes(hour)) && (
        <div className="mt-2">
          <NavigationButtons
            hour={hour}
            onBack={onBack}
            onSelectHour={onSelectHour}
            texts={texts}
          />
        </div>
      )}

      {isCommemoration &&
        !prefSollemnity &&
        !(hour === "vesper" && texts.hasErsteVesper) &&
        ["lesehore", "laudes", "vesper"].includes(hour) &&
        (texts?.laudes?.["eig"]?.oration || texts?.laudes?.["n1"]?.oration) && (
          <>
            <div className="bg-white dark:bg-gray-800 rounded-sm shadow pl-2 pr-6 pb-1">
              <SourceSelector
                prayerTexts={texts}
                prefSrc={prefSrc}
                prefSollemnity={prefSollemnity}
                useCommemoration={useCommemoration}
                setPrefSrc={setPrefSrc}
                setPrefSollemnity={setPrefSollemnity}
                setUseCommemoration={setUseCommemoration}
                viewMode={viewMode}
                season={season}
                hour={hour}
                className="mb-4"
                reduced={true}
              />

              {getValue("c_patr_text") && useCommemoration && (
                <div className="mb-0">
                  <SectionHeader title="ZWEITE LESUNG" field="patr_text" />
                  <div>
                    <div className="text-[0.9em] italic">
                      {formatPrayerText(getValue("c_patr_autor"))}
                    </div>
                    {formatPrayerText(getValue("c_patr_werk"))}
                    {formatPrayerText(getValue("c_patr_text"))}
                  </div>
                </div>
              )}

              {getValue("c_patr_resp1") && useCommemoration && (
                <div className="mb-0">
                  <SectionHeader title="RESPONSORIUM" field="resp1_1" />
                  {getValue("c_patr_resp1") && getValue("c_patr_resp2") && (
                    <div className="mb-0 flex gap-0">
                      <Rubric>R&nbsp;&nbsp;</Rubric>
                      <div>
                        {formatPrayerText(getValue("c_patr_resp1"))}
                        <Rubric> *&nbsp;</Rubric>
                        {formatPrayerText(getValue("c_patr_resp2"))}
                        {hour !== "lesehore" && (
                          <Rubric> –&#8204;&nbsp;R</Rubric>
                        )}
                      </div>
                    </div>
                  )}
                  {getValue("c_patr_resp3") && getValue("c_patr_resp2") && (
                    <PrayerResponse
                      resp1_3={getValue("c_patr_resp3")}
                      resp1_2={getValue("c_patr_resp2")}
                    />
                  )}
                </div>
              )}

              {getValue("c_ant_ev") && useCommemoration && (
                <div className="mb-0">
                  <SectionHeader
                    title={`${ordinariumTexts.titel}-ANTIPHON`}
                    field="ant_ev"
                  />
                  <div className="mb-4">
                    {formatPrayerText(getValue("c_ant_ev"))}
                  </div>
                </div>
              )}

              {getValue("c_oration") && useCommemoration && (
                <div className="mb-0">
                  <SectionHeader title="ORATION" field="oration" />
                  <div className="whitespace-pre-wrap">
                    {formatPrayerText(getValue("c_oration"))}
                  </div>
                </div>
              )}
            </div>
            {useCommemoration && (
              <div className="mt-2">
                <NavigationButtons
                  hour={hour}
                  onBack={onBack}
                  onSelectHour={onSelectHour}
                  texts={texts}
                />
              </div>
            )}
          </>
        )}
    </div>
  );
};

export { PrayerMenu, PrayerTextDisplay, PrayerHours, TextSources };

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

export default function LiturgicalCalendar() {
  const wakeLock = useWakeLock();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [theme, setTheme] = useState(() => getLocalStorage("theme") || "dark");
  const [prefSrc, setPrefSrc] = useState("eig");
  const [prefSollemnity, setPrefSollemnity] = useState("");
  const [useCommemoration, setUseCommemoration] = useState(false);
  const [selectedHour, setSelectedHour] = useState(null);
  const [prayerTexts, setPrayerTexts] = useState(null);
  const [expandedDeceased, setExpandedDeceased] = useState({});
  const [deceasedMode, setDeceasedMode] = useState("recent");
  const [localPrefLanguage, setLocalPrefLanguage] = useState(() => getLocalStorage("prefLanguage") || "");
  const [localPrefLatin, setLocalPrefLatin] = useState(() => getLocalStorage("prefLanguage") === "_lat");
  const [baseFontSize, setBaseFontSize] = useTouchZoom(
    14,
    8,
    24,
    0.7,
    showDatePicker
  );
  const [isReady, setIsReady] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("fontSize");
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  const entriesRef = useRef({});
  const containerRef = useRef(null);
  const [visibleRange, setVisibleRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const [liturgicalInfo, setLiturgicalInfo] = useState(null);
  const [currentSeason, setCurrentSeason] = useState(null);

  const startViewMode = getLocalStorage("startViewMode") || "directory";
  const lastVisit = () => getLocalStorage("lastVisit") || null;
  const todayVisit = () => new Date().toISOString().split("T")[0]; // Format YYYY-MM-DD
  const [viewMode, setViewMode] = useState(() =>
    startViewMode === "directory" ||
      (startViewMode === "auto" && todayVisit() !== lastVisit())
      ? "directory"
      : "prayer"
  ); // 'directory', 'deceased', 'prayer', 'prayerText', 'settings'

  const formatDate = useCallback(
    (date, forDisplay = false) => {
      if (forDisplay && isNarrowScreen) {
        // Short format for narrow screens: DD.MM.YY
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear().toString().slice(-2);
        return `${day}.${month}.${year}`;
      }
      // Original format for wider screens: DD. Month YYYY
      return `${date.getDate()}. ${months[date.getMonth()]
        } ${date.getFullYear()}`;
    },
    [isNarrowScreen]
  ); // months ist konstant, daher keine Dependency nötig

  const [dateChangeSource, setDateChangeSource] = useState("navigation"); // 'navigation' oder 'scroll'
  const [isNarrowForHymns, setIsNarrowForHymns] = useState(false);

  useEffect(() => {
    const checkScreenWidthInEm = () => {
      setIsNarrowForHymns((window.innerWidth / baseFontSize) < 35); // Grenzwert von 30em für Hymnen
    };
    checkScreenWidthInEm();
    window.addEventListener('resize', checkScreenWidthInEm);
    return () => {
      window.removeEventListener('resize', checkScreenWidthInEm);
    };
  }, [baseFontSize]);

  const handleScroll = useCallback(
    (event) => {
      if (!containerRef.current || isScrolling) return;
      const container = containerRef.current;
      const entries = Object.entries(entriesRef.current);

      // Get nav height for offset calculation
      const navElement = container.parentElement.querySelector(
        '[role="navigation"]'
      );
      const navHeight = navElement ? navElement.offsetHeight : 0;

      // Adjust the target position to account for sticky nav
      const containerRect = container.getBoundingClientRect();
      const middleY = containerRect.top + navHeight + containerRect.height / 2;

      let closestEntry = null;
      let minDistance = Infinity;

      entries.forEach(([dateStr, element]) => {
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const elementMiddleY = rect.top + rect.height / 2;
        const distance = Math.abs(elementMiddleY - middleY);

        if (distance < minDistance) {
          minDistance = distance;
          closestEntry = dateStr;
        }
      });

      if (closestEntry) {
        const parts = closestEntry.split(" ");
        const day = parseInt(parts[0]);
        const month = months.indexOf(parts[1]);
        const year = parseInt(parts[2]);

        const newDate = new Date(year, month, day);

        if (closestEntry && formatDate(selectedDate) !== formatDate(newDate)) {
          setDateChangeSource("scroll");
          setSelectedDate(newDate);
        }
      }
    },
    [selectedDate, isScrolling, formatDate]
  );

  // Touch-Navigation Hook
  //  - bis auf Weiteres deaktiviert, weil die Scroll-Funktionen beeinträchtigt werden
  // useSwipeNavigation(handleSwipeLeft, handleSwipeRight, showDatePicker);

  // Aktiviere Wake Lock wenn die App im prayer oder prayerText Modus ist
  useEffect(() => {
    if (viewMode !== "prayerText") {
      setLocalStorage('ommitOpening', 'false')
    }
    if (viewMode === "prayer" || viewMode === "prayerText") {
      wakeLock.requestWakeLock();
    } else {
      wakeLock.releaseWakeLock();
    }
  }, [viewMode]);

  useEffect(() => {
    if (lastVisit() !== todayVisit()) {
      if (viewMode === "directory") {
        setLocalStorage("lastVisit", "directory");
      } else if (lastVisit() === "directory") {
        setLocalStorage("lastVisit", todayVisit());
      }
    }
  }, [viewMode, todayVisit]);

  useEffect(() => {
    // Formatiere das Datum zu YYYY-MM-DD
    const formatDate = (date) => {
      if (!date) return false;
      return new Date(date).toISOString().split("T")[0];
    };

    const savedDate = getLocalStorage("selectedDate");
    const currentDateFormatted = formatDate(selectedDate);

    if (savedDate !== currentDateFormatted) {
      console.log("Restoring selected date:", savedDate);
      setPrefSrc("eig");
      setPrefSollemnity("");
      setUseCommemoration(false);
    }

    let newSelectedDate = false;
    if (viewMode === "prayer" || viewMode === "prayerText") {
      newSelectedDate = currentDateFormatted;
    }

    setLocalStorage("selectedDate", newSelectedDate);
  }, [selectedDate, viewMode]);

  useEffect(() => {
    const info = getLiturgicalInfo(selectedDate);
    setLiturgicalInfo(info);
    if (info?.season) {
      setCurrentSeason(info.season);
    }

    if (info) {
      const processedData = processBrevierData(selectedDate);
      setPrayerTexts(processedData);
      console.log("neue Texte:", processedData);
    }
  }, [selectedDate, prefSrc]);

  // Effect für die visibleEntries-Berechnung
  useEffect(() => {
    entriesRef.current = {};
    if (selectedDate) {
      setIsReady(false);
      setTimeout(() => {
        setIsReady(true);
      }, 100);
    }
  }, [selectedDate]);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const currentContainer = container.querySelector(
      '[data-current-container="true"]'
    );
    const debouncedScroll = (event) => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => handleScroll(event), 150);
    };

    container.addEventListener("scroll", debouncedScroll);
    return () => {
      if (container) {
        container.removeEventListener("scroll", debouncedScroll);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.body.classList.toggle("dark", theme === "dark");
    setLocalStorage("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.fontSize = baseFontSize;
    setLocalStorage("baseFontSize", baseFontSize);
  }, [baseFontSize]);

  useEffect(() => {
    // Wenn durch Scrollen ausgelöst oder nicht bereit, nichts tun
    if (!isReady || !containerRef.current || dateChangeSource === "scroll") {
      return;
    }

    // Nur bei navigation-induzierten Änderungen scrollen
    if (
      dateChangeSource === "navigation" ||
      viewMode === "directory" ||
      viewMode === "deceased"
    ) {
      const container = containerRef.current;
      const currentContainer = container.querySelector(
        '[data-current-container="true"]'
      );

      if (!currentContainer) return;

      // Scroll-Position berechnen
      const navElement = container.parentElement.querySelector(
        '[role="navigation"]'
      );
      const navHeight = navElement ? navElement.offsetHeight : 0;
      const fontSize = parseFloat(getComputedStyle(container).fontSize);
      const fiveEmInPixels = fontSize * 5;
      const scrollPosition =
        currentContainer.offsetTop - navHeight - fiveEmInPixels;

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
          setDateChangeSource(null);
        }, 100);
        container.removeEventListener("scrollend", scrollEndListener);
      };

      container.addEventListener("scrollend", scrollEndListener);

      // Cleanup
      return () => {
        if (containerRef.current) {
          containerRef.current.removeEventListener(
            "scrollend",
            scrollEndListener
          );
        }
      };
    }
  }, [selectedDate, dateChangeSource, isReady, viewMode]);

  // Aktualisiere den sichtbaren Bereich wenn sich das ausgewählte Datum ändert
  useEffect(() => {
    const { startDate, endDate } = getDateRange(
      selectedDate,
      DAYS_BUFFER,
      DAYS_BUFFER
    );
    setVisibleRange({ startDate, endDate });
  }, [selectedDate]);

  useEffect(() => {
    setLocalPrefLatin(localPrefLanguage === "_lat");
  }, [localPrefLanguage]);

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
  }, []); // Leeres Dependency Array, da liturgicalData konstant ist

  const handleDateSelect = (date) => {
    setDateChangeSource("navigation");
    setSelectedDate(new Date(date));
    setShowDatePicker(false);
  };

  const handlePrevWeek = () => {
    setDateChangeSource("navigation");
    setSelectedDate((date) => {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() - 7);
      return newDate;
    });
  };

  const handleNextWeek = () => {
    setDateChangeSource("navigation");
    setSelectedDate((date) => {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() + 7);
      return newDate;
    });
  };

  const handleToday = () => {
    setDateChangeSource("navigation");
    setSelectedDate(new Date());
  };

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
        entry.date.getDate() === selectedDate.getDate() &&
        entry.date.getMonth() === selectedDate.getMonth() &&
        entry.date.getFullYear() === selectedDate.getFullYear()
    );

    if (selectedIndex === -1) return entries;

    // Teile die Einträge in zwei Gruppen
    return {
      before: entries.slice(Math.max(0, selectedIndex - 7), selectedIndex),
      current: entries.slice(selectedIndex, selectedIndex + 8),
    };
  }, [allEntries, visibleRange, selectedDate]);

  const parseDateString = (dateStr) => {
    const match = dateStr.match(/^(\d{1,2})[.-](\d{1,2})[.-](\d{2}|\d{4})$/);
    if (!match) return null;

    let [, day, month, year] = match;
    day = parseInt(day, 10);
    month = parseInt(month, 10) - 1;
    year = parseInt(year, 10);

    if (year < 100) {
      year += year < 50 ? 2000 : 1900;
    }

    const date = new Date(year, month, day);

    if (
      date.getFullYear() !== year ||
      date.getMonth() !== month ||
      date.getDate() !== day
    ) {
      return null;
    }

    return date;
  };

  const DatePicker = () => {
    const [viewDate, setViewDate] = useState(new Date(selectedDate));
    const firstDayOfMonth = new Date(
      viewDate.getFullYear(),
      viewDate.getMonth(),
      1
    );
    const startingDay = firstDayOfMonth.getDay() || 7;
    const daysInMonth = new Date(
      viewDate.getFullYear(),
      viewDate.getMonth() + 1,
      0
    ).getDate();

    const days = Array.from({ length: 42 }, (_, i) => {
      const day = i - (startingDay - 2);
      return day > 0 && day <= daysInMonth ? day : null;
    });

    return (
      <div
        className="absolute left-0 right-0 mt-1 p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border dark:border-gray-700 rounded shadow-lg z-[60]"
        style={{
          ...datePickerStyle,
          position: "fixed", // Änderung zu fixed positioning
          top: "60px", // Fester Abstand von oben
          left: "50%", // Zentrieren
          transform: "translateX(-50%)", // Zentrieren
          width: "90%", // Breite auf Mobilgeräten
          maxWidth: "300px", // Maximale Breite
        }}
      >
        <div className="flex justify-between mb-2">
          <button
            onClick={() =>
              setViewDate((date) => {
                const newDate = new Date(date);
                newDate.setMonth(date.getMonth() - 1);
                return newDate;
              })
            }
            className="px-2"
          >
            ←
          </button>
          <div>
            {months[viewDate.getMonth()]} {viewDate.getFullYear()}
          </div>
          <button
            onClick={() =>
              setViewDate((date) => {
                const newDate = new Date(date);
                newDate.setMonth(date.getMonth() + 1);
                return newDate;
              })
            }
            className="px-2"
          >
            →
          </button>
        </div>

        <div className="grid grid-cols-7 gap-0.5 text-center">
          {["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].map((day) => (
            <div key={day} className="font-bold py-1">
              {day}
            </div>
          ))}
          {days.map((day, index) => {
            const isSelected =
              day === selectedDate.getDate() &&
              viewDate.getMonth() === selectedDate.getMonth() &&
              viewDate.getFullYear() === selectedDate.getFullYear();

            return (
              <button
                key={index}
                onClick={() => {
                  if (day) {
                    const newDate = new Date(
                      viewDate.getFullYear(),
                      viewDate.getMonth(),
                      day
                    );
                    handleDateSelect(newDate);
                    setShowDatePicker(false);
                  }
                }}
                className={`py-1 ${day ? "hover:bg-gray-100 dark:hover:bg-gray-700" : ""
                  }
                                    ${isSelected
                    ? "bg-blue-100 dark:bg-blue-900"
                    : ""
                  }`}
                disabled={!day}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const ThemeMenu = () => {
    const [tempFontSize, setTempFontSize] = useState(baseFontSize);
    const menuRef = useRef(null);
    const longPressTimeoutRef = useRef(null);
    const [isLongPressing, setIsLongPressing] = useState(false);
    const sections = ["fontSize", "theme", "language", "deceased", "view"];
    const storedPrefLanguage = getLocalStorage("prefLanguage") || "";

    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
      if (!isMenuOpen) {
        setActiveSection(sections[0]);
      }
    };

    const handleSectionChange = (sectionIndex) => {
      setActiveSection(sections[sectionIndex]);
    };

    const handleViewChange = (isRight) => {
      setViewMode((prev) => (prev === "directory" ? "deceased" : "directory"));
    };

    // Funktion für langes Drücken
    const handleLanguageLongPress = (value) => {
      setIsLongPressing(true);
      longPressTimeoutRef.current = setTimeout(() => {
        // Speichere die Grundeinstellung im LocalStorage
        setLocalStorage("prefLanguage", value);
        // Aktualisiere auch die lokale Einstellung
        setLocalPrefLanguage(value);
        setIsLongPressing(false);
      }, 800); // 800ms für langes Drücken
    };

    const clearLongPressTimeout = () => {
      if (longPressTimeoutRef.current) {
        clearTimeout(longPressTimeoutRef.current);
        longPressTimeoutRef.current = null;
      }
      setIsLongPressing(false);
    };

    // Modified to prevent menu closing
    const handleOptionChange = (e, isRight) => {
      e.preventDefault();
      e.stopPropagation();

      switch (activeSection) {
        case "fontSize":
          handleFontSizeChange(isRight);
          break;
        case "theme":
          handleThemeChange(isRight);
          break;
        case "language":
          handleLanguageChange(isRight);
          break;
        case "deceased":
          handleDeceasedModeChange(isRight);
          break;
        case "view":
          handleViewChange(isRight);
          break;
        default:
          break;
      }
    };

    const handleFontSizeChange = (increase) => {
      const change = increase ? 1 : -1;
      const newSize = tempFontSize + change;
      if (newSize >= 8 && newSize <= 24) {
        setTempFontSize(newSize);
        setBaseFontSize(newSize);
      }
    };

    const handleThemeChange = (isRight) => {
      setTheme((prev) => {
        const newTheme = prev === "light" ? "dark" : "light";
        return newTheme;
      });
    };

    const handleLanguageChange = (isRight) => {
      // Zykluswechsel zwischen "", "_lat" und "_neu"
      setLocalPrefLanguage(prev => {
        if (isRight) {
          if (prev === "") return "_lat";
          if (prev === "_lat") return "_neu";
          return "";
        } else {
          if (prev === "") return "_neu";
          if (prev === "_neu") return "_lat";
          return "";
        }
      });
    };

    const handleDeceasedModeChange = (isRight) => {
      setDeceasedMode((prev) => (prev === "recent" ? "all" : "recent"));
      setExpandedDeceased({});
    };

    // Modified click outside handler
    useEffect(() => {
      const handleClickOutside = (event) => {
        // Check if click target is a button inside the menu
        const isMenuButton =
          event.target.closest("button") &&
          menuRef.current?.contains(event.target);

        if (
          menuRef.current &&
          !menuRef.current.contains(event.target) &&
          !isMenuButton
        ) {
          setIsMenuOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
      const handleKeyDown = (event) => {
        if (!isMenuOpen) {
          if (event.key === "Alt") {
            event.preventDefault();
            toggleMenu();
          }
          return;
        }

        if (event.key === "Alt" || event.key === "Escape") {
          event.preventDefault();
          toggleMenu();
          return;
        }

        if (event.key === "ArrowUp" || event.key === "ArrowDown") {
          event.preventDefault();
          const currentIndex = sections.indexOf(activeSection);
          const newIndex =
            event.key === "ArrowDown"
              ? (currentIndex + 1) % sections.length
              : (currentIndex - 1 + sections.length) % sections.length;
          handleSectionChange(newIndex);
        } else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          handleOptionChange(new Event("keydown"), event.key === "ArrowRight");
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [
      activeSection,
      handleOptionChange,
      handleSectionChange,
      sections,
      toggleMenu,
    ]);

    // Cleanup longpress timeout bei Unmount
    useEffect(() => {
      return () => {
        if (longPressTimeoutRef.current) {
          clearTimeout(longPressTimeoutRef.current);
        }
      };
    }, []);

    // Hilfsfunktion zur Anzeige des Sprachnamens
    const getLanguageName = (code) => {
      switch (code) {
        case "": return "Stundenbuch";
        case "_lat": return "Latein";
        case "_neu": return "neue EÜ";
        default: return "Unbekannt";
      }
    };

    // Hilfsfunktion für die Sprachauswahl-Buttons
    const LanguageButton = (value, label, className = "flex-1") => {
      return (
        <button
          onMouseDown={() => handleLanguageLongPress(value)}
          onMouseUp={clearLongPressTimeout}
          onMouseLeave={clearLongPressTimeout}
          onTouchStart={() => handleLanguageLongPress(value)}
          onTouchEnd={clearLongPressTimeout}
          onTouchCancel={clearLongPressTimeout}
          onClick={(e) => {
            if (!isLongPressing) {
              e.preventDefault();
              e.stopPropagation();
              setLocalPrefLanguage(value);
            }
          }}
          className={`${className} px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded select-none touch-none ${localPrefLanguage === value ? "bg-orange-100 dark:bg-yellow-400/60" : ""
            }`}
        >
          {label}
        </button>
      );
    };
    const renderDescriptionItem = (label, description, spacing = 1) => {
      const spacingString = '\u00A0'.repeat(spacing);
      return (
        <p>
          <span className="text-gray-700 dark:text-gray-300">{label}</span>
          {spacingString}
          {description}
        </p>
      );
    };
    return (
      <div className="relative" ref={menuRef}>
        <button
          onClick={toggleMenu}
          className="py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Theme menu"
        >
          <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>

        {isMenuOpen && (
          <div className="fixed sm:absolute left-0 sm:left-auto right-0 sm:right-auto top-16 sm:top-auto sm:mt-2 mx-4 sm:mx-0 w-80 bg-white/90 dark:bg-gray-700/95 rounded-lg shadow-lg border dark:border-gray-600 z-50">
            {/* Font Size Section */}
            <div
              className={`px-3 py-2 cursor-pointer ${activeSection === "fontSize"
                ? "bg-gray-100 dark:bg-gray-600"
                : ""
                }`}
              onClick={() => handleSectionChange(sections.indexOf("fontSize"))}
            >
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                Schriftgröße{" "}
                <span className="text-xs text-gray-400 ml-2">(←/→)</span>
              </div>
              <div className="mt-2 flex items-center justify-center gap-3">
                <button
                  onClick={(e) => {
                    setActiveSection("fontSize");
                    handleOptionChange(e, false);
                  }}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
                >
                  –
                </button>
                <span className="w-8 text-center">{tempFontSize}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  pt
                </span>
                <button
                  onClick={(e) => {
                    setActiveSection("fontSize");
                    handleOptionChange(e, true);
                  }}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
                >
                  +
                </button>
              </div>
            </div>

            <div className="border-t dark:border-gray-700"></div>

            {/* Theme Section */}
            <div
              className={`px-3 py-2 cursor-pointer ${activeSection === "theme" ? "bg-gray-100 dark:bg-gray-600" : ""
                }`}
              onClick={() => handleSectionChange(sections.indexOf("theme"))}
            >
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                Design <span className="text-xs text-gray-400 ml-2">(←/→)</span>
              </div>
              <div className="flex gap-1">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setTheme("light");
                  }}
                  className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${theme === "light"
                    ? "bg-orange-100 dark:bg-yellow-400/60"
                    : ""
                    }`}
                >
                  hell
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setTheme("dark");
                  }}
                  className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${theme === "dark"
                    ? "bg-orange-100 dark:bg-yellow-400/60"
                    : ""
                    }`}
                >
                  dunkel
                </button>
              </div>
            </div>

            <div className="border-t dark:border-gray-700"></div>

            {/* Sprache Section */}
            <div
              className={`px-3 py-2 cursor-pointer ${activeSection === "language" ? "bg-gray-100 dark:bg-gray-600" : ""
                }`}
              onClick={() => handleSectionChange(sections.indexOf("language"))}
            >
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                Sprache/Übersetzung <span className="text-xs text-gray-400 ml-2">(←/→)</span>
              </div>
              <div className="mb-2 text-xs text-gray-500 dark:text-gray-400">
                {renderDescriptionItem("Stundenbuch:", "Einheitsübersetzung von 1983")}
                {renderDescriptionItem("lat.:", "Nova Vulgata", 4)}
                {renderDescriptionItem("neu:", "Einheitsübersetzung von 2016", 3)}              </div>
              <div className="flex gap-0">
                {LanguageButton("", "Stundenbuch", "flex-3")}
                {LanguageButton("_lat", "lat.")}
                {LanguageButton("_neu", "neu")}
              </div>
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                <p><b>Grundeinstellung:</b> {getLanguageName(storedPrefLanguage)}</p>
                <p className="text-xs italic">(lange drücken zum Speichern als Grundeinstellung)</p>
              </div>
            </div>

            <div className="border-t dark:border-gray-700"></div>

            {/* Deceased Section */}
            <div
              className={`px-3 py-2 cursor-pointer ${activeSection === "deceased"
                ? "bg-gray-100 dark:bg-gray-600"
                : ""
                }`}
              onClick={() => handleSectionChange(sections.indexOf("deceased"))}
            >
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                Verstorbene{" "}
                <span className="text-xs text-gray-400 ml-2">(←/→)</span>
              </div>
              <div className="flex gap-1">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDeceasedMode("recent");
                    setExpandedDeceased({});
                  }}
                  className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${deceasedMode === "recent"
                    ? "bg-orange-100 dark:bg-yellow-400/60"
                    : ""
                    }`}
                >
                  kurz
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDeceasedMode("all");
                    setExpandedDeceased({});
                  }}
                  className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${deceasedMode === "all"
                    ? "bg-orange-100 dark:bg-yellow-400/60"
                    : ""
                    }`}
                >
                  voll
                </button>
              </div>
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                {renderDescriptionItem("kurz:", "Verstorbene der letzten 30 Jahre (wie\u00a0im\u00a0gedruckten\u00a0Direktorium)")}
                {renderDescriptionItem("voll:", "alle Verstorbene seit 1920")}
              </div>
            </div>

            <div className="border-t dark:border-gray-700"></div>

            {/* View Selection Section */}
            <div
              className={`px-3 py-2 cursor-pointer ${activeSection === "view" ? "bg-gray-100 dark:bg-gray-600" : ""
                }`}
              onClick={() => handleSectionChange(sections.indexOf("view"))}
            >
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                Verzeichnis{" "}
                <span className="text-xs text-gray-400 ml-2">(←/→)</span>
              </div>
              <div className="flex gap-1">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setViewMode("directory");
                    toggleMenu();
                  }}
                  className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${viewMode === "directory"
                    ? "bg-orange-100 dark:bg-yellow-400/60"
                    : ""
                    }`}
                >
                  Direktorium
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setViewMode("deceased");
                    toggleMenu();
                  }}
                  className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${viewMode === "deceased"
                    ? "bg-orange-100 dark:bg-yellow-400/60"
                    : ""
                    }`}
                >
                  Totenverzeichnis
                </button>
              </div>
            </div>
            {/* Personal Settings Section */}

            <div className="px-3 py-2 border-t dark:border-gray-700">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setViewMode("settings");
                  toggleMenu();
                }}
                className="w-full px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300
            rounded bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Einstellungen
              </button>
            </div>
            <div className="border-t dark:border-gray-700"></div>
          </div>
        )}
      </div>
    );
  };

  const baseStyle = {
    fontFamily,
    fontSize: `${baseFontSize}pt`,
    lineHeight: "1.2",
    margin: 0,
  };

  const navStyle = {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    fontSize: "11pt",
  };

  const datePickerStyle = {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    fontSize: "10pt",
  };

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsNarrowScreen(window.innerWidth < 400); // 640px is the 'sm' breakpoint in Tailwind
    };

    // Initial check
    checkScreenWidth();

    // Add resize listener
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  const [inputValue, setInputValue] = useState(formatDate(selectedDate, true));

  // Aktualisiere inputValue wenn sich selectedDate ändert
  useEffect(() => {
    setInputValue(formatDate(selectedDate, true));
  }, [selectedDate, formatDate]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ReferenceDialog />
      <div
        className="mx-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors w-full sm:max-w-[40em]"
        style={baseStyle}
      >
        {/* Navigation Bar */}
        <div
          className="sticky top-0 left-0 right-0 w-full sm:max-w-[40em] bg-white dark:bg-gray-900 shadow-sm z-10 transition-colors"
          style={navStyle}
          role="navigation"
        >
          <div className="flex items-center gap-2 px-4 py-2 overflow-x-auto sm:overflow-visible">
            <ThemeMenu />

            <div className="flex items-center gap-2 flex-1 min-w-0">
              {viewMode !== "prayerTex" && (
                <>
                  {/* Die Buttons für '1 Woche vor' und '1 Woche zurück' sind ausgeblendet */}
                  {viewMode === "ausblenden" && (
                    <>
                      <button
                        onClick={handlePrevWeek}
                        className="shrink-0 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                        title="1 Woche zurück"
                      >
                        «
                      </button>
                    </>)}
                  <button
                    onClick={handleToday}
                    className="shrink-0 p-2 bg-orange-100 dark:bg-yellow-400/60 hover:bg-orange-200 dark:hover:bg-yellow-400/70 rounded"
                  >
                    Heute
                  </button>

                  <div className="relative flex-1 min-w-0">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => {
                        setInputValue(e.target.value);
                        if (e.target.value.length >= 6) {
                          const date = parseDateString(e.target.value);
                          if (date) {
                            handleDateSelect(date);
                          }
                        }
                      }}
                      onClick={(e) => {
                        e.target.select();
                        setShowDatePicker(!showDatePicker);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && e.target.value.length >= 6) {
                          const date = parseDateString(e.target.value);
                          if (date) {
                            handleDateSelect(date);
                            setShowDatePicker(false);
                          }
                        } else if (e.key === "Escape") {
                          setShowDatePicker(false);
                          setInputValue(formatDate(selectedDate, true));
                        }
                      }}
                      onBlur={() => {
                        const date = parseDateString(inputValue);
                        if (!date) {
                          setInputValue(formatDate(selectedDate, true));
                        }
                      }}
                      className="w-full px-4 py-2 border dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800
                        cursor-pointer bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                      placeholder="TT.MM.JJ"
                    />
                    <svg
                      className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {showDatePicker && <DatePicker />}
                  </div>

                  {viewMode === "ausblenden" && (<>
                    <button
                      onClick={handleNextWeek}
                      className="shrink-0 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                      title="1 Woche vor"
                    >
                      »
                    </button>
                  </>)}
                </>
              )}

              {/* Right-aligned controls wrapper */}

              <div className="flex items-center gap-2 ml-auto">
                {/* WakeLock indicator */}
                {viewMode === "ausblenden" && (<>
                  {wakeLock.isSupported ? (
                    <MonitorCheck
                      className={`w-4 ${wakeLock.isActive
                        ? "text-orange-500 dark:text-yellow-400"
                        : "text-gray-400 dark:text-gray-600"
                        }`}
                    />
                  ) : (
                    <MonitorCheck className="w-4 text-red-600/60 dark:text-red-800/80" />
                  )}
                </>)}

                {/* StB Button */}
                <button
                  onClick={() => setViewMode("prayer")}
                  className="shrink-0 px-3 p-2 bg-orange-100 dark:bg-yellow-400/60 hover:bg-orange-200 dark:hover:bg-yellow-400/70 rounded"
                  title="Stundengebet"
                >
                  StB
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="mt-4">
          {viewMode === "settings" && (
            <div className="px-4">
              <TitleBar
                title="Einstellungen"
                onBack={() => setViewMode("directory")}
              />
              <PersonalSettings />
            </div>
          )}
          {/* Prayer Views */}
          {viewMode === "prayer" && (
            <PrayerMenu
              title={formatDate(selectedDate)}
              viewMode={viewMode}
              season={currentSeason}
              selectedDate={selectedDate}
              liturgicalInfo={liturgicalInfo}
              prayerTexts={prayerTexts}
              prefSrc={prefSrc}
              setPrefSrc={setPrefSrc}
              prefSollemnity={prefSollemnity}
              setPrefSollemnity={setPrefSollemnity}
              useCommemoration={useCommemoration}
              setUseCommemoration={setUseCommemoration}
              onSelectHour={(hour, texts) => {
                setSelectedHour(hour);
                setPrayerTexts(texts);
                setViewMode("prayerText");
              }}
              setViewMode={setViewMode}
              onPrevDay={() => {
                setDateChangeSource("navigation");
                setSelectedDate(
                  new Date(selectedDate.setDate(selectedDate.getDate() - 1))
                );
              }}
              onNextDay={() => {
                setDateChangeSource("navigation");
                setSelectedDate(
                  new Date(selectedDate.setDate(selectedDate.getDate() + 1))
                );
              }}
            />
          )}

          {viewMode === "prayerText" && (
            <PrayerTextDisplay
              hour={selectedHour}
              texts={prayerTexts}
              selectedDate={selectedDate}
              liturgicalInfo={liturgicalInfo}
              title={formatDate(selectedDate)}
              viewMode={viewMode}
              season={currentSeason}
              prefSrc={prefSrc}
              setPrefSrc={setPrefSrc}
              prefSollemnity={prefSollemnity}
              setPrefSollemnity={setPrefSollemnity}
              useCommemoration={useCommemoration}
              setUseCommemoration={setUseCommemoration}
              localPrefLanguage={localPrefLanguage}
              localPrefLatin={localPrefLatin}
              setLocalPrefLatin={setLocalPrefLatin}
              setLocalPrefLanguage={setLocalPrefLanguage}
              isNarrowForHymns={isNarrowForHymns}
              onBack={() => setViewMode("prayer")}
              onSelectHour={(hour) => {
                setSelectedHour(hour);
                setPrayerTexts(prayerTexts);
              }}
              onPrevDay={() => {
                setDateChangeSource("navigation");
                setSelectedDate(
                  new Date(selectedDate.setDate(selectedDate.getDate() - 1))
                );
              }}
              onNextDay={() => {
                setDateChangeSource("navigation");
                setSelectedDate(
                  new Date(selectedDate.setDate(selectedDate.getDate() + 1))
                );
              }}
            />
          )}

          {/* Original ScrollableContainer for directory/deceased views */}
          {(viewMode === "directory" || viewMode === "deceased") && (
            <ScrollableContainer
              containerRef={containerRef}
              selectedDate={selectedDate}
              dateChangeSource={dateChangeSource}
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
                        selectedDate={selectedDate}
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
                        formatText={formatText} // Added this prop
                        selectedDate={selectedDate}
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
                        selectedDate={selectedDate}
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
                        formatText={formatText} // Added this prop
                        selectedDate={selectedDate}
                        months={months}
                        entriesRef={entriesRef}
                      />
                    )
                  )}
                </div>
              )}
            </ScrollableContainer>
          )}
        </div>
      </div>
    </div>
  );
}
