---
title: html 规范
tag:
  - html
  - html5
author: Artiely
date: 2017-7-7
cover: /2022-05-14-21-26-19.png
base64: ee6534
tinyCover: /cover/2022-05-14-21-26-19.png
coverWidth: 563
coverHeight: 798
coverPrimary: d1c1a0
coverSecondary: 2e3e5f

---


# html 规范
## 语法
- 使用两个空格的 soft tabs — 这是保证代码在各种环境下显示一致的唯一方式。
- 嵌套的节点应该缩进（两个空格）。
- 在属性上，使用双引号，不要使用单引号。
- 不好在自动闭合标签结尾处使用斜线 - [HTML5 规范](https://dev.w3.org/html5/spec-author-view/syntax.html#syntax-start-tag) 指出他们是可选的。
- 不要忽略可选的关闭标签（例如，`</li>` 和 `</body>`）。

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page title</title>
  </head>
  <body>
    <img src="images/company-logo.png" alt="Company" />
    <h1 class="hello-world">Hello, world!</h1>
  </body>
</html>
```
## HTML5 doctype
在每个 HTML 页面开头使用这个简单地 doctype 来启用标准模式，使其每个浏览器中尽可能一致的展现。
```html
<!DOCTYPE html>
<html>
  <head>
  </head>
</html>

```
## Language 属性
根据 HTML5 规范：

> 鼓励网站作者在 html 元素上指定 lang 属性，来指出页面的语言。这样做有助于语言合成工具来确定发音方式，以及帮助翻译工具决定使用的规则，等等。

通过[规范](https://w3c.github.io/html/semantics.html#the-html-element)中的 lang 属性了解更多相关内容。

前往 Sitepoint 查看 [language codes 列表](https://www.sitepoint.com/iso-2-letter-language-codes/)。
```html
<html lang="en-us">
  <!-- ... -->
</html>


<html lang="zh-cmn-Hans">
  <!-- ... -->
</html>
```
## 字符编码
通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式。这样做之后，需要避免在 HTML 中出现字符实体，直接提供字符与文档一致的编码（通常是 UTF-8）
``` html
<head>
  <meta charset="UTF-8" />
</head>
```
## 引入 CSS 和 JavaScript
根据 HTML5 规范, 通常在引入 CSS 和 JavaScript 时不需要指明 type，因为 text/css 和 text/javascript 分别是他们的默认值。

HTML5 规范链接
[使用 link](https://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-link-element)
[使用 style](https://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-style-element)
[使用 script](https://www.w3.org/TR/2011/WD-html5-20110525/scripting-1.html#the-script-element)
```html
<!-- External CSS -->
<link rel="stylesheet" href="code-guide.css" />

<!-- In-document CSS -->
<style>
  /* ... */
</style>

<!-- JavaScript -->
<script src="code-guide.js"></script>
```
## 实用高于完美
尽量遵循 HTML 标准和语义，但是不应该以浪费实用性作为代价。任何时候都要用尽量小的复杂度和尽量少的标签来解决问题。
## 属性顺序

HTML 属性应该按照特定的顺序出现以保证易读性。

- class
- id, name
- data-*
- src, for, type, href, value
- title, alt
- role, aria-*
Classes 是为高可复用组件设计的，所以他们处在第一位。Ids 更加具体而且应该尽量少使用（例如, 页内书签），所以他们处在第二位。
```html
<a class="..." id="..." data-toggle="modal" href="#">
  Example link
</a>

<input class="form-control" type="text" />

<img src="..." alt="..." />
```
## Boolean 属性
Boolean 属性指不需要声明取值的属性。XHTML 需要每个属性声明取值，但是 HTML5 并不需要。

了解更多内容，参考 [WhatWG section on boolean attributes:](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-microsyntaxes.html#boolean-attributes)

> 一个元素中 Boolean 属性的存在表示取值 true，不存在则表示取值 false。

如果你必须为属性添加并不需要的取值，参照 WhatWG 的指引:

> 如果属性存在，他的取值必须是空字符串或者 [...] 属性的规范名称，不要在首尾包含空白字符。

简而言之，不要为 Boolean 属性添加取值。
```html
<input type="text" disabled />

<input type="checkbox" value="1" checked />

<select>
  <option value="1" selected>1</option>
</select>
```
## 减少标签数量
在编写 HTML 代码时，需要尽量避免多余的父节点。很多时候，需要通过迭代和重构来使 HTML 变得更少。 参考下面的示例:
```html
<!-- Not so great -->
<span class="avatar">
  <img src="..." />
</span>

<!-- Better -->
<img class="avatar" src="..." />
```

## JavaScript 生成标签
在 JavaScript 文件中生成标签让内容变得更难查找，更难编辑，性能更差。应该尽量避免这种情况的出现。









## 语义化

我们一直都在说语义化编程，语义化编程，但是在代码中很少有人完全使用正确的元素。使用语义化标签也是有理由 SEO 的。

> 语义化是指：根据元素其被创造出来时的初始意义来使用它。意思就是用正确的标签干正确的事，而不是只有 div 和 span

## alt 标签不为空

`<img>`标签的 `alt` 属性指定了替代文本，用于在图像无法显示或者用户禁用图像显示时，代替图像显示在浏览器中的内容。假设由于下列原因用户无法查看图像，`alt` 属性可以为图像提供替代的信息：

网速太慢
src 属性中的错误浏览器禁用图像用户使用的是屏幕阅读器

从 SEO 角度考虑，浏览器的爬虫爬不到图片的内容，所以我们要有文字告诉爬虫图片的内容

## 结构、表现、行为三者分离

尽量在文档和模板中只包含结构性的 HTML；而将所有表现代码，移入样式表中；将所有动作行为，移入脚本之中。在此之外，为使得它们之间的联系尽可能的小，在文档和模板中也尽量少地引入样式和脚本文件。建议：

* 不使用太多张样式表
* 不使用太多脚本 浏览器并行加载量为 5 条（学会用合并脚本）
* 不使用行内样式 （`<style>.no-good {}</style>`）
* 不在元素上使用 style 属性（`<hr style="border-top: 5px solid black">`）
* 不使用行内脚本（`<script>alert('no good')</script>`）
* 不使用表象元素（`i.e. <b>, <u>, <center>, <font>, <b>`）
* 不使用表象 class 名（`i.e. red, left, center`）

## HTML 只关注内容

HTML 只显示展示内容信息

* 不要引入一些特定的 HTML 结构来解决一些视觉设计问题
* 不要将 img 元素当做专门用来做视觉设计的元素
* 样式上的问题应该使用 css 解决
