/**
 * Two Sum
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 *
 * Loop over nums, subtract target with current, and search the array for what's
 * equal to subtraction result. Return their indices
 */
export function bruteForce(nums: number[], target: number): number[] {
  let indices: number[] = []

  for (let i = 0; i < nums.length; i++) {
    const subtracted = target - nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === subtracted) {
        indices = [i,j]
        break;
      }
    }
  }

  return indices
};