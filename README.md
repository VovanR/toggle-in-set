# toggle-in-set

[![Commitizen friendly][commitizen-image]][commitizen-url]
[![XO code style][codestyle-image]][codestyle-url]

[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> Add or remove item from Set

## Install

```shell
npm install --save toggle-in-set
```

## Usage

```js
var toggleInSet = require('toggle-in-set');

toggleInSet(new Set([1, 2, 3]), 2);
//=> Set(2) {1, 3}

toggleInSet(new Set([1, 2, 3]), 4);
//=> Set(4) {1, 2, 3, 4}
```

## API

### `toggleInSet(set, value)`

Returns an `Set` with `value` if `set` is not includes this `value`<br>
Returns an `Set` without `value` if `set` is includes this `value`

#### set
*Required*<br>
Type: `Set`

Set with values needs to toggle

#### value
*Required*<br>
Type: `*`

Value to toggle in `set`


## License
MIT © [Vladimir Rodkin](https://github.com/VovanR)

[commitizen-url]: https://commitizen.github.io/cz-cli/
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square

[codestyle-url]: https://github.com/xojs/xo
[codestyle-image]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square

[npm-url]: https://npmjs.org/package/toggle-in-set
[npm-image]: https://img.shields.io/npm/v/toggle-in-set.svg?style=flat-square

[build-url]: https://github.com/VovanR/toggle-in-set/actions?query=workflow%3A%22Tests%22
[build-image]: https://img.shields.io/github/workflow/status/VovanR/toggle-in-set/Tests?style=flat-square

[coveralls-url]: https://coveralls.io/r/VovanR/toggle-in-set
[coveralls-image]: https://img.shields.io/coveralls/VovanR/toggle-in-set.svg?style=flat-square

[depstat-url]: https://david-dm.org/VovanR/toggle-in-set
[depstat-image]: https://david-dm.org/VovanR/toggle-in-set.svg?style=flat-square

[depstat-dev-url]: https://david-dm.org/VovanR/toggle-in-set
[depstat-dev-image]: https://david-dm.org/VovanR/toggle-in-set/dev-status.svg?style=flat-square
