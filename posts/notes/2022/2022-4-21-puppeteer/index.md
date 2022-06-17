---
tag:
  - puppeteteer
  - pm2
  - pkg
  - express
  - webSocket
cover: /2022-05-10-18-31-13.png
tinyCover: /cover/2022-05-10-18-31-13.png
coverWidth: 564
coverHeight: 564

---


# 利用 puppeteteer 实现修改请求返回结果抓取弹幕
  
  代码包含如何在pkg中打包puppeteer
  参考<https://github.com/rocklau/pkg-puppeteer>
  打包mac下运行ok
```js
const fs = require('fs')
const path = require('path')

const puppeteer = require('puppeteer')
const express = require('express')
const app = express()
const expressWs = require('express-ws')(app)

const isPkg = typeof process.pkg !== 'undefined'

// mac path replace
let chromiumExecutablePath = (isPkg
  ? puppeteer.executablePath().replace(
    /^.*?\/node_modules\/puppeteer\/\.local-chromium/,
    path.join(path.dirname(process.execPath), 'chromium'),
  )
  : puppeteer.executablePath()
)

console.log(process.platform)
// check win32
if (process.platform == 'win32') {
  chromiumExecutablePath = (isPkg
    ? puppeteer.executablePath().replace(
      /^.*?\\node_modules\\puppeteer\\\.local-chromium/,
      path.join(path.dirname(process.execPath), 'chromium'),
    )
    : puppeteer.executablePath()
  )
}

let WS = null
app.ws('/', (ws, req) => {
  WS = ws
  ws.on('message', (msg) => {
    // 规整弹幕
    /**
     * uname,
            uid,
            fans,
            medal: _fans,
            message,
            rankNo,
            face,
            type,
     */
    try {
      const danmu = JSON.parse(msg)
      const data = {
        uname: danmu.user.nickname,
        uid: danmu.user.id,
        fans: danmu.user.fansClub.data.clubName,
        message: danmu.content,
        face: danmu.user.avatarThumb.urlList[0],
        type: 2,
      }
      console.log(JSON.stringify(data))
      WS.send(JSON.stringify(data))
    }
    catch (e) {
      console.log(e)
    }
  })
  console.log('socket')
})

const port = 3003
app.listen(port, async() => {
  console.log(`服务已启动${port}端口`)
})

// 读取js.js的内容
const con = fs.readFileSync(path.join(__dirname, './js.js'), 'utf-8')
; (async() => {
  const browser = await puppeteer.launch({
    headless: true,
    slowMo: 250,
    devtools: true,
    // chromiumExecutablePath 用于pkg打包时使用
    executablePath: chromiumExecutablePath,
  })
  const page = await browser.newPage()

  await page.setRequestInterception(true)
  page.on('request', async(request) => {
    if (request.url().match(/goofy\/douyin_live\/resource\/async2\/Living\.\w+\.js/)) {
      // 重写返回结果
      request.respond({
        status: 200,
        contentType: 'application/javascript',
        body: con,
      })
    }
    else {
      request.continue()
    }
  })
  // let roomId = 168465302284
  const roomId = 168465302284
  await page.goto(`https://live.douyin.com/${roomId}`)
  page.on('console', (msg) => {

  })
})()
```

## puppeteer生态

[playwright](https://github.com/microsoft/playwright)

[headless-chrome-crawler](https://github.com/yujiosaka/headless-chrome-crawler)

[jest-puppeteer](https://github.com/smooth-code/jest-puppeteer)

<https://github.com/transitive-bullshit/awesome-puppeteer/blob/master/readme.zh.md>