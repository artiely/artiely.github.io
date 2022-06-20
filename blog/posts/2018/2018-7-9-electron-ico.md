---
title: Electron 系统托盘 托盘右键菜单、托 盘图标闪烁 点击右上角关闭按钮隐 藏到托盘
tag:
  - electron
  - nodejs
author: Artiely
date: 2018-7-9
cover: /2022-05-14-21-50-40.png
base64: 273a49
tinyCover: /cover/2022-05-14-21-50-40.png
coverWidth: 676
coverHeight: 1200
coverPrimary: '040404'
coverSecondary: fbfbfb

---

# Electron 系统托盘 托盘右键菜单、托 盘图标闪烁 点击右上角关闭按钮隐 藏到托盘
![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200308122218.png)
![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200308122259.png)

## Electron 创建任务栏图标以及任务栏图标右键菜单

```js
const path = require('path')
const { Menu, Tray, app, BrowserWindow } = require('electron')
const appIcon = new Tray(path.join(__dirname, 'lover.png'))
const menu = Menu.buildFromTemplate([
  {
    label: '设置',
    click() {},
    // 打开相应页面
  },
  { label: '帮助', click() {} },
  { label: '关于', click() {} },
  {
    label: '退出',
    click() {
      //
      BrowserWindow.getFocusedWindow()
        .webContents()
        .send('close-main-window')
      app.quit()
    },
  },
])
appIcon.setToolTip('my best app')
appIcon.setContextMenu(menu)
```

## 监听任务栏图标的单击、双击事件
```js
const { Menu, Tray, app, BrowserWindow } = require('electron')
const appIcon = new Tray(path.join(__dirname, 'lover.png'))
appIcon.on('double-click', () => {
  console.log(win)
  win.show()
})
```

## Electron 点击右上角关闭按钮隐藏任务栏图标
```js
const win = BrowserWindow.getFocusedWindow()
win.on('close', (e) => {
  console.log(win.isFocused())
  if (!win.isFocused()) {
    win = null
  }
  else {
    e.preventDefault()
    /* 阻止应用退出 */

    win.hide() /* 隐藏当前窗口 */
  }
})
```

## Electron 实现任务栏闪烁图标
```js
timer = setInterval(() => {
  count++
  if (count % 2 == 0)
    appIcon.setImage(path.join(__dirname, 'empty.ico'))

  else
    appIcon.setImage(path.join(__dirname, 'lover.png'))

}, 500)
```
