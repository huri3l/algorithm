import { solution } from './solution';

describe('Remove Duplicates from Sorted Array', () => {
  test('should modify array in-place and return correct length', () => {
    const nums1 = [1, 1, 2];
    const len1 = solution(nums1);
    expect(len1).toBe(2);
    expect(nums1.slice(0, len1)).toEqual([1, 2]);
  });

  test('should handle longer array with multiple duplicates', () => {
    const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const len2 = solution(nums2);
    expect(len2).toBe(5);
    expect(nums2.slice(0, len2)).toEqual([0, 1, 2, 3, 4]);
  });

  test('should handle array with no duplicates', () => {
    const nums3 = [1, 2, 3, 4, 5];
    const len3 = solution(nums3);
    expect(len3).toBe(5);
    expect(nums3.slice(0, len3)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle single element array', () => {
    const nums4 = [1];
    const len4 = solution(nums4);
    expect(len4).toBe(1);
    expect(nums4.slice(0, len4)).toEqual([1]);
  });
});
