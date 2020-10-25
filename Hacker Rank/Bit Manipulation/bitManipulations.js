/**
 * @param {number} bitString - binary number
 * @param {number} n - integer, the bit position to flip
 * @return {number} - binary number with bit flipped
 */
function flipBit(bitString, n) {
    const mask = 0b1 << n;
    return bitString ^ mask;
}

/**
 *
 * @param {number} bitString - binary number
 * @param {number} n - integer, the bit position to get
 * @return {number} - binary number with bit at position `n`
 */
function getBit(bitString, n) {
    const mask = 0b1 >>> n;
    return bitString & mask;
}

exports.flipBit = flipBit;
exports.getBit = getBit;
