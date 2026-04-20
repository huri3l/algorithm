/*
 * Reverse Integer
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/
 * 
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * 
 * Define MIN and MAX for 32-bit integer.
 * To navigate through an integer without transforming in an array, use modulo, division or multiplication by 10
 * % 10 = the last digit (the remainder that will not succesfully divide
 * / 10 = the rest of the integer that successfully divides by 10
 * This way there's the current digit and the rest of the number
 * 
 * The conditionals validate if res is bigger than MAX or if the digit is bigger than MAX last digit
 * the same validation happens for MIN.
 * This ensures to return 0 if the number is out of bounds
 * 
 * Besides that, simply add to another variable "res" the digit incremented, by the same technique to apply by 10
*/
export function solution(x: number): number {
  const MIN = -2147483648   // -2^31
  const MAX = 2147483647    // 2^31 - 1

  let res = 0

  while (x) {
    const digit = x % 10
    x = Math.trunc(x / 10)

    if (res > MAX / 10 || (res === MAX / 10 && digit >= MAX % 10)) {
      return 0
    }

    if (res < MIN / 10 || (res === MIN / 10 && digit <= MIN % 10)) {
      return 0
    }

    res = (res * 10) + digit
  }

  return res
};