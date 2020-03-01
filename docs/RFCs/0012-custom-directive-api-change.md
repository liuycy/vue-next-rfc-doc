# 自定义指令 API 更改

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0012-custom-directive-api-change.md>

- 开始日期: 2019-04-09
- 目标版本: 3.x
- 参考 Issues: N/A
- 实现 PR: N/A

## 概要

- 重新设计自定义指令 API 以便更好地结合组件生命周期
- 自定义指令的用法同样遵循[Attribute Fallthrough Behavior RFC](https://github.com/vuejs/rfcs/pull/26)讨论出的规则, 子组件可以通过`v-bind="$attrs"`控制.

## 基本用例

### 以前

``` js
const MyDirective = {
  bind(el, binding, vnode, prevVnode) {},
  inserted() {},
  update() {},
  componentUpdated() {},
  unbind() {}
}
```

### 以后

``` js
const MyDirective = {
  beforeMount(el, binding, vnode, prevVnode) {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {}, // new
  unmounted() {}
}
```

## 动机

让自定义指令的钩子函数名跟组件生命周期保持一致

## 设计细节

### 钩子函数重命名

经过一些时间调整, 现有的钩子函数照着组件生命周期重命名. 传入钩子函数的参数保持不变.

- `bind` -> `beforeMount`
- `inserted` -> `mounted`
- `beforeUpdate` *新的, 会在元素本身更新之前调用*
- ~~`update`~~ *移除, 请使用 `updated`*
- `componentUpdated` -> `updated`
- `beforeUnmount` *新的*
- `unbind` -> `unmounted`

### 在组件上使用

在 3.0 支持 fragments 之后, 组件可能不再只有一个根节点了. 当一个自定义指令使用在多个根节点上就会造成一个问题.

为了解释 3.0 组件上的自定义指令是如何工作的, 我们需要明白自定义指令会编译成什么. 像下面这样的指令: 

``` vue
<div v-foo="bar"></div>
```

大概会编译成这样: 

``` js
const vFoo = resolveDirective('foo')

return withDirectives(h('div'), [
  [vFoo, bar]
])
```

其中 `vFoo` 就是用户所写的指令对象, 里面包含了像 `mounted` 和 `updated` 这样的钩子函数. 

`withDirectives` 会返回一个克隆的 VNode, 这个 VNode 包装了用户的钩子函数并作为生命周期注入. (更多细节请查看[render 函数 API 更改](/RFCs/0008-render-function-api-change.html#特别-保留-的-props)): 

``` js
{
  onVnodeMounted(vnode) {
    // 调用 vFoo.mounted(...)
  }
}
```

**从结果来看, 自定义指令完全包含在 VNode 的 data 里了. 当自定义指令被用在组件上, `onVnodeXXX` 这些钩子会作为额外 props 向下传递并最终传到 `this.$attrs`.**

这也意味着, 可以像下面这样直接在模板上调用组件的生命周期钩子函数, 当自定义组件牵扯过多时这样非常有用: 

``` vue
<div @vnodeMounted="myHook" />
```

这样跟[vuejs/rfcs#26](https://github.com/vuejs/rfcs/pull/26)讨论的 attribute "回退"(fallthrough)行为一致. 因此自定义指令和其他属性的规则是一样的: 由子组件决定用在哪里以及是否使用. 当子组件在内部元素上使用 `v-bind="$attrs"` 时, 所有的自定义指令也会被使用.

## 缺点

N/A

## 备选方案

N/A

## 升级策略

- 写个兼容版本应该很容易解决重命名的问题
- codemod 脚本 应该也很简单
- 对于在组件上使用指令, 可以像[Attribute Fallthrough Behavior](https://github.com/vuejs/rfcs/pull/26)讨论的那样抛出一个"unused $attrs"的警告

## 未解决的问题

N/A
