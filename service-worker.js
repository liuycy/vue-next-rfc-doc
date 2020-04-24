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
    "revision": "bb1b66dad05c23c58359deb8ac975a87"
  },
  {
    "url": "API.html",
    "revision": "9bcb0bdc7dc905018361497e1aab84de"
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
    "url": "assets/js/21.6ec3b883.js",
    "revision": "13ff277d96df41264a7d779e1a30d174"
  },
  {
    "url": "assets/js/22.33c476c1.js",
    "revision": "3afba36a20412507f6d5707056e6d942"
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
    "url": "assets/js/25.1f332744.js",
    "revision": "fc89bb16a6bdd3a55f8c650de71127c6"
  },
  {
    "url": "assets/js/26.6cfecaf9.js",
    "revision": "90400c81451dc0f89627cba2778b2f08"
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
    "url": "assets/js/29.8b872a84.js",
    "revision": "c2655aa85be78ca4c5e31d84bc0f0520"
  },
  {
    "url": "assets/js/3.fbfa2398.js",
    "revision": "bf8d56b4d4a327405d9b9262e82776e6"
  },
  {
    "url": "assets/js/30.0ebf7a81.js",
    "revision": "8b5b27768b8dfe3a6f2d700053c0a9ef"
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
    "url": "assets/js/37.95572371.js",
    "revision": "a1aa4e63074e3aa6cf3151872c52ec9b"
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
    "url": "assets/js/6.8ad30b5c.js",
    "revision": "0b8ae7a52737bd61e901d6de5efacb07"
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
    "url": "assets/js/app.bb373576.js",
    "revision": "f7f946f2dc7d5f7101551dbe1af2c11f"
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
    "revision": "e5ed0c4e213bffc48d0b520afb8c4d18"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "RFCs/0001-new-slot-syntax.html",
    "revision": "72aa9c6837965f35750673bd8ede46ab"
  },
  {
    "url": "RFCs/0002-slot-syntax-shorthand.html",
    "revision": "ebbebe6abacdb1c2ddde922204e306a4"
  },
  {
    "url": "RFCs/0003-dynamic-directive-arguments.html",
    "revision": "14df468d2c9b59d16afda3bdcf7d857b"
  },
  {
    "url": "RFCs/0004-global-api-treeshaking.html",
    "revision": "f8075675d251dd469b6cdca8ea52f1b9"
  },
  {
    "url": "RFCs/0005-replace-v-bind-sync-with-v-model-argument.html",
    "revision": "929b8aad0fc114d64e81fe01d1263d65"
  },
  {
    "url": "RFCs/0006-slots-unification.html",
    "revision": "77f5ded7524169793f9c40911c170325"
  },
  {
    "url": "RFCs/0007-functional-async-api-change.html",
    "revision": "eb05c6975cb2f075f0aaf98569d8e014"
  },
  {
    "url": "RFCs/0008-render-function-api-change.html",
    "revision": "30da81c4aca58f7e2adbf0941b2930a5"
  },
  {
    "url": "RFCs/0009-global-api-change.html",
    "revision": "8b7159e95aafe7783b610362518d101d"
  },
  {
    "url": "RFCs/0010-optional-props-declaration.html",
    "revision": "2259ada345e637d9532ec1efe8ed6aa7"
  },
  {
    "url": "RFCs/0011-v-model-api-change.html",
    "revision": "0939c030845687bd3467994c552cec64"
  },
  {
    "url": "RFCs/0012-custom-directive-api-change.html",
    "revision": "a5fb1e97440167a0c56524366b68ef15"
  },
  {
    "url": "RFCs/0014-drop-keycode-support.html",
    "revision": "0548199b99b5003ccc053fd0d43fda08"
  },
  {
    "url": "RFCs/0015-remove-filters.html",
    "revision": "134b53f1bc7b3c9cdd353fe7450c42dc"
  },
  {
    "url": "RFCs/0016-remove-inline-templates.html",
    "revision": "0a33f1c0d634e76ab2ecfda2991a7214"
  },
  {
    "url": "RFCs/0017-transition-as-root.html",
    "revision": "3eceacb19c2f3b3204c3a68295b56887"
  },
  {
    "url": "RFCs/0018-transition-class-change.html",
    "revision": "c3cb8ca7979bff8971c0d9ce6181bd34"
  },
  {
    "url": "RFCs/0019-remove-data-object-declaration.html",
    "revision": "9451c4980af6927a528d37554401374a"
  },
  {
    "url": "RFCs/0020-events-api-change.html",
    "revision": "bd2eaaa3b4540bcf0f6beb2a73e866e6"
  },
  {
    "url": "RFCs/0021-router-link-scoped-slot.html",
    "revision": "f52efc988d7f68f7e4276aa12c5d27e3"
  },
  {
    "url": "RFCs/0022-router-merge-meta-routelocation.html",
    "revision": "74b6fabc6785ce11bc197281c549fdbc"
  },
  {
    "url": "RFCs/0023-scoped-styles-changes.html",
    "revision": "9a43997ff1cd76b0ca6cc7f68ac2f3e8"
  },
  {
    "url": "RFCs/0024-attribute-coercion-behavior.html",
    "revision": "1954c888469bc9b48130999d64a153b4"
  },
  {
    "url": "RFCs/0025-teleport.html",
    "revision": "ab424e00b2b3218299c0a149bb7b4ac2"
  },
  {
    "url": "RFCs/0026-async-component-api.html",
    "revision": "b31a815ae268689f02fcd0f6f5a1d85a"
  },
  {
    "url": "RFCs/0027-custom-elements-interop.html",
    "revision": "3cac35c4f25a9c9a16fc2c60a64a6eb4"
  },
  {
    "url": "RFCs/0028-router-active-link.html",
    "revision": "b32a44a659c4f9501c12e0c443a81dcf"
  },
  {
    "url": "RFCs/0029-router-dynamic-routing.html",
    "revision": "d1451e3b7123d18fabc2b6a1bee91a24"
  },
  {
    "url": "RFCs/0030-emits-option.html",
    "revision": "144bebbba6e4e2c939047e6c9a30b86e"
  },
  {
    "url": "RFCs/0031-attr-fallthrough.html",
    "revision": "bb2e21484313e230327f2c1812103275"
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
