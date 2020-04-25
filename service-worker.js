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
    "revision": "36553a4acdeb371fa161f2c881b16948"
  },
  {
    "url": "API.html",
    "revision": "39d26e823495715041b0f66db16d253d"
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
    "url": "assets/js/10.bf2829c4.js",
    "revision": "fa0f6ad6a6c849fda4f80c23533abc96"
  },
  {
    "url": "assets/js/11.085c641a.js",
    "revision": "f9e547cc061457873e3249684713daa4"
  },
  {
    "url": "assets/js/12.6ea47bef.js",
    "revision": "12baf567660c391088799322069efc33"
  },
  {
    "url": "assets/js/13.a8ee82de.js",
    "revision": "5eaa8ecb5e9617dc5fc609943e329251"
  },
  {
    "url": "assets/js/14.ecea75bd.js",
    "revision": "ed69ca4e3d65c1e56c205619a2e14d5a"
  },
  {
    "url": "assets/js/15.50c7310e.js",
    "revision": "3cc8a3550b07b7f5f53256a76416e3a8"
  },
  {
    "url": "assets/js/16.597db85a.js",
    "revision": "497f572ee9d43c085164e7f7b57ee773"
  },
  {
    "url": "assets/js/17.6c8e5b7e.js",
    "revision": "fe280c13f94caec551207608b809148e"
  },
  {
    "url": "assets/js/18.739f5757.js",
    "revision": "36b4eb510c35ca274092f40241f70c70"
  },
  {
    "url": "assets/js/19.99699b5f.js",
    "revision": "98d7812f73d34ed25d32c3579085c350"
  },
  {
    "url": "assets/js/2.f670e6b3.js",
    "revision": "50097ce2ba88e0839ca3ad733f450069"
  },
  {
    "url": "assets/js/20.fe1e2bec.js",
    "revision": "07e8337259bb45965a8aa0f5cd894ee6"
  },
  {
    "url": "assets/js/21.6b7b332c.js",
    "revision": "c172d259da738e209069933b5abe2fc4"
  },
  {
    "url": "assets/js/22.92a733cb.js",
    "revision": "ed388b255b8bd5005a743e291f265126"
  },
  {
    "url": "assets/js/23.109f017b.js",
    "revision": "eec09cfef81a79a85b10e7e0fda911dc"
  },
  {
    "url": "assets/js/24.354577cb.js",
    "revision": "c2b4bf601cbbb14fcbf6cf5671a5a3c6"
  },
  {
    "url": "assets/js/25.92b58e50.js",
    "revision": "10cefbd5dc5c18f6686da9639eb69469"
  },
  {
    "url": "assets/js/26.1e19ed7d.js",
    "revision": "f2bd0a18830f9be1593ee34566dc9788"
  },
  {
    "url": "assets/js/27.c79d30b0.js",
    "revision": "a82c2d9af59777bf8843451a1fa59de5"
  },
  {
    "url": "assets/js/28.9aa8fbe3.js",
    "revision": "12863bd64fcd4cac3ad05f3fdc19e37d"
  },
  {
    "url": "assets/js/29.6abdc0bf.js",
    "revision": "0b551516828e75693ed6fe7bcdc83c02"
  },
  {
    "url": "assets/js/3.fbfa2398.js",
    "revision": "bf8d56b4d4a327405d9b9262e82776e6"
  },
  {
    "url": "assets/js/30.620c1395.js",
    "revision": "6ac13b7655c14b21be98709a9f297094"
  },
  {
    "url": "assets/js/31.83d0a65a.js",
    "revision": "09334ee155c01898290eecd37a67a677"
  },
  {
    "url": "assets/js/32.de51063f.js",
    "revision": "36c9f6f6405c3050ca0635f4526d2db6"
  },
  {
    "url": "assets/js/33.06c75933.js",
    "revision": "61267aa11f58f06b9afd7a11ad9e1219"
  },
  {
    "url": "assets/js/34.aadd36d9.js",
    "revision": "061d025a7f4d222df293a7374e79117a"
  },
  {
    "url": "assets/js/35.beec72bf.js",
    "revision": "8dda218c7f5d72d193b348f5a30c48f5"
  },
  {
    "url": "assets/js/36.0d8e7d05.js",
    "revision": "17864ec1860ba2f778db4aba8b1db352"
  },
  {
    "url": "assets/js/37.bbcb872d.js",
    "revision": "a607986212e0cc34bd113d2e6befdf7f"
  },
  {
    "url": "assets/js/38.7d1b6cd5.js",
    "revision": "055ce1473b09c7ba3e917871d434c7ef"
  },
  {
    "url": "assets/js/39.882a3c2b.js",
    "revision": "b75f96795ae179a83e59b2e028419b2e"
  },
  {
    "url": "assets/js/4.12197861.js",
    "revision": "8e3d98719de2ba758d1c6098eaedce65"
  },
  {
    "url": "assets/js/40.a22bb1c9.js",
    "revision": "e39c975d45c3762a1d4d7a840c9ce9c9"
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
    "url": "assets/js/7.a4926ea9.js",
    "revision": "20cf2c52992be611e5044c35b83423a2"
  },
  {
    "url": "assets/js/8.18ba420e.js",
    "revision": "3d7e7c7b64c05f5fca5ddac6445e15ad"
  },
  {
    "url": "assets/js/9.b09200d4.js",
    "revision": "70e1dd9ecb36a295b0c4465b253ed4d4"
  },
  {
    "url": "assets/js/app.22d7078e.js",
    "revision": "398cfb1468e8f3f51a453258fdb97d59"
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
    "revision": "9e33bb60ae37ec82b0acad4cd7b07b99"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "RFCs/0000-vtu-improve-async-workflow.html",
    "revision": "9ae0abc62474ec4a3bdbbb5e68d766fb"
  },
  {
    "url": "RFCs/0001-new-slot-syntax.html",
    "revision": "4b07a0e3a68ac3f3f482a87b428f864a"
  },
  {
    "url": "RFCs/0002-slot-syntax-shorthand.html",
    "revision": "e6dd38e753d751a8e12b8b6e1fe96901"
  },
  {
    "url": "RFCs/0003-dynamic-directive-arguments.html",
    "revision": "0e835b4750016f0e8d4a02d06786d478"
  },
  {
    "url": "RFCs/0004-global-api-treeshaking.html",
    "revision": "56321b0b20187ac7c4654b37bce8cb23"
  },
  {
    "url": "RFCs/0005-replace-v-bind-sync-with-v-model-argument.html",
    "revision": "1aa98c8768bbecd7159df14342ca7523"
  },
  {
    "url": "RFCs/0006-slots-unification.html",
    "revision": "7166aa9e33417052c4fead7d80b9a28f"
  },
  {
    "url": "RFCs/0007-functional-async-api-change.html",
    "revision": "8cd6721c3f9774c708b661dc6fdc8f0a"
  },
  {
    "url": "RFCs/0008-render-function-api-change.html",
    "revision": "f14faeed48918e5e3ec6e1d88ca87efd"
  },
  {
    "url": "RFCs/0009-global-api-change.html",
    "revision": "7535c15848076dbb5402cd0578f9e308"
  },
  {
    "url": "RFCs/0010-optional-props-declaration.html",
    "revision": "00a77934cc64d4e1f1a4990ff9b514e5"
  },
  {
    "url": "RFCs/0011-v-model-api-change.html",
    "revision": "cb06bb9ed29f3d71f91bfc2818ce9bfd"
  },
  {
    "url": "RFCs/0012-custom-directive-api-change.html",
    "revision": "fd5c6c0c39ca36d2d3ec6bc1450713e5"
  },
  {
    "url": "RFCs/0014-drop-keycode-support.html",
    "revision": "3982c95975506a6518049a9945944c1d"
  },
  {
    "url": "RFCs/0015-remove-filters.html",
    "revision": "4ee361b782499b14a8ad2d70cab72e2f"
  },
  {
    "url": "RFCs/0016-remove-inline-templates.html",
    "revision": "53408cff295721fcb1647bd1d61ec9bc"
  },
  {
    "url": "RFCs/0017-transition-as-root.html",
    "revision": "26e17ca3f076ab10999583c2a6afa1f5"
  },
  {
    "url": "RFCs/0018-transition-class-change.html",
    "revision": "d79e1bcf0d259b93ee4782819dd2724f"
  },
  {
    "url": "RFCs/0019-remove-data-object-declaration.html",
    "revision": "8a4b94572fdaa773800ad4cd47301200"
  },
  {
    "url": "RFCs/0020-events-api-change.html",
    "revision": "3e2ba3521eb2b2c766bb377ca9ab31ac"
  },
  {
    "url": "RFCs/0021-router-link-scoped-slot.html",
    "revision": "4cf0b12730745fd1ad973ca2bc933b76"
  },
  {
    "url": "RFCs/0022-router-merge-meta-routelocation.html",
    "revision": "b51bea7a263cf8e02d4678d259bd2c5f"
  },
  {
    "url": "RFCs/0023-scoped-styles-changes.html",
    "revision": "2222e8127c01dd5859b0584689c69038"
  },
  {
    "url": "RFCs/0024-attribute-coercion-behavior.html",
    "revision": "45eb150e0dc7bd582c6e6efe731b91c7"
  },
  {
    "url": "RFCs/0025-teleport.html",
    "revision": "c940c0a3562d1f1362b410a5351cb5f8"
  },
  {
    "url": "RFCs/0026-async-component-api.html",
    "revision": "5a7483e4a1e69579446e43c4ae34a42b"
  },
  {
    "url": "RFCs/0027-custom-elements-interop.html",
    "revision": "27df973f70cd7201b5248dc361eeac91"
  },
  {
    "url": "RFCs/0028-router-active-link.html",
    "revision": "78592f1c17aa339d783363098943920d"
  },
  {
    "url": "RFCs/0029-router-dynamic-routing.html",
    "revision": "4feb5550cabb98d81d32c35fd1436e2a"
  },
  {
    "url": "RFCs/0030-emits-option.html",
    "revision": "adbed0aade0f2de4c5f2470b95d39bb8"
  },
  {
    "url": "RFCs/0031-attr-fallthrough.html",
    "revision": "381fded6d755bd4d4c735c9660bcfc76"
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
