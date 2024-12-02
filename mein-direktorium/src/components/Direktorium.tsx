"use client"
import React, { useState, useRef, useEffect } from 'react';
import TextFormatter from './TextFormatter';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown, ChevronRight } from "lucide-react";
import { liturgicalData } from './liturgicalData';
import './styles.css';

interface SimpleCalendarProps {
  date: Date;
  onSelect: (date: Date) => void;
}

interface DayWithEntry {
  date: Date;
  liturgy: string;
  notes: string;
  deceased: string;
  deceased_more?: string;  // Neue Property für erweiterte Verstorbenen-Informationen
  prayerTexts: string[] | null;
}

interface LiturgicalEntry {
  liturgy: string;
  notes: string;
  deceased: string;
  deceased_more?: string;  // Neue Property für erweiterte Verstorbenen-Informationen
  prayerTexts: string[] | null;
}

const SimpleCalendar: React.FC<SimpleCalendarProps> = ({ date, onSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date(date));

  const monthNames: string[] = [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember"
  ];

  const weekDays: string[] = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

  const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number): number => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
  };

  const renderCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 w-8" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(year, month, day);
      const isDisabled = currentDate.getFullYear() !== 2024;
      days.push(
        <button
          key={day}
          onClick={() => !isDisabled && onSelect(currentDate)}
          disabled={isDisabled}
          className={`h-8 w-8 rounded-full flex items-center justify-center
            ${isDisabled ? 'text-gray-300' : 'hover:bg-blue-100'}
            ${currentDate.getTime() === new Date(date).setHours(0, 0, 0, 0) ? 'bg-[#626262] text-[#ededed]' : ''}
          `}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="p-4 bg-white rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="px-2 py-1 hover:bg-gray-100 rounded"
        >
          ←
        </button>
        <div className="font-semibold">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </div>
        <button
          onClick={handleNextMonth}
          className="px-2 py-1 hover:bg-gray-100 rounded"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map(day => (
          <div key={day} className="h-8 flex items-center justify-center font-medium text-sm">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {renderCalendarDays()}
      </div>
    </div>
  );
};

const Direktorium: React.FC = () => {
  const monthNames: string[] = [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember"
  ];

  const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const parseDate = (dateString: string): Date => {
    const [day, month, year] = dateString.split('.').map(num => parseInt(num, 10));
    return new Date(year, month - 1, day);
  };


  const isValidDate = (dateString: string): boolean => {
    const regex = /^\d{2}\.\d{2}\.\d{4}$/;
    if (!regex.test(dateString)) return false;

    const date = parseDate(dateString);
    const [day, month, year] = dateString.split('.').map(num => parseInt(num, 10));

    return date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day &&
      year === 2024;
  };

  const getMonthName = (month: number): string => {
    return monthNames[month - 1] || '';
  };

  const getEntryForDate = (date: Date): LiturgicalEntry => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const defaultEntry: LiturgicalEntry = {
      liturgy: "",
      notes: "",
      deceased: "",
      prayerTexts: null
    };

    // Type Assertion für liturgicalData
    const typedLiturgicalData = liturgicalData as {
      [key: number]: {
        [key: number]: {
          [key: number]: LiturgicalEntry;
        };
      };
    };

    if (typedLiturgicalData[year]?.[month]?.[day]) {
      return typedLiturgicalData[year][month][day];
    }

    // Sonst verwende die Standard-Logik für Sonntage
    const weekday = date.getDay();
    if (weekday === 0) {
      return {
        ...defaultEntry,
        liturgy: "Sonntag im " + getMonthName(month),
        prayerTexts: [
          "Morgenlob: 'Dies ist der Tag, den Gott gemacht...'",
          "Mittagsgebet: 'In der Mitte des Tages...'",
          "Vesper: 'Der Sonntag neigt sich seinem Ende...'"
        ]
      };
    }

    return defaultEntry;
  };




  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [dateInput, setDateInput] = useState<string>(formatDate(new Date()));
  const [expandedDays, setExpandedDays] = useState<Set<string>>(new Set());
  const [expandedDeceased, setExpandedDeceased] = useState<Set<string>>(new Set());  // Neue State-Variable
  const listRef = useRef<HTMLDivElement>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

  const toggleExpanded = (dateString: string): void => {
    setExpandedDays(prev => {
      const newSet = new Set(prev);
      if (newSet.has(dateString)) {
        newSet.delete(dateString);
      } else {
        newSet.add(dateString);
      }
      return newSet;
    });
  };

  const toggleDeceasedExpanded = (dateString: string): void => {
    setExpandedDeceased(prev => {
      const newSet = new Set(prev);
      if (newSet.has(dateString)) {
        newSet.delete(dateString);
      } else {
        newSet.add(dateString);
      }
      return newSet;
    });
  };


  const generateDaysOf2024 = (): DayWithEntry[] => {
    const days: DayWithEntry[] = [];
    const startDate = new Date(2024, 0, 1);
    for (let i = 0; i < 366; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      days.push({
        date: currentDate,
        ...getEntryForDate(currentDate)
      });
    }
    return days;
  };

  const [days] = useState<DayWithEntry[]>(generateDaysOf2024());


  const scrollToDate = (date: Date): void => {
    const index = days.findIndex(
      day => formatDate(day.date) === formatDate(date)
    );
    if (index !== -1 && listRef.current) {
      const element = listRef.current.children[index];
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    scrollToDate(selectedDate);
  }, [selectedDate]);

  const handleDateInput = (value: string): void => {
    setDateInput(value);
    if (isValidDate(value)) {
      setSelectedDate(parseDate(value));
    }
  };

  const handleCalendarSelect = (date: Date): void => {
    setSelectedDate(date);
    setDateInput(formatDate(date));
    setIsCalendarOpen(false);
  };

  const navigate = (type: 'prevWeek' | 'prevDay' | 'today' | 'nextDay' | 'nextWeek'): void => {
    const newDate = new Date(selectedDate);

    switch (type) {
      case 'prevWeek':
        newDate.setDate(newDate.getDate() - 7);
        break;
      case 'prevDay':
        newDate.setDate(newDate.getDate() - 1);
        break;
      case 'today':
        newDate.setTime(new Date().getTime());
        break;
      case 'nextDay':
        newDate.setDate(newDate.getDate() + 1);
        break;
      case 'nextWeek':
        newDate.setDate(newDate.getDate() + 7);
        break;
      default:
        return;
    }

    if (newDate.getFullYear() === 2024) {
      setSelectedDate(newDate);
      setDateInput(formatDate(newDate));
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex gap-2 mb-4 items-center">
        <Button onClick={() => navigate('prevWeek')}>«</Button>
        <Button onClick={() => navigate('prevDay')}>‹</Button>
        <Button onClick={() => navigate('today')}>Heute</Button>

        <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
          <PopoverTrigger asChild>
            <div className="relative">
              <Input
                type="text"
                value={dateInput}
                onChange={(e) => handleDateInput(e.target.value)}
                className="w-32 cursor-pointer"
                placeholder="TT.MM.YYYY"
                onClick={() => setIsCalendarOpen(true)}
              />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <SimpleCalendar
              date={selectedDate}
              onSelect={handleCalendarSelect}
            />
          </PopoverContent>
        </Popover>

        <Button onClick={() => navigate('nextDay')}>›</Button>
        <Button onClick={() => navigate('nextWeek')}>»</Button>
      </div>

      <div ref={listRef} className="border rounded-lg h-96 overflow-y-auto">
        {days.map((day, index) => {
          const dateStr = formatDate(day.date);
          const isExpanded = expandedDays.has(dateStr);
          const isDeceasedExpanded = expandedDeceased.has(dateStr);
          const hasExpandableDeceased = day.deceased && day.deceased_more && day.deceased !== day.deceased_more;

          return (
            <div
              key={index}
              className={`p-3 border-b ${dateStr === formatDate(selectedDate)
                ? 'bg-[#626262]'
                : ''
                }`}
            >
              <div className="font-medium mb-1">{dateStr}</div>

              {day.liturgy && (
                <TextFormatter text={day.liturgy} context="liturgy" />
              )}

              {day.notes && (
                <TextFormatter text={day.notes} context="notes" />
              )}
              {day.deceased && (
                <div className="text-sm">
                  {!isDeceasedExpanded && (
                    <>
                      <TextFormatter text={day.deceased} context="deceased" />
                      {hasExpandableDeceased && (
                        <div
                          onClick={() => toggleDeceasedExpanded(dateStr)}
                          className="text-[#8ecccc] hover:text-[#aff4f4] cursor-pointer mt-1 pl-4"
                        >
                          mehr ...
                        </div>
                      )}
                    </>
                  )}

                  {isDeceasedExpanded && day.deceased_more && (
                    <>
                      <TextFormatter text={day.deceased_more} context="deceased" />
                      <div
                        onClick={() => toggleDeceasedExpanded(dateStr)}
                        className="text-[#8ecccc] hover:text-[#aff4f4] cursor-pointer mt-1 pl-4"
                      >
                        weniger ...
                      </div>
                    </>
                  )}
                </div>
              )}

              {day.prayerTexts && (
                <div className="mt-2">
                  <button
                    onClick={() => toggleExpanded(dateStr)}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                  >
                    {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    <span>Texte zum Stundengebet</span>
                  </button>

                  {isExpanded && (
                    <div className="mt-2 pl-4 border-l-2 border-blue-200">
                      {day.prayerTexts.map((text, idx) => (
                        <div key={idx} className="mb-2 text-gray-700">
                          {text}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Direktorium;