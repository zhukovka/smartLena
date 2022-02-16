/**
 * 121. Best Time to Buy and Sell Stock
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing
 * a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction.
 * If you cannot achieve any profit, return 0.
 *
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    let min = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else if (prices[i] - min > maxProfit) {
            maxProfit = prices[i] - min;
        }
    }
    return maxProfit;
};
const assert = require('assert');

describe('121. Best Time to Buy and Sell Stock', function () {
    let prices, actual;
    it('Example 1', function () {
        prices = [7, 1, 5, 3, 6, 4]
        actual = maxProfit(prices);
        assert.deepStrictEqual(actual, 5);
    });

    it('Example 2', function () {
        prices = [7, 6, 4, 3, 1]
        actual = maxProfit(prices);
        assert.deepStrictEqual(actual, 0);
    });
});