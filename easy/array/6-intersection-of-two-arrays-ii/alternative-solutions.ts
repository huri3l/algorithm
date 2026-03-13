/**
 * Intersection of Two Arrays II - Brute Force Approach
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/
 *
 * Time Complexity: O(n × m) - n = nums1 | m = nums2
 * Space Complexity: O(k) - k = size of intersection result
 *
 * Create an empty array, loop over the first, loop over the second to check if it exists there
 * (that's what .includes does) and push if it finds.
 */
export function bruteForce(nums1: number[], nums2: number[]): number[] {
  const intersection: number[] = [];

  for (const num of nums1) {
    if (nums2.includes(num)) {
      intersection.push(num);
    }
  }

  return intersection;
}
