function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["title", "_close", "onOk", "data", "onCancel", "children"];
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
import { ArrowsAltOutlined, QuestionCircleOutlined, ShrinkOutlined } from '@ant-design/icons';
import { Tooltip } from 'rs-antd';
import React, { useMemo, useRef } from 'react';
import { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import "../../styles.less";
import ResizableBox from "../Resizable/ResizableBox";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function (_ref) {
  var _e$hide, _e$hide2, _e$hide3;
  var title = _ref.title,
    _close = _ref._close,
    onOk = _ref.onOk,
    data = _ref.data,
    onCancel = _ref.onCancel,
    children = _ref.children,
    e = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    fullScreen = _useState2[0],
    setFullScreen = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    transition = _useState4[0],
    setTransition = _useState4[1];
  var modalRef = useRef();
  var _useState5 = useState({
      width: e.width,
      height: e.height
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    state = _useState6[0],
    setState = _useState6[1];
  useEffect(function () {
    setState({
      width: e.width,
      height: e.height
    });
    if (!e.height && !modalRef.current !== null) {
      setTimeout(function () {
        // 延迟为了获取自适应高度
        setState({
          width: e.width,
          height: modalRef.current.scrollHeight
        });
      }, 300);
    }
  }, [e.width, e.height]);
  var onResize = function onResize(e, data) {
    var size = data.size;
    setState(_objectSpread(_objectSpread({}, state), size));
  };
  // 双击放大
  var onDoubleClick = function onDoubleClick() {
    // if (!e.resizable) return;
    if (!fullScreen) {
      setTransition(true);
      setFullScreen(true);
    } else {
      setFullScreen(false);
      setTimeout(function () {
        setTransition(false);
      }, 300);
    }
  };
  var RenderDom = children;
  var MyRenderDom = useMemo(function () {
    return /*#__PURE__*/_jsx(RenderDom, {
      data: data
    });
  }, [data, children]);
  return /*#__PURE__*/_jsx(Draggable, {
    handle: ".super-modal-handle",
    position: fullScreen ? {
      x: 0,
      y: 0
    } : undefined,
    disabled: fullScreen,
    children: /*#__PURE__*/_jsx("div", {
      ref: modalRef,
      className: "super-modal-content",
      children: /*#__PURE__*/_jsxs(ResizableBox, {
        onResize: onResize,
        width: state.width,
        height: state.height,
        lockAspectRatio: true,
        fullScreen: fullScreen,
        children: [!e.pureMode && !((_e$hide = e.hide) !== null && _e$hide !== void 0 && _e$hide.includes('header')) && /*#__PURE__*/_jsxs("div", {
          className: "super-modal-header",
          children: [/*#__PURE__*/_jsx("div", {
            className: "super-modal-handle",
            onDoubleClick: onDoubleClick,
            children: /*#__PURE__*/_jsxs("h3", {
              style: {
                cursor: !fullScreen ? 'pointer' : 'pointer'
              },
              children: [/*#__PURE__*/_jsx("span", {
                className: "super-modal-header-title",
                children: title && title
              }), "\xA0\xA0", e.tips && /*#__PURE__*/_jsx(Tooltip, {
                title: e.tips,
                children: /*#__PURE__*/_jsx(QuestionCircleOutlined, {})
              })]
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "super-modal-header-right",
            children: !((_e$hide2 = e.hide) !== null && _e$hide2 !== void 0 && _e$hide2.includes('action')) && [e.actionSlot && e.actionSlot(data), e.resizable && (!fullScreen ? /*#__PURE__*/_jsx(ArrowsAltOutlined, {
              onClick: function onClick() {
                setTransition(true);
                setFullScreen(true);
              }
            }, 'a') : /*#__PURE__*/_jsx(ShrinkOutlined, {
              onClick: function onClick() {
                setFullScreen(false);
                setTimeout(function () {
                  setTransition(false);
                }, 300);
              }
            }, 'b')), !((_e$hide3 = e.hide) !== null && _e$hide3 !== void 0 && _e$hide3.includes('close')) && /*#__PURE__*/_jsx(Tooltip, {
              title: "\u5173\u95ED\u7A97\u53E3",
              mouseEnterDelay: 1,
              children: /*#__PURE__*/_jsx("span", {
                onClick: function onClick(e) {
                  return onCancel ? onCancel(e) : _close();
                },
                children: CloseIcon
              })
            }, 'd')]
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "super-modal-body",
          style: {
            padding: e.pureMode ? 0 : 20
          }
        })]
      })
    })
  });
});
function filterNumber(n, b) {
  if (typeof n === 'number') {
    return n * b + 'px';
  } else {
    if (n.includes('%')) {
      return Number(n.substring(0, n.length - 1)) * b + '%';
    } else if (n.includes('px')) {
      return Number(n.substring(0, n.length - 2)) * b + 'px';
    } else {
      return '30%';
    }
  }
}
var CloseIcon = /*#__PURE__*/_jsx("svg", {
  t: "1666162790414",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "2891",
  width: "200",
  height: "200",
  children: /*#__PURE__*/_jsx("path", {
    d: "M511.232 438.8352L112.9984 40.6016A51.2 51.2 0 0 0 40.6016 112.9984L438.784 511.232 40.6016 909.4656a51.2 51.2 0 1 0 72.3968 72.448l398.2336-398.2848 398.2336 398.2848a51.2 51.2 0 1 0 72.448-72.448l-398.2848-398.2336 398.2848-398.2336A51.2 51.2 0 0 0 909.4656 40.6016L511.232 438.784z",
    "p-id": "2892"
  })
});