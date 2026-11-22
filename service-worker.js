const CACHE='smarthome-control-v03';const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',evt=>evt.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',evt=>evt.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',evt=>{if(evt.request.method!=='GET')return;evt.respondWith(fetch(evt.request).catch(()=>caches.match(evt.request).then(resp=>resp||caches.match('./index.html'))))});
