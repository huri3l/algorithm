/**
 * Plus One
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * Reverse the digits array, create a carry === 1 (will always sum just 1) and 
 * an index === 0. While carry is 1, continue to increment the index. During 
 * each loop, validate if index is still smaller than the length. This means
 * we are manipulating the numbers that already exist on the array. If current is 9,
 * transform it to 0 (the last digit of the sum). If not, just increment it and reset 
 * the carry (this means we are finished with the sum).
 * 
 * If we are out of boundaries (index is greater than digits and we are still looping)
 * this means we still have a carry but it's a sum to the first digit of the array,
 * meaning we need to add a number to reset the carry:
 * 999 + 1 === 1000, where the 1 needs to be added because it's an extra input.
 * 
 */
export function solution(digits: number[]): number[] {
  digits = digits.reverse();
  let carry = 1;
  let index = 0;

  while (carry === 1) {
    if (index < digits.length) {
      if (digits[index] === 9) {
        digits[index] = 0;
      } else {
        digits[index]++;
        carry = 0;
      }
    } else {
      digits.push(1);
      carry = 0;
    }

    index++;
  }

  return digits.reverse();
};