import { Button, Space } from 'rs-antd';
import React from 'react';
import confirm from '..';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function () {
  return /*#__PURE__*/_jsxs(Space, {
    size: 10,
    children: [/*#__PURE__*/_jsx(Button, {
      type: "primary",
      onClick: function onClick() {
        confirm({
          title: '转账确认',
          content: '向某某人发起10亿元转账操作，确认继续吗？'
        });
      },
      children: "\u57FA\u672C\u4F7F\u7528"
    }), /*#__PURE__*/_jsx(Button, {
      type: "primary",
      onClick: function onClick() {
        confirm({
          title: '密码修改成功',
          type: 'success',
          content: '您的密码已修改，请重新登录？',
          cancelText: '知道了',
          hideOk: true
        });
      },
      children: "\u6210\u529F\u5F39\u7A97"
    }), /*#__PURE__*/_jsx(Button, {
      type: "primary",
      onClick: function onClick() {
        confirm({
          title: '转账确认',
          type: 'warning',
          content: '向某某人发起10亿元转账操作，确认继续吗？'
        });
      },
      children: "\u8B66\u544A\u5F39\u7A97"
    }), /*#__PURE__*/_jsx(Button, {
      type: "primary",
      onClick: function onClick() {
        confirm({
          title: '转账确认',
          type: 'error',
          content: '向某某人发起10亿元转账操作，确认继续吗？'
        });
      },
      children: "\u5931\u8D25\u5F39\u7A97"
    }), /*#__PURE__*/_jsx(Button, {
      type: "primary",
      onClick: function onClick() {
        confirm({
          title: '你干嘛？',
          type: 'question',
          footerSlot: [/*#__PURE__*/_jsx(Button, {
            type: "primary",
            children: "\u4E0D\u5E72\u561B"
          }, 'a')],
          okText: '随便看看',
          cancelText: '关你啥事',
          tips: '可以添加弹窗相关详细说明'
        });
      },
      children: "\u8BE2\u95EE\u5F39\u7A97"
    }), /*#__PURE__*/_jsx(Button, {
      type: "primary",
      onClick: function onClick() {
        confirm({
          title: '转账确认',
          type: 'none',
          content: '向某某人发起10亿元转账操作，确认继续吗？'
        });
      },
      children: "\u9690\u85CFicon"
    })]
  });
});