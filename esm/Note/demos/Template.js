function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { Button } from 'rs-antd';
import React from 'react';
import useNote from "../useNote";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function () {
  var _useNote = useNote({
      title: '开学通知',
      top: 64,
      position: 'fixed',
      theme: 'warn',
      message: "\u5C0A\u656C\u7684\u5BB6\u957F\uFF0C\u4EB2\u7231\u7684\u540C\u5B66\u4EEC\uFF1A\u30001\u3001\u8FDB\u6821\u540E\u8BF7\u5728\u5B66\u751F\u5206\u73ED\u5904\u6216\u7535\u8111\u5206\u73ED\u67E5\u8BE2\u5904\uFF0C\u67E5\u8BE2\u5B69\u5B50\u7684\u5206\u73ED\u60C5\u51B5\uFF0C\u627E\u5230\u5B69\u5B50\u7684\u73ED\u7EA7\u3002\n    \u3000\u30002\u3001\u5230\u5B69\u5B50\u6240\u5728\u73ED\u7EA7\u627E\u73ED\u4E3B\u4EFB\u7ED9\u5B69\u5B50\u6CE8\u518C\u529E\u7406\u5165\u5B66\u624B\u7EED\uFF0C\u7F34\u7EB3\u5F53\u6708\u751F\u6D3B\u8D39\uFF0C\u5E76\u7531\u73ED\u4E3B\u4EFB\u5F00\u5177\u5B66\u751F\u5BDD\u5BA4\u5B89\u6392\u5355\uFF0C\u4E86\u89E3\u5B69\u5B50\u5206\u5BBF\u820D\u7684\u60C5\u51B5\u3002"
    }),
    _useNote2 = _slicedToArray(_useNote, 2),
    setVisible = _useNote2[0],
    setProps = _useNote2[1];
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Button, {
      type: "primary",
      onClick: function onClick() {
        setVisible(true);
      },
      children: "\u6253\u5F00\u901A\u544A"
    }), /*#__PURE__*/_jsx(Button, {
      style: {
        marginLeft: 20
      },
      type: "primary",
      onClick: function onClick() {
        setVisible(false);
      },
      children: "\u5173\u95ED\u901A\u544A"
    })]
  });
});