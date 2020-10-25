/*
Number Of Ways To Make Change
​
Given an array of positive integers representing coin denominations
and a single non-negative integer representing a target amount of money,
implement a function that returns the number of ways to make change
for that target amount using the given coin denominations.

Note that an unlimited amount of coins is at your disposal.
​
Sample input: 6, [1, 5]
Sample output: 2 (1x1 + 1x5 and 6x1)
 */

function numberOfWaysToMakeChange(n, denoms) {
    // Write your code here.
    // 6/1 = 1
    // 6/5 = 1.2
    let ways = 0;
    const divisible = denoms.reduce((acc, denom) => {
        const div = n % denom;
        if (div === 0) {
            ways += 1;
        } else {
            acc[denom] = div;
        }
        return acc;
    }, {});
    //{4:2} rest
    //if we have coins of the values
    //set intersect
    const rest = new Set(Object.values(divisible));
    //rest [1, 2]
    ways += denoms.reduce((acc, denom) => {
        if (rest.has(denom)) {
            acc += 1;
            rest.delete(denom);
        }
        return acc;
    }, 0);
    //rest [2]
    //denoms [1,5]
    ways += [...rest].reduce((acc, r) => {
        const hasCoins = denoms.some((d) => {
            return r % d === 0;
        })
        if (hasCoins) {
            acc += 1;
        }
        return acc;
    }, 0)
    
    return ways;
}

// Do not edit the line below.
module.exports = numberOfWaysToMakeChange;
