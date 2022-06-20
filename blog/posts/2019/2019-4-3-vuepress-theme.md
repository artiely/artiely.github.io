---
title: 如何创建自定义 VuePress 主题
tag:
  - vue
  - vuepress
author: Artiely
date: 2019-4-3
cover: /2022-05-14-21-58-55.png
base64: c2175b
tinyCover: /cover/2022-05-14-21-58-55.png
coverWidth: 675
coverHeight: 1200
coverPrimary: 2a2e28
coverSecondary: d5d1d7

---


# 如何创建自定义 VuePress 主题
![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200314182957.png)

如果您已经听说过 VuePress，那么可能会知道它是一个功能极小的静态站点生成器。VuePress 使创建文本繁多的文档网站变得简单，比 Nuxt.js 容易得多。

但是，您是否知道 VuePress 有一个基于 Vue 构建的自定义主题系统，可以让您使用自定义功能构建自己的全功能主题？

在本文中，我们将介绍如何开始创建自己的自定义主题，遵循一些最佳实践，以及如何集成第三方 UI 库以快速创建布局。

例如，让我们来看看VuePress 文档网站。它使用默认主题。默认主题开箱即用，具有许多自定义功能，如内置搜索，可自定义导航和侧边栏，甚至是自动生成的 GitHub 链接和页面编辑链接，并用 github 托管这些页面。

在创建自定义主题有着和使用 vue 一样的开发体验。

当前版本 1.0.0-alpha.44 还不是稳定版本，可能略有变动。

## 设置 VuePress 项目
首先，确保在系统上安装了 VuePress。
```shell
npm install -g vuepress
```
## 构建内容
VuePress 的魅力在于它允许您根据自己的喜好构建内容。项目中的每个 markdown 文件都将编译为静态 HTML 文件。 例如，您的项目可能结构如下：
```shell
vuepress-theme-koala
ㄴguide
  ㄴREADME.md
  ㄴgetting-started.md
  ㄴconfig.md
ㄴ.vuepress
  ㄴconfig.js
```
因此，一旦您的项目有内容，您如何开始创建自定义主题以显示该内容？

## 创建自定义 VuePress 主题
在上面的文件夹结构示例中，您可能已经注意到名为的文件夹 .vuepress。此文件夹是您的配置和所有特定于 VuePress 的文件的位置。它也是您的自定义主题文件的位置。

要创建自定义主题，请在 VuePress 项目中的 theme 目录内创建一个目录 .vuepress，然后创建一个Layout.vue文件。
```shell
theme
├── global-components
│   └── xxx.vue
├── components
│   └── xxx.vue
├── layouts
│   ├── Layout.vue (必要的)
│   └── 404.vue
├── styles
│   ├── index.styl
│   └── palette.styl
├── templates
│   ├── dev.html
│   └── ssr.html
├── index.js
├── enhanceApp.js
└── package.json
```
- theme/global-components: 该目录下的组件都会被自动注册为全局组件。想了解更多，请参考 @vuepress/plugin-register-components。
- theme/components: Vue 组件。
- theme/layouts: 布局组件，其中 Layout.vue 是必需的。
- theme/styles: 全局的样式和调色板。
- theme/templates: 修改默认的模板文件。
- theme/index.js: 主题文件的入口文件。
- theme/enhanceApp.js: 主题水平的客户端增强文件。

## 在主题中呈现您网站的内容。

最简单的主题可以只是一个 Layout.vue 具有以下标记的组件：
```html
<div class="theme-container">
    <Content/>
</div>
```
.md 正在呈现的当前文件的已编译内容 将作为特殊`<Content/>`全局组件提供。

另一种思考 Layout.vue 文件的方式是作为主题的起点，因为实际上，完全充实的主题需要的不仅仅是单个文件。

## 将第三方 UI 集成到主题中
cd 到 theme 文件下安装 ui 库 如 ant-design-vue

npm i ant-design-vue
在 theme/enhanceApp.js中注册 ui 组件(当然最好是按需加载)
```js
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Layout from 'ant-design-vue/lib/layout'
import Tag from 'ant-design-vue/lib/tag'
import 'ant-design-vue/lib/layout/style/index.css'
import 'ant-design-vue/lib/tag/style/index.css'
export default ({ Vue, isServer }) => {
  Vue.use(Layout) Vue.use(Tag)
}
```
布局就随意发挥了咯 假设我们有个主页 Home.vue 还有个详情页 Detail.vue

Home.vue
```html
<a-layout>
  <a-layout-content>
  {{$site.pages}}
  </a-layout-content>
</a-layout>
```
Detail.veu
```html
<a-layout>
  <a-layout-sider>Sider</a-layout-sider>
  <a-layout-content>
    <Content/>
  </a-layout-content>
</a-layout>
```
Layou.vue
```html {15}
<template>
  <div>
    <header>{{ $site.themeConfig.nav }}</header>
    <componen :is="layout" class="main-content" />
  </div>
</template>

<script>
import Home from './Home'
import Detail from './Detail'

export default {
  computed: {
    layout() {
      const { path } = this.$page
      if (path === '/')
        return Home

      else
        return Detail

    },
  },
}
</script>
```
请注意高亮部分，即为对应的原始数据，有了数据可以自己随意组织界面

## 结论
最终，创建 VuePress 主题可以提供与创建 Vue.js 应用程序一样多的灵活性。您可以自由地以最适合您的方式布置您的主题。

在这篇文章中，我们介绍了一些最佳实践，可以在主题组件中使用的数据，以及如何与 UI 库集成以创建布局。

## 番外篇
本人也写了一个主题 `vuepress-theme-koala`

## 安装
```shell
npm i vuepress-theme-koala
```
## 使用
.vuepress/congig.js
```js
module.exports = {
  theme: 'vuepress-theme-koala',
}
```
## 提示
vuepress 设计理念是约定大于配置，此主题的配置等同于 vuepress 文档

## 其他
VuePress 提供了对 YAML front matter 开箱即用的支持: vuepress-theme-koala 扩展的字段如下
```md
---
poster: xx/xx.png
tag: vue,js
---
#poster为首页列表的封面
#tag为文章的标签英文逗号分隔
```

over