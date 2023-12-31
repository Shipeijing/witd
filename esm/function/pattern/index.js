//正则校验的正则表达式，这里注意正则表达式中的‘\’要使用‘\\’转义
var patterns = {
  name: '^[a-zA-Z_][0-9a-zA-Z_]{0,}$',
  tel: '^1[3-9]\\d{9}$',
  email: '^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$',
  pwd: '^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[\\(\\)])+$)([^(0-9a-zA-Z)]|[\\(\\)]|[a-z]|[A-Z]|[0-9]){8,}$',
  IP: '^(?=(\\b|\\D))(((\\d{1,2})|(1\\d{1,2})|(2[0-4]\\d)|(25[0-5]))\\.){3}((\\d{1,2})|(1\\d{1,2})|(2[0-4]\\d)|(25[0-5]))(?=(\\b|\\D))$',
  IDCard: '(^\\d{15}$)|(^\\d{17}([0-9]|X)$)'
};

//对应正则表达式的提示信息
var patternMsg = {
  name: '请以字母、下划线开头并包括数字、字母、下划线组成',
  tel: '非正确的号码',
  email: '非正确的邮箱地址',
  pwd: '密码至少由8位包含字母、数字、特殊字符两种组合',
  IP: '非正确IP地址',
  IDCard: '非正确身份证号码'
};
//根据使用的正则返回对应的正则和信息对象
var pattern = function pattern(name) {
  var para = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'g';
  return {
    pattern: new RegExp(patterns[name], para),
    message: patternMsg[name]
  };
};
export default pattern;