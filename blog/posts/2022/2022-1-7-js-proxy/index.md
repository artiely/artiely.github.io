---
tag:
  - js
cover: /2022-05-11-09-19-49.png
tinyCover: /cover/2022-05-11-09-19-49.png
coverWidth: 564
coverHeight: 824

---

# 代理模式

使用 Proxy 对象，我们可以更好地控制与某些对象的交互。代理对象可以在我们与对象交互时确定行为，例如当我们获取值或设置值时。

* * *

一般来说，代理是指代他人。

生活中有很多的代理模式的场景。例如，明星有经纪人作为代理，老板有秘书作为代理等等，当有事情的时候，会找到经纪人或秘书，再由他们转达给明星或者老板。

JavaScript 中也是如此：我们将与 Proxy 对象进行交互，而不是直接与目标对象交互。

## 优点（缺点）

代理是添加对对象行为的控制的强大方法。代理可以有各种用例：它可以帮助验证、格式化、通知或调试。

过度使用`Proxy`对象或对每个`handler`方法调用执行繁重的操作很容易对应用程序的性能产生负面影响。最好不要将代理用于性能关键代码。

* * *

让我们创建一个`person`代表 John Doe的对象。

```js
const person = {
  name: 'John Doe',
  age: 42,
  nationality: 'American',
}
```

我们希望与代理对象进行交互，而不是直接与此对象交互。在 JavaScript 中，我们可以通过创建`Proxy`.

```js
const person = {
  name: 'John Doe',
  age: 42,
  nationality: 'American',
}

const personProxy = new Proxy(person, {})
```

的第二个参数`Proxy`是一个表示_处理程序_的对象。在处理程序对象中，我们可以根据交互的类型定义具体的行为。尽管您可以将[许多方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)添加到代理处理程序，但最常见的两个是`get`和`set`：

* `get`: 尝试**访问**属性时调用
* `set`: 尝试**修改**属性时调用

实际上，最终会发生以下情况：

`person`我们将与对象进行交互，而不是直接与对象交互`personProxy`。

让我们将处理程序添加到`personProxy`代理。当尝试修改属性，从而调用 上的`set`方法时`Proxy`，我们希望代理记录该属性的先前值和新值。当试图访问一个属性，从而调用`get`上的方法时`Proxy`，我们希望代理记录一个更易读的句子，其中包含属性的键和值。

```js
const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${obj[prop]}`)
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`)
    obj[prop] = value
  },
})
```

让我们看看当我们尝试修改或检索属性时会发生什么。

```js
personProxy.name
personProxy.age = 43
// The value of name is John Doe
// Changed age from 42 to 43
```
  
访问该`name`属性时，代理返回了一个更好听的句子：`The value of name is John Doe`.

修改`age`属性时，代理返回此属性的先前值和新值：`Changed age from 42 to 43`。

* * *

代理可用于添加**验证**。用户不应该能够将`person`'s age 更改为字符串值，或者给他一个空名称。或者如果用户试图访问对象上不存在的属性，我们应该让用户知道。

```js
const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      console.log(
        'Hmm.. this property doesn\'t seem to exist on the target object',
      )
    }
    else {
      console.log(`The value of ${prop} is ${obj[prop]}`)
    }
  },
  set: (obj, prop, value) => {
    if (prop === 'age' && typeof value !== 'number') {
      console.log('Sorry, you can only pass numeric values for age.')
    }
    else if (prop === 'name' && value.length < 2) {
      console.log('You need to provide a valid name.')
    }
    else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`)
      obj[prop] = value
    }
  },
})
```

让我们看看当我们试图传递错误的值时会发生什么！

```js
personProxy.nonExistentProperty
personProxy.age = '44'
personProxy.name = ''
// Hmm.. this property doesn't seem to exist
// Sorry, you can only pass numeric values for age.
// You need to provide a valid name.
```

代理确保我们没有`person`用错误的值修改对象，这有助于我们保持数据的纯净！

* * *

### Reflect

JavaScript 提供了一个名为 的内置对象`Reflect`，它使我们在使用代理时更容易操作目标对象。

以前，我们尝试通过使用括号表示法直接获取或设置值来修改和访问代理中目标对象的属性。相反，我们可以使用`Reflect`对象。`Reflect`对象上的方法与对象上的方法同名`handler`。

我们可以通过和访问或修改目标对象的属性，而不是通过 访问属性`obj[prop]`或设置属性。这些方法接收与处理程序对象上的方法相同的参数。`obj[prop] = value``Reflect.get()``Reflect.set()`

```js
const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`)
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`)
    Reflect.set(obj, prop, value)
  },
})
```

我们可以使用对象轻松访问和修改目标对象的`Reflect`属性。

```js
const person = {
  name: 'John Doe',
  age: 42,
  nationality: 'American',
}

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`)
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`)
    return Reflect.set(obj, prop, value)
  },
})

personProxy.name
personProxy.age = 43
personProxy.name = 'Jane Doe'
```

* * *

### Vue中的应用

vue的响应核心也是使用Proxy; [见源码](https://github.com/vuejs/vue-next/blob/eb721d49c004abf5eff0a4e7da71bad904aa6bac/packages/reactivity/src/reactive.ts#L212)

* * *

### 参考

* [代理](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)\- MDN

* [awesome-es2015-proxy](https://github.com/mikaelbr/awesome-es2015-proxy)

* [深入理解Proxy](https://artiely.gitee.io/post/2020/2020-9-2-proxy.html)
