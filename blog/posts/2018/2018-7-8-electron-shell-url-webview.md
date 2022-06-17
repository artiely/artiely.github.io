---
title: Electron 在用户默认浏览器中打开 URL
tag:
  - electron
  - nodejs
author: Artiely
date: 2018-7-8
cover: /2022-05-14-21-50-16.png
base64: 2f3341
tinyCover: /cover/2022-05-14-21-50-16.png
coverWidth: 474
coverHeight: 727
coverPrimary: d5cbbf
coverSecondary: 2a3440

---


##  Electron shell 模块 在用户默认浏览器中打开 URL 的示例

shell 模块提供了集成其他桌面客户端的关联功能.
```js
const shell = require('shell')
shell.openExternal('https://github.com')
```
##  Electron DOM `<webview/>` 标签。
Webview 与 iframe 有点相似，但是与 iframe 不同, webview 和你的应用运行的是不同的进 程。它不拥有渲染进程的权限，并且应用和嵌入内容之间的交互全部都是异步的。因为这能 保证应用的安全性不受嵌入内容的影响。
```js
<webview id="webview" src="https://www.itying.com" style="position:fixed; width:100%; height:100%"> </webview>
```