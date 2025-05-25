import React, { useState, useMemo, useEffect } from 'react';

const MarAntSelector = ({ season, localPrefLatin, formatPrayerText }) => {
    // Verwende direkt das season-Kürzel zur Identifizierung der Antiphon
    const [selectedAntSeason, setSelectedAntSeason] = useState(null);

    // Definition der Marianischen Antiphonen mit direkter Zuordnung zur liturgischen Zeit
    const marianAntiphons = useMemo(() => [
        // Alma Redemptoris Mater (Advent bis Lichtmess)
        {
            season: "a", // Advent und Weihnachtszeit (w)
            title: "Erhabne Mutter des Erlösers",
            text: "Erhabne Mutter des Erlösers,^ldu allzeit offene Pforte des Himmels^lund Stern des Meeres,^lkomm, hilf deinem Volke,^ldas sich müht, vom Falle aufzustehn.^lDu hast geboren, der Natur zum Staunen,^ldeinen heiligen Schöpfer.^lUnversehrte Jungfrau,^ldie du aus Gabriels Munde^lnahmst das selige Ave,^lo erbarme dich der Sünder.",
            title_lat: "Alma Redemptoris Mater",
            text_lat: "Alma Redemptóris Mater,^lquæ pérvia cæli porta manes^let stella maris, succúrre cadénti,^lsúrgere qui curat, pópulo;^ltu quæ genuísti, natúra miránte,^ltuum sanctum Genitórem,^lVirgo prius ac postérius,^lGabriélis ab ore sumens illud Ave,^lpeccatórum miserére."
        },
        // Ave Regina Caelorum (Fastenzeit, nach Lichtmess)
        {
            season: "q", // Fastenzeit
            title: "Ave, du Himmelskönigin",
            text: "Ave, du Himmelskönigin,^lave, der Engel Herrscherin.^lWurzel, der das Heil entsprossen,^lTür, die uns das Licht erschlossen:^lFreu dich, Jungfrau, voll der Ehre,^lüber allen Seligen Hehre,^lsei gegrüßt, des Himmels Krone,^lbitt für uns bei deinem Sohne.",
            title_lat: "Ave Regina cælorum",
            text_lat: "Ave, Regína cælórum,^lave, Dómina angelórum,^lsalve, radix, salve, porta,^lex qua mundo lux est orta.^lGaude, Virgo gloriósa,^lsuper omnes speciósa;^lvale, o°valde decóra,^let pro nobis Christum exóra."
        },
        // Regina Caeli (Osterzeit)
        {
            season: "o", // Osterzeit
            title: "O Himmelskönigin, frohlocke",
            text: "O Himmelskönigin, frohlocke, Halleluja.^lDenn er, den du zu tragen würdig warst, Halleluja,^list erstanden, wie er sagte. Halleluja.^lBitt Gott für uns, Maria. Halleluja.",
            title_lat: "Regina cæli",
            text_lat: "Regína cæli, lætáre, allelúia,^lquia quem meruísti portáre, allelúia,^lresurréxit sicut dixit, allelúia;^lora pro nobis Deum, allelúia."
        },
        // Salve Regina (Zeit im Jahreskreis)
        {
            season: "j", // Jahreskreis
            title: "Sei gegrüßt, o Königin",
            text: "Sei gegrüßt, o°Königin,^lMutter der Barmherzigkeit;^lunser Leben, unsre Wonne^lund unsre Hoffnung, sei gegrüßt!^lZu dir rufen wir verbannte Kinder Evas;^lzu dir seufzen wir^ltrauernd und weinend in°diesem°Tal°der°Tränen.^lWohlan denn, unsre Fürsprecherin,^lwende deine barmherzigen Augen uns zu^lund nach diesem Elend zeige uns Jesus,^ldie gebenedeite Frucht deines Leibes!^lO gütige, o°milde, o°süße°Jungfrau°Maria!",
            title_lat: "Salve Regina",
            text_lat: "Salve, Regína, mater misericórdiæ,^lvita, dulcédo et spes nostra, salve.^lAd te clamámus, éxsules fílii Evæ.^lAd te suspirámus, geméntes°et°flentes^lin hac lacrimárum valle.^lEia ergo, advocáta nostra,^lillos tuos misericórdes óculos ad°nos°convérte.^lEt Iesum, benedíctum°fructum°ventris°tui,^lnobis post hoc exsílium osténde.^lO clemens, o°pia, o°dulcis°Virgo°María."
        },
        // Sub tuum praesidium (Schutzmantelmadonna - zusätzliche Option)
        {
            season: "u", // Spezielle Markierung für diese Antiphon
            title: "Unter deinen Schutz und Schirm",
            text: "Unter deinen Schutz und Schirm^lfliehen wir, o°heilige Gottesgebärerin;^lverschmähe nicht unser Gebet in°unsern°Nöten,^lsondern erlöse uns jederzeit von°allen°Gefahren,^lo du glorreiche und°gebenedeite°Jungfrau,^lunsere Frau, unsere Mittlerin,^lunsere Fürsprecherin.^lVersöhne uns mit deinem Sohne,^lempfiehl uns deinem Sohne,^lstelle uns vor deinem Sohne.",
            title_lat: "Sub tuum præsidium",
            text_lat: "Sub tuum præsídium confúgimus,^lsancta Dei Génetrix;^lnostras deprecatiónes ne°despícias^lin°necessitátibus,^lsed a perículis cunctis líbera°nos°semper,^lVirgo gloriósa et benedícta.^l^(Dómina nostra, mediátrix°nostra,^ladvocáta nostra,^ltuo Fílio nos reconcília,^ltuo Fílio nos commenda,^ltuo Fílio nos repræsénta!^)"
        },
        // Ave Maria (zusätzliche Option)
        {
            season: "v", // Spezielle Markierung für diese Antiphon
            title: "Gegrüßet seist du, Maria",
            text: "Gegrüßet seist du, Maria, voll der Gnade,^lder Herr ist mit dir;^ldu bist gebenedeit unter den Frauen,^lund gebenedeit die Frucht deines Leibes, Jesus.^lHeilige Maria, Mutter Gottes,^lbitte für uns Sünder^ljetzt und in der Stunde unseres Todes. Amen.",
            title_lat: "Ave Maria",
            text_lat: "Ave, María, grátia plena, Dóminus tecum;^lbenedícta tu in muliéribus,^let benedíctus fructus ventris tui, Iesus.^lSancta María, Mater Dei,^lora pro nobis peccatóribus^lnunc et in hora mortis nostræ. Amen."
        },
    ], []);

    // Effizientere Sortierung basierend auf der Jahreszeit
    const sortedAntiphons = useMemo(() => {
        const antiphons = [...marianAntiphons];

        // Weihnachtszeit verwendet die gleiche Antiphon wie Advent
        const currentSeason = season === 'w' ? 'a' : season;

        // Sortieren: Die Antiphon der aktuellen Jahreszeit kommt zuerst
        return antiphons.sort((a, b) => {
            // Wenn a der aktuellen Jahreszeit entspricht, kommt es zuerst
            if (a.season === season) return -1;
            // Wenn b der aktuellen Jahreszeit entspricht, kommt es zuerst
            if (b.season === season) return 1;
            // Sonst behält die ursprüngliche Reihenfolge bei
            return 0;
        });
    }, [marianAntiphons, season]);

    // Setze Antiphon für aktuelle Jahreszeit als ausgewählt
    useEffect(() => {
        if (sortedAntiphons.length > 0 && !selectedAntSeason) {
            // Verwende für die Weihnachtszeit die Advent-Antiphon
            const currentSeason = season === 'w' ? 'a' : season;

            // Suche die Antiphon für die aktuelle Jahreszeit
            const seasonalAnt = sortedAntiphons.find(ant => ant.season === currentSeason);

            // Wenn gefunden, setze als ausgewählt, sonst nimm die erste
            if (seasonalAnt) {
                setSelectedAntSeason(seasonalAnt.season);
            } else {
                setSelectedAntSeason(sortedAntiphons[0].season);
            }
        }
    }, [sortedAntiphons, selectedAntSeason, season]);

    // Wenn keine Antiphonen verfügbar sind (sollte nicht vorkommen)
    if (sortedAntiphons.length === 0) return null;

    // Wenn nur eine Antiphon verfügbar ist
    if (sortedAntiphons.length === 1) {
        const ant = sortedAntiphons[0];
        return (
            <div className="w-full">
                {formatPrayerText(localPrefLatin ? ant.text_lat : ant.text)}
            </div>
        );
    }

    return (
        <div className="w-full">
            {/* Antiphon-Auswahl-Buttons */}
            {sortedAntiphons.map((ant) => (
                <button
                    key={ant.season}
                    onClick={() => setSelectedAntSeason(ant.season)}
                    className={`w-full text-sm text-left pl-3 pt-1 pb-0 mt-1 rounded
                    ${ant.season === (season === 'w' ? 'a' : season)
                            ? 'btn-blue' : 'btn-default'}
                    ${selectedAntSeason === ant.season
                            ? 'ring-2 ring-yellow-500' : ''}`}                >
                    <div className="flex items-baseline">
                        <div>
                            {localPrefLatin ? ant.title_lat : ant.title}
                        </div>
                    </div>
                </button>
            ))}

            {/* Ausgewählte Antiphon anzeigen */}
            {selectedAntSeason && (
                <div className="mt-5">
                    {formatPrayerText(
                        localPrefLatin
                            ? sortedAntiphons.find(a => a.season === selectedAntSeason)?.text_lat
                            : sortedAntiphons.find(a => a.season === selectedAntSeason)?.text
                    )}
                </div>
            )}
        </div>
    );
};
export default MarAntSelector;