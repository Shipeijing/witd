function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * title: 增删改查
 * desc:  form.mode值为row是行内编辑，值为modal是弹窗编辑，行内编辑依赖key值，因此添加功能无法使用行内编辑
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
      _hideSelectNode: true,
      _hideActiveNode: true
    }, {
      id: '2',
      name: '胡彦祖',
      age: 42
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
    search: true,
    key: 'sex'
  }, {
    title: '新增显示',
    dataIndex: 'name1',
    readOnly: 'update',
    key: 'name1'
  }, {
    title: '编辑显示',
    dataIndex: 'name2',
    readOnly: 'add',
    key: 'name2'
  }, {
    title: '我只读',
    dataIndex: 'name3',
    readOnly: true,
    key: 'name3'
  }];
  return /*#__PURE__*/_jsx(SuperTable, {
    dataSource: first,
    columns: columns,
    selection: true,
    rowSelection: {
      type: 'radio'
    },
    searchBar: {
      searchText: '查询'
    },
    onRequest: function onRequest(data) {},
    active: {
      add: true,
      update: true,
      delete: true,
      title: '我的表格',
      width: 190,
      addText: '新增人员',
      editText: '编辑人员',
      deleteText: '删除人员'
    },
    form: {
      mode: 'row'
    },
    onAdd: function onAdd(data) {
      console.log(data);
      setfirst([_objectSpread(_objectSpread({}, data), {}, {
        id: String(first.length + 1)
      })].concat(_toConsumableArray(first)));
    },
    onUpDate: function onUpDate(data) {
      console.log(data);
      var query = first.map(function (item) {
        return item.id === data.id ? _objectSpread(_objectSpread({}, item), data) : item;
      });
      setfirst(query);
    },
    onDelete: function onDelete(id) {
      var query = first.filter(function (item) {
        return !id.includes(item.id);
      });
      setfirst(query);
    }
  });
});