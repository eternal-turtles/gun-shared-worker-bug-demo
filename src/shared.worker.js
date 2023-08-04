const window = {}; // gun.js import sets window.GUN.

self.importScripts(
  "https://cdn.jsdelivr.net/npm/gun@0.2020.1239/gun.js"
);

console.log("GUN", window.GUN);

self.importScripts(
  "https://cdn.jsdelivr.net/npm/gun@0.2020.1239/sea.js" // Throws error.
);


