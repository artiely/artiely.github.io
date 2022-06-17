---
tag:
  - js
cover: /2022-05-11-09-21-21.png
tinyCover: /cover/2022-05-11-09-21-21.png
coverWidth: 474
coverHeight: 1001

---

# 单例模式

[维基百科](https://zh.wikipedia.org/wiki/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F)

单例是可以实例化一次的类，并且可以全局访问。这个 _单一实例_ 可以在我们的应用程序中共享，这使得单例非常适合管理应用程序中的全局状态。

其实我更喜欢把全局只有 _一个实例引用_ 的称之为单例模式，他可能比你理解单例模式更广泛一些。因为随着程序的发展，以前的单例应用的示例中往往会出现很多的缺点和不足，甚至被称之为一种 _反模式_ ,在现在的应用中已经很少能看到传统单例形式。现代应用都会继承单例思想并很大程度上规避他的传统问题。

👆 如上所说我们在工作中的那些场景中使用了单例呢，为什么要使用单例：

🌰 我们平时在编码中有哪些是单例模式呢？比如我们使用的vuex,redux,flux等这些全局的状态管理。再比如[vue的插件接口](https://github.com/vuejs/vue/blob/d47cc19e201c425801b8ac40ec32d279ca42a508/src/core/global-api/use.js#L8)等。

## （缺点）优点

将实例化限制为仅 _一个_ 实例可能会节省大量内存空间。我们不必每次都为新实例设置内存，而只需为该实例设置内存，该实例在整个应用程序中都会被引用。然而，传统单例模式实际上被认为是一种**反模式**，并且可以（或.._应该_）在 JavaScript 中避免使用。

在许多编程语言中，例如 Java 或 C++，不可能像在 JavaScript 中那样直接创建对象。在那些面向对象的编程语言中，我们需要创建一个类，它会创建一个对象。该创建的对象具有类实例的值。

由于我们可以直接在 JavaScript 中创建对象，因此我们可以简单地使用常规对象来实现完全相同的结果。让我们来介绍一些示例来更深入的了解单例模式的优缺点。

首先，让我们看看使用 ES2015 类的单例会是什么样子。对于此示例，我们将构建一个`Counter`具有以下内容的类：

* 一个`getInstance`返回该实例的值的方法
* 一个`getCount`，返回的当前值的方法`counter`变
* 的`increment`方法，该方法的增量的值`counter`由一个
* 一个`decrement`该递减的值的方法`counter`由一个

```js
let counter = 0
let instance
class Counter {
  constructor() {
    if (instance)
      throw new Error('You can only create one instance!')

    instance = this
  }

  getInstance() {
    return this
  }

  getCount() {
    return counter
  }

  increment() {
    return ++counter
  }

  decrement() {
    return --counter
  }
}
const singletonCounter = Object.freeze(new Counter())
export default singletonCounter
```

确保只能创建一个实例的一种方法是创建一个名为`instance`的变量储存实例。我们可以通过检查`instance`变量是否已经有值来防止新的实例化。如果实例已经存在：应该抛出一个错误让用户知道。让我们从`counter.js`文件中导出`Counter`实例。但在这样做之前，我们应该使用`Object.freeze`方法来冻结实例 确保用户不能修改单例。无法添加或修改实例上的属性，这降低了意外覆盖实例上的值的风险。

#### 使用常规对象

让我们使用与之前看到的相同的示例。然而这一次，`counter`只是一个包含以下内容的对象：

* 一个`count`属性
* 的`increment`方法，该方法的增量的值`count`由一个
* 一个`decrement`该递减的值的方法`count`由一个

```js
let count = 0

const counter = {
  increment() {
    return ++count
  },
  decrement() {
    return --count
  },
}

Object.freeze(counter)
export { counter }
```

这样也可以达到同样的目的。

### 使用静态类

```js
let count = 0
class Counter{
  
  static increment() {
    return ++count;
  },
  static decrement() {
    return --count;
  }
}
```

这样也可以达到同样的目的。

如果你的目的只限于像示例中这样的需求，你可以完全不使用所谓的单例模式。在一些全局的工具类中，静态类是最常见的方式。因为他不用去初始化（实例化）就可直接使用。比如常见的Math类。`Math.abs()`

### 闭包单例

javaScript中函数是一等公民,可以使用函数来实现单例。

```js

const h = function(html) {
  this.html = html
  this.init()
}

h.prototype.init = function() {
  const div = document.createElement('div')
  div.innerHTML = this.html
  document.body.appendChild(div)
}

const render = (function() {
  let instance
  return function(html) {
    if (!instance)
      instance = new CreateDiv(html)

    return instance
  }
})()

const a = new render('artiely')
const b = new render('artiely2')

alert(a === b) // true
```

### 惰性单例

单例模式抽象，分离创建对象的函数和判断对象是否已经创建,可以延迟加载，也叫懒加载。在程序需要用到的时候再创建实例，这样保证了内存不会被浪费

```js
const getSingle = function(fn) {
  let result
  return function() {
    return result || (result = fn.apply(this, arguments))
  }
}
```

结合上面的示例现在似乎可以对vue插件的use方法。恍然大明白了吧。贴一下代码：

```js
/* @flow */

import { toArray } from '../util/index'

export function initUse(Vue: GlobalAPI) {
  Vue.use = function(plugin: Function | Object) {
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    if (installedPlugins.includes(plugin))
      return this

    // additional parameters
    const args = toArray(arguments, 1)
    args.unshift(this)
    if (typeof plugin.install === 'function')
      plugin.install.apply(plugin, args)

    else if (typeof plugin === 'function')
      plugin.apply(null, args)

    installedPlugins.push(plugin)
    return this
  }
}
```

### 全局行为

一个单例实例应该能够在整个应用程序中被引用。全局变量本质上表现出相同的行为：由于全局变量在全局范围内可用，我们可以在整个应用程序中访问这些变量。

拥有全局变量通常被认为是一个糟糕的设计决策。全局范围污染最终可能导致意外覆盖全局变量的值，从而导致许多意外行为。

在 ES2015 中，创建全局变量相当少见。新的`let`和`const`关键字通过将使用这两个关键字声明的变量保持在块范围内来防止开发人员意外污染全局范围。`module`JavaScript 中的新系统可以更轻松地创建全局可访问的值，而不会污染全局范围，因为它能够`export`导出模块中值以及`import` 引入其他文件中的值。

但是，单例的常见用例是在整个应用程序中拥有某种**全局状态**。让你的代码库的多个部分依赖于同一个可变对象可能导致意外行为。

通常，代码库的某些部分会修改全局状态中的值，而其他部分会使用该数据。这里的执行顺序很重要：我们不想在数据还没变更过来时就先使用了这份数据！随着应用程序的增长以及数十个组件相互依赖，使用全局状态时理解数据流可能会变得非常棘手。

但我认为这不是单例模式的问题。因为这些问题是可以通过其他途径得到有效解决的。如今的框架中都引入了各种新的概念，来解决数据流的依赖问题。_不可变性_ _单向数据流_ 等

### 框架 中的状态管理

在 React、Vue 中，我们经常通过**Redux**或**React Context** **Vuex** 等状态管理工具来依赖全局状态。它们的全局状态行为类似于单例，但这些工具提供了**只读状态** **单向数据流**。使用 Redux 时，只有纯函数 _reducer_ 可以在组件通过 _dispatcher_ 发送 _操作_ 后更新状态。使用Vuex时，只能通过 _mutations_ 去修改数据。

尽管使用这些工具不会神奇地消除拥有全局状态的缺点，但我们至少可以确保全局状态按照我们的预期方式发生变化，因为组件不能直接更新状态。

* * *
