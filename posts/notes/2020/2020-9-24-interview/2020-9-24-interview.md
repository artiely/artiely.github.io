---
title: 面试问题总结
tag:
  - javaScript
cover: /2022-05-13-13-29-56.png
base64: 3f5d5e
author: artiely
date: 2020-9-24
tinyCover: /cover/2022-05-13-13-29-56.png
coverWidth: 564
coverHeight: 1002
coverPrimary: 0b596b
coverSecondary: f4a694

---




最近参加了一些面试，凭借着自己的记忆把还记得住的问题做一个归纳总结和个人观点。暂时不写答案，大家可以自己答一答，再找我要答案。

### 笔试和问答

```js
// 说出一下代码执行结果，为什么？
console.log('script start');
setTimeout(function(){
  console.log('settimeout')
});
let promise1 = new Promise(function (resolve) {
  console.log('promise1')
  resolve()
  console.log('promise1 end')
}).then(function () {
  console.log('promise2')
});
console.log('script end');



// 请将数组array中的重复项去除，并按照升序排序 三种以上的方式
let array = [1,2,1,3,2,1,3,5,7,23,8,23,45,102,23];

// 注释标明执行结果
async function async1(){
  console.log('async1 start');
  await async2();
  console.log('async1 end')
}
async function async2(){
  console.log('async2')
}

console.log('script start');
async1();
console.log('script end')



// 实现函数sum([1,2,3,4,5]), 返回所有参数相加的结果


//  实现 www.baidu.com?name=tanjei&age=18 转换为 {name:tanjie,age:18}

// 实现一个localstorage的api

// 手写map,reduce （直接挂）

// 手写promise

// 手写bind

// 简化如下代码

function func(c){
  var a = 1
  var b = 2
  var d = a + b
  return d + c + d
}

// 获取字符串中标签的属性值，尽可能多的方案

var str = `<img src="http:www.baidu.com/images/01.png">`

// vuex的原理

// vue-router 的原理

// vue的原理

// v-model 语法糖的原理和实现

// 什么情况下会跨域

// 跨域的解决办法


// jsonp的原理及弊端


// webpack的loader和plugin的区别


// 如何优化webpack的打包速度

// flex相关问题

// css盒模型及转化 如何实现垂直居中

// vue的diff算法

// vue数据改变视图不改变的原因如何解决

// 缓存

// webpack的原理

// webpack中hash、chunkhash、contenthash区别

// webpack 优化项目有哪些手段

// eventloop


// 微任务和宏任务

// 回流与重绘 如何避免

// 长列表的方案

// 下列代码执行顺序
Promise.resolve().then(()=>{console.log(1)}).then(()=>{console.log(2)})
Promise.resolve().then(()=>{console.log(3)})
console.log('end)



//  get 与 post 的区别

// 为什么用 setTimeout 替代 setinterval

// 实现函数 让其依次执行
f1(next){
  setTimeout(()=>{
    next&&next()
  },100)
}
f2(next){
  setTimeout(()=>{
    next&&next()
  },100)
}
f3(next){
  setTimeout(()=>{
    next&&next()
  },100)
}
var F= eq(f1,f2,f3)
// f1->f2>f3


// 下列代码的执行结果

Promise.resolve(1).then(Promise.resolve(2)).then(3).then(()=>4).then(console.log)
Promise.resolve(1).then(()=>2).then(Promise.resolve(3)).then(console.log)
// 下列代码的执行结果
let p1 = Promise.resolve(1)
let p2 = Promise.resolve(2)
let p3 = Promise.reject(3)
Promise.all([p1,p2,p3]).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})

// 上题衍生问题如何让结果走then
// 衍生问题：首页同时10个请求如何优化体验和性能
// 查找回文字符串 找出最长的 abccbaabcc
// 算法题和逻辑思维题都记不住了，也没特别难的。以上每个问题都会衍生很多的问题出来。也有些题记不住了。
// 前端安全 xss xsrf
// 如何实现跨域页面的数据传输
// css的选择器有哪些
// 常见的浏览器缓存及优缺点
// 异步编程的实现方式
// Promise是否可以先.finally()会如何执行
// js拖拽的实现
// 请使用闭包每秒打印1,2,3,4
// javascript继承的几种实现方式
// div水平垂直居中
// jsbridge用什么数据形式交互，如何处理大数据交互
// 还有些针对项目深问的问题在这就不提了。
```

### 开放题及软实力

```js
// 如何优化项目
// 浏览器输入地址回车后发生了什么
// 你做过最满意/印象深刻/最具挑战的事情是什么
// 如何做架构，有哪些职能
// 如何管理
// 团队如何协作，任务如何分配，进度出现问题如何处理
// 自我评价或用几个词概括自己
// 总结自己的优点和缺点
// 个人的职业规划
// 作为空降的管理如何处理老员工的关系
```

## 避坑

### 面试者自身应该注意的点

我也面试过很多的人，所以以下大家需要注重一点。

1. 形象：这里不是说你得长的多帅，起码得衣着整洁干净，看起来精神。面试的过程中切忌抖腿等过多的小动作，声音要明亮。
2. 态度：谦虚有礼，经常遇到候选人表现得自己什么都懂什么都会什么都瞧不上，以为这样可以显得自己牛逼？可是，没有谁喜欢和咄咄逼人的人共事啊，你这么牛逼根本不应该来这里。即使你觉得这面试官不咋滴，也要保证自己的修养先。遇到面试官平易近人，没有架子的，也不要和面试官套近乎。也不必表现的卑微。
3. 表达：让候选人介绍一下以往经历，很多候选人都讲不清自己做过什么，那将来一起共事怎么交流？
4. 思考有体会：让候选人说一下以往工作经历的体会，如果能够讲出个子丑寅卯，说明这个候选人能够独立思考，不是当一天和尚撞一天钟。
5. 注重实干的：嘴炮谁都会，实干才是本事，让候选人来实操一件事情，看他会不会。
6. 能适应新的问题：很多候选人只能做自己曾经做过的事情，永远逃不出以前的影子，你给他一个全新的问题，他就懵了，说来说去都是拿以前的方法来套用现在的问题，要是能解出来也好，往往因为思维受限，就是解不出来。相反，对于即使没有遇到过的问题，也能有一个恰当的思路，即使最后解法不完美，也会给人深刻印象。要知道，世界上没有任何两个工作是完全相同的，如果不能快速适应新工作的挑战，那代表这个人很迟钝，无法快速进步。
7. 以往工作经历的亮点：自己有真材实料才是硬道理。

### 通过面试官看一家公司或企业

1. 形象： 在你没进入一家公司之前，你唯一可以接触到的人就是人事和面试官。他们也是公司的一个名片或侧面。面试官萎靡不振，人事沟通没耐心的，都可以从侧面反映出这家公司的问题。
2. 态度： 他们对你的态度也可以看出这家公司的态度，是否给予你足够的尊重很重要。给你的尊重也是他们对自己的尊重。群面的不用考虑，或者你过去发现约了几十人在那等着面试的。自备打印简历虽然是你自己应该准备的，但是公司能否提前打印你的简历也可以看出他们是否真的有提前了解你。简历都不能打印的是 HR 有问题或者公司文化有问题。
   他如果对你敷衍了事就认为你可以入职，那我建议你不用去，其他的员工可能也是这么进去的，里面可能是乌合之众。至少他们要对有个全面的了解。这个过程中你也应该对他们有全面的了解。
   有几种典型的场景：1. 早早的让你去，去了之后在那干等，2. 填写一大堆的表格和各种测试题目。
3. 交流：如果面试官对你没有耐心或者不愿引导你思考给出答案，要么他自己不会，要么不好交流。不过一般 hr 会在你面试结果后找你要面试的反馈结果，包括对面试官的评价。一个正常的技术面试一般在一个小时左右。太短要么你不行，要么他不行。
4. 实干：如果面试官各种 diss 你，秀优越你也不用考虑，大多不是实干派。

祝大家少踩坑，早日飞黄腾达。
