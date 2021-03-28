const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor(direction) {
    if (direction == true || direction == undefined) {
      this.direction = 'direct';
    } else {
      this.direction = 'reverse';
    }
  }

  encrypt(message, key) {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    message = message.toUpperCase().split('');

    //Create key array same length as message including non-alphabetic characters
    let newKey = [];
    let sdvigator = 0;
    for (let i = 0; i < message.length; i++) {
      if (/[A-Z]/.test(message[i])) {
        newKey.push(key[(i - sdvigator) % key.length].toUpperCase());
      } else {
        sdvigator += 1;
        newKey.push(message[i]);
      }
    }

    //Create cipher
    let result = message.map((item, index) => {
      if (/[A-Z]/.test(item)) {
        return letters[(letters.indexOf(item) + letters.indexOf(newKey[index])) % 26];
      } else {
        return item;
      }
    });

    return this.direction == 'direct' ? result.join('') : result.reverse().join('');

  }    

  decrypt(encryptedMessage, key) {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    encryptedMessage = encryptedMessage.toUpperCase().split('');
    
    //Create key array same length as message including non-alphabetic characters
    let newKey = [];
    let sdvigator = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (/[A-Z]/.test(encryptedMessage[i])) {
        newKey.push(key[(i - sdvigator) % key.length].toUpperCase());
      } else {
        sdvigator += 1;
        newKey.push(encryptedMessage[i]);
      }
    }

    //Create cipher
    let result = encryptedMessage.map((item, index) => {
      if (/[A-Z]/.test(item)) {
        return letters[(26 - letters.indexOf(newKey[index]) + letters.indexOf(item)) % 26];
      } else {
        return item;
      }
    });

    return this.direction == 'direct' ? result.join('') : result.reverse().join('');

  }
}

module.exports = VigenereCipheringMachine;
// let cipre = new VigenereCipheringMachine();
// console.log(cipre.decrypt('AEIHQX SX DLLU!', 'alphonse'));


