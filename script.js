const svgs = {
    ichi: `<svg viewBox="0 0 100 100" width="100%" height="100%"><line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="50" r="5" fill="currentColor"/></svg>`,
    tei: `<svg viewBox="0 0 100 100" width="100%" height="100%"><line x1="20" y1="30" x2="80" y2="30" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="50" y1="30" x2="50" y2="80" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="80" r="5" fill="currentColor"/></svg>`,
    ju: `<svg viewBox="0 0 100 100" width="100%" height="100%"><line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="50" r="5" fill="currentColor"/></svg>`,
    ko: `<svg viewBox="0 0 100 100" width="100%" height="100%"><line x1="20" y1="20" x2="80" y2="20" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="20" y1="80" x2="80" y2="80" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="80" r="5" fill="currentColor"/></svg>`,
    tsuchi: `<svg viewBox="0 0 100 100" width="100%" height="100%"><line x1="20" y1="80" x2="80" y2="80" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="30" y1="50" x2="70" y2="50" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="80" r="5" fill="currentColor"/></svg>`
};

const katas = [
    { name: "Taikyoku Shodan", kanji: "太極初段", length: "25 s", movements: 20, meaning: "Erste Ursache", embusen: svgs.ko, info: "Die Anfänger-Kata. Lehrt die absoluten Grundlagen: Gedan-Barai, Oi-Zuki und Zenkutsu-Dachi." },
    { name: "Heian Shodan", kanji: "平安初段", length: "40 s", movements: 21, meaning: "Friedvoller Geist, Stufe 1", embusen: svgs.ko, info: "Die erste der fünf Heian-Katas. Führt grundlegende Blöcke wie Age-Uke und Shuto-Uke ein und festigt die Basisstände." },
    { name: "Heian Nidan", kanji: "平安二段", length: "40 s", movements: 26, meaning: "Friedvoller Geist, Stufe 2", embusen: svgs.ko, info: "Führt den Seitenfußtritt (Yoko-Geri) und den Rückfaustschlag (Uraken) sowie fließende Rhythmuswechsel ein." },
    { name: "Heian Sandan", kanji: "平安三段", length: "40 s", movements: 20, meaning: "Friedvoller Geist, Stufe 3", embusen: svgs.tei, info: "Fokus auf den Reiterstand (Kiba-Dachi), Befreiungstechniken und die Körperdrehung (Tai-Sabaki) im Nahkampf." },
    { name: "Heian Yondan", kanji: "平安四段", length: "50 s", movements: 27, meaning: "Friedvoller Geist, Stufe 4", embusen: svgs.tsuchi, info: "Führt offene Hand-Techniken, Juji-Uke (Kreuzblock) und schnelle, dynamische Trittkombinationen wie Mae-Geri ein." },
    { name: "Heian Godan", kanji: "平安五段", length: "50 s", movements: 23, meaning: "Friedvoller Geist, Stufe 5", embusen: svgs.tei, info: "Beinhaltet den Wasser-Sprung (Mizu-Nagare) und wechselt kontinuierlich zwischen äußerst tiefen und hohen Ständen." },
    { name: "Tekki Shodan", kanji: "鉄騎初段", length: "50 s", movements: 29, meaning: "Eiserner Reiter, Stufe 1", embusen: svgs.ichi, info: "Wird komplett auf einer Linie im tiefen Kiba-Dachi ausgeführt. Simuliert den Kampf auf engem Raum z.B. an einer Wand." },
    { name: "Tekki Nidan", kanji: "鉄騎二段", length: "50 s", movements: 24, meaning: "Eiserner Reiter, Stufe 2", embusen: svgs.ichi, info: "Die Fortsetzung von Tekki Shodan. Beinhaltet komplexe Abwehren und extrem schnelle Hebeltechniken aus dem sicheren Reiterstand." },
    { name: "Tekki Sandan", kanji: "鉄騎三段", length: "50 s", movements: 36, meaning: "Eiserner Reiter, Stufe 3", embusen: svgs.ichi, info: "Die komplexeste der Tekki-Katas. Erfordert extremen Einsatz der Hüfte (Koshi) für die Kraftgenerierung auf kürzester Distanz." },
    { name: "Bassai Dai", kanji: "披塞大", length: "60 s", movements: 42, meaning: "Die Festung stürmen, groß", embusen: svgs.tei, info: "Eine dynamische, immens kraftvolle Kata, die symbolisch den 'Sturm auf eine Festung' meistert. Beinhaltet extrem starke Wendungen." },
    { name: "Bassai Sho", kanji: "披塞小", length: "60 s", movements: 27, meaning: "Die Festung stürmen, klein", embusen: svgs.tei, info: "Die kleinere, aber fließendere Schwester von Bassai Dai. Ausgeprägter Fokus auf Abwehr gegen Hebel- und lange Stockangriffe (Bo)." },
    { name: "Kanku Dai", kanji: "観空大", length: "90 s", movements: 65, meaning: "In den Himmel schauen, groß", embusen: svgs.tsuchi, info: "Die längste Standardkata und Ursprung der Heian-Formen. Beginnt symbolisch mit dem namensgebenden 'Blick in den Himmel'." },
    { name: "Kanku Sho", kanji: "観空小", length: "60 s", movements: 48, meaning: "In den Himmel schauen, klein", embusen: svgs.tsuchi, info: "Schneller und sprunggewaltiger als Kanku Dai. Zeichnet sich durch zwei spektakuläre Sprünge und einen tief verwurzelten Stand aus." },
    { name: "Enpi", kanji: "燕飛", length: "60 s", movements: 37, meaning: "Flug der Schwalbe", embusen: svgs.tei, info: "Berühmt für ihre schnellen, leichtfüßigen Auf- und Abbewegungen, das tiefe Ausweichen und den markanten drehenden Sprung am Ende." },
    { name: "Jion", kanji: "慈恩", length: "60 s", movements: 47, meaning: "Liebe und Güte (Tempel)", embusen: svgs.ko, info: "Eine sehr geradlinige, powervolle Kata ohne große Schnörkel. Der Fokus liegt ganz auf sauberen Basis-Schlägen und dem festen Zenkutsu-Dachi." },
    { name: "Hangetsu", kanji: "半月", length: "60 s", movements: 41, meaning: "Halbmond", embusen: svgs.ju, info: "Einzige Kata, die extreme isometrische Ganzkörperspannung und tiefe Atmung im speziellen Hangetsu-Dachi-Stand (Mond-Stand) trainiert." },
    { name: "Jitte", kanji: "十手", length: "60 s", movements: 24, meaning: "Zehn Hände", embusen: svgs.ju, info: "Bedeutet 'Zehn Hände' und soll gegen mehrere Angreifer wappnen. Beinhaltet Abwehren von Stöcken und den auffälligen Yama-Gamae-Doppelblock." },
    { name: "Gankaku", kanji: "岩鶴", length: "60 s", movements: 42, meaning: "Kranich auf dem Felsen", embusen: svgs.ichi, info: "Trainiert exzellentes, ruhendes Gleichgewicht durch die vielfache einbeinige Kranich-Position (Tsuru-Ashi-Dachi) gefolgt von Yoko-Geri." },
    { name: "Nijushiho", kanji: "二十四步", length: "60 s", movements: 34, meaning: "24 Schritte", embusen: svgs.ju, info: "Extrem weiche, fließende Bewegungen, die an fließendes Wasser erinnern, alternieren plötzlich mit sehr explosiven Stößen und Tritten." },
    { name: "Chinte", kanji: "珍手", length: "60 s", movements: 32, meaning: "Seltene Hände", embusen: svgs.ju, info: "Nutzt ungewöhnliche Techniken wie Nakadaka-Ken (Mittelfingerknöchelschlag) und Nihon-Nukite auf Vitalpunkte und hat weiche Handgelenkbewegungen." },
    { name: "Sochin", kanji: "壯鎭", length: "60 s", movements: 41, meaning: "Stärke und Ruhe", embusen: svgs.ju, info: "Der tiefe Fudo-Dachi (oder Sochin-Dachi) ist ständig präsent. Die Kata strahlt absolute Ruhe und fast steinernen, unerschütterlichen Stand aus." },
    { name: "Meikyo", kanji: "明鏡", length: "60 s", movements: 33, meaning: "Heller Spiegel", embusen: svgs.ichi, info: "Beinhaltet Techniken, die sich symmetrisch wie in einem Spiegelbild aufbauen, sowie einen völlig einzigartigen Dreieckssprung (Sankaku-Tobi) nach vorne." },
    { name: "Unsu", kanji: "雲手", length: "60 s", movements: 48, meaning: "Wolkenhände", embusen: svgs.ju, info: "Atemberaubende Dynamik: Beinhaltet Blitzschnelle Kreis-Blöcke (die Wolkenhände), Abwehr auf dem Boden liegend (Mawashi-Geri) sowie den legendären Sprung." },
    { name: "Wankan", kanji: "王冠", length: "60 s", movements: 24, meaning: "Königskrone", embusen: svgs.tei, info: "Die kürzeste der Meister-Katas, verzichtet auf lange Wiederholungen. Höchste Konzentration der Kraft gepulst in sehr knappen Kombinationen." },
    { name: "Jiin", kanji: "慈陰", length: "60 s", movements: 38, meaning: "Liebe und Schatten (Tempel)", embusen: svgs.tei, info: "Stammt wie Jion und Jitte aus derselben klösterlichen Tradition. Nutzt enorm viele wuchtige Fauststöße und reaktionsschnelle Schrittwechsel." },
    { name: "Gojushiho Dai", kanji: "五十四歩大", length: "90 s", movements: 67, meaning: "54 Schritte, groß", embusen: svgs.ju, info: "Sehr anspruchsvolle, lange Form. Charakteristisch für weiche, wuchtige Speerhand-Techniken (Nukite) und die 'Löwenangriff'-Haltung." },
    { name: "Gojushiho Sho", kanji: "五十四歩小", length: "90 s", movements: 65, meaning: "54 Schritte, klein", embusen: svgs.ju, info: "Gilt als filigraner und komplexer im Bewegungsfluss der Arme. Fordert perfekte Balance zwischen harter Kime und seidenweicher Körpermechanik." }
];

const DOM = {
    card: document.getElementById('kata-card'),
    kanji: document.getElementById('kata-kanji'),
    name: document.getElementById('kata-name'),
    nameBack: document.getElementById('kata-name-back'),
    meaning: document.getElementById('kata-meaning'),
    description: document.getElementById('kata-description'),
    length: document.getElementById('kata-length'),
    movements: document.getElementById('kata-movements'),
    embusen: document.getElementById('kata-embusen'),
    btn: document.getElementById('generate-btn'),
    touchArea: document.getElementById('touch-area'),
    selector: document.getElementById('kata-selector')
};

// Populate selector dropdown
katas.forEach((kata, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = kata.name;
    DOM.selector.appendChild(option);
});

let currentKataIndex = -1;
let isAnimating = false;
let unshownKatas = [];

function resetUnshownKatas() {
    unshownKatas = Array.from({ length: katas.length }, (_, i) => i);
}

function getRandomKataIndex() {
    if (unshownKatas.length === 0) {
        resetUnshownKatas();
    }
    
    const poolIndex = Math.floor(Math.random() * unshownKatas.length);
    const selectedKataIndex = unshownKatas[poolIndex];
    unshownKatas.splice(poolIndex, 1);
    
    return selectedKataIndex;
}

function updateDOMWithKata(kata) {
    DOM.kanji.textContent = kata.kanji;
    DOM.name.textContent = kata.name;
    DOM.nameBack.textContent = kata.name;
    DOM.meaning.textContent = kata.meaning;
    DOM.description.textContent = kata.info;
    DOM.length.textContent = kata.length;
    DOM.movements.textContent = kata.movements;
    DOM.embusen.innerHTML = kata.embusen;
}

function generateKata(direction = 'pop', specificIndex = null) {
    if (isAnimating) return;
    isAnimating = true;

    if (specificIndex !== null) {
        currentKataIndex = parseInt(specificIndex, 10);
        const poolIndex = unshownKatas.indexOf(currentKataIndex);
        if (poolIndex > -1) {
            unshownKatas.splice(poolIndex, 1);
        }
    } else {
        currentKataIndex = getRandomKataIndex();
    }
    const kata = katas[currentKataIndex];

    // Update selector value without triggering change event
    DOM.selector.value = currentKataIndex;

    // Reset classes
    DOM.card.className = 'kata-card';

    // Force reflow
    void DOM.card.offsetWidth;

    // Apply out animation 
    if (direction === 'left') {
        DOM.card.classList.add('slide-out-left');
    } else if (direction === 'right') {
        DOM.card.classList.add('slide-out-right');
    } else {
        DOM.card.classList.add('scale-down');
    }

    setTimeout(() => {
        updateDOMWithKata(kata);
        
        // Remove out animations
        DOM.card.className = 'kata-card';

        // Add in animations
        if (direction === 'left') {
            DOM.card.classList.add('slide-in-right');
        } else if (direction === 'right') {
            DOM.card.classList.add('slide-in-left');
        } else {
            DOM.card.classList.add('pop-in');
        }

        setTimeout(() => {
            isAnimating = false;
        }, 500); // Wait for in animation
    }, 300); // Wait for out animation to almost finish
}

// Button Click Event
DOM.btn.addEventListener('click', () => {
    generateKata('pop');
});

// Dropdown Change Event
DOM.selector.addEventListener('change', (e) => {
    generateKata('pop', e.target.value);
});

// Swipe Events
let touchStartX = 0;
let touchEndX = 0;

DOM.touchArea.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

DOM.touchArea.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe left (next kata from right)
        generateKata('left');
    }
    if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe right (next kata from left)
        generateKata('right');
    }
}

// Initial Generation slightly delayed for beautiful first render
setTimeout(() => {
    generateKata('pop');
}, 500);
