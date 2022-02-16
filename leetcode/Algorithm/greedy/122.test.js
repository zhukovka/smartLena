/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    let stock = 0;
    let up = false;
    let profit = 0;
    let price = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (price > prices[i]) {
            //sell
            if (up) {
                profit += price - stock;
            }
            up = false;
        } else {
            //buy
            if (!up) {
                stock = price;
            }
            up = true;
        }
        price = prices[i];
    }
    if (up && price > stock) {
        profit += price - stock;
    }

    return profit;
};
const assert = require('assert');

describe('122. Best Time to Buy and Sell Stock II', function () {
    let prices, actual;

    it('Example 1', function () {
        prices = [7, 1, 5, 3, 6, 4]
        actual = maxProfit(prices);
        assert.deepEqual(actual, 7);
    });

    it('Example 2', function () {
        prices = [1, 2, 3, 4, 5]
        actual = maxProfit(prices);
        assert.deepEqual(actual, 4);
    });

    it('Example 3', function () {
        prices = [7, 6, 4, 3, 1]
        actual = maxProfit(prices);
        assert.deepEqual(actual, 0);
    });

    it('Example 4', function () {
        prices = [6, 1, 3, 2, 4, 7]
        actual = maxProfit(prices);
        assert.deepEqual(actual, 7);
    });

    it('Example 2', function () {
        prices = [2, 1, 2, 0, 1]
        actual = maxProfit(prices);
        assert.deepEqual(actual, 2);
    });
});