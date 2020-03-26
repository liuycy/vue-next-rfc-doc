# 20. 事件 API 更改

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0020-events-api-change.md>

- 开始日期: 2020-01-21
- 目标版本: 3.x
- 参考 Issues: <https://github.com/vuejs/vue/issues/5443> <https://github.com/vuejs/vue-next/issues/635>
- 实现 PR: N/A

## 概要

移除 `$on`, `$off` 和 `$once` 实例方法, Vue 实例不再实现事件触发接口. 

## 动机

Vue 1.x 实现了与 AngularJS 类似的组件事件系统, 使用  `$dispatch` 和 `$broadcast` 可以在组件树上进行双向通信. 

在 Vue 2, 为了更符合状态驱动的数据流(使用 props 向下传递, 使用事件向上传递), 我们移除了 `$dispatch` 和 `$broadcast`.

借助于 Vue 2 的 API `$emit`, 可以触发绑定在父组件上(在模板中 或 render 函数中)定义的事件处理函数, 但也可以触发事件触发器 API (`$on`, `$off` 和 `$once`) 定义的处理函数. 
这实际上是一个累赘: 完整的事件触发器 API 并不是典型组件间数据流的一部分. 这些 API 很少被使用, 而且也没什么理由暴露在组件实例上. 
因此这个 RFC 提议移除 `$on`, `$off` 和 `$once` 实例方法.

## 升级策略

在 Vue 2 中, 事件触发器 API 最常见的用法是用空组件当 event hub. 这可以使用其他外部库来实现, 例如: [mitt](https://github.com/developit/mitt).

在兼容版本中也支持这些方法. 
