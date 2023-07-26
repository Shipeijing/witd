function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { Button } from 'rs-antd';
import React, { useEffect } from 'react';
import useProgressBar from '..';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function () {
  var _useProgressBar = useProgressBar(),
    _useProgressBar2 = _slicedToArray(_useProgressBar, 2),
    change = _useProgressBar2[0],
    close = _useProgressBar2[1];
  useEffect(function () {
    return function () {
      close();
    };
  }, []);
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Button, {
      type: "primary",
      onClick: function onClick() {
        change({
          percent: 50
        });
        setTimeout(function () {
          change({
            percent: 100,
            status: 'success'
          });
        }, 1000);
      },
      children: "\u6A21\u62DF\u8BF7\u6C42\u6210\u529F"
    }), /*#__PURE__*/_jsx(Button, {
      style: {
        marginLeft: 20
      },
      type: "primary",
      onClick: function onClick() {
        change({
          percent: 50
        });
        setTimeout(function () {
          change({
            percent: 80,
            status: 'error'
          });
        }, 1000);
      },
      children: "\u6A21\u62DF\u8BF7\u6C42\u5931\u8D25"
    }), /*#__PURE__*/_jsx(Button, {
      style: {
        marginLeft: 20
      },
      type: "primary",
      onClick: function onClick() {
        change({
          percent: 50
        });
        setTimeout(function () {
          change({
            percent: 80,
            status: 'warn'
          });
        }, 1000);
      },
      children: "\u6A21\u62DF\u8BF7\u6C42\u5F02\u5E38"
    })]
  });
});