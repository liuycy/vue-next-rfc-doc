# 7. 函数式组件和异步组件 API 更改

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0007-functional-async-api-change.md>

- 开始日期: 2019-04-08
- 目标版本: 3.x
- 参考 Issues: N/A
- 实现 PR: N/A

## 概要

- 函数式组件必须以函数的形式编写
  - `{ functional: true }` 选项移除
  - `<template functional>` 不再支持
- 异步组件现在必须通过专用的 API 方法创建

## 基本用例

``` js
import { h } from 'vue'

const FunctionalComp = props => {
  return h('div', `Hello! ${props.name}`)
}
```

``` js
import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent(() => import('./Foo.vue'))
```

## 动机

### 简化函数式组件

在 2.x 中必须用以下格式创建函数式组件: 

``` js
const FunctionalComp = {
  functional: true,
  render(h) {
    return h('div', `Hello! ${props.name}`)
  }
}
```

但这有以下几个问题: 

- 即使组件只需要 render 函数, 也要写上 `functional: true`.
- 有些选项支持(如: `props` and `inject`), 但有些不支持(如: `components`). 但用户通常以为支持所有选项, 因为看起来跟正常有状态的组件很相似(特别是在单文件组件中和 `<template functional>` 一起用时).

另外我们也注意到, 有些用户仅出于性能原因使用函数式组件, 并要求我们在函数式组件中支持更多的有状态组件的选项, 但我们认为不应在这上面投入更多时间. 

在 v3 中, 有状态组件和函数式组件性能差异大大减少了, 甚至在大多数情况下几乎没有差异. 
因此, 不再需要为了性能而使用函数式组件了, 也就没有理由再支持 `<template functional>` 了, 毕竟维护成本摆在那呢. 
v3 的函数式组件应该侧重于简化而不是性能. 

## 设计细节

在 3.x 中, 我们打算让函数式组件**只能**支持纯函数的写法: 

``` js
import { h } from 'vue'

const FunctionalComp = (props, { slots, attrs, emit }) => {
  return h('div', `Hello! ${props.name}`)
}
```

- 移除 `functional` 选项, 不再支持 `{ functional: true }` 对象格式.
- 单文件组件不再支持 `<template functional>` - 如果你需要函数外的其他功能就用普通组件.
- 函数签名也改了:
  
  - `h` 现在需要全局引入了.
  - 该函数接收两个参数: `props` 和一个包含 `slots`, `attrs` 和 `emit` 的上下文对象. 它们等价于有状态组件上的对应的带`$`前缀的方法. 

### 和旧语法相比

新的函数入参可以完全替代 [2.x 函数式组件的 context](https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6):

- `props` 和 `slots` 有对应的值
- 不再需要 `data` 和 `children` (可以用 `props` 和 `slots`)
- `listeners` 会被包含在 `attrs`
- `injections` 可以被新的 `inject` API 取代 (详见 [Composition API](../API.md#provide-inject)):

  ``` js
  import { inject } from 'vue'
  import { themeSymbol } from './ThemeProvider'
  const FunctionalComp = props => {
    const theme = inject(themeSymbol)
    return h('div', `Using theme ${theme}`)
  }
  ```

- `parent` 不再能访问, 这只是一些内部用例的应急用法, 用户代码应该使用 props 和 injections

### 可选定义 Props 

为了满足简单使用, 3.x 函数式组件不再强求定义 `props`:

```js
const Foo = props => h('div', props.msg)
```
``` html
<Foo msg="hello!" />
```

由于没有显式定义 props, 第一个入参 `props` 将包含父级传递给组件的所有内容.

### 显式定义 Props

添加显式定义的 props, 需要将 `props` 附加到函数本身:

``` js
const FunctionalComp = props => {
  return h('div', `Hello! ${props.name}`)
}

FunctionalComp.props = {
  name: String
}
```

### 创建异步组件

新的异步组件 API 在[专门的 RFC](https://github.com/vuejs/rfcs/pull/148)中讨论.

## 缺点
- 迁移成本

## 备选方案

N/A

## 升级策略

- 对于函数式组件, 可以提供一个兼容模式, 让你们一个一个地迁移.
- 使用 `<template functional>` 的单文件组件会被转换成普通的单文件组件. 
