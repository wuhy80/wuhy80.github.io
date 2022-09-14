#!/usr/bin/env sh
 
# 确保脚本抛出遇到的错误
set -e
 
# 生成静态文件， npm run docs:build
npm run docs:build
rm -rf ../vueDist/dist/*

# 将build生成的dist目录拷贝至上一层目录中
cp -rf demo/.vuepress/dist ../vueDist/
# 用于表示不是jekyll模板生成，支持_开头文件
touch ../vueDist/.nojekyll

# 进入生成的文件夹
cd ../vueDist/dist

# git初始化，每次初始化不影响推送
git init
git add -A
git commit -m 'deploy'
git branch -M main

# 如果你想要部署到 https://USERNAME.github.io
git push -f git@github.com:wuhy80/wuhy80.github.io.git main
