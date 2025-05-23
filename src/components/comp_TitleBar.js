import React from 'react';

const TitleBar = ({ title, onPrevDay, onNextDay, liturgicalInfo }) => {
    return (
        <div className="flex items-center justify-between mb-2">
            <button
                onClick={onPrevDay}
                className="shrink-0 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                title="Vorheriger Tag"
            >
                ‹
            </button>
            <div className="text-center">
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {title}
                </h1>
                {liturgicalInfo && (
                    <div className="text-base text-gray-600 dark:text-gray-400">
                        {liturgicalInfo.writtenSWD}
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