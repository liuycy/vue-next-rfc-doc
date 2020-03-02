# 移除 data 对象形式声明

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0019-remove-data-object-declaration.md>

- 开始日期: 2020-01-10
- 目标版本: 3.x
- 实现 PR: (留空)

## 概要

`data` 选项支持两种类型的声明: `函数` 和 `对象`, 最常见的是 `函数` 声明, 因为它会为每个组件实例创建一个新的状态. 而 `对象` 声明可以在所有组件实例共享状态, 但只能在根组件上声明. 
该 RFC 主要提议 移除 `data` 的 `对象` 声明.

## 动机

根组件很少或根本不需要共享状态. 即使遇到这种情况, 也同样可以使用 `函数` 声明实现. 
存在两种声明对新手来说不太友好, 在没有正确例子的引导下可能会产生疑惑. 另外`对象`声明只能用在根组件上也会令人疑惑. 
使用统一的声明你可以获得相同的结果, 而且还能解除疑惑. 

## 设计细节

在根组件上 `data` 选项使用 `对象` 声明不再有效, 并会抛出一个错误说明只有 `对象` 声明有效, 还有有一个链接指向 API 和 迁移示例.

之前, 使用 `对象` 声明: 

```js
import { createApp, h } from 'vue'

createApp().mount({
  data: {
    counter: 1,
  },
  render() {
    return [
      h('span', this.counter),
      h('button', {
        onClick: () => { this.counter++ }
      }),
    ]
  },
}, '#app')
```

之后, 使用 `函数` 声明: 

```js
import { createApp, h } from 'vue'

createApp().mount({
  data() {
    return {
      counter: 1,
    }
  },
  render() {
    return [
      h('span', this.counter),
      h('button', {
        onClick: () => { this.counter++ }
      }),
    ]
  },
}, '#app')
```

## 缺点

使用 `对象` 声明的用户需要迁移到 `函数` 声明.

不可能再有顶级的共享状态了

相关示例也要用 `函数` 声明重写

## 升级策略

由于在根组件上使用 `对象` 声明 `data` 并不常见, 所以迁移起来还算容易. 又因为根节点挂载 API 的更改, 这点迁移成本可以忽略不计. 

迁移过程直截了当: 

* 抽离共享状态到一个外部对象中, 并将这个对象赋给 `data` 的一个属性
* 重写共享状态的引用, 指向这个新的对象

API 页面应该提示用户 `对象` 声明已经废弃了, 并引导用户如何进行迁移.

可以提供一个适配器来保持向后兼容. 
