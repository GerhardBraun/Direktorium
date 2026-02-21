import React from 'react';
import { ordinarium } from '../utils/ordinarium.js';
import { formatPsalm, formatPrayerText } from '../dataHandlers/TextFormatter.js';
import formatBibleRef from '../dataHandlers/BibleRefFormatter.js';

const MatutinDisplay = ({
    texts,
    localPrefLanguage = '',
    localPrefLatin = false,
    TitleBar,
    NavigationButtons,
    onBack,
    onSelectHour,
    onPrevDay,
    onNextDay,
}) => {
    // Hole die Matutin-Daten
    const { matEinführung, matBuch, matStelle, matText,
        matPsalm, matAnt, matOration }
        = ordinarium('matutin', 'lesehore', localPrefLatin, true);
    const { closing, vu: TeDeum } = ordinarium(texts, 'lesehore', localPrefLatin, true);
    const ordinalZahlen = ['ERSTE', 'ZWEITE', 'DRITTE', 'VIERTE']

    return (
        <div className="leading-[1.33em] pb-8">
            <TitleBar
                onPrevDay={onPrevDay}
                onNextDay={onNextDay}
                swdWritten={'Ostersonntag'}
                padding="pr-4"
            />
            <NavigationButtons
                hour="lesehore"
                topButton={true}
                onBack={onBack}
                onSelectHour={onSelectHour}
                texts={texts}
            />

            <div className="bg-white dark:bg-gray-800 rounded-sm shadow pl-2 pr-6 pb-1">
                <div className="mt-2 pt-3 long-rubric">
                    {formatPrayerText(matEinführung)}
                </div>


                {/* Vier Lesungen mit Psalmen und Orationen */}
                {matBuch.map((buch, index) => {
                    if (!buch) return null;

                    return (
                        <div key={`lesung-${index}`} className="mb-6">
                            {/* Lesung */}
                            <div className="mb-4">
                                <h2 className="prayer-heading">{`${ordinalZahlen[index]} LESUNG`}</h2>
                                <div className="mb-2">
                                    <span className='mr-3'>{formatPrayerText(buch)}</span>
                                    <span className='inline-block whitespace-nowrap text-[0.9em] text-gray-400'>
                                        {formatBibleRef(matStelle[index])}
                                    </span>
                                </div>
                                {matText[index] && (
                                    <div>{formatPrayerText(matText[index])}</div>
                                )}
                            </div>

                            {/* Psalm mit Antiphon (außer nach der 4. Lesung) */}
                            {matPsalm[index] > 0 && (
                                <div className="mb-4">
                                    <h2 className="prayer-heading">ANTWORTPSALM</h2>
                                    {matAnt[index] && (
                                        <div className="mb-3">
                                            {formatPrayerText(matAnt[index], 'Ant.°°')}
                                        </div>
                                    )}
                                    {formatPsalm(matPsalm[index], false, localPrefLanguage)}
                                    {matAnt[index] && (
                                        <div className="mb-0">
                                            {formatPrayerText(matAnt[index], 'Ant.°°')}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Oration (außer nach der 3. und 4. Lesung) */}
                            {matOration[index] && (
                                <div className="mb-4">
                                    <h2 className="prayer-heading">ORATION</h2>
                                    <div className="whitespace-pre-wrap">
                                        {formatPrayerText(matOration[index])}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}

                {/* Te Deum */}
                {TeDeum && (
                    <div className="mb-4">
                        <h2 className="prayer-heading">TE DEUM</h2>
                        <div className="mb-4 whitespace-pre-wrap">
                            {formatPrayerText(TeDeum)}
                        </div>
                    </div>
                )}

                {closing[2] && (
                    <div className="mt-2 long-rubric"
                        aria-hidden="true">
                        {closing[2]}
                    </div>
                )}


                {/* Abschluss-Oration */}
                {matOration[4] && (
                    <div className="mb-4">
                        <h2 className="prayer-heading">ORATION</h2>
                        <div className="whitespace-pre-wrap">
                            {formatPrayerText(matOration[4])}
                        </div>
                    </div>
                )}

                {/* Abschluss */}
                {closing[0] && (
                    <div className="mb-4">
                        <h2 className="prayer-heading">ABSCHLUSS</h2>
                        <div className="flex gap-0">
                            {formatPrayerText(closing[0], "V°°")}
                        </div>
                        <div className="flex gap-0">
                            {formatPrayerText(closing[1], "R°°")}
                        </div>
                    </div>
                )}
            </div>

            {/* Navigation */}
            <div className="mt-2">
                <NavigationButtons
                    hour="lesehore"
                    onBack={onBack}
                    onSelectHour={onSelectHour}
                    texts={texts}
                />
            </div>
        </div>
    );
};


export { MatutinDisplay };