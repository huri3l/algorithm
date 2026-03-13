import { solution } from "./solution";
import { bruteForce } from "./alternative-solutions";

describe('Intersection of Two Arrays II', () => {
  describe('Main Solution (Hash Set)', () => {
    test('should find intersection (order independent)', () => {
      expect(solution([1,2,2,1], [2,2])).toEqual([2,2]);
      expect(solution([4,9,5], [9,4,9,8,4])).toEqual(expect.arrayContaining([4, 9]));
    });
  });

  describe('Alternative Solutions', () => {
    test('bruteForce should find intersection', () => {
      expect(bruteForce([1,2,2,1], [2,2])).toEqual([2,2]);
      expect(bruteForce([4,9,5], [9,4,9,8,4])).toEqual(expect.arrayContaining([4, 9]));
    });
  });
});
