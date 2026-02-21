import React, { useState, useEffect } from 'react';

export const NavigationButtons = ({
    hour, onBack, onSelectHour, topButton = false, texts, prefSollemnity = '',
}) => {
    // Zustand für das Fixieren
    const [isDocked, setIsDocked] = useState(false);

    // Beim Laden prüfen, ob der Zustand in localStorage gespeichert ist
    useEffect(() => {
        const savedDockState = localStorage.getItem('isDocked');
        if (savedDockState) {
            setIsDocked(savedDockState === 'true');
        }
    }, []);

    // Effekt zum Anwenden des Docking-Verhaltens
    useEffect(() => {
        const headerElements = document.querySelectorAll('.prayer-header-container');
        if (headerElements.length > 0) {
            if (isDocked) {
                // CSS für das Fixieren anwenden, aber mit niedrigerem z-index
                headerElements.forEach(element => {
                    element.classList.add('sticky', 'top-14', 'z-[9]', 'bg-white', 'dark:bg-gray-900', 'pb-0', 'pt-0', 'shadow-md');

                    // Stelle sicher, dass keine z-index-bezogene CSS-Eigenschaft einen neuen Stacking Context erzeugt
                    element.style.isolation = 'auto'; // explizit auf auto setzen
                });
            } else {
                // CSS für das Fixieren entfernen
                headerElements.forEach(element => {
                    element.classList.remove('sticky', 'top-14', 'z-[9]', 'bg-white', 'dark:bg-gray-900', 'pb-0', 'pt-0', 'shadow-md');
                    element.style.isolation = 'auto';
                });
            }
        }
    }, [isDocked]);

    // Funktion zum Umschalten des Andock-Zustands
    const toggleDocked = () => {
        const newDockState = !isDocked;
        setIsDocked(newDockState);
        localStorage.setItem('isDocked', newDockState.toString());
    };

    const getNextHours = (currentHour) => {
        switch (currentHour) {
            case 'invitatorium':
                return [
                    { label: 'Lesehore', name: 'lesehore' },
                    { label: 'Laudes', name: 'laudes' }];
            case 'morning':
                return [
                    { label: 'Laudes', name: 'laudes' },
                    { label: 'Terz/Sext/Non', name: 'terz', span: 'col-span-3' }];
            case 'vigil':
            case 'lesehore':
                return [
                    { label: 'Terz/Sext/Non', name: 'terz', span: 'col-span-3' },
                    { label: 'Vesper', name: 'vesper' }];
            case 'laudes':
                return [
                    { label: 'Lesehore', name: 'lesehore' },
                    { label: 'Terz/Sext/Non', name: 'terz', span: 'col-span-3' }];
            case 'terz':
            case 'sext':
            case 'non':
                return [
                    { label: 'Lesehore', name: 'lesehore' },
                    { label: 'Vesper', name: 'vesper' }];
            case 'erstev':
            case 'vesper':
                return [
                    { label: 'Marian. Ant.', name: 'komplet' },
                    { label: 'Komplet', name: 'komplet' }];
            case 'komplet':
                return [
                    { label: 'zurück zur Vesper', name: 'vesper', arrow: '\u00a0←\u00a0\u00a0', span: 'col-span-3' },
                    { label: 'Komplet', name: 'komplet', arrow: '\u00a0↑\u00a0\u00a0' }];
            default:
                return [];
        }
    };

    const getGridClass = (nextHours) => {
        let alignment = ''
        if (nextHours?.length === 1) alignment = 'right'
        else if (nextHours?.length === 2) {
            if (!nextHours[0]?.name) alignment = 'right'
            else if (!nextHours[1]?.name) alignment = 'left'
        }

        let singleButton = nextHours[0].label || nextHours[1].label || ''
        singleButton =
            alignment === 'left' ? '\u00A0←\u00A0' + singleButton
                : alignment === 'right' ? singleButton + '\u00A0→\u00A0\u00A0\u00A0'
                    : ''

        return {
            alignment,
            singleButton,
            columns: (nextHours[0]?.span || nextHours[1]?.span)
                ? 'grid-cols-7' : 'grid-cols-6'
        };
    }

    const handleHourChange = (nextHour) => {
        const { name, label, arrow = '' } = nextHour;
        // Wenn kein name angegeben ist, nichts tun
        if (!name) return;
        localStorage.setItem('ommitOpening',
            ['invitatorium', 'lesehore', 'vigil'].includes(hour)
                ? 'true' : 'false');
        // Zuerst zur nächsten Hore wechseln
        onSelectHour(name, texts);

        // Scroll-Verhalten je nach Label
        if (label.startsWith('Marian') || label.startsWith('zurück')) {
            // 50 Millisekunden warten, bis DOM aktualisiert ist, dann nach unten scrollen
            setTimeout(() => {
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }, 50);
        } else {
            window.scrollTo({
                top: 0,
                behavior: `${arrow.includes('↑') ? 'smooth' : 'instant'}`
            });
        }
    };

    const now = new Date();
    const hourToRead = (now.getHours() < 11 && ['vigil', 'lesehore'].includes(hour))
        ? 'morning' : hour
    const nextHours = getNextHours(hourToRead);

    if (topButton) {
        const hourToDisplay =
            (hour === 'erstev' || (hour === 'vesper' && texts?.rank?.hasErsteVesper && !prefSollemnity))
                ? 'Erste Vesper'
                : (hour === 'vesper' && (texts?.rank?.hasZweiteVesper || ['kirchw', 'soll'].includes(prefSollemnity)))
                    ? 'Zweite Vesper'
                    : hour.charAt(0).toUpperCase() + hour.slice(1)

        if (hour === 'vigil')
            return (
                <div className="mb-2 pr-4 grid grid-columns-3 gap-1"
                    aria-hidden="true"
                    style={{ gridTemplateColumns: `minmax(auto, 1fr) auto minmax(auto, 1fr)` }}
                >
                    <button
                        onClick={() => {
                            onSelectHour('lesehore', texts)
                            setTimeout(() => {
                                const bookmark = document.getElementById('scroll-to-TeDeum');
                                if (bookmark) {
                                    bookmark.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'  // Element am oberen Rand positionieren, kombiniert mit scroll-mt- bei der id
                                    });
                                }
                            }, 50);
                        }}
                        className="text-left long-rubric mt-1 whitespace-nowrap"
                    >
                        &nbsp;&nbsp;←&nbsp;&nbsp;zurück zur Lesehore
                    </button>
                    <div className="text-center font-bold">
                        Vigil
                    </div>
                    <button
                        onClick={toggleDocked}
                        className="text-right long-rubric mt-1"
                    >
                        {isDocked ? 'Lösen' : 'Fixieren'}&nbsp;&nbsp;
                    </button>
                </div>
            ); else return (
                <div className="pr-4 grid grid-cols-4 gap-0 mb-2"
                    aria-hidden="true">
                    <button
                        onClick={onBack}
                        className="pl-2 rounded-sm bg-gray-100 dark:bg-gray-800
                   hover:bg-gray-200 dark:hover:bg-gray-700
                   text-rubric text-left text-sm"
                    >
                        ← Auswahl
                    </button>
                    <div className="col-span-2 rounded-sm text-center font-bold">
                        {hourToDisplay}
                    </div>
                    <button
                        onClick={toggleDocked}
                        className="pl-2 rounded-sm bg-gray-100 dark:bg-gray-800
                   hover:bg-gray-200 dark:hover:bg-gray-700
                   text-rubric text-sm"
                    >
                        {isDocked ? 'Lösen' : 'Fixieren'}&nbsp;&nbsp;
                    </button>
                </div>
            );
    }

    if (!nextHours || nextHours.length === 0) {
        return (
            <button
                onClick={onBack}
                className="w-full p-2 mb-1 rounded-sm bg-gray-100 dark:bg-gray-800
                   hover:bg-gray-200 dark:hover:bg-gray-700
                   text-rubric text-left text-sm"
                aria-hidden="true">
                ← zurück zur Stundengebetauswahl
            </button>
        );
    }

    const { alignment, singleButton, columns } = getGridClass(nextHours)

    return (
        <div
            className={`grid ${columns} gap-2 mb-1`}
            aria-hidden="true">
            <button
                onClick={onBack}
                className="col-span-2 p-2 rounded-sm bg-gray-100 dark:bg-gray-800
                   hover:bg-gray-200 dark:hover:bg-gray-700
                   text-rubric text-left text-sm"
            >
                ← Auswahl
            </button>
            {alignment ? (
                // Wenn nur ein Button: 2/3 der Breite, rechtsbündig
                <button
                    onClick={() => handleHourChange(nextHours[0])}
                    className={`col-span-4 p-2 rounded-sm text-sm
                        text-${alignment}
                        bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-rubric`}
                >
                    {singleButton}
                </button>
            ) : (
                // Wenn mehrere Buttons: normale Verteilung
                nextHours.map((nextHour, index) => (
                    <button
                        key={index}
                        onClick={() => handleHourChange(nextHour)}
                        disabled={!nextHour.name}
                        className={`p-2 rounded-sm text-sm
                            ${nextHour?.span ? nextHour.span : 'col-span-2'}
                            ${nextHour?.arrow ? 'text-left' : ''}
                            ${nextHour.name
                                ? 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-rubric'
                                : 'bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-600 cursor-default'}`}
                    >
                        {(nextHour.label
                            ? `${nextHour?.arrow
                                ? nextHour.arrow + nextHour.label
                                : nextHour.label + '\u00a0\u00a0→'}`
                            : null)}
                    </button>
                ))
            )}
        </div>
    );
};