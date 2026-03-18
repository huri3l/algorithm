import { bruteForce } from "./alternative-solutions";
import { solution } from "./solution";

describe('Two Sum', () => {
  const expectAnyOrder = (result: number[], expected: number[]) => {
    expect(result.sort((a, b) => a - b)).toEqual(expected.sort((a, b) => a - b))
  }

  describe('Optimal Solution', () => {
    test('should have the correct indexes', () => {
      expectAnyOrder(solution([2,7,11,15], 9), [0,1])
      expectAnyOrder(solution([3,2,4], 6), [1,2])
      expectAnyOrder(solution([3,3], 6), [0,1])
    });
  })

  describe('Brute Force', () => {
    test('should return the correct indexes', () => {
      expectAnyOrder(bruteForce([2,7,11,15], 9), [0,1])
      expectAnyOrder(bruteForce([3,2,4], 6), [1,2])
      expectAnyOrder(bruteForce([3,3], 6), [0,1])
    });
  })
});
