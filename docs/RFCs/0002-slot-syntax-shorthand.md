# 插槽语法缩写

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0002-slot-syntax-shorthand.md>

- 开始日期: 2019-01-16
- 目标版本: (2.x / 3.x)
- 参考 Issues: <https://github.com/vuejs/rfcs/pull/2>
- 实现 PR: (留空)

## 概要

请务必先阅读 [rfc-0001](/doc/RFCs/0001-new-slot-syntax.md), 本章说的是前一章提出的 `v-slot` 语法的缩写. 

## 基本用例

``` vue
<foo>
  <template #header="{ msg }">
    Message from header: {{ msg }}
  </template>

   <template #footer>
    A static footer
  </template>
</foo>
```

## 动机

顾名思义, 缩写的主要目的是提供更简洁的语法. 

在 Vue 中, 我们目前只为 `v-bind` 和 `v-on` 提供过缩写: 

``` vue
<div v-bind:id="id"></div>
<div :id="id"></div>

<button v-on:click="onClick"></button>
<button @click="onClick"></button>
```

`v-bind` 和 `v-on` 在同一个元素上使用频繁, 而且通常只是`参数`不一样而已, 整套语法写下来难免显得冗长. 
**因此, 缩写可以缩短重复部分(`v-xxx`)突出不同部分(`参数`)**.

新语法 `v-slot` 在多个插槽的情况下也会有类似的问题: 

``` vue
<TestComponent>
  <template v-slot:one="{ name }">Hello {{ name }}</template>
  <template v-slot:two="{ name }">Hello {{ name }}</template>
  <template v-slot:three="{ name }">Hello {{name }}</template>
</TestComponent>
```

上面的代码中`v-slot`重复了多次, 只有参数不一样而已. 这时缩写就可以让组件更容易扫读了. 

``` vue
<TestComponent>
  <template #one="{ name }">Hello {{ name }}</template>
  <template #two="{ name }">Hello {{ name }}</template>
  <template #three="{ name }">Hello {{name }}</template>
</TestComponent>
```

## 设计细节

缩写遵循类似 `v-bind` 和 `v-on` 的缩写规则: 用符号(`#`)替代掉指令和冒号. 

``` vue
<!-- 完整语法 -->
<foo>
  <template v-slot:header="{ msg }">
    Message from header: {{ msg }}
  </template>

   <template v-slot:footer>
    A static footer
  </template>
</foo>

<!-- 缩写 -->
<foo>
  <template #header="{ msg }">
    Message from header: {{ msg }}
  </template>

   <template #footer>
    A static footer
  </template>
</foo>
```

与 `v-bind` 和 `v-on` 一样, 缩写只在带参数的情况下有效. 也就是说在没有参数时不能简写成`#=`. 
对于默认插槽, 应该使用完整语法`v-slot`或显示名称`#default`.

``` vue
<foo v-slot="{ msg }">
  {{ msg }}
</foo>

<foo #default="{ msg }">
  {{ msg }}
</foo>
```

基于之前 RFC 收集到的反馈, 我们选择了 `#` 这个符号. 它跟 css 的 id 选择器相似, 并且在概念上说它表示一个插槽的名称也比较容易解释. 

举个用到了作用域插槽的真实案例([vue-promised](https://github.com/posva/vue-promised)): 

``` vue
<Promised :promise="usersPromise">
 <template #pending>
   <p>Loading...</p>
 </template>

  <template #default="users">
   <ul>
     <li v-for="user in users">{{ user.name }}</li>
   </ul>
 </template>

  <template #rejected="error">
   <p>Error: {{ error.message }}</p>
 </template>
</Promised>
```

## 缺点

- 有人说插槽不常用, 因此不需要缩写, 而且会给初学者增加学习难度. 对此: 
  1. 我相信对于那些提供高度可定制和可组合的第三方组件来说, 作用域插槽是一个非常重要的机制. 我认为将来会有更多的组件库依赖于插槽进行定制和组合. 对于使用这种组件库的用户来说, 缩写很有价值(如示例中所示). 
  2. 缩写的规则很简单, 且与现有的缩写规则一致. 如果用户理解了完整语法, 那理解缩写完全没有问题. 

## 备选方案

在之前的 RFC 中已经介绍和讨论了一些备选符号, 另一个差点入选的符号是`&`: 

``` vue
<foo>
  <template &header="{ msg }">
    Message from header: {{ msg }}
  </template>

   <template &footer>
    A static footer
  </template>
</foo>
```

## 升级策略

这应该是 `v-slot` 语法的一个自然延展. 理想情况下, 我们希望同时介绍完整语法和缩写, 以便用户同时学习两者. 
以后再引入缩写的话, 可能会导致一些用户只知道 `v-slot` 的完整语法, 而且在看到其他代码中的缩写时会感到疑惑. 

## 未解决的问题
N/A
