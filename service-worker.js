/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f7fbce2e90e28989224a77ac393ff3b6"
  },
  {
    "url": "API.html",
    "revision": "41588f5dd7d9e66f84d9da859b3b770c"
  },
  {
    "url": "assets/css/0.styles.7245feb6.css",
    "revision": "d9ecea2b2cbc8d7722feb0678c90d980"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c3b29421.js",
    "revision": "c73bb1635db47cc713a303ee46015f1b"
  },
  {
    "url": "assets/js/11.4f8fc188.js",
    "revision": "98742822befebefbf4c7078f25a58da0"
  },
  {
    "url": "assets/js/12.159bd57c.js",
    "revision": "b548e13ad8911a944bed5d17b74b6051"
  },
  {
    "url": "assets/js/13.f4af315e.js",
    "revision": "7e09a53394508a94f14e4038fb8613cf"
  },
  {
    "url": "assets/js/14.d19a4a34.js",
    "revision": "ce0e6a35548490eb4c13cac279e726a0"
  },
  {
    "url": "assets/js/15.ff552e56.js",
    "revision": "f2643cc37ace9e5a0143a01ed6ff5783"
  },
  {
    "url": "assets/js/16.3aedc297.js",
    "revision": "e749227601adc7d5951beb79a0fb392c"
  },
  {
    "url": "assets/js/17.1ac9696d.js",
    "revision": "7a2b9c42ec6d0f13b0384d956bc016aa"
  },
  {
    "url": "assets/js/18.f552b769.js",
    "revision": "5bbc5a4d9eee526c8e658de31d2ae717"
  },
  {
    "url": "assets/js/19.1079a0cb.js",
    "revision": "d30b7921445b2bf1a8bdd1d48c9ce926"
  },
  {
    "url": "assets/js/2.bca294f8.js",
    "revision": "7e9fb194a300031b7b1cee13f8cde462"
  },
  {
    "url": "assets/js/20.fe19bddb.js",
    "revision": "7bb78e414cf9764cc797e38c5aaa97e6"
  },
  {
    "url": "assets/js/21.9ebdaa75.js",
    "revision": "ad1200c042e69b4c07e7d918be1f611e"
  },
  {
    "url": "assets/js/22.4657af98.js",
    "revision": "aa55ac59459fdb5e58cf50b28b10d310"
  },
  {
    "url": "assets/js/23.94ebecaf.js",
    "revision": "cc9996664239f1e77ae65f35735cd902"
  },
  {
    "url": "assets/js/24.763146a7.js",
    "revision": "545acafaad285fe12e88816cd2b2d134"
  },
  {
    "url": "assets/js/25.a512d56d.js",
    "revision": "3ed841b31ecdf90997b7dcdc435ae658"
  },
  {
    "url": "assets/js/26.33740869.js",
    "revision": "52274bfbc7891ff32296123ab0ef4c79"
  },
  {
    "url": "assets/js/27.d114b364.js",
    "revision": "933bd5425478c0094ca66842576dc9c1"
  },
  {
    "url": "assets/js/3.fd14f06a.js",
    "revision": "48b74f95c95983d1afe68d0abd9f39d2"
  },
  {
    "url": "assets/js/4.2f616ee8.js",
    "revision": "71d4d21af4bf3f4678ab03ce8c78e91f"
  },
  {
    "url": "assets/js/5.25c6c858.js",
    "revision": "aba45db5a94becf100b86e8618b2ba5b"
  },
  {
    "url": "assets/js/6.38785886.js",
    "revision": "6f87399fd0d137412a55d5c71f153051"
  },
  {
    "url": "assets/js/7.e3a2a696.js",
    "revision": "718f413b1c7e4e27dbb425fe96ce71c3"
  },
  {
    "url": "assets/js/8.e318cab5.js",
    "revision": "ac579102254b26fd32f192735716195b"
  },
  {
    "url": "assets/js/9.006cb4a0.js",
    "revision": "7b7135b2678c52451a19f5794e80bbd6"
  },
  {
    "url": "assets/js/app.ffb161f9.js",
    "revision": "d78d22013cf5697f380c7c23122f007c"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "4f13d21126b49e711989ca5d08d90818"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "RFCs/0001-new-slot-syntax.html",
    "revision": "42cc6f796b2a82e8d9d8c1145035d7f0"
  },
  {
    "url": "RFCs/0002-slot-syntax-shorthand.html",
    "revision": "a78e2f86a7c5c592d63a573f459bf4f5"
  },
  {
    "url": "RFCs/0003-dynamic-directive-arguments.html",
    "revision": "e14436e37fa3064205b4876b9f87fa76"
  },
  {
    "url": "RFCs/0004-global-api-treeshaking.html",
    "revision": "bb545092c7220d6bc39056a22c20ca9f"
  },
  {
    "url": "RFCs/0005-replace-v-bind-sync-with-v-model-argument.html",
    "revision": "31f2ec97248bf0b37d2bb019b2d40e21"
  },
  {
    "url": "RFCs/0006-slots-unification.html",
    "revision": "408f229c3880902250befbdb7632f891"
  },
  {
    "url": "RFCs/0007-functional-async-api-change.html",
    "revision": "d24ff7fda9f59d309663fb5b6afffee0"
  },
  {
    "url": "RFCs/0008-render-function-api-change.html",
    "revision": "81178f60c28ebca57989dfcb5f3d8f21"
  },
  {
    "url": "RFCs/0009-global-api-change.html",
    "revision": "55b27b0773a93fd86ab2becb6606c6e1"
  },
  {
    "url": "RFCs/0010-optional-props-declaration.html",
    "revision": "a5d5963665f54ef3f8f86374da8eb3c3"
  },
  {
    "url": "RFCs/0011-v-model-api-change.html",
    "revision": "a79205870fb4d2f66fcb0333068229c3"
  },
  {
    "url": "RFCs/0012-custom-directive-api-change.html",
    "revision": "74cebedd070c0d821fa4c12b56bd2746"
  },
  {
    "url": "RFCs/0014-drop-keycode-support.html",
    "revision": "bea87d04d7b4a5969da40c138869d9ef"
  },
  {
    "url": "RFCs/0015-remove-filters.html",
    "revision": "96002df49794e6fd5bca3a718442c6ca"
  },
  {
    "url": "RFCs/0016-remove-inline-templates.html",
    "revision": "8ff88ec83c2a83e3670415bd5aec647c"
  },
  {
    "url": "RFCs/0017-transition-as-root.html",
    "revision": "aeed5e0e0109d1c9b78cd08677528bb7"
  },
  {
    "url": "RFCs/0018-transition-class-change.html",
    "revision": "3fe172df37572ce699bde0c27e3c452a"
  },
  {
    "url": "RFCs/0019-remove-data-object-declaration.html",
    "revision": "624462ea0ab7069d0b8b75a73f6ae92e"
  },
  {
    "url": "RFCs/0020-events-api-change.html",
    "revision": "0584800aa53c31c118206536c66520f8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
