const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  let array = arr.slice();

  array.forEach((item, index, array) => {
    if (item == '--double-next' && index != array.length - 1) {
      array[index] = array[index + 1];
    }

    if (item == '--discard-next' && index != array.length - 1) {
      array[index + 1] = '--to-delete';
    } 

    if (item == '--double-prev' && index != 0) {
      array[index] = array[index - 1];
    }

    if (item == '--discard-prev' && index != 0) {
      array[index - 1] = '--to-delete';
    }

  });

  return array.filter(item => {
    if (typeof(item) == 'string') {
      if (item.substring(0, 2) == '--') {
        return false;
      }
    }
    return true;
  });
 
};

// console.log(module.exports([ '--discard-next', true, '--discard-prev', true, 0, '--discard-prev' ]));
