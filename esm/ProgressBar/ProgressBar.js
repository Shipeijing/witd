function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["modalKey", "percent"];
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
import { CheckOutlined, CloseOutlined, InfoOutlined, LoadingOutlined } from '@ant-design/icons';
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import ReactDOM from 'react-dom';
import "./styles.less";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default /*#__PURE__*/forwardRef(function (_ref, ref) {
  var modalKey = _ref.modalKey,
    percent = _ref.percent,
    e = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    width = _useState2[0],
    setWidth = _useState2[1];
  useImperativeHandle(ref, function () {
    return {
      close: close
    };
  }, []);
  useEffect(function () {
    if (width === 0 && percent !== 0) {
      setTimeout(function () {
        setWidth(percent);
      }, 0);
    } else {
      setWidth(percent);
    }
    if (percent === 100) {
      close();
    }
  }, [percent]);
  useEffect(function () {
    if (e.status === 'error' || e.status === 'warn') {
      setTimeout(function () {
        close();
      }, 500);
    }
  }, [e.status]);

  // 关闭时加载动画
  var close = function close() {
    setTimeout(function () {
      var m = document.getElementById(modalKey);
      if (m !== null) {
        ReactDOM.unmountComponentAtNode(m);
        document.body.removeChild(m);
      }
    }, 500);
  };
  var _color = e.status ? themes.find(function (item) {
    return item.key === e.status;
  }) : themes[0];
  if (_color && e.color && e.status === 'default') {
    _color.bgColor = e.color;
  }
  var barColor = {
    background: _color === null || _color === void 0 ? void 0 : _color.bgColor,
    boxShadow: "0 0 5px ".concat(_color === null || _color === void 0 ? void 0 : _color.bgColor)
  };
  if (!e.color && e.status === 'default') {
    barColor = {};
  }
  return /*#__PURE__*/_jsxs("div", {
    className: "super-progress-bar",
    style: !e.color && e.status === 'default' ? {} : {
      color: _color === null || _color === void 0 ? void 0 : _color.bgColor
    },
    children: [/*#__PURE__*/_jsx("div", {
      style: _objectSpread({
        width: width + '%'
      }, barColor)
    }), !e.hideIcon && [e.status === 'default' && /*#__PURE__*/_jsx(LoadingOutlined, {
      className: "super-progress-bar-loading"
    }), e.status === 'success' && /*#__PURE__*/_jsx(CheckOutlined, {
      className: "super-progress-bar-loading"
    }), e.status === 'error' && /*#__PURE__*/_jsx(CloseOutlined, {
      className: "super-progress-bar-loading"
    }), e.status === 'warn' && /*#__PURE__*/_jsx(InfoOutlined, {
      className: "super-progress-bar-loading"
    })]]
  });
});
var themes = [{
  key: 'default',
  bgColor: 'none'
}, {
  key: 'success',
  bgColor: '#389e0d'
}, {
  key: 'error',
  bgColor: '#f5222d'
}, {
  key: 'warn',
  bgColor: '#fa8c16'
}];