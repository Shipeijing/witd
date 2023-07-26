function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import useId from "../function/useId";
import Note from "./Note";
export default (function (props) {
  var modalRef = useRef();
  var modalKey = useId({
    length: 12
  });
  var modalProps = _objectSpread({}, props);
  var _open = function _open() {
    var _theme = props !== null && props !== void 0 && props.theme ? themes.find(function (item) {
      return item.key === (props === null || props === void 0 ? void 0 : props.theme);
    }) : themes[0];
    // 指定节点后不创建新节点
    if (modalProps.getContainer) {
      modalProps.getContainer.style.position = (props === null || props === void 0 ? void 0 : props.position) || 'absolute';
      modalProps.getContainer.style.width = filterNum(props === null || props === void 0 ? void 0 : props.width, '100%');
      modalProps.getContainer.style.top = filterNum(props === null || props === void 0 ? void 0 : props.top);
      modalProps.getContainer.style.left = filterNum(props === null || props === void 0 ? void 0 : props.left);
      modalProps.getContainer.style.background = _theme.bgColor;
      modalProps.getContainer.style.color = _theme.color;
      modalProps.getContainer.style.overflow = 'hidden';
    } else {
      // 创建前先判断是否已经存在  如果未存在创建 已存在更新
      var m = document.getElementById(modalKey);
      if (m === null) {
        var dom = document.createElement('div');
        dom.className = 'super-note-div';
        dom.id = modalKey;
        dom.style.width = filterNum(props === null || props === void 0 ? void 0 : props.width, '100%');
        dom.style.top = filterNum(props === null || props === void 0 ? void 0 : props.top);
        dom.style.left = filterNum(props === null || props === void 0 ? void 0 : props.left);
        dom.style.position = (props === null || props === void 0 ? void 0 : props.position) || 'absolute';
        dom.style.background = _theme.bgColor;
        dom.style.color = _theme.color;
        document.body.appendChild(dom);
      }
    }
    var _props = _objectSpread(_objectSpread({}, modalProps), {}, {
      _close: _close,
      modalKey: modalKey,
      onCancel: modalProps.onCancel,
      ref: modalRef,
      title: modalProps.title,
      hide: modalProps.hide || []
    });
    ReactDOM.render( /*#__PURE__*/React.createElement(Note, _props, null), modalProps.getContainer || document.getElementById(modalKey));
  };
  // 导出外部关闭事件，调用子组件动画
  var _close = function _close() {
    if (modalRef.current !== undefined && modalRef.current !== null) {
      modalRef.current.close();
    }
  };
  var _change = function _change(data) {
    modalProps = _objectSpread(_objectSpread({}, modalProps), data);
  };
  var setVisible = function setVisible(visible) {
    visible ? _open() : _close();
  };
  return [setVisible, _change, modalKey];
});
function filterNum(data, init) {
  return !data ? init || '0px' : typeof data === 'number' ? data + 'px' : data;
}
var themes = [{
  key: 'dark',
  bgColor: '#434343',
  color: '#ffffff'
}, {
  key: 'success',
  bgColor: '#389e0d',
  color: '#ffffff'
}, {
  key: 'error',
  bgColor: '#cf1322',
  color: '#ffffff'
}, {
  key: 'warn',
  bgColor: '#ff9523',
  color: '#ffffff'
}, {
  key: 'light',
  bgColor: '#ffffff',
  color: '#434343'
}];