---
title: vue管理系统从0到1-vue.config
tag:
  - vue
cover: /2022-05-13-12-20-26.png
base64: ef5559
date: 2020-6-5
tinyCover: /cover/2022-05-13-12-20-26.png
coverWidth: 564
coverHeight: 1002
coverPrimary: '111111'
coverSecondary: eeeeee

---


## 官网

[官网文档](https://cli.vuejs.org/zh/config/#vue-config-js)

## 将变量全局化

平时在定义css变量时总是得在每个页面去引用，这也太繁琐了，所以

```js
const path = require('path')
module.exports = {
  // https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader
  // 不是这个 https://www.npmjs.com/package/style-resources-loader
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/style/var.less')], // 引入全局样式变量
    },
  },
  // https://github.com/ant-design/ant-motion/issues/44
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
}
```

同时我们为了更方便引用这么多的文件夹，避免各种返回层级，我们添加一些alias

```diff
  const path = require('path')
+ function resolve(dir) {
+   return path.join(__dirname, dir)
+ }
  module.exports = {
    // https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader
    // 不是这个 https://www.npmjs.com/package/style-resources-loader
    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: [path.resolve(__dirname, './src/assets/style/var.less')], // 引入全局样式变量
      },
    },
    // https://github.com/ant-design/ant-motion/issues/44
    css: {
      loaderOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
+  configureWebpack: {
+    resolve: {
+      alias: {
+        '@': resolve('src'),
+        '@views': resolve('src/views'),
+        '@components': resolve('src/components'),
+        '@assets': resolve('src/assets'),
+        '@router': resolve('src/router'),
+        '@common': resolve('src/common'),
+        '@store': resolve('src/store'),
+        '@layout': resolve('src/layout'),
+        '@api': resolve('src/api'),
+        '@config': resolve('src/config'),
+      },
+    },
+  },
  }

```

### 题外话

当我们在写代码的时候或者使用插件的时候尽量留下插件出处，后期好维护和定位问题！

第三步！
