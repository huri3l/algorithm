import { solution } from './solution';
import { personalBruteForce } from './alternative-solutions';

describe('Best Time to Buy and Sell Stock II', () => {
  describe('Optimal Solution (Greedy)', () => {
    test('should compute maximum profit from multiple transactions', () => {
      expect(solution([7, 1, 5, 3, 6, 4])).toBe(7); // buy 1, sell 5, buy 3, sell 6
    });

    test('should return 0 for descending prices', () => {
      expect(solution([7, 6, 4, 3, 1])).toBe(0);
    });

    test('should handle ascending prices', () => {
      expect(solution([1, 2, 3, 4, 5])).toBe(4); // buy 1, sell 5
    });

    test('should handle single transaction opportunity', () => {
      expect(solution([2, 4, 1])).toBe(2);
    });

    test('should handle two-element array', () => {
      expect(solution([3, 1])).toBe(0);
      expect(solution([1, 5])).toBe(4);
    });
  });

  describe('Alternative Solutions', () => {
    test('personalBruteForce approach should work correctly', () => {
      expect(personalBruteForce([7, 1, 5, 3, 6, 4])).toBe(7);
      expect(personalBruteForce([1, 2, 3, 4, 5])).toBe(4);
    });

    test('all approaches should give same result', () => {
      const testCases = [
        [7, 1, 5, 3, 6, 4],
        [1, 2, 3, 4, 5],
        [7, 6, 4, 3, 1],
        [2, 1, 2, 1, 0, 1],
      ];

      testCases.forEach((prices) => {
        const optimal = solution(prices);
        const brute = personalBruteForce(prices);
        expect(optimal).toBe(brute);
      });
    });
  });
});
