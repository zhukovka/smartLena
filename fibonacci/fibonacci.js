function getNthFib (n) {
    const pair = [0, 1];
    let next = 3;
    while (next <= n) {
        const nextFib = pair[0] + pair[1];
        pair[0] = pair[1];
        pair[1] = nextFib;
        next++;
    }
    return n > 1 ? pair[1] : pair[0];
}

exports.getNthFib = getNthFib;