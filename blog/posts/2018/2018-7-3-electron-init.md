---
title: Electron了解与开始
tag:
  - electron
  - nodejs
author: Artiely
date: 2018-7-3
cover: /2022-05-14-21-47-41.png
base64: 2d3135
tinyCover: /cover/2022-05-14-21-47-41.png
coverWidth: 736
coverHeight: 1145
coverPrimary: 344f55
coverSecondary: cbb0aa

---

# Electron了解与开始
## 为什么要学 Electron。

Electron 是一个跨平台的桌面应用开发框架，用 html css js 的技术开发桌面上面可以安装的 软件。“Electron 又为前端开发者谋得了一份好的差事”。想起在网路里流传很广的一句话“不要和老夫说什么 C++，Java，老夫行走江湖就靠一把 JS，遇到需求撸起袖子就是干”。是的 Electron 看上去是在蚕食桌面客户端领域的市场份额。 

**说起桌面应用**,想必大家使用过的就已经海了去了。什么暴风影音、QQ、skype 之类的,早已不是新鲜事!不过大家有没有了解过如何编写一个桌面应用?历史上,我们都有哪些方式去编写桌面应用呢?
实际上,桌面应用的历史并不算久远,不去查找各种资料,仅凭记忆,我能想到的曾经出现过的 桌面应用编写语言就有:C++、Delphi、VB、winForm、WPF、swing、awt、QT、flash、Objective-C、Swift...或许还有更多。

**学习成本是不是有点高?这么多语言/技术!!如果你恰好还碰到了一个吹毛求疵的老板或者PM**,他就是那么迫切的希望自己的 app 能够多平台发布(也不管在那些平台上是否有客户),作为程序员的你,肿么办?是勇挑大梁,然后各技术栈学习失败,最终自尽以谢老板?还是果断离 开? 当然都不是,够懒的程序员应该寻找更容易实现,又能满足老板需求的解决方案。那么,我们来看看今天的话题,electron 吧! 

**截止2018-7-3**： electron Github 的 star 已经达到 61957，那么他的用户量可能已经上 100万了。还有大家知道的 github 的 atom 编辑器、微软的 vscode 编辑器，包括阿里内部的一些软件也是用 electron 开发的。既然这么热，那就一个字：学。



## 基于Nodejs的主流桌面应用开发框架NW.js和Electron介绍。

NW.js 和 Electron 都可以用前端的知识来开发桌面应用。NW.js 和 Electron 起初是同一 
个作者开发。后来种种原因分为两个产品。一个命名为 NW.js（英特尔公司提供技术支持）、
另一命名为 Electron（Github 公司提供技术支持）。
NW.js 和Electron 可以用 Nodejs 中几乎所有的模块。NW.js 和 Electron 不仅可以把 html 
写的 web 页面打包成跨平台可以安装到电脑上面的软件，也可以通过 javascript 访问操作 
系统原生的 UI 和 Api（控制窗口、添加菜单项目、托盘应用菜单、读写文件、访问剪贴板）。



## 安装 electron
```shell
npm install -g electron
```
## 克隆一个仓库、快速启动一个项目 
```shell
# 克隆示例项目的仓库 
git clone https://github.com/electron/electron-quick-start 
# 进入这个仓库 
cd electron-quick-start 
# 安装依赖并运行 
npm install && npm start
```
## electron-forge 搭建一个 electron 项目

electron-forge 相当于 electron 的一个脚手架，可以让我们更方便的创建、运行、打包 electron 项目。
```shell
npm install -g electron-forge 
electron-forge init my-new-app 
cd my-new-app 
npm start
```
