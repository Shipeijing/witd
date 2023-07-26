export function valuePropName(dataType) {
  switch (dataType) {
    case 'upload':
      return 'value';
    case 'boolean':
      return 'checked';
    default:
      return 'value';
  }
}
export var normFile = function normFile(e) {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e === null || e === void 0 ? void 0 : e.fileList;
};