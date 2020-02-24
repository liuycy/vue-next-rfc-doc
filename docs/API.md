---
sidebar: auto
---

# API 文档

## `setup`

`setup` 函数是一个新的组件选项, 它是组件内部 Composition API 的入口函数.

### 调用时机

  创建组件时, `setup` 会在初始 `props` 解析完成后立即调用. 它会在生命周期 `beforeCreate` 之前被调用.

### 模板的用法

  `setup` 返回的对象中的属性会被绑定到模板的上下文中: 

  ```vue
  <template>
    <div>{{ count }} {{ object.foo }}</div>
  </template>

  <script>
  import { ref, reactive } from 'vue'

  export default {
    setup() {
      const count = ref(0)
      const object = reactive({ foo: 'bar' })

      // 暴露到模板中
      return {
        count,
        object
      }
    }
  }
  </script>
  ```

  注意: 返回的 refs 在模板中会自动展开, 所以不需要使用 `.value`

### Render 函数 / JSX 的用法

  `setup` 也可以返回一个 render 函数, 直接使用同一作用域中的响应式变量:  

  ```js
  import { h, ref, reactive } from 'vue'

  export default {
    setup() {
      const count = ref(0)
      const object = reactive({ foo: 'bar' })

      return () => h('div', [
        count.value,
        object.foo
      ])
    }
  }
  ```

### 参数

  函数的第一个参数是解析好的 props

  ```js
  export default {
    props: {
      name: String
    },
    setup(props) {
      console.log(props.name)
    }
  }
  ```

  注意: 这个 `props` 对象是响应式的, 即当新的 `props` 传入时, 它会更新并触发 `watch` 的监听回调: 

  ```js
  export default {
    props: {
      name: String
    },
    setup(props) {
      watch(() => {
        console.log(`name is: ` + props.name)
      })
    }
  }
  ```

  用户在开发时不可以修改 `props` 对象(如果你尝试修改控制台会有 warning 警告).

  第二个参数是 context 上下文对象, 它可以拿到 2.x 版本中挂载在 `this` 上的一些可选属性: 

  ```js
  const MyComponent = {
    setup(props, context) {
      context.attrs
      context.slots
      context.emit
    }
  }
  ```

  `attrs` 和 `slots` 是组件实例内部对应值的代理, 即使更新了也能拿到最新的值, 不用担心解构拿到过时的值: 

  ```js
  const MyComponent = {
    setup(props, { attrs }) {
      // 以后某个时刻可能会调用的函数
      function onClick() {
        console.log(attrs.foo) // 保证可以拿到最新的引用
      }
    }
  }
  ```

  为什么把 `props` 单独放到第一个参数, 而不是放在 `context` 里面呢: 
    - `props` 相比其他属性更常用, 很多时候一个组件可能只会用到 `props`
    - 把 `props` 单独拿出来可以更方便的声明它的类型, 这样不会搞混 `context` 其他属性的类型. 这样做还能不用改代码就在 `setup`, `render` 和 TSX 函数中直接使用.



### this 的用法

  在 `setup()` 函数内用不了 `this`, 因为 `setup()` 会在 2.x 版本所有选项解析完成之前调用.
  `this` (如果可用)会跟其他选项中的表现得完全不一样, `setup` 和其他选项一起用的时候, `this` 表现得不一样会让人很懵逼的. 
  另一个原因是, 新手经常会掉进这样一个陷阱: 

  ```js
  setup() {
    function onClick() {
      this // 不是你想得那个 `this`
    }
  }
  ```

### 类型定义
  ```ts
  interface Data {
    [key: string]: unknown
  }

  interface SetupContext {
    attrs: Data
    slots: Slots
    parent: ComponentInstance | null
    root: ComponentInstance
    emit: ((event: string, ...args: unknown[]) => void)
  }

  function setup(
    props: Data,
    context: SetupContext
  ): Data
  ```

  ::: tip   
  要获得传递给 `setup()` 的参数的类型推断, 需要使用 [defineComponent](#definecomponent)
  :::

## `reactive`

传入一个对象获取该对象得响应式代理, 相当于 2.x 版本的 `Vue.observable()` .
```js
const obj = reactive({ count: 0 })
```
它会深度遍历并将所有属性转换成响应式的, 它会返回一个 ES2015 的 `Proxy` 对象. 
建议只使用这个返回响应式代理对象, 不要对传入的原对象做任何操作.

### 类型定义
  ```ts
  function reactive<T extends object>(raw: T): T
  ```

## `ref`

传入一个值作为内部值并返回一个响应式且可变的 ref 对象. 这个 ref 对象只有一个指向内部值的属性 `value` .

```js
const count = ref(0)
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
```

如果传入的是一个对象作为内部值, 那么这个对象会先被 `reactive` 转换. 

### 在模板中使用
  
  在模板中使用一个 `setup()` 返回 `ref` 对象时, 它会自动展开, 不需要使用 `.value` 去访问它的内部值: 

  ```vue
  <template>
    <div>{{ count }}</div>
  </template>

  <script>
  export default {
    setup() {
      return {
        count: ref(0)
      }
    }
  }
  </script>
  ```

- **在响应式对象中使用**
  
  当一个 `ref` 对象作为响应式对象的属性被访问或修改时, 它也会自动展开: 

  ```js
  const count = ref(0)
  const state = reactive({
    count
  })

  console.log(state.count) // 0

  state.count = 1
  console.log(count.value) // 1
  ```

  注意, 如果将一个新的 ref 赋值给一个对象中的 ref 属性, 旧的会被替换掉: 

  ```js
  const otherCount = ref(2)

  state.count = otherCount
  console.log(state.count) // 2
  console.log(count.value) // 1
  ```

- **类型定义**
  
  ```ts
  interface Ref<T> {
    value: T
  }

  function ref<T>(value: T): Ref<T>
  ```

  有时候我们需要定义类型比较复杂的内部值, 我们可以利用泛型改写 ref 的默认类型: 

  ```ts
  const foo = ref<string | number>('foo') // foo 的类型是: Ref<string | number>

  foo.value = 123 // 不会报错
  ```

## `isRef`

检查一个值是否为 ref 对象. 当判断展开值时十分有用: 

```js
const unwrapped = isRef(foo) ? foo.value : foo
``` 

### 类型定义
  
  ```ts
  function isRef(value: any): value is Ref<any>
  ```

## `toRefs`

传入一个响应式对象, 返回所有属性被转换成 ref 对象的普通对象:

```js
const state = reactive({
  foo: 1,
  bar: 2
})

const stateAsRefs = toRefs(state)
/*
stateAsRefs 的类型如下:

{
  foo: Ref<number>,
  bar: Ref<number>
}
*/

// ref 对象 跟 原属性 "链接"
state.foo++
console.log(stateAsRefs.foo) // 2

stateAsRefs.foo.value++
console.log(state.foo) // 3
```

Composition 函数返回一个响应式对象时, `toRefs` 十分有用, 可以保证解构返回对象时不会丢失响应性: 

```js
function useFeatureX() {
  const state = reactive({
    foo: 1,
    bar: 2
  })

  // 省略 关于 state 的逻辑操作

  // 返回时 转换成 refs
  return toRefs(state)
}

export default {
  setup() {
    // 解构时 不会丢失响应性
    const { foo, bar } = useFeatureX()

    return {
      foo,
      bar
    }
  }
}
```

## `computed`

传入一个 getter 函数, 根据 getter 函数返回一个只读的 ref 对象. 

```js
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // 会报错
```

或者, 传入一个带有 `get` 和 `set` 方法的对象, 返回一个可写的 ref 对象.

```js
const count = ref(1)
const plusOne = computed({
  get: () => count.value + 1,
  set: val => { count.value = val - 1 }
})

plusOne.value = 1
console.log(count.value) // 0
```

### 类型定义
  
  ```ts
  // 只读
  function computed<T>(getter: () => T): Readonly<Ref<Readonly<T>>>

  // 可写
  function computed<T>(options: {
    get: () => T,
    set: (value: T) => void
  }): Ref<T>
  ```

## `readonly`

传入一个对象(reactive, ref 或 普通对象), 返回一个只读的响应式 Proxy 对象: 

```js
const original = reactive({ count: 0 })

const copy = readonly(original)

watch(() => {
  // 响应式的监听 没有问题
  console.log(copy.count)
})

// 改变 original 可以触发 copy 的监听回调
original.count++

// 改变 copy 会失败并抛出一个警告
copy.count++ // 警告!
```

## `watch`

### 基本用法

  在下一个 tick (参考[回调刷新时间](#回调刷新时间)) 执行一个回调函数, 并跟踪函数内的依赖变化, 当依赖发生变化时, 重新执行这个回调函数.

  ```js
  const count = ref(0)

  watch(() => console.log(count.value))
  // -> 打印 0

  setTimeout(() => {
    count.value++
    // -> 打印 1
  }, 100)
  ```

### 单个监听源
  
  有些时候我们想要: 

  - 触发回调的依赖更具体一些
  - 拿到依赖的之前状态的值

  我们可以这样使用 `watch` :

  ```js
  // 监听一个 getter 函数
  const state = reactive({ count: 0 })
  watch(() => state.count, (count, prevCount) => { /* ... */ })

  // 或 直接监听一个 ref
  const count = ref(0)
  watch(count, (count, prevCount) => { /* ... */ })
  ```

### 多个监听源
  
  一个 `getter函数` 或 `ref` 可以被视为一个可监听的`源`, 使用数组就可以同时监听多个`源`: 

  ```js
  watch([fooRef, barRef], ([foo, bar], [prevFoo, prevBar]) => {
    /* ... */
  })
  ```

### 停止监听

  在`setup()`调用`watch`函数时, 监听者会关联到组件的生命周期, 在组件卸载时监听者会自动停止监听. 

  其他情况下, 可以通过调用 `watch` 函数返回的 `stop` 函数手动停止监听: 

  ```js
  const stop = watch(() => { /* ... */ })

  // 停止监听
  stop()
  ```

### 清除副作用

  有些时候监听回调会执行一些异步的副作用, 当监听值发生改变时应该要阻止这些副作用. 
  所以监听者的回调函数可以接收一个参数, 这个参数是一个清理副作用的回调函数.
  当以下情况发生时, 清理回调会触发: 

  - 监听回调即将重新调用时
  - 停止监听时

  ```js
  // 普通用例中 清理回调会作为第一个参数传入
  watch(onCleanup => {
    const token = performAsyncOperation(id.value)
    onCleanup(() => {
      // id 改变时 或 停止监听时
      // 阻止之前的异步操作
      token.cancel()
    })
  })

  // 有监听源的用例中 清理回调会作为第三个参数传入
  watch(idRef, (id, oldId, onCleanup) => {
    const token = performAsyncOperation(id)
    onCleanup(() => {
      // id 改变时 或 停止监听时
      // 阻止之前的异步操作
      token.cancel()
    })
  })
  ```

  我们用传入的注册函数来注册清理函数, 而不是像 React 的 `useEffect` 那样直接返回一个清理函数, 
  是因为 watcher 回调的返回值在异步场景下有特殊作用. 我们经常需要在 watcher 的回调中用 async function 来执行异步操作: 

  ```js
  const data = ref(null)
  watch(getId, async (id) => {
    data.value = await fetchData(id)
  })
  ```

  我们知道 async function 隐性地返回一个 Promise - 这样的情况下, 我们是无法返回一个需要被立刻注册的清理函数的. 
  除此之外, 回调返回的 Promise 还会被 Vue 用于内部的异步错误处理.

### 回调刷新时间

  Vue 的响应式系统会缓存监听者的回调函数并异步地刷新它们, 这样可以避免同一个"tick"中多个状态改变导致的不必要的重复调用. 
  在内部, 组件的更新函数也是一个监听者回调. 当一个监听者回调进入队列时, 会在所有的组件 render 函数之后执行: 

  ```vue
  <template>
    <div>{{ count }}</div>
  </template>

  <script>
  export default {
    setup() {
      const count = ref(0)

      watch(() => {
        console.log(count.value)
      })

      return {
        count
      }
    }
  }
  </script>
  ```

  在上面这个例子中: 

  - count 不是立即同步打印
  - 在组件挂载之后, 回调函数会优先调用
  - 在 `count` 改变时, 回调函数会在组件更新之后调用

  经验法则: 当回调函数被调用时, 组件状态和 DOM 状态早已更新完毕. 

  如果想同步或在组件更新之前调用回调函数, 我们可以给`watch`传入一个带有 flush 选项(默认为`'post'`)的 option :

  ```js
  // 同步调用
  watch(() => { /* ... */ }, {
    flush: 'sync'
  })

  // 在组件更新前调用
  watch(() => { /* ... */ }, {
    flush: 'pre'
  })
  ```

### 延迟调用

  在 2.x 版本中, `this.$watch` 和 `watch 选项` 的默认行为就是延迟调用的: 它会先执行一下 getter 函数, 但只在依赖改变时触发回调函数. 
  这样就会导致在监听回调和生命周期(如 `mounted`)中出现一些重复的逻辑. 3.0 版本提供的 `watch` 与之相反, 默认不会延迟调用, 可以避免一些重复逻辑. 
  如果想要延迟调用可以给`watch`传入一个带有 lazy 选项的 option :

  ```js
  watch(
    () => state.foo,
    foo => console.log('foo is ' + foo),
    { lazy: true }
  )
  ```

  注意: lazy 只作用于 getter + callback 这种形式, 在只传入回调函数的形式中无效. 

### 调试

  给`watch`传入带有`onTrack`和`onTrigger`的 option 可以调试监听者的行为. 

  - 当 `reactive` 或 `ref` 被作为依赖跟踪时, `onTrack` 会被调用
  - 当依赖发生变化时, `onTrigger` 会被调用

  这俩的回调函数可以接收一个包含依赖项信息的 debugger event 对象, 可以在回调函数中写一个 `debugger` 语句用 Chrome Devtools 手动调试: 

  ```js
  watch(() => { /* ... */ }, {
    onTrigger(e) {
      debugger
    }
  })
  ```

  `onTrack` 和 `onTrigger` 只在开发模式下有效. 

### 类型定义

  ```ts
  type StopHandle = () => void

  type WatcherSource<T> = Ref<T> | (() => T)

  type MapSources<T> = {
    [K in keyof T]: T[K] extends WatcherSource<infer V> ? V : never
  }

  type InvalidationRegister = (invalidate: () => void) => void

  interface DebuggerEvent {
    effect: ReactiveEffect
    target: any
    type: OperationTypes
    key: string | symbol | undefined
  }

  interface WatchOptions {
    lazy?: boolean
    flush?: 'pre' | 'post' | 'sync'
    deep?: boolean
    onTrack?: (event: DebuggerEvent) => void
    onTrigger?: (event: DebuggerEvent) => void
  }

  // 基本用法
  function watch(
    effect: (onInvalidate: InvalidationRegister) => void,
    options?: WatchOptions
  ): StopHandle

  // 单个监听源
  function watch<T>(
    source: WatcherSource<T>,
    effect: (
      value: T,
      oldValue: T,
      onInvalidate: InvalidationRegister
    ) => void,
    options?: WatchOptions
  ): StopHandle

  // 多个监听源
  function watch<T extends WatcherSource<unknown>[]>(
    sources: T
    effect: (
      values: MapSources<T>,
      oldValues: MapSources<T>,
      onInvalidate: InvalidationRegister
    ) => void,
    options? : WatchOptions
  ): StopHandle
  ```

## `Lifecycle Hooks`

生命周期钩子可以通过导入`onXXX`函数直接注册: 

```js
import { onMounted, onUpdated, onUnmounted } from 'vue'

const MyComponent = {
  setup() {
    onMounted(() => {
      console.log('mounted!')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })
  }
}
```

这些生命周期注册函数只能在`setup()`中使用, 因为它们依赖于内部的全局状态来定位当前组件实例(正在调用`setup()`的组件实例), 
不在当前组件下调用这些函数会抛出一个错误.

### 与 2.x 版本生命周期对应的 Composition API
  - ~~`beforeCreate`~~ -> 使用 `setup()`
  - ~~`created`~~      -> 使用 `setup()`
  - `beforeMount`      -> `onBeforeMount`
  - `mounted`          -> `onMounted`
  - `beforeUpdate`     -> `onBeforeUpdate`
  - `updated`          -> `onUpdated`
  - `beforeDestroy`    -> `onBeforeUnmount`
  - `destroyed`        -> `onUnmounted`
  - `errorCaptured`    -> `onErrorCaptured`

### 新增的钩子函数
  
  除了 2.x 版本对应的钩子函数, 还提供了用于调试的钩子函数: 

  - `onRenderTracked`
  - `onRenderTriggered`

  这俩钩子函数接收一个 `DebuggerEvent` 参数, 这个参数跟 `watch` 第二个参数 options 中的 `onTrack` 和 `onTrigger` 一样: 

  ```js
  export default {
    setup() {
      onRenderTriggered(e => {
        debugger
        // 检查哪个依赖性导致组件重新渲染
      })
    }
  }
  ```

## `provide & inject`

`provide` 和 `inject` 提供了依赖注入的功能, 和 2.x 版本的 `provide/inject` 选项类似. 
这俩函数只能在祖孙(父子)组件的 `setup()` 中调用: 

```js
import { provide, inject } from 'vue'

const ThemeSymbol = Symbol()

const Ancestor = {
  setup() {
    provide(ThemeSymbol, 'dark')
  }
}

const Descendent = {
  setup() {
    const theme = inject(ThemeSymbol, 'light' /* 可选的缺省值 */)
    return {
      theme
    }
  }
}
```

`inject` 可以第二个参数可以传入一个可选的缺省值, 如果不传并在上下文中没有找到 `provide` 提供的对应值, 这个函数会返回 `undefined`.

### 响应式注入
  
  可以使用 ref 来保持注入值的响应式: 

  ```js
  // 提供者
  const themeRef = ref('dark')
  provide(ThemeSymbol, themeRef)

  // 使用者
  const theme = inject(ThemeSymbol, ref('light'))
  watch(() => {
    console.log(`theme set to: ${theme.value}`)
  })
  ```

  如果注入的是一个响应式的值, 那么它的变化可以被监听到

### 类型定义
  
  ```ts
  interface InjectionKey<T> extends Symbol {}

  function provide<T>(key: InjectionKey<T> | string, value: T): void

  // 不传 缺省值
  function inject<T>(key: InjectionKey<T> | string): T | undefined
  // 有传 缺省值
  function inject<T>(key: InjectionKey<T> | string, defaultValue: T): T
  ```

  Vue 提供一个继承了 `Symbol` 的泛型 `InjectionKey`, 可以在提供者和使用者之间保持类型一致: 

  ```ts
  import { InjectionKey, provide, inject } from 'vue'

  const key: InjectionKey<string> = Symbol()

  provide(key, 'foo') // 类型不是 string 会报错

  const foo = inject(key) // foo 的类型是: string | undefined
  ```

  如果第一个参数传入的是字符串或没有定义类型的符号, 就需要明确指定泛型的类型: 

  ```ts
  const foo = inject<number>('foo') // number | undefined
  ```

## `Template Refs`
使用 Composition API 时, `reactive refs` 和 `template refs` 的概念是统一的. 
我们需要在 `setup()` 中定义一个 ref 并返回给模板, 这样就可以通过 ref 来拿到一个 DOM 或 组件实例的引用了: 

```vue
<template>
  <div ref="root"></div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const root = ref(null)

    onMounted(() => {
      // 在渲染完成后, 这个 div DOM 会被赋值给 root ref 对象
      console.log(root.value) // <div/>
    })

    return {
      root
    }
  }
}
</script>
```

上面将 `root` 暴露到 render 上下文, 并通过 `ref="root"` 绑定到 div 上. 
通过虚拟 DOM 的 patching 算法, 如果一个 VNode 节点上的 `ref` 匹配到 render 上下文中的 ref, 就会将 VNode 对应的 DOM 或组件实例赋值这个 ref. 
这是在虚拟 DOM `mount / patch` 过程中执行的, 因此 `template refs` 只能在渲染完成后拿到引用值. 

`template refs` 和其他 refs 一样: 是响应式的, 可以传给 Composition 函数, 也可以从函数中返回. 

### Render 函数 / JSX 的用法
  
  ```js
  export default {
    setup() {
      const root = ref(null)

      return () => h('div', {
        ref: root
      })

      // 使用 JSX
      return () => <div ref={root}/>
    }
  }
  ```

### 在 v-for 中的用法

  现在在 v-for 中 `template refs` 不会做特殊处理了, 而是需要使用 `函数属性的 ref (3.0 版本的新特性)` 来自定义处理: 

  ```vue
  <template>
    <div
      v-for="(item, i) in list"
      :ref="el => { divs[i] = el }">
      {{ item }}
    </div>
  </template>

  <script>
  import { ref, reactive, onBeforeUpdate } from 'vue'

  export default {
    setup() {
      const list = reactive([1, 2, 3])
      const divs = ref([])

      // 确保在每次更新之前重置 ref
      onBeforeUpdate(() => {
        divs.value = []
      })

      return {
        list,
        divs
      }
    }
  }
  </script>
  ```

## `defineComponent`
该函数仅用于类型推断. 这个函数可以让 TypeScript 根据传入的组件对象正确推断出传给 `setup()` 的 props 的类型. 
该函数不会做额外的操作, 传入组件对象并原样返回. 

```ts
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    foo: String
  },
  setup(props) {
    props.foo // <- 类型为: string
  }
})
```

如果你的组件除了 `setup()` 没有其他选项, 可以直接传入一个函数: 
```ts
import { defineComponent } from 'vue'

// 直接为 props 参数定义类型
export default defineComponent((props: { foo: string }) => {
  props.foo
})
```

安装了 Vetur 插件的 VSCode 用户, 使用 SRCs 时导出组件会被隐式包装, 用户不需要手写以上代码. 