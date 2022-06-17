---
tag:
  - js
cover: /2022-05-11-09-16-44.png
tinyCover: /cover/2022-05-11-09-16-44.png
coverWidth: 564
coverHeight: 846
coverPrimary: b48a5b
coverSecondary: 4b75a4

---


# 单行 JavaScript 函数

## 复制到剪贴板

一个有用的单行 JavaScript 函数，可用于轻松将任何文本复制到剪贴板。

```js
const copyToClipboard = text => navigator.clipboard.writeText(text)

copyToClipboard('This Sring is Copied To Clipboard.')
```

复制到剪贴板

## 获取特定范围内的随机数

一个基本的 JavaScript 函数，用于在特定数字范围内生成随机数。您提供最小值和最大值作为参数，并且单行函数返回给定范围内的随机数。

```js
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min

randomNumberInRange()
// Result: Default random number range is 0 - 100, so you get a number between 0 and 100.
randomNumberInRange(100, 200)
// Result: You will get a random number between 100 and 200, where 100 is min range and 200 is max range.
```

获取特定范围内的随机数

## 将RGB转换为十六进制

此列表中的一个有用函数，用于将 RGB 转换为十六进制代码。

```js
const rgbToHex = (r, g, b) => `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`

rgbToHex(0, 51, 255)
// Result: #0033ff
```

将 RGB 转换为十六进制

## 找出两个日期之间的间隔天数

当您在 JavaScript 中使用日历/日期时，下一个函数是一个非常有用的单行函数。使用以下代码查找 2 个给定日期之间的间隔天数。

```js
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)

dayDif(new Date('2020-10-21'), new Date('2021-10-22'))
// Result: 366
```

```js
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1 - date2) / 86400000)
```

查找两个日期之间的间隔天数

## 获取当前时间

```js
const getColonTimeFromData = data => data.toTimeString().slice(0, 8)

getColonTimeFromData(new Data()) // "08:18:00"
```

## 生成随机十六进制

您可以使用此函数生成随机的十六进制颜色，这对于前端项目非常有用。

```js
const randomHex = () => `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padEnd(6, '0')}`

console.log(randomHex())
// Result: #92b008
```

```js
const randomHex = () => `#${((1 << 24) | Math.random() * 0xFFFFFF).toString(16).slice(1)}`
```

生成随机十六进制

## 检查提供的日期是否为工作日

使用此函数，您将能够检查作为参数传递的日期是工作日还是周末。

```js
const isWeekday = date => date.getDay() % 6 !== 0

console.log(isWeekday(new Date(2021, 0, 11)))
// Result: true (Monday)
console.log(isWeekday(new Date(2021, 0, 10)))
// Result: false (Sunday)
```

检查提供的日期是否为工作日

## 转换温度华氏/摄氏

如果您在项目中处理温度问题，那么这两个是非常有用的 JavaScript 函数。这两个函数将帮助您将华氏温度转换为摄氏温度，反之亦然。

```js
const celsiusToFahrenheit = celsius => celsius * 9 / 5 + 32
const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9

// Examples
celsiusToFahrenheit(15) // 59
celsiusToFahrenheit(0) // 32
celsiusToFahrenheit(-20) // -4

fahrenheitToCelsius(59) // 15
fahrenheitToCelsius(32) // 0
```

转换温度华氏/摄氏

## 检查用户是否在 Apple 设备上

与许多项目一样，我们需要实现基于设备的功能。您可以使用此功能来确定用户是否在使用 Apple 设备。

```js
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform)

console.log(isAppleDevice)
// Result: will return true if user is on an Apple device
```

检查用户是否在 Apple 设备上

## 从日期中获取时间

您可以使用 .toTimeString\(\) 方法并通过在正确的位置分割字符串，我们可以从我们提供的日期获取时间，或者获取当前时间。

```js
const timeFromDate = date => date.toTimeString().slice(0, 8)

console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0)))
// Result: "17:30:00"
console.log(timeFromDate(new Date()))
// Result: will log the current time
```

从日期获取时间

## 从文本中剥离 HTML

一个非常方便的 JavaScript 单行函数，出于安全原因也很重要。用户可以提交基于标签的输入值。接受用户输入时，您可以在 DOMParser 的帮助下去除用户输入的文本中的任何 HTML 元素。

```js
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || ''

stripHtml('<h1>Hello <strong>World</strong>!!!</h1>')
// Result: Hello World!!!
```

从文本中去除 HTML

## 将小数四舍五入到一定数量的小数位

在处理金额时，小数计算非常重要，应该非常精确和可靠。在 JavaScript 中使用四舍五入到固定的小数点是一件棘手的事情。内置的 JavaScript toFixed\(\) 方法可以轻松地进行这种转换，但由于浮点运算的工作方式，它在某些情况下会产生奇怪的结果。

为了避免这种奇怪的行为，您可以用指数表示法表示数字并使用 Math.round\(\) 将小数四舍五入到给定的小数位数。

```js
// Default Javascript function toFixed behaviour
Number((1.005).toFixed(2)) // outputs 1 instead of 1.01
Number((1.555).toFixed(2)) // outputs 1.55 instead of 1.56

const round = (n, d) => Number(`${Math.round(`${n}e${d}`)}e-${d}`)

round(1.005, 2) // 1.01
round(1.555, 2) // 1.56
```

将小数四舍五入到一定数量的小数位

## 随机排列数组

您可以使用以下代码对数组进行洗牌。它的用途`sort`和`random`方法。

```js
const shuffleArray = arr => arr.sort(() => 0.5 - Math.random())

console.log(shuffleArray([1, 2, 3, 4]))
// Result: [ 1, 4, 3, 2 ]
```

随机排列数组

## 检测暗模式

使用以下代码确定用户的设备是否处于暗模式。

```js
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

console.log(isDarkMode) // Result: True or False
```

检测暗模式

## 从 URL 获取查询参数

在处理 url、查询参数时非常有用的功能。您可以通过传递 url 作为函数的参数轻松地从 url 检索查询参数。

```js
Object.fromEntries(new URLSearchParams(window.location.search))
```

从 URL 获取查询参数

## 获取数字数组的平均值

JavaScript reducer 允许计算单行中多个数组的平均值。在为许多问题编写单行解决方案时，Reduce 方法非常有用，例如在数字数组中查找总和或最大值。

```js
const average = arr => arr.reduce((a, b) => a + b) / arr.length

average([21, 56, 23, 122, 67])
// 57.8
```

获取数字数组的平均值

## 检查当前设备是否支持触摸事件

```js
const touchSupported = () => {
  ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
}

console.log(touchSupported())
// Result: will return true if touch events are supported, false if not
```

检查当前设备是否支持触摸事件

## 查找一年中的哪一天

另一个与日期/日历相关的非常有用的 JavaScript 函数。它基本上为您提供一年中的天数。例如，2 月 6 日一年中有 365 天中有 37 天。

```js
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)

dayOfYear(new Date())
// Result: 272
```

查找一年中的哪一天

## 获取浏览器 Cookie 的值

JavaScript 的一个有用的简短函数，旨在获取浏览器 cookie 的值。

```js
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift()

cookie('_ga')
// Result: "GA1.2.1929736587.1601974046"
```

获取浏览器 Cookie 的值

## 清除所有浏览器cookies

另一个与 cookie 相关的单行代码，可用于通过访问 cookie`document.cookie`并清除它来轻松清除存储在网页中的所有 cookie 。

```js

const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))
```

清除所有浏览器 Cookie

## 删除数组中的重复项

JavaScript 中的**集合**仅存储唯一项。我们可以使用此行为从数组中删除重复项。但是，它仅适用于存储原始数据的数组。因此，您必须编写一个多行解决方案来删除存储对象的数组中的重复项。但是，在简单的场景中删除重复项仍然是一种相当不错的方法。

```js
const removeDuplicates = arr => [...new Set(arr)]

removeDuplicates([31, 56, 12, 31, 45, 12, 31])
// [ 31, 56, 12, 45 ]
```

删除数组中的重复项

## 检查日期是否有效

使用这个 Js 函数检查用户日期输入的有效性。

```js
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf())

isDateValid('December 17, 1995 03:24:00')
// Result: true
```

```js
const isDateValid = (...val) => !Number.isNaN(+new Date(...val))
```

检查日期是否有效

## 获取偶数奇数

```js
const isEven = x => ~x & 1
```

## 结论

如果您有扩展此列表的想法，请随时在评论中提及您的想法。我很想用你的建议来扩展这个列表。
