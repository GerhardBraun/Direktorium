import React from "react";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Menu, MonitorCheck } from "lucide-react";
import useWakeLock from "./utils/WakeLock.js";
import { liturgicalData } from "./data/Direktorium.ts";
import { deceasedData } from "./data/Deceased.ts";
import { ReferenceDialog, parseTextWithReferences } from "./ui/RefLink.jsx";
import { getLiturgicalInfo } from "./dataHandlers/LitCalendar.js";
import { processBrevierData } from "./dataHandlers/BrevierDataProcessor.js";
import formatBibleRef from "./dataHandlers/BibleRefFormatter.js";
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "./ui/tooltip.jsx";
import LanguageProgress from "./ui/languageProgress.js";
import SourceSelector from "./selectors/SourceSelector.js";
import ExtSectionHeader from "./selectors/SectionHeader.js";
import KompletSelector from "./selectors/KompletSelector.js";
import HymnSelector from "./selectors/HymnSelector.js";
import MarAntSelector from "./selectors/MarAntSelector.js";
import LectureSelector from './selectors/LectureSelector.js';
import { MatutinDisplay } from "./ui/MatutinDisplay.js";
import { getValue as extGetValue } from "./dataHandlers/GetValue.js";
import {
  firstCapital,
  formatPsalm as extFormatPsalm,
  formatText,
  formatPrayerText as extFormatPrayerText,
} from "./dataHandlers/TextFormatter.js";
import { NavigationButtons } from "./ui/NavigationButtons.js";
import PersonalSettings from "./utils/PersonalSettings.js";
import TitleBar from "./ui/TitleBar.js";
import { setLocalStorage } from './utils/PersonalSettings.js';
import { ordinarium } from "./utils/ordinarium.js";
import { UserMessageDisplay } from "./data/UserMessageDisplay.js";
import { MassReadings } from "./ui/MassReadings.js";
import ScrollableViews, { setScrollDate } from "./ui/ScrollableViews.js";

const FONT_FAMILIES = [
  { key: "cambria", label: "Cambria", value: "cambria, georgia, serif" },
  { key: "georgia", label: "Georgia", value: "georgia, serif" },
  { key: "palatino", label: "Palatino", value: "palatino linotype, palatino, book antiqua, serif" },
  { key: "system", label: "System", value: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif' },
];

const months = [
  "Januar", "Februar", "März",
  "April", "Mai", "Juni",
  "Juli", "August", "September",
  "Oktober", "November", "Dezember",
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
  OBLIG: "oblig",
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
    const savedSize = localStorage.getItem("baseFontSize");
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



// Prayer Menu Component
const PrayerMenu = ({
  title,
  onSelectHour,
  viewMode,
  setViewMode,
  season,
  texts,
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
  const rank = texts?.rank || { wt: 0, date: 0 };
  const sollemnityErsteVesper = () =>
    ["soll", "kirchw"].includes(prefSollemnity);

  return (
    <div className="flex flex-col p-4 bg-white dark:bg-gray-900">
      {/* Title bar with navigation */}
      <TitleBar
        title={''}
        onPrevDay={onPrevDay}
        onNextDay={onNextDay}
        swdWritten={texts?.swd.written}
      />
      {/* Source Selector */}
      <SourceSelector
        texts={texts}
        prefSrc={prefSrc}
        prefSollemnity={prefSollemnity}
        useCommemoration={useCommemoration}
        setPrefSrc={setPrefSrc}
        setPrefSollemnity={setPrefSollemnity}
        setUseCommemoration={setUseCommemoration}
        onSelectHour={onSelectHour}
        viewMode={viewMode}
        season={season}
        className="mb-4"
      />

      {/* Prayer Hours */}
      <div className="space-y-2 mb-6">
        {Object.values(PrayerHours).map((hour) => {
          // Spezielle Behandlung für Terz, Sext, Non
          if (["terz", "sext", "non"].includes(hour)) {
            if (hour === "terz") {// Sext und Non überspringen, da sie bereits in der Flex-Box enthalten sind
              return (
                <div key="tsn" className="flex gap-2 w-full">
                  {["terz", "sext", "non"].map((tsnHour) => (
                    <button
                      key={tsnHour}
                      onClick={() => {
                        onSelectHour(tsnHour, texts);
                      }}
                      className="flex-1 p-3 text-center rounded-lg bg-gray-100 dark:bg-gray-800
                                                hover:bg-gray-200 dark:hover:bg-gray-700
                                                text-gray-900 dark:text-gray-100"
                    >
                      {firstCapital(tsnHour)}
                    </button>
                  ))}
                </div>
              );
            }
            return null;
          }

          if (hour === "erstev") {
            if (sollemnityErsteVesper()) {
              return (
                <button
                  onClick={() => {
                    onSelectHour(hour, texts);
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

          let displayText = firstCapital(hour);
          if (hour === "vesper") {
            if (
              texts?.vesper?.oblig?.button &&
              texts?.rank?.hasErsteVesper && prefSollemnity !== 'soll'
            ) {
              displayText = texts.vesper.oblig.button;
            } else if (texts?.vesper?.wt?.button) {
              displayText = texts.vesper.wt.button;
            } else {
              const dayOfWeek = selectedDate.getDay();
              if (
                dayOfWeek === 6 &&
                rank?.date < 4 &&
                rank?.wt < 5 &&
                !sollemnityErsteVesper()
              ) {
                // Samstag
                displayText = "1. Vesper vom Sonntag";
              } else {
                if (sollemnityErsteVesper() || texts?.rank?.hasZweiteVesper) {
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
                onSelectHour(hour, texts);
              }}
              className="w-full p-3 text-center rounded-lg bg-gray-100 dark:bg-gray-800
                                hover:bg-gray-200 dark:hover:bg-gray-700
                                text-gray-900 dark:text-gray-100"
            >
              {formatText(displayText)}
            </button>
          );
        })}
      </div>

      {/* Mass */}
      <div className="pt-4 border-t dark:border-gray-700">
        <button
          onClick={() => {
            setViewMode("massReadings")
          }}
          className="w-full p-3 mb-4 text-center rounded-lg bg-gray-100 dark:bg-gray-800
        hover:bg-gray-200 dark:hover:bg-gray-700
        text-gray-900 dark:text-gray-100"
        >
          Messlektionar
        </button>
      </div>

      {/* View Selection with spacing */}
      {localStorage.getItem('diocese') === 'Fulda' && (
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
      )}
      {/* Nachrichten an die Nutzer */}
      <UserMessageDisplay />
    </div>
  );
};
// Prayer Text Display Component
const PrayerTextDisplay = ({
  hour,
  texts,
  season,
  selectedDate,
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
  widthForHymns,
  addDebugLog
}) => {
  const [localPrefComm, setLocalPrefComm] = useState(texts?.prefComm || 0);
  const [localPrefContinuous, setLocalPrefContinuous] = useState(false);
  const [localPrefPsalmsWt, setLocalPrefPsalmsWt] = useState(false);
  const [localPrefInv, setLocalPrefInv] = useState(texts?.invitatorium?.prefInv || 95);
  const [localPrefErgPs, setLocalPrefErgPs] = useState(false);
  const [localPrefKomplet, setLocalPrefKomplet] = useState(texts?.komplet?.prefKomplet || "wt");
  const [localPrefLongform, setLocalPrefLongform] = useState(localStorage.getItem('prefLongform') === 'true');
  const [showKomplet, setShowKomplet] = useState(true);
  const [ommitConfiteor, setOmmitConfiteor] = useState(localStorage.getItem('ommitConfiteor') === 'true');

  useEffect(() => {
    setLocalPrefComm(texts?.prefComm || 0);
    setLocalPrefContinuous(false);
    setLocalPrefPsalmsWt(false);
    setLocalPrefInv(texts?.invitatorium?.prefInv || 95);
    setLocalPrefErgPs(false);
    setLocalPrefKomplet(texts?.komplet?.prefKomplet || "wt");
  }, [texts]);

  useEffect(() => {
    setShowKomplet(!(
      hour === 'komplet' &&
      localPrefKomplet === 'wt' &&
      !texts?.komplet?.showKompletWt
    ));
  }, [texts, localPrefKomplet, hour]);

  useEffect(() => {
    if (hour === 'vesper' && texts?.rank?.hasErsteVesper && texts?.vesper?.prefComm) {
      setLocalPrefComm(texts?.vesper?.prefComm);
    };
  }, [hour, texts]);

  if (!hour || !texts || !texts[hour]) {
    return <div className="p-4">Keine Daten hier verfügbar</div>;
  }

  const rank = texts?.rank || { wt: 0, date: 0 };

  // Get value from sources in priority order: prefSrc -> com1/com2 -> wt
  const getValue = (field) => {
    return extGetValue({
      hour,
      season,
      prefSrc,
      prefSollemnity,
      localPrefKomplet,
      localPrefComm,
      localPrefPsalmsWt,
      localPrefErgPs,
      localPrefContinuous,
      localPrefLanguage,
      texts,
      field,
    })
  }
  // Component for section headers with source indicators
  const SectionHeader = (props) => {
    return (
      <ExtSectionHeader
        key={Date.now()}
        {...props}
        provField={props.field}
        onSelectHour={onSelectHour}
        texts={texts}
        hour={hour}
        addDebugLog={addDebugLog}
        prefSrc={prefSrc}
        prefSollemnity={prefSollemnity}
        localPrefComm={localPrefComm}
        localPrefPsalmsWt={localPrefPsalmsWt}
        localPrefErgPs={localPrefErgPs}
        localPrefContinuous={localPrefContinuous}
        localPrefInv={localPrefInv}
        localPrefLatin={localPrefLatin}
        localPrefLanguage={localPrefLanguage}
        localPrefLongform={localPrefLongform}
        ommitConfiteor={ommitConfiteor}
        setLocalPrefLatin={setLocalPrefLatin}
        setLocalPrefLanguage={setLocalPrefLanguage}
        setLocalPrefInv={setLocalPrefInv}
        setLocalPrefPsalmsWt={setLocalPrefPsalmsWt}
        setLocalPrefErgPs={setLocalPrefErgPs}
        setLocalPrefContinuous={setLocalPrefContinuous}
        setLocalPrefComm={setLocalPrefComm}
        setLocalPrefLongform={setLocalPrefLongform}
        setOmmitConfiteor={setOmmitConfiteor}
      />
    );
  };


  // Rubric component for styled headers and labels
  const Rubric = ({ children, isHeader = false }) => (
    <span
      className={`text-rubric ${isHeader ? "text-lg font-bold mb-4" : ""}`}
      aria-hidden="true">
      {children}
    </span>
  );

  const formatPrayerText = (provText, marker = "") => {
    return extFormatPrayerText(provText, localPrefLanguage, marker, hour, texts,
      prefSrc, widthForHymns);
  };

  const formatPsalm = (psalm, num = 0) => {
    return extFormatPsalm(psalm, num, localPrefLanguage);
  };

  const ComposeResponse = ({ resp0, resp1, resp2, resp3 }) => {
    if (resp2 && !resp2.includes('°')) resp2 = resp2.replace(/ /, '°');

    const doxology = resp3?.endsWith("_lat")
      ? 'Glória Patri et Fílio et\u00a0Spirítui\u00a0Sancto.'
      : 'Ehre sei dem Vater und\u00a0dem\u00a0Sohn und\u00a0dem\u00a0Heiligen\u00a0Geist.'

    const formatSecondResponse = (firstResp, secondResp) => {
      if (!firstResp || !secondResp) return secondResp;

      firstResp = firstResp.trim()
        .replace(/_lat/g, '')
        .replace(/_neu/g, '');

      secondResp = secondResp.trim()
        .replace(/[,;]$/, '.');

      return (/[.!?]$/.test(firstResp))
        ? firstCapital(secondResp)
        : secondResp;
    };

    // Prüfung für Osterzeit: resp1 und resp2 kombinieren falls nötig
    let processedResp1 = resp1;
    let processedResp2 = resp2;

    if (texts?.season === 'o'
      && hour !== 'lesehore' && resp1 && resp2) {
      const testResp2 = resp2
        .replace(' ', '°')
        .replace('_lat', '')
        .replace('_neu', '')
      if (testResp2 !== 'Halleluja,°halleluja.' &&
        testResp2 !== 'Allelúia,°allelúia.') {
        processedResp1 = `${resp1.trim()} ${resp2.trim()}`;
        processedResp2 = resp1.endsWith('_lat')
          ? 'Allelúia,°allelúia.'
          : 'Halleluja,°halleluja.';
      }
    }

    return (
      <div className="mb-0 whitespace-pre-wrap">
        {resp0 && resp1 && (
          <div>
            <div className="mb-0 flex gap-0">
              <div>{formatPrayerText(resp0, "V°°")}</div>
            </div>
            <div className="mb-0 flex gap-0">
              <div>{formatPrayerText(processedResp1, "R°°")}</div>
            </div>
          </div>
        )}
        {resp1 && resp2 && (
          <div className="mb-0 flex gap-0">
            <Rubric>R&nbsp;&nbsp;</Rubric>
            <div>
              {formatPrayerText(processedResp1)}
              <Rubric> *&nbsp;</Rubric>
              {formatPrayerText(processedResp2)}
              {hour !== "lesehore" && <Rubric> –&#8288;&#160;R</Rubric>}
            </div>
          </div>
        )}
        {resp3 && resp2 && (
          <>
            <div className="flex gap-0">
              <Rubric>V&nbsp;&nbsp;</Rubric>
              <div>
                {formatPrayerText(resp3)}
                {(hour === "lesehore" || !localPrefLongform) && (
                  <><Rubric> *&nbsp;</Rubric>
                    {formatPrayerText(formatSecondResponse(resp3, processedResp2))}
                  </>
                )}
              </div>
            </div>
            {hour !== "lesehore" && localPrefLongform && (
              <div className="mb-0 flex gap-0">
                <Rubric>R&nbsp;&nbsp;</Rubric>
                <div>{formatPrayerText(formatSecondResponse(resp3, processedResp2))}</div>
              </div>
            )}
            {hour !== "lesehore" && (
              !localPrefLongform
                ? <div>
                  {doxology}
                  <Rubric> –&#8288;&#160;R</Rubric>
                </div>
                : <>
                  <div className="flex gap-0">
                    <Rubric>V&nbsp;&nbsp;</Rubric>
                    <div>
                      {doxology}
                    </div>
                  </div>
                  {resp1 && resp2 && (
                    <div className="mb-0 flex gap-0">
                      <Rubric>R&nbsp;&nbsp;</Rubric>
                      <div>
                        {formatPrayerText(processedResp1 + " ")}
                        {formatPrayerText(processedResp2)}
                      </div>
                    </div>
                  )}
                </>
            )}
          </>
        )}
      </div>
    );
  };

  const PreliminaryNotes = () => {
    let note = ''
    if (texts.dateCompare === '11-02' && texts.dayOfWeek === 0) {
      if (!['vigil', 'komplet'].includes(hour))
        note = "Da heute das Gedächtnis Allerseelen auf einen Sonntag fällt, wird°die Messe von Allerseelen gefeiert, das°Offizium°jedoch vom°Sonntag°gebetet."
      if (['laudes', 'vesper'].includes(hour)) {
        note += "^lIn der Feier mit dem Volk können Laudes und Vesper aus dem Offizium für die Verstorbenen genommen werden. Nutzen°Sie dafür den Schalter „Ged°der°Verst“ oben rechts."
      }
    }
    if (texts.dateCompare === '01-01' && ['invitatorium', 'lesehore', 'laudes'].includes(hour))
      note = "Ein gesegnetes neues Jahr!"
    return !note ? null : (
      <div className="long-rubric mb-0 pt-4">
        {formatPrayerText(note)}
      </div>)
  }

  const ordinariumTexts = ordinarium(texts, hour, localPrefLanguage, prefSollemnity, useCommemoration)
  const { advResp = '', advVers = '' } =
    (texts?.swd.combined === 'a-1-0'
      && hour === 'lesehore'
      && (getValue('patr_resp1') === 'LEER' || localPrefLatin))
      ? ordinarium('advent', hour, localPrefLanguage) : {};

  return (
    <div className="leading-[1.33em] pb-8">
      {/* Der gesamte Header-Bereich wird in einen Container mit der Klasse prayer-header-container gepackt */}
      <div className="prayer-header-container">
        <TitleBar
          title={''}
          onPrevDay={onPrevDay}
          onNextDay={onNextDay}
          swdWritten={hour === 'vesper'
            ? texts.vesper?.oblig?.swdWritten || texts.vesper?.wt?.swdWritten || texts?.swd.written
            : texts?.swd.written}
          padding="pr-4"
        />
        <NavigationButtons
          hour={hour}
          topButton={true}
          onBack={onBack}
          onSelectHour={onSelectHour}
          texts={texts}
          prefSollemnity={prefSollemnity}
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
              texts={texts}
              prefSrc={prefSrc}
              prefSollemnity={prefSollemnity}
              useCommemoration={useCommemoration}
              setPrefSrc={setPrefSrc}
              setPrefSollemnity={setPrefSollemnity}
              setUseCommemoration={setUseCommemoration}
              onSelectHour={onSelectHour}
              viewMode={viewMode}
              season={season}
              hour={hour}
              className="mb-4"
            />
          )}
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-sm shadow pl-2 pr-6 pb-1">
        <PreliminaryNotes />
        {ordinariumTexts.opening[0] && showKomplet && (
          <div className="mt-0 mb-0">
            <SectionHeader
              title="ERÖFFNUNG"
              field="versikel0"
            />
            <div>
              {formatPrayerText(ordinariumTexts.opening[0], "V°°")}
            </div>
            <div>
              {formatPrayerText(ordinariumTexts.opening[1], "R°°")}
            </div>
          </div>
        )}

        {ordinariumTexts.opening[2] && showKomplet && (
          <div className="mt-0 mb-0">
            <div className="mt-1">
              {formatPrayerText(ordinariumTexts.opening[2])}
            </div>
            <div>
              {formatPrayerText(ordinariumTexts.opening[3])}
            </div>
          </div>
        )}

        {ordinariumTexts.confiteor && (
          <div className="mt-0 mb-0">
            <SectionHeader
              title="SCHULDBEKENNTNIS"
              field="versikel0"
            />
            {!ommitConfiteor && (
              <>
                <div>
                  {formatPrayerText(ordinariumTexts.confiteor)}
                </div>
                <SectionHeader
                  title="VERGEBUNGSBITTE"
                  field="versikel0" />
                <div className="my-0 flex gap-0">
                  <Rubric>V&nbsp;&nbsp;</Rubric>
                  <div>{formatPrayerText(ordinariumTexts.confiteor_v)}</div>
                </div>
                <div className="-mt-3 flex gap-0">
                  <Rubric>R&nbsp;&nbsp;</Rubric>
                  <div>{formatPrayerText("Amen.")}</div>
                </div>
              </>)}
          </div>
        )}

        {getValue("hymn_1") && (
          <div className="mb-0">
            <SectionHeader
              title="HYMNUS"
              field="hymn_1"
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

        {(getValue("psalm1") || hour === "invitatorium") && (
          <div className="my-0">
            <SectionHeader
              title={"PSALMODIE"}
              field="psalm1"
            />
            {getValue("ant0") && (
              <div className="mb-4">
                {formatPrayerText(getValue("ant0"), "Ant.°°")}
              </div>
            )}
            {hour === "invitatorium" &&
              texts?.invitatorium?.psalms?.includes(localPrefInv) && (
                <div>
                  {formatPsalm(localPrefInv)}
                </div>
              )}
            {hour !== "invitatorium" &&
              [1, 2, 3].map((num) => {
                const psalm = getValue(`psalm${num}`);
                const ant = getValue(`ant${num}`);
                if (!psalm && !ant) return null;

                return (
                  <div key={num}>
                    {ant && (
                      <div className={`mb-3 ${num > 1 ? 'mt-6' : ''}`}>
                        {formatPrayerText(ant, `${num}. Ant.°°`)}
                      </div>
                    )}
                    {psalm && hour !== 'vigil' &&
                      formatPsalm(psalm, -1)}
                    {psalm && hour === 'vigil' &&
                      formatPsalm(psalm, num)}
                    {ant && (
                      <div >
                        {formatPrayerText(ant, `Ant.°°`)}
                      </div>
                    )}
                  </div>
                );
              })}
            {getValue("ant0") && (
              <div>{formatPrayerText(getValue("ant0"), "Ant.°°")}</div>
            )}
          </div>
        )}
        {getValue("versikel0") && (
          <div>
            <SectionHeader
              title="VERSIKEL"
              field="versikel0" />
            {getValue("versikel0") && (
              <div className="flex gap-0">
                <div>{formatPrayerText(getValue("versikel0"), "V°°")}</div>
              </div>
            )}
            {getValue("versikel1") && (
              <div className="flex gap-0">
                <div>{formatPrayerText(getValue("versikel1"), "R°°")}</div>
              </div>
            )}
          </div>
        )}

        <LectureSelector
          texts={texts}
          hour={hour}
          prefSrc={prefSrc}
          prefSollemnity={prefSollemnity}
          localPrefLanguage={localPrefLanguage}
          formatPrayerText={formatPrayerText}
          getValue={getValue}
          SectionHeader={SectionHeader}
          ComposeResponse={ComposeResponse}
          advResp={advResp}
        />

        {/* erweitertes Responsorium am 1. Adventssonntag Jahr II */}
        {advResp && (
          <div className="mb-0">
            <SectionHeader
              title="RESPONSORIUM"
              field="resp1" />
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
            {/* Drei ComposeResponse-Abschnitte */}
            {advVers.slice(0, 3).map((versText, index) => (
              <ComposeResponse
                key={`prayer-response-${index}`}
                resp3={versText}
                resp2={advResp[index + 1]}
              />
            ))}
            {/* Letzter Vers ohne Response */}
            {advVers[3] && (<div className="flex gap-0">
              <Rubric>V&nbsp;&nbsp;</Rubric>
              <div>{formatPrayerText(advVers[3])}</div>
            </div>
            )}            {/* Wiederholung der vier resp-Elemente */}
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

        {texts?.rank?.hasVigil && hour === 'lesehore'
          && !['kirchw', 'verst'].includes(prefSollemnity) && (
            <button
              id="scroll-to-TeDeum"
              onClick={() => {
                onSelectHour('vigil', texts)
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              className="scroll-mt-32 mt-6 text-left long-rubric"
              aria-hidden="true"
            >
              {'Für eine Feier als Vigil: '}
              <span className='font-bold text-[1.1em]'>
                CANTICA&nbsp;<span className='font-normal'>und</span>&nbsp;EVANGELIUM&nbsp;&nbsp;→</span>
            </button>
          )}

        {ordinariumTexts.cant && showKomplet && (
          <div className="mb-0">
            <SectionHeader
              title={ordinariumTexts.titel}
              field="antev"
            />
            {getValue("antev") && (
              <div className="mb-4">
                {formatPrayerText(getValue("antev"), "Ant.°°")}
              </div>
            )}
            <div className="mb-4">
              {formatPsalm(ordinariumTexts, 'BuM')}
              {/* {formatPrayerText(ordinariumTexts.cant, 'cantIX')} */}
            </div>
            {getValue("antev") && (
              <div className="mb-0">
                {formatPrayerText(getValue("antev"), "Ant.°°")}
              </div>
            )}
          </div>
        )}

        {getValue("bitten") && (
          <div className="mb-0">
            <SectionHeader
              title={"BITTEN"}
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
                {formatPrayerText(getValue("bitten"), localPrefLongform ? "^R:" + getValue("bitten_r") : '')}              </div>
            )}
          </div>
        )}

        {ordinariumTexts.vu && (
          <div className="mb-0">
            <SectionHeader
              title={"VATERUNSER"}
              field=""
            />
            <div className="mb-0 whitespace-pre-wrap">
              {formatPrayerText(ordinariumTexts.vu)}
            </div>
          </div>
        )}

        {ordinariumTexts.closing.lesehore && (
          <div className="mt-3 long-rubric"
            aria-hidden="true">
            {ordinariumTexts.closing.lesehore}
          </div>
        )}

        {hour !== "invitatorium" && hour !== "komplet" && (
          <div className="mb-0">
            <SectionHeader
              title="ORATION"
              field="oration" />
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
            <SectionHeader
              title="ORATION"
              field="oration_komplet" />
            <div>{formatPrayerText(getValue("oration_komplet"))}</div>
          </div>
        )}

        {texts?.rank?.isCommemoration &&
          !prefSollemnity &&
          !(hour === "vesper" && texts?.rank?.hasErsteVesper) &&
          ["lesehore", "laudes", "vesper"].includes(hour) &&
          (texts?.laudes?.oblig?.oration
            || texts?.laudes?.n1?.oration
            || texts?.laudes?.d1?.oration) && (
            <>
              <div >
                <SourceSelector
                  texts={texts}
                  prefSrc={prefSrc}
                  prefSollemnity={prefSollemnity}
                  useCommemoration={useCommemoration}
                  setPrefSrc={setPrefSrc}
                  setPrefSollemnity={setPrefSollemnity}
                  setUseCommemoration={setUseCommemoration}
                  onSelectHour={onSelectHour}
                  viewMode={viewMode}
                  season={season}
                  hour={hour}
                  className="mb-4"
                  reduced={true}
                />

                {getValue("c_patr_text") && useCommemoration && (
                  <div className="mb-0">
                    <SectionHeader
                      title="ZWEITE LESUNG"
                      field="patr_text" />
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
                    <SectionHeader
                      title="RESPONSORIUM"
                      field="resp1" />
                    <ComposeResponse
                      resp0={null}
                      resp1={getValue("c_patr_resp1")}
                      resp2={getValue("c_patr_resp2")}
                      resp3={getValue("c_patr_resp3")}
                    />                </div>
                )}

                {getValue("c_antev") && useCommemoration && (
                  <div className="mx-0">
                    <SectionHeader
                      title={`${ordinariumTexts.titel}-ANTIPHON`}
                      field="antev"
                    />
                    <div className="mb-0">
                      {formatPrayerText(getValue("c_antev"))}
                    </div>
                  </div>
                )}

                {getValue("c_oration") && useCommemoration && (
                  <div className="mx-0">
                    <SectionHeader
                      title="ORATION"
                      field="oration" />
                    <div className="whitespace-pre-wrap">
                      {formatPrayerText(getValue("c_oration"))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

        {ordinariumTexts.closing.lhCommemoration && (
          <div className="mt-3 long-rubric"
            aria-hidden="true">
            {ordinariumTexts.closing.lhCommemoration}
          </div>
        )}

        {ordinariumTexts.closing[0] && showKomplet && (
          <div className="mb-0 mt-0">
            <SectionHeader
              title="ABSCHLUSS"
              field="versikel0"
            />
            <div className="flex gap-0">
              {formatPrayerText(ordinariumTexts.closing[0], "V°°")}
            </div>
            <div className="flex gap-0">
              {formatPrayerText(ordinariumTexts.closing[1], "R°°")}
            </div>
            <div className="mt-3 long-rubric" aria-hidden="true">
              {ordinariumTexts.closing[2]}
            </div>
          </div>
        )}

        {hour === 'komplet' && (
          <div className="mb-0">
            <SectionHeader
              title="MARIANISCHE ANTIPHON"
              field="marant"
            />
            <MarAntSelector
              season={season}
              selectedDate={selectedDate}
              swdCombined={texts?.swd.combined}
              localPrefLatin={localPrefLatin}
              formatPrayerText={formatPrayerText}
            />

          </div>
        )}
      </div>

      <div className="mt-2">
        <NavigationButtons
          hour={hour}
          onBack={onBack}
          onSelectHour={onSelectHour}
          texts={texts}
        />
      </div>
    </div>
  );
};

export { PrayerMenu, PrayerTextDisplay, PrayerHours, TextSources };

export default function Stundenbuch() {
  setLocalStorage('unlockBenedictine', 'unlocked'); // Always unlock Benedictine option
  const wakeLock = useWakeLock();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [entryDate, setEntryDate] = useState(new Date());
  const scrollViewsRef = useRef(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [prefSrc, setPrefSrc] = useState("oblig");
  const [prefSollemnity, setPrefSollemnity] = useState("");
  const [useCommemoration, setUseCommemoration] = useState(false);
  const [selectedHour, setSelectedHour] = useState(null);
  const [texts, setTexts] = useState(null);
  const [expandedDeceased, setExpandedDeceased] = useState({});
  const [prefFootnotes, setPrefFootnotes] = useState(() => localStorage.getItem("prefFootnotes") === "false" ? false : true);
  const [deceasedMode, setDeceasedMode] = useState(() => localStorage.getItem("deceasedMode") || "recent"); const [localPrefLanguage, setLocalPrefLanguage] = useState(() => localStorage.getItem("prefLanguage") || "");
  const [localPrefLatin, setLocalPrefLatin] = useState(() => localStorage.getItem("prefLanguage") === "_lat");
  const [baseFontSize, setBaseFontSize] = useTouchZoom(
    14,
    8,
    24,
    0.7,
    showDatePicker
  );
  const [baseFontFamily, setBaseFontFamily] = useState(
    () => localStorage.getItem("baseFontFamily") || "cambria, georgia, serif"
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

  const [debugLog, setDebugLog] = useState([]);

  const addDebugLog = (message) => {
    setDebugLog(prev => [...prev.slice(-10), `${new Date().toLocaleTimeString()}: ${message}`]);
    console.log(message);
  };

  const startViewMode = localStorage.getItem("startViewMode") || "prayer";
  const lastVisit = () => localStorage.getItem("lastVisit") || null;
  const todayVisit = () => new Date().toISOString().split("T")[0]; // Format YYYY-MM-DD
  const [viewMode, setViewMode] = useState(() => {
    if (localStorage.getItem('diocese') !== 'Fulda')
      return 'prayer'
    else return startViewMode === "directory" ||
      (startViewMode === "auto" && todayVisit() !== lastVisit())
      ? "directory"
      : "prayer"
  }); // 'directory', 'deceased', 'prayer', 'prayerText', 'settings'

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
      return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
    },
    [isNarrowScreen]
  ); // months ist konstant, daher keine Dependency nötig

  const [dateChangeSource, setDateChangeSource] = useState("navigation"); // 'navigation' oder 'scroll'
  const [widthForHymns, setWidthForHymns] = useState(window.innerWidth / baseFontSize);

  useEffect(() => {
    const checkScreenWidthInEm = () => {
      // 1pt=4/3px, 0.7 als Puffer für Padding
      setWidthForHymns((window.innerWidth / baseFontSize * .75) - .7);
    };

    checkScreenWidthInEm();
    window.addEventListener('resize', checkScreenWidthInEm);
    return () => {
      window.removeEventListener('resize', checkScreenWidthInEm);
    };
  }, [window.innerWidth, baseFontSize]);


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

    const savedDate = localStorage.getItem("selectedDate");
    const currentDateFormatted = formatDate(selectedDate);

    let newSelectedDate = false;
    if (viewMode === "prayer" || viewMode === "prayerText") {
      newSelectedDate = currentDateFormatted;
    }
    setLocalStorage("selectedDate", newSelectedDate);

    if (savedDate !== currentDateFormatted) {
      setPrefSrc("oblig");
      setPrefSollemnity("");
      setUseCommemoration(false);
    }
  }, [selectedDate, viewMode]);

  useEffect(() => {
    const processedData = processBrevierData(selectedDate);
    setTexts(processedData);
    console.log("neue Texte:", processedData);

    if (viewMode === "prayerText" && selectedHour === "vigil" &&
      !processedData?.rank?.hasVigil) {
      setSelectedHour("lesehore")
    }
  }, [selectedDate, prefSrc]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.body.classList.toggle("dark", theme === "dark");
    setLocalStorage("theme", theme);

    // Pull-to-Refresh verhindern
    document.documentElement.style.overscrollBehavior = 'none';
    document.body.style.overscrollBehavior = 'none';
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.fontSize = baseFontSize;
    setLocalStorage("baseFontSize", baseFontSize);
  }, [baseFontSize]);

  useEffect(() => {
    setLocalStorage("prefFootnotes", prefFootnotes);
  }, [prefFootnotes]);

  useEffect(() => {
    setLocalStorage("deceasedMode", deceasedMode);
  }, [deceasedMode]);

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

  // Handler für Datumsänderungen
  const handleDateSelect = (date) => {
    const newDate = new Date(date);

    // In den ScrollableViews das entryDate ändern
    if (viewMode === "directory" || viewMode === "deceased") {
      // Direktes Setzen des entryDate in der ScrollableViews-Komponente
      setEntryDate(newDate);
    } else {
      // In allen anderen Ansichten das selectedDate ändern
      setSelectedDate(newDate);
    }

    setShowDatePicker(false);
  };


  const handleToday = () => {
    const today = new Date();

    if (viewMode === "directory" || viewMode === "deceased") {
      // In ScrollableViews entryDate auf heute setzen
      setEntryDate(today);
    } else {
      // In anderen Ansichten das selectedDate ändern
      setSelectedDate(today);
    }
  };


  // Callback für Änderungen am entryDate in ScrollableViews
  const handleEntryDateChange = (newDate) => {
    // Optional: Auch das selectedDate der Hauptkomponente aktualisieren
    // Hier können Sie entscheiden, ob das globale selectedDate synchronisiert werden soll
    // setSelectedDate(newDate);

    // Oder nur für Debug-Zwecke loggen
    console.log("entryDate geändert:", formatDate(newDate));
  };

  const parseDateString = (dateStr) => {
    const match = dateStr.match(/^(\d{1,2})[.-/](\d{1,2})[.-/](\d{2}|\d{4})$/);
    if (!match) return null;

    let [, day, month, year] = match;
    day = parseInt(day, 10);
    month = parseInt(month, 10) - 1;
    year = parseInt(year, 10);

    if (year < 100) {
      year += year < 70 ? 2000 : 1900;
    }

    const date = new Date(year, month, day);

    if (
      date.getFullYear() !== year ||
      date.getMonth() !== month ||
      date.getDate() !== day
    ) { return null; }

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
        className="absolute left-0 right-0 mt-1 p-2
        bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
        border dark:border-gray-700 rounded shadow-lg z-50"
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
    const sections = ["fontSize", "theme", "language", "footnotes", "deceased", "view"];
    const storedPrefLanguage = localStorage.getItem("prefLanguage") || "";
    const unlockBenedictine = localStorage.getItem("unlockBenedictine") === "unlocked" ? true : false;

    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
      if (!isMenuOpen) {
        setActiveSection(sections[0]);
      }
    };

    const handleSectionChange = (sectionIndex) => {
      setActiveSection(sections[sectionIndex]);
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

    const handleFontSizeChange = (increase) => {
      const change = increase ? 1 : -1;
      const newSize = tempFontSize + change;
      if (newSize >= 8 && newSize <= 24) {
        setTempFontSize(newSize);
        setBaseFontSize(newSize);
      }
    };

    // Funktion für Rechtsklick auf Einstellungen-Button
    const handleMariendonk = (e) => {
      e.preventDefault();
      e.stopPropagation();

      const currentValue = localStorage.getItem("mariendonk");

      // Wenn der Wert bereits "true" oder "false" ist, umschalten
      if (currentValue === "true") {
        localStorage.setItem("mariendonk", "false");
        alert("mariendonk: false");
        return;
      } else if (currentValue === "false") {
        localStorage.setItem("mariendonk", "true");
        alert("mariendonk: true");
        return;
      }

      // Ansonsten Passwort abfragen
      let password;
      do {
        password = prompt("Passwort für Admin-Einstellungen?");
        if (password === null) {
          // Benutzer hat abgebrochen
          return;
        }
        if (password === "mariendonk") {
          localStorage.setItem("mariendonk", "true");
          alert("mariendonk: true");
          return;
        }
      } while (password !== "mariendonk");
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
        case "_ben": return "Münsterschwarzacher\u00a0Psalter";
        case "_cant": return "Psalmen zum Singen eingerichtet";
        default: return "Unbekannt";
      }
    };

    // Hilfsfunktion für die Sprachauswahl-Buttons
    const LanguageButton = (value, label, className = "col-span-1") => {
      return (
        <button
          onMouseDown={() => handleLanguageLongPress(value)}
          onMouseUp={clearLongPressTimeout}
          onMouseLeave={clearLongPressTimeout}
          onTouchStart={() => handleLanguageLongPress(value)}
          onTouchEnd={clearLongPressTimeout}
          onTouchCancel={clearLongPressTimeout}
          onContextMenu={(e) => e.preventDefault()}
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

    const renderDescriptionItem = (label, description, useIndent = true) => {
      const indentStyle = !useIndent ? {} : {
        display: 'grid',
        gridTemplateColumns: '1.6rem 1fr',
        gap: '0.5em',
        alignItems: 'start'
      }
      return (
        <div style={indentStyle}>
          <span className="text-gray-700 dark:text-gray-300 whitespace-nowrap">
            {label}{`${useIndent ? '' : ' '}`}
          </span>
          <span className="text-gray-500 dark:text-gray-400">
            {description}
          </span>
        </div>
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
              className={`px-3 py-1 cursor-pointer ${activeSection === "fontSize"
                ? "bg-gray-100 dark:bg-gray-600"
                : ""
                }`}
              onClick={() => handleSectionChange(sections.indexOf("fontSize"))}
            >
              <div className="flex items-center gap-3">
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                  Schriftgröße
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFontSizeChange(false);
                    }}
                    className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
                  >
                    –
                  </button>
                  <span className="w-5 text-center text-sm text-gray-700 dark:text-gray-300">{tempFontSize}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">pt</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFontSizeChange(true);
                    }}
                    className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t dark:border-gray-700"></div>

            {/* Font Family Section */}
            <div className="px-3 py-1">
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                Schriftart
              </div>
              <div className="flex gap-1">
                {FONT_FAMILIES.map(({ key, label, value }) => (
                  <button
                    key={key}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setBaseFontFamily(value);
                      setLocalStorage("baseFontFamily", value);
                    }}
                    style={{ fontFamily: value }}
                    className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${baseFontFamily === value ? "bg-orange-100 dark:bg-yellow-400/60" : ""}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t dark:border-gray-700"></div>

            {/* Theme Section */}
            <div
              className={`px-3 py-1 cursor-pointer ${activeSection === "theme" ? "bg-gray-100 dark:bg-gray-600" : ""
                }`}
              onClick={() => handleSectionChange(sections.indexOf("theme"))}
            >
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                Design
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
              className={`px-3 py-1 cursor-pointer ${activeSection === "language" ? "bg-gray-100 dark:bg-gray-600" : ""
                }`}
              onClick={() => handleSectionChange(sections.indexOf("language"))}
            >
              <div className="flex items-baseline gap-2 mb-0">
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                  Sprache/Übersetzung
                </div>
                <LanguageProgress />
              </div>
              <div className="mb-1 text-xs text-gray-500 dark:text-gray-400">
                {renderDescriptionItem("StB:", "Stundenbuch: Einheitsübersetzung von 1983", false)}
                {renderDescriptionItem("lat.:", "Nova Vulgata")}
                {unlockBenedictine && renderDescriptionItem("Ben:", "Benediktinisches Antiphonale / Münsterschwarzacher Psalter")}
                {renderDescriptionItem("neu:", "Einheitsübersetzung von 2016")}
                {renderDescriptionItem("cant:", "Psalmen zum Singen eingerichtet")}
              </div>
              <div className={`grid ${unlockBenedictine ? 'grid-cols-5' : 'grid-cols-4'} gap-0`}>
                {LanguageButton("", "StB")}
                {LanguageButton("_lat", "lat.")}
                {unlockBenedictine && LanguageButton("_ben", "Ben")}
                {LanguageButton("_neu", "neu")}
                {LanguageButton("_cant", "cant")}
              </div>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                <p><b>Grundeinstellung:</b> {getLanguageName(storedPrefLanguage)}</p>
                <p className="text-xs italic">(lange drücken zum Speichern als Grundeinstellung)</p>
              </div>
            </div>

            <div className="border-t dark:border-gray-700"></div>

            {/* Fußnoten Section */}
            <div
              className={`px-3 py-1 cursor-pointer ${activeSection === "footnotes"
                ? "bg-gray-100 dark:bg-gray-600"
                : ""
                }`}
              onClick={() => handleSectionChange(sections.indexOf("footnotes"))}
            >
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-0">
                Fußnoten
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                zur Zweiten Lesung der Lesehore</div>
              <div className="flex gap-1">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setPrefFootnotes(true);
                  }}
                  className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${prefFootnotes
                    ? "bg-orange-100 dark:bg-yellow-400/60"
                    : ""
                    }`}
                >
                  unter dem Text
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setPrefFootnotes(false);
                  }}
                  className={`flex-1 px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300 rounded ${!prefFootnotes
                    ? "bg-orange-100 dark:bg-yellow-400/60"
                    : ""
                    }`}
                >
                  im Text
                </button>
              </div>
            </div>

            <div className="border-t dark:border-gray-700"></div>

            {/* Deceased Section */}
            {localStorage.getItem('diocese') === 'Fulda' && (<div
              className={`px-3 py-1 cursor-pointer ${activeSection === "deceased"
                ? "bg-gray-100 dark:bg-gray-600"
                : ""
                }`}
              onClick={() => handleSectionChange(sections.indexOf("deceased"))}
            >
              <div className="mb-0 text-sm font-semibold text-gray-500 dark:text-gray-400 mb-0">
                Verstorbene
              </div>
              <div className="mb-1 grid gap-x-2 text-xs text-gray-500 dark:text-gray-400"
                style={{ gridTemplateColumns: `min-content 1fr` }}
              >
                <div className="text-gray-700 dark:text-gray-300 ">
                  kurz:</div>
                <div>
                  Verstorbene der letzten 30 Jahre (wie&nbsp;im&nbsp;gedruckten&nbsp;Direktorium)
                </div>
                <div className="text-gray-700 dark:text-gray-300 ">
                  voll:</div>
                <div>
                  alle Verstorbenen seit 1920
                </div>
              </div>
              <div className="flex gap-1">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDeceasedMode("recent");
                    setLocalStorage("deceasedMode", "recent");
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
                    setLocalStorage("deceasedMode", "all");
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
            </div>
            )}
            <div className="border-t dark:border-gray-700"></div>

            {/* View Selection Section */}
            {localStorage.getItem('diocese') === 'Fulda' && (<div
              className={`px-3 py-2 cursor-pointer ${activeSection === "view" ? "bg-gray-100 dark:bg-gray-600" : ""
                }`}
              onClick={() => handleSectionChange(sections.indexOf("view"))}
            >
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                Verzeichnis
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
            )}

            <div className="border-t dark:border-gray-700"></div>

            {/* Personal Settings Section */}
            <div className="px-3 py-1 border-t dark:border-gray-700">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setViewMode("settings");
                  toggleMenu();
                }}
                onContextMenu={handleMariendonk}
                className="w-full px-2 py-1 text-center text-sm text-gray-700 dark:text-gray-300
            rounded bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                weitere Einstellungen
              </button>
            </div>

            {/* Kontaktadresse */}
            <div className="px-3 py-1 text-sm mb-0 flex items-center gap-3">
              <div className="font-semibold text-gray-500 dark:text-gray-400">
                Kontakt:
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                <a
                  href="mailto:direktorium@bistum-fulda.de"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  direktorium@bistum-fulda.de
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  const baseStyle = {
    fontFamily: baseFontFamily,
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
  }, [selectedDate, entryDate, formatDate]);

  const onPrevDay = () => {
    setDateChangeSource("navigation");
    setSelectedDate(
      new Date(selectedDate.setDate(selectedDate.getDate() - 1))
    );
    if (selectedHour === 'erstev')
      setSelectedHour('vesper');
  }
  const onNextDay = () => {
    setDateChangeSource("navigation");
    setSelectedDate(
      new Date(selectedDate.setDate(selectedDate.getDate() + 1))
    );
    if (selectedHour === 'erstev')
      setSelectedHour('vesper');
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ReferenceDialog />

      {/* Debug-Anzeige */}
      {debugLog.length > 0 && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          background: 'rgba(0,0,0,0.9)',
          color: 'lime',
          padding: '10px',
          fontSize: '11px',
          zIndex: 9999,
          fontFamily: 'monospace',
          maxHeight: '150px',
          overflow: 'auto'
        }}>
          <button
            onClick={() => setDebugLog([])}
            style={{
              position: 'absolute',
              top: '5px',
              right: '5px',
              background: 'red',
              color: 'white',
              border: 'none',
              padding: '2px 8px',
              cursor: 'pointer'
            }}
          >
            ✕
          </button>
          {debugLog.map((log, i) => <div key={i}>{log}</div>)}
        </div>
      )}

      <div
        className="mx-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors w-full sm:max-w-[40em]"
        style={baseStyle}
      >
        {/* Navigation Bar */}
        <div
          className="sticky top-0 left-0 right-0 w-full sm:max-w-[48em] bg-white dark:bg-gray-900 shadow-sm z-10 transition-colors"
          style={navStyle}
          role="navigation"
        >
          <div className="flex items-center gap-2 px-4 py-2 overflow-x-auto sm:overflow-visible">
            <ThemeMenu />

            <div className="flex items-center gap-2 flex-1 min-w-0">
              {viewMode !== "prayerTex" && (
                <>
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

                </>
              )}

              {/* Right-aligned controls wrapper */}

              <div className="flex items-center gap-2 ml-auto">
                {/* WakeLock indicator - ausgeblendet durch viewMode='ausblenden' */}
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

                {/* Menü-Button */}
                <button
                  onClick={() => {
                    setViewMode("prayer");
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  className="shrink-0 p-2 bg-orange-100 dark:bg-yellow-400/60 hover:bg-orange-200 dark:hover:bg-yellow-400/70 rounded"
                  title="Stundengebet"
                >
                  Menü
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
              season={texts?.season}
              selectedDate={selectedDate}
              texts={texts}
              prefSrc={prefSrc}
              setPrefSrc={setPrefSrc}
              prefSollemnity={prefSollemnity}
              setPrefSollemnity={setPrefSollemnity}
              useCommemoration={useCommemoration}
              setUseCommemoration={setUseCommemoration}
              onSelectHour={(hour, texts) => {
                setSelectedHour(hour);
                setTexts(texts);
                setViewMode("prayerText");
              }}
              setViewMode={setViewMode}
              onPrevDay={onPrevDay}
              onNextDay={onNextDay}
            />
          )}

          {viewMode === "prayerText" &&
            texts?.swd.combined === 'o-1-0' && selectedHour === 'lesehore' && (
              <MatutinDisplay
                TitleBar={TitleBar}
                NavigationButtons={NavigationButtons}
                hour={selectedHour}
                texts={texts}
                selectedDate={selectedDate}
                title={formatDate(selectedDate)}
                viewMode={viewMode}
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
                widthForHymns={widthForHymns}
                onBack={() => {
                  setViewMode("prayer");
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                onSelectHour={(hour) => {
                  setSelectedHour(hour);
                  setTexts(texts);
                }}
                onPrevDay={onPrevDay}
                onNextDay={onNextDay}
              />
            )}

          {viewMode === "prayerText" &&
            !(texts?.swd.combined === 'o-1-0' && selectedHour === 'lesehore') && (
              <PrayerTextDisplay
                hour={selectedHour}
                texts={texts}
                selectedDate={selectedDate}
                title={formatDate(selectedDate)}
                viewMode={viewMode}
                season={texts?.season}
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
                widthForHymns={widthForHymns}
                addDebugLog={addDebugLog}
                onBack={() => {
                  setViewMode("prayer");
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                onSelectHour={(hour) => {
                  setSelectedHour(hour);
                  setTexts(texts);
                }}
                onPrevDay={onPrevDay}
                onNextDay={onNextDay}
              />
            )}

          {viewMode === "massReadings" && (
            <MassReadings
              TitleBar={TitleBar}
              NavigationButtons={NavigationButtons}
              SourceSelector={SourceSelector}
              hour={selectedHour}
              texts={texts}
              selectedDate={selectedDate}
              title={formatDate(selectedDate)}
              viewMode={viewMode}
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
              widthForHymns={widthForHymns}
              onBack={() => {
                setViewMode("prayer");
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              onSelectHour={(hour) => {
                setSelectedHour(hour);
                setTexts(texts);
              }}
              onPrevDay={onPrevDay}
              onNextDay={onNextDay}
            />
          )}

          {/* ScrollableViews für Directory und Deceased Views */}
          {(viewMode === "directory" || viewMode === "deceased") && (
            <ScrollableViews
              ref={scrollViewsRef}
              viewMode={viewMode}
              selectedDate={selectedDate}
              entryDate={entryDate}          // Übergebe entryDate als Prop
              setEntryDate={setEntryDate}
              months={months}
              formatDate={formatDate}
              deceasedMode={deceasedMode}
              expandedDeceased={expandedDeceased}
              setExpandedDeceased={setExpandedDeceased}
              onDateChange={handleEntryDateChange}
            />
          )}

          {/* DatePicker */}
          {showDatePicker && (
            <DatePicker
              selectedDate={selectedDate}
              onSelect={handleDateSelect}
              onClose={() => setShowDatePicker(false)}
              formatDate={formatDate}
              months={months}
              onToday={handleToday}
              parseDateString={parseDateString}
            />
          )}
        </div>
      </div>
    </div>
  );
}
