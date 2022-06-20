---
tag:
  - css
cover: /2022-05-11-09-13-44.png
tinyCover: /cover/2022-05-11-09-13-44.png
coverWidth: 564
coverHeight: 721

---

# 增强页面排版

如何提升网站字体的表现效果，英文使用特定的英文字体，中文使用特定的中文字体，从而增强页面排版。

## 首先能想到最常见的解决方案

- 实现两个class，分别设置font-family为这两个字体，再将这两个类分别应用于中文与英文元素上。缺点繁琐。

- 使用font-family的加载顺续特性，先加载只包含英文的字体，再加载中文字体。缺点对字体有要求。大多数字体无法满足需求。

### **unicode-range**

css3中的@font-face已经被广泛应用于字体设置，为人所熟知，但它有一个unicode-range属性却很容易被我们忽略掉。

unicode-range 的作用是为@font-face所设置的字体限定一个应用范围，使用unicode编码来设置范围。

eg.

```css
@font-face {     
  font-family: 字体;     
  src: url(‘../fonts/中文字体.woff2’);     
  unicode-range: U+4E00-9FCB;
}
@font-face {     
  font-family: 字体;     
  src: url(‘../fonts/英文字体.woff2’); 
}
```

在上述代码中，我们设置了两个相同font-family名称的font-face，并给第一个设置了应用范围。

这样当字符处于该范围内时（此处设置的是汉字字符）就会应用中文字体，其他不属于该范围内的字符都会应用英文字体。

当然我们还可以根据需求划分更多的字符区间并给每个区间应用不同的字体。

汉字字符的unicode范围为：U+4E00-9FCB，英文字符：U+00-024F

更多unicode字符请参考[unicode-table](https://unicode-table.com/en/blocks/latin-extended-b/)

### 延伸阅读

- [Unicode 表](https://unicode-table.com/en/#control-character)：引用 unicode 字符集和代码的资源。

- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/unicode-range)

- [caniuse](https://caniuse.com/?search=unicode-range)
