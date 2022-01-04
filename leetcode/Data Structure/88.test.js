/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
 * representing the number of elements in nums1 and nums2 respectively.
 *
 * Merge `nums1` and `nums2` into a single array sorted in non-decreasing order.
 *
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
 *
 * To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
 * and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 *
 * *Follow up*: Can you come up with an algorithm that runs in O(m + n) time?
 *
 * @param {number[]} nums1 (nums1 has a length of m + n)
 * @param {number} m - number of elements in nums1
 * @param {number[]} nums2 (nums2 has a length of n)
 * @param {number} n - number of elements in nums2
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    for (let i = 0; i < nums1.length; i++) {
        if(!n){
            return;
        }
        let n1 = nums1[m - 1];
        let n2 = nums2[n - 1];
        if (n1 > n2) {
            nums1[nums1.length - 1 - i] = n1;
            m--;
        } else {
            nums1[nums1.length - 1 - i] = n2;
            n--;
        }
    }
}

const assert = require('assert');

describe('88. Merge Sorted Array', function () {
    it('Example 1', function () {
        let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;
        //Output: [1,2,2,3,5,6]
        const actual = merge(nums1, m, nums2, n);
        assert.deepStrictEqual(nums1, [1, 2, 2, 3, 5, 6]);
    });
    it('Example 2', function () {
        let nums1 = [1], m = 1, nums2 = [], n = 0
        const actual = merge(nums1, m, nums2, n);
        assert.deepStrictEqual(nums1, [1]);
    });
    it('Example 3', function () {
        let nums1 = [0], m = 0, nums2 = [1], n = 1;
        //Output: [1,2,2,3,5,6]
        const actual = merge(nums1, m, nums2, n);
        assert.deepStrictEqual(nums1, [1]);
    });

});