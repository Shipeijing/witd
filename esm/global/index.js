import React from 'react';
import { Col, Row } from 'rs-antd';
import "./styles.less";
import { history } from 'umi';
import { mapNumber } from "../function";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function () {
  var list = [{
    title: '表格',
    children: [{
      title: 'Table 多功能表格',
      subTitle: '多功能表格，自带增删改查功能，自带搜索框，多种显示模式可选',
      path: 'table',
      stable: 5,
      icon: ''
    }, {
      title: 'Slot 表格插槽',
      subTitle: '表格插槽通用组件，支持6种插槽模式，支持排序',
      path: 'slot',
      stable: 5,
      icon: ''
    }, {
      title: 'TablePro 带请求表格',
      subTitle: '基于Table组件集成请求功能',
      path: 'table-pro',
      stable: 1,
      icon: ''
    }]
  }, {
    title: '多功能',
    children: [{
      title: 'Descriptions 描述列表',
      subTitle: '自带编辑功能的描述列表',
      path: 'descriptions',
      stable: 4,
      icon: ''
    }, {
      title: 'FormList 表单矩阵',
      subTitle: '基于 ant Form 组件开发，使用方式颠覆传统表单开发方式',
      path: 'form-list',
      stable: 3,
      icon: ''
    }, {
      title: 'Modal 对话框',
      subTitle: '多功能对话框，支持hook，使用更便捷',
      path: 'modal',
      stable: 4,
      icon: ''
    }, {
      title: 'Tree 可编辑树',
      subTitle: '自带编辑功能的树组件',
      path: 'tree',
      stable: 4,
      icon: ''
    }]
  }, {
    title: '表单',
    children: [{
      title: 'AddressPicker 地址选择器',
      subTitle: '地址选择输入框，可用于表单控件',
      path: 'address-picker',
      stable: 1,
      icon: ''
    }, {
      title: 'Form 表单',
      subTitle: '数据推动型表单控件，极大简化开发方式',
      path: 'Form',
      stable: 3,
      icon: ''
    }, {
      title: 'FormItem 表单子项',
      subTitle: '表单控件的子项，可搭配表单控件使用，也可单独使用，单独使用输出ant表单中Item组件',
      path: 'FormItem',
      stable: 3,
      icon: ''
    }, {
      title: 'Upload 文件上传',
      subTitle: '封装更完善的文件上传功能，使用更方便',
      path: 'upload',
      stable: 1,
      icon: ''
    }, {
      title: 'Variable 拓展项',
      subTitle: '表单组件拓展项，拓展组件',
      path: 'variable',
      stable: 5,
      icon: ''
    }]
  }, {
    title: '便利',
    children: [{
      title: 'Box 弹性容器',
      subTitle: '更加便捷的弹性容器，使用起来很方便，充分利用 flex 布局',
      path: 'box',
      stable: 5,
      icon: ''
    }, {
      title: 'Confirm 确认弹窗',
      subTitle: '便捷的确认弹窗',
      path: 'confirm',
      stable: 5,
      icon: ''
    }, {
      title: 'Wrap 行容器',
      subTitle: '主要解决单行超出显示的问题，提供单行，多行超出隐藏，加弹窗显示',
      path: 'wrap',
      stable: 4,
      icon: ''
    }]
  }, {
    title: '通用',
    children: [{
      title: 'Button 按钮',
      subTitle: '多种主题色按钮，提供更多使用场景',
      path: 'button',
      stable: 5,
      icon: ''
    }, {
      title: 'Icon 图标',
      subTitle: '提供图标更便捷的使用方法，让代码更整洁、更直观',
      path: 'icon',
      stable: 2,
      icon: ''
    }, {
      title: 'Navigation 导航器',
      subTitle: '全局搜索导航组件，模糊搜索，一键导航',
      path: 'navigation',
      stable: 1,
      icon: ''
    }, {
      title: 'Page 页面容器',
      subTitle: '更好用的页面容器',
      path: 'page',
      stable: 1,
      icon: ''
    }, {
      title: 'Portal 通道',
      subTitle: '将子组件直接输出到根节点，可以自定义根节点，动态显示',
      path: 'portal',
      stable: 4,
      icon: ''
    }]
  }, {
    title: '全局',
    children: [{
      title: 'Loading 加载中',
      subTitle: '全屏loading遮罩层，使用更便捷',
      path: 'loading',
      stable: 2,
      icon: ''
    }, {
      title: 'Note 全局通告',
      subTitle: '滚动通告组件，可用于全局，也可用于局部使用',
      path: 'note',
      stable: 1,
      icon: ''
    }, {
      title: 'ProgressBar 全局进度条',
      subTitle: '网页顶部进度条，支持多种主题，多种状态可选',
      path: 'progress-bar',
      stable: 1,
      icon: ''
    }, {
      title: 'Mask 蒙版',
      subTitle: '基于 rc-motion 动画库开发，简单好用',
      path: 'mask',
      stable: 1,
      icon: ''
    }]
  }, {
    title: '其它',
    children: [{
      title: 'Address 地址选择框',
      subTitle: '地址选择弹窗',
      path: 'address',
      stable: 1,
      icon: ''
    }, {
      title: 'IdentityCode 图形验证码',
      subTitle: '简单的图形验证码组件',
      path: 'identity-code',
      stable: 2,
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
        children: "\u7EC4\u4EF6\u5217\u8868"
      }), /*#__PURE__*/_jsxs("span", {
        children: [/*#__PURE__*/_jsx("span", {
          children: total()
        }), " \u4E2A\u7EC4\u4EF6"]
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
                  history.push('/components/' + child.path);
                },
                children: [/*#__PURE__*/_jsx("h3", {
                  children: child.title
                }), /*#__PURE__*/_jsx("div", {}), /*#__PURE__*/_jsx("p", {
                  children: child.subTitle
                }), /*#__PURE__*/_jsx("span", {
                  className: "super-global-item-stable",
                  children: mapNumber(child.stable, function () {
                    return /*#__PURE__*/_jsx("span", {
                      children: " \u2730"
                    });
                  })
                })]
              })
            }, i + '-' + ii);
          })
        })]
      }, i);
    })]
  });
});