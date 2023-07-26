function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
import { CloseOutlined, SoundOutlined } from '@ant-design/icons';
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import ReactDOM from 'react-dom';
import Marquee from 'react-fast-marquee';
import "./styles.less";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _e$textWidth, _e$direction, _e$play;
  var e = Object.assign({}, (_objectDestructuringEmpty(_ref), _ref));
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    height = _useState2[0],
    setHeight = _useState2[1];
  useImperativeHandle(ref, function () {
    return {
      close: close
    };
  }, []);
  useEffect(function () {
    setHeight(35);
    return function () {};
  }, []);
  // 关闭时加载动画
  var close = function close() {
    setHeight(0);
    setTimeout(function () {
      if (e.getContainer) {
        ReactDOM.unmountComponentAtNode(e.getContainer);
      } else {
        var m = document.getElementById(e.modalKey);
        if (m !== null) {
          ReactDOM.unmountComponentAtNode(m);
          document.body.removeChild(m);
        }
      }
    }, 300);
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "super-note",
    style: {
      width: (_e$textWidth = e.textWidth) !== null && _e$textWidth !== void 0 ? _e$textWidth : "calc(100% - ".concat(!e.hide.includes('close') ? '65' : '20', "px)"),
      height: height,
      paddingRight: !e.hide.includes('close') ? 45 : 0
    },
    children: [/*#__PURE__*/_jsxs("div", {
      className: "super-note-main",
      children: [!e.hide.includes('sound') && /*#__PURE__*/_jsx(SoundOutlined, {}), /*#__PURE__*/_jsxs("h4", {
        children: [e.title, " :"]
      }), /*#__PURE__*/_jsx("div", {
        className: "super-note-content",
        children: /*#__PURE__*/_jsxs(Marquee, {
          gradient: false,
          pauseOnHover: true,
          direction: (_e$direction = e.direction) !== null && _e$direction !== void 0 ? _e$direction : 'left',
          speed: e.speed,
          delay: e.delay,
          loop: e.loop,
          play: (_e$play = e.play) !== null && _e$play !== void 0 ? _e$play : true,
          children: [e.message, e.buttonText && /*#__PURE__*/_jsx("a", {
            className: "super-note-active",
            onClick: function onClick() {
              e.onPressButton && e.onPressButton();
            },
            children: e.buttonText
          })]
        })
      })]
    }), !e.hide.includes('close') && /*#__PURE__*/_jsx(CloseOutlined, {
      className: "super-note-close",
      onClick: close
    })]
  });
});