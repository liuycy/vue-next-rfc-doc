# Vue Next 相关文档中文翻译

本仓库整合了 `Vue 3 的主要 API` [Vue Composition API](https://vue-composition-api-rfc.netlify.com) 和 `Vue 相关库即将发布的特性` [Vue active rfcs](https://github.com/vuejs/rfcs).

内容上基本与原文一致, 如果你在阅读时觉得哪里读起来不太顺畅, 欢迎在 [issues](https://github.com/liuycy/vue-next-rfc-doc/issues) 中讨论, 或提交 [PR](https://github.com/liuycy/vue-next-rfc-doc/pulls) 进行修改. 

这次翻译文档使用 [VuePress](https://vuepress.vuejs.org/zh/) 构建静态网站, 并结合 [Github Actions](https://help.github.com/cn/actions) 自动化部署在 [GitHub Pages](https://help.github.com/cn/github/working-with-github-pages) 上. 可点击[在线地址](https://liuycy.github.io/vue-next-rfc-doc/)查看. 

## 如何持续更新

订阅 [vuejs/composition-api-rfc](https://github.com/vuejs/rfcs) 和 [vuejs/rfcs](https://github.com/vuejs/composition-api-rfc) 这两个仓库 master 分支的提交, 即可在官方更新的第一时间收到通知. 这样就可以保持与其一样的同步频率.

Github 官方提供了仓库 Commits 的 RSS 格式为: `https://github.com/:owner/:repo/commits.atom`  

使用任意的 RSS 订阅工具 (我使用了 [Blogtrottr](https://blogtrottr.com/)) 即可获取仓库的提交信息.

这两个仓库的 Commits 的 RSS 为:
- <https://github.com/vuejs/composition-api-rfc/commits/master.atom>
- <https://github.com/vuejs/rfcs/commits/master.atom>

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
    ├── 0024-attribute-coercion-behavior.md
    ├── 0025-teleport.md
    ├── 0026-async-component-api.md
    ├── 0027-custom-elements-interop.md
    ├── 0028-router-active-link.md
    ├── 0029-router-dynamic-routing.md
    ├── 0030-emits-option.md
    └── 0031-attr-fallthrough.md
```