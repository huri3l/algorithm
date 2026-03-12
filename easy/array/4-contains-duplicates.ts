/**
 * Contains Duplicate
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/
 */

/**
 * Personal Solution
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 *
 * Loop over nums, then get the current, loop again on the remaining to see if there's any duplicates.
 */
function containsDuplicate(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }

  return false;
};

console.log(containsDuplicate2([1,2,3,1]))

/**
 * Personal Solution 2 (after video explanation about Hashset)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * More optimal because hashes are O(1) space and time complexity. 
 * By saving which numbers are unique on a variable like this,
 * it's only necessary to check if it's on the already on the set or not.
 * Return true if yes, or add it to the hash if unique.
 */
function containsDuplicate2(nums: number[]): boolean {
  const numsHash = new Set<number>()

  for (const num of nums) {
    if (numsHash.has(num)) return true;

    numsHash.add(num)
  }

  return false;
};