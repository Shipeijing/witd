function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["children", "showGuide", "noDestroyClose", "className", "footer"];
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
import React, { useEffect, useRef, useState } from 'react';
import { Modal, Tooltip } from 'rs-antd';
import Draggable from 'react-draggable';
import Footer from "./components/Footer";
import "./styles.less";
import { DragOutlined, FullscreenExitOutlined, FullscreenOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export default (function (_ref) {
  var _props$tipsIcon;
  var children = _ref.children,
    showGuide = _ref.showGuide,
    noDestroyClose = _ref.noDestroyClose,
    className = _ref.className,
    footer = _ref.footer,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    disabled = _useState2[0],
    setDisabled = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    fullScreen = _useState4[0],
    setFullScreen = _useState4[1];
  var _useState5 = useState({
      left: 0,
      top: 0,
      bottom: 0,
      right: 0
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    bounds = _useState6[0],
    setBounds = _useState6[1];
  var draggleRef = useRef(null);
  useEffect(function () {
    if (!props.open && fullScreen) {
      // 弹窗关闭后关闭放大
      setFullScreen(false);
    }
  }, [props.open]);
  var _onStart = function onStart(_event, uiData) {
    var _draggleRef$current;
    var _window$document$docu = window.document.documentElement,
      clientWidth = _window$document$docu.clientWidth,
      clientHeight = _window$document$docu.clientHeight;
    var targetRect = (_draggleRef$current = draggleRef.current) === null || _draggleRef$current === void 0 ? void 0 : _draggleRef$current.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y)
    });
  };
  // 双击放大
  var onDoubleClick = function onDoubleClick() {
    if (!fullScreen) {
      setFullScreen(true);
    } else {
      setFullScreen(false);
    }
  };
  var FullScreenProps = fullScreen ? {
    centered: true,
    width: 'calc(100vw - 200px)'
  } : {};
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx(Modal, _objectSpread(_objectSpread(_objectSpread({}, props), FullScreenProps), {}, {
      title: /*#__PURE__*/_jsxs("div", {
        className: "super-modal-title",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "super-modal-title-text",
          children: [props.title, "\xA0\xA0", props.tips && /*#__PURE__*/_jsx(Tooltip, {
            title: props.tips,
            placement: "right",
            children: (_props$tipsIcon = props.tipsIcon) !== null && _props$tipsIcon !== void 0 ? _props$tipsIcon : /*#__PURE__*/_jsx(QuestionCircleOutlined, {})
          })]
        }), !props.disabledScroll && /*#__PURE__*/_jsx("div", {
          className: "super-modal-title-content",
          onMouseOver: function onMouseOver() {
            if (disabled) {
              setDisabled(false);
            }
          },
          onMouseOut: function onMouseOut() {
            setDisabled(true);
          },
          onFocus: function onFocus() {},
          onBlur: function onBlur() {},
          onDoubleClick: onDoubleClick,
          children: showGuide && /*#__PURE__*/_jsxs("div", {
            className: "super-modal-title-active",
            children: [/*#__PURE__*/_jsxs("span", {
              children: [/*#__PURE__*/_jsx(DragOutlined, {}), "\xA0\xA0 \u70B9\u51FB\u62D6\u52A8"]
            }), fullScreen ? /*#__PURE__*/_jsxs("span", {
              style: {
                marginLeft: '8%'
              },
              children: [/*#__PURE__*/_jsx(FullscreenExitOutlined, {}), "\xA0\xA0 \u53CC\u51FB\u7F29\u5C0F"]
            }) : /*#__PURE__*/_jsxs("span", {
              style: {
                marginLeft: '8%'
              },
              children: [/*#__PURE__*/_jsx(FullscreenOutlined, {}), "\xA0\xA0 \u53CC\u51FB\u653E\u5927"]
            })]
          })
        })]
      }),
      wrapClassName: "super-modal",
      className: "super-modal-content ".concat(fullScreen && 'super-modal-content-full-screen', " ").concat((!props.disabledScroll || fullScreen) && 'super-modal-content-scroll', " ").concat(className),
      destroyOnClose: noDestroyClose ? false : true,
      footer: footer !== null && footer !== void 0 ? footer : /*#__PURE__*/_jsx(Footer, _objectSpread({}, props)),
      modalRender: function modalRender(modal) {
        return /*#__PURE__*/_jsx(Draggable, {
          disabled: getDisabled(disabled, fullScreen, props.disabledScroll),
          bounds: bounds,
          onStart: function onStart(event, uiData) {
            return _onStart(event, uiData);
          },
          children: /*#__PURE__*/_jsx("div", {
            ref: draggleRef,
            children: modal
          })
        });
      },
      children: children
    }))
  });
});
function getDisabled(disabled, fullScreen, disabledScroll) {
  // 拖动仅在放大模式、内部滚动模式下生效
  if (!fullScreen && disabledScroll) return true;
  return disabled;
}