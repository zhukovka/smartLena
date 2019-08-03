/**
 * Lexicographical order is often known as alphabetical order when dealing with strings.
 * A string is greater than another string if it comes later in a lexicographically sorted list.
 *
 * Given a word, create a new word by swapping some or all of its characters.
 * This new word must meet two criteria:
 * - It must be greater than the original word
 * - It must be the smallest word that meets the first condition
 *
 * For example, given the word `abcd`, the next largest word is `abdc`.
 * @param {string} w - input word
 */
function biggerIsGreater (w) {
    const length = w.length;
    if (length <= 1) {
        return 'no answer';
    }

    let right = length;
    let left = -1;
    //if last > prev
    // swap last and prev
    while (right > 1 && left === -1) {
        right--;
        for (let i = right - 1; i >= 0; i--) {
            if (w[right] > w[i]) {
                left = i;
                break;
            }
        }
    }
    if (left === -1) {
        return 'no answer'
    }
    // swap smallerLeft and largerRight
    let chars = w.split('');
    const temp = chars[right];
    chars[right] = chars[left];
    chars[left] = temp;

    // sort all chars to the right from left
    const rightChars = chars.slice(left + 1).sort().join('');
    const leftChars = chars.slice(0, left + 1).join('');
    return leftChars + rightChars;
}

module.exports = biggerIsGreater;