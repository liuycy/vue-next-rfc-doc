# 新的插槽语法

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0001-new-slot-syntax.md>

- 开始日期: 2019-01-14
- 目标版本: 2.x & 3.x
- 参考 Issues: <https://github.com/vuejs/vue/issues/7740>, <https://github.com/vuejs/vue/issues/9180>, <https://github.com/vuejs/vue/issues/9306>
- 实现 PR: (留空)

## 概要

介绍一种作用域插槽的新语法

- 为`具名插槽`和`作用域插槽`提供了一个统一的指令`v-slot`
- 为`普通插槽`和`作用域插槽`提供了一个`v-slot`的缩写用法

## 基本用例

使用`v-slot`来定义传给`<foo>`作用域插槽的参数: 

``` vue
<!-- 默认插槽 -->
<foo v-slot="{ msg }">
  {{ msg }}
</foo>

<!-- 具名插槽 -->
<foo>
  <template v-slot:one="{ msg }">
    {{ msg }}
  </template>
</foo>
```

## 动机

我们首次引入作用域插槽的概念时, 我们要求需要使用`<template slot-scope>`, 这难免会显得臃肿: 

``` vue
<foo>
  <template slot-scope="{ msg }">
    <div>{{ msg }}</div>
  </template>
</foo>
```

为了简洁, 我们在 2.5 版本允许用户直接在插槽元素上使用`slot-scope`: 

``` vue
<foo>
  <div slot-scope="{ msg }">
    {{ msg }}
  </div>
</foo>
```

这就意味着组件也可以这样用: 

``` vue
<foo>
  <bar slot-scope="{ msg }">
    {{ msg }}
  </bar>
</foo>
```

然而这会导致一个问题: `slot-scope`的位置不能明确地表达真正提供 scope 变量的组件. 
上面代码中, `slot-scope`写在`<bar>`中, 但实际上 scope 变量是由 `<foo>` 的默认插槽提供的. 

嵌套越多情况越糟: 

``` vue
<foo>
  <bar slot-scope="foo">
    <baz slot-scope="bar">
      <div slot-scope="baz">
        {{ foo }} {{ bar }} {{ baz }}
      </div>
    </baz>
  </bar>
</foo>
```

上面的代码中, 并不能一眼看出哪个组件提供了哪些 scope 变量. 

有人建议我们应该允许把`slot-scope`放在提供 scope 变量的组件本身上: 

``` vue
<foo slot-scope="foo">
  {{ foo }}
</foo>
```

可惜这样做会导致组件嵌套产生歧义: 

``` vue
<parent>
  <foo slot-scope="foo"> <!-- 这个变量是 <parent> 还是 <foo> 提供的 ? -->
    {{ foo }}
  </foo>
</parent>
```

所以我认为允许`slot-scope`不放在`template`上是一个错误. (折腾了这么久是要改回去啊...)

### 为什么要用新指令而不是去改`slot-scope`呢 ?

为什么呢, 因为: 

- 这是破坏性修改, 不能在 2.x 版发布啊
- 即使我们在 3.0 版本修改了, 难免有人会搜到过时的教程, 这会让初学者很疑惑. 我们不像这样, 所有我们必须引入一些新的东西区分一下. 
- 在 3.0 版本我们计划统一插槽类型, 这样(从概念上)就不需要区分作用域插槽和非作用域插槽了, 不管带不带参数都叫插槽. 通过统一概念, 似乎就没有必要将`slot`和`slot-scope`作为特殊属性了.

## 设计细节

### 引入一个新指令: `v-slot`

在`template`上使用这个指令来表示传给组件的插槽, `指令的参数`可以表示插槽的名称: 

``` vue
<foo>
  <template v-slot:header>
    <div class="header"></div>
  </template>

  <template v-slot:body>
    <div class="body"></div>
  </template>

  <template v-slot:footer>
    <div class="footer"></div>
  </template>
</foo>
```

这个指令也可以接收作用域插槽传过来的 props , 获取的 props 就跟 `slot-scope` 获取的一样, 同样也是支持解构的.

``` vue
<foo>
  <template v-slot:header="{ msg }">
    <div class="header">
      Message from header slot: {{ msg }}
    </div>
  </template>
</foo>
```

`v-slot`可以不带参数直接用在组件上, 表示默认插槽是一个作用域插槽: 

``` vue
<foo v-slot="{ msg }">
  {{ msg }}
</foo>
```

### 新旧对比

让我们来回顾一下这个提议是否实现了我们上面列出的目标: 

- 仍为作用域插槽(单个默认插槽)的大多数常见用例提供简洁的语法
  
  ``` vue
  <foo v-slot="{ msg }">{{ msg }}</foo>
  ```

- scope 变量和提供这个变量的组件之间的联系更加清晰了

  让我们再来看看使用当前语法的深层嵌套示例(`slot-scope`) - 注意 `<foo>` 提供的 scope 变量定义在 `<bar>` 上, `<bar>` 提供的变量定义在 `<baz>` 上...

  ``` vue
  <foo>
    <bar slot-scope="foo">
      <baz slot-scope="bar">
        <div slot-scope="baz">
          {{ foo }} {{ bar }} {{ baz }}
        </div>
      </baz>
    </bar>
  </foo>
  ```

  用新语法可以这样写

  ``` vue
  <foo v-slot="foo">
    <bar v-slot="bar">
      <baz v-slot="baz">
        {{ foo }} {{ bar }} {{ baz }}
      </baz>
    </bar>
  </foo>
  ```

  注意, **组件提供的 scope 变量现在定义在组件上**. 新语法让 scope 变量和提供这个变量的组件之间的联系更加清晰了. 

### 更多用法比较

#### 默认的文字插槽

``` vue
<!-- 以前 -->
<foo>
  <template slot-scope="{ msg }">
    {{ msg }}
  </template>
</foo>

<!-- 现在 -->
<foo v-slot="{ msg }">
  {{ msg }}
</foo>
```

#### 默认的元素插槽

``` vue
<!-- 以前 -->
<foo>
  <div slot-scope="{ msg }">
    {{ msg }}
  </div>
</foo>

<!-- 现在 -->
<foo v-slot="{ msg }">
  <div>
    {{ msg }}
  </div>
</foo>
```

#### 默认插槽嵌套

``` vue
<!-- 以前 -->
<foo>
  <bar slot-scope="foo">
    <baz slot-scope="bar">
      <template slot-scope="baz">
        {{ foo }} {{ bar }} {{ baz }}
      </template>
    </baz>
  </bar>
</foo>

<!-- 现在 -->
<foo v-slot="foo">
  <bar v-slot="bar">
    <baz v-slot="baz">
      {{ foo }} {{ bar }} {{ baz }}
    </baz>
  </bar>
</foo>
```

#### 具名插槽

``` vue
<!-- 以前 -->
<foo>
  <template slot="one" slot-scope="{ msg }">
    text slot: {{ msg }}
  </template>

  <div slot="two" slot-scope="{ msg }">
    element slot: {{ msg }}
  </div>
</foo>

<!-- 现在 -->
<foo>
  <template v-slot:one="{ msg }">
    text slot: {{ msg }}
  </template>

  <template v-slot:two="{ msg }">
    <div>
      element slot: {{ msg }}
    </div>
  </template>
</foo>
```

#### 嵌套 & 具名和默认插槽混合使用

``` vue
<!-- 以前 -->
<foo>
  <bar slot="one" slot-scope="one">
    <div slot-scope="bar">
      {{ one }} {{ bar }}
    </div>
  </bar>

  <bar slot="two" slot-scope="two">
    <div slot-scope="bar">
      {{ two }} {{ bar }}
    </div>
  </bar>
</foo>

<!-- 现在 -->
<foo>
  <template v-slot:one="one">
    <bar v-slot="bar">
      <div>{{ one }} {{ bar }}</div>
    </bar>
  </template>

  <template v-slot:two="two">
    <bar v-slot="bar">
      <div>{{ two }} {{ bar }}</div>
    </bar>
  </template>
</foo>
```

## 缺点

- 引入新语法会让初学者感到疑惑, 网上的很多关于插槽的教程会过时
  - 我们更新关于插槽的文档来解决这个问题
- 默认插槽上的`v-slot="{ msg }"`并不能准确地表达`msg`作为一个属性传递给插槽的概念

## 备选方案

- 新的特殊属性 `slot-props` ([这个草案的先前版本](https://github.com/vuejs/rfcs/blob/8575e72d5a401db5d7206e127e3a6012491d68ed/active-rfcs/0000-new-scoped-slots-syntax.md))
- [#9180](https://github.com/vuejs/vue/issues/9180)提出的 (`v-scope`) 指令
- @rellect 在[这里](https://github.com/vuejs/vue/issues/9306#issuecomment-453946190)提议的缩写符号 (`&`)

## 升级策略

这个修改是完全向后兼容的, 所以我们可以在一个小版本中推出(计划在2.6中发布). 

`slot-scope`将被弃用: 它将在文档中标记为不推荐使用, 我们会鼓励用户使用/切换到新的语法. 
我们的弃用的提示不会太强制, 因为迁移到最新内容并不是每个人的当务之急.

我们计划在 3.0 版本移除`slot-scope`只支持最新的语法. 在 2.x 版本使用`slot-scope`会收到一个弃用的提示信息, 以便迁移到 3.0 版本.

由于这是一个定义明确的语法更改, 我们可以提供一种将模板自动转换为新语法的迁移工具 (在哪呢? 没找到啊 !)

