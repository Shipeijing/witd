function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * desc:  嵌套表格
 * background: '#f6f7f9'
 */
import React, { useRef, useState } from 'react';
import Table from "../../Table";
import { jsx as _jsx } from "react/jsx-runtime";
export default (function () {
  var tableRef = useRef();
  var _useState = useState([{
      id: '6346345',
      name: '苏大强苏大强苏大强苏大强苏大强苏大强',
      age: 32
    }, {
      id: '12142352',
      name: '胡彦祖',
      age: 42
    }, {
      id: '53256356',
      name: '胡彦祖',
      age: 42
    }, {
      id: '64352353',
      name: '胡彦祖',
      age: 42
    }, {
      id: '5452756474',
      name: '胡彦祖',
      age: 42
    }, {
      id: '42344745',
      name: '胡彦祖',
      age: 42
    }]),
    _useState2 = _slicedToArray(_useState, 2),
    first = _useState2[0],
    setfirst = _useState2[1];
  var columns = [{
    title: '账号',
    dataIndex: 'id',
    readOnly: true,
    search: true
  }, {
    title: '姓名',
    dataIndex: 'name',
    search: true,
    required: true,
    width: 100,
    ellipsis: true
  }, {
    title: '年龄',
    dataIndex: 'age',
    dataType: 'number',
    search: true,
    required: true
  }, {
    title: '注册时间',
    dataIndex: 'time',
    dataType: 'time',
    search: true,
    dateFormat: 'HH:mm',
    antProps: {
      format: 'HH:mm'
    }
  }, {
    title: '插槽数据',
    dataIndex: 'test',
    readOnly: true,
    search: true
  }, {
    title: '排序第一',
    dataIndex: 'date',
    search: true,
    dataType: 'date',
    searchOrder: 0,
    formOrder: 0
  }];
  return /*#__PURE__*/_jsx(Table, {
    ref: tableRef,
    expandable: {
      expandedRowRender: function expandedRowRender() {
        return /*#__PURE__*/_jsx(ExpandedRowRender, {});
      }
    },
    dataSource: first,
    columns: columns,
    mode: "simple"
  });
});
var ExpandedRowRender = function ExpandedRowRender() {
  var _useState3 = useState([{
      id: '6346345',
      name: '苏大强苏大强苏大强苏大强苏大强苏大强',
      age: 32
    }, {
      id: '12142352',
      name: '胡彦祖',
      age: 42
    }, {
      id: '53256356',
      name: '胡彦祖',
      age: 42
    }, {
      id: '64352353',
      name: '胡彦祖',
      age: 42
    }]),
    _useState4 = _slicedToArray(_useState3, 2),
    first = _useState4[0],
    setfirst = _useState4[1];
  var columns = [{
    title: '账号',
    dataIndex: 'id',
    readOnly: true
  }, {
    title: '姓名',
    dataIndex: 'name',
    required: true,
    width: 100,
    ellipsis: true
  }, {
    title: '年龄',
    dataIndex: 'age',
    dataType: 'number',
    required: true
  }, {
    title: '注册时间',
    dataIndex: 'time',
    dataType: 'time',
    dateFormat: 'HH:mm',
    antProps: {
      format: 'HH:mm'
    }
  }];
  return /*#__PURE__*/_jsx(Table, {
    mode: "pure",
    columns: columns,
    dataSource: first,
    pagination: false
  });
};