import { isEncodedDataUrl, isSvgDataUrl, validateContent } from "./validate";
export var ioniconContent = new Map();
var requests = new Map();
var parser;
export var getSvgContent = function getSvgContent(url, sanitize) {
  // see if we already have a request for this url
  var req = requests.get(url);
  if (!req) {
    if (typeof fetch !== 'undefined' && typeof document !== 'undefined') {
      /**
       * If the url is a data url of an svg, then try to parse it
       * with the DOMParser. This works with content security policies enabled.
       */
      if (isSvgDataUrl(url) && isEncodedDataUrl(url)) {
        if (!parser) {
          /**
           * Create an instance of the DOM parser. This creates a single
           * parser instance for the entire app, which is more efficient.
           */
          parser = new DOMParser();
        }
        var doc = parser.parseFromString(url, 'text/html');
        var svg = doc.querySelector('svg');
        if (svg) {
          ioniconContent.set(url, svg.outerHTML);
        }
        return Promise.resolve();
      } else {
        // we don't already have a request
        req = fetch(url).then(function (rsp) {
          if (rsp.ok) {
            return rsp.text().then(function (svgContent) {
              if (svgContent && sanitize !== false) {
                svgContent = validateContent(svgContent);
              }
              ioniconContent.set(url, svgContent || '');
            });
          }
          ioniconContent.set(url, '');
        });
        // cache for the same requests
        requests.set(url, req);
      }
    } else {
      // set to empty for ssr scenarios and resolve promise
      ioniconContent.set(url, '');
      return Promise.resolve();
    }
  }
  return req;
};