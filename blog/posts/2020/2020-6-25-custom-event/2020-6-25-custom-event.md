---
title: 创建自定义事件
tag:
  - javascript
cover: /2022-05-13-13-03-51.png
base64: e7eb91
date: 2020-6-25
author: artiely
tinyCover: /cover/2022-05-13-13-03-51.png
coverWidth: 564
coverHeight: 752
coverPrimary: e3d4c0
coverSecondary: 1c2b3f

---


可以使用`Event`构造函数创建事件，如下所示：

```js
const event = new Event('build')

// Listen for the event.
elem.addEventListener('build', (e) => { /* ... */ }, false)

// Dispatch the event.
elem.dispatchEvent(event)
```

上面的代码示例使用`EventTarget.dispatchEvent()`方法。
大多数现代浏览器都支持此构造函数（Internet Explorer除外）。有关更详细的方法（可与Internet Explorer一起使用），请参见下面的老式方法。

## 添加自定义数据– CustomEvent()

为了向事件对象添加更多数据，存在`CustomEvent`接口，并且detail  属性可用于传递自定义数据。
例如，可以如下创建事件：

```js
const event = new CustomEvent('build', { detail: elem.dataset.time })
```

然后，这将允许您在事件侦听器中访问其他数据：

```js
function eventHandler(e) {
  console.log(`The time is: ${e.detail}`)
}
```

## 老式的方式

创建事件的较旧方法使用受Java启发的API。下面显示了一个示例：

```js
//创建事件。
var event = document.createEvent（'Event'）;

//定义事件名称为“ build”。
event.initEvent（'build'，true，true）;

//监听事件。
elem.addEventListener（'build'，function（e）{
  // e.target匹配elem
}，错误）；

// target可以是任何Element或其他EventTarget。
elem.dispatchEvent（event）;
```

```js
event.initEvent(type, bubbles, cancelable)
```

## 参数

::: tip

`type`

 一个 `DOMString` 类型的字段，定义了事件的类型.

`bubbles`

一个 `Boolean` 值，决定是否事件是否应该向上冒泡. 一旦设置了这个值，只读属性`Event.bubbles`也会获取相应的值.

`cancelable`

一个 `Boolean` 值，决定该事件的默认动作是否可以被取消. 一旦设置了这个值, 只读属性 `Event.cancelable` 也会获取相应的值.
:::

## 事件冒泡

通常希望从子元素触发事件，并让祖先捕获该事件。（可选）数据：

```html
<form>
  <textarea></textarea>
</form>
```

```js
const form = document.querySelector('form')
const textarea = document.querySelector('textarea')

// Create a new event, allow bubbling, and provide any data you want to pass to the "detail" property
const eventAwesome = new CustomEvent('awesome', {
  bubbles: true,
  detail: { text: () => textarea.value },
})

// The form element listens for the custom "awesome" event and then consoles the output of the passed text() method
form.addEventListener('awesome', e => console.log(e.detail.text()))

// As the user types, the textarea inside the form dispatches/triggers the event to fire, and uses itself as the starting point
textarea.addEventListener('input', e => e.target.dispatchEvent(eventAwesome))
```

## 动态创建和调度事件

元素可以侦听尚未创建的事件：

```html
<form>
  <textarea></textarea>
</form>
```

```js
const form = document.querySelector('form')
const textarea = document.querySelector('textarea')

form.addEventListener('awesome', e => console.log(e.detail.text()))

textarea.addEventListener('input', function() {
  // Create and dispatch/trigger an event on the fly
  // Note: Optionally, we've also leveraged the "function expression" (instead of the "arrow function expression") so "this" will represent the element
  this.dispatchEvent(new CustomEvent('awesome', { bubbles: true, detail: { text: () => textarea.value } }))
})
```

## 触发内置事件

本示例演示了使用DOM方法在复选框上模拟单击（以编程方式生成单击事件）

```js
function simulateClick() {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  })
  const cb = document.getElementById('checkbox')
  const cancelled = !cb.dispatchEvent(event)
  if (cancelled) {
    // A handler called preventDefault.
    alert('cancelled')
  }
  else {
    // None of the handlers called preventDefault.
    alert('not cancelled')
  }
}
```

::: warning

`Event.initEvent()`
该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。
:::
`Event.initEvent()` 方法可以用来初始化由`Document.createEvent()` 创建的 event 实例.

用这种方式初始化事件必须是由 `Document.createEvent()` 方法创建的实例. 本方法必须在事件被触发之前调用（用`EventTarget.dispatchEvent()`调用）.事件 一旦被调用, 便不再做其他任何事.

## 如何区分事件是否用户触发

有时我们需要区分事件是用户触发的还是程序触发的

```js
// e 事件源
if (!e.isTrusted) return
```

`e.isTrusted`为`true`表示由用户触发反之不然

## 实践

在[指令限制字符的长度]一文中查看。

## 思考

`jQuery`的`trigger`实现.
