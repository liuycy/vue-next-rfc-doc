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
    "revision": "a822485fc1a8f09de20c17355ee45e23"
  },
  {
    "url": "API.html",
    "revision": "d0c5fcecf723f25f37c422ae97e4ea84"
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
    "url": "assets/js/10.edce64e2.js",
    "revision": "db6acc3ffa9b990055782afc7fd061aa"
  },
  {
    "url": "assets/js/11.2f2c23f1.js",
    "revision": "c48595a91ccbb52da60d0c605c3f109f"
  },
  {
    "url": "assets/js/12.f3650d0c.js",
    "revision": "36552e9bab18cbeed48402d75fde15bc"
  },
  {
    "url": "assets/js/13.7dd565b3.js",
    "revision": "09db775abb07b7e84aecfdcd6e61404c"
  },
  {
    "url": "assets/js/14.19e06b8c.js",
    "revision": "20b2060aaa8c8d776f3b425b5a360615"
  },
  {
    "url": "assets/js/15.29b3eaf3.js",
    "revision": "c63e472b586d508b0b23f9617e7c9de9"
  },
  {
    "url": "assets/js/16.26db92a6.js",
    "revision": "903a141ac74169cb8dd176efb7bfc33c"
  },
  {
    "url": "assets/js/17.ba2a3270.js",
    "revision": "e64ab919e6b5991ce96365c0fbdef747"
  },
  {
    "url": "assets/js/18.e6f163ae.js",
    "revision": "61a200e05d44df7b3cd9b79778d6e486"
  },
  {
    "url": "assets/js/19.a72e8200.js",
    "revision": "c68ccf2187efc7765102973f98e73ae7"
  },
  {
    "url": "assets/js/2.f670e6b3.js",
    "revision": "50097ce2ba88e0839ca3ad733f450069"
  },
  {
    "url": "assets/js/20.3a4a64cf.js",
    "revision": "2f65fae58a1d670573914f1b20e7f183"
  },
  {
    "url": "assets/js/21.cdaf6693.js",
    "revision": "d1d35d12110457967bcb8390850aa4c3"
  },
  {
    "url": "assets/js/22.33c476c1.js",
    "revision": "3afba36a20412507f6d5707056e6d942"
  },
  {
    "url": "assets/js/23.711f5018.js",
    "revision": "0e41cf7c89691085986223157eab96bb"
  },
  {
    "url": "assets/js/24.a1bf5370.js",
    "revision": "790e037d674f48c18d1a6f0686ed25ff"
  },
  {
    "url": "assets/js/25.bbdc59c3.js",
    "revision": "ac241a2b2b1a33ffabb1b5bf1a4589d5"
  },
  {
    "url": "assets/js/26.3c8abc23.js",
    "revision": "19339ab37aaf58df189a66ec83600ea7"
  },
  {
    "url": "assets/js/27.c526d7df.js",
    "revision": "1693ef9aabc256a0ad6d71dfcb669741"
  },
  {
    "url": "assets/js/28.68538a20.js",
    "revision": "3678762899f4c25432bea7af2ec24674"
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
    "url": "assets/js/30.79ec083e.js",
    "revision": "1f2bdff37a0e907854a828a01c96ac38"
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
    "url": "assets/js/6.80a033a5.js",
    "revision": "98d39fea3b0cc14ad8e215f71115fdb6"
  },
  {
    "url": "assets/js/7.91354efe.js",
    "revision": "b362ce3a677e48feced52fa39873af2e"
  },
  {
    "url": "assets/js/8.0fb31109.js",
    "revision": "5a05b067e443677a8d1ba133ca8a5bd7"
  },
  {
    "url": "assets/js/9.1d1211cf.js",
    "revision": "5f3f1d033a346a988f85731714ae6b87"
  },
  {
    "url": "assets/js/app.7882f1e6.js",
    "revision": "f629d72b67e1d091a678e833ea1f59be"
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
    "revision": "feaaaf13adf1e9389ab3937b9ed6b7f0"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "RFCs/0001-new-slot-syntax.html",
    "revision": "c9c1311cb63698d990f93b320ed12b3b"
  },
  {
    "url": "RFCs/0002-slot-syntax-shorthand.html",
    "revision": "306c122175575605e1985709ff1227d5"
  },
  {
    "url": "RFCs/0003-dynamic-directive-arguments.html",
    "revision": "46a418852e3ef0326e29d52e563d3559"
  },
  {
    "url": "RFCs/0004-global-api-treeshaking.html",
    "revision": "a99375ee6f52dc2e205a6efd61612a3c"
  },
  {
    "url": "RFCs/0005-replace-v-bind-sync-with-v-model-argument.html",
    "revision": "88a621b0f9cfe2e9cb21467334248ac0"
  },
  {
    "url": "RFCs/0006-slots-unification.html",
    "revision": "4b50333bfa3b564bc1eb4a3694dde835"
  },
  {
    "url": "RFCs/0007-functional-async-api-change.html",
    "revision": "d75145ba996fe4e71730fb773aae91bf"
  },
  {
    "url": "RFCs/0008-render-function-api-change.html",
    "revision": "19d18f0f25d4a7c674982e875f47bb5f"
  },
  {
    "url": "RFCs/0009-global-api-change.html",
    "revision": "0f6192b4206ef690e16b53fe8a02d8ec"
  },
  {
    "url": "RFCs/0010-optional-props-declaration.html",
    "revision": "17e904cb656f5d9a9d47c79fafcc4a92"
  },
  {
    "url": "RFCs/0011-v-model-api-change.html",
    "revision": "15b1bd37d021fb04b234c5a2f7e6cdb5"
  },
  {
    "url": "RFCs/0012-custom-directive-api-change.html",
    "revision": "2ef0424675d231d3775bb3924329586f"
  },
  {
    "url": "RFCs/0014-drop-keycode-support.html",
    "revision": "09b90d4fa233d7d7ed6004be69245d23"
  },
  {
    "url": "RFCs/0015-remove-filters.html",
    "revision": "25de664effedd226f774491e9def2124"
  },
  {
    "url": "RFCs/0016-remove-inline-templates.html",
    "revision": "0290b85cc6364f0a7cfe0e482e53296f"
  },
  {
    "url": "RFCs/0017-transition-as-root.html",
    "revision": "691288c0dd41d0232d28b87f3e492f37"
  },
  {
    "url": "RFCs/0018-transition-class-change.html",
    "revision": "fe5ed5e8182244c5f94684500f4339e7"
  },
  {
    "url": "RFCs/0019-remove-data-object-declaration.html",
    "revision": "753bd45df76a10bd2b8fe7e3a5d739ef"
  },
  {
    "url": "RFCs/0020-events-api-change.html",
    "revision": "9cc948a241530784ebc10fffb08a3599"
  },
  {
    "url": "RFCs/0021-router-link-scoped-slot.html",
    "revision": "6d5e511bf4ecb1bd89d4437c688ae7bb"
  },
  {
    "url": "RFCs/0022-router-merge-meta-routelocation.html",
    "revision": "967bf2a773965393b3729b6d94cd254c"
  },
  {
    "url": "RFCs/0023-scoped-styles-changes.html",
    "revision": "8434901e5a76a7e918509cba2ef7107d"
  },
  {
    "url": "RFCs/0024-attribute-coercion-behavior.html",
    "revision": "25854f0396ca0cc725f8ecee070c7a7b"
  },
  {
    "url": "RFCs/0025-teleport.html",
    "revision": "74e17959d4ee566f7d2d861a57b21f81"
  },
  {
    "url": "RFCs/0026-async-component-api.html",
    "revision": "3b94e735171178550d27f7bde52551bc"
  },
  {
    "url": "RFCs/0027-custom-elements-interop.html",
    "revision": "aa7525e062863e562f492e6fa524f1da"
  },
  {
    "url": "RFCs/0028-router-active-link.html",
    "revision": "1fb0cd7cd4f55940dc795542247ce2a4"
  },
  {
    "url": "RFCs/0029-router-dynamic-routing.html",
    "revision": "8e33c0dee4e2e3e82d06d509edbeb25e"
  },
  {
    "url": "RFCs/0030-emits-option.html",
    "revision": "5745388759c9fa9df736cc93338d0652"
  },
  {
    "url": "RFCs/0031-attr-fallthrough.html",
    "revision": "65d4a4dc95bf3c88e07d3b5779c0d1a2"
  },
  {
    "url": "RFCs/0032-vtu-improve-async-workflow.html",
    "revision": "a2a4a42f7a46226b4a82c1d71eac841f"
  },
  {
    "url": "RFCs/0033-router-navigation-failures.html",
    "revision": "b7c28e0d047a8d9e0fcba76cc00c260f"
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
