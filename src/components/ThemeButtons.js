import React from 'react';

const ThemeButtons = ({ theme, handleThemeChange }) => {
    return (
        <div className="flex gap-1">
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    handleThemeChange(false);
                }}
                className={`
          flex-1 px-2 py-1 text-center text-sm rounded transition-colors
          ${theme === 'light'
                        ? 'bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }
        `}
                tabIndex={-1}
            >
                hell
            </button>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    handleThemeChange(true);
                }}
                className={`
          flex-1 px-2 py-1 text-center text-sm rounded transition-colors
          ${theme === 'dark'
                        ? 'bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }
        `}
                tabIndex={-1}
            >
                dunkel
            </button>
        </div>
    );
};

export default ThemeButtons;