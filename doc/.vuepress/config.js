module.exports = {
  title: "Vue Composition API",
  base: './',
  dest: 'docs',
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
            "0004-global-api-treeshaking"
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
