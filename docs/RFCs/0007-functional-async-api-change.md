# 函数式组件和异步组件 API 更改

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0007-functional-async-api-change.md>

- 开始日期: 2019-04-08
- 目标版本: 3.x
- 参考 Issues: N/A
- 实现 PR: N/A

## 概要

- 函数式组件必须以函数的形式编写
  - `{ functional: true }` 选项移除
  - `<template functional>` 不再支持
- 异步组件必须通过 `createAsyncComponent` API 创建

## 基本用例

``` js
import { h } from 'vue'

const FunctionalComp = props => {
  return h('div', `Hello! ${props.name}`)
}
```

``` js
import { createAsyncComponent } from 'vue'

const AsyncComp = createAsyncComponent(() => import('./Foo.vue'))
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

const FunctionalComp = (props, slots) => {
  return h('div', `Hello! ${props.name}`)
}
```

- 移除 `functional` 选项, 不再支持 `{ functional: true }` 对象格式.
- 单文件组件不再支持 `<template functional>` - 如果你需要函数外的其他功能就用普通组件.
- 函数签名也改了 - `h` 现在需要全局引入了, 传入的不再是渲染上下文, 而是 props 和 slots 与 其他值. 更多关于新参数替换 2.x render 函数的渲染上下文的细节, 请查看 [Render Function API Change RFC](https://github.com/vuejs/rfcs/pull/28). 

### 运行时 Props 验证

props 声明现在可选的了 (只在需要运行时验证时才要声明). 要添加运行时验证或默认值, 请将 `props` 附加到函数上: 

``` js
const FunctionalComp = props => {
  return h('div', `Hello! ${props.name}`)
}

FunctionalComp.props = {
  name: String
}
```

### 创建异步组件

随着函数组件的修改, Vue 的运行时无法判断一个函数是函数组件还是异步组件的工厂函数了, 所以在 v3 异步组件必须通过新的 API 方法创建: 

``` js
import { createAsyncComponent } from 'vue'

const AsyncComp = createAsyncComponent(() => import('./Foo.vue'))
```

该方法还支持高级选项: 

``` js
const AsyncComp = createAsyncComponent({
  factory: () => import('./Foo.vue'),
  delay: 200,
  timeout: 3000,
  error: ErrorComponent,
  loading: LoadingComponent
})
```

这将使异步组件的创建更冗长, 但异步组件使用频率较低, 且通常组织到一个文件里(如: 路由配置)

## 缺点
- 迁移成本

## 备选方案

N/A

## 升级策略

- 对于函数式组件, 可以提供一个兼容模式, 让你们一个一个地迁移.
- 对于异步组件, 迁移很简单, 但函数返回 Promise 不是 VNodes 时会抛出一个警告.
- 使用 `<template functional>` 的单文件组件会被转换成普通的单文件组件. 
