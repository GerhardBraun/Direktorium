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
    event.waitUntil(
        fetch('./version-info.json')
            .then(response => response.json())
            .then(versionInfo => {
                const APP_VERSION = versionInfo.appVersion;
                const DATA_VERSION = versionInfo.dataVersion;
                const CACHE_NAME = `direktorium-app-${APP_VERSION}-data-${DATA_VERSION}`;

                console.log(`Service Worker installiert: ${CACHE_NAME}`);
                self.skipWaiting();

                return caches.open(CACHE_NAME)
                    .then(cache => {
                        console.log('Cache geöffnet, füge Dateien hinzu');
                        return cache.addAll([
                            './',
                            './index.html',
                            './manifest.json',
                            './version-info.json'  // Wichtig: Version-Info cachen
                        ]);
                    });
            })
            .catch(error => {
                console.error('Version-Info konnte nicht geladen werden:', error);
                return Promise.resolve();
            })
    );
});

// Abruf von Ressourcen - Cache-First-Strategie
// Anstatt einer allgemeinen Strategie für alle Ressourcen,
// unterscheide zwischen Typen von Anfragen
// Dynamischer Fetch-Handler mit Versions-Info
self.addEventListener('fetch', event => {
    // Zuerst die Version-Info laden (oder Cache nutzen)
    event.respondWith(
        caches.match('./version-info.json')
            .then(versionResponse => {
                // Version-Info aus Cache oder Netzwerk laden
                const versionPromise = versionResponse ?
                    versionResponse.json() :
                    fetch('./version-info.json').then(res => res.json())
                        .catch(() => ({ appVersion: '1.0.0', dataVersion: 'fallback' }));

                return versionPromise.then(versionInfo => {
                    // Dynamischen Cache-Namen erstellen
                    const CACHE_NAME = `direktorium-app-${versionInfo.appVersion}-data-${versionInfo.dataVersion}`;

                    // URLs, die regelmäßig aktualisierte Daten enthalten
                    const dataUrls = [
                        '/data/',
                        '/api/',
                        'Direktorium.ts',
                        'Deceased.ts',
                        '/index.html',
                        '/'
                    ];

                    // Prüfe, ob es sich um eine Anfrage für regelmäßig aktualisierte Daten handelt
                    const isDataRequest = dataUrls.some(url =>
                        event.request.url.includes(url));

                    if (isDataRequest) {
                        // Network-First für Daten
                        return fetch(event.request)
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
                            });
                    } else {
                        // Cache-First für statische Ressourcen (deine ursprüngliche Logik)
                        return caches.match(event.request)
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
                            });
                    }
                });
            })
    );
});

self.addEventListener('activate', event => {
    console.log('Service Worker aktiviert');
    // Sofort alle Clients übernehmen
    event.waitUntil(clients.claim());

    // Versionsinformationen holen für Cache-Bereinigung
    event.waitUntil(
        fetch('./version-info.json')
            .then(response => response.json())
            .catch(() => ({ appVersion: '1.0.0', dataVersion: 'fallback' }))
            .then(versionInfo => {
                const currentCacheName = `direktorium-app-${versionInfo.appVersion}-data-${versionInfo.dataVersion}`;

                // Alte Caches entfernen
                return caches.keys().then(cacheNames => {
                    return Promise.all(
                        cacheNames.map(cacheName => {
                            if (cacheName !== currentCacheName) {
                                console.log('Lösche alten Cache:', cacheName);
                                return caches.delete(cacheName);
                            }
                        })
                    );
                });
            })
    );
});