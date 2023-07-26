var CACHED_MAP;
var productionUrl = process.env.NODE_ENV === 'development' ? '/' : '/';
export var getIconMap = function getIconMap() {
  if (typeof window === 'undefined') {
    return new Map();
  } else {
    if (!CACHED_MAP) {
      var win = window;
      win.Ionicons = win.Ionicons || {};
      CACHED_MAP = win.Ionicons.map = win.Ionicons.map || new Map();
    }
    return CACHED_MAP;
  }
};
export var addIcons = function addIcons(icons) {
  var map = getIconMap();
  Object.keys(icons).forEach(function (name) {
    return map.set(name, icons[name]);
  });
};
export var getUrl = function getUrl(i) {
  var url = getSrc(i.src);
  if (url) {
    return url;
  }
  url = getName(i.name, i.icon, i.mode, i.ios, i.md);
  if (url) {
    return getNamedUrl(url);
  }
  if (i.icon) {
    url = getSrc(i.icon);
    if (url) {
      return url;
    }
    url = getSrc(i.icon[i.mode]);
    if (url) {
      return url;
    }
  }
  return null;
};
export var getNamedUrl = function getNamedUrl(iconName) {
  var url = getIconMap().get(iconName);
  if (url) {
    return url;
  }
  return "".concat(productionUrl, "icon/svg/").concat(iconName, ".svg");
};
export var getName = function getName(iconName, icon, mode, ios, md) {
  // default to "md" if somehow the mode wasn't set
  mode = (mode && toLower(mode)) === 'ios' ? 'ios' : 'md';

  // if an icon was passed in using the ios or md attributes
  // set the iconName to whatever was passed in
  if (ios && mode === 'ios') {
    iconName = toLower(ios);
  } else if (md && mode === 'md') {
    iconName = toLower(md);
  } else {
    if (!iconName && icon && !isSrc(icon)) {
      iconName = icon;
    }
    if (isStr(iconName)) {
      iconName = toLower(iconName);
    }
  }
  if (!isStr(iconName) || iconName.trim() === '') {
    return null;
  }

  // only allow alpha characters and dash
  var invalidChars = iconName.replace(/[a-z]|-|\d/gi, '');
  if (invalidChars !== '') {
    return null;
  }
  return iconName;
};
export var getSrc = function getSrc(src) {
  if (isStr(src)) {
    src = src.trim();
    if (isSrc(src)) {
      return src;
    }
  }
  return null;
};
export var isSrc = function isSrc(str) {
  return str.length > 0 && /(\/|\.)/.test(str);
};
export var isStr = function isStr(val) {
  return typeof val === 'string';
};
export var toLower = function toLower(val) {
  return val.toLowerCase();
};

/**
 * Elements inside of web components sometimes need to inherit global attributes
 * set on the host. For example, the inner input in `ion-input` should inherit
 * the `title` attribute that developers set directly on `ion-input`. This
 * helper function should be called in componentWillLoad and assigned to a variable
 * that is later used in the render function.
 *
 * This does not need to be reactive as changing attributes on the host element
 * does not trigger a re-render.
 */
export var inheritAttributes = function inheritAttributes(el) {
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var attributeObject = {};
  attributes.forEach(function (attr) {
    if (el.hasAttribute(attr)) {
      var value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });
  return attributeObject;
};

/**
 * Returns `true` if the document or host element
 * has a `dir` set to `rtl`. The host value will always
 * take priority over the root document value.
 */
export var isRTL = function isRTL(hostEl) {
  var _document;
  if (hostEl) {
    if (hostEl.dir !== '') {
      return hostEl.dir.toLowerCase() === 'rtl';
    }
  }
  return ((_document = document) === null || _document === void 0 ? void 0 : _document.dir.toLowerCase()) === 'rtl';
};