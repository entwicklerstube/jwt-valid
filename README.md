# Is JWT Valid
> Pass a JWT token and get a boolean if the token is valid, the requirements for a valid token are defined by the official [RFC 7519 standard](https://tools.ietf.org/html/rfc7519)

[![Zero Dependencies](https://img.shields.io/badge/zero-dependencies-brightgreen.svg)]()

### Install
**npm**
```
npm install is-jwt-valid
```

**yarn**
```
yarn add is-jwt-valid
```

### Usage
```js
isJwtValid(JWT_TOKEN<STRING>)
```

### Example
```js
isJwtValid('this is no valid token') // returns false
isJwtValid('some.valid.token')   // returns true
```

### Support
**Browser**
Under the hood it uses the `window.atob()` native feature which is supported in each major browser and IE from version 10 ([`check mozilla dev site`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob#Browser_compatibility))

**Node**
Uses the native `Buffer` API from node ([`check node documentation`](https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings))
