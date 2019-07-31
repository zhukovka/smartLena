/*
Caesar Cipher Encryptor
​
Given a non-empty string of lowercase letters and a non-negative integer value representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key. Note that letters should "wrap" around the alphabet; in other words, the letter "z" shifted by 1 returns the letter "a".
​
Sample input: "xyz", 2
Sample output: "zab"
 */

function caesarCipherEncryptor (string, key) {
    // Write your code here.
    const last = 'z'.charCodeAt(0) + 1;
    const first = 'a'.charCodeAt(0);
    let res = '';
    for (const char of string) {
        const charCode = char.charCodeAt(0) - first;
        const n = (charCode + key) % (last - first);
        res += String.fromCharCode(first + n);
    }
    return res;
}

module.exports = caesarCipherEncryptor;