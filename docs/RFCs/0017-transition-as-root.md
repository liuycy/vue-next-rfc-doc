# <transition> 作为根节点时

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0017-transition-as-root.md>

- 开始日期: 2019-11-29
- 目标版本: 3.x
- 参考 Issues: N/A
- 实现 PR: N/A

## 概要

在外部切换组件时, 用 `<transition>` 作为根节点的话将不会触发过渡效果

## 基本用例

之前: 

``` vue
<!-- modal 组件 -->
<template>
  <transition>
    <div class="modal"><slot/></div>
  </transition>
</template>

<!-- 用法 -->
<modal v-if="showModal">hello</modal>
```

之后: 需要暴露一个 prop 来控制切换

``` vue
<!-- modal 组件 -->
<template>
  <transition>
    <div v-if="show" class="modal"><slot/></div>
  </transition>
</template>

<!-- 用法 -->
<modal :show="showModal">hello</modal>
```

## 动机

当前 2.x 的行为因偶然原因可以正常运行, 但有些怪异. 我们没有禁用这种用法, 而是修复了一些问题来使其正常运行, 因为一些用户依赖于这种行为. 
不过从语义上讲这种用法不太合理: 根据定义, `<transition>` 组件是对其内容切换时做出响应, 而不是切换它本身: 

``` vue
<!-- 这样不会正常运行 -->
<transition v-if="show">
  <div></div>
</transition>

<!-- 这才是正确用法 -->
<transition>
  <div v-if="show"></div>
</transition>
```

为了支持 2.x 的行为, 要判定过渡的"出现"状态会有些困难.

## 设计细节

在 3.0 中, 作为根节点的 `<transition>` 组件不再触发过渡效果. 取而代之的是组件应该暴露一个 boolean 类型的 prop 来控制显示 `<transition>` 里面的内容.

## 缺点

在兼容版本中, 新的行为无法和旧行为同时存在. 

## 升级策略

通过检测 `<transition>` 组件的内容上有没有`v-if`或`v-show`来静态分析是否正在使用旧行为, 然后迁移工具就能引导用户升级这些用例. 
