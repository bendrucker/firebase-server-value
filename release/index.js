'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _Object$isObject = require('babel-runtime/core-js/object/is-object')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

exports.is = is;
exports.parse = parse;
'use strict';

var values = {
  timestamp: function timestamp() {
    return new Date().getTime();
  }
};

exports.values = values;
var ServerValue = {
  TIMESTAMP: {
    '.sv': 'timestamp'
  }
};

exports.ServerValue = ServerValue;

function is(object) {
  return _Object$isObject(object) && !! ~_Object$keys(values).indexOf(get(object));
}

function parse(object) {
  var value = is(object) && get(object);
  if (!value) throw new Error('"' + JSON.stringify(object) + '" is not a valid ServerValue');
  return values[value]();
}

function get(object) {
  return object['.sv'];
}