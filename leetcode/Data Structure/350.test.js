/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
    const _nums = nums1.reduce((acc, num)=>{
        if(!acc[num]){
            acc[num] = 0;
        }
        acc[num]++;
        return acc;
    }, {});
    const res = [];
    for (const number of nums2) {
        if(_nums[number]){
            res.push(number);
            _nums[number]--;
        }
    }
    return res;
};

const assert = require('assert');

describe('350. Intersection of Two Arrays II', function () {
    it('Example 1', function () {
        let nums1 = [1, 2, 2, 1], nums2 = [2, 2];
        const actual = intersect(nums1, nums2)
        assert.deepStrictEqual(actual, [2, 2])
    });
    it('Example 2', function () {
        let nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4];
        const actual = intersect(nums1, nums2)
        assert.deepStrictEqual(actual, [4, 9])
    });

});