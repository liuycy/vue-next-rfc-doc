# 14. 废弃 keycode

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0014-drop-keycode-support.md>

- 开始日期: 2019-11-08
- 目标版本: 3.x
- 参考 Issues: N/A
- 实现 PR: N/A

## 概要

- 不再支持使用数字(keyCode)作为 `v-on` 的修饰符
- 移除 `config.keyCodes`

## 基本用例

N/A

## 动机

在 Vue 2.x 版本中, `v-on` 已经支持 `KeyboardEvent.key` 的短横线命名作为修饰符, 例如: 当 `event.key === 'PageDown'` 时才处理事件可以这样写: 

``` vue
<input @keyup.page-down="onArrowUp">
```

这样 数字 keyCodes 和 `config.keyCodes` 就是多余的了. 另外[`KeyboardEvent.keyCode` 已经被废弃了](https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/keyCode), 所以 Vue 也应该停止支持这个功能.

## 缺点

N/A

## 备选方案

N/A

## 升级策略

- 可以写一个 codemod 脚本来检测使用了数字 keyCode 修饰符的情况并把它转成 `key` 的用法
- 在兼容版本中, 可以支持 `config.keyCodes`, 当你使用 keyCodes 时会抛出一个警告以便提醒你进行迁移
