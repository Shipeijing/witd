function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["children", "className", "draggableOpts", "width", "height", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"],
  _excluded2 = ["handleAxis"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// @flow
import * as React from 'react';
import { useEffect, useState } from 'react';
import { DraggableCore } from 'react-draggable';
import { cloneElement } from "../../utils";
import "./styles.css";

// The base <Resizable> component.
// This component does not have state and relies on the parent to set its props based on callback data.
import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
var defaultProps = {
  axis: 'both',
  handleSize: [20, 20],
  lockAspectRatio: false,
  minConstraints: [20, 20],
  maxConstraints: [Infinity, Infinity],
  resizeHandles: ['se'],
  transformScale: 1
};
export default (function (props) {
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    lastHandleRect = _useState2[0],
    setlastHandleRect = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    slack = _useState4[0],
    setslack = _useState4[1];
  useEffect(function () {
    return function () {
      resetData();
    };
  }, []);
  var resetData = function resetData() {
    setslack(null);
    setlastHandleRect(null);
  };

  // Clamp width and height within provided constraints
  var runConstraints = function runConstraints(width, height) {
    var minConstraints = props.minConstraints,
      maxConstraints = props.maxConstraints,
      lockAspectRatio = props.lockAspectRatio;
    // short circuit
    if (!minConstraints && !maxConstraints && !lockAspectRatio) return [width, height];

    // If constraining to min and max, we need to also fit width and height to aspect ratio.
    if (lockAspectRatio) {
      var ratio = props.width / props.height;
      var deltaW = width - props.width;
      var deltaH = height - props.height;

      // Find which coordinate was greater and should push the other toward it.
      // E.g.:
      // ratio = 1, deltaW = 10, deltaH = 5, deltaH should become 10.
      // ratio = 2, deltaW = 10, deltaH = 6, deltaW should become 12.
      if (Math.abs(deltaW) > Math.abs(deltaH * ratio)) {
        height = width / ratio;
      } else {
        width = height * ratio;
      }
    }
    var oldW = width,
      oldH = height;

    // Add slack to the values used to calculate bound position. This will ensure that if
    // we start removing slack, the element won't react to it right away until it's been
    // completely removed.
    var _ref = slack || [0, 0],
      _ref2 = _slicedToArray(_ref, 2),
      slackW = _ref2[0],
      slackH = _ref2[1];
    width += slackW;
    height += slackH;
    if (minConstraints) {
      width = Math.max(minConstraints[0], width);
      height = Math.max(minConstraints[1], height);
    }
    if (maxConstraints) {
      width = Math.min(maxConstraints[0], width);
      height = Math.min(maxConstraints[1], height);
    }

    // If the width or height changed, we must have introduced some slack. Record it for the next iteration.
    setslack([slackW + (oldW - width), slackH + (oldH - height)]);
    return [width, height];
  };

  /**
   * Wrapper around drag events to provide more useful data.
   *
   * @param  {String} handlerName Handler name to wrap.
   * @return {Function}           Handler function.
   */
  var resizeHandler = function resizeHandler(handlerName, axis) {
    return function (e, _ref3) {
      var node = _ref3.node,
        deltaX = _ref3.deltaX,
        deltaY = _ref3.deltaY;
      // Reset data in case it was left over somehow (should not be possible)
      if (handlerName === 'onResizeStart') resetData();

      // Axis restrictions
      var canDragX = (props.axis === 'both' || props.axis === 'x') && axis !== 'n' && axis !== 's';
      var canDragY = (props.axis === 'both' || props.axis === 'y') && axis !== 'e' && axis !== 'w';
      // No dragging possible.
      if (!canDragX && !canDragY) return;
      // Decompose axis for later use
      var axisV = axis[0];
      var axisH = axis[axis.length - 1]; // intentionally not axis[1], so that this catches axis === 'w' for example

      // Track the element being dragged to account for changes in position.
      // If a handle's position is changed between callbacks, we need to factor this in to the next callback.
      // Failure to do so will cause the element to "skip" when resized upwards or leftwards.
      var handleRect = node.getBoundingClientRect();
      if (lastHandleRect != null) {
        // If the handle has repositioned on either axis since last render,
        // we need to increase our callback values by this much.
        // Only checking 'n', 'w' since resizing by 's', 'w' won't affect the overall position on page,
        if (axisH === 'w') {
          var deltaLeftSinceLast = handleRect.left - lastHandleRect.left;
          deltaX += deltaLeftSinceLast;
        }
        if (axisV === 'n') {
          var deltaTopSinceLast = handleRect.top - lastHandleRect.top;
          deltaY += deltaTopSinceLast;
        }
      }
      // Storage of last rect so we know how much it has really moved.
      setlastHandleRect(handleRect);

      // Reverse delta if using top or left drag handles.
      if (axisH === 'w') deltaX = -deltaX;
      if (axisV === 'n') deltaY = -deltaY;

      // Update w/h by the deltas. Also factor in transformScale.
      var owidth = props.width + (canDragX ? deltaX / props.transformScale : 0);
      var oheight = props.height + (canDragY ? deltaY / props.transformScale : 0);
      // Run user-provided constraints.
      var _runConstraints = runConstraints(owidth, oheight),
        _runConstraints2 = _slicedToArray(_runConstraints, 2),
        width = _runConstraints2[0],
        height = _runConstraints2[1];
      var dimensionsChanged = width !== props.width || height !== props.height;

      // Call user-supplied callback if present.
      var cb = typeof props[handlerName] === 'function' ? props[handlerName] : null;
      // Don't call 'onResize' if dimensions haven't changed.
      var shouldSkipCb = handlerName === 'onResize' && !dimensionsChanged;
      if (cb && !shouldSkipCb) {
        var _e$persist;
        (_e$persist = e.persist) === null || _e$persist === void 0 ? void 0 : _e$persist.call(e);
        var size = {};
        if (canDragX && !isNaN(width)) {
          size.width = width | 0;
        }
        if (canDragY && !isNaN(height)) {
          size.height = height | 0;
        }
        cb(e, {
          node: node,
          size: size,
          handle: axis
        });
      }

      // Reset internal data
      if (handlerName === 'onResizeStop') resetData();
    };
  };

  // Pass along only props not meant for the `<Resizable>`.`
  // eslint-disable-next-line no-unused-vars
  var children = props.children,
    className = props.className,
    draggableOpts = props.draggableOpts,
    width = props.width,
    height = props.height,
    handleSize = props.handleSize,
    lockAspectRatio = props.lockAspectRatio,
    axis = props.axis,
    minConstraints = props.minConstraints,
    maxConstraints = props.maxConstraints,
    onResize = props.onResize,
    onResizeStop = props.onResizeStop,
    onResizeStart = props.onResizeStart,
    resizeHandles = props.resizeHandles,
    transformScale = props.transformScale,
    p = _objectWithoutProperties(props, _excluded);

  // What we're doing here is getting the child of this element, and cloning it with this element's props.
  // We are then defining its children as:
  // 1. Its original children (resizable's child's children), and
  // 2. One or more draggable handles.
  return cloneElement(children, {
    className: "".concat(className ? "".concat(className, " ") : '', " react-resizable"),
    children: [children.props.children, /*#__PURE__*/_jsx("div", {
      className: "super-modal-footer-border"
    })].concat(_toConsumableArray(resizeHandles.map(function (handleAxis) {
      // Create a ref to the handle so that `<DraggableCore>` doesn't have to use ReactDOM.findDOMNode().
      var ref = React.useRef();
      return /*#__PURE__*/_createElement(DraggableCore, _objectSpread(_objectSpread({}, draggableOpts), {}, {
        nodeRef: ref,
        key: "resizableHandle-".concat(handleAxis),
        onStop: resizeHandler('onResizeStop', handleAxis),
        onStart: resizeHandler('onResizeStart', handleAxis),
        onDrag: resizeHandler('onResize', handleAxis)
      }), /*#__PURE__*/_jsx(CustomResizeHandle, {
        handleAxis: handleAxis,
        ref: ref
      }));
    })))
  });
});
var CustomResizeHandle = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var handleAxis = props.handleAxis,
    restProps = _objectWithoutProperties(props, _excluded2);
  return /*#__PURE__*/_jsx("div", _objectSpread({
    className: "react-resizable-handle react-resizable-handle-".concat(handleAxis),
    ref: ref
  }, restProps));
});