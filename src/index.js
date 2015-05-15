'use strict'

export const values = {
  timestamp: () => new Date().getTime()
}

export const ServerValue = {
  TIMESTAMP: {
    '.sv': 'timestamp'
  }
}

export function is (object) {
  return Object.isObject(object) && !!~Object.keys(values).indexOf(get(object))
}

export function parse (object) {
  const value = is(object) && get(object)
  if (!value) throw new Error(`"${JSON.stringify(object)}" is not a valid ServerValue`)
  return values[value]()
}

function get (object) {
  return object['.sv']
}
