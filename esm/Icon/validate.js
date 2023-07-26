import { isStr } from "./utils";
export var validateContent = function validateContent(svgContent) {
  var div = document.createElement('div');
  div.innerHTML = svgContent;

  // setup this way to ensure it works on our buddy IE
  for (var i = div.childNodes.length - 1; i >= 0; i--) {
    if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
      div.removeChild(div.childNodes[i]);
    }
  }

  // must only have 1 root element
  var svgElm = div.firstElementChild;
  if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
    var svgClass = svgElm.getAttribute('class') || '';
    svgElm.setAttribute('class', (svgClass + ' s-ion-icon').trim());

    // root element must be an svg
    // lets double check we've got valid elements
    // do not allow scripts
    if (isValid(svgElm)) {
      return div.innerHTML;
    }
  }
  return '';
};
export var isValid = function isValid(elm) {
  if (elm.nodeType === 1) {
    if (elm.nodeName.toLowerCase() === 'script') {
      return false;
    }
    for (var i = 0; i < elm.attributes.length; i++) {
      var name = elm.attributes[i].name;
      if (isStr(name) && name.toLowerCase().indexOf('on') === 0) {
        return false;
      }
    }
    for (var _i = 0; _i < elm.childNodes.length; _i++) {
      if (!isValid(elm.childNodes[_i])) {
        return false;
      }
    }
  }
  return true;
};
export var isSvgDataUrl = function isSvgDataUrl(url) {
  return url.startsWith('data:image/svg+xml');
};
export var isEncodedDataUrl = function isEncodedDataUrl(url) {
  return url.indexOf(';utf8,') !== -1;
};