---
title: Vuecli3+发布组件库到npm
tag:
  - vue-cli
  - vue
  - npm
cover: /2022-05-14-21-59-39.png
date: 2019-4-16
base64: ca3838
tinyCover: /cover/2022-05-14-21-59-39.png
coverWidth: 658
coverHeight: 1170
coverPrimary: 2e2c2b
coverSecondary: d1d3d4

---


# Vuecli3+发布组件库到npm

## 创建项目
```shell
vue create my-plugin
```

## 调整目录
我们需要一个目录存放组件，一个目录存放示例，按照以下方式对目录进行改造。
```shell
|-- src      
|-- packages      // 新增 packages 用于编写存放组件
```

## 配置项目以支持新的目录结构
我们通过上一步的目录改造后，会遇到两个问题。

- 新增packages目录，该目录未加入webpack编译
- 新增packages目录, 需要编译的入口增加

::: tip
cli3 提供一个可选的 vue.config.js 配置文件。如果这个文件存在则他会被自动加载，所有的对项目和webpack的配置，都在这个文件中
:::

## 重新配置入口，修改配置中的 pages 选项
新版 Vue CLI 支持使用 vue.config.js 中的 pages 选项构建一个多页面的应用。
```js
module.exports = {
  // 修改 src 目录 为 examples 目录
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
}
```

## 支持对 packages 目录的处理，修改配置中的 chainWebpack 选项
packages 是我们新增的一个目录，默认是不被 webpack 处理的，所以需要添加配置对该目录的支持。

chainWebpack 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
```js
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: (config) => {
    config.module
      .rule('js')
      .include
      .add(/packages/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap((options) => {
        // 修改它的选项...
        return options
      })
  },
}
```
:::warning
`.add(/packages/)`必须使用正则模式
:::

## 编写组件
这里根据你的需求只有发挥组件的功能

如果是组件库，每个组件可以单独分一个文件夹
结构如下
```shell
├──my-plugin01
│ ├──index.vue
│ ├──index.js
├──my-plugin02
│ ├──index.vue
│ ├──index.js
```
index.js
```js
// 导入组件，组件必须声明 name
import myPlugin01 from './index.vue'

// 为组件提供 install 安装方法，供按需引入
myPlugin01.install = function(Vue) {
  Vue.component(myPlugin01.name, myPlugin01)
}

// 默认导出组件
export default myPlugin01
```
## 整合所有的组件，对外导出，即一个完整的组件库
修改 `/packages/index.js` 文件，对整个组件库进行导出。
```js
// 导入颜色选择器组件
import myPlugin01 from './my-plugin01'

// 存储组件列表
const components = [
  myPlugin01,
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue)
  install(window.Vue)

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  myPlugin01,
}
```

## 编写示例
在示例中导入组件库
```js
import Vue from 'vue'
import App from './App.vue'

// 导入组件库
import MyPlugin from './../packages/index'
// 注册组件库
Vue.use(MyPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```
## 发布到 npm，方便直接在项目中引用
到此为止我们一个完整的组件库已经开发完成了，接下来就是发布到 npm 以供后期使用

### package.json 中新增一条编译为库的命令
在库模式中，Vue是外置的，这意味着即使在代码中引入了 Vue，打包后的文件也是不包含Vue的。

以下我们在 `scripts` 中新增一条命令 `npm run lib`

- `--target`: 构建目标，默认为应用模式。这里修改为 `lib` 启用库模式。还有一种`wc`模式
- `--dest` : 输出目录，默认 `dist`。这里我们改成 `lib`
- `[entry]`: 最后一个参数为入口文件，默认为 `src/App.vue`。这里我们指定编译 `packages/` 组件库目录。
```json
"scripts": {
    // ...
    "lib": "vue-cli-service build --target lib --name vcolorpicker --dest lib packages/index.js"
}
```
执行编译库命令

```shell
npm run lib
```
生成的文件

- `dist/my-plugin01.common.js`：一个给打包器用的 CommonJS 包 (不幸的是，webpack 目前还并没有支持 ES modules 输出格式的包)

- `dist/my-plugin01.umd.js`：一个直接给浏览器或 AMD loader 使用的 UMD 包

- `dist/my-plugin01.umd.min.js`：压缩后的 UMD 构建版本

- `dist/my-plugin01.css`：提取出来的 CSS 文件 (可以通过在 `vue.config.js` 中设置 `css: { extract: false } `强制内联)



### 配置 `package.json` 文件中发布到 npm 的字段
- `name`: 包名，该名字是唯一的。可在 npm 官网搜索名字，如果存在则需换个名字。
- `version`: 版本号，每次发布至 npm 需要修改版本号，不能和历史版本号相同。
- `description`: 描述。
- `main`: 入口文件，该字段需指向我们最终编译后的包文件。
- `keyword`：关键字，数组以逗号分离希望用户最终搜索的词。
- `author`：作者
- `private`：是否私有，需要修改为 `false` 才能发布到 npm
- `license`： 开源协议

### 添加 `.npmignore` 文件，设置忽略发布文件
我们发布到 npm 中，只有编译后的 lib 目录、package.json、README.md才是需要被发布的。所以我们需要设置忽略目录和文件。

参考
```shell
# 忽略目录
components/
src/
dist/
public/
docs/
docs/
node_modules
.history

# 忽略指定文件
vue.config.js
babel.config.js
*.map
.editorconfig
.browserslistrc
.eslintrc
.gitignore
deploy.sh
package-lock.json
```
### 登录到 npm
首先需要到 npm 上注册一个账号，注册过程略。

如果配置了淘宝镜像，先设置回npm镜像：
```shell
npm config set registry http://registry.npmjs.org 
```
然后在终端执行登录命令，输入用户名、密码、邮箱即可登录。

```shell
npm login
```
### 发布到 npm
发布成功后你会立马收到来自npm的邮件，提示你发布成功，你也可以直接去官网搜索你发布的组件
:::tip
在发布你的插件的时候确保你的插件名在npm搜索不到，名称被占用是发布不成功的
:::

## 使用组件
安装
```shell
npm i my-plugin01
```
使用
```js
// 在 main.js 引入并注册
import MyPlugin01 from 'my-plugin01'
Vue.use(MyPlugin01)
```
