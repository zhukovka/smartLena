/**
 * Highest Value Palindrome
 * https://www.hackerrank.com/challenges/richie-rich/problem
 * It should return a string representing the largest value palindrome achievable, or -1
 * @param s{string} :a string representation of an integer
 * @param n{number} : an integer that represents the length of the integer string
 * @param k{number} : an integer that represents the maximum number of changes allowed
 */
function highestValuePalindrome(s, n, k) {
    n = n || s.length;
    const sNum = s.split('').map(Number);
    const mid = n / 2 | 0;
    let changes = 0;
    let max = Math.max(...sNum);
    for (let i = 0; i <= mid; i++) {
        const l = i;
        const r = n - 1 - i;
        if (sNum[l] !== sNum[r]) {
            sNum[l] < max && k--;
            sNum[r] < max && k--;
            sNum[l] = max;
            sNum[r] = max;
            changes++;
        }
        if (k < 0) {
            return -1;
        }
    }
    let i = 0;
    max = 9;
    while (k >= 2 && i <= mid) {
        const l = i;
        const r = n - 1 - i;
        if (sNum[l] < max) {
            sNum[l] = max;
            sNum[r] = max;
            k -= 2;
        }
        i++
    }
    
    return changes > 0 ? sNum.join('') : -1;
}

module.exports = highestValuePalindrome;
