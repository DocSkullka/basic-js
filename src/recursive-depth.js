const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.totalDepth = 0;
    this.currentDepth = 0;
    this.c = 0;
  }

  processArr(arr) {
    if (Array.isArray(arr)) {
      this.currentDepth++;

      if (this.currentDepth > this.totalDepth) {
        this.totalDepth = this.currentDepth;
      }

      for (let i = 0; i < arr.length; i++) {
        this.processArr(arr[i]);
      }

      this.currentDepth--;
    }
  }

  calculateDepth(arr) {
    if (this.c < 10) {
      this.c++;
      this.calculateDepth(arr);
    }
    this.totalDepth = 0;
    this.currentDepth = 0;
    this.processArr(arr);
    return this.totalDepth;
  }
}

module.exports = {
  DepthCalculator,
};
