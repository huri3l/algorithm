import { rowAndColValidationOnly } from "./alternative-solutions"
import { solution } from "./solution"

const validSudokuBoard = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

const sudokuBoardWithRepeatedRow = [["8","3",".",".","7",".",".",".","8"]
,["6",".",".","1","9","5",".",".","."]
,[".","9",".",".",".",".",".","6","."]
,[".",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

const sudokuBoardWithRepeatedCol = [["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9",".",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

const sudokuBoardWithRepeated3x3 = [["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,[".",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

describe('Valid sudoku', () => {
  describe('Optimal Solution (Single Pass)', () => {
    test('should return true for a valid sudoku board', () => {
      expect(solution(validSudokuBoard)).toBe(true)
    })

    test('should return false for a sudoku board with repetition on X axis', () => {
      expect(solution(sudokuBoardWithRepeatedRow)).toBe(false)
    })

    test('should return false for a sudoku board with repetition on Y axis', () => {
      expect(solution(sudokuBoardWithRepeatedCol)).toBe(false)
    })

    test('should return false for a sudoku board with repetition on 3 x 3 sub-boxes', () => {
      expect(solution(sudokuBoardWithRepeated3x3)).toBe(false)
    })
  })

  describe('Personal Solution (Does not validate 3x3 sub-boxes)', () => {
    test('should return true for a valid sudoku board', () => {
      expect(rowAndColValidationOnly(validSudokuBoard)).toBe(true)
    })

    test('should return false for a sudoku board with repetition on X axis', () => {
      expect(rowAndColValidationOnly(sudokuBoardWithRepeatedRow)).toBe(false)
    })

    test('should return false for a sudoku board with repetition on Y axis', () => {
      expect(rowAndColValidationOnly(sudokuBoardWithRepeatedCol)).toBe(false)
    })
  })
})