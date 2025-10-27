import React, { useState, useEffect } from 'react';
import { formatPrayerText } from '../dataHandlers/TextFormatter.js';
import formatBibleRef from '../dataHandlers/BibleRefFormatter.js';
import rufvdevData from "../data/RufvdEv.ts";
import MassReadingsSelector from '../selectors/MassReadingsSelector.js'; // Import des neuen Selectors

const MassReadings = ({
    TitleBar,
    NavigationButtons,
    texts,
    prefSollemnity,
    onBack,
    onSelectHour,
    onPrevDay,
    onNextDay,
}) => {
    // Neuer State für die Auswahl der Lesungsquelle
    const [readingSource, setReadingSource] = useState('oblig');

    const setOfResp = ['',
        'Herr Jesus, dir sei Ruhm und Ehre!',
        'Lob dir, Christus, König und Erlöser!',
        'Christus, du ewiges Wort des Vaters, Ehre sei dir!',
    ]

    // Standardwerte für readingSource setzen
    useEffect(() => {
        if (texts?.messe?.oblig?.ms_les_text || texts?.messe?.oblig?.ms_ev_text) {
            setReadingSource('oblig');
        } else if (texts?.messe?.wt?.ms_les_text || texts?.messe?.wt?.ms_ev_text) {
            setReadingSource('wt');
        }
    }, [texts]);

    // Daten aus der ausgewählten Quelle holen, nicht mehr fest aus 'wt'
    const {
        ms_aps_stelle, ms_aps_kv, ms_aps_text,
        ms_ruf_stelle, ms_ruf_text,
    } = texts?.messe?.[readingSource] || {}

    let ruf_stelle = ms_ruf_stelle || '',
        ruf_text = ms_ruf_text || '';
    const rufData = rufvdevData?.[ms_ruf_text]

    if (rufData) {
        ruf_stelle = rufData.Stelle;
        ruf_text = rufData.Text;
    }

    let resp = 'Halleluja.',
        respWithRepeat = 'Halleluja. Halleluja.'
    if (texts?.season === 'q') {
        if (texts?.swdCombined === 'q-6-0')
            resp = 'Christus Sieger, Christus°König, Christus°Herr°in°Ewigkeit!'
        else {
            let index = Math.ceil(texts?.dayOfWeek / 2)
            if (!index) index = (texts?.yearABC.toLowerCase().charCodeAt(0) - 96)
            resp = setOfResp[index]
        }
        respWithRepeat = resp + '°^r–°Kv^0r'
    }

    const Reading = ({ type, title }) => {
        // Hier werden die Daten aus der ausgewählten Quelle verwendet
        const book = texts?.messe?.[readingSource]?.[`ms_${type}_buch`];
        const stelle = texts?.messe?.[readingSource]?.[`ms_${type}_stelle`];
        const motto = texts?.messe?.[readingSource]?.[`ms_${type}_motto`];
        const text = texts?.messe?.[readingSource]?.[`ms_${type}_text`];

        if (!text) return null;

        return (
            <div >
                <h2 className="prayer-heading">{title}</h2>
                <div className="mb-2 text-[0.9em] text-gray-400">
                    <div>
                        {formatBibleRef(book + " " + stelle)}
                    </div>
                    <div className=" leading-[1.1em] italic">
                        {formatPrayerText(motto)}
                    </div>
                </div>
                <div>{formatPrayerText(text)}</div>
            </div>
        );
    };

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
                    <MassReadingsSelector
                        texts={texts}
                        readingSource={readingSource}
                        setReadingSource={setReadingSource}
                        className="mb-4"
                    />
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-sm shadow pl-2 pr-6 py-1">
                <div className="mb-0">
                    {/* Erste Lesung */}
                    <Reading type="les" title="ERSTE LESUNG" />

                    {/* Antwortpsalm */}
                    {ms_aps_text && (
                        <div className="my-8">
                            <h2 className="prayer-heading">ANTWORTPSALM</h2>
                            <div className="mb-3 text-[0.9em] text-gray-400">
                                {formatBibleRef(ms_aps_stelle)}
                            </div>
                            {ms_aps_kv && (
                                <div className="mb-3">
                                    {formatPrayerText(ms_aps_kv + '°^r–°Kv^0r', '', 'Kv°°')}
                                    {ms_aps_kv.includes('^APSHALL') && (
                                        <div >
                                            <span className='text-rubric'>(
                                                <span className='italic text-[0.9em]'>Oder:</span>
                                            </span>
                                            {formatPrayerText('°Halleluja.^)')}
                                        </div>
                                    )}
                                </div>
                            )}
                            {formatPrayerText('^P' + ms_aps_text + '°^r–°Kv^0r', '', 'Aps')}
                        </div>
                    )}

                    {/* Zweite Lesung */}
                    <Reading type="les2" title="ZWEITE LESUNG" />

                    {/* Ruf vor dem Evangelium */}
                    {ruf_text && (
                        <div className="my-8">
                            <h2 className="prayer-heading">RUF VOR DEM EVANGELIUM</h2>
                            {ruf_stelle && (
                                <div className="mb-1 text-[0.9em] text-gray-400">
                                    {formatBibleRef(ruf_stelle)}
                                </div>
                            )}
                            <div >
                                {formatPrayerText(respWithRepeat)}
                            </div>
                            <div className="mt-2 mb-2">
                                {formatPrayerText(ruf_text)}
                            </div>
                            <div >
                                {formatPrayerText(resp)}
                            </div>
                        </div>
                    )}

                    {/* Evangelium */}
                    <Reading type="ev" title="EVANGELIUM" />
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
        </div >
    );
};

export { MassReadings };