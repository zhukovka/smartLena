const assert = require('assert');
const twoNumberSum = require('./2numSum');

describe('Arrays', function () {

    describe('Two number sum', function () {
        it('should find two numbers', function () {
            const twoNum = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);

            assert.deepStrictEqual(twoNum, [-1, 11])
        });
    });

    describe('Three Number Sum', function () {
        it('should find three numbers', function () {

        });
    })
})
