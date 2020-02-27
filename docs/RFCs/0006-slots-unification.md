# 统一插槽

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0006-slots-unification.md>

- 开始日期: 2019-03-12
- 目标版本: 3.x
- 参考 Issues: N/A
- 实现 PR: N/A

## 概要

统一普通插槽和作用域插槽的概念, 在 v3 中它们都叫插槽. 

## 动机

- 由于作用域插槽是之后作为新概念加进来的而且 2.x 中两者内部实现也不一样, 导致普通插槽和作用域插槽分离. 理论上这两个不需要分离, 两者统一可以简化插槽的整体概念. 
- 为了开发组件使用 render 函数时, 不再需要区分 `$slots` 和 `$scopedSlots`.
- 为了在大型组件树上中将插槽编译成函数时有更好的性能.

  引用 2.6 的发布通告: 

  > 普通插槽是在父组件渲染周期中中渲染的. 当普通插槽的依赖项发生改变, 父子组件都会重新渲染. 而作用域插槽会被编译为内联函数并在子组件渲染周期中调用. 
  > 这意味着作用域插槽的依赖项由子组件收集, 从而使得更新更准确. 在 2.6 我们做了一个优化, 进一步确保父级作用域依赖项发生改变时只影响父级作用域, 如果子组件只使用了作用域插槽, 将不再强制更新. 

## 设计细节

统一插槽包含两部分: 

- 语法统一 (在 2.6 中以 `v-slot` 的形式发布)
- 实现统一: 所有插槽都会编译成函数. 
  - `this.$slots` 现在以函数形式导出插槽.
  - `this.$scopedSlots` 被移除. 
  - 在 2.x 中所有使用 `v-slot` 语法的插槽会在内部编译成函数, `this.$scopedSlots` 会指向普通插槽并以函数形式导出. 

### 在 Render 函数中使用

现有的用法还能在 Render 函数中使用. 把 children 传给一个组件时, VNode 和 函数 形式都是支持的: 

```js
h(Comp, [
  h('div', this.msg)
])

// 等同于:
h(Comp, () => [
  h('div', this.msg)
])
```

两种形式在 `Comp` 内, `this.$slots.default` 都会是一个函数并返回相同的 VNodes. 
不过, 当 `this.msg` 仅作为子组件的依赖项时, 第二种形式会表现得更好. 

命名插槽的用法也变了 - 不再通过内容节点上的 `slot` data 属性传递, 而是通过作为 children 通过第三个参数传递: 

``` js
// 2.x
h(Comp, [
  h('div', { slot: 'foo' }, this.foo),
  h('div', { slot: 'bar' }, this.bar)
])

// 3.0
// 注意: 必须传入 `null` 避免 slots 对象被误认为 props
h(Comp, null, {
  foo: () => h('div', this.foo),
  bar: () => h('div', this.bar)
})
```

#### 进一步手动优化

注意父组件更新时, `Comp` 也会被强制更新, 因为没有编译步骤 Vue 无法判断 `slots` 是否更新. 

编译器可以检测到 `v-slot` 并将内容编译成函数, 但在 render 函数中不能自动触发. 我们也许还能在 Babel 插件中执行类似的优化. 但对于那些使用 render 函数的用户来说, 他们需要针对性能敏感的情况做手动优化. 

当父级更新时 Vue 会强制子级更新, 在 render 函数中 slots 可以通过手动配置关闭这个功能: 

``` js
h(Comp, null, {
  $stable: true,
  foo: () => h('div', this.foo),
  bar: () => h('div', this.bar)
})
```

## 升级策略

大部分更改已经在 2.6 中发布, 唯一剩下的就是从 API 中移除 `this.$scopedSlots`. 实际上, 现在 2.6 中的 `this.scopedSlots` 已经跟 3.0 中的 `this.$slots` 完全一样了, 所以迁移可以分两步进行: 

1. 在使用 2.x 的代码里都使用 `this.$scopedSlots`;
2. 到了 3.0 将 `this.$scopedSlots` 全部替换为 `this.$slots`.
