(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.shortNumber = factory()
}(this, function (num) {
    'use strict'

    return num => {
        if(typeof num !== 'number') throw new TypeError('Expected a number')
        if(num >= 1e15) throw new RangeError('Input expected to be < 1e15')
        if(num <= -1e15) throw new RangeError('Input expected to be > -1e15')

        if(Math.abs(num) < 1000) return num

        let size = (Math.floor(num) + '').length
        let suffix
        if(size < 16) suffix = 'T'
        if(size < 13) suffix = 'B'
        if(size < 10) suffix = 'M'
        if(size < 7) suffix  = 'K'

        return Math.round(10 * (num / Math.pow(10, size % 3 == 0 ? size - 3 : size - (size % 3)))) / 10 + suffix
    }
}))
