var _excluded = ["loading", "children", "mode", "opacity"];
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useEffect, useState } from 'react';
import { a, b, c, d } from "./loadingIcon";
import "./styles.less";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export default (function (_ref) {
  var loading = _ref.loading,
    children = _ref.children,
    mode = _ref.mode,
    _ref$opacity = _ref.opacity,
    opacity = _ref$opacity === void 0 ? 0.3 : _ref$opacity,
    e = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    first = _useState2[0],
    setfirst = _useState2[1];
  var aaa = null;
  useEffect(function () {
    if (loading) {
      aaa = setTimeout(function () {
        if (first.length < 4) {
          setfirst(first + '.');
        } else {
          setfirst('');
        }
      }, 1000);
    } else {
      clearInterval(aaa);
    }
    return function () {
      clearInterval(aaa);
    };
  }, [loading, first]);
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsxs("div", {
      className: "super-loading",
      children: [children && children, loading && /*#__PURE__*/_jsxs("div", {
        className: "super-loading-content ".concat(children ? 'super-loading-absolute' : 'super-loading-fixed'),
        style: {
          background: mode && mode === 'dark' ? "rgba(0,0,0,".concat(opacity, ")") : "rgba(255,255,255,".concat(opacity, ")")
        },
        children: [e.IndicatorRender ? e.IndicatorRender : /*#__PURE__*/_jsx("div", {
          className: "super-loading-indicator",
          children: getIcon(e.indicator)
        }), /*#__PURE__*/_jsxs("p", {
          children: ["\u6B63\u5728\u52A0\u8F7D\u4E2D", /*#__PURE__*/_jsx("span", {
            style: {
              width: 10,
              display: 'inline-block'
            },
            children: first
          })]
        })]
      })]
    })
  });
});
function getIcon(indicator) {
  if (!indicator) return iconList.a;
  return iconList[indicator];
}
var iconList = {
  a: a,
  b: b,
  c: c,
  d: d
};