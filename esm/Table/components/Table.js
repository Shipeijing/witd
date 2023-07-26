var _excluded = ["dataSource", "columns", "active", "openEditModal", "rowKey", "onDelete", "antProps", "slot", "mode", "pagination", "selection", "onFinish", "onSortChange", "sortable", "form"],
  _excluded2 = ["editing", "item", "record", "children"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { ContainerOutlined, DeleteOutlined, EditOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { Form, message, Modal, Table } from 'rs-antd';
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import "../styles.less";
import { filterActionTitle, formFilterDateTime, paginationFilter, valuePropName } from "../utils";
import TableActive from "./Active";
import downloadExcel from "../../function/downloadExcel";
import Button from "../../Button";
import FormItem from "./FormItem";
import Confirm from "../../Confirm";
import SearchBar from "./SearchBar";
import DataDetail from "./DataDetail";
import renderChildrenDataClean from "../../function/renderChildrenDataClean";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default /*#__PURE__*/forwardRef(function (props, ref) {
  var _ref9;
  var dataSource = props.dataSource,
    columns = props.columns,
    active = props.active,
    openEditModal = props.openEditModal,
    rowKey = props.rowKey,
    onDelete = props.onDelete,
    antProps = props.antProps,
    slot = props.slot,
    _props$mode = props.mode,
    mode = _props$mode === void 0 ? 'default' : _props$mode,
    pagination = props.pagination,
    selection = props.selection,
    onFinish = props.onFinish,
    onSortChange = props.onSortChange,
    sortable = props.sortable,
    myForm = props.form,
    e = _objectWithoutProperties(props, _excluded);
  var searchBarRef = useRef();
  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  // 选中项数据
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    selectedRows = _useState2[0],
    _setSelectedRows = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    checkedList = _useState4[0],
    setCheckedList = _useState4[1];
  // 嵌套子项数据
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    expandedRowKeys = _useState6[0],
    _setExpandedRowKeys = _useState6[1];
  var _useState7 = useState(e.readOnly || false),
    _useState8 = _slicedToArray(_useState7, 2),
    readOnly = _useState8[0],
    setReadOnly = _useState8[1];
  var _useState9 = useState('default'),
    _useState10 = _slicedToArray(_useState9, 2),
    size = _useState10[0],
    setSize = _useState10[1];
  var _useState11 = useState(null),
    _useState12 = _slicedToArray(_useState11, 2),
    dataDetails = _useState12[0],
    _setDataDetails = _useState12[1];
  var _useState13 = useState(''),
    _useState14 = _slicedToArray(_useState13, 2),
    editingKey = _useState14[0],
    setEditingKey = _useState14[1];
  // 修改展示列表或选中项
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    showDataSource = _useState16[0],
    _setShowDataSource = _useState16[1];
  var selectedRowKeys = selectedRows.map(function (item) {
    return item[rowKey];
  });
  useImperativeHandle(ref, function () {
    return {
      selectedRows: selectedRows,
      editingKey: editingKey,
      dataDetails: dataDetails,
      expandedRowKeys: expandedRowKeys,
      setDataDetails: function setDataDetails(e) {
        _setDataDetails(e);
      },
      setSelectedRows: function setSelectedRows(e) {
        _setSelectedRows(e);
      },
      setExpandedRowKeys: function setExpandedRowKeys(e) {
        _setExpandedRowKeys(e);
      },
      _onAdd: _onAdd,
      _onUpdate: _onUpdate,
      _onDelete: _onDelete
    };
  }, [selectedRows, editingKey, dataDetails, expandedRowKeys]);
  var CheckboxData = columns === null || columns === void 0 ? void 0 : columns.map(function (item) {
    return _objectSpread(_objectSpread({}, item), {}, {
      label: item.title,
      value: item.key,
      disabled: false
    });
  });
  useEffect(function () {
    // 当数据改变时，如果详情页面展开，更新详情页面数据
    if (dataDetails !== null && dataSource && (dataSource === null || dataSource === void 0 ? void 0 : dataSource.length) > 0) {
      var data = dataSource.find(function (item) {
        return item[rowKey] === dataDetails[rowKey];
      });
      _setDataDetails(data !== null && data !== void 0 ? data : {});
    }
  }, [dataSource]);
  useEffect(function () {
    var target = {
      target: {
        checked: true
      }
    };
    onCheckAllChange(target);
  }, [columns]);
  var _onAdd = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = props.onBeforeAdd;
            if (!_context.t0) {
              _context.next = 5;
              break;
            }
            _context.next = 4;
            return props.onBeforeAdd();
          case 4:
            _context.t0 = _context.sent;
          case 5:
            result = _context.t0;
            if (!(String(result) === 'true')) {
              _context.next = 8;
              break;
            }
            return _context.abrupt("return");
          case 8:
            openEditModal && openEditModal({
              type: 'add',
              width: myForm && myForm.width,
              height: myForm && myForm.height,
              title: myForm && myForm.addTitle || '添加数据',
              formData: result
            });
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function _onAdd() {
      return _ref.apply(this, arguments);
    };
  }();
  var _onUpdate = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(record) {
      var formData, result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            formData = formFilterDateTime(record, e.columnsEdit); // 编辑操作前调用函数
            _context2.t0 = props.onBeforeUpDate;
            if (!_context2.t0) {
              _context2.next = 6;
              break;
            }
            _context2.next = 5;
            return props.onBeforeUpDate(formData);
          case 5:
            _context2.t0 = _context2.sent;
          case 6:
            result = _context2.t0;
            if (!(String(result) === 'true')) {
              _context2.next = 9;
              break;
            }
            return _context2.abrupt("return");
          case 9:
            if (result) {
              formData = result;
            }
            if (myForm && myForm.mode === 'row') {
              if (editingKey.length !== 0) {
                // form.submit();
                message.warning('当前编辑行未保存，请先保存');
              } else {
                form.resetFields();
                setEditingKey(formData[rowKey]);
                form.setFieldsValue(_objectSpread({}, formData));
              }
            } else {
              openEditModal && openEditModal({
                type: 'update',
                width: myForm && myForm.width,
                height: myForm && myForm.height,
                title: myForm && myForm.updateTitle || '编辑数据',
                formData: formData
              });
            }
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function _onUpdate(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var _onDelete = function _onDelete(record) {
    var _active$deleteProps;
    var deleteProps = (_active$deleteProps = active === null || active === void 0 ? void 0 : active.deleteProps) !== null && _active$deleteProps !== void 0 ? _active$deleteProps : {};
    if (!(active !== null && active !== void 0 && active.deleteNoConfirm)) {
      var _deleteProps$title, _deleteProps$content, _deleteProps$type;
      Confirm({
        title: (_deleteProps$title = deleteProps.title) !== null && _deleteProps$title !== void 0 ? _deleteProps$title : '删除确认',
        content: (_deleteProps$content = deleteProps.content) !== null && _deleteProps$content !== void 0 ? _deleteProps$content : '确认删除这条数据吗?',
        type: (_deleteProps$type = deleteProps.type) !== null && _deleteProps$type !== void 0 ? _deleteProps$type : 'warning',
        onOk: function onOk() {
          _runDelete(record);
        }
      });
    } else {
      _runDelete(record);
    }
  };
  var _runDelete = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(record) {
      var res;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.t0 = onDelete;
            if (!_context3.t0) {
              _context3.next = 5;
              break;
            }
            _context3.next = 4;
            return onDelete([record[rowKey]], 'single');
          case 4:
            _context3.t0 = _context3.sent;
          case 5:
            res = _context3.t0;
            if (!(String(res) === 'true')) {
              _context3.next = 8;
              break;
            }
            return _context3.abrupt("return");
          case 8:
            if (selectedRowKeys.includes(record[rowKey])) {
              _setSelectedRows(selectedRows.filter(function (item) {
                return item[rowKey] !== record[rowKey];
              }));
            }
          case 9:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function _runDelete(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  var myRowSelection = _objectSpread({
    selectedRowKeys: selectedRows.map(function (item) {
      return item[rowKey];
    }),
    onSelect: function onSelect(record, selected) {
      var _selectedData = [];
      if (selected) {
        if (!selectedRowKeys.includes(record[rowKey])) {
          _selectedData = props.rowSelection && props.rowSelection.type === 'radio' ? [record] : [].concat(_toConsumableArray(selectedRows), [record]);
        }
      } else {
        _selectedData = selectedRows.filter(function (item) {
          return item[rowKey] !== record[rowKey];
        });
      }
      _setSelectedRows(_selectedData);
    },
    onSelectAll: function onSelectAll(selected, newSelectedRows, changeRows) {
      var _selectedData = [];
      if (selected) {
        // 过滤掉已经选择的项  过滤掉禁止选择项
        var _changeRows = changeRows.filter(function (item) {
          return !selectedRowKeys.includes(item[rowKey]) && !item._hideSelectNode;
        });
        _selectedData = [].concat(_toConsumableArray(selectedRows), _toConsumableArray(_changeRows));
      } else {
        var _changeRows2 = changeRows.map(function (item) {
          return item[rowKey];
        });
        _selectedData = selectedRows.filter(function (item) {
          return !_changeRows2.includes(item[rowKey]);
        });
      }
      _setSelectedRows(_selectedData);
    },
    getCheckboxProps: function getCheckboxProps(record) {
      return {
        disabled: record._disableSelectNode // Column configuration not to be checked
      };
    },

    renderCell: function renderCell(checked, record, index, originNode) {
      return record._hideSelectNode ? null : originNode;
    }
  }, props.rowSelection);
  var onChange = function onChange(list) {
    setCheckedList(list);
  };
  var onCheckAllChange = function onCheckAllChange(e) {
    setCheckedList(e.target.checked ? CheckboxData.map(function (item) {
      return item.key;
    }) : []);
  };
  var onSortEnd = function onSortEnd(_ref4) {
    var oldIndex = _ref4.oldIndex,
      newIndex = _ref4.newIndex;
    if (oldIndex !== newIndex) {
      onSortChange && onSortChange(newIndex, oldIndex);
    }
  };
  var DraggableContainer = function DraggableContainer(props) {
    return /*#__PURE__*/_jsx(SortableBody, _objectSpread({
      useDragHandle: true,
      disableAutoscroll: true,
      helperClass: "row-dragging",
      onSortEnd: onSortEnd
    }, props));
  };
  var DraggableBodyRow = function DraggableBodyRow(_ref5) {
    var restProps = Object.assign({}, (_objectDestructuringEmpty(_ref5), _ref5));
    // function findIndex base on Table rowKey props and should always be a right array index
    var index = dataSource && dataSource.findIndex(function (x) {
      return x[rowKey] === restProps['data-row-key'];
    });
    return /*#__PURE__*/_jsx(SortableItem, _objectSpread({
      index: index
    }, restProps));
  };
  var getEditDom = function getEditDom(active, record, index) {
    var _active$detailText, _active$editText, _active$deleteText;
    var detailDom = props.dataDetail && !record._hideActiveDetailNode && /*#__PURE__*/_jsx(Button, {
      type: "link",
      icon: active.showIcon ? /*#__PURE__*/_jsx("span", {
        title: (_active$detailText = active.detailText) !== null && _active$detailText !== void 0 ? _active$detailText : '详情',
        children: /*#__PURE__*/_jsx(ContainerOutlined, {})
      }) : undefined,
      onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var result;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.t0 = props.onBeforeDetail;
              if (!_context4.t0) {
                _context4.next = 5;
                break;
              }
              _context4.next = 4;
              return props.onBeforeDetail(record);
            case 4:
              _context4.t0 = _context4.sent;
            case 5:
              result = _context4.t0;
              if (!(String(result) === 'true')) {
                _context4.next = 8;
                break;
              }
              return _context4.abrupt("return");
            case 8:
              _setDataDetails(_typeof(result) === 'object' ? result : record);
            case 9:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      })),
      children: filterActionTitle(active.detailText, '详情', active.showIcon)
    });
    var updateDom = active.update && !record._hideActiveUpdateNode && /*#__PURE__*/_jsx(Button, {
      type: "link",
      icon: active.showIcon ? /*#__PURE__*/_jsx("span", {
        title: (_active$editText = active.editText) !== null && _active$editText !== void 0 ? _active$editText : '编辑',
        children: /*#__PURE__*/_jsx(EditOutlined, {})
      }) : undefined,
      onClick: function onClick() {
        _onUpdate(record);
      },
      children: filterActionTitle(active.editText, '编辑', active.showIcon)
    });
    var deleteDom = active.delete && !record._hideActiveDeleteNode && /*#__PURE__*/_jsx(Button, {
      type: "link",
      icon: active.showIcon ? /*#__PURE__*/_jsx("span", {
        title: (_active$deleteText = active.deleteText) !== null && _active$deleteText !== void 0 ? _active$deleteText : '删除',
        children: /*#__PURE__*/_jsx(DeleteOutlined, {})
      }) : undefined,
      theme: "danger",
      onClick: function onClick() {
        _onDelete(record);
      },
      children: filterActionTitle(active.deleteText, '删除', active.showIcon)
    });
    var dom = [{
      order: 1,
      children: detailDom
    }, {
      order: 2,
      children: updateDom
    }, {
      order: 3,
      children: deleteDom
    }].concat(e.slotData.filter(function (item) {
      return item.type === 'edit';
    })).sort(function (a, b) {
      return a.order - b.order;
    });
    var children = [];
    dom.map(function (item) {
      if (typeof item.children === 'function') {
        // 如果是回调函数 则传入参数
        children.push(item.children(record, index));
      } else {
        children.push(Array.isArray(item.children) ? _toConsumableArray(item.children) : item.children);
      }
    });
    return children;
  };
  var onPressTitleSearch = function onPressTitleSearch(item) {
    // 点击搜索图标   聚焦到搜索栏
    if (!searchBarRef.current.expand) {
      searchBarRef.current.setExpand(true);
    }
    // 将搜索框标红提示
    searchBarRef.current.setValidateStatusData(item.dataIndex);
  };
  var initColumns = function initColumns() {
    var data = columns.filter(function (item) {
      return checkedList.includes(item.key);
    }).map(function (item) {
      if (item.readOnly && (String(item.readOnly) === 'update' || String(item.readOnly) === 'true')) {
        return _objectSpread(_objectSpread({}, item), {}, {
          title: /*#__PURE__*/_jsx(TableTitle, {
            item: item,
            onPressTitleSearch: onPressTitleSearch
          })
        });
      } else {
        return _objectSpread(_objectSpread({}, item), {}, {
          title: /*#__PURE__*/_jsx(TableTitle, {
            item: item,
            onPressTitleSearch: onPressTitleSearch
          }),
          onCell: function onCell(record) {
            return {
              record: record,
              item: item,
              editing: myForm && myForm.mode === 'row' && editingKey === record[rowKey]
            };
          }
        });
      }
    });
    if (sortable) {
      data.unshift({
        title: '排序',
        dataIndex: 'sort',
        width: 90,
        readOnly: true,
        className: 'drag-visible',
        render: function render() {
          return /*#__PURE__*/_jsx(DragHandle, {});
        }
      });
    }
    if (!readOnly && active && (active.update || active.delete || active.edit)) {
      data.push({
        title: '操作',
        key: 'edit',
        readOnly: true,
        fixed: 'right',
        className: 'super-table-edit',
        width: active && active.width || 150,
        render: function render(text, record, index) {
          if (record._hideActiveNode) return null;
          if (editingKey === record[rowKey]) {
            return /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx(Button, {
                type: "link",
                onClick: function onClick() {
                  form.submit();
                },
                children: "\u4FDD\u5B58"
              }), /*#__PURE__*/_jsx(Button, {
                type: "link",
                theme: "danger",
                onClick: function onClick() {
                  setEditingKey('');
                },
                children: "\u53D6\u6D88"
              })]
            });
          }
          return /*#__PURE__*/_jsxs("div", {
            children: [slot && slot.editSlot && slot.editSlot(record, index), getEditDom(active, record, index)]
          });
        }
      });
    }
    return data;
  };
  var EditableCell = function EditableCell(_ref7) {
    var editing = _ref7.editing,
      item = _ref7.item,
      record = _ref7.record,
      children = _ref7.children,
      restProps = _objectWithoutProperties(_ref7, _excluded2);
    if (item && item.render) return /*#__PURE__*/_jsx("td", _objectSpread(_objectSpread({}, restProps), {}, {
      children: children
    }));
    // 禁用项判断
    var disabled = false;
    if (item && item.disabled) {
      disabled = typeof item.disabled === 'string' ? item.disabled === 'update' : item.disabled;
    }
    var rules = item && item.rules !== undefined ? item.rules : [];
    return /*#__PURE__*/_jsx("td", _objectSpread(_objectSpread({}, restProps), {}, {
      children: editing && item !== undefined ? /*#__PURE__*/_jsx(Form.Item, {
        name: item.dataIndex,
        style: {
          margin: 0
        },
        rules: [_objectSpread({
          required: item.required,
          message: "".concat(item.title, "\u4E0D\u80FD\u4E3A\u7A7A")
        }, rules)],
        valuePropName: valuePropName(item.dataType),
        children: FormItem({
          data: item,
          disabled: disabled
        })
      }) : renderChildrenDataClean({
        item: item,
        children: children,
        dataSource: record
      })
    }));
  };
  var onExpandedRowsChange = function onExpandedRowsChange(expandedRows) {
    // 展开子项时触发
    _setExpandedRowKeys(expandedRows);
    if (e.expandable && e.expandable.onExpandedRowsChange) {
      e.expandable.onExpandedRowsChange(expandedRows);
    }
  };
  var downloadTable = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var data, _dataSource, res;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            // 下载前过滤
            data = selection ? selectedRows : dataSource;
            _context5.t0 = props.onDownload;
            if (!_context5.t0) {
              _context5.next = 6;
              break;
            }
            _context5.next = 5;
            return props.onDownload(data);
          case 5:
            _context5.t0 = _context5.sent;
          case 6:
            _dataSource = _context5.t0;
            res = downloadExcel({
              title: active === null || active === void 0 ? void 0 : active.title,
              dataSource: _dataSource || data,
              columns: columns
            });
            if (res && selection) _setSelectedRows([]);
          case 9:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function downloadTable() {
      return _ref8.apply(this, arguments);
    };
  }();
  var handleProps = {
    active: active,
    CheckboxData: CheckboxData,
    checkedList: checkedList,
    downloadTable: downloadTable,
    onChange: onChange,
    onCheckAllChange: onCheckAllChange,
    readOnly: readOnly,
    selectedRows: selectedRows,
    setReadOnly: setReadOnly,
    setSize: setSize,
    size: size
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "super-table-body",
    children: [mode !== 'pure' && (props.searchBarData.length > 0 || props.slot && props.slot.searchFormSlot) && /*#__PURE__*/_jsx(SearchBar, {
      ref: searchBarRef,
      handleProps: handleProps,
      form: props.searchForm,
      data: props.searchBarData,
      slotData: props.slotData,
      containerStyle: props.containerStyle,
      onSearchBarFinish: props.onSearchBarFinish,
      resetPagination: props.resetPagination,
      hideButtonText: props.searchBar && props.searchBar.hideButtonText,
      searchFormSlot: props.slot && props.slot.searchFormSlot,
      searchButtonSlot: props.slot && props.slot.searchButtonSlot,
      searchText: props.searchBar && props.searchBar.searchText || '搜索',
      resetText: props.searchBar && props.searchBar.resetText || '重置',
      defaultExpand: (_ref9 = props.searchBar && props.searchBar.defaultExpand) !== null && _ref9 !== void 0 ? _ref9 : false
    }), mode !== 'pure' && (!active || !active.hide) && /*#__PURE__*/_jsx(TableActive, {
      active: active,
      _onAdd: _onAdd,
      readOnly: readOnly,
      handleProps: handleProps,
      rowSelection: props.rowSelection,
      segmented: props.segmented,
      slot: slot,
      slotData: props.slotData,
      setSelectedRows: _setSelectedRows,
      selectedRows: selectedRows,
      showDataSource: showDataSource,
      setShowDataSource: function setShowDataSource(data) {
        if (editingKey.length === 0) {
          _setShowDataSource(data);
        } else {
          message.warning('当前编辑行未保存，请先保存');
        }
      },
      addText: active && active.addText || '添加'
      // openEditModal={(e: any) => {
      //   if (editingKey.length === 0) {
      //     openEditModal && openEditModal(e);
      //   } else {
      //     message.warning('表格内容正在编辑中，请先保存');
      //   }
      // }}
      ,
      onSelectDelete: function onSelectDelete() {
        var includesKey = selectedRowKeys.includes(editingKey);
        Modal.confirm({
          title: '批量删除',
          content: "\u5DF2\u52FE\u9009".concat(selectedRowKeys.length, "\u6761\u6570\u636E\uFF0C").concat(includesKey ? '请注意！勾选数据中有一条数据正在编辑，' : '', "\u786E\u8BA4\u5220\u9664\u5417\uFF1F"),
          okText: '确认',
          cancelText: '取消',
          onOk: function () {
            var _onOk = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var res;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.t0 = onDelete;
                    if (!_context6.t0) {
                      _context6.next = 5;
                      break;
                    }
                    _context6.next = 4;
                    return onDelete(selectedRowKeys, 'multiple');
                  case 4:
                    _context6.t0 = _context6.sent;
                  case 5:
                    res = _context6.t0;
                    if (!(String(res) === 'true')) {
                      _context6.next = 8;
                      break;
                    }
                    return _context6.abrupt("return");
                  case 8:
                    _setSelectedRows([]);
                    if (includesKey) {
                      // 判断删除数组中是否包含编辑行，包含时重置编辑行
                      setEditingKey('');
                    }
                  case 10:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6);
            }));
            function onOk() {
              return _onOk.apply(this, arguments);
            }
            return onOk;
          }(),
          onCancel: function onCancel() {}
        });
      }
    }), /*#__PURE__*/_jsx("div", {
      className: "super-table-main",
      children: /*#__PURE__*/_jsx(Form, {
        form: form,
        component: false,
        onFinish: /*#__PURE__*/function () {
          var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(e) {
            var oldData, result;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  oldData = dataSource === null || dataSource === void 0 ? void 0 : dataSource.find(function (item) {
                    return item[rowKey] === editingKey;
                  });
                  _context7.next = 3;
                  return onFinish(e, oldData, 'update');
                case 3:
                  result = _context7.sent;
                  if (String(result) !== 'true') setEditingKey('');
                case 5:
                case "end":
                  return _context7.stop();
              }
            }, _callee7);
          }));
          return function (_x4) {
            return _ref10.apply(this, arguments);
          };
        }(),
        children: /*#__PURE__*/_jsx(Table, _objectSpread({
          dataSource: !showDataSource ? dataSource : selectedRows,
          rowSelection: selection ? myRowSelection : undefined,
          columns: initColumns(),
          rowKey: rowKey,
          size: size,
          scroll: {
            x: 'max-content'
          },
          expandable: e.expandable && _objectSpread(_objectSpread({
            expandedRowClassName: function expandedRowClassName(record, index, indent) {
              return 'super-table-expandable-row';
            }
          }, e.expandable), {}, {
            expandedRowKeys: expandedRowKeys,
            onExpandedRowsChange: onExpandedRowsChange
          }),
          pagination: paginationFilter(pagination, showDataSource),
          components: {
            body: {
              wrapper: DraggableContainer,
              row: DraggableBodyRow,
              cell: EditableCell
            }
          }
        }, antProps))
      })
    }), props.dataDetail && /*#__PURE__*/_jsx(DataDetail, _objectSpread(_objectSpread({}, props.dataDetail), {}, {
      item: e.columnsDetail,
      data: dataDetails,
      onDetailClose: props.onDetailClose,
      setDataDetails: _setDataDetails,
      slotData: props.slotData,
      onFinish: props.onFinish
    }))]
  });
});
var DragHandle = SortableHandle(function () {
  return /*#__PURE__*/_jsx(MenuOutlined, {
    style: {
      cursor: 'grab',
      color: '#999'
    }
  });
});
var SortableItem = SortableElement(function (props) {
  return /*#__PURE__*/_jsx("tr", _objectSpread({}, props));
});
var SortableBody = SortableContainer(function (props) {
  return /*#__PURE__*/_jsx("tbody", _objectSpread({}, props));
});
function TableTitle(_ref11) {
  var item = _ref11.item,
    onPressTitleSearch = _ref11.onPressTitleSearch;
  return item.search ? /*#__PURE__*/_jsxs("div", {
    className: "super-table-title-search",
    onClick: function onClick() {
      // 点击搜索图标
      onPressTitleSearch(item);
    },
    children: [/*#__PURE__*/_jsx("span", {
      children: item.title
    }), /*#__PURE__*/_jsx(SearchOutlined, {})]
  }) : item.title;
}