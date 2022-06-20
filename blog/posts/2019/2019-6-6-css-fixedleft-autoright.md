---
title: css实现左边固定宽右边自适应
tag:
  - css
author: Artiely
date: 2019-6-6
cover: /2022-05-14-22-02-04.png
base64: 76c9e8
tinyCover: /cover/2022-05-14-22-02-04.png
coverWidth: 736
coverHeight: 1308
coverPrimary: 0e141d
coverSecondary: f1ebe2

---

##  show turns
![](https://gitee.com/artiely/Figure-bed/raw/master/images/20200313180628.png)
##  show you the code
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      .wrapper {
        background: #eee;
      }
      .left {
        background: red;
        width: 100px;
      }
      .right {
        background: yellow;
      }
    </style>
  </head>
  <body>
    <h1>左边固定宽，右边自适应宽，8种方式（不限于）</h1>
    flex
    <style>
      .wrapper1 {
        display: flex;
      }
      .left1 {
      }
      .right1 {
        flex: 1;
      }
    </style>
    <div class="wrapper wrapper1">
      <div class="left left1">左</div>
      <div class="right right1">右</div>
    </div>

    calc + inline-block
    <style>
      .wrapper2 {
        font-size: 0;
      }
      .left2,
      .right2 {
        display: inline-block;
        font-size: 14px;
      }
      .right2 {
        width: calc(100% - 100px);
      }
    </style>
    <div class="wrapper wrapper2">
      <div class="left left2">左</div>
      <div class="right right2">右</div>
    </div>

    calc + float
    <style>
      .wrapper3 {
        overflow: hidden;
      }
      .left3,
      .right3 {
        float: left;
      }
      .right3 {
        width: calc(100% - 100px);
      }
    </style>
    <div class="wrapper wrapper3">
      <div class="left left3">左</div>
      <div class="right right3">右</div>
    </div>

    float+margin-left
    <style>
      .wrapper4 {
        overflow: hidden;
      }
      .left4 {
        float: left;
      }
      .right4 {
        margin-left: 100px;
      }
    </style>
    <div class="wrapper wrapper4">
      <div class="left left4">左</div>
      <div class="right right4">右</div>
    </div>

    absolute+margin-left
    <style>
      .wrapper5 {
        position: relative;
      }
      .left5 {
        position: absolute;
      }
      .right5 {
        margin-left: 100px;
      }
    </style>
    <div class="wrapper wrapper5">
      <div class="left left5">左</div>
      <div class="right right5">右</div>
    </div>
    margin+padding+float+特殊布局
    <style>
      .left6 {
        float: left;
      }
      .right6 {
        padding-left:100px;
        margin-left:-100px;
      }
    </style>
     
    <div class="wrapper wrapper6">
      <div class="right right6"><div class="left left6">左</div>右</div>
    </div>
    grid
    <style>
      .wrapper7 {
        display: grid;
        grid-template-columns: 100px 1fr;
        align-items: start;
      }
      .left7 {
        grid-column: 1;
      }
      .right7 {
        grid-column: 2;
      }
    </style>
    <div class="wrapper wrapper7">
      <div class="left left7">左</div>
      <div class="right right7">右</div>
    </div>
    table
    <style>
      .wrapper8 {
        display: table;
      }
      .left8 {
      }
      .right8 {
        display: table-cell;
        width: 100%;
      }
    </style>
    <div class="wrapper wrapper8">
      <div class="left left8">左</div>
      <div class="right right8">右</div>
    </div>
  </body>
</html>

```