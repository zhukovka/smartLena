/**
 * find index of the smallest element in the sequence
 * that is greater than the pivot
 * @param {string|number[]} sequence
 * @return {number}
 */
function rightMinIndex (sequence, pivot) {
    const last = sequence.length - 1;
    let min = last;
    for (let i = last; i >= 0; i--) {
        const element = sequence[i];
        if (element > pivot) {
            min = i;
            break;
        }
    }
    return min;
}

/**
 * @param {string|number[]} sequence
 */
function suffixR (sequence) {
    const last = sequence.length - 1;
    let max = last;
    for (let i = last - 1; i >= 0; i--) {
        const char = sequence[i];
        if (char >= sequence[max]) {
            max = i;
        } else {
            break;
        }
    }
    return max;
}

/**
 * @param {(string|number[])} sequence
 * @param {number} right - right index
 * @param {number} left - left index
 * @return {string[]|number[]} - array of numbers or chars
 */
function swap (sequence, right, left) {
    const arr = [...sequence];
    const temp = arr[right];
    arr[right] = arr[left];
    arr[left] = temp;
    return arr;
}

/**
 * Next lexicographical permutation algorithm
 * 1. identify the longest suffix that is non-increasing
 * 2. element immediately to the left of the suffix is pivot
 * 3. swap the pivot with the smallest element in the suffix that is greater than the pivot
 * 4. sort the suffix in non-decreasing
 * @param {string|number[]} sequence
 */
function nextPermutation (sequence) {
    if (sequence.length === 1) {
        return sequence;
    }
    let max = suffixR(sequence);
    //i.e in [0, 1, 2, 5, 3, 3, 0] is [5, 3, 3, 0]
    const suffix = sequence.slice(max);
    // 2
    const pivot = max - 1;
    if (pivot === -1) {
        return sequence;
    }
    // in [5, 3, 3, 0] is rightIndexOf(3)
    const min = max + rightMinIndex(suffix, sequence[pivot]);
    const swapped = swap(sequence, pivot, min);
    const prefix = swapped.slice(0, max);
    const nextSuffix = swapped.slice(max).reverse();
    const empty = sequence.slice(sequence.length + 1);
    return empty.concat(...prefix, ...nextSuffix);
}

/**
 * @param {string|number[]} sequence
 */
function longestNonIncreasingSuffix (sequence) {
    if (sequence.length === 1) {
        return sequence;
    }
    let max = suffixR(sequence);
    return sequence.slice(max);
}

module.exports = {longestNonIncreasingSuffix, nextPermutation};

