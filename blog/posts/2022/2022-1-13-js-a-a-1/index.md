---
tag:
  - js
cover: /2022-05-11-09-12-40.png
tinyCover: /cover/2022-05-11-09-12-40.png
coverWidth: 564
coverHeight: 794

---

# 在什么情况下 a === a - 1 ？

_**思考10秒钟再往下看——**_

## 第一个答案自然是Infinity，或者说，扩展一下，应该是正负Infinity

> **👉🏻 知识点:** 在JavaScript里，Infinity是一个Number类型的字面量，表示无穷大。当一个Number类型的值，在运算过程中超过了所能表示的最大值，就会得到无穷大。

比如，如果我们将一个不为0的正数除以0，得到的结果就是无穷大。

`console.log(100 / 0); // Infinity`

对应的，负数有负无穷大。

`console.log(-100 / 0); // \-Infinity`

如果我们数值运算的值，超过了Number允许表示的范围，也是会得到Infinity。

`console.log(1e1000); // Infinity`

> 在JavaScript里，**Number.POSITIVE\_INFINITY**和**Number.NEGATIVE\_INFINITY**两个常量的值，对应正负Infinity。
>
> **Number.isFinite\(\)** 可以判断一个数是否是有穷的，Number.isFinite\(n\)，当n是Number类型时，只有它是正负Infinity或NaN时，返回false，其他情况下返回true。
>
> 任何一个有穷的数和Infinity的加减运算的结果都是Infinity，而**Infinity === Infinity**，所以：

```js
const a = Infinity
console.log(a === a - 1) // true
const b = -Infinity
console.log(b === b - 1) // true
```

**这样我们就得到了两个答案。**

> ### **💡 但是，要注意，Infinity运算的结果并不总是Infinity，比如我们看下面几种运算：**

```js
console.log(Infinity + Infinity) // Infinity
console.log(Infinity - Infinity) // NaN
console.log(Infinity * Infinity) // Infinity
console.log(Infinity / Infinity) // NaN
console.log(Infinity * 0) // NaN
```

**结论是**，_Infinity运算也有可能得到NaN，所以需要小心，例如我们的一个计算表达式中，有两个值相乘，一个值有可能很大，另一个值有可能为0时，就需要小心，如果那个很大的值得到Infinity，另一个值恰好为0时，整个表达式的值可能是NaN，这会造成一些bug。_

```js
const result = a + b * c + d
// 如果 b 是 Infinity 而 c 是 0，整个表达式的结果就有可能是 NaN
```

> 好了，以上是我们的第一个答案：**正负Infinity。**

## 接下来，我们看另一个（另一些）答案

我们给a一个比较大的数值，比如1e45：

```js
const a = 1e45
console.log(a) // 1e+45
console.log(a === a - 1) // true
```

有些同学一看，诶，这也行？

这个不但可以，你随便找两个比较大的数，应该都是可以的：

```js
const a = 6.22e23
console.log(a === a - 1) // true
```

#### 那这又是怎么回事呢？

> **👉🏻 知识点：** 在JavaScript里，整数可以被精确表示的范围是从 **\-2 \*\* 53 + 1** 到 **2 \*\* 53 \- 1**，即 **\-9007199254740991** 到 **9007199254740991**。超过这个数值的整数，都不能被精确表示。
>
> 常量**Number.MAX\_SAFE\_INTEGER**和**Number.MIN\_SAFE\_INTEGER**分别对应**9007199254740991**和 **\-9007199254740991**。

我们来测试一下：

```js
const a = 9007199254740986
for (let i = 0; i < 10; i++)
  console.log(`${i} : ${a + i}`)
```

在**chrome下的输出结果**是这样的：

```shell
0 : 9007199254740986
1 : 9007199254740987
2 : 9007199254740988
3 : 9007199254740989
4 : 9007199254740990
5 : 9007199254740991
6 : 9007199254740992
7 : 9007199254740992
8 : 9007199254740994
9 : 9007199254740996
```

看到在 a + i 的值小于等于 9007199254740991 时，输出正常的每次循环加1的结果，到了大于 9007199254740991 后，输出的结果里出现了两次 9007199254740992，少了 9007199254740993 和 9007199254740995。

**这是因为**，超过 9007199254740991 之后，JavaScript的Number类型就没办法精确地表示整数了。**因为丢失了精度，所以 9007199254740993 和 9007199254740995 不见了。**

我们可以利用这个知识点构造其他一些满足需求的值：

```js
const a = Number.MIN_SAFE_INTEGER - 1
console.log(a === a - 1) // true
```

#### **大整数 Big Integer**

在最新的Chrome浏览器下，其实我们可以精确表示大整数，TC39的Big Integer提案目前是Stage 3阶段，在Chrome浏览器上已经被支持。

```shell
console.log(2 ** 2000); // Infinity
console.log(2n ** 2000n); //114813069527425452423283320117768198402231770208869520047764273682576626139237031385665948631650626991844596463898746277344711896086305533142593135616665318539129989145312280000688779148240044871428926990063486244781615463646388363947317026040466353970904996558162398808944629605623311649536164221970332681344168908984458505602379484807914058900934776500429002716706625830522008132236281291761267883317206598995396418127021779858404042159853183251540889433902091920554957783589672039160081957216630582755380425583726015528348786419432054508915275783882625175435528800822842770817965453762184851149029376n
```

#### **NaN**

有同学可能想到NaN，不过NaN与任何值都不相等，包括NaN自身，所以，利用NaN是不可以的：

```js
const a = NaN
console.log(a === a - 1) // false
```

> 最后，我们再扩展一下，如果面试题要求的**不是a === a \- 1，而是a == a \- 1**，那么有没有其他答案呢？
>
> **大家可以思考一下。**

第一种，`Object`转换为`Number`，会调用`Object.valueOf()`和`Object.toString()`来获取数字基本类型。

``` js
var a = {
  i: 1,
  toString() {
    return a.i--
  },
}
console.log(a == a - 1)
```

第二种，使用一个`defineProperty`，每次获取值时加1。（a===1 && a===2 && a===3 正是用的这个方法）

``` js
let val = 1
Object.defineProperty(window, 'a', {
  get() {
    return val++
  },
})
console.log(a == a - 1)
```
