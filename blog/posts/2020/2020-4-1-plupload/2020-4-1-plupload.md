---
tag:
  - plupload
cover: /2022-05-13-12-12-47.png
date: 2020-4-1
base64: 03a6e1
tinyCover: /cover/2022-05-13-12-12-47.png
coverWidth: 564
coverHeight: 705
coverPrimary: a23d34
coverSecondary: 5dc2cb

---
# plupload中文文档整理

 项目中用到改上传插件，因此抽了一晚上事件把列子和文档看了一下，翻译过来，如有错误的翻译请帮助我一起纠正谢谢。

**介绍：**

Plupload是有TinyMCE的开发者开发的，为您的内容管理系统或是类似上传程序提供一个高度可用的上传插件。Plupload 目前分为一个核心API 和一个jQuery上传队列部件，这样使你可以直接使用或是自己定制。

**特性：**

注释：1、gears：[http://zh.wikipedia.org/wiki/Gears](https://zh.wikipedia.org/wiki/Gears)

           2、Silverlight：[http://zh.wikipedia.org/wiki/Silverlight](https://zh.wikipedia.org/wiki/Silverlight)

           3、browserplus: <http://developer.yahoo.com/browserplus/>

注意：1、分块:chrome和firefox 4+ 支持。

          2、拖拽适用于firefox和webkit内核的浏览器，windows版的safari还存在一些问题待解决。

          3、图片缩放仅在firefox3.5+和chrome上支持，safari/opera 不支持直接数据访问选定的文件。

          4、目前所有的浏览器不支持文件类型过滤。但是，我们填写HTML5的接受文件类型过滤属性，一旦有支持它会工作。

         5、 多文件上传仅支持gecko和webkit内核的浏览器。

**配置文档说明：**

Browse\_button:触发浏览文件按钮标签的唯一id,,在flash、html5、和silverlight中能找到触发事件的源（我理解的，这个参数在队列部件不需要[参见](<https://www.cnblogs.com/God-Shell/admin/ http:/plupload.com/example_queuewidget.php>)）

Container: 展现上传文件列表的容器，\[默认是body\]

chunk\_size：当上传文件大于服务器接收端文件大小限制的时候，可以分多次请求发给服务器，如果不需要从设置中移出

drop\_element：当浏览器支持拖拽的情况下，能够文件拖放到你想要的容器ID里

file\_data\_name：设置上传字段的名称。默认情况下被设置为文件。（我试验了没找到该如何使用它，暂且不提）

filters:选择文件扩展名的过滤器,每个过滤规则中只有title和ext两项\[\{title:'', extensions:''\}\]

flash\_swf\_url:flash文件地址

headers：自定义的插入http请求的键值对

max\_file\_size：最大上传文件大小（格式100b, 10kb, 10mb, 1gb）

multipart：布尔值，如果用mutlipart 代替二进制流的方式，在webkit下无法工作

multipart\_params： 跟 multipart关联在一起的键值对

multi\_selection： 多选对话框

resize：修改图片属性 resize: \{width: 320, height: 240, quality: 90\}

runtimes:上传插件初始化选用那种方式的优先级顺序，如果第一个初始化失败就走第二个，依次类推

required\_features：需要那些特性，才能初始化插件

url：上传服务器地址

unique\_names：是否生成唯一的文件名，避免与服务器文件重名

urlstream\_upload：布尔值 如果是flash上传应该用URLStream 代替FileReference.upload

      **jquery部件的属性：**

dragdrop：是否支持拖拽，默认值true

multiple\_queues：是否可以多次上传

preinit：插件初始化前回调函数

rename：布尔值，上传之前可以重命名文件，默认false，木有找到如何重命名啊

  **API文档：**

    方法列表：

　　Uploader\(setting\)：创建实例的构造方法

```javascript
var uploader = new plupload.Uploader({    runtimes : 'gears,html5,flash',    browse_button : 'button_id'});
```

　　bind\(event, function\[, scope\]\)：绑定事件

```javascript
uploader.bind('Init', function(up) {    alert('Supports drag/drop: ' + (!!up.features.dragdrop));});
```

　　destroy\(\)：销毁plupload的实例对象

```javascript
uploader.destroy()
```

　　getFile\(id\): 获取上传文件信息

```javascript
uploader.bind('FilesAdded', function(up, files) {    for (var i in files) {        up.getFile(files[i].id);           }});　
```

注：file：\{  
　　id:文件编号,  
　　loaded: 已经上传多少字节,  
　　name: 文件名,  
　　percent: 上传进度,  
　　size: 文件大小,  
　　status: 有四种状态 QUEUED, UPLOADING, FAILED, DONE.对应数值  
\}

init:初始化plupload实例，添加监听对象

```javascript
     uploader.destroy()
```

　　refresh：重新实例化uploader

    　removeFile\(id\):从file中移除某个文件[  
](http://plupload.com/plupload/docs/api/class_plupload.Uploader.html#removeFile)

　　splice\(start,length\)：从队列中start开始删除length个文件， 返回被删除的文件列表

　　start\(\) 开始上传

       stop\(\)停止上传

　　unbind\(name, function\): 接触事件绑定

　　unbindAll\(\)解绑所有事件

　属性集合：

      features：uploader中包含那些特性

      files:当前队列中的文件列表

      id：uploader实例的唯一id

      runtime：当前运行环境（是html5、flash等等\)

      state:当前上传进度状态

      total：当前上传文件的信息集合

    事件集合:（up为uploader缩写）

BeforeUpload\(up, file\)：文件上传完之前触发的事件

ChunkUploaded\(up, file,response\)文件被分块上传的事件

Destroy\(up\):uploader的destroy调用的方法

Error\(up, err\)：上传出错的时候触发

Fileadded\(up, files\):用户选择文件时触发

FileRemoved\(up, files\):当文件从上传队列中移除触发

FileUploaded\(up, file, res\):文件上传成功的时候触发

Init\(up\):当初始化的时候触发

PostInit\(up\):init执行完以后要执行的事件触发

QueueChanged\(up\):当文件队列变化时触发

Refresh\(up\):当silverlight/flash或是其他运行环境需要移动的时候触发

StateChanged\(up\)当整个上传队列被改变的时候触发

UploadComplete\(up,file\)当队列中所有文件被上传完时触发

UploadFile\(up,file\)当一个文件被上传的时候触发

UploadProgress\(up,file\):当文件正在被上传中触发

 参见：

    示例：http://plupload.com/example\_queuewidget.php

   API:<http://plupload.com/plupload/docs/api/index.html>
