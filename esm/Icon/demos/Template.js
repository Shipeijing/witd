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
import { message, Segmented, Space } from 'rs-antd';
import Search from 'rs-antd/es/input/Search';
import React, { useState } from 'react';
import Icon from '..';
import "../styles.less";
import copy from 'copy-to-clipboard';
import { useId } from "../../function";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var iconData = require("../data.json");
export default (function () {
  var _useState = useState('镂空'),
    _useState2 = _slicedToArray(_useState, 2),
    first = _useState2[0],
    setfirst = _useState2[1];
  var _useState3 = useState(fliterData(iconData.icons, first)),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsxs("div", {
      style: {
        marginBottom: 20
      },
      children: [/*#__PURE__*/_jsx(Search, {
        placeholder: "\u8BF7\u8F93\u5165\u56FE\u6807\u5173\u952E\u8BCD",
        allowClear: true,
        enterButton: "\u641C\u7D22",
        size: "large",
        style: {
          marginBottom: 20
        },
        onSearch: function onSearch(e) {
          setData(searchData(fliterData(iconData.icons, first), e.trim()));
        }
      }), /*#__PURE__*/_jsx(Segmented, {
        value: first,
        size: "large",
        options: ['镂空', '填充', '锐利'],
        onChange: function onChange(e) {
          setfirst(e);
          setData(fliterData(iconData.icons, e));
        }
      })]
    }), /*#__PURE__*/_jsx(Space, {
      size: [20, 20],
      wrap: true,
      children: data.map(function (item, i) {
        return /*#__PURE__*/_jsxs("div", {
          className: "super-select-icon-main",
          onClick: function onClick() {
            copy("<Icon name=\"".concat(item.name, "\" />"));
            message.success("\u56FE\u6807 ".concat(item.name, " \u5DF2\u590D\u5236"));
          },
          children: [/*#__PURE__*/_jsx(Icon, {
            name: item.name,
            size: 34
          }), /*#__PURE__*/_jsx("span", {
            className: "super-select-icon-main-name",
            children: item.name
          })]
        }, i);
      })
    }, useId())]
  });
});
function fliterData(data, tag) {
  return tag === '全部' ? data : _toConsumableArray(data).filter(function (item) {
    if (tag === '镂空') {
      if (item.tags.indexOf('outline') !== -1) return item;
    } else if (tag === '填充') {
      if (item.tags.indexOf('outline') == -1 && item.tags.indexOf('sharp') == -1) return item;
    } else {
      if (item.tags.indexOf('sharp') !== -1) return item;
    }
  });
}
function searchData(data, tag) {
  return tag.length === 0 ? data : _toConsumableArray(data).filter(function (item) {
    if (item.name.indexOf(tag) !== -1) return item;
  });
}