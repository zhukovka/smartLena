/**
 * Determine the number of ways of making change for a particular number of units using the given types of coins
 * For example, if you have 4 types of coins, and the value of each type is given
 * as 8,3,2,1 respectively, you can make change for 3 units in three ways: , , and .
 
 * @param {number} n - an integer, the amount to make change for
 * @param {number[]} c - an array of integers representing available denominations
 */
function getWays(n, c) {
    /*
     * TIPs:
     * 1. Try building an array of the number of ways to make change for all amounts between 0 and n inclusive.
     *    Note that there is only one way to make change for 0: that is to not use any coins.
     * 2. Build up the array mentioned in Hint #1 one coin denomination at a time.
     *    In other words, find the number of ways to make change for all amounts between 0 and n
     *    with only one denomination, then with two, etc., until you use all denominations.
     */
    const waysForDenominations = (new Array(n)).fill(0);
    //iterate available denominations
    for (let i = 0; i < c.length; i++) {
        const denom = c[i];
        
        if (n % denom === 0) {
            waysForDenominations[i] += 1;
        }
    }
    
}

module.exports = getWays;
