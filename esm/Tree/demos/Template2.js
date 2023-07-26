function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { Form, Input } from 'rs-antd';
import React, { useEffect, useState } from 'react';
import Tree from "../index";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export default (function () {
  var _useState = useState(treeData),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var onAdd = function onAdd(newData, parentData) {
    if (parentData) {
      setData([].concat(_toConsumableArray(data), [_objectSpread(_objectSpread({}, newData), {}, {
        parentId: parentData.key
      })]));
    } else {
      setData([].concat(_toConsumableArray(data), [_objectSpread(_objectSpread({}, newData), {}, {
        parentId: '0'
      })]));
    }
  };
  var onUpdate = function onUpdate(newData, oldData) {
    var _data = data.map(function (item) {
      return item.key === oldData.key ? _objectSpread(_objectSpread({}, oldData), newData) : item;
    });
    setData(_toConsumableArray(_data));
  };
  var onDelete = function onDelete(t) {
    var _data = data.filter(function (item) {
      return item.key !== t.key;
    });
    console.log(_data);
    setData(_toConsumableArray(_data));
  };
  return /*#__PURE__*/_jsx("div", {
    style: {
      width: '100%',
      height: 500,
      background: '#eee',
      padding: 20
    },
    children: /*#__PURE__*/_jsx("div", {
      style: {
        background: '#fff',
        padding: 20,
        width: 280,
        height: '100%'
      },
      children: /*#__PURE__*/_jsx(Tree, {
        treeData: data,
        title: '动态使用',
        formRender: function formRender(form, props) {
          return /*#__PURE__*/_jsx(MyForm, {
            form: form,
            props: props
          });
        },
        autoStow: true,
        form: {
          add: true,
          delete: true,
          update: true
        },
        onAdd: onAdd,
        onDelete: onDelete,
        onUpdate: onUpdate
      })
    })
  });
});
function MyForm(_ref) {
  var form = _ref.form,
    props = _ref.props;
  useEffect(function () {
    if (props.type === 'update') {
      form.setFieldsValue(props.data);
    }
    return function () {
      form.resetFields();
    };
  }, []);
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsxs(Form, _objectSpread(_objectSpread({}, layout), {}, {
      form: form,
      name: "control-hooks",
      children: [/*#__PURE__*/_jsx(Form.Item, {
        name: "key",
        label: "\u4F9D\u8D56\u503C",
        rules: [{
          required: true
        }],
        children: /*#__PURE__*/_jsx(Input, {
          disabled: props.type === 'update'
        })
      }), /*#__PURE__*/_jsx(Form.Item, {
        name: "title",
        label: "\u540D\u79F0",
        rules: [{
          required: true
        }],
        children: /*#__PURE__*/_jsx(Input, {})
      })]
    }))
  });
}
var treeData = [{
  title: '浩鲸云智能科技有限公司',
  key: '0-0',
  parentId: '0'
}, {
  title: '啊点的点点滴滴插槽插槽吃反反复复',
  key: '0-0-0',
  parentId: '0-0'
}, {
  title: '任务任务',
  key: '0-0-1',
  parentId: '0-0'
}, {
  title: '额亲亲',
  key: '0-1',
  parentId: '0'
}, {
  title: '大大滴干活',
  key: '0-1-0',
  parentId: '0-1'
}, {
  title: '偶一抬头1',
  key: '0-1-1',
  parentId: '0-1'
}, {
  title: '偶一抬头2',
  key: '0-1-2',
  parentId: '0-1'
}, {
  title: '偶一抬头3',
  key: '0-1-3',
  parentId: '0-1'
}, {
  title: '偶一抬头4',
  key: '0-1-4',
  parentId: '0-1'
}, {
  title: '偶一抬头5',
  key: '0-1-5',
  parentId: '0-1'
}, {
  title: '偶一抬头6',
  key: '0-1-6',
  parentId: '0-1'
}, {
  title: '偶一抬头7',
  key: '0-1-7',
  parentId: '0-1'
}, {
  title: '偶一抬头8',
  key: '0-1-8',
  parentId: '0-1'
}];
var layout = {
  labelCol: {
    span: 5
  },
  wrapperCol: {
    span: 15
  }
};