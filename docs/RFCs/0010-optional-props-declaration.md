# 10. 可选的 props 声明

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0010-optional-props-declaration.md>

- 开始日期: 2019-04-08
- 目标版本: 2.x & 3.x
- 参考 Issues: N/A
- 实现 PR: N/A

## 概要

让组件的 `props` 声明变成可选的

## 基本用例

``` vue
<template>
  <div>{{ $props.foo }}</div>
</template>

<script>
export default {}
</script>
```

## 动机

在不需要在运行时 props 类型检查的情况下(尤其是函数式组件), 可选的 props 可以让代码更简单.

## 设计细节

### 有状态的组件

当组件没有 `props` 声明时, 所有父级传入的属性可以在 `this.$props` 拿到. 与声明的 `props` 不同, 没有声明的不能直接通过 `this` 拿到. 这种情况下, `this.$props` 和 `this.$attrs` 会指向同一个对象. 

``` vue
<template>
  <div>{{ $props.foo }}</div>
</template>

<script>
export default {}
</script>
```

如果组件没有其他选项, 整个 `<script>` 都可以删掉, 所以下面的单文件组件是有效的: 

``` vue
<template>
  <div>{{ $props.foo }}</div>
</template>
```

### 函数式组件

这是一个基于普通函数的函数式组件, 详见[函数式组件和异步组件 API 更改](./0007-functional-async-api-change.md).

``` js
const FunctionalComp = props => {
  return h('div', props.foo)
}
```

要为基于普通函数的函数式组件声明 props 的话, 请将 `props` 附加到函数上: 

``` js
FunctionalComp.props = {
  foo: Number
}
```

和有状态组件类似, 当 `props` 被声明了之后, `props` 参数只会包含被声明的 props. 未被声明为 props 的属性可以通过传入的第三个参数 `attrs` 获取: 

``` js
const FunctionalComp = (props, slots, attrs) => {
  // 除了被定义的 `foo` , attrs 包含所有的接收的属性
}

FunctionalComp.props = {
  foo: Number
}
```

更多关于新函数式组件的签名, 请查看[render 函数 API 更改](./0008-render-function-api-change.md)

## 缺点

N/A

## 备选方案

N/A

## 升级策略

这个行为完全是向后兼容的
