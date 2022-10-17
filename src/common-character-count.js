const { NotImplementedError } = require("../extensions/index.js");

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
  let arrMore;
  let arrLess;
  if (s1.length >= s2.length) {
    arrMore = s1.split("");
    arrLess = s2.split("");
  } else {
    arrMore = s2.split("");
    arrLess = s1.split("");
  }
  let count = 0;
  let length = arrLess.length;
  for (let i = 0; i < length; i++) {
    let letter = arrLess.pop();

    if (arrMore.includes(letter)) {
      count++;
      let position = arrMore.indexOf(letter);
      arrMore.splice(position, 1);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
