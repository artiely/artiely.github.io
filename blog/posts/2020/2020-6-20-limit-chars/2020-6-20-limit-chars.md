---
title: 限制字符的长度
tag:
  - vue
cover: /2022-05-13-12-51-39.png
base64: 68a863
date: 2020-6-20
author: artiely
tinyCover: /cover/2022-05-13-12-51-39.png
coverWidth: 564
coverHeight: 1002
coverPrimary: 0a0a1c
coverSecondary: f5f5e3

---


## 需求

一个字母和数字算作一个字符，一个汉字算作两个字符
如：一个输入框可输入 30 个字符,同时展示剩余可输入字符
用例 1：可输入 30 个字母或数字
用例 2：只可输入 15 个汉字

## 开始

```js
const charCodeDir = (c) => {
  return (c >= 0x0001 && c <= 0x007E) || (c <= 0xFF9F && c >= 0xFF60)
}
// 计算当前输入的字节
export function strlen(str) {
  let len = 0
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i)
    // 单字节加1
    if (charCodeDir(c)) {
      len++
    }
    else
      len += 2

  }
  return len
}
```

```js
// 计算还可输入的字节
export function maxlen(str, len = 60) {
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i)
    if (charCodeDir(c)) {
      // ...
    }
    else {
      len -= 1
    }
  }
  return len
}
```

```html
<template>
  <input v-model="str" :maxlength="maxLength"></input> 剩余{{ textLen }}
</template>
<script>
import { maxlen, strlen } from '@/common/utils'
export default {
  data() {
    return {
      str,
    }
  },
  computed: {
    // 输入字符的长度
    hasLen() {
      return strlen(this.str)
    },
    // 剩余字符的长度
    textLen() {
      return parseInt((30 - this.hasLen) / 2)
    },
    maxLength() {
      return maxlen(this.str)
    },
  },
}
</script>
```

这样看起来是没问题了，手动输入也是没有什么问题，但是如果用户粘贴字符串进去就暴露问题了
用户可粘贴超过 30 个字符的内容

## 完善一下

```html
<template>
  <input v-model="str" :maxlength="maxLength" @change="change"></input> 剩余{{ textLen }}
</template>
<script>
import { maxlen, strlen } from '@/common/utils'
const TEXT_CHARS_LENGTH = 30
export default {
  data() {
    return {
      str,
    }
  },
  computed: {
    // 输入字符的长度
    hasLen() {
      return strlen(this.str)
    },
    // 剩余字符的长度
    textLen() {
      return parseInt((TEXT_CHARS_LENGTH - this.hasLen) / 2)
    },
    maxLength() {
      return maxlen(this.str)
    },
  },
  methods: {
    change() {
      const len = strlen(this.str)
      if (len > TEXT_CHARS_LENGTH) {
        this.str = this.str.substring(0, this.str - 1)
        const len2 = strlen(this.form.text)
        if (len2 > TEXT_CHARS_LENGTH)
          this.change()

      }
    },
  },
}
</script>
```

## 思考

如何将此逻辑作封装成指令，方便后期同样的需求直接使用

待续。。。
