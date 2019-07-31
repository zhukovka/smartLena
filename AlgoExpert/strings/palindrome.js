/*Palindrome Check
​
Write a function that takes in a non-empty string and that returns a boolean representing whether or not the string is a palindrome. A palindrome is defined as a string that is written the same forward and backward.
​
Sample input: "abcdcba"
Sample output: True (it is a palindrome)
*/
function isPalindrome(str) {
    const mid = str.length / 2 | 0;
    const last = str.length - 1;
    for (let i = 0; i < mid; i++) {
        if (str[i] !== str[last - i]) {
            return false;
        }
    }
    return true;
}

function checkCenter(string, center, left, right) {
    while (string[left] && string[right] && string[left] === string[right]) {
        center = `${string[left]}${center}${string[right]}`;
        left -= 1;
        right += 1;
    }
    return center;
}

/*
Longest Palindromic Substring
​
Write a function that, given a string, returns its longest palindromic substring.
A palindrome is defined as a string that is written the same forward and backward.
Assume that there will only be one longest palindromic substring.
​
Sample input: "abaxyzzyxf"
Sample output: "xyzzyx"
 */
function longestPalindromicSubstring(string) {
    let longest = '';
    for (let i = 0; i < string.length; i++) {
        let oddPalindrome = '';
        let evenPalindrome = '';
        let center = string[i];
        let left = i - 1;
        let right = i + 1;
    
        if (center === string[right]) {
            evenPalindrome = checkCenter(string, `${center}${string[right]}`, left, right + 1);
        }
        oddPalindrome = checkCenter(string, center, left, right);
    
        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }
        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }
    return longest;
}

exports.longestPalindromicSubstring = longestPalindromicSubstring;
exports.isPalindrome = isPalindrome;
