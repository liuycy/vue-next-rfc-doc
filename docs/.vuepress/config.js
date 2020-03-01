module.exports = {
  title: "Vue Composition API",
  dest: "dist",
  base: "/vue-next-rfc-doc/",
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
