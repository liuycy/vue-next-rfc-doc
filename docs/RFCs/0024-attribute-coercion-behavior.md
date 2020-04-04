# 24. attribute 的强制行为

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0024-attribute-coercion-behavior.md>

- 开始日期: 2020-01-30
- 目标版本: 3.x
- 参考 Issues: [#8731](https://github.com/vuejs/vue/issues/8731) [#8735](https://github.com/vuejs/vue/pull/8735) [#9397](https://github.com/vuejs/vue/issues/9397) [#11053](https://github.com/vuejs/vue/issues/11053)
- 实现 PR:

## 概要

- 删除枚举属性的内部概念并将这些属性和非布尔属性同等对待.
- 如果值为 `false` 不再移除属性. 取而代之会设置为 `attr="false"`. 要移除属性请使用 `null` 或 `undefined`.

## 动机

在 2.x 版本中, 我们会按照以下策略强制转换 `v-bind` 的值: 

- 对于某些元素上的属性, Vue 总会使用对应的 IDL (Interface Define Language) 属性: [例如 `<input>`, `<select>`, `<progress>`之类的 `value`](https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L11-L18).

- 对于 "[布尔属性](https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L33-L40)" 和 [xlinks](https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L44-L46), 如果是"假值"([`undefined`, `null` 或 `false`](https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L52-L54)) Vue 会移除这些属性, 相反会添加这些属性 (看 [这里](https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/runtime/modules/attrs.js#L66-L77) 和 [这里](https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/runtime/modules/attrs.js#L81-L85)).

- 对于 "[枚举属性](https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L20)" (例如 `contenteditable`, `draggable` 和 `spellcheck`), Vue 会尝试将它们 [强制转换](https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L24-L31) 成字符串 (`contenteditable` 现在会被特殊处理, 参考 [vuejs/vue#9397](https://github.com/vuejs/vue/issues/9397))

- 对于其他属性, 我们会移除 "假值" (`undefined`, `null`, 或 `false`) 然后按照原样设置它的值 (参考 [这里](https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/runtime/modules/attrs.js#L92-L113)).

在 2.x 中我们对 "枚举属性" 限定了只能接受 `'true'` 或 `'false'`, 这会导致一些缺陷. 这也导致了其行为跟其他非布尔属性不一样, 造成了一些困惑. 下方表格描述了 Vue 中 "枚举属性" 和 普通布尔属性的区别:

| 绑定表达式 | `foo` <sup>普通属性</sup> | `draggable` <sup>枚举属性</sup> |
| - | - | - |
| `:attr="null"` | / | `draggable="false"` |
| `:attr="undefined"` | / | / |
| `:attr="true"` | `foo="true"` | `draggable="true"` |
| `:attr="false"` | / | `draggable="false"` |
| `:attr="0"` | `foo="0"` | `draggable="true"` |
| `attr=""` | `foo=""` | `draggable="true"` |
| `attr="foo"` | `foo="foo"` | `draggable="true"` |
| `attr` | `foo=""` | `draggable="true"` |

从上表可以看出, 当前实现是会将 `true` 转成 `'true'`, 但如果值是 `false` 会将该属性移除. 这样也导致了前后矛盾并要求用户需要手动地转换布尔值为字符串, 例如在一些常见的情况下像 `aria-*` 的属性 `aria-selected`, `aria-hidden`, 等等.

## 设计细节

- 我们打算删除 "枚举属性" 这个内部概念, 使其能够和非布尔值的 HTML 属性一样.

  这样就解决了非布尔值属性和"枚举属性"之间的前后矛盾了. 比如 `contenteditable` 就能使用 `'true'` and `'false'` 之外的其他值了, 甚至可以使用还未纳入标准的关键字.

- 对于非布尔值属性, 当它们的值为 `false` 时, 不再移除该属性, 而是转换成 `'false'`.

  这样就解决了 `true` 和 `false` 之间的前后矛盾, 而且使得 `aria-*` 输出更加容易了.

下方表格描述了这种新行为:

| 绑定表达式 | `foo` <sup>普通属性</sup> | `draggable` <sup>枚举属性</sup> |
| - | - | - |
| `:attr="null"` | / | / <sup>†</sup> |
| `:attr="undefined"` | / | / |
| `:attr="true"` | `foo="true"` | `draggable="true"` |
| `:attr="false"` | `foo="false"` <sup>†</sup> | `draggable="false"` |
| `:attr="0"` | `foo="0"` | `draggable="0"` <sup>†</sup> |
| `attr=""` | `foo=""` | `draggable=""` <sup>†</sup> |
| `attr="foo"` | `foo="foo"` | `draggable="foo"` <sup>†</sup> |
| `attr` | `foo=""` | `draggable=""` <sup>†</sup> |

<small>†: 表示已变更的</small>

布尔属性保持不变.

## 缺点

该提案引入了以下破坏性更改: 

- 对于 "枚举属性":

  - `null` 将会移除该属性而不是转换成 `'false'`.
  - `'true'` 和 `'false'` 之外的 数字 和 字符串 不会再转换成 `'true'`. (旧行为不再有效.)

- 对于所有的非布尔属性, `false` 值不会再移除该属性, 而是转换成 `'false'`.

最主要的破坏性更改是用户应该停止使用 `false` 值来移除属性, 应该使用 `null` 或 `undefined`. 布尔属性不受影响, 主要影响枚举属性, 其中 `'false'` 值和缺省值会导致不同的元素状态. 例如 `aria-checked`. 这也可能会影响到 类似 `[foo]` 这样的 CSS 选择器.

## 备选方案

N/A

## 升级策略

这次不太可能提供 codemod 脚本了. 我们会在迁移指南中提供详细的信息并且在 3.x 的文档中加入 强制转换行为 的内容.

### 枚举属性

枚举属性的缺省值 和 `attr="false"` 会生成不同的 IDL 属性值 (将反映实际状态), 如下方所示:

| 枚举属性缺省值 | IDL 属性 & 值 |
| - | - |
| `contenteditable` | `contentEditable` &rarr; `'inherit'` |
| `draggable` | `draggable` &rarr; `false` |
| `spellcheck` | `spellcheck` &rarr; `true` |

想要让旧行为有效, 但因为我们将 `false` 转换成 `'false'` 了, 在 3.x Vue 的开发者需要让 `v-bind` 表达式能够解析 `contenteditable` 和 `spellcheck` 的  `false` 或 `'false'`.

在 2.x 中, 枚举属性的无效值会被转换成 `'true'`. 这一般是意料之外的, 不太可能会被大规模使用. 在 3.x 中, 应明确指定 `true` 或 `'true'`.

### 将 `false` 转换为 `'false'` 不再移除属性

在 3.x 中, 想要移除属性应该明确指定 `null` 或 `undefined`.

### 2.x & 3.x 之间行为对比

<table>
  <thead>
    <tr>
      <th>属性</th>
      <th><code>v-bind</code> 的值 <sup>2.x</sup></th>
      <th><code>v-bind</code> 的值 <sup>3.x</sup></th>
      <th>HTML 输出</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">2.x "枚举属性"<br><small>例如 <code>contenteditable</code>, <code>draggable</code> 和 <code>spellcheck</code>.</small></td>
      <td><code>undefined</code>, <code>false</code></td>
      <td><code>undefined</code>, <code>null</code></td>
      <td><i>移除</i></td>
    </tr>
    <tr>
      <td>
        <code>true</code>, <code>'true'</code>, <code>''</code>, <code>1</code>,
        <code>'foo'</code>
      </td>
      <td><code>true</code>, <code>'true'</code></td>
      <td><code>"true"</code></td>
    </tr>
    <tr>
      <td><code>null</code>, <code>'false'</code></td>
      <td><code>false</code>, <code>'false'</code></td>
      <td><code>"false"</code></td>
    </tr>
    <tr>
      <td rowspan="2">其他非布尔属性<br><small>例如 <code>aria-checked</code>, <code>tabindex</code>, <code>alt</code>, 等</small></td>
      <td><code>undefined</code>, <code>null</code>, <code>false</code></td>
      <td><code>undefined</code>, <code>null</code></td>
      <td><i>移除</i></td>
    </tr>
    <tr>
      <td><code>'false'</code></td>
      <td><code>false</code>, <code>'false'</code></td>
      <td><code>"false"</code></td>
    </tr>
  </tbody>
</table>

## 未解决问题

N/A