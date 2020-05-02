# 33. router 导航失败

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0033-router-navigation-failures.md>

- 开始日期: 2020-03-26
- 目标版本: Vue Router v4
- 参考 Issues: https://github.com/vuejs/vue-router/issues/2833, https://github.com/vuejs/vue-router/pull/3047, https://github.com/vuejs/vue-router/issues/2932, https://github.com/vuejs/vue-router/issues/2881
- 实现 PR:

## 概要

- 解释了什么导航失败, 以及该如何处理. 
- 当基于 Promise 的 `router.push` (和 拓展实现的 `router-replace`) resolve 和 reject 时, 触发变化.
- 让 `router.push` 在 `router.afterEach` 和 `router.onError` 表现地更加一致.

## 基本用例

### `router.push`

如果抛出一个 unhandled error 或者 给 `next` 传入一个 error:

```js
// 在任意一个路由守卫中
router.beforeEach((to, from, next) => {
  next(new Error())
  // 或者
  throw new Error()
  // 或者
  return Promise.reject(new Error())
})
```

那么 `router.push` 会返回一个 reject 的 promsie:

```js
router.push('/url').catch(err => {
  // ...
})
```

**除此之外**, 这个 promise 会被 resolve. 我们可以通过判断 resolved 的值来确定是否导航失败:

```js
router.push('/dashboard').then(failure => {
  if (failure) {
    failure instanceof Error // true
    failure.type // NavigationFailure.canceled
  }
})
```

### `router.afterEach`

这是等效于 `router.push().then()` 的全局钩子

### `router.onError`

这是等效于 `router.push().catch()` 的全局钩子

## 动机

Vue Router 当前 `push` 返回 promise 的行为与 `router.afterEach` 和 `router.onError` 不一致. 理论上无论全局还是局部, 我们应该能捕获到所有成功的和失败的导航行为, 但现在我们只能局部地捕获.

- `onError` 只有在 抛出错误 和 `next(new Error())` 时才会被触发
- `afterEach` 只有导航存在时才会被调用
- 对于 `router.push` 的结果 和 调用 `router.afterEach` / `router.onError` 的行为, `redirect` 在导航守卫中应该表现地和 `next('/url')` 一样. 唯一的区别就是 `redirect` 只会触发离开守卫和该重定向地址(不再是原地址)的其他前置守卫, 

Promise 的 resolution/rejection 和 `router.afterEach` / `router.onError` 之间的差异会让人感到矛盾和困惑.

## 设计细节

要点之一就是要在全局和局部能够一致地处理失败的导航:

- 失败的导航:
  - 触发 `router.afterEach`
  - `router.push` 返回 Resolves 的 `Promise`
- Uncaught Errors, `next(new Error())`
  - 触发 `router.onError`
  - `router.push` 返回 Rejects 的 `Promise`

值得注意的是, 这两个组中没有重叠: 如果在导航守卫中存在一个 unhandled error 的话, 就会触发 `router.onError` 并且 `router.push` 会返回 rejecting 的 `Promise`, 但不会再触发 `router.afterEach`. 用 `next(false)` 取消一个导航 不会再触发 `router.onError`, 但会触发 `router.afterEach`

### Promise resolution 和 rejection 的更改

返回值是 Promise 的导航方法, 如 `push`, 一旦导航成功 **或** 失败就会返回 **resolves** 的 promise. 只有在存在 unhandled error 时才会被 **rejects**. 如果被 rejects, 也会触发 `router.onError`.

为了区分导航是成功了还是失败了, `push` 返回的 `Promise` 中 resolve 的值要么是 `undefined` 要么是 `NavigationFailure`:

```js
import { NavigationFailureType } from 'vue-router'
router.push('/').then(failure => {
  if (failure) {
    // 会有一个 Error 实例可以让我们保留一个 Stacktrace 并能追踪到导航在哪里被取消了
    // 在很多情况下, 会追踪到 导航守卫 和 取消导航的那个的 `next()` 
    failure instanceof Error // true
    if (failure.type === NavigationFailureType.canceled) {
      // ...
    }
  }
})
// 使用 async/await
let failure = await router.push('/')
if (failure) {
  // ...
}
```

在导航失败时不再 reject `Promise`, 我们就能避免 _Uncaught (in promise)_ errors 并且还能检测导航是否失败了.

#### 导航失败对象

有些导航失败对象会不太一样, 可能会在你的代码中表现得不同.

可以通过一个 `type` 属性来区分不同的导航失败对象. `枚举(enum)` `NavigationFailureType` 包含了所有可能的值:

- `cancelled`: 在导航守卫内 `next(false)` 或者 当另一次导航正在进行时发生了一次较新的导航.
- `duplicated`: 导航到跟当前一样的地址时, 会被取消而且不会触发任何导航守卫.

在 `type` 属性上边, 导航失败对象也会暴露 `from` 和 `to` 属性, 就像 `router.afterEach` 一样

#### 重定向

在导航守卫内使用 `next('/url')` 重定向不是导航失败, 因为导航还在继续并最终确实跳转到了某个地方. 要检测导航, 尤其是 SSR 时, 可以访问 `currentRoute` 上的 `redirectedFrom` 属性.

例如: 假设有个导航守卫会在用户没有通过身份验证时重定向到 `/login`:

```js
router.beforeEach((to, from, next) => {
  // 如果目标页面要求身份认证, 重定向到登录页
  if (to.meta.requiresAuth && !isAuthenticated) next('/login')
  else next()
})
```

当导航到一个要求身份验证的地址时, 我们可以通过 `redirectedFrom` 检索用户想要访问的原始地址:

```js
// 用户没有通过身份验证时
await router.push('/profile/dashboard')
// `redirectedFrom` 是一个标准的 RouteLocation 对象, 类似 `currentRoute` 
// 但在该例中为了可读性我们省略了大部分属性
router.currentRoute // { path: '/login', redirectedFrom: { path: '/profile/dashboard' } }
```

### `router.afterEach` 的更改

由于 `router.afterEach` 也会在导航失败时被触发, 我们需要一种方式来判断这个导航是成功了还是失败了. 为此, 我们引入了一个额外的参数, 和 resolved 的导航中的 _failure_ 一模一样:

```js
import { NavigationFailureType } from 'vue-router'
router.afterEach((to, from, failure) => {
  if (failure) {
    if (failure.type === NavigationFailureType.canceled) {
      // ...
    }
  }
})
```

## 缺点

- 会带来破坏性更改, 虽然迁移相对比较简单, 而且在很多情况下开发者可以移除现存代码

## 备选方案

- 通过定义另一个导航失败, 来区分 `next(false)` 和 那些被新导航覆盖的导航

## 升级策略

- 在 vue-router@3 中暴露 `NavigationFailureType`, 这样导航失败就可以和正常的 Errors 区分开来. 我们还可以暴露一个函数 `isNavigationFailure` 来区分它们.
- `afterEach` 和 `onError` 相对比较容易迁移, 大多数时候它们也不会被多次使用.
- 当导航失败时, `router.push` 不会再 reject. 任何使用 catch error 的代码应该改成 await promise 的形式.