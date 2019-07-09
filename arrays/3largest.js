/*
Find Three Largest Numbers
​
Write a function that takes in an array of integers and returns a sorted array of the three largest integers in the input array.
Note that the function should return duplicate integers if necessary;
for example, it should return [10, 10, 12] for an input array of [10, 5, 9, 10, 12].
​
Sample input: [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
Sample output: [18, 141, 541]
 */

function findThreeLargestNumbers (array) {
    const threeLargest = [null, null, null];

    for (const num of array) {
        if (!threeLargest[2] || num > threeLargest[2]) {
            threeLargest.shift();
            threeLargest.push(num);
        }
        else if (!threeLargest[1] || num > threeLargest[1]) {
            threeLargest[0] = threeLargest[1];
            threeLargest[1] = num;
        }
        else if (!threeLargest[0] || num > threeLargest[0]) {
            threeLargest[0] = num;
        }
    }
    return threeLargest;
}

module.exports = findThreeLargestNumbers;