import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/dialog';

// Singleton für den Dialog-Zustand
const dialogState = {
    isOpen: false,
    chapter: null,
    setIsOpen: null,
    setChapter: null
};

// Dialog-Komponente
export const ReferenceDialog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [chapter, setChapter] = useState(null);

    // Initialisiere dialogState beim Mounting
    useEffect(() => {
        dialogState.setIsOpen = setIsOpen;
        dialogState.setChapter = setChapter;

        // Dialog-Handler beim Mounting initialisieren
        const handleDialogClick = (event) => {
            const button = event.target.closest('button[data-reference]');
            if (button) {
                const chapter = button.getAttribute('data-reference');
                setChapter(chapter);
                setIsOpen(true);
            }
        };

        // Event-Listener für Dialog-Klicks hinzufügen
        document.addEventListener('click', handleDialogClick);

        // Cleanup beim Unmounting
        return () => {
            document.removeEventListener('click', handleDialogClick);
            dialogState.setIsOpen = null;
            dialogState.setChapter = null;
        };
    }, []);

    if (!chapter) return null;

    const referenceData = referenceMap[chapter];
    if (!referenceData) return null;


    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{referenceData.title}</DialogTitle>
                </DialogHeader>
                <div className="mt-0">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        Kapitel {chapter}
                    </div>
                    <div
                        className="text-gray-900 dark:text-gray-100 leading-[1.2] whitespace-pre-line [&_.dialog-title]:text-lg [&_.dialog-title]:font-semibold [&_.dialog-title]:mb-4"
                        dangerouslySetInnerHTML={{
                            __html: referenceData.content
                                .split('^l')
                                .join('\n')
                        }}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};

// Globaler Dialog-Handler
window.openDialog = (chapter) => {
    if (dialogState.setIsOpen && dialogState.setChapter) {
        dialogState.setChapter(chapter);
        dialogState.setIsOpen(true);
    }
};

// Mapping der Referenzen zu ihren Inhalten
const referenceMap = {
    "I.C.10": {
        title: "Hinweise zum Ablass",
        content: "„Ablass ist der Nachlass zeitlicher Strafe vor Gott für Sünden, deren Schuld schon getilgt ist; ihn erlangt der entsprechend disponierte Gläubige unter bestimmten festgelegten Voraussetzungen durch die Hilfe der Kirche, die im Dienst an der Erlösung den Schatz der Sühneleistungen Christi und der Heiligen autoritativ verwaltet und zuwendet“ (can. 992 CIC). ^l„Jeder Gläubige kann Teilablässe oder vollkommene Ablässe für sich selbst gewinnen oder fürbittweise Verstorbenen zuwenden“ (can. 994 CIC). ^lDie nach der Vergebung der Schuld noch verbleibenden Sündenstrafen können in diesem Leben durch Gebet und Opfer gesühnt werden. Sie werden aber auch durch einen vollkommenen Ablass getilgt. ^lDen Verstorbenen, die in der Gnade Gottes aus diesem Leben scheiden, jedoch noch Sündenstrafen im Fegfeuer (Purgatorium, Reinigungsort) erleiden müssen, können wir fürbittweise Ablässe zukommen lassen. ^l^lZur Gewinnung des Ablasses gehören: ^la) <b>die allgemeinen Bedingungen</b>: sakramentale Beichte mit entschlossener Abkehr von jeder Sünde, Eucharistieempfang und Gebet nach der Meinung des Hl. Vaters (z.B. Vaterunser und Glaubensbekenntnis, oder ein anderes Gebet nach freier Wahl). Diese Bedingungen können erfüllt werden auch mehrere Tage vor oder nach dem Ablasstag. Es muss aber jede Anhänglichkeit an eine Sünde ausgeschlossen sein;^lb) <b>eine besondere Bedingung</b>, die dem jeweiligen Ablasstag entspricht. ^lFehlt die volle Disposition oder bleibt eine der Bedingungen unerfüllt, gewinnt man einen Teilablass (vgl. Enchiridion Indulgentiarum, 3. Aufl. 1986, pag. 73, n. 65).^l"
    },
    "I.C.1": {
        title: "Hinweise zur Sonn- und Feiertagspflicht",
        content: "An den kirchlich gebotenen Feiertagen gilt für die Gläubigen die Pflicht zur Teilnahme an einer Messfeier (die am Tag oder Vorabend erfüllt werden kann) und zur Enthaltung von dem Sonn- bzw. Feiertag nicht gemäßer Arbeit (Halten der Sonn- und Feiertagsruhe) (vgl. cann. 1247f CIC; KKK 2180–2185 und 2041–‍2043). ^lMessfeiern, die im Radio oder Fernsehen übertragen werden, „sind kein Ersatz für solche Messfeiern, die von den Gläubigen in räumlicher Gegenwart mitzufeiern sind“ (Partikularnorm Nr. 8 der DBK, Abschnitt 4, S. 81, in: KA 1995, Nr. 153).^l^l<div class=\"dialog-title\">Hinweise zur Applikationspflicht</div>Für alle Pfarrer und Inhaber einer Pfarrkuratie sowie die Pfarradministratoren gilt an diesen Tagen die Applikationspflicht, die darin besteht, eine Heilige Messe für die lebenden Glieder ihrer Gemeinden zu applizieren. ^lPfarrer usw., die eine andere Pfarrei oder Pfarrkuratie mitverwalten, können durch eine und dieselbe Heilige Messe der Applikationspflicht für alle ihnen anvertrauten Pfarreien (Pfarrkuratien) genügen. ^lWenn ein Pfarrer an einem Applikationstag rechtmäßig verhindert ist, kann er die Applikationsmesse entweder von einem anderen Priester am Tage selbst halten lassen oder sie selbst an einem anderen Tag halten. Unterlassene Applikationsmessen müssen baldmöglichst in voller Anzahl nachgeholt werden (vgl. cann. 388; 534; 543 CIC)."
    },
    "I.C.7": {
        title: "Hinweise zu den Bitttagen",
        content: "„Die Feier der Bitttage soll dort, wo sie im religiösen Leben oder Brauchtum der Gemeinde verwurzelt ist und weiterhin beibehalten werden kann, an einem oder mehreren Tagen vor Christi Himmelfahrt erhalten bleiben. ^lIhre Feier soll den unterschiedlichen örtlichen und menschlichen Gegebenheiten auch tatsächlich entsprechen. ^lWünschenswert ist eine Einbeziehung aller wesentlichen Bereiche und Gefährdungen des gegenwärtigen Lebens in die Bittgottesdienste.“ (Beschluss der DBK vom Februar 1972)^lVgl. Neues Werkbuch zum Gotteslob. Bd. IV: Heiligenfeste und besondere Tage im Kirchenjahr, 1994, 204–211."
    },
    "II.C.4": {
        title: "Hinweise zur Kommemoration",
        content: "An den Wochentagen in der Zeit vom 17. bis 31. Dezember und an denen der Fastenzeit können Gedenktage (sowohl gebotene als auch nichtgebotene) nur kommemoriert werden. ^lDie Kommemoration ist nie verpflichtend, auch nicht zu Heiligengedächtnissen, die sonst gebotene Gedenktage sind.^l^l<!-- Die Texte für die Kommemoration im Stundengebet finden sich oben.^l --><b>In der Messe</b> kann das Tagesgebet vom Heiligen genommen werden, nicht aber Gaben- und Schlussgebet. Die Lesungen werden vom Wochentag, nicht vom Heiligen genommen."
    },
    "I.C.16c": {
        title: "Hinweise zur zweimaligen Kommunion",
        content: "Wer bereits kommuniziert hat, kann die hl. Kommunion am selben Tag nur innerhalb einer Eucharistiefeier, an der er teilnimmt, ein zweites Mal empfangen; außerhalb einer Eucharistiefeier nur in Todesgefahr (can. 917 CIC; vgl. RS 95)."
    },
    "I.C.9": {
        title: "Hinweis zur „Sollemnitas externa“",
        content: "Wenn ein Herrenfest des Generalkalenders oder irgendein Hochfest, das bei den Gläubigen beliebt ist, auf einen Wochentag fällt, so darf es in der Zeit im Jahreskreis am folgenden oder am vorhergehenden Sonntag in allen Messen mit größeren Teilnehmerzahlen gefeiert werden, vorausgesetzt, dass seelsorgliche Gründe dies empfehlen und der betreffende Sonntag nicht durch ein Hochfest oder Allerseelen besetzt ist (Grundordnung des Kirchenjahres Nr. 58, MB I, Seite 85*)."
    },
    "III.D.3": {
        title: "Hinweise zu Votivmessen und Messen in besonderen Anliegen",
        content: "An gebotenen Gedenktagen (mit der Angabe „Ms vom Hl“), an den Wochentagen des Advents und der Weihnachtszeit (außer der Zeit vom 17. bis 31. Dezember) sowie der Osterzeit (nach der Osteroktav) (mit der Angabe „Ms vom Tag“), an denen Votivmessen und Messen für besondere Anliegen eigentlich nicht gestattet sind, kann man, sofern eine echte Notwendigkeit oder die pastorale Situation es erfordert, in Gemeindemessen das dem Anliegen oder der Situation entsprechende Formular verwenden. Die Entscheidung liegt beim Rektor der Kirche oder dem zelebrierenden Priester. ^lDies gilt auch für die Votivmessen am Priesterdonnerstag (monatlicher Gebetstag um geistliche Berufe), am Herz-Jesu-Freitag und am Herz-Mariä-Samstag (MB 679), wenn im Direktorium diese Messen als „nur bedingt erlaubt“ bezeichnet werden."
    },
    "III.D.8a": {
        title: "Hinweis zur Beerdigungsmesse",
        content: "Die Beerdigungsmesse ist erlaubt an allen Tagen außer an gebotenen Hochfesten, Gründonnerstag, im Triduum Paschale sowie an den Sonntagen der Advents-, Fasten- und Osterzeit (Änderung von AEM 336 in der 2. Aufl. des Missale Romanum). Wenn an solchen Tagen eine Beerdigung zu halten ist, so soll damit ein Wortgottesdienst gemäß dem neuen Rituale „Die Begräbnisfeier“, Seite 42, verbunden werden (von Gründonnerstag bis Karsamstag ohne Austeilung der hl. Kommunion)."
    }
    // Weitere Referenzen hier ergänzen
};

const createReferenceHTML = (reference, includeParentheses = false) => {
    if (reference.includes('S.\u00A087')) {
        const linkText = includeParentheses ? '(mehr...)' : 'mehr...';
        return `<a href="https://www.direktorium.bistum-fulda.de" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="text-blue-600 dark:text-blue-400 hover:underline">
                   ${linkText}
                </a>`;
    }

    const chapterMatch = reference.match(/s\.\u00A0o\.\u00A0Kap\.\u00A0([IVXLCDM]+\.[A-Z]\.\d{1,2}\.?[a-z]?)/);
    if (!chapterMatch) return reference;

    const chapter = chapterMatch[1].replace(/\.$/, '');
    if (!referenceMap[chapter]) return reference;

    const buttonText = includeParentheses ? '(mehr...)' : 'mehr...';
    return `<button 
              class="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
              data-reference="${chapter}"
              style="display: inline-flex; vertical-align: baseline; white-space: nowrap;"
              type="button">
              ${buttonText}
            </button>`;
};

export const parseTextWithReferences = (text) => {
    if (!text) return '';

    // Erweiterte Pattern für Referenzen mit optionalen Klammern
    const websitePattern = /\(?s\.\u00A0o\.\u00A0S\.\u00A087,\sNr\.\u00A03\)?/g;
    const chapterPattern = /\(?s\.\u00A0o\.\u00A0Kap\.\u00A0[IVXLCDM]+\.[A-Z]\.\d{1,2}\.?[a-z]?\)?/g;
    const combinedPattern = new RegExp(`(${websitePattern.source}|${chapterPattern.source})`, 'g');

    return text.replace(combinedPattern, (match) => {
        const hasParentheses = match.startsWith('(') && match.endsWith(')');
        const reference = match.replace(/^\(|\)$/g, '').trim();
        return createReferenceHTML(reference, hasParentheses);
    });
};

export default ReferenceDialog;