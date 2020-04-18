# 28. router active link

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0028-router-active-link.md>

- 开始日期: 2020-02-28
- 目标版本: Router v4
- 参考 Issues: https://github.com/vuejs/vue-router/issues/2040
- 实现 PR:

## 概要

修改 `router-link-active` 应用方式, 使其更符合路由 ( router ) 的概念. 现在是这样的, 如果获取到的 url 是当前 location 的一部分, 那么这个 url 就是 _active_. 这会导致一些问题:

- 别名不一定能被匹配到
- 当跳转到斜杠开头的子路由时, 因为 url 不同, 其父路由不会显示为 active
- Query 可以用于使 link active

## 动机

上面提到的问题用户很难或不可能自己实现, 然而现在实现起来十分简单:

```vue
<router-link v-slot="{ route }">
  部分路径(path): {{ $route.path.startsWith(route.path) }}
  <br />
  部分路径(path) + 部分查询(query): {{ $route.path.startsWith(route.path) && includesQuery($route.query, route.query) }}
</router-link>
```

```js
// 如果我们想匹配 query 时
function includesQuery(outter, inner) {
  for (let key in inner) {
    let innerValue = inner[key]
    let outterValue = outter[key]
    if (typeof innerValue === 'string') {
      if (innerValue !== outterValue) return false
    } else {
      if (
        !Array.isArray(outterValue) ||
        outterValue.length !== innerValue.length ||
        innerValue.some((value, i) => value !== outterValue[i])
      )
        return false
    }
  }
  return true
}
```

从路由的角度来讲, 这样确实更符合逻辑, 因为 link 会随路由记录的变化 active. 这对于嵌套路由和别名很重要, 尤其是那些不与 router-link 的 location 共享当前 url 的一部分时就不能处于 active 的.
从导航的角度来讲, 也更符合逻辑, 一个 active 的 link 不会触发一个新的导航 (除了嵌套路由, 因为它可能是导航).

## 设计细节

active 的行为应该与路由的 _匹配器_ 联系的更加紧密一些, 就是说它应该与当前 url 呈现的内容相关, 这是 _路由记录_ 的一部分. 因此, `query` 和 `hash` 不应该影响到这个行为. 似乎确实[有人想要这样](https://github.com/vuejs/vue-router/issues/2040), 但 **我不知道是否有人因此(指 `query` 也能影响激活状态)收益**.

### `router-link-exact-active`

这个更改也会影响 _exact active_ 的行为. 从 _匹配器_ 的角度来看, 只有在当前路由和 link 完全相同时才能使用 `router-link-exact-active` 类. 也就是说 `query` 和 `hash` 不会影响这个行为(_active_ 也是一样).

_active_ 的这个新行为完全消除了 _root link_ (`/`) 上使用 `exact` prop 的警告, 并且使得 https://github.com/vuejs/rfcs/pull/36 没有必要, 也不会带来不一致.

### 嵌套路由

需要注意, 嵌套路由只有在 params 与渲染的路由一致时才会被匹配.

例如, 设置了以下路由:

```js
const routes = [
  {
    path: '/parent/:id',
    children: [
      // 空的子路由
      { path: '' },
      // 带 id 的子路由
      { path: 'child/:id' },
      { path: 'child-second/:id' }
    ]
  }
]
```

如果当前路由是 `/parent/1/child/2`, 以下 link 会表现为:

| url                      | active | exact active |
| ------------------------ | ------ | ------------ |
| /parent/1/child/2        | ✅      | ✅            |
| /parent/1/child/3        | ❌      | ❌            |
| /parent/1/child-second/2 | ❌      | ❌            |
| /parent/1                | ✅      | ❌            |
| /parent/2                | ❌      | ❌            |
| /parent/2/child/2        | ❌      | ❌            |
| /parent/2/child-second/2 | ❌      | ❌            |

### 无关但相似的路由

在路由记录中不相关但有相同路径的路由不再 active.

例如, 设置了以下路由:

```js
const routes = [
  { path: '/movies' },
  { path: '/movies/new' },
  { path: '/movies/search' }
]
```

如果当前路由是 `/movies/new`, 以下 link 会表现为:

| url            | active | exact active |
| -------------- | ------ | ------------ |
| /movies        | ❌      | ❌            |
| /movies/new    | ✅      | ✅            |
| /movies/search | ❌      | ❌            |

注意: **这个行为和真实情况不一样**.

需要注意, 有时嵌套仍会受到 _active_ 的 link 影响:

```js
const routes = [
  {
    path: '/movies',
    // 我们需要这样渲染子路由 (注意往下看)
    component: { render: () => h('RouterView') },
    children: [
      { path: 'new' },
      // 不同的子路由
      { path: 'search' }
    ]
  }
]
```

如果当前路由是 `/movies/new`, 以下 link 会表现为:

| url            | active | exact active |
| -------------- | ------ | ------------ |
| /movies        | ✅      | ❌            |
| /movies/new    | ✅      | ✅            |
| /movies/search | ❌      | ❌            |

注意: 为了让其更容易使用, 我们可能会允许 `component` 缺省, 并在内部默认填入一个渲染 `RouterView` 的 component 选项.

### 别名

鉴于别名只是设置了一个不同的 `path`, 而路由的其他选项都是一样的, 那么当别名的`path` 被匹配到时, 别名所在的路由就应该被 active, 这样更符合逻辑, 反之亦然.

例如, 设置了以下路由:

```js
const routes = [{ path: '/movies', alias: ['/films'] }]
```

如果当前路由是 `/movies` **或** `/films`, 以下 link 会表现为:

| url     | active | exact active |
| ------- | ------ | ------------ |
| /movies | ✅      | ✅            |
| /films  | ✅      | ✅            |

#### 嵌套别名

处理一个别名路由的嵌套行为也是一样的.

例如, 设置了以下路由:

```js
const routes = [
  {
    path: '/parent/:id',
    alias: '/p/:id',
    children: [
      // 空的子路由
      { path: '' },
      // 带 id 的子路由
      { path: 'child/:id', alias: 'c/:id' }
    ]
  }
]
```

如果当前路由是 `/parent/1/child/2`, `/p/1/child/2`, `/p/1/c/2`, 或者, `/parent/1/c/2` 以下 link 会表现为:

| url               | active | exact active |
| ----------------- | ------ | ------------ |
| /parent/1/child/2 | ✅      | ✅            |
| /parent/1/c/2     | ✅      | ✅            |
| /p/1/child/2      | ✅      | ✅            |
| /p/1/c/2          | ✅      | ✅            |
| /p/1/child/3      | ❌      | ❌            |
| /parent/1/child/3 | ❌      | ❌            |
| /parent/1         | ✅      | ❌            |
| /p/1              | ✅      | ❌            |
| /parent/2         | ❌      | ❌            |
| /p/2              | ❌      | ❌            |

#### 绝对地址的嵌套别名

嵌套的子路由的 `path` 开头带上 `/` 就能设置为绝对路径, 在这种情况下, 规则同样适用:

例如, 设置了以下路由:

```js
const routes = [
  {
    path: '/parent/:id',
    alias: '/p/:id',
    name: 'parent',
    children: [
      // 空的子路由
      { path: '', alias: ['alias', '/p_:id'], name: 'child' },
      // 绝对地址的子路由. 需要加个 `id` 因为父路由上有
      { path: '/p_:id/absolute-a', alias: 'as-absolute-a' },
      // 同上, 但别名是绝对地址
      { path: 'as-absolute-b', alias: '/p_:id/absolute-b' }
    ]
  }
]
```

如果当前路由是 `/p_1/absolute-a`, `/p/1/as-absolute-a`, 或, `/parent/1/as-absolute-a`, 以下 link 会表现为:

| url                  | active | exact active |
| -------------------- | ------ | ------------ |
| /p/1/as-absolute-a   | ✅      | ✅            |
| /p_1/absolute-a      | ✅      | ✅            |
| /parent/1/absolute-a | ✅      | ✅            |
| /parent/2/absolute-a | ❌      | ❌            |
| /parent/1/absolute-b | ❌      | ❌            |
| /p/1/absolute-b      | ❌      | ❌            |
| /p_1/absolute-b      | ❌      | ❌            |
| /parent/1            | ✅      | ❌            |
| /p/1                 | ✅      | ❌            |
| /parent/1/alias      | ✅      | ❌            |
| /p/1/alias           | ✅      | ❌            |
| /p_1                 | ✅      | ❌            |
| /parent/2            | ❌      | ❌            |
| /p/2                 | ❌      | ❌            |

注意空的 `path` 记录是 _active_ 但不是 _exact active_ 的, 和其他子路由 `/p/1/absolute-b` 不一样. 它的所有别名也都是 _active_ 的, 因为都是空的 `path` 的别名. 反过来说: `path` 不为空但某个别名为空, 那它们**都不会** active 因为原始的 `path` 优先级高于别名.

#### 命名的嵌套路由

如果 url 是通过父路由的 `name` 解析的, 比如下面的 `parent`, **它不会包含空的 path 的子路由**. 这很重要因为它们会解析成相同的 url, 不过在 `router-link` 的 `to` 中, 当处于 _active_ 和/或 _exact active_ 状态时, 会产生不同的结果. 这与它们呈现出的差异以及其他 active 行为是一致的.

例如, 用之前上面那个例子, **如果当前的 location 指向 `/parent/1`, 父视图和子视图都在渲染, 就表示我们实际上位于 `{ name: 'child' }` 而不是 `{ name: 'parent' }`**, 会得出一个与之前相似的表, 但多了 `to` 的对比:

| `to` 的值                                 | 解析的 url                | active | exact active |
| ----------------------------------------- | ------------------------- | ------ | ------------ |
| `{ name: 'parent', params: { id: '1' } }` | `/parent/1` (parent)      | ✅      | ❌            |
| `'/parent/1'`                             | `/parent/1` (child)       | ✅      | ✅            |
| `{ name: 'child', params: { id: '1' } }`  | `/parent/1` (child)       | ✅      | ✅            |
| `'/p_1'`                                  | `/p_1` (child)            | ✅      | ✅            |
| `'/parent/1/alias'`                       | `/parent/1/alias` (child) | ✅      | ✅            |

但是 **如果当前 location 指向 `{ name: 'parent' }`**, 它仍会解析成一样的 url, `/parent/1`, 但会得出不一样的表:

| `to` 的值                                 | 解析的 url                | active | exact active |
| ----------------------------------------- | ------------------------- | ------ | ------------ |
| `{ name: 'parent', params: { id: '1' } }` | `/parent/1` (parent)      | ✅      | ✅            |
| `'/parent/1'`                             | `/parent/1` (child)       | ❌      | ❌            |
| `{ name: 'child', params: { id: '1' } }`  | `/parent/1` (child)       | ❌      | ❌            |
| `'/p_1'`                                  | `/p_1` (child)            | ❌      | ❌            |
| `'/parent/1/alias'`                       | `/parent/1/alias` (child) | ❌      | ❌            |

### 重复的 params

如果像下面这样 params 重复了:

- `/articles/:id+`
- `/articles/:id*`

**所有的 params** 如果都按顺序匹配到了, 那么这个 link 会 _active_ 且 _exact active_.

### `exact` prop

在进行这些更改之前, `exact` 会匹配这个 location. 其主要目的时为了解决 `/` 的警告, 但它检查了 `query` 和 `hash`.
正因如此, 才有了新的 active 行为, [`exact` prop](https://router.vuejs.org/zh/api/#exact) 的唯一目的就变成了 使 link 在 `router-link-exact-active` 出现时也使用 `router-link-active`. 不过这样做并没有什么用了, 因为我们可以使用 `router-link-exact-active` 类直接定位到元素.
所以, 我认为 `exact` prop 可以从 `router-link` 中移除. 这也让 https://github.com/vuejs/rfcs/pull/37 过时了, 这个 pr 还为 `exact` 引入了类似上方描述的功能.

某些用户可能需要修改一下他们的 CSS 类, 从 `router-link-exact-active` 改成 `router-link-active`.

## 缺点

- 这个不会向后兼容. 也许会在 Vue Router v3 中加个 `exact-path`.
- 使用 `exact` prop 的用户需要依赖 `router-link-exact-active` 或者使用 `exact-active-class` prop.
- `includesQuery` 函数需要用户自己添加.

## 备选方案

- 保留 `exact` prop, 当 `router-link-exact-active` 出现时, 同时注入 `router-link-active`.
- 保留匹配 `query` 和 `hash` 时 _active_ 的行为而不是只跟 params 相关.
- 改变 _active_ 的行为只匹配路由的 `path` 部分(包括 params) 且忽略 `query` 和 `hash`.

## 升级策略

- 在 v3 中加入 `exact-path` 来缓解现存的问题