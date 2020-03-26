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
    "url": "API.html",
    "revision": "9f3ef1d3e17e3db30bdf3a61ce8fb6c9"
  },
  {
    "url": "assets/css/0.styles.016c9516.css",
    "revision": "c44c15baee8b78907e33b7fe456680f9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e79488d2.js",
    "revision": "5ef07565f60afe116b56aa2b03685dce"
  },
  {
    "url": "assets/js/11.00a5e7a8.js",
    "revision": "4555b9d2fb8452cde57aead6c59a0e70"
  },
  {
    "url": "assets/js/12.ddc7c11c.js",
    "revision": "606c29daef583dddba2f050267c45693"
  },
  {
    "url": "assets/js/13.15e26c2a.js",
    "revision": "b6afcce6b042e5a695363f2d4c2e8415"
  },
  {
    "url": "assets/js/14.8ba2eed3.js",
    "revision": "ffe1d3697cd0f8a6ead654d2bfd26383"
  },
  {
    "url": "assets/js/15.f8e4332e.js",
    "revision": "a5d224392ac982015b3bf491bb070a30"
  },
  {
    "url": "assets/js/16.f3f3a152.js",
    "revision": "7ea27725a8022219f6779898bd3b5304"
  },
  {
    "url": "assets/js/17.5e5ae9d4.js",
    "revision": "931c411d5089780067a7e397ee92e278"
  },
  {
    "url": "assets/js/18.91e15308.js",
    "revision": "25098e2472aacb4e205f6cd9c676e1ca"
  },
  {
    "url": "assets/js/19.fb75ffa2.js",
    "revision": "9e4dadae3bf10adda4415aff5c29171b"
  },
  {
    "url": "assets/js/2.fc158681.js",
    "revision": "de385cf583a441c19e679250999077bb"
  },
  {
    "url": "assets/js/20.fd94ba45.js",
    "revision": "31da51c7ebf9f799e54eedacea404118"
  },
  {
    "url": "assets/js/21.f4f3c0a9.js",
    "revision": "34b9d78a64a97cceafee0ca80047a38b"
  },
  {
    "url": "assets/js/22.3f54d893.js",
    "revision": "6dc3f9ca2c3a5eebe5f2223868934df2"
  },
  {
    "url": "assets/js/23.cf69c11f.js",
    "revision": "0808fe0fe6f0ac02517689e076042cfd"
  },
  {
    "url": "assets/js/24.066a60e6.js",
    "revision": "60ea29f592c7bbc676fe368dd31434be"
  },
  {
    "url": "assets/js/25.33d4dad9.js",
    "revision": "5ee70e444810262100d2a3f12bd24657"
  },
  {
    "url": "assets/js/26.18dbb40b.js",
    "revision": "b232970e6b1682a82eff7799ebc4d765"
  },
  {
    "url": "assets/js/27.0b0ebbad.js",
    "revision": "2d83a4cae81bb82661a38c9661ae65c8"
  },
  {
    "url": "assets/js/28.db4bb01e.js",
    "revision": "f501a0e58c5c7b6ba58d50f41088c160"
  },
  {
    "url": "assets/js/29.011d7e6a.js",
    "revision": "4b5b05bfa3c9548d2e60c2ee2be8b274"
  },
  {
    "url": "assets/js/3.2d17116a.js",
    "revision": "924f13a79a41afc5b9fbc85db4a39e17"
  },
  {
    "url": "assets/js/4.11373d65.js",
    "revision": "87dba855e1d177cca451ee3a8254c8cd"
  },
  {
    "url": "assets/js/5.fe4a2776.js",
    "revision": "e94a799955f15e829e2922b47ba5d69c"
  },
  {
    "url": "assets/js/6.09c32356.js",
    "revision": "30bdfb4829cf24cd1c365b21b1203419"
  },
  {
    "url": "assets/js/7.37a152b0.js",
    "revision": "8c3960ca1b92488da81c6b7ea2a10559"
  },
  {
    "url": "assets/js/8.a5b00c37.js",
    "revision": "7b7e7bec879972e8ac55e9c2fff960cd"
  },
  {
    "url": "assets/js/9.5afd8b27.js",
    "revision": "4fbd80252f4cca17cf3c1f195bd60f78"
  },
  {
    "url": "assets/js/app.ac6f7867.js",
    "revision": "c810abc3bcec9ff0a5c60726bb26de39"
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
    "revision": "b08a217f42601b43674e680db7cb37cf"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "RFCs/0001-new-slot-syntax.html",
    "revision": "44f6bd3cd5ea58ce73c92e9514ce52b0"
  },
  {
    "url": "RFCs/0002-slot-syntax-shorthand.html",
    "revision": "a1c7baf037f12c8c998ef2d4ee2693b2"
  },
  {
    "url": "RFCs/0003-dynamic-directive-arguments.html",
    "revision": "db3041a454be2f61da14ee500214b0d3"
  },
  {
    "url": "RFCs/0004-global-api-treeshaking.html",
    "revision": "bfbbe90e72f6b31a0f3eb6e96c854ac3"
  },
  {
    "url": "RFCs/0005-replace-v-bind-sync-with-v-model-argument.html",
    "revision": "fa376382cb3a55069e9eea9bbf5b7f5f"
  },
  {
    "url": "RFCs/0006-slots-unification.html",
    "revision": "6e21c4eeb9d8d0d30b6691528d91083b"
  },
  {
    "url": "RFCs/0007-functional-async-api-change.html",
    "revision": "de6c81bb2b34375606aeb6617ed6a7ca"
  },
  {
    "url": "RFCs/0008-render-function-api-change.html",
    "revision": "ba00bad6abf4e4b8c27503bab7b77f5d"
  },
  {
    "url": "RFCs/0009-global-api-change.html",
    "revision": "16aedcbe41b4c33e073071584ca444c2"
  },
  {
    "url": "RFCs/0010-optional-props-declaration.html",
    "revision": "74f07ccf950be5625cba1ec9a508f6b4"
  },
  {
    "url": "RFCs/0011-v-model-api-change.html",
    "revision": "116f97f50d1444246fcb7e9e1e2ee30b"
  },
  {
    "url": "RFCs/0012-custom-directive-api-change.html",
    "revision": "2e5bbef02d0b3c6dd5970f63d14980f2"
  },
  {
    "url": "RFCs/0014-drop-keycode-support.html",
    "revision": "fef914f04650343ab14ae7beb09c2987"
  },
  {
    "url": "RFCs/0015-remove-filters.html",
    "revision": "1d9944bcebf7895ae31ee3afe72f3b6f"
  },
  {
    "url": "RFCs/0016-remove-inline-templates.html",
    "revision": "d31b6d3d505ea149ecd9350f130af5d0"
  },
  {
    "url": "RFCs/0017-transition-as-root.html",
    "revision": "16b2a905e958f20c06bd4a2872612a76"
  },
  {
    "url": "RFCs/0018-transition-class-change.html",
    "revision": "e5fc83eb95cb8b211b38c0044e1342c9"
  },
  {
    "url": "RFCs/0019-remove-data-object-declaration.html",
    "revision": "5711163b350acc23b548f6ccb26674a5"
  },
  {
    "url": "RFCs/0020-events-api-change.html",
    "revision": "47b062ece8250dce17e352e7c435abec"
  },
  {
    "url": "RFCs/0021-router-link-scoped-slot.html",
    "revision": "e506acc3a925742dfc029e0d71561b9a"
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
