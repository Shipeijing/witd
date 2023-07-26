---
hero:
  title: Wit Design
  desc: 更加贴合业务场景的前端组件库，将代码量降到最低，组件都是孵化于项目，可靠性值得信赖
  actions:
    - text: GitHub
      link: https://github.com/Shipeijing/witd
    - text: 快速上手
      link: /guide
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/b8570f4d-c1b1-45eb-a1da-abff53159967/kj9t990h_w144_h144.png
    title: 贴近业务
    desc: 组件都是孵化于项目中，使用场景更贴合业务，并且保留了很强的拓展性
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png
    title: 开发高效
    desc: 组件以简化代码为设计宗旨，在组件上做加法，在使用时做减法
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: 使用方便
    desc: 组件不仅有全新开发的高效组件，也有部分是基于Ant Design，使用方式接近
footer: Copyright 2023 Wit Design <br /> 作者：shipeijing  服务平台：腾讯云
---

## 介绍

Wit Design 是提供了更加贴合业务组件的 UI 组件库，设计目的是让代码更简洁，开发更高效

部分组件是基于 Ant Design 组件库开发而来，在使用上也完全保留了原组件的 API，并且赋予原组件 API 更高优先级，这意味了你可以覆盖本组件的部分功能

## 立即开始

witd 是 Wit Design 的 npm 依赖名称，为了方便记忆，使用便捷，依赖名称做了简化

使用 npm 安装

```shell
npm install witd --save
```

使用 yarn 安装

```shell
yarn add witd
```

详细使用教程请[点我查看](/guide)

## 开发者

<img title="Max" src="https://avatars.githubusercontent.com/u/40789109?v=4" width="50px" style="margin-right:10px">
<!-- <img title="xiaoxiao" src="https://avatars.githubusercontent.com/u/26925030?v=4" width="50px" style="margin-right:10px">
<img title="ppmia" src="https://avatars.githubusercontent.com/u/42104014?v=4" width="50px" style="margin-right:10px"> -->

<!-- ## 致谢

共创才能共赢，向每一位开发者致谢！🙏🙏🙏 -->

## 发现问题

使用中发现 bug？ [立即反馈](https://github.com/Shipeijing/witd/issues)

## 本站地址

http://124.221.199.92

<!-- ## 相关链接

[<img title="Max" src="https://avatars.githubusercontent.com/u/40789109?v=4" width="50px" style="margin-right:10px">](https://github.com/Shipeijing/react-super/issues) -->

```jsx
/**
 * inline: true
 * compact: true
 */
import React from 'react';
import { Note } from '../';
import { history } from 'umi';

export default () => {
  const item = {
    title: '温馨提示',
    top: 64,
    left: 0,
    position: 'fixed',
    textWidth: '1125px',
    play: false,
    hide: ['close'],
    buttonText: `立即前往`,
    onPressButton: () => {
      history.push('/version');
    },
    theme: 'dark',
    message: `组件库2.3.0版本开始内嵌antd5，为避免样式冲突，请尽量使用antd5以上版本，使用内部版本请从rs-antd引入（无需安装），更多内容查看 《更新日志》`,
  };
  return <Note visible={true} {...item} />;
};
```
