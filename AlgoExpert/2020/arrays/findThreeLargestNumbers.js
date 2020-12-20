/**
 * Write a function that takes in an array of at least three integers and,
 * without sorting the input array, returns a sorted array of the three largest
 * integers in the input array.
 *
 * The function should return duplicate integers if necessary; for example, it
 * should return [10, 10, 12]  for an input array of [10, 5, 9, 10, 12]
 * @param array{number[]}
 */
function findThreeLargestNumbers(array) {
    // Write your code here.
    const threeLargest = [];
    while (threeLargest.length < 3) {
        let max = array[0];
        let maxI = 0;
        for (let i = 0; i < array.length; i++) {
            const n = array[i];
            if (n > max) {
                max = n;
                maxI = i;
            }
        }
        array.splice(maxI, 1);
        threeLargest.unshift(max);
    }
    return threeLargest;
}

module.exports = findThreeLargestNumbers;
