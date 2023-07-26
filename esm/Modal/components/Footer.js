var _excluded = ["footerSlot", "onOk", "onCancel"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import Button from "../../Button";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function (_ref) {
  var _e$hide, _e$hide2;
  var footerSlot = _ref.footerSlot,
    onOk = _ref.onOk,
    onCancel = _ref.onCancel,
    e = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsxs("div", {
    className: "super-modal-footer",
    children: [footerSlot && footerSlot(e), !((_e$hide = e.hide) !== null && _e$hide !== void 0 && _e$hide.includes('ok')) && /*#__PURE__*/_jsx(Button, {
      loading: e.confirmLoading,
      style: {
        marginLeft: 12
      },
      type: "primary",
      onClick: function onClick(even) {
        return onOk ? onOk(even) : null;
      },
      children: e.okText || '确认'
    }), !((_e$hide2 = e.hide) !== null && _e$hide2 !== void 0 && _e$hide2.includes('cancel')) && /*#__PURE__*/_jsx(Button, {
      style: {
        marginLeft: 12
      },
      type: "default",
      onClick: function onClick(even) {
        return onCancel ? onCancel(even) : null;
      },
      children: e.cancelText || '取消'
    })]
  });
});