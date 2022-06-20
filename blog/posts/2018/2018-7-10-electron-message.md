---
title: Electron实现消息通知与监听网络
tag:
  - nodejs
  - electron
author: Artiely
date: 2018-7-10
cover: /2022-05-14-21-51-07.png
base64: 101e2e
tinyCover: /cover/2022-05-14-21-51-07.png
coverWidth: 353
coverHeight: 680
coverPrimary: cdcaca
coverSecondary: '323535'

---



## Electron实现消息通知
Electron 里面的消息通知是基于 h5 的通知 api 实现的。
![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200308134242.png)
```js
const option = {
  title: 'title',
  body: 'body',
  icon: path.join('main-process/favicon2.ico'),
}
const myNotification = new window.Notification(option.title, option)
myNotification.onclick = () => {
  console.log('clicked')
}
```
##  Electron 监听网络变化
```js
window.addEventListener('online', () => {})
window.addEventListener('offline', () => {})
```
