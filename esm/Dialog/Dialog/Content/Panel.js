function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React, { useRef } from 'react';
import classNames from 'classnames';
import MemoChildren from "./MemoChildren";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var sentinelStyle = {
  width: 0,
  height: 0,
  overflow: 'hidden',
  outline: 'none'
};
var Panel = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    title = props.title,
    ariaId = props.ariaId,
    footer = props.footer,
    closable = props.closable,
    closeIcon = props.closeIcon,
    onClose = props.onClose,
    children = props.children,
    bodyStyle = props.bodyStyle,
    bodyProps = props.bodyProps,
    modalRender = props.modalRender,
    onMouseDown = props.onMouseDown,
    onMouseUp = props.onMouseUp,
    holderRef = props.holderRef,
    visible = props.visible,
    forceRender = props.forceRender,
    width = props.width,
    height = props.height;

  // ================================= Refs =================================
  var sentinelStartRef = useRef();
  var sentinelEndRef = useRef();
  React.useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        var _sentinelStartRef$cur;
        (_sentinelStartRef$cur = sentinelStartRef.current) === null || _sentinelStartRef$cur === void 0 ? void 0 : _sentinelStartRef$cur.focus();
      },
      changeActive: function changeActive(next) {
        var _document = document,
          activeElement = _document.activeElement;
        if (next && activeElement === sentinelEndRef.current) {
          sentinelStartRef.current.focus();
        } else if (!next && activeElement === sentinelStartRef.current) {
          sentinelEndRef.current.focus();
        }
      }
    };
  });

  // ================================ Style =================================
  var contentStyle = {};
  if (width !== undefined) {
    contentStyle.width = width;
  }
  if (height !== undefined) {
    contentStyle.height = height;
  }
  // ================================ Render ================================
  var footerNode;
  if (footer) {
    footerNode = /*#__PURE__*/_jsx("div", {
      className: "".concat(prefixCls, "-footer"),
      children: footer
    });
  }
  var headerNode;
  if (title) {
    headerNode = /*#__PURE__*/_jsx("div", {
      className: "".concat(prefixCls, "-header"),
      children: /*#__PURE__*/_jsx("div", {
        className: "".concat(prefixCls, "-title"),
        id: ariaId,
        children: title
      })
    });
  }
  var closer;
  if (closable) {
    closer = /*#__PURE__*/_jsx("button", {
      type: "button",
      onClick: onClose,
      "aria-label": "Close",
      className: "".concat(prefixCls, "-close"),
      children: closeIcon || /*#__PURE__*/_jsx("span", {
        className: "".concat(prefixCls, "-close-x")
      })
    });
  }
  var content = /*#__PURE__*/_jsxs("div", {
    className: "".concat(prefixCls, "-content"),
    children: [closer, headerNode, /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
      className: "".concat(prefixCls, "-body"),
      style: bodyStyle
    }, bodyProps), {}, {
      children: children
    })), footerNode]
  });
  return /*#__PURE__*/_jsxs("div", {
    role: "dialog",
    "aria-labelledby": title ? ariaId : null,
    "aria-modal": "true",
    ref: holderRef,
    style: _objectSpread(_objectSpread({}, style), contentStyle),
    className: classNames(prefixCls, className),
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    children: [/*#__PURE__*/_jsx("div", {
      tabIndex: 0,
      ref: sentinelStartRef,
      style: sentinelStyle,
      "aria-hidden": "true"
    }), /*#__PURE__*/_jsx(MemoChildren, {
      shouldUpdate: visible || forceRender,
      children: modalRender ? modalRender(content) : content
    }), /*#__PURE__*/_jsx("div", {
      tabIndex: 0,
      ref: sentinelEndRef,
      style: sentinelStyle,
      "aria-hidden": "true"
    })]
  }, "dialog-element");
});
if (process.env.NODE_ENV !== 'production') {
  Panel.displayName = 'Panel';
}
export default Panel;