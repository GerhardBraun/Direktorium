import React from 'react';
import { formatPrayerText } from '../dataHandlers/TextFormatter.js';

const TitleBar = ({ title, onPrevDay, onNextDay, swdWritten, padding = '' }) => {
    return (
        <div className={`${padding} flex items-center justify-between mb-2`}>
            <button
                onClick={onPrevDay}
                className="shrink-0 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                title="Vorheriger Tag"
            >
                ‹
            </button>
            <div className="px-2 text-center">
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {title}
                </h1>
                {swdWritten && (
                    <div className={`text-base text-gray-600 dark:text-gray-400`}>
                        {swdWritten}
                    </div>
                )}
            </div>
            <button
                onClick={onNextDay}
                className="shrink-0 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                title="Nächster Tag"
            >
                ›
            </button>
        </div>
    );
};

export default TitleBar;