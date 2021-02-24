## sth. wrong when working
### Error: spawn ....\node_modules\esbuild\esbuild.exe ENOENT
解决方案：delete package-lock.json and then re-install node_modules
参考：[feawfa](https://github.com/vitejs/vite/issues/1361)

## 2021年2月24日
npm 镜像
`--registry=https://registry.npm.taobao.org`
### github门户绑定
```shell
git config user.name xizher
git config user.email xizher@163.com`
```

### eslint 配置
```shell
npm i -D eslint eslint-plugin-vue
```

### git子模块
模块引入
```shell
# cd in src
git submodule add https://github.com/xizher/wxz.git
git submodule update --init --recursive
```
**wxz**模块eslint配置
```shell
npm i -D @babel/core \
@babel/eslint-parser \
@babel/plugin-proposal-class-properties \
@babel/plugin-proposal-private-methods \
@babel/preset-env
```
