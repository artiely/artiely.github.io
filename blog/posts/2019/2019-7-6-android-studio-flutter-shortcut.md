---
title: android studio flutter 之快捷键
tag:
  - dart
  - flutter
  - android studio
author: Artiely
date: 2019-7-6
cover: /2022-05-14-22-03-53.png
base64: 135bd0
tinyCover: /cover/2022-05-14-22-03-53.png
coverWidth: 563
coverHeight: 797
coverPrimary: c6c6c7
coverSecondary: '393938'

---


# android studio flutter 之快捷键

## 创建新的StatelessWidget或者StatefulWidget

我们不必手动去编写继承StatelessWidget或者StatefulWidget并重写build()方法。IDE已经提供了相应的快捷键。

只需要输出`stless`就可以创建一个StatelessWidget。

![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200309113742)



或者输入`stful`创建一个StatefulWidget。

![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200309113749)

如果一开始我们创建了一个StatelessWidget，但是后来我们想把它改为一个StatefulWidget的话，我们会新建一个State类，并修改之前StatelessWidget的相关代码。

其实可以不必要这样做，我们只需要将光标StatelessWidget的地方，按住`Alt + Enter`(在mac中是option + Enter)，然后单击Convert to StatefulWidget，将自动为你创建所有的样板代码。

## 使用Alt + Enter可以做更多的事情

Alt + Enter(在mac中是option + Enter)是用于Flutter开发中经常要用到的的快捷键。可以单击任何一个widget，然后按Alt + Enter，就可以查看对该widget进行特定的操作。

### 给widget添加padding

只需要按下Alt + Enter，单击Add Padding就可以给widget的外面加上一层Padding，并且不会弄乱你之前的代码结构。

![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200309113831)

### 设置widget居中

只需要按下Alt + Enter，单击Center Widget就可以给widget的外面加上一层Center的小部件，使widget居中。

![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200309113849)

### 将widget放到Container中

只需要按下Alt + Enter，单击Wrap with Container就可以给widget的外面加上一层Container。

![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200309113909)

### 将多个widget放到Row,Column中

只需要按下Alt + Enter，单击Wrap with Column或者Row就可以一次性将多个widget放置到Row或者Column中。

![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200309113924)

### 将widget放到任意的小部件中

只需要按下Alt + Enter，单击Wrap with a new widget就可以将widget放到任意的小部件中。

![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200309113942)

### 移除widget

只需要按下Alt + Enter，单击Remove Widget就可以将当前的widget进行删除。

![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200309113954)

### 快速导入库

只需要按下Alt + Enter，选择你需要导入的库回车即可。

## 快速选择整个小部件

当我们需要提取或者删除整个小部件的时候，一般情况下，我们需要找到整个widget的相关代码的开始位置和结束位置，然后再进行操作。

![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200309114007)

但是如果整个widget的代码行数非常多，那么要自己找出相关的代码，那就会很麻烦。

所以在整个时候，我们需要快捷键`Ctrl + W`。可以无需移动光标，就可以帮我们选择出整个widget的相关代码。

![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200309114026)

## 格式化代码

大多数的IDE都具有格式化代码的功能。我们只需要按下`Ctrl+Alt+L`就可以格式化代码，并且修复缩进不对齐的问题。

![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200309114540)

## 使用Flutter Outline

如果只是通过看代码，来看widget之间的嵌套情况，可能需要不断滚动代码，并且也很难理解代码的结构。这个时候，我们需要使用到Flutter Outline。

Flutter Outline可以在IDE的最右侧找到，位于Flutter Inspector的正上方。打开Flutter Outline，显示的情况是这样的：

![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200309114031)

现在，我们可以清楚地看到所有的小部件，在UI中的排列情况，也可以看出小部件的嵌套情况。

### 将相关的代码提取成一个方法

Flutter Outline是一个非常有用的工具。Alt + Enter快捷键可以做的事情，大部分也可以在
Flutter Outline上进行操作，不过还是Alt + Enter能够实现的功能，还是尽量用Alt + Enter就行，比较快。

但是Flutter Outline还有更多的功能，比如Extract Method。当我们编写来一个Widget，并且代码行数比较长，那可以考虑将这个widget相关的代码，提取到一个方法中。这个操作可以利用Extract Method来快速完成，不需要你手动将代码转移到一个方法中

![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200309114035)



### 上下移动小部件

如果在一个widget中有多个孩子widget，那么我们可以使用Flutter Outline，来重新排序这些孩子widget的顺序。

![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200309114039)

## 重命名

重命名方法，重命名widget，重命名类或者文件名，只需要使用`Shift + F6 `就可以输入新名称了。

![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200309114044)

## 删除未使用的import

如果我们正在开发一个项目，并导入了大量文件，但是到最后，有些文件其实是没有被使用到的，所以我们是不需要这些多余的导入的。直接使用`Ctrl+Alt+O`，就可以代替手动删除了所有未使用的import。

![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200309114048)

## 打开flutter inspector

![1561869493083](https://gitee.com/artiely/Figure-bed/raw/master/images/20200309114051.png)
如果你的像我一样不可点击先去设置打开
![1561869753208](https://gitee.com/artiely/Figure-bed/raw/master/images/20200309114056.png)



然后点击八倍镜，就可以定位widget进行调试，然后很多的ui调试工具

![1561869991046](https://gitee.com/artiely/Figure-bed/raw/master/images/20200309114103.png)

