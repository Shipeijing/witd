function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * desc:  非常详细的用户列表案例，通过行控制可以完成对行基础操作控制
 * background: '#f6f7f9'
 */
import React, { useEffect, useRef, useState } from 'react';
import { Form, message, Select } from 'rs-antd';
import Button from "../../Button";
import Table, { Slot } from "../../Table";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default (function () {
  var tableRef = useRef();
  var _useState = useState(data),
    _useState2 = _slicedToArray(_useState, 2),
    first = _useState2[0],
    setfirst = _useState2[1];
  var _useState3 = useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    bordered = _useState4[0],
    setbordered = _useState4[1];
  useEffect(function () {
    var _tableRef$current;
    (_tableRef$current = tableRef.current) === null || _tableRef$current === void 0 ? void 0 : _tableRef$current.setSelectedRows([{
      id: 1215753582039968,
      userName: '陈晗',
      sex: null,
      userCode: '15295066157',
      phone: '15295066157',
      identity: '513436200002289790',
      height: '177',
      weight: null,
      previousHistory: null,
      previousHistoryName: '',
      familyHistory: null,
      familyHistoryName: '',
      emergencyContact: null,
      emergencyContactPhone: null,
      residentArea: null,
      callCount: '2',
      _disableSelectNode: true
    }]);
  }, []);
  var columns = [{
    title: '姓名',
    dataIndex: 'userName',
    key: 'userName',
    dataType: 'input',
    search: true,
    detail: true,
    required: true,
    searchOrder: 0
  }, {
    title: '性别',
    dataIndex: 'sex',
    dataType: 'select',
    required: true,
    key: 'sex',
    detail: true,
    dataSource: [{
      label: '女',
      value: '0'
    }, {
      label: '男',
      value: '1'
    }],
    search: true,
    searchOrder: 1,
    render: function render(e) {
      return [e === '0' && '女', e === '1' && '男'];
    }
  }, {
    title: '账号',
    dataIndex: 'userCode',
    key: 'userCode',
    detail: true,
    readOnly: true
  }, {
    title: '手机号',
    dataIndex: 'phone',
    key: 'phone',
    detail: true,
    required: true,
    dataType: 'input',
    search: true,
    searchOrder: 2
  }, {
    title: '身份证号码',
    dataIndex: 'identity',
    key: 'identity',
    detail: true,
    dataType: 'input',
    search: true,
    searchOrder: 3,
    span: 2
  }, {
    title: '身高（cm）',
    dataIndex: 'height',
    detail: true,
    key: 'height'
  }, {
    title: '体重（kg）',
    dataIndex: 'weight',
    detail: true,
    key: 'weight'
  }, {
    title: '既往史',
    dataIndex: 'previousHistoryName',
    detail: true,
    key: 'previousHistoryName'
  }, {
    title: '家族史',
    dataIndex: 'familyHistoryName',
    detail: true,
    key: 'familyHistoryName'
  }, {
    title: '紧急联系人',
    dataIndex: 'emergencyContact',
    detail: true,
    key: 'emergencyContact'
  }, {
    title: '紧急联系人联系方式',
    dataIndex: 'emergencyContactPhone',
    detail: true,
    key: 'emergencyContactPhone'
  }, {
    title: '呼救次数',
    dataIndex: 'callCount',
    detail: true,
    key: 'callCount'
  }];
  return /*#__PURE__*/_jsxs(Table, {
    ref: tableRef,
    dataSource: first,
    columns: columns,
    segmented: {
      show: true,
      listTitle: '用户列吧',
      selectTitle: '已选中列表'
    },
    active: {
      // title: '用户列表',
      width: 130,
      add: true,
      update: true,
      delete: true,
      deleteSelect: true,
      showIcon: true,
      deleteProps: {
        title: '删除标题',
        content: '删除内容，你想删除这条数据吗？',
        type: 'error'
      }
      // hideHandle: true,
    },

    form: {
      // column: 2,
      formProps: {
        layout: 'vertical'
      }
    },
    dataDetail: {
      title: '用户信息',
      bordered: bordered
    },
    selection: true,
    onAdd: /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              message.success('新增成功');
              setfirst([_objectSpread(_objectSpread({}, data), {}, {
                id: String(first.length + 1)
              })].concat(_toConsumableArray(first)));
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x2) {
        return _ref.apply(this, arguments);
      };
    }(),
    onBeforeAdd: function onBeforeAdd() {
      return {
        userName: '默认用户名'
      };
    },
    onUpDate: function onUpDate(data, oldData) {
      var query = first.map(function (item) {
        return item.id === oldData.id ? _objectSpread(_objectSpread({}, item), data) : item;
      });
      setfirst(query);
    },
    onDelete: function onDelete(id) {
      var query = first.filter(function (item) {
        return !id.includes(item.id);
      });
      setfirst(query);
    },
    onRequest: function onRequest(e) {
      console.log(e);
    },
    slot: {
      searchFormSlot: function searchFormSlot() {
        return [/*#__PURE__*/_jsx(Form.Item, {
          name: 'warehouseStatus',
          label: '状态',
          labelCol: {
            span: 7,
            offset: 0
          },
          children: /*#__PURE__*/_jsxs(Select, {
            placeholder: "\u8BF7\u9009\u62E9",
            allowClear: true,
            children: [/*#__PURE__*/_jsx(Select.Option, {
              value: '1',
              children: "\u6B63\u5E38"
            }, 1), /*#__PURE__*/_jsx(Select.Option, {
              value: '0',
              children: "\u51BB\u7ED3"
            }, 0)]
          })
        }, 'warehouseStatus')];
      }
    },
    children: [/*#__PURE__*/_jsxs(Slot, {
      type: "detail",
      order: 1,
      children: [/*#__PURE__*/_jsx("h4", {
        children: "\u6211\u662F\u63D2\u69FD"
      }), /*#__PURE__*/_jsx("p", {
        children: "\u6211\u53EF\u4EE5\u4EFB\u610F\u6DFB\u52A0\u4EFB\u4F55\u5185\u5BB9\uFF0C\u6BD4\u5982\u4E00\u4E2A\u77ED\u6587\uFF1A"
      }), /*#__PURE__*/_jsx("p", {
        children: "\u521B\u4E16\u610F\u5473\u7740\u65B0\u751F\u548C\u6D3B\u529B\uFF0C\u662F\u4E00\u79CD\u4E50\u89C2\u79EF\u6781\u7684\u6001\u5EA6\uFF0C\u5B83\u5305\u62EC\u59CB\u521B\u548C\u518D\u521B\u3002\u706D\u4E16\u5219\u610F\u5473\u7740\u6B7B\u4EA1\u548C\u51CB\u96F6\uFF0C\u662F\u4E00\u79CD\u60B2\u89C2\u6D88\u6781\u7684\u6001\u5EA6\uFF0C\u5B83\u5305\u62EC\u91CD\u521B\u548C\u6D88\u4EA1\u3002\u706D\u4E16\u610F\u5473\u7740\u4E16\u754C\u672B\u65E5\u3002\u62E5\u6709\u795E\u79D8\u529B\u91CF\u7684\u5F3A\u8005\uFF0C\u51FA\u4E8E\u5BF9\u8FD9\u4E2A\u4E16\u754C\u7684\u504F\u89C1\uFF0C\u6216\u56E0\u4E3A\u5BF9\u73B0\u4E16\u7684\u4E0D\u6EE1\u800C\u60F3\u706D\u4E16\u91CD\u521B\u4E00\u4E2A\u4ED6\u8BA4\u4E3A\u7406\u60F3\u7684\u4E16\u754C\uFF0C\u66F4\u6216\u8005\u56E0\u4E3A\u75DB\u6068\u8FD9\u4E2A\u4E16\u754C\u800C\u60F3\u4E0E\u8FD9\u4E2A\u4E16\u754C\u540C\u5F52\u4E8E\u5C3D\u3002\u4E5F\u6709\u53EF\u80FD\u67D0\u4E2A\u8D85\u7EA7\u5F3A\u8005\uFF0C\u9AD8\u5904\u4E0D\u80DC\u5BD2\uFF0C\u4EE5\u706D\u4E16\u4E3A\u6E38\u620F\uFF0C\u89C6\u6B64\u4E3A\u4E50\u8DA3\u3002\u65E0\u8BBA\u6B64\u7C7B\u79CD\u79CD\uFF0C\u90FD\u5F52\u56E0\u4E8E\u5BF9\u4EBA\u6027\u7684\u601D\u7D22\uFF0C\u662F\u4EBA\u7C7B\u7EC8\u6781\u8D1F\u80FD\u91CF\u5728\u5C0F\u8BF4\u4E2D\u7684\u5F71\u50CF\u3002\u800C\u73B0\u4E16\u7EDD\u4E0D\u5BB9\u8BB8\u6B64\u79CD\u601D\u60F3\u548C\u884C\u4E3A\uFF0C\u4E8E\u662F\u4EE3\u8868\u5E7F\u5927\u4EBA\u7C7B\u5229\u76CA\u7684\u82F1\u96C4\u8BDE\u751F\u4E86\uFF0C\u4ED6\u662F\u8FD9\u4E2A\u4E16\u754C\u7684\u5B88\u62A4\u795E\uFF0C\u662F\u4EBA\u7C7B\u7EC8\u6781\u6B63\u80FD\u91CF\u5728\u5C0F\u8BF4\u4E2D\u7684\u5F71\u50CF\u3002\u62A4\u4E16\u4E0D\u662F\u4E00\u79CD\u4FDD\u5B88\u4E5F\u4E0D\u662F\u4E00\u79CD\u6FC0\u8FDB\uFF0C\u800C\u662F\u4E00\u4E2A\u6807\u6746\u3002\u6700\u540E\u8BC1\u660E\u751F\u547D\u662F\u6C38\u6052\u7684\uFF0C\u4E16\u754C\u672B\u65E5\u53EA\u662F\u4E00\u4E2A\u73A9\u7B11\u3002"
      })]
    }), /*#__PURE__*/_jsx(Slot, {
      type: "detailButton",
      order: 0,
      children: /*#__PURE__*/_jsx(Button, {
        style: {
          marginLeft: 10
        },
        onClick: function onClick() {
          setbordered(!bordered);
        },
        children: !bordered ? '显示边框' : '隐藏边框'
      })
    })]
  });
});
var data = [{
  id: 1215753582039968,
  userName: '陈晗',
  sex: null,
  userCode: '15295066157',
  phone: '15295066157',
  identity: '513436200002289790',
  height: '177',
  weight: null,
  previousHistory: null,
  previousHistoryName: '',
  familyHistory: null,
  familyHistoryName: '',
  emergencyContact: null,
  emergencyContactPhone: null,
  residentArea: null,
  callCount: '2',
  _disableSelectNode: true,
  _hideActiveDeleteNode: true,
  _hideActiveUpdateNode: true,
  callRecords: [{
    userId: null,
    rescueId: 1215753934345120,
    imGroupId: null,
    callTime: '2023-03-09 16:17:43',
    callAddress: '江苏省南京市建邺区沙洲街道文广路',
    userName: null,
    phone: null,
    identity: null,
    rescueCountTime: '0',
    rescueStartTime: null,
    rescueEndTime: null,
    rescueAcceptTime: null,
    rescueExitTime: null,
    participateRescueTime: null,
    callModel: '0',
    callStatus: '3',
    rescueResults: null,
    numberOfRescuers: '1',
    name: null,
    relation: null,
    reportDownload: null
  }, {
    userId: null,
    rescueId: 1215753879901088,
    imGroupId: null,
    callTime: '2023-03-09 16:17:36',
    callAddress: '江苏省南京市建邺区沙洲街道文广路',
    userName: null,
    phone: null,
    identity: null,
    rescueCountTime: '0',
    rescueStartTime: null,
    rescueEndTime: null,
    rescueAcceptTime: null,
    rescueExitTime: null,
    participateRescueTime: null,
    callModel: '1',
    callStatus: '3',
    rescueResults: null,
    numberOfRescuers: '0',
    name: null,
    relation: null,
    reportDownload: null
  }],
  userRoleList: [{
    roleId: 1365270790553600,
    roleName: '市民',
    roleCode: 'citizen',
    dataType: 'D',
    type: 'shimin'
  }],
  name: null,
  relation: null
}, {
  id: 1210121402209696,
  userName: '张超',
  sex: null,
  userCode: '13809030597',
  phone: '13809030597',
  identity: '321183199109130611',
  height: null,
  weight: null,
  previousHistory: null,
  previousHistoryName: '',
  familyHistory: null,
  familyHistoryName: '',
  emergencyContact: null,
  emergencyContactPhone: null,
  residentArea: null,
  callCount: '1',
  _hideActiveDetailNode: true,
  _hideActiveUpdateNode: true,
  callRecords: [{
    userId: null,
    rescueId: 1213585919949728,
    imGroupId: null,
    callTime: '2023-03-06 14:46:52',
    callAddress: '江苏省南京市雨花台区雨花街道瑞幸咖啡(华博智慧园店)华博智慧园',
    userName: null,
    phone: null,
    identity: null,
    rescueCountTime: '0',
    rescueStartTime: null,
    rescueEndTime: null,
    rescueAcceptTime: null,
    rescueExitTime: null,
    participateRescueTime: null,
    callModel: '1',
    callStatus: '3',
    rescueResults: null,
    numberOfRescuers: '0',
    name: null,
    relation: null,
    reportDownload: null
  }],
  userRoleList: [{
    roleId: 1365270790553600,
    roleName: '市民',
    roleCode: 'citizen',
    dataType: 'D',
    type: 'shimin'
  }],
  name: null,
  relation: null
}, {
  id: 1210064683750816,
  userName: '王熹',
  sex: '1',
  userCode: '13813398096',
  phone: '13813398096',
  identity: '320123198308224221',
  height: null,
  weight: null,
  previousHistory: null,
  previousHistoryName: '',
  familyHistory: null,
  familyHistoryName: '',
  emergencyContact: null,
  emergencyContactPhone: null,
  residentArea: null,
  callCount: '0',
  callRecords: [],
  _hideActiveDetailNode: true,
  _hideActiveDeleteNode: true,
  userRoleList: [{
    roleId: 1365270790553600,
    roleName: '市民',
    roleCode: 'citizen',
    dataType: 'D',
    type: 'shimin'
  }, {
    roleId: 1365270816219136,
    roleName: '志愿者',
    roleCode: 'volunteer',
    dataType: 'D',
    type: 'ZYZ'
  }],
  name: null,
  relation: null
}, {
  id: 1210063773119904,
  userName: '邢光海',
  sex: '1',
  userCode: '15189815653',
  phone: '15189815653',
  identity: '320124197511082419',
  height: null,
  weight: null,
  previousHistory: null,
  previousHistoryName: '',
  familyHistory: null,
  familyHistoryName: '',
  emergencyContact: null,
  emergencyContactPhone: null,
  residentArea: null,
  callCount: '0',
  callRecords: [],
  userRoleList: [{
    roleId: 1365270790553600,
    roleName: '市民',
    roleCode: 'citizen',
    dataType: 'D',
    type: 'shimin'
  }, {
    roleId: 1365270816219136,
    roleName: '志愿者',
    roleCode: 'volunteer',
    dataType: 'D',
    type: 'ZYZ'
  }],
  name: null,
  relation: null
}, {
  id: 1210063697319328,
  userName: '张霞',
  sex: '1',
  userCode: '13952028060',
  phone: '13952028060',
  identity: '320121197510292327',
  height: null,
  weight: null,
  previousHistory: null,
  previousHistoryName: '',
  familyHistory: null,
  familyHistoryName: '',
  emergencyContact: null,
  emergencyContactPhone: null,
  residentArea: null,
  callCount: '0',
  callRecords: [],
  userRoleList: [{
    roleId: 1365270790553600,
    roleName: '市民',
    roleCode: 'citizen',
    dataType: 'D',
    type: 'shimin'
  }, {
    roleId: 1365270816219136,
    roleName: '志愿者',
    roleCode: 'volunteer',
    dataType: 'D',
    type: 'ZYZ'
  }],
  name: null,
  relation: null
}, {
  id: 1210063642572192,
  userName: '王晓露',
  sex: '1',
  userCode: '13390904536',
  phone: '13390904536',
  identity: '320112198612290427',
  height: null,
  weight: null,
  previousHistory: null,
  previousHistoryName: '',
  familyHistory: null,
  familyHistoryName: '',
  emergencyContact: null,
  emergencyContactPhone: null,
  residentArea: null,
  callCount: '0',
  callRecords: [],
  userRoleList: [{
    roleId: 1365270790553600,
    roleName: '市民',
    roleCode: 'citizen',
    dataType: 'D',
    type: 'shimin'
  }, {
    roleId: 1365270816219136,
    roleName: '志愿者',
    roleCode: 'volunteer',
    dataType: 'D',
    type: 'ZYZ'
  }],
  name: null,
  relation: null
}, {
  id: 1210063601161632,
  userName: '王家贵',
  sex: '1',
  userCode: '13851475959',
  phone: '13851475959',
  identity: '320123197307120055',
  height: null,
  weight: null,
  previousHistory: null,
  previousHistoryName: '',
  familyHistory: null,
  familyHistoryName: '',
  emergencyContact: null,
  emergencyContactPhone: null,
  residentArea: null,
  callCount: '0',
  callRecords: [],
  userRoleList: [{
    roleId: 1365270790553600,
    roleName: '市民',
    roleCode: 'citizen',
    dataType: 'D',
    type: 'shimin'
  }, {
    roleId: 1365270816219136,
    roleName: '志愿者',
    roleCode: 'volunteer',
    dataType: 'D',
    type: 'ZYZ'
  }],
  name: null,
  relation: null
}, {
  id: 1210063561258400,
  userName: '张翠云',
  sex: '1',
  userCode: '13705175908',
  phone: '13705175908',
  identity: '320103196403030762',
  height: null,
  weight: null,
  previousHistory: null,
  previousHistoryName: '',
  familyHistory: null,
  familyHistoryName: '',
  emergencyContact: null,
  emergencyContactPhone: null,
  residentArea: null,
  callCount: '0',
  callRecords: [],
  userRoleList: [{
    roleId: 1365270790553600,
    roleName: '市民',
    roleCode: 'citizen',
    dataType: 'D',
    type: 'shimin'
  }, {
    roleId: 1365270816219136,
    roleName: '志愿者',
    roleCode: 'volunteer',
    dataType: 'D',
    type: 'ZYZ'
  }],
  name: null,
  relation: null
}, {
  id: 1210063512745376,
  userName: '郭艳',
  sex: '1',
  userCode: '13951988092',
  phone: '13951988092',
  identity: '32010219730220950X',
  height: null,
  weight: null,
  previousHistory: null,
  previousHistoryName: '',
  familyHistory: null,
  familyHistoryName: '',
  emergencyContact: null,
  emergencyContactPhone: null,
  residentArea: null,
  callCount: '0',
  callRecords: [],
  userRoleList: [{
    roleId: 1365270790553600,
    roleName: '市民',
    roleCode: 'citizen',
    dataType: 'D',
    type: 'shimin'
  }, {
    roleId: 1365270816219136,
    roleName: '志愿者',
    roleCode: 'volunteer',
    dataType: 'D',
    type: 'ZYZ'
  }],
  name: null,
  relation: null
}, {
  id: 1210063459505568,
  userName: '徐海',
  sex: '1',
  userCode: '13151545708',
  phone: '13151545708',
  identity: '32011319700731201X',
  height: null,
  weight: null,
  previousHistory: null,
  previousHistoryName: '',
  familyHistory: null,
  familyHistoryName: '',
  emergencyContact: null,
  emergencyContactPhone: null,
  residentArea: null,
  callCount: '0',
  callRecords: [],
  userRoleList: [{
    roleId: 1365270790553600,
    roleName: '市民',
    roleCode: 'citizen',
    dataType: 'D',
    type: 'shimin'
  }, {
    roleId: 1365270816219136,
    roleName: '志愿者',
    roleCode: 'volunteer',
    dataType: 'D',
    type: 'ZYZ'
  }],
  name: null,
  relation: null
}];