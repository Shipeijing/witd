/**
 * desc:  完整功能展示
 * background: '#f6f7f9'
 */
import React from 'react';
import TablePro from "../index";
import { jsx as _jsx } from "react/jsx-runtime";
var url = 'http://60.173.17.240:9960';
export default (function () {
  var columns = [{
    title: '姓名',
    dataIndex: 'title',
    search: true,
    required: true
  }, {
    title: '备注',
    dataIndex: 'subTitle',
    search: true,
    required: true
  }, {
    title: '个性签名',
    dataIndex: 'content',
    search: true,
    required: true
  }, {
    title: '注册时间',
    dataIndex: 'time',
    search: true,
    dataType: 'datetime'
  }];
  return /*#__PURE__*/_jsx(TablePro, {
    request: {
      getUrl: url + '/address',
      addUrl: 'http://127.0.0.1:3000/study',
      deleteAllUrl: 'http://127.0.0.1:3000/study',
      sortUrl: 'http://127.0.0.1:3000/study'
    },
    columns: columns,
    selection: true,
    form: {
      add: true,
      update: true,
      delete: true
    }
  });
});