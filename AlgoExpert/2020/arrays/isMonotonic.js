/**
 * https://www.algoexpert.io/questions/Monotonic%20Array
 * @param array{number[]}
 */
function isMonotonic(array) {
    // Write your code here.
    if (array.length <= 1) {
        return true;
    }
    let diff = array[0] - array[1];
    let diffS = diff < 0 ? -1 : 1;
    for (let i = 0; i < array.length - 1; i++) {
        const d = array[i] - array[i + 1];
        const ds = d < 0 ? -1 : 1;
        if (diff === 0 && d !== 0) {
            diff = d;
            diffS = diff < 0 ? -1 : 1;
        }
        if (d !== 0 && ds !== diffS) {
            return false;
        }
    }
    return true;
}

module.exports = isMonotonic;
