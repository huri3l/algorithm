import { solution } from './solution';
import { bruteForce } from './alternative-solutions';

describe('Contains Duplicate', () => {
  describe('Optimal Solution (Hash Set)', () => {
    test('should return true if array contains duplicates', () => {
      expect(solution([1, 2, 3, 1])).toBe(true);
      expect(solution([1, 2, 3, 4, 5, 6, 1])).toBe(true);
    });

    test('should return false if array has no duplicates', () => {
      expect(solution([1, 2, 3, 4])).toBe(false);
      expect(solution([99])).toBe(false);
    });

    test('should handle multi-duplicate elements', () => {
      expect(solution([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
    });

    test('should handle single element', () => {
      expect(solution([1])).toBe(false);
    });

    test('should handle empty array', () => {
      expect(solution([])).toBe(false);
    });
  });

  describe('Alternative Solutions', () => {
    test('bruteForce approach should work correctly', () => {
      expect(bruteForce([1, 2, 3, 1])).toBe(true);
      expect(bruteForce([1, 2, 3, 4])).toBe(false);
    });

    test('all approaches should give same result', () => {
      const testCases = [
        [1, 2, 3, 1],
        [1, 2, 3, 4],
        [99],
        [1, 1],
        [1, 2, 3, 4, 5],
      ];

      testCases.forEach((nums) => {
        const optimal = solution(nums);
        const brute = bruteForce(nums);
        expect(optimal).toBe(brute);
      });
    });
  });
});
