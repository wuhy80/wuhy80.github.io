---
icon: edit
date: 2022-09-15
order: 20220915
sticky: false
star: false
category:
  - 收集
tag:
  - Git
---

[回上页](../)

### 强制使用本地代码覆盖服务器

cd 代码目录
`git push origin master --force`

### 强制使用服务器覆盖本地

```
// 拉取所有更新，不同步；
git fetch --all
// 本地代码同步线上最新版本(会覆盖本地所有与远程仓库上同名的文件)；
git reset --hard origin/master
// 再更新一次[可不用]
git pull
```
