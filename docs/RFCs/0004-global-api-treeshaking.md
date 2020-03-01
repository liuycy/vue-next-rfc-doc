# 全局 API treeshaking

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0004-global-api-treeshaking.md>

- 开始日期: 2019-03-01
- 目标版本: 3.x
- 参考 Issues: N/A
- 实现 PR: N/A

## 概要

尽量使用命名导出 API 使得 Vue 的运行时代码 tree-shakable.

## 基本用例

``` js
import { nextTick, observable } from 'vue'

nextTick(() => {})

const obj = observable({})
```

## 动机

随着 Vue API 不断增加, 我们一直在拿捏功能特性和包的大小之间的平衡. 我们希望将 Vue 的体积压到最小, 但不想因为尺寸限制它的功能. 

通过 ES 模块的静态解析, 以及现代打包工具的压缩功能, 我们现在可以消除那些没有用到的导出模块. 利用这点我们可以重组全局 API 和 内部 API, 用户只需为真正用到的功能买单. 

在知道可选功能(用户没有用到的)不会增加包的大小之后, 我们现在有更多空间在核心包中包含可选功能.

## 设计细节

目前在 2.x 版本中, 所有的全局 API 都是挂在单个 Vue 对象上. 

``` js
import Vue from 'vue'

Vue.nextTick(() => {})

const obj = Vue.observable({})
```

在 3.0 版本中, 它们只能通过命名导入使用了: 

``` js
import Vue, { nextTick, observable } from 'vue'

Vue.nextTick // undefined

nextTick(() => {})

const obj = observable({})
```

不把 API 全部挂在 `Vue` 上导出, 任何没有用到的 API 会通过 `支持 tree-shaking 的打包工具` 移除掉.

## 受影响的 2.x API

- `Vue.nextTick`
- `Vue.observable`
- `Vue.version`
- `Vue.compile (仅在完整版本中)`
- `Vue.set (仅在兼容版本中)`
- `Vue.delete (仅在兼容版本中)`

## 内部 helpers

除了公共 API, 许多内部的 组件 / helpers 也可以通过命名导出. 这样编译器就可以只导出那些用到了的导入功能. 
例如下面这个 template : 

``` vue
<transition>
  <div v-show="ok">hello</div>
</transition>
```

可以编译成以下内容(伪代码)

``` js
import { h, Transition, applyDirectives, vShow } from 'vue'

export function render() {
  return h(Transition, [
    applyDirectives(h('div', 'hello'), this, [vShow, this.ok])
  ])
}
```

这意味着`Transition`组件只有在程序真正用到它时才会被导入. 

**注意, 以上仅作用于支持 tree-shaking 的打包工具使用 ES 模块打包的情况 - 使用 UMD 模块仍会包含所有的功能并挂在 Vue 上 (而且编译器会自动调整输出代码)**

## 缺点

用户不能再使用 Vue 上的全局 API 了, 需要手动导入 API. 但为了将生产包压到最小, 这些都是值得的. 

## 在插件中使用全局 API

有些插件用到了原本挂在 `Vue` 上的全局 API: 

``` js
const plugin = {
  install: Vue => {
    Vue.nextTick(() => {
      // ...
    })
  }
}
```

在 3.0 中, 需要改成导入具体 API 的方式: 

``` js
import { nextTick } from 'vue'

const plugin = {
  install: app => {
    nextTick(() => {
      // ...
    })
  }
}
```

这会造成一些开销, 因为库作者需要构建时正确处理 Vue 的外部化: 

- Vue 不应该打包进库中
- 对于 ES 模块 版本, 应该放开导入并交由用户来处理最终打包
- 对于 UMD / 浏览器 版本, 应该先尝试全局的 `Vue.h` 并回退到调用 `require`

这是 React 库的常见做法, 可以在 webpack 和 Rollup 中使用. 大多数 Vue 库也是这样. 我们只需要提供正确的文档和工具支持. 

## 备选方案
N/A

## 升级策略
应该可以提供一份 codemod 脚本 作为迁移工具的一部分
