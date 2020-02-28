# render 函数 API 更改

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0008-render-function-api-change.md>

- 开始日期: 2019-04-08
- 目标版本: 3.x
- 参考 Issues: N/A
- 实现 PR: N/A

## 概要

- `h` 不再是一个传给 render 函数的参数, 需要全局引入. 
- render 函数传入的参数更改了, 在有状态组件和函数组件中入参现在是一样的了.
- VNodes 现在具有扁平的 props 解构 (如: 事件不再需要写在 `on` 里面了)

``` js
// 全局引入的 `h`
import { h } from 'vue'

export default {
  render() {
    return h(
      'div',
      // 扁平的数据解构
      {
        id: 'app',
        onClick() {
          console.log('hello')
        }
      },
      [
        h('span', 'child')
      ]
    )
  }
}
```

## 动机

在 2.x 中 VNodes 是特定上下文的 - 就是说每个 VNodes 都要绑定到创建它的组件实例上(上下文). 因为我们要支持下面这些用法(`h`是`createElement`的惯用别名): 

``` js
// 根据字符串查找组件
h('some-component')

h('div', {
  directives: [
    {
      name: 'foo', // 根据字符串查找指令
      // ...
    }
  ]
})
```

为了能查找本地/全局注册的组件和指令, 我们要知道"拥有"该 VNodes 的上下文组件实例. 这就是为什么 2.x 中的 `h` 作为一个参数参入, `h` 传入时已经是绑定了上下文实例(可以视为 `this.$createElement`).

这样会有很多不便, 例如想要将部分渲染逻辑抽离到单独函数时, 需要传递`h`: 

``` js
function renderSomething(h) {
  return h('div')
}

export default {
  render(h) {
    return renderSomething(h)
  }
}
```

使用 JSX 时也特别麻烦, 因为 `h` 是隐式使用的, 在用户代码中不需要. 为了减轻这种情况, 我们的 JSX 插件会自动注入 `h`, 但是逻辑复杂且脆弱.

在 3.0 中我们找到了脱离上下文的方法, 只需要在文件中导入一次 `h`, 就可以在任何地方创建 VNodes.

---

2.x 的 render 函数的另一个问题是 VNodes 数据结构嵌套问题: 

``` js
h('div', {
  class: ['foo', 'bar'],
  style: { }
  attrs: { id: 'foo' },
  domProps: { innerHTML: '' },
  on: { click: foo }
})
```

这个结构继承自 Vue 2.x 最初的虚拟 DOM 实现(Snabbdom). 这种结构是为了能够将不同逻辑模块化: 单个模块(如: `class` 模块)只需要处理 `class` 属性, 也是为了能更明确每个逻辑块在处理什么. 

随着时间的推移, 我们发现相比扁平结构来说, 嵌套结构有很多缺点: 

- 写法冗余
- `class` 和 `style` 的特殊情况有些不一致
- 占用内存更多(分配了更多对象)
- diff 效率低(每个嵌套对象都要遍历到)
- 太复杂 / 克隆, 合并 和 展开的开销太大
- 使用 JSX 需要更多特殊规则 / 隐式转换

在 3.x 我们正在向扁平的 VNodes 数据结构发展, 以解决这些问题. 

## 设计细节

### 全局引入 `h` 函数

``` js
import { h } from 'vue'

export default {
  render() {
    return h('div')
  }
}
```

### Render 函数签名更改

`h` 不再作为参数传入, `render` 函数也不需要接收任何参数了. 实际上在 3.0 中, `render` 选项将主要用作模板编译器生成的渲染函数的整合点. 至于 render 函数, 建议在 `setup()` 函数返回: 

``` js
import { h, reactive } from 'vue'

export default {
  setup(props, { slots, attrs, emit }) {
    const state = reactive({
      count: 0
    })

    function increment() {
      state.count++
    }

    // 返回渲染函数
    return () => {
      return h('div', {
        onClick: increment
      }, state.count)
    }
  }
}
```

从 `setup()` 返回的 render 函数自然可以访问到作用域内定义的 响应式属性 和 函数 以及传给 `setup` 的参数: 

- `props` 和 `attrs` 等同于 `this.$props` 和 `this.$attrs` - 也可以查看 [Optional Props Declaration](https://github.com/vuejs/rfcs/pull/25) 和 [Attribute Fallthrough](https://github.com/vuejs/rfcs/pull/92).
- `slots` 等同于 `this.$slots` - 也可以查看 [Slots Unification](https://github.com/vuejs/rfcs/pull/20).
- `emit` 等同于 `this.$emit`

这里的 `props`, `slots` 和 `attrs` 都是 Proxy 对象, 所以当它们在 render 函数中使用时, 总是指向最新的值. 

更多关于 `setup` 的细节, 请查看 [Composition API](/api.html#setup).

### 函数组件签名

注意, 函数组件的 render 函数也具有同样的签名, 可以让有状态组件和函数式组件保持一致: 

``` js
const FunctionalComp = (props, { slots, attrs, emit }) => {
  // ...
}
```

新的参数列表应该可以完全取代函数式组件的上下文: 

- `props` 和 `slots` 有对应的值
- 不再需要 `data` 和 `children` (可以用 `props` 和 `slots`)
- `listeners` 会被包含在 `attrs`
- `injections` 可以被新的 `inject` API 取代 (详见 [Composition API](/api.html#provide-inject)):

  ``` js
  import { inject } from 'vue'
  import { themeSymbol } from './ThemeProvider'

  const FunctionalComp = props => {
    const theme = inject(themeSymbol)
    return h('div', `Using theme ${theme}`)
  }
  ```

- `parent` 不再能访问, 这只是一些内部用例的应急用法, 用户代码应该使用 props 和 injections

### 扁平的 VNodes Props 格式

``` js
// 以前
{
  class: ['foo', 'bar'],
  style: { color: 'red' },
  attrs: { id: 'foo' },
  domProps: { innerHTML: '' },
  on: { click: foo },
  key: 'foo'
}

// 以后
{
  class: ['foo', 'bar'],
  style: { color: 'red' },
  id: 'foo',
  innerHTML: '',
  onClick: foo,
  key: 'foo'
}
```

对于扁平结构, 将使用以下规则处理 VNodes 的 Props: 

- 保留 `key` 和 `ref`
- `class` 和 `style` 和 2.x 一样
- 以 `on` 开头的属性是 `v-on` 的事件, `on` 后面的所有内容会转换成全小写的事件名(后面会详细介绍)
- 其他注意事项
  - 如果 DOM 节点本身自带一个 `key` 属性, 那么 key 会被当作 DOM 属性处理
  - 否则会被当做 attribute 处理

#### 特别"保留"的 Props

有两个全局保留的 props: 

- `key`
- `ref`

另外, 你也可以使用 `onVnodeXXX` 这种带前缀的钩子函数使用 VNode 的生命周期: 

``` js
h('div', {
  onVnodeMounted(vnode) {
    /* ... */
  },
  onVnodeUpdated(vnode, prevVnode) {
    /* ... */
  }
})
```

这些钩子也是构建自定义指令的基础. 因为它们是以 `on` 开头的, 在模板中 `v-on` 也可以使用: 

``` vue
<div @vnodeMounted="() => { ... }">
```

--- 

由于是扁平结构, 组件内的 `this.$attrs` 也包含了一些并未在组件中明确定义的属性, 包括 `class`, `style`, `onXXX` 事件监听函数 和 `vnodeXXX` 钩子函数. 
这样可以使包装组件变得更容易 - 只需要将 `this.$attrs` 往下传就行了, 像这样 `v-bind="$attrs"`.

### 无上下文的 VNodes

由于没有了上下文, 我们不能再通过 字符串(如: `h('some-component')`) 查找全局组件和指令了, 现在需要用到一些导入的 API: 

``` js
import { h, resolveComponent, resolveDirective, withDirectives } from 'vue'

export default {
  render() {
    const comp = resolveComponent('some-global-comp')
    const fooDir = resolveDirective('foo')
    const barDir = resolveDirective('bar')

    // <some-global-comp v-foo="x" v-bar="y" />
    return withDirectives(
      h(comp),
      [fooDir, this.x],
      [barDir, this.y]
    )
  }
}
```

这将主要用于编译器生成的输出中, 因为手写 render 函数通常直接引入组件和指令来使用.

## 缺点

### Vue 核心依赖

需要导入 `h` 就意味着 Vue 组件库需要在某个地方 `import { h } from 'vue'` (模板编译成的 render 函数也一样会隐式导入). 这会造成一些开销, 因为库作者需要构建时正确处理 Vue 的外部化: 

- Vue 不应该打包进库中
- 对于 ES 模块 版本, 应该放开导入并交由用户来处理最终打包
- 对于 UMD / 浏览器 版本, 应该先尝试全局的 `Vue.h` 并回退到调用 `require`

这是 React 库的常见做法, 可以在 webpack 和 Rollup 中使用. 大多数 Vue 库也是这样. 我们只需要提供正确的文档和工具支持. 

## 备选方案

没有

## 升级策略

- 对于模板用户没有任何影响
- 对于 JSX 用户影响很小, 但我们需要重构 JSX 插件
- 使用 `h` 手写渲染函数的用户会面临较大的迁移成本, 这部分用户占比应该较小, 不过我们会提供一个体面的迁移方式: 
  - 可以提供一个兼容插件来还原 render 函数并传入 2.x 的参数, 且可以在逐个迁移后在组件内关闭兼容插件. 
  - 还可以提供一个自动将 `h` 函数转换成新的 VNode 数据格式的 codemod, 因为这部分代码比较机械化. 
- 使用上下文的函数式组件可能必须手动迁移, 不过也可以提供类似的适配器

## 未解决的问题

### 更细化的绑定类型的应急方案

用了扁平的 VNode 数据结构后, 每一个属性的处理就变得有点不那么直观了. 这也会导致一些问题 - 例如: 如何设置一个不是 DOM 节点提供的属性, 或者监听一个含有大写字符的自定义元素上的事件 ?

我们可能会通过前缀来支持更细化的绑定类型: 

``` js
h('div', {
  'attr:id': 'foo',
  'prop:__someCustomProperty__': { /*... */ },
  'on:SomeEvent': e => { /* ... */ }
})
```

这就相当于 2.x 通过 `attrs`, `domProps` 和 `on` 进行嵌套. 只不过需要我们对每个 patch 的属性进行额外的检查, 为了这么一个小众的使用场景消耗一定的性能成本. 我们也想找到一种更好的方法来解决这个问题. 
