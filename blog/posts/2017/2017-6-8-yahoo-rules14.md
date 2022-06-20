---
title: 雅虎性能优化的十四条规则
tag:
  - css
  - javaScript
author: Artiely
date: 2017-6-8
cover: /2022-05-14-21-23-27.png
base64: 602ad2
tinyCover: /cover/2022-05-14-21-23-27.png
coverWidth: 736
coverHeight: 1028
coverPrimary: '483235'
coverSecondary: b7cdca

---

# 雅虎性能优化的十四条规则

作为一位前端技术人员，了解网站的性能优化方面的知识是很基本的，但是我很惭愧我现在才了解到这一点T^T，以下是我学习yahoo性能优化十四条规则的笔记：

- __一、减少http请求次数__

如何减少http请求次数：

> - 组合页面中的图片到单个文件中，并使用css的background-image和background-position属性来实现所需部分的图片；
> - 组合多个脚本文件到单一文件中。意思就是：把页面中的多个css 或js文件合并在一个文件中。

减少http请求次数是性能优化的起点！对提高首次访问效率起到很重要的作用。

- __二、使用cdn（Content Delivery Network,内容分发网络）__

这条可以忽略之。。。。

- __三、增加expires header__

浏览器（和代理）使用缓存来减少http请求次数和大小，使得网页加速装载。

如何增加expires header

> - 如果是apache，可以使用expiresDefault基于当期日期来设置过期日期。
> - 记住：如果使用超长的过期时间，则当内容改变时，必须改变文件名称。
> - 版本号内嵌在文件名中，如：useless_1.0.0.js.

- __四、压缩页面元素__

压缩http响应内容可以减少页面响应时间，同时，对尽量度的文件类型进行压缩是一种减少页面大小和提高用户体验的简便方法。

通过Accept-Encoding头来表明支持的压缩类型，如：

`Accept-Encoding: gzip,deflate`

PS:这个可以忽略，因为一般浏览器都支持gzip之类压缩，然后服务端前端这边不用管。

- __五、把样式表放在头上__

把样式表移到head中，可以提高界面的加载速度，因此这使得页面元素可以顺序显示。

原因： 避免空白屏幕或闪烁的问题。

- __六、把脚本文件放在底部__

尽量把脚本文件放在页面底部，好处就是，一能顺序显示，二可达到最大的并行下载。

- __七、避免css表达式__

css表达式是强大的（同时也是危险的）用于动态设置css属性的方式。ie，从版本5开始支持css表达式。

所谓的表达式是，看例子：

`expression((new Date()).getHours()%2?"#B8D4FF":"#F08A00")`,即背景色每个小时切换一次。

ps：一般很少用css表达式

- __八、把js和css放到外部文件中__

> - 使用外部文件会加快页面显示速度，因为外部文件会被浏览器缓存。
> - 内置的js和css在页面中虽然会减少http请求次数，但是增大了页面的大小。
> - 使用外部文件，会被浏览器缓存，则页面大小会减小，同时又不增加http请求次数。

- __九、减少DNS查询次数__

这个不说明，了解下，这主要是服务端的优化

- __十、最小化js代码__

最小化js代码是指在js代码中删除不必要的字符，从而降低下载时间。

ps:其实就是压缩js。

- __十一、避免重定向__

重定向功能是通过301和302这两个http状态码完成的，如：

> - `HTTP/1.1 301 Moved Permanently`
> - `Location:http://example.com/newuri`
> - `Content-Type:text/html`

ps：没用过这个

- __十二、删除重复的脚本文件__

在一个页面中包含重复的js脚本会影响性能，即它会建立不必要的http请求和额外的js执行。

- __十三、配置etags__

忽略吧。。。。

- __十四、缓存ajax__

提高ajax的性能最重要的方式是使得其response可缓存。

学习链接如下：

> - [https://developer.yahoo.com/performance/rules.html](https://developer.yahoo.com/performance/rules.html)
> - [http://3y.uu456.com/bp-58a2922f647d27284b73512a-2.html](http://3y.uu456.com/bp-58a2922f647d27284b73512a-2.html)
> - [http://fex.baidu.com/blog/2014/03/fis-optimize/](http://fex.baidu.com/blog/2014/03/fis-optimize/)































