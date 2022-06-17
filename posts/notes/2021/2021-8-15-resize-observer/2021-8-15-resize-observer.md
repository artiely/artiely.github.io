---
title: 利用 ResizeObserver 实现响应式
tag:
  - js
author: Artiely
date: 2021-8-15
cover: /2022-05-11-10-02-28.png
base64: fafafa
tinyCover: /cover/2022-05-11-10-02-28.png
coverWidth: 564
coverHeight: 662
coverPrimary: ccd4ce
coverSecondary: 332b31

---




```js
const a = document.getElementById('a')

const obverser = new ResizeObserver((entries) => {
  for (const entry of entries)
    console.log(entry.contentRect.width)

})
obverser.observe(a)
```

例如表格里的元素很长的，在宽度够的情况下自然展示，当屏幕小宽度不够的时候折叠展示

## 效果

![](./20210815175449.png)

![](./20210815175548.png)
