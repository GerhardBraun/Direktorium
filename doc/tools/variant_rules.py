# Korrekte Form, wo die häufigste Form falsch ist oder Gleichstand herrscht
CORRECT = {
    'barathro': 'bárathro', 'basilii': 'basílii', 'caroli': 'cároli', 'constantiæ': 'constántiæ',
    'currite': 'cúrrite', 'devovet': 'dévovet', 'luciæ': 'lúciæ', 'offensione': 'offensióne',
    'perditione': 'perditióne', 'peritura': 'peritúra', 'prædicationes': 'prædicatiónes',
    'precare': 'precáre', 'refoves': 'réfoves', 'similique': 'similíque', 'viderint': 'víderint',
    'instruis': 'ínstruis', 'persecutio': 'persecútio', 'proiectus': 'proiéctus',
}
# Homographen: beide Betonungen können je nach Form/Bedeutung richtig sein
HOMOGRAPH = {
    'cecidit': 'cécidit (cado, fiel) / cecídit (cædo, schlug nieder)',
    'confunderis': 'confúnderis (Präsens) / confundéris (Futur)',
    'eadem': 'éadem (Nom./Akk.) / eádem (Ablativ)',
    'excidit': 'éxcidit (excĭdo, fiel heraus) / excídit (excīdo, schnitt aus)',
    'iacere': 'iácere (werfen) / iacére (liegen)',
    'invenit': 'ínvenit (Präsens) / invénit (Perfekt)',
    'maria': 'María (Name) / mária (Meere)',
    'oblivisceris': 'oblivísceris (Präsens) / obliviscéris (Futur)',
    'præveni': 'prǽveni (Imperativ) / prævéni (Perfekt)',
    'utraque': 'útraque (Nom.) / utráque (Ablativ)',
    'videris': 'víderis (Perf. Konj./Fut. II) / vidéris (Passiv Präsens „du scheinst“)',
}
UNSURE = {
    'anania': 'Ananía oder Anánia? – bitte entscheiden',
    'ioachim': 'Ioáchim oder Ióachim? – bitte entscheiden',
}
_TENEBR = ('tenébr- steht ausschließlich in Hymnen (13×), in allen übrigen Texten durchweg ténebr- (99×). '
           'Vermutlich Akzent nach Versmaß (muta cum liquida: -neb- positionslang) – mit der gedruckten LH abgleichen; '
           'in Hymnen nicht „Alles ersetzen“')
UNSURE.update({'tenebras': _TENEBR, 'tenebris': _TENEBR, 'tenebræ': _TENEBR})
# Vom Benutzer geprüfte Homographen: Gesamtzahl der Vorkommen bei der Prüfung.
# Ändert sich die Zahl, erscheint das Wort wieder im Log.
CHECKED = {'cecidit': 8, 'confunderis': 3, 'excidit': 3, 'maria': 159, 'oblivisceris': 3, 'utraque': 4, 'videris': 3,
           'eadem': 11, 'iacere': 3, 'invenit': 12, 'præveni': 7,
           'tenebras': 32, 'tenebris': 72, 'tenebræ': 17}  # tenébr- nur in Hymnen (Versmaß)
