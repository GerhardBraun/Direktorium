import React from 'react';
import { ordinarium } from '../utils/ordinarium.js';
import { formatPsalm, formatPrayerText } from '../dataHandlers/TextFormatter.js';
import formatBibleRef from '../dataHandlers/BibleRefFormatter.js';

const MassReadings = ({
    TitleBar,
    NavigationButtons,
    SourceSelector,
    hour,
    texts,
    selectedDate,
    title,
    viewMode,
    prefSrc,
    setPrefSrc,
    prefSollemnity,
    setPrefSollemnity,
    useCommemoration,
    setUseCommemoration,

    localPrefLanguage = '',
    localPrefLatin = false,
    setlocalPrefLatin,
    setlocalprefLanguage,
    onBack,
    onSelectHour,
    onPrevDay,
    onNextDay,
}) => {
    // Hole die Daten
    const {
        ms_les_buch, ms_les_stelle, ms_les_motto, ms_les_text,
        ms_aps_stelle, ms_aps_kv, ms_aps_text,
        ms_les2_buch, ms_les2_stelle, ms_les2_motto, ms_les2_text,
        ms_ruf_text,
        ms_ev_buch, ms_ev_stelle, ms_ev_motto, ms_ev_text,
    } = texts?.messe?.wt
    const { matEinführung, matBuch, matStelle, matText,
        matPsalm, matAnt, matOration }
        = ordinarium('matutin', 'lesehore', localPrefLatin, true);
    const { closing, vu: TeDeum } = ordinarium(texts, 'lesehore', localPrefLatin, true);
    const ordinalZahlen = ['ERSTE', 'ZWEITE', 'DRITTE', 'VIERTE']

    return (
        <div className="leading-[1.33em] pb-8">
            <div className="prayer-header-container">
                <TitleBar
                    title={''}
                    onPrevDay={onPrevDay}
                    onNextDay={onNextDay}
                    swdWritten={texts?.swdWritten}
                    padding="pr-4"
                />
                <NavigationButtons
                    hour={'messe'}
                    topButton={true}
                    onBack={onBack}
                    onSelectHour={onSelectHour}
                    texts={texts}
                    prefSollemnity={prefSollemnity}
                />
                <div className="bg-white dark:bg-gray-800 rounded-sm shadow pl-2 pr-6 pb-1">
                    <SourceSelector
                        texts={texts}
                        prefSrc={prefSrc}
                        prefSollemnity={prefSollemnity}
                        useCommemoration={useCommemoration}
                        setPrefSrc={setPrefSrc}
                        setPrefSollemnity={setPrefSollemnity}
                        setUseCommemoration={setUseCommemoration}
                        onSelectHour={onSelectHour}
                        viewMode={viewMode}
                        season={texts.season}
                        hour={hour}
                        className="mb-4"
                    />
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-sm shadow pl-2 pr-6 py-1">

                <div className="mb-6">
                    {/* Lesung */}
                    {ms_les_text && (
                        <div className="mb-4">
                            <h2 className="prayer-heading">ERSTE LESUNG</h2>
                            <div className="mb-2 text-[0.9em] text-gray-400">
                                <div>
                                    {formatBibleRef(ms_les_buch + " " + ms_les_stelle)}
                                </div>
                                <div className=" leading-[1.1em] italic">
                                    {formatPrayerText(ms_les_motto)}
                                </div>
                            </div>
                            <div>{formatPrayerText(ms_les_text)}</div>
                        </div>
                    )}
                    {/* Antwortpsalm mit Antiphon */}
                    {ms_aps_text && (
                        <div className="mb-4">
                            <h2 className="prayer-heading">ANTWORTPSALM</h2>
                            <div className="mb-2 text-[0.9em] text-gray-400">
                                {formatBibleRef(ms_aps_stelle)}
                            </div>
                            {ms_aps_kv && (
                                <div className="mb-3">
                                    {formatPrayerText(ms_aps_kv + '°^r–°Kv^0r', '', 'Kv°°')}
                                </div>
                            )}
                            {formatPrayerText('' + ms_aps_text + '°^r–°Kv^0r', '', 'Aps')}
                        </div>
                    )}
                    {/* Lesung */}
                    {ms_les2_text && (
                        <div className="mb-4">
                            <h2 className="prayer-heading">ZWEITE LESUNG</h2>
                            <div className="mb-2 text-[0.9em] text-gray-400">
                                <div>
                                    {formatBibleRef(ms_les2_buch + " " + ms_les2_stelle)}
                                </div>
                                <div className=" leading-[1.1em] italic">
                                    {formatPrayerText(ms_les2_motto)}
                                </div>
                            </div>
                            <div>{formatPrayerText(ms_les2_text)}</div>
                        </div>
                    )}
                    {/* Evangelium */}
                    {ms_ev_text && (
                        <div className="mb-4">
                            <h2 className="prayer-heading">EVANGELIUM</h2>
                            <div className="mb-2 text-[0.9em] text-gray-400">
                                <div>
                                    {formatBibleRef(ms_ev_buch + " " + ms_ev_stelle)}
                                </div>
                                <div className=" leading-[1.1em] italic">
                                    {formatPrayerText(ms_ev_motto)}
                                </div>
                            </div>
                            <div>{formatPrayerText(ms_ev_text)}</div>
                        </div>
                    )}

                </div>


            </div>

            {/* Navigation */}
            <div className="mt-2">
                <NavigationButtons
                    hour="messe"
                    onBack={onBack}
                    onSelectHour={onSelectHour}
                    texts={texts}
                />
            </div>
        </div>
    );
};


export { MassReadings };