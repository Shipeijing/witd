function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { RollbackOutlined } from '@ant-design/icons';
import { Button } from 'rs-antd';
import React, { forwardRef, useImperativeHandle } from 'react';
import { useEffect, useState } from 'react';
import request from "../../TablePro/components/request";
import "../styles.css";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export default /*#__PURE__*/forwardRef(function (props, ref) {
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = useState(city),
    _useState4 = _slicedToArray(_useState3, 2),
    hotCity = _useState4[0],
    setHotCity = _useState4[1];
  var _useState5 = useState(props.value),
    _useState6 = _slicedToArray(_useState5, 2),
    selectData = _useState6[0],
    setSelectData = _useState6[1];
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    z = _useState8[0],
    setZ = _useState8[1];
  useImperativeHandle(ref, function () {
    return {
      getSelectData: function getSelectData() {
        return selectData;
      }
    };
  }, [selectData]);
  useEffect(function () {
    var addressData = localStorage.getItem('addressData');
    if (addressData) {
      setDataList(JSON.parse(addressData));
    } else {
      requestData();
    }
    if (props.value && props.value.length > 0) {
      setZ(props.value.length - 1);
    }
  }, []);
  var requestData = function requestData() {
    var amapKey = '476608888eb5727a1ad9298779ad177a';
    request.get({
      url: "https://restapi.amap.com/v3/config/district?subdistrict=3&key=".concat(amapKey, "&extensions=base&")
    }).then(function (res) {
      if (res.info === 'OK') {
        localStorage.setItem('addressData', JSON.stringify(res.districts));
        setDataList(res.districts);
      }
    });
  };
  var setDataList = function setDataList(districts) {
    if (districts[0].level === 'country') {
      setData(filterData(districts[0].districts));
    } else {
      setData(filterData(districts));
    }
  };
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsxs("div", {
      className: "super-select-address",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "super-select-address-data",
        children: [/*#__PURE__*/_jsx("h3", {
          children: "\u5F53\u524D\u9009\u62E9\uFF1A"
        }), /*#__PURE__*/_jsx("span", {
          style: {
            color: '#1677ff'
          },
          children: selectData.map(function (item) {
            return item.name;
          }).join('-')
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "super-select-address-item",
        children: [/*#__PURE__*/_jsx("h3", {
          children: "\u70ED\u95E8\u57CE\u5E02\uFF1A"
        }), /*#__PURE__*/_jsx("div", {
          children: hotCity.map(function (item) {
            return item.children ?
            // 判断是一级城市还是二级城市
            item.children.map(function (c) {
              return /*#__PURE__*/_jsx("span", {
                style: {
                  color: selectData.find(function (a) {
                    return a.name === c.name;
                  }) ? '#1677ff' : 'rgb(124, 124, 124)'
                },
                onClick: function onClick() {
                  setSelectData([item, c]);
                  setZ(2);
                },
                children: filterName2(c.name)
              }, c.name);
            }) : /*#__PURE__*/_jsx("span", {
              style: {
                color: selectData.find(function (a) {
                  return a.name === item.name;
                }) ? '#1677ff' : 'rgb(124, 124, 124)'
              },
              onClick: function onClick() {
                setSelectData([item]);
                setZ(1);
              },
              children: filterName2(item.name)
            }, item.name);
          })
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "super-select-address-content",
        children: [z > 0 && props.level !== 'city' && /*#__PURE__*/_jsx(Button, {
          type: "link",
          icon: /*#__PURE__*/_jsx(RollbackOutlined, {}),
          onClick: function onClick() {
            // selectData.pop();
            // setSelectData([...selectData]);
            setZ(z - 1);
          },
          children: "\u4E0A\u4E00\u7EA7"
        }), _data(selectData, props.level === 'city' ? filterDataCity(data) : data, z, props.level).map(function (item) {
          return /*#__PURE__*/_jsxs("div", {
            className: "super-select-address-item",
            children: [/*#__PURE__*/_jsxs("h3", {
              children: [item.name, ":"]
            }), /*#__PURE__*/_jsx("div", {
              children: item.districts.map(function (child) {
                return /*#__PURE__*/_jsx("span", {
                  style: {
                    color: selectData.find(function (a) {
                      return a.name === child.name;
                    }) ? '#1677ff' : 'rgb(124, 124, 124)'
                  },
                  onClick: function onClick() {
                    if (child.level === 'city' || props.level === 'city') {
                      setSelectData([_child(item), _child(child)]);
                      setZ(2);
                    } else if (z === 0 && child.level === 'district') {
                      setSelectData([_child(item), _child(child)]);
                      setZ(1);
                    } else if (selectData.length > 0 && child.level === 'district') {
                      // 如果没有子项 则替换
                      if (props.level === 'district' && selectData[selectData.length - 1].level === 'district') {
                        selectData[selectData.length - 1] = _child(child);
                        setSelectData(_toConsumableArray(selectData));
                      } else {
                        selectData.push(_child(child));
                        setSelectData(_toConsumableArray(selectData));
                      }
                    }
                    if (child.districts.length > 0) {
                      setZ(2);
                    }
                  },
                  children: filterName(child.name)
                });
              })
            })]
          }, item.name);
        })]
      })]
    })
  });
});
function _child(child) {
  return {
    adcode: child.adcode,
    center: child.center,
    level: child.level,
    name: child.name
  };
}
function _data(selectData, data, z, level) {
  if (selectData.length === 0 || z === 0 || level === 'city') return data;
  var district = [];
  selectData.map(function (item, i) {
    if (i === 0) {
      district[0] = data.find(function (a) {
        return a.name === item.name;
      });
    }
    if (i === 1) {
      district[1] = district[0].districts.find(function (a) {
        return a.name === item.name;
      });
    }
    if (i === 2) {
      district[2] = district[1].districts.find(function (a) {
        return a.name === item.name;
      });
    }
  });
  if (z === 2 && selectData.length >= 2) {
    return [district[1]];
  }
  if (z === 3 && selectData.length >= 3) {
    return [district[2]];
  }
  return [district[0]];
}
function filterData(data) {
  var a = data.filter(function (item) {
    if (!['台湾省'].includes(item.name)) {
      return item;
    }
  });
  return sortChinese(a, 'name');
}
function filterDataCity(data) {
  var a = data.filter(function (item) {
    if (!['北京市', '天津市', '上海市', '重庆市', '香港特别行政区', '澳门特别行政区'].includes(item.name)) {
      return item;
    }
  });
  return sortChinese(a, 'name');
}
function sortChinese(arr, dataLeven) {
  // 参数：arr 排序的数组; dataLeven 数组内的需要比较的元素属性
  /* 获取数组元素内需要比较的值 */
  function getValue(option) {
    // 参数： option 数组元素
    if (!dataLeven) return option;
    var data = option;
    dataLeven.split('.').filter(function (item) {
      data = data[item];
    });
    return data + '';
  }
  arr.sort(function (item1, item2) {
    return getValue(item1).localeCompare(getValue(item2), 'zh-CN');
  });
  return arr;
}
function filterName(data) {
  if (data[data.length - 1] === '市') {
    return data.substring(0, data.length - 1);
  }
  return data;
}
function filterName2(data) {
  if (data[data.length - 1] === '市') {
    return data.substring(0, data.length - 1);
  }
  if (data.includes('城区')) {
    return data.substring(0, data.length - 2);
  }
  if (data.includes('特别行政区')) {
    return data.substring(0, data.length - 5);
  }
  return data;
}
var city = [{
  adcode: '110000',
  center: '116.407387,39.904179',
  level: 'province',
  name: '北京市'
}, {
  adcode: '120000',
  center: '117.201509,39.085318',
  level: 'province',
  name: '天津市'
}, {
  adcode: '310000',
  center: '121.473667,31.230525',
  level: 'province',
  name: '上海市'
}, {
  adcode: '500000',
  center: '106.550483,29.563707',
  level: 'province',
  name: '重庆市'
}, {
  adcode: '810000',
  center: '114.171203,22.277468',
  level: 'province',
  name: '香港特别行政区'
}, {
  adcode: '820000',
  center: '113.543076,22.186927',
  level: 'province',
  name: '澳门特别行政区'
}, {
  adcode: '320000',
  center: '118.763563,32.061377',
  level: 'province',
  name: '江苏省',
  children: [{
    adcode: '320100',
    center: '118.796624,32.059344',
    level: 'city',
    name: '南京市'
  }, {
    adcode: '320500',
    center: '120.585294,31.299758',
    level: 'city',
    name: '苏州市'
  }, {
    adcode: '320300',
    center: '117.283752,34.204224',
    level: 'city',
    name: '徐州市'
  }]
}, {
  adcode: '330000',
  center: '120.152575,30.266619',
  level: 'province',
  name: '浙江省',
  children: [{
    adcode: '330100',
    center: '120.210792,30.246026',
    level: 'city',
    name: '杭州市'
  }, {
    adcode: '330200',
    center: '121.62454,29.860258',
    level: 'city',
    name: '宁波市'
  }, {
    adcode: '330300',
    center: '120.699279,27.993849',
    level: 'city',
    name: '温州市'
  }]
}, {
  adcode: '610000',
  center: '108.953939,34.266611',
  level: 'province',
  name: '陕西省',
  children: [{
    adcode: '610100',
    center: '108.939645,34.343207',
    level: 'city',
    name: '西安市'
  }]
}, {
  adcode: '420000',
  center: '114.341552,30.546222',
  level: 'province',
  name: '湖北省',
  children: [{
    adcode: '420100',
    center: '114.304569,30.593354',
    level: 'city',
    name: '武汉市'
  }]
}, {
  adcode: '440000',
  center: '113.266887,23.133306',
  level: 'province',
  name: '广东省',
  children: [{
    adcode: '440100',
    center: '113.264499,23.130061',
    level: 'city',
    name: '广州市'
  }, {
    adcode: '440300',
    center: '114.057939,22.543527',
    level: 'city',
    name: '深圳市'
  }, {
    adcode: '441900',
    center: '113.751884,23.021016',
    level: 'city',
    name: '东莞市'
  }]
}, {
  adcode: '340000',
  center: '117.330139,31.734559',
  level: 'province',
  name: '安徽省',
  children: [{
    adcode: '340100',
    center: '117.227267,31.820567',
    level: 'city',
    name: '合肥市'
  }, {
    adcode: '340700',
    center: '117.811298,30.945214',
    level: 'city',
    name: '铜陵市'
  }, {
    adcode: '341300',
    center: '116.96419,33.647726',
    level: 'city',
    name: '宿州市'
  }]
}];