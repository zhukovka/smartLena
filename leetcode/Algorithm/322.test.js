/**
 * You are given an integer array coins representing coins of different denominations
 * and an integer amount representing a total amount of money.
 *
 * Return the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 * You may assume that you have an infinite number of each kind of coin.
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {

    coins.sort((a, b) => a - b);

    let count = 0;
    while (coins[0] && amount >= coins[0]) {
        let coin = coins[coins.length - 1];
        let n = amount / coin | 0;
        if (n > 0) {
            count += n;
            amount -= coin * n;
        }
        coins.pop();
    }

    return amount > 0 ? -1 : count;
};

const assert = require('assert');

describe('322. Coin Change', function () {
    let coins, amount, actual;
    it('Example 1', function () {
        coins = [1, 2, 5];
        amount = 11;
        actual = coinChange(coins, amount);
        assert.deepEqual(actual, 3);
    });

    it('Example 2:', function () {
        coins = [2];
        amount = 3;
        actual = coinChange(coins, amount);
        assert.deepEqual(actual, -1);
    });

    it('Example 3: ', function () {
        coins = [1];
        amount = 0
        actual = coinChange(coins, amount);
        assert.deepEqual(actual, 0);
    });


    it('Example 4: ', function () {
        coins = [186, 419, 83, 408];
        amount = 6249;
        actual = coinChange(coins, amount);
        assert.deepEqual(actual, 20);
    });
});