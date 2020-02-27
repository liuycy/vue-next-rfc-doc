# 动态指令参数

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0003-dynamic-directive-arguments.md>

- 开始日期: 2019-01-16
- 目标版本: (2.x / 3.x)
- 参考 Issues: <https://github.com/vuejs/rfcs/pull/2>, <https://github.com/vuejs/rfcs/pull/3>
- 实现 PR: <https://github.com/vuejs/vue/pull/9373>

## 概要

在指令参数中支持动态值. 

## 基本用例

```vue
<div v-bind:[key]="value"></div>
<div v-on:[event]="handler"></div>
```

## 动机

由于指令参数是静态的, 因此当前用户必须通过无参数对象绑定才能利用动态键: 

```vue
<div v-bind="{ [key]: value }"></div>
<div v-on="{ [event]: handler }"></div>
```

然而, 这有几个问题: 

- 这是一个鲜为人知的技术, 你需要知道 `v-bind`/`v-on` 的对象绑定的用法 和 JavaScript 可以计算 key 的知识点.
- 上面这样生成的代码效率较低: 这回产生一个临时的对象, 而且如果同一个元素上绑定了其他静态属性就必须遍历这个对象然后合并到现有的数据对象中. 代码大致如下所示: 

  ```js
  return h('div', {
    on: Object.assign({
      click: onClick
    }, {
      [event]: handler
    })
  })
  ```

  和动态参数一起, 我们可以直接生成: 

  ```js
  return h('div', {
    on: {
      click: onClick,
      [event]: handler
    }
  })
  ```

另外, `v-slot`并没有对象绑定的用法, 因为它的值只用于定义 scope 变量. 没有动态参数, `v-slot` 就不能动态生成插槽名称了. 
尽管很少有人会这样做, 如果只是为了这个限制重写整个模板渲染函数代价太大了. 

## 设计细节

```vue
<!-- v-bind 动态特性名 -->
<div v-bind:[key]="value"></div>

<!-- v-bind 动态特性名缩写 -->
<div :[key]="value"></div>

<!-- v-on 动态事件 -->
<div v-on:[event]="handler"></div>

<!-- v-on 动态事件缩写 -->
<div @[event]="handler"></div>

<!-- v-slot 动态插槽名 -->
<foo>
  <template v-slot:[name]>
    Hello
  </template>
</foo>

<!-- v-slot 动态插槽名缩写 -->
<!-- 待定 #3 -->
<foo>
  <template #[name]>
    Default slot
  </template>
</foo>
```

### 特殊值 `null` 的处理

动态参数的值应该是字符串. 但是, 如果我们允许 null 作为一个特殊值, 显式地表示应该删除绑定, 那就很方便了. 任何其他非字符串值都可能出错, 并将触发警告. 

`null` 作为特殊值仅作用于 `v-bind` 和 `v-on`, 在 `v-slot` 上无效. 因为`v-slot`不是绑定也无法移除. 自定义指令可以自由决定如何处理非字符串参数, 但在适用时应遵循约定. 

## 缺点 / 注意事项

### 表达式约束

理论上来说动态指令参数支持任何复杂的 JavaScript 表达式, 但是 html 的属性名不支持空格和引号, 所以在一些情况下可能会遇到: 

```vue
<div :[key + 'foo']="value"></div>
```

上面这样写并不会如你所料, 你需要这样写: 

```vue
<div :[`${key}foo`]="value"></div>
```

也就是说, 动态属性绑定的复杂键应该通过 JavaScript 计算属性先转化好.

`更新:` 可以(通过检查缺少右括号的参数)检测到这种用法并在解析器中提供适当的警告

### 自定义指令

所以指令都支持动态属性, 这意味着自定义指令除了处理值的变化, 还要处理参数名可能的变化. 

还需要在自定义指令的 `binding`上下文中 添加 `binding.oldArgs`.

## 备选方案
没有

## 升级策略
这不是破坏性的修改, 更新文档后应该直接引入

## 未解决的问题
没有
