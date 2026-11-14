const CACHE='mandi-hosted-v4-1';
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./icon.svg','./icon-192.png','./icon-512.png','./manifest.webmanifest']))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('mandi-hosted-')&&k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{if(e.request.method==='GET'&&new URL(e.request.url).origin===self.location.origin&&e.request.destination==='image')e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
