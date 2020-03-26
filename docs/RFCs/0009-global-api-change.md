# 9. 全局 API 更改

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0009-global-api-change.md>

- 开始日期: 2019-04-08
- 目标版本: 3.x
- 参考 Issues: N/A
- 实现 PR: N/A

## 概要

重新设置 app 的 引导程序 和 API.

- 能够改变 Vue 行为的全局 API 现在移到通过 `createApp` 方法创建的 app 实例上了, 并且只能影响到这个 app 实例的行为了.
- 不会改变 Vue 行为的全局 API (如: `nextTick` 和 [Advanced Reactivity API](https://github.com/vuejs/rfcs/pull/22)提到的 API) 现在通过命名导出了, 详见[全局 API treeshaking](./0004-global-api-treeshaking.md).

## 基本用例

### 以前

``` js
import Vue from 'vue'
import App from './App.vue'

Vue.config.ignoredElements = [/^app-/]
Vue.use(/* ... */)
Vue.mixin(/* ... */)
Vue.component(/* ... */)
Vue.directive(/* ... */)

Vue.prototype.customProperty = () => {}

new Vue({
  render: h => h(App)
}).$mount('#app')
```

### 以后

``` js
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.isCustomElement = tag => tag.startsWith('app-')
app.use(/* ... */)
app.mixin(/* ... */)
app.component(/* ... */)
app.directive(/* ... */)

app.config.globalProperties.customProperty = () => {}

app.mount(App, '#app')
```

## 动机

Vue 当前的一些全局 API 会永久的改变全局状态, 这导致了一些问题: 

- 在测试过程中, 全局配置会很容易污染其他测试用例, 用户需要每次都要在测试前保存全局配置并在测试后重置 (如: 重置 `Vue.config.errorHandler`). 
  一些 API (像 `Vue.use` 和 `Vue.mixin`) 甚至都无法还原成原样, 这会让插件测试变得相当棘手. 

  - `vue-test-utils` 必须实现一个特殊的 API `createLocalVue` 来解决这个问题

- 这也很难让同一个页面上的多个 "app" 使用不同的全局配置

  ``` js
  // 这会影响到所有的根实例
  Vue.mixin({ /* ... */ })

  const app1 = new Vue({ el: '#app-1' })
  const app2 = new Vue({ el: '#app-2' })
  ```

## 设计细节

理论上讲, Vue 2 没有真正的 "app" 概念, 我们定义的所谓 app 只是一个通过 `new Vue()` 创建的 Vue 根实例. 用同一个 Vue 创建的所有根实例会共享相同的全局配置. 

在此提案中, 我们引入了一个新的全局 API `createApp`: 

``` js
import { createApp } from 'vue'

const app = createApp({
  /* 定义根组件 */
})
```

调用 `createApp` 会返回一个 **app 实例**, 每一个 app 实例会提供一个 app 上下文. 
app 实例上的组件树会共享一个 app 上下文, 这个上下文会提供之前 2.x 的"全局"配置. 

### 全局 API 映射

app 实例上暴露了当前全局 API 的子集, 任何可以改变 Vue 行为的全局 API 的最佳实践都适用于现在的 app 实例, 包括: 

- 全局配置
  - `Vue.config` -> `app.config`
    - `config.productionTip`: 移除. ([更多细节](#移除-configproductiontip))
    - `config.ignoredElements` -> `config.isCustomElement`. ([更多细节](#configignoredelements---configiscustomelement))
    - `config.keyCodes`: 移除. ([更多细节](./0014-drop-keycode-support.md))
    - `config.optionMergeStrategies`: [关于该调整的更多细节](#configoptionmergestrategies-行为变更)
- 资源注册 API
  - `Vue.component` -> `app.component`
  - `Vue.directive` -> `app.directive`
- 拓展行为 API
  - `Vue.mixin` -> `app.mixin`
  - `Vue.use` -> `app.use`

所有不会改变 Vue 行为的全局 API 现在都通过命名导出了, 详见[全局 API treeshaking](./0004-global-api-treeshaking.md).

唯一的例外是 `Vue.extend`, 因为 `Vue` 不再是一个可以 new 构造函数, `Vue.extend` 在构造函数拓展这块就没有什么意义了. 

- 对于拓展一个普通组件, 应该使用 `extends` 选项
- 对于 TypeScript 类型定义, 应该使用新的 `defineComponent` API: 

  ``` ts
  import { defineComponent} from 'vue'

  const App = defineComponent({
    /* 提供类型推断 */
  })
  ```

  注意, `defineComponent` 不会做任何额外操作 - 仅仅返回传入的对象. 不过在类型方面, 返回的对象为 手写 render 函数, JSX 和 IDE 工具支持提供了合成类型. 
  我们是故意设计成这样的. 

### 挂载 app 实例

app 实例可以使用 `mount` 方法挂载一个根组件, 类似于 2.x 的 `vm.$mount()` 方法, 然后返回已挂载的根组件实例: 

``` js
app.mount(App, '#app', {
  // 传递给根组件的 props
})
```

#### 挂载行为与 2.x 的区别

在使用包含编译器的版本时, 挂载一个没有编写模板的根组件, Vue 会尝试使用挂载目标元素的内容作为模板. 3.x 和 2.x 的行为会有以下区别: 

- 在 2.x 中, 根实例会使用目标元素的`outerHTML`作为模板, 并替换掉目标元素.

- 在 3.x 中, 根实例会使用目标元素的`innerHTML`作为模板, 但只会替换掉目标元素的子元素(children).

在大部分情况下不会影响你的 app, 唯一的副作用是, 如果目标元素有多个子元素, 根实例会作为一个片段(fragment)挂载, 而`this.$el`会指向片段(DOM Comment 节点)的开始节点

在 Vue 3 中, 由于可以使用 Fragments, 推荐使用模板的 refs 来操作 DOM 节点, 不要使用 `this.$el`. 

### Provide / Inject

app 实例提供的依赖可以被 app 内的任何组件注入: 

``` js
// 在入口文件里
app.provide({
  [ThemeSymbol]: theme
})

// 在某个子组件里
export default {
  inject: {
    theme: {
      from: ThemeSymbol
    }
  },
  template: `<div :style="{ color: theme.textColor }" />`
}
```

这跟在 2.x 的根组件中使用 `provide` 选项类似.

### 移除 `config.productionTip`

在 3.0 中 "use production build" 提示只会在使用 "dev + 完整版本"(包含运行时编译器带警告的版本) 时显示.

对于 ES 模块版本, 代码会打包在一起, 而且在大部分情况下 CLI 或 样板文件 已经正确的配置了生产环境, 这个提示也不会在出现. 

### `config.ignoredElements` -> `config.isCustomElement`

引入这个配置是为了支持原生的自定义元素, 因此改名可以更好的表达其意思. 这个新选项需要传入一个函数, 相比旧版只能传入字符串和正则更具灵活性. 

``` js
// 以前
Vue.config.ignoredElements = ['my-el', /^ion-/]

// 以后
const app = Vue.createApp({ /* ... */ })
app.config.isCustomElement = tag => tag.startsWith('ion-')
```

**重要提示**: 在 3.0 中, 检测一个元素是否为组件的功能已经移到模板编译阶段, 因此这个配置项只能和运行时编译器同时使用. 如果你使用的是 runtime-only 版本, 那必须在构建配置中将 `isCustomElement` 传递给 `@vue/compiler-dom` - 例如: 通过 [`vue-loader` 中的 `compilerOptions` 选项](https://vue-loader.vuejs.org/zh/options.html#compileroptions).

- 如果在使用 runtime-only 版本时配置了 `config.isCustomElement`, 会抛出一个警告提示用户在构建配置中传递这个选项
- 这会是 Vue CLI 配置中的一个新的顶级选项

### `config.optionMergeStrategies` 行为变更

虽然仍受支持, 但由于 Vue 3 的内部实现变更了, 内置选项不需要合并策略了, 所有不再公开这个 API. `app.config.optionMergeStrategies`默认是一个空对象, 也就是说: 

- 用户必须提供自己的合并策略函数, 无法再复用内置的合并策略了 (例如, 你无法设置 `config.optionMergeStrategies.custom = config.optionMergeStrategies.props`)
- 无法重写内置的合并策略了

### 添加全局共享实例属性

在 2.x 中, 可以简单地向`Vue.prototype`添加属性注入到全局共享的实例.

在 Vue 3 中, 由于 `Vue` 不再是一个构造函数, 所以也不再支持这样做了. 不过, 共享的实例属性应该添加到 app 实例的 `config.globalProperties` 上.

``` js
// 之前
Vue.prototype.$http = () => {}
// 之后
const app = createApp()
app.config.globalProperties.$http = () => {}
```

## 缺点

### 插件的自动安装

许多 Vue 2.x 的库和插件会在其 UMD 版本中提供自动安装功能, 比如: `vue-router`: 

``` html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-router"></script>
```

自动安装需要调用 不再支持的`Vue.use` 来实现. 这应该是相对容易的迁移, 我们也可以提供一个会抛出警告的 `Vue.use` 占位代码.

## 备选方案

N/A

## 升级策略

- 转换很简单 (如基本用例所示).
- 移除的方法会被抛出警告的占位代码取代, 以引导迁移.
- 也可以提供 codemod 脚本.
- `config.ingoredElements` 可以在兼容版本中使用.
- `config.optionMergeStrategies` 内置策略可以在兼容版本中使用.
