/**
 * Count Triplets
 * https://www.hackerrank.com/challenges/count-triplets-1/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 * It should return the number of triplets forming a geometric progression for a given r as an integer.
 * @param arr{number[]} an array of integers
 * @param r{number} an integer, the common ratio
 */
function countTriplets(arr, r) {
    let res = 0;
    const triplets = arr.reduce((acc, num, i) => {
        if (!acc[num]) {
            // acc[num] = [];
            acc[num] = 0;
        }
        const t = num / r / r;
        const k = acc[t] ? acc[num] : 0;
        res -= k;
        const j = num / r;
        const n = acc[j] || 1;
        acc[num] += n;
        // const n = acc[j] ? acc[j].length : 1;
        // acc[num] = acc[num].concat(new Array(n).fill(i));
        // const k1 = acc[t] ? acc[num].length : 0;
        const k1 = acc[t] ? acc[num] : 0;
        res += k1;
        return acc;
    }, {});
    
    return res;
}

module.exports = countTriplets;
