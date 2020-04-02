# 23. scoped 样式变更

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md>

- 开始日期: 2020-01-21
- 目标版本: 2.x, 3.x
- 参考 Issues: N/A
- 实现 PR: N/A

## 概要

在单文件组件的 scoped 样式中提供更加一致的 CSS 自定义拓展.

## 基本用例

``` html
<style scoped>
/* 深度选择器 */
::v-deep(.foo) {}
/* 指定插槽内容 */
::v-slotted(.foo) {}
/* 一次性全局规则 */
::v-global(.foo) {}
</style>
```

## 动机

Vue SFC scoped 样式可以让 CSS 只作用于当前组件. 有些用户经常碰到的情况需要改进一下.

### 深度选择器

有时我们会想让一个规则准确地作用于子组件.

原本我们是支持使用 `>>>` 让选择器更"深入". 不过, 由于不是官方的 CSS 语法, 一些 CSS 预处理器像 SASS 在解析时会出问题.

我们后面调整为 CSS 的一个提案(Chrome 甚至都实现了) `/deep/`, 不过后面这个提案被废弃了. 这样造成了一些用户的困惑, 因为他们担心在 SFC 中使用 /deep/ 会在删除该功能的浏览器中没有作用. 不过, 和 `>>>` 一样, `/deep/` 只是用于 SFC 编译器重写选择器时的编译时提示, 会在最终生成的 CSS 中移除的. 

为了避免移除的 `/deep/` 造成困惑, 我们又引入了另一个自定义的深度选择器 `::v-deep`, 这次将明确地表示这是一个 Vue 的特殊拓展, 并使用伪元素的语法以致任何预处理器都能正确解析.

为了兼容, 之前几个深度选择器仍能在 [Vue 2 SFC 编译器](https://github.com/vuejs/component-compiler-utils) 中使用, 不过在 v3 版本我们会废弃 `>>>` 和 `/deep/`.

当我们在开发 v3 版本的 SFC 编译器时, 注意到了 CSS 伪元素实际上并不是 [关系选择器](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Combinators). 接受参数的伪元素更符合 CSS 的使用习惯, 所以我们将 `::v-deep()` 改成这种形式了. 
当前 `::v-deep` 作为关系选择器的用法还是可以使用, 不过这样的用法即将废弃并会抛出一个警告.

### 指定 / 避免 插槽内容

目前, 从父级传入的插槽内容会同时受到父级的 scoped 样式 和 子级的 scoped 样式作用. 无法创建只针对插槽内容的规则, 也无法创建不影响插槽内容的规则.

在 v3 版本中, 我们打算让子级的 scoped 样式默认不再作用于插槽内容, 想要明确指定作用到插槽内容的话, 可以使用 `::v-slotted()` 伪元素.

### 一次性全局规则

目前想要添加一个全局 CSS 规则, 我们需要使用一个不带 scoped 的 `<style>` 块. 我们正在引入一个新的伪元素 `::v-global()` 来实现一次性全局规则.

---

> 我们也知道许多用户想要在单文件组件的 CSS 中使用组件的 props 或 状态. 我们正打算支持这个功能, 不过会在一个单独 RFC 中介绍.

## 设计细节

- `>>>` 和 `/deep/` 会被废弃.

- `::v-deep` 作为关系选择器的用法会被废弃:

  ``` css
  /* DEPRECATED */
  ::v-deep .bar {}
  ```

  取而代之的是接受另一个选择器作为参数的伪元素用法: 

  ``` css
  ::v-deep(.bar) {}
  ```

  上面的代码会编译为: 

  ``` css
  [v-data-xxxxxxx] .bar {}
  ```

- 从父级传入的插槽内容默认不再受子级 scoped 样式的作用. 子级现在需要使用新的伪元素 `::v-slotted()` 来明确地指定插槽内容:

  ``` css
  ::v-slotted(.foo) {}
  ```

  会被编译为: 

  ``` css
  .foo[v-data-xxxxxxx-s] {}
  ```

  注意 `-s` 后缀会使其只作用于插槽内容.

- 新的伪元素 `::v-global()` 可以在 `<style scoped>` 块内应用全局样式规则:

  ``` css
  ::v-global(.foo) {}
  ```

  会被编译为: 

  ``` css
  .foo {}
  ```

- 查看[`@vue/compiler-sfc`的测试用例](https://github.com/vuejs/vue-next/blob/master/packages/compiler-sfc/__tests__/compileStyle.spec.ts) 可以知道更多编译转换的细节.

## 升级策略

所有深度选择器之前的用法会抛出废弃警告. 当用户完全迁移完毕后, 我们会在将来的某个版本移除这些用法.

插槽作用域的更改理论上可以实现父级和子级组件的解耦, 不过这个行为的确会破坏那些依赖子级样式的插槽内容. 我们可能会提供一个选项来保留旧行为.

## 未解决的问题

我们不确定插槽行为的变更会影响到多少现有的组件 - 需要一些反馈
