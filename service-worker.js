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
    "revision": "1c45a51622868f74481088f916526cb8"
  },
  {
    "url": "API.html",
    "revision": "83903ab987ede32fb9a4180737f220a3"
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
    "url": "assets/js/22.82667d1a.js",
    "revision": "4726deb6acce4e832676c96f964faf9d"
  },
  {
    "url": "assets/js/23.0860caf2.js",
    "revision": "61d58ff0e643c93df98c57d6132b9d79"
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
    "url": "assets/js/26.4482ac0f.js",
    "revision": "dd710b4d668a7f6702de4f3e6388374a"
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
    "url": "assets/js/37.35aa7569.js",
    "revision": "24cacded555241760d467d60bd751983"
  },
  {
    "url": "assets/js/38.c83b2b20.js",
    "revision": "f2be5f88180c901196c5f9ba059ed5b9"
  },
  {
    "url": "assets/js/39.2392c39a.js",
    "revision": "2367eb1a1e6950e7197677684bae54a3"
  },
  {
    "url": "assets/js/4.a38e7eb6.js",
    "revision": "4ca4831ceb3e6c0b67fd0673c2fa270b"
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
    "url": "assets/js/app.d1b53f39.js",
    "revision": "6314faad6293a7cb2f0a3254f902b3d1"
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
    "revision": "0f5ff29fb160ccab74c846ba3002b355"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "RFCs/0001-new-slot-syntax.html",
    "revision": "d1f16a152542d422c67b20710fc18a3a"
  },
  {
    "url": "RFCs/0002-slot-syntax-shorthand.html",
    "revision": "1d040796a610e0ab5561a681be01fb48"
  },
  {
    "url": "RFCs/0003-dynamic-directive-arguments.html",
    "revision": "bfa63ed5129c27af2e5eb12c8146130a"
  },
  {
    "url": "RFCs/0004-global-api-treeshaking.html",
    "revision": "0360970c6109bc81c568b2ec119d130e"
  },
  {
    "url": "RFCs/0005-replace-v-bind-sync-with-v-model-argument.html",
    "revision": "4cb752ad74653b628eab26335ead3a37"
  },
  {
    "url": "RFCs/0006-slots-unification.html",
    "revision": "32e8d84e5f65b05d1b5c4a4c0eb53c9e"
  },
  {
    "url": "RFCs/0007-functional-async-api-change.html",
    "revision": "4f409d5ce54e25b57bc48d924f6483ea"
  },
  {
    "url": "RFCs/0008-render-function-api-change.html",
    "revision": "7afd8bbac4a8c2b8807cf0c3e9ee3fe2"
  },
  {
    "url": "RFCs/0009-global-api-change.html",
    "revision": "e7a70be189e138df9f721c487fb86d52"
  },
  {
    "url": "RFCs/0010-optional-props-declaration.html",
    "revision": "b7ca442bd575305a3a9dc542b5120375"
  },
  {
    "url": "RFCs/0011-v-model-api-change.html",
    "revision": "13cb5e7e84e0fd448b9e2340bb6ecdd7"
  },
  {
    "url": "RFCs/0012-custom-directive-api-change.html",
    "revision": "f59ebceecbff7303d67da971c806dfb9"
  },
  {
    "url": "RFCs/0014-drop-keycode-support.html",
    "revision": "4eb1f0eb4067374664d3f2dcaf6c9308"
  },
  {
    "url": "RFCs/0015-remove-filters.html",
    "revision": "111d34a3c926f73c1c1da205ec18f36b"
  },
  {
    "url": "RFCs/0016-remove-inline-templates.html",
    "revision": "aacb749250b0d248b3a28cfb252ecdc5"
  },
  {
    "url": "RFCs/0017-transition-as-root.html",
    "revision": "ea04275d4197fe5a89fcfc25d5820f63"
  },
  {
    "url": "RFCs/0018-transition-class-change.html",
    "revision": "276530f3e235d3a471b1bdd17a2136f4"
  },
  {
    "url": "RFCs/0019-remove-data-object-declaration.html",
    "revision": "369aff1c67b52a03847c00591fd8c792"
  },
  {
    "url": "RFCs/0020-events-api-change.html",
    "revision": "35452695dc4e1e4eeed91e5fbcd16086"
  },
  {
    "url": "RFCs/0021-router-link-scoped-slot.html",
    "revision": "2c8641c9e7fc22918fc81dce3a4374ac"
  },
  {
    "url": "RFCs/0022-router-merge-meta-routelocation.html",
    "revision": "e1bbee228191b954be4204ab6b900489"
  },
  {
    "url": "RFCs/0023-scoped-styles-changes.html",
    "revision": "4839532f7c4a4ab417826da61f04df90"
  },
  {
    "url": "RFCs/0024-attribute-coercion-behavior.html",
    "revision": "1a2ab370c4de5485a9c2bdeca31c20ba"
  },
  {
    "url": "RFCs/0025-teleport.html",
    "revision": "21e14470bc50db9a0f190f188cc13d2c"
  },
  {
    "url": "RFCs/0026-async-component-api.html",
    "revision": "fc56c4d0abe201c482a8d5916bb6922f"
  },
  {
    "url": "RFCs/0027-custom-elements-interop.html",
    "revision": "1449b9b88741da5cd989ad0461608a46"
  },
  {
    "url": "RFCs/0028-router-active-link.html",
    "revision": "fabce512a3f959a132d5154dd6e469b9"
  },
  {
    "url": "RFCs/0029-router-dynamic-routing.html",
    "revision": "0ba7b47e7e04bb6702d9fc9997e88efd"
  },
  {
    "url": "RFCs/0030-emits-option.html",
    "revision": "7b9f67983a92fed8edab781e796954f8"
  },
  {
    "url": "RFCs/0031-attr-fallthrough.html",
    "revision": "2aa1cfd8628375da3b524cc3cac23ce6"
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
