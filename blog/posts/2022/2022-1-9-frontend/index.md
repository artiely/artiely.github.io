---
tag:
  - html
  - css
  - js
cover: /2022-05-11-09-17-31.png
tinyCover: /cover/2022-05-11-09-17-31.png
coverWidth: 450
coverHeight: 800

---

# 一小部分鲜为人知的 HTML、CSS 和 JavaScript 技术

> 前端是网站的第一道防线（或者更准确地说，是对用户“攻击”的第一道防线），所以前端开发者总是有很多工作要做。为了让他们的生活更轻松一些，我们选择了一些有用但不太知名的 HTML、CSS 和 JavaScript 技术。特别是当你的用户使用Chrome或者你使用Electron技术不用太担心兼容问题的时候。

## 快速隐藏

要隐藏 DOM 元素，您不需要 JavaScript。一个原生的 HTML 属性就足够了`hidden`。效果类似于添加样式`display: none;`。该元素只是从页面中消失。  

```html
<p hidden>This paragraph is not visible on the page, it is hidden from the HTML.</p>
```

[caniuse](https://caniuse.com/?search=hidden)
[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden)

当然，这个技巧不适用于伪元素。

## 快速定位

你熟悉[inset](https://developer.mozilla.org/en-US/docs/Web/CSS/inset) CSS 属性吗？这是我们所熟悉的一个简化版本`top`，`left`，`right`和`bottom`。通过类比`margin`or 属性的简短语法`padding`，您可以在一行中设置元素的所有偏移量。  

```
// Before
div {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

// After
div {
  position: absolute;
  inset: 0;
}
```

> inset在浏览器上的覆盖率只有 87.48%，所以如果你在任何重要的东西上使用它并

[caniuse](https://caniuse.com/?search=inset)

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/inset)

使用简短的语法有助于减小 CSS 文件的大小，这样代码看起来更简洁。但是，不要忘记 inset 是一个布尔属性，它考虑了电子邮件方向。换句话说，如果您的网站使用 rtl 方向的语言，那么左将变成右，反之亦然。

## 检查你的网速

您可以使用 object 从 JavaScript 代码轻松确定用户的互联网速度`navigator`。  

```
navigator.connection.downlink;
```

**这目前是一项实验性技术，尽管许多流行的浏览器都支持它，所以要小心。**

[caniuse](https://caniuse.com/?search=downlink)

[MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/downlink)

## 在智能手机上启用振动

是的，这也是可能的。对象的[vibrate\(\)](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate)方法`window.navigator`可以在移动设备上启用振动模式。  

```
window.navigator.vibrate(500);
```

[caniuse](https://caniuse.com/?search=vibrate)

[MDN](https://developer.mozilla.org/docs/Web/API/Navigator/vibrate)

您可以将参数振动时间（以毫秒为单位）传递给该方法。或者你甚至可以指定一种模式——振动间隔和停顿的交替。为此，请向该方法传递一个数字数组。

## 禁止下拉刷新

下拉刷新是一种流行的移动开发模式。如果您不喜欢它，只需使用带有 value的[overscroll-behavior-y](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior) CSS 属性禁用此效果`contain`。  

```
body {
 overscroll-behavior-y: contain;
}
```

这个属性对于组织模式窗口内的滚动也非常有用——它可以防止主页在到达边框时拦截滚动。

> overscroll-behavior-y在 iPhone（谷歌或 Safari）上不起作用并且只有 74% 的覆盖率，所以你也不能完全依赖它。

[caniuse](https://caniuse.com/?search=overscroll-behavior-y)

[MDN](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y)

## 禁止插入文字

您可能希望阻止用户粘贴从输入字段中某处复制的文本（仔细考虑是否值得）。这很容易通过跟踪事件`paste`并调用其方法来实现`preventDefault()`。  

``` html
<input type="text"></input>
<script>
  const input = document.querySelector('input');

  input.addEventListener("paste", function(e){
    e.preventDefault()
  })

</script>
```

糟糕，现在您将无法复制粘贴，您必须手写并输入所有内容。

**这些技术并不经常使用，但它们在许多情况下都很有用。我希望你自己找到一些有趣的东西。**
