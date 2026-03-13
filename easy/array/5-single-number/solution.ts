/**
 * Single Number - XOR Solution (Optimal)
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * XOR Properties:
 * - a ^ a = 0 (same numbers cancel out)
 * - a ^ 0 = a (any number XOR'd with 0 is itself)
 * - XOR is commutative and associative
 */
export function solution(nums: number[]): number {
  let result = 0;

  for (let num of nums) {
    result ^= num;
  }

  return result;
}
