'use strict'

var isObject = require('is-object')

var values = exports.values = {
  timestamp: function () {
    return new Date().getTime()
  }
}

exports.ServerValue = {
  TIMESTAMP: {
    '.sv': 'timestamp'
  }
}

var isSv = exports.is = function isServerValue (object) {
  return isObject(object) && values.hasOwnProperty(getSv(object))
}

exports.parse = function parseServerValue (object) {
  var value = isSv(object) && getSv(object)
  if (!value) throw new Error('Invalid ServerValue: ' + JSON.stringify(object))
  return values[value]()
}

function getSv (object) {
  return object['.sv']
}
