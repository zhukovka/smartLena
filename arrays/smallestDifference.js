/*
Smallest Difference
​
Write a function that takes in two non-empty arrays of integers.
The function should find the pair of numbers (one from the first array, one from the second array) whose absolute difference is closest to zero.
The function should return an array containing these two numbers, with the number from the first array in the first position.
Assume that there will only be one pair of numbers with the smallest difference.
​
Sample input: [-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]
Sample output: [28, 26]
 */
function smallestDifference (arrayOne, arrayTwo) {
    const comparator = (a, b) => a - b;
    arrayOne.sort(comparator);
    arrayTwo.sort(comparator);
    let pair = [arrayOne[0], arrayTwo[0]];
    let minDiff = Math.abs(arrayOne[0] - arrayTwo[0]);
    for (let i = 0; i < arrayOne.length; i++) {
        if (!arrayTwo.length) {
            break;
        }
        let j = 0;
        while (j < arrayTwo.length) {
            let nextDiff = Math.abs(arrayOne[i] - arrayTwo[j]);

            if (nextDiff < minDiff) {
                pair[0] = arrayOne[i];
                pair[1] = arrayTwo[j];
                minDiff = nextDiff;
            } else {
                if (arrayOne[i] > arrayTwo[j]) {
                    arrayTwo.shift();
                    continue;
                } else {
                    break;
                }
            }
            j++;
        }
    }
    return pair;
}

// Do not edit the line below.
module.exports = smallestDifference;