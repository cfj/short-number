'use strict';
var test = require('tape');
var shortNumber = require('./');

test('positive tests', function(t) {
    t.plan(7);

    t.equal(shortNumber(231), 231);
    t.equal(shortNumber(5432), '5.4K');
    t.equal(shortNumber(35656), '35.7K');
    t.equal(shortNumber(1236903), '1.2M');
    t.equal(shortNumber(49653234), '49.7M');
    t.equal(shortNumber(984938293), '984.9M');
    t.equal(shortNumber(2743000000), '2.7B');
});

test('negative tests', function(t) {
    t.plan(7);

    t.equal(shortNumber(-231), -231);
    t.equal(shortNumber(-5432), '-5.4K');
    t.equal(shortNumber(-35656), '-35.7K');
    t.equal(shortNumber(-1236903), '-1.2M');
    t.equal(shortNumber(-49653234), '-49.7M');
    t.equal(shortNumber(-984938293), '-984.9M');
    t.equal(shortNumber(-2743000000), '-2.7B');
});

test('throw error on too large numbers', function(t) {
    t.plan(1);

    t.throws(function() {
        shortNumber(1e20);
    }, RangeError, 'Input expected to be < 1e19');
});

test('throw error on incorrect type', function(t) {
    t.plan(2);

    t.throws(function() {
        shortNumber('abc');
    }, TypeError, 'Expected a number');

    t.throws(function() {
        shortNumber(true);
    }, TypeError, 'Expected a number');
});