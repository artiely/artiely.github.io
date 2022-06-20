---
title: vue管理系统从0到1-本地预览
tag:
  - vue
cover: /2022-05-13-12-49-32.png
base64: 63a3dd
date: 2020-6-5
tinyCover: /cover/2022-05-13-12-49-32.png
coverWidth: 564
coverHeight: 1252
coverPrimary: 0a110d
coverSecondary: f5eef2

---



前一节我们设置了环境和模式，现在我们来实现本地预览，主要是为了本地先测试，有问题提前暴露

首先我们在根目录创建一个`server.js`

```js
const path = require('path')
const express = require('express')
const app = express()
// var opn = require('opn')
const localhost = require('address').ip()
let staticDir
let baseUrl
const argv = process.argv[2]
if (argv === 'test') {
  staticDir = '/dist/test'
  baseUrl = 'http://118.31.222.92:8088'
}
else if (argv === 'stage') {
  staticDir = '/dist/gray'
  baseUrl = 'http://101.37.27.140:12800'
}
else if (argv === 'release') {
  staticDir = '/dist/release'
  baseUrl = 'https://sp.timing360.com'
}
app.use(express.static(path.join(__dirname, staticDir)))
const proxy = require('http-proxy-middleware')

const options = {
  target: baseUrl, // 测试
  changeOrigin: true, // 需要虚拟主机站点
  pathRewrite: {},
}
const exampleProxy = proxy(options) // 开启代理功能，并加载配置
app.use('/', exampleProxy)
app.listen(8888, (err) => {
  const uri = `http://${localhost}:8888`
  if (!err)
    console.log(uri)

  else
    console.log(err)

})
```

然后配置`package.json`

```diff
"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "deploy": "pm2 deploy deploy.yml production",
    "build:test": "vue-cli-service build --mode test",
    "build:stage": "vue-cli-service build --mode stage",
    "build:release": "vue-cli-service build --mode release",
    "build:all": "npm run build:test && npm run build:stage && npm run build:release",
+   "local:test": "node ./server.js test",
+   "local:stage": "node ./server.js stage",
+   "local:release": "node ./server.js release",
    "preview": "node build/index.js --preview",
    "lint": "eslint --fix --ext .js,.vue src",
    "test:unit": "jest --clearCache && vue-cli-service test:unit",
    "test:ci": "npm run lint && npm run test:unit",
    "svgo": "svgo -f src/icons/svg --config=src/icons/svgo.yml"
  },
```

这样只要执行对应的命令就是在本地通过代理模拟线上的环境。把上线的不确定性在本地提前暴露。
