function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import Note from '..';
import { jsx as _jsx } from "react/jsx-runtime";
export default (function () {
  return /*#__PURE__*/_jsx("div", {
    style: {
      width: '100%',
      height: 300,
      position: 'relative',
      background: '#eee'
    },
    children: list.map(function (item, i) {
      return /*#__PURE__*/_jsx(Note, _objectSpread({
        visible: true
      }, item), i);
    })
  });
});
var list = [{
  title: 'warn主题',
  top: 0,
  hide: ['close'],
  theme: 'warn',
  message: "\u5C0A\u656C\u7684\u5BB6\u957F\uFF0C\u4EB2\u7231\u7684\u540C\u5B66\u4EEC\uFF1A\u30001\u3001\u8FDB\u6821\u540E\u8BF7\u5728\u5B66\u751F\u5206\u73ED\u5904\u6216\u7535\u8111\u5206\u73ED\u67E5\u8BE2\u5904\uFF0C\u67E5\u8BE2\u5B69\u5B50\u7684\u5206\u73ED\u60C5\u51B5\uFF0C\u627E\u5230\u5B69\u5B50\u7684\u73ED\u7EA7\u3002\n  \u3000\u30002\u3001\u5230\u5B69\u5B50\u6240\u5728\u73ED\u7EA7\u627E\u73ED\u4E3B\u4EFB\u7ED9\u5B69\u5B50\u6CE8\u518C\u529E\u7406\u5165\u5B66\u624B\u7EED\uFF0C\u7F34\u7EB3\u5F53\u6708\u751F\u6D3B\u8D39\uFF0C\u5E76\u7531\u73ED\u4E3B\u4EFB\u5F00\u5177\u5B66\u751F\u5BDD\u5BA4\u5B89\u6392\u5355\uFF0C\u4E86\u89E3\u5B69\u5B50\u5206\u5BBF\u820D\u7684\u60C5\u51B5\u3002"
}, {
  title: 'error主题',
  top: 50,
  hide: ['close'],
  theme: 'error',
  message: "\u5C0A\u656C\u7684\u5BB6\u957F\uFF0C\u4EB2\u7231\u7684\u540C\u5B66\u4EEC\uFF1A\u30001\u3001\u8FDB\u6821\u540E\u8BF7\u5728\u5B66\u751F\u5206\u73ED\u5904\u6216\u7535\u8111\u5206\u73ED\u67E5\u8BE2\u5904\uFF0C\u67E5\u8BE2\u5B69\u5B50\u7684\u5206\u73ED\u60C5\u51B5\uFF0C\u627E\u5230\u5B69\u5B50\u7684\u73ED\u7EA7\u3002\n  \u3000\u30002\u3001\u5230\u5B69\u5B50\u6240\u5728\u73ED\u7EA7\u627E\u73ED\u4E3B\u4EFB\u7ED9\u5B69\u5B50\u6CE8\u518C\u529E\u7406\u5165\u5B66\u624B\u7EED\uFF0C\u7F34\u7EB3\u5F53\u6708\u751F\u6D3B\u8D39\uFF0C\u5E76\u7531\u73ED\u4E3B\u4EFB\u5F00\u5177\u5B66\u751F\u5BDD\u5BA4\u5B89\u6392\u5355\uFF0C\u4E86\u89E3\u5B69\u5B50\u5206\u5BBF\u820D\u7684\u60C5\u51B5\u3002"
}, {
  title: 'success主题',
  top: 100,
  hide: ['sound'],
  theme: 'success',
  message: "\u5C0A\u656C\u7684\u5BB6\u957F\uFF0C\u4EB2\u7231\u7684\u540C\u5B66\u4EEC\uFF1A\u30001\u3001\u8FDB\u6821\u540E\u8BF7\u5728\u5B66\u751F\u5206\u73ED\u5904\u6216\u7535\u8111\u5206\u73ED\u67E5\u8BE2\u5904\uFF0C\u67E5\u8BE2\u5B69\u5B50\u7684\u5206\u73ED\u60C5\u51B5\uFF0C\u627E\u5230\u5B69\u5B50\u7684\u73ED\u7EA7\u3002\n  \u3000\u30002\u3001\u5230\u5B69\u5B50\u6240\u5728\u73ED\u7EA7\u627E\u73ED\u4E3B\u4EFB\u7ED9\u5B69\u5B50\u6CE8\u518C\u529E\u7406\u5165\u5B66\u624B\u7EED\uFF0C\u7F34\u7EB3\u5F53\u6708\u751F\u6D3B\u8D39\uFF0C\u5E76\u7531\u73ED\u4E3B\u4EFB\u5F00\u5177\u5B66\u751F\u5BDD\u5BA4\u5B89\u6392\u5355\uFF0C\u4E86\u89E3\u5B69\u5B50\u5206\u5BBF\u820D\u7684\u60C5\u51B5\u3002"
}, {
  title: 'dark主题',
  top: 150,
  hide: ['sound'],
  theme: 'dark',
  message: "\u5C0A\u656C\u7684\u5BB6\u957F\uFF0C\u4EB2\u7231\u7684\u540C\u5B66\u4EEC\uFF1A\u30001\u3001\u8FDB\u6821\u540E\u8BF7\u5728\u5B66\u751F\u5206\u73ED\u5904\u6216\u7535\u8111\u5206\u73ED\u67E5\u8BE2\u5904\uFF0C\u67E5\u8BE2\u5B69\u5B50\u7684\u5206\u73ED\u60C5\u51B5\uFF0C\u627E\u5230\u5B69\u5B50\u7684\u73ED\u7EA7\u3002\n  \u3000\u30002\u3001\u5230\u5B69\u5B50\u6240\u5728\u73ED\u7EA7\u627E\u73ED\u4E3B\u4EFB\u7ED9\u5B69\u5B50\u6CE8\u518C\u529E\u7406\u5165\u5B66\u624B\u7EED\uFF0C\u7F34\u7EB3\u5F53\u6708\u751F\u6D3B\u8D39\uFF0C\u5E76\u7531\u73ED\u4E3B\u4EFB\u5F00\u5177\u5B66\u751F\u5BDD\u5BA4\u5B89\u6392\u5355\uFF0C\u4E86\u89E3\u5B69\u5B50\u5206\u5BBF\u820D\u7684\u60C5\u51B5\u3002"
}, {
  title: 'light主题',
  top: 200,
  theme: 'light',
  message: "\u5C0A\u656C\u7684\u5BB6\u957F\uFF0C\u4EB2\u7231\u7684\u540C\u5B66\u4EEC\uFF1A\u30001\u3001\u8FDB\u6821\u540E\u8BF7\u5728\u5B66\u751F\u5206\u73ED\u5904\u6216\u7535\u8111\u5206\u73ED\u67E5\u8BE2\u5904\uFF0C\u67E5\u8BE2\u5B69\u5B50\u7684\u5206\u73ED\u60C5\u51B5\uFF0C\u627E\u5230\u5B69\u5B50\u7684\u73ED\u7EA7\u3002\n  \u3000\u30002\u3001\u5230\u5B69\u5B50\u6240\u5728\u73ED\u7EA7\u627E\u73ED\u4E3B\u4EFB\u7ED9\u5B69\u5B50\u6CE8\u518C\u529E\u7406\u5165\u5B66\u624B\u7EED\uFF0C\u7F34\u7EB3\u5F53\u6708\u751F\u6D3B\u8D39\uFF0C\u5E76\u7531\u73ED\u4E3B\u4EFB\u5F00\u5177\u5B66\u751F\u5BDD\u5BA4\u5B89\u6392\u5355\uFF0C\u4E86\u89E3\u5B69\u5B50\u5206\u5BBF\u820D\u7684\u60C5\u51B5\u3002"
}];