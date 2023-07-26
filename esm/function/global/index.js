import { Col, Row } from 'rs-antd';
import React from 'react';
import "./styles.less";
import { history } from 'umi';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function () {
  var list = [{
    title: '通用',
    children: [{
      title: 'pattern 表单校验',
      subTitle: '用于表单校验，收集了一些基本的校验规则',
      path: 'pattern',
      icon: ''
    }, {
      title: '常用正则表达式',
      subTitle: '收集一些常用的正则表达式',
      path: 'reg-exp',
      icon: ''
    }, {
      title: '获取 uuid/随机 id',
      subTitle: '生成唯一id',
      path: 'use-id',
      icon: ''
    }]
  }, {
    title: '文件',
    children: [{
      title: '导出 Excel',
      subTitle: '将数组数据导出到excel',
      path: 'download-excel',
      icon: ''
    }, {
      title: '文件下载',
      subTitle: '将二进制数据流下载到文件',
      path: 'write-file',
      icon: ''
    }]
  }, {
    title: '优化',
    children: [{
      title: 'debounce 防抖',
      subTitle: '在函数被触发 n 秒后再执行，如果在 n 秒内又有函数执行，则重新计算',
      path: 'debounce',
      icon: ''
    }, {
      title: 'throttle 节流',
      subTitle: '允许一个函数在 X 毫秒内只执行一次',
      path: 'throttle',
      icon: ''
    }]
  }, {
    title: '数据处理',
    children: [{
      title: '数组转树结构',
      subTitle: '数组结构数据转换成有层级结构的树形结构数据',
      path: 'arr-to-tree',
      icon: ''
    }, {
      title: '数字循环遍历',
      subTitle: '将数字循环遍历，为小数时数字会自动向下取整，为负数时返回空数组',
      path: 'map-number',
      icon: ''
    }, {
      title: '数据清洗渲染子内容',
      subTitle: '用于子内容数据清洗，包含数组字段匹配，tree匹配子项等等',
      path: 'render-children-data-clean',
      icon: ''
    }, {
      title: '树结构转数组',
      subTitle: '将有层级结构的树数据转换成扁平的一维数组',
      path: 'tree-to-arr',
      icon: ''
    }]
  }];
  var total = function total() {
    var dataLength = 0;
    list.map(function (item) {
      dataLength += item.children.length;
    });
    return dataLength;
  };
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsxs("div", {
      className: "super-global super-global-header",
      children: [/*#__PURE__*/_jsx("h2", {
        children: "\u51FD\u6570\u5217\u8868"
      }), /*#__PURE__*/_jsxs("span", {
        children: [/*#__PURE__*/_jsx("span", {
          children: total()
        }), " \u4E2A\u51FD\u6570"]
      })]
    }), list.map(function (item, i) {
      return /*#__PURE__*/_jsxs("div", {
        className: "super-global",
        children: [/*#__PURE__*/_jsxs("h2", {
          children: [item.title, /*#__PURE__*/_jsx("span", {
            children: item.children.length
          })]
        }), /*#__PURE__*/_jsx(Row, {
          gutter: [40, 40],
          children: item.children.map(function (child, ii) {
            return /*#__PURE__*/_jsx(Col, {
              className: "gutter-row",
              span: 6,
              children: /*#__PURE__*/_jsxs("div", {
                className: "super-global-item",
                onClick: function onClick() {
                  history.push('/function/' + child.path);
                },
                children: [/*#__PURE__*/_jsx("h3", {
                  children: child.title
                }), /*#__PURE__*/_jsx("div", {}), /*#__PURE__*/_jsx("p", {
                  children: child.subTitle
                })]
              })
            }, i + '-' + ii);
          })
        })]
      }, i);
    })]
  });
});