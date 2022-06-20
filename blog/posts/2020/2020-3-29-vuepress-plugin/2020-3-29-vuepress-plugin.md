---
title: vuepress插件推荐
tag:
  - vuepress
cover: /2022-05-13-12-10-40.png
hot: true
date: 2020-3-29
base64: 8341d2
tinyCover: /cover/2022-05-13-12-10-40.png
coverWidth: 564
coverHeight: 705
coverPrimary: bfb0a6
coverSecondary: 404f59

---


个人插件推荐欢迎服用 star

## 本文插件地址

github地址[vuepress-plugin-auto-front-matter](https://github.com/artiely/vuepress-plugin-auto-front-matter)

## 该插件的作用

平时我们在使用vuepree博客的时候会书写yaml格式的文章基本信息 如：

```md
---
 title: 如何实现一个vuepress插件
 author:Artiely
 tag:
  - javaScript
  - vuepress
date: 2020-3-29
location: wuhan China
summary: 这是一篇vuepress插件的介绍
---

````

该插件的目的就是帮作者生成`---`中间的部分信息，懒人本着能省则省的目的我一行多余的重复工作都不想干。

该插件目前可以帮我们生成

```md
 author
 title
 location
 summary
 description
 date

```

也就是说这些字段在没有特殊的情况下你只用配置一次就不用管了,而且你也可以自己在页面写上这些字段用于覆盖插件生成的默认值

## 插件的使用方式

```shell
npm i vuepress-plugin-auto-front-matter
```

```js
// .vuepress/config.js

module.exports = {
    plugins: [
      ['auto-front-matter'],
      // other plugins
    ]
}

// or options
module.exports = {
    plugins: [
      ['auto-front-matter',{
        author: 'Artiely' // 默认的全局作者
        summary: '详情请查看', // 默认的全局说明
        summaryLength: 200  // 说明的长度
        location: 'Wuhan,China' // 默认的全局地址
      }],
      // other plugins
    ]
}
```

## 插件生成的结果

```js
$page:{
  frontmatter:{
    title: "....",
    date: "2020-4-1",
    author: "Artiely",
    summary: "......",
    description: "......",
    location: "Wuhan,China",
    // ...
  }
}
```

## 插件的实现原理

了解原理让插件更好的生效

`author/title` 取自git里的信息确保用git管理你的博文

`title/summary/description` 取自md文档确保md文档中开头有`#`标题 `summary/description` 会截取md文档中开头的内容

`location` 设置的值
