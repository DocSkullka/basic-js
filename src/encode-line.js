const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return '';
  
  const result = []
  let symbol = str[0]
  let count = 0

  str.split('').forEach((item) => {
    if (item === symbol) {
      count++;
    } else {
      result.push(`${count === 1 ? '' : count}${symbol}`);
      symbol = item;
      count = 1;
    }
  })

  result.push(`${count === 1 ? '' : count}${symbol}`)

  return result.join('')
}

module.exports = {
  encodeLine
};
