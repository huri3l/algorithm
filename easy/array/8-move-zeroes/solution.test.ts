import { cloneArray } from "./alternative-solutions";
import { solution } from "./solution";

describe('Move Zeroes', () => {
    describe('In place (optimal solution)', () => {
    test('should move zeroes to the end', () => {
      const input = [0, 1, 0, 3, 12];
      solution(input);
      expect(input).toEqual([1, 3, 12, 0, 0]);
    });

    test('should handle array with no zeroes', () => {
      const input = [1, 2, 3];
      solution(input);
      expect(input).toEqual([1, 2, 3]);
    });

    test('should handle array with all zeroes', () => {
      const input = [0, 0, 0];
      solution(input);
      expect(input).toEqual([0, 0, 0]);
    });

    test('should handle empty array', () => {
      const input: number[] = [];
      solution(input);
      expect(input).toEqual([]);
    });

    test('should handle single element', () => {
      const input = [0];
      solution(input);
      expect(input).toEqual([0]);
    });
  })

  describe('Clone Array', () => {
    test('should move zeroes to the end', () => {
        expect(cloneArray([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
      });

      test('should handle array with no zeroes', () => {
        expect(cloneArray([1, 2, 3])).toEqual([1, 2, 3]);
      });

      test('should handle array with all zeroes', () => {
        expect(cloneArray([0, 0, 0])).toEqual([0, 0, 0]);
      });

      test('should handle empty array', () => {
        expect(cloneArray([])).toEqual([]);
      });

      test('should handle single element', () => {
        expect(cloneArray([0])).toEqual([0]);
      });
  })
});
