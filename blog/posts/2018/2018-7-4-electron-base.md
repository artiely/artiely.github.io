---
title: Electron基本概念
tag:
  - electron
  - nodejs
author: Artiely
date: 2018-7-4
cover: /2022-05-14-21-48-13.png
base64: 5587d7
tinyCover: /cover/2022-05-14-21-48-13.png
coverWidth: 564
coverHeight: 797
coverPrimary: 7d6f76
coverSecondary: '829089'

---


# Electron运行的流程

![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200306160653.png)


## Electron 主进程和渲染进程

**主进程和渲染器进程**： 

Electron 运行 package.json 的 **main 脚本的进程被称为主进程** 。 在主进程中运行的脚 本通过创建 web 页面来展示用户界面。 一个 Electron 应用总是有且**只有一个主进程**。 

由于 Electron 使用了 **Chromium**（谷歌浏览器）来展示 web 页面，所以 Chromium 的 多进程架构也被使用到。 **每个 Electron 中的 web 页面运行在它自己的渲染进程中**。 

主进程使用 BrowserWindow 实例创建页面。每个 BrowserWindow 实例都在自己的渲 染进程里运行页面。 当一个 BrowserWindow 实例被销毁后，相应的渲染进程也会被终止。

![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200306160550.png)

**进程**：进程（Process）是计算机中的程序关于某数据集合上的一次运行活动，是 系统进行资源分配和调度的基本单位，是操作系统结构的基础。 

**线程**：在⼀一个程序里的一个执行路线就叫做线程（thread）。更准确的定义是： 线程是“一个进程内部的控制序列”。 

**线程和进程**：一个程序至少有一个进程,一个进程至少有一个线程



## Electron渲染进程中通过Nodejs读取本地文件
在普通的浏览器中，web 页面通常在一个沙盒环境中运行，不被允许去接触原生的资源。 然而 Electron 的用户在 Node.js 的 API 支持下可以在页面中和操作系统进行一些底层交互。

Nodejs 在主进程和渲染进程中都可以使用。渲染进程因为安全限制，不能直接操作原 生 GUI。虽然如此，因为集成了 Nodejs，渲染进程也有了操作系统底层 API 的能力，Nodejs 中常用的 Path、fs、Crypto 等模块在 Electron 可以直接使用，方便我们处理链接、路径、 文件 MD5 等，同时 npm 还有成千上万的模块供我们选择。

```js
const fs = require('fs')
const content = document.getElementById('content')
const button = document.getElementById('button')
button.addEventListener('click', (e) => {
  fs.readFile('package.json', 'utf8', (err, data) => {
    content.textContent = data; console.log(data)
  })
})
```

## Electron 开启调试模式
```js
mainWindow.webContents.openDevTools()
```