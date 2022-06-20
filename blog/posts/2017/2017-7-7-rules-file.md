---
title: 文件命名规范
tag:
  - file
  - folder
author: Artiely
date: 2017-7-7
cover: /2022-05-14-21-25-53.png
base64: 222d30
tinyCover: /cover/2022-05-14-21-25-53.png
coverWidth: 415
coverHeight: 679
coverPrimary: '845843'
coverSecondary: 7ba7bc

---

# 文件命名规范

下面列出了一些常用的名称，并不是按出现频次排序，但是列出来的都是出现频次非常高的单复数形式都出现了的只列出次数最多的注意，都是目录名称，不是文件名

* src，source
  源代码，用 src 居多

* test，`__tests__`
  测试文件，也经常用`__test__`，facebook 的测试框架 jest 默认的测试文件目录就是`__test__`

* docs
  文档

* lib
  库文件，library 的缩写

* dist
  用来放打包编译后的文件，应该是 distribution 的缩写

* build，scripts
  构建脚本

* utils，tools，helpers
  工具代码

* controllers，views，middlewares，models
  MVC 对应的 models，views，controllers，还有中间件 middlewares

* router
  路由

* server
  用来放服务端代码

* adapters
  适配器，适配器模式是一种很常用的设计模式栗子：github.com/hubotio/hub…

* legacy
  一般用来放兼容历史版本或兼容旧浏览器的代码

* config
  配置文件

* benchmarks
  benchmarks 测试，又叫基准测试或性能测试。用来测试版本的性能变化

* unit，spec
  单元测试，一般在 test 目录下

* e2e
  端对端测试，一般在 test 目录下

* assets，vendor
  资源，一般用来放图片或 css 文件

* static
  静态资源

* examples，demo
  示例

* component
  组件

* view,pages
  视图，页面

* plugins
  插件

* bin
  命令脚本，命令行工具经常会用到

* common
  公用的文件

* packages
  很多项目会打包出多个 npm 包，用来减小体积，一般会用 packages 来放不同的包

* misc
  杂项，miscellaneous 的缩写

* core
  核心文件
