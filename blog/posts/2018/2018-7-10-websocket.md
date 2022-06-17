---
title: WebSocket
tag:
  - nodejs
  - webSocket
author: Artiely
date: 2018-7-10
cover: /2022-05-14-21-51-36.png
base64: fceb3f
tinyCover: /cover/2022-05-14-21-51-36.png
coverWidth: 736
coverHeight: 1033
coverPrimary: 312c41
coverSecondary: ced3be

---


# WebSocket

## 介绍

现在，很多网站为了实现推送技术，所用的技术都是 Ajax 轮询。轮询是在特定的的时间间隔（如每1秒），由浏览器对服务器发出HTTP请求，然后由服务器返回最新的数据给客户端的浏览器。这种传统的模式带来很明显的缺点，即浏览器需要不断的向服务器发出请求，然而HTTP请求可能包含较长的头部，其中真正有效的数据可能只是很小的一部分，显然这样会浪费很多的带宽等资源。

![img](https://gitee.com/artiely/Figure-bed/raw/master/images/20200314170350.png)



所以单向请求的缺点：

- 无法监听连续状态变化 (HTTP无状态）
- 效率低
- 浪费资源



HTML5 定义的 WebSocket 协议，能更好的节省服务器资源和带宽，并且能够更实时地进行通讯。

Websocket的常见应用：

- 聊天室
- 消息系统：推送消息、实况、股票基金等实时变化的数据
- 点赞
- 直播评论（弹幕）
- 游戏
- 协同编辑/编辑
- 基于位置的应用
- 在线教育（多媒体聊天、文字消息）



**学习路径：**

- 了解Websocket基本概念 what
- 了解Websocket工作原理（解决的问题）Why
- 搭建Websocket服务 how
- 学习Websocket的基本使用 how
- 具体的Websocket应用（消息应用）



**目标：**

- 了解websocket基本工作原理
- 学会搭建websocket nodejs的服务端
- 学习使用websocket客户端
- 掌握常见的websocket方法、事件、属性
- 学生聊天室应用的编写



**准备：**

- Linux服务器，或者虚拟机（Centos 7.x），安装Docker服务参见：https://www.daocloud.io/mirror

- 域名：可以方便后面配置WSS，开发一些WSS的应用，比如小程序





## Websocket基础

WebSocket 协议在2008年诞生，2011年成为国际标准。所有浏览器都已经[支持](https://caniuse.com/#search=websocket)了。

![image-20191004220021412](https://gitee.com/artiely/Figure-bed/raw/master/images/20200314170351.png)

它的最大特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的**双向平等**对话，属于服务器推送技术的一种。



### 基本概念

WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。

WebSocket 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。

在 WebSocket API 中，浏览器和服务器只需要做一个握手的动作，然后，浏览器和服务器之间就形成了一条快速通道。两者之间就直接可以数据互相传送。

![img](https://gitee.com/artiely/Figure-bed/raw/master/images/20200314170352.png)

WebSocket特点：

（1）建立在 TCP 协议之上，服务器端的实现比较容易。

（2）与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。

（3）数据格式比较轻量，性能开销小，通信高效。

（4）可以发送文本，也可以发送二进制数据。

（5）没有同源限制，客户端可以与任意服务器通信。

（6）协议标识符是`ws`（如果加密，则为`wss`），服务器网址就是 URL。



### WebSocket服务端

常用的 Node 实现有以下几种。

- [ws](https://github.com/websockets/ws)
- [µWebSockets](https://github.com/uWebSockets/uWebSockets)
- [Socket.IO](http://socket.io/)
- [WebSocket-Node](https://github.com/theturtle32/WebSocket-Node)



#### ws配置服务端

```shell
npm install -S ws
```



使用`Wesocket.Server`方法，可以快速初始化服务端：

```js
const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('received: %s', message)
  })

  ws.send('something')
})
```



客户端的例子：

```js
// 引用weboscket库
const WebSocket = require('ws')

const ws = new WebSocket('ws://127.0.0.1:8080')

ws.on('open', () => {
  for (let i = 0; i < 3; i++)
    ws.send(`Hello from client: ${i}`)

  ws.on('message', (msg) => {
    console.log(msg)
  })
})
```



一个复杂一点的配置：

```js
const WebSocket = require('ws')

const wss = new WebSocket.Server({
  port: 8080,
  perMessageDeflate: {
    zlibDeflateOptions: {
      // See zlib defaults.
      chunkSize: 1024,
      memLevel: 7,
      level: 3,
    },
    zlibInflateOptions: {
      chunkSize: 10 * 1024,
    },
    // Other options settable:
    clientNoContextTakeover: true, // Defaults to negotiated value.
    serverNoContextTakeover: true, // Defaults to negotiated value.
    serverMaxWindowBits: 10, // Defaults to negotiated value.
    // Below options specified as default values.
    concurrencyLimit: 10, // Limits zlib concurrency for perf.
    threshold: 1024, // Size (in bytes) below which messages
    // should not be compressed.
  },
})
```



#### socket.io配置服务端

WebSocket是跟随HTML5一同提出的，所以在兼容性上存在问题，这时一个非常好用的库就登场了——[Socket.io](https://socket.io/)。

socket.io封装了websocket，同时包含了其它的连接方式，你在任何浏览器里都可以使用socket.io来建立异步的连接。socket.io包含了服务端和客户端的库，如果在浏览器中使用了socket.io的js，服务端也必须同样适用。

socket.io是基于 Websocket 的Client-Server 实时通信库。

socket.io底层是基于engine.io这个库。engine.io为 socket.io 提供跨浏览器/跨设备的双向通信的底层库。engine.io使用了 Websocket 和 XHR 方式封装了一套 socket 协议。在低版本的浏览器中，不支持Websocket，为了兼容使用长轮询(polling)替代。

![engine.io](https://gitee.com/artiely/Figure-bed/raw/master/images/20200314170353.png)



- socket.io服务端 http / express两个库

  ```js
  const app = require('express')()
  const http = require('http').createServer(app)
  const io = require('socket.io')(http)
  
  app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
  })
  
  // 监听连接
  io.on('connection', (socket) => {
    console.log('a socket is connected')
    // 获取客户端的消息
    socket.on('chat msg', (msg) => {
      console.log(`msg from client: ${msg}`)
      // 发送消息给客户端
      socket.send(`server says: ${msg}`)
    })
  })
  
  http.listen(3000, () => {
    console.log('server is running on: 3000')
  })
  ```

- 客户端，需要引用`socket.io.js`，有两种方式去引用：（1）支持从socket.io.client中的dist中加载这个js （2）CDN

  ```js
  <script src="https://cdn.jsdelivr.net/npm/socket.io-client@2/dist/socket.io.js"></script>
  <script>
    var socket = io();
  </script>
  ```

  客户端的仓库地址：https://github.com/socketio/socket.io-client





### WebSocket API

浏览器通过 JavaScript 向服务器发出建立 WebSocket 连接的请求，连接建立以后，客户端和服务器端就可以通过 TCP 连接直接交换数据。

当你获取 Web Socket 连接后，你可以通过 **send()** 方法来向服务器发送数据，并通过 **onmessage** 事件来接收服务器返回的数据。

以下 API 用于创建 WebSocket 对象。

```js
const Socket = new WebSocket(url, [protocol])
```

以上代码中的第一个参数 url, 指定连接的 URL。第二个参数 protocol 是可选的，指定了可接受的子协议。



#### WebSocket属性

以下是 WebSocket 对象的属性。假定我们使用了以上代码创建了 Socket 对象：

| 属性                  | 描述                                                         |
| :-------------------- | :----------------------------------------------------------- |
| Socket.readyState     | 只读属性 **readyState** 表示连接状态，可以是以下值：0 - 表示连接尚未建立。1 - 表示连接已建立，可以进行通信。2 - 表示连接正在进行关闭。3 - 表示连接已经关闭或者连接不能打开。 |
| Socket.bufferedAmount | 只读属性 **bufferedAmount** 已被 send() 放入正在队列中等待传输，但是还没有发出的 UTF-8 文本字节数。 |



#### WebSocket 事件

以下是 WebSocket 对象的相关事件。假定我们使用了以上代码创建了 Socket 对象：

| 事件    | 事件处理程序     | 描述                       |
| :------ | :--------------- | :------------------------- |
| open    | Socket.onopen    | 连接建立时触发             |
| message | Socket.onmessage | 客户端接收服务端数据时触发 |
| error   | Socket.onerror   | 通信发生错误时触发         |
| close   | Socket.onclose   | 连接关闭时触发             |



#### WebSocket 方法

以下是 WebSocket 对象的相关方法。假定我们使用了以上代码创建了 Socket 对象：

| 方法           | 描述             |
| :------------- | :--------------- |
| Socket.send()  | 使用连接发送数据 |
| Socket.close() | 关闭连接         |



#### WebSocket 实例

WebSocket 协议本质上是一个基于 TCP 的协议。

为了建立一个 WebSocket 连接，客户端浏览器首先要向服务器发起一个 HTTP 请求，这个请求和通常的 HTTP 请求不同，包含了一些附加头信息，其中附加头信息"Upgrade: WebSocket"表明这是一个申请协议升级的 HTTP 请求，服务器端解析这些附加的头信息然后产生应答信息返回给客户端，客户端和服务器端的 WebSocket 连接就建立起来了，双方就可以通过这个连接通道自由的传递信息，并且这个连接会持续存在直到客户端或者服务器端的某一方主动的关闭连接。

**客户端的 HTML 和 JavaScript**

目前大部分浏览器支持 WebSocket() 接口，你可以在以下浏览器中尝试实例： Chrome, Mozilla, Opera 和 Safari。





## Websocket基础应用

### 基本的应用

- 如何广播消息
- 使用vue（调试版本&正式版本）



服务端：

```js
const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8000 })

wss.on('connection', (ws) => {
  console.log('a new client is connected!')
  ws.on('message', (msg) => {
    // 广播到其他的客户端
    wss.clients.forEach((client) => {
      // 广播给非自己的其他客户端
      if (client !== ws && client.readyState === WebSocket.OPEN)
        client.send(msg)

    })
  })
})
```



在浏览器侧：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  </head>
  <body>
    <div id="app">
      <!-- 显示消息 -->
      <ul>
        <li v-for="item in items">
          {{ item.message }}
        </li>
      </ul>
      <!-- 发送消息 -->
      <div class="ctrl">
        <input type="text" v-model="inputValue" />
        <button type="button" @click="submit()">发送</button>
      </div>
      {{ inputValue }}
    </div>

    <script>
      // 客户端的代码
      // 1. 发送消息
      // 客户端 取input数据 -> websocket -> 发送到服务端 -> 转发给其他所有的客户端
      // 2. 显示消息
      var app = new Vue({
        el: "#app",
        data: {
          inputValue: "",
          items: [
            { message: "Foo" },
            { message: "Bar" },
            { message: "demo" },
          ],
          wsHandle: "",
          name: "",
        },
        // 把元素挂载完成之后，自动执行
        mounted() {
          var _this = this;
          this.wsHandle = new WebSocket("ws://localhost:8000");
          this.wsHandle.onopen = this.onOpen;
          // 服务端发送回来的其他消息
          this.wsHandle.onmessage = this.onMessage;
        },
        methods: {
          submit: function() {
            // 取inputValue
            // 通过websocket发送数据
            console.log(this.inputValue);
            this.wsHandle.send(this.inputValue);
            this.items.push({
              message: this.inputValue,
            });
            this.inputValue = "";
          },
          onOpen: function() {
            console.log("client is connected");
          },
          onMessage: function(evt) {
            // 把数据推送到items中
            this.items.push({
              message: evt.data,
            });
          },
        },
      });
    </script>
  </body>
</html>

```



### 欢迎语

```js
// 客户端的代码
// 1. 发送消息
// 客户端 取input数据 -> websocket -> 发送到服务端 -> 转发给其他所有的客户端
// 2. 显示消息
const app = new Vue({
  el: '#app',
  data() {
    return {
      isShow: true,
      inputValue: '',
      items: [],
      wsHandle: '',
      name: '',
      num: 0,
    }
  },
  // 把元素挂载完成之后，自动执行
  mounted() {
    const _this = this
    this.wsHandle = new WebSocket('ws://localhost:8000')
    this.wsHandle.onopen = this.onOpen
    // 服务端发送回来的其他消息
    this.wsHandle.onmessage = this.onMessage
  },
  methods: {
    submit() {
      // 取inputValue
      // 通过websocket发送数据
      console.log(this.inputValue)
      this.wsHandle.send(
        JSON.stringify({
          name: this.name,
          message: this.inputValue,
        }),
      )
      this.items.push({
        message: `${this.name}: ${this.inputValue}`,
      })
      this.inputValue = ''
    },
    into() {
      if (this.name.trim() === '') {
        alert('用户名不得为空')
        return
      }
      this.wsHandle.send(
        JSON.stringify({
          name: this.name,
        }),
      )
      this.isShow = false
    },
    onOpen() {
      console.log('client is connected')
    },
    onMessage(evt) {
      const msg = JSON.parse(evt.data)
      if (msg.num)
        this.num = msg.num

      if (msg.name && !msg.message) {
        this.items.push({
          message: `欢迎${msg.name}加入聊天室！`,
        })
      }
      else {
        // 把数据推送到items中
        this.items.push({
          message: `${msg.name}: ${msg.message}`,
        })
      }
    },
  },
})
```



### 退出时进行消息通知

- 服务端广播消息
- 客户端针对不同的业务进行代码提示



服务端：

```js
ws.on('close', () => {
  console.log(`one client is closed :${ws}`)
  if (typeof ws.name !== 'undefined') {
    // 广播到其他的客户端
    wss.clients.forEach((client) => {
      // 广播给非自己的其他客户端
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({
          name: ws.name,
          event: 'logout',
          num: wss.clients.size,
        }))
      }
    })
  }
})
```



客户端：

```js
// 客户端的代码
// 1. 发送消息
// 客户端 取input数据 -> websocket -> 发送到服务端 -> 转发给其他所有的客户端
// 2. 显示消息
const app = new Vue({
  el: '#app',
  data() {
    return {
      isShow: true,
      inputValue: '',
      items: [],
      wsHandle: '',
      name: '',
      num: 0,
    }
  },
  // 把元素挂载完成之后，自动执行
  mounted() {
    const _this = this
    this.wsHandle = new WebSocket('ws://localhost:8000')
    this.wsHandle.onopen = this.onOpen
    // 服务端发送回来的其他消息
    this.wsHandle.onmessage = this.onMessage
  },
  methods: {
    submit() {
      // 取inputValue
      // 通过websocket发送数据
      console.log(this.inputValue)
      this.wsHandle.send(
        JSON.stringify({
          name: this.name,
          message: this.inputValue,
          event: 'message',
        }),
      )
      this.items.push({
        message: `${this.name}: ${this.inputValue}`,
      })
      this.inputValue = ''
    },
    into() {
      if (this.name.trim() === '') {
        alert('用户名不得为空')
        return
      }
      this.wsHandle.send(
        JSON.stringify({
          name: this.name,
          event: 'login',
        }),
      )
      this.isShow = false
    },
    onOpen() {
      console.log('client is connected')
    },
    onMessage(evt) {
      const msg = JSON.parse(evt.data)
      if (msg.num)
        this.num = msg.num

      if (msg.event === 'login') {
        this.items.push({
          message: `欢迎${msg.name}加入聊天室！`,
        })
      }
      else if (msg.event === 'logout') {
        this.items.push({
          message: `${msg.name}已经退出了聊天室！`,
        })
      }
      else {
        if (msg.name !== this.name) {
          // 把数据推送到items中
          this.items.push({
            message: `${msg.name}: ${msg.message}`,
          })
        }
      }
    },
  },
})
```



### 统计聊天人数

服务端：

```js
ws.on('message', (msg) => {
  const msgObj = JSON.parse(msg)
  if (msgObj.name)
    ws.name = msgObj.name

  // 广播到其他的客户端
  wss.clients.forEach((client) => {
    msgObj.num = wss.clients.size
    // 广播给非自己的其他客户端
    if (client.readyState === WebSocket.OPEN)
      client.send(JSON.stringify(msgObj))

  })
})
```



统计聊天人数：

- 服务端把在线的clients数量返回给客户端
- 客户端接收消息（包括自己）



### 多个聊天室

- 存储聊天室（会话）
  - 内存中进行存储
  - redis
  - redis + mongoDB
  - localstorage + 重连机制
- 指定发送消息
- 统计在线人数

```js
const group = {}

// ...
// console.log('a new client is connected!');
ws.on('message', (msg) => {
  const msgObj = JSON.parse(msg)
  if (msgObj.name)
    ws.name = msgObj.name

  if (typeof ws.roomid === 'undefined' && msgObj.roomid) {
    ws.roomid = msgObj.roomid
    if (typeof group[ws.roomid] === 'undefined')
      group[ws.roomid] = 1

    else {
      group[ws.roomid]++
    }
  }
  // 广播到其他的客户端
  wss.clients.forEach((client) => {
    msgObj.num = group[ws.roomid]
    if (client.readyState === WebSocket.OPEN && client.roomid === ws.roomid)
      client.send(JSON.stringify(msgObj))

    // msgObj.num = wss.clients.size
    // // 广播给非自己的其他客户端
    // if (client.readyState === WebSocket.OPEN) {
    //   client.send(JSON.stringify(msgObj));
    // }
  })
})

// ...

// 客户端断开链接
ws.on('close', () => {
  // console.log('one client is closed :' + ws);
  if (typeof ws.name !== 'undefined') {
    // 退出的用户，修改对应的在线客户端数据
    group[ws.roomid]--
    // 广播到其他的客户端
    wss.clients.forEach((client) => {
      // 广播给非自己的其他客户端
      if (client !== ws && ws.roomid === client.roomid && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({
          name: ws.name,
          event: 'logout',
          num: group[ws.roomid],
        }))
      }
    })
  }
})
```



### 心跳检测

- 服务端：检测客户端的连接 -> 定时器 -> 超过指定时间 -> 主动断开客户端的连接
- 客户端：设置定时器 -> 如果超时或者服务端没有响应 ping/pong -> 断开与服务端的连接



服务端代码：

```js
// 消息处理
ws.on('message', (msg) => {
  // ...
  const msgObj = JSON.parse(msg)
  if (msgObj.event === 'heartbeat' && msgObj.message === 'pong')
    ws.isAlive = true

  // ...
})

// 计时器
const interval = setInterval(() => {
  // 遍历所有的客户端，发送一个ping/pong消息
  // 检测是否有返回，如果没有返回或者超时之后，主动断开与客户端的连接
  wss.clients.forEach((ws) => {
    if (ws.isAlive === false) {
      console.log('client is disconneted!')
      group[ws.roomid]--
      return ws.terminate()
    }

    ws.isAlive = false
    // 主动发送ping/pong消息
    // 客户端返回了之后，主动设置isAlive的状态
    ws.send(JSON.stringify({
      event: 'heartbeat',
      message: 'ping',
    }))
  })
}, timeInterval)
```



客户端的代码：

```js
onOpen: function() {
  // 连接创建之时
  // 设置定时器 -> 如果超时或者服务端没有响应 ping/pong -> 断开与服务端的连接
  console.log("client is connected");
  this.checkServer();
},

onMessage: function () {
  // 心跳检测
  if (msg.event === "heartbeat" && msg.message === "ping") {
    this.checkServer();
    this.wsHandle.send(
      JSON.stringify({
        event: "heartbeat",
        message: "pong",
      })
    );
    return;
  }
  //...
}

// 定时器方法
checkServer: function() {
  console.log("checkServer in");
  // 计时器去定时检测websocket的连接
  var _this = this;
  clearTimeout(this.handler);
  // 超时之后，即会执行
  this.handler = setTimeout(function() {
    console.log("checkServer fail, close websocket");
    // 主动断开服务器端的连接
    _this.onClose();
  }, 5000 + 1000);
},
```



### ws中的鉴权

鉴权机制设计:

使用jsonwebtoken（jwt）方式进行鉴权：

服务端：

```js
// 在message事件内部
// 鉴权机制 -> 检验token的有效性
if (msgObj.event === 'auth') {
  console.log(`msg auth is: ${msgObj.message}`)
  // 拿到token,并且去校验时效性
  jwt.verify(msgObj.message, 'secret', (err, decode) => {
    if (err) {
      // websocket返回前台一个消息
      console.log('auth error')
      return
    }
    else {
      // 鉴权通过的逻辑
      // 这里可以拿到decode，即payload里面的内容
      ws.isAuth = true
      return
    }
    console.log(JSON.stringify(decode))
  })
}
// 拦截，非鉴权的请求
if (!ws.isAuth) {
  // 去给客户端发送重新鉴权的消息
  ws.send(JSON.stringify({
    event: 'noauth',
    message: 'please auth again, your token is expired!',
  }))

}
```



客户端：

```js
onOpen: function() {
  // 连接创建之时
  // 设置定时器 -> 如果超时或者服务端没有响应 ping/pong -> 断开与服务端的连接
  console.log("client is connected");
  this.checkServer();
  // 发送鉴权token，token -> expire
  const data = {
  event: "auth",
  message: "token", // localstorage, cookie/session -> koa/express
  };
  // 主动鉴权
  this.wsHandle.send(JSON.stringify(data));
},
```



### Websocket中的断线重连

- 监听error事件

- 使用reconnect-websocket库：

  - es6:https://www.npmjs.com/package/reconnecting-websocket

  使用方法：

  ```js
  import ReconnectingWebSocket from 'reconnecting-websocket'
  
  const rws = new ReconnectingWebSocket('ws://my.site.com')
  
  rws.addEventListener('open', () => {
    rws.send('hello!')
  })
  ```

  

  - es5: https://github.com/joewalnes/reconnecting-websocket

  使用方法：

  ```js
  const ws = new ReconnectingWebSocket('ws://....')
  ```




### Websocket与Redis结合

Redis：

```js
const redis = require('redis')
const { promisifyAll } = require('bluebird')

const { redisOptions } = require('../config/index')

const redisClient = redis.createClient(redisOptions)
promisifyAll(redisClient)

// 对连接信息的监听
redisClient.on('connect', () => {
  console.log('redis client is connected to server!')
})

// 对错误日志的打印
redisClient.on('error', (err) => {
  console.log(`redis client is error: ${err}`)
})

/**
 * setValue方法
 * @param {String} key 对象的属性
 * @param {String} value 对象的值 JSON.stringfy -> Object
 * @param {*} time 过期时间
 */
const setValue = function(key, value, time) {
  if (time)
    redisClient.set(key, value, 'EX', time, redis.print)

  else
    redisClient.set(key, value, redis.print)

}

/**
 * getValue方法
 * @param {String} key
 * 返回是一个String，需要对对象形式的内容，使用JSON.parse
 */
const getValue = async function(key) {
  const result = await redisClient.getAsync(key)
  return result
}

/**
 * 增加记数
 * @param {String}} key
 */
const increase = async function(key) {
  const result = await redisClient.incrAsync(key)
  return result
}

const decrease = async function(key) {
  const result = await redisClient.decrAsync(key)
  return result
}

/**
 * 返回所有相关reg的keys
 * @param {String} reg 定义一个查询的正则表达式
 */
const getKeys = async function(reg) {
  const result = await redisClient.keysAsync(`${reg}*`)
  return result
}

const existKey = async function(key) {
  const result = await redisClient.existsAsync(key)
  return result
}

const deleteKey = async function(key) {
  const result = await redisClient.delAsync(key)
  return result
}

module.exports = {
  setValue,
  getValue,
  increase,
  decrease,
  getKeys,
  existKey,
  deleteKey,
}
```



### 离线消息缓存发送

客户端： 

- 设置uid，确定ws唯一的标识
- 断线重连后，发送roomid与uid

```js
const urlParams = new URLSearchParams(window.location.search)
const uid = urlParams.get('uid')
if (this.name.trim() === '') {
  alert('用户名不得为空')
  return
}
this.wsHandle.send(
  JSON.stringify({
    name: this.name,
    roomid: this.roomid,
    uid,
    event: 'login',
  }),
)
this.isShow = false
```



服务端：

- 使用redis进行消息的缓存
- 对客户端的连接进行唯一性标识
- 对于断开连接的客户端，离线消息进行保存
- 再次连接过来的客户端，发送离线消息

```js
wss.on("connection", function(ws, req) {
  // 初始化客户端的连接状态量
  ws.isAlive = true

  // console.log('a new client is connected!');
  ws.on("message", async function(msg) {
    var msgObj = JSON.parse(msg)
    if (msgObj.event === "heartbeat" && msgObj.message === "pong") {
      ws.isAlive = true
      return
    }
    if (msgObj.name) {
      ws.name = msgObj.name
    }
    if (msgObj.uid) {
      ws.uid = msgObj.uid
    }
    if (typeof ws.roomid === "undefined" && msgObj.roomid) {
      // 还需要一个客户端的标识，可以知道ws给谁去发送消息
      ws.roomid = msgObj.roomid
      const result = await existKey(prefix + msgObj.roomid)
      if (result === 0) {
        // 初始化数据
        setValue(prefix + msgObj.roomid, ws.uid)
      } else {
        let arrStr = await getValue(prefix + msgObj.roomid)
        // String -> Json
        let arr = arrStr.split(",")
        if (arr.indexOf(ws.uid) === -1) {
          arrStr += "," + ws.uid
          setValue(prefix + msgObj.roomid, arrStr)
        }
      }
    }
    // 广播到其他的客户端
    let arrStr1 = await getValue(prefix + ws.roomid)
    let arr1 = arrStr1.split(",")
    // 在线人数，计算uid的个数
    msgObj.total = arr1.length
    msgObj.num = wss.clients.size
    wss.clients.forEach(async function each(client) {
      if (client.readyState === WebSocket.OPEN && client.roomid === ws.roomid) {
        client.send(JSON.stringify(msgObj))
        // 删除已经发送了消息的对应的对象
        if (arr1.indexOf(client.uid) !== -1) {
          arr1.splice(arr1.indexOf(client.uid), 1)
        }
        let result = await existKey(ws.uid)
        if (result !== 0) {
          let tmpArr = await getValue(ws.uid)
          let tmpObj = JSON.parse(tmpArr)
          let uid = ws.uid
          if (tmpObj.length > 0) {
            let i = []
            // 遍历数组，判断是否是同一个roomid，否则的话，就保存数据
            tmpObj.forEach(function(item) {
              if (item.roomid === client.roomid && uid === client.uid) {
                // 如果是同一个roomid，就发送对应的消息数据。
                client.send(JSON.stringify(item.msg))
                i.push(item)
              }
            })
            if (i.length > 0) {
              i.forEach(function(item) {
                tmpObj.splice(item, 1)
              })
            }
            setValue(ws.uid, JSON.stringify(tmpObj))
          }
        }
      }
      // 判断，是否有客户端没有连接。
      // 对于没有连接的客户端的数据，进行分发缓存处理
    })

    // 说明有一些客户端断开了与roomid的连接，并且，其他客户端发送了对应的消息
    if (arr1.length > 0 && msgObj.event === "message") {
      arr1.forEach(async function(item) {
        const result = await existKey(item)
        if (result !== 0) {
          let udata = await getValue(item)
          let uObj = JSON.parse(udata)
          uObj.push({
            roomid: ws.roomid,
            msg: msgObj,
          })
          setValue(item, JSON.stringify(uObj))
        } else {
          // 说明先前，这个数据没有进行缓存 ，没有记录
          setValue(
            item,
            JSON.stringify([
              {
                roomid: ws.roomid,
                msg: msgObj,
              },
            ])
          )
        }
      })
    }
  })
```



## Websocket SSL配置

### 配置HTTPS/WSS

如何配置HTTPS/WSS：

```js
const fs = require('fs')
const https = require('https')
const WebSocket = require('ws')

const server = https.createServer({
  cert: fs.readFileSync('/path/to/cert.pem'),
  key: fs.readFileSync('/path/to/key.pem'),
})
const wss = new WebSocket.Server({ server })

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('received: %s', message)
  })

  ws.send('something')
})

server.listen(8080)
```



## 其他资料

### 参考资料

- [WebSocket + Node.js + Express — Step by step tutorial using Typescript](https://medium.com/factory-mind/websocket-node-js-express-step-by-step-using-typescript-725114ad5fe4)

  