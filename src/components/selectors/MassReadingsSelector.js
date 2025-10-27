import React from 'react';

// Modified sourceKeys to include 'wt' after 'oblig'
export const sourceKeys = ['oblig', 'wt', 'd1', 'd2', 'n1', 'n2', 'n3', 'n4', 'n5', 'd11', 'd12', 'mar'];

// Helper function to format text
const formatText = (text) => {
    return text?.replace(/Â°/g, '\u00a0')
};

const MassReadingsSelector = ({
    texts,
    readingSource,
    setReadingSource,
    className = ''
}) => {
    if (!texts) return null;

    // Helper function to check if a source has valid readings
    const hasValidReadings = (source) => {
        return !!(texts?.messe?.[source]?.ms_les_text || texts?.messe?.[source]?.ms_ev_text);
    };

    // Helper function for button colors
    const getButtonColor = (source) => {
        if (source === 'wt') return 'btn-green';

        const color = texts?.laudes?.[source]?.farbe;
        return color?.charAt(0)?.toLowerCase() === 'r' ? 'btn-red' : 'btn-white';
    };

    // Function to handle source selection
    const handleSourceSelect = (source) => {
        setReadingSource(source);
    };

    return (
        <div className={`space-y-1 ${className}`}>
            {/* Source Selection Buttons */}
            {sourceKeys.map(source => {
                if (!hasValidReadings(source)) return null;

                return (
                    <button
                        key={source}
                        onClick={() => handleSourceSelect(source)}
                        className={`w-full p-1 pt-2 text-sm text-center rounded-sm
                                  ${getButtonColor(source)}
                                  ${readingSource === source ? 'ring-2 ring-yellow-500' : ''}`}
                    >
                        {source === 'wt'
                            ? 'Vom Wochentag'
                            : formatText(texts.laudes[source]?.button) || "ein Heiliger"}
                    </button>
                );
            })}
        </div>
    );
};

export default MassReadingsSelector;