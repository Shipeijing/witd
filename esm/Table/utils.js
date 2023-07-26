function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import dayjs from 'dayjs';
export function showColumn(columnList, checkedList) {
  return columnList.filter(function (item) {
    return checkedList.includes(item.key);
  });
}
export function checkKey(columnList) {
  // 做2件事
  // 1、过滤key值，没有则补充
  // 2、检查是否有排序值，没有赋予默认值
  return columnList.map(function (item, i) {
    var _item$key, _item$formOrder, _item$searchOrder;
    return _objectSpread(_objectSpread({}, item), {}, {
      key: (_item$key = item.key) !== null && _item$key !== void 0 ? _item$key : item.dataIndex,
      formOrder: (_item$formOrder = item.formOrder) !== null && _item$formOrder !== void 0 ? _item$formOrder : i + 1,
      searchOrder: (_item$searchOrder = item.searchOrder) !== null && _item$searchOrder !== void 0 ? _item$searchOrder : i + 1
    });
  });
}
export var initColumn = function initColumn(columnList, hideSort, pagination) {
  var data = _toConsumableArray(columnList);
  if (!hideSort) {
    data.unshift({
      title: '序号',
      key: 'index',
      width: 90,
      readOnly: true,
      render: function render() {
        return (pagination.current - 1) * pagination.pageSize + (arguments.length <= 2 ? undefined : arguments[2]) + 1;
      }
    });
  }
  return data;
};
export function formFilterDateTime(data, columns) {
  var formData = _objectSpread({}, data);
  columns.map(function (item) {
    if (!item.dataIndex || !formData[item.dataIndex]) return;
    // 处理boolean类型没有值的问题
    if (item.dataType) {
      if (item.dataType === 'boolean') {
        formData[item.dataIndex] = formData[item.dataIndex] || false;
      }
      if (item.dataType === 'date') {
        var _item$dateFormat;
        formData[item.dataIndex] = formData[item.dataIndex] ? dayjs(formData[item.dataIndex], (_item$dateFormat = item.dateFormat) !== null && _item$dateFormat !== void 0 ? _item$dateFormat : 'YYYY-MM-DD') : undefined;
      }
      if (item.dataType === 'datetime') {
        var _item$dateFormat2;
        formData[item.dataIndex] = formData[item.dataIndex] ? dayjs(formData[item.dataIndex], (_item$dateFormat2 = item.dateFormat) !== null && _item$dateFormat2 !== void 0 ? _item$dateFormat2 : 'YYYY-MM-DD HH:mm:ss') : undefined;
      }
      if (item.dataType === 'time') {
        var _item$dateFormat3;
        formData[item.dataIndex] = formData[item.dataIndex] ? dayjs(formData[item.dataIndex], (_item$dateFormat3 = item.dateFormat) !== null && _item$dateFormat3 !== void 0 ? _item$dateFormat3 : 'HH:mm:ss') : undefined;
      }
    }
  });
  return formData;
}
export function filterDateTime(data, columns) {
  var formData = _objectSpread({}, data);
  columns.map(function (item) {
    if (!item.dataIndex) return;
    if (item.dataType) {
      // 处理boolean类型没有值的问题
      if (item.dataType === 'boolean') {
        formData[item.dataIndex] = formData[item.dataIndex] || false;
      }
      if (item.dataType === 'date') {
        var _item$dateFormat4;
        formData[item.dataIndex] = formData[item.dataIndex] ? dayjs(formData[item.dataIndex]).format((_item$dateFormat4 = item.dateFormat) !== null && _item$dateFormat4 !== void 0 ? _item$dateFormat4 : 'YYYY-MM-DD') : undefined;
      }
      if (item.dataType === 'datetime') {
        var _item$dateFormat5;
        formData[item.dataIndex] = formData[item.dataIndex] ? dayjs(formData[item.dataIndex]).format((_item$dateFormat5 = item.dateFormat) !== null && _item$dateFormat5 !== void 0 ? _item$dateFormat5 : 'YYYY-MM-DD HH:mm:ss') : undefined;
      }
      if (item.dataType === 'time') {
        var _item$dateFormat6;
        formData[item.dataIndex] = formData[item.dataIndex] ? dayjs(formData[item.dataIndex]).format((_item$dateFormat6 = item.dateFormat) !== null && _item$dateFormat6 !== void 0 ? _item$dateFormat6 : 'HH:mm:ss') : undefined;
      }
    }
  });
  return formData;
}
export function valuePropName(dataType) {
  switch (dataType) {
    case 'upload':
      return 'fileList';
    case 'boolean':
      return 'checked';
    default:
      return 'value';
  }
}

// 格式化表单数据
export function filterCodeFormData(formData) {
  var demoForm = {};
  if (formData.activeList) {
    formData.activeList.map(function (item) {
      demoForm[item] = true;
    });
    delete formData.activeList;
  }
  if (formData.form && formData.form.width) {
    // 操作栏宽度判断
    formData.form.width = formData.form.width.includes('%') || formData.form.width.includes('px') ? formData.form.width : Number(formData.form.width);
  }
  return _objectSpread(_objectSpread({}, formData), {}, {
    form: _objectSpread(_objectSpread({}, formData.form), demoForm)
  });
}
export function getContainerStyle(mode, initStyle) {
  switch (mode) {
    case 'pure':
      return _objectSpread({
        boxShadow: false,
        boxPadding: 0,
        headerBackground: true,
        multistory: false,
        background: '#ffffff'
      }, initStyle);
    case 'simple':
      return _objectSpread({
        boxShadow: false,
        boxPadding: 18,
        headerBackground: false,
        multistory: false,
        background: '#ffffff'
      }, initStyle);
    case 'multistory':
      return _objectSpread({
        boxShadow: true,
        boxPadding: 18,
        headerBackground: true,
        multistory: true,
        background: '#ffffff'
      }, initStyle);
    default:
      return _objectSpread({
        boxShadow: true,
        boxPadding: 18,
        headerBackground: true,
        multistory: false,
        background: '#ffffff'
      }, initStyle);
  }
}
export function onFormatSlot(children) {
  if (children && _typeof(children) === 'object' && Array.isArray(children)) {
    return children.map(function (item) {
      var _item$props$order, _item$props$order2, _item$props$order3;
      return _objectSpread(_objectSpread({}, item.props), {}, {
        slot: true,
        formOrder: (_item$props$order = item.props.order) !== null && _item$props$order !== void 0 ? _item$props$order : 999,
        searchOrder: (_item$props$order2 = item.props.order) !== null && _item$props$order2 !== void 0 ? _item$props$order2 : 999,
        order: (_item$props$order3 = item.props.order) !== null && _item$props$order3 !== void 0 ? _item$props$order3 : 999
      });
    });
  } else if (children && _typeof(children) === 'object' && !Array.isArray(children)) {
    var _children$props$order, _children$props$order2, _children$props$order3;
    return [_objectSpread(_objectSpread({}, children.props), {}, {
      slot: true,
      formOrder: (_children$props$order = children.props.order) !== null && _children$props$order !== void 0 ? _children$props$order : 999,
      searchOrder: (_children$props$order2 = children.props.order) !== null && _children$props$order2 !== void 0 ? _children$props$order2 : 999,
      order: (_children$props$order3 = children.props.order) !== null && _children$props$order3 !== void 0 ? _children$props$order3 : 999
    })];
  } else {
    return [];
  }
}
export function filterActionTitle(name, defaultName, showIcon) {
  return showIcon ? '' : name ? name : defaultName;
}
export function paginationFilter(pagination, hide) {
  if (hide) return false;
  return _typeof(pagination) === 'object' ? _objectSpread({
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: function showTotal(total, range) {
      return "\u5171 ".concat(total, " \u6761\u6570\u636E");
    }
  }, pagination) : pagination;
}