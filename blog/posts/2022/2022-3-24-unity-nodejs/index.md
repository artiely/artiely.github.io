---
tag:
  - unity
  - nodejs
cover: /2022-05-10-18-45-48.png
tinyCover: /cover/2022-05-10-18-45-48.png
coverWidth: 564
coverHeight: 1001

---

# Unity+nodejs

## 背景

在做一个B站直播类弹幕互动小游戏类似【修勾夜店】

抓取弹幕的服务是用nodejs写的，游戏是用unity制作的。因为是直播所有不需要用到服务，就是在本地通过websocket通讯。但是每次都得先起一个node程序来抓弹幕，于是我就想能不能把这个程序直接写到unity程序里。但是要是用CS 的生态来替换nodejs的那套生态理论上是行的，但是时间成本比较大。于是我就找有没有可以再unity里实现nodejs服务的。还真有

<https://github.com/Tencent/puerts>

## 实践过程

把实践中遇到的坑总结一下

### 第一步

将仓库克隆到本地

```bash
https://github.com/Tencent/puerts.git
```

如果和克隆不成功可以修改镜像和直接下载zip包

### 第二步

拷贝puerts/unity/Assets下的所有内容到您项目的Assets目录下

### 第三步

Plugins要单独下载[releases](https://github.com/Tencent/puerts/releases)

选择nodejs的包下载解压放到Assets/Plugins目录下

至此准备工作已经完成

### 第四步

开始编写代码，在你的CS 脚本中

```cs 
using Puerts;
//...
void Start()
    {
        jsEnv = new JsEnv();
        if (PuertsDLL.GetLibBackend() == 1)
        {
            jsEnv.Eval(
                 @"
             const http = require('http');
             http.createServer((req, res)=> { res.writeHead(200);res.end('helloworld') }).listen(9223);
                 ");
        }
        else
        {
            UnityEngine.Debug.LogError("NodeBackend is not supported");
        }
}
```

这样就启动了一个node服务，你可以再浏览器中输入<http://localhost:9223/> 你会看到helloworl。

> maOS10.15以上,启动unity的时候提示puerts.bundle损坏,移动到废纸篓

如果你在运行的时候遇到提示

在Plugins文件下也就是和puerts.bundle同级目录执行

```bash
sudo xattr -r -d com.apple.quarantine puerts.bundle
```

到此项目运行起来了。有点小激动

### 第五步

桥接强大的nodejs生态

首先我们不会把所有的代码写在字符串中，而是直接应用写好的js文件

可以在你的项目中新建Resources文件来管理js内容

可以像平时一样写你的js代码，但是文件后缀是.js.txt

例如上面的代码可以改写为

main.js.txt

```js
const http = require('http')
http.createServer((req, res) => { res.writeHead(200); res.end('helloworld') }).listen(9223)
```

?.cs 直接如下调用就行

```cs 
jsEnv.Eval(
                 @"
             require('main')
                 ");
```

但是到此我们也只使用了nodejs自带模块，如何应用第三方模块呢？他并不像引用自带模块那么简单，但是知道后也不难

### 第七步

我们将node_modules安装在我们刚建立的Resources文件下,并安装一个express模块

```bash
cd Rescoucres
npm init -y
npm i express
```

如何引用呢?实现如下方法。该方法可以定义在上层全局。

```cs 
const moduleRequire = require('module').createRequire('" + Application.dataPath + @"/PK/Resources/')
```

引入express

```js
const express = moduleRequire('express')
```

更完整的代码：

```cs 
jsEnv.Eval(@"
                const moduleRequire = require('module').createRequire('" + Application.dataPath + @"/PK/Resources/')
                require('main')
            ");
```

> 注意
>
> ```cs 
> void Update()
>     {
>         if (jsEnv != null) {
>             jsEnv.Tick();
>         }
>       }
> ```
>
> ```cs 
> private void OnDestroy()
>     {
>         jsEnv.Dispose();
>     }
> ```
>
>

你可以再main.js.txt中引入任何nodejs第三方模块来实现你的逻辑，我在此实现的就是抓弹幕的需求。这样在游戏启动后就能在后台有个服务用于抓取弹幕实时推送给前台游戏Unity。

### 2022年03月25日11:44:41 更新

昨天说的将node_modules放在Resources下在打包的时候会出现问题

> Resources文件夹允许你在脚本中通过文件路径和名称来访问资源。但还是推荐使用直接引用来访问资源。
> 放在这一文件夹的资源永远被包含进build中，即使它没有被使用。因为Unity无法判断脚本有没有访问了其中的资源。
> 项目中可以有多个Resources文件夹，因此不建议在多个文件夹中放同名的资源。
> 一旦build游戏，Resources文件夹中的所有资源被打包进游戏存放资源的archive中。这样在游戏的build中就不存在Resources文件夹了。即使脚本中仍然使用了资源在项目中的路径。参考 <http://docs.unity3d.com/Documentation/Manual/LoadingResourcesatRuntime.html>
> 注意：当资源作为脚本变量被访问时，这些资源在脚本被实例化后就被加载进内存。如果资源太大，你可能不希望它被这样加载。那么你可以将这些大资源放进Resources文件夹中，通过Resources.Load来加载。当不再使用这些资源了，可以通过Destroy物体，再调用Resources.UnloadUnusedAssets来释放内存。

### StreamingAssets

这里的文件会被拷贝到build文件夹中，不会修改（移动和网页版不同，他们会被嵌入到最终build文件中）。它们的路径会因平台而有差异，但都可以通过Application.streamingAssetsPath来访问。
参考<http://docs.unity3d.com/Documentation/Manual/StreamingAssets.html和http://docs.unity3d.com/Documentation/ScriptReference/Application-streamingAssetsPath.html>。

### 解决

所以最终的解决方案试将Resources下的node_module,package.json移动到StreamingAssets文件夹下并修改moudleRequire如下

```cs 
const moduleRequire = require('module').createRequire('" + Application.streamingAssetsPath + @"/Resources/')
```
