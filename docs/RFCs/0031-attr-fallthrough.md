# 31. attr 回退处理

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0031-attr-fallthrough.md>

- 开始日期: 2019-11-05
- 目标版本: 3.x
- 参考 Issues: N/A
- 实现 PR: N/A

## 概要

- 在组件上使用 `v-on` 监听器会自动处理回退并在组件根元素上注册原生事件. 不再需要 `.native` 修饰符了.

- `inheritAttrs: false` 现在可以影响 `class` 和 `style`.

- `this.$attrs` 现在包括了除显式声明的 props 外的所有东西, 包括 `class`, `style`, 和 `v-on` 监听器. `this.$listeners` 被移除了.

- 函数式组件的 attribute 回退行为调整:
  - 如果显式定义了 `props`: 会像状态组件那样处理所有的回退行为.
  - 如果没有显式定义 `props`: 只会处理 `class`, `style` 和 `v-on` 监听器的回退行为.

## 动机

在 Vue 2.x 中, 组件会隐式地处理回退行为. 传给组件的任何 attribute 如果没有定义为 props 的话, 会被认为是 **无关 attribute**. 例如:

``` html
<MyComp id="foo"/>
```

如果 `MyComp` 没有将 `id` 定义为 prop , 那么 `id` 会被认为是一个无关 attribute 并且会隐式应用于 `MyComp` 的根元素上.

(通过传递 `class` 和 `style`)在调整父子组件间的布局样式时该行为十分一致, 或者在给子组件应用 a11y attributes 时.

用户想要显式控制 attributes 在哪应用时, 该行为可以通过 `inheritAttrs: false` 禁用. 这些无关 attributes 会暴露在实例属性: `this.$attrs` 中.

在 2.x 中存在许多不一致的问题:

- `inheritAttrs: false` 不能影响 `class` 和 `style`.

- 隐式回退不能作用于事件监听器, 如果用户想要给根元素添加一个原生事件监听时需要加上 `.native` 修饰符.

- `class`, `style` 和 `v-on` 监听器没有包括在 `$attrs` 中, 使得高级组件 (HOC) 在将所有东西往下传给嵌套的子组件时很麻烦.

- 函数式组件没有隐式 attrs 回退行为.

在 3.x 中, 我们也引入了 Fragments (在组件 template 中支持多个根节点), 所以需要对该行为进行额外的考虑.

## 设计细节

### `v-on` 监听器回退

如下用法:

```html
<MyButton @click="hello" />
```

- 在 v2 中, `@click` 只会注册组件的自定义事件监听. 要想监听 `MyButton` 的原生事件, 需要使用 `@click.native`.

- 在 v3 中, `@click` 监听器会回退并在 `MyButton` 的根节点上注册一个原生的 click 事件监听. 也就是说组件作者不用再为了支持不带 `.native` 修饰符 `v-on` 用法, 将原生 DOM 事件代理到自定义事件了. 实际上, `.native` 修饰符将会被完全移除.

#### 避免不必要的原生监听

当组件作者打算只触发组件自定义事件时, v3 的回退行为也许会造成不必要的原生事件被注册.

对着 VNode 结构的扁平化和 `.native` 修饰符的移除, 所有监听器都会通过 `onXXX` 函数传递给子组件:

``` html
<foo @click="foo" @custom="bar" />
```

compiles to:

``` js
h(foo, {
  onClick: foo,
  onCustom: bar
})
```

如果发生回退, 所有的父级监听器会作为原生 DOM 监听器应用于目标元素. 在上例中, 由 `this.$emit('click')` 触发的原生 click 事件和自定义事件都会调用父级的 `foo` 处理函数. 这也许不是想要的行为.

[#16](https://github.com/vuejs/rfcs/pull/16) 提出了引入 `emits` 选项, 这个选项可以提供一种显式定义组件自定义事件的方法, 这样事件的监听器就会被排除在回退行为外了 (并且可以用 `this.$attrs` 手动控制). 这两个 RFC 应该同时考虑.

### 显式控制回退行为

#### `inheritAttrs: false`

使用 `inheritAttrs: false`, 可以禁用隐式的回退行为. 组件可以选择忽略所有无关 attrs, 也可以通过 `v-bind="$attrs"` 显式控制这些 attrs 应该用在哪里:

``` html
<div class="wrapper">
  <!-- 在一个内部元素上应用 attrs, 而不是在根节点上 -->
  <input v-bind="$attrs">
</div>
```

`this.$attrs` (和 `setup()` 中的 `context.attrs` 以及 函数式组件) 现在包含了所有传递给组件的 attributes (只要没在 props 中定义的). 还包含了 `class`, `style`, 普通 attributes 和 `v-on` 监听器. 这些都是基于[render 函数 API 更改](./0008-render-function-api-change.md#扁平的-vnodes-props-格式)中的扁平结构的 props 提出的.

`v-on` 监听器会作为 `onXXX` 属性被包含在 `$attrs`. For example, `@click` 在 `$attrs` 中生成一个 `onClick`. 如果用户想要分开处理 attributes 和 监听器, 可以简单地写个 helper 函数判断是否以 `on` 开头来区分属性.

#### 多个根节点 / Fragment 组件

在 Vue 3 中, 组件可以由多个根元素组成 (例如. fragment root). 在这种情况下, 自动合并不会被执行. 用户需要自行将 attrs 扩展到所需的元素:

``` html
<template>
  <span>hello</span>
  <div v-bind="$attrs">main element</div>
</template>
```

如果 `$attrs` 不是空的, 用户也没有自行拓展 (这个可以在渲染时检查 `this.$attrs` 有没有被访问判断出来的), 那么就会抛出一个运行时警告. 组件要么将 `$attrs` 绑定到一个元素上, 要么通过使用 `inheritAttrs: false` 明确处理警告.

#### 在 Render 函数中

在手写的 render 函数中, 只需要使用拓展符十分方便:

``` js
export default {
  props: { /* ... */ },
  inheritAttrs: false,
  render() {
    return h('div', { class: 'foo', ...this.$attrs })
  }
}
```

不过这样会造成 attrs 覆盖那些同名的 props. 例如, 有个 `class` 可能会被覆盖, 但我们只是想合并而已. Vue 提供了一个 `mergeProps` helper 函数来处理 `class`, `style` 和 `onXXX` 监听器的合并:

``` js
import { mergeProps } from 'vue'
export default {
  props: { /* ... */ },
  inheritAttrs: false,
  render() {
    return h('div', mergeProps({ class: 'foo' }, this.$attrs))
  }
}
```

其实这也是 `v-bind` 的内部实现.

如果是从 `setup` 返回的 render 函数, attrs 对象会被暴露在 setup 的上下文中:

``` js
import { mergeProps } from 'vue'
export default {
  props: { /* ... */ },
  inheritAttrs: false,
  setup(props, { attrs }) {
    return () => {
      return h('div', mergeProps({ class: 'foo' }, attrs))
    }
  }
}
```

注意 `attrs` 对象会在每次渲染之前更新, 所以可以在这里解构它.

### 函数式组件

在 2.x 中, 函数式组件不支持 attribute 的自动回退, 而且需要手动合并 props.

在 v3 中, 函数式组件使用不同的语法: 现在以普通函数定义函数式组件了 (详见[render 函数 API 更改](./0008-render-function-api-change.md#函数组件签名)).

#### 显式定义 Props

显式定义了 `props` 的函数式组件会和状态组件一样自动处理回退行为. 也可以使用 `inheritAttrs: false` 手动控制 attrs:

``` js
const Func = (props, { attrs }) => {
  return h('div', mergeProps({ class: 'foo' }, attrs), 'hello')
}
Func.props = { /*...*/ }
Func.inheritAttrs = false
```

#### 可选定义 Props

v3 的函数式组件支持 [可选的 Props 定义](#TODO). 当一个函数式组件没有定义 `props` 时, 它会接收父级传过来的所有 attributes 并合进 `props`:

``` js
const Foo = props => h('div', { class: 'foo' }, props.msg)
```

当一个函数式组件使用可选的 props 定义时, 只有 `class`, `style`, 和 `v-on` 监听器会隐式回退.

只有 `class`, `style` 和 `v-on` 监听器除外的原因是:

- 它们涵盖了回退行为的大多数情况.
- 它们几乎没有与 props 重名的风险.
- 它们需要特殊的合并逻辑而非简单覆盖, 所以隐式处理会更方便.

如果一个使用可选 props 定义的函数式组件需要支持完整的 attribute 回退行为, 可以使用 `inheritAttrs: false`, 从 `props` 中选择那些想要使用的 attrs, 然后合并到根元素上:

``` js
// 解构 props, 并使用拓展符号将其余属性合并为 attrs.
const Func = ({ msg, ...attrs }) => {
  return h('div', mergeProps({ class: 'foo' }, attrs), msg)
}
Func.inheritAttrs = false
```

### 废弃的 API

- v-on 上的 `.native` 修饰符会被移除.
- `this.$listeners` 会被移除.

## 升级策略

- 移除的 API 可以在兼容版本中使用:
  - `.native` 修饰符会是一个空操作 (no-op) 并在模板编译时抛出一个警告.
  - `this.$listeners` 可以使用但会抛出一个运行时警告.

- 从技术上讲可能有这种情况, 用户使用 `inheritAttrs: false` 就是为了不影响 `class` 和 `style`, 不过应该是少数的. 我们会在迁移指南/帮助中设置专门的一块来提醒用户检查是否由这种情况.

- 由于函数式组件使用了新语法, 用户可能需要手动更新. 我们应该会在迁移指南中为函数式组件设置一个专门的章节.