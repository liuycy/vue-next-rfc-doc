(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{363:function(t,a,s){"use strict";s.r(a);var v=s(37),e=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_28-router-active-link"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_28-router-active-link"}},[t._v("#")]),t._v(" 28. router active link")]),t._v(" "),s("blockquote",[s("p",[t._v("原文: "),s("a",{attrs:{href:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0028-router-active-link.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/vuejs/rfcs/blob/master/active-rfcs/0028-router-active-link.md"),s("OutboundLink")],1)])]),t._v(" "),s("ul",[s("li",[t._v("开始日期: 2020-02-28")]),t._v(" "),s("li",[t._v("目标版本: Router v4")]),t._v(" "),s("li",[t._v("参考 Issues: https://github.com/vuejs/vue-router/issues/2040")]),t._v(" "),s("li",[t._v("实现 PR:")])]),t._v(" "),s("h2",{attrs:{id:"概要"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),s("p",[t._v("修改 "),s("code",[t._v("router-link-active")]),t._v(" 应用方式, 使其更符合路由 ( router ) 的概念. 现在是这样的, 如果获取到的 url 是当前 location 的一部分, 那么这个 url 就是 "),s("em",[t._v("active")]),t._v(". 这会导致一些问题:")]),t._v(" "),s("ul",[s("li",[t._v("别名不一定能被匹配到")]),t._v(" "),s("li",[t._v("当跳转到斜杠开头的子路由时, 因为 url 不同, 其父路由不会显示为 active")]),t._v(" "),s("li",[t._v("Query 可以用于使 link active")])]),t._v(" "),s("h2",{attrs:{id:"动机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动机"}},[t._v("#")]),t._v(" 动机")]),t._v(" "),s("p",[t._v("上面提到的问题用户很难或不可能自己实现, 然而现在实现起来十分简单:")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-slot")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ route }"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  部分路径(path): {{ $route.path.startsWith(route.path) }}\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  部分路径(path) + 部分查询(query): {{ $route.path.startsWith(route.path) && includesQuery($route.query, route.query) }}\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果我们想匹配 query 时")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("includesQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("outter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" key "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" inner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" innerValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" inner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" outterValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" outter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" innerValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("innerValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" outterValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("Array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("outterValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n        outterValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" innerValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n        innerValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("some")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" outterValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("从路由的角度来讲, 这样确实更符合逻辑, 因为 link 会随路由记录的变化 active. 这对于嵌套路由和别名很重要, 尤其是那些不与 router-link 的 location 共享当前 url 的一部分时就不能处于 active 的.\n从导航的角度来讲, 也更符合逻辑, 一个 active 的 link 不会触发一个新的导航 (除了嵌套路由, 因为它可能是导航).")]),t._v(" "),s("h2",{attrs:{id:"设计细节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计细节"}},[t._v("#")]),t._v(" 设计细节")]),t._v(" "),s("p",[t._v("active 的行为应该与路由的 "),s("em",[t._v("匹配器")]),t._v(" 联系的更加紧密一些, 就是说它应该与当前 url 呈现的内容相关, 这是 "),s("em",[t._v("路由记录")]),t._v(" 的一部分. 因此, "),s("code",[t._v("query")]),t._v(" 和 "),s("code",[t._v("hash")]),t._v(" 不应该影响到这个行为. 似乎确实"),s("a",{attrs:{href:"https://github.com/vuejs/vue-router/issues/2040",target:"_blank",rel:"noopener noreferrer"}},[t._v("有人想要这样"),s("OutboundLink")],1),t._v(", 但 "),s("strong",[t._v("我不知道是否有人因此(指 "),s("code",[t._v("query")]),t._v(" 也能影响激活状态)收益")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"router-link-exact-active"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#router-link-exact-active"}},[t._v("#")]),t._v(" "),s("code",[t._v("router-link-exact-active")])]),t._v(" "),s("p",[t._v("这个更改也会影响 "),s("em",[t._v("exact active")]),t._v(" 的行为. 从 "),s("em",[t._v("匹配器")]),t._v(" 的角度来看, 只有在当前路由和 link 完全相同时才能使用 "),s("code",[t._v("router-link-exact-active")]),t._v(" 类. 也就是说 "),s("code",[t._v("query")]),t._v(" 和 "),s("code",[t._v("hash")]),t._v(" 不会影响这个行为("),s("em",[t._v("active")]),t._v(" 也是一样).")]),t._v(" "),s("p",[s("em",[t._v("active")]),t._v(" 的这个新行为完全消除了 "),s("em",[t._v("root link")]),t._v(" ("),s("code",[t._v("/")]),t._v(") 上使用 "),s("code",[t._v("exact")]),t._v(" prop 的警告, 并且使得 https://github.com/vuejs/rfcs/pull/36 没有必要, 也不会带来不一致.")]),t._v(" "),s("h3",{attrs:{id:"嵌套路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#嵌套路由"}},[t._v("#")]),t._v(" 嵌套路由")]),t._v(" "),s("p",[t._v("需要注意, 嵌套路由只有在 params 与渲染的路由一致时才会被匹配.")]),t._v(" "),s("p",[t._v("例如, 设置了以下路由:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" routes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/parent/:id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    children"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 空的子路由")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 带 id 的子路由")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'child/:id'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'child-second/:id'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("如果当前路由是 "),s("code",[t._v("/parent/1/child/2")]),t._v(", 以下 link 会表现为:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("url")]),t._v(" "),s("th",[t._v("active")]),t._v(" "),s("th",[t._v("exact active")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("/parent/1/child/2")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[t._v("/parent/1/child/3")]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[t._v("/parent/1/child-second/2")]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[t._v("/parent/1")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[t._v("/parent/2")]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[t._v("/parent/2/child/2")]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[t._v("/parent/2/child-second/2")]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("❌")])])])]),t._v(" "),s("h3",{attrs:{id:"无关但相似的路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无关但相似的路由"}},[t._v("#")]),t._v(" 无关但相似的路由")]),t._v(" "),s("p",[t._v("在路由记录中不相关但有相同路径的路由不再 active.")]),t._v(" "),s("p",[t._v("例如, 设置了以下路由:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" routes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/movies'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/movies/new'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/movies/search'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("如果当前路由是 "),s("code",[t._v("/movies/new")]),t._v(", 以下 link 会表现为:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("url")]),t._v(" "),s("th",[t._v("active")]),t._v(" "),s("th",[t._v("exact active")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("/movies")]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[t._v("/movies/new")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[t._v("/movies/search")]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("❌")])])])]),t._v(" "),s("p",[t._v("注意: "),s("strong",[t._v("这个行为和真实情况不一样")]),t._v(".")]),t._v(" "),s("p",[t._v("需要注意, 有时嵌套仍会受到 "),s("em",[t._v("active")]),t._v(" 的 link 影响:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" routes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/movies'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 我们需要这样渲染子路由 (注意往下看)")]),t._v("\n    component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'RouterView'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    children"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不同的子路由")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'search'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("如果当前路由是 "),s("code",[t._v("/movies/new")]),t._v(", 以下 link 会表现为:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("url")]),t._v(" "),s("th",[t._v("active")]),t._v(" "),s("th",[t._v("exact active")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("/movies")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[t._v("/movies/new")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[t._v("/movies/search")]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("❌")])])])]),t._v(" "),s("p",[t._v("注意: 为了让其更容易使用, 我们可能会允许 "),s("code",[t._v("component")]),t._v(" 缺省, 并在内部默认填入一个渲染 "),s("code",[t._v("RouterView")]),t._v(" 的 component 选项.")]),t._v(" "),s("h3",{attrs:{id:"别名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#别名"}},[t._v("#")]),t._v(" 别名")]),t._v(" "),s("p",[t._v("鉴于别名只是设置了一个不同的 "),s("code",[t._v("path")]),t._v(", 而路由的其他选项都是一样的, 那么当别名的"),s("code",[t._v("path")]),t._v(" 被匹配到时, 别名所在的路由就应该被 active, 这样更符合逻辑, 反之亦然.")]),t._v(" "),s("p",[t._v("例如, 设置了以下路由:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" routes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/movies'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" alias"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/films'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("如果当前路由是 "),s("code",[t._v("/movies")]),t._v(" "),s("strong",[t._v("或")]),t._v(" "),s("code",[t._v("/films")]),t._v(", 以下 link 会表现为:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("url")]),t._v(" "),s("th",[t._v("active")]),t._v(" "),s("th",[t._v("exact active")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("/movies")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[t._v("/films")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")])])])]),t._v(" "),s("h4",{attrs:{id:"嵌套别名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#嵌套别名"}},[t._v("#")]),t._v(" 嵌套别名")]),t._v(" "),s("p",[t._v("处理一个别名路由的嵌套行为也是一样的.")]),t._v(" "),s("p",[t._v("例如, 设置了以下路由:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" routes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/parent/:id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    alias"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/p/:id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    children"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 空的子路由")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 带 id 的子路由")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'child/:id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" alias"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c/:id'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("如果当前路由是 "),s("code",[t._v("/parent/1/child/2")]),t._v(", "),s("code",[t._v("/p/1/child/2")]),t._v(", "),s("code",[t._v("/p/1/c/2")]),t._v(", 或者, "),s("code",[t._v("/parent/1/c/2")]),t._v(" 以下 link 会表现为:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("url")]),t._v(" "),s("th",[t._v("active")]),t._v(" "),s("th",[t._v("exact active")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("/parent/1/child/2")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[t._v("/parent/1/c/2")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[t._v("/p/1/child/2")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[t._v("/p/1/c/2")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[t._v("/p/1/child/3")]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[t._v("/parent/1/child/3")]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[t._v("/parent/1")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[t._v("/p/1")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[t._v("/parent/2")]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[t._v("/p/2")]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("❌")])])])]),t._v(" "),s("h4",{attrs:{id:"绝对地址的嵌套别名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#绝对地址的嵌套别名"}},[t._v("#")]),t._v(" 绝对地址的嵌套别名")]),t._v(" "),s("p",[t._v("嵌套的子路由的 "),s("code",[t._v("path")]),t._v(" 开头带上 "),s("code",[t._v("/")]),t._v(" 就能设置为绝对路径, 在这种情况下, 规则同样适用:")]),t._v(" "),s("p",[t._v("例如, 设置了以下路由:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" routes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/parent/:id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    alias"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/p/:id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'parent'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    children"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 空的子路由")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" alias"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'alias'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/p_:id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'child'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 绝对地址的子路由. 需要加个 `id` 因为父路由上有")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/p_:id/absolute-a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" alias"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'as-absolute-a'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同上, 但别名是绝对地址")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'as-absolute-b'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" alias"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/p_:id/absolute-b'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("如果当前路由是 "),s("code",[t._v("/p_1/absolute-a")]),t._v(", "),s("code",[t._v("/p/1/as-absolute-a")]),t._v(", 或, "),s("code",[t._v("/parent/1/as-absolute-a")]),t._v(", 以下 link 会表现为:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("url")]),t._v(" "),s("th",[t._v("active")]),t._v(" "),s("th",[t._v("exact active")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("/p/1/as-absolute-a")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[t._v("/p_1/absolute-a")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[t._v("/parent/1/absolute-a")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[t._v("/parent/2/absolute-a")]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[t._v("/parent/1/absolute-b")]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[t._v("/p/1/absolute-b")]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[t._v("/p_1/absolute-b")]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[t._v("/parent/1")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[t._v("/p/1")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[t._v("/parent/1/alias")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[t._v("/p/1/alias")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[t._v("/p_1")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[t._v("/parent/2")]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[t._v("/p/2")]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("❌")])])])]),t._v(" "),s("p",[t._v("注意空的 "),s("code",[t._v("path")]),t._v(" 记录是 "),s("em",[t._v("active")]),t._v(" 但不是 "),s("em",[t._v("exact active")]),t._v(" 的, 和其他子路由 "),s("code",[t._v("/p/1/absolute-b")]),t._v(" 不一样. 它的所有别名也都是 "),s("em",[t._v("active")]),t._v(" 的, 因为都是空的 "),s("code",[t._v("path")]),t._v(" 的别名. 反过来说: "),s("code",[t._v("path")]),t._v(" 不为空但某个别名为空, 那它们"),s("strong",[t._v("都不会")]),t._v(" active 因为原始的 "),s("code",[t._v("path")]),t._v(" 优先级高于别名.")]),t._v(" "),s("h4",{attrs:{id:"命名的嵌套路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命名的嵌套路由"}},[t._v("#")]),t._v(" 命名的嵌套路由")]),t._v(" "),s("p",[t._v("如果 url 是通过父路由的 "),s("code",[t._v("name")]),t._v(" 解析的, 比如下面的 "),s("code",[t._v("parent")]),t._v(", "),s("strong",[t._v("它不会包含空的 path 的子路由")]),t._v(". 这很重要因为它们会解析成相同的 url, 不过在 "),s("code",[t._v("router-link")]),t._v(" 的 "),s("code",[t._v("to")]),t._v(" 中, 当处于 "),s("em",[t._v("active")]),t._v(" 和/或 "),s("em",[t._v("exact active")]),t._v(" 状态时, 会产生不同的结果. 这与它们呈现出的差异以及其他 active 行为是一致的.")]),t._v(" "),s("p",[t._v("例如, 用之前上面那个例子, "),s("strong",[t._v("如果当前的 location 指向 "),s("code",[t._v("/parent/1")]),t._v(", 父视图和子视图都在渲染, 就表示我们实际上位于 "),s("code",[t._v("{ name: 'child' }")]),t._v(" 而不是 "),s("code",[t._v("{ name: 'parent' }")])]),t._v(", 会得出一个与之前相似的表, 但多了 "),s("code",[t._v("to")]),t._v(" 的对比:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("code",[t._v("to")]),t._v(" 的值")]),t._v(" "),s("th",[t._v("解析的 url")]),t._v(" "),s("th",[t._v("active")]),t._v(" "),s("th",[t._v("exact active")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("{ name: 'parent', params: { id: '1' } }")])]),t._v(" "),s("td",[s("code",[t._v("/parent/1")]),t._v(" (parent)")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("'/parent/1'")])]),t._v(" "),s("td",[s("code",[t._v("/parent/1")]),t._v(" (child)")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("{ name: 'child', params: { id: '1' } }")])]),t._v(" "),s("td",[s("code",[t._v("/parent/1")]),t._v(" (child)")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("'/p_1'")])]),t._v(" "),s("td",[s("code",[t._v("/p_1")]),t._v(" (child)")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("'/parent/1/alias'")])]),t._v(" "),s("td",[s("code",[t._v("/parent/1/alias")]),t._v(" (child)")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")])])])]),t._v(" "),s("p",[t._v("但是 "),s("strong",[t._v("如果当前 location 指向 "),s("code",[t._v("{ name: 'parent' }")])]),t._v(", 它仍会解析成一样的 url, "),s("code",[t._v("/parent/1")]),t._v(", 但会得出不一样的表:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("code",[t._v("to")]),t._v(" 的值")]),t._v(" "),s("th",[t._v("解析的 url")]),t._v(" "),s("th",[t._v("active")]),t._v(" "),s("th",[t._v("exact active")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("{ name: 'parent', params: { id: '1' } }")])]),t._v(" "),s("td",[s("code",[t._v("/parent/1")]),t._v(" (parent)")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("'/parent/1'")])]),t._v(" "),s("td",[s("code",[t._v("/parent/1")]),t._v(" (child)")]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("{ name: 'child', params: { id: '1' } }")])]),t._v(" "),s("td",[s("code",[t._v("/parent/1")]),t._v(" (child)")]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("'/p_1'")])]),t._v(" "),s("td",[s("code",[t._v("/p_1")]),t._v(" (child)")]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("❌")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("'/parent/1/alias'")])]),t._v(" "),s("td",[s("code",[t._v("/parent/1/alias")]),t._v(" (child)")]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("❌")])])])]),t._v(" "),s("h3",{attrs:{id:"重复的-params"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重复的-params"}},[t._v("#")]),t._v(" 重复的 params")]),t._v(" "),s("p",[t._v("如果像下面这样 params 重复了:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("/articles/:id+")])]),t._v(" "),s("li",[s("code",[t._v("/articles/:id*")])])]),t._v(" "),s("p",[s("strong",[t._v("所有的 params")]),t._v(" 如果都按顺序匹配到了, 那么这个 link 会 "),s("em",[t._v("active")]),t._v(" 且 "),s("em",[t._v("exact active")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"exact-prop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exact-prop"}},[t._v("#")]),t._v(" "),s("code",[t._v("exact")]),t._v(" prop")]),t._v(" "),s("p",[t._v("在进行这些更改之前, "),s("code",[t._v("exact")]),t._v(" 会匹配这个 location. 其主要目的时为了解决 "),s("code",[t._v("/")]),t._v(" 的警告, 但它检查了 "),s("code",[t._v("query")]),t._v(" 和 "),s("code",[t._v("hash")]),t._v(".\n正因如此, 才有了新的 active 行为, "),s("a",{attrs:{href:"https://router.vuejs.org/zh/api/#exact",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("exact")]),t._v(" prop"),s("OutboundLink")],1),t._v(" 的唯一目的就变成了 使 link 在 "),s("code",[t._v("router-link-exact-active")]),t._v(" 出现时也使用 "),s("code",[t._v("router-link-active")]),t._v(". 不过这样做并没有什么用了, 因为我们可以使用 "),s("code",[t._v("router-link-exact-active")]),t._v(" 类直接定位到元素.\n所以, 我认为 "),s("code",[t._v("exact")]),t._v(" prop 可以从 "),s("code",[t._v("router-link")]),t._v(" 中移除. 这也让 https://github.com/vuejs/rfcs/pull/37 过时了, 这个 pr 还为 "),s("code",[t._v("exact")]),t._v(" 引入了类似上方描述的功能.")]),t._v(" "),s("p",[t._v("某些用户可能需要修改一下他们的 CSS 类, 从 "),s("code",[t._v("router-link-exact-active")]),t._v(" 改成 "),s("code",[t._v("router-link-active")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),s("ul",[s("li",[t._v("这个不会向后兼容. 也许会在 Vue Router v3 中加个 "),s("code",[t._v("exact-path")]),t._v(".")]),t._v(" "),s("li",[t._v("使用 "),s("code",[t._v("exact")]),t._v(" prop 的用户需要依赖 "),s("code",[t._v("router-link-exact-active")]),t._v(" 或者使用 "),s("code",[t._v("exact-active-class")]),t._v(" prop.")]),t._v(" "),s("li",[s("code",[t._v("includesQuery")]),t._v(" 函数需要用户自己添加.")])]),t._v(" "),s("h2",{attrs:{id:"备选方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#备选方案"}},[t._v("#")]),t._v(" 备选方案")]),t._v(" "),s("ul",[s("li",[t._v("保留 "),s("code",[t._v("exact")]),t._v(" prop, 当 "),s("code",[t._v("router-link-exact-active")]),t._v(" 出现时, 同时注入 "),s("code",[t._v("router-link-active")]),t._v(".")]),t._v(" "),s("li",[t._v("保留匹配 "),s("code",[t._v("query")]),t._v(" 和 "),s("code",[t._v("hash")]),t._v(" 时 "),s("em",[t._v("active")]),t._v(" 的行为而不是只跟 params 相关.")]),t._v(" "),s("li",[t._v("改变 "),s("em",[t._v("active")]),t._v(" 的行为只匹配路由的 "),s("code",[t._v("path")]),t._v(" 部分(包括 params) 且忽略 "),s("code",[t._v("query")]),t._v(" 和 "),s("code",[t._v("hash")]),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"升级策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#升级策略"}},[t._v("#")]),t._v(" 升级策略")]),t._v(" "),s("ul",[s("li",[t._v("在 v3 中加入 "),s("code",[t._v("exact-path")]),t._v(" 来缓解现存的问题")])])])}),[],!1,null,null,null);a.default=e.exports}}]);