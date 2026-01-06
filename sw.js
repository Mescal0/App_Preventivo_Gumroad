const CACHE_NAME = "imbianchino-pro-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./sw.js",
  "./Logo.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-192.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png",
  "./icons/favicon-16.png"
];

// CDN esterni da cachare
const CDN_ASSETS = [
  "https://unpkg.com/dexie@3.2.4/dist/dexie.js",
  "https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.js",
  "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.9/pdfmake.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.9/vfs_fonts.js",
  "https://cdn.jsdelivr.net/npm/signature_pad@4.0.0/dist/signature_pad.umd.min.js"
];

// Installazione - cache assets locali
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[SW] Caching assets locali");
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Attivazione - pulizia vecchie cache
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => {
            console.log("[SW] Eliminando cache vecchia:", key);
            return caches.delete(key);
          })
      )
    )
  );
  self.clients.claim();
});

// Fetch - strategia stale-while-revalidate per CDN, cache-first per locali
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  
  // Per risorse CDN: network-first con fallback cache
  if (CDN_ASSETS.some(cdn => event.request.url.startsWith(cdn.split('/').slice(0,3).join('/')))) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Salva in cache
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          });
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }
  
  // Per risorse locali: cache-first
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      }
      return fetch(event.request).then((response) => {
        // Non cachare richieste non-GET
        if (event.request.method !== 'GET') {
          return response;
        }
        // Cache la risposta
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, clone);
        });
        return response;
      });
    })
  );
});

// Gestione messaggi
self.addEventListener("message", (event) => {
  if (event.data === "skipWaiting") {
    self.skipWaiting();
  }
});
