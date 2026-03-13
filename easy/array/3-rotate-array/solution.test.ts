import { solution } from './solution';

describe('Rotate Array', () => {
  test('should rotate array to the right by k steps', () => {
    const nums1 = [1, 2, 3, 4, 5, 6, 7];
    solution(nums1, 3);
    expect(nums1).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  test('should handle k larger than array length', () => {
    const nums2 = [1, 2, 3, 4, 5, 6, 7];
    solution(nums2, 10); // 10 % 7 = 3
    expect(nums2).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  test('should handle k = 0', () => {
    const nums3 = [1, 2, 3];
    solution(nums3, 0);
    expect(nums3).toEqual([1, 2, 3]);
  });

  test('should handle k = array length', () => {
    const nums4 = [1, 2, 3];
    solution(nums4, 3);
    expect(nums4).toEqual([1, 2, 3]);
  });

  test('should handle single element', () => {
    const nums5 = [1];
    solution(nums5, 1);
    expect(nums5).toEqual([1]);
  });

  test('should handle two elements', () => {
    const nums6 = [1, 2];
    solution(nums6, 1);
    expect(nums6).toEqual([2, 1]);
  });
});
