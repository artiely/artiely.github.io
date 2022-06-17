---
title: Dart,flutter相关环境
tag:
  - dart
  - flutter
author: Artiely
date: 2019-7-6
cover: /2022-05-14-22-04-15.png
base64: '0271e2'
tinyCover: /cover/2022-05-14-22-04-15.png
coverWidth: 563
coverHeight: 797
coverPrimary: '372720'
coverSecondary: c8d8df

---


# Dart介绍：

>Dart是由谷歌开发的计算机编程语言,它可以被用于web、服务器、移动应用 和物联网等领域的开发。Dart诞生于2011年，号称要取代JavaScript。但是过去的几年中一直不温不火。直到Flutter的出现现在被人们重新重视。要学Flutter的话我们必须首先得会Dart。官网：https://dart.dev/


## Dart环境搭建：

要在我们本地开发Dart程序的话首先需要安装Dart Sdk
官方文档：https://dart.dev/get-dart

windows(推荐):
 http://www.gekorm.com/dart-windows/

mac：
如果mac电脑没有安装brew这个工具首先第一步需要安装它：  https://brew.sh/
```shell
brew tap dart-lang/dart
brew install dart
```

Dart 开发工具：
Dart的开发工具有很多： IntelliJ IDEA  、 WebStorm、 Atom、Vscode等
这里我们主要给大家讲解的是如果在Vscode中配置Dart。
1、找到vscode插件安装dart
2、找到vscode插件安装code runner     Code Runner  可以运行我们的文件



# flutter

下载sdk

```shell
 git clone -b stable https://github.com/flutter/flutter.git

```

安装到你想安装的目录，如：`C:\flutter`

注意，不要将flutter安装到需要一些高权限的路径如`C:\Program Files\`等。

**3.在Flutter安装目录的flutter文件下找到**flutter_console.bat**，双击运行并启动flutter命令行；**

接下来，你就可以在Flutter命令行运行flutter命令了。

**设置环境变量**

要在终端运行 flutter 命令， 你需要添加以下环境变量到系统PATH：

- 在Windows的Start 的搜索条中搜索env，选择编辑帐户的环境变量；
- 在“用户变量”下检查是否有名为“Path”的条目:

- - 如果该条目存在, 追加 flutter\bin的全路径，使用 ; 作为分隔符.
  - 如果条目不存在, 创建一个新用户变量 Path ，然后将 flutter\bin的全路径作为它的值.

在“用户变量”下检查是否有名为”PUB_HOSTED_URL”和”FLUTTER_STORAGE_BASE_URL”的条目，如果没有，也添加它们。

- 重启Windows以应用此更改；

![img](https://gitee.com/artiely/Figure-bed/raw/master/images/20200309114238.png)

## FlutterAndroid 真机调试

### 必备条件

1、准备一台 Android 手机 
2、手机需要开启调试模式 
3、用数据线把手机连上电脑 
4、手机要允许电脑进行 Usb 调试 
5、手机对应的 sdk 版本必须安装

### 注意

1、关闭电脑上面的手机助手比如：360 手机助手、应用宝等占用 adb 端口的软件 
2、关闭 HBuilder 之类占用 Adb 端口的软件 
3、数据线一定要可用（可以用 360 手机助手检测）

## Flutter 虚拟机模拟器调试

### 必备条件

1、准备虚拟机模拟器，虚拟机模拟器可以是 AndroidStudio 自带的模拟器，也可以是 第三方模拟器。我们推荐使用第三方模拟器。因为第三方模拟器好安装，并且运行速度快 
2、模拟器安装好后需要打开 
3、推荐使用夜神模拟器：https://www.yeshen.com/

###  注意 

4、关闭电脑上面的手机助手比如：360 手机助手、应用宝等占用 adb 端口的软件 
5、关闭 HBuilder 之类占用 Adb 端口的软件

## Vscode 中开发运行 Flutter 应用

如果你习惯用 AndroidStudio 的话可以直接用 AndroidStudio 直接开发 Flutter。但是 Android Studio 比较耗费电脑资源，所以这里我们推荐使用 Vscode
1、Vscode 中安装 Flutter 插件 Dart 插件。
2、Vscode 中打开 flutter 项目进行开发
3、运行 Flutter 项目

```shell
flutter run
```

r 键：点击后热加载，也就算是重新加载吧。 
p 键：显示网格，这个可以很好的掌握布局情况，工作中很有用。 
o 键：切换 android 和 ios 的预览模式。 
q 键：退出调试预览模式。

## Vscode 默认连不上第三方模拟器解决方案

cd 到对应夜神模拟器 D:\ProgramFiles\Nox\bin 目录 然后运行

```shell
nox_adb.exe connect 127.0.0.1:62001
```

若出现如下情况，按照提示操作即可
![1562385722572](https://gitee.com/artiely/Figure-bed/raw/master/images/20200309114231.png)