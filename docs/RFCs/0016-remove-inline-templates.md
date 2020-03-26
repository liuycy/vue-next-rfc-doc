# 16. 移除行内模板

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0016-remove-inline-templates.md>

- 开始日期: 2019-11-14
- 目标版本: 3.x
- 参考 Issues: N/A
- 实现 PR: (leave this empty)

## 概要

不再支持[内联模板功能](https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E5%86%85%E8%81%94%E6%A8%A1%E6%9D%BF)

## 动机

最初引入 `inline-template` 是为了处理 在传统 SSR 应用中(如: Rails, Django 或 Laravel)使用 Vue 的情况. 这个属性允许用户使用组件内的内容直接替换组件的模板. 

`inline-template` 最大的问题是会让模板的作用域变得非常难以理解, 按照惯例模板中的每一个变量要么是用户定义的, 要么是指令(如: `v-for` and `v-slot`)明确引入的作用域变量. 
`inline-template` 在同一个模板中混合了多个作用域的变量就打破了这种设定: 

``` vue
<div>
  {{ parentMsg }}
  <child-comp inline-template>
    {{ parentMsg }}
  </child-comp>
</div>
```

::: v-pre
在组件中使用 slots 的话, 插槽内的  `{{ parentMsg }}`  可以直观地正常运行. 但使用 `inline-template` 的话, 类似的组件中 `v-for` + `inline-template` 一起使用时就不能正常运行: 
:::

``` vue
<child-comp inline-template v-for="item in list">
  {{ item.msg }}
</child-comp>
```

因为内部的模板访问不到 `item`, 它其实指向了 `child-comp` 组件内的 `this.item`

## 升级策略

### 替代方案 1: `<script>` 标签

当使用的 `inline-template` 可以不需要构建直接将模板写在 HTML 页面中时. 在这种情况下, 最直接的解决方案就是使用能选择的 `<script>`: 

``` vue
<script type="text/html" id="my-comp-template">
  <div>
    {{ hello }}
  </div>
</script>
```

然后在组件中通过 id 选择器使用这个模板: 

``` js
const MyComp = {
  template: '#my-comp-template',
  // ...
}
```

这样不需要任何构建配置, 可以在所有浏览器中使用, 且不受 in-DOM HTML 解析的约束(如: 你可以使用驼峰命名的 prop 名称), 而且在大部分 IDE 中支持语法高亮.
在传统服务端框架中, 这部分模板可以拆到服务端模板部分(注入到 HTML 中)以便获得更好的可维护性.

### 替代方案 2: 默认插槽

以前使用 `inline-template` 的组件可以使用默认插槽重构 - 可以让数据的作用域更明确, 同时保留了编写内联子级内容的便利: 

``` vue
<!-- 之前 -->
<my-comp inline-template :msg="parentMsg">
  {{ msg }} {{ childState }}
</my-comp>

<!-- 之后 -->
<my-comp v-slot="{ childState }">
  {{ parentMsg }} {{ childState }}
</my-comp>
```

那么在组件内就可以不用模板直接渲染这个默认插槽了 (在 Vue 3 由于支持 fragment, 你可以把插槽作为根节点渲染了): 

``` vue
<!--
  在子组件模板位置, 渲染默认插槽同时传入子组件的属性
-->
<slot :childState="childState" />
```
