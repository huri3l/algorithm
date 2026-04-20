import { solution } from "./solution"

describe('First Unique Character in a String', () => {
  describe('Personal Solution', () => {
    test('should return 0 as the first unique character', () => {
      const input = 'leetcode'

      expect(solution(input)).toBe(0)
    })

    test('should return 2 as the first unique character', () => {
      const input = 'loveleetcode'

      expect(solution(input)).toBe(2)
    })

    test('should return -1 when there are no unique characters', () => {
      const input = 'aabb'

      expect(solution(input)).toBe(-1)
    })
  })
})