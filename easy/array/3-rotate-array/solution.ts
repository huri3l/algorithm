/**
 * Rotate Array
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * Three-step reverse approach:
 * 1. Reverse the entire array
 * 2. Reverse the first k elements (now at the end)
 * 3. Reverse the remaining elements
 */
export function solution(nums: number[], k: number): void {
  k %= nums.length;

  const reverse = (l: number, r: number) => {
    while (l < r) {
      const temp = nums[l];
      nums[l] = nums[r];
      nums[r] = temp;
      l++;
      r--;
    }
  };

  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
}
