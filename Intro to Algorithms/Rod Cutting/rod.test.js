const assert = require('assert');
describe('Rod Cutting', function () {
    const prices = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
    describe('Recursive top-down implementation', function () {
        const cutRod = require('./cutRod');
        it('should return 1', function () {
            const revenue = cutRod(prices, 1);
            assert.deepStrictEqual(revenue, 1);
        });

        it('should return 5', function () {
            const revenue = cutRod(prices, 2);
            assert.deepStrictEqual(revenue, 5);
        });

        it('should return 10', function () {
            const revenue = cutRod(prices, 4);
            assert.deepStrictEqual(revenue, 10);
        });
    });

    describe('top-down with memoization', function () {
        const cutRod = require('./cutRodMemo');
        it('should return 1', function () {
            const revenue = cutRod(prices, 1);
            assert.deepStrictEqual(revenue, 1);
        });

        it('should return 5', function () {
            const revenue = cutRod(prices, 2);
            assert.deepStrictEqual(revenue, 5);
        });

        it('should return 10', function () {
            const revenue = cutRod(prices, 4);
            assert.deepStrictEqual(revenue, 10);
        });

        it('should return 13', function () {
            const revenue = cutRod(prices, 5);
            assert.deepStrictEqual(revenue, 13);
        });

        it('should return 17', function () {
            const revenue = cutRod(prices, 6);
            assert.deepStrictEqual(revenue, 17);
        });

        it('should return 18', function () {
            const revenue = cutRod(prices, 7);
            assert.deepStrictEqual(revenue, 18);
        });

        it('should return 22', function () {
            const revenue = cutRod(prices, 8);
            assert.deepStrictEqual(revenue, 22);
        });

        it('should return 25', function () {
            const revenue = cutRod(prices, 9);
            assert.deepStrictEqual(revenue, 25);
        });

        it('should return 30', function () {
            const revenue = cutRod(prices, 10);
            assert.deepStrictEqual(revenue, 30);
        });
    });

    describe('bottom-up cut rod', function () {
        const cutRod = require('./cutRodDynamic');
        it('should return 1', function () {
            const revenue = cutRod(prices, 1);
            assert.deepStrictEqual(revenue, 1);
        });

        it('should return 5', function () {
            const revenue = cutRod(prices, 2);
            assert.deepStrictEqual(revenue, 5);
        });

        it('should return 10', function () {
            const revenue = cutRod(prices, 4);
            assert.deepStrictEqual(revenue, 10);
        });

        it('should return 13', function () {
            const revenue = cutRod(prices, 5);
            assert.deepStrictEqual(revenue, 13);
        });

        it('should return 17', function () {
            const revenue = cutRod(prices, 6);
            assert.deepStrictEqual(revenue, 17);
        });

        it('should return 18', function () {
            const revenue = cutRod(prices, 7);
            assert.deepStrictEqual(revenue, 18);
        });

        it('should return 22', function () {
            const revenue = cutRod(prices, 8);
            assert.deepStrictEqual(revenue, 22);
        });

        it('should return 25', function () {
            const revenue = cutRod(prices, 9);
            assert.deepStrictEqual(revenue, 25);
        });

        it('should return 30', function () {
            const revenue = cutRod(prices, 10);
            assert.deepStrictEqual(revenue, 30);
        });
    });
});