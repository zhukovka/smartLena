function createSquareMatrix(n) {
    const M = [...new Array(n)].map(e => (new Array(n)).fill(0));
    return M;
}

function multiplySquareMatrices (A, B) {
    const n = A.length;
    const C = createSquareMatrix(n);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                C[i][j] += A[i][k] * B[k][j]
            }
        }
    }
    return C;
}

exports.multiplySquareMatrices = multiplySquareMatrices;