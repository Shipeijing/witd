function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { Empty, Input } from 'rs-antd';
import React, { useEffect, useState } from 'react';
import "../styles.less";
import RouteList from "./RouteList";
import RouteSelect from "./RouteSelect";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function (_ref) {
  var routes = _ref.routes,
    onGoPath = _ref.onGoPath;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    list = _useState4[0],
    setList = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    dataList = _useState6[0],
    setDataList = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectList = _useState8[0],
    setSelectList = _useState8[1];
  var _useState9 = useState(null),
    _useState10 = _slicedToArray(_useState9, 2),
    selectRoute = _useState10[0],
    setSelecRoute = _useState10[1];
  useEffect(function () {
    window.addEventListener('keydown', getKeyDown);
    return function () {
      window.removeEventListener('keydown', getKeyDown); // 销毁
    };
  }, [selectList, selectRoute]);
  useEffect(function () {
    var data = [];
    routes === null || routes === void 0 ? void 0 : routes.map(function (item) {
      if (item.children && item.children.length > 0) {
        item.children.map(function (child) {
          data.push(_objectSpread(_objectSpread({}, child), {}, {
            fatherName: item.name
          }));
        });
      } else {
        data.push(_objectSpread(_objectSpread({}, item), {}, {
          fatherName: ''
        }));
      }
    });
    setDataList(data);
  }, [routes]);
  var getKeyDown = function getKeyDown(e) {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'Enter') {
      e.preventDefault();
      if (selectList.length === 0 || selectRoute === null) return;
      if (e.key === 'ArrowUp') {
        var i = selectList.findIndex(function (item) {
          return item.path === selectRoute.path;
        });
        if (i !== -1 && i !== 0) {
          setSelecRoute(selectList[i - 1]);
        }
      }
      if (e.key === 'ArrowDown') {
        var _i2 = selectList.findIndex(function (item) {
          return item.path === selectRoute.path;
        });
        if (_i2 !== -1 && _i2 < selectList.length - 1) {
          setSelecRoute(selectList[_i2 + 1]);
        }
      }
      if (e.key === 'Enter') {
        onGoPath && onGoPath(selectRoute);
      }
    }
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "super-navigation",
    children: [/*#__PURE__*/_jsx("div", {
      className: "super-navigation-header",
      children: /*#__PURE__*/_jsx(Input, {
        value: value,
        className: "super-navigation-search",
        prefix: /*#__PURE__*/_jsx(SearchOutlined, {
          style: {
            fontSize: 20,
            marginRight: 10,
            color: '#565656'
          }
        }),
        placeholder: "\u641C\u7D22\u83DC\u5355"
        // allowClear={{
        //   clearIcon: <CloseCircleOutlined style={{ fontSize: 16, color: '#565656' }} />,
        // }}
        ,
        suffix: /*#__PURE__*/_jsx(MenuOutlined, {
          style: {
            fontSize: 20,
            color: list ? '#1677ff' : '#a8a8a8',
            cursor: 'pointer'
          },
          onClick: function onClick() {
            setList(!list);
          }
        }),
        bordered: false,
        onChange: function onChange(e) {
          setValue(e.target.value);
          var routes = dataList.filter(function (item) {
            return (item.fatherName + ' => ' + item.name).includes(e.target.value);
          });
          setSelectList(routes);
          if (routes.length > 0) {
            setSelecRoute(routes[0]);
          }
        }
      })
    }), /*#__PURE__*/_jsxs("div", {
      className: "super-navigation-body",
      children: [(routes === null || routes === void 0 ? void 0 : routes.length) === 0 && /*#__PURE__*/_jsx(Empty, {
        description: /*#__PURE__*/_jsx("span", {
          style: {
            color: '#565656'
          },
          children: "\u6CA1\u6709\u5185\u5BB9"
        })
      }), list && /*#__PURE__*/_jsx(RouteList, {
        routes: routes,
        onGoPath: onGoPath
      }), value.length > 0 && !list && /*#__PURE__*/_jsx(RouteSelect, {
        routes: selectList,
        onGoPath: onGoPath,
        selectRoute: selectRoute,
        setSelecRoute: setSelecRoute
      })]
    })]
  });
});