import { solution } from "./solution";

describe('Plus One', () => {
  describe('Reverse Array Loop', () => {
    test('should sum 1 correctly', () => {
      expect(solution([1,2,3])).toEqual([1,2,4]);
      expect(solution([4,3,2,1])).toEqual([4,3,2,2]);
      expect(solution([9])).toEqual([1,0]);
      expect(solution([9,9,9])).toEqual([1,0,0,0]);
    });
  });
});
