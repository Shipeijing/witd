/**
 * @fn : 要执行的函数
 * @delay : 执行函数的时间间隔
 */

export default function debounce(fn, delay) {
  var timer; // 定时器
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    // 形成闭包
    // args 为函数调用时传的参数。
    var context = this;
    timer && clearTimeout(timer); // 当函数再次执行时，清除定时器，重新开始计时
    // 利用定时器，让指定函数延迟执行。
    timer = setTimeout(function () {
      // 执行传入的指定函数，利用apply更改this绑定和传参
      fn.apply(context, args);
    }, delay);
  };
}