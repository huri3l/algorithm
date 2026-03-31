/**
 * Valid Sudoku
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * Loop over the board indexes to find duplicates on x and y axis (validate rows and columns)
 */
export function rowAndColValidationOnly(board: string[][]): boolean {
  let valid = true;

  outer: for (let i = 0; i < 9; i++) {
    const row = new Set<number>();
    const col = new Set<number>();

    for (let j = 0; j < 9; j++) {
      const rowNum = Number(board[i][j])
      const colNum = Number(board[j][i])

      if (!Number.isNaN(rowNum)) {
        if (row.has(rowNum)) {
          valid = false;
          break outer;
        } else {
          row.add(rowNum);
        }
      }

      if (!Number.isNaN(colNum)) {
        if (col.has(colNum)) {
          valid = false;
          break outer;
        } else {
          col.add(colNum)
        }
      }
    }
  }

  return valid;
}