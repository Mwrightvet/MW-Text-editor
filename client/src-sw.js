// Import necessary modules
const { offlineFallback, warmStrategyCache } = require("workbox-recipes");
const { CacheFirst } = require("workbox-strategies");
const { registerRoute } = require("workbox-routing");
const { CacheableResponsePlugin } = require("workbox-cacheable-response");
const { ExpirationPlugin } = require("workbox-expiration");
const { precacheAndRoute } = require("workbox-precaching/precacheAndRoute");

// Precache and route the assets defined in the workbox-manifest
precacheAndRoute(self.__WB_MANIFEST);

// Define a caching strategy for HTML pages
const pageCache = new CacheFirst({
  cacheName: "page-cache",
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
    }),
  ],
});

// Warm the cache for important URLs
warmStrategyCache({
  urls: ["/index.html", "/"],
  strategy: pageCache,
});

// Register a route for navigation requests (HTML pages)
registerRoute(({ request }) => request.mode === "navigate", pageCache);

// Implement asset caching
registerRoute(
  // Define a custom matcher for assets (e.g., images, CSS, JS)
  ({ request }) =>
    request.destination === "image" ||
    request.destination === "style" ||
    request.destination === "script",
  // Define the caching strategy for assets (e.g., CacheFirst)
  new CacheFirst({
    cacheName: "asset-cache",
    plugins: [
      // Additional plugins can be added here if needed
    ],
  })
);
