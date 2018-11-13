# firebase-server-value [![Build Status](https://travis-ci.org/bendrucker/firebase-server-value.svg?branch=master)](https://travis-ci.org/bendrucker/firebase-server-value) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/firebase-server-value.svg)](https://greenkeeper.io/)

> Create, detect, and validate [Firebase.ServerValue](https://www.firebase.com/docs/web/api/servervalue/)


## Install

```
$ npm install --save firebase-server-value
```


## Usage

```js
var firebaseServerValue = require('firebase-server-value')

firebaseServerValue.parse({
  '.sv': 'timestamp'
}) // => current timestamp
```

## API

#### `sv.ServerValue`

An object deeply equal to `Firebase.ServerValue`

#### `sv.is(value)`

Checks whether a given value is a valid `ServerValue` placeholder.

##### value

*Required*  
Type: `any`


#### `sv.parse(value)`

Parse a `ServerValue` placeholder into its actual value.

##### value

*Required*  
Type: `object`

An error will be thrown if value is not a valid `ServerValue` according to `sv.is`.

#### `sv.values`

An object with keys corresponding to the valid `'.sv'` placeholders (currently just `'timestamp'`) and the function used by `sv.parse` to generate a result as the values. The functions are called with no arguments. They can be overridden to modify the conversion of placeholders to true values.


## License

MIT © [Ben Drucker](http://bendrucker.me)
