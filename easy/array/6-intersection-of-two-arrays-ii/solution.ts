/**
 * Intersection of Two Arrays II
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/
 *
 * Time Complexity: O(n + m) - n = nums1 | m = nums2
 * Space Complexity: O(n) - for the Set of nums1
 *
 * Create a set with the first array and a result empty array.
 * Loop over the second array and scan the set (O(1)) if the num is there already.
 * If it is, push to the result (this means is part of the intersection) and delete from set
 * (to prevent duplicates).
 */
export function solution(nums1: number[], nums2: number[]): number[] {
  const freq = new Map<number, number>();
  const res: number[] = [];

  // Count frequencies in nums1
  for (const num of nums1) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  // Check against nums2
  for (const num of nums2) {
    if (freq.has(num) && freq.get(num)! > 0) {
      res.push(num);
      freq.set(num, freq.get(num)! - 1);  // Decrement count
    }
  }

  return res;
}