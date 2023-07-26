// 将二进制转为Excel并下载
export default (function (title, content) {
  var a = document.createElement('a');
  var blob = new Blob([content], {
    type: 'text/plain'
  });
  a.download = title;
  a.href = URL.createObjectURL(blob);
  a.click();
});