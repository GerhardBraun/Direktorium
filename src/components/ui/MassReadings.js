import React, { useState, useEffect } from 'react';
import { formatPrayerText } from '../dataHandlers/TextFormatter.js';
import formatBibleRef from '../dataHandlers/BibleRefFormatter.js';
import rufvdevData from "../data/RufvdEv.ts";

const MassReadingsSelector = ({
    texts,
    readingSource,
    setReadingSource,
    className = ''
}) => {
    if (!texts) return null;

    let sourceKeys = ['wt', 'oblig', 'd1', 'd2', 'n1', 'n2', 'n3', 'n4', 'n5', 'd11', 'd12', 'mar'];
    if (texts?.rank?.date > 2) sourceKeys = ['oblig', 'wt'];

    // Helper function to check if a source has valid readings
    const hasValidReadings = (source) => {
        return !!(texts?.messe?.[source]?.ms_les_text || texts?.messe?.[source]?.ms_ev_text);
    };

    // Helper function for button colors
    const getButtonColor = (source) => {
        if (texts.dateCompare === '11-02' && source === 'oblig')
            return 'btn-violett';
        if (source === 'wt') {
            const season = texts?.season || 'j';
            if (season === 'j') return 'btn-green'
            else if (['a', 'q'].includes(season)) return 'btn-violett'
            else return 'btn-white';
        };

        const color = texts?.laudes?.[source]?.farbe;
        return color?.charAt(0)?.toLowerCase() === 'r' ? 'btn-red' : 'btn-white';
    };

    const getButtonName = (source) => {
        if (texts.dateCompare === '11-02' && source === 'oblig')
            return 'Allerseelen';
        if (source === 'wt')
            return texts?.dayOfWeek === 0 ? 'Vom Sonntag' : 'Vom Wochentag';
        return texts.laudes[source]?.button?.replace(/°/g, '\u00a0')
            || "ein Heiliger";
    };

    return (
        <div className={`space-y-1 ${className}`}>
            {/* Source Selection Buttons */}
            {sourceKeys.map(source => {
                if (!hasValidReadings(source)) return null;

                return (
                    <button
                        key={source}
                        onClick={() => setReadingSource(source)}
                        className={`w-full p-1 pt-2 text-sm text-center rounded-sm
                                  ${getButtonColor(source)}
                                  ${readingSource === source ? 'ring-2 ring-yellow-500' : ''}`}
                    >
                        {getButtonName(source)}
                    </button>
                );
            })}
        </div>
    );
};

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
    const [readingSource, setReadingSource] = useState('wt');

    const setOfResp = ['',
        'Herr Jesus, dir sei Ruhm und Ehre!',
        'Lob dir, Christus, König und Erlöser!',
        'Christus, du ewiges Wort des Vaters, Ehre sei dir!',
    ]

    // Standardwerte für readingSource setzen
    useEffect(() => {
        if (texts?.rank?.date > 2 &&
            (texts?.messe?.oblig?.ms_les_text || texts?.messe?.oblig?.ms_ev_text)) {
            setReadingSource('oblig');
        } else if (texts?.messe?.wt?.ms_les_text || texts?.messe?.wt?.ms_ev_text) {
            setReadingSource('wt');
        }
    }, [texts]);

    const {
        ms_aps_stelle, ms_aps_kv, ms_aps_text,
        ms_ruf_stelle, ms_ruf_text,
    } = texts?.messe?.[readingSource] || {}

    const kvRepeat = ms_aps_kv ? '°^r–°Kv^0r' : '';

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
    }
    if (texts?.dateCompare === '11-02')
        resp = setOfResp[2]

    if (!resp.startsWith('Halleluja'))
        respWithRepeat = resp + '°^r–°Kv^0r'

    const Reading = ({ type, title }) => {

        const data = texts?.messe?.[readingSource];
        if (!data || (!data[`ms_${type}_text`])) return null;

        const book = data?.[`ms_${type}_buch`];
        const stelle = data?.[`ms_${type}_stelle`];
        const motto = data?.[`ms_${type}_motto`];
        const text = data?.[`ms_${type}_text`];

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
                                    {formatPrayerText(ms_aps_kv + kvRepeat + '^P', '', 'Kv°°')}
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
                            {formatPrayerText(ms_aps_text + kvRepeat, '', 'Aps')}
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