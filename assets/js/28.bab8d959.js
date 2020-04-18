(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{357:function(s,t,a){"use strict";a.r(t);var e=a(37),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_23-scoped-样式变更"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_23-scoped-样式变更"}},[s._v("#")]),s._v(" 23. scoped 样式变更")]),s._v(" "),a("blockquote",[a("p",[s._v("原文: "),a("a",{attrs:{href:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md"),a("OutboundLink")],1)])]),s._v(" "),a("ul",[a("li",[s._v("开始日期: 2020-01-21")]),s._v(" "),a("li",[s._v("目标版本: 2.x, 3.x")]),s._v(" "),a("li",[s._v("参考 Issues: N/A")]),s._v(" "),a("li",[s._v("实现 PR: N/A")])]),s._v(" "),a("h2",{attrs:{id:"概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[s._v("#")]),s._v(" 概要")]),s._v(" "),a("p",[s._v("在单文件组件的 scoped 样式中提供更加一致的 CSS 自定义拓展.")]),s._v(" "),a("h2",{attrs:{id:"基本用例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用例"}},[s._v("#")]),s._v(" 基本用例")]),s._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("style")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("scoped")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 深度选择器 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("::v-deep(.foo)")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 指定插槽内容 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("::v-slotted(.foo)")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 一次性全局规则 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("::v-global(.foo)")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])]),a("h2",{attrs:{id:"动机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动机"}},[s._v("#")]),s._v(" 动机")]),s._v(" "),a("p",[s._v("Vue SFC scoped 样式可以让 CSS 只作用于当前组件. 有些用户经常碰到的情况需要改进一下.")]),s._v(" "),a("h3",{attrs:{id:"深度选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深度选择器"}},[s._v("#")]),s._v(" 深度选择器")]),s._v(" "),a("p",[s._v("有时我们会想让一个规则准确地作用于子组件.")]),s._v(" "),a("p",[s._v("原本我们是支持使用 "),a("code",[s._v(">>>")]),s._v(' 让选择器更"深入". 不过, 由于不是官方的 CSS 语法, 一些 CSS 预处理器像 SASS 在解析时会出问题.')]),s._v(" "),a("p",[s._v("我们后面调整为 CSS 的一个提案(Chrome 甚至都实现了) "),a("code",[s._v("/deep/")]),s._v(", 不过后面这个提案被废弃了. 这样造成了一些用户的困惑, 因为他们担心在 SFC 中使用 /deep/ 会在删除该功能的浏览器中没有作用. 不过, 和 "),a("code",[s._v(">>>")]),s._v(" 一样, "),a("code",[s._v("/deep/")]),s._v(" 只是用于 SFC 编译器重写选择器时的编译时提示, 会在最终生成的 CSS 中移除的.")]),s._v(" "),a("p",[s._v("为了避免移除的 "),a("code",[s._v("/deep/")]),s._v(" 造成困惑, 我们又引入了另一个自定义的深度选择器 "),a("code",[s._v("::v-deep")]),s._v(", 这次将明确地表示这是一个 Vue 的特殊拓展, 并使用伪元素的语法以致任何预处理器都能正确解析.")]),s._v(" "),a("p",[s._v("为了兼容, 之前几个深度选择器仍能在 "),a("a",{attrs:{href:"https://github.com/vuejs/component-compiler-utils",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vue 2 SFC 编译器"),a("OutboundLink")],1),s._v(" 中使用, 不过在 v3 版本我们会废弃 "),a("code",[s._v(">>>")]),s._v(" 和 "),a("code",[s._v("/deep/")]),s._v(".")]),s._v(" "),a("p",[s._v("当我们在开发 v3 版本的 SFC 编译器时, 注意到了 CSS 伪元素实际上并不是 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Combinators",target:"_blank",rel:"noopener noreferrer"}},[s._v("关系选择器"),a("OutboundLink")],1),s._v(". 接受参数的伪元素更符合 CSS 的使用习惯, 所以我们将 "),a("code",[s._v("::v-deep()")]),s._v(" 改成这种形式了.\n当前 "),a("code",[s._v("::v-deep")]),s._v(" 作为关系选择器的用法还是可以使用, 不过这样的用法即将废弃并会抛出一个警告.")]),s._v(" "),a("h3",{attrs:{id:"指定-避免-插槽内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指定-避免-插槽内容"}},[s._v("#")]),s._v(" 指定 / 避免 插槽内容")]),s._v(" "),a("p",[s._v("目前, 从父级传入的插槽内容会同时受到父级的 scoped 样式 和 子级的 scoped 样式作用. 无法创建只针对插槽内容的规则, 也无法创建不影响插槽内容的规则.")]),s._v(" "),a("p",[s._v("在 v3 版本中, 我们打算让子级的 scoped 样式默认不再作用于插槽内容, 想要明确指定作用到插槽内容的话, 可以使用 "),a("code",[s._v("::v-slotted()")]),s._v(" 伪元素.")]),s._v(" "),a("h3",{attrs:{id:"一次性全局规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一次性全局规则"}},[s._v("#")]),s._v(" 一次性全局规则")]),s._v(" "),a("p",[s._v("目前想要添加一个全局 CSS 规则, 我们需要使用一个不带 scoped 的 "),a("code",[s._v("<style>")]),s._v(" 块. 我们正在引入一个新的伪元素 "),a("code",[s._v("::v-global()")]),s._v(" 来实现一次性全局规则.")]),s._v(" "),a("hr"),s._v(" "),a("blockquote",[a("p",[s._v("我们也知道许多用户想要在单文件组件的 CSS 中使用组件的 props 或 状态. 我们正打算支持这个功能, 不过会在一个单独 RFC 中介绍.")])]),s._v(" "),a("h2",{attrs:{id:"设计细节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计细节"}},[s._v("#")]),s._v(" 设计细节")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v(">>>")]),s._v(" 和 "),a("code",[s._v("/deep/")]),s._v(" 会被废弃.")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("::v-deep")]),s._v(" 作为关系选择器的用法会被废弃:")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* DEPRECATED */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("::v-deep .bar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("取而代之的是接受另一个选择器作为参数的伪元素用法:")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("::v-deep(.bar)")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("上面的代码会编译为:")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("[v-data-xxxxxxx] .bar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("从父级传入的插槽内容默认不再受子级 scoped 样式的作用. 子级现在需要使用新的伪元素 "),a("code",[s._v("::v-slotted()")]),s._v(" 来明确地指定插槽内容:")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("::v-slotted(.foo)")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("会被编译为:")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".foo[v-data-xxxxxxx-s]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("注意 "),a("code",[s._v("-s")]),s._v(" 后缀会使其只作用于插槽内容.")])]),s._v(" "),a("li",[a("p",[s._v("新的伪元素 "),a("code",[s._v("::v-global()")]),s._v(" 可以在 "),a("code",[s._v("<style scoped>")]),s._v(" 块内应用全局样式规则:")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("::v-global(.foo)")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("会被编译为:")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".foo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("查看"),a("a",{attrs:{href:"https://github.com/vuejs/vue-next/blob/master/packages/compiler-sfc/__tests__/compileStyle.spec.ts",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("@vue/compiler-sfc")]),s._v("的测试用例"),a("OutboundLink")],1),s._v(" 可以知道更多编译转换的细节.")])])]),s._v(" "),a("h2",{attrs:{id:"升级策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级策略"}},[s._v("#")]),s._v(" 升级策略")]),s._v(" "),a("p",[s._v("所有深度选择器之前的用法会抛出废弃警告. 当用户完全迁移完毕后, 我们会在将来的某个版本移除这些用法.")]),s._v(" "),a("p",[s._v("插槽作用域的更改理论上可以实现父级和子级组件的解耦, 不过这个行为的确会破坏那些依赖子级样式的插槽内容. 我们可能会提供一个选项来保留旧行为.")]),s._v(" "),a("h2",{attrs:{id:"未解决的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#未解决的问题"}},[s._v("#")]),s._v(" 未解决的问题")]),s._v(" "),a("p",[s._v("我们不确定插槽行为的变更会影响到多少现有的组件 - 需要一些反馈")])])}),[],!1,null,null,null);t.default=r.exports}}]);