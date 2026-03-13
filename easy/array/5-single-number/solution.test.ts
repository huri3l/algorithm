import { solution } from './solution';
import { bruteForce, hashMap } from './alternative-solutions';

describe('Single Number', () => {
  describe('Optimal Solution (XOR)', () => {
    test('should find single number in array of duplicates', () => {
      expect(solution([2, 2, 1])).toBe(1);
      expect(solution([4, 1, 2, 1, 2])).toBe(4);
    });

    test('should handle single element array', () => {
      expect(solution([1])).toBe(1);
    });

    test('should handle large numbers', () => {
      expect(solution([1000, 1000, 999])).toBe(999);
    });

    test('should handle negative numbers', () => {
      expect(solution([-1, -1, 5])).toBe(5);
      expect(solution([5, -5, 5])).toBe(-5);
    });

    test('should handle mixed positive and negative', () => {
      expect(solution([1, -1, 1, -1, 2])).toBe(2);
    });
  });

  describe('Alternative Solutions', () => {
    test('bruteForce approach should work correctly', () => {
      expect(bruteForce([2, 2, 1])).toBe(1);
      expect(bruteForce([4, 1, 2, 1, 2])).toBe(4);
    });

    test('hashMap approach should work correctly', () => {
      expect(hashMap([2, 2, 1])).toBe(1);
      expect(hashMap([4, 1, 2, 1, 2])).toBe(4);
    });

    test('all approaches should give same result', () => {
      const testCases = [
        [2, 2, 1],
        [4, 1, 2, 1, 2],
        [1],
        [10, 10, 5],
        [-1, -1, 5],
      ];

      testCases.forEach((nums) => {
        const optimal = solution(nums);
        const brute = bruteForce(nums);
        const hash = hashMap(nums);

        expect(optimal).toBe(brute);
        expect(optimal).toBe(hash);
      });
    });
  });
});
