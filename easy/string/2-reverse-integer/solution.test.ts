import { solution } from "./solution"

describe('Reverse Integer', () => {
  describe('Personal Solution', () => {
    test('should return reversed integers', () => {
      expect(solution(123)).toEqual(321)
      expect(solution(-123)).toEqual(-321)
      expect(solution(120)).toEqual(21)
    })
  })
})