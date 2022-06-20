---
title: 指令限制字符的长度
tag:
  - vue
cover: /2022-05-13-13-01-53.png
base64: 68a863
date: 2020-6-23
author: artiely
tinyCover: /cover/2022-05-13-13-01-53.png
coverWidth: 564
coverHeight: 810
coverPrimary: e5e2e0
coverSecondary: 1a1d1f

---


show code

```js
// 计算当前输入的字节
export function strlen(str) {
  let len = 0
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i)
    // 单字节加1
    if ((c >= 0x0001 && c <= 0x007E) || (c <= 0xFF9F && c >= 0xFF60)) {
      len++
    }
    else
      len += 2

  }
  return len
}
// 计算还可输入的字节
export function maxlen(str, len = 60) {
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i)
    // 单字节加1
    if ((c >= 0x0001 && c <= 0x007E) || (c <= 0xFF9F && c >= 0xFF60)) {
      // ...
    }
    else {
      len -= 1
    }
  }
  return len
}
function event(name, arg) {
  const evt = document.createEvent('Event')
  evt.initEvent(name, true, true)
  if (name === 'dispatch' && arg) {
    const { textLength, leftLength } = arg
    evt.textLength = textLength
    evt.leftLength = leftLength
  }
  return evt
}
export default {
  update(el, binding) {
    // 对input元素有效
    if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
      const els = el.getElementsByTagName('input')
      if (els.length !== 1) {
        throw new Error(
          `v-charslimit directive requires 1 input, found ${els.length}`,
        )
      }
      else {
        el = els[0]
      }
    }
    // 监听输入事件
    el.oninput = (e) => {
      if (!e.isTrusted) return
      // 当前的值
      const value = el.value
      // 当前输入的字符长度
      const textLength = strlen(value)

      // 获取配置
      const { maxLength = 10 } = binding.value
      // 剩余字符长度
      const leftLength = parseInt((maxLength - textLength) / 2)
      if (textLength > maxLength) {
        // 因为不知道用户输入的每个字是多少字符
        // 每次从末尾删除1个字符
        el.value = el.value.substring(0, el.value.length - 1)
        el.dispatchEvent(event('input'))
      }
      el.dispatchEvent(
        // textLength 当前字符长度
        // leftLength 还剩字符长度
        event('dispatch', { textLength: strlen(el.value), leftLength }),
      )
    }
  },
}
```

use

```html
<template>
  <a-input
    ref="input"
    v-model="val"
    v-charslimit="{
      maxLength: 30,
    }"
    @dispatch="handle"
  />
  已输入{{ textLength }} 剩余{{ leftLength }}
</template>
<script>
export default {
  data() {
    return {
      val: '',
      textLength: '',
      leftLength: 0,
    }
  },
  handle(e) {
    this.textLength = e.textLength
    this.leftLength = e.leftLength
  },
}
</script>
```

:::warning
除了 `el` 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 `dataset` 来进行。
:::

参考：<https://cn.vuejs.org/v2/guide/custom-directive.html>
