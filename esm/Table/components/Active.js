function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["addText", "active", "readOnly", "slot", "selectedRows", "rowSelection", "onSelectDelete", "setSelectedRows", "segmented"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { BarsOutlined, CheckSquareOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Alert, Segmented } from 'rs-antd';
import React, { useEffect } from 'react';
import Button from "../../Button";
import "../styles.less";
import Handle from "./Handle";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function (_ref) {
  var addText = _ref.addText,
    active = _ref.active,
    readOnly = _ref.readOnly,
    slot = _ref.slot,
    selectedRows = _ref.selectedRows,
    rowSelection = _ref.rowSelection,
    onSelectDelete = _ref.onSelectDelete,
    setSelectedRows = _ref.setSelectedRows,
    segmented = _ref.segmented,
    e = _objectWithoutProperties(_ref, _excluded);
  useEffect(function () {
    // 全部取消勾选时，如果展示勾选项则自动取消展示
    if (selectedRows.length === 0 && e.showDataSource) {
      e.setShowDataSource(false);
    }
  }, [selectedRows]);
  var hideAlert = active && active.hideAlert ? false : true;
  var hideHandle = active && active.hideHandle ? false : true;
  var renderDom = function renderDom() {
    var addDom = active && active.add ? /*#__PURE__*/_jsx(Button, {
      icon: active.showIcon && /*#__PURE__*/_jsx(PlusOutlined, {}),
      style: {
        marginLeft: 10
      },
      onClick: e._onAdd,
      children: addText
    }) : undefined;
    var deleteSelectDom = active && active.deleteSelect ? /*#__PURE__*/_jsx(Button, {
      theme: "danger",
      icon: active.showIcon && /*#__PURE__*/_jsx(DeleteOutlined, {}),
      style: {
        marginLeft: 10
      },
      disabled: selectedRows.length === 0,
      onClick: onSelectDelete,
      children: "\u6279\u91CF\u5220\u9664"
    }) : undefined;
    var dom = [{
      order: 1,
      children: addDom
    }, {
      order: 2,
      children: deleteSelectDom
    }].concat(e.slotData.filter(function (item) {
      return item.type === 'active';
    })).sort(function (a, b) {
      return a.order - b.order;
    });
    var children = [];
    dom.map(function (item) {
      children.push(Array.isArray(item.children) ? _toConsumableArray(item.children) : item.children);
    });
    return children;
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "super-active",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "super-active-title",
      children: [active && active.hasOwnProperty('title') && /*#__PURE__*/_jsxs("h3", {
        children: [" ", active.title]
      }), segmented && segmented.show && (!rowSelection || rowSelection.type !== 'radio') && (selectedRows.length !== 0 || e.showDataSource) && /*#__PURE__*/_jsx(Segmented, {
        style: {
          marginRight: 10
        },
        value: e.showDataSource ? 'check' : 'list',
        onChange: function onChange(value) {
          e.setShowDataSource(value === 'list' ? false : true);
        },
        options: [{
          value: 'list',
          icon: /*#__PURE__*/_jsx(BarsOutlined, {}),
          label: segmented.listTitle
        }, {
          value: 'check',
          icon: /*#__PURE__*/_jsx(CheckSquareOutlined, {}),
          label: segmented.selectTitle
        }]
      }), hideAlert && selectedRows.length !== 0 && [(!rowSelection || rowSelection.type !== 'radio') && /*#__PURE__*/_jsx(Alert, {
        message: "\u5F53\u524D\u9009\u4E2D ".concat(selectedRows.length, " \u6761\u6570\u636E"),
        type: "info",
        showIcon: true,
        action: /*#__PURE__*/_jsx("a", {
          onClick: function onClick() {
            setSelectedRows([]);
          },
          children: "\u6E05\u7A7A"
        })
      }, 'action-Alert-2')]]
    }), /*#__PURE__*/_jsxs("div", {
      children: [!readOnly && /*#__PURE__*/_jsxs("div", {
        children: [slot && slot.activeSlot && slot.activeSlot(), renderDom()]
      }), hideHandle && /*#__PURE__*/_jsx("div", {
        className: "super-search-bar-button-form",
        children: /*#__PURE__*/_jsx(Handle, _objectSpread({}, e.handleProps))
      })]
    })]
  });
});