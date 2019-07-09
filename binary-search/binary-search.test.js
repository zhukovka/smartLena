const binarySearch = require("./binary-search");
const chai = require("chai");

describe('Binary search', function () {
        it('Test Case #1', function () {
            chai.expect(binarySearch([1, 5, 23, 111], 111)).to.deep.equal(3);
        });

        it('Test Case #2', function () {
            chai.expect(binarySearch([1, 5, 23, 111], 5)).to.deep.equal(1);
        });

        it('Test Case #3', function () {
            chai.expect(binarySearch([1, 5, 23, 111], 35)).to.deep.equal(-1);
        });

        it('Test Case #4', function () {
            chai.expect(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33)).to.deep.equal(3);
        });

        it('Test Case #5', function () {
            chai.expect(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 72)).to.deep.equal(8);
        });

        it('Test Case #6', function () {
            chai.expect(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 73)).to.deep.equal(9);
        });

        it('Test Case #7', function () {
            chai.expect(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 70)).to.deep.equal(-1);
        });

        it('Test Case #8', function () {
            chai.expect(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 355], 355)).to.deep.equal(10);
        });

        it('Test Case #9', function () {
            chai.expect(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 355], 354)).to.deep.equal(-1);
        });
    }
);