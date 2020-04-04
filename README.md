# Vue Next RFCs 中文翻译

> 由于英文水平有限, 每次看[原文](https://vue-composition-api-rfc.netlify.com/)都比较费劲, 所以参考[尤雨溪在知乎上的翻译](https://zhuanlan.zhihu.com/p/68477600)简单翻译成中文, 方便下次阅读. 
> 内容上基本与原文一致, 部分内容照搬知乎上的翻译, 如果你在阅读时觉得哪里读起来不太顺畅, 欢迎在 [issues](https://github.com/liuycy/vue-next-rfc-doc/issues) 中讨论. 

> 新增翻译内容 [active rfcs](https://github.com/vuejs/rfcs) 

这次翻译文档使用 [VuePress](https://vuepress.vuejs.org/) 构建静态网站, 并结合 Github Actions 自动化部署在 GitHub Pages 上. 可点击[在线地址](https://liuycy.github.io/vue-next-rfc-doc/)查看. 

## 目录层级

对应页面导航

``` sh
├── index.md    # Composition API RFC (首页)
├── API.md      # Composition API Reference
└── RFCs        # active RFCs
    ├── 0001-new-slot-syntax.md
    ├── 0002-slot-syntax-shorthand.md
    ├── 0003-dynamic-directive-arguments.md
    ├── 0004-global-api-treeshaking.md
    ├── 0005-replace-v-bind-sync-with-v-model-argument.md
    ├── 0006-slots-unification.md
    ├── 0007-functional-async-api-change.md
    ├── 0008-render-function-api-change.md
    ├── 0009-global-api-change.md
    ├── 0010-optional-props-declaration.md
    ├── 0011-v-model-api-change.md
    ├── 0012-custom-directive-api-change.md
    ├── 0014-drop-keycode-support.md
    ├── 0015-remove-filters.md
    ├── 0016-remove-inline-templates.md
    ├── 0017-transition-as-root.md
    ├── 0018-transition-class-change.md
    ├── 0019-remove-data-object-declaration.md
    ├── 0020-events-api-change.md
    ├── 0021-router-link-scoped-slot.md
    ├── 0022-router-merge-meta-routelocation.md
    ├── 0023-scoped-styles-changes.md
    └── 0024-attribute-coercion-behavior.md
```