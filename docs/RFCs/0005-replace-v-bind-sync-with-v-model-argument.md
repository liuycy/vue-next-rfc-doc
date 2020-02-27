# 用 v-model 取代 v-bind.sync

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0005-replace-v-bind-sync-with-v-model-argument.md>

- 开始日期: 2019-01-28
- 目标版本: 3.x
- 参考 Issues: https://github.com/vuejs/vue-next/issues/8
- 实现 PR: (留空)

## 概要

移除 `v-bind` 上的 `sync` 修饰符, 使用 带参数的 `v-model` 来代替. 

## 基本用例

以前的语法

```vue
<MyComponent v-bind:title.sync="title" />
```

现在的语法

```vue
<MyComponent v-model:title="title" />
```

## 动机

`v-bind.sync` 在 2.x 中的使用情况相当混乱, 因为用户以为可以像 `v-bind` 一样使用它 (完全不看我们在文档中写的). 我认为最好的解释就是: 

> 认为 `v-bind:title.sync="title"` 是一种具有额外功能的正常绑定是错误的想法, 因为这跟双向绑定完全不同. `.sync` 修饰符的工作原理就像另一种用于创建双向绑定的语法糖 `v-model`. 
> 主要区别在于 `.sync` 可以在单个组件上定义多个双向绑定, 但 `v-model` 只能定义一个. 

那么问题来了: 如果告诉用户不要将 `v-bind.sync` 认为是 `v-bind`, 应该把它认为是 `v-model`, 那它是不是应该成为 `v-model` 的一部分 ?

## 设计细节

> 注意: 虽然不是这个提案的一部分, 但 Vue 3 的 `v-model` 实现细节可能会修改, 为了能让透明的包装组件(transparent wrapper components)更容易实现. 
> 当你看到 `modelValue` 属性 和 `update:modelValue` 事件时, 你要知道那是实现 `v-model` 特殊行为的占位符, 不是这个提案的内容. 

### 在元素上

```vue
<input v-model="xxx">

<!-- 是下面的缩写: -->

<input
  :model-value="xxx"
  @update:model-value="newValue => { xxx = newValue }"
>
```

```vue
<input v-model:aaa="xxx">

<!-- 无效: 会抛出一个编译时错误 -->
```

注意: `v-bind:aaa.sync="xxx"` 目前不会抛出编译时错误

### 在组件上

```vue
<MyComponent v-model="xxx" />

<!-- 是下面的缩写: -->

<MyComponent
  :model-value="xxx"
  @update:model-value="newValue => { xxx = newValue }"
/>
```

```vue
<MyComponent v-model:aaa="xxx"/>

<!-- 是下面的缩写: -->

<MyComponent
  :aaa="xxx"
  @update:aaa="newValue => { xxx = newValue }"
/>
```

### 复制`v-bind.sync="xxx"`的对象展开行为

其他带参数的指令有 `v-bind` 和 `v-on`, 它们都是使用无参数的版本来处理展开对象, 但 `v-model` 无参数的版本已经是 `v-model:model-value="xxx"` 的缩写了. 
我考虑了以下几种选项: 

1. **将 `v-model="xxx"` 改为处理展开对象, 强制用户使用`v-model:model-value="xxx"`处理原来的行为**. 这样可以让`v-model`行为更像`v-bind`与`v-on`, 但会造成一个破坏性修改导致常见用例更复杂冗长. 
2. **给`v-model`加一个修饰符(如: `.spread`)**. 这样的破坏性改动较小, 但与其他指令行为不一致会让用户疑惑, 而且框架整体上会变得更复杂. 
3. **当传入对象时自动检测并改变行为(如: `v-model="{ ...xxx }"`)**. 这样的破坏性改动也很小, 而且与其他带参数的指令行为更加一致, 因为 `v-bind={ ...xxx }` 也有相同的效果. 
   我预料这会产生分歧, 有人会认为这样比较直观, 而有人会认为 使用 `xxx` 和 `{ ...xxx }` 导致的不同的行为会让人疑惑. 
4. **直接禁止在`v-model`使用对象展开**. 这样可以避免前两个选项的问题, 但缺点是让一些人(虽然可能是小部分的)更难迁移到 Vue 3. 
   最好的情况是: 那些本来可以因此功能受益的 Templates/JSX 会变又臭又长难以维护. 最坏的情况是: (使用 `createElement/h` 强制重构渲染函数时)直接无法使用.

这些都不是好选项, 但我更加倾向于选项 2. 我还想听听我可能错过的其他好建议. 

## 缺点
与其使用破坏性性修改造成重大损失, 这种做法的损失相对较小 - 一方面是因为 `.sync` 修饰符还没有被广泛使用, 另一方面是因为迁移用户可能会更容易. (详见下方升级策略)

## 升级策略

作为破坏性修改, 只能在 Vue 3 主版本引入. 不过, 我们可以做些工作来简化迁移: 

- 检测到 `v-bind` 使用 `.sync` 修饰符时发出一个警告, 链接到关于这个修改的迁移指南. 
- 使用新的迁移助手, 我们应该可以检测并修复 100% 的 `v-bind` 和 `.sync` 同时使用的案例.

总之, 学习和迁移大量使用 `.sync` 的大型代码库只需要几分钟. 
