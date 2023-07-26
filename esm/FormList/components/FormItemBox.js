function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["items", "onDelete", "name", "dataLength"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { DeleteOutlined, HolderOutlined } from '@ant-design/icons';
import React from 'react';
import { SortableHandle } from 'react-sortable-hoc';
import { Col, Row } from 'rs-antd';
import Box from "../../Box";
import FormItem from "../../FormItem";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function (_ref) {
  var items = _ref.items,
    onDelete = _ref.onDelete,
    name = _ref.name,
    dataLength = _ref.dataLength,
    e = _objectWithoutProperties(_ref, _excluded);
  var DragHandle = SortableHandle(function () {
    return /*#__PURE__*/_jsx("span", {
      className: "super-formlist-drag-handle",
      children: /*#__PURE__*/_jsx(HolderOutlined, {})
    });
  });
  return /*#__PURE__*/_jsxs(Box, {
    alignItems: "start",
    children: [dataLength > 1 && /*#__PURE__*/_jsx("div", {
      style: {
        marginRight: 12,
        marginTop: 7
      },
      children: /*#__PURE__*/_jsx(DragHandle, {})
    }), /*#__PURE__*/_jsx(Row, {
      style: {
        flex: 1
      },
      gutter: [20, 0],
      children: items.map(function (item, index) {
        var _item$dataIndex;
        return /*#__PURE__*/_jsx(Col, {
          span: Math.floor(24 / items.length),
          children: /*#__PURE__*/_jsx(FormItem, _objectSpread(_objectSpread({}, item), {}, {
            name: [name, (_item$dataIndex = item.dataIndex) !== null && _item$dataIndex !== void 0 ? _item$dataIndex : item.name],
            hideLabel: true,
            support: true
          }))
        }, 'form-item-col' + index);
      })
    }), dataLength > 1 && /*#__PURE__*/_jsx("div", {
      style: {
        marginLeft: 16,
        marginTop: 7
      },
      onClick: onDelete,
      children: /*#__PURE__*/_jsx(DeleteOutlined, {
        style: {
          fontSize: 18,
          color: '#f5222d',
          cursor: 'pointer'
        }
      })
    })]
  });
});