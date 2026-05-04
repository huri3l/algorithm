/*
 * Implement strStr()
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/885/
 * 
 * Time Complexity: O(n+m)
 * Space Complexity: O(m)
 * 
*/
export function solution(haystack: string, needle: string): number {
  const lps = buildLps(needle)

  let i = 0
  let j = 0

  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      i++
      j++

      if (j === needle.length) {
        return i - j
      }
    } else if (j > 0) {
      j = lps[j - 1]
    } else {
      i++
    }
  }

  return -1
}

function buildLps(needle: string): number[] {
  const lps = new Array(needle.length).fill(0)
  let length = 0
  let i = 1

  while (i < needle.length) {
    if (needle[i] === needle[length]) {
      length++
      lps[i] = length
      i++
    } else if (length > 0) {
      length = lps[length - 1]
    } else {
      i++
    }
  }

  return lps
}