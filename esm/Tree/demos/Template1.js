import React from 'react';
import Tree from "../index";
import { jsx as _jsx } from "react/jsx-runtime";
export default (function () {
  var treeData = [{
    title: '浩鲸云智能科技有限公司',
    key: '0-0',
    parentId: -1
  }, {
    title: '啊点的点点滴滴插槽插槽吃反反复复',
    key: '0-0-0',
    parentId: '0-0'
  }, {
    title: '任务任务',
    key: '0-0-1',
    parentId: '0-0'
  }, {
    title: '额亲亲',
    key: '0-1',
    parentId: -1
  }, {
    title: '大大滴干活',
    key: '0-1-0',
    parentId: '0-1'
  }, {
    title: '偶一抬头1',
    key: '0-1-1',
    parentId: '0-1'
  }, {
    title: '偶一抬头2',
    key: '0-1-2',
    parentId: '0-1'
  }, {
    title: '偶一抬头3',
    key: '0-1-3',
    parentId: '0-1'
  }, {
    title: '偶一抬头4',
    key: '0-1-4',
    parentId: '0-1'
  }, {
    title: '偶一抬头5',
    key: '0-1-5',
    parentId: '0-1'
  }, {
    title: '偶一抬头6',
    key: '0-1-6',
    parentId: '0-1'
  }, {
    title: '偶一抬头7',
    key: '0-1-7',
    parentId: '0-1'
  }, {
    title: '偶一抬头8',
    key: '0-1-8',
    parentId: '0-1'
  }];
  return /*#__PURE__*/_jsx("div", {
    style: {
      width: '100%',
      height: 500,
      background: '#eee',
      padding: 20
    },
    children: /*#__PURE__*/_jsx("div", {
      style: {
        background: '#fff',
        padding: 20,
        width: 280,
        height: '100%'
      },
      children: /*#__PURE__*/_jsx(Tree, {
        treeData: treeData,
        form: {
          add: true,
          hideIconButton: true
        },
        title: "\u53EA\u663E\u793A\u6DFB\u52A0",
        parentId: -1
      })
    })
  });
});