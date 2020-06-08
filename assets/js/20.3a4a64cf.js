(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{348:function(t,e,a){"use strict";a.r(e);var s=a(37),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_15-移除-filters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-移除-filters"}},[t._v("#")]),t._v(" 15. 移除 filters")]),t._v(" "),a("blockquote",[a("p",[t._v("原文: "),a("a",{attrs:{href:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0015-remove-filters.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/vuejs/rfcs/blob/master/active-rfcs/0015-remove-filters.md"),a("OutboundLink")],1)])]),t._v(" "),a("ul",[a("li",[t._v("开始日期: 2019-11-12")]),t._v(" "),a("li",[t._v("目标版本: 3.x")]),t._v(" "),a("li",[t._v("参考 Issues: N/A")]),t._v(" "),a("li",[t._v("实现 PR: N/A")])]),t._v(" "),a("h2",{attrs:{id:"概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),a("p",[t._v("移除对"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/filters.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("过滤器"),a("OutboundLink")],1),t._v("的支持.")]),t._v(" "),a("h2",{attrs:{id:"基本用例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用例"}},[t._v("#")]),t._v(" 基本用例")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 之前 --\x3e")]),t._v("\n{{ msg | format }}\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 之后 --\x3e")]),t._v("\n{{ format(msg) }}\n")])])]),a("h2",{attrs:{id:"动机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动机"}},[t._v("#")]),t._v(" 动机")]),t._v(" "),a("ul",[a("li",[t._v("过滤器的功能很容易用 函数调用 或 计算属性 取代, 它主要是提供语法而不是实用价值")]),t._v(" "),a("li",[t._v('过滤器需要使用自己的一套微语法, 这就打破了"只是 JavaScript"的语法设定 - 这样增加了学习和实现成本. 实际上, 它与 JavaScript 的 按位或运算符('),a("code",[t._v("|")]),t._v(") 冲突了, 并使表达式解析变得更复杂.")]),t._v(" "),a("li",[t._v("过滤器也让 IDE 支持模板 变得更加困难(同样是因为这不是真正的 JavaScript)")])]),t._v(" "),a("h2",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("多个过滤器串联 比 多个函数嵌套 更加易读:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" uppercase "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" reverse "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" pluralize\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vs")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pluralize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uppercase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("不过, 在实际使用中, 我们发现超过两个过滤器的情况相当少, 所以牺牲一点可读性可以接受")])]),t._v(" "),a("li",[a("p",[t._v("单独引入 或 定义函数 都比全局注册的过滤器 更啰嗦. 不过全局过滤器和在"),a("code",[t._v("Vue.prototype")]),t._v("上注册 helpers 函数本质上都是一样的. 这样全局注册的代价是: 会让代码依赖关系变得模糊, 并造成类型推断困难.")])])]),t._v(" "),a("h2",{attrs:{id:"备选方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备选方案"}},[t._v("#")]),t._v(" 备选方案")]),t._v(" "),a("p",[t._v("JavaScript 有一个 Stage 1 的提案"),a("a",{attrs:{href:"https://github.com/tc39/proposal-pipeline-operator",target:"_blank",rel:"noopener noreferrer"}},[t._v("管道操作符"),a("OutboundLink")],1),t._v(", 提供了十分类似的语法便利.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" transformedMsg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" uppercase "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" reverse "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" pluralize\n")])])]),a("p",[t._v("考虑到这种提案最终可能会落地, 像 Vue 这样的框架最好不要实现类似的语法 (尤其是与当前 JavaScript 冲突的语法)")]),t._v(" "),a("p",[t._v("尽管如此, 但这个提案仍处于 Stage 1 且好久没有更新了, 所以是否能落地或落地之后是否还是这种语法尚不得知. 对于 Vue 来说采取这种语法作为官方 API 是十分冒险的, 如果规范最终更改了, 我们就不得不引入破坏性修改.")]),t._v(" "),a("p",[t._v("在 Vue 3, 模板的表达式解析会使用"),a("a",{attrs:{href:"https://babeljs.io/docs/en/babel-parser",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/parser"),a("OutboundLink")],1),t._v(", 而且支持通过"),a("code",[t._v("expressionPlugins")]),t._v("编译选项("),a("code",[t._v("@babel/parser")]),t._v(" 的 "),a("a",{attrs:{href:"https://babeljs.io/docs/en/babel-parser#plugins",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("plugins")]),t._v(" 选项"),a("OutboundLink")],1),t._v(")开启管道操作符语法.\n注意 Vue 的 模板编译选项 只会解析模板语法 - 生产的 render 函数需要 Babel 进一步转译(默认情况下, 这是在基于 Webpack 的新设置中完成的)")]),t._v(" "),a("h2",{attrs:{id:"升级策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级策略"}},[t._v("#")]),t._v(" 升级策略")]),t._v(" "),a("p",[t._v("在兼容 2.x 的版本中, 可以支持过滤器, 但会抛出一个警告引导用户进行迁移.")])])}),[],!1,null,null,null);e.default=r.exports}}]);