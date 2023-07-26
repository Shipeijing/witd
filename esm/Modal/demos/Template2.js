import { Button } from 'rs-antd';
import React from 'react';
import useModal from "../useModal";
import Template from "../../Table/demos/Template3";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export default (function () {
  var modal = useModal();
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx(Button, {
      type: "primary",
      onClick: function onClick() {
        modal.open({
          width: 1000,
          title: '弹窗演示',
          data: {
            text: '111111'
          },
          onOk: function onOk() {
            modal.close();
          },
          render: function render(e) {
            return /*#__PURE__*/_jsx(Template, {});
          }
        });
      },
      children: "\u6253\u5F00"
    })
  });
});