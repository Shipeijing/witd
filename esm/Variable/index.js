var _excluded = ["value", "children", "onChange"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import React from 'react';
import { Button } from 'rs-antd';
import "./styles.less";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function (_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? [] : _ref$value,
    children = _ref.children,
    onChange = _ref.onChange,
    e = _objectWithoutProperties(_ref, _excluded);
  var _onChange = function _onChange(_value, i) {
    value[i] = _value;
    onChange && onChange(_toConsumableArray(value));
  };
  var renderChildren = function renderChildren(item, i) {
    return /*#__PURE__*/React.cloneElement(children, {
      value: item,
      onChange: function onChange(even) {
        if (_typeof(even) === 'object' && !Array.isArray(even)) {
          even.persist();
          _onChange(even.target.value, i);
        } else {
          _onChange(even, i);
        }
      }
    });
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "super-variable",
    children: [value.map(function (item, i) {
      return /*#__PURE__*/_jsxs("div", {
        className: "super-variable-item",
        children: [renderChildren(item, i), /*#__PURE__*/_jsx(MinusCircleOutlined, {
          className: "super-variable-icon",
          onClick: function onClick() {
            var res = e.onBeforeDelete ? e.onBeforeDelete(item, i) : false;
            if (!res) {
              value.splice(i, 1);
              onChange && onChange(_toConsumableArray(value));
            }
          }
        })]
      }, i);
    }), /*#__PURE__*/_jsx(Button, {
      type: "dashed",
      size: "middle",
      style: {
        width: 'calc(100% - 60px)'
      },
      icon: /*#__PURE__*/_jsx(PlusOutlined, {}),
      onClick: function onClick() {
        var res = e.onBeforeAdd ? e.onBeforeAdd() : false;
        if (!res) {
          value.push(undefined);
          onChange && onChange(_toConsumableArray(value));
        }
      },
      children: e.addText || '添加'
    })]
  });
});