/**
 * @param {number[][]} intervals
 * @return {number}
 */
const minMeetingRooms = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let rooms = 1;
    let q = [intervals[0][1]];
    for (let i = 1; i < intervals.length; i++) {
        let a = intervals[i];
        if (q[0] && q[0] > a[0]) {
            rooms++;
            q.push(a[1]);
        } else {
            q[0] = a[1];
        }
        q.sort((_a, _b) => _a - _b);
    }
    return rooms;
};
const assert = require('assert');
describe('253. Meeting Rooms II', function () {
    let actual, intervals;

    it('Example 1 ', function () {
        intervals = [[0, 30], [5, 10], [15, 20]]
        // Output: 2
        actual = minMeetingRooms(intervals);
        assert.deepEqual(actual, 2);
    });

    it('Example 2 ', function () {
        intervals = [[7, 10], [2, 4]]
        actual = minMeetingRooms(intervals);
        assert.deepEqual(actual, 1);
    });

    it('Example 3 ', function () {
        intervals = [[9, 10], [4, 9], [4, 17]]
        actual = minMeetingRooms(intervals);
        assert.deepEqual(actual, 2);
    });

    it('Example 4 ', function () {
        intervals = [[2, 11], [6, 16], [11, 16]]
        actual = minMeetingRooms(intervals);
        assert.deepEqual(actual, 2);
    });

    it('Example 5 ', function () {
        intervals = [[15, 16], [10, 15], [16, 25]]
        actual = minMeetingRooms(intervals);
        assert.deepEqual(actual, 1);
    });

    it('Example 6 ', function () {
        intervals = [[2, 15], [36, 45], [9, 29], [16, 23], [4, 9]]
        actual = minMeetingRooms(intervals);
        assert.deepEqual(actual, 2);
    });

    it('Example 7 ', function () {
        intervals = [[9, 14], [5, 6], [3, 5], [12, 19]]
        actual = minMeetingRooms(intervals);
        assert.deepEqual(actual, 2);
    });
});