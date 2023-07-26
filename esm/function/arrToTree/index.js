// 数组转tree
export default function arrToTree(data, parentId, key) {
  var loop = function loop(pId) {
    var res = [];
    data.forEach(function (item) {
      if (item.parentId === pId) {
        var children = loop(item[key || 'value']);
        if (children.length > 0) {
          item.children = children;
        }
        res.push(item);
      }
    });
    return res;
  };
  return loop(parentId);
}