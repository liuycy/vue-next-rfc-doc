(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{209:function(t,a,s){"use strict";s.r(a);var n=s(28),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"用-v-model-取代-v-bind-sync"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用-v-model-取代-v-bind-sync"}},[t._v("#")]),t._v(" 用 v-model 取代 v-bind.sync")]),t._v(" "),s("ul",[s("li",[t._v("开始日期: 2019-01-28")]),t._v(" "),s("li",[t._v("目标版本: 3.x")]),t._v(" "),s("li",[t._v("参考 Issues: https://github.com/vuejs/vue-next/issues/8")]),t._v(" "),s("li",[t._v("实现 PR: (留空)")])]),t._v(" "),s("h2",{attrs:{id:"概要"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),s("p",[t._v("移除 "),s("code",[t._v("v-bind")]),t._v(" 上的 "),s("code",[t._v("sync")]),t._v(" 修饰符, 使用 带参数的 "),s("code",[t._v("v-model")]),t._v(" 来代替.")]),t._v(" "),s("h2",{attrs:{id:"基本用例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本用例"}},[t._v("#")]),t._v(" 基本用例")]),t._v(" "),s("p",[t._v("以前的语法")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MyComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("title.sync")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("现在的语法")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MyComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-model:")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h2",{attrs:{id:"动机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动机"}},[t._v("#")]),t._v(" 动机")]),t._v(" "),s("p",[s("code",[t._v("v-bind.sync")]),t._v(" 在 2.x 中的使用情况相当混乱, 因为用户以为可以像 "),s("code",[t._v("v-bind")]),t._v(" 一样使用它 (完全不看我们在文档中写的). 我认为最好的解释就是:")]),t._v(" "),s("blockquote",[s("p",[t._v("认为 "),s("code",[t._v('v-bind:title.sync="title"')]),t._v(" 是一种具有额外功能的正常绑定是错误的想法, 因为这跟双向绑定完全不同. "),s("code",[t._v(".sync")]),t._v(" 修饰符的工作原理就像另一种用于创建双向绑定的语法糖 "),s("code",[t._v("v-model")]),t._v(".\n主要区别在于 "),s("code",[t._v(".sync")]),t._v(" 可以在单个组件上定义多个双向绑定, 但 "),s("code",[t._v("v-model")]),t._v(" 只能定义一个.")])]),t._v(" "),s("p",[t._v("那么问题来了: 如果告诉用户不要将 "),s("code",[t._v("v-bind.sync")]),t._v(" 认为是 "),s("code",[t._v("v-bind")]),t._v(", 应该把它认为是 "),s("code",[t._v("v-model")]),t._v(", 那它是不是应该成为 "),s("code",[t._v("v-model")]),t._v(" 的一部分 ?")]),t._v(" "),s("h2",{attrs:{id:"设计细节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计细节"}},[t._v("#")]),t._v(" 设计细节")]),t._v(" "),s("blockquote",[s("p",[t._v("注意: 虽然不是这个提案的一部分, 但 Vue 3 的 "),s("code",[t._v("v-model")]),t._v(" 实现细节可能会修改, 为了能让透明的包装组件(transparent wrapper components)更容易实现.\n当你看到 "),s("code",[t._v("modelValue")]),t._v(" 属性 和 "),s("code",[t._v("update:modelValue")]),t._v(" 事件时, 你要知道那是实现 "),s("code",[t._v("v-model")]),t._v(" 特殊行为的占位符, 不是这个提案的内容.")])]),t._v(" "),s("h3",{attrs:{id:"在元素上"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在元素上"}},[t._v("#")]),t._v(" 在元素上")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 是下面的缩写: --\x3e")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":model-value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("@update:")]),t._v("model-value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("newValue => { xxx = newValue }"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-model:")]),t._v("aaa")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 无效: 会抛出一个编译时错误 --\x3e")]),t._v("\n")])])]),s("p",[t._v("注意: "),s("code",[t._v('v-bind:aaa.sync="xxx"')]),t._v(" 目前不会抛出编译时错误")]),t._v(" "),s("h3",{attrs:{id:"在组件上"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在组件上"}},[t._v("#")]),t._v(" 在组件上")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MyComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 是下面的缩写: --\x3e")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MyComponent")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":model-value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("@update:")]),t._v("model-value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("newValue => { xxx = newValue }"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MyComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-model:")]),t._v("aaa")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 是下面的缩写: --\x3e")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MyComponent")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":aaa")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("@update:")]),t._v("aaa")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("newValue => { xxx = newValue }"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h3",{attrs:{id:"复制v-bind-sync-xxx-的对象展开行为"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复制v-bind-sync-xxx-的对象展开行为"}},[t._v("#")]),t._v(" 复制"),s("code",[t._v('v-bind.sync="xxx"')]),t._v("的对象展开行为")]),t._v(" "),s("p",[t._v("其他带参数的指令有 "),s("code",[t._v("v-bind")]),t._v(" 和 "),s("code",[t._v("v-on")]),t._v(", 它们都是使用无参数的版本来处理展开对象, 但 "),s("code",[t._v("v-model")]),t._v(" 无参数的版本已经是 "),s("code",[t._v('v-model:model-value="xxx"')]),t._v(" 的缩写了.\n我考虑了以下几种选项:")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("将 "),s("code",[t._v('v-model="xxx"')]),t._v(" 改为处理展开对象, 强制用户使用"),s("code",[t._v('v-model:model-value="xxx"')]),t._v("处理原来的行为")]),t._v(". 这样可以让"),s("code",[t._v("v-model")]),t._v("行为更像"),s("code",[t._v("v-bind")]),t._v("与"),s("code",[t._v("v-on")]),t._v(", 但会造成一个破坏性修改导致常见用例更复杂冗长.")]),t._v(" "),s("li",[s("strong",[t._v("给"),s("code",[t._v("v-model")]),t._v("加一个修饰符(如: "),s("code",[t._v(".spread")]),t._v(")")]),t._v(". 这样的破坏性改动较小, 但与其他指令行为不一致会让用户疑惑, 而且框架整体上会变得更复杂.")]),t._v(" "),s("li",[s("strong",[t._v("当传入对象时自动检测并改变行为(如: "),s("code",[t._v('v-model="{ ...xxx }"')]),t._v(")")]),t._v(". 这样的破坏性改动也很小, 而且与其他带参数的指令行为更加一致, 因为 "),s("code",[t._v("v-bind={ ...xxx }")]),t._v(" 也有相同的效果.\n我预料这会产生分歧, 有人会认为这样比较直观, 而有人会认为 使用 "),s("code",[t._v("xxx")]),t._v(" 和 "),s("code",[t._v("{ ...xxx }")]),t._v(" 导致的不同的行为会让人疑惑.")]),t._v(" "),s("li",[s("strong",[t._v("直接禁止在"),s("code",[t._v("v-model")]),t._v("使用对象展开")]),t._v(". 这样可以避免前两个选项的问题, 但缺点是让一些人(虽然可能是小部分的)更难迁移到 Vue 3.\n最好的情况是: 那些本来可以因此功能受益的 Templates/JSX 会变又臭又长难以维护. 最坏的情况是: (使用 "),s("code",[t._v("createElement/h")]),t._v(" 强制重构渲染函数时)直接无法使用.")])]),t._v(" "),s("p",[t._v("这些都不是好选项, 但我更加倾向于选项 2. 我还想听听我可能错过的其他好建议.")]),t._v(" "),s("h2",{attrs:{id:"缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),s("p",[t._v("与其使用破坏性性修改造成重大损失, 这种做法的损失相对较小 - 一方面是因为 "),s("code",[t._v(".sync")]),t._v(" 修饰符还没有被广泛使用, 另一方面是因为迁移用户可能会更容易. (详见下方升级策略)")]),t._v(" "),s("h2",{attrs:{id:"升级策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#升级策略"}},[t._v("#")]),t._v(" 升级策略")]),t._v(" "),s("p",[t._v("作为破坏性修改, 只能在 Vue 3 主版本引入. 不过, 我们可以做些工作来简化迁移:")]),t._v(" "),s("ul",[s("li",[t._v("检测到 "),s("code",[t._v("v-bind")]),t._v(" 使用 "),s("code",[t._v(".sync")]),t._v(" 修饰符时发出一个警告, 链接到关于这个修改的迁移指南.")]),t._v(" "),s("li",[t._v("使用新的迁移助手, 我们应该可以检测并修复 100% 的 "),s("code",[t._v("v-bind")]),t._v(" 和 "),s("code",[t._v(".sync")]),t._v(" 同时使用的案例.")])]),t._v(" "),s("p",[t._v("总之, 学习和迁移大量使用 "),s("code",[t._v(".sync")]),t._v(" 的大型代码库只需要几分钟.")])])}),[],!1,null,null,null);a.default=e.exports}}]);