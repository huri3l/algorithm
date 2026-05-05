import { solution } from "./solution"

describe('Longest Common Prefix', () => {
  describe('Personal Solution', () => {
    test('should return the longest common prefix', () => {
      const input = ["flower","flow","flight"]
      const output = "fl"

      expect(solution(input)).toEqual(output)
    })

    test('should return nothing when there are no common prefix', () => {
      const input = ["dog","racecar","car"]
      const output = ""

      expect(solution(input)).toEqual(output)
    })
  })
})