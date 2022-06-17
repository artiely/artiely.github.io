---
title: Electron注册全局快捷键（globalShortcut）,剪切板（clipboard ）与nativeImage 模块
tag:
  - nodejs
  - electron
author: Artiely
date: 2018-7-11
cover: /2022-05-14-21-52-25.png
base64: 8c8f8f
tinyCover: /cover/2022-05-14-21-52-25.png
coverWidth: 736
coverHeight: 1071
coverPrimary: '171718'
coverSecondary: e8e8e7

---


##  Electron 注册全局快捷键（globalShortcut）
```js
const app = require('app')
const globalShortcut = require('electron').globalShortcut
app.on('ready', () => {
  // Register a 'ctrl+x' shortcut listener.
  const ret = globalShortcut.register('ctrl+x', () => {
    console.log('ctrl+x is pressed')
  })
  if (!ret)
    console.log('registration failed')

  // Check whether a shortcut is registered.
  console.log(globalShortcut.isRegistered('ctrl+x'))
})
app.on('will-quit', () => {
  // Unregister a shortcut.
  globalShortcut.unregister('ctrl+x')
  // Unregister all shortcuts.
  globalShortcut.unregisterAll()
})
```

##  clipboard 剪切板事件 clipboard 模块以及 nativeImage 模块

```js
const { clipboard, nativeImage } = require('electron')
clipboard.writeText('这是一个机器码')
console.log(clipboard.readText())
const img = nativeImage.createFromPath('static/favicon2.ico')
clipboard.writeImage(img)
const imgDataURL = clipboard.readImage().toDataURL()
const img3 = new Image()
img3.src = imgDataURL
document.body.appendChild(img3)
```