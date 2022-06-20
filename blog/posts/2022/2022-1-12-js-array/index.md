---
title: 从零实现流行的 JavaScript 方法
tag: js
cover: /2022-05-11-09-14-17.png
tinyCover: /cover/2022-05-11-09-14-17.png
coverWidth: 564
coverHeight: 939

---


## 介绍

在本文中，分享最流行的 JavaScript 方法，但都是从零开始实现的。  
对提升编码能力，理解源码能力有一定提升。这只是其工作原理的简单版本，ECMAScript 中指定的实际方法要复杂得多。

本文提到的方法有：  

`map, reduce, filter, sort, every, includes, slice, splice, shift, indexOf.`  

在实现前先理解以上方法的api和使用

## map

```js
const fakeMap = function(callback) {
  const newArray = []

  // 'this' refers to the array
  for (let i = 0; i < this.length; i++)
    newArray[i] = callback(this[i], i)

  return newArray
}
Array.prototype.fakeMap = fakeMap;

[1, 2, 3].fakeMap(n => n + 1) // output [2, 3, 4]
```

## reduce

```js
const fakeReduce = function(callback, accumulator) {
  for (let i = 0; i < this.length; i++)
    accumulator = callback(accumulator, this[i])

  return accumulator
}
Array.prototype.fakeReduce = fakeReduce

const reducer = (previousValue, currentValue) => previousValue + currentValue;

[1, 2, 3].fakeReduce(reducer, 0) // output 6
```

## filter

```js
const fakeFilter = function(callback) {
  const newArray = []

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]))
      newArray.push(this[i])

  }

  return newArray
}

Array.prototype.fakeFilter = fakeFilter;

[1, 2, 3, 4, 5].fakeFilter(n => n > 2) // output [3, 4, 5]
```

## sort

```js
const fakeSort = function(callback) {
  const newArray = [...this]

  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray.length - 1; j++) {
      if (callback(newArray[j], newArray[j + 1]) > 0) {
        const temp = newArray[j + 1]
        newArray[j + 1] = newArray[j]
        newArray[j] = temp
      }
    }
  }

  // array is sorted
  return newArray
}

Array.prototype.fakeSort = fakeSort;

[3, 5, 1, 4, 2].fakeSort((a, b) => a - b) // output [1, 2, 3, 4, 5]
```

## every

```js
const fakeEvery = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i]))
      return false

  }

  return true
}

Array.prototype.fakeEvery = fakeEvery;

[1, 2, 3, 4, 5].fakeEvery(n => n > 3) // output false
```

## includes

```js
const fakeIncludes = function(item) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === item)
      return true

  }

  return false
}

Array.prototype.fakeIncludes = fakeIncludes;

[1, 2, 3, 4, 5].fakeIncludes(5) // output true
```

## slice

```js
const fakeSlice = function(start, end) {
  const newArray = []
  if (!end) {
    for (let i = 0; i < this.length; i++) {
      if (i >= start)
        newArray.push(this[i])

    }

    return newArray
  }

  for (let i = 0; i < this.length; i++) {
    if (i >= start && i <= end)
      newArray.push(this[i])

  }
  return newArray
}

Array.prototype.fakeSlice = fakeSlice;

[1, 2, 3, 4, 5].fakeSlice(2, 3) // output [3, 4]
```

## splice

```js
const fakeSplice = function(start, deleteCount, ...items) {
  let newArray = []

  // if we only provide start fakeSplice(start)
  if (!deleteCount) {
    for (let i = 0; i < this.length; i++) {
      if (i < start)
        newArray.push(this[i])

    }
    this.length = 0
    this.push.apply(this, newArray)
    return
  }

  // if we only provide start and deleteCount fakeSplice(start, deleteCount)
  if (!items) {
    for (let i = 0; i < this.length; i++) {
      if (i < start || i >= start + deleteCount)
        newArray.push(this[i])

    }

    this.length = 0
    this.push.apply(this, newArray)
    return
  }

  // if we provide all arguments to the function
  for (let i = 0; i < this.length; i++) {
    if (i === start + deleteCount)
      newArray = [...newArray, ...items]

    if (i < start || i >= start + deleteCount)
      newArray.push(this[i])

  }

  this.length = 0
  this.push.apply(this, newArray)

}

Array.prototype.fakeSplice = fakeSplice

const planets = [
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus',
  'Neptune',
]
planets.fakeSplice(2, 2, 'Pluto')
console.log(planets) // output ["Mercury", "Venus", "Pluto", "Jupiter", "Saturn", "Uranus", "Neptune"]
```

## shift

```js
const fakeShift = function() {
  const newArray = []

  for (let i = 1; i < this.length; i++)
    newArray.push(this[i])

  this.length = 0
  this.push.apply(this, newArray)
}

Array.prototype.fakeShift = fakeShift
const arr = [1, 2, 3, 4, 5]

arr.fakeShift()
console.log(arr) // output [2, 3, 4, 5]
```

## indexOf

```js
const fakeIndexOf = function(item) {
  for (let i = 0; i < this.length; i++) {
    if (item === this[i])
      return i

  }
  return -1
}

Array.prototype.fakeIndexOf = fakeIndexOf;

[1, 2, 3, 4, 5].fakeIndexOf(4) // output 3
```

## 结论

我们刚刚在 JavaScript 中实现了最常用的方法，并更好地了解了它们的工作原理，以便我们可以更有效地使用它们。

> plurality should not be posited without necessity. 如无必要，勿增实体。
