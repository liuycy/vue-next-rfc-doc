# 18. &lt;transition&gt; class 更改

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0018-transition-class-change.md>

- 开始日期: 2019-11-29
- 目标版本: 3.x
- 参考 Issues: N/A
- 实现 PR: N/A

## 概要

- `v-enter` 过渡类名重命名为 `v-enter-from`
- `v-leave` 过渡类名重命名为 `v-leave-from`

## 基本用例

``` css
/* 之前 */
.v-enter, .v-leave-to{
  opacity: 0;
}

/* 之后 */
.v-enter-from, .v-leave-to{
  opacity: 0;
}
```

## 动机

在 v2.1.8 之前, 我们在每个过滤方向上只有两个过渡类. 例如 进入过渡时, 只有 `v-enter` 和 `v-enter-active`. 
在 v2.1.8 我们引入了 `v-enter-to` 来处理[进入/离开 过渡之间的间隙](https://github.com/vuejs/vue/issues/4510), 不过为了向后兼容, 没有修改 `v-enter` 的名称: 

``` css
.v-enter, .v-leave-to {
  opacity: 0;
}
.v-leave, .v-enter-to {
  opacity: 1
}
```

这种不对称和不明确造成 `.v-enter` 和 `.v-leave` 这些类有点难懂. 所以我们建议改成: 

``` css
.v-enter-from, .v-leave-to {
  opacity: 0;
}
.v-leave-from, .v-enter-to {
  opacity: 1
}
```

这样可以更好的表达这些类处于什么状态.

## 设计细节

- `.v-enter` 重命名为 `.v-enter-from`
- `.v-leave` 重命名为 `.v-leave-from`
- `<transition>` 组件上的相关属性也要改为:
  - `leave-class` 重命名为 `leave-from-class` (在 JSX 的 render 函数中可以写成 `leaveFromClass`)
  - `enter-class` 重命名为 `enter-from-class` (在 JSX 的 render 函数中可以写成 `enterFromClass`)

## 升级策略

兼容版本可以支持旧的类名, 但会抛出警告引导用户迁移.
