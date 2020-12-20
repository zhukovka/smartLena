/**
 * https://www.algoexpert.io/questions/Validate%20Subsequence
 * @param array{number[]}
 * @param sequence{number[]}
 */
function isValidSubsequence(array, sequence) {
    // Write your code here.
    //go over array
    for (let i = 0; i < array.length; i++) {
        //if an element is equal to the first seq el
        if (array[i] === sequence[0]) {
            //- remove the el from seq
            sequence.shift();
        }
        //if seq is empty - it is valid
    }
    return !sequence.length;
}

module.exports = isValidSubsequence;
