/**
 * Move Zeroes
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * The main trick here is not to move the zeroes to the right, but to move every
 * non zero to the left.
 * 
 * Create a pointer "left" = 0 and a pointer "right" (which is actually the index of the loop).
 * Loop over the array and everytime the index is a non zero, swap the number from "left" pointer
 * with the current, and increase the pointer.
 * 
 * That way, we'll always swap the numbers until all we have is zeroes at the end.
 */
export function solution(nums: number[]): void {
  let l = 0

  for (let r = 0; r < nums.length; r++) {
    if (nums[r] !== 0) {
      const backup = nums[l]
      nums[l] = nums[r]
      nums[r] = backup
      l++
    }
  }
};