# 26. 异步组件 API

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0026-async-component-api.md>

- 开始日期: 2020-03-25
- 目标版本: 3.x
- 参考 Issues: https://github.com/vuejs/rfcs/pull/28

## 概要

介绍一种专门定义异步组件的 API.

## 基本用例

```js
import { defineAsyncComponent } from "vue"
// 简单用法
const AsyncFoo = defineAsyncComponent(() => import("./Foo.vue"))
// 带上 options 的用法
const AsyncFooWithOptions = defineAsyncComponent({
  loader: () => import("./Foo.vue"),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  delay: 200,
  timeout: 3000
})
```

## 动机


根据 [RFC-0008: render 函数 API 更改](./0008-render-function-api-change.md), 在 Vue 3 中纯函数会被视为函数式组件. 所以异步组件必须通过 API 函数来明确定义.

## 设计细节

### 简单用法

```js
import { defineAsyncComponent } from "vue"
// 简单用法
const AsyncFoo = defineAsyncComponent(() => import("./Foo.vue"))
```

`defineAsyncComponent` 可以接收一个返回 Promise 的函数, 这个函数用来解析真实组件.

- 如果解析到的值是 ES 模块, 那么模块导出的 `default` 会自动被当作一个组件.

- **和 2.x 不同的是:** loader 函数不再像 2.x 那样接收 `resolve` 和 `reject` 参数了 - 现在必须返回一个 Promise.

  对于那些使用了 loader 函数中 `resolve` 和 `reject` 的代码, 转换也很简单:

  ```js
  // 之前
  const Foo = (resolve, reject) => {
    /* ... */
  }
  // 之后
  const Foo = defineAsyncComponent(() => new Promise((resolve, reject) => {
    /* ... */
  }))
  ```

## 带上 Options 的用法

```js
import { defineAsyncComponent } from "vue"
const AsyncFooWithOptions = defineAsyncComponent({
  loader: () => import("./Foo.vue"),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  delay: 100, // 默认值: 200
  timeout: 3000, // 默认值: Infinity
  suspensible: false, // 默认值: true
  onError(error, retry, fail, attempts) {
    if (error.message.match(/fetch/) && attempts <= 3) {
      retry()
    } else {
      fail()
    }
  }
})
```

- `delay` 和 `timeout` 选项和 2.x 的效果一样.

**和 2.x 不同的是:**

- `component` 选项被 `loader` 选项取代了, 这个 loader 选项就和简单用法一样.

  在 2.x 中, 带 options 的异步组件要像下面这样定义

  ```ts
  () => ({
    component: Promise<Component>
    // ...其他选项
  })
  ```

  而在 3.x 中则改成下面这样:

  ```ts
  defineAsyncComponent({
    loader: () => Promise<Component>
    // ...其他选项
  })
  ```

- 2.x 中 `loading` 和 `error` 选项被重命名为 `loadingComponent` 和 `errorComponent`, 这样做选项功能就更明确了.

## 重试控制

新的 `onError` 选项提供了一个 hook 函数, 可以在 loader 函数报错时执行重试操作:

``` js
const Foo = defineAsyncComponent({
  // ...
  onError(error, retry, fail, attempts) {
    if (error.message.match(/fetch/) && attempts <= 3) {
      // 当出现 fetch 错误时重试, 最多 3 次
      retry()
    } else {
      fail()
    }
  }
})
```

需要注意的是 `retry/fail` 并不像 Promise 的 `resolve/reject` 函数一样: 必须调用其中一个错误处理函数才能继续.

### 和 Suspense 功能一起使用

在 3.x 中异步组件默认支持 *suspensible* . 也就是说其父级中有 `<Suspense>` 的话, 它会成为 `<Suspense>` 的异步依赖. 在这种情况下, 加载状态就会受控于 `<Suspense>`, 而异步组件的 `loading`, `error`, `delay` 和 `timeout` 选项会被忽略.

在选项中设置 `suspensible: false` 异步组件可以摆脱 Suspense 的控制, 使其自身加载相关的选项不被忽略.

## 升级策略

- 语法转换比较机械化, 可以通过 codemod 脚本进行转换. 问题是如何判断哪些函数是异步组件(毕竟和普通函数长得一模一样). 基本特征如下:

  - 那些返回 `import` `.vue` 文件的箭头函数
  - 那些返回带有 `component` 属性并指向一个动态 `import` 的对象的箭头函数.

  不过不能 100% 保证完全匹配到所有情况.

- 在兼容版本中, 可以检查函数组件的返回值并在使用旧版异步组件的地方抛出警告. 这应该能覆盖所有基于 Promise 的用法.

- 唯一不太容易检测到的异步组件用法就是那些使用 `resolve/reject` 参数的代码. 这种情况就需要手动迁移了, 不过相对来说也不多.