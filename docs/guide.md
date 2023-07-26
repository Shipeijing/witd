---
title: 快速上手
toc: menu
order: 1
nav:
  title: 指南
  path: /guide
  order: 1
---

## 介绍

Wit Design 是基于 React 框架，功能上更加贴合于业务的组件库

Wit Design 是提供了更加贴合业务组件的 UI 组件库，设计目的是让代码更简洁，开发更高效

部分组件是基于 Ant Design 组件库开发而来，在使用上也完全保留了原组件的 API，并且赋予原组件 API 更高优先级，这意味了你可以覆盖本组件的部分功能

## 设计理念

- 开发一些常用且更贴合业务的组件，可以看做 Ant Design 组件库拓展，补充一些它没有且业务场景上高频出现的组件。
- 开发一些常用的功能型函数，方便项目开发
- 开发/收集常用的插件，记录插件特性及使用方法

## 立即安装

使用 npm 安装

```shell
npm install witd --save
```

使用 yarn 安装

```shell
yarn add witd
```

## 版本说明

Wit Design 是继承于 react-super，使用老依赖请使用下面方式安装

使用 Wit Design 请直接安装 witd 即可

## 安装旧版本

使用 npm 安装

```shell
npm install react-super --save
```

使用 yarn 安装

```shell
yarn add react-super
```

## 版本管理器

当项目使用 umi 脚手架构建时，推荐您安装 umi-plugin-wit-tool 依赖

此依赖会在您启动项目时检查依赖版本是否为最新版本

```shell
npm install umi-plugin-wit-tool --dev --save
或者
yarn add umi-plugin-wit-tool --dev
```

## 目标定位

1. 解决开发者日常繁琐的基础组件开发
2. 提升业务开发效率
3. 减少开发者工作时间，让开发者有更多的可支配时间
4. 尽可能完善业务组件功能，将二次开发代码量降到最低
5. 支持日常企业级项目开发核心功能开发

## 主题设置

1. 确定项目支持 less
2. 在项目全局样式文件中配置主题属性
3. 主题属性向 ant 看齐，@primary-color 是主题色
4. 可在个人页面验证属性值是否可用

## 常见问题

### 脚手架安装失败

如果遇到脚手架使用问题，可尝试以下方式解决：

1、检查是否安装 node

```shell
node -v
```

2、清除 npx 缓存

```shell
npx clear-npx-cache
```

### 样式被覆盖

在开发中请尽量避免重写以 super 开头的样式属性

### antd 低版本同时使用

在与 antd 低版本同时使用时会遇到表单样式冲突问题

在使用表单内容及表格插槽时请从 rs-antd 中引入

rs-antd 不用单独安装，是 Wit 内置的 antd5.0 版本
