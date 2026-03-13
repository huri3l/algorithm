/**
 * Remove Duplicates from Sorted Array
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * We use a variable `k` to record the current length of the processed array.
 * For each element, if it's different from the previous one, add it to position k.
 * Return k as the length of the unique elements.
 */
export function solution(nums: number[]): number {
  let k: number = 0;
  for (const x of nums) {
    if (k === 0 || x !== nums[k - 1]) {
      nums[k++] = x;
    }
  }
  return k;
}
