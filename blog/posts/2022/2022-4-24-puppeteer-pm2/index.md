---
tag:
  - puppeteteer
  - pm2
cover: /2022-05-10-18-14-26.png
tinyCover: /cover/2022-05-10-18-14-26.png
coverWidth: 564
coverHeight: 841

---

# puppeteer & pm2

## 问题1在linux下chrome启动失败

官方类似的 issues 非常多，大多数解决方法都复杂且不奏效
对于我最有效的方式是

``` shell
sudo apt install chromium-browser chromium-codecs-ffmpeg

npm i puppeteer-core

```

``` js
- const  puppeteer = require('puppeteer');
+ const puppeteer = require('puppeteer-core');
  const browser = await puppeteer.launch({
      headless: true,
      slowMo: 250,
      devtools: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox','--use-gl=egl'],
      executablePath: '/usr/bin/chromium-browser'
    });
```

## pm2 执行package.json中的script

```json
 "scripts": {
    "build": "rm -rf build && pkg index.js --out-path build",
    "postbuild": "cp -R ./node_modules/puppeteer/.local-chromium build/chromium"
  }
```

``` shell
pm2 start npm --name "puppeteer-pm2" -- run build
```

注意`-- run build` ，这里的build是package.json中的script的build;pm2的参数应该在-- run 前面

示例脚本

```shell
#!/usr/bin/env sh

# abort on errors
set -e

cd front

pnpm i &&  yarn build

cd -

cd back


yarn && pm2 start index.js --name "backend-3003-9001" --max-memory-restart "1G"

cd -
```

```bash
pm2 kill 杀死所有进程
pm2 delete <id> 删除指定进程
pm2 logs 查看进程日志
pm2 flush 删除所有日志
pm2 install pm2-logrotate   // 注意是pm2 install而不是npm install

pm2 set pm2-logrotate-ext:retain 7   //保存7个文件
pm2 set pm2-logrotate-ext:max_size 100M  //每个备份文件大小为100M

```

[pm2-logrotate](https://www.npmjs.com/package/pm2-logrotate)
