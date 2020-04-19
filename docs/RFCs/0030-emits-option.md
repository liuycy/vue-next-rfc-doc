# 30. emits 选项

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0030-emits-option.md>

- 开始日期: 2019-02-27
- 目标版本: 2.x & 3.x
- 参考 Issues: N/A
- 实现 PR:

## 概要

明确定义组件可以触发哪些事件.

## 基本用例

```javascript
const Comp = {
  emits: {
    submit: payload => {
      // 通过返回一个 boolean 验证传入参数
    }
  },
  created() {
    this.$emit('submit', {
      /* 传入参数 */
    })
  }
}
```

## 动机

- **文档:** 和 `props` 类似, 明确 `emits` 定义可以提供代码提示. 对于那些想一眼看出组件能触发什么事件的开发者来说十分有用.

- **运行时验证:** 该选项也为触发事件的传入参数提供了运行时验证.

- **类型推断:** `emits` 选项可以用来提供类型推断, 所以调用 `this.$emit` 和 `setupContext.emit` 会有类型提示.

- **IDE 支持:** 在组件上使用 `v-on` 时, IDE 可以利用 `emits` 选项来提供自动填写.

- **监听器回退控制:** 随着 attribute 回退逻辑的变更, 默认情况下组件上的 `v-on` 监听器回退了会注册为原生事件. 为了避免注册不必要的原生事件, 可以利用 `emits` 声明只注册组件事件.

## 设计细节

介绍一种新的可选组件选项 `emits` .

### 数组语法

对于简单用例, 该选项的值可以是包含事件名称的数组:

```javascript
{
  emits: [
    'eventA',
    'eventB'
  }
}
```

### 对象语法

或者也可以是一个对象, 将事件名称作为 key, 其值可以是 `null` 也可以是一个验证函数. 该函数可以接收传递给 `$emit` 调用的其他参数. 例如, 调用 `this.$emit('foo', 1, 2)`, `foo` 对应的验证函数会接收到 `1, 2` 作为参数. 验证函数应该返回一个 boolean 来表明该事件的参数是否合法.

```javascript
{
  emits: {
    // 不验证
    click: null,
    // 验证
    //
    submit: payload => {
      if (payload.email && payload.password) {
        return true
      } else {
        console.warn(`Invalid submit event payload!`)
        return false
      }
    }
  }
}
```

### 回退控制

[#154](https://github.com/vuejs/rfcs/pull/154) 提到的新的 [Attribute 回退行为](https://github.com/vuejs/rfcs/blob/amend-optional-props/active-rfcs/0000-attr-fallthrough.md) 指出在组件上使用 `v-on` 会自动处理回退:

```html
<Foo @click="onClick" />
```

我们不会为了向后兼容强制要求用户为组件上可触发的 `click` 定义 `emits`. 因此在上例中, 如果不写 `emits` 选项, `Foo`' 组件根元素上的原生 click 事件 和 该组件自定义的 `click` 事件都会被触发.

但如果 `click` 在 `emits` 选项中定义了, 那么就只会触发组件的自定义事件而不会触发原生事件.

在 `emits` 中定义的事件也不会出现在组件的 `this.$attrs` 里.

### 类型推断

在选择对象验证器语法时, 要考虑到 TypeScript 类型推断. 调用 `$emit` 时也可以复用验证器的类型:

```ts
const Foo = defineComponent({
  emits: {
    submit: (payload: { email: string; password: string }) => {
      // perform runtime validation
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submit', {
        email: 'foo@bar.com',
        password: 123 // Type error!
      })
      this.$emit('non-declared-event') // Type error!
    }
  }
})
```

## 缺点

- 对于触发组件自定义事件需要一点额外工作. 不过, 这些额外工作技术上是可以省掉的, 而且相比之下好处更多.

- 运行时验证函数应该只在开发模式下执行, 但却会增加生产打包代码的体积. Props 验证器也有同样的问题. 在生产打包时可以通过 Babel 插件将 `props` 和 `emits` 选项转换成数组形式. 这样开发代码会被剥离, 运行时行为会保持一致.

## 升级策略

引入 `emits` 选项不应该破坏任何 `$emit` 的用法.

但是, 随着回退行为的变更, 每次都定义要触发的事件会比较理想. 我们可以:

1. 提供一个 codemod 脚本自动扫描所有组件实例的 `$emit` 调用, 并生成 `emits` 选项.

2. (选择性加入) 当某个事件没有使用 emits 选项定义时抛出一个运行时警告.