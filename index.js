(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.shortNumber = factory();
}(this, function (num) {
    'use strict';

    return function (num) {
        if(typeof num !== 'number') {
            throw new TypeError('Expected a number');
        }

        if(num > 1e19) {
            throw new RangeError('Input expected to be < 1e19');
        }

        if(num < 1000) {
            return num;
        }

        var shortNumber;
        var exponent;
        var suffixes = ['K', 'M', 'B', 'T'];
        var size = Math.floor(Math.log(num) / Math.log(10)) + 1;

        exponent = size % 3 === 0 ? size - 3 : size - (size % 3);
        shortNumber = Math.round(10 * (num / Math.pow(10, exponent))) / 10;

        if(exponent < 6) {
            shortNumber += suffixes[0];
        } else if(exponent < 9) {
            shortNumber += suffixes[1];
        } else if(exponent < 12) {
            shortNumber += suffixes[2];
        } else if(exponent < 16) {
            shortNumber += suffixes[3];
        }

        return shortNumber;
    };
}));