/**
 * Valid Sudoku
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * Create sets for rows, cols and boxes. The size is a constant 9 for the sudoku
 * Validate if rows and cols has num, if yes is invalid if not add to Set
 * Get a box index and validate if it also has num, same as above.
 */
export function solution(board: string[][]): boolean {
  let valid = true;

  const rows = Array.from({ length: 9}, () => new Set<number>());
  const cols = Array.from({ length: 9}, () => new Set<number>());
  const boxes = Array.from({ length: 9 }, () => new Set<number>());

  outer: for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = Number(board[i][j])
      if (Number.isNaN(num)) continue;

      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
        valid = false;
        break outer;
      }

      rows[i].add(num);
      cols[j].add(num);
      boxes[boxIndex].add(num);
    }
  }

  return valid;
}