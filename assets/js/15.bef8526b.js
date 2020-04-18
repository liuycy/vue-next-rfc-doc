(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{344:function(t,s,a){"use strict";a.r(s);var n=a(37),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_9-全局-api-更改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-全局-api-更改"}},[t._v("#")]),t._v(" 9. 全局 API 更改")]),t._v(" "),a("blockquote",[a("p",[t._v("原文: "),a("a",{attrs:{href:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0009-global-api-change.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/vuejs/rfcs/blob/master/active-rfcs/0009-global-api-change.md"),a("OutboundLink")],1)])]),t._v(" "),a("ul",[a("li",[t._v("开始日期: 2019-04-08")]),t._v(" "),a("li",[t._v("目标版本: 3.x")]),t._v(" "),a("li",[t._v("参考 Issues: N/A")]),t._v(" "),a("li",[t._v("实现 PR: N/A")])]),t._v(" "),a("h2",{attrs:{id:"概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),a("p",[t._v("重新设置 app 的 引导程序 和 API.")]),t._v(" "),a("ul",[a("li",[t._v("能够改变 Vue 行为的全局 API 现在移到通过 "),a("code",[t._v("createApp")]),t._v(" 方法创建的 app 实例上了, 并且只能影响到这个 app 实例的行为了.")]),t._v(" "),a("li",[t._v("不会改变 Vue 行为的全局 API (如: "),a("code",[t._v("nextTick")]),t._v(" 和 "),a("a",{attrs:{href:"https://github.com/vuejs/rfcs/pull/22",target:"_blank",rel:"noopener noreferrer"}},[t._v("Advanced Reactivity API"),a("OutboundLink")],1),t._v("提到的 API) 现在通过命名导出了, 详见"),a("RouterLink",{attrs:{to:"/RFCs/0004-global-api-treeshaking.html"}},[t._v("全局 API treeshaking")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"基本用例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用例"}},[t._v("#")]),t._v(" 基本用例")]),t._v(" "),a("h3",{attrs:{id:"以前"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以前"}},[t._v("#")]),t._v(" 以前")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./App.vue'")]),t._v("\n\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ignoredElements "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^app-/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mixin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("directive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("customProperty")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("h")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"以后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以后"}},[t._v("#")]),t._v(" 以后")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createApp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./App.vue'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("isCustomElement")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("tag")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startsWith")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app-'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mixin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("directive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globalProperties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("customProperty")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"动机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动机"}},[t._v("#")]),t._v(" 动机")]),t._v(" "),a("p",[t._v("Vue 当前的一些全局 API 会永久的改变全局状态, 这导致了一些问题:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在测试过程中, 全局配置会很容易污染其他测试用例, 用户需要每次都要在测试前保存全局配置并在测试后重置 (如: 重置 "),a("code",[t._v("Vue.config.errorHandler")]),t._v(").\n一些 API (像 "),a("code",[t._v("Vue.use")]),t._v(" 和 "),a("code",[t._v("Vue.mixin")]),t._v(") 甚至都无法还原成原样, 这会让插件测试变得相当棘手.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("vue-test-utils")]),t._v(" 必须实现一个特殊的 API "),a("code",[t._v("createLocalVue")]),t._v(" 来解决这个问题")])])]),t._v(" "),a("li",[a("p",[t._v('这也很难让同一个页面上的多个 "app" 使用不同的全局配置')]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这会影响到所有的根实例")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mixin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" el"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app-1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" el"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app-2'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"设计细节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计细节"}},[t._v("#")]),t._v(" 设计细节")]),t._v(" "),a("p",[t._v('理论上讲, Vue 2 没有真正的 "app" 概念, 我们定义的所谓 app 只是一个通过 '),a("code",[t._v("new Vue()")]),t._v(" 创建的 Vue 根实例. 用同一个 Vue 创建的所有根实例会共享相同的全局配置.")]),t._v(" "),a("p",[t._v("在此提案中, 我们引入了一个新的全局 API "),a("code",[t._v("createApp")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createApp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 定义根组件 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("调用 "),a("code",[t._v("createApp")]),t._v(" 会返回一个 "),a("strong",[t._v("app 实例")]),t._v(', 每一个 app 实例会提供一个 app 上下文.\napp 实例上的组件树会共享一个 app 上下文, 这个上下文会提供之前 2.x 的"全局"配置.')]),t._v(" "),a("h3",{attrs:{id:"全局-api-映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局-api-映射"}},[t._v("#")]),t._v(" 全局 API 映射")]),t._v(" "),a("p",[t._v("app 实例上暴露了当前全局 API 的子集, 任何可以改变 Vue 行为的全局 API 的最佳实践都适用于现在的 app 实例, 包括:")]),t._v(" "),a("ul",[a("li",[t._v("全局配置\n"),a("ul",[a("li",[a("code",[t._v("Vue.config")]),t._v(" -> "),a("code",[t._v("app.config")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("config.productionTip")]),t._v(": 移除. ("),a("a",{attrs:{href:"#%E7%A7%BB%E9%99%A4-configproductiontip"}},[t._v("更多细节")]),t._v(")")]),t._v(" "),a("li",[a("code",[t._v("config.ignoredElements")]),t._v(" -> "),a("code",[t._v("config.isCustomElement")]),t._v(". ("),a("a",{attrs:{href:"#configignoredelements---configiscustomelement"}},[t._v("更多细节")]),t._v(")")]),t._v(" "),a("li",[a("code",[t._v("config.keyCodes")]),t._v(": 移除. ("),a("RouterLink",{attrs:{to:"/RFCs/0014-drop-keycode-support.html"}},[t._v("更多细节")]),t._v(")")],1),t._v(" "),a("li",[a("code",[t._v("config.optionMergeStrategies")]),t._v(": "),a("a",{attrs:{href:"#configoptionmergestrategies-%E8%A1%8C%E4%B8%BA%E5%8F%98%E6%9B%B4"}},[t._v("关于该调整的更多细节")])])])])])]),t._v(" "),a("li",[t._v("资源注册 API\n"),a("ul",[a("li",[a("code",[t._v("Vue.component")]),t._v(" -> "),a("code",[t._v("app.component")])]),t._v(" "),a("li",[a("code",[t._v("Vue.directive")]),t._v(" -> "),a("code",[t._v("app.directive")])])])]),t._v(" "),a("li",[t._v("拓展行为 API\n"),a("ul",[a("li",[a("code",[t._v("Vue.mixin")]),t._v(" -> "),a("code",[t._v("app.mixin")])]),t._v(" "),a("li",[a("code",[t._v("Vue.use")]),t._v(" -> "),a("code",[t._v("app.use")])])])])]),t._v(" "),a("p",[t._v("所有不会改变 Vue 行为的全局 API 现在都通过命名导出了, 详见"),a("RouterLink",{attrs:{to:"/RFCs/0004-global-api-treeshaking.html"}},[t._v("全局 API treeshaking")]),t._v(".")],1),t._v(" "),a("p",[t._v("唯一的例外是 "),a("code",[t._v("Vue.extend")]),t._v(", 因为 "),a("code",[t._v("Vue")]),t._v(" 不再是一个可以 new 构造函数, "),a("code",[t._v("Vue.extend")]),t._v(" 在构造函数拓展这块就没有什么意义了.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("对于拓展一个普通组件, 应该使用 "),a("code",[t._v("extends")]),t._v(" 选项")])]),t._v(" "),a("li",[a("p",[t._v("对于 TypeScript 类型定义, 应该使用新的 "),a("code",[t._v("defineComponent")]),t._v(" API:")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" defineComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" App "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 提供类型推断 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("注意, "),a("code",[t._v("defineComponent")]),t._v(" 不会做任何额外操作 - 仅仅返回传入的对象. 不过在类型方面, 返回的对象为 手写 render 函数, JSX 和 IDE 工具支持提供了合成类型.\n我们是故意设计成这样的.")])])]),t._v(" "),a("h3",{attrs:{id:"挂载-app-实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂载-app-实例"}},[t._v("#")]),t._v(" 挂载 app 实例")]),t._v(" "),a("p",[t._v("app 实例可以使用 "),a("code",[t._v("mount")]),t._v(" 方法挂载一个根组件, 类似于 2.x 的 "),a("code",[t._v("vm.$mount()")]),t._v(" 方法, 然后返回已挂载的根组件实例:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 传递给根组件的 props")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"挂载行为与-2-x-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂载行为与-2-x-的区别"}},[t._v("#")]),t._v(" 挂载行为与 2.x 的区别")]),t._v(" "),a("p",[t._v("在使用包含编译器的版本时, 挂载一个没有编写模板的根组件, Vue 会尝试使用挂载目标元素的内容作为模板. 3.x 和 2.x 的行为会有以下区别:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在 2.x 中, 根实例会使用目标元素的"),a("code",[t._v("outerHTML")]),t._v("作为模板, 并替换掉目标元素.")])]),t._v(" "),a("li",[a("p",[t._v("在 3.x 中, 根实例会使用目标元素的"),a("code",[t._v("innerHTML")]),t._v("作为模板, 但只会替换掉目标元素的子元素(children).")])])]),t._v(" "),a("p",[t._v("在大部分情况下不会影响你的 app, 唯一的副作用是, 如果目标元素有多个子元素, 根实例会作为一个片段(fragment)挂载, 而"),a("code",[t._v("this.$el")]),t._v("会指向片段(DOM Comment 节点)的开始节点")]),t._v(" "),a("p",[t._v("在 Vue 3 中, 由于可以使用 Fragments, 推荐使用模板的 refs 来操作 DOM 节点, 不要使用 "),a("code",[t._v("this.$el")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"provide-inject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provide-inject"}},[t._v("#")]),t._v(" Provide / Inject")]),t._v(" "),a("p",[t._v("app 实例提供的依赖可以被 app 内的任何组件注入:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在入口文件里")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("provide")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ThemeSymbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" theme\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在某个子组件里")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  inject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ThemeSymbol\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('<div :style="{ color: theme.textColor }" />')]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这跟在 2.x 的根组件中使用 "),a("code",[t._v("provide")]),t._v(" 选项类似.")]),t._v(" "),a("h3",{attrs:{id:"移除-config-productiontip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移除-config-productiontip"}},[t._v("#")]),t._v(" 移除 "),a("code",[t._v("config.productionTip")])]),t._v(" "),a("p",[t._v('在 3.0 中 "use production build" 提示只会在使用 "dev + 完整版本"(包含运行时编译器带警告的版本) 时显示.')]),t._v(" "),a("p",[t._v("对于 ES 模块版本, 代码会打包在一起, 而且在大部分情况下 CLI 或 样板文件 已经正确的配置了生产环境, 这个提示也不会在出现.")]),t._v(" "),a("h3",{attrs:{id:"config-ignoredelements-config-iscustomelement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-ignoredelements-config-iscustomelement"}},[t._v("#")]),t._v(" "),a("code",[t._v("config.ignoredElements")]),t._v(" -> "),a("code",[t._v("config.isCustomElement")])]),t._v(" "),a("p",[t._v("引入这个配置是为了支持原生的自定义元素, 因此改名可以更好的表达其意思. 这个新选项需要传入一个函数, 相比旧版只能传入字符串和正则更具灵活性.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以前")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ignoredElements "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-el'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^ion-/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以后")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("isCustomElement")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("tag")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startsWith")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ion-'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("重要提示")]),t._v(": 在 3.0 中, 检测一个元素是否为组件的功能已经移到模板编译阶段, 因此这个配置项只能和运行时编译器同时使用. 如果你使用的是 runtime-only 版本, 那必须在构建配置中将 "),a("code",[t._v("isCustomElement")]),t._v(" 传递给 "),a("code",[t._v("@vue/compiler-dom")]),t._v(" - 例如: 通过 "),a("a",{attrs:{href:"https://vue-loader.vuejs.org/zh/options.html#compileroptions",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("vue-loader")]),t._v(" 中的 "),a("code",[t._v("compilerOptions")]),t._v(" 选项"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("ul",[a("li",[t._v("如果在使用 runtime-only 版本时配置了 "),a("code",[t._v("config.isCustomElement")]),t._v(", 会抛出一个警告提示用户在构建配置中传递这个选项")]),t._v(" "),a("li",[t._v("这会是 Vue CLI 配置中的一个新的顶级选项")])]),t._v(" "),a("h3",{attrs:{id:"config-optionmergestrategies-行为变更"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-optionmergestrategies-行为变更"}},[t._v("#")]),t._v(" "),a("code",[t._v("config.optionMergeStrategies")]),t._v(" 行为变更")]),t._v(" "),a("p",[t._v("虽然仍受支持, 但由于 Vue 3 的内部实现变更了, 内置选项不需要合并策略了, 所有不再公开这个 API. "),a("code",[t._v("app.config.optionMergeStrategies")]),t._v("默认是一个空对象, 也就是说:")]),t._v(" "),a("ul",[a("li",[t._v("用户必须提供自己的合并策略函数, 无法再复用内置的合并策略了 (例如, 你无法设置 "),a("code",[t._v("config.optionMergeStrategies.custom = config.optionMergeStrategies.props")]),t._v(")")]),t._v(" "),a("li",[t._v("无法重写内置的合并策略了")])]),t._v(" "),a("h3",{attrs:{id:"添加全局共享实例属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加全局共享实例属性"}},[t._v("#")]),t._v(" 添加全局共享实例属性")]),t._v(" "),a("p",[t._v("在 2.x 中, 可以简单地向"),a("code",[t._v("Vue.prototype")]),t._v("添加属性注入到全局共享的实例.")]),t._v(" "),a("p",[t._v("在 Vue 3 中, 由于 "),a("code",[t._v("Vue")]),t._v(" 不再是一个构造函数, 所以也不再支持这样做了. 不过, 共享的实例属性应该添加到 app 实例的 "),a("code",[t._v("config.globalProperties")]),t._v(" 上.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 之前")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("$http")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 之后")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globalProperties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("$http")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),a("h3",{attrs:{id:"插件的自动安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件的自动安装"}},[t._v("#")]),t._v(" 插件的自动安装")]),t._v(" "),a("p",[t._v("许多 Vue 2.x 的库和插件会在其 UMD 版本中提供自动安装功能, 比如: "),a("code",[t._v("vue-router")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/vue-router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("自动安装需要调用 不再支持的"),a("code",[t._v("Vue.use")]),t._v(" 来实现. 这应该是相对容易的迁移, 我们也可以提供一个会抛出警告的 "),a("code",[t._v("Vue.use")]),t._v(" 占位代码.")]),t._v(" "),a("h2",{attrs:{id:"备选方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备选方案"}},[t._v("#")]),t._v(" 备选方案")]),t._v(" "),a("p",[t._v("N/A")]),t._v(" "),a("h2",{attrs:{id:"升级策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级策略"}},[t._v("#")]),t._v(" 升级策略")]),t._v(" "),a("ul",[a("li",[t._v("转换很简单 (如基本用例所示).")]),t._v(" "),a("li",[t._v("移除的方法会被抛出警告的占位代码取代, 以引导迁移.")]),t._v(" "),a("li",[t._v("也可以提供 codemod 脚本.")]),t._v(" "),a("li",[a("code",[t._v("config.ingoredElements")]),t._v(" 可以在兼容版本中使用.")]),t._v(" "),a("li",[a("code",[t._v("config.optionMergeStrategies")]),t._v(" 内置策略可以在兼容版本中使用.")])])])}),[],!1,null,null,null);s.default=e.exports}}]);