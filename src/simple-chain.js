const CustomError = require("../extensions/custom-error");
let result = [];
const chainMaker = {
  getLength() {
    return result.length;
  },
  addLink(value) {
    result.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position > 0 && typeof(position) == 'number' && position < result.length + 1) {
      result.splice(position - 1, 1);
    } else {
      result = [];
      throw {name : "NotImplementedError", message : "too lazy to implement"};
    }
    return this;
  },
  reverseChain() {
    result.reverse();
    return this;
  },
  finishChain() {
    let arr = result.slice();
    result = [];
    return arr.join('~~');
  }
};

module.exports = chainMaker;

// console.log(module.exports.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());
// console.log(module.exports.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').removeLink(5).finishChain());

console.log(chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({0: 'first', 1: 'second', 'length': 2}).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain());