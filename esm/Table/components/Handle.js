var _excluded = ["active", "setSize"];
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useState } from 'react';
import { CaretLeftOutlined, EllipsisOutlined, EyeOutlined, FontSizeOutlined, FormOutlined, HourglassOutlined, QrcodeOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';
import IconButton from "./IconButton";
import { Badge, Checkbox, Divider, QRCode, Radio, Space } from 'rs-antd';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var CheckboxGroup = Checkbox.Group;
export default (function (_ref) {
  var active = _ref.active,
    setSize = _ref.setSize,
    e = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  return /*#__PURE__*/_jsxs("div", {
    className: "super-active-right",
    style: {
      width: visible ? active && active.hideDownload ? 150 : 180 : 30
    },
    children: [/*#__PURE__*/_jsxs("div", {
      className: "super-active-right-main",
      children: [active && active.hideDownload ? null : /*#__PURE__*/_jsx(IconButton, {
        title: "\u5BFC\u51FA\u8868\u683C",
        icon: /*#__PURE__*/_jsx(Badge, {
          size: "small",
          count: e.selectedRows.length,
          children: /*#__PURE__*/_jsx(VerticalAlignBottomOutlined, {})
        }),
        onClick: e.downloadTable
      }), /*#__PURE__*/_jsx(IconButton, {
        title: function title() {
          var url = window.location.href;
          return /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx(QRCode, {
              value: url
            }), /*#__PURE__*/_jsx("div", {
              style: {
                marginTop: 5,
                textAlign: 'center'
              },
              children: "\u626B\u63CF\u4E8C\u7EF4\u7801\u8BBF\u95EE"
            })]
          });
        },
        placement: "bottom",
        icon: /*#__PURE__*/_jsx(QrcodeOutlined, {})
      }), /*#__PURE__*/_jsx(IconButton, {
        title: function title() {
          return /*#__PURE__*/_jsx("div", {
            children: /*#__PURE__*/_jsx(Radio.Group, {
              onChange: function onChange(e) {
                setSize(e.target.value);
              },
              value: e.size,
              children: /*#__PURE__*/_jsxs(Space, {
                direction: "vertical",
                children: [/*#__PURE__*/_jsx(Radio, {
                  value: 'default',
                  children: "\u5927\u53F7"
                }), /*#__PURE__*/_jsx(Radio, {
                  value: 'middle',
                  children: "\u4E2D\u7B49"
                }), /*#__PURE__*/_jsx(Radio, {
                  value: 'small',
                  children: "\u5C0F\u53F7"
                })]
              })
            })
          });
        },
        placement: "bottom",
        icon: /*#__PURE__*/_jsx(FontSizeOutlined, {})
      }), /*#__PURE__*/_jsx(IconButton, {
        title: function title() {
          return /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx(Checkbox, {
              indeterminate: e.checkedList.length > 0 && e.checkedList.length < e.CheckboxData.length,
              onChange: e.onCheckAllChange,
              checked: e.checkedList.length === e.CheckboxData.length,
              children: "\u5217\u663E\u793A"
            }), /*#__PURE__*/_jsx(Divider, {
              style: {
                margin: '10px 0'
              }
            }), /*#__PURE__*/_jsx(CheckboxGroup, {
              className: "super-checkbox-group",
              options: e.CheckboxData,
              value: e.checkedList,
              onChange: e.onChange
            })]
          });
        },
        placement: "bottom",
        icon: /*#__PURE__*/_jsx(HourglassOutlined, {})
      }), active && active.hideMode ? null : /*#__PURE__*/_jsx(IconButton, {
        title: !e.readOnly ? '隐藏编辑栏' : "\u663E\u793A\u7F16\u8F91\u680F",
        icon: e.readOnly ? /*#__PURE__*/_jsx(FormOutlined, {}) : /*#__PURE__*/_jsx(EyeOutlined, {}),
        action: e.readOnly,
        onClick: function onClick() {
          e.setReadOnly(!e.readOnly);
        }
      })]
    }), /*#__PURE__*/_jsx("div", {
      style: {
        zIndex: 10,
        background: '#fff'
      },
      children: /*#__PURE__*/_jsx(IconButton
      // title={!visible ? '展开' : `收起`}
      , {
        icon: !visible ? /*#__PURE__*/_jsx(EllipsisOutlined, {}) : /*#__PURE__*/_jsx(CaretLeftOutlined, {}),
        action: visible,
        onClick: function onClick() {
          setVisible(!visible);
        }
      })
    })]
  });
});