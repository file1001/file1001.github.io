importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

// Cache the files from CDN
workbox.routing.registerRoute(
'https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js',
  new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
  new RegExp('/scripts/'),
  new workbox.strategies.CacheFirst()
);
workbox.routing.registerRoute(
  new RegExp('/images/'),
  new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
  new RegExp('/([^/]+\)$'),
  new workbox.strategies.StaleWhileRevalidate()
);





