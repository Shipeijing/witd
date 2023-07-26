function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["key", "labelSpace", "hideLabel", "rules", "formItemProps", "support"];
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useState } from 'react';
import { Form } from 'rs-antd';
import FormItem from "./components/FormItem";
import { normFile, valuePropName } from "./utils";
import { useId } from "../function";
import { jsx as _jsx } from "react/jsx-runtime";
export default (function (_ref) {
  var _item$label, _item$name, _item$label2;
  var key = _ref.key,
    labelSpace = _ref.labelSpace,
    hideLabel = _ref.hideLabel,
    rules = _ref.rules,
    formItemProps = _ref.formItemProps,
    support = _ref.support,
    item = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(useId()),
    _useState2 = _slicedToArray(_useState, 2),
    _key = _useState2[0],
    setKey = _useState2[1];
  var _rules = rules || [];
  // 兼容title、dataIndex字段，该字段用于表格、描述列表内
  var _item = _objectSpread(_objectSpread({}, item), {}, {
    label: (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : item.title,
    name: (_item$name = item.name) !== null && _item$name !== void 0 ? _item$name : item.dataIndex
  });
  return /*#__PURE__*/_jsx(Form.Item, _objectSpread(_objectSpread({
    // key={key ?? _key}
    name: _item.name,
    label: filterLabel(_item, labelSpace, hideLabel),
    rules: [{
      required: _item.required,
      message: "".concat((_item$label2 = _item.label) !== null && _item$label2 !== void 0 ? _item$label2 : '', "\u4E0D\u80FD\u4E3A\u7A7A")
    }].concat(_toConsumableArray(_rules)),
    valuePropName: valuePropName(_item.dataType),
    getValueFromEvent: _item.dataType === 'upload' ? normFile : undefined,
    colon: !!_item.label
  }, formItemProps), {}, {
    children: _item.children ? _item.children : FormItem({
      data: filterData(_item, support),
      rows: false,
      disabled: _item.disabled
    })
  }));
});
function filterData(item, support) {
  var _style = item.childrenProps && item.childrenProps.style ? item.childrenProps.style : {};
  return support ? _objectSpread(_objectSpread({}, item), {}, {
    childrenProps: {
      style: _objectSpread(_objectSpread({}, _style), {}, {
        width: '100%'
      })
    }
  }) : item;
}
function filterLabel(item, labelSpace, hideLabel) {
  if (hideLabel) return undefined;
  if (item.label) return item.label;
  if (item.children && labelSpace) {
    return ' ';
  }
  return undefined;
}