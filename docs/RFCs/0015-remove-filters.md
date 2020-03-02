# 移除 filters

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0015-remove-filters.md>

- 开始日期: 2019-11-12
- 目标版本: 3.x
- 参考 Issues: N/A
- 实现 PR: N/A

## 概要

移除对[过滤器](https://cn.vuejs.org/v2/guide/filters.html)的支持.

## 基本用例

``` html
<!-- 之前 -->
{{ msg | format }}

<!-- 之后 -->
{{ format(msg) }}
```

## 动机

- 过滤器的功能很容易用 函数调用 或 计算属性 取代, 它主要是提供语法而不是实用价值
- 过滤器需要使用自己的一套微语法, 这就打破了"只是 JavaScript"的语法设定 - 这样增加了学习和实现成本. 实际上, 它与 JavaScript 的 按位或运算符(`|`) 冲突了, 并使表达式解析变得更复杂.
- 过滤器也让 IDE 支持模板 变得更加困难(同样是因为这不是真正的 JavaScript)

## 缺点

- 多个过滤器串联 比 多个函数嵌套 更加易读: 
  
  ``` js
  msg | uppercase | reverse | pluralize
  // vs
  pluralize(reverse(uppercase(msg)))
  ```

  不过, 在实际使用中, 我们发现超过两个过滤器的情况相当少, 所以牺牲一点可读性可以接受

- 单独引入 或 定义函数 都比全局注册的过滤器 更啰嗦. 不过全局过滤器和在`Vue.prototype`上注册 helpers 函数本质上都是一样的. 这样全局注册的代价是: 会让代码依赖关系变得模糊, 并造成类型推断困难.

## 备选方案

JavaScript 有一个 Stage 1 的提案[管道操作符](https://github.com/tc39/proposal-pipeline-operator), 提供了十分类似的语法便利. 

``` js
let transformedMsg = msg |> uppercase |> reverse |> pluralize
```

考虑到这种提案最终可能会落地, 像 Vue 这样的框架最好不要实现类似的语法 (尤其是与当前 JavaScript 冲突的语法)

尽管如此, 但这个提案仍处于 Stage 1 且好久没有更新了, 所以是否能落地或落地之后是否还是这种语法尚不得知. 对于 Vue 来说采取这种语法作为官方 API 是十分冒险的, 如果规范最终更改了, 我们就不得不引入破坏性修改. 

在 Vue 3, 模板的表达式解析会使用[@babel/parser](https://babeljs.io/docs/en/babel-parser), 而且支持通过`expressionPlugins`编译选项(`@babel/parser` 的 [`plugins` 选项](https://babeljs.io/docs/en/babel-parser#plugins))开启管道操作符语法. 
注意 Vue 的 模板编译选项 只会解析模板语法 - 生产的 render 函数需要 Babel 进一步转译(默认情况下, 这是在基于 Webpack 的新设置中完成的)

## 升级策略

在兼容 2.x 的版本中, 可以支持过滤器, 但会抛出一个警告引导用户进行迁移. 
