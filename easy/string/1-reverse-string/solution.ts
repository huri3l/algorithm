/* 
 * Reverse String
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * 
 * Run half of the s array length and switch the current element with its equivalent on the other edge of the array
*/
export function solution(s: string[]): void {
  for (let i = 0; i < s.length / 2; i++) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]]
  }
};