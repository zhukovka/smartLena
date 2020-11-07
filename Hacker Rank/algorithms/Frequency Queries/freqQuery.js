/**
 * Frequency Queries
 * It must return an array of integers where each element is a 1
 * if there is at least one element value with the queried number of occurrences
 * in the current array, or 0 if there is not.
 * - 1 x : Insert x in your data structure.
 * - 2 y : Delete one occurrence of y from your data structure, if present.
 * - 3 z : Check if any integer is present whose frequency is exactly z. If yes, print 1 else 0.
 * @param queries{number[][]} - a 2-d array of integers
 */
function freqQuery(queries) {
    const res = [];
    const freq = {};
    const ops = queries.reduce((acc, q) => {
        const op = q[0];
        const el = q[1];
        if (!acc[el]) {
            acc[el] = 0;
        }
        if (op === 1) {
            freq[acc[el]] = (freq[acc[el]] - 1) || 0
            acc[el] += 1;
            freq[acc[el]] = (freq[acc[el]] || 0) + 1
        }
        if (op === 2 && acc[el] > 0) {
            freq[acc[el]] = (freq[acc[el]] || 0) + 1
            acc[el] -= 1;
            freq[acc[el]] = (freq[acc[el]] - 1) || 0
        }
        if (op === 3) {
            res.push(freq[el] > 0 ? 1 : 0)
        }
        return acc;
    }, {})
    return res;
}

module.exports = freqQuery;
