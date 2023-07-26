import React from 'react';
import "../styles.less";
import RenderIcon from "./RenderIcon";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function (_ref) {
  var routes = _ref.routes,
    selectRoute = _ref.selectRoute,
    setSelecRoute = _ref.setSelecRoute;
  var onClick = function onClick(route) {
    setSelecRoute(route);
  };
  return /*#__PURE__*/_jsx("div", {
    children: routes === null || routes === void 0 ? void 0 : routes.map(function (item) {
      return /*#__PURE__*/_jsx(RouteItem, {
        item: item,
        onClick: onClick,
        selectRoute: selectRoute
      });
    })
  });
});
function RouteItem(_ref2) {
  var item = _ref2.item,
    _onClick = _ref2.onClick,
    selectRoute = _ref2.selectRoute;
  return /*#__PURE__*/_jsxs("div", {
    className: "super-navigation-route-select-item ".concat(selectRoute != null && selectRoute.path === item.path && 'super-navigation-route-select'),
    onClick: function onClick() {
      _onClick(item);
    },
    children: [/*#__PURE__*/_jsx("div", {
      className: "super-navigation-route-select-icon",
      children: RenderIcon(item)
    }), item.fatherName && item.fatherName.length > 0 ? /*#__PURE__*/_jsxs("span", {
      children: [/*#__PURE__*/_jsx("span", {
        style: {
          color: '#bdbdbd'
        },
        children: item.fatherName + ' => '
      }), " ", item.name]
    }) : item.name]
  });
}