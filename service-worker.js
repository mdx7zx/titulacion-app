const CACHE = "titulacion-v6";
const APP_FILES = [
  "./",
  "./index.html",
  "./firebase-config.js",
  "./manifest.webmanifest",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(APP_FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // Todo lo de fuera (Firebase, Google Fonts, avatares) va directo a la red.
  // Firestore maneja su propio cache sin conexion; interceptarlo lo rompe.
  if (url.origin !== self.location.origin) return;

  const esDocumento = req.mode === "navigate" ||
                      url.pathname.endsWith(".html") ||
                      url.pathname.endsWith("/") ||
                      url.pathname.endsWith(".js");

  if (esDocumento) {
    // Red primero: asi una version nueva llega el mismo dia que se publica.
    // Si no hay internet, se sirve lo guardado.
    event.respondWith(
      fetch(req)
        .then(res => {
          if (res && res.ok) {
            const copia = res.clone();
            caches.open(CACHE).then(cache => cache.put(req, copia));
          }
          return res;
        })
        .catch(() => caches.match(req).then(c => c || caches.match("./index.html")))
    );
    return;
  }

  // Iconos y demas estaticos: cache primero, que no cambian.
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res => {
      if (res && res.ok) {
        const copia = res.clone();
        caches.open(CACHE).then(cache => cache.put(req, copia));
      }
      return res;
    }))
  );
});
