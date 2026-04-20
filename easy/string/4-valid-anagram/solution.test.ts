import { solution } from "./solution"

describe('Valid Anagram', () => {
  describe('Personal Solution', () => {
    test('should return true for valid anagram', () => {
      expect(solution("anagram", "nagaram")).toBe(true)
    })

    test('should return false for invalid anagram', () => {
      expect(solution("rat", "car")).toBe(false)
    })
  })
})