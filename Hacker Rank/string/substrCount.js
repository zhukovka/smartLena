const isPalindrome = require('./palindrome');

/**
 * Special String Again
 * A string is said to be a special string if either of two conditions is met:
 
 All of the characters are the same, e.g. aaa.
 All characters except the middle one are the same, e.g. aadaa.
 A special substring is any substring of a string which meets one of those criteria.
 Given a string, determine how many special substrings can be formed from it.
 For example, given the string `s=mnonopoo`, we have the following special substrings: .
 
 Function Description
 
 Complete the substrCount function in the editor below.
 It should return an integer representing the number of special substrings that can be formed from the given string.
 
 * @param n - an integer, the length of string s
 * @param s - a string
 */
function substrCount(n, s) {
    let res = s.length;
    let consec = 1;
    for (let i = 1; i < s.length; i++) {
        //asasd
        const cur = s[i];
        const prev = s[i - 1];
        if (cur === prev) {
            //if current === prev
            //a===s
            console.log(`${res} + ${consec} = ${res + consec}`)
            res += consec;
            consec += 1;
        } else {
            //go both ways
            const mid = i + 1; //2
            //aaa[b]aa
            const leftSubstr = s.substring(i - consec, i);//aaaaa |b
            const char = leftSubstr[0];
            const rightSubstr = s.substring(mid, mid + consec);//b| aab
            const lastRight = rightSubstr.lastIndexOf(char);//1
            if (lastRight > -1) {
                const end = lastRight + 1;
                const right = s.substring(mid, mid + end);
                const left = s.substring(i - end, i);
                if (right === left) {
                    res += right.length
                }
            }
            consec = 1;
        }
        
    }
    return res;
}

module.exports = substrCount;
