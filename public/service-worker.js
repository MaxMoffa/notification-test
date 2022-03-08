"use strict";
// Cache Name
const CACHE_NAME = "static-cache-v1";
// Cache Files
const FILES_TO_CACHE = ["/notification-test/public/offline.html"];
// install
self.addEventListener("install", (evt) => {
  console.log("[ServiceWorker] Install");
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[ServiceWorker] Pre-caching offline page");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});
// Active PWA Cache and clear out anything older
self.addEventListener("activate", (evt) => {
  console.log("[ServiceWorker] Activate");
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("[ServiceWorker] Removing old cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});
// listen for fetch events in page navigation and return anything that has been cached
self.addEventListener("fetch", (evt) => {
  console.log("[ServiceWorker] Fetch", evt.request.url);
  // when not a navigation event return
  if (evt.request.mode !== "navigate") {
    return;
  }
  evt.respondWith(
    fetch(evt.request).catch(() => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match("offline.html");
      });
    })
  );
});

// Register event listener for the 'push' event.
self.addEventListener('push', function(event) {
    console.log("NOTIFICATION!");
    console.log(event);
    event.waitUntil(
      // Retrieve a list of the clients of this service worker.
      self.clients.matchAll().then(function(clientList) {
        // Check if there's at least one focused client.
        var focused = clientList.some(function(client) {
          return client.focused;
        });
  
        var notificationMessage;
        if (focused) {
          notificationMessage = 'You\'re still here, thanks!';
        } else if (clientList.length > 0) {
          notificationMessage = 'You haven\'t closed the page, ' +
                                'click here to focus it!';
        } else {
          notificationMessage = 'You have closed the page, ' +
                                'click here to re-open it!';
        }
  
        // Show a notification with title 'ServiceWorker Cookbook' and body depending
        // on the state of the clients of the service worker (three different bodies:
        // 1, the page is focused; 2, the page is still open but unfocused; 3, the page
        // is closed).
        return self.registration.showNotification('ServiceWorker Cookbook', {
          body: notificationMessage,
        });
      })
    );
  });