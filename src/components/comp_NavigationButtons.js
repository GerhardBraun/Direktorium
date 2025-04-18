import React from 'react';

const NavigationButtons = ({ hour, onBack, onSelectHour, topButton = false, texts }) => {
    const getNextHours = (currentHour) => {
        switch (currentHour) {
            case 'invitatorium':
                return [
                    { label: 'Lesehore', hour: 'lesehore' },
                    { label: 'Laudes', hour: 'laudes' }
                ];
            case 'lesehore':
                return [
                    { label: 'Laudes', hour: 'laudes' },
                    { label: 'Vesper', hour: 'vesper' }
                ];
            case 'vesper':
                return [
                    { label: '', hour: null },
                    { label: 'Komplet', hour: 'komplet' }
                ];
            default:
                return [];
        }
    };

    const handleHourChange = (nextHour) => {
        if (nextHour) {
            console.log('NavigationButton: ommitOpening=true')
            localStorage.setItem('ommitOpening', 'true')
            // Zuerst zur nächsten Hore wechseln
            onSelectHour(nextHour, texts);
            // Dann nach oben scrollen
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    };

    const shouldShowNavigationButtons = ['invitatorium', 'lesehore', 'vesper'].includes(hour);
    const nextHours = shouldShowNavigationButtons ? getNextHours(hour) : [];

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

    if (!shouldShowNavigationButtons) {
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
        <div className="grid grid-cols-3 gap-2 mb-1">
            <button
                onClick={onBack}
                className="p-2 rounded-sm bg-gray-100 dark:bg-gray-800
                   hover:bg-gray-200 dark:hover:bg-gray-700
                   text-rubric text-left text-sm"
            >
                ← Auswahl
            </button>
            {nextHours.map((nextHour, index) => (
                <button
                    key={index}
                    onClick={() => handleHourChange(nextHour.hour)}
                    disabled={!nextHour.hour}
                    className={`p-2 rounded-sm text-sm
            ${nextHour.hour
                            ? 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-rubric'
                            : 'bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-600 cursor-default'}`}
                >
                    {(nextHour.label ? `${nextHour.label} →` : null)}
                </button>
            ))}
        </div>
    );
};

export default NavigationButtons;