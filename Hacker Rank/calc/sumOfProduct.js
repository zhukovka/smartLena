/**
 * A*B + A*C + A*D + B*C + B*D + C*D = A*B + (A+B)*C + (A+B+C)*D
 * @param {number[]} array - array of numbers
 * @return {number} - sum of product A*B + A*C + A*D + B*C + B*D + C*D
 */
function sumOfProduct(array) {
    let sum = 0;
    let res = 0;
    for (let i = 0; i < array.length - 1; i++) {
        sum += array[i];
        res += sum * array[i + 1];
    }
    return res;
}

module.exports = sumOfProduct;
