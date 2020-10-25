/**
 * A string is said to be a special string if either of two conditions is met:
 
 All of the characters are the same, e.g. aaa.
 All characters except the middle one are the same, e.g. aadaa.
 * @param s
 * @return {boolean}
 */
function specPalindrome(s) {
    if (s.length === 1) {
        return true;
    }
    if (s.length % 2 !== 0) {
        //remove middle
        const mid = (s.length / 2);
        s = s.substring(0, mid) + s.substring(mid + 1);
    }
    
    return new Set(s.split('')).size === 1;
}

module.exports = specPalindrome;
