import { CheckCircleOutlined } from '@ant-design/icons';
import { Space } from 'rs-antd';
import React from 'react';
import Button from '..';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function () {
  return /*#__PURE__*/_jsxs(Space, {
    size: 10,
    children: [/*#__PURE__*/_jsx(Button, {
      theme: "success",
      icon: /*#__PURE__*/_jsx(CheckCircleOutlined, {}),
      children: "\u5B8C\u6210"
    }), /*#__PURE__*/_jsx(Button, {
      ghost: true,
      theme: "success",
      icon: /*#__PURE__*/_jsx(CheckCircleOutlined, {}),
      children: "\u8B66\u544A"
    }), /*#__PURE__*/_jsx(Button, {
      type: "default",
      theme: "success",
      children: "\u5B9E\u7EBF\u6846"
    }), /*#__PURE__*/_jsx(Button, {
      type: "dashed",
      theme: "success",
      children: "\u865A\u7EBF\u6846"
    }), /*#__PURE__*/_jsx(Button, {
      type: "link",
      theme: "success",
      icon: /*#__PURE__*/_jsx(CheckCircleOutlined, {}),
      children: "\u94FE\u63A5"
    }), /*#__PURE__*/_jsx(Button, {
      type: "text",
      theme: "dark",
      children: "\u6587\u5B57"
    })]
  });
});