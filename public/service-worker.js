// Eindeutiger Name für deinen Cache
const VERSION = '1.0.0'; // Erhöhe diese Nummer bei wichtigen Updates
const CACHE_NAME = `direktorium-v${VERSION}`;

// Dateien, die beim Installieren des Service Workers gecacht werden sollen
// Basis-URL ermitteln
const scope = self.registration.scope;
const baseUrl = scope.slice(0, -1); // Entfernt das abschließende "/"

const urlsToCache = [
    `${baseUrl}/`,
    `${baseUrl}/index.html`,
    `${baseUrl}/static/js/main.chunk.js`, '/static/js/0.chunk.js',
    `${baseUrl}/static/js/bundle.js`,
    `${baseUrl}/manifest.json`,
    `${baseUrl}/logo192.png`,
    `${baseUrl}/logo512.png`,
    // Füge hier weitere wichtige Dateien hinzu
];

// Installation des Service Workers
self.addEventListener('install', event => {
    // Wichtig: skipWaiting() hinzufügen, damit der Worker aktiv wird
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache geöffnet, füge Dateien hinzu');
                // Füge grundlegende Dateien hinzu, ohne von anderen abhängig zu sein
                return cache.addAll([
                    '/',
                    '/index.html',
                    '/manifest.json'
                ]);
            })
            .catch(error => {
                console.error('Cache-Fehler:', error);
                // Wichtig: Auch bei Fehlern fortfahren
                return Promise.resolve();
            })
    );
});

// Abruf von Ressourcen - Cache-First-Strategie
// Anstatt einer allgemeinen Strategie für alle Ressourcen,
// unterscheide zwischen Typen von Anfragen
self.addEventListener('fetch', event => {
    // URLs, die regelmäßig aktualisierte Daten enthalten
    const dataUrls = [
        // Füge hier deine Daten-URLs hinzu, z.B.:
        '/data/',
        '/api/',
        // Wichtige Datenbank-Dateien oder dynamische Inhalte
        'Direktorium.ts',
        'Deceased.ts',
        // Die Startseite selbst, da sie dynamischen Inhalt enthält
        '/index.html',
        '/'
    ];

    // Prüfe, ob es sich um eine Anfrage für regelmäßig aktualisierte Daten handelt
    const isDataRequest = dataUrls.some(url =>
        event.request.url.includes(url));

    if (isDataRequest) {
        // Network-First für Daten
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    // Cache aktualisieren mit der neuen Antwort
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, responseToCache);
                        });
                    return response;
                })
                .catch(error => {
                    console.log('Offline-Modus, versuche Cache für:', event.request.url);
                    // Bei Netzwerkfehler aus Cache liefern
                    return caches.match(event.request);
                })
        );
    } else {
        // Cache-First für statische Ressourcen (dein aktueller Code)
        event.respondWith(
            caches.match(event.request)
                .then(response => {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request).then(
                        response => {
                            if (!response || response.status !== 200 || response.type !== 'basic') {
                                return response;
                            }
                            const responseToCache = response.clone();
                            caches.open(CACHE_NAME)
                                .then(cache => {
                                    cache.put(event.request, responseToCache);
                                });
                            return response;
                        }
                    );
                })
        );
    }
});

self.addEventListener('activate', event => {
    console.log('Service Worker aktiviert');
    // Sofort alle Clients übernehmen
    event.waitUntil(clients.claim());

    // Alte Caches entfernen
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});