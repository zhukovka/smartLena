const {flipBit} = require('./bitManipulations');

/**
 * You will be given an array of integers. All of the integers except one occur twice.
 * That one is unique in the array.
 * Given an array of integers, find and print the unique element.
 * For example, a= [1,2,3,4,3,2,1], the unique element is 4.
 * @param {number[]} a - an array of integers
 * @return {number} - the integer which occurs only once in the input array
 */
function lonelyinteger(a) {
    //for each element `a[i]` in the array
    // set the bit at the position `i` (to 1) for the first occurrence,
    // clear the bit at the position `i` (to 0) for the second occurrence
    let bits = new Array(8).fill(0b0);
    for (const n of a) {
        let i = n / 32 | 0;
        bits[i] = flipBit(bits[i], n);
    }
    
    const el = bits.reduce((acc, bit, i) => {
        const s = bit.toString(2);
        if (s.indexOf('1') !== -1) {
            acc = s.length - s.indexOf('1') - 1;
            acc += 32 * i;
        }
        return acc;
    }, 0);
    return el;
}

module.exports = lonelyinteger;
