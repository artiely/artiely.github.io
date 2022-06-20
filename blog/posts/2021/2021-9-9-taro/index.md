---
tag:
  - taro
  - react
cover: /2022-05-11-09-24-54.png
tinyCover: /cover/2022-05-11-09-24-54.png
coverWidth: 412
coverHeight: 594
coverPrimary: 4b4b4b
coverSecondary: b4b4b4

---

# taro 升级采坑

## `Taro.getSystemInfoSync()`获取不到值 `.getSystemInfoSync is not a function`

原因：

依赖版本不一致的问题

```json
{
   "@tarojs/components": "^3.0.0-alpha.5",
    "@tarojs/runtime": "^3.0.0-alpha.5",
    "@tarojs/taro": "^3.0.0-alpha.5",
   "@tarojs/mini-runner": "^3.0.0-alpha.5",
    "@tarojs/webpack-runner": "^3.0.0-alpha.5",
    "babel-preset-taro": "^3.0.0-alpha.5",
    "eslint-config-taro": "^3.0.0-alpha.5",
}
```

## banban is not defined

Config/index.js

defineConstants配置里的全局变量编译时会被去掉引号 如版本号’1.0.0‘编译成1.0.0  ‘banban’ 编译成 banban 导致报错 语法不对或变量找不到

临时解决，全局的变量临时赋值字符串

## Super expression must either be null or a function

页面没有替换成react

```js
import React, { Component } from 'react'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { Button, Image, Text, View } from '@tarojs/components'
```

## Cannot set property '_code' of undefined

## ReferenceError: this hasn't been initialised - super() hasn't been called

解决： 组件构造函数必须调用父类的构造函数 super()

```js
//...
constructor() {
    super()
    this._code = null
    this._first = true
    this._reLunched = false
}
//...
```

## react.ts:53 TypeError: Cannot read property 'params' of undefined

解决：新路由方式

```js
import Taro ,{getCurrentInstance} from '@tarojs/taro'
//...
constructor(props) {
    super(props)
    this.$router  = getCurrentInstance().router
}
//...
```

## Block is not defined

## ReferenceError: Image is not defined

标签未导入

```js
import { Block, Image } from '@tarojs/components'
```

## VM1519:6 Uncaught Error: APP-SERVICE-Engine:Please do not call Page constructor in files that not listed in "pages" section of app.json or plugin.json

页面没有注册的原因

## `Uncaught TypeError: Cannot assign to read only property 'exports' of object '#<Object>'`

wepack升级为4.x不在支持`require()`

解决：对应的文件改为es模式导出

## `<slot>` 似乎不在支持？

<https://zhuanlan.zhihu.com/p/75606138>

使用 `this.$props.children` 代替

## `Taro.createRef`替换成`React.createRef()`

调用实例的方法沿用以前会存在找不到的方法，

使用同react如下示例加`.current`

`this.listPageRef.current._getMoreListData();`
