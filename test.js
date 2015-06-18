'use strict'

var test = require('tape')
var useFakeTimers = require('sinon').useFakeTimers
var Firebase = require('firebase')
var sv = require('./')

test(function (t) {
  var timer = useFakeTimers()
  t.deepEqual(sv.ServerValue, Firebase.ServerValue)
  t.ok(sv.is(Firebase.ServerValue.TIMESTAMP))
  t.notOk(sv.is(null))
  t.notOk(sv.is({}))
  t.equal(sv.parse(Firebase.ServerValue.TIMESTAMP), new Date().getTime())
  t.throws(sv.parse.bind(null, {}), /Invalid ServerValue/)
  timer.restore()
  t.end()
})
