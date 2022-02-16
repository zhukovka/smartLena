/**
 * 11. Container With Most Water
 * You are given an integer array height of length n.
 * There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {

};
const assert = require('assert');

describe('11. Container With Most Water', function () {
    let height, actual;

    it('Example 1: ', function () {
        height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
        actual = maxArea(height)
        assert.deepEqual(actual, 49);
    });

    it('Example 2: ', function () {
        height = [1, 1]
        actual = maxArea(height)
        assert.deepEqual(actual, 1);
    });
});