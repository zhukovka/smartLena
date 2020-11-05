/**
 *
 * @param {number[]} p - an array p[1...n] of prices
 * @param {number} n - rod length
 * @param {number[]} r - memoized revenues
 */
function cutRod (p, n, r) {
    if (n === 0) {
        return 0;
    }
    if (r[n]) {
        return r[n];
    }
    let q = 0;
    for (let i = 1; i <= n; i++) {
        q = Math.max(q, p[i] + cutRod(p, n - i, r))
    }
    r[n] = q;
    return q;
}

/**
 * implements the computation in a straightforward,
 * top-down, recursive manner
 *
 * @param {number[]} p - an array p[1...n] of prices
 * @param {number} n - rod length
 * @return {number} - maximum revenue possible for a rod of length `n`
 */
function cutRodMemo (p, n) {
    const revenues = [];
    return cutRod(p, n, revenues);
}

module.exports = cutRodMemo;