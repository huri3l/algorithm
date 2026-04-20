/*
 * Valid Anagram
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * 
 * Return immediately if lenghts are different (invalid anagram)
 * 
 * Create a map with the count of characters and add the characters of "s"
 * Loop through "t" and validate if the current index exist and its count is greater than 0
 * Reduce the count as we find elements
*/
export function solution(s: string, t: string): boolean {
  if (s.length !== t.length) return false
  
  const charCount = new Map<string, number>()

  for (let i = 0; i < s.length; i++) {
    charCount.set(s[i], (charCount.get(s[i]) ?? 0) + 1)
  }
  
  for (let i = 0; i < t.length; i++) {
    const count = charCount.get(t[i])

    if (!count || count === 0) return false

    charCount.set(t[i], count - 1)
  }

  return true;  
};