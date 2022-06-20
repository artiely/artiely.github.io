---
title: Electron 弹出框
tag:
  - electron
  - nodejs
author: Artiely
date: 2018-7-8
cover: /2022-05-14-21-49-57.png
base64: 2f3341
tinyCover: /cover/2022-05-14-21-49-57.png
coverWidth: 474
coverHeight: 842
coverPrimary: 2794c4
coverSecondary: d86b3b

---

# Electron 弹出框

dialog 模块提供了 api 来展示原生的系统对话框，例如打开文件框，alert 框， 所以 web 应用可以给用户带来跟系统应用相同的体验。
![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200308120603.png)

```js
dialog.showErrorBox('title', 'content')
```
![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200308120639.png)

```js
dialog.showMessageBox(
  {
    type: 'info',
    title: 'message',
    message: 'hello',
    buttons: ['ok', 'cancel'],
  },
  (index) => {
    if (index == 0)
      console.log('You click ok.')

    else
      console.log('You click cancel')

  },
)
```
![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200308120749.png)
```js
dialog.showOpenDialog({ properties: ['openFile', 'openDirectory'] }, (files) => {
  console.log(files)
})
```

![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200308120918.png)

```js
dialog.showSaveDialog(
  {
    title: 'save some file',
    filters: [
      { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
      { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
      { name: 'Custom File Type', extensions: ['as'] },
      { name: 'All Files', extensions: ['*'] },
    ],
  },
  (filename) => {
    console.log(filename)
  },
)
```