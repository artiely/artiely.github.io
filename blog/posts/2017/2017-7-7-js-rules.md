---
title: JS 规范
tag:
  - javaScript
  - eslint
author: Artiely
date: 2017-7-7
cover: /2022-05-14-21-25-26.png
base64: 24384d
tinyCover: /cover/2022-05-14-21-25-26.png
coverWidth: 500
coverHeight: 741
coverPrimary: d6d5d2
coverSecondary: 292a2d

---

# JS 规范
https://standardjs.com/rules-zhcn.html
## 命名规范

### 驼峰式命名法介绍

Pascal Case 大驼峰式命名法：首字母大写。eg：StudentInfo、UserInfo、ProductInfo

Camel Case 小驼峰式命名法：首字母小写。eg：studentInfo、userInfo、productInfo

### 文件资源命名

文件名不得含有空格  
文件名建议只使用小写字母，不使用大写字母。( 为了醒目，某些说明文件的文件名，可以使用大写字母，比如 README、LICENSE。 )  
文件名包含多个单词时，单词之间建议使用半角的连词线 ( - ) 分隔。  
引入资源使用相对路径，不要指定资源所带的具体协议 ( http:,https: ) ，除非这两者协议都不可用。

不推荐 ×

```js
<script src="http://cdn.com/foundation.min.js"></script>
```

推荐

```js
<script src="//cdn.com/foundation.min.js"></script>
```

### 变量命名

命名方式 : 小驼峰式命名方法命名规范 : 类型+对象描述的方式，如果没有明确的类型，就可以使前缀为名词

| 类型     | 小写字母 |
| -------- | -------- |
| array    | a        |
| boolean  | b        |
| function | fn       |
| int      | i        |
| object   | o        |
| regular  | r        |
| string   | s        |

不推荐 ×

```js
const getTitle = 'LoginTable'
```

推荐 √

```js
const tableTitle = 'LoginTable'
```

函数命名方式 : 小驼峰方式 ( 构造函数使用大驼峰命名法 )命名规则 : 前缀为动词

| 动词 | 含义                            | 返回值                                                |
| ---- | ------------------------------- | ----------------------------------------------------- |
| can  | 判断是否可执行某个动作 ( 权限 ) | 函数返回一个布尔值。true：可执行；false：不可执行     |
| has  | 判断是否含有某个值              | 函数返回一个布尔值。true：含有此值；false：不含有此值 |
| is   | 判断是否为某个值                | 函数返回一个布尔值。true：为某个值；false：不为某个值 |
| get  | 获取某个值                      | 函数返回一个非布尔值                                  |
| set  | 设置某个值                      | 无返回值、返回是否设置成功或者返回链式对象            |

推荐 √

```js
//是否可阅读
function canRead(){
return true;
}

//获取姓名
function getName{
return this.name
}
```

### 常量

命名方法 : 全部大写命名规范 : 使用大写字母和下划线来组合命名，下划线用以分割单词。推荐：

```js
const MAX_COUNT = 10
const URL = 'http://www.baidu.com'
```

### 类的成员

公共属性和方法 : 同变量命名方式私有属性和方法 : 前缀为下划线(\_)后面跟公共属性和方法一样的命名方式

推荐(将 name 换成 this 是不是更熟悉了呢)

```js
function Student(name) {
  let _name = name // 私有成员

  // 公共方法
  this.getName = function() {
    return _name
  }

  // 公共方式
  this.setName = function(value) {
    _name = value
  }
}
const st = new Student('tom')
st.setName('jerry')
console.log(st.getName()) // => jerry：输出_name私有变量的值
```

## 注释规范

### 单行注释 `//`

单独一行：`//`(双斜线)与注释文字之间保留一个空格在代码后面添加注释：`//`(双斜线)与代码之间保留一个空格，并且`//`(双斜线)与注释文字之间保留一个空格。注释代码：`//`(双斜线)与代码之间保留一个空格。

推荐 :

```js
// 调用了一个函数；1)单独在一行
setTitle()

const maxCount = 10 // 设置最大量；2)在代码后面注释

// setName(); // 3)注释代码
```

### 多行注释 `/* 注释说明 */`

若开始(`/*`和结束`*/`)都在一行，推荐采用单行注释若至少三行注释时，第一行为`/*`，最后行为 `*/`，其他行以`*`开始，并且注释文字与`*`保留一个空格。

推荐 :

```js
/*
* 代码执行到这里后会调用setTitle()函数
* setTitle()：设置title的值
*/
setTitle()
```

### 函数 ( 方法 ) 注释

函数(方法)注释也是多行注释的一种，但是包含了特殊的注释要求，参照 javadoc(百度百科)语法：

```js
/**
 * 函数说明
 * @关键字
 */
```

常用注释关键字

| 注释名   | 语法                                            | 含义                                         | 示例                    |
| -------- | ----------------------------------------------- | -------------------------------------------- | ----------------------- |
| @param   | @param 参数名 {参数类型} 描述信息描述参数的信息 | @param name {String} 传入名称                |
| @return  | @return {返回类型} 描述信息描述返回值的信息     | @return {Boolean} true:可执行;false:不可执行 |
| @author  | @author 作者信息 [附属信息：如邮箱、日期]       | 描述此函数作者的信息                         | @author 张三 2015/07/21 |
| @version | @version XX.XX.XX                               | 描述此函数的版本号                           | @version 1.0.3          |
| @example | @example 示例代码                               | @example setTitle('测试')                    | 如下                    |

推荐 :

```js
/*
* 合并 Grid 的行
* @param grid {Ext.Grid.Panel} 需要合并的 Grid
* @param cols {Array} 需要合并列的 Index(序号)数组；从 0 开始计数，序号也包含。
* @param isAllSome {Boolean} ：是否 2 个 tr 的 cols 必须完成一样才能进行合并。true：完成一样；false(默认)：不完全一样
* @return void
* @author polk6 2015/07/21
* @example
* _________________                             _________________
* |  年龄 |  姓名 |                             |  年龄 |  姓名 |
* -----------------      mergeCells(grid,[0])   -----------------
* |  18   |  张三 |              =>             |       |  张三 |
* -----------------                             -  18   ---------
* |  18   |  王五 |                             |       |  王五 |
* -----------------                             -----------------
*/
function mergeCells(grid, cols, isAllSome) {
  // Do Something
}
```

## 避免全局命名空间污染

不推荐

```js
const x = 10
const y = 100
console.log(`${window.x} ${window.y}`)
```

推荐

```js
(function(log, w, undefined) {
  'use strict'

  const x = 10
  const y = 100
  console.log(`${w.x === undefined} ${w.y === undefined}`)
})(window.console.log, window)
```

推荐的 IIFE 写法:

```js
(function() {
  'use strict'

  // ...

})()
```

如果你想引用全局变量或者是外层 IIFE 的变量，可以通过下列方式传参：

```js
(function($, w, d) {
  'use strict'

  $(() => {
    w.alert(d.querySelectorAll('div').length)
  })
})(jQuery, window, document)
```

## 严格模式

ECMAScript 5 严格模式可在整个脚本或独个方法内被激活。它对应不同的 javascript 语境会做更加严格的错误检查。严格模式也确保了 javascript 代码更加的健壮，运行的也更加快速。严格模式会阻止使用在未来很可能被引入的预留关键字。你应该在你的脚本中启用严格模式，最好是在独立的 IIFE 中应用它。避免在你的脚本第一行使用它而导致你的所有脚本都启动了严格模式，这有可能会引发一些第三方类库的问题。

### 变量声明

总是使用 var 来声明变量。如不指定 var，变量将被隐式地声明为全局变量，例如
var a = b = 0; //b 会被隐式的创建为全局变量所以，请总是使用 var 来声明变量，并且使用单 var 模式（将所有的变量在函数最前面只使用一个 var 定义）。

例如：

```js
(function (){
  'use strict'
  var a = 0,
      b = 0,
      c = 0,
      i,
      j,
      myObject();
}())
```

采用严格模式带来的好处是，当你手误输入错误的变量名时，它可以通过报错信息来帮助你定位错误出处

### 使用严格等

如果你想了解== 够你喝一壶的

这一小技巧经常用来给方法设定默认的参数。

```js
(function(log) {
  'use strict'

  function multiply(a, b) {
    a = a || 1
    b = b || 1

    log(`Result ${a * b}`)
  }

  multiply() // Result 1
  multiply(10) // Result 10
  multiply(3, NaN) // Result 3
  multiply(9, 5) // Result 45
})(window.console.log)
```

::: tip
永远不要相信用户的输入，永远不要相信数据接口，处理好所有的边界值，尽量在任何情况下保证你的程序不会因为用户输入错误和接口无字段而崩溃,这也代码[鲁棒性](https://baike.baidu.com/item/%E9%B2%81%E6%A3%92%E6%80%A7/832302)的体现
:::

### 条件判断

用三元操作符分配或返回语句。在比较简单的情况下使用，避免在复杂的情况下使用。没人愿意用 10 行三元操作符把自己的脑子绕晕。

不推荐：

```js
if (x === 10)
  return 'valid'

else
  return 'invalid'
```

推荐：

```js
return x === 10 ? 'valid' : 'invalid'
```

不推荐：

```js
if (cd)
  cb()
```

推荐：

```js
cd && cd()
// or
if (cd && typeof cd === 'function')
  cb()
```

## 必须遵循 eslint

在 eslint 规范的约束下代码可读性会高很多,也更便于维护, 一个多人协作的项目必须去遵循这样的规范，不然不同人提交不同风格的代码，merge 代码的人可能会疯掉，而且在编辑器里随随便便一个代码格式化，可能造成上千行的 diff，提交后根本不知道你改了哪里

## 尽量使用 es6+去编写代码

不仅仅是提升效率可读性可维护性还有写代码的愉悦性 你会发现原来 JS 代码可以写的很优雅 可以借助编译工具去实时转化为 es5
