# 自定义元素的互通性

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0027-custom-elements-interop.md>

- 开始日期: 2020-03-25
- 目标版本: 3.x
- 参考 Issues: N/A

## 概要

- **破坏性更改:** 自定义元素白名单现在会在模板编译时执行, 所以应该通过编译器选项来配置, 不能在运行时配置了.

- **破坏性更改:** 限制 `is` prop 只能在 `<component>` 标签中使用了.

- 介绍一种新的 `v-is` 指令来支持那些在 2.x 时在原生元素上使用 `is` 的代码.

## 动机

- 用更高效的方式支持原生自定义元素
- 改进对 [内置自定义元素](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-customized-builtin-example) 的支持.

## 设计细节

### 自定义元素

在 Vue 2.x 中, 可以通过 `Vue.config.ignoredElements` 将自定义元素标记为白名单. 这样做的缺点就是每次创建 vnode 时都要检查一下配置的白名单.

**在 Vue 3.0 中, 这种检查会放在模板编译时.** 比如下面这个模板:

```html
<plastic-button></plastic-button>
```

默认生成的 render 函数如下 (伪代码):

```js
function render() {
  const component_plastic_button = resolveComponent('plastic-button')
  return createVNode(component_plastic_button)
}
```

如果没有找到叫 `plastic-button` 的组件就会抛出一个警告.

如果用户希望使用一个叫 `plastic-button` 原生自定义元素, 那么生成的代码应该如下:

```js
function render() {
  return createVNode('plastic-button') // 作为原生元素渲染
}
```

为了让编译器能识别 `<plastic-button>` 这个原生元素:

- 如果使用打包工具: 将 `isCustomElement` 选项传给 Vue 模板编译器. 如果使用了 `vue-loader`, 这个选项应该放在 `vue-loader` 的 `compilerOptions` 中:

  ```js
  // 在 webpack 配置中
  rules: [
    {
      test: /\.vue$/,
      use: 'vue-loader',
      options: {
        compilerOptions: {
          isCustomElement: tag => tag === 'plastic-button'
        }
      }
    }
    // ...
  ]
  ```

- 如果使用即时的模板编译, 那就应该通过 `app.config` 配置:

  ```js
  const app = Vue.createApp(/* ... */)
  app.config.isCustomElement = tag => tag === 'plastic-button'
  ```

  需要注意的是运行时配置只能影响运行时的模板编译 - 它不能影响预编译的模板.

### 内置自定义元素

在[内置自定义元素](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-customized-builtin-example)规范中提到通过给内置元素添加 `is` 属性来使用自定义元素的方法:

```html
<button is="plastic-button">Click Me!</button>
```

在上述用法普及之前, Vue 的 `is` 用法模拟了这种功能. 但是, 在 2.x 中上面代码渲染的却是一个叫 `plastic-button` 的 Vue 组件. 这样就阻碍了自定义元素的原生用法.

所以在 3.0 中, 我们将 `is` prop 限制到只能用于 `<component>` 标签.

- 在 `<component>` 标签上使用时, 会和 2.x 中表现一样.

- 在普通组件上使用时, 会和普通 prop 表现一样:

  ```html
  <foo is="bar" />
  ```

  - 2.x 行为: 会渲染 `bar` 组件.
  - 3.x 行为: 会渲染 `foo` 组件并传入 `is` prop.

- 在原生元素上使用时, 会将 `is` 选项传递给 `createElement`, 并渲染成一个元素属性. 这样就能支持内置自定义元素的用法了.

  ```html
  <button is="plastic-button">Click Me!</button>
  ```

  - 2.x 行为: 会渲染 `plastic-button` 组件.
  - 3.x 行为: 会调用下面方法渲染一个原生 button

    ```js
    document.createElement('button', { is: 'plastic-button' })
    ```

### `v-is` 用于 In-DOM 模板解析

> 注意: 这节内容主要针对那些在 HTML 中直接使用 Vue 模板的代码
在 in-DOM 模板中使用时, 模板会受限于原生 HTML 的解析规则. 一些 HTML 元素, 比如 `<ul>`, `<ol>`, `<table>` 和 `<select>` 会限制其内部只能出现哪些元素. 另一些元素, 比如 `<li>`, `<tr>`, 和 `<option>` 就只能出现在某些元素内部.

在 2.x 中 我们推荐在原生元素上使用 `is` 来解除这些限制:

```html
<table>
  <tr is="blog-post-row"></tr>
</table>
```

由于上面说到的 `is` 行为的变更, 我们需要引入一个新的指令 `v-is` 来处理这些情况:

```html
<table>
  <tr v-is="'blog-post-row'"></tr>
</table>
```

注意 `v-is` 的功能如同 2.x 的 `:is` 动态绑定 - 所以通过组件名称渲染组件时, 应该传入的是 JavaScript 的字符串类型.

## 升级策略

- 兼容版本可以检测到 `config.ignoredElements` 的使用并抛出一个警告和指南.

- 自动化 codemod 脚本可以转换 2.x 中的非 `<component>` 标签上的 `is` 为 (SFC 模板的) `<component is>`, 或 (in-DOM 模板的) `v-is`.