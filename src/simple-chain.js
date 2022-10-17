const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (typeof value === "undefined") {
      this.arr.push(`( )~~`);
    } else {
      this.arr.push(`( ${value} )~~`);
    }
    return this;
  },
  removeLink(position) {
    if (
      isNaN(position) ||
      !Number.isInteger(position) ||
      position > this.arr.length - 1 ||
      position <= 0
    ) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.arr.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let elemToModif = this.arr[this.arr.length - 1]; // string
    let corrElem = elemToModif.substring(0, elemToModif.length - 2);
    this.arr.pop();
    this.arr.push(corrElem);
    let str = this.arr.join("");
    this.arr = [];
    return str;
  },
};

module.exports = {
  chainMaker,
};
