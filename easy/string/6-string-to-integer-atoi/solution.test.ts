import { solution } from "./solution"

describe('String to Integer (atoi)', () => {
  describe('Personal Solution', () => {
    test('should return the valid integer for positive numbers', () => {
      expect(solution("42")).toBe(42)
    })

    test('should return the valid integer for negative numbers', () => {
      expect(solution("-54")).toBe(-54)
    })
    
    test('should return the valid integer for positive numbers with +', () => {
      expect(solution("+42")).toBe(42)
    })

    test('should ignore whitespaces and leading zero and return the valid integer', () => {
      expect(solution("   -042")).toBe(-42)
    })

    test('should truncate at the first non digit character', () => {
      expect(solution("1337c0d3")).toBe(1337)
      expect(solution("0-1")).toBe(0)
    })

    test('should return false if first character is non digit and not "-" or "+"', () => {
      expect(solution("words and 987")).toBe(0)
    })
  })
})