# 背景

整个项目是通过Yarn + Workspaces构建的mono-repo项目。

## 快速上手

### 安装yarn、lerna

```shell

npm install -g yarn
npm install -g lerna
```

### 初始化lerna项目

如果需要删除项目所有依赖可以执行

```shell

yarn run clean
```

再安装

```shell

yarn run init
```

## 发布

- 发布到私有npm仓库，记得先检查配置`lerna.json`中到`registry`字段源是否正确，以及子package的`package.json`中`publishConfig`是否有强制设置其他源(不需要设置)。
- 切换到私有npm源，npm login登陆账户。
- 根目录下执行`yarn run version`,选择要发布的包的版本、打tag、推到git。
- 根目录下执行`yarn run publish`进行发布。
