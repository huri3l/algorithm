import { solution } from "./solution"

describe('Rotate image', () => {
  describe('Personal Solution', () => {
    test('should rotate the image 90 degrees clockwise', () => {
      const input = [[1,2,3],[4,5,6],[7,8,9]]
      const output = [[7,4,1],[8,5,2],[9,6,3]]

      expect(solution(input)).toStrictEqual(output)
    })

    test('should rotate the image 90 degrees clockwise with bigger matrix', () => {
      const input = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
      const output = [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

      expect(solution(input)).toStrictEqual(output)
    })
  })
})