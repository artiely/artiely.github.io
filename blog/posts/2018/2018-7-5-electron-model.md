---
title: Electron 模块介绍
tag:
  - electron
  - nodejs
author: Artiely
date: 2018-7-5
cover: /2022-05-14-21-48-33.png
base64: 01bcf3
tinyCover: /cover/2022-05-14-21-48-33.png
coverWidth: 736
coverHeight: 1085
coverPrimary: 3c3a3d
coverSecondary: c3c5c2

---


# Electron 主进程和渲染进程中的模块
![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200306162451.png)

## Electron 渲染进程中通过 remote 模块调用主进程中的 BrowserWindow 打开新窗口。

主进程代码：
```js
const electron = require('electron')
// 控制应用生命周期的模块
const { app } = electron
// 创建本地浏览器窗口的模块
const { BrowserWindow } = electron
// 指向窗口对象的一个全局引用，如果没有这个引用，那么当该 javascript 对象被垃圾回收 的
// 时候该窗口将会自动关闭
let win
function createWindow() {
  // 创建一个新的浏览器窗口
  win = new BrowserWindow({ width: 1104, height: 620 })
  // 570+50
  // 并且装载应用的 index.html 页面
  win.loadURL(`file://${__dirname}/html/index.html`)
  // 打开开发工具页面
  // win.webContents.openDevTools();
  // 当窗口关闭时调用的方法
  win.on('closed', () => {
    // 解除窗口对象的引用，通常而言如果应用支持多个窗口的话，你会在一个数组里
    // 存放窗口对象，在窗口关闭的时候应当删除相应的元素。
    win = null
  })
}
// 当 Electron 完成初始化并且已经创建了浏览器窗口，则该方法将会被调用。
// 有些 API 只能在该事件发生后才能被使用。
app.on('ready', createWindow)
// 当所有的窗口被关闭后退出应用
app.on('window-all-closed', () => {
  // 对于 OS X 系统，应用和相应的菜单栏会一直激活直到用户通过 Cmd + Q 显式退出
  if (process.platform !== 'darwin') app.quit()
})
app.on('activate', () => {
  // 对于 OS X 系统，当 dock 图标被点击后会重新创建一个 app 窗口，并且不会有其他窗口打开
  if (win === null) createWindow()
})
// 在这个文件后面你可以直接包含你应用特定的由主进程运行的代码。
// 也可以把这些代码放在另一个文件中然后在这里导入。
```

渲染进程代码：

```js
const btn = document.querySelector('#btn')
const path = require('path')
const BrowerWindow = require('electron').remote.BrowserWindow
btn.onclick = () => {
  win = new BrowerWindow({
    width: 300,
    height: 200,
    frame: false,
    transparent: true,
  // fullscreen:true
  })
  win.loadURL(path.join('file:', __dirname, 'news.html'))
  win.on('close', () => { win = null })
}
```

**更多详情**

https://www.w3cschool.cn/electronmanual/electronmanual-electronapp.html