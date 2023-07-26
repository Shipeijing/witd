import React from 'react';
import "../styles.less";
import RenderIcon from "./RenderIcon";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
export default (function (_ref) {
  var routes = _ref.routes,
    onGoPath = _ref.onGoPath;
  return /*#__PURE__*/_jsx("div", {
    style: {
      padding: '20px 45px'
    },
    children: routes === null || routes === void 0 ? void 0 : routes.map(function (item) {
      var _item$children;
      return /*#__PURE__*/_jsxs("div", {
        className: "super-navigation-route-list",
        children: [/*#__PURE__*/_jsxs("div", {
          className: item.children && item.children.length > 0 ? 'super-navigation-route-list-nav' : 'super-navigation-route-list-action',
          onClick: function onClick() {
            if (item.children && item.children.length > 0) {
              onGoPath && onGoPath(item);
            }
          },
          children: [RenderIcon(item), item.name]
        }), /*#__PURE__*/_jsx("div", {
          className: "super-navigation-route-list-children",
          children: (_item$children = item.children) === null || _item$children === void 0 ? void 0 : _item$children.map(function (item) {
            return /*#__PURE__*/_jsxs("div", {
              className: "super-navigation-route-list-action",
              onClick: function onClick() {
                onGoPath && onGoPath(item);
              },
              children: [RenderIcon(item), item.name]
            });
          })
        })]
      });
    })
  });
});