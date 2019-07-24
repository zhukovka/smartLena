const assert = require('assert');
const twoNumberSum = require('./2numSum');
const chai = require("chai");
const findThreeLargestNumbers = require('./3largest');
const smallestDifference = require('./smallestDifference');
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
    });
    
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
    });
    
    describe('Smallest Difference', function () {
        it('Test Case #1', function () {
            chai.expect(smallestDifference([-1, 5, 10, 20, 3], [26, 134, 135, 15, 17])).to.deep.equal([20, 17]);
        });
    
        it('Test Case #2', function () {
            chai.expect(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])).to.deep.equal([28, 26]);
        });
    
        it('Test Case #3', function () {
            chai.expect(smallestDifference([10, 0, 20, 25], [1005, 1006, 1014, 1032, 1031])).to.deep.equal([25, 1005]);
        });
    
        it('Test Case #4', function () {
            chai.expect(smallestDifference([10, 0, 20, 25, 2200], [1005, 1006, 1014, 1032, 1031])).to.deep.equal([25, 1005]);
        });
    
        it('Test Case #5', function () {
            chai.expect(smallestDifference([10, 0, 20, 25, 2000], [1005, 1006, 1014, 1032, 1031])).to.deep.equal([2000, 1032]);
        });
    
        it('Test Case #6', function () {
            chai.expect(smallestDifference([240, 124, 86, 111, 2, 84, 954, 27, 89], [1, 3, 954, 19, 8])).to.deep.equal([954, 954]);
        });
    
        it('Test Case #7', function () {
            chai.expect(smallestDifference([0, 20], [21, -2])).to.deep.equal([20, 21]);
        });
    
        it('Test Case #8', function () {
            chai.expect(smallestDifference([10, 1000], [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530])).to.deep.equal([1000, 1014]);
        });
    
        it('Test Case #9', function () {
            chai.expect(smallestDifference([10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123], [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530])).to.deep.equal([-123, -124]);
        });
    
        it('Test Case #10', function () {
            chai.expect(smallestDifference([10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123, 530], [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530])).to.deep.equal([530, 530]);
        });
    });
    
    describe('Array Manipulation', function () {
        const arrayManipulation = require('./arrayManipulation');
        it('should find max', () => {
            const res = arrayManipulation(10, [[2, 6, 8],
                [3, 5, 7],
                [1, 8, 1],
                [5, 9, 15]]);
            assert.deepStrictEqual(res, 31);
            
        });
    })
});
