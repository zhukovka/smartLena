/**
 * You are assigned to put some amount of boxes onto one truck.
 * You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:
 * numberOfBoxes[i] is the number of boxes of type i.
 * numberOfUnitsPerBox[i] is the number of units in each box of the type i.
 * You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck.
 * You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.
 *
 * Return the maximum total number of units that can be put on the truck.
 *
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = function (boxTypes, truckSize) {
    boxTypes.sort((a, b) => a[1] - b[1]);
    let units = 0;
    while (truckSize > 0 || boxTypes.length) {
        let box = boxTypes.pop();
        let size = Math.min(truckSize, box[0]);
        if (truckSize >= box[0]) {
            units += box[0] * box[1];
            truckSize -= box[0];
        } else {
            units += truckSize * box[1];
            truckSize = 0;
        }
    }
    return units;
};

const assert = require('assert');

describe('1710. Maximum Units on a Truck', function () {
    let boxTypes, truckSize, actual;

    it('Example 1', function () {
        boxTypes = [[1, 3], [2, 2], [3, 1]];
        truckSize = 4;
        actual = maximumUnits(boxTypes, truckSize);
        assert.deepEqual(actual, 8);
    });

    it('Example 2', function () {
        boxTypes = [[5, 10], [2, 5], [4, 7], [3, 9]];
        truckSize = 10;
        actual = maximumUnits(boxTypes, truckSize);
        assert.deepEqual(actual, 91);
    });
});