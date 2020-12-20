function binomialCoefficients() {
    const n = 6;
    const table = new Array(n).fill(0).map(() => {
        return new Array(n).fill(0)
    });
    for (let i = 0; i < table.length; i++) {
        const cols = table[i];
        for (let j = 0; j < cols.length; j++) {
            if (i === j || j === 0) {
                table[i][j] = 1;
            }
            if (j > 0 && j < i) {
                table[i][j] = table[i - 1][j - 1] + table[i - 1][j]
            }
        }
    }
    console.log(table)
}

module.exports = binomialCoefficients;
