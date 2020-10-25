/**
 * https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
 Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just  character at  index in the string, and the remaining characters will occur the same number of times. Given a string , determine if it is valid. If so, return YES, otherwise return NO.
 
 For example, if , it is a valid string because frequencies are . So is  because we can remove one  and have  of each character in the remaining string. If  however, the string is not valid as we can only remove  occurrence of . That would leave character frequencies of .
 
 Function Description
 
 Complete the isValid function in the editor below. It should return either the string YES or the string NO.
 
 isValid has the following parameter(s):
 
 s: a string
 Input Format
 
 A single string .
 **/

function isValid(s) {
    //chars count map {'a': 2, 'b': 2, 'c': 2, 'd': 2, 'e': 2, 'f': 1, 'g': 1, 'h': 1, 'i': 1}
    // 2 * 5; 1 * 4 (for valid - 1 * 9 or 2 * 2; 1 * 8)
    const chars = [...s].reduce((acc, char) => {
        acc[char] = acc[char] || 0;
        acc[char] += 1;
        return acc;
    }, {})
    // {2:5, 1:4}
    const occurrences = [...Object.values(chars)].reduce((acc, num) => {
        acc[num] = acc[num] || 0;
        acc[num] += 1;
        return acc;
    }, {})
    //{[count]:[times]}
    //{1:2, 2:2}
    const counts = [...Object.keys(occurrences)];
    //all same like {1:9} | {2:7}
    if (counts.length === 1) {
        return 'YES'
    }
    //would be valid if
    //{[count]:[times]}
    //{2:7, 3:1}
    //{2:1, 3:1}
    //{1:1, 2:2} aabbc
    //invalid
    //{3:7, 2:1}
    //{2:7, 4:1}
    
    if (counts.length === 2) {
        const greater = occurrences[counts[1]];
        const oneGreater = counts[1] - counts[0];
        return greater === 1 && oneGreater === 1 || occurrences['1'] === 1 ? 'YES' : 'NO';
    }
    
    return 'NO'
}

module.exports = isValid;
