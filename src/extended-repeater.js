const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, {repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|'}) {
  const addIt = addition === undefined ? undefined : '' + addition;
  const strIt = '' + str;

  const strAddition = addIt ? new Array(additionRepeatTimes).fill(addIt).join(additionSeparator) : '';
  return new Array(repeatTimes).fill(`${strIt}${strAddition}`).join(separator);
}

module.exports = {
  repeater
};
