# v-model API 更改

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0011-v-model-api-change.md>

- 开始日期: 2019-04-09
- 目标版本: 3.x
- 参考 Issues: vuejs/rfcs#8
- 实现 PR: N/A

## 概要

调整组件的 `v-model` API, 基于 [使用 `v-model` 取代 `v-bind` 的 `.sync` 修饰符](/RFCs/0005-replace-v-bind-sync-with-v-model-argument.html).

## 基本用例

## 动机

以前, 组件上的 `v-model="foo"` 大概会编译成以下内容: 

``` js
h(Comp, {
  value: foo,
  onInput: value => {
    foo = value
  }
})
```

然而, 这样组件需要让 这个`value` 一直绑定到 `v-model`, 可是组件也许需要这个 `value` 用于其他用途. 

在 2.2 版本, 我们引入了组件选项 `model`, 可以在组件内配置 `v-model` 使用的 prop 和 event, 但一个组件还是只能使用一个 `v-model`. 
实际上我们需要在组件上同步多个这样的值, 这些值就只能使用 `v-bind.sync` 了. 我们注意到 `v-model` 和 `v-bind.sync` 从根本上是一样的, 所以可以合并成一个指令, 就像[使用 `v-model` 取代 `v-bind` 的 `.sync` 修饰符](/RFCs/0005-replace-v-bind-sync-with-v-model-argument.html)提到的那样.

## 设计细节

在 3.0 中, `model` 选项将被移除. 不带参数的 `v-model="foo"` 会被编译成以下内容: 

``` js
h(Comp, {
  modelValue: foo,
  'onUpdate:modelValue': value => (foo = value)
})
```

如果组件要使用 不带参数的 `v-model`, 组件内需要定义一个叫 `modelValue` 的 prop. 并在子组件应该通过触发 `"update:modelValue"` 事件来同步它的值 (更多细节请查看[render 函数 API 更改](/RFCs/0008-render-function-api-change.html)中关于 VNode Props 结构更改的部分)

编译输入默认会给 `prop` 和 `event` 带上 `model` 前缀来避免和普通的 prop 冲突

之前 RFC 提到 `v-model` 可以携带参数, 参数可以表示 `v-model` 要绑定的 prop, `v-model:value="foo"` 会被编译成: 

``` js
h(Comp, {
  value: foo,
  'onUpdate:value': value => (foo = value)
})
```

这种情况下, 子组件需要传入一个 prop `value` 并 触发 `update:value` 来同步数据.

注意, 现在在组件中不需要额外的选项就可以在同一个组件绑定多个 `v-model` 了, 每一个都同步不同的值: 

``` vue
<InviteeForm
  v-model:name="inviteeName"
  v-model:email="inviteeEmail"
/>
```

### 处理修饰符

在 2.x 中, 我们支持 `v-model` 使用像 `.trim` 这样的修饰符. 但如果组件支持自定义修饰符就更好用了. 在 v3 中, `v-model` 支持使用 `modelModifiers` 自定义修饰符: 

``` vue
<Comp v-model.foo.bar="text" />
```

会被编译成: 

``` js
h(Comp, {
  modelValue: text,
  'onUpdate:modelValue': value => (text = value),
  modelModifiers: {
    foo: true,
    bar: true
  }
})
```

对于带参数的 `v-model`, 会生成 `arg + "Modifiers"` 这样的 prop 名称: 

``` vue
<Comp
   v-model:foo.trim="text"
   v-model:bar.number="number" />
```

会被编译成: 

``` js
h(Comp, {
  foo: text,
  'onUpdate:foo': value => (text = value),
  fooModifiers: { trim: true },
  bar: number,
  'onUpdate:bar': value => (bar = value),
  barModifiers: { number: true },
})
```

### 在原生元素上使用

在 2.x 中, `v-model` 在不同的原生元素上会生成不同的代码. 例如:  `<input type="text">` 和 `<input type="checkbox">` 会生成不同的 prop/event 组合. 这种策略并不能很好的处理动态元素和输入类型: 

``` vue
<input :type="dynamicType" v-model="foo">
```

编译器无法推测正确的 prop/event 组合, 所以不得不生成[非常冗长的代码](https://template-explorer.vuejs.org/#%3Cinput%20%3Atype%3D%22foo%22%20v-model%3D%22bar%22%3E)来覆盖所以可能情况.

在 3.0 原生元素上的 `v-model` 会生成跟组件上使用时一模一样的代码, 例如 `<input v-model="foo">` 会编译成: 

``` js
h('input', {
  modelValue: foo,
  'onUpdate:modelValue': value => {
    foo = value
  }
})
```

web 平台的负责 patch 元素属性的模块会正确处理调用逻辑. 这样可以减少编译器的冗余代码.

## 缺点

TODO 

> 译注: 原文就是 TODO, 应该是没更新吧

## 备选方案

没有

## 升级策略

TODO

## 未解决的问题

### 在自定义元素上的用法

参考: [vuejs/vue#7830](https://github.com/vuejs/vue/issues/7830)

在 2.x `v-model` 很难应用于原生的自定义元素上, 因为编译器无法判断组件中原生的自定义元素(`Vue.config.ignoredElements`只在运行时有效 runtime-only). 自定义元素上的 `v-model`: 

``` vue
<custom-input v-model="foo"></custom-input>
```

用 2.x 编译器会生成[Vue 组件的代码](https://template-explorer.vuejs.org/#%3Ccustom-input%20v-model%3D%22foo%22%3E%3C%2Fcustom-input%3E), 而不是原生那种 `value/input`

在 3.0 编译器会为 Vue 组件和 自定义元素 准确地生成相同的代码, 而且自定义可以被准确地识别处理. 

剩下的问题就是有些第三方自定义元素可能带有未知的 prop/event 组合, 而且也不一定会遵循 Vue 同步事件的命名规范. 例如, 一个自定义元素想要像 checkbox 那样运行, Vue 无法得知要绑定什么属性和要监听什么事件. 一种可行的方案是使用 `type` 属性标记一下作为提示: 

``` vue
<custom-input v-model="foo" type="checkbox"></custom-input>
```

这样就可以告诉 Vue 需要使用 `<input type="checkbox">` 一样的逻辑, `checked` 作为属性, `change` 作为事件

如果自定义属性没有标记任何已知的 input type, 最好使用 `v-bind` 和 `v-on` 显示绑定. 
