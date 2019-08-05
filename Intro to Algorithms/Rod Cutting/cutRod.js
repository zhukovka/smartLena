/**
 * implements the computation in a straightforward,
 * top-down, recursive manner
 *
 * @param {number[]} p - an array p[1...n] of prices
 * @param {number} n - rod length
 * @return {number} - maximum revenue possible for a rod of length `n`
 */

function cutRod (p, n) {
    if (n === 0) {
        return 0;
    }
    let q = 0;
    for (let i = 1; i <= n; i++) {
        q = Math.max(q, p[i] + cutRod(p, n - i))
    }
    return q;
}

module.exports = cutRod;