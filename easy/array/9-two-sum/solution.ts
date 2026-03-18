/**
 * Two Sum
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * This solution is based on creating a hashMap to store the previous subtractions of
 * target with the current position on the loop, expecting that a future iteration
 * will find an index with the subtraction done previously, being able to retrieve
 * the correct indices.
 */
export function solution(nums: number[], target: number): number[] {
  let hashMap = new Map<number, number>()
  let result: number[] = []

  for (let i = 0; i < nums.length; i++) {
    const subtraction = target - nums[i];
    const goal = target - subtraction

    if (hashMap.has(goal)) {
      result = [i, hashMap.get(goal)!]
    } else {
      hashMap.set(target - nums[i], i)
    }
  }

  return result
};