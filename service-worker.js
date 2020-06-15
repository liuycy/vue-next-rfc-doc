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
    "revision": "fecf629f5883554abad4d1108a93fcea"
  },
  {
    "url": "API.html",
    "revision": "da7225d2252e6cebea5991432ed02b9a"
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
    "url": "assets/js/app.714066e8.js",
    "revision": "b04091478dece7f5ac323de9db9bd212"
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
    "revision": "bd8c206995bd1df3f5708c6dca31b7a3"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "RFCs/0001-new-slot-syntax.html",
    "revision": "184fda90016918b29249fefe03736630"
  },
  {
    "url": "RFCs/0002-slot-syntax-shorthand.html",
    "revision": "33452825bf5c3aa95e78899e60164b0a"
  },
  {
    "url": "RFCs/0003-dynamic-directive-arguments.html",
    "revision": "5aab08cb962a37b206b8fdba20707c68"
  },
  {
    "url": "RFCs/0004-global-api-treeshaking.html",
    "revision": "047a45a73e80513e923dc870aa704219"
  },
  {
    "url": "RFCs/0005-replace-v-bind-sync-with-v-model-argument.html",
    "revision": "12f6460c026a3e81284603d7ba2829f4"
  },
  {
    "url": "RFCs/0006-slots-unification.html",
    "revision": "5e816117d25badbc0cfd31aa8bfba6e3"
  },
  {
    "url": "RFCs/0007-functional-async-api-change.html",
    "revision": "539003fcb28cbe870abeb9eaf3f7fd93"
  },
  {
    "url": "RFCs/0008-render-function-api-change.html",
    "revision": "23459b32b8586ef37d677d233993c665"
  },
  {
    "url": "RFCs/0009-global-api-change.html",
    "revision": "54615d433d53972e139ecdec7e70f791"
  },
  {
    "url": "RFCs/0010-optional-props-declaration.html",
    "revision": "c64d1301e02e91de4a9fc89aa63474ff"
  },
  {
    "url": "RFCs/0011-v-model-api-change.html",
    "revision": "ae7e606e818e57af7b5bf5b4b7d0b64f"
  },
  {
    "url": "RFCs/0012-custom-directive-api-change.html",
    "revision": "e8f30b9967a736ca00908cd1e4a435db"
  },
  {
    "url": "RFCs/0014-drop-keycode-support.html",
    "revision": "56decdb36ac730468adb33ebdb9317e5"
  },
  {
    "url": "RFCs/0015-remove-filters.html",
    "revision": "73270a91f9da2f2f582dd394d5dfc726"
  },
  {
    "url": "RFCs/0016-remove-inline-templates.html",
    "revision": "bf35f2d279ef3b72fa80d7512a277f88"
  },
  {
    "url": "RFCs/0017-transition-as-root.html",
    "revision": "bc5e5344806806b0d68deb2a2381446e"
  },
  {
    "url": "RFCs/0018-transition-class-change.html",
    "revision": "5cade91bf1864df7c3927cc041d55b8a"
  },
  {
    "url": "RFCs/0019-remove-data-object-declaration.html",
    "revision": "25ae3350a30442cf87ce36bcd7dd8182"
  },
  {
    "url": "RFCs/0020-events-api-change.html",
    "revision": "c82d0617af79bc6aa5f3fd588a975a4b"
  },
  {
    "url": "RFCs/0021-router-link-scoped-slot.html",
    "revision": "1452945b24b996aa62fd9a022e9d2dbb"
  },
  {
    "url": "RFCs/0022-router-merge-meta-routelocation.html",
    "revision": "ed91e13c1d8248d0d3cb47d3ab8fcb73"
  },
  {
    "url": "RFCs/0023-scoped-styles-changes.html",
    "revision": "3e0f309bebb2b6eaaf9b2ed55c9a998c"
  },
  {
    "url": "RFCs/0024-attribute-coercion-behavior.html",
    "revision": "57b2ee9ec4af3002d3107ddb01f860d5"
  },
  {
    "url": "RFCs/0025-teleport.html",
    "revision": "173448d67e9e02d5e483f750ae02acfd"
  },
  {
    "url": "RFCs/0026-async-component-api.html",
    "revision": "783d74e080e95ff5b89cd7310256c5f5"
  },
  {
    "url": "RFCs/0027-custom-elements-interop.html",
    "revision": "bf9172d0f714649dcc539b7b6347eab7"
  },
  {
    "url": "RFCs/0028-router-active-link.html",
    "revision": "897c230ae27846165501fa74a877ba98"
  },
  {
    "url": "RFCs/0029-router-dynamic-routing.html",
    "revision": "d8458c1df503a9c24a396f5e6366f0e2"
  },
  {
    "url": "RFCs/0030-emits-option.html",
    "revision": "18e21cc76df1aaa3815a76ccd5a540b5"
  },
  {
    "url": "RFCs/0031-attr-fallthrough.html",
    "revision": "7805ad089ebfe1adae1c74e0fa5f6509"
  },
  {
    "url": "RFCs/0032-vtu-improve-async-workflow.html",
    "revision": "edee6f10eb77d5a4f6e6223df450ea15"
  },
  {
    "url": "RFCs/0033-router-navigation-failures.html",
    "revision": "1812b927fa2f258e7c241c1395ef2182"
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
