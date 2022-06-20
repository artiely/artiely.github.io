---
title: Electron 应用操作数据之nedb数据库
tag:
  - electron
  - nodejs
  - nedb
author: Artiely
date: 2018-7-11
cover: /2022-05-14-21-52-03.png
base64: ffb00e
tinyCover: /cover/2022-05-14-21-52-03.png
coverWidth: 720
coverHeight: 1280
coverPrimary: b5bfc0
coverSecondary: 4a403f

---

# Electron 应用操作数据之nedb数据库

## Electron 应用操作数据的几种方法：

1、远程api接口      （多个客户端公用一套数据） 

2、连接远程数据库    (局域网内使用  多个客户端公用一套数据 )  （不建议使用）

3、连接本地数据库   （nedb    sqlite）     应用本地保存数据（localstore   5M）     用户设置信息        qq聊天记录


##  读写本地文件
使用 electron 的一大好处是可以访问用户的文件系统。这使你可以读取和写入本地系统上的文件。为了避免 Chromium 的限制以及对应用程序内部文件的改写，请确保使用 electron 的 API，特别是 app.getPath(name) 函数。这个帮助函数可以使你获得指向系统目录的文件路径，如用户的桌面、系统临时文件 等等。
## Nedb 数据库文档：

	https://github.com/louischatriot/nedb

nedb数据库和mongodb数据库的操作方法几乎一模一样。

## 使用案例
假设我们想为我们的应用程序提供本地的数据库存储。在这个例子中，我们将用 nedb 作为演示。
```js
yarn add nedb # 或 npm install nedb --save
src/renderer/datastore.js
```

这里，我们设置 NeDB 并将其指向我们的 userData 目录。这个空间专门为我们的应用程序所保留，所以，我们可以确信，其他程序 或 与其他用户的交互不应该篡改这个文件空间。至此，我们可以在 renderer 进程中导入 datastore.js 并使用它。
```js
import path from 'path'
import Datastore from 'nedb'
import { remote } from 'electron'

export default new Datastore({
  autoload: true,
  filename: path.join(remote.app.getPath('userData'), '/data.db'),
})
```
`src/renderer/main.js`

## 在vue项目中使用
为了更进一步，我们可以将数据存储导入到 src/renderer/main.js 里，并将其附加到 Vue 的 原型 (prototype) 上。通过在所有组件文件中使用 this.$db，我们现在可以访问数据存储的 API。
```js
import db from './datastore'

/* 其它代码 */

Vue.prototype.$db = db
```

## 在vue的组件里面实现数据的增加 修改 删除 显示

```js
this.$db.insert({}, () => {
})

this.$db.find({}, () => {
  // 获取查询的数据
})

this.$db.update({ 条件 }, { $set: { 更改的数据 } }, () => {
})

this.$db.remove({ 条件 }, {}, () => {
})
```