/**
 * Maximizing XOR
 * Given two integers, `l` and `r`, find the maximal value of `a` xor `b`,
 * written `a⨁b`, where `a` and `b` satisfy the following condition:
 * l≤a≤b≤r
 * For example, if `l=11` and `r=12`, then
 * `11⨁11=0`
 * `11⨁12=7`
 * `12⨁12=0`
 * Our maximum value is 7.
 * @param {number} l - an integer, the lower bound, inclusive
 * @param {number} r - an integer, the upper bound, inclusive
 */
function maximizingXor(l, r) {
    let max = 0;
    let _l = l;
    while (_l <= r) {
        const lXorR = l ^ _l;
        console.log(`${l} ^ ${_l} = ${lXorR}`);
        if (lXorR > max) {
            max = lXorR;
        }
        _l++;
    }
    return max;
}

module.exports = maximizingXor;
