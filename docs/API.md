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

  注意: 这个 `props` 对象是响应式的, 即当新的 `props` 传入时, 它会更新并触发 `watchEffect` 或 `watch` 的监听回调: 

  ```js
  export default {
    props: {
      name: String
    },
    setup(props) {
      watchEffect(() => {
        console.log(`name is: ` + props.name)
      })
    }
  }
  ```

  但是, **千万不要** 解构 `props` 对象, 这样会丢失响应性:

  ```js
  export default {
    props: {
      name: String
    },
    setup({ name }) {
      watchEffect(() => {
        console.log(`name is: ` + name) // 将不会具有响应性 !
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

- **类型定义**
  ```ts
  interface Data {
    [key: string]: unknown
  }

  interface SetupContext {
    attrs: Data
    slots: Slots
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


## 响应式 API

### `reactive`

传入一个对象获取该对象得响应式代理, 相当于 2.x 版本的 `Vue.observable()` .
```js
const obj = reactive({ count: 0 })
```
它会深度遍历并将所有属性转换成响应式的, 它会返回一个 ES2015 的 `Proxy` 对象. 
建议只使用这个返回响应式代理对象, 不要对传入的原对象做任何操作.

- **类型定义**
  ```ts
  function reactive<T extends object>(raw: T): T
  ```

### `ref`

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

  请注意, `ref` 只有嵌套在响应式`对象`中才会自动展开. 从 `数组` 或 原生集合类型像 `Map` 这些数据结构中访问的 `ref` 不会自动展开: 

  ```js
  const arr = reactive([ref(0)])
  // 这里就需要 .value 了
  console.log(arr[0].value)

  const map = reactive(new Map([['foo', ref(0)]]))
  // 这里也需要 .value 
  console.log(map.get('foo').value)
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

### `computed`

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
  set: val => { 
    count.value = val - 1 
  }
})

plusOne.value = 1
console.log(count.value) // 0
```

- **类型定义**
  
  ```ts
  // 只读
  function computed<T>(getter: () => T): Readonly<Ref<Readonly<T>>>

  // 可写
  function computed<T>(options: {
    get: () => T,
    set: (value: T) => void
  }): Ref<T>
  ```

### `readonly`

传入一个对象(reactive 或 普通对象) 或者 ref, 返回一个只读的响应式 Proxy 对象. 这个只读代理对象的任何嵌套属性也都是只读的: 

```js
const original = reactive({ count: 0 })

const copy = readonly(original)

watchEffect(() => {
  // 响应式的监听 没有问题
  console.log(copy.count)
})

// 改变 original 可以触发 copy 的监听回调
original.count++

// 改变 copy 会失败并抛出一个警告
copy.count++ // 警告!
```

### `watchEffect`

  立即执行一个回调函数, 并跟踪函数内的依赖变化, 当依赖发生变化时, 重新执行这个回调函数.

  ```js
  const count = ref(0)

  watchEffect(() => console.log(count.value))
  // -> 打印 0

  setTimeout(() => {
    count.value++
    // -> 打印 1
  }, 100)
  ```

#### 停止监听

  在 `setup()` 或 声明周期钩子函数中 调用 `watchEffect` 函数时, 监听者会关联到组件的生命周期, 在组件卸载时监听者会自动停止监听. 

  其他情况下, 可以通过函数返回的 stop 函数明确地手动停止监听: 

  ```js
  const stop = watchEffect(() => { 
    /* ... */
  })

  // 停止监听
  stop()
  ```

#### 清除副作用

  有些时候监听回调会执行一些异步的副作用, 这些副作用需要在其失效时清除(即副作用完成之前状态就改变了). 
  所以监听者的回调函数可以接收一个 `onInvalidate` 函数入参, 可以用来注册清理副作用的回调函数.
  当以下情况发生时, 清理回调会被触发: 

  - 监听回调即将重新调用时
  - 停止监听时 (如果在 `setup()` 或 生命周期钩子函数中 使用了 `watchEffect`, 则在卸载组件时)

  ```js
  // 普通用例中 清理回调会作为第一个参数传入
  watchEffect(onInvalidate => {
    const token = performAsyncOperation(id.value)
    onInvalidate(() => {
      // id 改变时 或 停止监听时
      // 取消之前的异步操作
      token.cancel()
    })
  })
  ```

  我们用传入的注册函数来注册清理函数, 而不是像 React 的 `useEffect` 那样直接返回一个清理函数, 
  是因为 watcher 回调的返回值在异步场景下有特殊作用. 我们经常需要在 watcher 的回调中用 async function 来执行异步操作: 

  ```js
  const data = ref(null)
  watchEffect(getId, async () => {
    data.value = await fetchData(props.id)
  })
  ```

  我们知道 async function 隐性地返回一个 Promise - 这样的情况下, 我们是无法返回一个需要被立刻注册的清理函数的. 
  除此之外, 回调返回的 Promise 还会被 Vue 用于内部的异步错误处理.

#### 副作用回调刷新时间

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

      watchEffect(() => {
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

  - count 会在初始运行时同步打印出来
  - 在 `count` 改变时, 回调函数会在组件**更新之后**调用

  请注意, 初始运行是在组件挂载完成之前调用的, 如果你要在副作用回调中操作 DOM (或 模板 refs), 要把它放在 mounted 钩子函数内: 

  ```js
  onMounted(() => {
    watchEffect(() => {
      // 访问 DOM 或 模板 refs
    })
  })
  ```

  如果想同步或在组件更新之前调用回调函数, 我们可以给`watchEffect`传入一个带有 flush 选项(默认为`'post'`)的 option :

  ```js
  // 同步调用
  watchEffect(
    () => {
      /* ... */ 
    }, 
    {
      flush: 'sync'
    }
  )

  // 在组件更新前调用
  watchEffect(
    () => {
      /* ... */ 
    }, 
    {
      flush: 'pre'
    }
  )
  ```
  
#### Watcher 调试

  给`watchEffect`传入带有`onTrack`和`onTrigger`的 option 可以调试监听者的行为. 

  - 当 `reactive` 或 `ref` 被作为依赖跟踪时, `onTrack` 会被调用
  - 当依赖发生变化时, `onTrigger` 会被调用

  这两个回调函数可以接收一个包含依赖项信息的 debugger event 对象, 建议在回调函数中写一个 `debugger` 语句用 Chrome Devtools 手动调试: 

  ```js
  watchEffect(
    () => {
      /* ... */ 
    }, 
    {
      onTrigger(e) {
        debugger
      }
    }
  )
  ```

  `onTrack` 和 `onTrigger` 只在开发模式下有效. 

- **类型定义**

  ```ts
  function watchEffect(
    effect: (onInvalidate: InvalidateCbRegistrator) => void,
    options?: WatchEffectOptions
  ): StopHandle

  interface WatchEffectOptions {
    flush?: 'pre' | 'post' | 'sync'
    onTrack?: (event: DebuggerEvent) => void
    onTrigger?: (event: DebuggerEvent) => void
  }

  interface DebuggerEvent {
    effect: ReactiveEffect
    target: any
    type: OperationTypes
    key: string | symbol | undefined
  }

  type InvalidateCbRegistrator = (invalidate: () => void) => void

  type StopHandle = () => void
  ```

### `watch`

`watch` API 完全等价于 2.x 的 `this.$watch` (以及对应的 `watch` 的选项). `watch` 要求传入一个特定的监听源, 并在单独的回调函数中处理副作用. 默认情况下, 回调函数是惰性执行的 - 即只有在监听源发生改变时回调函数才会被调用. 

- 与 `watchEffect` 对比, `watch` 可以: 
  - 惰性执行副作用回调
  - 更具体地控制触发监听回调的状态
  - 访问监听状态的之前值和当前值

- **单个监听源**

  一个监听源可以是一个返回值的 getter 函数, 也可以直接是一个 ref:
  
  ```js
  // 监听一个 getter 函数
  const state = reactive({ count: 0 })
  watch(
    () => state.count, 
    (count, prevCount) => {
      /* ... */ 
    }
  )

  // 或 直接监听一个 ref
  const count = ref(0)
  watch(count, (count, prevCount) => {
    /* ... */ 
  })
  ```

- **多个监听源**
  
  一个 `getter函数` 或 `ref` 可以被视为一个可监听的`源`, 使用数组就可以同时监听多个`源`: 

  ```js
  watch([fooRef, barRef], ([foo, bar], [prevFoo, prevBar]) => {
    /* ... */
  })
  ```

- **与 `watchEffect` 共享的行为**

`watch` 和 `watchEffect` 在[停止监听](#停止监听), [清除副作用](#清除副作用)(`onInvalidate`回调入参会作为第三个参数传入), [副作用回调刷新时间](#副作用回调刷新时间) 和 [调试](#watcher-调试) 等方面行为一致.

- **类型定义**

  ```ts
  // 单个监听源
  function watch<T>(
    source: WatcherSource<T>,
    callback: (
      value: T,
      oldValue: T,
      onInvalidate: InvalidateCbRegistrator
    ) => void,
    options?: WatchOptions
  ): StopHandle

  // 多个监听源
  function watch<T extends WatcherSource<unknown>[]>(
    sources: T
    callback: (
      values: MapSources<T>,
      oldValues: MapSources<T>,
      onInvalidate: InvalidateCbRegistrator
    ) => void,
    options? : WatchOptions
  ): StopHandle

  type WatcherSource<T> = Ref<T> | (() => T)

  type MapSources<T> = {
    [K in keyof T]: T[K] extends WatcherSource<infer V> ? V : never
  }

  // 可以查看 `watchEffect` 类型定义 中 其他共享 options 的定义
  interface WatchOptions extends WatchEffectOptions {
    immediate?: boolean // 默认: false
    deep?: boolean
  }
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

组件实例上下文也是在生命周期钩子执行时同步设置的, 因此当组件卸载时, 在生命周期钩子内同步创建的监听者和计算属性也会被自动销毁

- **与 2.x 版本生命周期对应的 Composition API**
  - ~~`beforeCreate`~~ -> 使用 `setup()`
  - ~~`created`~~      -> 使用 `setup()`
  - `beforeMount`      -> `onBeforeMount`
  - `mounted`          -> `onMounted`
  - `beforeUpdate`     -> `onBeforeUpdate`
  - `updated`          -> `onUpdated`
  - `beforeDestroy`    -> `onBeforeUnmount`
  - `destroyed`        -> `onUnmounted`
  - `errorCaptured`    -> `onErrorCaptured`

- **新增的钩子函数**
  
  除了 2.x 版本对应的钩子函数, 还提供了用于调试的钩子函数: 

  - `onRenderTracked`
  - `onRenderTriggered`

  这俩钩子函数接收一个 `DebuggerEvent` 参数, 这个参数跟 `watchEffect` 第二个参数 options 中的 `onTrack` 和 `onTrigger` 一样: 

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

## 依赖注入

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

- **响应式注入**
  
  可以使用 ref 来保持注入值的响应式: 

  ```js
  // 提供者
  const themeRef = ref('dark')
  provide(ThemeSymbol, themeRef)

  // 使用者
  const theme = inject(ThemeSymbol, ref('light'))
  watchEffect(() => {
    console.log(`theme set to: ${theme.value}`)
  })
  ```

  如果注入的是一个响应式的值, 那么它的变化可以被监听到

- **类型定义**
  
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
使用 Composition API 时, _reactive refs_ 和 _template refs_ 的概念是统一的. 
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

- **Render 函数 / JSX 的用法**
  
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

- **在 `v-for` 中的用法**

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

## 响应式工具

### `unref`

如果传入参数是 ref 这个函数会返回内部值, 否则就返回传入值. 这是一个 `val = isRef(val) ? val.value : val` 的语法糖.

```ts
function useFoo(x: number | Ref<number>) {
  const unwrapped = unref(x) // 获取到的 unwrapped 类型是 number
}
```

### `toRef`

`toRef` 可以为响应式对象的属性创建 ref, 并保留原属性的响应式.

```js
const state = reactive({
  foo: 1,
  bar: 2
})

const fooRef = toRef(state, 'foo')

fooRef.value++
console.log(state.foo) // 2

state.foo++
console.log(fooRef.value) // 3
```

当你想给一个 Composition 函数传入 ref 时, 你会发现 `toRef` 非常有用:

```js
export default {
  setup(props) {
    useSomeFeature(toRef(props, 'foo'))
  }
}
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

### `isRef`

检查一个值是否为 ref 对象. 当判断展开值时十分有用.

### `isProxy`

检查一个对象是否为 `reactive` 或 `readonly` 创建的代理对象.

### `isReactive`

检查一个对象是否为 `reactive` 创建的响应式对象.

如果这个对象是被 `readonly` 包装的 `reactive` 创建的对象, 也会返回 `true`.

### `isReadonly`

检查一个对象是否为 `readonly` 创建的只读代理对象.

## 高级响应式 API

### `customRef`

创建一个自定义的 ref, 可以显式地控制它的依赖跟踪和更新时机. 需要传入一个工厂函数. 这个函数接收 `track` 和 `trigger` 两个回调, 并返回一个设置了 `get` 和 `set` 的对象.

- 用一个自定义 ref 来实现 `v-model` 的防抖功能: 

  ```html
  <input v-model="text" />
  ```
  ```js
  function useDebouncedRef(value, delay = 200) {
    let timeout
    return customRef((track, trigger) => {
      return {
        get() {
          track()
          return value
        },
        set(newValue) {
          clearTimeout(timeout)
          timeout = setTimeout(() => {
            value = newValue
            trigger()
          }, delay)
        }
      }
    })
  }
  export default {
    setup() {
      return {
        text: useDebouncedRef('hello')
      }
    }
  }
  ```

- **类型定义**

  ```ts
  function customRef<T>(factory: CustomRefFactory<T>): Ref<T>
  type CustomRefFactory<T> = (
    track: () => void,
    trigger: () => void
  ) => {
    get: () => T
    set: (value: T) => void
  }
  ```

### `markRaw`

标记一个对象, 让这个对象不能被转换为代理对象. 返回值是它本身.

```js
const foo = markRaw({})
console.log(isReactive(reactive(foo))) // false

// 嵌套到其他响应式对象后, 也不会转换
const bar = reactive({ foo })
console.log(isReactive(bar.foo)) // false
```

::: warning
`markRaw` 和下面的 shallowXXX API 可以让你在状态树中插入原始的, 非代理的对象, 使其不受 reactive / readonly 的深层转换影响. 可以在以下情况下使用:

- 有些值不能弄成响应式的, 例如第三方的复杂类的实例, 或 Vue 组件对象

- 使用不可变数据源渲染大型列表时, 跳过转换可以提升性能

- 这些是高级 API, 因为原始对象只有在第一层才能不受转换影响, 如果你将一个没有被标记的内嵌对象, 插入一个响应式对象再访问, 你获取到的还是代理对象. 这会导致**相等障碍(identity hazards)** - 例如: 对同一个对象的原始对象和代理对象进行比较运算:

```js
const foo = markRaw({
  nested: {}
})

const bar = reactive({
  // 虽然 `foo` 被标记为原始对象, 但 foo.nested 不是
  nested: foo.nested
})

console.log(foo.nested === bar.nested) // false
```

相等障碍通常很少见. 不过要想避免这种问题充分利用这些 API 需要对响应式系统的工作原理有深入的了解.
:::

### `shallowReactive`

创建一个能跟踪自身属性变化的响应式的代理, 但不对内嵌对象进行深度响应式转换 (即暴露原始对象).

```js
const state = shallowReactive({
  foo: 1,
  nested: {
    bar: 2
  }
})

// 修改 state 自身的属性, 是响应式的
state.foo++
// 当其内嵌对象不是响应式的
isReactive(state.nested) // false
state.nested.bar++ // 非响应式的
```

### `shallowReadonly`

Create a proxy that makes its own properties readonly, but does not perform deep readonly conversion of nested objects (exposes raw values).

```js
const state = shallowReadonly({
  foo: 1,
  nested: {
    bar: 2
  }
})
// mutating state's own properties will fail
state.foo++
// ...but works on nested objects
isReadonly(state.nested) // false
state.nested.bar++ // works
```

### `shallowRef`

Create a ref that tracks its own `.value` mutation but doesn't make its value reactive.

```js
const foo = shallowRef({})
// mutating the ref's value is reactive
foo.value = {}
// but the value will not be converted.
isReactive(foo.value) // false
```

### `toRaw`

Return the raw, original object of a `reactive` or `readonly` proxy. This is an escape hatch that can be used to temporarily read without incurring proxy access / tracking overhead or write without triggering changes. It is **not** recommended to hold a persistent reference to the original object. Use with caution.

```js
const foo = {}
const reactiveFoo = reactive(foo)
console.log(toRaw(reactiveFoo) === foo) // true
```