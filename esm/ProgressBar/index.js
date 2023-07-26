function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from "./ProgressBar";
export default (function (props) {
  var modalRef = useRef();
  var modalKey = 'super-progress-bar';
  var modalProps = _objectSpread({}, props);
  var _open = function _open() {
    // 指定节点后不创建新节点
    var m = document.getElementById(modalKey);
    // 创建前先判断是否已经存在  如果未存在创建 已存在更新
    if (m === null) {
      var dom = document.createElement('div');
      dom.className = 'super-progress-bar-div';
      dom.id = modalKey;
      document.body.appendChild(dom);
    }
    var _props = _objectSpread(_objectSpread({}, modalProps), {}, {
      _close: _close,
      modalKey: modalKey,
      ref: modalRef
    });
    ReactDOM.render( /*#__PURE__*/React.createElement(ProgressBar, _props, null), document.getElementById(modalKey));
  };
  // 导出外部关闭事件，调用子组件动画
  var _close = function _close(force) {
    if (!force) {
      if (modalRef.current !== undefined && modalRef.current !== null) {
        modalRef.current.close();
      }
    } else {
      var m = document.getElementById(modalKey);
      if (m !== null) {
        ReactDOM.unmountComponentAtNode(m);
        document.body.removeChild(m);
      }
    }
  };
  var _change = function _change(data) {
    modalProps = _objectSpread(_objectSpread(_objectSpread({}, modalProps), data), {}, {
      status: data.status || 'default',
      color: data.color
    });
    if (data.percent) {
      if (data.percent > 100 || data.percent < 0) {
        return;
      }
      data.percent !== 0 ? _open() : _close();
    }
  };
  return [_change, _close, modalKey];
});