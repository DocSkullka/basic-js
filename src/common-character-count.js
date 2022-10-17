const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1.length === 0 || s2.length === 0) return 0
  const s1Arr = s1.split('');
  const s2Arr = s2.split('');

  return s1Arr.reduce((acc, item) => {
    const index = s2Arr.indexOf(item)
    if (!(index === -1)) {
      s2Arr.splice(index, 1);
      return 1 + acc
    }
    return acc
  }, 0)

}

module.exports = {
  getCommonCharacterCount
};
