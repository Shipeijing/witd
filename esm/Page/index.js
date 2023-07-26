var _excluded = ["children", "routes"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { Breadcrumb, Empty, Spin } from 'rs-antd';
import React from 'react';
import Button from "../Button";
import "./styles.less";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function (_ref) {
  var _e$loading;
  var children = _ref.children,
    routes = _ref.routes,
    e = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx("div", {
    className: "super-page",
    children: /*#__PURE__*/_jsxs(Spin, {
      spinning: (_e$loading = e.loading) !== null && _e$loading !== void 0 ? _e$loading : false,
      size: "large",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "super-page-header",
        children: [/*#__PURE__*/_jsx(Breadcrumb, {
          children: routes && routes.map(function (item, i) {
            return /*#__PURE__*/_jsx(Breadcrumb.Item, {
              children: i < 1 || i === routes.length - 1 ? item.title : /*#__PURE__*/_jsx("a", {
                href: item.url,
                children: item.title
              })
            });
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "super-page-header-right",
          children: /*#__PURE__*/_jsx(Button, {
            children: "+ \u589E\u52A0"
          })
        })]
      }), e.empty ? /*#__PURE__*/_jsx("div", {
        className: "super-page-body-empty",
        children: /*#__PURE__*/_jsx(Empty, {
          description: "\u6682\u65E0\u6570\u636E"
        })
      }) : /*#__PURE__*/_jsx("div", {
        className: "super-page-body",
        children: children
      })]
    })
  });
});