function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { Cascader, Checkbox, DatePicker, Input, InputNumber, Radio, Select, Switch, TimePicker, TreeSelect } from 'rs-antd';
import React from 'react';
import AddressPicker from "../../AddressPicker";
import Upload from "./Upload";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { jsx as _jsx } from "react/jsx-runtime";
dayjs.extend(customParseFormat);
var SuperDatePicker = DatePicker;
export default (function (_ref) {
  var data = _ref.data,
    type = _ref.type,
    disabled = _ref.disabled;
  switch (data.dataType) {
    case 'boolean':
      return /*#__PURE__*/_jsx(Switch, _objectSpread({
        disabled: disabled
      }, data.antProps));
    case 'number':
      return /*#__PURE__*/_jsx(InputNumber, _objectSpread({
        disabled: disabled,
        placeholder: "\u8BF7\u8F93\u5165",
        style: {
          width: '100%'
        }
      }, data.antProps));
    case 'addressPicker':
      return /*#__PURE__*/_jsx(AddressPicker, _objectSpread({
        disabled: disabled
      }, data.antProps));
    case 'date':
      return /*#__PURE__*/_jsx(SuperDatePicker, _objectSpread({
        disabled: disabled,
        style: {
          width: '100%'
        }
      }, data.antProps));
    case 'datetime':
      return /*#__PURE__*/_jsx(SuperDatePicker, _objectSpread({
        disabled: disabled,
        showTime: true,
        style: {
          width: '100%'
        }
      }, data.antProps));
    case 'time':
      return /*#__PURE__*/_jsx(TimePicker, _objectSpread({
        showNow: true,
        disabled: disabled,
        style: {
          width: '100%'
        }
      }, data.antProps));
    case 'select':
      return /*#__PURE__*/_jsx(Select, _objectSpread({
        placeholder: "\u8BF7\u9009\u62E9",
        allowClear: true,
        disabled: disabled,
        style: {
          minWidth: 100
        },
        options: data.dataSource || []
      }, data.antProps));
    case 'cascader':
      return /*#__PURE__*/_jsx(Cascader, _objectSpread({
        options: data.dataSource || [],
        placeholder: "\u8BF7\u9009\u62E9",
        style: {
          minWidth: 100
        },
        disabled: disabled,
        allowClear: true
      }, data.antProps));
    case 'upload':
      return /*#__PURE__*/_jsx(Upload, {
        antProps: data.dataSource
      });
    case 'tree':
      return /*#__PURE__*/_jsx(TreeSelect, _objectSpread({
        showSearch: true,
        disabled: disabled,
        style: {
          width: '100%'
        },
        dropdownStyle: {
          maxHeight: 400,
          overflow: 'auto'
        },
        placeholder: "\u8BF7\u9009\u62E9",
        allowClear: true,
        treeDefaultExpandAll: true,
        treeData: data.dataSource || []
      }, data.antProps));
    case 'checkbox':
      return /*#__PURE__*/_jsx(Checkbox.Group, _objectSpread({
        disabled: disabled,
        options: data.dataSource || []
      }, data.antProps));
    case 'textArea':
      return /*#__PURE__*/_jsx(Input.TextArea, _objectSpread({
        disabled: disabled,
        rows: type && type === 'SearchBar' ? 1 : 3
      }, data.antProps));
    case 'radio':
      return /*#__PURE__*/_jsx(Radio.Group, _objectSpread({
        disabled: disabled,
        options: data.dataSource || []
      }, data.antProps));
    default:
      return /*#__PURE__*/_jsx(Input, _objectSpread({
        disabled: disabled,
        placeholder: "\u8BF7\u8F93\u5165"
      }, data.antProps));
  }
});