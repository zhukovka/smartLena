/**
 * Two Strings
 * https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 * Given two strings, determine if they share a common substring. A substring may be as small as one character.
 * For example, the words "a", "and", "art" share the common substring a.
 * The words "be" and "cat" do not share a substring.
 * @param s1{string}
 * @param s2{string}
 */
function twoStrings(s1, s2) {
//wouldyoulikefries
// abcabcabcabcabcabc
    const set1 = new Set(s1);
    const set2 = new Set(s2);
    const res = [...set1].some(x => set2.has(x));
    return res ? 'YES' : 'NO'
}

module.exports = twoStrings;
