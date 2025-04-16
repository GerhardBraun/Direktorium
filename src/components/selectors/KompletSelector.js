import React from 'react';

const KompletSelector = ({
    texts,
    localPrefKomplet,
    setLocalPrefKomplet,
    className = ''
}) => {
    // Extrahiere die Show-Flags und den Standard-Wert aus den Texten
    const showKompletWt = texts?.komplet?.showKompletWt ?? true;
    const showKompletK1 = texts?.komplet?.showKompletK1 ?? true;
    const showKompletK2 = texts?.komplet?.showKompletK2 ?? true;
    const defaultKomplet = texts?.komplet?.prefKomplet || 'wt';
    const askSelection = !showKompletWt && defaultKomplet === 'wt'

    // Funktion zum Behandeln der Button-Klicks
    const handleKompletSelect = (value) => {
        if ((value === 'wt' && showKompletWt) ||
            (value === 'k1' && showKompletK1) ||
            (value === 'k2' && showKompletK2)) {
            setLocalPrefKomplet(value);
        }
    };

    // Gemeinsame Button-Styles
    const getButtonStyle = (value) => {
        const isSelected = localPrefKomplet === value;
        const isDefault = value === defaultKomplet;
        const isDisabled = (value === 'wt' && !showKompletWt) ||
            (value === 'k1' && !showKompletK1) ||
            (value === 'k2' && !showKompletK2);
        //console.log('KompletSelector: value/isDefault', value, isDefault)
        return `p-1 pt-2 text-sm ${(askSelection && value === 'wt') ? 'text-right' : 'text-center'} rounded-sm
            ${isDefault ? `text-rubric` : isDisabled ? 'text-gray-400 dark:text-gray-600' :
                'text-gray-900 dark:text-gray-100'}
            bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700
            ${isSelected ? 'ring-2 ring-yellow-500' : ''}`;
    };

    return (
        <div className={`grid grid-cols-11 gap-2 ${className}`}>
            <button
                onClick={() => handleKompletSelect('wt')}
                className={`col-span-5 ${getButtonStyle('wt')}`}
            >
                {askSelection ? 'Bitte wählen Sie:' : 'Komplet vom Wochentag'}
            </button>
            <button
                onClick={() => handleKompletSelect('k1')}
                className={`col-span-3 ${getButtonStyle('k1')}`}
            >
                nach der&nbsp;1.&nbsp;Vp
            </button>
            <button
                onClick={() => handleKompletSelect('k2')}
                className={`col-span-3 ${getButtonStyle('k2')}`}
            >
                nach der&nbsp;2.&nbsp;Vp
            </button>
        </div>
    );
};

export default KompletSelector;