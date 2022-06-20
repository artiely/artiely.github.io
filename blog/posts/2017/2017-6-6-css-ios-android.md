---
title: 移动端css优化
tag:
  - css
author: Artiely
date: 2017-6-6
cover: /2022-05-14-21-20-47.png
base64: f3744e
tinyCover: /cover/2022-05-14-21-20-47.png
coverWidth: 736
coverHeight: 1104
coverPrimary: 716455
coverSecondary: 8e9baa

---


# ios 下定位的层如果有表单，在输入时键盘弹起，表单的光标不会跟随（系统bug）

  解决办法：有表单数据尽量在页面完成，不用类似popup的浮层

## ios 下滑动不平滑

```html
html,
body {
  -webkit-overflow-scrolling: touch;
}
```

## ios 下表单的默认外观样式

```css
input select{
  -webkit-appearance: none;
}
```

## 禁止ios 长按时不触发系统的菜单，禁止ios&android长按时下载图片

```css
.css{-webkit-touch-callout: none}
```

## 禁止ios和android用户选中文字

```css
.css{-webkit-user-select:none}
```

消除transition闪屏

```css
.css{
/*设置内嵌的元素在 3D 空间如何呈现：保留 3D*/
-webkit-transform-style: preserve-3d;
/*（设置进行转换的元素的背面在面对用户时是否可见：隐藏）*/
-webkit-backface-visibility: hidden;
}
```

开启硬件加速

解决页面闪白
保证动画流畅

```css
.css {
   -webkit-transform: translate3d(0, 0, 0);
   -moz-transform: translate3d(0, 0, 0);
   -ms-transform: translate3d(0, 0, 0);
   transform: translate3d(0, 0, 0);
}
```

## 文字超出隐藏

```css
// 文字超出两行隐藏
.textover2{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  line-height:1.5;
}
// 文字超出一行隐藏
.textover1{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
```

## 清浮动

```css
// 清浮动
.clearfix{
  &:after{
    content:'';
    height: 0;
    display: block;
    overflow: hidden;
    clear: both;
  }
}
```