module.exports = {
  title: "Vue Composition API",
  dest: "dist",
  base: "/vue-next-rfc-doc/",
  head: [
    ["link", { rel: "icon", href: `/logo.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/icons/apple-touch-icon-152x152.png` }
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }]
  ],
  plugins: {
    "@vuepress/pwa": {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    }
  },
  themeConfig: {
    sidebar: {
      "/RFCs/": [
        {
          title: "RFCs",
          collapsable: false,
          children: [
            "0001-new-slot-syntax",
            "0002-slot-syntax-shorthand",
            "0003-dynamic-directive-arguments",
            "0004-global-api-treeshaking",
            "0005-replace-v-bind-sync-with-v-model-argument",
            "0006-slots-unification",
            "0007-functional-async-api-change",
            "0008-render-function-api-change",
            "0009-global-api-change",
            "0010-optional-props-declaration",
            "0011-v-model-api-change",
            "0012-custom-directive-api-change",
            "0014-drop-keycode-support",
            "0015-remove-filters",
            "0016-remove-inline-templates",
            "0017-transition-as-root",
            "0019-remove-data-object-declaration",
            "0020-events-api-change"
          ]
        }
      ]
    },
    nav: [
      { text: "Composition API RFC", link: "/" },
      { text: "API Reference", link: "/API" },
      { text: "RFCs", link: "/RFCs/0001-new-slot-syntax" }
    ]
  }
};
