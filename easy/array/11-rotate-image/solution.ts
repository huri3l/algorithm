/**
 * Rotate Image
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/770/
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 *
 * Transpose (switch [i][j] with [j][i]) and then flip the rows
 */
export function solution(matrix: number[][]): number[][] {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }

  return matrix
};