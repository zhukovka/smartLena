const assert = require('assert');
const insertionSort = require('./insertion');

describe('Sorting', function () {

    describe('Insertion', function () {
        it('should sort an array', function () {
            let arr = [42, 53, 1, 8, 15];
            assert.deepStrictEqual(insertionSort(arr), [1, 8, 15, 42, 53])
        });
    })
});