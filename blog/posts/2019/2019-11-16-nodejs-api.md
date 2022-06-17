---
title: nodejs核心api
tag:
  - nodejs
author: Artiely
date: '2019-11-16'
cover: /2022-05-14-22-06-30.png
base64: fee200
tinyCover: /cover/2022-05-14-22-06-30.png
coverWidth: 564
coverHeight: 564
coverPrimary: c5bdb3
coverSecondary: 3a424c

---


# nodejs核心api

## 目标

- 理解nodejs常用核心api

- 加深对nodejs设计思想的理解

## 核心api

### Buffer

在引入 [`TypedArray`](http://nodejs.cn/s/oh3CkV) 之前，JavaScript 语言没有用于读取或操作二进制数据流的机制。 `Buffer` 类是作为 Node.js API 的一部分引入的，用于在 TCP 流、文件系统操作、以及其他上下文中与八位字节流进行交互。

现在可以使用 [`TypedArray`](http://nodejs.cn/s/oh3CkV)， `Buffer` 类以更优化和更适合 Node.js 的方式实现了 [`Uint8Array`](http://nodejs.cn/s/ZbDkpm) API。

`Buffer` 类的实例类似于从 `0` 到 `255` 之间的整数数组（其他整数会通过 `＆ 255` 操作强制转换到此范围），但对应于 V8 堆外部的固定大小的原始内存分配。 `Buffer` 的大小在创建时确定，且无法更改。

`Buffer` 类在全局作用域中，因此无需使用 `require('buffer').Buffer`。

 ```js
// 创建一个长度为 10、且用零填充的 Buffer。
const buf1 = Buffer.alloc(10)
 
 // 创建一个长度为 10、且用 0x1 填充的 Buffer。
 const buf2 = Buffer.alloc(10, 1)
 
 // 创建一个长度为 10、且未初始化的 Buffer。
 // 这个方法比调用 Buffer.alloc() 更快，
 // 但返回的 Buffer 实例可能包含旧数据，
 // 因此需要使用 fill() 或 write() 重写。
 const buf3 = Buffer.allocUnsafe(10)
 
 // 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
 const buf4 = Buffer.from([1, 2, 3])
 
 // 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
 const buf5 = Buffer.from('tést')
 
 // 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
 const buf6 = Buffer.from('tést', 'latin1')
```

#### utf-8

UTF-8 的编码规则很简单：如果只有一个字节，那么最高的比特位为 0；如果有多个字节，那么第一个字节从最高位开始，连续有几个比特位的值为 1，就使用几个字节编码，剩下的字节均以 10 开头。



具体的表现形式为：

0xxxxxxx：单字节编码形式，这和 ASCII 编码完全一样，因此 UTF-8 是兼容 ASCII 的；
110xxxxx 10xxxxxx：双字节编码形式；
1110xxxx 10xxxxxx 10xxxxxx：三字节编码形式；
11110xxx 10xxxxxx 10xxxxxx 10xxxxxx：四字节编码形式。


xxx 就用来存储 Unicode 中的字符编号。

下面是一些字符的编码实例（绿色部分表示本来的 Unicode 编号）：


![image-20191116203351074](https://gitee.com/artiely/Figure-bed/raw/master/images/20200310203848.png)

#### TypedArray

```js
new TypedArray(); // ES2017中新增
new TypedArray(length); 
new TypedArray(typedArray); 
new TypedArray(object); 
new TypedArray(buffer [, byteOffset [, length]]); 

TypedArray()指的是以下的其中之一： 

Int8Array(); 
Uint8Array(); 
Uint8ClampedArray();
Int16Array(); 
Uint16Array();
Int32Array(); 
Uint32Array(); 
Float32Array(); 
Float64Array();
```

ArrayBuffer对象：代表原始的二进制数据。

TypedArray视图：用来读写简单类型的二进制数据。

DataView视图：用来读写复杂类型的二进制数据。

```js
function str2ab(str) {
  const buf = new ArrayBuffer(str.length * 2) // 每个字符占用2个字节
  const bufView = new Uint8Array(buf)
  for (let i = 0, strLen = str.length; i < strLen; i++)
    bufView[i] = str.charCodeAt(i)

  return buf
}
```

上面方法为什么不直接循环buf，而是又创建了一个对象Uint8Array?
因为ArrayBufffer不能直接读写。但是可以通过Uint8Array，Uint16Array.。。等等对象读写。
当然，上面写可以直接创建Uint8Array(str.length * 2);一个效果

#### buffer 与 typedArray

`Buffer` 实例也是 [`Uint8Array`](http://nodejs.cn/s/ZbDkpm) 实例，但是与 [`TypedArray`](http://nodejs.cn/s/oh3CkV) 有微小的不同。 例如，[`ArrayBuffer#slice()`](http://nodejs.cn/s/Ue6KZm) 会创建切片的拷贝，而 [`Buffer#slice()`](http://nodejs.cn/s/uQPgxt) 是在现有的 `Buffer` 上创建而不拷贝，这使得 [`Buffer#slice()`](http://nodejs.cn/s/uQPgxt) 效率更高。

也可以从一个 `Buffer` 创建新的 [`TypedArray`](http://nodejs.cn/s/oh3CkV) 实例，但需要注意以下事项：

1. `Buffer` 对象的内存是被拷贝到 [`TypedArray`](http://nodejs.cn/s/oh3CkV)，而不是共享。
2. `Buffer` 对象的内存是被解释为不同元素的数组，而不是目标类型的字节数组。 也就是说， `new Uint32Array(Buffer.from([1, 2, 3, 4]))` 会创建一个带有 4 个元素 `[1, 2, 3, 4]` 的 [`Uint32Array`](http://nodejs.cn/s/xF6oKR)，而不是带有单个元素 `[0x1020304]` 或 `[0x4030201]` 的 [`Uint32Array`](http://nodejs.cn/s/xF6oKR)。

通过使用 `TypedArray` 对象的 `.buffer` 属性，可以创建一个与 [`TypedArray`](http://nodejs.cn/s/oh3CkV) 实例共享相同内存的新 `Buffer`。

```js
const arr = new Uint16Array(2)

arr[0] = 5000
arr[1] = 4000

// 拷贝 `arr` 的内容。
const buf1 = Buffer.from(arr)
// 与 `arr` 共享内存。
const buf2 = Buffer.from(arr.buffer)

console.log(buf1)
// 打印: <Buffer 88 a0>
console.log(buf2)
// 打印: <Buffer 88 13 a0 0f>

arr[1] = 6000

console.log(buf1)
// 打印: <Buffer 88 a0>
console.log(buf2)
// 打印: <Buffer 88 13 70 17>
```

### dgram

`dgram` 模块提供了 UDP 数据包 socket 的实现。

```js
const dgram = require('dgram')
const server = dgram.createSocket('udp4')

server.on('error', (err) => {
  console.log(`服务器异常：\n${err.stack}`)
  server.close()
})

server.on('message', (msg, rinfo) => {
  console.log(`服务器接收到来自 ${rinfo.address}:${rinfo.port} 的 ${msg}`)
})

server.on('listening', () => {
  const address = server.address()
  console.log(`服务器监听 ${address.address}:${address.port}`)
})

server.bind(41234)
// 服务器监听 0.0.0.0:41234
```

#### send

-  [`msg`](http://nodejs.cn/s/6x1hD3) | [](http://nodejs.cn/s/ZbDkpm) | [](http://nodejs.cn/s/9Tw2bK) | [](http://nodejs.cn/s/ZJSz23) 要发送的消息。
-  [`offset`](http://nodejs.cn/s/SXbo1v) 指定消息的开头在 buffer 中的偏移量。
-  [`length`](http://nodejs.cn/s/SXbo1v) 消息的字节数。
-  [`port`](http://nodejs.cn/s/SXbo1v) 目标端口。
-  [`address`](http://nodejs.cn/s/9Tw2bK) 目标主机名或 IP 地址。
-  [`callback`](http://nodejs.cn/s/ceTQa6) 当消息被发送时会被调用。

```js
// 示例，发送 UDP 包到 localhost 上的某个端口：

const dgram = require('dgram')
const message = Buffer.from('一些字节')
const client = dgram.createSocket('udp4')
client.send(message, 41234, 'localhost', (err) => {
  client.close()
})
// 示例，发送包含多个 buffer 的 UDP 包到 127.0.0.1 上的某个端口：

const dgram = require('dgram')
const buf1 = Buffer.from('一些 ')
const buf2 = Buffer.from('字节')
const client = dgram.createSocket('udp4')
client.send([buf1, buf2], 41234, (err) => {
  client.close()
})
// 发送多个 buffer 的速度取决于应用和操作系统。 逐案运行基准来确定最佳策略是很重要的。 但是一般来说，发送多个 buffer 速度更快。

// 示例，使用已连接的 socket 发送 UDP 包到 localhost 上的某个端口：

const dgram = require('dgram')
const message = Buffer.from('一些字节')
const client = dgram.createSocket('udp4')
client.connect(41234, 'localhost', (err) => {
  client.send(message, (err) => {
    client.close()
  })
})
```

### Events事件触发器

大多数 Node.js 核心 API 构建于惯用的异步事件驱动架构，其中某些类型的对象（又称触发器，Emitter）会触发命名事件来调用函数（又称监听器，Listener）。

例如，[`net.Server`](http://nodejs.cn/s/gBYjux) 会在每次有新连接时触发事件，[`fs.ReadStream`](http://nodejs.cn/s/C3Eioq) 会在打开文件时触发事件，[stream](http://nodejs.cn/s/kUvpNm)会在数据可读时触发事件。

所有能触发事件的对象都是 `EventEmitter` 类的实例。 这些对象有一个 `eventEmitter.on()` 函数，用于将一个或多个函数绑定到命名事件上。 事件的命名通常是驼峰式的字符串，但也可以使用任何有效的 JavaScript 属性键。。

当 `EventEmitter` 对象触发一个事件时，所有绑定在该事件上的函数都会被同步地调用。 被调用的监听器返回的任何值都将会被忽略并丢弃。

例子，一个简单的 `EventEmitter` 实例，绑定了一个监听器。 `eventEmitter.on()` 用于注册监听器， `eventEmitter.emit()` 用于触发事件。

```js
const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()
myEmitter.on('event', () => {
  console.log('触发事件')
})
myEmitter.emit('event')
```

#### 将参数和 this 传给监听器

`eventEmitter.emit()` 方法可以传任意数量的参数到监听器函数。 当监听器函数被调用时， `this` 关键词会被指向监听器所绑定的 `EventEmitter` 实例。

```js
const myEmitter = new MyEmitter()
myEmitter.on('event', function(a, b) {
  console.log(a, b, this, this === myEmitter)
  // 打印:
  //   a b MyEmitter {
  //     domain: null,
  //     _events: { event: [Function] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined } true
})
myEmitter.emit('event', 'a', 'b')
```

也可以使用 ES6 的箭头函数作为监听器。但 `this` 关键词不会指向 `EventEmitter` 实例：

```js
const myEmitter = new MyEmitter()
myEmitter.on('event', (a, b) => {
  console.log(a, b, this)
  // 打印: a b {}
})
myEmitter.emit('event', 'a', 'b')
```

#### 同步vs异步

`EventEmitter` 会按照监听器注册的顺序同步地调用所有监听器。 所以必须确保事件的排序正确，且避免竞态条件。 可以使用 `setImmediate()` 或 `process.nextTick()` 切换到异步模式：

```js
const myEmitter = new MyEmitter()
myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('异步进行')
  })
})
myEmitter.emit('event', 'a', 'b')
```

#### 仅处理事件一次

当使用 `eventEmitter.on()` 注册监听器时，监听器会在每次触发命名事件时被调用。

```js
const myEmitter = new MyEmitter()
let m = 0
myEmitter.on('event', () => {
  console.log(++m)
})
myEmitter.emit('event')
// 打印: 1
myEmitter.emit('event')
// 打印: 2
```

使用 `eventEmitter.once()` 可以注册最多可调用一次的监听器。 当事件被触发时，监听器会被注销，然后再调用。

```js
const myEmitter = new MyEmitter()
let m = 0
myEmitter.once('event', () => {
  console.log(++m)
})
myEmitter.emit('event')
// 打印: 1
myEmitter.emit('event')
// 不触发
```

### fs模块

在 NodeJS 中，所有与文件操作都是通过 `fs` 核心模块来实现的，包括文件目录的创建、删除、查询以及文件的读取和写入，在 `fs` 模块中，所有的方法都分为同步和异步两种实现，具有 `sync` 后缀的方法为同步方法，不具有 `sync` 后缀的方法为异步方法，在了解文件操作的方法之前有一些关于系统和文件的前置知识，如文件的权限位 `mode` 、标识位 `flag` 、文件描述符 `fd` 等，所以在了解 `fs` 方法的之前会先将这几个概念明确。

#### 权限位 mode

因为 `fs` 模块需要对文件进行操作，会涉及到操作权限的问题，所以需要先清楚文件权限是什么，都有哪些权限。

文件权限表：

| 权限分配 | 文件所有者 | 文件所属组 | 其他用户 |      |      |      |      |      |      |
| -------- | ---------- | ---------- | -------- | ---- | ---- | ---- | ---- | ---- | ---- |
| 权限项   | 读         | 写         | 执行     | 读   | 写   | 执行 | 读   | 写   | 执行 |
| 字符表示 | r          | w          | x        | r    | w    | x    | r    | w    | x    |
| 数字表示 | 4          | 2          | 1        | 4    | 2    | 1    | 4    | 2    | 1    |

在上面表格中，我们可以看出系统中针对三种类型进行权限分配，即文件所有者（自己）、文件所属组（家人）和其他用户（陌生人），文件操作权限又分为三种，读、写和执行，数字表示为八进制数，具备权限的八进制数分别为 `4` 、 `2` 、 `1` ，不具备权限为 `0` 。

为了更容易理解，我们可以随便在一个目录中打开 `Git` ，使用 [Linux](http://www.codercto.com/category/linux.html) 命令 `ls -al` 来查目录中文件和文件夹的权限位，如果对 `Git` 和 `Linux` 命令不熟悉，可以看 [Git 命令总结，从零到熟悉（全）](https://link.juejin.im/?target=https%3A%2F%2Fwww.pandashen.com%2F2017%2F12%2F14%2F20171214024101%2F) 。

#### 标识位flag

NodeJS 中，标识位代表着对文件的操作方式，如可读、可写、即可读又可写等等，在下面用一张表来表示文件操作的标识位和其对应的含义。

| 符号 | 含义                                                     |
| ---- | -------------------------------------------------------- |
| r    | 读取文件，如果文件不存在则抛出异常。                     |
| r+   | 读取并写入文件，如果文件不存在则抛出异常。               |
| rs   | 读取并写入文件，指示操作系统绕开本地文件系统缓存。       |
| w    | 写入文件，文件不存在会被创建，存在则清空后写入。         |
| wx   | 写入文件，排它方式打开。                                 |
| w+   | 读取并写入文件，文件不存在则创建文件，存在则清空后写入。 |
| wx+  | 和 `w+` 类似，排他方式打开。                             |
| a    | 追加写入，文件不存在则创建文件。                         |
| ax   | 与 `a` 类似，排他方式打开。                              |
| a+   | 读取并追加写入，不存在则创建。                           |
| ax+  | 与 `a+` 类似，排他方式打开。                             |

上面表格就是这些标识位的具体字符和含义，但是 `flag` 是不经常使用的，不容易被记住，所以在下面总结了一个加速记忆的方法。

- r：读取
- w：写入
- s：同步
- +：增加相反操作
- x：排他方式

`r+` 和 `w+` 的区别，当文件不存在时， `r+` 不会创建文件，而会抛出异常，但 `w+` 会创建文件；如果文件存在， `r+` 不会自动清空文件，但 `w+` 会自动把已有文件的内容清空。

#### 文件描述符

操作系统会为每个打开的文件分配一个名为文件描述符的数值标识，文件操作使用这些文件描述符来识别与追踪每个特定的文件，Window 系统使用了一个不同但概念类似的机制来追踪资源，为方便用户，NodeJS 抽象了不同操作系统间的差异，为所有打开的文件分配了数值的文件描述符。

在 NodeJS 中，每操作一个文件，文件描述符是递增的，文件描述符一般从 `3` 开始，因为前面有 `0` 、 `1` 、 `2` 三个比较特殊的描述符，分别代表 `process.stdin` （标准输入）、 `process.stdout` （标准输出）和 `process.stderr` （错误输出）。



#### (1) 同步读取方法 readFileSync

`readFileSync` 有两个参数：

- 第一个参数为读取文件的路径或文件描述符；
- 第二个参数为 `options` ，默认值为 `null` ，其中有 `encoding` （编码，默认为 `null` ）和 `flag` （标识位，默认为 `r` ），也可直接传入 `encoding` ；
- 返回值为文件的内容，如果没有 `encoding` ，返回的文件内容为 Buffer，如果有按照传入的编码解析。

若现在有一个文件名为 `1.txt` ，内容为 “Hello”，现在使用 `readFileSync` 读取。

同步读取 readFileSync

```js
const fs = require('fs')

const buf = fs.readFileSync('1.txt')
const data = fs.readFileSync('1.txt', 'utf8')

console.log(buf) // <Buffer 48 65 6c 6c 6f>
console.log(data) // Hello
```

#### (2) 异步读取方法 readFile

异步读取方法 `readFile` 与 `readFileSync` 的前两个参数相同，最后一个参数为回调函数，函数内有两个参数 `err` （错误）和 `data` （数据），该方法没有返回值，回调函数在读取文件成功后执行。

依然读取 `1.txt` 文件：

异步读取 readFile

```js
const fs = require('fs')

fs.readFile('1.txt', 'utf8', (err, data) => {
  console.log(err) // null
  console.log(data) // Hello
})
```

#### (3) 同步写入方法 writeFileSync

`writeFileSync` 有三个参数：

- 第一个参数为写入文件的路径或文件描述符；
- 第二个参数为写入的数据，类型为 String 或 Buffer；
- 第三个参数为 `options` ，默认值为 `null` ，其中有 `encoding` （编码，默认为 `utf8` ）、 `flag` （标识位，默认为 `w` ）和 `mode` （权限位，默认为 `0o666` ），也可直接传入 `encoding` 。

若现在有一个文件名为 `2.txt` ，内容为 “12345”，现在使用 `writeFileSync` 写入。

同步写入 writeFileSync

```js
const fs = require('fs')

fs.writeFileSync('2.txt', 'Hello world')
const data = fs.readFileSync('2.txt', 'utf8')

console.log(data) // Hello world
```

#### (4) 异步写入方法 writeFile

异步写入方法 `writeFile` 与 `writeFileSync` 的前三个参数相同，最后一个参数为回调函数，函数内有一个参数 `err` （错误），回调函数在文件写入数据成功后执行。

异步写入 writeFile

```js
const fs = require('fs')

fs.writeFile('2.txt', 'Hello world', (err) => {
  if (!err) {
    fs.readFile('2.txt', 'utf8', (err, data) => {
      console.log(data) // Hello world
    })
  }
})
```

#### (5) 同步追加写入方法 appendFileSync

`appendFileSync` 有三个参数：

- 第一个参数为写入文件的路径或文件描述符；
- 第二个参数为写入的数据，类型为 String 或 Buffer；
- 第三个参数为 `options` ，默认值为 `null` ，其中有 `encoding` （编码，默认为 `utf8` ）、 `flag` （标识位，默认为 `a` ）和 `mode` （权限位，默认为 `0o666` ），也可直接传入 `encoding` 。

若现在有一个文件名为 `3.txt` ，内容为 “Hello”，现在使用 `appendFileSync` 追加写入 “ world”。

同步追加 appendFileSync

```js
const fs = require('fs')

fs.appendFileSync('3.txt', ' world')
const data = fs.readFileSync('3.txt', 'utf8')

console.log(data) // Hello world
```

#### (6) 异步追加写入方法 appendFile

异步追加写入方法 `appendFile` 与 `appendFileSync` 的前三个参数相同，最后一个参数为回调函数，函数内有一个参数 `err` （错误），回调函数在文件追加写入数据成功后执行。

异步追加 appendFile

```js
const fs = require('fs')

fs.appendFile('3.txt', ' world', (err) => {
  if (!err) {
    fs.readFile('3.txt', 'utf8', (err, data) => {
      console.log(data) // Hello world
    })
  }
})
```

#### (7) 同步拷贝写入方法 copyFileSync

同步拷贝写入方法 `copyFileSync` 有两个参数，第一个参数为被拷贝的源文件路径，第二个参数为拷贝到的目标文件路径，如果目标文件不存在，则会创建并拷贝。

现在将上面 `3.txt` 的内容拷贝到 `4.txt` 中：

同步拷贝 copyFileSync

```js
const fs = require('fs')

fs.copyFileSync('3.txt', '4.txt')
const data = fs.readFileSync('4.txt', 'utf8')

console.log(data) // Hello world
```

#### (8) 异步拷贝写入方法 copyFile

异步拷贝写入方法 `copyFile` 和 `copyFileSync` 前两个参数相同，最后一个参数为回调函数，在拷贝完成后执行。

异步拷贝 copyFile

```js
const fs = require('fs')

fs.copyFile('3.txt', '4.txt', () => {
  fs.readFile('4.txt', 'utf8', (err, data) => {
    console.log(data) // Hello world
  })
})
```

### fs模块高级方法

#### 1、打开文件 open

`open` 方法有四个参数：

- path：文件的路径；
- flag：标识位；
- mode：权限位，默认 `0o666` ；
- callback：回调函数，有两个参数 `err` （错误）和 `fd` （文件描述符），打开文件后执行。

异步打开文件

```js
const fs = require('fs')

fs.open('4.txt', 'r', (err, fd) => {
  console.log(fd)
  fs.open('5.txt', 'r', (err, fd) => {
    console.log(fd)
  })
})

// 3
// 4
```

#### 2、关闭文件 close

`close` 方法有两个参数，第一个参数为关闭文件的文件描述符 `fd` ，第二参数为回调函数，回调函数有一个参数 `err` （错误），关闭文件后执行。

异步关闭文件

```js
const fs = require('fs')

fs.open('4.txt', 'r', (err, fd) => {
  fs.close(fd, (err) => {
    console.log('关闭成功')
  })
})

// 关闭成功
```

#### 3、读取文件 read

`read` 方法与 `readFile` 不同，一般针对于文件太大，无法一次性读取全部内容到缓存中或文件大小未知的情况，都是多次读取到 Buffer 中。

想了解 Buffer 可以看 [NodeJS —— Buffer 解读](https://link.juejin.im/?target=https%3A%2F%2Fwww.pandashen.com%2F2018%2F06%2F29%2F20180629115313%2F) 。

`read` 方法中有六个参数：

- fd：文件描述符，需要先使用 `open` 打开；
- buffer：要将内容读取到的 Buffer；
- offset：整数，向 Buffer 写入的初始位置；
- length：整数，读取文件的长度；
- position：整数，读取文件初始位置；
- callback：回调函数，有三个参数 `err` （错误）， `bytesRead` （实际读取的字节数）， `buffer` （被写入的缓存区对象），读取执行完成后执行。

下面读取一个 `6.txt` 文件，内容为 “你好”。

异步读取文件

```js
const fs = require('fs')
const buf = Buffer.alloc(6)

// 打开文件
fs.open('6.txt', 'r', (err, fd) => {
  // 读取文件
  fs.read(fd, buf, 0, 3, 0, (err, bytesRead, buffer) => {
    console.log(bytesRead)
    console.log(buffer)

    // 继续读取
    fs.read(fd, buf, 3, 3, 3, (err, bytesRead, buffer) => {
      console.log(bytesRead)
      console.log(buffer)
      console.log(buffer.toString())
    })
  })
})

// 3
// <Buffer e4 bd a0 00 00 00>

// 3
// <Buffer e4 bd a0 e5 a5 bd>
// 你好
```

#### 4.fs.createReadStream

这个api的作用是打开一个可读的文件流并且返回一个fs.ReadStream对象

```js
const fs = require('fs')
const path = require('path')
const readStream = fs.createReadStream('./test/b.js', { encoding: 'utf8' })
// console.log(readStream);

// 读取文件发生错误事件
readStream.on('error', (err) => {
  console.log('发生异常:', err)
})
// 已打开要读取的文件事件
readStream.on('open', (fd) => {
  console.log('文件已打开:', fd)
})
// 文件已经就位，可用于读取事件
readStream.on('ready', () => {
  console.log('文件已准备好..')
})

// 文件读取中事件·····
readStream.on('data', (chunk) => {
  console.log('读取文件数据:', chunk)
})

// 文件读取完成事件
readStream.on('end', () => {
  console.log('读取已完成..')
})

// 文件已关闭事件
readStream.on('close', () => {
  console.log('文件已关闭！')
})
```

### http模块

```js
const http = require('http')
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write('<h1>Node.js</h1>')
  res.end('<p>Hello World</p>')
}).listen(3000)
console.log('HTTP server is listening at port 3000.')
```

### http2模块

#### 安装本地证书

`openssl req -newkey rsa:2048 -nodes -keyout rsa_private.key -x509 -days 365 -out cert.crt`

```js
const http2 = require('http2')
const fs = require('fs')

const server = http2.createSecureServer({
  key: fs.readFileSync('rsa_private.key'),
  cert: fs.readFileSync('cert.crt'),
})

server.on('error', err => console.error(err))

server.on('stream', (stream, headers) => {
  // stream is a Duplex
  stream.respond({
    'content-type': 'text/html',
    ':status': 200,
  })
  stream.end('<h1>Hello World</h1>')
})

server.listen(8443)
```

#### http1.0和2.0的区别

早在 HTTP 建立之初，主要就是为了将超文本标记语言(HTML)文档从Web服务器传送到客户端的浏览器。也是说对于前端来说，我们所写的HTML页面将要放在我们的 web 服务器上，用户端通过浏览器访问url地址来获取网页的显示内容，但是到了 WEB2.0 以来，我们的页面变得复杂，不仅仅单纯的是一些简单的文字和图片，同时我们的 HTML 页面有了 CSS，Javascript，来丰富我们的页面展示，当 ajax 的出现，我们又多了一种向服务器端获取数据的方法，这些其实都是基于 HTTP 协议的。同样到了移动互联网时代，我们页面可以跑在手机端浏览器里面，但是和 PC 相比，手机端的网络情况更加复杂，这使得我们开始了不得不对 HTTP 进行深入理解并不断优化过程中。

![image-20191117124402868](https://gitee.com/artiely/Figure-bed/raw/master/images/20200310203849.png)

**http的基本优化**

影响一个 HTTP 网络请求的因素主要有两个：**带宽和延迟。**

- **带宽：**如果说我们还停留在拨号上网的阶段，带宽可能会成为一个比较严重影响请求的问题，但是现在网络基础建设已经使得带宽得到极大的提升，我们不再会担心由带宽而影响网速，那么就只剩下延迟了。

- **延迟：**

- - 浏览器阻塞（HOL blocking）：浏览器会因为一些原因阻塞请求。浏览器对于同一个域名，同时只能有 4 个连接（这个根据浏览器内核不同可能会有所差异），超过浏览器最大连接数限制，后续请求就会被阻塞。
  - DNS 查询（DNS Lookup）：浏览器需要知道目标服务器的 IP 才能建立连接。将域名解析为 IP 的这个系统就是 DNS。这个通常可以利用DNS缓存结果来达到减少这个时间的目的。
  - 建立连接（Initial connection）：HTTP 是基于 TCP 协议的，浏览器最快也要在第三次握手时才能捎带 HTTP 请求报文，达到真正的建立连接，但是这些连接无法复用会导致每次请求都经历三次握手和慢启动。三次握手在高延迟的场景下影响较明显，慢启动则对文件类大请求影响较大。

#### http1.0和http1.1

HTTP1.0最早在网页中使用是在1996年，那个时候只是使用一些较为简单的网页上和网络请求上，而HTTP1.1则在1999年才开始广泛应用于现在的各大浏览器网络请求中，同时HTTP1.1也是当前使用最为广泛的HTTP协议。 主要区别主要体现在：

1. **缓存处理**，在HTTP1.0中主要使用header里的If-Modified-Since,Expires来做为缓存判断的标准，HTTP1.1则引入了更多的缓存控制策略例如Entity tag，If-Unmodified-Since, If-Match, If-None-Match等更多可供选择的缓存头来控制缓存策略。
2. **带宽优化及网络连接的使用**，HTTP1.0中，存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传功能，HTTP1.1则在请求头引入了range头域，它允许只请求资源的某个部分，即返回码是206（Partial Content），这样就方便了开发者自由的选择以便于充分利用带宽和连接。
3. **错误通知的管理**，在HTTP1.1中新增了24个错误状态响应码，如409（Conflict）表示请求的资源与资源的当前状态发生冲突；410（Gone）表示服务器上的某个资源被永久性的删除。
4. **Host头处理**，在HTTP1.0中认为每台服务器都绑定一个唯一的IP地址，因此，请求消息中的URL并没有传递主机名（hostname）。但随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机（Multi-homed Web Servers），并且它们共享一个IP地址。HTTP1.1的请求消息和响应消息都应支持Host头域，且请求消息中如果没有Host头域会报告一个错误（400 Bad Request）。
5. **长连接**，HTTP 1.1支持长连接（PersistentConnection）和请求的流水线（Pipelining）处理，在一个TCP连接上可以传送多个HTTP请求和响应，减少了建立和关闭连接的消耗和延迟，在HTTP1.1中默认开启Connection： keep-alive，一定程度上弥补了HTTP1.0每次请求都要创建连接的缺点。

#### http2.0的新特性

- **新的二进制格式**（Binary Format），HTTP1.x的解析是基于文本。基于文本协议的格式解析存在天然缺陷，文本的表现形式有多样性，要做到健壮性考虑的场景必然很多，二进制则不同，只认0和1的组合。基于这种考虑HTTP2.0的协议解析决定采用二进制格式，实现方便且健壮。
- **多路复用**（MultiPlexing），即连接共享，即每一个request都是是用作连接共享机制的。一个request对应一个id，这样一个连接上可以有多个request，每个连接的request可以随机的混杂在一起，接收方可以根据request的 id将request再归属到各自不同的服务端请求里面。
- **header压缩**，如上文中所言，对前面提到过HTTP1.x的header带有大量信息，而且每次都要重复发送，HTTP2.0使用encoder来减少需要传输的header大小，通讯双方各自cache一份header fields表，既避免了重复header的传输，又减小了需要传输的大小。
- **服务端推送**（server push），同SPDY一样，HTTP2.0也具有server push功能。

##### **HTTP2.0的多路复用和HTTP1.X中的长连接复用有什么区别？**

- HTTP/1.* 一次请求-响应，建立一个连接，用完关闭；每一个请求都要建立一个连接；
- HTTP/1.1 Pipeling解决方式为，若干个请求排队串行化单线程处理，后面的请求等待前面请求的返回才能获得执行机会，一旦有某请求超时等，后续请求只能被阻塞，毫无办法，也就是人们常说的线头阻塞；
- HTTP/2多个请求可同时在一个连接上并行执行。某个请求任务耗时严重，不会影响到其它连接的正常执行；
  具体如图：

![image-20191117125110634](https://gitee.com/artiely/Figure-bed/raw/master/images/20200310203850.png)

### https模块

我们知道，HTTP请求都是明文传输的，所谓的明文指的是没有经过加密的信息，如果HTTP请求被黑客拦截，并且里面含有银行卡密码等敏感数据的话，会非常危险。为了解决这个问题，Netscape 公司制定了HTTPS协议，HTTPS可以将数据加密传输，也就是传输的是密文，即便黑客在传输过程中拦截到数据也无法破译，这就保证了网络通信的安全。

#### 密码学基础

在正式讲解HTTPS协议之前，我们首先要知道一些密码学的知识。

**明文**： 明文指的是未被加密过的原始数据。

**密文**：明文被某种加密算法加密之后，会变成密文，从而确保原始数据的安全。密文也可以被解密，得到原始的明文。

**密钥**：密钥是一种参数，它是在明文转换为密文或将密文转换为明文的算法中输入的参数。密钥分为对称密钥与非对称密钥，分别应用在对称加密和非对称加密上。

**对称加密**：对称加密又叫做私钥加密，即信息的发送方和接收方使用同一个密钥去加密和解密数据。对称加密的特点是算法公开、加密和解密速度快，适合于对大数据量进行加密，常见的对称加密算法有DES、3DES、TDEA、Blowfish、RC5和IDEA。
 其加密过程如下：明文 + 加密算法 + 私钥 => 密文
 解密过程如下：密文 + 解密算法 + 私钥 => 明文
 对称加密中用到的密钥叫做私钥，私钥表示个人私有的密钥，即该密钥不能被泄露。
 其加密过程中的私钥与解密过程中用到的私钥是同一个密钥，这也是称加密之所以称之为“对称”的原因。由于对称加密的算法是公开的，所以一旦私钥被泄露，那么密文就很容易被破解，所以对称加密的缺点是密钥安全管理困难。

**非对称加密**：非对称加密也叫做公钥加密。非对称加密与对称加密相比，其安全性更好。对称加密的通信双方使用相同的密钥，如果一方的密钥遭泄露，那么整个通信就会被破解。而非对称加密使用一对密钥，即公钥和私钥，且二者成对出现。私钥被自己保存，不能对外泄露。公钥指的是公共的密钥，任何人都可以获得该密钥。用公钥或私钥中的任何一个进行加密，用另一个进行解密。

#### https通信过程

**HTTPS协议 = HTTP协议 + SSL/TLS协议**，在HTTPS数据传输的过程中，需要用SSL/TLS对数据进行加密和解密，需要用HTTP对加密后的数据进行传输，由此可以看出HTTPS是由HTTP和SSL/TLS一起合作完成的。

HTTPS为了兼顾安全与效率，同时使用了对称加密和非对称加密。数据是被对称加密传输的，对称加密过程需要客户端的一个密钥，为了确保能把该密钥安全传输到服务器端，采用非对称加密对该密钥进行加密传输，总的来说，对数据进行对称加密，对称加密所要使用的密钥通过非对称加密传输。

服务器端的公钥和私钥，用来进行非对称加密。

客户端生成的随机密钥，用来进行对称加密。

#### 数字证书

HTTP不会对通信的双方进行进行身份的验证所以身份有可能被伪装造成安全问题，所以为了解决这个问题所以产生了数字证书，数字证书的使用流程大概如下：

1、服务器首先向一个大家都信任的第三方机构申请一个身份证书。

2、客户端向服务器建立通信之前首先向服务器请求获得服务器的证书。

3、服务器收到请求后把数字证书发送给客户端。

4、客户端获得服务器的证书之后，然后与可信任的第三方机构证书进行验证，验证通过后则进行正常的内容通信。

#### 数字签名(解决数据篡改问题)

Http不会对数据的完整性进行验证，这样会造成就算通信的过程中数据被别人恶意篡改了

，通信的双方也没办法知道，所以就有了数字签名技术。

数字签名主要有两个作用，一是验证数据是否为意料中的对象所发出的，二是对数据的完整性进行验证，验证数据是否被篡改过：

和 webpack的hashmap有点类似

1、对需要发送的数据进行摘要

对数据进行摘要主要目的是确认数据的完整性，发送方首先根据约定的哈希算法把数据进行哈希，得到一个哈希值，因为两个数据有任何一点不相同都会得出不同的哈希值，所以把对数据内容进行哈希得到哈希值作为数据的摘要发给对方；

然后对方收到数据后，首先自己也按照约定的哈希算法把接收到的数据内容进行哈希得到一个哈希值，然后把自己的哈希值与发送过来的摘要信息进行比对，根据哈希值是否一致来确认数据的完整性。

2、对摘要信息进行签名

对摘要进行签名的目的主要是对确认数据发送人的身份，签名技术是使用非对称加密的原理，

非对称加密是使用一个密钥对（一个公钥，一个私钥），公钥加密只能由私钥解密，私钥加密只能由公钥解密； 公钥是公布出来的密钥，私钥由自己安全保管不外泄，所以在私钥不泄漏情况下，我们通过私钥其实就可以确认发送数据方的身份。

那么我们想要对A发送过来的数据进行身份验证，那么我们只需要用A的公钥对数据进行解密即可（如果可以解密，那么就说明该数据是A用自己的私钥进行加密过的，而A的私钥又只有A自己拥有）

#### 通信流程

##### **第一步：客户端向服务端发起请求**

（1）客户端生成随机数R1 发送给服务端；

（2）告诉服务端自己支持哪些加密算法；

##### **第二步：服务器向客户端发送数字证书**

（1）服务端生成随机数R2;

（2）从客户端支持的加密算法中选择一种双方都支持的加密算法（此算法用于后面的会话密钥生成）;

（3）服务端生成把证书、随机数R2、会话密钥生成算法，一同发给客户端;

##### **第三步：客户端验证数字证书。**

（1）验证证书的可靠性，先用CA的公钥解密被加密过后的证书,能解密则说明证书没有问题，然后通过证书里提供的摘要算法进行对数据进行摘要，然后通过自己生成的摘要与服务端发送的摘要比对。

（2）验证证书合法性，包括证书是否吊销、是否到期、域名是否匹配，通过后则进行后面的流程

（3）获得证书的公钥、会话密钥生成算法、随机数R2

（4）生成一个随机数R3。

（5）根据会话秘钥算法使用R1、R2、R3生成会话秘钥。

（6）用服务端证书的公钥加密随机数R3并发送给服务端。 此处就是  服务端和客户端进行数据传输的，对称密钥

##### **第四步：服务器得到会话密钥**

（1）服务器用私钥解密客户端发过来的随机数R3

（2）根据会话秘钥算法使用R1、R2、R3生成会话秘钥

##### **第五步：客户端与服务端进行加密会话**

（1）客户端发送加密数据给服务端

发送加密数据：客户端加密数据后发送给服务端。

（2）服务端响应客户端

解密接收数据：服务端用会话密钥解密客户端发送的数据；

加密响应数据：用会话密钥把响应的数据加密发送给客户端。

（3）客户端解密服务端响应的数据

解密数据：客户端用会话密钥解密响应数据；

![image-20191117160248871](https://gitee.com/artiely/Figure-bed/raw/master/images/20200310203851.png)