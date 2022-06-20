---
title: Electron 主进程和渲染进程通信
tag:
  - electron
  - nodejs
author: Artiely
date: 2018-7-7
cover: /2022-05-14-21-49-30.png
base64: 50737e
tinyCover: /cover/2022-05-14-21-49-30.png
coverWidth: 736
coverHeight: 1592
coverPrimary: a5bcce
coverSecondary: 5a4331

---


# Electron 主进程和渲染进程通信

![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200315170838.png)

有时候我们想在渲染进程中通过一个事件去执行主进程里面的方法。或者在渲染进程中通知 主进程处理事件，主进程处理完成后广播一个事件让渲染进程去处理一些事情。这个时候就 用到了主进程和渲染进程之间的相互通信。

>  Electron 主进程，和渲染进程的通信主要用到两个模块：**ipcMain 和 ipcRenderer**

> **ipcMain**：当在主进程中使用时，它处理从渲染器进程（网页）发送出来的异步和同步信息, 当然也有可能从主进程向渲染进程发送消息。

> **ipcRenderer**： 使用它提供的一些方法从渲染进程 (web 页面) 发送同步或异步的消息到主 进程。 也可以接收主进程回复的消息。

**场景 1：渲染进程给主进程发送异步消息：**

```js
// 渲染进程
const { ipcRenderer } = require('electron')
ipcRenderer.send('msg', { name: '张三' }) // 异步
```
```js
//主进程 
const { ipcMain } = require('electron'); 
ipcMain.on(''msg'',(event,arg) => { 
  // 处理业务
})
```

**场景 2：渲染进程给主进程发送异步消息，主进程接收到异步消息以后通知渲染进程：**

```js
// 渲染进程
const { ipcRenderer } = require('electron')
ipcRenderer.send('msg', { name: '张三' })
// 异步
// 主进程
const { ipcMain } = require('electron')
ipcMain.on('msg', (event, arg) => {
  event.sender.send('reply', 'pong')
})
// 渲染进程
const { ipcRenderer } = require('electron')
ipcRenderer.on('reply', (event, arg) => {
  console.log(arg)
  // prints "pong"
})
```

**场景 3：渲染进程给主进程发送同步消息：**

```js
// 渲染进程
const { ipcRenderer } = require('electron')
const msg = ipcRenderer.sendSync('msg-a')
console.log(msg)
// 主进程
ipcMain.on('msg-a', (event) => {
  event.returnValue = 'hello'
})
```

## Electron渲染进程通过 localstorage给另一个渲染进程传值
```js
localStorage.setItem(key, value)
localStorage.getItem(key)
```

## 通过 BrowserWindow 和 webContents 模块实现渲染进程和渲染进程的通信。
webContents 是一个 事件发出者.它负责渲染并控制网页，也是 BrowserWindow 对象的属性。

**需要了解的几个知识点：**

**1、获取当前窗口的 id：**

```js
const winId = BrowserWindow.getFocusedWindow().id
```

**2、监听当前窗口加载完成的事件**

```js
win.webContents.on('did-finish-load', (event) => { })
```

**3、同一窗口之间广播数据**

```js
win.webContents.on('did-finish-load', (event) => {
  win.webContents.send('msg', winId, '我是 index.html 的数据')
})
```

**4、通过 id 查找窗口**

```js
const win = BrowserWindow.fromId(winId)
```