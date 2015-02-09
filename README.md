# short-number [![Build Status](https://travis-ci.org/cfj/short-number.svg?branch=master)](https://travis-ci.org/cfj/short-number)

> Turn a long number into a short one for readability.


## Installation

```sh
$ npm install --save short-number
```


## Usage

```js
var shortNumber = require('short-number');

shortNumber(5432);
//=> 5.4K

shortNumber(1236903);
//=> 1.2M
```

Supports numbers up to `1e18`.


## License

MIT © [Jonathan Svärdén](http://svarden.se)