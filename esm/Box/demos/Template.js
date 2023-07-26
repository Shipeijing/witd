function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { Radio } from 'rs-antd';
import React, { useState } from 'react';
import Button from "../../Button";
import Box from "../index";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export default (function () {
  var _useState = useState('center'),
    _useState2 = _slicedToArray(_useState, 2),
    justifyContent = _useState2[0],
    setjustifyContent = _useState2[1];
  var _useState3 = useState('center'),
    _useState4 = _slicedToArray(_useState3, 2),
    alignItems = _useState4[0],
    setalignItems = _useState4[1];
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("span", {
      children: "justifyContent: "
    }), /*#__PURE__*/_jsx(Radio.Group, {
      style: {
        marginBottom: 30
      },
      options: ['center', 'space-between', 'space-around', 'space-evenly', 'start', 'end'],
      onChange: function onChange(_ref) {
        var value = _ref.target.value;
        setjustifyContent(value);
      },
      value: justifyContent
    }), /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("span", {
        children: "alignItems: "
      }), /*#__PURE__*/_jsx(Radio.Group, {
        style: {
          marginBottom: 30
        },
        options: ['start', 'end', 'center', 'baseline', 'stretch'],
        onChange: function onChange(_ref2) {
          var value = _ref2.target.value;
          setalignItems(value);
        },
        value: alignItems
      })]
    }), /*#__PURE__*/_jsxs(Box, {
      justifyContent: justifyContent,
      alignItems: alignItems,
      children: [/*#__PURE__*/_jsx(Button, {
        children: "\u6309\u94AE1"
      }), /*#__PURE__*/_jsx(Button, {
        style: {
          margin: '0 10px',
          height: 50
        },
        children: "\u6309\u94AE2"
      }), /*#__PURE__*/_jsx(Button, {
        children: "\u6309\u94AE3"
      })]
    })]
  });
});