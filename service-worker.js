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
    "revision": "009ad43409acf258b24aa18a2d652359"
  },
  {
    "url": "API.html",
    "revision": "87812307c240e498e14caf4cc151aba2"
  },
  {
    "url": "assets/css/0.styles.cf1b8447.css",
    "revision": "e3e9c28bff3553c29efa4bd85d2516dc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.44ccc906.js",
    "revision": "e067a3c5952107c634b31db7d9df2a78"
  },
  {
    "url": "assets/js/11.152b8729.js",
    "revision": "9b21c08222ad67c4ffac30819e62987c"
  },
  {
    "url": "assets/js/12.e6ab691a.js",
    "revision": "6348701bb71410c053e1a0f5046dd780"
  },
  {
    "url": "assets/js/13.913d7933.js",
    "revision": "2ab2dfbe28024c15bbd4c8ef48b00b6e"
  },
  {
    "url": "assets/js/14.6db82667.js",
    "revision": "1892f46be1a6c53958366975373a4250"
  },
  {
    "url": "assets/js/15.bef8526b.js",
    "revision": "f3e143376b00be590f5e002d25b705bc"
  },
  {
    "url": "assets/js/16.8f34d5e5.js",
    "revision": "e46cce135e3a4f9a607ddb9a8a6321cc"
  },
  {
    "url": "assets/js/17.82e09e2a.js",
    "revision": "9e82ceb36e8798b591b2d948dbc9910a"
  },
  {
    "url": "assets/js/18.4c323be9.js",
    "revision": "2ef20b9fd7526e3b407be5dda94d69e7"
  },
  {
    "url": "assets/js/19.19f8b0d9.js",
    "revision": "dc847d9c706d818043f167bfdd62a24f"
  },
  {
    "url": "assets/js/2.f670e6b3.js",
    "revision": "50097ce2ba88e0839ca3ad733f450069"
  },
  {
    "url": "assets/js/20.3f05c0dc.js",
    "revision": "d38374dd824b90fa9c075b620dea0af3"
  },
  {
    "url": "assets/js/21.cb53ccfa.js",
    "revision": "bfaa9da49b49a41e56ac95713ecd35b8"
  },
  {
    "url": "assets/js/22.f24ac774.js",
    "revision": "46ca9382dfd95c511ec81a1cde8a1f6b"
  },
  {
    "url": "assets/js/23.0b371fde.js",
    "revision": "b967908a4621802c7005fa5b91c2d7c3"
  },
  {
    "url": "assets/js/24.1fc1efec.js",
    "revision": "3fe8088fd7605c03639b22baa3f514cd"
  },
  {
    "url": "assets/js/25.10fae7d3.js",
    "revision": "06996956c8112e1ba1176f06aaa62983"
  },
  {
    "url": "assets/js/26.1c3328b7.js",
    "revision": "73b4d75e6efe4be9150cf2234ca6eb63"
  },
  {
    "url": "assets/js/27.f77843e9.js",
    "revision": "172445eb12c2dd278899fb545cd73b3e"
  },
  {
    "url": "assets/js/28.bab8d959.js",
    "revision": "853a5fc63933835995f82b33fb0a8227"
  },
  {
    "url": "assets/js/29.57d6ac6b.js",
    "revision": "5b8bd037580de662ed39997654f0b03b"
  },
  {
    "url": "assets/js/3.fbfa2398.js",
    "revision": "bf8d56b4d4a327405d9b9262e82776e6"
  },
  {
    "url": "assets/js/30.b61bc20f.js",
    "revision": "33c3be9139b3675f39b4a00b95da2056"
  },
  {
    "url": "assets/js/31.7606bb46.js",
    "revision": "7bc7f0e300da40421c966a1710cdebd2"
  },
  {
    "url": "assets/js/32.fe0bf418.js",
    "revision": "5c23016900bafad2694784148cebcfa0"
  },
  {
    "url": "assets/js/33.451a5547.js",
    "revision": "32e7c1f05789f5b1efba46226ab89cea"
  },
  {
    "url": "assets/js/34.015969cb.js",
    "revision": "a173392ed3830af91ebcfd41e934340e"
  },
  {
    "url": "assets/js/35.b95cb977.js",
    "revision": "6ce9fe2a28bc9f5dd0e2d28969cd80a9"
  },
  {
    "url": "assets/js/36.f35c7f10.js",
    "revision": "d3fd07d593fb3ef579098dd88b370e5b"
  },
  {
    "url": "assets/js/37.10b1e9f7.js",
    "revision": "19a6e39c18f60da877c5f13d9a9b7b7b"
  },
  {
    "url": "assets/js/38.201890ea.js",
    "revision": "0f29b19614de8847df1adf5a9df3806b"
  },
  {
    "url": "assets/js/39.8fa07459.js",
    "revision": "80a602807a850108a6ee455edda380bb"
  },
  {
    "url": "assets/js/4.0cb4fa01.js",
    "revision": "1831ac1749a7c9bd709b06df05c8237d"
  },
  {
    "url": "assets/js/40.2b7a45bd.js",
    "revision": "20436bef6669a0fc976d8a6fb34e72bb"
  },
  {
    "url": "assets/js/41.593bbd2c.js",
    "revision": "e7bb6bf84db67e11ef28615b7b9cee8b"
  },
  {
    "url": "assets/js/5.dbe5f43d.js",
    "revision": "bc5044b1422c5d351e4b317ff4278a3c"
  },
  {
    "url": "assets/js/6.0e409d1f.js",
    "revision": "a521c17fa28473b66e435f2703714e24"
  },
  {
    "url": "assets/js/7.af1acdd5.js",
    "revision": "8f4a28d808dc21ee9890bf2aae7b57ce"
  },
  {
    "url": "assets/js/8.8db4bd63.js",
    "revision": "b4a7ed50a98b2f806ee11c584bd18d97"
  },
  {
    "url": "assets/js/9.f978a30c.js",
    "revision": "70cb70f1bf58751af1be4558d08ab33b"
  },
  {
    "url": "assets/js/app.188002d5.js",
    "revision": "263b3986a6f390f25592db46fae55a4b"
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
    "revision": "c9e5a157310615915255b0559d646925"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "RFCs/0001-new-slot-syntax.html",
    "revision": "1cfb30069cf01eba34373ee261f58faf"
  },
  {
    "url": "RFCs/0002-slot-syntax-shorthand.html",
    "revision": "62846a0c96159f05285cbb28acd4b8aa"
  },
  {
    "url": "RFCs/0003-dynamic-directive-arguments.html",
    "revision": "97d836d670231bda6196d654ccee2ad6"
  },
  {
    "url": "RFCs/0004-global-api-treeshaking.html",
    "revision": "b815f2c1a2005af134392127012999e8"
  },
  {
    "url": "RFCs/0005-replace-v-bind-sync-with-v-model-argument.html",
    "revision": "452709a56e28fad21927bf641b0f7d1e"
  },
  {
    "url": "RFCs/0006-slots-unification.html",
    "revision": "94694da09e7a994799b3ed19fd8d5be9"
  },
  {
    "url": "RFCs/0007-functional-async-api-change.html",
    "revision": "c140f184d401260569cccdafbcf4c563"
  },
  {
    "url": "RFCs/0008-render-function-api-change.html",
    "revision": "2ae38be204795a8a302ffd27f85aa203"
  },
  {
    "url": "RFCs/0009-global-api-change.html",
    "revision": "26e3f2ddfb7cc223442272cbafe5d8ac"
  },
  {
    "url": "RFCs/0010-optional-props-declaration.html",
    "revision": "d3da4b055c8fefa86bf09f2b0434151b"
  },
  {
    "url": "RFCs/0011-v-model-api-change.html",
    "revision": "e9fb6b3dbac5a7f94655b17f3c94c8c0"
  },
  {
    "url": "RFCs/0012-custom-directive-api-change.html",
    "revision": "03c164bbcae6159902c50bd3ca8657b7"
  },
  {
    "url": "RFCs/0014-drop-keycode-support.html",
    "revision": "aa91387d322009628bf6092b58c63b99"
  },
  {
    "url": "RFCs/0015-remove-filters.html",
    "revision": "91cade65d0eba9569ecf103ca4e40809"
  },
  {
    "url": "RFCs/0016-remove-inline-templates.html",
    "revision": "c3f119b1d346ec5aff9086b0903e9d4b"
  },
  {
    "url": "RFCs/0017-transition-as-root.html",
    "revision": "306f0efd5f93cd12e8a037111bbd1383"
  },
  {
    "url": "RFCs/0018-transition-class-change.html",
    "revision": "4cab09f6d0faaf774a86d5df300f4fc4"
  },
  {
    "url": "RFCs/0019-remove-data-object-declaration.html",
    "revision": "ad285eb4ee49a7316539cf9d922888d7"
  },
  {
    "url": "RFCs/0020-events-api-change.html",
    "revision": "22796547a39c1bc4fde2b5aaf14c50f8"
  },
  {
    "url": "RFCs/0021-router-link-scoped-slot.html",
    "revision": "9f842453ca585635efddb5ce7605f8b4"
  },
  {
    "url": "RFCs/0022-router-merge-meta-routelocation.html",
    "revision": "5dc340d9b7ef1640c5c439f757d72cfd"
  },
  {
    "url": "RFCs/0023-scoped-styles-changes.html",
    "revision": "7758e9e1b76369ce1c0baf8956d172f8"
  },
  {
    "url": "RFCs/0024-attribute-coercion-behavior.html",
    "revision": "3b06c6f200f5afbd32d4f038d67e738e"
  },
  {
    "url": "RFCs/0025-teleport.html",
    "revision": "0fb54937640c2999402b8dfe50a1a8bd"
  },
  {
    "url": "RFCs/0026-async-component-api.html",
    "revision": "7d7ecf05d94cbea9288cff7311ec29cf"
  },
  {
    "url": "RFCs/0027-custom-elements-interop.html",
    "revision": "225b5416a7945ebaccc7517931389409"
  },
  {
    "url": "RFCs/0028-router-active-link.html",
    "revision": "2f550cf71bfab2cc6613a5011391fe4c"
  },
  {
    "url": "RFCs/0029-router-dynamic-routing.html",
    "revision": "5f5fc27dbe8caf21bdb07c3b5a1ff47d"
  },
  {
    "url": "RFCs/0030-emits-option.html",
    "revision": "287943916c05b2d50cbc146d2552b255"
  },
  {
    "url": "RFCs/0031-attr-fallthrough.html",
    "revision": "c6ce73bd94e60b86bc7dfacb0690e897"
  },
  {
    "url": "RFCs/0032-vtu-improve-async-workflow.html",
    "revision": "8d712931bf2d925f20bbf7d8cb113919"
  },
  {
    "url": "RFCs/0033-router-navigation-failures.html",
    "revision": "c50bc2a98d2cf902357388ee5bf6fc48"
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
