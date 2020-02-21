---
sidebar: auto
---

# Composition API RFC

## 设计细节

### 代码组织

#### 什么是"有组织的代码"
我们回想一下到底什么才是"有组织的代码". 编写有组织的代码的目的就是让代码更容易阅读和理解. 
要如何才能做到"理解"代码? 仅凭组件中包含了哪些选项就能说我们"理解"它了吗? 
你有看过其他开发者写的大型组件吗(比如[这个](https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-ui/src/components/folder/FolderExplorer.vue#L198-L404)), 看懂了吗?

想想你要怎么跟你的同事梳理类似上面链接中的大型组件的逻辑. 你很可能会从"这个组件会处理 X, Y 和 Z"说起, 而不是"这个组件有哪些数据, 计算属性和方法". 
在理解组件时, 我们更在意"组件试图做什么"(即代码背后的意图), 而不是"这个组件用了哪些选项". 基于选项的 API 自然可以回答后者, 但却很难解释前者.

#### 逻辑关注点 vs 选项类型
我们将组件处理的"X, Y 和 Z"定义为**逻辑关注点**. 小型单一的组件通常不存在可读性问题, 因为整个组件就处理一个关注点. 
但在高级点的使用场景下这个问题就会变得很突出, 比如[Vue CLI UI file explorer](https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-ui/src/components/folder/FolderExplorer.vue#L198-L404)
这个组件, 需要处理许多不同的逻辑关注点: 
- 跟踪当前文件夹状态
- 处理文件夹导航(打开, 关闭, 刷新...)
- 处理新文件夹的创建
- 是否只显示收藏夹
- 是否显示隐藏文件夹
- 处理当前工作目录的修改

如果你在阅读基于选项 API 的代码, 你肯定很难立刻找出并区分这些逻辑关注点. 你会看到同一个功能被拆的到处都是, "创建新文件夹"功能用了两个数据属性，一个计算属性和一个方法, 而且方法定义在属性下面一百多行的地方. 
如果我们用颜色标记一下同一个功能, 你就会发现它们非常分散: 

<div style="text-align: center;">
  <img src="https://user-images.githubusercontent.com/499550/62783021-7ce24400-ba89-11e9-9dd3-36f4f6b1fae2.png">
</div>

这样会导致复杂的组件变得很难理解和维护, 选项把逻辑强制拆分. 通过选项强行拆分会导致逻辑关注点变得模糊, 而且我们在处理同一个功能时, 需要在不同的选项间跳来跳去. 
> 注意: 提供的这个例子是截至我们编写这篇文章为止的最新代码, 没有任何修改, 源代码现在可能会有些许的改动. 

是时候表演真正的技术啦, 现在我们用 `Composition API` 来改写这个例子中的"新建文件夹"功能: 
```js
function useCreateFolder (openFolder) {
  // 原本在 data() 里面定义的属性
  const showNewFolder = ref(false)
  const newFolderName = ref('')

  // 原本在 computed 里面定义的计算属性
  const newFolderValid = computed(() => isValidMultiName(newFolderName.value))

  // 原本在 method 里面定义的方法
  async function createFolder () {
    if (!newFolderValid.value) return
    const result = await mutate({
      mutation: FOLDER_CREATE,
      variables: {
        name: newFolderName.value
      }
    })
    openFolder(result.data.folderCreate.path)
    newFolderName.value = ''
    showNewFolder.value = false
  }

  return {
    showNewFolder,
    newFolderName,
    newFolderValid,
    createFolder
  }
}
```

现在新建文件夹的功能全部写在一个函数里, 从函数名称就能看出这个函数是做什么的, 这就是我们说的**组合函数**. 
建议定义组合函数时函数名用`use`开头, 以此类推我们可以把各个逻辑关注点改成组合函数. 
<div style="text-align=center;">
  <img src="https://user-images.githubusercontent.com/499550/62783026-810e6180-ba89-11e9-8774-e7771c8095d6.png">
</div>

> 上图中不包含 `import`语句 和 `setup()`函数, 改造后的完整代码可以查看[这里](https://gist.github.com/yyx990803/8854f8f6a97631576c14b63c8acd8f2e)

每个逻辑关注点都写到一个函数里了, 可以不用再跳来跳去了. 组合函数再编辑器里还能折叠起来方便浏览: 
```js
export default {
  setup() { // ...
  }
}

function useCurrentFolderData(networkState) { // ...
}

function useFolderNavigation({ networkState, currentFolderData }) { // ...
}

function useFavoriteFolder(currentFolderData) { // ...
}

function useHiddenFolders() { // ...
}

function useCreateFolder(openFolder) { // ...
}
```

`setup()`函数是所有组合函数的入口点: 
```js
export default {
  setup () {
    // 网络相关
    const { networkState } = useNetworkState()

    // 文件夹相关
    const { folders, currentFolderData } = useCurrentFolderData(networkState)
    const folderNavigation = useFolderNavigation({ networkState, currentFolderData })
    const { favoriteFolders, toggleFavorite } = useFavoriteFolders(currentFolderData)
    const { showHiddenFolders } = useHiddenFolders()
    const createFolder = useCreateFolder(folderNavigation.openFolder)

    // 当前工作目录相关
    resetCwdOnLeave()
    const { updateOnCwdChanged } = useCwdUtils()

    // 工具函数
    const { slicePath } = usePathUtils()

    return {
      networkState,
      folders,
      currentFolderData,
      folderNavigation,
      favoriteFolders,
      toggleFavorite,
      showHiddenFolders,
      createFolder,
      updateOnCwdChanged,
      slicePath
    }
  }
}
```

没错, 用选项 API 的话不用写那么多, 但是`setup()`函数读起来就像这个组件试图做什么——选项 API 读起来就没有这种感觉. 
通过参数传递, 你会很清楚组合函数之间的关系. 还有, `return`语句是唯一可以检查函数暴露了什么参数给模板的地方.

同一个功能, 可以用 `选项 API` 也可以用 `组合函数 API`, 选项 API 更具强制性, 而组合API 更关注逻辑. 

### 逻辑提取和复用
在组件间提取和复用逻辑的话, 组合 API 非常灵活好用. 不需要再依赖神奇的`this`上下文, 它只依赖传入的参数和全局的 Vue API. 
你可以把任何你想复用的组件逻辑导出为一个函数. 你甚至可以导出整个`setup()`来实现`extend`的功能. 

举个例子: 实现跟踪鼠标的位置
```js
import { ref, onMounted, onUnmounted } from 'vue'

export function useMousePosition() {
  const x = ref(0)
  const y = ref(0)

  function update(e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return { x, y }
}
```
组件可以导入这个函数: 
```js
import { useMousePosition } from './mouse'

export default {
  setup() {
    const { x, y } = useMousePosition()
    // 其它逻辑 .. 
    return { x, y }
  }
}
```

在文件夹的例子中, 我们提取了一些通用的代码(比如: `usePathUtils` 和 `useCwdUtils`)到外部文件中, 因为在其它文件也能用到. 
其实用 `mixins`, `高阶组件`或`无渲染组件(通过插槽)`也能实现逻辑复用, 网上有很多教程这里不再赘述了. 但与组合函数相比, 这些方法都有各自的缺点: 
- 渲染上下文中的属性来源不明确. 例如: 使用了多个`mixins`的组件在渲染模板时, 很难分清某个属性是从哪个`mixins`注入的
- 命名空间冲突. `mixins`可能会有属性名或方法名的冲突, 高阶组件可能会有 props 名的冲突
- 性能. 高阶组件和无渲染组件需要创建一个有状态的组件, 这会造成性能损失
相比之下, 使用组合 API :
- 暴露给模板的属性来源清晰, 因为都是来自组合函数的
- 不存在命名空间的冲突, 组合函数的返回值可以随便重命名
- 复用逻辑不用创建不必要的组件

### 与现有 API 一起使用
组合 API 可以与现有的 API 一起使用. 
- 组合 API 会比 2.x 的选项(`data`, `computed` 和 `methods`)先解析完, 所以在组合 API 内访问不到选项定义的属性和方法. 
- `setup()` retrun 的属性会暴露在 `this` 上, 选项 API 可以访问. 

### 插件开发
许多插件会将属性注入到`this`上. 例如: Vue Router 会注入`this.$route`和`this.$router`, Vuex 会注入`this.$route`. 
这就让类型推断变得很棘手, 因为每一个插件都要为注入的属性添加类型到 Vue. 

当你使用组合 API 时, 没有`this`了, 插件可以通过内部调用 [`provide` 和 `inject`](#TODO) 提供组合函数, 举个例子: 
```js
const StoreSymbol = Symbol()

export function provideStore(store) {
  provide(StoreSymbol, store)
}

export function useStore() {
  const store = inject(StoreSymbol)
  if (!store) {
    // 这里可以报错, 没有获取到 store
  }
  return store
}
```

在业务代码中



