/**
 * Contains Duplicate - Alternative Solutions
 */

/**
 * Approach 1: Brute Force
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 *
 * For each element, check if it appears in the rest of the array.
 * Return true as soon as a duplicate is found.
 */
export function bruteForce(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
}
