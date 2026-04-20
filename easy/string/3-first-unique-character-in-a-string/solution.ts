/*
 * First Unique Character in a String
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * 
 * Create a chars Map to hold every char and it's count. Due to nature of Maps, each char will be unique
 * and sum to its actual count
 * 
 * Map the string again and validate if the current char is equal to 1 on the map, if it is, immediately return
 * Fallback to -1 as requirement
*/
export function solution(s: string): number {
  const chars = new Map<string, number>()

  for (let i = 0; i < s.length; i++) {
    chars.set(s[i], (chars.get(s[i]) ?? 0) + 1)
  } 

  for (let i = 0; i < s.length; i++) {
    if (chars.get(s[i]) === 1) {
      return i
    }
  }


  return -1
};