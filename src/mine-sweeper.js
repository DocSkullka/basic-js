const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = new Array(matrix.length).fill(0);
  
  for (let i = 0; i < matrix.length; i++) {
    result[i] = new Array(matrix[i].length).fill(0);

    for (let j = 0; j < matrix.length; j++) {
      let bombs = 0;

      if (matrix[i][j + 1]) { bombs++ }
      if (matrix[i][j - 1]) { bombs++ }

      if (i + 1 in matrix) {
        if (matrix[i + 1][j - 1]) { bombs++ }
        if (matrix[i + 1][j]) { bombs++ }
        if (matrix[i + 1][j + 1]) { bombs++ }
      }

      if (i - 1 in matrix ) {
        if (matrix[i - 1][j - 1]) { bombs++ }
        if (matrix[i - 1][j]) { bombs++ }
        if (matrix[i - 1][j + 1]) { bombs++ }
      }

      result[i][j] = bombs
    }
  }

  return result
}

module.exports = {
  minesweeper
};
