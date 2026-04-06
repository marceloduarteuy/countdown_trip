
self.addEventListener("activate", e => {
  console.log("Service Worker activo");
});

// Este código permite que la PWA funcione offline y sea instalable
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('bebo-store').then((cache) => cache.addAll([
      './index.html',
      './manifest.json',
      './foto_512x512.png'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
