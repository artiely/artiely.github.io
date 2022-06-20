---
title: vue中如何优雅的清除定时器
tag:
  - vue
cover: /2022-05-13-12-15-54.png
date: 2020-4-29
base64: 4ec07b
tinyCover: /cover/2022-05-13-12-15-54.png
coverWidth: 564
coverHeight: 1002
coverPrimary: 050d1c
coverSecondary: faf2e3

---



首先来看一下我们平时最常见的清除方式

```js
export default {
  data() {
    return {
      timer: null,
    }
  },
  mounted() {
    this.timer = setInterval(() => {}, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
  },
}
```

该方案有两点不好的地方，引用尤大的话来说就是：

- 它需要在这个组件实例中保存这个 timer，如果可以的话最好只有生命周期钩子可以访问到它。这并不算严重的问题，但是它可以被视为杂物。
- 我们的建立代码独立于我们的清理代码，这使得我们比较难于程序化的清理我们建立的所有东西。

更好的方案

该方法是通过`$once`这个事件侦听器器在定义完定时器之后的位置来清除定时器。以下是完整代码：

```js
const timer = setInterval(() => {
  // 某些定时器操作
}, 500)
// 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
this.$once('hook:beforeDestroy', () => {
  clearInterval(timer)
})
```

`hook:<生命周期>`的使用方式参见[源码](https://github.com/vuejs/vue/blob/d9b27a92bd5277ee23a4e68a8bd31ecc72f4c99b/src/core/instance/lifecycle.js#L347)
