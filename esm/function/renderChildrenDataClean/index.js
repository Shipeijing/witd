function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import React from 'react';
import treeToArr from "../treeToArr";
export default function renderChildrenDataClean(_ref) {
  var item = _ref.item,
    dataSource = _ref.dataSource,
    children = _ref.children;
  if (!item || !item.dataType) return renderChildren(item, children);
  if (dataSource[item.dataIndex] === undefined) return null;
  var itemData;
  switch (item.dataType) {
    case 'boolean':
      return dataSource[item.dataIndex] ? '是' : '否';
    case 'upload':
      return _typeof(dataSource) === 'object' ? dataSource[item.dataIndex].map(function (item) {
        return item.name;
      }).join(',') : '';
    case 'select':
      itemData = item.dataSource.find(function (child) {
        return child.value === dataSource[item.dataIndex];
      });
      return itemData ? itemData.label : '';
    case 'cascader':
      var dataList = treeToArr(item.dataSource, 'value');
      var name = [];
      if (dataSource[item.dataIndex] && dataSource[item.dataIndex].length > 0) {
        dataSource[item.dataIndex].map(function (t) {
          var label = dataList.find(function (a) {
            return a.value === t;
          });
          if (label) {
            name.push(label.label);
          }
        });
      }
      return name.length > 0 ? name.join('/') : '';
    case 'tree':
      itemData = treeToArr(item.dataSource, 'value').find(function (child) {
        return child.value === dataSource[item.dataIndex];
      });
      return itemData ? itemData.title : '';
    default:
      return renderChildren(item, children);
  }
}
function renderChildren(item, children) {
  // 如果设置单行显示  则支持单行不换行
  return item && item.ellipsis && item.width ? /*#__PURE__*/React.createElement('span', {
    style: {
      width: item.width,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      display: 'block',
      wordBreak: 'keep-all'
    }
  }, children) : children;
}