const CACHE = 'yks-v2';
const FILES = ['./index.html', './manifest.json', './icon-192.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    // Önce internetten en güncel dosyayı çekmeyi dener
    fetch(e.request)
      .then(res => {
        const resClone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, resClone)); // Başarılıysa önbelleği de yeniler
        return res;
      })
      // İnternet yoksa (hata verirse) önbellekteki (cache) dosyayı gösterir
      .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
