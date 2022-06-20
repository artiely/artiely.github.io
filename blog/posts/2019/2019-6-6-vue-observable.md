---
title: vue observable api 初应用
tag:
  - vue
  - observable
author: Artiely
date: 2019-6-6
cover: /2022-05-14-22-02-24.png
base64: 404040
tinyCover: /cover/2022-05-14-22-02-24.png
coverWidth: 735
coverHeight: 1040
coverPrimary: e5d5d4
coverSecondary: 1a2a2b

---


# vue 列表的按需刷新
在vue 2.6.0 新增了一个api `observable` 可实现全局的数据相应，一定程度上可以取代vuex
所以我在项目中第一次使用了他，
我们的业务场景是这样的，一个订单列表，可以无限下拉，假如：我下拉了 3 页，点击一个订单可以进入详情，在详情里可以改变订单的状态，但是从详情返回的时候列表应该刷新到第一页才能看到状态的改变【前提是后端排序是按更新时间】，但也不能每次从详情返回都刷新列表，因为我可能只是查看了详情，并没有改变订单的状态，这个时候返回订单列表应该在我进入详情时的位置（也就是第三页）并且没有刷新。

简述为： 列表进详情有操作返回刷新，无操作返回不刷新。

我们通过路由钩子监听当前从哪个页面来;伪代码如下：

```js {5}
beforeRouteEnter(to, from, next) {
    next(vm => {
      if (
        from.path === '/index' ||
        from.path === '/detail' ||
        from.name === null
      ) {
        vm.query.pageNo = 1
        vm.getData()
      }
    })
  },

```

以上代码只能是要么回来刷新要么不刷新，我们只需要知道用户进入详情是否做了对应的操作，就可以判断回来是否需要刷新

## Vue.observable 的应用

## 参数

`{Object} object`

## 用法

让一个对象可响应。Vue 内部会用它来处理 data 函数返回的对象。
返回的对象可以直接用于渲染函数和计算属性内，并且会在发生改变时触发相应的更新。也可以作为最小化的跨组件状态存储器，用于简单的场景：

```js
const state = Vue.observable({ count: 0 })

const Demo = {
  render(h) {
    return h(
      'button',
      {
        on: {
          click: () => {
            state.count++
          },
        },
      },
      `count is: ${state.count}`,
    )
  },
}
```

个人认为这个一个在未来有能力取代 vuex 的 api
他不存在命名空间，可以作为独立的模块，并且是响应式的

新建一个`refresh.js`管理所有的页面返回是否刷新的状态

```js
/**
 * 放所有的返回操作需要刷新的
 * 参数为路由path的驼峰+refresh
 */
import Vue from 'vue'
const refresh = Vue.observable({ cardAddRefresh: false })
export default refresh
```

在详情页

```js
import refresh from '@/refresh'
// 有操作的回调里修改刷新状态
refresh.cardAddRefresh = true
```

在列表里

```js {6}
import refresh from '@/refresh'
beforeRouteEnter(to, from, next) {
  next(vm => {
    if (
      from.path === '/index' ||
      (from.path === '/card-add' && refresh.cardAddRefresh) ||
      from.name === null
    ) {
      vm.query.pageNo = 1
      vm.getData()
    }
  })
},

```

这样在进入列表时候就知道是否该刷新了
