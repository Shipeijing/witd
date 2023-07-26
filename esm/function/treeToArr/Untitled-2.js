function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// tree转数组
function treeToArr(tree, key, initParentId) {
  var arr = [];
  function spread(tree, parentId) {
    for (var i = 0; i < tree.length; i++) {
      var item = tree[i];
      arr.push(_objectSpread(_objectSpread({}, item), {}, {
        children: [],
        parentId: parentId
      }));
      if (item.children) {
        spread(item.children, item[key || 'id']);
        // delete item.children;
      }
    }
  }

  spread(tree, initParentId || '0');
  return arr;
}
var company = {
  id: '01',
  title: '蔚来汽车',
  children: [{
    id: '02',
    title: '二级',
    children: [{
      id: '03',
      title: '三级',
      children: []
    }]
  }]
};
function a(id) {
  var list = treeToArr([company], 'id', '01');
  var ids = [];
  function getId(id) {
    var item = list.find(function (item) {
      return item.id === id;
    });
    ids.unshift(item.id);
    if (item.parentId) {
      getId(id);
    }
  }
  getId(id);
  return ids;
}
var ids = a('03');
console.log(ids);