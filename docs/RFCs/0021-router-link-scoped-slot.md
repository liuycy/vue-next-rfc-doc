# 21. &lt;router-link&gt; 作用域插槽

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0021-router-link-scoped-slot.md>

- 开始日期: 2019-04-29
- 目标版本: Vue (2.x / 3.x) Vue Router (3.x / 4.x)
- 参考 Issues: https://github.com/vuejs/vue-router/issues/2611,
- 实现 PR: 在 [v3.x](https://github.com/vuejs/vue-router/commit/e289ddee99fcc3129e65485e32f394c1308bb98b) 和 v4.x 中已实现

## 概要

- 移除 `tag` 属性
- 移除 `event` 属性
- 不再自动绑定点击事件到内部锚点标签
- 新增作用域插槽 API
- 新增 `custom` prop, 可以完全地自定义 `router-link` 的渲染

## 基本用例

```vue
<router-link to="/">
  <Icon>home</Icon> Home
</router-link>
```

## 动机

Router Link 当前实现有很多限制: 

- 定制化激活状态不够完善 ([#2611](https://github.com/vuejs/vue-router/issues/2611)
- 无法继承自定义组件 ([#2021](https://github.com/vuejs/vue-router/issues/2021))
- 无法禁用点击事件 (通过 `@click.prevent` 或 `disabled` 属性都不行 [#2098](https://github.com/vuejs/vue-router/pull/2098))

这个 RFC 提出通过提供一个作用域插槽来解决这些问题, 可以让开发者更加容易地根据他们的应用来拓展 Links, 也可以让库开发者能提供出一个更简单的 Vue Router 集成方案.

## 设计细节

### 自定义内容插槽

一个简单的用例是自定义内容的插槽(不嵌套锚点和按钮的)

```vue
<router-link to="/">
  <Icon>home</Icon> Home
</router-link>
```

此实现将会: 

- 生产一个锚点元素`<a>`并绑定相应的属性
  - `href`绑定指向地址
  - `class`绑定`router-link-active` 与/或 `router-link-exact-active`(可以通过 prop 或 全局选项改变)
  - 绑定点击事件来执行`event.preventDefault` 然后触发 `router.push` 或 `router.replace` (除非使用 <kbd>⌘</kbd> 或 <kbd>Ctrl</kbd> 来修饰点击事件)
- 将所有内容当作锚点元素的子级
- 将所有不是 props 的属性传递给锚点元素

**破坏性更改**:

- 不再接收 `tag` 属性 -> 使用作用域插槽代替(详情请查看下方介绍)
- 不再接收 `event` -> 使用作用域插槽代替
- 不再作为自动寻找内部第一个 `<a>` 的包装器 -> 使用作用域插槽代替

### 作用域插槽

作用域插槽能获取到自定义集成所需的任何信息, 并允许在任意层级使用 active 相关的 class, 点击事件的监听, links 等. 
这样可以更好地与 [Bootstrap](https://getbootstrap.com/docs/4.3/components/navbar/) 之类的 UI 框架集成. 
这样就可以避免像 [bootstrap-vue](https://bootstrap-vue.js.org/docs/components/navbar/#navbar) 那样写一堆样板代码

```vue
<router-link to="/" custom v-slot="{ href, navigate, isActive }">
  <li :class="{ 'active': isActive }">
    <a :href="href" @click="navigate">
      <Icon>home</Icon><span class="xs-hidden">Home</span>
    </a>
  </li>
</router-link>
```


要完全控制 `router-link` 的渲染必须使用 `custom` prop: 可以让渲染内容不被 `a` 元素包裹.

**为什么必须使用 `custom` prop**: 在 Vue 3 中, 作用域插槽和普通插槽区别不大, 也就说 vue router 无法区分以下 3 种情况:

```vue
<router-link to="/" v-slot="{ href, navigate, isActive }"></router-link>
<router-link to="/" v-slot></router-link>
<router-link to="/">Some Link</router-link>
```

虽然这三种情况都能渲染插槽内容, 但 `router-link` 需要知道是否需要使用 `a` 元素包裹内容. 在 Vue 2 种, 我们可以通过检测 `$scopedSlots` 来实现, 不过在 Vue 3 中, 只剩 `slots` 了. 也就说 Vue Router v3 和 Vue Router v4 的行为会略有不同:

- 在 v3 中, 和 `v-slot` 一起用的时候, `custom` prop 是必须的 (详见 [升级策略](#升级策略)). `router-link` 不会使用 `a` 元素包裹插槽内容.
- 在 v4 中, 和 `v-slot` 一起用的时候, `custom` prop **不是** 必须的. 它只是用来控制 `router-link` 是否应该使用 `a` 元素来包裹插槽内容:
  ```vue
  <router-link to="/" v-slot="{ href }">
  <router-link to="/" custom v-slot="{ href, navigate }">
    <a :href="href" @click="navigate">{{ href }}</a>
  </router-link>
  <!-- 都会渲染成下面这样 -->
  <a href="/">/</a>
  <a href="/">/</a>
  ```

#### 可访问变量

插槽应该提供这些在 `router-link` 内部计算的值: 

- `href`: 解析要添加到锚点标签的相对地址 (当没有提供 route.fullPath 但提供了 base 时, 会包含 base)
- `route`: 从 `to` 属性中解析成 route location 的各个属性 (与 `$route` 一致)
- `navigate`: 触发导航的函数 (通常绑定点击事件). 点击时同时会调用 `preventDefault`.
- `isActive`: 当应用 `router-link-active` 时为 true, 可以被 `exact` 属性修改
- `isExactActive`: 当应用 `router-link-exact-active` 时为 true, 可以被 `exact` 属性修改.

### 移除 `tag` prop

`tag` prop 可以被作用域插槽完美地取代, 而且代码也更加清晰. 移除这个 prop 可以减小 vue-router 库的体积.

```vue
<router-link to="/" tag="button">
  <Icon>home</Icon><span class="xs-hidden">Home</span>
</router-link>
```

相当于

```vue
<router-link to="/" custom v-slot="{ navigate, isActive, isExactActive }">
  <button role="link" @click="navigate" :class="{ active: isActive, 'exact-active': isExactActive }">
    <Icon>home</Icon><span class="xs-hidden">Home</span>
  </button>
</router-link>
```

(想知道作用域插槽可以传递哪些参数可以往上翻翻)

## 缺点

- 虽然可以保持现有的行为正常工作且只暴露作用域插槽为新行为, 但是仍会阻碍我们使用这个实现来修复现有的问题. 所以会引入一些破坏性更改来保持一致性.
- 无法访问默认的 `router-link` 类, 例如`router-link-active`和`router-link-exact-active`

## 备选方案

- 为了方便保留 `event` 属性
- 使用命名插槽取代 `prop`:

  ```vue
  <router-link #custom="{ href }">
    <a :href="href"></a>
  </router-link>
  <router-link v-slot:custom="{ href }">
    <a :href="href"></a>
  </router-link>
  <router-link custom v-slot="{ href }">
    <a :href="href"></a>
  </router-link>
  ```

  这种情况下升级策略就比较类似了, 抛出的警告会告诉用户使用命名插槽来替换 `custom` prop. 

- 内置一个新组建 `router-link-custom` 来区分这种行为. 不过这种方案比起 prop 和 命名插槽 更重(就体积而言). 相比之下 prop 更加合适, 因为我们只是改变组件的行为. 两个组件间差异太小, 没有必要内置这个新组件.
  
## 升级策略

- 根据用例为新行为编写文档
- 弃用 `tag` 和 `event` 抛出一条信息并链接到 v4 中的已移除文档
- 在 v3 中, 如果在使用作用域插槽时没有指定 `custom` prop, 会抛出一个警告提示用户使用 `custom` prop
