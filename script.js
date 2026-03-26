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


const svgs = {
    ichi: `<svg viewBox="0 0 100 100" width="68%" height="68%"><line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="50" r="5" fill="currentColor"/></svg>`,
    tei: `<svg viewBox="0 0 100 100" width="68%" height="68%"><line x1="20" y1="30" x2="80" y2="30" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="50" y1="30" x2="50" y2="80" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="80" r="5" fill="currentColor"/></svg>`,
    ju: `<svg viewBox="0 0 100 100" width="68%" height="68%"><line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="50" r="5" fill="currentColor"/></svg>`,
    ko: `<svg viewBox="0 0 100 100" width="68%" height="68%"><line x1="20" y1="20" x2="80" y2="20" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="20" y1="80" x2="80" y2="80" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="80" r="5" fill="currentColor"/></svg>`,
    tsuchi: `<svg viewBox="0 0 100 100" width="68%" height="68%"><line x1="20" y1="80" x2="80" y2="80" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="30" y1="50" x2="70" y2="50" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="80" r="5" fill="currentColor"/></svg>`
};

const katas = [
    new Kata("Taikyoku Shodan", "太極初段", "25 s", 20, "Erste Ursache", svgs.ko, "Die Anfänger-Kata. Lehrt die absoluten Grundlagen: Gedan-Barai, Oi-Zuki und Zenkutsu-Dachi.", "https://www.youtube.com/watch?v=S8LqJ4u5G6E", "https://www.youtube.com/watch?v=9S0ySAncTzE", "", false),
    new Kata("Heian Shodan", "平安初段", "25 s", 21, "Friedvoller Geist, Stufe 1", svgs.ko, "Die erste der fünf Heian-Katas. Führt grundlegende Blöcke wie Age-Uke und Shuto-Uke ein und festigt die Basisstände.", "https://www.youtube.com/watch?v=kYmZ-pEnE7c", "https://www.youtube.com/watch?v=9S0ySAncTzE", "", false),
    new Kata("Heian Nidan", "平安二段", "25 s", 26, "Friedvoller Geist, Stufe 2", svgs.ko, "Führt den Seitenfußtritt (Yoko-Geri) und den Rückfaustschlag (Uraken) sowie fließende Rhythmuswechsel ein.", "https://www.youtube.com/watch?v=pS6m-A26y6w", "https://www.youtube.com/watch?v=XhZ7pX-WjWk", "", false),
    new Kata("Heian Sandan", "平安三段", "25 s", 20, "Friedvoller Geist, Stufe 3", svgs.tei, "Fokus auf den Reiterstand (Kiba-Dachi), Befreiungstechniken und die Körperdrehung (Tai-Sabaki) im Nahkampf.", "", "", "", false),
    new Kata("Heian Yondan", "平安四段", "30 s", 27, "Friedvoller Geist, Stufe 4", svgs.tsuchi, "Führt offene Hand-Techniken, Juji-Uke (Kreuzblock) und schnelle, dynamische Trittkombinationen wie Mae-Geri ein.", "", "", "", false),
    new Kata("Heian Godan", "平安五段", "30 s", 23, "Friedvoller Geist, Stufe 5", svgs.tei, "Beinhaltet den Wasser-Sprung (Mizu-Nagare) und wechselt kontinuierlich zwischen äußerst tiefen und hohen Ständen.", "", "", "", false),
    new Kata("Tekki Shodan", "鉄騎初段", "25 s", 29, "Eiserner Reiter, Stufe 1", svgs.ichi, "Wird komplett auf einer Linie im tiefen Kiba-Dachi ausgeführt. Simuliert den Kampf auf engem Raum z.B. an einer Wand.", "", "", "", false),
    new Kata("Tekki Nidan", "鉄騎二段", "30 s", 24, "Eiserner Reiter, Stufe 2", svgs.ichi, "Die Fortsetzung von Tekki Shodan. Beinhaltet komplexe Abwehren und extrem schnelle Hebeltechniken aus dem sicheren Reiterstand.", "", "", "", false),
    new Kata("Tekki Sandan", "鉄騎三段", "30 s", 36, "Eiserner Reiter, Stufe 3", svgs.ichi, "Die komplexeste der Tekki-Katas. Erfordert extremen Einsatz der Hüfte (Koshi) für die Kraftgenerierung auf kürzester Distanz.", "", "", "", false),
    new Kata("Bassai Dai", "披塞大", "50 s", 42, "Die Festung stürmen, groß", svgs.tei, "Eine dynamische, immens kraftvolle Kata, die symbolisch den 'Sturm auf eine Festung' meistert. Beinhaltet extrem starke Wendungen.", "https://www.youtube.com/watch?v=E_NIm-P_v-U", "https://www.youtube.com/watch?v=G1u9R1g1A7s", "", false),
    new Kata("Bassai Sho", "披塞小", "60 s", 28, "Die Festung stürmen, klein", svgs.tei, "Die kleinere, aber fließendere Schwester von Bassai Dai. Ausgeprägter Fokus auf Abwehr gegen Hebel- und lange Stockangriffe (Bo).", "", "", "", false),
    new Kata("Kanku Dai", "観空大", "90 s", 65, "In den Himmel schauen, groß", svgs.tsuchi, "Die längste Standardkata und Ursprung der Heian-Formen. Beginnt symbolisch mit dem namensgebenden 'Blick in den Himmel'.", "https://www.youtube.com/watch?v=u6tK0944Fks", "https://www.youtube.com/watch?v=XhZ7pX-WjWk", "", false),
    new Kata("Kanku Sho", "観空小", "50 s", 39, "In den Himmel schauen, klein", svgs.tsuchi, "Schneller und sprunggewaltiger als Kanku Dai. Zeichnet sich durch zwei spektakuläre Sprünge und einen tief verwurzelten Stand aus.", "", "", "", false),
    new Kata("Enpi", "燕飛", "60 s", 37, "Flug der Schwalbe", svgs.tei, "Berühmt für ihre schnellen, leichtfüßigen Auf- und Abbewegungen, das tiefe Ausweichen und den markanten drehenden Sprung am Ende.", "https://www.youtube.com/watch?v=Yf1e5-V7-zI", "https://www.youtube.com/watch?v=2n6r4W9LpZ8", "", false),
    new Kata("Jion", "慈恩", "60 s", 47, "Liebe und Güte (Tempel)", svgs.ko, "Eine sehr geradlinige, powervolle Kata ohne große Schnörkel. Der Fokus liegt ganz auf sauberen Basis-Schlägen und dem festen Zenkutsu-Dachi.", "https://www.youtube.com/watch?v=Z5-L5Xf6H1U", "https://www.youtube.com/watch?v=p1-b5S6v9W0", "", false),
    new Kata("Hangetsu", "半月", "60 s", 41, "Halbmond", svgs.ju, "Einzige Kata, die extreme isometrische Ganzkörperspannung und tiefe Atmung im speziellen Hangetsu-Dachi-Stand (Mond-Stand) trainiert.", "", "", "", false),
    new Kata("Jitte", "十手", "60 s", 26, "Zehn Hände", svgs.ju, "Bedeutet 'Zehn Hände' und soll gegen mehrere Angreifer wappnen. Beinhaltet Abwehren von Stöcken und den auffälligen Yama-Gamae-Doppelblock.", "", "", "", false),
    new Kata("Gankaku", "岩鶴", "60 s", 42, "Kranich auf dem Felsen", svgs.ichi, "Trainiert exzellentes, ruhendes Gleichgewicht durch die vielfache einbeinige Kranich-Position (Tsuru-Ashi-Dachi) gefolgt von Yoko-Geri.", "", "", "", false),
    new Kata("Nijushiho", "二十四步", "45 s", 34, "24 Schritte", svgs.ju, "Extrem weiche, fließende Bewegungen, die an fließendes Wasser erinnern, alternieren plötzlich mit sehr explosiven Stößen und Tritten.", "", "", "", false),
    new Kata("Chinte", "珍手", "50 s", 33, "Seltene Hände", svgs.ju, "Nutzt ungewöhnliche Techniken wie Nakadaka-Ken (Mittelfingerknöchelschlag) und Nihon-Nukite auf Vitalpunkte und hat weiche Handgelenkbewegungen.", "", "", "", false),
    new Kata("Sochin", "壯鎭", "45 s", 36, "Stärke und Ruhe", svgs.ju, "Der tiefe Fudo-Dachi (oder Sochin-Dachi) ist ständig präsent. Die Kata strahlt absolute Ruhe und fast steinernen, unerschütterlichen Stand aus.", "https://www.youtube.com/watch?v=2DfLawL49xM", "", "", false),
    new Kata("Meikyo", "明鏡", "60 s", 34, "Heller Spiegel", svgs.ichi, "Beinhaltet Techniken, die sich symmetrisch wie in einem Spiegelbild aufbauen, sowie einen völlig einzigartigen Dreieckssprung (Sankaku-Tobi) nach vorne.", "", "", "", false),
    new Kata("Unsu", "雲手", "60 s", 53, "Wolkenhände", svgs.ju, "Atemberaubende Dynamik: Beinhaltet Blitzschnelle Kreis-Blöcke (die Wolkenhände), Abwehr auf dem Boden liegend (Mawashi-Geri) sowie den legendären Sprung.", "", "", "", false),
    new Kata("Wankan", "王冠", "50 s", 16, "Königskrone", svgs.tei, "Die kürzeste der Meister-Katas, verzichtet auf lange Wiederholungen. Höchste Konzentration der Kraft gepulst in sehr knappen Kombinationen.", "", "", "", false),
    new Kata("Jiin", "慈陰", "30 s", 35, "Liebe und Schatten (Tempel)", svgs.tei, "Stammt like Jion und Jitte aus derselben klösterlichen Tradition. Nutzt enorm viele wuchtige Fauststöße und reaktionsschnelle Schrittwechsel.", "", "", "", false),
    new Kata("Gojushiho Dai", "五十四歩大", "90 s", 62, "54 Schritte, groß", svgs.ju, "Sehr anspruchsvolle, lange Form. Charakteristisch für weiche, wuchtige Speerhand-Techniken (Nukite) und die 'Löwenangriff'-Haltung.", "", "", "", false),
    new Kata("Gojushiho Sho", "五十四歩小", "90 s", 65, "54 Schritte, klein", svgs.ju, "Gilt als filigraner und komplexer im Bewegungsfluss der Arme. Fordert perfekte Balance zwischen harter Kime und seidenweicher Körpermechanik.", "", "", "", false)
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
    selector: document.getElementById('kata-selector'),
    videoDKV: document.getElementById('video-dkv'),
    videoJKA: document.getElementById('video-jka'),
    pdfLink: document.getElementById('kata-pdf'),

    // New Elements
    menuToggle: document.getElementById('menu-toggle'),
    navOverlay: document.getElementById('nav-overlay'),
    navClose: document.getElementById('nav-close'),
    navLinks: document.querySelectorAll('.nav-link, .back-to-trainer'),
    views: document.querySelectorAll('.view'),

    settingsModal: document.getElementById('settings-modal'),
    openSettings: document.getElementById('open-settings'),
    settingsClose: document.getElementById('settings-close'),
    settingsSave: document.getElementById('settings-save'),
    filterList: document.getElementById('kata-filter-list'),
    selectAllBtn: document.getElementById('select-all'),
    deselectAllBtn: document.getElementById('deselect-all')
};

// --- Preference Management ---

function loadPreferences() {
    const saved = localStorage.getItem('kata_preferences');
    if (saved) {
        const prefs = JSON.parse(saved);
        katas.forEach((kata, index) => {
            // If the kata name exists in saved preferences, use that value, otherwise default to false
            kata.ignore = prefs.hasOwnProperty(kata.name) ? prefs[kata.name] : false;
        });
    }
}

function savePreferences() {
    const prefs = {};
    katas.forEach(kata => {
        prefs[kata.name] = kata.ignore;
    });
    localStorage.setItem('kata_preferences', JSON.stringify(prefs));
}

// --- Navigation Logic ---

function switchView(viewId) {
    DOM.views.forEach(view => {
        if (view.id === viewId) {
            view.classList.remove('hidden');
        } else {
            view.classList.add('hidden');
        }
    });

    // Update active state in nav
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('data-view') === viewId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Close menu after selection
    DOM.navOverlay.classList.remove('active');
}

// --- Settings Modal Logic ---

function populateFilterList() {
    DOM.filterList.innerHTML = '';
    katas.forEach((kata, index) => {
        const item = document.createElement('div');
        item.className = 'filter-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `filter-${index}`;
        checkbox.checked = !kata.ignore; // Checked means "included"

        const label = document.createElement('label');
        label.htmlFor = `filter-${index}`;
        label.textContent = kata.name;

        item.appendChild(checkbox);
        item.appendChild(label);

        // Toggle on click of item
        item.addEventListener('click', (e) => {
            if (e.target !== checkbox) {
                checkbox.checked = !checkbox.checked;
            }
            kata.ignore = !checkbox.checked;
        });

        DOM.filterList.appendChild(item);
    });
}

// --- Core App Logic ---

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
    // Only include katas that are NOT ignored
    unshownKatas = katas
        .map((kata, index) => (!kata.ignore ? index : -1))
        .filter(index => index !== -1);

    // If ALL katas are ignored, fallback to all katas to prevent infinite loop
    if (unshownKatas.length === 0) {
        unshownKatas = katas.map((_, index) => index);
    }
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
    DOM.videoDKV.href = kata.urlDKV;
    DOM.videoJKA.href = kata.urlJKA;
    DOM.pdfLink.href = kata.urlPDF;
}

function generateKata(direction = 'pop', specificIndex = null) {
    if (isAnimating) return;
    isAnimating = true;

    if (specificIndex !== null) {
        currentKataIndex = parseInt(specificIndex, 10);
    } else {
        currentKataIndex = getRandomKataIndex();
    }
    const kata = katas[currentKataIndex];

    DOM.selector.value = currentKataIndex;
    DOM.card.className = 'kata-card';
    void DOM.card.offsetWidth;

    if (direction === 'left') {
        DOM.card.classList.add('slide-out-left');
    } else if (direction === 'right') {
        DOM.card.classList.add('slide-out-right');
    } else {
        DOM.card.classList.add('scale-down');
    }

    setTimeout(() => {
        updateDOMWithKata(kata);
        DOM.card.className = 'kata-card';

        if (direction === 'left') {
            DOM.card.classList.add('slide-in-right');
        } else if (direction === 'right') {
            DOM.card.classList.add('slide-in-left');
        } else {
            DOM.card.classList.add('pop-in');
        }

        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }, 300);
}

// --- Event Listeners ---

// Navigation
DOM.menuToggle.addEventListener('click', () => {
    DOM.navOverlay.classList.add('active');
});

DOM.navClose.addEventListener('click', () => {
    DOM.navOverlay.classList.remove('active');
});

DOM.navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const viewId = link.getAttribute('data-view');
        if (viewId) {
            e.preventDefault();
            switchView(viewId);
        }
    });
});

// Flip card on click, but ignore when clicking video links
DOM.card.addEventListener('click', (e) => {
    if (e.target.closest('.video-link')) return;
    DOM.card.classList.toggle('flipped');
});

// Exit App
document.getElementById('app-exit').addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm("Möchtest du die App wirklich beenden?")) {
        window.close();
        setTimeout(() => {
            alert("Vielen Dank für dein Training! Du kannst diesen Tab jetzt schließen.");
        }, 300);
    }
});

// Settings Modal
DOM.openSettings.addEventListener('click', (e) => {
    e.preventDefault();
    populateFilterList();
    DOM.settingsModal.classList.add('active');
    DOM.navOverlay.classList.remove('active');
});

DOM.settingsClose.addEventListener('click', () => {
    DOM.settingsModal.classList.remove('active');
});

DOM.settingsSave.addEventListener('click', () => {
    savePreferences();
    resetUnshownKatas(); // Rebuild the pool with new filters
    DOM.settingsModal.classList.remove('active');
});

DOM.selectAllBtn.addEventListener('click', () => {
    document.querySelectorAll('.filter-item input').forEach(input => input.checked = true);
    katas.forEach(k => k.ignore = false);
});

DOM.deselectAllBtn.addEventListener('click', () => {
    document.querySelectorAll('.filter-item input').forEach(input => input.checked = false);
    katas.forEach(k => k.ignore = true);
});

// Controls
DOM.btn.addEventListener('click', () => generateKata('pop'));
DOM.selector.addEventListener('change', (e) => generateKata('pop', e.target.value));

// Touch Interaction
let touchStartX = 0;
let touchEndX = 0;

DOM.touchArea.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

DOM.touchArea.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) generateKata('left');
    if (touchEndX > touchStartX + swipeThreshold) generateKata('right');
}, { passive: true });

// Service Worker Registration (Fixed Typos)
window.addEventListener('load', () => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register('serviceWorker.js', { scope: './' })
            .then(() => console.log('ServiceWorker registered'))
            .catch((error) => console.warn('ServiceWorker registration failed:', error));
    }
});

// Init
loadPreferences();
resetUnshownKatas();
setTimeout(() => generateKata('pop'), 500);

