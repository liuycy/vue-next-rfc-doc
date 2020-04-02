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
    "revision": "6136b5c2c796090d2c96a434db5af7db"
  },
  {
    "url": "assets/css/0.styles.84675b83.css",
    "revision": "c44c15baee8b78907e33b7fe456680f9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.98b93313.js",
    "revision": "36f6d7f98a07938fe62963299648a183"
  },
  {
    "url": "assets/js/11.9f17c468.js",
    "revision": "4555b9d2fb8452cde57aead6c59a0e70"
  },
  {
    "url": "assets/js/12.b054da1f.js",
    "revision": "606c29daef583dddba2f050267c45693"
  },
  {
    "url": "assets/js/13.476081a6.js",
    "revision": "b6afcce6b042e5a695363f2d4c2e8415"
  },
  {
    "url": "assets/js/14.987b3fae.js",
    "revision": "ffe1d3697cd0f8a6ead654d2bfd26383"
  },
  {
    "url": "assets/js/15.0f5bf19d.js",
    "revision": "a5d224392ac982015b3bf491bb070a30"
  },
  {
    "url": "assets/js/16.63e0e4fb.js",
    "revision": "7ea27725a8022219f6779898bd3b5304"
  },
  {
    "url": "assets/js/17.381e0f34.js",
    "revision": "931c411d5089780067a7e397ee92e278"
  },
  {
    "url": "assets/js/18.83fd518e.js",
    "revision": "25098e2472aacb4e205f6cd9c676e1ca"
  },
  {
    "url": "assets/js/19.bd2c3b51.js",
    "revision": "9e4dadae3bf10adda4415aff5c29171b"
  },
  {
    "url": "assets/js/2.9a3ecacf.js",
    "revision": "de385cf583a441c19e679250999077bb"
  },
  {
    "url": "assets/js/20.2d9228aa.js",
    "revision": "31da51c7ebf9f799e54eedacea404118"
  },
  {
    "url": "assets/js/21.c45538bc.js",
    "revision": "34b9d78a64a97cceafee0ca80047a38b"
  },
  {
    "url": "assets/js/22.f360320b.js",
    "revision": "6dc3f9ca2c3a5eebe5f2223868934df2"
  },
  {
    "url": "assets/js/23.8d7b10d8.js",
    "revision": "0808fe0fe6f0ac02517689e076042cfd"
  },
  {
    "url": "assets/js/24.abc32ac5.js",
    "revision": "60ea29f592c7bbc676fe368dd31434be"
  },
  {
    "url": "assets/js/25.e92f6b53.js",
    "revision": "5ee70e444810262100d2a3f12bd24657"
  },
  {
    "url": "assets/js/26.7a14b006.js",
    "revision": "b232970e6b1682a82eff7799ebc4d765"
  },
  {
    "url": "assets/js/27.b21ba375.js",
    "revision": "2d1f541137b6e85fd656e4ba08f24680"
  },
  {
    "url": "assets/js/28.0c26f303.js",
    "revision": "9b10551683364649505773592b183977"
  },
  {
    "url": "assets/js/29.d8603458.js",
    "revision": "92e498da332d8ac9ff6a9f12b937d6b2"
  },
  {
    "url": "assets/js/3.8758bcaf.js",
    "revision": "7601f82fe295bcffcfb469de0d8cb70a"
  },
  {
    "url": "assets/js/30.0d13cd47.js",
    "revision": "b985cf3b59e6805e9bd20b8ffb400766"
  },
  {
    "url": "assets/js/31.7d726045.js",
    "revision": "483f3c3ef1645e18a7ac7fb0c3df1165"
  },
  {
    "url": "assets/js/4.1dcb3b00.js",
    "revision": "2c6d78d93b96b0415eb027f0e5cf1f5f"
  },
  {
    "url": "assets/js/5.ceea04df.js",
    "revision": "e94a799955f15e829e2922b47ba5d69c"
  },
  {
    "url": "assets/js/6.8aad0e51.js",
    "revision": "30bdfb4829cf24cd1c365b21b1203419"
  },
  {
    "url": "assets/js/7.a844884e.js",
    "revision": "8c3960ca1b92488da81c6b7ea2a10559"
  },
  {
    "url": "assets/js/8.f875948f.js",
    "revision": "e889692d95f26560fbea64977e238879"
  },
  {
    "url": "assets/js/9.8a4d8cab.js",
    "revision": "e5a27df44766ef7ac7c514333c359025"
  },
  {
    "url": "assets/js/app.d782e26a.js",
    "revision": "62aac08af30b7dd293ebc66b61c6a479"
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
    "revision": "ea74e0b7649a9829f798f0cc3584418c"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "RFCs/0001-new-slot-syntax.html",
    "revision": "60067e814248f5af8fe9eadf6fb50c20"
  },
  {
    "url": "RFCs/0002-slot-syntax-shorthand.html",
    "revision": "ebbe4c133f2c8ac5781324fc04d9a0fa"
  },
  {
    "url": "RFCs/0003-dynamic-directive-arguments.html",
    "revision": "b5da55775c3ca2614ea9400ad58c7eb2"
  },
  {
    "url": "RFCs/0004-global-api-treeshaking.html",
    "revision": "f19ff8cddab463e14a901f1d3eed53dd"
  },
  {
    "url": "RFCs/0005-replace-v-bind-sync-with-v-model-argument.html",
    "revision": "37df76d7dee79fbb134731a23d33e42c"
  },
  {
    "url": "RFCs/0006-slots-unification.html",
    "revision": "cb229ed9bf77e2f9b6d13a1fa78ac027"
  },
  {
    "url": "RFCs/0007-functional-async-api-change.html",
    "revision": "9c463252a8ededc59aad2c8dca317212"
  },
  {
    "url": "RFCs/0008-render-function-api-change.html",
    "revision": "7ad5105a51ab57ff826f7596c44e46d1"
  },
  {
    "url": "RFCs/0009-global-api-change.html",
    "revision": "e1310827dbe307c59ffca14a1dd06883"
  },
  {
    "url": "RFCs/0010-optional-props-declaration.html",
    "revision": "9c75ffdfa2f1c5d398406631a1f8c974"
  },
  {
    "url": "RFCs/0011-v-model-api-change.html",
    "revision": "996bba0a1296165a616dd4084ec6e7ac"
  },
  {
    "url": "RFCs/0012-custom-directive-api-change.html",
    "revision": "736ca3d1ca7ac278024cdbcaaa7d003b"
  },
  {
    "url": "RFCs/0014-drop-keycode-support.html",
    "revision": "0b2647e6b2de77193dbde27a4ab067fb"
  },
  {
    "url": "RFCs/0015-remove-filters.html",
    "revision": "43b43958f782bbedf81e4d111dcfee94"
  },
  {
    "url": "RFCs/0016-remove-inline-templates.html",
    "revision": "bcea7b99050788141674eae5794ee5c4"
  },
  {
    "url": "RFCs/0017-transition-as-root.html",
    "revision": "857928305e3398e80bae3d536020dfb8"
  },
  {
    "url": "RFCs/0018-transition-class-change.html",
    "revision": "e85af8352d64723f34ab79b217016962"
  },
  {
    "url": "RFCs/0019-remove-data-object-declaration.html",
    "revision": "3016ac34c85821a01dd60e9ee31b6d6a"
  },
  {
    "url": "RFCs/0020-events-api-change.html",
    "revision": "0fe1130cbecca967cf2715211ed9fb50"
  },
  {
    "url": "RFCs/0021-router-link-scoped-slot.html",
    "revision": "513d33b6e81d73a1bc8f35298678cc74"
  },
  {
    "url": "RFCs/0022-router-merge-meta-routelocation.html",
    "revision": "5c1e8880f848b62296ddcea5807bdde8"
  },
  {
    "url": "RFCs/0023-scoped-styles-changes.html",
    "revision": "25278daa4e9fe4e55fe9d69fb1ffc840"
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
