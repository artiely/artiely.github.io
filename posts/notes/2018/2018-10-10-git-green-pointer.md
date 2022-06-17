---
title: github恢复属于你的小绿点
tag:
  - git
  - github
author: Artiely
date: '2018-10-10'
cover: /2022-05-14-21-55-48.png
base64: 252a2e
tinyCover: /cover/2022-05-14-21-55-48.png
coverWidth: 564
coverHeight: 902
coverPrimary: 6f7271
coverSecondary: 908d8e

---

# github恢复属于你的小绿点

首先要分析为什么你的提交记录没有被github识别：

进行Commits的用户没有被关联到你的Github帐号中。

不是在这个版本库的默认分支进行的Commit。

这个仓库是一个Fork仓库，而不是独立仓库。

我估计很多人和我一样都是第一个原因，初用github远程管理代码和那些经常更换使用机器的原因有可能用错账户名和邮箱，其实我在修改自己的原来的用户名和邮箱是就发现，

当初设置的用户名竟然是自己的密码。。。。用户名是邮箱，但是为什么平时可以正常提交呢。。。想想才反应过来，我都不用bash去push，而是在git的图形工具里进行diff和push，

那就难怪了，在GUI里，一般都是默认提交时输入邮箱和密码的，这里又有一个坑，我每次都是在用户那一个alert里输入自己的邮箱，然后是密码，这里要说，如果你输入邮箱，

就一定要注意你的这个提交账户和简历repo的账户名要关联，不然够呛了，你辛辛苦苦改了几个月发现那个炫富的绿墙里什么鬼都没有，呵呵

至于下面的两个原因应该在多人合作开发中会遇到吧

下面是解决的办法：

这是github官方的办法，全英文

https://help.github.com/articles/changing-author-info/

## 开始

然后在bash里执行如下代码，user替换成你的github账户名，repo.git替换成你的repo的名字

```shell
 git clone --bare https://github.com/user/repo.git
 cd repo.git
```

## 复制粘贴脚本，并根据你的信息修改以下变量：旧的Email地址，正确的用户名，正确的邮件地址

```shell
#!/bin/sh
git filter-branch --env-filter '
OLD_EMAIL="旧的Email地址"
CORRECT_NAME="正确的用户名"
CORRECT_EMAIL="正确的邮件地址"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
```

按 Enter键 执行脚本。
用git log命令看看新 Git 历史有没有错误

## 把正确历史 push 到 Github

```shell
git push --force --tags origin 'refs/heads/*'
```

删掉刚刚临时创建的 clone

```shell
cd ..
rm -rf repo.git
```

## 接下来全局设置好你的正确信息，以后就放心的用Github进行版本管理吧 ^_^

```shell
git config --global user.email "你的邮件地址"
git config --global user.name "你的Github用户名"
```

## 如果后面出现无法push的情况

```shell
git pull origin master --allow-unrelated-histories
# 或者
git commit -a
```