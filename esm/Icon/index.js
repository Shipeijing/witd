function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useEffect, useState } from 'react';
import "./styles.less";
import { getSvgContent, ioniconContent } from "./request";
import { getNamedUrl } from "./utils";
import { jsx as _jsx } from "react/jsx-runtime";
export default (function (props) {
  var _props$lazy;
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    svgContent = _useState2[0],
    setSvgContent = _useState2[1];
  var sanitize = (_props$lazy = props.lazy) !== null && _props$lazy !== void 0 ? _props$lazy : true;
  useEffect(function () {
    loadIcon();
  }, []);
  var loadIcon = function loadIcon() {
    var url = getNamedUrl(props.name);
    if (url) {
      if (ioniconContent.has(url)) {
        // sync if it's already loaded
        setSvgContent(ioniconContent.get(url));
      } else {
        // async if it hasn't been loaded
        /**
         * When set to `false`, SVG content that is HTTP fetched will not be checked
         * if the response SVG content has any `<script>` elements, or any attributes
         * that start with `on`, such as `onclick`.
         * @default true
         */
        getSvgContent(url, sanitize).then(function () {
          return setSvgContent(ioniconContent.get(url));
        });
      }
    }
  };
  var getStyles = {
    width: createSizeClasses(props.size),
    height: createSizeClasses(props.size),
    color: createColorClasses(props.color)
  };
  return svgContent ? /*#__PURE__*/_jsx("span", {
    className: "super-icon",
    style: getStyles,
    dangerouslySetInnerHTML: {
      __html: svgContent
    }
  }) : /*#__PURE__*/_jsx("span", {
    className: "super-icon",
    style: getStyles
  });
});
var getIonMode = function getIonMode() {
  return typeof document !== 'undefined' && document.documentElement.getAttribute('mode') || 'md';
};
var createColorClasses = function createColorClasses(color) {
  return color ? "".concat(color) : '#3b3b3b';
};
var createSizeClasses = function createSizeClasses(size) {
  return size ? size : 16;
};