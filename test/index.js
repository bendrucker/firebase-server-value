'use strict'

import test from 'tape'
import {useFakeTimers} from 'sinon'
import Firebase from 'firebase'
import {is, parse, ServerValue} from '../'

test((t) => {
  const timer = useFakeTimers()
  t.deepEqual(ServerValue, Firebase.ServerValue)
  t.ok(is(Firebase.ServerValue.TIMESTAMP))
  t.notOk(is(null))
  t.notOk(is({}))
  t.equal(parse(Firebase.ServerValue.TIMESTAMP), new Date().getTime())
  t.throws(() => parse({}), /not a valid ServerValue/)
  timer.restore()
  t.end()
})
