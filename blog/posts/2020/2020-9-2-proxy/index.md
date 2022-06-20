---
title: 深入理解Proxy
tag:
  - javaScript
  - proxy
cover: /2022-05-13-13-17-57.png
base64: eb7426
author: artiely
date: 2020-9-2
tinyCover: /cover/2022-05-13-13-17-57.png
coverWidth: 564
coverHeight: 1003
coverPrimary: 463c38
coverSecondary: b9c3c7

---



## 什么是Proxy？它的作用是？

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

据阮一峰文章介绍：Proxy可以理解成，在目标对象之前架设一层 "拦截"，当外界对该对象访问的时候，都必须经过这层拦截，而Proxy就充当了这种机制，类似于代理的含义，它可以对外界访问对象之前进行过滤和改写该对象。

如果对vue2.xx了解或看过源码的人都知道，vue2.xx中使用 `Object.defineProperty()`方法对该对象通过 递归+遍历的方式来实现对数据的监控的，当我们使用数组的方法或改变数组的下标是不能重新触发 `Object.defineProperty`中的`set()`方法的，因此就做不到实时响应了。所以使用 `Object.defineProperty` 存在如下缺点：

1. 监听数组的方法不能触发`Object.defineProperty`方法中的set操作(如果要监听的到话，需要重新编写数组的方法)。
2. 必须遍历每个对象的每个属性，如果对象嵌套很深的话，需要使用递归调用。

因此vue3.xx中之后就改用Proxy来更好的解决如上面的问题。在学习使用Proxy实现数据双向绑定之前，我们还是一步步来，先学习了Proxy基本知识点。

## Proxy基本语法

`const obj = new Proxy(target, handler);`

参数说明如下：

`target:` 被代理对象。

`handler:` 是一个对象，声明了代理target的一些操作。

`obj:` 是被代理完成之后返回的对象。

但是当外界每次对obj进行操作时，就会执行handler对象上的一些方法。handler中常用的对象方法如下：

1. get(target, propKey, receiver)
2. set(target, propKey, value, receiver)
3. has(target, propKey)
4. construct(target, args):
5. apply(target, object, args)

如上是Proxy中handler 对象的方法，其实它和`Reflect`里面的方法类似的

```js
const target = {
  name: 'artiely',
}

const handler = {
  get(target, key) {
    console.log(`${key} 被读取`)
    return target[key]
  },
  set(target, key, value) {
    console.log(`${key} 被设置为 ${value}`)
    target[key] = value
  },
}

const testObj = new Proxy(target, handler)

/*
  获取testObj中name属性值
  会自动执行 get函数后 打印信息：name 被读取 及输出名字 artiely
*/
console.log(testObj.name)

/*
 改变target中的name属性值
 打印信息如下： name 被设置为 111
*/
testObj.name = 111

console.log(target.name) // 输出 111
```

如上代码所示：也就是说 target是被代理的对象，handler是代理target的，那么handler上面有set和get方法，当每次打印target中的name属性值的时候会自动执行handler中get函数方法，当每次设置 target.name 属性值的时候，会自动调用 handler中的set方法，因此target对象对应的属性值会发生改变，同时改变后的 testObj对象也会发生改变。同理改变返回后 testObj对象中的属性也会改变原对象target的属性的，因为对象是引用类型的，是同一个引用的。如果这样还是不好理解的话，可以简单的看如下代码应该可以理解了：

```js
const target = {
  name: 'artiely',
}

const testA = target

testA.name = 'xxx'

console.log(testA.name) // 打印 xxx

console.log(target.name) // 打印 xxx
```

### get(target, propKey, receiver)

该方法的含义是：用于拦截某个属性的读取操作。它有三个参数，如下解析：
`target:` 目标对象。

`propKey:` 目标对象的属性。

`receiver:`(可选)，该参数为上下文this对象

如下代码演示：

```js
const obj = {
  name: 'artiely',
}

const handler = {
  get(target, propKey) {
    // 使用 Reflect来判断该目标对象是否有该属性
    if (Reflect.has(target, propKey)) {
      // 使用Reflect 来读取该对象的属性
      return Reflect.get(target, propKey)
    }
    else {
      throw new ReferenceError('该目标对象没有该属性')
    }
  },
}

const testObj = new Proxy(obj, handler)

/*
 Proxy中读取某个对象的属性值的话，
 就会使用get方法进行拦截，然后返回该值。
 */
console.log(testObj.name) // artiely

/*
 如果对象没有该属性的话，就会进入else语句，就会报错：
 Uncaught ReferenceError: 该目标对象没有该属性
*/
// console.log(testObj.name2);

/*
 其实Proxy中拦截的操作是在原型上的，因此我们也可以使用 Object.create(obj)
 来实现对象的继承的。
 如下代码演示：
*/
const testObj2 = Object.create(testObj)
console.log(testObj2.name)

// 看看他们的原型是否相等
console.log(testObj2.__proto__ === testObj.__proto__) // 返回true
```

### set(target, propKey, value, receiver)

该方法是用来拦截某个属性的赋值操作，它可以接受四个参数，参数解析分别如下：
`target:` 目标对象。

`propKey:` 目标对象的属性名

`value:` 属性值

`receiver(可选):` 一般情况下是Proxy实列
如下代码演示：

```js
const obj = {
  name: 'artiely',
}

const handler = {
  set(obj, prop, value) {
    return Reflect.set(obj, prop, value)
  },
}

const proxy = new Proxy(obj, handler)

proxy.name = '我是artiely'

console.log(proxy.name) // 输出： 我是artiely
console.log(obj) // 输出： {name: '我是artiely'}
```

当然如果设置该对象的属性是不可写的，那么set方法就不起作用了，如下代码演示：

```js
const obj = {
  name: 'artiely',
}

Object.defineProperty(obj, 'name', {
  writable: false,
})

const handler = {
  set(obj, prop, value, receiver) {
    Reflect.set(obj, prop, value)
  },
}

const proxy = new Proxy(obj, handler)
proxy.name = '我是artiely'
console.log(proxy.name) // 打印的是 artiely
```

注意：proxy对数组也是可以监听的；如下代码演示，数组中的 push方法监听：

```js
const obj = [{
  name: 'artiely',
}]

const handler = {
  set(obj, prop, value) {
    return Reflect.set(obj, prop, value)
  },
}

const proxy = new Proxy(obj, handler)

proxy.push({ name: 'artiely222' })

proxy.forEach((item) => {
  console.log(item.name) // 打印出 artiely artiely222
})
```

### has(target, propKey)

该方法是判断某个目标对象是否有该属性名。接收二个参数，分别为目标对象和属性名。返回的是一个布尔型。
如下代码演示：

```js
const obj = {
  name: 'artiely',
}

const handler = {
  has(target, key) {
    if (Reflect.has(target, key))
      return true
    else
      return false

  },
}

const proxy = new Proxy(obj, handler)

console.log(Reflect.has(obj, 'name')) // true
console.log(Reflect.has(obj, 'age')) // false
```

### construct(target, args, newTarget)

该方法是用来拦截new命令的，它接收三个参数，分别为 目标对象，构造函数的参数对象及创造实列的对象。
第三个参数是可选的。它的作用是拦截对象属性。

如下代码演示：

```js
function A(name) {
  this.name = name
}

const handler = {
  construct(target, args, newTarget) {
    /*
     输出： function A(name) {
              this.name = name;
           }
    */
    console.log(target)
    // 输出： ['artiely', {age: 30}]
    console.log(args)
    return args
  },
}

const Test = new Proxy(A, handler)

const obj = new Test('artiely', { age: 30 })
console.log(obj) // 输出： ['artiely', {age: 30}]
```

### apply(target, object, args)

该方法是拦截函数的调用的。该方法接收三个参数，分别是目标对象。目标对象上下文this对象 和 目标对象的数组；它和 Reflect.apply参数是一样的
使用demo如下演示：

```js
function testA(p1, p2) {
  return p1 + p2
}
const handler = {
  apply(target, ctx, args) {
    /*
      这里的 ...arguments 其实就是上面的三个参数 target, ctx, args 对应的值。
      分别为：
      target: function testA(p1, p2) {
        return p1 + p2;
      }
      ctx: undefined
      args: [1, 2]
      使用 Reflect.apply(...arguments) 调用testA函数，因此返回 (1+2） * 2 = 6
    */
    console.log(...arguments)
    return Reflect.apply(...arguments) * 2
  },
}

const proxy = new Proxy(testA, handler)

console.log(proxy(1, 2)) // 6

// 也可以如下调用
console.log(proxy.apply(null, [1, 3])) // 8

// 我们也可以使用 Reflect.apply 调用

console.log(Reflect.apply(proxy, null, [3, 5])) // 16
```

## 数据绑定

上面介绍了这么多，也算是对 Proxy 又来一个初步的了解，那么我们就可以利用 Proxy 手动实现一个极其简单数据的双向绑定
主要看功能的实现，所以布局方面我就随手一挥了~

```html
<!--html-->
<div id="app">
    <h3 id="paragraph"></h3>
    <input type="text" id="input"/>
</div>
```

主要还是得看逻辑部分：

```js
// 获取段落的节点
const paragraph = document.getElementById('paragraph')
// 获取输入框节点
const input = document.getElementById('input')

// 需要代理的数据对象
const data = {
  text: 'hello world',
}

const handler = {
  // 监控 data 中的 text 属性变化
  set(target, prop, value) {
    if (prop === 'text') {
      // 更新值
      target[prop] = value
      // 更新视图
      paragraph.innerHTML = value
      input.value = value
      return true
    }
    else {
      return false
    }
  },
}

// 添加input监听事件
input.addEventListener('input', (e) => {
  myText.text = e.target.value // 更新 myText 的值
}, false)

// 构造 proxy 对象
const myText = new Proxy(data, handler)

// 初始化值
myText.text = data.text
```

上述我们通过Proxy 创建了 myText 实例，通过拦截 myText 中 text 属性 set 方法，来更新视图变化，实现了一个极为简单的 双向数据绑定~

## vue双向绑定原理

我们都知道实现数据双向绑定，需要实现如下几点：

1. 需要实现一个数据监听器 Observer, 能够对所有数据进行监听，如果有数据变动的话，拿到最新的值并通知订阅者Watcher.
2. 需要实现一个指令解析器Compile，它能够对每个元素的指令进行扫描和解析，根据指令模板替换数据，以及绑定相对应的函数。
3. 需要实现一个Watcher, 它是链接Observer和Compile的桥梁，它能够订阅并收到每个属性变动的通知，然后会执行指令绑定的相对应
的回调函数，从而更新视图。

下面是一个简单的demo源码如下(我们可以参考下，理解下原理)：

```js
<!DOCTYPE html>
 <html>
    <head>
      <meta charset="utf-8">
      <title>标题</title>
    </head>
    <body>
      <div id="app">
        <input type="text" v-model='count' />
        <input type="button" value="增加" @click="add" />
        <input type="button" value="减少" @click="reduce" />
        <div v-bind="count"></div>
      </div>
      <script type="text/javascript">   
        class Vue {
          constructor(options) {
            this.$el = document.querySelector(options.el);
            this.$methods = options.methods;
            this._binding = {};
            this._observer(options.data);
            this._compile(this.$el);
          }
          _pushWatcher(watcher) {
            if (!this._binding[watcher.key]) {
              this._binding[watcher.key] = [];
            }
            this._binding[watcher.key].push(watcher);
          }
          /*
           observer的作用是能够对所有的数据进行监听操作，通过使用Proxy对象
           中的set方法来监听，如有发生变动就会拿到最新值通知订阅者。
          */
          _observer(datas) {
            const me = this;
            const handler = {
              set(target, key, value) {
                const rets = Reflect.set(target, key, value);
                me._binding[key].map(item => {
                  item.update();
                });
                return rets;
              }
            };
            this.$data = new Proxy(datas, handler);
          }
          /*
           指令解析器，对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相对应的更新函数
          */
          _compile(root) {
            const nodes = Array.prototype.slice.call(root.children);
            const data = this.$data;
            nodes.map(node => {
              if (node.children && node.children.length) {
                this._compile(node.children);
              }
              const $input = node.tagName.toLocaleUpperCase() === "INPUT";
              const $textarea = node.tagName.toLocaleUpperCase() === "TEXTAREA";
              const $vmodel = node.hasAttribute('v-model');
              // 如果是input框 或 textarea 的话，并且带有 v-model 属性的
              if (($vmodel && $input) || ($vmodel && $textarea)) {
                const key = node.getAttribute('v-model');
                this._pushWatcher(new Watcher(node, 'value', data, key));
                node.addEventListener('input', () => {
                  data[key] = node.value;
                });
              }
              if (node.hasAttribute('v-bind')) {
                const key = node.getAttribute('v-bind');
                this._pushWatcher(new Watcher(node, 'innerHTML', data, key));
              }
              if (node.hasAttribute('@click')) {
                const methodName = node.getAttribute('@click');
                const method = this.$methods[methodName].bind(data);
                node.addEventListener('click', method);
              }
            });
          }
        }
        /*
         watcher的作用是 链接Observer 和 Compile的桥梁，能够订阅并收到每个属性变动的通知，
         执行指令绑定的响应的回调函数，从而更新视图。
        */
        class Watcher {
          constructor(node, attr, data, key) {
            this.node = node;
            this.attr = attr;
            this.data = data;
            this.key = key;
          }
          update() {
            this.node[this.attr] = this.data[this.key];
          }
        }
      </script>
      <script type="text/javascript">
        new Vue({
          el: '#app',
          data: {
            count: 0
          },
          methods: {
            add() {
              this.count++;
            },
            reduce() {
              this.count--;
            }
          }
        });
      </script>
    </body>
</html>
```

## 总结

说了这么多 ， Proxy 总算是入门了，虽然它的语法很简单，但是要想实际发挥出它的价值，可不是件容易的事，再加上其本身的 Proxy 的兼容性方面的问题，所以我们实际应用开发中使用的场景的并不是很多，但不代表它不实用，在我看来，可以利用它进行数据的二次处理、可以进行数据合法性的校验，甚至还可以进行函数的代理，更多有用的价值等着你去开发呢~

况且，Vue3.0 都已经准备发布了，你还不打算让学习一下？
