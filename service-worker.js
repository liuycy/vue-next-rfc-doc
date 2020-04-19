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
    "revision": "80b734541c88caac9b691b848f2e035c"
  },
  {
    "url": "API.html",
    "revision": "51b42a68ee948fefc66bab7f974d675b"
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
    "url": "assets/js/35.c86122bf.js",
    "revision": "9c14ab4df158958786a90ad4baa4e666"
  },
  {
    "url": "assets/js/36.346e9959.js",
    "revision": "ad071635b059bab7b04af6d6f58475cd"
  },
  {
    "url": "assets/js/37.a78ee880.js",
    "revision": "e1329f95898fcf0af1bd3152f8b2a578"
  },
  {
    "url": "assets/js/4.5e0b5fee.js",
    "revision": "007fd6959c7f480f3c318ca70a9f8704"
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
    "url": "assets/js/app.a5df5a44.js",
    "revision": "33c2fead71c4696868cfd68b1e63fa10"
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
    "revision": "a86a718b70f857accbbcbbc9940beb4e"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "RFCs/0001-new-slot-syntax.html",
    "revision": "d6c3d2ab1a9e4f2dd7df6750e69d9a9a"
  },
  {
    "url": "RFCs/0002-slot-syntax-shorthand.html",
    "revision": "912f04ca4ebbf3073644d8dcab53804e"
  },
  {
    "url": "RFCs/0003-dynamic-directive-arguments.html",
    "revision": "7aa57533f349e7462f5f80b502cb7d0b"
  },
  {
    "url": "RFCs/0004-global-api-treeshaking.html",
    "revision": "e183906ecad35265bcd968d041d38787"
  },
  {
    "url": "RFCs/0005-replace-v-bind-sync-with-v-model-argument.html",
    "revision": "efc036b177bce3f3f0fb9865fa64c220"
  },
  {
    "url": "RFCs/0006-slots-unification.html",
    "revision": "bcf80f3e4765ea2cc8928201f9c9344e"
  },
  {
    "url": "RFCs/0007-functional-async-api-change.html",
    "revision": "ac27e9a7689f0b9c28b1f477c466cd6a"
  },
  {
    "url": "RFCs/0008-render-function-api-change.html",
    "revision": "33ba31e674887a7841c2509c0be05aec"
  },
  {
    "url": "RFCs/0009-global-api-change.html",
    "revision": "ab5b46f1079c2a735b72d81d4c36f82f"
  },
  {
    "url": "RFCs/0010-optional-props-declaration.html",
    "revision": "d938438dd825c192adb768a0e56bb40f"
  },
  {
    "url": "RFCs/0011-v-model-api-change.html",
    "revision": "d92a1db8d2183a3a3ad7878b5c4758f0"
  },
  {
    "url": "RFCs/0012-custom-directive-api-change.html",
    "revision": "310aa711461e85b9055c859ff2ad4066"
  },
  {
    "url": "RFCs/0014-drop-keycode-support.html",
    "revision": "d8d6f5a9a7c3895d47be5012641cf895"
  },
  {
    "url": "RFCs/0015-remove-filters.html",
    "revision": "82ad40c569035c0d40e452c755e1aa90"
  },
  {
    "url": "RFCs/0016-remove-inline-templates.html",
    "revision": "2270f89e151b343a8953d2258b27eac2"
  },
  {
    "url": "RFCs/0017-transition-as-root.html",
    "revision": "b7a02b582cc24e5216ef3fa7e2a1b855"
  },
  {
    "url": "RFCs/0018-transition-class-change.html",
    "revision": "c9cc7e194bdd3d6530b97a80cab6ed7e"
  },
  {
    "url": "RFCs/0019-remove-data-object-declaration.html",
    "revision": "e836f8a06a0568e434400e6d7efbbf5f"
  },
  {
    "url": "RFCs/0020-events-api-change.html",
    "revision": "3bafd08cff2329fe5f2da261c09eb016"
  },
  {
    "url": "RFCs/0021-router-link-scoped-slot.html",
    "revision": "139d8cc22bb1afeec48d41c6bf2f88a6"
  },
  {
    "url": "RFCs/0022-router-merge-meta-routelocation.html",
    "revision": "02e2f273b179863457deee49b109fa57"
  },
  {
    "url": "RFCs/0023-scoped-styles-changes.html",
    "revision": "27c3b0c49e0c9f9d96acc0cffec081ec"
  },
  {
    "url": "RFCs/0024-attribute-coercion-behavior.html",
    "revision": "95b1a469f3e89bef1336dbdbdf840074"
  },
  {
    "url": "RFCs/0025-teleport.html",
    "revision": "df53ee60d6b6b7aecd63129f85974384"
  },
  {
    "url": "RFCs/0026-async-component-api.html",
    "revision": "d1fd95984a16b8e12cfd999e8eb04dff"
  },
  {
    "url": "RFCs/0027-custom-elements-interop.html",
    "revision": "bd8eeeaa5966e62034774df3c9795367"
  },
  {
    "url": "RFCs/0028-router-active-link.html",
    "revision": "3822f7475eb90896c3c5121d4299a326"
  },
  {
    "url": "RFCs/0029-router-dynamic-routing.html",
    "revision": "ebcac9fbeaf7ee464ce8d56d000feeb4"
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
