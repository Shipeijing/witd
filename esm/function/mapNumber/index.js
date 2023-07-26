// 数组转tree

export default function mapNumber(data, _function) {
  if (data < 0) return [];
  var res = [];
  for (var i = 0; i < Math.floor(data); i++) {
    res.push(_function(i));
  }
  return res;
}