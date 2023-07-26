function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["childrenDOM", "dataList", "setDataList"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useRef } from 'react';
import { Col, ConfigProvider, Form, Row } from 'rs-antd';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import zhCN from 'rs-antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import FormItem from "../../FormItem";
import Button from "../../Button";
import { PlusOutlined } from '@ant-design/icons';
import FormItemBox from "./FormItemBox";
import { useId } from "../../function";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
dayjs.locale('zh-cn');
var times = new Date().getTime();
export default (function (_ref) {
  var childrenDOM = _ref.childrenDOM,
    dataList = _ref.dataList,
    setDataList = _ref.setDataList,
    props = _objectWithoutProperties(_ref, _excluded);
  var SortableRef = useRef(null);
  var dataListLength = Object.keys(dataList);
  var itemLength = props.item ? props.item.length : 1;

  // const onSortStart = () => {
  //   console.log(document.getElementsByClassName('super-form-list-row-dragging')[0]);
  //   document.getElementsByClassName('super-form-list-row-dragging')[0].style.width =
  //     SortableRef.current.scrollWidth + 'px !important';
  // };
  var SortableList = SortableContainer(function () {
    return /*#__PURE__*/_jsx("div", {
      ref: SortableRef,
      children: dataListLength.map(function (item, index) {
        return /*#__PURE__*/_jsx(SortableItem, {
          index: index,
          keyName: item
        }, "item-".concat(index));
      })
    });
  });
  var SortableItem = SortableElement(function (_ref2) {
    var keyName = _ref2.keyName;
    return /*#__PURE__*/_jsx(FormItemBox, {
      items: props.item,
      name: keyName,
      dataLength: dataListLength.length,
      onDelete: function onDelete() {
        _onDelete(keyName);
      }
    });
  });
  var onAdd = function onAdd() {
    var key = useId({
      length: 12,
      hideLine: true
    });
    setDataList(_objectSpread(_objectSpread({}, dataList), {}, _defineProperty({}, key, {})));
  };
  var _onDelete = function _onDelete(keyName) {
    delete dataList[keyName];
    setDataList(_objectSpread({}, dataList));
  };
  var onSortEnd = function onSortEnd(_ref3) {
    var oldIndex = _ref3.oldIndex,
      newIndex = _ref3.newIndex;
    if (oldIndex !== newIndex) {
      var _props$form$setFields;
      var formData = props.form.getFieldsValue();
      var _oldKey = dataListLength[oldIndex];
      var _newKey = dataListLength[newIndex];
      var _oldData = formData[_oldKey];
      var _newData = formData[_newKey];
      props.form.setFieldsValue((_props$form$setFields = {}, _defineProperty(_props$form$setFields, _oldKey, _newData), _defineProperty(_props$form$setFields, _newKey, _oldData), _props$form$setFields));
    }
  };
  return /*#__PURE__*/_jsx(ConfigProvider, {
    locale: zhCN,
    children: /*#__PURE__*/_jsxs(Form, _objectSpread(_objectSpread({
      name: 'super-form-' + times,
      className: "super-form",
      form: props.form,
      autoComplete: "off"
    }, props.formProps), {}, {
      children: [/*#__PURE__*/_jsx("div", {
        style: dataListLength.length > 1 ? {
          marginLeft: 34,
          marginRight: 34
        } : {},
        children: props.item && /*#__PURE__*/_jsx(Row, {
          gutter: [20, 20],
          children: props.item.map(function (item, index) {
            var _item$title;
            return /*#__PURE__*/_jsx(Col, {
              span: Math.floor(24 / itemLength),
              children: /*#__PURE__*/_jsxs("h4", {
                className: item.required ? 'super-form-list-required' : '',
                style: {
                  margin: '0 0 10px 0'
                },
                children: [(_item$title = item.title) !== null && _item$title !== void 0 ? _item$title : item.label, " :"]
              })
            }, 'form-item-col' + index);
          })
        })
      }), /*#__PURE__*/_jsx(SortableList, {
        onSortEnd: onSortEnd
        // onSortStart={onSortStart}
        ,
        useDragHandle: true,
        lockAxis: "y",
        helperClass: "super-form-list-row-dragging"
      }), /*#__PURE__*/_jsx(FormItem, {
        children: /*#__PURE__*/_jsx(Button, {
          type: "dashed",
          icon: /*#__PURE__*/_jsx(PlusOutlined, {}),
          style: {
            width: '100%'
          },
          onClick: onAdd,
          children: "\u6DFB\u52A0\u4E00\u884C"
        })
      })]
    }))
  });
});