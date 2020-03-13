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
    "revision": "967b0fc2548032243d8e8b4b1345cfbe"
  },
  {
    "url": "API.html",
    "revision": "e30ad59cf989be353227179b860e3cd7"
  },
  {
    "url": "assets/css/0.styles.7245feb6.css",
    "revision": "d9ecea2b2cbc8d7722feb0678c90d980"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c3b29421.js",
    "revision": "c73bb1635db47cc713a303ee46015f1b"
  },
  {
    "url": "assets/js/11.4f8fc188.js",
    "revision": "98742822befebefbf4c7078f25a58da0"
  },
  {
    "url": "assets/js/12.159bd57c.js",
    "revision": "b548e13ad8911a944bed5d17b74b6051"
  },
  {
    "url": "assets/js/13.f4af315e.js",
    "revision": "7e09a53394508a94f14e4038fb8613cf"
  },
  {
    "url": "assets/js/14.d19a4a34.js",
    "revision": "ce0e6a35548490eb4c13cac279e726a0"
  },
  {
    "url": "assets/js/15.2fe5398e.js",
    "revision": "77aec029dd9bd23ea1a3907df30093c6"
  },
  {
    "url": "assets/js/16.3aedc297.js",
    "revision": "e749227601adc7d5951beb79a0fb392c"
  },
  {
    "url": "assets/js/17.1ac9696d.js",
    "revision": "7a2b9c42ec6d0f13b0384d956bc016aa"
  },
  {
    "url": "assets/js/18.f552b769.js",
    "revision": "5bbc5a4d9eee526c8e658de31d2ae717"
  },
  {
    "url": "assets/js/19.1079a0cb.js",
    "revision": "d30b7921445b2bf1a8bdd1d48c9ce926"
  },
  {
    "url": "assets/js/2.bca294f8.js",
    "revision": "7e9fb194a300031b7b1cee13f8cde462"
  },
  {
    "url": "assets/js/20.fe19bddb.js",
    "revision": "7bb78e414cf9764cc797e38c5aaa97e6"
  },
  {
    "url": "assets/js/21.9ebdaa75.js",
    "revision": "ad1200c042e69b4c07e7d918be1f611e"
  },
  {
    "url": "assets/js/22.4657af98.js",
    "revision": "aa55ac59459fdb5e58cf50b28b10d310"
  },
  {
    "url": "assets/js/23.ed682dde.js",
    "revision": "b028d6927489734259d9ef81950bc07d"
  },
  {
    "url": "assets/js/24.51873b08.js",
    "revision": "4768869608e47d01c1b9fb94db061d0c"
  },
  {
    "url": "assets/js/25.a512d56d.js",
    "revision": "3ed841b31ecdf90997b7dcdc435ae658"
  },
  {
    "url": "assets/js/26.33740869.js",
    "revision": "52274bfbc7891ff32296123ab0ef4c79"
  },
  {
    "url": "assets/js/27.d114b364.js",
    "revision": "933bd5425478c0094ca66842576dc9c1"
  },
  {
    "url": "assets/js/3.fd14f06a.js",
    "revision": "48b74f95c95983d1afe68d0abd9f39d2"
  },
  {
    "url": "assets/js/4.2f616ee8.js",
    "revision": "71d4d21af4bf3f4678ab03ce8c78e91f"
  },
  {
    "url": "assets/js/5.25c6c858.js",
    "revision": "aba45db5a94becf100b86e8618b2ba5b"
  },
  {
    "url": "assets/js/6.ff47562d.js",
    "revision": "acd6105adbd3898bdad762fe199f6619"
  },
  {
    "url": "assets/js/7.e3a2a696.js",
    "revision": "718f413b1c7e4e27dbb425fe96ce71c3"
  },
  {
    "url": "assets/js/8.e318cab5.js",
    "revision": "ac579102254b26fd32f192735716195b"
  },
  {
    "url": "assets/js/9.006cb4a0.js",
    "revision": "7b7135b2678c52451a19f5794e80bbd6"
  },
  {
    "url": "assets/js/app.174fe5ba.js",
    "revision": "46d96700561cdf24d054e9c72ea7ceae"
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
    "revision": "73af2b7d5a0999614c63e29844676b11"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "RFCs/0001-new-slot-syntax.html",
    "revision": "bdbe6becbf3503a897d524ffa05f997c"
  },
  {
    "url": "RFCs/0002-slot-syntax-shorthand.html",
    "revision": "d4338afa1168e03a4cedeb5cb238e77b"
  },
  {
    "url": "RFCs/0003-dynamic-directive-arguments.html",
    "revision": "d3eaf2db1e1e96d5ed26866b91bade1f"
  },
  {
    "url": "RFCs/0004-global-api-treeshaking.html",
    "revision": "a2c5b56a41d4c60c5129d925267283c6"
  },
  {
    "url": "RFCs/0005-replace-v-bind-sync-with-v-model-argument.html",
    "revision": "322d0bd9fe752810461d7857df04bbc4"
  },
  {
    "url": "RFCs/0006-slots-unification.html",
    "revision": "a07cc953a2e1cc997c7bab33806d123f"
  },
  {
    "url": "RFCs/0007-functional-async-api-change.html",
    "revision": "12db6a9e2ebdfd36bb0c88bc88af3a45"
  },
  {
    "url": "RFCs/0008-render-function-api-change.html",
    "revision": "659432b729c1501b60471147d890a614"
  },
  {
    "url": "RFCs/0009-global-api-change.html",
    "revision": "0010e5b6da4c1d2cf0b2b199302e0aea"
  },
  {
    "url": "RFCs/0010-optional-props-declaration.html",
    "revision": "3f1a0a08c22cb49b14c5c25992ec7aa7"
  },
  {
    "url": "RFCs/0011-v-model-api-change.html",
    "revision": "ec94d94aae3147ca99a9f356f13e26ca"
  },
  {
    "url": "RFCs/0012-custom-directive-api-change.html",
    "revision": "d9efd2ac6377c324e6bed5d5ef22b246"
  },
  {
    "url": "RFCs/0014-drop-keycode-support.html",
    "revision": "974e930763923f644cc3d2240d5f02f9"
  },
  {
    "url": "RFCs/0015-remove-filters.html",
    "revision": "549c0673ba7d1731f204d1d606a63dfa"
  },
  {
    "url": "RFCs/0016-remove-inline-templates.html",
    "revision": "8b40f0fa7186641d9a3b8b8d039e9c4d"
  },
  {
    "url": "RFCs/0017-transition-as-root.html",
    "revision": "4ff541e1245189d54933147a102c4818"
  },
  {
    "url": "RFCs/0018-transition-class-change.html",
    "revision": "c38b45bd755bae611cfe1ceb2ddf4e28"
  },
  {
    "url": "RFCs/0019-remove-data-object-declaration.html",
    "revision": "195e1d3fcfde7980bb64ae457de76a4b"
  },
  {
    "url": "RFCs/0020-events-api-change.html",
    "revision": "faba39b4d484ca63fb07893ff851fe87"
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
