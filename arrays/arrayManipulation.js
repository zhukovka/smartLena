/**
 * Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each of the array element between two given indices, inclusive.
 * Once all operations have been performed, return the maximum value in your array.
 * @param n - the number of elements in your array
 * @param queries - a two dimensional array of queries where each queries[i] contains three integers, a, b, and k, the left index, right index and summand
 */
function arrayManipulation(n, queries) {
    const arr = new Array(n);
    arr.fill(0);
    
    let max = 0;
    
    for (const q of queries) {
        let [a, b, k] = q;
        while (a <= b) {
            arr[a - 1] += k;
            if (arr[a - 1] > max) {
                max = arr[a - 1];
            }
            a++;
        }
    }
    return max;
}

module.exports = arrayManipulation;
