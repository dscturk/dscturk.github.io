'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "09c1925c8acfd0c3f36e42098ea74004",
"/assets/assets/images/gd_dsc_lockup_color.png": "a44dcf7ac221c60ec5db9a60ec97767b",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "527676d2d8c84fd77ccc03b60e17219b",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"/blog/2020/01/01/dsc-turk/assets/AssetManifest.json": "69c120fb69c15d7eea798a8da024d9b5",
"/blog/2020/01/01/dsc-turk/assets/FontManifest.json": "7b1d15e17008eba285a4558d83c547ed",
"/blog/2020/01/01/dsc-turk/index.html": "343e2165d4a100ca59352fc9f291e775",
"/blog/2020/02/05/using-flutter-to-generate-static-blog-with-markdown-for-github-pages/assets/AssetManifest.json": "69c120fb69c15d7eea798a8da024d9b5",
"/blog/2020/02/05/using-flutter-to-generate-static-blog-with-markdown-for-github-pages/assets/FontManifest.json": "7b1d15e17008eba285a4558d83c547ed",
"/blog/2020/02/05/using-flutter-to-generate-static-blog-with-markdown-for-github-pages/index.html": "35e3db5f38617dc58094badce85d7c2c",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "d9398ff4db9d86987c5170ace8c5d30e",
"/index_post.html": "7e4ae66f4be1fc3c87047af69f50f304",
"/main.dart.js": "e3265a062a9260000a3f7965552d9377",
"/manifest.json": "71c6d03c7672122542221675de49ba3a"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
