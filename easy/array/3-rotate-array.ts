/**
 * Rotate Array
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
 */

/**
 * Personal Solution
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * Create a reverse function with left and right params, that will shift "nums" from left to right
 * The goal is to:
 * - Reverse the entire array
 * - Reverse the first portion of the array (0 to k - 1) which are now the last numbers
 * - Reverse the rest of the array (k to length) which are the first
 */
function rotate(nums: number[], k: number): void {
  k %= nums.length

  const reverse = (l: number, r: number) => {
    while (l < r) {
      const backup = nums[l]
      nums[l] = nums[r]
      nums[r] = backup

      l++
      r--
    }
  }

  reverse(0, nums.length - 1)
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
};

rotate([1,2,3,4,5,6,7], 3)