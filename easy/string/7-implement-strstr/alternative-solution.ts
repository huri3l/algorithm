/*
 * Implement strStr()
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/885/
 * 
 * Time Complexity: O(n*m)
 * Space Complexity: O(1)
 * 
 * Loop over haystack and try to find an index that matches the first index of needle.
 * When found, start an inner loop on needle's length to validate if the following chars are
 * equal. If we find a different one, set start of needle as -1 (not found yet). If we 
 * finish the inner loop return the start of needle (to prevent looping and finding another)
 * matching substring.
*/
export function bruteForce(haystack: string, needle: string): number {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let foundNeedle = true

    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        foundNeedle = false
        break
      }
    }

    if (foundNeedle) {
      return i
    }
  }

  return -1;
}
