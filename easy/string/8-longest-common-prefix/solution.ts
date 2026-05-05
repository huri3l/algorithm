/*
 * Longest Common Prefix
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/
 *
 * Time Complexity: O(n*m)
 * Space Complexity: O(m)
 * 
 * Find the smallest string index through a reduce
 * Afterwards, loop over the smallest string and verify if every other string
 * matches the current character.
 * If not, break and return the prefix we found.
 * 
*/
export function solution(strs: string[]): string {
  if (!strs.length) return ""

  let prefix = ""

  const smallestIdx = strs.reduce((best, cur, i) => cur.length < strs[best].length ? i : best, 0)

  outer: for (let i = 0; i < strs[smallestIdx].length; i++) {
    let matchPrefix = "";

    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] === strs[smallestIdx][i]) {
        matchPrefix = strs[j][i];
      } else {
        break outer;
      }
    }

    if (matchPrefix) prefix += matchPrefix
  }

  return prefix
};