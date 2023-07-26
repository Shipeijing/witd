import React from 'react';
import Button from "../../Button";
import Box from "../index";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export default (function () {
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsxs(Box, {
      justifyContent: "space-between",
      style: {
        padding: 20,
        background: '#eee'
      },
      children: [/*#__PURE__*/_jsx("h3", {
        children: "\u6211\u662F\u6807\u9898"
      }), /*#__PURE__*/_jsxs(Box, {
        children: [/*#__PURE__*/_jsx(Button, {
          children: "\u6309\u94AE1"
        }), /*#__PURE__*/_jsx(Button, {
          style: {
            margin: '0 10px',
            height: 50
          },
          children: "\u6309\u94AE2"
        }), /*#__PURE__*/_jsx(Button, {
          children: "\u6309\u94AE3"
        })]
      })]
    })
  });
});