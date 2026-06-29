/* Vital Athletic Recovery — Sub Board service worker
 * Goal: make the board installable + usable offline, WITHOUT interfering with the
 * live Firebase / EmailJS / GymMaster connections (those are cross-origin and pass through).
 *
 * Strategy:
 *   - Cross-origin requests (Firebase, EmailJS, GymMaster proxy, CDNs): not touched.
 *   - Page navigations: network-first (always get the latest board when online),
 *     fall back to the cached copy when offline.
 *   - Same-origin static files (icons, manifest): cache-first.
 *
 * Bump CACHE when you change this file to force an update.
 */
const CACHE = 'var-subs-v1';
const OFFLINE_URL = '/subs.html';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((c) => c.add(OFFLINE_URL).catch(() => {}))   // best-effort precache of the shell
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Let the browser handle anything not on our own origin (Firebase, proxy, CDNs, etc.)
  if (url.origin !== self.location.origin) return;

  // Page navigations: network-first, fall back to cache when offline.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((m) => m || caches.match(OFFLINE_URL)))
    );
    return;
  }

  // Same-origin static assets: cache-first, then network (and cache it).
  event.respondWith(
    caches.match(req).then((m) => m || fetch(req).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(req, copy));
      return res;
    }).catch(() => m))
  );
});
