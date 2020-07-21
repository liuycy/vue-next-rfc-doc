(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{359:function(e,v,_){"use strict";_.r(v);var t=_(37),d=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"_24-attribute-的强制行为"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_24-attribute-的强制行为"}},[e._v("#")]),e._v(" 24. attribute 的强制行为")]),e._v(" "),_("blockquote",[_("p",[e._v("原文: "),_("a",{attrs:{href:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0024-attribute-coercion-behavior.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/rfcs/blob/master/active-rfcs/0024-attribute-coercion-behavior.md"),_("OutboundLink")],1)])]),e._v(" "),_("ul",[_("li",[e._v("开始日期: 2020-01-30")]),e._v(" "),_("li",[e._v("目标版本: 3.x")]),e._v(" "),_("li",[e._v("参考 Issues: "),_("a",{attrs:{href:"https://github.com/vuejs/vue/issues/8731",target:"_blank",rel:"noopener noreferrer"}},[e._v("#8731"),_("OutboundLink")],1),e._v(" "),_("a",{attrs:{href:"https://github.com/vuejs/vue/pull/8735",target:"_blank",rel:"noopener noreferrer"}},[e._v("#8735"),_("OutboundLink")],1),e._v(" "),_("a",{attrs:{href:"https://github.com/vuejs/vue/issues/9397",target:"_blank",rel:"noopener noreferrer"}},[e._v("#9397"),_("OutboundLink")],1),e._v(" "),_("a",{attrs:{href:"https://github.com/vuejs/vue/issues/11053",target:"_blank",rel:"noopener noreferrer"}},[e._v("#11053"),_("OutboundLink")],1)]),e._v(" "),_("li",[e._v("实现 PR:")])]),e._v(" "),_("h2",{attrs:{id:"概要"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[e._v("#")]),e._v(" 概要")]),e._v(" "),_("ul",[_("li",[e._v("删除枚举属性的内部概念并将这些属性和非布尔属性同等对待.")]),e._v(" "),_("li",[e._v("如果值为 "),_("code",[e._v("false")]),e._v(" 不再移除属性. 取而代之会设置为 "),_("code",[e._v('attr="false"')]),e._v(". 要移除属性请使用 "),_("code",[e._v("null")]),e._v(" 或 "),_("code",[e._v("undefined")]),e._v(".")])]),e._v(" "),_("h2",{attrs:{id:"动机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#动机"}},[e._v("#")]),e._v(" 动机")]),e._v(" "),_("p",[e._v("在 2.x 版本中, 我们会按照以下策略强制转换 "),_("code",[e._v("v-bind")]),e._v(" 的值:")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("对于某些元素上的属性, Vue 总会使用对应的 IDL (Interface Define Language) 属性: "),_("a",{attrs:{href:"https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L11-L18",target:"_blank",rel:"noopener noreferrer"}},[e._v("例如 "),_("code",[e._v("<input>")]),e._v(", "),_("code",[e._v("<select>")]),e._v(", "),_("code",[e._v("<progress>")]),e._v("之类的 "),_("code",[e._v("value")]),_("OutboundLink")],1),e._v(".")])]),e._v(" "),_("li",[_("p",[e._v('对于 "'),_("a",{attrs:{href:"https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L33-L40",target:"_blank",rel:"noopener noreferrer"}},[e._v("布尔属性"),_("OutboundLink")],1),e._v('" 和 '),_("a",{attrs:{href:"https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L44-L46",target:"_blank",rel:"noopener noreferrer"}},[e._v("xlinks"),_("OutboundLink")],1),e._v(', 如果是"假值"('),_("a",{attrs:{href:"https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L52-L54",target:"_blank",rel:"noopener noreferrer"}},[_("code",[e._v("undefined")]),e._v(", "),_("code",[e._v("null")]),e._v(" 或 "),_("code",[e._v("false")]),_("OutboundLink")],1),e._v(") Vue 会移除这些属性, 相反会添加这些属性 (看 "),_("a",{attrs:{href:"https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/runtime/modules/attrs.js#L66-L77",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),_("OutboundLink")],1),e._v(" 和 "),_("a",{attrs:{href:"https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/runtime/modules/attrs.js#L81-L85",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),_("OutboundLink")],1),e._v(").")])]),e._v(" "),_("li",[_("p",[e._v('对于 "'),_("a",{attrs:{href:"https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L20",target:"_blank",rel:"noopener noreferrer"}},[e._v("枚举属性"),_("OutboundLink")],1),e._v('" (例如 '),_("code",[e._v("contenteditable")]),e._v(", "),_("code",[e._v("draggable")]),e._v(" 和 "),_("code",[e._v("spellcheck")]),e._v("), Vue 会尝试将它们 "),_("a",{attrs:{href:"https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L24-L31",target:"_blank",rel:"noopener noreferrer"}},[e._v("强制转换"),_("OutboundLink")],1),e._v(" 成字符串 ("),_("code",[e._v("contenteditable")]),e._v(" 现在会被特殊处理, 参考 "),_("a",{attrs:{href:"https://github.com/vuejs/vue/issues/9397",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuejs/vue#9397"),_("OutboundLink")],1),e._v(")")])]),e._v(" "),_("li",[_("p",[e._v('对于其他属性, 我们会移除 "假值" ('),_("code",[e._v("undefined")]),e._v(", "),_("code",[e._v("null")]),e._v(", 或 "),_("code",[e._v("false")]),e._v(") 然后按照原样设置它的值 (参考 "),_("a",{attrs:{href:"https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/runtime/modules/attrs.js#L92-L113",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),_("OutboundLink")],1),e._v(").")])])]),e._v(" "),_("p",[e._v('在 2.x 中我们对 "枚举属性" 限定了只能接受 '),_("code",[e._v("'true'")]),e._v(" 或 "),_("code",[e._v("'false'")]),e._v(', 这会导致一些缺陷. 这也导致了其行为跟其他非布尔属性不一样, 造成了一些困惑. 下方表格描述了 Vue 中 "枚举属性" 和 普通布尔属性的区别:')]),e._v(" "),_("table",[_("thead",[_("tr",[_("th",[e._v("绑定表达式")]),e._v(" "),_("th",[_("code",[e._v("foo")]),e._v(" "),_("sup",[e._v("普通属性")])]),e._v(" "),_("th",[_("code",[e._v("draggable")]),e._v(" "),_("sup",[e._v("枚举属性")])])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("code",[e._v(':attr="null"')])]),e._v(" "),_("td",[e._v("/")]),e._v(" "),_("td",[_("code",[e._v('draggable="false"')])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v(':attr="undefined"')])]),e._v(" "),_("td",[e._v("/")]),e._v(" "),_("td",[e._v("/")])]),e._v(" "),_("tr",[_("td",[_("code",[e._v(':attr="true"')])]),e._v(" "),_("td",[_("code",[e._v('foo="true"')])]),e._v(" "),_("td",[_("code",[e._v('draggable="true"')])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v(':attr="false"')])]),e._v(" "),_("td",[e._v("/")]),e._v(" "),_("td",[_("code",[e._v('draggable="false"')])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v(':attr="0"')])]),e._v(" "),_("td",[_("code",[e._v('foo="0"')])]),e._v(" "),_("td",[_("code",[e._v('draggable="true"')])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v('attr=""')])]),e._v(" "),_("td",[_("code",[e._v('foo=""')])]),e._v(" "),_("td",[_("code",[e._v('draggable="true"')])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v('attr="foo"')])]),e._v(" "),_("td",[_("code",[e._v('foo="foo"')])]),e._v(" "),_("td",[_("code",[e._v('draggable="true"')])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("attr")])]),e._v(" "),_("td",[_("code",[e._v('foo=""')])]),e._v(" "),_("td",[_("code",[e._v('draggable="true"')])])])])]),e._v(" "),_("p",[e._v("从上表可以看出, 当前实现是会将 "),_("code",[e._v("true")]),e._v(" 转成 "),_("code",[e._v("'true'")]),e._v(", 但如果值是 "),_("code",[e._v("false")]),e._v(" 会将该属性移除. 这样也导致了前后矛盾并要求用户需要手动地转换布尔值为字符串, 例如在一些常见的情况下像 "),_("code",[e._v("aria-*")]),e._v(" 的属性 "),_("code",[e._v("aria-selected")]),e._v(", "),_("code",[e._v("aria-hidden")]),e._v(", 等等.")]),e._v(" "),_("h2",{attrs:{id:"设计细节"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#设计细节"}},[e._v("#")]),e._v(" 设计细节")]),e._v(" "),_("ul",[_("li",[_("p",[e._v('我们打算删除 "枚举属性" 这个内部概念, 使其能够和非布尔值的 HTML 属性一样.')]),e._v(" "),_("p",[e._v('这样就解决了非布尔值属性和"枚举属性"之间的前后矛盾了. 比如 '),_("code",[e._v("contenteditable")]),e._v(" 就能使用 "),_("code",[e._v("'true'")]),e._v(" and "),_("code",[e._v("'false'")]),e._v(" 之外的其他值了, 甚至可以使用还未纳入标准的关键字.")])]),e._v(" "),_("li",[_("p",[e._v("对于非布尔值属性, 当它们的值为 "),_("code",[e._v("false")]),e._v(" 时, 不再移除该属性, 而是转换成 "),_("code",[e._v("'false'")]),e._v(".")]),e._v(" "),_("p",[e._v("这样就解决了 "),_("code",[e._v("true")]),e._v(" 和 "),_("code",[e._v("false")]),e._v(" 之间的前后矛盾, 而且使得 "),_("code",[e._v("aria-*")]),e._v(" 输出更加容易了.")])])]),e._v(" "),_("p",[e._v("下方表格描述了这种新行为:")]),e._v(" "),_("table",[_("thead",[_("tr",[_("th",[e._v("绑定表达式")]),e._v(" "),_("th",[_("code",[e._v("foo")]),e._v(" "),_("sup",[e._v("普通属性")])]),e._v(" "),_("th",[_("code",[e._v("draggable")]),e._v(" "),_("sup",[e._v("枚举属性")])])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("code",[e._v(':attr="null"')])]),e._v(" "),_("td",[e._v("/")]),e._v(" "),_("td",[e._v("/ "),_("sup",[e._v("†")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v(':attr="undefined"')])]),e._v(" "),_("td",[e._v("/")]),e._v(" "),_("td",[e._v("/")])]),e._v(" "),_("tr",[_("td",[_("code",[e._v(':attr="true"')])]),e._v(" "),_("td",[_("code",[e._v('foo="true"')])]),e._v(" "),_("td",[_("code",[e._v('draggable="true"')])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v(':attr="false"')])]),e._v(" "),_("td",[_("code",[e._v('foo="false"')]),e._v(" "),_("sup",[e._v("†")])]),e._v(" "),_("td",[_("code",[e._v('draggable="false"')])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v(':attr="0"')])]),e._v(" "),_("td",[_("code",[e._v('foo="0"')])]),e._v(" "),_("td",[_("code",[e._v('draggable="0"')]),e._v(" "),_("sup",[e._v("†")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v('attr=""')])]),e._v(" "),_("td",[_("code",[e._v('foo=""')])]),e._v(" "),_("td",[_("code",[e._v('draggable=""')]),e._v(" "),_("sup",[e._v("†")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v('attr="foo"')])]),e._v(" "),_("td",[_("code",[e._v('foo="foo"')])]),e._v(" "),_("td",[_("code",[e._v('draggable="foo"')]),e._v(" "),_("sup",[e._v("†")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("attr")])]),e._v(" "),_("td",[_("code",[e._v('foo=""')])]),e._v(" "),_("td",[_("code",[e._v('draggable=""')]),e._v(" "),_("sup",[e._v("†")])])])])]),e._v(" "),_("p",[_("small",[e._v("†: 表示已变更的")])]),e._v(" "),_("p",[e._v("布尔属性保持不变.")]),e._v(" "),_("h2",{attrs:{id:"缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[e._v("#")]),e._v(" 缺点")]),e._v(" "),_("p",[e._v("该提案引入了以下破坏性更改:")]),e._v(" "),_("ul",[_("li",[_("p",[e._v('对于 "枚举属性":')]),e._v(" "),_("ul",[_("li",[_("code",[e._v("null")]),e._v(" 将会移除该属性而不是转换成 "),_("code",[e._v("'false'")]),e._v(".")]),e._v(" "),_("li",[_("code",[e._v("'true'")]),e._v(" 和 "),_("code",[e._v("'false'")]),e._v(" 之外的 数字 和 字符串 不会再转换成 "),_("code",[e._v("'true'")]),e._v(". (旧行为不再有效.)")])])]),e._v(" "),_("li",[_("p",[e._v("对于所有的非布尔属性, "),_("code",[e._v("false")]),e._v(" 值不会再移除该属性, 而是转换成 "),_("code",[e._v("'false'")]),e._v(".")])])]),e._v(" "),_("p",[e._v("最主要的破坏性更改是用户应该停止使用 "),_("code",[e._v("false")]),e._v(" 值来移除属性, 应该使用 "),_("code",[e._v("null")]),e._v(" 或 "),_("code",[e._v("undefined")]),e._v(". 布尔属性不受影响, 主要影响枚举属性, 其中 "),_("code",[e._v("'false'")]),e._v(" 值和缺省值会导致不同的元素状态. 例如 "),_("code",[e._v("aria-checked")]),e._v(". 这也可能会影响到 类似 "),_("code",[e._v("[foo]")]),e._v(" 这样的 CSS 选择器.")]),e._v(" "),_("h2",{attrs:{id:"备选方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#备选方案"}},[e._v("#")]),e._v(" 备选方案")]),e._v(" "),_("p",[e._v("N/A")]),e._v(" "),_("h2",{attrs:{id:"升级策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#升级策略"}},[e._v("#")]),e._v(" 升级策略")]),e._v(" "),_("p",[e._v("这次不太可能提供 codemod 脚本了. 我们会在迁移指南中提供详细的信息并且在 3.x 的文档中加入 强制转换行为 的内容.")]),e._v(" "),_("h3",{attrs:{id:"枚举属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#枚举属性"}},[e._v("#")]),e._v(" 枚举属性")]),e._v(" "),_("p",[e._v("枚举属性的缺省值 和 "),_("code",[e._v('attr="false"')]),e._v(" 会生成不同的 IDL 属性值 (将反映实际状态), 如下方所示:")]),e._v(" "),_("table",[_("thead",[_("tr",[_("th",[e._v("枚举属性缺省值")]),e._v(" "),_("th",[e._v("IDL 属性 & 值")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("code",[e._v("contenteditable")])]),e._v(" "),_("td",[_("code",[e._v("contentEditable")]),e._v(" → "),_("code",[e._v("'inherit'")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("draggable")])]),e._v(" "),_("td",[_("code",[e._v("draggable")]),e._v(" → "),_("code",[e._v("false")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("spellcheck")])]),e._v(" "),_("td",[_("code",[e._v("spellcheck")]),e._v(" → "),_("code",[e._v("true")])])])])]),e._v(" "),_("p",[e._v("想要让旧行为有效, 但因为我们将 "),_("code",[e._v("false")]),e._v(" 转换成 "),_("code",[e._v("'false'")]),e._v(" 了, 在 3.x Vue 的开发者需要让 "),_("code",[e._v("v-bind")]),e._v(" 表达式能够解析 "),_("code",[e._v("contenteditable")]),e._v(" 和 "),_("code",[e._v("spellcheck")]),e._v(" 的  "),_("code",[e._v("false")]),e._v(" 或 "),_("code",[e._v("'false'")]),e._v(".")]),e._v(" "),_("p",[e._v("在 2.x 中, 枚举属性的无效值会被转换成 "),_("code",[e._v("'true'")]),e._v(". 这一般是意料之外的, 不太可能会被大规模使用. 在 3.x 中, 应明确指定 "),_("code",[e._v("true")]),e._v(" 或 "),_("code",[e._v("'true'")]),e._v(".")]),e._v(" "),_("h3",{attrs:{id:"将-false-转换为-false-不再移除属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#将-false-转换为-false-不再移除属性"}},[e._v("#")]),e._v(" 将 "),_("code",[e._v("false")]),e._v(" 转换为 "),_("code",[e._v("'false'")]),e._v(" 不再移除属性")]),e._v(" "),_("p",[e._v("在 3.x 中, 想要移除属性应该明确指定 "),_("code",[e._v("null")]),e._v(" 或 "),_("code",[e._v("undefined")]),e._v(".")]),e._v(" "),_("h3",{attrs:{id:"_2-x-3-x-之间行为对比"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-x-3-x-之间行为对比"}},[e._v("#")]),e._v(" 2.x & 3.x 之间行为对比")]),e._v(" "),_("table",[_("thead",[_("tr",[_("th",[e._v("属性")]),e._v(" "),_("th",[_("code",[e._v("v-bind")]),e._v(" 的值 "),_("sup",[e._v("2.x")])]),e._v(" "),_("th",[_("code",[e._v("v-bind")]),e._v(" 的值 "),_("sup",[e._v("3.x")])]),e._v(" "),_("th",[e._v("HTML 输出")])])]),e._v(" "),_("tbody",[_("tr",[_("td",{attrs:{rowspan:"3"}},[e._v('2.x "枚举属性"'),_("br"),_("small",[e._v("例如 "),_("code",[e._v("contenteditable")]),e._v(", "),_("code",[e._v("draggable")]),e._v(" 和 "),_("code",[e._v("spellcheck")]),e._v(".")])]),e._v(" "),_("td",[_("code",[e._v("undefined")]),e._v(", "),_("code",[e._v("false")])]),e._v(" "),_("td",[_("code",[e._v("undefined")]),e._v(", "),_("code",[e._v("null")])]),e._v(" "),_("td",[_("i",[e._v("移除")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("true")]),e._v(", "),_("code",[e._v("'true'")]),e._v(", "),_("code",[e._v("''")]),e._v(", "),_("code",[e._v("1")]),e._v(",\n        "),_("code",[e._v("'foo'")])]),e._v(" "),_("td",[_("code",[e._v("true")]),e._v(", "),_("code",[e._v("'true'")])]),e._v(" "),_("td",[_("code",[e._v('"true"')])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("null")]),e._v(", "),_("code",[e._v("'false'")])]),e._v(" "),_("td",[_("code",[e._v("false")]),e._v(", "),_("code",[e._v("'false'")])]),e._v(" "),_("td",[_("code",[e._v('"false"')])])]),e._v(" "),_("tr",[_("td",{attrs:{rowspan:"2"}},[e._v("其他非布尔属性"),_("br"),_("small",[e._v("例如 "),_("code",[e._v("aria-checked")]),e._v(", "),_("code",[e._v("tabindex")]),e._v(", "),_("code",[e._v("alt")]),e._v(", 等")])]),e._v(" "),_("td",[_("code",[e._v("undefined")]),e._v(", "),_("code",[e._v("null")]),e._v(", "),_("code",[e._v("false")])]),e._v(" "),_("td",[_("code",[e._v("undefined")]),e._v(", "),_("code",[e._v("null")])]),e._v(" "),_("td",[_("i",[e._v("移除")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("'false'")])]),e._v(" "),_("td",[_("code",[e._v("false")]),e._v(", "),_("code",[e._v("'false'")])]),e._v(" "),_("td",[_("code",[e._v('"false"')])])])])]),e._v(" "),_("h2",{attrs:{id:"未解决问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#未解决问题"}},[e._v("#")]),e._v(" 未解决问题")]),e._v(" "),_("p",[e._v("N/A")])])}),[],!1,null,null,null);v.default=d.exports}}]);