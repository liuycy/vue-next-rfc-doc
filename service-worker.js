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
    "revision": "6ef9f1cb5dd0baf4c19f90d5b4830056"
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
    "url": "assets/js/10.13256a71.js",
    "revision": "36f6d7f98a07938fe62963299648a183"
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
    "url": "assets/js/31.7a9a63af.js",
    "revision": "a596468df441521e80613c58e800f1eb"
  },
  {
    "url": "assets/js/32.8e1cff1d.js",
    "revision": "0081945d8dd876940384daf66d95f638"
  },
  {
    "url": "assets/js/33.88170006.js",
    "revision": "074e9936e637867f117499eff7437c55"
  },
  {
    "url": "assets/js/34.c1a7e835.js",
    "revision": "1d10ccb30c4b3659b4a0fb6609bf7fdb"
  },
  {
    "url": "assets/js/35.695be3cd.js",
    "revision": "0104cf24950d4f89cacd78e448290149"
  },
  {
    "url": "assets/js/4.8f94fb3c.js",
    "revision": "c5bb36075a2d60286a278b9425d6a16e"
  },
  {
    "url": "assets/js/5.d86eeed7.js",
    "revision": "e94a799955f15e829e2922b47ba5d69c"
  },
  {
    "url": "assets/js/6.5544c51c.js",
    "revision": "30bdfb4829cf24cd1c365b21b1203419"
  },
  {
    "url": "assets/js/7.64103c21.js",
    "revision": "8c3960ca1b92488da81c6b7ea2a10559"
  },
  {
    "url": "assets/js/8.32e51bbd.js",
    "revision": "e889692d95f26560fbea64977e238879"
  },
  {
    "url": "assets/js/9.17e43e8f.js",
    "revision": "e5a27df44766ef7ac7c514333c359025"
  },
  {
    "url": "assets/js/app.06e49402.js",
    "revision": "c9dcec5126f6654868c25371bac979f4"
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
    "revision": "c400c57b157d7cb661a793f54952ed31"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "RFCs/0001-new-slot-syntax.html",
    "revision": "3a2aa25fdd6d74f84e2a91b9560a1075"
  },
  {
    "url": "RFCs/0002-slot-syntax-shorthand.html",
    "revision": "34b405d26728788a24f08e41b3aafaae"
  },
  {
    "url": "RFCs/0003-dynamic-directive-arguments.html",
    "revision": "d39b1745ecfd0e08452263f308efd9fa"
  },
  {
    "url": "RFCs/0004-global-api-treeshaking.html",
    "revision": "5f67fb51757add619e917bf1c4fd1a86"
  },
  {
    "url": "RFCs/0005-replace-v-bind-sync-with-v-model-argument.html",
    "revision": "bb1da242899143d650a92715bbcf114a"
  },
  {
    "url": "RFCs/0006-slots-unification.html",
    "revision": "931d8860f021ab3ff2f5672c30591dd8"
  },
  {
    "url": "RFCs/0007-functional-async-api-change.html",
    "revision": "562f4cbbdefb4dc34a128a9955d447f6"
  },
  {
    "url": "RFCs/0008-render-function-api-change.html",
    "revision": "91bb993907d66164fc04c872ff35d22b"
  },
  {
    "url": "RFCs/0009-global-api-change.html",
    "revision": "c8429b5c4998f9e6b633552e2f72543a"
  },
  {
    "url": "RFCs/0010-optional-props-declaration.html",
    "revision": "2c184c4e31f104fa8f96ee832771dd18"
  },
  {
    "url": "RFCs/0011-v-model-api-change.html",
    "revision": "1cf46b7f0969a98e225b318c6ff1c65a"
  },
  {
    "url": "RFCs/0012-custom-directive-api-change.html",
    "revision": "f015511e1f208cde0db38a04a60dce19"
  },
  {
    "url": "RFCs/0014-drop-keycode-support.html",
    "revision": "e6af5d10e16b1b485d6606b2f52c42e8"
  },
  {
    "url": "RFCs/0015-remove-filters.html",
    "revision": "b59e419defcfe24aa2f6571d650dd6b2"
  },
  {
    "url": "RFCs/0016-remove-inline-templates.html",
    "revision": "695b5bc79a23fd8c8ed76bc3b0664016"
  },
  {
    "url": "RFCs/0017-transition-as-root.html",
    "revision": "051f174ad7439794c9bad91e8682f966"
  },
  {
    "url": "RFCs/0018-transition-class-change.html",
    "revision": "24cac02b52793031769861e4d3c9b19d"
  },
  {
    "url": "RFCs/0019-remove-data-object-declaration.html",
    "revision": "46a0571df386b216e6b4ec73f7ec065c"
  },
  {
    "url": "RFCs/0020-events-api-change.html",
    "revision": "a890e28a7fc3ddb9152a13cecd3be6de"
  },
  {
    "url": "RFCs/0021-router-link-scoped-slot.html",
    "revision": "e15b4ad8f618ad82a588ba085452db28"
  },
  {
    "url": "RFCs/0022-router-merge-meta-routelocation.html",
    "revision": "c6cbd4656b2c26f555047b2b2be9d185"
  },
  {
    "url": "RFCs/0023-scoped-styles-changes.html",
    "revision": "46143a9a0752006421aaa224cf6a6ac6"
  },
  {
    "url": "RFCs/0024-attribute-coercion-behavior.html",
    "revision": "3c68300325ccc0985ffa8569909af8da"
  },
  {
    "url": "RFCs/0025-teleport.html",
    "revision": "326e97bd0f41937a69133fd6df9a1df9"
  },
  {
    "url": "RFCs/0026-async-component-api.html",
    "revision": "e9d1377cca0a4fd4c817aaff215d26dc"
  },
  {
    "url": "RFCs/0027-custom-elements-interop.html",
    "revision": "82d60cec6d7f036b2fb63cc5f00cdf82"
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
