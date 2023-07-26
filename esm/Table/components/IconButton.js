import { Tooltip } from 'rs-antd';
import React from 'react';
import "../styles.less";
import { jsx as _jsx } from "react/jsx-runtime";
export default (function (_ref) {
  var title = _ref.title,
    icon = _ref.icon,
    myStyle = _ref.myStyle,
    placement = _ref.placement,
    onClick = _ref.onClick,
    action = _ref.action;
  var item = /*#__PURE__*/_jsx("div", {
    className: action ? 'IconButtonAction IconButton' : 'IconButton',
    style: myStyle ? myStyle : {
      width: 30,
      height: 30
    },
    onClick: onClick,
    children: icon && icon
  });
  return title ? /*#__PURE__*/_jsx(Tooltip, {
    title: title,
    placement: placement,
    mouseEnterDelay: 0.5,
    color: '#ffffff',
    overlayInnerStyle: {
      color: '#000'
    },
    children: item
  }) : item;
});