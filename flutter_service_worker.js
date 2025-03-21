'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a134e6511523cc5d6ca4013827b4365d",
"assets/AssetManifest.bin.json": "9ee4de7073df4ed0d1eb99e01a638e6d",
"assets/AssetManifest.json": "e2092cabb358cbc90c254e34b3a804fa",
"assets/assets/Add%2520a%2520heading.jpg": "0ba5ff6723231dd5189430c1649f749a",
"assets/assets/appstore.png": "6c0b772f193e8991c58ebb3a6fb12d79",
"assets/assets/bus_gif_2.gif": "f659b81b11a2458c184726a8b45dae51",
"assets/assets/bus_im.jpg": "a01f8846f9599b509054d07bf9be7099",
"assets/assets/bus_image_technical_support.png": "d8285e02a9bccee7691e1d21e928ca7a",
"assets/assets/contact_us.png": "3fc374a0c39c5b96d71bebfeb7fd0773",
"assets/assets/cover_picture1.jpg": "1cf359c8f8aa92dc9f669c08e6146dfc",
"assets/assets/customer_profile.jpg": "9a08384f1a695fcdf4c9d578e5df3c2d",
"assets/assets/day_bus.gif": "6a7fcc8a14388624af3e3023b3a15a21",
"assets/assets/facebook.png": "7c8d991e8a2be6abd4986c3e00c35aec",
"assets/assets/Flag_of_Australia_(converted).svg.png": "628fe07a51815785caa170b58bf7348d",
"assets/assets/Flag_of_India.svg.png": "1bbed0e776c6b70320ce7899259ca5c6",
"assets/assets/Flag_of_the_United_Kingdom_(1-2).svg.png": "019ba60adc8990284d832e17481e3fa7",
"assets/assets/fonts/DKMoreOrLess.otf": "d155f35d5d2ce5a039e3b236aa30826c",
"assets/assets/fonts/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/assets/gif.gif": "e7bf38c0680af59981cbcb009d0eb74e",
"assets/assets/google_logo_officiall.png": "a1e1d65465c69a65f8d01226ff5237ec",
"assets/assets/instagram.png": "344fea7e70c37d2e5dd55332327efa46",
"assets/assets/linkedin.png": "898c0407d74c75fa110de76293d96ddd",
"assets/assets/moving_bus.gif": "25a549501fa668c2cb312dcb440cdb37",
"assets/assets/NammaSavaariQR.png": "eae4a7a163e89df6cd2a51b38dfc3e66",
"assets/assets/Namma_Savaari.png": "36de316f579a57bc1c5634d9502f3b8b",
"assets/assets/Namma_Savaari_LOGO1.png": "b262e76ba6817e4fcb88428ce36d84ca",
"assets/assets/phone_number.jpg": "604ea70c9bbdf60b840c491d1dcbfa37",
"assets/assets/pink_bus_icon.png": "1dc53a7f0d8f2f837d3d5c087c94bf87",
"assets/assets/playstore.png": "a290806153419cc549efa4f37373ddfe",
"assets/assets/profile.icon.jpg": "9c23a74288291b737a51cb328037259a",
"assets/assets/rate_rev.JPG": "49ea3751098b93b53e9db5c5e449bb06",
"assets/assets/reate_review_pic.jpg": "ad58e85ae98d43bf225f602a5d0bac3f",
"assets/assets/redbuslogo.JPG": "0c887ae91621a53ac6e073e3f3f37263",
"assets/assets/redbus_caro_2.jpeg": "83b6ac641d6d1d2a576448a3a83333fa",
"assets/assets/redbus_caro_3.jpeg": "cbf353fccfe0eb5e0e62278a5d0e8fa8",
"assets/assets/red_bus_caro_1.jpeg": "1907775d9c48138bef0aa8f61eed4846",
"assets/assets/red_bus_caro_4.jpeg": "4fb53cebfbf6f8ecfa7b7e1e820e56d6",
"assets/assets/sell_clothings_main_image.jpeg": "69a1db942b4f3ed234c0e10dddda3c5e",
"assets/assets/sell_electronics_main_image.jpg": "d8e0a26c15ab9a781a51c9a7fceaff35",
"assets/assets/sell_footwear_main_image_1.jpeg": "8825ef71bbb58d4bb872c4c53c5f5322",
"assets/assets/sell_furniture_main_image.jpeg": "549087e05b020512f547b1f27aab6b70",
"assets/assets/steering-wheel.png": "1dbcdf71a8f40f269aab685c836bb9b9",
"assets/assets/twitter.png": "6352d995b0c2a0f882503daa1d99a2e7",
"assets/assets/user.png": "32ddd7aa5495a0bfa4a48d0ffa4c4fd6",
"assets/assets/us_flag.png": "1373537b687f08fdbd6ac7c041cc01e0",
"assets/assets/yello_bus_gif.gif": "40b0eb6ebf29df527a0c080cc1227f6b",
"assets/FontManifest.json": "3328fb90371b894761679dbd5cdffd69",
"assets/fonts/MaterialIcons-Regular.otf": "1e026eb5f3260eebf837ec4ca7d1a5cf",
"assets/NOTICES": "d8921dd011b9e81153373b702b3f2a73",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_charts/google_fonts/Comforter-Regular.ttf": "cff123ea94f9032380183b8bbbf30ec1",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.ico": "027c06ae2507c5b2bebdf906d844e194",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "7dcccc2b0708e2e2ee7996518b136431",
"icons/Icon-192.png": "b3d696dfa9024d9800354ed704b533d6",
"icons/Icon-512.png": "59e5b789e1c65b206facc08b4ff18280",
"icons/Icon-maskable-192.png": "112bb7b40dbc6848a796679704a59e11",
"icons/Icon-maskable-512.png": "aeb6608f83554662b37117e284e55564",
"index.html": "c0cc670d422eefbcfa227d00733ba266",
"/": "c0cc670d422eefbcfa227d00733ba266",
"main.dart.js": "7a600a7589840dfffcbeba7f05312b23",
"manifest.json": "2dd973c17ae2d8508a83a23dae1fca4a",
"version.json": "87f7fdc32e890f09fdfdcd6783dea6ef"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
