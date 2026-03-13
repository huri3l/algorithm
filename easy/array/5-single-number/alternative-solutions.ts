/**
 * Single Number - Alternative Solutions
 * Different approaches to solve the problem with trade-offs explained
 */

/**
 * Approach 1: Brute Force
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 *
 * Loop through each number and check if it appears anywhere else in the array.
 * Return the first number that appears only once.
 */
export function bruteForce(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    let isUnique = true;

    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j]) {
        isUnique = false;
        break;
      }
    }

    if (isUnique) {
      return nums[i];
    }
  }

  return -1;
}

/**
 * Approach 2: Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Use a hash map to track occurrences. When we see a number:
 * - If it exists, delete it (appeared twice)
 * - If not, add it
 * The remaining key is the unique number.
 */
export function hashMap(nums: number[]): number {
  const hash = new Map<number, number>();

  for (let num of nums) {
    if (hash.has(num)) {
      hash.delete(num);
    } else {
      hash.set(num, 1);
    }
  }

  return hash.keys().next().value ?? -1;
}
