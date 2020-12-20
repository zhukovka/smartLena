// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer. https://www.algoexpert.io/questions/Product%20Sum
/**
 *
 A "special" array is a non-empty array that contains either integers or other
 "special" arrays. The product sum of a "special" array is the sum of its
 elements, where "special" arrays inside it are summed themselves and then
 multiplied by their level of depth.
 The depth of a "special" array is how far nested it is. For instance,
 the depth of [] is 1; the depth of the inner array in [[]] is 2;
 the depth of the innermost array in [[[]]] is 3.
 * @param array{number[]}
 */
function productSum(array) {
    // Write your code here.
    return calculate(array, 1)
}

/**
 *
 * @param arr{any[]}
 * @param k{number}
 */
function calculate(arr, k) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum += calculate(arr[i], k + 1)
        } else {
            sum += arr[i];
        }
    }
    return sum * k;
}

// Do not edit the line below.
module.exports = productSum;
