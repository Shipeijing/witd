function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import Descriptions from "../index";
import { jsx as _jsx } from "react/jsx-runtime";
var sexList = [{
  label: '男',
  value: '1'
}, {
  label: '女',
  value: '2'
}];
export default (function () {
  var _useState = useState({
      username: '小明',
      sex: '1',
      age: 13,
      phone: '13155007766',
      address: '江苏南京',
      motto: '人生如戏，全靠演技'
    }),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var item = [{
    title: '用户名',
    dataIndex: 'username'
  }, {
    title: '年龄',
    dataIndex: 'age',
    dataType: 'number'
  }, {
    title: '性别',
    dataIndex: 'sex',
    dataType: 'select',
    dataSource: sexList
  }, {
    title: '手机号',
    dataIndex: 'phone'
  }, {
    title: '所在城市',
    dataIndex: 'address',
    span: 2
  }, {
    title: '个性签名',
    dataIndex: 'motto',
    span: 3,
    dataType: 'textArea'
  }];
  return /*#__PURE__*/_jsx(Descriptions, {
    title: "\u65E0\u7EBF\u6846\u5C55\u793A",
    dataSource: data,
    item: item,
    defaultEdit: true,
    onFinish: function onFinish(e) {
      setData(e);
    }
  });
});