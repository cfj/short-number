'use strict';
var test = require('ava');
var shortNumber = require('./');

test(function(t) {
    t.assert(shortNumber(231) === 231);
    t.assert(shortNumber(5432) === '5.4K');
    t.assert(shortNumber(35656) === '35.7K');
    t.assert(shortNumber(1236903) === '1.2M');
    t.assert(shortNumber(49653234) === '49.7M');
    t.assert(shortNumber(984938293) === '984.9M');
    t.assert(shortNumber(2743000000) === '2.7B');
});