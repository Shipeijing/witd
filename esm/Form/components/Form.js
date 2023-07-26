var _excluded = ["childrenDOM", "column", "rowProps"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { Col, ConfigProvider, Form, Row } from 'rs-antd';
import zhCN from 'rs-antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import FormItem from "../../FormItem";
import { jsx as _jsx } from "react/jsx-runtime";
dayjs.locale('zh-cn');
var times = new Date().getTime();
export default (function (_ref) {
  var _props$labelSize, _props$formProps$layo;
  var childrenDOM = _ref.childrenDOM,
    column = _ref.column,
    rowProps = _ref.rowProps,
    props = _objectWithoutProperties(_ref, _excluded);
  var _column = column !== null && column !== void 0 ? column : 1;
  var labelSize = (_props$labelSize = props.labelSize) !== null && _props$labelSize !== void 0 ? _props$labelSize : 'middle';
  var layout = (_props$formProps$layo = props.formProps.layout) !== null && _props$formProps$layo !== void 0 ? _props$formProps$layo : 'horizontal';
  var renderDOM = function renderDOM(data) {
    // 生成数据dom
    var _DOM = readDOM(_column, data);
    // 生成子组件dom
    var _childrenDOM = readChildrenDOM(_DOM.length, _column, childrenDOM);

    // 合并dom   排序   过滤隐藏项  导出dom
    return _DOM.concat(_childrenDOM).sort(function (a, b) {
      return a.order - b.order;
    }).filter(function (item) {
      return !item.hideShow;
    }).map(function (item) {
      return item.dom;
    });
  };
  return /*#__PURE__*/_jsx(ConfigProvider, {
    locale: zhCN,
    children: /*#__PURE__*/_jsx(Form, _objectSpread(_objectSpread({
      name: 'super-form-' + times,
      className: "super-form ".concat(layout !== 'vertical' && 'super-form-label-' + labelSize),
      form: props.form,
      labelCol: {
        span: getLabelCol(props.formProps.layout)
      },
      wrapperCol: {
        span: getWrapperCol(props.formProps.layout)
      },
      autoComplete: "off",
      layout: layout
    }, props.formProps), {}, {
      children: /*#__PURE__*/_jsx(Row, _objectSpread(_objectSpread({
        gutter: [20, layout === 'inline' ? 20 : 0]
      }, rowProps), {}, {
        children: renderDOM(props.item)
      }))
    }))
  });
});
function readDOM(column, data) {
  if (!data) return [];
  return data.map(function (item, index) {
    var _item$colProps, _item$order, _item$hideShow;
    var colProps = (_item$colProps = item.colProps) !== null && _item$colProps !== void 0 ? _item$colProps : {};
    // 跨列数计算  跨列/总列*24
    var spanNumber = item.span ? Math.floor(item.span / column * 24) : Math.floor(24 / column);
    return {
      order: (_item$order = item.order) !== null && _item$order !== void 0 ? _item$order : index + 1,
      hideShow: (_item$hideShow = item.hideShow) !== null && _item$hideShow !== void 0 ? _item$hideShow : false,
      dom: /*#__PURE__*/_jsx(Col, _objectSpread(_objectSpread({
        span: spanNumber
      }, colProps), {}, {
        children: /*#__PURE__*/_jsx(FormItem, _objectSpread({}, item))
      }), 'form-item-col' + index)
    };
  });
}
function readChildrenDOM(num, column, childrenDOM) {
  if (_typeof(childrenDOM) !== 'object') return [];
  var data = Array.isArray(childrenDOM) ? childrenDOM : [childrenDOM];
  return data.map(function (item, index) {
    var _item$props$colProps;
    var colProps = (_item$props$colProps = item.props.colProps) !== null && _item$props$colProps !== void 0 ? _item$props$colProps : {};
    // 跨列数计算  跨列/总列*24
    var spanNumber = item.span ? Math.floor(item.span / column * 24) : Math.floor(24 / column);
    return {
      order: item.props && item.props.order ? item.props.order : num + index + 1,
      hideShow: item.props && item.props.hideShow ? item.props.hideShow : false,
      dom: /*#__PURE__*/_jsx(Col, _objectSpread(_objectSpread({
        span: spanNumber
      }, colProps), {}, {
        children: item
      }), 'form-item-col-render' + index)
    };
  });
}
function getLabelCol(value) {
  if (value === 'vertical') {
    return 24;
  } else if (value === 'inline') {
    return undefined;
  } else {
    return 6;
  }
}
function getWrapperCol(value) {
  if (value === 'vertical') {
    return 24;
  } else if (value === 'inline') {
    return undefined;
  } else {
    return 18;
  }
}