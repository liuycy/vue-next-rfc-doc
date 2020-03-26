(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{262:function(t,s,a){"use strict";a.r(s);var n=a(32),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_4-全局-api-treeshaking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-全局-api-treeshaking"}},[t._v("#")]),t._v(" 4. 全局 API treeshaking")]),t._v(" "),a("blockquote",[a("p",[t._v("原文: "),a("a",{attrs:{href:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0004-global-api-treeshaking.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/vuejs/rfcs/blob/master/active-rfcs/0004-global-api-treeshaking.md"),a("OutboundLink")],1)])]),t._v(" "),a("ul",[a("li",[t._v("开始日期: 2019-03-01")]),t._v(" "),a("li",[t._v("目标版本: 3.x")]),t._v(" "),a("li",[t._v("参考 Issues: N/A")]),t._v(" "),a("li",[t._v("实现 PR: N/A")])]),t._v(" "),a("h2",{attrs:{id:"概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),a("p",[t._v("尽量使用命名导出 API 使得 Vue 的运行时代码 tree-shakable.")]),t._v(" "),a("h2",{attrs:{id:"基本用例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用例"}},[t._v("#")]),t._v(" 基本用例")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" nextTick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" observable "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"动机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动机"}},[t._v("#")]),t._v(" 动机")]),t._v(" "),a("p",[t._v("随着 Vue API 不断增加, 我们一直在拿捏功能特性和包的大小之间的平衡. 我们希望将 Vue 的体积压到最小, 但不想因为尺寸限制它的功能.")]),t._v(" "),a("p",[t._v("通过 ES 模块的静态解析, 以及现代打包工具的压缩功能, 我们现在可以消除那些没有用到的导出模块. 利用这点我们可以重组全局 API 和 内部 API, 用户只需为真正用到的功能买单.")]),t._v(" "),a("p",[t._v("在知道可选功能(用户没有用到的)不会增加包的大小之后, 我们现在有更多空间在核心包中包含可选功能.")]),t._v(" "),a("h2",{attrs:{id:"设计细节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计细节"}},[t._v("#")]),t._v(" 设计细节")]),t._v(" "),a("p",[t._v("目前在 2.x 版本中, 所有的全局 API 都是挂在单个 Vue 对象上.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("在 3.0 版本中, 它们只能通过命名导入使用了:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" nextTick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" observable "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nextTick "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("不把 API 全部挂在 "),a("code",[t._v("Vue")]),t._v(" 上导出, 任何没有用到的 API 会通过 "),a("code",[t._v("支持 tree-shaking 的打包工具")]),t._v(" 移除掉.")]),t._v(" "),a("h2",{attrs:{id:"受影响的-2-x-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#受影响的-2-x-api"}},[t._v("#")]),t._v(" 受影响的 2.x API")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Vue.nextTick")])]),t._v(" "),a("li",[a("code",[t._v("Vue.observable")])]),t._v(" "),a("li",[a("code",[t._v("Vue.version")])]),t._v(" "),a("li",[a("code",[t._v("Vue.compile (仅在完整版本中)")])]),t._v(" "),a("li",[a("code",[t._v("Vue.set (仅在兼容版本中)")])]),t._v(" "),a("li",[a("code",[t._v("Vue.delete (仅在兼容版本中)")])])]),t._v(" "),a("h2",{attrs:{id:"内部-helpers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内部-helpers"}},[t._v("#")]),t._v(" 内部 helpers")]),t._v(" "),a("p",[t._v("除了公共 API, 许多内部的 组件 / helpers 也可以通过命名导出. 这样编译器就可以只导出那些用到了的导入功能.\n例如下面这个 template :")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-show")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ok"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hello"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("可以编译成以下内容(伪代码)")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Transition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" applyDirectives"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vShow "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Transition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("applyDirectives")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("vShow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ok"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这意味着"),a("code",[t._v("Transition")]),t._v("组件只有在程序真正用到它时才会被导入.")]),t._v(" "),a("p",[a("strong",[t._v("注意, 以上仅作用于支持 tree-shaking 的打包工具使用 ES 模块打包的情况 - 使用 UMD 模块仍会包含所有的功能并挂在 Vue 上 (而且编译器会自动调整输出代码)")])]),t._v(" "),a("h2",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),a("p",[t._v("用户不能再使用 Vue 上的全局 API 了, 需要手动导入 API. 但为了将生产包压到最小, 这些都是值得的.")]),t._v(" "),a("h2",{attrs:{id:"在插件中使用全局-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在插件中使用全局-api"}},[t._v("#")]),t._v(" 在插件中使用全局 API")]),t._v(" "),a("p",[t._v("有些插件用到了原本挂在 "),a("code",[t._v("Vue")]),t._v(" 上的全局 API:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" plugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("install")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Vue")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在 3.0 中, 需要改成导入具体 API 的方式:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" nextTick "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" plugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("install")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("app")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这会造成一些开销, 因为库作者需要构建时正确处理 Vue 的外部化:")]),t._v(" "),a("ul",[a("li",[t._v("Vue 不应该打包进库中")]),t._v(" "),a("li",[t._v("对于 ES 模块 版本, 应该放开导入并交由用户来处理最终打包")]),t._v(" "),a("li",[t._v("对于 UMD / 浏览器 版本, 应该先尝试全局的 "),a("code",[t._v("Vue.h")]),t._v(" 并回退到调用 "),a("code",[t._v("require")])])]),t._v(" "),a("p",[t._v("这是 React 库的常见做法, 可以在 webpack 和 Rollup 中使用. 大多数 Vue 库也是这样. 我们只需要提供正确的文档和工具支持.")]),t._v(" "),a("h2",{attrs:{id:"备选方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备选方案"}},[t._v("#")]),t._v(" 备选方案")]),t._v(" "),a("p",[t._v("N/A")]),t._v(" "),a("h2",{attrs:{id:"升级策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级策略"}},[t._v("#")]),t._v(" 升级策略")]),t._v(" "),a("p",[t._v("应该可以提供一份 codemod 脚本 作为迁移工具的一部分")])])}),[],!1,null,null,null);s.default=e.exports}}]);