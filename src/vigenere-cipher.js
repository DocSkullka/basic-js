const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (!(message && key)) throw new Error('Incorrect arguments!');

    //65 90

    const messageUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();

    let result = '';
    let k = 0;

    for (let i = 0; i < messageUpper.length; i++) {
      const code = messageUpper.charCodeAt(i)
      if (code > 64 && code < 91) {
        const add = keyUpper.charCodeAt(k) - 65;
        const newCode = code + add > 90 ? code + add - 26 : code + add
        result += String.fromCharCode(newCode);
        k = k + 1 === keyUpper.length ? 0 : k + 1
      } else {
        result += messageUpper[i];
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!(message && key)) throw new Error('Incorrect arguments!');

    const messageUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();

    let result = '';
    let k = 0;

    for (let i = 0; i < messageUpper.length; i++) {
      const code = messageUpper.charCodeAt(i)
      if (code > 64 && code < 91) {
        const add = keyUpper.charCodeAt(k) - 65;
        const newCode = code - add < 65 ? code - add + 26 : code - add
        result += String.fromCharCode(newCode);
        k = k + 1 === keyUpper.length ? 0 : k + 1
      } else {
        result += messageUpper[i];
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
