import { bruteForce } from "./alternative-solution"
import { solution } from "./solution"

describe('Implement strStr()', () => {
  describe('Optimal Solution', () => {
    test('should return 0 for "sad"', () => {
      const haystack = "sadbutsad"
      const needle = "sad"
      expect(solution(haystack, needle)).toBe(0)
    })

    test('should return -1 for "leeto"', () => {
      const haystack = "leetcode"
      const needle = "leeto"
      expect(solution(haystack, needle)).toBe(-1)
    })
  })
  
  describe('Brute Force (personal solution)', () => {
    test('should return 0 for "sad"', () => {
      const haystack = "sadbutsad"
      const needle = "sad"
      expect(bruteForce(haystack, needle)).toBe(0)
    })

    test('should return -1 for "leeto"', () => {
      const haystack = "leetcode"
      const needle = "leeto"
      expect(bruteForce(haystack, needle)).toBe(-1)
    })
  })
})