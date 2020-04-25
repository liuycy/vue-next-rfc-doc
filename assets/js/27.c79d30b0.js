(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{356:function(t,a,s){"use strict";s.r(a);var n=s(37),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_21-router-link-作用域插槽"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_21-router-link-作用域插槽"}},[t._v("#")]),t._v(" 21. router-link 作用域插槽")]),t._v(" "),s("blockquote",[s("p",[t._v("原文: "),s("a",{attrs:{href:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0021-router-link-scoped-slot.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/vuejs/rfcs/blob/master/active-rfcs/0021-router-link-scoped-slot.md"),s("OutboundLink")],1)])]),t._v(" "),s("ul",[s("li",[t._v("开始日期: 2019-04-29")]),t._v(" "),s("li",[t._v("目标版本: Vue (2.x / 3.x) Vue Router (3.x / 4.x)")]),t._v(" "),s("li",[t._v("参考 Issues: https://github.com/vuejs/vue-router/issues/2611,")]),t._v(" "),s("li",[t._v("实现 PR: 在 "),s("a",{attrs:{href:"https://github.com/vuejs/vue-router/commit/e289ddee99fcc3129e65485e32f394c1308bb98b",target:"_blank",rel:"noopener noreferrer"}},[t._v("v3.x"),s("OutboundLink")],1),t._v(" 和 v4.x 中已实现")])]),t._v(" "),s("h2",{attrs:{id:"概要"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),s("ul",[s("li",[t._v("移除 "),s("code",[t._v("tag")]),t._v(" 属性")]),t._v(" "),s("li",[t._v("移除 "),s("code",[t._v("event")]),t._v(" 属性")]),t._v(" "),s("li",[t._v("不再自动绑定点击事件到内部锚点标签")]),t._v(" "),s("li",[t._v("新增作用域插槽 API")])]),t._v(" "),s("h2",{attrs:{id:"基本用例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本用例"}},[t._v("#")]),t._v(" 基本用例")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Icon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("home"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Icon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" Home\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"动机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动机"}},[t._v("#")]),t._v(" 动机")]),t._v(" "),s("p",[t._v("Router Link 当前实现有很多限制:")]),t._v(" "),s("ul",[s("li",[t._v("定制化激活状态不够完善 ("),s("a",{attrs:{href:"https://github.com/vuejs/vue-router/issues/2611",target:"_blank",rel:"noopener noreferrer"}},[t._v("#2611"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("无法继承自定义组件 ("),s("a",{attrs:{href:"https://github.com/vuejs/vue-router/issues/2021",target:"_blank",rel:"noopener noreferrer"}},[t._v("#2021"),s("OutboundLink")],1),t._v(")")]),t._v(" "),s("li",[t._v("无法禁用点击事件 (通过 "),s("code",[t._v("@click.prevent")]),t._v(" 或 "),s("code",[t._v("disabled")]),t._v(" 属性都不行 "),s("a",{attrs:{href:"https://github.com/vuejs/vue-router/pull/2098",target:"_blank",rel:"noopener noreferrer"}},[t._v("#2098"),s("OutboundLink")],1),t._v(")")])]),t._v(" "),s("p",[t._v("这个 RFC 提出通过提供一个作用域插槽来解决这些问题, 可以让开发者更加容易地根据他们的应用来拓展 Links, 也可以让库开发者能提供出一个更简单的 Vue Router 集成方案.")]),t._v(" "),s("h2",{attrs:{id:"设计细节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计细节"}},[t._v("#")]),t._v(" 设计细节")]),t._v(" "),s("h3",{attrs:{id:"自定义内容插槽"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义内容插槽"}},[t._v("#")]),t._v(" 自定义内容插槽")]),t._v(" "),s("p",[t._v("一个简单的用例是自定义内容的插槽(不嵌套锚点和按钮的)")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Icon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("home"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Icon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" Home\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("此实现将会:")]),t._v(" "),s("ul",[s("li",[t._v("生产一个锚点元素"),s("code",[t._v("<a>")]),t._v("并绑定相应的属性\n"),s("ul",[s("li",[s("code",[t._v("href")]),t._v("绑定指向地址")]),t._v(" "),s("li",[s("code",[t._v("class")]),t._v("绑定"),s("code",[t._v("router-link-active")]),t._v(" 与/或 "),s("code",[t._v("router-link-exact-active")]),t._v("(可以通过 prop 或 全局选项改变)")]),t._v(" "),s("li",[t._v("绑定点击事件来执行"),s("code",[t._v("event.preventDefault")]),t._v(" 然后触发 "),s("code",[t._v("router.push")]),t._v(" 或 "),s("code",[t._v("router.replace")]),t._v(" (除非使用 "),s("kbd",[t._v("⌘")]),t._v(" 或 "),s("kbd",[t._v("Ctrl")]),t._v(" 来修饰点击事件)")])])]),t._v(" "),s("li",[t._v("将所有内容当作锚点元素的子级")]),t._v(" "),s("li",[t._v("将所有不是 props 的属性传递给锚点元素")])]),t._v(" "),s("p",[s("strong",[t._v("破坏性更改")]),t._v(":")]),t._v(" "),s("ul",[s("li",[t._v("不再接收 "),s("code",[t._v("tag")]),t._v(" 属性 -> 使用作用域插槽代替(详情请查看下方介绍)")]),t._v(" "),s("li",[t._v("不再接收 "),s("code",[t._v("event")]),t._v(" -> 使用作用域插槽代替")]),t._v(" "),s("li",[t._v("不再作为自动寻找内部第一个 "),s("code",[t._v("<a>")]),t._v(" 的包装器 -> 使用作用域插槽代替")])]),t._v(" "),s("h3",{attrs:{id:"自定义-tag-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义-tag-属性"}},[t._v("#")]),t._v(" 自定义 "),s("code",[t._v("tag")]),t._v(" 属性")]),t._v(" "),s("p",[t._v("如果能被作用域插槽代替的话, 我不确定是否要保留 "),s("code",[t._v("tag")]),t._v(" 属性, 因为这个属性无法处理自定义组件除非是非常简单的, 但我们可能会用到自定义的 UI 组件而非基础用例:")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tag")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Icon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("home"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Icon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xs-hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Home"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("相当于是:")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-slot")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ navigate, isActive, isExactActive }"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("role")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("link"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("navigate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ active: isActive, 'exact-active': isExactActive }"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Icon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("home"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Icon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xs-hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Home"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("(有关作用域插槽属性的说明, 请参阅下面)")]),t._v(" "),s("h3",{attrs:{id:"作用域插槽"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域插槽"}},[t._v("#")]),t._v(" 作用域插槽")]),t._v(" "),s("p",[t._v("作用域插槽能获取到自定义集成所需的任何信息, 并允许在任意层级使用 active 相关的 class, 点击事件的监听, links 等.\n这样可以更好地与 "),s("a",{attrs:{href:"https://getbootstrap.com/docs/4.3/components/navbar/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bootstrap"),s("OutboundLink")],1),t._v(" 之类的框架集成.\n这样就可以避免像 "),s("a",{attrs:{href:"https://bootstrap-vue.js.org/docs/components/navbar/#navbar",target:"_blank",rel:"noopener noreferrer"}},[t._v("bootstrap-vue"),s("OutboundLink")],1),t._v(" 那样写一堆样板代码")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-slot")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ href, navigate, isActive }"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ 'active': isActive }"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("href"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("navigate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Icon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("home"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Icon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xs-hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Home"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h4",{attrs:{id:"可访问变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可访问变量"}},[t._v("#")]),t._v(" 可访问变量")]),t._v(" "),s("p",[t._v("插槽应该提供这些在 "),s("code",[t._v("router-link")]),t._v(" 内部计算的值:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("href")]),t._v(": 解析要添加到锚点标签的相对地址 (当没有提供 route.fullPath 但提供了 base 时, 会包含 base)")]),t._v(" "),s("li",[s("code",[t._v("route")]),t._v(": 从 "),s("code",[t._v("to")]),t._v(" 属性中解析成 route location 的各个属性 (与 "),s("code",[t._v("$route")]),t._v(" 一致)")]),t._v(" "),s("li",[s("code",[t._v("navigate")]),t._v(": 触发导航的函数 (通常绑定点击事件). 点击时同时会调用 "),s("code",[t._v("preventDefault")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("isActive")]),t._v(": 当应用 "),s("code",[t._v("router-link-active")]),t._v(" 时为 true, 可以被 "),s("code",[t._v("exact")]),t._v(" 属性修改")]),t._v(" "),s("li",[s("code",[t._v("isExactActive")]),t._v(": 当应用 "),s("code",[t._v("router-link-exact-active")]),t._v(" 时为 true, 可以被 "),s("code",[t._v("exact")]),t._v(" 属性修改.")])]),t._v(" "),s("h2",{attrs:{id:"缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),s("ul",[s("li",[t._v("虽然可以保持现有的行为正常工作且只暴露作用域插槽为新行为, 但是仍会阻碍我们使用这个实现来修复现有的问题. 所以会引入一些破坏性更改来保持一致性.")]),t._v(" "),s("li",[t._v("无法访问默认的 "),s("code",[t._v("router-link")]),t._v(" 类, 例如"),s("code",[t._v("router-link-active")]),t._v("和"),s("code",[t._v("router-link-exact-active")])])]),t._v(" "),s("h2",{attrs:{id:"备选方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#备选方案"}},[t._v("#")]),t._v(" 备选方案")]),t._v(" "),s("ul",[s("li",[t._v("为了方便保留 "),s("code",[t._v("event")]),t._v(" 属性")])]),t._v(" "),s("h2",{attrs:{id:"升级策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#升级策略"}},[t._v("#")]),t._v(" 升级策略")]),t._v(" "),s("ul",[s("li",[t._v("根据用例为新行为编写文档")]),t._v(" "),s("li",[t._v("弃用 "),s("code",[t._v("tag")]),t._v(" 和 "),s("code",[t._v("event")]),t._v(" 抛出一条信息并链接到 v4 中的已移除文档")])]),t._v(" "),s("h2",{attrs:{id:"未解决问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#未解决问题"}},[t._v("#")]),t._v(" 未解决问题")])])}),[],!1,null,null,null);a.default=e.exports}}]);