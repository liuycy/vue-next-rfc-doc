# 32. vtu 改进异步工作流程

> 原文: <https://github.com/vuejs/rfcs/blob/master/active-rfcs/0032-vtu-improve-async-workflow.md>

- 开始日期: 2020.02.01
- 目标版本: VTU beta-0.3x/1.x
- 参考 Issues:
- 实现 PR:

## 概要

Vue Test Utils 的 API 能够让触发重新渲染的时机可以 await. 这样使得重新渲染后的断言操作更加容易.

## 基本用例
```js
    const wrapper = mount(Component)
    await wrapper.find('.element').trigger('click')
    expect(wrapper.emitted('event')).toBeTruthy()
```
## 动机

在 Vue Test Utils `beta-29` 版本中 我们移除了 `sync` 模式, 现在我们在执行断言之前需要 `await` 那些 watchers 或 模板的重新渲染.

这样做的目的是: 通过允许 `await` 那些调用了 `trigger` 的函数, 让开发者能够更加容易地做异步测试. 

本提案在测试用例中使用 `async/await`.

## 设计细节

总体思路就是在触发异步更改的动作后, 返回一个在 `nextTick` 解析的 promise. 

这时我们需要手动 `await` 组件来更新. 这样会显得有些啰嗦, 而且对初学者不是很友好.

```js
    const wrapper = mount(Component)
    wrapper.find('.element').trigger('click')
    // 我们需要 await 组件渲染
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('event')).toBeTruthy()
```

新的 API 应该是下面这样的:

```js
    const wrapper = mount(Component)
    await wrapper.find('.element').trigger('click')
    expect(wrapper.emitted('event')).toBeTruthy()
```

对于更复杂的测试, 好处更明显了:

```js
    await wrapper.find('.button').trigger('click')
    expect(wrapper.emitted('event')).toBeTruthy()
    
    await wrapper.find('.country-option').setValue('US')
    expect(wrapper.find('.state').exists()).toBe(true)
    
    await wrapper.find('.radio-option').setChecked()
    expect(wrapper.find('.finish').attributes('disabled')).toBeFalsy()  
```

**那些应该返回一个在 next tick 上解析的 promise 的方法:**

- trigger
- setValue
- setChecked
- setData
- setProps
- setSelected
- setValue

上述 helpers 函数大多都是在内部调用了 trigger, 因此更新这些方法很简单.

#### 新增的 helpers

目前我们有 3 种方法来 await 变更:

```js
    import flushPromises from 'flush-promises'
    await flushPromises()
    // 最好选择
    await wrapper.vm.$nextTick()
    await Vue.nextTick()
```

在 Vue 3 中 `nextTick` 会从 VM 实例中移除, 所以用户需要从 Vue 直接导入该函数 `import { nextTick } from 'vue'`. 

VTU 会新增一个导出 helper 函数 `tick`. 这样用户在触发那些不能直接返回 promise 的动作后, 就能把代码组织在同一块地方, 使得 await 渲染的方式更像官方描述的那样.

像这样触发 Vue 自定义事件的情况.

```js
    import { mount, tick } from '@vue/test-utils'
    
    it('test' => {
    	const wrapper = mount(Component)
     	wrapper.find('.input').vm.$emit('input', 'Newly added note')	
    	await tick()
    
    	expect(wrapper).toMatchSnapshot()
    })
```

或者在 mounted 时 focus 一个元素, 这通常会在 next tick 上执行.

```js
    const wrapper = mount(Component)
    // await 在 mounted 中的 data focus
    await tick()
    let input = wrapper.find('input').element
    expect(input).toBe(document.activeElement)
```

## 缺点

现在每个 `trigger` 都会调用 `nextTick()` , 但我不确定会不会影响性能.

用户也许要 `await` 任何与 DOM 交互的操作, 所以写好与此相关的文档和指南很重要.

## 备选方案

## 升级策略

#### beta-30 版本以上的 Vue Test Utils 

用户需要自行确认在他们的测试环境中能否使用 `async/await`.

用户只需要移除 `$nextTick` 和 `flushPromises` 并使用新的 API.

改进相关的文档.

#### beta-30 版本之前的 Vue Test Utils 

在移除 `sync` 模式之前, 不需要 await 渲染.

## 未解决的问题