function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { message } from 'rs-antd';
import dayjs from 'dayjs';
import Excel from 'exceljs';
import writeFile from "../writeFile";
export default (function (_ref) {
  var title = _ref.title,
    columns = _ref.columns,
    dataSource = _ref.dataSource;
  var workbook = new Excel.Workbook();
  workbook.creator = 'admin';
  workbook.lastModifiedBy = 'admin';
  workbook.created = new Date();
  workbook.modified = new Date();
  // 添加工作表
  var sheet = workbook.addWorksheet(title || 'sheet');
  // 添加表头
  sheet.columns = columns.map(function (item) {
    return _objectSpread(_objectSpread({}, item), {}, {
      width: 25,
      header: item.title
    });
  });
  sheet.getRow(1).font = {
    size: 14,
    bold: true
  };
  sheet.getRow(1).height = 40;
  if (Array.isArray(dataSource)) {
    if (dataSource.length === 0) {
      message.warning('请先勾选需要导出的数据');
      return false;
    }
    if (columns[0].key === 'index') {
      dataSource = dataSource.map(function (item, i) {
        return _objectSpread(_objectSpread({}, item), {}, {
          index: i + 1
        });
      });
    }
    // 添加表格数据
    sheet.addRows(dataSource);
    dataSource.map(function (item, i) {
      sheet.getRow(i + 2).height = 25;
    });
    // 设置每一列样式 居中
    var row = sheet.getRow(1);
    row.eachCell(function (cell, rowNumber) {
      sheet.getColumn(rowNumber).alignment = {
        vertical: 'middle',
        horizontal: 'center'
      };
      sheet.getColumn(rowNumber);
    });
    // 将表格数据转为二进制
    workbook.xlsx.writeBuffer().then(function (buffer) {
      writeFile("".concat(title || '默认表格(' + dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss') + ')', ".xlsx"), buffer);
    });
    message.success("\u6210\u529F\u5BFC\u51FA".concat(dataSource.length, "\u6761\u6570\u636E"));
    return true;
  } else {
    message.error('导出失败');
    return false;
  }
});