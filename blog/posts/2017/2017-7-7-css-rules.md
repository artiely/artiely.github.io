---
title: css 规范
tag:
  - css
  - less
  - stylus
  - sass
author: Artiely
date: 2017-7-7
cover: /2022-05-14-21-25-03.png
base64: 7bcdeb
tinyCover: /cover/2022-05-14-21-25-03.png
coverWidth: 736
coverHeight: 1040
coverPrimary: 8a929c
coverSecondary: 756d63

---

# css 规范

## 语法
- 使用两个空格的 soft tabs — 这是保证代码在各种环境下显示一致的唯一方式。
- 使用组合选择器时，保持每个独立的选择器占用一行。
- 为了代码的易读性，在每个声明的左括号前增加一个空格。
- 声明块的右括号应该另起一行。
- 每条声明 : 后应该插入一个空格。
- 每条声明应该只占用一行来保证错误报告更加准确。
- 所有声明应该以分号结尾。虽然最后一条声明后的分号是可选的，但是如果没有他，你的代码会更容易出错。
- 逗号分隔的取值，都应该在逗号之后增加一个空格。
- 不要在颜色值 rgb(), rgba(), hsl(), hsla(), 和 rect() 中增加空格
- 不要在属性取值或者颜色参数前面添加不必要的 0 (比如，使用 .5 替代 0.5 和 -.5px 替代 0.5px)。
- 所有的十六进制值都应该使用小写字母，例如 #fff。因为小写字母有更多样的外形，在浏览文档时，他们能够更轻松的被区分开来。
- 尽可能使用短的十六进制数值，例如使用 #fff 替代 #ffffff。
- 为选择器中得属性取值添加引号，例如 input[type="text"]。 [他们只在某些情况下可有可无](https://mathiasbynens.be/notes/unquoted-attribute-values#css)，所以都使用引号可以增加一致性。
- 不要为 0 指明单位，比如使用 margin: 0; 而不是 margin: 0px;。
- 对这里提到的规则有问题吗？参考 [Wikipedia 中的 CSS 语法部分](https://en.wikipedia.org/wiki/Cascading_Style_Sheets#Syntax)。
```css
/* Bad CSS */
.selector, .selector-secondary, .selector[type=text] {
  padding:15px;
  margin:0px 0px 15px;
  background-color:rgba(0, 0, 0, 0.5);
  box-shadow:0 1px 2px #CCC,inset 0 1px 0 #FFFFFF
}

/* Good CSS */
.selector,
.selector-secondary,
.selector[type="text"] {
  padding: 15px;
  margin-bottom: 15px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0px 1px 2px #ccc, inset 0 1px 0 #fff;
}
```

## 声明顺序
相关的属性声明应该以下面的顺序分组处理：

1.Positioning
2.Box model 盒模型
3.Typographic 排版
4.Visual 外观

Positioning 处在第一位，因为他可以使一个元素脱离正常文本流，并且覆盖盒模型相关的样式。盒模型紧跟其后，因为他决定了一个组件的大小和位置。

其他属性只在组件 内部 起作用或者不会对前面两种情况的结果产生影响，所以他们排在后面。

关于完整的属性以及他们的顺序，请参考 [Recess](https://twitter.github.io/recess/)。
```css
.declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* Box-model */
  display: block;
  float: right;
  width: 100px;
  height: 100px;

  /* Typography */
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;
  color: #333;
  text-align: center;

  /* Visual */
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;

  /* Misc */
  opacity: 1;
}
```

## 媒体查询位置
尽量将媒体查询的位置靠近他们相关的规则。不要将他们一起放到一个独立的样式文件中，或者丢在文档的最底部。这样做只会让大家以后更容易忘记他们。这里是一个典型的案例。
```css
.element { ... }
.element-avatar { ... }
.element-selected { ... }

@media (min-width: 480px) {
  .element { ...}
  .element-avatar { ... }
  .element-selected { ... }
}
```

## 不要使用 @import
与 <link> 相比, @import 更慢，需要额外的页面请求，并且可能引发其他的意想不到的问题。应该避免使用他们，而选择其他的方案：

使用多个 <link> 元素
使用 CSS 预处理器例如 Sass 或 Less 将样式编译到一个文件中
使用 Rails, Jekyll 或其他环境提供的功能，来合并 CSS 文件。
了解更多信息, 参照 Steve Souders 的[这篇文章](http://www.stevesouders.com/blog/2009/04/09/dont-use-import/)。

## 前缀属性
当使用厂商前缀属性时，通过缩进使取值垂直对齐以便多行编辑。
```css
/* Prefixed properties */
.selector {
  -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.15);
          box-shadow: 0 1px 2px rgba(0,0,0,.15);
}
```

## 单条声明的声明块
在一个声明块中只包含一条声明的情况下，为了易读性和快速编辑可以考虑移除其中的换行。所有包含多条声明的声明块应该分为多行。

这样做的关键因素是错误检测 - 例如，一个 CSS 验证程序显示你在 183 行有一个语法错误,如果是一个单条声明的行，那就是他了。在多个声明的情况下，你必须为哪里出错了费下脑子。
```css
/* Single declarations on one line */
.span1 { width: 60px; }
.span2 { width: 140px; }
.span3 { width: 220px; }

/* Multiple declarations, one per line */
.sprite {
  display: inline-block;
  width: 16px;
  height: 15px;
  background-image: url(../img/sprite.png);
}
.icon           { background-position: 0 0; }
.icon-home      { background-position: 0 -20px; }
.icon-account   { background-position: 0 -40px; }
```
## 属性简写
坚持限制属性取值简写的使用，属性简写需要你必须显式设置所有取值。常见的属性简写滥用包括:

- padding
- margin
- font
- background
- border
- border-radius
大多数情况下，我们并不需要设置属性简写中包含的所有值。例如，HTML 头部只设置上下的 margin，所以如果需要，只设置这两个值。过度使用属性简写往往会导致更混乱的代码，其中包含不必要的重写和意想不到的副作用。

Mozilla Developer Network 有一篇对不熟悉属性简写及其行为的人来说很棒的关于 [shorthand properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) 的文章。
```css
/* Bad example */
.element {
  margin: 0 0 10px;
  background: red;
  background: url("image.jpg");
  border-radius: 3px 3px 0 0;
}

/* Good example */
.element {
  margin-bottom: 10px;
  background-color: red;
  background-image: url("image.jpg");
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
```
## LESS 和 SASS 中的嵌套
避免不必要的嵌套。可以进行嵌套，不意味着你应该这样做。只有在需要给父元素增加样式并且同时存在多个子元素时才需要考虑嵌套。
```css
// Without nesting
.table > thead > tr > th { … }
.table > thead > tr > td { … }

// With nesting
.table > thead > tr {
  > th { … }
  > td { … }
}
```
## LESS 和 SASS 中的运算符
为了提高代码可读性，在数学运算外增加括号，并且在取值，变量和运算符之间增加空格。
```css
// Bad example
.element {
  margin: 10px 0 @variable*2 10px;
}

// Good example
.element {
  margin: 10px 0 (@variable * 2) 10px;
}
```

## 代码注释

代码是由人来编写和维护的。保证你的代码是描述性的，包含好的注释，并且容易被他人理解。好的代码注释传达上下文和目标。不要简单地重申组件或者 class 名称。
```css
/* Bad example */
/* Modal header */
.modal-header {
  ...
}

/* Good example */
/* Wrapping element for .modal-title and .modal-close */
.modal-header {
  ...
}
```

## Class 命名
- 保持 Class 命名为全小写，可以使用短划线（不要使用下划线和 camelCase 命名）。短划线应该作为相关类的自然间断。(例如，.btn 和 .btn-danger)。
- 避免过度使用简写。.btn 可以很好地描述 button，但是 .s 不能代表任何元素。
- Class 的命名应该尽量短，也要尽量明确。
- 使用有意义的名称；使用结构化或者作用目标相关，而不是抽象的名称,尽量使用英文命名。
- 命名时使用最近的父节点或者父 class 作为前缀。
- 使用 .js-* classes 来表示行为(相对于样式)，但是不要在 CSS 中定义这些 classes。
这些规则在创建 Sass 和 Less 变量名时同样有用。
```css
/* Bad example */
.t { ... }
.red { ... }
.header { ... }

/* Good example */
.tweet { ... }
.important { ... }
.tweet-header { ... }

```
## 选择器

- 使用 classes 而不是通用元素标签来优化渲染性能。
- 避免在经常出现的组件中使用一些属性选择器 (例如，[class^="..."])。浏览器性能会受到这些情况的影响。
- 减少选择器的长度，每个组合选择器选择器的条目应该尽量控制在 3 个以内。
- 只在必要的情况下使用后代选择器 (例如，没有使用带前缀 classes 的情况).
```css
/* Bad example */
span { ... }
.page-container #stream .stream-item .tweet .tweet-header .username { ... }
.avatar { ... }

/* Good example */
.avatar { ... }
.tweet-header .username { ... }
.tweet .avatar { ... }
```
## 代码组织
- 以组件为单位组织代码。
- 制定一个一致的注释层级结构。
- 使用一致的空白来分割代码块，这样做在查看大的文档时更有优势。
- 当使用多个 CSS 文件时，通过组件而不是页面来区分他们。页面会被重新排列组合，而组件是可以移动的。
```css
/*
 * Component section heading
 */

.element { ... }


/*
 * Component section heading
 *
 * Sometimes you need to include optional context for the entire component. Do that up here if it's important enough.
 */

.element { ... }

/* Contextual sub-component or modifer */
.element-heading { ... }
```

### 部分公用样式名示例

| CSS 样式命名          | 说明网页公共命名         |
| --------------------- | ------------------------ |
| .row                  | 行                       |
| .col                  | 列                       |
| .wrapper              | 页面外围控制整体布局宽度 |
| .container 或.content | 容器,用于最外层          |
| .layout               | 布局                     |
| .head, .header        | 头部分                   |
| .foot, .footer        | 脚部分                   |
| .nav                  | 主导航                   |
| .subnav               | 二级导航                 |
| .menu                 | 菜单                     |
| .submenu              | 子菜单                   |
| .side-bar             | 侧栏                     |
| .main                 | 页面主体                 |
| .tag                  | 标签                     |
| .msg .message         | 提示信息                 |
| .tips                 | 小提示                   |
| .link                 | 链接                     |
| .title                | 标题                     |
| .summary              | 摘要                     |
| .login                | 登录                     |
| .search-iInput        | 搜索输入框               |
| .hot                  | 热门热点                 |
| .search               | 搜索                     |
| .brand                | 商标                     |
| .logo                 | 网站 LOGO 标志           |
| .info                 | 信息                     |
| .service              | 服务                     |
| .regsiter             | 注册                     |
| .arrow                | 箭头                     |
| .list                 | 列表                     |
| .tool, .tool-bar      | 工具条                   |
| .drop                 | 下拉                     |
| .dorpmenu             | 下拉菜单                 |
| .status               | 状态                     |
| .scroll               | 滚动                     |
| .tab                  | 标签页                   |
| .left .right .center  | 居左、中、右             |
| .banner               | 广告条(顶部广告条)       |

::: tip
广告栏不是很建议用.banner 或.ad 等敏感词，因为部分去广告插件会检测对应敏感移除或隐藏 DOM
:::

### 样式文件命名示例

| CSS 文件命名       | 说明           |
| ------------------ | -------------- |
| main.css,index.css | 主要的         |
| base.css           | 基本共用       |
| reset.css          | 重置样式       |
| cover.css          | 覆盖 ui 库样式 |
| tool.css           | 常用工具样式   |
| layout.css         | 布局，版面     |
| themes.css         | 主题           |
| font.css           | 文字、字体     |
| forms.css          | 表单           |
| mend.css           | 补丁           |
| print.css          | 打印           |
| var.less           | 变量           |
| mixin.less         | 混合           |

### 组件样式命名

为了业务样式不影响组件样式 所有的组件样式吸取 BEM 命名规范思想
BEM 规范的要点就是 模块名 + 元素名 + 修饰器名。

```html
<div class="page-btn">
   <button type="button" class="page-btn__prev">上一页</button>
   <!-- ... -->
   <button type="button" class="page-btn__next">下一页</button>
</div>
```

## 使用动态语言 less

[去了解 less](http://www.bootcss.com/p/lesscss/)


## BEM 规范

[去了解 BEM](https://en.bem.info/methodology/quick-start/)

### BEM 解决的问题

css 的样式应用是全局性的，没有作用域可言。考虑以下场景

> 场景一：开发一个弹窗组件，在现有页面中测试都没问题，一段时间后，新需求新页面，该页面一打开这个弹窗组件，页面中样式都变样了，一查问题，原来是弹窗组件和该页面的样式相互覆盖了，接下来就是修改覆盖样式的选择器...又一段时间，又开发新页面，每次为元素命名都心惊胆战，求神拜佛，没写一条样式，F5 都按多几次，每个组件都测试一遍...

> 场景二：承接上文，由于页面和弹窗样式冲突了，所以把页面的冲突样式的选择器加上一些结构逻辑，比如子选择器、标签选择器，借此让选择器独一无二。一段时间后，新同事接手跟进需求，对样式进行修改，由于选择器是一连串的结构逻辑，看不过来，嫌麻烦，就干脆在样式文件最后用另一套选择器，加上了覆盖样式...接下来又有新的需求...最后的结果，一个元素对应多套样式，遍布整个样式文件...

以往开发组件，我们都用“重名概率小”或者干脆起个“当时认为是独一无二的名字”来保证样式不冲突，这是不可靠的。

理想的状态下，我们开发一套组件的过程中，我们应该可以随意的为其中元素进行命名，而不必担心它是否与组件以外的样式发生冲突。

BEM 解决这一问题的思路在于，由于项目开发中，每个组件都是唯一无二的，其名字也是独一无二的，组件内部元素的名字都加上组件名，并用元素的名字作为选择器，自然组件内的样式就不会与组件外的样式冲突了。

这是通过组件名的唯一性来保证选择器的唯一性，从而保证样式不会污染到组件外。

这也可以看作是一种“硬性约束”，因为一般来说，我们的组件会放置在同一目录下，那么操作系统中，同一目录下文件名必须唯一，这一点也就确保了组件之间不会冲突。

BEM 的命名规矩很容易记：block-name\_\_element-name--modifier-name，也就是模块名 + 元素名 + 修饰器名。

一般来说，根据组件目录名来作为组件名字：

比如分页组件：
`/app/components/page-btn/`

那么该组件模块就名为 page-btn，组件内部的元素命名都必须加上模块名，比如：

```html
<div class="page-btn">
   <button type="button" class="page-btn__prev">上一页</button>
   <!-- ... -->
   <button type="button" class="page-btn__next">下一页</button>
</div>
```