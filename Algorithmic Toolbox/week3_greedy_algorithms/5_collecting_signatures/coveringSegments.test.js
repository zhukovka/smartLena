/**
 * You are given a set of segments on a line and your goal is
 * to mark as few points on a line as possible
 * so that each segment contains at least one marked point.
 * @param segments{number[][]}
 */
function coveringSegmentsTest(segments) {
    segments.sort((a, b) => a[0] - b[0]);
    let lines = [segments[0][1]];
    for (let i = 0; i < segments.length - 1; i++) {
        let line = lines[lines.length - 1];
        let a = segments[i];
        let b = segments[i + 1];
        if (a[0] <= line && b[0] <= line) {
            lines[lines.length - 1] = Math.min(b[1], line);
        } else {
            lines.push(b[1]);
        }
    }
    return lines.length;
}

const assert = require('assert');

describe('5 Collecting Signatures', function () {
    let segments, actual;

    it('Sample 1 ', function () {
        segments = [[1, 3], [2, 5], [3, 6]];
        actual = coveringSegmentsTest(segments);
        assert.deepEqual(actual, 1);
    });

    it('Sample 2 ', function () {
        segments = [[4, 7], [1, 3], [2, 5], [5, 6]];
        actual = coveringSegmentsTest(segments);
        assert.deepEqual(actual, 2);
    });
});