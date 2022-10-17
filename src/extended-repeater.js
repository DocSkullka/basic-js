const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.separator) {
    options.separator = "+";
  }
  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }
  if (options.addition === false) {
    options.addition = "false";
  }
  if (options.addition === null) {
    options.addition = "null";
  }

  let separator;
  let addSeparator;
  const rTimes = options.repeatTimes;
  if (options.separator) {
    separator = options.separator.toString();
  }
  const addition = options.addition;
  const addRTimes = options.additionRepeatTimes;
  if (options.additionSeparator) {
    addSeparator = options.additionSeparator.toString();
  }

  let strAdd = "";
  let resStr = "";

  if (addition) {
    let additionArr = [];
    if (addRTimes) {
      for (let i = 1; i <= addRTimes; i++) {
        additionArr.push(addition);
      }
      strAdd = additionArr.join(addSeparator);
    } else {
      strAdd += addition;
    }
  }

  if (rTimes) {
    let strArr = [];
    for (let i = 1; i <= rTimes; i++) {
      let elem = str + strAdd;
      strArr.push(elem);
    }
    resStr = strArr.join(separator);
  } else {
    resStr = resStr + str + strAdd;
  }
  return resStr;
}

module.exports = {
  repeater,
};
