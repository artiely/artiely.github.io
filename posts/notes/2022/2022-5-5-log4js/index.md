---
tag:
  - log4js
  - nodejs
  - express
  - webSocket
cover: /2022-05-10-18-10-42.png
tinyCover: /cover/2022-05-10-18-10-42.png
coverWidth: 564
coverHeight: 877

---


# log4js简单使用

```js
npm install log4js

var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "debug"; // default level is OFF - which means no logs at all.
logger.debug("Some debug messages");
```

## 附加器

Appender 将日志事件序列化为某种形式的输出。他们可以写入文件、发送电子邮件、通过网络发送数据。所有的 appender 都有一个type决定使用哪个 appender。例如：

```js
const log4js = require('log4js')
log4js.configure({
  appenders: {
    out: { type: 'stdout' },
    app: { type: 'file', filename: 'application.log' },
  },
  categories: {
    default: { appenders: ['out', 'app'], level: 'debug' },
  },
})
```

这定义了两个名为“out”和“app”的附加程序。'out' 使用写入标准输出的标准输出附加程序。'app' 使用文件appender，配置为写入 'application.log'。

[文档](https://log4js-node.github.io/log4js-node/appenders.html)

## 我的配置

```js
const log4js = require('log4js')
log4js.configure({
  appenders: {
    tiktok: {
      type: 'log',
    },
  },
  categories: { default: { appenders: ['tiktok'], level: 'all' } },
  pm2: true,
  pm2InstanceVar: 'NODE_APP_INSTANCE',
})
const log = log4js.getLogger('日志')

log.debug('系统', os.platform())
```

`log.js`

```js
const express = require('express')
const app = express()
const expressWs = require('express-ws')(app)
let LogWS = null
const rooms = []
app.ws('/log/', (ws, req) => {
  LogWS = ws
  const { id } = req.query
  let curr = rooms.find(room => room.id == id)
  if (!curr) {
    curr = { id, ws }
    rooms.push(curr)
  }
  else {
    curr.ws = ws
  }
  console.log(rooms)

})
app.listen('9001', async() => {
  console.log('日志服务已启动9001端口')
})
function stdoutAppender(layout, timezoneOffset) {
  const appender = (loggingEvent) => {
    if (loggingEvent.level.levelStr == 'DEBUG') {
      const currWs = rooms.find(room => room.id == loggingEvent.data[0])
      if (currWs && LogWS)
        LogWS.send(`${layout(loggingEvent, timezoneOffset)}\n`)

    }
    // process.stdout.write(`${layout(loggingEvent, timezoneOffset)}\n`);
    process.stdout.write(`${JSON.stringify(loggingEvent)}\n`)
  }

  // add a shutdown function.
  appender.shutdown = (done) => {
    process.stdout.write('', done)
  }

  return appender
}

// stdout configure doesn't need to use findAppender, or levels
function configure(config, layouts) {
  // the default layout for the appender
  let layout = layouts.colouredLayout
  // check if there is another layout specified
  if (config.layout) {
    // load the layout
    layout = layouts.layout(config.layout.type, config.layout)
  }
  // create a new appender instance
  return stdoutAppender(layout, config.timezoneOffset)
}

// export the only function needed
exports.configure = configure
```

## 疑问

appender似乎只支持路径和模块名，不支持直接写入函数。
如果可以支持写入函数就更好了，有更大的灵活性。或许有更好的方式。