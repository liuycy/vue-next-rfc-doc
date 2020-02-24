---
sidebar: auto
---

# Composition API RFC

- 开始日期: 2019-07-10
- 目标版本: 2.x / 3.x
- 参考 Issues: [#42](https://github.com/vuejs/rfcs/pull/42)
- 实现 PR: (留空)

> 由于英文水平有限, 每次看[原文](https://vue-composition-api-rfc.netlify.com/)都比较费劲, 所以参考[尤雨溪在知乎上的翻译](https://zhuanlan.zhihu.com/p/68477600)简单翻译成中文, 方便下次阅读. 
> 内容上基本与原文一致, 部分内容照搬知乎上的翻译, 如果你在阅读时觉得哪里读起来不太顺畅, 欢迎在 [issues](https://github.com/liuycy/vue-next-rfc-doc/issues) 中讨论. 


## 概要

**Composition API** 简介: 一套允许灵活组合组件逻辑的附加的 API 函数. 

## 基本用例

```vue
<template>
  <button @click="increment">
    Count is: {{ state.count }}, double is: {{ state.double }}
  </button>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })

    function increment() {
      state.count++
    }

    return {
      state,
      increment
    }
  }
}
</script>
```

## 动机

### 逻辑复用 & 代码组织

Vue 容易上手, 方便构建中小型应用. 随着用户增长, 人们开始用 Vue 构建大型应用(多人合作长期迭代维护的那种). Vue 现有的 API 的限制会带来很多问题, 大致可以分为两类: 

1. 随着功能的迭代, 组件越来越复杂且难以读懂, 尤其是当你读别人写的代码时. 根本原因就是 Vue 现有 API 要求你使用选项来组织代码, 但有时根据逻辑关系组织代码更有意义

2. 缺少一种干净且无成本的机制来抽离和复用多个组件间的逻辑. (详见[逻辑提取和复用](#逻辑提取和复用))

RFC 中提出的 API 为用户组织代码提供更大的灵活性. 现在的 API 可以按功能将代码组织成函数片段, 不再要求写在选项里了, 而且让组件间或组件外的逻辑更容易抽离和复用. 
具体实现请看[设计细节](#设计细节)

### 更好的类型推断

在开发大型应用时, 开发者的另一个常见需求是支持 TypeScript. Vue 与 TypeScript 集成有点困难, 只要是因为 `this` 在 Vue 组件中比普通 JavaScript 多了一些属性 
(例如: 在 `methods` 选项中定义的函数里 `this` 指向的是 Vue 组件实例, 而不是 `methods` 这个对象). 换言之, Vue 在设计之初没有考虑到类型推断, 导致现在与 TypeScript 结合很困难. 

现在大多数使用 TypeScript 写 Vue 的用户都在使用 `vue-class-component` 库, 一个使用 TypeScript Class (结合 decorators) 来定义组件的库. 
在设计 3.0 之初, 我们原本打算提供一个内置 Class API 来更好地解决类型问题(详见[之前的 RFC(已废弃)](https://github.com/vuejs/rfcs/pull/17)). 
但当我们讨论并迭代设计时, 发现使用 Class API 必须依赖 decorators (这是一个非常不稳定的 `stage 2` 提案, 在实现细节上仍有许多不确定性), 这会很冒险. 
(更多细节请看[Class API 的类型问题](#class-api-的类型问题)). 

相比之下, 这个 RFC 提出的 API 基本上使用的都是本身就类型友好的普通变量和函数, 使用这些 API 几乎不需要手写类型提示就能享受到完整的类型推断. 
也就是说, 这些 API 用 TypeScript 或 JavaScript 写看起来都基本是一样的, 所以即使是非 TypeScript 用户也能从 IDE 自带的类型提示中受益. 

## 设计细节

### API 简介

这里提出的 API 没有引入新概念, 而是将 Vue 的核心功能(如: 创建和监听响应式属性)作为独立的函数暴露出来. 
我们将介绍最基本的几个 API 以及如何使用它们代替 2.x 的选项. 注意本节主要介绍基本概念, 详细完整的 API 请查看[API Reference](/API)

#### 响应式属性和副作用

从简单的任务开始: 声明一些响应式属性

```js
import { reactive } from 'vue'

// 响应式属性
const state = reactive({
  count: 0
})
```

`reactive` 相当于 2.x 的 `Vue.observable()`, 为防止与 RxJS 的 observables 冲突就改名叫 `reactive` 了. 
这个函数返回的是一个 Vue 用户都相当熟悉的响应式对象. 

响应式属性最基本的用途就是在 Vue 渲染期间使用它, 由于依赖跟踪, 视图会在响应式属性改变时自动更新. 
在 DOM 中渲染一些东西可以被视为一种"副作用"(程序在修改程序外部的状态). 
要根据响应式属性来触发和重新触发一种副作用的话, 我们需要用到 `watch` API: 

```js
import { reactive, watch } from 'vue'

const state = reactive({
  count: 0
})

watch(() => {
  document.body.innerHTML = `count is ${state.count}`
})
```

`watch` 需要传入一个回调函数来触发副作用(在上例中, 设置 `innerHTML` 为副作用). 
回调函数会立即被调用, 并将所有它用到的响应式属性作为依赖跟踪. 在上例中, `state.count` 会在回调函数调用后被作为依赖跟踪. 
将来 `state.count` 发生改变时, 回调函数会被再次调用. 

这就是 Vue 响应式系统的基本原理. 当你在组件的 `data()` 返回一个对象时, 在内部会调用 `reactive()` 将它变成响应式的. 
使用这些响应式属性的模板会被编译成 render 函数 (可以认为是更高效的 `innerHTML`)

继续上面这个例子, 我们加上处理用户输入的逻辑: 

```js
function increment() {
  state.count++
}

document.body.addEventListener('click', increment)
```

不过利用 Vue 的模板系统, 我们不必手写 innerHTML 或 事件监听的处理函数, 我们先用伪代码 `renderTemplate` 来简化一下例子, 把心思放在响应式这块: 

```js
import { reactive, watch } from 'vue'

const state = reactive({
  count: 0
})

function increment() {
  state.count++
}

const renderContext = {
  state,
  increment
}

watch(() => {
  // 伪代码, 不是真实 API
  renderTemplate(
    `<button @click="increment">{{ state.count }}</button>`,
    renderContext
  )
})
```

#### 计算属性和 Refs

有时我们需要一个随其他状态变化而变化的属性 - 在 Vue 中, 这是通过 *计算属性* 来实现的. 
我们现在可以使用 `computed` API 来直接创建一个计算属性: 

```js
import { reactive, computed } from 'vue'

const state = reactive({
  count: 0
})

const double = computed(() => state.count * 2)
```

上例中 `computed` 会返回什么 ? 我们猜猜看 `computed` 的内部逻辑, 可能是下面这样的: 

```js
// 简化版的伪代码
function computed(getter) {
  let value
  watch(() => {
    value = getter()
  })
  return value
}
```

但我们知道上面这代码是行不通的: 如果 `value` 是一个原始类型(如 `number`), 那么它跟 `computed` 内部更新逻辑之间的联系会在函数返回时丢失. 
因为 JavaScript 的原始类型是通过值传递的, 不是引用: 

![](https://www.mathwarehouse.com/programming/images/pass-by-reference-vs-pass-by-value-animation.gif)

将值作为对象的属性再返回这个对象也是一样的, 没有用. 在函数返回时, 这些做法都不能保持这个值的响应式. 为了确保能始终拿到最新的值, 我们需要将值包装进一个对象中, 然后返回这个对象: 

```js
// 简化版的伪代码
function computed(getter) {
  const ref = {
    value: null
  }
  watch(() => {
    ref.value = getter()
  })
  return ref
}
```

此外, 我们还需要拦截返回对象的 `.value` 属性的 读/写 操作来执行依赖跟踪和更新通知(为了简化, 例子中省略了这些代码). 
现在我们通过引用来传递计算之后的值了, 不用再担心丢失响应性了. 代价就是我们需要通过 `.value` 来访问最新的值: 

```js
const double = computed(() => state.count * 2)

watch(() => {
  console.log(double.value)
}) // -> 0

state.count++ // -> 2
```

在上例中, 我们将 `double` 称为 `ref` 对象, 因为它是内部值的响应式引用. 

> 想必你已经知道 Vue 中早就有 "refs" 的概念了, 但仅用于模板引用 DOM 节点或组件实例. 
> 点击[这里](/API.html#template-refs)了解新的 refs 系统是如何同时被用于逻辑属性和模板引用的. 

除了 computed ref, 我们还可以用 `ref` API 直接创建一个普通的可变 ref: 

```js
const count = ref(0)
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
```

#### Ref 展开

::: v-pre
我们可以将 ref 暴露到 render 上下文中. Vue 内部会对 ref 做特殊处理, 以便 render 上下文能直接拿到 ref 的内部值. 
也就是说, 在模板中我们可以直接写 `{{ count }}`, 不需要写 `{{ count.value }}`了. 
:::

我们稍微改一下之前的 counter 的例子, 用 ref 代替 reactive: 

```js
import { ref, watch } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

const renderContext = {
  count,
  increment
}

watch(() => {
  renderTemplate(
    `<button @click="increment">{{ count }}</button>`,
    renderContext
  )
})
```

另外, 当一个 ref 作为属性嵌套在一个 reactive 对象中, 它也会自动展开: 

```js
const state = reactive({
  count: 0,
  double: computed(() => state.count * 2)
})

// 不需要使用 `state.double.value`
console.log(state.double)
```

#### 在组件中使用

到目前为止, 我们的 UI 代码可以根据用户的输入进行更新了 - 不过代码并不能复用. 
如果我们想复用代码逻辑, 下一步应该将其重构成一个函数: 

```js
import { reactive, computed, watch } from 'vue'

function setup() {
  const state = reactive({
    count: 0,
    double: computed(() => state.count * 2)
  })

  function increment() {
    state.count++
  }

  return {
    state,
    increment
  }
}

const renderContext = setup()

watch(() => {
  renderTemplate(
    `<button @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }}
    </button>`,
    renderContext
  )
})
```

> 注意上例中的代码并没有依赖组件示例. 实际上, 目前为止介绍的所有 API 都可以脱离组件实例直接使用, 这样可以在更多场景下使用 Vue 的响应式系统. 

现在我们将 调用 `setup()`、创建监听函数 和 渲染模板 的任务交给框架, 只用 `setup()` 和 模板 来定义一个组件: 

```vue
<template>
  <button @click="increment">
    Count is: {{ state.count }}, double is: {{ state.double }}
  </button>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })

    function increment() {
      state.count++
    }

    return {
      state,
      increment
    }
  }
}
</script>
```

这是我们熟悉的单文件组件, 只有逻辑部分(`<script>`)和以前不太一样, 模板语法和以前一样, `<style>`省略了, 但也和以前一样. 

#### 生命周期钩子

到目前为止, 我们已经介绍了组件的纯状态部分: 响应式属性、计算属性和用户输入相关的属性变化. 
但是组件可能还要处理副作用 - 例如: 打印到控制台、发送 ajax 请求 或 在 `window` 上设置一个监听事件. 
这些副作用通常在以下时刻发生: 

- 某些属性改变时
- 组件`mounted`、`updated`或`unmounted`时(生命周期钩子)

我们已经知道可以使用 `watch` API 来触发属性改变时的副作用了. 
至于生命周期钩子中的副作用, 我们可以用 `onXXX` API (对应现有的生命周期选项) 来触发: 

```js
import { onMounted } from 'vue'

export default {
  setup() {
    onMounted(() => {
      console.log('component is mounted!')
    })
  }
}
```

这些生命周期注册函数只能在 `setup` 内使用, 它会利用内部全局属性自动找出正在调用 `setup` 的当前组件实例. 
这样设计是为了减少将逻辑提取到外部函数时的摩擦. 

> 关于 API 的更多细节请查看[API Reference](/API), 不过我们建议你先看完下面的内容. 

### 代码组织

至此, 我们已经用导入的函数取代了组件 API, 为了什么呢? 用选项定义组件似乎要比将所有功能混合在一起更有组织性!

咋一看确实如此. 但正如动机部分所述, 我们认为 Composition API 实际上可以更好地组织代码, 尤其是在复杂的组件中. 我们现在来解释为什么. 

#### 什么是"有组织的代码"
我们回想一下到底什么才是"有组织的代码". 编写有组织的代码的目的就是让代码更容易阅读和理解. 
要如何才能做到"理解"代码? 仅凭组件中包含了哪些选项就能说我们"理解"它了吗? 
你有看过其他开发者写的大型组件吗(比如[这个](https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-ui/src/components/folder/FolderExplorer.vue#L198-L404)), 看懂了吗?

想想你要怎么跟你的同事梳理类似上面链接中的大型组件的逻辑. 你很可能会从"这个组件会处理 X, Y 和 Z"说起, 而不是"这个组件有哪些数据, 计算属性和方法". 
在理解组件时, 我们更在意"组件试图做什么"(即代码背后的意图), 而不是"这个组件用了哪些选项". 基于选项的 API 自然可以回答后者, 但却很难解释前者.

#### 逻辑关注点 vs 选项类型
我们将组件处理的"X, Y 和 Z"定义为**逻辑关注点**. 小型单一的组件通常不存在可读性问题, 因为整个组件就处理一个关注点. 
但在高级点的使用场景下这个问题就会变得很突出, 比如[Vue CLI UI file explorer](https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-ui/src/components/folder/FolderExplorer.vue#L198-L404)
这个组件, 需要处理许多不同的逻辑关注点: 
- 跟踪当前文件夹状态
- 处理文件夹导航(打开, 关闭, 刷新...)
- 处理新文件夹的创建
- 是否只显示收藏夹
- 是否显示隐藏文件夹
- 处理当前工作目录的修改

如果你在阅读基于选项 API 的代码, 你肯定很难立刻找出并区分这些逻辑关注点. 你会看到同一个功能被拆的到处都是, "创建新文件夹"功能用了两个数据属性，一个计算属性和一个方法, 而且方法定义在属性下面一百多行的地方. 
如果我们用颜色标记一下同一个功能, 你就会发现它们非常分散: 

<div style="text-align: center;">
  <img src="https://user-images.githubusercontent.com/499550/62783021-7ce24400-ba89-11e9-9dd3-36f4f6b1fae2.png">
</div>

这样会导致复杂的组件变得很难理解和维护, 选项把逻辑强制拆分. 通过选项强行拆分会导致逻辑关注点变得模糊, 而且我们在处理同一个功能时, 需要在不同的选项间跳来跳去. 
> 注意: 提供的这个例子是截至我们编写这篇文章为止的最新代码, 没有任何修改, 源代码现在可能会有些许的改动. 

是时候表演真正的技术啦, 现在我们用 `Composition API` 来改写这个例子中的"新建文件夹"功能: 
```js
function useCreateFolder (openFolder) {
  // 原本在 data() 里面定义的属性
  const showNewFolder = ref(false)
  const newFolderName = ref('')

  // 原本在 computed 里面定义的计算属性
  const newFolderValid = computed(() => isValidMultiName(newFolderName.value))

  // 原本在 method 里面定义的方法
  async function createFolder () {
    if (!newFolderValid.value) return
    const result = await mutate({
      mutation: FOLDER_CREATE,
      variables: {
        name: newFolderName.value
      }
    })
    openFolder(result.data.folderCreate.path)
    newFolderName.value = ''
    showNewFolder.value = false
  }

  return {
    showNewFolder,
    newFolderName,
    newFolderValid,
    createFolder
  }
}
```

现在新建文件夹的功能全部写在一个函数里, 从函数名称就能看出这个函数是做什么的, 这就是我们说的**组合函数**. 
建议定义组合函数时函数名用`use`开头, 以此类推我们可以把各个逻辑关注点改成组合函数. 
<div style="text-align=center;">
  <img src="https://user-images.githubusercontent.com/499550/62783026-810e6180-ba89-11e9-8774-e7771c8095d6.png">
</div>

> 上图中不包含 `import`语句 和 `setup()`函数, 改造后的完整代码可以查看[这里](https://gist.github.com/yyx990803/8854f8f6a97631576c14b63c8acd8f2e)

每个逻辑关注点都写到一个函数里了, 可以不用再跳来跳去了. 组合函数再编辑器里还能折叠起来方便浏览: 
```js
export default {
  setup() { // ...
  }
}

function useCurrentFolderData(networkState) { // ...
}

function useFolderNavigation({ networkState, currentFolderData }) { // ...
}

function useFavoriteFolder(currentFolderData) { // ...
}

function useHiddenFolders() { // ...
}

function useCreateFolder(openFolder) { // ...
}
```

`setup()`函数是所有组合函数的入口点: 
```js
export default {
  setup () {
    // 网络相关
    const { networkState } = useNetworkState()

    // 文件夹相关
    const { folders, currentFolderData } = useCurrentFolderData(networkState)
    const folderNavigation = useFolderNavigation({ networkState, currentFolderData })
    const { favoriteFolders, toggleFavorite } = useFavoriteFolders(currentFolderData)
    const { showHiddenFolders } = useHiddenFolders()
    const createFolder = useCreateFolder(folderNavigation.openFolder)

    // 当前工作目录相关
    resetCwdOnLeave()
    const { updateOnCwdChanged } = useCwdUtils()

    // 工具函数
    const { slicePath } = usePathUtils()

    return {
      networkState,
      folders,
      currentFolderData,
      folderNavigation,
      favoriteFolders,
      toggleFavorite,
      showHiddenFolders,
      createFolder,
      updateOnCwdChanged,
      slicePath
    }
  }
}
```

没错, 用选项 API 的话不用写那么多, 但是`setup()`函数读起来就像这个组件试图做什么——选项 API 读起来就没有这种感觉. 
通过参数传递, 你会很清楚组合函数之间的关系. 还有, `return`语句是唯一可以检查函数暴露了什么参数给模板的地方.

同一个功能, 可以用 `选项 API` 也可以用 `组合函数 API`, 选项 API 更具强制性, 而组合API 更关注逻辑. 

### 逻辑提取和复用
在组件间提取和复用逻辑的话, 组合 API 非常灵活好用. 不需要再依赖神奇的`this`上下文, 它只依赖传入的参数和全局的 Vue API. 
你可以把任何你想复用的组件逻辑导出为一个函数. 你甚至可以导出整个`setup()`来实现`extend`的功能. 

举个例子: 实现跟踪鼠标的位置
```js
import { ref, onMounted, onUnmounted } from 'vue'

export function useMousePosition() {
  const x = ref(0)
  const y = ref(0)

  function update(e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return { x, y }
}
```
组件可以导入这个函数: 
```js
import { useMousePosition } from './mouse'

export default {
  setup() {
    const { x, y } = useMousePosition()
    // 其它逻辑 .. 
    return { x, y }
  }
}
```

在文件夹的例子中, 我们提取了一些通用的代码(比如: `usePathUtils` 和 `useCwdUtils`)到外部文件中, 因为在其它文件也能用到. 
其实用 `mixins`, `高阶组件`或`无渲染组件(通过插槽)`也能实现逻辑复用, 网上有很多教程这里不再赘述了. 但与组合函数相比, 这些方法都有各自的缺点: 
- 渲染上下文中的属性来源不明确. 例如: 使用了多个`mixins`的组件在渲染模板时, 很难分清某个属性是从哪个`mixins`注入的
- 命名空间冲突. `mixins`可能会有属性名或方法名的冲突, 高阶组件可能会有 props 名的冲突
- 性能. 高阶组件和无渲染组件需要创建一个有状态的组件, 这会造成性能损失
相比之下, 使用组合 API :
- 暴露给模板的属性来源清晰, 因为都是来自组合函数的
- 不存在命名空间的冲突, 组合函数的返回值可以随便重命名
- 复用逻辑不用创建不必要的组件

### 与现有 API 一起使用
组合 API 可以与现有的 API 一起使用. 
- 组合 API 会比 2.x 的选项(`data`, `computed` 和 `methods`)先解析完, 所以在组合 API 内访问不到选项定义的属性和方法. 
- `setup()` retrun 的属性会暴露在 `this` 上, 选项 API 可以访问. 

### 插件开发
许多插件会将属性注入到`this`上. 例如: Vue Router 会注入`this.$route`和`this.$router`, Vuex 会注入`this.$route`. 
这就让类型推断变得很棘手, 因为每一个插件都要为注入的属性添加类型到 Vue. 

当你使用组合 API 时, 没有`this`了, 插件可以通过内部调用 [`provide` & `inject`](API.html#provide-inject) 提供组合函数, 举个例子: 

```js
const StoreSymbol = Symbol()

export function provideStore(store) {
  provide(StoreSymbol, store)
}

export function useStore() {
  const store = inject(StoreSymbol)
  if (!store) {
    // 这里可以报错, 没有获取到 store
  }
  return store
}
```

在业务代码中: 

```js
// 在根组件中提供 store
//
const App = {
  setup() {
    provideStore(store)
  }
}

const Child = {
  setup() {
    const store = useStore()
    // 在这里使用 store
  }
}
```

注意, `store` 也可以通过 app 级别的 全局 API 提供, 但在业务代码中 `useStore` 内的代码不需要改变. 

## 缺点

### 引入 Refs 的开销

严格来说, Ref 是该提案引入的唯一一个新概念. 它的引入是为了不依赖 `this` 传递响应式参数. 缺点就是: 

1. 使用 Composition API 时, 需要区分 ref 和 普通对象, 这会增加精神负担.   
   使用约定的命名(像 `xxxRef`) 或者类型系统可以减少区分的精神负担. 
   另一方面, 随着组织代码的灵活性的提高, 组件逻辑可以拆分成小块函数中, 这些函数的上下文很简单而且 refs 的开销很容易控制. 

2. 需要通过 `.value` 来访问和修改 refs, 比起普通值使用起来更麻烦.   
   有人提议使用编译时语法糖(类似 Svelte 3)来解决这个问题. 按理说确实可以, 但我们认为 Vue 默认支持这种语法糖没有意义(详见[对比 Svelte](#对比-svelte)). 
   不过理论上用户可以自己造一个 Babel 插件来支持这个. 

我们也讨论过是否可以完全避免 Ref 概念来使用 响应式对象. 但是: 

- 计算属性的回调函数可以返回原始类型, 所以类似 Ref 的容器时不能避免的
- 为了响应式功能, Composition 函数在传入或导出原始类型时也需要将值包装进一个对象中. 如果框架没有提出一个标准实现, 用户最终也会发明出自己的 Ref 实现. 

### Ref vs. Reactive

用户可能会在 使用 Ref 还是 Reactive 这个问题上感到困惑. 首先你需要了解这两个 API 才能有效地利用 Composition API. 
单单只用任意一个都可能让你写出晦涩难懂的代码或重复地造轮子. 

`ref` 和 `reactive` 的使用区别, 可以用 JavaScript 来类比: 

```js
// 第一种: 拆分变量
let x = 0
let y = 0

function updatePosition(e) {
  x = e.pageX
  y = e.pageY
}

// --- 对比 ---

// 第二种: 整个对象
const pos = {
  x: 0,
  y: 0
}

function updatePosition(e) {
  pos.x = e.pageX
  pos.y = e.pageY
}
```

- 如果使用 `ref`, 就会像上例中第一种那样比较冗长
- 如果使用 `reactive`, 就会像上例中第二种那样

如果只用 `reactive`, 为了保持响应式, 代码中的 Composition 函数就必须始终返回响应式对象的引用. 
而且这个对象不能解构或展开: 

```js
// Composition 函数
function useMousePosition() {
  const pos = reactive({
    x: 0,
    y: 0
  })

  // ...
  return pos
}

// 组件代码
export default {
  setup() {
    // 这样会丢失响应式
    const { x, y } = useMousePosition()
    return {
      x,
      y
    }

    // 这样会丢失响应式
    return {
      ...useMousePosition()
    }

    // 只有这样才能保持响应式
    // 你必须原样返回 `pos`, 在模板中使用 `pos.x` 和 `pos.y` 来引用 `x` 和 `y`
    return {
      pos: useMousePosition()
    }
  }
}
```

使用 `toRefs` API 可以解除这种限制 - 它会将 响应式对象中的每一个属性转换成对应的 ref: 

```js
function useMousePosition() {
  const pos = reactive({
    x: 0,
    y: 0
  })

  // ...
  return toRefs(pos)
}

// x 和 y 现在是 ref 了
const { x, y } = useMousePosition()
```

总而言之, 有两种定义变量的风格: 

1. 你可以像定义普通 JavaScript 变量那样使用 `ref` 和 `reactive`, 使用这种风格的话建议开启 IDE 的类型提示
2. 你可以尽可能的使用 `reactive`, 但在从 Composition 函数中返回对象时使用`toRefs`转换一下. 这能减少区分变量的精神负担, 但并不意味着你不需要熟悉 ref 的概念. 

我们认为此阶段给出使用 `ref` 和 `reactive` 的最佳实践还为时尚早. 我们建议你从上面两种风格中选一个合你心意的. 
我们会收集用户的反馈, 并最终提供相关的明确指导. 

### 冗长的返回语句

有人会担心 `setup()`中的 return 语句太过冗长会像样板文件一样. 

我们认为明确的返回语句有利于可维护性. 这能让我们显式的控制暴露给模板的内容, 并提供一个模板定义属性的入口位置. 

也有一些建议说可以自动暴露 `setup()` 中定义的属性, 这样就可以省略 return 语句了. 同样, 我们认为 Vue 不该默认支持这种功能, 而且这也违背了标准 JavaScript 的直觉. 
不过有一些方法可以使用户不那么繁琐: 

- 基于 `setup()` 中定义的变量自动生成返回语句的 IDE 插件
- 隐式生成返回语句的 Babel 插件

### 灵活性带来的制约需求

很多用户认为 Composition API 提供了更大的灵活性, 也要指定一些制约引导用户写"正确的代码". 有人担心 Composition API 会让初学者写出面条代码. 
换言之, Composition API 提高了代码质量的上限, 同时也拉低了下限. 

我们在一定程度上同意部分观点, 但我们相信: 

1. 上限的收益远大于下限的损失
2. 通过社区和文档的引导, 我们可以有效地解决代码组织的问题

有人拿 Angular 1 的控制器举例, 认为糟糕的设计会导致糟糕的代码. 但 Composition API 和 Angular 1 控制器最大的区别就是
Composition API 并不依赖于共享作用域的上下文. 这样可以将逻辑更容易拆分成独立的函数, 这也是 JavaScript 组织代码的核心机制. 

任何 JavaScript 代码都是从入口函数开始的(可以认为是程序的`setup()`). 我们根据逻辑关注点将代码分为函数和模块. 
**Composition API 同样也可以拆分组件**. 换言之, 你 JavaScript 写得6, Composition API 你就能写得6. 

## 采用策略

Composition API 是纯增量代码, 不会影响/弃用任何 2.x 现有的 API. 
现在可以通过[`@vue/composition 库`](https://github.com/vuejs/composition-api/)在 2.x 上体验 Composition API 了. 
这个库主要是为了提供实验性 API 并收集用户反馈, 当前实现是此提案的最新版本, 但由于插件技术的限制, 可能会有些不一致的地方. 
随着该提案的更新, 这个库可能会有破坏性的更新, 因此我们不建议在生产代码中使用它. 

我们打算在 3.0 中内置 Composition API, 并且可以和 2.x 的选项同时使用. 

对于那些只想使用 Composition API 的用户, 我们可以提供可选的编译时选项来删掉 2.x 的选项代码, 这样可以减少打包后代码的体积. 

Composition API 的定位是高级特性, 因为旨在解决大型应用出现的各种问题. 我们不会重写文档强推 Composition API 作为首选, 而是在现有文档中新增独立章节来介绍它. 

## 附录

### Class API 的类型问题

Class API 提案的主要目的是寻找一个能够提供更好的 TypeScript 支持的组件声明方式. 但是由于 Vue 需要将来自多个选项的属性混合到同一个渲染上下文上, 这使得即使用了 Class, 要得到良好的类型推导也不是很容易. 

以 props 的类型推导为例. 要将 props 的类型 merge 到 class 的 this 上, 我们有两个选择: 用 class 的泛型参数, 或是用 decorator. 

这是用泛型参数的例子: 

```ts
interface Props {
  message: string
}

class App extends Component<Props> {
  static props = {
    message: String
  }
}
```

由于泛型参数是纯类型层面的, 所以我们还需要额外地进行一次运行时的 props 选项声明来获得正确的行为. 这就导致需要进行双重声明. 

使用 decorator 的例子如下: 

```ts
class App extends Component<Props> {
  @prop message: string
}
```

Decorators 存在如下问题: 

- ES 的 decorator 提案仍然在 stage-2 且极其不稳定. 过去一年内已经经历了两次彻底大改, 且和 TS 现有的实现已经完全脱节. 现在引入一个基于 TS decorator 实现的 API 风险太大. 
- Decorator 只能声明 class `this` 上的属性, 却无法将某一类 decorator 声明的属性归并到一个对象上(比如 `$props`), 这就导致 `this.$props` 无法被推导, 且影响 TSX 的使用. 
- 用户很可能会觉得可以用 `@prop message: string = 'foo'` 这样的写法去声明默认值, 但事实上技术层面无法做到符合语义的实现. 

最后, class 还有一个问题, 那就是目前 class method 不支持参数的 contextual typing, 也就是说我们无法基于 class 本身的 fields 来推导某个 method 的参数类型, 需要用户自己去声明

### 对比 React Hooks

这里提出的 API 和 React Hooks 有一定的相似性, 具有同等的基于函数抽取和复用逻辑的能力, 但也有很本质的区别. 
React Hooks 在每次组件渲染时都会调用, 通过隐式地将状态挂载在当前的内部组件节点上, 在下一次渲染时根据调用顺序取出. 
而 Vue 的 setup() 每个组件实例只会在初始化时调用一次 , 状态通过引用储存在 setup() 的闭包内. 这意味着基于 Vue 的函数 API 的代码: 

- 整体上更符合 JavaScript 的直觉; 
- 不受调用顺序的限制, 可以有条件地被调用; 
- 不会在后续更新时不断产生大量的内联函数而影响引擎优化或是导致 GC 压力; 
- 不需要总是使用 `useCallback` 来缓存传给子组件的回调以防止过度更新; 
- 不需要担心传了错误的依赖数组给 `useEffect/useMemo/useCallback` 从而导致回调中使用了过期的值 —— Vue 的依赖追踪是全自动的. 

> 注: React Hooks 的开创性毋庸置疑, 也是本提案的灵感来源. 
> Hooks 代码和 JSX 并置使得对值的使用更简洁也是其优点, 但其设计确实存在上述问题, 而 Vue 的响应式系统恰巧能够让我们绕过这些问题. 

### 对比 Svelte

Composition API 和 Svelte 3 的依赖编译器的方法在概念上有着异曲同工之妙. 搞个简单的对比例子感受一下: 

#### Vue

```vue
<script>
import { ref, watch, onMounted } from 'vue'

export default {
  setup() {
    const count = ref(0)

    function increment() {
      count.value++
    }

    watch(() => console.log(count.value))

    onMounted(() => console.log('mounted!'))

    return {
      count,
      increment
    }
  }
}
</script>
```

#### Svelte 

```html
<script>
import { onMount } from 'svelte'

let count = 0

function increment() {
  count++
}

$: console.log(count)

onMount(() => console.log('mounted!'))
</script>
```

Svelte 的代码看起来更简洁, 是因为他在编译时执行了以下操作: 

- 将整个 `<script>` 的内容(除了 import 语句)隐式地包装进一个函数, 每个组件实例都会调用这个函数(不止执行一次)
- 隐式地注册变量改变时的响应式处理
- 隐式地将作用域内的变量暴露到 render 上下文
- 将 `$` 语句编译为可重复执行的代码

理论上, Vue 也可以做同样的处理(或者通过 Babel 插件), 我们不做是因为要和标准的 JavaScript 保持一致. 
如果你从 Vue 文件的 `<script>` 块中提取代码, 我们希望它能和标准的 ES 模块表现一致. 
Svelte 的 `<script>` 块理论上来说已经不是标准的 JavaScript 代码了, 这种依赖编译器的方法会有一些问题: 

1. 代码在 编译过/没编译过 的情况下表现得不一样. 作为一个渐进式的框架, 用户也许 希望/需要/必须 不用构建就能使用 Vue, 所以编译不是默认选项. 
   而 Svelte 的定位就是一个编译器, 所有只能通过编译后代码才能运行. 两者有各自的取舍. 

2. 代码在组件 内部/外部 表现得不一样. 当试图将 Svelte 组件内的代码抽离到标准的 JavaScript 文件中, 我们将失去神奇的简洁语法, 用回[冗长的底层 API](https://svelte.dev/docs#svelte_store)

3. Svelte 的响应式编译只适用于顶层变量. 它不作用与函数内定义的变量, 所以我们[不能将响应式属性封装进组件内的函数中](https://svelte.dev/repl/4b000d682c0548e79697ddffaeb757a3?version=3.6.2). 
   这会给使用函数来组织代码带来不小的限制 - 我们在这个 RFC 中证明过, 大型组件的可维护性是很重要的. 

4. [非标准语义在与 TypeScript 集成时会有问题](https://github.com/sveltejs/svelte/issues/1639)

这并不是说 Svelte 3 不好, 实际上这是一个十分创新的方法, 我们很尊重作者的工作. 只不过基于 Vue 设计上的制约和目标, 我们必须做出不一样的取舍. 
