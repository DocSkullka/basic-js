const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  if (arr.length === 0) return arr

  const instructions = ['--discard-next','--discard-prev','--double-next','--double-prev'];
  const result = [];
  let i = 0;

  while (i < arr.length) {
    switch (arr[i]) {
      case '--discard-next':
        if (arr[i + 1] && !instructions.includes(arr[i + 1])) {
          i += 1;
        }
        result.push('')
        break
      case '--discard-prev':
        if (result[result.length - 1]) {
          result.pop()
        }
        result.push('')
        break
      case '--double-next':
        if (arr[i + 1] && !instructions.includes(arr[i + 1])) {
          result.push(arr[i + 1])
          result.push(arr[i + 1])
          i += 1;
        }
        break
      case '--double-prev': 
        if (result[result.length - 1]) {
          result.push(result[i - 1])
        }
        result.push('')
        break
      default:
        result.push(arr[i])
    }
    i += 1;
  }

  return result.filter(item => item)
}

module.exports = {
  transform
};
