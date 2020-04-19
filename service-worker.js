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
    "revision": "4303302ce02e553e4a8db938b3674e34"
  },
  {
    "url": "API.html",
    "revision": "5d397de83589c86145eafbef53ab65ec"
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
    "url": "assets/js/13.ba7e4fad.js",
    "revision": "224a9536339ad3bcba028cd3ab32b798"
  },
  {
    "url": "assets/js/14.1dc30023.js",
    "revision": "16e7059d29d09d8171a90af91221a252"
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
    "url": "assets/js/17.199a7782.js",
    "revision": "4eac0cb23a922953e7feea433359392e"
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
    "url": "assets/js/35.fe7161b3.js",
    "revision": "bf087074733784354377a27e7f2d7862"
  },
  {
    "url": "assets/js/36.8946d68a.js",
    "revision": "55114e6df3bc5d540a3c7d471ef3b52d"
  },
  {
    "url": "assets/js/37.b16598ea.js",
    "revision": "db8cbad266d97d4c1d1eebcc98f8d9d0"
  },
  {
    "url": "assets/js/38.aa4602c6.js",
    "revision": "27503b84a6f06a0bcd7a41561b2c258a"
  },
  {
    "url": "assets/js/4.be248a4d.js",
    "revision": "707433f07bc5638c362eb3b0c9a65700"
  },
  {
    "url": "assets/js/5.dbe5f43d.js",
    "revision": "bc5044b1422c5d351e4b317ff4278a3c"
  },
  {
    "url": "assets/js/6.8d8745e4.js",
    "revision": "a4110cbd03dd0a81b8f2c6a1b5ab7aa3"
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
    "url": "assets/js/app.ce551f48.js",
    "revision": "54bcfaec0348a71ad41ad0108c108186"
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
    "revision": "2010bd3754f931710fdab1f0d4bd725d"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "RFCs/0001-new-slot-syntax.html",
    "revision": "ce7dce36b3206d11729ee4609368eed6"
  },
  {
    "url": "RFCs/0002-slot-syntax-shorthand.html",
    "revision": "c05d318c0a401a1944c30f0a538acf37"
  },
  {
    "url": "RFCs/0003-dynamic-directive-arguments.html",
    "revision": "31bf6fcdd7d8ac6523555b752f46dd20"
  },
  {
    "url": "RFCs/0004-global-api-treeshaking.html",
    "revision": "1124284b790a0e5591574bb698659459"
  },
  {
    "url": "RFCs/0005-replace-v-bind-sync-with-v-model-argument.html",
    "revision": "11ff5a3ee55a278ff37d623e25d82f91"
  },
  {
    "url": "RFCs/0006-slots-unification.html",
    "revision": "3c0914bd07edfaa81cc6da8cb4af141b"
  },
  {
    "url": "RFCs/0007-functional-async-api-change.html",
    "revision": "cd40bb85b151cc1a47e0a07e588a022b"
  },
  {
    "url": "RFCs/0008-render-function-api-change.html",
    "revision": "ed93207c10b783e55587b5a77b2c0936"
  },
  {
    "url": "RFCs/0009-global-api-change.html",
    "revision": "3ea4081863c8b4d2b5193649c0b7236a"
  },
  {
    "url": "RFCs/0010-optional-props-declaration.html",
    "revision": "8642907680095ba395ad7aca7218824c"
  },
  {
    "url": "RFCs/0011-v-model-api-change.html",
    "revision": "73f455ad546f487d2fd1deb171234bb9"
  },
  {
    "url": "RFCs/0012-custom-directive-api-change.html",
    "revision": "1d9a69bd3f32d1af40d0b8528967bf49"
  },
  {
    "url": "RFCs/0014-drop-keycode-support.html",
    "revision": "27f5d5aae3aa2f03a2d029f44faa5b62"
  },
  {
    "url": "RFCs/0015-remove-filters.html",
    "revision": "6baf0a51a249124abcbdf7250dd0b87e"
  },
  {
    "url": "RFCs/0016-remove-inline-templates.html",
    "revision": "517a146c237257ce970cd0523c546dc3"
  },
  {
    "url": "RFCs/0017-transition-as-root.html",
    "revision": "6553813d0258ba8e268d07f3be442a14"
  },
  {
    "url": "RFCs/0018-transition-class-change.html",
    "revision": "e0211bf1a939dfdf137422b91cb59621"
  },
  {
    "url": "RFCs/0019-remove-data-object-declaration.html",
    "revision": "4dbff76c42539faa5a8bc9b2e9a28510"
  },
  {
    "url": "RFCs/0020-events-api-change.html",
    "revision": "1eff6e491556cabf5fb4d3fa4fbf0cea"
  },
  {
    "url": "RFCs/0021-router-link-scoped-slot.html",
    "revision": "475d79779428fdfd79dd8f854d0b12eb"
  },
  {
    "url": "RFCs/0022-router-merge-meta-routelocation.html",
    "revision": "3853b0c9eefcecd818d40dcc0e0912aa"
  },
  {
    "url": "RFCs/0023-scoped-styles-changes.html",
    "revision": "4a654f48eddcde28e9ed6ca5327b46b5"
  },
  {
    "url": "RFCs/0024-attribute-coercion-behavior.html",
    "revision": "19754f915cddf380adbeec6fd6a0b2d2"
  },
  {
    "url": "RFCs/0025-teleport.html",
    "revision": "e6858a71ae946e05d2cdd6752bfe9256"
  },
  {
    "url": "RFCs/0026-async-component-api.html",
    "revision": "2eb99bfea1ccd36a72792e7506624457"
  },
  {
    "url": "RFCs/0027-custom-elements-interop.html",
    "revision": "00756403b1741d07d2ba4e3df717534b"
  },
  {
    "url": "RFCs/0028-router-active-link.html",
    "revision": "8d57ae5f37c1d358c8a709a2d1078e4f"
  },
  {
    "url": "RFCs/0029-router-dynamic-routing.html",
    "revision": "5a3eec532af843c04f1927bffadde681"
  },
  {
    "url": "RFCs/0030-emits-option.html",
    "revision": "ef07f53a6c8fbb3de79ef4ea4f149047"
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
