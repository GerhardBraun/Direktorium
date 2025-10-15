// Eindeutiger Name für deinen Cache
const CACHE_NAME = 'direktorium-v1';

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
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache-Hit - return response
                if (response) {
                    return response;
                }

                // Wichtig: immer eine Kopie der Anfrage verwenden
                return fetch(event.request).then(
                    response => {
                        // Prüfe, ob wir eine gültige Antwort erhalten haben
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Wichtig: Kopiere die Antwort, da sie nur einmal verwendet werden kann
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