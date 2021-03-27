const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = {}) {
  str = String(str);

  options.repeatTimes = typeof(options.repeatTimes) == 'undefined' ? 1 : options.repeatTimes;
  options.separator = typeof(options.separator) == 'undefined' ? '+' : options.separator;
  options.addition = typeof(options.addition) == 'undefined' ? '' : options.addition;
  options.additionRepeatTimes = typeof(options.additionRepeatTimes) == 'undefined' ? 1 : options.additionRepeatTimes;
  options.additionSeparator = typeof(options.additionSeparator) == 'undefined' ? '|' : options.additionSeparator;

  let addition = Array(options.additionRepeatTimes).fill(undefined).map(item => String(options.addition)).join(options.additionSeparator);
  let result = Array(options.repeatTimes).fill(undefined).map(item => str + addition).join(options.separator);
  return result;
};
  

console.log(module.exports(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }));