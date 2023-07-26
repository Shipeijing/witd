import React, { useRef } from 'react';
import Button from "../../Button";
import FormList from "../index";
import dayjs from 'dayjs';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function () {
  var formRef = useRef();
  var item = [{
    label: '姓名',
    name: 'name',
    required: true
  }, {
    label: '年龄',
    name: 'age',
    required: true
  }, {
    label: '家庭住址',
    name: 'address'
  }, {
    label: '出生时间',
    dataType: 'time',
    name: 'birthTime'
  }];
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx(FormList, {
      ref: formRef,
      item: item
    }), /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx(Button, {
        onClick: function onClick() {
          var _formRef$current;
          (_formRef$current = formRef.current) === null || _formRef$current === void 0 ? void 0 : _formRef$current.validateFields().then(function (res) {
            return console.log(res);
          });
        },
        children: "\u6821\u9A8C"
      }), /*#__PURE__*/_jsx(Button, {
        type: "primary",
        theme: "success",
        style: {
          margin: '0 20px'
        },
        onClick: function onClick() {
          var _formRef$current2;
          (_formRef$current2 = formRef.current) === null || _formRef$current2 === void 0 ? void 0 : _formRef$current2.setFieldsValue([{
            name: '小明',
            age: '12',
            address: '江苏南京',
            birthTime: dayjs('10:22:00', 'HH:MM:ss')
          }, {
            name: '刘华强',
            age: '32',
            address: '广东深圳',
            birthTime: dayjs('10:22:00', 'HH:MM:ss')
          }]);
        },
        children: "\u521D\u59CB\u503C"
      }), /*#__PURE__*/_jsx(Button, {
        type: "default",
        onClick: function onClick() {
          var _formRef$current3;
          (_formRef$current3 = formRef.current) === null || _formRef$current3 === void 0 ? void 0 : _formRef$current3.resetFields();
        },
        children: "\u6E05\u7A7A"
      })]
    })]
  });
});