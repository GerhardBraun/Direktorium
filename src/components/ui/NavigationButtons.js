import React from 'react';

const NavigationButtons = ({ hour, onBack, onSelectHour, topButton = false, texts }) => {
    const getNextHours = (currentHour) => {
        switch (currentHour) {
            case 'invitatorium':
                return [
                    { label: 'Lesehore', name: 'lesehore' },
                    { label: 'Laudes', name: 'laudes' }
                ];
            case 'lesehore':
                return [
                    { label: 'Laudes', name: 'laudes' },
                    { label: 'Vesper', name: 'vesper' }
                ];
            case 'laudes':
                return [
                    { label: 'Lesehore', name: 'lesehore' },
                    { label: 'Terz/Sext/Non', name: 'terz', span: '3' }
                ];
            case 'terz':
            case 'sext':
            case 'non':
                return [
                    { label: 'Lesehore', name: 'lesehore' },
                    { label: 'Vesper', name: 'vesper' }
                ];
            case 'vesper':
                return [
                    { label: 'Marian. Ant.', name: 'komplet' },
                    { label: 'Komplet', name: 'komplet' }
                ];
            case 'komplet':
                return [
                    { label: 'zurück zur Vesper', name: 'vesper' },
                    ''
                ];
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
                ? '7' : ''
        };
    }

    const handleHourChange = (nextHour) => {
        const { name, label } = nextHour;
        // Wenn kein name angegeben ist, nichts tun
        if (!name) return;
        localStorage.setItem('ommitOpening',
            ['invitatorium', 'lesehore'].includes(hour)
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
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    };

    const nextHours = getNextHours(hour);
    const { alignment, singleButton, columns } = getGridClass(nextHours)


    if (topButton) {
        return (
            <div className="grid grid-cols-4 gap-0 mb-2">
                <button
                    onClick={onBack}
                    className="pl-2 rounded-sm bg-gray-100 dark:bg-gray-800
                   hover:bg-gray-200 dark:hover:bg-gray-700
                   text-rubric text-left text-sm"
                >
                    ← Auswahl
                </button>
                <div className="col-span-2 pr-4 rounded-sm text-center font-bold">
                    {(hour === 'erstev') ? 'Erste Vesper' : hour.charAt(0).toUpperCase() + hour.slice(1)}
                </div>
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
            >
                ← zurück zur Stundengebetauswahl
            </button>
        );
    }

    return (
        <div className={`grid grid-cols-${columns ? columns : '6'} gap-2 mb-1`}>
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
                        className={`col-span-${nextHour?.span ? nextHour.span : '2'} p-2 rounded-sm text-sm
                            ${nextHour.name
                                ? 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-rubric'
                                : 'bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-600 cursor-default'}`}
                    >
                        {(nextHour.label ? `${nextHour.label} →` : null)}
                    </button>
                ))
            )}
        </div>
    );
};

export default NavigationButtons;