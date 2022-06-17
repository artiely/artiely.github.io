---
title: Electron自定义软件顶部菜单,上下文菜单以及绑定快捷键
tag:
  - electron
  - nodejs
author: Artiely
date: 2018-7-6
cover: /2022-05-14-21-48-58.png
base64: 2d3135
tinyCover: /cover/2022-05-14-21-48-58.png
coverWidth: 736
coverHeight: 1040
coverPrimary: a2958d
coverSecondary: 5d6a72

---

# Electron自定义软件顶部菜单以及绑定快捷键
Electron 中 Menu 模块可以用来创建原生菜单，它可用作应用菜单和 context 菜单。 这个模块是一个主进程的模块，并且可以通过 remote 模块给渲染进程调用。
```js
const { Menu } = require('electron')
const template = [
  {
    label: '文件',
    submenu: [
      {
        label: '新建窗口',
        click: () => {
          console.log('aaa')
        },
      },
      { type: 'separator' },
      {
        label: '打开文件',
        accelerator: 'ctrl+x',
        click: () => {
          console.log('bbb')
        },
      },
    ],
  },
  {
    label: '编辑',
    submenu: [
      { role: 'cut', label: '剪切' },
      { role: 'copy', label: '复制' },
    ],
  },
]
const m = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(m)
```

##  Electron 自定义右键菜单

```js
window.addEventListener(
  'contextmenu',
  (e) => {
    e.preventDefault()
    m.popup({ window: remote.getCurrentWindow() })
  },
  false,
)
```

##  Electron 中隐藏顶部菜单
```js
const electron = require('electron')
/* 获取electron窗体的菜单栏 */
const Menu = electron.Menu
/* 隐藏electron创听的菜单栏 */
Menu.setApplicationMenu(null)
```
##  Electron 中隐藏关闭 最大化 最小化按钮
```js
mainWindow = new BrowserWindow({
  height: 620,
  useContentSize: true,
  width: 1280,
  frame: false, /* 去掉顶部导航 去掉关闭按钮 最大化最小化按钮 */
})
```

##  自定义关闭 最大化 最小化按钮
```js
// 渲染进程
const { ipcRenderer: ipc } = require('electron')

ipc.send('min')
// more
```
```js
// 主进程
import { BrowserWindow, app, ipcMain } from 'electron'

ipcMain.on('min', e => mainWindow.minimize())
ipcMain.on('max', (e) => {
  if (mainWindow.isMaximized())
    mainWindow.unmaximize()

  else
    mainWindow.maximize()

})
ipcMain.on('close', e => mainWindow.close())
```

##  自定义导航可拖拽
```css
// 可拖拽的 
css: -webkit-app-region: drag; 
// 不可拖拽的 
css: -webkit-app-region: no-drag;
```