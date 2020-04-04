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
    "revision": "db28fbe32767d9c2fbc9423b355c416b"
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
    "url": "assets/js/29.06e4c5bb.js",
    "revision": "b1b879536370d881929db6aa55c026a9"
  },
  {
    "url": "assets/js/3.8758bcaf.js",
    "revision": "7601f82fe295bcffcfb469de0d8cb70a"
  },
  {
    "url": "assets/js/30.7db4e1b9.js",
    "revision": "88cb6158289a6df7ac0aecd8ed6d5c5f"
  },
  {
    "url": "assets/js/31.12ff441e.js",
    "revision": "12a29b685d91593addc707cd9f602536"
  },
  {
    "url": "assets/js/32.afa116dc.js",
    "revision": "26004fe823c593d51f37398d0f64d84b"
  },
  {
    "url": "assets/js/4.952dc80b.js",
    "revision": "bc10378f4274fb8a4d2a5c67aed8ddd7"
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
    "url": "assets/js/app.3801e4da.js",
    "revision": "50d2a61f4f3d37fa98973419228e1ec6"
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
    "revision": "46525a70f5321ee1e10236a8e561b9fc"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "RFCs/0001-new-slot-syntax.html",
    "revision": "d943f5a6c8fc0ce89b82185b3e6437bd"
  },
  {
    "url": "RFCs/0002-slot-syntax-shorthand.html",
    "revision": "b51d562d44e82d4f3a070dc6372c9eb4"
  },
  {
    "url": "RFCs/0003-dynamic-directive-arguments.html",
    "revision": "0ace0f074d8185e6b396a5d0717abe48"
  },
  {
    "url": "RFCs/0004-global-api-treeshaking.html",
    "revision": "bedce329c2425b1bc2817c9e1ed4ab97"
  },
  {
    "url": "RFCs/0005-replace-v-bind-sync-with-v-model-argument.html",
    "revision": "616232cbe198f84c2e53221ebdaf2f65"
  },
  {
    "url": "RFCs/0006-slots-unification.html",
    "revision": "b2981635b095a7832d395d16841d0623"
  },
  {
    "url": "RFCs/0007-functional-async-api-change.html",
    "revision": "4ca58e4a4cdb39873e1be9b51face7af"
  },
  {
    "url": "RFCs/0008-render-function-api-change.html",
    "revision": "3c82e8110c20ccc249a3a7c18ed8544c"
  },
  {
    "url": "RFCs/0009-global-api-change.html",
    "revision": "cd21a3df39959900f087c1d9c8c365d6"
  },
  {
    "url": "RFCs/0010-optional-props-declaration.html",
    "revision": "c9ae2b545fc2b133848160ff6891abff"
  },
  {
    "url": "RFCs/0011-v-model-api-change.html",
    "revision": "afc8aef86ed5186fa81ff3be8a2e10a2"
  },
  {
    "url": "RFCs/0012-custom-directive-api-change.html",
    "revision": "66574ac2e8d73f2f7a07afadc88b05e1"
  },
  {
    "url": "RFCs/0014-drop-keycode-support.html",
    "revision": "76748c7637a3948ac65174875345f843"
  },
  {
    "url": "RFCs/0015-remove-filters.html",
    "revision": "3b9a0557ee709f05b7b8c6743a6d30fe"
  },
  {
    "url": "RFCs/0016-remove-inline-templates.html",
    "revision": "9b1537e02f4933e604c8323b95c6dc5a"
  },
  {
    "url": "RFCs/0017-transition-as-root.html",
    "revision": "5243225ad0468b07b8654f5a0488791f"
  },
  {
    "url": "RFCs/0018-transition-class-change.html",
    "revision": "579ca8ee186ce8b9f2da89e0c7bcf66e"
  },
  {
    "url": "RFCs/0019-remove-data-object-declaration.html",
    "revision": "855e824e17d58097836e0e7976a05a93"
  },
  {
    "url": "RFCs/0020-events-api-change.html",
    "revision": "247be628907ffdf0805343b09e88d29c"
  },
  {
    "url": "RFCs/0021-router-link-scoped-slot.html",
    "revision": "81082c5efdf9c460779b687f46b4a5f0"
  },
  {
    "url": "RFCs/0022-router-merge-meta-routelocation.html",
    "revision": "5d18f3077228ed212aca687818e29b6a"
  },
  {
    "url": "RFCs/0023-scoped-styles-changes.html",
    "revision": "6acbcd46e44b220bdee71a9bfbd4f338"
  },
  {
    "url": "RFCs/0024-attribute-coercion-behavior.html",
    "revision": "7063bb44daa809e82541a536fdbc7238"
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
