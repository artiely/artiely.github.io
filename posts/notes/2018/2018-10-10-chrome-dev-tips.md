---
title: chrome开发使用小技巧
tag:
  - chrome
author: Artiely
date: '2018-10-10'
cover: /2022-05-14-21-55-02.png
base64: dc4a3b
tinyCover: /cover/2022-05-14-21-55-02.png
coverWidth: 564
coverHeight: 953
coverPrimary: e4e6e2
coverSecondary: 1b191d

---

# 开发工具使用小技巧

## chrome开启跨域
跨域的解决办法有很多

这里先来个简单暴力一劳永逸的办法

1.找到chrome的安装目录chrome.exe新建快捷方式

2.重命名快捷方式`跨域.exe`右键属性 目标 加入参数`  --disable-web-security` 记得前面空格

3.快捷方式发送到桌面


> 关闭所有chrome然后启动`跨域.exe` 会提示 您使用的是不受支持的命令行标记disable-web-security 安全和稳定性有所下降

这样你就有了一个支持跨域的chrome

最新版本 需要新建一个文件用于储存用户信息 ,新建文件夹`MyChromeDevUserData`
`--disable-web-security --user-data-dir=C:\MyChromeDevUserData`

## chrome与安卓设备联调H5页面

搜索栏键入`chrome://inspect/#devices`

待续。