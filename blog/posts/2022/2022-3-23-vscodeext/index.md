---
tag:
  - vscode
  - vscodeext
cover: /2022-05-10-18-46-27.png
tinyCover: /cover/2022-05-10-18-46-27.png
coverWidth: 404
coverHeight: 630

---

# vscode从头开发一个笑话扩展

## 安装开发工具包

```shell
npm install -g yo generator-code
```

## 创建工程,选择插件开发

```shell
yo code
```

## 插件基本目录结构

package.json

* activationEvents 声明视图命令和事件命令
* contributes 定义了视图和命令的具体信息

```js
"viewsContainers": {
    "activitybar": [{
        "id": "jokeMenu",
        "title": "jokeMenu😉😉😉😉😉😉",
        "icon": "resources/joke.svg"
    }]
}
```

```js
"views": {
    "jokeMenu": [
        {
            "id": "view.joke",
            "name": "Joke"
        }
    ]
},
```

```js
"commands": [
    {
       "command": "extension.joke",
        "title": "Joke"
    }
]
```

extension.ts 扩展入口文件，激活扩展执行的命令

* 绑定视图

  ```js
  vscode.window.registerTreeDataProvider('view.joke', new JokeDataProvider(service))
  ```

  * 注册命令

```js
const showcontent = vscode.commands.registerCommand('joke.click', (hasdId, content) => {})
```

* 绑定命令

```js
context.subscriptions.push(showcontent)
```

* 创建webview

  ```js
  const panel = vscode.window.createWebviewPanel(
    'Webview', // viewType
    'stockWebview', // 视图标题
    vscode.ViewColumn.One, // 显示在编辑器的哪个部位
    {
      enableScripts: true, // 启用JS，默认禁用
      retainContextWhenHidden: true, // webview被隐藏时保持状态，避免被重置
    },
  )
  ```

service.ts 提供api服务，就是封装了网络请求

* JokeTreeItem 是TreeItem实例

```js
async getJokes(page: number, key: string): Promise<Array<JokeTreeItem>> {
    console.log('fetching  data……');
    const url = 'http://v.juhe.cn/joke/content/text.php';
    const response = await axios.get(url,{
      headers: { 'content-type': 'application/json' },
      params: {
        page: page,
        key: key,
      },
    });

    for(let i=0; i<response.data.result.data.length; i++ ){
        const joke = {
            content:response.data.result.data[i].content,
            hashId:response.data.result.data[i].hashId,
            time:response.data.result.data[i].updatetime
        };
        this.items.push(new JokeTreeItem(joke));
    }

    return  this.items;

  }
```

joke.ts 封装treeview

```js
export interface Joke {
  content: string
  hashId: string
  time: string
}

export class JokeTreeItem extends TreeItem {

  constructor(info: Joke) {
    super('', TreeItemCollapsibleState.None)
    this.label = '笑话'
    this.id = info.hashId
    this.description = 'by 梦回故里'
    this.command = {
      title: '今日笑话',
      command: 'joke.click',
      arguments: [
        info.hashId,
        info.content,
      ],
    }
    this.tooltip = '点击查看详情'
  }
}
```

jokeDataProvider.ts 数据提供者，给treeview提供数据

* 实现TreeDataProvider接口，实现三个方法
* 构造函数传入service

```js
export class JokeDataProvider implements TreeDataProvider<JokeTreeItem>{
    private _onDidChangeTreeData:EventEmitter<any> = new EventEmitter<any>();
    readonly onDidChangeTreeData:Event<any> = this._onDidChangeTreeData.event;

    private service: ApiService;

    constructor(service: ApiService){
        this.service = service;
    }

    refresh() {
        this._onDidChangeTreeData.fire(undefined);
    }

    getTreeItem(element:JokeTreeItem){
        return element;
    }

    getChildren(element:JokeTreeItem) {
        return this.service.getJokes(1, '23b9da300d551ea41a36559234c5dc64');
    }

    getParent(element:JokeTreeItem){
        return null;
    }

}
```
