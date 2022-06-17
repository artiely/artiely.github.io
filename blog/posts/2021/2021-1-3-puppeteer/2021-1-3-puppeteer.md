---
title: 从使用场景了解puppeteer
tag:
  - puppeteer
cover: /2022-05-11-10-06-26.png
base64: 00cab4
author: artiely
date: 2021-1-3
tinyCover: /cover/2022-05-11-10-06-26.png
coverWidth: 534
coverHeight: 800
coverPrimary: 876f5b
coverSecondary: 7890a4

---



英 [ˌpʌpɪˈtɪər]  
美 [ˌpʌpɪˈtɪr]

n. 操纵木偶的人；操纵傀儡
vt. 操纵

- 浏览器自动化库
- Puppeteer = Node.js + Chrome
- 评估 Javascript

## 官网

[Puppeteer](https://github.com/puppeteer/puppeteer)

## 安装

只需安装 NPM 包即可开始

```js
npm i puppeteer
```

然后

```js
const puppetter = require('puppeteer');
(async() => {
  // ....
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
})()
```

## 从一些场景中了解 Puppeteer 的应用

1. 某购物网站某商品的价格变化趋势或某新闻网站的新闻

```js {7,8}
const puppetter = require('puppeteer');
(async() => {
  // ....
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  // 获取价格
  await page.goto('https://...')
  const price = await page.$sevel('.price', div => div.textContent)
  console.log(price)
  await browser.close()
})()
```

2. 处理异步和对网站进行测试 可以结合任何测试库

```js {5,6}
it('should pay', () => {
  const page = await browser.newPage()
  await page.goto('https://...')
  // 异步处理 waithForX ...
  await page.waitForSelect('.button')
  const response = page.waitForResponse(res => res.url().endsWith('/pay'))
  await page.click('.button')
  await response
  assert(await page.$evel('.success'))
})
```

3. 测试在移动设备的表现

```js {3}
it('should work on mobile', () => {
  const page = await browser.newPage()
  await page.emulate(puppeteer.devices['iPhone 8'])
  // ...
})
```

4. 网站的离线表现

```js {5}
it('should notify user when goes offline', () => {
  const page = await browser.newPage()
  await page.emulate(puppeteer.devices['iPhone 8'])
  await page.goto('https://...')
  await page.setOfflineMode(true)
  const alert = await page.waitForSelece('.offline-alert')
  expect(alert).toBeTruthy()
})
```

5. 检测注册的 servce worker

```js{5,6,7,8,9,10,11}
it('should register service worker',()=>{
  const page = await browser.newPage();
  await page.emulate(puppeteer.devices['iPhone 8'])
  await page.goto("https://...");
  const swTarget = await page.waitForTarget(target=>{
    return target.type()==='ervice_worker'
  })
  const sw = await swTarget.worker()
  const isCatch  = await sw.evalute(async()=>{
    return !!(await caches.match('https://artiely.gitee.io/x.png'))
  })
  expect(isCatch).toBe(true)
})
```

进阶

```js
await page.goto('https://...')
await page.evaluate('navigator.serviceWorker.ready');

const requests = new Map();
page.on('request',req=>{
  return requests.set(req.url(),req);
})

await page.reload({waitUntil:'networkkid0'});

for(const [url,req] of requests){
  const swResp = req.response().fromServiceWorker();
  const.log(url,swResp?'√'：'×')
}
```

6. 模拟位置

```js {4,5,6,7}
it('should $ in US', () => {
  const page = await browser.newPage()
  await page.emulate(puppeteer.devices['iPhone 8'])
  await page.setGeolocation({
    latitude: 140.00,
    longitude: 30.00,
  })
  await page.goto('https://...')
  // ...
})
```

7. 拦截并修改。。。

```js
await page serRequestInterception(true)
page.on('request',request => {
  // 修改图片
  if(request.resourceType()=== 'image')
    request.respond({body: randomCatImage()})
  else
    request.continue()
  // 取消请求
  if(request.url() === 'https://x/pay')
    request.abort()
  else
    request.contiune()
})
```

8. 模拟输入和事件

```js
await page.goto('https://pptr.dev/')
const input = await page.waitForSelect('[type=search]')
await input.type('javascript')
await page.keyboard.press('Enter')
```

9. 页面性能指标

```js
const metrics = await page.metrics()
console.log(metrics)
```

```js
await page.tracing.start({path:'./trace.json'});
await page.goto('https://pptr.dev');
await page.waitForSelect('select');
// ...
await page..tracing.stop()
```

10. 服务端渲染

```html
<div id="container"></div>
<script>
  function render(posts, container) {
    const html = posts.reduce((html, post) => {
      return `${html}
        <li>
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        </li>
        `;
    }, "");
    container.innerHTML = `<ul>${html}<ul>`;
  }
  fetch("/post")
    .then((res) => res.json())
    .then((res) => rednder(res, document.getElementById("container")));
</script>
```

ssr.js

```js
import puppeteer from 'puppeteer'
export async function ssr(url) {
  const browser = await puppeteer.lanuch({ headless: true })
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle0' })
  const html = await page.content()
  await browser.close()
  return html
}
```

server.js

```js{5,6,7}
import express from "express";
import { ssr } from "./ssr.js";
const app = express();
app.get("/", async (req, res, next) => {
  const origin = `${req.protocol}://${req.get("host")}`;
  const html = await ssr(`${origin}/index.html`);
  return res.status(200).send(html);
});
app.listen(8080, () => {
  console.log("server start");
});
```

- 优化更快的直达
  ssr.js

```js{6,8}
import puppeteer from "puppeteer";
export async function ssr(url) {
  const browser = await puppeteer.lanuch({ headless: true });
  const page = await browser.newPage();
  // await page.goto(url, { waitUntil: "networkidle0" });
  await page.goto(url, { waitUntil: "documentloaded" });
  // const html = await page.content();
  await page.waitForSelector("#post");
  await browser.close();
  return html;
}
```

- 优化 2 添加缓存
  ssr.js

```js
const RENDER_CACHE = new Map()
async function ssr(url) {
  if (RENDER_CACHE.has(url)) return RENDER_CACHE.get(url)
  // ...
  RENDER_CACHE.set(url, html)
  return html
}
```

添加缓存
index.html

```html
<div id="container"></div>
<script>
  function render(posts, container) {
    const html = posts.reduce((html, post) => {
      return `${html}
        <li>
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        </li>
        `;
    }, "");
    container.innerHTML = `<ul id="post">${html}<ul>`;
  }
  const container = document.querySelector("#container");
  const PRE_RENDER = document.querySelector("#post");
  if (!PRE_RENDER) {
    fetch("/post")
      .then((res) => res.json())
      .then((res) => rednder(res, container));
  }
</script>
```

继续优化-取消不必要的网络请求
ssr.js

```js
async function ssr(url) {
  // ...
  await page.setRequestInterception(true)
  page.on('request', (req) => {
    const whitlist = ['document', 'script', 'xhr', 'fetch']
    if (!whitelist.includes(req.resourceType()))
      return req.abort()

    req.continue()
  })
}
```

- 思考-扩展骨架屏

11. 测试代码覆盖率

```js
const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  // 开始收集JS和CSS文件的覆盖率信息
  await Promise.all([page.coverage.startJSCoverage(), page.coverage.startCSSCoverage()])

  await page.goto('https://www.baidu.com')
  await page.waitForSelector('title')

  // 停止收集覆盖率信息
  const [jsCoverage, cssCoverage] = await Promise.all([
    page.coverage.stopJSCoverage(),
    page.coverage.stopCSSCoverage(),
  ])

  // 根据覆盖率计算使用了多少字节
  const calculateUsedBytes = (type, coverage) =>
    coverage.map(({ url, ranges, text }) => {
      let usedBytes = 0

      ranges.forEach(range => (usedBytes += range.end - range.start - 1))

      return {
        url,
        type,
        usedBytes,
        totalBytes: text.length,
      }
    })

  console.info([
    ...calculateUsedBytes('js', jsCoverage),
    ...calculateUsedBytes('css', cssCoverage),
  ])

  await browser.close()
})()
```

12. 代码注入
13. 自动化测试扩展程序
14. AB测试
15. 人机验证

[https://filipvitas.medium.com/how-to-bypass-slider-captcha-with-js-and-puppeteer-cd5e28105e3c](https://filipvitas.medium.com/how-to-bypass-slider-captcha-with-js-and-puppeteer-cd5e28105e3c)

[https://juejin.cn/post/6844903566289682440](https://juejin.cn/post/6844903566289682440)

[https://juejin.cn/post/6844903860788527118](https://juejin.cn/post/6844903860788527118)

[https://jsoverson.medium.com/bypassing-captchas-with-headless-chrome-93f294518337](https://jsoverson.medium.com/bypassing-captchas-with-headless-chrome-93f294518337)

```js
const CRX = '/path/to/extension/'

const browser = await puppeteer.launch({
  headless: false,
  args: [`--disable-extensions-except=${CRX}`, `--load-extension=${CRX}`],
})
```

[有哪些启动参数](https://peter.sh/experiments/chromium-command-line-switches/)

16. 爬虫
[https://github.com/artiely/koa2-vue/tree/master/server/crawler](https://github.com/artiely/koa2-vue/tree/master/server/crawler)

## 可用于在线演示的网站

[https://try-puppeteer.appspot.com/](https://try-puppeteer.appspot.com/)

## 总结

- 网页截图或者生成 PDF
- 爬取 SPA 或 SSR 网站
- UI 自动化测试，模拟表单提交，键盘输入，点击等行为
- 捕获网站的时间线，帮助诊断性能问题
- 创建一个最新的自动化测试环境，使用最新的 js 和最新的 Chrome 浏览器运行测试用例
- 测试 Chrome 扩展程序
  ...

# 参考示例

[https://github.com/artiely/puppeteer-demo](https://github.com/artiely/puppeteer-demo)

[https://github.com/puppeteer/examples](https://github.com/puppeteer/examples)

## 入门资料

[https://www.qikegu.com/docs/4531](https://www.qikegu.com/docs/4531)

[https://juejin.cn/post/6844903605485453320](https://juejin.cn/post/6844903605485453320)

## 其他

[https://github.com/stereobooster/react-snap](https://github.com/stereobooster/react-snap)

[https://github.com/g-plane/rize](https://github.com/g-plane/rize)

[https://github.com/richshaw2015/wxapp-appium](https://github.com/richshaw2015/wxapp-appium)
