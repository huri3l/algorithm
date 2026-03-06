/**
 * Solution 1: Single Pass
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * We use a variable `k` to record the current length of the processed array.
 * Initially, `k = 0` represents an empty array.
 *
 * Then we traverse the array from left to right. For each element `x` we encounter:
 * - If `k === 0` or `x !== nums[k - 1]`, we place `x` in the position of `nums[k]`,
 *   and then increment `k` by 1.
 * - Otherwise, `x` is the same as `nums[k - 1]`, so we skip this element.
 *
 * Continue to traverse until the entire array is traversed.
 *
 * In this way, when the traversal ends, the first `k` elements in `nums` are the
 * answer we are looking for, and `k` is the length of the answer.
 */
function removeDuplicates(nums: number[]): number {
  let k: number = 0;
  for (const x of nums) {
    if (k === 0 || x !== nums[k - 1]) {
      nums[k++] = x;
    }
  }
  return k;
}
