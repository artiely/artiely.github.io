---
title: GraphQL 介绍
tag:
  - graphQL
  - RESTful
author: Artiely
date: 2019-5-5
cover: /2022-05-14-22-00-00.png
base64: 16932
tinyCover: /cover/2022-05-14-22-00-00.png
coverWidth: 720
coverHeight: 1280
coverPrimary: 2a1c16
coverSecondary: d5e3e9

---


# GraphQL 介绍

## 接口开发方式

- RESTful
- GraphQL

## RESTful 接口问题

* 接口粒度比较细，很多场景需要调用多次请求才能完成一个功能
* 接口扩展、维护成本高
* 接口响应的数据格式无法预知（json已经成为主流格式）

## GraphQL概述

> GraphQL 既是一种用于 API 的查询语言，也是一个满足你数据查询的运行时。
> 
> 是一种接口开发标准，支持常见的服务端开发语言。例如：java、php、Python、Node.js......
> 
> 官网：https://graphql.cn/

## RESTful 和 GraphQL 对比

- RESTful特点
  - 接口粒度太细
  - 后期版本变更不方便，扩展维护成本高
- GraphQL特点
  - 精确获取需要的信息
  - 通过单个请求获取各种资源
  - 通过类型系统描述查询
  - 强大的调试工具

# GraphQL 快速体验

> GraphQL客户端与服务端交互（接口调用）

- 实现步骤
  
  - 一、服务端
    - 创建服务端项目目录
    - 初始化项目
      - npm init -y
    - 创建入口文件index.js
    - 安装依赖包
      - apollo-server-express
      - express
      - graphql
    - 复制官方案例代码到index.js
    - 运行该文件启动服务
  - 二、客户端
    - 通过访问<http://localhost:4000/graphql> 地址打开调试工具就可以进行接口测试
    - 在调试工具中进行查询测试
    - 获取测试结果

- 总结
  
  - 只有一个请求地址
  
  - 按需进行查询
  
  - 有特定的查询语法规则

# GraphQL服务端开发

## 基于Node.js的GraphQL的开发

- [GraphQL.js](<https://github.com/graphql/graphql-js/>)  GraphQL规范的JavaScript实现（服务端数据提供和客户端请求）
- [express](<https://github.com/graphql/express-graphql>)  基于express创建HTTP服务，内部依赖GraphQL.js
- [apollo-server](<https://github.com/apollographql/apollo-server>) GraphQL服务器实现（支持express、koa等多种Web框架）
  - express
  - koa
  - ......

## 基于apollo-server开发

> apollo-server 是一个实现了GraphQL 规范的框架，可以基于它快速开发基于GraphQL的服务端接口，并且方便客户端进行接口调用。

- 基本开发步骤(服务端)
  - 初始化服务端项目
    - 创建项目目录
    - 创建入口文件
    - 初始化项目 npm init -y
  - 安装依赖包
    - npm install apollo-server-express express graphql -S
  - 定义类型
  - 解析数据
  - 实例化apollo对象
  - 整合express并监听端口，提供Web服务

```js
// 导入相关的包
const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
// 定义类型
const typeDefs = gql`
  type Query {
    hello: String
  }
`
// 解析字段数据
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
}
// 整合ApolloServer和express
const server = new ApolloServer({ typeDefs, resolvers })
const app = express()
server.applyMiddleware({ app })
// 监听端口
app.listen({ port: 4000 }, () =>
  console.log(`running at http://localhost:4000${server.graphqlPath}`),
)
```

- 客户端

```shell
// 查询
query {
  hello
}
// 响应结果
{
  "data": {
    "hello": "world"
  }
}
```

- 细节分析
  - 服务器通过定义的数据类型规定了可以提供的各种形式的数据
  - 类型的字段要有对应的resolve提供对应的数据解析
  - 客户端可以根据服务端定义的数据类型选择性查询需要的字段信息

## 对象类型定义规则

### 对象类型定义与字段

> GraphQL提供一套完善的类型系统，可以约束服务端可以提供哪些数据类型供客户端查询使用

```shell
# 通过type关键字定义类型，type之后是类型名称（自定义名称）
type Course {
  cname: String
  score: Float
}
type Student {
  name: String
  scores: [Course]
}
```

- 注意事项
  - 花括号中是对象的字段信息
  - 属性名称是自定义的
  - 属性名后面的类型为标量类型（内置类型）
  - GraphQL使用#进行注释

### 基本参数

>  对象类型上的每一个字段都可能有零个或者多个参数，可以按照条件查询数据

```shell
type Query {
  hello: String
  # 定义字段参数，可以有默认值
  stu(n: Int = 12): Student
}
```

```shell
# 获取参数（通过resolver函数的第二个参数获取客户端传递的参数数据）
const resolvers = {
  Query: {
    stu: (obj, args) => {
      console.log(args)
    }
  },
};
```

```shell
{
  # 客户端字段参数传递
  stu(n: 13) {
    name
    age
  }
}
```

- 注意事项
  - 参数可以指定默认值，如果有默认值，那么参数就是可选的
  - 客户端参数通过resolver函数的第二个参数获取

### 内置类型

- 查询和变更类型

> 内置类型中有两个特殊的类型：Query和Mutation
> 
> 每一个GraphQL服务有右一个Query类型，也可能有一个Mutation类型，这两个类型本质上也是对象类型，只不过有一点区别：它们作为客户端访问的入口

- 标量类型
  - Int
  - Float
  - String
  - Boolean
  - ID 唯一标识符，不需要人类可度

> 标量类型用于表示基本的字段数据，表示查询数据的叶子节点

- 枚举类型

> 枚举类型是一种特殊的标量，它限制在一个特殊的可选值集合内。

```shell
enum Favour {
  SWIMING
  CODING
  SINGING
}
```

> 上述定义表示只能获取三种值之一，其他类型的值是不可以的

- 列表和非空
  - []表示列表
  - 叹号表示非空

```shell
type Student {
  name: String!
  scores: [Score!]!
}
```

> myField: [String!] 表示数组本身可以为空，但是其不能有任何空值成员
> 
> myField: [String]! 表示数组本身不能为空，但是其可以包含空值成员

### 输入类型

> 参数也可以是复杂类型，主要用于变更Mutation场景（需要客户端传递输入类型）

```shell
# 定义输入类型
input UserInput {
  uname: String
  pwd: String
}
```

> 定义Mutation，可以用于接收客户端传递的input类型数据

```shell
# 接收客户端传递的input类型参数
type Mutation {
  addUserByInput(userInput: UserInput): User
}
```

```shell
# 处理客户端传递的input参数
const resolvers = {
  Mutation: {
    addUserByInput: (obj, args) => {
      // args可以获取客户端传递的input类型数据
      return {
          id: 123,
        uname: args.uname,
        pwd: args.pwd
      }
    }
  }
}
```

```shell
# 客户端查询操作
mutation {
  addUserByInput(userInput: {
    uname: "lisi",
    pwd: "123"
  }) {
    id
    username
  }
}
```

- 注意事项
  - input类型主要用于变更操作的数据传递

## 数据解析规则详解

### resolver函数参数用法

> resolves用于给类型字段提供实际数据

- resolve函数参数
  - parent 上一级对象，如果字段属于根节点查询类型通常不会被使用。
  - `args` 可以提供在 GraphQL 查询中传入的参数。
  - `context` 会被提供给所有解析器，并且持有重要的上下文信息比如当前登入的用户或者数据库访问对象。
  - `info` 一个保存与当前查询相关的字段特定信息以及 schema 详细信息的值

```shell
// 服务端数据解析
const resolvers = {
  Query: {
    hello: () => "Hello World"
  },
  Mutation: {
    addInfo: (parent, args, context, info) => {
      // parent表示当前字段的父级对象
      console.log(parent);
      // args表示客户端传递过来的参数
      console.log(args);
      // context可以用于操作数据源
      console.log(context);
    },
  }
};
```

- parent 参数用法

```shell
// 类型定义
type Student {
  sname: String
  age: Int
}
// 数据解析
const resolvers = {
  Student: {
    // 提供字段的resolver函数，如果不提供，会默认生成
    sname: (parent) => {
      return parent.sname
    }
  },
  stu: (parent) => {
    return {
      sname: 'lisi',
      age: 12
    }
  }
};
```

- 注意事项
  - 通过resolver函数的第一个参数parent可以获取父级对象
  - 如果字段类型是标量类型，会有一个默认的resolver函数
  - 默认的resolver函数，返回父级对象的字段数据

### resolver函数对接数据源

> 通过context参数更加方便的对接数据源（数据库、文件、第三方接口），包括异步操作

- context基本用法

```shell
// context可以用于获取数据源对象
const context = () => {
  return {
    db: 'dbObj'
  }
}
const server = new ApolloServer({ typeDefs, resolvers, context });
```

```shell
// 在resolver函数中可以通过context对象操作数据源
const resolvers = {
  Query: {
    hello: (parent, args, context) => {
      // 通过context可以获取数据源操作对象
      let ret = context.db;
    }
  }
};
```

- 读取文件数据业务模块

```js
// db.js代码：从文件中读取数据，本质上与从数据库读取数据类似，都可以是异步操作
const path = require('path')
const fs = require('fs')
module.exports.getData = () => {
  const dataPath = path.join(__dirname, 'data.json')
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, (err, data) => {
      if (err)
        reject('error')

      resolve(data)
    })
  })
}
```

- 通过context获取数据源操作的对象

```js
// 从文件中读取数据作为数据源，db.getData()返回Promise实例对象
const db = require('./db.js')
const context = ({ req }) => {
  return { db }
}
const resolvers = {
  Query: {
    hello: async(obj, args, context, info) => {
      const ret = await context.db.getData()
      return ret
    },
  },
}
const server = new ApolloServer({ typeDefs, resolvers, context })
```

- 注意事项
  - context参数主要用于提供数据源相关对象，方便进行数据操作（数据获取与变更）

# GraphQL客户端开发

## 基本查询

> 按需获取需要的数据

```js
// 查询hero对象的name属性
{
  hero {
    name
  }
}
```

```js
// 查结果
{
  "data": {
    "hero": {
      "name": "lisi"
    }
  }
}
```

- 注意事项
  - GraphQL只有一个URL地址，客户端查询的所有信息都通过该地址获取数据
  - 可以更加需要按照实际的需求获取特定的数据

## 操作名称

> 有多个操作时，操作名称是必须的，为了调试的方便，推荐添加操作名

- 规则：操作类型  操作名称（操作名称自定义）

- 操作类型主要有如下两种
  
  - query 用于查询
  - mutation 用于变更操作（添加、修改、删除）

```js
# 查询名称
query helloInfo {
  hello
}
```

```js
# 变更名称
mutation addUser {
  addUser(userInput: {
    uname: "lisi",
    pwd: "123"
  }) {
    id
    username
  }
}
```

- 注意事项
  - 推荐所有的查询和变更操作添加操作名称

## 查询参数

> 有时候需要根据特定的条件查询数据，此时可以使用查询参数

```js
// 查询id是1，姓名是lisi的学生信息
query param {
  stu(id: 1, sname: "lisi") {
    sname
    age
    gender
  }
}
```

```js
// 查询结果
{
  "data": {
    "stu": {
      "sname": "lisi",
      "age": 12,
      "gender": true
    }
  }
}
```

- 注意事项
  - 查询字段可以携带参数，并且可以携带多个参数，参数之间通过逗号隔开

## 变量

> 有时字段的参数需要动态提供，而不是固定的值，此时可以使用变量，其实类似于函数中的形参

```js
# $id: Int （变量名称: 变量类型）
query param($id: Int, $num: Float) {
  stu(id: $id) {
    id 
    sname 
    scores(num: $num) {
      cname 
      score
    }
  }
}
// 分离的变量字典
{
  "id": 1,
  "num": 99
}
```

- 注意事项
  - 变量类型必须是标量、枚举型或者输入对象类型
  - 变量可以有默认值  ($id: Int = 1)

## 指令

> 有时候查询的字段数量不是固定的，此时可以通过指令的方式进行控制

- 两个指令
  - `@include(if: Boolean)` 仅在参数为 `true` 时，包含此字段。
  - `@skip(if: Boolean)` 如果参数为 `true`，跳过此字段。

```js
query param($id: Int, $gender: Boolean!) {
  stu(id: $id) {
    id 
    sname 
    gender @include(if: $gender) 
  }
}
```

```js
query param($id: Int, $gender: Boolean!) {
  stu(id: $id) {
    id 
    sname 
    gender @skip(if: $gender) 
  }
}
```

- 注意事项
  - 可以通过这两个指令动态控制查询的字段数量
  - 指令用到的变量定义时需要添加!，强制必须提供该值

## 别名

> 有时需要通过不同参数值查询相同字段信息，比如查询学生的数学和英语成绩

```json
query alias {
  stu {
    id
    sname
    math: scores(cname: "数学") {
      cname
      score
    },
    english: scores(cname: "英语") {
      cname
      score
    }
  }
}
// 上面的查询结果如下
{
  "data": {
    "stu": {
      "id": 1,
      "sname": "张三",
      "math": [
        {
          "cname": "数学",
          "score": 98.5
        }
      ],
      "english": [
        {
          "cname": "英语",
          "score": 99.5
        }
      ]
    }
  }
}
```

- 注意事项
  - 可以通过别名的方式获取特定某几项数据（查询结果的数据格式相同）

## 变更

> 改变服务器数据需要用到【变更】（mutation）操作

```shell
# 通过具体值方式传递参数
mutation addUserByParam {
  addUserByParam(uname: "lisi", pwd:"abc") {
    id
    uname
    pwd
  }
}
```

```shell
# 通过变量方式传递参数
mutation addUserByInput($userInput: UserInput) {
  addUserByInput(userInput: $userInput) {
    id
    uname
    pwd
  }
}
```

```shell
# 参数传递
{
  "userInput": {
    "uname": "lisi",
    "pwd": "123"
  }
}
```

- 注意事项
  - 通过mutation关键字实现变更操作
  - userInput变量并非标量，而是一个输入类型
  - 参数的传递可以通过普通参数，也可以使用输入类型，一般较为复杂的数据采用输入类型

# 留言板案例实战

## 项目业务分析与展示

- 留言列表展示效果
- 项目业务分析

## 服务端实现

- 初始化项目
- 类型定义
- 数据解析
  - 留言板信息
  - 友情链接信息
  - 天气预报信息
  - 添加留言功能

```shell
# 核心类型定义
type Data {
  weather: Weather
  link: [FriendlyLink]
  list: [Comment]
}
type Query {
  info: Data
}
type Mutation {
  createComment(input: CommentInput): Comment
}
```

### 对接数据源

- 对接评论信息数据源
- 对接友情链接数据源
- 对接天气数据源
- 实现数据源整合，完成响应数据的resolver函数功能

```shell
info: async (parent, args, context) => {
  // 调用数据源对象获取数据
  return {
    list: list,
    link: link,
    weather: weather
  }
}
```

## 客户端实现

- 初始化项目
- 实现布局效果
- 对接后台GraphQL接口（基于apollo-server客户端）

### apollo-server对接后台接口基本流程

1. 安装相关依赖包：npm install --save vue-apollo graphql apollo-boost
2. 配置Vue的apollo插件

```js
import Vue from 'vue'
import VueApollo from 'vue-apollo'
Vue.use(VueApollo)
```

3. 实例化apollo客户端对象

```js
import ApolloClient from 'apollo-boost'
const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
})
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})
```

4. 将apollo客户端实例对象挂载到Vue实例中

```js
new Vue({
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
```

5. 导入GraphQL相关api：import gql from 'graphql-tag';
6. 调用GraphQL后台接口

```js
// vue参数中配置查询逻辑
apollo: {
  info: {
    query: gql`
      query list {
        info {
          list {
            username
            content
            date
          }
        }
      }
    `
  }
},
data () {
  return {
    info: []
  }
}
```

### 完成页面数据展示

- 留言板信息
- 友情链接信息
- 天气信息

### 完成发送留言功能

- 表单数据绑定
- 发送按钮事件绑定
- 调用后台接口发送数据

```js
this.$apollo.mutate({
  mutation: gql`
    mutation createComment($commentInput: CommentInput) {
      createComment(commentInput: $commentInput) {
        username
        content
      }
    }
  `,
  variables: {
    commentInput: {
      username,
      content,
    },
  },
  refetchQueries: [{ query: QueryListTag }],
})
```
