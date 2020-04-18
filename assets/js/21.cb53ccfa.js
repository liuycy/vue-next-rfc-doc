(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{350:function(t,a,s){"use strict";s.r(a);var n=s(37),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_16-移除行内模板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_16-移除行内模板"}},[t._v("#")]),t._v(" 16. 移除行内模板")]),t._v(" "),s("blockquote",[s("p",[t._v("原文: "),s("a",{attrs:{href:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0016-remove-inline-templates.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/vuejs/rfcs/blob/master/active-rfcs/0016-remove-inline-templates.md"),s("OutboundLink")],1)])]),t._v(" "),s("ul",[s("li",[t._v("开始日期: 2019-11-14")]),t._v(" "),s("li",[t._v("目标版本: 3.x")]),t._v(" "),s("li",[t._v("参考 Issues: N/A")]),t._v(" "),s("li",[t._v("实现 PR: (leave this empty)")])]),t._v(" "),s("h2",{attrs:{id:"概要"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),s("p",[t._v("不再支持"),s("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E5%86%85%E8%81%94%E6%A8%A1%E6%9D%BF",target:"_blank",rel:"noopener noreferrer"}},[t._v("内联模板功能"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"动机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动机"}},[t._v("#")]),t._v(" 动机")]),t._v(" "),s("p",[t._v("最初引入 "),s("code",[t._v("inline-template")]),t._v(" 是为了处理 在传统 SSR 应用中(如: Rails, Django 或 Laravel)使用 Vue 的情况. 这个属性允许用户使用组件内的内容直接替换组件的模板.")]),t._v(" "),s("p",[s("code",[t._v("inline-template")]),t._v(" 最大的问题是会让模板的作用域变得非常难以理解, 按照惯例模板中的每一个变量要么是用户定义的, 要么是指令(如: "),s("code",[t._v("v-for")]),t._v(" and "),s("code",[t._v("v-slot")]),t._v(")明确引入的作用域变量.\n"),s("code",[t._v("inline-template")]),t._v(" 在同一个模板中混合了多个作用域的变量就打破了这种设定:")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  {{ parentMsg }}\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("child-comp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("inline-template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{ parentMsg }}\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("child-comp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{pre:!0},[s("p",[t._v("在组件中使用 slots 的话, 插槽内的  "),s("code",[t._v("{{ parentMsg }}")]),t._v("  可以直观地正常运行. 但使用 "),s("code",[t._v("inline-template")]),t._v(" 的话, 类似的组件中 "),s("code",[t._v("v-for")]),t._v(" + "),s("code",[t._v("inline-template")]),t._v(" 一起使用时就不能正常运行:")])]),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("child-comp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("inline-template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item in list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  {{ item.msg }}\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("child-comp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("因为内部的模板访问不到 "),s("code",[t._v("item")]),t._v(", 它其实指向了 "),s("code",[t._v("child-comp")]),t._v(" 组件内的 "),s("code",[t._v("this.item")])]),t._v(" "),s("h2",{attrs:{id:"升级策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#升级策略"}},[t._v("#")]),t._v(" 升级策略")]),t._v(" "),s("h3",{attrs:{id:"替代方案-1-script-标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#替代方案-1-script-标签"}},[t._v("#")]),t._v(" 替代方案 1: "),s("code",[t._v("<script>")]),t._v(" 标签")]),t._v(" "),s("p",[t._v("当使用的 "),s("code",[t._v("inline-template")]),t._v(" 可以不需要构建直接将模板写在 HTML 页面中时. 在这种情况下, 最直接的解决方案就是使用能选择的 "),s("code",[t._v("<script>")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("my-comp-template"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hello "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("然后在组件中通过 id 选择器使用这个模板:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MyComp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#my-comp-template'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这样不需要任何构建配置, 可以在所有浏览器中使用, 且不受 in-DOM HTML 解析的约束(如: 你可以使用驼峰命名的 prop 名称), 而且在大部分 IDE 中支持语法高亮.\n在传统服务端框架中, 这部分模板可以拆到服务端模板部分(注入到 HTML 中)以便获得更好的可维护性.")]),t._v(" "),s("h3",{attrs:{id:"替代方案-2-默认插槽"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#替代方案-2-默认插槽"}},[t._v("#")]),t._v(" 替代方案 2: 默认插槽")]),t._v(" "),s("p",[t._v("以前使用 "),s("code",[t._v("inline-template")]),t._v(" 的组件可以使用默认插槽重构 - 可以让数据的作用域更明确, 同时保留了编写内联子级内容的便利:")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 之前 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("my-comp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("inline-template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":msg")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("parentMsg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  {{ msg }} {{ childState }}\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("my-comp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 之后 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("my-comp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-slot")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ childState }"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  {{ parentMsg }} {{ childState }}\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("my-comp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("那么在组件内就可以不用模板直接渲染这个默认插槽了 (在 Vue 3 由于支持 fragment, 你可以把插槽作为根节点渲染了):")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n  在子组件模板位置, 渲染默认插槽同时传入子组件的属性\n--\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("slot")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":childState")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("childState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);