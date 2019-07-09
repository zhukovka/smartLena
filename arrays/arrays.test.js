const assert = require('assert');
const twoNumberSum = require('./2numSum');
const chai = require("chai");
const findThreeLargestNumbers = require('./3largest');

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

    describe('three largest', function () {
        it('Test Case #1', function () {
            chai.expect(findThreeLargestNumbers([55, 7, 8])).to.deep.equal([7, 8, 55]);
        });

        it('Test Case #2', function () {
            chai.expect(findThreeLargestNumbers([55, 43, 11, 3, -3, 10])).to.deep.equal([11, 43, 55]);
        });

        it('Test Case #3', function () {
            chai.expect(findThreeLargestNumbers([7, 8, 3, 11, 43, 55])).to.deep.equal([11, 43, 55]);
        });

        it('Test Case #4', function () {
            chai.expect(findThreeLargestNumbers([55, 7, 8, 3, 43, 11])).to.deep.equal([11, 43, 55]);
        });

        it('Test Case #5', function () {
            chai.expect(findThreeLargestNumbers([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7])).to.deep.equal([7, 7, 7]);
        });

        it('Test Case #6', function () {
            chai.expect(findThreeLargestNumbers([7, 7, 7, 7, 7, 7, 8, 7, 7, 7, 7])).to.deep.equal([7, 7, 8]);
        });

        it('Test Case #7', function () {
            chai.expect(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])).to.deep.equal([18, 141, 541]);
        });

        it('Test Case #8', function () {
            chai.expect(findThreeLargestNumbers([-1, -2, -3, -7, -17, -27, -18, -541, -8, -7, 7])).to.deep.equal([-2, -1, 7]);
        });
    })
});
