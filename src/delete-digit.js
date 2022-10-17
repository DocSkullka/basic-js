const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numbers = []

  n.toString().split('').map((item, index, array) => {
    const temp = [...array];
    temp.splice(index, 1)

    numbers.push(+temp.join(''))
  }) 

  return Math.max(...numbers)
}

module.exports = {
  deleteDigit
};
