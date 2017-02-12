# koa2-response-time

[![npm-v-badge][npm-v-badge]][npm-url] [![npm-dt-badge][npm-dt-badge]][npm-url] [![travis-ci-master-badge][travis-ci-master-badge]][travis-ci-url] [![coverge-master-badge][coverge-master-badge]][coverge-master-url]

Add response time in response header. It's for koa2 middleware written in ES7 asnyc/await and compatible with ES5 syntax.

##Installation

```bash
$ npm install koa2-response-time
```

## Usage & Example

Import default module style:
```javascript
import * as Koa from 'koa';
import responseTime from 'koa2-response-time';  // import default style

const app = new Koa();
app.use(responseTime())
```

Import the module style:
```javascript
import * as Koa from 'koa';
import { responseTime } from 'koa2-response-time';  // import default style

const app = new Koa();
app.use(responseTime())
```


[travis-ci-master-badge]: https://api.travis-ci.org/TonyPythoneer/koa2-response-time.svg?branch=master
[travis-ci-develop-badge]: https://api.travis-ci.org/TonyPythoneer/koa2-response-time.svg?branch=develop
[travis-ci-url]: https://travis-ci.org/TonyPythoneer/koa2-response-time

[coverge-master-badge]: https://codecov.io/gh/TonyPythoneer/koa2-response-time/branch/master/graph/badge.svg
[coverge-master-url]: https://codecov.io/gh/TonyPythoneer/koa2-response-time/branch/master
[coverge-develop-badge]: https://codecov.io/gh/TonyPythoneer/koa2-response-time/branch/develop/graph/badge.svg
[coverge-develop-url]: https://codecov.io/gh/TonyPythoneer/koa2-response-time/branch/develop

[npm-v-badge]: https://img.shields.io/npm/v/koa2-response-time.svg
[npm-dt-badge]: https://img.shields.io/npm/dt/koa2-response-time.svg
[npm-url]: https://www.npmjs.com/package/koa2-response-time
