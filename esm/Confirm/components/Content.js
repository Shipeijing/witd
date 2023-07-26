function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
import { BulbOutlined, CheckCircleOutlined, CloseCircleOutlined, ExclamationCircleOutlined, InfoCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'rs-antd';
import React from 'react';
import Button from "../../Button";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function (_ref) {
  var e = Object.assign({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/_jsxs("div", {
    className: "super-confirm-main",
    style: {
      width: e.width || 350
    },
    children: [/*#__PURE__*/_jsxs("div", {
      className: "super-confirm-main-header",
      children: [e.icon ? e.icon : Icon(e.type), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("h3", {
          children: e.title
        }), e.tips && /*#__PURE__*/_jsx(Tooltip, {
          title: e.tips,
          children: /*#__PURE__*/_jsx(BulbOutlined, {
            className: "super-confirm-tips"
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "super-confirm-main-body",
          children: e.content
        })]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "super-confirm-main-footer",
      children: [e.footerSlot && e.footerSlot, !e.hideOk && /*#__PURE__*/_jsx(Button, {
        loading: e.loading,
        style: {
          marginLeft: 12
        },
        onClick: function onClick() {
          var res = e.onOk && e.onOk();
          if (String(res) !== 'true') e._close();
        },
        children: e.okText || '确认'
      }), !e.hideCancel && /*#__PURE__*/_jsx(Button, {
        style: {
          marginLeft: 12
        },
        type: "default",
        onClick: function onClick() {
          e.onCancel && e.onCancel();
          e._close();
        },
        children: e.cancelText || '取消'
      })]
    })]
  });
});
function Icon(type) {
  switch (type) {
    case 'success':
      return /*#__PURE__*/_jsx(CheckCircleOutlined, {
        className: "super-confirm-icon-success"
      });
    case 'error':
      return /*#__PURE__*/_jsx(CloseCircleOutlined, {
        className: "super-confirm-icon-error"
      });
    case 'warning':
      return /*#__PURE__*/_jsx(ExclamationCircleOutlined, {
        className: "super-confirm-icon-warning"
      });
    case 'question':
      return /*#__PURE__*/_jsx(QuestionCircleOutlined, {
        className: "super-confirm-icon-warning"
      });
    case 'none':
      return null;
    default:
      return /*#__PURE__*/_jsx(InfoCircleOutlined, {});
  }
}