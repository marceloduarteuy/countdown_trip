self.addEventListener("install", e => {
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  console.log("Service Worker activo");
});

self.addEventListener("fetch", e => {
  console.log("Service Worker fetch");
});
