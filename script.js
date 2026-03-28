let katas = [];

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

function populateSelector() {
    DOM.selector.innerHTML = '<option value="" disabled selected>Kata wählen...</option>';
    katas.forEach((kata, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = kata.name;
        DOM.selector.appendChild(option);
    });
}

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

// --- Initialization ---

async function init() {
    try {
        // KATA_DATA is loaded from katas.js in index.html
        if (typeof KATA_DATA === 'undefined') {
            throw new Error('Kata-Daten konnten nicht gefunden werden. Bitte stelle sicher, dass katas.js korrekt geladen wurde.');
        }
        
        // Convert data objects to Kata instances
        katas = KATA_DATA.map(item => new Kata(
            item.name,
            item.kanji,
            item.length,
            item.movements,
            item.meaning,
            svgs[item.embusen] || "", // Map SVG key to actual SVG string
            item.info,
            item.urlDKV,
            item.urlJKA,
            item.urlPDF,
            item.ignore
        ));

        // Start App logic
        loadPreferences();
        populateSelector();
        resetUnshownKatas();
        
        // Show first kata after a small delay for aesthetic effect
        setTimeout(() => generateKata('pop'), 500);

        console.log("App initialized with", katas.length, "katas.");
    } catch (error) {
        console.error("Initialization failed:", error);
        alert("Fehler beim Starten der App.\n\nDetails: " + error.message);
    }
}

init();

