---
title: CentOS下如何安装nodejs及相关环境
tag:
  - nodejs
  - centOS
  - pm2
  - nvm
author: Artiely
date: 2018-1-30
cover: /2022-05-14-21-45-28.png
hot: true
base64: 6b8359
tinyCover: /cover/2022-05-14-21-45-28.png
coverWidth: 735
coverHeight: 1083
coverPrimary: 413d41
coverSecondary: bec2be

---


# CentOS下如何安装nodejs及相关环境

## 您将了解
1. CentOS下如何安装nodejs
2. CentOS下如何安装NVM
3. CentOS下如何安装git
4. CentOS下如何安装pm2

## 适用对象
本文档介绍如何在阿里云CentOS系统的云服务器ECS实例上，安装Nodejs并部署项目。
## 准备工作
部署之前，请做如下准备工作：

- 购买ECS实例
- 您的实例运行的镜像是CentOS7.x
- 您的实例可以连接公网
- 本地已经安装用于连接 Linux 实例的工具，如 Xshell

## 安装nodejs
1. wget命令下载Node.js安装包。


选择自己需要安装的版本`https://nodejs.org/dist/`选择带`linux-x64.tar.xz`的安装包，该安装包是编译好的文件，解压之后，在bin文件夹中就已存在node和npm，无需重复编译。
```shell
wget https://nodejs.org/dist/latest-v10.x/node-v10.17.0-linux-x64.tar.xz  
```
> 如果提示找不到`wget`命令,可以先安装`weget`,执行`yum -y install wget`后再安装。

2. 解压文件。
```shell
tar xvf node-v10.17.0-linux-x64.tar.xz 
```
3. 创建软链接，使node和npm命令全局有效。

通过创建软链接的方法，使得在任意目录下都可以直接使用node和npm命令：
```shell
ln -s /root/node-v10.17.0-linux-x64/bin/node /usr/local/bin/node
ln -s /root/node-v10.17.0-linux-x64/bin/npm /usr/local/bin/npm
```
4. 查看node、npm版本。
```shell
node -v
npm -v
```
5. 至此，Node.js环境已安装完毕。
软件默认安装在`/`目录或者`~`目录下，也就是根目录或当前用户目录，如果不清楚当前的目录可以执行`pwd`命令。如果需要将该软件安装到其他目录（如：/opt/node/）下，请进行如下操作：
```shell
# 创建目录
mkdir -p /opt/node/
# 移动到目录中
mv /root/node-v10.17.0-linux-x64/* /opt/node/
# 删除之前的软链
rm -f /usr/local/bin/node
rm -f /usr/local/bin/npm
# 创建新的软链
ln -s /opt/node/bin/node /usr/local/bin/node
ln -s /opt/node/bin/npm /usr/local/bin/npm
```
## 安装NVM管理多个node版本

NVM（Node version manager）是Node.js的版本管理软件，使用户可以轻松在Node.js各个版本间进行切换。适用于长期做 node 开发的人员或有快速更新node版本、快速切换node版本这一需求的用户。
安装步骤：
1. 直接使用git将源码克隆到本地的~/.nvm目录下，并检查最新版本。

```shell
yum install git

git clone https://github.com/cnpm/nvm.git ~/.nvm && cd ~/.nvm && git checkout `git describe --abbrev=0 --tags`
```
2. 激活NVM。

```shell
echo ". ~/.nvm/nvm.sh" >> /etc/profile

source /etc/profile
```
3. 列出Node.js的所有版本。

```shell
nvm list-remote
```
4. 安装多个Node.js版本。

```shell
nvm install v6.9.5

nvm install v7.4.0
```
5. 查看已安装Node.js版本，当前使用的版本为v6.9.5。

```shell
[root@iZuf62didsxigy36d6kjtrZ .nvm]# nvm ls
-> v6.9.5
v7.4.0
```
6. 切换Node.js版本至v7.4.0。
```shell

[root@iZuf62didsxigy36d6kjtrZ .nvm]# nvm use v7.4.0
Now using node v7.4.0
```
7. NVM的更多操作请参考帮助文档：
```shell
nvm help
```
## 部署测试项目

1. 新建项目文件example.js。

```shell
cd ~
touch example.js
```
2. 使用vim编辑器打开项目文件example.js。

```shell
yum install vim
vim example.js
```
输入`i`，进入编辑模式,将以下项目文件内容粘贴到文件中。使用`Esc`按钮，退出编辑模式，输入`:wq`，回车，保存文件内容并退出。

项目文件内容：

```js
const http = require('http')
const hostname = '0.0.0.0'
const port = 3000
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
```
> 注：项目文件内容中的3000为端口号，可以自行定义。并注意在阿里云控制台安全策略中开放对于的端口

3. 运行项目。

```shell
node ~/example.js
```
注：可以使用命令`node ~/example.js &`将项目置于后台运行。

4. 使用命令查看项目端口是否存在。

```shell
netstat -tpln
```
5. 在浏览器中输入`http://IP:端口号` 访问项目。
##  安装pm2 守护node进程
1. 安装
```shell
npm install -g pm2
```
此时执行pm2可能会提示找不到pm2命令

2. 通过创建软链接的方法，使得在任意目录下都可以直接使用pm2命令：

```shell
ln -s /root/node-v10.17.0-linux-x64/bin/pm2 /usr/local/bin/pm2
```
上面的软链路径不要疑惑，pm2确实安装到了node解压目录下，想要获得npm全局的安装路径可以使用命令
```shell
npm config get prefix
#使用下面的命令设置npm的全局安装路径
npm config set prefix 
```
3. 运行
```shell
cd myapp/
pm2 start ./bin/www
```
完.