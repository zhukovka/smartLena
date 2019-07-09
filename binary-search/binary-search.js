function searchRecursive (array, n, start) {
    if (array.length <= 1) {
        return array[0] === n ? start : null;
    }
    // array length >= 2
    const mid = array.length / 2 | 0;
    if (array[mid] === n) {
        return start + mid;
    }
    const left = array.slice(0, mid);
    if (n < array[mid]) {
        return searchRecursive(left, n, 0)
    }
    const right = array.slice(mid);
    return searchRecursive(right, n, start + mid);
}

function searchIterative (array, n) {
    let start = 0;
    while (array.length > 1) {
        const mid = array.length / 2 | 0;
        if (array[mid] === n) {
            return start + mid;
        }
        if (n > array[mid]) {
            start += mid;
            array.splice(0, mid);
        } else {
            array.splice(mid, mid);
        }
    }
    return array[0] === n ? start : -1;
}

function binarySearch (array, n) {
    // return searchRecursive(array, n, 0) || -1;
    return searchIterative(array, n);
}

module.exports = binarySearch;