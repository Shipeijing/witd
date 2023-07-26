/**
 * @fn : 要执行的函数
 * @delay : 每次函数的时间间隔
 */
export default function throttle(fn, delay) {
  var timer; // 定时器

  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var context = this;
    // 如果timer存在，说明函数还未该执行
    if (timer) return;
    timer = setTimeout(function () {
      // 当函数执行时，让timer为null。
      timer = null;
      fn.apply(context, args);
    }, delay);
  };
}