function intersection(r1, r2) {
    const [a1, b1] = r1;
    const [a2, b2] = r2;
    const low = Math.max(a1, a2);
    const high = Math.min(b1, b2);
    if (low <= high) {
        return [low, high];
    }
    
    return [];
}

exports.intersection = intersection;
