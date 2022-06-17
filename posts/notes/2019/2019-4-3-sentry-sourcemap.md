---
title: 记sentry配置sourcemap后的优化
tag:
  - vue
  - sentry
  - sourcemap
  - webpack
author: Artiely
date: 2019-4-3
cover: /2022-05-14-21-58-32.png
base64: c2175b
tinyCover: /cover/2022-05-14-21-58-32.png
coverWidth: 564
coverHeight: 1002
coverPrimary: 1a251a
coverSecondary: e5dae5

---

# 记sentry配置sourcemap后的优化
## 需求！

打包后的文件自动过滤出sourcemap并压缩成zip包

项目结构：


![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200321133110.png)


## 说明
首先说明一下为什么会有这样的需求
因为项目中集成了 `sentry` 关于sentry的介绍 [请点击我](https://sentry.io)，
如果你已经了解了 `sentry` 
那么你会知道在`sentry`中我们需要上传sourcemap来定位具体的源码行，但是在实际生产中我们是不能上传sourcemap的，这不仅仅是不安全的问题。
所有我们会在配置中打开sourcemap
```js
module.exports = {
// ...
  productionSourceMap: true,
// ...
}
```
打开后就会在构建后的文件中产生以`.map`为后缀的文件
![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200321133238.png)

我们可以结合`@sentry/webpack-plugin`插件来实现自动上传sourcemap到`sentry`。更多相关信息[请点击我](https://www.npmjs.com/package/@sentry/webpack-plugin)
上面的一切都很顺利，但是我要发布到生产环境不可能手动去剔除`.map`文件吧，于是我就想到用nodejs去处理这个问题，
## 思路一 node

 将文件拷贝一份，用递归遍历，拷贝的过程中去掉`.map文件`然后压缩文件
![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200321133310.png)

每次在`npm run build`完成后跑一下相关任务

## 思路二 webpack插件
然后我突然意识到可能不需要这么复杂，是否有对应的webpack插件就可以完成这个事情？
于是我找到了一个`copy-webpack-plugin`
![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200321133337.png)

更多信息 [请点击我](https://www.npmjs.com/package/copy-webpack-plugin)
看上去很美好一切需要的都有，but
实际是复制了一个空文件，然后我把dist改成其他文件就可以了。然后我发现是插件的执行顺序问题
然后我又去看了一遍webpack插件的执行钩子，并看到该插件issue[相关问题讨论](https://github.com/webpack-contrib/copy-webpack-plugin/issues/195)
虽然我发现vuecli3在复制asses下的文件到dist目录下也是使用的该插件，但是由于dist是在构建以后才生产的，而插件是在这之前就开始执行了，所以是空目录。
## 最终方案
当我放弃这些抱着试一试的态度去找webpck的zip插件时有了意外的发现。
这就是我的最终实现方式 非常的简单 `zip-webpack-plugin`
```js
        new ZipPlugin({
          path: path.join(__dirname, 'dist'),
          filename: 'dist.zip',
          exclude: [/\.map$/]
        }),
```
更多说明 [请点击我](https://www.npmjs.com/package/zip-webpack-plugin)

这是我的`@sentry/webpack-plugin`配置

![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200321133404.png)








