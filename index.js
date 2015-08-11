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
        var suffixes = {
            'K': 6,
            'M': 9,
            'B': 12,
            'T': 16
        };
        var size = Math.floor(Math.log(num) / Math.log(10)) + 1;

        exponent = size % 3 === 0 ? size - 3 : size - (size % 3);
        shortNumber = Math.round(10 * (num / Math.pow(10, exponent))) / 10;

        for(var suffix in suffixes) {
            if(exponent < suffixes[suffix]) {
                shortNumber += suffix;
                break;
            }
        }

        return shortNumber;
    };
}));