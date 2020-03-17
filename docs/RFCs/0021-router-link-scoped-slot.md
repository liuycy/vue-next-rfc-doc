# router-link 作用域插槽

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

### 自定义 `tag` 属性

如果能被作用域插槽代替的话, 我不确定是否要保留 `tag` 属性, 因为这个属性无法处理自定义组件除非是非常简单的, 但我们可能会用到自定义的 UI 组件而非基础用例: 

```vue
<router-link to="/" tag="button">
  <Icon>home</Icon><span class="xs-hidden">Home</span>
</router-link>
```

相当于是: 

```vue
<router-link to="/" v-slot="{ navigate, isActive, isExactActive }">
  <button role="link" @click="navigate" :class="{ active: isActive, 'exact-active': isExactActive }">
    <Icon>home</Icon><span class="xs-hidden">Home</span>
  </button>
</router-link>
```

(有关作用域插槽属性的说明, 请参阅下面)

### 作用域插槽

作用域插槽能获取到自定义集成所需的任何信息, 并允许在任意层级使用 active 相关的 class, 点击事件的监听, links 等. 
这样可以更好地与 [Bootstrap](https://getbootstrap.com/docs/4.3/components/navbar/) 之类的框架集成. 
这样就可以避免像 [bootstrap-vue](https://bootstrap-vue.js.org/docs/components/navbar/#navbar) 那样写一堆样板代码

```vue
<router-link to="/" v-slot="{ href, navigate, isActive }">
  <li :class="{ 'active': isActive }">
    <a :href="href" @click="navigate">
      <Icon>home</Icon><span class="xs-hidden">Home</span>
    </a>
  </li>
</router-link>
```

#### 可访问变量

插槽应该提供这些在 `router-link` 内部计算的值: 

- `href`: 解析要添加到锚点标签的相对地址 (当没有提供 route.fullPath 但提供了 base 时, 会包含 base)
- `route`: 从 `to` 属性中解析成 route location 的各个属性 (与 `$route` 一致)
- `navigate`: 触发导航的函数 (通常绑定点击事件). 点击时同时会调用 `preventDefault`.
- `isActive`: 当应用 `router-link-active` 时为 true, 可以被 `exact` 属性修改
- `isExactActive`: 当应用 `router-link-exact-active` 时为 true, 可以被 `exact` 属性修改.

## 缺点

- 虽然可以保持现有的行为正常工作且只暴露作用域插槽为新行为, 但是仍会阻碍我们使用这个实现来修复现有的问题. 所以会引入一些破坏性更改来保持一致性.
- 无法访问默认的 `router-link` 类, 例如`router-link-active`和`router-link-exact-active`

## 备选方案

- 为了方便保留 `event` 属性

## 升级策略

- 根据用例为新行为编写文档
- 弃用 `tag` 和 `event` 抛出一条信息并链接到 v4 中的已移除文档

## 未解决问题
