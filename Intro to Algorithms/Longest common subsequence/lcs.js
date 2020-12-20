/**
 * Longest common subsequence
 * s1 = ACCGGTCGAGTGCGCGGAAGCCGGCCGAA
 * s2 = GTCGTTCGGAATGCCGTTGCTCTGTAAA
 *
 * @param s1 {string}
 * @param s2 {string}
 */
function lcs(s1, s2) {
    const rows = s1.length + 1;
    const cols = s2.length + 1;
    const b = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
    const c = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
    console.log('  y ', s2.split('').join('  '));
    console.log('x', b[0].join('  '));
    for (let i = 1; i < rows; i++) {
        const row = b[i];
        const char1 = s1[i - 1];
        for (let j = 1; j < cols; j++) {
            const char2 = s2[j - 1];
            const upperLeft = c[i - 1][j - 1];
            const up = c[i - 1][j];
            const left = c[i][j - 1];
            if (char1 === char2) {
                c[i][j] = upperLeft + 1;
                b[i][j] = '↖︎' + c[i][j];
            } else if (up >= left) {
                c[i][j] = up;
                b[i][j] = '↑' + c[i][j];
            } else {
                c[i][j] = left;
                b[i][j] = '←' + c[i][j];
            }
        }
        console.log(char1, row.join(' '));
    }
    // console.log(c)
}

module.exports = lcs;
