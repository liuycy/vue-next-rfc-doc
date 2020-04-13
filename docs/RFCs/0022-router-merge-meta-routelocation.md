# 22. 合并 router 路由元信息

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0022-router-merge-meta-routelocation.md>

- 开始日期: 2020-03-12
- 目标版本: Router 4.x
- 参考 Issues: N/A
- 实现 PR:

## 概要

创建路由对象时, 你可以用 `meta` 属性携带任意数据: 

```js
{ path: '/profile', meta: { requiresAuth: true }}
```

然后在可以在导航守卫和`$route`上获取:

```js
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth.loggedIn()) next('/login')
  else next()
})
```

不过在处理嵌套路由时, `meta` 只会包含匹配到的路由的 `meta`. 你需要像[文档中说的那样](https://router.vuejs.org/zh/guide/advanced/meta.html#%E8%B7%AF%E7%94%B1%E5%85%83%E4%BF%A1%E6%81%AF)遍历整个`matched`数组来检查路由记录中的 meta 字段:

```js
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth))
  // ...
})
```

我建议合并从上到下匹配到的所有路由的 meta, 这样就能直接访问 `to.meta.requiresAuth`. 我认为 Nuxt 就是这样做的, 但我在文档中没找到相关说明.

## 基本用例

有一个嵌套路由:

```js
{
  path: '/parent',
  meta: { requiresAuth: true, isChild: false },
  children: [
    { path: 'child', meta: { isChild: true }}
  ]
}
```

跳转到 `/parent/child` 应该能获取到一个带有下面这样 `meta` 属性的路由:

```js
{ requiresAuth: true, isChild: true }
```

## 动机

大多数时候, 我们都需要合并 `meta` 属性. 我就没见过只需要原样嵌套的 meta 属性的情况.

这样就不需要通过 `to.matched.some` 来检查 `meta` 中的字段是否存在. 以后只需要检查合并的 `meta` 属性就行了.

## 细节设计

`meta` 属性只合并第一层, 类似 `Object.assign` 和 _展开操作符_:

```js
{
  path: '/parent',
  meta: { nested: { a: true } },
  children: [
    { path: 'child', meta: { nested: { b: true }}}
  ]
}
```

跳转`/parent/child`时希望生成下面这样 `meta` 对象:

```js
{
  nested: {
    b: true
  }
}
```

## 缺点

- 理论上讲这是一个破坏性更改