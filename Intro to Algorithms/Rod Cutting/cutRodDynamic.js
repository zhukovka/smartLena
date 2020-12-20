/**
 *
 * @param {number[]} p - an array p[1...n] of prices
 * @param {number} n - rod length
 * @return {number} - maximum revenue possible for a rod of length `n`
 */
function cutRodDynamic(p, n) {
    const r = [0];
    const s = [0];
    for (let i = 1; i <= n; i++) {
        let q = 0;
        for (let j = 1; j <= i; j++) {
            const value = p[j] + r[i - j];
            if (value > q) {
                q = value;
                s[i] = j
            }
        }
        r[i] = q
    }
    console.log('r', r)
    console.log('s', s)
    return r[n];
}

module.exports = cutRodDynamic;
