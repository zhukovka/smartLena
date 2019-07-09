/*Palindrome Check
​
Write a function that takes in a non-empty string and that returns a boolean representing whether or not the string is a palindrome. A palindrome is defined as a string that is written the same forward and backward.
​
Sample input: "abcdcba"
Sample output: True (it is a palindrome)
*/
function isPalindrome (str) {
    const mid = str.length / 2 | 0;
    const last = str.length - 1;
    for (let i = 0; i < mid; i++) {
        if (str[i] !== str[last - i]) {
            return false;
        }
    }
    return true;
}

exports.isPalindrome = isPalindrome;