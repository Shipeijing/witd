var _excluded = ["data", "onSearchBarFinish", "form", "defaultExpand", "searchText", "resetText", "slotData", "resetPagination", "hideButtonText", "containerStyle", "searchButtonSlot", "searchFormSlot"];
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { DownOutlined, SearchOutlined, SyncOutlined, UpOutlined } from '@ant-design/icons';
import { Col, Form, Row } from 'rs-antd';
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import "../styles.less";
import { valuePropName } from "../utils";
import Button from "../../Button";
import FormItem from "./FormItem";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
// 记录清除计时
var validateStatusDataTime = null;
export default /*#__PURE__*/forwardRef(function (_ref, ref) {
  var data = _ref.data,
    onSearchBarFinish = _ref.onSearchBarFinish,
    form = _ref.form,
    defaultExpand = _ref.defaultExpand,
    searchText = _ref.searchText,
    resetText = _ref.resetText,
    slotData = _ref.slotData,
    resetPagination = _ref.resetPagination,
    hideButtonText = _ref.hideButtonText,
    containerStyle = _ref.containerStyle,
    searchButtonSlot = _ref.searchButtonSlot,
    searchFormSlot = _ref.searchFormSlot,
    e = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(defaultExpand),
    _useState2 = _slicedToArray(_useState, 2),
    expand = _useState2[0],
    _setExpand = _useState2[1];
  var _useState3 = useState(containerStyle.boxPadding * 2 + 32),
    _useState4 = _slicedToArray(_useState3, 2),
    height = _useState4[0],
    setHeight = _useState4[1]; // 72为单行高度，auto自动高度
  var searchFormSlotRender = searchFormSlot ? searchFormSlot() : [];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    validateStatusData = _useState6[0],
    _setValidateStatusData = _useState6[1];
  var _length = getFormLength(data) + searchFormSlotRender.length;
  useImperativeHandle(ref, function () {
    return {
      expand: expand,
      setExpand: function setExpand(data) {
        _setExpand(data);
      },
      setValidateStatusData: function setValidateStatusData(dataIndex) {
        if (!validateStatusData.includes(dataIndex)) {
          _setValidateStatusData([dataIndex]);
          // 3秒后清除标记
          if (validateStatusDataTime !== null) {
            clearTimeout(validateStatusDataTime);
          }
          validateStatusDataTime = setTimeout(function () {
            _setValidateStatusData([]);
          }, 3000);
        }
      }
    };
  }, [expand, validateStatusData]);
  useEffect(function () {
    var rowNum = _length / 3;
    // 判断是否为整数  整数时行数加1  非整数向上取整   缩起时显示1行
    var row = expand ? Math.floor(rowNum) === rowNum ? rowNum + 1 : Math.ceil(rowNum) : 1;
    setHeight(containerStyle.boxPadding * 2 + 32 * row + 18 * (row - 1));
  }, [expand]);
  var getFields = function getFields() {
    var children = [];
    data.map(function (item, i) {
      if (item.slot && item.children) {
        // 如果插槽存在  插入插槽数据   并判断是否为数组插槽
        if (Array.isArray(item.children)) {
          item.children.map(function (dom, ii) {
            children.push( /*#__PURE__*/_jsx(Col, {
              span: 8,
              style: {
                paddingRight: 0
              },
              children: dom
            }, i + '-' + ii));
          });
        } else {
          children.push( /*#__PURE__*/_jsx(Col, {
            span: 8,
            style: {
              paddingRight: 0
            },
            children: item.children
          }, i));
        }
      } else {
        children.push( /*#__PURE__*/_jsx(Col, {
          span: 8,
          style: {
            paddingRight: 0
          },
          children: /*#__PURE__*/_jsx(Form.Item, {
            name: item.key,
            label: item.title,
            labelCol: {
              span: 7,
              offset: 0
            },
            valuePropName: valuePropName(item.dataType),
            validateStatus: validateStatusData.includes(item.dataIndex) ? 'warning' : undefined,
            children: FormItem({
              data: item,
              type: 'SearchBar'
            })
          })
        }, i));
      }
    });
    // 添加插槽数据  老版本  函数版  待删除
    searchFormSlotRender === null || searchFormSlotRender === void 0 ? void 0 : searchFormSlotRender.map(function (item, i) {
      children.push( /*#__PURE__*/_jsx(Col, {
        span: 8,
        style: {
          paddingRight: 0
        },
        children: item
      }, i));
    });
    return !expand ? children.slice(0, 2) : children; // 收起时销毁元素
    // return children; // 元素全部展示
  };

  var getSpan = function getSpan() {
    if (_length < 3) {
      return 24 / 3 * (3 - _length);
    } else {
      return expand ? 24 / 3 * (3 - _length % 3) : 24 / 3;
    }
  };
  if (_length === 0) return null;
  return /*#__PURE__*/_jsx("div", {
    className: "super-searchBar",
    style: {
      height: height,
      background: containerStyle.background
    },
    children: /*#__PURE__*/_jsx("div", {
      style: {
        padding: containerStyle.boxPadding
      },
      children: /*#__PURE__*/_jsx(Form, {
        form: form,
        name: "form",
        layout: "inline",
        onFinish: function onFinish(e) {
          onSearchBarFinish && onSearchBarFinish(e);
        },
        children: /*#__PURE__*/_jsxs(Row, {
          gutter: [18, 18],
          children: [getFields(), /*#__PURE__*/_jsx(Col, {
            span: getSpan(),
            style: {
              paddingRight: 0
            },
            children: /*#__PURE__*/_jsxs("div", {
              className: "super-search-bar-button",
              children: [searchButtonSlot && searchButtonSlot(), slotData.filter(function (item) {
                return item.type === 'searchButton';
              }).map(function (item) {
                return item.children;
              }), /*#__PURE__*/_jsx(Button, {
                style: {
                  marginLeft: 10
                },
                icon: hideButtonText ? /*#__PURE__*/_jsx(SearchOutlined, {}) : undefined,
                onClick: function onClick() {
                  resetPagination();
                },
                children: hideButtonText ? '' : searchText
              }), /*#__PURE__*/_jsx(Button, {
                style: {
                  marginLeft: 10
                },
                type: "default",
                icon: hideButtonText ? /*#__PURE__*/_jsx(SyncOutlined, {}) : undefined,
                onClick: function onClick() {
                  form.resetFields();
                  resetPagination();
                },
                children: hideButtonText ? '' : resetText
              }), _length > 2 && /*#__PURE__*/_jsxs("a", {
                className: "super-search-bar-expand",
                onClick: function onClick() {
                  _setExpand(!expand);
                },
                children: [!hideButtonText && /*#__PURE__*/_jsx("span", {
                  style: {
                    marginRight: 5
                  },
                  children: expand ? '收起' : "\u5C55\u5F00"
                }), expand ? /*#__PURE__*/_jsx(UpOutlined, {}) : /*#__PURE__*/_jsx(DownOutlined, {})]
              })
              // <IconButton
              //   key={'expand'}
              //   // title={expand ? '收起' : `展开`}
              //   icon={expand ? <UpOutlined /> : <DownOutlined />}
              //   // action={expand}
              //   onClick={() => {
              //     setExpand(!expand);
              //   }}
              // />
              ]
            })
          })]
        })
      })
    })
  });
});

function getFormLength(data) {
  // 防止有插槽是数组内容，将数组数量计算进去
  var num = data.length;
  data.map(function (item) {
    if (Array.isArray(item.children)) {
      num = num + item.children.length;
    }
  });
  return num;
}