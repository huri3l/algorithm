/*
* String to integer (atoi)
* https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/884/
* 
* Time Complexity: O(n)
* Space Complexity: O(1)
* 
* Define MIN and MAX for int size.
* Define the index, the sign and start num.
* Clean up white spaces with the while at first.
* Obtain the sign based on "-" or "+" at the beginning of the string. Default is positive
* 
* Loop through the string while the current is a digit
*   validate if it's out of bounds for int, then return MAX or MIN if out of bounds and
*   simply sum the integer.
* 
* Finally, multiplicate by the sign.
*/
export function solution(s: string): number {
  const MIN = -2147483648;  // -2^31
  const MAX = 2147483647;   // 2^31 - 1

  let i = 0;
  let sign = 1;
  let num = 0

  while (i < s.length && s[i] === ' ') {
    i++;
  }

  if (i < s.length && (s[i] === '+' || s[i] === '-')) {
    sign = s[i] === '-' ? -1 : 1
    i++;
  }

  while (i < s.length && /[0-9]/.test(s[i])) {
    const digit = Number(s[i])

    if (num > MAX / 10 || (num === MAX / 10 && digit > 7)) {
      return sign === 1 ? MAX : MIN;
    }

    num = num * 10 + digit
    i++
  }

  return sign * num
};