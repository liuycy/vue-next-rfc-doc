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
    "revision": "8a92c77a8070adce2d637221c8af1bf3"
  },
  {
    "url": "assets/css/0.styles.424164d3.css",
    "revision": "c44c15baee8b78907e33b7fe456680f9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.67cb263f.js",
    "revision": "5ef07565f60afe116b56aa2b03685dce"
  },
  {
    "url": "assets/js/11.70a9da13.js",
    "revision": "4555b9d2fb8452cde57aead6c59a0e70"
  },
  {
    "url": "assets/js/12.5b5208bc.js",
    "revision": "606c29daef583dddba2f050267c45693"
  },
  {
    "url": "assets/js/13.cea725f0.js",
    "revision": "b6afcce6b042e5a695363f2d4c2e8415"
  },
  {
    "url": "assets/js/14.14c1b2f3.js",
    "revision": "ffe1d3697cd0f8a6ead654d2bfd26383"
  },
  {
    "url": "assets/js/15.b3b21691.js",
    "revision": "a5d224392ac982015b3bf491bb070a30"
  },
  {
    "url": "assets/js/16.a7abd996.js",
    "revision": "7ea27725a8022219f6779898bd3b5304"
  },
  {
    "url": "assets/js/17.039f3eb5.js",
    "revision": "931c411d5089780067a7e397ee92e278"
  },
  {
    "url": "assets/js/18.b792d8be.js",
    "revision": "25098e2472aacb4e205f6cd9c676e1ca"
  },
  {
    "url": "assets/js/19.590f0fbc.js",
    "revision": "9e4dadae3bf10adda4415aff5c29171b"
  },
  {
    "url": "assets/js/2.9176c398.js",
    "revision": "de385cf583a441c19e679250999077bb"
  },
  {
    "url": "assets/js/20.ab96df19.js",
    "revision": "31da51c7ebf9f799e54eedacea404118"
  },
  {
    "url": "assets/js/21.3b0de97d.js",
    "revision": "34b9d78a64a97cceafee0ca80047a38b"
  },
  {
    "url": "assets/js/22.f4989847.js",
    "revision": "6dc3f9ca2c3a5eebe5f2223868934df2"
  },
  {
    "url": "assets/js/23.e00ce534.js",
    "revision": "0808fe0fe6f0ac02517689e076042cfd"
  },
  {
    "url": "assets/js/24.9ac2adee.js",
    "revision": "60ea29f592c7bbc676fe368dd31434be"
  },
  {
    "url": "assets/js/25.e592b9ec.js",
    "revision": "5ee70e444810262100d2a3f12bd24657"
  },
  {
    "url": "assets/js/26.9832980e.js",
    "revision": "b232970e6b1682a82eff7799ebc4d765"
  },
  {
    "url": "assets/js/27.e0fb1189.js",
    "revision": "2d1f541137b6e85fd656e4ba08f24680"
  },
  {
    "url": "assets/js/28.01e13c90.js",
    "revision": "9b10551683364649505773592b183977"
  },
  {
    "url": "assets/js/29.9f347994.js",
    "revision": "b1b879536370d881929db6aa55c026a9"
  },
  {
    "url": "assets/js/3.28670c1f.js",
    "revision": "7601f82fe295bcffcfb469de0d8cb70a"
  },
  {
    "url": "assets/js/30.5c4249da.js",
    "revision": "a97d993bebcf7cca46fadae5d9a1d2fe"
  },
  {
    "url": "assets/js/31.a2fa93a8.js",
    "revision": "ad277bc9d691dbbaa2830810e510134c"
  },
  {
    "url": "assets/js/32.f5217fb9.js",
    "revision": "eea7c8b75b3fe2d937180e8c2641d81d"
  },
  {
    "url": "assets/js/33.01e2d849.js",
    "revision": "56567f88ed054aa2625ddddd95fc73f8"
  },
  {
    "url": "assets/js/4.07b4a59b.js",
    "revision": "8aaed57d97a9c98a7773e0173e90428a"
  },
  {
    "url": "assets/js/5.d86eeed7.js",
    "revision": "e94a799955f15e829e2922b47ba5d69c"
  },
  {
    "url": "assets/js/6.cbdbf4bc.js",
    "revision": "9262a64a9a9d3a302af2085f0f2b2ed4"
  },
  {
    "url": "assets/js/7.cb81412e.js",
    "revision": "7863949cef9a71bcaede258e93db6fc0"
  },
  {
    "url": "assets/js/8.a865f805.js",
    "revision": "5413489e586b8b0e720e613302490f74"
  },
  {
    "url": "assets/js/9.d4724e12.js",
    "revision": "4fbd80252f4cca17cf3c1f195bd60f78"
  },
  {
    "url": "assets/js/app.de6b3e70.js",
    "revision": "ec7d7e3f4bf26b1277e8991f2938168b"
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
    "revision": "b9b6fcc959c2b4340946241c416b3bc8"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "RFCs/0001-new-slot-syntax.html",
    "revision": "e4dfb53feb8a48b473b0c3eeaa891bf1"
  },
  {
    "url": "RFCs/0002-slot-syntax-shorthand.html",
    "revision": "786e60ad77a77107e1621bf1baed193e"
  },
  {
    "url": "RFCs/0003-dynamic-directive-arguments.html",
    "revision": "10a5ec2adb564d5156c250073075ee08"
  },
  {
    "url": "RFCs/0004-global-api-treeshaking.html",
    "revision": "92090614e40b767435ce26514ecc545c"
  },
  {
    "url": "RFCs/0005-replace-v-bind-sync-with-v-model-argument.html",
    "revision": "63377d328456a7031d0053c667f6d443"
  },
  {
    "url": "RFCs/0006-slots-unification.html",
    "revision": "d772aed09998fb544b9f4594355755bc"
  },
  {
    "url": "RFCs/0007-functional-async-api-change.html",
    "revision": "ace1ca156cb16c3958e354d75edcc644"
  },
  {
    "url": "RFCs/0008-render-function-api-change.html",
    "revision": "93bce7b29007cc3dad611b8a19c25db3"
  },
  {
    "url": "RFCs/0009-global-api-change.html",
    "revision": "e997f92d8d90d7ce8a13dd8b32a16903"
  },
  {
    "url": "RFCs/0010-optional-props-declaration.html",
    "revision": "8e4995a9f15524fddfdc7b630b74d1b3"
  },
  {
    "url": "RFCs/0011-v-model-api-change.html",
    "revision": "fa1299ab9a49d203a1383f5a41b9ac47"
  },
  {
    "url": "RFCs/0012-custom-directive-api-change.html",
    "revision": "b562e2787caabb43d31813145008402d"
  },
  {
    "url": "RFCs/0014-drop-keycode-support.html",
    "revision": "555c9e51a40aaf6666124eb6ded48302"
  },
  {
    "url": "RFCs/0015-remove-filters.html",
    "revision": "93868d207133f6a6922a4998b363dec2"
  },
  {
    "url": "RFCs/0016-remove-inline-templates.html",
    "revision": "ba0bb80e92f3c8b92e33b78cf182144b"
  },
  {
    "url": "RFCs/0017-transition-as-root.html",
    "revision": "0ac28c155fd71e265180236cbb7ed1ef"
  },
  {
    "url": "RFCs/0018-transition-class-change.html",
    "revision": "85dd3d882db739deb389059aea84e0ee"
  },
  {
    "url": "RFCs/0019-remove-data-object-declaration.html",
    "revision": "8f0155044b768125c419cb2b1a9a0ee4"
  },
  {
    "url": "RFCs/0020-events-api-change.html",
    "revision": "707d5ef4a3dbe7e4dbe5d52837c7cb81"
  },
  {
    "url": "RFCs/0021-router-link-scoped-slot.html",
    "revision": "b194f80b95406d18a811599896d826b1"
  },
  {
    "url": "RFCs/0022-router-merge-meta-routelocation.html",
    "revision": "e31238a6921bcb2d10c8df84136f4d86"
  },
  {
    "url": "RFCs/0023-scoped-styles-changes.html",
    "revision": "ff352b3a3f8f091048cb401c198a5403"
  },
  {
    "url": "RFCs/0024-attribute-coercion-behavior.html",
    "revision": "3faf5506e42050b65f22cacaf415390b"
  },
  {
    "url": "RFCs/0025-teleport.html",
    "revision": "fb3abcc42ebc0c3be9b672f377948d62"
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
