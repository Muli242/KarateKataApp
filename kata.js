class Kata {
    constructor(name = "", kanji = "", length = "", movements = 0, meaning = "", embusen = "", info = "", urlDKV = "", urlJKA = "", urlPDF = "", ignore = false) {
        this.name = name;
        this.kanji = kanji;
        this.length = length;
        this.movements = movements;
        this.meaning = meaning;
        this.embusen = embusen;
        this.info = info;
        // Automated fallback to channel search if no specific URL is provided
        this.urlDKV = urlDKV || `https://www.youtube.com/results?search_query=site%3Ayoutube.com%2F%40BudocenterKaramitsos+${name.replace(/ /g, '+')}`;
        this.urlJKA = urlJKA || `https://www.youtube.com/results?search_query=site%3Ayoutube.com%2F%40japankarateassociation2049+${name.replace(/ /g, '+')}`;
        // Standard PDF naming convention: pdf/Kata_Name.pdf
        this.urlPDF = urlPDF || `pdf/${name.replace(/ /g, '_')}.pdf`;
        this.ignore = ignore;
    }
}

const KATA_DATA = [
    {
        "name": "Taikyoku Shodan",
        "kanji": "太極初段",
        "length": "25 s",
        "movements": 20,
        "meaning": "Erste Ursache",
        "embusen": "ko",
        "info": "Die Anfänger-Kata. Lehrt die absoluten Grundlagen: Gedan-Barai, Oi-Zuki und Zenkutsu-Dachi.",
        "urlDKV": "https://www.youtube.com/watch?v=S8LqJ4u5G6E",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Heian Shodan",
        "kanji": "平安初段",
        "length": "25 s",
        "movements": 21,
        "meaning": "Friedvoller Geist, Stufe 1",
        "embusen": "ko",
        "info": "Die erste der fünf Heian-Katas. Führt grundlegende Blöcke wie Age-Uke und Shuto-Uke ein und festigt die Basisstände.",
        "urlDKV": "https://www.youtube.com/watch?v=fMJmGAxlIi0",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Heian Nidan",
        "kanji": "平安二段",
        "length": "25 s",
        "movements": 26,
        "meaning": "Friedvoller Geist, Stufe 2",
        "embusen": "ko",
        "info": "Führt den Seitenfußtritt (Yoko-Geri) und den Rückfaustschlag (Uraken) sowie fließende Rhythmuswechsel ein.",
        "urlDKV": "https://www.youtube.com/watch?v=t4OwIAuIs6c",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Heian Sandan",
        "kanji": "平安三段",
        "length": "25 s",
        "movements": 20,
        "meaning": "Friedvoller Geist, Stufe 3",
        "embusen": "tei",
        "info": "Fokus auf den Reiterstand (Kiba-Dachi), Befreiungstechniken und die Körperdrehung (Tai-Sabaki) im Nahkampf.",
        "urlDKV": "https://www.youtube.com/watch?v=TLbcsR72VKY",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Heian Yondan",
        "kanji": "平安四段",
        "length": "30 s",
        "movements": 27,
        "meaning": "Friedvoller Geist, Stufe 4",
        "embusen": "tsuchi",
        "info": "Führt offene Hand-Techniken, Juji-Uke (Kreuzblock) und schnelle, dynamische Trittkombinationen wie Mae-Geri ein.",
        "urlDKV": "https://www.youtube.com/watch?v=8or9gAlUgbc",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Heian Godan",
        "kanji": "平安五段",
        "length": "30 s",
        "movements": 23,
        "meaning": "Friedvoller Geist, Stufe 5",
        "embusen": "tei",
        "info": "Beinhaltet den Wasser-Sprung (Mizu-Nagare) und wechselt kontinuierlich zwischen äußerst tiefen und hohen Ständen.",
        "urlDKV": "https://www.youtube.com/watch?v=VUwCnGTIvr0",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Tekki Shodan",
        "kanji": "鉄騎初段",
        "length": "25 s",
        "movements": 29,
        "meaning": "Eiserner Reiter, Stufe 1",
        "embusen": "ichi",
        "info": "Wird komplett auf einer Linie im tiefen Kiba-Dachi ausgeführt. Simuliert den Kampf auf engem Raum z.B. an einer Wand.",
        "urlDKV": "https://www.youtube.com/watch?v=TUFzr8XjXjY",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Tekki Nidan",
        "kanji": "鉄騎二段",
        "length": "30 s",
        "movements": 24,
        "meaning": "Eiserner Reiter, Stufe 2",
        "embusen": "ichi",
        "info": "Die Fortsetzung von Tekki Shodan. Beinhaltet komplexe Abwehren und extrem schnelle Hebeltechniken aus dem sicheren Reiterstand.",
        "urlDKV": "https://www.youtube.com/watch?v=nVSgKz6y4rs",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Tekki Sandan",
        "kanji": "鉄騎三段",
        "length": "30 s",
        "movements": 36,
        "meaning": "Eiserner Reiter, Stufe 3",
        "embusen": "ichi",
        "info": "Die komplexeste der Tekki-Katas. Erfordert extremen Einsatz der Hüfte (Koshi) für die Kraftgenerierung auf kürzester Distanz.",
        "urlDKV": "",
        "urlJKA": "https://www.youtube.com/watch?v=i0z6mdJhdrY",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Bassai Dai",
        "kanji": "披塞大",
        "length": "50 s",
        "movements": 42,
        "meaning": "Die Festung stürmen, groß",
        "embusen": "tei",
        "info": "Eine dynamische, immens kraftvolle Kata, die symbolisch den 'Sturm auf eine Festung' meistert. Beinhaltet extrem starke Wendungen.",
        "urlDKV": "https://www.youtube.com/watch?v=a6h0NGv3x4Y",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Bassai Sho",
        "kanji": "披塞小",
        "length": "60 s",
        "movements": 28,
        "meaning": "Die Festung stürmen, klein",
        "embusen": "tei",
        "info": "Die kleinere, aber fließendere Schwester von Bassai Dai. Ausgeprägter Fokus auf Abwehr gegen Hebel- und lange Stockangriffe (Bo).",
        "urlDKV": "https://www.youtube.com/watch?v=zPxDs8iIeNI",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Kanku Dai",
        "kanji": "観空大",
        "length": "90 s",
        "movements": 65,
        "meaning": "In den Himmel schauen, groß",
        "embusen": "tsuchi",
        "info": "Die längste Standardkata und Ursprung der Heian-Formen. Beginnt symbolisch mit dem namensgebenden 'Blick in den Himmel'.",
        "urlDKV": "https://www.youtube.com/watch?v=hKPUOfgC2uI",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Kanku Sho",
        "kanji": "観空小",
        "length": "50 s",
        "movements": 39,
        "meaning": "In den Himmel schauen, klein",
        "embusen": "tsuchi",
        "info": "Schneller und sprunggewaltiger als Kanku Dai. Zeichnet sich durch zwei spektakuläre Sprünge und einen tief verwurzelten Stand aus.",
        "urlDKV": "https://www.youtube.com/watch?v=C5eUUoPtSHo",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Empi",
        "kanji": "燕飛",
        "length": "60 s",
        "movements": 37,
        "meaning": "Flug der Schwalbe",
        "embusen": "tei",
        "info": "Berühmt für ihre schnellen, leichtfüßigen Auf- und Abbewegungen, das tiefe Ausweichen und den markanten drehenden Sprung am Ende.",
        "urlDKV": "",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Jion",
        "kanji": "慈恩",
        "length": "60 s",
        "movements": 47,
        "meaning": "Liebe und Güte (Tempel)",
        "embusen": "ko",
        "info": "Eine sehr geradlinige, powervolle Kata ohne große Schnörkel. Der Fokus liegt ganz auf sauberen Basis-Schlägen und dem festen Zenkutsu-Dachi.",
        "urlDKV": "",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Hangetsu",
        "kanji": "半月",
        "length": "60 s",
        "movements": 41,
        "meaning": "Halbmond",
        "embusen": "ju",
        "info": "Einzige Kata, die extreme isometrische Ganzkörperspannung und tiefe Atmung im speziellen Hangetsu-Dachi-Stand (Mond-Stand) trainiert.",
        "urlDKV": "",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Jitte",
        "kanji": "十手",
        "length": "60 s",
        "movements": 26,
        "meaning": "Zehn Hände",
        "embusen": "ju",
        "info": "Bedeutet 'Zehn Hände' und soll gegen mehrere Angreifer wappnen. Beinhaltet Abwehren von Stöcken und den auffälligen Yama-Gamae-Doppelblock.",
        "urlDKV": "",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Gankaku",
        "kanji": "岩鶴",
        "length": "60 s",
        "movements": 42,
        "meaning": "Kranich auf dem Felsen",
        "embusen": "ichi",
        "info": "Trainiert exzellentes, ruhendes Gleichgewicht durch die vielfache einbeinige Kranich-Position (Tsuru-Ashi-Dachi) gefolgt von Yoko-Geri.",
        "urlDKV": "",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Nijushiho",
        "kanji": "二十四步",
        "length": "45 s",
        "movements": 34,
        "meaning": "24 Schritte",
        "embusen": "ju",
        "info": "Extrem weiche, fließende Bewegungen, die an fließendes Wasser erinnern, alternieren plötzlich mit sehr explosiven Stößen und Tritten.",
        "urlDKV": "",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Chinte",
        "kanji": "珍手",
        "length": "50 s",
        "movements": 33,
        "meaning": "Seltene Hände",
        "embusen": "ju",
        "info": "Nutzt ungewöhnliche Techniken wie Nakadaka-Ken (Mittelfingerknöchelschlag) und Nihon-Nukite auf Vitalpunkte und hat weiche Handgelenkbewegungen.",
        "urlDKV": "",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Sochin",
        "kanji": "壯鎭",
        "length": "45 s",
        "movements": 36,
        "meaning": "Stärke und Ruhe",
        "embusen": "ju",
        "info": "Der tiefe Fudo-Dachi (oder Sochin-Dachi) ist ständig präsent. Die Kata strahlt absolute Ruhe und fast steinernen, unerschütterlichen Stand aus.",
        "urlDKV": "https://www.youtube.com/watch?v=2DfLawL49xM",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Meikyo",
        "kanji": "明鏡",
        "length": "60 s",
        "movements": 34,
        "meaning": "Heller Spiegel",
        "embusen": "ichi",
        "info": "Beinhaltet Techniken, die sich symmetrisch wie in einem Spiegelbild aufbauen, sowie einen völlig einzigartigen Dreieckssprung (Sankaku-Tobi) nach vorne.",
        "urlDKV": "",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Unsu",
        "kanji": "雲手",
        "length": "60 s",
        "movements": 53,
        "meaning": "Wolkenhände",
        "embusen": "ju",
        "info": "Atemberaubende Dynamik: Beinhaltet Blitzschnelle Kreis-Blöcke (die Wolkenhände), Abwehr auf dem Boden liegend (Mawashi-Geri) sowie den legendären Sprung.",
        "urlDKV": "",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Wankan",
        "kanji": "王冠",
        "length": "50 s",
        "movements": 16,
        "meaning": "Königskrone",
        "embusen": "tei",
        "info": "Die kürzeste der Meister-Katas, verzichtet auf lange Wiederholungen. Höchste Konzentration der Kraft gepulst in sehr knappen Kombinationen.",
        "urlDKV": "",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Jiin",
        "kanji": "慈陰",
        "length": "30 s",
        "movements": 35,
        "meaning": "Liebe und Schatten (Tempel)",
        "embusen": "tei",
        "info": "Stammt like Jion und Jitte aus derselben klösterlichen Tradition. Nutzt enorm viele wuchtige Fauststöße und reaktionsschnelle Schrittwechsel.",
        "urlDKV": "",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Gojushiho Dai",
        "kanji": "五十四歩大",
        "length": "90 s",
        "movements": 62,
        "meaning": "54 Schritte, groß",
        "embusen": "ju",
        "info": "Sehr anspruchsvolle, lange Form. Charakteristisch für weiche, wuchtige Speerhand-Techniken (Nukite) und die 'Löwenangriff'-Haltung.",
        "urlDKV": "",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    },
    {
        "name": "Gojushiho Sho",
        "kanji": "五十四歩小",
        "length": "90 s",
        "movements": 65,
        "meaning": "54 Schritte, klein",
        "embusen": "ju",
        "info": "Gilt als filigraner und komplexer im Bewegungsfluss der Arme. Fordert perfekte Balance zwischen harter Kime und seidenweicher Körpermechanik.",
        "urlDKV": "",
        "urlJKA": "",
        "urlPDF": "",
        "ignore": false
    }
];

const svgs = {
    ichi: `<svg viewBox="0 0 100 100" width="68%" height="68%"><line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="50" r="5" fill="currentColor"/></svg>`,
    tei: `<svg viewBox="0 0 100 100" width="68%" height="68%"><line x1="20" y1="30" x2="80" y2="30" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="50" y1="30" x2="50" y2="80" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="80" r="5" fill="currentColor"/></svg>`,
    ju: `<svg viewBox="0 0 100 100" width="68%" height="68%"><line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="50" r="5" fill="currentColor"/></svg>`,
    ko: `<svg viewBox="0 0 100 100" width="68%" height="68%"><line x1="20" y1="20" x2="80" y2="20" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="20" y1="80" x2="80" y2="80" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="80" r="5" fill="currentColor"/></svg>`,
    tsuchi: `<svg viewBox="0 0 100 100" width="68%" height="68%"><line x1="20" y1="80" x2="80" y2="80" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="30" y1="50" x2="70" y2="50" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="80" r="5" fill="currentColor"/></svg>`
};