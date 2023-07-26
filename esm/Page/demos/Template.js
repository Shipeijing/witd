import { Menu } from 'rs-antd';
import MenuItem from 'rs-antd/es/menu/MenuItem';
import React from 'react';
import Table from "../../Table";
import Page from "../index";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function () {
  var routes = [{
    title: '列表',
    url: ''
  }, {
    title: '用户列表',
    url: ''
  }];
  var items = [getItem('列表', 'sub1', null, [getItem('用户列表', '1')]), getItem('数据库', 'sub2', null, [getItem('数据中心', '2')])];
  return /*#__PURE__*/_jsxs("div", {
    style: {
      background: '#eee',
      display: 'flex',
      flexDirection: 'row'
    },
    children: [/*#__PURE__*/_jsx(Menu, {
      style: {
        width: 256
      },
      defaultSelectedKeys: ['1'],
      defaultOpenKeys: ['sub1'],
      mode: "inline",
      items: items
    }), /*#__PURE__*/_jsx(Page, {
      routes: routes,
      children: /*#__PURE__*/_jsx(Table, {
        dataSource: first,
        columns: columns,
        active: {
          hide: true
        }
      })
    })]
  });
});
function getItem(label, key, icon, children, type) {
  return {
    key: key,
    icon: icon,
    children: children,
    label: label,
    type: type
  };
}
var first = [{
  id: '6346345',
  name: '苏大强苏大强苏大强苏大强苏大强苏大强',
  age: 32
}, {
  id: '12142352',
  name: '胡彦祖',
  age: 42
}, {
  id: '53256356',
  name: '胡彦祖',
  age: 42
}, {
  id: '64352353',
  name: '胡彦祖',
  age: 42
}, {
  id: '5452756474',
  name: '胡彦祖',
  age: 42
}, {
  id: '42344745',
  name: '胡彦祖',
  age: 42
}];
var columns = [{
  title: '账号',
  dataIndex: 'id',
  readOnly: true,
  search: true
}, {
  title: '姓名',
  dataIndex: 'name',
  search: true,
  required: true,
  width: 100,
  ellipsis: true
}, {
  title: '年龄',
  dataIndex: 'age',
  dataType: 'number',
  search: true,
  required: true
}];