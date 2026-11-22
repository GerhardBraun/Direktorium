import React from 'react';
import { SELECTOR_PANEL_LIKE_MENU } from './SourceSelector.js';

const KompletSelector = ({
    texts,
    userPrefs = {},
    setPref,
    className = ''
}) => {
    // Extrahiere die Show-Flags und den Standard-Wert aus den Texten
    const {
        showKompletWt = true,
        prefKomplet = 'wt'
    } = texts?.komplet || {};
    const askSelection = !showKompletWt && prefKomplet === 'wt'

    // Funktion zum Behandeln der Button-Klicks
    const handleKompletSelect = (value) => {
        if ((value === 'wt' && showKompletWt) || value.includes('k'))
            setPref('komplet', value);
    };

    // Hintergrund der Buttons wie bei den prefSollemnity-Buttons im SourceSelector:
    // steht die Box im Dunkelmodus auf dem Menü-Hintergrund (gray-900, s. SELECTOR_PANEL_LIKE_MENU),
    // haben die Buttons dieselbe Farbe, Hover mit gray-800; sonst wie bisher auf der Textbox (gray-800)
    const buttonBg = SELECTOR_PANEL_LIKE_MENU
        ? 'bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800'
        : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700';

    // Gemeinsame Button-Styles
    const getButtonStyle = (value) => {
        const isSelected = value === userPrefs.komplet;
        const isDefault = value === prefKomplet;
        const isDisabled = value === 'wt' && !showKompletWt

        //console.log('KompletSelector: value/isDefault', value, isDefault)
        return `p-1 pt-2 text-sm ${(askSelection && value === 'wt') ? 'text-right pr-3' : 'text-center'} rounded-sm
            ${isDefault ? 'text-yellow-600 dark:text-yellow-500' : isDisabled ? 'text-gray-400 dark:text-gray-600' :
                'text-gray-900 dark:text-gray-100'}
            ${buttonBg}
            ${isSelected ? 'ring-2 ring-[#b6a03a]' : ''}`;
    };

    return (
        <div className={`grid grid-cols-11 gap-2 ${className}`}
            aria-hidden="true">
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