function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import Button from "../../Button";
import Navigation from '..';
import { AlertOutlined, AppstoreOutlined, BlockOutlined, BugOutlined, BuildOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { history } from 'umi';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function () {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var routes = [{
    name: '组件全览',
    path: 'global',
    icon: /*#__PURE__*/_jsx(UnorderedListOutlined, {})
  }, {
    name: '通用',
    path: 'box',
    icon: /*#__PURE__*/_jsx(AppstoreOutlined, {}),
    children: [{
      name: 'Box 弹性容器',
      path: 'box',
      icon: /*#__PURE__*/_jsx(BlockOutlined, {})
    }, {
      name: 'Button 按钮',
      path: 'button',
      icon: /*#__PURE__*/_jsx(AppstoreOutlined, {})
    }, {
      name: 'Icon 图标',
      path: 'icon',
      icon: /*#__PURE__*/_jsx(BugOutlined, {})
    }, {
      name: 'Wrap 行容器',
      path: 'wrap',
      icon: /*#__PURE__*/_jsx(BuildOutlined, {})
    }]
  }, {
    name: '核心',
    icon: /*#__PURE__*/_jsx(AlertOutlined, {}),
    children: [{
      name: 'Confirm 确认弹窗',
      path: 'confirm',
      icon: ''
    }, {
      name: 'Descriptions 描述列表',
      path: 'descriptions',
      icon: ''
    }, {
      name: 'Modal 对话框',
      path: 'modal',
      icon: ''
    }, {
      name: 'Tree 可编辑树',
      path: 'tree',
      icon: ''
    }]
  }, {
    name: '页面',
    children: [{
      name: 'Navigation 导航器',
      path: 'navigation',
      icon: ''
    }, {
      name: 'Page 页面容器',
      path: 'page',
      icon: ''
    }, {
      name: 'Portal 通道',
      path: 'portal',
      icon: ''
    }]
  }, {
    name: '表格',
    children: [{
      name: 'Table 多功能表格',
      path: 'table',
      icon: ''
    }, {
      name: 'Slot 表格插槽',
      path: 'slot',
      icon: ''
    }, {
      name: 'TablePro 带请求表格',
      path: 'table-pro',
      icon: ''
    }]
  }, {
    name: '表单',
    children: [{
      name: 'AddressPicker 地址选择器',
      path: 'address-picker',
      icon: ''
    }, {
      name: 'Upload 文件上传',
      path: 'upload',
      icon: ''
    }, {
      name: 'Variable 拓展项',
      path: 'variable',
      icon: ''
    }]
  }, {
    name: '全局',
    children: [{
      name: 'Loading 加载中',
      path: 'loading',
      icon: ''
    }, {
      name: 'Note 全局通告',
      path: 'note',
      icon: ''
    }, {
      name: 'ProgressBar 全局进度条',
      path: 'progress-bar',
      icon: ''
    }, {
      name: 'Mask 蒙版',
      path: 'mask',
      icon: ''
    }]
  }, {
    name: '其它',
    children: [{
      name: 'IdentityCode 图形验证码',
      path: 'identity-code',
      icon: ''
    }, {
      name: 'Address 地址选择框',
      path: 'address',
      icon: ''
    }]
  }];
  var goPath = function goPath(route) {
    history.push(route.path);
  };
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Navigation, {
      open: open,
      routes: routes,
      onGoPath: goPath,
      onCancel: function onCancel() {
        setOpen(false);
      }
    }), /*#__PURE__*/_jsx(Button, {
      onClick: function onClick() {
        setOpen(true);
      },
      children: "\u6253\u5F00\u5BFC\u822A\u5668"
    })]
  });
});