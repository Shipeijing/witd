function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { ContainerOutlined } from '@ant-design/icons';
import { message, Upload } from 'rs-antd';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function (_ref) {
  var fileList = _ref.fileList,
    _onChange = _ref.onChange,
    antProps = _ref.antProps;
  var props = _objectSpread({
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    fileList: fileList,
    headers: {},
    listType: 'picture',
    showUploadList: {
      showDownloadIcon: true
    },
    onChange: function onChange(info) {
      if (info.file.status === 'done') {
        message.success("".concat(info.file.name, "\u4E0A\u4F20\u6210\u529F"));
        _onChange([_objectSpread(_objectSpread({}, info.file), {}, {
          url: info.file.response.url
        })]);
      } else if (info.file.status === 'error') {
        message.error("".concat(info.file.name, "\u4E0A\u4F20\u5931\u8D25"));
      }
    },
    onRemove: function onRemove(file) {
      var data = fileList.filter(function (item) {
        return item.url !== file.url;
      });
      _onChange(_toConsumableArray(data));
    }
  }, antProps);
  return /*#__PURE__*/_jsxs(Upload.Dragger, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/_jsx("p", {
      className: "ant-upload-drag-icon",
      children: /*#__PURE__*/_jsx(ContainerOutlined, {})
    }), /*#__PURE__*/_jsx("p", {
      className: "ant-upload-text",
      children: "\u4E0A\u4F20\u6587\u4EF6"
    }), /*#__PURE__*/_jsx("p", {
      className: "ant-upload-hint",
      children: "\u70B9\u51FB\u6211\u9009\u62E9\u6587\u4EF6\u6216\u5C06\u6587\u4EF6\u62D6\u52A8\u5230\u533A\u57DF\u5185"
    })]
  }));
});