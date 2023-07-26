import React, { useRef } from 'react';
import Button from "../../Button";
import FormItem from "../../FormItem";
import Form from "../index";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function () {
  var formRef = useRef();
  var item = [{
    label: '用户名',
    dataType: 'input',
    name: 'username',
    required: true
  }, {
    label: '年龄',
    dataType: 'select',
    dataSource: sexList,
    name: 'sex',
    required: true
  }, {
    label: '座右铭',
    dataType: 'textArea',
    name: 'motto'
  }];
  return /*#__PURE__*/_jsxs(Form, {
    ref: formRef,
    item: item,
    children: [/*#__PURE__*/_jsx(FormItem, {
      title: "\u5730\u5740",
      dataType: "input",
      order: 2,
      name: "address"
    }), /*#__PURE__*/_jsxs(FormItem, {
      labelSpace: true,
      children: [/*#__PURE__*/_jsx(Button, {
        htmlType: "submit",
        children: "\u4FDD\u5B58"
      }), /*#__PURE__*/_jsx(Button, {
        type: "default",
        style: {
          marginLeft: 10
        },
        onClick: function onClick() {
          var _formRef$current;
          (_formRef$current = formRef.current) === null || _formRef$current === void 0 ? void 0 : _formRef$current.resetFields();
        },
        children: "\u91CD\u7F6E"
      }), /*#__PURE__*/_jsx(Button, {
        theme: "dark",
        style: {
          marginLeft: 10
        },
        onClick: function onClick() {
          var _formRef$current2;
          (_formRef$current2 = formRef.current) === null || _formRef$current2 === void 0 ? void 0 : _formRef$current2.setFieldsValue(initData);
        },
        children: "\u9ED8\u8BA4\u503C"
      })]
    })]
  });
});
var initData = {
  username: '小明',
  sex: '1',
  age: 13,
  phone: '13155007766',
  noEdit: '我不能编辑',
  address: '江苏南京',
  motto: '人生如戏，全靠演技'
};
var sexList = [{
  label: '男',
  value: '1'
}, {
  label: '女',
  value: '2'
}];