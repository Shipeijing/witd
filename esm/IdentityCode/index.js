function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["onChange", "type", "hideDot", "simple", "hideLine"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useEffect, useRef } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
var defaultProps = {
  width: 100,
  height: 32,
  codeLength: 4,
  lineNumber: 4,
  dotNumber: 50,
  backgroundColorMin: 180,
  backgroundColorMax: 240,
  colorMin: 50,
  colorMax: 160,
  lineColorMin: 40,
  lineColorMax: 180,
  dotColorMin: 0,
  dotColorMax: 255
};
export default (function (_ref) {
  var onChange = _ref.onChange,
    type = _ref.type,
    hideDot = _ref.hideDot,
    simple = _ref.simple,
    hideLine = _ref.hideLine,
    e = _objectWithoutProperties(_ref, _excluded);
  var canvasRef = useRef(null);
  var state = _objectSpread(_objectSpread(_objectSpread({}, defaultProps), e), {}, {
    fontSizeMax: e.height ? e.height - 2 : 30,
    fontSizeMin: e.height ? e.height - 7 : 25
  });
  useEffect(function () {
    refresh();
  }, []);
  var drawPic = function drawPic(code) {
    var _canvasRef$current;
    var ctx = (_canvasRef$current = canvasRef.current) === null || _canvasRef$current === void 0 ? void 0 : _canvasRef$current.getContext('2d');
    ctx.fillStyle = simple ? '#ffffff' : randomColor(state.backgroundColorMin, state.backgroundColorMax);
    ctx.strokeStyle = simple ? '#ffffff' : randomColor(state.backgroundColorMin, state.backgroundColorMax);
    ctx.fillRect(0, 0, state.width, state.height);
    ctx.strokeRect(0, 0, state.width, state.height);
    for (var i = 0; i < code.length; i++) {
      drawText(ctx, code[i], i);
    }
    if (!hideLine) drawLine(ctx);
    if (!hideDot) drawDot(ctx);
  };
  var randomNum = function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };
  var randomColor = function randomColor(min, max) {
    var r = randomNum(min, max);
    var g = randomNum(min, max);
    var b = randomNum(min, max);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  };
  var drawText = function drawText(ctx, txt, i) {
    ctx.fillStyle = randomColor(state.colorMin, state.colorMax);
    ctx.font = randomNum(state.fontSizeMin, state.fontSizeMax) + 'px SimHei';
    ctx.textBaseline = 'alphabetic';
    var x = (i + 1) * (state.width / (state.codeLength + 1));
    var y = randomNum(state.fontSizeMax, state.height - 12);
    var deg = randomNum(-45, 45);
    ctx.translate(x, y);
    ctx.rotate(deg * Math.PI / 180);
    ctx.fillText(txt, 0, 0);
    ctx.rotate(-deg * Math.PI / 180);
    ctx.translate(-x, -y);
  };
  var drawLine = function drawLine(ctx) {
    for (var i = 0; i < state.lineNumber; i++) {
      ctx.strokeStyle = simple ? '#000' : randomColor(state.lineColorMin, state.lineColorMax);
      ctx.beginPath();
      ctx.moveTo(randomNum(0, state.width), randomNum(0, state.height)); //设置起点x,y
      ctx.lineTo(randomNum(0, state.width), randomNum(0, state.height)); //绘制直线 x,y 一条当前位置到x,y点的直线
      ctx.stroke();
    }
  };
  var drawDot = function drawDot(ctx) {
    for (var i = 0; i < (simple ? 200 : state.dotNumber); i++) {
      ctx.fillStyle = simple ? '#757575' : randomColor(0, 255);
      ctx.beginPath();
      ctx.arc(randomNum(0, state.width), randomNum(0, state.height), 1, 0, 2 * Math.PI);
      ctx.fill();
    }
  };
  var refresh = function refresh() {
    var words = getCodeList(type);
    var code = '';
    for (var i = 0; i < state.codeLength; i++) {
      code += words[Math.floor(Math.random() * words.length)];
    }
    var fooCode = onChange && onChange(code);
    fooCode ? drawPic(fooCode) : drawPic(code);
  };
  return /*#__PURE__*/_jsx("canvas", {
    ref: canvasRef,
    width: state.width,
    height: state.height,
    onClick: refresh,
    style: {
      cursor: 'pointer'
    }
  });
});
var numWords = '1234567890';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
function getCodeList(type) {
  switch (type) {
    case 'alphabet':
      return uppercase + lowercase;
    case 'lowercase':
      return lowercase;
    case 'uppercase':
      return uppercase;
    case 'number':
      return numWords;
    default:
      return numWords + uppercase + lowercase;
  }
}