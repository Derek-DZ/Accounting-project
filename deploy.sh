#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
yarn build

# cd 到构建输出的目录下
cd dist

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>

git push -f git@github.com:Derek-DZ/account-project-website.git master:gh-pages
git push -f git@gitee.com:derek-sun/account-project-website.git master:gh-pages
# 部署到码云的链接 git@gitee.com:derek-sun/account-project-website.git
# 部署到git pages的链接 git@github.com:Derek-DZ/account-project-website.git

cd -