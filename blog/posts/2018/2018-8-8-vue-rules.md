---
title: Vue 前端开发规范
tag:
  - vue
  - eslint
  - BEM
author: Artiely
date: 2018-8-8
cover: /2022-05-14-21-53-33.png
base64: 4d5054
tinyCover: /cover/2022-05-14-21-53-33.png
coverWidth: 736
coverHeight: 1592
coverPrimary: 0f0d0e
coverSecondary: f0f2f1

---

# Vue 前端开发规范

基于 Vue 官方风格指南整理

# 一、强制

## 代码必须遵循 eslint

使用 eslint standard 规范

## 组件命名

1.  组件名为多个单词组件名应该始终是多个单词的，根组件 App 除外。

正例：

```js
export default {
  name: 'TodoItem',
  // ...
}
```

反例：

```js
export default {
  name: 'Todo',
  // ...
}
```

## data 函数

2.  组件数据组件的 data 必须是一个函数。当在组件中使用 data 属性的时候 (除了 new Vue 外的任何地方)，它的值必须是返回一个对象的函数。

正例：

```js
// In a .vue file
export default {
  data() {
    return {
      foo: 'bar',
    }
  },
}
// 在一个 Vue 的根实例上直接使用对象是可以的，
// 因为只存在一个这样的实例。
new Vue({
  data() {
    return {
      foo: 'bar',
    }
  },
})
```

反例：

```js
export default {
  data: {
    foo: 'bar',
  },
}
```

## Prop 定义

3.  Prop 定义应该尽量详细。在你提交的代码中，prop 的定义应该尽量详细，至少需要指定其类型。

正例：

```js
props: {
status: String
}
// 更好的做法！
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
      'syncing',
      'synced',
      'version-conflict',
      'error'
      ].indexOf(value) !== -1
    }
  }
}
```

反例：

```js
// 这样做只有开发原型系统时可以接受
props: ['status']
```

## v-for 必须有 key

4.  为 v-for 设置键值总是用 key 配合 v-for。在组件上*总是*必须用 key 配合 v-for，以便维护内部组件及其子树的状态。甚至在元素上维护可预测的行为，比如动画中的对象固化 (object constancy)，也是一种好的做法。

正例：

```html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

反例：

```html
<ul>
  <li v-for="todo in todos">
    {{ todo.text }}
  </li>
</ul>
```

## 避免 v-if 和 v-for 用在一起

5.避免 v-if 和 v-for 用在一起永远不要把 v-if 和 v-for 同时用在同一个元素上。一般我们在两种常见的情况下会倾向于这样做：

为了过滤一个列表中的项目 (比如 v-for="user in users" v-if="user.isActive")。在这种情形下，请将 users 替换为一个计算属性 (比如 activeUsers)，让其返回过滤后的列表。为了避免渲染本应该被隐藏的列表 (比如 v-for="user in users" v-if="shouldShowUsers")。这种情形下，请将 v-if 移动至容器元素上 (比如 ul, ol)。正例：

```html
<ul v-if="shouldShowUsers">
  <li
    v-for="user in users"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

反例：

```html
<ul>
  <li
    v-for="user in users"
    v-if="shouldShowUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

## 不一定要使用 scoped 特性

6.  为组件样式设置作用域对于应用来说，顶级 App 组件和布局组件中的样式可以是全局的，但是其它所有组件都应该是有作用域的。这条规则只和单文件组件有关。你不一定要使用 scoped 特性。设置作用域也可以通过 CSS Modules，那是一个基于 class 的类似 BEM 的策略，当然你也可以使用其它的库或约定。

不管怎样，对于组件库，我们应该更倾向于选用基于 class 的策略而不是 scoped 特性。这让覆写内部样式更容易：使用了常人可理解的 class 名称且没有太高的选择器优先级，而且不太会导致冲突。正例：

```html
<template>
  <button class="c-Button c-Button--close">X</button>
</template>


<!-- 使用 BEM 约定 -->

<style>
.c-Button {
  border: none;
  border-radius: 2px;
}

.c-Button--close {
  background-color: red;
}
</style>
```

反例：

```html
<template>
  <button class="btn btn-close">X</button>
</template>

<style>
.btn-close {
  background-color: red;
}
</style>

<template>
  <button class="button button-close">X</button>
</template>

<!-- 使用 `scoped` 特性 -->

<style scoped>
.button {
  border: none;
  border-radius: 2px;
}

.button-close {
  background-color: red;
}
</style>
```

# 二、强烈推荐（增强可读性）

## 组件命名可读性

1.  组件文件只要有能够拼接文件的构建系统，就把每个组件单独分成文件。当你需要编辑一个组件或查阅一个组件的用法时，可以更快速的找到它。

正例：

```shell
components/
|- TodoList.vue
|- TodoItem.vue
```

反例：

```js
Vue.component('TodoList', {
  // ...
})

Vue.component('TodoItem', {
  // ...
})
```

2.  单文件组件文件的大小写单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)

正例：

```shell
components/
|- MyComponent.vue
```

反例：

```shell
components/
|- myComponent.vue
|- mycomponent.vue
```

3.  基础组件名应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V。

正例：

```shell
components/
|- BaseButton.vue
|- BaseTable.vue
|- BaseIcon.vue
```

反例：

```shell
components/
|- MyButton.vue
|- VueTable.vue
|- Icon.vue
```

4.  单例组件名只应该拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性。这不意味着组件只可用于一个单页面，而是每个页面只使用一次。这些组件永远不接受任何 prop，因为它们是为你的应用定制的，而不是它们在你的应用中的上下文。如果你发现有必要添加 prop，那就表明这实际上是一个可复用的组件，只是目前在每个页面里只使用一次。

正例：

```shell
components/
|- TheHeading.vue
|- TheSidebar.vue
```

反例：

```shell
components/
|- Heading.vue
|- MySidebar.vue
```

5.  紧密耦合的组件名和父组件紧密耦合的子组件应该以父组件名作为前缀命名。如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。

正例：

```shell
components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue
components/
|- SearchSidebar.vue
|- SearchSidebarNavigation.vue
```

反例：

```shell
components/
|- SearchSidebar.vue
|- NavigationForSearchSidebar.vue
```

6.  组件名中的单词顺序组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。

正例：

```shell
components/
|- SearchButtonClear.vue
|- SearchButtonRun.vue
|- SearchInputQuery.vue
|- SearchInputExcludeGlob.vue
|- SettingsCheckboxTerms.vue
|- SettingsCheckboxLaunchOnStartup.vue
```

反例：

```shell
components/
|- ClearSearchButton.vue
|- ExcludeFromSearchInput.vue
|- LaunchOnStartupCheckbox.vue
|- RunSearchButton.vue
|- SearchInput.vue
|- TermsCheckbox.vue
```

7.  模板中的组件名大小写总是 PascalCase 的

正例：

```html
<!-- 在单文件组件和字符串模板中 -->

<MyComponent/>
```

反例：

```html
<!-- 在单文件组件和字符串模板中 -->

<mycomponent/>
<!-- 在单文件组件和字符串模板中 -->
<myComponent/>
```

8.  完整单词的组件名组件名应该倾向于完整单词而不是缩写。

正例：

```shell
components/
|- StudentDashboardSettings.vue
|- UserProfileOptions.vue
```

反例：

```shell
components/
|- SdSettings.vue
|- UProfOpts.vue
```

## 标签属性可维护性书写

9.  多个特性的元素多个特性的元素应该分多行撰写，每个特性一行。

正例：

```html
<img
src="https://vuejs.org/images/logo.png"
alt="Vue Logo"

 <MyComponent
   foo="a"
   bar="b"
   baz="c"
 />
```

反例：

```html
<img src="https://vuejs.org/images/logo.png" alt="Vue Logo">
<MyComponent foo="a" bar="b" baz="c"/>
```

## 复杂运算不因该由模板来完成

10. 模板中简单的表达式组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。复杂表达式会让你的模板变得不那么声明式。我们应该尽量描述应该出现的是什么，而非如何计算那个值。而且计算属性和方法使得代码可以重用。

正例：

```js
<!-- 在模板中 -->

{{ normalizedFullName }}
// 复杂表达式已经移入一个计算属性
computed: {
  normalizedFullName: function () {
    return this.fullName.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  }
}
```

反例：

```js
{
  {
    fullName
      .split(' ')
      .map((word) => {
        return word[0].toUpperCase() + word.slice(1)
      })
      .join(' ')
  }
}
```

## 计算属性

11. 简单的计算属性正例：

```js
computed: {
  basePrice: function () {
    return this.manufactureCost / (1 - this.profitMargin)
  },
  discount: function () {
    return this.basePrice \* (this.discountPercent || 0)
  },
  finalPrice: function () {
    return this.basePrice - this.discount
  }
}
```

反例：

```js
computed: {
  price: function () {
    var basePrice = this.manufactureCost / (1 - this.profitMargin)
    return (
      basePrice -
      basePrice \* (this.discountPercent || 0)
    )
  }
}
```

## 单双引号使用

12. 带引号的特性值非空 HTML 特性值应该始终带引号 (单引号或双引号，选你 JS 里不用的那个)。在 HTML 中不带空格的特性值是可以没有引号的，但这样做常常导致带空格的特征值被回避，导致其可读性变差。

正例：

```html
<AppSidebar :style="{ width: sidebarWidth + 'px' }">
```

反例：

```html
<AppSidebar :style={width:sidebarWidth+'px'}>
```

## 指令缩写

13. 指令缩写都用指令缩写 (用 : 表示 v-bind: 和用 @ 表示 v-on:)

正例：

```html
<input
@input="onInput"
@focus="onFocus"
```

反例：

```html
<input
v-bind:value="newTodoText"
:placeholder="newTodoInstructions"
```

# 三、推荐

## 标签格式一致性

1.  单文件组件的顶级元素的顺序单文件组件应该总是让`<script`>、`<template>` 和 `<style>` 标签的顺序保持一致。且`<style>` 要放在最后，因为另外两个标签至少要有一个。

正例：

```html
<!-- ComponentA.vue -->

<template>...</template>

<script>/* ... */</script>

<style>/* ... */</style>
```

## 注意事项

四、谨慎使用 (有潜在危险的模式)

1.  没有在 v-if/v-if-else/v-else 中使用 key
    如果一组 v-if + v-else 的元素类型相同，最好使用 key (比如两个 `<div>` 元素)。

正例：

```html
<div
  v-if="error"
  key="search-status"
>
  错误：{{ error }}
</div>
<div
  v-else
  key="search-results"
>
  {{ results }}
</div>
```

反例：

```html
<div v-if="error">
  错误：{{ error }}
</div>
<div v-else>
  {{ results }}
</div>
```

2.  scoped 中的元素选择器元素选择器应该避免在 scoped 中出现。在 scoped 样式中，类选择器比元素选择器更好，因为大量使用元素选择器是很慢的。

正例：

```html
<template>
  <button class="btn btn-close">X</button>
</template>

<style scoped>
.btn-close {
  background-color: red;
}
</style>
```

反例：

```html
<template>
  <button>X</button>
</template>

<style scoped>
button {
  background-color: red;
}
</style>
```

3.  隐性的父子组件通信应该优先通过 prop 和事件进行父子组件之间的通信，而不是 this.$parent 或改变 prop。

正例：

```js
Vue.component('TodoItem', {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  template: '<input :value="todo.text" @input="$emit(\'input\', $event.target.value)" >',
})
```

反例：

```js
Vue.component('TodoItem', {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeTodo() {
      const vm = this
      vm.$parent.todos = vm.$parent.todos.filter((todo) => {
        return todo.id !== vm.todo.id
      })
    },
  },
  template: '<span> {{ todo.text }} <button @click="removeTodo"> X </button> </span>',
})
```

4.  非 Flux 的全局状态管理应该优先通过 Vuex 管理全局状态，而不是通过 this.$root 或一个全局事件总线。

正例：

```html
// store/modules/todos.js
export default {
  state: {
  list: []
  },
  mutations: {
    REMOVE_TODO (state, todoId) {
      state.list = state.list.filter(todo => todo.id !== todoId)
      }
    },
    actions: {
      removeTodo ({ commit, state }, todo) {
        commit('REMOVE_TODO', todo.id)
    }
  }
}

<!-- TodoItem.vue -->

<template>
  <span>
    {{ todo.text }}
    <button @click="removeTodo(todo)">
      X
    </button>
  </span>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: mapActions(['removeTodo'])
}
</script>
```

反例：

```js
// main.js
new Vue({
  data() {
    return {
      todos: [],
    }
  },
  created() {
    this.$on('remove-todo', this.removeTodo)
  },
  methods: {
    removeTodo(todo) {
      const todoIdToRemove = todo.id
      this.todos = this.todos.filter((todo) => {
        return todo.id !== todoIdToRemove
      })
    },
  },
})
```

5 方便阅读代码 代码的钩子函数顺序 首先是名字和依赖在最上，方便添加删除 然后是数据优先按照数据处理顺序依次 然后是方法

```js
name:'',
components:{},
mixins:[],
props:{},
data(){},
watch:{},
computed:{},
methods:{},
created(){},
activated(){},
mounted(){}
```

## 推荐常用 vs code 插件

::: tip
Auto Close Tag 自动闭合标签  
Path Intellisense 路劲感知  
Prettier 代码格式化  
Vetur vue 插件  
blubloco-dark 一款主题  
barcket pair colorizer 括号高亮  
code outline 方便读源码  
material icon theme 图标主题  
sublime text keymap sublime 快捷键  
todo highlight 待办高亮  
:::

## vscode 配置 (已不是最新版)

```json
{
  "workbench.startupEditor": "newUntitledFile",
  "workbench.iconTheme": "material-icon-theme",
  "terminal.integrated.shell.windows":
    "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
  // 以下解决格式化js自动添加分号
  "prettier.singleQuote": true,
  "prettier.semi": false,
  // 以下解决stylus格式化问题
  "stylusSupremacy.insertColons": true,
  // 是否插入冒号
  "stylusSupremacy.insertSemicolons": true,
  // 是否插入分好
  "stylusSupremacy.insertBraces": true,
  // 是否插入大括号
  "stylusSupremacy.insertNewLineAroundImports": false, // import之后是否换行
  "stylusSupremacy.insertNewLineAroundBlocks": false,
  // 两个选择器中是否换行
  // 解决js单引号自动转换成双引号：
  "prettier.semi": false,
  "prettier.singleQuote": true,
  // 窗口失去焦点自动保存
  "files.autoSave": "onFocusChange",
  // 编辑粘贴自动格式化
  // "editor.formatOnPaste": true,

  // 通过使用鼠标滚轮同时按住 Ctrl 可缩放编辑器的字体
  "editor.mouseWheelZoom": false,
  // 行太长自动换行
  "editor.wordWrap": "on",

  // eslint设置
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "vue",
    {
      "language": "vue",
      "autoFix": true
    }
  ],

  // tab锁紧
  "editor.tabSize": 2,
  // 保存自动化
  "editor.formatOnSave": true,

  "editor.formatOnSave": true,
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "todohighlight.keywords": [
    "DEBUG:",
    "REVIEW:",
    {
      "text": "NOTE:",
      "color": "#ff0000",
      "backgroundColor": "yellow",
      "overviewRulerColor": "grey"
    },
    {
      "text": "BUG:",
      "color": "#fff",
      "backgroundColor": "red",
      "isWholeLine": false
    },
    {
      "text": "HACK:",
      "color": "#000",
      "isWholeLine": false
    },
    {
      "text": "TIP:",
      "color": "#fff",
      "backgroundColor": "#1690ff",
      "isWholeLine": false
    }
  ],
  "workbench.colorTheme": "Bluloco Dark",
  "sublimeTextKeymap.promptV3Features": true
}
```
