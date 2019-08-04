const {nextPermutation} = require('./nextPermutation');

/**
 * Lexicographical order is often known as alphabetical order when dealing with strings.
 * A string is greater than another string if it comes later in a lexicographically sorted list.
 *
 * Given a word, create a new word by swapping some or all of its characters.
 * This new word must meet two criteria:
 * - It must be greater than the original word
 * - It must be the smallest word that meets the first condition
 *  Next lexicographical permutation algorithm (https://www.nayuki.io/page/next-lexicographical-permutation-algorithm)
 * For example, given the word `abcd`, the next largest word is `abdc`.
 * @param {string} w - input word
 */
function biggerIsGreater (w) {
    const answer = nextPermutation(w);
    if (answer === w) {
        return 'no answer'
    }
    return answer;
}

module.exports = biggerIsGreater;