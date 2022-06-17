---
title: Egg.js 入门
tag:
  - eggjs
  - nodejs
author: Artiely
date: 2018-8-7
cover: /2022-05-14-21-52-48.png
base64: 1a1a1a
tinyCover: /cover/2022-05-14-21-52-48.png
coverWidth: 720
coverHeight: 1280
coverPrimary: 6a4c5e
coverSecondary: 95b3a1

---

# Egg.js 入门

## Egg.js 官网
官 网：https://eggjs.org
中文网站：https://eggjs.org/zh-cn/
## Egg.js 是什么?
Egg.js 是《阿里旗下产品》基于 Node.js 和 Koa 是一个 Nodejs 的企业级应用开发框架。
可以帮助发团队和开发人员降低开发和维护成本。
Express 和 Koa 是 Node.js 社区广泛使用的框架，简单且扩展性强，非常适合做个人项
目。但框架本身缺少约定，标准的 MVC 模型会有各种千奇百怪的写法。Egg 按照约定进行
开发，奉行『约定优于配置』，团队协作成本低。
Egg.js 基于 Es6、Es7 以及 Typescript、Koa2 使得 Nodejs 具有更规范的开发模式、更低
的学习成本、更优雅的代码、更少的开发成本、更少的维护成本。为企业级框架而生。
## Egg.js 的特性：
1、提供基于 Egg 定制上层框架的能力
2、高度可扩展的插件机制
3、内置多进程管理
4、基于 Koa 开发，性能优异
5、框架稳定，测试覆盖率高
6、渐进式开发
## Egg.js 的历史？
2013 年蚂蚁的 chair 框架，可以视为 egg 的前身。
2015 年 11 月，在苏千的召集下，阿里各 BU 的前端骨干齐聚黄龙，闭门共建。
2016 年初，各 BU 的基础 web 框架完成升级，在同一套规范的基础上进行差异化定
制。
2016 年中，广泛使用在绝大部分阿里的前端 Node.js 应用。
2016 年 09 月，在 JSConf China 2016 上亮相并宣布开源。
2017 年初，官网文档 egg - 为企业级框架和应用而生 亮相，并将在本月发布 egg@1.0
版本。
2017 年 12 月左右 Egg 社区版 2.0 正式发布，性能提升 30%，基于 koa2 拥抱 Async
2018 年 7 月最新 egg 的版本是 2.2.1
经过几年的沉淀 Egg 已经非常成熟,下面让我们一起开启 Egg 的学习之旅。
## 学习 Egg 前的必备基础。
1、html、 css、 js、 es6 基础
2、必备 Nodejs 基础、Koa 基础
## Egg 快速入门、搭建环境、创建项目
环境准备
操作系统：支持 macOS，Linux，Windows
运行环境：Nodejs 建议选择 LTS 版本，Nodejs 最低要求 8.x。 安装 egg 脚手架以及使用 egg-init 
### 创建项目
我们推荐直接使用脚手架，只需几条简单指令，即可快速生成项目:
```shell
$ npm i egg-init -g
$ egg-init egg-example --type=simple
$ cd egg-example
$ npm i
```
### 启动项目:
```shell
$ npm run dev
$ open localhost:7001
```

## 目录结构
在快速入门中，大家对框架应该有了初步的印象，接下来我们简单了解下目录约定规范。
```shell
egg-project
├── package.json
├── app.js (可选)
├── agent.js (可选)
├── app
|   ├── router.js
│   ├── controller
│   |   └── home.js
│   ├── service (可选)
│   |   └── user.js
│   ├── middleware (可选)
│   |   └── response_time.js
│   ├── schedule (可选)
│   |   └── my_task.js
│   ├── public (可选)
│   |   └── reset.css
│   ├── view (可选)
│   |   └── home.tpl
│   └── extend (可选)
│       ├── helper.js (可选)
│       ├── request.js (可选)
│       ├── response.js (可选)
│       ├── context.js (可选)
│       ├── application.js (可选)
│       └── agent.js (可选)
├── config
|   ├── plugin.js
|   ├── config.default.js
│   ├── config.prod.js
|   ├── config.test.js (可选)
|   ├── config.local.js (可选)
|   └── config.unittest.js (可选)
└── test
    ├── middleware
    |   └── response_time.test.js
    └── controller
        └── home.test.js
```
如上，由框架约定的目录：

- app/router.js 用于配置 URL 路由规则，具体参见 Router。
- app/controller/** 用于解析用户的输入，处理后返回相应的结果，具体参见 Controller。
- app/service/** 用于编写业务逻辑层，可选，建议使用，具体参见 Service。
- app/middleware/** 用于编写中间件，可选，具体参见 Middleware。
- app/public/** 用于放置静态资源，可选，具体参见内置插件 egg-static。
- app/extend/** 用于框架的扩展，可选，具体参见框架扩展。
- config/config.{env}.js 用于编写配置文件，具体参见配置。
- config/plugin.js 用于配置需要加载的插件，具体参见插件。
- test/** 用于单元测试，具体参见单元测试。
- app.js 和 agent.js 用于自定义启动时的初始化工作，可选，具体参见启动自定义。关于agent.js的作用参见Agent机制。
### 由内置插件约定的目录：

- app/public/** 用于放置静态资源，可选，具体参见内置插件 egg-static。
- app/schedule/** 用于定时任务，可选，具体参见定时任务。

