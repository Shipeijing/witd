function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * desc:  sortable:true开启拖动排序，无其它任何配置，onSortChange回调传回拖动前后index
 * background: '#f6f7f9'
 */
import React, { useState } from 'react';
import SuperTable from "../index";
import { jsx as _jsx } from "react/jsx-runtime";
export default (function () {
  var _useState = useState([{
      id: '1',
      name: '苏大强',
      age: 32,
      sex: true
    }, {
      id: '2',
      name: '胡彦祖',
      age: 42,
      sex: true
    }]),
    _useState2 = _slicedToArray(_useState, 2),
    first = _useState2[0],
    setfirst = _useState2[1];
  var columns = [{
    title: '姓名',
    dataIndex: 'name',
    search: true,
    required: true,
    key: 'name'
  }, {
    title: '年龄',
    dataIndex: 'age',
    dataType: 'number',
    search: true,
    key: 'age'
  }, {
    title: '是否男性',
    dataIndex: 'sex',
    dataType: 'boolean',
    key: 'sex'
  }];
  return /*#__PURE__*/_jsx(SuperTable, {
    dataSource: first,
    columns: columns,
    sortable: true,
    onSortChange: function onSortChange(newIndex, oldIndex) {
      var result = Array.from(first);
      var _result$splice = result.splice(oldIndex, 1),
        _result$splice2 = _slicedToArray(_result$splice, 1),
        removed = _result$splice2[0];
      result.splice(newIndex, 0, removed);
      setfirst(result);
    },
    active: {
      title: '拖动排序'
    }
  });
});