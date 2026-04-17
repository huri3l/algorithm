import { solution } from "./solution"

describe('Reverse String', () => {
  describe('Personal Solution', () => {
    test('should reverse string in place', () => {
      const s1 = ["h","e","l","l","o"]
      const s2 = ["H","a","n","n","a","h"]
      
      solution(s1)
      solution(s2)
      
      expect(s1).toEqual(["o", "l", "l", "e", "h"])
      expect(s2).toEqual(["h","a","n","n","a","H"])
    })
  })
})