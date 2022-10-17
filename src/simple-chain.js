const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (!this.chain) {
      this.chain = [];
    }
    if (value === undefined) {
      this.chain.push('( )');
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this
  },
  removeLink(position) {
    if (!this.chain) {
      this.chain = [];
    }
    if (typeof position === 'number' && (position - 1) in this.chain) {
      this.chain.splice(position - 1, 1)
    } else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    return this
  },
  reverseChain() {
    if (!this.chain) {
      this.chain = [];
    }
    this.chain.reverse();
    return this
  },
  finishChain() {
    const chainStr = this.chain.join('~~');
    this.chain = [];
    return chainStr
  }
};

module.exports = {
  chainMaker
};
