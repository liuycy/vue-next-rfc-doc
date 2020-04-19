# 29. router 动态路由

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0029-router-dynamic-routing.md>

- 开始日期: 2020-01-27
- 目标版本: Vue 3 Router 4
- 参考 Issues: [issues](https://github.com/vuejs/vue-router/issues?q=is%3Aopen+is%3Aissue+label%3A%22group%5Bdynamic+routing%5D%22)
- 实现 PR:

## 概要

介绍一种能在 router 运行时动态添加和移除路由记录的 API

- `router.addRoute(route: RouteRecord)` 添加一个新路由
- `router.removeRoute(name: string | symbol)` 移除一个已存在的路由
- `router.hasRoute(name: string | symbol): boolean` 检查路由是否存在
- `router.getRoutes(): RouteRecord[]` 获取当前路由列表

## 基本用例

假设有这样一个 app 的路由实例:

```ts
router.addRoute({
  path: '/new-route',
  name: 'NewRoute',
  component: NewRoute
})
// 作为子路由加入到一个已存在的路由中
router.addRoute('ParentRoute', {
  path: 'new-route',
  name: 'NewRoute',
  component: NewRoute
})
router.removeRoute('NewRoute')
// 获取添加完路由后的标准化路由记录
const routeRecords = router.getRoutes()
```

## 动机

动态路由功能可以使应用构建自己的路由系统. 就像 vue-cli 的 ui, 能允许添加可以自定义界面的图形插件那样.

当前版本的 Vue Router 只支持添加绝对路由. 此 RFC 目的是补充动态路由的其他功能, 讨论该 API 的不同形式和 Vue Router 的最佳特性. 目前, 如果不用 hacks 方法或创建一个完整的新 Router 实例是无法做到上述示例的效果的.

理论上讲能通过模块热更替更改路由的话, 可以提高开发体验.

注意: 动态路由只有在实现路径排列后才有意义 (自动的路由排序允许路有记录以任意顺序添加, 并且还能被正确匹配到). 加入此功能的最大成本在路径检测记录这块.

## 设计细节

### `addRoute`

- 可以添加绝对路由
- 可以添加子路由
- 冲突如何处理?
- 函数应该返回什么?

示例代码用 TS 写是为了了解传入对象的更多信息:

`RouteRecord` 和 创建 Router 实例时的 `routes` 选项的类型一样. 看起来就像 (https://router.vuejs.org/zh/api/#routes). 值得注意的是, 这个对象与 `routes` 选项一致, 因为在 Vue Router 4 中 `RouteRecord` 的类型可能会有些许改动.

```ts
const routeRecord: RouteRecord = {
  path: '/new-route',
  name: 'NewRoute',
  component: NewRoute
}
```

`addRoute` 函数传入的参数有多种选择.

对于没有命名的 routes 会返回一个可以移除该 route 的函数.

```ts
const removeRoute = router.addRoute(routeRecord)
removeRoute() // 移除该路由记录
// 或
router.removeRoute('NewRoute') // 因为命名是唯一的
```

如果我们在 `/new-route` 路径上, 添加路由记录后 **不会** 自动触发 _replace_ 导航. 用户需要通过调用 `router.push` 或 `router.replace` 配合当前 location 自行控制跳转, 比如: `router.replace(router.currentRoute.value.fullPath)` . 使用 location 字符串可以确保解析的是新 location 不是旧的 location. 如果在导航守卫中添加了路由, 要使用 `to` 参数中的值:

```js
router.beforeEach((to, from, next) => {
  // ...
  router.addRoute(newRoute)
  next(to.fullPath)
  // ...
})
```

由于动态路由是高级 API, 大部分用户不会直接使用它, 将其拆分出来能保证更大灵活性和优化操作. 建议还是使用配置项来添加路由.

_有关备选方案, 请查看 [这里](#备选方案)_

#### 冲突

当添加的路由与存在的路由重名了, 就会替换掉存在的路由. 这是最方便的办法, 因为这样也允许了在不删除旧路由的情况下直接**用相同命名的路由**替换成新的路由.

备选方案:

- 如果重名就报错, 并提示用户自行替换处理: 这样就不那么方便了
- 不会警告用户, 并替换掉该路由: 容易出现难以调试的错误

#### 嵌套路由

根据 `addRoute` 传入的参数, 可以给一个命名的已存在的路由添加嵌套路由. 父级路由必须是已命名的.

```ts
router.addRoute('ParentRoute', routeRecord)
```

#### 函数签名

```ts
interface addRoute {
  (parentName: string | symbol, route: RouteRecord): () => void
  (route: RouteRecord): () => void
}
```

### `removeRoute`

移除一个路由也会移除其所有子路由. 为了能通过 _RouterView_ 更新当前视图, `addRoute` 有必要触发一个新的导航.

```ts
interface removeRoute {
  (name: string | symbol): void
}
```

### `hasRoute`

检查一个路由是否存在:

```ts
interface hasRoute {
  (name: string | symbol): boolean
}
```

### `getRoutes`

获取标准化路由记录的列表:

```ts
interface getRoutes {
  (): RouteRecordNormalized[]
}
```

RouteRecordNormalized 的定义尚不明确, 但至少包含了 RouteRecord 的所有属性, 有些字段标准化了 (如 `components` 代替了 `component` 和 name 为 `undefined` 的情况).

## 缺点

- 该 API 会增加 vue-router 的体积. treeshakable 需要让匹配器 (与解析 `path` 和 排列 path 相关) 以更简单的版本拓展出来, 这样写起来就很复杂, 不过我们可以到处不同版本的匹配器并允许用户在精简版本的 router 中自行定义匹配器.

## 备选方案

### `addRoutes`

- 根据添加的路由可能触发的导航来 resolve 或 reject 的 Promise (例如: 在添加 route 之前跳转到 `/new-route`)

```ts
window.location.pathname // "/new-route"
// 1. 返回一个可以移除该 route 的 promise 函数
const removeRoute = await router.addRoute(routeRecord)
// 2. 返回值会和 `router.push` 返回值一样.
const route = await router.addRoute(routeRecord)
removeRoute() // 移除该 route
// 或者
router.removeRoute('NewRoute') // 命名是唯一的
```

- 对所添加路由的引用 (原始路由对象的标准化复制)

```ts
// js 对象 (和 router 持有的引用相同)
const normalizedRouteRecord = router.addRoute(routeRecord)
router.removeRoute(normalizedRouteRecord)
```

### `getRoutes`

routes 对象中也可能会有响应式的属性, 可以在模板中使用这些属性, 虽然在大多数情况下应用层会禁止使用这些属性, **保留与 router 同步的响应式的 route 对象**. 这样做可以避免为用户添加成本.

## 升级策略

- 在 Vue Router 3 中, 废弃 `addRoutes` 并加入 `addRoute`. 其他方法是新的.