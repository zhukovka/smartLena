const assert = require('assert');

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    const source = image[sr][sc];
    if (source === newColor) {
        return image;
    }
    image[sr][sc] = newColor;
    let top = image[sr - 1] && image[sr - 1][sc];
    if (top === source) {
        floodFill(image, sr - 1, sc, newColor);
    }
    let bottom = image[sr + 1] && image[sr + 1][sc];
    if (bottom === source) {
        floodFill(image, sr + 1, sc, newColor);
    }
    let left = image[sr][sc - 1];
    if (left === source) {
        floodFill(image, sr, sc - 1, newColor);
    }
    let right = image[sr][sc + 1];
    if (right === source) {
        floodFill(image, sr, sc + 1, newColor);
    }
    return image;
};

describe('733. Flood Fill', function () {
    let image, sr, sc, newColor;

    it('Example 1', function () {
        image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
        sr = 1;
        sc = 1;
        newColor = 2
        assert.deepStrictEqual(floodFill(image, sr, sc, newColor), [[2, 2, 2], [2, 2, 0], [2, 0, 1]]);
    });

    it('Example 2', function () {
        image = [[0, 0, 0],
            [0, 0, 0]];
        sr = 0;
        sc = 0;
        newColor = 2;
        assert.deepStrictEqual(floodFill(image, sr, sc, newColor), [[2, 2, 2], [2, 2, 2]]);
    });

    it('Example 3', function () {
        image = [[0, 0, 0],
            [0, 1, 1]]
        sr = 1;
        sc = 1;
        newColor = 1;
        assert.deepStrictEqual(floodFill(image, sr, sc, newColor), [[0, 0, 0],
            [0, 1, 1]]);
    });

});