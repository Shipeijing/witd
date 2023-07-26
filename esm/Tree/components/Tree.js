function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["className", "style", "treeData", "addText", "onAdd", "onUpdate", "onDelete"];
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
import { CaretDownOutlined, DeleteOutlined, EditOutlined, PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { Empty, Input, Tree } from 'rs-antd';
import React, { useRef, useState } from 'react';
import Box from "../../Box";
import Button from "../../Button";
import Confirm from "../../Confirm";
import { arrToTree } from "../../function";
import "../styles.less";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function (_ref) {
  var _e$form;
  var className = _ref.className,
    style = _ref.style,
    treeData = _ref.treeData,
    addText = _ref.addText,
    onAdd = _ref.onAdd,
    onUpdate = _ref.onUpdate,
    onDelete = _ref.onDelete,
    e = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    searchValue = _useState2[0],
    setSearchValue = _useState2[1];
  var inputRef = useRef(null);
  var renderIcons = e.renderIcons ? e.renderIcons() : [];
  var fieldNames = _objectSpread({
    title: 'title',
    key: 'key',
    children: 'children'
  }, e.fieldNames);
  var dataSource = fliterData(JSON.parse(JSON.stringify(treeData)), searchValue, fieldNames, e.parentId);
  return /*#__PURE__*/_jsxs("div", {
    className: "super-tree ".concat(className),
    style: _objectSpread({}, style),
    children: [!e.hideHeader && /*#__PURE__*/_jsxs("div", {
      className: "super-tree-add",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "super-tree-title",
        children: [e.titleIcon && e.titleIcon, /*#__PURE__*/_jsx("h3", {
          children: e.title
        })]
      }), e.form && ((_e$form = e.form) === null || _e$form === void 0 ? void 0 : _e$form.add) && /*#__PURE__*/_jsx(Button, {
        type: "primary"
        // icon={<PlusOutlined />}
        ,
        onClick: function onClick() {
          onAdd && onAdd();
        },
        children: addText || '添加数据'
      })]
    }), !e.hideSearch && /*#__PURE__*/_jsx("div", {
      style: {
        marginBottom: 20
      },
      children: /*#__PURE__*/_jsx(Input, {
        ref: inputRef,
        placeholder: "\u6309\u4E0BEnter\u952E\u641C\u7D22",
        suffix: /*#__PURE__*/_jsx(SearchOutlined, {
          onClick: function onClick() {
            setSearchValue(inputRef.current.input.value.trim());
          }
        }),
        allowClear: true,
        onPressEnter: function onPressEnter() {
          setSearchValue(inputRef.current.input.value.trim());
        },
        onChange: function onChange(e) {
          e.persist();
          if (e.target.value.trim().length === 0 && searchValue.length !== 0) {
            setSearchValue('');
          }
        }
      })
    }), dataSource && (dataSource === null || dataSource === void 0 ? void 0 : dataSource.length) > 0 ? /*#__PURE__*/_jsx(Tree, _objectSpread(_objectSpread({
      className: "super-tree-main",
      blockNode: true,
      showLine: true,
      switcherIcon: /*#__PURE__*/_jsx(CaretDownOutlined, {})
    }, e), {}, {
      treeData: dataSource,
      titleRender: function titleRender(t) {
        var _e$form2, _e$form3, _e$form4;
        return /*#__PURE__*/_jsxs("div", {
          className: "super-tree-item",
          children: [/*#__PURE__*/_jsx("div", {
            className: "super-tree-item-title ".concat(e.form && e.form.hideIconButton && 'super-tree-item-title-nopadding', " ").concat(e.autoStow && 'super-tree-item-title-auto'),
            children: /*#__PURE__*/_jsxs("span", {
              children: [t.icon && renderIcons.length >= t.icon && /*#__PURE__*/_jsx("div", {
                children: renderIcons[t.icon - 1]
              }), /*#__PURE__*/_jsx("span", {
                children: t[fieldNames.title]
              })]
            })
          }), (!e.form || !e.form.hideIconButton) && /*#__PURE__*/_jsxs(Box, {
            className: "super-tree-item-button ".concat(e.autoStow && 'super-tree-item-button-auto'),
            children: [e.form && ((_e$form2 = e.form) === null || _e$form2 === void 0 ? void 0 : _e$form2.add) && (!t._hideIconButton || !t._hideIconButton.includes('add')) && /*#__PURE__*/_jsx(PlusCircleOutlined, {
              onClick: function onClick() {
                onAdd && onAdd(undefined, t);
              }
            }), e.form && ((_e$form3 = e.form) === null || _e$form3 === void 0 ? void 0 : _e$form3.update) && (!t._hideIconButton || !t._hideIconButton.includes('update')) && /*#__PURE__*/_jsx(EditOutlined, {
              onClick: function onClick() {
                var parent = undefined;
                if (t.parentId && t.parentId !== e.parentId) {
                  parent = treeData === null || treeData === void 0 ? void 0 : treeData.find(function (item) {
                    return item[fieldNames.key] === t.parentId;
                  });
                }
                onUpdate && onUpdate(t, parent);
              }
            }), e.form && ((_e$form4 = e.form) === null || _e$form4 === void 0 ? void 0 : _e$form4.delete) && (!t._hideIconButton || !t._hideIconButton.includes('delete')) && /*#__PURE__*/_jsx(DeleteOutlined, {
              onClick: function onClick() {
                Confirm({
                  title: '删除确认',
                  type: 'warning',
                  content: '您确认要删除这条数据吗？',
                  onOk: function onOk() {
                    onDelete && onDelete(t);
                  }
                });
              }
            })]
          })]
        });
      }
    })) : /*#__PURE__*/_jsx("div", {
      className: 'super-tree-empty-content',
      children: /*#__PURE__*/_jsx(Empty, {
        description: /*#__PURE__*/_jsx("span", {
          children: "\u6682\u65E0\u6570\u636E"
        })
      })
    })]
  });
});
function fliterData(treeData, searchValue, fieldNames, parentId) {
  if (!treeData) return [];
  if (searchValue.trim().length === 0) {
    return arrToTree(treeData, parentId !== null && parentId !== void 0 ? parentId : '0', fieldNames.key);
  }
  var data = treeData.filter(function (item) {
    return item[fieldNames.title] && typeof item[fieldNames.title] === 'string' && item[fieldNames.title].includes(searchValue);
  });
  return data;
}