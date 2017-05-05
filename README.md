# JWT Valid
> Pass a JWT token and get a boolean if the token is valid, the requirements for a valid token are defined by the official [RFC 7519 standard](https://tools.ietf.org/html/rfc7519)

[![Zero Dependencies](https://img.shields.io/badge/zero-dependencies-brightgreen.svg)]()
[![Coverage Status](https://coveralls.io/repos/github/entwicklerstube/jwt-valid/badge.svg?branch=master)](https://coveralls.io/github/entwicklerstube/jwt-valid?branch=master)
[![Build Status](https://travis-ci.org/entwicklerstube/jwt-valid.svg?branch=master)](https://travis-ci.org/entwicklerstube/jwt-valid)
[![devDependencies Status](https://david-dm.org/entwicklerstube/jwt-valid/dev-status.svg)](https://david-dm.org/entwicklerstube/jwt-valid?type=dev)
[![greenkeeper badge](https://badges.greenkeeper.io/entwicklerstube/jwt-valid.svg)](https://greenkeeper.io/)

### Install
**npm**
```
npm install jwt-valid
```

**yarn**
```
yarn add jwt-valid
```

### Usage
```js
jwtValid(JWT_TOKEN<STRING>)
```

### Example
```js
jwtValid('this is no valid token') // returns false
jwtValid('some.valid.token')   // returns true
```

### Support
**Browser**
Under the hood it uses the `window.atob()` native feature which is supported in each major browser and IE from version 10 ([`check mozilla dev site`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob#Browser_compatibility))

**Node**
Uses the native `Buffer` API from node ([`check node documentation`](https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings))
