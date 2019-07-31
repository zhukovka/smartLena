/*
INSERTION- SORT, which takes as a parameter an array A[0...n] containing a sequence of length n that is to be sorted.
(In the code, the number n of elements in A is denoted by A.length.)
The algorithm sorts the input numbers in place: it rearranges the numbers within the array A, with at most a constant number of them stored outside the array at any time.
The input array A contains the sorted output sequence when the INSERTION-SORT procedure is finished
 */
function insertionSort (A) {
    for (let i = 1; i < A.length; i++) {
        let key = A[i];
        // Insert A[i] into the sorted sequence A[0...i-1].
        let j = i - 1;
        while (j >= 0 && A[j] > key) {
            A[j + 1] = A[j];
            j--;
        }
        A[j + 1] = key;
    }
    return A;
}

module.exports = insertionSort;