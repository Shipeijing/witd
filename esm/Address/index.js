import { message } from 'rs-antd';
import React, { useRef } from 'react';
import Modal from "../Modal";
import Address from "./components/Address";
import { jsx as _jsx } from "react/jsx-runtime";
export default (function (props) {
  var SelectAddressRef = useRef();
  return /*#__PURE__*/_jsx(Modal, {
    width: 700,
    open: props.visible,
    hide: [],
    contentScroll: true,
    title: "\u5730\u533A\u9009\u62E9",
    onOk: function onOk() {
      var data = SelectAddressRef.current.getSelectData();
      if (props.strict && props.level === 'district' && data[data.length - 1].level !== 'district') {
        // 严格模式校验规则
        message.error('请选择到区、县、乡镇级别');
        return;
      }
      props.onChange && props.onChange(data);
    },
    onCancel: props.onCancel,
    children: /*#__PURE__*/_jsx(Address, {
      ref: SelectAddressRef,
      level: (props === null || props === void 0 ? void 0 : props.level) || 'city',
      value: (props === null || props === void 0 ? void 0 : props.value) || []
    })
  });
});