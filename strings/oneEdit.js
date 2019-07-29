function oneEdit (src, target) {
    if (Math.abs(src.length - target.length) > 1) {
        return false;
    }

    const mid = src.length / 2 | 0;
    const lastS = src.length - 1;
    const lastT = target.length - 1;

    let edits = 0;
    for (let i = 0; i <= mid; i++) {
        if (!target[i] || !target[lastT - i]) {
            edits++;
        } else {
            edits += src[i] !== target[i];
            edits += src[lastS - i] !== target[lastT - i];
        }
        if (edits > 1) {
            return false;
        }
    }
    return edits <= 1;
}

module.exports = oneEdit;