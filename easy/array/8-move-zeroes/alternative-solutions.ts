/**
 * Move Zeroes
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Create an array for the non zero numbers and a zero counter. Loop over nums
 * and push to the non zero every non zero number, while incremeting zero counter
 * if finding 0es. Then create an array of length from the zero counter filled with 0
 * and append it to the end of a brand new array, that will start with the nonZero.
 */
export function cloneArray(nums: number[]): number[] {
  let nonZero: number[] = [];
  let zeroCounter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCounter++;
    } else {
      nonZero.push(nums[i]);
    }
  }

  return [...nonZero, ...new Array(zeroCounter).fill(0)];
};