# 25. teleport 组件

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0025-teleport.md>

- 开始日期: 2020-01-20
- 目标版本: (3.x)
- 参考 Issues: (如果存在相关 issues, 请填写)
- 实现 PR:

## 概要

- Vue 内核加入 `<teleport>` 组件
- 该组件需要传入一个 `HTMLElement` 或 `querySelector` 字符串作为目标元素.
- 该组件会将其子元素移动到 DOM 选择器指向的元素内.
- 在虚拟 DOM 中, 所有子元素仍是 `<teleport>` 的后代, 因此能访问到祖先的注入值 (injections).

## 基本用例

```html
<body>
  <div id="app">
    <h1>使用 portal 组件移动 #content</h1>
    <teleport to="#endofbody">
      <div id="content">
        <p>
          将会移动到 #endofbody.<br />
          假装这是一个模态框
        </p>
        <Child />
      </div>
    </teleport>
  </div>
  <div id="endofbody"></div>
  <script>
    new Vue({
      el: "#app",
      components: {
        Child: { template: "<div>占位符</div>" }
      }
    });
  </script>
</body>
```

这将会导致如下行为: 

1. `<teleport>` 的所有子元素 - 在此例中: `<div id="content">` 和 `<Child />` - 会被添加到 `<div id="endofbody">`
2. 其中 `<Child>` 组件仍会保持为 `<teleport>` 的父级的子组件 (`<teleport>` 是透明的).

```html
<div id="app">
  <!-- -->
</div>
<div id="endofbody">
  <div id="content">
    <p>
      将会移动到 #endofbody.<br />
      假装这是一个模态框
    </p>
    <div>占位符</div>
  </div>
</div>
```

## 动机

Vue 鼓励我们通过将 UI 和相关行为封装到组件中来构建 UI, 我们可以将这些组件彼此嵌套在一起, 构建组成应用程序 UI 的组件树. model 组件在 Vue 和 其他框架中都有着不错的表现, 不过此提案想要解决一个弱点: 

某些情况下, 一个组件模板中的某一部分 _逻辑上讲_ 的确属于这个组件, 但是从视觉(即: 样式需求)技术角度来看, 最好将这部分移动到 DOM 中的其他位置, 将其从 DOM 树的深层嵌套中抽离出来.

### 使用场景

#### z-Index

这个行为的主要使用场景通常都是跟样式有关. 各种常见的 UI 模式, 如 模态框, 对话框, 下拉菜单, 通知等等. 都要使用固定或绝对定位以及处理 z-index.

为了解决 [z-index 层叠上下文](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/) 的行为问题, 一个常见做法是将这些组件的 DOM 元素放在 `</body>` 之前, 为了能将它们移到任何父元素的 z-index 层叠上下文顶层.

#### 窗体小部件(Widgets)

许多应用都有 widgets 的概念, 即它们的 UI 上有个出口(例如在 sidebar 或 dashboard 中), 或在应用的其他地方(例如 插件), 可以注入小块的 UI.

在单页应用中, JavaScript 实际上可以控制整个页面, 这种情况不是什么问题. 但在那种 Vue 只能控制部分页面的情况下, 目前来说将单个元素或组件挂在到页面其他地方确实很难(但并不是不能).

通过 `<teleport>`, 我们可以直接将子组件以声明的方式挂载到 DOM 中的其他位置.

## 设计细节

### 作为一个内部组件来实现

`<teleport>` "组件" 是一个类似 `<transition>` 和 `<keep-alive>` 的内部组件. 支持 tree-shaking, 所以如果你不用, 最终打包的代码并不会包含这些代码.

#### 在模板中的用法

在模板中, 编译器会自动注入 `<teleport>` 所以可以像下面这样直接使用: 

```js
export default {
  template: `
    <div>
      <teleport to="#endofbody">
        某些内容.
      </teleport>
    <div>
  `
};
```

如果使用了 render 函数 或 JSX, 在组件中需要像其他组件一样先导入这个组件: 

```js
import { Teleport, h } from "vue";
export default {
  render() {
    return h("div", [h(Teleport, { to: "#endofbody" }, ["某些内容"])]);
  },
  // or with JSX:
  render() {
    <div>
      <Teleport to="#endofbody">某些内容</Teleport>
    </div>;
  }
};
```

### 在同一个目标元素上使用多个 portal

一个常见情况是, 可能在同一时间会有多个实例激活了一个复用的 `<Modal>` 组件. 像这种情况, 多个 `<teleport>` 组件也能够挂载其内容到同一个目标元素上. 顺序如同一个简单的 `append` - 在同一个元素内, 后面挂载的位置会排在前面挂载的之后.

```html
<teleport to="#modals">
  <div>A</div>
</teleport>
<teleport to="#modals">
  <div>B</div>
</teleport>

<!-- 结果 -->
<div id="modals">
  <div>A</div>
  <div>B</div>
</div>
```

到目前为止, 在这个 RFC 的讨论中, 我们讨论过更复杂行为 (可选的前置插入, 顺序的定义 ...), 不过对于复杂度的担忧, 和 SRR 与 hydration 的可预见的问题是我们将行为暂时限定于简单的 `append`.

### Props

#### `to`

这个组件有且只有一个 _必须的_ 属性 `to`. 接收一个字符串, 但必须是 合法的选择器 或 HTMLElement (如果在浏览器环境中).

```html
<!-- 没问题的 -->
<teleport to="#some-id" />
<teleport to=".some-class" />
<teleport to="[data-portal]" />
<!--
  虽然可能不明确, 但技术上可行
  我们该允许还是禁止下面这种用法?
-->
<teleport to="h1" />
<!-- 报错的 -->
<teleport to="some-string" />
></teleport>
```

#### `disabled`

这个可选属性可以用来禁用 portal 的功能, 也就是说其内容不会被移动到其他地方, 只会在 `<teleport>` 指定的地方渲染出来.

```html
<teleport to="#popup" :disabled="displayVideoInline">
  <video src="./my-movie.mp4">
</teleport>
```

动态改变这个值可以让其内部 DOM 元素在 `to` 指定的元素内部和原地反复横跳. 也就是说, 任何在 `<teleport>` 内部的组件都可以 keep alive 和 保留其内部状态. 也就是说 `<video>` 元素可以在反复横跳时保持播放进度. 

### 生命周期

#### Mounting

当 `<teleport>` 被其父级挂载时, 它会使用 `to` 属性的值作为一个选择器.

- 如果选择器查询到一个元素, `<teleport>` 的内容会作为这个元素的子节点挂载到 DOM 中
- 如果当 `<teleport>` 挂载时, 选择器未查询到该元素, 在开发环境中, 类似下面的警告会被打印 (在生产环境中不会打印):

```js
`Teleport content could not be mounted to element with selector '${props.to}': element not found.
// following would be a display where in the component tree this happened etc.
```

##### \$parent

如果 `<teleport>` 包含了组件, 这些组件的 `this.$parent` 属性应该指向 `<teleport>` 的父级组件. 换言之, 这些组件在 _组件树_ 上应该保持不动, 即使它们最终挂载到了 _DOM 树_ 的其他位置.

`<teleport>`, 并不是一个真正的组件, 它是透明的并且不会出现在 `$parent` 链上.

```html
<template>
  <teleport v-bind:to="targetName">
    <Child />
  </teleport>
</template>
<script>
  export default {
    name: 'Parent'
    components: {
      Child: {
        template: '<div/>',
        mounted() {
          console.log(this.$parent.$options.name )
          // => 'Parent'
        }
      }
    },
  }
</script>
```

同样, 在 `Child` 中使用 `inject` 应该能够注入 在 `Parent` 或者 其他祖先 上提供的内容.

#### Updating

`to` 属性可以通过 `v-bind` 动态改变. 当这个值变化时, `<teleport>` 会从之前的目标元素中移除子级再移动到新的目标元素中.

如果子级元素包含了任意组件实例, 这些组件不会受此影响. 这些组件会 keep alive, 保留它们的状态.

```html
<template>
  <teleport v-bind:to="targetName">
    <p>可以通过下方的按钮移动</p>
  </teleport>
  <button v-on:click="toggleTarget">切换</button>
  <hr />
  <div id="A"></div>
  <div id="B"></div>
</template>
<script>
  export default {
    data: () => ({
      targetName: "A"
    }),
    methods: {
      toggleTarget() {
        this.targetName = this.targetName == "A" ? "B" : "A";
      }
    }
  };
</script>
```

如果新的目标选择器匹配不到任何元素:
1. 在开发环境中会打印一个警告.
2. 其内容会留在之前的目标元素中.

#### Destruction

当 `<teleport>` 被销毁时 (例如 在其父级被销毁时 或 使用 `v-if` 时), 其子元素会从 DOM 元素中移除 而 其子组件实例也会像 其父级组件的其他子组件一样 被销毁.

## 杂项

#### 与原生 portal 的命名冲突

这个组件在早期的 RFC 版本中被命名为 `<portal>`. 不过已有原生 portals 的提案: 

- 说明: https://wicg.github.io/portals/
- 介绍: https://web.dev/hands-on-portals/

我们不想和将来可能叫 `<portal>` 的 HTML 元素存在命名冲突, 特别是其功能与 Vue 或 React 这些库中的 portal 含义完全不同, 我们将这个组件命名为 `<teleport>`.

还是说我们应该保留这个概念, 一个在 Vue 或 React 已经是 "常识" 的 portal 概念. 一个新术语会让用户感到困惑吗 ?

#### dev-tools

这个 `<teleport>` 不应出现在父组件的层级链中(`this.$parent`), 不过在虚拟 DOM 内应该是可识别的, 这样 Vue 的 dev-tools 才能在组件树中将其可视化.

#### 在 Vue app 内的某个元素上使用 `<teleport>`

理论上, 这个提案允许选择在 DOM 中的 _任意_ 元素, 包括那些在组件树上其他部分由 Vue 渲染的元素.

但这会让 portal 的内容受控于其他组件的生命周期, 也就是说当那个组件被销毁时, 该 portal 的内容可能会从 DOM 中移除.

在原本的虚拟 DOM 树上, 任何来自 `<teleport>` 的组件都能有效地移除其真实 DOM, 但当这些组件尝试更新时会造成错误.

可靠地处理这些问题需要大量附加的逻辑, 正因如此这种使用情况被明确地 **排除在此 RFC 外**. 传送到 Vue 渲染的 DOM 元素上被认为是一种反模式, 可能导致真实 DOM 和 虚拟 DOM 不同步.

## 缺点

唯一值得注意的缺点就是实现此功能的额外代码. 不过从试验版本中判断, 这些代码很轻量, 因为只是在虚拟 DOM 上挂载元素的方式稍有不同, 而且这个组件支持 tree-shaking.

由于是一个新增功能并且功能非常单一 (只有一个定义目标选择器的 prop), 应该也不会在 Vue 的文档和学习成本上增加太多的复杂性.

考虑到社区方案(即使有些限制和缺陷)的流行程度, 性价比似乎挺高的.

## 备选方案

目前为止没有其他方案.

### 如果不实现该功能会怎样

当前有一些类似该功能的社区实现方案, 不过通常会有一些警告和缺点, 根本原因是这些 portals 在 Vue 2 的虚拟 DOM 上不支持.

用户可能需要继续忍受这些限制和缺点.

## 升级策略

`<teleport>` 是一个新功能而且是纯新增的原生功能. 因此, 从 Vue 2.0 迁移到 Vue 3.0 该功能不会造成任何影响, 除非他们的自定义组件起了 `<teleport>` 的名字 - 不过他们将组件名字改一下也很容易的.

刚接触 Vue 3.0 或 Vue 的用户可以在文档中学习这个功能并在需要该功能的项目中使用.

### 现存的第三方解决方案

值得一提的是, 很多第三方插件/库都实现了类似的功能.

尽管有些与此 RFC 无关, 但有些提供了比此提案更丰富的功能, 不知能否调整其内部实现使用此提案中的 `<teleport>` 组件呢.

如果 RFC vuejs/vue-next#28 (Render function change) 被采纳了, 这些库也得重构, 那时或许也能采纳这个新功能.

## 未解决的问题

n/a