const { NotImplementedError } = require("../extensions/index.js");

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
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let clone = [...arr];
  console.log(clone);
  let resultedArr = [];

  for (let i = 0; i < clone.length; i++) {
    console.log(clone[i]);
    if (clone[i] === "--double-next") {
      if (clone[i + 1]) {
        resultedArr.push(clone[i + 1]);
      } else {
        i++;
      }
    } else if (clone[i] === "--double-prev") {
      if (clone[i - 2] !== "--discard-next" && clone[i - 2]) {
        resultedArr.push(clone[i - 1]);
      }
    } else if (clone[i] === "--discard-next") {
      if (clone[i + 1]) {
        i++;
      }
    } else if (clone[i] === "--discard-prev") {
      if (clone[i - 2] !== "--discard-next") {
        resultedArr.pop();
      }
    } else {
      resultedArr.push(clone[i]);
    }
  }
  return resultedArr;
}

module.exports = {
  transform,
};
