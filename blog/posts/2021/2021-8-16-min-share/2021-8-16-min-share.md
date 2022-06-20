---
title: 小程序分享另类实践
tag:
  - js
  - mini
  - taro
author: Artiely
date: 2021-8-16
cover: /2022-05-11-10-01-15.png
base64: fafafa
password: true
tinyCover: /cover/2022-05-11-10-01-15.png
coverWidth: 564
coverHeight: 846
coverPrimary: 608d8f
coverSecondary: 9f7270

---


该方法的好处是你不用关心分享以后的逻辑，也就是说你不用去管理 接受分享的用户进来要处理是否登录，是否已经绑定等等，这些逻辑都是在分享的时候就定义好了。不会导致分享逻辑散布在各处难以维护。
```js
/**
 * 分享包装
 * useHandleShare(params,callback)
 * params={
 *  title:string
 *  imageUrl:string
 *  path:string
 *  cb:fn
 *  query:{} 参数
 * }
 */
import Taro, { useShareAppMessage } from '@tarojs/taro'
import { urlStringify } from '@/libs/tools'
import Aes from '@/libs/aes'

export default function(params, cb) {
  useShareAppMessage((props) => {
    if (props.from === 'button') {
    }
    const _path = `${urlStringify(
      params.path || '/pages/index/index',
      params.query || {},
    )}${Object.keys(params.query).length ? '&' : '?'}cb=${Aes.encrypt(
      params.cb,
    )}`
    cb && cb(props, params)
    return {
      title: params.title,
      path: _path,
      imageUrl: params.imageUrl,
    }
  })

}
```

## 解析分享

入口文件`App.js` 调用

```js
/**
 * 分享逻辑解析
 * 解密密文并执行
 * 密文为对应的分享回调处理逻辑函数
 *
 */
import Taro, { useEffect, useRef, useRouter } from '@tarojs/taro'
import { Interpreter } from 'eval5'
import AppNavigator from '@/libs/appNavigator'
import Aes from '@/libs/aes'

export default () => {
  const { params } = useRouter()
  if (!params.cb) return
  const { current: context } = useRef(Object.create(null))
  useEffect(() => {
    // 基本方法注入
    const rootContext = {
      console,
      AppNavigator,
      Taro,
      console,
      setTimeout,
      clearTimeout,
      setInterval,
      clearInterval,
    }
    const SCRIPT_EXEC_TIMEOUT = 0
    const interpreter = new Interpreter(context, {
      timeout: SCRIPT_EXEC_TIMEOUT,
      rootContext,
      globalContextInFunction: context,
    })

    const originalText = Aes.decrypt(params.cb)
    try {
      interpreter.evaluate(originalText)
    }
    catch (error) {
      console.error(
        '🚀 ~ file: useHandleShare.js ~ line 46 ~ useEffect ~ error',
        error,
      )
    }
  }, [])

  return {}
}
```

## 使用

```js
import useShare from './useShareAppMessage'
const callback=`((props,params) =>{
  AppNavigator.push('/pages/detail',params.query)
})()`
useShare({
  title:'分享'
   imageUrl:'share.png'
   path:'pages/index'
   cb:callback
   query:{
     id:1, uid:1
   }
})
```
