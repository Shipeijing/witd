function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Method = /*#__PURE__*/function (Method) {
  Method["GET"] = "GET";
  Method["POST"] = "POST";
  Method["PUT"] = "PUT";
  Method["DELETE"] = "DELETE";
  return Method;
}(Method || {});
var headerFile = {
  'Content-Type': 'multipart/form-data;charset=utf-8'
};
/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST，只能大写
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @return 返回Promise
 */

function fetchRequest(_ref) {
  var url = _ref.url,
    method = _ref.method,
    header = _ref.header,
    params = _ref.params,
    token = _ref.token,
    upload = _ref.upload;
  var _header = _objectSpread({
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  }, header);
  if (token) {
    //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
    _header.token = token;
  }
  return new Promise(function (resolve, reject) {
    var requestBody = {
      method: method,
      mode: 'cors',
      headers: upload ? headerFile : _header
    };
    if (params) {
      requestBody.body = upload ? params : JSON.stringify(params);
    }
    console.log('发送请求===》', url);
    fetch(url, requestBody).then(function (response) {
      // post请求默认返回201 普通200
      if (response.status === 200 || response.status === 201) {
        return {
          status: response.status,
          data: response.json(),
          message: '请求成功'
        };
      }
      return {
        status: response.status,
        data: null,
        message: '请求失败'
      };
    }).then(function (responseData) {
      console.log('res:', url, responseData.data); //网络请求成功返回的数据
      resolve(responseData.data);
    }).catch(function (err) {
      console.log('error:', url, err); //网络请求失败返回的数据
      reject(err);
    });
  });
}
export default {
  get: function get(props) {
    return fetchRequest(_objectSpread(_objectSpread({}, props), {}, {
      method: Method.GET
    }));
  },
  post: function post(props) {
    return fetchRequest(_objectSpread(_objectSpread({}, props), {}, {
      method: Method.POST
    }));
  },
  put: function put(props) {
    return fetchRequest(_objectSpread(_objectSpread({}, props), {}, {
      method: Method.PUT
    }));
  },
  delete: function _delete(props) {
    return fetchRequest(_objectSpread(_objectSpread({}, props), {}, {
      method: Method.DELETE
    }));
  },
  upload: function upload(props) {
    return fetchRequest(_objectSpread(_objectSpread({}, props), {}, {
      method: Method.POST,
      upload: true
    }));
  }
};