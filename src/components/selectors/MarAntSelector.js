import React, { useState, useMemo, useEffect } from 'react';

const MarAntSelector = ({ season, selectedDate, swdCombined, localPrefLatin, formatPrayerText }) => {
    // Verwende direkt das season-Kürzel zur Identifizierung der Antiphon
    const [selectedAntSeason, setSelectedAntSeason] = useState(null);
    const [Assumption, setAssumption] = useState(false);
    const [Nativity, setNativity] = useState(false);

    const suffixLatin = useMemo(() => {
        return localPrefLatin ? '_lat' : '';
    }, [localPrefLatin]);

    // Definition der Marianischen Antiphonen mit direkter Zuordnung zur liturgischen Zeit
    const marianAntiphons = useMemo(() => [
        {
            season: "a", // Advent und Weihnachtszeit (w)
            color: (season === 'a') ? "btn-violett"
                : (Nativity) ? "btn-gold" : "btn-default",
            title: "Erhabne Mutter des Erlösers",
            text: "Erhabne Mutter des Erlösers,^ldu allzeit offene Pforte des Himmels^lund Stern des Meeres,^lkomm, hilf deinem Volke,^ldas sich müht, vom Falle aufzustehn.^lDu hast geboren, der Natur zum Staunen,^ldeinen heiligen Schöpfer.^lUnversehrte Jungfrau,^ldie du aus Gabriels Munde^lnahmst das selige Ave,^lo erbarme dich der Sünder.",
            title_lat: "Alma Redemptoris Mater",
            text_lat: "Alma Redemptóris Mater,^lquæ pérvia cæli porta manes^let stella maris, succúrre cadénti,^lsúrgere qui curat, pópulo;^ltu quæ genuísti, natúra miránte,^ltuum sanctum Genitórem,^lVirgo prius ac postérius,^lGabriélis ab ore sumens illud Ave,^lpeccatórum miserére."
        },
        {
            season: "q", // Fastenzeit
            color: (season === 'q') ? "btn-violett"
                : (Assumption) ? "btn-gold" : "btn-default",
            title: "Ave, du Himmelskönigin",
            text: "Ave, du Himmelskönigin,^lave, der Engel Herrscherin.^lWurzel, der das Heil entsprossen,^lTür, die uns das Licht erschlossen:^lFreu dich, Jungfrau, voll der Ehre,^lüber allen Seligen Hehre,^lsei gegrüßt, des Himmels Krone,^lbitt für uns bei deinem Sohne.",
            title_lat: "Ave Regina cælorum",
            text_lat: "Ave, Regína cælórum,^lave, Dómina angelórum,^lsalve, radix, salve, porta,^lex qua mundo lux est orta.^lGaude, Virgo gloriósa,^lsuper omnes speciósa;^lvale, o°valde decóra,^let pro nobis Christum exóra."
        },
        {
            season: "j", // Jahreskreis
            color: (season === 'j') ? "btn-green" : "btn-default",
            title: "Sei gegrüßt, o Königin",
            text: "Sei gegrüßt, o°Königin,^lMutter der Barmherzigkeit;^lunser Leben, unsre Wonne^lund unsre Hoffnung, sei gegrüßt!^lZu dir rufen wir verbannte Kinder Evas;^lzu dir seufzen wir^ltrauernd und weinend in°diesem°Tal°der°Tränen.^lWohlan denn, unsre Fürsprecherin,^lwende deine barmherzigen Augen uns zu^lund nach diesem Elend zeige uns Jesus,^ldie gebenedeite Frucht deines Leibes!^lO gütige, o°milde, o°süße°Jungfrau°Maria!",
            title_lat: "Salve Regina",
            text_lat: "Salve, Regína, mater misericórdiæ,^lvita, dulcédo et spes nostra, salve.^lAd te clamámus, éxsules fílii Evæ.^lAd te suspirámus, geméntes°et°flentes^lin hac lacrimárum valle.^lEia ergo, advocáta nostra,^lillos tuos misericórdes óculos ad°nos°convérte.^lEt Iesum, benedíctum°fructum°ventris°tui,^lnobis post hoc exsílium osténde.^lO clemens, o°pia, o°dulcis°Virgo°María."
        },
        {
            season: "u", // Spezielle Markierung für diese Antiphon
            color: "btn-default",
            title: "Unter deinen Schutz und Schirm",
            text: "Unter deinen Schutz und Schirm^lfliehen wir, o°heilige Gottesgebärerin;^lverschmähe nicht unser Gebet in°unsern°Nöten,^lsondern erlöse uns jederzeit von°allen°Gefahren,^lo du glorreiche und°gebenedeite°Jungfrau,^lunsere Frau, unsere Mittlerin,^lunsere Fürsprecherin.^lVersöhne uns mit deinem Sohne,^lempfiehl uns deinem Sohne,^lstelle uns vor deinem Sohne.",
            title_lat: "Sub tuum præsidium",
            text_lat: "Sub tuum præsídium confúgimus,^lsancta Dei Génetrix;^lnostras deprecatiónes ne°despícias^lin°necessitátibus,^lsed a perículis cunctis líbera°nos°semper,^lVirgo gloriósa et benedícta.^l^(Dómina nostra, mediátrix°nostra,^ladvocáta nostra,^ltuo Fílio nos reconcília,^ltuo Fílio nos comménda,^ltuo Fílio nos repræsénta!^)"
        },
        {
            season: "v", // Spezielle Markierung für diese Antiphon
            color: "btn-default",
            title: "Gegrüßet seist du, Maria",
            text: "Gegrüßet seist du, Maria, voll der Gnade,^lder Herr ist mit dir;^ldu bist gebenedeit unter den Frauen,^lund gebenedeit die Frucht deines Leibes, Jesus.^lHeilige Maria, Mutter Gottes,^lbitte für uns Sünder^ljetzt und in der Stunde unseres Todes. Amen.",
            title_lat: "Ave Maria",
            text_lat: "Ave, María, grátia plena, Dóminus tecum;^lbenedícta tu in muliéribus,^let benedíctus fructus ventris tui, Iesus.^lSancta María, Mater Dei,^lora pro nobis peccatóribus^lnunc et in hora mortis nostræ. Amen."
        },
        {
            season: "o", // Osterzeit
            color: (season === 'o') ? "btn-gold mb-2" : "btn-default mt-2",
            rubric: "Diese Antiphon ist der Osterzeit vorbehalten.",
            rubric_lat: "Hæc antiphona reservata est tempori paschali.",
            title: (season === 'o') ? "O Himmelskönigin, frohlocke" : "[O Himmelskönigin, frohlocke]",
            text: "O Himmelskönigin, frohlocke, Halleluja.^lDenn er, den du zu tragen würdig warst, Halleluja,^list erstanden, wie er sagte. Halleluja.^lBitt Gott für uns, Maria. Halleluja.",
            title_lat: (season === 'o') ? "Regina cæli" : "[Regina cæli]",
            text_lat: "Regína cæli, lætáre, allelúia,^lquia quem meruísti portáre, allelúia,^lresurréxit sicut dixit, allelúia;^lora pro nobis Deum, allelúia."
        },
    ], [season, Assumption, Nativity]);

    // Funktion zur Bestimmung der Standardantiphon basierend auf besonderen Regeln
    const getDefaultAntiphonSeason = useMemo(() => {
        // Spezifische Datumsausnahmen prüfen
        if (selectedDate) {
            const month = selectedDate.getMonth() + 1; // getMonth() ist 0-basiert
            const day = selectedDate.getDate();

            // 15.8. (Mariä Himmelfahrt) und 22.8. (Maria Königin) -> Ave Regina Caelorum (q)
            if ((month === 8 && [14, 15, 22].includes(day))) {
                setAssumption(true);
                return 'q';
            }
            else { setAssumption(false); }
        }

        // Weihnachtszeit einschl. Fest der Taufe Jesu -> Alma Redemptoris Mater (a)
        if (season === 'w' || swdCombined === 'j-1-0') {
            setNativity(true);
            return 'a';
        }
        else { setNativity(false); }

        // Sonst verwende die normale Jahreszeit
        return season;
    }, [selectedDate, swdCombined, season]);

    // Effizientere Sortierung basierend auf der berechneten Standardantiphon
    const sortedAntiphons = useMemo(() => {
        const antiphons = [...marianAntiphons];
        const defaultSeason = getDefaultAntiphonSeason;

        // Sortieren: Die Standardantiphon kommt zuerst
        return antiphons.sort((a, b) => {
            // Wenn a der Standardantiphon entspricht, kommt es zuerst
            if (a.season === defaultSeason) return -1;
            // Wenn b der Standardantiphon entspricht, kommt es zuerst
            if (b.season === defaultSeason) return 1;
            // Sonst behält die ursprüngliche Reihenfolge bei
            return 0;
        });
    }, [marianAntiphons, getDefaultAntiphonSeason]);

    // Setze die berechnete Standardantiphon als ausgewählt
    useEffect(() => {
        if (sortedAntiphons.length > 0 && !selectedAntSeason) {
            const defaultSeason = getDefaultAntiphonSeason;

            // Suche die Antiphon für die berechnete Standardzeit
            const seasonalAnt = sortedAntiphons.find(ant => ant.season === defaultSeason);

            // Wenn gefunden, setze als ausgewählt, sonst nimm die erste
            if (seasonalAnt) {
                setSelectedAntSeason(seasonalAnt.season);
            } else {
                setSelectedAntSeason(sortedAntiphons[0].season);
            }
        }
    }, [sortedAntiphons, selectedAntSeason, getDefaultAntiphonSeason]);

    // Wenn keine Antiphonen verfügbar sind (sollte nicht vorkommen)
    if (sortedAntiphons.length === 0) return null;

    // Wenn nur eine Antiphon verfügbar ist
    if (sortedAntiphons.length === 1) {
        const ant = sortedAntiphons[0];
        return (
            <div className="w-full">
                {formatPrayerText(ant[`text${suffixLatin}`])}
            </div>
        );
    }

    const selectedAntiphon = sortedAntiphons.find(ant => ant.season === selectedAntSeason);
    if (!selectedAntiphon) return null; // Sicherheitscheck, falls keine Antiphon gefunden wird

    return (
        <div className="w-full">
            {/* Antiphon-Auswahl-Buttons */}
            {sortedAntiphons.map((ant) => (
                <button
                    key={ant.season}
                    onClick={() => setSelectedAntSeason(ant.season)}
                    className={`w-full text-sm text-left pl-3 pt-1 pb-0 mt-1 rounded
                    ${ant.color}
                    ${selectedAntSeason === ant.season
                            ? 'ring-2 ring-yellow-500' : ''}`}                >
                    <div className="flex items-baseline">
                        <div>
                            {ant[`title${suffixLatin}`]}
                        </div>
                    </div>
                </button>
            ))}

            {/* Ausgewählte Antiphon anzeigen */}
            {selectedAntSeason && (
                <div>
                    {(season !== 'o' && selectedAntiphon?.[`rubric${suffixLatin}`]) && (
                        <div className='long-rubric mt-4 -mb-4'>
                            {selectedAntiphon[`rubric${suffixLatin}`]}
                        </div>
                    )}
                    <div className="mt-5">
                        {formatPrayerText(selectedAntiphon[`text${suffixLatin}`])}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MarAntSelector;