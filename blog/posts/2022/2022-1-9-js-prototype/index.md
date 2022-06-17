---
tag:
  - js
cover: /2022-05-11-09-16-09.png
tinyCover: /cover/2022-05-11-09-16-09.png
coverWidth: 564
coverHeight: 748
coverPrimary: d595a4
coverSecondary: 2a6a5b

---


# 原型模式

原型模式是在许多相同类型的对象之间共享属性的有用方式。原型是 JavaScript 原生的对象，对象可以通过原型链访问。

在我们的应用程序中，我们经常需要创建许多相同类型的对象。一个有用的方法是创建一个 ES6 类的多个实例。

假设我们要创建许多狗！在我们的例子中，狗不能做那么多：它们只是有一个名字，它们可以吠叫！

```js
class Dog {
  constructor(name) {
    this.name = name
  }

  bark() {
    return `Woof!`
  }
}

const dog1 = new Dog('Daisy')
const dog2 = new Dog('Max')
const dog3 = new Dog('Spot')
```

注意这里如何`constructor`包含一个`name`属性，而类本身包含一个`bark`属性。当使用 ES6 类时，在类本身上定义的所有属性，`bark`在这种情况下，都会自动添加到`prototype`.

我们可以`prototype`通过访问`prototype`构造函数上的属性或通过`__proto__`任何_实例_上的属性直接看到。

```js
console.log(Dog.prototype)
// constructor: ƒ Dog(name, breed) bark: ƒ bark()

console.log(dog1.__proto__)
// constructor: ƒ Dog(name, breed) bark: ƒ bark()
```

`__proto__`任何构造函数实例上的值，都是对构造函数原型的直接引用！每当我们尝试直接访问对象上不存在的属性时，JavaScript 将_沿着原型链_查看该属性是否在原型链中可用。

![流动](./Screen_Shot_2020-12-24_at_1.05.14_PM_k6pumf.png)

在处理应该可以访问相同属性的对象时，原型模式非常强大。我们可以简单地将属性添加到原型中，而不是每次都创建属性的副本，因为所有实例都可以访问原型对象。

由于所有实例都可以访问原型，因此即使在创建实例之后也很容易向原型添加属性。

说我们的狗不仅应该会叫，还应该会玩！我们可以通过向`play`原型添加属性来实现这一点。

**原型链**一词表明可能有不止一个步骤。的确！到目前为止，我们只看到了如何访问在第一个`__proto__`具有引用的对象上直接可用的属性。然而，原型本身也有一个`__proto__`对象！

让我们创造另一种狗，超级狗！这只狗应该继承了普通狗的一切`Dog`，但它也应该会飞。我们可以通过扩展`Dog`类并添加`fly`方法来创建超级狗。

```js
class SuperDog extends Dog {
  constructor(name) {
    super(name)
  }

  fly() {
    return 'Flying!'
  }
}
```

让我们创建一个名为 的会飞的狗`Daisy`，让她叫起来飞！

`bark`当我们扩展`Dog`类时，我们可以访问该方法。`__proto__`原型上的值`SuperDog`指向`Dog.prototype`对象！

![流动](./Screen_Shot_2020-12-24_at_1.09.36_PM_isgkmt.png)

很清楚为什么它被称为  _原型链_ ：当我们尝试访问对象上不直接可用的属性时，JavaScript 会递归地遍历所有`__proto__`指向的对象，直到找到该属性！

* * *

## Object.create

该`Object.create`方法允许我们创建一个新对象，我们可以将其原型的值显式传递给该对象。

```js
const dog = {
  bark() {
    return `Woof!`
  },
}

const pet1 = Object.create(dog)
```

虽然`pet1`它本身没有任何属性，但它确实可以访问其原型链上的属性！由于我们将`dog`对象作为`pet1`的原型传递，因此我们可以访问该`bark`属性。

`Object.create`是一种让对象直接从其他对象继承属性的简单方法，通过指定新创建对象的原型。新对象可以通过原型链访问新属性。

* * *

原型模式允许我们轻松地让对象访问和继承其他对象的属性。由于原型链允许我们访问不是直接在对象本身上定义的属性，我们可以避免方法和属性的重复，从而减少使用的内存量。

* * *

### 参考

* [Object.create - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
* [原型 - ECMA](https://www.ecma-international.org/ecma-262/5.1/#sec-4.3.5)
