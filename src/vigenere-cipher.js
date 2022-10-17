const { NotImplementedError } = require("../extensions/index.js");

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
  constructor(type) {
    this.alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    this.type = type;
    if (this.type === undefined || this.type === true) {
      this.type = "direct";
    }
    if (this.type === false) {
      this.type = "reverse";
    }
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    let messageL = message.toLowerCase();
    let messageArr = messageL.split("");
    let messageArrIndexes = []; // [messageLetterNum, messageLetterNum...]
    let indexSpacesArr = [];
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(messageArr[i])) {
        messageArrIndexes.push(this.alphabet.indexOf(messageArr[i]));
      } else {
        messageArrIndexes.push(message[i]);
        indexSpacesArr.push(i);
      }
    }
    let arrWithKey = []; // ['k', "e", 'y', "k",...]
    let keyL = key.toLowerCase();
    for (let i = 0; i < message.length; i++) {
      if (i >= keyL.length) {
        let ind = i;

        while (ind > keyL.length - 1) {
          ind = ind - keyL.length;
        }

        arrWithKey.push(keyL[ind]);
      } else {
        arrWithKey.push(keyL[i]);
      }
    }

    let arrKeyIndexes = []; // [ keynum, keynum...]
    for (let i = 0; i < arrWithKey.length; i++) {
      arrKeyIndexes.push(this.alphabet.indexOf(arrWithKey[i]));
    }

    for (let i = 0; i < indexSpacesArr.length; i++) {
      arrKeyIndexes.splice(indexSpacesArr[i], 0, " ");
    }

    let sumNumArr = [];
    for (let i = 0; i < messageArrIndexes.length; i++) {
      if (typeof messageArrIndexes[i] === "number") {
        let sum = messageArrIndexes[i] + arrKeyIndexes[i];
        if (sum >= 26) {
          sum = sum - 26;
        }
        sumNumArr.push(sum);
      } else {
        sumNumArr.push(messageArrIndexes[i]);
      }
    }

    let resArr = [];
    for (let i = 0; i < sumNumArr.length; i++) {
      if (typeof sumNumArr[i] === "number") {
        let letter = this.alphabet[sumNumArr[i]].toUpperCase();
        resArr.push(letter);
      } else {
        resArr.push(sumNumArr[i]);
      }
    }
    // check for type
    if (this.type === "direct") {
      let resStr = resArr.join("");
      return resStr;
    }
    if (this.type === "reverse") {
      let resStr = resArr.reverse().join("");
      return resStr;
    }
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }
    let messageL = encryptedMessage.toLowerCase();
    let messageArr = messageL.split("");
    let messageArrIndexes = []; // [messageLetterNum, messageLetterNum...]
    let indexSpacesArr = [];
    for (let i = 0; i < messageL.length; i++) {
      if (this.alphabet.includes(messageArr[i])) {
        messageArrIndexes.push(this.alphabet.indexOf(messageArr[i]));
      } else {
        messageArrIndexes.push(messageL[i]);
        indexSpacesArr.push(i);
      }
    }
    let arrWithKey = []; // ['k', "e", 'y', "k",...]
    let keyL = key.toLowerCase();
    for (let i = 0; i < messageL.length; i++) {
      if (i >= keyL.length) {
        let ind = i;

        while (ind > keyL.length - 1) {
          ind = ind - keyL.length;
        }

        arrWithKey.push(keyL[ind]);
      } else {
        arrWithKey.push(keyL[i]);
      }
    }

    let arrKeyIndexes = []; // [ keynum, keynum...]
    for (let i = 0; i < arrWithKey.length; i++) {
      arrKeyIndexes.push(this.alphabet.indexOf(arrWithKey[i]));
    }

    for (let i = 0; i < indexSpacesArr.length; i++) {
      arrKeyIndexes.splice(indexSpacesArr[i], 0, " ");
    }

    let diffNumArr = [];
    for (let i = 0; i < messageArrIndexes.length; i++) {
      if (typeof messageArrIndexes[i] === "number") {
        let diff = messageArrIndexes[i] - arrKeyIndexes[i];
        if (diff < 0) {
          diff = diff + 26;
        }
        diffNumArr.push(diff);
      } else {
        diffNumArr.push(messageArrIndexes[i]);
      }
    }

    let resArr = [];
    for (let i = 0; i < diffNumArr.length; i++) {
      if (typeof diffNumArr[i] === "number") {
        let letter = this.alphabet[diffNumArr[i]].toUpperCase();
        resArr.push(letter);
      } else {
        resArr.push(diffNumArr[i]);
      }
    }
    // check for type
    if (this.type === "direct") {
      let resStr = resArr.join("");
      return resStr;
    }
    if (this.type === "reverse") {
      let resStr = resArr.reverse().join("");
      return resStr;
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
