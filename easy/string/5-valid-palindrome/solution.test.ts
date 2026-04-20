import { personalSolution } from "./alternative-solution"
import { solution } from "./solution"

describe('Valid Palindrome', () => {
  describe('Optimal Solution (Two-pointer)', () => {
    test('should return true for valid palindrome', () => {
      const input = "A man, a plan, a canal: Panama"

      expect(solution(input)).toBe(true)
    })

    test('should return true for valid palindrome (empty string)', () => {
      const input = " "

      expect(solution(input)).toBe(true)
    })

    test('should return false for invalid palindrome', () => {
      const input = "race a car"

      expect(solution(input)).toBe(false)
    })
  })

  describe('Personal Solution', () => {
    test('should return true for valid palindrome', () => {
      const input = "A man, a plan, a canal: Panama"

      expect(personalSolution(input)).toBe(true)
    })

    test('should return true for valid palindrome (empty string)', () => {
      const input = " "

      expect(personalSolution(input)).toBe(true)
    })

    test('should return false for invalid palindrome', () => {
      const input = "race a car"

      expect(personalSolution(input)).toBe(false)
    })
  })
})