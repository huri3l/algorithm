/**
 * Contains Duplicate - Hash Set Solution (Optimal)
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Use a Set to track seen numbers. Return true as soon as we find a duplicate.
 * If we finish iterating without duplicates, return false.
 */
export function solution(nums: number[]): boolean {
  const numsSet = new Set<number>();

  for (const num of nums) {
    if (numsSet.has(num)) return true;
    numsSet.add(num);
  }

  return false;
}
